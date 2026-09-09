machineName: ロイヤルマハロ-30
manufacturer: 北電子
releaseDate: 2017-07-03
recordNumber: 1105
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ沖スロ
formalModelName: ロイヤルマハロ／KT-30
certificationNumber: 5S1419
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 北電子公式製品情報で「ロイヤルマハロ-30」、2017年7月製品、設定別スペックを確認。
- グリーンべると/P-WORLD業界ニュースは2017-04-10時点で納品 **2017-07-02予定** と報道。
- パチビー、2-9伝説、2017年導入カレンダーでホール導入日 **2017-07-03** を確認。
- P-WORLDで型式 `ロイヤルマハロ／KT-30`、検定番号 `5S1419` を確認。
reliability: OFFICIAL_AND_INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **97.5%**
- 設定2: **98.4%**
- 設定3: **100.3%**
- 設定4: **104.0%**
- 設定5: **107.0%**
- 設定6: **111.0%**
- 北電子公式確率表で直接確認。業界記事/P-WORLD/2-9伝説でも一致。
reliability: OFFICIAL

## initialHitBySetting
### BIG CHANCE
- 設定1: **1/294**
- 設定2: **1/291**
- 設定3: **1/284**
- 設定4: **1/256**
- 設定5: **1/242**
- 設定6: **1/229**

### BONUS GAME / REG
- 設定1: **1/508**
- 設定2: **1/471**
- 設定3: **1/423**
- 設定4: **1/423**
- 設定5: **1/388**
- 設定6: **1/336**

### ボーナス合算
- 設定1: **1/186**
- 設定2: **1/180**
- 設定3: **1/170**
- 設定4: **1/159**
- 設定5: **1/149**
- 設定6: **1/136**
- 北電子公式確率表で全設定を直接確認。
reliability: OFFICIAL

## baseGamesPer50
- 比較用代表値: **約36G/50枚**。
- 2-9伝説の当時整理資料で「約36G/1k」を確認。
- 現時点では単一解析資料値のため信頼度を過度に上げない。
reliability: ANALYSIS_SINGLE

## netIncrease
- AT / ART / RTによる純増管理なし。
- ボーナスのみで出玉を増やすノーマルタイプ。
reliability: OFFICIAL_AND_INDUSTRY

## basicPayout
- BIG CHANCE: **最大312枚**。
- BONUS GAME / REG: **最大130枚**。
- P-WORLDで払い出し終了条件（BIG 345枚超、BONUS GAME 135枚超）と最大純増を確認。娯楽産業の業界記事でも約312枚/約130枚を確認。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- AT/ART/CZ/ゲーム数解除モードは非搭載。
- 30Φ完全告知のボーナス主体ノーマル機。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_CEILING_NO_GAME_COUNT_MODE_WITH_LIMITED_DIRECT_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 通常ゲーム数天井、AT/ART/CZ、ゲーム数解除モードを持たないため、それらの進捗リセットは **NOT_APPLICABLE**。
- 「ロイヤルマハロ-30 / ロイヤルマハロ / KT-30 / 北電子」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井」を組み替え、公式・業界・当時解析・回顧資料を再探索したが、本機固有の設定変更時リール/告知状態処理を固定できる直接資料は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_DIRECT_MACHINE_SPECIFIC_RESET_CONTRACT

### carryOverBehavior
- 据え置きで引き継ぐゲーム数天井・AT/ART/CZモードは **NOT_APPLICABLE**。
- 選択告知モードや演出状態の据え置き契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_DISPLAY_MODE_PERSISTENCE

### powerCycleBehavior
- 純電源OFF→ONで引き継ぐゲーム数天井・AT/ART/CZ進捗は **NOT_APPLICABLE**。
- 告知モード選択、リール初期状態等の電断復帰契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_MACHINE_SPECIFIC_POWER_CYCLE

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井なし。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- ロイヤル/クラシック/ランダムの告知モードは遊技者が任意選択する演出モードで、AT/ARTの内部解除モードではない。
- 設定変更専用朝一内部モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: OFFICIAL_FOR_USER_SELECTABLE_DISPLAY_MODE / UNVERIFIED_FOR_ANY_UNPUBLISHED_RESET_MODE

### stateAfterReset
- AT/ARTの低確・高確等を初当たり管理する構造は非搭載。
- 朝一客行動へ影響する設定変更専用内部状態再抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_SPECIAL_STATE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、高確スタート、朝一専用モード、CZ優遇、ボーナス初当たり優遇等の設定変更専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_BENEFIT

### resetPenalties
- ゲーム数天井進捗消滅等は **NOT_APPLICABLE_NO_CEILING**。
- その他の設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_PENALTY

### resetDetection
- 本機固有のガックン、初期出目、ランプ/表示、ゲーム数挙動による確定的な設定変更/据え置き判別は、再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- BIG/REG終了時のランプ等による設定示唆は設定推測要素であり、設定変更/据え置き判別とは別なのでresetDetectionへ混入しない。
reliability: UNVERIFIED_FOR_DETERMINISTIC_MACHINE_SPECIFIC_DETECTION

### numericResetData
- settingChangeCeiling: **NOT_APPLICABLE_NO_CEILING**。
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- releaseDateBoundary: 業界一次系は納品開始予定2017-07-02、複数機種DBは導入開始2017-07-03。これは納品日とホール導入日の定義差であり数値競合とは扱わず、DB導入日は2017-07-03を採用。

## missingFields
- direct machine-specific setting-change/carry-over/power-cycle display/reel contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific reset detection: UNVERIFIED_AFTER_RESEARCH。
- reset-specific numeric benefit/mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. 北電子公式 — https://www.kitadenshi.co.jp/slot/royalmahalo-30/
   - 設定別BB/RB/合算/出玉率。
   - reliability: OFFICIAL
2. 北電子公式製品一覧 — https://www.kitadenshi.co.jp/slot/
   - 2017年7月製品。
   - reliability: OFFICIAL
3. P-WORLD / グリーンべると業界ニュース — https://news.p-world.co.jp/articles/9194/greenbelt
   - 2017-04-10、スペックレンジ、納品2017-07-02予定。
   - reliability: INDUSTRY
4. 娯楽産業 — https://www.goraku-sangyo.com/%E5%8C%97%E9%9B%BB%E5%AD%90%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD3%E6%A9%9F%E7%A8%AE%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8/
   - Aタイプ、BIG約312枚、BONUS GAME約130枚。
   - reliability: INDUSTRY
5. パチビー — https://www.pachibee.jp/movies/index/13843
   - 導入日2017-07-03、5号機ノーマル/完全告知/沖スロ。
   - reliability: ANALYSIS_HIGH
6. P-WORLD — https://www.p-world.co.jp/machine/database/8356
   - 型式 `ロイヤルマハロ／KT-30`、検定番号 `5S1419`、最大312/130枚、設定別スペック。
   - reliability: ANALYSIS_HIGH
7. 2-9伝説 — https://29den.com/royalmahalo/
   - 導入日2017-07-03、約36G/1k、天井なし、設定別スペック。
   - reliability: ANALYSIS_SINGLE

## researchNotes
- 2017-07-03群の全メーカー横断監査で、旧handoffに未登録だった本機を検出して遡及追加した。
- ノーマル機で天井/ゲーム数解除モードを持たないため、一般的な5号機挙動から架空のRESET/CARRYOVER契約を作らず、該当しない項目はNOT_APPLICABLE、本機固有の直接資料がない項目のみUNVERIFIED_AFTER_RESEARCHとした。
