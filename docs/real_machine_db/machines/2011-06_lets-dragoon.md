# レッツドラゴーン

machineName: レッツドラゴーン
manufacturer: SANKO
modelName: レッツドラゴーン
certificationNumber: 0S0263
releaseDate: 2011-06
releaseDateStatus: MONTH_ONLY_EXACT_DATE_UNVERIFIED_AFTER_RESEARCH

generation: 5号機
systemType: ノーマルAタイプ / ボーナス主体 + 3GプチRT
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 576件目「スターマン バイキング」後の2011-06-06同日群残存監査から継続。
- handoff指定候補「レッツドラゴーン」はrepo未登録を確認して577件目として追加。
- P-WORLD、後年保存資料とも導入開始/リリースを **2011年6月** とする。
- 当時系列資料では「スターマン バイキング」と同じSANKOの2011年6月機として扱われ、P-WORLD掲示板には2011-06-07時点の実機言及も残るが、**2011-06-06を直接示す導入日資料は回収できなかった**ため、日付を推測固定せず月単位で保存。
- chronologicalFrontierは既確定の **2011-06-06** を維持する。

## payoutRateBySetting

### P-WORLD掲載値
- 設定1: **97.7%**
- 設定2: **99.9%**
- 設定3: **101.9%**
- 設定4: **104.1%**
- 設定5: **105.9%**
- 設定6: **109.1%**

### パチマガスロマガ掲載値
- 設定1: **98%**
- 設定2: **100%**
- 設定3: **102%**
- 設定4: **104%**
- 設定5: **106%**
- 設定6: **109%**

精密値と整数丸めの範囲で整合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/297.9**
- 設定2: **1/287.4**
- 設定3: **1/280.1**
- 設定4: **1/270.8**
- 設定5: **1/262.1**
- 設定6: **1/252.1**

### REG
- 設定1: **1/318.1**
- 設定2: **1/303.4**
- 設定3: **1/287.4**
- 設定4: **1/275.4**
- 設定5: **1/264.3**
- 設定6: **1/252.1**

### ボーナス合算
- 設定1: **1/153.8**
- 設定2: **1/147.6**
- 設定3: **1/141.9**
- 設定4: **1/136.5**
- 設定5: **1/131.6**
- 設定6: **1/126.0**

P-WORLDの精密値とパチマガスロマガの整数丸め値が一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「レッツドラゴーン / レッツドラゴン / SANKO / 型式レッツドラゴーン」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」を組み替え、P-WORLD、パチマガスロマガ、旧DB、後年機種一覧を横断したが比較可能な直接数値を確定できず。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- 通常の出玉増加はボーナス主体。
- 特殊リプレイ後の「ドラゴンチャンス」は **3G固定のプチRT**。出玉増加を目的とするART/RTではなく演出用短期RTとして扱う。
- 比較可能な純増枚数: **NOT_APPLICABLE / NONE_CONFIRMED**

## basicPayout

- BIG: **約300枚**
- REG: **約96枚**
- P-WORLD規定払い出し表記: BIG **336枚超で終了** / REG **98枚超で終了**
- パチマガスロマガ表記: BIG約300枚（規定払い出し326枚）/ REG約96枚（98枚）

BIGの規定払い出し表記に資料差があるため、純増約300枚を主比較値とし規定払い出しはCONFLICT候補として併記。
confidence: CORE_PAYOUT_HIGH_WITH_RULE_TEXT_CONFLICT

## modeSpecificMinimumData

- ボーナスのみで出玉を増やす完全ノーマルタイプ。
- 通常時にプレイヤーが任意選択できる「演出モード / デジタルモード / 沖スロモード」の3演出モードを搭載するが、これは内部抽選モードではない。
- 特殊リプレイ入賞後は **3G間のプチRT「ドラゴンチャンス」**へ突入。
- AT/ART/CZ、長期ゲーム数モードは確認されない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名・表記揺れ・SANKO・設定変更・リセット・朝一を組み替え、現存当時解析/旧DB/後年資料を横断したが、本機固有の設定変更挙動を直接確定できず。一般的なノーマル機挙動で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の内部状態・演出モード選択状態等について本機固有の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の選択演出モード、初期出目、ランプ状態等の直接資料を確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_FIXED_GAME_COUNT_CEILING_CONFIRMED**。固定ゲーム数天井や通常時ゲーム数管理型の当選システムは確認されない。3GプチRTは特殊リプレイ契機の短期RTであり天井カウンタではない。

ceilingAfterReset: **NOT_APPLICABLE_NO_FIXED_GAME_COUNT_CEILING_CONFIRMED**。設定変更専用短縮天井も確認されない。

modeAfterReset: **NOT_APPLICABLE_NO_INTERNAL_LONG_TERM_MODE_CONFIRMED**。3種類の「演出モード」はプレイヤー選択式の演出表示で、内部当選モードとして扱わない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_SHORT_RT/PLAYER_SELECTION_STATE**。AT/ART/CZ状態は非搭載。3GプチRT中や演出モード選択状態での設定変更/電断処理は直接資料を回収できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一高確、短縮天井、変更時専用当選率、特定G数優遇などは確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等の主要不利要素は確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、7セグ、宝玉/LED等による設定変更・据え置き判別を本機固有資料で直接確定できず。

numericResetData:
- 固定ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NOT_APPLICABLE / NONE_CONFIRMED**
- 設定変更時モード振り分け: **NOT_APPLICABLE_NO_INTERNAL_LONG_TERM_MODE_CONFIRMED**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 公開朝一恩恵数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; UNVERIFIED_AFTER_RESEARCH FOR CHANGE/CARRYOVER/POWER-CYCLE/DETECTION DETAILS**

## conflicts

- BIG規定払い出し表記: P-WORLD **336枚超で終了** / パチマガスロマガ **326枚**。純増約300枚は一致するため、規定払い出しの表記差のみCONFLICT候補として保持。
- 導入具体日: **2011-06**までは複数資料で確認。2011-06-06を直接裏付ける資料は未回収のため日付推測を行わない。

## missingFields

- exactReleaseDate: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「レッツドラゴーン / レッツドラゴン / SANKO / 型式レッツドラゴーン / 0S0263」と「導入 / ホール導入 / 納品 / 2011年6月 / 6月6日 / 設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / ガックン / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、P-WORLD、パチマガスロマガ、現存旧機種DB、検定通過記録系、後年機種一覧を横断。性能コアは複数系統で照合できたが、具体導入日、50枚ベース、reset固有挙動は十分な直接本文を回収できず推測補完しない。

## sources — 取得日 2026-09-04

1. P-WORLD「レッツドラゴーン」
   - https://www.p-world.co.jp/machine/database/6314
   - SANKO、5号機ノーマル/プチRT、BIG/REG/合算全設定、PAYOUT97.7〜109.1%、BIG300枚/REG96枚、3GプチRT、型式名、検定番号0S0263、導入開始2011年06月
   - confidence: INDUSTRY_DATABASE_HIGH
2. パチマガスロマガ「レッツドラゴーン ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/01/h.php
   - BIG/REG/合算全設定、PAYOUT98〜109%
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
3. パチマガスロマガ「レッツドラゴーン 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/01/a.php
   - ノーマル、3種類の演出モード、BIG約300枚、REG約96枚
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
4. pachinko’s blog「SANKO レッツドラゴーンの筺体＆情報」
   - https://pachinko.hatenablog.jp/entry/2011/06/lets-Dragoon
   - 型式名レッツドラゴーン、2011年6月リリース、ノーマルタイプ、3演出モード
   - confidence: LATER_ARCHIVE_SECONDARY
5. SANKO検定通過型式整理
   - https://q-and-a.hatenablog.com/entry/2016/10/27/005647
   - 2011-02-28検定通過記録としてレッツドラゴーンを掲載
   - confidence: LATER_ARCHIVE_SECONDARY

## resetQaState

resetQaStatus: **PARTIAL_RESET_QA**
resetQaConfidence: **UNVERIFIED_AFTER_RESEARCH_FOR_RESET_SPECIFICS**
