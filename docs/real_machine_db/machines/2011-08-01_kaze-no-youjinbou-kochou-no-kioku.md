# 旋風の用心棒～胡蝶の記憶～

machineName: 旋風の用心棒～胡蝶の記憶～
manufacturer: ロデオ
releaseDate: 2011-08-01
releaseDateStatus: K-Navi / HAZUSEとも2011-08-01導入開始で一致。
generation: 5号機
systemType: A+ART / CZ / ストック+継続率+ゲーム数上乗せART
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_WITH_CEILING_RESET_CONFIRMED
formalModelName: 旋風の用心棒 胡蝶の記憶R
approvalNumber: 1S0382

## chronologyNote

- 最新mainのrecordCount 595 / chronologicalFrontier 2011-07-31「ぱちすろ黄門ちゃま 光れ!正義の印籠編!」から継続。
- 2011-07-31同日群〜2011-08-01境界を再監査し、repo内重複検索で本機未登録を確認。
- K-Navi、HAZUSEとも2011-08-01導入開始で一致するため596件目として追加。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.9% |
| 3 | 100.8% |
| 4 | 105.2% |
| 5 | 110.1% |
| 6 | 115.1% |

HAZUSE系解析値と複数回顧資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/331.0 |
| 2 | 1/303.4 |
| 3 | 1/316.6 |
| 4 | 1/282.5 |
| 5 | 1/297.9 |
| 6 | 1/265.3 |

### REG合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/504.1 |
| 2 | 1/461.5 |
| 3 | 1/474.9 |
| 4 | 1/425.6 |
| 5 | 1/448.9 |
| 6 | 1/399.6 |

### ボーナス合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/199.8 |
| 2 | 1/183.1 |
| 3 | 1/190.0 |
| 4 | 1/169.8 |
| 5 | 1/179.1 |
| 6 | 1/159.4 |

### ART初当たり
| 設定 | 確率 |
|---|---:|
| 1 | 1/493.1 |
| 2 | 1/494.0 |
| 3 | 1/413.6 |
| 4 | 1/391.2 |
| 5 | 1/323.6 |
| 6 | 1/290.7 |

HAZUSE掲載値。BIG/REG/合算は別解析資料でも照合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

1000円あたりゲーム数（パチマガスロマガ）:

| 設定 | G/50枚 |
|---|---:|
| 1 | 30.08G |
| 2 | 30.23G |
| 3 | 30.36G |
| 4 | 30.51G |
| 5 | 30.64G |
| 6 | 30.79G |

HAZUSEの設定1〜6 30.1〜30.8Gと整合。
confidence: CONTEMPORARY_ANALYSIS_CROSSCHECKED

## netIncrease

- ART「旋風チャンス」: **約+1.2枚/G**
- 基本1セット: **30G + 継続バトル6G = 36G+α**
- 継続率: **50〜90%**
- ゲーム数上乗せ・セットストック併用。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- BIG: **約200枚**（264枚超払い出しで終了）
- REG: **約54枚**（12Gまたは6回入賞で終了）
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は低確・高確・超高確の内部状態を持つ。
- CZ「旋風の兆し」は最大7G。小役7連続入賞でART確定、ART突入率は約40%超。
- ART「旋風チャンス」は1セット36G+α、約+1.2枚/G。ゲーム数上乗せ・継続率抽選・セットストックで継続。
- 上乗せ特化ART「鬼旋風チャンス」は10〜30G、「神旋風チャンス」は50G。
- 通常天井は**ボーナス間1000G**。到達後は**次回ボーナスまで継続する無限ART**へ突入。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。本機専用攻略項目として「設定変更後の挙動」「状態移行率(設定変更後)」が存在することをK-Naviで確認。別天井資料で、設定変更後はボーナス間1000G天井までのゲーム数がクリアされることを直接確認。したがって天井進捗CLEARは確定。設定変更時の低確/高確/超高確具体振り分け、ARTストック・上乗せ残G等の処理は本文数値を安全に回収できず **UNVERIFIED_AFTER_RESEARCH**。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・内部状態・ART関連権利を本機固有の直接本文で確定できず。設定変更時CLEARから据え置きRETAINを一般則で推測しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の天井進捗、内部状態、ART/CZ関連権利の処理を直接確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間1000G天井は設定変更でクリア。

ceilingAfterReset: **1000G_NORMAL_CEILING; RESET_SHORTENING_NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後専用の短縮天井は確認できず。

modeAfterReset: **PARTIAL_EXISTENCE_CONFIRMED_VALUE_UNVERIFIED**。K-Naviに「状態移行率(設定変更後)」項目の存在を確認したが、具体的な低確/高確/超高確振り分け本文を安全に回収できず。数値は推測しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のCZ前兆・ARTストック・残G等の個別処理は未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後専用短縮天井や朝一確定ART等は確認できず。

resetPenalties: **CEILING_PROGRESS_LOSS_CONFIRMED_IF_SETTING_CHANGED**。前日ボーナス間ハマリがある場合、設定変更で1000G天井進捗が消失する。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ等による本機固有の変更判別を直接確定できず。

numericResetData:
- 通常天井: **ボーナス間1000G**
- 天井恩恵: **次回ボーナスまでの無限ART**
- 設定変更時天井進捗: **CLEAR**
- 設定変更後短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時状態振り分け: **解析項目存在は確認、具体値UNVERIFIED**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 変更判別公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; CEILING_RESET_DIRECTLY_CONFIRMED, RESET_STATE_ANALYSIS_ITEM_EXISTS_BUT_VALUES_UNRECOVERED, CARRYOVER/POWER_CYCLE/DETECTION_UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 主要性能コアに実質的な数値CONFLICTなし。
- ボーナス合算設定6は資料により1/159.4と1/159.5の丸め差がある。HAZUSE精密値1/159.4を主値とし、丸め差として扱う。

## missingFields

- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- setting-change state distribution numeric values: **UNVERIFIED_AFTER_RESEARCH**
- ART stock / remaining-game treatment on setting change: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- reset-specific short ceiling / morning hit rate: **NONE_CONFIRMED_AFTER_RESEARCH**

## sources

取得日: 2026-09-04

- K-Navi: https://p-kn.com/slot/1458/
- HAZUSE: https://hazuse.com/machine/pachislot/1S0382/
- P-WORLD: https://www.p-world.co.jp/machine/database/6427
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/57/a.php
- パチマガスロマガ 小役/1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/57/c.php
- パチスロ立ち回り講座 天井情報: https://crankyseven.com/sp/tenjo-5ka.htm
- 回顧スペック照合: https://ab01.seesaa.net/article/275471329.html

## sourceConfidence

**HIGH for performance core and normal ceiling; MEDIUM/PARTIAL for resetBehavior.**
主要スペック・ボーナス確率・ART構造・1000円G数・天井はHAZUSE/K-Navi/P-WORLD/パチマガ等で複数照合。設定変更時の天井CLEARは別系統天井資料で直接確認。設定変更後状態移行解析の存在はK-Naviで確認したが具体値、据え置き、電源OFF→ON、変更判別は十分再探索後も安全に確定できずUNVERIFIED。
