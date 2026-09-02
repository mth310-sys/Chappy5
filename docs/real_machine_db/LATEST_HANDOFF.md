# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは399件 `神たま～ARTやで!全員集合～` まで完了済み。古い396件地点には戻らず399を正本として継続。
- 2009-08-24同日群の次の未処理 `パチスロがんばれ!!ロボコン` を **400** に追加。

## 400. パチスロがんばれ!!ロボコン

record:
- `docs/real_machine_db/machines/2009-08-24_ganbare-robocon.md`

machine record commit:
- `1780df9c1b33f1df524b716eddac04408bb051e4`

要点:
- manufacturer: **サミー**
- formalModelName: **ロボコンS** / 検定9S0092
- releaseDate: **2009-08-24**（K-Naviホール導入開始 / P-WORLD 2009年8月）
- generation: **5号機**
- systemType: **ボーナス+ART / CZ経由ART / 天井CZ / 高確 / 50G ARTループ**
- ボーナス合算は全設定 **1/256.00**。BIGは設定1 **1/3640.89** → 設定6 **1/2340.57**、赤CB/黄CBも当時パチマガスロマガの直接表から取得。
- 50枚ベースは設定1 **33.79G**、設定2〜6 **33.80G**。
- BIG約234枚 / CB約60枚。
- ART「ロボコンラッシュ」は **50G**。当時パチマガスロマガ/K-Navi/777TOWNは約 **+1.5枚/G**、P-WORLDは約 **+1.56枚/G**。平均せずCONFLICT保持。
- ARTは80%以上ループが主要特徴。P-WORLDでは通常状態**900G**で天井CZ、ART非突入ならボーナスまでチェリーナビATへ移行。
- 機械割は当時パチマガスロマガ/pacnk **97.27〜112.24%**、K-Navi自社調べ **97.2〜110.1%**、P-WORLD **97.9〜109.1%** の三系列が競合。単純丸めではないため平均せず `CONFLICT_PAYOUT_THREE_SERIES`。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_AND_NET_INCREASE_CONFLICT`。

### v0.7 resetBehavior — ロボコン

- 5号機天井整理資料から **設定変更後は内部的にチャンスゾーン状態となる**ことを直接確認。
- K-Naviも本機を「朝イチ特典」対象として掲載し、方向性が整合。
- `settingChangeBehavior=CONFIRMED_RESET_STARTS_INTERNAL_CZ`。
- `stateAfterReset=CONFIRMED_INTERNAL_CZ_START`。
- `resetBenefits=CONFIRMED`（設定変更直後から内部CZ状態）。
- 通常天井は **通常状態900G → 天井CZ**。
- ただし、設定変更時の900G天井カウンタそのものがclear/retainのどちらかは直接記述を確定できず、CZ開始の事実からclearを推測しない。
- 据え置き、単純電源OFF→ON、900Gカウンタclear/retain、ガックン/初期出目/液晶/メガセグ等の変更判別、朝一専用ART当選率は検索語・資料系統を変えても本機固有の直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。

## 399. 神たま～ARTやで!全員集合～（直前）

record:
- `docs/real_machine_db/machines/2009-08-24_kamitama-art.md`

machine record commit:
- `f9b7c96cc03f221a70f9376b6ebc4da9634abb81`

- 設定変更時ナビストック消滅 / 1/2高確スタートまで確認済み。
- 999G天井高確カウンタ、周期CZカウンタ、据え置き、単純電断、変更判別は未確認部分を分離して保存済み。

## resetBehavior遡及QA

既補完:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30
- スパイダーマン2G

直近QA:
- `docs/real_machine_db/machines/2006-10_spiderman2g.md`
- QA commit: `2412e7ff194ae127b67a76864a1c13c87a684276`

性能コアの既存COMPLETE_CORE完了判定は不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **400件地点 / パチスロがんばれ!!ロボコンまで完了**から再開。
2. **2009-08-24同日群を継続**。次の未処理候補は `めぞん一刻2`。repo未登録確認後、具体導入日・型式・性能コア＋v0.7 resetBehaviorを多段検索して401候補として追加する。
3. 同日群終了後、2009-08-25〜29をメーカー別/当時導入一覧で境界監査。
4. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべると2009-08-30納品予定を月末群で再確認する。

### resetBehavior遡及QA
1. **スパイダーマン2Gまで補完済み**。
2. 次は `docs/real_machine_db/machines/2006-10_surogenjin.md`。既にresetBehaviorがあれば飛ばし、次の未補完実ファイルへ進む。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 400 パチスロがんばれ!!ロボコン: `docs/real_machine_db/machines/2009-08-24_ganbare-robocon.md`
- machine record commit: `1780df9c1b33f1df524b716eddac04408bb051e4`
- 本 `LATEST_HANDOFF.md` を400件地点へ更新。
