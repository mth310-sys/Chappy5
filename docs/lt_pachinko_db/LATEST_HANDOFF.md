# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-02-03 `e閃乱カグラ`
- duplicate check performed before write

## This relay
### Added: e閃乱カグラ
- path: `docs/lt_pachinko_db/machines/2025-02-03_e_senran_kagura.md`
- manufacturer: D-light（ディ・ライト / 大一商会グループ）
- formalModel: e閃乱カグラLTM-JF
- release: 2025-02-03
- type: スマパチ / 一種二種混合 / 普図ST / RUSH=LT直行型
- 図柄揃い: 約1/399（詳細1/399.2）
- 抜刀モード（チャージ）: 約1/368.5
- LT: `絶・秘伝RUSH`
- LT route: 図柄揃い51%直行 / 非突入49%後の秘伝チャンス時短50回で引き戻し
- LT total entry: 約57%（時短引き戻し込み）、解析資料のLT突入確率約1/702
- LT: ST100回、約80%継続、普電タイプのため残保留抽選なし
- LT payout: ALL約2400個（約1200個×2、払出）
- status: COMPLETE_CORE
- conflicts: none

Cross-check: 大一販売プレスリリース転載、遊技通信、必勝本、一撃、なな徹を横断。51%直行と時短引き戻し込み約57%を分離。後発 `P閃乱カグラ 189大入りver.` は別スペックとして除外。

## 2025-02-03 same-date discovery / boundary remains OPEN
同日導入機を複数カレンダーで再列挙したところ、前回handoffで列挙されていなかったLT-positive候補が複数存在することを確認。漏れ防止のため2025-02-03境界を閉じない。

Confirmed / high-priority LT candidates still requiring machine-record collection:
- `Pとある魔術の禁書目録2 Light PREMIUM 2000 ver.` — 一撃2025-02カレンダーがLT搭載を明記。次回最優先でフル収集。
- `Pフィーバー戦姫絶唱シンフォギア4 199 ver.` — 2/3導入。LT搭載有無と当該スペックを正式資料で確認してから登録判断。
- `eルパン三世 ONE COLLECTION 超ブチヌキLTver.` — 2/3導入。名称上LT候補だが正式スペックを横断確認してから登録。
- `ぱちんこ シン・エヴァンゲリオン 129 LT ver.` — 2/3導入。LT候補として正式スペックを横断確認してから登録。

Excluded / hold:
- `P愛の不時着`: LT非搭載確認済み、対象外。
- `P冬のソナタ My Memory`: 現時点でLT-positive根拠なし。先行登録しない。

## Effective DB state
Previous handoff:
- machine records: 60
- COMPLETE_CORE: 59
- CONFLICT: 1

After this relay:
- machine records: **61**
- COMPLETE_CORE: **60**
- CONFLICT: **1**
- 2025-02-03 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Continue **2025-02-03** with **`Pとある魔術の禁書目録2 Light PREMIUM 2000 ver.`** as the next confirmed LT-positive machine. Collect full core/LT structure and cross-check before write. Then process the remaining same-date LT candidates above and independently re-enumerate 2025-02-03 introductions before closing the date boundary.

## Sources used this relay
- https://www.oricon.co.jp/pressrelease/2178458/ — 大一販売プレスリリース転載、e閃乱カグラ
- https://news.p-world.co.jp/articles/29850/yugitsushin — 遊技通信、e閃乱カグラ
- https://hisshobon.com/machineinfo/95660/ — e閃乱カグラ 基本スペック
- https://hisshobon.com/machineinfo/95662/ — e閃乱カグラ LT経路/終了条件
- https://1geki.jp/pachinko/e_senrankagura/ — e閃乱カグラ 型式/主要数値
- https://nana-press.com/kaiseki/machine/878/26518/ — e閃乱カグラ 振り分け
- https://1geki.jp/newmachinecalender/202502/ — 2025-02-03導入再列挙、PとあるLT-positive確認
- https://pachinkopachisro.com/archives/58760696.html — 2025-02-03導入再列挙
- https://marutto-w.com/industry_news/20250203-4 — 2025-02-03導入再列挙
