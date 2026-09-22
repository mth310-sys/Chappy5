# Pフィーバー機動戦士ガンダムユニコーン再来 99ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: Pフィーバー機動戦士ガンダムユニコーン再来 99ver.
manufacturer: SANKYO
formalModelName: PAフィーバー機動戦士ガンダムユニコーン2AR
releaseDate: 2025-07-07
modelType: 甘デジ / LT搭載
gameType: 一種二種混合 / ST（時短）+残保留

jackpotProbability:
- 通常時図柄揃い: 約1/99.9
- 右打ち中図柄揃い: 約1/43.7（大当り・小当り合算、特図2）

initialPayout:
- 3R: 約300個（払い出し）

rushEntryRate: 約51%
rushContinuationRate: 覚醒HYPER 約75%（時短56回 約73% + 残保留4個 約9% のTOTAL）

ltName: 超覚醒HYPER
ltEntryRoute:
- 通常初当り約51% → 覚醒HYPER
- 覚醒HYPER中大当りの約1%で7R×2回（約1400個=700個×2） → 超覚醒HYPER（LT）
- ST最終変動+残保留での当選は覚醒HYPER側の振り分けとして扱われる資料あり。
ltEntryRate:
- 覚醒HYPER中大当りの約1%
- 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路値から独自算出しない）
ltContinuationRate: 約91%（時短100回 約90% + 残保留4個 約9% のTOTAL）

ltPayoutStructure:
- 超覚醒HYPER中: 7R 約700個 + LT継続 100%

totalPayoutDistribution:
- 特図1: 3R 約300個 + 覚醒HYPER 約51% / 3R 約300個 + 通常 約49%
- 覚醒HYPER中: 7R×2 約1400個 + 超覚醒HYPER 約1% / 7R 約700個 + 覚醒HYPER 約99%
- 超覚醒HYPER中: 7R 約700個 + 超覚醒HYPER 100%
- 1400個は700個×2回。単一7R出玉と混同しない。

timeShortening:
- 覚醒HYPER: 時短56回 + 残保留4個
- 超覚醒HYPER: 時短100回 + 残保留4個

cTimeOrSpecialSystems: 特記事項なし
ceilingOrSupport: 遊タイム非搭載 / コンプリート機能搭載

gameFlow: |
  通常時（約1/99.9）
   ↓ 初当り
  約49%: 3R約300個 → 通常
  約51%: 3R約300個 → 覚醒HYPER（56回+残保留4、約75%）
   ↓ 覚醒HYPER中大当り
  約99%: 7R約700個 → 覚醒HYPER継続
  約1%: 7R×2 約1400個 → LT「超覚醒HYPER」
   ↓
  超覚醒HYPER（100回+残保留4、約91%）
   ↓ 大当り
  7R約700個 → 超覚醒HYPER継続

notes:
- 2025-05-07導入の129ver.とは別スペック。99ver.は通常約1/99.9、下位約75%、LT約91%、LT契機約1%。
- 払い出し約700/300個と、解析サイト掲載の実獲得目安約630/270個は定義差として分離しCONFLICTにしない。
- P-WORLD台紹介本文の一部に「大当り約4%でLT」「LT約93%」という129ver.由来とみられる不整合記載がある一方、同ページ大当り割合表、業界発表、必勝本、パチマガスロマガ等は99ver.について約1%/約91%で一致。機種固有の振り分け表と複数資料を優先し、約1%/約91%を採用。

sources:
- https://news.p-world.co.jp/articles/31052/yugitsushin — 業界発表、型式・導入日・基本確率・継続率
- https://news.p-world.co.jp/articles/31011/greenbelt — 業界記事、初当り/RUSH/LT振り分け
- https://hisshobon.com/machineinfo/98085/ — 基本スペック
- https://hisshobon.com/machineinfo/98087/ — LT発動契機/終了条件
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/539/kh01.php — 型式・導入日・約1% LT契機
- https://nana-press.com/kaiseki/machine/998/30209/ — ST回数・TOTAL継続率の定義
- https://www.p-world.co.jp/machine/database/10291 — 特図1/特図2振り分け照合（台紹介本文の不整合はnotes参照）

confidence:
- machine identity / release / model: INDUSTRY
- core probabilities / RUSH: ANALYSIS_HIGH
- LT name / route / continuation / payout: ANALYSIS_HIGH
- total LT arrival from normal play: UNVERIFIED

missingFields:
- 通常初当り全体を分母とする総LT到達率の直接公表値

conflicts: []
