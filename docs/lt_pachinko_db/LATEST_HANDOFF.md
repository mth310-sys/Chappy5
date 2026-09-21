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
- `docs/lt_pachinko_db/machines/2025-03-03_pa_oumi5_black_lt99.md`

### PA大海物語5ブラックLT99ver.
- formalModel: `PA大海物語5HLD`
- 三洋物産 / 2025-03-03
- 甘デジLT / 1種2種混合 / 時短型
- 通常 約1/99.9 / 右打ち実質 約1/41.0
- 初当り全て3R約330個、70%で通常ST / 30%通常
- 通常ST: 時短35+残4 / TOTAL約62%
- LT `GOLDパールRUSH HYPER`: 通常ST中の特図2大当り10%で発動
- LT: 時短110回 / 約93%（110回の期待値約93.3%）
- 特図2: 8R約880個40% / 3R約330個60%。うち10%が8R+LT
- パチマガスロマガの直接解析値としてLT突入率約1/1026を保存。独自合算値ではない。
- LT後の残保留当選は通常ST振り分け。
- 右打ち約1/41.0は大当り約1/99.9と小当り約1/69.7の合算値として定義分離。

Cross-check sources:
- HAZUSE
- パチマガスロマガFREE
- 一撃
- パチビー

No new CONFLICT.

## Effective DB state
Previous state: 71 records / 70 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **72**
- COMPLETE_CORE: **71**
- CONFLICT: **1**
- 2025-03-03 boundary: **OPEN**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Current chronological boundary — 2025-03-03
Completed at this boundary:
1. P FAIRY TAIL これが七炎竜の力だ 89ver. — COMPLETE_CORE
2. PA大海物語5ブラックLT99ver. — COMPLETE_CORE

Pre-confirmed LT-positive candidates still to process, in queue order:
1. **NEXT: P俺の妹がこんなに可愛いわけがない。** — 京楽 / 1/199.9 / lower RUSH about 80% / LT long RUSH TOTAL about 92%; full source QA required
2. Pリングにかけろ1 — ニューギン / LT-positive; full source QA required
3. eFダンジョンに出会いを求めるのは間違っているだろうか2 — SANKYO / direct-LT smart pachinko; full source QA required

Do not assume this is exhaustive. Re-enumerate all 2025-03-03 pachinko introductions from independent calendars before closing the boundary.

## Sources used this relay
- https://hazuse.com/machine/pachinko/PX0270/
- https://pachimaga.com/free/article/20241225/056326.php
- https://pachimaga.com/free/article/20250228/056154.php
- https://1geki.jp/pachinko/pa_oumi5bklt99/51/
- https://www.pachibee.jp/machines/about/125020004

## Next restart point
**P俺の妹がこんなに可愛いわけがない。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicate, then collect core + LT structure and cross-check multiple source families. Keep 2025-03-03 OPEN until the full same-date calendar is independently re-enumerated.
