# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `Pドラムだ!金ドン 花火外伝99ver.`
- duplicate/previous-spec separation checked before record creation

## Boundary discovery
### 2025-07-07 — OPEN
Same-day queue:
1. `e東京リベンジャーズ` — COMPLETE_CORE
2. `eフィーバー炎炎ノ消防隊2 シンラver.` — COMPLETE_CORE
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.` — COMPLETE_CORE
4. `e犬夜叉3.0` — COMPLETE_CORE
5. `e一方通行 とある魔術の禁書目録` — COMPLETE_CORE
6. `e冒険島` — COMPLETE_CORE
7. `Pドラムだ!金ドン 花火外伝99ver.` — COMPLETE_CORE
8. `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — NEXT
9. `PA CYBORG009 RULE OF SACRIFICE LT99ver.`

Boundary sources retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202507/
- https://1geki.jp/newmachinecalender/202507/
- https://www.all7.jp/plans/index/2025/07

## This relay
### Pドラムだ!金ドン 花火外伝99ver. — COMPLETE_CORE
- ミズホ / 型式 `Pドラムだ！金ドンSB` / canonical 2025-07-07。
- 2024-08-19導入の約1/199.8版とは別スペックとして分離。
- 通常約1/99.90。金ドンRUSH約1/1.25（大当り+小当り合算）、LT約1/1.07（大当り+小当り+C時短合算）。
- 初当りRUSH TOTAL突入60%。特図1は10R約700個+LT∞ 0.5% / 4R約280個+金ドンRUSH 59.5% / 4R約280個+通常 40.0%。
- 下位 `金ドンRUSH` は時短1回、約80%継続。RUSH中大当りの1.7%（10R）でLT `SPECIAL金ドンRUSH∞` へ。
- RUSH非当選後は必ずファイナルチャレンジへ入り、成功でLT。メーカー公式も「RUSH終了後に必ずLTチャレンジ」と明示。
- LT `SPECIAL金ドンRUSH` は時短1回/100回の合算でTOTAL約95%。`SPECIAL金ドンRUSH∞` は時短100回、約99.9%/ほぼ100%。LT発動時は∞から開始。
- 金ドンRUSH特図2: 10R+LT∞ 1.7% / 10R+下位継続 48.9% / 2R+下位継続 49.4%。
- LT特図2: 10R+LT∞ 25.9% / 10R+LT 24.7% / 2R+LT 49.4%。10R比率50.6%。
- 払い出しは2R約140個 / 4R約280個 / 10R約700個。
- LT発動時期待出玉約10839個は「LT発動までの平均出玉+LT期待値」の払い出し合計で、単発出玉と分離。
- 通常時全体を分母とした総LT到達率、およびファイナルチャレンジ総成功率は直接公表値を十分な再探索でも確定できず `UNVERIFIED_AFTER_RESEARCH`。経路確率から独自合算しない。
- 遊タイム非搭載 / コンプリート機能搭載。
- record: `docs/lt_pachinko_db/machines/2025-07-07_p_drum_da_kindon_hanabi_gaiden_99ver.md`
- commit: `7aab9cf5efd4e3b87cfc96471f1dad0be2112e17`

Sources:
- https://www.universal-777.co.jp/news/20250414001637/
- https://news.p-world.co.jp/articles/30764/yugitsushin
- https://www.p-world.co.jp/machine/database/10268
- https://hisshobon.com/machineinfo/98070/
- https://nana-press.com/kaiseki/machine/980/30060/
- https://p-town.dmm.com/machines/4802

## Pre-verified remaining queue evidence
Do not skip machine-level research:
- `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — 覚醒HYPER約51%/約75%, LT `超覚醒HYPER`約91%. https://news.p-world.co.jp/articles/31052/yugitsushin
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 109 records / 108 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **110**
- COMPLETE_CORE: **109**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.`. Then process `PA CYBORG009 RULE OF SACRIFICE LT99ver.`. Close 2025-07-07 only after both are accounted for and the boundary is rechecked against at least two calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
