更新日: 2026-09-10

## 現在地点
- recordCount: **1177**
- latestRecordAdded: **パチスロ 超GANTZ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-03-05_super-gantz.md`
- chronologicalFrontier: **2018-03-05**
- frontierLatestMachine: **パチスロ 超GANTZ — No.1177**
- schema: **resetBehavior v0.7**
- status: **2018-03-05_GROUP_OPEN_1_OF_AT_LEAST_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1176 `トリプルクラウンZEROII SECOND EDITION` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1176件 / chronologicalFrontier 2018-02-19 / 2/19群CLOSED / 2/12遡及漏れRECOVERED / 次群2018-03-05**。
- 3/5群の候補を再監査し、少なくとも `パチスロ 超GANTZ` / `ビッグアップ` / `ニューシオサイ30` の3機が2018-03-05導入で確認できる。
- 今回は先頭としてNo.1177 `パチスロ 超GANTZ` をperformance core + resetBehavior v0.7で追加。3/5群はまだOPEN。

## No.1177 — パチスロ 超GANTZ
- path: `docs/real_machine_db/machines/2018-03-05_super-gantz.md`
- manufacturerRole: **スパイキー製造 / 七匠開発 / フィールズ総発売元**
- releaseDateCanonical: **2018-03-05**
- formalModelName: `パチスロ超GANTZ／SA`
- certificationNumber: `7S1534`
- generation/system: **5.9号機 / A+ART・差枚数管理型ART / 有利区間あり**
- 機械割: **97.9 / 98.6 / 100.3 / 103.1 / 105.5 / 110.2%**
- ART初当たり: **1/479 / 1/432 / 1/448 / 1/385 / 1/404 / 1/359**
- CZ合算: **1/99.9 / 1/99.9 / 1/99.9 / 1/97.1 / 1/97.1 / 1/93.8**
- 50枚ベース: **約40G/50枚**
- ART純増: **約2.0枚/G**
- 差枚数管理型。ART開始時はGANTZ RUSH/超GANTZ RUSHで初期枚数決定。

### CZ天井
- ART確定ゲーム数天井ではなく、**CZ天井状態**を搭載。
- `転送モード間500G経過` または `転送モード5回スルー` でCZ天井状態へ。
- CZ天井状態中のチャンス目A成立でCZ当選へつながる。
- 一部資料の「天井非搭載」はART確定型の一般的天井を指す表記として分離し、直接解析されるCZ天井状態を保存。

### resetBehavior v0.7
- 設定変更時: 液晶図柄1・2・3 / 心斎橋ステージ / CZメーターRESET。
- 純電源OFF→ON時: 液晶図柄1・2・3 / 心斎橋ステージ / CZメーターは内部CARRYOVER（見た目は0）。
- 据え置き時もCZメーター内部ポイント引継ぎとして当時解析あり。ただし外見0のため単純な朝一表示判別は不可。
- 設定変更時CZポイント初期抽選: **1pt 75.0% / 2pt 25.0%（全設定）**。
- 設定変更後最初のチャンス目A: **CZ当選率50.0%（全設定）**。主要朝一恩恵として保存。
- CZ天井を構成する500G/5スルーカウンタの設定変更・据え置き・純電断時の各直接契約は、資料系統/検索語を変えても今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常/高確/超高確等の設定変更時状態振り分けも `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間を使用し、通常時の低確=非有利区間、通常以上=有利区間は確認。一方、本機固有資料で設定変更時に有利区間をどう処理するかの直接記載は固定できず `UNVERIFIED_AFTER_RESEARCH`。5.9号機一般論で補完しない。
- ガックン確定契約/発生率も `UNVERIFIED_AFTER_RESEARCH`。
- 変更判別は前日CZメーターと当日挙動、初回チャンス目AのCZ当選などから可能性を上げる程度で確定ではない。

## 2018-03-05群境界監査
- `パチスロ 超GANTZ`: 2018-03-05、No.1177処理済み。
- `ビッグアップ`: 2018-03-05を複数解析資料で確認。型式`ビッグアップ/J1`、ヤーマ、A+RT。**未処理・次候補**。
- `ニューシオサイ30`: 2018-03-05を複数解析資料で確認。パイオニア、ノーマルA/30Φ。**未処理**。
- 3/5群は少なくとも上記3機を含むためCLOSEDにしない。次回は全メーカー/別スペック横断監査を継続し、追加漏れも確認する。

## 継続注意事項
- `超GANTZ`のメーカー欄はサイトによりスパイキー/七匠で揺れる。業界記事の **製造元=スパイキー / 開発=七匠 / 総発売元=フィールズ** を役割分離して保持する。
- `超GANTZ`は多くの資料でART機、転送モードがリアルボーナスのためA+ART表記資料もある。分類粒度差として双方保持。
- 「天井非搭載」と「CZ天井状態500G/5スルー」は定義差。矛盾として数値を潰さず、ART確定天井なし・CZ天井ありとして分離する。
- 設定変更後CZポイントと初回チャンス目A 50%は直接公開数値。これ以外の未公開リセット値を推測で補完しない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1177を再取得。
2. **1177件 / chronologicalFrontier 2018-03-05 / 3/5群OPEN** を正本として継続。
3. **No.1178候補 `ビッグアップ`** を既存mainと突合し、未登録ならperformance core + resetBehavior v0.7で処理。
4. 続いて `ニューシオサイ30` を処理。
5. 3/5同日全メーカー・別スペック監査で他の独立機種漏れを確認し、完走後にCLOSED判定して次の日付群へ前進。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1177 パチスロ 超GANTZ
- グリーンべると: https://web-greenbelt.jp/00010263/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1534/
- 一撃 機種概要: https://1geki.jp/slot/s_gantz/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_gantz/3/
- 一撃 サバイバルZONE: https://1geki.jp/slot/s_gantz/42/
- 一撃 通常時状態移行: https://1geki.jp/slot/s_gantz/46/
- 一撃 リミットモード: https://1geki.jp/slot/s_gantz/90/
- 期待値見える化: https://slotjin.com/slot/chogantz-spec/
- スロパチクエスト: https://www.slopachi-quest.com/article/cho-gantz/

### 次候補 / 3/5群監査
- ビッグアップ: https://slopachi-net.com/bigup
- ビッグアップ: https://chonborista.com/slot/ya-ma/54716/
- ニューシオサイ30: https://chonborista.com/slot/pionia-slot/55242/
- ニューシオサイ30: https://www.slopachi-quest.com/article/new-shiosai/
