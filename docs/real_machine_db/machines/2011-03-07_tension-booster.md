# テンションブースター

machineName: テンションブースター
manufacturer: 北電子
formalModelName: テンションブースター2
inspectionNumber: 0S0765
releaseDate: 2011-03-07
releaseDateStatus: EXACT_HALL_INTRODUCTION_DATE_WITH_EARLIER_INTRODUCTION_SOURCE_SEPARATED
releaseDateNote: K-Naviはホール導入開始2011-03-07。HAZUSEは導入開始日2011-03-04。日付定義差を平均せず、DB主値をK-Naviのホール導入2011-03-07とし、2011-03-04をEARLIER_INTRODUCTION_SOURCEとして保持する。
generation: 5号機
systemType: A+RT / ボーナス + 次回ボーナスまで継続する無限RT
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、558レコード「残機尽きるまで私は戦う」を再取得して開始。
- 開始時正本は recordCount 558 / chronologicalFrontier 2011-03-07。
- LATEST_HANDOFFの最優先候補「テンションブースター」を未登録として確認し、2011-03-07同日群として追加。
- K-Navi 2011-03-07とHAZUSE 2011-03-04は平均化せず日付定義差として併記。

## payoutRateBySetting

- 設定1: **97.5%**
- 設定2: **98.8%**
- 設定3: **100.1%**
- 設定4: **103.3%**
- 設定5: **107.6%**
- 設定6: **114.0%**

北電子公式の工場データ予測値。K-Navi/P-WORLD/後年解析とも主要値整合。
confidence: OFFICIAL_PRIMARY_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/322.8**
- 設定2: **1/316.6**
- 設定3: **1/310.6**
- 設定4: **1/290.0**
- 設定5: **1/265.3**
- 設定6: **1/232.4**

### REG
- 設定1: **1/455.1**
- 設定2: **1/420.1**
- 設定3: **1/397.2**
- 設定4: **1/370.3**
- 設定5: **1/327.7**
- 設定6: **1/284.9**

### ボーナス合成
- 設定1: **1/188.9**
- 設定2: **1/180.5**
- 設定3: **1/174.3**
- 設定4: **1/162.6**
- 設定5: **1/146.6**
- 設定6: **1/128.0**

### RT合成確率（北電子公式表記）
- 設定1: **1/163.2**
- 設定2: **1/156.1**
- 設定3: **1/150.6**
- 設定4: **1/141.0**
- 設定5: **1/128.0**
- 設定6: **1/112.9**

confidence: OFFICIAL_PRIMARY_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「50枚」「1000円」「1k」「ベース」「コイン持ち」「平均投資」等で北電子公式、K-Navi、P-WORLD、パチマガスロマガ、HAZUSE、解析整理資料を横断したが、比較可能な直接値を確定できず。小役確率から逆算しない。

confidence: UNVERIFIED

## netIncrease

- 無限RT: **約+0.3枚/G**
- 継続: **次回ボーナス成立まで**
- 基本突入契機: 4種類のリプレイが所定順に連続入賞。途中番号から開始した場合は2～3連で到達する場合もある。
- P-WORLDは北電子初の無限RT搭載機と説明。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- BIG: **最大311枚**（規定払い出し344枚）
- REG: **最大103枚**（規定払い出し104枚）

P-WORLDとパチマガスロマガで整合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常ゲームから無限RTへ突入し、次回ボーナスまで継続。
- RT純増は約+0.3枚/G。
- パチマガスロマガ機種別攻略は天井を明示的に「ナシ」とする。
- ゲーム数天井・天井モードは本機の性能コアとして非搭載。
- 有利区間制度導入前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」項目の存在は確認したが、取得可能本文から設定変更時のRT状態・内部フラグ・初期状態等の具体挙動を安全に回収できず。一般的な5号機挙動を流用しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のRT状態・内部フラグ等について本機固有の直接根拠を回収できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のRT状態・内部フラグ・初期出目等の保持を本機固有資料で直接確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。パチマガスロマガが天井「ナシ」と明記するため、天井ゲーム数進捗のCLEAR/RETAIN対象なし。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。通常天井自体なし。設定変更専用短縮天井も確認対象となる通常天井がない。

modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。長期ゲーム数モード/天井モードの公開仕様は確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のRT関連内部状態・通常状態の具体再初期化条件は未回収。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井・朝一RT確定等の公開恩恵を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。ゲーム数天井非搭載のため天井進捗消失は非該当。その他設定変更固有の不利は確定根拠なし。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「朝一」「設定変更」「据え置き」「電源OFF ON」「ガックン」「初期出目」等で再探索したが、本機固有の変更判別法・公開数値を確定できず。

numericResetData:
- **NONE_RECOVERED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_HIGH_FOR_NO_CEILING_AND_NOT_APPLICABLE_FIELDS / UNVERIFIED_FOR_LOW_LEVEL_RESET_STATE**

## conflicts

- release chronology: **SOURCE_DATE_DIFFERENCE**。K-Navi=2011-03-07ホール導入、HAZUSE=2011-03-04導入開始。平均せず両方保持。
- 性能コアの主要数値CONFLICTは今回確認なし。北電子公式の設定別BIG/REG/合成/RT合成/出玉率を主系列とする。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior詳細: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection / numericResetData: **UNVERIFIED_AFTER_RESEARCH**

## sources — 取得日 2026-09-04

1. 北電子 公式「テンションブースター」
   - https://www.kitadenshi.co.jp/slot/tensionbooster/
   - 設定別BIG/REG/合成確率/RT合成確率/出玉率
   - confidence: OFFICIAL_PRIMARY
2. K-Navi「テンションブースター」
   - https://p-kn.com/slot/1361/
   - ホール導入開始2011-03-07、設定別BIG/REG、RT解析項目
   - confidence: ANALYSIS_HIGH
3. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/6238
   - 型式名テンションブースター2、検定番号0S0765、無限RT約+0.3枚/G、BIG最大311枚、REG最大103枚、RT突入構造
   - confidence: ANALYSIS_HIGH
4. パチマガスロマガ公式アーカイブ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/76/kitac_slot_76.php
   - 天井「ナシ」、朝イチ・設定変更専用項目の存在
   - confidence: ANALYSIS_HIGH_FOR_NO_CEILING_AND_PAGE_EXISTENCE
5. パチマガスロマガ「基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/76/a.php
   - BIG約311枚/規定344枚、REG約103枚/規定104枚、リプレイ連続時の無限RT、約+0.3枚/G
   - confidence: ANALYSIS_HIGH
6. HAZUSE
   - https://hazuse.com/machine/pachislot/0S0765/
   - 型式名テンションブースター2、検定番号0S0765、導入開始2011-03-04
   - confidence: HISTORICAL_DATABASE
7. パチンコ情報屋 当時記事（2011-01-26）
   - https://ameblo.jp/pachi-victory/entry-10780353387.html
   - リプレイ4連で次回ボーナスまでRT、BIG最大311枚、チャレンジボーナス最大103枚
   - confidence: PERIOD_SECONDARY

## recordStatus

**COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_BEHAVIOR_PARTIAL**
