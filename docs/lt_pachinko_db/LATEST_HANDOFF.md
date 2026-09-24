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

## 2026-04-06 boundary — OPEN 3/7
Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-06 パチンコ7機種。retrieved 2026-09-24

Queue:
1. e転生したらスライムだった件2 — COMPLETE_CORE
2. eリコリス・リコイル — COMPLETE_CORE
3. eラグナドール 妖しき皇帝と終焉の夜叉姫 — COMPLETE_CORE
4. e 終末のワルキューレ — NEXT
5. PAコマコマ倶楽部with坂本冬美89確変ループ10ラウンド極 — pending (calendar LT tagなし。個別監査してから除外)
6. P にゃんこ大戦争 多様性のネコ 神さまにおまかせ88ver. — pending (calendar LT tagなし。個別監査してから除外)
7. P ウルトラマンメビウス デカヘソ319 — pending

### 1. e転生したらスライムだった件2 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_tensura2.md`
- 通常図柄揃い約1/399.9、LT「開国祭」実質突入約61.3%、開国祭約75%、上位LT「超開国祭」約80%。詳細はrecord参照。

### 2. eリコリス・リコイル — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_lycoris_recoil.md`
- 通常約1/259.7。下位RUSHなしでRUSH自体がLT `SPECIAL LycoReco RUSH HYPER DELUXE`。初当りTOTAL 50%、132回、継続約75%。LT内モードA/BとULTIMATE DRIVEを分離。詳細はrecord参照。

### 3. eラグナドール 妖しき皇帝と終焉の夜叉姫 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_ragnador.md`
- メーカー: メーシー（ユニバーサルエンターテインメント）。型式 `eラグナドールCMB`、検定番号 `510956`、2026-04-06導入。
- 一種二種混合 / c時短搭載 / ダブルLT。通常図柄揃い約1/349.9、裏CHALLENGE約1/758.9、合算約1/239.5。RUSH中ラグナドATTACK(GOLD)発生約1/79.2。
- 表LT `ラグナドRUSH`、裏LT `ラグナドRUSH GOLD`。通常時合算からLT到達の直接解析値約1/620.1（大当り経由34.9% + 裏CHALLENGE経由成功率12%の定義）。図柄揃い時LT突入率51%とは分母が異なる。
- 通常時(c時短含む合算)振り分け: 3000個+GOLD 0.7% / 900個+RUSH 34.2% / 900個+通常33.5% / 出玉なし裏CHALLENGE50回31.6%。
- 裏CHALLENGE成功率12%。成功後の裏CHAIN CHANCEから表LT/裏LTへ。
- 表LTは125回、継続約80%。ATTACK成功時 3000個+GOLD 0.9% / 1500個+CHAIN CHANCE 49.8% / 1500個+RUSH 49.3%。ATTACK失敗時はST回数リセット。
- 裏LTも125回、継続約80%。ATTACK GOLD成功時は3000個100%、内7.9%でCHAIN CHANCE GOLD。3000個は1500個×2回の合計表現。
- CHAIN CHANCE系成功期待度約75%で1G連。表LT→裏CHAIN CHANCE成功等から裏LTへ昇格する経路あり。
- RUSH継続約80%は125回でATTACKが発生する率であり、ATTACK成功率約75%（出玉獲得）とは定義を分離。
- evidence / retrieved 2026-09-24:
  - https://news.p-world.co.jp/articles/32765/yugitsushin
  - https://news.p-world.co.jp/articles/32806/greenbelt
  - https://hazuse.com/hd/510956h/
  - https://hazuse.com/machine/pachinko/PX0348/
  - https://1geki.jp/pachinko/e_ragnador/
  - https://chonborista.com/pachinko/universal/253799/
  - https://pachimaga.com/free/mach/maker-p/macy/064768.php
- confidence: INDUSTRY / ANALYSIS_HIGH cross-check
- conflicts: none

## Effective DB state
- machine records: **193**
- COMPLETE_CORE: **190**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026-04-06 boundary candidate #4 **`e 終末のワルキューレ`**. Before positive write, duplicate-search machine records. Verify formal model name/manufacturer and LT-equipped status across official/industry/analysis sources, then collect core spec + LT formal name/routes/rate/continuation/payout/time-shortening/c-time + game flow. Do not infer an overall LT rate if no direct published value exists. If LT-negative, do not create a machine record; retain exclusion evidence here and advance to candidate #5.
