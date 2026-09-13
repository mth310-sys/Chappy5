# ミスタージャグラー

recordNo: 1663
machineName: ミスタージャグラー
aliases: Sミスタージャグラー / Mr.JUGGLER / ミスター
manufacturer: 北電子
formalModel: SミスタージャグラーKK
inspectionCode: 3S0174
releaseDate: 2024-07-22
generation: 6.5号機 / メダル機
systemType: ノーマルAタイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 北電子公式製品ページは本機を「ミスタージャグラー」として掲載し、設定別BB/RB/合成確率・出玉率を公開。
- 北電子公式検定情報に `SミスタージャグラーKK` を掲載。
- 遊技通信/P-WORLDは型式 `SミスタージャグラーKK`、2024-07-22ホール導入予定を掲載。
- HAZUSEは型式 `SミスタージャグラーKK`、検定番号 `3S0174`、導入開始日2024-07-22を掲載。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.0%
- setting2: 98.0%
- setting3: 99.8%
- setting4: 102.7%
- setting5: 105.5%
- setting6: 107.3%
initialHitBySetting:
- setting1: BIG 1/268.6 / REG 1/374.5 / total 1/156.4
- setting2: BIG 1/267.5 / REG 1/354.2 / total 1/152.4
- setting3: BIG 1/260.1 / REG 1/331.0 / total 1/145.6
- setting4: BIG 1/249.2 / REG 1/291.3 / total 1/134.3
- setting5: BIG 1/240.9 / REG 1/257.0 / total 1/124.4
- setting6: BIG 1/237.4 / REG 1/237.4 / total 1/118.7
baseGamesPer50: 約41G/50枚
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG: 約240枚
- REG: 約96枚
confidence: OFFICIAL_FOR_SETTING_TABLE + ANALYSIS_HIGH_FOR_BASE_AND_PAYOUT / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- GOGO!ランプ点灯でボーナスを告知する純正ノーマルタイプ。
- 通常告知は第3停止後のみ、告知時の約50%で告知音。
- チェリーに加えてピエロもボーナス同時当選契機。
- 天井非搭載。
- AT/CZ、ゲーム数天井、通常/天国モード、周期抽選は主要初当たり構造として非該当。
- スペシャルボーナス音は、ボーナス終了後1GでBIGなら「軍艦マーチ」、ボーナス終了後100G以内のゾロ目GでBIGなら「ラ・カンパネラ / ファランドール」の条件あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NO_PUBLIC_GAKKUN_RATE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井・規定ゲーム数は非搭載のため天井RESETは N/A。
- 機種専用朝一資料では、設定変更時にクレジット・BET状態・スペシャルBGM変化条件をRESET。
- 同一設定への打ち変えを含む設定変更後の朝一1G目はリールガックンあり。
- ガックンには個体差があり、ホール側の対策も可能なため設定変更確定手段ではない。
confidence: ANALYSIS_HIGH_FOR_RESET_TABLE / OFFICIAL_FOR_MACHINE_STRUCTURE

### carryOverBehavior
- 天井・AT/CZモード・周期は非搭載のため、それらの据え置き引継ぎは N/A。
- 据え置きではスペシャルBGM変化条件を引き継ぐ扱い。
- 前日ボーナス後G数 + 当日朝一当選G数がBGM条件に一致した場合は据え置き推測材料。ただし単独確定判別には使用しない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみではリールガックンなし。
- クレジット・BET状態・スペシャルBGM変化条件を引き継ぐ。
- 天井・AT/CZモード・周期は非搭載のため、それらの電断引継ぎは N/A。
confidence: ANALYSIS_HIGH

### gameCounterReset
- 天井用内部ゲーム数: N/A（天井非搭載）。
- スペシャルBGM条件に関わるボーナス後ゲーム数履歴は、設定変更で条件RESET、据え置き/純電断でCARRY_OVERとして扱われる。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 天井非搭載。
- 設定変更専用の短縮天井なし / N/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ型の通常モード・天国モード・朝一専用モードは非該当。
- 設定変更時モード振り分け数値: N/A。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### stateAfterReset
- ホール経営・朝一客AIへ影響するAT/CZ用の通常/高確等の設定変更専用内部状態は本機の初当たり構造では N/A。
- BGM変化条件はgameCounterReset/resetDetectionへ分離。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### advantageousSectionReset
- ノーマルAタイプで、朝一客行動へ影響するAT型の有利区間天井/モード管理は本DB比較粒度では N/A。
- 内部規則を一般論から推測補完しない。
confidence: NOT_APPLICABLE_AT_MISSION_GRANULARITY

### resetBenefits
- 天井短縮、朝一専用AT/CZモード、規定ゲーム数優遇は N/A。
- 設定変更固有のボーナス当選率優遇など主要定量恩恵は確認されない。
confidence: ANALYSIS_HIGH / MACHINE_STRUCTURE

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更後（同一設定への打ち変え含む）の朝一1G目はリールガックンあり、電源OFF→ONのみではガックンなし。
- ガックン程度には個体差があり、据え置きでリールを動かす/設定変更後に1G回すなどホール側対策が可能なため確定判別ではない。
- スペシャルBGM変化条件は設定変更でRESET、据え置き/純電断でCARRY_OVER。前日+当日ゲーム数とBGM条件の一致は据え置き推測材料。
confidence: ANALYSIS_HIGH

### numericResetData
- 設定変更時短縮天井: N/A
- 設定変更時モード振り分け: N/A
- 朝一特定ゲーム数以内当選率: N/A / 専用固定値なし
- 設定変更専用CZ/AT数値: N/A
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更専用の天井短縮・モード振り分け・当選率は N/A。
- ガックン固定発生率は公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一判別は1G目リール挙動とスペシャルBGM条件引継ぎによる定性的推測が中心。

## conflicts
- coreの設定別BB/RB/合成・出玉率は北電子公式と主要解析で一致し、主要数値のCONFLICTなし。
- 一部後年サイトにベース約42G/50枚表記があるが、パチマガスロマガFREE・6確・ちょんぼりすた等は約41G/50枚で一致。canonicalは約41G/50枚とし、42G表記は丸め/独自整理差として保持対象外の軽微差扱い。

## missingFields
- 設定変更時ガックンの固定発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用の当選率/モード数値: N/A / PUBLIC_DEDICATED_VALUE_NOT_APPLICABLE

## groupAudit
- 1geki 2024年7月新台カレンダーは2024-07-22のパチスロを4機掲載。
- 既知canonical順: `ミスタージャグラー / 賞金首Angel / スロット ゾンビランドサガ / スマスロ ゴッドイーター リザレクション`。
- 本機は同日群1/4として処理。
- 残り3機処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## sources
取得日: 2026-09-14
- 北電子公式 製品情報: https://www.kitadenshi.co.jp/slot/mrjuggler/
- 北電子公式 特設サイト: https://www.kitadenshi.co.jp/products/2024/mrj/
- 北電子公式 検定情報: https://www.kitadenshi.co.jp/slot-kentei/
- 遊技通信 / P-WORLD 発表・型式・導入予定日: https://news.p-world.co.jp/articles/27751/yugitsushin
- HAZUSE 型式・検定番号・導入日: https://hazuse.com/hd/3s0174/
- パチマガスロマガFREE 基本情報・朝イチ設定変更: https://pachimaga.com/free/mach/maker-s/kitac/064466.php
- パチマガスロマガFREE 機種ページ: https://pachimaga.com/free/mach/maker-s/kitac/064466.php
- パチ&スロ必勝本 通常時解説: https://hisshobon.com/machineinfo/84009/
- パチ&スロ必勝本 プレミアム演出: https://hisshobon.com/machineinfo/84014/
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/779/21679/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/214160/

## recordQuality
coreConfidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH
resetConfidence: ANALYSIS_HIGH
missingPolicy: RESEARCH_EXHAUSTED_BEFORE_UNVERIFIED
conflictPolicy: NO_MATERIAL_CORE_CONFLICT_FOUND
