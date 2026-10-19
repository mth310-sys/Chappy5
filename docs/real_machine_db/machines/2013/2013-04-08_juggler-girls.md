# ジャグラーガールズ

machineName: ジャグラーガールズ
manufacturer: 北電子
releaseDate: 2013-04-08
releaseDatePrecision: exact_day
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / ジャグラー
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-04-08**（K-Navi）。
- 2013年版「ジャグラーガールズ」。2024年の6号機「ジャグラーガールズSS」と混同しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 97.8% |
| 3 | 99.7% |
| 4 | 102.0% |
| 5 | 103.9% |
| 6 | 107.4% |

- K-Navi、PachiSeven系ジャグラー一覧、後年のジャグラー解析DBで一致する公表系列。
- 別資料には完全攻略/シミュレート条件とみられる 98.07 / 99.44 / 101.54 / 104.07 / 106.21 / 110.08% が存在する。定義が異なるため平均せずCONFLICTとして保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/287.4 | 1/397.2 | 1/166.8 |
| 2 | 1/282.5 | 1/364.1 | 1/159.1 |
| 3 | 1/273.1 | 1/334.4 | 1/150.3 |
| 4 | 1/264.3 | 1/297.9 | 1/140.0 |
| 5 | 1/258.0 | 1/286.2 | 1/135.7 |
| 6 | 1/240.9 | 1/270.8 | 1/127.5 |

- K-Naviと複数ジャグラー解析資料で一致（表示丸め差のみ）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 設定1～6: **約35.14 / 35.15 / 35.15 / 35.16 / 35.70 / 35.98G/50枚**（後年解析DBの小役確率ベース掲載値）。
- 別整理資料は **約35～36G/50枚**。
- confidence: ANALYSIS_MULTI_SOURCE_RETROSPECTIVE

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。

## basicPayout

- BIG: **約312枚**。
- REG: **約104枚**。
- K-Naviの終了条件はBIG 345枚超払い出し、REG 105枚超払い出し。複数資料の実獲得目安312/104枚と整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ゲーム数解除モード/ART・ATモード: **NOT_APPLICABLE_NORMAL_TYPE**。
- ゲーム数天井: **NO_CEILING_FUNCTION_CONFIRMED**。
- 先告知はレバーON時1/4、後告知は第3停止後3/4という完全告知系。朝一恩恵値としては扱わない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NO_CEILING_MODE_OR_ADVANTAGEOUS_SECTION__GACCKUN_CONFIRMED_AS_SETTING_CHANGE_HINT__POWER_CYCLE_DETAILS_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- ゲーム数天井、規定G解除、AT/ARTモードを持たないため、それらの設定変更処理は **NOT_APPLICABLE**。
- 2013年版ジャグラーガールズについて、後年の機種別整理資料が **ガックン判別○** と掲載。実戦回顧でも、対策前は設定変更台のみ朝一1G目のガックンで判別できた事例が確認できる。
- ガックンはホール側の1G回し/リール操作等で対策可能で、設定変更確定契約としては扱わず「主要な変更推測要素」として保存。

### carryOverBehavior

- 天井ゲーム数/通常モード/AT・ART状態: **NOT_APPLICABLE_NO_CEILING_OR_MODE**。
- 据え置き時のクレジット/BET/初期出目等、本機固有の外部状態契約は資料系統を変えた再探索でも直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 天井G/モード/有利区間: **NOT_APPLICABLE**。
- 2013年版本機固有の単純電源OFF→ON時のガックン、クレジット、BET、初期出目の契約は、2024年「ジャグラーガールズSS」の資料を流用せず、十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_OR_G_TRIGGER**。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING_FUNCTION**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE_NO_GAME_COUNT_MODE**。
- 朝一専用モード/リセットモード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- AT/ART高確・CZ等: **NOT_APPLICABLE_NORMAL_TYPE**。
- 設定変更専用内部状態: **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 朝一短縮天井、モード優遇、CZ優遇等: **NONE_CONFIRMED_AFTER_RESEARCH**。
- K-Naviには「設定変更後100G以内はペカりやすい？」という検証企画名が残るが、通常ボーナス抽選から独立した公式リセット恩恵を示す資料ではないため恩恵値として採用しない。

### resetPenalties

- 天井進捗消失: **NOT_APPLICABLE_NO_CEILING**。
- 設定変更固有の公開不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **朝一1G目のガックン**: 設定変更推測要素として複数の後年資料/実戦回顧で確認。
- 対策可能（変更後1G回す、据え置き台のリールを動かす等）のため確定判別ではない。
- 単純電断時との厳密比較契約は2013年版本機固有資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- resetShortCeiling: **NOT_APPLICABLE**。
- resetModeDistribution: **NOT_APPLICABLE**。
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**。

### numericResetData

- settingChangeGameCounter: NOT_APPLICABLE_NO_CEILING
- carryOverGameCounter: NOT_APPLICABLE_NO_CEILING
- powerCycleGameCounter: NOT_APPLICABLE_NO_CEILING
- settingChangeMode: NOT_APPLICABLE_NORMAL_TYPE
- resetShortCeiling: NOT_APPLICABLE
- morningBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_HIGH_FOR_SYSTEM_AND_SPECS__ANALYSIS_MULTI_SOURCE_RETROSPECTIVE_FOR_GACCKUN__UNVERIFIED_AFTER_RESEARCH_FOR_2013_MACHINE_SPECIFIC_POWER_CYCLE_AND_DISPLAY_CONTRACT

## missingFields

- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- machineSpecificPowerCycleExternalBehavior: `UNVERIFIED_AFTER_RESEARCH`
- machineSpecificCarryOverExternalBehavior: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

### payout definition

- 公表/市場掲載系列: **96.5 / 97.8 / 99.7 / 102.0 / 103.9 / 107.4%**。
- 別解析の攻略条件系列: **98.07 / 99.44 / 101.54 / 104.07 / 106.21 / 110.08%**。
- 条件差を平均せず `CONFLICT_PUBLISHED_VS_SIMULATION_OR_TECHNICAL_PLAY` として保持。

## sources

取得日: **2026-09-06**

1. K-Navi — ジャグラーガールズ（2013-04-08導入、設定別BIG/REG/合算/機械割、払い出し条件）
   - https://p-kn.com/slot/1809/
   - reliability: ANALYSIS_HIGH_PERIOD_DB
2. PachiSeven — ジャグラーシリーズ機種一覧（2013-04-08、全設定スペック、312/104枚）
   - https://pachiseven.jp/articles/detail/9823
   - reliability: ANALYSIS_HIGH_RETROSPECTIVE
3. juggler7 — ジャグラーガールズ解析（1000円あたり35.14～35.98G、各小役、スペック）
   - https://juggler7.com/girls/index.html
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
4. 元プロMGのパチスロブログ — ジャグラーシリーズまとめ（本機35～36G/50枚、ガックン判別○）
   - https://www.pachislotblog.tokyo/juggler-series-specmatome/
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
5. 元プロMGのパチスロブログ — ジャグラーガールズ実戦回顧（設定変更台のみガックン判別できた事例、対策後無効化）
   - https://www.pachislotblog.tokyo/juggler-girls-settei6-data/
   - reliability: RETROSPECTIVE_PRACTICE_REPORT
6. 激アツ — ジャグラーガールズ設定判別（別機械割系列98.07～110.08%）
   - https://gekiatsu7.com/slot-analyze/71/
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
7. スロパチクエスト — ジャグラーガールズ設定判別/朝一挙動メニューを含む後年解析
   - https://www.slopachi-quest.com/article/juggler-girls/
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## notes

- 2024年6号機「ジャグラーガールズSS」のresetBehavior（設定変更時ガックン、電断時なし、クレジット/BET引継ぎ等）は同シリーズでも別型式のため、2013年版へ自動転記していない。
- 完全再現用の小役全確率・通常時全抽選は収集対象外。