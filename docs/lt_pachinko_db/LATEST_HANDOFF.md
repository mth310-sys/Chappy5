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

## Existing unresolved records retained
- `P GO!GO!郷 革命の5` — LT突入割合3%/4%資料競合。CONFLICT維持。
- `Pフィーバーうたわれるもの LT-Light ver.` — 遊タイム搭載可否のみ資料競合。CONFLICT維持。
- `P戦国乙女7 終焉の関ヶ原 99ver.` — RUSH突入約63%対約53%の同型式ページ競合。CONFLICT維持。

## 2026-03-02 boundary — CLOSED 12/12
1. eフィーバーダンベル何キロ持てる？2 — COMPLETE_CORE
2. P戦国乙女7 終焉の関ヶ原 99ver. — CONFLICT
3. P痛いのは嫌なので防御力に極振りしたいと思います。 極振り129ver — COMPLETE_CORE
4. P攻殻機動隊SAC_2045 LT99ver. — COMPLETE_CORE
5. e牙狼11～冴島大河～魔戒BURST Ver. — COMPLETE_CORE
6. P Re:ゼロから始める異世界生活 season2 249ver. — LT-NON-EQUIPPED / EXCLUDED
7. P Re:ゼロから始める異世界生活 season2 129ver. — COMPLETE_CORE
8. eワンパンマン2～正義執行 — COMPLETE_CORE
9. e 甲鉄城のカバネリ2 咲かせや燦然 — COMPLETE_CORE
10. e 魔法少女まどか☆マギカ3 時間遡行～始まりの願い～ — COMPLETE_CORE
11. PA戦国乙女7 終焉の関ヶ原 ときめき78バージョン — COMPLETE_CORE
12. eアクダマドライブ — COMPLETE_CORE

Boundary evidence:
- https://1geki.jp/newmachinecalender/202603/
- https://hazuse.com/new-machine/202603h/
- https://p-kn.com/calendar/202603/

## 2026-03-16 boundary — OPEN 4/5 processed
一撃2026年3月カレンダー（2026-09-08更新）の3/16候補を継続処理。候補ごとにLT搭載可否を個別監査する。

1. PキングモンスターRUSH 67Ver. — LT-NON-EQUIPPED / EXCLUDED
2. e 乃木坂46 Ⅱ SWEET Version — LT-NON-EQUIPPED / EXCLUDED
3. スマパチ SSSS.GRIDMAN メガSTART 159ver. — LT-NON-EQUIPPED / EXCLUDED（CS-plaza明示非搭載。P-WORLD/ちょんぼりすたのLT表記差は前handoffで監査済み）
4. P モモキュンソード 速撃99ver. — LT-NON-EQUIPPED / EXCLUDED
5. Pえとたま2 神祭 干支甘 — UNPROCESSED（一撃はLTタグあり）

### 4. P モモキュンソード 速撃99ver. — LT-NON-EQUIPPED / EXCLUDED
- メーカー: ソフィア。正式型式 `P桃剣鬼神AD`。2026-03-16導入。
- パチ＆スロ必勝本の同機種基本スペックが `ラッキートリガー 非搭載` と直接明記。LT DB対象外のためmachine recordは作成しない。
- 業界発表（遊技通信/P-WORLD、グリーンべると）もLT固有状態を示さず、一種二種混合の1回転RUSHとして説明。
- 通常約1/99.9、右打ち約1/1.36（大当り＋小当り合算、特図2）。RUSH突入約50%。時短1回継続73.5%（約74%）、時短100回ほぼ100%、両者を含むトータル継続約81%。
- 特図1: 1000個＋時短100回 約0.2% / 400個＋時短1回 約49.9% / 400個・時短なし 約49.9%。
- 特図2: 1000個＋時短100回 約30% / 400個＋時短1回 約70%。出玉は払出。
- `神・絶対無敵BONUS` は10R 1000個＋時短100回で実質次回大当り濃厚となる仕組みだが、LTではない。30%で同10Rを引き続ける限り連鎖する構造をLTと誤認しない。
- 遊タイム非搭載。
- evidence / retrieved 2026-09-24:
  - https://hisshobon.com/machineinfo/101262/ — LT非搭載を直接明記、基本スペック
  - https://news.p-world.co.jp/articles/33000/yugitsushin — フィールズ発表、型式 `P桃剣鬼神AD`、RUSH構造
  - https://news.p-world.co.jp/articles/32969/greenbelt — 業界記事、振り分け/継続率
  - https://p-kn.com/pachinko/4467/ — 型式・基本スペック照合
  - https://nana-press.com/kaiseki/machine/1119/35697/ — 基本仕様/遊タイム非搭載照合
  - https://pachimaga.com/free/mach/maker-p/sophia/064736.php — 特図1/2振り分け照合
- confidence: ANALYSIS_HIGH / INDUSTRY cross-check; LT-negative determination has explicit direct secondary statement plus consistent industry structure.

## Effective DB state
- machine records: **189**
- COMPLETE_CORE: **186**
- CONFLICT: **3**
- This relay added no machine record because 2026-03-16 candidates #1-#4 are LT-negative after individual audit.
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
Continue **2026-03-16 candidate #5 `Pえとたま2 神祭 干支甘`**. Duplicate-search first, then verify LT-equipped status using formal commercial/model name, manufacturer and sibling-spec variants. 一撃 has an LT tag, but do not register until the LT structure is independently confirmed. If LT-equipped, collect core spec + LT name/route/rate/continuation/payout + complete game flow and create one machine record. If LT-negative, create no machine record but retain exclusion evidence here. After candidate #5, re-enumerate 2026-03-16 same-day candidates and only then close the boundary / advance chronologically. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities. Any direct source disagreement remains `CONFLICT`; do not average it.
