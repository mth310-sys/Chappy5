# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- current machine files checked before write; next queue point confirmed as `P痛いのは嫌なので防御力に極振りしたいと思います。`

## This relay — Added COMPLETE_CORE
### P痛いのは嫌なので防御力に極振りしたいと思います。
path: `docs/lt_pachinko_db/machines/2025-04-21_p_boufuri.md`
- 藤商事 / 型式 `P防振りFHZ` / 2025-04-21 / 一種二種混合。
- 通常時図柄揃い1/399.6、トレジャーチャンス1/399.6、合算約1/199.8（業界資料には約1/199表記あり）。右打ち1/84.7は電チューロング開放確率。
- 図柄揃い時は約450個、100%で下位RUSH `NewWorld Online`（NWO）へ。NWOは100回・約70%。
- トレジャーチャンスは約300個で基本通常へ。解析資料に一部NWO移行の記述はあるが、具体割合は高信頼直接値を確認できずUNVERIFIED。
- LT正式名称 `NewWorld Online極振り157`。NWO中大当りの約25%となる2000個以上（公開振り分け約2050～4500個）の出玉でLT発動。
- LTは157回・約85%。NWO/LTとも右打ち大当りは特図2大当り3回1セットの合算出玉。
- NWO中振り分け: 約2050～4500個 25%→LT / 約1500～1800個 25%→NWO / 約900～1400個 50%→NWO。
- LT中振り分け: 同じ25%/25%/50%で全てLT継続。
- `ラッキートリガージャッジ成功率約50%` と `NWO中大当りのLT突入約25%` は分母/演出条件が異なるため競合扱いせず定義分離。
- 通常時当選全体を分母とした総LT到達率は直接公表値を確認できず、独自計算せずUNVERIFIED。
- 2026年の `極振り129ver.` は別スペックとして混同排除。
- 遊技通信/P-WORLD、Amusement Japan、必勝本、P-WORLD機種DB、HAZUSE、一撃で照合。新規CONFLICTなし。

Sources:
- https://news.p-world.co.jp/articles/30237/yugitsushin
- https://amusement-japan.co.jp/article/detail/10004744/
- https://hisshobon.com/machineinfo/96889/
- https://p.hisshobon.jp/machine/4502/1/108461
- https://www.p-world.co.jp/machine/database/10228
- https://hazuse.com/machine/pachinko/PX0283/genre/104/
- https://1geki.jp/pachinko/p_boufuri/52/

confidence: INDUSTRY + ANALYSIS_HIGH（複数一致）

## Boundary state
### 2025-04-07 — CLOSED
Do not reprocess absent concrete QA issue.

### 2025-04-21 — OPEN
Regular schedule queue:
1. e東京喰種 — COMPLETE_CORE
2. Pゾンビランドサガ — COMPLETE_CORE
3. P痛いのは嫌なので防御力に極振りしたいと思います。 — **COMPLETE_CORE this relay**
4. PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver. — **next: verify LT/non-LT before registration**

Boundary special case still unresolved:
- `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` had limited Tokyo/Shinjuku advance introduction from 2025-04-21. Before closing 4/21, resolve canonical chronology treatment against later nationwide rollout using existing DB convention; do not silently omit or guess date.

## Effective DB state
Previous effective state: 86 records / 85 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **87**
- COMPLETE_CORE: **86**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth.

## Next restart point
**Continue 2025-04-21 by verifying `PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver.` for LT/non-LT. If LT-positive, collect full core/LT record; if LT-negative, record only as boundary evidence and do not add a machine record. Then resolve `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` advance-introduction chronology against nationwide rollout, re-enumerate the full 2025-04-21 boundary from independent release calendars, and close 4/21 only after all LT-positive candidates are accounted for.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
