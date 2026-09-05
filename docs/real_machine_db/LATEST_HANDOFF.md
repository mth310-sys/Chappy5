# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **728**
- latestMachineAdded: **ジャグラーガールズ**（北電子）
- latestRecord: `docs/real_machine_db/machines/2013-04-08_juggler-girls.md`
- chronologicalFrontier: **2013-04-08**
- frontierLatestExactDateMachine: **ジャグラーガールズ**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-04-08_GROUP__AUDIT_REMAINING_SAME_DAY_BEFORE_ADVANCE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-04-01_kimberly-30.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **727** / chronologicalFrontier **2013-04-01** / 04-01群CLOSED。
- 04-02～04-07境界を検索し、先行HANDOFF指定の **2013-04-08「ジャグラーガールズ」** を重複確認後、性能コア＋resetBehavior v0.7を同時収集して **728件目**として追加。

## 今回追加 — ジャグラーガールズ

### identity / 性能コア

- manufacturer: **北電子**。
- releaseDate: **2013-04-08**（K-Navi）。
- systemType: **5号機 / ノーマルAタイプ / 完全告知 / ジャグラー**。
- 機械割公表系列: **96.5 / 97.8 / 99.7 / 102.0 / 103.9 / 107.4%**。
- BIG: **1/287.4 / 282.5 / 273.1 / 264.3 / 258.0 / 240.9**。
- REG: **1/397.2 / 364.1 / 334.4 / 297.9 / 286.2 / 270.8**。
- 合算: **1/166.8 / 159.1 / 150.3 / 140.0 / 135.7 / 127.5**。
- 50枚ベース: **約35.14～35.98G/50枚**（設定差あり掲載値）、別整理資料は約35～36G。
- BIG約**312枚** / REG約**104枚**。
- ゲーム数天井: **NO_CEILING_FUNCTION_CONFIRMED**。

### resetBehavior v0.7

- ノーマル機で天井/規定G解除/AT・ARTモードを持たないため、`gameCounterReset` / `ceilingAfterReset` / `modeAfterReset` は **NOT_APPLICABLE**。
- `stateAfterReset`: **NOT_APPLICABLE_NORMAL_TYPE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更専用の短縮天井、朝一モード、CZ優遇等: **NONE_CONFIRMED_AFTER_RESEARCH**。
- **朝一1G目のガックン**は2013年版本機の変更推測要素として後年の機種別整理と実戦回顧で確認。ただし変更後1G回し・据え置き台のリール操作等で対策可能なので確定判別扱いにはしない。
- 純据え置き時のクレジット/BET/初期出目、および2013年版本機固有の単純電源OFF→ON時挙動は、機種名/シリーズ名と「設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・クレジット・BET」を組み替え、当時/後年解析を横断したが直接契約を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2024年6号機「ジャグラーガールズSS」の設定変更/電断契約は別型式のため流用していない。

### CONFLICT

- 機械割は公表系列 **96.5～107.4%**に対し、別解析で **98.07 / 99.44 / 101.54 / 104.07 / 106.21 / 110.08%** が存在。攻略/シミュレート条件差とみられるため平均せず `CONFLICT_PUBLISHED_VS_SIMULATION_OR_TECHNICAL_PLAY` として保存。

## 次回再開地点

1. **recordCount 728 / chronologicalFrontier 2013-04-08 / 04-08群OPEN** から開始。
2. 2013-04-08同日群をK-Navi/P-WORLD/HAZUSE/当時導入予定表・メーカー別一覧で再監査し、他の未登録5号機があれば最も古いものから追加。
3. 04-08群に追加がなければCLOSEDとし、04-09以降の次の具体導入日へ進む。
4. 「2013年4月8日」という検索結果には後年の撤去期限/検定期限逆算や2024年版ジャグラーガールズSSが混入するため、導入日定義を必ず分離する。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/クレジット/BET/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### ジャグラーガールズ

- K-Navi（2013-04-08導入、全設定BIG/REG/合算/機械割、払い出し条件）: `https://p-kn.com/slot/1809/`
- PachiSeven ジャグラー一覧（導入日、全設定スペック、312/104枚）: `https://pachiseven.jp/articles/detail/9823`
- juggler7（2013年版、1000円あたり35.14～35.98G、解析値）: `https://juggler7.com/girls/index.html`
- 元プロMG ジャグラーシリーズまとめ（約35～36G、ガックン判別○）: `https://www.pachislotblog.tokyo/juggler-series-specmatome/`
- 元プロMG 実戦回顧（変更台ガックン事例、ホール対策）: `https://www.pachislotblog.tokyo/juggler-girls-settei6-data/`
- 激アツ（別機械割系列98.07～110.08%）: `https://gekiatsu7.com/slot-analyze/71/`
- スロパチクエスト（設定変更朝一挙動の後年解析索引）: `https://www.slopachi-quest.com/article/juggler-girls/`

### 同日群監査注意

- 撤去期限系カレンダーの「2013年4月8日」は導入日ではない場合がある。例: ハローサンタUMVはK-Navi/ALL7で導入 **2013-06-17** を確認しており04-08候補から除外。