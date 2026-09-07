# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **960**
- latestRecordAdded: **十字架3**（ネット株式会社）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-07_jujika3.md`
- chronologicalFrontier: **2016-03-07**
- frontierLatestMachine: **十字架3**
- schema: **resetBehavior v0.7**
- status: **2016-03-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.959 `2016-03-07_tekken-3rd-angel-ver.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **959** / chronologicalFrontier **2016-03-07** / 03-07群OPEN。
- HANDOFF指定の次未処理 **「十字架3」** をNo.960で追加。

## No.960 — 十字架3
- record: `docs/real_machine_db/machines/2016-03-07_jujika3.md`
- manufacturer: **ネット株式会社（NET CORPORATION）**
- releaseDate: **2016-03-07**
- formalModelName: **十字架3/NE**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / AT / CZ**

### performanceCore
- 機械割: **97.5 / 98.6 / 100.5 / 103.9 / 107.7 / 112.1%**。
- AT「JKラッシュ」初当たり: **1/296 / 287 / 272 / 248 / 217 / 192**。
- 50枚ベース: **約44.7G**。
- AT純増: **約2.8枚/G**。
- AT初期枚数: 赤7 **100枚** / 白7 **200枚以上** / 十字架クロス **500枚以上** / フリーズ **1000枚保証**。
- 通常時天井: **961G以降〜最大999GでAT**。
- RCZモード最深: ハマリ896G / 通常768G / チャンス128G。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部モード再抽選 / 内部状態再抽選 / 液晶は峠ステージ**。
- 純電源OFF→ON: **内部天井CARRYOVER / モードCARRYOVER / 状態CARRYOVER / 液晶は峠ステージ（AT中以外） / 見た目ゲーム数カウンタRESET**。
- 据え置きは内部進捗・モード・状態を引継ぐ扱い。純電源OFF→ON比較から支持するが、「据え置き」と明記した独立直接表は今回固定できず、レコードにその信頼度差を明記。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 公開朝一数値
設定変更時 / AT終了時 RCZモード移行率:
- 設定1: ハマリ64.06 / 通常10.16 / チャンス25.78%
- 設定2: 32.03 / 53.13 / 14.84%
- 設定3: 52.34 / 16.41 / 31.25%
- 設定4: 24.22 / 50.00 / 25.78%
- 設定5: 39.84 / 16.41 / 43.75%
- 設定6: 25.00 / 37.50 / 37.50%

設定変更時内部状態（全設定共通）:
- 低確 **50.00%**
- 通常 **39.84%**
- 高確 **10.16%**

### 朝一恩恵 / 不利 / 判別
- チャンスモードなら **128G以内RCZ**。設定1でも25.78%、設定5では43.75%。
- 高確スタートは10.16%。
- 一方で設定1はハマリモード64.06%で、固定短縮天井もないため強い一律リセット恩恵とはしない。
- 設定変更で前日天井進捗は消去されるため、深い前日ハマリに対しては宵越し期待を失う不利がある。
- 設定変更・純電断とも峠ステージ開始があり得るので、峠単独では変更判別不可。
- メーカー保証の本機固有ガックン/初期出目/ランプ確定判別は十分再探索後も固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### conflicts
- 主流解析は設定6 **AT 1/192 / 機械割112.1%**。アタリ7は **約1/201 / 110.0%**。平均せず `CONFLICT_SETTING6_PERFORMANCE_192_112_1_VS_201_110_0` を保存。
- 全設定平均モード表の39.6/30.6/29.8%と、一撃の丸め40/31/30%は平均/丸め定義として分離し、canonicalは設定別テーブル。

## 2016-03-07群監査
処理済み:
1. **パチスロ鉄拳3rd エンジェルVer.** — 山佐 — No.959
2. **十字架3** — NET — No.960

今回、以下を横断:
- NET公式プレス/K-Navi/パチビー/必勝本/一撃の03/07導入情報
- 「2016年3月7日」「2016-03-07」「パチスロ」「新台」「導入」で日付指定検索
- 当時2016年3月の解析記事一覧・新台記事

03/07全国初導入として新たに固定できる未登録本線機種を今回追加確認できなかったため、statusを **CLOSED_FOR_CURRENT_RESEARCH** とする。

## ユルビスカス-30 日付監査 — 継続注意
- パチビーには **2016-02-22導入** 表記あり。
- パイオニア公式製品一覧は **2016年3月発売**。
- グリーンべると2016-02-08当時記事は **3/13より納品（沖縄は2/21）**。
- パチ7後年整理は **2016-03-14導入**。
- よって02/22全国本線には戻さず、**沖縄先行2/21 + 全国3/13納品/3/14導入系**をcanonical候補として保持。
- 3/14群到達時に `CONFLICT_RELEASE_DATE_DATABASE_0222_VS_OFFICIAL_INDUSTRY_MARCH` として正式レコード化する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaNextInspection: **2006-02_crash-bandicoot-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規時系列前進を優先し、遡及QA地点は変更していない。

## 次回再開地点
1. **recordCount 960 / chronologicalFrontier 2016-03-07 / 03-07群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.960をmainから再取得。
3. **2016-03-08〜03-13境界**を再確認し、全国初導入日の未登録本線がなければ次の具体日 **2016-03-14** へ進む。
4. 03/14群ではまず **「ユルビスカス-30」（パイオニア）** を、沖縄2/21・パチビー2/22・全国3/13納品・3/14導入の競合を整理して性能コア + resetBehavior v0.7で正式登録する。
5. ユルビスカス-30処理後、03/14群を全メーカー横断監査して追加未処理機を拾う。
6. 遡及QAは `2006-02_crash-bandicoot-s.md` から継続。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と一部地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 検定日/認定日/発表日/納品予定日/設置期限起点日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### No.960 十字架3
- NET公式発売プレス: https://www.dreamnews.jp/press/0000125460/
- NET公式導入前夜祭: https://www.dreamnews.jp/press/0000127610/
- NET公式アプリ: https://www.net-fun.co.jp/app/1804
- 必勝本: https://p.hisshobon.jp/machine/2704/1/55950
- 一撃 機種: https://1geki.jp/slot/jyujika3/
- 一撃 reset: https://1geki.jp/slot/jyujika3/3/
- 一撃 CZモード: https://1geki.jp/slot/jyujika3/45/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/jujika3-reset/
- 期待値見える化: https://slotjin.com/zone/juujika3/
- P-WORLD: https://www.p-world.co.jp/machine/database/7965
- K-Navi: https://p-kn.com/slot/2438/
- パチビー: https://www.pachibee.jp/machines/movie/216010012
- ちょんぼりすた: https://chonborista.com/slot/net-slot/16357/comment-page-2/
- アタリ7 conflict: https://www.atari7.com/slot/date1453184122.php
- 型式名流通資料: https://store.shopping.yahoo.co.jp/nakaiticom/640.html

## confidence
- No.960 identity/releaseDate: **OFFICIAL_PLUS_HIGH_MULTI_SOURCE**
- No.960 formalModelName: **SECONDARY_USED_MACHINE_DIRECT**
- No.960 certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- No.960 performanceCore: **OFFICIAL_SETTING1_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.960 resetSettingChange: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.960 resetNumericData: **ANALYSIS_HIGH_PERIOD_DIRECT**
- No.960 powerCycle: **ANALYSIS_HIGH_DIRECT**
- No.960 resetDetection: **ANALYSIS_HIGH_NEGATIVE_FINDING_NOT_MANUFACTURER_GUARANTEED**
- 03/07 boundary completeness: **CLOSED_FOR_CURRENT_RESEARCH**
