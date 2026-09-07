# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **888**
- latestRecordAdded: **吉宗～極～**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-06-08_yoshimune-kiwami.md`
- chronologicalFrontier: **2015-06-08**
- frontierLatestMachine: **吉宗～極～**
- frontierRecord: `docs/real_machine_db/machines/2015-06-08_yoshimune-kiwami.md`
- schema: **resetBehavior v0.7**
- status: **2015-06-08_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、旧 `LATEST_HANDOFF.md`、直前No.887 `2015-05-25_dragon-gal-souryu-no-tatakai.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **887件 / 2015-05-25 / GROUP_CLOSED**。

## 2015-05-26～06-07 境界監査

- HAZUSE新台カレンダー上には2015-06-01の更新日が存在するため、05/26～06/07を無条件に空白扱いせず再監査した。
- 「2015年6月1日 / 2015-06-01 / パチスロ / 新台 / 導入 / ホール導入」およびメーカー・シリーズ・個別機種候補で検索。
- 06/01具体日で取得できた代表例にはパチンコ `CRワシズ` 等があり、記事投稿日が06/01で実ホール導入日が06/08のパチスロ候補も混在した。
- 2015-06-08の当時新台一覧では、吉宗～極～、パチスロデビルサバイバー2、パチスロおとめ妖怪ざくろ、大工の源さん桜満開！源DREAM Ver.、パチスロガンソードが同日導入として確認できる。
- 今回の監査範囲では **2015-05-26～06-07に実ホール導入を具体日で強く固定できる未登録5号機を確認できなかった**。
- よって境界は **`2015-05-26_TO_2015-06-07_CLOSED_FOR_CURRENT_RESEARCH`** として前進。

## No.888 — 吉宗～極～

- record: `docs/real_machine_db/machines/2015-06-08_yoshimune-kiwami.md`
- manufacturer: **大都技研**
- releaseDate canonical: **2015-06-08**
- modelName: **ヨシムネH2A4**
- inspectionNumber: **3S1093**
- generation: **5号機**
- systemType: **AT / 疑似ボーナス搭載 / ゲーム数管理**

### 性能コア

- 機械割: **96.2 / 98.2 / 100.6 / 103.3 / 106.5 / 110.9%**。
- ボーナス初当たり: **1/408.22 / 385.46 / 383.13 / 347.40 / 328.33 / 305.03**。
- AT初当たり: **1/1452.34 / 1344.04 / 1273.11 / 1126.27 / 1081.79 / 867.27**。
- ボーナス+AT合算: **1/318.7 / 299.5 / 294.5 / 265.5 / 251.9 / 225.7**。
- 50枚ベース: **約31.67G/50枚**。
- AT「爆走大盤振舞」: **初期80G+α / 純増約2.8枚/G**。
- BIG: **初期320枚+α**、REG: **20G**。
- 通常A/B/天国準備の規定天井は1400G、天国A/Bは128G。前兆込み最大1432G表記とは定義分離。

### resetBehavior v0.7

- 設定変更時は **ボーナス間天井ゲーム数をリセット**。
- AT当選のみではボーナス間天井進捗をリセットしない。
- 設定変更専用の固定短縮天井は、再探索後も **`NONE_CONFIRMED_AFTER_RESEARCH`**。
- 本機固有の設定変更時モード振り分け、設定変更後の内部状態は **`UNVERIFIED_AFTER_RESEARCH`**。
- 据え置き時の天井G・モード・状態の一式契約も、宵越し実戦記を仕様へ一般化せず **`UNVERIFIED_AFTER_RESEARCH`**。
- 純電源OFF→ONは **`UNVERIFIED_AFTER_RESEARCH`**。据え置きと同義扱いしない。
- 朝一キャラクターアイコンは当時の立ち回り材料だが、設定変更確定判別とはしない。
- 本機固有ガックン等の確定判別は再探索後も **`NONE_CONFIRMED_AFTER_RESEARCH`**。
- 有利区間は **`NOT_APPLICABLE_5TH_GEN_PRE_5_9`**。
- 2013年旧作「吉宗」の設定変更時モード振り分け（検索で混入する数値）は **別機種のため不採用**。

### definition control

- 正式量産版「吉宗～極～」と、過去の直営店テスト導入版を混同しない。
- 1400G規定天井 / 前兆込み最大1432Gは定義差でありCONFLICTにしない。
- BIG約700枚 / AT約1400枚は期待獲得値で、初期320枚 / 80G+αと分離。
- 旧作2013年「吉宗」のresetBehaviorを本機へ転記しない。

## 2015-06-08群監査 — OPEN

処理済み:
- **吉宗～極～** — 大都技研 — No.888。

同日未処理の強い候補:
1. **パチスロデビルサバイバー2** — オリンピア。
2. **パチスロおとめ妖怪ざくろ** — 北電子。
3. **大工の源さん桜満開！源DREAM Ver.** — 三洋。
4. **パチスロガンソード** — KPE高砂。

- 複数機が残るため **`2015-06-08_GROUP_OPEN`**。

## 次回再開地点

1. **recordCount 888 / chronologicalFrontier 2015-06-08 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.888を再確認。
3. 次の未処理機種 **「パチスロデビルサバイバー2」（オリンピア）** から性能コア + resetBehavior v0.7を収集する。
4. 続いて同日候補を時系列キュー内で処理し、06/08群の全メーカー再監査後にのみCLOSED判定する。
5. exact release dateでは検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・型式名・メーカー・シリーズ名と reset関連検索語を変え、複数資料系統を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置きと純電断を同義扱いしない。
- 同名/近似名・シリーズ旧作のリセット挙動を流用しない。
- テスト導入版と量産全国導入版を混同しない。
- 規定天井Gと前兆込み最大到達Gを平均・CONFLICT化しない。

## 主要出典 — 取得日 2026-09-07

### 吉宗～極～
- HAZUSE: https://hazuse.com/machine/pachislot/3S1093/
- K-Navi: https://p-kn.com/slot/2272/
- パチマガスロマガ 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/59/h.php
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/59/c.php
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/59/a.php
- 必勝本: https://p.hisshobon.jp/machine/2581/1/52226
- 必勝本 システム: https://p.hisshobon.jp/machine/2581/1/52373
- 期待値見える化: https://slotjin.com/zone/yoshimunekiwami/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/7880/

### 境界 / 2015-06-08同日群
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- 2015年導入スロット新台情報まとめ: https://slotnews777.blog.fc2.com/blog-entry-2348.html
