# eフィーバー炎炎ノ消防隊2 紅丸ver.

machineName: eフィーバー炎炎ノ消防隊2 紅丸ver.
manufacturer: SANKYO（製造: ジェイビー）
formalModel: eフィーバー炎炎ノ消防隊2MS
releaseDate: 2025-07-07
modelType: ミドル / スマパチ / LT3.0 PLUS
gameType: 一種二種混合 / 転落型LT / LT直撃型
jackpotProbability: 通常時図柄揃い 約1/399.9（1500個大当りと命の呼吸チャレンジ突入大当りの合算） / 大当り確率 1/349.9 / 炎炎チャージ 約1/2186 / LT中図柄揃い 約1/2.0（特図2、大当り+小当り合算） / 転落小当り 約1/5.3
initialPayout: 通常時 300個 / 1500個 / 3000個（1500個×2、払い出し）
rushEntryRate: 通常RUSHは存在せず、RUSH=LT「炎上バトルモード」。特図1突入約50%、命の呼吸チャレンジ引き戻し約50%を含むTOTAL約52%
rushContinuationRate: RUSH=LT。時短250回（転落小当り当選で終了）、継続約73%
ltName: 炎上バトルモード
ltEntryRoute: 図柄揃い時の約50%で1500個+EXTRA ROUND 1500個=計3000個を獲得してLT直行。別経路として炎炎チャージの一部から「命の呼吸チャレンジ」へ進み、約1/2の図柄揃いを引けばLT突入。
ltEntryRate: TOTAL約52%（特図1突入約50% + 命の呼吸チャレンジ引き戻し経路を含む公表TOTAL値）
ltContinuationRate: 約73%。時短250回、転落小当り約1/5.3当選で終了。
ltPayoutStructure: LT中の大当りは1500個または「超炎上BURST」4500個（1500個×3）+3000個×約50%上乗せループ。超炎上BURST平均発生率は解析資料で約26%。状態表示別では白約14% / 緑約33% / 青約50%の発生率資料あり。
totalPayoutDistribution: 通常時図柄揃い/特図1は解析資料で3000個+LT 約50% / 300個+命の呼吸チャレンジ 約4% / 1500個通常 約46%。LT中は白ランプ=超炎上BURST約14%/1500個約86%、緑=約33%/約67%、青=約50%/約50%。
timeShortening: LT「炎上バトルモード」=時短250回。ただし転落小当り当選で終了。命の呼吸チャレンジは1回転系のLT再突入契機。
cTimeOrSpecialSystems: 炎炎チャージ約1/2186の一部 → 命の呼吸チャレンジ。LT中「超炎上BURST」は4500個+3000個×約50%上乗せループ。
ceilingOrSupport: 遊タイムなし。
gameFlow: |
  通常時
   ├─ 図柄揃い 約1/399.9
   │    ├─ 約50% → 1500個+EXTRA ROUND 1500個（計3000個）→ LT「炎上バトルモード」
   │    └─ 非LT側 → 1500個通常、または一部300個+命の呼吸チャレンジ
   └─ 炎炎チャージ 約1/2186 → 一部「命の呼吸チャレンジ」
                                      ├─ 引き戻し約50% → LT「炎上バトルモード」
                                      └─ 失敗 → 通常時
  TOTAL LT突入率 約52%
  LT「炎上バトルモード」
   ├─ 図柄揃い約1/2.0 → 1500個または超炎上BURST → LT継続
   └─ 転落小当り約1/5.3 → LT終了 → 通常時
notes: |
  LT3.0 PLUS対応。下位RUSHはなく「炎上バトルモード」自体がLT/RUSH。
  シンラver.と同時導入だが別スペック。紅丸ver.はTOTAL突入約52%、継続約73%、転落約1/5.3、超炎上BURSTは4500個+3000個×約50%ループ。
  通常時の図柄揃い約1/399.9、大当り1/349.9、炎炎チャージ約1/2186は定義が異なるため混同しない。
  出玉は払い出し。3000個=1500個×2、4500個=1500個×3。
  SANKYO公式/業界資料がTOTAL約52%を直接公表しているため、経路値から独自算出していない。
sources:
  - url: https://www.sankyo-fever.jp/products/machine_list/pxj/spec/
    sourceType: OFFICIAL
    retrievedAt: 2026-09-22
    supports: 基本スペック、TOTAL突入率、継続率、時短、出玉構造
  - url: https://www.sankyo-fever.jp/collection/985/
    sourceType: OFFICIAL
    retrievedAt: 2026-09-22
    supports: 導入年月、LT3.0 PLUS、LT突入ゲームフロー、超炎上BURST
  - url: https://news.p-world.co.jp/articles/30777/yugitsushin
    sourceType: INDUSTRY
    retrievedAt: 2026-09-22
    supports: 型式eフィーバー炎炎ノ消防隊2MS、ジェイビー製、図柄揃い1/399.9、右約1/2.0、TOTAL約52%、継続約73%、転落約1/5.3、2025年7月上旬
  - url: https://www.pachibee.jp/machines/kouryaku/125060001
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 2025-07-07導入、LT搭載
  - url: https://nana-press.com/kaiseki/machine/967/30658/
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: LT約73%、図柄揃い1/2.0、転落1/5.3、超炎上BURST平均発生約26%、1500/4500+α
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/538/kh04.php
    sourceType: ANALYSIS_HIGH
    retrievedAt: 2026-09-22
    supports: 直LT構造、炎炎チャージ/命の呼吸チャレンジ、LTゲームフロー、超炎上BURST4500+3000×50%ループ
confidence: OFFICIAL
status: COMPLETE_CORE
missingFields: []
conflicts: []
