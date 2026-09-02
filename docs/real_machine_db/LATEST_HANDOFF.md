# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは387件 `ハイアップマシンガンバージョン`。過去会話の旧地点へ戻らず387を正本として継続した。
- 2009-07-06同日群を継続し、repo未登録のマツヤ商会 `パチスロ エマニエル～夜蝶Ver.～` を性能コア＋v0.7 resetBehavior付きで **388** として追加。

## 388. パチスロ エマニエル～夜蝶Ver.～

record:
- `docs/real_machine_db/machines/2009-07-06_emmanuelle-yachou-ver.md`

要点:
- manufacturer: **マツヤ商会**
- formalModelName: **エマニエル**
- inspectionNumber: **9S0262**
- releaseDate主値: **2009-07-06**。ALL7/HAZUSEの具体日を採用。ただしP-WORLD/5号機クロニクルは2009年06月導入としており `CONFLICT` を保持。
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / ボーナス主体**
- BIG: **1/315.08 / 1/302.01 / 1/288.70 / 1/278.88 / 1/268.59 / 1/262.14**。
- REG: **1/455.11 / 1/425.56 / 1/399.61 / 1/383.25 / 1/364.09 / 1/327.68**。
- 合算: **1/186.18 / 1/176.65 / 1/167.61 / 1/161.42 / 1/154.57 / 1/145.64**。P-WORLDの丸め値と整合。
- BIG約**312枚**、REG約**104枚**。P-WORLD/旧パチマガ/当時資料で一致。
- 機械割は **CONFLICT**。P-WORLD・当時侍777・5号機クロニクルは **95.0 / 96.7 / 98.9 / 100.8 / 103.9 / 106.5%**。HAZUSEは **98.28 / 100.26 / 102.47 / 104.49 / 104.49 / 110.42%**。算出条件差を直接確定できないため平均しない。
- 50枚ベースは旧パチマガの1000円あたりゲーム数欄自体が「現在調査中」。表記揺れ・型式・メーカー・旧DB/回顧資料まで再探索後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 当時資料で**天井なし**。RT/ART/AT/CZ/ゲーム数管理モードは確認されない。
- `coreStatus=COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_CONFLICT`。

### v0.7 resetBehavior — エマニエル～夜蝶Ver.～

- settingChangeBehavior: **NO_RESET_SPECIFIC_GAMEPLAY_BEHAVIOR_CONFIRMED_AFTER_RESEARCH**。天井・ゲーム数モード・CZ/ART/RTがないノーマル機。設定変更時固有の出目/表示/ランプ処理は直接資料なし。
- carryOverBehavior: **NOT_APPLICABLE_FOR_GAME_COUNT_MODE_CEILING**。引継ぎ対象となる公開ゲーム数天井/モード/CZ/ARTを確認しない。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の初期出目、告知ランプ、7セグ表示等を本機固有資料で確定できず。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。
- stateAfterReset: **NOT_APPLICABLE_NO_CZ_ART_RT_STATE_CONFIRMED**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/朝一表示による本機固有判別根拠なし。ボーナス後END色は設定示唆でありリセット判別とは分離。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_NO_RESET_SPECIFIC_BENEFIT_CONFIRMED`。

欠損判定前の再探索:
- `エマニエル` / `エマニエル～夜蝶Ver.～` / `夜蝶Ver` / `マツヤ商会` / `9S0262`
- 機械割 / PAYOUT / BIG / REG / 合算 / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / モード / 状態 / ガックン / 初期出目
- ALL7、P-WORLD、HAZUSE、パチマガスロマガ旧解析、当時ブログ、5号機回顧DB、検定通過回顧資料を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存。

## 直前mainの主な進捗

### 387. ハイアップマシンガンバージョン
- `docs/real_machine_db/machines/2009-07-06_hi-up-machinegun-version.md`
- machine record commit: `c32592b454795e23d7f42dd83f39fb10737b8da8`

### 386. ドキッと!ビキニパイ
- `docs/real_machine_db/machines/2009-07-06_dokitto-bikini-pai.md`
- machine record commit: `082db82f4dd3f7a15da28ca36babf406f1736206`

### 385. スーパーセブン
- `docs/real_machine_db/machines/2009-07-06_super-seven.md`
- machine record commit: `dc731bc64bb72c29b5af813c9642e1ba1998d20d`

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **388件地点 / 2009-07-06 `パチスロ エマニエル～夜蝶Ver.～`まで完了**から再開。
2. 2009-07-06同日群を引き続き処理し、repo未登録を個別確認する。
3. 次の最優先候補: **SNKプレイモア `七色未来`**。今回repo検索で未登録を確認済み。当時導入日資料および2009年業界回顧で **2009-07-06** を確認。次回は正式型式/検定番号/性能コア/resetBehaviorを多系統調査してから389として追加可否を確定する。
4. その後の同日候補: **`うる星やつら2` / `ヴァンパイア` / `ビガーV`**。当時導入資料ではいずれも2009-07-06候補。メーカー・型式・既存レコード有無を個別監査し、未処理のみ追加する。
5. **`サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので除外済み。** 同名/後年パチスロと混同しない。
6. 7/6群を閉じた後、7/7〜12をメーカー別/当時導入資料で境界監査し、その後2009-07-13 `デンジャラッシュ7` 等へ進む。
7. 過去月の月精度/納品日だけ判明機は具体日を推測挿入しない。エマニエルのように月資料と具体日資料が競合する場合は双方を保存する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 388 パチスロ エマニエル～夜蝶Ver.～: `docs/real_machine_db/machines/2009-07-06_emmanuelle-yachou-ver.md`
- machine record commit: `6a85f96c2520dae320141357c108156388de43cb`
- 本 `LATEST_HANDOFF.md` を388件地点へ更新。
