# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 5 / chronological collection + QA

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-06 OPEN / `eフィーバー戦姫絶唱シンフォギア4 キャロルver.`
- current machine records: checked for restart/duplicate avoidance

## This relay
Added `eフィーバー戦姫絶唱シンフォギア4 キャロルver.` as COMPLETE_CORE and advanced within the OPEN 2025-01-06 boundary.

### eフィーバー戦姫絶唱シンフォギア4 キャロルver.
- path: `docs/lt_pachinko_db/machines/2025-01-06_e_fever_symphogear_4_carol_ver.md`
- manufacturer: SANKYO
- formalModel: eフィーバー戦姫絶唱シンフォギア4F
- releaseDate: 2025-01-06
- gameType: 1種2種混合 / 普図時短ショートST / 下位RUSHなし・RUSH=LT
- normal total jackpot: 1/159.8
- normal figure-hit: 約1/399.7
- 戦姫チャージ: 約1/266.3（解析資料）
- right figure-hit: 約1/10.9
- LT: `絶唱RUSH`
- LT entry: 図柄揃い時約50%。SPECIAL FEVER / 最終決戦勝利 / 戦姫チャージの一部
- LT support: 15回 or 10000回
- LT continuation: 15回約77% / 10000回約99.9% / TOTAL約81%
- initial figure-hit payout: 1500個（払出）
- 戦姫チャージ: 192個（払出）
- LT payout: 実質50%が1500個、50%が3000個以上。10R×2+α / 10R×2 / 10R + V-STOCK/10000回/15回の振り分けを保存
- status: COMPLETE_CORE
- conflict: none
- missing core fields: none

Important definition handling:
- 通常時大当り1/159.8と図柄揃い約1/399.7を分離。戦姫チャージを含む/含まない定義を混同しない。
- 2025-01-06キャロルver.を、2025-02-03の199ver.および2025-08-04のLT-Light/Lightから分離。
- RUSH突入=LT発動であり、通常RUSH→上位LT構造ではない。
- 約81%は15回約77%と10000回約99.9%のTOTAL値。
- 1500/192/3000/4500個等は払出。解析資料にある実獲得約1400/176個は別定義として記録。
- 業界記事の「V入賞を契機に3000個以上見込み約60%」と解析振り分け「実質50%が3000個以上」は分母/定義が異なるため競合扱いしない。

## QA this relay
- 新規レコードについてLT非搭載混入、重複、別スペック混同、通常大当り/図柄揃い/RUSH/LT確率混同、払出/実獲得混同を確認し、上記の通り定義分離。
- 既知CONFLICT `P GO!GO!郷 革命の5` は解消根拠を新たに得ていないためCONFLICT維持。
- 既知UNVERIFIED `PAハイスクール・フリート オールスター すい～とでハッピー!2400` の通常初当り基準総LT到達率は推測せず維持。
- INDEXは30件時点の旧集計で、現行machine records/handoffより古い。今回もINDEXの古い件数で現行状態を上書きしていない。

## 2025-01-06 boundary
**OPEN.**

Processed LT machines this date:
1. `P戦国乙女7 終焉の関ヶ原` — COMPLETE_CORE
2. `eフィーバー戦姫絶唱シンフォギア4 キャロルver.` — COMPLETE_CORE

Remaining same-date queue:
3. `P清流物語4 ヌシを求めて4000匹`
4. `P世界最高の暗殺者、異世界貴族に転生する`
5. `eぱちんこ押忍！番長 漢の頂`
6. `PLTジューシーハニー極嬢`

Before closing the date, independently re-enumerate 2025-01-06 and classify `e ULTRAMAN 2400★80` plus any additional pachinko introductions by LT status. LT-negative machines are boundary notes only, not DB records.

## Effective DB state
Previous handoff:
- machine records: 50
- COMPLETE_CORE: 49
- CONFLICT: 1 (`P GO!GO!郷 革命の5`)

After this relay:
- machine records: **51**
- COMPLETE_CORE: **50**
- CONFLICT: **1**
- 2024-12-02 boundary: CLOSED
- 2024-12-16 boundary: CLOSED
- 2025-01-06 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
1. Re-sync latest main README, LT mission, INDEX, this handoff, and current machine files.
2. Continue **2025-01-06** with `P清流物語4 ヌシを求めて4000匹` unless newer main has processed it.
3. Then continue the same-date queue without skipping candidates.
4. For every record, cross-check LT name/routes/rates, normal/RUSH/LT probabilities, payout allocation, support/ST and game flow.
5. Do not infer unpublished total LT-arrival values; use UNVERIFIED only after broad re-search.
6. Independently enumerate the full 2025-01-06 date before marking it CLOSED.

## Sources used this relay
- https://www.sankyo-fever.jp/collection/972/
- https://www.sankyo-fever.jp/products/machine_list/ppr/
- https://news.p-world.co.jp/articles/29950/greenbelt
- https://news.p-world.co.jp/articles/29268/amusement
- https://opt.p-world.co.jp/machine/database/10149
- https://1geki.jp/pachinko/e_sympho4/
- https://pachimaga.com/free/article/20250103/056410.php
- https://p.hisshobon.jp/machine/4433/1/106125
- https://p.hisshobon.jp/machine/4433/1/106128
- https://nana-press.com/kaiseki/machine/862/26637/
- https://nana-press.com/kaiseki/machine/862/25088/
