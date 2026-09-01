# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは217件地点（`バーチャファイターF` 追加済み）。
- **`学習パチスロ 理科` を218件目として追加済み。**

## 218. 学習パチスロ 理科

- new record: `docs/real_machine_db/machines/2007-12_gakushu-pachislot-rika.md`
- commit: `43d1491906bc4282351e6eae12ce5c4634cee012`
- manufacturer: 遊人
- releaseDate: `2007-12`（具体ホール導入日 `UNVERIFIED_AFTER_RESEARCH`）
- generation: 5号機
- systemType: ノーマル / ボーナス主体
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: `1/414.78 / 1/399.61 / 1/381.02 / 1/372.36 / 1/356.17 / 1/341.33`
- REG/CB: `1/414.78 / 1/404.54 / 1/385.51 / 1/372.36 / 1/360.09 / 1/344.93`
- 機械割 K-Navi: `95.3 / 97.5 / 100.5 / 102.0 / 106.2 / 111.5%`
- 機械割 5号機クロニクル系: `95.3 / 97.5 / 100.6 / 102.0 / 106.3 / 111.5%`
- BIG: 345枚超払い出し終了、平均純増約312枚。
- CB: 240枚超払い出し終了、パチマガ平均純増約230枚。
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`。

### CONFLICT

- 設定3/5機械割に0.1pt差。平均せず両方保持。
- P-WORLDは合成 `約1/195（設定1）～1/161（設定6）` と掲載し、K-Navi BIG/REG単純合算とは一致しないため `CONFLICT_COMBINED_PROBABILITY`。
- CB平均純増はパチマガ約230枚に対し後年まとめ約221枚。平均せず保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井 `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮/朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 設定変更専用/朝一専用モード `NONE_CONFIRMED`。
- stateAfterReset: 比較可能なRT/ART/高確状態 `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン/初期出目/表示等、本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された朝一専用数値 `NONE_CONFIRMED`。

### 主要出典

- K-Navi: https://p-kn.com/slot/737/
- P-WORLD: https://www.p-world.co.jp/machine/database/5000
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yujin_slot/04/a.php
- 5号機クロニクル: https://5goki.com/u-jin
- 4Gamer: https://www.4gamer.net/games/021/G002122/20080611006/

取得日: 2026-09-01

## 2007年12月 境界監査メモ

### パンドラ

- グリーンべると/P-WORLD業界ニュースで、マルハン50周年記念専用機として **2007-12-25から各チェーン店舗へ設置** を確認済み。
- BIG約300枚、CT約110枚、5G RT「パンドラチャンス」、合成 `1/205.4（設定1）～1/158.3（設定6）` まで先行確認済み。
- **次回最優先。** 性能コア+resetBehaviorを正式収集する。

### まぁさん

- HAZUSE / 5号機系DBには2007年12月扱いあり。
- 一方、グリーンべると当時記事ではラスター発表機として「1月下旬より納品開始」とされ、実導入は2008-01側の可能性が高い。
- 2007-12として推測登録せず `CONFLICT_DATE_MONTH` 候補として保留し、12月列を閉じる際に一次/当時業界記事を優先して最終判断する。

## resetBehavior 遡及QA

- `ランブルローズ（2006-08）` まで補完済み。
- 次の未補完対象は `逮捕しちゃうぞ（2006-08-28）`。
- 新規収集を止めず、余力のある回で既存性能値をやり直さずresetBehaviorのみ補完する。

## 重複防止

- 217: `バーチャファイターF`。再追加禁止。
- 218: `学習パチスロ 理科`。再追加禁止。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準218件地点から継続。**
2. **`パンドラ` を最優先**。2007-12-25設置開始の当時業界記事を基準に、性能コア→v0.7 resetBehaviorを正式収集する。
3. `まぁさん` は2007-12掲載DBと当時記事の2008-01下旬納品が競合するため、2007年12月機として推測登録しない。
4. 2007年12月のメーカー別一覧・当時新台予定表を再横断し、漏れを閉じてから2008年1月へ進む。
5. resetBehavior遡及QAは `逮捕しちゃうぞ（2006-08-28）` から再開。
6. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。
