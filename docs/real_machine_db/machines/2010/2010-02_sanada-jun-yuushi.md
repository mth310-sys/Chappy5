# 真田純勇士

machineName: 真田純勇士
manufacturer: ニューギン
formalModelName: 真田純勇士V（中古実機流通表記で確認。公式型式名としては未確定）
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: CONFLICT（P-WORLD / 5号機クロニクル: 2010-02、当時グリーンべると: 2010-03-07納品開始予定）
generation: 5号機
systemType: ノーマル主体 + RT / 天井RT
coreStatus: COMPLETE_CORE_RELEASE_DATE_CONFLICT_RESET_PARTIAL

## chronologyNote

- 最新mainの recordCount 457 / chronologicalFrontier 2010-02-21 を確認し、2/22へ進む前の2010年2月月内漏れ監査を継続。
- `真田純勇士` をrepo検索し、既存レコードなしを確認。
- P-WORLD 2010年2月新台スケジュールと5号機クロニクルは本機を **2010年2月** として収録。
- 一方、2010年1月21日公開の当時グリーンべるとは、1月19日のニューギンプレス発表会を報じ、本機とCR花の慶次〜愛について **「納品は両機とも3月7日からスタートする予定」** と記録。
- 月次DB上の2010-02と当時一次寄り業界記事の2010-03-07予定が競合するため、日付を平均・推定せず `CONFLICT_DATE_SOURCE_DEFINITION_OR_SCHEDULE` として双方を保存する。
- 2010年2月候補の遡及漏れ修復として458件目に追加するが、chronologicalFrontierは **2010-02-21** を維持する。

## payoutRateBySetting

- 設定1: **96.8%**
- 設定2: **98.8%**
- 設定3: **100.9%**
- 設定4: **104.3%**
- 設定5: **106.7%**
- 設定6: **110.0%**

5号機クロニクルの設定別系列。P-WORLD 2010年2月新台スケジュール掲載レンジ **96.8%〜110.0%** と端点一致。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_RANGE_CORROBORATED

## initialHitBySetting

### BIG合成
- 設定1: **1/297.9**
- 設定2: **1/284.9**
- 設定3: **1/273.1**
- 設定4: **1/257.0**
- 設定5: **1/247.3**
- 設定6: **1/232.4**

### REG
- 設定1: **1/452.0**
- 設定2: **1/436.9**
- 設定3: **1/422.8**
- 設定4: **1/385.5**
- 設定5: **1/364.1**
- 設定6: **1/341.3**

### ボーナス合算
- 設定1: **1/179.6**
- 設定2: **1/172.5**
- 設定3: **1/165.9**
- 設定4: **1/154.2**
- 設定5: **1/147.3**
- 設定6: **1/138.3**

当時グリーンべるとも合算端点 **1/179.6（設定1）〜1/138.3（設定6）** を明記しており、5号機クロニクル系列と照合できる。

confidence: ANALYSIS_HIGH / INDUSTRY_ENDPOINT_CORROBORATED

## baseGamesPer50

パチマガスロマガ旧解析の1000円あたりゲーム数:

- 設定1: **35.19G**
- 設定2: **35.55G**
- 設定3: **36.05G**
- 設定4: **36.69G**
- 設定5: **37.28G**
- 設定6: **37.83G**

小役確率からの逆算ではなく、本機専用解析ページの直接公開値。

confidence: ANALYSIS_HIGH

## netIncrease

- RT「十勇士の刻」: **約+0.1枚/G**
- P-WORLD機種属性では **約+0.12枚/G** とより細かい表記もあるため、物差し上は定義差/丸め差として `約+0.1枚/G（P-WORLD詳細属性 約+0.12枚/G）` を保持。
- RTは次回ボーナス成立まで継続。

confidence: ANALYSIS_HIGH / MINOR_ROUNDING_DEFINITION_DIFFERENCE

## basicPayout

- S・BIG: **約308枚**（規定払い出し345枚）
- BIG: **約308枚**（規定払い出し345枚）
- REG: **約104枚**（規定払い出し105枚）

パチマガスロマガ旧解析とP-WORLDで約308枚 / 約104枚を照合。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## modeSpecificMinimumData

- 基本はボーナスで出玉を増やすノーマル主体機。
- S・BIG終了後は即RT「十勇士の刻」へ入り、次回ボーナスまで継続。
- 通常BIG後 **999G** 消化で天井RTへ突入。
- REG後 **666G** 消化で天井RTへ突入。
- P-WORLDも白7BIG後 / BIG後999G / REG後666Gで次回ボーナスまで続くRT突入を記録。
- 当時グリーンべるともSBB、BB後999G救済RT、RB後666G救済RTの3構成を報道。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED — CEILING_COUNTER_CARRIES_OVER_ON_SETTING_CHANGE**。パチマガスロマガ旧解析に「BIG後999G、REG後666Gの天井までのゲーム数は設定変更後も引き継ぐため、宵越し狙いが可能」と明記。設定変更で天井進捗が0Gへ戻る機種ではない。その他の非公開内部状態については推測しない。

carryOverBehavior: **CONFIRMED_FOR_CEILING_PROGRESS**。旧解析が宵越し狙い可能と明記。BIG後999G / REG後666Gの天井進捗は前日から継続可能。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。`電源OFF ON / 電源入切 / 電断 / 復帰 / 朝一`と機種名・型式流通名を組み替えたが、単純電源OFF→ONのみの場合を設定変更と明確に区別する本機固有資料を確定できず。天井カウンタの扱いを一般論で補完しない。

gameCounterReset: **NOT_RESET_BY_SETTING_CHANGE_FOR_CONFIRMED_CEILING_COUNTER**。BIG後999G / REG後666Gの天井ゲーム数進捗は設定変更後も引継ぎ。

ceilingAfterReset: **NO_RESET_SHORTENING_CONFIRMED / EXISTING_PROGRESS_CARRIES**。設定変更専用の短縮天井ではなく、既存の天井進捗自体が引き継がれることを確認。通常天井はBIG後999G / REG後666G。

modeAfterReset: **NOT_APPLICABLE_FOR_CONFIRMED_LONG_TERM_MODE / OTHER_INTERNAL_MODE_UNVERIFIED**。物差し上重要なゲーム数解除モードや朝一専用モードは確認できず。

stateAfterReset: **UNVERIFIED_FOR_SETTING_CHANGE**。なお、パチマガスロマガには **RAMクリア時は全状態をクリアしRT状態からスタート**との別条件情報がある。RAMクリアと通常の設定変更を同一視しない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **CEILING_PROGRESS_PRESERVED_ACROSS_SETTING_CHANGE**。前日ハマリを設定変更しても天井までのゲーム数が引き継がれるため、客側の宵越し狙いが成立し得る。設定変更専用の追加恩恵率・朝一専用高確等は `NONE_CONFIRMED_AFTER_RESEARCH`。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消滅は確認されず、その他の不利要素も高信頼資料で確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / リール / 液晶 / ランプ / 設定変更判別 / 据え置き判別`まで検索語を広げたが、本機固有の高信頼な変更判別要素を確定できず。

numericResetData:
  confirmedCeilingAfterBIG: **999G**
  confirmedCeilingAfterREG: **666G**
  settingChangeCeilingProgress: **CARRY_OVER**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  ramClearBehavior: **ALL_STATE_CLEAR_AND_START_IN_RT**（通常設定変更とは別条件）

resetBehaviorQA: PARTIAL_CONFIRMED_CEILING_CARRYOVER_OTHER_FIELDS_RESEARCHED

## conflicts

- **releaseDate:** `CONFLICT_DATE_SOURCE_DEFINITION_OR_SCHEDULE`。
  - P-WORLD 2010年2月新台スケジュール: 2010-02群へ掲載。
  - 5号機クロニクル: 導入時期 2010/2。
  - グリーンべると 2010-01-21記事: 2010-03-07から納品開始予定。
  - 月間DBの分類基準・予定変更・納品/導入定義差の可能性はあるが、根拠なく解消しない。
- **RT純増表現:** 約+0.1枚/G と P-WORLD属性の約+0.12枚/G。実質的な丸め/表示精度差候補として双方を保持し、平均しない。
- **formalModelName:** 中古実機流通で `真田純勇士V` 表記を複数確認したが、今回メーカー公式または検定資料で正式型式として確定できず、公式型式扱いには昇格しない。

## missingFields

- official formal model/type name: UNVERIFIED_AFTER_RESEARCH（流通表記 `真田純勇士V` は確認）
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- single nationwide release/installation date: CONFLICT
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- non-ceiling settingChange state/mode behavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode distribution / morning hit rate / benefit rate: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「『慶次』シリーズ待望の第3弾が遂に見参」 — https://web-greenbelt.jp/00002499/ — 2010-01-19発表会、真田純勇士の合算端点、SBB / BB999G / RB666G救済RT、2010-03-07納品開始予定 — reliability: INDUSTRY
2. P-WORLD 2010年2月新台スケジュール — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2010-02 — 2010-02群への掲載、機械割レンジ96.8〜110.0% — reliability: INDUSTRY_DATABASE
3. P-WORLD「真田純勇士」 — https://www.p-world.co.jp/machine/database/5843 — ニューギン、5号機ノーマル+天井RT、BIG約308枚 / REG約104枚、RT約+0.1枚/G（属性約+0.12枚/G）、BIG後999G / REG後666G — reliability: INDUSTRY_DATABASE
4. 5号機クロニクル「ニューギン＆エキサイト」 — https://5goki.com/newgin-excite — 導入2010/2、設定別BIG合成 / REG / 合成、機械割96.8〜110.0% — reliability: RETROSPECTIVE_DATABASE / ANALYSIS_HIGH
5. パチマガスロマガ「真田純勇士 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/13/a.php — S・BIG/BIG約308枚、REG約104枚、S・BIG後RT、BIG999G / REG666G天井、**設定変更後も天井ゲーム数引継ぎ・宵越し可能**、RAMクリア時の状態 — reliability: ANALYSIS_HIGH
6. パチマガスロマガ「真田純勇士 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/13/c.php — 1000円あたり35.19 / 35.55 / 36.05 / 36.69 / 37.28 / 37.83G — reliability: ANALYSIS_HIGH
7. パチマガスロマガ「真田純勇士 機種索引」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/13/newgin_slot_13.php — 設定変更時・RT・攻め時等の当時解析項目存在確認 — reliability: ANALYSIS_HIGH
8. スロ安サーチ / 中古実機流通「真田純勇士V」 — https://slot-price.com/slot_price_details/id/317 — 流通型式表記 `真田純勇士V` の補助確認。公式型式確定根拠には使用せず — reliability: RETROSPECTIVE_RETAIL_LOW_FOR_FORMAL_MODEL

## retrievalDate

2026-09-03
