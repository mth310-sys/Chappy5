更新日: 2026-09-10

## 現在地点
- recordCount: **1232**
- latestRecordAdded: **パチスロ 闇芝居**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-18_yamishibai.md`
- chronologicalFrontier: **2018-09-18**
- frontierLatestMachine: **パチスロ 闇芝居 — No.1232**
- schema: **resetBehavior v0.7**
- status: **2018-09-18_GROUP_OPEN_5_OF_AT_LEAST_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1231を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、`LATEST_HANDOFF.md` + main実レコードを正本としてNo.1231の次から継続。
- main指定の次未処理 `パチスロ 闇芝居` をNo.1232として登録。
- 2018-09-18導入は、すろぱちくえすと・ちょんぼりすた・K-Naviで一致。
- メーカーNET、5.9号機ノーマル/Aタイプ/技術介入。設定1/2/5/6。
- 機械割97.0/99.0/103.1/107.0%、BIG合算1/228/1/228/1/228/1/212、REG1/280/1/265/1/228/1/212、ボーナス合算1/125/1/122/1/114/1/106。
- ベース27.6/28.3/29.5/29.5G/50枚。BIG最大311枚、REG最大103枚。通常ゲーム数天井は非搭載。
- 中古実機系資料で型式 `闇芝居/ND` を確認したが、公的検定番号との対照を固定できないため検定番号は `UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorは、当時解析に「朝一の恩恵などは無し」の直接記述あり。一方、設定変更/据え置き/純電断の内部処理・ガックン等は本機固有直接資料を固定できず、一般論で補完せず独立してUNVERIFIED管理。
- 遡及QAは `2006-09_burichika-30.md`（ブリチカ-30）を再探索。既存 `coreStatus: PARTIAL` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- ブリチカ-30は公式・HAZUSE・当時業界資料でREG後32G RT「ブリチカチャンス」を再確認したが、設定変更/据え置き/純電断時のRT残G・内部状態処理は機種固有契約を固定できなかった。據え置きと純電断を同義扱いしない。
- Git追加履歴を確認し、ブリチカ-30の次の遡及QA対象は `2006-09_takenaka-naoto-taikoki.md`（竹中直人のパチスロ太閤記）。

## No.1232 — パチスロ 闇芝居
- manufacturer: **ネット**
- releaseDateCanonical: **2018-09-18**
- formalModelName: **闇芝居/ND（SECONDARY確認）**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5.9号機 / ノーマル / Aタイプ / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.0 / 99.0 / 103.1 / 107.0%**
- BIG: **1/228 / 1/228 / 1/228 / 1/212**
- REG: **1/280 / 1/265 / 1/228 / 1/212**
- bonusTotal: **1/125 / 1/122 / 1/114 / 1/106**
- baseGamesPer50: **27.6 / 28.3 / 29.5 / 29.5G**
- netIncrease: **NOT_APPLICABLE_NORMAL_TYPE**
- basicPayout: **BIG最大311枚 / REG最大103枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。朝一恩恵なしの資料はあるが、そこから内部処理全体を推定しない。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- gameCounterReset: **NOT_APPLICABLE_NO_CEILING_COUNTER**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常/闇芝居/仮面モードはプレイヤー選択式の告知演出モードで、内部モードとして扱わない。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSection: **NONE_CONFIRMED_AFTER_RESEARCH_FOR_NORMAL_TYPE**。一般的な5.9号機規則から本機固有契約へ昇格しない。
- resetBenefits: **当時解析で朝一恩恵なし**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-09-18群監査
### 登録済み
- No.1228 パチスロ ベン・トー ～狼たちの夜～
- No.1229 パチスロ南国育ち～蝶々ver～30Φ
- No.1230 パチスロ南国育ち～蝶々ver～25Φ
- No.1231 パチスロ ロックマン アビリティ 史上最大の試練
- No.1232 パチスロ 闇芝居

### 未処理・同日候補
- **アレックス** — アクロス。2018-09-18確認済み。次に性能コア＋resetBehavior v0.7を収集。

### 群判定
- `2018-09-18_GROUP_OPEN_5_OF_AT_LEAST_6_PROCESSED`
- アレックス処理後も、全メーカー/別スペック/PB/地域差を再監査してからのみCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_burichika-30.md**（ブリチカ-30）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-09_takenaka-naoto-taikoki.md`（竹中直人のパチスロ太閤記）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- ブリチカ-30の性能側 `coreStatus: PARTIAL` は維持。resetBehavior欠損のみ独立QAした。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。一般論を本機固有契約へ昇格しない。
- 同一シリーズでも別型式/別検定番号は単独資料照合なしに性能・resetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 既存COMPLETE_CORE/PARTIALの性能側判定とresetBehavior QA状態は分離する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1232を再取得。
2. **1232件 / chronologicalFrontier 2018-09-18 / `2018-09-18_GROUP_OPEN_5_OF_AT_LEAST_6_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理は **`アレックス`**。性能コア＋resetBehavior v0.7を収集。
4. アレックス処理後、2018-09-18群の全メーカー/別スペック/PB/地域差を最終監査し、漏れがなければCLOSED判定して次導入群へ進む。
5. 遡及QAは `docs/real_machine_db/machines/2006-09_takenaka-naoto-taikoki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1232 パチスロ 闇芝居
- すろぱちくえすと: https://www.slopachi-quest.com/article/yamishibai/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/63462/
- K-Navi: https://p-kn.com/slot/3048/
- P-WORLD: https://www.p-world.co.jp/machine/database/8692
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/175/c.php
- 5号機クロニクル NET: https://5goki.com/net
- 中一商事（型式補助）: https://www.nakaiti.com/html/Net032.html

### ブリチカ-30 resetBehavior再QA
- パイオニア公式: https://www.slot-pioneer.co.jp/product/burichika/bc1.html
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/68/h.php
- HAZUSE: https://hazuse.com/i/data/burichika/top.htm
- Pマンズ / プレイグラフ当時記事: https://p-mans.blogspot.com/2006/08/
