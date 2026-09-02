# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 今回開始時の最新mainは **409件 `パチスロ交響詩篇エウレカセブン`** まで進行済み。
- 2009-09-28同日群を継続監査し、repo未登録かつ具体導入日2009-09-28を確認したミズホ **`銀河英雄伝説`** を **410** として性能コア＋v0.7 resetBehavior同時収集した。

## 410. 銀河英雄伝説

record:
- `docs/real_machine_db/machines/2009-09-28_ginga-eiyuu-densetsu.md`

machine record commit:
- `8cdaeda62ec4d45f52c61eabdfe4c247ab56a83e`

要点:
- manufacturer: **ミズホ**
- releaseDate: **2009-09-28**（K-Naviホール導入開始）。ユニバーサル公式は2009年9月発売で整合。
- generation: **5号機**
- systemType: **ボーナス+ART / 押し順ART**
- ユニバーサル公式で「M.B.S（マシンガンボーナスシステム）」、純増**約+2.0枚/G**、完全押し順ナビを確認。
- パチマガスロマガ旧解析の機械割: **97.1 / 99.2 / 102.1 / 106.1 / 110.0 / 119.6%**。
- ボーナス合成: **1/297.89 → 1/268.59**。
- P-WORLDのART突入率: **1/442.3 / 1/327.0 / 1/412.7 / 1/253.3 / 1/360.2 / 1/181.5**。
- 50枚ベース: **36.2 / 36.2 / 36.2 / 36.1 / 36.0 / 35.9G**（パチマガスロマガ旧解析）。
- ボーナス実獲得目安はパチマガ約105枚、P-WORLD約104枚で近似。ただし名称表記がBIG/REGで揺れるため名称はCONFLICT保持。
- G.S.RUSH中の赤7揃い1回でART **33G or 99G** 上乗せ、最大36連、最大3564G。
- P-WORLDでART間**1600G**天井→G.S.RUSHを直接確認。ペナルティ時は1600G超となる場合あり。
- formalModelName / approvalNumber は十分再探索後も直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior — 銀河英雄伝説

- K-Navi現存機種ページに本機固有の朝一攻略項目 **「設定変更後は狙い目?」「天井ゲーム数が短縮?」** が存在。
- したがって設定変更時に通常1600G天井と異なる朝一天井挙動/短縮系恩恵が存在する資料痕跡は直接確認できた。
- ただし該当記事本文の具体数値・条件を今回確定回収できず、**短縮天井G数を推測しない**。
- `ceilingAfterReset=RESET_CEILING_CHANGE_INDICATED_VALUE_UNVERIFIED`。
- 設定変更時のART間天井カウンタが0G化/再セット/一部引継ぎのどれかは直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時のART間1600G進捗、単純電源OFF→ON、内部状態/ART待機状態の処理も本機固有直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン/初期出目/液晶/ステージ等の変更判別も十分再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 2025年スマスロ「銀河英雄伝説 Die Neue These」のリセット情報は別機種のため絶対に転用しない。
- `resetBehaviorQA=PARTIAL_HIGH_VALUE_RESET_CEILING_CHANGE_INDICATED_NUMERIC_COUNTER_POWER_CARRYOVER_UNVERIFIED`。

## 409. パチスロ交響詩篇エウレカセブン（直前）

record:
- `docs/real_machine_db/machines/2009-09-28_eureka-seven.md`

machine record commit:
- `974821dbe62d72e51494278c1aad019f5b754fcb`

要点:
- 設定変更後は内部高確スタートをpachirinko旧解析で直接確認。
- 通常時909Gで天井ART3セット以上。
- 天井カウンタ/据え置き/電源OFF→ONは直接資料不足でUNVERIFIED。

## 408. デコトラの鷲

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
1. **410件地点 / 銀河英雄伝説まで完了**から再開。
2. **2009-09-28同日群をもう一度最終監査**。同日候補・既存登録をrepo実ファイル/履歴と当時導入資料で突合し、漏れを閉じる。
3. その後 **2009-09-29〜09-30** を境界監査。具体日付き未処理パチスロがあれば最古から411として処理する。
4. 9月末を閉じた後 **2009年10月** へ進む。月精度しかない機種を具体日機より前へ誤配置しない。
5. 候補ごとに性能コア＋v0.7 resetBehaviorを同時収集し、欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧まで十分再探索後のみUNVERIFIED。
6. 競合値は平均せずCONFLICT。後継/同名スマスロ等の数値を旧機へ転用しない。

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

- 410 銀河英雄伝説: `docs/real_machine_db/machines/2009-09-28_ginga-eiyuu-densetsu.md`
- machine record commit: `8cdaeda62ec4d45f52c61eabdfe4c247ab56a83e`
- 本 `LATEST_HANDOFF.md` を410件地点へ更新。
