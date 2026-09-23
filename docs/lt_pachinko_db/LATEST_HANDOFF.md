# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before positive write

## Closed boundaries retained
- through 2025-11-17: previous closed boundaries retained.
- 2025-12-08 — CLOSED 9/9.
- 2025-12-22 — CLOSED 3/3.
- 2026-01-05 — CLOSED 11/11.
- 2026-01-19 — CLOSED 3/3.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。

## 2026-02-02 boundary — OPEN 7/10 processed
Boundary enumeration source: 一撃 2026年2月新台カレンダー (10 pachinko machines) cross-checked against K-Navi February calendar. HAZUSE calendar confirms 2026-02-02 is the February boundary.

Boundary candidates, preserving calendar order:
1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
2. e 真・北斗無双 第5章 夢幻闘双 — COMPLETE_CORE
3. P黄門ちゃま寿限無 LLサイズ 259ver. — LT非搭載、除外
4. P黄門ちゃま寿限無 99ver. — COMPLETE_CORE
5. P冴えない彼女の育てかた 99ver. — COMPLETE_CORE
6. eAぷらねっとアポロGO — LT非搭載、除外
7. P俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver. — COMPLETE_CORE
8. PA乗物娘 with CYBERJAPANDANCERS 2nd season 77ver. — NEXT
9. PA乗物娘 with CYBERJAPANDANCERS 2nd season 59ver. — unprocessed
10. e異世界でチート能力を手にした俺は現実世界をも無双する ～レベルアップは人生を変えた～ — unprocessed

Boundary evidence:
- https://1geki.jp/newmachinecalender/202602/ — 2026-02-02, 10 pachinko / 6 slot; complete 10-machine list.
- https://p-kn.com/calendar/202602/ — 2026-02-02 calendar cross-check; naming may group sibling specs.
- https://hazuse.com/new-machine-calendar/newmachine-calendar/ — confirms 2026-02-02 February introduction boundary.

## Candidate audit summary
### 1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_fever_bastard_ankoku_no_hakaishin.md`
- commit: `94a56697debdc4b1ff2684abb05f46825a324706`
- SANKYO（製造: ジェイビー）。通常図柄揃い約1/399.9、RUSH約50%。バスタードRUSH ST10+残4/TOTAL約75%。ST区間大当り約50%で3000個（1500×2）＋LT `超バスタードRUSH`。LTもTOTAL約75%で出玉強化型。

### 2. e 真・北斗無双 第5章 夢幻闘双 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_shin_hokuto_musou_5_mugen_tousou.md`
- commit: `fea20d634cde5192c058eca9687e7eb75d739038`
- サミー。通常約1/159.8、右約1/3.49。下位RUSHなし、初当り20%でLT `夢幻闘双`。時短1+残4、約82%。右1500～7500個（1500×1～5）。

### 3. P黄門ちゃま寿限無 LLサイズ 259ver. — LT非搭載、DB除外
- 平和、型式 `P黄門ちゃま9ME2`。通常1/259.0、RUSH約50%、ST100回・約50%、ALL1500個。実機資料でLT非搭載を明示。同時導入99ver.と混同しない。
- exclusion evidence: https://www.a-pachinko.com/SHOP/p-heiwa252.html ; https://news.p-world.co.jp/articles/32483/greenbelt ; https://pachimaga.com/free/mach/maker-p/heiwa/064620.php

### 4. P黄門ちゃま寿限無 99ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_koumon_chama_jugemu_99ver.md`
- commit: `f1cd2615582a3729be2377cb562ca020a32f8269`
- 平和。通常1/99.9、右1/84.6。初当り約50%で寿限無RUSH ST100/約70%。下位大当り約10%で2000個＋α＋LT `寿限無RUSH極`。LT ST134/約80%。

### 5. P冴えない彼女の育てかた 99ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_saenai_heroine_no_sodatekata_99ver.md`
- commit: `899993f1aac8b0070f068a51019d777e1fa76db0`
- 大都技研。通常1/99.9、右1/29.6。初当り50%で冴えてる彼女RUSH32回/約67%。下位RUSH中2400BONUS 12.5%でLT `冴えてる彼女RUSH♭`。LT66回/約90%。

### 6. eAぷらねっとアポロGO — LT非搭載、DB除外
- ダイナム×豊丸産業共同開発PB、型式 `eAぷらねっとアポロGO2-X`。設定付きST機。100回ループの `超スペースチャンスタイム` はLTではない。詳細スペック資料が `ラッキートリガー: なし` と明記。
- exclusion evidence: https://prtimes.jp/main/html/rd/p/000000538.000013913.html ; https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/321/kh02.php ; https://hisshobon.com/machineinfo/100837/

### 7. P俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_oreimo_kouryaku_skip_159ver.md`
- commit: `3609da2908cc96b72051013b5d8c49c1851cf9dd`
- 京楽産業.（型式名義オッケー.）、型式 `P俺の妹がこんなに可愛いわけがない。攻略スキップ159verM6`、2026-02-02。
- 通常約1/159.9、俺CHANCE中約1/12.0。一種二種混合/普図ST型。
- 初当り5R 750個。50%で `俺CHANCE`（8回/約50%）、50%通常。
- 俺CHANCE中大当りは10R1500個＋LT `ごほうび天国` 35% / 10R1500個＋俺CHANCE 35% / 2R300個＋俺CHANCE 30%。
- LT発動契機は1500個大当り（大当り全体70%）時のチャレンジ成功50%。大当り全体では35%で整合。
- `ごほうび天国` はボーナス型LT。発動時1500個＋4回分大当りを獲得し、トータル2700～7500個。35%で天国ループし、さらに4回分1200～6000個を上乗せ。非ループ後は俺CHANCEへ復帰。
- パチマガ掲載の開始時期待出玉分布は9000個超31.5% / 7000個超15.4% / 6000個超25.8% / 5000個超19.9% / 3900個6.6% / 2700個0.8%。単一大当り払出ではなく大当り5回分＋αの合計/期待出玉表現。
- P-スキップ搭載。遊タイム非搭載。
- 導入前資料のLT突入率1/1233は「噂」表記のためcanonical不採用。通常遊技全体基準の確定LT到達率はUNVERIFIED。
- 賞球欄は必勝本ヘソ2個とパチマガ/P-WORLDヘソ1個で差があるがDB必須主要LT値ではないため注記。LT主要仕様の未解決競合なし。
- evidence: https://www.kyoraku.co.jp/news/detail/860 ; https://pachimaga.com/free/mach/maker-p/kyoraku/064562.php ; https://p.hisshobon.jp/machine/4687/1/113484 ; https://p.hisshobon.jp/machine/4687/1/113486 ; https://www.p-world.co.jp/machine/database/10419 ; https://pachinko-curation.com/59388/

## Effective DB state
Previous: 176 machine records / 174 COMPLETE_CORE / 2 CONFLICT.
This relay audited candidate #7 and added one COMPLETE_CORE record.
- machine records: **177**
- COMPLETE_CORE: **175**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue OPEN **2026-02-02 boundary candidate #8: `PA乗物娘 with CYBERJAPANDANCERS 2nd season 77ver.`**. Duplicate-search first, then audit LT-equipped status before any machine write. Explicitly distinguish the sibling 77ver. and 59ver.; do not copy LT status or values across them without direct evidence.

After each candidate, audit LT-equipped status. LT-negative candidates receive no machine record, but exclusion evidence and status must be retained here. Do not skip the non-LT-looking candidates: the 10-machine boundary must reach 10/10 before closure. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
