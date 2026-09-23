# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
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

## 2026-03-02 boundary — OPEN 1/12
Boundary re-enumerated from 一撃 2026年3月新台カレンダー and cross-checked against HAZUSE 2026年3月導入機種 / K-Navi 2026年3月カレンダー. 一撃 lists 12 pachinko machines on 2026-03-02; HAZUSE independently lists 12 pachinko entries on the same boundary. K-Navi also confirms 2026-03-02 as the first March boundary, though some display names are shortened/normalized differently.

Boundary candidates, preserving 一撃 calendar order among pachinko entries:
1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
2. P戦国乙女7 終焉の関ヶ原 99ver. — UNPROCESSED
3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — UNPROCESSED
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
- https://1geki.jp/newmachinecalender/202603/ — 2026-03-02: 12 pachinko / 2 slot; 2026-03-16: 5 pachinko.
- https://hazuse.com/new-machine/202603h/ — 2026-03-02 list of 12 pachinko + 2 slot.
- https://p-kn.com/calendar/202603/ — 2026-03-02 first March boundary; cross-check list.

### 1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-03-02_e_fever_dumbbell_nankilo_moteru_2.md`
- commit: `f85ea986c5778ec34c20dc76e82694a5050c6b38`
- SANKYO、型式 `eフィーバーダンベル何キロ持てる？2F`、検定番号 `5P1254`。2026-03-02導入。
- 通常図柄揃い約1/149.9、右図柄揃い約1/97.7。初当り300個。
- 下位RUSHなし。初当り約25%でLT `超マッスルRUSH` へ直接突入、残り約75%は通常へ。
- LTはST127回、継続約73%。普図STのため残保留なし。
- 特図2は1500個/300個の大当り3回1セット。払出合計4500個+α 12.5% / 3300個 37.5% / 2100個 37.5% / 900個 12.5%。単一大当り出玉と混同しない。
- 4500個時はLT内上乗せモード `ゴールデンタイム`。次回大当り濃厚で、再度4500個ならゴールデンタイム復帰。LT正式名称そのものは `超マッスルRUSH`。
- 遊タイム非搭載。主要値に競合なし。
- official: https://www.sankyo-fever.jp/products/machine_list/ply/spec/
- official machine page: https://www.sankyo-fever.jp/products/machine_list/ply/
- museum: https://www.sankyo-fever.jp/collection/992/
- analysis: https://hisshobon.com/machineinfo/100790/ ; https://hisshobon.com/machineinfo/100792/ ; https://nana-press.com/kaiseki/machine/1105/ ; https://www.p-world.co.jp/machine/database/10407 ; https://hazuse.com/machine/pachinko/5P1254/genre/103/

## Effective DB state
Previous: 178 machine records / 176 COMPLETE_CORE / 2 CONFLICT.
This relay opened the 2026-03-02 boundary and added one COMPLETE_CORE record.
- machine records: **179**
- COMPLETE_CORE: **177**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-02 candidate #2 `P戦国乙女7 終焉の関ヶ原 99ver.`**. Duplicate-search first, then confirm the exact commercial/model naming because HAZUSE/K-Navi use variant wording (`強カワ99ver.` / shortened display). Do not merge it with `PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン` (#11). Audit LT-equipped status and collect only the exact candidate's values.

After #2, continue candidates #3-#12 in the stored calendar order. LT-negative candidates receive no machine record, but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
