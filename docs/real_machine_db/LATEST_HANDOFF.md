# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **761**
- latestMachineAddedByChronology: **パチスロ RAVE エンドレスラッシュ**（藤商事）
- latestRecord: `docs/real_machine_db/machines/2013-09-02_pachislot-rave-endless-rush.md`
- chronologicalFrontier: **2013-09-02**
- frontierLatestExactDateMachine: **パチスロ RAVE エンドレスラッシュ**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-09-02_GROUP__REOPENED_AFTER_OMISSION_AUDIT**

## 今回の同期 / 重要修正

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-09-02_kaidou-mokushiroku-kaiji3.md` を再読してから継続。
- INDEXは旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 開始時正本は recordCount **760** / chronologicalFrontier **2013-09-02** / HANDOFF上は09-02群CLOSED。
- メーカー横断・導入日再監査で、前回CLOSED判定に漏れを確認。**2013-09-02群をREOPEN**した。
- 未登録だった **パチスロ RAVE エンドレスラッシュ（藤商事）** は導入開始日 **2013-09-02** を具体日で再確認し、761件目として追加。
- 同日未処理候補として少なくとも **パチスロ カメレオン（タイヨーエレック）**、**パチスロ笑ゥせぇるすまん2（三洋）** を確認。次回は09-17へ飛ばさず、この2機を先に処理する。
- **Gレーサー（ニューギン）はCR機＝パチンコ**のため実機性能「物差し」パチスロ収集対象から除外。
- 旧handoffの `CLOSED_2013-09-02_GROUP` 判定は本更新で撤回。09-03〜09-16監査および09-17「ボンバーパワフルII」は09-02群を閉じた後へ延期。

## 今回追加 — パチスロ RAVE エンドレスラッシュ

### identity / 性能コア

- manufacturer: **藤商事**。
- releaseDate: **2013-09-02**。
- generation/system: **5号機 / A+ART / ゲーム数上乗せ**。
- 機械割: **97.32 / 98.56 / 100.24 / 103.01 / 107.08 / 110.50%**。別資料の小数1桁表示は丸め差でありCONFLICTにはしない。
- ART初当たり: **1/449.5 / 430.2 / 405.9 / 357.8 / 300.4 / 260.6**。
- ボーナス合算: **1/248.2 / 240.9 / 234.1 / 227.6 / 221.4 / 215.6**。
- baseGamesPer50: **約32G/50枚**。
- ART「レイヴタイム」: **1セット50G+α / 純増約1.5枚/G**。
- BIG: **約200枚** / REG: **約40枚**。
- 天井: **ボーナス間1280G**。到達後は前兆を経由し、ボーナス当選までARTがループする解析系統で一致。
- coreStatus相当: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- 本機固有解析で **設定変更時は天井到達までのゲーム数をCLEAR** と確認。
- よってボーナス間1280G天井の前日進捗は、設定変更時に持ち越さない。
- 通常時に複数（CrankySevenでは4）状態があることは確認したが、設定変更時の初期振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G/状態/CZ関連蓄積値は **UNVERIFIED_AFTER_RESEARCH**。設定変更CLEARから据え置きRETAINを逆算しない。
- 設定変更を伴わない **電源OFF→ONのみ** の天井G/状態/CZ関連蓄積値/液晶状態は **UNVERIFIED_AFTER_RESEARCH**。
- 本機の「キャリーオーバーシステム」は通常遊技中のCZ失敗蓄積系の名称であり、ホール据え置き時の内部保持契約とは別物として分離。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 朝一専用短縮天井、モード振り分け率、ガックン/初期出目/液晶等による変更判別の直接根拠は、検索語・資料系統を変更して再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- resetPenalty: 設定変更で前日天井進捗が消えるため、宵越し天井狙いには不利。

## 境界監査 / 2013-09-02同日群

### 登録済み

1. **パチスロ PROJECT ARMS**（ニューギン）
2. **回胴黙示録カイジ3**（ロデオ / 製造元銀座）
3. **パチスロ RAVE エンドレスラッシュ**（藤商事） — 今回追加

### 未処理候補

1. **パチスロ カメレオン**（タイヨーエレック） — 2013-09-02候補を複数資料で確認。次回先頭。
2. **パチスロ笑ゥせぇるすまん2**（三洋） — 2013-09-02候補を当時業界/機種DBで確認。カメレオンの次。

### 除外

- **Gレーサー（ニューギン）** — `CR Gレーサー` のパチンコ機。対象外。

- **2013-09-02群: OPEN / REOPENED_AFTER_OMISSION_AUDIT**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- `2007-01_karate-baka-ichidai.md` 自体は既にresetBehavior v0.7収集済みであるため重複更新しない。
- 今回は本線の誤CLOSED修正と761件目登録を優先。tree実順で次のresetBehavior欠損機を一意に確定できるところまでQAカーソルを前進させていない。
- 既存 `COMPLETE_CORE` / `PARTIAL` 等の性能側完了判定は変更していない。

## 次回再開地点

1. **recordCount 761 / chronologicalFrontier 2013-09-02 / 09-02群OPEN** から開始。
2. 最優先: **パチスロ カメレオン（タイヨーエレック）** を重複確認 → 性能コア + resetBehavior v0.7収集 → 762件目候補。
3. 続いて **パチスロ笑ゥせぇるすまん2（三洋）** を収集。
4. 09-02同日群をメーカー横断で再監査し、漏れがなければCLOSEDへ戻す。
5. その後 **2013-09-03〜09-16境界監査 → 確認済み2013-09-17「パチスロ ボンバーパワフルII」**へ進む。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### パチスロ RAVE エンドレスラッシュ

- 藤商事公式: `https://www.fujimarukun.co.jp/products/s_rave/`
- パチマガスロマガ系: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/14/h.php`
- CrankySeven: `https://crankyseven.com/rave-pc.htm`
- パチスロデータ: `https://pachislo-data.com/fuji/rave` — 導入開始2013-09-02、性能/天井/設定変更時CLEAR再照合

### 2013-09-02境界修正

- パチスロ カメレオン: K-Navi、当時タイヨーエレック発表/業界記事、機種DBを横断。
- パチスロ笑ゥせぇるすまん2: 三洋発表系/当時業界記事、機種DBを横断。
- Gレーサー: CR表記・パチンコ仕様を確認し除外。

## commits

- 761st record add: `eaea7f3f8739265f9cac2df58429154813cbcf5a` (`db: add Pachislot RAVE Endless Rush with resetBehavior v0.7`)
- handoff update: current run (`db: reopen 2013-09-02 group after omission audit and advance relay handoff`)
