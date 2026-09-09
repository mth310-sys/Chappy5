更新日: 2026-09-10

## 現在地点
- recordCount: **1178**
- latestRecordAdded: **ビッグアップ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-03-05_big-up.md`
- chronologicalFrontier: **2018-03-05**
- frontierLatestMachine: **ビッグアップ — No.1178**
- schema: **resetBehavior v0.7**
- status: **2018-03-05_GROUP_OPEN_2_OF_AT_LEAST_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1177 `パチスロ 超GANTZ` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1177件 / chronologicalFrontier 2018-03-05 / 3/5群OPEN / 1機処理済み**。
- No.1178候補`ビッグアップ`がmain未登録であることを確認し、performance core + resetBehavior v0.7で追加。
- 3/5群は少なくとも `パチスロ 超GANTZ` / `ビッグアップ` / `ニューシオサイ30` の3機を含み、現在2/3処理済み。まだCLOSEDにしない。

## No.1178 — ビッグアップ
- path: `docs/real_machine_db/machines/2018-03-05_big-up.md`
- manufacturer: **ヤーマ**
- releaseDateCanonical: **2018-03-05**
- formalModelName: `ビッグアップ／J1`
- certificationNumber: `7S1505`
- generation/system: **5.9号機 / A+RT / 完全告知**
- 3段階設定。
- 機械割: **98.5 / 101.0 / 105.0%**
- BIG: **1/327 / 1/315 / 1/303**
- REG: **1/372 / 1/348 / 1/315**
- 合算: **1/174 / 1/165 / 1/154**
- 50枚ベース: **約35G/50枚**
- RT純増: **約0.5枚/G**
- BIG: **288枚 + RT50G**
- REG: **約104枚**
- BIG+RT50G完走平均: **約313枚**
- RT中ボーナス引き戻し率: **25%以上**
- 天井: **非搭載**

### resetBehavior v0.7
- 天井非搭載のため`gameCounterReset`/`ceilingAfterReset`の天井項目は`NOT_APPLICABLE`。
- 設定変更時のRT残G、成立済みボーナス、初期出目、告知状態等は、機種名・型式名・メーカー名と「設定変更」「リセット」「朝一」「RT引き継ぎ」「ガックン」を組み替え、当時解析/古いDB/業界資料を再探索したが本機固有の直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 据え置きを純電源OFF→ONと独立条件で記した本機固有契約も`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 純電源OFF→ON時のRT残G/成立済みボーナス/告知状態/初期出目も`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の朝一モード、天井短縮、初当たり優遇、主要不利要素、公開朝一数値は`NONE_CONFIRMED_AFTER_RESEARCH`または`NOT_APPLICABLE`。
- 本機には通常演出として「ガックンスタート」がありBIG濃厚とされるが、設定変更判別用の朝一ガックンとは別概念。朝一変更判別の確定契約/発生率は`UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の有利区間利用/設定変更時処理も資料で固定できず、5.9号機一般論から補完しない。

## 2018-03-05群境界監査
- `パチスロ 超GANTZ`: 2018-03-05、No.1177処理済み。
- `ビッグアップ`: 2018-03-05、No.1178処理済み。
- `ニューシオサイ30`: 2018-03-05を複数解析資料で確認。パイオニア、ノーマルA/30Φ。**未処理・次候補**。
- 次回は`ニューシオサイ30`を処理した後、3/5同日全メーカー・別スペックを再監査し、追加漏れがなければCLOSED判定する。

## 継続注意事項
- `ビッグアップ`の「ガックンスタート」は通常時のBIG濃厚違和感演出。設定変更判別ガックンとして扱わない。
- ノーマル/A+RT機でも設定変更・電断時のRT残G等は一般論で推測しない。本機固有資料がなければUNVERIFIEDを維持する。
- `パチスロ 超GANTZ`のCZ天井500G/5スルーはART確定天井とは定義を分離済み。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1178を再取得。
2. **1178件 / chronologicalFrontier 2018-03-05 / 3/5群OPEN / 2機処理済み** を正本として継続。
3. **No.1179候補 `ニューシオサイ30`** を既存mainと突合し、未登録ならperformance core + resetBehavior v0.7で処理。
4. 3/5同日全メーカー・別スペック監査を完走し、漏れがなければ`2018-03-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`へ更新。
5. CLOSED後は次の最古未処理導入日群へ前進。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1178 ビッグアップ
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000497/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1505/
- ちょんぼりすた: https://chonborista.com/slot/ya-ma/54716/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/18/a.php
- パチマガスロマガ 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/18/c-1.php
- スロパチネット: https://slopachi-net.com/bigup
- P-WORLD: https://www.p-world.co.jp/machine/database/8591

### 次候補 / 3/5群監査
- ニューシオサイ30: https://chonborista.com/slot/pionia-slot/55242/
- ニューシオサイ30: https://www.slopachi-quest.com/article/new-shiosai/
