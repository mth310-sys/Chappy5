# 戦国BASARA2

machineName: 戦国BASARA2
manufacturer: エンターライズ / カプコン
formalModelName: 戦国BASARA2V
inspectionNumber: 0S1154
aliases: パチスロ戦国BASARA2 / 戦国BASARA 2 / バサラ2
releaseDate: 2011-02-21
releaseDateStatus: EXACT_HALL_DATE_CONFIRMED_WITH_DATE_CONFLICT
releaseDateNote: K-Naviは2011-02-21を「ホール導入開始」、みんスロも2011-02-21導入とする。一方HAZUSEは導入開始日を2011-02-18と掲載。カプコン年次報告は2011年2月発売を確認。平均化せず、DB主値は明示的なホール導入日の2011-02-21を採用し、2/18はCONFLICTとして保持する。
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せART / CZ搭載
coreStatus: COMPLETE_CORE_WITH_CONFLICT_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、553レコード「パチスロ真・三國無双」を再取得して開始。
- 開始時正本は recordCount 553 / chronologicalFrontier 2011-02-21。
- repo検索で本機の既存レコードがないことを確認し、LATEST_HANDOFF指定の2011-02-21同日群から継続。
- K-Naviの2011-02-21「ホール導入開始」を主releaseDateとする。HAZUSEの2011-02-18「導入開始日」は日付競合として保持。
- 同日群には「シオサイマックス-30」が残るため、chronologicalFrontierは2011-02-21を維持する。

## payoutRateBySetting

HAZUSE / pacnk / みんスロ一致:
- 設定1: **97.8%**
- 設定2: **99.3%**
- 設定3: **100.8%**
- 設定4: **105.0%**
- 設定5: **110.8%**
- 設定6: **116.3%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/407.0〜1/407.1**
- 設定2: **1/407.0〜1/407.1**
- 設定3: **1/387.7〜1/387.8**
- 設定4: **1/378.8**
- 設定5: **1/366.1**
- 設定6: **1/354.2〜1/354.3**

### REG
- 設定1: **1/655.3〜1/655.4**
- 設定2: **1/630.1〜1/630.2**
- 設定3: **1/606.8**
- 設定4: **1/585.1**
- 設定5: **1/564.9〜1/565.0**
- 設定6: **1/504.1**

### ボーナス合算
- 設定1: **1/251.1**
- 設定2: **1/247.3**
- 設定3: **1/236.5**
- 設定4: **1/229.9**
- 設定5: **1/222.1**
- 設定6: **1/208.0**

### ART初当たり
- 設定1: **1/435**
- 設定2: **1/372**
- 設定3: **1/414**
- 設定4: **1/314**
- 設定5: **1/330**
- 設定6: **1/259**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

**CONFLICT**:
- HAZUSE: **約31G / 50枚**
- みんスロ: **28.3G / 50枚**

同一「50枚あたりゲーム数」表記で差が大きいため平均化しない。追加一次/当時解析の再確認対象。

confidence: CONFLICT

## netIncrease

- ART「BASARA FEVER」: **約+1.5枚/G**

P-WORLD / K-Navi / HAZUSE / みんスロで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- 慶次BIG: **約312枚**（345枚超払い出しで終了）
- 赤7 / 青7 BIG: **約204枚**（240枚超払い出しで終了）
- REG: **約60枚**（81枚超払い出しで終了）

confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「BASARA FEVER」: **1セット50G+α**、ゲーム数上乗せ型、約+1.5枚/G。
- 通常時は内部状態/モードが存在し、P-WORLDでは低確・高確・超高確を案内。HAZUSE解析では低確・通常・高確率・前兆の4状態として整理されている。資料のラベル定義差があるため完全移行テーブルは収集しない。
- CZ「一触即発高確率」: **20G**、HAZUSEではART期待度約50%。
- 第1天井: **ボーナス間1059G**。到達後のボーナスでART確定。
- 第2天井: **ボーナス間1598G**。到達で**夜背景ART 200G**（高モード確定ART）。
- 有利区間制度前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **GAME_COUNT_RESET_AND_POST_BONUS_STATE_CONFIRMED_SECONDARY**。pacnk解析に「設定変更後はゲーム数がリセットされ、ボーナス後の状態からスタート」と明記。K-Naviおよびパチマガスロマガ公式アーカイブには本機専用「設定変更後の挙動」「朝イチ・設定変更」解析項目の存在を確認したが、今回の取得経路では詳細本文を直接回収できなかった。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1059G/1598G天井進捗、通常内部状態、ART関連状態の具体的引継ぎを本機固有の直接資料で確定できず。設定変更時CLEARからの逆推定はしない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの天井ゲーム数、内部状態、ART/CZ関連挙動を本機固有の直接資料で確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE**。第1/第2天井の基準となるゲーム数は設定変更でリセットされるとする解析資料を採用。

ceilingAfterReset: **NORMAL_CEILINGS / NO_RESET_SHORTENING_CONFIRMED**。設定変更専用の短縮天井は検索語・資料系統を変えて再探索しても確認できず。通常天井は1059G / 1598G。

modeAfterReset: **POST_BONUS_STATE_START_CONFIRMED / EXACT_DISTRIBUTION_UNVERIFIED**。設定変更後は「ボーナス後の状態からスタート」とする解析を確認。低確/通常/高確等への具体的振り分け率は回収できず。

stateAfterReset: **POST_BONUS_STATE_START_CONFIRMED / EXACT_STATE_UNVERIFIED**。設定変更後の開始状態について上記直接文言を採用するが、状態名・振り分け数値までは確定しない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、朝一ART確定、高確確定等の主要恩恵は十分な再探索後も確認できず。

resetPenalties: **前日天井進捗の消失**。設定変更でゲーム数がリセットされるため、前日の1059G/1598G天井進捗は朝一天井狙いに利用できなくなる。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ゲーム数表示等による本機固有の設定変更/据え置き判別を表記と資料系統を変えて再探索したが確定できず。

numericResetData:
- firstCeiling: **1059G**
- secondCeiling: **1598G**
- secondCeilingBenefit: **夜背景ART 200G**
- gameCounterOnSettingChange: **RESET**
- resetStartState: **ボーナス後の状態**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL / GAME_COUNTER_AND_START_STATE_SECONDARY_CONFIRMED**

## conflicts

- **baseGamesPer50 CONFLICT**: HAZUSEは約31G、みんスロは28.3G。定義表記はいずれも50枚あたりであり、差を丸め誤差として扱えないため平均化しない。
- **releaseDate CONFLICT**: K-Navi / みんスロは2011-02-21、HAZUSEは2011-02-18。カプコン公式年次報告は2011年2月発売まで。DB主値は明示的なK-Navi「ホール導入開始」2011-02-21を採用し、2/18を競合値として保持。
- P-WORLDは通常時を低確/高確/超高確、HAZUSEは低確/通常/高確率/前兆と整理しており、内部状態ラベルの定義差がある。完全再現用の全移行テーブルは本ミッション対象外なので統合しない。

## missingFields

- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時の具体的モード/状態振り分け率: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- settingChange専用の公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**
- baseGamesPer50の競合解消: **QA_REQUIRED**

## sources

取得日: **2026-09-04**

1. K-Navi — 戦国BASARA2
   - https://p-kn.com/slot/1363/
   - 2011-02-21ホール導入開始、ART 50G+α・約+1.5枚/G、ボーナス払い出し条件、設定変更後の挙動解析項目の存在を確認。
   - confidence: ANALYSIS_HIGH

2. HAZUSE — 戦国BASARA2
   - https://hazuse.com/machine/pachislot/0S1154/
   - 型式名 戦国BASARA2V、検定番号0S1154、2011-02-18導入開始日、設定別BIG/REG/ART初当たり/機械割、約31G/50枚、ART/CZ、1059G/1598G天井を確認。
   - confidence: ANALYSIS_HIGH

3. P-WORLD — 戦国BASARA2
   - https://www.p-world.co.jp/machine/database/6244
   - 5号機A+ART、約312/204/60枚、ART 50G+α・約+1.5枚/G、通常時内部状態の存在を確認。
   - confidence: ANALYSIS_HIGH

4. pacnk — 戦国BASARA2 設定判別ツール
   - https://pacnk.com/slot/tools/sh_sengokubasara2.html
   - 設定別BIG/REG/機械割、1059G/1598G天井、**設定変更後ゲーム数リセット・ボーナス後の状態から開始**を確認。
   - confidence: ANALYSIS_SINGLE_FOR_RESET / ANALYSIS_HIGH_FOR_CORE_CROSSCHECK

5. パチマガスロマガ公式アーカイブ — 戦国BASARA2
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/04/enterrise_slot_04.php
   - 本機専用「天井」「朝イチ・設定変更」解析項目の存在を確認。今回取得経路では詳細本文未回収。
   - confidence: ANALYSIS_HIGH_ARCHIVE

6. みんスロ — 戦国BASARA2
   - https://minslo.com/%E6%88%A6%E5%9B%BDbasara2/
   - 2011-02-21導入、設定別BIG/REG/ART初当たり/機械割、ART純増約1.5枚/G、28.3G/50枚、約312/204/60枚を確認。
   - confidence: ANALYSIS_SINGLE / CORE_CROSSCHECK

7. カプコン Annual Report 2011
   - https://www.capcom.co.jp/ir/data/pdf/annual/2011/annual_2011_01.pdf
   - 2011年2月発売の自社開発パチスロ機「戦国BASARA2」、販売15,000台超を確認。発売月の公式裏取りに使用。
   - confidence: OFFICIAL
