# あっぱれ剣士道

machineName: あっぱれ剣士道
manufacturer: タイヨーエレック
formalModelName: あっぱれ剣士道E（補助資料表記。独立高信頼照合不足）
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: あっぱれ剣士道 / あっぱれ剣士道E / あっぱれ剣士道Ｅ
generation: 5号機
releaseDate: 2011-01-17
releaseDateStatus: HIGH_CONFIDENCE_FROM_PRIOR_CHRONOLOGY_AUDIT
releaseDateNote: 最新main LATEST_HANDOFFで外部導入日カレンダーの2011-01-17掲載を確認済み。今回も複数2011年機種資料で2011-01導入を照合。時系列BACKFILLとして追加。
systemType: A+RT / ボーナス+CZ+ゲーム数上乗せRT / 二段階天井
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、542「超重神グラヴィオン」、既存009-1を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 542 / chronologicalFrontier 2011-01-24。
- LATEST_HANDOFFで2011-01-17の時系列BACKFILL最優先候補として指定されていた本機を監査。候補パスのmain直接取得で未登録を確認し、543件目として追加。
- 2011-01-17は現在のchronologicalFrontier 2011-01-24より前なので、追加後もfrontier自体は2011-01-24を維持する。

## payoutRateBySetting

パチマガスロマガ / pacnk / 5号機クロニクル一致系列:
- 設定1: **96.4%**
- 設定2: **98.4%**
- 設定3: **101.2%**
- 設定4: **103.4%**
- 設定5: **106.2%**
- 設定6: **110.9%**

P-WORLDは設定4のみ **101.2%** と掲載し、他設定は一致。平均せずCONFLICTとして別保持する。
confidence: ANALYSIS_HIGH_CROSSCHECK / CONFLICT_SETTING4_PWORLD

## initialHitBySetting

### 天晴BONUS（黒BIG）
- 設定1〜6: **1/1985.9**

### 赤/青BIG
- 設定1: **1/819.2**
- 設定2: **1/762.0**
- 設定3: **1/697.2**
- 設定4: **1/655.4**
- 設定5: **1/606.8**
- 設定6: **1/537.2**

### MID / MB
- 設定1: **1/819.2**
- 設定2: **1/762.0**
- 設定3: **1/697.2**
- 設定4: **1/655.4**
- 設定5: **1/606.8**
- 設定6: **1/537.2**

### CB / REG
- 設定1: **1/481.9**
- 設定2: **1/468.1**
- 設定3: **1/442.8**
- 設定4: **1/420.1**
- 設定5: **1/390.1**
- 設定6: **1/352.3**

### ボーナス合算
- 設定1: **1/199.2**
- 設定2: **1/190.0**
- 設定3: **1/177.6**
- 設定4: **1/168.5**
- 設定5: **1/157.2**
- 設定6: **1/141.5**

パチマガスロマガとP-WORLDで合算・個別主要値を照合。
confidence: ANALYSIS_HIGH

## baseGamesPer50

- **34.1〜35.6G / 1000円**（設定1〜6レンジ）
- パチマガスロマガ保存ページの直接掲載値。今回取得本文では設定別個別対応までは表示されないため、レンジのまま保持し逆算しない。

confidence: ANALYSIS_HIGH_ARCHIVE_RANGE

## netIncrease

- RT「激戦モード」: **約+0.3枚/G**
- 基本1セット: **30G + 上乗せ**
- 1回の上乗せ最大: **100G**
- ボーナスで終了しない完走型。ボーナス後は残りRTへ復帰。
- 「特別激戦モード」: **75 / 100 / 125 / 150G + 上乗せ**。滞在中ボーナス後は初回基本G数を再セットして再突入。

confidence: ANALYSIS_HIGH_CROSSCHECK

## basicPayout

- 天晴BONUS: **約266枚**
- BIG: **約266枚**
- MID / MB: **約213枚**
- CB / REG: **約91枚**

P-WORLD、パチマガスロマガ、pacnkで整合。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はRTポイント獲得期待度の異なる**低確 / 高確**が存在。
- CZ「風神雷神モード」は通常時**200G周期**、RT非突入ボーナス後、RT終了後などから突入。
- CZ中は押し順/チェリーでパンク回避しつつ5ポイント到達でRT「激戦モード」へ。
- 第一天井: **ボーナス間777G**消化後、次回CZを契機に**次回ボーナスまで継続するRT**へ突入。
- 第二天井: **ボーナス間1410G**消化で、**次回ボーナス後の特別激戦モード突入確定**。

confidence: ANALYSIS_HIGH for system / ANALYSIS_SINGLE_CROSSCHECKED_BY_LEGACY_HEAVEN_LIST for ceiling use

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガ保存INDEXに本機専用「朝イチ・設定変更」項目の存在を確認。さらに旧天井狙い資料は本機を「宵越し×」とするため設定変更等で天井進捗が持ち越されない運用を強く示唆するが、設定変更時の具体本文（777G/1410GカウンタCLEAR、200G周期、低高確、RTポイント等）を直接回収できていない。一般論で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。旧天井狙い資料の「宵越し×」は据え置き時まで非継承と断定するには定義が粗い。777G/1410G進捗、200G周期、低高確、RTポイント/RT残りGの据え置き時保持を本機固有資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ONの天井進捗・周期・状態・RT権利について直接資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH_WITH_CLEAR_SUGGESTION**。旧資料の「宵越し×」は天井狙い上の非持越しを示すが、設定変更操作との因果を直接本文で確定できないため `CLEAR` へ昇格しない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常時の777G/1410G二段階天井は確定。設定変更専用の短縮/延長天井数値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に低確/高確と200G周期CZが存在するが、設定変更時の再抽選/引継ぎ本文値は回収できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の低確/高確選択率を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確確定、CZ/RT優遇等の公開値は確認できず。

resetPenalties: **POSSIBLE_LOSS_OF_CEILING_PROGRESS_NOT_CONFIRMED**。宵越し×資料から天井進捗消失の可能性は高いが、設定変更本文未回収のため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、200G周期のズレ等による本機固有の変更判別を、機種名/型式表記＋「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/周期/天井」で再探索したが確定できず。

numericResetData:
- normalCeilingStage1: **bonus interval 777G -> next CZ triggers RT continuing until next bonus**
- normalCeilingStage2: **bonus interval 1410G -> special Gekisen Mode guaranteed after next bonus**
- normalCZCycle: **200G**
- resetGameCounter: **UNVERIFIED_AFTER_RESEARCH_WITH_CLEAR_SUGGESTION**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionNumeric: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_DEDICATED_RESET_INDEX_PRESENT_BUT_CONCRETE_BODY_UNAVAILABLE**

## conflicts

- 機械割設定4: パチマガスロマガ / pacnk / 5号機クロニクルは **103.4%**。P-WORLDは **101.2%**。設定3も101.2%であるためP-WORLD側転記誤りの可能性はあるが、推測修正せず `CONFLICT` として両値を保持。
- BIG定義: pacnkは黒BIGを含めたBIG合成を1/580.0〜1/422.8として表示する一方、パチマガ/P-WORLDは黒BIG1/1985.9と赤/青BIG1/819.2〜1/537.2を分離。定義差なので同一列として平均しない。

## missingFields

- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- formalModelName high-confidence verification: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior exact: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior exact: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior exact: **UNVERIFIED_AFTER_RESEARCH**
- setting-change game counter CLEAR/RETAIN: **UNVERIFIED_AFTER_RESEARCH_WITH_CLEAR_SUGGESTION**
- reset mode/state distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. P-WORLD — あっぱれ剣士道
   - https://www.p-world.co.jp/machine/database/6197
   - タイヨーエレック、5号機RT/CZ/天井、ボーナス獲得枚数、RT30G/+0.3枚/G、ボーナス確率/合算、機械割を確認。設定4機械割101.2%は他資料とCONFLICT。
   - confidence: INDUSTRY_DATABASE

2. パチマガスロマガ保存INDEX — あっぱれ剣士道
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/taiyoelec_slot_09.php
   - 基本/ボーナス/PAYOUT/小役/RT/天井/朝イチ・設定変更の専用解析項目の存在を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE_INDEX

3. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/h.php
   - 黒BIG1/1985.9、赤青BIG/MID/CB、合算、機械割96.4/98.4/101.2/103.4/106.2/110.9%を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

4. パチマガスロマガ — 小役確率/1000円G数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/c.php
   - 1000円あたり34.1〜35.6Gを確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

5. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/a.php
   - RT+0.3枚/G、最低30G、ボーナス約266/213/91枚、CZ/RT構造を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

6. pacnk — あっぱれ剣士道
   - https://pacnk.com/slot/2011/apparekensidou/top.php
   - 機械割、BIG合成/MID/REG、低確/高確、200G周期CZ、777G/1410G天井、RT仕様を確認。
   - confidence: ANALYSIS_HIGH

7. 5号機クロニクル — タイヨーエレック5号機一覧
   - https://5goki.com/yaiyoelec
   - 2011/1導入、機械割96.4〜110.9%を照合。
   - confidence: ANALYSIS_SINGLE_CROSSCHECK

8. 旧天井ハイエナ資料 — 天井ハイエナ期待値リスト あ行
   - https://macerate.seesaa.net/article/226189461.html
   - 「あっぱれ剣士道 ボーナス後600狙い 宵越し×」を確認。設定変更との直接因果までは断定せず補助資料扱い。
   - confidence: LEGACY_SECONDARY_SINGLE

9. K-Navi — あっぱれ剣士道演出/基本構造補助
   - https://p-kn.com/slot/1337/direct/
   - CZ「風神雷神モード」、RT「激戦モード」等の存在・ゲーム性を補助照合。
   - confidence: ANALYSIS_HIGH

10. 最新main LATEST_HANDOFF
   - docs/real_machine_db/LATEST_HANDOFF.md
   - 前回時系列監査で外部導入日カレンダーの2011-01-17掲載を確認済みという引継ぎ根拠。
   - confidence: REPO_PRIOR_VERIFIED_CHRONOLOGY
