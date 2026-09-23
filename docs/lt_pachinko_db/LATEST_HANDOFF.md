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

## 2026-02-02 boundary — OPEN 6/10 processed
Boundary enumeration source: 一撃 2026年2月新台カレンダー (10 pachinko machines) cross-checked against K-Navi February calendar. HAZUSE calendar confirms 2026-02-02 is the February boundary.

Boundary candidates, preserving calendar order:
1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
2. e 真・北斗無双 第5章 夢幻闘双 — COMPLETE_CORE
3. P黄門ちゃま寿限無 LLサイズ 259ver. — LT非搭載、除外
4. P黄門ちゃま寿限無 99ver. — COMPLETE_CORE
5. P冴えない彼女の育てかた 99ver. — COMPLETE_CORE
6. eAぷらねっとアポロGO — LT非搭載、除外
7. P俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver. — NEXT
8. PA乗物娘 with CYBERJAPANDANCERS 2nd season 77ver. — unprocessed
9. PA乗物娘 with CYBERJAPANDANCERS 2nd season 59ver. — unprocessed
10. e異世界でチート能力を手にした俺は現実世界をも無双する ～レベルアップは人生を変えた～ — unprocessed

Boundary evidence:
- https://1geki.jp/newmachinecalender/202602/ — 2026-02-02, 10 pachinko / 6 slot; complete 10-machine list.
- https://p-kn.com/calendar/202602/ — 2026-02-02 calendar cross-check; naming may group sibling specs.
- https://hazuse.com/new-machine-calendar/newmachine-calendar/ — confirms 2026-02-02 February introduction boundary.

### 1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_fever_bastard_ankoku_no_hakaishin.md`
- commit: `94a56697debdc4b1ff2684abb05f46825a324706`
- SANKYO（製造: ジェイビー）、型式 `eフィーバーバスタードG`、検定510640、2026-02-02。
- 通常図柄揃い約1/399.9。公式併記の大当り確率1/349.9とは定義分離。右約1/10.8（大当り＋小当り合算）。
- 初当りRUSH突入約50%。バスタードRUSHはST10回＋残4、TOTAL約75%（ST10約62%＋残4約32%）。
- 下位RUSHのST区間大当り約50%で3000個（1500×2）＋LT `超バスタードRUSH`。残保留当選時は1500個＋LT 100%。
- LTもST10回＋残4/TOTAL約75%。ST区間大当りは4500個（1500×3）約30% / 3000個（1500×2）約70%。残保留当選は1500個＋LT。
- 継続率上昇型ではなく、同じ約75%のままST区間出玉を強化するLT。
- ラーズちゃーじ300個経由のRUSH突入あり。遊タイム非搭載。
- 通常遊技全体基準の総LT到達率は直接値未確認。経路値から独自算出しない。

### 2. e 真・北斗無双 第5章 夢幻闘双 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_shin_hokuto_musou_5_mugen_tousou.md`
- commit: `fea20d634cde5192c058eca9687e7eb75d739038`
- Sammy / サミー、型式 `e真北斗無双5夢幻闘双SCEA`、検定510595、2026-02-02。
- 通常約1/159.8、右約1/3.49、1種2種混合。
- 下位RUSHなし。初当り約200個から20%でLT `夢幻闘双`、残り80%は通常。RUSH突入=LT発動の直LT型。
- LTは時短1回＋残保留4個、継続約82%（V通過条件）。
- 右出玉: 7500個0.2% / 6000個2.9% / 4500個14.7% / 3000個36.6% / 1500個45.6%。3000～7500個は1500個×2～5回で単一大当り出玉としない。
- 遊タイム非搭載。未解決競合なし。

### 3. P黄門ちゃま寿限無 LLサイズ 259ver. — LT非搭載、DB除外
- 平和、型式 `P黄門ちゃま9ME2`、2026-02-02。
- 通常1/259.0、寿限無RUSH中1/144.6、RUSH突入約50%、ST100回・継続約50%、通常/右ともALL1500個。
- 業界発表、パチマガスロマガ、K-Navi等で259ver.の仕様を照合。実機販売資料でも明示的に「LT非搭載」。
- 同時導入の99ver.はLT搭載なので兄弟スペックを混同しない。
- exclusion evidence: https://www.a-pachinko.com/SHOP/p-heiwa252.html ; https://news.p-world.co.jp/articles/32483/greenbelt ; https://pachimaga.com/free/mach/maker-p/heiwa/064620.php

### 4. P黄門ちゃま寿限無 99ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_koumon_chama_jugemu_99ver.md`
- commit: `f1cd2615582a3729be2377cb562ca020a32f8269`
- 平和、型式 `P黄門ちゃま9AD2`、2026-02-02。通常1/99.9、右1/84.6。
- 初当り300個。約50%で下位 `寿限無RUSH`（ST100回 / 約70%）、残り約50%は通常。
- 下位RUSH中大当り約10%で2,000個＋α＋LT `寿限無RUSH極`、約90%は500個＋下位RUSH継続。
- LTはST134回・約80%。LT中は約95%が2,000個＋α、約5%が4,000個＋α。
- 2,000個=500個×4回、4,000個=500個×8回として公表され、大当り時600個の注記あり。複数回分なので単一大当り払出としない。
- 遊タイム非搭載。通常遊技全体基準の総LT到達率は直接値未確認につき独自算出しない。

### 5. P冴えない彼女の育てかた 99ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_saenai_heroine_no_sodatekata_99ver.md`
- commit: `899993f1aac8b0070f068a51019d777e1fa76db0`
- 大都技研、型式 `P／冴えない彼女の育てかた／A01`、2026-02-02。通常1/99.9、右1/29.6、一種二種混合。
- 初当り約300個。50%で下位 `冴えてる彼女RUSH`（32回 / 約67%）、50%通常。
- 下位RUSH中の2400BONUS（1500個＋300個×3）12.5%でLT `冴えてる彼女RUSH♭` 発動。
- LTは66回・約90%。LT中振り分けは2400個12.5% / 1200個12.5% / 600個25% / 300個50%、全てLT継続。
- 2400個は複数回合計表現。遊タイム非搭載。通常遊技全体基準の総LT到達率は直接値未確認につき独自算出しない。
- 遊技日本記事の賞球欄のみ1&4&10表記だが、同記事の1500個定義と複数解析資料は15賞球10Cで整合。LT主要仕様には未解決競合なし。

### 6. eAぷらねっとアポロGO — LT非搭載、DB除外
- ダイナム×豊丸産業共同開発PB、型式 `eAぷらねっとアポロGO2-X`、2026-02-02。
- 設定1～6付きST機。通常約1/99.9～1/99.1、高確率約1/11.97～1/11.88、ST8回、電サポ25/50/100回。
- 10Rまたは電サポ100回中大当りで100回ループの `超スペースチャンスタイム`。これはLTではない。
- 低確率242回で遊タイム。ダイナム発表は時短10000回（実質次回まで）。
- 詳細スペック資料が明示的に `ラッキートリガー: なし` とするためDB対象外。
- exclusion evidence: https://prtimes.jp/main/html/rd/p/000000538.000013913.html ; https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/321/kh02.php ; https://hisshobon.com/machineinfo/100837/

## Effective DB state
Previous: 175 machine records / 173 COMPLETE_CORE / 2 CONFLICT.
This relay audited 2 candidates: one COMPLETE_CORE addition and one LT-negative exclusion.
- machine records: **176**
- COMPLETE_CORE: **174**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue OPEN **2026-02-02 boundary candidate #7: `P俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver.`**. Duplicate-search first, then audit LT-equipped status before any machine write. If LT-positive, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling, and complete normal→initial→RUSH→LT flow.

After each candidate, audit LT-equipped status. LT-negative candidates receive no machine record, but exclusion evidence and status must be retained here. Do not skip the non-LT-looking candidates: the 10-machine boundary must reach 10/10 before closure. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
