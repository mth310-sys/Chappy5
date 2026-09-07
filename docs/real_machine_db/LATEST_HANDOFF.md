# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **866**
- latestRecordAdded: **ニューパルサーデラックス**（山佐）
- latestRecord: `docs/real_machine_db/machines/2015-02-02_new-pulsar-deluxe.md`
- chronologicalFrontier: **2015-02-02**
- frontierLatestMachine: **ニューパルサーデラックス**（山佐）
- schema: **resetBehavior v0.7**
- status: **2015-02-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_AUDIT_2015-02-03_TO_2015-02-15**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.865 `2015-02-02_shin-mogumogu-fuurinkazan2.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **865件 / chronologicalFrontier 2015-02-02 / 02-02_GROUP_OPEN**。
- 前handoff指定の次の未処理機種 **ニューパルサーデラックス（山佐）** をNo.866として追加。
- K-Navi 2015年2月導入カレンダー上の02/02パチスロ強候補は **真モグモグ風林火山2 / ニューパルサーデラックス**。両機とも処理済みとなり、現時点の複数資料監査では同日未処理5号機を安全に固定できないため `2015-02-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## No.866 — ニューパルサーデラックス

- record: `docs/real_machine_db/machines/2015-02-02_new-pulsar-deluxe.md`
- manufacturer: **山佐**
- releaseDate: **2015-02-02**
- alternateName: **ニューパルサーDX**
- modelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- systemType: **5号機 ノーマル / 完全告知**

### 性能コア

- 機械割: **96.9 / 98.6 / 100.3 / 103.1 / 106.0 / 110.0%**。
- BIG: **1/282.4 / 277.6 / 271.9 / 258.0 / 243.6 / 227.5**。
- REG: **1/420.1 / 412.1 / 404.5 / 383.2 / 362.0 / 337.8**。
- ボーナス合算: **1/168.9 / 165.9 / 162.6 / 154.2 / 145.6 / 135.9**。
- 50枚ベース: **35.04 / 35.25 / 35.88 / 36.28 / 36.48 / 36.99G**（パチマガスロマガ旧DB独自調査値）。
- BIG: **約312枚**、REG: **約104枚**。
- 山佐公式現行アーカイブで5号機Aタイプ、2015年2月稼働、シリーズ初の完全告知を確認。
- 導入日はK-Navi 2015-02-02、娯楽産業/Gamer当日記事でも2015-02-02ホールデビューで一致（地域差注記あり）。

### resetBehavior v0.7

- 純ノーマル機でAT/ART/CZ・規定G解除・天井なし。
- `gameCounterReset`: `NOT_APPLICABLE_NO_CEILING_GAME_COUNTER_DEPENDENCY`。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_CEILING`。
- `modeAfterReset`: `NOT_APPLICABLE_NO_INTERNAL_GAME_COUNT_MODE`。
- `stateAfterReset`: `NOT_APPLICABLE_NO_AT_ART_CZ_INTERNAL_STATE_FOR_REQUIRED_V0_7_SCOPE`。
- 据え置き/純電断で朝一へ持ち越す天井G・モード・AT/ART/CZ状態は `NOT_APPLICABLE_NORMAL_TYPE_NO_CEILING_NO_MODE`。
- 設定変更専用の短縮天井・朝一モード・CZ/AT優遇等: `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の朝一不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有のガックン・出目・ランプ等による設定変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更/純電断時の本機固有リール初動・表示復帰契約: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 公開朝一専用数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### 欠損再探索

- 表記揺れ: `ニューパルサーデラックス / ニューパルサーDX / ニューパルDX / New Pulsar Deluxe`。
- 検索語: `型式 / 検定番号 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / リール / 50枚 / 1000円`。
- 資料系統: 山佐公式、当時業界記事、K-Navi、パチマガスロマガ旧DB、当時/後年解析資料。
- 2019年「ニューパルサーDX～チェリーバージョン～」、6号機「DX3」等は別機種として除外。

## 2015-02-02群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
- No.865 **真モグモグ風林火山2**（ネット）
- No.866 **ニューパルサーデラックス**（山佐）

監査メモ:
- K-Navi 2015年2月導入カレンダーの02/02パチスロ候補を処理済み。
- パチンコ混在、発表日、記事投稿日、アプリ配信日をホール導入日と混同しない。

## 次回再開地点

1. **recordCount 866 / chronologicalFrontier 2015-02-02 / 02-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.866 を再確認。
3. **2015-02-03～2015-02-15境界監査**を、具体日・地域先行・メーカー公式・当時業界記事・導入一覧で実施する。
4. 現時点の次の強い全国導入アンカーは **2015-02-16「パチスロ アラジンAII」**。ただし02/03～02/15に未処理5号機がないことを複数系統で確認してから処理する。
5. 未処理機が境界内で見つかった場合は日付順に先に処理し、アラジンAIIを飛び越さない。
6. 新規機では性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ・型式・メーカー/シリーズ名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、複数資料系統を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機・派生スペックを混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### ニューパルサーデラックス
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_npd/
- K-Navi: https://p-kn.com/slot/2189/
- K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
- 娯楽産業 2015-02-02: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80android%E5%90%91%E3%81%91%E3%80%8C%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%91%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9%E3%80%8D%E3%82%A2%E3%83%97/
- Gamer 2015-02-02: https://www.gamer.ne.jp/news/201502020040/
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/201/c-1.php
- CrankySeven: https://crankyseven.com/newpulsardx-pc.htm
- けんのスロットシミュレーション解析: https://kenslo65536.com/kaiseki/new-pulsar-dx.html
