# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **596**
- latestMachineAdded: **旋風の用心棒～胡蝶の記憶～**（ロデオ / 2011-08-01）
- latestRecord: `docs/real_machine_db/machines/2011-08-01_kaze-no-youjinbou-kochou-no-kioku.md`
- chronologicalFrontier: **2011-08-01**
- frontierLatestExactDateMachine: **旋風の用心棒～胡蝶の記憶～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — 旋風の用心棒～胡蝶の記憶～

- 最新mainのREADME、正本ミッション、INDEX、LATEST_HANDOFF、直前frontierレコードを再取得して開始。
- 開始時正本は recordCount **595** / chronologicalFrontier **2011-07-31**「ぱちすろ黄門ちゃま 光れ!正義の印籠編!」。
- repo内重複検索で本機未登録を確認し、K-Navi/HAZUSEとも **2011-08-01導入開始**で一致したため596件目として追加。
- 型式名 **旋風の用心棒 胡蝶の記憶R**、検定番号 **1S0382**。

### 性能コア

- 5号機 A+ART / CZ / ストック+継続率+ゲーム数上乗せART。
- 機械割: **97.1 / 98.9 / 100.8 / 105.2 / 110.1 / 115.1%**。
- BIG: **1/331.0 / 303.4 / 316.6 / 282.5 / 297.9 / 265.3**。
- REG: **1/504.1 / 461.5 / 474.9 / 425.6 / 448.9 / 399.6**。
- ボーナス合算: **1/199.8 / 183.1 / 190.0 / 169.8 / 179.1 / 159.4**。
- ART初当たり: **1/493.1 / 494.0 / 413.6 / 391.2 / 323.6 / 290.7**。
- 1000円あたり: **30.08 / 30.23 / 30.36 / 30.51 / 30.64 / 30.79G**。
- ART「旋風チャンス」: **約+1.2枚/G、1セット30G + 継続バトル6G = 36G+α、継続率50〜90%**。
- BIG約200枚、REG約54枚。
- 通常天井: **ボーナス間1000G**、到達後は**次回ボーナスまで継続する無限ART**。

### resetBehavior v0.7

- K-Naviに本機専用「設定変更後の挙動」「状態移行率(設定変更後)」解析項目が存在。
- 別系統天井資料から、**設定変更時はボーナス間1000G天井進捗がCLEAR**することを直接確認。
- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。
- `ceilingAfterReset`: 通常1000G。設定変更後専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **PARTIAL_EXISTENCE_CONFIRMED_VALUE_UNVERIFIED**。低確/高確/超高確の具体振り分け本文は安全に回収できず。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。CZ前兆・ARTストック・残G等の処理は未確認。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **CEILING_PROGRESS_LOSS_CONFIRMED_IF_SETTING_CHANGED**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一数値: 通常天井1000G以外、設定変更専用短縮天井/朝一当選率/変更判別数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### 資料QA

- 設定6ボーナス合算は資料により1/159.4と1/159.5の丸め差。HAZUSE精密値1/159.4を主値とし、実質CONFLICTにはしない。
- 性能コア/天井は複数資料照合済み。resetBehaviorは設定変更時天井CLEARのみ直接確定、その他は推測で埋めない。

## 主要出典 — 旋風の用心棒～胡蝶の記憶～（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1458/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0382/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6427`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/57/a.php`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/57/c.php`
- 天井/設定変更: `https://crankyseven.com/sp/tenjo-5ka.htm`
- 回顧照合: `https://ab01.seesaa.net/article/275471329.html`

## 今回の遡及resetBehavior QA — 小野真弓のかわいい日本昔話

- recursive tree / 実パスを確認し、既にQA済みの **美川〜さそり座のサラリーマン〜** の次の実在欠損として `docs/real_machine_db/machines/2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md` を直接fetchしてresetBehavior欠損を確認。
- 既存 `COMPLETE_CORE` 相当の性能情報は崩さず、`coreStatus: COMPLETE_CORE` / `resetQaStatus: PARTIAL_RESET_QA` として分離管理。
- 当時HAZUSEでBIG/MIDDLE後 **10G「花咲かGAME」**を再確認。
- 本機名・型式「日本昔話5」＋設定変更/朝一/リセット/天井/花咲かGAME等へ検索語を変えて再探索。
- 通常ゲーム数天井・設定変更後短縮天井・朝一専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。仕様書による非存在断定まではできないため、天井関連を不用意にNOT_APPLICABLEへ強制していない。
- 設定変更時、据え置き、電源OFF→ON時の内部状態/花咲かGAME残G、ガックン・出目・液晶による変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機初期のため **NOT_APPLICABLE**。
- resetBehavior QA取得日: **2026-09-04**。

## 遡及QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認し、欠損なら次のQA対象とする。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を必ず実ファイルで確認する。

## 本線の次回再開地点

1. **recordCount 596 / chronologicalFrontier 2011-08-01**から開始。
2. **2011-08-01同日群を最終監査**。旋風の用心棒を重複追加しない。
3. 08-02〜08-07境界を外部導入カレンダー/当時業界記事/K-Navi/HAZUSE/P-WORLDで確認し、最古未登録機を優先。
4. 境界に未登録がなければ **2011-08-08群**へ進む。ミリオンゴッド～神々の系譜～等の同日候補はrepo実パスで重複確認してから処理する。
5. PARTIAL/UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料へ資料系統を変え、複数ソースを優先。競合はCONFLICT、一般論による補完は禁止。
