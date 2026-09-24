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
1. PキングモンスターRUSH 67Ver. — LT-NON-EQUIPPED / EXCLUDED
2. e 乃木坂46 Ⅱ SWEET Version — LT-NON-EQUIPPED / EXCLUDED
3. スマパチ SSSS.GRIDMAN メガSTART 159ver. — LT-NON-EQUIPPED / EXCLUDED
4. P モモキュンソード 速撃99ver. — LT-NON-EQUIPPED / EXCLUDED
5. Pえとたま2 神祭 干支甘 — COMPLETE_CORE

## 2026-04-06 boundary — OPEN 1/7
一撃2026年4月カレンダー（最終更新2026-09-06）を確認。4/6のパチンコ候補は7機種。LTタグだけで除外せず全候補を順番に個別監査する。

Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-06 パチンコ7機種。retrieved 2026-09-24

Queue:
1. e転生したらスライムだった件2 — COMPLETE_CORE
2. eリコリス・リコイル — NEXT
3. eラグナドール 妖しき皇帝と終焉の夜叉姫 — pending
4. e 終末のワルキューレ — pending
5. PAコマコマ倶楽部with坂本冬美89確変ループ10ラウンド極 — pending (calendar LT tagなし。個別監査してから除外)
6. P にゃんこ大戦争 多様性のネコ 神さまにおまかせ88ver. — pending (calendar LT tagなし。個別監査してから除外)
7. P ウルトラマンメビウス デカヘソ319 — pending

### 1. e転生したらスライムだった件2 — COMPLETE_CORE
- メーカー: サンセイアールアンドディ。型式 `e転生したらスライムだった件2MF`、検定番号 `5P1693`、2026-04-06導入。
- LT搭載は遊技通信のメーカー発表記事、グリーンべると、パチビー、HAZUSE、一撃、必勝本等で独立確認。
- 通常図柄揃い約1/399.9（転スラチャージ2R除外）、LT中約1/99.1、時短中約1/399。図柄揃いはALL10R 1500個。
- 図柄揃い50%でLT「開国祭」へ直行。残り50%は時短100回。時短引き戻し約22%込みの実質LT突入率はメーカー発表値約61.3%。
- 開国祭: ST135回、継続約75%、図柄揃いALL3000個（10R×2）。約1/198で上位LT「超開国祭」へ移行。
- 超開国祭: ST160回、継続約80%、図柄揃いALL3000個（10R×2）。約1/793で開国祭へ降格。
- 時短中は図柄揃いで開国祭、約1/794の状態移行で超開国祭への直通もある。
- 普図抽選STのためSTスルー後残保留なし。遊タイム非搭載。
- 3000個は単一大当りではなく10R×2の合計表現。
- 遊技日本のみ超開国祭→開国祭を約1/798とする表記があるが、CS-plaza/必勝本等の約1/793が一致するためcanonical約1/793。主要仕様CONFLICTにはしない。
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_tensura2.md`
- evidence / retrieved 2026-09-24:
  - https://news.p-world.co.jp/articles/33040/yugitsushin
  - https://news.p-world.co.jp/articles/33023/greenbelt
  - https://yugi-nippon.com/pachinko-new-machine/post-75802/
  - https://www.pachibee.jp/machines/index/126030003
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sansei_pachi/320/kh01.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sansei_pachi/320/kh02.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sansei_pachi/320/kh03.php
  - https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sansei_pachi/320/kh04.php
  - https://hisshobon.com/machineinfo/101561/
  - https://hisshobon.com/machineinfo/101563/
  - https://1geki.jp/pachinko/e_tensura2/
  - https://hazuse.com/hd/5p1693/
- confidence: INDUSTRY / ANALYSIS_HIGH cross-check
- conflicts: none

## Effective DB state
- machine records: **191**
- COMPLETE_CORE: **188**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026-04-06 boundary candidate #2 **`eリコリス・リコイル`**. Before positive write, duplicate-search machine records. Verify formal model name/manufacturer and LT-equipped status across official/industry/analysis sources, then collect core spec + LT formal name/routes/rate/continuation/payout/time-shortening/c-time + game flow. Do not infer an overall LT rate if no direct published value exists. If LT-negative, do not create a machine record; retain exclusion evidence here and advance to candidate #3.
