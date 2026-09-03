# 青ドン～花火の匠～

machineName: 青ドン～花火の匠～
manufacturer: エレコ / ユニバーサルエンターテインメント
formalModelName: アオドンハナビノタクミX
approvalNumber: 9S1022
releaseDate: 2010-03-08（ホール導入。納品開始は2010-03-07）
generation: 5号機
systemType: ノーマルAタイプ / ボーナス主体 + 救済天井RT
coreStatus: COMPLETE_CORE_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、旧INDEX、LATEST_HANDOFF、直前レコード「パチスロポパイブリッド」を再取得してから継続。
- LATEST_HANDOFF正本はrecordCount 462 / chronologicalFrontier 2010-03-08。2010-03-08同日群の未登録候補として本機をrepo検索し未登録を確認。
- ALL7/K-Naviは2010-03-08導入、グリーンべるとは2010-03-07納品開始予定、HAZUSEは2010-03-07導入開始と記載。定義差を保持し、本DBの時系列主値はホール導入日の2010-03-08。
- P-WORLDページ下部には「導入開始 2009年11月」という矛盾メタデータがあるが、同ページ本文・メーカー公式2010年3月発売・当時グリーンべると・ALL7/K-Naviと整合しないため採用しない。

## payoutRateBySetting

### パチマガスロマガ旧解析・シミュレート値
- 設定1: **98.44%**
- 設定2: **99.53%**
- 設定3: **102.17%**
- 設定4: **105.37%**
- 設定5: **108.65%**
- 設定6: **113.35%**

後年5号機クロニクルの98.5 / 99.5 / 102.0 / 105.1 / 108.2 / 112.6%は設定6などで丸め差を超えるため、参考CONFLICTとして分離保持。後者は導入日・BIG枚数にも本機との混同疑いがあり、主系列には採用しない。

confidence: ANALYSIS_HIGH_PRIMARY_SERIES / CONFLICT_SECONDARY_RETROSPECTIVE

## initialHitBySetting

### BIG合算
- 設定1: **1/297.89**
- 設定2: **1/289.98**
- 設定3: **1/277.69**
- 設定4: **1/266.41**
- 設定5: **1/256.00**
- 設定6: **1/240.94**

### REG
- 設定1: **1/431.16**
- 設定2: **1/425.56**
- 設定3: **1/394.80**
- 設定4: **1/364.09**
- 設定5: **1/336.08**
- 設定6: **1/297.89**

### ボーナス合算
- 設定1: **1/176.17**
- 設定2: **1/172.46**
- 設定3: **1/163.02**
- 設定4: **1/153.84**
- 設定5: **1/145.31**
- 設定6: **1/133.20**

旧パチマガスロマガ、HAZUSE、P-WORLDで同系列を照合。メーカー公式・当時グリーンべるとも合算端点1/176〜1/133を確認。

confidence: ANALYSIS_HIGH_MULTI_SOURCE / OFFICIAL_ENDPOINT_CORROBORATION

## baseGamesPer50

- 設定1: **35.53G / 1000円（約50枚）**
- 設定2: **35.54G**
- 設定3: **35.86G**
- 設定4: **36.55G**
- 設定5: **37.27G**
- 設定6: **37.96G**

旧パチマガスロマガ直接値。当時グリーンべるとの35.5〜38.0G、P-WORLDの35.5〜38.0Gと整合。

confidence: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY_CONTEMPORARY

## netIncrease

- 通常の出玉増加はボーナス主体。
- 救済天井RTは次回ボーナスまで継続し、P-WORLDは「コインを減らすことなく」と説明。
- 天井RT純増の高信頼な本機固有直接値は今回確定できず。低信頼回顧資料には約+0.1枚/G表記があるため参考に留める。

confidence: ANALYSIS_HIGH_FOR_RT_FUNCTION / UNVERIFIED_PRECISE_NET

## basicPayout

- BIG: **約320枚**（最大336枚、345枚超払い出しで終了）
- REG: **約104枚**（105枚超払い出しで終了）

メーカー公式はBIG MAX336枚、当時グリーンべると・K-Navi・P-WORLD・旧パチマガで整合。

confidence: OFFICIAL / INDUSTRY_CONTEMPORARY / ANALYSIS_HIGH

## modeSpecificMinimumData

- ボーナス主体のノーマルタイプで、通常出玉をAT/ARTで増やす機種ではない。
- 救済天井RT搭載。
- **BIG後1000G**または**REG後800G**消化で天井RTへ突入し、次回ボーナス成立まで継続。
- K-Naviは本機を「天井」「宵越アリ」と分類。
- 通常時の演出はドンちゃんモード/クラシックモードを選択可能。これは遊技演出選択であり、朝一内部モードとは扱わない。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED_LOW_CONFIDENCE**。高信頼当時解析の検索結果では「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を直接回収できず。K-Naviは「宵越アリ」と明示。後年回顧Wikiには「回転数は設定変更後も引き継ぎ」と明記されるが、単独で高信頼断定はしない。

carryOverBehavior: **PARTIAL_CONFIRMED**。K-Naviが本機を明示的に「宵越アリ」と分類しており、朝一の天井狙いで前日ゲーム数を利用できる挙動が存在したことは確認。どの条件（据え置きのみ/設定変更を含む）まで含むかは高信頼本文未回収のため分離。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみと設定変更を分離した本機固有資料を確定できず。

gameCounterReset: **PARTIAL_CONFIRMED_CARRYOVER**。BIG後1000G/REG後800Gの天井ゲーム数が朝一宵越し可能であることはK-Naviで確認。設定変更後も引継ぐとの情報は低信頼回顧資料では確認できるが、旧解析本文を直接回収できないため `SETTING_CHANGE_DETAIL_LOW_CONFIDENCE` として保持。

ceilingAfterReset: **NO_RESET_SHORTENING_CONFIRMED**。通常天井はBIG後1000G / REG後800G。設定変更専用の短縮天井・別天井値は検索語と資料系統を変えても確認できず。

modeAfterReset: **NOT_APPLICABLE_OR_NONE_CONFIRMED**。朝一専用の内部モード振り分けは確認なし。ドンちゃん/クラシックの演出モード選択は本項の内部モードではない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。天井RT中やRT突入直前の状態を設定変更/電断時にどう処理するか、本機固有の高信頼本文を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **PARTIAL_CONFIRMED_CARRYOVER_VALUE**。朝一に前日ゲーム数を利用した天井狙いが成立する「宵越アリ」分類を確認。設定変更専用の追加恩恵は確認なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`青ドン 花火の匠 / アオドンハナビノタクミX / エレコ` と `設定変更 / リセット / 朝一 / 据え置き / 宵越し / ガックン / 初期出目 / リール / 液晶 / ランプ` を組み替えて探索したが、本機固有の高信頼な変更判別方法を確定できず。

numericResetData:
  normalCeilingAfterBIG: **1000G**
  normalCeilingAfterREG: **800G**
  carryOverMorning: **SUPPORTED_BY_KNAVI_CLASSIFICATION**
  settingChangeCounterBehavior: **LOW_CONFIDENCE_SOURCE_SAYS_CARRY_OVER / HIGH_CONFIDENCE_DIRECT_TEXT_UNVERIFIED**
  resetShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: RESEARCHED_PARTIAL_CARRYOVER_CONFIRMED_SETTING_CHANGE_DETAIL_LOW_CONFIDENCE

## conflicts

- **導入表記**: ALL7/K-Navi 2010-03-08ホール導入 vs グリーンべると2010-03-07納品開始予定 / HAZUSE 2010-03-07導入開始。P-WORLD末尾には2009年11月という孤立メタデータがあるが、メーカー公式2010年3月発売・当時資料と矛盾。
- **機械割**: 旧パチマガシミュレート98.44〜113.35% vs 後年5号機クロニクル98.5〜112.6%。後者は同ページの導入月・BIG枚数にも混同疑いがあるため主値に採用しない。
- **設定変更時天井カウンタ**: K-Naviは「宵越アリ」、後年低信頼Wikiは「設定変更後も引き継ぎ」と明記。一方、高信頼旧解析の設定変更専用本文は検索インデックス上の存在確認に留まり直接回収できず。よって完全確定に格上げしない。

## missingFields

- precise ceiling RT net increase: UNVERIFIED_HIGH_CONFIDENCE_DIRECT_VALUE
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- high-confidence direct setting-change text for ceiling counter: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset for active/pending ceiling RT: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning distributions/rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. ユニバーサルエンターテインメント公式「青ドン 花火の匠」 — https://www.universal-777.com/product/slot/aodon_takumi/ — 2010年3月発売、エレコ、5号機、ボーナス+RT、合算1/176〜1/133、BIG MAX336枚 — reliability: OFFICIAL
2. グリーンべると「当たりやすくなった青ドン最新機を発表」 — https://web-greenbelt.jp/00002535/ — 2010-02-19当時業界記事、合算端点、BIG最大336枚/REG約104枚、35.5〜38.0G/1000円、3月7日納品開始予定 — reliability: INDUSTRY_CONTEMPORARY
3. ALL7.jp 2010年3月導入一覧 — https://www.all7.jp/plans/index/2010/03/10 — 2010-03-08導入予定、エレコ — reliability: CONTEMPORARY_SCHEDULE_DB
4. HAZUSE 基本スペック — https://hazuse.com/machine/pachislot/SX0029/genre/201/ — 型式アオドンハナビノタクミX、検定番号9S1022、2010-03-07導入開始 — reliability: ANALYSIS_DB
5. K-Navi 機種ページ — https://p-kn.com/slot/1172/ — 2010-03-08ホール導入、合算、BIG/REG、天井・宵越アリ分類 — reliability: ANALYSIS_HIGH
6. P-WORLD 機種DB — https://www.p-world.co.jp/machine/database/5691 — BIG後1000G/REG後800G天井RT、BIG約320枚/REG約104枚、設定別ボーナス確率、35.5〜38.0G — reliability: INDUSTRY_DATABASE
7. パチマガスロマガ旧解析「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/a.php — BIG約320枚/REG約104枚、天井RT搭載 — reliability: ANALYSIS_HIGH
8. パチマガスロマガ旧解析「ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/h.php — 設定別BIG/REG/合算、シミュレートPAYOUT98.44〜113.35% — reliability: ANALYSIS_HIGH
9. パチマガスロマガ旧解析「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/c.php — 1000円あたり35.53〜37.96G — reliability: ANALYSIS_HIGH
10. パチマガスロマガ旧解析トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/80/eleco_slot_80.php — 「天井RTについて」「攻め時・ヤメ時・設定変更時」項目存在確認 — reliability: ANALYSIS_HIGH_INDEX_ONLY
11. 5号機クロニクル ユニバーサル系一覧 — https://5goki.com/universal — 機械割98.5〜112.6%、ただし導入月/BIG枚数など本機混同疑いあり — reliability: RETROSPECTIVE_CONFLICT
12. アニヲタWiki「青ドン～花火の極～」内の匠記述混在部分 — https://w.atwiki.jp/aniwotawiki/pages/19142.html — 天井回転数は設定変更後も引継ぎとの記述。低信頼補助資料としてのみ使用 — reliability: LOW_RETROSPECTIVE_COMMUNITY
