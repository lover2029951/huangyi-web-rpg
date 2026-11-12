// landingPanelData.js — 登入頁「更新公告」與「玩法指南」單一資料源
// 部署：與 index.html 同目錄（huangyi-dist）；本機預覽見 _landing.html
(function (root) {
    'use strict';

    var META = {
        titleSub: '時空浪人 · Lv.300 破碎虛空傳奇',
        newsVer: 'v718 · 2026-11-12',
        gameVer: 718,
        guideBadge: '全系統 40+ 項',
        metaDesc: 'Path of Exile 風格武俠網頁 RPG —— 異界輿圖、地心礦坑、武魂附身、山海九域套裝、九宮格陣盤、PoE 裝備工藝。'
    };

    var NEWS = [
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
        gameHref: function () { return 'game.html?v=' + META.gameVer; }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootLanding);
    } else {
        bootLanding();
    }
})(typeof window !== 'undefined' ? window : this);
