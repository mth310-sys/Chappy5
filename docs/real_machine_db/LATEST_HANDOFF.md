更新日: 2026-09-11

## 現在地点
- recordCount: **1268**
- latestRecordAdded: **アナザーハナビ弥生ちゃん**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-03-04_another-hanabi-yayoichan.md`
- chronologicalFrontier: **2019-03-04**
- frontierLatestMachine: **アナザーハナビ弥生ちゃん — No.1268**
- schema: **resetBehavior v0.7**
- status: **2019-03-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1267を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainはrecordCount 1267、2019-02-18群CLOSED、次候補 `アナザーハナビ弥生ちゃん`。重複検索で未登録を確認しNo.1268として登録。
- 前handoffでは2019-02-25候補だったが、日付を再監査した結果、ALL7/一撃/すろぱちくえすと/モゲスロ等の2019-02-25予定・導入表記と、HAZUSE/K-Navi/ちょんぼりすた等の2019-03-04導入開始表記が競合。
- 「予定日」と後発の実導入DB差の可能性が高いため平均せずCONFLICTを保持し、ホール実導入時系列のcanonicalを2019-03-04へ修正した。
- 性能コアは設定1/2/5/6、CZ 1/119.2→1/67.1、AT 1/369.8→1/112.3、機械割97.7→108.2%、ベース50/52/54/55G、純増約4.5枚/G、AT1セット約100枚、通常天井非搭載を複数解析で照合。
- resetBehavior v0.7は本機専用朝一表2系統で、設定変更時=内部状態RESET、純電源OFF→ON時=内部状態CARRY_OVERを固定。朝一ステージは当時資料で調査中。
- 据え置きを純電断から分離した全内部契約、有利区間の条件別直接契約、ガックン/初期出目/ランプ等の確定変更判別、reset専用当選率/モード振り分けは検索語・資料系統変更後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND。
- 天井非搭載のためgameCounterReset/ceilingAfterResetの天井項目はNOT_APPLICABLE_NO_CEILING。後年リセット一覧でも特段のリセット恩恵なしと整理されるが、当時解析と区別して補助照合扱い。
- 2019-03-04同日群には少なくとも `Re:ゼロから始める異世界生活` と `パチスロおそ松さん～驚～` が存在するため群はOPENのまま。次回は同日群の未処理を導入資料で再監査してからNo.1269を決定する。

## No.1268 — アナザーハナビ弥生ちゃん
- releaseDateCanonical: **2019-03-04**
- releaseDateConflict/planned: **2019-02-25**
- manufacturer: **ユニバーサルブロス**
- generation/system: **6号機 / AT / CZ経由・直撃型 / セット数・マップ管理AT**
- formalModel: **`S／アナザーハナビ弥生ちゃん／DH`**
- certificationNumber: **`8S1059`**
- settings: **1 / 2 / 5 / 6**
- CZ初当たり: **1/119.2 / 1/84.5 / 1/75.0 / 1/67.1**
- AT初当たり: **1/369.8 / 1/196.1 / 1/153.5 / 1/112.3**
- 機械割: **97.7 / 98.8 / 103.0 / 108.2%**
- baseGamesPer50: **50 / 52 / 54 / 55G**
- AT純増: **約4.5枚/G**
- YAYOI TIME: **1セット約100枚**
- 通常天井: **非搭載**

### resetBehavior v0.7
- settingChange: **内部状態RESET**。朝一ステージはUNVERIFIED_AFTER_RESEARCH。
- carryOver: 据え置きを純電断と完全分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: **内部状態CARRY_OVER**。ステージはUNVERIFIED_AFTER_RESEARCH。
- gameCounterReset: 天井非搭載につき `NOT_APPLICABLE_NO_CEILING`。前兆/CZ等の個別内部G契約は未固定。
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING`。
- modeAfterReset: reset専用モード振り分け `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更=RESET / 純電断=CARRY_OVER / 据え置き単独=UNVERIFIED。
- advantageousSectionReset: 6号機ATだが本機固有の条件別直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits: 天井短縮/AT・CZ優遇等の比較可能な固定値 `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 天井非搭載。その他の固定不利値 `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 当時解析は調査中。本機固有ガックン/ランプ/初期出目等 `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 専用当選率/モード振り分け/ガックン率 `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_RELEASE_DATE_PLANNED_2019_02_25_VS_ACTUAL_DB_2019_03_04`
  - 2019-02-25: ALL7月間導入予定、一撃、すろぱちくえすと、モゲスロ等。
  - 2019-03-04: HAZUSE、K-Navi、ちょんぼりすた、おスロおパチおいでやす等。
  - ホール実導入時系列canonicalは後発の導入開始DB群を優先し2019-03-04。競合値は削除・平均化しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-02-25予定境界
- ALL7等ではアナザーハナビ弥生ちゃんが2019-02-25導入予定。
- 後発のHAZUSE/K-Navi等では2019-03-04導入開始のため、No.1268は3/4 canonicalへ移動。
- 2019-02-19〜03-03に追加の実導入パチスロを固定できないか、次回も境界監査を短く実施する。

## 2019-03-04群
### 登録済み
- No.1268 アナザーハナビ弥生ちゃん

### 未処理候補
- **Re:ゼロから始める異世界生活** — 大都技研 / 6号機AT / K-Navi・複数解析で2019-03-04導入一致。No.1269第一候補。
- **パチスロおそ松さん～驚～** — 同日導入予定資料あり。導入日・メーカー・既存重複を次回再確認。

### 群判定
- **OPEN**。同日未処理候補が存在するためCLOSEDにしない。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 競合値は平均せずCONFLICT保持。
- 予定日と実導入開始日が競合する場合も両方を保持し、時系列canonicalの根拠を明示する。
- 見つからない項目は公式/業界/当時解析/古いDB/アーカイブ/回顧資料まで検索軸を変更後にUNVERIFIED。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. 2019-02-19〜03-03境界を短く再監査し、No.1268の日付CONFLICTを前提に漏れがないことを確認。
3. 2019-03-04群の未処理を再確認。
4. **Re:ゼロから始める異世界生活** が未登録ならNo.1269第一候補として性能コア + resetBehavior v0.7を収集。
5. 続いて `パチスロおそ松さん～驚～` 等の同日候補を処理し、全メーカー/別型式/別スペック/PB/地域差まで監査後に3/4群CLOSED可否を判定。
6. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機へ進む。

## 主要出典 — 取得日 2026-09-11
### アナザーハナビ弥生ちゃん
- HAZUSE: https://hazuse.com/machine/pachislot/8S1059/
- K-Navi: https://p-kn.com/slot/3175/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/74840/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/03/04/post-4860/
- 一撃: https://1geki.jp/slot/s_ahanabi/
- すろぱちくえすと: https://www.slopachi-quest.com/article/another-hanabi-yayoichan/
- モゲスロ: https://moge-site.com/archives/20931
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/10/at-01.php
- ALL7 2019年2月導入予定一覧: https://www.all7.jp/plans/index/2019/02
- スロリスクタイム: https://pachisuro100.com/reset/

### 次回先行候補
- Re:ゼロ K-Navi: https://p-kn.com/slot/3187/
- 2019-03-04導入予定まとめ: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/03/02/223000
