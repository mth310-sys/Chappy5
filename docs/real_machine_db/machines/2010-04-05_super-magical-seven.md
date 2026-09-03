# スーパーマジカルセブン

machineName: スーパーマジカルセブン
manufacturer: トリビー
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-04-05
generation: 5号機
systemType: ボーナス非搭載・ナビ回数管理ART / AT・CZ併用
coreStatus: COMPLETE_CORE_RESET_PARTIAL_PAYOUT_CONFLICT_FORMAL_IDENTITY_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近470「鮪伝説」を再取得し、recordCount 470 / chronologicalFrontier 2010-04-05 を正本として継続。
- repo内検索で本機未登録を確認。K-Navi 2010年4月導入カレンダーと当時解析はホール導入開始を **2010-04-05**、グリーンべると/P-WORLD業界ニュースは納品を **2010-04-04から予定** とし整合するため、2010-04-05同日群の471件目として追加。
- 同日未処理候補「パチスロ宇宙戦艦ヤマト」「ハッピージャグラーV」は次回以降に継続監査する。

## payoutRateBySetting

### 系列A — パチマガスロマガ
- 設定1: **97.0%**
- 設定2: **98.5%**
- 設定3: **99.9%**
- 設定4: **102.0%**
- 設定5: **105.0%**
- 設定6: **111.1%**

### 系列B — P-WORLD / 5号機クロニクル
- 設定1: **97.9%**
- 設定2: **99.7%**
- 設定3: **101.2%**
- 設定4: **103.1%**
- 設定5: **104.8%**
- 設定6: **111.1%**

設定1〜4は丸め差ではなく明確に異なる。設定5も定義差の可能性があるため平均化せず `CONFLICT` として両系列を保持。

confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

### ART「ドリームラッシュ」初当たり
- 設定1: **1/300**
- 設定2: **1/287**
- 設定3: **1/269**
- 設定4: **1/257**
- 設定5: **1/245**
- 設定6: **1/218**

P-WORLDとパチマガスロマガで一致。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約35G/50枚（1000円）**

当時解析まとめで本機専用ベース値を直接確認。別系統で同値を直接照合できていないため単一解析値として保持。

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

- ART「ドリームラッシュ」: **約+2.0枚/G**
- AT「ドリームロード」: **約+0.3枚/G**（P-WORLD記載）

ART純増約2.0枚/Gはグリーンべると業界発表、P-WORLD、パチマガスロマガ、当時解析で一致。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## basicPayout

ART「ドリームラッシュ」はナビ回数管理。
- 20回: **約120枚（MAX120枚表記）**
- 50回: **約300枚（MAX300枚表記）**
- 80回: **約480枚（MAX480枚表記）**
- ART中上乗せあり。

業界発表、P-WORLD、パチマガスロマガ、後年回顧記事で一致。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## ceilingAndMode

- ボーナス非搭載。通常時は特殊リプレイ「黄7・黄7・赤7」（約1/25）の**成立回数**でART天井を管理。
- 通常A/通常B系は最大34回、ハマリ系は最大50回、天国系は1〜5回で天井到達する解析を確認。
- P-WORLDは通常/連チャンモード最大34回、ハマリモード最大50回と整理。
- パチマガスロマガは最大50回を概ね **875〜1250G程度** とする。
- 天井到達時はAT「ドリームロード」を経由しART確定。
- ART終了後のモード移行がゲーム性の中心。通常時の全モード移行テーブルは本DBの実機完全再現範囲外のため収録しない。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **RESET_MODE_RESELECT_CONFIRMED_ANALYSIS_SINGLE**。当時解析資料に「設定変更時のモード選択」表があり、全設定共通で通常A 25% / 通常B 25% / ハマリ40% / 天国10%と明示される。設定変更で少なくともモード再選択が発生することを確認。

carryOverBehavior: **PRACTICALLY_OVERRIDDEN_BY_TIMED_RESET / DIRECT_RETAIN_DETAILS_UNVERIFIED**。単純な据え置き設定そのもののモード/天井成立回数保持条件を高信頼一次本文で確定できない。一方、当時立ち回り資料では「設定変更しなくても電源関連の150分経過でリセット」とされ、通常ホールの朝一は据え置き設定でもリセット状態になり得る特殊仕様が報告されている。したがって一般的な「据え置き=前日状態保持」とは扱わない。

powerCycleBehavior: **PARTIAL_TIMED_RESET_CONFIRMED_SECONDARY_SOURCE_CONFLICT_ON_TIMER_START_POINT**。複数の後年/当時資料で約150分経過による自動リセットが確認される。ただし当時立ち回り資料は「電源OFFの後150分」、旧HAZUSEを引用した掲示板ログは「電源ON後150分でモード変更（天井リセット）」と記録しており、タイマー起算点が競合する。150分経過でモード/天井がリセットされる特殊挙動自体は複数系統で一致するため採用し、OFF起算かON起算かは `CONFLICT` とする。

gameCounterReset: **RESET_ON_SETTING_CHANGE_OR_TIMED_POWER_RESET_FOR_SPECIAL_REPLAY_CEILING_PROGRESS**。本機の天井はG数ではなく特殊リプレイ成立回数で管理。設定変更時のモード再選択と、150分経過リセットが「天井リセット/モード変更」と記録されるため、特殊リプレイ成立回数による天井進捗はリセット対象として扱う。タイマー起算点はCONFLICT。

ceilingAfterReset: **MODE_DEPENDENT / RESET_TENGOKU_MAX_5_SPECIAL_REPLAYS_WITH_10_PERCENT_PROBABILITY**。リセット時は10%で天国モード。天国モードの天井は特殊リプレイ1〜5回のいずれかで、1回25% / 2回12.5% / 3回25% / 4回12.5% / 5回25%という解析表を確認。通常G数換算の固定短縮天井ではない。

modeAfterReset: **CONFIRMED_NUMERIC**。
- 通常A: **25%**
- 通常B: **25%**
- ハマリ: **40%**
- 天国: **10%**
全設定共通として当時解析資料に掲載。

stateAfterReset: **PARTIAL**。モード再選択と天井進捗リセットは確認。CZ/RT/AT/ART中など個別状態を設定変更または150分リセットが跨いだ際の全処理は本機固有の直接資料を十分回収できず、実機完全再現目的の推測はしない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **CONFIRMED_MORNING_TENGOKU_CHANCE**。リセット時10%で天国モードとなり、特殊リプレイ最大5回でART天井。通常ホールでは長時間電源停止/再投入運用により、設定据え置きでも朝一リセット状態となる可能性が高いと当時立ち回り資料で扱われ、朝一カニ歩き対象になっていた。

resetPenalties: **PARTIAL**。リセット時はハマリモード40%も選択されるため、前日が天国等だった場合には状態消失が不利になり得る。ただし期待収支等の公開比較値は未収集であり、追加の不利確率を推測しない。

resetDetection: **NO_DIRECT_GAKKUN_CONDITION_CONFIRMED / MORNING_BEHAVIOR_INFERENCE_AVAILABLE**。本機固有のガックン・初期出目・表示による確定変更判別条件は十分な高信頼資料で確認できず。150分経過リセット仕様のため、朝一の状態だけから「設定変更か据え置きか」を区別しにくい機種として扱う。

numericResetData:
- resetModeDistribution: **通常A 25% / 通常B 25% / ハマリ40% / 天国10%**
- resetTengokuProbability: **10%**
- tengokuCeiling: **特殊リプレイ1〜5回**
- tengokuCeilingDistribution: **1回25% / 2回12.5% / 3回25% / 4回12.5% / 5回25%**
- timedPowerReset: **約150分経過**
- timedPowerResetTimerOrigin: **CONFLICT（OFF後150分 vs ON後150分）**
- normalCeiling: **特殊リプレイ最大34回（通常A/B） / 最大50回（ハマリ）**
- equivalentMaxGameRangeReference: **約875〜1250G程度（50回時・解析資料表記）**

resetBehaviorQA: PARTIAL_HIGH_VALUE_RESET_BEHAVIOR_RECOVERED_WITH_TIMER_ORIGIN_CONFLICT

## conflicts

- payoutRateBySetting: **CONFLICT**。パチマガスロマガ 97.0/98.5/99.9/102.0/105.0/111.1% vs P-WORLD/5号機クロニクル 97.9/99.7/101.2/103.1/104.8/111.1%。平均化しない。
- timedPowerResetTimerOrigin: **CONFLICT**。当時立ち回り資料は「電源OFFの後150分」、旧HAZUSE引用ログは「電源ON後150分でモード変更（天井リセット）」。150分リセット自体は一致するが起算点は未確定。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- timedPowerResetTimerOrigin: CONFLICT
- resetDetection exact condition: UNVERIFIED_AFTER_RESEARCH
- CZ/RT/AT/ART個別状態の変更・電断時処理: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると / P-WORLD「トリビーが『スーパーマジカルセブン』を発表」 — https://news.p-world.co.jp/articles/3834/greenbelt — 2010-02-18、納品4/4予定、ART純増約2.0枚/G、初期20回約120枚、特殊リプレイ1/25・天井1〜50回 — reliability: INDUSTRY_NEWS
2. K-Navi 2010年4月新台導入カレンダー — https://p-kn.com/calendar/201004/ — 2010-04-05導入 — reliability: INDUSTRY_DB
3. P-WORLD「スーパーマジカルセブン」 — https://www.p-world.co.jp/machine/database/5871 — ART初当たり1/300→1/218、機械割系列B、ART約+2.0枚/G、AT約+0.3枚/G、120/300/480枚、天井最大34/50回 — reliability: INDUSTRY_DB
4. パチマガスロマガ「スーパーマジカルセブン ART確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/14/h.php — ART初当たり1/300→1/218、機械割系列A — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「スーパーマジカルセブン 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/14/a.php — ボーナス非搭載、ART約+2.0枚/G、20/50/80回=約120/300/480枚、最大天井50回・875〜1250G程度 — reliability: ANALYSIS_HIGH
6. 当時解析まとめ — https://ameblo.jp/pachimatome/entry-10499026926.html — 2010-04-05導入、約35G/50枚、ART/天井/モード概要、機械割系列A — reliability: ARCHIVE_ANALYSIS
7. My パチスロ覚書「スーパーマジカルセブン・解析情報」 — https://wikiwiki.jp/miduki/トリビー/スーパーマジカルセブン/解析情報 — 設定変更時モード通常A25/通常B25/ハマリ40/天国10%、天国天井1〜5回の振分 — reliability: ARCHIVE_ANALYSIS_SINGLE
8. My パチスロ覚書「スーパーマジカルセブン・立ち回り」 — https://wikiwiki.jp/miduki/トリビー/スーパーマジカルセブン/立ち回り — 電源関連150分リセット、リセット時天国10%、朝一立ち回り — reliability: ARCHIVE_ANALYSIS_SINGLE
9. 5ch過去ログ（旧HAZUSE引用） — https://kako.5ch.io/test/read.cgi/slot/1247787165 — 「電源ON後150分でモード変更（天井リセット）」という旧HAZUSE記録の引用。タイマー起算点CONFLICT確認用 — reliability: ARCHIVE_QUOTE_LOW
10. 5号機クロニクル「トリビー5号機全機種一覧」 — https://5goki.com/trivy — 2010/4、機械割系列B — reliability: RETROSPECTIVE_DB
