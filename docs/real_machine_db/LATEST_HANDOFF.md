更新日: 2026-09-13

## 現在地点
- recordCount: **1524**
- latestRecordAdded: **パチスロ バイオハザード RE:2 — No.1524**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-10-03_pachislot-biohazard-re2.md`
- chronologicalFrontier: **2022-10-03**
- frontierLatestMachine: **パチスロ バイオハザード RE:2 — No.1524**
- schema: **resetBehavior v0.7**
- status: **2022-10-03_GROUP_OPEN_2_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1523 `パチスロハードボイルド` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の2022-10-03群を継続し、No.1524 `パチスロ バイオハザード RE:2` を性能コア＋resetBehavior v0.7で追加。
- 遡及QAでは `2007-03-04_gaogao-festival-s.md` を再探索し、性能側 `coreStatus: PARTIAL` を維持したまま reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- 10/3群known候補は `パチスロハードボイルド`、`パチスロ バイオハザード RE:2`、`パチスロRYUKYU BEAT-30`、`S笑ゥせぇるすまん4` の4機。No.1524まで2/4処理済み。群はまだOPEN。

## No.1524 — パチスロ バイオハザード RE:2
- path: `docs/real_machine_db/machines/2022-10-03_pachislot-biohazard-re2.md`
- manufacturer: **アデリオン（ユニバーサルエンターテインメント系）**
- formalModel: **SバイオハザードRE:2 XB**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-10-03**
- generation/system: **6.5号機 / 疑似ボーナス+AT / CZ経由 / G数上乗せAT**
- payout: **98.0 / 99.1 / 101.0 / 105.1 / 107.9 / 110.0%**（設定1〜6）
- AT初当り: **1/343.4 / 331.6 / 314.1 / 276.8 / 256.2 / 242.1**
- baseGamesPer50: **約36.0G/50枚**
- netIncrease: **HAZARD RUSH約1.0枚/G / 疑似ボーナス約4.5枚/G**
- basicPayout: **疑似ボーナス約100枚 / HAZARD RUSH初期40G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_LOW_LEVEL_DETAILS**
- confidence: **INDUSTRY / ANALYSIS_HIGH**

### resetBehavior v0.7 — No.1524
- **設定変更**: 有利区間RESET / 1000G天井RESET / CZスルー回数RESET後にスルー天井再抽選 / 内部状態RESET / 必ず30Gの武器高確から開始。
- **据え置き**: 天井G数 / CZスルー回数 / 内部状態 / 有利区間CARRY_OVERとして保存。純電断の直接比較資料と整合。
- **純電源OFF→ON**: 天井G数 / CZスルー回数 / 内部状態 / 有利区間CARRY_OVER。表示ステージは警察署系へ戻る資料があり、内部状態と表示を分離。
- **通常ゲーム数天井**: 通常時1000G消化後、リプレイまたはレア役成立でボーナス+AT。
- **CZスルー天井**: 最大7スルー、8回目のG BATTLEでボーナス+AT。
- **設定変更専用固定短縮天井**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一恩恵**: 必ず30G武器高確。
- **変更判別**: 有利区間ランプでは判別不可。設定変更/純電断とも警察署系開始資料があり開始ステージ単独でも不可。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 武器高確30Gを保存。設定変更専用の初当り期待度/CZ当選率等は高信頼公開値を固定できず。

## conflicts / definition notes — No.1524
- メーカー表記は一般DBで「エンターライズ」が混在するが、検定通過・業界発表では型式 `SバイオハザードRE:2 XB` をアデリオンとしているためcanonicalはアデリオン。グループ/流通表記差として扱う。
- 天井恩恵の「AT当選」「ボーナス+AT」は、初当りが必ずボーナス経由ATであるため実質同一フローとして整理。
- numeric inspectionCodeは今回固定できず、型式名のみ確定。

## 遡及 resetBehavior QA — ガオガオフェスティバルS
- path: `docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`
- 既存 `coreStatus: PARTIAL` は維持。
- RT/ART/AT、通常時モード、ゲーム数天井は非該当。
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナス、告知待ち状態、BGM履歴、本機固有ガックン/初期出目は、公式・当時業界・P-WORLD・旧解析・後年回顧を再探索しても直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的5号機ノーマルの挙動からは補完していない。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03_wild7.md`（ワイルド7）**。ガオガオフェスティバルSの追加コミット後、実レコード追加履歴で次に確認できる2007-03レコード。

## 2022-10-03群 — OPEN 2/4 known
1. `パチスロハードボイルド` — **No.1523 処理済み**
2. `パチスロ バイオハザード RE:2` — **No.1524 処理済み**
3. `パチスロRYUKYU BEAT-30` — **次回 No.1525候補**
4. `S笑ゥせぇるすまん4` — 未処理

群監査メモ:
- 当時導入予定一覧で上記4機を2022-10-03 known候補として固定済み。
- 残り2機処理後にPB・派生・別型式・地域先行・延期/段階導入を再監査し、CLOSED可否を判定する。

## 次回本線の再開地点
- **No.1525候補 `パチスロRYUKYU BEAT-30` — 2022-10-03。**
- No.1523/1524の性能コアはやり直さず、No.1525から性能コア＋resetBehavior v0.7を収集する。
- その後 `S笑ゥせぇるすまん4` を処理し、10/3群を再監査する。
- 遡及QAは `2007-03_wild7.md` から継続。

## GitHub保存
- No.1524追加 commit: `b06edfb316c17efd67e9b1eb5890c494d1a1245a`
- ガオガオフェスティバルS QA commit: `2fd00e2bf9644d91ea3abe55e30c52eeb44c692e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1524 パチスロ バイオハザード RE:2
- https://news.p-world.co.jp/articles/21195/nippon
- https://news.p-world.co.jp/articles/21278/greenbelt
- https://www.p-world.co.jp/machine/database/9691
- https://p.hisshobon.jp/machine/3963/1/90049
- https://nana-press.com/kaiseki/machine/438/
- https://nana-press.com/kaiseki/machine/438/11888/
- https://1geki.jp/slot/s_bhr2/3/
- https://pachiseven.jp/machines_v2/6600

### 遡及QA ガオガオフェスティバルS
- https://www.sankyo-fever.jp/collection/529/
- https://news.p-world.co.jp/articles/2040/greenbelt
- https://www.p-world.co.jp/machine/database/4580
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/07/h.php
- https://pachinko.hatenablog.jp/entry/2007/03/gaogao-festival-S
