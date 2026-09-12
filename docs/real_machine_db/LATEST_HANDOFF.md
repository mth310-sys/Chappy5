更新日: 2026-09-13

## 現在地点
- recordCount: **1514**
- latestRecordAdded: **パチスロ閃乱カグラ BURST UP — No.1514**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-08-22_senran-kagura-burst-up.md`
- chronologicalFrontier: **2022-08-22**
- frontierLatestMachine: **パチスロ閃乱カグラ BURST UP — No.1514**
- schema: **resetBehavior v0.7**
- status: **2022-08-22_GROUP_CLOSED_1_OF_1_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1513 `チバリヨ-25` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1514 `パチスロ閃乱カグラ BURST UP` を性能コア＋resetBehavior v0.7で追加。
- HAZUSE、P-WORLD/Greenbelt、遊技日本、なな徹、複数解析で、2022-08-22導入、型式 `S閃乱カグラBURSTUP／L4`、検定番号 `2S0491`、6.5号機、純増約8.1枚/G、AT初当り、出玉率、約39.9G/50枚を照合した。
- resetBehaviorは設定変更/据え置きの有利区間・天井・内部状態・モード比較表を取得。設定変更後は最大381Gへ短縮し、有利区間移行時モードはA33.2% / B45.7% / 天国19.5% / 超天国1.6%。純電源OFF→ONのみは本機固有の直接契約が確定できず `UNVERIFIED_AFTER_RESEARCH` とした。
- 2022-08-22群を再監査。Greenbelt/P-WORLD当日スケジュールのパチスロ欄は本機1機で、追加未処理機を確認できないため **CLOSED 1/1**。
- 遡及QAではhandoffカーソル `ニューハナハナ-30` がすでに2026-09-07にv0.7 QA完了済みであることをmain実レコードとGit履歴から確認し、重複処理を回避。
- 実レコード追加順で次の未完了 `パチスロあっぱれ応援団` を再QA。既存 `COMPLETE_CORE` は維持し、設定変更/据え置き/純電断時のRT状態・残G、本機固有変更判別を公式・当時業界・旧解析・古いDB・回顧資料で再探索。直接契約を固定できず `resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED` に更新した。

## No.1514 — パチスロ閃乱カグラ BURST UP
- path: `docs/real_machine_db/machines/2022-08-22_senran-kagura-burst-up.md`
- manufacturer: **オーイズミラボ**
- formalModel: **S閃乱カグラBURSTUP／L4**
- inspectionCode: **2S0491**
- releaseDate: **2022-08-22**
- generation/system: **6.5号機 / 高純増ST型AT**
- payoutRate: **設定1 97.8 / 2 98.8 / 3 100.5 / 4 103.2 / 5 105.3 / 6 107.3%**（設定2のみ98.9%掲載資料あり）
- 爆乳ハイパーバトル初当り: **1/344.6 / 1/352.4 / 1/346.1 / 1/350.1 / 1/345.7 / 1/347.8**
- AT初当り: **1/558.7 / 1/533.3 / 1/501.4 / 1/458.6 / 1/435.6 / 1/406.4**
- baseGamesPer50: **39.9G/50枚（約40G表記あり）**
- netIncrease: **約8.1枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_UNVERIFIED_POWER_CYCLE**
- confidence: **INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET / UNVERIFIED_POWER_CYCLE**

### resetBehavior v0.7 — No.1514
- **設定変更**: 有利区間・天井・内部状態・モードRESET。表示ステージは商店街。
- **据え置き**: 有利区間・天井・内部状態・モードCARRY_OVER。表示ステージは同じ商店街。
- **純電源OFF→ON**: 天井・有利区間・モード・内部状態の本機固有直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **天井**: 通常はモードA 581G / B 381G / 天国・超天国81G。設定変更・有利区間移行時は最大381Gへ短縮し、A281G / B381G / 天国・超天国81Gが目安。
- **モード**: 有利区間移行時 A33.2% / B45.7% / 天国19.5% / 超天国1.6%。天国以上21.1%。
- **状態**: 設定変更RESET、据え置きCARRY_OVER。
- **有利区間**: 設定変更RESET、据え置きCARRY_OVER。有利区間ランプによる朝一判別は不可。
- **朝一恩恵**: 最大381G短縮、約21.1%で天国以上。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 見た目判別不可。朝一381Gを超えて規定G当選しなければ据え置き濃厚材料。本機固有ガックンはNONE_CONFIRMED_AFTER_RESEARCH。
- **公開朝一数値**: 上記モード振り分け、短縮天井、設定変更時の裏モード設定別振り分けをレコードへ保存。

## 2022-08-22群 — CLOSED 1/1
1. `パチスロ閃乱カグラ BURST UP` — **No.1514 処理済み**

群監査メモ:
- Greenbelt/P-WORLD 2022-08-22新台スケジュールで当日のパチスロ欄は本機1機。
- HAZUSE、業界発表、複数解析でも導入日一致。
- PB・別型式・延期/地域先行を追加検索したが、同日追加対象は現時点で確認できずCLOSED。

## 次群 2022-09-05 — OPEN 0/6 known
Greenbelt/P-WORLD 2022-08-22時点スケジュールの掲載順:
1. `スーパーリオエース` — **No.1515候補 / 未処理**
2. `ヴィーナスゾーン` — 未処理
3. `パチスロペルソナ5` — 未処理
4. `ボンバーガール` — 未処理
5. `Sアバサー` — 未処理
6. `CREA～Newクレアの秘宝伝～` — 未処理

次回開始時に同日群のPB・派生・地域先行・延期を再監査し、漏れがなければ掲載順を仮順としてNo.1515から処理する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `ニューハナハナ-30`: handoffカーソルが古く、mainでは既に `COMPLETE_WITH_SOURCE_LIMITS`。重複処理せずスキップ。
- `パチスロあっぱれ応援団`: **再QA済み**。coreStatus `COMPLETE_CORE`維持、resetBehaviorQAを `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`（ガオガオフェスティバルS）**。

## 次回本線の再開地点
- **No.1515候補 `スーパーリオエース` — 2022-09-05**。
- 2022-09-05群は現時点6機known。次回開始時に最終漏れ監査後、性能コア＋resetBehavior v0.7を収集する。

## GitHub保存
- No.1514追加 commit: `2d324f753e61253731f45fec6cf61012ed4c09e6`
- あっぱれ応援団QA commit: `4763b85171818b5f283218ea80347c6513499bb6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1514 閃乱カグラ BURST UP
- https://hazuse.com/machine/pachislot/2S0491/
- https://news.p-world.co.jp/articles/21172/greenbelt
- https://news.p-world.co.jp/articles/21157/nippon
- https://nana-press.com/kaiseki/machine/410/11061/
- https://nana-press.com/kaiseki/machine/410/10917/
- https://nana-press.com/kaiseki/machine/410/11436/
- https://chonborista.com/slot/oizumi-slot/171487/
- https://news.p-world.co.jp/articles/21494/greenbelt

### 遡及QA — パチスロあっぱれ応援団
- https://www.konami.com/amusement/psm/archive/ps/2007/appare/
- https://web-greenbelt.jp/00004042/
- https://news.p-world.co.jp/articles/2026/greenbelt
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/02/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/02/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/02/c.php

### 次群 2022-09-05
- https://news.p-world.co.jp/articles/21494/greenbelt
