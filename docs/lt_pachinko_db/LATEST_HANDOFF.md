# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- target duplicate search performed before write

## This relay
Added COMPLETE_CORE:
- `docs/lt_pachinko_db/machines/2025-03-03_p_oreimo.md`

### P 俺の妹がこんなに可愛いわけがない。
- formalModel: `P俺の妹がこんなに可愛いわけがない。M3`
- 京楽産業.（製造: オッケー.） / 2025-03-03
- ライトミドルLT / 1種2種混合 / ST型
- 通常 約1/199.9 / 右打ち 約1/66.1
- 初当りは2R約300個100% → 運命の審判 ST41+残4、突破約50%
- 通常RUSH `俺の妹がこんなに可愛いわけがないRUSH`: ST100+残4 / 約80%
- LT `俺の妹がこんなに可愛いわけがないRUSHがこんなに長いわけがないRUSH DX EDITION`
- LT経路: 運命の審判/通常RUSH中の8R時40%。特図2全体基準では10%。分母差として整理。
- LT初回は次回まで。以後151+残4または次回までを合わせTOTAL約92%。151+残4単体は約90.6%。
- 通常RUSH側特図2: 8R+LT/次回10% / 8R+通常RUSH15% / 6R25% / 4R25% / 2R25%。払出約1200/1200/900/600/300個。
- LT側特図2: 8R+次回10% / 8R+151+残4 15% / 6R25% / 4R25% / 2R25%。
- 残保留当選時は通常RUSH側振り分け。
- 通常初当り基準の総LT到達率は直接公表値を確認できず、経路値から独自計算せずUNVERIFIED。
- 後発159ver.と分離。

Cross-check sources:
- 遊技日本/P-WORLD業界ニュース（京楽発表）
- P-WORLD
- パチ&スロ必勝本
- なな徹
- HAZUSE

No new CONFLICT.

## Effective DB state
Previous state: 72 records / 71 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **73**
- COMPLETE_CORE: **72**
- CONFLICT: **1**
- 2025-03-03 boundary: **OPEN**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Current chronological boundary — 2025-03-03
Completed at this boundary:
1. P FAIRY TAIL これが七炎竜の力だ 89ver. — COMPLETE_CORE
2. PA大海物語5ブラックLT99ver. — COMPLETE_CORE
3. P俺の妹がこんなに可愛いわけがない。 — COMPLETE_CORE

Pre-confirmed LT-positive candidates still to process, in queue order:
1. **NEXT: Pリングにかけろ1** — ニューギン / LT-positive; full source QA required
2. eFダンジョンに出会いを求めるのは間違っているだろうか2 — SANKYO / direct-LT smart pachinko; full source QA required

Do not assume this is exhaustive. Re-enumerate all 2025-03-03 pachinko introductions from independent calendars before closing the boundary.

## Sources used this relay
- https://news.p-world.co.jp/articles/30290/nippon
- https://opt.p-world.co.jp/machine/database/10183
- https://hisshobon.com/machineinfo/96369/
- https://nana-press.com/kaiseki/machine/900/26371/
- https://hazuse.com/machine/pachinko/4P0272/
- https://p.hisshobon.jp/news/2084

## Next restart point
**Pリングにかけろ1**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicate, then collect core + LT structure and cross-check multiple source families. Keep 2025-03-03 OPEN until the full same-date calendar is independently re-enumerated.
