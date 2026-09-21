# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- target duplicate search performed before write

## This relay
Added COMPLETE_CORE:
- `docs/lt_pachinko_db/machines/2025-03-03_p_ring_ni_kakero_1.md`

### Pリングにかけろ1
- formalModel: `Pリングにかけろ1L-5S`
- ニューギン / 2025-03-03
- 1種2種混合 / ST型 / LT搭載
- 通常図柄揃い約1/319.8、菊チャージ約1/325.8、合算約1/161.4
- K.O.RUSH中約1/161.4、超K.O.RUSH中約1/94.7、リンかけCHANCE中約1/23.5
- 初当り図柄揃いは10R約1500個。RUSH突入約60%（菊チャージからのLT昇格約0.1%を含む）
- 下位 `K.O.RUSH`: ST99回 + リンかけCHANCE5回、TOTAL約57%（ST単体約45.9%、リンかけCHANCE引き戻し約19.5%）
- LT `超K.O.RUSH`: ST129回 + リンかけCHANCE5回、TOTAL約80%（ST単体約74.5%、リンかけCHANCE引き戻し約19.5%）
- LT経路: 菊チャージから約0.1%直行、K.O.RUSH中の大当り、またはRUSH終了後リンかけCHANCE中の大当り
- K.O.RUSH特図2: 10R約1500個+LT 約67% / ST回数リセット約33%
- LT中: 約3000個60% / 約1500個10% / 約600個10% / ST回数リセット20%（払出）
- 通常初当り基準の総LT到達率は直接公表値未確認。経路値から独自算出せずUNVERIFIED。
- 2026年1月導入 `Pリングにかけろ1 129ver.` は別スペック。混同禁止。

Cross-check source families:
- 遊技通信/P-WORLD業界ニュース
- アミューズメントジャパン/P-WORLD
- パチ&スロ必勝本
- なな徹
- パチマガスロマガ

No new CONFLICT.

## Effective DB state
Previous state: 73 records / 72 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **74**
- COMPLETE_CORE: **73**
- CONFLICT: **1**
- 2025-03-03 boundary: **OPEN**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Current chronological boundary — 2025-03-03
Completed at this boundary:
1. P FAIRY TAIL これが七炎竜の力だ 89ver. — COMPLETE_CORE
2. PA大海物語5ブラックLT99ver. — COMPLETE_CORE
3. P俺の妹がこんなに可愛いわけがない。 — COMPLETE_CORE
4. Pリングにかけろ1 — COMPLETE_CORE

Pre-confirmed LT-positive candidate still to process:
1. **NEXT: eFダンジョンに出会いを求めるのは間違っているだろうか2** — SANKYO / direct-LT smart pachinko; full source QA required

Do not assume this is exhaustive. Re-enumerate all 2025-03-03 pachinko introductions from independent calendars before closing the boundary.

## Sources used this relay
- https://news.p-world.co.jp/articles/30236/yugitsushin
- https://news.p-world.co.jp/articles/30251/amusement
- https://hisshobon.com/machineinfo/96440/
- https://nana-press.com/kaiseki/machine/940/28251/
- https://nana-press.com/kaiseki/machine/940/27917/
- https://pachimaga.com/free/article/20250302/056165.php
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/498/kh02.php

## Next restart point
**eFダンジョンに出会いを求めるのは間違っているだろうか2**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicate, then collect core + LT structure and cross-check multiple source families. After processing it, independently re-enumerate the full 2025-03-03 pachinko introduction calendar before deciding whether to close the boundary.
