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

## 2026-03-02 boundary — OPEN 8/12
Boundary re-enumerated from 一撃 2026年3月新台カレンダー and cross-checked against HAZUSE / K-Navi. 12 pachinko candidates retained in calendar order.

1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — COMPLETE_CORE
4. P攻殻機動隊SAC_2045 LT99ver. — COMPLETE_CORE
5. e牙狼11～冴島大河～魔戒BURST Ver. — COMPLETE_CORE
6. P Re:ゼロから始める異世界生活 season2 249ver. — LT-NON-EQUIPPED / EXCLUDED
7. P Re:ゼロから始める異世界生活 season2 129ver. — COMPLETE_CORE
8. eワンパンマン2～正義執行 — COMPLETE_CORE
9. e 甲鉄城のカバネリ2 咲かせや燦然 — UNPROCESSED
10. e 魔法少女まどか☆マギカ3 時間遡行～始まりの願い～ — UNPROCESSED
11. PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン — UNPROCESSED
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

### 8. eワンパンマン2～正義執行 — COMPLETE_CORE
- ニューギン、正式型式 `eワンパンマン2～正義執行LM10`、2026-03-02導入。
- 通常約1/179.55、HERO RUSH中SHOW DOWN発生率約1/98.55。
- 本機は下位RUSHを持たない直LT型。初当り25%でLT `HERO RUSH`、75%通常。
- 特図1: 10R×2 約2540個＋LT 4% / 6R 約710個＋LT 21% / 6R 約710個＋通常75%。
- LT `HERO RUSH`: 134回、継続約75%。
- 特図2: 10R×4 約5080個 50.00% / 10R約1270個＋不屈CHANCE2回 18.75% / 10R約1270個＋不屈CHANCE1回 7.02% / 10R約1270個 4.23% / STリセット20%。全てHERO RUSH継続。
- `5000発` は10R×4回の合計表現で単一大当り出玉ではない。
- 不屈CHANCEは最大2回の上乗せ抽選、1回あたり成功期待度約14%、成功時10R約1270個上乗せ。
- 遊タイム非搭載。
- 主要値は遊技通信/P-WORLD、P-WORLD機種DB、なな徹、パチンコビレッジ系機種DBで横断照合。未解決競合なし。
- 2026年11月予定の99ver.とは別スペック。混同禁止。
- evidence:
  - https://news.p-world.co.jp/articles/32926/yugitsushin
  - https://www.p-world.co.jp/machine/database/10439
  - https://nana-press.com/kaiseki/machine/1103/35379/
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/515/kh01.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/515/kh04.php

## Effective DB state
Previous: 184 machine records / 181 COMPLETE_CORE / 3 CONFLICT.
This relay added one LT-equipped COMPLETE_CORE record.
- machine records: **185**
- COMPLETE_CORE: **182**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-02 candidate #9 `e 甲鉄城のカバネリ2 咲かせや燦然`**. Duplicate-search first and verify formal commercial/model name, manufacturer, and LT-equipped status before writing.

After #9, continue candidates #10-#12 in stored calendar order. LT-negative candidates receive no machine record, but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
