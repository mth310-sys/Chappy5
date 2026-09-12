更新日: 2026-09-12

## 現在地点
- recordCount: **1472**
- latestRecordAdded: **ぱちスロ ギャグダー — No.1472**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_pachislot-gaguda.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **ぱちスロ ギャグダー — No.1472**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_9_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1471「ハイスクールD×D2 ハーレム王に俺はなる」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `ぱちスロ ギャグダー` をNo.1472へ追加。
- 性能コアは京楽公式、業界記事、P-WORLD、一撃、ちょんぼりすた、パチマガスロマガ等を横断。設定1/2/4/5/6の機械割97.8/98.4/101.7/106.8/110.4%、ボーナス合算1/167.4〜1/122.5、ベース約34.9〜36.2G/50枚、擬似ボーナス純増約6.0枚/G、BIG約300〜305枚・REG約100〜104枚を保存。
- 型式は検定通過資料で `SギャグラーKB`、検定番号 `1S1065` を確認。商品名「ギャグダー」と型式名「ギャグラー」が異なるため表記揺れ検索に使用した。
- 通常天井は999G、設定変更後は894Gへ105G短縮。これは複数解析資料で一致し、resetBehaviorの主要朝一恩恵として保存。
- 有利区間ランプは払出表示（WIN）右下ドット。前日点灯＋朝一消灯=設定変更濃厚、朝一点灯=据え置き濃厚、前日消灯時はランプ判別不能とする当時解析を保存。
- 据え置き時の天井/内部モードの厳密なCARRY_OVER契約、純電源OFF→ONのみの挙動、設定変更時モード振り分け、本機固有ガックン条件/発生率は、機種名・型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等へ検索語を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 基本獲得枚数は公式系のBIG約300/REG約100枚と解析の約305/104枚があるため、平均せず定義差/丸め差として双方保持。
- 遡及resetBehavior QAは本線の同日群前進を優先し、前回カーソルを維持した。

## No.1472 — ぱちスロ ギャグダー
- path: `docs/real_machine_db/machines/2022-01-24_pachislot-gaguda.md`
- manufacturer: **京楽産業.**
- formalModel: **SギャグラーKB**
- inspectionCode: **1S1065**
- releaseDate: **2022-01-24**
- generation/system: **6.2号機 / AT / 完全告知 / 擬似ボーナス**
- settings: **1 / 2 / 4 / 5 / 6**
- payoutRate: **97.8 / 98.4 / 101.7 / 106.8 / 110.4%**
- bonusCombined: **1/167.4 / 1/163.1 / 1/151.0 / 1/133.1 / 1/122.5**
- baseGamesPer50: **約34.9〜36.2G/50枚**
- netIncrease: **擬似ボーナス約6.0枚/G**
- basicPayout: **BIG約300〜305枚 / REG約100〜104枚**
- normalCeiling: **999G**
- resetCeiling: **894G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_MEDIUM_HIGH_RESET_WITH_UNVERIFIED_CARRYOVER_DETAILS**

### resetBehavior v0.7 — No.1472
- **設定変更**: 天井基準RESET。通常999G→894Gへ105G短縮。有利区間ランプは消灯。
- **据え置き**: 朝一ランプ点灯は据え置き濃厚。天井/モードの厳密な引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: 天井・モード・状態・有利区間の機種固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- **リセット恩恵**: 最大天井894G。通常より105G短縮。
- **変更判別**: 前日点灯＋朝一消灯=設定変更濃厚 / 朝一点灯=据え置き濃厚 / 前日消灯なら判別不能。
- **公開朝一数値**: 通常天井999G / リセット天井894G / 短縮105G。
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
10. **パチスロ春一番 — No.1473候補 / NEXT**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1473候補「パチスロ春一番」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- その後 `来雷エイサー30` を処理し、2022-01-24群を別型式/25φ・30φ/PB/地域先行/延期・段階導入まで再監査してCLOSED可否を判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線の2022-01-24群を優先し、遡及QAの新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1472追加 commit: `3207917d37ff42c87bd3629d828c77072a3f4eed`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1472 ぱちスロ ギャグダー
- https://www.kyoraku.co.jp/news/detail/602
- https://web-greenbelt.jp/post-54543/
- https://news.p-world.co.jp/articles/18686/yugitsushin
- https://www.p-world.co.jp/machine/database/9561
- https://1geki.jp/slot/s_gyaguda/
- https://chonborista.com/slot/kyoraku-slot/157473/
- https://slotmethod.jp/archives/13485/
- https://www.slopachi-quest.com/article/gyaguda-tenjou/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/13/kyoraku_slot_13.php
