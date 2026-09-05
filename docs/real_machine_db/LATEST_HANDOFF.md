# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **705**
- latestMachineAdded: **秘宝伝 ～太陽を求める者達～**（大都技研）
- latestRecord: `docs/real_machine_db/machines/2012-12-03_hihouden-taiyo-wo-motomeru-monotachi.md`
- chronologicalFrontier: **2012-12-03**
- frontierLatestExactDateMachine: **秘宝伝 ～太陽を求める者達～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-12-03_GROUP__AUDIT_REMAINING_BEFORE_ADVANCE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-12-03_biohazard-5.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **704** / chronologicalFrontier **2012-12-03** / 12-03群OPEN / 次候補「秘宝伝 ～太陽を求める者達～」。
- repo重複検索で「秘宝伝 ～太陽を求める者達～」既存レコードなしを確認。
- **705件目: 秘宝伝 ～太陽を求める者達～（大都技研）** を登録。

## 今回追加 — 秘宝伝 ～太陽を求める者達～

### 性能コア

- releaseDate: **2012-12-03**。K-Navi・パチビー一致。グリーンべるとは12/02納品開始で、納品日とホール導入日の定義差として保持。
- systemType: **5号機 / ART / 擬似ボーナス + CZ / ゲーム数上乗せ型**。
- 秘宝RUSH: **1セット40G+α / 純増約+2.8枚/G**。
- 秘宝RUSH初当たり: **1/537.4 / 1/495.1 / 1/452.8 / 1/388.8 / 1/353.0 / 1/313.0**。
- 擬似ボーナス初当たり: **1/286.5 / 1/282.7 / 1/278.6 / 1/272.9 / 1/272.0 / 1/248.1**。
- ボーナス+ART合算: **1/186.9 / 1/180.0 / 1/172.5 / 1/160.3 / 1/153.6 / 1/138.4**。
- 擬似BIG: **約150 / 200 / 300枚**、REG: **約40～45枚**。
- 天井: 第一 **ボーナスまたはART後999G→無限高確率**、第二 **ボーナス間1599G→ボーナス+超秘宝RUSH**。
- 50枚ベースは名称/略称/メーカー×50枚/1000円/ベース/コイン持ち/回転数で再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。2025年スマスロ版の約32G/50枚は流用しない。

### 機械割CONFLICT

- 系列A: **97.5 / 98.8 / 101.7 / 104.7 / 108.2 / 113.4%**。
- 系列B: **96.5 / 98.1 / 100.1 / 104.7 / 108.2 / 113.3%**。
- 設定1～3は丸め差では説明しにくいため平均せず `CONFLICT` として双方保存。

### resetBehavior v0.7

- `settingChangeBehavior`: **設定変更で天井Gリセット**。朝一設定変更時は内部状態の公開再抽選表あり。
- `gameCounterReset`: 設定変更 **CLEAR**。据え置きと純電断は高信頼の直接契約を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- `ceilingAfterReset`: 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `stateAfterReset`:
  - 設定1～3: **昼75.0% / 夕22.5% / 夜2.5%**
  - 設定4～5: **昼60.0% / 夕30.0% / 夜10.0%**
  - 設定6: **昼50.0% / 夕35.0% / 夜15.0%**
- `resetBenefits`: 設定6は夕以上 **50.0%**、設定1～3は夕以上 **25.0%**。高設定ほど朝一高状態率が高い。
- `resetPenalties`: 設定変更で前日天井進捗を失うため宵越し第一/第二天井狙いに不利。
- `modeAfterReset`: 設定変更時のモード移行率が設定推測要素になる当時番組資料は確認したが、伝説モード等の具体的公開数値は今回確定できず `UNVERIFIED_AFTER_RESEARCH`。
- `carryOverBehavior` / `powerCycleBehavior`: 天井・内部状態・伝説モードの完全な直接契約は今回未確定。朝一クレアランプ点灯を「据え置き確定」と扱った2013年実戦例はあるが、解析契約には昇格させず `PERIOD_USER_REPORT_ONLY`。
- `resetDetection`: クレアランプが高確率/伝説モード示唆であること自体はK-Naviで確認。ガックン・初期出目等は再探索後も未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

## CONFLICT / 注意

- 機械割は97.5～113.4%系列と96.5～113.3%系列が競合。平均化しない。
- REG純増は約40枚/約45枚。ベルナビ8回は一致しており、丸め/算出差候補として幅を保持。
- 据え置き/電源OFF→ONは、設定変更の反対を推測で埋めていない。
- 2025年スマスロ「秘宝伝」は別機種。ベースやリセット短縮天井を2012年版へ混入させない。

## 2012-12-03同日群

- **バイオハザード5** 登録済み。
- **秘宝伝 ～太陽を求める者達～** 登録済み。
- 「ホール導入開始 2012-12-03」「導入日 2012-12-03」を除外語付きで再検索した範囲では、今回この2機種以外の具体的同日候補を追加確認できなかった。
- ただし全機種方針のため12/03群は即CLOSEDにせず、次回にHAZUSE新台カレンダー / P-WORLD 2012年12月一覧 / K-Navi / パチビー / 当時業界一覧をもう一段監査してから閉じる。
- 12/03より後の既知アンカーとして **2012-12-17 SLOT牙狼（エレコ）** を確認済み。12/04～12/16に未登録機がないか境界監査してから進む。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 705 / chronologicalFrontier 2012-12-03 / 12-03群OPEN** から開始。
2. 12/03同日群をHAZUSE新台カレンダー、P-WORLD 2012年12月一覧、K-Navi、パチビー、当時業界/メーカー資料で最終監査。
3. 未登録の12/03機がなければ12/03群をCLOSEDにし、**2012-12-04～12-16境界**を導入日順に監査。
4. 境界に未登録機がなければ既知アンカー **2012-12-17「SLOT牙狼」（エレコ）** をrepo重複確認→性能コア＋resetBehavior v0.7調査→次レコードとして登録。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### 秘宝伝 ～太陽を求める者達～
- K-Navi: `https://p-kn.com/slot/1748/`
- K-Navi ボーナス＆ART確率: `https://p-kn.com/slot/1748/41909/`
- グリーンべると: `https://web-greenbelt.jp/00001670/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6901`
- パチビー: `https://www.pachibee.jp/movies/index/8701`
- 2-9伝説系整理: `https://29den.com/hihouden-taiyo/`
- crankyseven: `https://crankyseven.com/hihouden-taiyo-pc.htm`
- スロット動画TV 2013-02: `https://rinfinity777.livedoor.blog/archives/2013-02.html`
- VideoMarket パチスロ最強伝説G #535: `https://www.videomarket.jp/title/082220/A082220003999H01`
- K-Navi クレアランプ: `https://p-kn.com/slot/1748/41814/`
- 2013年実戦記録: `https://ameblo.jp/s6tto/entry-11561818782.html`
- スロパチクエスト: `https://www.slopachi-quest.com/article/hihouden-taiyo/`

### 境界監査 / 次候補
- HAZUSE 新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- P-WORLD 新台スケジュール: `https://www.p-world.co.jp/database/machine/introduce_calendar.cgi/1000%3Ftype%3DPachi%26year_month%3D2026-01`
- パチビー SLOT牙狼: `https://www.pachibee.jp/movies/index/8742`
