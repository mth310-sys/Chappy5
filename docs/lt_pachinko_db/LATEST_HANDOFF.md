# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before every positive write

## Closed boundaries retained
- through 2025-11-17: previous closed boundaries retained.
- 2025-12-08 — **CLOSED 9/9 audited this relay**.
- 2025-12-22 — **CLOSED 3/3 pachinko candidates this relay**.

## 2025-12-08 boundary resolution
### PA野生の王国6 — LT非搭載; excluded
- 型式 `PA野生の王国6N2`、ニューギン、2025-12-08。
- previous handoff had one low-tier中古販売 listing calling it LT, conflicting with high-trust ST/遊タイム descriptions.
- re-research found an explicit machine-analysis statement `LT非搭載`, plus a quoted official パチマガスロマガMobile announcement saying `LT無し`, while 一撃 taxonomy lists this machine as `一種二種混合機 / 甘デジ / 遊タイム` and separately labels contemporary Newgin LT machines `ラッキートリガー`.
- industry launch coverage describes 100% ST50, ST+時短, and遊タイム5000 only; no LT route/name exists. The isolated low-tier sales-site label is treated as erroneous metadata, not a real spec conflict.
- mission rule: no machine record created.
Sources checked 2026-09-23:
- https://www.pachikachi.com/posts/yasei6.html — explicitly `LT非搭載`.
- https://psumma.jp/pachinko/65602/ — quotes パチマガスロマガMobile official post: `LT無し`.
- https://1geki.jp/maker/newgin/ — Newgin machine taxonomy; PA野生の王国Ⅵ lacks LT tag while adjacent LT models carry it.
- https://news.p-world.co.jp/articles/32225/yugitsushin — industry launch: ST100% /遊タイム.
- https://news.p-world.co.jp/articles/32409/greenbelt — industry launch: ST100% /遊タイム.

## 2025-12-22 boundary — CLOSED 3/3
Calendar source: 情報島＋ past new-machine schedule listed exactly three pachinko candidates for 2025-12-22; all three are LT and were collected.

### e 新世紀エヴァンゲリオン ～はじまりの記憶～ — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-22_e_evangelion_hajimari_no_kioku.md`
- commit: `1267f3dea9e4f159e404c3cb7620d0f29819aedc`
- ビスティ、型式 `e新世紀エヴァンゲリオン17 はじまりの記憶R`、検定5P0685。
- 図柄揃い約1/399.9 / チャージ込み大当り約1/349.9を定義分離。LT中約1/99.6。
- 図柄揃い50.5%でLT直行、49.5%で時短100。チャージ経由・時短引き戻し込みTOTAL LT突入約61.4%。
- LT `インパクトモード / 暴走モード` はST157回、継続約80%。右99.5% 2400個(1200×2)、0.5% 4800個(1200×4)。

### P沖ドキ！ドキドキ弾丸ツアー — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-22_p_okidoki_dokidoki_dangan_tour.md`
- commit: `4edb23f3b87bbf7562324cce3de7f38e5916577f`
- メーシー、型式 `P沖ドキ！LG`。役物タイプ。
- 通常実質約1/22.2、初当りALL1500個。18%で直LT `GOLDEN超ドキRUSH`、通常遊技基準LT突入確率約1/123.4（直接公表値）。
- LT約1/17.0、ST32＋残4、継続約89%。右1500個75% / 300個25%、双方LT継続。
- K-Naviのみ12/1表記だがHAZUSE/必勝本/パチビー/情報島＋等12/22一致のため12/22 canonical。

### P少女☆歌劇 レヴュースタァライト 99 LT3000 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-12-22_p_revue_starlight_99_lt3000.md`
- commit: `613a2855bc13f475deeaa1c2f1ab60e898951681`
- 豊丸産業。通常1/99.9、右1/72.1。初当り200個、RUSH50%。
- トップスタァロード初回45＋残4 約50%、2回目以降100＋残4 約77%。
- RUSH大当り1.6%で3000個＋LT `追劇`、13.3%で1000個＋追劇70%ZONE。
- 追劇は約70%で1000個以上上乗せループ。追劇中0.5% 2000個＋追劇 / 69.5% 1000個＋追劇 / 4% ZONE / 26%下位RUSH。
- 3000/2000は1000個×複数回合計。期待出玉10400個も単一大当り出玉ではない。
- formal modelNameは十分な再探索でも今回直接確認できず `UNVERIFIED_AFTER_RESEARCH`。

## Effective DB state
Previous: 156 machine records / 155 COMPLETE_CORE / 1 CONFLICT.
This relay added 3 COMPLETE_CORE records.
- machine records: **159**
- COMPLETE_CORE: **158**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Resume by enumerating the 2026-01-05 pachinko introduction boundary from multiple calendars, then audit candidates in calendar order. Known LT-positive candidates already discovered include `Pリングにかけろ1 129ver.`, `P【超甘LT】華牌RR 1/49×99de遊タイム`, `Pフィーバーうたわれるもの LT-Light ver.`, `e吉宗 極乗3000ver.`, and other 2026-01-05 machines that must be enumerated before collection. Do not assume this partial discovery list is complete. First build the full date candidate set, then collect only LT-equipped machines and explicitly exclude non-LT candidates without machine records.**

For every positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities.
