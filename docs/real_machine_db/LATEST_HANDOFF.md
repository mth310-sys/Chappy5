# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **702**
- latestMachineAdded: **ビガースペシャル**（エマ）
- latestRecord: `docs/real_machine_db/machines/2012-11-19_vigor-special.md`
- chronologicalFrontier: **2012-11-19**
- frontierLatestExactDateMachine: **ビガースペシャル**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-11-19_GROUP__NEXT_QROGOS_2**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-11-19_bikini-pai-2.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **701** / chronologicalFrontier **2012-11-19** / 11-19群OPEN / 次候補ビガースペシャル。
- repo重複検索で「ビガースペシャル」「ビガーSpecial」既存レコードなしを確認後、**702件目: ビガースペシャル（エマ）** を登録。

## 今回追加 — ビガースペシャル

### 性能コア

- releaseDate: **2012-11-19**。HAZUSEの具体日を採用。
- modelName: **ビガーR** / approvalNumber: **2S0863**。
- 機械割: **97.5 / 99.0 / 101.5 / 105.5 / 110.0 / 115.0%**。HAZUSE・パチマガスロマガ全設定一致。
- BIG: **1/297.8 / 295.2 / 292.5 / 289.9 / 287.4 / 284.9**。
- REG: **1/504.1 / 481.8 / 461.5 / 442.8 / 425.5 / 409.6**。
- 合成: **1/187.2 / 183.0 / 179.0 / 175.2 / 171.5 / 168.0**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- ART: 次回BIG成立まで継続、REGでは終了しないセットストック型。**ボーナス込み約+5.8枚/G**。
- BIG約**300枚**、REG約**105枚**。
- ARTはボーナス成立時抽選と、通常時約**1/70**の爆弾揃いの規定回数成立等から突入。設定別ART初当たりは未確認。
- 通常時内部状態: **低確 / 高確 / 超高確**。
- HAZUSEは **天井機能非搭載** と明記。

### resetBehavior v0.7

- `settingChangeBehavior`: 本機固有の内部状態・爆弾規定回数カウント・ARTストック等の変更時契約は **UNVERIFIED_AFTER_RESEARCH**。ゲーム数天井は非搭載なので天井リセットは非該当。
- `carryOverBehavior`: ゲーム数天井の宵越しは **NOT_APPLICABLE_NO_CEILING**。内部状態・爆弾規定回数・ARTストックの据え置き契約は未確認。
- `powerCycleBehavior`: 電源OFF→ONのみの内部状態・爆弾規定回数・ARTストック・表示状態は **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: ゲーム数天井カウンタは **NOT_APPLICABLE_NO_CEILING_FUNCTION**。爆弾規定回数の内部カウント処理は未確認。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING_FUNCTION**。短縮天井/朝一専用天井なしを直接確定できる数値はなし。
- `modeAfterReset` / `stateAfterReset`: 通常時3状態の存在は確認済みだが、変更時振り分け・引継ぎは **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失は天井非搭載につき非該当。
- `resetDetection`: ガックン・出目・ドット表示等による本機固有判別は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

## CONFLICT / 注意

- P-WORLDのタイプ欄には「天井」表示がある一方、HAZUSEの天井本文は **「天井機能非搭載」** と明記。P-WORLD本文に具体的ゲーム数天井がないため、ゲーム数天井の本線値はHAZUSE直接記述を採用し、P-WORLD分類表示は `SOURCE_LABEL_CONFLICT_WITHOUT_NUMERIC_CEILING` としてレコード内保持。
- ART純増約5.8枚/Gは **ボーナス込み**。一般的なナビART純増/Gと同列集計しない。

## 2012-11-19同日群・次境界

- 2012-11-19導入の **ビキニパイ2 → ビガースペシャル** まで登録。
- 直前HANDOFFの残候補 **キュロゴス2（山佐）** は未処理。
- よって11/19群は **OPEN** のまま維持。
- 次リレーは **キュロゴス2** を最優先でrepo重複確認し、導入日再確認後、性能コア＋resetBehavior v0.7を調査して未登録なら703件目として登録。
- その後11/19同日残存機をHAZUSE日付、メーカー/業界資料、当時新台一覧等で監査し、漏れがなければ11/19群をCLOSEDにする。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 702 / chronologicalFrontier 2012-11-19 / 11-19群OPEN** から開始。
2. **キュロゴス2（山佐）** をrepo重複確認→導入日再確認→性能コア＋resetBehavior v0.7本調査→未登録なら703件目として登録。
3. 11/19同日残存機を日付・メーカー・業界資料で監査し、漏れがなければ11/19群をCLOSED。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### ビガースペシャル
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0863/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/2S0863/genre/201/`
- HAZUSE 初打講座: `https://hazuse.com/machine/pachislot/2S0863/genre/203/`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/39/h.php`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/39/a.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/39/l.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6891`

### 次候補
- HAZUSE キュロゴス2: `https://hazuse.com/machine/pachislot/2S0984/`
