# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **766**
- latestMachineAddedByChronology: **リバティベルV**（アクロス）
- latestRecord: `docs/real_machine_db/machines/2013-09-17_liberty-bell-v.md`
- chronologicalFrontier: **2013-09-17**
- frontierLatestExactDateMachine: **リバティベルV**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-09-17_GROUP__NEXT_2027_3**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前進捗を再読してから継続。
- INDEXは旧集約状態（19件表記）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 作業開始時、過去チャット上の762件地点よりmainが先行しており、正本は **recordCount 765 / chronologicalFrontier 2013-09-17 / 09-17群OPEN** だったため、古い地点へ戻らず最新handoffを優先。
- handoff先頭候補 **リバティベルV（アクロス）** は同名レコード不在を確認し、766件目として新規登録。
- 09-17同日群を再監査したところ、ALL7の2013年9月一覧と天井DBで **2027 3（スター）** が2013-09-17導入候補として新たに確認できたため、群はCLOSEDにせずOPEN維持。
- パチンコ同日候補（ぱちんこ必殺仕事人 お祭りわっしょい、わんわんパラダイスIN沖縄、百花繚乱サムライガールズ、銀河鉄道物語等）は本DBのパチスロ本線から除外。

## 今回追加 — リバティベルV

### identity / 性能コア

- manufacturer: **アクロス**。
- releaseDate: **2013-09-17**。K-Naviでホール導入開始、グリーンべるとでは2013-09-16納品開始予定。
- 型式: **リバティベルファイブT**。
- generation/system: **5号機 / ART / 擬似ボーナス / ゲーム数上乗せ**。
- 機械割: **97.6 / 99.5 / 102.2 / 106.1 / 110.3 / 115.3%**。
- 擬似ボーナス合算: **1/152.8 / 145.7 / 132.1 / 117.7 / 103.0 / 87.9**。
- BIG: **1/299.0 / 285.3 / 255.5 / 229.5 / 204.3 / 178.1**。
- REG: **1/328.1 / 312.0 / 285.7 / 251.0 / 214.6 / 178.3**。
- EXTRA BONUS: **全設定共通1/6553.6**（後年解析）。
- baseGamesPer50: **約31G/1000円**。当時別系統で直接照合できず `ANALYSIS_SINGLE_RETROSPECTIVE`。
- 擬似ボーナスART: **純増約2.0枚/G**。
- EXTRA: **250G / 約500枚**、BIG: **100G / 約200枚**、REG: **50G / 約100枚**。
- 天井: **擬似ボーナス間900G → 擬似ボーナス当選**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- 設定変更時: **900G天井までのゲーム数をクリア**。
- K-Naviには本機専用 **「モード移行率(設定変更後)」**、パチマガスロマガには **「朝イチ・設定変更」** 項目が存在することを確認。
- ただし今回の現存検索取得系では設定変更後モードの具体率表を安全に回収できず、`UNVERIFIED_FOR_EXACT_TABLE_AFTER_RESEARCH`。通常時/ボーナス後のモード移行率を朝一へ転記しない。
- 純据え置き時の天井G/モード/CZ状態: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの電源OFF→ON時の天井G/モード/CZ状態/表示: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- resetPenalty: 設定変更で前日900G天井進捗が消えるため、宵越し天井狙いには不利。
- 本機固有ガックン/初期出目/ランプ等の変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: 設定変更時の具体的モード振り分け率は未回収。900G天井進捗CLEARのみ直接固定。

### conflicts / safeguards

- 5号機クロニクルには本機を「Aタイプ」「BIG約311枚/REG約104枚」とする整理があるが、2013年当時のグリーンべると、K-Navi、P-WORLD、パチマガスロマガは **ARTによる擬似ボーナス（250/100/50G、純増約2.0枚/G）** で一致。平均せず、当時複数資料を本線に採用。
- pachislo-dataの同一ページ内に「純増1.5枚/G」と「純増2.0枚/G」が混在するため、孤立1.5枚値は `CONFLICT_ISOLATED_RETROSPECTIVE_1_5_VS_CONTEMPORARY_2_0` として保持し、本線は2.0枚/G。
- 旧号機の「リバティベル」「リバティベルIII」等を混入させない。

## 境界監査

### 2013-09-17同日群

登録済み:
- **パチスロ ボンバーパワフルII（SANKYO）** — #764。
- **デビル メイ クライ 4（エンターライズ）** — #765。
- **リバティベルV（アクロス）** — #766、今回追加。

未処理候補:
- **2027 3（スター）** — ALL7で2013-09-17導入予定、別天井DBでも2013-09-17導入として確認。次回最優先。

- その他09-17候補は次回、メーカー横断・当時導入カレンダー・業界記事で再監査。
- **2013-09-17群: OPEN**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線766件目を優先し、QAカーソルは前進させていない。
- 既存性能コアを無駄に再調査していない。

## 次回再開地点

1. **recordCount 766 / chronologicalFrontier 2013-09-17 / 09-17群OPEN** から開始。
2. まず **2013-09-17「2027 3」（スター）** の重複確認 → 性能コア + resetBehavior v0.7を収集し、767件目候補として処理。
3. その後09-17同日群をメーカー横断で再監査し、未登録がなければCLOSED判定。
4. 次日群へ進む前に導入日・納品日・検定日・記事公開日を分離して保持。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から再開。

## 主要出典 — 取得日 2026-09-06

### リバティベルV

- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5986/greenbelt` — 2013-09-16納品予定、ライトART、100/50/250G、純増2.0枚/G。
- K-Navi: `https://p-kn.com/slot/1909/` — 導入2013-09-17、設定別合算/機械割、ART基本性能、設定変更後モード解析項目。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7158` — 5号機ART、純増2.0枚/G、EXTRA/BIG/REG基本G数、モード概要。
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/02/a.php` — ART基本性能、純増、基本獲得。
- パチマガスロマガ インデックス: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/02/across_slot_02.php` — モード移行率、天井・ヤメ時、朝イチ・設定変更項目の存在。
- pachislo-data: `https://pachislo-data.com/across/libertybellv` — 31G/1000円、900G天井、設定変更で天井Gクリア。純増記述内競合あり。
- pacnk: `https://pacnk.com/slot/tools/sh_libertybellv.html` — BIG/REG設定別、EXTRA 1/6553.6、900G天井、設定変更時天井リセット。
- 中一商事: `https://www.nakaiti.com/html/sAcross085.html` — 型式リバティベルファイブT、機械割/合算、ART基本性能。
- 5号機クロニクル: `https://5goki.com/universal` — 機械割/導入月照合。ゲーム性記述は当時資料と競合。

### 09-17群監査 / 次候補

- ALL7 2013年9月一覧: `https://www.all7.jp/plans/index/2013/09` — 2027 3、DMC4、ボンバーパワフル2、リバティベル5を2013-09-17導入予定として掲載。
- 天井一覧: `https://smaslo.man-soft.com/slot-tenzyou-itiran/` — `2027 3 Evolve[スター] 導入:2013/09/17`、天井ART後600/900/1200G。

## commits

- 766th record add: `8aa7f2181d45b6081857e58e7d7271fb25781d23` (`db: add Liberty Bell V with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay to Liberty Bell V`)
