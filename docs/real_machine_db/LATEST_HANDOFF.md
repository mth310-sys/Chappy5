# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは386件 `ドキッと!ビキニパイ`。過去会話の383件地点へ戻らず386を正本として継続した。
- 2009-07-06同日群を継続し、repo未登録のタイヨー `ハイアップマシンガンバージョン` を性能コア＋v0.7 resetBehavior付きで **387** として追加。

## 387. ハイアップマシンガンバージョン

record:
- `docs/real_machine_db/machines/2009-07-06_hi-up-machinegun-version.md`

要点:
- manufacturer: **タイヨー**
- formalModelName: **ハイアップマシンガンバージョン**
- inspectionNumber: **9S0348**
- releaseDate: **2009-07-06**。ALL7の導入予定日。P-WORLDは2009年7月。グリーンべると2009-07-03記事では新パネルを7/20納品開始としており、既存本体の導入時期と矛盾しない。
- generation: **5号機**
- systemType: **ボーナス+ART / CZ / 押し順ナビ**
- settings: **1〜6**
- 機械割: pacnk **96.50 / 98.20 / 100.10 / 103.50 / 108.50 / 113.20%**。旧パチマガPAYOUT欄は「現在調査中」、別系列直接照合は未取得のため `ANALYSIS_SINGLE`。
- BIG: **1/992.97 / 1/992.97 / 1/992.97 / 1/992.97 / 1/992.97 / 1/1092.27**。
- REG: **1/99.90 / 1/99.90 / 1/97.81 / 1/97.81 / 1/95.81 / 1/93.09**。
- CZ「ハイアップゲーム」: **1/77.7 / 1/75.0 / 1/77.7 / 1/75.0 / 1/77.7 / 1/70.0**。
- P-WORLD掲載の複合「合算」BIG+REG+CZ: **1/41.9 / 1/41.1 / 1/41.5 / 1/40.7 / 1/41.1 / 1/38.9**。BIG+REGのみのボーナス合算とは混同しない。
- BIG約**90枚**、REG約**18枚**。
- ART「マシンガンラッシュ」: **9枚役ナビ81回成立まで**、最低純増約**480枚**、平均約**700枚以上**。
- ART純増/Gは旧パチマガ **約+2.0枚/G** とP-WORLD **約+1.7枚/G** が競合するため `CONFLICT`、平均しない。
- 50枚ベースは多系統再探索後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 救済: **CZまたはボーナス間333G以上ハマった後、次回CZがスーパーハイアップゲーム化**。即ART/ボーナス確定の通常天井とは分離。
- `coreStatus=COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_NET_INCREASE_CONFLICT`。

### v0.7 resetBehavior — ハイアップマシンガンバージョン

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。旧パチマガINDEXに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認したが本文未回収。333G進捗/CZ/ART状態は推測しない。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の333G救済進捗、CZ/ART残状態の直接資料なし。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の333G進捗、CZ/ART残状態、初期出目等の直接資料なし。
- gameCounterReset: **UNVERIFIED_333G_RELIEF_COUNTER_AFTER_RESEARCH**。
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。333G救済自体は確認済みだが設定変更時のリセット/引継ぎ/短縮は未確定。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ/表示、333G挙動等による本機固有判別根拠なし。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_RESET_DETAILS_UNVERIFIED`。

欠損判定前の再探索:
- `ハイアップマシンガンバージョン` / `HI-UPマシンガンバージョン` / `ハイアップマシンガン` / `タイヨー` / `9S0348`
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 333G / 天井 / 天井短縮 / モード / CZ / ART / ガックン / 型式 / 検定番号 / 50枚 / 1000円 / ベース / コイン持ち
- ALL7、P-WORLD、グリーンべると、パチマガスロマガ旧解析、pacnk、当時検定情報/回顧資料を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存。

## 直前mainの主な進捗

### 386. ドキッと!ビキニパイ
- `docs/real_machine_db/machines/2009-07-06_dokitto-bikini-pai.md`
- machine record commit: `082db82f4dd3f7a15da28ca36babf406f1736206`

### 385. スーパーセブン
- `docs/real_machine_db/machines/2009-07-06_super-seven.md`
- machine record commit: `dc731bc64bb72c29b5af813c9642e1ba1998d20d`

### 384. ワイルドドッグ
- `docs/real_machine_db/machines/2009-06-29_wild-dog.md`
- machine record commit: `537e0ef9115e2362f2c46c8070c3cb4cb245efc8`

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **387件地点 / 2009-07-06 `ハイアップマシンガンバージョン`まで完了**から再開。
2. 2009-07-06同日群を引き続き処理し、repo未登録を個別確認する。
3. 次の最優先候補: **マツヤ商会 `パチスロ エマニエル～夜蝶Ver.～`**。今回repo検索で未登録を確認済み。ALL7で2009-07-06導入予定。次回は正式型式/メーカー表記/性能コア/resetBehaviorを多系統調査してから追加する。
4. その後の同日候補: **`七色未来` / `うる星やつら2` / `ヴァンパイア` / `ビガーV`**。日付根拠・メーカー・既存レコード有無を個別監査し、未処理のみ追加する。
5. **`サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので除外済み。** 同名/後年パチスロと混同しない。
6. 7/6群を閉じた後、7/7〜12をメーカー別/当時導入資料で境界監査し、その後2009-07-13 `デンジャラッシュ7` 等へ進む。
7. 過去月の月精度/納品日だけ判明機は具体日を推測挿入しない。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 387 ハイアップマシンガンバージョン: `docs/real_machine_db/machines/2009-07-06_hi-up-machinegun-version.md`
- machine record commit: `c32592b454795e23d7f42dd83f39fb10737b8da8`
- 本 `LATEST_HANDOFF.md` を387件地点へ更新。
