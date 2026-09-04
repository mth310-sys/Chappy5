# パチスロスーパー海物語IN沖縄

machineName: パチスロスーパー海物語IN沖縄
manufacturer: 三洋物産 / SANYO
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: スーパー海物語IN沖縄 / 海スロIN沖縄 / 沖海スロ
generation: 5号機
releaseDate: 2011-02-07
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: K-Naviがホール導入開始を2011-02-07と直接掲載。pacnkは2011年2月導入と月粒度で整合。30Φ別スペック「パチスロ スーパー海物語IN沖縄30KD」は別性能で存在するため本レコードへ混在させない。
systemType: ノーマルAタイプ / ボーナス主体 / 完全告知 / ART非搭載
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線レコード「楽々温泉記」「サムライチャンプルー極」を再取得。
- 開始時正本は recordCount 546 / chronologicalFrontier 2011-01-31。
- 2011-01-31同日群を追加監査し、新たな確定同日未登録機を確認できなかったため次節点へ前進。
- 2011-02-07導入の本機をK-Naviで確認し、repo code searchで未登録を確認。
- 547件目として追加し、chronologicalFrontierを2011-02-07へ更新。同日群は継続監査対象。

## payoutRateBySetting

pacnk掲載値:
- 設定1: **97.50%**
- 設定2: **98.80%**
- 設定3: **100.10%**
- 設定4: **103.10%**
- 設定5: **106.20%**
- 設定6: **110.00%**

K-NaviのBIG/REG系列と完全一致する別系統解析値として保持。
confidence: ANALYSIS_SINGLE_CROSSCHECKED_BY_PROBABILITY_SERIES

## initialHitBySetting

K-Navi / pacnk一致:

### BIG
- 設定1: **1/288.7**
- 設定2: **1/282.5**
- 設定3: **1/277.7**
- 設定4: **1/267.5**
- 設定5: **1/259.0**
- 設定6: **1/246.4**

### REG
- 設定1: **1/471.5**
- 設定2: **1/445.8**
- 設定3: **1/420.1**
- 設定4: **1/370.3**
- 設定5: **1/322.8**
- 設定6: **1/300.6**

### ボーナス合算
K-Navi:
- 設定1: **1/179.1**
- 設定2: **1/172.9**
- 設定3: **1/167.2**
- 設定4: **1/155.3**
- 設定5: **1/143.7**
- 設定6: **1/135.4**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

パチマガスロマガ保存ページ:
- 設定1: **34.34G / 1000円(50枚)**
- 設定2: **34.42G**
- 設定3: **34.57G**
- 設定4: **34.93G**
- 設定5: **35.38G**
- 設定6: **36.18G**

confidence: ANALYSIS_HIGH_ARCHIVE

## netIncrease

- **NOT_APPLICABLE**
- K-Naviが完全告知ノーマルAタイプでART機能なしと明記。

confidence: ANALYSIS_HIGH

## basicPayout

- BIG: **約336枚**（346枚を超える払出しで終了）
- REG: **約104枚相当**（106枚を超える払出しで終了）

K-NaviがBIG約336枚および払出終了条件を掲載。REGは106枚超払出し終了条件から当時DBで一般的に整理される約104枚クラスとして保持するが、実獲得枚数の直接本文再確認は今後QA対象。
confidence: ANALYSIS_HIGH for BIG / ANALYSIS_SINGLE for REG net estimate

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルAタイプ。
- ART非搭載。
- 海モード / マリンモード / シーサーモード / シークレットモードは**遊技者が選択する演出モード**であり、天国/通常等の内部ゲーム数モードとは分離する。
- 通常ゲーム数天井、AT/ART/CZ初当たり構造は確認されない。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **NO_MATERIAL_GAMEPLAY_RESET_EFFECT_CONFIRMED_AFTER_RESEARCH / LOW_LEVEL_UNVERIFIED**。本機はボーナス主体ノーマルA・ART非搭載で、通常ゲーム数天井、AT/ART/CZ、長期ゲーム数モードに関する設定変更恩恵/不利は確認できない。パチマガスロマガ保存インデックスに本機専用「朝イチ・設定変更」項目が存在することは確認したが、取得可能本文では具体挙動を展開できなかったため、リール初期出目・告知表示等の低レベル処理は推測しない。

carryOverBehavior: **NO_MATERIAL_CARRYOVER_TARGET_CONFIRMED**。天井G数、AT/ART/CZ、長期内部ゲーム数モード等、朝一狙いに使う主要持越し対象は確認されない。ボーナス成立状態等の低レベル内部処理は本DBの収集粒度外かつ未確認。

powerCycleBehavior: **NO_MATERIAL_GAMEPLAY_EFFECT_CONFIRMED / LOW_LEVEL_UNVERIFIED**。設定変更を伴わない単純電源OFF→ONで、朝一客行動に影響する天井・モード・ART/CZ等の対象は確認されない。リール/液晶初期状態など低レベル挙動はUNVERIFIED_AFTER_RESEARCH。

gameCounterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。通常ゲーム数天井は確認されない。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。リセット専用短縮天井も該当対象なし。

modeAfterReset: **NOT_APPLICABLE_AS_GAME_COUNT_MODE**。4種類の「モード」は演出選択であり、朝一狙い用の内部モードとは扱わない。リセット専用内部モード振り分けはNONE_CONFIRMED_AFTER_RESEARCH。

stateAfterReset: **NO_MATERIAL_INTERNAL_STATE_CONFIRMED / LOW_LEVEL_UNVERIFIED**。高確/低確等、朝一収益判断へ影響する内部状態システムは確認されない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、高確スタート、初当たり優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失やストック消失等、主要な設定変更固有不利対象は確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名/三洋/海スロ/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目を組み替えて探索し、専用「朝イチ・設定変更」項目の存在までは確認したが、ガックン・初期出目・表示等による本機固有の確定的変更判別は取得できず。

numericResetData:
- normalCeiling: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetDedicatedShortCeiling: **NOT_APPLICABLE**
- resetModeDistribution: **NONE_CONFIRMED**
- resetStateDistribution: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**
- resetDetectionNumeric: **NONE_CONFIRMED**

resetBehaviorQA: **RESEARCHED_NO_MATERIAL_RESET_TARGET_CONFIRMED_LOW_LEVEL_DETAILS_UNVERIFIED**

## conflicts

- **25Φ/30Φ別スペックを分離**。後年5号機一覧では「25Φ/30Φ」を同項目で扱い、機械割96.7〜108.4%系列が見えるが、pacnkには別機 `パチスロ スーパー海物語IN沖縄30KD` として同系列（96.7 / 98.1 / 99.4 / 102.0 / 104.4 / 108.4%）、BIG 1/306.2〜1/266.4、REG 1/574.9〜1/404.5が独立掲載される。
- 本レコードのBIG/REG系列はK-Naviとpacnk標準版で一致し、PAYOUTは97.5〜110.0%。したがって30KD値を本機のCONFLICTとして平均化せず、**別スペック/別レコード候補**として分離する。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**（30KDとは別スペックであることは確認）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- REG actual net payout direct text: **QA_FOLLOWUP**
- low-level settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- low-level powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. K-Navi — パチスロスーパー海物語IN沖縄
   - https://p-kn.com/slot/1331/
   - 2011-02-07ホール導入開始、完全告知ノーマルA、ART非搭載、BIG/REG/合算、BIG約336枚を確認。
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/12/c.php
   - 設定別34.34〜36.18G/1000円を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

3. パチマガスロマガ — 機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/12/sanyo_slot_12.php
   - 「天井」「朝イチ・設定変更」専用項目が存在することを確認。具体本文は取得できず。
   - confidence: ANALYSIS_HIGH_ARCHIVE_INDEX_ONLY

4. pacnk — パチスロ スーパー海物語IN沖縄
   - https://pacnk.com/slot/tools/sh_umimonookinawa.html
   - BIG/REG系列をK-Naviと照合、PAYOUT 97.5〜110.0%を取得。
   - confidence: ANALYSIS_SINGLE_CROSSCHECKED

5. pacnk — パチスロ スーパー海物語IN沖縄30KD
   - https://pacnk.com/slot/tools/sh_supaumistoryinokinawa30ked.html
   - 30KDが別スペックとして存在し、PAYOUT 96.7〜108.4%、別BIG/REG系列であることを確認。
   - confidence: ANALYSIS_SINGLE_VARIANT_IDENTIFICATION
