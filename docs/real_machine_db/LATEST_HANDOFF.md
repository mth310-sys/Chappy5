# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **854**
- latestRecordAdded: **パチスロひぐらしのなく頃に煌**（オーイズミ）— 2014-11-17
- latestRecord: `docs/real_machine_db/machines/2014-11-17_pachislot-higurashi-no-naku-koro-ni-kira.md`
- chronologicalFrontier: **2014-11-17**
- frontierLatestMachine: **パチスロひぐらしのなく頃に煌**
- schema: **resetBehavior v0.7**
- status: **2014-11-17_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.853 `2014-10-20_pachislot-cowboy-bebop.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **853件 / frontier 2014-10-20 / 10-20_GROUP_OPEN**。
- 2014-10-20同日群をK-Navi / ALL7 / パチ7当時導入一覧 / 当時新台記事系で再監査。
- 10/20群の未登録パチスロは今回追加確認できなかったため **2014-10-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 次の未処理具体日として **2014-11-17** を確認し、「パチスロひぐらしのなく頃に煌」をNo.854として登録した。

## 境界QA — パチスロ カウボーイビバップ

- 既存No.853 `2014-10-20_pachislot-cowboy-bebop.md` を更新。
- 導入日は **CONFLICT: 2014-10-20 vs 2014-10-27**。
  - K-Navi: 2014-10-20。
  - 2014-10-27公開の当時新台記事: 「本日10月27日導入予定」。
  - 2014-11-17公開のパチ7ホール集計: 10/27扱い。
- 時系列キーは最古の具体日2014-10-20を維持するが、全国導入日を一意化せず `CONFLICT_RELEASE_DATE_2014_10_20_VS_2014_10_27` を保存。
- さらに当時10/27記事から **千円ベース約31G** を取得し、従来のbaseGamesPer50欠損を解消。
- AT設定3 `1/312.1 vs 1/321.2` と旧リセット誤報のRETRACTED扱いは維持。

## No.854 — パチスロひぐらしのなく頃に煌

- record: `docs/real_machine_db/machines/2014-11-17_pachislot-higurashi-no-naku-koro-ni-kira.md`
- manufacturer: **オーイズミ**。
- releaseDate: **2014-11-17**。HAZUSE / パチビー一致。
- modelName: **パチスロひぐらしのなく頃に煌WX**。
- inspectionNumber: **4S0813**。

### 性能コア

- 機械割: **98.2 / 99.3 / 100.5 / 102.2 / 104.7 / 109.1%**。
- BIG: **1/253.4 / 1/245.8 / 1/228.9 / 1/223.8 / 1/214.0 / 1/216.6**。
- REG: **1/375.7 / 1/333.2 / 1/358.4 / 1/302.4 / 1/336.5 / 1/276.2**。
- 合算: **1/151.3 / 1/141.4 / 1/139.7 / 1/128.6 / 1/130.8 / 1/121.4**。
- 50枚ベース: **約33.04G（設定1）〜33.13G（設定6）**。今回直接比較値を固定できたのは解析整理資料1系統のため `ANALYSIS_SINGLE`。
- 擬似ボーナス純増: **約2.7枚/G**。
- オヤシロBIG / BIG: **平均約340枚**、REG: **平均約90枚**。
- 通常最大天井: **999G + 前兆**。天国/超天国系は **128G + 前兆**。
- 機械割の数値系列は一致するが、技術介入前提が「ビタ押し成功率75%」とする資料と「ビタ押しなし・補助機能利用」とする資料があり、`CONFLICT_OR_DEFINITION_DIFFERENCE_PAYOUT_TECHNIQUE_CONDITION` として条件差を保持。

### resetBehavior v0.7

- **設定変更時に低確/高確の内部状態を再抽選**することをHAZUSE / 旧パチマガスロマガで直接確認。
- 設定変更時の高確移行率:
  - 設定1 **50.0%**
  - 設定2 **55.0%**
  - 設定3 **52.5%**
  - 設定4 **60.0%**
  - 設定5 **55.0%**
  - 設定6 **66.6%**
- 高確はCZ抽選へ影響するため、朝一客AI用の主要reset benefitとして保存。
- ただしBIG終了後にも同一系列の高確移行抽選が存在するため、設定変更だけの専用状態ではない。
- 設定変更時の天井ゲーム数RESET/CARRY、ゲーム数解除モード、据え置き、純電源OFF→ON時のゲーム数/モード/状態については、表記揺れ・型式・メーカー名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン` を組み替えて複数資料系統を再探索したが、本機固有の直接契約を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井/短縮率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン/表示等の確定変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2014-11-17群 — OPEN

### 登録済み

- No.854 **パチスロひぐらしのなく頃に煌**（オーイズミ）— 2014-11-17。

### 次の強い未処理候補

- **トリプルクラウンZERO-ONE**（清龍ゲームジャパン）— **2014-11-17**。
  - HAZUSEで導入開始日2014-11-17、型式 `トリプルクラウンZERO1-30`、検定番号 `4S0620` を確認済み。
- 11/17同日群はまだ **CLOSEDにしない**。
- 次回はトリプルクラウンZERO-ONEを先に処理し、その後11/17同日群をメーカー横断で再監査する。

## 2014-10-20群 — CLOSED_FOR_CURRENT_RESEARCH

- 登録済み/関連:
  - No.851 **スーパービンゴNEO**（ベルコ）— 2014-10-20。
  - No.853 **パチスロ カウボーイビバップ**（オリンピア）— 10/20 vs 10/27 CONFLICT。
  - No.852 **パチスロ バーストエンジェル**（山佐）— 10/06 vs 10/20 CONFLICT、最古具体日の10/06へ遡及登録済み。10/20重複禁止。
- ALL7、パチ7当時一覧、K-Navi/当時新台資料を横断し、今回新規の10/20未登録パチスロは確認できずCLOSED_FOR_CURRENT_RESEARCH。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）。
- 新規本線を止めず、既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは「導入予定」「全国導入」「地域先行」「実ホール導入済み」を区別する。
- ALL7単独で同日群CLOSED判定しない。
- カウボーイビバップは導入日 **10/20 vs 10/27 CONFLICT**、AT設定3 **1/312.1 vs 1/321.2 CONFLICT**。平均禁止。
- カウボーイビバップの旧「400G以内81.25%」リセット解析は**誤報訂正済み**。canonical値として復活させない。
- ひぐらし煌の機械割は数値が一致していても技術介入条件の定義差を保持する。
- 一般的な5号機ATの設定変更/電断挙動を本機固有契約として推定転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 854 / chronologicalFrontier 2014-11-17 / 11-17_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.854を再確認。
3. 次の未処理候補 **2014-11-17「トリプルクラウンZERO-ONE」（清龍ゲームジャパン）** を処理。
4. その後11/17同日群を全メーカー横断で再監査し、未登録がなければCLOSED判定して次の具体日へ進む。
5. 遡及QAは `2007-03-19_kakumei-senshi-choshu-riki.md` から再開。

## 主要出典 — 取得日 2026-09-07

### ひぐらしのなく頃に煌
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0813/`
- パチビー: `https://www.pachibee.jp/machines/index/214100000`
- 旧パチマガスロマガ CZ抽選: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/33/cz0-3.php`
- K-Navi リプレイハズシ: `https://p-kn.com/slot/2166/52064/`
- ちょんぼりすた: `https://chonborista.com/slot/oizumi-slot/3810/`

### 11/17次候補
- HAZUSE トリプルクラウンZERO-ONE: `https://hazuse.com/machine/pachislot/4S0620/`

### 10/20境界 / カウボーイビバップ
- K-Navi: `https://p-kn.com/slot/2130/`
- ALL7 2014/10: `https://www.all7.jp/plans/index/2014/10`
- パチ7 2014年11月ホール集計: 10/20=バーストエンジェル/スーパービンゴネオ、10/27=カウボーイビバップ
- Slot-board RUSH 2014-10-27新台記事: カウボーイビバップを10/27導入予定、千円ベース約31Gとして掲載
