# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは222件地点（`餓狼伝説スペシャル` 追加済み）。
- **`まぁさん`（ラスター）を223件目として追加済み。**

## 223. まぁさん（ラスター）

- new record: `docs/real_machine_db/machines/2008-01-21_maasan.md`
- commit: `2c56708b0bdd35b91f6c527a2a59c99b9aaf11e6`
- manufacturer: ラスター
- releaseDate: `2008-01-21`（2007-12資料とCONFLICT）
- generation: 5号機
- systemType: ノーマル / 完全告知 / 同時当選あり / 25φ
- setting structure: 1 / 3 / 5 / 7
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入日の同定 / CONFLICT

- 2008-01-21付のサミーネットワークス発表文（4Gamer転載）で、ラスターの「まぁさん」をホールへの実機導入に併せて1月21日に同時配信と明記。
- P-WORLDは「導入開始：2007年12月」、5号機クロニクルも2007/12。P-WORLD掲示板には2007-12-05/08時点の言及も残る。
- 平均せず `CONFLICT_DATE_MONTH_VS_ANNOUNCED_HALL_INTRODUCTION`。日精度の発表文を主releaseDateに採用するが、2007-12資料は消さない。

### 性能コア

K-Navi / P-WORLDで設定別確率一致:
- BIG: `1/312.1 / 1/304.8 / 1/286.2 / 1/266.4`
- MID: `1/397.2 / 1/370.3 / 1/321.3 / 1/273.1`
- 合算: `1/174.8 / 1/167.2 / 1/151.4 / 1/134.9`
- 設定順: `1 / 3 / 5 / 7`

機械割:
- K-Navi: `97.1 / 99.2 / 103.2 / 108.5%`
- 5号機クロニクル: `97.6 / 99.7 / 103.9 / (設定7欠落)%`
- 0.5〜0.7pt差があるため `CONFLICT_PAYOUT_METHOD_OR_SOURCE`。平均しない。

50枚ベース（K-Navi）:
- 設定1: `37.00G/1000円`
- 設定3: `37.64G/1000円`
- 設定5: `38.28G/1000円`
- 設定7: `38.95G/1000円`

基本獲得（パチマガスロマガ「まぁさん25」）:
- 赤7BIG: 345枚超払い出し / 純増336枚
- 青7BIG: 345枚超払い出し / 純増312枚
- MID: 119枚超払い出し / 純増104枚

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

「まぁさん / まぁさん25 / ラスター / 型式名まぁさん」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、5号機クロニクル、当時リリース等を横断。本機固有の設定変更・据え置き・電断・変更判別の直接資料は確定できず、一般的な5号機ノーマルの挙動を流用しない。

### 主要出典

- 4Gamer / サミーネットワークス発表文: https://www.4gamer.net/games/021/G002122/20080121010/
- K-Navi機種情報: https://p-kn.com/slot/744/
- K-Navi小役確率/1000円G数: https://p-kn.com/slot/744/4638/
- K-Navi機械割: https://p-kn.com/slot/744/4635/
- P-WORLD: https://www.p-world.co.jp/machine/database/5014
- パチマガスロマガ「まぁさん25」: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/17/a.php
- 5号機クロニクル（ラスター）: https://5goki.com/luster

取得日: 2026-09-01

## 222. 餓狼伝説スペシャル（直前完了・再追加禁止）

- record: `docs/real_machine_db/machines/2008-01-20_garou-densetsu-special.md`
- commit: `b75ee7100f475b5b4843b063079c82731b7092ee`
- manufacturer: SNKプレイモア
- releaseDate: `2008-01-20`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 333/666/999G契機、餓狼チャンス/舞チャンスを記録済み。再追加禁止。

## resetBehavior 遡及QA

### 逮捕しちゃうぞ（2006-08-28）補完済み

- record: `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md`
- commit: `42e7e29f4581af7a7b841317ea27f01092115bb8`
- 既存性能値・既存CONFLICTは変更せず、v0.7 resetBehaviorだけ別管理で追加済み。

### 次の遡及QA対象

- **`ブリチカ-30（2006-09）`**。
- next record: `docs/real_machine_db/machines/2006-09_burichika-30.md`
- REG後32G RT「ブリチカチャンス」を持つため、設定変更/据え置き/電断時のRT残G・状態処理を最優先で探索する。

## 2008年1月境界監査

- 220: `銀河鉄道物語`。再追加禁止。
- 221: `インディ・ジョーンズS`。再追加禁止。
- 222: `餓狼伝説スペシャル`。再追加禁止。
- 223: `まぁさん`（ラスター）。再追加禁止。
- **別機種 `マァサン-30`（アルチザン、型式マァサン-30、検定7S0676、30Φ）を新たに未処理候補として確認。** P-WORLDは導入開始日を空欄とするが、2008-01-11/15の掲示板記録があり、Pacnkの2008年1月一覧にも掲載。ラスターの「まぁさん」と混同・統合しない。
- `島育ち`（オリンピア）/ `ウルトラキューティーハニー3`（メーシー）は5号機クロニクルで2008年1月。具体導入日を再比較して未処理最古順に進める。
- `めんそーれ2`は同名25Φ/30Φ/2A-30の導入年・月が資料で分岐するため、既存レコード有無と型式を確認してから追加する。2007年発表の30Φ版を2008年25Φ版へ誤統合しない。

## 重複防止

- 217: `バーチャファイターF`。
- 218: `学習パチスロ 理科`。
- 219: `パンドラ`。
- 220: `銀河鉄道物語`。
- 221: `インディ・ジョーンズS`。
- 222: `餓狼伝説スペシャル`。
- 223: `まぁさん`（ラスター）。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準223件地点から継続。**
2. **最優先は別機種 `マァサン-30`（アルチザン）**。2008-01-11/15時点の実機言及とPacnkの2008年1月一覧を起点に、具体導入日・設定別性能を表記揺れ/型式/アルチザンで再探索する。資料不足なら十分に横断してから欠損判定。
3. その後 `島育ち / ウルトラキューティーハニー3 / めんそーれ2系` を具体導入日で再比較し、未処理最古順に前進する。
4. resetBehavior遡及QAは **`ブリチカ-30（2006-09）`** から再開。
5. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機・同名別メーカー機の仕様を根拠なしに流用しない。
