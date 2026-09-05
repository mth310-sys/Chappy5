# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **659**
- latestMachineAdded: **GTO ～Limit Break～**（ビスティ）
- latestRecord: `docs/real_machine_db/machines/2012-06-04_gto-limit-break.md`
- chronologicalFrontier: **2012-06-04**
- frontierLatestExactDateMachine: **GTO ～Limit Break～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-04_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ 天 天和通りの快男児」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFと実レコードを優先。開始時正本は recordCount 658 / frontier 2012-06-04。
- 前回HANDOFF指定のビスティ「GTO ～Limit Break～」をrepo検索し未登録確認後、659件目として追加。
- 導入日はK-Navi/後年整理DB=2012-06-04、グリーンべると=2012-06-03納品開始予定、SANKYOオンライン博物館=2012.06。導入・納品・年月の定義差を保持し、時系列キーはK-Naviのホール導入開始2012-06-04を採用。
- 性能コアはSANKYOオンライン博物館、FIELDS、グリーンべると、P-WORLD、K-Navi、パチマガスロマガ、パチナビで横断照合。
- resetBehaviorは機種名/型式名/ビスティと、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/1200G/高確/モード/ガックンを組み替えて再探索。パチマガスロマガに本機専用「朝イチ・設定変更」項目が存在するが、取得可能本文から具体契約を回収できないため推測せずUNVERIFIED_AFTER_RESEARCH。
- 同日新台資料から2012-06-04群に大都技研「パイレーツワールド」、山佐「ニューパルサーSP」、パイオニア「オアシス」、ディ・ライト「パチスロ 熱血！華成学園ヒーロー部」も確認。次回はまずパイレーツワールドをrepo重複確認して処理する。

## 今回の本線追加 — GTO ～Limit Break～

### 導入・分類

- manufacturer: **ビスティ**。
- releaseDate: **2012-06-04**（K-Naviホール導入開始）。
- generation: **5号機**。
- systemType: **A+ART / 自力CZ / ベルナビ回数管理ART**。
- formalModelName: **GTO～LimitBreak～R**。
- approvalNumber: **2S0011**。

### 性能コア

- 機械割: **97.0 / 98.4 / 100.2 / 104.0 / 107.6 / 112.1%**。
- BIG: **1/394.8 / 387.8 / 381.0 / 368.2 / 362.1 / 356.2**。
- REG: **1/668.7 / 655.4 / 642.5 / 618.3 / 606.8 / 455.1**。
- ボーナス合算: **1/248.2 / 243.6 / 239.2 / 230.8 / 226.8 / 199.8**。
- ART初当り: **1/297.6 / 279.5 / 285.2 / 246.2 / 237.5 / 197.7**。
- ボーナス+ART合算: **1/148.0 / 142.1 / 142.2 / 129.5 / 126.0 / 107.0**。
- 50枚ベース: **約31.7G**（パチマガスロマガ本機専用ページの1000円あたりゲーム数）。
- BIG約**210枚**、REG約**48枚**。
- ART「鬼塚RUSH」: **約+1.5枚/G**、ベルナビ回数管理型。
- CZ「GREAT CHALLENGE」: **7G、トータルART期待度約33%**。
- ART終了後引き戻し: **約30%**（パチマガスロマガ）。
- 通常天井: **約1200G**。搭載自体はP-WORLD/K-Navi、具体値は後年整理DBで確認。当時天井本文の具体条件は今回未回収のため値の信頼度を分離。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。約1200G天井カウンタのCLEAR/RETAINを直接確認できず。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。変更専用短縮数値未確認。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常/高確の内部モード存在は確認したが変更時再抽選/引継ぎは未確定。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 次回再開地点

1. **recordCount 659 / chronologicalFrontier 2012-06-04**から開始。
2. **2012-06-04同日群を継続**。最優先候補は **大都技研「パイレーツワールド」**。当時2012-06-04新台資料で導入開始を確認済み、repoコード検索では現時点で同名ヒットなし。実パス/表記揺れでも重複確認してから660件目候補として処理。
3. その後、同日候補 **ニューパルサーSP → オアシス → パチスロ 熱血！華成学園ヒーロー部** を既存repoと照合し、未登録のみ順に収集。
4. 2012-06-04同日群をメーカー別・当時新台一覧・K-Navi/P-WORLD/HAZUSE等で最終監査し、漏れがなければ閉じて06-05以降へ前進。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- SANKYOオンライン博物館 GTO～Limit Break～: `https://www.sankyo-fever.jp/collection/876/`
- FIELDS 2012遊技機一覧: `https://www.fields.biz/products/ps/machine_list2012.html`
- グリーンべると: `https://web-greenbelt.jp/00001487/`
- K-Navi: `https://p-kn.com/slot/1635/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6728`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/21/a.php`
- パチマガスロマガ 小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/21/c.php`
- パチマガスロマガ 機種TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/21/bisty_slot_21.php`
- パチナビ: `https://pachinavi.net/machines/gto-limit-break/`
- pacnk 天井整理値: `https://pacnk.com/slot/tools/hamari.php?id=gtolimitbreak`
- 2012-06-04当時新台一覧: `https://macerate.seesaa.net/article/273495238.html`

## GitHub commits

- パチスロ 天 天和通りの快男児 machine record: `61fba37eb7465d7862adf6dc6ad2316893a55252`
- GTO ～Limit Break～ machine record: `439ff5113afc1d6adc29a026f36d7a595855572b`
