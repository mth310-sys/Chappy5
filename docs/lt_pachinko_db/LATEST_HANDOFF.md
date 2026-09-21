# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- existing target duplicate checks performed before writes

## This relay
Added COMPLETE_CORE:
- `docs/lt_pachinko_db/machines/2025-03-03_p_fairy_tail_nanatsu_enryu_89ver.md`

### P FAIRY TAIL これが七炎竜の力だ 89ver.
- formalModel: `P FAIRY TAIL 89Ver．FWZ`
- 藤商事 / 2025-03-03
- 甘デジLT / 2種 / ST型
- normal 約1/89（詳細解析1/89.8） / right 約1/59（詳細解析1/59.4）
- 初当り3R約210個、FAIRY RUSH 50% / 通常50%
- FAIRY RUSH: ST50+残4 / 約60%
- FAIRY RUSH中大当り12.5% → 一夜モードでLT発動
- 一夜モード: 実質次回、約40%で約1500個上乗せループ
- LT `七炎竜RUSH`: ST120+残4 / 約88%
- FAIRY RUSH中: 1500個+一夜12.5% / 1500個+下位27.5% / 210個+下位60%
- LT中: 1500個+一夜40% / 210個+LT60%
- normal initial jackpot基準の総LT到達率は直接値未確認。経路値から独自合算せずUNVERIFIED。
- 2024-04-22ミドル版とは別スペックとして分離。

Cross-check sources:
- HAZUSE
- 一撃
- パチ&スロ必勝本
- パチビー
- パチンコチュートリアル

No new CONFLICT.

## Effective DB state
Previous state: 70 records / 69 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **71**
- COMPLETE_CORE: **70**
- CONFLICT: **1**
- 2025-03-03 boundary: **OPEN**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Current chronological boundary — 2025-03-03
Completed at this boundary:
1. P FAIRY TAIL これが七炎竜の力だ 89ver. — COMPLETE_CORE

Pre-confirmed LT-positive candidates still to process, in queue order:
1. **NEXT: PA大海物語5ブラックLT99ver.** — 三洋 / LT `GOLDパールRUSH HYPER` about 93%; full source QA required
2. P俺の妹がこんなに可愛いわけがない。 — 京楽 / 1/199.9 / lower RUSH about 80% / LT long RUSH TOTAL about 92%
3. Pリングにかけろ1 — ニューギン / LT-positive; full source QA required
4. eFダンジョンに出会いを求めるのは間違っているだろうか2 — SANKYO / direct-LT smart pachinko; full source QA required

Do not assume the above is exhaustive. Re-enumerate all 2025-03-03 pachinko introductions from independent calendars before closing this boundary.

## Sources used this relay
- https://hazuse.com/machine/pachinko/PX0269/
- https://1geki.jp/pachinko/p_fairytail_lt89/
- https://1geki.jp/pachinko/p_fairytail_lt89/51/
- https://p.hisshobon.jp/machine/4466/1/107224
- https://www.pachibee.jp/machines/index/125020005
- https://www.pachirinko.com/2025.kishu/hane.fairy.t.html

## Next restart point
**PA大海物語5ブラックLT99ver.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicate, then collect core + LT structure and cross-check multiple source families. Keep 2025-03-03 OPEN until the full same-date calendar is independently re-enumerated.
