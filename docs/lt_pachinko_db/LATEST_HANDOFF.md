# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- existing machine directory and duplicate search checked before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2
- 2025-10-06 — CLOSED / candidate set covered
- 2025-10-20 — CLOSED 2/2

## Current boundary: 2025-11-04 — OPEN
Candidate set retained in chronological/discovery order:
1. e花の慶次～黄金の一撃 — COMPLETE_CORE
2. eフィーバーもののがたり — **COMPLETE_CORE this relay**
3. eルパン三世VSキャッツ・アイ — LT confirmed; **NEXT**
4. e源外伝 EPISODE OF -大龍- — pending LT audit
5. e ノーゲーム・ノーライフ 319Ver. — pending LT audit
6. e ノーゲーム・ノーライフ 199Ver. — pending LT audit
7. e 仮面ライダー電王 デカヘソ239 — pending LT audit
8. P いくさの子 戦極最強ドデカ199ver. — pending LT audit
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — pending LT audit
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — pending LT audit
11. P転生したらスライムだった件129ver. — pending LT audit
12. PA GoGo富士山 — pending LT audit
Do not assume all candidates are LT-equipped; create records only after positive LT confirmation.

## eフィーバーもののがたり — COMPLETE_CORE
- SANKYOブランド / ジェイビー製。型式 `eフィーバーもののがたりF`、検定番号 `5P0760 / 0709-156`、canonical導入2025-11-04。
- LT3.0プラス / 一種二種混合 / 直LT / 転落タイプ。非LT下位RUSHなし。
- 通常図柄揃い約1/149.9、LT中図柄揃い約1/41.1、終了契機の普電ショート開放約1/111。
- LT `SPECIAL付喪ノ戦`：初当り基準約25.5%、通常遊技基準の直接公表LT確率約1/588、継続約73%。
- 特図1厳密振り分け：1500個+LT+次回濃厚0.1% / 300個+LT25.4% / 300個+通常74.5%。必勝本で取得し、一撃の通常大当り経路で照合。
- 7図柄全回転は1500個→LT+次回濃厚。奇数図柄 `SPECIAL付喪ノFEVER` は300個→LT直行。偶数 `もののノFEVER` は300個→チャレンジ、成功でLT。偶数後チャレンジ期待度24.4%は分母が異なるためTOTAL LT25.5%と混同しない。
- 特図2：6000個(1500×4)約25% / 3000個(1500×2)約25% / 1500個約50%、全てLT継続。複数回大当り合計を単一10R出玉として扱わない。
- LTは電サポ10000回相当/実質次回までだが、普電ショート開放約1/111で終了。
- missingFields: [] / conflicts: []。
- record: `docs/lt_pachinko_db/machines/2025-11-04_e_fever_mononogatari.md`
- record commit: `8cc860c21dba9925638872b0fa5aaa989c93167d`

Sources:
- https://www.sankyo-fever.jp/collection/988/
- https://news.p-world.co.jp/articles/31752/yugitsushin
- https://www.p-world.co.jp/machine/database/10338
- https://hisshobon.com/machineinfo/98916/
- https://1geki.jp/pachinko/e_mononogatari/
- https://1geki.jp/pachinko/e_mononogatari/26/
- https://1geki.jp/pachinko/e_mononogatari/51/

## Preliminary next-machine evidence — eルパン三世VSキャッツ・アイ
Continue from these already cross-checked points; do not confuse with the 2026 `157ver. 極限突破ブッた斬り7500` sibling spec.
- 平和。型式 `eルパン三世VSキャッツアイMAH4` confirmed by 遊技日本。2025-11-04 introduction confirmed by パチビー and contemporary schedules.
- LT3.0プラス / RUSH=LT direct-LT type.
- normal symbol hit 1/257.9; separate LUPIN CHARGE approx 1/911; combined initial hit approx 1/201.
- LT `SUPER HERO RUSH W`: direct published LT probability 1/515.8; symbol-hit entry approx 50%; LUPIN CHARGE also has a very thin LT route.
- ST153, effective right-side probability 1/99.9 (大当り+時短図柄/C時短合算), continuation approx 79%.
- C時短/特定図柄時短 resets the ST count; no residual holds because it is a 普電ST.
- LT continuation-time payout headline: continuation event approx 85% is 1500+; approx 50% is 3000. Exact right-side distribution must be collected before record creation.
- Must collect exact 特図1 distribution including LUPIN CHARGE and exact 特図2 payout/C時短 split; preserve denominator differences.

Preliminary sources:
- https://yugi-nippon.com/pachinko-new-machine/post-73123/
- https://p-johojima.jp/new_machine/post-14528/
- https://hisshobon.com/machineinfo/98955/
- https://hisshobon.com/machineinfo/98957/
- https://www.pachibee.jp/machines/index/125090012

## Effective DB state
Previous effective state: 142 machine records / 141 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **143**
- COMPLETE_CORE: **142**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-11-04 boundary remains OPEN. Resume with `eルパン三世VSキャッツ・アイ`. First finish exact initial/right-side distributions and C時短 definition, then save only after cross-check. Continue afterward through the remaining 2025-11-04 candidate set in the order above; LT-non-equipped candidates are excluded rather than recorded.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate sibling specs, and never infer unpublished total LT arrival rates from route probabilities.
