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
- 2026-03-02 — CLOSED 12/12 calendar candidates processed; 11 LT-equipped records, 1 LT-negative exclusion.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。
- `P戦国乙女7 終焉の関ヶ原 99ver.` — RUSH突入約63%対約53%の同型式ページ競合。CONFLICT維持。

## 2026-03-02 boundary — CLOSED 12/12
Boundary re-enumerated from 一撃 2026年3月新台カレンダー and cross-checked against HAZUSE / K-Navi. 一撃の2026-09-08更新版でも同日12パチンコ候補を再確認。

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
12. eアクダマドライブ — COMPLETE_CORE

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
12. `docs/lt_pachinko_db/machines/2026-03-02_e_akudama_drive.md` — COMPLETE_CORE — commit `ca208a052a2572371d40b25e918ee71b6927049f`

## 2026-03-16 boundary — OPEN 1/5 processed
一撃2026年3月カレンダー（2026-09-08更新）の3/16候補を継続処理。候補ごとにLT搭載可否を個別監査する。

1. PキングモンスターRUSH 67Ver. — LT-NON-EQUIPPED / EXCLUDED
2. e 乃木坂46 Ⅱ SWEET Version — UNPROCESSED
3. スマパチ SSSS.GRIDMAN メガSTART 159ver. — UNPROCESSED
4. P モモキュンソード 速撃99ver. — UNPROCESSED
5. Pえとたま2 神祭 干支甘 — UNPROCESSED（一撃はLTタグあり）

### 1. PキングモンスターRUSH 67Ver. — LT-NON-EQUIPPED / EXCLUDED
- 竹屋、正式型式 `PキングモンスターRUSH AK`、検定番号 `4P1455`、2026-03-16導入。
- HAZUSEが同型式について「ラッキートリガー 非搭載」と直接明記。DB対象外のためmachine recordは作成しない。
- 通常約1/67.6、高確率約1/45.5。初当り25%で小当りRUSH付き確変へ入り、3回または7回の確変リミットで構成される旧来型の確変＋小当りRUSH仕様。LTではない。
- 通常時振り分けは8R確変・7回セット1% / 3R確変・7回セット9% / 3R確変・3回セット15% / 3R通常75%。P-WORLD、パチマガスロマガFREE、なな徹、K-NaviでもLTではなく確変リミット＋小当りRUSH構造として一致。
- evidence:
  - https://hazuse.com/hd/4p1455/
  - https://www.p-world.co.jp/machine/database/10443
  - https://pachimaga.com/free/mach/maker-p/takeya/064770.php
  - https://nana-press.com/kaiseki/machine/1120/35701/
  - https://p-kn.com/pachinko/4449/
  - https://web-greenbelt.jp/post-107423/

## Effective DB state
- machine records: **189**
- COMPLETE_CORE: **186**
- CONFLICT: **3**
- This relay added no machine record because candidate #1 is confirmed LT-negative.
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-16 candidate #2 `e 乃木坂46 Ⅱ SWEET Version`**. Duplicate-search first, then verify LT-equipped status using formal commercial/model name, manufacturer and sibling-spec variants. LT-negative candidates receive no machine record but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
