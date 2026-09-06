# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **851**
- latestRecordAdded: **スーパービンゴNEO**（ベルコ）— 2014-10-20
- latestRecord: `docs/real_machine_db/machines/2014-10-20_super-bingo-neo.md`
- chronologicalFrontier: **2014-10-20**
- frontierLatestMachine: **スーパービンゴNEO**
- schema: **resetBehavior v0.7**
- status: **2014-10-20_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.850 `2014-10-06_pachislot-ooumi-monogatari-with-t-ara.md` を再読。
- INDEXは旧集約状態（19件表示）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **850件 / 2014-10-06 / 10-06_GROUP_OPEN**。

## 重要訂正 — 龍が如く 見参！天照祇園編

- 前回handoffで10/06未処理パチスロ候補として挙がっていた **「龍が如く 見参！天照祇園編」（タイヨーエレック）**を再確認。
- P-WORLD等で同機は **CRパチンコ機（デジパチ）**と確認。パチスロではない。
- よって実機性能「物差し」DBのパチスロ本線には追加しない。
- ALL7はパチンコ/パチスロ混在一覧であり、種別を機種名だけで推定しないこと。

## 2014-10-06群 — CLOSED_FOR_CURRENT_RESEARCH

### 登録済み/重複禁止

- No.846 戦律のストラタス — 2014-09-29新潟先行、10/06全国稼働。重複作成しない。
- No.847 バビロン with 桜丘ショコラ — 09-29/10-06日付CONFLICT管理済み。重複作成しない。
- No.848 シンデレラブレイド2（ネット）
- No.849 パチスロ三國志（ニューギン）
- No.850 パチスロ大海物語 with T-ARA（三洋物産）

- ALL7 2014年10月一覧上、10/06の残り掲載（FEVER KODA KUMI LEGEND LIVE / T.M.Revolution / ayumi hamasaki2 等）はパチンコ機。
- 「龍が如く 見参！天照祇園編」もパチンコ機であることを再確認。
- 追加の具体日付き未登録5号機を今回の横断再探索で固定できなかったため、10/06群を `CLOSED_FOR_CURRENT_RESEARCH` とする。

## 2014-10-07〜10-19境界監査

- ALL7月間一覧、具体日検索、当時新台検索で再監査。
- 10/14検索では「パチスロ バーチャファイター」の**スマホアプリ配信日**がヒットするが、実機導入日ではないため除外。
- 今回、10/07〜10/19にホール導入開始日を具体的に固定できる未登録5号機を確認できず、境界を `CLOSED_FOR_CURRENT_RESEARCH` とする。
- 次の明確なパチスロ日付アンカーは **2014-10-20**。

## No.851 — スーパービンゴNEO

- record: `docs/real_machine_db/machines/2014-10-20_super-bingo-neo.md`
- manufacturer: **ベルコ**。
- hall start: **2014-10-20**。K-Navi、ALL7、アタリ7、当時解析で一致。
- 型式: **スーパービンゴネオS2-30**。
- 検定識別: **4S0463**（HAZUSE）。
- system: **5号機 AT / 周期・ゾーン抽選 / 継続率管理 + G数上乗せ**。
- AT初当たり: **1/337.6 / 321.4 / 302.1 / 277.6 / 252.9 / 230.0**。
- 機械割: **97.0 / 98.8 / 100.2 / 104.3 / 108.6 / 113.1%**。
- 50枚ベース: **約29.8G**。後年二次DBのため `ANALYSIS_SINGLE_SECONDARY`。
- AT純増: **約2.8枚/G**。
- BC: **1セット33G以上+α**。
- 通常A天井: **999G+前兆**。
- 通常B天井: **444G+前兆**。

## resetBehavior v0.7 — スーパービンゴNEO

- 設定変更時: **天井内部G RESET / モード・状態再抽選**。
- 設定変更時モード振り分け（全設定共通）:
  - 通常A 65%（999G+前兆）
  - 通常B 35%（444G+前兆）
- 周期集中モード移行抽選あり。
- 据え置き時のフェイク前兆は**前日+当日の宵越し内部G基準**で発生する当時解析があり、内部G CARRYOVERを支持。
- 純電源OFF→ON時は液晶カジノステージ開始という当時資料あり。ただし2014年機固有の内部天井G/モード/状態保持契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更判別:
  - 3BET/コイン投入ランプが変更時に全消灯する解析あり。ただし精算等で対策可能。
  - 朝一当日ゾロ目Gでフェイク前兆が出れば変更濃厚となるケースあり。
  - 朝一ステージは電断でも同じため単独判別不可。
- 新台初日初回AT **254件**の実践集計では、朝一極端な早当たり優遇は観測されず。`PERIOD_OBSERVATIONAL`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 2024年の **Lスーパービンゴネオ**は別機種。777Gリセット天井、有利区間、ビンゴポイント等を2014年機へ流用しない。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-10-20群 — OPEN

### 登録済み

- No.851 スーパービンゴNEO（ベルコ）

### 次の強い未処理候補

1. **パチスロ バーストエンジェル**（山佐）— 2014-10-20

- ALL7で2014/10/20導入予定を確認。
- 次回は同機を最優先で処理。
- その後10/20同日群を全メーカー横断で再監査し、パチンコ機を除外した上で他の未登録パチスロを確認する。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`（トレジャーパイレーツ）。
- 新規本線を止めず、後続リレーで既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- ALL7はパチンコ/パチスロ混在。候補抽出後に必ず種別確認する。
- 「龍が如く 見参！天照祇園編」はパチンコ機であり、本線へ追加しない。
- 2014年スーパービンゴNEOと2024年Lスーパービンゴネオを混同しない。
- 2014年機の純電断内部保持はスマスロ版仕様から推定しない。
- 50枚約29.8Gは二次DB単独値のため信頼度を一段下げて保持。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 851 / chronologicalFrontier 2014-10-20 / 10-20_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.851を再確認。
3. 次の未処理は **パチスロ バーストエンジェル（山佐）**。
4. 同機処理後、2014-10-20同日群を全メーカー横断で再監査。
5. 漏れがなければ10/20群をCLOSED判定し、次の具体日へ進む。
6. 遡及QAは `2007-03-11_treasure-pirates.md` から再開。

## 主要出典 — 取得日 2026-09-07

### スーパービンゴNEO
- K-Navi: `https://p-kn.com/slot/2106/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7481`
- アタリ7: `https://www.atari7.com/slot/date1414054324.php`
- パチスロ解析ガイド: `https://pachislot-guide.net/2014/super-bingo-neo/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0463/genre/208/`
- 期待値見える化（朝一）: `https://slotjin.com/slot/superbingoneo-reset/`
- ちょんぼりすた（2014年機）: `https://chonborista.com/slot/belko-slot/46232/`
- みんスロ: `https://minslo.com/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%83%8D%E3%82%AA/`
- ALL7 2014年10月: `https://www.all7.jp/plans/index/2014/10`

### 龍が如く候補訂正
- P-WORLD CR龍が如く見参!天照祗園編: `https://www.p-world.co.jp/machine/database/7515`
