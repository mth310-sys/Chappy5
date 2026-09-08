更新日: 2026-09-08

## 現在地点
- recordCount: **1023**
- latestRecordAdded: **パチスロ 凪のあすから**（NET / ネット）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-11-14_nagi-no-asukara.md`
- chronologicalFrontier: **2016-11-14**
- frontierLatestMachine: **パチスロ 凪のあすから — No.1023**
- schema: **resetBehavior v0.7**
- status: **2016-11-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-08_TO_2016-11-13_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-14_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1022実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約だが、README規定どおりINDEXより新しい `LATEST_HANDOFF.md` + 最新main実レコードを進捗正本として使用。
- handoff正本 **1022件 / chronologicalFrontier 2016-11-07 / 11/07群CLOSED / 11/14群OPEN** から継続。
- handoff指定の次未処理 **NET「パチスロ 凪のあすから」**をGitHub内重複確認し、No.1023として追加。
- 11/14群はまだOPEN。次の確認済み候補 **DAXEL「ウィッチクラフトワークス」**を次回先頭とする。

## No.1023 — パチスロ 凪のあすから
- manufacturer: **NET / ネット**
- releaseDate: **2016-11-14**
- formalModelName: **凪のあすから/NC**
- certificationNumber: **6S0815**
- generation/system: **5号機 / 5.5号機期 / A+RT / ボーナス主体 / 技術介入**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 通常掲載機械割: **97.8 / 98.8 / 100.2 / 102.1 / 104.0 / 106.9%**（設定1〜6）。
- 完全攻略時: **100.5 / 101.5 / 103.0 / 105.0 / 107.0 / 110.1%**。通常値とは攻略条件差として分離。
- BIG: **1/295 / 292 / 289 / 281 / 280 / 273**。
- REG: **1/412 / 399 / 374 / 354 / 307 / 273**。
- 合算: **1/172 / 168 / 163 / 156 / 146 / 136**。
- ベース: **34.1〜37.0G/50枚**（今回直接値はちょんぼりすた中心のためANALYSIS_SINGLE）。
- BIG: 技術介入時最大**290枚**、BIG+RT「エピソードボーナス」平均純増約**307枚**。
- REG: 技術介入時最大**111枚**。
- RT純増: エピソードチャレンジ約**+0.2枚/G**、エピソードゲーム/スペシャルエピソード約**+0.5枚/G**。
- 天井: **非搭載**。

### resetBehavior v0.7
- 一撃の2016年当時「天井/設定変更」ページは **天井非搭載**を明記。
- settingChangeBehavior: 天井短縮・朝一専用当選モード等はN/A。設定変更時の液晶ステージは当時資料で「現在調査中」。RT等一時内部状態の直接契約は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 天井進捗はN/A。据え置き時のRT等一時内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 一撃は電源OFF/ON時の液晶ステージも「現在調査中」。RT等一時内部状態は **UNVERIFIED_AFTER_RESEARCH**。設定変更と純電断を同一視しない。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: 朝一当選モード **NONE_CONFIRMED / STRUCTURALLY_NOT_APPLICABLE**。
- stateAfterReset: 通常時低確/高確/CZは主要構造上N/A。RT等一時状態のみUNVERIFIED。
- resetBenefits: **NONE_CONFIRMED / STRUCTURALLY_NOT_APPLICABLE**。
- resetPenalties: 前日天井進捗消失はN/A。その他固有不利はNONE_CONFIRMED_AFTER_RESEARCH。
- resetDetection: 本機固有のガックン/初期出目/ランプ/液晶による確定的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### numericResetData
- 通常天井: **NONE**
- 設定変更後天井: **NONE**
- リセット専用モード振り分け: **NONE_CONFIRMED / NOT_APPLICABLE**
- 朝一特定G以内当選率/リセット恩恵率: **NONE_CONFIRMED**

## 2016-11-14群 — OPEN
登録済み:
- **パチスロ 凪のあすから**（NET）— No.1023

確認済み未処理候補:
1. **ウィッチクラフトワークス**（DAXEL）— 複数解析・当時新台DBで2016-11-14導入一致。次回先頭候補。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1023を再取得。
2. **1023件 / chronologicalFrontier 2016-11-14 / 11/14群OPEN** を正本として継続。
3. **2016-11-14「ウィッチクラフトワークス」（DAXEL）**をGitHub内重複確認し、性能コア + resetBehavior v0.7を同時収集してNo.1024候補として処理。
4. その後11/14同日群を日付別導入カレンダー、メーカー別一覧、当時業界資料で全メーカー横断監査し、追加未処理がなければ群CLOSEDを判定。
5. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1023 パチスロ 凪のあすから
- NETプレスリリース（Dream News転載）: https://www.dreamnews.jp/press/0000139018/
- PiDEA X: https://www.pidea.jp/articles/%E3%83%8D%E3%83%83%E3%83%88%E3%83%BBA%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AE%E7%9C%9F%E9%AA%A8%E9%A0%82%E3%80%8C%E5%87%AA%E3%81%AE%E3%81%82%E3%81%99%E3%81%8B%E3%82%89%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8
- 長崎県遊技業協同組合 / 遊技通信web転載: https://nagasaki-yukyo.or.jp/information/%E3%83%8D%E3%83%83%E3%83%88%E3%80%81%E4%BA%BA%E6%B0%97%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E5%87%AA%E3%81%82%E3%81%99%E3%80%8D%E3%83%A2%E3%83%81%E3%83%BC%E3%83%95%E3%81%AE%E3%83%91%E3%83%81%E3%82%B9/
- 一撃本体: https://1geki.jp/slot/s_naginoasukara/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_naginoasukara/3/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_naginoasukara/61/
- K-Navi: https://p-kn.com/slot/2620/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/26233/
- P-WORLD: https://www.p-world.co.jp/machine/database/8170
- HAZUSE DATA: https://data.hazuse.com/?genre=201&machine_code=6S0815
- p-media 型式記事: https://p-media.info/%E3%83%8D%E3%83%83%E3%83%88%E3%80%8C%E5%87%AA%E3%81%AE%E3%81%82%E3%81%99%E3%81%8B%E3%82%89%E3%80%8D%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%EF%BC%8F%E6%B5%B7%E6%B5%9C%E3%81%AE%E7%94%BA%E3%81%8C%E8%88%9E/
- パチスロバンク: https://pachislobank.com/SHOP/s-net0034.html
