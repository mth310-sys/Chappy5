# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **695**
- latestMachineAdded: **ドカベン**（タイヨーエレック）
- latestRecord: `docs/real_machine_db/machines/2012-10-22_dokaben.md`
- chronologicalFrontier: **2012-10-22**
- frontierLatestExactDateMachine: **ドカベン**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-10-22_WORKING_GROUP__NEXT_IKKITOUSEN_XX**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-10-22_kof3.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **694** / chronologicalFrontier **2012-10-22** / 10-22群OPEN / 次機種ドカベン。
- repoを `ドカベン` で検索し2012年タイヨーエレック版の既存レコードなしを確認後、695件目として追加。

## 今回追加 — ドカベン

### 識別

- manufacturer: **タイヨーエレック**
- releaseDate: **2012-10-22**（HAZUSE DATA / 2012年当時導入予定一覧）。P-WORLDの2012年09月表記はCONFLICTとして保持。
- generation: **5号機**
- systemType: **A+ART / CZ / 天井あり / 押し順ART**
- modelName: **ドカベン2G**
- approvalNumber: **2S0764**

### 性能コア

- 機械割: **96.8 / 97.6 / 100.6 / 101.8 / 105.1 / 108.1%**
- ART初当り: **1/254.1 / 235.5 / 237.0 / 216.9 / 214.6 / 183.2**
- BIG: **1/2048.0 / 1927.5 / 1820.4 / 1724.6 / 1638.4 / 1560.4**
- BIG+ART合算: **1/226.1 / 209.9 / 209.7 / 192.7 / 189.7 / 164.0**
- 50枚ベース: **約32G/1000円**
- ART純増: **約+1.8枚/G**
- BIG: **約310枚**
- ART「明訓激闘モード」: **50G+α**
- CZ「特訓モード」: **15G**
- 通常天井: **ART終了後1400G**。P-WORLDは最大17G前兆後、最低5セット以上と掲載。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_CLEAR_ART_CEILING_COUNTER__OTHER_INTERNAL_CONTRACT_UNVERIFIED**
- `gameCounterReset`: **設定変更で1400G天井までのART間ゲーム数CLEAR**。DMMぱちタウン、2012-10-22当時天井解析、後年一覧を照合。
- `ceilingAfterReset`: 通常1400G天井を再スタート。設定変更専用の短縮天井は `UNVERIFIED_AFTER_RESEARCH`。
- `modeAfterReset`: 公開ゲーム数モード管理は最低限仕様として確認せず。通常時の低確/高確等は `stateAfterReset` で扱う。
- `stateAfterReset`: 低確/高確等の内部状態は存在するが、設定変更時振り分け/電断時保持は **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: 純据え置き時のART間進捗・状態の完全契約は **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: 単純電源OFF→ON時のカウンタ/状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- `resetBenefits`: 朝一専用CZ、高確優遇、天井短縮などの具体恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。2012年当時資料も朝一設定変更挙動を「調査中」としていた。
- `resetPenalties`: **前日のART間ハマリ進捗消失**。
- `resetDetection`: ガックン、開始ステージ、表示など本機固有変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 10-22同日群

- **登録済み: 2027 Revise（スター）**
- **登録済み: KOF3（SNKプレイモア）**
- **登録済み: ドカベン（タイヨーエレック）**
- 次の既知未処理候補:
  1. **パチスロ一騎当千XX**（バルテック）
- 同日群は一騎当千XXだけと決め打ちせず、K-Navi / HAZUSE / パチビー / ALL7 / メーカー・業界記事で残存候補を再監査してから閉じる。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 695 / chronologicalFrontier 2012-10-22 / 10-22群OPEN** から開始。
2. repo重複・導入日を確認して、最優先 **パチスロ一騎当千XX（バルテック）** を処理。
3. その後、10/22同日群の漏れをALL7ページング・K-Navi・HAZUSE・パチビー・メーカー/業界資料で再監査してCLOSE判定。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### ドカベン
- HAZUSE DATA: `https://data.hazuse.com/?genre=202&machine_code=2S0764`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6868`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/13/a.php`
- パチマガスロマガ 確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/13/h.php`
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/13/c.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/13/l.php`
- pacnk: `https://pacnk.com/slot/2012/dokaben/top.php`
- DMMぱちタウン: `https://p-town.dmm.com/machines/381`
- すろぱちくえすと 2012-10-22: `https://2-9densetsu.com/blog-entry-1213-html/`
- 天井ハイエナ生活 2012-11-06: `https://macerate.seesaa.net/article/300741744.html`
- 2012年当時導入予定一覧: `https://ameblo.jp/silver1x/`

### 前回までの主要境界資料
- 2027 Revise K-Navi: `https://p-kn.com/slot/1712/`
- グリーンべると SLOT牙狼 2012-10-18: `https://web-greenbelt.jp/00001671/`（納品開始予定12/16）
