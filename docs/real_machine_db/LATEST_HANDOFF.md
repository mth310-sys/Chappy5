# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは389件 `七色未来`。過去会話の旧地点へ戻らず389を正本として継続した。
- 2009-07-06同日群を継続し、repo未登録だったサミー `パチスロうる星やつら2` を性能コア＋v0.7 resetBehavior付きで **390** として追加。

## 390. パチスロうる星やつら2

record:
- `docs/real_machine_db/machines/2009-07-06_urusei-yatsura2.md`

machine record commit:
- `381a66c0dfd268dd7a27c4806935521324706e4a`

要点:
- manufacturer: **サミー**
- releaseDate: **2009-07-06**。パチビー/K-Naviの具体日を照合し、当時グリーンべるとの2009-05-26発表記事とも整合。
- generation: **5号機**
- systemType: **ノーマルA / ボーナス主体 / 技術介入 / 10GプチRT演出**
- BIG: **1/288.7 / 1/277.7 / 1/258.0 / 1/247.3 / 1/226.8 / 1/208.0**。
- MID: **1/385.5 / 1/354.2 / 1/337.8 / 1/309.1 / 1/295.2 / 1/257.0**。
- 合算: **1/165.1 / 1/155.7 / 1/146.3 / 1/137.4 / 1/128.3 / 1/115.0**。
- 50枚ベース: **35.96 / 36.32 / 36.54 / 37.19 / 37.62 / 38.48G**。機種固有値は回顧解析単独のため `ANALYSIS_SINGLE_RETROSPECTIVE`。
- BIG最大**311枚**、MID**104枚**。
- 機械割は設定5のみ **110.0% / 110.2% CONFLICT**。他設定は95.7 / 98.1 / 100.1 / 104.7 / 119.0%で一致。平均しない。
- 通常ゲーム数天井は旧解析で**天井なし**。10G「ガールハントタイム」は特殊リプレイ後の短期RT/演出で、長期出玉用ART・ゲーム数天井ではない。
- `coreStatus=COMPLETE_CORE_WITH_MINOR_SETTING5_PAYOUT_CONFLICT_AND_BASE_SINGLE_SOURCE`。

### v0.7 resetBehavior — うる星やつら2

- settingChangeBehavior: **NO_RESET_SPECIFIC_BENEFIT_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井・朝一モード・ボーナス優遇は確認できず。
- carryOverBehavior: **NO_GAME_COUNT_CEILING_TO_CARRY**。通常ゲーム数天井なし。据え置き時の10GプチRT残G/演出状態は直接資料がなく `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の短期RT/演出状態・初期出目は本機固有資料で確定できず。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の10GプチRT残G/特殊リプレイ後状態処理を一般論から補完しない。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶・ランプによる本機固有判別根拠なし。
- 公開朝一数値: 設定変更専用の天井・モード振分・当選率・恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_NO_CEILING_RESET_ADVANTAGE_FOUND_STATE_POWER_CYCLE_DETECTION_UNVERIFIED`。

主要出典・取得日2026-09-02・信頼度はレコード本文へ保存。

## resetBehavior遡及QA

### 格闘激戦区（2006-10）を補完

record:
- `docs/real_machine_db/machines/2006-10_kakutou-gekisenku.md`

QA commit:
- `7e347061984668071e466b444c360c4f8b7b968b`

進捗:
- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- machine treeを最新mainで再走査し、ツインエンジェル直後の未補完実ファイル `2006-10_kakutou-gekisenku.md` を確認して今回補完した。
- 性能コアの既存値/完了判定は変更せず、resetBehavior QAのみ別管理で追加。
- メーカー公式・HAZUSE・旧パチマガを再探索。RTGは特殊リプレイ契機、BIG後30G/REG後10Gの激ZONE、RTG150Gを再確認。
- 設定変更/据え置き/単純電断時の激ZONE・RTG残G/内部状態は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。一般的な5号機RT挙動から補間していない。
- 通常ゲーム数到達型天井は公開構造・再探索で確認できないが、同時代資料の「天井なし」直接表現を確定できなかったため `NONE_CONFIRMED_AFTER_RESEARCH` に留めた。
- reset専用朝一恩恵/不利・変更判別・公開朝一率は `NONE_CONFIRMED/UNVERIFIED_AFTER_RESEARCH`。
- `resetBehaviorQA=PARTIAL_RESEARCH_PASS_NO_RESET_SPECIFIC_BENEFIT_OR_GAME_COUNT_CEILING_FOUND_RT_STATE_CARRYOVER_POWER_CYCLE_DETECTION_UNVERIFIED`。

## 直前mainの主な進捗

### 389. 七色未来
- `docs/real_machine_db/machines/2009-07-06_nanairo-mirai.md`
- machine record commit: `e61dcce5979aaff6f2dcb0ee4fabd893d36efd00`

### 388. パチスロ エマニエル～夜蝶Ver.～
- `docs/real_machine_db/machines/2009-07-06_emmanuelle-yachou-ver.md`
- machine record commit: `6a85f96c2520dae320141357c108156388de43cb`

### 387. ハイアップマシンガンバージョン
- `docs/real_machine_db/machines/2009-07-06_hi-up-machinegun-version.md`
- machine record commit: `c32592b454795e23d7f42dd83f39fb10737b8da8`

## 次回再開地点

### 本線
1. **390件地点 / 2009-07-06 `パチスロうる星やつら2`まで完了**から再開。
2. 2009-07-06同日群を引き続き監査する。
3. 次候補 **`ヴァンパイア` / `ビガーV`** はrepo code searchで現時点未登録。まず当時導入日・メーカー・型式を個別照合し、2009-07-06群として成立するものだけ追加する。
4. `サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので除外済み。
5. 7/6群を閉じた後、2009-07-07〜12をメーカー別/当時導入資料で境界監査し、その後2009-07-13 `デンジャラッシュ7` 等へ進む。

### resetBehavior遡及QA
1. **格闘激戦区まで補完済み**。
2. 次の実ファイル候補は `docs/real_machine_db/machines/2006-10_nangoku-musume-30.md`。開始時に必ず最新mainを再走査し、resetBehavior未補完か実ファイル確認してから処理する。
3. その後 `2006-10_spiderman2g.md` → `2006-10_surogenjin.md` の順で欠損を確認。既に補完済みなら飛ばす。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- resetBehavior QAは既存 `COMPLETE_CORE` を不用意に崩さず、性能と別のQA状態として更新する。

## 今回の保存

- 390 パチスロうる星やつら2: `docs/real_machine_db/machines/2009-07-06_urusei-yatsura2.md`
- machine record commit: `381a66c0dfd268dd7a27c4806935521324706e4a`
- 格闘激戦区 resetBehavior QA commit: `7e347061984668071e466b444c360c4f8b7b968b`
- 本 `LATEST_HANDOFF.md` を390件地点・遡及QA格闘激戦区地点へ更新。
