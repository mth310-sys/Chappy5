# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは223件地点（`まぁさん` / ラスター追加済み）。
- **別機種 `マァサン-30`（アルチザン）を224件目として追加済み。**

## 224. マァサン-30（アルチザン）

- new record: `docs/real_machine_db/machines/2008-01_maasan-30-artisan.md`
- commit: `3777ea2e3e523d0fd1e1ec9a32eb1b3392d16f5d`
- manufacturer: アルチザン
- releaseDate: `2008-01`（月精度。具体日はUNVERIFIED）
- modelName: マァサン-30
- approvalNumber: 7S0676（P-WORLD表記。番号単独同定禁止）
- generation: 5号機
- systemType: ノーマル / 30Φ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 別機種同定

- P-WORLDでアルチザン、5号機ノーマル、30Φ、型式名マァサン-30、検定番号7S0676を確認。
- 223件目のラスター「まぁさん」（25Φ）とはメーカー・表記・型式・口径が異なるため別機種として登録。
- 後年一覧でもラスター「まぁさん」とアルチザン「マァサン-30」は別行。兄弟機扱いせず性能値を流用しない。

### 導入時期

- Pacnkの2008年度一覧は `2008年1月 マァサン‐30(アルチザン)` と掲載。
- P-WORLD本体の導入開始欄は空欄だが、掲示板に2008-01-11/15付の当時機種言及が残る。
- 後年一覧では年代不明のため、主releaseDateは月精度 `2008-01` とし、具体日は `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

P-WORLDで確認:
- BIG BONUS: 345枚を超える払い出しで終了
- MIDDLE BONUS: 119枚を超える払い出しで終了

再探索後も未確定:
- 設定構成
- 設定別機械割/出玉率
- 設定別BIG/MIDDLE/合算確率
- 50枚あたりゲーム数/ベース
- BIG/MIDDLEの実純増枚数

「マァサン-30 / マァサン30 / マァサン‐30 / アルチザン / 型式名 / 7S0676」と「機械割 / 設定 / BIG確率 / MIDDLE / 合算 / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、P-WORLD、Pacnk、後年DB、一般検索を横断。ラスター「まぁさん」や後年の別メーカー機の数値は流用せず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NONE_CONFIRMED`
- stateAfterReset: `NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RAM / 天井 / モード / ガックン / 初期出目」を機種名・型式・メーカーと組み替えたが、本機固有の直接資料を確定できず。一般的な5号機ノーマルの挙動を推測転記しない。

### 主要出典

- P-WORLD: https://www.p-world.co.jp/machine/database/5046
- Pacnk 2008年度一覧: https://pacnk.com/photoslot/mlist_2008.html
- スロリスクタイム「ま行」: https://pachisuro100.com/magyo/
- スロリスクタイム ノーマル一覧: https://pachisuro100.com/normal/

取得日: 2026-09-01

## 223. まぁさん（ラスター・直前完了・再追加禁止）

- record: `docs/real_machine_db/machines/2008-01-21_maasan.md`
- commit: `2c56708b0bdd35b91f6c527a2a59c99b9aaf11e6`
- manufacturer: ラスター
- releaseDate: `2008-01-21`（2007-12資料とCONFLICT）
- systemType: ノーマル / 完全告知 / 同時当選あり / 25φ
- setting structure: 1 / 3 / 5 / 7
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- **224のアルチザン「マァサン-30」と混同・統合禁止。**

## 222. 餓狼伝説スペシャル（再追加禁止）

- record: `docs/real_machine_db/machines/2008-01-20_garou-densetsu-special.md`
- commit: `b75ee7100f475b5b4843b063079c82731b7092ee`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

## resetBehavior 遡及QA

### 逮捕しちゃうぞ（2006-08-28）補完済み

- record: `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md`
- commit: `42e7e29f4581af7a7b841317ea27f01092115bb8`

### 次の遡及QA対象

- **`ブリチカ-30（2006-09）`**。
- next record: `docs/real_machine_db/machines/2006-09_burichika-30.md`
- REG後32G RT「ブリチカチャンス」を持つため、設定変更/据え置き/電断時のRT残G・状態処理を最優先で探索する。

## 2008年1月境界監査

- 220: `銀河鉄道物語`。再追加禁止。
- 221: `インディ・ジョーンズS`。再追加禁止。
- 222: `餓狼伝説スペシャル`。再追加禁止。
- 223: `まぁさん`（ラスター）。再追加禁止。
- 224: `マァサン-30`（アルチザン）。再追加禁止。
- `島育ち`（オリンピア）/ `ウルトラキューティーハニー3`（メーシー）は2008年1月候補。具体導入日を再比較して未処理最古順に進める。
- `めんそーれ2`は同名25Φ/30Φ/2A-30の導入年・月が資料で分岐するため、既存レコード有無と型式を確認してから追加する。2007年発表の30Φ版を2008年25Φ版へ誤統合しない。

## 重複防止

- 217: `バーチャファイターF`。
- 218: `学習パチスロ 理科`。
- 219: `パンドラ`。
- 220: `銀河鉄道物語`。
- 221: `インディ・ジョーンズS`。
- 222: `餓狼伝説スペシャル`。
- 223: `まぁさん`（ラスター）。
- 224: `マァサン-30`（アルチザン）。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準224件地点から継続。**
2. **`島育ち / ウルトラキューティーハニー3 / めんそーれ2系` の具体導入日を再比較し、未処理最古の1機種から前進する。**
3. `めんそーれ2` は25Φ/30Φ/2A-30の型式・導入時期を分離し、既存レコードと重複しないことを先に確認する。
4. resetBehavior遡及QAは **`ブリチカ-30（2006-09）`** から再開。
5. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機・同名別メーカー機の仕様を根拠なしに流用しない。
