更新日: 2026-09-13

## 現在地点
- recordCount: **1519**
- latestRecordAdded: **Sアバサー — No.1519**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-09-05_s-abasa.md`
- chronologicalFrontier: **2022-09-05**
- frontierLatestMachine: **Sアバサー — No.1519**
- schema: **resetBehavior v0.7**
- status: **2022-09-05_GROUP_OPEN_5_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1518 `ボンバーガール` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1519 `Sアバサー` を性能コア＋resetBehavior v0.7で追加。
- Greenbelt/P-WORLD、遊技日本、HAZUSE、1geki、必勝本、K-Navi、ちょんぼりすた、イチカツ、ぱちんこキュレーション等を横断。
- 2022-09-05導入、アムテックス製、6.2号機ノーマルAタイプ、25Φ/30Φ同時展開を固定。
- 型式は25Φ `SアバサーM1`、30Φ `SアバサーA1-30`。30Φ検定番号はHAZUSEで `1S1953`。25Φ検定番号は再探索後も固定できずUNVERIFIED。
- 25Φ/30Φは同一性能。設定1〜6機械割97.5〜107.0%、BIG 1/262.1〜1/245.5、REG 1/385.5〜1/245.5、合算1/156.0〜1/122.7、約36.5G/50枚、BIG平均約264枚・最大271枚、REG100枚。
- 天井非搭載。AT/ART/CZ・天井モード・有利区間はNOT_APPLICABLE。
- 設定変更/据え置き/純電断時の成立済みボーナスフラグ・告知状態、本機固有ガックン/初期出目等は検索語・型式・メーカーを変えて再探索しても直接資料を固定できず、一般的ノーマル機挙動から推測せず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の朝一恩恵/不利/公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 導入日は実導入系資料が2022-09-05で一致。Greenbelt事前記事のみ9/4予定のため事前予定値としてCONFLICT保持。

## No.1519 — Sアバサー
- path: `docs/real_machine_db/machines/2022-09-05_s-abasa.md`
- manufacturer: **アムテックス / 平和**
- formalModel: **SアバサーM1（25Φ） / SアバサーA1-30（30Φ）**
- inspectionCode: **25Φ UNVERIFIED / 30Φ 1S1953**
- releaseDate: **2022-09-05**
- generation/system: **6.2号機 / ノーマルAタイプ / 完全告知**
- payoutRate: **97.5 / 98.6 / 99.7 / 103.0 / 105.0 / 107.0%**
- BIG: **1/262.1 / 260.1 / 257.0 / 252.1 / 250.1 / 245.5**
- REG: **1/385.5 / 364.1 / 352.3 / 312.1 / 264.3 / 245.5**
- 合算: **1/156.0 / 151.7 / 148.6 / 139.4 / 128.5 / 122.7**
- baseGamesPer50: **約36.5G/50枚（設定1）**
- basicPayout: **BIG平均約264枚・最大271枚 / REG100枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_CORE / RESET_SOURCE_LIMITED**

### resetBehavior v0.7 — No.1519
- **設定変更**: 天井/AT-CZモード/有利区間はNOT_APPLICABLE。成立済みボーナスフラグ・告知状態の機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 同上。天井・モード・有利区間はNOT_APPLICABLE。
- **純電源OFF→ON**: 成立済みボーナスフラグ・告知状態の機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 天井非搭載。
- **モード/状態**: 朝一客AIに影響する専用モード/高確等なしを確認できる範囲ではNONE_CONFIRMED。
- **有利区間**: NOT_APPLICABLE。
- **朝一恩恵/不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 本機固有ガックン/初期出目/ランプ判別はUNVERIFIED_AFTER_RESEARCH。REG中/ボーナス終了時ランプは設定示唆であり変更判別とは別。
- **公開朝一数値**: NONE_CONFIRMED_AFTER_RESEARCH。

## 2022-09-05群 — OPEN 5/6 known
1. `スーパーリオエース` — **No.1515 処理済み**
2. `ヴィーナスゾーン` — **No.1516 処理済み**
3. `パチスロペルソナ5` — **No.1517 処理済み**
4. `ボンバーガール` — **No.1518 処理済み**
5. `Sアバサー` — **No.1519 処理済み**
6. `CREA～Newクレアの秘宝伝～` — **No.1520候補 / 未処理**

群監査メモ:
- Greenbelt/P-WORLD由来の2022-09-05群6機knownを継承。
- Sアバサー25Φ/30Φは性能共通の同時展開派生として1レコードに統合し、両型式を保持。
- 全known完了後にPB・別型式・地域先行・延期/段階導入を再監査し、追加候補があれば6機固定とせず増補する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`（ガオガオフェスティバルS）**。
- 今回は本線No.1519の性能コア＋resetBehaviorと同日群継続を優先し、遡及QAカーソルは維持。

## 次回本線の再開地点
- **No.1520候補 `CREA～Newクレアの秘宝伝～` — 2022-09-05**。
- 既存No.1515〜1519の性能コアはやり直さず、No.1520から性能コア＋resetBehavior v0.7を収集する。
- No.1520処理後、2022-09-05群についてPB・派生・別型式・地域先行・延期/段階導入を横断再監査し、CLOSED可否を判定する。

## GitHub保存
- No.1519追加 commit: `501e6466aada8eaf14525353a9cadff6ca7e5f90`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1519 Sアバサー
- https://news.p-world.co.jp/articles/21163/greenbelt
- https://yugi-nippon.com/pachinko-new-machine/post-52658/
- https://hazuse.com/machine/pachislot/1S1953/
- https://hazuse.com/machine/pachislot/1S1953/genre/207/
- https://1geki.jp/slot/s_abaser/3/
- https://p.hisshobon.jp/machine/3953/1/89811
- https://chonborista.com/slot/amute/171305/
- https://ichikatsu.com/newslot2022/
- https://pachinko-curation.com/31757/
- https://www.p-world.co.jp/machine/database/9683
