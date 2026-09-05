# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **697**
- latestMachineAdded: **ランブルローズ3D**（KPE）
- latestRecord: `docs/real_machine_db/machines/2012-11-05_rumble-roses-3d.md`
- chronologicalFrontier: **2012-11-05**
- frontierLatestExactDateMachine: **ランブルローズ3D**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-11-05_GROUP**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-10-22_ikkitousen-xx.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **696** / chronologicalFrontier **2012-10-22** / 10-22群CLOSED / 次工程「10/23〜11/04境界最終監査→11/05群」。
- 10/23〜11/04境界を「2012年10月29日 パチスロ」「2012年10月 新台」「HAZUSE」等で再監査。今回、新規の具体日付き未登録機を確定できず、既知の11/05群へ進行。
- `ランブルローズ3D` をrepo検索し既存レコードなしを確認後、697件目として追加。

## 今回追加 — ランブルローズ3D

### 識別

- manufacturer: **KPE**
- releaseDate: **2012-11-05**（パチビー）。コナミ公式機種アーカイブは稼働開始2012年11月。後年整理資料に2012年9月導入表記があるため定義差として保持。
- generation: **5号機**
- systemType: **ART / CZ / BIG / 規定ゲーム数管理 / 天井あり**
- modelName: **ランブルローズ3DZ**
- approvalNumber: **2S0721**

### 性能コア

- 機械割: **97.2 / 98.3 / 101.8 / 104.6 / 108.1 / 112.8%**
- BIG+ART初当り合算: **1/254.0 / 242.7 / 224.4 / 212.1 / 195.6 / 165.1**
- 50枚ベース: **31.0G/1000円**（パチマガスロマガ直接値、独立精密照合待ち）
- BIG: **約204枚**
- 表/裏ART: **1セット40G+α、約+2.0枚/G**
- 表CZ「ランブルチャンス」: **13〜19G、ART期待度約33%**
- モード別最大天井: **表A999G / 表B1050G / 表天国128G / 裏A384G / 裏B1050G / 裏天国128G**

### resetBehavior v0.7

- `settingChangeBehavior`: **天井消化GをCLEAR→規定G再セット、内部モード再抽選、約20%で表天国スタート、液晶通常ステージは引継ぎ、内部状態は移行抽選なし**。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**。当時資料は「宵越し×」。
- `ceilingAfterReset`: モード再抽選後の規定Gを再セット。設定変更専用の一律短縮天井は確認できないが、約20%の表天国なら最大128G。
- `modeAfterReset`: **CONFIRMED_RESELECT__APPROX_20PCT_FRONT_HEAVEN**。残り全振り分けは未確認。
- `stateAfterReset`: 当時資料で **内部状態は移行抽選なし**。それ以上の初期化/保持細分は推測しない。
- `carryOverBehavior`: 純据え置きの全カウンタ/モード/状態の完全契約は **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: 単純電源OFF→ON時の天井/モード/状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- `resetBenefits`: **約20%で表天国スタート→最大128G ART**。
- `resetPenalties`: **前日の規定G/天井進捗消失**。
- `resetDetection`: 設定変更後も通常液晶ステージを引き継ぐため、初期ステージ単独の単純判別には使えない。本機固有ガックン/電断との差による確定判別は未確認。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `publicMorningNumbers`: **設定変更後 約20%で表天国 / 表天国最大128G**。

## 2012-11-05同日群監査

今回の再探索で、11/05具体日付き未登録候補を少なくとも以下まで確認。

1. **ランブルローズ3D（KPE）** — 今回登録済み
2. **戦国パチスロ花の慶次～天に愛されし漢～（ニューギン）** — HAZUSEが導入開始2012-11-05、repo未登録確認済み
3. **BASTARD!!－暗黒の破壊神－（DAXEL）** — パチビーが導入日2012-11-05、repo未登録確認済み

- 前handoffではランブルローズ3D / BASTARD!!を既知候補としていたが、今回の境界監査で **戦国パチスロ花の慶次～天に愛されし漢～** も同日未登録と確認したため、キューへ追加。
- 11/05群はまだ **OPEN**。上記2機種を処理後、同日群の最終漏れ監査を行う。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 697 / chronologicalFrontier 2012-11-05 / 11-05群OPEN** から開始。
2. 同日未登録の **戦国パチスロ花の慶次～天に愛されし漢～（ニューギン）** を最優先で性能コア＋resetBehavior v0.7調査。
3. 続いて **BASTARD!!－暗黒の破壊神－（DAXEL）** を処理。
4. その後、K-Navi / HAZUSE / パチビー / ALL7 / メーカー・業界記事で2012-11-05同日群を最終監査し、漏れがなければ次の具体日へ進む。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### ランブルローズ3D
- KONAMI公式機種アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2012/rumble3D/`
- パチビー: `https://www.pachibee.jp/movies/index/8612`
- グリーンべると: `https://web-greenbelt.jp/00001567/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6853`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/31/a.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/31/l.php`
- パチマガスロマガ 小役確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/31/c.php`
- K-Navi 内部モード: `https://p-kn.com/slot/1711/40717/`
- 天井ハイエナ生活（2012年当時）: `https://macerate.seesaa.net/article/300691433.html`
- 中一商事: `https://www.nakaiti.com/html/sKpe076.html`
- A-SLOT: `https://www.a-slot.com/SHOP/kpe40.html`

### 次キュー確認
- HAZUSE 戦国パチスロ花の慶次～天に愛されし漢～: `https://hazuse.com/machine/pachislot/2S0897/`
- パチビー BASTARD!!－暗黒の破壊神－: `https://www.pachibee.jp/movies/index/8664`
