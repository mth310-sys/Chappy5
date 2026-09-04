# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **618**
- latestMachineAdded: **浮浪雲**（北電子）
- latestRecord: `docs/real_machine_db/machines/2011-11-14_haguregumo.md`
- chronologicalFrontier: **2011-11-14**
- frontierLatestExactDateMachine: **浮浪雲**
- schema: **resetBehavior v0.7**
- status: **READY_TO_FINAL_AUDIT_2011-11-14_SAME_DAY_GROUP**

## 今回の本線追加 — 浮浪雲

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「キャッツ・アイ-恋ふたたび」を再取得して開始。
- 開始時正本は **recordCount 617 / chronologicalFrontier 2011-11-07**。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- 2011-11-07同日群をK-Navi、HAZUSEカレンダー、メーカー/業界系検索で再監査。既登録3機以外の未登録5号機を確定できず同日群を閉鎖。
- HAZUSEカレンダーの次日付2011-11-11は日付枠を確認したが、今回の探索では対象となるパチスロを確定できず。確認できた「野生の王国」等はパチンコのため本DB対象外。
- 次の具体的パチスロ導入日としてK-Naviで **浮浪雲 2011-11-14** を確認。
- repo code searchで「浮浪雲」未検出、想定パス `docs/real_machine_db/machines/2011-11-14_haguregumo.md` も404だったため未登録と判断。
- 北電子公式、K-Navi、P-WORLD、当時グリーンべると/P-WORLD業界記事を横断して性能コアを収集。

### 性能コア

- 5号機 / ボーナス+RT / CZ。
- 型式: **ハグレグモA5**、検定番号: **1S0089**。
- ホール導入: **2011-11-14**。当時業界記事の納品開始予定は **2011-11-13**。定義差として分離。
- 機械割: **96.3 / 97.7 / 99.6 / 101.3 / 105.2 / 110.1%**。
- BIG: **1/390.1 / 1/372.4 / 1/348.6 / 1/334.4 / 1/307.7 / 1/278.9**。
- REG: **1/407.1 / 1/392.4 / 1/376.6 / 1/352.3 / 1/332.7 / 1/304.8**。
- 合算: **1/199.2 / 1/191.1 / 1/181.0 / 1/171.6 / 1/159.8 / 1/145.6**。
- BIG約**300枚**、REG/BG約**100枚**。
- RT「縁日モード」: **約+0.5枚/G**。当時業界記事では平均約**30G**継続。
- RT or ボーナス成立合算は当時業界記事で全設定約**1/99**。
- 50枚ベースは検索語/資料系統を変えて再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **PARTIAL_CORE_BASE_UNVERIFIED**。

### resetBehavior v0.7

- 設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックンを、機種名表記揺れ・型式名・メーカー名と組み替えて探索。
- 本機固有の設定変更時RT/CZ状態処理、据え置き時保持、単純電源OFF→ON処理、ガックン等変更判別を直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 今回確認した公式/業界/解析資料ではゲーム数到達型天井を確認できず、天井ゲーム数カウンタは **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING** とした。ただしRT/CZ等一時状態の変更時処理は別途UNVERIFIED。
- 設定変更専用短縮天井、朝一高確、朝一特定G以内当選率などの公開恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH**。

### CONFLICT / 表記差

1. 北電子公式/P-WORLDは型式 **ハグレグモA5**。2011-09-20業界記事は冒頭でA5としつつ本文に「ハグレグモA7」表記があり、記事内不整合として保持。公式/P-WORLDのA5を主値採用。
2. 設定6出玉率は北電子公式/K-Navi/P-WORLD **110.1%**、当時業界記事 **110.0%**。公式値を主値、業界記事は丸め差として保持。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 618 / chronologicalFrontier 2011-11-14**から開始。
2. まず2011-11-14同日群をK-Navi、HAZUSE新台カレンダー、メーカー別一覧、当時業界記事で最終監査し、浮浪雲以外の未登録5号機がないか確認する。
3. 同日群に未登録が見つかれば、その最古候補を619件目として性能コア＋resetBehavior v0.7を処理。
4. 同日群を閉じた場合は、HAZUSEカレンダー上の次日付 **2011-11-18 → 2011-11-19 → 2011-11-21** の順で最古未処理を探索する。11/21群へ飛ばさない。
5. 参考後続アンカー: **巨人の星V～汗と涙と根性編～（2011-11-21）**、**赤ドン雅（2011-11-21）**。
6. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### 浮浪雲
- 北電子公式: `https://www.kitadenshi.co.jp/slot/haguregumo/`
- K-Navi: `https://p-kn.com/slot/1508/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6506`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4910/greenbelt`
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 次回順序確認
- **2011-11-14同日群の最終監査を先に実施し、その後11/18 → 11/19 → 11/21へ進む。**
