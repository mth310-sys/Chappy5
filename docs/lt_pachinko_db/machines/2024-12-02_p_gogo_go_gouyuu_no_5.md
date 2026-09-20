# P GO!GO!郷 豪遊の5

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P GO!GO!郷 豪遊の5
formalModel: P GO！GO！郷～豪遊の5～N-VYLT
manufacturer: ニューギン
releaseDate: 2024-12-02
modelType: 甘デジ / 約1/99.9
gameType: 一種二種混合 / 転落型RUSH / LT / 遊タイム（b時短）

jackpotProbability:
- 通常時: 約1/99.9
- RUSH中: 約1/32.9

initialPayout:
- 5R: 約250個（払出）
- 特図1: 5R + HYPER GO!GO! RUSH 51% / 5R + 通常 49%

rushEntryRate: 51%
rushContinuationRate:
- HYPER GO!GO! RUSH: 約70% TOTAL
- 内訳定義: RUSH単体約67% + 残保留4個の引き戻し込み約70%

ltName: LUCKY GO!GO! RUSH
ltEntryRoute:
- 低確率状態を299回転消化して遊タイム発動 → LTへ直接突入
- HYPER GO!GO! RUSH中の10R大当りの一部 → LT
- 特図2・下位RUSH中のLT移行振り分け: 10R-A 約0.3%
ltEntryRate:
- 通常初当り基準の総LT到達率: 直接公表された固定値を確認できず。遊タイム経路を含むため逆算しない
- 下位RUSH中大当り振り分け: 約0.3%でLT
ltContinuationRate:
- LUCKY GO!GO! RUSH: 約92.3% TOTAL
- 内訳定義: LT単体約91.4% + 残保留4個の引き戻し込み約92.3%

ltPayoutStructure:
- 10R 約840個 + LT継続: 約67.0%
- 2R 約100個 + LT継続: 約24.4%
- 2R 約100個 + 引き戻しゾーン: 約8.6%
- 出玉は払出表記。10R約840個はその他入賞込み

totalPayoutDistribution:
- 特図1: 5R-A 約250個 + HYPER GO!GO! RUSH 51% / 5R-B 約250個 + 通常 49%
- 特図2 HYPER GO!GO! RUSH中: 10R-A 約840個 + LT 約0.3% / 10R-B 約840個 + 下位RUSH 約66.7% / 2R 約100個 + 引き戻しゾーン 約33.0%
- 特図2 LT中: 10R 約840個 + LT 約67.0% / 2R-A 約100個 + LT 約24.4% / 2R-B 約100個 + 引き戻しゾーン 約8.6%

timeShortening:
- HYPER GO!GO! RUSH / LUCKY GO!GO! RUSH: 実質次回まで（転落当りまで）
- 転落後: 残保留4個の引き戻しゾーン

cTimeOrSpecialSystems:
- 遊タイム: 低確率状態299回転消化でLT「LUCKY GO!GO! RUSH」へ直接突入
- Cタイム: 確認なし

ceilingOrSupport:
- 遊タイムあり。通常時299回転消化が発動条件

gameFlow: |
  通常時（約1/99.9）
   ├─ 初当り51% → HYPER GO!GO! RUSH
   │                 ├─ 継続大当り
   │                 ├─ 10Rの一部（特図2約0.3%）→ LUCKY GO!GO! RUSH（LT）
   │                 └─ 転落 → 残保留4個 → 引き戻せばRUSH復帰
   ├─ 初当り49% → 通常
   └─ 低確率299回転到達 → 遊タイム → LUCKY GO!GO! RUSH（LT）
  LT → 転落まで継続 → 残保留4個 → 引き戻せばLT復帰

notes:
- 業界一次報道は「遊タイム到達でLTへ直接突入」を業界初の特徴として明記。
- HYPER GO!GO! RUSH約70%とLT約92.3%はいずれも残保留引き戻し込みTOTAL値。単体約67% / 約91.4%と混同しない。
- 10R比率約67%はLT中の大当り振り分け。下位RUSHでは10R合計約67%だが、そのうちLT移行は約0.3%。
- 2024-05-07導入の「P GO!GO!郷 革命の5」とは別スペック。混同禁止。

sources:
- https://www.yugitsushin.jp/news/%E6%A5%AD%E7%95%8C%E5%88%9D%EF%BC%81%E9%81%8A%E3%82%BF%E3%82%A4%E3%83%A0%E5%88%B0%E9%81%94%E3%81%A7lt%E7%AA%81%E5%85%A5%EF%BC%81%EF%BC%81%E3%80%8Cpgo%EF%BC%81go%EF%BC%81%E9%83%B7-%E8%B1%AA%E9%81%8A/
  - retrievedAt: 2026-09-21
  - class: INDUSTRY
  - supports: formalModel, manufacturer, normal/right probability, gameType, RUSH entry/continuation, LT name/continuation,遊タイムLT直行, release
- https://news.p-world.co.jp/articles/29648/greenbelt
  - retrievedAt: 2026-09-21
  - class: INDUSTRY
  - supports: release,遊タイム299, RUSH51%, lower approx70%, LT approx92.3%, LT 10R approx67%, residual4
- https://www.p-world.co.jp/machine/database/10172
  - retrievedAt: 2026-09-21
  - class: ANALYSIS_HIGH
  - supports: full allocation, payout definitions, residual4, continuation denominator definitions, game flow
- https://1geki.jp/pachinko/p_go3_gouyuuno5/
  - retrievedAt: 2026-09-21
  - class: ANALYSIS_HIGH
  - supports: formalModel, release, type, core structure

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当りを分母とする総LT到達率の直接公表固定値は未確認。遊タイム経路を含むため推測しない
conflicts: []

qa:
- LT搭載: CONFIRMED
- duplicate: NONE; 革命の5とは別スペック
- rushVsLtProbability: SEPARATED
- payoutVsAcquired: SEPARATED_AS_PAYOUT
- residualFourIncludedRates: DEFINITION_SEPARATED
- sourceCrossCheck: PASS
