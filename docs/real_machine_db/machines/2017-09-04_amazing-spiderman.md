machineName: アメイジング・スパイダーマン
manufacturer: ミズホ（ユニバーサルエンターテインメント系列）
releaseDate: 2017-09-04
recordNumber: 1132
generation: 5号機（5.5号機世代）
systemType: A+ART / 擬似ボーナス併用 / ARTリブート型
formalModelName: アメイジングスパイダーマンQG
certificationNumber: 7S0032
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ユニバーサル公式2017年製品一覧で「アメイジング・スパイダーマン」を2017年9月発売として確認。
- HAZUSEで型式名 **アメイジングスパイダーマンQG**、検定番号 **7S0032**、導入開始日 **2017-09-04** を直接確認。
- パチビー、K-Navi、ちょんぼりすたも導入日2017-09-04で一致。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **98.5%**（精密表記98.49%）
- 設定2: **99.6%**（精密表記99.58%）
- 設定3: **102.0%**（精密表記102.02%）
- 設定4: **105.5%**（精密表記105.52%）
- 設定5: **108.1%**（精密表記108.08%）
- 設定6: **117.2%**（精密表記117.22%）
- HAZUSE、ちょんぼりすた、2017-09-04当時業界系新台整理で一致（丸め差のみ）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「SPIDEY RUSH」初当たり
- 設定1: **1/468.7**
- 設定2: **1/446.5**
- 設定3: **1/407.1**
- 設定4: **1/361.3〜1/361.8**
- 設定5: **1/329.0**
- 設定6: **1/239.2**

### リアルボーナス
- 全設定共通: **約1/936.2**。

### 擬似ボーナス
- 設定1: **1/153.0**
- 設定2: **1/152.8**
- 設定3: **1/149.1**
- 設定4: **1/147.8**
- 設定5: **1/144.6**
- 設定6: **1/143.6**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値 **約40.8〜41G/50枚**。
- ちょんぼりすた約40.8G、HAZUSE約41Gで整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART純増: **リアルボーナス込み約1.8枚/G**。
- パチビー、P-WORLD、HAZUSE、複数解析で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- リアルボーナス: **平均155枚**。
- 擬似ボーナス「SPIDEY BONUS」: **平均20G**。
- ART「SPIDEY RUSH」: **1セット100G+α**。ART中のリアル/擬似ボーナス当選で残りG数を100Gへリブート（再セット）。
- 基本ARTループ率は解析上 **50〜80%**。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は低確/通常/高確系の内部状態を持ち、CZ・ART抽選に影響。
- 通常ART間天井は **1580G+前兆**、到達でART当選。
- CZは「リザードチャンス」「スパイダー8」。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_SETTING_CHANGE_STATE_DISTRIBUTION_AND_POWER_CYCLE_STATE_COMPARISON
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **内部状態を再抽選**。
- 設定変更時専用の内部状態（資料上「モード」）振り分けが公開されている。
- 天井ゲーム数、液晶ステージについて当時解析の直接比較表は「調査中」で、別系統・表記揺れ・天井/宵越し/リセット検索を横断しても確定契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STATE_RESELECT / UNVERIFIED_FOR_CEILING_AND_STAGE_CONTRACT

### carryOverBehavior
- 据え置き時の内部状態・天井進行を「設定変更なし・電源操作なし」の独立条件で明記した本機固有一次/高信頼解析は今回固定できず **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
- 宵越し狙いの当時実戦記事は存在するが、店側の実際の設定操作を確定できない観測なのでcanonical契約には使用しない。
reliability: UNVERIFIED_FOR_DIRECT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON時の **内部状態はCARRYOVER** と当時解析の設定変更比較表で確認。
- 天井ゲーム数と液晶ステージは同表で「調査中」。再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_INTERNAL_STATE_CARRYOVER / UNVERIFIED_FOR_CEILING_AND_STAGE

### gameCounterReset
- 通常天井はART間1580Gだが、**設定変更時にART間カウンタがRESETされるか、純電断でCARRYOVERするかを直接固定する資料は十分な再探索後も確認できず UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動からの推測は採用しない。
reliability: UNVERIFIED

### ceilingAfterReset
- 通常天井: **ART間1580G+前兆**。
- 設定変更後の短縮天井・専用天井数値は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更時の天井カウンタ処理自体が未固定のため、「通常1580Gが必ずゼロから再開」とは断定しない。
reliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING / UNVERIFIED_FOR_RESET_CEILING_CONTRACT

### modeAfterReset
- 設定変更時は資料上の「低確 / 通常 / 高確A」へ再抽選。
- 公開振り分けは numericResetData に保存。
- 電源OFF→ONでは内部状態を引き継ぐ。
reliability: ANALYSIS_HIGH_WITH_PUBLIC_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更: **RESELECT**。
- 純電源OFF→ON: **CARRYOVER**。
- 設定変更時振り分けは低確/通常/高確Aの3区分で公開。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は内部状態再抽選が行われ、高確Aスタート率が設定1 **5.1%** 〜設定6 **7.0%**。
- 固定短縮天井、設定変更専用CZ/ART当選率などの追加恩恵は十分な再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STATE_RESELECT_NUMERIC / UNVERIFIED_FOR_OTHER_BENEFITS

### resetPenalties
- 設定変更による明示的な数値的不利要素は **NO_NUMERIC_PENALTY_CONFIRMED_AFTER_RESEARCH**。
- 前日内部状態が失われ再抽選されるため、高状態据え置き相当の継続は保証されない。
reliability: ANALYSIS_HIGH_FOR_STATE_RESELECT / UNVERIFIED_FOR_OTHER_PENALTIES

### resetDetection
- 本機固有のガックン、初期出目、ランプ、朝一ステージによる確定的な設定変更判別契約は、「ガックン」「朝一」「据え置き」「リセット判別」「初期ステージ」等へ検索語を変えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 内部状態の朝一挙動は統計的傾向であり、単発挙動による確定判別には使用しない。
reliability: UNVERIFIED

### numericResetData
- setting1: **低確69.9% / 通常25.0% / 高確A5.1%**
- setting2: **低確69.5% / 通常25.0% / 高確A5.5%**
- setting3: **低確67.6% / 通常26.6% / 高確A5.9%**
- setting4: **低確66.4% / 通常27.3% / 高確A6.3%**
- setting5: **低確64.5% / 通常28.9% / 高確A6.6%**
- setting6: **低確62.5% / 通常30.5% / 高確A7.0%**
- normalCeiling: **ART間1580G+前兆**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**

## conflicts
- ART設定4初当たりは資料に **1/361.3** と **1/361.8** の表記差があるため平均せず保持。物差し用途では丸め/集計差の可能性が高いが、原値を潰さない。
- 機械割は98.49/99.58/102.02/105.52/108.08/117.22%の精密表記と98.5/99.6/102.0/105.5/108.1/117.2%の丸め表記があり、定義競合ではなく丸め差として併記。

## missingFields
- 設定変更時の天井カウンタRESET/CARRYOVER直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時の天井カウンタ直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更/純電断時の液晶初期ステージ: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き・電源操作なしの独立契約: **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
- 本機固有ガックン/初期表示による確定変更判別: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- ユニバーサルエンターテインメント 2017年パチスロ製品一覧: https://www.universal-777.com/product/slot/2017/
- HAZUSE 基本/型式/検定/性能/天井: https://hazuse.com/machine/pachislot/7S0032/
- ちょんぼりすた スペック/天井/朝一リセット/設定変更時状態振り分け: https://chonborista.com/slot/universal-slot/44939/
- パチビー 基本スペック/導入日/ART構造: https://www.pachibee.jp/machines/index/217080005
- K-Navi 基本/導入日: https://p-kn.com/slot/2872/
- P-WORLD 基本仕様/ART構造: https://www.p-world.co.jp/machine/database/8487
- すろかい 基本スペック/ベース/導入月: https://slotkaiseki.hatenablog.com/entry/amazing
- すろぱちくえすと 天井/解析: https://www.slopachi-quest.com/article/amazing-spiderman-2/
- 悠遊道 2017-09-04新台整理/精密機械割/天井: https://www.pachinko-road.com/writer_blog/3224/
