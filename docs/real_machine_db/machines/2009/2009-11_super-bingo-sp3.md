# スーパービンゴSP3

machineName: スーパービンゴSP3
manufacturer: ベルコ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-11（ベルコ公式。具体ホール導入日は今回確定できず）
generation: 5号機
systemType: ART / CZ・特殊リプレイ契機 / 差枚数管理ART
coreStatus: COMPLETE_CORE_WITH_MONTH_LEVEL_RELEASE_DATE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainの `LATEST_HANDOFF.md` 432件地点から継続。
- chronologicalFrontier は 2009-11-23 / 剣豪。11/17〜11/23をPachiBee、P-WORLD、当時業界記事、メーカー別資料で再監査し、新たに具体日が確定する未登録パチスロは今回確認できなかった。
- 月次漏れ監査で、ベルコ公式が2009年11月登場とする `スーパービンゴSP3` がGitHub mainに未登録であることを確認したため433件目として補完。
- 2009/11/29時点のK-Navi掲示板に実戦報告が存在するため11月中のホール稼働自体は整合するが、掲示板投稿日を導入日へ流用しない。

## payoutRateBySetting

旧パチマガスロマガ シミュレートPAYOUT:
- 設定1: 95.73%
- 設定2: 98.89%
- 設定3: 101.24%
- 設定4: 103.24%
- 設定5: 104.99%
- 設定6: 105.27%

5号機クロニクル掲載値:
- 設定1: 95.0%
- 設定2: 98.0%
- 設定3: 100.0%
- 設定4: 102.0%
- 設定5: 104.0%
- 設定6: 104.5%

**CONFLICT**。定義/算出条件差を確定できないため平均しない。

confidence: CONFLICT_ANALYSIS_SINGLE_VS_RETROSPECTIVE_DATABASE

## initialHitBySetting

### BIG
- 設定1: 1/8192.00
- 設定2: 1/5461.33
- 設定3: 1/5461.33
- 設定4: 1/5461.33
- 設定5: 1/5461.33
- 設定6: 1/4096.00

旧パチマガスロマガ本機専用解析から取得。

### ART初当たり / BC初当たり

**UNVERIFIED_AFTER_RESEARCH**

- 本機はBIG後または赤7スペシャルリプレイ入賞後にART「ビンゴチャンス」へ突入する。
- 通常時のART/BC初当たりを設定別の比較可能な一系列として公開した資料は今回確定できず、BIG確率やART中の抽選から逆算しない。

confidence: ANALYSIS_SINGLE_DIRECT_FOR_BIG / UNVERIFIED_FOR_ART_INITIAL

## baseGamesPer50

旧パチマガスロマガの1000円あたりゲーム数:
- 設定1: 23.97G
- 設定2: 23.98G
- 設定3: 23.98G
- 設定4: 23.98G
- 設定5: 23.98G
- 設定6: 23.98G

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

ART「ビンゴチャンス」: **約+2.0枚/G**

- ベルコ公式は5号機ART機であることを確認。
- P-WORLD、旧パチマガスロマガともに約2枚/G。

confidence: ANALYSIS_HIGH + DATABASE_CROSSCHECK

## basicPayout

- BIG: 約150枚（224枚払い出し）
- BC / ビンゴチャンス: 最低100枚。500枚、1000枚以上へ拡張し得る差枚数管理型。
- P-WORLDはBIG約150枚、BC 100枚以上。旧パチマガはBIG約150枚、ART1回100枚/500枚/1000枚…と掲載。

confidence: ANALYSIS_HIGH + DATABASE_CROSSCHECK

## modeSpecificMinimumData

- ART「ビンゴチャンス」は押し順ART、差枚数管理。
- BIG後または赤7スペシャルリプレイ入賞後にARTへ。
- ARTは1回100枚が最低ライン。`フゥアフゥア!` 発生時は500枚以上の規定枚数が選ばれる。
- BIG当選時は旧パチマガでART2回以上確定、P-WORLDでもBIG後は必ずBC突入かつ赤7揃い1回が約束されると説明。
- 通常ゲーム数による明確な天井は今回確認できなかった。検索上の「天井」は後継機や別シリーズ混入が多く、本機固有数値を確定できない。

confidence: ANALYSIS_HIGH_FOR_ART_STRUCTURE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`スーパービンゴSP3 / ベルコ / 設定変更 / 設変 / リセット / 朝一 / 攻め時・ヤメ時・設定変更時` を組み替え、ベルコ公式、P-WORLD、旧パチマガスロマガ、K-Navi、回顧DBを横断。旧パチマガ本機トップに「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが、具体本文を取得できず、設定変更時のART抽選状態・周期/吸い込み進捗等は断定しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にART関連内部状態や抽選進捗がどう保持されるかの本機固有直接資料を確定できない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のART内部状態、セグ/リール表示、抽選進捗の復帰挙動を直接確認できない。

gameCounterReset: **NOT_APPLICABLE_NO_CONFIRMED_GAME_COUNT_CEILING**。本機固有の通常ゲーム数天井を確認できないため、天井ゲーム数カウンタのリセット/引継ぎ項目は該当なしとして扱う。ただしART内部の別種進捗を「不存在」と断定するものではない。

ceilingAfterReset: **NOT_APPLICABLE_NO_CONFIRMED_GAME_COUNT_CEILING**。リセット短縮天井の公開数値は確認できない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH / NONE_PUBLISHED_RESET_MODE_DISTRIBUTION_CONFIRMED**。設定変更専用・朝一専用モード振分の公開値を確認できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART/CZ相当内部状態の設定変更・据え置き・電断時処理を本機固有資料で確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみのART優遇、初当たり優遇、短縮天井等の公開根拠を確認できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時専用の主要不利要素を確認できない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / セグ / リール / ランプ / 朝一挙動 / 変更判別` を追加して再探索したが、本機固有の変更判別要素を確定できない。

numericResetData:
  normalGameCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

resetBehaviorResearchNote:
- `スーパービンゴSP3 / スーパービンゴSP / ベルコ / 5号機` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 初期出目 / セグ / 変更判別` を組み替えた。
- ベルコ公式、P-WORLD、旧パチマガスロマガ、K-Navi、5号機クロニクル、シリーズ回顧を横断。
- 旧パチマガ本機トップに設定変更系ページの存在は確認したが、具体内容を取得できないため一般論で補完しない。
- 5号機後年のスーパービンゴNEO等のリセット解析は別機種のため流用しない。

## conflicts

1. 設定別機械割
   - 旧パチマガシミュレート: 95.73 / 98.89 / 101.24 / 103.24 / 104.99 / 105.27%
   - 5号機クロニクル: 95.0 / 98.0 / 100.0 / 102.0 / 104.0 / 104.5%
   - 平均せず両系列を保持。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- exactHallIntroductionDate: UNVERIFIED_AFTER_RESEARCH（公式は2009年11月まで）
- ART/BC initial probability by setting: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- public reset-specific numeric values: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. ベルコ公式「スーパービンゴSP3」 — https://www.s-bellco.co.jp/products/slot/superbingo_sp/ — 2009年11月登場、5号機ART機を確認 — reliability: OFFICIAL
2. ベルコ公式「会社情報 / スーパービンゴシリーズ」 — https://www.s-bellco.co.jp/company/ — スーパービンゴSP3が2009年シリーズ機であることを確認 — reliability: OFFICIAL
3. P-WORLD「スーパービンゴSP3」 — https://www.p-world.co.jp/machine/database/5706 — 5号機ART、純増約2枚/G、BIG約150枚、BC100枚以上、差枚数管理ART、BIG後ART構造を確認 — reliability: RELIABLE_DATABASE
4. 旧パチマガスロマガ「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/a.php — ART純増約2枚/G、差枚数管理、BIG約150枚、BIG後ART2回以上を確認 — reliability: ANALYSIS_SINGLE_DIRECT
5. 旧パチマガスロマガ「ボーナス抽選確率 / PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/h.php — 設定別BIG確率、シミュレートPAYOUTを確認 — reliability: ANALYSIS_SINGLE_DIRECT
6. 旧パチマガスロマガ「1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/c.php — 設定別23.97〜23.98Gを確認 — reliability: ANALYSIS_SINGLE_DIRECT
7. 旧パチマガスロマガ「機種トップ」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/belco_slot_84.php — 「攻め時・ヤメ時・設定変更時」専用項目の存在を確認 — reliability: ANALYSIS_INDEX_ONLY_FOR_RESET
8. 5号機クロニクル「ベルコ」 — https://5goki.com/bellco — 2009/11、機械割95.0〜104.5%を確認 — reliability: RETROSPECTIVE_DATABASE
9. K-Navi「スーパービンゴSP3掲示板」 — https://p-kn.com/community/bbs/slot/1053/30724/ — 2009-11-29時点で実戦報告が存在。導入日の直接根拠には使用しない — reliability: CONTEMPORARY_USER_REPORT_CHRONOLOGY_ONLY

## recordMeta

recordNumber: 433
addedDate: 2026-09-03
schema: resetBehavior v0.7
researchStatus: CORE_COLLECTED_RESET_PARTIAL_AFTER_RESEARCH
