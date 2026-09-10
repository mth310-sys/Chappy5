更新日: 2026-09-10

## 現在地点
- recordCount: **1249**
- latestRecordAdded: **パチスロ巨人の星～情熱編～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-12-03_kyojin-no-hoshi-jounetsu-hen.md`
- chronologicalFrontier: **2018-12-03**
- frontierLatestMachine: **パチスロ巨人の星～情熱編～ — No.1249**
- schema: **resetBehavior v0.7**
- status: **2018-12-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1248を取得して開始。
- INDEXは旧スナップショット（19件）のためREADME指示どおりLATEST_HANDOFF + main実レコードを正本として継続。
- handoff指定の次機種 `パチスロ巨人の星～情熱編～` をNo.1249として登録。
- 日刊スポーツ2018-11-30付導入カレンダーと当時12月新台一覧を横断し、2018-12-03群は `マッハGoGoGo / スーパーリノXX / ドリームクルーン711 / 巨人の星 情熱編` の4機で一致。別型式/別スペック/PB/地域差の追加候補を固定できなかったため群CLOSED。

## No.1249 — パチスロ巨人の星～情熱編～
- manufacturer: **サンセイR&D**
- releaseDateCanonical: **2018-12-03**
- formalModelNameCanonical: **パチスロ巨人の星情熱編/S3**
- formalModelNameVariant: **パチスロ 巨人の星/S3**
- certificationNumber: **8S0001**
- generation/system: **5.9号機 / A+ART / セット継続型ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.59 / 99.05 / 100.26 / 101.65 / 103.01 / 105.02%**
- bonusCombined: **1/399.61 / 1/378.82 / 1/358.12 / 1/339.56 / 1/322.84 / 1/299.25**
- ART初当たり: **全設定共通1/455.42（約1/455.4）**
- baseGamesPer50: **約35G**
- ART純増: **約2.0枚/G（ボーナス込み）**
- basicPayout: **BIG約154枚 / プレミアムBONUS約252枚 / めちゃバレBONUS約252枚 / ART1セット30G（初回60G）**
- ceiling: **NONE**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。本機専用当時解析で内部状態・ステージとも「調査中」。型式表記揺れ/メーカー/シリーズ名と設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・ガックン・有利区間を組み替え再探索したが直接契約を固定できず。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。据え置きを純電断と独立定義した低確/高確・前兆・ART・BIG後80G特殊状態・有利区間の契約なし。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**。当時解析でも内部状態・ステージとも調査中。
- gameCounterReset: 通常G数天井非搭載のため **N/A**。BIG後80G特殊抽選残G数等の処理は未確定。
- ceilingAfterReset: **N/A / NO_CEILING**。
- mode/stateAfterReset: **NONE_CONFIRMED / UNVERIFIED_INTERNAL_STATE**。朝一専用G数モードや短縮天井は確認なし。
- advantageousSectionReset: **UNVERIFIED_MACHINE_SPECIFIC_CONTRACT**。5.9号機A+ARTとして該当するが一般論で補完しない。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン条件/発生率、初期出目、有利区間ランプによる変更判別を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: conventionalCeiling **NONE** / reset専用公開数値 **NONE_CONFIRMED** / gakkunProbability **UNVERIFIED**。

### quality notes
- 型式は `パチスロ巨人の星情熱編/S3` と `パチスロ 巨人の星/S3` の資料差をCONFLICT保持。複数実機DBで一致する前者をcanonical。
- 機械割の精密値と小数1桁値は丸め整合のためCONFLICTではない。
- ART初当たり1/455.4は全設定共通として扱われる資料構造だが、将来一次解析が見つかった場合は再確認対象。
- 他の5.9号機A+ARTからresetBehaviorを自動転記しない。

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
- No.1249 パチスロ巨人の星～情熱編～

### 判定
- **2018-12-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 日刊スポーツ導入カレンダーと当時12月新台一覧が上記4機で一致。12/3同日全メーカー/別型式/別スペック/PB/地域差を検索したが追加候補を固定できず。

## 次の時系列境界
- 2018-12-04〜2018-12-16を境界監査後、**2018-12-17群**へ進む。
- 現時点の既知候補:
  1. **パチスロ ロード オブ ヴァーミリオン Re:**（七匠）— 2018-12-17。No.1250候補。
  2. **回胴黙示録カイジ4 /ZS**（サミー）— 2018-12-17候補。
- 日刊スポーツ2018-11-30付導入カレンダーは12/17パチスロ欄にカイジ4のみ掲載する一方、当時12月新台一覧およびPachisevenはロード オブ ヴァーミリオン Re:を2018-12-17導入としているため、次回は境界/同日群監査を優先し、両方を候補として扱う。

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
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1249を再取得。
2. **1249件 / chronologicalFrontier 2018-12-03 / `2018-12-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 2018-12-04〜12-16境界を再監査し、2018-12-17群を確定する。
4. 現時点の先頭候補 **パチスロ ロード オブ ヴァーミリオン Re:** をNo.1250候補として調査。カイジ4を同日候補として保持し、群監査後に順次処理。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_thunder-v-special.md`（サンダーVスペシャル）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1249 パチスロ巨人の星～情熱編～
- HAZUSE DATA: https://data.hazuse.com/?genre=209&machine_code=8S0001
- ちょんぼりすた: https://chonborista.com/slot/67417/
- すろぱちくえすと: https://www.slopachi-quest.com/article/kyojinnohoshi-jounetsu/
- スロパチネット: https://slopachi-net.com/kyozin-zyounetsu
- グリーンべると: https://web-greenbelt.jp/00010828/
- P-WORLD: https://www.p-world.co.jp/machine/database/8792
- 中一商事/Rakuten中古実機DB: https://item.rakuten.co.jp/auc-nakaiti/skyozi/
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2018/12/pachislot-kyojin-no-hoshi-jounetsu-hen
- 2-9伝説: https://29den.com/kyojinjonetu/
- すろかい: https://slotkaiseki.hatenablog.com/entry/kyojinnohoshi
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201811300000374.html

### 次期境界監査
- 当時12月新台一覧（すろぱちくえすと）: https://www.slopachi-quest.com/article/erunote-12-shindai/
- Pachiseven ロード オブ ヴァーミリオン Re:: https://pachiseven.jp/machines/5630/cutout/13
