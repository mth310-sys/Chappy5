# 沖楽

machineName: 沖楽
manufacturer: アイウィル（IWiLL）
releaseDate: 2010-09
releaseDateStatus: MONTH_CONFIRMED_EXACT_DAY_UNVERIFIED_AFTER_RESEARCH
releaseDateNote: 5号機クロニクルとpacnkで2010年9月導入を確認。2010年7月12日に新規参入第1弾として発表展示会が行われた当時記事も確認したが、全国ホール導入の具体日は、機種名＋2010/09/各候補日、導入日、納品、ホール導入等へ検索語を変えても安全に固定できなかった。推測せず月粒度で保存する。
generation: 5号機
systemType: ノーマル / 完全告知Aタイプ
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_BEHAVIOR_RESEARCHED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線510「ルパン三世～ルパン一族の秘宝～」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount 510 / chronologicalFrontier 2010-09-21。
- 直前handoffで再監査指定されていた「沖楽」をrepo検索し未登録を確認。
- 導入月は2010-09まで複数資料で確定できるが、具体日を十分な再探索後も確定できないため、9/21以前/以後を推定せず月粒度の漏れ補完として511件目に追加。chronologicalFrontier自体は2010-09-21を維持する。

## payoutRateBySetting

- 設定1: **97.9%**
- 設定2: **98.8%**
- 設定3: **101.0%**
- 設定4: **103.0%**
- 設定5: **104.9%**
- 設定6: **107.6%**

5号機クロニクルとpacnkで一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/284.9**
- 設定2: **1/280.1**
- 設定3: **1/280.1**
- 設定4: **1/266.4**
- 設定5: **1/266.4**
- 設定6: **1/257.0**

### REG
- 設定1: **1/442.8**
- 設定2: **1/420.1**
- 設定3: **1/327.7**
- 設定4: **1/321.3**
- 設定5: **1/268.6**
- 設定6: **1/260.1**

### ボーナス合算
- 設定1: **1/173.4**
- 設定2: **1/168.0**
- 設定3: **1/161.0**
- 設定4: **1/145.6**
- 設定5: **1/133.7**
- 設定6: **1/129.3**

5号機クロニクルの直接表とpacnkのBIG/REG値で整合。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「沖楽 / アイウィル / IWiLL」と「50枚 / 1000円 / ベース / コイン持ち / 通常時小役」を組み替え、P-WORLD、5号機回顧DB、設定判別DB、当時発表記事系まで横断したが、比較可能な直接値を確定できなかった。小役確率からの逆算は行わない。
confidence: UNVERIFIED

## netIncrease

**NOT_APPLICABLE**。RT/ART/ATを追加機能として持たないボーナス主体のノーマル機。5号機クロニクルはRT等の追加機能を排除した設計と整理し、P-WORLDもノーマルタイプ・BIG/REGのみとして掲載。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- BIG: **約312枚**
- REG: **約104枚**

P-WORLDで直接確認。完全告知で、液晶左右の花火ランプ点灯によりボーナス当選を告知する仕様。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- ボーナスのみで出玉を増やす完全告知ノーマルタイプ。
- RT/ART/AT/CZ、ゲーム数管理型の通常モード、継続型出玉モードは確認されない。
- 天井機能を示す本機固有資料も複数系統の再探索で回収できず、天井狙いに必要な公開ゲーム数は確認されない。
confidence: ANALYSIS_MULTI_SOURCE_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_EXPLICIT_NO_CEILING_WORDING

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機固有の設定変更時RAM処理、初期出目、内部フラグ等を直接説明する資料は回収できなかった。ノーマル機一般論から自動補完しない。

carryOverBehavior: **NO_MAJOR_PERSISTENT_GAMEPLAY_PROGRESS_CONFIRMED / LOW_LEVEL_BEHAVIOR_UNVERIFIED**。RT/ART/AT/CZ、天井ゲーム数、継続モードなど日跨ぎで客の朝一期待値を左右する主要進行要素は確認されない。一方、低レベルRAM/内部フラグ処理は本機固有資料未回収のため推測しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の低レベル内部状態、リール/出目表示等の本機固有処理を確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CONFIRMED_CEILING_PROGRESS**。ゲーム数天井・周期・ART/AT/CZ進行を確認できないため、ホール経営/朝一狙い用の持越し天井カウンタは該当確認なし。一般的な遊技G表示の消去/保持とは分離する。

ceilingAfterReset: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。通常時の公開天井ゲーム数およびリセット専用短縮天井は確認されない。

modeAfterReset: **NOT_APPLICABLE_FOR_PERSISTENT_AT_ART_MODE**。通常時の継続型モードを確認できない。低レベル内部状態についてはUNVERIFIED。

stateAfterReset: **UNVERIFIED_LOW_LEVEL / NO_PERSISTENT_ART_AT_STATE_APPLICABLE**。ART/AT/CZストック・残G等は非搭載。ボーナス成立フラグ等を含む低レベル処理は本機固有資料なし。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の高確スタート、天井短縮、RT/ART付与、ボーナス当選率優遇等の公開恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等の主要な朝一不利要素は確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、花火ランプ、ボーナス告知状態等を利用した本機固有の設定変更/据え置き判別条件・確率は回収できず。

numericResetData:
- resetDedicatedCeiling: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetDedicatedModeDistribution: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: SIMPLE_NORMAL_NO_MAJOR_PERSISTENT_PROGRESS_CONFIRMED / LOW_LEVEL_SETTING_CHANGE_AND_POWER_CYCLE_UNVERIFIED

## conflicts

- 現時点で性能コアの数値CONFLICTは確認されない。
- メーカー表記について、直前handoffでは「沖楽（西陣）」という再監査メモがあったが、P-WORLD・5号機クロニクル・pacnkはいずれもメーカーを**アイウィル（IWiLL）**として扱う。新規参入第1弾の当時発表記事もアイウィル名義であり、本レコードはアイウィルを採用する。西陣表記は本機のメーカー主値には採用しない。

## missingFields

- 全国ホール導入の具体日: UNVERIFIED_AFTER_RESEARCH（2010-09までは確認）
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior低レベル処理: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. P-WORLD — メーカー=アイウィル、5号機ノーマル/完全告知、BIG約312枚、REG約104枚
   - https://www.p-world.co.jp/machine/database/6050
   - confidence: ANALYSIS_HIGH
2. 5号機クロニクル「アイウィル」一覧 — 2010/9導入、BIG/REG/合算、機械割、RT等を排したボーナス主体仕様
   - https://5goki.com/iwill
   - confidence: ANALYSIS_HIGH
3. pacnk 沖楽設定判別 — 2010年9月導入、設定別BIG/REG/機械割
   - https://pacnk.com/slot/tools/sh_okiraku.html
   - confidence: ANALYSIS_HIGH
4. Pマンズ 当時業界記事「アイウィルが新規参入第1弾『沖楽』」 — 2010-07-12発表展示会、完全告知Aタイプ、新規参入第1弾
   - https://p-mans.blogspot.com/2010/07/
   - confidence: INDUSTRY_ARCHIVE

## sourceResearchNote

- 導入具体日: 「沖楽 アイウィル 2010 9月」「導入日」「ホール導入」「納品」「2010/09/06・13・20・21・24・27」等へ変更して再探索。月以上は確定できず。
- ベース: 「50枚」「1000円」「ベース」「コイン持ち」「通常時小役」へ変更し再探索。
- resetBehavior: 「天井」「天井なし」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」へ変更し、P-WORLD、回顧DB、設定判別DB、一般攻略索引系を横断。本機固有の変更/電源処理は確定できず。
- 型式/検定: 「型式」「型式名」「検定」「検定番号」へ変更して再探索したが確定できず。
