# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to relay records
- previous `LATEST_HANDOFF.md` / Relay 3: checked
- existing LT machine records / queue state checked

## This relay
Continued the chronological queue at 2024-12-02 from the exact Relay 3 restart point.

### Added COMPLETE_CORE
`e大工の源さん超韋駄天2 フルスイングLT` / 三洋物産
- path: `docs/lt_pachinko_db/machines/2024-12-02_e_gen_san_cho_idaten2_full_swing_lt.md`
- formal model: `e大工の源さん超韋駄天2EHLD`
- release: 2024-12-02
- type: スマパチ / ライトミドル / 1種2種混合 / LT
- normal jackpot combined: about1/199.8
- normal symbol-hit: about1/487.3
- charge: about1/338.6
- RUSH effective hit: about1/2.7
- RUSH/LT entry: about52.2%
- lower RUSH: none; every RUSH entry activates LT
- LT: `極源RUSH`
- LT continuation: about96% (time-shortening 6 spins about93% + one residual hold about36% total)
- LT special-2 payout: 6R 900 payout 20% / 2R 300 payout 80%, both continue LT
- initial allocation cross-check: 10R 1500 + LT 51.7%; charge->10R 1500 + LT 0.5%; 10R 1500 + normal 47.8%. Ordinary charge is 3R 450 and returns to normal.
- no Yu-time; no C-time LT route confirmed.
- no missing core field and no conflict found.

## Cross-check notes
- SANYO official press release confirms machine/formal model and 2024-12-02 top introduction.
- SANYO official PV explicitly states RUSH entry always activates Lucky Trigger and all RUSH is about96% continuation.
- Greenbelt, reporting the SANYO announcement, independently confirms RUSH-entry=100% LT, about1/2.7, 6 spins + residual 1, about96%, 300/900 payout and expected payout about10,910 including initial hit.
- 遊技日本 confirms formal model, base probabilities, RUSH about52.2% and RUSH=LT structure.
- P-WORLD/HAZUSE and K-Navi cross-check the probability definitions, time-shortening and game flow.
- 必勝本 directly confirms 51.7% / 0.5% / 47.8% initial allocation and 20% / 80% right-side allocation, and separates payout from approximate net gain.
- Do not treat the ordinary 3R charge as an ALL1500 symbol hit; symbol-hit and combined-jackpot denominators are distinct.

## Effective DB state
- machine records: **38**
- COMPLETE_CORE: **37**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- 2024-12-02 boundary remains OPEN; INDEX should not be declared closed until the remaining same-day queue and re-enumeration are completed.

## 2024-12-02 remaining chronological queue
1. `P ToLOVEるダークネス 199ver.` / 平和
2. `PシャカラッシュZ` / マルホン工業
3. `P真・一騎当千～桃園の誓い～199LTver.` / D-light / 大一商会系
4. `Pえとたま2 神祭` / ユニバーサル系

Re-enumerate the 2024-12-02 same-day calendar before declaring the boundary exhaustive/closed.

## Next restart point
Start with **`P ToLOVEるダークネス 199ver.` (2024-12-02)**. Confirm the exact formal model and LT-equipped status first, then collect full basic spec, RUSH/LT structure, exact entry route/rates, continuation, payout allocations, time-shortening/special systems and game flow. Cross-check multiple source families. Then continue the remaining 12/02 queue in order. No inference; unresolved source disagreements remain CONFLICT.

## Sources used this relay
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20241004.pdf
- https://www.youtube.com/watch?v=9IUsqjjTgiw
- https://news.p-world.co.jp/articles/29111/greenbelt
- https://yugi-nippon.com/pachinko-new-machine/post-67223/
- https://www.p-world.co.jp/machine/database/10139
- https://hisshobon.com/machineinfo/94465/
- https://p-kn.com/pachinko/4228/
