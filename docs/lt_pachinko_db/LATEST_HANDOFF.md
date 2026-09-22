# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before write

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
2. eフィーバーもののがたり — COMPLETE_CORE
3. eルパン三世VSキャッツ・アイ — **COMPLETE_CORE this relay**
4. e源外伝 EPISODE OF -大龍- — LT confirmed; **NEXT**
5. e ノーゲーム・ノーライフ 319Ver. — pending LT audit
6. e ノーゲーム・ノーライフ 199Ver. — pending LT audit
7. e 仮面ライダー電王 デカヘソ239 — pending LT audit
8. P いくさの子 戦極最強ドデカ199ver. — pending LT audit
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — pending LT audit
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — pending LT audit
11. P転生したらスライムだった件129ver. — pending LT audit
12. PA GoGo富士山 — pending LT audit
Do not assume all candidates are LT-equipped; create records only after positive LT confirmation.

## eルパン三世VSキャッツ・アイ — COMPLETE_CORE
- 平和。型式 `eルパン三世VSキャッツアイMAH4`。canonical導入2025-11-04。
- LT3.0プラス / 一種二種混合 / 普電ST / RUSH=LT直行型。非LT下位RUSHなし。
- 通常図柄揃い1/257.9、LUPIN CHARGE約1/911、大当り合算約1/201を定義分離。
- LT `SUPER HERO RUSH W`: 通常遊技基準の直接公表LT突入確率1/515.8、特図1図柄揃い時約50%。LUPIN CHARGEにも一部LT経路があるが具体割合は公表値未確認のため推測しない。
- ST153回、RUSH中1/99.9は大当り＋時短図柄/C時短の合算、継続約79%。普電STのため残保留なし。
- 特図1図柄揃い: 300個+LT約50% / 300個+通常約50%。LUPIN CHARGEは300個、大半通常・一部LT。
- 特図2: 3000個(1500×2)+LT約50% / 1500個+LT約35% / リスタート(C時短、ST回数リセット)約15%。3000個を単一10Rとして扱わない。
- 初当りまたはリスタート後153回。1500/3000個大当り時は2回+151回の構造として公表。
- 2026年 `157ver. 極限突破ブッた斬り7500` は別スペック。混同禁止。
- missingFields: LUPIN CHARGE→LT具体割合のみ。主要比較項目は揃っているため COMPLETE_CORE。
- conflicts: []。
- record: `docs/lt_pachinko_db/machines/2025-11-04_e_lupin_vs_cats_eye.md`
- record commit: `58e864ac3b9587a73c22be55981d4af57c149b20`

Sources:
- https://yugi-nippon.com/pachinko-new-machine/post-73123/
- https://news.p-world.co.jp/articles/31870/greenbelt
- https://www.pachibee.jp/machines/index/125090012
- https://www.pachibee.jp/machines/about/125090012
- https://hisshobon.com/machineinfo/98955/
- https://hisshobon.com/machineinfo/98957/
- https://1geki.jp/pachinko/e_rupin_vs_catseye/
- https://1geki.jp/pachinko/e_rupin_vs_catseye/51/

## Preliminary next-machine evidence — e源外伝 EPISODE OF -大龍-
- 三洋物産。型式 `e源外伝EHLG`。2025-11-04導入。LT3.0プラス / 超WIDE / 一種二種混合 / 転落型。
- 通常約1/199.8。右打ち約1/53.2（大当り約1/199.8＋小当り約1/72.6の合算）。
- 下位 `BREAKING BATTLE`: 初当り25%で突入。転落小当り約1/21.1。残保留4個込み突破期待度はバトル1回33.6% / 2回52.5% / 3回66.0%。
- BREAKING BATTLE中の大当りは10R1500個＋LT `EXTRA BATTLE` 100%。
- LT `EXTRA BATTLE`: 転落小当り約1/239.5、継続期待値約86.5%（転落までの継続期待＋終了後残保留4個引き戻し約7.3%、EXTRA BONUS∞含む）。
- LT中は10R1500個100%。20%が `EXTRA BONUS∞` で次回大当り濃厚、80%が通常LT継続。
- 初当りは2R300個。特図1 25% BREAKING BATTLE / 75%通常。
- 次回は通常初当り→10 COUNT JUDGE→BREAKING BATTLEのゲームフロー、バトル回数決定の定義、時短10000回/転落終了、総LT到達率の直接公表有無を再照合してから保存する。

Preliminary sources:
- https://news.p-world.co.jp/articles/31818/yugitsushin
- https://news.p-world.co.jp/articles/31774/greenbelt
- https://hisshobon.com/machineinfo/99086/
- https://1geki.jp/pachinko/e_gen_ep_dairyu/39/
- https://p-johojima.jp/machine_spec/post-13972/

## Effective DB state
Previous effective state: 143 machine records / 142 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **144**
- COMPLETE_CORE: **143**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-11-04 boundary remains OPEN. Resume with `e源外伝 EPISODE OF -大龍-`. LT搭載は確認済み。ゲームフロー・下位BREAKING BATTLEの回数/突破率定義・LT到達率の直接値有無を仕上げ、複数ソース照合後に保存する。その後は eノーゲーム・ノーライフ319Ver. → 199Ver. の順でLT搭載監査を続ける。**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate sibling specs, and never infer unpublished total LT arrival rates from route probabilities.
