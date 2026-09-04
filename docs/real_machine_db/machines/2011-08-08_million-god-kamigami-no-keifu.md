# ミリオンゴッド～神々の系譜～

machineName: ミリオンゴッド～神々の系譜～
manufacturer: ミズホ
releaseDate: 2011-08-08
releaseDateStatus: K-Navi / HAZUSEとも2011-08-08導入開始で一致。
generation: 5号機
systemType: ART / セットストック / モード管理
coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetQaStatus: PARTIAL_RESET_QA_WITH_CEILING_RESET_AND_MODE_DISTRIBUTION_CONFIRMED
formalModelName: ミリオンゴッド-神々の系譜-E
approvalNumber: 1S0338

## chronologyNote

- 最新mainのrecordCount 596 / chronologicalFrontier 2011-08-01「旋風の用心棒～胡蝶の記憶～」から継続。
- 2011-08-01同日群と08-02〜08-07境界を再監査し、repo内重複検索で本機未登録を確認。
- K-Navi / HAZUSEとも2011-08-08導入開始で一致するため597件目として追加。

## payoutRateBySetting

精密系列（後年解析整理）:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.8% |
| 2 | 99.0% |
| 3 | 102.9% |
| 4 | 105.5% |
| 5 | 112.9% |
| 6 | 119.6% |

HAZUSE掲載は 98 / 99 / 103 / 106 / 113 / 119%。丸めだけでは説明しにくい設定6差を含むため、平均せずCONFLICTとして保持。
confidence: CONFLICT_CROSSCHECKED

## initialHitBySetting

### ART初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/433.4 |
| 2 | 1/373.4 |
| 3 | 1/429.6 |
| 4 | 1/310.6 |
| 5 | 1/368.9 |
| 6 | 1/265.8 |

2-9伝説掲載値。K-Naviにも本機専用「ART初当り確率」解析項目の存在を確認。
confidence: ANALYSIS_SINGLE_PLUS_PRIMARY_ANALYSIS_INDEX_CONFIRMATION

## baseGamesPer50

- **約25G/50枚**。
- 後年のGODシリーズ回顧資料で「50枚で25ゲーム」と明記。初代系譜固有値として採用し、後継「凱旋」等の値は流用していない。
confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- ART「GOD GAME」: **約+2.4枚/G**
- 1セット: **100G**
- 1セット基本獲得目安: **約240枚**
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- GOD GAME 1セット: **約240枚**（100G × 約2.4枚/G）
- GOD揃い: **ART5セット以上確定**
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は表/裏の複数内部モードを持ち、上位モードほどGG当選期待度が高い。
- ART「GOD GAME」は1セット100G、純増約+2.4枚/G。
- ART終了後は5Gの「G-ZONE」。
- GOD揃いはGG5セット以上。
- 通常天井は**ART終了後1400G**でGGストック1セット以上獲得。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL_WITH_NUMERIC_MODE_RESET**。設定変更で天井G数がリセットされ、表/裏モードを再抽選することを確認。K-Naviに本機専用「設定変更後の挙動」「モード移行率(設定変更)」解析が現存。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井G数・表裏モード・GGストック等を本機固有の直接本文で完全確定できず。設定変更時CLEARの反対として一般則で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の天井・表裏モード・ストック処理は直接確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。ART間1400G天井は設定変更でリセット。

ceilingAfterReset: **NORMAL_1400G; RESET_SHORTENING_NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後専用の短縮天井は確認できない。

modeAfterReset: **RESELECT_CONFIRMED_WITH_NUMERIC_DATA**。K-Naviの設定変更時表モード振り分け:
- 設定1: 低確A 46.22% / 低確B 21.66% / 通常 18.31% / 天国準備 13.64% / 天国S 0.11% / 天国L 0.05% / 超天国 0.01%
- 設定2: 低確A 50.71% / 低確B 11.44% / 通常 24.56% / 天国準備 13.12% / 天国S 0.11% / 天国L 0.05% / 超天国 0.01%
- 設定3: 低確A 42.61% / 低確B 22.13% / 通常 19.84% / 天国準備 15.26% / 天国S 0.11% / 天国L 0.05% / 超天国 0.01%
- 設定4: 低確A 40.64% / 低確B 22.13% / 通常 21.36% / 天国準備 15.26% / 天国S 0.46% / 天国L 0.11% / 超天国 0.05%
- 設定5: 低確A 34.53% / 低確B 28.99% / 通常 19.84% / 天国準備 16.02% / 天国S 0.46% / 天国L 0.11% / 超天国 0.05%
- 設定6: 低確A 35.30% / 低確B 26.70% / 通常 21.36% / 天国準備 16.02% / 天国S 0.46% / 天国L 0.11% / 超天国 0.05%

stateAfterReset: **PARTIAL**。表/裏モード再抽選は確認できるが、前兆中・GGストック保有時などの境界状態の全処理は未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **MODE_RESELECTION_CAN_START_ABOVE_LOW_MODE**。設定変更時に通常/天国準備/天国以上から開始する振り分けが存在。ただし設定変更専用の短縮天井は確認できない。

resetPenalties: **CEILING_PROGRESS_LOSS_CONFIRMED_IF_SETTING_CHANGED**。前日のART間ハマリは設定変更で消失。

resetDetection: **PARTIAL**。液晶「3・2・4（ミズホ）」は電源ON時・設定変更時に出現し得るため、通常時のリーチ目扱いから除外される資料を確認。ただし単独で設定変更を確定できる判別数値、ガックン挙動等は未確認。

numericResetData:
- 通常天井: **ART終了後1400G**
- 設定変更時天井進捗: **CLEAR**
- 設定変更後短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時表モード: 上記7モード振り分けを設定別に確認
- 設定1の天国以上合計: **0.17%**
- 設定2の天国以上合計: **0.17%**
- 設定3の天国以上合計: **0.17%**
- 設定4〜6の天国以上合計: **0.62%**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **HIGH for setting-change ceiling CLEAR and mode reselection numeric table; PARTIAL for carryover/power-cycle/detection boundary behavior**

## conflicts

- 機械割: 97.8/99.0/102.9/105.5/112.9/119.6% 系列 vs HAZUSE 98/99/103/106/113/119%。平均せず双方保持。
- 一部後年回顧資料に系譜の純増を約3.0枚/Gとする誤記/混同があるが、当時系資料・HAZUSE・パチマガ・パチセブン系回顧の約2.4枚/Gを採用し、後継機との混同として不採用。

## missingFields

- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- GGストック/前兆中の設定変更時境界処理: **UNVERIFIED_AFTER_RESEARCH**
- ガックン等の変更判別公開数値: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: 2026-09-04

- K-Navi 基本/導入/攻略項目: https://p-kn.com/slot/1447/
- K-Navi 設定変更時モード移行率: https://p-kn.com/slot/1447/33976/
- HAZUSE: https://hazuse.com/machine/pachislot/1S0338/
- パチマガスロマガ 基本仕様: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/34/a.php
- 2-9伝説 スペック/ART初当たり/天井設定変更: https://29den.com/milliongod/
- スマスロ解析まとめ（旧系譜の機械割/天井照合）: https://smaslo.man-soft.com/slot-kaiseki/milliongod.html
- BLANKKY GODシリーズ回顧（50枚25G/純増2.4枚）: https://blankky.com/slot/god-series-history/
- パチセブン GODシリーズ回顧: https://pachiseven.jp/articles/detail/256

## sourceConfidence

**HIGH for release date, ART structure, initial hit, ceiling reset and setting-change mode table; MEDIUM for baseGamesPer50; CONFLICT for payoutRateBySetting.**
