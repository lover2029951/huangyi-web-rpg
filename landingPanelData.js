// landingPanelData.js — 登入頁「更新公告」與「玩法指南」單一資料源
// 部署：與 index.html 同目錄（huangyi-dist）；本機預覽見 _landing.html
(function (root) {
    'use strict';

    var META = {
        titleSub: '時空浪人 · Lv.300 破碎虛空傳奇',
        newsVer: 'v688 · 2026-03-11',
        gameVer: 688,
        guideBadge: '全系統 40+ 項',
        metaDesc: 'Path of Exile 風格武俠網頁 RPG —— 異界輿圖、地心礦坑、武魂附身、山海九域套裝、九宮格陣盤、PoE 裝備工藝。'
    };

    var NEWS = [
        {
            tag: 'fix', tagLabel: '修正',
            title: '戰鬥九宮格開頁錯位',
            date: '2026-03-11',
            bullets: [
                '陣盤改為讀檔後<b>立刻啟動</b>，不再延遲 1 秒以上',
                '舞台格位<b>優先讀陣盤</b>，避免先用預設 1→4→7 序',
                '戰鬥中陣盤就緒後會自動補一次舞台同步'
            ]
        },
        {
            tag: 'add', tagLabel: '新增',
            title: '山海九域裝備套裝（v685~686）',
            date: '2026-03-10',
            bullets: [
                '九卷山海地圖各一套<b>紫裝五件套</b>：圖鑑、掉落、合成、套裝加成',
                '九種<b>流派定位</b>（破甲、暴擊、持續傷、攻速…）與 2~5 件套效',
                '「鎮」套：<b>SHJ_ZHEN_PROC</b> 敵方全體削 5% 最大氣血（機率觸發）'
            ]
        },
        {
            tag: 'add', tagLabel: '新增',
            title: '區域 BOSS 全格舞台',
            date: '2026-03-10',
            bullets: [
                '各時空探索地圖的<b>區域王</b>佔滿敵方九宮格中央',
                '與一般小怪共用 ATB 戰鬥，掉落與挑戰次數獨立結算'
            ]
        },
        {
            tag: 'new', tagLabel: '新增',
            title: '三套獨立戰鬥系統',
            date: '2026-11-05',
            bullets: [
                '<b>時空內掛</b>：一般戰鬥，每角色獨立戰術',
                '<b>打圖戰術</b>：輿圖專用；<b>礦坑戰術</b>：地心礦坑專用',
                '三者互斥；「直接衝霸主」為隊伍共識開關'
            ]
        },
        {
            tag: 'add', tagLabel: '新增',
            title: '異界輿圖 T1~T16',
            date: '2026-11-05',
            bullets: [
                '地圖通貨改造、輿圖天賦 33 節點、霸主首殺 +1 天賦點',
                '精隨詞綴怪約 3%；硫磺主要由打圖掉落'
            ]
        },
        {
            tag: 'bal', tagLabel: '平衡',
            title: '獎勵曲線重製',
            date: '2026-11-05',
            bullets: [
                '怪物獎勵 <code>lv^0.8</code> + 等級差衰減（低於自身 5 級以上大幅打折）',
                'Lv.300 約需千場以上累積，越後期越難練'
            ]
        }
    ];

    /** @type {{ico:string,title:string,body:string,span2?:boolean}[]} */
    var GUIDES = [
        {
            ico: '⚔️', title: '核心循環',
            body: '打怪升等 → 累積裝備與通貨 → 挑戰輿圖／礦坑 → 工藝詞綴 → 推更高階內容。<br>' +
                '<b>一般戰鬥</b>主產經驗／武點／銀兩；<b>裝備、地圖、精隨、硫磺</b>以打圖與礦坑為主。'
        },
        {
            ico: '🛸', title: '時空探索（一般戰鬥）',
            body: '中間分頁「🌀 時空探索」選地圖 → 遭遇戰。<br>' +
                '可開<b>自動戰鬥</b>與「戰勝連刷」；頂欄「🎛️ 時空內掛」調每角戰術。<br>' +
                '戰鬥舞台為<b>九宮格</b>，站位與「陣盤」一致。'
        },
        {
            ico: '☯️', title: '九宮格陣盤',
            body: '「👥 角色 & 組隊」或修仙面板內調整<b>0~8 九格站位</b>。<br>' +
                '每格有攻防血等加成；陣型相剋敵方陣法時我方傷害約 <b>×1.12</b>。<br>' +
                '開戰前會自動補齊未站位角色。'
        },
        {
            ico: '⏱️', title: 'ATB 集氣戰鬥',
            body: '氣滿 100% 自動出手；面板顯示<b>下一招預告</b>、門派特色計數、戰力。<br>' +
                '五行／八元素相剋、暴擊、格擋、狀態異常與詞綴怪機制一併生效。'
        },
        {
            ico: '💊', title: '三套自動戰鬥',
            span2: true,
            body: '🎛️ <b>時空內掛</b>（探索遭遇）｜🗺️ <b>打圖戰術</b>（輿圖 40+ 項）｜⛏️ <b>礦坑戰術</b>（深度／藥線 40+ 項）<br>' +
                '同一時間只能進行一種戰鬥；各角色設定獨立，切換操控角色會套用該角檔案。<br>' +
                '6 種 BUFF 丹可設自動續杯（可限霸主階段）。'
        },
        {
            ico: '🗺️', title: '異界輿圖（打圖）',
            body: '倉庫 → <b>地圖倉庫</b> → 選圖 → 通貨改造 →「開啟地圖戰鬥」。<br>' +
                '階級 <code>T1~T16</code>；詞綴影響怪物數、掉落與難度。'
        },
        {
            ico: '🛠️', title: '地圖通貨改造',
            body: '白圖無詞綴：蛻變（白→藍）→ 增幅 → 點金（藍→黃）→ 混沌重洗／重鑄。<br>' +
                '改造石、點金石、混沌石等皆可在打圖與商店取得。'
        },
        {
            ico: '👑', title: '霸主與輿圖天賦',
            body: '清小怪後<b>霸主</b>登場；擊殺約 <b>25%</b> 掉高一階地圖。<br>' +
                '每階霸主<b>首殺</b>永久 +1 輿圖天賦點；「🌳 輿圖天賦」33 節點僅地圖內生效。'
        },
        {
            ico: '⛏️', title: '地心礦坑',
            body: '頂欄「⛏️ 地心礦坑」：無限深度推進，消耗<b>硫磺</b>燃料。<br>' +
                '獨立戰鬥容器與戰術；越深自動提高敵方血線與己方藥線。<br>' +
                '掉落：珠寶原石、化石、礦坑專屬通貨。'
        },
        {
            ico: '🛡️', title: 'PoE 十部位裝備',
            body: '白／藍／黃／暗金稀有度；固定前綴、隨機後綴、六連孔與鑲嵌。<br>' +
                '倉庫可篩選、批量販賣、地圖倉／通貨倉分欄管理。'
        },
        {
            ico: '⚒️', title: '通貨工藝',
            body: '「📖 武學圖鑑」查裝備底材；工作台支援蛻變、增幅、重鑄、湮滅詞綴等。<br>' +
                '混沌／崇高／無效石等遵循 PoE 風格機率與詞綴池。'
        },
        {
            ico: '🔮', title: '精隨系統',
            body: '打圖約 3% 精隨禁錮怪（紫光）；擊殺<b>必掉</b>對應家族精隨。<br>' +
                '精隨可<b>保證</b>覆寫一條詞綴，是快速提升關鍵屬性的捷徑。'
        },
        {
            ico: '🪨', title: '化石與珠寶',
            body: '<b>化石</b>：重骰時保證／排除／加權特定詞綴群。<br>' +
                '<b>珠寶</b>：鑲天賦樹插槽，四通道加成（百分比／固定／more／特殊）。'
        },
        {
            ico: '🌳', title: '天賦樹與昇華',
            body: '大型 POE 式天賦網（已武俠化用語）；升級獲得天賦點。<br>' +
                '<b>昇華</b> 21 門分支各有核心機制；專精（Mastery）三選一。<br>' +
                '頂欄可開全螢幕天賦／昇華介面。'
        },
        {
            ico: '🐉', title: '武魂附身',
            body: '每角色附身 1 隻武魂靈體，戰鬥舞台顯示於背後。<br>' +
                '育成、突破、區域素材；武魂技能與光圈特效參與戰鬥演出。'
        },
        {
            ico: '🗺️', title: '山海經圖',
            body: '底部抽屜「山海經」：九域古地圖可拖曳，點異獸遭遇戰。<br>' +
                '「📖 圖鑑」記錄擊破；部分巨獸佔滿敵方九宮格。'
        },
        {
            ico: '📿', title: '山海九域套裝',
            body: '每域一套紫裝五件（肩／甲／腰／靴／飾），圖鑑解鎖配方可合成。<br>' +
                '2~5 件套效各具流派；「鎮」套有機率全體削敵最大氣血。'
        },
        {
            ico: '👹', title: '區域 BOSS',
            body: '各探索地圖定點區域王，挑戰次數與掉落獨立。<br>' +
                '擊敗後解鎖更深紀元或額外獎勵（依地圖設定）。'
        },
        {
            ico: '⛩️', title: '二十五門派',
            body: '拜入門派獲<b>獨佔機制</b>（劍樁、陰陽出手、蠱術等）與技能池。<br>' +
                '「⛩️ 門派」分頁查特色；戰鬥面板即時顯示門派計數。'
        },
        {
            ico: '🧘', title: '修仙境界',
            body: '道心、渡劫、靈根淬鍊、經脈、破境材料（部分境界預留擴充）。<br>' +
                '境界影響屬性上限與可進入的時空。'
        },
        {
            ico: '👥', title: '角色與組隊',
            body: '最多 <b>5 人</b>上陣；左欄切換操控角色、批量加點（右鍵）。<br>' +
                '共享紋銀／武點；各角獨立背包、裝備、天賦、武魂。'
        },
        {
            ico: '🏯', title: '幫會建設',
            body: '八大建築排班生產，<b>每棟最多 3 人</b>。<br>' +
                '幫貢：祝福（每角限 1 個生效）、後天改命、技能獸與秘境事件。'
        },
        {
            ico: '🏘️', title: '我的小鎮',
            body: '經營產出、治安、魅力；名人入住、節慶、公會委託。<br>' +
                '好友同行光環可加成小鎮收入與全隊屬性。'
        },
        {
            ico: '🤝', title: '江湖好友',
            body: '結交名人後可「同行」加入 5 人隊伍；離線仍會行動補算。<br>' +
                '送禮／切磋／論道提升好感；可出團遠征、排行榜與羈絆任務。'
        },
        {
            ico: '🎰', title: '時空大樂透',
            body: '消耗紋銀抽獎，可獲通貨、裝備、名人碎片等。<br>' +
                '守門活動與特獎池依版本更新。'
        },
        {
            ico: '⚓', title: '金司馬區',
            body: '船運貿易、雇工人、重組器、符文鑲嵌、自動打圖跑腿。<br>' +
                '倉庫容量提升至 <b>2000</b>（基礎 ×10）。'
        },
        {
            ico: '🏪', title: '時空黑市',
            body: '神秘寶箱、特價裝備、通貨貨兌換；與打圖掉落互補。'
        },
        {
            ico: '🤝', title: '群俠助戰',
            body: '招募歷史群俠提供被動與戰鬥協助（非上陣隊員位）。<br>' +
                '與好友「同行」系統不同，可並存。'
        },
        {
            ico: '🌙', title: '離線掛機',
            body: '關閉分頁後依設定模式補算收益（有期數上限）。<br>' +
                '頂欄可調掛機模式與效率；不影響雲端排行上傳間隔。'
        },
        {
            ico: '💀', title: '復活機制',
            body: '每角獨立 <b>3 次</b>復活；單人死亡即刻消耗自身次數復活。<br>' +
                '打圖中復活技能每圖每人限救一次。'
        },
        {
            ico: '🏆', title: '成就與廣播',
            body: '成就解鎖送獎勵並可觸發<b>全服廣播</b>彈幕。<br>' +
                '系統列「🏅 成就」查進度。'
        },
        {
            ico: '☁️', title: '雲端排行',
            body: '存檔後自動上傳<b>公開摘要</b>（等級、通關、紋銀等），不傳裝備全文。<br>' +
                '可在遊戲內設定暱稱；登入頁「全服排行」可點開看各玩家角色。'
        },
        {
            ico: '💾', title: '存檔與重啟',
            body: '「💾 儲存進度」寫入本機；自動存檔定時執行。<br>' +
                '「🔄 重啟時空」會<b>清空</b>所有進度（請謹慎）。'
        },
        {
            ico: '🔗', title: '系統連動',
            body: '好友面板「連動總覽」：陣法、靈根、五行、寵物、賭局、離線等 20+ 系統如何疊加。<br>' +
                '適合進階玩家查交叉加成來源。'
        },
        {
            ico: '📈', title: '等級與獎勵',
            span2: true,
            body: '等級上限 <b>Lv.300</b>；打過低等怪經驗大幅衰減。<br>' +
                '左欄「詳細戰鬥面板」顯示完整 60+ 衍生屬性（命中、暴傷、掉落加成等）。'
        }
    ];

    var TIP = '<b>💡 建議路線</b>：揚州郊外練至 Lv.10 → 組 3 張 T1 升 T2 → 洗詞綴刷裝 → ' +
        '推 T5+ 拿精隨與套装 → 開礦坑囤珠寶化石 → 點天賦／武魂 → 山海異獸與區域王 → T16 霸主。';

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function renderNews(container) {
        if (!container) return;
        var h = '';
        NEWS.forEach(function (e) {
            h += '<div class="entry"><div class="entry-hd">' +
                '<span class="tag ' + esc(e.tag) + '">' + esc(e.tagLabel) + '</span>' +
                '<span class="entry-title">' + esc(e.title) + '</span>' +
                '<span class="entry-date">' + esc(e.date) + '</span>' +
                '</div><ul>';
            (e.bullets || []).forEach(function (b) {
                h += '<li>' + b + '</li>';
            });
            h += '</ul></div>';
        });
        container.innerHTML = h;
    }

    function renderGuide(container) {
        if (!container) return;
        var h = '';
        GUIDES.forEach(function (g) {
            h += '<div class="card' + (g.span2 ? ' span2' : '') + '">' +
                '<div class="card-hd"><span class="ico">' + g.ico + '</span>' + esc(g.title) + '</div>' +
                '<div class="card-bd">' + g.body + '</div></div>';
        });
        h += '<div class="tip">' + TIP + '</div>';
        container.innerHTML = h;
    }

    function applyMeta() {
        var q = '?v=' + META.gameVer;
        var verEl = document.getElementById('news-ver');
        if (verEl) verEl.textContent = META.newsVer;
        var badge = document.getElementById('guide-cnt');
        if (badge) badge.textContent = META.guideBadge;
        var sub = document.getElementById('hero-sub');
        if (sub) sub.textContent = META.titleSub;
        var desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', META.metaDesc);

        document.querySelectorAll('[data-game-href]').forEach(function (a) {
            a.setAttribute('href', 'game.html' + q);
        });
    }

    function bootLanding() {
        applyMeta();
        renderNews(document.getElementById('news-body'));
        renderGuide(document.getElementById('guide-bd'));
    }

    root.HY_LANDING = {
        meta: META,
        news: NEWS,
        guides: GUIDES,
        tip: TIP,
        renderNews: renderNews,
        renderGuide: renderGuide,
        applyMeta: applyMeta,
        boot: bootLanding,
        gameHref: function () { return 'game.html?v=' + META.gameVer; }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootLanding);
    } else {
        bootLanding();
    }
})(typeof window !== 'undefined' ? window : this);
