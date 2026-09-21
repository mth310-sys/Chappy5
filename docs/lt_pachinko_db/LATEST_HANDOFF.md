# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate path check performed before write

## This relay

### Added COMPLETE_CORE — eフィーバーうたわれるもの
`docs/lt_pachinko_db/machines/2025-04-07_e_fever_utawarerumono.md`
- SANKYO / 2025-04-07 / スマパチ・一種二種混合・RUSH=LT直行。
- 図柄揃い約1/399.7、うたわれチャージ1/264.7（別資料約1/264.6）、大当り合算約1/159〜1/159.8は定義を分離。
- LT `仮面RUSH（アクルカRUSH）` はTOTAL突入約55%。必勝本内訳は図柄揃い時約54.5%、チャージ時約0.7%。
- LT中約1/13.4（大当り・小当り・c時短合算）、ST15回+残保留4、TOTAL継続約77%。
- 特図2は解析資料で約80%が約3000個（1500×2）+LT継続、約20%が出玉なしSTリセット。出玉あり図柄揃いはALL約3000個。
- 特図1解析振り分け: 約1% 3000個+LT / 約53% 1500個+LT / 約1% 192個+LT / 約45% 1500個通常。
- 公式SANKYO、公式博物館、必勝本、一撃、なな徹、解析資料で照合。新規CONFLICTなし。

Sources:
- https://www.sankyo-fever.jp/products/machine_list/pce/spec/
- https://www.sankyo-fever.jp/collection/978/
- https://hisshobon.com/machineinfo/96821/
- https://1geki.jp/pachinko/e_utawarerumono/39/
- https://chonborista.com/pachinko/sankyo/229566/
- https://nana-press.com/kaiseki/machine/913/28754/

## 2025-04-07 boundary audit — OPEN / enumeration corrected
Previous handoff's independent calendar enumeration was incomplete. GreenBelt/P-WORLD's 2025-04-07 new-machine schedule lists six pachinko machines:
1. P少女☆歌劇 レヴュースタァライト ラッキートリガー4500 — LT / registered COMPLETE_CORE.
2. e牙狼神速神撃3000LT — LT / registered COMPLETE_CORE.
3. eシン・ウルトラマン — LT / registered COMPLETE_CORE.
4. eフィーバーうたわれるもの — LT / **this relay COMPLETE_CORE**.
5. Pフィーバーうたわれるもの 199ver. — **LT搭載 confirmed; next unprocessed machine**.
6. Pアナザーゴッドハーデス-獄炎- — **LT搭載 confirmed; queue after Pうたわれるもの**.

Enumeration/cross-check:
- https://news.p-world.co.jp/articles/30646/greenbelt — 4/7 six-machine pachinko list.
- https://www.all7.jp/plans/index/2025/04/10 — prior calendar evidence (incomplete for this boundary, therefore not sufficient alone).
- Pフィーバーうたわれるもの 199ver.: https://hazuse.com/hd/4p1607/ and https://1geki.jp/pachinko/p_utawarerumono199/39/ confirm LT and 2025-04-07.
- Pアナザーゴッドハーデス-獄炎-: https://www.universal-777.com/product/pachinko/hades_gokuen/ official confirms LT structure; https://www.pachibee.jp/machines/index/125030005 confirms LT and 2025-04-07.

Important QA correction: **do not close 2025-04-07 after eフィーバーうたわれるもの.** Two LT-positive same-day machines remain.

## Effective DB state
Previous handoff: 81 records / 80 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **82**
- COMPLETE_CORE: **81**
- CONFLICT: **1**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Next restart point
**2025-04-07 boundary remains OPEN. Next process `Pフィーバーうたわれるもの 199ver.`. Then process `Pアナザーゴッドハーデス-獄炎-`. Only after both are registered and the six-machine 4/7 boundary is rechecked may 2025-04-07 be CLOSED.**

Known next-machine anchors:
- Pうたわれるもの: https://www.sankyo-fever.jp/products/machine_list/pce/spec/ (same official product family; ensure P/e definitions are separated), https://1geki.jp/pachinko/p_utawarerumono199/39/, https://hazuse.com/hd/4p1607/
- Pハーデス獄炎: https://www.universal-777.com/product/pachinko/hades_gokuen/, https://hisshobon.com/machineinfo/96769/, https://www.pachibee.jp/machines/index/125030005

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate an unpublished total LT arrival rate from route probabilities.
