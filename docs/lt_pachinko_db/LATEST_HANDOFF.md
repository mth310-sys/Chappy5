# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-20 / `P花の慶次～裂 蓮極129ver.`
- duplicate check performed before write

## This relay
Added one COMPLETE_CORE record.

### P花の慶次～裂 蓮極129ver.
- path: `docs/lt_pachinko_db/machines/2025-01-20_p_hana_no_keiji_retsu_renkyoku_129ver.md`
- manufacturer: ニューギン
- formalModel: P花の慶次～裂N2-VC
- release: 2025-01-20
- normal/right: 約1/129.77 / 約1/49.98
- RUSH: 突入50%、TOTAL継続約70%。煌戦MODEは転落約1/61.07、転落後は殿MODE（時短15回+残保留、引き戻し約33.3%）。
- LT: `極煌戦MODE`。極殿MODEとの「蓮極ループ」でTOTAL継続約91%。極煌戦MODE側転落約1/193.8。
- LT route: 通常RUSH中大当りの15%（10R約1500個）でLT突入。
- lower right payout: 10R約1500個+LT 15% / 10R約1500個+RUSH継続 35% / 2R約300個 50%。
- LT payout: 10R約1500個 50% / 2R約300個 50%。
- payout basis: 払出。
- total LT arrival from normal initial: UNVERIFIED; RUSH50%と右打ち15%から独自の総到達値を作らない。
- status: COMPLETE_CORE
- conflicts: none

Cross-check: 遊技通信/P-WORLD業界ニュース、P-WORLD機種DB、一撃、ちょんぼりすた、グリーンべるとを横断。約70%/約91%は転落型MODE単独ではなく殿MODE系引き戻し込みTOTAL値として定義を保持。2025-01-20同時導入の`PA花の慶次～裂99ver.`は遊タイム搭載の別スペックで、LT機として混入させない。

## Effective DB state
Previous handoff:
- machine records: 57
- COMPLETE_CORE: 56
- CONFLICT: 1

After this relay:
- machine records: **58**
- COMPLETE_CORE: **57**
- CONFLICT: **1**
- 2025-01-20 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Remaining 2025-01-20 queue
1. `Pブラックラグーン4 EXTRA BULLET 129ver.` — next unprocessed LT-positive candidate.
2. Boundary audit: `PA花の慶次～裂99ver.` is LT-negative based on current industry material; keep excluded unless fresh direct evidence proves otherwise.
3. Boundary audit: classify `Pハネモノ ファミリースタジアム`; do not assume LT.
4. Independently re-enumerate all 2025-01-20 introductions before closing the date.

## Next restart point
Re-sync latest main first. If no newer relay has processed it, start **2025-01-20 `Pブラックラグーン4 EXTRA BULLET 129ver.`**. Continue the same-date boundary audit before advancing chronologically. Do not infer unpublished total LT-arrival values; preserve lower RUSH/LT continuation definitions and c時短/転落 definitions separately.

## Sources used this relay
- https://news.p-world.co.jp/articles/29546/yugitsushin
- https://www.p-world.co.jp/machine/database/10181
- https://1geki.jp/pachinko/p_hanakei_retsu129/
- https://chonborista.com/pachinko/newgin/224418/
- https://news.p-world.co.jp/articles/30030/greenbelt
