# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは215件地点（`ハナマル!学園奮闘記!` 追加済み）。
- 2007年12月境界を再監査し、グリーンべるとで2007-12-16納品開始、K-Naviで2007-12-17ホール導入予定を確認できた **`ダイナマイトリターンズ` を216件目として追加済み。**

## 216. ダイナマイトリターンズ

- new record: `docs/real_machine_db/machines/2007-12-17_dynamite-returns.md`
- commit: `c9687fae884ccf4087730342b5f1b44ed107f397`
- manufacturer: IGTジャパン
- releaseDate: `2007-12-17`（グリーンべると納品開始12/16、K-Naviホール導入予定12/17。本DBはホール導入基準で12/17採用）
- generation: 5号機
- systemType: ノーマル / ボーナス主体 / 高技術介入
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 設定構成: `1 / 3 / 5 / F` の4段階（P-WORLD / パチマガ / 当時回顧）。5号機クロニクルの機械割表のみ最高設定を「6」と表記するため `CONFLICT_SETTING_LABEL`。
- 赤7BIG: `1/595.78 / 1/574.88 / 1/555.39 / 1/537.18`。
- 白7BIG: `1/642.51 / 1/618.26 / 1/595.78 / 1/574.88`。
- BIG合成: `1/309.13 / 1/297.89 / 1/287.44 / 1/277.69`。
- REG: `1/512.00 / 1/468.11 / 1/399.61 / 1/364.09`。
- ボーナス合成: `1/192.75 / 1/182.04 / 1/167.18 / 1/157.54`。
- 1000円ベース（ダイナマイト5枚取得）: `36.69 / 37.43 / 38.42 / 39.01G`。
- 1000円ベース（ダイナマイト10枚取得）: `37.77 / 38.56 / 39.61 / 40.23G`。
- BIG: 345枚超払い出し終了、完全技術介入時最大336枚。
- REG: 119枚超払い出し終了、技術介入時最大121枚。
- RT/ART/ATなし。グリーンべるとは「リプレイタイムなどを搭載しないノーマルタイプ」と明記。

### 機械割CONFLICT

- パチマガスロマガ MAX獲得手順シミュレート: `99.78 / 102.75 / 106.72 / 109.70%`。
- 5号機クロニクル: `99.0 / 101.8 / 105.6 / 108.5%`（最高設定ラベル「6」）。
- 後年回顧資料の技術介入レンジ: `94.8〜99.5 / 97.6〜103.1 / 101.3〜107.2 / 104.1〜110.0%`。
- 攻略精度・算出条件の違いがあるため平均せず `CONFLICT_PAYOUT_DEFINITION` として全系列を保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。本機固有の設定変更時初期挙動を直接説明する資料なし。
- carryOverBehavior: 通常時天井 `NONE_CONFIRMED`、RT/ART/AT残状態 `NOT_APPLICABLE`。据え置き判別の本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみの初期出目・ランプ・設定変更との差は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井・周期CZ等の公開ゲーム数管理 `NONE_CONFIRMED`。
- ceilingAfterReset: 通常時天井 / 設定変更時短縮天井 / 朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 通常時モード / 朝一専用モード / 設定変更専用モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: RT/ART/AT/CZ持続状態 `NOT_APPLICABLE / NONE_CONFIRMED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン / 初期出目 / ランプ等の本機固有判別法 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更時のみの比較可能な公開朝一数値 `NONE_CONFIRMED`。

### 主要出典

- グリーンべると: https://web-greenbelt.jp/00004424/
- K-Navi内覧会: https://p-kn.com/topics/exhibition/206/
- P-WORLD: https://www.p-world.co.jp/machine/database/4985
- パチマガスロマガ（確率/PAYOUT）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/49/h.php
- パチマガスロマガ（1000円ゲーム数）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/49/c.php
- パチマガスロマガ（基本システム）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/49/a.php
- K-Navi（ボーナス中）: https://p-kn.com/slot/733/4421/
- 5号機クロニクル: https://5goki.com/igt
- 回顧スペック資料: https://pachinko.hatenablog.jp/entry/2007/12/dynamite-returns

取得日: 2026-09-01

## 境界監査メモ

### バーチャファイターF

- `バーチャファイターT` とは別機種。再追加混同禁止。
- K-Naviの2007-12-19記事でロデオ製「バーチャファイターF」発売決定を確認。ARTタイプ。
- 5号機まとめwikiでART純増 `1.2枚/G`、通常状態777G経過後の周期CZ、`RAMクリアしない限り設定変更してもG数を引き継ぐ` との記録を確認。
- P-WORLDでBIG平均315枚、MIDDLE BONUS平均210枚、REG平均56枚を確認。
- 次回は具体ホール導入日/納品日をグリーンべると・K-Navi・P-WORLD・フィールズ/ロデオ系資料で詰め、性能コア・resetBehaviorを正式再探索して217件目候補とする。

### 学習パチスロ理科

- P-WORLD / HAZUSE / 5号機クロニクル / パチンコFANで2007年12月機として複数一致。
- All7新台予定一覧に `2007/12/25` 導入予定候補あり。
- K-NaviでBIG `1/414.78 → 1/341.33`、REG `1/414.78 → 1/344.93`、機械割 `95.3 → 111.5%` まで候補値を確認済み。
- `バーチャファイターF` の具体導入日確定後に時系列比較する。

### パンドラ

- グリーンべると/P-WORLD業界ニュースで、マルハン50周年記念専用機として **2007-12-25から各チェーン店舗へ設置** を確認。
- BIG約300枚、CT約110枚、5G RT「パンドラチャンス」、合成 `1/205.4（設定1）〜1/158.3（設定6）` まで先行確認済み。
- 12/25列で `学習パチスロ理科` と比較して処理する。

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
- `ダイナマイトリターンズ`: 216件目。再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準216件地点から継続。**
2. `バーチャファイターF` を最優先。K-Navi 2007-12-19発売決定記事は取得済みだが、ホール導入日/納品開始日をさらに詰めて時系列位置を確定する。
3. `学習パチスロ理科` は12/25候補、`パンドラ` は12/25設置開始が当時業界記事で確認済み。VF-F処理後に両機の先後を監査する。
4. `まぁさん` は2007-12掲載DBと当時記事の2008-01下旬納品が競合するため、2007年12月機として推測登録しない。
5. 2007年12月のメーカー別一覧・当時新台予定表を再横断し、漏れを閉じてから2008年1月へ進む。
6. resetBehavior遡及QAは `逮捕しちゃうぞ（2006-08-28）` から再開。
7. 新規 / QAとも欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。

取得日: 2026-09-01
