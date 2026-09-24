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

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。
- `P戦国乙女7 終焉の関ヶ原 99ver.` — RUSH突入約63%対約53%の同型式ページ競合。CONFLICT維持。

## 2026-03-16 boundary — CLOSED 5/5
一撃2026年3月カレンダー（最終更新2026-09-08）を再確認。同ページ上の3/16はパチンコ5機種で完結し、3/16以降の3月導入日掲載はないため境界をCLOSEDとする。

1. PキングモンスターRUSH 67Ver. — LT-NON-EQUIPPED / EXCLUDED
2. e 乃木坂46 Ⅱ SWEET Version — LT-NON-EQUIPPED / EXCLUDED
3. スマパチ SSSS.GRIDMAN メガSTART 159ver. — LT-NON-EQUIPPED / EXCLUDED（CS-plaza明示非搭載。P-WORLD/ちょんぼりすたのLT表記差は監査済み）
4. P モモキュンソード 速撃99ver. — LT-NON-EQUIPPED / EXCLUDED
5. Pえとたま2 神祭 干支甘 — COMPLETE_CORE

Boundary evidence:
- https://1geki.jp/newmachinecalender/202603/ — 3/16全5機種、候補#5にLTタグ。retrieved 2026-09-24

### 5. Pえとたま2 神祭 干支甘 — COMPLETE_CORE
- メーカー: メーシー（ユニバーサルエンターテインメント）。正式型式 `Pえとたま2SE`。2026-03-16導入。
- LT搭載は遊技通信のメーカー発表記事、グリーンべると、P-WORLD、CS-plaza、一撃、必勝本で独立確認。
- 通常1/99.90、右打ち1/63.44。初当り3R 210個（払出）。初当り70%で「えとたまチャンス」へ、30%通常。
- えとたまチャンス: 時短40回+残保留4個、TOTAL突破約50%。大当りで「えとたまRUSH祭」へ。
- えとたまRUSH祭: 時短83回+残保留4個、TOTAL継続約75%。大当り時10%でLT「超えとたまRUSH祭」。振り分けは10R 910個+LT 10% / 10R 910個+通常RUSH 60% / 3R 210個+通常RUSH 30%。
- LT「超えとたまRUSH祭」: 時短160回+残保留4個、TOTAL継続約93%。LT中10R 910個70% / 3R 210個30%。
- 特図2残保留での大当りは「えとたまRUSH祭」へ移行するため、LT残保留当選をLT継続と誤記しない。
- LT発動時期待出玉約11,500個は「LT発動までの平均出玉+LT期待値」の払出合計。単一大当り出玉ではない。
- 通常初当り基準の総LT到達率は直接公表値未確認。70%・突破約50%・RUSH大当り時10%から独自合算しない。
- 2024-12-02の兄弟機 `Pえとたま2 神祭`（型式Pえとたま2MY、1/199.80）と分離。
- 遊タイム非搭載。
- record: `docs/lt_pachinko_db/machines/2026-03-16_p_etotama2_kamisai_etoama.md`
- evidence / retrieved 2026-09-24:
  - https://news.p-world.co.jp/articles/32497/yugitsushin — メーカー発表、型式、主要確率/RUSH/LT
  - https://news.p-world.co.jp/articles/32471/greenbelt — LT名称/約93%/期待出玉/10R比率
  - https://www.p-world.co.jp/machine/database/10404 — LT搭載、基本構造、払出
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/macy_pachi/053/kh02.php — 詳細スペック、時短、遊タイムなし
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/macy_pachi/053/kh04.php — ゲームフロー/振り分け/残保留
  - https://hisshobon.com/machineinfo/100619/ — LT発動契機/終了条件
  - https://1geki.jp/pachinko/p_etotama2_etoama/ — 導入日/型式/基本スペック
  - https://pachimaga.com/free/mach/maker-p/macy/064769.php — RUSH/LT振り分け照合
- confidence: INDUSTRY / ANALYSIS_HIGH cross-check
- conflicts: none

## Effective DB state
- machine records: **190**
- COMPLETE_CORE: **187**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026年3月境界はCLOSED。次回は **2026年4月の最初の導入日境界** を複数の新台カレンダー/業界資料で列挙し、最初の未処理候補から時系列前進する。候補をLTタグだけで確定せず、各機種を正式型式・メーカー・兄弟スペック名でも検索してLT搭載可否を個別監査する。LT非搭載ならmachine recordを作らず除外根拠のみhandoffへ残す。LT搭載ならcore spec + LT名称/経路/率/継続/出玉 + game flowを収集して登録する。通常初当り基準の総LT到達率は直接公表値がなければ経路確率から推測しない。競合値は平均せずCONFLICT。
