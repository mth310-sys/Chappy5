更新日: 2026-09-10

## 現在地点
- recordCount: **1207**
- latestRecordAdded: **エルインカ～黄金文明～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-02_el-inca-ogon-bunmei.md`
- chronologicalFrontier: **2018-07-02**
- frontierLatestMachine: **エルインカ～黄金文明～ — No.1207**
- schema: **resetBehavior v0.7**
- status: **2018-07-02_GROUP_OPEN_2_MACHINES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1206を再取得して開始。
- `INDEX.md`は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1206 `パチスロ学園黙示録ハイスクール・オブ・ザ・デッド` の次として、7/2群 `エルインカ～黄金文明～` をNo.1207で登録。
- HAZUSE、ちょんぼりすた、パチマガスロマガ、すろぱちくえすとを照合。導入日/型式/検定/性能コアを固定。
- resetBehaviorは当時ちょんぼりすたが設定変更/電源OFF→ON時の内部状態・ステージをともに「調査中」と記録。追加探索でも本機固有の直接契約を固定できないため、一般論を流用せずUNVERIFIED_AFTER_RESEARCHを維持。
- 遡及QAは `2006-08_jarinko-chie.md` を再確認し、既存coreStatus `PARTIAL`は維持、resetBehaviorQAのみ`PARTIAL_RESEARCH_EXHAUSTED`へ更新。
- Git追加順を確認し、じゃりン子チエ直後の実機追加は `2006-08_cranky-condor-x.md`（クランキーコンドルX）と確定。

## No.1207 — エルインカ～黄金文明～
- manufacturer: **KPE / KONAMI**
- releaseDateCanonical: **2018-07-02**
- formalModelName: `エルインカ黄金文明／KK`
- certificationNumber: `7S1600`
- generation/system: **5.9号機 / A+RT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- market payout: **97.1 / 98.2 / 99.1 / 101.6 / 106.1 / 110.2%**
- full攻略 payout: **100.5 / 101.8 / 102.8 / 105.5 / 110.2 / 114.5%**
- S-BIG: **1/390.1 / 1/387.8 / 1/385.5 / 1/381.0 / 1/372.4 / 1/360.1**
- N-BIG: **1/409.6 / 1/404.5 / 1/402.1 / 1/397.2 / 1/387.8 / 1/374.5**
- base: **約32～32.7G/50枚**
- RT: **100G / 約0.3枚/G**
- payout: **S-BIG最大279枚 / N-BIG最大208枚**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 内部状態/ステージは当時資料で調査中。RT残G等を含め `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを独立条件として直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: 当時資料で内部状態/ステージとも調査中。`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: 通常天井非搭載。RT100G残Gの各条件処理はUNVERIFIED。
- mode/state: 朝一専用モード/恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: A+RT機。機種固有資料で有利区間利用/ランプ契約を確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。5.9号機一般論から補完しない。
- resetDetection: ガックン/初期出目/液晶/ランプ判別は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開朝一専用数値なし確認。

## conflicts
- すろぱちくえすとの一部合算表記は個別S-BIG/N-BIG確率およびHAZUSE/ちょんぼりすたと整合しないため `CONFLICT_TABLE_TRANSCRIPTION`として保持。個別確率と複数一致値をcanonicalへ採用。

## 2018-07-02群監査
### 登録済み
- No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド（山佐）
- No.1207 エルインカ～黄金文明～（KPE / KONAMI）

### 未処理候補
- パチスロ ダンガンロンパ（ニューギン） — 2018-07-02候補。
- パチスロ 美ラメキ！（藤商事） — 2018-07-02候補。
- パチスロ トータル・イクリプスLv.MAX-RT — 7/2帰属を再監査して確定。

### 群判定
- `2018-07-02_GROUP_OPEN_2_MACHINES_PROCESSED`
- 全メーカー/表記揺れ/別スペック監査前なのでCLOSEしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_jarinko-chie.md**（じゃりン子チエ）。
- jarinko QA: **PARTIAL_RESEARCH_EXHAUSTED**。性能coreStatus `PARTIAL`は維持。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`（クランキーコンドルX）。
- cursorEvidence: じゃりン子チエ追加commit `57dbe381...` の直後の実機追加commit `c48cbb8f...` がクランキーコンドルX。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。
- 同日群の全メーカー/別スペック/地域差監査後にのみ群をCLOSEする。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1207を再取得。
2. **1207件 / chronologicalFrontier 2018-07-02 / 7/2群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **パチスロ ダンガンロンパ**をNo.1208候補としてperformance core + resetBehavior v0.7を収集。
4. 続いて美ラメキ！ / トータル・イクリプスLv.MAX-RT等を一覧差・型式差込みで監査。
5. 7/2群の全メーカー・表記揺れ・別スペック監査後にCLOSED判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`（クランキーコンドルX）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1207 エルインカ～黄金文明～
- HAZUSE: https://hazuse.com/machine/pachislot/7S1600/
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/58303/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/02/l.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/el-inca/

### QA じゃりン子チエ
- グリーンべると: https://web-greenbelt.jp/00004714/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/46/a.php
- ITmedia Mobile: https://www.itmedia.co.jp/mobile/articles/0701/31/news098.html
