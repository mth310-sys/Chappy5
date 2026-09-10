更新日: 2026-09-10

## 現在地点
- recordCount: **1247**
- latestRecordAdded: **スーパーリノXX**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-12-03_super-rino-xx.md`
- chronologicalFrontier: **2018-12-03**
- frontierLatestMachine: **スーパーリノXX — No.1247**
- schema: **resetBehavior v0.7**
- status: **2018-12-03_GROUP_OPEN_2_OF_AT_LEAST_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1246を取得して開始。
- 開始時正本は1246件 / 2018-12-03群OPEN。
- handoff指定の次機種 `スーパーリノXX` をNo.1247として登録。
- 12/3群は `マッハGoGoGo / スーパーリノXX / ドリームクルーン711 / 巨人の星 情熱編` の少なくとも4機。現在2/4処理済み。
- INDEXは旧スナップショットのため、README指示どおりLATEST_HANDOFF + main実レコードを正本として継続。

## No.1247 — スーパーリノXX
- manufacturer: **山佐**
- releaseDateCanonical: **2018-12-03**
- formalModelName: **SスーパーリノXZZ**（SECONDARY_MACHINE_DATABASE）
- certificationNumber: **8S0711**（SECONDARY_MACHINE_DATABASE、公的公示直接照合は未完）
- generation/system: **6号機 / リノシステム / リアルボーナス連チャンタイプ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 99.0〜99.1 / 101.5 / 103.0 / 106.2 / 108.2%**
- bonusInitialHit: **1/468.9 / 1/453.1 / 1/436.0 / 1/409.5 / 1/382.5 / 1/355.7**
- tomatoChance: **1/130.0 / 1/125.6 / 1/120.7 / 1/113.2 / 1/105.5 / 1/98.0**
- baseGamesPer50: **約38G**
- BIG: **約105枚**
- bonusHighProbability: **約1/9.9 / 平均約57G / ループ期待度約85%**
- ceiling: **NONE**
- advantageousSection: **NOT_USED**（当時業界記事がリアルボーナスのみで有利区間なしと明示）

### resetBehavior v0.7
- settingChange: **CONFLICT_OR_UNVERIFIED_AFTER_RESEARCH**。一撃2018-11-28およびちょんぼりすた本機専用朝一表では内部状態が「調査中」。後年整理資料のreset記述だけで確定へ昇格しない。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。据え置きを純電断と独立条件で定義した直接資料を固定できず。
- powerOFF→ON: **CONFLICT_OR_UNVERIFIED_AFTER_RESEARCH**。当時一撃では状態「現在調査中」。後年引継ぎ記述は当時未確定資料と競合するため断定しない。
- gameCounterReset: 通常G数天井非搭載のため **N/A**。
- mode/stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **N/A / NOT_USED**。
- resetBenefits: 朝一1回目のボーナスでは設定2以上確定の疑似クレオフ音が通常より発生しやすく、設定3以上では **約1/8** とする解析値あり。ただし設定変更確定恩恵ではなく朝一公開判別数値として保持。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 疑似クレオフ音は設定推測用。設定変更/据え置きの直接二分判別とはしない。ガックン等はUNVERIFIED。

### quality notes
- 設定2機械割99.0%と99.09%は丸め整合のためCONFLICTではない。
- reset内部状態は後年整理記述で埋めず、当時解析の「調査中」を尊重してCONFLICT/UNVERIFIED管理。
- 型式/検定番号は後年機種DB値を収録したが、公的公示との直接照合が未完なので信頼度を上げすぎない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- handoff指定の `2006-11_jack-to-mamenoki.md` を再取得し、既にv0.7 resetBehavior QA済みであることを確認。
- Git追加順の次 `2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md` も既に `PARTIAL_RESET_QA` + v0.7 resetBehavior収録済み。
- さらに次 `2006-11_kaidouou.md` も既に `PARTIAL_CORE_RESET_QA_PARTIAL` + v0.7 resetBehavior収録済み。
- 重複編集せずカーソルのみ前進。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-11_kaidouou.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-11_thunder-v-special.md`（サンダーVスペシャル）**。
- Git追加順根拠: Jack追加commit `7ef3ed76...` → 小野真弓 `af69b17d...` → 怪胴王 `2b9f20f6...` → サンダーVスペシャル `72c7376b...`。

## 2018-12-03群
### 登録済み
- No.1246 パチスロ マッハGoGoGo
- No.1247 スーパーリノXX

### 未処理既知候補
1. **ドリームクルーン711 / ドリームクルーンR711/CX**（オーイズミ）— No.1248候補
2. **巨人の星 情熱編 / 巨人の星情熱編/S3**（サンセイR&D）

### 判定
- **2018-12-03_GROUP_OPEN_2_OF_AT_LEAST_4_PROCESSED**。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED化する。

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
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1247を再取得。
2. **1247件 / chronologicalFrontier 2018-12-03 / `2018-12-03_GROUP_OPEN_2_OF_AT_LEAST_4_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理機種 **ドリームクルーン711** をNo.1248候補として調査・登録。
4. 続いて **巨人の星 情熱編** を処理し、12/3群を全メーカー/別型式/別スペック/PB/地域差まで再監査してCLOSED判定。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_thunder-v-special.md`（サンダーVスペシャル）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1247 スーパーリノXX
- パチスロ必勝本: https://p.hisshobon.jp/vpage/2214/6
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/68225/
- 一撃: https://1geki.jp/slot/s_srxx/3/
- グリーンべると: https://web-greenbelt.jp/00010850/
- みんスロ: https://minslo.com/スーパーリノxx/
- pachinavi: https://pachinavi.net/machines/super-reno-xx/
- 元プロMG: https://www.pachislotblog.tokyo/superreno-xx-kaiseki/
