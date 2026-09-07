# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **887**
- latestRecordAdded: **ドラゴンギャル～双龍の闘い～**（SNKプレイモア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-05-25_dragon-gal-souryu-no-tatakai.md`
- chronologicalFrontier: **2015-05-25**
- frontierLatestMachine: **ドラゴンギャル～双龍の闘い～**
- frontierRecord: `docs/real_machine_db/machines/2015-05-25_dragon-gal-souryu-no-tatakai.md`
- schema: **resetBehavior v0.7**
- status: **2015-05-25_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、旧 `LATEST_HANDOFF.md`、直前No.886 `2015-05-25_saikyou-denki-pai-yuuki.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **886件 / 2015-05-25 / GROUP_OPEN**。

## No.887 — ドラゴンギャル～双龍の闘い～

- record: `docs/real_machine_db/machines/2015-05-25_dragon-gal-souryu-no-tatakai.md`
- manufacturer: **SNKプレイモア**
- releaseDate canonical: **2015-05-25**
- modelName: **ドラゴンギャル双龍の闘いAB**
- inspectionNumber: **4S1080**
- generation: **5号機**
- systemType: **AT / CZ主体 / 宝玉ストック**

### 性能コア

- 機械割: **97.6 / 98.9 / 100.8 / 104.5 / 109.2 / 114.3%**。
- AT初当たり: **1/499.7 / 467.6 / 435.2 / 388.4 / 343.2 / 281.9**。
- 50枚ベース: **約59G/50枚**。
- AT「双龍乱舞」: **1セット50G+α / 純増約2.5枚/G**。
- ゲーム数天井: **1616G+前兆でAT確定**。
- ムイムイチャレンジ連続失敗回数天井: **最大10回目でAT確定**。
- HAZUSE、当時解析、パチマガスロマガ、P-WORLD、PiDEA X等で主要値を照合。

### resetBehavior v0.7

- 設定変更時: **天井Gリセット / 高確スタート確定 / CZ規定G再抽選 / 宝玉ストック再抽選 / MCスルー回数天井再抽選**。
- 据え置き時: **天井G・内部状態・CZ規定G・宝玉ストック引継ぎ**。
- 純電源OFF→ON: 本機固有の直接契約を複数検索語・資料系統で再探索したが固定できず **`UNVERIFIED_AFTER_RESEARCH`**。据え置き仕様から推定しない。
- 高確保証G: **10G 25% / 20G 50% / 30G 25%**。
- 設定変更時初期宝玉0個率: **設定1～4 40.00% / 設定5 53.75% / 設定6 64.75%**。
- 設定1～4の初期宝玉: 0/1/2/3/4/5個 = **40/29/15/10/3/3%**。
- 設定5: **53.75/20/12.5/8.75/2.5/2.5%**。
- 設定6は現存表で3個欄だけ表示欠落があるため逆算せず `UNVERIFIED_TABLE_RENDERING`。0=64.75%, 1=12.50%, 2=10.00%, 4=2.00%, 5=2.00%のみ保存。
- リセット後MCスルー回数天井振り分け（1～10回）: **5.0 / 12.5 / 7.5 / 4.5 / 7.1 / 2.5 / 4.5 / 16.3 / 20.0 / 20.0%**。
- 固定短縮ゲーム数天井は **`NONE_CONFIRMED_AFTER_RESEARCH`**。
- 朝一ステージは龍棲村。据え置きでも通常時は龍棲村になり得るため単独判別不可。
- 据え置き宝玉は前日個数を内部保持し最初のストック時に反映されるため変更推測材料になるが確定判別ではない。
- 本機固有ガックンは再探索後も **`NONE_CONFIRMED_AFTER_RESEARCH`**。
- 有利区間は **`NOT_APPLICABLE_5TH_GEN_PRE_5_9`**。

### release-date definition control

- HAZUSE/当時解析は **2015-05-25ホール導入開始**。
- PiDEA Xは **2015-05-24納品予定**。
- 納品予定と実ホール導入を別定義として保持し、平均・強制統一しない。

## 2015-05-25群監査

処理済み:
- **最胸伝奇 パイ遊記** — ネット — No.886。
- **ドラゴンギャル～双龍の闘い～** — SNKプレイモア — No.887。

同日群を「2015年5月25日 / 2015-05-25 / パチスロ / 新台 / 導入 / ホール導入開始」およびメーカー・機種一覧系で再探索。
今回の監査範囲では、この2機種以外に **2015-05-25の実ホール導入を具体日で強く固定できる未登録5号機を確認できなかった**。
よって **`2015-05-25_GROUP_CLOSED_FOR_CURRENT_RESEARCH`**。
パチンコ、アプリ配信、記事日、検定日、発表日をホール導入日として混入しない。

## 次回再開地点

1. **recordCount 887 / chronologicalFrontier 2015-05-25 / GROUP_CLOSED** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.887を再確認。
3. **2015-05-26以降の境界監査**から前進し、次の具体日付き未登録5号機を固定する。
4. 現時点の強い既知候補として **2015-06-08「吉宗～極～」** がある。K-Navi/解析で2015-06-08ホール導入が一致。
5. ただし05/26～06/07を飛ばさず、機種一覧・メーカー・当時新台記事を横断して未登録実機がないか確認してから06/08へ進む。
6. 2015-06-08到達時は **正式量産版「吉宗～極～」** と、過去の直営店テスト導入版を混同しない。型式 **ヨシムネH2A4 / 検定3S1093** の確認を優先。
7. exact release dateでは検定告示 / 発表 / 納品予定 / 地域先行 / 全国稼働 / 実ホール導入を分離する。
8. `UNVERIFIED_AFTER_RESEARCH` は複数検索語・資料系統を再探索した後だけ使用。
9. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置きと純電断を同義扱いしない。本機固有資料なしに一般的5号機慣例から推定しない。
- 同名/近似名・シリーズ旧作のリセット挙動を流用しない。
- 宝玉表の欠落値を合計100%から逆算して埋めない。
- ゲーム数天井とCZ回数天井を混同しない。

## 主要出典 — 取得日 2026-09-07

### ドラゴンギャル～双龍の闘い～
- HAZUSE: https://hazuse.com/machine/pachislot/4S1080/
- すろぱちくえすと 天井/スペック: https://www.slopachi-quest.com/article/dragon-girl/
- すろぱちくえすと 朝一設定変更: https://www.slopachi-quest.com/article/doragon-girl-reset/
- PiDEA X: https://www.pidea.jp/articles/SNK%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%82%A2%E3%80%8C%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AE%E3%83%A3%E3%83%AB%E3%80%8D10%E5%91%A8%E5%B9%B4%E6%9C%80%E6%96%B0%E4%BD%9C
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/50/a.php
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/50/c.php
- パチマガスロマガ ATフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/50/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7702
- ちょんぼりすた: https://chonborista.com/slot/snk/7909/

### 次の既知候補
- 吉宗～極～ K-Navi: https://p-kn.com/slot/2272/
- 吉宗～極～ ちょんぼりすた: https://chonborista.com/slot/daito-slot/7880/
