# Pリング 呪いの7日間3 ラッキートリガーVer.

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pリング 呪いの7日間3 ラッキートリガーVer.
manufacturer: JFJ / 藤商事グループ
releaseDate: 2024-08-19
modelType: ライトミドル

gameType: 1種2種混合 / ST + LT上位ST
jackpotProbability: 通常時 約1/199.8。右打ち中実質 約1/57.6（大当り約1/199.8 + 特図2小当り約1/81.1の合算）。
initialPayout: 2R 約300個（払出）
rushEntryRate: 呪いの連鎖 70%
rushContinuationRate: 約73%（ST70回引き戻し約70.6% + 残保留4個約6.8%の合算）。
ltName: 貞子夢爽
ltEntryRoute: 呪いの連鎖中の大当り約10%（8R約1200個）でLT発動。別表現では1200個大当り時の約20%。両者は1200個比率75%中の一部という定義差で整合。
ltEntryRate: 呪いの連鎖中大当りの約10%。通常初当りからの総LT到達率は直接掲載値未確認のためUNVERIFIED。
ltContinuationRate: 約90%（ST125回引き戻し約88.8% + 残保留4個約6.8%の合算）。
ltPayoutStructure: 貞子夢爽中 8R約1200個 約75% / 3R約450個 約25%、いずれも貞子夢爽継続。
totalPayoutDistribution: 特図1 2R約300個+呪いの連鎖70% / 2R約300個通常30%。呪いの連鎖中: 8R約1200個+貞子夢爽約10%、8R約1200個+呪いの連鎖約65%、3R約450個+呪いの連鎖約25%。貞子夢爽中: 8R約1200個75%、3R約450個25%。
timeShortening: 呪いの連鎖 ST70回+残保留4。貞子夢爽 ST125回+残保留4。
cTimeOrSpecialSystems: なし確認
ceilingOrSupport: 遊タイムなし

gameFlow: |
  通常時 約1/199.8
   ├─ 30% 2R約300個 → 通常
   └─ 70% 2R約300個 → 呪いの連鎖
        ↓ ST70回+残保留4、約73%
      大当り
       ├─ 約90% → 呪いの連鎖継続
       └─ 約10% 8R約1200個 → LT「貞子夢爽」
            ↓ ST125回+残保留4、約90%
          1200個75% / 450個25% → 貞子夢爽継続

notes:
- 型式名 Pリング 呪いの7日間3 LT搭載 JSG。
- 「LTは呪いの連鎖中大当り約10%」と「1200個大当り時約20%」は分母が異なる。1200個比率約75%のうちLT約10%なので競合扱いしない。
- 払出表記300/450/1200個。実獲得表記と混ぜない。

sources:
- https://news.p-world.co.jp/articles/28374/yugitsushin — 遊技通信/P-WORLD。型式、1/199.8、70%/73%、LT約10%/約90%、8/19導入。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28300/nippon — 遊技日本/P-WORLD。詳細振り分け、ST70/125、払出。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28332/greenbelt — グリーンべると/P-WORLD。LT構造と導入日照合。取得 2026-09-21。
- https://www.p-world.co.jp/machine/database/10087 — P-WORLD機種DB。ST/残保留、確率、払出照合。取得 2026-09-21。
- https://hisshobon.com/machineinfo/93481/ — 必勝本。2024-08-19導入、基本スペック。取得 2026-09-21。
- https://hisshobon.com/machineinfo/93483/ — 必勝本。1200個大当り時20%のLT契機、終了条件。取得 2026-09-21。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: ltEntryRate total-from-normal UNVERIFIED
conflicts: none
