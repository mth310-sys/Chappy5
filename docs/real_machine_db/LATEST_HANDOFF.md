更新日: 2026-09-10

## 現在地点
- recordCount: **1211**
- latestRecordAdded: **あっぱれ！PREGO**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-09_appare-prego.md`
- chronologicalFrontier: **2018-07-09**
- frontierLatestMachine: **あっぱれ！PREGO — No.1211**
- schema: **resetBehavior v0.7**
- status: **2018-07-09_GROUP_OPEN_1_MACHINE_PROCESSED_AUDIT_PENDING**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1210を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 2018-07-02同日群を当時導入一覧・複数解析で横断監査。既登録のNo.1206〜1210（H.O.T.D. / エルインカ / ダンガンロンパ / 美ラメキ！ / トータル・イクリプスLv.MAX-RT）以外の7/2導入スロットを今回の再探索では固定できず、`2018-07-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT` と判定。
- 次の最古未処理として2018-07-09 `あっぱれ！PREGO` を特定しNo.1211として登録。
- PREGO公式、すろぱちくえすと、楽スロ、K-Navi、P-Summa、後年DBを横断。性能コアは複数ソースで一致。
- resetBehaviorは機種名表記揺れ、JPS、PREGO、PB、兄弟機モナスロ/TOWSERと「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」を組み合わせて再探索したが、本機固有の設定変更/純電断契約を固定できず、一般論補完なしで`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載。朝一専用モード/短縮天井/公開朝一当選率は確認されず。
- 正式型式名・検定番号も現存検索可能資料で直接固定できず推定していない。

## No.1211 — あっぱれ！PREGO
- manufacturer: **JPS / ジェーピーエス**
- releaseDateCanonical: **2018-07-09**
- generation/system: **5.9号機 / ノーマルA / 完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- BIG: **1/281.2 / 1/275.3 / 1/267.4 / 1/260.0 / 1/254.0 / 1/234.0**
- REG: **1/451.9 / 1/399.6 / 1/358.1 / 1/319.6 / 1/299.2 / 1/270.8**
- 合算: **1/173.3 / 1/163.0 / 1/153.1 / 1/143.4 / 1/137.3 / 1/125.5**
- 適当打ち機械割: **95.5 / 96.9 / 99.6 / 101.9 / 103.9 / 108.4%**
- フル攻略機械割: **97.7 / 99.0 / 101.6 / 103.9 / 105.9 / 110.4%**
- base: **約33.3〜34.1G/50枚**
- BIG: **312枚**
- REG: **104枚**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounter/ceiling: 天井非搭載のため `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- mode/state: 朝一専用出玉モード `NONE_CONFIRMED_AFTER_RESEARCH`、その他本機固有状態契約は未固定。
- advantageousSection: ノーマルAの主システムとして `NOT_APPLICABLE_TO_PRIMARY_SYSTEM`。
- resetBenefits: 短縮天井/朝一ボーナス優遇等 `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/ランプによる変更判別契約・率は `UNVERIFIED_AFTER_RESEARCH`。55ランプは通常のボーナス告知であり変更判別とは別。
- numericResetData: 公開朝一当選率/専用モード振り分け/ガックン率 `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2018-07-02群監査
### 登録済み
- No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド（山佐）
- No.1207 エルインカ～黄金文明～（KPE / KONAMI）
- No.1208 パチスロ ダンガンロンパ～希望の学園と絶望の高校生～（ニューギン）
- No.1209 パチスロ 美ラメキ！（藤商事）
- No.1210 パチスロ トータル・イクリプスLv.MAX-RT（SANKYO）

### 群判定
- `2018-07-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- Pachi-Logosの7/2一覧は4機までだが、別系統資料でトータル・イクリプスLv.MAX-RTを確認済み。単一一覧依存を避けて5機を正本化した。

## 2018-07-09群監査
### 登録済み
- No.1211 あっぱれ！PREGO（JPS）

### 群判定
- `2018-07-09_GROUP_OPEN_1_MACHINE_PROCESSED_AUDIT_PENDING`
- 2018導入日一覧では7/9は本機を掲載。次回、全メーカー・表記揺れ・PB/地域限定機を含む最終監査後にCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_jarinko-chie.md**（じゃりン子チエ）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`（クランキーコンドルX）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は最新キュー優先のためQAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1211を再取得。
2. **1211件 / chronologicalFrontier 2018-07-09 / 7/9群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. 2018-07-09群を全メーカー・表記揺れ・PB/地域限定機まで最終監査する。
4. 漏れがなければ`2018-07-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`へ更新。
5. 次の日付候補は2018-07-16前後。既知候補 `ストリートファイターV パチスロエディション` と `雷雷弁慶` は導入日を複数ソース再照合し、最古未処理をNo.1212候補として処理する。
6. 遡及QAは `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`から継続。

## 主要出典 — 取得日 2026-09-10
### 7/2群監査
- Pachi-Logos: https://pachi-logos.jp/new-machines/7/
- すろぱちくえすと2018一覧: https://www.slopachi-quest.com/article/sindai-2018/
- トータル・イクリプス補強: https://hazuse.com/machine/pachislot/7S1720/

### No.1211 あっぱれ！PREGO
- PREGO公式: https://www.p-prego.com/machine/appare/
- PREGO公式コンテンツ: https://www.p-prego.com/content.html
- すろぱちくえすと: https://www.slopachi-quest.com/article/appare-prego/
- 楽スロ: https://rakuslo.com/prego-spec.html
- K-Navi: https://p-kn.com/slot/3042/
- P-Summa: https://psumma.jp/pachislo/43131/
- 後年照合: https://pacnk.com/slot/tools/sh_apparepurego.html
