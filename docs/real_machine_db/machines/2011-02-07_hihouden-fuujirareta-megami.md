# 秘宝伝 ～封じられた女神～

machineName: 秘宝伝 ～封じられた女神～
manufacturer: 大都技研
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: 秘宝伝 封じられた女神 / 秘宝伝～封じられた女神～
generation: 5号機
releaseDate: 2011-02-07
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: K-Naviとパチ＆スロ必勝本が2011-02-07導入で一致。
systemType: A+ART / ボーナス+ゲーム数上乗せART / 高確率CZ・伝説モード搭載
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線547レコードを再取得して開始。
- 開始時正本は recordCount 547 / chronologicalFrontier 2011-02-07。
- `パチスロ スーパー海物語IN沖縄30KD` は別スペックとして2011年2月導入まで確認済みだが、具体的ホール導入日を今回も確定できず、2/7以前か同日かを推定しない。
- K-Navi/必勝本で2011-02-07導入を直接確認でき、repo code searchでも未登録だった本機を548件目として追加。
- chronologicalFrontierは2011-02-07のまま。同日群は継続監査対象。

## payoutRateBySetting

パチ＆スロ必勝本掲載値:
- 設定1: **97.7%**
- 設定2: **98.9%**
- 設定3: **101.5%**
- 設定4: **105.7%**
- 設定5: **109.5%**
- 設定6: **115.2%**

confidence: ANALYSIS_HIGH

## initialHitBySetting

パチ＆スロ必勝本:

### BIG
- 設定1: **1/399.6**
- 設定2: **1/399.6**
- 設定3: **1/385.5**
- 設定4: **1/385.5**
- 設定5: **1/368.2**
- 設定6: **1/368.2**

### REG
- 設定1: **1/595.8**
- 設定2: **1/590.4**
- 設定3: **1/580.0**
- 設定4: **1/565.0**
- 設定5: **1/550.7**
- 設定6: **1/452.0**

### ボーナス合算
- 設定1: **1/239.2**
- 設定2: **1/238.3**
- 設定3: **1/231.6**
- 設定4: **1/229.1**
- 設定5: **1/220.7**
- 設定6: **1/202.9**

### ボーナス+ART初当り合算
- 設定1: **1/162.4**
- 設定2: **1/157.7**
- 設定3: **1/152.1**
- 設定4: **1/140.1**
- 設定5: **1/131.1**
- 設定6: **1/114.2**

- ART単独初当りの全設定表は今回の取得可能資料では直接確定できず、合算値からの逆算はしない。
- 回顧資料では設定6 ART突入率 **1/260** の記述を確認したが、全設定比較値ではないため補助情報としてのみ保持。

confidence: ANALYSIS_HIGH for bonus / ANALYSIS_SINGLE for setting6 ART reference

## baseGamesPer50

パチマガスロマガ保存ページの1000円あたりゲーム数:
- 設定1: **32.94G**
- 設定2: **32.94G**
- 設定3: **32.95G**
- 設定4: **32.96G**
- 設定5: **32.97G**
- 設定6: **33.01G**

confidence: ANALYSIS_HIGH_ARCHIVE

## netIncrease

- ART「秘宝RUSH」: **約+1.4枚/G**
- 1セット **50G+α**

K-Navi、P-WORLD、パチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- BIG: **約210枚**（288枚を超える払出しで終了）
- REG: **約60枚 / MAX60枚**（6Gまたは6回入賞で終了）

K-Navi、P-WORLD、パチマガスロマガで整合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「秘宝RUSH」は1セット50G+α、約+1.4枚/G。ART中は特定役でゲーム数上乗せ、1回最大300Gの上乗せ可能性。
- 通常時/ボーナス後の「高確率」中にART抽選。
- 伝説モードを搭載し、高確率の連続突入に関係する。
- 通常天井は複数系統:
  - **第1天井:** ボーナス or ART間、最大900Gで無限高確率∞（ART確定）。100～900Gの振り分けがあるが当時攻略資料では90%以上が900Gとされる。
  - **第2天井:** ボーナス間1500Gで無限高確率∞ + 伝説モードロング確定。
  - **伝説モード天井:** 伝説モード滞在中70G高確率非突入で無限高確率∞との当時攻略記録あり。

天井詳細は当時攻略資料を主体とし、完全内部再現に不要な振り分け表は収集しない。
confidence: ANALYSIS_SINGLE_ERA_SOURCE for detailed ceiling / ANALYSIS_HIGH for ART system

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_COUNTERS_RESET_CONFIRMED / INTERNAL_EVENING_START_REPORTED**。2011-03-23公開の当時天井攻略資料で「設定変更で天井ゲーム数がリセット」と明記。また設定変更時は液晶上は昼スタートだが内部的には夕方で、すぐ夕方表示になりやすいとの記録あり。パチマガスロマガ保存インデックスにも本機専用「朝イチ・設定変更」解析項目が存在する。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時リセットは直接確認できたが、据え置き時に第1/第2天井カウンタ、伝説モード、内部状態、ART関連状態がどの粒度で保持されるかを本機固有の直接本文では確定できず。一般的な挙動から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井G数、内部夕方/状態、伝説モード、液晶ステージの本機固有処理を直接確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED**。当時攻略資料が宵越し狙い不可として設定変更で天井G数リセットを明記。

ceilingAfterReset: **NORMAL_COUNTER_RESTART / NO_RESET_SHORTENING_CONFIRMED**。設定変更専用の短縮天井数値は確認できない。第1天井最大900G、第2天井ボーナス間1500Gの通常仕様へ再スタートすると扱うが、個別振り分けのリセット専用テーブルは未確認。

modeAfterReset: **TRANSMISSION_MODE_RESET_DETAILS_UNVERIFIED**。伝説モード等の変更時引継ぎ/再抽選の具体値は確認できず。通常時の「高確率」「伝説モード」存在自体は複数資料で確認。

stateAfterReset: **INTERNAL_EVENING_START_REPORTED / NUMERIC_DISTRIBUTION_UNVERIFIED**。当時攻略資料では設定変更後、液晶は昼でも内部的に夕方スタートと報告。夕方状態の正確な滞在率・移行率・継続数値は今回取得せず、数値振り分けはUNVERIFIED。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **INTERNAL_EVENING_START_REPORTED**。設定変更後は内部夕方スタートとされ、通常開始より高確率への期待を持てる朝一要素。ただし朝一○G以内当選率等の公開比較数値は確認できず。

resetPenalties: **CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。第1/第2天井の前日進捗を設定変更時に失うため、宵越し天井狙いに不利。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。設定変更/朝一/リセット/据え置き/電源OFF ON/ガックン/初期出目/ステージを組み替え、当時解析・古い攻略・回顧資料を横断したが、本機固有の確定的なガックンや初期出目判別は直接確定できず。液晶昼→早期夕方は内部夕方スタートの示唆にはなり得るが、設定変更確定判別としては扱わない。

numericResetData:
- firstCeiling: **max 900G (bonus or ART interval)**
- secondCeiling: **1500G bonus interval**
- settingChangeCeilingCounter: **RESET**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetState: **internal evening reported; exact distribution UNVERIFIED**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**
- resetDetectionNumeric: **NONE_CONFIRMED**

resetBehaviorQA: **PARTIAL_DIRECT_RESET_COUNTER_AND_INTERNAL_STATE_EVIDENCE**

## conflicts

- 後年の5号機クロニクルには本機を「疑似ボーナス+ART」「秘宝RUSH純増約2.2枚/G」とする記述があるが、K-Navi、P-WORLD、パチマガスロマガの当時系資料は本機をリアルボーナス搭載A+ART、秘宝RUSH約1.4枚/Gとして一致する。
- **POSSIBLE_SERIES_CONTAMINATION / SOURCE_ERROR** と判断し、2.2枚/G値は性能コアへ統合しない。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- ART initialHitBySetting full table: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior exact details: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- reset mode distribution: **UNVERIFIED_AFTER_RESEARCH**
- reset state numeric distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. K-Navi — 秘宝伝 ～封じられた女神～
   - https://p-kn.com/slot/1335/
   - 2011-02-07ホール導入開始、A+ART、ART 50G・約1.4枚/G、基本払出条件を確認。
   - confidence: ANALYSIS_HIGH

2. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/1727/1/27085
   - 2011-02-07導入、BIG/REG/合算、ボーナス+ART合算、機械割97.7～115.2%を確認。
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/48/a.php
   - ART約1.4枚/G、50G+α、BIG約210枚、REG約60枚を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

4. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/48/c.php
   - 設定別32.94～33.01G/1000円を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

5. パチマガスロマガ — 機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/48/daitogiken_slot_48.php
   - 「天井」「朝イチ・設定変更」「伝説モード」専用解析項目の存在を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE_INDEX_ONLY

6. P-WORLD — 秘宝伝～封じられた女神～
   - https://www.p-world.co.jp/machine/database/6200
   - 5号機ART、BIG約210枚、REG MAX60枚、ART 50G+α・約1.4枚/Gを照合。
   - confidence: INDUSTRY_DB

7. 天井ハイエナ生活 — 2011-03-23「秘宝伝～封じられた女神 天井ハイエナ攻略」
   - https://macerate.seesaa.net/article/192175568.html
   - 第1天井最大900G、第2天井1500G、設定変更で天井G数リセット、変更時内部夕方スタート、伝説モード天井70Gを確認。
   - confidence: ANALYSIS_SINGLE_ERA_SOURCE

8. スロジキ — 2012-08-29回顧
   - https://plaza.rakuten.co.jp/surojiki/diary/201208290002/
   - 設定6機械割115.2%、ボーナス合算1/202.9、ART突入率1/260、ART50G・約1.4枚/Gの回顧照合。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

9. 5号機クロニクル — 大都技研一覧
   - https://5goki.com/daito
   - 2011/2導入は整合するが、疑似ボーナス+ART・純増2.2枚/G記述は当時高信頼資料群と矛盾するため性能根拠から除外。
   - confidence: CONFLICT_SOURCE_ERROR_OR_SERIES_CONTAMINATION
