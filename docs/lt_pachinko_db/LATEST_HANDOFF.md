# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-06 OPEN / `P清流物語4 ヌシを求めて4000匹`
- current machine records: checked for restart/duplicate avoidance

## This relay
Added `P清流物語4 ヌシを求めて4000匹` as COMPLETE_CORE and advanced within the OPEN 2025-01-06 boundary.

### P清流物語4 ヌシを求めて4000匹
- path: `docs/lt_pachinko_db/machines/2025-01-06_p_seiryu_monogatari_4_nushi_4000.md`
- manufacturer: サンスリー（販売: 三洋販売）
- formalModel: P清流物語4HLC
- releaseDate: 2025-01-06
- gameType: 1種2種混合 / c時短 / ST型RUSH / ボーナス型LT
- normal jackpot: 約1/199.8
- right hit: 約1/74.4（大当り約1/199.8 + c時短約1/118.7の合算）
- initial payout: 3R 約300個（払出）
- direct RUSH: 50%
- TOTAL RUSH entry: 約62%（チャンスタイム20回の引き戻し込み）
- RUSH: `清流チャンス` 88回 / 継続約70%（約69.6%）
- LT: `カウントアップCHANCE`
- LT type: ボーナス型。上位RUSHではない。
- LT entry: 清流チャンス中の右打ち大当り約63%
- LT payout: 約2000個 約43%、約4000個 約20%。非LT側約300個 約37%。
- LT continuation: N/A。当該大当り消化でLT終了し、清流チャンスへ復帰。
- status: COMPLETE_CORE
- conflict: none
- missing core field: 通常初当り基準の総LT到達率は直接公表値未確認のため推測せず。

Important definition handling:
- メーカー公式/プレスリリースでLT搭載を直接確認。
- 本機は「ボーナス型LT」。清流チャンスを上位LT RUSHとして扱わない。
- 必勝本はLT正式名称を`カウントアップCHANCE`、発動契機を右打ち中大当り約63%、終了を全大当り消化、終了後を清流チャンスと明記。
- P-WORLDの一部モード説明に清流チャンスをLTとする表現があるが、メーカー/業界のボーナス型LT説明および必勝本の正式LT解説と照合し、定義差としてレコードに注記。
- 50%直RUSHと、チャンスタイム引き戻し込みTOTAL約62%を分離。
- RUSH継続約70%は清流チャンスの値。ボーナス型LT自体に継続率を設定しない。
- 右打ち約1/74.4は大当りとc時短の合算。c時短単体約1/118.7と分離。

## QA this relay
- LT非搭載混入、別スペック混同、RUSH/LT定義、c時短合算、払出定義を横断確認。
- 既知CONFLICT `P GO!GO!郷 革命の5` は解消根拠なしのため維持。
- 既知UNVERIFIED `PAハイスクール・フリート オールスター すい～とでハッピー!2400` の通常初当り基準総LT到達率は推測せず維持。
- INDEXは30件時点の旧集計で、現行machine records/handoffより古い。INDEXの古い件数で現行状態を上書きしない。

## 2025-01-06 boundary
**OPEN.**

Processed LT machines this date:
1. `P戦国乙女7 終焉の関ヶ原` — COMPLETE_CORE
2. `eフィーバー戦姫絶唱シンフォギア4 キャロルver.` — COMPLETE_CORE
3. `P清流物語4 ヌシを求めて4000匹` — COMPLETE_CORE

Remaining same-date queue:
4. `P世界最高の暗殺者、異世界貴族に転生する`
5. `eぱちんこ押忍！番長 漢の頂`
6. `PLTジューシーハニー極嬢`

Before closing the date, independently re-enumerate 2025-01-06 and classify `e ULTRAMAN 2400★80` plus any additional pachinko introductions by LT status. LT-negative machines are boundary notes only, not DB records.

## Effective DB state
Previous handoff:
- machine records: 51
- COMPLETE_CORE: 50
- CONFLICT: 1 (`P GO!GO!郷 革命の5`)

After this relay:
- machine records: **52**
- COMPLETE_CORE: **51**
- CONFLICT: **1**
- 2024-12-02 boundary: CLOSED
- 2024-12-16 boundary: CLOSED
- 2025-01-06 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
1. Re-sync latest main README, LT mission, INDEX, this handoff, and current machine files.
2. Continue **2025-01-06** with `P世界最高の暗殺者、異世界貴族に転生する` unless newer main has processed it.
3. Then continue `eぱちんこ押忍！番長 漢の頂` → `PLTジューシーハニー極嬢` without skipping candidates.
4. For every record, cross-check LT name/routes/rates, normal/RUSH/LT probabilities, payout allocation, support/ST and game flow.
5. Do not infer unpublished total LT-arrival values; use UNVERIFIED only after broad re-search.
6. Independently enumerate the full 2025-01-06 date, including `e ULTRAMAN 2400★80`, before marking it CLOSED.

## Sources used this relay
- https://www.sanyobussan.co.jp/products/pk_seiryu4/
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20241105.pdf
- https://news.p-world.co.jp/articles/29380
- https://amusement-japan.co.jp/article/detail/10004614/
- https://web-greenbelt.jp/post-89949/
- https://p.hisshobon.jp/machine/4431/1/106116
- https://www.p-world.co.jp/machine/database/10158
- https://nana-press.com/kaiseki/machine/869/
