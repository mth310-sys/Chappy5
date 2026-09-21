# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 2 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-20 / `Pブラックラグーン4 EXTRA BULLET 129ver.`
- duplicate check performed before write

## This relay
Added one COMPLETE_CORE record.

### Pブラックラグーン4 EXTRA BULLET 129ver.
- path: `docs/lt_pachinko_db/machines/2025-01-20_p_black_lagoon4_extra_bullet_129ver.md`
- manufacturer: サミー（製造: 銀座）
- formalModel: PブラックラグーンGCPA / Pブラックラグーン4GCPA
- release: 2025-01-20
- normal/right: 約1/129.8 / 約1/4.12（大当り+小当り合算）
- RUSH: 突入52%、デスペラードRUSH約75%（時短1回+残保留4個。時短10000回による継続は約75%定義に含まない）。
- LT: `(EXTRA)ラグーンボーナス` / `LAGOON BONUS EXTRA`、約90%ボーナスループ。
- LT route: デスペラードRUSHの時短1+残保留4中の右打ち大当り約4%。LT抽選は時短1+4時のみ。
- lower right payout: 10R1000個+LT約4% / 10R1000個+時短10000+4約29% / 10R1000個+時短1+4約4% / 5R500個+時短1+4約63%。
- LT payout: 10R1000個+LT約37% / 5R500個+LT約53% / 5R500個+RUSH約10%。
- LT終了: 約10%転落当り後もデスペラードRUSHへ復帰し、再LTを狙える。
- payout basis: 払出。
- total LT arrival from normal initial: UNVERIFIED; 独自計算しない。
- status: COMPLETE_CORE
- conflicts: none。遊技通信に「5%」表記があるが、Amusement Japan約4%、グリーンべると詳細約4%、必勝本約4%が一致するため主要値は約4%。5%記事表記はnotes保持。

Cross-check: Amusement Japan、遊技通信、グリーンべると、必勝本、一撃を横断。通常RUSH約75%の定義と時短10000回、LT中約90%継続/約10%RUSH復帰を分離して保存。

## Effective DB state
Previous handoff:
- machine records: 58
- COMPLETE_CORE: 57
- CONFLICT: 1

After this relay:
- machine records: **59**
- COMPLETE_CORE: **58**
- CONFLICT: **1**
- 2025-01-20 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Remaining 2025-01-20 queue
1. Boundary audit: classify `Pハネモノ ファミリースタジアム`; do not assume LT.
2. Independently re-enumerate all 2025-01-20 introductions and search for any additional LT-positive machine before closing the date.
3. If no additional LT-positive candidate remains, close 2025-01-20 and advance to the next chronological introduction date.

## Next restart point
Re-sync latest main first. Start with **2025-01-20 same-date boundary audit (`Pハネモノ ファミリースタジアム` + full same-date re-enumeration)**. Only register machines with positive LT evidence. If boundary closes, advance chronologically to the next LT introduction date. Do not infer unpublished total LT-arrival values.

## Sources used this relay
- https://www.amusement-japan.co.jp/article/detail/10004593/
- https://news.p-world.co.jp/articles/29290/yugitsushin
- https://news.p-world.co.jp/articles/29292/greenbelt
- https://hisshobon.com/machineinfo/94916/
- https://hisshobon.com/machineinfo/94918/
- https://1geki.jp/pachinko/p_blacklagoon4_129/
