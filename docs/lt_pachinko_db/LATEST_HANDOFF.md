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

## 2026-04-20 boundary — OPEN 1/3
Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-20 パチンコ3機種。retrieved 2026-09-24

Queue:
1. eリング 最恐領域 — COMPLETE_CORE
2. e86-エイティシックス- — NEXT
3. eフィーバーキン肉マン — pending

### 1. eリング 最恐領域 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-20_e_ring_saikyou_ryouiki.md`
- manufacturer: オレンジ（藤商事グループ）。型式 `eリング最恐領域RHA`、検定番号 `5P1458`、2026-04-20導入。
- 一種二種混合 / LT3.0プラス。通常図柄揃い約1/399、貞子チャージ約1/2723、チャージ込み大当り1/348。
- 下位RUSHなし。図柄揃い時約57%でLT/RUSH `最恐領域` へ直行。通常時全抽選基準の総LT到達率は直接値未確認のため推測しない。
- `最恐領域` は二段階ST。前半 `貞子覚醒BURST` 5回・約1/8、後半 `呪いの連鎖` 70回・約1/129、TOTAL継続約70%。
- 前半当選は6000個50% / 3000個50%。3000個=特図2大当り2回分、6000個=4回分の合計。後半当選はALL1500個。
- 初当り図柄揃いは1500個、チャージは300個。チャージ後の手役物落下からLTへ繋がるパターンも公開資料に記載。
- sources / retrieved 2026-09-24:
  - https://www.youtube.com/watch?v=u2JnQ4M9SVQ
  - https://yugi-nippon.com/pachinko-new-machine/post-75948/
  - https://web-greenbelt.jp/post-110379/
  - https://1geki.jp/pachinko/e_ring_saikyou/
  - https://pachimaga.com/free/mach/maker-p/orange/064969.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/orange_pachi/006/kh01.php
- confidence: ANALYSIS_HIGH
- conflicts: none

## Effective DB state
- machine records: **196**
- COMPLETE_CORE: **192**
- CONFLICT: **4**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026-04-20 boundary candidate #2 **`e86-エイティシックス-`**. Duplicate-search first, then verify formal model/manufacturer/LT-equipped status and collect full core/LT fields. Continue #3 `eフィーバーキン肉マン` afterward without skipping.
