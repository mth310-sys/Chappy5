# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point was `P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver.`; duplicate search completed before write.

## This relay
### P 宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_p_yamato_2202_moriyuki_199lt.md`
- ビスティ（フィールズ発表） / 型式 `P宇宙戦艦ヤマト2202-3MF` / 2025-05-07 / ライトミドルST・直LT型。
- 通常図柄揃い約1/199.9、右約1/93.9（大当り+時短図柄の合算値）。
- 初当りは10R約1500個100%。約25%でLT `真波動RUSH`、約75%通常。下位RUSHなし。
- 真波動RUSHはST148回（144回+リザルト消化4回）、継続約80%。約80%には `コスモリバース`（ST回数リセット）を含む。
- 特図2: 3000個（1500×2）約35% / 1500個約40% / 300個約12% / ST回数リセット約13%。全て真波動RUSH継続。
- 業界資料が「RUSHは直LT仕様」と明記。通常RUSHとLTを別状態に分離しない。
- 2024年10月導入のミドル版と別スペック。
- 遊技通信、P-WORLD、一撃、HAZUSE、K-Navi、ちょんぼりすたを横断。confidence `INDUSTRY + ANALYSIS_HIGH`、conflict none。

Sources:
- https://news.p-world.co.jp/articles/30770/yugitsushin
- https://www.p-world.co.jp/machine/database/10263
- https://1geki.jp/pachinko/p_yamato2202_ch199lt/51/
- https://hazuse.com/machine/pachinko/PX0284/genre/101/
- https://hazuse.com/machine/pachinko/PX0284/genre/103/
- https://p-kn.com/pachinko/4330/
- https://chonborista.com/pachinko/bisty/235355/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — OPEN
1. P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
2. デジハネP北斗の拳 慈母 — COMPLETE_CORE
3. PLT世界でいちばん強くなりたい!2 — COMPLETE_CORE
4. e仮面ライダーBLACK — COMPLETE_CORE
5. P攻殻機動隊SAC_2045 大入りLTver — COMPLETE_CORE
6. P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — COMPLETE_CORE (this relay)
7. PF機動戦士ガンダムユニコーン再来 129ver. — NEXT; verify LT/non-LT before registration
8. P ToLOVEるダークネス 100ver. — verify LT/non-LT before registration
9. P海物語 極JAPAN / P織田信奈の野望 下剋上 / P乗物娘 with CYBER JAPAN DANCERS 2nd season — verify LT status during boundary re-enumeration; do not assume.

Independent calendar retained:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 92 records / 91 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **93**
- COMPLETE_CORE: **92**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Continue 2025-05-07 with `PF機動戦士ガンダムユニコーン再来 129ver.` and determine LT-positive / LT-negative status before any registration. Then verify `P ToLOVEるダークネス 100ver.` and the remaining 5/7 candidates (`P海物語 極JAPAN`, `P織田信奈の野望 下剋上`, `P乗物娘 with CYBER JAPAN DANCERS 2nd season`). Re-enumerate the full 2025-05-07 boundary from at least two independent calendars before closing it. Only LT-positive machines receive full records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
