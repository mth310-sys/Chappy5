# 麻雀王利一

machineName: 麻雀王利一
manufacturer: タイヨー
formalModelName: 麻雀王利一 X
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-03-01（ALL7当時導入予定一覧および当時導入スケジュールでホール導入。グリーンべると当時記事は2010-02-28納品予定）
generation: 5号機
systemType: ボーナス + 完走型ART / ストック型ART
coreStatus: COMPLETE_CORE_RESET_PARTIAL_FORMAL_IDENTITY_SOURCE_LIMITED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、旧INDEX、LATEST_HANDOFF、直前レコード「新世紀エヴァンゲリオン～魂の軌跡～」を再取得してから継続。
- 開始時点は recordCount 460 / chronologicalFrontier 2010-03-01。
- repo検索で本機未登録を確認。
- ALL7の2010年3月導入予定一覧と当時導入スケジュールはいずれも2010-03-01導入、グリーンべるとは2010-02-28納品予定。物流開始/ホール導入の定義差として保持し、本DB releaseDateは2010-03-01を採用。
- 2010-03-01同日群は既登録「新世紀エヴァンゲリオン～魂の軌跡～」、既登録候補「真田純勇士」と本機を監査対象として扱う。

## payoutRateBySetting

- 設定1: **97.7%**
- 設定2: **98.7%**
- 設定3: **100.0%**
- 設定4: **102.6%**
- 設定5: **106.1%**
- 設定6: **111.0%**

パチマガスロマガ旧解析と5号機クロニクルで同一系列を照合。

confidence: ANALYSIS_HIGH / RETROSPECTIVE_DB / MULTI_SOURCE_CORROBORATED

## initialHitBySetting

### BIG合成
- 設定1: **1/468.1**
- 設定2: **1/461.5**
- 設定3: **1/455.1**
- 設定4: **1/448.9**
- 設定5: **1/442.8**
- 設定6: **1/436.9**

### REG合成
- 設定1: **1/712.3**
- 設定2: **1/704.7**
- 設定3: **1/697.2**
- 設定4: **1/689.9**
- 設定5: **1/682.7**
- 設定6: **1/675.6**

### ボーナス合成
- 設定1: **1/282.5**
- 設定2: **1/278.9**
- 設定3: **1/275.4**
- 設定4: **1/271.9**
- 設定5: **1/268.6**
- 設定6: **1/265.3**

パチマガスロマガ旧解析の設定別直接値。

confidence: ANALYSIS_HIGH_SINGLE_SERIES

## baseGamesPer50

- 全設定共通: **32.78G / 1000円（50枚）**

旧パチマガスロマガ解析の通常時小役ページに直接値あり。

confidence: ANALYSIS_HIGH_SINGLE

## netIncrease

**CONFLICT — 平均しない。**

- グリーンべると当時業界記事: ART「雀雀コロシアム」 **約+1.0枚/G**
- パチマガスロマガ旧解析: **約+1.1枚/G**

解析時期または算出条件差を今回確定できないため両値を保持する。

confidence: CONFLICT_INDUSTRY_VS_ANALYSIS

## basicPayout

- BIG: **約238枚**（規定払い出し360枚）
- REG: **約89枚**（規定払い出し130枚）

confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- ART名称: **雀雀コロシアム**。
- 1セットは麻雀一局を再現する完走型。グリーンべると当時記事では**平均52.5G・最低45G**、パチマガスロマガ旧解析では平均約52G。
- ボーナス中の7揃いが主なART契機。旧解析では赤7揃い=ART、青7揃い=2連以上、白7揃い=5連以上。
- ART敗北後もRT状態が継続し、パンクチェリー入賞まで継続。旧解析では**128Gまでパンクチェリーを回避できればART復帰**。
- **通常時1200G以上ハマった後に成立したボーナス後はART突入確定**。これは1200G到達即ARTではなく「1200G以上ハマリ後の次回ボーナスを契機にARTへ入る」救済仕様として保存する。
- 実機完全再現用の7揃い個別確率、ストック振分、麻雀勝敗内部抽選は本DB対象外。

confidence: INDUSTRY_CONTEMPORARY / ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`麻雀王利一 + 設定変更 / リセット / 朝一 / 天井 / 1200G / ARTストック / RT`を当時解析・旧DB・回顧資料で再探索したが、設定変更時に1200Gハマリ進捗をclear/retainするか、ART/RT/ストック状態をどう処理するかの本機固有直接本文を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1200G進捗・ART/RT状態・ストック保持を本機固有資料で確定できず。一般的5号機挙動からの推定はしない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONと設定変更/据え置きを区別した本機固有本文を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。1200G救済用ハマリ進捗の設定変更clear/retainは不明。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の公開救済値は「1200G以上ハマリ後の次回ボーナス後ART確定」だが、設定変更後に同じ進捗を引き継ぐか、0Gから再計測か、短縮されるかは確認不能。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用モード振分・朝一モードは確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART/RT内部状態、ARTストック、パンクチェリー回避中状態の変更/据え置き/電断処理を確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。1200G救済は通常時仕様であり、設定変更専用恩恵とは扱わない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / リール / 初期出目 / 液晶 / ランプ / 朝一 / 設定変更判別 / 据え置き判別`まで検索語を変えたが、本機固有の高信頼な変更判別方法を確定できず。

numericResetData:
  normalReliefThreshold: **1200G以上ハマリ後の次回ボーナス後ART確定（通常時仕様）**
  settingChangeCounterBehavior: **UNVERIFIED_AFTER_RESEARCH**
  carryOverMorningCounter: **UNVERIFIED_AFTER_RESEARCH**
  resetShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: RESEARCHED_UNVERIFIED_MACHINE_SPECIFIC_RESET_DETAILS

## conflicts

- ART純増: 当時グリーンべると約+1.0枚/G vs 旧パチマガスロマガ約+1.1枚/G。平均せず保持。
- 導入日は競合ではなく定義差。グリーンべると2010-02-28納品予定、ALL7/当時導入スケジュール2010-03-01ホール導入。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change handling of 1200G relief counter: UNVERIFIED_AFTER_RESEARCH
- ART/RT/stock state handling on reset/power cycle: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric distributions/rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「麻雀対局のドキドキ感をARTで再現」 — https://web-greenbelt.jp/00002485/ — 2010-01-25当時業界記事、2010-02-28納品予定、ART名称、平均52.5G/最低45G、約+1枚/G、ボーナス中7揃い契機 — reliability: INDUSTRY_CONTEMPORARY
2. ALL7.jp「2010年3月の導入機種一覧」 — https://www.all7.jp/plans/index/2010/03/10 — 麻雀王利一/タイヨー、2010-03-01導入予定 — reliability: CONTEMPORARY_SCHEDULE_DB
3. 当時導入スケジュール再録「2010年3月1日～4月19日新台導入スケジュール一覧」 — https://ameblo.jp/pachimatome/entry-10470039494.html — 2010-03-01導入、納品日2月28日 — reliability: CONTEMPORARY_SCHEDULE_SECONDARY
4. パチマガスロマガ旧解析「麻雀王利一 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/70/a.php — ART約+1.1枚/G、平均52G、RT/128G復帰、1200G救済、BIG/REG獲得 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧解析「麻雀王利一 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/70/c.php — 1000円あたり32.78G — reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧解析「麻雀王利一 ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/70/h.php — BIG/REG/合算、設定別PAYOUT — reliability: ANALYSIS_HIGH
7. 5号機クロニクル「タイヨー5号機全機種一覧」 — https://5goki.com/taiyo — 2010/3、設定別機械割系列の照合 — reliability: RETROSPECTIVE_DATABASE
8. タイヨー検定通過機種整理 — https://q-and-a.hatenablog.com/entry/2016/10/07/134053 — 2009-12-21「麻雀王利一 X」検定通過記録の整理 — reliability: RETROSPECTIVE_SECONDARY / FORMAL_MODEL_SOURCE_LIMITED

## sourceAcquisition

acquiredAt: 2026-09-03
confidenceOverall: PERFORMANCE_HIGH / RELEASE_HIGH / FORMAL_MODEL_MEDIUM / RESET_MACHINE_SPECIFIC_UNVERIFIED_AFTER_RESEARCH
