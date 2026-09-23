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
- 2026-02-02 — CLOSED 10/10.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。

## 2026-02-02 boundary — CLOSED 10/10
Boundary enumeration source: 一撃 2026年2月新台カレンダー (10 pachinko machines), cross-checked against K-Navi February calendar. HAZUSE calendar also confirms the February introduction boundary.

Boundary candidates, preserving calendar order:
1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
2. e 真・北斗無双 第5章 夢幻闘双 — COMPLETE_CORE
3. P黄門ちゃま寿限無 LLサイズ 259ver. — LT非搭載、除外
4. P黄門ちゃま寿限無 99ver. — COMPLETE_CORE
5. P冴えない彼女の育てかた 99ver. — COMPLETE_CORE
6. eAぷらねっとアポロGO — LT非搭載、除外
7. P俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver. — COMPLETE_CORE
8. PA乗物娘 with CYBERJAPANDANCERS 2nd season 77ver. — LT非搭載、除外
9. PA乗物娘 with CYBERJAPANDANCERS 2nd season 59ver. — LT非搭載、除外
10. e異世界でチート能力を手にした俺は現実世界をも無双する ～レベルアップは人生を変えた～ — COMPLETE_CORE

Boundary evidence:
- https://1geki.jp/newmachinecalender/202602/ — 2026-02-02, 10 pachinko / 6 slot; complete February pachinko list.
- https://p-kn.com/calendar/202602/ — February calendar cross-check.
- https://hazuse.com/new-machine-calendar/newmachine-calendar/ — boundary cross-check.

## Candidate audit summary
### 1. eフィーバーBASTARD!! -暗黒の破壊神- — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_fever_bastard_ankoku_no_hakaishin.md`
- commit: `94a56697debdc4b1ff2684abb05f46825a324706`

### 2. e 真・北斗無双 第5章 夢幻闘双 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_shin_hokuto_musou_5_mugen_tousou.md`
- commit: `fea20d634cde5192c058eca9687e7eb75d739038`

### 3. P黄門ちゃま寿限無 LLサイズ 259ver. — LT非搭載、DB除外
- 平和、型式 `P黄門ちゃま9ME2`。通常1/259.0、RUSH約50%、ST100回・約50%、ALL1500個。実機資料でLT非搭載を明示。同時導入99ver.と混同しない。
- evidence: https://www.a-pachinko.com/SHOP/p-heiwa252.html ; https://news.p-world.co.jp/articles/32483/greenbelt ; https://pachimaga.com/free/mach/maker-p/heiwa/064620.php

### 4. P黄門ちゃま寿限無 99ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_koumon_chama_jugemu_99ver.md`
- commit: `f1cd2615582a3729be2377cb562ca020a32f8269`

### 5. P冴えない彼女の育てかた 99ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_saenai_heroine_no_sodatekata_99ver.md`
- commit: `899993f1aac8b0070f068a51019d777e1fa76db0`

### 6. eAぷらねっとアポロGO — LT非搭載、DB除外
- ダイナム×豊丸産業共同開発PB、型式 `eAぷらねっとアポロGO2-X`。設定付きST機。100回ループの `超スペースチャンスタイム` はLTではない。詳細スペック資料が `ラッキートリガー: なし` と明記。
- evidence: https://prtimes.jp/main/html/rd/p/000000538.000013913.html ; https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/321/kh02.php ; https://hisshobon.com/machineinfo/100837/

### 7. P俺の妹がこんなに可愛いわけがない。攻略!!スキップ159ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_p_oreimo_kouryaku_skip_159ver.md`
- commit: `3609da2908cc96b72051013b5d8c49c1851cf9dd`
- 京楽産業.（型式名義オッケー.）、通常約1/159.9、俺CHANCE 8回/約50%。右大当り35%でボーナス型LT `ごほうび天国`。35%で天国ループ、非ループ後は俺CHANCE復帰。通常遊技全体基準LT到達率はUNVERIFIED。

### 8. PA乗物娘 with CYBERJAPANDANCERS 2nd season 77ver. — LT非搭載、DB除外
- ニューギン、型式 `PA乗物娘2N`、2026-02-02。
- 通常約1/77.1、高確率約1/72.57。初当り後100%で `乗物RUSH`、ST50回、残保留込み継続約52.6%。右10R1000個30% / 4R400個70%。
- 低確率159回消化で遊タイム時短10000回。LT/上位RUSHへの遷移はなく、業界発表・P-WORLD・一撃・パチマガのゲームフローは100%ST+遊タイムとして一致。LT機として登録しない。
- evidence: https://news.p-world.co.jp/articles/32740/yugitsushin ; https://news.p-world.co.jp/articles/32722/greenbelt ; https://www.p-world.co.jp/machine/database/10422 ; https://1geki.jp/pachinko/pa_norimonom2_77/39/ ; https://pachimaga.com/free/mach/maker-p/newgin/064555.php

### 9. PA乗物娘 with CYBERJAPANDANCERS 2nd season 59ver. — LT非搭載、DB除外
- ニューギン、型式 `PA乗物娘2GO2`、2026-02-02。一部ホール限定PB、6段階設定付き甘デジ。
- 通常約1/59.9～1/53.3、高確率約1/58.2～1/51.8。初当り後100%で `乗物RUSH`、ST40回、継続約53.3～57.5%。右10R700個52%。
- 低確率160回消化で遊タイム時短10000回。業界発表・P-WORLD・一撃・パチマガで設定付きST+遊タイムとして一致し、LT/上位RUSHへの遷移なし。77ver.から値を流用せず個別監査した。
- evidence: https://news.p-world.co.jp/articles/32711/yugitsushin ; https://www.p-world.co.jp/machine/database/10421 ; https://1geki.jp/pachinko/pa_norimonom2_59/39/ ; https://1geki.jp/pachinko/pa_norimonom2_59/51/ ; https://pachimaga.com/free/mach/maker-p/newgin/064840.php

### 10. e異世界でチート能力を手にした俺は現実世界をも無双する ～レベルアップは人生を変えた～ — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-02-02_e_iseleve.md`
- commit: `b7fc54e8996a84654e3edd848d686f026504aae9`
- 藤商事、型式 `eいせれべFSZ`、検定510549。LT3.0プラス/BIGスタート/直LT型。
- 通常約1/179（詳細値1/179.5）、右抽選約1/77（1/77.9）。通常時大当りの約20%でRUSH=LTへ。
- 通常振り分け: 1500個+RUSH実質次回0.2% / 300個+RUSH70回19.8% / 300個+通常80.0%。
- `夢幻LT`。演出RUSHは夢幻RUSH / 神獣RUSH / ヒロイン夢想RUSH / 超ヒロイン夢想RUSH。70回のBONUS当選期待度約60%。
- BONUSは特図2大当り3回1セットで、約59%で1G連。RUSH×BONUS 1G連 TOTAL継続率約83%。初回RUSH当りは1G連濃厚。
- 右払出合計: 4050～4500個1.3% / 3000～3750個4.9% / 2250～2850個33.0% / 1650～1800個28.0% / 1050個20.1% / 450個12.7%。3回分合計値なので単一大当り出玉と混同しない。
- evidence: https://news.p-world.co.jp/articles/32556/yugitsushin ; https://yugi-nippon.com/pachinko-new-machine/post-74707/ ; https://1geki.jp/pachinko/e_iseleve/ ; https://pachimaga.com/free/mach/maker-p/fujishoji/064743.php ; https://pachinko-curation.com/58897/

## Effective DB state
Previous: 177 machine records / 175 COMPLETE_CORE / 2 CONFLICT.
This relay audited candidates #8-#10, excluded two LT-negative sibling specs, and added one COMPLETE_CORE record.
- machine records: **178**
- COMPLETE_CORE: **176**
- CONFLICT: **2**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
The **2026-02-02 boundary is CLOSED 10/10**. Onegeki's February 2026 calendar contains only this pachinko boundary, so continue chronologically to the **first March 2026 pachinko introduction boundary**. Re-enumerate the March boundary from at least two calendars before processing candidate #1; do not assume the date or candidate count from memory.

For every candidate, duplicate-search first and audit LT-equipped status before any machine write. LT-negative candidates receive no machine record, but exclusion evidence and status must be retained here. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT` until resolved; do not average it.
