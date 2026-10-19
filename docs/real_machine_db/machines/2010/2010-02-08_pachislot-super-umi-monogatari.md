# パチスロスーパー海物語

machineName: パチスロスーパー海物語
manufacturer: 三洋物産
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-02-08
generation: 5号機
systemType: ノーマルA / ボーナス主体 / 完全告知
coreStatus: COMPLETE_CORE_WITH_BASE_AND_RESET_PARTIAL

## chronologyNote

- 最新main 447件 / chronologicalFrontier 2010-02-08「鴉-KARAS-」から同日群を継続。
- K-Naviがホール導入開始日を **2010-02-08** と明記。
- P-WORLD・旧解析DBで三洋物産の5号機ノーマルタイプとして性能系列を照合。
- repo検索で `パチスロスーパー海物語` の既存レコードなしを確認してから448件目として追加。
- 後継 `パチスロスーパー海物語IN沖縄`（2011）や2016/2022年以降の同シリーズは別機種のため数値を転用していない。

## payoutRateBySetting

### 市場掲載系列（P-WORLD / pacnk）
- 設定1: 98.0%
- 設定2: 99.1%
- 設定3: 100.2%
- 設定4: 103.2%
- 設定5: 106.4%
- 設定6: 110.0〜110.1%

### 旧パチマガスロマガ シミュレート値
- 設定1: 97.71%
- 設定2: 98.75%
- 設定3: 99.77%
- 設定4: 103.02%
- 設定5: 106.18%
- 設定6: 110.02%

定義/算出差があるため平均せず `CONFLICT_DEFINITION_SIMULATED_VS_LISTED` として双方を保持。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_WITH_DEFINITION_CONFLICT

## initialHitBySetting

### BIG
- 設定1: 1/299.25
- 設定2: 1/293.88
- 設定3: 1/288.70
- 設定4: 1/278.87
- 設定5: 1/269.69
- 設定6: 1/257.00

### REG
- 設定1: 1/392.43
- 設定2: 1/376.64
- 設定3: 1/362.07
- 設定4: 1/316.59
- 設定5: 1/283.70
- 設定6: 1/257.00

### ボーナス合算
- 設定1: 1/169.78
- 設定2: 1/165.08
- 設定3: 1/160.63
- 設定4: 1/148.27
- 設定5: 1/138.26
- 設定6: 1/128.50

旧パチマガスロマガの精密値を主値とし、P-WORLD/pacnkの丸め値（BIG 1/299→1/257、REG 1/392→1/257、合算 1/169→1/128）と整合確認。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## baseGamesPer50

- 設定1〜6: **UNVERIFIED_AFTER_RESEARCH**

`パチスロスーパー海物語 / スーパー海物語 / 三洋物産 / 50枚 / 1000円 / コイン持ち / ベース / ゲーム数`を組み替え、P-WORLD、K-Navi、pacnk、旧パチマガスロマガ、5号機回顧DBを横断したが、本機固有の比較可能な50枚G数を直接確定できなかった。小役確率からの逆算は行わない。

confidence: UNVERIFIED_AFTER_EXTENSIVE_RESEARCH

## netIncrease

- NOT_APPLICABLE（RT/ART/AT等の付加機能を搭載しないノーマルタイプ）

confidence: INDUSTRY_DATABASE_HIGH

## basicPayout

- BIG: **約336枚**（345/346枚超払い出し終了表記）
- REG: **約104枚**（105/106枚超払い出し終了表記）

P-WORLD、K-Navi、pacnkで照合。

confidence: INDUSTRY_DATABASE_HIGH / MULTI_SOURCE_CORROBORATED

## modeSpecificMinimumData

- BIG+REGのみで出玉を増やすノーマルAタイプ。
- 通常時/ボーナス中とも基本フリー打ちで遊技可能。
- 演出選択は海モード / マリンモード / マンボウモードの3種類。これはプレイヤー選択演出であり、ゲーム数解除型の内部モードとして扱わない。
- RT/ART/AT、CZ、ストック、ゲーム数解除型通常モードは確認されない。
- 本機固有のゲーム数天井は十分な再探索後も確認されず、ボーナスのみのノーマル仕様資料とも整合するため、本DBでは `NO_CEILING_CONFIRMED_AFTER_RESEARCH` とする。

confidence: INDUSTRY_DATABASE_HIGH / ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **NO_PUBLISHED_SPECIAL_RESET_BEHAVIOR_CONFIRMED_AFTER_RESEARCH**。本機はボーナスのみのノーマルAで、設定変更専用の天井・RT/ART・CZ・内部モード恩恵を確認できない。設定変更そのもの以外に朝一客行動へ影響する公開済み特殊処理は確認できず。

carryOverBehavior: **NO_PERSISTENT_GAME_COUNT_OR_MODE_RESOURCE_CONFIRMED**。引継ぎ対象となる天井ゲーム数、AT/ARTストック、CZ周期、ゲーム数モードは確認されない。演出選択状態の保持可否は実機完全再現範囲のため物差しDBでは必須対象外。

powerCycleBehavior: **NO_PUBLISHED_SPECIAL_POWER_CYCLE_BEHAVIOR_CONFIRMED_AFTER_RESEARCH**。単純電源OFF→ONのみで朝一性能が変わる高信頼情報は確認できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。ゲーム数天井/周期CZ等を確認できないため、物差し上の引継ぎ対象ゲームカウンタなし。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。設定変更専用短縮天井も確認されない。

modeAfterReset: **NOT_APPLICABLE_NO_INTERNAL_GAME_COUNT_MODE_CONFIRMED**。海/マリン/マンボウは演出選択モードであり、朝一狙いに関わる内部モードとは区別。

stateAfterReset: **NOT_APPLICABLE_NO_PERSISTENT_RT_ART_CZ_STATE_CONFIRMED**。通常時の持続性RT/ART/CZ状態を確認できない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一高確、天井短縮、RT/ART/CZ付与、当選率上昇等の設定変更専用恩恵を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。公開済みの設定変更専用不利要素を確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / パールランプ / マンボウ / 変更判別`まで検索語を拡張したが、本機固有の高信頼な変更判別手段を確定できなかった。

numericResetData:
  normalCeilingGames: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_VERIFIED_WITH_EXTENSIVE_RESEARCH

## conflicts

1. payoutRateBySetting: P-WORLD/pacnk市場掲載系列 `98.0 / 99.1 / 100.2 / 103.2 / 106.4 / 110.0〜110.1%` と、旧パチマガスロマガのシミュレート値 `97.71 / 98.75 / 99.77 / 103.02 / 106.18 / 110.02%` は算出定義が異なる可能性があるため平均せず双方を保持。
2. bonus payout termination wording: K-NaviはBIG346枚超/REG106枚超、P-WORLDはBIG345枚超/REG105枚超と表現差があるが、実獲得目安は双方BIG約336枚/REG約104枚で一致。終了条件表記差を実獲得CONFLICTにはしない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「パチスロスーパー海物語」 — https://p-kn.com/slot/1117/ — ホール導入2010-02-08、三洋物産、ノーマルタイプ/完全告知、合算、払い出し終了条件、3演出モード — reliability: ANALYSIS_DATABASE
2. P-WORLD「パチスロスーパー海物語」 — https://www.p-world.co.jp/machine/database/5783 — 三洋物産、5号機ノーマル、設定別BIG/REG/合算/機械割、BIG約336枚/REG約104枚、ボーナスのみのゲームフロー — reliability: INDUSTRY_DATABASE
3. パチマガスロマガ「パチスロスーパー海物語」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/10/h.php — 精密BIG/REG/合算、PAYOUTシミュレート値 — reliability: ANALYSIS_HIGH
4. pacnk「パチスロ スーパー海物語」 — https://pacnk.com/slot/2010/spumimonogatari/top.php — 設定別BIG/REG/PAYOUT、BIG約336枚/REG約104枚、3演出モード — reliability: ANALYSIS_DATABASE
5. 5号機クロニクル 三洋物産5号機一覧 — https://5goki.com/sanyo — 2010年導入の三洋物産5号機としてシリーズ照合 — reliability: RETROSPECTIVE_DATABASE

## evidencePolicy

- 精密ボーナス確率は旧パチマガスロマガ、丸め系列はP-WORLD/pacnkで照合。
- 機械割は算出/表示定義差を疑い、平均せずCONFLICTとして保存。
- ノーマルAで持続性の天井/モード/RT/ART/CZを確認できないため、該当しないresetBehavior項目はUNVERIFIEDではなくNOT_APPLICABLE/NO_PERSISTENT_RESOURCEとして区別。
- resetDetectionだけは本機固有の直接根拠が取れないため推測せずUNVERIFIED_AFTER_RESEARCHとした。
