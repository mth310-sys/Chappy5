更新日: 2026-09-14

## 現在地点
- recordCount: **1696**
- latestRecordAdded: **Lスーパービンゴネオ — No.1696**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-16_super-bingo-neo.md`
- chronologicalFrontier: **2024-12-16**
- schema: **resetBehavior v0.7**
- status: **2024-12-16_BOUNDARY_CLOSED_3_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1695を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1696 `Lスーパービンゴネオ` を追加し、性能コア + resetBehavior v0.7を収録。
- 2024-12-16群の既知canonical 3機を完了し、PB・地域先行・別型式・延期/段階導入を再監査。主要導入一覧でパチスロ3機（ダンベル / 一方通行 / スーパービンゴネオ）を再照合したため、同日境界をCLOSEDとした。

## No.1696 — Lスーパービンゴネオ
- path: `docs/real_machine_db/machines/2024-12-16_super-bingo-neo.md`
- manufacturer: **ベルコ**
- formalModel: **LスーパービンゴネオSB5**
- inspectionCode: **4S0685**（PiDEA中古保証書停止記事は `4S068500` 表記。制度/桁差の可能性があるため注記保持）
- releaseDate: **2024-12-16**
- settings: **1 / 2 / 4 / 5 / 6 / L**
- payoutRate: **97.3 / 98.5 / 104.3 / 108.3 / 114.9%**（設定L公開値未固定）
- AT: **1/449.2 / 1/440.4 / CONFLICT 1/404.5 vs 1/405.5 / 1/387.2 / 1/365.3**
- base: **約31.4G/50枚**
- netIncrease: **BC約2.8枚/G / HBC約5.0枚/G**
- normalAT: **BC 1セット33G+α / 継続率約50・67・75・80・90%**
- upperAT: **HBC 初回2500枚、2セット目以降333枚以上+α / 継続率約80%以上**
- reset: **有利区間・天井・内部状態・内部モード・ループポイント・ビンゴポイントRESET/再抽選**
- resetCeiling: **999G+α → 777G+α**
- resetBenefit: **天井到達時Hooah!約1/5（通常7揃い時約1/25） / 設定変更後初当りのHBC昇格規定BC回数 最大15セット（通常最大30）**
- carryOver: **天井・状態・モード・ループポイント・ビンゴポイント・有利区間CARRY_OVER**
- powerCycle: **天井・状態・モード・ビンゴポイント・有利区間CARRY_OVER。ループポイントは純電断を独立条件で明記する高信頼資料を固定できずUNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH。**
- resetDetection: **設定変更/純電断とも「？？」「天空ステージ」「液晶3・7・F」開始で外見共通。ビンゴポイントは平均約50Gで表示開始。有利区間ランプ判別不可。朝一777G+α超過は据え置きの強い材料。本機固有ガックンは十分な再探索後も未固定。**
- missing: **設定LのAT/出玉率、設定変更時のモード具体的振り分け、純電断時ループポイント直接記述、本機固有ガックン。**
- conflict: **設定4 AT初当り 1/404.5 vs 1/405.5。平均化せず保持。型式番号4S0685 vs 4S068500は別制度/表記差注記。**

## 2024-12-16境界 — CLOSED 3/3 canonical
1. Lパチスロ ダンベル何キロ持てる？ — No.1694 DONE
2. スマスロ 一方通行 とある魔術の禁書目録 — No.1695 DONE
3. Lスーパービンゴネオ — No.1696 DONE
- 12月16日導入一覧を再監査し、パチスロ側は上記3機を確認。PB・地域先行・別型式・延期/段階導入で本線に追加すべき別canonicalは今回確認できずCLOSED。

## 次回再開地点
- 最新mainを再同期しNo.1696と本handoffを確認。
- **2025-01-06群へ進む。known canonical候補は `Lサラリーマン金太郎` / `チバリヨ2プラス` / `スターハナハナ-30` の3機。**
- **No.1697候補 `Lサラリーマン金太郎`** から再開し、同日3機を順次処理する。
- 3機処理後、PB・地域先行・別型式・延期/段階導入を再監査して2025-01-06境界をCLOSED判定する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### Lスーパービンゴネオ
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10004552/
- ゼンリン: https://zenrin-net.co.jp/10567/
- PiDEA（型式番号表記注記）: https://www.pidea.jp/articles/1739415141
- HAZUSE: https://hazuse.com/machine/pachislot/4S0685/
- 1geki: https://1geki.jp/slot/l_superbingo_neo/
- 1geki 朝一/設定変更: https://1geki.jp/slot/l_superbingo_neo/3/
- 必勝本 設定変更: https://hisshobon.com/machineinfo/85181/
- 必勝本 Hooah!: https://hisshobon.com/machineinfo/85199/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/845/25961/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/845/25962/
- スロパチクエスト: https://www.slopachi-quest.com/article/superbingoneo-tenjou/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/223041/
- アタリ7: https://www.atari7.com/slot/l-superbingoneo.php

### 境界監査
- 2024-12-16導入開始予定機種: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/12%E6%9C%8816
- 2025-01導入予定一覧（次回群候補）: https://passlotime.com/2025/01/06/post-39528/
