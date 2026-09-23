# e ULTRAMAN 4500超ライト

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e ULTRAMAN 4500超ライト
manufacturer: オッケー．（製造: 京楽産業.）
formalModel: eULTRAMAN-111verK4
releaseDate: 2026-01-19
modelType: ライト / e機 / 直LT
gameType: 一種二種混合 / ST型 / 直LT
jackpotProbability:
- 通常時図柄揃い: 約1/111.9
- 右打ち中: 約1/15.1
initialPayout:
- 2R 約300個 + LT: 33%
- 2R 約300個 + 通常: 67%
rushEntryRate:
- 33%
- RUSH = LTの直LTタイプ
rushContinuationRate:
- 非LT下位RUSHなし
ltName: リミッター解除RUSH
ltEntryRoute:
- 通常時図柄揃い後、初当りの33%から直接LTへ
ltEntryRate:
- 初当り時 33%
- 解析資料では通常遊技基準LT確率を約1/336と表現（約1/111.9 × 33%の丸め表現）。canonicalは公表された初当り時33%を保持
ltContinuationRate:
- 約50%
- ST10回、右打ち中約1/15.1
ltPayoutStructure:
- 約9000個 + LT継続: 1%
- 約4500個 + LT継続: 99%
- 約9000個 = 約1500個×6回、約4500個 = 約1500個×3回。単一10R出玉として扱わない
totalPayoutDistribution:
- 特図1: 約300個 + LT 33% / 約300個 + 通常 67%
- LT中: 約9000個 1% / 約4500個 99%、いずれもLT ST10回へ
timeShortening:
- LT リミッター解除RUSH: ST10回
cTimeOrSpecialSystems:
- P-スキップ機能搭載。通常時に専用領域へ玉を通すことでハズレ変動演出をスキップできる機能で、LT到達抽選そのものとは分離
ceilingOrSupport:
- 遊タイム非搭載

gameFlow: |
  通常時（図柄揃い約1/111.9）
   ↓ 初当り 2R 約300個
  33% → リミッター解除RUSH（LT）
  67% → 通常時
   ↓
  LT（ST10回、右約1/15.1、継続約50%）
   ↓ 大当り
  99% → 約4500個（約1500個×3回） → LT ST10回
  1% → 約9000個（約1500個×6回） → LT ST10回
   ↓ ST10回非当選
  通常時
notes:
- 京楽公式が「直LTタイプ」、通常約1/111、大当り33%でLT、LT名「リミッター解除RUSH」、ST10回/約50%、4500/9000個を直接明示。
- 遊技通信が型式 `eULTRAMAN-111verK4`、オッケー.ブランド/京楽産業.製、約1/111.9→約1/15.1、RUSH33%/約50%、導入2026-01-19を明示。
- 4500/9000個はそれぞれ1500個×3/×6であり単一大当りの払出ではない。
- 2025年の `e ULTRAMAN 2400★80` と別スペック。
sources:
- https://www.kyoraku.co.jp/news/detail/857 — KYORAKU公式。直LT、通常約1/111、大当り33%でLT、LT名、ST10回/約50%、4500=1500×3、9000=1500×6。取得2026-09-23
- https://news.p-world.co.jp/articles/32557/yugitsushin — 遊技通信。型式、製造、通常/右確率、RUSH33%/約50%、導入日、4500/9000定義。取得2026-09-23
- https://pachimaga.com/free/mach/maker-p/ok/064590.php — パチマガスロマガ。メーカー、型式、導入日、直LT、通常/右確率、LT中99%/1%出玉。取得2026-09-23
- https://p-johojima.jp/machine_spec/post-21868/ — 情報島＋。通常/右確率、RUSH33%、ST10/約50%、通常/右振分。取得2026-09-23
- https://p.hisshobon.jp/machine/4677/1/113195 — パチ＆スロ必勝本。1種2種、LT33%、ST10/約50%、4500/9000、遊タイム非搭載。取得2026-09-23
- https://nana-press.com/kaiseki/machine/1087/34567/ — なな徹。特図1 33/67%、LT中9000 1%/4500 99%、遊タイム非搭載。取得2026-09-23
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
missingFields: none
conflicts: none
