# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-07-07 `PA CYBORG009 RULE OF SACRIFICE LT99ver.`
- duplicate/previous-spec separation checked before record creation

## Boundary discovery
### 2025-07-07 — CLOSED 9/9
1. `e東京リベンジャーズ` — COMPLETE_CORE
2. `eフィーバー炎炎ノ消防隊2 シンラver.` — COMPLETE_CORE
3. `eフィーバー炎炎ノ消防隊2 紅丸ver.` — COMPLETE_CORE
4. `e犬夜叉3.0` — COMPLETE_CORE
5. `e一方通行 とある魔術の禁書目録` — COMPLETE_CORE
6. `e冒険島` — COMPLETE_CORE
7. `Pドラムだ!金ドン 花火外伝99ver.` — COMPLETE_CORE
8. `Pフィーバー機動戦士ガンダムユニコーン再来 99ver.` — COMPLETE_CORE
9. `PA CYBORG009 RULE OF SACRIFICE LT99ver.` — COMPLETE_CORE

Boundary sources rechecked:
- https://p-johojima.jp/machine_spec/post-2074/
- https://p-kn.com/calendar/202507/
- https://1geki.jp/newmachinecalender/202507/
- https://www.all7.jp/plans/index/2025/07

### 2025-07-22 — OPEN
Independent calendar discovery gives three same-day pachinko introductions. LT eligibility precheck:
1. `e マギアレコード 魔法少女まどか☆マギカ外伝` — LT搭載確認済み — NEXT
2. `デカスタe花の慶次～傾奇一転` — LT搭載確認済み
3. `PAコマコマ倶楽部with坂本冬美 89STver.` — manufacturer official spec shows ST100% / ST+時短約61% and no LT structure; exclude unless contrary LT evidence appears in machine-level audit

Discovery evidence:
- https://p-johojima.jp/machine_spec/post-2074/ — 2025-07-22 three-machine calendar
- https://www.kyoraku.co.jp/news/detail/831 — eマギレコ official, 7/22 and LT3.0 PLUS / コネクトRUSH
- https://yugi-nippon.com/pachinko-new-machine/post-71975/ — デカスタ慶次, 型式/約52.1%/LT傾奇BURST約84%
- https://www.toyomaru.jp/machine/2025y/komakom89_sf.html — PAコマコマ公式スペック

## This relay
### PA CYBORG009 RULE OF SACRIFICE LT99ver. — COMPLETE_CORE
- ニューギン / 型式 `PACYBORG009N2-K` / canonical 2025-07-07。
- 通常・時短中1/99.9、加速RUSH/超加速RUSH中1/51.16。
- 初当り3R 270個後は時短50回へ100%。時短突破期待度約40%。
- 下位 `加速RUSH` はST70回、継続約75%。
- 時短中および加速RUSH中大当りの9.5%（10R 900個）でLT `超加速RUSH`。加速RUSH中10R比率19%のうちDEAD HEAT BATTLE勝利50%=全大当り基準9.5%。
- LTはST147回、継続約95%。LT中は10R 19% / 9R 1% / 8R 1.5% / 7R 2% / 6R 2% / 5R 4.5% / 4R 20% / 3R 50%、全てLT継続。払い出し270〜900個。
- P-WORLDが通常遊技全体基準LT突入率約1/857を直接掲載。独自合算ではなく直接値として保存。
- P-WORLD台紹介本文の初回「100回時短」は、機種固有詳細スペック・業界資料・一撃等の50回と不整合。複数の99ver.固有資料が50回で一致するため50回を採用し、当該本文値は採用しない。
- 遊タイム非搭載 / コンプリート機能搭載。
- record: `docs/lt_pachinko_db/machines/2025-07-07_pa_cyborg009_rule_of_sacrifice_lt99ver.md`
- commit: `2b5b40ace612beb7fb266bb3f27c8d9157b5b75c`

Sources:
- https://p-johojima.jp/new_machine/post-9306/
- https://news.p-world.co.jp/articles/31173/greenbelt
- https://www.goraku-sangyo.com/ニューギン　パチンコ新機種「pa-cyborg009-rule-of-sacrifice-lt99ver-」を直/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/502/kh02.php
- https://1geki.jp/pachinko/pa_cyborg009_ros99lt/51/
- https://1geki.jp/pachinko/pa_cyborg009_ros99lt/53/
- https://www.p-world.co.jp/machine/database/10303

## Pre-verified next queue evidence
Do not skip machine-level research:
- `e マギアレコード 魔法少女まどか☆マギカ外伝` — 京楽公式: 2025-07-22, LT3.0 PLUS, LT `コネクトRUSH`, ST140回, 1G連込み約83%, RUSH突入時1G連保証. https://www.kyoraku.co.jp/news/detail/831
- `デカスタe花の慶次～傾奇一転` — LT `傾奇BURST`, RUSH突入約52.1%, LT約84%. https://yugi-nippon.com/pachinko-new-machine/post-71975/

## Effective DB state
Previous effective state: 111 records / 110 COMPLETE_CORE / 1 CONFLICT.
This relay added one COMPLETE_CORE record.
- machine records: **112**
- COMPLETE_CORE: **111**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-07-07 boundary is CLOSED 9/9. Continue chronologically with 2025-07-22 OPEN boundary, starting `e マギアレコード 魔法少女まどか☆マギカ外伝`, then `デカスタe花の慶次～傾奇一転`. Audit `PAコマコマ倶楽部with坂本冬美 89STver.` for LT eligibility but do not register it unless LT evidence is found. After all 7/22 candidates are resolved, close that boundary and advance to the next introduction date.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.
