# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは211件地点（`バーチャファイターT` 追加済み）。
- 2007-12-01〜12-16境界監査を継続し、未処理候補 `ぴかっとシーサー` を当時業界記事、パチマガスロマガ、5号機クロニクル、2007年度機種一覧、ノーマル機一覧、小冊子収集記録、業界史整理で横断。
- main未登録を確認し、**212件目として `ぴかっとシーサー` を追加済み。**

## 212. ぴかっとシーサー

- new record: `docs/real_machine_db/machines/2007-12_pikatto-shisa.md`
- commit: `2040c94aa7e977f4ed924b28dd6d1ff8d9227ff5`
- manufacturer: デンケン販売（メーカー帰属CONFLICT注記あり）
- generation: 5号機
- releaseDate: `2007-12` 主系列 / `2007-11` 小冊子収集資料あり → `CONFLICT_RELEASE_MONTH`
- systemType: ノーマル / 完全告知 / 同時成立あり / 高技術介入
- coreStatus: `COMPLETE_CORE_WITH_CONFLICTS`
- resetBehaviorQA: `PARTIAL`

### 導入・同定

- 2007-07-10付の当時業界記事転載で、電遊協5社合同展示会に **デンケン販売「ぴかっとシーサー」** が展示され、「秋ごろ発売予定」と確認。
- 5号機クロニクル、パチンコFAN、スロリスクタイムは **2007-12** で一致。
- 小冊子収集リストには **2007-11** 設置表記が残るため、平均せず `CONFLICT_RELEASE_MONTH`。
- 後年業界史整理には「当初パチンコビレッジはデンケン販売、後の娯楽産業協会ニュースはデージー表記」とする注記がある。現存当時展示記事・パチマガスロマガ・複数DBはデンケン販売で一致するため主表記はデンケン販売としつつ、帰属差を `CONFLICT_MANUFACTURER_ATTRIBUTION` として保存。
- 具体納品開始日 / 全国ホール導入日は検索語・資料系統変更後も確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- パチマガスロマガ BIG: `1/409.60 / 1/409.60 / 1/364.09 / 1/364.09 / 1/327.68 / 1/327.68`。
- REG: `1/1170.29 / 1/819.20 / 1/1092.27 / 1/655.36 / 1/1092.27 / 1/655.36`。
- 合算: `1/303.41 / 1/273.07 / 1/273.07 / 1/234.06 / 1/252.06 / 1/218.45`。
- 完全手順時シミュレート機械割: `101.49 / 103.15 / 105.53 / 107.92 / 109.73 / 111.96%`。
- チェリー狙い適当打ち時: `98.78 / 100.28 / 102.65 / 104.91 / 106.61 / 108.73%`。
- 5号機クロニクルは完全手順系列を `101.4 / 103.1 / 105.4 / 107.6 / 109.4 / 111.4%` と掲載。設定3〜6は単純丸めだけではないため平均せず `CONFLICT_ROUNDING_OR_SIMULATION_DEFINITION`。
- 50枚ベース完全手順: `63.12 / 64.08 / 64.86 / 65.65 / 67.71 / 68.14G`。
- チェリー狙い適当打ち: `51.85 / 52.05 / 52.19 / 52.38 / 52.69 / 52.82G`。
- BIG約312枚、REG約104枚。
- RT/ART/ATなし。完全告知ノーマル。
- 小役取得手順でベース・機械割が大幅に変わるため、通常手順と完全攻略手順を別定義で保持。

### v0.7 resetBehavior

- settingChangeBehavior: 本機固有の変更時RAM処理は直接資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置きで引継ぐべきゲーム数天井・モード・RT/ART残Gは `NOT_APPLICABLE / NONE_CONFIRMED`。ボーナス成立状態等の内部電断跨ぎは未確認。
- powerCycleBehavior: 電源OFF→ON時のボーナス成立状態・初期出目・告知状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井 / 周期CZ / AT当選管理 `NONE_CONFIRMED`。
- ceilingAfterReset: 通常天井 / 短縮天井 / 朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: モード管理 / 朝一専用モード / 設定変更時公開振り分け `NONE_CONFIRMED`。
- stateAfterReset: RT/ART/AT/CZ状態は `NOT_APPLICABLE`。内部RAMレベルのボーナス成立状態等は未確認。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits: 朝一RT、短縮天井、専用モード、初当たり優遇等 `NONE_CONFIRMED`。
- resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン / 初期出目 / 告知ランプ等を再探索したが、本機固有の変更判別要素は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更時専用の比較可能な公開朝一数値 `NONE_CONFIRMED`。
- パチマガスロマガ機種トップには **「攻め時・ヤメ時→特にナシ」** と掲載。

### CONFLICT / missing

- 導入月: 2007-12複数資料 vs 2007-11小冊子収集資料。
- メーカー帰属: デンケン販売が主系列だが、後の娯楽産業協会ニュースでデージー表記だったという業界史注記あり。
- 完全手順機械割: パチマガスロマガ101.49〜111.96% vs 5号機クロニクル101.4〜111.4%。平均せず双方保持。
- 未確定: 具体導入日、正式型式名、設定変更時RAM処理、電源OFF→ON時内部処理、本機固有変更判別。

主要出典:
- Pマンズ / 当時業界記事転載: https://p-mans.blogspot.com/2007/07/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/a.php
- パチマガスロマガ 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/h.php
- パチマガスロマガ 小役/1000円G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/c.php
- パチマガスロマガ 機種トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/denken_slot_01.php
- 5号機クロニクル: https://5goki.com/denkenhanbai
- パチンコFAN: https://pacnk.com/photoslot/plist2007_0_0.html
- スロリスクタイム: https://pachisuro100.com/normal/
- 小冊子リスト5: https://plaza.rakuten.co.jp/sukisukiyamasa/20006/
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html

## 直前の211件目

### バーチャファイターT

- record: `docs/real_machine_db/machines/2007-12_virtua-fighter-t.md`
- commit: `e90d9d0d7c868a8ee06707612ba5db711c863937`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- サミー公式で2007.12。通常状態300G周期CZ、通常設定変更だけなら周期G数引継ぎを確認済み。

## resetBehavior 遡及QA

- `じゃりン子チエ（2006-08）` まで遡及追加済み。
- 新規キューを止めず、次回以降に時系列で次の未補完既存レコードも監査する。

## 重複防止

- `NEO花物語`: 既存レコードあり。再追加禁止。
- `スーパービンゴV`: 既存レコードあり。再追加禁止。
- `CANスロ`: 既存レコードあり。再追加禁止。
- `パチスロ「機動戦士ガンダムII～哀・戦士編～」`: 208件目として追加済み。
- `パチスロシティーハンター`: 209件目として追加済み。
- `名門!夢色学園生徒会`: 210件目として追加済み。
- `バーチャファイターT`: 211件目として追加済み。
- `ぴかっとシーサー`: 212件目として追加済み。

## 次回再開地点

1. **LATEST_HANDOFF基準212件地点から継続。**
2. 2007-12-01〜12-16境界監査を続行。未処理月単位候補 **`バミューダ / サンバ×サンバ / 学習パチスロ理科 / まぁさん`** と `バーチャファイターF` の実導入時期をメーカー公式・当時業界・P-WORLD旧DB・解析アーカイブで比較する。
3. `ぴかっとシーサー` は完了済み。再追加禁止。
4. サミー公式では `バーチャファイターT=2007.12` を確認済み。`バーチャファイターF` はK-Naviで2007-12-19に発売決定記事があるため、T/Fを同一日扱いしない。
5. 具体日が確定している後続候補: `ハナマル!学園奮闘記!` はグリーンべるとで **2007-12-16納品開始** / K-Naviで12/17導入予定、`ダイナマイトリターンズ` はK-Naviで **2007-12-17ホール導入予定**、`パンドラ` は12/25設置開始候補。境界監査後に最古から進める。
6. 新規機種は性能コア + v0.7 resetBehaviorを同時収集。欠損は表記揺れ・型式・メーカー・シリーズ、設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間まで検索語を変え、別系統資料を横断した後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
