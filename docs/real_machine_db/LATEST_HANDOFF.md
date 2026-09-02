# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは368件地点 `スターマンアイズ`。既存性能値をやり直さず2009年5月本線へ復帰。
- **今回 369「スロットニュートラッド」（岡崎産業）を追加。既存369件の再追加禁止。**
- 遡及resetBehavior QAの次地点は引き続き `ホークIII（25φ）`。新規収集本線を止めない。

## 369. スロットニュートラッド

record:
- `docs/real_machine_db/machines/2009-05_slot-new-trad.md`

要点:
- manufacturer: 岡崎産業
- formalModelName: **スロットニュートラッド**
- inspectionNumber: **8S1107**
- releaseDate: **2009-05（月精度）**。K-Navi当時記事は5月中旬導入予定、岡崎産業プレスリリースは2009-05-15発売記念イベント、P-WORLDは2009年05月導入開始。具体全国導入日を推測で作らない。
- generation: 5号機
- systemType: **ノーマル / A+RT / 単純告知**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- BIG: **1/344.93 / 1/337.81 / 1/318.14 / 1/300.62 / 1/283.71 / 1/265.33**
- BG/REG: **1/461.52 / 1/445.82 / 1/414.78 / 1/378.82 / 1/354.25 / 1/306.24**
- 合算: **1/197.40 / 1/192.19 / 1/180.04 / 1/167.61 / 1/157.54 / 1/142.16**。K-Navi/パチマガ精密値一致、P-WORLD丸め値とも整合。
- 50枚ベース: **37.97 / 38.13 / 38.33 / 38.34 / 38.59 / 38.98G**（パチマガ旧解析の1000円あたりゲーム数）。
- BIG約250〜252枚、BG/REG約150枚。
- BIG後は必ず**50G RT**。RT純増枚/Gは検索語・資料系統を変えて再探索しても比較可能な直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割は平均せず `CONFLICT`:
  - P-WORLD: **97.5 / 98.1 / 101.0 / 103.4 / 106.2 / 110.1%**
  - K-Navi: **97.20 / 98.03 / 100.70 / 103.17 / 106.12 / 109.89%**
  - パチマガシミュレート: **97.31 / 98.33 / 101.32 / 104.12 / 107.33 / 112.01%**

### v0.7 resetBehavior — スロットニュートラッド

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。設定変更時のBIG後RT残G/RT状態処理を直接確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の前日RT残G/状態引継ぎを一般論で補完しない。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時のRT残G/状態、リール初期位置/表示復帰は本機固有直接資料なし。
- gameCounterReset: 通常ゲーム数天井は `NOT_APPLICABLE`。設定変更時のactive RT残Gは未確認。
- ceilingAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- modeAfterReset: 通常時ゲーム数モードは確認なし。
- stateAfterReset: active RT状態についてのみ `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目等を多段検索したが本機固有根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 通常天井/短縮天井/朝一専用モード振分は非該当、BIG後RT長は50G、設定変更/電断後RT残Gのみ未確認。
- `resetBehaviorQA=PARTIAL_WITH_RT_RESET_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- 岡崎産業プレスリリース / スロットニュートラッド発売記念 — OFFICIAL_PRESS_RELEASE
  - https://www.dreamnews.jp/press/0000006886/
- K-Navi / 尚球社ブランド第1弾!新機種「スロットニュートラッド」登場! — CONTEMPORARY_INDUSTRY
  - https://p-kn.com/topics/news/777/
- P-WORLD / スロットニュートラッド — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5522
- K-Navi / スロットニュートラッド — ANALYSIS_HIGH
  - https://p-kn.com/slot/958/
- パチマガスロマガ / 基本システム — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/59/a.php
- パチマガスロマガ / ボーナス確率・PAYOUT — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/59/h.php
- パチマガスロマガ / 小役確率・1000円あたりゲーム数 — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/59/c.php

commit:
- 369 スロットニュートラッド: `c8714ff05f58453285ebeab751b934220c4dc4f8`

## resetBehavior遡及QA進捗

- `ホークIII-30`（2006-10-15）はv0.7補完済み。設定変更後は次回ボーナスまで無限RTという朝一恩恵を当時資料で確認済み。
- **次は `ホークIII（25φ）` (`docs/real_machine_db/machines/2006-10-15_hawk-iii.md`)**。30φの数値を横流しせず25φ固有資料でQAする。
- 既にv0.7化済み機は飛ばし、新規本線を止めない。

## 2009年5月本線監査

- 2009-05-11 `スーパーアロハ` まで具体日本線収録済み。
- **2009年5月中旬予定の `スロットニュートラッド` を今回369として追加。**
- 次は `レキオ2-30 / デュエルドラゴンキングダム / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` 等を具体導入日順に監査する。
- まず `レキオ2-30`（山佐公式で2009年5月確認済み）の具体導入/納品日をメーカー公式・当時業界記事・旧DBで再探索する。
- `デュエルドラゴンキングダム / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` も具体日を確定できない場合は月精度を維持し、推測日を作らない。
- 2009年5月境界では `天誅` にALL7 2009-05-01とK-Navi/回顧2009-06の競合があるため、直接根拠なしに5月へ遡及しない。

## 次回再開地点

1. **LATEST_HANDOFF基準369件地点。既存369件の再追加禁止。**
2. 本線は `レキオ2-30` を最優先に2009年5月の具体導入日を再探索し、未登録を確認してから追加する。
3. 続いて `デュエルドラゴンキングダム / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` を具体導入日順に処理する。
4. 遡及resetBehavior QAは **ホークIII（25φ）** から再開する。
5. 毎回GitHub最新mainのREADME/ミッション/INDEX/handoff/既存実ファイルを再取得し、未処理のみ追加する。

## 直近コミット

- 367 スーパーアロハ: `f870d6194608b1b9c7f0678ec9b4ce9c62f10c19`
- 368 スターマンアイズ: `76d44e1c2bd457394f5a8c15dce44375c4a271e7`
- 369 スロットニュートラッド: `c8714ff05f58453285ebeab751b934220c4dc4f8`
- ホークIII-30 reset QA: `208c0629e2827c3d7c2f342dc6a14e76f72a7b8d`
