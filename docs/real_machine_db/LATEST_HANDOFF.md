# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **701**
- latestMachineAdded: **ビキニパイ2**（ネット）
- latestRecord: `docs/real_machine_db/machines/2012-11-19_bikini-pai-2.md`
- chronologicalFrontier: **2012-11-19**
- frontierLatestExactDateMachine: **ビキニパイ2**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-11-19_GROUP__NEXT_VIGOR_SPECIAL**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-11-15_dual-story.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **700** / chronologicalFrontier **2012-11-15** / 11-15群CLOSED。
- 2012-11-16～11-18境界を具体日・新台・HAZUSE等で短く再監査したが、11/15より後かつ11/19より前に導入された未登録パチスロを今回確定できず前進。
- repo重複検索で「ビキニパイ2」既存レコードなしを確認後、**701件目: ビキニパイ2（ネット）** を登録。

## 今回追加 — ビキニパイ2

### 性能コア

- releaseDate: **2012-11-19**。HAZUSEとパチビーで一致。グリーンべると当時記事は11月中旬納品予定。
- modelName: **ビキニパイ2** / approvalNumber: **2S0869**。
- 機械割: **96.0 / 98.2 / 100.2 / 104.2 / 108.1 / 113.3%**。HAZUSE・パチマガスロマガ一致。
- ART初当たり: **1/320 / 295 / 272 / 249 / 226 / 206**。後年整理資料の精密系列 **1/317.3 / 292.8 / 270.2 / 246.0 / 226.7 / 206.0** は平均せず精度/定義差として保持。
- ボーナス合成: **全設定1/299**、BIG合成 **1/579**、REG **1/618**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- ART「BIKINI RUSH」: **1セット30G+α・純増約+1.7枚/G**。
- ギガパイBONUS約**280枚**、メガパイ約**200枚**、デカパイ約**200枚**、七変化BONUS約**50枚**。
- 天井: **ボーナス間1200GでARTストック5セット**、以後ボーナス非成立のまま**300Gごとに5セット追加**とする当時/後年解析資料を保持。

### resetBehavior v0.7

- `settingChangeBehavior`: **設定変更で天井Gリセット、内部モード再セット**。液晶ステージは設定変更でも引継ぎ。
- `carryOverBehavior`: 純据え置き時の1200G天井進捗は、当時資料に「宵越し×」と「宵越し天井狙いは調査中」が併存するため **UNVERIFIED_AFTER_RESEARCH**。反対推定で埋めない。
- `powerCycleBehavior`: **電源OFF→ONのみでも液晶ステージ引継ぎ**。天井G・モード・ストックの純電断契約は **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: 設定変更時 **RESET_CONFIRMED**。据え置き/純電断は未確定。
- `ceilingAfterReset`: 設定変更専用短縮天井は **NONE_CONFIRMED**。通常天井1200G。
- `modeAfterReset`: **RESELECT_CONFIRMED**。公開モード振り分け数値は未確認。
- `stateAfterReset`: 高確スタートの可能性を示す当時資料あり。ただし低確/高確の具体振り分けは未確認。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 内部モード再セットに伴う高確スタート可能性。朝一レア小役なしで夕方ステージ移行は設定変更期待アップの当時攻略情報。
- `resetPenalties`: 専用不利抽選は確認なし。設定変更で前日天井進捗が消える点はプレイヤー側不利だが、据え置き契約未確定のため宵越し可否を断定しない。
- `resetDetection`: 液晶ステージは設定変更/電源ONOFFとも引継ぐため単独判別不可。朝一レア小役なし夕方移行は推測材料。ガックンは再探索後も未確認。
- `publicMorningNumbers`: 設定変更時モード振り分け、高確開始率、朝一特定G内当選率等の比較可能数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2012-11-19同日群・次境界

- 2012-11-19導入の **ビキニパイ2** を登録。
- 直前HANDOFFの同日候補 **ビガースペシャル（エマ） → キュロゴス2（山佐）** はまだ未処理。
- よって11/19群は **OPEN** のまま維持。
- 次リレーは **ビガースペシャル** を最優先でrepo重複確認し、導入日を再確認後、性能コア＋resetBehavior v0.7を調査する。
- その後 **キュロゴス2** を処理し、11/19同日残存監査を行ってから群を閉じる。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 701 / chronologicalFrontier 2012-11-19 / 11-19群OPEN** から開始。
2. **ビガースペシャル（エマ）** を最優先でrepo重複確認→導入日再確認→性能コア＋resetBehavior v0.7本調査→未登録なら702件目として登録。
3. 次に **キュロゴス2（山佐）** を同様に処理。
4. 11/19同日残存機をHAZUSE日付・メーカー/業界資料等で監査し、漏れがなければ11/19群をCLOSEDにする。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### ビキニパイ2
- HAZUSE: `https://hazuse.com/machine/pachislot/SX0045/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/SX0045/genre/201/`
- HAZUSE 演出/ゲーム性: `https://hazuse.com/machine/pachislot/SX0045/genre/202/`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/154/h.php`
- パチマガスロマガ 単独ボーナス: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/154/k.php`
- パチビー: `https://www.pachibee.jp/machines/about/212100005`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6892`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5486/greenbelt`
- 天井ハイエナ生活（2012-11-17）: `https://macerate.seesaa.net/article/302223260.html`
- 2-9伝説まとめ: `https://29den.com/binikipai2/`

### 次候補
- HAZUSE ビガースペシャル: `https://hazuse.com/machine/pachislot/2S0863/`
- HAZUSE キュロゴス2: `https://hazuse.com/machine/pachislot/2S0984/`
