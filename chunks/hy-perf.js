// js/hyPerfProbe.js (v1)
// 階段 0：效能採樣（不改遊戲邏輯，只量測耗時）
//
// 開啟方式（任一）：
//   ① 網址加 ?perf=1 或 ?perf=summary
//   ② localStorage.setItem('hy_perf','1')
//   ③ Console：HY.Perf.enable()
//
// 指令：
//   HY.Perf.report()      → 印出彙總表
//   HY.Perf.reset()       → 清空統計
//   HY.Perf.disable()     → 關閉
//   HY.Perf.slow(8)       → 只顯示最慢 8 項（預設 12）
window.HY = window.HY || {};
(function () {
    'use strict';

    var THRESH_WARN_MS = 16;
    var AUTO_REPORT_MS = 12000;
    var _bootT0 = (typeof performance !== 'undefined' && performance.now)
        ? performance.now() : Date.now();

    function parseEnabled() {
        try {
            var q = String(window.location.search || '');
            if (/\bperf=(1|summary|true)\b/i.test(q)) return true;
            if (window.localStorage && localStorage.getItem('hy_perf') === '1') return true;
        } catch (e) { }
        return false;
    }

    function autoSummary() {
        try {
            return /\bperf=summary\b/i.test(String(window.location.search || ''));
        } catch (e) { return false; }
    }

    var Perf = {
        enabled: false,
        autoSummary: false,
        _stats: {},
        _events: {},
        _wrapDone: false,
        _combatHooked: false,
        _autoTimer: null,

        now: function () {
            return (typeof performance !== 'undefined' && performance.now)
                ? performance.now() : Date.now();
        },

        enable: function (opts) {
            opts = opts || {};
            this.enabled = true;
            if (opts.autoSummary || autoSummary()) this.autoSummary = true;
            try { localStorage.setItem('hy_perf', '1'); } catch (e) { }
            this._installWraps();
            this._hookCombatWhenReady();
            this._startAutoReport();
            console.log('%c[HY.Perf] 已開啟 — report() 看彙總；>16ms 會 warn', 'color:#00e5ff;font-weight:bold');
            return this;
        },

        disable: function () {
            this.enabled = false;
            this._stopAutoReport();
            try { localStorage.removeItem('hy_perf'); } catch (e) { }
            console.log('[HY.Perf] 已關閉');
            return this;
        },

        reset: function () {
            this._stats = {};
            this._events = {};
            return this;
        },

        count: function (label, n) {
            if (!this.enabled) return;
            var k = label || '?';
            var e = this._events[k] || { n: 0 };
            e.n += (typeof n === 'number' ? n : 1);
            this._events[k] = e;
        },

        record: function (label, ms, meta) {
            if (!this.enabled) return;
            var m = (typeof ms === 'number' && isFinite(ms)) ? ms : 0;
            var s = this._stats[label] || { n: 0, sum: 0, max: 0, last: 0 };
            s.n += 1;
            s.sum += m;
            s.last = m;
            if (m > s.max) s.max = m;
            this._stats[label] = s;
            if (m >= THRESH_WARN_MS) {
                /* 首載指標動輒數百～數千 ms，不用 16ms 單幀閾值告警 */
                if (label.indexOf('boot.') === 0 && m < 3000) { return; }
                var extra = meta ? (' ' + JSON.stringify(meta)) : '';
                console.warn('[HY.Perf] 慢任務 ' + label + ' ' + m.toFixed(1) + 'ms' + extra);
            }
        },

        begin: function (label) {
            if (!this.enabled) return null;
            var self = this;
            var t0 = self.now();
            return function end(meta) {
                self.record(label, self.now() - t0, meta);
            };
        },

        time: function (label, fn) {
            if (!this.enabled) return fn();
            var t0 = this.now();
            var out;
            try { out = fn(); return out; }
            finally { this.record(label, this.now() - t0); }
        },

        noteBootComplete: function (loaded, total) {
            var boot = window.HY_BOOT;
            var loaderMs = (boot && typeof boot.t0 === 'number')
                ? (this.now() - boot.t0) : null;
            var wallMs = this.now();
            if (loaderMs != null) {
                this.record('boot.loaderTotal', loaderMs, { loaded: loaded, total: total });
            }
            this.record('boot.wallToReady', wallMs, { loaded: loaded, total: total });
            if (boot && boot.earlyPlayable && typeof boot.playableWallMs === 'number') {
                this.record('boot.playableWall', boot.playableWallMs, {
                    at: boot.playableLoaded, total: total
                });
            }
            /* 探針在最末支腳本才載入；此值僅表示「最後幾支腳本＋DOM 就緒」尾段 */
            this.record('boot.tailAfterProbe', this.now() - _bootT0, { loaded: loaded, total: total });
            if (this.enabled) {
                var a = loaderMs != null ? loaderMs.toFixed(0) : '?';
                console.log(
                    '[HY.Perf] 首載：BootLoader 載 JS ≈ ' + a + 'ms｜自開頁到可玩 ≈ ' +
                    wallMs.toFixed(0) + 'ms（' + loaded + '/' + total + ' 支）'
                );
            }
        },

        noteStandalone: function () {
            if (window.__HY_STANDALONE__) this.count('env.standalone', 1);
        },

        slow: function (n) {
            this._slowLimit = (typeof n === 'number' && n > 0) ? n : 12;
            return this;
        },

        report: function () {
            var stats = this._stats;
            var keys = Object.keys(stats);
            if (!keys.length) {
                console.log('[HY.Perf] 尚無 render 樣本（請操作遊戲：掛機／切頁／開行囊／天賦）');
                return [];
            }
            keys.sort(function (a, b) { return stats[b].max - stats[a].max; });
            var limit = this._slowLimit || 24;
            var rows = [];
            for (var i = 0; i < keys.length && i < limit; i++) {
                var k = keys[i];
                var s = stats[k];
                rows.push({
                    項目: k,
                    次數: s.n,
                    平均ms: +(s.sum / s.n).toFixed(2),
                    最大ms: +s.max.toFixed(2),
                    最近ms: +s.last.toFixed(2)
                });
            }
            console.log('%c[HY.Perf] 耗時排行（依最大 ms）', 'color:#c89d54;font-weight:bold');
            console.table(rows);

            var evKeys = Object.keys(this._events);
            if (evKeys.length) {
                var evRows = evKeys.map(function (ek) {
                    return { 事件: ek, 次數: Perf._events[ek].n };
                });
                console.log('%c[HY.Perf] 呼叫次數', 'color:#94a3b8;font-weight:bold');
                console.table(evRows);
            }
            return rows;
        },

        _startAutoReport: function () {
            var self = this;
            if (!self.autoSummary || self._autoTimer) return;
            self._autoTimer = setInterval(function () {
                if (self.enabled) self.report();
            }, AUTO_REPORT_MS);
        },

        _stopAutoReport: function () {
            if (this._autoTimer) {
                clearInterval(this._autoTimer);
                this._autoTimer = null;
            }
        },

        _wrapProto: function (Ctor, method, label) {
            if (!Ctor || !Ctor.prototype || typeof Ctor.prototype[method] !== 'function') return;
            if (Ctor.prototype[method].__hyPerfWrapped) return;
            var orig = Ctor.prototype[method];
            var self = this;
            Ctor.prototype[method] = function () {
                var ctx = this;
                var args = arguments;
                if (!self.enabled) return orig.apply(ctx, args);
                return self.time(label, function () { return orig.apply(ctx, args); });
            };
            Ctor.prototype[method].__hyPerfWrapped = true;
        },

        _wrapFn: function (obj, key, label) {
            if (!obj || typeof obj[key] !== 'function') return;
            if (obj[key].__hyPerfWrapped) return;
            var orig = obj[key];
            var self = this;
            obj[key] = function () {
                var ctx = this;
                var args = arguments;
                if (!self.enabled) return orig.apply(ctx, args);
                return self.time(label, function () { return orig.apply(ctx, args); });
            };
            obj[key].__hyPerfWrapped = true;
        },

        _installWraps: function () {
            if (this._wrapDone) return;
            this._wrapDone = true;
            var HY = window.HY;
            if (!HY) return;

            /* renderExploreAndCombat / martial / inventory 由 main.js renderAll 分項計時 */
            this._wrapProto(HY.UIDexAtb, 'updateArenaBarsDOM', 'render.arenaBars');
            this._wrapProto(HY.UIDexAtb, 'renderFixedMaxBattleArena', 'render.arenaFull');
            this._wrapProto(HY.UITalent, 'open', 'render.talentOpen');
            this._wrapProto(HY.UITalent, 'renderSidePanel', 'render.talentSidePanel');
            if (HY.BagOverhaul) {
                this._wrapFn(HY.BagOverhaul, 'open', 'render.bagOpen');
                this._wrapFn(HY.BagOverhaul, 'refresh', 'render.bagRefresh');
            }
            if (HY.UIEquipMarket) {
                this._wrapProto(HY.UIEquipMarket, 'renderInventoryTab', 'render.inventoryTab');
            }
            if (HY.UICharacterParty) {
                this._wrapProto(HY.UICharacterParty, 'renderCharacterPanel', 'render.charPanel');
                this._wrapProto(HY.UICharacterParty, 'syncVitals', 'render.charVitals');
            }
            if (HY.CharacterSystem) {
                this._wrapProto(HY.CharacterSystem, 'getDerivedStatsForChar', 'data.derivedStats');
            }
        },

        _hookCombatWhenReady: function () {
            var self = this;
            if (self._combatHooked) return;
            var tries = 0;
            var t = setInterval(function () {
                tries++;
                var game = window.HY && window.HY.game;
                if (!game || !game.combatSys) {
                    if (tries > 120) clearInterval(t);
                    return;
                }
                clearInterval(t);
                if (self._combatHooked) return;
                var core = game.combatSys;
                var orig = core.onUpdateUI;
                if (typeof orig !== 'function') { self._combatHooked = true; return; }
                core.onUpdateUI = function () {
                    self.count('combat.onUpdateUI');
                    if (!self.enabled) return orig();
                    return self.time('combat.onUpdateUI→lite', function () { return orig(); });
                };
                self._combatHooked = true;
            }, 50);
        }
    };

    Perf._slowLimit = 24;
    window.HY.Perf = Perf;
    Perf.noteStandalone();

    if (parseEnabled()) {
        Perf.enable({ autoSummary: autoSummary() });
    }
})();
