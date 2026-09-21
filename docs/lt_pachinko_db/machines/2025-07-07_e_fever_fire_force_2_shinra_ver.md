# eフィーバー炎炎ノ消防隊2 シンラver.

machineName: eフィーバー炎炎ノ消防隊2 シンラver.
manufacturer: SANKYO（製造: ジェイビー）
formalModel: eフィーバー炎炎ノ消防隊2
releaseDate: 2025-07-07
modelType: ミドル / スマパチ / LT3.0 PLUS
gameType: 一種二種混合 / 転落型LT / LT直撃型
jackpotProbability: 通常時図柄揃い 約1/399.9（1500個大当りと命の呼吸チャレンジ突入大当りの合算） / 大当り確率 1/349.9 / 炎炎チャージ 約1/2613 / LT中図柄揃い 約1/2.0（特図2、大当り+小当り合算） / 転落小当り 約1/7.9
initialPayout: 通常時 300個 / 1500個 / 3000個（1500個×2、払い出し）
rushEntryRate: 通常RUSHは存在せず、RUSH=LT「炎上バトルモード」。特図1から約50%、命の呼吸チャレンジ引き戻し約49%を含むTOTAL約50.5%
rushContinuationRate: RUSH=LT。時短250回（転落小当り当選で終了）、継続約80%
ltName: 炎上バトルモード
ltEntryRoute: 図柄揃い時の約50%で1500個+EXTRA ROUND 1500個=計3000個を獲得してLT直行。別経路として炎炎チャージ（約1/2613）から「命の呼吸チャレンジ」へ進み、成功（引き戻し約49%）でLT突入。
ltEntryRate: TOTAL約50.5%（特図1突入約50% + 命の呼吸チャレンジ引き戻し経路を含む公表TOTAL値）
ltContinuationRate: 約80%。時短250回、転落小当り約1/7.9当選で終了。
ltPayoutStructure: LT中は全大当り1500個以上。通常の「炎上FEVER」1500個、または「超炎上BURST」3000個（1500個×2）+1500個×約50%上乗せループ。超炎上BURST発生期待度は状態表示（白/緑/青）により約12.5% / 約25% / 約50%。
totalPayoutDistribution: 通常時図柄揃い: 3000個+LT 約50% / 1500個+通常 約49% / 300個+命の呼吸チャレンジ 約1%（解析資料）。LT中: 白ランプ=超炎上BURST約12.5%/1500個約87.5%、緑=約25%/約75%、青=約50%/約50%。超炎上BURST期待出玉内訳は3000個50% / 4500個25% / 6000個12.5% / 7500個以上12.5%（上乗せ50%ループ由来）。
timeShortening: LT「炎上バトルモード」=時短250回。ただし転落小当り当選で終了。命の呼吸チャレンジは実質次回までとして扱われる資料あり。
cTimeOrSpecialSystems: 炎炎チャージ約1/2613 → 命の呼吸チャレンジ。LT中「超炎上BURST」は3000個+1500個×約50%上乗せループ。
ceilingOrSupport: 遊タイムなし。
gameFlow: |
  通常時
   ├─ 図柄揃い 約1/399.9
   │    ├─ 約50% → 1500個+EXTRA ROUND 1500個（計3000個）→ LT「炎上バトルモード」
   │    └─ 約49% → 1500個 → 通常時
   └─ 炎炎チャージ 約1/2613 → 300個 + 「命の呼吸チャレンジ」
                                      ├─ 引き戻し約49% → LT「炎上バトルモード」
                                      └─ 失敗 → 通常時
  TOTAL LT突入率 約50.5%
  LT「炎上バトルモード」
   ├─ 図柄揃い約1/2.0 → 1500個以上 → LT継続
   │                       └─ 一部「超炎上BURST」→3000個+1500個×約50%上乗せループ→LT継続
   └─ 転落小当り約1/7.9 → LT終了 → 通常時
notes: |
  LT3.0 PLUS対応。通常RUSHと上位LTの二段階構造ではなく「炎上バトルモード」自体がLT/RUSH。
  通常時の「図柄揃い約1/399.9」「大当り1/349.9」「炎炎チャージ約1/2613」は定義が異なるため混同しない。
  LT中の約1/2.0は特図2の大当り+小当り合算。転落小当り約1/7.9とは別抽選定義。
  出玉は払い出し。3000個=1500個×2。
  SANKYO公式はTOTAL LT突入率約50.5%を直接公表しているため、経路値からの独自算出ではない。
sources:
  - url: https://www.sankyo-fever.jp/products/machine_list/pxj/spec/
    sourceType: OFFICIAL
    retrievedAt: 2026-09-22
    supports: 図柄揃い/大当り/炎炎チャージ/右打ち/転落確率、TOTAL突入率、継続率、時短250回、出玉構造
  - url: https://www.sankyo-fever.jp/collection/984/
    sourceType: OFFICIAL
    retrievedAt: 2026-09-22
    supports: 導入年月、LT3.0 PLUS、LT名称、突入経路、TOTAL約50.5%、継続約80%、超炎上BURST
  - url: https://news.p-world.co.jp/articles/30776/yugitsushin
    sourceType: INDUSTRY
    retrievedAt: 2026-09-22
    supports: 型式、ジェイビー製、基本確率、LT名称、TOTAL突入約50.5%、継続約80%、転落約1/7.9、2025年7月上旬
  - url: https://www.pachibee.jp/machines/index/125060000
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 2025-07-07導入、基本スペック、時短、払出
  - url: https://nana-press.com/kaiseki/machine/967/30173/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 一種二種混合、各確率、時短250、出玉、特図1/特図2振り分け
  - url: https://hisshobon.com/machineinfo/98019/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: LT発動契機、転落終了、残保留なし、超炎上BURST構造
confidence: OFFICIAL
status: COMPLETE_CORE
missingFields: []
conflicts: []
