# 不二子～100億$の女神～

machineName: 不二子～100億$の女神～
manufacturer: オリンピア
releaseDate: 2012-01-03
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: K-Navi・HAZUSE系資料は2012-01-03をホール導入日として掲載。当時業界記事は2012-01-02から納品予定としており、納品開始日とホール導入日の定義差として分離保持する。
modelName: 不二子100億$の女神Y
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
generation: 5号機
systemType: ノーマル / A+RT
recordStatus: COMPLETE_CORE

## payoutRateBySetting

主値（K-Navi / P-WORLD / 当時業界記事系）:

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 98.7% |
| 3 | 100.0% |
| 4 | 105.1% |
| 5 | 107.7% |
| 6 | 113.0% |

reliability: ANALYSIS_HIGH_WITH_PERIOD_INDUSTRY_CORROBORATION

別系統の後年シミュレーション資料では 98.0 / 99.1 / 100.3 / 104.9 / 107.5 / 112.8% と掲載される。条件差またはシミュレーション差の可能性があるため平均せずCONFLICTとして保持する。

## initialHitBySetting

| 設定 | BIG合算 | REG（SEXY BONUS） | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/331.0 | 1/504.0～1/504.1 | 1/199.8 |
| 2 | 1/331.0 | 1/496.5 | 1/198.6 |
| 3 | 1/331.0 | 1/489.1 | 1/197.4 |
| 4 | 1/318.1 | 1/481.9 | 1/191.6 |
| 5 | 1/295.2 | 1/474.9 | 1/182.0 |
| 6 | 1/258.0 | 1/455.1 | 1/164.7 |

BIGはSUPER BIGとNORMAL BIGの合算。HAZUSE系資料では内訳も掲載され、SBBは設定1～6で 1/655.36, 1/655.36, 1/655.36, 1/630.15, 1/585.14, 1/512.00、NBBは 1/668.73, 1/668.73, 1/668.73, 1/642.51, 1/595.78, 1/520.13。

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

後年解析・シミュレーション資料の直接値:

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 37.41G |
| 2 | 38.31G |
| 3 | 39.51G |
| 4 | 43.54G |
| 5 | 43.67G |
| 6 | 43.95G |

reliability: ANALYSIS_SINGLE

設定別に大きく差がある値のため、別系統で直接照合できるまでは単一解析値として扱う。

## netIncrease

- RT「SEXY TIME」: 約+0.4枚/G
- 無限RT「SUPER SEXY TIME」: 約+0.4枚/G

reliability: INDUSTRY_AND_DATABASE_CORROBORATED

## basicPayout

- SUPER BIG BONUS: 純増最大402枚
- NORMAL BIG BONUS: 純増最大259枚
- SEXY BONUS: 純増最大51枚

当時業界記事とP-WORLDで一致。後年5号機回顧DBの一部に別の概算獲得枚数表記があるため、その値は主値へ混ぜずCONFLICT扱いとする。

reliability: INDUSTRY_HIGH

## modeSpecificMinimumData

- SEXY BONUS終了後は50GのRT「SEXY TIME」へ突入。
- SEXY TIME中に特殊リプレイ成立で、次回ボーナスまで継続する「SUPER SEXY TIME」へ昇格。
- 両RTとも純増は約+0.4枚/G。
- 通常ゲーム数天井は「なし」と本機固有解析で確認。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: NORMAL_STATE_AFTER_SETTING_CHANGE_ANALYSIS_SINGLE
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING
modeAfterReset: NONE_CONFIRMED_NO_GAME_COUNT_MODE_SYSTEM
stateAfterReset: NORMAL_STATE_AFTER_SETTING_CHANGE_ANALYSIS_SINGLE
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AS_DISTINCT_MORNING_PENALTY
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 設定変更時の公開モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一特定ゲーム数以内当選率: NOT_APPLICABLE_NO_GAME_COUNT_HIT_SYSTEM_CONFIRMED
- リセット短縮天井: NOT_APPLICABLE_NO_CEILING
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

notes:
- 本機固有解析資料で「天井: なし」「設定変更: 通常状態」を直接確認。
- K-Naviの本機ページには「設定変更後の挙動」という専用解析項目が存在することも確認したが、現存キャッシュから具体本文を再取得できなかったため、取得できた「通常状態」以上の内容は補完しない。
- 据え置き時のRT/状態引継ぎ、単純電源OFF→ON時のRT/状態、ガックン・初期出目・液晶等による変更判別は、機種名・型式名・メーカー名・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/RT」を組み替えて再探索したが、本機固有の直接根拠を確定できなかった。
- 設定変更時「通常状態」という記述から、前日RTを失う等の挙動を推測で拡張しない。

resetQaReliability: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH

## sources

取得日: 2026-09-05

1. K-Navi — 不二子～100億＄の女神～
   - https://p-kn.com/slot/1535/
   - ホール導入開始2012-01-03、設定別BIG/REG/合算、設定別出玉率、機種分類を確認。
   - reliability: ANALYSIS_HIGH
2. グリーンべると — 平和、ルパンシリーズ最新作を発表（2011-11-11）
   - https://web-greenbelt.jp/00002407/
   - 2012-01-02から納品予定、Aタイプ、SBB最大402枚/NBB最大259枚/SEXY BONUS最大51枚、REG後50G RT、RT純増約0.4枚/G、主要確率・出玉率レンジを確認。
   - reliability: INDUSTRY
3. P-WORLD — 不二子～100億$の女神～
   - https://www.p-world.co.jp/machine/database/6542
   - メーカー、5号機RT、各ボーナス最大獲得枚数、50G RT/無限RT、約+0.4枚/Gを再照合。
   - reliability: DATABASE_HIGH
4. けんのスロットシミュレーション — 不二子～100億＄の女神～解析情報
   - https://kenslo65536.com/sp/kaiseki/fujiko100.html
   - 天井なし、設定変更時は通常状態、設定別50枚ベース、別条件の出玉率を確認。
   - reliability: ANALYSIS_SINGLE
5. 中一商事 — オリンピア 不二子～100億$の女神～
   - https://www.nakaiti.com/html/sOlympia004.html
   - 型式名「不二子100億$の女神Y」、ノーマルA、ボーナス払い出し終了条件を確認。
   - reliability: SECONDARY_EQUIPMENT_DATABASE
6. 2012年機種一覧（回顧資料）
   - https://www.dorubako.biz/year/2012.html
   - 2012年1月機として不二子、鉄拳2nd、サクラ大戦3 Loop ver.を独立一覧で確認。
   - reliability: RETROSPECTIVE_DATABASE

## missingFields

- 検定番号
- 据え置き時のRT/内部状態の直接挙動
- 単純電源OFF→ON時のRT/内部状態の直接挙動
- ガックン等の設定変更判別の直接根拠
- 50枚ベースの独立別ソース照合

## conflicts

1. `CONFLICT_PAYOUT_RATE_SIMULATION_OR_CONDITION_DIFFERENCE`
   - K-Navi / P-WORLD / 当時業界系の主値: 97.7 / 98.7 / 100.0 / 105.1 / 107.7 / 113.0%
   - けんのスロットシミュレーション: 98.0 / 99.1 / 100.3 / 104.9 / 107.5 / 112.8%
   - 平均せず双方を保持。
2. `CONFLICT_BASIC_PAYOUT_RETROSPECTIVE_DATABASE`
   - 当時業界記事/P-WORLD: SBB最大402枚 / NBB最大259枚 / SEXY BONUS最大51枚。
   - 後年回顧DBの一部には別の概算獲得枚数表記があるため主値へ混ぜない。
3. `DATE_DEFINITION_DIFFERENCE`
   - 当時業界記事: 2012-01-02から納品予定。
   - K-Navi等: 2012-01-03ホール導入開始。
   - 本DBの時系列キーはホール導入日の2012-01-03を採用。
