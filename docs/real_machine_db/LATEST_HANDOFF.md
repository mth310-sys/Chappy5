# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは370件地点 `レキオ2-30`。
- **今回 371「琉球浪漫30」（タイヨー）を2009-05-10の遡及漏れとして追加。既存371件の再追加禁止。**
- 遡及resetBehavior QAの次地点は引き続き `ホークIII（25φ）`。新規収集本線を止めない。

## 371. 琉球浪漫30

record:
- `docs/real_machine_db/machines/2009-05-10_ryukyu-roman-30.md`

要点:
- manufacturer: タイヨー
- formalModelName: **琉球浪漫-30**
- inspectionNumber: **9S0215**
- releaseDate: **2009-05-10**。グリーンべると2009-04-27当時記事が30Φ機の納品を5月10日からと明記。P-WORLDは2009年5月導入。兄弟25Φ機は5月31日納品で別機種として後続処理。
- generation: 5号機
- systemType: **ノーマル / Aタイプ / 完全告知 / 30Φ沖スロ**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- BIG: **1/292.6 / 1/284.9 / 1/280.1 / 1/264.3 / 1/255.0 / 1/240.1**
- REG: **1/439.8 / 1/428.3 / 1/420.1 / 1/397.2 / 1/383.3 / 1/360.1**
- 合算: **1/175.7 / 1/171.1 / 1/168.0 / 1/158.7 / 1/153.1 / 1/144.0**。P-WORLDの設定3=1/168.1、設定6=1/144.1は表示丸め差として注記。
- 50枚ベース: **35.20 / 35.52 / 35.52 / 36.08 / 36.44 / 36.82G**（パチマガ旧解析1000円あたりゲーム数）。
- BIG約**312枚**、REG約**130枚**。
- 通常ゲーム数天井、RT/ART/ATなし。パチマガ旧解析トップの攻め時・ヤメ時は「特にナシ」。
- 機械割は平均せず `CONFLICT`:
  - P-WORLD/5号機クロニクル市場掲載系列: **97.3 / 98.8 / 99.9 / 103.1 / 105.1 / 108.4%**
  - パチマガシミュレート: **97.50 / 99.11 / 99.93 / 103.40 / 105.68 / 109.33%**
- 業界初と紹介されたリール逆回転フリーズを搭載し、発生時BIG確定。

### v0.7 resetBehavior — 琉球浪漫30

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。琉球浪漫30/琉球浪漫-30/琉球浪漫&30、型式名、タイヨーと設定変更/リセット/朝一を組み替え、当時解析・旧DB・回顧資料まで再探索したが本機固有処理を直接確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の本機固有内部状態引継ぎを直接確定できず。通常ゲーム数天井は非搭載/確認なしのため天井G数宵越しは非該当。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の内部状態、リール初期位置/表示復帰等を直接確定できず。
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- ceilingAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- modeAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED`。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。朝一専用高低状態等は確認できないが、設定変更時の内部状態処理を断定する本機固有資料なし。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン、リールガックン、初期出目、設定変更判別、据え置きを機種名/型式/メーカーと組み替え多段検索したが本機固有根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 通常天井/短縮天井/朝一専用モード振分は非該当、朝一当選率・リセット恩恵率は確認なし。
- `resetBehaviorQA=PARTIAL_WITH_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- グリーンべると / リール逆回転でBB確定、タイヨー『琉球浪漫』 — CONTEMPORARY_INDUSTRY
  - https://news.p-world.co.jp/articles/3417/greenbelt
- P-WORLD / 琉球浪漫30 — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5549
- パチマガスロマガ / ボーナス確率・PAYOUT — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/h.php
- パチマガスロマガ / 小役確率・1000円あたりゲーム数 — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/c.php
- パチマガスロマガ / 基本システム — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/a.php
- パチマガスロマガ / 機種解析トップ — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/taiyo_slot_67.php
- 5号機クロニクル / タイヨー5号機全機種一覧 — SECONDARY_DATABASE
  - https://5goki.com/taiyo

commit:
- 371 琉球浪漫30: `acb5b86288a8a47785c8b69da0f5386125970d3e`

## resetBehavior遡及QA進捗

- `ホークIII-30`（2006-10-15）はv0.7補完済み。
- **次は `ホークIII（25φ）` (`docs/real_machine_db/machines/2006-10-15_hawk-iii.md`)**。30φ版の数値を横流しせず25φ固有資料でQAする。
- 既にv0.7化済み機は飛ばし、新規本線を止めない。

## 2009年5月〜6月境界監査

- 2009-05-10 `琉球浪漫30` は今回371として遡及追加済み。
- 2009-05-11 `スーパーアロハ`、2009-05月中旬 `スロットニュートラッド` は既収録。
- `レキオ2-30` は山佐公式2009-05と当時具体日2009-06-01が競合するため370として収録済み。releaseDate conflictを失わない。
- K-Naviの2009年5月全国導入カレンダーでは **2009-05-25に `緑ドン` / `デュエルドラゴンキングダム` / `レキオ2-30`** を掲載。ユニバーサル公式も前2機種を2009年5月発売とする。
- グリーンべると当時記事は `緑ドン` を「5月下旬より導入開始予定」とする。K-Naviの5月25日を具体日候補として次回再照合する。
- **`琉球浪漫25` はグリーンべると当時記事で2009-05-31納品開始を直接確認済み。** P-WORLDは30Φ版と内部仕様同一とするが独立機種として別レコード化する。
- `天誅` の日付競合は直接根拠なしに解消しない。

## 次回再開地点

1. **LATEST_HANDOFF基準371件地点。既存371件の再追加禁止。**
2. 本線は2009-05-12〜24の未処理機を境界監査し、安全な具体日付き漏れがなければ **2009-05-25 `緑ドン` / `デュエルドラゴンキングダム`** の既存有無を確認して最古の未処理から追加する。
3. その後 **2009-05-31 `琉球浪漫25`** を独立レコードとして処理する。
4. `レキオ2-30` は370として既収録。2009-06-01具体日資料もあるため重複追加しない。
5. 遡及resetBehavior QAは **ホークIII（25φ）** から再開する。
6. 毎回GitHub最新mainのREADME/ミッション/INDEX/handoff/既存実ファイルを再取得し、未処理のみ追加する。

## 直近コミット

- 369 スロットニュートラッド: `c8714ff05f58453285ebeab751b934220c4dc4f8`
- 370 レキオ2-30: `1136ff0c65a2ed12f5ec15c184d3a61d1100395f`
- 371 琉球浪漫30: `acb5b86288a8a47785c8b69da0f5386125970d3e`
- ホークIII-30 reset QA: `208c0629e2827c3d7c2f342dc6a14e76f72a7b8d`
