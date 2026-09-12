更新日: 2026-09-13

## 現在地点
- recordCount: **1508**
- latestRecordAdded: **パチスロ鉄拳5 — No.1508**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-07-19_pachislot-tekken5.md`
- chronologicalFrontier: **2022-07-19**
- frontierLatestMachine: **パチスロ鉄拳5 — No.1508**
- schema: **resetBehavior v0.7**
- status: **2022-07-19_GROUP_CLOSED_1_OF_1_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1507 `スーパーハナハナ2-30` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 No.1508 `パチスロ鉄拳5`（山佐 / 山佐ネクスト、2022-07-19）を性能コア＋resetBehavior v0.7で追加。
- 正式型式 `Sパチスロ鉄拳5DC`、検定番号 `2S0091`、6.5号機A+AT。業界記事・HAZUSE・1geki・必勝本・パチ7・当時解析を照合。
- 機械割は設定1〜6で97.6 / 98.6 / 100.3 / 103.7 / 107.2 / 111.0%。ボーナス合算1/273.1→1/229.1、AT初当り1/475.2→1/369.2、ボーナス+AT合算約1/173→約1/141。
- ベース約34G/50枚、AT純増約1.3枚/G。赤7BIG 192枚、青7/白7BIG 約115枚、REG 48枚。
- 通常天井は有利区間移行後750G+αでAT。ボーナス後は前兆分によりデータカウンタ上780G+α付近になる場合がある。
- resetBehaviorは設定変更時の有利区間RESETを複数解析で直接固定。天井カウントも新有利区間基準で再スタート。
- 有利区間ランプ非搭載のため、ランプによる設定変更判別は不可。
- 設定変更専用の短縮天井、モード振り分け、比較可能な朝一公開数値は十分再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き/純電源OFF→ON時の天井・通常/高確・裏段位・有利区間の機種固有直接契約は、一般論を使わず `UNVERIFIED_AFTER_RESEARCH` を保持。
- 二次攻略資料にはリセット後高確スタートの記述があるが、複数高信頼資料で数値・確定契約まで照合できなかったため確定恩恵に格上げしない。
- 2022-07-19群はGreenbelt 2022-07-19新台スケジュールでパチスロ欄が鉄拳5のみ。地域差・延期・PB・別型式を再監査し、現時点で `CLOSED_1_OF_1_PROCESSED`。
- 遡及QAは `パチスロ鉄拳伝タフ` を再探索。既存 `coreStatus: COMPLETE_CORE` を維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` に更新。
- 鉄拳伝タフは設定変更/据え置き/純電断時のRT内部状態・残G、成立済みボーナス/告知状態、本機固有ガックン等を追加探索したが、本機固有直接契約を固定できず一般的5号機挙動では補完していない。

## No.1508 — パチスロ鉄拳5
- path: `docs/real_machine_db/machines/2022-07-19_pachislot-tekken5.md`
- manufacturer: **山佐 / 山佐ネクスト**
- formalModel: **Sパチスロ鉄拳5DC**
- inspectionCode: **2S0091**
- releaseDate: **2022-07-19**
- generation/system: **6.5号機 / A+AT / リアルボーナス+AT**
- payoutRate: **97.6 / 98.6 / 100.3 / 103.7 / 107.2 / 111.0%**
- bonusCombined: **1/273.1 → 1/229.1**
- atInitialHit: **1/475.2 → 1/369.2**
- bonusPlusAt: **約1/173 → 約1/141**
- baseGamesPer50: **約34G/50枚**
- netIncrease: **AT約1.3枚/G**
- basicPayout: **赤7BIG 192枚 / 青7・白7BIG 約115枚 / REG 48枚**
- ceiling: **有利区間移行後750G+α→AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_UNVERIFIED_CARRYOVER_DETAILS**
- confidence: **HIGH_CORE / HIGH_RESET_CORE_WITH_EXPLICIT_UNVERIFIED_DETAILS**

### resetBehavior v0.7 — No.1508
- **設定変更**: 有利区間RESET。天井カウントも新有利区間基準でRESET。
- **据え置き**: 天井・内部状態・裏段位・有利区間の機種固有直接契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 同上。一般的6.5号機挙動からの推測補完なし。
- **ゲーム数/天井**: 通常750G+α→AT。設定変更専用短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
- **モード/状態**: 通常/高確・裏段位あり。設定変更直後の詳細振り分けはUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更RESET。有利区間ランプ非搭載。
- **朝一恩恵**: 確定扱いできる短縮天井/AT・CZ確定恩恵なし。リセット後高確スタート説はANALYSIS_SINGLE参考扱い。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 有利区間ランプ不可。固有ガックン/初期出目はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: NONE_CONFIRMED_AFTER_RESEARCH。

## 2022-07-19群 — CLOSED 1/1
1. `パチスロ鉄拳5` — **No.1508 処理済み**

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理: `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）。
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- reset側は `PARTIAL_RESEARCH_EXHAUSTED`。通常時天井なし相当、ボーナス後RT仕様は維持し、設定変更/据え置き/純電断時のRT残G・内部状態、本機固有判別は未固定。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）**。Git追加履歴で鉄拳伝タフの直後に追加された実レコード。

## 次回本線の再開地点
- **No.1509候補 `S黄門ちゃま喝2` / `パチスロ黄門ちゃま 喝` — 2022-08-01。**
- 同日既知パチスロは **S黄門ちゃま喝2** と **パチスロ FAIRY TAIL2** の2機。まず黄門ちゃま喝2を独立レコードとして処理し、その後FAIRY TAIL2、横断再監査で8/1群CLOSED可否を判定する。

## GitHub保存
- No.1508追加 commit: `f6dfdd0fc67439c0b1afe2ac8a433bcacc294691`
- 鉄拳伝タフ resetBehavior QA更新 commit: `444da76c9ead563c939ae6191331629a8571034e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1508 パチスロ鉄拳5
- https://news.p-world.co.jp/articles/20459/nippon
- https://news.p-world.co.jp/articles/21193/greenbelt
- https://hazuse.com/machine/pachislot/2S0091/
- https://hazuse.com/machine/pachislot/2S0091/genre/201/
- https://1geki.jp/slot/s_tekken5/
- https://1geki.jp/slot/s_tekken5/3/
- https://p.hisshobon.jp/machine/3912/1/89825
- https://pachiseven.jp/machines/6553/cutout/2
- https://chonborista.com/slot/yamasa-slot/168430/
- https://flick7.net/slot/reset_guide2022.php

### 2022-08-01次群確認
- https://news.p-world.co.jp/articles/21319/greenbelt
- https://1geki.jp/newmachinecalender/202208/
