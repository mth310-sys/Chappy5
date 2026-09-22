# eベルセルク無双 第2章

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: eベルセルク無双 第2章
manufacturer: ニューギン
modelName: eベルセルク無双2H3
releaseDate: 2025-10-06
modelType: ミドル / スマパチ / LT3.0 PLUS
gameType: 2種時短 / ST型

## Core spec
- jackpotProbability:
  - 図柄揃い: 約1/399.9
  - チャージ: 約1/2804.4
  - 図柄揃い+チャージ合算: 約1/349.9
  - 放魔RUSH中: 約1/195.1
  - 放魔RUSH真紅中: 約1/97.8
- initialPayout / 特図1図柄揃い時主要振り分け:
  - 約4500個（1500個×3）+ 放魔RUSH真紅: 約0.1%
  - 約3000個（1500個×2）+ 放魔RUSH: 約74.9%
  - 約1500個 + 通常: 約25.0%
- rushEntryRate: 約75%（白7揃いとチャージ昇格を含む公表TOTAL）
- rushContinuationRate: 放魔RUSH突破率 約50%
- timeShortening: 放魔RUSH 133回 / 放魔RUSH真紅 133回。LTは133回スルーで通常へ。普図抽選のため残保留なし。

## Lucky Trigger
- ltName: 放魔RUSH真紅
- ltEntryRoute:
  1. 初当り白7揃い（図柄揃い振り分け約0.1%）→約4500個→LT直行
  2. 放魔RUSH中に大当り→約1500個→LT
  3. チャージ「パックフィッシング」からLT昇格経路あり（具体昇格率は直接資料未確認）
- ltEntryRate: 通常遊技全体を分母とした総LT到達率の直接公表値は未確認。経路値から独自算出しない。
- ltContinuationRate: 約75%
- ltPayoutStructure: 放魔RUSH真紅中は約3000個（1500個×2）100% + LT継続
- totalPayoutDistribution:
  - 放魔RUSH中: 約1500個 100% + LTへ
  - LT中: 約3000個（1500個×2）100% + LT継続
- cTimeOrSpecialSystems: チャージからのLT昇格あり。Cタイム/遊タイムは確認資料上なし。
- ceilingOrSupport: 遊タイム非搭載

## Game flow
通常時
→ 図柄揃い
  → 約0.1%: 約4500個 → LT「放魔RUSH真紅」
  → 約74.9%: 約3000個 → 「放魔RUSH」133回
      → 133回内に約1/195.1の大当り（突破約50%）
      → 約1500個 → LT「放魔RUSH真紅」
      → スルー → 通常時
  → 約25.0%: 約1500個 → 通常時
→ チャージ約1/2804.4
  → 一部でLT昇格（具体割合未確認）

LT「放魔RUSH真紅」
→ ST133回 / 約1/97.8 / 継続約75%
→ 大当りは約3000個（1500個×2）100% + LT継続
→ 133回スルー → 通常時

## Notes
- 約4500個・約3000個は単一大当り出玉ではなく、それぞれ1500個×3、1500個×2の合計払出として保存。
- 図柄揃い約1/399.9、チャージ約1/2804.4、合算約1/349.9は定義を分離。
- 公表RUSH突入約75%は白7直行とチャージ昇格を含むTOTAL。図柄揃い振り分け約74.9%とは分母/定義が異なるため競合扱いしない。
- 通常遊技全体基準の総LT到達率は推測しない。

## Sources
1. HAZUSE — https://hazuse.com/hd/510362h/ — retrieved 2026-09-22 — ANALYSIS_HIGH
2. P-WORLD — https://www.p-world.co.jp/machine/database/10348 — retrieved 2026-09-22 — INDUSTRY / ANALYSIS_HIGH
3. パチ&スロ必勝本 基本スペック — https://hisshobon.com/machineinfo/99253/ — retrieved 2026-09-22 — ANALYSIS_HIGH
4. パチ&スロ必勝本 LT解説 — https://hisshobon.com/machineinfo/99255/ — retrieved 2026-09-22 — ANALYSIS_HIGH
5. パチマガスロマガ 機種概要 — https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/509/kh01.php — retrieved 2026-09-22 — ANALYSIS_HIGH
6. K-Navi — https://p-kn.com/pachinko/4398/ — retrieved 2026-09-22 — ANALYSIS_HIGH

confidence: ANALYSIS_HIGH
missingFields:
- チャージからLTへ昇格する具体割合
- 通常遊技全体基準の総LT到達率（直接公表値）
conflicts: none
