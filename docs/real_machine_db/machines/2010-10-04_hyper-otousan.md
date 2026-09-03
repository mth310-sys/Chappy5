# 極お父さん ～舞い降りた天使???～

machineName: 極お父さん ～舞い降りた天使???～
manufacturer: SNKプレイモア
releaseDate: 2010-10-04
releaseDateStatus: NATIONWIDE_INTRODUCTION_DATE_CONFIRMED_WITH_EARLIER_MONTH_METADATA
releaseDateNote: K-Naviはホール導入開始2010-10-04。5号機クロニクルは2010/9（月粒度）のため、日付定義差を分離して保持する。
generation: 5号機
systemType: A+ART / ボーナス+RT+ART
formalModelName: ハイパーオトウサンD
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線レコードを再取得。
- INDEXは旧19件地点のため、README規定に従いLATEST_HANDOFFの recordCount 517 / chronologicalFrontier 2010-10-04 を進捗正本として使用。
- 2010-10-04同日群を継続し、repo検索で本機が未登録であることを確認。

## payoutRateBySetting

5号機クロニクル:
- 設定1: **96.8%**
- 設定2: **98.6%**
- 設定3: **100.2%**
- 設定4: **105.4%**
- 設定5: **110.1%**
- 設定6: **115.2%**

後年回顧記事は設定1/3/4/5/6が一致する一方、設定2のみ **96.6%** とするため、設定2は平均せず `CONFLICT: 98.6% / 96.6%` として保持。
confidence: CONFLICT_SETTING2_OTHERWISE_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/331.0**
- 設定2: **1/327.7**
- 設定3: **1/321.1〜1/321.3**（資料丸め差）
- 設定4: **1/312.1**
- 設定5: **1/300.6**
- 設定6: **1/287.4**

### REG
- 設定1: **1/496.5**
- 設定2: **1/481.9**
- 設定3: **1/455.1**
- 設定4: **1/420.1**
- 設定5: **1/399.6**
- 設定6: **1/376.6**

### ART初当たり
- 設定1: **1/561.6**
- 設定2: **1/480.7**
- 設定3: **1/520.7**
- 設定4: **1/391.6**
- 設定5: **1/450.8**
- 設定6: **1/312.5**

confidence: MULTI_SOURCE_HIGH_FOR_MAJOR_VALUES

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「極お父さん / ハイパーオトウサンD / SNKプレイモア」と「50枚 / 1000円 / 千円 / ベース / コイン持ち」を組み替え、K-Navi、P-WORLD、5号機クロニクル、保存スペック、回顧資料を横断したが、本機固有の比較可能な直接値を確定できなかった。
confidence: UNVERIFIED

## netIncrease

- RT「追跡モード」: **30G**、約**+0.1枚/G**（保存解析資料）
- ART「バトルチャンス」: **1セット30G**、約**+1.2枚/G**
- ART継続率: **66% / 80% / 87% / 95%**
- 無限ART「極バトルチャンス」: 次回ボーナスまで継続、ボーナス後も66%ループと複数保存資料が記載
confidence: MULTI_SOURCE_HIGH

## basicPayout

- BIG: **約200枚**
- REG: **約50枚**
confidence: MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時は低確/高確/超高確の内部状態を持ち、ART当選期待度が変化。
- RT「追跡モード」は30G完走型でART当選の超高確ゾーン。
- ART「バトルチャンス」は30G単位の継続率ストック型。
- **通常天井: ボーナス or RT or ART間MAX600Gで天井状態へ移行し、1枚役成立でARTへ突入。**
confidence: MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名・正式型式・メーカー・シリーズ名と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 天井 / 600G」を組み替えて複数検索したが、設定変更時の600G天井進捗、内部状態、ARTストック/潜伏のclear/retainを直接確定できる本機固有資料を回収できなかった。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の600G天井進捗、内部状態、ARTストック/潜伏の保持を直接確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗、内部状態、ART関連状態の扱いを本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の天井条件はボーナス/RT/ART間MAX600Gで確認済みだが、設定変更時のゲーム数clear/retainは未確認。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井MAX600G。設定変更専用短縮天井・朝一専用天井値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に低確/高確/超高確があるが、設定変更後の初期振り分けは未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確/超高確、RT、ARTストック/潜伏等の設定変更/据え置き/電断時処理は直接資料未回収。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用の短縮天井、ART確定、高確優遇などを直接確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更による天井進捗消去等を直接確認できず、推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/ランプ状態など本機固有の高信頼な設定変更判別挙動を確認できず。

numericResetData:
- normalCeiling: **ボーナス/RT/ART間MAX600G → 天井状態 → 1枚役成立でART**
- settingChangeCounterBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- publishedResetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- morningARTProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- 導入時期: K-Navi **2010-10-04**、5号機クロニクル **2010/9**。日粒度の全国導入開始と月粒度メタデータを分離。
- 機械割設定2: 5号機クロニクル **98.6%** / 後年回顧記事 **96.6%**。他設定は一致するため誤記可能性はあるが、平均・自動修正せずCONFLICT保持。
- BIG設定3: P-WORLD系 **1/321.1**、K-Navi **1/321.3**。丸め差として双方を保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange時600G天井進捗clear/retain: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior / powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset後の内部状態/ARTストック・潜伏処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「極お父さん ～舞い降りた天使???～」 — 2010-10-04導入開始、BIG確率、機種概要
   - https://p-kn.com/slot/1273/
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
2. P-WORLD「極お父さん～舞い降りた天使???～」 — 5号機ART、BIG/REG、ART初当たり、30G・約+1.2枚/G、MAX600G天井
   - https://www.p-world.co.jp/machine/database/6079
   - confidence: DATABASE_HIGH
3. 5号機クロニクル「SNKプレイモア 5号機全機種一覧」 — 2010/9月粒度、機械割96.8/98.6/100.2/105.4/110.1/115.2%
   - https://5goki.com/snkplaymore
   - confidence: RETROSPECTIVE_DATABASE_MEDIUM
4. pacnk「極お父さん 舞い降りた天使」 — 設定別BIG/REG/ART初当たり、内部状態、RT/ART概要
   - https://pacnk.com/slot/2010/hyperotousan/top.php
   - confidence: ANALYSIS_SECONDARY_MEDIUM
5. 中一商事 保存実機スペック — 型式ハイパーオトウサンD、BIG約200枚/REG約50枚、ART約+1.2枚/G、MAX600G天井
   - https://www.nakaiti.com/html/sSNK077.html
   - confidence: ARCHIVED_SPEC_SECONDARY_MEDIUM
6. marimo0925「スーパーお父さんシリーズ歴代機械割」 — 設定2のみ96.6%、他設定は5号機クロニクルと一致。CONFLICT根拠として保持
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-superfather-ban/
   - confidence: RETROSPECTIVE_SINGLE_LOW_MEDIUM
7. ハンゲーム パチスロWiki保存解析 — RT約+0.1枚/G、30G、低確/高確/超高確、ART30G約+1.2枚/G
   - https://wikiwiki.jp/hanpachi/%E3%81%AA%E3%81%AA%E3%81%B1%E3%81%A1%20%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/%E6%A5%B5%E3%81%8A%E7%88%B6%E3%81%95%E3%82%93%EF%BD%9E%E8%88%9E%E3%81%84%E9%99%8D%E3%82%8A%E3%81%9F%E5%A4%A9%E4%BD%BF%EF%BC%9F%EF%BC%9F%EF%BC%9F%EF%BD%9E
   - confidence: ARCHIVED_COMMUNITY_ANALYSIS_LOW_MEDIUM
