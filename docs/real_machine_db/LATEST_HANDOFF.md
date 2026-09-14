更新日: 2026-09-14

## 現在地点
- recordCount: **1694**
- latestRecordAdded: **Lパチスロ ダンベル何キロ持てる？ — No.1694**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-16_dumbbell-nankilo-moteru.md`
- chronologicalFrontier: **2024-12-16**
- schema: **resetBehavior v0.7**
- status: **2024-12-16_BOUNDARY_OPEN_1_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1693を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1694 `Lパチスロ ダンベル何キロ持てる？` を追加し、性能コア + resetBehavior v0.7を収録。
- 2024-12-16群は当時新台カレンダー/新台分析で `Lパチスロ ダンベル何キロ持てる？` / `Lとある科学の一方通行` / `Lスーパービンゴネオ` の3機をknown canonicalとして再確認。現時点1/3処理済み。

## No.1694 — Lパチスロ ダンベル何キロ持てる？
- path: `docs/real_machine_db/machines/2024-12-16_dumbbell-nankilo-moteru.md`
- manufacturer: **SANKYO**
- formalModel: **Lダンベル何キロ持てる？X**
- inspectionCode: **4S0474**
- releaseDate: **2024-12-16**
- payoutRate: **97.7 / 98.7 / 101.3 / 105.8 / 108.5 / 114.9%**
- CZ: **1/247 → 1/239**
- AT: **1/591 → 1/504**
- base: **約32.5G/50枚**
- netIncrease: **約8.5枚/G**
- normalAT: **30G+α / 平均約75G / 平均約640枚**
- upperAT: **平均約1070枚 / 純増約8.5枚/G**
- reset: **天井・内部状態・有利区間RESET / 液晶G・摂取カロリー0表示 / 内部Gランダム加算**
- resetCeiling: **AT間1500G+α → 1000G+α**
- carryOver: **天井・内部状態・有利区間・内部G・摂取カロリーCARRY_OVER**
- powerCycle: **AT間天井・内部G・有利区間・摂取カロリーCARRY_OVER、表示は0**
- resetBenefit: **設定変更後1回目の終了画面で紫枠出現率約6～10倍**
- resetDetection: **朝一1000G消化でAT間天井非発動なら据え置き濃厚。表示単独判別不可。**
- missing: **内部Gランダム加算の具体的範囲/振り分け、本機固有ガックン、独立朝一モード振り分けは再探索後も未固定**
- conflict: **AT初当り設定5は主要複数資料1/512、一撃設定判別ページ1/514。canonical=1/512、CONFLICT保持。**

## 2024-12-16境界 — OPEN 1/3 known canonical
1. Lパチスロ ダンベル何キロ持てる？ — No.1694 DONE
2. Lとある科学の一方通行 — NEXT
3. Lスーパービンゴネオ — QUEUED
- 2024-12-16導入開始予定カレンダーおよびパチマガスロマガFREEの新台分析で上記3機を同日導入群として照合。
- 3機処理後、PB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1694と本handoffを確認。
- **No.1695候補 `Lとある科学の一方通行`（スマスロ 一方通行 とある魔術の禁書目録 / 2024-12-16）** から再開。
- 続いて `Lスーパービンゴネオ` を処理する。
- その後2024-12-16境界を再監査し、漏れがなければCLOSED判定して次の日付群へ進む。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### Lパチスロ ダンベル何キロ持てる？
- SANKYO公式: https://www.sankyo-fever.jp/collection/971/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-67208/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/29840/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/4S0474/
- P-WORLD: https://www.p-world.co.jp/machine/database/10141
- 一撃 機種TOP: https://1geki.jp/slot/l_dumbbell/
- 一撃 天井/朝一: https://1geki.jp/slot/l_dumbbell/3/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/855/25386/
- なな徹 天井: https://nana-press.com/kaiseki/machine/855/25383/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/222563/

### 境界監査
- 12月16日導入開始予定機種: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/12%E6%9C%8816
- パチマガスロマガFREE 2024-12-20新台分析: https://pachimaga.com/free/article/20241220/056282.php
