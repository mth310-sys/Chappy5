machineName: パチスロ 逆転裁判
manufacturer: エンターライズ
releaseDate: 2017-05-22
recordNumber: 1081
generation: 5号機 / 5.5号機
systemType: ART / 周期管理 / CZ経由
formalModelName: 逆転裁判／ZW
certificationNumber: 6S1366
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2017-05-22、メーカーエンターライズ、型式`逆転裁判／ZW`、検定番号`6S1366`を直接確認。
- パチビー、すろぱちくえすと、ちょんぼりすた、pachislo-dataでも2017-05-22導入を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.6%|
|2|98.7%|
|3|100.8%|
|4|104.0%|
|5|107.3%|
|6|112.5%|
- パチビー、すろぱちくえすと、ちょんぼりすた等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/347.6|
|2|1/336.4|
|3|1/322.7|
|4|1/288.7|
|5|1/263.5|
|6|1/237.5|

### CZ出現率
|設定|CZ|
|---:|---:|
|1|1/180.4|
|2|1/172.2|
|3|1/168.1|
|4|1/151.7|
|5|1/135.3|
|6|1/123.0|
- HAZUSE、パチビー、すろぱちくえすとで主要系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約46G/50枚。
- HAZUSE、すろぱちくえすと、スロがちで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「法廷BATTLE」: 約2.0枚/G。
- パチビー、HAZUSE、P-WORLD、すろぱちくえすと等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「法廷BATTLE」: 1セット平均約40G。継続率約75%。
- CZ「法廷JUDGE」: 20G固定、ART期待度約40%以上。
- ARTはゲーム数変動型で、説明・証言・尋問・つきつけ等のパート構成。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は1周期40G。
- ART周期天井: 最大30周期でART当選。単純40G換算約1200GだがCZ等を挟むため実ゲーム数は伸び得る。
- CZ周期天井: CZ非当選最大15周期でCZ当選。
- 5の倍数周期、ART天井27周期以降、CZ天井1・2・5・10周期以降などにチャンス周期が存在。
- これ以上の通常時全抽選テーブルは物差し用途外のため収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_WITH_PUBLIC_RESET_MODE_DISTRIBUTION_AND_VISIBLE_RESET_CLUE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更で周期数/天井進捗はRESET。
- サイコ・ロックポイント系の内部モードはRESELECT。
- 期待値見える化の実戦値では、設定変更後のナゾptは123pt、弁護士レベルは0レベル、ステージは成歩堂法律事務所スタートとして整理されている。
- これらナゾpt/弁護士レベルの開始値は解析確定値ではなく「実戦上」と明記された観測値なので、その信頼度を分離する。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_MODE_RESET; OBSERVATIONAL_FOR_VISIBLE_START_VALUES

### carryOverBehavior
- 据え置き時は前日の液晶表示を引き継ぐとの攻略資料あり。
- 周期/天井進捗は引継ぎ扱い。
- 画面表示が前日状態を引き継いでいれば据え置き濃厚という変更判別材料になる。
reliability: ANALYSIS_SINGLE_TO_MULTI_SOURCE

### powerCycleBehavior
- 電源OFF→ONのみでは周期数/天井進捗をCARRYOVER。
- 内部モードもCARRYOVERとする資料あり。
- ナゾpt・弁護士レベル個別の純電断時契約は、今回取得できた高信頼テキストでは独立明記が弱いため、液晶表示全引継ぎという据え置き資料から過度に補完せず `CARRYOVER_INDICATED_BUT_COMPONENT_LEVEL_NOT_SEPARATELY_VERIFIED` とする。
reliability: ANALYSIS_HIGH_FOR_PERIOD_AND_MODE_CARRYOVER; PARTIAL_FOR_COMPONENT_LEVEL_STATE

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ON: CARRYOVER。

### ceilingAfterReset
- 設定変更で30周期ART天井・15周期CZ天井の進捗をRESET。
- リセット専用の短縮天井は確認されない。
- リセット後実践ゾーンでは1周期目の当選率が特に高い傾向は確認されず、強い朝一ゾーン恩恵なしと評価されている。

### modeAfterReset
- 設定変更時にサイコ・ロックptモードA〜Dを再抽選。
- 公開振り分け:
  - 設定1・2: A 75.0% / B 12.5% / C 6.3% / D 6.3%
  - 設定3・4: A 62.5% / B 25.0% / C 6.3% / D 6.3%
  - 設定5: A 50.0% / B 25.0% / C 12.5% / D 12.5%
  - 設定6: A 37.5% / B 25.0% / C 18.8% / D 18.8%
- 純電源OFF→ONでは内部モード引継ぎ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RESET_DISTRIBUTION

### stateAfterReset
- 実戦上の初期表示: ナゾpt 123pt / 弁護士レベル0 / 成歩堂法律事務所。
- これは公開解析値ではなく実戦観測値として保存し、内部状態の確定初期値とはしない。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更時に内部モードを再抽選するが、リセット後実践値では特段強い1周期目優遇は見られない。
- 固定短縮天井・リセット専用ART確定等の主要恩恵はNONE_CONFIRMED。

### resetPenalties
- 周期/天井進捗が消えるため、前日ハマリが深い台では設定変更が宵越し天井狙いに対する不利要素となる。
- それ以外の専用ペナルティはNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更時は液晶表示が初期化され、据え置き時は前日表示を引き継ぐという資料があり、朝一変更判別の主要手掛かり。
- ただしホール側の対策・遊技開始後の変化等を考慮し、表示単独を100%確定判別とはしない。
- 本機固有ガックンについては「逆転裁判」「設定変更」「リセット」「朝一」「ガックン」「エンターライズ」等を再探索したが、決定的な本機固有契約を固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_DISPLAY_CLUE; UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetModeDistribution:
  - setting1_2: A75.0 / B12.5 / C6.3 / D6.3%
  - setting3_4: A62.5 / B25.0 / C6.3 / D6.3%
  - setting5: A50.0 / B25.0 / C12.5 / D12.5%
  - setting6: A37.5 / B25.0 / C18.8 / D18.8%
- observedResetNazoPt: 123pt (EXPERIMENTAL/OBSERVATIONAL)
- observedResetLawyerLevel: 0 (EXPERIMENTAL/OBSERVATIONAL)
- resetFirstCycleStrongBenefit: NOT_OBSERVED_IN_SMALL_SAMPLE
- ART ceiling: 30 cycles
- CZ ceiling: 15 cycles

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for core performance.
- リセット後ナゾpt=123pt・弁護士Lv0は実戦観測値であり、解析確定値と混同しない。

## missingFields
- deterministic gakkun behavior: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle component-level contract for nazoPt/lawyerLevel: PARTIAL_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. HAZUSE — https://hazuse.com/machine/pachislot/6S1366/
2. HAZUSE AT/ART — https://hazuse.com/machine/pachislot/6S1366/genre/209/
3. パチビー — https://www.pachibee.jp/machines/index/217040008
4. すろぱちくえすと — https://www.slopachi-quest.com/article/gyakutensaiban/
5. ちょんぼりすた — https://chonborista.com/slot/enta-slot/36075/
6. 期待値見える化 — https://slotjin.com/zone/gyakutensaiban/
7. スロがち — https://slogati.com/gyakutensaiban/
8. P-WORLD — https://www.p-world.co.jp/machine/database/8358
9. pachislo-data — https://pachislo-data.com/enterrise/35518
