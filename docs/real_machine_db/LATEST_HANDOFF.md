# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **725**
- latestMachineAdded: **パチスロ「あしたのジョー」2**（タイヨーエレック）
- latestRecord: `docs/real_machine_db/machines/2013-04-01_ashita-no-joe-2.md`
- chronologicalFrontier: **2013-04-01**
- frontierLatestExactDateMachine: **パチスロ「あしたのジョー」2**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-04-01_GROUP__NEXT_SUPER_SHIO_30**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-04-01_antonio-inoki-ga-densetsu-ni-suru-pachislot-ki.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **724** / chronologicalFrontier **2013-04-01** / 04-01群OPEN。
- repo検索で「あしたのジョー2」未登録を確認後、性能コアとresetBehavior v0.7を同時収集し **725件目**として追加。

## 今回追加 — パチスロ「あしたのジョー」2

### 性能コア

- releaseDate: **2013-04-01**。サミーネットワークス/タイヨーエレック系発表で「2013年4月1日からホール導入開始」を直接確認。
- 別の同社アプリ告知には「2013年3月にホール導入」、当時販売記事には「3月31日～納品予定」があり、平均せず定義/表記差として保持。
- manufacturer: **タイヨーエレック**。
- systemType: **5号機 / AT特化 / 擬似ボーナス+セットストックAT**。
- 機械割: **97.4 / 99.3 / 101.7 / 104.7 / 107.7 / 112.1%**。
- JOE BONUS: **1/271.2 / 224.7 / 249.0 / 206.7 / 241.6 / 187.1**。
- JOE BATTLE ROAD: **1/461.8 / 478.8 / 472.1 / 437.8 / 376.2 / 395.6**。
- AT合算: **1/170.9 / 152.9 / 156.5 / 140.4 / 147.1 / 127.0**。
- 50枚ベース: **約32G/1000円**（当時販売業界系記事、単一系統扱い）。
- JBR: **1セット40G / 純増約+2.8枚/G**。
- JVR: **40G**、Victory Rush: **20G+α**。
- 天井: **通常A/B最大961G / 天国最大96G**。

### resetBehavior v0.7

- **設定変更で天井G数RESET**。
- 設定変更時はモード再セット。
- 公開されている設定1の設定変更後モード振り分け:
  - 通常A **90.8%**
  - 通常B **6.1%**
  - 天国 **3.1%**
- `ceilingAfterReset`: 固定の設定変更専用短縮天井は確認なし。選択モードに応じ通常A/Bなら最大961G、天国なら最大96G。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 朝一恩恵: 設定1では変更後 **3.1%で天国**。
- 朝一不利: 設定変更で前日天井進捗が消失し、深い前日ハマリの宵越し価値が失われる。
- 純据え置き時の天井G/モード/状態、単純電源OFF→ONの天井G/モード/状態/液晶、設定2～6の変更後モード振り分け、本機固有ガックンは、表記揺れ・メーカー・シリーズ名とreset検索語を組み替え、複数資料系統を横断したが直接契約を確定できず `UNVERIFIED_AFTER_RESEARCH`。推測補完していない。

### 品質注記 / CONFLICT

- releaseDate:
  - **2013-04-01** — 同社系発表で具体的ホール導入開始日を直接確認。
  - **2013年3月** — 後続の同社アプリ告知の月表記。
  - **2013-03-31～** — 当時販売記事の納品予定。
  - 本線キーは最も具体的なホール導入開始日 **2013-04-01**。平均しない。
- 型式名/検定番号は検索語を変えて再探索したが高信頼直接確認に至らず `UNVERIFIED_AFTER_RESEARCH`。

## 2013-04-01同日群

- **アントニオ猪木が伝説にするパチスロ機**（オリンピア） — 登録済み / 724件目。
- **パチスロ「あしたのジョー」2**（タイヨーエレック） — **今回登録 / 725件目**。
- **スーパーシオ-30**（パイオニア） — 既にK-Naviで2013-04-01を確認済み、repo未登録候補。次候補。
- 04-01群の全メーカー横断最終監査は未完了のため **OPEN**。

## 次回再開地点

1. **recordCount 725 / chronologicalFrontier 2013-04-01 / 04-01群OPEN** から開始。
2. まず **「スーパーシオ-30」（パイオニア）** の重複確認→性能コア→resetBehavior v0.7を本調査。
3. 追加後、04-01群を閉じる前に当時導入カレンダー、メーカー/業界記事、HAZUSE/K-Navi/P-WORLD系を再横断して同日漏れを最終監査。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### パチスロ「あしたのジョー」2

- サミーネットワークス / PR TIMES（2013-04-01ホール導入開始）: `https://prtimes.jp/main/html/rd/p/000000015.000002703.html`
- 4Gamer 同社発表転載: `https://www.4gamer.net/games/211/G021176/20130411063/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7013`
- 2-9伝説まとめ: `https://29den.com/ashitanojo2/`
- 当時販売記事（32G/1000円、納品予定3/31）: `https://ameblo.jp/slostar/entry-11465643877.html`
- 777TOWN機種紹介: `https://www.777town.net/explanation/slot_joe2.jsp`
- サミーネットワークス / PR TIMES（2013年3月表記CONFLICT）: `https://prtimes.jp/main/html/rd/p/000000027.000002703.html`
