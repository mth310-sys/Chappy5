# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **633**
- latestMachineAdded: **パチスロ ミッションインポッシブル**（D-light / Daiichiグループ）
- latestRecord: `docs/real_machine_db/machines/2012-02-06_mission-impossible.md`
- chronologicalFrontier: **2012-02-06**
- frontierLatestExactDateMachine: **パチスロ ミッションインポッシブル**
- schema: **resetBehavior v0.7**
- status: **2012-02-06_SAME_DAY_AUDIT**

## 今回の本線追加 — パチスロ ミッションインポッシブル

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ サクラ大戦3 ～Loop ver.～」を再取得して開始。
- 開始時正本は **recordCount 632 / chronologicalFrontier 2012-01-23**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 2012-01-23同日群から01/27→01/30境界を、日付・メーカー・機種名・当時記事系で再監査。今回、02/06より前へ差し込む具体日付き未登録5号機を追加確定できなかったため02/06へ前進。
- 想定実パスを直接fetchし未登録を確認後、633件目として追加。
- パチビーが導入 **2012-02-06** と掲載。スポニチ2011-12-22発表記事でも2012年2月リリース予定を確認。

### 性能コア

- systemType: **A+ART**。
- 設定別機械割: **96.5 / 97.7 / 99.1 / 103.7 / 108.7 / 116.0%**。
- BIG合算: **1/425.56 / 414.78 / 404.54 / 385.51 / 372.36 / 360.09**。
- REG: **1/799.22 / 780.19 / 762.05 / 712.35 / 668.73 / 630.15**。
- ボーナス合算: **1/204.80 / 201.03 / 197.40 / 189.41 / 183.06 / 177.12**。
- ART初当たり: **1/453.0 / 401.3 / 424.7 / 353.6 / 366.9 / 291.9**。
- ボーナス+ART: **1/172.2 / 161.7 / 162.9 / 146.5 / 144.8 / 128.4**。
- 50枚ベース（1000円あたり）: **34.4 / 34.4 / 34.4 / 34.5 / 34.6 / 34.7G**。
- BIG約**206枚**、REG約**48枚**。
- ART「ジャックナイフラッシュ」: **1セット40G・約+1.4枚/G**。
- 通常天井救済: **ボーナス間1340G消化以降、BIG当選でART最低2セット、REG当選で最低3セット**。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetBehavior調査メモ

- 「パチスロ ミッションインポッシブル / ミッションインポッシブル / D-light / Daiichi」と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/1340G/モード/状態/ガックンを組み替えて再探索。
- パチビー、P-WORLD、パチマガスロマガ、5号機クロニクル、後年設定判別DBを横断。
- 設定変更時の1340G天井カウンタCLEAR/RETAIN、据え置き時の進捗、単純電源OFF→ON、設定変更時のモード/状態、ガックン等は本機固有直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- リセット専用短縮天井、朝一専用モード、朝一特定G以内当選率はNONE_CONFIRMED_AFTER_RESEARCH。
- 有利区間は5号機のため非該当。

## 時系列監査

- 2012-01-23同日群、01/27、01/30を再監査し、今回02/06より前へ差し込む具体日付き未登録5号機は追加確定できず。
- 02/06「パチスロ ミッションインポッシブル」を登録。
- 次回は **2012-02-06同日群**をメーカー別一覧/P-WORLD/K-Navi/パチビー/当時業界で最終監査する。
- 同日群を閉じた後、**2012-02-07以降の最古未処理機**へ時系列で進む。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 633 / chronologicalFrontier 2012-02-06**から開始。
2. **2012-02-06同日群**の残存漏れを最終監査。
3. 候補ごとにGitHub code search + 想定実パス直接fetchで重複確認し、未登録なら性能コア+resetBehavior v0.7を同時収集。
4. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- パチビー: `https://www.pachibee.jp/machines/about/211120010`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6607`
- パチマガスロマガ（ボーナス確率・PAYOUT）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daiichi_slot/13/h.php`
- パチマガスロマガ（小役/1000円あたりG数）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daiichi_slot/13/c.php`
- 5号機クロニクル: `https://5goki.com/daiichi`
- スポニチ発表記事: `https://www.sponichi.co.jp/entertainment/news/2011/12/22/kiji/K20111222002294210.html`
