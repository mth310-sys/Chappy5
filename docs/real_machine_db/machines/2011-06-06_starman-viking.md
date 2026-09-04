# スターマン バイキング

machineName: スターマン バイキング
manufacturer: SANKO
modelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-06-06
releaseDateStatus: HALL_INTRODUCTION_EXACT_DATE

generation: 5号機
systemType: ノーマルAタイプ / ボーナス主体 + 天井RT / 技術介入
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 575件目「パチスロ エイリヤンビギンズ」から同日群を継続。
- K-Naviが **2011-06-06ホール導入開始**を掲載。
- 2011-04-19付の当時業界系記事でもSANKO「スターマン バイキング」は6月上旬ホール導入予定とされ、具体日06-06と整合。
- repo検索で登録済みレコードがないことを確認して576件目として追加。

## payoutRateBySetting

### 市場掲載PAYOUT
- 設定1: **96.96%**
- 設定2: **98.84%**
- 設定3: **100.81%**
- 設定4: **102.10%**
- 設定5: **103.77%**
- 設定6: **108.31%**

P-WORLDとpacnkで一致。

### パチマガスロマガ掲載値
- 設定1: **98%**
- 設定2: **100%**
- 設定3: **102%**
- 設定4: **103%**
- 設定5: **105%**
- 設定6: **109%**

定義/丸め差の可能性があるため平均せず保持。
confidence: CONFLICT_DEFINITION_OR_ROUNDING

## initialHitBySetting

### BIG
- 設定1: **1/630.2**
- 設定2: **1/585.1**
- 設定3: **1/546.1**
- 設定4: **1/528.5**
- 設定5: **1/512.0**
- 設定6: **1/468.1**

### MID
- 設定1: **1/1260.3**
- 設定2: **1/1170.3**
- 設定3: **1/1092.3**
- 設定4: **1/1057.0**
- 設定5: **1/1024.0**
- 設定6: **1/936.2**

### REG
- 設定1: **1/1260.3**
- 設定2: **1/1170.3**
- 設定3: **1/1092.3**
- 設定4: **1/1057.0**
- 設定5: **1/1024.0**
- 設定6: **1/936.2**

### ボーナス合算
- 設定1: **1/315.1**
- 設定2: **1/292.6**
- 設定3: **1/273.1**
- 設定4: **1/264.3**
- 設定5: **1/256.0**
- 設定6: **1/234.1**

P-WORLD、パチマガスロマガ、pacnkで照合。パチマガスロマガは整数丸め表記。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「スターマン バイキング / スターマンバイキング / SANKO」と「50枚 / 1000円 / 千円 / ベース / コイン持ち」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、pacnk、当時業界記事、後年DBを横断。P-WORLDには「コイン持ち良し」の定性表記はあるが、比較可能な50枚あたりゲーム数の直接数値を確定できず。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- 天井RT: **約+0.3枚/G**
- ボーナス終了後666G消化で突入し、次回ボーナスまで継続。

P-WORLD、パチマガスロマガ、当時業界記事で一致。
confidence: HIGH_CROSSCHECKED

## basicPayout

- BIG: **最大402枚**
- MID: **最大246枚**
- REG: **最大116枚**
- 規定払い出し: BIG **449枚超** / MID **269枚超** / REG **119枚超**で終了

P-WORLD、K-Navi、パチマガスロマガで整合。
confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ボーナス主体のノーマルタイプ。
- ボーナス後 **666G** 消化で次回ボーナスまで続く天井RTへ突入。
- 天井RT純増は約 **+0.3枚/G**。
- 全ボーナスで簡単な技術介入により最大獲得枚数へ増加可能。
- AT/ART/CZや長期ゲーム数モードは非搭載。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名・表記揺れ・SANKO・設定変更・リセット・朝一を組み替え、当時解析/旧DB/回顧資料を横断したが、設定変更時の本機固有挙動を直接確定できず。一般的なノーマル/RT機の挙動で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き/宵越し/666G天井を組み合わせて再探索したが、天井ゲーム数引継ぎを直接断定できる本機固有資料を確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の666G天井カウンタ、天井RT状態、表示/ランプ挙動は直接資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はボーナス終了後666Gと確定しているが、設定変更時にCLEAR/RETAINのどちらかを示す直接本文は未回収。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井や変更後専用ゲーム数は確認できず。ただし通常天井カウンタのCLEAR/RETAIN自体は未確定。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**。通常時の長期モード管理型ではないノーマルAタイプ。

stateAfterReset: **PARTIAL_UNVERIFIED_FOR_RT_STATE**。AT/ART/CZ状態は非搭載。天井RT中の設定変更/電源再投入時処理は本機固有資料を回収できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用高確、短縮天井、特定ゲーム数優遇、変更時専用当選率などの公開恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で前日666G天井進捗が消えるか自体を確定できないため推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、WINランプ/ドット、ゲーム数表示などによる変更判別を本機固有資料で直接確定できず。

numericResetData:
- 通常天井: **ボーナス終了後666G**
- 天井RT純増: **約+0.3枚/G**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 公開朝一恩恵数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; UNVERIFIED_AFTER_RESEARCH FOR CHANGE/CARRYOVER/POWER-CYCLE DETAILS**

## conflicts

- 機械割/PAYOUT: P-WORLD・pacnk **96.96〜108.31%** / パチマガスロマガ **98〜109%**。定義または丸め差の可能性があるため平均せず双方を保持。
- ボーナス確率は資料間で精密値/整数丸め差のみで実質一致。

## missingFields

- modelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset on setting change: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「スターマン バイキング / スターマンバイキング / SANKO / 三光 / スターマンアイズ」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / 666G / ガックン / 型式 / 検定番号 / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、pacnk、2011年当時業界記事、後年機種DBを横断。性能コアと通常天井は複数系統で照合できたが、reset固有の変更/据え置き/電断詳細と型式・検定番号・50枚ベースは直接確定できず、推測補完しない。

## sources — 取得日 2026-09-04

1. K-Navi「スターマン バイキング」
   - https://p-kn.com/slot/1411/
   - 2011-06-06ホール導入開始、SANKO、A-400タイプ、ボーナス規定払い出し、天井RT概要
   - confidence: CONTEMPORARY_ANALYSIS_DATABASE
2. P-WORLD「スターマン バイキング」
   - https://www.p-world.co.jp/machine/database/6313
   - 5号機ノーマル、技術介入、BIG/MID/REG設定別、PAYOUT96.96〜108.31%、最大402/246/116枚、666G天井RT、約+0.3枚/G
   - confidence: INDUSTRY_DATABASE_HIGH
3. パチマガスロマガ「スターマンバイキング 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/02/a.php
   - ノーマル+天井RT、666G、0.3枚/G、最大402/246/116枚
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
4. パチマガスロマガ「ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/02/h.php
   - BIG/MID/REG/合算、PAYOUT98〜109%
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
5. pacnk「スターマン バイキング 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_starmanbyking.html
   - 合算、PAYOUT96.96〜108.31%、完全攻略PAYOUT98.03〜109.17%
   - confidence: LATER_ANALYSIS_DATABASE
6. Pマンズ / プレイグラフ転載（2011-04-19）
   - https://p-mans.blogspot.com/2011/04/
   - SANKO発表機、BB約400枚、ボーナス後666GでRT、約+0.3枚/G、6月上旬ホール導入予定
   - confidence: CONTEMPORARY_INDUSTRY_SECONDARY

## resetQaState

resetQaStatus: **PARTIAL_RESET_QA**
resetQaConfidence: **UNVERIFIED_AFTER_RESEARCH_FOR_RESET_SPECIFICS**
