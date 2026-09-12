更新日: 2026-09-12

## 現在地点
- recordCount: **1465**
- latestRecordAdded: **ハナハナホウオウ～天翔～-30（30φ） — No.1465**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_hanahana-houoh-tensho-30.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **ハナハナホウオウ～天翔～-30 — No.1465**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_2_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1464「ハナハナホウオウ～天翔～（25φ）」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種として30φ別型式 `Sハナハナホウオウ～天翔～EX-30 / 0S1174` をNo.1465へ追加。
- 同時に遡及resetBehavior QAカーソル `2007-01_karate-baka-ichidai.md` を再探索し、既存 `coreStatus: PARTIAL` は維持したままreset側を `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- 遡及QAの次カーソルはGit追加履歴を追跡し、空手バカ一代の次に追加された `docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）へ確定。

## No.1465 — ハナハナホウオウ～天翔～-30
- path: `docs/real_machine_db/machines/2022-01-24_hanahana-houoh-tensho-30.md`
- manufacturer: **パイオニア**
- formalModel: **Sハナハナホウオウ～天翔～EX-30**
- certificationNumber: **0S1174**
- releaseDate: **2022-01-24**
- generation/system: **6.1号機 / ノーマル / 完全告知 / 30φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97 / 99 / 101 / 103 / 106 / 109%**
- bonusInitialHit: **BIG 1/297→1/236 / REG 1/496→1/337 / 合算 1/186→1/139**
- baseGamesPer50: **約42G/50枚**
- basicPayout: **BIG最大240枚 / REG最大120枚**
- normalCeiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_RESET_MACHINE_SPECIFIC_CONTRACT_PARTIAL**

### resetBehavior v0.7 — No.1465
- **設定変更**: 天井非搭載、AT/ART/CZモードなし。有利区間進行も朝一物差し上NOT_APPLICABLE。設定変更専用の短縮天井・朝一専用モード・CZ/AT優遇は非該当/確認なし。
- **据え置き**: 天井・AT/CZ状態は非該当。30φ型式固有のBGM履歴・成立済みボーナス/告知待ち状態の引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: 天井・AT/CZ状態は非該当。BETランプ/BGM履歴/成立済みボーナス・告知状態の30φ固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- **変更判別**: 30φ型式を直接名指ししたガックン/BETランプ比較資料を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。25φ側の契約は別型式のため自動転記していない。
- **公開朝一数値**: 設定変更専用の当選率、モード振り分け、短縮G数などの公開数値なし。
- 性能コアは業界記事・HAZUSE・1geki・P-WORLD等で複数照合。25φと基本公開性能は一致するが、別型式・別検定番号のため独立レコードを維持。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **ディスクアップ2 — No.1466候補 / NEXT**
4. **聖闘士星矢 冥王復活**
5. **新世紀エヴァンゲリオン～魂の共鳴～**
6. **アラジンAクラシック**
7. **南国物語30**
8. **ハイスクールD×D2 ハーレム王に俺はなる**
9. **ぱちスロ ギャグダー**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1466候補「ディスクアップ2」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 同日群を最後まで処理後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存性能側 `coreStatus: PARTIAL` は維持。
- 確認済み: 天井非搭載、ボーナス後CZ→突入リプレイ→RT「百人組手」、RT約+0.5枚/G、10000Gまたはボーナス成立まで継続。
- 未固定: 設定変更/据え置き/純電断時のRT・CZ残状態、成立済みボーナス/ボーナス成立後リプレイ高確状態、ガックン/初期出目等の変更判別。一般的5号機挙動からは補完していない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）**。
- Git追加履歴: 空手バカ一代 `e563f15e...` の次の実機追加はPLAYBOY 25φ `5b20abeb...`。

## GitHub保存
- No.1465追加 commit: `dedd6f600e0b848e0d1132ed1b18efb0982fee25`
- 空手バカ一代 resetBehavior QA commit: `cff57b7226225b4b064ce853fb8786655cc6aa93`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1465 ハナハナホウオウ～天翔～-30
- https://news.p-world.co.jp/articles/18136/nippon
- https://news.p-world.co.jp/articles/19304/nippon
- https://hazuse.com/machine/pachislot/0S1174/
- https://1geki.jp/slot/s_hanahana_houoh_tensho30/
- https://1geki.jp/slot/s_hanahana_houoh_tensho30/4/
- https://www.p-world.co.jp/machine/database/9502
- https://www.pachibee.jp/machines/about/221120006

### 遡及QA — 空手バカ一代
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/03/a.php
- https://pachiseven.jp/articles/detail/11089
- https://pacnk.com/slot/tools/sh_karatebakaichidai.html
- https://www.p-world.co.jp/machine/database/4548
- https://5goki.com/heiwa-olympia
- https://chinta-slo-kaigo.com/5goukibesttaihokarate/
- https://plaza.rakuten.co.jp/paruna2007/diaryall/
