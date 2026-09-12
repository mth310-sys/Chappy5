更新日: 2026-09-12

## 現在地点
- recordCount: **1470**
- latestRecordAdded: **パチスロ南国物語30 — No.1470**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_nangoku-monogatari-30.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **パチスロ南国物語30 — No.1470**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_7_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1469「パチスロアラジンAクラシック」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `パチスロ南国物語30` をNo.1470へ追加。
- 同名系統のAT機 `南国育ち-30` と混同しないよう型式・検定番号・ゲーム性を再照合。No.1470はアムテックスの30Φノーマル `S南国物語UNA2-30` / 検定 `1S1192` であり、南国育ち-30のリセット天井・モード・有利区間挙動は流用していない。
- 性能コアは業界記事、HAZUSE、P-WORLD、1geki、解析資料を横断。設定1〜6の機械割97.5〜106.5%、BIG 1/287.4〜1/256.0、REG 1/431.2〜1/316.6、合算1/172.5〜1/141.5、設定1ベース約39.0G/50枚、BIG平均約264枚/最大271枚、REG120枚を保存。
- 天井は非搭載。AT/ART/CZ型ではなく、resetBehaviorでは天井G・短縮天井・有利区間・朝一CZ/AT等をNOT_APPLICABLEとして分離した。
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナス・告知待ち状態、ガックン・初期出目等の本機固有契約、設定変更専用公開朝一数値は資料系統・検索語を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH` / `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。reset QAは `PARTIAL_RESEARCH_EXHAUSTED`。
- 遡及QAについて、前handoffのPLAYBOYカーソルはmain実レコードより古いことを確認。`2007-02_playboy.md`、`2007-02_playboy-30.md`、`2007-02_pikaslo.md`、`2007-02_skylove.md` は既に2026-09-11にv0.7 QA済みだったため重複処理せず、その次の未処理 `2007-02_ps-adlib-ouji.md` を処理。
- PSアドリブ王子は既存 `coreStatus: COMPLETE_CORE` を維持し、resetBehaviorのみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。1111G以上ハマリ後の次回スーパーBIG確定という救済仕様は保持するが、設定変更/据え置き/純電断時の救済カウンタ・昇格チャンス状態・成立済みボーナス状態の処理は直接契約を固定できず推測補完していない。

## No.1470 — パチスロ南国物語30
- path: `docs/real_machine_db/machines/2022-01-24_nangoku-monogatari-30.md`
- manufacturer: **アムテックス（総販売元: 平和）**
- formalModel: **S南国物語UNA2-30**
- certificationNumber: **1S1192**
- releaseDate: **2022-01-24**
- generation/system: **6号機 / ノーマルA / 完全告知 / 30Φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.5 / 99.8 / 102.6 / 104.3 / 106.5%**
- BIG: **1/287.4 / 283.7 / 277.7 / 269.7 / 263.2 / 256.0**
- REG: **1/431.2 / 412.2 / 392.4 / 362.1 / 346.8 / 316.6**
- bonusCombined: **1/172.5 / 168.0 / 162.6 / 154.6 / 149.6 / 141.5**
- baseGamesPer50: **約39.0G/50枚（設定1）**
- basicPayout: **BIG平均約264枚・最大271枚 / REG120枚**
- normalCeiling: **NONE / 天井非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_PARTIAL_RESET**

### resetBehavior v0.7 — No.1470
- **設定変更**: 天井/AT-CZモード/有利区間は非該当。成立済みボーナス・告知待ち等の本機固有内部処理は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 天井非該当。成立済みボーナス・告知状態等の独立した機種固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- **純電源OFF→ON**: 同上。一般的ノーマル機挙動から補完しない。
- **通常/リセット天井**: `NOT_APPLICABLE`。
- **朝一専用モード/CZ/AT恩恵**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **有利区間リセット**: `NOT_APPLICABLE_FOR_YARDSTICK`。
- **変更判別**: 本機固有ガックン/初期出目/表示条件・発生率は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `PUBLIC_NUMERIC_RESET_DATA_NOT_FOUND_AFTER_RESEARCH`。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **パチスロディスクアップ2 — No.1466 / DONE**
4. **聖闘士星矢 冥王復活 — No.1467 / DONE**
5. **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468 / DONE**
6. **アラジンAクラシック — No.1469 / DONE**
7. **南国物語30 — No.1470 / DONE**
8. **ハイスクールD×D2 ハーレム王に俺はなる — No.1471候補 / NEXT**
9. **ぱちスロ ギャグダー**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1471候補「ハイスクールD×D2 ハーレム王に俺はなる」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 同日群を最後まで処理後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前handoffカーソル `2007-02_playboy.md` はmain実レコードでは既にv0.7 QA済みだった。
- 重複回避確認済み: `2007-02_playboy.md` / `2007-02_playboy-30.md` / `2007-02_pikaslo.md` / `2007-02_skylove.md` → いずれも既に `PARTIAL_RESEARCH_EXHAUSTED`。
- 今回処理: `docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`（PSアドリブ王子）→ **PARTIAL_RESEARCH_EXHAUSTED**。既存 `COMPLETE_CORE` は維持。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1470追加 commit: `625ad15e98cc7feac3987b988c1d73f82e0deccc`
- PSアドリブ王子 reset QA commit: `9574c5fc138adbc189899513b316dc089b9b2c92`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1470 パチスロ南国物語30
- https://news.p-world.co.jp/articles/18375/yugitsushin
- https://news.p-world.co.jp/articles/18331/nippon
- https://hazuse.com/machine/pachislot/1S1192/
- https://hazuse.com/machine/pachislot/1S1192/genre/201/
- https://chonborista.com/slot/amute/154953/
- https://1geki.jp/slot/s_nangoku30/3/
- https://www.p-world.co.jp/machine/database/9521

### 遡及QA — PSアドリブ王子
- https://www.p-world.co.jp/machine/database/4565
- https://news.p-world.co.jp/articles/2027/greenbelt
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/04/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/04/a.php
- https://hazuse.com/i/data/adlib/top.htm
- https://5goki.com/sanyo
- https://note.com/pachislot_panic7/n/n22f6b15efe66
