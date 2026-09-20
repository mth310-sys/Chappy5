# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-06 OPEN / `P世界最高の暗殺者、異世界貴族に転生する`
- current machine records: checked for restart/duplicate avoidance

## This relay
Added `P世界最高の暗殺者、異世界貴族に転生する` as COMPLETE_CORE and advanced within the OPEN 2025-01-06 boundary.

### P世界最高の暗殺者、異世界貴族に転生する
- path: `docs/lt_pachinko_db/machines/2025-01-06_p_sekai_saikou_no_ansatsusha.md`
- manufacturer: JFJ（藤商事グループ）
- formalModel: P世界最高の暗殺者、異世界貴族に転生するJMB
- releaseDate: 2025-01-06
- gameType: 1種2種混合 / 普図抽選 / ST型RUSH
- normal symbol hit: 約1/319.5
- assassination charge: 約1/580.5
- normal jackpot combined: 約1/206.0
- direct 暗殺RUSH: 約60%
- TOTAL RUSH entry: 約70%（チャンスタイム引き戻し/LT直行込み）
- 暗殺RUSH: 約1/99.9 / 145回 / 約77%
- chance time: 約1/244.5 / 70回 / 図柄揃い期待約25%
- LT: `世界最高の暗殺RUSH`
- LT routes: 暗殺RUSH中3000個大当り25%、またはチャンスタイム中図柄揃い成功
- LT practical entry: 約1/863
- LT: 約1/99.9 / 163回 / 約81%
- right payout: 3000個25% / 1650個50% / 300個25%。暗殺RUSHでは3000個のみLT移行、チャンスタイム図柄揃い時は全振り分けLT、LT中は全てLT継続。
- status: COMPLETE_CORE
- conflict: none
- non-core unresolved: 暗殺チャージから暗殺RUSHへ昇格する割合は多系統再探索後も公開値未確認。

Important definition handling:
- 図柄揃い約1/319.5、暗殺チャージ約1/580.5、合算大当り約1/206.0を混同しない。
- 初当り図柄揃い時の暗殺RUSH直行は約60%。業界資料の約70%はチャンスタイム引き戻しおよび世界最高の暗殺RUSH突入を含むTOTAL値。
- LT実質突入約1/863は業界一次系で直接公表されているため推算値ではない。
- LT期待出玉約11762個はLT到達までの平均約4936個 + LT突入後期待6826個の合算であり、単一LT連の払出値として扱わない。
- 3000/1650/300個は複数大当り分を合算する表記を含み、V入賞条件を伴う。

## QA this relay
- LT搭載、型式、導入日、図柄揃い/チャージ分母、通常RUSH/LTのST回数、LT経路、振り分けを業界一次系・P-WORLD・解析資料で横断。
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

Remaining same-date queue:
5. `eぱちんこ押忍！番長 漢の頂`
6. `PLTジューシーハニー極嬢`

Before closing the date, independently re-enumerate 2025-01-06 and classify `e ULTRAMAN 2400★80` plus any additional pachinko introductions by LT status. LT-negative machines are boundary notes only, not DB records.

## Effective DB state
Previous handoff:
- machine records: 52
- COMPLETE_CORE: 51
- CONFLICT: 1

After this relay:
- machine records: **53**
- COMPLETE_CORE: **52**
- CONFLICT: **1**
- 2024-12-02 boundary: CLOSED
- 2024-12-16 boundary: CLOSED
- 2025-01-06 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
1. Re-sync latest main README, LT mission, INDEX, this handoff, and current machine files.
2. Continue **2025-01-06** with `eぱちんこ押忍！番長 漢の頂` unless newer main has processed it.
3. Then continue `PLTジューシーハニー極嬢` without skipping candidates.
4. Independently enumerate the full 2025-01-06 date, including `e ULTRAMAN 2400★80`, before marking it CLOSED.
5. For every LT record, cross-check LT name/routes/rates, normal/RUSH/LT probabilities, payout allocation, support/ST and game flow.
6. Do not infer unpublished total LT-arrival values; use UNVERIFIED only after broad re-search.

## Sources used this relay
- https://news.p-world.co.jp/articles/29455/amusement
- https://amusement-japan.co.jp/article/detail/10004619/
- https://news.p-world.co.jp/articles/29442/yugitsushin
- https://www.p-world.co.jp/machine/database/10161
- https://hisshobon.com/machineinfo/95145/
- https://chonborista.com/pachinko/fujishouji/223791/
- https://p-kn.com/pachinko/4248/
