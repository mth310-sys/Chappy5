# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.`
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
8. `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — COMPLETE_CORE
9. `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — NEXT

Boundary sources retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202507/
- https://1geki.jp/newmachinecalender/202507/
- https://www.all7.jp/plans/index/2025/07

## This relay
### Pフィーバー機動戦士ガンダムユニコーン再来 99ver. — COMPLETE_CORE
- SANKYO / 型式 `PAフィーバー機動戦士ガンダムユニコーン2AR` / canonical 2025-07-07。
- 2025-05-07導入129ver.とは別スペックとして分離。
- 通常約1/99.9、右約1/43.7（大当り+小当り合算、特図2）。
- 初当り3R約300個。約51%で下位 `覚醒HYPER`、約49%通常。
- 覚醒HYPERは時短56回+残保留4個、TOTAL約75%。
- 下位RUSH中大当り約1%の7R×2（約1400個=700個×2）でLT `超覚醒HYPER`。
- LTは時短100回+残保留4個、TOTAL約91%。LT中大当りは7R約700個+LT継続100%。
- ST最終変動+残保留は覚醒HYPER側の振り分けとなる資料あり。
- 通常初当り全体を分母とする総LT到達率は直接公表値を確定できず `UNVERIFIED_AFTER_RESEARCH`。独自合算しない。
- P-WORLD台紹介本文の「約4%/約93%」は同ページ振り分け表および複数の99ver.固有資料（約1%/約91%）と不整合。129ver.由来とみられるため、機種固有振り分け表+複数照合を優先し約1%/約91%を採用。CONFLICTには昇格させない。
- 遊タイム非搭載 / コンプリート機能搭載。
- record: `docs/lt_pachinko_db/machines/2025-07-07_p_fever_gundam_unicorn_sairai_99ver.md`
- commit: `e1e6659cdca32984b855f967f4a2b3c279d9cfe7`

Sources:
- https://news.p-world.co.jp/articles/31052/yugitsushin
- https://news.p-world.co.jp/articles/31011/greenbelt
- https://hisshobon.com/machineinfo/98085/
- https://hisshobon.com/machineinfo/98087/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/539/kh01.php
- https://nana-press.com/kaiseki/machine/998/30209/
- https://www.p-world.co.jp/machine/database/10291

## Pre-verified remaining queue evidence
Do not skip machine-level research:
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 110 records / 109 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **111**
- COMPLETE_CORE: **110**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `PA CYBORG009 RULE OF SACRIFICE LT99ver.`. After it is processed, recheck 2025-07-07 against at least two independent calendars; if all same-day LT candidates are accounted for, close the boundary and advance chronologically to the next introduction date.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
