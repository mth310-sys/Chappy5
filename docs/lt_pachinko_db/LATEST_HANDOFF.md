# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- existing machine records searched before write; no duplicate `PLT世界でいちばん強くなりたい!2` record existed.

## This relay
### PLT世界でいちばん強くなりたい!2 — COMPLETE_CORE added
path: `docs/lt_pachinko_db/machines/2025-05-07_plt_sekai_de_ichiban_tsuyoku_naritai_2.md`
- サンセイR&D / 型式 `PLT世界でいちばん強くなりたいMQ` / 2025-05-07 / ライトミドル一種二種混合LT。
- 通常1/199.5、右1/1.71。初当りは6R約600個で60%が下位「悶STARラッシュ」、40%通常。
- 下位は時短2回+残保留1個、TOTAL約93%（2回約82.8% + 残保留1個約58.5%の合算定義）。
- LT正式名称 `悶STARラッシュHYPER`。下位RUSH中10Rの50%でLT。全右打ち大当りを分母にするとLT付き10R 3%。10R合計6%なので分母差として整合。
- LTは時短100回+残保留1個、TOTAL約99%。LT本体約97.5% + 残保留1個約58.5%の合算。
- 下位特図2: 10R+LT 3% / 10R+下位3% / 2R+下位94%。
- LT特図2: 10R+LT 6.0% / 2R+LT 91.5% / 2R+時短なし2.5%。時短なし後は `一発逆転さくらスペシャル` で残保留1個を抽選し、当選時は下位RUSH振り分けへ。
- 払出: 10R約700個 / 6R約600個 / 2R約140個。
- 遊タイム・潜伏なし。
- 通常初当りを分母とする総LT到達率は直接公表値を確認できず `UNVERIFIED_AFTER_RESEARCH`。経路値から独自計算していない。
- 業界一次系2資料 + 一撃 + なな徹 + P-WORLDで照合。confidence `INDUSTRY + ANALYSIS_HIGH`、conflict none。

Sources:
- https://news.p-world.co.jp/articles/30480/amusement
- https://news.p-world.co.jp/articles/30455/greenbelt
- https://1geki.jp/pachinko/p_sekatuyo2/
- https://1geki.jp/pachinko/p_sekatuyo2/51/
- https://nana-press.com/kaiseki/machine/963/28963/
- https://www.p-world.co.jp/machine/database/10248

## Previous chronology decisions retained
### PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver. — LT-negative, excluded
- 1種2種混合甘デジ / `魔王PLAYモード`; detailed sources show V-STOCK loop but no LT structure.
- Independent calendar places it 2025-04-07. Do not register absent distinct LT-positive evidence.

### P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
path: `docs/lt_pachinko_db/machines/2025-05-07_p_egashira_250_chouama_lt.md`
- canonical nationwide 2025-05-07; limited Shinjuku advance introduction 2025-04-21 preserved in notes, no duplicate under 4/21.

### デジハネP北斗の拳 慈母 — COMPLETE_CORE
path: `docs/lt_pachinko_db/machines/2025-05-07_digihane_p_hokuto_no_ken_jibo.md`
- 2025-05-07 canonical / LT `HYPER BATTLE MODE` / about 94% continuation.

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
1. e東京喰種 — COMPLETE_CORE
2. Pゾンビランドサガ — COMPLETE_CORE
3. P痛いのは嫌なので防御力に極振りしたいと思います。 — COMPLETE_CORE
- 江頭超甘LT 4/21 is advance-only; canonical 5/7.

### 2025-05-07 — OPEN
1. P【超甘LT】江頭2:50inナナシー 奇跡の99% — COMPLETE_CORE
2. デジハネP北斗の拳 慈母 — COMPLETE_CORE
3. PLT世界でいちばん強くなりたい!2 — COMPLETE_CORE (this relay)
4. e仮面ライダーBLACK — LT-positive candidate; NEXT
5. P攻殻機動隊SAC_2045 大入りLTver — LT-positive candidate
6. P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver. — LT-positive by title; verify full core
7. PF機動戦士ガンダムユニコーン再来 129ver. — verify LT/non-LT before registration
8. P ToLOVEるダークネス 100ver. — verify LT/non-LT before registration
9. P海物語 極JAPAN / P織田信奈の野望 下剋上 / P乗物娘 with CYBER JAPAN DANCERS 2nd season — verify LT status during boundary re-enumeration; do not assume.

Independent calendar source retained:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 89 records / 88 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **90**
- COMPLETE_CORE: **89**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Continue 2025-05-07 with `e仮面ライダーBLACK`. Verify exact formal model/manufacturer, normal/right probabilities, initial and RUSH distributions, lower RUSH structure, LT formal name, LT route/rate, continuation definition, payout distribution, support counts and any special system across manufacturer/industry/multiple analysis sources. Then continue `P攻殻機動隊SAC_2045 大入りLTver` → `P宇宙戦艦ヤマト2202 超波動 森雪 199LT ver.` and verify the remaining 5/7 candidates. Re-enumerate the full boundary from independent calendars before closing 5/7.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
