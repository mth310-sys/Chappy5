# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-22 `e マギアレコード 魔法少女まどか☆マギカ外伝`
- duplicate search performed before both new records

## Boundary status
### 2025-07-07 — CLOSED 9/9
Previous handoff closure retained.

### 2025-07-22 — CLOSED 3/3
1. `e マギアレコード 魔法少女まどか☆マギカ外伝` — LT搭載 — COMPLETE_CORE
2. `デカスタe花の慶次～傾奇一転` — LT搭載 — COMPLETE_CORE
3. `PAコマコマ倶楽部with坂本冬美 89STver.` — LT非搭載 — EXCLUDED

PAコマコマは豊丸系資料に加えHAZUSEが明示的に `ラッキートリガー: 非搭載`。1/89.8→1/24.2、ST10回100%、時短25/50/100、遊タイム9999の従来ST機でありDBへ登録しない。

Boundary evidence:
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202507/
- https://1geki.jp/newmachinecalender/202507/
- https://hazuse.com/hd/5p0248/
- https://www.toyomaru.jp/machine/2025y/komakom89_sf.html

## This relay
### e マギアレコード 魔法少女まどか☆マギカ外伝 — COMPLETE_CORE
- 京楽産業. / 型式 `eマギアレコード魔法少女まどか☆マギカ外伝KRJ1` / 2025-07-22。
- LT3.0 PLUS、一種二種混合、通常RUSHを別段階に持たない直LT型。
- 図柄揃い約1/399（解析詳細1/399.9）、大当り合算約1/349、マギレポチャージ解析約1/2800、LT中約1/97（詳細1/97.1）。定義分離。
- 図柄揃い50%で1000個 + 1G連 `VコネクトBONUS` 保証 + LT `コネクトRUSH`。残り50%は1000個で通常へ。
- LTはST140回、1G連込み継続約83%。ST単体は解析約77%で、定義差として分離。
- LT中 `VコネクトBONUS` は800〜4000個+α。800〜1200個約21.0%、1600個約26.7%、2000〜2800個約43.3%、3200〜4000個約9.0%。
- メーカー公式が「RUSH突入時は必ず1G連保証」「LT発動となるコネクトRUSH」と明記。
- 通常遊技全体基準の総LT到達率は直接公表値未確認のため独自合算せずUNVERIFIED。
- record: `docs/lt_pachinko_db/machines/2025-07-22_e_magia_record.md`
- commit: `54d2704a885ba4832fa01ab41e0a479919e58220`

Sources:
- https://www.kyoraku.co.jp/news/detail/835
- https://news.p-world.co.jp/articles/31105/greenbelt
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/kyoraku_pachi/227/kh01.php
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/kyoraku_pachi/227/kh02.php
- https://nana-press.com/kaiseki/machine/981/30759/
- https://chonborista.com/pachinko/kyoraku/235619/

### デカスタe花の慶次～傾奇一転 — COMPLETE_CORE
- ニューギン / 型式 `e花の慶次～傾奇一転H6` / 2025-07-22。
- 1/348.60、一種二種混合。右大当り1/96.95、戦MODE転落1/96.95。
- RUSH TOTAL 52.1% = 戦MODE 51.1% + LT直行1.0%。
- 特図1: 1500個+LT 0.2% / 750個+LT 0.8% / 750個+戦MODE 51.1% / 750個+通常47.9%。
- 下位 `戦MODE` は時短5000回の転落型。大当りと転落がともに1/96.95で、転落前大当りの突破期待度50%。大当りで1500個 + LT `傾奇BURST`。
- LTはST170回+残保留4、TOTAL約84%（ST本体約83% + 残保留引き戻し約4%の合算表記）。LT中1500個100%。
- 2024年版e花の慶次～傾奇一転と分離。
- 通常初当り全体基準の総LT到達率は直接値未確認、独自合算せずUNVERIFIED。
- record: `docs/lt_pachinko_db/machines/2025-07-22_dekasuta_e_hana_no_keiji_kabuki_itten.md`
- commit: `a71a015b198c7bfeba6cf1801c0d6e77c3264705`

Sources:
- https://news.p-world.co.jp/articles/30939/greenbelt
- https://www.p-world.co.jp/machine/database/10304
- https://nana-press.com/kaiseki/machine/987/30835/
- https://p.hisshobon.jp/machine/4558/1/110216
- https://hisshobon.com/machineinfo/98132/
- https://1geki.jp/pachinko/e_hanakei_kabuki_ds/51/

## Next boundary discovery
### 2025-08-04 — OPEN
Independent calendars show the next large pachinko introduction boundary. Candidate list must be machine-audited without assuming every machine is LT:
- `e牙狼12黄金騎士極限`
- `e黄門ちゃま 寿限無 LLサイズ`
- `eシャーマンキング`
- `eシャーマンキング でっけぇえなver.` (some calendars combine/list separately; verify canonical handling)
- `e真・一騎当千～軍神覚醒～396ver.`
- `e真・一騎当千～軍神覚醒～319大入りver.`
- `Pクイーンズブレイド奈落5400`
- `Pフィーバー戦姫絶唱シンフォギア4 LT-Light ver.`
- `Pフィーバー戦姫絶唱シンフォギア4 Light ver.` (LT eligibility must be checked separately; do not merge with LT-Light)

Calendar evidence:
- https://1geki.jp/newmachinecalender/202508/
- https://p-kn.com/calendar/202508/
- https://pachinkopachisro.com/archives/58760696.html

## Effective DB state
Previous effective state: 112 records / 111 COMPLETE_CORE / 1 CONFLICT.
This relay added 2 COMPLETE_CORE records.
- machine records: **114**
- COMPLETE_CORE: **113**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-07-22 boundary CLOSED. Continue chronologically at 2025-08-04 OPEN boundary. Start with `e牙狼12黄金騎士極限`, then audit every same-day candidate for LT eligibility before registration. Preserve separate specs/versions, especially シャーマンキング variants, 一騎当千396/319大入り, and シンフォギア4 LT-Light/Light.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
