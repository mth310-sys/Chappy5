# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **880**
- latestRecordAdded: **ミリオンゴッド-神々の凱旋-**（ユニバーサルブロス）
- latestRecord: `docs/real_machine_db/machines/2015-04-06_million-god-kamigami-no-gaisen.md`
- chronologicalFrontier: **2015-04-06**
- frontierLatestMachine: **ミリオンゴッド-神々の凱旋-**
- schema: **resetBehavior v0.7**
- status: **2015-04-06_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.879 `2015-03-16_kokucchi-masters.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **879件 / chronologicalFrontier 2015-03-16 / 03-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 指示どおり2015-03-17〜03-22から境界監査を開始。
- HAZUSE新台カレンダーは2015年3月について03/02・03/09・03/16のみを掲載し、次の掲載日は2015-04-06。別検索でも03/17〜04/05に具体的ホール導入日を固定できる未登録5号機を今回確認できなかったため、この境界を `CLOSED_FOR_CURRENT_RESEARCH` として前進。
- 2015-04-06群では、ユニバーサルブロス **ミリオンゴッド-神々の凱旋-** と北電子 **ゴーゴージャグラー** を具体日付きパチスロとして確認。
- 今回は時系列同日群の先頭処理として **ミリオンゴッド-神々の凱旋-** をNo.880へ追加。04-06群はまだOPEN。

## No.880 — ミリオンゴッド-神々の凱旋-

- record: `docs/real_machine_db/machines/2015-04-06_million-god-kamigami-no-gaisen.md`
- manufacturer: **ユニバーサルブロス**
- releaseDate canonical: **2015-04-06**
- modelName: **ミリオンゴッド-神々の凱旋-BD**
- inspectionNumber: **4S0861**
- systemType: **5号機 AT / セット数管理AT / CZ搭載**

### 性能コア

- 主流解析機械割: **98.3 / 99.5 / 102.0 / 106.6 / 112.1 / 119.5%**。
- GG初当たり（GOD/赤7除く）: **1/525.4 / 476.0 / 487.5 / 370.7 / 361.8 / 274.7**。
- GG合算（GOD/赤7含む）: **1/452.8 / 415.6 / 424.4 / 333.0 / 325.9 / 253.5**。
- 50枚ベース: **約25G/50枚**。
- AT「GOD GAME」: **1セット100G / 純増約3.0枚/G**。
- 通常天井: **GG後1480G + 前兆**。
- 天井到達時ループストック: **1% / 80% = 各50%**。
- GOD揃い: **1/8192**、赤7揃い: **1/5461**（全設定共通）。

### resetBehavior v0.7

- 設定変更: **天井Gリセット / 内部モード再抽選 / 状態再抽選**。
- 純電源OFF→ON: **天井G・モード・状態を引き継ぐ**。液晶は設定変更/電断とも **ペイレネの泉 / 012**。
- 電断時にGG / SGG / G-STOP / G-ZONE中ならその状態を引き継ぐと一撃が明記。
- 設定変更後天井振り分け:
  - 設定1〜3: **510G 10.00% / 1000G 90.00% / 1480G 0%**
  - 設定4: **10.00 / 89.61 / 0.39%**
  - 設定5: **10.00 / 87.66 / 2.34%**
  - 設定6: **10.00 / 85.32 / 4.69%**
- 朝一表モードも設定別公開値を取得。低確1が設定1/2=60%、3/4=50%、5/6=40%で、固定高モード優遇ではない。
- 最大の朝一恩恵は天井短縮。510G天井は全設定約10%。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 変更判別: 設定変更/電断とも液晶が012・ペイレネとなるため表示単体では判別不可。本機固有ガックンの高信頼契約は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### CONFLICT / definition control

- 機械割は主流 **98.3 / 99.5 / 102.0 / 106.6 / 112.1 / 119.5%** に対し、パチスロ解析ガイド **98.0 / 99.0 / 103.3 / 106.3 / 111.6 / 118.0%**、アタリ7設定6 **119.6%**。平均せずレコード内にCONFLICT保持。
- 「GG初当たり」と「GG合算」を一部後年資料が同じAT初当たり名で扱うため、**確定役除外値とGOD/赤7込み値を別列保存**。定義差を平均しない。
- 2026年スマスロ **ミリオンゴッド-神々の軌跡-** はリセット数値・有利区間仕様が別物。2015年凱旋へ一切転記しない。

## 2015-03-17〜04-05境界

- HAZUSE新台カレンダー: 2015年3月は **03/02・03/09・03/16**、2015年4月は **04/06・04/13・04/20** を掲載。
- `2015-03-17_TO_2015-04-05_CLOSED_FOR_CURRENT_RESEARCH`。
- 発表日・検定日・記事投稿日・アプリ配信日をホール導入日へ転用しない。

## 2015-04-06群 — OPEN

確認済み具体日候補:

- **ミリオンゴッド-神々の凱旋-** — ユニバーサルブロス — **No.880 処理済み**
- **ゴーゴージャグラー** — 北電子 — **次候補**

現時点の横断検索では04-06パチスロとしてこの2機を強く確認。ゴーゴージャグラー処理後に同日群をメーカー横断で最終監査し、追加がなければCLOSEDする。

## 次回再開地点

1. **recordCount 880 / chronologicalFrontier 2015-04-06 / 04-06_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.880を再確認。
3. 北電子 **「ゴーゴージャグラー」** をNo.881候補として性能コア + resetBehavior v0.7まで処理する。
4. その後04-06同日群を全メーカー横断で最終監査。未登録5号機がなければ `04-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
5. 次は2015-04-07〜04-12境界を監査し、問題なければHAZUSE次掲載日の2015-04-13群へ進む。
6. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ユニバーサル公式: https://www.universal-777.com/product/slot/milliongod_gaisen/
- 4Gamer メーカー発表文転載: https://www.4gamer.net/games/157/G015795/20150330041/
- K-Navi ゴーゴージャグラー: https://p-kn.com/slot/2216/

### ミリオンゴッド-神々の凱旋-
- HAZUSE: https://hazuse.com/machine/pachislot/4S0861/
- K-Navi: https://p-kn.com/slot/2243/
- K-Navi 簡単ワンポイント: https://p-kn.com/slot/2243/53746/
- 一撃 ボーナス確率: https://1geki.jp/slot/milliongodgaisen/1/
- 一撃 天井/設定変更: https://1geki.jp/slot/milliongodgaisen/3/
- なな徹 ボーナス確率: https://nana-press.com/kaiseki/machine/49/846/
- なな徹 朝イチ/設定変更: https://nana-press.com/kaiseki/machine/49/851/
- なな徹 設定推測: https://nana-press.com/kaiseki/machine/49/849/
- 2-9伝説 朝一モード: https://2-9densetsu.com/milliongodgaisen-asaichi/
- スロ確: https://slotkaku.com/milliongodkamigaminogaisen
- ちょんぼりすた: https://chonborista.com/%E6%9C%AA%E5%88%86%E9%A1%9E/6778/
- パチスロ解析ガイド: https://pachislot-guide.net/2015/million-god-gaisen/
- アタリ7: https://www.atari7.com/column/20171487765487.php
