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

## 2026-04-06 boundary — OPEN 2/7
Boundary evidence:
- https://1geki.jp/newmachinecalender/202604/ — 2026-04-06 パチンコ7機種。retrieved 2026-09-24

Queue:
1. e転生したらスライムだった件2 — COMPLETE_CORE
2. eリコリス・リコイル — COMPLETE_CORE
3. eラグナドール 妖しき皇帝と終焉の夜叉姫 — NEXT
4. e 終末のワルキューレ — pending
5. PAコマコマ倶楽部with坂本冬美89確変ループ10ラウンド極 — pending (calendar LT tagなし。個別監査してから除外)
6. P にゃんこ大戦争 多様性のネコ 神さまにおまかせ88ver. — pending (calendar LT tagなし。個別監査してから除外)
7. P ウルトラマンメビウス デカヘソ319 — pending

### 1. e転生したらスライムだった件2 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_tensura2.md`
- 通常図柄揃い約1/399.9、LT「開国祭」実質突入約61.3%、開国祭約75%、上位LT「超開国祭」約80%。詳細はrecord参照。

### 2. eリコリス・リコイル — COMPLETE_CORE
- メーカー: ニューギン。型式 `eリコリス・リコイルM3`、検定番号 `510852`、2026-04-06導入。
- 通常約1/259.7、右約1/97.1（電チューロング開放確率）。一種二種混合 / 普電ST。
- RUSH自体がLT。LT正式名称 `SPECIAL LycoReco RUSH HYPER DELUXE`。初当りTOTAL 50%で直行、132回、継続約75%。図柄揃い時約60%、チンアナゴBONUS時20%という入口別割合とTOTAL 50%を分離。
- 普電STのため132回スルー後の残保留抽選なし。遊タイム非搭載。
- LT内部モードA/B。突入時約30%でBスタート、A大当り時50%でBへ。A大当りは750個。
- B大当りは3000個50% / 6000個+ULTIMATE DRIVE 50%。ULTIMATE DRIVEは3000個上乗せ50%ループ、終了後LTへ復帰。
- 3000個=750個×4、6000個=750個×8の複数大当り合計表現。UDは別LTではなくLT内出玉トリガー。
- 通常時払出は310/600/1500個。
- record: `docs/lt_pachinko_db/machines/2026-04-06_e_lycoris_recoil.md`
- evidence / retrieved 2026-09-24:
  - https://news.p-world.co.jp/articles/33154/yugitsushin
  - https://news.p-world.co.jp/articles/33112/greenbelt
  - https://www.pachibee.jp/machines/index/126030001
  - https://hisshobon.com/machineinfo/101628/
  - https://hazuse.com/machine/pachinko/PX0349/
  - https://yugi-nippon.com/pachinko-new-machine/post-74436/
- confidence: INDUSTRY / ANALYSIS_HIGH cross-check
- conflicts: none

## Effective DB state
- machine records: **192**
- COMPLETE_CORE: **189**
- CONFLICT: **3**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
2026-04-06 boundary candidate #3 **`eラグナドール 妖しき皇帝と終焉の夜叉姫`**. Before positive write, duplicate-search machine records. Verify formal model name/manufacturer and LT-equipped status across official/industry/analysis sources, then collect core spec + LT formal name/routes/rate/continuation/payout/time-shortening/c-time + game flow. Do not infer an overall LT rate if no direct published value exists. If LT-negative, do not create a machine record; retain exclusion evidence here and advance to candidate #4.
