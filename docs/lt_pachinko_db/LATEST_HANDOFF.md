# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4

## Read before work
- latest main README: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked
- previous `LATEST_HANDOFF.md` / Relay 3: checked
- previous P江頭2:50inナナシーLT record: checked

## This relay
Finished the 2024-10-21 same-day boundary, then advanced chronologically to the next directly confirmed LT machine on 2024-11-05.

New COMPLETE_CORE record:
1. `2024-11-05_e_fever_karakuri_circus2_maou_ver.md` — eフィーバーからくりサーカス2 魔王ver.

### 2024-10-21 boundary
Reliable 2024-10 calendar lists only two pachinko introductions on 10/21:
- `P江頭2:50inナナシーLT` — already COMPLETE_CORE in Relay 3.
- `P弾球黙示録カイジ沼5` — searched across machine DB/spec sources. The 129×87% variant is a one-two/c時短 RUSH machine; no direct LT-equipment evidence was found for this 2024 variant. Do not infer LT from `レインボーZONE` / next-hit state. Exclude from LT DB.

## New record — eフィーバーからくりサーカス2 魔王ver.
- releaseDate: 2024-11-05 (SANKYO/industry/P-WORLD/一撃 alignment; one analysis page says 11/4, retained only as minor calendar variance)
- manufacturer: SANKYO; formal model `eフィーバーからくりサーカス2R`, manufactured by JB per industry source
- type: smart pachinko / one-two mixed / 普図ST / c時短 / LT-specialized
- normal figure-hit probability: about 1/399.9
- Karakuri Charge: about 1/396
- total normal jackpot including both definitions: about 1/199.9
- LT `超悪魔RUSH`: entry about52%, ST/time-shortening 135, continuation about80%
- critical definition: **RUSH entry = LT entry**. There is no lower RUSH stage.
- `運命の一劇`: about1/78; special-figure-2 five-spin success expectation about82%; c時短 is included in the published continuation definition
- initial figure-hit split: 1200 + LT 51%, 300 + LT 1%, 1200 + normal 48%
- right split: 4500–7500 17%, 3000 33%, 1500 40%, ST reset 10%; payout values
- no 遊タイム
- Karakuri Charge has an LT route, but this relay did not force a standalone route percentage where the official/high-confidence sources did not directly publish one.

## 2024-11-05 same-day boundary started
Confirmed exclusions already checked:
- `PAナナシー～お江戸77ver.～` — HAZUSE explicitly `ラッキートリガー 非搭載`; setting-equipped ST/遊タイム machine. Exclude.
- `Pリング 呪いの7日間3 甘デジver.` — HAZUSE explicitly `ラッキートリガー 非搭載`. Do not confuse with the already-recorded 2024-08-19 LT version.
- `Pフィーバーからくりサーカス2 運命ver.` — SANKYO official describes ordinary RUSH approx75%; industry announcement distinguishes it from the e-machine's LT-specialized specification. Do not register as LT.

The 2024-11-05 calendar boundary is **not yet declared closed**. Next relay must re-read a reliable November calendar and finish every same-day pachinko candidate before advancing to 2024-11-18 or later.

## Sources — boundary
- https://p-kn.com/calendar/202410/ — 2024-10 calendar; 10/21 P江頭 + Pカイジ沼5
- https://www.p-world.co.jp/machine/database/10018 — Pカイジ沼5 129×87% structure; no direct LT identification used
- https://p-kn.com/calendar/202411/ — November introduction calendar
- https://hazuse.com/hd/4p0849/ — PAナナシーお江戸77; LT非搭載
- https://hazuse.com/hd/410140-2/ — Pリング甘デジ; LT非搭載
- https://www.sankyo-fever.jp/collection/967/ — SANKYO official Pからくり2 運命ver.; ordinary RUSH approx75%

## Sources — eフィーバーからくりサーカス2 魔王ver.
- https://www.sankyo-fever.jp/collection/968/ — SANKYO official collection
- https://news.p-world.co.jp/articles/28810/amusement — Amusement Japan
- https://news.p-world.co.jp/articles/28805/yugitsushin — 遊技通信
- https://news.p-world.co.jp/articles/29335 — Greenbelt/P-WORLD; detailed split
- https://www.p-world.co.jp/machine/database/10115 — P-WORLD machine DB
- https://p.hisshobon.jp/machine/4385/1/104864 — 必勝本 basic spec
- https://p.hisshobon.jp/machine/4385/1/104865 — 必勝本 distribution
- https://pachiseven.jp/articles/detail/22653 — Pachiseven definition cross-check

## DB state after Relay 4
- INDEX itself is still stale and does not yet integrate Relay 2/3/4 files; do not treat its displayed count 30 as the effective total.
- effective machine-record total: **33**
- effective COMPLETE_CORE: **32**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)
- Relay 2: CYBORG009 199 COMPLETE_CORE
- Relay 3: P江頭2:50inナナシーLT COMPLETE_CORE
- Relay 4: eフィーバーからくりサーカス2 魔王ver. COMPLETE_CORE

## Next restart point
Continue at **2024-11-05 same-day boundary**.

1. Re-read latest main first.
2. Enumerate every 2024-11-05 pachinko machine from reliable calendar(s), including 11/4-vs-11/5 regional/calendar notation variants.
3. Register only machines with direct LT-equipment evidence; explicitly exclude non-LT variants and avoid same-series mixing.
4. Once 11/5 is closed, advance chronologically to the next November 2024 introduction date (calendar shows 11/18 as a later major boundary, but do not skip any intervening LT candidate).

QA priority remains:
1. `P GO!GO!郷 革命の5` 3% vs 4% primary-source resolution
2. `PAハイスクール・フリート オールスター すい～とでハッピー!2400` direct total LT reach-rate source search
3. PAわんわんCELEBRATION only if direct 2024-model LT proof appears
4. variant mixing / RUSH-vs-LT rate / payout-vs-net integrity checks
