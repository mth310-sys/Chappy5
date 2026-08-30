# Chappy5 パチスロ制作工程 — 正式版

> Status: `INDUSTRY_RESEARCHED_WORKFLOW_V1`
>
> 複数の遊技機メーカー／開発会社が公開する開発工程・職種・業務を横断調査し、共通構造をChappy5へ変換した制作工程正本。
> 実物製造や法的型式試験を模倣するのではなく、**企画→仕様→専門ライン並行開発→プリプロ／オーサリング→制御統合→試作・試打→検証・調整→完成**という実際の遊技機開発思想を移植する。

---

## 1. 文書階層

1. `README.md` — Chappy5全体の憲法・固定5 Director・最上位原則
2. `docs/PACHISLOT_PRODUCTION_WORKFLOW.md` — パチスロをどう作るか（本書）
3. 各機種SPEC — その機種で何を作るか
4. 実装・テスト・試打記録 — 何が作られ何が確認されたか

READMEと本書が衝突した場合はREADMEを優先する。

---

## 2. 業界調査で確認した共通構造

会社ごとに名称差はあるが、複数社に繰り返し現れる構造は以下。

1. **企画・商品構想** — コンセプト、ターゲット、ゲーム性、スペック、演出方向を決める。
2. **仕様設計** — 遊技仕様、出玉抽せん仕様、リール配列、演出仕様等を仕様書へ落とす。
3. **専門ライン並行開発** — メイン制御／リール、サブ・液晶、映像、役物・ランプ、サウンド等が仕様を共有して進む。
4. **プリプロダクション** — 字コンテ、絵コンテ、Vコンテ等で演出意図・尺・見た目を確認する。
5. **素材制作・オーサリング** — 2D/3D/映像/音を制作し、組込み用データ・演出パターンへ変換する。
6. **制御・組込み** — メイン抽せん／リール停止、サブ演出抽せん、液晶、役物、ランプ、サウンドを統合する。
7. **試作・実機検証** — 実際に遊技し、ゲーム性、演出出現率、信頼度、品質を確認する。
8. **デバッグ・調整** — 欠陥だけでなく遊技・演出バランスも反復修正する。
9. **申請・製造・販売** — 実物メーカーでは型式試験・検定・量産・販売へ進む。

重要：**映像→音→プログラムを完全直列に作るのではない。** 企画・仕様を土台に専門ラインが並行し、オーサリング・制御・試作機で合流する。

企画担当も上流だけで消えるとは限らない。公開実務では、仕様作成、映像指示、演出抽せん、組込み、デバッグ、実機確認まで関与する例がある。固定Director制と相性がよい。

---

## 3. 固定5 Directorへの職能マッピング

### Machine Director
業界の企画、プランナー、開発責任者、プロジェクト統合機能。
商品コンセプト、ターゲット、企画統合、仕様整合、進行、商品性、試打結果統合、Human Gate。

### Game & Reel Director
業界の出玉企画、システム企画、メイン制御、リール配列／停止データ、シミュレータ職能。
遊技仕様、出玉抽せん、数理、状態遷移、リール配列・停止、役・出目、ゲーム側演出条件、シミュレータ。

### Visual & Mechanism Director
業界の2D/3D、映像、コンポジット、図柄、パネル、筐体／役物、ランプ、Visualオーサリング職能。
筐体、リール図柄、液晶、UI、コンテ、エフェクト、役物、LED、Visual実装データ。

### Sound & Experience Director
業界のサウンドクリエイター、MA、音声、サウンド制御職能。
SE、BGM、楽曲、ジングル、音声、仮音、MA、Audio Event、サウンド制御、Visual／役物同期。

### Playtest & QA Director
業界のデバッグ、開発機確認、試作機試打、品質確認。
実ブラウザ遊技、状態到達、Visual/Audio/操作、不具合、体感、長時間試打、回帰検証。

---

# 4. 正式制作工程

## Gate 0 — Project Kickoff / 開発立上げ

5 Director全員で最新main、README、本書、市場、利用可能な遊創舎技術資産を確認。再利用／改造／融合／新規候補を整理する。

Output：`PROJECT_KICKOFF_BRIEF`

Exit：5 Directorが同じ正本・目的・制約を共有。

---

## Stage 1 — Product Planning / 商品企画

**主担当：Machine / 協働：全員**

複数機種案、ターゲット、一文フック、世界観、コア遊技、スペック骨格、リール特徴、筐体／役物、Visual、Audio、当たり・上位価値、長時間像、過去資産活用案まで「完成機」を想定して企画する。

Output：`MACHINE_CONCEPT_PROPOSAL`

Exit：設定だけでなく完成した台を5方向から説明できる。

### HUMAN GATE 1
人間が **`HUMAN_MACHINE_APPROVED`** を出すまで本制作禁止。

---

## Stage 2 — Basic Specification / 基本仕様設計

**主担当：Machine + Game & Reel**

完成ゲームフロー、通常時、内部状態、当選契機、BONUS/CZ/AT/上位、終了／復帰、出玉骨格、設定差方針、役、リール配列案、出目思想、演出期待度階層、筐体／役物要求、Audio要求を定義。

Output：`MASTER_GAME_SPEC` / `GAME_FLOW` / `REEL_SPEC_DRAFT` / `PRESENTATION_REQUIREMENTS`

Exit：各専門ラインが何を作れば同じ機種になるか理解できる。

---

# 5. Parallel Production / 専門ライン並行開発

Stage 2通過後、4ラインを並行可能とする。全ラインは同じMaster Specを参照する。

### Line A — Game / Main Control / Reel
主担当：Game & Reel

出玉抽せん詳細、状態遷移、役、リール配列確定、停止制御、出目、BET/START/STOP、払出、ゲームEvent、シミュレータ。

Output：`GAME_CONTROL_SPEC` / `REEL_CONTROL_SPEC` / `SIMULATION_MODEL`

### Line B — Visual / Cabinet / Mechanism
主担当：Visual & Mechanism

筐体Visual、パネル、リール図柄、液晶レイアウト、UI、役物、LED、過去機構の再利用／変形／融合、新機構。

Output：`VISUAL_DESIGN_SPEC` / `MECHANISM_SPEC`

### Line C — Effect / Pre-production / Authoring
主担当：Visual & Mechanism / 協働：Machine + Sound

演出仕様、字コンテ、絵コンテ、必要に応じVコンテ相当、演出尺、チャンスアップ、2D/3D/エフェクト、演出パターン、実装用Visualデータ。

Output：`EFFECT_SPEC` / `PREVIS` / `VISUAL_AUTHORING_DATA`

### Line D — Sound / Audio Production
主担当：Sound & Experience

Audio Concept詳細、仮音、SE、BGM、楽曲／ジングル、状態別音響、Audio Event表、Visual／Mechanism同期点、実装用Audioデータ。

Output：`AUDIO_SPEC` / `AUDIO_EVENT_TABLE` / Audio Assets

### 共通ルール
Master Specを独断変更しない。他ラインへ影響する変更はMachineへ返す。完成までラインを隔離しない。「映像完成後に音」「ゲーム完成後に演出」を固定手順にしない。

---

## Stage 3 — Control & Authoring Integration / 制御・オーサリング統合

実業界のメイン／サブ／液晶／役物／ランプ／サウンド制御とオーサリングの合流点。

Game Eventと演出Event、リールと液晶、演出抽せん、Visual、Mechanism/LED、Audio Event、BGM、BET/START/STOPを接続する。

Output：`INTEGRATED_DEVELOPMENT_BUILD`

Exit：通常遊技から主要当たりまで内部状態・リール・Visual・Mechanism・Audioが同じEventで動く。

---

## Stage 4 — Prototype Machine / 開発機・試作機

実業界の試作機工程をChappy5へ移植する。

物理試作機の代わりに、**実ブラウザで完成機と同じ入力方法で連続遊技できる統合開発機**を作る。

必須：iPhone想定、BET→START→STOP×3、通常連続遊技、主要当たり到達、Visual、Mechanism、Audio、状態ログ。

ここからUnified Playtest「目＋手＋耳」を本格適用。

Output：`PLAYABLE_DEVELOPMENT_MACHINE`

---

## Stage 5 — Verification / デバッグ・数理検証

### 5A 数理・ロジック
状態到達、抽選責務、出玉、設定差、100G/1,000G/10,000G等、永久ループ、復帰、リール停止／出目。

### 5B Presentation
演出条件、出現率、期待度序列、Visual/Mechanism/Audio同期、BGM切替、演出競合。

### 5C 操作・品質
BET/START/STOP、連打、雑操作、境界、終了／復帰、iPhone操作、回帰。

Output：`VERIFICATION_REPORT`

**バグがないだけでは完成ではない。**

---

## Stage 6 — Team Trial / 試打・商品性評価

試作機を実際に打ち、ゲーム性、演出出現率、信頼度等を調整する実業界工程を移植。

評価：面白いか、通常時を回したいか、リール停止に意味があるか、出目を見たいか、前兆が期待につながるか、演出頻度・信頼度は適正か、当たりが気持ちいいか、BONUS/AT/上位に価値があるか、長時間疲れないか、もう一度打ちたいか。

正式ループ：
**試打 → 問題記録 → Machine判断 → 仕様／制作ラインへ差し戻し → 再統合 → 再試打**

調整反復そのものを正式工程とする。

Output：`TRIAL_EVALUATION_LOG`

---

## Stage 7 — Final Integration / 最終統合・品質固定

全主要状態、重大不具合、数理、Visual、Mechanism、Audio、Unified Playtest、長時間試打、回帰を最終確認。

Output：`RELEASE_CANDIDATE`

---

## HUMAN GATE 2 — Final Machine Approval

AIだけで完成宣言しない。人間が完成候補を実際に確認し **`HUMAN_MACHINE_VERIFIED`** を出した時点で完成。

不承認ならStage 6または必要な専門ラインへ差し戻す。

---

# 6. 実物工程→Chappy5置換

| 実物遊技機 | Chappy5 |
|---|---|
| 企画会議 | 5 Director合同企画 + Human Gate |
| 遊技／出玉仕様 | Master Game Spec / Simulation |
| リール配列／停止データ | Reel Spec / Reel Control |
| 筐体・役物 | Browser Cabinet / Mechanism |
| コンテ／Vコンテ | Effect Spec / Previs |
| 映像素材 | Visual Assets / Runtime Visual |
| オーサリング | Browser実装用演出データ化 |
| メイン制御 | Game / Lottery / Reel Control |
| サブ制御 | Effect / Mechanism / Audio orchestration |
| 液晶制御 | Browser Visual Runtime |
| ランプ制御 | LED Runtime |
| サウンド制御 | Audio Runtime / Audio Events |
| 試作機 | Playable Development Machine |
| 実機試打 | Unified Playtest「目＋手＋耳」 |
| デバッグ | Browser Test / Logic / Integration QA |
| 部品信頼性 | Runtime / performance / repeated-operation testing |
| 型式試験・検定 | 法的代替は行わない。仕様Freeze思想のみ参考 |
| 量産 | Release Build固定 |
| ホール導入 | 将来のChappy5ホールへmachine package導入 |

---

# 7. 変更管理

- **Level 1 Local Adjustment**：他ラインへ影響しない局所調整。担当判断可。
- **Level 2 Cross-line Change**：複数ラインへ影響。Machine承認必須。
- **Level 3 Master Spec Change**：スペック骨格、コアループ、主要状態、リール思想、機種コンセプト変更。Machineが影響分析し、重大ならHuman Gateへ戻す。

---

# 8. GitHub証拠

各工程で、使用正本commit、Input、Output、決定、未決、検証、差し戻し、Human feedback、次工程を残す。

Visual未確認=`VISUAL_UNVERIFIED` / Audio未確認=`AUDIO_UNVERIFIED` / 実遊技未確認=`PLAYTEST_UNVERIFIED` / 統合未確認=`UNIFIED_PLAYTEST_UNVERIFIED`。

---

# 9. 調査根拠（2026-08-28）

複数社を比較し、一社固有の工程を業界唯一の正解とは扱っていない。

- 藤商事：企画→設計・開発→試作・検証→型式試験／検定→製造・納品→稼働。企画でコンセプト／ゲーム性／スペック／役物／液晶演出、設計開発でメイン／サブ制御、試作でゲーム性・演出出現率・信頼度・デバッグを確認。
- サンドライブ：企画立案、遊技仕様、出玉抽せん仕様、リール配列／停止データ、出玉設計、シミュレータ、メイン／サブ／液晶制御、デバッグ、申請書類。
- D-O：企画書／仕様書／コンテ／リール配列、デザイン、液晶表示制御、サブ制御（演出抽せん・役物・サウンド・ランプ）、メイン制御（抽せん・リール停止）。
- ユークス：企画・仕様、プリプロダクション、映像・オーサリング、CG、液晶／サウンド／ランプ制御、デバッグ。
- C&R Creative Studios / ACS：企画・設計、2D/3D、コンポジット、オーサリング、サウンド制作から実装。オーサリングは仕様を元に素材を組込み用へ変換しプログラムへの橋渡しを行う。
- HEARTBEAT：企画、出玉設計、仕様書、プリプロダクション、サウンド素材／制御、液晶／サブ／ランプ制御。
- マトリックス：企画担当が企画書、演出提案、映像指示、映像組込み、開発機デバッグ、終盤の実機遊技確認、ランプ、演出抽せんフロー／振分まで担当する実例。
- NET：リール／出玉のメインプログラムと演出／効果のサブプログラムという区分、企画から開発・検証まで担当する例。
- ACE：出玉企画、システム企画、演出企画、メイン／サブ／演出ソフト、映像、オーサリング、サウンド、ランプ、デバッグ、申請書類という横断分類。

---

# 10. 現在状態

`INDUSTRY_RESEARCHED_WORKFLOW_V1`

- 実業界調査：完了（V1）
- 複数社比較：完了
- Chappy5工程への変換：完了
- 固定5 Director職能割当：完了
- 正式制作工程：V1確定
- README参照更新：未実施
- 1号機：未企画

次工程：READMEの旧Phase 0〜9を本書参照型へ整理後、**Gate 0 — Project Kickoff** から1号機開発を開始する。
