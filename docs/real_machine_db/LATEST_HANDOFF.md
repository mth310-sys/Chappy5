# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **527**
- latestMachineAdded: **エピソードドライブ**（ニューギン / 2010-11-15ホール導入開始）
- latestRecord: `docs/real_machine_db/machines/2010-11-15_episode-drive.md`
- chronologicalFrontier: **2010-11-15**
- frontierLatestMachine: **エピソードドライブ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前526「パチスロ戦国無双～猛将伝～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **526** / chronologicalFrontier **2010-11-15**。
- handoff指定の2010-11-15同日群を継続し、repo未登録の **「エピソードドライブ」** を527件目として追加。
- K-Naviのホール導入開始 **2010-11-15**、P-WORLDの2010年11月粒度、既存handoffにあるグリーンべると2010-10-21記事の **2010-11-14納品予定（地域差あり）** を分離保持。

## 527 — エピソードドライブ

- メーカー: **ニューギン**
- 型式: **エピソード ドライブZ**
- 検定番号: **0S0398**
- 世代/タイプ: **5号機 / A+RT / CZ / ループ式RT**
- 導入基準: **2010-11-15**（K-Naviホール導入開始）
- 機械割: **96.6 / 98.6 / 101.2 / 104.3 / 107.8 / 114.2%**
- ボーナス合算: **1/198.6 / 1/192.8 / 1/184.6 / 1/176.2 / 1/168.0 / 1/158.7**
- BIG: **約250枚**、REG: **約60枚**
- RT「RTステージ」: **1セット30G / 約+0.4枚/G**
- RT継続率: **1% / 66% / 75% / 85% / 99%**
- 通常時CZ「ドライブチャンス」: **7G**
- 内部状態: **通常 / 高確 / 超高確**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 通常ゲーム数型固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- coreStatus: **PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — エピソードドライブ

- K-Navi本機ページに専用 **「設定変更後の挙動」** 解析項目が存在することを確認したが、現行取得経路から具体本文を安全に回収できず。
- 設定変更時の通常/高確/超高確、セットアップポイント、CZ/RT権利・継続率の処理: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時のポイント・内部状態・RT権利保持: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時のポイント・内部状態・CZ/RT処理: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井・朝一専用G数・朝一RT優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶/ポイント表示による変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## 主要出典 — エピソードドライブ（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1303/`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6139`
- 5号機クロニクル: `https://5goki.com/newgin-excite`
- グリーンべると: 既存handoff確認済み2010-10-21発表記事（2010-11-14納品予定、地域差あり）

## 今回のGitHub更新

- 527 エピソードドライブ追加: `docs/real_machine_db/machines/2010-11-15_episode-drive.md`
- machine record commit: `78e85250b09012b36416f93f25927e560c5a80e7`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 今回GitHub code search / machine directory再探索でも、怪胴王直後の最初の実在resetBehavior欠損レコードを順序保証付きで一意確定できなかったため、推測でQA済み範囲を進めていない。
- 次回もmachine tree / commit履歴 / 実ファイル日付を使い、怪胴王直後の**最初の実在resetBehavior欠損レコード**を確定してから処理する。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 527 / chronologicalFrontier 2010-11-15**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-11-15同日群を最終監査**。同日未登録がなければ2010-11-16以降の最古未処理へ進む。
3. 現時点で次の強い日付アンカーはK-Naviの **2010-11-29「アントニオ猪木が元気にするパチスロ機」**。ただし11/16〜11/28を導入一覧・当時業界記事・K-Navi/P-WORLD等で境界監査してから採用する。
4. 50枚ベースやresetBehaviorは型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・回顧資料を横断してからUNVERIFIED判定する。
5. 競合値は平均せずCONFLICT。実機完全再現用の細かな内部抽選は収集しない。
