# パチスロポパイブリッド

machineName: パチスロポパイブリッド
manufacturer: サミー
formalModelName: ポパイ2ZR
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-03-08（ALL7/当時導入スケジュール/アタリ7。パチビー・パチ＆スロ必勝本は2010-03-15でCONFLICT）
generation: 5号機
systemType: A+ART / ボーナス + 押し順ART
coreStatus: COMPLETE_CORE_RESET_PARTIAL_RELEASE_DATE_CONFLICT

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、旧INDEX、LATEST_HANDOFF、直前main追加レコード「麻雀王利一」を再取得してから継続。
- main実レコード上は「麻雀王利一」が461件目相当。LATEST_HANDOFFは460件地点のままだったため、実レコードを優先。
- 2010-03-01同日群は「新世紀エヴァンゲリオン～魂の軌跡～」「真田純勇士」「麻雀王利一」を確認済み。
- 次の具体日群は当時導入スケジュール/ALL7で2010-03-08。repo/commit検索で本機未登録を確認して追加。
- 導入日はALL7、当時導入スケジュール、アタリ7が2010-03-08。グリーンべるとは「3月上旬納品予定」。一方、パチビーとパチ＆スロ必勝本は2010-03-15。平均化せずCONFLICTとして保持し、本DB時系列主値は複数の当時スケジュールが一致する2010-03-08を採用。

## payoutRateBySetting

**CONFLICT — 平均しない。**

### パチマガスロマガ旧解析 / パチ＆スロ必勝本系列
- 設定1: **97.3%**
- 設定2: **99.1%**
- 設定3: **102.0%**
- 設定4: **106.0%**
- 設定5: **111.0%**
- 設定6: **119.9%**

### アタリ7 / Seven Peace旧解析系列
- 設定1: **96.4%**
- 設定2: **98.2%**
- 設定3: **100.7%**
- 設定4: **104.0%**
- 設定5: **108.5%**
- 設定6: **119.9%**

設定1〜5は丸め差を超えるためCONFLICTとして両系列を保持。

confidence: CONFLICT_ANALYSIS_SERIES

## initialHitBySetting

### BIG合算
- 設定1: **1/334.37**
- 設定2: **1/326.05**
- 設定3: **1/319.69**
- 設定4: **1/312.07〜1/312.08**
- 設定5: **1/304.82**
- 設定6: **1/296.54**

### MIDDLE / REG
- 設定1: **1/496.48**
- 設定2: **1/489.07**
- 設定3: **1/481.88**
- 設定4: **1/471.48**
- 設定5: **1/461.52**
- 設定6: **1/451.97**

### ボーナス合算
- 設定1: **1/199.80**
- 設定2: **1/195.63**
- 設定3: **1/192.19**
- 設定4: **1/187.78**
- 設定5: **1/183.57**
- 設定6: **1/179.06**

パチマガスロマガ旧解析・パチ＆スロ必勝本で同系列を照合。アタリ7も丸め値で概ね一致。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 設定1: **31.38G / 50枚**
- 設定2: **31.47G / 50枚**
- 設定3: **31.55G / 50枚**
- 設定4: **31.64G / 50枚**
- 設定5: **31.70G / 50枚**
- 設定6: **31.82G / 50枚**

パチマガスロマガ旧解析の直接値。Seven Peaceの31.4〜31.8Gと丸め整合。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- ART「プルート追跡モード」: **約+1.0枚/G**

グリーンべると当時記事、パチマガスロマガ旧解析、パチビー、アタリ7で一致。

confidence: INDUSTRY_CONTEMPORARY / ANALYSIS_HIGH

## basicPayout

- BIG: **約252枚**（規定払い出し350枚超で終了）
- MIDDLE/REG: **約84枚**（規定払い出し110枚超で終了）

グリーンべると当時記事・パチマガスロマガ・パチビー等で一致。

confidence: INDUSTRY_CONTEMPORARY / ANALYSIS_HIGH

## modeSpecificMinimumData

- ART名称: **プルート追跡モード**（一部旧DBは「ブルート追跡モード」表記）。
- ARTは**1セット20G、約+1.0枚/G**。ナビストックがあれば継続し、ART中にゲーム数上乗せもあり。
- ボーナス後はCZ「出航チャンス」へ移行。ARTナビストックがあれば押し順ナビ発生、非ストックでも自力正解でART突入可能。
- 通常時には低確/高確が存在するが、通常時の全状態移行率・ARTストック振分など実機完全再現用詳細は本DB対象外。
- **通常状態で999G消化すると天井ARTへ突入**。パチビーは「RTパンク後999G消化」と説明しており、通常状態999G救済として保持。

confidence: INDUSTRY_CONTEMPORARY / ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`パチスロポパイブリッド / ポパイブリッド / ポパイ2ZR / サミー`に対して、`設定変更 / リセット / 朝一 / 据え置き / 宵越し / 天井 / 999G / 高確 / ARTストック / RT / 電源OFF ON`を組み替え、パチマガスロマガ旧機種ページ、必勝本、旧解析DB、当時記事を横断。設定変更時の999G進捗、高確、CZ/RT、ARTナビストックのclear/retainを直接断定できる本文は回収できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の999G天井進捗・高確・CZ/RT・ARTナビストック保持を本機固有資料で直接確認できず。一般的5号機挙動から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONと設定変更/据え置きを区別した本機固有公開資料を確認できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常状態999G天井が存在すること自体は確認済みだが、設定変更時のカウンタclear/retainは不明。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井は999G。設定変更専用の短縮天井、再計測起点、引継ぎは直接確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の低確/高確再抽選、朝一専用モード振り分けは確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確残G、CZ/RT状態、ARTナビストックの変更/据え置き/電断時処理を直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。通常999G天井は通常仕様であり、設定変更専用恩恵とは扱わない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / リール / 初期出目 / 液晶 / ステージ / ランプ / 朝一 / 設定変更判別 / 据え置き判別`まで検索語を変えたが、本機固有の高信頼な変更判別方法を確定できず。

numericResetData:
  normalCeiling: **通常状態999G消化で天井ART**
  settingChangeCounterBehavior: **UNVERIFIED_AFTER_RESEARCH**
  carryOverMorningCounter: **UNVERIFIED_AFTER_RESEARCH**
  resetShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: RESEARCHED_UNVERIFIED_MACHINE_SPECIFIC_RESET_DETAILS

## conflicts

- **導入日**: ALL7/当時導入スケジュール/アタリ7 `2010-03-08` vs パチビー/パチ＆スロ必勝本 `2010-03-15`。グリーンべるとは「3月上旬納品予定」。平均せず両系列を保持し、時系列主値は2010-03-08。
- **機械割**: 旧パチマガ/必勝本系列 `97.3 / 99.1 / 102.0 / 106.0 / 111.0 / 119.9%` vs アタリ7/Seven Peace系列 `96.4 / 98.2 / 100.7 / 104.0 / 108.5 / 119.9%`。平均しない。
- ART名称は当時業界記事が「プルート追跡モード」、一部旧解析が「ブルート追跡モード」。ゲーム内容は同一機種の同ARTを指すため表記差として保持。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change handling of 999G ceiling counter: UNVERIFIED_AFTER_RESEARCH
- reset handling of high/CZ/RT/ART-stock states: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric distributions/rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「ボーナスとARTが融合、ハイブリッドパチスロ登場」 — https://web-greenbelt.jp/00002556/ — 2010-02-10当時業界記事、型式ポパイ2ZR、BIG252枚/MIDDLE84枚、ART20G・約+1枚/G、3月上旬納品予定 — reliability: INDUSTRY_CONTEMPORARY
2. ALL7.jp「2010年3月の導入機種一覧」 — https://www.all7.jp/plans/index/2010/03/10 — 2010-03-08導入予定 — reliability: CONTEMPORARY_SCHEDULE_DB
3. 当時導入スケジュール再録 — https://ameblo.jp/pachimatome/entry-10470039494.html — 2010-03-08導入/3月7日納品 — reliability: CONTEMPORARY_SCHEDULE_SECONDARY
4. パチマガスロマガ旧解析「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/123/a.php — ART20G/+1枚、BIG252枚/MID84枚 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧解析「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/123/c.php — 50枚ベース31.38〜31.82G — reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧解析「ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/123/h.php — ボーナス確率、PAYOUT97.3〜119.9% — reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本「基本スペック」 — https://p.hisshobon.jp/machine/1563/1/23881 — ボーナス確率、解析機械割97.3〜119.9%、2010-03-15導入 — reliability: ANALYSIS_HIGH
8. パチビー機種情報 — https://www.pachibee.jp/machines/about/210020015 — 2010-03-15導入、ART+1枚/G、RTパンク後999G救済 — reliability: HISTORICAL_MACHINE_DB
9. Seven Peace旧解析「ポパイブリッド」 — https://www.mb.ccnw.ne.jp/seven-peace.com/popai/popai.html — 機械割96.4〜119.9%、50枚31.4〜31.8G、通常状態999G天井ART — reliability: HISTORICAL_ANALYSIS_DB
10. アタリ7「パチスロ ポパイブリッド」 — https://www.atari7.com/slot/date1441784682.php — 2010-03-08、ボーナス/ART/別機械割系列 — reliability: HISTORICAL_MACHINE_DB

## sourceAcquisition

acquiredAt: 2026-09-03
confidenceOverall: PERFORMANCE_HIGH_CONFLICT_PAYOUT / RELEASE_CONFLICT_HIGH_DOCUMENTED / RESET_MACHINE_SPECIFIC_UNVERIFIED_AFTER_RESEARCH
