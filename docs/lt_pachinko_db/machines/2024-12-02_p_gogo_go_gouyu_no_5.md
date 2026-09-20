# P GO!GO!郷～豪遊の5～

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P GO!GO!郷～豪遊の5～
manufacturer: ニューギン
formalModel: P GO！GO！郷～豪遊の5～N-VYLT
releaseDate: 2024-12-02
modelType: 甘デジ / LT搭載
gameType: 1種2種混合 / 転落抽選 / 遊タイム
jackpotProbability: 通常時 1/99.9、右打ち中実質 1/32.9
initialPayout: 5R 250個（払出）
rushEntryRate: 51%
rushContinuationRate: HYPER GO!GO! RUSH 約70%（約67%＋残保留引き戻し込み）
ltName: LUCKY GO!GO! RUSH
ltEntryRoute: (1) HYPER GO!GO! RUSH中10R大当りの一部（特図2全体0.3%） (2) 低確率299回転消化の遊タイム発動でLT直行
ltEntryRate: 下位RUSH特図2当選時0.3%。通常初当り基準の総LT到達率は、遊タイム経路を含む直接公表値を確認できないためUNVERIFIED（推測合算しない）
ltContinuationRate: 約92.3%（約91.4%＋残保留引き戻し込み）
ltPayoutStructure: LT中 特図2 = 10R 840個 67.0%（LT継続）、2R 100個 24.4%（LT継続）、2R 100個 8.6%（通常時へ。ただし残保留引き戻しあり）。840個はその他入賞込み。
totalPayoutDistribution: 通常時特図1 = 5R 250個＋RUSH 51%、5R 250個＋通常 49%。下位RUSH特図2 = 10R 840個＋LT 0.3%、10R 840個＋下位RUSH 66.7%、2R 100個＋通常 33.0%（残保留引き戻しあり）。
timeShortening: RUSH/LTは実質次回まで。転落後は残保留4回転の引き戻しモード。遊タイムは低確率299回転消化で時短10000回＝LT突入。
cTimeOrSpecialSystems: 遊タイム到達でLTへ直接突入する仕様。
ceilingOrSupport: 低確率299回転消化で遊タイム発動、LUCKY GO!GO! RUSHへ。
gameFlow: |
  通常時（1/99.9）
   ↓ 初当り
  5R 250個
   ├─ 51% → HYPER GO!GO! RUSH（約70%）
   │          ├─ 特図2 10R 0.3% → LUCKY GO!GO! RUSH（LT、約92.3%）
   │          ├─ 10R 66.7% → 下位RUSH継続
   │          └─ 2R 33.0% → 転落、残保留引き戻し抽選
   └─ 49% → 通常時

  通常時を低確率299回転消化
   ↓ 遊タイム発動（時短10000回）
  LUCKY GO!GO! RUSH（LT、約92.3%）
   ├─ 10R 840個 67.0% → LT継続
   ├─ 2R 100個 24.4% → LT継続
   └─ 2R 100個 8.6% → 転落、残保留引き戻し抽選
notes:
- 業界記事は全国導入2024-12-02、型式名、1/99.9→1/32.9、RUSH51%/約70%、LT約92.3%、遊タイム299回転→LTを確認。
- P-WORLDは下位RUSH10RのLT振り分け約0.3%、LT継続率約91.4%＋残保留で約92.3%を確認。
- 詳細振り分けは攻略解析資料で照合。払出表記と「その他入賞込み840個」を分離して保存。
- 2024-05-07の「P GO!GO!郷 革命の5」とは別スペック。混同しない。
sources:
- https://news.p-world.co.jp/articles/29481/yugitsushin — 遊技通信 2024-11-18。型式、基本確率、RUSH/LT、遊タイム、導入日。
- https://amusement-japan.co.jp/article/detail/10004622/ — Amusement Japan 2024-11-18。甘デジ/LT/遊タイム、RUSH51%/約70%、LT約92%、LT中10R約67%、12/2全国導入。
- https://news.p-world.co.jp/articles/29648/greenbelt — グリーンべると 2024-12-03。ゲームフロー、残保留4回転、遊タイム→LT、各継続率。
- https://www.p-world.co.jp/machine/database/10172 — P-WORLD。下位RUSH LT0.3%、LT約91.4%＋残保留=約92.3%、遊タイム299回転。
- https://chonborista.com/pachinko/newgin/225993/ — 詳細振り分け、払出、電サポ、残保留、ゲームフロー。
- https://1geki.jp/pachinko/p_go3_gouyuuno5/53/ — 一撃。LT経路/約92.3%の再照合。
- https://1geki.jp/pachinko/p_go3_gouyuuno5/25/ — 一撃。遊タイム299回転→LT直行の再照合。
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率（遊タイム経路込み）の直接公表値
conflicts: []
