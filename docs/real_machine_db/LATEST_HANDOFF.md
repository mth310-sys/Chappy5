更新日: 2026-09-12

## 現在地点
- recordCount: **1498**
- latestRecordAdded: **ぱちすろ けものフレンズ — No.1498**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-05-23_pachislot-kemono-friends.md`
- chronologicalFrontier: **2022-05-23**
- frontierLatestMachine: **ぱちすろ けものフレンズ — No.1498**
- schema: **resetBehavior v0.7**
- status: **2022-05-23_GROUP_OPEN_1_OF_2_KNOWN_ACTUAL_RELEASES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、既存レコードを確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- No.1498 `ぱちすろ けものフレンズ` を追加。2022-05-23実導入をサミー公式MySlot NEWS、業界記事、複数解析で照合。
- 型式 `S けものフレンズ FS`、検定番号 `1S1609`。製造主体はロデオ、販売・ブランドはサミーとして資料表記差を役割分離。
- 性能コアは設定1〜6、機械割97.7/99.1/101.2/103.8/106.1/107.7%、AT初当り1/293.5→1/235.4、約32.3G/50枚、純増約9.5枚/Gを固定。`COMPLETE_CORE`。
- resetBehaviorは設定変更 / 据え置き / 純電源OFF→ONを分離。設定変更時は有利区間・天井・内部モード/状態RESET、据え置きと純電断ではCARRY_OVERを直接確認。
- 設定変更後は1周期目AT期待度約50%、2周期または4周期天井が合計95%以上・2:4=1:1、ナイトサファリ開始、変更後約20Gはフリーズ確率上昇。朝一有利区間ランプ・ナイトサファリも変更判別材料として収録。
- 遡及QAは `科学忍者隊ガッチャマン` を再探索。既存 `COMPLETE_CORE` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- ガッチャマンは通常のボーナス間1300G→G-ZONEを再確認したが、設定変更/据え置き/純電断時の1300Gカウンタ、GT/G-ZONE内部状態、本機固有ガックンを直接固定できず、一般的5号機挙動から補完していない。

## No.1498 — ぱちすろ けものフレンズ
- path: `docs/real_machine_db/machines/2022-05-23_pachislot-kemono-friends.md`
- manufacturer: **ロデオ（販売・ブランド: サミー）**
- formalModel: **S けものフレンズ FS**
- inspectionCode: **1S1609**
- releaseDate: **2022-05-23**
- generation/system: **6.2号機 / AT / 周期・CZ経由 / 高純増**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 99.1 / 101.2 / 103.8 / 106.1 / 107.7%**
- AT初当り: **1/293.5 / 1/280.8 / 1/271.9 / 1/256.2 / 1/243.2 / 1/235.4**
- baseGamesPer50: **約32.3G/50枚**
- netIncrease: **約9.5枚/G**
- normalCeiling: **AT間999G超の周期終了後 / 最大8周期**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_TABLES**
- confidence: **HIGH_CORE / HIGH_RESET**

### resetBehavior v0.7 — No.1498
- **設定変更**: 有利区間・天井・内部モード/状態RESET。朝一ナイトサファリ開始。
- **据え置き**: 有利区間・天井・内部モード/状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部モードCARRY_OVER。表示ステージのみUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 通常はAT間999G超の周期終了後、周期天井最大8周期。設定変更後は2/4周期天井が合計95%以上。
- **モード/状態**: 2/4周期選択は1:1。ナイトサファリ中はフレンズLv等の抽選が優遇。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。
- **朝一恩恵**: 1周期目AT期待度約50%、2/4周期天井合計95%以上、変更後約20Gのフリーズ確率上昇、条件付き期待出玉率100%超とする公開解析あり。
- **変更判別**: ナイトサファリ、朝一有利区間ランプ。点灯なら据え置き濃厚、消灯は設定変更の有力材料。ただしAT終了時消灯があるため消灯単独100%確定にはしない。
- **公開朝一数値**: 1周期目約50%、2/4周期合計95%以上、2:4=1:1、変更後約20Gフリーズ率上昇。

## 2022-05-23群 — OPEN
現在の既知実導入2機種:
1. `ぱちすろ けものフレンズ` — **No.1498 処理済み**
2. `パチスロ ゼーガペイン2` — **次回No.1499候補**

### 日付監査メモ
- `パチスロ ゼーガペイン2` は一部カレンダーに2022-05-09予定情報が残る一方、複数の実導入系資料は **2022-05-23** で一致。平均化せず `DATE_CONFLICT` を保持し、本DBの実導入時系列では2022-05-23をcanonical候補とする。
- No.1499処理後、2022-05-23群を横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）。
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- reset側は **PARTIAL_RESEARCH_EXHAUSTED**。設定変更/据え置き/純電断時の1300G天井カウンタ、GT/G-ZONE内部状態、本機固有resetDetectionは直接契約を固定できず未推測。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）**。現行mainで `resetBehaviorQA: PARTIAL` を確認済み。

## 次回本線の再開地点
- **No.1499候補 `パチスロ ゼーガペイン2` — canonical 2022-05-23。**
- 5/9予定資料とのDATE_CONFLICTを保持したまま、性能コア＋resetBehavior v0.7を収集する。
- 処理後に2022-05-23群のCLOSED監査を行う。

## GitHub保存
- No.1498追加 commit: `9312b21733cdd34b275569fb5097d939045b1300`
- ガッチャマン遡及QA commit: `c92ed8b9bbf274d03ec650d042009f10c95a9cb2`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1498 ぱちすろ けものフレンズ
- https://news.p-world.co.jp/articles/19999/nippon
- https://new.sammy.co.jp/japanese/myslot/news/
- https://hazuse.com/machine/pachislot/1S1609/
- https://nana-press.com/kaiseki/machine/357/
- https://nana-press.com/kaiseki/machine/357/9548/
- https://nana-press.com/kaiseki/machine/357/9547/
- https://1geki.jp/slot/s_kemono_friends/3/
- https://pachiseven.jp/machines/6510

### 科学忍者隊ガッチャマン resetBehavior再QA
- https://crankyseven.com/sp/tenjo-5ka.htm
- https://p-kn.com/slot/675/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/k.php
