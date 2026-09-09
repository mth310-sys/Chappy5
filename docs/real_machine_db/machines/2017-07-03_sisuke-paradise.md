machineName: しすくえパラダイス
manufacturer: ハイライツ・エンタテインメント
releaseDate: 2017-07-03
recordNumber: 1102
generation: 5号機
systemType: A+RT / ボーナス主体 / ボーナス後20G RT
formalModelName: しすくえ/HC
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パチビー、すろぱちくえすと、ちょんぼりすた、2017年度新台カレンダーで2017-07-03導入、ハイライツ・エンタテインメント、A+RTが一致。
- パチマガスロマガの2017-05-22遊技機検定情報で型式 `しすくえ/HC`（ハイライツ）を確認。中古実機資料でも同型式を照合。
- P-WORLDはメーカー欄を「アイゲート」とするためメーカー表示には資料差があるが、当時業界/解析/権利表記はハイライツ・エンタテインメントで一致するためcanonicalはハイライツとし、P-WORLD表記をconflictへ保持。
- 検定番号は機種名、型式、メーカー、検定通過、公示、7S系検索を変更して再探索したが高信頼な直接番号を固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **97.2%**
- 設定2: **98.0%**
- 設定3: **99.4%**
- 設定4: **101.5%**
- 設定5: **105.6%**
- 設定6: **110.3%**
- P-WORLD、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
- 設定1: **1/197.4**
- 設定2: **1/192.8**
- 設定3: **1/186.2**
- 設定4: **1/177.1**
- 設定5: **1/165.5**
- 設定6: **1/153.8**

### REG
- 設定1: **1/197.4**
- 設定2: **1/192.8**
- 設定3: **1/186.2**
- 設定4: **1/177.1**
- 設定5: **1/165.5**
- 設定6: **1/153.8**

### ボーナス合算
- 設定1: **1/98.7**
- 設定2: **1/96.4**
- 設定3: **1/93.1**
- 設定4: **1/88.6**
- 設定5: **1/82.7**
- 設定6: **1/76.9**
- P-WORLD、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定別解析値: **30.03 / 30.08 / 30.12 / 30.17 / 30.07 / 30.58G/50枚**。
- 比較用代表値: **約30G/50枚**。
- すろぱちくえすと、ちょんぼりすたで照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ボーナス後RT「火纏い山ステージ」: **20G**。
- RT純増: **約0.4枚/G**。
- チャンスリプレイ後には最大10GのプチRT前兆ステージも存在するが、物差し上の主要RT純増はボーナス後20G RTを採用。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG: **最大207枚**（249枚を超える払出で終了）。
- REG: **最大56枚**（61枚を超える払出で終了）。
- 全ボーナス後20G RTへ突入。
- P-WORLD、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- A+RTのボーナス主体機。ゲーム数解除モード/AT・ART天井は持たない。
- ボーナス後20G RT「火纏い山ステージ」、チャンスリプレイ後最大10GプチRTを搭載。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_CEILING_WITH_LIMITED_DIRECT_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井非搭載のためゲーム数天井リセットは **NOT_APPLICABLE_NO_CEILING**。
- 設定変更時のRT内部状態、成立済みボーナス状態、液晶/プチRT状態を変数単位で直接記した本機固有契約は、機種名・型式・メーカー・シリーズ名と設定変更/リセット/朝一/RT/状態を変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_RT_STATE_CONTRACT

### carryOverBehavior
- 据え置きで引き継ぐ通常ゲーム数天井は存在しない。
- 据え置き時RT/プチRT/表示状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: NOT_APPLICABLE_FOR_CEILING / UNVERIFIED_FOR_RT_STATE

### powerCycleBehavior
- 純電源OFF→ON時のRT/プチRT/液晶状態保持を本機固有で明示した直接資料は固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用の短縮天井も対象なし。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- ゲーム数解除/天井モードを持つ機種ではない。
- 設定変更専用朝一モード、解除モード、初当たりモード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_SPECIAL_MODE

### stateAfterReset
- AT/ART機の低確/高確を主要初当たりに使う構造ではない。
- RT/プチRT内部状態の設定変更・据え置き・純電断時契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_FOR_DIRECT_RT_STATE_CONTRACT

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、高確スタート、朝一専用モード、初当たり/CZ優遇などの設定変更専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_BENEFIT

### resetPenalties
- ゲーム数天井進捗消滅は **NOT_APPLICABLE_NO_CEILING**。
- RT状態契約未確認のため、RT中閉店→設定変更に関する不利を推測記録しない。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_RT_STATE

### resetDetection
- すろぱちくえすとの当時解析は「ガックンは効かない可能性大」「リセット判別はおそらく不可」としている。
- 旧シスクエ4でガックンが効かなかったことからの推測を含むため、確定仕様にはせず **POSSIBLE_NO_GAKKUN / NOT_DETERMINISTIC** とする。
- 本機固有の確定初期出目、ランプ、ゲーム数表示による変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_FOR_GAKKUN_ASSESSMENT / UNVERIFIED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- settingChangeCeiling: **NOT_APPLICABLE_NO_CEILING**。
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- manufacturerDisplayConflict: canonicalはハイライツ・エンタテインメント。P-WORLDは「アイゲート」表記のため **CONFLICT_MANUFACTURER_LABEL** として保持。
- coreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH。
- direct setting-change/carry-over/power-cycle RT-state contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific reset detection: UNVERIFIED_AFTER_RESEARCH。
- reset-specific numeric benefit/mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. パチビー — https://www.pachibee.jp/machines/lecture/217060003
2. すろぱちくえすと — https://www.slopachi-quest.com/article/sispara/
3. ちょんぼりすた — https://chonborista.com/slot/high-enter/40925/
4. P-WORLD — https://www.p-world.co.jp/machine/database/8407
5. パチスロデータ — https://pachislo-data.com/hienter/44473
6. パチマガスロマガ 遊技機検定情報(5/22) — https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=009&tac_cd=00039219&type=1
7. 2017年度新台カレンダー — https://slotnews777.blog.fc2.com/blog-entry-3121.html
8. グリーンべると（ハイライツE撤退記事・型式一覧確認） — https://web-greenbelt.jp/00011148/
9. 中古実機資料（型式照合補助） — https://initialp.cart.fc2.com/ca101/2636/
