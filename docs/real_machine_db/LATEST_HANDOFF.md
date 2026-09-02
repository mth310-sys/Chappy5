# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは **405件 `スーパーアイムマジックEX`** まで進行済み。過去会話の401件地点へ戻らず405を正本として継続した。
- 2009-09-07同日群を再監査し、repo未登録の山佐 **`リノNo.5`** を確認。性能コア＋v0.7 resetBehaviorを **406** として追加した。
- `ドリームJラッシュ` はコード検索・コミット履歴とも未登録。ALL7の当時導入一覧では **2009-09-14** のため、9/8〜13境界を閉じた後の次候補とする。
- 既存402 `イケイケめんそーれ-30`、404 `シークレット・プリンセス`、405 `スーパーアイムマジックEX` は重複追加しない。

## 406. リノNo.5

record:
- `docs/real_machine_db/machines/2009-09-07_rino-no5.md`

machine record commit:
- `d1e7948c4dcc4b8ca9e04aa01a55004a064b0a45`

要点:
- manufacturer: **山佐**
- formalModelName: **リノNo.5-B**
- inspectionNumber: **7S1200**
- releaseDate: **2009-09-07**（ALL7当時導入予定日。山佐公式/P-WORLDは2009年9月、当時グリーンべるとは9月上旬納品予定）
- generation: **5号機**（旧解析に5.1号機表記あり）
- systemType: **ノーマル / BIG+MIDDLE+SMALL / レモン後5GプチRT「リノチャンス5」**
- BIG: **1/334.4 → 1/283.7**
- MIDDLE: **1/350.5 → 1/284.9**
- SMALL: **1/350.5 → 1/284.9**
- 合算: **1/115.0 → 1/94.8〜1/94.9**
- 50枚ベース: **30.1 / 30.3 / 30.6 / 30.9 / 31.3 / 31.8G**
- BIG約**308枚**、MIDDLE約**155枚**。SMALLは約**84枚**と約**81枚**でCONFLICT。
- 機械割はP_Style777 **97.5〜109.5%** とCrankySeven **96.6〜110.5%** が競合。算出条件を解消できないため平均せずCONFLICT保持。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_AND_SMALL_BONUS_CONFLICT_RESET_POWER_CYCLE_UNVERIFIED`。

### v0.7 resetBehavior — リノNo.5

- P_Style777は**天井機能なし**、旧パチマガスロマガは「攻め時・ヤメ時→特にナシ」。ゲーム数天井/リセット短縮天井は `NOT_APPLICABLE`。
- 公開された通常ゲーム数モード/朝一専用モードは確認されず、`modeAfterReset=NOT_APPLICABLE_FOR_PUBLIC_GAME_COUNT_MODE`。
- 設定変更時および単純電源OFF→ON時に、レモン後5GプチRTの残状態・成立状態・初期出目をどう処理するかは、本機固有直接資料を再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン/初期出目/ランプ等による設定変更・据え置き判別も `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の天井短縮、モード優遇、朝一当選率、恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- `resetBehaviorQA=COMPLETE_FOR_CEILING_MODE_SCOPE_WITH_TRANSIENT_RT_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

## 405. スーパーアイムマジックEX（直前）

record:
- `docs/real_machine_db/machines/2009-09-07_super-im-magic-ex.md`

machine record commit:
- `063ca9857c16fe9268798cf4d7f54218cad6f2ec`

- releaseDate: **2009-09-07**。
- BIG **1/287.44 → 1/266.41**、REG **1/455.11 → 1/268.59**、合算 **1/176.17 → 1/133.75**。
- 50枚ベース **35.91 → 37.93G**、BIG約312枚、REG約104枚。
- 機械割は約96.8〜108.1%系列と95.42〜105.79%系列がCONFLICT。
- 天井非搭載。純正機の設定変更専用恩恵・ガックン・単純電断差は直接資料未確定。

## resetBehavior遡及QA

既補完確認済み:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30
- スパイダーマン2G
- スロ原人

直近QA:
- `docs/real_machine_db/machines/2006-10_surogenjin.md`
- QA commit: `3194bc98054c649f7d841525dca97f30b22258a0`
- 次はrepo実ファイルを時系列順に走査し、スロ原人直後の最初の `resetBehavior — v0.7` 未補完レコードから続行する。
- 性能コアの既存COMPLETE_CORE/既存coreStatusは不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **406件地点 / リノNo.5まで完了**から再開。
2. **2009-09-07同日群を最終監査**。既存402 `イケイケめんそーれ-30`、404 `シークレット・プリンセス`（9/1/9/7 CONFLICT）、405 `スーパーアイムマジックEX`、406 `リノNo.5` を重複させず、メーカー別一覧・型式・当時導入一覧で残件有無を確認して閉じる。
3. **2009-09-08〜09-13境界監査**。ALL7当時導入一覧では次の具体日付きパチスロ候補が **2009-09-14 `ドリームJラッシュ`**。P-WORLD月間機種一覧とも照合し、月精度のみの機種を誤配置しない。
4. `ドリームJラッシュ` は今回コード検索・コミット履歴とも未登録確認済み。境界監査でより早い未処理機が出なければ **407候補として最優先処理**する。
5. その後 **2009-09-15〜09-27** を監査し、9/28群へ進む。先行候補は `デコトラの鷲`、同月資料上の `交響詩篇エウレカセブン`、`銀河英雄伝説` 等だが、日付順を崩さない。
6. 既存レコードの欠損は後続QAで直接資料が見つかった場合のみ補完する。推定値は入れない。

### resetBehavior遡及QA
1. **スロ原人まで補完済み**。
2. 次はスロ原人直後の最初のv0.7未補完既存レコードを実ファイル順で特定。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、公式・当時業界・当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイルだけでなく履歴/contents APIでも未登録確認し、検索index遅延による重複を避ける。
- 性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 406 リノNo.5: `docs/real_machine_db/machines/2009-09-07_rino-no5.md`
- machine record commit: `d1e7948c4dcc4b8ca9e04aa01a55004a064b0a45`
- 本 `LATEST_HANDOFF.md` を406件地点へ更新。
