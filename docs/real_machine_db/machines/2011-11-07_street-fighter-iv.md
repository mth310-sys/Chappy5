# ストリートファイターIV

machineName: ストリートファイターIV
aliases: ストリートファイターⅣ / スト4
manufacturer: エンターライズ
formalModelName: ストリートファイターIVX
approvalNumber: 1S0375
releaseDate: 2011-11-07
releaseDateStatus: DATE_DEFINITION_CONFLICT_WITH_LATER_DATABASE

generation: 5号機
systemType: ボーナス+ART / ゲーム数上乗せART
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「必勝金閣寺物語～古都絢爛～」を確認して開始。
- 開始時正本は recordCount 615 / chronologicalFrontier 2011-11-07。INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定の2011-11-07同日群先頭候補「ストリートファイターIV」を処理。
- repo code searchで機種名未検出、想定実パス `docs/real_machine_db/machines/2011-11-07_street-fighter-iv.md` を直接fetchして404を確認し未登録と判断。
- K-Naviとパチビーはホール導入日2011-11-07。グリーンべるとは2011-11-06から納品開始予定。HAZUSEは2011-11-21を掲載するため日付定義差/競合として保持し、本DB時系列キーは複数当時系資料で一致する2011-11-07を採用。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.3% |
| 3 | 100.9% |
| 4 | 104.7% |
| 5 | 110.0% |
| 6 | 115.8% |

- パチマガスロマガの精密系列を主値として採用。
- HAZUSEは97 / 98 / 101 / 105 / 110 / 116%で、丸め表示として整合。
- 後年回顧資料には96.98 / 98.33 / 100.92 / 104.70 / 109.98 / 115.79%の精密値もあり、主系列と丸め範囲で整合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG / REG / ART初当たり

| 設定 | BIG | REG | ART初当たり |
|---|---:|---:|---:|
| 1 | 1/455.1 | 1/612.5 | 1/443.5 |
| 2 | 1/448.9 | 1/601.2 | 1/400.4 |
| 3 | 1/439.8 | 1/595.8 | 1/409.2 |
| 4 | 1/434.0 | 1/585.1 | 1/327.3 |
| 5 | 1/428.3 | 1/574.9 | 1/317.1 |
| 6 | 1/420.1 | 1/565.0 | 1/246.1 |

### ボーナス合成 / ボーナス+ART

| 設定 | ボーナス合成 | ボーナス+ART |
|---|---:|---:|
| 1 | 1/261.1 | 1/164.3 |
| 2 | 1/257.0 | 1/156.5 |
| 3 | 1/253.0 | 1/156.3 |
| 4 | 1/249.2 | 1/141.5 |
| 5 | 1/245.5 | 1/138.4 |
| 6 | 1/240.9 | 1/121.7 |

- パチマガスロマガがBIG/REG/ボーナス合成/ART初当たり/ボーナス+ARTを直接掲載。
- HAZUSEはBIG/REG/ボーナス合成/ボーナス+ARTを一致値で掲載。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **約31G/1000円**。通常20円スロット50枚貸しに相当するため、本DB比較値として **約31G/50枚** を採用。
- パチマガスロマガ公式系アーカイブの小役確率ページに直接掲載。
confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

- ART「覇道連舞（覇道RUSH）」純増: **約+1.8枚/G**。
- 1セット: **50G+α**（HAZUSEでは約50G＝40G+バトル約10Gと説明）。
- グリーンべると、K-Navi、P-WORLD、パチビー、HAZUSEで一致。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## basicPayout

- BIG: **平均約210枚**。
- REG: **平均約30枚**。
- HAZUSEとP-WORLDで一致。
- BIGは300枚超の払い出しで終了、REGは5回の遊技または5回の入賞で終了という規定表記もK-Navi/HAZUSEで確認。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は複数の内部状態（低確/高確等）を持ち、液晶背景の昼＜夕＜夜で高確期待度を示唆。
- ART「覇道連舞」は1セット50G+α、約+1.8枚/G。ART中のレア小役契機でバトル→勝利時にゲーム数上乗せ。
- 前兆専用ステージ「心鍛の刻」「不動の極」が存在し、不動の極はART突入期待度80%以上とされる。
- 通常天井: **ボーナス間1300Gハマリで天井状態へ移行し、その後レア小役成立で不動の極を経由してART突入**。ペナルティにより1300Gを超える場合あり。
- BIG中白7揃いでART確定。REG中は押し順正解数に応じART抽選。

## resetBehavior — v0.7

settingChangeBehavior: **DEDICATED_ANALYSIS_PAGE_EXISTS / CONCRETE_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」項目が存在することは確認できたが、現存取得経路では本文の具体値を安全に回収できず。2016年「スーパーストリートファイターIV」のリセット解析は別機種のため流用しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間1300G天井進捗、内部状態、ART前兆/権利の保持について、本機固有の直接本文を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の1300G天井進捗、内部状態、液晶背景/前兆の扱いを本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時にボーナス間1300GカウンタがCLEAR/RETAINされるかを本機固有の直接資料で確定できず。一般的な5号機挙動や後継機からの補完は禁止。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井1300Gは確定しているが、設定変更専用短縮天井や変更後の起算処理は確定できず。

modeAfterReset: **STATE_TRANSITION_AFTER_SETTING_CHANGE_ANALYSIS_ITEM_CONFIRMED / NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。K-Naviに「状態移行率(設定変更後)」専用解析項目が存在するため設定変更時に状態移行抽選が扱われることは確認できるが、具体的な振り分け数値は現存本文から回収できず。

stateAfterReset: **SETTING_CHANGE_STATE_TRANSITION_EXISTS / CONCRETE_START_STATE_UNVERIFIED_AFTER_RESEARCH**。低確/高確等の内部状態自体は確認済み。設定変更後の開始状態・振り分けは未確定。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一専用ART確率、専用高確スタート等の明確な恩恵数値は本機固有資料で確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更によって前日ハマリや状態が失われる可能性を一般則で断定せず、本機固有資料未確認として保持。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、前兆挙動等による設定変更/据え置き判別を本機固有の直接資料で確定できず。

numericResetData:
- 通常天井: ボーナス間1300Gで天井状態、その後レア小役→不動の極経由ART
- 設定変更後の天井カウンタ: UNVERIFIED_AFTER_RESEARCH
- 設定変更後の状態移行率: 専用解析項目の存在のみ確認、数値UNVERIFIED_AFTER_RESEARCH
- 設定変更専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一特定G以内ART当選率: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン等直接判別数値: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_HIGH_FOR_EXISTENCE_OF_SETTING_CHANGE_AND_STATE_TRANSITION_ANALYSIS_ITEMS / UNVERIFIED_AFTER_RESEARCH_FOR_CONCRETE_RESET_CARRYOVER_POWER_CYCLE_AND_DETECTION_VALUES

## conflicts

1. **導入日**
   - K-Navi / パチビー: 2011-11-07導入。
   - グリーンべると: 2011-11-06から納品開始予定。
   - HAZUSE: 2011-11-21導入開始。
   - 平均せず、当時系複数資料で一致する2011-11-07を本DB時系列キーに採用し、HAZUSEの11/21をCONFLICT_DATEとして保持。
2. **機械割の表示精度**
   - パチマガスロマガ: 97.0 / 98.3 / 100.9 / 104.7 / 110.0 / 115.8%。
   - HAZUSE: 97 / 98 / 101 / 105 / 110 / 116%。
   - 後年回顧: 96.98 / 98.33 / 100.92 / 104.70 / 109.98 / 115.79%。
   - 数値の方向性が一致し丸め精度差と判断。平均化はしない。

## missingFields

- settingChangeBehavior concrete details: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
- numeric mode/state distribution after setting change: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-05**

1. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/05/h.php
   - BIG/REG/ボーナス合成/ART初当たり/ボーナス+ART、機械割。
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/05/c.php
   - 1000円あたり約31G。
   - reliability: ANALYSIS_HIGH
3. K-Navi — ストリートファイターIV
   - https://p-kn.com/slot/1522/
   - 2011-11-07ホール導入開始、ART約+1.8枚/G・50G+α、設定変更後の挙動/状態移行率(設定変更後)という専用解析項目の存在、内部状態構造。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — ストリートファイターIV
   - https://www.p-world.co.jp/machine/database/6526
   - BIG約210枚、REG約30枚、ART50G+α・約+1.8枚/G、ボーナス間1300G天井。
   - reliability: INDUSTRY_DATABASE
5. パチビー — ストリートファイターIV
   - https://www.pachibee.jp/machines/about/211090008
   - 2011-11-07導入、5号機ART、ART50G+α・約+1.8枚/G。
   - reliability: INDUSTRY_DATABASE
6. グリーンべると — 上乗せとバトルがリンクした激闘型ART搭載
   - https://web-greenbelt.jp/00002348/
   - 2011-10-13記事、納品2011-11-06開始予定、ART約+1.8枚/G・約50G+α。
   - reliability: INDUSTRY
7. HAZUSE — ストリートファイターIV
   - https://hazuse.com/machine/pachislot/1S0375/
   - 型式ストリートファイターIVX、検定番号1S0375、BIG/REG/合成、機械割、平均獲得枚数、内部状態。導入日は2011-11-21として競合保持。
   - reliability: ANALYSIS_HIGH
8. 後年回顧資料 — ストリートファイターシリーズ歴代機械割
   - https://www.marimo0925.net/pachislot-kikaiwariranking-streetfighter-ban/
   - 機械割精密値96.98〜115.79%、BIG約210枚/REG約30枚。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## researchNotes

- 欠損探索では「ストリートファイターIV/Ⅳ/スト4/ストリートファイターIVX」×「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/1300G/高確/低確/状態移行率/ガックン」を組み替え、K-Navi、P-WORLD、パチビー、HAZUSE、パチマガスロマガ、当時業界記事、後年回顧を横断。
- 2016年「スーパーストリートファイターIV パチスロエディション」は名称が近く検索結果に多数混入するため、2011年型式ストリートファイターIVXの根拠としては一切転用していない。
