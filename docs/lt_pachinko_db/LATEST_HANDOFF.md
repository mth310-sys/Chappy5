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

## 2026-03-02 boundary — OPEN 3/12
Boundary re-enumerated from 一撃 2026年3月新台カレンダー and cross-checked against HAZUSE 2026年3月導入機種 / K-Navi 2026年3月カレンダー. 12 pachinko candidates retained in calendar order.

1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — COMPLETE_CORE
4. P攻殻機動隊SAC_2045 LT99ver. — UNPROCESSED
5. e牙狼11～冴島大河～魔戒BURST Ver. — UNPROCESSED
6. P Re:ゼロから始める異世界生活 season2 249ver. — UNPROCESSED
7. P Re:ゼロから始める異世界生活 season2 129ver. — UNPROCESSED
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
- 4500個時はLT内上乗せモード `ゴールデンタイム`。LT正式名称は `超マッスルRUSH`。

### 2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
- record: `docs/lt_pachinko_db/machines/2026-03-02_p_sengoku_otome_7_99ver.md`
- commit: `dbf567b2cb96179327cb8766b1719d29d624c169`
- アムテックス、型式 `P戦国乙女7L0YU1`、検定番号 `5P0670`。
- canonical資料群はRUSH TOTAL約63%。通常時詳細振り分けは10R1000個+LT 0.6% / 3R300個+乙女RUSH 62.4% / 3R300個+通常37.0%。
- 下位 `乙女RUSH` はST60+残4、TOTAL継続約75%。c時短 `天剣チャンス` 約1/471.4、10000回、そこからLT突入約50%。
- LT `極乙女RUSH` はST138+残4、継続約94%。
- CONFLICT: パチマガスロマガFREE同型式ページ本文のみRUSH突入約53%。他資料群約63%と競合し、平均せず維持。

### 3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-03-02_p_bofuri_kyokufuri_129ver.md`
- commit: `c78aed0efbbd3f4a93d09f3882ac5a11944fdf93`
- 藤商事、型式 `P防振り 極振り129verFVZ`、検定番号 `510561`。2026-03-02導入。
- 通常約1/129（特図1小当り確率）。初当り約300個後、LT GETチャレンジ `NewWorld Online` へ100%（V入賞条件）。
- 下位は30回、右約1/106、大当り期待度約25%。右大当り時LTジャッジ100%発生、成功約50%。
- LT `NewWorld Online極振り170` は170回、右約1/106、継続約80%。
- LT GETチャレンジ中: 4350個+LT 約1% / 3400個+LT 約10% / 2450個+LT 約39% / 1500個+下位継続 約50%。LT中も1/10/39/50%で全てLT継続。
- 1500/2450/3400/4350個は特図2大当り3回分の払出合計。単一大当り出玉ではない。
- 通常遊技全体基準の総LT到達率は直接公表値未確認。約25%×約50%等から独自算出しない。
- 遊タイム非搭載。主要資料間に未解決競合なし。
- sources: https://news.p-world.co.jp/articles/32725/yugitsushin ; https://news.p-world.co.jp/articles/32706/greenbelt ; https://hazuse.com/machine/pachinko/PX0338/ ; https://p.hisshobon.jp/machine/4690/1/113552 ; https://nana-press.com/kaiseki/machine/1122/35459/ ; https://www.p-world.co.jp/machine/database/10423

## Effective DB state
Previous: 180 machine records / 177 COMPLETE_CORE / 3 CONFLICT.
This relay added one LT-equipped COMPLETE_CORE record.
- machine records: **181**
- COMPLETE_CORE: **178**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-02 candidate #4 `P攻殻機動隊SAC_2045 LT99ver.`**. Duplicate-search first and distinguish it from the already registered 2024-09-17 `P攻殻機動隊SAC_2045 199LTver.` and other sibling specs before creating a record.

After #4, continue candidates #5-#12 in stored calendar order. LT-negative candidates receive no machine record, but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
