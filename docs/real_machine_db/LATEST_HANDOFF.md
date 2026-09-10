更新日: 2026-09-10

## 現在地点
- recordCount: **1250**
- latestRecordAdded: **パチスロ ロード オブ ヴァーミリオン Re:**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-12-17_lord-of-vermilion-re.md`
- chronologicalFrontier: **2018-12-17**
- frontierLatestMachine: **パチスロ ロード オブ ヴァーミリオン Re: — No.1250**
- schema: **resetBehavior v0.7**
- status: **2018-12-17_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1249を取得して開始。
- INDEXは旧スナップショット（19件）のためREADME指示どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 2018-12-04〜12-16を当時12月新台一覧・後年カレンダーで境界監査し、新規パチスロの固定候補を確認できず12/17群へ進行。
- handoff先頭候補 `パチスロ ロード オブ ヴァーミリオン Re:` をNo.1250として登録。
- 12/17群監査で既知の `回胴黙示録カイジ4` に加え、`アナザーゴッドハーデス-冥王召喚-` も同日導入候補として確認。群はOPENのまま。

## No.1250 — パチスロ ロード オブ ヴァーミリオン Re:
- manufacturer: **七匠（NANASHOW）**
- releaseDateCanonical: **2018-12-17**
- formalModelNameCanonical: **SATロードオブヴァーミリオンRe:A**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **6号機 / AT / 擬似ボーナス型**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 99.5 / 100.9 / 104.3 / 107.5 / 111.5%**
- AT初当たり: **1/306 / 1/298 / 1/292 / 1/278 / 1/269 / 1/256**
- baseGamesPer50: **約50.0G**
- AT純増: **約5.7枚/G**
- basicPayout: **VC=15枚ベル5回まで / VB=50・100・150・200G / CZ5G・期待度約33%**
- ceiling: **有利区間開始後1183G+α、ボーナス終了後基準1279G+α / 恩恵VB100G以上**

### resetBehavior v0.7
- settingChange: **天井RESET / 非有利区間へ / 通常・マナ・アルカナ状態再抽選**。液晶1・2・3、キリーク半島。非有利区間後はハズレ以外の小役で約1/1.2で有利区間へ移行し、天井カウント開始。
- carryOver: **天井 / 有利区間 / 通常状態 / マナ状態 / アルカナ状態を引継ぎ**。マナポイントも前日持越しとする当時解析あり。
- powerOFF→ON: 当時朝一表の「据え置き 電源ON/OFF時」では **天井・有利区間・各状態を引継ぎ**。
- gameCounterReset: 設定変更 **RESET** / 据え置き・純電断 **CARRY_OVER**。
- ceilingAfterReset: **1183G+α（有利区間移行後）**。通常のボーナス終了後基準1279G+αより96G分短い見え方。
- modeAfterReset: **天国10% / 天国準備20%以上**。
- stateAfterReset: **マナ状態3 50% / アルカナ状態3 12.5%**。
- advantageousSectionReset: 設定変更 **非有利区間へ** / 据え置き・純電断 **引継ぎ**。
- resetBenefits: 上記モード・状態優遇。ただし当時攻略評価ではリセット単独狙いは強くない。
- resetPenalties: 前日天井G数・有利区間・マナポイント等の蓄積消去が据え置き比で不利。
- resetDetection: ガックン判別は **ほぼ不可能**。当日約1200G到達はリセット濃厚材料。朝一数Gでマナヘイストなら変更可能性UPだが自力移行あり。
- numericResetData: **天国10% / 天国準備20%以上 / マナ状態3 50% / アルカナ状態3 12.5% / 有利区間移行約1/1.2（ハズレ以外）**。

### quality notes
- 検定番号は型式・メーカー・公安委員会・検定通過・認定・8S等で再探索したが固定できずUNVERIFIED。
- リセット後1183G+αとボーナス終了後1279G+αは競合ではなく、有利区間開始位置の定義差。
- 朝一表が据え置きと電源ON/OFFを同一列で扱うため、その資料定義をpowerCycleBehaviorにも明示して採用。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-11_kaidouou.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-11_thunder-v-special.md`（サンダーVスペシャル）**。
- 既存性能値をやり直さず、resetBehavior欠損のみ順次QAする。

## 2018-12-17群
### 登録済み
- No.1250 パチスロ ロード オブ ヴァーミリオン Re:

### 未処理候補
1. **回胴黙示録カイジ4 /ZS**（サミー）— 2018-12-17。
2. **アナザーゴッドハーデス-冥王召喚-**（ミズホ）— 2018-12-17。

### 判定
- **2018-12-17_GROUP_OPEN**。
- 一撃2018年12月スケジュールはLoV Re:とハーデス冥王召喚を12/17掲載。
- HAZUSE/複数解析はカイジ4を12/17導入として確認。
- 単一カレンダーの掲載漏れを前提にせず、次回は3系統を横断して同日群を最終監査する。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。ただし資料が同一列で定義する場合はその定義を明示する。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1250を再取得。
2. **1250件 / chronologicalFrontier 2018-12-17 / `2018-12-17_GROUP_OPEN`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 同日群の `回胴黙示録カイジ4 /ZS` と `アナザーゴッドハーデス-冥王召喚-` の導入日・既存重複を再確認し、最古未処理をNo.1251として処理。
4. その後もう1機を順次処理し、12/17同日全メーカー/別型式/別スペック/PB/地域差を監査してCLOSED判定。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_thunder-v-special.md`（サンダーVスペシャル）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1250 パチスロ ロード オブ ヴァーミリオン Re:
- グリーンべると: https://web-greenbelt.jp/00010938/
- 一撃: https://1geki.jp/slot/s_lov_re/
- 一撃 小役/ベース: https://1geki.jp/slot/s_lov_re/4/
- すろぱちくえすと 朝一リセット: https://www.slopachi-quest.com/article/lord-of-vermilion-re-reset/
- DMMぱちタウン: https://p-town.dmm.com/machines/3324
- P-WORLD: https://www.p-world.co.jp/machine/database/8813
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/11/a.php
- スロ安サーチ: https://slot-price.com/slot_price_details/id/1295
- すろ・ぱち(解)検定通過情報: https://kaiseki.sulopachinews.com/archives/2352

### 境界 / 同日群監査
- 2018年12月新台一覧: https://www.slopachi-quest.com/article/erunote-12-shindai/
- 一撃2018年12月スケジュール: https://1geki.jp/newmachinecalender/201812/
- HAZUSE カイジ4: https://hazuse.com/machine/pachislot/7S1728/
