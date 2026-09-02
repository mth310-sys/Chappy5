# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **423件 `青ドン～花火の極～`** まで進行。
- 2009-11-02同日群の `ダイ・ハード`（藤商事）、`新サーキットの狼`（ニューギン）、`決戦‐天翔る覇者‐`（西陣）は、当時グリーンべると/P-WORLD系資料で全てCRパチンコと確認し、本DBのパチスロ本線から除外して11月2日群を閉じた。
- 次の未登録パチスロ候補としてエレコ `青ドン～花火の極～` をrepo検索＋contents APIで未登録確認後、423件目として追加。
- `ハイパールーレット` / `パチスロ遠山の金さん` は2009年10月中旬までは確認済みだが、具体日を高信頼確定できていないため保留継続。具体日を無理に捏造しない。

## 423. 青ドン～花火の極～

record:
- `docs/real_machine_db/machines/2009-11-03_aodon-hanabi-no-kiwami.md`

machine record commit:
- `36c88fade97b6f3a332d56fd605b64f3627ea135`

要点:
- manufacturer: **エレコ（アルゼ / 現ユニバーサルエンターテインメント系）**
- formalModelName: **アオドンハナビノキワミ1**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2009-11-03（グリーンべると納品開始予定） / 2009-11-04（K-Naviホール導入開始） / 2009-11-05（パチビー導入日） / 一部後年資料2009-10表記**
- generation: **5号機**
- systemType: **ノーマル / BIG+REG + 天井RT / 技術介入**
- BIG: **1/372.36 → 1/297.89**
- REG: **1/819.20 → 1/546.13**
- 合算: **1/256.00 → 1/192.75**
- 50枚ベース: **42.16 / 42.43 / 43.56 / 44.75 / 46.01 / 48.75G**（旧パチマガ直接値）。
- BIG最大364枚、REG平均約112枚。
- BIG後1000G / REG後800Gで次回ボーナスまで天井RT。
- 機械割は複数系列競合のため平均せず `CONFLICT`。

### payout CONFLICT

- K-Navi / pacnk: **98.4 / 99.5 / 102.0 / 105.1 / 108.2 / 112.6%**
- 旧パチマガシミュレート: **98.43 / 99.50 / 102.12 / 105.26 / 108.46 / 113.10%**
- pachinko’s blog: **98.3 / 98.8 / 102.5 / 105.2 / 108.6 / 113.6%**
- けんのスロットシミュレーション: **97.3 / 98.5 / 101.2 / 104.4 / 107.7 / 112.2%**
- 算出条件差を解消できないため全系列保持。

### v0.7 resetBehavior — 青ドン～花火の極～

- `settingChangeBehavior`: **CEILING_GAME_COUNT_CARRIED_OVER_ON_SETTING_CHANGE**。後年解析で「設定変更 天井までのG数を引き継ぐ」を明記。K-Naviも `宵越アリ` で方向性整合。
- `carryOverBehavior`: **CEILING_PROGRESS_CARRIED_OVER**。前日ハマリ進捗が朝一天井狙いへ影響する。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの本機固有処理は直接確定できず。
- `gameCounterReset`: **NOT_RESET_BY_SETTING_CHANGE / CARRIED_OVER_FOR_CEILING**。
- `ceilingAfterReset`: **NO_SHORTENING_CONFIRMED / ORIGINAL_CEILING_PROGRESS_CARRIED_OVER**。
- `modeAfterReset`: `NOT_APPLICABLE_FOR_GAME_NUMBER_RELEASE_MODE / DISPLAY_MODE_UNVERIFIED`。ドンちゃん/クラシックは演出選択モード。
- `stateAfterReset`: **CEILING_PROGRESS_CARRIED_OVER; ACTIVE_RT_STATE_ON_CHANGE_UNVERIFIED**。天井RT突入済み状態で設定変更した場合のRT状態は直接確定できず。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits`: **CEILING_CARRYOVER_CAN_CREATE_MORNING_VALUE**。BIG後1000G / REG後800Gまでの前日進捗を変更でも引き継ぐため、前日最終G数と直前ボーナス種別が分かれば朝一価値が発生し得る。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/鉢巻ランプ等による変更判別を本機固有資料で確定できず。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### データ品質メモ — 青ドン～花火の極～

- 当時グリーンべると、K-Navi、パチビー、旧パチマガスロマガ解析、pacnk、中古実機DB、後年解析まで横断。
- 主要ボーナス値と50枚ベースは高整合。機械割のみ複数系列CONFLICT。
- resetBehavior欠損は `青ドン～花火の極～ / 青ドン 花火の極 / 青ドン・花火の極 / アオドンハナビノキワミ1 / エレコ / アルゼ / ユニバーサル` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越 / 電源OFF ON / 天井 / 天井RT / ガックン / 初期出目` を組み替え、資料系統を変えて再探索後のみUNVERIFIEDとした。

## 422. どんまい!!ちゅ～吉

record:
- `docs/real_machine_db/machines/2009-11-02_donmai-chukichi.md`

machine record commit:
- `ff85db65607709e23966abbf10811d01a338681a`

要点:
- JPS / 型式ドンマイチュウキチA / 2009-11-02。
- 機械割97.5〜112.4%、ボーナス合算1/88.5〜1/76.5、50枚ベース約38.4G（単一回顧値）。
- ART約+2.0枚/G、20/40/80G、最高継続率90%以上。
- resetBehaviorの高/低確・ART/CZ・電断・変更判別は十分再探索後も未確定。

## 421. タイムレスキューS

record:
- `docs/real_machine_db/machines/2009-11-01_time-rescue-s.md`

machine record commit:
- `2e7c3025b818b6522bf9cb50c64744e195aeff40`

要点:
- 山佐 / 型式タイムレスキュー / 検定9S0739。
- ノーマル、天井非搭載。BIG1/364.09→1/284.94、REG1/520.13→1/409.60。
- 機械割3系列CONFLICT。50枚ベース38.02→43.06G。

## 420. タイムレスキュー777

record:
- `docs/real_machine_db/machines/2009-11-02_time-rescue-777.md`

machine record commit:
- `0d337b88a31dd442c41b54fc1dfa8078998dd40f`

要点:
- 山佐 / 型式タイムレスキュー777 / 検定9S0670。
- 2009-11-02導入開始 / 11-01納品開始予定。
- BIG1/348.60→1/273.07、REG1/736.36→1/564.97、合算1/236.59→1/184.09。
- ボーナス間777Gで天井RT。設定変更後も天井までのG数を引継ぐ直接解析あり。

## 419. 噴火でDON!

record:
- `docs/real_machine_db/machines/2009-10-26_funka-de-don.md`

machine record commit:
- `2b50fa895a589098065e9edd399a73bf3382530c`

要点:
- トリビー / 型式フンカデドン / 検定8S1196。
- 2009-10-25納品開始 / 2009-10-26ホール導入開始。
- BIG1/297.89→1/236.59、REG1/364.09→1/239.18、機械割97.0→113.4%。
- 50枚ベース34.05→35.14G。

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

## 次回再開地点

### 本線
1. **423件地点 / 青ドン～花火の極～まで収録**から再開。
2. **2009-11-03同日群を最終監査**。グリーンべると納品日とK-Navi/パチビーの11月4〜5日導入日差があるため、同期間に別の未処理パチスロがないかメーカー/当時業界/主要DBで再確認する。
3. 11月3〜5日群を閉じたら **2009-11-06〜08 → 11月第2週** を具体日順に監査し、最古の未処理パチスロを424件目として追加する。
4. `ハイパールーレット` / `パチスロ遠山の金さん` は具体日を公式/当時業界/主要DBで高信頼確定できれば正しい位置へ遡及追加。確定できなければ月/旬精度の不確実性を保持して本線を止めない。
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

- machine record: `docs/real_machine_db/machines/2009-11-03_aodon-hanabi-no-kiwami.md`
- machine commit: `36c88fade97b6f3a332d56fd605b64f3627ea135`
- handoff: 本ファイルを423件地点へ更新。
