更新日: 2026-09-10

## 現在地点
- recordCount: **1208**
- latestRecordAdded: **パチスロ ダンガンロンパ～希望の学園と絶望の高校生～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-02_danganronpa.md`
- chronologicalFrontier: **2018-07-02**
- frontierLatestMachine: **パチスロ ダンガンロンパ～希望の学園と絶望の高校生～ — No.1208**
- schema: **resetBehavior v0.7**
- status: **2018-07-02_GROUP_OPEN_3_MACHINES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1207を再取得して開始。
- 並行更新により正本がNo.1207 `エルインカ～黄金文明～`まで進行していたため、古い会話地点へ戻らず最新mainを採用。
- `INDEX.md`は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1208 `パチスロ ダンガンロンパ～希望の学園と絶望の高校生～`を7/2群へ登録。
- PiDEA X、ちょんぼりすた、K-Navi、P-WORLD、すろぱちくえすと、すろ・ぱち(解)、ゼンリン検定DB等を横断し、導入日・型式/検定・性能コア・resetBehaviorを収集。
- resetBehaviorは当時のちょんぼりすた比較表で設定変更/電源OFF→ON時の有利区間・状態・ステージが全て「調査中」。機種名表記揺れ、正式型式`～NW`、メーカー名、リセット/朝一/据え置き/電源OFF→ON/ガックン/有利区間を変えて再探索したが、本機固有の確定契約は固定できず、一般論で補完せず`UNVERIFIED_AFTER_RESEARCH`を保持。
- 次候補の事前監査で`美ラメキ！`と`パチスロ トータル・イクリプスLv.MAX-RT`はいずれも2018-07-02導入根拠を取得。7/2群はまだCLOSEしない。

## No.1208 — パチスロ ダンガンロンパ～希望の学園と絶望の高校生～
- manufacturer: **ニューギン**
- releaseDateCanonical: **2018-07-02**
- formalModelName: `ダンガンロンパ～希望の学園と絶望の高校生～NW`
- certificationNumber: `7S1654`
- generation/system: **5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.7 / 98.9 / 100.9 / 103.6 / 105.8 / 106.3%**
- bonus combined: **1/159.5 / 1/154.2 / 1/150.3 / 1/141.6 / 1/134.9 / 1/132.9**
- PVボーナス1: **全設定1/897.8 / 最大209枚**
- PVボーナス2: **1/464.8 → 1/293.9 / 最大159枚**
- チャレンジボーナス: **全設定1/528.5 / 24枚**
- モノクマチャレンジ: **全設定1/897.8 / 30枚**
- ART初当たり: **setting1 1/443.8**。setting2-6独立値は主要資料で固定できず、推測補完しない。
- base: **約32～32.2G/50枚**
- ART: **約1.0枚/G / 前半15G or 20G + 後半平均24G**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 有利区間/内部状態/ステージは当時資料で全て調査中。追加横断後も `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを独立条件として直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: 有利区間/内部状態/ステージは当時資料で全て調査中。`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: 通常ゲーム数天井非搭載のため `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- mode/state: 設定変更専用/朝一専用モード、専用高確率等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: 5.9号機A+ARTで有利区間利用・完走確定状態「ダンガンロンパタイム」の存在は確認。ただし設定変更/純電断別処理は当時資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits/resetPenalties: 設定変更専用の公開恩恵/不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/ランプ/ステージ等の本機固有確定条件・発生率は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開朝一専用数値は固定できず。

## conflicts
- 一部解析ページ見出しに`2018-07-09導入開始`表記があるが、同ページ本文はホール導入日`2018-07-02`。K-Navi、ちょんぼりすた、すろぱちくえすと、Pachislo-dataも7/2で一致するため `CONFLICT_RELEASE_DATE_HEADER_2018_07_09_VS_BODY_AND_MULTI_SOURCE_2018_07_02`として保持し、canonicalは7/2。
- ちょんぼりすた本文のPVボーナス2説明に`1/464.8～1/239.3`というレンジ表記がある一方、同ページ設定別表および複数資料はsetting6 `1/293.9`。`CONFLICT_INLINE_RANGE_TRANSCRIPTION_239_3_VS_TABLE_293_9`として保持し、1/293.9をcanonicalとする。

## 2018-07-02群監査
### 登録済み
- No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド（山佐）
- No.1207 エルインカ～黄金文明～（KPE / KONAMI）
- No.1208 パチスロ ダンガンロンパ～希望の学園と絶望の高校生～（ニューギン）

### 未処理候補
- **パチスロ 美ラメキ！（藤商事）** — ちょんぼりすたで2018-07-02、PiDEA X/グリーンべるとで7月導入予定。次の最優先候補。
- **パチスロ トータル・イクリプスLv.MAX-RT（SANKYO）** — SANKYO公式コレクションは2018.07、HAZUSE/すろ・ぱち(解)で2018-07-02を直接確認。型式`パチスロトータル・イクリプスNb`、検定`7S1720`まで先行取得。
- その他7/2同日機をメーカー別一覧・表記揺れ・別スペックで追加監査する。

### 群判定
- `2018-07-02_GROUP_OPEN_3_MACHINES_PROCESSED`
- 美ラメキ！、トータル・イクリプスLv.MAX-RTおよび同日全メーカー監査前なのでCLOSEしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_jarinko-chie.md**（じゃりン子チエ）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`（クランキーコンドルX）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は最新キューのNo.1208登録と7/2群監査を優先し、QAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は必ず最新HEADを優先し、過去handoffから番号を上書きしない。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。
- 同日群の全メーカー/別スペック/地域差監査後にのみ群をCLOSEする。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1208を再取得。
2. **1208件 / chronologicalFrontier 2018-07-02 / 7/2群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **パチスロ 美ラメキ！**をNo.1209候補としてperformance core + resetBehavior v0.7を収集。
4. 続いて**パチスロ トータル・イクリプスLv.MAX-RT**を処理。型式`パチスロトータル・イクリプスNb` / 検定`7S1720` / 2018-07-02候補を先行確認済み。
5. 7/2群の全メーカー・表記揺れ・別スペック監査後にCLOSED判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-08_cranky-condor-x.md`（クランキーコンドルX）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1208 ダンガンロンパ
- PiDEA X: https://www.pidea.jp/articles/%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%81%A8ART%E3%81%8C%E3%83%80%E3%83%B3%E3%82%AC%E3%83%B3%E3%83%AB%E3%83%BC%E3%83%97%EF%BC%81%E3%80%8C%E3%83%80%E3%83%B3%E3%82%AC%E3%83%B3%E3%83%AD%E3%83%B3%E3%83%91%E3%80%8D%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/60259/
- K-Navi: https://p-kn.com/slot/3016/
- P-WORLD: https://www.p-world.co.jp/machine/database/8663
- すろぱちくえすと: https://www.slopachi-quest.com/article/danganronpa/
- すろ・ぱち(解): https://kaiseki.sulopachinews.com/archives/531
- ゼンリン検定DB: https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2021
- 中一商事: https://www.nakaiti.com/html/sNyugin023.html

### 次候補監査
- 美ラメキ！ / ちょんぼりすた: https://chonborista.com/slot/fuji-slot/59634/
- 美ラメキ！ / PiDEA X: https://www.pidea.jp/articles/%E5%A4%9A%E5%BD%A9%E3%81%AA%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%81%A832G%E3%81%AE%E3%83%89%E3%82%AD%E3%83%89%E3%82%AD%E6%84%9F%E3%80%8C%E7%BE%8E%E3%83%A9%E3%83%A1%E3%82%AD%21%E3%80%8D%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B
- 美ラメキ！ / グリーンべると: https://web-greenbelt.jp/00010452/
- トータル・イクリプスLv.MAX-RT / SANKYO公式: https://www.sankyo-fever.jp/collection/889/
- トータル・イクリプスLv.MAX-RT / HAZUSE: https://hazuse.com/machine/pachislot/7S1720/
- トータル・イクリプスLv.MAX-RT / すろ・ぱち(解): https://kaiseki.sulopachinews.com/archives/539
