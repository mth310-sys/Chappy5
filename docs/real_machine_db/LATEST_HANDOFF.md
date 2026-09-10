更新日: 2026-09-10

## 現在地点
- recordCount: **1248**
- latestRecordAdded: **ドリームクルーン711**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-12-03_dream-croon-711.md`
- chronologicalFrontier: **2018-12-03**
- frontierLatestMachine: **ドリームクルーン711 — No.1248**
- schema: **resetBehavior v0.7**
- status: **2018-12-03_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1247を取得して開始。
- 並行更新を検出し、開始時正本を1247件 / 2018-12-03群OPENへ同期。
- INDEXは旧スナップショット（19件）のため、README指示どおりLATEST_HANDOFF + main実レコードを正本として継続。
- handoff指定の次機種 `ドリームクルーン711` をNo.1248として登録。
- 12/3群は `マッハGoGoGo / スーパーリノXX / ドリームクルーン711 / 巨人の星 情熱編` の少なくとも4機。現在3/4処理済み。

## No.1248 — ドリームクルーン711
- manufacturer: **オーイズミ**
- releaseDateCanonical: **2018-12-03**
- formalModelName: **ドリームクルーンR/CX**
- certificationNumber: **7S1504**
- generation/system: **5.9号機 / A+ART / 差枚数管理ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.5 / 100.1 / 103.5 / 105.4 / 108.0%**
- initialHit: **大当たり全設定1/744.7**
- croonOccurrence: **1/122.9 / 1/136.7 / 1/123.8 / 1/162.1 / 1/129.0 / 1/143.8**
- baseGamesPer50: **36.80 / 37.42 / 38.84 / 40.63 / 43.24 / 44.60G**
- ART純増: **約2.0枚/G（ボーナス込み）**
- basicPayout: **初当たり711枚以上保証 / 1R約100枚 / 最低7R・最大15R**
- ceiling: **NONE**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。本機専用当時解析の「朝一リセット恩恵」は最終更新後も調査中。型式/メーカー/シリーズ名と設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・ガックン・有利区間を組み替えて再探索したが直接契約を固定できず。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。据え置きを純電断と独立定義した内部状態資料なし。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**。純電断時のART/内部状態/有利区間の直接契約を固定できず。
- gameCounterReset: 通常G数天井非搭載のため **N/A**。
- ceilingAfterReset: **N/A / NO_CEILING**。
- mode/stateAfterReset: **NONE_CONFIRMED / UNVERIFIED_INTERNAL_STATE**。朝一専用G数モードや短縮天井は確認なし。
- advantageousSectionReset: **UNVERIFIED_MACHINE_SPECIFIC_CONTRACT**。5.9号機A+ARTで非有利区間の存在は確認できるが、設定変更/純電断時処理を一般論で補完しない。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 後年資料に「ガックンなどしない限り判別不可？」との記述があるが、本機固有ガックン発生条件・発生率は未確認。大当たり後96Gのサーカスランプ等は設定示唆であって変更/据え置き判別とは分離。
- numericResetData: conventionalCeiling **NONE** / reset専用公開数値 **NONE_CONFIRMED** / gakkunProbability **UNVERIFIED**。

### quality notes
- 納品開始2018-12-02とホール導入2018-12-03は定義差のためCONFLICTではない。
- クルーン発生率の整数丸めと精密値は整合。
- 赤7/青7リアルボーナス部の約270枚/276枚は概算・実獲得表現差として保持し、711枚以上の総獲得性能と混同しない。
- 前作ドリームクルーン500のresetBehaviorを自動転記しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-11_kaidouou.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-11_thunder-v-special.md`（サンダーVスペシャル）**。
- 既存性能値をやり直さず、resetBehavior欠損のみ順次QAする。

## 2018-12-03群
### 登録済み
- No.1246 パチスロ マッハGoGoGo
- No.1247 スーパーリノXX
- No.1248 ドリームクルーン711

### 未処理既知候補
1. **巨人の星 情熱編 / 巨人の星情熱編/S3**（サンセイR&D）— No.1249候補

### 判定
- **2018-12-03_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED**。
- 次回、巨人の星 情熱編を処理したうえで、12/3同日全メーカー/別型式/別スペック/PB/地域差を再監査してからCLOSED判定する。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1248を再取得。
2. **1248件 / chronologicalFrontier 2018-12-03 / `2018-12-03_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理機種 **巨人の星 情熱編** をNo.1249候補として調査・登録。
4. その後12/3群の全メーカー/別型式/別スペック/PB/地域差監査を行い、漏れがなければCLOSED化して次の時系列境界へ進む。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_thunder-v-special.md`（サンダーVスペシャル）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1248 ドリームクルーン711
- HAZUSE: https://hazuse.com/machine/pachislot/7S1504/
- パチマガスロマガ（ボーナス確率）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/44/h.php
- パチマガスロマガ（50枚ベース）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/44/c.php
- パチマガスロマガ（ゲーム性）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/44/l.php
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/69208/
- すろぱちくえすと: https://www.slopachi-quest.com/article/dream-croon711/
- グリーンべると: https://web-greenbelt.jp/00010840/
- P-WORLD: https://www.p-world.co.jp/machine/database/8797
- 中一商事: https://www.nakaiti.com/html/sOizumi100.html
- モゲスロ: https://moge-site.com/archives/22486
