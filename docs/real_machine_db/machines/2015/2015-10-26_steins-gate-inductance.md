# 想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス

machineName: 想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス
manufacturer: オーイズミ
releaseDate: 2015-10-26
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: 新基準AT / 疑似ボーナス + 自力CZ + エピソード進行型AT
formalModelName: シュタインズゲートMX
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## identity
- オーイズミの2015年プレス発表を報じたグリーンべるとで本機の発表・製品存在を確認。
- パチビー、K-Navi、2015年導入一覧でホール導入開始 **2015-10-26** が一致。
- 中古実機流通資料では型式表記 **シュタインズゲートMX** を確認。公式検定資料を今回固定できないため identity confidence は `INDUSTRY_RETAIL_SINGLE` とする。
- 検定番号は「シュタインズゲートMX / オーイズミ / 5S / 検定番号 / 型式」等へ検索語を変更して再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.2% |
| 3 | 98.9% |
| 4 | 103.3% |
| 5 | 105.9% |
| 6 | 110.5% |
- すろぱちくえすと、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | 疑似ボーナス初当たり | AT初当たり |
|---:|---:|---:|
| 1 | 1/439.9 | 1/661.7 |
| 2 | 1/422.8 | 1/622.1 |
| 3 | 1/420.4 | 1/595.6 |
| 4 | 1/386.3 | 1/505.1 |
| 5 | 1/376.2 | 1/461.1 |
| 6 | 1/357.6 | 1/404.1 |
- すろぱちくえすと、pacnkで一致。
- 主要初当たり比較値は疑似ボーナスとATを定義分離して双方保存。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約48G/50枚**。
- 当時解析資料で確認。
- confidence: ANALYSIS_HIGH

## netIncrease
- 疑似ボーナス/AT: **約2.2枚/G**。
- パチビーと当時解析で一致。
- confidence: INDUSTRY_DATABASE + ANALYSIS_HIGH

## basicPayout
- BIG BONUS: **70G / 約154枚**。
- REGULAR BONUS: **24G / 約53枚**。
- ENDING BIG BONUS: **40G / 約88枚**。
- PREMIUM BIG BONUS: **200G / 約440枚 + AT確定**。
- AT「シュタインズ・ゲート」: **1セット52G+α**、ゲーム数上乗せ + 継続抽選 + セットストック型。
- パチビーの基本スペックをcanonicalとする。
- confidence: INDUSTRY_DATABASE

## modeSpecificMinimumData
- CZ「IBN5100探索モード」: 12/24/36G+α、ボーナス期待度約25%。
- 上位CZ「オペレーション・ウルド」: 10/20/30G/∞、ボーナス期待度約50%。
- IBN5100探索モードは全設定共通で約1/69.3とする当時解析あり。
- 天井は固定G数ではなく **IBN5100探索モード19連続失敗後の20回目で疑似ボーナス確定**。平均的な到達は約1750〜1800G前後とする攻略推定があるが、固定天井G数としては保存しない。
- AT終了後200G以内（CZ滞在Gはカウント外）に疑似ボーナスへ当選するとATへ書き換える「タイムリープ」ゾーンあり。発動時は初回AT継続率66.6/66.7%以上とする複数解析あり。
- 通常時は100G消化ごとに高確/超高確移行抽選があり、通常滞在時 高確26.7% / 超高確3.3%、高確滞在時 超高確10%（全設定共通）。これは通常時状態仕様であり、設定変更時初期振り分けではない。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_REQUIRED_RESEARCH
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 後年の朝一実戦整理では **朝一ラボメン全消灯 = リセット、ラボメン点灯 = 据え置き濃厚** とされており、設定変更時は少なくとも液晶ラボメン進捗が初期化される挙動を支持。
- 本機の天井はIBN5100探索モードの連続失敗回数で管理されるが、**設定変更時にIBNスルー回数天井がRESETされるか**を本機固有の直接資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の高確/超高確初期振り分け、朝一専用モード振り分けも `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 朝一ラボメン点灯が据え置き濃厚とされるため、**ラボメン進捗の据え置きCARRYOVER_SUPPORTED**。
- IBNスルー回数、AT後200Gタイムリープ残りG、通常時内部状態について、据え置き時の保持を直接列挙する資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 「電源OFF→ONのみ」と「設定変更」を本機固有で直接比較する当時資料を、表記揺れ・型式名・朝一・据え置き・電断等へ検索を広げても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと純電断を自動で同義扱いしない。

### gameCounterReset
- 固定G数天井: **NOT_APPLICABLE**（天井はIBN連続失敗回数）。
- settingChange IBN failure counter: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver IBN failure counter: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle IBN failure counter: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常天井: **IBN5100探索モード19連続失敗後、20回目で疑似ボーナス確定**。
- 設定変更専用の固定短縮G数天井: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時のIBN回数天井リセット契約そのものは `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset
- 通常時に状態（通常/高確/超高確）は存在するが、設定変更時専用モード・初期モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- ATの継続モードは本DBの朝一リセット粒度では通常時モードと混同しない。

### stateAfterReset
- 設定変更時の初期高確/超高確振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 通常時100Gごとの状態移行率は取得済みだが、朝一初期状態とは定義分離。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更そのものによる短縮天井、朝一天国、強制CZ/AT等の固定恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日AT終了後200G以内が据え置かれる場合は朝一狙い価値が生じ得るとする実戦整理があるが、設定変更恩恵ではなく据え置き側の朝一価値として扱う。

### resetPenalties
- 設定変更時にラボメン表示/進捗が全消灯へ戻るため、前日のラボメン収集進捗を利用する据え置き狙い価値は失われる。
- IBN天井スルー回数の喪失は直接確認できていないため不利要素として断定しない。

### resetDetection
- 後年の朝一実戦整理: **朝一ラボメン全消灯 → リセット示唆 / ラボメン点灯 → 据え置き濃厚**。
- 同資料で **ガックン判別不可** とされる。
- 2015年当時の実戦記事でも朝一0Gでラボメンが集まっている台を確認し、据え置き引継ぎの可能性を指摘しており、後年整理と整合する。
- ホール側の1G回し等による対策余地があるため確定判別とはしない。
- confidence: RETROSPECTIVE_ANALYSIS + CONTEMPORARY_OBSERVATION

### numericResetData
- fixed reset-shortened G ceiling: **NOT_APPLICABLE / NONE_CONFIRMED**。
- public reset-mode distribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- public reset-state distribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- public reset-specific hit rate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- morning detection: labmen all off = reset indication; lit = carryover indication; gakkun unavailable.

## conflicts
- `CEILING_UNIT_DEFINITION`: 本機天井はIBN CZ回数管理。約1750〜1800G/1800G弱という資料はCZ出現率と平均消化からの目安で、固定G数天井ではないため平均せず参考値として分離。
- `TITLE_OR_MODEL_NOT_SEQUEL`: 2017年「ランヴォア」および2022年「SLOT STEINS;GATE」は別機種。検索結果に混入しやすいため、本レコードへ両機のresetBehavior/スペックを転記しない。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change IBN failure-count handling: `UNVERIFIED_AFTER_RESEARCH`。
- pure power-cycle behavior: `UNVERIFIED_AFTER_RESEARCH`。
- reset initial state/mode numeric distribution: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08
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
