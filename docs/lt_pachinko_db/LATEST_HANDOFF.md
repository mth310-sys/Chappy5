# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-02-03 `ぱちんこ シン・エヴァンゲリオン 129 LT ver.`
- existing target duplicate check performed before write

## This relay
### Added: ぱちんこ シン・エヴァンゲリオン 129 LT ver.
- path: `docs/lt_pachinko_db/machines/2025-02-03_p_shin_evangelion_129_lt.md`
- manufacturer: ビスティ
- formalModel: Pシン・エヴァンゲリオンMV
- canonical release: 2025-02-03
- type: 一種二種混合 / 時短ST型 / 下位RUSH→LT
- 通常図柄揃い: 約1/129.8
- 右打ち図柄揃い: 約1/54.4
- 初当り: 0.5% LT直行 / 50.0% 下位RUSH / 49.5% 通常
- 下位 `シン・IMPACT RUSH`: 時短60回+残保留4、TOTAL約70%
- LT `シン・IMPACT RUSH LT`: 時短123回+残保留4、TOTAL約91%
- LT entry: 通常時10R全回転約0.5%直行 / 下位RUSH中大当り約10%
- LT初当り: パチマガスロマガ直接解析値 1/1326.67
- payout: 初当り3R約300個または10R約1000個。右打ち大当りはALL10R約1000個（払出）
- status: COMPLETE_CORE
- conflicts: none
- missing: none for core fields

Cross-check: グリーンべると/遊技通信の業界記事、P-WORLD機種DB、HAZUSE、パチマガスロマガ、パチビー、一撃を横断。RUSH約51%はLT直行込みの丸めで、詳細50.0%下位+0.5%LT直行=50.5%と整合。約70%/約91%は残保留4個込みTOTALで、時短区間単独67.2%/89.8%と分離。

## 2025-02-03 boundary remains OPEN
Independent same-date re-enumeration found an LT-positive machine not present in the current DB:
- `PLT OVERLORD魔導王光臨129ver.` — **next priority**. Search evidence identifies 2025-02-03 introduction, Sansei R&D, 1/129.7, lower `シャルティアバトル` approx.71.5%, LT/upper `OVERMAX` approx.89.5%. Must still perform full official/industry/analysis cross-check and save a complete record before treating these values as canonical.

Also re-enumerate all 2025-02-03 introductions after processing OVERLORD129. Do not close the date boundary merely because the previously queued Evangelion record is complete.

## Effective DB state
Previous handoff:
- machine records: 64
- COMPLETE_CORE: 63
- CONFLICT: 1

After this relay:
- machine records: **65**
- COMPLETE_CORE: **64**
- CONFLICT: **1**
- 2025-02-03 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Continue **2025-02-03** with **`PLT OVERLORD魔導王光臨129ver.`**. Verify formal model, LT-positive evidence, exact LT/upper-state naming, LT entry route/rate, lower and LT continuation definitions, all major payout distributions and time-support structure across official/industry/analysis sources. Save the record only after cross-check. Then independently re-enumerate the 2025-02-03 introduction boundary for additional LT-positive omissions.

## Sources used this relay
- https://news.p-world.co.jp/articles/29989/greenbelt
- https://news.p-world.co.jp/articles/29997/yugitsushin
- https://www.p-world.co.jp/machine/database/10206
- https://hazuse.com/machine/pachinko/PX0264/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/bisty_pachi/150/kh02.php
- https://www.pachibee.jp/machines/index/125010010
- https://1geki.jp/pachinko/p_shineva_129lt/51/

## Same-date discovery source for next priority
- https://1geki.jp/pachinko/p_lt_overlord129/
