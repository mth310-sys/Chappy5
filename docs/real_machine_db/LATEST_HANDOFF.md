更新日: 2026-09-12

## 現在地点
- recordCount: **1473**
- latestRecordAdded: **パチスロ春一番 — No.1473**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_pachislot-haruichiban.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **パチスロ春一番 — No.1473**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_10_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1472「ぱちスロ ギャグダー」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `パチスロ春一番` をNo.1473へ追加。
- 性能コアは西陣/DAXEL発表を伝える当時業界記事、東京都公安委員会検定通過資料、G-net販売資料、P-WORLD、一撃、なな徹等を横断。設定1〜6の機械割97.3/99.0/100.9/103.0/105.0/106.0%、ボーナス合算1/189.0〜1/143.4、ベース約37.9G/50枚、擬似ボーナス純増約5.0枚/G、BIG約310枚/REG約105枚/極頂BONUS約2000枚を保存。
- 型式 `S春一番DE`、検定番号 `1S1181` を東京都公安委員会検定通過資料で確認。
- 通常救済は555G+αで50%ボーナス、777G+αでBIG確定。555G超以降の通常当選はBIG濃厚とする解析を保存。
- resetBehaviorの公開朝一数値として、**設定変更時の50%で初回ボーナス時に下パネル点滅**する変更示唆を一撃自社調査値から保存。非発生は据え置き確定ではない片方向示唆。
- 通常時は有利区間ランプ消灯タイプで、朝一ランプによる設定変更判別は不可。パチスロメソッドではリセット恩恵「特になし」と整理されており、固定天井短縮・専用ゾーンは確認できなかった。
- 設定変更時に天井ゲーム数が必ず0へ戻ることの直接記述、据え置き時の天井/内部状態CARRY_OVER、純電源OFF→ON単独挙動、設定変更専用モード振り分け、本機固有ガックン条件/発生率は、機種名・型式・西陣/DAXEL・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等へ検索語を変え、業界・解析・古いDB/回顧系まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 遡及resetBehavior QAは本線の同日群前進を優先し、前回カーソルを維持した。

## No.1473 — パチスロ春一番
- path: `docs/real_machine_db/machines/2022-01-24_pachislot-haruichiban.md`
- manufacturer: **西陣（販売） / DAXEL（製造）**
- formalModel: **S春一番DE**
- inspectionCode: **1S1181**
- releaseDate: **2022-01-24**
- generation/system: **6.2号機 / AT / 完全告知 / 擬似ボーナス**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.3 / 99.0 / 100.9 / 103.0 / 105.0 / 106.0%**
- bonusCombined: **1/189.0 / 1/177.9 / 1/170.7 / 1/157.0 / 1/149.4 / 1/143.4**
- baseGamesPer50: **約37.9G/50枚**
- netIncrease: **擬似ボーナス約5.0枚/G**
- basicPayout: **BIG約310枚 / REG約105枚 / 極頂BONUS約2000枚**
- normalCeiling: **555G+αで50%ボーナス / 777G+αでBIG確定**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_MEDIUM_HIGH_RESET_WITH_UNVERIFIED_POWER_CYCLE_AND_CARRYOVER_DETAILS**

### resetBehavior v0.7 — No.1473
- **設定変更**: 固定天井短縮・朝一専用ゾーンは確認できず。初回ボーナス時の下パネル点滅が設定変更の50%で発生する変更示唆あり。
- **据え置き**: 天井ゲーム数・内部状態の厳密なCARRY_OVER契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: 天井・状態・有利区間の機種固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常救済555G+α（50%でボーナス）/777G+α（BIG確定）。リセット専用短縮値は確認できず。
- **モード/状態**: 設定変更専用モード振り分け・高確スタート・専用初当たり率は公開値なし。
- **有利区間**: 通常時ランプ消灯タイプ。朝一ランプだけでは変更判別不可。
- **朝一恩恵/不利**: 固定恩恵/不利は確認できず。
- **変更判別**: 初回ボーナス時の下パネル点滅＝設定変更濃厚（設定変更時50%発生）。非発生は据え置き確定ではない。
- **公開朝一数値**: 下パネル点滅50%（設定変更時）。
- **ガックン**: `UNVERIFIED_AFTER_RESEARCH`。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **パチスロディスクアップ2 — No.1466 / DONE**
4. **聖闘士星矢 冥王復活 — No.1467 / DONE**
5. **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468 / DONE**
6. **アラジンAクラシック — No.1469 / DONE**
7. **パチスロ南国物語30 — No.1470 / DONE**
8. **ハイスクールD×D2 ハーレム王に俺はなる — No.1471 / DONE**
9. **ぱちスロ ギャグダー — No.1472 / DONE**
10. **パチスロ春一番 — No.1473 / DONE**
11. **来雷エイサー30 — No.1474候補 / NEXT**

## 次回本線の再開地点
- **No.1474候補「来雷エイサー30」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 処理後、2022-01-24群を別型式/25φ・30φ/PB/地域先行/延期・段階導入まで再監査してCLOSED可否を判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線の2022-01-24群を優先し、遡及QAの新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1473追加 commit: `2b30b17ae1e87a6b9f8fe609bb39212259b0a9db`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1473 パチスロ春一番
- https://news.p-world.co.jp/articles/18588/nippon
- https://news.p-world.co.jp/articles/18664/greenbelt
- https://news.p-world.co.jp/articles/18547/yugitsushin
- https://g-net-ps.com/info/s0005/
- https://www.p-world.co.jp/machine/database/9530
- https://1geki.jp/slot/s_haruichiban/3/
- https://1geki.jp/slot/s_haruichiban/4/
- https://slotmethod.jp/archives/14158/
- https://nana-press.com/kaiseki/machine/283/7813/
- https://pachinko-curation.com/26710/
