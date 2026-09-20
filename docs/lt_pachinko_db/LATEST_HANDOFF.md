# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-06 OPEN / first candidate P戦国乙女7 終焉の関ヶ原
- current machine records: checked for restart/duplicate avoidance

## This relay
Added `P戦国乙女7 終焉の関ヶ原` as COMPLETE_CORE and advanced within the OPEN 2025-01-06 boundary.

### P戦国乙女7 終焉の関ヶ原
- path: `docs/lt_pachinko_db/machines/2025-01-06_p_sengoku_otome_7_shuen_no_sekigahara.md`
- manufacturer: アムテックス（平和）
- formalModel: P戦国乙女7L9YY7
- releaseDate: 2025-01-06
- gameType: 1種2種混合 / 下位RUSHなし・RUSH=LT
- normal figure-hit: 約1/399.6; 強カワチャージ約1/399は別契機
- LT challenge entry: 75%
- LT challenge success: 約50%
- LT: `乙女RUSH`
- LT probability during RUSH: 約1/97.0
- LT support: 140回
- LT continuation: 約77%
- initial 25% branch: 280個 + 出陣モード50回
- LT challenge allocation: 約5000個以上+LT 7.2% / 約3000個+LT 42.8% / 約3000個+通常50%
- LT allocation: 約6000個以上6% / 約4000個18.5% / 約2000個75.5%、全てLT継続
- status: COMPLETE_CORE
- conflict: none
- missing core fields: none

Important definition handling:
- 2025-01-06 399版を後発LLサイズ299ver./99ver.から分離。
- 通常RUSH→上位LTではなく、LTチャレンジ突破後の乙女RUSH自体がラッキートリガー。
- 通常初当り全体からの総LT到達率は75%×50%を独自の公表値として保存せず、資料が直接示す経路別75%/約50%を保持。
- 約3000/5000/2000/4000/6000個は複数大当り+その他入賞を含む払出表記として保存。

## 2025-01-06 boundary
**OPEN.**

Processed LT machines this date:
1. `P戦国乙女7 終焉の関ヶ原` — COMPLETE_CORE

Previously discovered same-date LT candidates still to process, in queue order:
2. `eフィーバー戦姫絶唱シンフォギア4 キャロルver.`
3. `P清流物語4 ヌシを求めて4000匹`
4. `P世界最高の暗殺者、異世界貴族に転生する`
5. `eぱちんこ押忍！番長 漢の頂`
6. `PLTジューシーハニー極嬢`

Before closing the date, independently re-enumerate 2025-01-06 and classify `e ULTRAMAN 2400★80` plus any additional pachinko introductions by LT status. LT-negative machines are boundary notes only, not DB records.

## Effective DB state
Previous handoff:
- machine records: 49
- COMPLETE_CORE: 48
- CONFLICT: 1 (`P GO!GO!郷 革命の5`)

After this relay:
- machine records: **50**
- COMPLETE_CORE: **49**
- CONFLICT: **1**
- 2024-12-02 boundary: CLOSED
- 2024-12-16 boundary: CLOSED
- 2025-01-06 boundary: **OPEN**
- `INDEX.md` is stale and must not override this handoff/current machine files.

## Next restart point
1. Re-sync latest main README, LT mission, INDEX, this handoff, and current machine files.
2. Continue **2025-01-06** with `eフィーバー戦姫絶唱シンフォギア4 キャロルver.` unless newer main has processed it.
3. Then continue the same-date queue without skipping candidates.
4. For every record, cross-check LT name/routes/rates, normal/RUSH/LT probabilities, payout allocation, support/ST and game flow.
5. Do not infer unpublished total LT-arrival values; use UNVERIFIED only after broad re-search.
6. Independently enumerate the full 2025-01-06 date before marking it CLOSED.

## Sources used this relay
- https://news.p-world.co.jp/articles/29241/greenbelt
- https://1geki.jp/pachinko/p_otome7/
- https://1geki.jp/pachinko/p_otome7/51/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/063/kh01.php
- https://p-kn.com/pachinko/4238/
