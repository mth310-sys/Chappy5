# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **926**
- latestRecordAdded: **パチスロ機甲戦記ドラグナー**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-26_kikou-senki-dragonar.md`
- chronologicalFrontier: **2015-10-26**
- frontierLatestMachine: **パチスロ機甲戦記ドラグナー**
- schema: **resetBehavior v0.7**
- status: **2015-10-26_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.925 `2015-10-26_steins-gate-inductance.md` を再取得。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **925** / chronologicalFrontier **2015-10-26** / `2015-10-26_GROUP_OPEN`。
- handoff指定の次未処理 **パチスロ機甲戦記ドラグナー** をNo.926として追加。

## No.926 — パチスロ機甲戦記ドラグナー

- record: `docs/real_machine_db/machines/2015-10-26_kikou-senki-dragonar.md`
- manufacturer: **サミー**
- releaseDate: **2015-10-26**
- generation/system: **5号機 新基準AT / 差枚数管理AT + ゲーム数管理AT**

### performanceCore

- AT初当たり: **1/399.9 / 390.6 / 375.6 / 341.9 / 320.2 / 298.6**。
- 機械割: 設定1 **97.2%**、2 **98.4%**、3 **100.1%**、4 **CONFLICT 105.0% / 106.0%**、5 **107.6%**、6 **112.8%**。
- 50枚ベース: **約43.9G**。
- AT純増: **約2.9枚/G**。
- DRAGONAR RUSHは差枚数管理型、交戦宙域はゲーム数管理型。
- 天井: **AT後1400G消化またはAT後ステージチェンジ25回目の早い方**。資料に「1400G以降のステチェン」とする表現差があるため内部即時告知と混同しない。

### resetBehavior v0.7

- 設定変更: **天井までのゲーム数RESET / ステージモード再抽選**。
- 電源OFF→ONのみ: **天井ゲーム数CARRYOVER / ステージモードCARRYOVER**。
- 据え置き: 設定変更なし+電源ON/OFFの公開比較から、朝一主要要素は **CARRYOVER_SUPPORTED**。
- 設定変更時ステージモード振り分け:
  - 設定1: A/B/C 各32.5% + 確定ステージ2.5%
  - 設定2: 各32.0% + 4.0%
  - 設定3: 各31.0% + 7.0%
  - 設定4〜6: 各30.0% + 10.0%
- 固定短縮天井: **NONE_CONFIRMED**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- ガックン/液晶等の本機固有の即時変更判別: **UNVERIFIED_AFTER_RESEARCH**。

### conflicts / missing

- `PAYOUT_SETTING4`: **105.0% vs 106.0%**。平均せずCONFLICT。
- `CEILING_DESCRIPTION`: 「1400G」系と「1400G以降のステージチェンジ」系の表現差を保持。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。

## 2015-10-26群 時系列監査

処理済み:
1. **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス — No.925**
2. **パチスロ機甲戦記ドラグナー — No.926**

未処理の強い候補:
1. **百花繚乱サムライガールズ — DAXEL**：2015-10-26候補。次回最優先で性能コア+resetBehaviorを収集。
2. **パチスロ ハイスクールD×D — KPE系**：2015-10-26近辺。全国ホール導入日の具体日を再固定する。

- 10/26群は候補が残るため **OPEN**。
- 候補だけに限定せず全メーカー横断監査後にCLOSED判定。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA

今回、リポジトリ実体を先頭から順次確認し、以下の既存レコードにv0.7相当resetBehaviorが既に存在することを確認したため重複更新しなかった。

1. `2005-09_shinseiki-evangelion.md` — resetBehaviorQA: PARTIAL
2. `2005-10_nihonichi-no-momotaro-ct5.md` — resetBehaviorQA: PARTIAL
3. `2005-10_nihonichi-no-momotaro-ct30.md` — resetBehaviorQA: PARTIAL
4. `2005-10_sakura-taisen-s2.md` — resetBehaviorQA: PARTIAL

- 既存 `COMPLETE_CORE` / `PARTIAL` の性能コア判定は変更していない。
- retroQaScanConfirmedThrough: **2005-10_sakura-taisen-s2.md**
- retroQaNextInspection: **2005-10_devilman3.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / NO_DUPLICATE_UPDATE**

## 次回再開地点

1. **recordCount 926 / chronologicalFrontier 2015-10-26 / 2015-10-26_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.926を再取得。
3. 本線: **百花繚乱サムライガールズ**を次の未処理候補として調査・登録。
4. 続けて **ハイスクールD×D** の全国ホール導入日を再固定し、10/26全メーカー横断監査を行う。
5. 遡及QA: `2005-10_devilman3.md` から順次、resetBehavior未収集機を探して補完。既収集なら重複更新せず次へ進む。
6. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 既存COMPLETE_COREの性能完了判定とreset QA状態を分離。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。
- 固定G数天井とステージ回数天井を混同しない。

## 主要出典 — 取得日 2026-09-08

### No.926 パチスロ機甲戦記ドラグナー
- サミー公式2015年製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/2015/index.html
- グリーンべると（2015-09-17）: https://web-greenbelt.jp/00008087/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2655/1/54260
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/147/a.php
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/147/c.php
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/12182/
- すろぱちくえすと: https://www.slopachi-quest.com/article/kikousenki-dragonar/
- スロット収支アップ（設定変更/電源ON-OFF比較・リセットモード数値）: https://smaslo.man-soft.com/slot-kaiseki/dragonar.html

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRateBySetting: ANALYSIS_HIGH_WITH_SETTING4_CONFLICT
- ceilingStructure: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- carryOverBehavior: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- purePowerCycleBehavior: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- resetNumericData: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- 2015-10-26 boundary: OPEN
- retroQaCursor: `2005-10_devilman3.md`
