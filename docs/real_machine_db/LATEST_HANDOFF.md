# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **717**
- latestMachineAdded: **ヴァン・ヘルシング ハンティングラッシュ**（藤商事）
- latestRecord: `docs/real_machine_db/machines/2013-02-18_van-helsing-hunting-rush.md`
- chronologicalFrontier: **2013-02-18**
- frontierLatestExactDateMachine: **ヴァン・ヘルシング ハンティングラッシュ**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-02-18_GROUP__AUDITED_2013-02-19_TO_2013-02-24__NEXT_2013-02-25_EVANGELION**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-18_metal-slug-3.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **716** / chronologicalFrontier **2013-02-18** / 02-18群OPEN / 次候補ヴァン・ヘルシング ハンティングラッシュ。
- repo検索で未登録を確認後、**717件目: ヴァン・ヘルシング ハンティングラッシュ（藤商事）** を追加。

## 今回追加 — ヴァン・ヘルシング ハンティングラッシュ

### 性能コア

- releaseDate: **2013-02-18**。K-Navi、HAZUSE一致。K-Navi 2013年2月新台導入カレンダーでも全国一斉導入開始日を2月18日と掲載。
- 型式名: **ヴァン・ヘルシングFSB** / 検定番号 **2S1210**。
- systemType: **5号機 / A+ART / リアルボーナス+継続率管理ART / G数上乗せ+セットストック**。
- 機械割主系列: **96.6 / 98.7 / 100.9 / 104.2 / 106.3 / 111.3%**。
- ART初当たり: **1/400.33 / 1/368.04 / 1/343.34 / 1/309.78 / 1/284.59 / 1/231.92**。
- VICTORY BONUS: **1/16384**、BIG合成 **1/840.21 → 1/780.19**、ボーナス合成 **1/799.22 → 1/744.73**。
- ボーナス+ART合算: **1/267.4 / 251.1 / 237.4 / 220.6 / 206.7 / 176.6**。
- 50枚ベース: パチマガスロマガ **約31.4～32.5G/1000円**。
- ART「HUNTING RUSH」: **1セット45G+α / 純増約+1.8枚/G / 継続率50・70・80・90%**。
- BIG / VICTORY BONUS: **平均約204枚**。
- 天井: **ボーナス＆ART間999G+α**。ドラキュラバトル前兆・DB中は天井G数に含まれない。天井ARTは高継続率選択が優遇される当時解析あり。

### resetBehavior v0.7

- 設定変更時: **天井消化G CLEAR / 内部モード移行抽選 / 時計内部値RESET**。
- 本機固有の重要挙動: 液晶左下の**時計は見た目上前日表示を引き継ぐが、内部的にはリセット**。時計表示だけで据え置き判別不可。
- 設定変更時液晶ステージ:
  - 前日がトランシルバニア/始まりの街なら表示を引継ぎ。
  - それ以外の特殊ステージならトランシルバニア開始。
- **電源OFF→ONのみでは内部状態一式を引き継ぐ**との当時解析を確認。したがって設定変更を伴わない据え置き+通常電断では、天井G/内部モード/時計内部進捗等を保持する契約として保存。
- 2-9伝説の一覧でも本機は `宵×`。同一覧定義は「設定変更で天井Gリセット」であり、電源OFFのみリセットを示す `宵××` ではないため上記と整合。
- 固定リセット短縮天井: **NONE_CONFIRMED**。
- 設定変更時モード具体振り分け、高確/超高確等の具体振り分け、リールガックンは検索語・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 品質注記

- パチマガスロマガ検索インデックスのPAYOUT設定1/2は `196.6% / 198.7%` と先頭桁崩れ。2013年当時別資料は96.6/98.7%、設定3～6の系列も連続するため `SEARCH_INDEX_LEADING_DIGIT_CORRUPTION` と判断し、実性能CONFLICTにはしない。
- ART初当たりはパチマガスロマガ精密値と当時天井解析値（1/400.8～1/231.2）に微差。平均せず丸め/解析差として両方保持。
- 後年実機ゲームセンター掲載の設定4～6機械割104.2/106.4/111.4%は主系列104.2/106.3/111.3%と0.1pt差。丸め差候補として注記。

## 2013-02-18同日群監査

K-Navi 2013年2月新台導入カレンダーの全国一斉導入開始日ベースで2013-02-18パチスロは以下3機種:

1. スカイガールズ～よろしく！ゼロ～（TAKASAGO） — **715件目 / 登録済み**。
2. メタルスラッグ3（SNKプレイモア） — **716件目 / 登録済み**。
3. ヴァン・ヘルシング ハンティングラッシュ（藤商事） — **717件目 / 今回登録**。

- 02-18群は **CLOSED**。
- 同カレンダー上、次のパチスロ全国一斉導入日は **2013-02-25**。したがって **02-19～02-24境界は監査済み**として扱う。

## 次回再開地点

1. **recordCount 717 / chronologicalFrontier 2013-02-18 / 02-18群CLOSED / 02-19～02-24監査済み** から開始。
2. **2013-02-25「パチスロ『EVANGELION』」（ビスティ）** を性能コア+resetBehavior v0.7で収集。最新mainで重複再確認してから追加。
3. 同日次候補は **2013-02-25「ハイサイ蝶特急2」（タイヨー）**。
4. 02-25群残存監査後にCLOSED判定し、次の日付群へ進む。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### ヴァン・ヘルシング ハンティングラッシュ
- K-Navi 機種ページ: `https://p-kn.com/slot/1800/`
- K-Navi 2013年2月新台導入カレンダー: `https://p-kn.com/calendar/201302/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1210/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6985`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/h.php`
- パチマガスロマガ 詳細確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/h-1.php`
- パチマガスロマガ 1000円あたりゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/c.php`
- パチマガスロマガ 機種INDEX: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/fuji_slot_13.php`
- 天井ハイエナ生活 当時解析/朝一設定変更: `https://macerate.seesaa.net/article/265748518.html`
- 2-9伝説 天井一覧: `https://2-9densetsu.com/blog-entry-311-html/`
- スロット専門ゲームセンター スパイダー（後年丸め照合）: `https://ameblo.jp/kenchan-retro/entry-12915030762.html`
