# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- current machine files searched for duplicate e東京喰種 before write

## This relay — Added COMPLETE_CORE
### e東京喰種
path: `docs/lt_pachinko_db/machines/2025-04-21_e_tokyo_ghoul.md`
- ビスティ / SANKYO系 / 2025-04-21 / 一種二種混合・普電ST。
- 図柄揃い約1/399.9、喰種チャージ約1/399.9、合算大当り約1/199.9、右約1/95.3。
- RUSH突入時点でLT `HYPER喰種RUSH` 発動。下位RUSHなし。
- 公表RUSH/LT突入率約51%（図柄揃い約50% + 喰種チャージ一部の経路）。この約51%の分母定義を勝手に合算約1/199.9へ置換せず保存。
- LTはST130回、継続約75%。普電STのため残保留消化なし。
- 特図1: 約1500個+LT 50% / 約300個+LT 1% / 約1500個通常49%。
- LT中: 約3000個（1500×2）97% / 約6000個（1500×4）3%、いずれもST130回へ。
- 公式機種サイト、必勝本、一撃、なな徹で照合。新規CONFLICTなし。
- 2026年 `e東京喰種 超デカ超一撃ver.` は別スペックのため混同禁止。

Sources:
- https://www.pachi-e-tokyoghoul.jp/
- https://hisshobon.com/machineinfo/97076/
- https://hisshobon.com/machineinfo/97077/
- https://hisshobon.com/machineinfo/97078/
- https://1geki.jp/pachinko/e_tokyoghoul/
- https://nana-press.com/kaiseki/machine/933/28623/

## Boundary state
### 2025-04-07 — CLOSED
6/6 regular pachinko releases audited and all LT-positive records represented. Do not reprocess absent concrete QA issue.

### 2025-04-21 — OPEN
Regular schedule queue:
1. e東京喰種 — **COMPLETE_CORE this relay**
2. Pゾンビランドサガ — LT-positive candidate; **next machine**
3. P痛いのは嫌なので防御力に極振りしたいと思います。 — LT-positive candidate; queue after ゾンビランドサガ
4. PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver. — verify LT/non-LT before registration

Boundary special case still unresolved:
- `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` had limited Tokyo/Shinjuku advance introduction from 2025-04-21. Before closing 4/21, resolve canonical chronology treatment against later nationwide rollout using existing DB convention; do not silently omit or guess date.

Discovery sources retained:
- https://news.p-world.co.jp/articles/30646/greenbelt
- https://sulocale.sulopachinews.com/archives/イベント/4月21日導入開始予定機種
- https://p-johojima.jp/news/post-4390/

## Effective DB state
Previous effective state: 84 records / 83 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **85**
- COMPLETE_CORE: **84**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth.

## Next restart point
**Continue 2025-04-21 with `Pゾンビランドサガ`. Then `P痛いのは嫌なので防御力に極振りしたいと思います。`; verify `PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver.`; resolve `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` advance-introduction chronology before closing the boundary.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
