更新日: 2026-09-08

## 現在地点
- recordCount: **1001**
- latestRecordAdded: **クイーンジャックネオ**（岡崎産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-22_queen-jack-neo.md`
- chronologicalFrontier: **2016-08-22**
- frontierLatestMachine: **クイーンジャックネオ**（岡崎産業）
- schema: **resetBehavior v0.7**
- status: **2016-08-22_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1000 `2016-08-22_slot-dead-or-alive5.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **1000** / chronologicalFrontier **2016-08-22** / `2016-08-22_GROUP_OPEN`。
- 既存性能値をやり直さず、handoff指定の次未処理 `クイーンジャックネオ` を処理。

## No.1001 — クイーンジャックネオ
- manufacturer: **岡崎産業**
- releaseDate: **2016-08-22**
- formalModelName: **クイーンジャックネオ/Q1**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / 完全告知**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.7 / 98.4 / 99.8 / 103.4 / 106.5 / 110.0%**。
- BIG: **1/295.21 / 289.98 / 282.48 / 266.41 / 252.06 / 240.94**。
- REG: **1/356.17 / 337.81 / 318.14 / 287.44 / 270.81 / 240.94**。
- 合算: **1/161.42 / 156.04 / 149.63 / 138.26 / 130.55 / 120.47**。
- ベース: **約35G/50枚**。
- BIG **312枚** / REG **104枚**。
- AT/ART非搭載、通常時ゲーム数天井なし。

### resetBehavior v0.7
- ノーマル機で天井・AT/ART長期モードを持たないため、gameCounterReset / ceilingAfterReset / modeAfterResetは **NOT_APPLICABLE** を中心に記録。
- 設定変更専用の短縮天井、朝一専用モード、専用CZ、初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のガックン・初期出目・告知表示による確定的変更判別: 検索語・資料系統変更後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 純電源OFF→ON時の本機固有リール/告知表示状態契約: **UNVERIFIED_AFTER_RESEARCH**。一般的な岡崎筐体挙動から推測しない。

### quality
- ALL7と複数解析で導入2016-08-22一致。
- P-WORLDでメーカー・ノーマル/完全告知・BIG312枚/REG104枚を確認。
- 5号機クロニクル、ゆうべる、すろぱちくえすとで機械割が一致。
- BIG/REGはすろぱちくえすとの精密値をcanonical、ゆうべるの整数丸め値を照合用とした。
- 型式名 `クイーンジャックネオ/Q1` は当時検定通過記事と中古実機資料で照合。
- 検定番号は `Q1 / 型式 / 岡崎産業 / 検定番号 / 6S` 等へ検索語を変更したが今回固定できず推測しない。

## 2016-08-22群 — OPEN
登録済み:
- SLOTデッド オア アライブ5
- クイーンジャックネオ

未処理候補としてALL7同日一覧に少なくとも以下:
- **クレアの秘宝伝～眠りの塔とめざめの石～**（大都技研）
- **スーパープラネットデラックス**（山佐）
- **パチスロ戦姫絶唱シンフォギア**（SANKYO）
- **仄暗い水の底から**（藤商事）

注意:
- ALL7同日一覧の「Aさくらももこ劇場 ミラくるずきんちゃん」「鉄拳2」はパチンコ側混入/表記混在の可能性があるため、パチスロ本線へ自動登録しない。機種単独で再監査する。
- 同日群は未完了なので `GROUP_OPEN` を維持。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は前handoffから変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1001を再取得。
2. **1001件 / 2016-08-22群OPEN → クレアの秘宝伝～眠りの塔とめざめの石～**を次の未処理機として収集。
3. 続いて **スーパープラネットデラックス → パチスロ戦姫絶唱シンフォギア → 仄暗い水の底から** を処理し、08/22同日群をメーカー横断再監査してCLOSED可否判定。
4. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
5. PARTIAL/UNVERIFIEDは表記・検索語・資料系統変更後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1001 クイーンジャックネオ
- ALL7 2016年8月: https://www.all7.jp/plans/index/2016/08
- P-WORLD: https://www.p-world.co.jp/machine/database/8102
- 5号機クロニクル 岡崎産業: https://5goki.com/okazaki
- ゆうべる: https://yuberu-777.com/queenjackneo-kaiseki/
- すろぱちくえすと 設定判別: https://www.slopachi-quest.com/article/queen-jack-neo-settei/
- ぱちんこドキュメント 当時記事: https://pachinkolist.com/archives/48918331.html
- イニシャルP 型式参照: https://initialp.cart.fc2.com/ca43/2464/p-r43-s/

### 直前No.1000 / 境界監査
- K-Navi SLOTデッド オア アライブ5: https://p-kn.com/slot/2564/
- ALL7 2016年8月: https://www.all7.jp/plans/index/2016/08
