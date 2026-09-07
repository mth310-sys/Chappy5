# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **886**
- latestRecordAdded: **最胸伝奇 パイ遊記**（ネット）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-05-25_saikyou-denki-pai-yuuki.md`
- chronologicalFrontier: **2015-05-25**
- frontierLatestMachine: **最胸伝奇 パイ遊記**
- frontierRecord: `docs/real_machine_db/machines/2015-05-25_saikyou-denki-pai-yuuki.md`
- schema: **resetBehavior v0.7**
- status: **2015-05-25_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、旧 `LATEST_HANDOFF.md`、No.885 `2015-05-11_mensore-30.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **885件 / 2015-05-11 / GROUP_CLOSED**。

## 境界監査 2015-05-12〜05-24

- 「2015年5月12日〜24日 / パチスロ / 新台 / 導入 / 稼働開始」を日付・メーカー・機種一覧系で再探索。
- 今回の範囲では、既存DBへ追加すべき具体日付き未登録5号機を強く固定できなかった。
- よって **`2015-05-12_TO_05-24_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH`** として05/25へ前進。
- 検定告示日・発表日・納品予定日を実ホール導入日として混入しない。

## No.886 — 最胸伝奇 パイ遊記

- record: `docs/real_machine_db/machines/2015-05-25_saikyou-denki-pai-yuuki.md`
- manufacturer: **ネット**
- releaseDate canonical: **2015-05-25**
- generation: **5号機**
- systemType: **AT / 疑似ボーナス搭載 / 周期管理**

### 性能コア

- 機械割: **97.0 / 98.5 / 100.0 / 103.0 / 105.3 / 113.0%**。
- AT初当たり: **1/303 / 289 / 275 / 244 / 226 / 180**。
- パイ遊記ボーナス: **1/2131 / 2090 / 2018 / 1844 / 1713 / 1569**。
- 50枚ベース: **約32.3G/50枚**。
- AT「キントウンRUSH」純増: **約2.5枚/G**。
- AT初当たり時の初期G数決定: **50〜110G**を基礎とし、選択式の激増チャンスで成功1.5〜4倍/失敗半減。
- 周期天井: **最大12周期（約1400G目安）**。

### resetBehavior v0.7

- 設定変更時は天井モード再抽選。
- リセット時モード: **通常A24% / 通常B60% / チャンス13% / 天国3%**。
- 朝一内部状態: **通常78% / 高確22%**。
- 天国は1周期天井。リセット専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き時の悟空カウンター/周期/モード/状態の包括的引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の本機固有契約も `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン/初期出目/表示/カウンターによる変更判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間は `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### release-date conflict

- K-Navi、PachiSeven、当時解析は **2015-05-25導入**で一致。
- ネット株式会社2015-03-27発表は **「2015年6月上旬より全国のパチンコホールに導入予定」**。
- ネット株式会社2015-06-01アプリ告知は **「2015年5月導入」** と記載。
- 実導入系複数一致からchronological canonicalは2015-05-25とし、公式予定との差は `CONFLICT_RELEASE_DATE_OFFICIAL_SCHEDULE_VS_HALL_DATABASE` として保持。

## 2015-05-25群監査

処理済み:
- **最胸伝奇 パイ遊記** — ネット — No.886。

未処理の強い同日候補:
- **ドラゴンギャル～双龍の闘い～** — SNKプレイモア — HAZUSE/当時解析で2015-05-25、型式ドラゴンギャル双龍の闘いAB / 検定4S1080。

05/25群はまだ **OPEN**。ドラゴンギャル処理後に全メーカー横断再監査を行い、追加候補がなければCLOSED判定する。

## 次回再開地点

1. **recordCount 886 / chronologicalFrontier 2015-05-25 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / `2015-05-25_saikyou-denki-pai-yuuki.md` を再確認。
3. 次の未処理機種は **2015-05-25「ドラゴンギャル～双龍の闘い～」（SNKプレイモア）**。
4. 性能コア + resetBehavior v0.7を本機固有資料で収集する。
5. 設定変更/据え置き/純電断、天井、宝玉/CZ/AT状態、朝一恩恵、ガックン等の判別、公開朝一数値を検索語と資料系統を変えて十分再探索する。
6. 05/25同日群を全メーカー横断監査し、漏れがなければCLOSED。
7. exact release dateでは検定告示 / 発表 / 納品予定 / 地域先行 / 全国稼働 / 実ホール導入を分離する。
8. `UNVERIFIED_AFTER_RESEARCH` は複数検索語・資料系統を再探索した後だけ使用。
9. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置き・純電断は本機固有資料なしに一般的5号機慣例から推定しない。
- 同名/近似名・シリーズ旧作のリセット挙動を流用しない。
- 周期天井の「約1400G」は固定ゲーム数天井と混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### 最胸伝奇 パイ遊記
- NET公式発表: https://www.dreamnews.jp/press/0000109924
- NET公式アプリ発表: https://www.dreamnews.jp/press/0000113386
- グリーンべると: https://web-greenbelt.jp/00007728/
- K-Navi: https://p-kn.com/slot/2254/
- PachiSeven AT: https://pachiseven.jp/machines/4482/cutout/6
- ちょんぼりすた: https://chonborista.com/slot/net-slot/7782/
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/161/c.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/saikyoudennki-paiyyuuki/
- pacnk: https://pacnk.com/slot/tools/sh_paiyuki.html

### 次回05-25候補
- ドラゴンギャル～双龍の闘い～ HAZUSE: https://hazuse.com/machine/pachislot/4S1080/
- 当時天井解析: https://www.slopachi-quest.com/article/dragon-girl/
