# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **692**
- latestMachineAdded: **キュインぱちすろ南国育ち 1st vacation**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2012-10-15_nangoku-sodachi-1st-vacation.md`
- chronologicalFrontier: **2012-10-15**
- frontierLatestExactDateMachine: **キュインぱちすろ南国育ち 1st vacation**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-10-15_WORKING_GROUP__NEXT_BOUNDARY_2012-10-16_TO_10-21**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-10-09_garei-zero.md` を確認。
- `INDEX.md` は19件地点の古い集約状態で、READMEの規定どおり、INDEXより新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount 691 / chronologicalFrontier 2012-10-09 / 10-09群CLOSED。
- 前handoffは「南国育ち」を10/22候補としていたが、K-Naviに **2012-10-15ホール導入開始**の具体日が存在することを再発見。時系列漏れ防止のため10/22へ飛ばさず、導入日CONFLICTを保持して692件目として追加。

## 今回追加 — キュインぱちすろ南国育ち 1st vacation

### 識別

- manufacturer: **オリンピア**
- releaseDate key: **2012-10-15**（DATE_CONFLICT保持）
- generation: **5号機**
- systemType: **ART / 疑似ボーナス / ゲーム数管理 / CZ / 天井あり**
- modelName: **キュインぱちすろ南国育ちY**
- approvalNumber: **2S0776**

### 導入日CONFLICT

- K-Navi: **2012-10-15 ホール導入開始**
- グリーンべると2012-08-30当時記事: **2012-10-21から納品開始予定**
- HAZUSE: **2012-10-22 導入開始**
- パチビー: **2012-10-22 導入日**
- ALL7.jp: **2012-10-22 導入予定**
- 10/15単独値と、10/21納品予定→10/22導入の複数系列が競合。平均せず全根拠を保存。本線は漏れ防止優先で確認できる最早具体日10/15をキーにした。

### 性能コア

- 機械割: **96.5 / 98.2 / 100.6 / 105.7 / 110.9 / 119.2%**
- ART初当り: **1/279.2 / 267.2 / 250.3 / 221.9 / 190.5 / 149.8**
- 資料掲載「合成確率」: **1/236.8 / 234.7 / 232.1 / 221.0 / 210.0 / 200.6**（Aタイプのボーナス合算とは定義を同一視しない）
- 50枚ベース: **約30G/50枚（1000円）**。二次資料複数で確認、一次公表値未確認。
- ART「南国RUSH」: **1セット50G+α / 約+2.0枚/G**。
- 疑似BIG: **50G / 約100枚**、疑似REG: **20G / 約40枚**。
- 通常A/B最大天井 **1280G**、天国/超天国最大 **128G**。
- CZ「飛翔チャレンジ」: **8G / ART期待度約30%**。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_CLEAR_GAME_COUNTER_RELOT_MODE_RELOT_STATE**
- `gameCounterReset`: **設定変更でCLEAR / 電源OFF→ONのみはRETAIN**
- `modeAfterReset`: **設定変更で再抽選**
- `stateAfterReset`: **設定変更で再抽選**
- `powerCycleBehavior`: **CONFIRMED_CARRYOVER_WITH_DISPLAY_EXCEPTIONS**
  - ビーチ/プール滞在時は電断復帰で両ステージを1:1再振り分け。
  - ART中キャラがジョディならまどかへ変化。
  - **それ以外は全て引き継ぐ**と必勝本に直接記載。
- 設定変更時モード振り分け:
  - 設定1: 通常A75.00 / 通常B20.00 / 天国5.00%
  - 設定2: 72.16 / 22.50 / 5.34%
  - 設定3: 69.35 / 25.00 / 5.65%
  - 設定4: 66.39 / 27.50 / 6.10%
  - 設定5: 63.28 / 30.00 / 6.71%
  - 設定6: 59.16 / 33.33 / 7.50%
- 設定変更時内部状態: **低確94.90 / 高確5.00 / 超高確0.10%**。
- 朝一高確以上: **5.10%**。
- 設定変更時の天国選択で最大128Gとなる可能性: 設定1 **5.00%** ～設定6 **7.50%**。
- `resetDetection`: 設定変更はビーチ/プール1:1開始。電断のみでは他ステージ等は引継ぐため、前日非基本ステージを把握して朝一も保持している場合は設定変更否定材料になり得る。ビーチ/プール開始だけでは変更/電断を判別不能。ガックンはUNVERIFIED_AFTER_RESEARCH。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

## 10-10〜10-15境界監査

- 10/10～10/14はK-Navi/HAZUSE/ALL7/旧DB/業界記事を検索し、今回この範囲の具体日付き未登録5号機を確定できず。
- 10/15は「南国育ち 1st vacation」のK-Navi具体日を検出して今回登録。
- 10/15同日について他の具体日付き未登録パチスロを複数検索したが、今回確定できず。10/15作業群は暫定CLOSEDとし、次回は10/16～10/21を先に監査する。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 692 / chronologicalFrontier 2012-10-15 / 10-15群暫定CLOSED** から開始。
2. **2012-10-16〜10-21境界監査**を行い、K-Navi/HAZUSE/パチビー/ALL7/メーカー・業界発表/旧DBで具体日付き未登録5号機がないか確認。
3. より古い候補がなければ **2012-10-22群**へ進む。
4. ALL7.jpの10/22パチスロ候補として少なくとも以下を確認済み。repo重複と別ソース具体日を1機種ずつ確認して順番に処理する:
   - **2027 Revise**（スター）
   - **KOF3**（SNKプレイモア）
   - **ドカベン**（タイヨーエレック）
   - **パチスロ一騎当千XX**（バルテック）
   - **キュインぱちすろ南国育ち 1st vacation**は今回692件目として登録済みなので重複追加しない。
5. 10/22同日群は上記だけと決め打ちせず、ALL7のページング・K-Navi・HAZUSE・パチビー等で残存候補を再監査してから閉じる。
6. 欠損は表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### キュインぱちすろ南国育ち 1st vacation
- K-Navi機種トップ: `https://p-kn.com/slot/1707/`
- K-Navi設定変更時モード移行率: `https://p-kn.com/slot/1707/40876/`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2092/1/36622`
- パチ＆スロ必勝本 状態移行率: `https://p.hisshobon.jp/machine/2092/1/36998`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0776/`
- パチビー: `https://www.pachibee.jp/machines/index/212090004`
- グリーンべると: `https://web-greenbelt.jp/00001571/`
- ALL7.jp 2012年10月: `https://www.all7.jp/plans/index/2012/10`
- CrankySeven: `https://crankyseven.com/nangokusodati1st-pc.htm`
- 当時系スペック紹介: `https://ameblo.jp/slostar/entry-11333929403.html`
