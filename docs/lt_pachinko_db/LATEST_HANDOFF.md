# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 2 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2024-12-16 same-date boundary audit
- current machine records: checked for restart/duplicate avoidance

## This relay
Finished the OPEN 2024-12-16 boundary audit. No additional LT machine record was added in this relay.

### LT-negative classification — Pネオモンスターハウス 199Ver.
- manufacturer: 竹屋
- release: 2024-12-16
- normal: 1/199.8; high probability: 1/82.4
- system: V確変ループ
- initial HYPER mode / 確変 entry: 50%
- right-side allocation: 10R確変35% / 4R確変35% / 4R通常+時短100回30%
- total continuation approx82% including time-shortening return
- no LT stage or LT-equipped specification found in the checked detailed spec/game-flow material.
- classification: LT非搭載境界 / DB machine record not created.

### LT-negative classification — Pネオモンスターハウス 99Ver.
- manufacturer: 竹屋
- release: 2024-12-16
- normal: 1/99.9; high probability: 1/49.5
- system: 確変ループ
- 確変 entry: 50%
- common allocation: 10R確変25% / 4R確変25% / 4R通常+時短50回50%
- total continuation approx70% including time-shortening return
- no LT stage or LT-equipped specification found in the checked detailed spec/game-flow material.
- classification: LT非搭載境界 / DB machine record not created.

### LT-negative classification — eA夏色日記GO
- formal model: eA夏色日記GO
- manufacturer: 豊丸産業; DYNAM PB machine
- release: 2024-12-16
- 6-setting ama / probability 1/89.8–1/77.7
- simple 50%確変 / 50%通常+時短30 loop specification
- low-probability 220 spins activates 遊タイム 10000回
- DYNAM official press release describes the product and all headline systems without an LT stage; detailed analysis likewise describes a setting-equipped 確変ループ machine.
- classification: LT非搭載境界 / DB machine record not created.

## 2024-12-16 boundary
**CLOSED.**

Positively verified LT machines for this date are already represented by existing COMPLETE_CORE records:
1. `eソードアート・オンライン 閃光の軌跡`
2. `eゴジラ対エヴァンゲリオン セカンドインパクト G 破壊神覚醒`
3. `Pシュタインズ・ゲート ゼロ`

The remaining enumerated pachinko introductions (`Pネオモンスターハウス 199Ver.`, `Pネオモンスターハウス 99Ver.`, `eA夏色日記GO`) were positively classified as non-LT for this mission boundary.

## Next chronological boundary discovered — 2025-01-06
Independent new-machine calendar / industry searches identify multiple LT-equipped introductions. Start from the first unprocessed LT candidate on this date and re-enumerate the full date before closure.

Confirmed LT candidates found in discovery this relay include:
- `P戦国乙女7 終焉の関ヶ原` — LT / 2025-01-06
- `eフィーバー戦姫絶唱シンフォギア4 キャロルver.` — LT / 2025-01-06
- `P清流物語4 ヌシを求めて4000匹` — LT / 2025-01-06
- `P世界最高の暗殺者、異世界貴族に転生する` — LT / 2025-01-06
- `eぱちんこ押忍！番長 漢の頂` — LT / 2025-01-06
- `PLTジューシーハニー極嬢` — LT / 2025-01-06

Do not treat this discovery list as exhaustive. Re-enumerate 2025-01-06 using at least one independent calendar before closing the date; classify `e ULTRAMAN 2400★80` and any other same-date pachinko separately rather than assuming LT status.

## Effective DB state
Previous handoff after SAO record:
- machine records: **49**
- COMPLETE_CORE: **48**
- CONFLICT: **1** (`P GO!GO!郷 革命の5`)

This relay added no machine record, so effective counts remain:
- machine records: **49**
- COMPLETE_CORE: **48**
- CONFLICT: **1**
- 2024-12-02 boundary: CLOSED
- 2024-12-16 boundary: **CLOSED**
- next boundary: **2025-01-06 OPEN**
- `INDEX.md` is stale and must not override this handoff/current machine files.

## Next restart point
1. Re-sync latest main README, LT mission, INDEX, this handoff, and current machine files.
2. Begin **2025-01-06** with `P戦国乙女7 終焉の関ヶ原` unless a newer main commit has already processed it.
3. Collect full core/LT structure and cross-check; do not infer unpublished LT-arrival values.
4. Continue all positively verified LT machines on 2025-01-06 in the same chronological boundary.
5. Independently enumerate the date before marking it CLOSED.
6. Keep LT-negative same-date machines as boundary notes only, not machine records.

## Sources used this relay
2024-12-16 boundary / non-LT classification:
- https://nana-press.com/kaiseki/machine/875/
- https://nana-press.com/kaiseki/machine/875/25511/
- https://nana-press.com/kaiseki/machine/874/
- https://nana-press.com/kaiseki/machine/874/25516/
- https://hazuse.com/machine/pachinko/4P0597/
- https://prtimes.jp/main/html/rd/p/000000479.000013913.html
- https://prtimes.jp/main/html/rd/p/000003804.000003670.html
- https://p.hisshobon.jp/machine/4416/1/105822

2025-01-06 discovery:
- https://1geki.jp/newmachinecalender/202501/
- https://www.all7.jp/plans/index/2025/01/10
- https://news.p-world.co.jp/articles/29949/greenbelt
- https://1geki.jp/pachinko/p_ltjcyhny_gj/
