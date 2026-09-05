# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **700**
- latestMachineAdded: **デュアルストーリー**（北電子）
- latestRecord: `docs/real_machine_db/machines/2012-11-15_dual-story.md`
- chronologicalFrontier: **2012-11-15**
- frontierLatestExactDateMachine: **デュアルストーリー**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-11-15_GROUP__NEXT_2012-11-19_BIKINI_PAI_2**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-11-05_bastard-ankoku-no-hakaishin.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **699** / chronologicalFrontier **2012-11-05** / 11-05群CLOSED。
- 直前HANDOFF指定の2012-11-09境界を「2012-11-09 / 2012年11月9日 / HAZUSE / パチスロ新台」で再監査したが、11/05より後かつ11/15より前に導入された未登録パチスロを今回確定できず、前進。
- repo重複検索で「デュアルストーリー」既存レコードなしを確認後、**700件目: デュアルストーリー（北電子）** を登録。

## 今回追加 — デュアルストーリー

### 性能コア

- releaseDate: **2012-11-15**。HAZUSEが具体導入日を掲載。P-WORLD現行DBは2013年01月表示のため releaseDate CONFLICT として平均せず保持し、具体日付きHAZUSEを時系列キーに採用。
- modelName: **デュアルストーリーN** / approvalNumber: **2S0601**。
- 機械割: **96.90 / 98.48 / 100.39 / 104.11 / 108.07 / 111.03%**。
- ボーナス合成: **1/199.80 / 191.63 / 184.09 / 173.38 / 165.49 / 152.41**。
- 赤BIG: **1/992.97 → 1/762.05**、青DRAGON BONUS: **1/668.73 → 1/508.03**、REG: **1/399.61 → 1/304.82**。
- ART設定別初当たり: **UNVERIFIED_AFTER_RESEARCH**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- ART「トレジャーハント」: **10/30/50G・約+1.3枚/G**。アッシュパーティーは30G固定、ハルパーティーは10/30/50G。
- BIG: **約259枚**、DRAGON BONUS: **約154枚**、REG: **約56枚**。
- 通常時は低確/高確が存在。CZ「チャレンジステージ」は **ボーナス後または300G周期**で移行。
- 300G周期CZは通常天井とは別物として保存。固定G到達でART保証となる通常天井は十分再探索後も今回確定できず。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の300G周期・低確/高確・ARTストック等の直接契約を確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。純据え置き時の周期進捗/状態/ストック保持契約を確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の周期/状態/ストック契約を確定できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。300G周期CZは存在するが設定変更時の周期G CLEAR/RETAINは推測しない。
- `ceilingAfterReset`: **NO_CONFIRMED_RESET_CEILING__NORMAL_CEILING_ITSELF_UNVERIFIED**。
- `modeAfterReset`: 通常時の低確/高確存在は確認、設定変更時の再抽選/引継ぎは **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。周期消失等を推測しない。
- `resetDetection`: ガックン/リール/液晶等を追加再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2012-11-15同日群・次境界

- HAZUSEの具体日付資料で **デュアルストーリー（2012-11-15）** を確認・登録。
- 11/15同日で他の未登録パチスロを今回の境界再監査では確定できなかったため、11/15群を **CLOSED** とする。
- 次の既知具体日群は **2012-11-19**。
- 直前HANDOFFからの未登録候補を維持: **ビキニパイ2（ネット） → ビガースペシャル（エマ） → キュロゴス2（山佐）**。
- 次リレー冒頭では11/16～11/18境界を短く再監査し、より古い未登録機がなければ **ビキニパイ2** を701件目候補としてrepo重複確認から処理する。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 700 / chronologicalFrontier 2012-11-15 / 11-15群CLOSED** から開始。
2. 2012-11-16～11-18境界をHAZUSE日付・メーカー/業界資料で短く再監査。
3. より古い未登録機がなければ **2012-11-19 ビキニパイ2（ネット）** を最優先でrepo重複確認→性能コア＋resetBehavior v0.7本調査→登録。
4. 同日群の次候補は **ビガースペシャル（エマ） → キュロゴス2（山佐）**。各機種で導入日を再確認し、未登録のみ処理。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### デュアルストーリー
- 北電子公式: `https://www.kitadenshi.co.jp/slot/dualstory/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0601/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/83/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/83/h.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/83/l.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6936`
- ホームスロット: `https://home-slot.net/SHOP/s-kitadenshi54.html`

### 次候補
- HAZUSE ビキニパイ2: `https://hazuse.com/machine/pachislot/SX0045/`
- HAZUSE ビガースペシャル: `https://hazuse.com/machine/pachislot/2S0863/`
- HAZUSE キュロゴス2: `https://hazuse.com/machine/pachislot/2S0984/`
