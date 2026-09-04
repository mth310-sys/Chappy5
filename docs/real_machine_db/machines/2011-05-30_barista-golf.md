# バリスタゴルフ

machineName: バリスタゴルフ
manufacturer: アイウィル
releaseDate: 2011-05-30
releaseDateStatus: HALL_INTRODUCTION_SCHEDULE_EXACT_DATE

generation: 5号機
systemType: A+ART / CZ / ストック+ループ+ゲーム数型ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 572件目「雀龍桜花」（2011-05-29納品開始予定）から継続。
- 最新handoffの最優先候補としてrepo重複を確認し、未登録を確認。
- 当時プレイグラフ転載記事に「ホール導入予定は5月30日」と明記。5号機クロニクルは2011年5月導入として月単位で整合するため、2011-05-30を時系列キーに採用。

## payoutRateBySetting

- 設定1: **96.1%**
- 設定2: **98.1%**
- 設定3: **101.9%**
- 設定4: **104.0%**
- 設定5: **109.3%**
- 設定6: **112.0%**

P-WORLDとパチマガスロマガで全設定一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/436.9**
- 設定2: **1/422.8**
- 設定3: **1/409.6**
- 設定4: **1/397.2**
- 設定5: **1/385.5**
- 設定6: **1/352.3**

### REG
- 設定1: **1/565.0**
- 設定2: **1/541.6**
- 設定3: **1/524.3**
- 設定4: **1/504.1**
- 設定5: **1/478.4**
- 設定6: **1/461.5**

### ボーナス合算
- 設定1: **1/246.4**
- 設定2: **1/237.4**
- 設定3: **1/230.0**
- 設定4: **1/222.2**
- 設定5: **1/213.5**
- 設定6: **1/199.8**

### ART初当たり
- 設定1: **1/449.1**
- 設定2: **1/382.6**
- 設定3: **1/410.4**
- 設定4: **1/343.4**
- 設定5: **1/365.7**
- 設定6: **1/287.6**

P-WORLDでART初当たり全設定を直接確認。ボーナス値はP-WORLD、パチマガスロマガ、5号機クロニクルで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED_FOR_BONUS / INDUSTRY_DATABASE_FOR_ART

## baseGamesPer50

パチマガスロマガ掲載の1000円あたりゲーム数:
- 設定1: **32.7G**
- 設定2: **32.8G**
- 設定3: **32.8G**
- 設定4: **32.9G**
- 設定5: **32.9G**
- 設定6: **33.0G**

confidence: ANALYSIS_HIGH_SINGLE_DIRECT

## netIncrease

- ART「バリスタモード」: **約+1.3枚/G**
- 基本1セット: **約30G**
- ARTゲーム数上乗せ: **25 / 50 / 100 / 300G**（パチマガ）
- ARTループ率: **33 / 50 / 65 / 80 / 95%**

P-WORLD、パチマガスロマガ、当時プレイグラフ転載で約+1.3枚/GおよびART構造を照合。
confidence: INDUSTRY_ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

主値:
- BIG: **約210枚**
- REG: **約56枚**

P-WORLDとパチマガスロマガが一致。パチマガはBIG規定払い出し261枚、REGは8回入賞or12Gも明記。

CONFLICT補助値:
- 5号機クロニクル: BIG **約204枚** / REG **約48枚**

定義または算出差の可能性があるため平均化せずCONFLICTとして保持し、当時解析/P-WORLD一致の210/56枚を主値とする。
confidence: ANALYSIS_HIGH_CROSSCHECKED / CONFLICT_SECONDARY

## modeSpecificMinimumData

- 通常時にART突入期待度の異なる内部モードが存在。夕方背景で高確期待度アップ、カート+「チャンスゾーン」表示で高確率以上確定とP-WORLDが説明。
- CZ「プラクティスモード」および上位CZ「スーパープラクティスモード」を搭載。
- ARTはセットストック、ループ率、ゲーム数の3要素を組み合わせる構造。
- パチマガスロマガ機種ページに本機専用「天井」「朝イチ・設定変更」解析項目の存在を確認。ただし今回取得可能な検索結果から具体的な天井ゲーム数・恩恵本文を安全に確定できなかったため、数値は推測しない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」項目の存在は確認したが、取得可能な本文・検索スニペットから設定変更時の具体処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井ゲーム数、内部モード、CZ/ART関連状態の引継ぎを本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみのゲーム数、モード、状態の処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に天井進捗がCLEAR/RETAINのどちらかを示す直接本文を今回回収できず。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機に天井解析項目が存在することは確認したが、通常天井の正確なゲーム数・設定変更時短縮有無を安全に確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に内部モードが存在することは確認済みだが、設定変更時のモード再抽選/引継ぎ・振り分けは直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/CZ関連状態の設定変更時処理は直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、高確確定、ART優遇等の公開朝一恩恵数値は今回確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の主要不利数値は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶背景、表示等による変更/据え置き判別を直接確定できず。

numericResetData:
- 通常天井: **EXISTS_AS_ANALYSIS_ITEM_BUT_EXACT_VALUE_UNVERIFIED_AFTER_RESEARCH**
- 設定変更時天井カウンタ: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- basicPayout: P-WORLD/パチマガ **BIG約210枚・REG約56枚** vs 5号機クロニクル **BIG約204枚・REG約48枚**。平均せずCONFLICT保持。
- 主要確率・機械割はP-WORLD/パチマガ間で一致。

## missingFields

- exact normal ceiling game count / benefit: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「バリスタゴルフ / BARISTA GOLF / アイウィル」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / ボーナス間 / モード / 状態 / ガックン / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、P-WORLD、パチマガスロマガ、当時プレイグラフ転載、5号機クロニクル、旧ブログ/回顧資料を横断。性能コアは設定別ベースまで直接回収。reset関連は専用解析項目の存在だけで本文値を推測せず、十分な再探索後も直接確定できない項目のみUNVERIFIEDとした。

## sources — 取得日 2026-09-04

1. P-WORLD「バリスタゴルフ」
   - https://www.p-world.co.jp/machine/database/6341
   - 5号機ART、BIG/REG/ART初当たり/機械割全設定、BIG約210枚、REG約56枚、ART約+1.3枚/G、内部モード/CZ構造
   - confidence: INDUSTRY_DATABASE
2. パチマガスロマガ「バリスタゴルフ ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/h.php
   - BIG/REG/ボーナス合成/PAYOUT全設定
   - confidence: ANALYSIS_HIGH
3. パチマガスロマガ「バリスタゴルフ 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/a.php
   - 1セット30G、純増1.3枚/G、ループ率33〜95%、BIG約210枚、REG約56枚
   - confidence: ANALYSIS_HIGH
4. パチマガスロマガ「バリスタゴルフ 小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/c.php
   - 1000円あたり32.7〜33.0G（設定別）
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ「バリスタゴルフ 機種トップ」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/iwill_slot_03.php
   - 本機専用「天井」「朝イチ・設定変更」解析項目の存在
   - confidence: ANALYSIS_HIGH_INDEX_ONLY
6. Pマンズ / プレイグラフ転載「アイウィルが『バリスタゴルフ』」
   - https://p-mans.blogspot.com/2011/04/
   - 2011-04-19記事、ホール導入予定2011-05-30、ART純増約1.3枚/G、25〜300G上乗せ、33〜95%ループ、約30Gストック構造
   - confidence: INDUSTRY_REPRINT
7. 5号機クロニクル「アイウィル5号機全機種一覧」
   - https://5goki.com/iwill
   - 2011年5月導入、A+ART、ボーナス確率照合、獲得枚数204/48枚の競合値
   - confidence: SECONDARY_DATABASE

## status

- recordNumber: **573**
- chronologicalFrontier: **2011-05-30**
- relayStatus: **READY_TO_CONTINUE**
