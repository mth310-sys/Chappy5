# P攻殻機動隊SAC_2045 大入りLTver

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: P攻殻機動隊SAC_2045 大入りLTver
formalModel: P攻殻機動隊SAC_2045AH-RS
manufacturer: D-light（ディ・ライト / 大一商会系）
releaseDate: 2025-05-07
modelType: ライトミドル / 大入りスタート（デカヘソ）
gameType: 1種2種混合 / ST型RUSH / ラッキートリガー
jackpotProbability: 通常時 約1/189.9 / 右打ち中 約1/69.2
initialPayout: 2R 約300個（払出）。通常時初当りは50% GHOST RUSH、50%通常時へ。
rushEntryRate: 50%
rushContinuationRate: GHOST RUSH 約65%
ltName: GHOST RUSH BURST
ltEntryRoute: GHOST RUSH中大当りの10%（10R大当りの20%）でLT発動しGHOST RUSH BURSTへ。
ltEntryRate: 通常初当り基準の総LT到達率は直接公表値を確認できず UNVERIFIED_AFTER_RESEARCH。経路値から独自合算しない。
ltContinuationRate: 約92%
ltPayoutStructure: GHOST RUSH BURST中は10R 約1500個 50% / 3R 約200個 50%。いずれもST170回のGHOST RUSH BURST継続。
totalPayoutDistribution: 通常時（特図1）= 2R約300個+GHOST RUSH 50% / 2R約300個+通常 50%。GHOST RUSH中（特図2）= 10R約1500個+GHOST RUSH BURST 10% / 10R約1500個+GHOST RUSH 40% / 3R約200個+GHOST RUSH 50%。LT中（特図2）= 10R約1500個+LT 50% / 3R約200個+LT 50%。出玉は払出表記。
timeShortening: GHOST RUSH 72回 / GHOST RUSH BURST 170回。右打ちは普通図柄抽選で残保留なしとする解析資料あり。
cTimeOrSpecialSystems: 大入りスタート（デカヘソ）搭載。コンプリート機能搭載。
ceilingOrSupport: 遊タイム非搭載。

gameFlow: |
  通常時（約1/189.9）
   ↓ 初当り 2R約300個
   ├─ 50% → 通常時へ
   └─ 50% → GHOST RUSH（72回、右約1/69.2、継続約65%）
                ↓ 大当り
                ├─ 10% → 10R約1500個 + LT発動
                │          ↓
                │        GHOST RUSH BURST（170回、継続約92%）
                │          ↓ 大当り
                │        10R約1500個 50% / 3R約200個 50% → LT継続
                ├─ 40% → 10R約1500個 + GHOST RUSH継続
                └─ 50% → 3R約200個 + GHOST RUSH継続
  GHOST RUSH 72回スルー / LT 170回スルー → 通常時。

notes:
- 2024-09-17導入の「P攻殻機動隊SAC_2045 199LTver.」とは別スペック。大入りLTver.は通常約1/189.9、下位約65%、LT約92%。混同しない。
- 業界記事が型式名 P攻殻機動隊SAC_2045AH-RS、全国最速導入2025-05-07、通常約1/189.9→右約1/69.2、RUSH50%/約65%、LT約92%を掲載。
- LT突入契機「GHOST RUSH中大当り10%」はP-WORLD、一撃、必勝本、HAZUSEで一致。10Rを分母にすると20%であり、分母差として整合する。
- 右打ち出玉は資料間で10R約1500個、3R約200個が一致。1gekiは実獲得目安10R約1400個、3R約180個、2R約280個も併記するため、DB本体は払出値を採用し定義を分離。
- 通常初当りを分母にした総LT到達率は高信頼資料で直接値を確認できなかった。RUSH50%×継続過程×10%等からの独自算出は行わない。

sources:
- https://news.p-world.co.jp/articles/30556/yugitsushin — 遊技通信転載。型式、確率、RUSH/LT継続、導入日。
- https://www.p-world.co.jp/machine/database/10252 — LT搭載、RUSH50%/約65%、RUSH中大当り約10%でLT、LT約92%。
- https://1geki.jp/pachinko/p_kksac2045_ooirilt/ — 型式、導入日、確率、ST回数、継続率、払出/実獲得。
- https://1geki.jp/pachinko/p_kksac2045_ooirilt/51/ — GHOST RUSH 72回、約65%、大当り10%でLT。
- https://1geki.jp/pachinko/p_kksac2045_ooirilt/52/ — GHOST RUSH BURST 170回、約92%、右約1/69.2。
- https://p.hisshobon.jp/machine/4513/1/108878 — 特図1/特図2の詳細振り分け。
- https://p.hisshobon.jp/machine/4513/1/108879 — LT発動契機、170回スルー終了、残保留なし。
- https://hazuse.com/machine/pachinko/PX0285/ — 詳細振り分け、払出、ST72/170回。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH
conflicts: none
