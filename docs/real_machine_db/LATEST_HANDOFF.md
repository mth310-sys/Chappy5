# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **693**
- latestMachineAdded: **2027 Revise**（スター）
- latestRecord: `docs/real_machine_db/machines/2012-10-22_2027-revise.md`
- chronologicalFrontier: **2012-10-22**
- frontierLatestExactDateMachine: **2027 Revise**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-10-22_WORKING_GROUP__NEXT_KOF3**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-10-15_nangoku-sodachi-1st-vacation.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **692** / chronologicalFrontier **2012-10-15** / 10-15群暫定CLOSED。
- 2012-10-16〜10-21境界を「パチスロ 新台」「導入」「メーカー・業界発表」等で再監査。10/17発表・10/18記事のSLOT牙狼は納品開始予定が12/16であり、この境界の導入機ではない。今回、10/16〜10/21に具体導入日を持つ未登録5号機は確定できず、10/22群へ進んだ。
- repo内を `2027 Revise` で検索し既存レコードなしを確認後、693件目として追加。

## 今回追加 — 2027 Revise

### 識別

- manufacturer: **スター**
- releaseDate: **2012-10-22**（K-Naviホール導入開始）
- generation: **5号機**
- systemType: **ART / CZ / BR非搭載 / 天井あり**
- modelName / approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割: **97.7 / 98.4 / 99.8 / 103.2 / 106.5 / 112.4%**
- ART初当り: **1/271.2 / 265.3 / 251.3 / 232.6 / 214.1 / 195.1**
- 50枚ベース: **約30G/1000円**
- ART「BATTLE MODE」: **1セット20G（初回40G） / 約+2.1枚/G / 継続率70〜95%**
- CZ「追跡MODE」: **10G**
- CZ「急襲MODE」: **20G**
- 通常ART天井: **ART終了後999G**
- CZ間天井: **最大510G**

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_CLEAR_GAME_COUNTER_RELOT_INTERNAL_MODE_INITIAL_STAGE_FAR_DISTANCE**
- `gameCounterReset`: **設定変更で天井消化GをCLEAR**
- `modeAfterReset`: **設定変更で内部モード移行抽選**。具体振り分けはUNVERIFIED_AFTER_RESEARCH。
- `settingChangeInitialStage`: **遠距離ステージ**
- `powerCycleBehavior`: **液晶ステージ引継ぎを確認**。ゲーム数/CZ間カウンタ/内部モードの電断時完全契約はUNVERIFIED_AFTER_RESEARCH。
- `carryOverBehavior`: 電断時ステージ引継ぎ以外の据え置き契約は、一般論で補完せずPARTIAL。
- `ceilingAfterReset`: 通常ART天井999G。設定変更専用固定短縮天井はUNVERIFIED_AFTER_RESEARCH。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetBenefits`: モード再抽選は確認したが、朝一優遇率等の公開数値はUNVERIFIED_AFTER_RESEARCH。
- `resetPenalties`: **前日のART天井進捗消失**。
- `resetDetection`: 設定変更後は遠距離ステージ、電源ON/OFFのみはステージ引継ぎ。前日ステージ把握時は判別材料になり得る。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

## 10-16〜10-21境界監査

- 検索語を日付別「2012年10月16日〜21日 パチスロ 新台/導入」とメーカー・業界記事へ展開。
- SLOT牙狼は2012-10-17発表 / 10-18業界記事だが納品開始予定12/16のため、この境界の導入候補から除外。
- 10/16〜10/21に今回具体導入日付き未登録5号機を確定できず、境界は暫定CLOSED。

## 2012-10-22同日群

- **登録済み: 2027 Revise（スター）**
- 次の既知未処理候補:
  1. **KOF3**（SNKプレイモア）
  2. **ドカベン**（タイヨーエレック）
  3. **パチスロ一騎当千XX**（バルテック）
- `キュインぱちすろ南国育ち 1st vacation` はDATE_CONFLICTを保持し2012-10-15キーで既登録。重複追加しない。
- 同日群は上記だけと決め打ちせず、K-Navi / HAZUSE / パチビー / ALL7 / メーカー・業界記事で残存候補を再監査してから閉じる。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 693 / chronologicalFrontier 2012-10-22 / 10-22群OPEN** から開始。
2. repo重複・導入日を確認して、最優先 **KOF3（SNKプレイモア）** を処理。
3. 続いて **ドカベン → パチスロ一騎当千XX**。
4. その後、10/22同日群の漏れをALL7ページング・K-Navi・HAZUSE・パチビー等で再監査してCLOSE判定。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### 2027 Revise
- K-Navi機種トップ: `https://p-kn.com/slot/1712/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6850`
- パチマガスロマガ 小役確率/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/star_slot/02/c.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/star_slot/02/l.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/star_slot/02/h.php`
- 天井ハイエナ生活 2012-11-06記事: `https://macerate.seesaa.net/article/300741744.html`
- 天井ハイエナ生活 2012-12-18一覧: `https://macerate.seesaa.net/article/308653872.html`

### 境界監査
- グリーンべると SLOT牙狼 2012-10-18: `https://web-greenbelt.jp/00001671/`（納品開始予定12/16）
