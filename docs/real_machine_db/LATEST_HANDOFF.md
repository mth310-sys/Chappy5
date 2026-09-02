# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **414件 `球児2`** まで進行。
- 413 `KODA KUMI PACHISLOT LIVE IN HALL II` 後、2009-10-14〜10-18境界を再監査。
- ネイチャー・アセスメント `ハイパールーレット` は2009-09-01当時グリーンべるとで **10月中旬より納品開始予定**、大一 `パチスロ遠山の金さん` は2009-09-01 K-Navi発表会記事で **10月中旬ホール導入予定** まで。今回も10/14〜10/18の具体日を高信頼確定できなかったため、無理に具体日へ固定しない。
- SNKプレイモア `球児2` は2009-09-07グリーンべると当時記事で **2009-10-18納品開始** を直接確認できたため、413の次の具体時系列点として414に登録した。

## 414. 球児2

record:
- `docs/real_machine_db/machines/2009-10-18_kyuji2.md`

machine record commit:
- `d1c45aa8756ed3c9b176d0c80a6e43ac61f05652`

要点:
- manufacturer: **SNKプレイモア**
- releaseDate: **2009-10-18**（グリーンべると当時記事の納品開始日。P-WORLD/pacnkは2009-10月精度）
- generation: **5号機**
- systemType: **ノーマル / ボーナス主体 + 天井RT / 技術介入**
- BIG合算: **1/284.9前後 → 1/246.4前後**
- REG: **1/520.13 → 1/280.07**
- 合算: **1/184.1 → 1/131.1**
- BIG: 通常約307枚 / 技術介入MAX312枚
- REG: 通常約104枚 / 技術介入MAX116枚
- ボーナス間 **922G** で次回ボーナスまでの天井RT。
- 50枚ベース: 十分再探索したが比較可能な直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### CONFLICT — 球児2

- 機械割:
  - P-WORLD: **97.44 / 98.49 / 100.62 / 102.53 / 106.78 / 110.03%**
  - pacnk: **97.9 / 99.0 / 101.1 / 103.0 / 107.4 / 110.7%**
  - 当時系二次資料には各設定で下限〜上限レンジ表記も存在。技術介入条件差が疑われるが、算出条件を一次資料で完全分離できないため `CONFLICT_PAYOUT_RATE` として平均しない。
- 天井RT純増:
  - グリーンべると当時記事: **約+0.2枚/G**
  - pacnk: **設定1 +0.10枚/G / 設定6 +0.15枚/G**
  - 条件差未解消につき `CONFLICT_RT_NET_INCREASE`。
- 当時系ブログ1件だけ天井を `992G` とするが、グリーンべると・P-WORLD・パチマガスロマガ旧解析・pacnkが **922G** で一致するため誤記として隔離。

### v0.7 resetBehavior — 球児2

- `gameCounterReset`: **NOT_RESET_BY_SETTING_CHANGE / CARRIED_OVER**。pacnk本機ページに「設定変更をしても天井までのゲーム数はリセットされない」と本機固有の直接記載あり。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED; 922G_COUNTER_CONTINUES_ACROSS_SETTING_CHANGE**。
- `settingChangeBehavior`: 922G天井カウンタ非リセットは確認。天井RT滞在中そのものの設定変更後RT状態/表示は `UNVERIFIED_AFTER_RESEARCH`。
- `carryOverBehavior`: 「据え置き時」を独立して明記した本機固有資料は今回未回収。設定変更でもカウンタ非リセットという事実から推定せず、`UNVERIFIED_AFTER_RESEARCH_AS_EXPLICIT_STATEMENT`。
- `powerCycleBehavior`: 単純電源OFF→ON時の922Gカウンタ/RT状態/延長戦ランプ復帰は `UNVERIFIED_AFTER_RESEARCH`。
- `modeAfterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`。
- `stateAfterReset`: 通常の高低状態管理は確認されないが、天井RT滞在中の設定変更処理は `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits`: **天井進捗が設定変更で消去されない**こと自体が朝一狙いへ影響しうる。専用短縮天井・朝一専用モード・設定変更専用当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: ガックン/初期出目/リール/延長戦ランプ等を検索語・資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- `numericResetData.normalGameCountCeiling`: **922G（ボーナス間）**。
- `resetBehaviorQA=PARTIAL_SETTING_CHANGE_CEILING_CARRYOVER_CONFIRMED_POWER_CYCLE_ACTIVE_RT_STATE_CHANGE_DETECTION_UNVERIFIED`。

### データ品質メモ — 球児2

- 2009年グリーンべると、P-WORLD、パチマガスロマガ旧解析、pacnkで922G天井RTと主要ボーナス性能を複数系統照合。
- 50枚ベース、正式型式名、検定番号は検索語/資料系統変更後も今回未確定。
- 本機固有の設定変更による天井カウンタ非リセットを取れたため、一般的な5号機挙動で補完していない。

## 413. KODA KUMI PACHISLOT LIVE IN HALL II

record:
- `docs/real_machine_db/machines/2009-10-13_koda-kumi-pachislot-live-in-hall-ii.md`

machine record commit:
- `e8ad79b24c5c27159a07be1555c11221fa3afaac`

要点:
- SANKYO / 2009-10-13 / ボーナス+RT/CZ。
- 機械割95.8〜110.0%、BIG 1/312→1/262、CHALLENGE BONUS 1/420→1/273、合算1/179→1/133。
- 50枚ベース35.88〜38.48G。
- RT約+0.1枚/G、33G/3333G。
- 通常ゲーム数天井なし。
- resetBehaviorはRT/CZ状態、据え置き、電源OFF→ON、変更判別が `UNVERIFIED_AFTER_RESEARCH`。

## 412. ゴールデンベルE

record:
- `docs/real_machine_db/machines/2009-10_golden-bell-e.md`

machine record commit:
- `5d8618a6746013a8b86f03ad6ea56e547fec7d33`

## 411. スモモチャン

record:
- `docs/real_machine_db/machines/2009-10-01_sumomo-chan.md`

machine record commit:
- `980569219f8e56b568262bf7a317574c0c6a95a8`

## 410. 銀河英雄伝説

record:
- `docs/real_machine_db/machines/2009-09-28_ginga-eiyuu-densetsu.md`

machine record commit:
- `8cdaeda62ec4d45f52c61eabdfe4c247ab56a83e`

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
1. **414件地点 / 球児2（2009-10-18納品開始）まで収録**から再開。
2. まず `ハイパールーレット` / `パチスロ遠山の金さん` の「10月中旬」表記に **10/18以前または10/19の具体納品/導入日**を確定できる当時一次・業界・解析資料が新たに取れないか、最後に境界監査する。月/旬精度しか取れなければ無理に順番を固定せず不確実性を保持。
3. 次の具体日群は **2009-10-19**。候補 `GS美神 極楽大作戦!!` はK-Navi/コミックナタリーで10/19ホール導入を確認済み、repo未登録を再確認して次件候補とする。
4. `マジックスパイス` はパチビーで10/19導入表記を確認済み。`ダブルアタック` もパチビーで10/19導入表記を確認済み。
5. `パチスロ エイリアンVSプレデター` はグリーンべると当時記事で **10/25納品開始** と確認できるため、10/19群へ混ぜず10/25以降へ置く。
6. 各候補はrepo未登録・導入日を再確認してから、性能コア＋v0.7 resetBehaviorを同時収集する。
7. 欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧まで十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。競合値は平均せず `CONFLICT`。

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

- 414 球児2: `docs/real_machine_db/machines/2009-10-18_kyuji2.md`
- machine record commit: `d1c45aa8756ed3c9b176d0c80a6e43ac61f05652`
- 本 `LATEST_HANDOFF.md` を414件地点へ更新。
