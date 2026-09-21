# Pデビルマン THE FINAL

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pデビルマン THE FINAL
formalModel: PデビルマンN4-S
manufacturer: ニューギン
releaseDate: 2025-02-17
modelType: ライト / LT搭載
gameType: 1種2種混合タイプ / 右打ち実質1/1.0 / 高継続RUSH + LTループ
jackpotProbability: 通常時 1/129.77 / 右打ち中 1/1.0
initialPayout: 7R約560個 2% / 2R約160個 98%（払出）
rushEntryRate: 56%（LT直行2% + 真悪魔RUSH54%）
rushContinuationRate: 真悪魔RUSH 88%
ltName: デデデRUSH BONUS
ltEntryRoute: (1) 初当り7Rの2%でLT直行、(2) 真悪魔RUSH中大当りの2.00%（7R）でLT。解析資料では真悪魔RUSH中7R時の約7%がLT発動と説明され、全大当り分母2%と整合。
ltEntryRate: 初当り直行2%。真悪魔RUSH中は全大当りの2.00%。通常初当り基準の最終的な総LT到達率は直接公表値未確認のためUNVERIFIED。
ltContinuationRate: デデデRUSH BONUS 94.5%。LT終了側5.5%でも必ず真悪魔RUSHへ移行。
ltPayoutStructure: LT中=7R約560個+LT 28.35% / 3R約240個+LT 66.15% / 7R約560個+真悪魔RUSH 1.65% / 3R約240個+真悪魔RUSH 3.85%。LT継続合算94.5%、下位復帰合算5.5%。
totalPayoutDistribution: 通常時=7R約560個+LT 2% / 2R約160個+真悪魔RUSH54% / 2R約160個+通常44%。真悪魔RUSH中=7R約560個+LT2.00% / 7R約560個+真悪魔RUSH27.04% / 3R約240個+真悪魔RUSH58.96% / 2R約120個+通常12.00%。LT中はltPayoutStructure参照。すべて払出表記。
timeShortening: 右打ち中実質大当り確率1/1.0。公開資料は回数型STではなく各大当り振り分けによるループとして提示。
cTimeOrSpecialSystems: LT終了時は通常へ直接落ちず真悪魔RUSHへ復帰し、再度LTを狙える「最凶デビループ」構造。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（1/129.77）
   ↓ 初当り
   ├─ 2% 7R約560個 → LT「デデデRUSH BONUS」
   ├─ 54% 2R約160個 → 真悪魔RUSH
   └─ 44% 2R約160個 → 通常時
  真悪魔RUSH（右打ち1/1.0、継続88%）
   ├─ 2.00% 7R → LT「デデデRUSH BONUS」
   ├─ 85.??% 継続振り分け（7R27.04%+3R58.96%）→ 真悪魔RUSH
   └─ 12.00% 2R約120個 → 通常時
  LT「デデデRUSH BONUS」（継続94.5%）
   ├─ 94.5% → LT継続
   └─ 5.5% → 真悪魔RUSHへ復帰

notes:
- gameFlowの真悪魔RUSH継続振り分けは27.04%+58.96%=86.00%。LT移行2%も右打ち継続状態として含めるとTOTAL88%。値を別定義で保存する。
- 必勝本本文に「初当りで7%」という記述があるが、同ページ表・基本スペック・P-WORLD・1geki・業界記事はいずれも初当りLT直行2%を示す。これは本文誤記とみられるため、表の2%を採用し注記する。正式な数値競合としては扱わず、一次/複数表一致を優先。
- 後発2025-09「デカスタPデビルマン THE FINAL 179ver.」（PデビルマンLM3）とは別スペック。
- LT突入時期待出玉約12378個は、RUSH突入時特図1約160個+RUSH突入後約2749個+LT突入後約9469個の合算定義。主要DB値は個別払出を優先。

sources:
- https://news.p-world.co.jp/articles/29921/yugitsushin — 業界発表。型式PデビルマンN4-S、1/129.77→1/1.0、RUSH56%、下位88%、LT94.5%、LT終了後下位復帰。
- https://hisshobon.com/machineinfo/96011/ — 基本スペック、導入2025-02-17、払出、遊タイム非搭載。
- https://hisshobon.com/machineinfo/96012/ — 特図1/真悪魔RUSH/LT中の詳細振り分け。
- https://1geki.jp/pachinko/p_devilman_tf129/ — 型式・メーカー・導入日・各確率/継続率/払出を照合。
- https://www.p-world.co.jp/machine/database/10200 — 初当り2% LT / 54%下位 / 44%通常、LT終了後下位復帰、LT期待値定義。
- https://amusement-japan.co.jp/article/detail/10004692/ — メーカー発表に基づく業界記事、LT搭載と下位復帰構造を照合。

confidence: ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率（直接公表値未確認）
conflicts: none
