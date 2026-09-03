# 戦国物語-猛虎激闘絵巻-

machineName: 戦国物語-猛虎激闘絵巻-
manufacturer: ニューギン
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-06-14
releaseDateStatus: CONFIRMED_EXACT_DATE_MULTI_SOURCE
releaseDateNote: K-Naviとパチビーは2010-06-14ホール導入で一致。当時グリーンべるとは2010-05-12記事で6月13日から納品開始予定と報道。物流開始予定とホール導入日の差として保持し、本DB時系列主値は2010-06-14。
generation: 5号機
systemType: ノーマル / ボーナス主体 / 単純告知 / ART・AT・CZ非搭載
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前491「ゴッドハンターV」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 491 / chronologicalFrontier 2010-06-08。
- パチビー2010年6月月間導入一覧を再監査し、6/9〜6/13にパチスロ新規導入の掲載なし。次の明確なパチスロ候補は6/14「戦国物語-猛虎激闘絵巻-」。
- 当時グリーンべるとは6/13納品開始予定、K-Navi/パチビーは6/14ホール導入で一致するため、時系列主値を2010-06-14としてchronologicalFrontierを前進。

## payoutRateBySetting

### 主系列（K-Navi）
- 設定1: **97.3%**
- 設定2: **98.8%**
- 設定3: **100.8%**
- 設定4: **103.2%**
- 設定5: **106.1%**
- 設定6: **111.1%**

### 競合（パチマガスロマガ）
- 設定1: **97.3%**
- 設定2: **98.8%**
- 設定3: **100.8%**
- 設定4: **103.2%**
- 設定5: **106.1%**
- 設定6: **111.6%**

設定1〜5は一致、設定6のみ111.1% / 111.6%でCONFLICT。平均化しない。
confidence: CONFLICT_SETTING6 / ANALYSIS_HIGH_FOR_SETTINGS1_TO5

## initialHitBySetting

### 同色BIG
- 設定1: **1/1130**
- 設定2: **1/1111**
- 設定3: **1/1024**
- 設定4: **1/964**
- 設定5: **1/874**
- 設定6: **1/799**

### 異色BIG
- 設定1: **1/349**
- 設定2: **1/341**
- 設定3: **1/338**
- 設定4: **1/328**
- 設定5: **1/318**
- 設定6: **1/290**

### BIG合成
- 設定1: **1/266**
- 設定2: **1/261**
- 設定3: **1/254**
- 設定4: **1/245**
- 設定5: **1/233**
- 設定6: **1/213**

### REG
- 設定1: **1/397**
- 設定2: **1/377**
- 設定3: **1/350**
- 設定4: **1/324**
- 設定5: **1/299**
- 設定6: **1/271**

### ボーナス合成
- 設定1: **1/159**（K-Navi/P-WORLDは約1/159.5）
- 設定2: **1/154**
- 設定3: **1/147**
- 設定4: **1/139**
- 設定5: **1/131**
- 設定6: **1/119**（K-Navi/P-WORLDは約1/119.2）

精密内訳はパチマガスロマガ、端数付き合算はK-Navi/P-WORLDで整合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_TOTAL_RANGE / ANALYSIS_SINGLE_FOR_DETAILED_BREAKDOWN

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「戦国物語 / 戦国物語-猛虎激闘絵巻- / ニューギン」と「50枚 / 1000円 / ベース / コイン持ち / 通常時ゲーム数」を組み替え、K-Navi、P-WORLD、パチビー、パチマガスロマガ、当時業界記事、回顧DBを横断。レビュー体感値は物差し値へ採用せず、比較可能な直接値を確定できなかったため推定しない。
confidence: UNVERIFIED

## netIncrease

**NOT_APPLICABLE** — ART/AT/RTによる継続出玉区間なし。パチマガスロマガは「ARTなどの付加要素も非搭載、コイン増加契機はボーナスのみ」と明記。

## basicPayout

- 同色BIG（極BONUS）: **約312枚**（345枚超払い出しで終了）
- 異色BIG（戦BONUS）: **約206〜300枚 / 平均約260枚**。JACパターンで変動。
- REG（殿BONUS）: **約104枚**（105枚超払い出しで終了）

P-WORLDは極BONUS平均312枚、戦BONUS平均260枚、殿BONUS平均104枚。パチマガスロマガは同色BIG約312枚、異色BIG約206枚を基本純増欄に掲載しつつ、戦BONUSは200〜300枚・平均約260枚と説明。定義差を残す。
confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_NOTE

## modeSpecificMinimumData

- 液晶非搭載、演出用4thリール＋シャッター役物を搭載。
- 通常ゲームとボーナスのみのノーマルタイプ。天下無敵ランプ点灯でボーナス確定。
- ART/AT/CZなどの付加出玉区間は非搭載。
- ゲーム数天井・周期天井は今回の複数資料横断で確認されず、通常ゲーム性にも継続型モードは確認されない。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。ノーマル機で天井・ART/AT/CZ・持続型ゲーム数モードが確認されないため、朝一客行動へ影響する主要進行要素はない。一方、設定変更操作時の低レベルRAM/リール初期化など本機固有処理を直接明記する資料は、表記・「設定変更/リセット/朝一/据え置き/ガックン/初期出目」を変えても確定できず推測しない。

carryOverBehavior: **NOT_APPLICABLE_FOR_CEILING_MODE_PROGRESS / LOW_LEVEL_STATE_UNVERIFIED**。引継ぎ対象となる天井G数・ART/AT/CZ・周期/持続モードを確認できない。ボーナス成立状態等の低レベル処理は完全再現対象外かつ直接資料未確認。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の本機固有初期出目・リール挙動等を直接確認できず。

gameCounterReset: **NOT_APPLICABLE**。ゲーム数天井・周期天井を確認できないため、朝一価値を左右する天井カウンタなし。

ceilingAfterReset: **NOT_APPLICABLE**。通常天井および設定変更専用短縮天井を確認できない。

modeAfterReset: **NOT_APPLICABLE_FOR_PERSISTENT_GAMEPLAY_MODE**。通常時の継続型モード/天国等を確認できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_LOW_LEVEL_ONLY**。ART/CZ/高確等の持続状態は非搭載/未確認。設定変更時の内部低レベル状態は直接資料未確認。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。天井短縮、高確スタート、CZ/ART優遇、朝一専用当選率などは確認されず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失など朝一価値に影響する主要不利要素は確認されず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ガックン / 初期出目 / リール / ランプ / シャッター / 朝一 / 設定変更判別」を組み替えて再探索したが、本機固有の高信頼な変更判別要素を確定できず。

numericResetData:
- normalCeiling: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetCounterHandling: **NOT_APPLICABLE**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE_FOR_PERSISTENT_MODE**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: NORMAL_TYPE_NO_CEILING_ART_AT_CZ_RESET_VALUE_NONE_CONFIRMED_LOW_LEVEL_SETTING_CHANGE_POWER_CYCLE_DETECTION_UNVERIFIED

## conflicts

1. payoutRate setting6: K-Navi **111.1%** / パチマガスロマガ **111.6%**。平均化せず両値保持。
2. 戦BONUS獲得枚数: パチマガスロマガ基本純増欄は異色BIG約206枚。一方同ページ本文およびP-WORLDは戦BONUSがJAC結果で約200〜300枚、平均約260枚と説明。固定値と変動平均の定義差として保持。
3. date wording: 当時グリーンべると **2010-06-13納品開始予定** / K-Navi・パチビー **2010-06-14ホール導入**。同一概念として平均化せず物流開始と導入日を分離。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehaviorLowLevel: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「戦国物語」 — https://p-kn.com/slot/1212/ — 2010-06-14、ノーマルタイプ、合算設定1=1/159.5・設定6=1/119.2、ボーナス仕様 — reliability: ANALYSIS_HIGH
2. K-Navi「機械割&期待収支」 — https://p-kn.com/slot/1212/19279/ — 機械割97.3/98.8/100.8/103.2/106.1/111.1% — reliability: ANALYSIS_HIGH
3. パチビー2010年6月導入一覧 — https://www.pachibee.jp/machines/schedule/2010-06 — 2010-06-14「戦国物語-猛虎激闘絵巻-」 — reliability: INDUSTRY_MACHINE_DB
4. パチビー「戦国物語-猛虎激闘絵巻-」 — https://www.pachibee.jp/machines/reach/210050002 — 導入日2010-06-14、5号機ノーマル/単純告知 — reliability: INDUSTRY_MACHINE_DB
5. グリーンべると 2010-05-12「確変継続90％×スピード感を融合した『リキRUSH』」 — https://web-greenbelt.jp/00006598/ — パチスロ新機種『戦国物語』、6月13日から納品開始予定 — reliability: INDUSTRY_PRIMARY
6. P-WORLD「戦国物語」 — https://www.p-world.co.jp/machine/database/5964 — ノーマル/単純告知、合算1/159.5〜1/119.2、極BONUS平均312枚・戦BONUS平均260枚・殿BONUS平均104枚 — reliability: INDUSTRY_MACHINE_DB
7. パチマガスロマガ「戦国物語 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/14/a.php — ART等非搭載、ボーナスのみ、同色BIG約312枚、異色BIG約206枚、REG約104枚、戦BONUS200〜300枚平均約260枚 — reliability: ANALYSIS_HIGH
8. パチマガスロマガ「戦国物語 ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/14/h.php — 設定別同色/異色BIG・REG・合算・PAYOUT、設定6機械割111.6% — reliability: ANALYSIS_HIGH

