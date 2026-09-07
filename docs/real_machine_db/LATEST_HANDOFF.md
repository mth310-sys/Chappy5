# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **881**
- latestRecordAdded: **ゴーゴージャグラー**（北電子）
- latestRecord: `docs/real_machine_db/machines/2015-04-06_gogo-juggler.md`
- chronologicalFrontier: **2015-04-06**
- frontierLatestMachine: **ゴーゴージャグラー**
- schema: **resetBehavior v0.7**
- status: **2015-04-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.880 `2015-04-06_million-god-kamigami-no-gaisen.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **880件 / chronologicalFrontier 2015-04-06 / 04-06_GROUP_OPEN**。
- 直前handoff指定の北電子 **ゴーゴージャグラー** をNo.881として追加。
- 04-06群を「2015年4月6日 / 2015/04/06 / 4月6日導入」+ パチスロ/スロット/新台、除外検索、HAZUSEカレンダーで再監査。具体日付きで強く固定できた新規5号機は既登録の **ミリオンゴッド-神々の凱旋-** と **ゴーゴージャグラー** の2機。追加未登録を今回固定できなかったため `04-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## No.881 — ゴーゴージャグラー

- record: `docs/real_machine_db/machines/2015-04-06_gogo-juggler.md`
- manufacturer: **北電子**
- releaseDate canonical: **2015-04-06**
- modelName: **ゴーゴージャグラーKK**
- inspectionNumber: **4S0942**
- systemType: **5号機 ノーマル / Aタイプ / 完全告知**

### 性能コア

- メーカー発表/市場掲載機械割: **97.0 / 98.2 / 99.2 / 101.6 / 103.8 / 106.5%**。
- BIG: **1/269.7 / 268.6 / 266.4 / 260.1 / 255.0 / 242.7**。
- REG: **1/364.1 / 336.1 / 318.1 / 283.7 / 255.0 / 242.7**。
- 合算: **1/154.9 / 149.3 / 145.0 / 135.7 / 127.5 / 121.4**。
- 50枚ベース（チェリー狙い条件）: **33.3 / 33.5 / 33.7 / 33.9 / 34.0 / 34.3G**。
- BIG: **純増約312枚**、REG: **純増約104枚**。
- 天井: **非搭載**。
- チェリー狙い攻略機械割 **97.96 / 99.20 / 100.36 / 102.91 / 105.33 / 108.34%** はメーカー発表値と条件が違うため、CONFLICTではなく定義別系列として保持。

### resetBehavior v0.7

- 天井/AT・ARTモード/リセット天井: **NOT_APPLICABLE**。
- 設定変更後は朝一1G目の **リールガックン**が変更推測材料。本機固有資料を複数確認。ただし開店前1G回し等で対策可能なので、ガックンなし=据え置き確定とはしない。
- ボーナス後100G以内のゾロ目G BIGで発生するスペシャルBGM条件は **設定変更でリセット**。
- 前日ヤメG数+当日G数がボーナス後100G以内のゾロ目G条件を満たし、BIGで「運命/魔王」等が流れれば **据え置き濃厚**という本機固有判別を保存。
- 純電源OFF→ONだけを設定変更と独立比較する本機固有直接資料は、表記揺れ/型式/北電子 + 電源OFF ON/電断/据え置き/BGM/ガックンを変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き資料から純電断契約を推定転記しない。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 朝一専用当選率/モード振り分け/天井短縮: **NONE / NOT_APPLICABLE**。

### definition / conflict control

- 設定3 REGは当時系複数資料 **1/318.1** に対し一部後年ページ **1/318.6**。平均せず、1/318.1をcanonical、後年差をレコード内注記。
- メーカー発表機械割とチェリー狙い攻略機械割は消化条件差なので `DEFINITION_DIFFERENCE_NOT_CONFLICT`。

## 2015-04-06群

- **ミリオンゴッド-神々の凱旋-** — ユニバーサルブロス — No.880
- **ゴーゴージャグラー** — 北電子 — No.881
- HAZUSEは2015年4月掲載日を **04/06・04/13・04/20** とする。
- 同日除外検索を含むメーカー横断監査で追加未登録5号機を今回固定できず、`2015-04-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## 次回再開地点

1. **recordCount 881 / chronologicalFrontier 2015-04-06 / 04-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.881を再確認。
3. **2015-04-07〜04-12境界**を具体日ベースで監査。
4. 未登録5号機がなければ `2015-04-07_TO_2015-04-12_CLOSED_FOR_CURRENT_RESEARCH` とし、HAZUSE次掲載日の **2015-04-13群**へ進む。
5. 04-13群はメーカー横断で候補を確定してから、時系列先頭の未処理機を性能コア + resetBehavior v0.7まで収集。
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
- K-Navi ゴーゴージャグラー: https://p-kn.com/slot/2216/
- アタリ7 ゴーゴージャグラー: https://www.atari7.com/slot/date1426138692.php
- グリーンべると: https://web-greenbelt.jp/00007527/

### ゴーゴージャグラー
- 北電子公式検定情報: https://www.kitadenshi.co.jp/slot-kentei/gogojuggler/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/7653/
- P-WORLD / PiDEA業界記事: https://news.p-world.co.jp/articles/7143
- パチスロ解析ガイド: https://pachislot-guide.net/2015/gogo-juggler/
- 一撃: https://1geki.jp/slot/gogoj/01/
- SLOT HACK: https://slothack.net/matome/17149/
- juggler7: https://juggler7.com/gogo/
- ジャグジャグBeats!: https://jugjug.net/gogojugglerkk
- パチよみ: https://www.ps-channel.net/jugglersoundhenka/
