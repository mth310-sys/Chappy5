更新日: 2026-09-10

## 現在地点
- recordCount: **1209**
- latestRecordAdded: **パチスロ 美ラメキ！**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-02_churameki.md`
- chronologicalFrontier: **2018-07-02**
- frontierLatestMachine: **パチスロ 美ラメキ！ — No.1209**
- schema: **resetBehavior v0.7**
- status: **2018-07-02_GROUP_OPEN_4_MACHINES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1208を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1209 `パチスロ 美ラメキ！`を登録。
- PiDEA X、ちょんぼりすた、パチマガスロマガ、HAZUSE、パチセブン等を横断し、導入日・型式/検定・性能コア・resetBehaviorを収集。
- 設定変更/電源OFF→ON時の内部状態・ステージは当時解析でも「調査中」。表記揺れ、型式、メーカー、設定変更/リセット/朝一/据え置き/電源OFF→ON/ガックン/有利区間を変えて再探索後も直接契約を固定できず、一般論で補完せず`UNVERIFIED_AFTER_RESEARCH`を保持。
- 一方、設定変更後1000G以内にBIG当選した場合のクアッドコアランプ専用振り分けは公開値があるためnumericResetDataとして保存。
- 7/2群は`トータル・イクリプスLv.MAX-RT`および同日全メーカー/別スペック監査前なのでCLOSEしない。

## No.1209 — パチスロ 美ラメキ！
- manufacturer: **藤商事**
- releaseDateCanonical: **2018-07-02**
- formalModelName: `ピカれ！アイランドFSA`
- certificationNumber: `7S1690`
- generation/system: **5.9号機 / ART・疑似ボーナス連チャンタイプ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.2 / 99.0 / 100.8 / 103.2 / 106.2 / 112.5%**
- ART初当たり: **1/372.7 / 1/359.4 / 1/343.6 / 1/324.9 / 1/303.4 / 1/273.3**
- 常夏CHANCE: **1/1034.8 / 1/973.2 / 1/903.3 / 1/823.2 / 1/740.2 / 1/621.8**
- base: **47.3～50.4G/50枚**
- ART純増: **約2.0枚/G**
- BIG/HB: **60G・平均約130枚**
- REG: **ベルナビ8回・平均約60枚**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 内部状態/ステージは当時資料で調査中。追加横断後も `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを独立条件として状態/有利区間/ステージを直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: 内部状態/ステージは当時資料で調査中。`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: 通常天井非搭載のため `NOT_APPLICABLE_NO_NORMAL_CEILING`。32G引き戻し状態の変更/据置/純電断別継続契約は未固定。
- mode/state: 設定変更専用モード/朝一専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: 5.9号機ARTとして有利区間を利用するが、設定変更/純電断別処理は `UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits/resetPenalties: 天井短縮・ART直行等の公開恩恵/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/ランプによる変更・据置の確定判別契約は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更後1000G以内BIGのランプ振り分けを保存。setting1=`80/20/-/-`、2=`20/80/-/-`、3=`80/20/-/-`、4=`15/60/25/-`、5=`60/15/25/-`、6=`37.5/37.5/20/5%`（上2/下2/全点灯/全高速）。

## 2018-07-02群監査
### 登録済み
- No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド（山佐）
- No.1207 エルインカ～黄金文明～（KPE / KONAMI）
- No.1208 パチスロ ダンガンロンパ～希望の学園と絶望の高校生～（ニューギン）
- No.1209 パチスロ 美ラメキ！（藤商事）

### 未処理候補
- **パチスロ トータル・イクリプスLv.MAX-RT（SANKYO）** — 2018-07-02候補。型式`パチスロトータル・イクリプスNb`、検定`7S1720`を先行確認済み。
- その他7/2同日機をメーカー別一覧・表記揺れ・別スペックで追加監査する。

### 群判定
- `2018-07-02_GROUP_OPEN_4_MACHINES_PROCESSED`
- トータル・イクリプスLv.MAX-RTと同日全メーカー監査前なのでCLOSEしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_jarinko-chie.md**（じゃりン子チエ）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`（クランキーコンドルX）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は最新キュー優先のためQAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで「調査中」・疑問符・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。
- 同日群の全メーカー/別スペック/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1209を再取得。
2. **1209件 / chronologicalFrontier 2018-07-02 / 7/2群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **パチスロ トータル・イクリプスLv.MAX-RT**をNo.1210候補としてperformance core + resetBehavior v0.7を収集。
4. 7/2群の全メーカー・表記揺れ・別スペック監査後にCLOSED判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`から継続。

## 主要出典 — 取得日 2026-09-10
### No.1209 美ラメキ！
- PiDEA X: https://www.pidea.jp/articles/%E5%A4%9A%E5%BD%A9%E3%81%AA%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%81%A832G%E3%81%AE%E3%83%89%E3%82%AD%E3%83%89%E3%82%AD%E6%84%9F%E3%80%8C%E7%BE%8E%E3%83%A9%E3%83%A1%E3%82%AD%21%E3%80%8D%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B
- PiDEA X（機械選定）: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%BE%8E%E3%83%A9%E3%83%A1%E3%82%AD%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/59634/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/28/a.php
- パチマガスロマガ（50枚G）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/28/c.php
- HAZUSE: https://hazuse.com/machine/pachislot/7S1690/
- パチセブン: https://pachiseven.jp/machines/5464/cutout/9

### 次候補監査
- SANKYO公式: https://www.sankyo-fever.jp/collection/889/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1720/
- すろ・ぱち(解): https://kaiseki.sulopachinews.com/archives/539
