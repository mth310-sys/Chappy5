# Pゲゲゲの鬼太郎 獅子奮迅99Ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pゲゲゲの鬼太郎 獅子奮迅99Ver.
formalModel: Pゲゲゲの鬼太郎 獅子奮迅99Ver. RWC
manufacturer: オレンジ（藤商事系）
releaseDate: 2025-01-20
modelType: 甘デジ / LT搭載
gameType: 一種二種混合
jackpotProbability: 通常時 約1/99.9 / 右打ち中 約1/61.1
initialPayout: 10R 約900個 0.5% / 3R 約270個 99.5%（払出）
rushEntryRate: 100%（超ゲゲゲRUSH直行を含む）
rushContinuationRate: ゲゲゲRUSH 約55.5%
ltName: 超ゲゲゲRUSH
ltEntryRoute: 通常初当りの0.5%でLT直行。またはゲゲゲRUSH中大当りの10%（10R約900個）でLTへ移行。
ltEntryRate: 初当り直行0.5%。ゲゲゲRUSH中大当り時10%。通常初当り基準の総LT到達率は直接公表値を確認できないためUNVERIFIED。
ltContinuationRate: 約92.0%
ltPayoutStructure: 超ゲゲゲRUSH中は10R約900個 50% / 3R約270個 50%、いずれも超ゲゲゲRUSH継続（払出）。
totalPayoutDistribution: 特図1=10R約900個+LT 0.5% / 3R約270個+ゲゲゲRUSH 99.5%。ゲゲゲRUSH中特図2=10R約900個+LT 10% / 10R約900個+ゲゲゲRUSH 40% / 3R約270個+ゲゲゲRUSH 50%。LT中特図2=10R約900個 50% / 3R約270個 50%。
timeShortening: ゲゲゲRUSH=時短45回+残保留4個。超ゲゲゲRUSH=時短149回+残保留4個。
cTimeOrSpecialSystems: なし（確認範囲）。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時 約1/99.9
   ↓ 初当り
  0.5%: 10R約900個 → LT「超ゲゲゲRUSH」
  99.5%: 3R約270個 → ゲゲゲRUSH（45回+残保留4 / 約55.5%）
   ↓ RUSH中大当り
  10%: 10R約900個 → LT「超ゲゲゲRUSH」
  90%: ゲゲゲRUSH継続
   ↓
  超ゲゲゲRUSH（149回+残保留4 / 約92.0%）
   ↓ 大当り時はLT継続
notes: 継続率約55.5%は時短45回中約52.43%と残保留4個約6.39%の合算。LT約92.0%は時短149回中約91.45%と残保留4個約6.39%の合算。V入賞が条件、特図2に限る。出玉は払出設計値。コンプリート機能搭載。

sources:
- https://news.p-world.co.jp/articles/29503/yugitsushin — 遊技通信/P-WORLD業界ニュース。型式、通常/右確率、RUSH100%、下位約55.5%、LT約92%、2025-01-20以降導入。
- https://www.p-world.co.jp/machine/database/10166 — 基本スペック、ゲームフロー、初当りLT直行0.5%、下位RUSH中大当り10%LT、時短回数、出玉。
- https://1geki.jp/pachinko/p_gegegenokitaro99/ — 導入日、型式、LT搭載、一種二種混合、基本スペック。
- https://1geki.jp/pachinko/p_gegegenokitaro99/51/ — ゲゲゲRUSH45回+残保留、約55.5%、大当り約10%でLT。
- https://1geki.jp/pachinko/p_gegegenokitaro99/52/ — LT149回+残保留、約92.0%、LT中下位転落なし。
- https://nana-press.com/kaiseki/machine/884/26720/ — 甘デジLT、確率、時短、出玉、遊タイム非搭載。
- https://chonborista.com/pachinko/fujishouji/228682/ — 特図1/特図2の詳細振り分けをクロスチェック。

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率: UNVERIFIED（経路別の0.5%直行・下位RUSH中大当り10%は確認済み。未公表合算を推測しない）
conflicts: none
