# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `P DD北斗の拳3 百突99ver.`
- duplicate searches performed before LT-positive record creation

## This relay
### P DD北斗の拳3 百突99ver. — EXCLUDED / LT-negative
- 高尾 / 型式 `PDD北斗の拳3V2A` / 2025-06-02。
- 高尾公式、Amusement Japan、グリーンべると/P-WORLD、情報島、P-WORLD機種DB、なな徹、一撃を横断。
- 通常1/99.9、右1/76.5、RUSH突入100%、ST100回+残保留4、TOTAL継続約75%。通常0.5% 1000個+RUSH / 99.5% 200個+RUSH、右25% 1000個 / 75% 300個。
- 公式仕様は通常RUSHのみでLT名称・LT突入経路・LT上位状態が存在しない。二次サイトの一部で右打ち表を「LT中」と誤ラベルする例があるが、メーカー公式および業界一次資料の仕様を優先し **LT非搭載** と判定。
- ミッション対象外のためmachine recordは作成しない。
Sources:
- https://www.takao.gr.jp/product/2024/dd-hokuto3.html
- https://amusement-japan.co.jp/article/detail/10004781/
- https://web-greenbelt.jp/post-94158/
- https://p-johojima.jp/machine_spec/post-3114/
- https://www.p-world.co.jp/machine/database/10241
- https://nana-press.com/kaiseki/machine/956/28514/
- https://1geki.jp/pachinko/p_ddhokuto3_99/39/

### eF彼女、お借りします — COMPLETE_CORE
- SANKYO / 2025-06-02 / スマパチ・超デカSTART・1種2種混合・LT搭載。
- 通常大当り約1/349.9。図柄揃い約1/499系、ヒロイン劇場（チャージ）約1/1167の合算定義。右打ち図柄揃い約1/59.4。
- 図柄揃い時52%で下位 `DREAM RUSH`。全通常当選内訳では約600個+RUSH36.4%、約600個+通常33.6%、約300個ヒロイン劇場30.0%。ヒロイン劇場からも一部RUSH経路あり。
- DREAM RUSHはST70回、約70%継続。RUSH中に大当りを2回獲得するとLT `DREAM RUSH極 / ヒロインRUSH` へ移行。
- LTはST100回、約82%継続。
- 右打ち1回の出玉は特図2大当り（1200個or300個）5回分の合計で、約1500個46% / 約2400個39% / 約3300個13% / 約4200〜6000個2%。下位/LTで同出玉構造、LT時はST100回継続。
- 通常初当り全体を分母とする総LT到達率、およびヒロイン劇場→RUSHの具体割合は十分な横断後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。独自合算しない。
- record: `docs/lt_pachinko_db/machines/2025-06-02_eF_kanojo_okarishimasu.md`
- commit: `b58189289859f123212a3f3b0f8a35a29635a871`
Sources:
- https://www.p-world.co.jp/machine/database/10253
- https://hisshobon.com/machines/e%E3%83%95%E3%82%A3%E3%83%BC%E3%83%90%E3%83%BC%E5%BD%BC%E5%A5%B3%E3%80%81%E3%81%8A%E5%80%9F%E3%82%8A%E3%81%97%E3%81%BE%E3%81%99/
- https://altema.jp/pachimo/ekanokari
- https://pachinko-curation.com/55619/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — OPEN
Independent calendars previously agreed on 11 pachinko introductions. Same-day queue:
1. `Pフィーバーマクロスフロンティア5 LT-Light ver.` — COMPLETE_CORE
2. `P緋弾のアリア～緋緋神降臨～88Ver.` — COMPLETE_CORE
3. `PLT激デジ ジューシーハニー極嬢` — COMPLETE_CORE
4. `e 新・必殺仕置人 超斬撃99` — COMPLETE_CORE
5. `P DD北斗の拳3 百突99ver.` — EXCLUDED / LT-negative
6. `eF彼女、お借りします` — COMPLETE_CORE
7. `e範馬刃牙` — **NEXT: LT status verify; collect full core/LT record if positive**
8. `PA海物語3R3` — LT status verify
9. `デカスタ P戦国無双` — LT status verify
10. `デジハネPモンスターハンターライズ` — LT status verify
11. `e冴えない彼女の育てかた` — LT status verify
Calendar cross-check retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://hazuse.com/new-machine/202506-2/

## Effective DB state
Previous effective state: 99 records / 98 COMPLETE_CORE / 1 CONFLICT.
This relay excluded one LT-negative candidate and added one COMPLETE_CORE record.
- machine records: **100**
- COMPLETE_CORE: **99**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-06-02 with `e範馬刃牙`. First verify LT-positive/negative status and duplicate absence; if LT-positive, collect full core/LT record. Then proceed through the exact same-day queue above. Do not close 2025-06-02 until all 11 candidates have LT status checked and the boundary has been re-enumerated against at least two independent calendars. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
