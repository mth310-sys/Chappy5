# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-24
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
- 2026-03-02 — CLOSED 12/12; 11 LT-equipped records, 1 LT-negative exclusion.
- 2026-03-16 — CLOSED 5/5; 1 LT-equipped record, 4 LT-negative exclusions.
- 2026-04-06 — CLOSED 7/7; 5 records (4 COMPLETE_CORE + 1 CONFLICT), 2 LT-negative exclusions.

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。
- `P戦国乙女7 終焉の関ヶ原 99ver.` — RUSH突入約63%対約53%の同型式ページ競合。CONFLICT維持。
- `P ウルトラマンメビウス デカヘソ319` — LT搭載判定自体が資料競合。CONFLICT。詳細はrecord参照。

## 2026-04-06 boundary — CLOSED 7/7
Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-06 パチンコ7機種。retrieved 2026-09-24

Queue:
1. e転生したらスライムだった件2 — COMPLETE_CORE
2. eリコリス・リコイル — COMPLETE_CORE
3. eラグナドール 妖しき皇帝と終焉の夜叉姫 — COMPLETE_CORE
4. e 終末のワルキューレ — COMPLETE_CORE
5. PAコマコマ倶楽部with坂本冬美89確変ループ10ラウンド極 — LT-NEGATIVE / EXCLUDED
6. P にゃんこ大戦争 多様性のネコ 神さまにおまかせ88ver. — LT-NEGATIVE / EXCLUDED
7. P ウルトラマンメビウス デカヘソ319 — CONFLICT

### 1. e転生したらスライムだった件2 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_tensura2.md`
- 通常図柄揃い約1/399.9、LT「開国祭」実質突入約61.3%、開国祭約75%、上位LT「超開国祭」約80%。

### 2. eリコリス・リコイル — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_lycoris_recoil.md`
- 通常約1/259.7。下位RUSHなしでRUSH自体がLT `SPECIAL LycoReco RUSH HYPER DELUXE`。初当りTOTAL 50%、132回、継続約75%。

### 3. eラグナドール 妖しき皇帝と終焉の夜叉姫 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_ragnador.md`
- 型式 `eラグナドールCMB`。ダブルLT。通常図柄揃い約1/349.9、裏CHALLENGE約1/758.9、合算約1/239.5。表LT `ラグナドRUSH` / 裏LT `ラグナドRUSH GOLD`。

### 4. e 終末のワルキューレ — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_shumatsu_no_valkyrie.md`
- 型式 `e終末のワルキューレEREA`。LT3.0Plus / 一種二種混合 / 普図転落型。通常約1/219.9。初当り約26%からLT `神VS人類最終闘争` へ直行、継続約75%。

### 5. PAコマコマ倶楽部with坂本冬美89確変ループ10ラウンド極 — LT-NEGATIVE / EXCLUDED
- 型式 `PAコマコマ倶楽部with坂本冬美VLP1`。必勝本・パチマガスロマガFREEがLT非搭載と直接明記。
- evidence: https://hisshobon.com/machineinfo/101249/ ; https://pachimaga.com/free/mach/maker-p/toyomaru/064702.php
- machine recordは作成しない。

### 6. P にゃんこ大戦争 多様性のネコ 神さまにおまかせ88ver. — LT-NEGATIVE / EXCLUDED
- 京楽産業.。CS-plaza詳細スペックが `ラッキートリガー なし` と直接明記。別LTスペックと混同しない。
- evidence: https://www.kyoraku.co.jp/news/detail/869 ; https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/kyoraku_pachi/236/kh02.php
- machine recordは作成しない。

### 7. P ウルトラマンメビウス デカヘソ319 — CONFLICT
- record: `docs/lt_pachinko_db/machines/2026-04-06_p_ultraman_mebius_dekaheso319.md`
- メーカー: オッケー.。型式 `PウルトラマンメビウスM4`、検定番号 `5P1361`、2026-04-06導入。
- 通常約1/319.9、RUSH中約1/12.3。RUSH突入51%、ST10回＋残保留4個、TOTAL継続約70%。
- 初当り: 600個＋RUSH50.5% / 600個＋通常49.0% / 5250個＋最上位RUSH0.5%。5250個=1050個×5回。
- RUSHは大当りごとに段階昇格。RUSH[1]1050個100%、RUSH[2]2100個50%/1050個50%、RUSH[3]3150個50%/1050個50%、最上位5250個50%/1050個50%。
- ST10回内大当り期待度57.2%。残保留4個「皇帝決戦」当選期待度28.8%、当選時1050個＋最上位RUSH。RUSH突入時の最上位RUSH到達期待度は約42%。
- LT搭載判定が未解決競合。CS-plaza / 一撃 / 必勝本 / パチンコスペック解析は同型式をLT搭載として扱う。一方、ハズセ / K-Naviは同型式を `ラッキートリガー 非搭載` と直接明記。メーカー公式は「最上位RUSH」と説明するがLT語を確認できない。
- LT名称も資料差あり。必勝本は `ウルトラメビウスDYNAMITE` をLTと呼び、一撃は最上位を `ウルトラメビウスDYNAMITE MAX` と表記。canonicalを断定せずCONFLICT保存。
- evidence / retrieved 2026-09-24:
  - https://www.kyoraku.co.jp/news/detail/870
  - https://news.p-world.co.jp/articles/33079/yugitsushin
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/ok_pachi/034/kh01.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/ok_pachi/034/kh02.php
  - https://1geki.jp/pachinko/p_ultramanmebius/
  - https://hisshobon.com/machineinfo/101528/
  - https://hisshobon.com/machineinfo/101529/
  - https://hisshobon.com/machineinfo/101530/
  - https://hazuse.com/hd/5p1361/
  - https://p-kn.com/pachinko/4481/
  - https://pachinko-spec.info/spec-detail/167207/
- confidence: CONFLICT

## Next chronological boundary — 2026-04-20 OPEN 0/3
Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-20 パチンコ3機種。retrieved 2026-09-24

Queue:
1. eリング 最恐領域 — NEXT
2. e86-エイティシックス- — pending
3. eフィーバーキン肉マン — pending

All three are tagged Lucky Trigger by the current calendar, but each must still be independently verified by formal model/manufacturer/official/industry/analysis sources before registration.

## Effective DB state
- machine records: **195**
- COMPLETE_CORE: **191**
- CONFLICT: **4**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026-04-20 boundary candidate #1 **`eリング 最恐領域`**. Duplicate-search first, then verify formal model/manufacturer/LT-equipped status and collect full core/LT fields. Continue #2 `e86-エイティシックス-` and #3 `eフィーバーキン肉マン` in order without skipping.
