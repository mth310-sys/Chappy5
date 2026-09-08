更新日: 2026-09-09

## 現在地点
- recordCount: **1061**
- latestRecordAdded: **防空少女ラブキューレ**（KPE / Konami Amusement）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-21_love-kyure.md`
- chronologicalFrontier: **2017-03-21**
- frontierLatestMachine: **防空少女ラブキューレ — No.1061**
- schema: **resetBehavior v0.7**
- status: **2017-03-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1060実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1060件 / chronologicalFrontier 2017-03-21 / 2017-03-21_GROUP_OPEN**。
- 前handoffの次候補 **「防空少女ラブキューレ」** を調査。並行リレーによりNo.1061実レコードがmainへ先に出現したため重複作成を中止し、実レコードを取得して独立QAした。
- 公式アーカイブ、HAZUSE、K-Navi、パチビー、一撃、P-WORLD、当時/後年解析を横断。2017-03-21導入、型式 `ラブキューレ／KY`、検定番号 `6S1317` を固定。
- 性能コアの精密値を再照合し、設定1 ART初当りに HAZUSE `1/365.3` vs pachislo-data `1/363.5` の競合を発見。平均せず `CONFLICT_ART_INITIAL_SETTING1` としてNo.1061へ反映。
- resetBehaviorは当時一撃が設定変更/純電源OFF→ONの天井・状態・液晶ステージをすべて「調査中」としており、初代2017年機について後発高信頼の確定契約を固定できなかった。後継スマスロ「ラブキューレ2」のリセット仕様は混入していない。
- 個人実戦記事の朝一エネルギーメーターによる変更推測は `LOW_CONFIDENCE_EXPERIMENTAL_CLUE` として隔離し、確定判別扱いしていない。

## No.1061 — 防空少女ラブキューレ
- manufacturer: **KPE / Konami Amusement**
- releaseDate: **2017-03-21**
- formalModelName: **ラブキューレ／KY**
- certificationNumber: **6S1317**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ**
- recordStatus: **COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.2 / 98.5 / 101.7 / 104.2 / 107.8 / 113.5%**。
- BIG BONUS EX: **全設定1/2048.0**。
- BIG: **1/329.3 / 316.6 / 309.1 / 304.8 / 291.3 / 276.5**。
- REG: **1/668.7 / 668.7 / 642.5 / 601.2 / 601.2 / 555.4**。
- ボーナス合算: **1/199.2 / 194.4 / 189.4 / 184.1 / 179.1 / 169.3**。
- ART初当り: 設定1 **CONFLICT 1/365.3 vs 1/363.5**、設定2～6 **1/307.1 / 339.3 / 282.7 / 307.3 / 240.4**。
- 50枚ベース: **約31G/50枚**。
- ART「絶対空域」単体純増: **約1.0枚/G**、ボーナス込み約**1.9枚/G**。
- BIG/BIG EX: **純増200枚**、REG系: **約50枚**。
- 通常天井: **ボーナス間777Gで成功確定CZ→実質ART確定**。

### resetBehavior v0.7
- 設定変更時の天井RESET/CARRYOVER: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井進捗/内部状態: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONの天井/状態/液晶: `UNVERIFIED_AFTER_RESEARCH`。当時一撃も全項目「調査中」。
- 設定変更専用の短縮天井/朝一モード/高確保証/初当り優遇: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 確定的なガックン/ランプ/初期出目判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一最初のチャンスリプレイ後のエネルギーメーターを使う変更推測は2017-03-24個人実戦記事由来のため `LOW_CONFIDENCE_EXPERIMENTAL_CLUE`。

### dataQuality / conflicts
- コナミ公式: 2017年3月稼働、5号機A+ART。
- exact date 2017-03-21はHAZUSE/K-Navi/パチビー/複数解析で一致。
- 型式・検定番号はHAZUSEで直接確認。
- material conflict: **設定1 ART初当り 1/365.3 vs 1/363.5**。平均せず両値保持。
- resetBehaviorの欠損は一度の検索失敗ではなく、表記揺れ・型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン等を変えて公式・解析・古い記事・後年整理を横断した後の `UNVERIFIED_AFTER_RESEARCH`。

## 2017-03-21群監査
- status: **OPEN**。
- 登録済み:
  - アナザーゴッドポセイドン-海皇の参戦- — No.1059。
  - パチスロ攻殻機動隊S.A.C. 2nd GIG — No.1060。
  - 防空少女ラブキューレ — No.1061。
- 前handoffから残る未処理候補:
  1. **ドキドキマンゴー**
- 次回は **ドキドキマンゴー** をNo.1062候補として個別公式/業界/当時解析で導入日・型式・性能コア・resetBehavior v0.7を再固定する。
- その後2017-03-21群を全メーカー横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1061を再取得。
2. **1061件 / chronologicalFrontier 2017-03-21 / 3/21群OPEN** を正本として継続。
3. 次の未処理候補 **「ドキドキマンゴー」** をNo.1062候補として性能コア＋resetBehavior v0.7で処理。
4. 3/21群の全メーカー横断監査後にCLOSED可否を判定。
5. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1061 防空少女ラブキューレ
- コナミアミューズメント機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2017/lovekyure/index.html
- HAZUSE 機種概要・型式・検定番号: https://hazuse.com/machine/pachislot/6S1317/genre/209/
- HAZUSE 基本スペック・確率・機械割・配当: https://hazuse.com/machine/pachislot/6S1317/genre/201/
- 一撃 天井/設定変更/電源OFF ON: https://1geki.jp/slot/s_lovekyure/3/
- pachislo-data: https://pachislo-data.com/kpe/33356
- K-Navi: https://p-kn.com/slot/2711/
- パチビー: https://www.pachibee.jp/machines/lecture/217020005
- P-WORLD: https://www.p-world.co.jp/machine/database/8274
- みんスロ: https://minslo.com/%E9%98%B2%E7%A9%BA%E5%B0%91%E5%A5%B3%E3%83%A9%E3%83%96%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC/
- 2017-03-24個人実戦記事（LOW_CONFIDENCE_EXPERIMENTAL）: https://episode.doorblog.jp/archives/50920201.html

### 次候補 / 3/21群監査
- 次候補: **ドキドキマンゴー**。

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
