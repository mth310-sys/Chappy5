machineName: ラッキーベガス
manufacturer: KPE
releaseDate: 2017-05-08
recordNumber: 1077
generation: 5号機 / 5.5号機
systemType: A+ART / 完全告知 / モード管理型ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- コナミ公式アーカイブは2017年5月稼働開始、5号機A+ARTと明記。
- パチビー、K-Navi、すろぱちくえすと、一撃で2017-05-08導入一致。
- formalModelName/certificationNumberは機種名・KPE・型式・検定・6S等で再探索したが今回高信頼直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: OFFICIAL_FOR_MONTH_AND_SYSTEM; ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_DATE

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.65%|
|2|98.10%|
|3|100.30%|
|4|101.25%|
|5|105.23%|
|6|111.69%|
- パチビー、一撃で精密値一致。すろぱちくえすとは丸め値97.7/98.1/100.3/101.3/105.2/111.7%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
|設定|BIG|
|---:|---:|
|1|1/299.3|
|2|1/299.3|
|3|1/299.3|
|4|1/299.3|
|5|1/296.5|
|6|1/293.9|

### REG
|設定|REG|
|---:|---:|
|1|1/601.2|
|2|1/601.2|
|3|1/601.2|
|4|1/601.2|
|5|1/550.7|
|6|1/500.3|

### ART初当たり
|設定|ART|
|---:|---:|
|1|1/400.6|
|2|1/393.9|
|3|1/345.9|
|4|1/335.4|
|5|1/280.8|
|6|1/256.6|
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約31G/50枚。
- すろぱちくえすとで直接確認。
reliability: ANALYSIS_SINGLE

## netIncrease
- ART「VEGAS TIME / ベガスゲーム」: 約1.9枚/G（ボーナス込み表記）。
- ART単体の厳密純増値は別定義で固定せず、公開資料の「ボーナス込み約1.9枚/G」を保持。
reliability: OFFICIAL_ARCHIVE_SYSTEM_CLASS; ANALYSIS_HIGH_MULTI_SOURCE_FOR_NET_INCREASE

## basicPayout
- BIG BONUS: 200枚。
- REG BONUS: 100枚。
- ART: 30G / 50G / 100G / 300Gの開始ゲーム数、1セット30G以上+α。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: ボーナス&ART間777GでART確定。
- 通常モード/高確モード: 最大777G。
- 天国/アメリカンドリーム: 32G天井。
- アメリカンドリームは32G以内ARTが75〜80%でループする解析。
reliability: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_CORE_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET。
- モード: 高確以上スタート確定。
- 設定変更後32Gは高確以上。
- 設定変更後100G以内にボーナス当選した場合、次回モード移行が優遇。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は天井/モードCARRYOVERとして扱う。純電源OFF→ON表で両方引継ぎが直接確認され、設定変更との比較で据え置き攻略が成立。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 天井: CARRYOVER。
- モード: CARRYOVER。
reliability: ANALYSIS_HIGH

### gameCounterReset
- settingChange: RESET。
- carryOver: CARRYOVER。
- powerCycle: CARRYOVER。

### ceilingAfterReset
- 最大777G自体の固定短縮は確認せず、モード恩恵により32G以内ART期待度が大きく上昇。
- 設定変更後32Gは高確以上確定。
reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時: 高確以上。
- 具体的な高確/天国/アメリカンドリーム個別振り分け率は今回直接固定できずUNVERIFIED_AFTER_RESEARCH。
- 設定変更後100G以内のボーナス当選時はモード移行優遇。
reliability: ANALYSIS_HIGH_FOR_HIGH_OR_BETTER; UNVERIFIED_FOR_FULL_DISTRIBUTION

### stateAfterReset
- 本機の主要な状態管理はART初当たりモードとして公開され、設定変更時は高確以上スタート。
- モードとは別の独立内部高低状態契約はNONE_CONFIRMED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更後32G以内は高確以上確定。
- 設定1でも設定変更後32G以内ART当選率約25%。
- 設定1でも設定変更後100G以内ART当選率約40%。
- 100G以内のボーナス当選は次回モード移行優遇。
reliability: ANALYSIS_HIGH

### resetPenalties
- 前日の777G天井進捗および前日モードを設定変更で消去。
- その他の設定変更専用不利要素: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更後の32G高確以上という挙動自体が朝一狙い要素だが、32G以内非当選だけで据え置き確定とはならない。
- 本機固有の決定的ガックン/初期出目/ランプ判別は検索語・資料系統変更後も固定できずNONE_CONFIRMED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR; NONE_CONFIRMED_FOR_DETERMINISTIC_GAKKUN

### numericResetData
- normalCeiling: 777G (bonus & ART interval)
- resetModeFloor: HIGH_OR_BETTER
- resetFirst32G: HIGH_OR_BETTER_CONFIRMED
- resetARTWithin32GSetting1: 約25%
- resetARTWithin100GSetting1: 約40%
- bonusWithin100GAfterReset: NEXT_MODE_TRANSITION_FAVORED
- powerCycleCeiling: CARRYOVER
- powerCycleMode: CARRYOVER

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED.
- PAYOUT rounding differences only: precision values vs rounded secondary values.

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- full setting-change mode distribution: UNVERIFIED_AFTER_RESEARCH
- deterministic machine-specific gakkun behavior: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. コナミ公式アーカイブ — https://www.konami.com/amusement/psm/archive/ps/2017/luckyvegas/
2. パチビー — https://www.pachibee.jp/machines/index/217040003
3. K-Navi — https://p-kn.com/slot/2746/
4. すろぱちくえすと — https://www.slopachi-quest.com/article/lucky-vegas/
5. 一撃 機種トップ — https://1geki.jp/slot/s_luckybegas/
6. 一撃 ART概要 — https://1geki.jp/slot/s_luckybegas/81/
7. P-WORLD — https://www.p-world.co.jp/machine/database/8314
