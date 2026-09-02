# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは **403件 `サンサンハナハナ-30`** まで進行済みだったため、過去会話の399件地点には戻らず403を正本として継続。
- 2009-08-30同日群および2009-08-31〜09-06境界を再監査。repo未登録のIGTジャパン **`シークレット・プリンセス`** を確認し、性能コア＋v0.7 resetBehaviorを **404** として追加。
- 導入日はK-Naviの2009-09-01と、2009-08-31時点の当時導入一覧の2009-09-07が競合するため、平均・一本化せずCONFLICT保持。P-WORLDは2009年09月の月精度。

## 404. シークレット・プリンセス

record:
- `docs/real_machine_db/machines/2009-09-01_secret-princess.md`

machine record commit:
- `bc6f93e4cb2ad38c4ea79044b41002e7056ad6a9`

要点:
- manufacturer: **IGTジャパン**
- formalModelName: **シークレットプリンセスT**
- inspectionNumber: **9S0279**
- releaseDate: **CONFLICT 2009-09-01 / 2009-09-07**（P-WORLDは2009年09月）
- generation: **5号機**
- systemType: **ボーナス非搭載 / ARTメイン / CZ / パンク回避**
- P-WORLD機械割: **97.5 / 99.3 / 101.4 / 104.4 / 107.7 / 110.3%**。
- 当時系スペック記事のヒロイン別シミュレート値は設定1約97.39〜97.56%、設定6約110.10〜110.29%など微差があるため、P-WORLD値と平均せず定義差CONFLICTとして保持。
- ART「デートタイム」初当たり: **1/401.96 → 1/271.76**。
- ART純増: **約+2.1枚/G**。
- スペシャルリプレイ成立時は **50〜200GのART+α**。
- P-WORLDは天井搭載機として分類するが、具体的天井G数・発動条件を今回の多段再探索で確定できず。
- 50枚ベースも直接比較可能な数値を確定できず、逆算補完しない。
- `coreStatus=PARTIAL_BASE_GAMES_PER_50_AND_CEILING_NUMERIC_UNVERIFIED_WITH_RELEASE_DAY_CONFLICT`。

### v0.7 resetBehavior — シークレット・プリンセス

- 設定変更時の天井カウンタ、CZ/ART状態、ARTストック/継続状態、内部モードのclear/retainは本機固有直接資料を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の前日天井G・CZ/ART/ストック保持も `UNVERIFIED_AFTER_RESEARCH`。
- 単純電源OFF→ON時の天井G、CZ/ART状態、台枠/液晶表示復帰も `UNVERIFIED_AFTER_RESEARCH`。
- P-WORLD掲示板に電源ON/OFFと台枠点滅に関するユーザー質問は残るが、解析確定値として採用しない。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 設定変更専用の短縮天井、朝一ART/CZ優遇、公開朝一当選率/恩恵率は確認できず。
- ガックン/初期出目/液晶/台枠等による設定変更判別も確定できず。
- `resetBehaviorQA=PARTIAL_WITH_SYSTEM_STRUCTURE_CONFIRMED_RESET_AND_CEILING_NUMERICS_UNVERIFIED_AFTER_RESEARCH`。

## 403. サンサンハナハナ-30（直前）

record:
- `docs/real_machine_db/machines/2009-08-30_sansan-hanahana-30.md`

machine record commit:
- `b2e7a3075a4416362eb9a3008f12f97fd6f2284a`

- 純正ノーマル/30Φ。BIG **1/306→1/244**、REG **1/496→1/364**、合算 **1/189→1/146**、メーカー発表機械割 **95〜110%**、1000円あたり約37G。
- 2009-08-30は全国ホール稼働日ではなく、当時業界記事の「納品開始予定日」として登録済み。

## resetBehavior遡及QA

既補完（今回確認できた進捗）:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30
- スパイダーマン2G
- **スロ原人**

### 直近QA: スロ原人

record:
- `docs/real_machine_db/machines/2006-10_surogenjin.md`

QA commit:
- `3194bc98054c649f7d841525dca97f30b22258a0`

QA要点:
- 既存性能コアは崩さずv0.7 resetBehaviorのみ追加。
- 当時業界記事/旧解析から **BIG後50G RT / 原人ラッシュ後20G RT / RT中リプレイ1/2.00** を直接再確認。
- 設定変更時・据え置き時・単純電源OFF→ON時のRT残G/内部RT状態は本機固有直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。一般的5号機挙動で補完しない。
- 通常ゲーム数到達型天井の確定記述も今回回収できなかったため、天井なしと断定せず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 朝一専用恩恵/不利、ガックン等の変更判別、公開朝一数値は未確認。
- `resetBehaviorQA=PARTIAL_WITH_RT_STRUCTURE_CONFIRMED_RESET_HANDLING_UNVERIFIED`。

性能コアの既存COMPLETE_CORE/既存coreStatusは不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **404件地点 / シークレット・プリンセスまで完了**から再開。
2. **2009-09-01同日群〜09-06を最終監査**。シークレット・プリンセスは導入日CONFLICTがあるため、同期間の別未登録機を飛ばしていないかメーカー別一覧/型式/当時導入一覧で再確認する。
3. その後 **2009-09-07群**へ進む。当時導入一覧では **スーパーアイムマジックEX（パラジェイピー）** とシークレットプリンセスを9/7として掲載しているため、スーパーアイムマジックEXをrepo未登録確認→公式/業界/旧解析/P-WORLD/K-Naviで優先監査する。
4. シークレット・プリンセスの天井数値・50枚ベースは後続QAで旧パチマガ/旧必勝本系/アーカイブ等に直接値が見つかった場合のみ補完する。推定値は入れない。

### resetBehavior遡及QA
1. **スロ原人まで補完済み**。
2. 次はrepo実ファイルを時系列順に走査し、スロ原人直後の最初の `resetBehavior — v0.7` 未補完レコードを特定して続行する。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、公式・当時業界・当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 404 シークレット・プリンセス: `docs/real_machine_db/machines/2009-09-01_secret-princess.md`
- machine record commit: `bc6f93e4cb2ad38c4ea79044b41002e7056ad6a9`
- スロ原人 resetBehavior QA: `docs/real_machine_db/machines/2006-10_surogenjin.md`
- QA commit: `3194bc98054c649f7d841525dca97f30b22258a0`
- 本 `LATEST_HANDOFF.md` を404件地点へ更新。
