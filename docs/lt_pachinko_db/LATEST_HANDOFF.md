# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `e冴えない彼女の育てかた`
- duplicate search performed before record creation; no existing machine record found

## This relay
### e冴えない彼女の育てかた — COMPLETE_CORE
- 大都技研 / 型式 `e／冴えない彼女の育てかた／LX04` / 2025-06-02。
- 通常1/179.6、右1/35.1。一種二種混合ライトミドル。
- 初当りはALL約300個。51%で下位 `冴えてる彼女RUSH`、49%通常。
- 下位RUSH: 55回、継続約80%。RUSH中大当りの15%・約2400個（1500+300×3）でLT発動。
- LT正式名称: `冴えてる彼女RUSH♭`。資料によって `冴えてる彼女ヒロインRUSH♭フラット` 表記あり。同一状態の表記揺れとして保持。
- LT: 86回、継続約92%。LT中振り分けは約2400個15% / 約1200個10% / 約600個25% / 約300個50%、全てLT継続。
- 業界記事の「RUSH突入時約3回に1回LT期待」は直接表現としてnotesへ保持。通常初当り全体を分母とする総LT到達率は直接公表値を確認できず、経路から独自算出しない。
- LT突入時期待出玉約12,500〜12,516個は「LT突入までの平均出玉＋LT期待値」の合算定義。単発払出と分離。
- 遊タイム非搭載、コンプリート機能搭載。
- record: `docs/lt_pachinko_db/machines/2025-06-02_e_saenai_heroine_no_sodatekata.md`
- commit: `46b7b36c478c17b81e476ccfe6bd13de6995cf1d`
Sources:
- https://news.p-world.co.jp/articles/30880/yugitsushin
- https://news.p-world.co.jp/articles/30869
- https://opt.p-world.co.jp/machine/database/10280
- https://hisshobon.com/machineinfo/97662/
- https://hisshobon.com/machineinfo/97663/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/daitogiken_pachi/045/kh04.php
- https://nana-press.com/kaiseki/machine/953/29735/
- https://hazuse.com/machine/pachinko/4P1740/
- https://1geki.jp/pachinko/e_saekano/39/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — CLOSED
11-candidate boundary accounting:
1. `Pフィーバーマクロスフロンティア5 LT-Light ver.` — COMPLETE_CORE
2. `P緋弾のアリア～緋緋神降臨～88Ver.` — COMPLETE_CORE
3. `PLT激デジ ジューシーハニー極嬢` — COMPLETE_CORE
4. `e 新・必殺仕置人 超斬撃99` — COMPLETE_CORE
5. `P DD北斗の拳3 百突99ver.` — EXCLUDED / LT-negative
6. `eF彼女、お借りします` — COMPLETE_CORE
7. `e範馬刃牙` — COMPLETE_CORE
8. `PA海物語3R3` — EXCLUDED / LT-negative
9. `デカスタ P戦国無双` — COMPLETE_CORE
10. `デジハネPモンスターハンターライズ` — EXCLUDED / LT-negative
11. `e冴えない彼女の育てかた` — COMPLETE_CORE

Boundary re-enumeration cross-check:
- 情報島 2025-06-02 list contains the same 11 pachinko machines: https://p-johojima.jp/machine_spec/post-2074/
- independent 2025 calendar also lists the same 11 pachinko machines for 2025-06-02: https://pachinkopachisro.com/archives/58760696.html
- K-Navi June calendar and additional calendar checked as supporting boundary evidence: https://p-kn.com/calendar/202506/ and https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/6%E6%9C%882%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 2025-06-16 calendars show pachinko introductionなし（スロット `L絶対衝激` only), so no LT pachinko record is required for that date.

## Effective DB state
Previous effective state: 102 records / 101 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **103**
- COMPLETE_CORE: **102**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-06-02 boundary is CLOSED. 2025-06-16 has no pachinko introduction in the calendars checked. Continue chronologically to the next pachinko introduction date after 2025-06-16 (expected July 2025 boundary, but re-enumerate from at least two independent calendars rather than assuming a date). Discover all same-day pachinko candidates, verify LT-positive status, and create records only for confirmed LT machines.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
