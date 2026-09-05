# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **719**
- latestMachineAdded: **ハイサイ蝶特急2**（タイヨー）
- latestRecord: `docs/real_machine_db/machines/2013-02-25_haisai-cho-tokkyu-2.md`
- chronologicalFrontier: **2013-02-25**
- frontierLatestExactDateMachine: **ハイサイ蝶特急2**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-02-25_GROUP__NEXT_2013-03-04_ZETTAI_SHOGEKI_II**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-25_evangelion-art.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **718** / chronologicalFrontier **2013-02-25** / 02-25群OPEN / 次候補「ハイサイ蝶特急2」。
- repoコード検索で「ハイサイ蝶特急2」既存レコードなしを確認後、**719件目として追加**。

## 今回追加 — ハイサイ蝶特急2

### 性能コア

- releaseDate: **2013-02-25**。K-Naviとパチ＆スロ必勝本一致。グリーンべると2013-01-17業界記事は2/24納品予定で整合。
- 型式名: **ハイサイ蝶特急2** / 検定番号 **2S1296**（P-WORLD後年DB）。
- systemType: **5号機 / BR非搭載 / 規定ゲーム数管理 / ゲーム数上乗せART**。
- 機械割: **95.1 / 96.0 / 98.5 / 100.2 / 105.1 / 109.7%**。
- 蝶特急モード: **1/639.7 / 394.2 / 347.2 / 280.6 / 313.0 / 257.6**。
- ハイサイチャンス: **1/94.3 / 85.2 / 95.1 / 82.9 / 92.4 / 84.1**。
- ART合算: **1/82.2 / 70.1 / 74.7 / 64.0 / 71.3 / 63.4**。
- 50枚ベース: **32.5G/1000円**（パチマガスロマガ直接値）。
- 蝶特急モード: **40G+α / 純増約+2.96枚/G**。
- ハイサイチャンス: **5G固定 / 平均約20枚**。
- 蝶特急モード: 業界発表で**平均約300枚**。
- 通常最大天井: **128G**。AT終了後ハズレ目出現からカウントし、到達時**超確変**。
- 別天井: **24回連続HC → 24回目HC終了後1G目 蝶特急モード確定**。

### resetBehavior v0.7

- **設定変更時: 天井までのゲーム数を再セット / モードを再セット**。
- **電源OFF→ONのみ: 天井Gを引継ぎ / モードを引継ぎ / 7セグ表示のみ再セット**。
- 据え置き+通常電断は上記電源OFF→ON直接仕様から、内部天井進捗・モード保持として保存。
- 設定変更時モード振り分け（通常A / 天国）:
  - 設定1: **90.0 / 10.0%**
  - 設定2: **87.0 / 13.0%**
  - 設定3: **82.0 / 18.0%**
  - 設定4: **80.0 / 20.0%**
  - 設定5: **75.0 / 25.0%**
  - 設定6: **70.0 / 30.0%**
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED**。
- モード以外の独立高確/低確等の設定変更時状態振り分け、リールガックン/初期出目は検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 朝一/変更判別

- 設定変更で前日天井進捗は消えるため、宵越し128G天井進捗は失われる。
- 設定変更後は天国選択率が**10～30%**あり朝一の早い当選期待を持つ。
- 電源OFF→ONだけでも7セグ表示は再セットされるため、**朝一7セグ初期化だけでは設定変更判別不可**。
- ガックン等の本機固有変更判別は十分再探索後も未確認。

## 2013-02-25同日群監査

K-Navi 2013年2月全国一斉導入カレンダーの02-25パチスロは以下2機種:

1. パチスロ「EVANGELION」（ビスティ） — **718件目 / 登録済み**。
2. ハイサイ蝶特急2（タイヨー） — **719件目 / 今回登録**。

- K-Naviの同月カレンダー上、02-25パチスロはこの2機種のみ。
- EVANGELIONはK-Navi等、ハイサイ蝶特急2はK-Navi+業界記事+必勝本で導入日/納品時期を照合。
- 02-25群は **CLOSED**。
- 02-26～03-03のK-Navi全国一斉導入カレンダー上にパチスロ導入日はなく、次の具体導入日は **2013-03-04**。

## 次回再開地点

1. **recordCount 719 / chronologicalFrontier 2013-02-25 / 02-25群CLOSED** から開始。
2. **2013-03-04「絶対衝激II」（アリストクラート）** を性能コア+resetBehavior v0.7で収集。最新mainで重複再確認してから追加。
3. 同日群には **「パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！」（D-light）** もあるため、その後連続処理。
4. 03-04群残存をK-Navi以外のメーカー/業界一覧でも監査し、漏れがなければCLOSED。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### ハイサイ蝶特急2
- K-Navi: `https://p-kn.com/slot/1795/`
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
- グリーンべると 2013-01-17: `https://web-greenbelt.jp/00000729/`
- パチ＆スロ必勝本 機種TOP: `https://p.hisshobon.jp/machine/2157`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2157/1/38524`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2157/1/38758`
- パチ＆スロ必勝本 モード移行率: `https://p.hisshobon.jp/machine/2157/1/38848`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/76/a.php`
- パチマガスロマガ 小役確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/76/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6980`
- 後継回顧確認 グリーンべると 2014-04-22: `https://web-greenbelt.jp/00006182/`

### 次候補/境界
- K-Navi 2013年3月新台カレンダー: `https://p-kn.com/calendar/201303/`
