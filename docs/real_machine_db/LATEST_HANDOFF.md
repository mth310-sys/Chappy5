更新日: 2026-09-11

## 現在地点
- recordCount: **1254**
- latestRecordAdded: **パチスロ蒼天の拳 朋友**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-07_souten-no-ken-ponyou.md`
- chronologicalFrontier: **2019-01-07**
- frontierLatestMachine: **パチスロ蒼天の拳 朋友 — No.1254**
- schema: **resetBehavior v0.7**
- status: **2019-01-07_GROUP_OPEN_2_MACHINES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1253を再取得して開始。
- No.1254として `パチスロ蒼天の拳 朋友` を登録。
- 遡及QAは `モエる まりんバトる` を再探索し、性能コアを崩さずreset QAだけ `PARTIAL_RESEARCH_EXHAUSTED` として更新。
- Git追加履歴でモエる まりんバトる追加commit `7069dd0b...` の直後が `アクアビーナス` 追加commit `4699c7ef...` であることを確認し、次回QAカーソルを進めた。

## No.1254 — パチスロ蒼天の拳 朋友
- manufacturer: **サミー**
- releaseDateCanonical: **2019-01-07**
- generation/system: **6号機 / ボーナス連チャン・バトルボーナス主体**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.7 / 100.1 / 103.5 / 106.8 / 110.1%**
- 死合の刻初当たり: **1/340.2 → 1/269.9**
- 天授の儀初当たり: **1/15184.8 → 1/12000.6**
- ボーナス合算（引戻し込）: **1/213.1 → 1/172.1**
- baseGamesPer50: **32.9G**
- バトルボーナス: **純増約6枚/G・平均約120枚・継続期待度66〜89%**
- ceiling: **1200G到達後、死合の刻約1/50・天授の儀約1/12800**。有利区間とは別管理。

### resetBehavior v0.7
- settingChange: **1200G天井を引き継ぐ**。内部状態/液晶ステージ/七星カウンターG数は十分な再探索後も未固定。
- carryOver: 据え置き独立条件は **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **1200G天井を引き継ぐ**。その他内部契約は未固定。
- gameCounter: settingChange=`CARRY_OVER`; pure power cycle=`CARRY_OVER`。ただし機種固有ペナルティ成立時は天井RESET。
- ceilingAfterReset: **短縮なしを確認、前日天井進捗を引継ぎ**。
- advantageousSection: 有利区間は存在するが1200G天井とは別管理。変更/純電断時の有利区間そのものの直接契約は未固定。
- resetBenefits: 設定変更でも天井進捗が残るため宵越し狙いが成立し得る。
- resetDetection: 天井進捗だけでは設定変更判別不能。ガックン率/初期出目/ランプ単独確定契約は未固定。
- numeric: `1200G`, 到達後 `死合1/50 / 天授1/12800`, 七星システム発動天井 `サブ液晶200G`。

### quality notes
- 1gekiの2019-04-04ページには設定変更/電源OFF→ONの天井等を「調査中」とした旧表が残るが、ちょんぼりすた後発整理は双方で天井引継ぎを明記。更新時点差として保持し、天井契約には後発の機種固有解析を採用。
- 正式型式名/検定番号は十分な再探索後も高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2019-01-07群
### 登録済み
- No.1253 パチスロ聖闘士星矢 海皇覚醒Special
- No.1254 パチスロ蒼天の拳 朋友

### 確認済み未処理候補
- **戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.** — 2019-01-07候補として継続。
- **Sミクちゃん** — 型式/導入日を個別再照合して収録可否確定。

### 判定
- **2019-01-07_GROUP_OPEN_2_MACHINES_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`**。
- lastRetroQaResult: **モエる まりんバトる — PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`（アクアビーナス）**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1254を再取得。
2. **1254件 / chronologicalFrontier 2019-01-07 / `2019-01-07_GROUP_OPEN_2_MACHINES_PROCESSED`** を正本として継続。並行更新があれば最新HEAD優先。
3. **No.1255候補 `戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.`** を先頭に性能コア + resetBehavior v0.7を収集。
4. `Sミクちゃん` の導入日/型式/収録可否を個別再照合。
5. 2019-01-07群を全メーカー/別型式/別スペック/PB/地域差で横断監査後にCLOSED可否判定。
6. 遡及QAは **`docs/real_machine_db/machines/2006-12_aqua-venus.md`** から再開。

## 主要出典 — 取得日 2026-09-11
### No.1254 パチスロ蒼天の拳 朋友
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/69735/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_souten3/3/
- K-Navi: https://p-kn.com/slot/3147/
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10000917/

### reset QA モエる まりんバトる
- Universal公式: https://www.universal-777.com/product/slot/moeru_marinebattle/
- K-Navi: https://p-kn.com/slot/718/
- 5号機クロニクル: https://5goki.com/universal
- パチセブン: https://pachiseven.jp/articles/detail/14166
- 回顧資料: https://ameblo.jp/urikko/entry-10146378232.html
