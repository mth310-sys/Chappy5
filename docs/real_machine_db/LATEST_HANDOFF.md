# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時は394件 `絶対衝激～PLATONIC HEART～` まで完了済みだったため394を正本として継続。
- 2009-08-03同日群候補 `つばさTAKEOFF` を再監査。P-WORLD/パチビー/パチマガスロマガで正式メーカーは **コルモ**、型式 **ツバサテイクオフ**、検定8S0943を確認。当時導入日ブログのみ「エマ」表記のためmetadata conflictとして保持。
- 具体導入日はパチビー **2009-08-04**、当時導入日ブログ **2009-08-03**、P-WORLDは2009-08月精度。日差を潰さずCONFLICTとして **395** に追加。

## 395. つばさTAKEOFF

record:
- `docs/real_machine_db/machines/2009-08-04_tsubasa-takeoff.md`

machine record commit:
- `f9f24c57898db949a64bc84c5fe05b635b632fa8`

要点:
- manufacturer: **コルモ**
- formalModelName: **ツバサテイクオフ**
- inspectionNumber: **8S0943**
- releaseDate: **2009-08-04 / 2009-08-03 CONFLICT**（P-WORLDは2009-08月精度）
- generation: **5号機**
- systemType: **A+ART / AT / パンク回避 / 天井RT・ART / 技術介入**
- 赤7BIG **1/1310.72→1/636.27**、黒/紫7BIG **1/1092.27→1/1872.46**、緑7BIG **1/595.78→1/675.63**、合算 **1/297.89→1/278.88**。
- 50枚ベース **35.93 / 36.15 / 36.37 / 36.59 / 36.81 / 37.11G**。
- 赤/黒BIG約300枚、緑BIG約100枚。
- ART「リゾートタイム」約**+1.0枚/G**。通常モード赤7後は最大800Gナビ、高確中赤7後は次回ボーナスまでナビ。黒/緑BIGは高確中なら最大400G AT。
- 通常時 **1200Gで天井RT / 1500Gで天井ART**。
- 機械割はP-WORLD市場掲載 **97.1〜115.2%**、旧パチマガシミュレートは攻略なし **93.37〜106.72%** / 攻略あり **96.81〜117.05%**。測定/攻略条件差として平均せず別系列保存。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT_AND_RELEASE_DAY_CONFLICT`。

### v0.7 resetBehavior — つばさTAKEOFF

- settingChangeBehavior / carryOverBehavior / powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更・据え置き・単純電断時の1200/1500G天井カウンタ、通常/高確モード、ART/AT状態処理を本機固有の直接本文で確定できず。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常1200G RT / 1500G ART天井自体は確定。
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の短縮・再起算は未確定。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。
- `resetBehaviorQA=PARTIAL_RESEARCH_PASS_NORMAL_1200G_RT_1500G_ART_CEILINGS_CONFIRMED_RESET_COUNTER_MODE_STATE_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

## resetBehavior遡及QA

今回補完:
- `docs/real_machine_db/machines/2006-10_nangoku-musume-30.md`
- commit: `467f2ebd745f2e3b35c678c7ffb2b31a3784efe4`

### 南国娘30 QA結果

- 旧レコードで未確認だった性能コアも、30Φ版パチマガスロマガ直接ページから回収。
- 機械割 **97.09 / 99.66 / 101.73 / 103.44 / 105.92 / 108.77%**。
- 50枚ベース **36.15 / 36.65 / 37.00 / 37.30 / 37.74 / 39.21G**。
- BIG **1/264.26→1/219.92**、REG **1/528.52→1/439.84**。
- BIG後50G RT、RT純増約**+0.6枚/G**。
- これにより旧 `payoutRateBySetting / baseGamesPer50 / 30Φ版単独RT純増` 欠損を解消。既存性能値を壊さず、直接解析値で補強。
- 設定変更/据え置き/電源OFF→ON時のBIG後RT残G・内部RT状態処理は、本機固有の直接資料を今回も確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数到達型天井・ゲーム数管理モードは公開解析で確認されず非該当として分離。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 2020年以降の `南国娘2` / `南国育ち30` のリセット情報は別機種として混入させない。
- `resetBehaviorQA=PARTIAL_RESEARCH_PASS_NO_GAME_COUNT_CEILING_OR_RESET_BENEFIT_FOUND_RT_STATE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

既補完:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30 ← 今回到達

性能コアの既存COMPLETE_CORE完了判定は不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **395件地点 / つばさTAKEOFFまで完了**から再開。
2. 2009-08-05〜16を境界監査。2009-08-03/04群で追加漏れがないかも最後に確認する。
3. 未処理がなければ **2009-08-17 `真・女神転生` / `侍ジャイアンツ2`** 群へ進む。
4. その後2009-08-24群の `2027II`、`神たま～ARTやで!全員集合～`、`パチスロがんばれ!!ロボコン`、`めぞん一刻2` 等をrepo既存確認しながら時系列処理。
5. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべるとで2009-08-30納品予定確認済み。8月末群で具体日順を再確認する。

### resetBehavior遡及QA
1. **南国娘30まで補完済み**。
2. 次の実ファイルは `docs/real_machine_db/machines/2006-10_spiderman2g.md`。現時点でresetBehavior未収集を確認済み。次回は設定変更/据え置き/電断時の最大150G/50G RT残G・内部RT状態、パンク回避状態、変更判別を当時業界/旧解析中心に再探索して補完する。
3. その後 `2006-10_surogenjin.md` を確認。補完済みなら次の未補完実ファイルへ進む。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。

## 今回の保存

- 395 つばさTAKEOFF: `docs/real_machine_db/machines/2009-08-04_tsubasa-takeoff.md`
- machine record commit: `f9f24c57898db949a64bc84c5fe05b635b632fa8`
- 南国娘30 resetBehavior QA + 性能コア補強: commit `467f2ebd745f2e3b35c678c7ffb2b31a3784efe4`
- 本 `LATEST_HANDOFF.md` を395件地点へ更新。
