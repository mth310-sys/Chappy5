# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは224件地点（`マァサン-30` / アルチザン追加済み）。
- **オリンピア `島育ち` を225件目として追加済み。**

## 225. 島育ち（オリンピア）

- new record: `docs/real_machine_db/machines/2008-01_shima-sodachi.md`
- commit: `1961c2b371b1fb860b4483b1558e07f67c6ee5c2`
- manufacturer: オリンピア
- releaseDate: `2008-01`（月精度。具体日はUNVERIFIED）
- generation: 5号機
- systemType: ノーマル / ボーナス主体 / 完全告知系
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- Pacnkの2008年度一覧と5号機クロニクルは2008年1月で一致。
- オリンピア公式旧製品一覧で `島育ち25φ` の製品存在を確認。
- 「発売 / 納品 / 導入 / 内覧会 / 1月21日 / 1月28日」等へ検索語を変えたが日精度を確定できず、月精度 `2008-01` とした。

### 性能コア

P-WORLD / K-Naviで一致:
- BIG: 設定1→6 `1/278 → 1/221`
- REG: 設定1→6 `1/127 → 1/109`
- 合算: 設定1→6 `1/87 → 1/73`
- BIG: 345枚超払い出し終了、実獲得目安約312枚
- REG: 10枚超払い出し終了、実獲得目安約14枚

機械割:
- K-Navi: `96.2 / 98.2 / 100.1 / 103.1 / 106.1 / 110.3%`
- 5号機クロニクル: `97.1 / 99.3 / 101.5 / 103.8 / 107.1 / 110.6%`
- 全設定で差があるため `CONFLICT`、平均化しない。

50枚ベース:
- 表記揺れと「50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数」を組み替え、P-WORLD、K-Navi、後年DB、実機販売資料まで横断したが比較可能値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 重要な仕様競合

- P-WORLD / K-Navi / 現存実機販売資料の一致系列:
  - 完全ノーマル系
  - BIG約312枚 / REG約14枚
- 5号機クロニクル:
  - Aタイプ（RT機能付き）
  - BIG最大375枚 / REG約104枚
  - RT関連記述あり
- 根本仕様が違うため `CONFLICT_SOURCE_SPEC` として隔離。別型式混入または後年整理誤りの可能性は断定せず、物差し主値には複数一致するP-WORLD/K-Navi系列を採用。

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

「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RAMクリア / ガックン / 初期出目 / ランプ / 天井」を機種名・メーカーと組み替え、攻略・旧DB・実機資料まで再探索したが、本機固有の設定変更/据え置き/電断処理と判別法は直接確認できず。一般的な5号機ノーマルの挙動を推測転記しない。

### 主要出典

- オリンピア公式: https://www.olympia.co.jp/official/products/2005.html
- P-WORLD: https://www.p-world.co.jp/machine/database/5027
- K-Navi: https://p-kn.com/slot/746/
- Pacnk 2008年度一覧: https://pacnk.com/photoslot/mlist_2008.html
- 5号機クロニクル: https://5goki.com/heiwa-olympia
- 中一商事 実機資料: https://www.nakaiti.com/html/toku001.html

取得日: 2026-09-01

## 224. マァサン-30（アルチザン・直前完了・再追加禁止）

- record: `docs/real_machine_db/machines/2008-01_maasan-30-artisan.md`
- commit: `3777ea2e3e523d0fd1e1ec9a32eb1b3392d16f5d`
- releaseDate: `2008-01`
- systemType: ノーマル / 30Φ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- ラスター「まぁさん」と混同・統合禁止。

## 223. まぁさん（ラスター・再追加禁止）

- record: `docs/real_machine_db/machines/2008-01-21_maasan.md`
- commit: `2c56708b0bdd35b91f6c527a2a59c99b9aaf11e6`
- manufacturer: ラスター
- releaseDate: `2008-01-21`（2007-12資料とCONFLICT）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

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
- 225: `島育ち`（オリンピア）。再追加禁止。
- **次候補は `ウルトラキューティーハニー3 / ウルトラキューティーハニー`（メーシー）。** ユニバーサル公式製品一覧では発売年月2008年1月、5号機クロニクルも2008年1月。一方、後年一覧には2008年2月表記もあるため、具体導入日と正式商品名/型式名を再照合してから登録する。
- P-WORLDは型式名 `スーパーキューティーハニー3` のページを「スーパーキューティーハニー」として残しており、公式の2007年6月 `スーパーキューティーハニー` と2008年1月 `ウルトラキューティーハニー` を誤統合しないこと。
- `めんそーれ2` 25Φは当時系履歴で2008年2月発売との記録あり。2007年9月納品の30Φ版、2008年の25Φ/2A-30を分離し、既存レコード有無を確認してから追加する。

## 重複防止

- 217: `バーチャファイターF`。
- 218: `学習パチスロ 理科`。
- 219: `パンドラ`。
- 220: `銀河鉄道物語`。
- 221: `インディ・ジョーンズS`。
- 222: `餓狼伝説スペシャル`。
- 223: `まぁさん`（ラスター）。
- 224: `マァサン-30`（アルチザン）。
- 225: `島育ち`（オリンピア）。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準225件地点から継続。**
2. **`ウルトラキューティーハニー3 / ウルトラキューティーハニー`（メーシー）を最優先。公式2008年1月と後年2008年2月表記の境界、正式名・型式を再照合して未登録なら226件目として処理する。**
3. その後 `めんそーれ2` 25Φ / `めんそーれ2A-30` を、2007年30Φ版と混同せず具体導入月・型式・既存レコード有無から監査する。
4. resetBehavior遡及QAは **`ブリチカ-30（2006-09）`** から再開。
5. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機・同名類似機の仕様を根拠なしに流用しない。
