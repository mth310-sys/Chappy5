更新日: 2026-09-12

## 現在地点
- recordCount: **1454**
- latestRecordAdded: **沖ドキ！DUO — No.1454**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-20_okidoki-duo.md`
- chronologicalFrontier: **2021-12-20**
- frontierLatestMachine: **沖ドキ！DUO — No.1454**
- schema: **resetBehavior v0.7**
- status: **2021-12-20_GROUP_OPEN_2_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1453「パチスロ戦姫絶唱シンフォギア 勇気の歌」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1454「沖ドキ！DUO」（25φ）を追加。30φ版は別型式のためNo.1455候補として分離。
- アクロス製、型式 `S/沖ドキ!DUO/DH`、2021-12-20導入。6.2号機AT/疑似ボーナス。
- 設定1〜6の機械割 **97.0 / 98.5 / 100.7 / 103.1 / 105.0 / 107.2%**、ボーナス初当り **1/255.1 → 1/196.8** を業界記事・複数解析で照合。
- 50枚ベース約31.4G、純増約4.0枚/G。BIGはベルナビ35回・平均約210枚、REGはベルナビ10回・平均約60枚。
- 通常時最大800Gでボーナス。チャンスモード通常天井200G、天国以上32G。
- resetBehaviorは **設定変更＝有利区間/天井/内部モード/モードテーブル/ドキハナモードRESET、据え置き＝引継ぎ、純電源OFF→ON＝引継ぎ**をパチマガスロマガ・なな徹・一撃で固定。
- 設定変更時は滞在モードを問わず規定ゲーム数を**32G短縮**。チャンスなら168G、それ以外の最大天井系は768G目安（非有利→有利区間移行までのG数で見た目上ずれる場合あり）。
- 設定変更時の初回モードは **通常A 41.0% / 通常B 14.9% / チャンス 43.4% / 特殊 0.8%**。通常B以上相当の合計は約59.1%。
- 朝一の有利区間ランプは通常時消灯局面があるため消灯単独では変更判別困難。前日点灯状態から朝一も点灯なら据え置き濃厚。当日初回ボーナス後のシーちゃん・サーくん両方点灯（デフォルト）は据え置き確定とする解析あり。
- 検定番号、本機固有の設定変更ガックン条件・発生率は、機種名/型式/メーカー/検定/設定変更/リセット/据え置き/電源OFF ON/ガックン等へ検索語・資料系統を変えて再探索後も高信頼の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1454 — 沖ドキ！DUO
- path: `docs/real_machine_db/machines/2021-12-20_okidoki-duo.md`
- manufacturer: **アクロス**
- formalModel: **S/沖ドキ!DUO/DH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-12-20**
- generation/system: **6.2号機 / AT / 疑似ボーナス / モード移行・連チャン型 / 25φ**
- payoutRate: **97.0 / 98.5 / 100.7 / 103.1 / 105.0 / 107.2%**
- initialHit: **1/255.1 / 1/244.4 / 1/228.4 / 1/216.7 / 1/206.1 / 1/196.8**
- baseGamesPer50: **約31.4G**
- netIncrease: **約4.0枚/G**
- basicPayout: **BIG平均約210枚 / REG平均約60枚**
- normalCeiling: **通常最大800G / チャンス200G / 天国以上32G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**

### resetBehavior v0.7 — No.1454
- **設定変更**: 有利区間・天井・内部モード・モードテーブル・ドキハナモードRESET。
- **据え置き**: 上記をCARRY_OVER。
- **純電源OFF→ON**: 上記をCARRY_OVER。
- **ゲーム数/天井**: 設定変更時は全モードで規定ゲーム数32G短縮。チャンス168G、それ以外の最大天井系768G目安。
- **モード**: 初回 通常A41.0% / 通常B14.9% / チャンス43.4% / 特殊0.8%。
- **有利区間**: 設定変更でRESET、据え置き/純電断でCARRY_OVER。
- **朝一恩恵**: チャンス43.4%、通常B以上相当約59.1%、32G規定ゲーム数短縮。
- **朝一不利**: 比較可能な設定変更専用の主要不利要素は確認できず。
- **変更判別**: 朝一消灯だけでは困難。前日点灯→朝一点灯は据え置き濃厚。初回ボーナス後シーちゃん・サーくん両方点灯は据え置き確定とする解析あり。ガックン固有契約はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: A41.0 / B14.9 / チャンス43.4 / 特殊0.8%、全モード32G短縮。

## 2021-12-20群 — OPEN / 2 of 6 known processed
1. **パチスロ戦姫絶唱シンフォギア 勇気の歌 — No.1453 / DONE**
2. **沖ドキ！DUO — No.1454 / DONE**
3. **沖ドキ！DUO-30 — NEXT / No.1455候補**
4. **シンデレラブレイド4 — QUEUED**
5. **秘宝伝 解き放たれた女神 — QUEUED**
6. **パチスロ リング 運命の秒刻 — QUEUED**

## 次回本線の再開地点
- **2021-12-20群 / No.1455候補「沖ドキ！DUO-30」**から最優先確認・処理する。
- 25φ No.1454から性能値を自動転記せず、30φ別型式 `S/沖ドキ!DUO/DK-30` として同一性能かを資料で再照合して登録する。
- その後 **シンデレラブレイド4 → 秘宝伝 解き放たれた女神 → パチスロ リング 運命の秒刻** の順で継続。
- 12/20群は全件処理後にメーカー公式・業界カレンダー・別型式/25φ/30φ/PB/地域先行/延期差を再監査してCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`（トリプルクラウン-30）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_marine-gang.md`（マリーンギャング）**。今回カーソルは変更していない。

## GitHub保存
- No.1454追加 commit: `632220afab8b68b9f6a4c00f5e755829c1bc0604`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1454 沖ドキ！DUO
- https://news.p-world.co.jp/articles/18422/nippon
- https://www.p-world.co.jp/machine/database/9517
- https://nana-press.com/kaiseki/machine/223/7069/
- https://nana-press.com/kaiseki/machine/223/7083/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/20/kr01.php
- https://1geki.jp/slot/s_okidoki_duo_25/3/
- https://slot-seven.com/okidokiduo-settei/