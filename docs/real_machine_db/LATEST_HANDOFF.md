# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **613**
- latestMachineAdded: **バツ＆テリー**（バルテック）
- latestRecord: `docs/real_machine_db/machines/2011-10-24_batsu-and-terry.md`
- chronologicalFrontier: **2011-10-24**
- frontierLatestExactDateMachine: **バツ＆テリー**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE_SAME_DATE_GROUP**

## 今回の本線追加 — バツ＆テリー

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ラーゼフォン」を再取得して開始。
- 開始時正本は **recordCount 612 / chronologicalFrontier 2011-10-17**。INDEXは旧19件地点のままなので、README規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- 想定パス `docs/real_machine_db/machines/2011-10-24_batsu-and-terry.md` を直接fetchし404、未登録を確認。
- K-Navi 2011年10月カレンダーで **2011-10-24全国一斉導入開始**。当時グリーンべるとは **10-23納品開始**。導入/納品の定義差として分離し、時系列キーは10-24。

### 性能コア

- 5号機 / A+ART / CZ / セットストックART。
- 機械割: **97.1 / 98.7 / 101.9 / 104.6 / 108.5 / 112.7%**。
- BIG合成: **1/399.6 / 1/390.1 / 1/381.0 / 1/372.4 / 1/360.1 / 1/348.6**。
- REG: **1/528.5 / 1/512.0 / 1/496.5 / 1/481.9 / 1/468.1 / 1/455.1**。
- ボーナス合算: **1/227.6 / 1/221.4 / 1/215.6 / 1/210.0〜210.1 / 1/203.5 / 1/197.4**。
- ART初当たり設定別は表記揺れ・ART初当り/初当たり・シリーズ/メーカーを変えて再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 50枚ベース: **32.0G/50枚**（全設定共通）。
- ART「バツテリーラッシュ」: **1セット30G、約+1.4枚/G**。
- BIG約**207枚**、REG約**54枚**。
- 通常天井: **ボーナス後1200G**、P-WORLDでは到達時 **ART 5〜15セット**。
- coreStatus: **COMPLETE_CORE_WITH_ART_INITIAL_HIT_UNVERIFIED**。

### resetBehavior v0.7

- `settingChangeBehavior`: **HIGH_STATE_LOTTERY_CONFIRMED / CEILING_COUNTER_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: 設定変更後の高確移行率を確定。**設定1 33.3 / 2 33.3 / 3 50.0 / 4 50.0 / 5 66.7 / 6 66.7%**。
- `modeAfterReset`: **HIGH_STATE_LOTTERY_CONFIRMED**。朝一専用モードは確認できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。1200G通常天井は確定だが、設定変更時CLEAR/RETAINの直接記載を確定できず。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED_AFTER_RESEARCH / COUNTER_ORIGIN_UNVERIFIED**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetBenefits`: **HIGH_STATE_START_CHANCE_CONFIRMED**。設定変更後33.3〜66.7%で高確。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH / CEILING_PROGRESS_EFFECT_UNVERIFIED**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/ランプ等の本機固有判別資料を確定できず。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

### CONFLICT / 定義差

1. 導入時期: グリーンべると **2011-10-23納品** / K-Navi **2011-10-24全国一斉導入**。平均せず分離。
2. 設定4ボーナス合算: Cranky7 **1/210.0** / A-SLOT補助表 **1/210.1**。平均せず範囲保持。
3. 後年AI生成系ページに本機を6号機とする誤記があるため、世代/resetBehavior根拠から除外。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 613 / chronologicalFrontier 2011-10-24**から開始。
2. K-Navi 10/24同日群は **バツ＆テリー / 押忍！番長2**。バツ＆テリーは完了したため、次は **「押忍！番長2」（大都技研）**を未登録確認する。
3. 押忍！番長2が未登録なら614件目候補として、性能コア+resetBehavior v0.7を収集する。
4. 10/24同日群を閉じるまでは11月以降へ進まない。
5. repo code searchだけで未登録判定せず、表記揺れ・想定実パス直接fetch・tree実パスを確認する。
6. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### バツ＆テリー
- グリーンべると: `https://web-greenbelt.jp/00002209/`
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6478`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/55/a.php`
- Cranky7: `https://crankyseven.com/battery-pc.htm`

### 次回順序確認
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
