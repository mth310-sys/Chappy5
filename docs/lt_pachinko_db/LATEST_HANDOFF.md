# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / collection + boundary QA

## Read before work
- latest main README: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked
- previous `LATEST_HANDOFF.md` / Relay 5: checked
- recent 2024-11-05 machine records: checked

## This relay
Closed the unresolved 2024-11-05 boundary with direct non-LT evidence where available, then advanced to 2024-11-18 and added the first confirmed LT machine there.

### 2024-11-05 boundary closure
Excluded from LT DB:
- `e SSSS.GRIDMAN` / 型式 `eグリッドマンXVSM` — HAZUSE explicitly lists `ラッキートリガー 非搭載`; 1/319.7 V-ST, ST100, total entry about71%, continuation about88%.
- `P銀河英雄伝説 Die Neue These 319ver.` / 型式 `P銀河英雄伝説DNTL5-X` — HAZUSE explicitly lists `ラッキートリガー 非搭載`; V-stock RUSH is not LT.
- `PA銀河英雄伝説 Die Neue These 89ver.` / 型式 `PA銀河英雄伝説DNTN2-X` — multiple detailed sources show the same V-stock RUSH structure with no LT stage; do not infer LT from 94.5% continuation. No direct LT-equipment proof found; exclude unless a primary/direct LT source later contradicts this.
- `P大海物語5スペシャル` — conventional 54% loop + time-shortening/遊タイム structure; no LT stage/evidence. Do not confuse with later `PA大海物語5ブラックLT99ver.`.
- `e大海物語5スペシャル` / 型式 `e大海物語5スペシャルELTA4` — HAZUSE explicitly lists `ラッキートリガー 非搭載`; conventional 64% loop.

The previously excluded `Pモンスターハンターライズ`, `P転生したらスライムだった件`, `Pリング 呪いの7日間3 甘デジver.`, `PAナナシー～お江戸77ver.`, and `Pフィーバーからくりサーカス2 運命ver.` remain excluded. Therefore the 2024-11-05 boundary is considered closed for the currently enumerated candidates.

## New COMPLETE_CORE record
`2024-11-18_p_nyanko_daisensou_tayousei_no_neko.md` — `P にゃんこ大戦争 多様性のネコ` / 京楽産業.

Key verified structure:
- 2024-11-18 introduction; KYORAKU official explicitly identifies LT equipment.
- one-kind/two-kind mixed / transfer-type LT; no lower RUSH.
- normal objective is `降臨ガチャ` about1/155; success about25%.
- success gives `SUNRISE BONUS` 1500×2 = 3000 payout.
- after SUNRISE BONUS, about50% including residual-hold return enters LT `神域ULTIMATE`.
- LT symbol hit about1/26.4 vs end symbol about1/155.
- LT continuation about88%, defined including residual 4-hold return about14.3%.
- LT hits are ALL 10R 1500 payout.
- analysis allocation cross-check: initial branch about12.5% 3000+LT / about12.5% 3000+non-LT / about75% 2R non-LT.
- do not confuse with 2026 `神さまにおまかせ88ver.`.
- normal-spin-based total LT probability is not stored as an official/direct value; route values are kept without presenting an inferred product as a directly published rate.

## Effective DB state after this relay
- previous effective machine-record total: 35
- new records: 1
- effective machine-record total: **36**
- effective COMPLETE_CORE: **35**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- INDEX is still stale relative to relay files; integrate after the 2024-11-18 boundary is fully enumerated/closed to avoid repeated large INDEX rewrites during the relay.

## Next restart point
Continue at **2024-11-18 same-day boundary**.

1. Re-read latest main.
2. Re-enumerate all 2024-11-18 calendar candidates and identify every LT-equipped model with direct evidence; do not assume `P にゃんこ大戦争` is the only one.
3. Register only confirmed LT models, one record per distinct specification.
4. After 11/18 is demonstrably closed, advance chronologically to the next introduction date. Known later confirmed candidates include 2024-12-02 LT machines, but do not skip any intervening date.
5. Continue retrospective QA: `P GO!GO!郷 革命の5` 3%/4% CONFLICT and PAハイスクール・フリート total LT reach UNVERIFIED.

## Sources used this relay
### Boundary / exclusions
- https://hazuse.com/hd/4p0497/ — e SSSS.GRIDMAN: explicit LT non-equipped, type/date/model
- https://www.pachibee.jp/machines/about/124100000 — GRIDMAN ST structure cross-check
- https://hazuse.com/hd/310300-2/ — P銀河英雄伝説319: explicit LT non-equipped
- https://www.p-world.co.jp/machine/database/10133 — 銀河英雄伝説319 V-stock RUSH structure
- https://hazuse.com/machine/pachinko/PX0243/ — PA銀河英雄伝説89 detailed V-stock structure
- https://www.p-world.co.jp/machine/database/10132 — PA銀河英雄伝説89 cross-check
- https://www.pachibee.jp/machines/about/124090011 — P大海5SP conventional loop/time-shortening/遊タイム
- https://hazuse.com/hd/4p0508/ — e大海5SP explicit LT non-equipped
- https://www.pachibee.jp/machines/about/124090010 — e大海5SP conventional 64% loop cross-check

### P にゃんこ大戦争 多様性のネコ
- https://www.kyoraku.co.jp/news/detail/790 — manufacturer official LT identification, date, LT name, 88%, ALL1500, residual-hold definition
- https://hisshobon.com/machineinfo/94159/ — detailed basic spec
- https://hisshobon.com/machineinfo/94161/ — LT route/end structure
- https://1geki.jp/pachinko/p_nyankod_tn/ — cross-check
- https://pachinko-curation.com/50326/ — type/model and allocation cross-check
