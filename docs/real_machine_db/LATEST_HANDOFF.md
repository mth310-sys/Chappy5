# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **635**
- latestMachineAdded: **コンチネンタルV**（メーシー販売）
- latestRecord: `docs/real_machine_db/machines/2012-02-06_continental-v.md`
- chronologicalFrontier: **2012-02-06**
- frontierLatestExactDateMachine: **コンチネンタルV**
- schema: **resetBehavior v0.7**
- status: **2012-02-06_SAME_DAY_AUDIT_CLOSE_CANDIDATE__NEXT_2012-02-13**

## 今回の本線追加 — コンチネンタルV

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFFを確認して開始。
- 開始時正本は **recordCount 634 / chronologicalFrontier 2012-02-06 / latestMachineAdded BLACK LAGOON**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 直前BLACK LAGOONレコードはfetch_fileで一時404だったが、mainの直前コミット `1601d6e260335ce8bef21bd7d09e20eacb4cf4af` が `docs/real_machine_db/machines/2012-02-06_black-lagoon.md` を追加したことをコミット内容から確認し、handoffと実コミットが一致していることを検証した。
- コンチネンタルVの想定実パス `docs/real_machine_db/machines/2012-02-06_continental-v.md` を直接fetchし未登録を確認後、635件目として追加。
- K-Navi、HAZUSE、パチビーが導入 **2012-02-06** で一致。
- 型式名 **コンチネンタルファイブ**、検定番号 **1S0658**。

### 性能コア

- systemType: **A+ART**。
- 設定別機械割: **97.6 / 99.2 / 101.6 / 104.3 / 108.1 / 112.2%**。
- BIG: **1/443 / 440 / 437 / 434 / 431 / 420**。
- REG: **1/482 / 478 / 475 / 471 / 468 / 455**。
- ボーナス合算: **1/231 / 229 / 228 / 226 / 224 / 218**（pacnk精密値 1/230.80 / 229.10 / 227.60 / 226.00 / 224.40 / 218.50 と整合）。
- ART初当たり: **1/640 / 535 / 517 / 424 / 432 / 352**（pacnk精密値 1/639.80 / 534.70 / 517.30 / 424.40 / 431.50 / 352.40）。
- BIG約**207枚**、REG約**54枚**。
- ART「スーパーラッシュ」: **約+1.4枚/G**。セーフティーゾーン最低30G+α、チャレンジゾーン最低5G+α。
- 通常天井: **ボーナス間1200GでART突入確定**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。表記揺れ・50枚/1000円/ベース/コイン持ち等で資料系統を変えて再探索したが、比較可能な直接数値を確定できず。

### resetBehavior v0.7

- `settingChangeBehavior`: **設定変更時に高確モード移行抽選**。P-WORLD・パチビーで直接確認。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の1200G天井カウンタCLEAR/RETAINを本機固有資料で確定できず。
- `ceilingAfterReset`: **通常1200G天井。リセット専用短縮天井はNONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **HIGH_PROBABILITY_MODE_SELECTION_CONFIRMED_ON_SETTING_CHANGE__DISTRIBUTION_UNVERIFIED**。
- `stateAfterReset`: **設定変更時に高確モード移行抽選を行うことはCONFIRMED**。具体率はUNVERIFIED_AFTER_RESEARCH。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **朝一高確スタートの可能性**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

### CONFLICT

- ボーナス+ART合算の設定3: **K-Navi 1/163.4 / パチビー 1/165.8**。平均化せずCONFLICTとして保存。

## 時系列監査

- 2012-02-06同日群で既知の未登録だったBLACK LAGOON、コンチネンタルVを処理済み。
- K-Navi等の再検索で2012-02-06導入の追加パチスロを今回新たに確定できなかったため、**同日群は閉鎖候補**。
- 次の具体日付き候補として **2012-02-13「新・ドロンジョにおまかせ」**、**2012-02-13「世界で叩け！モグモグ風林火山」** をK-Naviで確認。
- 次回は02/07〜02/12の漏れ監査を短く行った後、問題なければ2012-02-13同日群へ進む。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 635 / chronologicalFrontier 2012-02-06**から開始。
2. 2012-02-06同日群の最終漏れ監査を1回行う。
3. **2012-02-07〜2012-02-12**に具体日付き未登録5号機がないか、K-Navi/P-WORLD/パチビー/HAZUSE/業界記事で境界監査。
4. 問題なければ **2012-02-13「新・ドロンジョにおまかせ」** を最優先候補として想定実パス直接fetch→重複確認→性能コア+resetBehavior v0.7収集。
5. 続いて同日候補 **「世界で叩け！モグモグ風林火山」** を処理。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- HAZUSE コンチネンタルV: `https://hazuse.com/machine/pachislot/1S0658/`
- K-Navi コンチネンタルV: `https://p-kn.com/slot/1547/`
- パチビー コンチネンタルV: `https://www.pachibee.jp/machines/index/211110006`
- P-WORLD コンチネンタルV: `https://www.p-world.co.jp/machine/database/6567`
- pacnk コンチネンタルV: `https://pacnk.com/slot/tools/sh_continentalv.html`
- K-Navi 新・ドロンジョにおまかせ: `https://p-kn.com/slot/1565/`
- K-Navi 世界で叩け！モグモグ風林火山: `https://p-kn.com/slot/1561/`

## GitHub commits

- machine record: `85ecb6d522efcbfc2ec20c20883a0408a96d49df`
