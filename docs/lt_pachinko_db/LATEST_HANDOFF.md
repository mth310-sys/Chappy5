# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before writes

## This relay
Added COMPLETE_CORE:
1. `docs/lt_pachinko_db/machines/2025-03-03_ef_danmachi2.md`
2. `docs/lt_pachinko_db/machines/2025-03-03_p_uruseiyatsura_els_129.md`

### eFダンジョンに出会いを求めるのは間違っているだろうか2
- SANKYO / 2025-03-03 / `eフィーバーダンまち2G`
- スマパチ / 1種2種混合 / RUSH=LT
- 図柄揃い約1/399.9、実質大当り1/159.8、右打ち約1/99.9
- LT突入TOTAL約56%、ST130回、継続約73%
- 特図1: 1500個+LT 約54% / 192個+LT 約2% / 1500個通常 約44%
- 特図2: 1500個+神乗せループチャンス100%
- 神乗せループは約50%で1500個を上乗せし続ける。LT継続約73%とは別定義。
- 同時導入P機版は別スペックであり、本LTレコードと混同禁止。

### Pうる星やつら～Eternal Love Song～ 129ver.
- ニューギン / 2025-03-03
- 通常1/129.77、右打ち1/95.95、RUSH突入100%
- 電撃RUSH: 70+残4、約54%
- LT `超電撃RUSH`: 174+残4、約85%
- LT経路: 電撃RUSH中最大2回目の大当り。初当り2%のDESTINY ROAD（10000回/実質次回）大当り時50%はLT直行。
- 右打ち大当りALL 10R約800個。
- 通常初当り基準の総LT到達率は直接公表値未確認のためUNVERIFIED。経路から独自算出しない。

No new CONFLICT.

## 2025-03-03 boundary re-enumeration
Independent March 2025 calendar lists:
- P俺の妹がこんなに可愛いわけがない。 — registered
- Pバンドリ！ Light ver. — **LTではなく通常ST内の特図1→特図2 EX移行構造。業界一次記事にLT表記なし。対象外。**
- PFダンジョンに出会いを求めるのは間違っているだろうか2 — e版と別。LT搭載根拠なし、対象外。
- eFダンジョンに出会いを求めるのは間違っているだろうか2 — registered this relay
- PA大海物語5ブラックLT99ver. — registered
- P FAIRY TAIL これが七炎竜の力だ 89ver. — registered
- Pリングにかけろ1 — registered
- Pうる星やつら～Eternal Love Song～129ver. — registered this relay

Calendar source used for enumeration: https://hide-expectedvalue.com/2025/8331/patinko/
Pバンドリ Light industry checks: https://news.p-world.co.jp/articles/29759/yugitsushin and https://news.p-world.co.jp/articles/29755/amusement

**2025-03-03 boundary: CLOSED.**

## Effective DB state
Previous state: 74 records / 73 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **76**
- COMPLETE_CORE: **75**
- CONFLICT: **1**
- 2025-03-03 boundary: **CLOSED**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Next chronological boundary
Independent calendar identifies next pachinko introduction date as **2025-03-17**.
Candidates to audit in order:
1. PA魔王学院の不適合者 魔王再臨 99Ver
2. Pうまい棒2
3. e真・北斗無双 第5章 ドデカSTART
4. PAひぐらしのなく頃に 輪廻転生99Ver.
5. Pモモキュンソード 速撃3000+

Do not assume all are LT. First establish LT-positive/negative from official/industry sources, and only create machine records for LT-positive models.

## Sources used this relay
- https://news.p-world.co.jp/articles/29697/greenbelt
- https://www.p-world.co.jp/machine/database/10184
- https://1geki.jp/pachinko/e_danmachi2/
- https://www.pachirinko.com/2025.kishu/li.dun.mati.2.html
- https://news.p-world.co.jp/articles/30263/greenbelt
- https://news.p-world.co.jp/articles/30247/greenbelt
- https://hisshobon.com/machineinfo/96447/
- https://p.hisshobon.jp/machine/4484/1/107794
- https://www.p-world.co.jp/machine/database/10221
- https://hide-expectedvalue.com/2025/8331/patinko/
- https://news.p-world.co.jp/articles/29759/yugitsushin
- https://news.p-world.co.jp/articles/29755/amusement

## Next restart point
**2025-03-17 boundary — start with `PA魔王学院の不適合者 魔王再臨 99Ver` LT-positive/negative audit.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicates, audit the 2025-03-17 candidates in chronological queue, and only collect full core+LT records for confirmed LT-equipped machines. Re-enumerate the full date before closing the boundary.
