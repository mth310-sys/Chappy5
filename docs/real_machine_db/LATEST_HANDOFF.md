# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **912**
- latestRecordAdded: **キングジャック**（アクロス / ACROSS）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-09-14_king-jack.md`
- chronologicalFrontier: **2015-09-14**
- frontierLatestMachine: **キングジャック**
- frontierRecord: `docs/real_machine_db/machines/2015-09-14_king-jack.md`
- schema: **resetBehavior v0.7**
- status: **2015-09-14_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.911 `2015-09-07_saint-seiya-megami-seisen.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **911件 / 2015-09-07 / 09-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2015-09-08～09-13境界**を日付別に「パチスロ / 導入 / 新台」等で監査。業界記事・発表会等は確認したが、全国実ホール導入日をこの境界内の具体日として固定できる未登録5号機を今回追加発見できず、`2015-09-08_TO_09-13_CLOSED_FOR_CURRENT_RESEARCH` とした。
- 次の強い既知候補だった2015-09-14 アクロス「キングジャック」をNo.912として追加。
- 09-14群にはパイオニア **「ハナハナホウオウ-30」** が同日導入として複数資料で確認できるため、群は **OPEN** のまま。

## No.912 — キングジャック

- record: `docs/real_machine_db/machines/2015-09-14_king-jack.md`
- manufacturer: **アクロス / ACROSS**
- formalModelName: **キングジャックGK**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- systemType: **5号機 ノーマル / Aタイプ**
- canonical releaseDate: **2015-09-14**
- ユニバーサル公式で2015年9月発売、当時解析・年次新台一覧で09-14導入を照合。
- 1999年岡崎産業「キングジャック」と混同しない。2015年機は岡崎産業×アクロスのコラボ第2弾。

### performanceCore

- 機械割（パチマガスロマガ独自調査シミュレート）: **97.03 / 98.18 / 100.20 / 102.61 / 106.01 / 108.78%**。
- BIG: **1/287.4 / 1/282.5 / 1/273.1 / 1/260.1 / 1/248.2 / 1/240.9**。
- REG: **1/496.5 / 1/468.1 / 1/431.2 / 1/409.6 / 1/372.4 / 1/356.2**。
- 合算: **1/182.0 / 1/176.2 / 1/167.2 / 1/159.1 / 1/148.9 / 1/143.7**。P-WORLDでも合算一致。
- 50枚ベース: **約35G**。
- BIG: **312枚**、REG: **130枚**。
- AT/ART/CZ: **非搭載**。
- ゲーム数天井: **非搭載**。

### resetBehavior v0.7

- 設定変更: ゲーム数天井・AT/ART/CZモード非搭載のため、天井短縮/モード再抽選は **NOT_APPLICABLE**。
- 据え置き: 天井進捗の据え置き契約は **NOT_APPLICABLE_NO_GAME_CEILING**。
- 純電源OFF→ON: 本機固有に保持/初期化される朝一要素を直接比較した公開資料は、表記揺れ・型式・メーカーと検索語を変えた再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_CEILING**。
- ceilingAfterReset: **NONE / NOT_APPLICABLE**。
- modeAfterReset: **NOT_APPLICABLE**。
- stateAfterReset: 朝一客行動へ影響する設定変更専用内部状態は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 短縮天井・保証CZ・高確スタート等 **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。
- resetPenalties: 前日天井進捗消失等 **NOT_APPLICABLE**。
- resetDetection: 本機固有の確定的ガックン・初期出目・ランプ等は信頼できる直接資料を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。他アクロス機の挙動を流用しない。
- numericResetData: 公開朝一当選率・設定変更恩恵発生率 **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / quality notes

- 性能コアに平均化すべき数値CONFLICTは今回確認なし。後年資料の97.0 / 98.2 / 100.2 / 102.6 / 106.0 / 108.8%は精密値の丸め系列として扱う。
- 5号機クロニクルの検索スニペットにはメーカー/ゲーム性/獲得枚数の明確な誤記混入が見られたため、その説明部分はcanonical根拠から除外。機械割の丸め照合用途に限定する。
- 検定番号は「キングジャックGK / キングジャックＧＫ / アクロス / 検定番号 / 公安委員会 / 第5S」等で再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2015-09-08～09-13境界 — CLOSED_FOR_CURRENT_RESEARCH

- 日付別に監査し、全国実ホール導入日を09-08～09-13の具体日として固定できる未登録5号機を今回追加発見できず。
- 発表日・記事投稿日・プレス発表会日を実ホール導入日へ誤変換しない。

## 2015-09-14群 — OPEN

処理済み:
1. **キングジャック** — アクロス — No.912。

強い未処理候補:
1. **ハナハナホウオウ-30** — パイオニア。
   - K-Navi: ホール導入開始 **2015-09-14**。
   - 当時解析/年次新台一覧でも09-14一致。
   - 次回は正式型式・検定、設定別BB/RB/合算/機械割、約36.5G/50枚、BIG/REG獲得、resetBehavior v0.7を30Φ本機固有資料で調査する。

- 09-14群は候補だけで閉じず、ハナハナホウオウ-30処理後に全メーカー横断で再監査する。

## 次回再開地点

1. **recordCount 912 / chronologicalFrontier 2015-09-14 / 09-14_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.912を再確認。
3. 次の未処理機種 **2015-09-14 パイオニア「ハナハナホウオウ-30」** を処理。
4. 同日群を全メーカー横断で再監査し、他の具体日付き未登録5号機があれば順に処理。追加なしを確認してから09-14群をCLOSEDにする。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ無条件転記しない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.912 キングジャック
- ユニバーサルエンターテインメント公式: https://www.universal-777.com/product/slot/king_jack/
- ユニバーサル2015年製品一覧: https://www.universal-777.com/product/slot/2015/
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/08/h-2.php
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/08/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7824
- ちょんぼりすた: https://chonborista.com/slot/acros-slot/11784/
- 中古実機 中一商事: https://item.rakuten.co.jp/auc-nakaiti/kigu/
- 2015年導入スロット新台一覧: https://slotnews777.blog.fc2.com/blog-entry-2348.html

### 次回候補 ハナハナホウオウ-30
- K-Navi: https://p-kn.com/slot/2333/
- イチカツ: https://ichikatsu.com/hanahanahouoh/
- 2015年導入スロット新台一覧: https://slotnews777.blog.fc2.com/blog-entry-2348.html

## confidence

- identity/manufacturer/month: OFFICIAL
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: MULTI_SOURCE_SECONDARY
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: ANALYSIS_HIGH_WITH_MULTI_SOURCE_CROSSCHECK
- baseGamesPer50: ANALYSIS_SINGLE
- resetBehaviorApplicability: HIGH_BY_SYSTEM_TYPE_AND_NO_CEILING
- resetSpecificBehavior: NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH_FOR_POWER_CYCLE
- resetDetectionGakkun: NONE_CONFIRMED_AFTER_RESEARCH
