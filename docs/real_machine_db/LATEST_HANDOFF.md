# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **422件 `どんまい!!ちゅ～吉`** まで進行。
- 2009-11-02同日群の監査を継続し、ALL7でJPS `どんまい!!ちゅ～吉` の具体日2009-11-02を確認、repo未登録を確認後422件目として追加。
- `ハイパールーレット` / `パチスロ遠山の金さん` は2009年10月中旬までは確認済みだが、具体日を高信頼確定できていないため保留継続。具体日を無理に捏造しない。

## 422. どんまい!!ちゅ～吉

record:
- `docs/real_machine_db/machines/2009-11-02_donmai-chukichi.md`

machine record commit:
- `ff85db65607709e23966abbf10811d01a338681a`

要点:
- manufacturer: **ジェイピーエス（JPS）**
- formalModelName: **ドンマイチュウキチA**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2009-11-02（ALL7導入予定） / 2009-11（5号機クロニクル）**
- generation: **5号機**
- systemType: **A+ART / BIG+REG + 押し順ART**
- 機械割: **97.5 / 99.5 / 101.5 / 104.4 / 108.3 / 112.4%**
- ボーナス合算: **1/88.5 / 1/86.6 / 1/84.8 / 1/81.9 / 1/79.1 / 1/76.5**
- 50枚ベース: **約38.4G/1000円（全設定共通の後年実機配信記録、単一回顧値）**
- ART `マンモスタイム`: **約+2.0枚/G、20G/40G/80G、最高継続率90%以上**。
- 赤7BIG約100枚、白7BIG約50枚、ちゅ～ちゅ～ボーナス約50枚。
- 通常時に高/低確状態が存在することは当時グリーンべるとで確認。
- 通常ゲーム数天井、設定別ART初当たり、検定番号は十分な再探索後も今回直接確定できず。

### v0.7 resetBehavior — どんまい!!ちゅ～吉

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の高/低確、ART/CZ、継続状態の初期化/再抽選本文を回収できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の高/低確、ART/CZ、ART継続状態の保持可否を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONの本機固有挙動を直接確定できず。
- `gameCounterReset`: `NO_NORMAL_GAME_NUMBER_CEILING_CONFIRMED / OTHER_PROGRESS_COUNTERS_UNVERIFIED`。
- `ceilingAfterReset`: `NO_RESET_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH`。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。高/低確状態の変更時振分・朝一専用モードは直接資料未確認。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/ランプ等の変更判別を本機固有資料で確定できず。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### データ品質メモ — どんまい!!ちゅ～吉

- 当時グリーンべると、P-WORLD、パチトラ、ALL7、5号機クロニクル、A-SLOT、旧パチマガ索引、実機回顧/配信記録まで横断。
- 性能コア主要値は複数系統で高整合。50枚ベースのみ直接回収できたのが後年実機配信記録の単一値のため信頼度を分離。
- resetBehavior欠損は `どんまい!!ちゅ～吉 / どんまいちゅ～吉 / どんまいちゅー吉 / ドンマイチュウキチA / JPS / ジェイピーエス` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電源オンオフ / 天井 / 高確 / 低確 / ART / ストック / ガックン / 初期出目` を組み替えて再探索後のみUNVERIFIEDとした。

## 421. タイムレスキューS

record:
- `docs/real_machine_db/machines/2009-11-01_time-rescue-s.md`

machine record commit:
- `2e7c3025b818b6522bf9cb50c64744e195aeff40`

要点:
- manufacturer: **山佐**
- formalModelName: **タイムレスキュー**
- approvalNumber: **9S0739**
- releaseDate: **2009-11-01（HAZUSE導入開始 / グリーンべると納品開始予定）**
- generation: **5号機**
- systemType: **ノーマル / BIG+REG / 天井非搭載**
- BIG合算: **1/364.09 → 1/284.94**
- REG: **1/520.13 → 1/409.60**
- 合算: **1/214.17 → 1/168.04**
- P-WORLD系列機械割: **96.5 / 97.8 / 99.4 / 102.9 / 106.3 / 111.5%**
- P_Style777系列: **96.4 / 97.7 / 99.3 / 102.8 / 106.2 / 109.7%**
- 旧パチマガシミュレートPAYOUT: **95.60 / 96.83 / 98.45 / 101.86 / 105.40 / 109.10%**
- 算出条件差未確定につき3系列を `CONFLICT`、平均せず保持。
- 50枚ベース: **38.02 / 38.32 / 38.93 / 39.86 / 41.23 / 43.06G**（旧パチマガ直接値）。
- S-BIGフリー打ち平均約398枚/最大402枚、N-BIG約302枚/最大307枚、REG約98枚/最大103枚。
- Sは天井非搭載。兄弟機777のみボーナス間777Gの天井RTあり。

### v0.7 resetBehavior — タイムレスキューS

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_VISIBLE_STATE**。天井/RT/ART/AT/CZ/ゲーム数解除モードがないため、それらのリセット処理は非該当。設定変更時の液晶初期ステージ・初期出目等は本機固有直接資料を確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_FOR_CEILING_COUNTER`。
- `ceilingAfterReset`: `NOT_APPLICABLE`。通常天井・短縮天井なし。
- `modeAfterReset`: `NOT_APPLICABLE_FOR_GAME_NUMBER_RELEASE_MODE`。
- `stateAfterReset`: `NOT_APPLICABLE_FOR_RT_ART_AT_CZ_STATE`。その他の演出内部状態は未確認。
- `carryOverBehavior`: 天井G数/ARTストック等の保持対象なし。液晶ステージ等の電断跨ぎは未確認。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。旧パチマガ「攻め時・ヤメ時」は「特にナシ」。朝一専用短縮天井/高確/CZ/当選率等は確認されず。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶初期ステージ、ランプ等による変更判別を直接確定できず。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### データ品質メモ — タイムレスキューS

- 山佐現行アーカイブ、2009年当時グリーンべると/K-Navi、P-WORLD、HAZUSE、P_Style777、パチマガスロマガ旧解析、後年回顧を横断。
- 性能コアは高整合。機械割のみ3系列競合のため平均せずCONFLICT。
- 50枚ベースは旧パチマガの直接値を取得できたため推定計算なし。
- resetBehavior欠損は `タイムレスキューS / タイムレスキューＳ / タイムレスキュー / 山佐 / 9S0739` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / RT / ガックン / 初期出目 / ステージ` を組み替え、公式・当時業界・旧解析・後年回顧まで再探索後のみUNVERIFIEDとした。

## 420. タイムレスキュー777

record:
- `docs/real_machine_db/machines/2009-11-02_time-rescue-777.md`

machine record commit:
- `0d337b88a31dd442c41b54fc1dfa8078998dd40f`

要点:
- 山佐 / 型式タイムレスキュー777 / 検定9S0670。
- 2009-11-02導入開始 / 2009-11-01〜納品開始予定。
- BIG 1/348.60→1/273.07、REG 1/736.36→1/564.97、合算1/236.59→1/184.09。
- 市場機械割96.1→111.5%、旧パチマガシミュレート94.47→109.38%でCONFLICT。
- 50枚ベース37.39→42.67G。
- ボーナス間777Gで天井RT、約+0.1枚/G。
- 設定変更後も天井までのゲーム数を引継ぐ直接解析あり。単純電断、天井RT突入済み状態、変更判別は未確認。

## 419. 噴火でDON!

record:
- `docs/real_machine_db/machines/2009-10-26_funka-de-don.md`

machine record commit:
- `2b50fa895a589098065e9edd399a73bf3382530c`

要点:
- トリビー / 型式フンカデドン / 検定8S1196。
- 2009-10-25納品開始 / 2009-10-26ホール導入開始。
- BIG 1/297.89→1/236.59、REG 1/364.09→1/239.18、機械割97.0→113.4%。
- 50枚ベース34.05→35.14G。通常ゲーム数天井、RT/ART/AT、周期CZ、ゲーム数管理モードは確認されず。

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
1. **422件地点 / どんまい!!ちゅ～吉まで収録**から再開。
2. **2009-11-02同日群の残りを最終監査**。ALL7同日候補は `ダイ・ハード`（藤商事）、`新サーキットの狼`（ニューギン）、`決戦‐天翔る覇者‐`（西陣）。ALL7はパチンコ/パチスロ混在一覧なので、各候補が回胴式遊技機かをP-WORLD・メーカー・当時業界資料で確認し、パチスロだけを本DBへ追加する。
3. 同日群を閉じたら **2009-11-03 `青ドン 花火の極`** を次の具体日候補としてrepo未登録監査する。
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

- machine record: `docs/real_machine_db/machines/2009-11-02_donmai-chukichi.md`
- machine commit: `ff85db65607709e23966abbf10811d01a338681a`
- handoff: 本ファイルを422件地点へ更新。
