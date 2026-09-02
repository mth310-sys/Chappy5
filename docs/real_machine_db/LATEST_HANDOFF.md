# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 今回開始時の最新mainは **408件 `デコトラの鷲`** まで進行済み。
- 2009-09-28同日群を再監査し、repo未登録かつ具体導入日2009-09-28を確認した **`パチスロ交響詩篇エウレカセブン`** を **409** として性能コア＋v0.7 resetBehavior同時収集した。

## 409. パチスロ交響詩篇エウレカセブン

record:
- `docs/real_machine_db/machines/2009-09-28_eureka-seven.md`

machine record commit:
- `974821dbe62d72e51494278c1aad019f5b754fcb`

要点:
- manufacturer: **サミー**
- formalModelName: **エウレカセブンZ**
- approvalNumber: **9S0472**
- releaseDate主値: **2009-09-28**（K-Navi）。セガサミー公式回顧は2009年9月発売、ハズセは2009-10-31のため日付差をCONFLICT保持。
- generation: **5号機**
- systemType: **A+ART / セットストック型ART**
- 機械割: **96.5 / 98.0 / 100.1 / 104.2 / 108.7 / 112.6%**。pachirinko旧解析と2009年更新5号機まとめwikiで同系列確認。
- BIG: **1/409.60 → 1/364.09**、REG: **1/655.36 → 1/512.00**、ボーナス合算: **1/252.06 → 1/212.78**。
- ART出現率: **1/212.9 → 1/144.0**。
- ART「コーラリアンモード」1セット**50G**。当時旧解析純増約**+1.5枚/G**、後年回顧約**+1.6枚/G**でCONFLICT。平均しない。
- 赤7BIG約**303枚**、白7BIG約**204枚**、REG約**30〜50枚**。
- 通常時**909G**で天井ART、**3セット以上**確定。
- 50枚ベースは表記揺れ・型式・メーカー・50枚/1000円/コイン持ち等を組み替えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior — エウレカセブン

- **重要直接確認: pachirinko旧解析に「設定変更後は内部的に高確率状態からスタートする」と明記。**
- `settingChangeBehavior=HIGH_STATE_START_CONFIRMED`。
- `stateAfterReset=HIGH_CONFIRMED`。
- 朝一恩恵として設定変更後は内部高確スタート。初代の設定別高確スタート率は直接資料を確定できず、後継機の数値を転用しない。
- 天井909G自体は確認済みだが、**設定変更時の天井カウンタがリセットか引継ぎかは直接資料不足**で `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井進捗/内部状態/ARTストック、単純電源OFF→ON時処理も本機固有直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン/初期出目/液晶/ステージ等の変更判別も十分な再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- `resetBehaviorQA=PARTIAL_HIGH_VALUE_DIRECT_HIGH_STATE_START_CONFIRMED_COUNTER_POWER_CARRYOVER_UNVERIFIED`。

## 408. デコトラの鷲（直前）

record:
- `docs/real_machine_db/machines/2009-09-28_dekotora-no-shu.md`

machine record commit:
- `eac3415de671921a42ba1fe7b85fe2c05e3d0360`

要点:
- 設定変更でも天井ゲーム数引継ぎをP_Style777当時解析で直接確認。
- 第1天井999GでART3セット以上、第2天井はさらに999Gで7or10セット。
- 機械割はP_Style777 97.5〜110.5% vs pachirinko 96.3〜111.1%でCONFLICT。

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
1. **409件地点 / パチスロ交響詩篇エウレカセブンまで完了**から再開。
2. **2009-09-28同日群を継続監査**。現時点の最優先候補はミズホ **`銀河英雄伝説`**。K-Naviで2009-09-28ホール導入開始を確認済み、repoコミット検索では未登録。
3. 銀河英雄伝説のrepo実ファイル/履歴未登録を再確認し、同日またはそれ以前の未処理パチスロがなければ410として処理する。
4. その後9月29〜30日境界を閉じ、2009年10月群へ進む。月精度しかない機種を具体日機より前へ誤配置しない。
5. 既存レコードの欠損は後続QAで直接資料が見つかった場合のみ補完。推定値は入れない。

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

- 409 パチスロ交響詩篇エウレカセブン: `docs/real_machine_db/machines/2009-09-28_eureka-seven.md`
- machine record commit: `974821dbe62d72e51494278c1aad019f5b754fcb`
- 本 `LATEST_HANDOFF.md` を409件地点へ更新。
