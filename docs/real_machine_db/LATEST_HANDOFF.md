# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **419件 `噴火でDON!`** まで進行。
- 418 `パチスロ エイリアンVSプレデター` 後、2009-10-20〜10-25境界を再監査。トリビー `噴火でDON!` はグリーンべると当時記事で **2009-10-25納品開始**、K-Naviで **2009-10-26ホール導入開始**を確認し、repo未登録だったため419件目として追加した。
- `ハイパールーレット` / `パチスロ遠山の金さん` は2009年10月中旬までは確認済みだが、具体日を高信頼確定できていないため保留継続。具体日を無理に捏造しない。

## 419. 噴火でDON!

record:
- `docs/real_machine_db/machines/2009-10-26_funka-de-don.md`

machine record commit:
- `2b50fa895a589098065e9edd399a73bf3382530c`

要点:
- manufacturer: **トリビー**
- formalModelName: **フンカデドン**
- approvalNumber: **8S1196**
- releaseDate: **2009-10-26（K-Naviホール導入開始） / 2009-10-25〜（グリーンべると当時記事の納品開始）**
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / BIG+REG**
- 設定構成: **1 / 3 / 5 / 6**
- BIG: **1/297.89 / 1/282.48 / 1/253.03 / 1/236.59**
- REG: **1/364.09 / 1/348.60 / 1/327.68 / 1/239.18**
- 合算: **1/163.8 / 1/156.0 / 1/142.8 / 1/118.9**
- 機械割: **97.0 / 99.9 / 106.1 / 113.4%**
- 50枚ベース: **34.05 / 34.49 / 34.97 / 35.14G**
- BIG約**312枚**、REG約**130枚**。
- 通常ゲーム数天井、RT/ART/AT、周期CZ、ゲーム数管理モードは公開資料上確認されない。

### v0.7 resetBehavior — 噴火でDON!

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。本機固有の設定変更時挙動を直接確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_POWER_STATE**。天井/ゲーム数管理はN/Aだが、表示・役物・成立状態等の本機固有据え置き復帰は未確認。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のリール初期位置、火山役物/表示状態、成立ボーナス状態の保持/復帰を未確認。
- `gameCounterReset`: `NOT_APPLICABLE_FOR_CEILING_OR_GAME_NUMBER_MODE`。
- `ceilingAfterReset`: `NOT_APPLICABLE`。
- `modeAfterReset`: `NOT_APPLICABLE_FOR_GAME_NUMBER_MODE`。
- `stateAfterReset`: `NOT_APPLICABLE_FOR_RT_ART_AT_CZ_STATE`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、役物位置、ランプ/表示による変更判別を直接確定できず。
- REG後噴火回数は設定推測要素だが、設定変更/据え置き判別とは分離。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### データ品質メモ — 噴火でDON!

- グリーンべると2009年当時記事、P-WORLD、K-Navi、パチマガスロマガ旧解析を横断。
- 型式名/検定番号はP-WORLDで確認。
- 機械割はP-WORLD/K-Naviで一致。
- BIG/REG/合算はP-WORLD精密値とK-Navi丸め値で整合。
- 50枚ベースは旧パチマガの直接値を取得できたため推定計算なし。
- resetBehavior欠損は `噴火でDON! / 噴火でDON / フンカデドン / トリビー` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 初期出目 / 火山役物 / 宵越し` を組み替え、当時業界・主要DB・旧解析・回顧まで再探索後のみUNVERIFIEDとした。

## 418. パチスロ エイリアンVSプレデター

record:
- `docs/real_machine_db/machines/2009-10_alien-vs-predator.md`

machine record commit:
- `113b91c5b097024fb2ce53c218f02cb58bf44fef`

要点:
- 藤商事 / 型式エーブイピーFS2 / 検定9S0386。
- releaseDateはパチビー2009-10-19 / グリーンべると納品2009-10-25〜の `CONFLICT_DATE_DEFINITION`。
- BIG全設定1/436.9、REG1/478.4→1/445.8、機械割97.3→119.0%。
- ART50G/セット・約+1.2枚/G、1200G/1700Gの2段階ボーナス間天井。
- 50枚ベースと設定変更時の天井/周期/ART処理は十分再探索後もUNVERIFIED。

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
- 次はrepo contents/treeを時系列順に再走査し、スロ原人直後の最初の `resetBehavior — v0.7` 未補完レコードから続行する。
- 性能コアの既存COMPLETE_CORE/既存coreStatusは不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **419件地点 / 噴火でDON!まで収録**から再開。
2. **2009-10-26同日群 → 10月27〜31日**を具体日付きで境界監査する。
3. `ハイパールーレット`（2009年10月中旬納品開始予定）と `パチスロ遠山の金さん`（2009年10月中旬ホール導入予定）は、具体日を公式/当時業界/主要DBで高信頼確定できれば正しい位置へ遡及追加。確定できなければ月/旬精度の不確実性を保持して本線を止めない。
4. 10月末まで他に具体日付き未処理がなければ **2009年11月初旬群**へ進む。P-WORLD / K-Navi / パチビー / 当時グリーンべると / メーカー公式・旧発売一覧を横断し、候補をrepo contents/APIで未登録確認してから追加する。
5. 各候補は性能コア＋v0.7 resetBehaviorを同時収集。競合値は平均せずCONFLICT、欠損は検索語・資料系統を十分変更して再探索した後のみUNVERIFIED_AFTER_RESEARCH。

### resetBehavior遡及QA
1. **スロ原人まで補完済み**。
2. 次はスロ原人直後の最初のv0.7未補完既存レコードをrepo実ファイル順で特定。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、公式・当時業界・当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイルだけでなくcontents API/履歴でも未登録確認し、検索index遅延による重複を避ける。
- 性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- machine record: `docs/real_machine_db/machines/2009-10-26_funka-de-don.md`
- machine commit: `2b50fa895a589098065e9edd399a73bf3382530c`
- handoff: 本ファイルを419件地点へ更新。
