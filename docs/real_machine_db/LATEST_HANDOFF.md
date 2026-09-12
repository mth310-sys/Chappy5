更新日: 2026-09-12

## 現在地点
- recordCount: **1503**
- latestRecordAdded: **パチスロ甲鉄城のカバネリ — No.1503**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-07-04_pachislot-koutetsujou-no-kabaneri.md`
- chronologicalFrontier: **2022-07-04**
- frontierLatestMachine: **パチスロ甲鉄城のカバネリ — No.1503**
- schema: **resetBehavior v0.7**
- status: **2022-07-04_GROUP_OPEN_1_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1502 `シリウス` を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 2022-07-04群の残り1機を別系統資料で再監査し、`スーパーハナハナ2-30` と確定。2022-07-04群は5機で固定。
- handoff指定の次機種 No.1503 `パチスロ甲鉄城のカバネリ`（サミー、2022-07-04）を性能コア＋resetBehavior v0.7で追加。
- 正式型式 `S パチスロ甲鉄城のカバネリ ZR`、検定番号 `2S0243` をHAZUSEで確認。
- 性能コアは設定1〜6。機械割97.8 / 98.8 / 100.7 / 105.9 / 108.4 / 110.0%。ボーナス初当り1/237.0→1/151.3、ST初当り1/407.9→1/290.6、設定1約33G/50枚、メイン純増約6.0枚/G。
- 通常ゲーム数天井はST間1000G+αでエピソードボーナス。駿城ボーナス4回スルー後5回目もエピソードボーナス。
- resetBehaviorは設定変更で有利区間・天井・内部モード・内部状態RESET、内部通常G数をランダム加算し、天井を650G+αへ短縮。黒煙りもRESET。
- 据え置きは有利区間・天井・通常G数・内部状態・黒煙りCARRY_OVER。純電源OFF→ONは有利区間・天井・内部モード・内部状態・通常G数CARRY_OVERをパチマガスロマガ比較表で直接確認。
- 設定変更後は平均約6Gの特殊状態へ移行し、特殊状態中のオールスター目でST直撃。
- 設定変更後初回STでは0.3%で「それじゃあ1000枚目標でフラグ」が選択され、ST中初回ボーナス1000枚が選択される。
- 本機は有利区間ランプ非搭載。ガックンも設定変更/据え置きとも発生せず、見た目による変更判別不可。
- 内部G数ランダム加算の完全振り分け、設定変更専用の通常モード振り分けは公開固定できず `UNVERIFIED_AFTER_RESEARCH` とした。
- 遡及QAは `TIMという名のパチスロ機` を再処理。既存 `coreStatus: COMPLETE_CORE` を維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- TIMは設定変更/据え置き/純電源OFF→ON時のCZ/RT内部状態・残G、成立済みボーナス/告知待ち状態、本機固有ガックン/初期出目を資料系統と検索語を変えて再探索したが、直接契約を固定できず一般的5号機挙動から補完していない。

## No.1503 — パチスロ甲鉄城のカバネリ
- path: `docs/real_machine_db/machines/2022-07-04_pachislot-koutetsujou-no-kabaneri.md`
- manufacturer: **サミー**
- formalModel: **S パチスロ甲鉄城のカバネリ ZR**
- inspectionCode: **2S0243**
- releaseDate: **2022-07-04**
- generation/system: **6.5号機 / AT / CZ / 疑似ボーナス / ST**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 98.8 / 100.7 / 105.9 / 108.4 / 110.0%**
- bonusInitialHit: **1/237.0 / 1/230.7 / 1/214.0 / 1/186.5 / 1/171.3 / 1/151.3**
- stInitialHit: **1/407.9 / 1/393.2 / 1/372.4 / 1/327.2 / 1/307.3 / 1/290.6**
- baseGamesPer50: **約33G/50枚（設定1）**
- netIncrease: **約6.0枚/G（メイン高純増部）**
- normalCeiling: **ST間1000G+α**
- resetCeiling: **650G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_DATA**
- confidence: **HIGH_CORE / HIGH_RESET / HIGH_MODEL_CODE**

### resetBehavior v0.7 — No.1503
- **設定変更**: 有利区間・天井・内部モード・内部状態RESET。通常G数はRESET後ランダム加算。黒煙りRESET。
- **据え置き**: 有利区間・天井・通常G数・内部状態・黒煙りCARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部モード・内部状態・通常G数CARRY_OVER。
- **ゲーム数/天井**: 通常ST間1000G+α、設定変更後650G+α。駿城ボーナスST非突入では天井G数を引き継ぐ。
- **モード/状態**: 設定変更時に内部モード/状態RESET、平均約6Gの特殊状態へ。特殊状態中オールスター目でST直撃。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。ST開始時の一部でもRESET。
- **朝一恩恵**: 650G+α短縮、内部G数ランダム加算、平均約6G特殊状態、初回ST時0.3%の1000枚目標フラグ。
- **朝一不利**: 独立した固定ペナルティNONE_CONFIRMED。
- **変更判別**: 有利区間ランプ非搭載、ガックンなし。内部G数ランダム加算のため前兆位置だけでの確定判別不可。
- **公開朝一数値**: 650G+α / 特殊状態平均約6G / 初回ST時1000枚目標フラグ0.3%。

## 2022-07-04群 — OPEN 1/5
月間監査・別系統資料で確認した5機:
1. `パチスロ甲鉄城のカバネリ` — **No.1503 処理済み**
2. `ニューゲッターマウス` — **次回 No.1504候補**
3. `パチスロ犬夜叉`
4. `パチスロ アクエリオン ALL STARS`
5. `スーパーハナハナ2-30`

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理: `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）。
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- reset側は **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）**。TIM追加直後の実レコード追加履歴から確定。

## 次回本線の再開地点
- **No.1504候補 `ニューゲッターマウス` — 2022-07-04。**
- その後 `パチスロ犬夜叉 → パチスロ アクエリオン ALL STARS → スーパーハナハナ2-30` の順で同日群を処理し、5/5後にCLOSED監査する。

## GitHub保存
- No.1503追加 commit: `f52af31bf332382beb4c2ff183360998bd251eab`
- TIM resetBehavior QA更新 commit: `e6527512f807f68f4eab1a544f611020d964aed8`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1503 パチスロ甲鉄城のカバネリ
- https://hazuse.com/machine/pachislot/2S0243/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/198/kh02.php
- https://p.hisshobon.jp/machine/3906/1/89494
- https://www.p-world.co.jp/machine/database/9640
- https://nana-press.com/kaiseki/machine/384/10249/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/198/kr01-2.php
- https://p.hisshobon.jp/machine/3906/1/90968
- https://1geki.jp/slot/s_kabaneri/3/

### 2022-07-04群監査
- https://1geki.jp/newmachinecalender/202207/
- https://ichikatsu.com/newslot2022/
- https://chonborista.com/slot/pionia-slot/166212/
- https://hazuse.com/machine/pachislot/1S1736/

### TIM resetBehavior QA
- https://web-greenbelt.jp/00003985/
- https://www.p-world.co.jp/machine/database/4558
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/c.php
- https://hazuse.com/i/data/tim/top.htm
- https://5goki.com/heiwa-olympia
