更新日: 2026-09-13

## 現在地点
- recordCount: **1531**
- latestRecordAdded: **ラストユートピア — No.1531**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-11-07_last-utopia.md`
- chronologicalFrontier: **2022-11-07**
- frontierLatestMachine: **ラストユートピア — No.1531**
- schema: **resetBehavior v0.7**
- status: **2022-11-07_GROUP_OPEN_2_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1530を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として扱った。
- 前回handoff指定のNo.1531 `ラストユートピア` を性能コア + resetBehavior v0.7で追加。
- パイオニア公式、P-WORLD/グリーンべると、P-WORLD/遊技通信、HAZUSE、PiDEA、K-Navi、一撃、ちょんぼりすた、2-9伝説を横断して照合。
- 型式 `SラストユートピアMY`、検定番号 `1S1578`、ピーセカンド製造 / パイオニア販売、2022-11-07導入を採用。
- 6号機ノーマルタイプで天井非搭載。AT/CZモード、周期、天井、有利区間進行に依存した朝一リセット恩恵はNOT_APPLICABLE。
- 設定変更専用の朝一当選率・恩恵発生率・専用モードは資料系統を変えて再探索したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 純電源OFF→ON時の演出/ランプ初期化契約と本機固有ガックン条件/発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- HAZUSEにメーカー名「バイオニア」の誤植とみられる表記があるため、メーカー公式・業界発表の「パイオニア」をcanonicalとした。

## No.1531 — ラストユートピア
- manufacturer: **ピーセカンド製造 / パイオニア販売**
- formalModel: **SラストユートピアMY**
- inspectionCode: **1S1578**
- releaseDate: **2022-11-07**
- generation/system: **6号機 / ノーマル / 完全告知 / BIG偏重型**
- payoutRate: **97.8 / 98.7 / 100.4 / 102.9 / 105.0 / 108.0%**
- BIG: **1/228 / 227 / 226 / 220 / 215 / 208**
- REG: **1/712 / 704 / 661 / 537 / 492 / 414**
- 合算: **1/173 / 172 / 168 / 156 / 149 / 138**
- baseGamesPer50: **設定1 約37.7G/50枚**
- netIncrease: **非該当（ノーマルタイプ）**
- BIG純増 **252枚** / REG純増 **104枚**
- 天井: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_NOT_APPLICABLE_NORMAL_TYPE**

### resetBehavior v0.7 — No.1531
- **設定変更**: ゲーム数天井・周期・AT/CZモード・有利区間進行はNOT_APPLICABLE。設定変更専用当選優遇はNONE_CONFIRMED_AFTER_RESEARCH。
- **据え置き**: 引継ぎ対象となる天井・周期・AT/CZモード・有利区間はNOT_APPLICABLE。
- **純電源OFF→ON**: 天井・周期・AT/CZモード・有利区間はNOT_APPLICABLE。演出/ランプ初期化契約はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数・天井**: 天井非搭載。短縮天井もNOT_APPLICABLE。
- **モード・状態**: 朝一客AIへ影響するAT/CZモード・高確状態管理はNOT_APPLICABLE_FOR_YARDSTICK。
- **有利区間**: 朝一有利区間RESET/CARRY_OVERの比較項目はNOT_APPLICABLE。
- **朝一恩恵/不利**: 天井短縮・高モード・CZ優遇等はNONE_CONFIRMED_AFTER_RESEARCH。前日進行消失による不利もNOT_APPLICABLE。
- **変更判別**: 天井/周期/有利区間ランプによる判別不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## 2022-11-07群 — OPEN 2/4 known canonical
1. **花火絶景（ミズホ）** — No.1530 済
2. **ラストユートピア（ピーセカンド / パイオニア）** — No.1531 済
3. **パチスロ幼女戦記（サミー）** ← No.1532候補 / 次回最優先
4. **パチスロ鉄拳4アルティメットデビルVer.（山佐ネクスト）**

4機処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 遡及QA
- `docs/real_machine_db/machines/2007-03_pikagorou-v-b.md` はmain上ですでに2026-09-11 QA済みで `coreStatus: COMPLETE_CORE / resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED`。
- 次回は重複処理せず、ピカゴロウV-Bより後の時系列で最初の未QA/PARTIALレコードをmainから再探索してカーソルを進める。

## 今回の主要資料
### ラストユートピア
- パイオニア公式 発売お知らせ: https://www.slot-pioneer.co.jp/information/last_utopia.html
- パイオニア公式 その他機種一覧: https://www.slot-pioneer.co.jp/products/30.html
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/21612/greenbelt
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/21574/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/1S1578/
- PiDEA: https://pidea.jp/articles/1663312103
- K-Navi: https://p-kn.com/slot/3855/
- 一撃: https://1geki.jp/slot/s_last_utopia/
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/175792/
- 2-9伝説: https://2-9densetsu.com/lastutopia/

## 次回再開地点
**本線はNo.1532候補 `パチスロ幼女戦記`（2022-11-07）から性能コア + resetBehavior v0.7を収集する。その後 `パチスロ鉄拳4アルティメットデビルVer.` を同じ11/7群として処理する。両機完了後、PB・別型式・地域先行・延期/段階導入を再監査し2022-11-07群のCLOSED可否を判定する。遡及QAはピカゴロウV-Bより後の最初の未QA/PARTIALレコードから再開する。**