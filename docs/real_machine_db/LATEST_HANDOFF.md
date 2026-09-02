# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時は396件 `真・女神転生` まで完了済み。README→ミッションv0.7→INDEX→LATEST_HANDOFF→既存396レコード→直近コミットを再取得し、396を正本として継続。
- 同じ2009-08-17群の `侍ジャイアンツ2` はrepo未登録を確認し、性能コア＋v0.7 resetBehaviorを収集して **397** に追加。

## 397. 侍ジャイアンツ2

record:
- `docs/real_machine_db/machines/2009-08-17_samurai-giants2.md`

machine record commit:
- `1cde1235d995f9383211dbbd902ace7e9e369120`

要点:
- manufacturer: **ニューギン**
- formalModelName: **侍ジャイアンツ2X**
- releaseDate: **2009-08-16納品予定 / 2009-08-17発売 CONFLICT_DEFINITION_DELIVERY_VS_RELEASE**
- generation: **5号機**
- systemType: **ボーナス+RT / 150G周期CZ / 次回ボーナスまでRT**
- 5号機クロニクルの設定別BIG **1/728.2→1/452.0**、REG/MB **1/496.5→1/452.0**、合算 **1/295.2→1/226.0**。
- 機械割は5号機クロニクル **96.7/99.3/101.0/103.4/105.3/108.0%** と後年シリーズ回顧 **96.2/100.2/102.6/106.4/108.9/112.8%** が競合。平均せず保持。
- BIG平均約**308枚**、MB平均約**85枚**。P-WORLDではBIG440枚超、MIDDLE120枚超払い出し終了、REG搭載も確認。
- RT「サムライドリームマッチ」は **約+0.7枚/G、次回ボーナスまで継続**。グリーンべると、旧パチマガ、当時業界資料で一致。
- 通常時**150G消化でCZ**。これは周期CZであり、一般的なゲーム数到達型天井とは区別。
- 50枚ベースは旧パチマガ現存ページでも「現在調査中」。表記揺れ/型式/メーカー/50枚/1000円/ベース/コイン持ちで再探索後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- `coreStatus=PARTIAL_CORE_BASE_UNVERIFIED_PAYOUT_CONFLICT`。

### v0.7 resetBehavior — 侍ジャイアンツ2

- 旧パチマガスロマガに本機専用 **「攻め時・ヤメ時・設定変更時」** 項目の存在までは確認。
- settingChangeBehavior / gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に150G周期カウンタがclear/retainされる具体本文を回収できず、一般的5号機挙動から補完しない。
- carryOverBehavior / powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き/単純電源OFF→ON時の周期進捗、CZ/RT状態の処理を本機固有資料で確定できず。
- ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。150Gは周期CZであり短縮天井とは扱わない。
- modeAfterReset / stateAfterReset / resetDetection: **UNVERIFIED_AFTER_RESEARCH**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用モード振り分け・当選率・恩恵率も未確認。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `侍ジャイアンツ2 / 侍ジャイアンツ２ / 侍ジャイアンツ2X / ニューギン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / 150G / CZ / RT / ガックン / 天井` を組み替えて再探索済み。

## resetBehavior遡及QA

既補完:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30

性能コアの既存COMPLETE_CORE完了判定は不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **397件地点 / 侍ジャイアンツ2まで完了**から再開。
2. **2009-08-18〜23を境界監査**し、具体導入日付き未処理機を最古から追加する。検定通過日・発表日だけを導入日と誤認しない。
3. 境界内に未処理がなければ2009-08-24群へ進み、**`2027II`、`神たま～ARTやで!全員集合～`、`パチスロがんばれ!!ロボコン`、`めぞん一刻2`** 等をrepo既存確認しながら時系列処理。
4. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべるとで2009-08-30納品予定確認済み。8月末群で具体日順を再確認する。

### resetBehavior遡及QA
1. **南国娘30まで補完済み**。
2. 次の実ファイルは `docs/real_machine_db/machines/2006-10_spiderman2g.md`。設定変更/据え置き/電断時の最大150G/50G RT残G・内部RT状態、パンク回避状態、変更判別を当時業界/旧解析中心に再探索する。
3. その後 `2006-10_surogenjin.md` を確認。補完済みなら次の未補完実ファイルへ進む。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。

## 今回の保存

- 397 侍ジャイアンツ2: `docs/real_machine_db/machines/2009-08-17_samurai-giants2.md`
- machine record commit: `1cde1235d995f9383211dbbd902ace7e9e369120`
- 本 `LATEST_HANDOFF.md` を397件地点へ更新。
