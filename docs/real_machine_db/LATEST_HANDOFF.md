# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **518**
- latestMachineAdded: **極お父さん ～舞い降りた天使???～**（SNKプレイモア / 2010-10-04）
- latestRecord: `docs/real_machine_db/machines/2010-10-04_hyper-otousan.md`
- chronologicalFrontier: **2010-10-04**
- frontierLatestMachine: **極お父さん ～舞い降りた天使???～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **517** / chronologicalFrontier **2010-10-04** / latestMachineAdded **ロケットパニック**。
- 2010-10-04同日群を継続し、repo未登録の**極お父さん ～舞い降りた天使???～**を518件目として追加。
- 既登録性能値は再調査せず、新規対象の性能コア＋resetBehavior v0.7に限定して収集した。

## 518 — 極お父さん ～舞い降りた天使???～

- メーカー: **SNKプレイモア**
- ホール導入開始: **2010-10-04**（K-Navi）
- 月粒度別資料: **2010/9**（5号機クロニクル）
- 世代/タイプ: **5号機 / A+ART / ボーナス+RT+ART**
- 型式: **ハイパーオトウサンD**
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 機械割主系列: **96.8 / 98.6 / 100.2 / 105.4 / 110.1 / 115.2%**
- 機械割設定2: 後年回顧記事のみ **96.6%** → `CONFLICT`、平均化しない
- BIG: **1/331.0 → 1/287.4**
- REG: **1/496.5 → 1/376.6**
- ART初当たり: **1/561.6 → 1/312.5**（設定ごと非単調）
- 50枚/1000円: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **約200枚** / REG: **約50枚**
- RT「追跡モード」: **30G / 約+0.1枚/G**
- ART「バトルチャンス」: **30G / 約+1.2枚/G / 継続率66・80・87・95%**
- 通常天井: **ボーナス or RT or ART間MAX600G → 天井状態 → 1枚役成立でART**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 極お父さん

- 「極お父さん / ハイパーオトウサンD / SNKプレイモア / お父さんシリーズ」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 600G / モード / ガックン」を組み替えて複数経路で再探索。
- 通常天井MAX600Gは複数資料で確認したが、**設定変更時に600G進捗をclear/retainするかは直接根拠を回収できず `UNVERIFIED_AFTER_RESEARCH`**。
- 据え置き、単純電源OFF→ON、低確/高確/超高確、RT、ARTストック/潜伏状態の保持/初期化も本機固有の直接資料を確定できず。
- 設定変更専用短縮天井、朝一ART確定、高確優遇、公開されたリセットモード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶/ランプによる変更判別も高信頼資料を確定できず。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- 一般的な5号機挙動から推測補完しない。

## CONFLICT / 注意

- 導入時期: K-Navi **2010-10-04**、5号機クロニクル **2010/9**。日粒度導入開始と月粒度メタデータを分離。
- 機械割設定2: 5号機クロニクル **98.6%** / 後年回顧記事 **96.6%**。他設定は一致するが自動修正せずCONFLICT保持。
- BIG設定3: **1/321.1 / 1/321.3** の丸め差を保持。

## 主要出典（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1273/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6079`
- 5号機クロニクル SNKプレイモア一覧: `https://5goki.com/snkplaymore`
- pacnk: `https://pacnk.com/slot/2010/hyperotousan/top.php`
- 中一商事 保存実機スペック: `https://www.nakaiti.com/html/sSNK077.html`
- marimo0925 回顧機械割: `https://www.marimo0925.net/pachislot-kikaiwari-ranking-superfather-ban/`
- ハンゲーム パチスロWiki保存解析: `https://wikiwiki.jp/hanpachi/%E3%81%AA%E3%81%AA%E3%81%B1%E3%81%A1%20%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/%E6%A5%B5%E3%81%8A%E7%88%B6%E3%81%95%E3%82%93%EF%BD%9E%E8%88%9E%E3%81%84%E9%99%8D%E3%82%8A%E3%81%9F%E5%A4%A9%E4%BD%BF%EF%BC%9F%EF%BC%9F%EF%BC%9F%EF%BD%9E`

## 今回のGitHub更新

- 518 極お父さん追加: `docs/real_machine_db/machines/2010-10-04_hyper-otousan.md`
- レコード追加commit: `04cfbc99a5aff7e25f2a6607bedb017db9f265d6`
- LATEST_HANDOFF: このコミット

## 遡及QA継続地点

- **ジャックポット・トロピカルバージョンまで補完済み**。
- machine tree上の次の候補は `docs/real_machine_db/machines/2006-11_kaidouou.md`。resetBehavior欠損なら次回QA対象。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 518 / chronologicalFrontier 2010-10-04**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを必ず再取得。
2. 2010-10-04同日群を継続。次候補は **出番だ!葉月ちゃん**。パチスロピンポン、ロケットパニック、極お父さんは登録済みのため重複追加禁止。
3. 2010-10-04同日群の漏れを最終監査後、2010-10-05〜10-15境界を監査し、次節点2010-10-16「天空のシンフォニア」へ進む。
4. 遡及QAは `2006-11_kaidouou.md` を次候補とする。
