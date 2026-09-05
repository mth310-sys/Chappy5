# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **721**
- latestMachineAdded: **パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！**（D-light）
- latestRecord: `docs/real_machine_db/machines/2013-03-04_tensai-bakabon-unagiinu.md`
- chronologicalFrontier: **2013-03-04**
- frontierLatestExactDateMachine: **パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-03-04_GROUP__NEXT_AUDIT_2013-03-05_TO_03-10__KNOWN_ANCHOR_2013-03-11_CRANKY_COLLECTION**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-03-04_zettai-shogeki-ii.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **720** / chronologicalFrontier **2013-03-04** / 03-04群OPEN / 次候補「パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！」。
- repo検索で候補の既存レコードなしを再確認後、**721件目として追加**。

## 今回追加 — パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！

### 性能コア

- releaseDate: **2013-03-04**。パチビーが具体日を直接掲載。
- manufacturer: **D-light**。
- systemType: **5号機 / ボーナス+ART / 自力CZ / ゲーム数上乗せ+セットストック**。
- 機械割: **96.4 / 98.1 / 100.0 / 103.0 / 108.4 / 112.0%**。P-WORLD、5号機クロニクル等で一致。
- BIG: **1/399.6 / 385.5 / 372.4 / 356.2 / 341.4 / 327.7**。
- REG: **1/712.4 / 712.4 / 712.4 / 655.4 / 655.4 / 655.4**。
- ART初当たり: **1/485.3 / 454.2 / 440.7 / 400.5 / 349.6 / 319.0**。
- ボーナス合算: **1/256.0 / 250.1 / 244.5 / 230.8 / 224.4 / 218.5**。
- 50枚ベース: 表記揺れ・1K/1000円/コイン持ち等で再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- ART「ハチャメチャRUSH」: **1セット41G+α / 純増約+1.5枚/G**。
- BIG約**204枚**、REG約**48枚**。
- 天井: **ボーナスまたはART終了後888G**でART、当時資料では**2セット以上**。

### resetBehavior v0.7

- **設定変更時**: 天井ゲーム数進捗を **CLEAR_CONFIRMED**。当時攻略資料2系統で確認。
- **据え置き時**: 天井G/内部状態/天才モードの保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- **電源OFF→ONのみ**: 天井G/内部モード・状態/液晶ステージの保持・再抽選は **UNVERIFIED_AFTER_RESEARCH**。
- 当時資料の「宵越し不可」は「設定変更で天井Gがリセットされるため」と説明されているため、これを単純電断仕様へ拡張していない。
- 設定変更後の通常最大天井は通常天井値の **888G**。設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用のモード振り分け、状態振り分け、朝一専用モード/恩恵率は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更により前日天井進捗を失うことを主要な朝一不利要素として保存。
- ガックン/初期出目/液晶等の本機固有変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 品質注記

- 導入時期: パチビー **2013-03-04** vs 5号機クロニクル **2013/2**。平均せず `CONFLICT_RELEASE_PERIOD_2013_02_VS_2013_03_04`。本線時系列キーは具体日資料を優先。
- パチマガスロマガ旧ページの検索表示に設定1/2機械割 `196.4 / 198.1%` と出る箇所があるが、P-WORLD・5号機クロニクル等の **96.4 / 98.1%** と後続設定系列が一致するため、`SOURCE_TEXT_LEADING_DIGIT_CORRUPTION` として性能CONFLICTとは分離。

## 2013-03-04同日群

- **絶対衝激II**（アリストクラートテクノロジーズ） — 720件目 / 登録済み。
- **パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！**（D-light） — **721件目 / 今回登録**。
- 具体日検索、当時系一覧・解析サイトを再監査し、今回この2機種以外の2013-03-04導入パチスロを追加確認できなかったため、**03-04群をCLOSED**。

## 次回再開地点

1. **recordCount 721 / chronologicalFrontier 2013-03-04 / 03-04群CLOSED** から開始。
2. **2013-03-05〜03-10境界を最終監査**し、具体日付き未登録パチスロがあれば古い順に追加。
3. 境界に未登録機がなければ、次の具体日付き既知アンカー **2013-03-11「クランキーコレクション」（アクロス）**へ進む。HAZUSE/解析ガイドで2013-03-11導入を確認済み。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### パチスロ天才バカボン
- パチビー: `https://www.pachibee.jp/movies/index/9095`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6982`
- パチマガスロマガ旧ページ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/02/a.php`
- パチマガスロマガ旧ページ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/02/l.php`
- 5号機クロニクル D-light: `https://5goki.com/daiichi`
- 当時攻略資料 天井/設定変更: `https://macerate.seesaa.net/article/342837505.html`
- 当時攻略資料 天井/設定変更照合: `https://mezase20.com/blog-entry-790.html`
- A-SLOT スペック照合: `https://www.a-slot.com/SHOP/dlight_3.html`

### 次候補/境界
- クランキーコレクション HAZUSE: `https://hazuse.com/machine/pachislot/2S1341/genre/201/`
- クランキーコレクション 解析ガイド: `https://pachislot-guide.net/2013/cranky-collection/`
