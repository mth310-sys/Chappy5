# P GO!GO!郷 革命の5

machineName: P GO!GO!郷 革命の5
manufacturer: ニューギン
releaseDate: 2024-05-07
modelType: ライトミドル
status: CONFLICT
gameType: 1種2種混合 / 転落型RUSH
jackpotProbability: 通常時 1/199.8 / RUSH中 1/24.6
initialPayout: 5R 約350個（払出表記）
rushEntryRate: 約70%
rushContinuationRate: HYPER GO!GO! RUSH 約77%（約73.1%＋残保留引き戻し込み）
ltName: LUCKY GO!GO! RUSH
ltEntryRoute: HYPER GO!GO! RUSH中の大当りの一部からLT発動
ltEntryRate: CONFLICT — P-WORLD/導入記事はRUSH中大当りの約3%、別解析資料は10R+LT 4%表記。平均化しない。
ltContinuationRate: 約90%（約88.2%＋残保留引き戻し込み）
ltPayoutStructure: LUCKY GO!GO! RUSH中は10R約1000個 83% / 2R約100個 17%との解析資料あり。P-WORLDは10R約1060個を「10R+その他入賞」、払出表記として掲載。
totalPayoutDistribution: 通常時は5R約350個。HYPER GO!GO! RUSH中の継続大当りは10R主体。LT中は10R/2R構成。
timeShortening: 転落 or 実質次回まで。資料上10,000回表記あり。
cTimeOrSpecialSystems: LT搭載。HYPER GO!GO! RUSH / LUCKY GO!GO! RUSHとも転落型。
ceilingOrSupport: 確認できず（遊タイム記載なし）
gameFlow: |
  通常時 1/199.8
   ↓ 初当り
  70% HYPER GO!GO! RUSH / 30% 通常へ
   ↓ HYPER中大当りの一部
  LUCKY GO!GO! RUSH（LT）
   ↓
  大当り or 転落まで継続、残保留引き戻し込み約90%
notes:
- HYPER GO!GO! RUSH継続率約77%、LUCKY GO!GO! RUSH継続率約90%。
- P-WORLDは10R出玉を約1060個（その他入賞込み）と明記。解析表の1000個とは定義を分離する。
- LT突入割合に3%/4%の資料競合が残るためCONFLICT。
- 推測で通常初当り基準LT到達率へ換算していない。
sources:
- https://www.p-world.co.jp/machine/database/10029 — 基本スペック、RUSH/LT構造、継続率、約3%、出玉定義（取得日 2026-09-21）
- https://ps-mania.jp/pachinko/p-gogogou-5-199/ — 振り分け、LT 4%表記、LT中83%/17%（取得日 2026-09-21）
- https://p-castle.co.jp/blog/pachinko/1767/ — 導入時期、RUSH/LT構造、約3%（取得日 2026-09-21）
confidence: CONFLICT（CoreはANALYSIS_HIGH相当、LT突入割合のみ未解消）
missingFields:
- メーカー一次資料によるLT突入割合3%/4%の確定
conflicts:
- LT突入割合: 約3%（P-WORLD・導入記事） vs 4%（解析振り分け表）
qa:
- LT搭載確認: PASS
- 別スペック混同: PASS（革命の5を対象）
- RUSH/LT確率混同: PASS
- 払出/その他入賞込み: 定義分離済み
- retrievedAt: 2026-09-21
