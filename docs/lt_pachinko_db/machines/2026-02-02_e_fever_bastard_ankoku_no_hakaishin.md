# eフィーバーBASTARD!! -暗黒の破壊神-

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: eフィーバーBASTARD!! -暗黒の破壊神-
manufacturer: SANKYO（製造: ジェイビー）
formalModelName: eフィーバーバスタードG
inspectionNumber: 510640
releaseDate: 2026-02-02
modelType: ミドル / スマパチ / LT搭載

gameType: 一種二種混合 / ST（時短）10回＋残保留4個
jackpotProbability:
- 通常時図柄揃い: 約1/399.9
- 大当り確率: 1/349.9（SANKYO公式注記。図柄揃い確率とは定義分離）
- 右打ち中図柄揃い: 約1/10.8（特図2、大当り＋小当り合算）

initialPayout:
- 図柄揃い: 1500個以上
- RUSH突入時: 3000個（1500個×2）
- ラーズちゃーじ: 300個
- 払い出し設計値

rushEntryRate: 約50%
rushContinuationRate: 約75% TOTAL（ST10回約62%＋残保留4個約32%を加味）

ltName: 超バスタードRUSH
ltEntryRoute:
- バスタードRUSHのST区間中大当り約50%（3000個＝1500個×2）で超バスタードRUSHへ。
- バスタードRUSH/超バスタードRUSHのラストバトル（残保留）で当選した場合は1500個＋超バスタードRUSHへ（残保留当選時100%）。
ltEntryRate:
- ST区間のバスタードRUSH中大当り: 約50%
- 残保留当選時: 100%
- 通常遊技全体を分母とする総LT到達率は直接公表値を確認できず、経路値から独自算出しない。
ltContinuationRate: 約75% TOTAL（通常バスタードRUSHと同じST10回＋残保留4個）
ltPayoutStructure:
- ST区間・超バスタードRUSH: 4500個（1500個×3）約30% / 3000個（1500個×2）約70%、いずれも超バスタードRUSH継続。
- ラストバトル（残保留）当選: 1500個＋超バスタードRUSH 100%。

totalPayoutDistribution:
- 通常時図柄揃いの代表振り分け: 3000個（1500個×2）＋バスタードRUSH 約50% / 1500個＋通常 約50%。
- バスタードRUSH ST区間: 3000個（1500個×2）＋超バスタードRUSH 約50% / 1500個＋バスタードRUSH 約50%。
- 超バスタードRUSH ST区間: 4500個（1500個×3）＋超バスタードRUSH 約30% / 3000個（1500個×2）＋超バスタードRUSH 約70%。
- 3000/4500個は複数大当りの合計値であり、単一大当り出玉として扱わない。

timeShortening: ST10回＋残保留4個。SANKYO公式上ST＝時短。
cTimeOrSpecialSystems: ラーズちゃーじ（300個）。通常図柄揃い約1/399.9と大当り1/349.9は定義を分離。ラーズちゃーじからバスタードRUSHへ入る経路あり。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時
   ↓ 図柄揃い / ラーズちゃーじ
  RUSH非突入 → 通常へ
   または
  3000個（1500×2）等＋バスタードRUSH（約50%）
   ↓ ST10回＋残保留4個 / TOTAL約75%
  ST区間大当り
   ├─ 約50%: 1500個＋バスタードRUSH継続
   └─ 約50%: 3000個（1500×2）＋LT「超バスタードRUSH」
  残保留当選
   └─ 1500個＋LT「超バスタードRUSH」
   ↓
  超バスタードRUSH（ST10回＋残4 / TOTAL約75%）
   ├─ ST区間: 3000個約70% / 4500個約30% → LT継続
   └─ 残保留当選: 1500個 → LT継続
   ↓ 非当選
  通常へ

notes:
- LTは継続率を上げるタイプではなく、通常RUSHと同じ約75%を維持したままST区間の出玉振り分けを3000個以上へ強化する上位状態。
- SANKYO公式は図柄揃い約1/399.9に対し大当り確率1/349.9を併記。混同しない。
- なな徹の通常時振り分け表は図柄揃い代表フローを3000個+RUSH約50% / 1500個通常約50%として掲載。一方、公式はラーズちゃーじ300個経由のRUSH突入も約1/399.9定義に含むと注記するため、チャージ経路は別記した。
- 残保留当選はST区間の50/50振り分けと異なり、1500個＋超バスタードRUSH100%。

sources:
- https://www.sankyo-fever.jp/products/machine_list/prd/spec/ — メーカー公式。確率、RUSH突入、ST/残保留、継続率、出玉定義。retrieved 2026-09-23
- https://news.p-world.co.jp/articles/32242/yugitsushin — 遊技通信/P-WORLD。型式、製造、RUSH/LT構造。retrieved 2026-09-23
- https://hazuse.com/hd/510640h/ — HAZUSE。型式、検定番号、導入日、メーカー、LT搭載。retrieved 2026-09-23
- https://nana-press.com/kaiseki/machine/1090/34773/ — なな徹。詳細振り分け、残保留、遊タイム非搭載。retrieved 2026-09-23
- https://yugi-nippon.com/pachinko-new-machine/post-74050/ — 遊技日本。下位RUSH50% LT、LT 3000/4500、残保留当選の扱い、導入日。retrieved 2026-09-23
- https://hisshobon.com/machineinfo/100042/ — 必勝本。基本スペック、LT搭載、遊タイム非搭載、ゲーム構造照合。retrieved 2026-09-23

confidence:
- overall: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- formalModelName: INDUSTRY
- probabilities/rush: OFFICIAL
- ltStructure/distributions: INDUSTRY + ANALYSIS_HIGH
- releaseDate: INDUSTRY + ANALYSIS_HIGH
- ceilingOrSupport: ANALYSIS_HIGH (multiple)

missingFields:
- 通常遊技全体基準の総LT到達率/確率（直接公表値未確認）

conflicts: []
