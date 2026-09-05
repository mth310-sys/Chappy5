# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **675**
- latestMachineAdded: **シオサイA-30**（パイオニア）
- latestRecord: `docs/real_machine_db/machines/2012-07-23_shiosai-a-30.md`
- chronologicalFrontier: **2012-07-23**
- frontierLatestExactDateMachine: **シオサイA-30**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-07-23__NEXT_2012-07-30_MEGAMILLIONAIRE**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ パトラッシュ」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、LATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 674 / frontier 2012-07-16。
- LATEST_HANDOFF指定の次候補「シオサイA-30」をrepo検索し未登録を確認。
- K-Navi 2012年7月導入カレンダーは2012-07-23のパチスロとしてパイオニア「シオサイA-30」のみを掲載。2012-07-24～07-29にも具体日付きパチスロ追加なし。675件目として追加し07-23同日群をCLOSED。
- 次の具体日アンカーは2012-07-30。K-Naviは「メガミリオネア」（ウィンネット）と「マイジャグラーII」（北電子）を掲載。

## 今回の本線追加 — シオサイA-30

### 識別

- manufacturer: **パイオニア**
- releaseDate key: **2012-07-23**
- generation: **5号機**
- systemType: **ノーマル / 30Φ沖スロ / 完全告知 / 技術介入**
- modelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: K-Naviが全国一斉導入開始日2012-07-23、パイオニア公式が2012年7月発売を確認。

### 性能コア

- 機械割: **97.0 / 98.0 / 100.0 / 102.0 / 104.0 / 107.0%** — P-WORLDと5号機クロニクル一致。
- BIG: **1/336 / 1/324 / 1/312 / 1/306 / 1/295 / 1/287**
- REG: **1/636 / 1/612 / 1/590 / 1/560 / 1/532 / 1/524**
- 合算: **1/219 / 1/212 / 1/204 / 1/198 / 1/190 / 1/185**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **最大325枚** / REG: **最大104枚**
- ART/AT: **非搭載**

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 本機固有の設定変更時内部契約を直接確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 純据え置き時の演出モード選択状態等の保持契約を確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 設定変更なしの電源OFF→ONのみの処理を直接確定できず。
- `gameCounterReset`: **NOT_APPLICABLE_TO_CONFIRMED_CORE / CONFLICTING_CEILING_CLAIM_NOT_ADOPTED**
- `ceilingAfterReset`: **NOT_APPLICABLE_TO_CONFIRMED_CORE / UNVERIFIED_CONFLICT_SOURCE**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH** — 遊技者選択の演出モードはあるが設定変更/電断時の保持・初期化は未確認。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH** — 通常演出の変則始動/フリーズを設定変更ガックンへ流用しない。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### 主要CONFLICT / 品質メモ

- P-WORLDは本機をボーナスのみで増やすノーマル機とし、BIG最大325枚 / REG最大104枚、BIG 1/336～1/287、REG 1/636～1/524、機械割97～107%。機械割は5号機クロニクルも一致。
- 後年単一DB「みんスロ」はBIG 1/318～1/256、REG 1/655～1/496、機械割94.0～108.2%、BIG322枚、REG207枚、50枚35～36.7G、1300G天井RTとする。
- 獲得枚数・ボーナス確率・天井構造まで同時に大幅不一致のため、単純な解析差ではなく **SOURCE_MISMATCH_OR_MISATTRIBUTION_CONFLICT** として隔離。本線スペック、天井、50枚ベースへ採用しない。
- 「シオサイA-30 / シオサイA30 / パイオニア / シオサイシリーズ」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 50枚 / 1000円」を組み替えて再探索後に欠損判定。

## 次回再開地点

1. **recordCount 675 / chronologicalFrontier 2012-07-23 / 07-23 group CLOSED**から開始。
2. **2012-07-24～07-29境界監査済み**。次は **2012-07-30「メガミリオネア」（ウィンネット）**をrepo重複確認 → 導入日照合 → 性能コア＋resetBehavior v0.7収集。
3. 同日群の次候補は **2012-07-30「マイジャグラーII」（北電子）**。メガミリオネア処理後も07-30群を閉じず、必ずこちらを重複監査する。
4. 07-30同日群を完全に閉じてから08-01以降へ進む。
5. 「夜王」は既存方針どおり2012年8月地点で再監査。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- パイオニア公式 2012年製品一覧: `https://www.slot-pioneer.co.jp/products/2012.html`
- パイオニア公式 シオサイシリーズ一覧: `https://www.slot-pioneer.co.jp/products/siosai.html`
- パイオニア公式 発売告知: `https://www.slot-pioneer.co.jp/information/siosaia.html`
- K-Navi 2012年7月導入カレンダー: `https://p-kn.com/calendar/201207/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6763`
- 5号機クロニクル パイオニア全機種: `https://5goki.com/pioneer`
- 後年実戦回顧: `https://ameblo.jp/momo1214momo/entry-12518185189.html`
- 後年単一DB・競合隔離対象: `https://minslo.com/%E3%82%B7%E3%82%AA%E3%82%B5%E3%82%A4a%E2%80%9030/`

## GitHub commits

- シオサイA-30 machine record: `cf17f8f67c79ad58122f76bdbb582bf1d99a7694`
