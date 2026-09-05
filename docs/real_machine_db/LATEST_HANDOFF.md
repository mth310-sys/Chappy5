# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **694**
- latestMachineAdded: **KOF3**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2012-10-22_kof3.md`
- chronologicalFrontier: **2012-10-22**
- frontierLatestExactDateMachine: **KOF3**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-10-22_WORKING_GROUP__NEXT_DOKABEN**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-10-22_2027-revise.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **693** / chronologicalFrontier **2012-10-22** / 10-22群OPEN / 次機種KOF3。
- repoを `KOF3` で検索し既存レコードなしを確認後、694件目として追加。

## 今回追加 — KOF3

### 識別

- manufacturer: **SNKプレイモア**
- releaseDate: **2012-10-22**（パチビー導入日。グリーンべるとは納品10/21～、メーカー公式は2012年10月稼働予定）
- generation: **5号機**
- systemType: **ART / CZ / BR非搭載 / ゲーム数管理 / 天井あり**
- modelName: **KOF3D**（メーカー公式）
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割: **96.8 / 98.6 / 99.9 / 104.0 / 109.1 / 114.2%**
- KING RUSH: **1/350.4 / 340.7 / 320.0 / 289.7 / 254.8 / 214.6**
- REG BONUS: **1/673.9 / 611.9 / 619.1 / 525.3 / 495.2 / 395.1**
- ART合算: **1/230.5 / 218.8 / 210.9 / 186.7 / 168.2 / 139.0**
- 50枚ベース: **30.01～30.17G/1000円**
- ART純増: **約+2.0枚/G**
- KING RUSH: **50G+α**
- 超KING RUSH: **100G+α**
- REG BONUS: **30G固定ART**
- CZ「超必ATTACK」: **10G / ART期待度33%以上**
- ゲーム数モード最大: **通常A 1280G / 通常B 896G / 天国 128G / 超天国 128G**

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_CLEAR_GAME_COUNTER_RELOT_GAME_NUMBER_MODE__DISPLAY_STAGE_RESELECTED**
- `gameCounterReset`: **設定変更で天井/規定ゲーム数進捗CLEAR**。2012年当時資料を複数照合。
- `modeAfterReset`: **設定変更で内部ゲーム数モード移行抽選**。具体振り分けは専用資料参照の存在までは確認したが、取得可能本文から安全に回収できず `UNVERIFIED_AFTER_RESEARCH`。
- `ceilingAfterReset`: 設定変更後は新モードテーブルを再セット。設定変更専用の固定短縮天井は `UNVERIFIED_AFTER_RESEARCH`。
- `powerCycleBehavior`: **液晶ステージは電源ON/OFF時も再選択**。規定Gカウンタ/モード/内部状態の電断時完全契約は `UNVERIFIED_AFTER_RESEARCH`。
- `carryOverBehavior`: 純据え置き時の規定G進捗・モード・状態の完全な本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetBenefits`: モード再抽選は確認。天国/超天国は最大128Gだが、設定変更時の天国以上選択率を回収できないため朝一優遇率は数値化しない。
- `resetPenalties`: **前日の規定ゲーム数進捗消失**。
- `resetDetection`: 設定変更時も電源ON/OFF時も液晶ステージ再選択のため、開始液晶ステージ単独では変更判別不可。本機固有ガックン等は `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `publicMorningNumbers`: **UNVERIFIED_AFTER_RESEARCH**。

## 10-22同日群

- **登録済み: 2027 Revise（スター）**
- **登録済み: KOF3（SNKプレイモア）**
- 次の既知未処理候補:
  1. **ドカベン**（タイヨーエレック）
  2. **パチスロ一騎当千XX**（バルテック）
- 同日群は上記だけと決め打ちせず、K-Navi / HAZUSE / パチビー / ALL7 / メーカー・業界記事で残存候補を再監査してから閉じる。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 694 / chronologicalFrontier 2012-10-22 / 10-22群OPEN** から開始。
2. repo重複・導入日を確認して、最優先 **ドカベン（タイヨーエレック）** を処理。
3. 続いて **パチスロ一騎当千XX（バルテック）**。
4. その後、10/22同日群の漏れをALL7ページング・K-Navi・HAZUSE・パチビー・メーカー/業界資料で再監査してCLOSE判定。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### KOF3
- SNKプレイモア公式: `https://slot.snk-corp.co.jp/official/kof3/`
- グリーンべると 2012-09-06: `https://web-greenbelt.jp/00001640/`
- パチビー: `https://www.pachibee.jp/machines/lecture/212090005`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6856`
- パチマガスロマガ 小役確率/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/41/c.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/41/l.php`
- 5号機クロニクル SNKプレイモア一覧: `https://5goki.com/snkplaymore`
- 天井ハイエナ生活 2012-12-18一覧: `https://macerate.seesaa.net/article/308653872.html`
- 目指せ月収20万！ KOF3天井解析 2012-10-16: `https://mezase20.com/blog-entry-676.html`

### 前回までの主要境界資料
- 2027 Revise K-Navi: `https://p-kn.com/slot/1712/`
- 2027 Revise P-WORLD: `https://www.p-world.co.jp/machine/database/6850`
- グリーンべると SLOT牙狼 2012-10-18: `https://web-greenbelt.jp/00001671/`（納品開始予定12/16）
