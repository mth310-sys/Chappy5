machineName: パチスロ 悪魔城ドラキュラ Lords of Shadow
manufacturer: KPE
releaseDate: 2017-07-03
recordNumber: 1098
generation: 5号機
systemType: A+ART / 継続率管理ART / CZ経由あり
formalModelName: 悪魔城ドラキュラLoS／KD
certificationNumber: 6S1716
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `悪魔城ドラキュラLoS／KD`、検定番号 `6S1716`、メーカーKPE、導入開始日2017-07-03を確認。
- パチスロデータ.com、すろぱちくえすと、当時解析でも2017-07-03導入を照合。
reliability: INDUSTRY_DATABASE_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **97.5%**
- 設定2: **98.5%**
- 設定3: **100.4%**
- 設定4: **104.1%**
- 設定5: **107.0%**
- 設定6: **111.2%**
- HAZUSE、パチスロデータ.com、すろぱちくえすと、当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
- 設定1: **1/599.7**
- 設定2: **1/586.2**
- 設定3: **1/569.6**
- 設定4: **1/513.1**
- 設定5: **1/499.8**
- 設定6: **1/468.6**

### ボーナス合算
- 設定1: **1/297.9**
- 設定2: **1/291.3**
- 設定3: **1/282.5**
- 設定4: **1/274.2**
- 設定5: **1/265.3**
- 設定6: **1/259.0**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約33G/50枚**。
- パチスロデータ.com、すろぱちくえすと、当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「Lords of Shadow」: **約1.5枚/G**。
- グリーンべると、HAZUSE、パチスロデータ.com、すろぱちくえすとで一致。
reliability: INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## basicPayout
- 同色BIG: **約256枚**。
- 異色BIG: **約200枚**。
- REG: **50枚**。
- ART: **1セット30G + 継続バトル10G**、継続率33% / 66% / 80%。
reliability: INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## modeSpecificMinimumData
- 通常天井: **ボーナス・ART間999GでART当選濃厚**。
- 通常時は低確/高確の内部状態とLo/Hiモードを持つ。
- CZ「タイタン決戦」はART期待度約50%。
- 通常時全抽選テーブルは物差しDB対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_STATE_MODE_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は**天井RESET**。
- 通常時モードは**Hi確定**。
- 内部状態は**低確確定**。
- 設定変更時専用の天井短縮は確認されていない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き専用の独立メーカー契約は未取得。
- 純電源OFF→ON時は天井・モード・状態を引き継ぐ解析があり、通常ホール据え置き時の宵越し挙動と整合する。
- メーカー一次の据え置き契約ではないため信頼度を限定。
reliability: ANALYSIS_HIGH_WITHOUT_MANUFACTURER_RESET_DOCUMENT

### powerCycleBehavior
- 電源OFF→ONのみ: **天井CARRYOVER / モードCARRYOVER / 状態CARRYOVER**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 電源OFF→ON: **CARRYOVER**。
- 通常天井はボーナス・ART間999G。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### ceilingAfterReset
- 設定変更後も天井条件は**999G**。
- 朝一専用短縮天井は、検索語を「設定変更/リセット/朝一/天井短縮/恩恵」へ変更し複数資料を再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CONFIRMED_SHORTENING

### modeAfterReset
- 設定変更: **Hi確定**。
- 電源OFF→ON: **CARRYOVER**。
- 通常時Lo→Hiは弱チェリー、Hi→Loはチャンス目が主契機だが、通常時全移行率は本DBの収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- 設定変更: **低確確定**。
- 電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時に通常モードが**Hi確定**となる。
- Hiモードではチャンス目成立時の高確移行率が全設定共通**50.0%**。
- 朝一専用の天井短縮やART直撃保証は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更時は内部状態が**低確確定**で開始するため、状態面では高確スタート恩恵を持たない。
reliability: ANALYSIS_HIGH

### resetDetection
- モードHiは弱チェリー後の念話演出等で示唆されるが、朝一の設定変更を確定するものではない。
- 本機固有の確定的ガックン、初期出目、ランプ等について「ガックン/朝一/変更判別/リール」等で再探索したが高信頼直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_MODE_HINT / UNVERIFIED_FOR_DETERMINISTIC_RESET_DETECTION

### numericResetData
- resetModeHiRate: **100%**。
- resetStateLowRate: **100%**。
- hiModeChanceMeToHighStateRate: **50.0%**。
- resetCeiling: **999G**。
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicFirstNGameHitRateAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicAdditionalResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- netIncreaseDefinition: 一部当時資料に「ボナ込？」との注記があるが、グリーンべると業界記事はART自体を純増1.5枚/Gと明記。canonicalはART純増約1.5枚/Gとする。

## missingFields
- manufacturer-official exact payoutRateBySetting: UNVERIFIED_AFTER_RESEARCH。
- manufacturer-official resetBehavior document: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun/reset indicator: UNVERIFIED_AFTER_RESEARCH。
- dedicated carryOver contract independent of power-cycle table: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. HAZUSE 悪魔城ドラキュラ Lords of Shadow — https://hazuse.com/machine/pachislot/6S1716/
2. グリーンべると / P-WORLD業界ニュース「目に見えない抽選で予測不能な謎連が生まれる」 — https://news.p-world.co.jp/articles/9218/greenbelt
3. パチスロデータ.com — https://pachislo-data.com/kpe/36212
4. すろぱちくえすと — https://www.slopachi-quest.com/article/dracula4-los/
5. スロット解析情報~すろかい~ — https://slotkaiseki.hatenablog.com/entry/dracula
6. パチ7 悪魔城ドラキュラLords of Shadow — https://pachiseven.jp/articles/detail/3940
