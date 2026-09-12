更新日: 2026-09-13

## 現在地点
- recordCount: **1517**
- latestRecordAdded: **パチスロペルソナ5 — No.1517**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-09-05_persona5.md`
- chronologicalFrontier: **2022-09-05**
- frontierLatestMachine: **パチスロペルソナ5 — No.1517**
- schema: **resetBehavior v0.7**
- status: **2022-09-05_GROUP_OPEN_3_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1516 `ヴィーナスゾーン` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1517 `パチスロペルソナ5` を性能コア＋resetBehavior v0.7で追加。
- P-BOMB、HAZUSE、1geki、なな徹、ちょんぼりすた、スロットセブン、スロパチクエスト、フリック7、イチカツ、当時実戦記事を横断。
- 2022-09-05導入、型式 `S パチスロペルソナ5 FR`、検定番号 `2S0330`、ロデオ製造/サミー販売、6.5号機A+AT、設定別機械割/初当り/AT、35.2G/50枚、純増約2.0枚/G、PC15G、AT30G+αを照合した。
- resetBehaviorは設定変更で有利区間/天井/内部モード/内部状態RESET、据え置き・純電源OFF→ONでCARRY_OVERを複数解析で固定。
- 設定変更後のみPCスルー天井が通常最大7回→最大5回へ短縮。設定変更後初回ATでは通常抽選とは別に75%ループストック獲得抽選を行う。
- 公開朝一数値として追加75%ループストック当選率 `設定1 1.6 / 2 2.3 / 3 10.9 / 4 5.1 / 5 11.7 / 6 12.5%` を複数資料で照合。
- 設定変更後「高確スタート」はスロパチクエストに明記があるが、HAZUSE等は内部状態RESETまでの記載で開始状態を固定していないため `ANALYSIS_SINGLE_NOT_CANONICAL`。
- 有利区間ランプ非搭載、設定変更時リールガックン非発生のため見た目の朝一判別は困難。PCスルー回数や前日+当日ゲーム数による天井挙動は据え置き推測材料。

## No.1517 — パチスロペルソナ5
- path: `docs/real_machine_db/machines/2022-09-05_persona5.md`
- manufacturer: **ロデオ製造 / サミー販売**
- formalModel: **S パチスロペルソナ5 FR**
- inspectionCode: **2S0330**
- releaseDate: **2022-09-05**
- generation/system: **6.5号機 / A+AT / リアルボーナス+擬似ボーナス+セット数管理AT**
- payoutRate: **設定1 97.7 / 2 98.7 / 3 100.9 / 4 103.1 / 5 105.4 / 6 108.1%**
- PC+AT初当り: **1/127.5 / 1/125.2 / 1/122.0 / 1/118.6 / 1/116.0 / 1/111.0**
- AT初当り: **1/338.8 / 1/322.6 / 1/321.1 / 1/290.0 / 1/289.7 / 1/251.5**
- baseGamesPer50: **約35.2G/50枚（設定1）**
- netIncrease: **PC/ATとも約2.0枚/G**
- basicPayout: **PC15G / AT1セット30G+α / AT平均約420枚（設定1・解析掲載値）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MINOR_SOURCE_LIMITS**
- confidence: **INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET**

### resetBehavior v0.7 — No.1517
- **設定変更**: 有利区間、天井、内部モード、内部状態RESET。PCスルー天井は最大5回へ短縮。初回ATで追加75%ループストック抽選。
- **据え置き**: 天井、有利区間、内部モード、内部状態CARRY_OVER。
- **純電源OFF→ON**: 天井、有利区間、内部モード、内部状態CARRY_OVER。
- **ゲーム数/天井**: PC間最大400Gで超高確、AT間699G以降のPCでAT、999G+αでAT直撃、通常PC最大7回/設定変更後最大5回。
- **モード/状態**: 設定変更でRESET、据え置き/純電断でCARRY_OVER。設定変更後高確スタートは単一系統記載のためcanonicalにはしない。
- **有利区間**: 設定変更RESET / 据え置き・純電断CARRY_OVER。有利区間ランプ非搭載。
- **朝一恩恵**: PCスルー天井短縮、設定変更後初回ATの追加75%ループストック抽選。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: 有利区間ランプ不可、ガックン非発生。スルー回数/前日+当日ゲーム数は据え置き推測材料。
- **公開朝一数値**: 追加75%ループストック当選率 = 設定1 1.6 / 2 2.3 / 3 10.9 / 4 5.1 / 5 11.7 / 6 12.5%。

## 2022-09-05群 — OPEN 3/6 known
1. `スーパーリオエース` — **No.1515 処理済み**
2. `ヴィーナスゾーン` — **No.1516 処理済み**
3. `パチスロペルソナ5` — **No.1517 処理済み**
4. `ボンバーガール` — **No.1518候補 / 未処理**
5. `Sアバサー` — 未処理
6. `CREA～Newクレアの秘宝伝～` — 未処理

群監査メモ:
- Greenbelt/P-WORLD由来の2022-09-05群6機knownを継承。
- 全known完了後にPB・別型式・地域先行・延期/段階導入を再監査し、追加候補があれば6機固定とせず増補する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `ニューハナハナ-30`: mainで既に `COMPLETE_WITH_SOURCE_LIMITS` のため重複処理しない。
- `パチスロあっぱれ応援団`: 再QA済み。coreStatus `COMPLETE_CORE`維持、resetBehaviorQA `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`（ガオガオフェスティバルS）**。

## 次回本線の再開地点
- **No.1518候補 `ボンバーガール` — 2022-09-05**。
- 既存No.1515〜1517の性能コアはやり直さず、No.1518から性能コア＋resetBehavior v0.7を収集する。
- 2022-09-05群を順番に処理し、全known完了後にPB・派生・地域先行・延期を横断してCLOSED可否を判定する。

## GitHub保存
- No.1517追加 commit: `fe56f5e385b8438959b9a14cabc421605b788dae`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1517 パチスロペルソナ5
- https://p-bomb.co.jp/industry/new-machine/4572/
- https://hazuse.com/machine/pachislot/2S0330/
- https://hazuse.com/machine/pachislot/2S0330/genre/207/
- https://1geki.jp/slot/s_persona5/
- https://1geki.jp/slot/s_persona5/3/
- https://nana-press.com/kaiseki/machine/407/10251/
- https://chonborista.com/slot/sammy-slot/170099/
- https://slot-seven.com/per_so-tenzyou/
- https://www.slopachi-quest.com/article/persona5-tenjou/
- https://www.slopachi-quest.com/article/persona5-settei/
- https://flick7.net/slot/persona5__k.php
- https://ichikatsu.com/persona5/
- https://a102810281028.hatenablog.com/entry/2022/09/06/215117

### 2022-09-05群
- https://news.p-world.co.jp/articles/21494/greenbelt
