更新日: 2026-09-12

## 現在地点
- recordCount: **1480**
- latestRecordAdded: **パチスロ 言い訳はさせないわよ by 激壇蜜 — No.1480**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-02-21_geki-danmitsu.md`
- chronologicalFrontier: **2022-02-21**
- frontierLatestMachine: **パチスロ 言い訳はさせないわよ by 激壇蜜 — No.1480**
- schema: **resetBehavior v0.7**
- status: **2022-02-21_GROUP_OPEN_2_OF_3_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点でmainはNo.1478「パチスロドリフターズ」まで進行済み。既存値をやり直さず、2022-02-21群へ前進。
- No.1479 `SLOTマッピー`、No.1480 `パチスロ 言い訳はさせないわよ by 激壇蜜` を追加。
- 2022-02-21群の既知独立候補は `SLOTマッピー`、`パチスロ 言い訳はさせないわよ by 激壇蜜`、`メルヘンクエスト` の3機。現在2/3処理済みでOPEN。

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

## No.1480 — パチスロ 言い訳はさせないわよ by 激壇蜜
- path: `docs/real_machine_db/machines/2022-02-21_geki-danmitsu.md`
- manufacturer: **ボーダー**
- formalModel: **SゲキダンミツEE**
- inspectionCode: **1S1568**
- releaseDate: **2022-02-21**
- generation/system: **6号機 / ノーマルAタイプ / 完全告知 / A-280**
- settings: **L / 3 / 6 / H**
- payoutRateMarket: **97.5 / 99.3 / 105.2 / 105.6%**（業界精密表記L97.47/H105.62も併記）
- payoutRateFullProcedure: **100.0 / 101.8 / 107.7 / 108.2%**（業界精密表記L100.01/H108.21も併記）
- BIG: **1/9362.3 / 1/284.9 / 1/284.9 / 1/8192.0**
- REG: **1/171.6 / 1/364.1 / 1/284.9 / 1/468.1**
- bonusCombined: **1/168.5 / 1/159.8 / 1/142.5 / 1/442.8**
- baseGamesPer50: **78.6 / 41.0 / 43.9 / 1227.7G**
- basicPayout: **BIG280枚 / REG104枚**
- ceiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_AND_GAKKUN**
- confidence: **HIGH_CORE_RESET_NON_APPLICABLE_FIELDS_HIGH_MACHINE_SPECIFIC_POWER_GAKKUN_UNVERIFIED**

### resetBehavior v0.7 — No.1480
- **設定変更**: 天井・AT/CZ用モードはNOT_APPLICABLE。成立済みボーナスフラグ/告知状態の機種固有契約は再探索後もUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井NOT_APPLICABLE。成立済みボーナスフラグ/告知状態の機種固有直接契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 天井NOT_APPLICABLE。成立済みボーナスフラグ/告知状態はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: NOT_APPLICABLE。天井非搭載。
- **モード/状態**: AT/CZ用モード・朝一専用モードなし。設定変更時のボーナス状態詳細は推測補完しない。
- **有利区間**: ノーマルAタイプの朝一有利区間狙い対象ではないためNOT_APPLICABLEとして保存。
- **朝一恩恵/不利**: 短縮天井・専用モード・公開朝一当選率等は確認できず/該当なし。
- **変更判別**: 本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。設定Lの上部パネル消灯は設定L識別要素であり設定変更判別とは分離。
- **公開朝一数値**: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## 次回本線の再開地点
- **同じ2022-02-21群のNo.1481候補 `メルヘンクエスト` から処理。**
- メルヘンクエスト処理後、PB・別型式・地域先行・延期/段階導入を含めて2022-02-21群を再監査しCLOSED可否を判定する。
- その後、次の時系列境界へ進む。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1479追加 commit: `6dc7d6ed186f3b6e0a185bddee8f58544f6823f9`
- No.1480追加 commit: `4c4ea152ca68d77ab1b375ac23e4f4e5c83bf18d`
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

### No.1480 激壇蜜
- https://news.p-world.co.jp/articles/19124/nippon
- https://news.p-world.co.jp/articles/19606/nippon
- https://news.p-world.co.jp/articles/19108/yugitsushin
- https://news.p-world.co.jp/articles/19224/yugitsushin
- https://web-greenbelt.jp/post-60171/
- https://hazuse.com/machine/pachislot/1S1568/
- https://hazuse.com/machine/pachislot/1S1568/genre/201/
- https://p-kn.com/slot/3745/
- https://1geki.jp/slot/s_geki_danmitsu/1/
- https://1geki.jp/slot/s_geki_danmitsu/4/
- https://chonborista.com/slot/border/163661/

### 2022-02-21群境界 / 次回候補
- https://web-greenbelt.jp/post-56150/
- https://www.p-world.co.jp/machine/database/9589
- https://www.slopachi-quest.com/article/meruhenkuesuto-settei/
