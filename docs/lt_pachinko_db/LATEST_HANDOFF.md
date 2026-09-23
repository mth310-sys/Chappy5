# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-24
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before positive write

## Closed boundaries retained
- through 2025-11-17: previous closed boundaries retained.
- 2025-12-08 — CLOSED 9/9.
- 2025-12-22 — CLOSED 3/3.
- 2026-01-05 — CLOSED 11/11.
- 2026-01-19 — CLOSED 3/3.
- 2026-02-02 — CLOSED 10/10.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。
- `P戦国乙女7 終焉の関ヶ原 99ver.` — RUSH突入約63%対約53%の同型式ページ競合。CONFLICT維持。

## 2026-03-02 boundary — OPEN 11/12
Boundary re-enumerated from 一撃 2026年3月新台カレンダー and cross-checked against HAZUSE / K-Navi. 12 pachinko candidates retained in calendar order.

1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — COMPLETE_CORE
4. P攻殻機動隊SAC_2045 LT99ver. — COMPLETE_CORE
5. e牙狼11～冴島大河～魔戒BURST Ver. — COMPLETE_CORE
6. P Re:ゼロから始める異世界生活 season2 249ver. — LT-NON-EQUIPPED / EXCLUDED
7. P Re:ゼロから始める異世界生活 season2 129ver. — COMPLETE_CORE
8. eワンパンマン2～正義執行 — COMPLETE_CORE
9. e 甲鉄城のカバネリ2 咲かせや燦然 — COMPLETE_CORE
10. e 魔法少女まどか☆マギカ3 時間遡行～始まりの願い～ — COMPLETE_CORE
11. PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン — COMPLETE_CORE
12. eアクダマドライブ — UNPROCESSED

Boundary evidence:
- https://1geki.jp/newmachinecalender/202603/
- https://hazuse.com/new-machine/202603h/
- https://p-kn.com/calendar/202603/

## Current-boundary record pointers
1. `docs/lt_pachinko_db/machines/2026-03-02_e_fever_dumbbell_nankilo_moteru_2.md` — COMPLETE_CORE — commit `f85ea986c5778ec34c20dc76e82694a5050c6b38`
2. `docs/lt_pachinko_db/machines/2026-03-02_p_sengoku_otome_7_99ver.md` — CONFLICT — commit `dbf567b2cb96179327cb8766b1719d29d624c169`
3. `docs/lt_pachinko_db/machines/2026-03-02_p_bofuri_kyokufuri_129ver.md` — COMPLETE_CORE — commit `c78aed0efbbd3f4a93d09f3882ac5a11944fdf93`
4. `docs/lt_pachinko_db/machines/2026-03-02_p_ghost_in_the_shell_sac_2045_lt99ver.md` — COMPLETE_CORE — commit `55075ba6c918acda60f5b3e785f02f5eac38b06b`
5. `docs/lt_pachinko_db/machines/2026-03-02_e_garo_11_taiga_makai_burst_ver.md` — COMPLETE_CORE — commit `f4af72248e20d2a964e01e0b74066538b05026b8`
6. `P Re:ゼロから始める異世界生活 season2 249ver.` — LT非搭載確認済み、レコードなし。
7. `docs/lt_pachinko_db/machines/2026-03-02_p_rezero_season2_129ver.md` — COMPLETE_CORE — commit `1a894a5ae0b9b7bce60f44cd68c56aab1d5dbd0c`
8. `docs/lt_pachinko_db/machines/2026-03-02_e_one_punch_man_2_seigi_shikko.md` — COMPLETE_CORE — commit `1bfc2094aae1088fabf31d39ee0f0ef94f609195`
9. `docs/lt_pachinko_db/machines/2026-03-02_e_kabaneri_2_sakaseya_sanzen.md` — COMPLETE_CORE — commit `19eff6f60a6b7688f7f99c12011b3fcadb5ff765`
10. `docs/lt_pachinko_db/machines/2026-03-02_e_madoka_magica_3_jikan_soko_hajimari_no_negai.md` — COMPLETE_CORE — commit `09ac7f0775d1484d2ac82aee1d3d348da701637e`
11. `docs/lt_pachinko_db/machines/2026-03-02_pa_sengoku_otome_7_tokimeki_78ver.md` — COMPLETE_CORE — commit `4fec59dcf14c21ba8e849860bbeac5e57869a90c`

### 11. PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン — COMPLETE_CORE
- アムテックス、正式型式 `PA戦国乙女7～78GO1`、検定番号 `5P0712`、2026-03-02導入。アムテックス+ホール企業7社の共同開発PB機。
- 6段階設定。通常1/78.2～1/71.9。乙女RUSH中は大当り+c時短合算1/61.7～1/57.7。天剣チャンス/極乙女RUSH中1/63.7～1/59.5。
- 初当りは700個+LT直行0.1% / 350個+乙女RUSH59.9% / 350個+通常40.0%。(極)乙女RUSH突入TOTAL約60%。
- 下位「乙女RUSH」はST70回、残保留込み継続70.1～72.6%。乙女RUSH中特図2は700個48.4% / 280個48.4% / c時短「天剣チャンス」3.2%。
- 天剣チャンスは時短10000回（実質次回まで）。同チャンス中大当りの55%（700個50%+280個5%）でLT「極乙女RUSH」へ、45%は乙女RUSHへ。
- LT「極乙女RUSH」はST170回、残保留込み継続93.6～94.8%。LT中700個50% / 280個50%、双方LT継続。
- 通常時0.1%の10RからLT直行経路もある。通常遊技全体基準の総LT到達率は直接公表値を確認できず独自計算しない。
- 同日候補#2 99ver.（型式P戦国乙女7L0YU1）とは別スペック。主要値に未解決競合なし。
- evidence:
  - https://www.nikkansports.com/amusement/pachislot/news/202602090001182.html
  - https://news.p-world.co.jp/articles/32887
  - https://news.p-world.co.jp/articles/32889/greenbelt
  - https://hazuse.com/machine/pachinko/5P0712/
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/070/kh01.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/070/kh02.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/070/kh03.php
  - https://www.p-world.co.jp/machine/database/10441
  - https://1geki.jp/pachinko/pa_otome7_78ver/51/
  - https://1geki.jp/pachinko/pa_otome7_78ver/53/
  - https://pachimaga.com/free/mach/maker-p/amutex/064766.php

## Effective DB state
Previous: 187 machine records / 184 COMPLETE_CORE / 3 CONFLICT.
This relay added one LT-equipped COMPLETE_CORE record.
- machine records: **188**
- COMPLETE_CORE: **185**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-02 candidate #12 `eアクダマドライブ`**. Duplicate-search first and verify formal commercial/model name, manufacturer, LT-equipped status, RUSH/LT structure and sibling-spec distinctions before writing.

After #12, close the 2026-03-02 boundary only after checking the same-day candidate list for omissions, then enumerate the next chronological March 2026 introduction boundary from multiple calendars. LT-negative candidates receive no machine record, but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
