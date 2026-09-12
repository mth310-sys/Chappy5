更新日: 2026-09-12

## 現在地点
- recordCount: **1463**
- latestRecordAdded: **沖ワニマル-30 — No.1463**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-17_okiwanimaru-30.md`
- chronologicalFrontier: **2022-01-17**
- frontierLatestMachine: **沖ワニマル-30 — No.1463**
- schema: **resetBehavior v0.7**
- status: **2022-01-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1462「沖ワニマル-25」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点は recordCount 1462 / 2022-01-17群OPEN 1/2。25φをやり直さず、未処理30φのみ調査・登録。
- 2022-01-17群は新台カレンダー、25φ/30φ別型式、P-WORLD、HAZUSE等を再監査し、独立レコードは沖ワニマル-25/30の2機でCLOSED。

## No.1463 — 沖ワニマル-30
- path: `docs/real_machine_db/machines/2022-01-17_okiwanimaru-30.md`
- manufacturer: **バルテック**
- formalModel: **SオキワニマルAA-30**
- certificationNumber: **1S0361**
- releaseDate: **2022-01-17**
- generation/system: **6.1号機 / AT / 完全告知 / 擬似ボーナス / 30φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 99.1 / 100.8 / 102.6 / 104.6 / 107.0%**
- bonusInitialHit: **1G連除外合算 1/182 → 1/136**
- baseGamesPer50: **36.7 / 36.8 / 36.9 / 37.1 / 37.4 / 38.0G**
- netIncrease: **約7.0枚/G**
- basicPayout: **BIG約301枚 / REG約106枚**
- normalCeiling: **有利区間移行後 約999G → BIG。30φは天井到達時に裏モード移行確定。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_MEDIUM_RESET**

### resetBehavior v0.7 — No.1463
- **設定変更 / 据え置き / 純電源OFF→ON**: 朝一解析欄に天井・有利区間ランプ・リセット恩恵・判別が「調査中」と残る。表記揺れ、型式名、メーカー名、朝一/リセット/据え置き/電源OFF ON/ガックン/有利区間で再探索したが、999G天井G・通常/裏モード・内部状態・有利区間の3者別契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **天井**: 通常時約999GでBIG。30φのみ天井到達で裏モード移行確定。これは通常天井恩恵であり設定変更専用恩恵ではない。
- **朝一公開数値**: 設定変更後1回目BIG終了時は**上パネル色変化/設定示唆が50%**。設定別の青/黄/緑/赤/虹振り分けもレコードへ保存。
- **変更判別**: 本機固有ガックン、朝一有利区間ランプ、初期画面による直接判別は再探索後も未固定。ボーナス後消灯の試打観察は朝一判別契約へ流用しない。
- **25φ/30φ差**: 30φ初当り・機械割はP-WORLD / なな徹 / HAZUSE / K-Naviで一致。25φとは別性能・別型式として独立保持。

## 2022-01-17群 — CLOSED
1. **沖ワニマル-25 — No.1462 / DONE**
2. **沖ワニマル-30 — No.1463 / DONE**

## 次回本線の再開地点
- **2022-01-18〜01-23境界を最終監査後、2022-01-24群へ進む。**
- 現時点の1/24既知候補: **ハナハナホウオウ～天翔～ / ディスクアップ2 / 聖闘士星矢 冥王復活 / 新世紀エヴァンゲリオン～魂の共鳴～ / アラジンAクラシック / 南国物語30 / ハイスクールD×D2 ハーレム王に俺はなる / ぱちスロ ギャグダー / パチスロ春一番 / 来雷エイサー30**。
- 1/24群の前後には **2022-01-25 ブルーファルコン（玉越PB）** があるため、1/24群処理後の境界監査で日付を混同しない。
- 次の先頭候補は **2022-01-24「ハナハナホウオウ～天翔～」No.1464候補**。同日群は別型式/30φ/PB/地域先行/延期も再監査してからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-01_aa-warera-nihonmatsu-judobu.md`（嗚呼!我ら日本松柔道部）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）**。
- 今回は本線の30φ独立レコードと1/17群CLOSED監査を優先し、遡及QAカーソルは動かしていない。

## GitHub保存
- No.1463追加 commit: `a71c4feb853de0b013e9473ab797b3844feffba2`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1463 沖ワニマル-30
- https://www.p-world.co.jp/machine/database/9486
- https://nana-press.com/kaiseki/machine/282/
- https://nana-press.com/kaiseki/machine/282/7825/
- https://nana-press.com/kaiseki/machine/282/7830/
- https://nana-press.com/kaiseki/machine/282/7827/
- https://nana-press.com/kaiseki/machine/282/7837/
- https://www.slopachi-quest.com/article/okiwanimaru30-settei/
- https://www.slopachi-quest.com/article/okiwanimaru30-tenjou/
- https://hazuse.com/machine/pachislot/1S0361/
- https://p-kn.com/slot/3719/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/63/bn01.php
- https://ichikatsu.com/newslot2022/
