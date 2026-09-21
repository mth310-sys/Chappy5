# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: `PA海物語3R3`
- duplicate search performed before record creation

## This relay
### PA海物語3R3 — EXCLUDED / LT-negative
- 三洋物産 / 型式 `PA海物語3R3LBA / LBAW` / 2025-06-02。
- メーカー発表・業界記事・複数解析を横断。約1/99.9→約1/16.9、確変51%、通常大当り後時短40回、確変次回までの確変ループ機。
- パチマガスロマガ詳細スペックに `ラッキートリガー: なし` の直接記載あり。LT搭載根拠なし。
- よってLT DBには機種レコードを作らない。
Sources:
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20250326.pdf
- https://p-johojima.jp/new_machine/post-2601/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sanyo_pachi/355/kh02.php
- https://www.pachibee.jp/machines/about/125050004

### デカスタP戦国無双 — COMPLETE_CORE
- ニューギン / 型式 `P戦国無双HM3` / 2025-06-02。
- 通常約1/319.68、右打ち約1/65.0（大当り+V当り合算）。RUSH総突入51%。
- 初当り1%でLT `超戦国RUSH武将乱舞` 直行、50%で下位 `戦国RUSH`、49%通常。
- 戦国RUSH: ST100回、継続約80%。RUSH中大当りの8%でLT発動。
- LT: ST162回、継続約92.4%。LT中大当り後は下位へ転落せずLT継続。右打ち大当りの27%が約1500個。
- LT突入時期待出玉約13,352個は `LT前約2315 + 突入時1500 + LT後期待約9537` の合算定義として分離保存。
- 通常時全当選基準の総LT到達率は直接値未確認につき独自合算せず `UNVERIFIED_AFTER_RESEARCH`。
- record: `docs/lt_pachinko_db/machines/2025-06-02_dekasuta_p_sengoku_musou.md`
- commit: `a4314ad2f3d9bd6f4d8767aba3242a9981f2777d`
Sources:
- https://p-johojima.jp/news/post-6973/
- https://www.p-world.co.jp/machine/database/10284
- https://hazuse.com/machine/pachinko/PX0292/
- https://1geki.jp/pachinko/p_ds_sngkms/39/
- https://1geki.jp/pachinko/p_ds_sngkms/51/
- https://1geki.jp/pachinko/p_ds_sngkms/53/

### デジハネPモンスターハンターライズ — EXCLUDED / LT-negative
- 銀座製 / サミー / 型式 `PデジハネモンスターハンターライズGSPB` / 2025-06-02。
- 通常1/99.9、右1/1.8、RUSH突入約50%、RUSH継続80%の一種二種混合甘デジ。
- 必勝本基本スペックに `ラッキートリガー: 非搭載` の直接記載あり。業界発表・一撃・なな徹の構造にも上位LTなし。
- よってLT DBには機種レコードを作らない。
Sources:
- https://p.hisshobon.jp/machine/4538/1/109732
- https://news.p-world.co.jp/articles/30780/yugitsushin
- https://1geki.jp/pachinko/p_monhun_rise99/
- https://nana-press.com/kaiseki/machine/984/29577/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — OPEN
Same-day queue (11 candidates):
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
11. `e冴えない彼女の育てかた` — **NEXT: LT-positive already confirmed by industry/analysis search; collect full core/LT record**
Calendar cross-check retained:
- https://p-johojima.jp/machine_spec/post-2074/
- https://hazuse.com/new-machine/202506-2/

## Effective DB state
Previous effective state: 101 records / 100 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record; two candidates excluded as LT-negative.
- machine records: **102**
- COMPLETE_CORE: **101**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Continue 2025-06-02 with `e冴えない彼女の育てかた`. LT-positive status is already confirmed (大都技研LT第2弾、通常約1/179.6、RUSH51%/約80%、LT `冴えてる彼女RUSH♭` 約92%、下位RUSH中約2400個当り15%でLT). Collect and cross-check the full record, then re-enumerate the 2025-06-02 boundary against at least two independent calendars. If all 11 candidates remain accounted for, mark 2025-06-02 CLOSED and advance chronologically to the next introduction date. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
