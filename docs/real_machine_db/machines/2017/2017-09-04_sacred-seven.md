machineName: パチスロ セイクリッドセブン
manufacturer: 山佐
releaseDate: 2017-09-04
recordNumber: 1133
generation: 5号機（5.5号機世代）
systemType: A+ART
formalModelName: セイクリッドセブン/XX
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 山佐公式で5号機A+ART、稼働時期2017年9月を確認。
- パチビー、一撃、当時解析で導入日2017-09-04が一致。
- 型式は中古実機資料・当時解析で **セイクリッドセブン/XX** を確認。
reliability: OFFICIAL_PLUS_INDUSTRY_AND_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **96.9%**
- 設定2: **99.1%**
- 設定3: **100.8%**
- 設定4: **104.2%**
- 設定5: **106.1%**
- 設定6: **110.3%**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「セイクリッドラッシュ」初当たり
- 設定1: **1/574.9**
- 設定2: **1/464.7**
- 設定3: **1/531.7**
- 設定4: **1/404.0**
- 設定5: **1/478.4**
- 設定6: **1/378.6**

### BIG
- 設定1: **1/394.8**
- 設定2: **1/390.1**
- 設定3: **1/372.4**
- 設定4: **1/368.2**
- 設定5: **1/356.2**
- 設定6: **1/348.6**

### SACRED BONUS（REG系）
- 設定1: **1/399.6**
- 設定2: **1/399.6**
- 設定3: **1/390.1**
- 設定4: **1/390.1**
- 設定5: **1/381.0**
- 設定6: **1/381.0**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値 **約33G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART純増: **約1.3枚/G**。
- ボーナス込み: **約1.8枚/G**。
reliability: OFFICIAL_PLUS_INDUSTRY_MULTI_SOURCE

## basicPayout
- BIG BONUS: **204枚**。
- SACRED BONUS: **48枚**。
- ART「セイクリッドラッシュ」: **1セット50G**、継続率40〜89%、セットストック併用。
reliability: OFFICIAL_PLUS_INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は通常/高確/超高確の内部状態が存在。
- 通常時には白7高確が存在し、30Gまたは50G滞在。白7揃いでART確定。
- 通常天井: **ボーナス及びART間999G+前兆消化でART突入**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_COMPARISON_PLUS_PUBLIC_MORNING_NUMERICS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **天井G数RESET**。
- 内部状態は **RESELECT**。
- 資料上のモードも **RESELECT**。
- 液晶は **浜辺ステージ**から開始。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### carryOverBehavior
- 据え置き（設定変更なし・通常営業継続）の独立操作条件について、機種固有の直接比較資料は今回固定できず **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
- 一般論からの推測は採用しない。
reliability: UNVERIFIED_FOR_DIRECT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON時は **天井G数CARRYOVER**。
- 内部状態 **CARRYOVER**。
- モード **CARRYOVER**。
- 液晶は **浜辺ステージ**から開始。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
- 通常天井条件はボーナス及びART間999G+前兆。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### ceilingAfterReset
- 通常天井: **999G+前兆**。
- 設定変更専用の固定短縮天井は、検索語・資料系統を変えた再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING / NONE_CONFIRMED_FOR_SHORTENING

### modeAfterReset
- 設定変更時はモード再抽選。
- 純電源OFF→ONではモード引継ぎ。
- 設定変更時の通常/高確/超高確状態抽選は numericResetData に保存。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### stateAfterReset
- 設定変更時の高確移行率: 設定1〜3 **33.6%**、設定4〜6 **50.0%**。
- 設定変更時の超高確移行率: 設定1 **0.8%** / 2 **0.8%** / 3 **1.6%** / 4 **3.1%** / 5 **4.7%** / 6 **6.3%**。
- 高確と超高確が同時当選する場合があり、その場合は超高確を先に消化する仕様。
reliability: ANALYSIS_HIGH_WITH_PUBLIC_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時に高確/超高確開始抽選が行われる。
- 設定変更時の白7高確移行期待度が設定別に公開されている。
- 固定短縮天井等の追加恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_PUBLIC_STATE_NUMERICS

### resetPenalties
- 設定変更により前日までの天井進行・状態・モードは消去され再抽選となる。
- それ以外の設定変更固有の公開数値的不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_CONTRACT

### resetDetection
- 設定変更時・純電源OFF→ONとも液晶は浜辺ステージ開始のため、浜辺ステージ単独では変更判別にならない。
- 本機固有のガックン、初期出目、ランプ等による確定変更判別は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STAGE_NON_DISCRIMINATION / UNVERIFIED_FOR_OTHER_CUES

### numericResetData
- normalCeiling: **ボーナス及びART間999G+前兆**
- settingChangeHighState:
  - 設定1: **33.6%**
  - 設定2: **33.6%**
  - 設定3: **33.6%**
  - 設定4: **50.0%**
  - 設定5: **50.0%**
  - 設定6: **50.0%**
- settingChangeVeryHighState:
  - 設定1: **0.8%**
  - 設定2: **0.8%**
  - 設定3: **1.6%**
  - 設定4: **3.1%**
  - 設定5: **4.7%**
  - 設定6: **6.3%**
- settingChangeWhite7High:
  - 設定1: **3.1%**
  - 設定2: **4.7%**
  - 設定3: **6.3%**
  - 設定4: **7.8%**
  - 設定5: **9.4%**
  - 設定6: **12.5%**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**

## conflicts
- 現時点で性能コア・導入日・主要resetBehaviorに明確な数値競合なし。

## missingFields
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き・電源操作なしの独立条件での機種固有挙動: **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
- ガックン/初期出目/ランプ等による本機固有の確定変更判別: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- 山佐ネクスト公式 機種情報: https://yamasa-next.co.jp/model_sc7/
- パチビー 機種情報/導入日/基本仕様: https://www.pachibee.jp/machines/index/217080003
- P-WORLD 基本仕様: https://www.p-world.co.jp/machine/database/8462
- グリーンべると 2017-07-24発表記事: https://news.p-world.co.jp/articles/9488/greenbelt
- 一撃 機種概要/スペック: https://1geki.jp/slot/s_sarcred_seven/
- 一撃 天井/設定変更/電源OFF-ON比較: https://1geki.jp/slot/s_sarcred_seven/3/
- 一撃 状態移行抽選: https://1geki.jp/slot/s_sarcred_seven/43/
- 一撃 白7高確移行抽選: https://1geki.jp/slot/s_sarcred_seven/44/
- すろかい 当時解析/設定別BIG・REG・ART・機械割/ベース: https://slotkaiseki.hatenablog.com/entry/seven
- すろぱちくえすと 天井/リセット/基本情報: https://www.slopachi-quest.com/article/sacred-seven/
- 中一商事 中古実機 型式名確認: https://www.nakaiti.com/html/sYamasa188.html
