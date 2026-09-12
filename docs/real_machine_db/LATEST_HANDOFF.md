更新日: 2026-09-12

## 現在地点
- recordCount: **1481**
- latestRecordAdded: **メルヘンクエスト — No.1481**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-02-21_meruhen-quest.md`
- chronologicalFrontier: **2022-02-21**
- frontierLatestMachine: **メルヘンクエスト — No.1481**
- schema: **resetBehavior v0.7**
- status: **2022-02-21_GROUP_CLOSED_3_OF_3_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードNo.1480を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点でmainはNo.1480「パチスロ 言い訳はさせないわよ by 激壇蜜」まで進行済み。既存値をやり直さず、handoff指定の2022-02-21群残り候補へ前進。
- No.1481 `メルヘンクエスト` を追加。
- 2022-02-21群の既知独立レコード `SLOTマッピー`、`パチスロ 言い訳はさせないわよ by 激壇蜜`、`メルヘンクエスト` の3機を処理済み。
- メルヘンクエストはJPSの `Sオリスロ4AA / Sオリスロ4シリーズ（オリスロ4 PLUS系）` をベースにしたメルヘンワールド向けPB名称機。PB名称をベース機と混同せず独立レコード化。
- 2022年新台カレンダーでは2/21の一般全国新台としてマッピー・激壇蜜を確認し、業界一次記事でPBのメルヘンクエストを追加確認。2/28に明確な新規パチスロ導入群は今回の横断検索で確認できず、次の明確な本線境界を2022-03-07とした。

## No.1481 — メルヘンクエスト
- path: `docs/real_machine_db/machines/2022-02-21_meruhen-quest.md`
- manufacturer: **ジェイピーエス（JPS）**
- formalModel: **Sオリスロ4AA**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-02-21**
- generation/system: **6.2号機表記あり / ノーマルAタイプ / PB機 / ボーナス主体**
- settings: **5 / 6 / P**
- payoutRateMarket: **99.4 / 100.6 / 102.3%**
- payoutRateFullProcedure: **101.6 / 103.1 / 105.1%**
- BIG: **1/172.5 / 1/218.5 / 1/218.5**
- REG: **1/436.9 / 1/218.5 / 1/218.5**
- bonusCombined: **1/123.7 / 1/109.2 / 1/109.2**
- baseGamesPer50: **約36G一般表記 / 36.2～37.3Gイチゴ狙い / 38.0～41.6G小役全取得**
- basicPayout: **BIG195枚 / REG最大104枚**
- ceiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_MACHINE_SPECIFIC_STATE_POWER_AND_GAKKUN**
- confidence: **HIGH_CORE_MEDIUM_GENERATION_RESET_NON_APPLICABLE_FIELDS_HIGH_MACHINE_SPECIFIC_STATE_POWER_GAKKUN_UNVERIFIED**

### resetBehavior v0.7 — No.1481
- **設定変更**: 天井非搭載。AT/CZ用モード・短縮天井はNOT_APPLICABLE。PLUS累積ポイント/ステータスと成立済みボーナス状態の設定変更時契約は再探索後もUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井NOT_APPLICABLE。PLUS累積ポイント/ステータスと成立済みボーナス状態の据え置き時契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 天井NOT_APPLICABLE。PLUS累積ポイント/ステータスと成立済みボーナス状態の純電断固有契約はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: NOT_APPLICABLE。天井非搭載。
- **モード/状態**: AT/CZ用通常モード・朝一専用モードなし。通常時は小役払い出し1枚=1ptでPLUSポイントが累積し500ptごとに告知状態が上昇するが、リセット時の保持/初期化値は直接資料なし。
- **有利区間**: ノーマルAタイプの朝一有利区間狙いに関する機種固有公開情報を確認できず、実用上NOT_APPLICABLEとして保存。
- **朝一恩恵/不利**: 短縮天井・専用モード・CZ/AT優遇・設定変更専用ボーナス当選率は確認できず/該当なし。
- **変更判別**: PLUSランプ/セグは通常ポイント状態表示用途。設定変更確定表示としては使わない。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## 2022-02-21群の境界監査
- 一般新台カレンダー: 2/21に `SLOTマッピー`、`言い訳はさせないわよ！by激壇蜜` を確認。
- 業界一次記事: JPS×カツヨシ商事のPB `メルヘンクエスト` が2/21からメルヘンワールド各店へ導入と確認。
- P-WORLD、HAZUSE、パチ7、パチマガスロマガ系でメルヘンクエストの独立稼働・スペックを照合。
- PB/別名称・ベース型式 `Sオリスロ4AA` まで検索し、同一ベースの名称違いを別全国機として無制限に重複登録しない方針で、メルヘンクエストは実際のPB市場名称として独立登録。
- 2/28導入の明確な新規パチスロ群は今回の検索で確認できず。次の明確な本線群は3/7。
- status: **CLOSED**。後続QAで地域先行・別PB名称等の漏れが発見された場合は遡及追加する。

## 次回本線の再開地点
- **2022-03-07群のNo.1482候補 `パチスロ デビル メイ クライ 5` から処理。**
- 同日既知候補は少なくとも次の4機:
  1. `パチスロ デビル メイ クライ 5`
  2. `パチスロ蒼天の拳4`
  3. `Sルパン三世`
  4. `パチスロ TIGER ＆ BUNNY SP`
- 4機処理後、PB・別型式・地域先行・延期/段階導入を含めて2022-03-07群を再監査しCLOSED可否を判定する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1481追加 commit: `07077078d74239029df8ae21f0c1be73ed7b3876`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1481 メルヘンクエスト
- https://web-greenbelt.jp/post-56150/
- https://pachinko-curation.com/28698/
- https://www.p-world.co.jp/machine/database/9589
- https://hazuse.com/machine/pachislot/SX0044/
- https://hazuse.com/machine/pachislot/SX0044/genre/201/
- https://pachiseven.jp/machines/6501
- https://pachiseven.jp/machines/6501/cutout/8
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/48/kh02.php
- https://www.slopachi-quest.com/article/meruhenkuesuto-settei/
- https://chonborista.com/slot/jps-slot/134601/

### 2022-02-21群境界 / 次回2022-03-07群
- https://ichikatsu.com/newslot2022/
- https://web-greenbelt.jp/post-56150/
- https://news.p-world.co.jp/articles/19753/nippon
- https://pachiseven.jp/machines/6488/cutout/7
- https://hazuse.com/machine/pachislot/1S1307/
