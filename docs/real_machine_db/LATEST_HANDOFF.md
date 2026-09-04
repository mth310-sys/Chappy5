# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **638**
- latestMachineAdded: **ToHeart2**（タイヨーエレック）
- latestRecord: `docs/real_machine_db/machines/2012-02-20_toheart2.md`
- chronologicalFrontier: **2012-02-20**
- frontierLatestExactDateMachine: **ToHeart2**
- schema: **resetBehavior v0.7**
- status: **2012-02-20_SAME_DAY_GROUP_AUDIT_REQUIRED__NEXT_EARLIEST_UNPROCESSED_AFTER_2012-02-20**

## 今回の本線追加 — ToHeart2

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「世界で叩け！モグモグ風林火山」を確認して開始。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 637 / chronologicalFrontier 2012-02-13 / latestMachineAdded 世界で叩け！モグモグ風林火山**。
- `docs/real_machine_db/machines/2012-02-20_toheart2.md` を直接fetchして404を確認後、638件目として追加。

### 導入日・型式

- 主導入日: **2012-02-20**。
- パチ＆スロ必勝本が2012-02-20導入と明記し、FIX Recordsも2012-02-21記事で「2012年2月20日に導入」と記録。
- HAZUSEは同型式を「ToHeart2 バカンスバージョン」として **2012-02-17** 導入開始と掲載。平均せず `CONFLICT` としてレコードに双方を保持し、主値は複数資料一致の2012-02-20。
- 型式名: **トゥハート2**。
- 検定番号: **1S0600**。

### 性能コア

- systemType: **A+ART**。
- 設定別機械割: **97.4 / 98.8 / 100.3 / 104.8 / 108.0 / 112.1%**。
- BIG合算: **1/332.67 / 329.33 / 316.60 / 299.25 / 278.88 / 261.10**。
- REG: **1/500.27 / 496.48 / 474.90 / 448.88 / 420.10 / 392.43**。
- ボーナス合算: **1/199.80 / 197.99 / 189.96 / 179.55 / 167.61 / 156.78**。
- ART初当たり: **1/473.0 / 458.5 / 470.3 / 442.7 / 453.4 / 427.9**。
- 50枚ベース: **30.08 / 30.09 / 30.11 / 30.13 / 30.15 / 30.17G**。
- ART「デートタイム」: **1セット50G+α / 約+0.8枚/G**。
- 基本獲得: **赤7BIG約304枚 / 白7BIG約200枚 / REG約40枚**。
- 通常天井: **ボーナス間1228Gで次回ボーナスまで継続する無限ART**。

### resetBehavior v0.7

- `settingChangeBehavior`: **CEILING_COUNTER_CLEAR__HIGH_STATE_LOTTERY__NORMAL_STATE_A_START**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: 1228G天井の進捗を設定変更でクリア。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **通常状態Aスタート + 高確移行抽選**。
- `stateAfterReset`: 高確移行率 **設定1・2=20.0% / 3・4=22.5% / 5・6=25.0%**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 設定変更時に高確移行抽選あり。
- `resetPenalties`: 設定変更で前日の1228G天井進捗が失われるため宵越し狙いには不利。
- `resetDetection`: 内部状態から推測余地はあるが、初期出目/画面/ガックン等の直接判別は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: 設定変更時高確移行率20.0/22.5/25.0%。朝一特定G以内当選率・専用短縮天井・ガックン発生率は **NONE_CONFIRMED_AFTER_RESEARCH**。

### 競合・注意

- 導入日は2012-02-20と2012-02-17でCONFLICT。主値は必勝本/FIX Records一致の2012-02-20。
- パチマガスロマガ簡易ページのREG設定6=1/329.4は、同サイト精密ページ/P-WORLD/必勝本の1/392.4系と不一致。主値1/392.43、簡易ページは転記異常としてCONFLICT_NOTE保持。
- 据え置き時の天井進捗・内部状態保持、単純電源OFF→ON、ガックン/初期出目/朝一画面は十分再探索後も直接確定できずUNVERIFIED_AFTER_RESEARCH。

## 時系列監査

- 前回frontier 2012-02-13以降を再探索し、ToHeart2を次の強い具体日候補として確定。
- HAZUSEの2012-02-17表記は日付競合として同一レコードに統合し、別機種として重複登録しない。
- 次回は **2012-02-20同日群を最終監査**し、追加がなければ **2012-02-21以降**を日付順に進む。
- 2012-02-13以前のBLACK LAGOON、新・ドロンジョにおまかせ、世界で叩け！モグモグ風林火山等へ逆戻りしない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 638 / chronologicalFrontier 2012-02-20**から開始。
2. まず **2012-02-20同日群の未登録5号機**をK-Navi/P-WORLD/パチビー/HAZUSE/当時業界記事で最終監査。
3. 同日群に漏れがなければ **2012-02-21以降の最古未処理5号機**を日付順に確定する。
4. 候補確定後、想定実パスを直接fetch→重複確認→性能コア+resetBehavior v0.7を収集。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1977/1/33451`
- パチ＆スロ必勝本 設定変更&天井情報: `https://p.hisshobon.jp/machine/1977/1/33214`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/11/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/11/h-1.php`
- パチマガスロマガ 小役確率/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/11/c-1.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6590`
- K-Navi: `https://p-kn.com/slot/1555/`
- グリーンべると: `https://web-greenbelt.jp/00002444/`
- FIX Records: `https://fixrecords.com/2012/02/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0600/`

## GitHub commits

- machine record: `b444ac9c6ab3405444f969801f35c21c3ff659c2`
