# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 今回開始時の最新mainは **410件 `銀河英雄伝説`** まで進行済み。
- 2009-09-28同日群と2009-09-29〜30境界を再監査し、追加の安全な未登録パチスロを確定できなかったため9月を閉じた。
- 2009年10月へ進み、repo未登録かつ具体日資料を確認したニューギン **`スモモチャン`** を **411** として性能コア＋v0.7 resetBehavior同時収集した。

## 411. スモモチャン

record:
- `docs/real_machine_db/machines/2009-10-01_sumomo-chan.md`

machine record commit:
- `980569219f8e56b568262bf7a317574c0c6a95a8`

要点:
- manufacturer: **ニューギン**
- formalModelName: **スモモチャンV**
- approvalNumber: **9S0445**
- releaseDate: **CONFLICT — 2009-10-01（K-Naviホール導入開始） / 2009-10-12（2009年当時業界資料の納品予定）**。平均せず両方保持。
- generation: **5号機**
- systemType: **ノーマル / ボーナス主体 / 完全告知**
- P-WORLD主系列の機械割: **95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.1%**。旧解析系列は設定1 95.8%、設定6 105.2%でCONFLICT。
- BIG: **1/287.44 → 1/268.59**、REG: **1/455.11 → 1/268.59**、合算: **1/176.2 → 1/134.3**。
- BIG平均約**325枚**、REG約**104枚**。
- 旧解析で50枚ベースは **約34.5〜35.8G** のレンジのみ確認。設定別表は未回収のため各設定へ割り当てない。
- ボーナスのみで出玉を増やし、通常ゲーム数天井・RT/ART/AT/CZは確認されない。

### v0.7 resetBehavior — スモモチャン

- ゲーム数天井・RT/ART/AT/CZ・通常時長期ゲームモードがないため、天井カウンタ/短縮天井/ART状態リセットは `NOT_APPLICABLE`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- P-WORLDに、ホールが選択できる「キュイン」「スペシャルキュイン」の有無とモードによっては**設定変更を推測できる**旨の直接記載あり。
- ただし告知音設定のどの初期化/保持挙動が判別根拠になるか、設定変更時・据え置き時・単純電源OFF→ON時に告知音設定が保持されるかは本機固有資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン、初期出目、ランプ初期状態など別手段の変更判別も十分再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用当選率、短縮天井、リセット恩恵率、設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=PARTIAL_HIGH_VALUE_DETECTION_TRACE_CONFIRMED_NO_CEILING_STATE_POWER_NOTIFICATION_PERSISTENCE_UNVERIFIED`。

## 410. 銀河英雄伝説（直前）

record:
- `docs/real_machine_db/machines/2009-09-28_ginga-eiyuu-densetsu.md`

machine record commit:
- `8cdaeda62ec4d45f52c61eabdfe4c247ab56a83e`

要点:
- 2009-09-28導入、ミズホ、ボーナス+ART。
- ART純増約+2.0枚/G、通常ART間1600G天井。
- K-Naviに設定変更時の天井短縮を示す攻略項目存在を確認したが具体数値は未回収。
- 天井カウンタ/据え置き/電源OFF→ONの詳細は `UNVERIFIED_AFTER_RESEARCH`。

## 409. パチスロ交響詩篇エウレカセブン

record:
- `docs/real_machine_db/machines/2009-09-28_eureka-seven.md`

machine record commit:
- `974821dbe62d72e51494278c1aad019f5b754fcb`

要点:
- 設定変更後は内部高確スタートを旧解析で直接確認。
- 通常時909Gで天井ART3セット以上。
- 天井カウンタ/据え置き/電源OFF→ONは直接資料不足でUNVERIFIED。

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
1. **411件地点 / スモモチャンまで完了**から再開。
2. **2009-10-01同日群を最終監査**。同日候補・既存登録をrepo実ファイル/履歴と当時導入資料で突合し、漏れを閉じる。
3. その後 **2009-10-02〜10-11** を境界監査。具体日付き未処理パチスロがあれば最古から412として処理する。
4. 10月12日群へ進む場合、スモモチャンは当時業界資料で10月12日納品予定でもあるが本レコードで日付CONFLICTとして既収録のため重複登録しない。同日またはそれ以前の別機種を探索する。
5. その後も2009年10月を具体日優先で前進。月精度しかない機種を具体日機より前へ誤配置しない。
6. 候補ごとに性能コア＋v0.7 resetBehaviorを同時収集し、欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧まで十分再探索後のみUNVERIFIED。
7. 競合値は平均せずCONFLICT。後継/同名別機種の数値を転用しない。

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

- 411 スモモチャン: `docs/real_machine_db/machines/2009-10-01_sumomo-chan.md`
- machine record commit: `980569219f8e56b568262bf7a317574c0c6a95a8`
- 本 `LATEST_HANDOFF.md` を411件地点へ更新。
