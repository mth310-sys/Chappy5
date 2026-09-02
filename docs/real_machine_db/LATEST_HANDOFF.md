# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは369件地点 `スロットニュートラッド`。
- **今回 370「レキオ2-30」（山佐）を追加。既存370件の再追加禁止。**
- 遡及resetBehavior QAの次地点は引き続き `ホークIII（25φ）`。新規収集本線を止めない。

## 370. レキオ2-30

record:
- `docs/real_machine_db/machines/2009-05_lequio2-30.md`

要点:
- manufacturer: 山佐
- releaseDate: **CONFLICT: 2009-05 / 2009-06-01**。山佐公式は稼働時期2009年5月、ALL7当時導入予定一覧とパチスロ業界初まとめは2009-06-01導入/発売。具体日を5月へ逆算せず両方保持。
- generation: 5号機
- systemType: **ノーマル / Aタイプ / 完全告知 / 30Φ沖スロ**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- BIG: **1/295.21 / 1/287.44 / 1/273.07 / 1/266.41 / 1/254.02 / 1/249.19**
- REG: **1/668.73 / 1/550.72 / 1/612.49 / 1/516.03 / 1/569.88 / 1/442.81**
- 合算: **1/204.80 / 1/188.86 / 1/188.86 / 1/175.70 / 1/175.70 / 1/159.45**
- 50枚ベース: **38.64 / 38.64 / 39.24 / 39.25 / 39.86 / 40.47G**（パチマガ旧解析1000円あたりゲーム数）。
- BIG約**336枚**、REG約**104枚**。
- 天井非搭載。RT/ART/ATなし。
- 機械割は平均せず `CONFLICT`:
  - 市場掲載系列: **95.2 / 97.2 / 99.2 / 101.1 / 103.1 / 106.1%**
  - パチマガシミュレート: **95.33 / 97.47 / 99.52 / 101.58 / 103.63 / 106.83%**
- 正式型式名・検定番号は表記揺れ/型式/検定番号検索を重ねても今回直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior — レキオ2-30

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の本機固有内部処理を直接確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の本機固有内部状態引継ぎを直接確定できず。通常ゲーム数天井は非搭載。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の内部状態・リール初期位置/表示復帰等を直接確定できず。
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- ceilingAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- modeAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED`。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。朝一専用高低状態等は確認できないが本機固有変更処理の断定資料なし。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 機種名/山佐/30Φとガックン・初期出目・朝一・設定変更判別・据え置きを組み替え多段検索したが、本機固有根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 通常天井/短縮天井/朝一専用モード振分は非該当、朝一当選率・リセット恩恵率は確認なし。
- `resetBehaviorQA=PARTIAL_WITH_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- 山佐ネクスト / レキオ2-30 — OFFICIAL
  - https://yamasa-next.co.jp/model_lo2/
- ALL7 / 2009年6月新台導入予定一覧 — CONTEMPORARY_INDUSTRY
  - https://www.all7.jp/plans/index/2009/06/10
- パチスロ業界初まとめ / 更新情報7 — CONTEMPORARY_ARCHIVE
  - https://slothistory.com/kousin_kako07.html
- P-WORLD / レキオ2-30 — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5557
- パチマガスロマガ / ボーナス確率・PAYOUT — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/164/h.php
- パチマガスロマガ / 小役確率・1000円あたりゲーム数 — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/164/c.php

commit:
- 370 レキオ2-30: `1136ff0c65a2ed12f5ec15c184d3a61d1100395f`

## resetBehavior遡及QA進捗

- `ホークIII-30`（2006-10-15）はv0.7補完済み。
- **次は `ホークIII（25φ）` (`docs/real_machine_db/machines/2006-10-15_hawk-iii.md`)**。30φ版の数値を横流しせず25φ固有資料でQAする。
- 既にv0.7化済み機は飛ばし、新規本線を止めない。

## 2009年5月〜6月境界監査

- 2009-05-11 `スーパーアロハ`、2009-05月中旬 `スロットニュートラッド` まで本線収録済み。
- `レキオ2-30` は山佐公式2009-05と当時具体日2009-06-01が競合するため今回370として月境界CONFLICT付きで追加。
- **`琉球浪漫30` はグリーンべると当時記事で2009-05-10納品開始、`琉球浪漫25` は2009-05-31納品開始を直接確認。** 既存未登録を確認して正しい時系列位置で処理する。
- `緑ドン` はグリーンべると当時記事で2009年5月下旬導入開始予定、ユニバーサル公式は2009年5月発売。具体日をさらに再探索する。
- `デュエルドラゴンキングダム` はユニバーサル公式で2009年5月発売まで確認。具体導入日を当時資料で再探索する。
- 2009年5月境界では `天誅` の日付競合を直接根拠なしに解消しない。

## 次回再開地点

1. **LATEST_HANDOFF基準370件地点。既存370件の再追加禁止。**
2. 本線は `琉球浪漫30` の既存有無を最初に確認。未登録なら2009-05-10納品開始の遡及漏れとして追加する。
3. 続いて `緑ドン / デュエルドラゴンキングダム / 琉球浪漫25` を具体導入日順に処理する。`琉球浪漫25` は2009-05-31納品開始を直接確認済み。
4. `レキオ2-30` は2009-06-01具体日資料もあるため、今後INDEX生成時にreleaseDate conflictを失わない。
5. 遡及resetBehavior QAは **ホークIII（25φ）** から再開する。
6. 毎回GitHub最新mainのREADME/ミッション/INDEX/handoff/既存実ファイルを再取得し、未処理のみ追加する。

## 直近コミット

- 369 スロットニュートラッド: `c8714ff05f58453285ebeab751b934220c4dc4f8`
- 370 レキオ2-30: `1136ff0c65a2ed12f5ec15c184d3a61d1100395f`
- ホークIII-30 reset QA: `208c0629e2827c3d7c2f342dc6a14e76f72a7b8d`
