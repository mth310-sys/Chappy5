machineName: スーパーミラクルジャグラー
manufacturer: 北電子
releaseDate: 2017-06-19
recordNumber: 1095
generation: 5号機
systemType: ノーマル / Aタイプ / BIG+REG
formalModelName: スーパーミラクルジャグラー／KU
certificationNumber: 6S0391
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 北電子公式製品ページおよび製品一覧で2017年6月の「スーパーミラクルジャグラー」を確認。
- HAZUSEで型式 `スーパーミラクルジャグラー／KU`、検定番号 `6S0391`、導入開始日2017-06-19を確認。
- K-Navi、一撃、すろぱちくえすと等も2017-06-19導入で一致。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
|設定|機械割 / 出率（公称）|
|---:|---:|
|1|96.0%|
|2|97.8%|
|3|99.5%|
|4|102.0%|
|5|104.5%|
|6|108.1%|
- 複数解析・業界系スペック表で一致。後発資料も北電子発表値として同系列を掲載。
- フル攻略/シミュレート値は別定義のためcanonical公称値に混ぜない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_PUBLISHED_RATE

## initialHitBySetting
### BIG
|設定|確率|
|---:|---:|
|1|1/282.5|
|2|1/273.1|
|3|1/268.6|
|4|1/256.0|
|5|1/251.1|
|6|1/230.8|

### REG
|設定|確率|
|---:|---:|
|1|1/468.1|
|2|1/431.2|
|3|1/372.4|
|4|1/341.3|
|5|1/304.8|
|6|1/332.7|

### ボーナス合算
|設定|確率|
|---:|---:|
|1|1/176.2|
|2|1/167.2|
|3|1/156.0|
|4|1/146.3|
|5|1/137.7|
|6|1/136.2|
- REGは設定5が設定6より軽い変則系列。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 後年のジャグラー横断資料で **約34〜37G/50枚** の掲載を確認。
- 設定別の厳密な公表ベースではなくレンジ表記のため、比較値として `approximately 34-37G per 50 medals` を採用。
reliability: ANALYSIS_SINGLE_RANGE_VALUE

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE_NO_AT_ART_RT_NET_INCREASE_METRIC。

## basicPayout
- BIG: **純増312枚**（345枚払い出し）。
- REG: **純増104枚**（105枚払い出し）。
reliability: INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## modeSpecificMinimumData
- 天井: **NOT_APPLICABLE_NO_CEILING**。
- ゲーム数解除モード、CZ、AT/ART、周期天井: **NOT_APPLICABLE**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_GAKKUN_AND_BGM_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 通常ゲーム数天井・モードを持たないため、天井ゲーム数RESET恩恵は `NOT_APPLICABLE`。
- すろぱちくえすと朝一比較表では、**ボーナス終了後5G以内BIGの特殊BGM条件は設定変更でRESET**。
- 朝一1G目のリールガックンは設定変更濃厚とされる。
reliability: ANALYSIS_HIGH_FOR_DIRECT_RESET_BEHAVIOR

### carryOverBehavior
- 据え置きでは設定変更処理が入らないため、前日ボーナス終了後5G以内という特殊BGM条件が残っていれば朝一へ持ち越し得る。朝一5G以内BIGで対象特殊BGMが流れれば据え置き濃厚という解析が複数系統に存在。
- 天井・ゲーム数解除モードは非搭載。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_BGM_CARRYOVER_DETECTION

### powerCycleBehavior
- すろぱちくえすと直接比較表: **BGM変化条件は電源ON/OFFのみでは引き継ぐ**。
- 天井・ゲーム数モードは非搭載。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用の短縮天井なし。

### modeAfterReset
- ゲーム数解除モード/天井モード: **NOT_APPLICABLE**。
- 朝一専用当選モード・設定変更専用当選率優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- AT/ART機の低確/高確等に相当する通常内部状態: **NOT_APPLICABLE_NO_CLASSIC_LOW_HIGH_AT_STATE**。
- 特殊BGMの5G条件のみ設定変更RESET / 純電断CARRYOVERの直接情報あり。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、朝一高確、CZ優遇、モード優遇等: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更自体が初当たり確率を上げる公開朝一数値は確認なし。

### resetPenalties
- 公開された設定変更専用の冷遇要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- **朝一1G目ガックン: 設定変更濃厚**。ただし店側が1G回す等の対策が可能なため、`POSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC` とする。
- **特殊BGM判別**: 前日がボーナス後即ヤメ等で5G条件を持ち越す状況に限り、朝一5G以内BIGで「きらきら星変奏曲」「ワルキューレの騎行」「カノン」のいずれかが流れれば据え置き濃厚。設定変更時はこの条件がRESETされる。
- BGM非変化だけで設定変更を確定しない。前日状況・フリーズ系BGM等の条件差があるため補助指標扱い。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### numericResetData
- resetShortCeiling: NOT_APPLICABLE。
- resetModeDistribution: NOT_APPLICABLE / NONE_CONFIRMED。
- resetStateDistribution: NOT_APPLICABLE。
- publicFirstNGameHitRateAfterReset: NONE_CONFIRMED。
- BGM carryover window: **ボーナス終了後5G以内のBIG**（据え置き判別補助条件）。

## conflicts
- payoutRateDefinition: 公称値 96.0〜108.1% に対し、攻略打ちを仮定した予想/フル攻略値として約96.5〜109.6%、97.1〜109.7%等が存在。定義が異なるため平均せず、canonicalは公称値系列。
- baseGamesPer50: 約34〜37Gのレンジ資料はあるが、設定別精密公表値とはみなさない。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for BIG/REG/published payout after multi-source comparison.

## missingFields
- exact setting-specific baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- manufacturer-official resetBehavior document: UNVERIFIED_AFTER_RESEARCH; reset behavior relies on multi-source analysis/video observation.
- deterministic reset detection: NOT_AVAILABLE_DUE_COUNTERMEASURES_AND_CONDITIONS

## sources
取得日: 2026-09-09
1. 北電子公式 スーパーミラクルジャグラー — https://www.kitadenshi.co.jp/products/2017/smj/
2. 北電子 パチスロ製品一覧 — https://www.kitadenshi.co.jp/slot/
3. HAZUSE スーパーミラクルジャグラー（型式・検定番号・確率） — https://hazuse.com/machine/pachislot/6S0391/
4. Re.design 機種基本情報（型式・納期・スペック・獲得枚数） — https://www.redesign777.tokyo/Spec/SlotView?flag=0&id=S2017040613283501
5. すろぱちくえすと スーパーミラクルジャグラー（朝一BGM/ガックン比較含む） — https://www.slopachi-quest.com/article/supermiraclejuggler/
6. K-Navi スーパーミラクルジャグラー — https://p-kn.com/slot/2777/
7. 一撃 スーパーミラクルジャグラー — https://1geki.jp/slot/s_supermiracle_juggler/
8. 期待値見える化 スーパーミラクルジャグラー（BGM据え置き判別） — https://slotjin.com/slot-tool/miracle-juggler/
9. ジャグラー設定判別まとめ（50枚ベース約34〜37G、ガックン） — https://www.pachislotblog.tokyo/juggler-series-specmatome/
10. ジャグラー7 スーパーミラクルジャグラー（ガックン/BGMリセット判別） — https://juggler7.com/supermiracle/
