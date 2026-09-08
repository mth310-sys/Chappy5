更新日: 2026-09-08

## 現在地点
- recordCount: **1022**
- latestRecordAdded: **パチスロ薄桜鬼蒼焔録**（D-light / ディ・ライト）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-11-07_hakuoki-souenroku.md`
- chronologicalFrontier: **2016-11-07**
- frontierLatestMachine: **パチスロ薄桜鬼蒼焔録 — No.1022**
- schema: **resetBehavior v0.7**
- status: **2016-11-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-08_TO_2016-11-13_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-14_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1021実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 最新main実レコードを進捗正本として使用。既存性能コアはやり直していない。
- main正本 **1021件 / chronologicalFrontier 2016-11-07 / 11/07群OPEN** から継続。
- handoff指定の次未処理 **D-light「パチスロ薄桜鬼蒼焔録」**をGitHub内重複確認し、No.1022として追加。
- 11/07群を日付別導入カレンダー、HAZUSE、K-Navi、メーカー別/業界資料で横断。現在固定できる同日パチスロは **ウィッチマスター / 薄桜鬼蒼焔録**の2機で、双方登録済み。11/07群を `CLOSED_FOR_CURRENT_RESEARCH` とする。
- 2016-11-08〜11-13境界を「導入/新台/納品」日付別で再探索し、新たな全国導入パチスロ未登録機を固定できず `CLOSED_FOR_CURRENT_RESEARCH`。
- 次の確認済み導入日群は **2016-11-14**。少なくとも **パチスロ 凪のあすから**（NET）と **ウィッチクラフトワークス**（DAXEL）が複数資料で確認できるため11/14群をOPENとする。

## No.1022 — パチスロ薄桜鬼蒼焔録
- manufacturer: **D-light / ディ・ライト**
- releaseDate: **2016-11-07**
- formalModelName: **薄桜鬼蒼焔録WV**
- certificationNumber: **6S0586**
- generation/system: **5号機 / 5.5号機期 / ノーマルAタイプ / 技術介入**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_BASE_CONFLICT**

### performanceCore
- 機械割: **97.4 / 98.7 / 99.8 / 102.7 / 106.2 / 110.1%**（設定1〜6）。HAZUSE/K-Navi/ちょんぼりすた一致。
- BIG: **1/370.26 / 364.09 / 360.09 / 350.46 / 344.93 / 322.84**。
- REG: **1/431.16 / 417.43 / 402.06 / 390.10 / 378.82 / 337.81**。
- 合算: **1/199.20 / 194.47 / 189.96 / 184.61 / 180.54 / 165.08**。
- BIG約**400枚** / REG約**100枚**。PiDEA当時業界記事、HAZUSE、K-Navi、P-WORLDで整合。
- ベースは資料競合を保持:
  - HAZUSE: **約36.4〜38.7G/50枚**
  - ちょんぼりすた/すろぱちくえすと: **37.6〜40.1G/50枚**（ちょんぼりすた設定別 37.6/37.9/38.2/38.7/40.0/40.1G）
  - `CONFLICT_BASE_36_4_TO_38_7_VS_37_6_TO_40_1`。平均化しない。
- AT/ART非搭載、天井非搭載。

### resetBehavior v0.7
- 純ボーナス型ノーマルAタイプで**天井非搭載**。設定変更による天井短縮、朝一専用当選モード、CZ/AT優遇は構造上N/A。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: 経営シミュレーション上の朝一当選モード **NONE_CONFIRMED / NOT_APPLICABLE**。液晶の5演出モードはプレイヤー任意選択で、朝一内部モードとは別物。
- stateAfterReset: AT/ART用低確/高確/CZはN/A。本機に存在するプチRT等の一時的内部状態について、設定変更/据え置き/純電断の直接契約は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- settingChange/carryOver/powerCycle: 天井進捗の経営上の差はN/A。一時内部状態だけ推測せずUNVERIFIED。
- resetBenefits: **NONE_CONFIRMED / STRUCTURALLY_NOT_APPLICABLE**。
- resetPenalties: 前日天井進捗消失等はN/A。その他固有不利はNONE_CONFIRMED_AFTER_RESEARCH。
- resetDetection: 本機固有のガックン/初期出目/ランプ/液晶による確定的変更判別は検索語・資料系統変更後も **NONE_CONFIRMED_AFTER_RESEARCH**。一般Aタイプ論から補完しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### numericResetData
- 通常天井: **NONE**
- 設定変更後天井: **NONE**
- リセット専用モード振り分け: **NONE_CONFIRMED / NOT_APPLICABLE**
- 朝一特定G以内当選率/恩恵率: **NONE_CONFIRMED**

## 2016-11-07群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **パチスロ ウィッチマスター**（山佐）— No.1021
- **パチスロ薄桜鬼蒼焔録**（D-light）— No.1022

監査:
- 日付別導入カレンダーでは11/07群は上記2機。
- HAZUSE、K-Navi、メーカー別一覧/当時業界資料でも双方の11/07を確認。
- 同日で新たに固定できる全国導入パチスロ未登録機は今回確認できず `CLOSED_FOR_CURRENT_RESEARCH`。

## 2016-11-08〜11-13境界 — CLOSED_FOR_CURRENT_RESEARCH
- 日付別「パチスロ 新台 導入 納品」検索、2016年11月カレンダー、メーカー別一覧を横断。
- 新規全国導入パチスロを固定できずCLOSED。
- 次の確認済み本線日付は **2016-11-14**。

## 2016-11-14群 — OPEN
確認済み候補:
1. **パチスロ 凪のあすから**（NET / ネット）— 1gekiメーカー一覧で導入開始2016-11-14、A+RT/ノーマル。次回先頭候補。
2. **ウィッチクラフトワークス**（DAXEL）— 複数解析・当時新台DBで2016-11-14導入一致。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1022を再取得。
2. **1022件 / chronologicalFrontier 2016-11-07 / 11/07群CLOSED / 11/14群OPEN** を正本として継続。
3. **2016-11-14「パチスロ 凪のあすから」（NET）**をGitHub内重複確認し、性能コア + resetBehavior v0.7を同時収集してNo.1023候補として処理。
4. 続いて **ウィッチクラフトワークス（DAXEL）**を処理し、11/14同日群を全メーカー横断監査。
5. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1022 パチスロ薄桜鬼蒼焔録
- D-light / Daiichi公式: https://daiichi777.jp/product/detail/140/hakuoki
- PiDEA X: https://www.pidea.jp/articles/MAX-Atype%E3%81%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E8%96%84%E6%A1%9C%E9%AC%BC%E8%92%BC%E7%84%94%E9%8C%B2%E3%80%8D%E3%82%92%E7%99%BA%E5%A3%B2%EF%BC%8F%E3%83%87%E3%82%A3%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%88
- HAZUSE: https://hazuse.com/machine/pachislot/6S0586/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/6S0586/genre/201/
- K-Navi: https://p-kn.com/slot/2616/
- ちょんぼりすた: https://chonborista.com/slot/d-light/26047/
- すろぱちくえすと: https://www.slopachi-quest.com/article/hakuouki-settei/
- P-WORLD: https://www.p-world.co.jp/machine/database/8168

### 11/07群・次日群監査
- 2016年新台導入日カレンダー: https://moge-site.com/new-slot2016
- 1geki NETメーカー一覧（凪のあすから 2016-11-14）: https://1geki.jp/maker/net/
- ちょんぼりすた ウィッチクラフトワークス: https://chonborista.com/slot/daxel-slot/26251/
