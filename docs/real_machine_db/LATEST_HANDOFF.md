# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは388件 `パチスロ エマニエル～夜蝶Ver.～`。過去会話の385件地点へ戻らず388を正本として継続した。
- 2009-07-06同日群を継続し、repo未登録のSNKプレイモア `七色未来` を性能コア＋v0.7 resetBehavior付きで **389** として追加。

## 389. 七色未来

record:
- `docs/real_machine_db/machines/2009-07-06_nanairo-mirai.md`

要点:
- manufacturer: **SNKプレイモア**
- formalModelName: **ナナイロミライB**
- inspectionNumber: **9S0213**
- releaseDate: **2009-07-06**。2009年当時の導入日記録と業界回顧で具体日を確認。P-WORLD/K-Navi/P_Style777の2009年07月表記とも整合。
- generation: **5号機**
- systemType: **ノーマル / ボーナス主体 / 天井救済RT**
- BIG: **1/277.7 / 1/273.1 / 1/268.6 / 1/260.1 / 1/246.4 / 1/229.1**。
- REG: **1/574.9 / 1/541.6 / 1/496.5 / 1/428.3 / 1/372.4 / 1/343.1**。
- 合算: **1/187.3 / 1/181.6 / 1/174.3 / 1/161.8 / 1/148.3 / 1/137.4**。
- 50枚ベース: **36.00 / 36.48 / 37.06 / 38.04 / 38.94 / 39.65G**。旧パチマガ直接値。
- BIG約**312枚**、REG約**104枚**。
- 天井RTはBIG後**1000G**、REG後は資料表記 **772G / 773G CONFLICT**。次回ボーナスまで継続、純増約**+0.2枚/G**。
- 機械割は **CONFLICT**。P-WORLD/5号機クロニクル/pacnkは **97.6 / 99.0 / 100.9 / 104.0 / 108.2 / 112.0%**、2009年当時P_Style777は **97.2 / 98.6 / 100.2 / 103.3 / 107.3 / 111.5%**。平均しない。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_AND_REG_CEILING_WORDING_CONFLICT`。

### v0.7 resetBehavior — 七色未来

- settingChangeBehavior: **CEILING_GAME_COUNT_CARRY_OVER_CONFIRMED**。2009年当時P_Style777が「設定変更でもゲーム数は引き継ぐ」と明記。
- carryOverBehavior: **CEILING_GAME_COUNT_CARRY_OVER_ON_SETTING_CHANGE_CONFIRMED**。設定変更しても前日ハマリの天井進捗が消えないため宵越し狙いが成立し得る。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの天井カウンタ/天井RT状態/初期表示は本機固有資料で直接確定できず、設定変更時引継ぎから推測しない。
- gameCounterReset: **CARRY_OVER_ON_SETTING_CHANGE_CONFIRMED**。
- ceilingAfterReset: **NO_SHORTENING_OR_RESET_CONFIRMED_FOR_CEILING_COUNT**。通常天井条件の進捗を継続。
- modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。天井RT中に設定変更した際のRT状態そのものの残存/終了は直接根拠なし。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits: **CEILING_CARRY_OVER_CAN_CREATE_MORNING_OVERHANG_VALUE**。設定変更専用の短縮天井・初当たり優遇率は確認なし。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/ランプによる本機固有判別根拠なし。
- 公開朝一数値: 通常天井 **BIG後1000G、REG後772/773G CONFLICT**。設定変更時専用のモード振分・当選率・恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_CEILING_CARRY_OVER_CONFIRMED`。

欠損判定前の再探索:
- `七色未来 / ナナイロミライ / ナナイロミライB / SNKプレイモア / 9S0213`
- 導入日 / 機械割 / PAYOUT / BIG / REG / 合算 / 50枚 / 1000円 / ベース / 天井 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / ガックン / 初期出目
- P-WORLD、K-Navi当時発表、P_Style777当時解析、パチマガスロマガ旧解析、5号機クロニクル、pacnk、旧解析DB、2009年導入日記録を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存。

## 直前mainの主な進捗

### 388. パチスロ エマニエル～夜蝶Ver.～
- `docs/real_machine_db/machines/2009-07-06_emmanuelle-yachou-ver.md`
- machine record commit: `6a85f96c2520dae320141357c108156388de43cb`

### 387. ハイアップマシンガンバージョン
- `docs/real_machine_db/machines/2009-07-06_hi-up-machinegun-version.md`
- machine record commit: `c32592b454795e23d7f42dd83f39fb10737b8da8`

### 386. ドキッと!ビキニパイ
- `docs/real_machine_db/machines/2009-07-06_dokitto-bikini-pai.md`
- machine record commit: `082db82f4dd3f7a15da28ca36babf406f1736206`

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **389件地点 / 2009-07-06 `七色未来`まで完了**から再開。
2. 2009-07-06同日群を引き続き処理し、repo未登録を個別確認する。
3. 次の最優先候補: **サミー `うる星やつら2`**。今回推定レコードパス `docs/real_machine_db/machines/2009-07-06_urusei-yatsura2.md` が未登録であることを確認。2009年当時導入日一覧で **2009-07-06** 候補。次回は正式型式/検定番号/性能コア/resetBehaviorを多系統調査して390として追加可否を確定する。
4. その後の同日候補: **`ヴァンパイア` / `ビガーV`**。既存レコード有無と導入日を個別監査し未処理のみ追加。
5. `サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので除外済み。
6. 7/6群を閉じた後、7/7〜12をメーカー別/当時導入資料で境界監査し、その後2009-07-13 `デンジャラッシュ7` 等へ進む。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 389 七色未来: `docs/real_machine_db/machines/2009-07-06_nanairo-mirai.md`
- machine record commit: `e61dcce5979aaff6f2dcb0ee4fabd893d36efd00`
- 本 `LATEST_HANDOFF.md` を389件地点へ更新。
