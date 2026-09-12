更新日: 2026-09-13

## 現在地点
- recordCount: **1504**
- latestRecordAdded: **ニューゲッターマウス — No.1504**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-07-04_new-getter-mouse.md`
- chronologicalFrontier: **2022-07-04**
- frontierLatestMachine: **ニューゲッターマウス — No.1504**
- schema: **resetBehavior v0.7**
- status: **2022-07-04_GROUP_OPEN_2_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1503 `パチスロ甲鉄城のカバネリ` を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 No.1504 `ニューゲッターマウス`（エレコ、2022-07-04）を性能コア＋resetBehavior v0.7で追加。
- 正式型式 `S／ニューゲッターマウス／CG`、検定番号 `1S1664` をHAZUSEで確認。
- 性能コアは設定1 / 2 / 5 / 6。市場予測機械割97.7 / 99.4 / 103.7 / 108.2%、完全攻略100.2 / 102.0 / 106.5 / 111.1%。
- BIG 1/240.9 / 1/234.1 / 1/215.6 / 1/199.2、REG 1/252.1 / 1/240.1 / 1/221.4 / 1/199.2、合算1/123.2 / 1/118.5 / 1/109.2 / 1/99.6。
- ベースは設定1約41G/50枚。BIG最大225枚。
- REG最大獲得枚数はP-WORLD / パチビー / 必勝本等の複数系統が77枚で一致する一方、一撃の後年更新ページのみ85枚。平均せず `CONFLICT` として保持し、canonical comparison valueは77枚。
- 天井非搭載。ノーマル機のためresetBehavior上の天井短縮、AT/CZ朝一モード、有利区間管理ATはNOT_APPLICABLE。
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナスフラグ・告知待ち状態、本機固有ガックン/初期出目による変更判別は、機種名・正式型式・メーカー・A PROJECTと各リセット検索語を組み替えて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的ノーマル機挙動から推測補完していない。
- 設定変更専用の朝一恩恵・不利、公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## No.1504 — ニューゲッターマウス
- path: `docs/real_machine_db/machines/2022-07-04_new-getter-mouse.md`
- manufacturer: **エレコ**
- formalModel: **S／ニューゲッターマウス／CG**
- inspectionCode: **1S1664**
- releaseDate: **2022-07-04**
- generation/system: **6.2号機 / ノーマル / Aタイプ / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRateMarket: **97.7 / 99.4 / 103.7 / 108.2%**
- payoutRateFull: **100.2 / 102.0 / 106.5 / 111.1%**
- BIG: **1/240.9 / 1/234.1 / 1/215.6 / 1/199.2**
- REG: **1/252.1 / 1/240.1 / 1/221.4 / 1/199.2**
- bonusCombined: **1/123.2 / 1/118.5 / 1/109.2 / 1/99.6**
- baseGamesPer50: **約41G/50枚（設定1）**
- basicPayout: **BIG最大225枚 / REG canonical最大77枚（85枚資料はCONFLICT保持）**
- ceiling: **NONE**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE / PARTIAL_RESET / HIGH_MODEL_CODE**

### resetBehavior v0.7 — No.1504
- **設定変更**: 天井・AT/CZ・朝一モードはNOT_APPLICABLE。成立済みボーナス/告知待ち状態の扱いはUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井・AT/CZ・朝一モードはNOT_APPLICABLE。成立済みボーナス/告知待ち状態はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 天井・AT/CZ・朝一モードはNOT_APPLICABLE。成立済みボーナス/告知待ち状態はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 天井非搭載。
- **モード/状態**: 朝一専用モード、設定変更専用高確・CZ等はNONE_CONFIRMED。
- **有利区間**: 物差し上NOT_APPLICABLE（ボーナス主体ノーマル）。
- **朝一恩恵**: NONE_CONFIRMED。
- **朝一不利**: NONE_CONFIRMED。
- **変更判別**: 本機固有ガックン / 初期出目 / ランプによる変更判別はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: NONE_CONFIRMED_AFTER_RESEARCH。

## 2022-07-04群 — OPEN 2/5
月間監査・別系統資料で確認済みの5機:
1. `パチスロ甲鉄城のカバネリ` — **No.1503 処理済み**
2. `ニューゲッターマウス` — **No.1504 処理済み**
3. `パチスロ犬夜叉` — **次回 No.1505候補**
4. `パチスロ アクエリオン ALL STARS`
5. `スーパーハナハナ2-30`

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）**。
- 今回は本線No.1504の再探索とCONFLICT処理を優先し、遡及QAカーソルは変更していない。

## 次回本線の再開地点
- **No.1505候補 `パチスロ犬夜叉` — 2022-07-04。**
- その後 `パチスロ アクエリオン ALL STARS → スーパーハナハナ2-30` の順で同日群を処理し、5/5後にPB・別型式・地域先行・延期/段階導入を含むCLOSED監査を行う。

## GitHub保存
- No.1504追加 commit: `17ccc69d12ac81cfc06adbfadd9188bc8d1b7d42`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1504 ニューゲッターマウス
- https://news.p-world.co.jp/articles/20573/nippon
- https://news.p-world.co.jp/articles/20477/greenbelt
- https://www.p-world.co.jp/machine/database/9636
- https://hazuse.com/machine/pachislot/1S1664/
- https://www.pachibee.jp/machines/index/222050003
- https://1geki.jp/slot/s_new_gettermouse/
- https://1geki.jp/slot/s_new_gettermouse/5/
- https://1geki.jp/slot/s_new_gettermouse/62/
- https://p.hisshobon.jp/machine/3905/1/89595
- https://www.slopachi-quest.com/article/newgettermouse-settei/
