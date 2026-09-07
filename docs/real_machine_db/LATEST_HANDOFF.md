# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **868**
- latestRecordAdded: **ハナビ**（アクロス）
- latestRecord: `docs/real_machine_db/machines/2015-02-23_hanabi.md`
- chronologicalFrontier: **2015-02-23**
- frontierLatestMachine: **ハナビ**（アクロス）
- schema: **resetBehavior v0.7**
- status: **2015-02-23_GROUP_OPEN / NEXT_SAME_DAY_CANDIDATE_SUPER_BINGO_NEO_30**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.867 `2015-02-16_aladdin-a2.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **867件 / chronologicalFrontier 2015-02-16 / 02-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 前handoff指定の **2015-02-17～02-22境界**を再監査。K-Navi全国導入カレンダーは02/16から02/23へ直接進み、同期間のパチスロ全国導入候補を掲載していないため `2015-02-17_TO_2015-02-22_CLOSED_FOR_CURRENT_RESEARCH`。
- 次アンカー **アクロス「ハナビ」**をNo.868として追加。
- 02/23群監査中、K-Naviでは「2月下旬」とされる **スーパービンゴNEO-30** が、HAZUSEでは **2015-02-23導入開始**と確認できたため、02/23群はOPENのまま次回へ引継ぐ。

## No.868 — ハナビ

- record: `docs/real_machine_db/machines/2015-02-23_hanabi.md`
- manufacturer: **アクロス**
- releaseDate: **2015-02-23**
- modelName: **ハナビBHS2**
- inspectionNumber: **5S0636**
- systemType: **5号機 ノーマル / ボーナス+RT / 技術介入**
- settings: **1 / 2 / 5 / 6 の4段階**

### 性能コア

- BIG: **1/312.1 / 303.4 / 292.6 / 277.7**（設定1/2/5/6）。
- REG: **1/385.5 / 368.2 / 348.6 / 324.4**。
- 合算: **1/172.5 / 166.3 / 159.1 / 149.6**。
- 通常攻略側機械割: **98.0 / 99.9 / 103.1 / 106.1%**。
- フル攻略時: **100.5 / 102.3 / 105.4 / 108.5%**。
- 設定5通常側は別資料に103.3%があり `CONFLICT_SETTING5_BASE_PAYOUT_103_1_VS_103_3`。平均しない。
- 50枚ベース: **約34.9～36.8G**。
- BIG最大**311枚**、REG**104枚**。
- BIG後RT「花火チャレンジ」最大20G・約+0.3枚/G → 「花火GAME」20G固定・約+0.5枚/G。
- 天井・ゾーン: **非搭載**。

### resetBehavior v0.7

- 一撃の本機専用解析で **設定変更時詳細「特になし」 / 電源OFF・ON「特になし」**。
- 天井・規定Gモード非搭載のため、gameCounterReset / ceilingAfterReset / modeAfterReset は `NOT_APPLICABLE`。
- 設定変更専用の朝一短縮天井・CZ・高確・専用モード・公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH` または該当なし。
- 据え置き専用のゲーム数恩恵/不利要素も確認されない。
- **設定変更時にリールガックンしない**。必勝本の実機検証でもハナビを複数回試し、ガックンなしを確認。別解析でも「朝一ガックン判別不可」。
- ホールが変更後1G回す運用なら前日出目比較が補助材料になり得るが、店側運用依存のため確定判別にはしない。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 欠損再探索

- 表記揺れ: `ハナビ / HANABI / ぱちすろハナビ / ハナビBHS2 / アクロス ハナビ`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ゾーン / ガックン / リールガックン / 設定変更判別 / 出目`。
- 資料系統: ユニバーサル公式、K-Navi、HAZUSE、一撃、当時解析、後年実機検証・回顧資料。
- 4号機ハナビ、ハナビ通、新ハナビ、スマスロ ハナビは別機種として除外。

## 2015-02-17～02-22境界 — CLOSED_FOR_CURRENT_RESEARCH

- K-Navi全国導入カレンダーでは02/16「アラジンAII」から02/23「ハナビ」へ直接進む。
- 発表日・検定日・納品予定日をホール全国導入日へ変換していない。
- 今回、安全に追加できる同期間の未処理5号機を固定できなかった。

## 2015-02-23群 — OPEN

処理済み:
- No.868 **ハナビ**（アクロス）

未処理強候補:
- **スーパービンゴNEO-30 / スーパービンゴネオS2-30**（ベルコ）
  - K-Navi: 2015年2月下旬
  - HAZUSE: **2015-02-23導入開始**
  - HAZUSE型式系統: `スーパービンゴネオS2-30`
  - 25φ「スーパービンゴNEO」は既存レコードとの重複・派生関係を必ず確認し、30φ独立レコードとして扱う根拠を確認してから追加する。

## 次回再開地点

1. **recordCount 868 / chronologicalFrontier 2015-02-23 / 02-23_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.868 を再確認。
3. **ベルコ「スーパービンゴNEO-30（スーパービンゴネオS2-30）」**をNo.869候補として最優先処理。
4. まず既存の25φ「スーパービンゴNEO」レコードを検索し、30φが独立型式・独立導入としてDB上独立レコード化すべきことを確認する。性能共通に見えても自動転記せず、30φ固有資料で性能コアとresetBehavior v0.7を照合する。
5. 30φ処理後、2015-02-23同日群を全メーカー横断で再監査してCLOSED判定。その後02/24以降へ進む。
6. 新規機では性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ・型式・メーカー/シリーズ名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、複数資料系統を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機・25φ/30φ派生を混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### ハナビ
- ユニバーサル公式: https://www.universal-777.com/product/slot/hanabi_2015/
- K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
- K-Navi 機種情報: https://p-kn.com/slot/2183/
- K-Navi ボーナス確率: https://p-kn.com/slot/2183/53056/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0636/
- HAZUSE RT: https://hazuse.com/machine/pachislot/5S0636/genre/209/
- 一撃: https://1geki.jp/slot/hanabi/
- 一撃 天井/設定変更: https://1geki.jp/slot/hanabi/3/
- 一撃 ボーナス: https://1geki.jp/slot/hanabi/71/
- なな徹 50枚ベース: https://nana-press.com/kaiseki/machine/58/1097/
- 2-9伝説: https://2-9densetsu.com/hanabi/
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/hanabi/
- 激アツ 設定判別: https://gekiatsu7.com/slot-analyze/64/
- パチ＆スロ必勝本 ガックン検証: https://p.hisshobon.jp/column/16922/17192

### 次候補日付確認
- HAZUSE スーパービンゴネオS2-30: https://data.hazuse.com/?genre=209&machine_code=4S0463
