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

## 2026-03-02 boundary — OPEN 2/12
Boundary re-enumerated from 一撃 2026年3月新台カレンダー and cross-checked against HAZUSE 2026年3月導入機種 / K-Navi 2026年3月カレンダー. 12 pachinko candidates retained in calendar order.

1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
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
- アムテックス、型式 `P戦国乙女7L0YU1`、検定番号 `5P0670`。HAZUSE/G-netの商用名 `強カワ99ver.` は同型式の同一機。
- 通常図柄揃い約1/99.9。乙女RUSH中は図柄揃い+c時短合算約1/47.3、極乙女RUSH中図柄揃い約1/52.5。
- canonical資料群はRUSH TOTAL約63%。通常時詳細振り分けは10R1000個+LT 0.6% / 3R300個+乙女RUSH 62.4% / 3R300個+通常37.0%。
- 下位 `乙女RUSH` はST60+残4、TOTAL継続約75%。c時短 `天剣チャンス` 約1/471.4、10000回、そこからLT突入約50%。
- LT `極乙女RUSH` はST138+残4、継続約94%。LT中は1000個25% / 300個75%。残保留は乙女RUSH時振り分け。
- 通常時0.6%からLT直行経路あり。通常遊技全体基準の総LT到達率は直接資料未確認のため独自算出しない。
- 遊タイム非搭載。
- **CONFLICT:** パチマガスロマガFREEの同型式ページ本文のみRUSH突入「約53%」と記載。G-net/P-WORLD/必勝本/なな徹/グリーンべると系記事は約63%、かつ詳細振り分け0.6+62.4=63.0%。299ver.の53%との sibling-spec 混入/編集誤りの可能性は高いが推測で消さずCONFLICT維持。
- sources: https://g-net-ps.com/info/p0517/ ; https://g-net-ps.com/industry/certif-2025-1212/ ; https://hazuse.com/hd/5p0670/ ; https://www.p-world.co.jp/machine/database/10417 ; https://news.p-world.co.jp/articles/32689 ; https://p.hisshobon.jp/machine/4684/1/113477 ; https://nana-press.com/kaiseki/machine/1117/35322/ ; https://1geki.jp/pachinko/p_otome7_99ver/53/ ; https://pachimaga.com/free/mach/maker-p/amutex/064553.php

## Effective DB state
Previous: 179 machine records / 177 COMPLETE_CORE / 2 CONFLICT.
This relay added one LT-equipped record as CONFLICT.
- machine records: **180**
- COMPLETE_CORE: **177**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-02 candidate #3 `P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver`**. Duplicate-search first; verify exact commercial/model naming and LT-equipped status before creating a record.

After #3, continue candidates #4-#12 in stored calendar order. LT-negative candidates receive no machine record, but exclusion evidence/status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
