# e東京喰種

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e東京喰種
manufacturer: ビスティ / SANKYO系
releaseDate: 2025-04-21
modelType: スマパチ / ライトミドル（LT搭載）
gameType: 一種二種混合 / 普電ST

## Core spec
- jackpotProbability:
  - 図柄揃い: 約1/399.9
  - 喰種チャージ: 約1/399.9
  - 上記合算大当り: 約1/199.9
  - HYPER喰種RUSH中: 約1/95.3
- initialPayout:
  - 図柄揃い10R: 約1500個（払出）
  - 喰種チャージ2R: 約300個（払出）
- rushEntryRate: 約51%（チャージからの突入を含む公表TOTAL）
- rushContinuationRate: 約75%
- timeShortening: HYPER喰種RUSH ST130回。普電STのため残保留消化なし。
- ceilingOrSupport: 遊タイム非搭載

## Lucky Trigger
- ltName: HYPER喰種RUSH
- ltEntryRoute:
  1. 通常時図柄揃い後のチャレンジ成功。図柄揃い時は約50%でLT/RUSH。
  2. 喰種チャージの一部（約1%のLT振り分け）。
- ltEntryRate: 約51%（メーカー公式のRUSH突入率表記。図柄揃い+チャージの経路表記を含む。通常時の全当選契機を同一分母へ置き直した独自到達率は保存しない）
- ltContinuationRate: 約75%
- ltPayoutStructure:
  - 約3000個（10R×2）+ ST130回: 約97%
  - 約6000個（10R×4）+ ST130回: 約3%
  - 公式は「ALL3000個 or 6000個+α搭載」と表記。払出表記。

## Major payout distribution
### 特図1 / ヘソ
- 10R 約1500個 + HYPER喰種RUSH: 約50%
- 2R 約300個 + HYPER喰種RUSH: 約1%
- 10R 約1500個 + 通常: 約49%

### 特図2 / HYPER喰種RUSH
- 10R×4 約6000個 + HYPER喰種RUSH: 約3%
- 10R×2 約3000個 + HYPER喰種RUSH: 約97%

## Game flow
通常時
→ 図柄揃い約1/399.9: 約1500個 → チャレンジ成功でLT「HYPER喰種RUSH」 / 失敗で通常
または
→ 喰種チャージ約1/399.9: 約300個 → 一部でLT
→ HYPER喰種RUSH（LT） ST130回 / 約1/95.3 / 継続約75%
→ 大当りは約97%が約3000個、約3%が約6000個（いずれもLT継続）
→ ST130回スルーで通常時。普電STのため残保留抽選なし。

## Notes / definition handling
- RUSH突入時点でLT発動する直LT型。下位RUSHは存在しない。
- 公式サイトは図柄揃い約1/399.9、喰種チャージ約1/399.9、合算大当り約1/199.9、RUSH突入約51%、継続約75%、右打ちALL3000個 or 6000個+αを掲載。
- 必勝本は図柄揃い約1/399、チャージ約1/399.9、図柄揃い約50%・チャージ約1%のLT経路、130回、約75%、97%/3%振り分けを掲載。丸め/定義差として整合。
- 「約51%」は公表RUSH突入率の定義をそのまま保存し、合算約1/199.9を分母に51%と単純解釈しない。通常初当り基準の別定義の総LT到達率を独自計算しない。
- 2026年の「e東京喰種 超デカ超一撃ver.」とは別スペック。混同禁止。

## Sources
1. 公式機種サイト（e東京喰種） https://www.pachi-e-tokyoghoul.jp/ — retrieved 2026-09-21 — OFFICIAL
2. パチ&スロ必勝本 基本スペック https://hisshobon.com/machineinfo/97076/ — retrieved 2026-09-21 — ANALYSIS_HIGH
3. パチ&スロ必勝本 大当り振り分け https://hisshobon.com/machineinfo/97077/ — retrieved 2026-09-21 — ANALYSIS_HIGH
4. パチ&スロ必勝本 LT解説 https://hisshobon.com/machineinfo/97078/ — retrieved 2026-09-21 — ANALYSIS_HIGH
5. 一撃 e東京喰種 https://1geki.jp/pachinko/e_tokyoghoul/ — retrieved 2026-09-21 — ANALYSIS_HIGH
6. なな徹 スペック詳細 https://nana-press.com/kaiseki/machine/933/28623/ — retrieved 2026-09-21 — ANALYSIS_HIGH

confidence: OFFICIAL + ANALYSIS_HIGH
missingFields: []
conflicts: []
