# PAスーパー海物語IN地中海2

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: PAスーパー海物語IN地中海2
manufacturer: 三洋物産
releaseDate: 2024-08-05
modelType: 甘デジ / 遊パチ

gameType: 1種2種混合 / 突破型時短RUSH + LT時短
jackpotProbability: 通常時 約1/89.8。右打ち中 約1/34.8（大当り約1/89.8と特図2小当り約1/56.9の合算）。
initialPayout: 4R約320個 or 6R約480個（払出）。初当り後は100%チャンスタイムへ。
rushEntryRate: チャンスタイム突破期待値 約50.3%（時短20回約44.1% + 残保留4個約11.0%の合算）。
rushContinuationRate: 地中海JOURNEY 約75.2%（時短44回約72.2% + 残保留4個約11.0%の合算）。
ltName: PREMIUM VACATION
ltEntryRoute: チャンスタイム/地中海JOURNEY等の右打ち中10R大当り（特図2振り分け2%）で発動。
ltEntryRate: 特図2大当りの2%。通常初当り基準のLT発生割合は約26.1回に1回、LT初当り確率約1/2346.03と解析資料に掲載。
ltContinuationRate: 約95%（時短100回の継続期待値約94.5%。残保留4個での当選は地中海JOURNEY振り分け）。
ltPayoutStructure: PREMIUM VACATION中も4R約320個 / 6R約480個 / 10R約800個。特図2振り分けは10R 2%、6R 48%、4R 50%として解析資料で一致。LT中の大当りは時短100回継続。ただし残保留当選は地中海JOURNEY側振り分け。
totalPayoutDistribution: 特図1は4R約320個または6R約480個で時短20回。特図2は10R約800個2%、6R約480個48%、4R約320個50%。
timeShortening: チャンスタイム20回+残保留4、地中海JOURNEY44回+残保留4、PREMIUM VACATION100回（残保留4は地中海JOURNEY振り分け）。
cTimeOrSpecialSystems: なし確認。右打ち小当り合算型。
ceilingOrSupport: 遊タイムなし

gameFlow: |
  通常時 約1/89.8
   ↓ 初当り（4R約320 / 6R約480）
  チャンスタイム 時短20回+残保留4（突破約50.3%）
   ↓ 引き戻し
  地中海JOURNEY 時短44回+残保留4（継続約75.2%）
   ├─ 特図2大当り98% → 地中海JOURNEY継続
   └─ 特図2 10R 2% → LT「PREMIUM VACATION」
        ↓ 時短100回、継続約95%
      大当り継続中はPREMIUM VACATION（残保留当選は地中海JOURNEY振り分け）

notes:
- 海物語シリーズ初のLT搭載機としてメーカー公式リリースで確認。
- PREMIUM VACATION突入時期待出玉は業界資料で約8,480個。
- LT発生割合約26.1初当りに1回 / 約1/2346.03は解析資料の直接掲載値で、推測計算ではない。

sources:
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20240513.pdf — SANYO公式プレスリリース。LT搭載、型式、トップ導入2024-08-05。取得 2026-09-21。
- https://news.p-world.co.jp/articles/27838/nippon — 遊技日本/P-WORLD。基本確率、各RUSH継続、出玉、時短。取得 2026-09-21。
- https://news.p-world.co.jp/articles/28657/greenbelt — グリーンべると/P-WORLD。8/5導入、ゲームフロー、LT約95%、期待出玉約8,480個。取得 2026-09-21。
- https://www.pachibee.jp/machines/about/124060007 — パチビー。通常/右確率、時短20/44/100、各継続期待値、払出。取得 2026-09-21。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sanyo_pachi/349/kh02.php — パチマガスロマガ。LT約1/2346.03、初当り約26.1回に1回、特図2 2%契機、遊タイムなし。取得 2026-09-21。
- https://nana-press.com/kaiseki/machine/777/21725/ — なな徹。スペック/時短/出玉照合。取得 2026-09-21。

confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
missingFields: none core
conflicts: none
