# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは214件地点（`サンバ×サンバ` 追加済み）。
- 2007年12月残候補 `学習パチスロ理科 / まぁさん` を先に境界監査した結果、`学習パチスロ理科` は新台予定表で2007-12-25候補、`まぁさん` は2007年12月扱いの旧DBがある一方で当時グリーンべるとに「1月下旬より納品開始」とあるため、どちらも12月16日前後の具体日候補より後へ回すのが妥当と判定。
- そのため2007-12-16納品 / 12-17ホール導入予定を複数当時業界資料で確定できた **`ハナマル!学園奮闘記!` を215件目として追加済み。**

## 215. ハナマル!学園奮闘記!

- new record: `docs/real_machine_db/machines/2007-12-17_hanamaru-gakuen-funtouki.md`
- commit: `d8d9a7a2ce21546eb5e1b909aa4fd836448a6a9c`
- manufacturer: アビリット（現コナミアミューズメント系）
- releaseDate: `2007-12-17`（グリーンべると納品開始12/16、K-Naviホール導入予定12/17。本DBはホール導入基準で12/17採用）
- generation: 5号機
- systemType: ボーナス+ART / 赤7後長時間ART + 870G救済ART
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- ART「ハナマルタイム」純増: 約 `+0.4枚/G`。
- 赤7ボーナス後は2000G ART。2000G消化後もボーナス非成立なら救済ARTへ移り、実質ボーナス成立まで継続。
- 赤7以外のボーナス後は `870G` ハマリで救済ART発動。
- 各ボーナス獲得枚数: 約240枚。
- HAZUSE DATA掲載のBIG: `1/390.1 / 1/364.1 / 1/329.3 / 1/302.0`。
- HAZUSE DATA掲載の合成: `1/282.5 / 1/252.1 / 1/221.4 / 1/182.0`。
- PAY OUT: `95 / 99 / 105 / 111%`。
- REGは中間設定を `1/819.2 / 1/675.6 / 1/458.3` まで回収。設定1 REG直接値は未確認のため逆算せず `UNVERIFIED_AFTER_RESEARCH`。
- 50枚ベースは `50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` まで検索語を変えたが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 重要CONFLICT

- 設定構成について、当時グリーンべるとは `1 / 2 / 4 / 6` の4段階設定と記載。
- HAZUSE DATAの性能表は `1 / 2 / 5 / 6` と掲載。
- どちらかへ補正せず `CONFLICT_SETTING_LABEL`。性能数値の設定ラベルを勝手に移し替えない。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。870G救済カウンタ、ART / 救済ART状態の設定変更時処理を直接説明する本機固有資料なし。
- carryOverBehavior: 据え置き時の870G救済カウンタ・ART状態引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみの870G救済カウンタ・ART状態・初期出目は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 赤7以外ボーナス後870G救済条件そのものは `CONFIRMED`。設定変更時リセット/据え置き・電断引継ぎは未確認。
- ceilingAfterReset: 通常救済条件870Gは確認済み。設定変更時の短縮天井 / 朝一専用天井は `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード / 設定変更専用モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: ART搭載のため該当するが変更/据え置き/電断時処理は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン / 初期出目 / ランプ / 870G挙動による本機固有判別は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更時のみの比較可能な公開朝一数値 `NONE_CONFIRMED`。

### 主要出典

- グリーンべると: https://web-greenbelt.jp/00004386/
- K-Navi内覧会: https://p-kn.com/topics/exhibition/214/
- P-WORLD: https://www.p-world.co.jp/machine/database/4999
- HAZUSE DATA: https://data.hazuse.com/?machine_code=7S0431
- 5号機クロニクル（メーカー系譜）: https://5goki.com/konami
- パチスロ業界初まとめ（870G語呂合わせ救済記録）: https://slothistory.com/kousin_kako04.html

取得日: 2026-09-01

## 境界監査メモ

### 学習パチスロ理科

- P-WORLD / HAZUSE / 5号機クロニクル / パチンコFANで2007年12月機として複数一致。
- All7新台予定一覧に `2007/12/25` 導入予定とあるため、今回の12/17機より後へ回す。
- K-NaviでBIG `1/414.78 → 1/341.33`、REG `1/414.78 → 1/344.93`、機械割 `95.3 → 111.5%` まで既に候補値を確認済み。
- 次回以降、本レコード追加時に50枚ベース・獲得枚数・resetBehaviorを正式再探索する。

### まぁさん

- HAZUSE / 5号機系DBには2007年12月扱いあり。
- 一方、グリーンべると当時記事ではラスターが機種を発表し「1月下旬より納品開始」と明記しており、実導入は2008-01側の可能性が高い。
- HAZUSE性能値はBB `1/312.1 → 1/266.4`、MB `1/397.2 → 1/273.1`、合成 `1/174.8 → 1/134.9`、機械割 `97.1 → 108.5%`、設定1/3/5/7の4段階。
- 2007-12として先行登録せず `CONFLICT_DATE_MONTH` 候補として保留。2007年12月列を閉じる際に当時記事優先で最終判断する。

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
- `ハナマル!学園奮闘記!`: 215件目。再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準215件地点から継続。**
2. `ダイナマイトリターンズ` を最優先。既存handoffでは12/17候補、All7では12/24候補も出ているため、グリーンべると / K-Navi / P-WORLD / IGT系資料で納品開始日・ホール導入日を再照合して時系列位置を確定する。
3. `バーチャファイターF` はTとは別機種。2007-12-19発売決定記事などから具体的導入日を詰め、ダイナマイトとの先後を比較する。
4. `学習パチスロ理科` は2007-12-25候補まで取得済み。前2機種との時系列を確定後に収録する。
5. `パンドラ` は12/25候補として比較する。
6. `まぁさん` は2007-12掲載DBと当時記事の2008-01下旬納品が競合するため、2007年12月機として推測登録せず境界監査を継続する。
7. resetBehavior遡及QAは `逮捕しちゃうぞ（2006-08-28）` から再開。
8. 新規 / QAとも欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。

取得日: 2026-09-01
