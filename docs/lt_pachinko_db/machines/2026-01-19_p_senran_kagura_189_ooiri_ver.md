# P閃乱カグラ 189大入りver.

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: P閃乱カグラ 189大入りver.
manufacturer: ディ・ライト（D-light / 大一商会系）
formalModel: P閃乱カグラLTN-FS
releaseDate: 2026-01-19
modelType: ライトミドル / P機 / 大入りスタート
gameType: 一種二種混合 / ST型 / 下位RUSH→LT
jackpotProbability:
- 通常時: 1/189.4
- 右打ち中: 1/99.9
initialPayout:
- 2R 約300個 + 絶・秘伝RUSH（ST90回）: 50%
- 2R 約300個 + 通常: 50%
rushEntryRate:
- 50%
rushContinuationRate:
- 絶・秘伝RUSH: 約60%
- ST90回、右打ち中当選確率1/99.9
ltName: 絶・秘伝RUSH（LT）
ltEntryRoute:
- 下位「絶・秘伝RUSH」中の大当り約11%で「絶秘伝忍法BONUS4200」（約4200個 = 約1050個×4回）を獲得し、LTへ突入
ltEntryRate:
- RUSH中大当りの約11%
- 通常遊技基準のLT突入率: 1/2827（業界/解析資料の直接公表値）
ltContinuationRate:
- 約75%
- ST136回、右打ち中当選確率1/99.9
ltPayoutStructure:
- LT中: 約4200個 + LT継続 約50%
- LT中: 約1050個 + LT継続 約50%
- 約4200個 = 約1050個×4回。単一7Rの払出として扱わない
totalPayoutDistribution:
- 特図1: 約300個 + RUSH 50% / 約300個 + 通常 50%
- 下位RUSH中: 約4200個 + LT 約11% / 約1050個 + 下位RUSH継続 約89%
- LT中: 約4200個 + LT 約50% / 約1050個 + LT 約50%
- 基本払出: 2R 約300個 / 7R 約1050個。4200個は7R×4回の合計
timeShortening:
- 下位 絶・秘伝RUSH: 90回（普図変動/ST表記）
- LT 絶・秘伝RUSH: 136回（普図変動/ST表記）
cTimeOrSpecialSystems:
- 大入りスタート搭載
- LT突入時期待出玉 約12122個という公表値あり。ただし「LT突入までの平均獲得出玉約4987個 + LT期待出玉約7135個」の合算値で、LT単体期待出玉と混同しない
ceilingOrSupport:
- 遊タイム非搭載

gameFlow: |
  通常時（1/189.4）
   ↓ 初当り 2R 約300個
  50% → 絶・秘伝RUSH（下位、ST90回、継続約60%）
  50% → 通常時
   ↓ 下位RUSH中大当り（1/99.9）
  約89% → 7R 約1050個 → 下位RUSH ST90回
  約11% → 約4200個（約1050個×4回） → 絶・秘伝RUSH（LT）
   ↓
  LT（ST136回、継続約75%）
   ↓ 大当り
  約50% → 約4200個（約1050個×4回） → LT継続
  約50% → 約1050個 → LT継続
   ↓ ST136回非当選
  通常時
notes:
- 遊技通信、グリーンべると、遊技日本、複数解析資料で通常1/189.4、右1/99.9、RUSH50%/約60%、下位大当り約11%でLT、LT約75%、4200個=1050個×4が一致。
- 正式型式 `P閃乱カグラLTN-FS` とディ・ライト製を業界資料で直接確認。
- 通常遊技基準LT突入率 `1/2827` は情報島＋および遊技日本が直接掲載しているため、経路確率から独自算出した値ではない。
- LT中4200個比率約50%は業界記事・複数解析で一致。
- パチマガスロマガFREE本文に通常時「198.4分の1」とする箇所があるが、同サイトの機種名/他資料および業界一次系資料は1/189.4で一致し、単独の本文誤記と判断。競合値としてcanonicalには採用しない。
- 2025年登場の `e閃乱カグラ` と別スペック。大入りスタート搭載の2026年ライトミドル版として分離。
sources:
- https://news.p-world.co.jp/articles/32548/yugitsushin — 遊技通信。型式、製造、1/189.4→1/99.9、RUSH50%/約60%、RUSH大当り約11%でLT、LT約75%、導入日。取得2026-09-23
- https://news.p-world.co.jp/articles/32509/greenbelt — グリーンべると。通常/右確率、初当り振分、ST90/136、下位11%、LT中4200個約50%、4200=1050×4。取得2026-09-23
- https://news.p-world.co.jp/articles/32599/nippon — 遊技日本。型式、LT突入率1/2827、ST90/136、4200=1050×4、導入日。取得2026-09-23
- https://1geki.jp/pachinko/p_senrankagura189ooiri/ — 一撃。型式、導入日、主要確率、RUSH/LT構造、期待出玉定義。取得2026-09-23
- https://1geki.jp/pachinko/p_senrankagura189ooiri/52/ — 一撃。LT正式名称、下位大当り約11%でLT、ST136、約75%、LT中4200個約50%。取得2026-09-23
- https://nana-press.com/kaiseki/machine/1108/34442/ — なな徹。1種2種、通常/右確率、ST90/136、払出2R300/7R1050、遊タイム非搭載。取得2026-09-23
- https://p.hisshobon.jp/machine/4673/1/113112 — パチ＆スロ必勝本。RUSH/LT回数・継続、下位11%、払出、遊タイム非搭載。取得2026-09-23
- https://p-johojima.jp/machine_spec/post-24027/ — 情報島＋。LT突入率1/2827、通常/右確率、ST90/136、主要振分。取得2026-09-23
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: none
conflicts: none
