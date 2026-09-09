machineName: 熊酒場2丁目店
manufacturer: ネット
releaseDate: 2017-07-03
recordNumber: 1104
generation: 5号機
systemType: ノーマル / 完全告知 / 技術介入
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ネット株式会社の2017-05-19プレスリリースで「熊酒場2丁目店」発売、2017年7月上旬より全国導入と確認。
- K-Navi、パチビー、パチスロデータ、ちょんぼりすた、すろぱちくえすとでホール導入開始日 **2017-07-03** が一致。
- 2007年の初代「熊酒場」とは別機種。本レコードは2017年の「2丁目店」のみを対象とする。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **97.0%**
- 設定2: **98.5%**
- 設定3: **100.0%**
- 設定4: **105.0%**
- 設定5: **110.0%**
- 設定6: **119.9%**
- K-Navi、パチスロデータ、すろぱちくえすと、ちょんぼりすたで同一系列を確認。ネット公式プレスリリースも設定6 119.9%を公表。
reliability: OFFICIAL_FOR_SETTING6 / ANALYSIS_HIGH_MULTI_SOURCE_FOR_FULL_TABLE

## initialHitBySetting
### BIG / 大熊ボーナス
- 設定1: **1/264**
- 設定2: **1/264**
- 設定3: **1/258**
- 設定4: **1/250**
- 設定5: **1/235**
- 設定6: **1/202**

### REG / 小熊ボーナス
- 設定1: **1/392**
- 設定2: **1/392**
- 設定3: **1/330**
- 設定4: **1/263**
- 設定5: **1/235**
- 設定6: **1/202**

### ボーナス合算
- 設定1: **1/157**
- 設定2: **1/157**
- 設定3: **1/144**
- 設定4: **1/128**
- 設定5: **1/117**
- 設定6: **1/101**
- K-Navi、パチスロデータ、当時解析で一致。ネット公式プレスリリースもBIG 1/264〜1/202、合算1/157〜1/101を公表。
reliability: OFFICIAL_RANGE_AND_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 比較用代表値: **約33G/50枚**。
- パチスロデータがコイン持ち約33Gと掲載。通常時の比較用ベースとして採用。
reliability: ANALYSIS_SINGLE

## netIncrease
- AT / ART / RTによる純増管理なし。
- ボーナスのみで出玉を増やすノーマルタイプ。
reliability: OFFICIAL_AND_ANALYSIS_HIGH

## basicPayout
- 大熊ボーナス / BIG: **最大311枚**。
- 小熊ボーナス / REG: **最大103枚**。
- いずれも簡単な技術介入により最大獲得枚数を狙える。
- ネット公式プレスリリース、パチビー、K-Navi、P-WORLD、パチ7等で一致。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- AT/ART/CZ/ゲーム数解除モードは非搭載。
- 完全告知のボーナス主体ノーマル機。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_CEILING_NO_GAME_COUNT_MODE_WITH_LIMITED_DIRECT_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 通常ゲーム数天井、AT/ART/CZ、ゲーム数解除モードがないため、それらの進捗リセットは **NOT_APPLICABLE**。
- 「熊酒場2丁目店 / 熊酒場2 / NET / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井」を組み替え、公式・業界・当時解析・旧DB系を再探索したが、本機固有の設定変更時の液晶/演出状態やリール初期挙動を確定する直接資料は固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_DIRECT_MACHINE_SPECIFIC_RESET_CONTRACT

### carryOverBehavior
- 据え置きで引き継ぐゲーム数天井・AT/ART/CZモードは **NOT_APPLICABLE**。
- 本機固有の表示/演出状態の据え置き契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_DISPLAY_STATE

### powerCycleBehavior
- 純電源OFF→ONで引き継ぐゲーム数天井・AT/ART/CZ進捗は **NOT_APPLICABLE**。
- 本機固有の液晶/演出状態、リール初期位置等の電断復帰契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_MACHINE_SPECIFIC_POWER_CYCLE

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井なし。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- ゲーム数解除/AT/ART/CZモードは非搭載。
- 設定変更専用朝一モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_SPECIAL_MODE

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
- 本機固有のガックン、初期出目、扉/液晶表示、ゲーム数挙動による確定的な変更判別は、検索語・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定示唆演出は豊富だが、これは設定変更/据え置き判別とは別物なのでresetDetectionへ混入しない。
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
- baseGamesPer50: 約33Gは現時点で単一解析資料値のため、過度に高信頼化しない。

## missingFields
- formalModelName / certificationNumber: UNVERIFIED_AFTER_RESEARCH。
- direct machine-specific setting-change/carry-over/power-cycle display/reel contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific reset detection: UNVERIFIED_AFTER_RESEARCH。
- reset-specific numeric benefit/mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. ネット株式会社プレスリリース（Dream News転載） — https://www.dreamnews.jp/press/0000153042
   - 2017-05-19、2017年7月上旬導入、Aタイプ、設定6出玉率119.9%、BIG/合算レンジ。
   - reliability: OFFICIAL
2. グリーンべると — https://web-greenbelt.jp/00009704/
   - BIG 1/264〜1/202、REG 1/392〜1/202、合算1/157〜1/101、BIG最大311枚、7月2日納品開始予定。
   - reliability: INDUSTRY
3. パチビー — https://www.pachibee.jp/machines/about/217050016
   - 導入日2017-07-03、5号機ノーマル/完全告知/技術介入、BIG最大311枚、REG最大103枚。
   - reliability: ANALYSIS_HIGH
4. K-Navi — https://p-kn.com/slot/2814/
   - 導入日、設定別BIG/REG/合算/機械割、獲得枚数。
   - reliability: ANALYSIS_HIGH
5. パチスロデータ — https://pachislo-data.com/net/45095
   - 導入日、天井非搭載、約33G/50枚、設定別スペック。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — https://www.slopachi-quest.com/article/kumasakaba2/
   - 導入日、設定別スペック、ノーマル機解析。
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — https://chonborista.com/slot/net-slot/41024/
   - 導入日、設定別スペック、天井非搭載等。
   - reliability: ANALYSIS_HIGH
8. P-WORLD — https://www.p-world.co.jp/machine/database/8404
   - 5号機ノーマル/完全告知/技術介入、BIG最大311枚、REG最大103枚。
   - reliability: ANALYSIS_SINGLE

## researchNotes
- v0.7の目的外である設定示唆演出・小役確率・ボーナス重複詳細は必要最小限を超えるため収録していない。
- ノーマル機で天井/ゲーム数解除モードを持たないため、一般的な5号機挙動から架空のRESET/CARRYOVER契約を作らず、該当しない項目はNOT_APPLICABLE、本機固有の直接資料がない項目のみUNVERIFIED_AFTER_RESEARCHとした。
