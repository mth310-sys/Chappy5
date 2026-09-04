# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **612**
- latestMachineAdded: **ラーゼフォン**（ロデオ）
- latestRecord: `docs/real_machine_db/machines/2011-10-17_rahxephon.md`
- chronologicalFrontier: **2011-10-17**
- frontierLatestExactDateMachine: **ラーゼフォン**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — ラーゼフォン

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「キングハナハナ-30」を再取得して開始。
- 開始時正本は **recordCount 611 / chronologicalFrontier 2011-10-10**。
- repo code searchで `ラーゼフォン / RahXephon / ラーゼフォンX` を検索して既存レコードなし、想定パス `docs/real_machine_db/machines/2011-10-17_rahxephon.md` も404を確認し、未登録と判断。
- HAZUSEで **2011-10-17導入開始**、型式 **ラーゼフォンX**、検定番号 **1S0691** を確認。
- K-Navi 2011年10月導入カレンダー上、2011-10-17のパチスロ群はラーゼフォンのみ。本機追加で **10-17群を閉じる**。

### 性能コア

- 5号機 / A+ART / CZ / ゲーム数上乗せ+セットストック。
- 機械割（精密値）: **97.2 / 99.0 / 101.5 / 104.5 / 108.7 / 114.0%**。
- HAZUSE整数値: **97 / 99 / 102 / 105 / 109 / 114%**。表示精度差として平均せず保持。
- BIG: **1/394.8 / 1/368.2 / 1/381.0 / 1/368.2 / 1/381.0 / 1/344.9**。
- REG: **1/789.6 / 1/736.4 / 1/762.0〜762.1 / 1/736.4 / 1/762.0〜762.1 / 1/689.9**。
- ART初当たり: **1/374.7 / 1/367.5 / 1/338.3 / 1/314.8 / 1/286.6 / 1/269.6**。
- ART「飛翔RUSH」: **1セット50G+α、約+1.2枚/G**。
- BIG約**216枚**、REG約**44枚**。プレミアムBIG約216枚+ART確定。
- 天井: **BIG後または設定変更後1400G / REG後999GでART**。
- 50枚ベースは表記・型式・1000円/50枚/ベース/コイン持ちを変えて再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **PARTIAL_CORE_AFTER_DEEP_RESEARCH**。

### resetBehavior v0.7

- `settingChangeBehavior`: **GAME_COUNT_CEILING_RESET_CONFIRMED / INTERNAL_MODE_RELOTTERY_CONFIRMED**。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。P-WORLD直接記載。
- `ceilingAfterReset`: **1400G_AFTER_SETTING_CHANGE_CONFIRMED**。
- `modeAfterReset`: **INTERNAL_MODE_TRANSITION_LOTTERY_CONFIRMED / NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。
- `resetPenalties`: 設定変更で前日までの天井進捗が失われることを保存。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の本機固有の天井進捗保持を直接確定できず、一般則から補完しない。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/出目/液晶/ランプ等の本機固有判別資料を確定できず。
- 朝一特定G以内ART/CZ当選率、設定変更専用の追加恩恵率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 612 / chronologicalFrontier 2011-10-17**から開始。
2. K-Navi導入カレンダーで10-17群はラーゼフォンのみのため **10-17群は完了**。
3. 次の明確な全国一斉導入日は **2011-10-24**。
4. 同日のパチスロは **「バツ＆テリー」（バルテック）→「押忍！番長2」（大都技研）**。まずバツ＆テリーを未登録確認し、未登録なら613件目候補として処理する。
5. repo code searchだけで未登録判定せず、表記揺れ・想定実パス直接fetch・tree実パスを確認する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### ラーゼフォン
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0691/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6496`
- A-SLOT: `https://www.a-slot.com/SHOP/rodeo39.html`
- 5号機クロニクル ロデオ一覧: `https://5goki.com/rodeo`

### 次回順序確認
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
