# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは225件地点（`島育ち` / オリンピア追加済み）。
- **メーシー `ウルトラキューティーハニー3`（一般商品名: ウルトラキューティーハニー）を226件目として追加済み。**

## 226. ウルトラキューティーハニー3（メーシー）

- new record: `docs/real_machine_db/machines/2008-01_ultra-cutie-honey3.md`
- commit: `ba76fd108c0a56ed6f214d6cb9b94984d2b40985`
- manufacturer: メーシー
- modelName: `ウルトラキューティーハニー3`
- approvalNumber: `7S0646`
- releaseDate: `2008-01 / 2008-02` (`CONFLICT_RELEASE_TIMING`)
- generation: 5号機
- systemType: ボーナス+RT / RT延命型（メーカー公式はボーナス+AT表記）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入時期・同定

- ユニバーサル公式製品ページ/製品一覧は発売 `2008年1月`。
- P-WORLDも導入開始 `2008年01月`。
- 一方、グリーンべるとは **2008-02-01** にアルゼが本機とスロガッパの新機種発表展示会を開催したと報道。
- K-Naviも2008-02-01展示会を2008-02-05に報道。
- 当時系業界史には `2008/2/上発売` とある。
- 公式1月表記と発表展示会/当時発売履歴の2月系列は時系列上両立しにくいため、一本化せず `CONFLICT_RELEASE_TIMING`。
- 2007年6月 `スーパーキューティーハニー` とは別機種。混同禁止。

### 性能コア

4段階設定（1 / 4 / 6 / H）。パチマガスロマガ精密値、HAZUSE、P-WORLD、K-Naviで整合。

- BIG合成:
  - 設定1 `1/474.90`
  - 設定4 `1/445.82`
  - 設定6 `1/420.10`
  - 設定H `1/390.10`
- REG / HONEY CHANCE:
  - 設定1 `1/963.76`
  - 設定4 `1/840.21`
  - 設定6 `1/744.73`
  - 設定H `1/668.73`
- ボーナス合成:
  - 設定1 `1/318.14`
  - 設定4 `1/291.27`
  - 設定6 `1/268.59`
  - 設定H `1/246.38`
- 機械割: `98 / 104 / 111 / 117%`
- 50枚ベース: `41.46 / 41.94 / 42.58 / 43.60G`
- BIG: 459枚超払い出し終了、純増目安約310枚
- REG: 主系列は144枚超払い出し終了、純増目安約101枚
- RT純増: 約 `+0.5枚/G`
- RT終了後1200G消化で救済RTへ再突入する天井RTを確認。

### 競合

- `CONFLICT_RELEASE_TIMING`:
  - 公式/P-WORLD: 2008年1月
  - 2008-02-01業界発表会 / 当時業界史: 2008年2月上旬
- `CONFLICT_SYSTEM_LABEL`:
  - メーカー公式: ボーナス+AT / ART搭載
  - P-WORLD/業界/解析: RT、天井RT、RT延命
- `CONFLICT_REG_PAYOUT_THRESHOLD`:
  - P-WORLD/パチマガ: 144枚超
  - K-Navi: 114枚超
  - 平均化せず、主系列は複数一致の144枚超。
- `CONFLICT_RETROSPECTIVE_SPEC`:
  - 5号機クロニクルはSUPER BIG約448枚/NORMAL BIG約311枚/REG約129枚、20G CZ等という根本的に違う仕様を掲載。
  - 主系列に流用しない。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`
  - RT終了後1200Gというカウンタの存在は確認済み。ただし設定変更/電断でリセットか引継ぎか不明。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`
  - 通常時はRT終了後1200Gで救済RT。リセット後の短縮/同値/消滅は未確定。
- modeAfterReset: `NONE_CONFIRMED`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
  - RT状態・ナビポイントの変更時処理が未確定。
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RAMクリア / ガックン / 初期出目 / HONEYメーター / ナビポイント / 1200G / 天井RTを正式名・通称・型式名と組み替え、当時解析、旧DB、掲示板、回顧資料まで再探索したが、本機固有の変更/据え置き/電断処理を直接確定できず。一般的5号機挙動は推測転記しない。

### 主要出典

- ユニバーサル公式: https://www.universal-777.com/product/slot/ultra_cutiehoney/
- ユニバーサル公式製品一覧: https://www.universal-777.com/product/slot/index.html
- P-WORLD: https://www.p-world.co.jp/machine/database/5049
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/37/a.php
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/37/h.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/37/c.php
- HAZUSE: https://hazuse.com/machine/pachislot/7S0646/
- K-Navi: https://p-kn.com/slot/764/
- グリーンべると: https://web-greenbelt.jp/00003493/
- K-Navi展示会: https://p-kn.com/topics/exhibition/247/
- 当時系業界史: https://slothistory.com/kousin_kako04.html

取得日: 2026-09-01

## 225. 島育ち（オリンピア・再追加禁止）

- record: `docs/real_machine_db/machines/2008-01_shima-sodachi.md`
- commit: `1961c2b371b1fb860b4483b1558e07f67c6ee5c2`
- releaseDate: `2008-01`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

## 224. マァサン-30（アルチザン・再追加禁止）

- record: `docs/real_machine_db/machines/2008-01_maasan-30-artisan.md`
- commit: `3777ea2e3e523d0fd1e1ec9a32eb1b3392d16f5d`
- ラスター「まぁさん」と混同禁止。

## 223. まぁさん（ラスター・再追加禁止）

- record: `docs/real_machine_db/machines/2008-01-21_maasan.md`
- commit: `2c56708b0bdd35b91f6c527a2a59c99b9aaf11e6`

## 222. 餓狼伝説スペシャル（再追加禁止）

- record: `docs/real_machine_db/machines/2008-01-20_garou-densetsu-special.md`
- commit: `b75ee7100f475b5b4843b063079c82731b7092ee`

## resetBehavior 遡及QA

### 逮捕しちゃうぞ（2006-08-28）補完済み

- record: `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md`
- commit: `42e7e29f4581af7a7b841317ea27f01092115bb8`

### 次の遡及QA対象

- **`ブリチカ-30（2006-09）`**。
- next record: `docs/real_machine_db/machines/2006-09_burichika-30.md`
- REG後32G RT「ブリチカチャンス」を持つため、設定変更/据え置き/電断時のRT残G・状態処理を最優先で探索する。

## 2008年1月→2月境界監査

- 220: `銀河鉄道物語`。再追加禁止。
- 221: `インディ・ジョーンズS`。再追加禁止。
- 222: `餓狼伝説スペシャル`。再追加禁止。
- 223: `まぁさん`（ラスター）。再追加禁止。
- 224: `マァサン-30`（アルチザン）。再追加禁止。
- 225: `島育ち`（オリンピア）。再追加禁止。
- 226: `ウルトラキューティーハニー3 / ウルトラキューティーハニー`（メーシー）。再追加禁止。
- **次候補は `めんそーれ2` 25Φ / `めんそーれ2A-30`。** 2007年9月の30Φ版、2008年の25Φ/2A-30を混同せず、型式・メーカー・具体導入月・既存レコード有無を先に監査する。
- その後、2008年2月上旬の未処理機をメーカー公式、当時業界記事、旧DBで時系列監査して最古の未処理から継続する。

## 重複防止

- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ / バーチャファイターF / 学習パチスロ 理科 / パンドラ / 銀河鉄道物語 / インディ・ジョーンズS / 餓狼伝説スペシャル / まぁさん / マァサン-30 / 島育ち / ウルトラキューティーハニー3` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準226件地点から継続。**
2. **`めんそーれ2` 25Φ / `めんそーれ2A-30` を最優先。2007年9月30Φ版と2008年版を分離し、型式・導入時期・既存レコード有無を確認して未登録なら次レコードとして処理する。**
3. その後、2008年2月上旬の未処理機を時系列監査する。
4. resetBehavior遡及QAは **`ブリチカ-30（2006-09）`** から再開。
5. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機・同名類似機の仕様を根拠なしに流用しない。
