machineName: ラグナロクサーガ
manufacturer: メーシー
releaseDate: 2017-07-18
recordNumber: 1109
generation: 5号機（5.5号機）
systemType: ボーナス+ART / ゲーム数上乗せ+セットストック / モード管理
formalModelName: ラグナロクサーガ／RN
certificationNumber: 7S0502
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パチビー、K-Navi、HAZUSE、DMMぱちタウンでメーカー「メーシー」、ホール導入開始日2017-07-18を照合。
- DMMぱちタウンおよび中古実機資料で型式 `ラグナロクサーガ/RN` を確認。
- HAZUSE DATAの当該機ページは `machine_code=7S0502` で管理されており、本DBでは検定番号 `7S0502` として記録する。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **98.1%**
- 設定2: **99.9%**
- 設定3: **101.5%**
- 設定4: **106.0%**
- 設定5: **110.1%**
- 設定6: **119.1%**
- HAZUSEとP-WORLDで一致。
- ちょんぼりすたのみ設定6を **119.9%** とするため、平均せずCONFLICTとして保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_FOR_SETTING6_SECONDARY_SOURCE

## initialHitBySetting
### ART「ラグナロク」初当たり
- 設定1: **1/549.3**
- 設定2: **1/475.2**
- 設定3: **1/496.0**
- 設定4: **1/355.0**
- 設定5: **1/299.9**
- 設定6: **1/163.9**

### グングニルボーナス
- 全設定共通: **1/8192.0**
- HAZUSE、P-WORLD、期待値見える化等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE: **約35.6～36.3G/50枚**（設定1～6）。
- 期待値見える化: 代表値 **約35.6G/50枚**。
- 2-9伝説: 約36G/1k。
- 物差し比較では35.6～36.3G/50枚を保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ラグナロク」: **約2.0枚/G**。
- パチビー、K-Navi、P-WORLD、業界記事で一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「ラグナロク」: **1セット60G以上**。開始時/継続時にRUSHを経由。
- SEVEN RUSH: 平均獲得 **約132G**。
- 神話RUSH: 平均獲得 **約248G**。
- グングニルボーナス: 実獲得 **約56枚**。
- ダークサイドゾーン（ロングMB）: 実獲得 **約100枚**。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: **ART間999Gまたは1499G**到達後、最大40G前兆を経てART。
- 天井振り分け: **999G 約33.33% / 1499G 約66.67%**。
- 通常時はART抽選モード5種に加え、神話モード・闇モードを持つ。
- 通常時の全モード移行率等は実機完全再現用のため収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_TABLE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **内部モード/状態RESELECT**。期待値見える化では対象をART抽選モード・闇モード・神話モードと明記。
- RT状態はちょんぼりすたで **RT0開始** とされる。
- 液晶ステージは **アースガルド**、液晶出目は **357**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_AND_MODE / ANALYSIS_SINGLE_FOR_RT0

### carryOverBehavior
- 据え置き（設定変更なし）は、当時朝一表で電源OFF→ONと同義に扱われ、**天井進捗・内部モードを引き継ぐ**。
- 闇モード・神話モードも内部モード欄の注記対象として引継ぎ。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: **天井CARRYOVER / 内部モードCARRYOVER**。
- 液晶出目は設定変更時と同じ **357** へ整えられる資料があり、出目単独では変更判別不可。
- RT状態はちょんぼりすたが「引き継ぐ？」としており確定表現ではないため **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_MODE / UNVERIFIED_FOR_RT_STATE

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き/純電断: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更後も通常天井仕様は **999Gまたは1499G**。
- 設定変更専用の短縮天井・天井振り分け優遇は、当時解析・後年回顧・朝一攻略資料を横断したが **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_PUBLISHED_RESET_SHORTENING

### modeAfterReset
- 設定変更: **RESELECT**。
- 据え置き/純電断: **CARRYOVER**。
- 設定変更時のART抽選モード・神話モード・闇モードの具体的初期振り分けは、検索語・資料系統を変えて再探索しても直接表を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_RESET_MODE_DISTRIBUTION

### stateAfterReset
- 本機の朝一資料は「内部モード/状態再抽選」として扱う。
- 個別状態の数値振り分けは **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 当時解析で**設定変更専用の天井短縮、朝一専用高確、専用初当たり優遇などの確定恩恵はNONE_CONFIRMED_AFTER_RESEARCH**。
- 期待値見える化も当時「リセット恩恵などの情報は現状出ていません」としていた。
reliability: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進捗と内部モード（ART抽選/闇/神話）は設定変更で失われる。
- 前日が有利な内部モード・天井深部の場合には設定変更が客側に不利になり得るが、個別期待値は収集対象外。
reliability: ANALYSIS_HIGH

### resetDetection
- 液晶出目は設定変更・電源OFF→ONとも **357** のため、出目単独では変更判別不可。
- 朝一ステージはアースガルド開始資料があるが、据え置き時との決定的1対1判別契約としては固定できない。
- 本機固有の確定的ガックン/リール始動判別は「ラグナロクサーガ/RN・メーシー・設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン」で再探索したが高信頼な直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_357_NON_DETERMINISTIC / UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetCeilingDistribution: **NONE_CONFIRMED_DIFFERENT_FROM_NORMAL**。
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- morningDisplay: **stage=アースガルド / liquidDigits=357**。

## conflicts
- 機械割設定6: HAZUSE/P-WORLD/期待値見える化 **119.1%** vs ちょんぼりすた **119.9%**。複数一致の119.1%をcanonicalとし、119.9%をCONFLICTとして保持。
- ART設定1: HAZUSE/P-WORLD/期待値見える化 **1/549.3** に対し、ちょんぼりすたは **1/549.0**。丸め/転記差の可能性が高いため、精密値1/549.3をcanonicalとして差異を保持。

## missingFields
- 設定変更時の具体的モード初期振り分け: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の個別内部状態振り分け: UNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ON時のRT状態: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun/change detection: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- パチビー: https://www.pachibee.jp/machines/about/217060006
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9428/greenbelt
- K-Navi: https://p-kn.com/slot/2833/
- HAZUSE DATA: https://data.hazuse.com/?machine_code=7S0502
- P-WORLD: https://www.p-world.co.jp/machine/database/8428
- DMMぱちタウン: https://p-town.dmm.com/machines/2916/recommend
- 期待値見える化 朝一/天井: https://slotjin.com/zone/ragnaroksaga/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/40720/
- 2-9伝説: https://29den.com/ragnaroksaga/
- 中古実機 型式補助: https://slot-kingdam.com/SHOP/raguna.html
