更新日: 2026-09-12

## 現在地点
- recordCount: **1479**
- latestRecordAdded: **SLOTマッピー — No.1479**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-02-21_slot-mappy.md`
- chronologicalFrontier: **2022-02-21**
- frontierLatestMachine: **SLOTマッピー — No.1479**
- schema: **resetBehavior v0.7**
- status: **2022-02-21_GROUP_OPEN_1_OF_3_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1478「パチスロドリフターズ」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- mainは開始時点でNo.1478まで進行済みだったため、既存値を再調査せずhandoff指定の次機No.1479候補 `SLOTマッピー` から継続。
- 2022-02-21群の既知独立候補は `SLOTマッピー`、`パチスロ 言い訳はさせないわよ by 激壇蜜`、`メルヘンクエスト` の3機。No.1479としてSLOTマッピーを追加し、群は1/3処理済みでOPEN。
- SLOTマッピーはメーシー、型式 `S/マッピー/GS`、検定番号 `1S1341`、2022-02-21導入、6.1号機A+ATとして保存。
- 性能コアは設定1/2/5/6。市場予測機械割99.3/100.3/102.5/103.9%、完全手順102.1/103.2/105.2/106.7%、超完全手順104.1/105.2/106.9/108.3%。定義を混ぜず3系列で分離保存。
- BIGは全設定1/248.2、REGは1/376.6→1/310.6、合算1/149.6→1/138.0。ベース約38.0G/50枚、AT純増約0.3枚/G、BIG最大153枚、REG最大55枚。MAPPY ROUNDは1セット20G、REG後は30G固定チャンスタイム。
- 天井は非搭載。解析表の設定変更時『天井リセット』/電源OFF→ON時『引き継ぎ』表記は本機では実効天井値を持たないため、resetBehaviorではNOT_APPLICABLEとして明示。
- resetBehavior v0.7は設定変更時の有利区間RESETを確認。有利区間ランプはボーナス入賞時点灯、設定変更時・REG終了時・MAPPY GAME終了時に消灯するため、朝一消灯だけでは変更判別不可。
- 据え置き/純電源OFF→ON時のAT・REG後チャンスタイム等の内部状態、有利区間の純電断固有契約、本機固有ガックンは、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間を組み替えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
- 設定変更専用の短縮天井・モード振り分け・初当たり/CZ優遇率などの公開朝一数値は確認できず。天井自体は非搭載。
- 性能値は業界記事、HAZUSE、K-Navi、1geki、なな徹、パチセブン等の別系統資料で照合。
- 遡及resetBehavior QAは本線を優先し、前回カーソルを維持。

## No.1479 — SLOTマッピー
- path: `docs/real_machine_db/machines/2022-02-21_slot-mappy.md`
- manufacturer: **メーシー**
- formalModel: **S/マッピー/GS**
- inspectionCode: **1S1341**
- releaseDate: **2022-02-21**
- generation/system: **6.1号機 / A+AT / リアルボーナス+技術介入AT**
- settings: **1 / 2 / 5 / 6**
- payoutRateMarket: **99.3 / 100.3 / 102.5 / 103.9%**
- payoutRateFullProcedure: **102.1 / 103.2 / 105.2 / 106.7%**
- payoutRateUltraFullProcedure: **104.1 / 105.2 / 106.9 / 108.3%**
- BIG: **全設定1/248.2**
- REG: **1/376.6 / 1/348.6 / 1/329.3 / 1/310.6**
- bonusCombined: **1/149.6 / 1/145.0 / 1/141.5 / 1/138.0**
- baseGamesPer50: **約38.0G**
- netIncrease: **AT約0.3枚/G**
- basicPayout: **BIG最大153枚 / REG最大55枚 / MAPPY ROUND 1セット20G / REG後30Gチャンスタイム**
- ceiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE_MEDIUM_RESET_POWER_STATE_AND_GAKKUN_UNVERIFIED**

### resetBehavior v0.7 — No.1479
- **設定変更**: 有利区間RESETを確認。天井非搭載。AT/チャンスタイム等の内部状態の完全公開契約はUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井非搭載。内部状態の機種固有直接契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 解析表では天井引継ぎ表記だが天井非搭載。内部状態・有利区間の純電断固有明記はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: NOT_APPLICABLE。天井非搭載。
- **モード/状態**: 設定変更専用モード・公開振り分けなし。AT/REG後CT等の詳細は推測補完しない。
- **有利区間**: 設定変更時RESET。ランプはボーナス入賞時点灯、設定変更時/REG終了時/MG終了時消灯。
- **朝一恩恵/不利**: 設定変更専用短縮天井・初当たり/CZ優遇等の主要公開数値は確認できず。
- **変更判別**: 朝一ランプ消灯だけでは判別不能。通常時にも消灯し得る。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## 次回本線の再開地点
- **同じ2022-02-21群のNo.1480候補「パチスロ 言い訳はさせないわよ by 激壇蜜」から処理。**
- 続いてNo.1481候補 `メルヘンクエスト` を処理。
- 2機処理後、PB・30Φ別型式・地域先行・延期/段階導入を含めて2022-02-21群を再監査し、CLOSED可否を判定する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1479追加 commit: `6dc7d6ed186f3b6e0a185bddee8f58544f6823f9`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1479 SLOTマッピー
- https://news.p-world.co.jp/articles/19157/nippon
- https://hazuse.com/machine/pachislot/1S1341/
- https://hazuse.com/machine/pachislot/1S1341/genre/201/
- https://p-kn.com/slot/3722/
- https://1geki.jp/slot/s_mappy/
- https://1geki.jp/slot/s_mappy/1/
- https://nana-press.com/kaiseki/machine/289/8117/
- https://pachiseven.jp/machines/6458/cutout/3
- https://chonborista.com/slot/universal-slot/159051/
- https://pachinko-curation.com/27348/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/53/bn01.php

### 2022-02-21群境界 / 次回候補
- https://news.p-world.co.jp/articles/19606/nippon
- https://web-greenbelt.jp/post-56150/
- https://nana-press.com/post/1576830
- https://ichikatsu.com/newslot2022/
