# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **524**
- latestMachineAdded: **月面兎兵器ミーナ**（スパイキー / 2010-11-14納品開始基準）
- latestRecord: `docs/real_machine_db/machines/2010-11-14_getsumen-toheiki-mina.md`
- chronologicalFrontier: **2010-11-14**
- frontierLatestMachine: **月面兎兵器ミーナ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前523「エニィバー」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **523** / chronologicalFrontier **2010-11-12**。
- 2010-11-13〜14境界を再監査し、未登録「月面兎兵器ミーナ」を確認。グリーンべるとは **2010-11-14納品開始予定**、K-Navi・アニメ！アニメ！は **11月中旬以降/11月中旬から全国導入**としており、具体日と導入定義差を保持したうえで524件目として追加。
- HAZUSE DATA一覧から本機リンクの `machine_code=0S0800` を確認。ただし正式型式名との同一性は追加照合待ちとして断定しない。

## 524 — 月面兎兵器ミーナ

- メーカー: **スパイキー**
- 導入基準: **2010-11-14（納品開始予定）**
- 世代/タイプ: **5号機 / A+ART / セットストックART + 無限ART**
- 機械割: **97.3 / 98.8 / 100.6 / 104.5 / 108.5 / 113.0%**
- BIG合成: **1/397.19 → 1/343.12**
- REG: **1/397.19 → 1/360.09**
- ボーナス合成: **1/198.59 → 1/175.70**
- ART初当たり: **1/274 → 1/167**
- 汁実TIME: **50G / 約+1.1枚/G**
- 汁実RUSH: **次回ボーナスまで / 約+1.1枚/G**
- S・BIG: **約250枚**、異色BIG: **約200枚**、REG: **最大81枚**
- 通常天井: **ボーナス間1317G → 無限ART**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: **PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 月面兎兵器ミーナ

- パチマガスロマガには本機専用の「朝イチ・設定変更」項目が現存するが、検索取得本文では詳細を回収できず。
- 後年の天井狙い整理資料は本機を **「宵越し×」「リセット高確率有り」** と記載。設定変更時の天井進捗CLEARと朝一高確系恩恵を示唆するが、単一二次資料のため確定値へ昇格させず `ANALYSIS_SINGLE_LOW` として保持。
- 設定変更時の高確正確振り分け・継続G数、ARTストック/潜伏処理は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時1317G進捗の本機固有直接根拠は **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の天井進捗・ARTストック・内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- リセット専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶/ランプ等の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- 公開朝一専用数値/高確振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## CONFLICT / 注意 — 月面兎兵器ミーナ

- `2010-11-14` はグリーンべるとの **納品開始予定日**。K-Navi/アニメ！アニメ！は日単位を示さず「11月中旬以降/11月中旬から全国導入」。全国一斉ホール導入日と同一視しない。
- HAZUSE DATAの `machine_code=0S0800` はDBキーとして確認したが、正式型式表記を別資料で直接確認できていないため `formalModelName` は未確定。
- resetの「宵越し× / リセット高確率有り」は後年単一整理資料。パチマガスロマガの専用項目存在とは整合するが本文詳細未回収のため、確定的な振り分けやゲーム数を作らない。

## 主要出典 — 月面兎兵器ミーナ（取得日 2026-09-04）

- グリーンべると / P-WORLD: `https://news.p-world.co.jp/articles/4198/greenbelt`
- K-Navi発表会: `https://p-kn.com/topics/exhibition/720/`
- アニメ！アニメ！: `https://animeanime.jp/article/2010/10/09/7043.html`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/02/a.php`
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/02/h.php`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6127`
- pacnk: `https://pacnk.com/slot/tools/sh_mina.html`
- HAZUSE DATA一覧: `https://data.hazuse.com/?type=s`
- 天井ハイエナ生活: `https://macerate.seesaa.net/article/226196713.html`
- パチスロ立ち回り講座: `https://crankyseven.com/sp/tenjo-5ka.htm`

## 今回のGitHub更新

- 524 月面兎兵器ミーナ追加: `docs/real_machine_db/machines/2010-11-14_getsumen-toheiki-mina.md`
- machine record commit: `24cf167b7c2adff96e68238a1e3b65c4279bf54d`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**。
- 次回はmachine treeの実パス順を確認し、怪胴王直後の**最初の実在resetBehavior欠損レコード**を特定して処理する。タイトル推測でQA済み範囲を進めない。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 524 / chronologicalFrontier 2010-11-14**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-11-15同日群を最古未登録から処理**。既知候補は「パチスロ超時空要塞マクロス」「パチスロ戦国無双～猛将伝～」「エピソード ドライブ」。HAZUSE DATA上の並びだけを日付根拠にせず、K-Navi・P-WORLD・業界記事・メーカー資料で具体導入/納品日を照合する。
3. 同日群はrepo重複を都度確認し、既登録機を二重追加しない。
4. 50枚ベースやresetBehaviorは型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・回顧資料を横断してからUNVERIFIED判定する。
5. 競合値は平均せずCONFLICT。実機完全再現用の細かな内部抽選は収集しない。
