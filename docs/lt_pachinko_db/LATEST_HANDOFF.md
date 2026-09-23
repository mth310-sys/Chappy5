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

## 2026-03-02 boundary — OPEN 7/12
Boundary re-enumerated from 一撃 2026年3月新台カレンダー and cross-checked against HAZUSE 2026年3月導入機種 / K-Navi 2026年3月カレンダー. 12 pachinko candidates retained in calendar order.

1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — COMPLETE_CORE
4. P攻殻機動隊SAC_2045 LT99ver. — COMPLETE_CORE
5. e牙狼11～冴島大河～魔戒BURST Ver. — COMPLETE_CORE
6. P Re:ゼロから始める異世界生活 season2 249ver. — LT-NON-EQUIPPED / EXCLUDED
7. P Re:ゼロから始める異世界生活 season2 129ver. — COMPLETE_CORE
8. eワンパンマン2～正義執行 — UNPROCESSED
9. e 甲鉄城のカバネリ2 咲かせや燦然 — UNPROCESSED
10. e 魔法少女まどか☆マギカ3 時間遡行～始まりの願い～ — UNPROCESSED
11. PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン — UNPROCESSED
12. eアクダマドライブ — UNPROCESSED

Boundary evidence:
- https://1geki.jp/newmachinecalender/202603/
- https://hazuse.com/new-machine/202603h/
- https://p-kn.com/calendar/202603/

### 1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-03-02_e_fever_dumbbell_nankilo_moteru_2.md`
- commit: `f85ea986c5778ec34c20dc76e82694a5050c6b38`
- SANKYO、型式 `eフィーバーダンベル何キロ持てる？2F`、検定番号 `5P1254`。2026-03-02導入。
- 通常図柄揃い約1/149.9、右図柄揃い約1/97.7。初当り300個。
- 下位RUSHなし。初当り約25%でLT `超マッスルRUSH` へ直接突入。
- LTはST127回、継続約73%。特図2は大当り3回1セット、4500個+α 12.5% / 3300個 37.5% / 2100個 37.5% / 900個 12.5%。

### 2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
- record: `docs/lt_pachinko_db/machines/2026-03-02_p_sengoku_otome_7_99ver.md`
- commit: `dbf567b2cb96179327cb8766b1719d29d624c169`
- アムテックス、型式 `P戦国乙女7L0YU1`。canonical資料群はRUSH TOTAL約63%。通常時詳細振り分けは10R1000個+LT 0.6% / 3R300個+乙女RUSH 62.4% / 3R300個+通常37.0%。
- 下位 `乙女RUSH` ST60+残4、TOTAL継続約75%。c時短 `天剣チャンス` 約1/471.4、10000回、そこからLT突入約50%。
- LT `極乙女RUSH` ST138+残4、継続約94%。
- CONFLICT: パチマガスロマガFREE同型式ページ本文のみRUSH突入約53%。

### 3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-03-02_p_bofuri_kyokufuri_129ver.md`
- commit: `c78aed0efbbd3f4a93d09f3882ac5a11944fdf93`
- 藤商事、型式 `P防振り 極振り129verFVZ`。通常約1/129。初当り後100%でLT GETチャレンジ `NewWorld Online` 30回。
- 右約1/106、大当り期待度約25%。右大当り時LTジャッジ、成功約50%。
- LT `NewWorld Online極振り170` は170回、継続約80%。

### 4. P攻殻機動隊SAC_2045 LT99ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-03-02_p_ghost_in_the_shell_sac_2045_lt99ver.md`
- commit: `55075ba6c918acda60f5b3e785f02f5eac38b06b`
- ディ・ライト、型式 `P攻殻機動隊SAC＿2045LTD-VS`、2026-03-02導入。2024年199LTver.とは別スペック。
- 通常約1/99.9。初当り200個、50%で `GHOST RUSH` 64回。
- GHOST RUSHは初回実質約1/94・継続約50%。1回継続後は実質約1/69・同64回で継続約61%。
- RUSH中大当り20%（1500個当選時28.6%）でLT `GHOST RUSH BURST`。
- LTは実質約1/69、ST155回、継続約90%。LT中1500個70% / 200個30%、全てLT継続。
- 通常時基準LT突入率 `1/1162` は直接公表値として保存。

### 5. e牙狼11～冴島大河～魔戒BURST Ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-03-02_e_garo_11_taiga_makai_burst_ver.md`
- commit: `f4af72248e20d2a964e01e0b74066538b05026b8`
- サンセイR&D。業界発表型式 `e牙狼11トリプルバーストRF`、一撃/K-Navi等 `e牙狼トリプルバーストRF`。表記差を保持。
- 通常約1/349.9、右1/1。初当りALL750個。約25%で `魔戒BURST`、75%通常。
- 魔戒BURST中は1500個を獲得し、約64.6%でLT `魔戒CHANCE` へ。失敗35.4%は通常。
- LT突入時ストック: 1セット35.4% / 2セット22.9% / 3セット41.7%。
- LTはALL1500個。各大当り75%でストック維持、25%で1個消費。ストック全消費で通常。
- 公表継続率: 1セット約75.0% / 2セット約87.5% / 3セット約91.7%。平均大当り回数から逆算した継続率であることを注記。
- 通常初当り基準の総LT到達率は直接公表値未確認。25%×64.6%から独自算出せずUNVERIFIED。
- 遊タイム非搭載。数値競合なし。

### 6. P Re:ゼロから始める異世界生活 season2 249ver. — LT-NON-EQUIPPED / EXCLUDED
- 2026-03-02導入、大都技研、型式 `P/Re:ゼロから始める異世界生活season2/M04`（検定通過資料）。
- 通常1/249.9、RUSH中1/99.9、RUSH突入60%、ST163回、継続約81%。右は2400個+α 25% / 1200個 55% / 240個 20%。
- 必勝本基本スペックが `ラッキートリガー 非搭載` と直接明記。K-Naviも249ver.は通常RUSH仕様、同ページで129ver.のみLT搭載を明示。P-WORLD、なな徹、一撃にも249ver.のLT遷移なし。
- 2400BONUS中の強欲フリーズによる1200個上乗せループをLTと誤認しない。LT DBには機種レコードを作成しない。
- evidence: https://hisshobon.com/machineinfo/101041/ ; https://p-kn.com/pachinko/4461/ ; https://www.p-world.co.jp/machine/database/10434 ; https://nana-press.com/kaiseki/machine/1132/35339/ ; https://1geki.jp/pachinko/p_re0season2_249/51/ ; https://news.p-world.co.jp/articles/32855/greenbelt

### 7. P Re:ゼロから始める異世界生活 season2 129ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-03-02_p_rezero_season2_129ver.md`
- commit: `1a894a5ae0b9b7bce60f44cd68c56aab1d5dbd0c`
- 大都技研、型式 `P/Re:ゼロから始める異世界生活season2/A10`、検定番号 `5P0968`。2026-03-02導入。G-net/HAZUSEがLT搭載を直接確認。
- 通常1/129.9、RUSH中1/99.9。初当り300個、50%で `強欲RUSH`。ST120回、継続約70%。
- RUSH中: 1500個25% / 750個55% / 300個20%。1500個 `超強欲1500BONUS` 時の50%でLT `超強欲PREMIUM BONUS` 発動。
- LTはボーナス型。300個上乗せ約95%ループ、突入時出玉期待値7000個OVER。ループ終了後は強欲RUSHへ復帰。
- 通常初当り基準の総LT到達率は直接公表値未確認。経路値から独自算出しない。
- 遊タイム非搭載。
- source note: 必勝本基本スペックページの項目欄だけが `ラッキートリガー 非搭載` と記載する一方、同ページ本文は「シリーズ初となるLTを搭載」、同サイトLT専用解説もLTを詳細掲載。G-net、HAZUSE、グリーンべると等の独立資料もLT搭載で一致。単独欄の自己矛盾は消さずrecordに注記したが、LT搭載判定と主要数値には未解決競合なし。

## Effective DB state
Previous: 183 machine records / 180 COMPLETE_CORE / 3 CONFLICT.
This relay excluded one LT-negative sibling and added one LT-equipped COMPLETE_CORE record.
- machine records: **184**
- COMPLETE_CORE: **181**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-02 candidate #8 `eワンパンマン2～正義執行`**. Duplicate-search first and verify formal model name / manufacturer / LT-equipped status before writing.

After #8, continue candidates #9-#12 in stored calendar order. LT-negative candidates receive no machine record, but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
