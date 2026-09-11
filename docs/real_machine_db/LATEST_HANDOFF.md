更新日: 2026-09-11

## 現在地点
- recordCount: **1359**
- latestRecordAdded: **ワンバーS-30 — No.1359**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-07-06_onebar-s-30.md`
- chronologicalFrontier: **2020-07-06**
- frontierLatestMachine: **ワンバーS-30 — No.1359**
- schema: **resetBehavior v0.7**
- status: **2020-07-06_GROUP_OPEN_1_OF_3_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1358「OZ-1」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- mainはNo.1358「OZ-1」まで並行更新済みで、2020-05-18群CLOSEDだったため重複せず引き継いだ。
- 2020年6月は既確認カレンダー上、本線へ追加すべき明確なパチスロ新台なし。2020-07-06群を複数系統で再監査。
- 7/6群は現時点で **ワンバーS-30 / PACHISLOT言い訳はさせないわよby壇蜜 / BLACK LAGOON4** の3機を確認。OZ-1は同一型式の段階導入なのでNo.1358へ統合済み、重複登録しない。
- 1機目 **ワンバーS-30** をNo.1359として追加。

## No.1359 — ワンバーS-30
- path: `docs/real_machine_db/machines/2020-07-06_onebar-s-30.md`
- manufacturer: **ベルコ**
- formalModel: **SワンバーS1-30**
- certificationNumber: **9S1884**
- releaseDate: **2020-07-06**
- generation/system: **6号機 / AT / 差枚数管理型疑似ボーナス / 30Φ / 周期+CZ**
- payoutRate: **97.5 / 99.0 / 100.5 / 102.0 / 103.5 / 107.0%**
- AT初当たり: **1/325.8 / 317.4 / 304.3 / 289.8 / 275.7 / 245.4**
- base: **約41.2G/50枚**
- netIncrease: **約2.9枚/G**
- AT基本: **約100枚**、Hooah!は**333枚以上・平均803枚OVER**
- 本天井: **777G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_DETECTION_GAPS**

### resetBehavior v0.7 — No.1359
- 設定変更: **天井G数RESET / 状態RESET**。
- 純電源OFF→ON: **天井G数CARRY_OVER / 状態CARRY_OVER**。
- 設定変更後・AT終了後の1周期目は**上位CZ以上濃厚**。
- 設定変更後/AT終了後の一部で**200G仮天井**を選択。
- 200G仮天井選択率（設定1→6）: **3.14 / 5.10 / 6.67 / 8.63 / 10.59 / 12.55%**。
- 朝一/引き戻し200G以内AT当選期待度（設定1→6）: **44.9 / 46.7 / 49.1 / 51.8 / 54.5 / 57.2%**。
- 1周期目CZ/AT振り分けの公開代表値もレコードへ保存。これは設定変更専用ではなくAT終了後も含む「1周期目」共通値として分離。
- 有利区間移行後に周期/天井を管理する構造は確認済み。ただし設定変更/据え置き/純電断時の**有利区間そのもの**の機種固有直接契約は固定できず `UNVERIFIED_MACHINE_SPECIFIC_CONTRACT`。
- 本機固有のガックン、有利区間ランプ、初期出目等による変更確定条件は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2020-07-06群監査
1. ワンバーS-30 — **No.1359 / 処理済み**
2. PACHISLOT言い訳はさせないわよby壇蜜 — **未処理 / No.1360候補**
3. BLACK LAGOON4 — **未処理 / No.1361候補**
- P-Summa当時記事と別導入予定一覧で3機が一致。
- BLACK LAGOON4は地域差があり、2020-07-06導入予定・東京7/20予定という資料を保持する。
- OZ-1 / SOZ1-01の7/6表記はNo.1358と同一型式の段階導入なので重複登録しない。
- 群判定: **OPEN_1_OF_3_CONFIRMED_CANDIDATES_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。
- 今回は本線No.1359を優先し、熊酒場は未処理のまま次回へ引き継ぐ。

## 次回本線の再開地点
- 最新main再同期後、**2020-07-06群の未処理2機**を続行。
- 先頭: **PACHISLOT言い訳はさせないわよby壇蜜 — No.1360候補**。
- 続いて: **BLACK LAGOON4 — No.1361候補**。
- 2機処理後、7/6群を全メーカー・別型式・地域差・段階導入まで再監査しCLOSED可否を判定する。

## GitHub保存
- No.1359追加 commit: `cce5e6ab8aaec85db0a4f319a2b356f2063de6c5`

## 主要出典 — 取得日 2026-09-11
### No.1359 ワンバーS-30
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/onebar_s-2/
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/13282/yugitsushin
- 1geki 機種概要: https://1geki.jp/slot/s_onebar30/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_onebar30/3/
- HAZUSE: https://hazuse.com/machine/pachislot/9S1884/
- パチマガスロマガ 天井: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/105/tj-2.php
- パチマガスロマガ 周期抽選: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/105/sh.php
- なな徹 200G仮天井/朝一: https://nana-press.com/kaiseki/machine/53/1401/
- P-WORLD: https://www.p-world.co.jp/machine/database/9192

### 2020-07-06群監査
- P-Summa 2020-07-06導入予定: https://psumma.jp/trend/49109/
- パチスロ立ち回り講座 新台導入予定日: https://crankyseven.com/newmachine-info.htm
