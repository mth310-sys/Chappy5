# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **420件 `タイムレスキュー777`** まで進行。
- 419 `噴火でDON!` 後、2009-10-26同日群〜10/31を具体日付きで再監査。安全に追加できる未登録機を確定できなかったため11月初旬へ接続した。
- `ハイパールーレット` / `パチスロ遠山の金さん` は2009年10月中旬までは確認済みだが、具体日を高信頼確定できていないため保留継続。具体日を無理に捏造しない。

## 420. タイムレスキュー777

record:
- `docs/real_machine_db/machines/2009-11-02_time-rescue-777.md`

machine record commit:
- `0d337b88a31dd442c41b54fc1dfa8078998dd40f`

要点:
- manufacturer: **山佐**
- formalModelName: **タイムレスキュー777**
- approvalNumber: **9S0670**
- releaseDate: **2009-11-02（HAZUSE導入開始） / 2009-11-01〜（グリーンべると当時記事の納品開始予定）**
- generation: **5号機**
- systemType: **ノーマル / BIG+REG / 天井RT**
- BIG合算: **1/348.60 → 1/273.07**
- REG: **1/736.36 → 1/564.97**
- 合算: **1/236.59 → 1/184.09**
- 市場機械割: **96.1 / 97.8 / 100.1 / 103.2 / 106.4 / 111.5%**
- 旧パチマガシミュレートPAYOUT: **94.47 / 96.64 / 98.95 / 102.01 / 105.16 / 109.38%** → 算出条件差未確定につき `CONFLICT`、平均せず両系列保持。
- 50枚ベース: **37.39 / 38.30 / 39.26 / 40.22 / 41.25 / 42.67G**（旧パチマガ直接値）。
- S-BIGフリー打ち平均約398枚/最大402枚、N-BIG約302枚/最大307枚、REG約98枚/最大103枚。
- ボーナス間777Gで天井RT「レスキュータイム」、次回ボーナスまで継続、約+0.1枚/G。

### v0.7 resetBehavior — タイムレスキュー777

- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。後年解析DBで「設定変更後も天井までのゲーム数を引き継ぎ、リセットされない」と直接記載。旧パチマガには「攻め時・ヤメ時・設定変更時」専用項目の存在まで確認したが本文未回収のため、単一直接資料として信頼度を抑えて採用。
- `gameCounterReset`: **CARRY_OVER_ON_SETTING_CHANGE_CONFIRMED_SINGLE_ANALYSIS_SOURCE**。
- `ceilingAfterReset`: **777G_FROM_LAST_BONUS_EFFECTIVELY_CARRY_OVER**。設定変更専用短縮天井は確認されず。
- `carryOverBehavior`: 天井ゲーム数進捗は引継ぎ確認。その他の成立状態/演出内部履歴は未確認。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の777Gカウンタ、天井RT中状態、演出ステージ、小役レスキュー内部履歴を直接確定できず。
- `stateAfterReset`: **UNVERIFIED_FOR_ACTIVE_CEILING_RT**。天井RT突入済み状態で設定変更した場合のRT状態処理は直接確定できず。
- `modeAfterReset`: `NOT_APPLICABLE_FOR_GAME_NUMBER_RELEASE_MODE`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits`: 天井進捗が設定変更で消去されないため、前日ハマリが残れば朝一の残り天井G数が短くなり得る。ただし専用リセット恩恵抽選ではない。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶初期ステージ、天井告知ランプ等による変更判別を直接確定できず。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### データ品質メモ — タイムレスキュー777

- 山佐現行アーカイブ、2009年当時グリーンべると、P-WORLD、HAZUSE、パチマガスロマガ旧解析、後年設定判別DB、回顧資料を横断。
- 性能コアは高整合。機械割のみ市場掲載値と旧パチマガシミュレート値が競合するため平均せずCONFLICT。
- 50枚ベースは旧パチマガの直接値を取得できたため推定計算なし。
- resetBehavior欠損は `タイムレスキュー777 / タイムレスキュー７７７ / タイムレスキュー / 山佐 / 9S0670` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / RT / レスキュータイム / ガックン / 初期出目` を組み替え、公式・当時業界・旧解析・後年DB/回顧まで再探索後のみUNVERIFIEDとした。

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
- 設定変更/据え置き/単純電源OFF→ON/変更判別は十分再探索後もUNVERIFIED。

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
1. **420件地点 / タイムレスキュー777まで収録**から再開。
2. 同時発売ファミリーの **`タイムレスキューS`** を最優先で未登録確認して追加する。HAZUSEでは **2009-11-01導入開始**、グリーンべるとでは777/Sとも **2009-11-01納品開始予定**。777を420件目として先行登録したため、Sは日付上1日前の遡及追加になるが、具体日を確定できた時系列補正として421件目に収録してよい。
3. Sの既確認候補値: BIG 1/364.08→1/284.93、REG 1/520.13→1/409.60、合算1/214.16→1/168.04、P_Style777機械割96.4→109.7%、HAZUSE 50枚ベース設定1〜6約38.0〜43.1G。天井は非搭載。設定変更/据え置き/電源OFF→ON/変更判別は本機固有資料を再探索してから確定する。
4. タイムレスキュー2スペックを閉じた後、**2009-11-02同日群 → 11月3日以降**をP-WORLD / K-Navi / パチビー / 当時グリーンべると / メーカー公式・旧発売一覧で境界監査する。
5. `ハイパールーレット` / `パチスロ遠山の金さん` は具体日を公式/当時業界/主要DBで高信頼確定できれば正しい位置へ遡及追加。確定できなければ月/旬精度の不確実性を保持して本線を止めない。
6. 各候補は性能コア＋v0.7 resetBehaviorを同時収集。競合値は平均せずCONFLICT、欠損は検索語・資料系統を十分変更して再探索した後のみUNVERIFIED_AFTER_RESEARCH。

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

- machine record: `docs/real_machine_db/machines/2009-11-02_time-rescue-777.md`
- machine commit: `0d337b88a31dd442c41b54fc1dfa8078998dd40f`
- handoff: 本ファイルを420件地点へ更新。
