machineName: パチスロ リング 終焉ノ刻
manufacturer: 藤商事
releaseDate: 2017-06-19
recordNumber: 1091
generation: 5号機 / 5.5号機
systemType: ART / 疑似ボーナス / CZ / ゲーム数管理
formalModelName: リング 終焉ノ刻FSA
certificationNumber: 6S1721
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `リング 終焉ノ刻FSA`、検定番号 `6S1721`、導入開始日2017-06-19、メーカー藤商事を直接確認。
- 一撃、期待値見える化、すろぱちくえすとでも2017-06-19導入・藤商事が一致。
- パチンコ版 `CRリング 終焉ノ刻` と混同しない。本レコードはパチスロ5号機。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OLD_DB_IDENTITY

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|98.1%|
|2|99.3%|
|3|101.8%|
|4|104.6%|
|5|107.6%|
|6|111.9%|
- 一撃、期待値見える化、複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### 貞子ボーナス初当たり
|設定|貞子ボーナス|
|---:|---:|
|1|1/352.3|
|2|1/334.7|
|3|1/318.9|
|4|1/295.8|
|5|1/271.1|
|6|1/249.7|

### ART「呪縛RUSH」初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/728.5|
|2|1/691.3|
|3|1/616.1|
|4|1/544.0|
|5|1/475.8|
|6|1/394.7|

### CZ「召魂ゾーン」初当たり
- 設定1 1/356.1 / 設定2 1/336.4 / 設定3 1/297.8 / 設定4 1/272.8 / 設定5 1/244.7 / 設定6 1/226.3。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 一撃精密値: **45.7G/50枚（全設定）**。
- 別解析の約45〜46G表記と整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「呪縛RUSH」: **約2.0枚/G**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「呪縛RUSH」: **1セット40G+α**、継続率約50〜85%、ゲーム数上乗せ＋継続抽選＋セットストック型。
- 疑似ボーナス「貞子BONUS」: **51G / 71G / 91G / 101G** の継続ゲーム数抽選。ART期待度は約40%。
- リアルボーナスの固定獲得枚数型ではないため、ボーナス枚数として固定換算しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はモードA / モードB / 天国のゲーム数管理。
- モードA天井: **1152G**。
- モードB天井: **1216G**。
- 天国: **120G以内の貞子ボーナス当選濃厚**。
- 一撃の単純天井表記「通常時1216G」は最大天井として整合するためCONFLICTではない。
- ART非当選の貞子ボーナスにはスルー回数天井があり、最大10回目でART「呪縛RUSH」確定。
- CZは内部状態（低確/高確/超高確）を参照して抽選される。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_MODE_POWER_CYCLE_AND_NUMERIC_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ゲーム数天井: **RESET**。
- 貞子ボーナススルー回数: **RESET / 再抽選**。
- 内部モード: **RESELECT**。
- 内部状態: **RESET / RESELECT**。
- 液晶ステージ: 十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_COUNTER_MODE_STATE; UNVERIFIED_FOR_DISPLAY

### carryOverBehavior
- 据え置き専用の独立比較表は十分な再探索後も純電断表と独立して固定できず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 純電源OFF→ONの直接契約から機械的に転記しない。
reliability: UNVERIFIED_FOR_DIRECT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- ゲーム数天井: **CARRYOVER**。
- 貞子ボーナススルー回数: **CARRYOVER**。
- 内部モード: **CARRYOVER**。
- 内部状態: **CARRYOVER**。
- 液晶ステージ: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_COUNTER_MODE_STATE; UNVERIFIED_FOR_DISPLAY

### gameCounterReset
- settingChange: RESET。
- powerOffOn: CARRYOVER。
- carryOver/stay-setting: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。

### ceilingAfterReset
- standardMaxCeiling: モードA 1152G / モードB 1216G / 天国120G以内。
- settingChange: ゲーム数進捗は0から再計数し、設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更時にモード再抽選されるため、12.5%で天国が選ばれた場合は120G以内のボーナス当選が濃厚となる。これは「固定リセット天井短縮」とは別定義。

### modeAfterReset
- 設定変更時モード振り分け:
  - 設定1・3・5: **通常A 62.50% / 通常B 25.00% / 天国 12.50%**。
  - 設定2・4・6: **通常A 52.34% / 通常B 35.16% / 天国 12.50%**。
- 純電源OFF→ON: 内部モードCARRYOVER。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT

### stateAfterReset
- 設定変更: 内部状態RESET / RESELECT。
- 純電源OFF→ON: 内部状態CARRYOVER。
- 設定変更時の低確/高確/超高確の具体的な初期振り分け率は、表記揺れ・設定変更/リセット/朝一/状態振り分け等で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR; UNVERIFIED_FOR_NUMERIC_STATE_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時はモードB以上が設定1・3・5で **37.5%**、設定2・4・6で **47.66%**。
- 天国スタートは全設定 **12.5%**で、選択時は120G以内の貞子ボーナス当選濃厚。
- 80G付近からレア役非経由で「真相究明モード」へ入る挙動は設定変更推測材料として複数攻略資料に掲載。
- 設定変更時はスルー回数天井も新規抽選される。

### resetPenalties
- 前日のゲーム数天井進捗、スルー回数進捗、内部モード、内部状態は設定変更で消失/再抽選される。
- リセット時天国率は12.5%固定で、通常時の高設定における天国移行率と単純比較して「常に優遇」とは扱わない。
- その他の設定変更専用冷遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- レア役を引かず**80G付近から真相究明モードへ突入**した場合、設定変更の可能性が高まると複数攻略資料が解説。
- これは確定判別ではなく `POSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC`。
- 本機固有の確定ガックン、ランプ、初期出目契約は検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_80G_CLUE; UNVERIFIED_FOR_DETERMINISTIC_GAKKUN

### numericResetData
- resetModeDistribution:
  - settings1_3_5: A62.50 / B25.00 / heaven12.50%。
  - settings2_4_6: A52.34 / B35.16 / heaven12.50%。
- resetModeBOrHigher:
  - settings1_3_5: 37.50%。
  - settings2_4_6: 47.66%。
- resetHeavenRate: 12.50% all settings。
- resetSkipCountCeilingDistribution:
  - 1回目 1.56% / 2回目 0.39% / 3回目 0.39% / 4回目 0.39% / 5回目 4.69% / 6回目 0.39% / 7回目 4.69% / 8回目 0.39% / 9回目 0.39% / 10回目 86.72%。
- resetFixedGameCeilingShortening: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- MATERIAL_NUMERIC_CONFLICT: **NONE_CONFIRMED** for canonical performance core/reset numeric values.
- 一撃の2017-07-12時点「設定変更時/電源OFF ON＝調査中」と、後発の期待値見える化/すろぱちくえすとによる直接契約は、数値矛盾ではなく `PUBLICATION_TIME_DIFFERENCE` として保持。
- 天井表記は「通常時1216G」と「モードA1152G / モードB1216G / 天国120G」があるが、前者は最大天井の簡略表記と解釈できるためCONFLICTではない。

## missingFields
- direct independent stay-setting contract separate from pure power-cycle table: UNVERIFIED_AFTER_RESEARCH
- reset internal-state numeric distribution: UNVERIFIED_AFTER_RESEARCH
- deterministic gakkun / lamp reset-detection contract: UNVERIFIED_AFTER_RESEARCH
- morning display-stage contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. HAZUSE 型式/検定番号/導入日/天井/内部モード — https://hazuse.com/machine/pachislot/6S1721/
2. 一撃 基本スペック/機械割/貞子ボーナス — https://1geki.jp/slot/s_ring2/
3. 一撃 天井/設定変更（2017-07-12時点の調査中記録） — https://1geki.jp/slot/s_ring2/3/
4. 一撃 設定判別/貞子ボーナス・ART初当たり — https://1geki.jp/slot/s_ring2/5/
5. 一撃 50枚ベース — https://1geki.jp/slot/s_ring2/4/
6. 一撃 ART概要 — https://1geki.jp/slot/s_ring2/81/
7. 一撃 貞子BONUS継続G数 — https://1geki.jp/slot/s_ring2/63/
8. 期待値見える化 朝一/天井/モード/状態/スルー回数 — https://slotjin.com/zone/ring2/
9. すろぱちくえすと 朝一/設定変更/モード振り分け/80G判別 — https://www.slopachi-quest.com/article/the-ring-shuuennotoki/
10. ちょんぼりすた 基本仕様/モード/朝一 — https://chonborista.com/slot/fuji-slot/37388/
11. pacnk 設定別CZ初当たり/性能クロスチェック — https://pacnk.com/slot/tools/sh_ringushuennokoku.html
