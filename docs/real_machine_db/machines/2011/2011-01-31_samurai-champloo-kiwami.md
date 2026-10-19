# サムライチャンプルー極

machineName: サムライチャンプルー極
manufacturer: ニューギン
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: サムライチャンプルー極 / サムライチャンプルー 極 / SAMURAI CHAMPLOO 極
generation: 5号機
releaseDate: 2011-01-31
releaseDateStatus: HIGH_CONFIDENCE
releaseDateNote: K-Naviとパチビーが2011-01-31ホール導入開始を明記。当時グリーンべるとは2011-01-30納品開始予定、K-Navi内覧会記事は2011年1月下旬以降導入予定。納品日とホール導入日を分離し、本DB主値はホール導入開始2011-01-31。
systemType: 5号機 / A+ART / ゲーム数上乗せ+セットストックART / CZ
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線レコード「楽々温泉記」を再取得。
- 開始時正本は recordCount 545 / chronologicalFrontier 2011-01-31。
- LATEST_HANDOFF指定どおり2011-01-31同日群を再監査。
- K-Naviで「サムライチャンプルー極」の2011-01-31ホール導入開始を確認し、repo code searchで未登録を確認。
- 同日漏れとして追加。chronologicalFrontierは2011-01-31を維持。

## payoutRateBySetting

パチマガスロマガ / pacnk / A-SLOTで一致:
- 設定1: **96.2%**
- 設定2: **98.8%**
- 設定3: **101.5%**
- 設定4: **104.6%**
- 設定5: **110.2%**
- 設定6: **119.1%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG合算
- 設定1: **1/399.61**
- 設定2: **1/394.80**
- 設定3: **1/381.02**
- 設定4: **1/368.18**
- 設定5: **1/344.93**
- 設定6: **1/321.25**

### REG合算
- 設定1: **1/655.36**
- 設定2: **1/642.51**
- 設定3: **1/618.26**
- 設定4: **1/595.78**
- 設定5: **1/564.97**
- 設定6: **1/520.13**

### ボーナス合算
- 設定1: **1/248.24**
- 設定2: **1/244.54**
- 設定3: **1/235.74**
- 設定4: **1/227.56**
- 設定5: **1/214.17**
- 設定6: **1/198.59**

### ART「斬モード」初当たり
- 設定1: **1/354**
- 設定2: **1/322**
- 設定3: **1/320**
- 設定4: **1/291**
- 設定5: **1/278**
- 設定6: **1/221**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

パチマガスロマガ:
- 設定1: **32.24G/1000円(50枚)**
- 設定2: **32.27G**
- 設定3: **32.29G**
- 設定4: **32.33G**
- 設定5: **32.37G**
- 設定6: **32.43G**

confidence: ANALYSIS_HIGH_ARCHIVE

## netIncrease

- ART「斬モード」: **約+1.2枚/G**
- ART「極モード」: P-WORLD/パチビー/当時業界記事では**約+1.2枚/G**。K-Navi機種概要に「1ゲーム毎の期待値は約2.4枚」との表現があるが、純増値とは定義が異なる可能性があるため純増主値には採用しない。

confidence: INDUSTRY_DATABASE_PLUS_ANALYSIS

## basicPayout

- BIG: **約214枚**（323枚を超える払出で終了）
- REG: **約48枚**（8G消化または8回入賞で終了）

confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「斬モード」: **1セット50G+α**、ゲーム数上乗せ+セットストック式。
- ART「極モード」: 斬モード中から昇格。斬モード残Gの減算を停止し、消化1Gごとに斬モードG数を最低1G上乗せ。レア役で最大100G上乗せ。
- ART終了後は引き戻しCZ「戦モード」へ移行。
- 天井: **ボーナス間1200G**で前兆を経由し斬モードへ突入。
- 天井到達時ARTストック: **1個92% / 2個8%**（pacnk整理値、全設定共通）。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED_DEDICATED_BEHAVIOR_EXISTS**。K-Naviは本機に「設定変更後の挙動」および「状態移行率(設定変更時)」の専用解析項目が存在することを確認できる。パチマガスロマガにも「朝イチ・設定変更」専用項目が存在する。ただし検索キャッシュから個別本文/数値を取得できず、設定変更時の天井G数・ART/CZストック・状態の具体処理は推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間1200G天井進捗、内部状態、ART/CZ関連状態の具体的引継ぎを本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井G数、内部状態、液晶/リール表示の扱いを本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井がボーナス間1200Gであることは確定したが、設定変更時にその進捗をCLEAR/RETAINするかは取得できた公開本文では確定不能。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH / BASE_CEILING_1200G**。設定変更専用の短縮天井数値は確認できず。通常天井はボーナス間1200G。

modeAfterReset: **DEDICATED_SETTING_CHANGE_STATE_TRANSITION_PAGE_CONFIRMED / VALUES_UNVERIFIED**。K-Naviに設定変更時状態移行率の専用解析項目があること自体は確認。ただし具体振り分けは未取得のため数値を推定しない。

stateAfterReset: **PARTIAL_UNVERIFIED_VALUES**。設定変更時に状態抽選が存在することを示す専用解析項目は確認できるが、低確/高確等の具体振り分け値は取得不能。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**。専用状態移行解析の存在は確認したが、朝一客行動へ使える具体的な優遇率/短縮天井数値は今回の取得可能本文から確定できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等の不利を直接確定できる資料本文を取得できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名表記揺れ・ニューギン・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/天井を組み替えて検索したが、本機固有のガックン・初期出目・表示による変更判別を確定できず。

numericResetData:
- normalCeiling: **1200G after bonus**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH (dedicated setting-change state-transition analysis exists)**
- advantageousSection: **NOT_APPLICABLE**
- resetDetectionNumeric: **NONE_CONFIRMED**

resetBehaviorQA: **RESEARCHED_PARTIAL_DIRECT_RESET_ANALYSIS_INDEX_FOUND_VALUES_INACCESSIBLE**

## conflicts

- K-Navi機種概要の「極モードは1ゲーム毎の期待値約2.4枚」という表現と、P-WORLD/パチビー/当時業界記事のART純増約1.2枚/Gは定義が同一とは確認できない。平均せず、純増主値は約1.2枚/G、2.4枚はK-Navi上の「期待値」表現として分離保持。
- 導入関連はグリーンべると2011-01-30納品開始予定に対し、K-Navi/パチビー2011-01-31ホール導入開始。定義差として両方保持し主値はホール導入日の2011-01-31。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- setting-change ceiling counter clear/retain: **UNVERIFIED_AFTER_RESEARCH**
- exact reset state distribution: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. K-Navi — サムライチャンプルー極
   - https://p-kn.com/slot/1341/
   - 2011-01-31ホール導入開始、50G斬モード、極モード、戦モード、設定変更後の挙動/設定変更時状態移行率の専用解析項目存在を確認。
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/a.php
   - BIG約214枚、REG約48枚、ART構造を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

3. パチマガスロマガ — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/h.php
   - 設定別BIG/REG/合算、機械割96.2〜119.1%を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

4. パチマガスロマガ — 小役/1000円G数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/c.php
   - 設定別1000円あたり32.24〜32.43Gを確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

5. パチマガスロマガ — 機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/newgin_slot_17.php
   - 「天井」「朝イチ・設定変更」専用項目存在を確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

6. P-WORLD — サムライチャンプルー極
   - https://www.p-world.co.jp/machine/database/6199
   - A+ART、BIG約214枚/REG約48枚、斬モード50G+α・約1.2枚/G、設定別ART初当たりを確認。
   - confidence: INDUSTRY_DATABASE

7. パチビー — サムライチャンプルー極
   - https://www.pachibee.jp/machines/lecture/210120009
   - 導入日2011-01-31、5号機ART/CZ/天井あり、約1.2枚/Gを確認。
   - confidence: ANALYSIS_HIGH

8. pacnk — サムライチャンプルー極 設定判別ツール
   - https://pacnk.com/slot/tools/sh_samuraichamploo.html
   - 機械割/ボーナス/ART初当たりを照合。ボーナス間1200G天井、天井時ストック1個92%/2個8%を確認。
   - confidence: ANALYSIS_SINGLE_CROSSCHECKED

9. グリーンべると — ニューギン、『座頭市物語2』など2機種発表
   - https://web-greenbelt.jp/00006687/
   - 2010-12-17記事、サムライチャンプルー極は2011-01-30納品開始予定を確認。
   - confidence: INDUSTRY_CONTEMPORARY

10. 5号機クロニクル — ニューギン＆エキサイト
    - https://5goki.com/newgin-excite
    - 2011年1月導入、設定別ボーナス確率をクロスチェック。
    - confidence: SECONDARY_CROSSCHECK
