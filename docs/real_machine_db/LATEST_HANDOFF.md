# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **655**
- latestMachineAdded: **真田純勇士すぺしゃる**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2012-05-14_sanada-junyushi-special.md`
- chronologicalFrontier: **2012-05-14**
- frontierLatestExactDateMachine: **真田純勇士すぺしゃる**
- schema: **resetBehavior v0.7**
- status: **FINAL_AUDIT_2012-05-14_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ鉄拳デビルVer.」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおり最新のLATEST_HANDOFFと実レコードを優先。
- 開始時正本は recordCount 654 / frontier 2012-05-07 / status FINAL_AUDIT_2012-05-07_SAME_DAY_GROUP。
- 2012-05-07同日群を再監査し、既登録「パチスロ コードギアス 反逆のルルーシュ」「パチスロ鉄拳デビルVer.」以外に具体日付を確定できる未登録5号機は今回確認できず、同日群を閉じた。
- 2012-05-08〜05-13を導入日/納品日/記事日を分離して境界監査。途中に具体日付付き未登録5号機を確定できず、最古の確定未処理として2012-05-14「真田純勇士すぺしゃる」を確認。
- `docs/real_machine_db/machines/2012-05-14_sanada-junyushi-special.md` をmainで直接確認し404、重複なしを確認して655件目として追加。

## 今回の本線追加 — 真田純勇士すぺしゃる

### 導入・分類

- manufacturer: **ニューギン**。
- releaseDate: **2012-05-14**。K-Naviのホール導入開始日を採用。当時業界記事転載では納品開始2012-05-13予定で、納品日/ホール導入日の定義差として整合。
- generation: **5号機**。
- systemType: **A+ART / 周期CZ / ゲーム数上乗せART**。
- formalModelName: **真田純勇士すぺしゃるW**（実機流通名で確認）。
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。

### 性能コア

- 機械割: **97.4 / 98.9 / 102.4 / 105.2 / 110.1 / 115.8%**。
- BIG: **1/448.9 / 448.9 / 425.6 / 425.6 / 404.5 / 399.6**。
- REG: **1/468.1 / 461.5 / 455.1 / 448.9 / 442.8 / 399.6**。
- ボーナス合算: **1/229.1 / 227.6 / 219.9 / 218.5 / 211.4 / 199.8**。
- ART初当り: **1/458 / 457 / 424 / 406 / 372 / 337**。
- 50枚ベース: **33.77〜33.98G/50枚**。
- BIG約**204枚**、REG約**56枚**。
- ART「常夏の陣」: 初当り時 **10 / 20 / 30 / 50 / 100G**、約**+1.3枚/G**。
- 「バナナスプラッシュ」: **30G固定**、約**+1.3枚/G**。
- 通常時は**32Gごとの周期CZ**を確認。
- 通常天井: **約1000G**で100Gまたは150GのART。厳密な999G等へは推定固定しない。

### resetBehavior v0.7

- `settingChangeBehavior`: **PARTIAL_CONFIRMED_CEILING_PROGRESS_CLEAR**。2012年当時の天井攻略資料で「宵越し×」を確認。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE_FOR_CEILING_PROGRESS**。前日天井進捗を設定変更後に利用できない。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH**。通常天井約1000G。変更専用短縮天井は確認できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。純据え置き時の天井/32G周期/内部状態保持を本機固有の直接表で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの本機固有挙動は確定できず。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更後の高確/前兆モード再抽選・具体率を直接確定できず。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。ART/CZ/高確状態の変更時処理を直接確定できず。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用短縮天井、高確スタート率、ART/CZ優遇の公開数値は確認できず。
- `resetPenalties`: 前日約1000G天井進捗の消失。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。K-Navi利用者レビューには変更/据え置き判別可能という言及が残るが、具体条件の解析本文を回収できず、ガックン/初期ステージ/周期挙動を推測しない。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 品質メモ

- 機械割と設定別ボーナスはパチマガスロマガと5号機クロニクルで一致。
- ART初当りは5号機クロニクル整理値を採用。
- 後年アプリ資料の「97〜116%」は97.4〜115.8%の丸め範囲としてCONFLICT扱いしない。
- 2016年後継「真田純勇士～ラブストライク～」の朝一/リセット仕様は流用していない。
- approvalNumber、純据え置き、単純電源OFF→ON、設定変更後モード/状態、具体的な変更判別は検索語・資料系統を変えて再探索後も直接根拠不足のためUNVERIFIED。

## 次回再開地点

1. **recordCount 655 / chronologicalFrontier 2012-05-14**から開始。
2. **2012-05-14同日群を最終監査**。真田純勇士すぺしゃる以外の未登録5号機がないか、導入日/納品日/記事日を混同せず確認。
3. 同日群に追加がなければ **2012-05-15〜05-20を境界監査**。
4. 既知の次アンカーは **2012-05-21「スカイラブ4」**（K-Naviでホール導入開始日確認済み）。ただし同日群に他機種がないか必ず確認してから登録する。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 真田純勇士すぺしゃる: `https://p-kn.com/slot/1615/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/22/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/22/h.php`
- パチマガスロマガ 小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/22/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6686`
- 5号機クロニクル ニューギン＆エキサイト: `https://5goki.com/newgin-excite`
- 天井ハイエナ生活 5/31更新: `https://macerate.seesaa.net/article/272914282.html`
- Pマンズ 2012年3月（グリーンべると記事転載）: `https://p-mans.blogspot.com/2012/03/`
- パチマガスロマガFREE 回顧: `https://pachimaga.com/free/special/0b144da21cba21742d7f085751f881125b5c8264.php`
- 江戸スロ 真田純勇士すぺしゃるW: `https://edoslot.net/SHOP/sanadajunnyuusisupesyaru.html`
- K-Navi スカイラブ4（次回アンカー）: `https://p-kn.com/slot/1624/`

## GitHub commits

- パチスロ鉄拳デビルVer. machine record: `5a7f1e7863216e31f1d5ad290f88e65b0df9ed99`
- 真田純勇士すぺしゃる machine record: `5af5e51f1d31eb8561330da2efe27f93de650100`
