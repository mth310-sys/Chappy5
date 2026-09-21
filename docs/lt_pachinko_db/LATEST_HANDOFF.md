# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-20 / `Pゲゲゲの鬼太郎 獅子奮迅99Ver.`
- duplicate check performed before write

## This relay
Added one COMPLETE_CORE record.

### Pゲゲゲの鬼太郎 獅子奮迅99Ver.
- path: `docs/lt_pachinko_db/machines/2025-01-20_p_gegege_no_kitaro_shishifunjin_99ver.md`
- manufacturer: オレンジ（藤商事系）
- formalModel: Pゲゲゲの鬼太郎 獅子奮迅99Ver. RWC
- release: 2025-01-20
- normal/right: 約1/99.9 / 約1/61.1
- RUSH: 初当り後100%（LT直行込み）。下位 `ゲゲゲRUSH` 45回+残保留4、約55.5%
- LT: `超ゲゲゲRUSH` 149回+残保留4、約92.0%
- LT route: 初当り0.5%で10R約900個+LT直行。またはゲゲゲRUSH中大当り10%で10R約900個+LT。
- right payout lower: 10R約900個+LT 10% / 10R約900個+下位RUSH 40% / 3R約270個+下位RUSH 50%
- LT payout: 10R約900個 50% / 3R約270個 50%、LT継続
- payout basis: 払出
- total LT arrival from normal initial: UNVERIFIED; route values are confirmed but unpublished total is not inferred.
- status: COMPLETE_CORE
- conflicts: none

Cross-check: 遊技通信/P-WORLD業界ニュース、P-WORLD機種DB、一撃、なな徹、ちょんぼりすたを横断。約55.5%/約92.0%は時短区間と残保留の合算値として定義を保持した。

## Effective DB state
Previous handoff:
- machine records: 56
- COMPLETE_CORE: 55
- CONFLICT: 1

After this relay:
- machine records: **57**
- COMPLETE_CORE: **56**
- CONFLICT: **1**
- 2025-01-20 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Remaining 2025-01-20 queue
1. `P花の慶次～裂 蓮極129ver.` — next unprocessed LT-positive candidate.
2. `Pブラックラグーン4 EXTRA BULLET 129ver.` — LT-positive candidate after 慶次.
3. Boundary audit: `PA花の慶次～裂99ver.` remains LT-negative unless fresh evidence proves otherwise.
4. Boundary audit: classify `Pハネモノ ファミリースタジアム`; do not assume LT.
5. Independently re-enumerate all 2025-01-20 introductions before closing the date.

## Next restart point
Re-sync latest main first. If no newer relay has processed it, start **2025-01-20 `P花の慶次～裂 蓮極129ver.`**. Continue the same date queue without skipping `Pブラックラグーン4 EXTRA BULLET 129ver.`. Do not infer unpublished total LT-arrival values; preserve lower RUSH/LT continuation and payout definitions separately.

## Sources used this relay
- https://news.p-world.co.jp/articles/29503/yugitsushin
- https://www.p-world.co.jp/machine/database/10166
- https://1geki.jp/pachinko/p_gegegenokitaro99/
- https://1geki.jp/pachinko/p_gegegenokitaro99/51/
- https://1geki.jp/pachinko/p_gegegenokitaro99/52/
- https://nana-press.com/kaiseki/machine/884/26720/
- https://chonborista.com/pachinko/fujishouji/228682/
