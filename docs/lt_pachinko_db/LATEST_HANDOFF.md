# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 5 / chronological collection + QA

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to relay records and currently shows 30 records / 2024-09-17 while machine records and this handoff are farther ahead
- previous `LATEST_HANDOFF.md` / Relay 4: checked
- existing 2024-12-02 record `e大工の源さん超韋駄天2 フルスイングLT`: checked

## This relay
Continued the chronological queue from Relay 4's exact restart point: `P ToLOVEるダークネス 199ver.` (2024-12-02).

### Added COMPLETE_CORE
`P ToLOVEるダークネス 199ver.` / 平和
- path: `docs/lt_pachinko_db/machines/2024-12-02_p_toloveru_darkness_199ver.md`
- formal model: `PToLOVEるダークネスL9YZ4`
- release: 2024-12-02
- type: ライトミドル / 1種2種混合 / LT
- normal jackpot: 1/199.8
- right-side effective hit: about1/48.5 = jackpot 1/199.8 + small-hit 1/64.1 combined
- lower RUSH: `楽園計画`, entry about60%, ST66 + residual 4, TOTAL continuation about77%
- LT: `超ハーレムTIME`, ST100 + residual 4, TOTAL continuation about89%
- LT routes: about1% of a 10R hit directly activates LT; main route is two consecutive 10R `超ハーレムBONUS` hits. A 10R hit after a preceding 10R in lower RUSH moves to LT.
- ST final variation + residual hold is treated as the first 10R for the consecutive-10R rule.
- special-1: 2R 300 payout + lower RUSH about60% / 2R 300 payout + normal about40%
- special-2 lower RUSH after 2R/4R or final/residual: 10R 1500 + LT about1% / 10R 1500 + lower RUSH about49% / 4R 600 + lower RUSH about50%
- special-2 lower RUSH after a 10R: 10R 1500 + LT about50% / 4R 600 + lower RUSH about50%
- LT: 10R 1500 about50% / 4R 600 about50%; payout basis
- Yu-time: none
- ordinary-initial-hit-based total LT arrival probability: not directly published in checked sources; do not infer or calculate into a fixed DB value

## QA / definition checks
- Confirmed this is the 2024-12-02 LT-equipped 199ver., not the 2024-06 319.6 sibling. No cross-spec mixing.
- Confirmed about1/48.5 is the right-side combined effective hit rate, not standalone jackpot probability.
- Confirmed 300/600/1500 are payout values. Approximate net-gain values published by some analysis sites are not substituted.
- Confirmed lower RUSH continuation about77% and LT continuation about89% are separate states and definitions.
- Relay 4 record `e大工の源さん超韋駄天2 フルスイングLT` re-read: no LT-non-equipped contamination, duplicate, payout/net-gain mixing, or unresolved conflict found; COMPLETE_CORE remains appropriate.
- Existing unresolved DB issues remain unchanged: `P GO!GO!郷 革命の5` CONFLICT; PAハイスクール・フリート total initial-hit-based LT arrival rate remains unverified rather than inferred.

## Effective DB state
- machine records: **39**
- COMPLETE_CORE: **38**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- 2024-12-02 boundary remains OPEN.
- `INDEX.md` is known stale and must be reconciled after the same-day boundary is re-enumerated/closed; do not use its displayed count/frontier over this handoff.

## 2024-12-02 remaining chronological queue
1. `PシャカラッシュZ` / マルホン工業
2. `P真・一騎当千～桃園の誓い～199LTver.` / D-light / 大一商会系
3. `Pえとたま2 神祭` / ユニバーサル系

Re-enumerate the 2024-12-02 same-day calendar before declaring the boundary exhaustive/closed.

## Next restart point
Start with **`PシャカラッシュZ` (2024-12-02)**. First confirm exact formal model and direct LT-equipped status, then collect basic spec, RUSH structure, LT name/routes/rates, continuation, payout allocations, time-shortening/special systems and game flow. Cross-check multiple source families. Then continue the remaining 12/02 queue. No inference; unresolved source disagreements remain CONFLICT.

## Sources used this relay
- https://news.p-world.co.jp/articles/29035/amusement
- https://yugi-nippon.com/pachinko-new-machine/post-67084/
- https://www.p-world.co.jp/machine/database/10130
- https://hisshobon.com/machineinfo/94646/
- https://p.hisshobon.jp/machine/4410/1/105434
- https://nana-press.com/kaiseki/machine/852/24548/
