machineName: 賞金首2
manufacturer: ネット
releaseDate: 2017-05-22
recordNumber: 1084
generation: 5号機 / 5.5号機
systemType: A+ART / CZ経由 / リアルボーナス併用
formalModelName: 賞金首2／NE
certificationNumber: 6S1679
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- NETの2017-03-29発売発表で2017年5月下旬全国導入予定を確認。
- HAZUSEで型式 `賞金首2／NE`、検定番号 `6S1679`、導入開始日2017-05-22、メーカー ネットを確認。
- ちょんぼりすた、すろぱちくえすとでも2017-05-22導入で一致。
reliability: INDUSTRY_OFFICIAL_RELEASE_ANNOUNCEMENT_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.0%|
|2|98.5%|
|3|100.0%|
|4|103.6%|
|5|106.5%|
|6|110.3%|
- HAZUSE、すろぱちくえすと等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/324|
|2|1/301|
|3|1/282|
|4|1/247|
|5|1/221|
|6|1/193|

### CZ初当たり
|設定|CZ|
|---:|---:|
|1|1/167|
|2|1/158|
|3|1/151|
|4|1/138|
|5|1/129|
|6|1/118|

### ボーナス合算
|設定|ボーナス合算|
|---:|---:|
|1|1/348|
|2|1/344|
|3|1/337|
|4|1/326|
|5|1/312|
|6|1/299|
- BIGは約1/559〜1/500、REGは約1/923〜1/745。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約33.3G/50枚。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「バウンティRUSH」単体: 約1.6枚/G。
- ボーナス込み: 約1.9枚/G。
- 定義を分離して保存。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 204枚。
- REG BONUS: 48枚。
- ART「バウンティRUSH」: 1セット50G+α、ゲーム数上乗せ型。
- ARTゲーム数0時、所定条件未達なら全設定共通20%で継続抽選し、当選時50G再セット。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: ボーナス&ART間998G+前兆でART。
- 通常時は低/中/高の内部モードがありCZ/ART抽選等に影響。
- ゾロ目G数でCZ/ART抽選があり、333G・777G等は期待度が相対的に高い。
- 設定変更時は天井が665Gへ短縮。
- 通常時全モード移行率・CZ詳細抽選等は物差し用途外のため収集しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_PUBLIC_RESET_CEILING_AND_MODE_DISTRIBUTION
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESETし665Gへ短縮。
- 内部モード/状態: RESELECT。
- 液晶ステージ: 酒場ステージ。
- 公開モード振り分けは低34.38% / 中33.59% / 高32.03%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き独立比較表は十分に固定できなかったため、純電源OFF→ON契約と区別する。
- 少なくとも設定変更処理が無い場合の天井・内部モードの宵越しについて、ちょんぼりすたの電源OFF→ON表ではCARRYOVER。
reliability: ANALYSIS_SINGLE_DIRECT_FOR_POWER_CYCLE; UNVERIFIED_DIRECT_STAY_SAME_TABLE

### powerCycleBehavior
- ちょんぼりすた: 天井CARRYOVER、内部モードCARRYOVER、酒場ステージ。
- すろぱちくえすとは電源ON/OFF欄を「調査中」としていたため、複数一致ではなくANALYSIS_SINGLE_DIRECTとして保存する。
reliability: ANALYSIS_SINGLE

### gameCounterReset
- settingChange: RESET_AND_SHORTEN_TO_665G。
- powerOffOn: CARRYOVER_BY_SINGLE_DIRECT_ANALYSIS_SOURCE。

### ceilingAfterReset
- standardCeiling: 998G+前兆。
- resetCeiling: 665G+前兆。
- 設定変更による333G短縮が明確な朝一恩恵。

### modeAfterReset
- settingChange: RESELECT。
- 低モード34.38% / 中モード33.59% / 高モード32.03%。
- powerOffOn: CARRYOVER（ちょんぼりすた単一直接表）。

### stateAfterReset
- 公開資料では「内部モード/状態再抽選」と表記される。低/中/高モードの振り分けは上記numericResetDataへ。
- モードとは別の独立高低状態が設定変更時にどうなるかはUNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 天井998G→665G短縮。
- 設定変更時は高モード32.03%スタート。
- 朝一専用の追加CZ/ART確定恩恵はNONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 前日天井進捗は設定変更で消滅するため、前日ハマリの宵越し価値は失う。
- その他の設定変更専用冷遇はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 本機固有の確定的ガックン、初期出目、ランプによる変更判別契約は、機種名・型式NE・設定変更・リセット・朝一・据え置き・ガックン等へ検索語を変えて再探索しても固定できずUNVERIFIED_AFTER_RESEARCH。
- 665G短縮天井の実挙動は事後的なリセット判別材料になり得るが、事前確定判別ではない。
reliability: UNVERIFIED_FOR_DETERMINISTIC_PHYSICAL_CLUE

### numericResetData
- standardCeiling: 998G + 前兆。
- resetShortenedCeiling: 665G + 前兆。
- resetModeDistribution: 低34.38% / 中33.59% / 高32.03%。
- resetSpecificARTTargetPrizeIfApplicable: ART中の設定変更時目標賞金額について100刻み0〜9900が均等振り分けとの解析あり。ただし朝一通常時物差しへの重要度が低いため補助値扱い。

## conflicts
- powerCycleBehaviorは、ちょんぼりすたが天井/内部モードCARRYOVERを明記する一方、すろぱちくえすとは電源ON/OFFを調査中としており、数値競合ではないがソース確度差を保持。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for core yardstick values.

## missingFields
- deterministic gakkun/display reset clue: UNVERIFIED_AFTER_RESEARCH
- direct independent stay-same contract separate from power-cycle table: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. NET発売発表（DreamNews掲載） — https://www.dreamnews.jp/press/0000150006/
2. HAZUSE — https://hazuse.com/machine/pachislot/6S1679/
3. HAZUSE ART解析 — https://hazuse.com/machine/pachislot/6S1679/genre/209/
4. ちょんぼりすた — https://chonborista.com/slot/net-slot/36138/
5. すろぱちくえすと — https://www.slopachi-quest.com/article/showkinkubi2/
