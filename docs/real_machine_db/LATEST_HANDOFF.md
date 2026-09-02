# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 本リレー開始時に最新mainを再取得したところ385件 `スーパーセブン` まで先行していたため、過去会話の382件地点へ戻らず385を正本として継続した。
- 2009-07-06同日群のrepo既存有無を確認し、未登録のネット `ドキッと!ビキニパイ` を性能コア＋v0.7 resetBehavior付きで **386** として追加。

## 386. ドキッと!ビキニパイ

record:
- `docs/real_machine_db/machines/2009-07-06_dokitto-bikini-pai.md`

要点:
- manufacturer: **ネット**
- releaseDate主値: **2009-07-06**。ALL7が導入予定7/6、パチビーは7/7、グリーンべるとは7/5納品開始予定、NET公式は7月上旬。1日差をCONFLICT保持。
- generation: **5号機**
- systemType: **ボーナス+RT / 技術介入**
- settings: **1〜6**
- 機械割: パチマガスロマガのシミュレート **96.56 / 98.81 / 101.12 / 103.41 / 106.26 / 109.58%** とpacnk **97.60 / 99.70 / 101.80 / 103.90 / 106.50 / 109.50%** が競合。平均せず `CONFLICT_DIFFERENT_PAYOUT_SERIES`。
- BIG合成: **1/287.44 / 1/278.88 / 1/267.49 / 1/257.00 / 1/249.19 / 1/236.59**。
- REG合成: **1/468.11 / 1/409.60 / 1/364.09 / 1/327.68 / 1/284.94 / 1/260.06**。
- 全ボーナス合算: **1/178.09 / 1/165.91 / 1/154.20 / 1/144.04 / 1/132.93 / 1/123.89**。
- 50枚ベース: **33.94 / 34.54 / 35.01 / 35.49 / 36.24 / 37.01G**。
- メガパイ約**315枚**、デカパイ約**256枚**、ポロリ約**242枚**、REG約**96枚**。
- RT「ポロリタイム」: **81G or 181G / 約+0.6枚/G**。
- 通常ゲーム数天井、ゲーム数解除、ART/AT、通常長期ゲーム数モードは確認なし。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_AND_RELEASE_DATE_CONFLICT`。

### v0.7 resetBehavior — ドキッと!ビキニパイ

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。旧パチマガINDEXに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認したが本文未回収。RT残G等は推測しない。
- carryOverBehavior: **UNVERIFIED_RT_STATE_AFTER_RESEARCH**。通常ゲーム数天井/通常モードの引継ぎ対象は確認されないが、RT途中の据え置き挙動は直接資料なし。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のRT残G/初期出目等の直接資料なし。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNTED_CEILING_CONFIRMED**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。
- modeAfterReset: **NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_MODE_CONFIRMED**。
- stateAfterReset: **UNVERIFIED_RT_STATE_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶・ランプ/RT挙動による本機固有判別根拠なし。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_RT_RESET_DETAILS_UNVERIFIED`。
- 2012年 `ビキニパイ2` の天井/内部モード/朝一仕様は初代へ流用していない。

欠損判定前の再探索:
- `ドキッと!ビキニパイ` / `ドキッと！ビキニパイ` / `ビキニパイ` / `NET` / `ネット`
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / RT / ポロリタイム / ガックン / 型式 / 検定番号 / 50枚 / 1000円
- グリーンべると、NET公式、ALL7、パチビー、パチマガスロマガ旧解析、pacnk、当時5号機まとめ/回顧資料を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存。

## 直前mainの主な進捗

### 385. スーパーセブン
- `docs/real_machine_db/machines/2009-07-06_super-seven.md`
- machine record commit: `dc731bc64bb72c29b5af813c9642e1ba1998d20d`
- 性能コア＋v0.7 resetBehavior保存済み。

### 384. ワイルドドッグ
- `docs/real_machine_db/machines/2009-06-29_wild-dog.md`
- machine record commit: `537e0ef9115e2362f2c46c8070c3cb4cb245efc8`

### 383. ぶっちゃけはっちゃけ大奥浪漫
- `docs/real_machine_db/machines/2009-06-22_oo-oku-roman.md`
- machine record commit: `a889b7665f0cc6ec45ed1a65b8ee5f6fa1208533`

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- 次回QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **386件地点 / 2009-07-06 `ドキッと!ビキニパイ`まで完了**から再開。
2. 2009-07-06同日群を引き続き処理し、repo未登録を個別確認する。
3. ALL7先行候補: **`ハイアップマシンガンバージョン` / `パチスロ エマニエル～夜蝶Ver.～`**。
4. 別の当時導入一覧で7/6候補: **`七色未来` / `うる星やつら2` / `ヴァンパイア` / `ビガーV`**。日付根拠・メーカー・既存レコード有無を個別監査し、未処理なら同日群へ追加する。
5. **`サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので除外済み。** 同名/後年パチスロと混同しない。
6. 7/6群を閉じた後、7/7〜12をメーカー別/当時導入資料で境界監査し、その後2009-07-13 `デンジャラッシュ7` 等へ進む。
7. 過去月の月精度/納品日だけ判明機は具体日を推測挿入しない。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 386 ドキッと!ビキニパイ: `docs/real_machine_db/machines/2009-07-06_dokitto-bikini-pai.md`
- machine record commit: `082db82f4dd3f7a15da28ca36babf406f1736206`
- 本 `LATEST_HANDOFF.md` を386件地点へ更新。
