# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **925**
- latestRecordAdded: **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-26_steins-gate-inductance.md`
- chronologicalFrontier: **2015-10-26**
- frontierLatestMachine: **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス**
- frontierRecord: `docs/real_machine_db/machines/2015-10-26_steins-gate-inductance.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-26_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.924 `2015-10-19_deadman-wonderland.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **924** / chronologicalFrontier **2015-10-19** / `2015-10-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- 2015-10-20〜10-25境界CLOSEDを引継ぎ、handoff指定の次の未処理機種 **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス（オーイズミ）** をNo.925として追加。

## No.925 — 想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス

- record: `docs/real_machine_db/machines/2015-10-26_steins-gate-inductance.md`
- manufacturer: **オーイズミ**
- releaseDate: **2015-10-26**
- generation/system: **5号機 新基準AT / 疑似ボーナス + 自力CZ + エピソード進行型AT**
- formalModelName: **シュタインズゲートMX**（中古実機流通資料で確認）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore

- 機械割: **96.9 / 98.2 / 98.9 / 103.3 / 105.9 / 110.5%**。
- 疑似ボーナス初当たり: **1/439.9 / 422.8 / 420.4 / 386.3 / 376.2 / 357.6**。
- AT初当たり: **1/661.7 / 622.1 / 595.6 / 505.1 / 461.1 / 404.1**。
- 50枚ベース: **約48G**。
- 疑似ボーナス/AT純増: **約2.2枚/G**。
- BIG: **70G / 約154枚**、REG: **24G / 約53枚**、ENDING BIG: **40G / 約88枚**、PREMIUM BIG: **200G / 約440枚 + AT確定**。
- AT「シュタインズ・ゲート」: **1セット52G+α**。
- 天井: 固定G数ではなく **IBN5100探索モード19連続失敗後、20回目で疑似ボーナス確定**。約1750〜1800G等の表記はCZ確率から見た到達目安であり固定G数天井として扱わない。

### resetBehavior v0.7

- 設定変更: 後年の朝一整理で **ラボメン全消灯 = リセット示唆**。設定変更時に少なくとも液晶ラボメン進捗が初期化される挙動を支持。
- 据え置き: **ラボメン点灯 = 据え置き濃厚**とされ、ラボメン進捗のCARRYOVERを支持。2015年当時の朝一実戦でも0G時点のラボメン点灯観測あり。
- 純電源OFF→ON: 本機固有の設定変更との直接比較資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- IBN連続失敗回数天井について、設定変更 / 据え置き / 純電断ごとの保持契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。固定G数天井がないため、他機の天井リセット契約を流用しない。
- 設定変更専用の短縮G数天井: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の初期高確/超高確振り分け、朝一専用モード振り分け、リセット専用初当たり率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 変更判別: **ラボメン全消灯→リセット示唆 / 点灯→据え置き濃厚 / ガックン判別不可**。ホール側対策余地があるため確定判別に格上げしない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts / missing

- `CEILING_UNIT_DEFINITION`: 約1750〜1800G等の資料値はIBN CZ出現率からの到達目安。天井そのものはIBN19連続失敗→20回目確定であり、固定G数へ平均・変換しない。
- `TITLE_OR_MODEL_NOT_SEQUEL`: 2017年「ランヴォア」と2022年「SLOT STEINS;GATE」は別機。検索結果に混入するため両機のresetBehavior/性能値を転記しない。
- inspectionNumber: 型式名 / オーイズミ / 5S / 検定番号等へ検索語変更後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- setting-change IBN failure-count handling: `UNVERIFIED_AFTER_RESEARCH`。
- purePowerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- reset initial state/mode numeric distribution: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 時系列境界監査

### 2015-10-20〜10-25
- 前リレーで **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。今回もその境界を正本として引継ぎ。

### 2015-10-26群
処理済み:
1. **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス — No.925**

未処理の強い候補:
1. **機甲戦記ドラグナー — サミー**：当時解析/導入一覧で **2015-10-26** を確認済み。次回最優先。
2. **百花繚乱サムライガールズ — DAXEL**：当時解析/年次一覧で **2015-10-26** を確認済み。
3. **パチスロ ハイスクールD×D — KPE系**：KONAMI当時記事で2015-10-26コンテンツ開始を確認するが、記事文脈に稼働開始前表現があり、全国ホール導入日の具体日を再固定する必要あり。

- 10/26群は未処理候補が残るため **OPEN**。候補だけに限定せず全メーカー横断監査後にCLOSED判定する。
- 導入日について検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA

- 今回は時系列新規収集を優先。
- retroQaCursorはリポジトリ実体で特定できていないため推測で前進させない。
- retroQaStatus: **CURSOR_RESOLUTION_PENDING / NO_FALSE_PROGRESS**。

## 次回再開地点

1. **recordCount 925 / chronologicalFrontier 2015-10-26 / 2015-10-26_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.925を再取得。
3. 次の未処理候補 **機甲戦記ドラグナー（サミー）** をv0.7仕様で調査・登録する。
4. 続けて **百花繚乱サムライガールズ**、**ハイスクールD×D** の導入日と性能/resetBehaviorを確認する。
5. 10/26全メーカーを横断監査し、未登録機がないことを十分再探索してから同日群CLOSED判定する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。
- 固定G数天井とCZ回数天井を混同しない。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.925 想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス
- グリーンべると（2015-09-17発表会）: https://web-greenbelt.jp/00008086/
- パチビー 機種情報: https://www.pachibee.jp/machines/index/215100000
- K-Navi: https://p-kn.com/slot/2365/
- すろぱちくえすと（スペック/天井）: https://www.slopachi-quest.com/article/steinsgate/
- すろぱちくえすと 機種まとめ: https://www.slopachi-quest.com/kisyubetsu/steinsgate/
- 期待値見える化（天井/ゾーン）: https://slotjin.com/zone/steinsgate/
- pacnk 設定判別: https://pacnk.com/slot/tools/sh_steinsgate.html
- パチスロ新台情報2015年一覧: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- 真パチスロ備忘録（2015年当時実戦/朝一ラボメン観測）: https://sin-surobi.com/syutage/13280/
- 真パチスロ備忘録（後年朝一リセット整理）: https://sin-surobi.com/tatimawari/20388/
- A-SLOT（型式表記シュタインズゲートMX）: https://www.a-slot.com/SHOP/oizumi24.html

### 次時系列候補
- 機甲戦記ドラグナー: https://chonborista.com/slot/sammy-slot/12182/
- 百花繚乱サムライガールズ: https://jikyu2000.com/matome/samurai_girls/
- ハイスクールD×D 当時KONAMI記事: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_151027.html

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: INDUSTRY_RETAIL_SINGLE
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- basicPayout: INDUSTRY_DATABASE
- ceilingStructure: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: PARTIAL_RETROSPECTIVE_ANALYSIS
- carryOverBehavior: PARTIAL_RETROSPECTIVE_ANALYSIS
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetNumericData: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: RETROSPECTIVE_ANALYSIS_WITH_CONTEMPORARY_OBSERVATION
- advantageousSectionReset: NOT_APPLICABLE
- 2015-10-26 boundary: OPEN
- retroQaCursor: CURSOR_RESOLUTION_PENDING
