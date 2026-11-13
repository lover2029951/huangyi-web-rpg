// landingPanelData.js — 登入頁「更新公告」與「玩法指南」單一資料源
// 部署：與 index.html 同目錄（huangyi-dist）；本機預覽見 _landing.html
(function (root) {
    'use strict';

    var META = {
        titleSub: '時空浪人 · Lv.300 破碎虛空傳奇',
        newsVer: 'v759 · 2026-11-13',
        gameVer: 763,
        guideBadge: '全系統 40+ 項',
        metaDesc: 'Path of Exile 風格武俠網頁 RPG —— 異界輿圖、地心礦坑、武魂附身、山海九域套裝、九宮格陣盤、PoE 裝備工藝。'
    };

    var NEWS = [
        {
            tag: 'fix', tagLabel: '修正',
            title: '分包開機修復 v763',
            date: '2026-11-13',
            bullets: [
                '修正 <code>hy-phase1.js</code> 開頭 <code>DOMContentLoaded</code> 引號錯誤致整頁無法初始化',
                '重新建置 chunks；<code>game-chunked.html</code> 補上 <code>style.css</code> 部署'
            ]
        },
        {
            tag: 'tune', tagLabel: '清理',
            title: '系統瘦身 v759',
            date: '2026-11-13',
            bullets: [
                '連動面板移除<b>寵物</b>殘留；屬性圖鑑不再顯示已移除的<b>罡氣 ES</b>',
                '<code>hyPerfProbe</code> 改按需載入（<code>?perf=1</code> 或 <code>localStorage hy_perf=1</code>）',
                '通緝因果註解精簡；<code>loadOrder</code> 589'
            ]
        },
        {
            tag: 'fix', tagLabel: '體驗',
            title: '戰鬥不閃刷 v758',
            date: '2026-11-13',
            bullets: [
                'ATB tick 改走 <code>renderCombatLiteThrottled</code>，取消重複整頁重繪',
                '舞台同步節流；輿圖隊伍簽章未變不重畫 HTML；礦坑 tick 只刷戰鬥區',
                '裝備詞綴效果<b>上下分層</b>；武魂列表虛擬捲動版面修復'
            ]
        },
        {
            tag: 'ui', tagLabel: '戰鬥',
            title: '戰鬥舞台統一 v757',
            date: '2026-11-13',
            bullets: [
                '<b>輿圖</b>與<b>礦坑</b>中欄舞台改與主畫面共用 <code>UIDexAtb._stagePayload</code>',
                '九宮格陣盤站位、武魂分層、敵方大格／集火、battleSeq 與主畫面一致',
                '舞台不再傳預測招式（<code>skill: null</code>），飄字走實招特效'
            ]
        },
        {
            tag: 'tune', tagLabel: '效能',
            title: '效能第二階段 v756',
            date: '2026-11-13',
            bullets: [
                '開局僅 <b>ensureCore</b>；工藝／天賦／幫會／小鎮等改為<b>首次開分頁</b>才初始化',
                '背景分頁：金司馬／弟子／經脈／護送／圖鑑計時 ×4；圖鑑成就改 <code>requestIdleCallback</code>',
                '全站圖片懶載入、<code>renderAll()</code> 自動導向節流版；可玩後預取 phase2 chunk'
            ]
        },
        {
            tag: 'tune', tagLabel: '山海',
            title: '山海異獸加強 v755',
            date: '2026-11-13',
            bullets: [
                '山海經地圖遭遇戰異獸：<b>氣血／攻擊／防禦與招式倍率 ×1.3</b>（加強 0.3 倍）',
                '調整位於 <code>SHJ_CONFIG.combat.statMul</code>，可再於資料檔微調'
            ]
        },
        {
            tag: 'ui', tagLabel: '工藝',
            title: '裝備詞綴效果說明 v754',
            date: '2026-11-13',
            bullets: [
                '通貨倉庫「改造目標」、裝備詳情、工藝台預覽：詞綴旁顯示<b>屬性圖鑑</b>效果說明',
                '例：磐固→護體防禦、涵元→最大內力、反震→受擊反射傷害、避風→風抗'
            ]
        },
        {
            tag: 'fix', tagLabel: '清理',
            title: '移除靈獸殘留 v752',
            date: '2026-11-13',
            bullets: [
                '刪除靈獸 UI／戰鬥回合／探險派遣／作弊參數等殘留程式',
                '時空探險改為<b>被動每 3 分鐘</b>；小鎮鎮守改為<b>武魂</b>',
                '讀檔自動清除舊存檔 <code>pets</code>／<code>activePet</code> 欄位'
            ]
        },
        {
            tag: 'ui', tagLabel: '戰鬥',
            title: '回復飄字分流 v751',
            date: '2026-11-13',
            bullets: [
                '<b>自然恢復</b>飄字改顯示在九宮格<b>左上角</b>；<b>技能恢復</b>仍在名字牌',
                '行囊／護法／讀檔等簽章與背景掛機路徑再收緊（延續 v750）'
            ]
        },
        {
            tag: 'tune', tagLabel: '效能',
            title: '全系統效能包 v750',
            date: '2026-11-13',
            bullets: [
                '一般 <code>renderAll()</code> 自動節流合併；分頁切換仍強制全繪',
                '背景分頁：戰鬥 UI 降頻、內掛戰術只同步數值、靜默存檔間隔 ×3',
                '登入預設 <b>game-chunked.html</b>；簽章用 <code>compactKV</code>；行囊／武魂虛擬捲動門檻下調'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '內掛戰術白屏 v749',
            date: '2026-11-13',
            bullets: [
                '修正 <code>_autoTacticsStructSig</code> 與快取屬性同名導致 <code>renderAll</code> 拋錯',
                'Service Worker 略過 <code>chrome-extension://</code>，不再觸發 Cache put 錯誤'
            ]
        },
        {
            tag: 'tune', tagLabel: '效能',
            title: '架構完整優化 v748',
            date: '2026-11-13',
            bullets: [
                '新增 <b>game-chunked.html</b> 分包載入（phase1 可玩 + phase2 背景）',
                '存檔 <b>IndexedDB</b> 鏡像；行囊／武魂 ≥64 項<b>虛擬捲動</b>',
                '小鎮背景分頁只 tick 不繪；輿圖背景降頻同步',
                '含 v747 分階 boot、idle 存檔、ensure 分頁化、統一定時器'
            ]
        },
        {
            tag: 'tune', tagLabel: '效能',
            title: '架構級效能包 v747',
            date: '2026-11-13',
            bullets: [
                '多檔版：<b>uiDexAtb</b> 後即可進遊戲，擴充模組背景載入（右下角提示）',
                '自動存檔改 <b>requestIdleCallback</b>，合併連續靜默存檔，手動存檔仍立即寫入',
                '<b>renderAll</b> 依可見分頁跳過 ensureState；定時器合併為單一心跳',
                'SW 預熱首頁／樣式；延續 v746 UI 簽章與掛機輕量路徑'
            ]
        },
        {
            tag: 'tune', tagLabel: '效能',
            title: '全系統 UI 簽章優化 v746',
            date: '2026-11-13',
            bullets: [
                '掛機：<b>角色欄輕量</b>（氣血／內力／經驗／戰力增量），不再每幀整塊重繪',
                '內掛戰術下拉、<b>角色欄分頁</b>、護法、黑市常駐店、幫會分頁皆加<b>簽章快取</b>',
                '完整屬性面板依戰力摘要跳過無變化重繪；探針修正括號與角色欄計時',
                '延續 v745：<code>renderCombatLite</code>、行囊／天賦、Service Worker'
            ]
        },
        {
            tag: 'tune', tagLabel: '效能',
            title: '掛機／行囊／天賦效能包 v745',
            date: '2026-11-13',
            bullets: [
                'v743 起：<b>renderCombatLite</b>、地圖與戰鬥格簽章快取（自動戰鬥不再整頁重繪）',
                '裝備<b>行囊</b>與倉庫分頁簽章快取；天賦開啟延遲 canvas、側欄簽章',
                'GitHub Pages 支援 <b>Service Worker</b>，二次進入載入較快',
                '開發用 <code>?perf=1</code> 效能探針（預設關閉）'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '單檔版天賦腳本載入 v744',
            date: '2026-11-13',
            bullets: [
                '修正 <code>talentWuhunRemap</code>／<code>talentRangeRemap</code> 未傳入 <code>window</code> 導致 <code>game.html</code> 白屏',
                'Console「Cannot read properties of undefined (reading HY)」'
            ]
        },
        {
            tag: 'tune', tagLabel: '效能',
            title: '戰鬥掛機輕量重繪 v743',
            date: '2026-11-13',
            bullets: [
                '自動戰鬥改走<b>renderCombatLite</b>，不再每次整頁 renderAll',
                '時空地圖列表<b>簽章快取</b>，掛機不再重掛上百顆地圖鈕',
                '戰鬥格結構不變時只更新血條／集氣（DOM 增量）',
                '開發者可用 <code>?perf=1</code> 本機量測（正式版含探針、預設關閉）'
            ]
        },
        {
            tag: 'fix', tagLabel: '天賦',
            title: '天賦詞條與內力上限 v742',
            date: '2026-11-13',
            bullets: [
                '範圍／距離類天賦改寫為<b>攻擊／群攻</b>等可生效屬性',
                '召喚物／先鋒類英文詞條改寫（顯示與解析），避免無效武魂加成',
                '天賦<b>右鍵退還</b>斷線時可確認連帶退還下游',
                '點內力上限天賦後<b>最大內力數字跳動</b>已修正'
            ]
        },
        {
            tag: 'ui', tagLabel: '戰鬥',
            title: '治療飄字對齊名字 v741',
            date: '2026-11-13',
            bullets: [
                '補血／自然恢復／回內等<b>治療數字</b>改顯示在<b>角色名稱</b>位置',
                '偷取、擊中恢復仍顯示在格子右上角',
                '多段治療會自名字處略往上錯開'
            ]
        },
        {
            tag: 'tune', tagLabel: '戰鬥',
            title: '自然恢復改回 2 拍 v740',
            date: '2026-11-12',
            bullets: [
                '<b>vitalNaturalRegenTurns</b> 預設改回 <b>2</b>（每 2 次出手結算氣血／內力）',
                '戰報仍顯示「每 N 次集氣滿」；屬性圖鑑公式同步',
                '自測 <b>HY.benchNatRegen</b> 情境已對齊 2 拍週期'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然恢復實測 v739',
            date: '2026-11-12',
            bullets: [
                'Console：<b>HY.benchNatRegen(10)</b> 含第 6 種自動連刷掃戰報',
                '敵方自然恢復計次與 <b>afterCombatActionBeat</b> 對齊',
                '無實際回復量仍 consume 週期，避免第 6 拍重複觸發'
            ]
        },
        {
            tag: 'tune', tagLabel: '武功',
            title: '群攻隨機 3 敵 v738',
            date: '2026-11-12',
            bullets: [
                '群體攻擊不再打全場，改為<b>不重複隨機至多 3 名</b>敵人',
                '敵人 ≤3 時仍全中；群體治療仍為我方全隊',
                '武功閣／自動戰術標示「隨機3敵」'
            ]
        },
        {
            tag: 'tune', tagLabel: '武功',
            title: '外功耗內調整 v737',
            date: '2026-11-12',
            bullets: [
                '第 <b>N</b> 式基礎耗內 = <b>N×25</b>（十式單體 250）',
                '群體招式（aoe）耗內為同式單體的 <b>2 倍</b>',
                '全門派外功表同步（含新四派）'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '氣血內力恢復統一 v736',
            date: '2026-11-12',
            bullets: [
                '自然／偷取／擊中恢復改為<b>同一拍一次結算</b>（regenVital、stealVital、onHitVital）',
                '氣血＋內力共用出手計次，不再分開跑兩套飄字',
                '敵我內力自然恢復納入同一週期邏輯'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '集氣條修正 v735',
            date: '2026-11-12',
            bullets: [
                '還原自然回復計數時機（出招開始計次），修復集氣滿後條卡住',
                '自然恢復後<b>延後刷新舞台</b>，避免 ATB 途中同步 render',
                '保留九宮格 <b>charId</b> 飄字與 v734 關閉符文圈'
            ]
        },
        {
            tag: 'ui', tagLabel: '戰鬥',
            title: '取消角色戰鬥圈圈',
            date: '2026-11-12',
            bullets: [
                '關閉出招時立繪外圈的<b>旋轉符文環</b>（技能名稱仍顯示）',
                '關閉集火目標的<b>虛線準心圈</b>（名稱旁 🎯 保留）'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然回復 v733：飄字＋第 3 次出手',
            date: '2026-11-12',
            bullets: [
                '出手計數改在<b>整輪攻擊結束</b>才 +1（含疾風雙動），避免 2 次集氣滿就恢復',
                '九宮格用 <b>charId</b> 定位；舞台同步後再播「內力／氣血恢復」飄字',
                '週期改為距上次自然恢復須再滿 3 次出手'
            ]
        },
        {
            tag: 'fix', tagLabel: '武魂',
            title: '武魂融合：Data 未定義',
            date: '2026-11-12',
            bullets: [
                '修正批量融合時 <b>ReferenceError: Data is not defined</b>',
                '融合日誌可正常顯示成長倍率'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然回復：出手 token 防雙計',
            date: '2026-11-12',
            bullets: [
                '每招使用唯一 <b>actionToken</b>，同一集氣滿只計一次 natRegenHits',
                '觸發改為本場第 3、6、9… 次（整數倍），避免誤計在 2 次就恢復',
                '新戰重置出手 token'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然回復：集氣滿 3 次才結算',
            date: '2026-11-12',
            bullets: [
                '修正 <b>natRegenHits</b> 同拍被加兩次 → 集氣條滿 2 次就恢復的問題',
                '統一 <b>recordAllyCombatAction</b> 計數；週期改距上次恢復須再滿 3 次出手',
                '戰報改為「本場第 N 次出手（每 3 次集氣滿）」'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然回復：每場從 0 計、飄字補強',
            date: '2026-11-12',
            bullets: [
                '自然恢復改讀 <b>natRegenHits</b>（本場第 3、6、9… 次出手），<b>每場新戰歸零</b>；門派 yyHits 仍跨場累積',
                '內力自然恢復改直接播九宮格飄字，不再被 UI 連刷吃掉',
                '擊中回血／擊中回內飄字改<b>右上角</b>；補上擊中回內結算'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然回復：自身每 3 次出手',
            date: '2026-11-12',
            bullets: [
                '氣血／內力自然恢復改為<b>各角色自身</b>第 3、6、9… 次出手後結算（讀 yyHits）',
                '快攻慢攻各自計數，不再跟全場出手拍綁在一起',
                '屬性圖鑑公式說明已同步'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然回復：敵方回合結算',
            date: '2026-11-12',
            bullets: [
                '氣血／內力自然恢復改在<b>敵方出手結束後</b>結算，避免與佇列回復同拍疊兩次',
                'phase 制補結算（第 3 拍被敵方佔走時下拍仍可補）',
                '手動出招不再重複觸發；同格自然回復飄字 1.2 秒防連刷'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然回復：同一週期不重複結算',
            date: '2026-11-12',
            bullets: [
                '每個回復週期（預設每 3 出手拍）全隊只結算一次氣血／內力',
                '同一出手拍不重複觸發 afterCombat 自然回復',
                '敵方內力回復改為每敵每週期一次；合併 restore 減少飄字連刷'
            ]
        },
        {
            tag: 'new', tagLabel: '戰鬥',
            title: '戰鬥飄字：九宮格左上／右上',
            date: '2026-11-12',
            bullets: [
                '恢復（氣血／內力）貼齊每格宮格左上角，並分標「氣血恢復」「內力恢復」',
                '偷取飄字貼齊宮格右上角；當回合結算並即時刷新舞台',
                '傷害仍附《招式名》；修正換邊時回復飄字略過與索引錯標'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '戰鬥飄字：招式／偷取／自然回復',
            date: '2026-11-12',
            bullets: [
                '傷害飄字附《招式名》；敵我命中皆標記來源',
                '偷取當回合結算；治療與自然回復分角顯示',
                '內力偷取已接入結算'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '開戰我方立繪不再跳動',
            date: '2026-11-12',
            bullets: [
                '換場只重建敵方，保留我方立繪／影片 DOM',
                '取消預設進場上跳；敵方仍可滑入'
            ]
        },
        {
            tag: 'fix', tagLabel: '介面',
            title: '裝備說明繁體化',
            date: '2026-11-12',
            bullets: [
                '裝備總效不再出現 elDef_wind 等英文鍵',
                '擴充屬性名稱走屬性圖鑑／StatRegistry 中文'
            ]
        },
        {
            tag: 'fix', tagLabel: '效能',
            title: '戰鬥舞台移除攻擊軌跡線',
            date: '2026-11-12',
            bullets: [
                '停用 SVG 弧線與治療連線，減少掛機時 DOM／layout 負擔',
                '飄字、爆閃、技能名、暴擊環等仍保留'
            ]
        },
        {
            tag: 'fix', tagLabel: '介面',
            title: '戰鬥舞台移除震動與衝刺',
            date: '2026-11-12',
            bullets: [
                '命中不再播放出手衝刺、受擊左右晃與全屏震動',
                '爆閃、飄字、暴擊環等保留'
            ]
        },
        {
            tag: 'fix', tagLabel: '介面',
            title: '戰鬥舞台移除範圍特效',
            date: '2026-11-12',
            bullets: [
                '停用 AOE 中央衝擊波、全場閃光與多目標掃線',
                '單體傷害飄字、軌跡線與技能名稱特效保留'
            ]
        },
        {
            tag: 'fix', tagLabel: '戰鬥',
            title: '自然恢復：每 3 回合氣血／內力',
            date: '2026-11-12',
            bullets: [
                'vitalNaturalRegenTurns 預設 3；第 3、6、9… 次出手統一結算',
                '戰報改為「每 N 回合恢復一次」提示，避免與 2 拍混淆'
            ]
        },
        {
            tag: 'fix', tagLabel: '還原',
            title: '戰鬥 UI 更新策略',
            date: '2026-11-12',
            bullets: [
                '還原 v714 掛機節流（atbUiThrottleMs）與 boot 並行 10 → 戰鬥舞台恢復每 tick 完整同步'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: 'game.html 移除無效 preload',
            date: '2026-11-12',
            bullets: [
                '單檔版不再預載外部 style.css／loadOrder.js，Console 不再出現 preload 警告'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '自然恢復週期（vitalNaturalRegenTurns）',
            date: '2026-11-12',
            bullets: [
                '改為出手第 N、2N、3N… 拍結算，調 2／3／4 拍週期會明顯不同',
                '統一 afterCombatActionBeat 結算，戰報顯示週期與設定值'
            ]
        },
        {
            tag: 'new', tagLabel: '文件',
            title: '瀏覽器擴充（載入加速）',
            date: '2026-11-12',
            bullets: [
                '專案 docs/browser-extension 可載入 Chrome／Edge 快取 GitHub Pages 靜態資源'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '氣血／內力自然恢復（每 3 拍）',
            date: '2026-11-12',
            bullets: [
                '修正第 3 拍落在敵方出手時週期被跳過的問題',
                '敵我出手後皆可觸發；戰報可見 🌿／💧 提示'
            ]
        },
        {
            tag: 'fix', tagLabel: '效能',
            title: '掛機與首屏流暢度',
            date: '2026-11-12',
            bullets: [
                '自動戰鬥時戰鬥舞台／門派表降頻重繪，集氣條仍即時更新',
                '可調 gameConfig.combat.atbUiThrottleMs；啟動並行載入與資源 preload'
            ]
        },
        {
            tag: 'fix', tagLabel: '調整',
            title: '山海異獸遭遇強度',
            date: '2026-11-12',
            bullets: [
                '異獸氣血攻防對齊同級時空探索頭目，並隨稀有度加乘',
                '上陣人數越多，單體異獸越強（五人隊約 1.47 倍）'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '套裝裝備右鍵選單',
            date: '2026-11-12',
            bullets: [
                '修正行囊對套裝按右鍵時「穿戴」出現整段 HTML 的問題',
                '選單改為純文字圖示（🌌 穿戴）'
            ]
        },
        {
            tag: 'fix', tagLabel: '調整',
            title: '行囊套裝圖與成就廣播',
            date: '2026-11-12',
            bullets: [
                '山海套裝水墨圖在行囊格<b>放大填滿</b>圖示區',
                '所有成就達成（含常見／圖鑑）皆會全服彈幕廣播'
            ]
        },
        {
            tag: 'fix', tagLabel: '調整',
            title: '氣血／內力自然回復',
            date: '2026-11-12',
            bullets: [
                '戰鬥中被動回復（天賦賦氣血／內力再生）改為<b>每 3 回合</b>結算一次（原 2 回合）',
                '圖鑑公式說明已同步'
            ]
        },
        {
            tag: 'add', tagLabel: '美術',
            title: '山海九套裝水墨圖示',
            date: '2026-11-12',
            bullets: [
                '九域套裝行囊格改<b>水墨裝備圖</b>，左下標示域號；缺圖自動回退篆字格',
                '套裝分類篩選、圖示與陣營列表展開收合等 UI 一併更新'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '內力消耗與戰報',
            date: '2026-11-12',
            bullets: [
                '扣內後即時刷新內力條；內力不足改基本拳不再誤回內',
                '燃血代內／血靈／疾風追擊戰報標示更清楚'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '區域 BOSS 切換卡住',
            date: '2026-11-12',
            bullets: [
                '打 BOSS 中途改點其他地圖 BOSS 可確認放棄，不再永遠「戰鬥進行中」',
                '戰鬥狀態與舞台同步；開一般戰會清殘留 BOSS 鎖'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '山海異獸連刷與強度',
            date: '2026-11-12',
            bullets: [
                '異獸戰勝後<b>不納入內掛連刷</b>，須回山海經地圖再挑戰',
                '遭遇戰氣血／攻防對齊同級頭目（珍稀／傳說明顯加強）'
            ]
        },
        {
            tag: 'add', tagLabel: '新增',
            title: '離線金司馬刷圖',
            date: '2026-11-12',
            bullets: [
                '關網頁離線時，<b>刷圖營地</b>依倉庫地圖繼續跑（與 24h 掛機同軸）',
                '戰利品累積待領取；礦冶週期一併寫入離線報告'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '區域 BOSS 擊殺次數',
            date: '2026-11-12',
            bullets: [
                '各地圖「已擊殺」改寫入 <b>regionBoss.bossKills</b>，不再被每秒刷成 0',
                '舊檔自 <b>wuhun.bossKills</b> 合併還原進度'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '刷圖營地自動開跑',
            date: '2026-11-11',
            bullets: [
                '倉庫有圖但工人「等待投圖」→ 開面板／領獎後會<b>補試開跑</b>',
                '狀態區分：真沒圖、待領取滿 40 張、有圖待命'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '區域 BOSS 九宮格對齊',
            date: '2026-11-11',
            bullets: [
                '全格 BOSS 改<b>置中排版</b>，集火準心與立繪不再上下分離',
                '關閉全格高度下錯位的腳影／集氣底光（準心仍隨立繪）'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '區域 BOSS 圖示還原',
            date: '2026-11-11',
            bullets: [
                '立繪恢復放大前尺吋（<b>--h</b>），與一般敵方一致',
                '仍占滿九宮格；武魂／名牌隨立繪流式排在格底'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '區域 BOSS 站位穩定',
            date: '2026-11-11',
            bullets: [
                '九宮格區域 BOSS 改 <b>flex 置中</b>，避免動畫覆寫 transform 而跳位',
                '固定佔滿全格，名牌維持底中線'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '招式飄字與山海經標籤',
            date: '2026-11-11',
            bullets: [
                '舞台招式名改在<b>實際出招</b>時顯示，不再每 tick 閃預測技能',
                '山海經入口持續注入；地圖異獸名牌獨立圖層，縮放／拖曳不失蹤'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '武魂與區域 BOSS 站位',
            date: '2026-11-11',
            bullets: [
                '武魂改回隨<b>立繪層</b>定位，修正光圈偏移',
                '區域 BOSS 佔滿九宮格且<b>立繪幾何置中</b>、名牌貼底中線'
            ]
        },
        {
            tag: 'fix', tagLabel: '對齊',
            title: '九宮格底線對齊',
            date: '2026-11-11',
            bullets: [
                '每格<b>立繪、武魂光圈、血條名牌</b>底緣貼齊該列格線',
                '單元撐滿格高，內容隨格底一起下移'
            ]
        },
        {
            tag: 'fix', tagLabel: '還原',
            title: '九宮格版面還原',
            date: '2026-03-11',
            bullets: [
                '恢復拉高實驗前舞台高度與 flex 半場佈局',
                '保留格線對格線對齊、關閉傷害佔比、陣盤站位修正'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '九宮格貼頂撐滿',
            date: '2026-03-11',
            bullets: [
                '左右半場 <b>top:0 絕對定位</b>，格線覆蓋原上方留白',
                '取消上內距，舞台高 900px、每列更高'
            ]
        },
        {
            tag: 'bal', tagLabel: '調整',
            title: '戰鬥舞台 v690',
            date: '2026-03-11',
            bullets: [
                '九宮格<b>縱向拉滿</b>（舞台加高、縮減上留白）',
                '關閉右上角<b>傷害佔比／累計</b>面板'
            ]
        },
        {
            tag: 'fix', tagLabel: '修正',
            title: '九宮格參考線對齊',
            date: '2026-03-11',
            bullets: [
                '格線區域與 <b>3×3 站位格</b> 重合（修正內距造成的偏移）',
                '左右半場撐滿高度，直向格線與列高一致'
            ]
        },
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
        gameHref: function () { return 'game-chunked.html?v=' + META.gameVer; },
        gameHrefMonolith: function () { return 'game.html?v=' + META.gameVer; },
        gameHrefChunked: function () { return 'game-chunked.html?v=' + META.gameVer; }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootLanding);
    } else {
        bootLanding();
    }
})(typeof window !== 'undefined' ? window : this);
