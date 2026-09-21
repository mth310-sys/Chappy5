# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `e一方通行 とある魔術の禁書目録`
- duplicate search performed before record creation

## Boundary discovery
### 2025-07-07 — OPEN
Same-day queue:
1. `e東京リベンジャーズ` — COMPLETE_CORE
2. `eフィーバー炎炎ノ消防隊2 シンラver.` — COMPLETE_CORE
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.` — COMPLETE_CORE
4. `e犬夜叉3.0` — COMPLETE_CORE
5. `e一方通行 とある魔術の禁書目録` — COMPLETE_CORE
6. `e冒険島` — NEXT
7. `Pドラムだ!金ドン 花火外伝99ver.`
8. `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.`
9. `PA CYBORG009 RULE OF SACRIFICE LT99ver.`

Boundary sources retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202507/
- https://1geki.jp/newmachinecalender/202507/
- https://www.all7.jp/plans/index/2025/07

## This relay
### e一方通行 とある魔術の禁書目録 — COMPLETE_CORE
- JFJ / 型式 `eとある魔術の禁書目録 一方通行 BIG JKZ` / 検定番号510135 / canonical 2025-07-07.
- LT3.0 PLUS / BIGスタート / 一種二種混合・普図ST。下位 `一方通行（アクセラレータ）RUSHチャレンジ` を突破してLTへ入る構造。
- メーカー公式: 図柄揃い約1/539、大当り約1/349、打ち止め（ラストオーダー）チャージ約1/994、右打ち電チューロング開放約1/110。分母・定義を分離。
- 図柄揃いは約1500個。約51%でRUSHチャレンジ、約49%通常。チャージは約300個でRUSHチャレンジ昇格経路あり。
- RUSHチャレンジは100回、成功率約60%。成功時の大当りでLT `一方通行（アクセラレータ）RUSH HYPER` へ。
- LTは151回、継続約75%。普図STのため残保留なし。
- 右打ち時共通: 約6000個+α 約4% / 約3000個 約96%、いずれもLT HYPERへ。3000=特図2大当り2回分、6000=4回分以上の合計払い出しで、単一大当り出玉とは分離。
- 通常時全当選/通常回転を分母とした総LT到達率は直接公表値を十分な再探索後も確定できず `UNVERIFIED_AFTER_RESEARCH`。51%×60%等から独自算出しない。
- チャージからRUSHチャレンジへ昇格する具体割合も `UNVERIFIED_AFTER_RESEARCH`。
- 2026-07-06導入の兄弟機 `e一方通行 最狂`（RRA、約1/253）とは分離。
- record: `docs/lt_pachinko_db/machines/2025-07-07_e_accelerator_toaru_majutsu_no_index.md`
- commit: `36a3fb78afc1be64a79265e8b6a2f3a7d6d46eb7`

Sources:
- https://www.fujimarukun.co.jp/products/e_accelerator/
- https://news.p-world.co.jp/articles/30868/greenbelt
- https://hazuse.com/machine/pachinko/PX0298/
- https://hisshobon.com/machineinfo/97825/
- https://hisshobon.com/machineinfo/97826/
- https://nana-press.com/kaiseki/machine/966/29728/

## Pre-verified remaining queue evidence
Do not skip machine-level research:
- `e冒険島` — LT `暴険RUSH`, entry25.9%, continuation約77%, 2回転落システム. https://www.p-world.co.jp/machine/database/10276
- `Pドラムだ!金ドン 花火外伝99ver.` — lower 金ドンRUSH約80%, RUSH終了後LTチャレンジ, LT `SPECIAL金ドンRUSH`約95%. https://news.p-world.co.jp/articles/30764/yugitsushin
- `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — 覚醒HYPER約51%/約75%, LT `超覚醒HYPER`約91%. https://news.p-world.co.jp/articles/31052/yugitsushin
- `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — lower RUSH約40%/約75%, LT `超加速RUSH`約95%, lower RUSH中10R+LT 9.5%. https://news.p-world.co.jp/articles/31173/greenbelt

## Effective DB state
Previous effective state: 107 records / 106 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **108**
- COMPLETE_CORE: **107**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-07-07 OPEN boundary with `e冒険島`. Then process `Pドラムだ!金ドン 花火外伝99ver.` → `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` → `PA CYBORG009 RULE OF SACRIFICE LT99ver.`. Close 2025-07-07 only after all candidates are accounted for and rechecked against at least two calendars.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
