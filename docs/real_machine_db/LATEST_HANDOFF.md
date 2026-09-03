# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **448**
- latestMachineAdded: **パチスロスーパー海物語**
- latestRecord: `docs/real_machine_db/machines/2010-02-08_pachislot-super-umi-monogatari.md`
- chronologicalFrontier: **2010-02-08**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 2010-02-08同日群を継続し、三洋物産「パチスロスーパー海物語」を448件目として追加。同日/直前境界に「アフロのモンチ」が残るため、次回はこれを最優先で処理してから2/8群を閉じる。

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、既存前線レコード `2010-02-08_karas.md` を再読。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わずLATEST_HANDOFF＋実レコードを優先。
- 開始時mainは447件 / chronologicalFrontier 2010-02-08 / latestMachineAdded 鴉-KARAS-。
- LATEST_HANDOFF最優先候補 `パチスロスーパー海物語` をrepo検索し、既存レコードなしを確認後に調査・追加。
- 後継 `スーパー海物語IN沖縄`（2011）・`IN沖縄2`（2016）・6号機/スマスロ系は別機種のため数値転用なし。

## 448 — パチスロスーパー海物語 要約

- メーカー: **三洋物産**
- 導入: **2010-02-08**（K-Naviホール導入開始）
- 世代: **5号機**
- システム: **ノーマルA / ボーナス主体 / 完全告知**
- BIG: **1/299.25 / 1/293.88 / 1/288.70 / 1/278.87 / 1/269.69 / 1/257.00**
- REG: **1/392.43 / 1/376.64 / 1/362.07 / 1/316.59 / 1/283.70 / 1/257.00**
- 合算: **1/169.78 / 1/165.08 / 1/160.63 / 1/148.27 / 1/138.26 / 1/128.50**
- 機械割市場掲載系列: **98.0 / 99.1 / 100.2 / 103.2 / 106.4 / 110.0〜110.1%**
- 旧パチマガシミュレート系列: **97.71 / 98.75 / 99.77 / 103.02 / 106.18 / 110.02%** → `CONFLICT_DEFINITION_SIMULATED_VS_LISTED`
- BIG: **約336枚**
- REG: **約104枚**
- RT/ART/AT: **なし**
- 本機固有ゲーム数天井: **NO_CEILING_CONFIRMED_AFTER_RESEARCH**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- formalModelName / approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

## resetBehavior v0.7 — パチスロスーパー海物語

- **設定変更**: `NO_PUBLISHED_SPECIAL_RESET_BEHAVIOR_CONFIRMED_AFTER_RESEARCH`。ボーナスのみのノーマルAで、天井/RT/ART/CZ/内部ゲーム数モードの変更専用恩恵なし。
- **据え置き**: `NO_PERSISTENT_GAME_COUNT_OR_MODE_RESOURCE_CONFIRMED`。引継ぎ対象となる天井進捗やAT/ARTストック等を確認せず。
- **電源OFF→ON**: `NO_PUBLISHED_SPECIAL_POWER_CYCLE_BEHAVIOR_CONFIRMED_AFTER_RESEARCH`。
- **gameCounterReset**: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- **ceilingAfterReset**: `NOT_APPLICABLE_NO_CEILING_CONFIRMED`。
- **modeAfterReset**: `NOT_APPLICABLE_NO_INTERNAL_GAME_COUNT_MODE_CONFIRMED`。海/マリン/マンボウはプレイヤー選択演出であり内部モードと区別。
- **stateAfterReset**: `NOT_APPLICABLE_NO_PERSISTENT_RT_ART_CZ_STATE_CONFIRMED`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/パールランプ/マンボウ/朝一まで検索語を拡張したが本機固有高信頼資料を確定できず。
- **公開朝一数値**: 設定変更専用モード振分/短縮天井/朝一当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要CONFLICT / 欠損

- payoutRateBySetting: P-WORLD/pacnk市場掲載値と旧パチマガスロマガのシミュレート値に小差。定義差を疑い平均せず双方保持。
- baseGamesPer50: `50枚 / 1000円 / コイン持ち / ベース / ゲーム数`、機種名・三洋物産・シリーズ名を組み替え、P-WORLD/K-Navi/pacnk/旧パチマガ/回顧DBを横断したが直接値なし。
- formalModelName / approvalNumber: 表記揺れ・メーカー・シリーズまで探索したが今回確定できず。
- resetDetection: 本機固有の設定変更判別手段を十分な再探索後も直接確定できず。

## 主要出典（取得日 2026-09-03）

- K-Navi: `https://p-kn.com/slot/1117/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5783`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/10/h.php`
- pacnk: `https://pacnk.com/slot/2010/spumimonogatari/top.php`
- 5号機クロニクル（三洋物産一覧）: `https://5goki.com/sanyo`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 448 / chronologicalFrontier 2010-02-08**。
2. 最優先は **`アフロのモンチ`（SNKプレイモア）**。当時グリーンべるとは「2010-02-07から納品」、HAZUSEは「導入開始日 2010-02-07」、pacnk/5号機回顧は2010年2月。K-Naviには `2009年2月8日` という他資料と1年ずれる日付があり、`LIKELY_METADATA_ERROR` 候補として扱う。repo既存有無を再確認して、時系列上は鴉/スーパー海と同じ2/7〜2/8境界群として処理する。
3. `アフロのモンチ` の先行性能確認: 型式 `アフロノモンチS`、BIG MAX311枚、REG MAX116枚、5GプチRT、機械割95.1〜112.5%。正式収録時に性能コア・50枚ベース・resetBehaviorを多系統照合する。
4. その後2010-02-08同日群を最終監査し、2/09〜2/14境界へ進む。
5. 後続具体日確認済み: `BLOOD+` 2010-02-15、`ゼットゴールドEX` 2010-02-21、`みどりのマキバオー` 2010-02-22。ただし以前の未処理機を飛ばさない。
6. 2010年2月月内候補: `ビューティフルジョー`、`ピカ吾郎V2`、`バイオレントゾーン`、`列強伝`、`新世紀エヴァンゲリオン～魂の軌跡～`、`ハイハイ30`、`真田純勇士`、`哲也 新宿vs上野DX`。具体日を当時資料で確定し、最古から追加する。
7. 追加前に必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 実レコード前線を再取得し、repo既存検索も併用して重複・他リレー競合を防ぐ。
