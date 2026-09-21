# P緋弾のアリア ～緋緋神降臨～199Ver.

machineName: P緋弾のアリア ～緋緋神降臨～199Ver.
manufacturer: 藤商事
formalModel: P緋弾のアリア～緋緋神降臨～199Ver.FQU
releaseDate: 2025-02-17
modelType: ライトミドル
status: COMPLETE_CORE
gameType: 1種2種混合 / 普図抽選 / LT
jackpotProbability: 通常時 約1/199.8 / 強襲任務中 約1/199.9（電チューロング開放確率） / (超)LBR中 約1/88.2（電チューロング開放確率）
initialPayout: 約300個（払出）
rushEntryRate: TOTAL約44%（初当り5% LBR直行 + 残り95%の強襲任務104回での引き戻し約41%を含む）
rushContinuationRate: LBR 約75%
ltName: 超LIGHTNING BULLET RUSH（超LBR）
ltEntryRoute: 強襲任務またはLBR中の大当りで「1500個+α」振り分け約15.5%を獲得するとLT発動。初当りからの直接LT振り分けは確認していない。
ltEntryRate: 右打ち（強襲任務/LBR）大当り時 約15.5%。通常初当り基準の総LT到達率は直接公表値未確認のためUNVERIFIED。
ltContinuationRate: 約90%
ltPayoutStructure: 超LBR中 約1500個 50% / 約450個 50%（いずれもV入賞時、払出。超LBR継続）
totalPayoutDistribution: 特図1 約300個+LBR 5% / 約300個+強襲任務 95%。強襲任務・LBR中 約1500個+α+超LBR 15.5% / 約1500個+LBR 34.5% / 約450個+LBR 50.0%。超LBR中 約1500個 50% / 約450個 50%。
timeShortening: 強襲任務104回 / LBR120回 / 超LBR198回
cTimeOrSpecialSystems: なし（公開資料上Cタイムなし）。強襲任務は104回の引き戻し区間。
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時 約1/199.8
   ↓ 初当り 約300個
  5% → LBR（120回）
  95% → 強襲任務（104回、当選期待度約41%）
            ↓ 大当り
           LBR（120回、継続約75%）
            ↓ 強襲任務/LBR中大当りの約15.5%
           超LBR（LT、198回、継続約90%）
            ↓
           LT中大当りは1500個50% / 450個50%、超LBR継続
notes: |
  2024年3月の「P緋弾のアリア ～緋緋神降臨～ ラッキートリガーVer.」とは別スペック。
  RUSH突入TOTAL約44%は「5%直行」と強襲任務からの引き戻しを合わせた値で、強襲任務の当選期待度約41%そのものとは分母が異なる。
  LT突入約15.5%は強襲任務/LBR中の大当り振り分け。通常初当り基準の総LT到達率へ独自換算しない。
  約1500個+αのαはLT突入契機側の表記であり、固定出玉として推測補完しない。
  出玉は公開資料の払出表記。V入賞時に限る振り分けを含む。
sources:
  - url: https://news.p-world.co.jp/articles/30024/yugitsushin
    sourceType: INDUSTRY
    retrievedAt: 2026-09-21
    note: 藤商事発表の業界記事。型式、1/199.8、強襲任務1/199.9・104回/約41%、LBR1/88.2・120回/約75%、LT約15.5%、超LBR198回/約90%、2025-02-17以降導入を確認。
  - url: https://hisshobon.com/machineinfo/95975/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    note: 特図1 5%/95%、強襲任務・LBR中15.5%/34.5%/50%、超LBR中50%/50%の払出振り分けを確認。
  - url: https://p.hisshobon.jp/machine/4467/1/107335
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    note: 1種2種混合、各確率、104/120/198回、継続率、遊タイム非搭載、2025-02-17導入を照合。
  - url: https://www.p-world.co.jp/machine/database/10202
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    note: ゲームフロー、出玉振り分け、LT発動経路、超LBR転落なしを照合。
  - url: https://hazuse.com/machine/pachinko/PX0266/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-21
    note: 型式・導入日・各電サポ回数・振り分け・払出定義を照合。
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH（経路別15.5%は確認済み。独自計算しない）
conflicts: []
retrievedAt: 2026-09-21
