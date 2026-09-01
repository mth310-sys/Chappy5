# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは216件地点（`ダイナマイトリターンズ` 追加済み）。
- 直前指定の最優先候補 **`バーチャファイターF` を217件目として追加済み。**

## 217. バーチャファイターF

- new record: `docs/real_machine_db/machines/2007-12_virtua-fighter-f.md`
- commit: `9df120a657a4f0010d1f4c3babdc8380eafe1349`
- manufacturer: ロデオ
- releaseDate: `2007-12`（具体ホール導入日 `UNVERIFIED_AFTER_RESEARCH`）
- generation: 5号機
- systemType: A+ART / ボーナス+周期CZ+完走型ART
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- K-Navi 2007-12-19記事でフィールズからロデオ製「バーチャファイターF」の発売決定を確認。
- パチンコFAN、5号機クロニクル、スロリスクタイムは2007年12月機として扱う。
- 一方、2008-02-01更新の当時系業界史にはFを「次機種（検定未）」「発売ほぼ確定」とする記録が残る。
- `導入 / 発売 / 納品 / ホール導入 / 12/24 / 12/25 / 2008-01 / 2008-02 / 検定` まで表記・期間を変えて再探索したが具体ホール導入日を確定できず、推測せず `CONFLICT_RELEASE_TIMING / UNVERIFIED_AFTER_RESEARCH` とした。

### 性能コア

パチマガスロマガ掲載値。

- BIG①合成: `1/897.75 / 1/873.81 / 1/851.12 / 1/829.57 / 1/809.09 / 1/771.01`
- BIG②合成: 同上。
- 全BIG合成: `1/448.88 / 1/436.91 / 1/425.56 / 1/414.78 / 1/404.54 / 1/385.51`
- REG合成: `1/897.75 / 1/873.81 / 1/851.12 / 1/829.57 / 1/809.09 / 1/771.01`
- 全ボーナス合成: `1/299.25 / 1/291.27 / 1/283.71 / 1/276.52 / 1/269.70 / 1/257.00`
- PAYOUT（パチマガシミュレート）: `98.41 / 100.33 / 102.22 / 104.48 / 106.76 / 110.66%`
- 1000円ベース: `36.15 / 36.69 / 37.25 / 37.83 / 38.42 / 39.03G`
- BIG①（同色）: 444枚超払い出し終了、平均純増約315枚。
- BIG②（異色）: 294枚超払い出し終了、平均純増約210枚。
- REG: 12Gまたは8回入賞、平均純増約56枚。
- ART「最終決戦ステージ」: 50G完走型。

### 性能CONFLICT

- 機械割: パチマガ/当時5号機まとめwiki系列 `98.41 / 100.33 / 102.22 / 104.48 / 106.76 / 110.66%` に対し、後年回顧資料 `96.7 / 98.3 / 101.3 / 105.5 / 110.0 / 116.0%`。平均せず `CONFLICT_PAYOUT`。
- ART純増: 当時5号機まとめwiki `約1.2枚/G`、後年回顧 `約1.3枚/G`。平均せず `CONFLICT_NET_INCREASE`。

### v0.7 resetBehavior

- settingChangeBehavior: `CONFIRMED_PARTIAL`。当時5号機まとめwikiで、周期CZは通常状態777G経過後に突入し、**RAMクリアしない限り設定変更してもG数を引き継ぐ**と確認。
- carryOverBehavior: 777G周期G数は設定変更でも `CARRY_OVER_CONFIRMED`（RAMクリア時のみ初期化）。CZ/ART残状態・ART残Gは `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみの周期G数/CZ/ART状態・初期出目は `UNVERIFIED_AFTER_RESEARCH`。RAM保持から推定転記しない。
- gameCounterReset: 周期CZ `777G`。設定変更時 `NOT_RESET / CARRY_OVER_CONFIRMED`、RAMクリア時 `RESET_CONFIRMED`、電源OFF→ONのみ `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: 777Gはボーナス天井ではなく周期CZ到達G数。設定変更専用短縮 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード / 設定変更専用振り分け `NONE_CONFIRMED`。
- stateAfterReset: 設定変更時のCZ/ART/高確/ART残G `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits: 設定変更でも777G周期進行を消さない点が朝一周期狙いに影響。専用短縮/優遇率等は `NONE_CONFIRMED`。
- resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン / 初期出目 / 液晶 / ランプ等の本機固有判別 `UNVERIFIED_AFTER_RESEARCH`。周期G数が残っていても設定変更否定にはならない。
- numericResetData: 周期CZ `777G`、設定変更時RAMクリアなしならG数引継ぎ。設定変更専用のモード振り分け/朝一当選率は `NONE_CONFIRMED`。

### 主要出典

- K-Navi: https://p-kn.com/topics/news/433/
- パチマガスロマガ（確率/PAYOUT）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/47/h.php
- パチマガスロマガ（1000円ゲーム数）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/47/c.php
- パチマガスロマガ（基本システム）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/47/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/5023
- パチスロ5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/76.html
- 5号機クロニクル: https://5goki.com/rodeo
- パチンコFAN: https://pacnk.com/photoslot/plist2007_0_0.html
- スロリスクタイム: https://pachisuro100.com/hagyo/
- パチスロ業界初まとめ（更新情報4）: https://slothistory.com/kousin_kako04.html

取得日: 2026-09-01

## 2007年12月 境界監査メモ

### 学習パチスロ理科

- P-WORLD / HAZUSE / 5号機クロニクル / パチンコFANで2007年12月機として複数一致。
- All7新台予定一覧に `2007/12/25` 導入予定候補あり。
- K-NaviでBIG `1/414.78 → 1/341.33`、REG `1/414.78 → 1/344.93`、機械割 `95.3 → 111.5%` まで候補値を確認済み。
- **次回最優先。** 具体導入日を再照合し、性能コア+resetBehaviorを正式収集する。

### パンドラ

- グリーンべると/P-WORLD業界ニュースで、マルハン50周年記念専用機として **2007-12-25から各チェーン店舗へ設置** を確認済み。
- BIG約300枚、CT約110枚、5G RT「パンドラチャンス」、合成 `1/205.4（設定1）〜1/158.3（設定6）` まで先行確認済み。
- 学習パチスロ理科と同日候補として、次回以降に先後・同日を監査する。

### まぁさん

- HAZUSE / 5号機系DBには2007年12月扱いあり。
- 一方、グリーンべると当時記事ではラスター発表機として「1月下旬より納品開始」とされ、実導入は2008-01側の可能性が高い。
- 2007-12として推測登録せず `CONFLICT_DATE_MONTH` 候補として保留し、12月列を閉じる際に一次/当時業界記事を優先して最終判断する。

## resetBehavior 遡及QA

### ランブルローズ（2006-08）まで補完済み

- record: `docs/real_machine_db/machines/2006-08_rumble-roses.md`
- QA commit: `cee5c485ab82c9c7178b1b84b45456f82646f60c`
- 既存 `coreStatus=PARTIAL` は維持し、リセットQAを別管理で `PARTIAL` とした。
- 次の未補完対象は `逮捕しちゃうぞ（2006-08-28）`。

## 重複防止

- `NEO花物語`: 既存レコードあり。再追加禁止。
- `スーパービンゴV`: 既存レコードあり。再追加禁止。
- `CANスロ`: 既存レコードあり。再追加禁止。
- `パチスロ「機動戦士ガンダムII～哀・戦士編～」`: 208件目。
- `パチスロシティーハンター`: 209件目。
- `名門!夢色学園生徒会`: 210件目。
- `バーチャファイターT`: 211件目。
- `ぴかっとシーサー`: 212件目。
- `バミューダ`: 213件目。
- `サンバ×サンバ`: 214件目。
- `ハナマル!学園奮闘記!`: 215件目。
- `ダイナマイトリターンズ`: 216件目。
- `バーチャファイターF`: 217件目。再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準217件地点から継続。**
2. **`学習パチスロ理科` を最優先**。12/25候補を当時新台予定・P-WORLD・HAZUSE・K-Navi等で再照合し、具体導入日→性能コア→v0.7 resetBehaviorを収集する。
3. `パンドラ` は2007-12-25設置開始が当時業界記事で確認済み。同日列として学習パチスロ理科との先後を監査する。
4. `まぁさん` は2007-12掲載DBと当時記事の2008-01下旬納品が競合するため、2007年12月機として推測登録しない。
5. 2007年12月のメーカー別一覧・当時新台予定表を再横断し、漏れを閉じてから2008年1月へ進む。
6. resetBehavior遡及QAは `逮捕しちゃうぞ（2006-08-28）` から再開。
7. 新規 / QAとも欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。

取得日: 2026-09-01
