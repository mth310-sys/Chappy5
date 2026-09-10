更新日: 2026-09-10

## 現在地点
- recordCount: **1236**
- latestRecordAdded: **パチスロ 大海物語4 with すーぱーそに子**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-10-15_ooumi4-with-super-sonico.md`
- chronologicalFrontier: **2018-10-15**
- frontierLatestMachine: **パチスロ 大海物語4 with すーぱーそに子 — No.1236**
- schema: **resetBehavior v0.7**
- status: **2018-10-15_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1235を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行進捗の正本としてNo.1235の次から継続。
- 直前mainは1235件 / 2018-10-09 / `2018-10-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。
- 2018-10-10～10-14境界を再監査し、この期間に先行してホール導入開始した未登録パチスロ機を今回固定できず、2018-10-15群へ前進。
- No.1236 `パチスロ 大海物語4 with すーぱーそに子` を登録。
- SANYO公式、Amusement Japan、グリーンべると/P-WORLD業界記事、P-WORLD、ちょんぼりすた、すろぱちくえすと、パチ7、後年整理DB、中古実機資料を横断。
- 2018-10-15導入は当時業界一次記事と複数解析で一致。
- 5.9号機 A+RT / 設定1・2・5・6。
- 機械割97.9/101.0/104.1/108.0%。
- BIG 1/269.7 / 1/266.4 / 1/255.0 / 1/241.8、REG 1/334.4 / 1/322.8 / 1/278.9 / 1/242.7、合算1/149.3 / 1/146.0 / 1/133.2 / 1/121.1。
- 50枚ベース35.6～38.3G。BIG250枚 / REG約100枚。
- BIG後RT「そに子TIME」20G、昇格後「すーぱーそに子TIME」30G。昇格率はS1/S2約70%、S5約65%、S6約60%。RT純増の比較可能な枚/Gは固定できず、P-WORLDの「現状維持程度」を定性的補助値として保持。
- 天井非搭載。
- resetBehaviorは、本機固有の設定変更/据え置き/純電断時RT状態・液晶復帰・ガックンの直接契約を、表記/検索語/資料系統を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。先行機から自動転記していない。
- 朝一専用モード・短縮天井・専用当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。ちょんぼりすたの「恩恵などは存在しない可能性が高い」は推測表現のため確定契約へ昇格させない。
- 正式型式名・検定番号も再探索後に高信頼で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 性能主要値は複数ソース一致。孤立した設定1合算1/143.1、パチ7個別断片のBIG300枚は平均せずCONFLICTとして保持し、当時一次+複数一致の1/149.3・BIG250枚をcanonicalとした。

## No.1236 — パチスロ 大海物語4 with すーぱーそに子
- manufacturer: **三洋物産 / SANYO**
- releaseDateCanonical: **2018-10-15**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5.9号機 / A+RT / 2段階RT**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.9 / 101.0 / 104.1 / 108.0%**
- BIG: **1/269.7 / 1/266.4 / 1/255.0 / 1/241.8**
- REG: **1/334.4 / 1/322.8 / 1/278.9 / 1/242.7**
- bonusCombined: **1/149.3 / 1/146.0 / 1/133.2 / 1/121.1**
- baseGamesPer50: **35.6～38.3G**
- basicPayout: **BIG250枚 / REG約100枚**
- RT: **20G → 昇格時30G / S1昇格約70% / 純増は現状維持程度、枚/G UNVERIFIED**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**（RT状態/液晶/成立ボーナス状態の本機固有直接契約なし）。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_CEILING**。RT残G等は推定しない。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING / 短縮天井 NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: **朝一専用内部モード NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **RT内部状態 UNVERIFIED_AFTER_RESEARCH**。
- advantageousSection: **N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY**。
- resetBenefits: **専用当選率UP等 NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **ガックン/初期出目/液晶/ランプによる本機固有判別条件・発生率 UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **通常天井なし。専用モード振分/朝一当選率/恩恵率 NONE_CONFIRMED_AFTER_RESEARCH、ガックン率 UNVERIFIED**。

## 2018-10-09群監査
- No.1235 A-SLOTツインエンジェルBREAK
- 判定: `2018-10-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`（前handoff継承）。

## 2018-10-15群監査
### 登録済み
- No.1236 パチスロ 大海物語4 with すーぱーそに子

### 未処理の直接確認候補
- **ツインドラゴンハナハナ**（パイオニア）— ちょんぼりすた、K-Navi、すろぱちくえすとで2018-10-15導入一致。

### 群判定
- `2018-10-15_GROUP_OPEN`
- No.1237候補 `ツインドラゴンハナハナ` が未処理のためCLOSEDにしない。
- その登録後、全メーカー/別スペック/PB/地域差を横断監査して群CLOSED判定する。

## 次の時系列候補
1. **2018-10-15 ツインドラゴンハナハナ** — No.1237候補。
2. 10/15同日群の全メーカー/別スペック/PB/地域差監査。
3. 群CLOSED後、10/16以降の最古未処理導入へ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_takenaka-naoto-taikoki.md**（前handoff継承）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は時系列新規No.1236を優先し、遡及QAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧19件スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 天井が非搭載の機種ではゲーム数カウンターを架空補完しない。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1236を再取得。
2. **1236件 / chronologicalFrontier 2018-10-15 / `2018-10-15_GROUP_OPEN`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. **ツインドラゴンハナハナ** をNo.1237候補として性能コア+resetBehavior v0.7収集。
4. 登録後、2018-10-15群を全メーカー/別スペック/PB/地域差まで最終監査しCLOSED判定。
5. 遡及QAは2006-09以降の隣接レコードから継続。

## 主要出典 — 取得日 2026-09-10
### No.1236 パチスロ 大海物語4 with すーぱーそに子
- SANYO公式: https://www.sanyobussan.co.jp/products/slot_ooumi4_withsupersonico/
- SANYO公式 RT: https://www.sanyobussan.co.jp/products/slot_ooumi4_withsupersonico/rt/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000761/
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/10342/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/8738
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/63469/
- すろぱちくえすと: https://www.slopachi-quest.com/article/ooumi4-supersoniko/
- すろぱちくえすと設定判別: https://www.slopachi-quest.com/article/ooumi4-supersoniko-settei/
- パチ7: https://pachiseven.jp/machines/5541/cutout/3
- pacnk: https://pacnk.com/slot/tools/sh_oumimonogatarifuoizusupasoniko.html
- A-SLOT中古実機: https://www.a-slot.com/SHOP/sanyo200.html

### 次回候補 ツインドラゴンハナハナ
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/66056/
- K-Navi: https://p-kn.com/slot/3095/
- すろぱちくえすと: https://www.slopachi-quest.com/article/twindragon-hanahana/
