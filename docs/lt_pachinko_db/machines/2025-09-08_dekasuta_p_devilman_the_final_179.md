# デカスタPデビルマン THE FINAL 179ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: デカスタPデビルマン THE FINAL 179ver.
manufacturer: ニューギン
formalModelName: PデビルマンLM3
releaseDate: 2025-09-08
modelType: ライトミドル / デカスタ / LT

gameType: 二種（右打ち1回転ループ型）。下位「真悪魔RUSH」からLT「デデデRUSH BONUS」へ昇格し、LT終了時は通常ではなく真悪魔RUSHへ戻る。
jackpotProbability: 通常時 約1/179.55。右打ち中 実質1/1.0。
initialPayout: 通常時 7R約560個+LT 0.1% / 2R約160個+真悪魔RUSH 31.4% / 2R約160個+通常 68.5%。払出表記。
rushEntryRate: TOTAL約31.5%（LT直行0.1%を含む）。真悪魔RUSH単独は31.4%。
rushContinuationRate: 真悪魔RUSH 約91.5%。右打ち1回転、転落大当り8.5%を引くまでループ。
ltName: デデデRUSH BONUS
ltEntryRoute: 通常初当りの0.1%（7R）から直行、または真悪魔RUSH中大当りの2.00%（7R）でLT発動。
ltEntryRate: 経路別の直接値は通常初当り0.1%、真悪魔RUSH中大当り2.00%。通常遊技全体を分母とする総LT到達率は直接公表値を確認できないため推測しない。
ltContinuationRate: 約93.1%。右打ち1回転、LTから真悪魔RUSHへ戻る振り分け合計6.90%。
ltPayoutStructure: LT中 7R約560個+LT継続 28.04% / 3R約240個+LT継続 65.06% / 7R約560個+真悪魔RUSH 2.08% / 3R約240個+真悪魔RUSH 4.82%。LT継続合計93.10%、下位RUSH復帰合計6.90%。払出表記。
totalPayoutDistribution: 真悪魔RUSH中 7R約560個+LT 2.00% / 7R約560個+RUSH継続 28.19% / 3R約240個+RUSH継続 61.31% / 2R短開放約120個+通常 8.50%。通常時は initialPayout 参照。
timeShortening: 真悪魔RUSH、デデデRUSH BONUSとも電サポ1回転。右打ち実質大当り1/1.0。
cTimeOrSpecialSystems: デカスタ（大入賞口・スタート周辺のゲーム性上の呼称）搭載。LT終了時に真悪魔RUSHへ復帰する階層ループ構造。
ceilingOrSupport: 公開資料で遊タイム等の確認なし。

gameFlow: |
  通常時（約1/179.55）
   ↓ 初当り
   ├─ 0.1% 7R約560個 → LT「デデデRUSH BONUS」直行
   ├─ 31.4% 2R約160個 → 真悪魔RUSH
   └─ 68.5% 2R約160個 → 通常へ
  真悪魔RUSH（右1回転 / 実質1/1 / 継続約91.5%）
   ↓ 大当り振り分け
   ├─ 2.00% 7R約560個 → LT「デデデRUSH BONUS」
   ├─ 28.19% 7R約560個 → 真悪魔RUSH継続
   ├─ 61.31% 3R約240個 → 真悪魔RUSH継続
   └─ 8.50% 2R短開放約120個 → 通常へ
  デデデRUSH BONUS（LT / 右1回転 / 実質1/1 / 継続約93.1%）
   ↓
   ├─ 28.04% 7R約560個 → LT継続
   ├─ 65.06% 3R約240個 → LT継続
   ├─ 2.08% 7R約560個 → 真悪魔RUSHへ
   └─ 4.82% 3R約240個 → 真悪魔RUSHへ
  ※LT終了＝即通常ではなく、必ず下位の真悪魔RUSHへ復帰。

notes:
- 1geki、P-WORLD、HAZUSE等で型式、導入日、通常1/179.55、右1/1、RUSH約31.5%、真悪魔RUSH約91.5%、LT約93.1%を照合。
- 31.4%は真悪魔RUSH単独、31.5%は0.1% LT直行を含むTOTALであり競合ではない。
- 1gekiのLT詳細ページ本文には見出し付近で「継続率94.5%」という孤立表示が検索取得時に確認されたが、同サイト機種概要、P-WORLD、HAZUSE、詳細振り分け合計はいずれも93.1%。振り分け28.04%+65.06%=93.10%とも整合するためcanonicalは93.1%。孤立表示は表示/ページ不整合として注記し、平均しない。
- 払出と実獲得を混同しない。本レコードの振り分け出玉は払出。1gekiは7R約560（実獲得約490）、3R約240（約210）、2R約160（約140）も併記。
- LT突入時期待出玉約13646個という解析値は期待出玉であり、単発出玉・LT到達率とは別定義のため主要スペック値に混ぜない。

sources:
- https://www.newgin.co.jp/pub/machine/devilman_final/ — メーカー公式機種ページ（HAZUSE公式リンクで確認）
- https://hazuse.com/hd/5p0364/ — 型式 PデビルマンLM3、検定番号5P0364、LT搭載、導入2025-09-08、基本確率
- https://1geki.jp/pachinko/p_devilman_tf179ds/ — 導入日、型式、基本スペック、期待出玉定義
- https://1geki.jp/pachinko/p_devilman_tf179ds/51/ — 真悪魔RUSH約91.5%、LT突入2%
- https://1geki.jp/pachinko/p_devilman_tf179ds/53/ — LT経路、LT終了後の真悪魔RUSH復帰
- https://www.p-world.co.jp/machine/database/10333 — 1/179.55、RUSH TOTAL31.5%、真悪魔RUSH91.5%、LT93.1%、電サポ1回転、LT経路
- https://chonborista.com/pachinko/newgin/244098/ — 特図1/真悪魔RUSH/LTの詳細振り分け
- https://www.goraku-sangyo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3%E3%80%80%E3%83%91%E3%83%81%E3%83%B3%E3%82%B3%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8Cp%E7%9C%9F%E3%83%BB%E5%BA%A7%E9%A0%AD%E5%B8%82%E7%89%A9%E8%AA%9E-lt99ver/ — ニューギン直営先行導入の業界記事

confidence: ANALYSIS_HIGH（メーカー公式導線＋業界記事＋複数解析一致）
missingFields:
- 通常遊技全体基準の総LT到達率は直接公表値未確認。経路確率から独自算出しない。
conflicts:
- LT継続率は93.1%をcanonical。1geki LT詳細ページの孤立「94.5%」表示は同サイト他ページ・複数資料・詳細振り分けと不整合のため注記保存。DBステータスCONFLICTには上げない。
