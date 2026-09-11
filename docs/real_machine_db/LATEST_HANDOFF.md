更新日: 2026-09-12

## 現在地点
- recordCount: **1420**
- latestRecordAdded: **ノーゲーム・ノーライフ THE SLOT — No.1420**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-06-14_no-game-no-life-the-slot.md`
- chronologicalFrontier: **2021-06-14**
- frontierLatestMachine: **ノーゲーム・ノーライフ THE SLOT — No.1420**
- schema: **resetBehavior v0.7**
- status: **2021-06-14_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1419「パチスロ 百花繚乱 サムライガールズ」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 2021-06-08〜06-13境界を再監査し、次の未処理群を2021-06-14と固定。
- No.1420「ノーゲーム・ノーライフ THE SLOT」を追加。並行作業による同機種handoff更新も検出したため、重複登録せずmain上のNo.1420を正本として再照合・統合。
- 2021-06-14群を複数カレンダー・機種DB・当時解析で再監査し、独立パチスロ新台は本機1機でCLOSED。
- 2021-06-15〜07-04境界も監査し、次の明確な本線群は2021-07-05。現時点で `新ハナビ` と `パチスロ零` の2機を確認。
- 遡及QAカーソルはhandoff上アストロ球団のままだったが、main実レコードとGit履歴を確認すると `2007-05-06_astro-kyudan.md` は2026-09-12に既に `PARTIAL_RESEARCH_EXHAUSTED` まで更新済み。重複を避け、Git追加順の次レコード `2007-05_aqua-venus-30.md`（アクアビーナス30）を正式QA。

## No.1420 — ノーゲーム・ノーライフ THE SLOT
- path: `docs/real_machine_db/machines/2021-06-14_no-game-no-life-the-slot.md`
- manufacturer: **北電子**
- formalModel: **Sノーゲーム・ノーライフKG**
- certificationNumber: **1S0178**
- releaseDate: **2021-06-14**
- generation/system: **6.1号機 / AT / 擬似ボーナス・CZ・差枚数管理型AT**
- payoutRateBySetting: **97.5 / 98.7 / 101.0 / 103.1 / 106.5 / 110.1%**
- strategyGame: **1/350.1 / 296.3 / 390.1 / 271.4 / 265.3 / 243.7**
- baseGamesPer50: **約49G/50枚**
- netIncrease: **約2.5枚/G**
- normalCeiling: **通常時700Gでストラテジーゲーム / スコアジャッジ10周期（累計10000pt）でストラテジーゲーム＋十の盟約濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_INITIAL_SCORE_AND_MODE_TABLE**

### resetBehavior v0.7 — No.1420
- 設定変更: **天井・内部モード・内部状態・有利区間RESET、スコアカウンター再抽選**。
- 据え置き/純電断: **天井・スコア・内部モード・内部状態・有利区間CARRY_OVER**。
- 朝一専用固定短縮天井: **なし**。通常700G / 10周期天井を新規開始。
- 有利区間開始時の初期スコアは **5〜995ptからランダム抽選**。1周期目は初期スコア優遇により平均約**62G**、通常周期平均約**104G**。
- 有利区間開始時の公開モード比率（設定変更専用テーブルではない）: 設定1 **A58.5/B29.0/天国12.5%**、設定2 **25.5/51.0/23.5%**、設定3 **60.0/29.8/10.2%**、設定4 **24.7/49.4/25.9%**、設定5 **53.3/26.6/20.0%**、設定6 **22.4/44.3/33.3%**。
- 天国は **1周期目でストラテジーゲーム当選濃厚**。
- resetDetection: 通常時有利区間ランプ消灯型のため **朝一消灯だけでは変更判別不可**。朝一点灯なら据え置き濃厚材料。
- 本機固有ガックン条件・発生率は表記揺れ/型式/メーカー/設定変更/朝一/据え置き等で再探索後も高信頼契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-06-14群 — CLOSED
1. **ノーゲーム・ノーライフ THE SLOT — No.1420 / DONE**
- 複数カレンダー・業界/解析DBを照合し、同日の独立パチスロ追加機を確認できず群CLOSED。

## 遡及 resetBehavior QA — アクアビーナス30
- path: `docs/real_machine_db/machines/2007-05_aqua-venus-30.md`
- performance core: **既存 `COMPLETE_CORE` を維持**。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 通常時ゲーム数天井、通常モード、ART/ATストック等は持たず、朝一専用短縮天井・モード優遇・当選率優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス成立後にリプレイ確率が通常約1/7.30から約1/1.82へ上昇する仕様自体は確認済み。
- 成立済みボーナス/告知待ち/ボーナス成立後高リプレイ状態の設定変更・据え置き・純電断時の正式処理、本機固有ガックン/初期出目等は、メーカー/当時業界/当時解析/旧DB/後年資料を再探索しても直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的5号機ノーマル機の挙動から推測補完しない。既存の設定別機械割CONFLICTも維持。

## 次回本線の再開地点
- 最新main再同期後、**2021-07-05群「新ハナビ」＝No.1421候補**から継続。
- 現時点の同日キュー: **新ハナビ → パチスロ零**。
- 処理前に2021-06-15〜07-04境界、メーカー別一覧、別型式/PB、地域先行・延期/段階導入を再監査して漏れ防止する。
- 新ハナビは業界記事で2021-07-05ホール導入を確認。イチカツ本文に `2020年7月5日` とする誤記があるため、その日付は採用せず別系統で再照合して登録する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み（main実態）: `docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）→ `PARTIAL_RESEARCH_EXHAUSTED`。
- 今回処理済み: `docs/real_machine_db/machines/2007-05_aqua-venus-30.md`（アクアビーナス30）→ `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_harem-ace.md`（もえろ!ハーレムエース）**。
- 既存性能値をやり直さず、既存 `COMPLETE_CORE` 判定を不用意に崩さずreset側のみ正式再探索する。

## GitHub保存
- No.1420追加 commit: `ab5289353f8e64187e0507d058165805707b5256`
- アクアビーナス30 reset QA commit: `4f4e64605e190ae1f34a7cd5a748ef9999681593`
- `LATEST_HANDOFF.md`: 並行更新を再取得後、この更新commitでmainへ統合。

## 主要出典 — 取得日 2026-09-12
### No.1420 ノーゲーム・ノーライフ THE SLOT
- https://hazuse.com/machine/pachislot/1S0178/
- https://hazuse.com/machine/pachislot/1S0178/genre/207/
- https://1geki.jp/slot/s_nogamenolife/
- https://nana-press.com/kaiseki/machine/133/
- https://nana-press.com/kaiseki/machine/133/3925/
- https://nana-press.com/kaiseki/machine/133/3936/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/115/tj03-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/115/tj07-4.php
- https://slotjin.com/tenjoukitaichi/nogamenolife/
- https://www.slopachi-quest.com/article/no-game-no-life-tenjou/
- https://slot-seven.com/nogamenolife-tenzyou/
- https://ichikatsu.com/newslot/

### アクアビーナス30 retro QA
- https://www.p-world.co.jp/machine/database/4763
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/e.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/
- https://5goki.com/heiwa-olympia

### 群監査 / 次回境界
- https://ichikatsu.com/newslot/
- https://www.all7.jp/plans/index/2021/06
- https://news.p-world.co.jp/articles/17137/nippon
- https://news.p-world.co.jp/articles/17236/greenbelt
