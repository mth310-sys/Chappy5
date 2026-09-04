# 鬼浜外伝 ハヤト疾風伝

machineName: 鬼浜外伝 ハヤト疾風伝
manufacturer: 高砂電器産業
modelName: 鬼浜外伝ハヤト疾風伝
certificationNumber: 1S0286
releaseDate: 2011-06-17
releaseDateStatus: SOURCE_DATE_DIFFERENCE; primary=HAZUSE導入開始2011-06-17; GreenBelt=2011-06-19納品開始

generation: 5号機
systemType: A+ART / ボーナス + ゲーム数上乗せ・セットストック式ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- recordCount 578 / chronologicalFrontier 2011-06-13 から2011-06-14〜06-19境界を再監査し、repo未登録を確認して579件目として追加。
- HAZUSEは **2011-06-17導入開始**、当時グリーンべるとは **2011-06-19納品開始**。導入開始と納品開始の定義差を平均せず保持し、本DBの主releaseDateは具体的な導入開始日を持つHAZUSE 2011-06-17を採用。

## payoutRateBySetting

- 設定1: **97.1%**
- 設定2: **99.1%**
- 設定3: **100.1%**
- 設定4: **103.9%**
- 設定5: **107.0%**
- 設定6: **110.1%**

パチマガスロマガ系当時解析と後年整理DBで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG+疾風ボーナス
- 設定1: **1/255.0**
- 設定2: **1/255.0**
- 設定3: **1/249.2**
- 設定4: **1/249.2**
- 設定5: **1/245.5**
- 設定6: **1/241.8**

### BG
- 設定1: **1/1110.8**
- 設定2: **1/1110.8**
- 設定3: **1/1040.3**
- 設定4: **1/1040.3**
- 設定5: **1/978.2**
- 設定6: **1/978.2**

### ボーナス合算
- 設定1: **1/207.39**
- 設定2: **1/207.39**
- 設定3: **1/201.03**
- 設定4: **1/201.03**
- 設定5: **1/196.22**
- 設定6: **1/193.89**

### ART初当たり
- 設定1: **1/451.3**
- 設定2: **1/402.2**
- 設定3: **1/397.8**
- 設定4: **1/366.8**
- 設定5: **1/326.3**
- 設定6: **1/272.1**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **CONFLICT_SAME_ARCHIVE_REVISION**
- パチマガスロマガ旧ページ c.php: 設定1〜6 **36.83 / 36.84 / 37.01 / 37.02 / 37.41 / 37.57G/1000円**
- 同アーカイブ c-1.php: 設定1〜6 **34.70 / 34.71 / 34.86 / 34.87 / 35.21 / 35.35G/1000円**
- 同一資料系統内で中or右ベル確率も異なり、ページ改訂差または訂正前後の可能性がある。どちらかを恣意的に採用せずCONFLICT保持。
confidence: CONFLICT

## netIncrease

- ART「ハヤブサRUSH」: **約+1.4枚/G**
- 基本1セット: **50G+α**
- ゲーム数上乗せ: 当時業界記事で **10〜150G**
confidence: INDUSTRY_PRIMARY_AND_ANALYSIS_HIGH

## basicPayout

- BIG: **約207枚**
- 疾風ボーナス: **最大198枚**
- BG: **約50枚**
confidence: INDUSTRY_PRIMARY_HIGH

## modeSpecificMinimumData

- ART「魔速ART」は通常の「ハヤブサRUSH」と上乗せ優遇状態「レッドゾーン」で構成。
- ハヤブサRUSHは基本50G、約+1.4枚/G、ゲーム数上乗せ+セットストック式。
- ART高確率ゾーン「捕獲ミッション」「バリバリゾーン」を搭載。当時グリーンべると掲載期待度は約40% / 約50%。
- 通常時にはART獲得期待度の異なる低確/天国状態が存在することを旧解析DBで確認。
- 通常天井: **ボーナス間1280G消化で最低150GのARTへ突入**。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_WITH_ANALYSIS_SECTION_CONFIRMED**。パチマガスロマガ旧機種ページに本機専用「朝イチ・設定変更」解析項目が存在することまでは確認できたが、検索インデックスから具体本文を安全に回収できず。他機種一般則で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間1280G進捗、低確/天国、バリバリゾーン/捕獲ミッション、ARTストック・残Gの保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗、内部状態、ART権利、液晶/ランプ状態を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井1280Gは確定しているが、設定変更時にCLEAR/RETAINされるかは具体本文未回収のため推測しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井または別天井の公開値を確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の低確/天国は確認済みだが、設定変更時の初期振り分けを回収できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART高確率ゾーン、前兆、ARTストック/残G等の設定変更時処理は未確定。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**。朝一専用短縮天井、高確移行率、特定G以内ART率等の比較可能な公開数値を安全に回収できず。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。1280G進捗消失等はgameCounterReset自体を確定できないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常天井: **ボーナス間1280G → 最低150G ART**
- 設定変更専用短縮天井: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **UNVERIFIED_AFTER_RESEARCH**
- 公開朝一恩恵数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; MACHINE_SPECIFIC_ANALYSIS_SECTION_EXISTENCE_CONFIRMED, VALUES_UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 導入日: HAZUSE **2011-06-17導入開始** / グリーンべると **2011-06-19納品開始**。定義差として併記し平均しない。
- 1000円あたりG数: 同じパチマガスロマガ旧資料系統に **36.83〜37.57G** と **34.70〜35.35G** の2版が残存。中or右ベル確率も版間で異なるため、訂正前後を断定せずCONFLICT。

## missingFields

- settingChangeBehavior concrete detail: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset numeric distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「鬼浜外伝 ハヤト疾風伝 / 鬼浜外伝ハヤト疾風伝 / 1S0286 / 高砂」と「導入 / 納品 / 機械割 / BIG / 疾風BONUS / BG / ART初当たり / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 1280G / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / ガックン」を組み替え、HAZUSE、P-WORLD、当時グリーンべると、パチマガスロマガ旧解析、後年5号機DBを横断。性能コアと通常天井は複数系統で照合。reset専用解析項目の存在は確認したが本文値は安全に回収できず、一般的5号機挙動で埋めずUNVERIFIEDを維持。

## sources — 取得日 2026-09-04

1. HAZUSE「鬼浜外伝 ハヤト疾風伝」
   - https://hazuse.com/machine/pachislot/1S0286/
   - 型式名、検定番号1S0286、メーカー、導入開始2011-06-17
   - confidence: CONTEMPORARY_ARCHIVE_HIGH
2. P-WORLD「鬼浜外伝 ハヤト疾風伝」
   - https://www.p-world.co.jp/machine/database/6381
   - 5号機A+ART、BIG207枚/疾風最大198枚/BG約50枚、ART50G・約+1.4枚/G、天井1280G→最低150G ART
   - confidence: INDUSTRY_DATABASE_HIGH
3. グリーンべると「鬼浜外伝シリーズ第2弾はハヤブサRUSH搭載」2011-05-17
   - https://news.p-world.co.jp/articles/4675/greenbelt
   - 高砂電器産業、ART50G+α・約+1.4枚/G、上乗せ10〜150G、CZ期待度、ボーナス合算1/207.4〜1/193.9、出玉率97.1〜110.1%、2011-06-19納品開始
   - confidence: CONTEMPORARY_INDUSTRY_PRIMARY_HIGH
4. パチマガスロマガ旧解析「鬼浜外伝ハヤト疾風伝」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/01/takasago_slot_01.php
   - 本機専用「天井」「朝イチ・設定変更」解析項目の存在
   - confidence: CONTEMPORARY_ANALYSIS_INDEX_HIGH
5. パチマガスロマガ旧解析「ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/01/h-1.php
   - ボーナス合算、ART初当たり、全設定PAYOUT
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
6. パチマガスロマガ旧解析「小役確率」2版
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/01/c.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/01/c-1.php
   - 1000円あたりG数が36.83〜37.57G版 / 34.70〜35.35G版で競合
   - confidence: CONTEMPORARY_ANALYSIS_CONFLICT
7. 5号機クロニクル「コナミアミューズメント（高砂電器・アビリット）5号機全機種一覧」
   - https://5goki.com/konami
   - ボーナス詳細、合算、ART初当たり、機械割の後年クロスチェック
   - confidence: RETROSPECTIVE_DATABASE_MEDIUM_HIGH
