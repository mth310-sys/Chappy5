# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **870**
- latestRecordAdded: **戦国コレクション2**（KPE）
- latestRecord: `docs/real_machine_db/machines/2015-03-02_sengoku-collection-2.md`
- chronologicalFrontier: **2015-03-02**
- frontierLatestMachine: **戦国コレクション2**（KPE）
- schema: **resetBehavior v0.7**
- status: **2015-03-02_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.869 `2015-02-23_super-bingo-neo-30.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **869件 / chronologicalFrontier 2015-02-23 / 02-23_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-02-24～03-01境界を再監査。K-Navi 2月カレンダーでは02/23以降は2月下旬「スーパービンゴNEO-30」までで、追加の具体日付き未処理5号機を固定できず `2015-02-24_TO_03-01_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH`。
- 2015-03-02群へ前進し、KONAMI公式の稼動開始日が直接取れる **戦国コレクション2** をNo.870として追加。
- 同時に03/02群横断検索で、前handoffの候補2機だけでなく **コブラ / スーパーラクラクビスカス / 戦国コレクション2 / パチスロサイバーブルー / パチスロベルセルク** を同日候補として検出。よって03/02群はOPENを維持。

## No.870 — 戦国コレクション2

- record: `docs/real_machine_db/machines/2015-03-02_sengoku-collection-2.md`
- manufacturer: **KPE**
- releaseDate: **2015-03-02**
- modelName: **戦国コレクション2KS**
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- systemType: **5号機 AT / CZ / 規定コレ数管理**

### 性能コア

- AT「世界制覇ラッシュ」初当たり: **1/278.9 / 274.6 / 254.1 / 244.8 / 224.3 / 219.6**。
- 機械割: **97.0 / 98.5 / 100.1 / 103.5 / 108.1 / 110.9%**。
- CZ「鬼ヶ島チャレンジ」: **1/213.0 / 204.4 / 200.3 / 185.8 / 185.3 / 179.7**。
- ベース: **約34.2G/50枚**（複数二次資料一致。メーカー公式直接値ではない）。
- AT: **約3.0枚/G、1セット40G+α**。
- モード別天井: **通常A 992コレ / 通常B 640コレ / 特殊 999コレ / 天国 128コレ / 超天国 32コレ**。

### resetBehavior v0.7

- **設定変更時はモード再抽選**。
- 設定変更後モード振り分け:
  - 設定1: A25.0 / B50.0 / 特殊0 / 天国25.0%
  - 設定2: A25.0 / B50.0 / 特殊0 / 天国25.0%
  - 設定3: A37.5 / B37.5 / 特殊0 / 天国25.0%
  - 設定4: A37.5 / B37.1 / 特殊0.39 / 天国25.0%
  - 設定5: A50.0 / B24.2 / 特殊0.78 / 天国25.0%
  - 設定6: A62.5 / B10.9 / 特殊1.56 / 天国25.0%
- 設定1では75%が通常Aより浅いB/天国へ振り分けられる。固定一律短縮天井ではなくモード抽選依存。
- 設定変更後0コレからの解析・期待値資料は存在するが、今回確認資料では「内部コレカウンタを0クリア」とする独立した直接文言を固定できず `SUPPORTED_BY_RESET_ANALYSIS_BUT_EXACT_COUNTER_CLEAR_WORDING_UNVERIFIED`。
- 据え置き宵越しでは当時資料が **フェイク前兆は内部ゲーム数依存** と記載。内部進行継続の補助根拠として保存。ただしモード/高確等を含む包括的据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。
- **設定変更なし電源OFF→ON**のコレ数・モード・内部状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更直後の高確/低確等の振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- ガックンは同一当時記事内で「効かない」→読者情報で「有効」と訂正され根拠が弱いため `CONFLICT_WEAK_EVIDENCE_GAKKUN_EFFECTIVE_VS_INITIAL_NO_EFFECT_CLAIM`。確定判別には使わない。

### release-date注意

- KONAMI公式: **稼動開始 2015-03-02**。
- K-Navi: **ホール導入開始 2015-03-02**。
- グリーンべると: **納品予定 2015-03-01**。
- 納品日とホール稼働日を別定義として扱い、releaseDateは03/02。

## 2015-03-02群 — OPEN

今回横断検索で同日候補として確認:

- **コブラ** — SNKプレイモア — A+ART
- **スーパーラクラクビスカス** — パイオニア — ノーマルA
- **戦国コレクション2** — KPE — AT — **No.870処理済み**
- **パチスロサイバーブルー** — 三洋物産 — AT
- **パチスロベルセルク** — 七匠 — 疑似ボーナス/ART系

※上の同日一覧は横断補助資料で確認した候補。次回は各機種の公式/業界/当時解析で導入日・型式を個別固定してから登録する。

## 次回再開地点

1. **recordCount 870 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.870を再確認。
3. **2015-03-02同日群を継続**。今回検出した未処理候補を公式・業界・当時DBで個別照合する。
4. 次処理優先候補: **コブラ（SNKプレイモア）**。03/02導入を複数系統で固定できればNo.871として性能コア + resetBehavior v0.7を収集。
5. その後 **スーパーラクラクビスカス → パチスロサイバーブルー → パチスロベルセルク** を漏れ防止優先で処理。ただし同日群の公式/業界資料横断で別機が見つかった場合は追加する。
6. 03/02群を全メーカー再監査後にのみ `CLOSED_FOR_CURRENT_RESEARCH` 判定。
7. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、メーカー公式・業界・当時解析・古いDB・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
8. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機を混同しない。戦国コレクション4/5/6のリセット契約を戦コレ2へ転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### 戦国コレクション2
- KONAMI公式LINEUP: https://www.konami.com/games/sencolle/lineup/slot/index.php
- K-Navi: https://p-kn.com/slot/2201/
- グリーンべると: https://web-greenbelt.jp/00007498/
- PiDEA: https://www.pidea.jp/articles/KPE%E3%80%8C%E6%88%A6%E3%82%B3%E3%83%AC2%E3%80%8D5%E5%8F%B7%E6%A9%9F%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%9AMY%E3%81%A7%E7%99%BB%E5%A0%B4
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/39/a.php
- パチマガスロマガ AT突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/39/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7631
- すろぱちくえすと 設定別モード移行率: https://www.slopachi-quest.com/article/sengoku-collection-mode/
- すろぱちくえすと 朝一リセット: https://www.slopachi-quest.com/article/senkore-reset/
- pacnk: https://pacnk.com/slot/tools/sh_sengokucollection2015.html
- みんスロ: https://minslo.com/%E6%88%A6%E5%9B%BD%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B32/
- 中一商事（型式補助）: https://www.nakaiti.com/html/sKpe085.html

### 03/02群横断補助
- 2015年導入スロット新台まとめ: https://slotnews777.blog.fc2.com/blog-entry-2348.html
