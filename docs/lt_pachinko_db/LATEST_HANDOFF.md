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

## 2026-03-02 boundary — OPEN 10/12
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
9. `docs/lt_pachinko_db/machines/2026-03-02_e_kabaneri_2_sakaseya_sanzen.md` — COMPLETE_CORE — commit `19eff6f60a6b7688f7f99c12011b3fcadb5ff765`
10. `docs/lt_pachinko_db/machines/2026-03-02_e_madoka_magica_3_jikan_soko_hajimari_no_negai.md` — COMPLETE_CORE — commit `09ac7f0775d1484d2ac82aee1d3d348da701637e`

### 10. e 魔法少女まどか☆マギカ3 時間遡行～始まりの願い～ — COMPLETE_CORE
- 京楽産業.（型式/製造: オッケー.）、正式型式 `e魔法少女まどか☆マギカ3LPM1`、検定番号 `5P1435`、2026-03-02導入。
- 通常1/319.9、下位「ワルプルギスの夜」1/146.8、LT「アルティメット超RUSH」1/82.4。
- 初当り約70%がRUSH系統（内1%は1500個＋LT直行）。69%は450個＋ワルプルギスの夜、30%は450個＋通常。
- ワルプルギスの夜はST100回、突破/継続期待値約50%。同状態中の大当りは1500個＋LTへ100%昇格。
- LTはST130回、継続約80%。LT中3000個75% / 750個25%、双方LT継続。3000個は複数大当り合計表現として単発出玉と分離。
- LT発動経路は通常1%直行と下位RUSH突破の2本。通常初当り基準の総LT到達率は直接公表値を確認できず、独自合算しない。
- LTは普図抽選STで、130回スルー時は残保留なしで通常へ。遊タイム非搭載。
- 遊技通信/P-WORLD業界記事、必勝本、一撃、パチマガ、P-WORLD機種DBを横断し主要値一致。未解決競合なし。
- 2024年 `P魔法少女まどか☆マギカ3` と別機種/別スペックとして分離。
- evidence:
  - https://news.p-world.co.jp/articles/32802/yugitsushin
  - https://hisshobon.com/machineinfo/101137/
  - https://hisshobon.com/machineinfo/101139/
  - https://1geki.jp/pachinko/e_madokamagica3_hajimari/
  - https://pachimaga.com/free/mach/maker-p/kyoraku/064478.php
  - https://www.p-world.co.jp/machine/database/10429

## Effective DB state
Previous: 186 machine records / 183 COMPLETE_CORE / 3 CONFLICT.
This relay added one LT-equipped COMPLETE_CORE record.
- machine records: **187**
- COMPLETE_CORE: **184**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-02 candidate #11 `PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン`**. Duplicate-search first and verify formal commercial/model name, manufacturer, and LT-equipped status before writing.

After #11, continue candidate #12 `eアクダマドライブ`. LT-negative candidates receive no machine record, but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
