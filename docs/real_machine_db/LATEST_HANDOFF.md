# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **840**
- latestRecordAdded: **パチスロ 戦国BASARA3**（エンターライズ）— 2014-09-01
- latestRecord: `docs/real_machine_db/machines/2014-09-01_sengoku-basara3.md`
- chronologicalFrontier: **2014-09-01**
- frontierLatestMachine: **パチスロ 戦国BASARA3**
- schema: **resetBehavior v0.7**
- status: **2014-09-01_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、839件目 `2014-08-18_okidoki-30.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **839件 / 2014-08-18 / 08-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2014-08-19〜08-31を `パチスロ / 新台 / 導入 / ホール導入 / 納品 / 2014年8月` 等で再監査し、今回の探索範囲では具体日付き未登録5号機を固定できなかったため **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い具体日アンカーとして **2014-09-01「パチスロ 戦国BASARA3」**をK-Navi・パチセブン・解析DBで固定し、No.840として登録。
- machine record commit: `d688d70580d457e7386f5f7cc84fa5bf77e8d18f`。

## 今回追加 — パチスロ 戦国BASARA3

### 性能コア

- manufacturer: **エンターライズ**。
- hall start: **2014-09-01**。
- type: **5号機 / 疑似ボーナス+ART / CZ / 天井**。
- 機械割主系列: **97.1 / 98.8 / 101.0 / 105.9 / 108.0 / 113.3%**。
- BASARA BONUS: **1/523.7 → 1/372.2**。
- 武将BONUS: **1/791.3 → 1/452.8**。
- ボーナス合算: **1/315.1 → 1/204.3**。
- ART初当たり: **1/355.2 → 1/208.5**。
- 50枚ベース: **約30G**。
- ART純増: **約2.2枚/G**。
- BASARA FEVER: **40G+α**。
- BASARA BONUS: ベルナビ20/30/50/100回、武将BONUS: ベルナビ8回。
- 第一天井: ボーナスまたはART間 **996G+前兆**。
- 第二天井: ボーナス間 **1598G+前兆**。
- coreStatus: **COMPLETE_CORE**。

### CONFLICT

- 機械割は複数整理資料の主系列 **97.1 / 98.8 / 101.0 / 105.9 / 108.0 / 113.3%** を採用。
- Pachinavi現行再構築ページは設定1 **97.3%**、設定3 **102.3%** と異なるため平均せず `CONFLICT_PAYOUT_RATE_SETTINGS_1_3` をレコードに保持。

## resetBehavior v0.7 — 戦国BASARA3

- 設定変更: **天井G RESET / 内部モード再抽選 / 高確スタート**。
- 設定変更時モード振り分け:
  - 設定1・3・5: 通常A/B **92.5%** / 天国A/B **7.5%**
  - 設定2・4: 通常A/B **90.0%** / 天国A/B **10.0%**
  - 設定6: 通常A/B **87.5%** / 天国A/B **12.5%**
- モード別第一天井: 通常A/B **996G+前兆** / 天国A **96G+前兆** / 天国B **32G+前兆**。
- 据え置き: 当時実戦記録の宵越し第二天井到達例から、少なくとも **ボーナス間天井進捗CARRYOVER**を支持。
- 純粋な電源OFF→ONのみ: 本機固有の直接契約を高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き実戦値から自動推定しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: **高確スタート + 天国A/B 7.5〜12.5%**。
- 変更判別: 高確スタートでも朝一夕方ステージ固定ではない。本機固有の確実なガックン等は `UNVERIFIED_AFTER_RESEARCH`。
- publicMorningNumbers: **天国A/B 7.5% / 10.0% / 12.5%（設定群別）**。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-08-19〜08-31境界監査

- 検索語を日付・月表記・新台/導入開始/納品へ変え、P-WORLD、K-Navi、パチセブン、業界記事・解析DBを横断。
- P-WORLDの「最終更新日」を導入日と誤認しない既存safeguardを維持。
- 今回の検索範囲では08-19〜08-31に具体日で固定できる未登録5号機を確認できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の具体的ホール導入アンカーは **2014-09-01 戦国BASARA3**。

## 2014-09-01群

- 戦国BASARA3を登録済み。
- 同日群の網羅監査はまだ完了扱いにせず **OPEN** とする。
- 次回、`2014-09-01 / 9月1日 / パチスロ / 新台 / 導入開始 / ホール導入 / 納品` とメーカー別一覧を再照合し、同日未登録機があれば先に処理する。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。
- 新規収集を止めず、本線と並行して1件ずつ前進する。

## safeguard

- 実機版「戦国BASARA3」とゲーム版・舞台版を混同しない。
- 機械割競合値は平均しない。
- 天国A/B合算の設定変更振り分けをA/B個別値へ推定分解しない。
- 据え置き実戦による宵越し支持を、純電源OFF→ONの確定契約へ拡張しない。
- P-WORLDの最終更新日を導入日に使用しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 840 / chronologicalFrontier 2014-09-01 / 09-01_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 840件目を再確認。
3. **2014-09-01同日群を再監査**し、未登録機があれば時系列同日群として処理。
4. 同日群をCLOSEDにできたら09-02以降の境界監査を行い、次の具体的ホール導入日へ進む。
5. 遡及QAは **`2007-02_new-hanahana-30.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### 戦国BASARA3
- P-WORLD: `https://www.p-world.co.jp/machine/database/7480`
- K-Navi: `https://p-kn.com/slot/2107/`
- パチセブン: `https://pachiseven.jp/machines/4243/cutout/3`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/09/01.php`
- パチマガスロマガ CZ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/09/03.php`
- パチスロ解析ガイド: `https://pachislot-guide.net/2014/sengoku-basara3/`
- すろぱちくえすと リセット: `https://www.slopachi-quest.com/article/basara3-reset/`
- すろぱちくえすと 機種別: `https://www.slopachi-quest.com/kisyubetsu/sengoku-basara3/`
- 当時解析整理: `https://ameblo.jp/mpkhb1311/entry-11902976739.html`
- Pachinavi競合値: `https://pachinavi.net/machines/sengoku-basara-3/`
