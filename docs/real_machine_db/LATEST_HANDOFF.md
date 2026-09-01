# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは212件地点（`ぴかっとシーサー` 追加済み）。
- 2007-12-01〜12-16境界候補を再監査。`バミューダ / サンバ×サンバ / 学習パチスロ理科 / まぁさん` は複数の2007年度一覧で12月群として扱われるが、今回の検索では日単位の実導入順を確定できない。
- そのうち `バミューダ` はパチマガスロマガで性能コアを十分回収でき、5号機クロニクルとパチンコFANで2007-12を照合できたため、日付を推測せず **213件目として月精度で追加済み。**

## 213. バミューダ

- new record: `docs/real_machine_db/machines/2007-12_bermuda.md`
- commit: `3841e200ecfebac4f8a0e912dd8122e6deb107f3`
- manufacturer: ネイチャー・アセスメント
- generation: 5号機
- releaseDate: `2007-12`
- systemType: ノーマル / ボーナス主体 / 同時成立あり / ボーナスチェック機能
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・同定

- 5号機クロニクルでネイチャー・アセスメントの2007年導入機として `バミューダ`、導入時期 `2007/12`。
- パチンコFANの2007年度一覧でも2007年12月欄に `バミューダ（ネイチャー・アセスメント）`。
- パチマガスロマガも `バミューダ（ネイチャーアセスメント）` と同定。
- 具体的な納品開始日 / 全国ホール導入日は表記揺れ・メーカー名・旧DB・当時実戦記録まで変えて再探索したが確定できず `UNVERIFIED_AFTER_RESEARCH`。12/16以降へ恣意的に置かず月精度で保存。

### 性能コア

- BIG合成: `1/390.10 / 1/372.36 / 1/356.17 / 1/356.17 / 1/356.17 / 1/356.17`。
- REG合成: `1/630.15 / 1/630.15 / 1/630.15 / 1/546.13 / 1/512.00 / 1/474.90`。
- ボーナス合成: `1/240.94 / 1/234.06 / 1/227.56 / 1/215.58 / 1/210.05 / 1/203.53`。
- 50枚ベース: `44.33 / 44.78 / 45.25 / 46.20 / 47.72 / 48.78G/1000円`。
- BIG: 400枚超払い出し終了、純増約350枚。
- REG: 105枚超払い出し終了、純増約100枚。
- RT / ART / ATなし。
- 機械割: 5号機クロニクル `97.4 / 99.2 / 101.0 / 102.6 / 104.1 / 105.4%`。今回は独立した第二数値資料まで取得できなかったため、数列自体の信頼度は `ANALYSIS_SINGLE` と明記。
- パチマガスロマガの基本・確率・小役/1000円Gで主要性能が揃うため、性能コアは `COMPLETE_CORE`。機械割第二照合不足はmissingとして残す。

### v0.7 resetBehavior

- settingChangeBehavior: 本機固有RAM処理は `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 通常時天井 / RT・ART・CZ残G / モードは `NONE_CONFIRMED / NOT_APPLICABLE`。成立済みボーナス等の内部状態引継ぎは未確認。
- powerCycleBehavior: 電源OFF→ON時の成立済みボーナス、初期出目、告知状態は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井 / 周期CZ / ATゲーム数管理 `NONE_CONFIRMED`。
- ceilingAfterReset: 通常天井 / 短縮天井 / 朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 通常時モード / 朝一専用モード / 設定変更時公開振り分け `NONE_CONFIRMED`。
- stateAfterReset: RT / ART / AT / CZ `NOT_APPLICABLE`。RAMレベルのボーナス成立状態は未確認。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン / 初期出目 / ボーナスチェックランプ等を再探索したが、本機固有の設定変更判別は `UNVERIFIED_AFTER_RESEARCH`。通常の「ボーナスチェック機能」を変更判別とは扱わない。
- numericResetData: 設定変更時専用の比較可能な公開朝一数値 `NONE_CONFIRMED`。

### 主要出典

- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/01/a.php
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/01/h.php
- パチマガスロマガ 小役 / 1000円G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/01/c.php
- 5号機クロニクル: https://5goki.com/nature-assessment
- パチンコFAN 2007年度一覧: https://pacnk.com/photoslot/plist2007_0_0.html
- 当時実戦補助資料: https://ameblo.jp/w-wolfvct/

取得日: 2026-09-01

## resetBehavior 遡及QA

### ランブルローズ（2006-08）まで補完済み

- record: `docs/real_machine_db/machines/2006-08_rumble-roses.md`
- QA commit: `cee5c485ab82c9c7178b1b84b45456f82646f60c`
- 既存 `coreStatus=PARTIAL` は維持し、リセットQAを別管理で `PARTIAL` とした。
- 初代ランブルローズについて `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / チャレンジタイム / RAM / ガックン` 等へ検索語を変更して再探索。
- 初代固有の設定変更・据え置き・電断時チャレンジタイム/2種BB内部状態処理は確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井、朝一専用モード、短縮天井、公開朝一数値は `NONE_CONFIRMED`、有利区間は `NOT_APPLICABLE`。
- 後継 `ランブルローズXX` / `ランブルローズ3D` のART・モード・天井仕様は初代へ流用しないことを明記。
- 再探索の副産物として中一商事の初代実機概要から、従来欠損だったBIG `1/504 → 1/336`、REG全設定 `1/437` を回収。解析専門資料の第二照合前なので `ANALYSIS_SINGLE`。
- 50枚ベースは引き続き `UNVERIFIED_AFTER_RESEARCH`。

主要出典:
- コナミ公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2006/rumble/
- グリーンべると回顧: https://web-greenbelt.jp/00003794/
- 中一商事 初代実機概要: https://www.nakaiti.com/html/sKpe040.html
- 5号機クロニクル KPE: https://5goki.com/kpe
- パチ7 5号機ボーナス構造解説: https://pachiseven.jp/articles/detail/7071

取得日: 2026-09-01

## 重複防止

- `NEO花物語`: 既存レコードあり。再追加禁止。
- `スーパービンゴV`: 既存レコードあり。再追加禁止。
- `CANスロ`: 既存レコードあり。再追加禁止。
- `パチスロ「機動戦士ガンダムII～哀・戦士編～」`: 208件目。
- `パチスロシティーハンター`: 209件目。
- `名門!夢色学園生徒会`: 210件目。
- `バーチャファイターT`: 211件目。
- `ぴかっとシーサー`: 212件目。
- `バミューダ`: 213件目。再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準213件地点から継続。**
2. 2007年12月前半の残る月単位候補 **`サンバ×サンバ / 学習パチスロ理科 / まぁさん`** を優先監査。具体日が確定しなくても、複数資料で12月機と同定でき性能コアを回収できるものは月精度を明示して順次収録する。
3. `バーチャファイターF` はTとは別機種として扱う。K-Naviの2007-12-19発売決定記事等から具体導入時期を詰める。
4. 月単位候補の境界監査後、具体日確定候補は `ハナマル!学園奮闘記!`（グリーンべると **2007-12-16納品開始** / K-Navi 12/17ホール導入予定）、`ダイナマイトリターンズ`（12/17候補）、`パンドラ`（12/25候補）の順で比較する。
5. resetBehavior遡及QAは、`ランブルローズ` より後で未補完を確認した **`逮捕しちゃうぞ（2006-08-28）`** から再開。既存性能はCONFLICTを含むため不用意に改変せず、resetBehaviorを別管理で追加する。
6. 新規 / QAとも欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。

取得日: 2026-09-01
