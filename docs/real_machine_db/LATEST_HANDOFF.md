# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは213件地点（`バミューダ` 追加済み）。
- 2007年12月前半の月単位候補を継続監査し、コナミ公式アーカイブ・P-WORLD・パチマガスロマガ・5号機クロニクル・2007年度一覧で `サンバ×サンバ` を2007年12月機として複数照合。
- 具体的な全国ホール導入日 / 納品開始日は今回の表記揺れ・型式名・メーカー名・旧DB・検定資料を含む再探索でも確定できなかったため、日付を推測せず **214件目として月精度で追加済み。**

## 214. サンバ×サンバ

- new record: `docs/real_machine_db/machines/2007-12_samba-x-samba.md`
- commit: `59b4b7d7eab7aec0bfc6982b0d087eeff1b85b58`
- manufacturer: KPE
- official archive: コナミアミューズメント
- formal model: `サンバアンドサンバJA`
- generation: 5号機
- releaseDate: `2007-12`
- systemType: ボーナス+RT/ART / 同時成立あり
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・同定

- コナミアミューズメント公式アーカイブで `SAMBA × SAMBA`、稼働開始2007年12月、タイプ5号機 RT/ART、©KPEを確認。
- P-WORLDでメーカーKPE、型式 `サンバアンドサンバＪＡ`、2007年12月導入。
- 5号機クロニクルとパチンコFAN年度一覧でも2007/12を照合。
- 2007-06-11東京都公安委員会告示の検定情報を保存した当時系資料に `サンバアンドサンバJA` が掲載。
- 具体的納品開始日 / 全国導入日は `UNVERIFIED_AFTER_RESEARCH`。月精度のまま保持。

### 性能コア

- BIG: 全設定 `1/304.82`。
- REG: `1/354.25 / 1/350.46 / 1/346.75 / 1/343.12 / 1/339.56 / 1/336.08`。
- 合成: `1/163.84 / 1/163.02 / 1/162.22 / 1/161.42 / 1/160.63 / 1/159.84`。
- メーカー発表合成は整数丸めで `1/164 / 1/163 / 1/162 / 1/161 / 1/161 / 1/160`。P-WORLDとも整合。
- BIG: 253枚超払い出し終了 / 純増約208枚。
- REG: 69枚超払い出し終了 / 純増約56枚。
- 同時成立あり / RT / ART。
- ARTとボーナスのループ率は当時パチマガで最大約80%と説明。
- 設定別機械割は5号機クロニクルが不明、パチマガ現存PAYOUT欄も「現在調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
- 1000円あたりゲーム数も当時パチマガ現存ページ自体が「現在調査中」で、表記揺れ・型式名・50枚/1000円/ベース/コイン持ち再探索後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ART純増/Gと基本1セットG数 / 終了条件の高信頼な直接数値も今回未確定。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。設定変更時ART/RT/モード/RAM処理の直接資料なし。
- carryOverBehavior: 据え置き時ART/RT残G・モード引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみのART/RT・モード・初期出目等は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。ART/RT内部残Gの変更時処理は未確認。
- ceilingAfterReset: 通常天井 / 短縮天井 / 朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 通常時に滞在モードの存在形跡はあるが、設定変更再抽選 / 据え置き引継ぎ / 朝一専用モード / 公開振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- stateAfterReset: RT/ART搭載のため該当。設定変更 / 据え置き / 電断時の状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン / 初期出目 / ランプ / G数挙動による本機固有の判別は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更時のみの比較可能な公開朝一数値 `NONE_CONFIRMED`。
- P-WORLD掲示板の「朝イチ1回転でREG」等の体験談は解析された設定変更判別資料ではないため本線根拠に採用しない。

### 主要出典

- コナミ公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2007/samba/
- P-WORLD: https://www.p-world.co.jp/machine/database/4975
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/a.php
- パチマガスロマガ ボーナス精密値: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/h-1.php
- パチマガスロマガ メーカー発表合成/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/h.php
- パチマガスロマガ 小役/1000円G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/c.php
- 5号機クロニクル KPE: https://5goki.com/kpe
- パチンコFAN 2007年度一覧: https://pacnk.com/photoslot/plist2007_0_0.html
- 2007-06検定情報保存: https://p-mans.blogspot.com/2007/06/

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
- `バミューダ`: 213件目。
- `サンバ×サンバ`: 214件目。再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準214件地点から継続。**
2. 2007年12月前半の残る月単位候補 **`学習パチスロ理科 / まぁさん`** を優先監査。複数資料で12月機と同定でき、性能コアを回収できる最古候補から月精度を明示して順次収録する。
3. `バーチャファイターF` はTとは別機種として扱う。K-Naviの2007-12-19発売決定記事等から具体導入時期を詰める。
4. 月単位候補の境界監査後、具体日確定候補は `ハナマル!学園奮闘記!`（グリーンべると2007-12-16納品開始 / K-Navi 12/17ホール導入予定）、`ダイナマイトリターンズ`（12/17候補）、`パンドラ`（12/25候補）の順で比較する。
5. resetBehavior遡及QAは、`ランブルローズ` より後で未補完を確認した **`逮捕しちゃうぞ（2006-08-28）`** から再開。既存性能はCONFLICTを含むため不用意に改変せず、resetBehaviorを別管理で追加する。
6. 新規 / QAとも欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。

取得日: 2026-09-01
