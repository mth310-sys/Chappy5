# 頑固一徹

machineName: 頑固一徹
manufacturer: アリストクラートテクノロジーズ
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: 頑固一徹 / ガンコ一徹 / GANKO ITTETSU
generation: 5号機
releaseDate: 2011-02-07
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: パチビーが導入日2011-02-07を直接掲載。P-WORLD・当時/後年解析も同一機種・仕様で照合。
systemType: ノーマルタイプ / ボーナス主体 / 技術介入 / 4G演出用プチRT
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線548レコード「秘宝伝 ～封じられた女神～」を再取得して開始。
- 開始時正本は recordCount 548 / chronologicalFrontier 2011-02-07。
- 2011-02-07同日群を継続監査し、パチビーで本機の導入日を2011-02-07と直接確認。
- repo code searchで未登録を確認し、549件目として追加。
- chronologicalFrontierは2011-02-07のまま。同日群にはDAXEL「幕末維新龍馬烈伝」も2011-02-07導入で未登録確認済みのため、次回継続対象とする。

## payoutRateBySetting

P-WORLD / K-Navi / CrankySeven / パチビー一致:
- 設定1: **96.8%**
- 設定2: **98.7%**
- 設定3: **101.3%**
- 設定4: **105.2%**
- 設定5: **110.0%**
- 設定6: **119.9%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

P-WORLD / CrankySeven / パチビー一致:

### BIG
- 設定1: **1/280.1**
- 設定2: **1/273.1**
- 設定3: **1/264.3**
- 設定4: **1/251.1**
- 設定5: **1/237.4**
- 設定6: **1/213.5**

### REG
- 設定1: **1/368.2**
- 設定2: **1/348.6**
- 設定3: **1/326.0**
- 設定4: **1/302.0**
- 設定5: **1/276.5**
- 設定6: **1/213.5**

### ボーナス合算
- 設定1: **1/159.1**
- 設定2: **1/153.1**
- 設定3: **1/146.0**
- 設定4: **1/137.1**
- 設定5: **1/127.7～1/127.8**
- 設定6: **1/106.7**

設定5合算は資料の丸め表記が1/127.7と1/127.8に分かれるが、基礎確率系列は一致しており定義競合ではなく丸め差として保持。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

パチマガスロマガ保存ページ:
- 設定1: **33.49G / 1000円(50枚)**
- 設定2: **33.95G**
- 設定3: **34.59G**
- 設定4: **35.68G**
- 設定5: **37.12G**
- 設定6: **39.38G**

CrankySevenの33.5 / 34.0 / 34.6 / 35.7 / 37.1 / 39.4Gと丸め一致。
confidence: ANALYSIS_HIGH_ARCHIVE_CROSSCHECKED

## netIncrease

- 出玉増加用ART/AT: **NOT_APPLICABLE**
- 特殊リプレイ後に**4Gの演出用プチRT**を搭載するが、出玉増加の主軸ではない。

confidence: ANALYSIS_HIGH

## basicPayout

- BIG: **最大311枚**
- REG: **最大103枚**

P-WORLD、パチビー、アリスト公認モバイルアプリ配信時のドラス発表で一致。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- アリストクラート5号機として初のボーナス主体型と、アリスト公認モバイルサイト関連発表で説明。
- 通常時の主出玉契機はBIG/REGのみ。
- 特殊リプレイ後は4Gの演出用RTへ移行。
- **通常ゲーム数天井は存在しない**とCrankySevenが明記。P-WORLDもノーマルタイプとして掲載し、天井を出玉システムとして扱っていない。
- BIG/REGとも技術介入で最大獲得枚数を狙える。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **NO_MATERIAL_GAMEPLAY_RESET_EFFECT_CONFIRMED_AFTER_RESEARCH / LOW_LEVEL_UNVERIFIED**。本機はボーナス主体ノーマルタイプで通常ゲーム数天井・ART/AT/CZ・長期ゲーム数モードを持たない。パチマガスロマガ保存インデックスに本機専用「朝イチ・設定変更」項目が存在することは確認したが、取得可能本文から具体的な低レベル挙動を安全に展開できなかったため、初期出目や4G演出RTの変更時処理を推測しない。

carryOverBehavior: **NO_MATERIAL_CARRYOVER_TARGET_CONFIRMED / LOW_LEVEL_UNVERIFIED**。天井進捗、ARTストック、CZ、長期モード等、朝一狙いに使う主要持越し対象は確認されない。ボーナス成立状態や演出用4G RT等の低レベル状態は本機固有の直接根拠を確定できず推測しない。

powerCycleBehavior: **NO_MATERIAL_GAMEPLAY_EFFECT_CONFIRMED / LOW_LEVEL_UNVERIFIED**。単純電源OFF→ONのみで朝一客行動に影響する天井・モード・ART/CZ等の対象は確認されない。初期出目、演出用RT等の低レベル処理はUNVERIFIED_AFTER_RESEARCH。

gameCounterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。通常ゲーム数天井は存在しないと解析資料が明記。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。リセット専用短縮天井も該当対象なし。

modeAfterReset: **NOT_APPLICABLE_AS_LONG_TERM_GAME_COUNT_MODE**。朝一狙いに関係する天国/通常等のゲーム数モードは確認されない。

stateAfterReset: **NO_MATERIAL_INTERNAL_STATE_CONFIRMED / LOW_LEVEL_UNVERIFIED**。高確/低確等の長期内部状態で初当たりを管理する仕様は確認されない。4G演出RTは短期演出機構として分離。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、高確スタート、初当たり優遇、CZ優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。失う天井進捗・ARTストック等の主要対象は確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。頑固一徹/ガンコ一徹/アリストクラート/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目を組み替え、P-WORLD、K-Navi、パチマガスロマガ保存ページ、CrankySeven、当時関連発表、回顧資料を横断したが、本機固有の確定的なガックン・初期出目・表示判別は直接確定できず。

numericResetData:
- normalCeiling: **NOT_APPLICABLE / NONE**
- resetDedicatedShortCeiling: **NOT_APPLICABLE**
- resetModeDistribution: **NONE_CONFIRMED**
- resetStateDistribution: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**
- resetDetectionNumeric: **NONE_CONFIRMED**

resetBehaviorQA: **RESEARCHED_NO_MATERIAL_RESET_TARGET_CONFIRMED_LOW_LEVEL_DETAILS_UNVERIFIED**

## conflicts

- 性能コアに実質的CONFLICTなし。
- ボーナス合算設定5は1/127.7と1/127.8の掲載差があるが、BIG/REG確率が一致するため丸め差として扱い平均化しない。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- low-level settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior for 4G presentation RT: **UNVERIFIED_AFTER_RESEARCH**
- low-level powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. パチビー — 頑固一徹
   - https://www.pachibee.jp/machines/index/210110002
   - 2011-02-07導入、ノーマルタイプ/技術介入/プチRT、BIG最大311枚、REG最大103枚、設定別合算・機械割を確認。
   - confidence: ANALYSIS_HIGH

2. P-WORLD — 頑固一徹
   - https://www.p-world.co.jp/machine/database/6181
   - 5号機ノーマルタイプ/技術介入/プチRT、BIG/REG確率、最大獲得枚数、4G演出用RTを確認。
   - confidence: INDUSTRY_DATABASE

3. K-Navi — 機械割&期待収支
   - https://p-kn.com/slot/1333/29256/
   - 機械割96.8～119.9%を確認。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/44/c.php
   - 設定別33.49～39.38G/1000円、4GプチRT関連を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

5. パチマガスロマガ — 機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/44/l.php
   - 「天井」「朝イチ・設定変更」専用項目が存在することを確認。具体本文は取得できず。
   - confidence: ANALYSIS_HIGH_ARCHIVE_INDEX_ONLY

6. CrankySeven — 頑固一徹 解析・攻略
   - https://crankyseven.com/gankoittetu-pc.htm
   - 設定別BIG/REG/合算、機械割、1000円33.5～39.4G、BIG約311枚/REG約103枚、天井なし、4GプチRTを確認。
   - confidence: ANALYSIS_SINGLE_CROSSCHECKED

7. ドラス / ValuePress — アリストPremium『頑固一徹』アプリ配信発表
   - https://www.value-press.com/pressrelease/76922
   - アリストクラート公認モバイルサイト関連発表として、アリスト5号機初のボーナス主体型、BIG最大311枚、REG最大103枚を確認。
   - confidence: INDUSTRY_RELATED_PRIMARY
