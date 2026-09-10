更新日: 2026-09-10

## 現在地点
- recordCount: **1210**
- latestRecordAdded: **パチスロ トータル・イクリプスLv.MAX-RT**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-02_total-eclipse-lv-max-rt.md`
- chronologicalFrontier: **2018-07-02**
- frontierLatestMachine: **パチスロ トータル・イクリプスLv.MAX-RT — No.1210**
- schema: **resetBehavior v0.7**
- status: **2018-07-02_GROUP_OPEN_5_MACHINES_PROCESSED_AUDIT_PENDING**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1209を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1210 `パチスロ トータル・イクリプスLv.MAX-RT`を登録。
- SANKYO公式、グリーンべると、HAZUSE、パチマガスロマガ、すろ・ぱち(解)、すろぱちくえすと等を横断。
- 設定変更時`RT状態リセット / 基地ステージ / 演出モード=ミドル`、純電源OFF→ON時`RT・ステージ・演出モード引継ぎ`を本機固有資料で直接確認。長時間OFF時は基地ステージ/ミドルへ変化する注記も保存。
- 天井非搭載。設定変更専用の朝一当選率/モード振り分け/ガックン率は再探索後も公開値を固定できず、推測値は入れていない。
- 設定5 CB確率は複数資料`1/297`に対し、みんスロのみ`1/257`のため`CONFLICT_CB_SETTING5`として保持。manufacturerも一部二次資料のビスティ表記に対し、SANKYO公式/業界/複数解析一致を優先してSANKYOをcanonical。
- 7/2群は主要5機を処理したが、全メーカー・表記揺れ・別スペック・地域差の最終横断監査前なのでCLOSEしない。

## No.1210 — パチスロ トータル・イクリプスLv.MAX-RT
- manufacturer: **SANKYO**
- releaseDateCanonical: **2018-07-02**
- formalModelName: `パチスロトータル・イクリプスNb`
- certificationNumber: `7S1720`
- generation/system: **5.9号機 / A+RT**
- settings: **1 / 2 / 5 / 6**
- payout: **96.9 / 99.9 / 103.6 / 110.0%**
- BIG合成: **全設定1/468**
- CB: **1/496 / 1/375 / 1/297 / 1/200**（設定5に1/257のsecondary conflictあり）
- ボーナス合算: **1/240 / 1/208 / 1/182 / 1/140**
- base: **約32.0G/50枚**
- RT純増: **約0.7枚/G**
- BIG: **約240枚**
- CB: **最大約125枚**
- RT: **100 / 200 / 400G**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: `RT RESET / 基地ステージ / 演出モード=ミドル`。
- carryOver: 据え置きを純電断なしの独立条件で直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: `RT / ステージ / 演出モード CARRYOVER`。ただし長時間OFF時は基地ステージ/ミドルへ変化する注記あり。
- gameCounter/ceiling: 通常天井非搭載。設定変更時RTリセット、純電断RT引継ぎを直接確認。
- mode/state: 出玉に関わる朝一専用内部モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: A+RTの主ゲームシステムとしては `NOT_APPLICABLE_TO_PRIMARY_RT_SYSTEM`。一般論補完なし。
- resetBenefits: 天井短縮/朝一ボーナス優遇/RT直行等 `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 前日RT残存時も設定変更でRTリセット。
- resetDetection: HAZUSEは`RT状態以外で変更判別困難`。別解析は`ガックンする可能性有り`だが率・確定性不明のため`POSSIBLE_GAKKUN_NONDETERMINISTIC`。
- numericResetData: 公開朝一当選率/専用モード振り分け/ガックン率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2018-07-02群監査
### 登録済み
- No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド（山佐）
- No.1207 エルインカ～黄金文明～（KPE / KONAMI）
- No.1208 パチスロ ダンガンロンパ～希望の学園と絶望の高校生～（ニューギン）
- No.1209 パチスロ 美ラメキ！（藤商事）
- No.1210 パチスロ トータル・イクリプスLv.MAX-RT（SANKYO）

### 群判定
- `2018-07-02_GROUP_OPEN_5_MACHINES_PROCESSED_AUDIT_PENDING`
- 次回、7/2同日全メーカー・表記揺れ・別スペック・地域差を最終監査。漏れがなければCLOSED化し、次の日付群へ進む。

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
- 同日群は全メーカー/別スペック/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1210を再取得。
2. **1210件 / chronologicalFrontier 2018-07-02 / 7/2群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. 2018-07-02群の全メーカー・表記揺れ・別スペック・地域差を最終監査する。
4. 漏れがなければ`2018-07-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`へ更新し、次の日付群の最古未処理機種を特定してNo.1211候補として進む。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`から継続。

## 主要出典 — 取得日 2026-09-10
### No.1210 トータル・イクリプスLv.MAX-RT
- SANKYO公式: https://www.sankyo-fever.jp/collection/889/
- グリーンべると: https://web-greenbelt.jp/00010455/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1720/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/49/a.php
- すろ・ぱち(解): https://kaiseki.sulopachinews.com/archives/539
- すろぱちくえすと: https://www.slopachi-quest.com/article/total-eclipse-rt/
- 設定判別: https://www.slopachi-quest.com/article/total-eclipse-maxrt-settei/
- CONFLICT secondary: https://minslo.com/%E3%83%88%E3%83%BC%E3%82%BF%E3%83%AB%E3%83%BB%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%97%E3%82%B9lv-max%E2%80%90rt/
