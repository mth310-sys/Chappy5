更新日: 2026-09-13

## 現在地点
- recordCount: **1516**
- latestRecordAdded: **ヴィーナスゾーン — No.1516**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-09-05_venus-zone.md`
- chronologicalFrontier: **2022-09-05**
- frontierLatestMachine: **ヴィーナスゾーン — No.1516**
- schema: **resetBehavior v0.7**
- status: **2022-09-05_GROUP_OPEN_2_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1515 `スーパーリオエース` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1516 `ヴィーナスゾーン` を性能コア＋resetBehavior v0.7で追加。
- パイオニア公式、PiDEA、HAZUSE、なな徹、ちょんぼりすた、イチカツ、クオぱち、K-Naviを横断。2022-09-05導入、型式 `SヴィーナスゾーンV2`、検定番号 `1S1922`、6.2号機リノタイプ、設定別出玉率/初当り/ボーナス合算、39.4G/50枚、BIG約126枚/REG約61枚を照合した。
- なな徹で本機は有利区間非搭載を直接確認。天井も非搭載のため、ゲーム数天井・短縮天井・有利区間リセット契約は `NOT_APPLICABLE`。
- 設定変更/据え置き/純電源OFF→ON時のVゾーン状態・成立済みボーナス等の機種固有契約は、表記揺れ・正式型式・メーカー・朝一/リセット/据え置き/電断/ガックンまで検索語を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたの朝一比較表も設定変更時/電源OFF→ON時の天井・内部状態・ステージを「調査中」としており、一般論からの補完は行っていない。

## No.1516 — ヴィーナスゾーン
- path: `docs/real_machine_db/machines/2022-09-05_venus-zone.md`
- manufacturer: **パイオニア**
- formalModel: **SヴィーナスゾーンV2**
- inspectionCode: **1S1922**
- releaseDate: **2022-09-05**
- generation/system: **6.2号機 / リノタイプ・リアルボーナス + Vゾーン**
- payoutRate: **設定1 96.8 / 2 98.2 / 3 100.0 / 4 103.0 / 5 106.0 / 6 108.8%**
- 初当り: **1/580.9 / 1/552.2 / 1/515.8 / 1/461.3 / 1/413.0 / 1/374.1**
- ボーナス合算: **1/84.5 / 1/80.7 / 1/76.0 / 1/68.9 / 1/62.6 / 1/57.6**
- baseGamesPer50: **39.4G/50枚（約39G丸め表記あり）**
- basicPayout: **BIG約126枚 / REG約61枚**
- Vゾーン: **ボーナス約1/10、ループ率約87%、ピンチ目成立時転落率約30%**
- advantageousSection: **NOT_APPLICABLE（有利区間非搭載）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **OFFICIAL_INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_GAMEPLAY / RESET_SOURCE_LIMITED**

### resetBehavior v0.7 — No.1516
- **設定変更**: Vゾーン/通常状態の開始契約は `UNVERIFIED_AFTER_RESEARCH`。天井・有利区間は非搭載のため `NOT_APPLICABLE`。
- **据え置き**: Vゾーン状態の厳密なCARRY_OVER契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: Vゾーン状態のCARRY_OVER契約は `UNVERIFIED_AFTER_RESEARCH`。当時解析の朝一比較も調査中。
- **天井**: 非搭載。短縮天井も `NOT_APPLICABLE`。
- **モード/状態**: 通常A/B等のモードなし。Vゾーン状態の設定変更/据え置き/電断契約のみ未固定。
- **有利区間**: 非搭載。なな徹で直接確認。
- **朝一恩恵/不利**: 設定変更専用の主要恩恵・不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: 有利区間ランプ判別は `NOT_APPLICABLE`。本機固有ガックン/表示判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2022-09-05群 — OPEN 2/6 known
1. `スーパーリオエース` — **No.1515 処理済み**
2. `ヴィーナスゾーン` — **No.1516 処理済み**
3. `パチスロペルソナ5` — **No.1517候補 / 未処理**
4. `ボンバーガール` — 未処理
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
- **No.1517候補 `パチスロペルソナ5` — 2022-09-05**。
- 既存No.1515〜1516の性能コアはやり直さず、No.1517から性能コア＋resetBehavior v0.7を収集する。
- 2022-09-05群を順番に処理し、全known完了後にPB・派生・地域先行・延期を横断してCLOSED可否を判定する。

## GitHub保存
- No.1516追加 commit: `bd58260e10269e8188f03430e48dc177cb74e6cf`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1516 ヴィーナスゾーン
- https://www.slot-pioneer.co.jp/products/30.html
- https://www.pidea.jp/articles/1658720419
- https://hazuse.com/machine/pachislot/1S1922/
- https://nana-press.com/kaiseki/machine/424/10623/
- https://nana-press.com/kaiseki/machine/424/11404/
- https://chonborista.com/slot/pionia-slot/171560/
- https://ichikatsu.com/newslot2022/
- https://www.pachinkoquora.com/machine/pachinslot/446/
- https://p-kn.com/slot/3830/

### 2022-09-05群
- https://news.p-world.co.jp/articles/21494/greenbelt
