# Pブラックラグーン4 EXTRA BULLET 129ver.

machineName: Pブラックラグーン4 EXTRA BULLET 129ver.
manufacturer: サミー（製造: 銀座）
formalModel: PブラックラグーンGCPA / Pブラックラグーン4GCPA
releaseDate: 2025-01-20
modelType: ライト / 129帯
gameType: 一種二種混合 / RUSH（時短1回+残保留4個、実質次回時短あり） / ボーナスループ型LT
jackpotProbability: 通常時 約1/129.8 / 右打ち時 約1/4.12（大当り+小当り合算）
initialPayout: 2R 約200個（払出）。特図1はRUSH 52% / 通常48%。
rushEntryRate: 52%
rushContinuationRate: デスペラードRUSH 約75%（時短1回+残保留4個による引き戻し。時短10000回時の継続率は含まない）
ltName: (EXTRA)ラグーンボーナス / LAGOON BONUS EXTRA
ltEntryRoute: デスペラードRUSHの時短1回+残保留4回中の右打ち大当りでLT振り分けを獲得。ブラックアウトが突入合図。LT抽選は時短1+4回時のみ。
ltEntryRate: 右打ち中大当りの約4%。遊技通信記事には「バトル勝利時5%」表記がある一方、Amusement Japan・グリーンべると・必勝本は約4%で一致。詳細振り分けも約4%のためcanonicalは約4%とし、5%表記は丸め/記事差としてnotesに保持。通常初当り基準の総LT到達率は直接公表値未確認のためUNVERIFIED。
ltContinuationRate: 約90%（ボーナス型ループ）。LT中の約10%転落当りでLT終了し、デスペラードRUSHへ復帰。
ltPayoutStructure: LT中: 10R約1000個+LT 約37% / 5R約500個+LT 約53% / 5R約500個+デスペラードRUSH 約10%（払出）。
totalPayoutDistribution: 特図1: 2R約200個+RUSH 52% / 2R約200個通常 48%。デスペラードRUSH中: 10R約1000個+LT 約4% / 10R約1000個+時短10000回+残保留4 約29% / 10R約1000個+時短1回+残保留4 約4% / 5R約500個+時短1回+残保留4 約63%。
timeShortening: 1回 or 10000回 + 残保留4個
cTimeOrSpecialSystems: LTは通常RUSHのゲーム性からボーナスループ型へ移行。LT終了当り後も通常RUSHへ復帰し、同一RUSH内でLT再突入可能。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 約1/129.8
   ↓ 初当り（2R約200個）
  52% → デスペラードRUSH（時短1回+残保留4個、約75%）
  48% → 通常へ
   ↓ RUSH中大当り
  約4% → (EXTRA)ラグーンボーナス LT
  その他 → デスペラードRUSH継続（時短1回または10000回+残保留4）
   ↓
  LT：約90%でボーナスループ
   ↓ 約10%の転落当り
  デスペラードRUSHへ復帰 → 再度LT突入を狙える
notes: |
  出玉は払出基準。右打ち約1/4.12は大当り+小当り合算。
  RUSH約75%は時短1回+残保留4個の引き戻しで、時短10000回振り分けによる実質次回継続を含まない定義。
  Amusement Japanは特図2LT振り分け約4%、遊技通信は「バトル勝利時5%」と表記。グリーンべるとの詳細振り分け約4%、必勝本の約4%と照合し、DB主要値は約4%を採用。平均化はしていない。
  LT中は37%+53%=約90%がLT継続、約10%が5R転落当りで通常RUSHへ復帰するため、LT終了=通常転落ではない。
sources:
  - url: https://www.amusement-japan.co.jp/article/detail/10004593/
    type: INDUSTRY
    checked: 2026-09-21
    note: 発表日、導入日、確率、RUSH、LT約4%/約90%、時短定義
  - url: https://news.p-world.co.jp/articles/29290/yugitsushin
    type: INDUSTRY
    checked: 2026-09-21
    note: 型式、一種二種、RUSH構造、LT経路。LT割合は5%表記のため差異を保持
  - url: https://news.p-world.co.jp/articles/29292/greenbelt
    type: INDUSTRY
    checked: 2026-09-21
    note: 特図1/特図2/LT中の詳細振り分け、LT終了後RUSH復帰
  - url: https://hisshobon.com/machineinfo/94916/
    type: ANALYSIS_HIGH
    checked: 2026-09-21
    note: 確率、時短、払出、LT約4%、遊タイム非搭載
  - url: https://hisshobon.com/machineinfo/94918/
    type: ANALYSIS_HIGH
    checked: 2026-09-21
    note: LT名称、約90%ループ、約10%終了、終了後RUSH復帰
  - url: https://1geki.jp/pachinko/p_blacklagoon4_129/
    type: ANALYSIS_HIGH
    checked: 2026-09-21
    note: 導入日、型式、基本構造の照合
confidence: INDUSTRY + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields:
  - 通常初当り基準の総LT到達率（直接公表値）
conflicts: none (約4%対5%は詳細振り分け/複数資料から約4%をcanonical、5%記事表記をnotes保持)
retrievedAt: 2026-09-21
