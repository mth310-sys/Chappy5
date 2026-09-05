# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **722**
- latestMachineAdded: **クランキーコレクション**（アクロス）
- latestRecord: `docs/real_machine_db/machines/2013-03-11_cranky-collection.md`
- chronologicalFrontier: **2013-03-11**
- frontierLatestExactDateMachine: **クランキーコレクション**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-03-11_GROUP__NEXT_AUDIT_2013-03-12_TO_03-17__KNOWN_ANCHOR_2013-03-18_SHIN_ONIMUSHA_SAIRIN**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-03-04_tensai-bakabon-unagiinu.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **721** / chronologicalFrontier **2013-03-04** / 03-04群CLOSED / 次工程「03-05〜03-10境界監査 → 03-11クランキーコレクション」。
- 2013-03-05〜03-10を具体日検索・当時系一覧・解析資料で再監査し、今回この境界に追加すべき具体日付き未登録5号機を確認できなかった。
- repo検索で「クランキーコレクション」の既存レコードなしを再確認後、**722件目として追加**。

## 今回追加 — クランキーコレクション

### 性能コア

- releaseDate: **2013-03-11**。K-Navi、HAZUSE、パチスロ解析ガイドで一致。ユニバーサル公式は2013年3月発売。
- manufacturer: **アクロス**。A PROJECT第1弾。
- formalModelName: **クランキーコレクションCL** / inspectionNumber: **2S1341**。
- systemType: **5号機 / ノーマル / ボーナス主体 / 高技術介入**。
- 通常機械割: **98.5 / 99.9 / 101.3 / 103.8 / 106.7 / 109.5%**。
- 完全攻略機械割: **100.5 / 102.0 / 103.4 / 106.0 / 109.0 / 111.9%**。
- BIG: **1/303.4 / 297.9 / 292.6 / 282.5 / 273.1 / 260.1**。
- REG: **1/385.5 / 372.4 / 364.1 / 360.1 / 331.0 / 315.1**。
- 合算: **1/169.8 / 165.5 / 162.2 / 158.3 / 149.6 / 142.5**。
- 50枚ベース: **約35〜38G/50枚**。後年整理/クランキー系整理で一致。
- BIG最大**335枚**、REG最大**129枚**。
- **天井機能非搭載**。

### resetBehavior v0.7

- ノーマルタイプでゲーム数天井・規定G解除・AT/ART通常モードを持たないため、`gameCounterReset` / `ceilingAfterReset` / `modeAfterReset` / `stateAfterReset` は朝一狙い用の持続要素として **NOT_APPLICABLE**。
- 設定変更専用の短縮天井・朝一専用モード・恩恵率は **NONE / NOT_APPLICABLE**。
- 純据え置き・電源OFF→ONでも、天井G・AT/ART状態の持越しという概念は **NOT_APPLICABLE_NORMAL_TYPE**。
- 一方、本機固有の**リールガックン、初期出目、ランプ、電断後リール挙動等による変更判別**は、「クランキーコレクション/クラコレ」「クランキーコレクションCL」「アクロス/ユニバーサル」「クランキー/A PROJECT」と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」を組み替えて再探索したが直接根拠を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 後継アクロス機のガックン仕様は流用していない。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 品質注記

- 完全攻略機械割は、パチマガスロマガ旧ページ・HAZUSE・P-WORLD・当時攻略資料が **100.5 / 102.0 / 103.4 / 106.0 / 109.0 / 111.9%** で一致。
- 一部後年整理資料に **100.2 / 101.7 / 103.1 / 105.7 / 108.7 / 111.6%** があるため `CONFLICT_FULL攻略_PAYOUT_RETROSPECTIVE` として平均せず保持。主表は複数当時系資料一致値を採用。

## 2013-03-11同日群

- **クランキーコレクション**（アクロス） — **722件目 / 今回登録**。
- 具体日検索、当時系一覧・解析サイトを追加監査し、今回同日導入として確定できる別の未登録5号機を確認できなかったため、**03-11群をCLOSED**。

## 次回再開地点

1. **recordCount 722 / chronologicalFrontier 2013-03-11 / 03-11群CLOSED** から開始。
2. **2013-03-12〜03-17境界を最終監査**し、具体日付き未登録パチスロがあれば古い順に追加。
3. 境界に未登録機がなければ、次の具体日付き既知アンカー **2013-03-18「新鬼武者 再臨」（ロデオ）**へ進む。K-Naviで2013-03-18導入を確認済み。
4. 03-18同日群は「新鬼武者 再臨」だけと決め打ちせず、他メーカー・表記揺れを含め同日候補を監査してからCLOSED判定する。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### クランキーコレクション
- ユニバーサル公式: `https://www.universal-777.com/product/slot/cranky_collection/`
- K-Navi: `https://p-kn.com/slot/1829/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1341/`
- HAZUSE 基本: `https://hazuse.com/machine/pachislot/2S1341/genre/201/`
- パチマガスロマガ旧ページ ボーナス/機械割: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/01/h.php`
- パチマガスロマガ旧ページ 小役/1000円項目: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/01/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7031`
- パチスロ解析ガイド: `https://pachislot-guide.net/2013/cranky-collection/`
- crankyseven: `https://crankyseven.com/crankycollection-pc.htm`
- 当時攻略資料 基本: `https://macerate.seesaa.net/article/343833222.html`
- 当時攻略資料 完全攻略: `https://macerate.seesaa.net/article/347254550.html`
- 後年A PROJECT整理資料: `https://www.pachislotblog.tokyo/across-series-setteihanbetsu/`
- pacnk: `https://pacnk.com/slot/2013/crankycollection/top.php`

### 次候補/境界
- 新鬼武者 再臨 K-Navi: `https://p-kn.com/slot/1822/`
