# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **864**
- latestRecordAdded: **スーパージャックポット**（アクロス）
- latestRecord: `docs/real_machine_db/machines/2015-01-26_super-jackpot-across.md`
- chronologicalFrontier: **2015-01-26**
- frontierLatestMachine: **スーパージャックポット**（アクロス）
- schema: **resetBehavior v0.7**
- status: **2015-01-20_TO_2015-01-25_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2015-01-26_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.863 `2015-01-19_terra-sigma.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **863件 / chronologicalFrontier 2015-01-19 / 01-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-01-20～01-25境界を具体日・導入・メーカー/業界系で再探索。ホール導入日として安全に固定できる未登録5号機を確認できなかったため `BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH`。
- 前handoff指定の次の強いホール導入アンカー **スーパージャックポット（アクロス）** をNo.864として追加。

## No.864 — スーパージャックポット

- record: `docs/real_machine_db/machines/2015-01-26_super-jackpot-across.md`
- manufacturer: **アクロス**
- releaseDate: **2015-01-26**
- modelName: **スーパージャックポットXJ**
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- systemType: **5号機 ノーマル / 完全告知**

### 性能コア

- 市場掲載機械割: **97.9 / 99.4 / 100.6 / 102.4 / 105.4 / 109.1%**。
- パチマガスロマガのシミュレート値: **97.99 / 99.45 / 100.63 / 102.31 / 105.26 / 108.69%**。定義差として平均せず双方保持。
- BIG: **1/277.7 / 268.6 / 262.1 / 256.0 / 249.2 / 240.9**。
- REG: **1/546.1 / 524.3 / 508.0 / 461.5 / 414.8 / 364.1**。
- 合算: **1/184.1 / 177.6 / 172.9 / 164.7 / 155.7 / 145.0**。
- REG設定3のみ、ぱちんこドキュメント **1/508.8** vs パチマガスロマガ/パチスロ解析ガイド **1/508.0**。`CONFLICT_REG_SETTING3_508_0_VS_508_8`、主値1/508.0。
- 50枚ベース: **35.0～36.9G/50枚**。
- BIG: **約312枚**、REG: **約130枚**を2015年当時複数資料の主値として採用。
- 5号機クロニクルのBIG最大311枚/REG最大104枚は `CONFLICT_BASIC_PAYOUT_312_130_VS_311_104` として平均せず保持。
- AT/ARTなし、天井救済機能なし。

### resetBehavior v0.7

- 純ノーマル機で、AT/ART・天井・規定Gモード・CZは非搭載。
- `gameCounterReset`: `NOT_APPLICABLE_NO_CEILING_GAME_COUNTER_DEPENDENCY`。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_CEILING`。
- `modeAfterReset`: `NOT_APPLICABLE_NO_INTERNAL_GAME_COUNT_MODE_FOR_HALL_RESET_SIMULATION`。
- `stateAfterReset`: `NOT_APPLICABLE_NO_AT_ART_CZ_INTERNAL_STATE_FOR_REQUIRED_V0_7_SCOPE`。
- 据え置き/純電断により朝一恩恵へ持ち越す天井G・AT/ART状態等は `NOT_APPLICABLE_NORMAL_TYPE_NO_CEILING_NO_MODE`。
- 設定変更専用の短縮天井・朝一モード・CZ/AT優遇等: `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有のガックン・出目・7セグ等による変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 純電源OFF→ON/設定変更時の外見上のリール位置・告知表示復帰契約: `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一専用数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 2008年ヤーマ版同名機は600G天井RTを持つ別機種。本レコードへ一切流用していない。

## 2015-01-26群 — OPEN

処理済み:
- No.864 **スーパージャックポット**（アクロス）

監査メモ:
- K-Navi、パチ7、複数解析でスーパージャックポットの2015-01-26ホール導入を確認。
- 検索結果に **トラッド** の `2015-01-26` が出る資料があるが、PiDEA/パチ7の設置期限表で示される日付は **検定告示日**。
- ベルコ公式はトラッドを「2015年3月登場」としているため、トラッドを01/26導入機として登録しない。
- 01/26同日群について、パチンコ機や777TOWN等のアプリ配信日が混入する検索結果がある。必ず実ホール導入パチスロだけを対象にする。

## 次回再開地点

1. **recordCount 864 / chronologicalFrontier 2015-01-26 / 01-26_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.864 を再確認。
3. **2015-01-26同日群を全メーカー・当時導入一覧・業界記事で最終監査**する。
4. スーパージャックポット以外の実ホール導入5号機を安全に固定できた場合は次レコードとして追加。固定できなければ01/26群を `CLOSED_FOR_CURRENT_RESEARCH`。
5. その後01/27以降を時系列監査し、次の強い実ホール導入アンカーへ進む。
6. `トラッド` は検定告示日2015-01-26とベルコ公式「2015年3月登場」を混同せず、exact hall releaseを別系統で固定してから扱う。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入** を区別する。
- 据え置き・純電断挙動は一般的な5号機の慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名旧機・後継機・別スペックを混入させない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### スーパージャックポット
- ユニバーサル公式: https://www.universal-777.com/product/slot/super_jackpot/
- K-Navi: https://p-kn.com/slot/2182/
- P-WORLD: https://www.p-world.co.jp/machine/database/7610
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/05/h-3.php
- パチマガスロマガ 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/05/c.php
- ぱちんこドキュメント: https://pachinkolist.com/archives/42855966.html
- パチスロ解析ガイド: https://pachislot-guide.net/2015/super-jackpot/
- パチ7: https://pachiseven.jp/machines/4383/cutout/7
- 5号機クロニクル: https://5goki.com/universal
- 娯楽産業: https://www.goraku-sangyo.com/across%EF%BC%8F%E3%83%A6%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%86%E3%82%A4%E3%83%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE/
- 型式名検定通過報道: https://pachinkopachisro.com/archives/40236397.html

### 境界 / 日付混同 safeguard
- PiDEA 5号機設置期限表（検定告示日）: https://www.pidea.jp/articles/1620982702
- パチ7 5号機設置期限表（検定告示日）: https://pachiseven.jp/articles/detail/11356
- ベルコ公式 トラッド: https://www.s-bellco.co.jp/products/slot/yama_trad/
