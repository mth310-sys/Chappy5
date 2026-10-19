machineName: ハッピージャックポット
manufacturer: 岡崎産業
releaseDate: 2017-05-08
recordNumber: 1079
generation: 5号機 / 5.5号機
systemType: ノーマルAタイプ / 完全告知
formalModelName: ハッピージャックポット／H1
certificationNumber: 6S1329
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2017-05-08、メーカー岡崎産業、型式`ハッピージャックポット／H1`、検定番号`6S1329`を直接確認。
- すろぱちくえすとでも2017-05-08導入、岡崎産業、Aタイプを確認。
- P-WORLDで5号機ノーマルタイプ・完全告知を確認。
reliability: ANALYSIS_HIGH_FOR_IDENTITY; INDUSTRY_DATABASE_MULTI_SOURCE_FOR_SYSTEM

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|96.7%|
|2|98.2%|
|3|99.8%|
|4|103.3%|
|5|107.1%|
|6|110.5%|
- HAZUSEとすろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
|設定|BIG|
|---:|---:|
|1|1/295.21|
|2|1/288.70|
|3|1/282.48|
|4|1/267.49|
|5|1/252.06|
|6|1/240.94|

### REG
|設定|REG|
|---:|---:|
|1|1/358.12|
|2|1/336.08|
|3|1/319.69|
|4|1/288.70|
|5|1/271.93|
|6|1/240.94|

### ボーナス合算
|設定|合算|
|---:|---:|
|1|1/161.82|
|2|1/155.30|
|3|1/149.97|
|4|1/138.85|
|5|1/130.81|
|6|1/120.47|
- HAZUSE精密値。すろぱちくえすとは丸め値で同系列。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
|設定|50枚あたり|
|---:|---:|
|1|34.99G|
|2|35.20G|
|3|35.38G|
|4|35.73G|
|5|36.32G|
|6|36.72G|
- すろぱちくえすと掲載の設定別値。
reliability: ANALYSIS_SINGLE

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE。
- AT/ART非搭載のため純増/Gという比較軸は適用しない。

## basicPayout
- BIG BONUS: 純増312枚（345枚超払い出しで終了）。
- REG BONUS: 最大104枚（105枚超払い出しで終了）。
- HAZUSE、P-WORLDで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 天井: NONE / NOT_APPLICABLE。すろぱちくえすとはAタイプにつき天井・ゾーン非搭載と明記。
- AT/ART/CZ/周期/モード管理: NOT_APPLICABLE。
reliability: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_NOT_APPLICABLE_NORMAL_TYPE_WITH_DETECTION_UNKNOWN
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機はボーナスのみで出玉を増やすノーマルタイプで、天井・AT/ART・CZ・周期モードを搭載しない。
- 設定変更に伴う天井短縮、朝一モード優遇、内部状態優遇はNOT_APPLICABLE / NONE_CONFIRMED。
- 設定値そのものによりボーナス確率・小役確率等が変化するが、これは通常の設定差であり「朝一リセット恩恵」とは分離。
reliability: ANALYSIS_HIGH_FOR_SYSTEM; NONE_CONFIRMED_FOR_SPECIAL_RESET_EFFECT

### carryOverBehavior
- 天井/ゲーム数天井: NOT_APPLICABLE。
- モード/内部状態: NOT_APPLICABLE。
- ボーナス成立状態等の実機内部瞬間状態を完全再現する項目は本DB対象外。

### powerCycleBehavior
- 天井/ゲーム数天井: NOT_APPLICABLE。
- モード/内部状態: NOT_APPLICABLE。
- 電源OFF→ONのみで発生する朝一専用性能恩恵・不利は、検索語・資料系統変更後もNONE_CONFIRMED_AFTER_RESEARCH。

### gameCounterReset
- NOT_APPLICABLE_NO_CEILING。

### ceilingAfterReset
- NOT_APPLICABLE_NO_CEILING。

### modeAfterReset
- NOT_APPLICABLE_NO_MODE_MANAGEMENT。

### stateAfterReset
- NOT_APPLICABLE_NO_PUBLIC_PERFORMANCE_STATE_SYSTEM。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 朝一/設定変更専用の天井短縮、モード優遇、当選率優遇: NONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 朝一/設定変更専用の主要不利要素: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- すろぱちくえすとは「設定変更時の挙動」欄でガックン有無を不明と記載。
- 「ハッピージャックポット」「設定変更」「リセット」「朝一」「ガックン」「据え置き」「電源OFF ON」等を組み替え、HAZUSE/P-WORLD/解析資料を再探索したが、本機固有の決定的変更判別法は固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: UNVERIFIED_FOR_RESET_DETECTION

### numericResetData
- ceiling: NOT_APPLICABLE
- resetModeDistribution: NOT_APPLICABLE
- resetStateDistribution: NOT_APPLICABLE
- publicMorningBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
- gakkun: UNVERIFIED_AFTER_RESEARCH

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED。
- HAZUSEの精密確率とすろぱちくえすとの小数1桁丸めは定義差ではなく丸め差として扱う。

## missingFields
- deterministic reset detection / gakkun behavior: UNVERIFIED_AFTER_RESEARCH
- power-cycle-specific visible behavior: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. HAZUSE 機種トップ — https://hazuse.com/machine/pachislot/6S1329/
2. HAZUSE 基本スペック — https://hazuse.com/machine/pachislot/6S1329/genre/201/
3. すろぱちくえすと — https://www.slopachi-quest.com/article/happyjackpot/
4. P-WORLD — https://www.p-world.co.jp/machine/database/8337
