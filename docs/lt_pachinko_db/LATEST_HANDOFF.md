# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-06 OPEN / `eぱちんこ押忍！番長 漢の頂`
- current next-machine record context checked for duplicate avoidance

## This relay
Added `eぱちんこ押忍！番長 漢の頂` as COMPLETE_CORE and advanced within the OPEN 2025-01-06 boundary.

### eぱちんこ押忍！番長 漢の頂
- path: `docs/lt_pachinko_db/machines/2025-01-06_e_oshisu_banchou_otoko_no_itadaki.md`
- manufacturer: 大都技研
- formalModel: e／押忍番長漢の頂／L09
- releaseDate: 2025-01-06
- gameType: 一種二種混合 / 普図抽選 / LT=RUSH直行型
- normal: 約1/179.5
- LT/RUSH: 約1/99.5 / 157回 / 約80%
- LT: `頂RUSH`
- LT entry: 初当り25%で直接突入
- practical LT entry: 約1/718（業界資料直接値）
- initial payout: 約750個
- LT payout: 約3000個70% / 約300個30%、全て頂RUSH継続
- status: COMPLETE_CORE
- conflict: none

Important definition handling:
- 本機は下位RUSHを経由しない。`頂RUSH`そのものがLTなので通常RUSH継続率はN/A。
- 約1/718は業界資料の直接公表値。独自計算値として扱わない。
- 約3000個は1500個+750個×2回分の合算払出表記で、V入賞条件あり。
- 2026年99ver.は兄弟機であり別レコード。

## QA this relay
- LT搭載、型式、導入日、通常/RUSH確率、157回、25%、約80%、特図1/2振り分けを遊技通信・グリーンべると・P-WORLD・解析資料で横断。
- 普図抽選の説明はパチマガスロマガFREEで補完。
- 既知CONFLICT `P GO!GO!郷 革命の5` は解消根拠なしのため維持。
- 既知UNVERIFIED `PAハイスクール・フリート オールスター すい～とでハッピー!2400` の通常初当り基準総LT到達率は推測せず維持。
- INDEXは30件時点の旧集計。現行machine records/handoffより古いため、古い件数で現行状態を上書きしない。

## 2025-01-06 boundary
**OPEN.**

Processed LT machines this date:
1. `P戦国乙女7 終焉の関ヶ原` — COMPLETE_CORE
2. `eフィーバー戦姫絶唱シンフォギア4 キャロルver.` — COMPLETE_CORE
3. `P清流物語4 ヌシを求めて4000匹` — COMPLETE_CORE
4. `P世界最高の暗殺者、異世界貴族に転生する` — COMPLETE_CORE
5. `eぱちんこ押忍！番長 漢の頂` — COMPLETE_CORE

Remaining same-date queue:
6. `PLTジューシーハニー極嬢`

Before closing the date, independently re-enumerate 2025-01-06 and classify `e ULTRAMAN 2400★80` plus any additional pachinko introductions by LT status. LT-negative machines are boundary notes only, not DB records.

## Effective DB state
Previous handoff after prior relay:
- machine records: 53
- COMPLETE_CORE: 52
- CONFLICT: 1

After this relay:
- machine records: **54**
- COMPLETE_CORE: **53**
- CONFLICT: **1**
- 2024-12-02 boundary: CLOSED
- 2024-12-16 boundary: CLOSED
- 2025-01-06 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
1. Re-sync latest main README, LT mission, INDEX, this handoff, and current machine files.
2. Continue **2025-01-06** with `PLTジューシーハニー極嬢` unless newer main has processed it.
3. Independently enumerate the full 2025-01-06 date, including `e ULTRAMAN 2400★80`, before marking it CLOSED.
4. For every LT record, cross-check LT name/routes/rates, normal/RUSH/LT probabilities, payout allocation, support/ST and game flow.
5. Do not infer unpublished total LT-arrival values; use UNVERIFIED only after broad re-search.

## Sources used this relay
- https://news.p-world.co.jp/articles/29596/yugitsushin
- https://news.p-world.co.jp/articles/29588/greenbelt
- https://news.p-world.co.jp/articles/29949/greenbelt
- https://www.p-world.co.jp/machine/database/10179
- https://pachimaga.com/free/article/20250220/055960.php
- https://pachinko-spec.info/spec-detail/148452/
