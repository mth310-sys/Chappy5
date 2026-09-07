# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **959**
- latestRecordAdded: **パチスロ鉄拳3rd エンジェルVer.**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-07_tekken-3rd-angel-ver.md`
- chronologicalFrontier: **2016-03-07**
- frontierLatestMachine: **パチスロ鉄拳3rd エンジェルVer.**
- schema: **resetBehavior v0.7**
- status: **2016-03-07_GROUP_OPEN_WITH_YURUBISCUS_DATE_CONFLICT_AUDIT_NOTED**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.958 `2016-02-22_nisemonogatari.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **958** / chronologicalFrontier **2016-02-22** / 02-22群CLOSED。
- 02/23以降を境界監査し、HAZUSE新台カレンダーでは次の全国導入日群が **2016-03-07**。
- 03/07群の最初の未処理として **「パチスロ鉄拳3rd エンジェルVer.」** をNo.959で追加。

## No.959 — パチスロ鉄拳3rd エンジェルVer.
- record: `docs/real_machine_db/machines/2016-03-07_tekken-3rd-angel-ver.md`
- manufacturer: **山佐（YAMASA）**
- releaseDate: **2016-03-07**
- formalModelName: **パチスロ鉄拳3エンジェルバージョン／EE**
- certificationNumber: **5S0996**
- generation/system: **5号機 / リアルボーナス + AT / CZ**

### performanceCore
- 機械割: **96.9 / 98.3 / 99.7 / 102.0 / 105.5 / 110.2%**。
- 鉄拳CHALLENGE: **1/84.1 / 84.1 / 84.1 / 83.7 / 82.6 / 82.0**。
- AT初当たり: **1/751.6 / 725.9 / 681.3 / 623.0 / 554.9 / 483.2**。
- 50枚ベース: **約23G**（23.1G表記あり）。
- AT純増: **約2.4枚/G**。ボーナス込み約2.7枚/G表記は定義分離。
- 鉄拳CHALLENGE: **約85枚**。
- AT「神鉄拳RUSH」: 次回ボーナスまで継続、ボーナス後デビルバトル勝利で継続。
- ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- 設定変更: **内部モードRESET/再抽選、内部状態RESET/再抽選**。
- 据え置き・純電源OFF→ON: **内部モードCARRYOVER / 内部状態CARRYOVER**。
- 設定変更後内部状態: **低確75% / 高確25%（全設定共通）**。
- 設定変更時モード振り分け:
  - 設定1: A56.3 / B12.5 / C6.3 / D25.0%
  - 設定2: A56.3 / B25.0 / C6.3 / D12.5%
  - 設定3: A56.3 / B12.5 / C6.3 / D25.0%
  - 設定4: A53.1 / B18.8 / C9.4 / D18.8%
  - 設定5: A53.1 / B12.5 / C9.4 / D25.0%
  - 設定6: A37.5 / B31.3 / C15.6 / D15.6%
- 設定1でもモードC以上 **31.3%**、高確 **25%** で朝一恩恵あり。
- 天井非搭載のため gameCounterReset / ceilingAfterReset は **NOT_APPLICABLE**。
- ガックンは当時実戦情報で「ほぼしない?/判別困難」。メーカー保証の確定判別にはしない。
- 演出モードは設定変更時エンジェルモード、電源入切では引継ぎとする解析あり。朝一エンジェルモード以外なら据え置き濃厚とする資料あり。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts
- PiDEA 2016-01-29内覧会記事はボーナス確率「全設定共通1/184」と記載する一方、後続解析は約1/84で一致。推測修正せず `CONFLICT_EARLY_INDUSTRY_BONUS_RATE_1_184_VS_LATER_ANALYSIS_1_84` を保存。
- パチビー/P-WORLDのカテゴリ表示に「天井あり」が残る一方、後続複数解析は天井非搭載で一致。canonicalは非搭載、`CONFLICT_DATABASE_CATEGORY_CEILING_FLAG` を保存。

## 2016-02-23〜03-06境界
- HAZUSE新台カレンダーでは2016年2月の本線導入日群は02/22まで、次は03/07。
- 日付指定検索でも02/23〜03/06に全国初導入日を固定できる未登録本線を今回確認できず。
- status: **CLOSED_FOR_CURRENT_RESEARCH**。

## ユルビスカス-30 日付監査
- パチビーには **2016-02-22導入** 表記があるため漏れ候補として再監査。
- しかしパイオニア公式製品一覧は **2016年3月発売**。
- グリーンべると2016-02-08当時記事は **3/13より納品（沖縄は2/21）** と明記。
- パチ7後年整理は **2016-03-14導入**。
- よって02/22全国本線には追加せず、**沖縄先行2/21 + 全国3/13納品/3/14導入系**をcanonical候補として保持。
- 次回以降、3/14群到達時に正式レコード化する際、この02/22表記を `CONFLICT_RELEASE_DATE_DATABASE_0222_VS_OFFICIAL_INDUSTRY_MARCH` として保存する。

## 2016-03-07群 — OPEN
処理済み:
1. **パチスロ鉄拳3rd エンジェルVer.** — 山佐 — No.959

次候補:
1. **十字架3** — NET — メーカー系プレス/パチビー/K-Naviで2016-03-07全国導入を確認済み。

- 十字架3処理後、03/07群を全メーカー横断で再監査し、追加未処理機を拾ってからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaNextInspection: **2006-02_crash-bandicoot-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規時系列前進を優先し、遡及QA地点は変更していない。

## 次回再開地点
1. **recordCount 959 / chronologicalFrontier 2016-03-07 / 03-07群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.959をmainから再取得。
3. 次の未処理 **「十字架3」（NET）** を性能コア + resetBehavior v0.7で収集する。
4. 十字架3のメーカー系プレスは2016-03-07全国導入予定を明記。パチビー/K-Naviも03-07で一致。
5. 十字架3処理後、2016-03-07群を全メーカー横断監査して追加機を確認する。
6. **ユルビスカス-30** は02/22へ戻して登録しない。3/14群到達時に、沖縄2/21・全国3/13納品・3/14導入・パチビー2/22の競合を整理して登録する。
7. 遡及QAは `2006-02_crash-bandicoot-s.md` から継続。
8. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
9. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と一部地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 検定日/認定日/発表日/納品予定日/設置期限起点日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### No.959 パチスロ鉄拳3rd エンジェルVer.
- HAZUSE: https://hazuse.com/machine/pachislot/5S0996/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/5S0996/genre/209/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E9%89%84%E6%8B%B3%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%ABVer%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- グリーンべると: https://web-greenbelt.jp/00008400/
- P-WORLD: https://www.p-world.co.jp/machine/database/7966
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/tekken-angel-reset/
- スロがち.COM: https://slogati.com/tekken-angel/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/16561/
- 必勝本: https://p.hisshobon.jp/machine/2701/1/56810

### ユルビスカス-30日付監査
- パイオニア公式製品一覧: https://www.slot-pioneer.co.jp/products/2016.html
- パイオニア発売告知: https://www.slot-pioneer.co.jp/information/yurubiscus.html
- グリーンべると: https://web-greenbelt.jp/00008412/
- パチビー: https://www.pachibee.jp/movies/index/12453
- パチ7: https://pachiseven.jp/articles/detail/11686

### 03/07次候補 十字架3
- NET系プレス: https://www.dreamnews.jp/press/0000127610/
- K-Navi: https://p-kn.com/slot/2438/

## confidence
- No.959 identity/releaseDate: **HIGH_MULTI_SOURCE_PERIOD**
- No.959 performanceCore: **INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.959 resetSettingChange: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.959 resetNumericData: **ANALYSIS_HIGH_PERIOD_DIRECT**
- No.959 powerCycle: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.959 resetDetection: **ANALYSIS_PERIOD_NOT_MANUFACTURER_GUARANTEED**
- 02/23〜03/06 boundary completeness: **CLOSED_FOR_CURRENT_RESEARCH**
- yurubiscus release-date audit: **CONFLICT_WITH_OFFICIAL_INDUSTRY_MARCH_WEIGHTED_HIGHER_THAN_DATABASE_0222**
