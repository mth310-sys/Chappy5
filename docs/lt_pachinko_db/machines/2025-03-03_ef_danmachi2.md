# eFダンジョンに出会いを求めるのは間違っているだろうか2

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: eFダンジョンに出会いを求めるのは間違っているだろうか2
formalModel: eフィーバーダンまち2G
manufacturer: SANKYO（三共）
releaseDate: 2025-03-03
modelType: スマパチ / ライトミドル / LT

gameType: 1種2種混合 / ST型 / RUSH突入=LT発動
jackpotProbability:
- 図柄揃い: 約1/399.9
- ヘスティアチャージ: 約1/266.2（資料に約1/266.0表記あり。丸め/表記差として扱う）
- 実質大当り: 1/159.8（特図1 1500個大当りとヘスティアチャージを含む定義）
- RUSH中: 約1/99.9

initialPayout:
- 10R: 約1500個（払出。実獲得約1400個とする解析資料あり）
- 2Rヘスティアチャージ: 約192個（払出。実獲得約176個とする解析資料あり）

rushEntryRate: 約56%（本機はRUSH=LT。特図1の1500個大当りとヘスティアチャージからLT突入の合算に対するTOTAL）
rushContinuationRate: 約73%

ltName: RUSH（演出モード: GOD RUSH / ヘスティアRUSH）
ltEntryRoute:
- 奇数図柄揃い10R: LT直行
- 偶数図柄揃い10R: 眷族チャレンジ成功でLT
- ヘスティアチャージ2R: 一部でLT
ltEntryRate: 約56% TOTAL
ltContinuationRate: 約73%（ST130回、特図2）

ltPayoutStructure:
- 特図2: 10R約1500個 + 神乗せループチャンス 100%
- 神乗せループ: 約50%で成功する限り10R約1500個を追加上乗せ
- 神乗せ失敗後もST130回のRUSHへ戻る

totalPayoutDistribution:
- 特図1: 10R約1500個 + LT 約54%
- 特図1: 2R約192個 + LT 約2%
- 特図1: 10R約1500個 + 通常 約44%
- 特図2: 10R約1500個 + 神乗せループチャンス 100%

timeShortening: LT/RUSH ST130回
cTimeOrSpecialSystems: 神乗せループチャンス。LT中の全大当り後に発生し、約50%で1500個上乗せをループ。
ceilingOrSupport: 公開主要資料で遊タイム等のLT関連サポート確認なし

gameFlow: |
  通常時
   ↓ 図柄揃い / ヘスティアチャージ
  奇数図柄揃い → 10R約1500個 → LT(RUSH)
  偶数図柄揃い → 10R約1500個 → 眷族チャレンジ成功 → LT(RUSH)
  ヘスティアチャージ → 2R約192個 → 一部でLT(RUSH)
   ↓ TOTAL約56%
  LT / RUSH（ST130回、継続約73%）
   ↓ 大当り100%
  10R約1500個 + 神乗せループチャンス
   ↓ 約50%成功の間
  10R約1500個を追加上乗せ
   ↓ ループ終了
  LT / RUSHへ復帰

notes:
- スマパチ版のみLT搭載対象として登録。2025-03-03同時導入のP機版 `PFダンジョンに出会いを求めるのは間違っているだろうか2` は通常RUSH機で、本レコードと混同しない。
- 業界一次系記事は「SANKYOが2024-12-06にP/e両版を発表」「スマパチ版はLT最新作」「2025年3月上旬導入予定」を確認。
- P-WORLD、一撃、業界記事で図柄揃い1/399.9、LT突入約56%、ST130回、継続約73%、特図1 54/2/44%、右打ち1500個+神乗せ100%が一致。
- 神乗せループはLTそのものの継続率ではなく、LT中大当り後の1500個上乗せ約50%ループ。約73%のST継続率と分離する。
- ヘスティアチャージ確率は約1/266.2と約1/266.0の表記差あり。主要構造に影響しない丸め差として保存し、CONFLICTにはしない。

sources:
- https://news.p-world.co.jp/articles/29697/greenbelt — 業界記事。SANKYO発表、LT構造、突入約56%、ST130、約73%、54/2/44%、神乗せ約50%。取得 2026-09-21
- https://www.p-world.co.jp/machine/database/10184 — 機種DB。確率、振り分け、ST、ゲームフロー、払出。取得 2026-09-21
- https://1geki.jp/pachinko/e_danmachi2/ — 解析。導入日、型式、1種2種混合、確率、LT値、払出/実獲得。取得 2026-09-21
- https://www.pachirinko.com/2025.kishu/li.dun.mati.2.html — 補助照合。導入日、確率、54/2/44、時短130。取得 2026-09-21

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: []
conflicts: []
