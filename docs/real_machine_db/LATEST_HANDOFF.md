更新日: 2026-09-10

## 現在地点
- recordCount: **1222**
- latestRecordAdded: **TOWSER（トウサー）**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-08-06_towser.md`
- chronologicalFrontier: **2018-08-06**
- frontierLatestMachine: **TOWSER（トウサー） — No.1222**
- schema: **resetBehavior v0.7**
- status: **2018-08-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1221を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 1221件 / 2018-08-06群OPENを確認し、未処理先頭TOWSERを既存重複なし確認後No.1222として登録。
- 日刊スポーツ導入カレンダーと当時解析でTOWSERの2018-08-06導入、JPS、ノーマル機を固定。
- TOWSERはBIG312枚、REG104枚、通常ゲーム数天井非搭載。設定別BIG/REG/合算、打ち方別機械割、打ち方別50枚ベースを取得。
- 精密な完全取得機械割は97.65/99.01/101.64/103.87/105.89/110.35%。適当打ちは95.47/96.87/99.55/101.85/103.92/108.40%。
- BIGは1/281.27～1/234.06、REGは1/451.97～1/270.81、合算は1/173.38～1/125.55。
- 50枚ベースは適当打ち33.3～34.1G、完全取得35.4～36.4G。手順差を競合扱いせず定義差として分離。
- 正式型式名/検定番号は検索語・資料系統を変更しても高信頼固定できずUNVERIFIED_AFTER_RESEARCH。
- resetBehaviorはTOWSER/トウサー/JPS/オリスロAA/MONASLOT/あっぱれPREGOの表記揺れと、設定変更/朝一/据え置き/電源OFF ON/ガックン等を組み替えて再探索したが、設定変更・据え置き・純電断の本機固有直接契約は固定できずUNVERIFIED_AFTER_RESEARCH系で独立管理。
- 通常ゲーム数天井はないため天井カウンタ/短縮天井はNOT_APPLICABLE。本機固有の朝一専用モード、優遇/不利、公開リセット数値はNONE_CONFIRMED_AFTER_RESEARCH。
- 有利区間は一般5.9号機論から付与せず、公開ゲーム性がリアルボーナスのみのノーマル機であることに限定して `NOT_APPLICABLE_TO_PUBLISHED_NORMAL_TYPE_GAMEPLAY` とした。

## No.1222 — TOWSER（トウサー）
- manufacturer: **JPS**
- releaseDateCanonical: **2018-08-06**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / 完全告知 / 技術介入**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutFullAcquisition: **97.65 / 99.01 / 101.64 / 103.87 / 105.89 / 110.35%**
- payoutFreePlay: **95.47 / 96.87 / 99.55 / 101.85 / 103.92 / 108.40%**
- BIG: **1/281.27 / 1/275.30 / 1/267.49 / 1/260.06 / 1/254.02 / 1/234.06**
- REG: **1/451.97 / 1/399.60 / 1/358.12 / 1/319.69 / 1/299.25 / 1/270.81**
- bonusCombined: **1/173.38 / 1/163.00 / 1/153.12 / 1/143.40 / 1/137.39 / 1/125.55**
- baseFreePlay: **33.3 / 33.5 / 33.5 / 33.6 / 34.0 / 34.1G/50枚**
- baseFullAcquisition: **35.4 / 35.6 / 35.7 / 35.8 / 36.2 / 36.4G/50枚**
- basicPayout: **BIG312枚 / REG104枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。純電断を自動転記しない。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounter/ceiling: 通常ゲーム数天井なし。天井カウンタ・短縮天井はNOT_APPLICABLE。
- mode/state: 朝一専用モードはNONE_CONFIRMED_AFTER_RESEARCH、本機固有状態差はUNVERIFIED_AFTER_RESEARCH。
- advantageousSection: **NOT_APPLICABLE_TO_PUBLISHED_NORMAL_TYPE_GAMEPLAY**。一般論から補完しない。
- resetBenefits/penalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン/初期出目/Luckyランプ等による変更判別は**UNVERIFIED_AFTER_RESEARCH**。通常の設定推測要素とは分離。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-08-06群監査
### 登録済み
- No.1217 ハイカ101 — 2018-08-06。
- No.1218 花人-はなんちゅ- — 2018-08-06。
- No.1219 クレアの秘宝伝 女神の夢と魔法の遺跡 — 2018-08-06。
- No.1220 クロノス～刻の支配者～ — 2018-08-06。
- No.1221 パチスロ ウィザード・バリスターズ～弁魔士セシル～ — 2018-08-06。
- No.1222 TOWSER（トウサー） — 2018-08-06。

### 群判定
- `2018-08-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 日刊スポーツ導入カレンダーで8/6群に上記6機を確認し、当時解析側の2018年導入一覧とも照合。
- TOWSERはMONASLOT/あっぱれ!PREGOと同スペックのオリスロAA一般販売版だが、PB兄弟機を今回の8/6新規別導入として重複追加しない。
- 8/13の独立パチスロ導入群は今回の横断検索で固定できず、次に業界カレンダーで明示される群は2018-08-20。

## 次の時系列群
- nextChronologicalGroup: **2018-08-20**
- candidate1: **パチスロ蒼き鋼のアルペジオ‐アルス・ノヴァ‐ Mental Model ver.**（サミー）
- candidate2: **ルーレットクイーン‐女神の羅針盤‐**（コナミアミューズメント）
- 日刊スポーツ2018-08-10導入カレンダーで両機を8/20パチスロ群として掲載。
- 次回は候補1から既存重複・正式型式・導入日を確認し、8/20群をOPENして収集する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08-28_taiho-shichauzo.md**（逮捕しちゃうぞ）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存性能コアおよびボーナス確率CONFLICTは変更せず、reset側のみ別管理。
- 設定変更時の無限RT「特売タイム」/成立済みボーナス状態はUNVERIFIED_AFTER_RESEARCH。
- 据え置きと純電源OFF→ONは同義扱いせず双方 `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 通常天井/短縮天井/朝一専用モード/恩恵/不利/公開朝一数値は再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
- advantageousSectionReset: **NOT_APPLICABLE**（制度導入前）。
- Git追加履歴を確認し、逮捕しちゃうぞ追加commit直後のhandoff更新後、次の実機追加は「球児」。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-09_kyuji.md`（球児）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 技術介入機では適当打ち/小役狙い/完全攻略などの機械割・ベース定義を混同しない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1222を再取得。
2. **1222件 / chronologicalFrontier 2018-08-06 / 8/6群CLOSED**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **パチスロ蒼き鋼のアルペジオ‐アルス・ノヴァ‐ Mental Model ver.**をNo.1223候補として既存重複・正式型式・導入日を照合し、性能コア+resetBehavior v0.7を収集。
4. 続いてルーレットクイーンを監査し、8/20群の漏れを横断確認する。
5. 遡及QAは `docs/real_machine_db/machines/2006-09_kyuji.md`（球児）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1222 TOWSER
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201807270000405.html
- すろぱちくえすと基本: https://www.slopachi-quest.com/article/towser/
- すろぱちくえすと設定: https://www.slopachi-quest.com/article/towser-settei/
- すろぱちくえすと小役/コイン持ち: https://www.slopachi-quest.com/article/towser-koyaku/
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/37/a.php
- パチマガスロマガ精密表: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/37/h.php
- パチセブン回顧: https://pachiseven.jp/articles/detail/11436

### 次群監査
- 日刊スポーツ導入カレンダー（2018-08-10）: https://www.nikkansports.com/amusement/pachislot/news/201808100000381.html

### 逮捕しちゃうぞ reset QA
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/42/a.php
- 悠遊道: https://www.pachinko-road.com/column/27129/
- パチセブン IGT回顧: https://pachiseven.jp/articles/detail/13009
- A-SLOT実機資料（ホール朝一根拠には不採用）: https://www.a-slot.com/SHOP/igt4.html
