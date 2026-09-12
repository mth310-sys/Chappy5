更新日: 2026-09-12

## 現在地点
- recordCount: **1446**
- latestRecordAdded: **パチスロ モンスターハンター:ワールド™ 黄金狩猟 — No.1446**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-06_monster-hunter-world-kogane-shuryo.md`
- chronologicalFrontier: **2021-12-06**
- frontierLatestMachine: **パチスロ モンスターハンター:ワールド™ 黄金狩猟 — No.1446**
- schema: **resetBehavior v0.7**
- status: **2021-12-06_GROUP_OPEN_2_OF_5_KNOWN_DONE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1445「マイジャグラーV」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1446「パチスロ モンスターハンター:ワールド™ 黄金狩猟」を追加。
- エンターライズ、型式 `S MHW 黄金狩猟ZC`、検定番号 `1S0995`、2021-12-06導入、6.2号機ATを当時業界記事・HAZUSE・パチビー・なな徹等で照合。
- 性能コアは機械割98.1/99.3/100.5/104.0/105.8/109.5%、CZ歴戦王クエスト1/277.7→1/256.9、ATエルドラドボーナス1/609.0→1/469.8、約37.1G/50枚、純増約6.7枚/Gを保存。
- 天井はCZ間800G+αで歴戦王クエスト、AT間2500GでAT。通常時有利区間ランプは点灯型で、設定変更時・AT終了時に消灯し数G後再点灯。
- resetBehaviorは設定変更時の有利区間RESETと朝一ランプ判別を複数資料で確認。朝一消灯=設定変更濃厚、点灯=据え置き濃厚だが、前日消灯閉店や店側対策は例外。
- 設定変更時のCZ間/AT間個別内部カウンタ、据え置き・純電源OFF→ON時の内部ゲーム数/モード/状態/有利区間保持契約、設定変更専用モード振り分け・短縮天井・定量恩恵、本機固有ガックンは、表記・正式型式・検索語・資料系統を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 当時解析にも朝一挙動/リセット恩恵が「調査中」と残るため、他機種や一般的6.2号機仕様からの推測補完は行っていない。
- 2021-12-06群はhandoff既知5機中2機完了。群はOPENのまま継続。

## No.1446 — パチスロ モンスターハンター:ワールド™ 黄金狩猟
- path: `docs/real_machine_db/machines/2021-12-06_monster-hunter-world-kogane-shuryo.md`
- manufacturer: **エンターライズ**
- formalModel: **S MHW 黄金狩猟ZC**
- certificationNumber: **1S0995**
- releaseDate: **2021-12-06**
- generation/system: **6.2号機 / AT / 高純増擬似ボーナス / CZ経由**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **98.1 / 99.3 / 100.5 / 104.0 / 105.8 / 109.5%**
- CZ歴戦王クエスト: **1/277.7 / 1/275.6 / 1/273.2 / 1/262.5 / 1/258.6 / 1/256.9**
- ATエルドラドボーナス: **1/609.0 / 1/588.8 / 1/568.8 / 1/518.5 / 1/492.7 / 1/469.8**
- baseGamesPer50: **約37.1G**
- netIncrease: **約6.7枚/G**
- basicPayout: **エルドラドボーナス1セット20G・最大4セット / 剥ぎ取りGOLD1セット10G**
- normalCeiling: **CZ間800G+α / AT間2500G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**

### resetBehavior v0.7 — No.1446
- **設定変更**: 有利区間RESETは確認。CZ間/AT間の個別内部カウンタを0から再計数する直接記載は未固定。
- **据え置き**: 内部ゲーム数・モード・状態・有利区間の本機固有引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: ゲーム数/天井・モード/状態・有利区間の保持契約は `UNVERIFIED_AFTER_RESEARCH`。
- **天井/短縮**: 通常CZ間800G+α、AT間2500G。設定変更専用短縮天井は公開固定値を確認できず。
- **モード/状態**: 設定変更専用モード/初期振り分け・状態初期値は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: 設定変更時RESET。通常時ランプ点灯型。AT終了時にも消灯。
- **朝一恩恵/不利**: 当時解析で調査中。比較可能な設定変更専用定量値は確認できず。
- **変更判別**: クレジット右下ドット。朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただし前日消灯閉店・店舗対策は例外。本機固有ガックンは未固定。
- **公開朝一数値**: 設定変更専用モード振り分け、特定G以内当選率、短縮天井、恩恵発生率は確認できず。

## 2021-12-06群 — OPEN
1. **マイジャグラーV — No.1445 / DONE**
2. **パチスロ モンスターハンター:ワールド™ 黄金狩猟 — No.1446 / DONE**
3. **S牙狼-黄金騎士- — No.1447候補 / NEXT**
4. **主役は銭形3 — 後続候補**
5. **スターパルサー — 後続候補**

## 次回本線の再開地点
- **No.1447候補「S牙狼-黄金騎士-」**。
- 以降の暫定キュー: **主役は銭形3 → スターパルサー**。
- 12/6群完了後にメーカー別/別型式/PB/地域先行・延期/段階導入を再監査しCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）**。
- 今回は本線No.1446を優先し、遡及QAカーソルは進めていない。

## GitHub保存
- No.1446追加 commit: `8f68cba56996f311375b8fbe2cd040fda3c658fd`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1446 パチスロ モンスターハンター:ワールド™ 黄金狩猟
- https://news.p-world.co.jp/articles/18139/nippon
- https://news.p-world.co.jp/articles/18776/greenbelt
- https://hazuse.com/machine/pachislot/1S0995/genre/201/
- https://hazuse.com/machine/pachislot/1S0995/genre/207/
- https://www.pachibee.jp/machines/index/221100001
- https://nana-press.com/kaiseki/machine/189/6797/
- https://nana-press.com/kaiseki/machine/189/7026/
- https://www.slopachi-quest.com/article/monster-hunter-world-gold-tenjou/
- https://slotmethod.jp/archives/8078/
- https://pachiseven.jp/machines/6417/cutout/3

### 2021-12-06群 / 次回境界
- https://1geki.jp/newmachinecalender/202112/
- https://ichikatsu.com/newslot/
