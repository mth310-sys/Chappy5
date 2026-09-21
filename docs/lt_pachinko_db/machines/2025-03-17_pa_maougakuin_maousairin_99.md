# PA魔王学院の不適合者 魔王再臨 99Ver

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: PA魔王学院の不適合者 魔王再臨 99Ver
modelName: PA魔王学院の不適合者 魔王再臨99ver FVX
manufacturer: 藤商事
releaseDate: 2025-03-17
modelType: 甘デジ / P機
gameType: 一種二種混合 / 普図抽選 / ストック型LT
jackpotProbability: 通常時1/99.9。魔王学院バトルチャレンジ中の電チューロング開放1/117.2、魔王学院RUSH中1/59.0。
initialPayout: 約270個（払出）。通常初当り0.5%で魔王学院RUSH80回、99.5%で魔王学院バトルチャレンジ50回。
rushEntryRate: 魔王学院バトルチャレンジ成功約35%。通常初当り0.5%はRUSH直行。TOTALの単一直接値は保存せず経路別に保持。
rushContinuationRate: 魔王学院RUSH 約75%
ltName: 暴虐の魔王BURST
ltEntryRoute: 魔王学院RUSH中大当りの約30.7%でLIMITED BURST CHANCE（LBC）へ。LBC成功率約40%でLT「暴虐の魔王BURST」へ。
ltEntryRate: RUSH中大当り→LBC 約30.7%、LBC成功約40%。通常初当り基準の総LT到達率は直接公表値未確認のため独自算出しない。
ltContinuationRate: 暴虐の魔王BURST突入時 約92%（平均大当り回数からの逆算値）。V Attack Stock4個保持時の最高継続率約96%は別定義。
ltPayoutStructure: 暴虐の魔王BURST中は約900個 約50.5% / 約270個 約49.5%。暴虐の魔王BURST 64%（ストック獲得率約60%）/ EXTRA 36%（約72%）。ストック終了後は魔王学院RUSH80回へ。
totalPayoutDistribution: 通常時 約270個+RUSH 0.5% / 約270個+バトルチャレンジ 99.5%。バトルチャレンジ中 約900個50.5% / 約270個49.5%（いずれもRUSHへ）。RUSH中 約900個+LBC30.7% / 約900個+RUSH19.8% / 約270個+RUSH49.5%。払出設計値。
timeShortening: 魔王学院バトルチャレンジ50回 / 魔王学院RUSH80回
cTimeOrSpecialSystems: LBCはLT発動前のストック獲得チャンス。LTはストック型で、ストック終了後も下位RUSHへ復帰。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時 1/99.9
   ↓ 初当り 約270個
   ├─ 0.5% → 魔王学院RUSH 80回（約75%）
   └─ 99.5% → 魔王学院バトルチャレンジ 50回（成功約35%）
                    ↓ 成功
                 魔王学院RUSH
                    ↓ 大当りの約30.7%
                 LIMITED BURST CHANCE（成功約40%）
                    ↓ 成功
                 LT「暴虐の魔王BURST」（約92%）
                    ↓ ストック終了
                 魔王学院RUSHへ復帰

notes:
- 業界一次記事（遊技通信）で型式、1/99.9、右打ち状態別確率、チャレンジ約35%、下位約75%、LBC経路30.7%→成功40%、LT約92%を確認。
- P-WORLD、必勝本、HAZUSE、なな徹で主要値・振り分けを照合。
- LT約92%と最高約96%は定義が異なるため混同しない。
- LT突入時期待出玉約10,361個は「LTまで約2,785個＋LT後約7,576個」の合算期待値であり、単一大当り出玉ではない。

sources:
- https://news.p-world.co.jp/articles/30026/yugitsushin — 遊技通信 / 業界一次 / 2025-01-20
- https://www.p-world.co.jp/machine/database/10204 — P-WORLD / LT搭載・詳細振り分け・ゲームフロー
- https://p.hisshobon.jp/machine/4468/1/107338 — パチ&スロ必勝本 / 基本スペック・LBC・LT
- https://hazuse.com/machine/pachinko/PX0276/ — HAZUSE / 型式・導入日・LT構造
- https://nana-press.com/kaiseki/machine/912/27592/ — なな徹 / 状態別確率・出玉・遊タイム非搭載

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率の直接公表値は未確認。独自算出しない。
conflicts: none
