# 忍魂弐 ～烈火ノ章～

machineName: 忍魂弐 ～烈火ノ章～
manufacturer: 大都技研
releaseDate: 2013-07-01
releaseDatePrecision: exact_day
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せART
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入日: **2013-07-01**。パチビーで具体日確認。当時業界資料では2013-06-30納品開始とされ、翌7/1導入と整合。
- manufacturer: **大都技研**。
- 「忍魂」の後継機。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 2 | 99.7% |
| 3 | 101.7% |
| 4 | 105.5% |
| 5 | 110.9% |
| 6 | 116.3% |

- Cranky Sevenと5号機クロニクルで一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

| 設定 | BIG | REG（烈BONUS） | ボーナス合算 | ART初当たり |
|---|---:|---:|---:|---:|
| 1 | 1/399.6 | 1/655.4 | 1/248.2 | 1/486.2 |
| 2 | 1/387.8 | 1/642.5 | 1/241.8 | 1/427.7 |
| 3 | 1/376.6 | 1/630.2 | 1/235.7 | 1/456.3 |
| 4 | 1/366.1 | 1/618.3 | 1/230.0 | 1/364.2 |
| 5 | 1/358.1 | 1/595.8 | 1/223.7 | 1/355.2 |
| 6 | 1/343.1 | 1/574.9 | 1/214.9 | 1/254.1 |

- ART初当たりは設定3が設定2より重い非単調系列。そのまま保持。
- confidence: ANALYSIS_HIGH

## baseGamesPer50

- **約30～31G/50枚**。
- Cranky Sevenは1000円あたり約30G、導入前スペック資料は約31G/千円。概算・丸め差として範囲保持し、精密値へ変換しない。
- confidence: ANALYSIS_MULTI_SOURCE_APPROXIMATE

## netIncrease

- ART「月光ノ刻」: **約+1.7枚/G**。
- 1セット **50G+α**、ゲーム数上乗せ+セット継続型。
- パチビー、2013年当時業界資料、娯楽産業で一致。
- confidence: INDUSTRY_MULTI_SOURCE_HIGH

## basicPayout

- BIG: **約204枚**（297枚超払い出しで終了）。
- 烈BONUS / REG: **約48枚**（63枚超払い出しで終了）。
- confidence: INDUSTRY_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- A+ART。通常時・ボーナス後・CZ「絶空試練」などからART「月光ノ刻」へ突入。
- ART基本性能: 1セット50G+α / 約+1.7枚/G。
- 通常時内部状態: 低確 / 高確 / 超高確の3状態が解析上確認される。
- 第1天井: **ボーナス+ART間990G+前兆**でART突入。
- 第2天井: **ボーナス間1490G+前兆**でART+「傑束ノ刻SUPER」。
- 天井は当時解析複数系統で一致。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CLEARS_BOTH_CEILING_PROGRESS_AND_RESELECTS_INITIAL_STATE__HIGH_START_RATE_PUBLIC__PURE_POWER_CYCLE_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更で天井到達までのゲーム数をクリア**。第1天井（ボーナス+ART間990G）・第2天井（ボーナス間1490G）の宵越し進捗は設定変更時に失われる。
- 設定変更後は内部状態を再設定し、**20～33%で高確率状態スタート**とする解析あり。高設定ほど優遇。
- 詳細な設定別高確スタート率は今回直接表を固定できず、20～33%レンジのみ保存。

### carryOverBehavior

- 設定変更時は天井進捗CLEARが確認される一方、**設定据え置き時の第1/第2天井進捗・内部状態の引継ぎを本機固有の直接資料で完全には固定できず UNVERIFIED_AFTER_RESEARCH**。
- 当時天井狙い資料の「宵越し×」は設定変更時リセットを前提とする記述として扱い、純据え置き契約へ自動変換しない。

### powerCycleBehavior

- 2013年当時資料にも **電源ON/OFF時の挙動は調査中** と明記されたものがあり、今回も公式・業界・当時解析・古いDB・後年資料を表記揺れで再探索したが、設定変更を伴わない単純電源OFF→ONのみの天井/内部状態処理を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- settingChange: **CLEAR_CONFIRMED**。
- firstCeilingCounter: ボーナス+ART間990G進捗を設定変更でCLEAR。
- secondCeilingCounter: ボーナス間1490G進捗を設定変更でCLEAR。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の短縮天井は今回確認できず。
- 通常天井を0Gから再計数するため、第1天井 **990G+前兆**、第2天井 **1490G+前兆**が基準。
- resetSpecificShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- ゲーム数解除型の通常A/B等のモード体系ではなく、主に内部状態（低確/高確/超高確）が朝一挙動に関係する。
- 設定変更時に高確スタート抽選あり。
- 朝一専用ゲーム数モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更後 **高確スタート20～33%**（高設定ほど優遇）という公開解析あり。
- 低確/高確/超高確の詳細設定別初期振分は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後、高確から開始する可能性が **20～33%**。朝一ART抽選上の主要な優遇要素として保存。
- 設定変更専用短縮天井、確定CZ、確定ART: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時、第1/第2天井の進捗が消失するため、前日ハマリの宵越し天井狙いは不利。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更時の高確スタートは朝一挙動の推測材料になり得るが、確定判別ではない。
- ガックン、液晶初期ステージ固定差、設定変更確定表示など本機固有の高信頼判別契約は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeHighStateStartRate: **20～33%**（高設定ほど優遇、解析値）。
- settingChangeFixedShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- firstCeilingAfterReset: **990G+前兆**（ボーナスもARTも非当選の場合）。
- secondCeilingAfterReset: **1490G+前兆**（ボーナス非当選の場合）。
- resetSpecificCZRate: **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- settingChangeCeilingCounter: CLEAR
- firstCeiling: 990G+前兆（ボーナス+ART間）
- secondCeiling: 1490G+前兆（ボーナス間）
- settingChangeHighStateStartRate: 20～33%
- purePowerCycleCounterBehavior: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_SETTING_CHANGE_COUNTER_CLEAR__ANALYSIS_SINGLE_FOR_20_TO_33_PERCENT_HIGH_START__UNVERIFIED_FOR_PURE_POWER_CYCLE_AND_EXACT_CARRYOVER_CONTRACT

## missingFields

- purePowerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- exactCarryOverBehaviorWhenDefinitelyUnchanged: `UNVERIFIED_AFTER_RESEARCH`
- detailedSettingChangeStateDistributionBySetting: `UNVERIFIED_AFTER_RESEARCH`
- machineSpecificResetDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- baseGamesPer50: **約30G/1000円** vs **約31G/1000円**。いずれも概算値で、精密競合と断定せず30～31Gの概算レンジとして保持。
- その他、今回採用した設定別機械割・ART純増・基本獲得・2段天井に重大な数値競合は確認せず。

## sources

取得日: 2026-09-06

- パチビー / 忍魂弐 ～烈火ノ章～: https://www.pachibee.jp/machines/about/213050004
  - 2013-07-01導入、5号機、ART/CZ/天井搭載、月光ノ刻50G+α・約1.7枚/G、BIG約204枚、烈BONUS約48枚。
  - reliability: ANALYSIS_HIGH
- 娯楽産業 2013-05-17 / 大都技研「忍魂弐 ～烈火ノ章～」プレス試打会: https://www.goraku-sangyo.com/%E3%80%90%E5%8B%95%E7%94%BB%E3%81%82%E3%82%8A%E3%80%91%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%80%80%E3%80%8C%E5%BF%8D%E9%AD%82%E5%BC%90-%E3%80%9C%E7%83%88%E7%81%AB%E3%83%8E%E7%AB%A0%E3%80%9C%E3%80%8D/
  - ボーナス+ART、月光ノ刻50G+α・約1.7枚/G。
  - reliability: INDUSTRY
- Pマンズ / 2013-05-21当時業界NEWS: https://p-mans.blogspot.com/2013/05/5.html
  - 6/30納品開始、A+ART、BIG約204枚、REG約48枚、ART50G+α・約1.7枚/G。
  - reliability: INDUSTRY
- Cranky Seven / 忍魂弐 ～烈火ノ章～解析: https://crankyseven.com/shinobidamashii-two-pc.htm
  - 設定別BIG/REG/合算/ART初当たり、機械割、約30G/1000円、二段天井、設定変更時天井CLEAR、高確スタート20～33%、低/高/超高確。
  - reliability: ANALYSIS_HIGH
- 5号機クロニクル / 大都技研5号機一覧: https://5goki.com/daito
  - 設定別機械割の別系統照合。
  - reliability: ANALYSIS_SINGLE
- スロスター 2013年導入前資料: https://ameblo.jp/slostar/entry-11527030431.html
  - 約31G/千円、990G/1490G天井、BIG約204枚、REG約48枚、ART50G+α・約1.7枚/G。
  - reliability: PERIOD_ANALYSIS_SINGLE
- 天井ハイエナ生活 2013年当時解析: https://macerate.seesaa.net/article/367893631.html
  - 第1天井990G+α、第2天井1490G+α、設定変更で天井ゲーム数リセット、電源ON/OFF時挙動は当時「調査中」。
  - reliability: PERIOD_ANALYSIS_SINGLE

coreStatus: COMPLETE_CORE
resetBehaviorQA: RESEARCHED_WITH_POWER_CYCLE_GAPS
