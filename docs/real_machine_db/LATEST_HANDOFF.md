更新日: 2026-09-12

## 現在地点
- recordCount: **1474**
- latestRecordAdded: **来雷エイサーEX-30 — No.1474**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_rairai-eisa-ex-30.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **来雷エイサーEX-30 — No.1474**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_CLOSED_11_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1473「パチスロ春一番」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群最後の既知候補 `来雷エイサー30` を再調査し、導入後の市場表記 `来雷エイサーEX-30` としてNo.1474へ追加。
- オーイズミ公式PVでは導入前商品名が「来雷エイサー30」、導入後のP-WORLD/HAZUSE等では「来雷エイサーEX-30」、正式型式は `SライライエイサーEX-30`、検定番号 `0S1248`。同一機の発売前/発売後表記として整理した。
- 性能コアはP-WORLD、HAZUSE、パチマガスロマガ、なな徹等を横断。設定1〜6の機械割97.4/99.2/100.4/102.5/104.8/107.6%、BIG 1/303.4〜1/255.0、REG 1/516.0〜1/339.6、合算1/191.1〜1/145.6、ベース約42.5〜44.0G/50枚、BIG最大259枚/REG最大129枚を保存。
- 純ノーマル30Φ機で天井非搭載。AT/ART/CZ・天井モード・朝一の有利区間進行は物差し上 `NOT_APPLICABLE` とし、未確認値と区別した。
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナスフラグ、告知状態、BIG回数連動の設定シーサー内部回数、本機固有ガックン、変更専用表示については、機種名・正式型式・オーイズミ・朝一・リセット・据え置き・電源OFF ON・ガックン等へ検索語を変え、解析/古いDB/回顧系まで再探索したが機種固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 導入前二次資料には、最終仕様と異なるPAYOUT 97.3〜110.0%、BB/REG/合算値が掲載されている。最終型式 `0S1248` に紐づく導入後複数資料と競合するため平均せず `CONFLICT_PRERELEASE_SECONDARY_VS_FINAL_MULTI_SOURCE` として履歴保持し、performanceCoreには導入後複数一致値を採用。
- 2022-01-24群は11候補すべて処理完了。新台カレンダー/メーカー・業界・機種DBを再監査し、翌2022-01-25の玉越PB「HYPER A-30 BLUE FALCON」は別日として分離。1/24群を `CLOSED` とした。
- 遡及resetBehavior QAは本線同日群完了を優先し、前回カーソルを維持した。

## No.1474 — 来雷エイサーEX-30
- path: `docs/real_machine_db/machines/2022-01-24_rairai-eisa-ex-30.md`
- manufacturer: **オーイズミ**
- formalModel: **SライライエイサーEX-30**
- inspectionCode: **0S1248**
- releaseDate: **2022-01-24**
- generation/system: **6号機 / ノーマル / 完全告知 / 30Φ / 技術介入**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 99.2 / 100.4 / 102.5 / 104.8 / 107.6%**
- BIG: **1/303.4 / 1/296.5 / 1/288.7 / 1/274.2 / 1/260.0 / 1/255.0**
- REG: **1/516.0 / 1/504.1 / 1/474.9 / 1/445.8 / 1/414.8 / 1/339.6**
- bonusCombined: **1/191.1 / 1/186.7 / 1/179.6 / 1/169.8 / 1/159.8 / 1/145.6**
- baseGamesPer50: **約42.5〜44.0G/50枚**
- basicPayout: **BIG最大259枚 / REG最大129枚**
- normalCeiling: **NONE**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_MEDIUM_RESET_WITH_MACHINE_SPECIFIC_POWER_CYCLE_AND_DETECTION_UNVERIFIED**

### resetBehavior v0.7 — No.1474
- **設定変更**: 天井・AT/CZモード・有利区間天井は `NOT_APPLICABLE`。成立済みボーナス/告知/設定シーサー内部回数のクリア契約は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 天井は非搭載。成立済みボーナス/告知/設定シーサー内部回数の機種固有保持契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: 天井は非搭載。成立済みボーナス/告知/設定シーサー内部回数の機種固有保持/初期化契約は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 天井機能非搭載。リセット短縮天井なし。
- **モード/状態**: AT/ART/CZ・天井モードは非該当。ボーナス成立状態の設定変更/電断差のみ未確認。
- **有利区間**: 純ノーマル機のため、朝一狙いに用いる有利区間進行/天井は `NOT_APPLICABLE_FOR_YARDSTICK`。
- **朝一恩恵/不利**: 公開された設定変更専用の主要恩恵/不利は確認できず。
- **変更判別**: 本機固有ガックン、変更専用表示/ランプ挙動は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2022-01-24群 — CLOSED
既知の独立レコード:
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
11. **来雷エイサーEX-30 — No.1474 / DONE**

## 次回本線の再開地点
- **No.1475候補「HYPER A-30 BLUE FALCON」— 2022-01-25。**
- 玉越PB、型式 `SブルーファルコンDA-30`、DAXEL製造。GOLD玉越8店舗で2022-01-25稼働開始と業界一次系記事で先行確認済み。
- 性能コアとresetBehavior v0.7を同時収集する。
- PB限定導入のため全国通常導入機と混同せず、独立レコードとして扱う。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線の2022-01-24群完了を優先し、遡及QAの新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1474追加 commit: `1d11434468a7b396596547694f565e56f6418f4e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1474 来雷エイサーEX-30
- https://www.youtube.com/watch?v=oJLcLEaufwo
- https://www.p-world.co.jp/machine/database/9524
- https://hazuse.com/machine/pachislot/0S1248/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/52/kh02.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/52/bn01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/52/kh08.php
- https://nana-press.com/kaiseki/machine/219/
- https://www.slopachi-quest.com/article/rairaieisa-ex30-settei/
- https://pachisuro100.com/reset/
- https://www.marimo0925.net/pachislot-shinkisyu-ranraneisa/

### 次回候補 No.1475 HYPER A-30 BLUE FALCON
- https://news.p-world.co.jp/articles/19129/nippon
- https://news.p-world.co.jp/articles/19171/amusement
- https://news.p-world.co.jp/articles/19158/yugitsushin
