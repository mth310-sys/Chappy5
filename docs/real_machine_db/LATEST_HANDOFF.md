# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **879**
- latestRecordAdded: **コクッチーマスターズ**（タイヨー）
- latestRecord: `docs/real_machine_db/machines/2015-03-16_kokucchi-masters.md`
- chronologicalFrontier: **2015-03-16**
- frontierLatestMachine: **コクッチーマスターズ**（タイヨー）
- schema: **resetBehavior v0.7**
- status: **2015-03-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.877 `2015-03-16_black-lagoon2.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **877件 / chronologicalFrontier 2015-03-16 / 03-16_GROUP_OPEN**。
- handoff指定の次未処理 **麻雀物語3 役満乱舞の究極大戦（オリンピア）** をNo.878として追加。
- 同日群の横断監査で未登録 **コクッチーマスターズ（タイヨー）** を検出しNo.879として追加。
- 03/16群は、パチスロコブラ / BLACK LAGOON2 / 麻雀物語3 / コクッチーマスターズを確認。K-Navi、HAZUSE、P-WORLD、業界記事、当時解析を横断し、今回これ以外の具体日付き未登録5号機を固定できなかったため `CLOSED_FOR_CURRENT_RESEARCH`。

## No.878 — 麻雀物語3 役満乱舞の究極大戦

- record: `docs/real_machine_db/machines/2015-03-16_mahjong-monogatari3.md`
- manufacturer: **オリンピア**
- releaseDate canonical: **2015-03-16**
- modelName: **麻雀物語3役満乱舞の究極大戦G1**
- inspectionNumber: **4S1092**
- systemType: **5号機 AT / 差枚数管理AT / CZ搭載**

### 性能コア

- 機械割: **96.5 / 98.0 / 99.9 / 103.9 / 107.7 / 113.3%**。
- AT初当たり: **1/530.2 / 506.5 / 464.5 / 402.0 / 343.4 / 292.7**。
- 50枚ベース: **約47.4G/50枚**。
- AT純増: **約2.9枚/G**。
- AT「麻雀GP」: 差枚数管理、開始時 **最低100枚保証**。
- 通常天井: **1500G + 最大35G前兆**。

### resetBehavior v0.7

- 設定変更時は **天井Gリセット / 内部状態・モード・先走りパトランランptを再抽選**。
- 据え置き / 純電源OFF→ONでは **天井G・内部状態・モード・パトランランptを引き継ぐ**。液晶Gは0G、ステージは再抽選。
- 設定変更時モード振り分け: **通常A55.0 / 通常B25.0 / 通常C10.0 / 天国A9.5 / 天国B0.5%**。
- 設定変更時高確以上: **奇数設定25.0% / 偶数設定40.0%**。
- ガックン判別は当時解析で **不可**。朝一8G以内レア役判別説は要検証のため確定せず。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## No.879 — コクッチーマスターズ

- record: `docs/real_machine_db/machines/2015-03-16_kokucchi-masters.md`
- manufacturer: **タイヨー**
- releaseDate canonical: **2015-03-16**
- systemType: **5号機 ノーマル / 完全告知**

### 性能コア

- 機械割: **95.3 / 96.6 / 99.6 / 103.8 / 107.5 / 109.4%**。
- BIG: **1/291.3 / 283.7 / 271.9 / 257.0 / 243.6 / 236.6**。
- REG: **1/434.0 / 417.4 / 366.1 / 339.6 / 299.3 / 288.7**。
- 合算: **1/174.3 / 168.9 / 156.0 / 146.3 / 134.3 / 130.0**。
- 50枚ベース理論値: **34.98 / 34.98 / 34.99 / 35.72 / 35.74 / 35.89G**。
- BIG最大約312枚 / REG最大約104枚。
- 天井非搭載。

### resetBehavior v0.7

- 天井・規定G数モード・AT/ART/CZは非該当。
- 設定変更専用の朝一優遇/不利、比較可能な朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の純電源OFF→ON時リール/表示、ガックン等の変更判別は、表記揺れ・メーカー名・設定変更/据え置き/電断/出目等へ検索語を変え、旧解析・DB・回顧まで再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後継/兄弟機の挙動は転記しない。

## 2015-03-16群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:

- パチスロコブラ — SNKプレイモア — **No.876**
- BLACK LAGOON2 — スパイキー — **No.877**
- 麻雀物語3 役満乱舞の究極大戦 — オリンピア — **No.878**
- コクッチーマスターズ — タイヨー — **No.879**

## 次回再開地点

1. **recordCount 879 / chronologicalFrontier 2015-03-16 / 03-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.879を再確認。
3. **2015-03-17〜03-22境界**を、メーカー横断・当時新台一覧・具体導入日資料で監査する。
4. 03/17〜03/22に具体日付き未処理5号機がなければ、03/23以降の次の具体日付き未処理機を時系列で固定して処理する。検索時は発表日・検定日・納品予定と実ホール導入を分離する。
5. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### 麻雀物語3 役満乱舞の究極大戦
- オリンピア公式: https://www.olympia.co.jp/newmachine/mahjong3/
- PiDEA/P-WORLD: https://news.p-world.co.jp/articles/7145
- K-Navi: https://p-kn.com/slot/2214/
- HAZUSE: https://hazuse.com/machine/pachislot/4S1092/
- 必勝本 基本: https://p.hisshobon.jp/machine/2526/1/50346
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2526/1/51248
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/119/a.php
- 期待値見える化: https://slotjin.com/slot/mahjong3-reset/
- すろぱちくえすと: https://www.slopachi-quest.com/article/majang-story3-reset/

### コクッチーマスターズ
- K-Navi: https://p-kn.com/slot/2220/
- K-Navi発表会: https://p-kn.com/topics/exhibition/1326/
- PiDEA: https://www.pidea.jp/articles/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%80%8C%E3%82%B3%E3%82%AF%E3%83%83%E3%83%81%E3%83%BC%E3%80%8D%E3%81%AF%E5%91%8A%E7%9F%A5%E3%83%A9%E3%83%B3%E3%83%978%E7%A8%AE%E9%A1%9E
- P-WORLD: https://www.p-world.co.jp/machine/database/7654
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/82/a.php
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/82/c.php
- 2-9伝説: https://2-9densetsu.com/kokucchi-masters/
- すろぱちくえすと: https://www.slopachi-quest.com/article/kokutti/
- pacnk: https://pacnk.com/slot/tools/sh_kokucchi.html
