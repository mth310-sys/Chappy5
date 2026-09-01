# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は271件地点 `スーパールーレット（25Φ、2008-07月精度）` まで完了済みだった。
- 今回、272 `スーパールーレット30`、273 `花浪漫R-30`、274 `爺サマー` を追加。性能コア + v0.7 resetBehaviorを同時収集した。
- resetBehavior遡及QAは既存handoffどおり `球児（2006-09）` まで補完済み。次対象の2006年機ファイル同定問題は維持し、今回性能本線を優先した。

## 272. スーパールーレット30（30Φ）

- record: `docs/real_machine_db/machines/2008-07_super-roulette-30.md`
- commit: `cfb2021503d0278d552b92868ac7a894d8400c40`
- releaseDate: `2008-07`
- releaseDatePrecision: `MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED`
- manufacturer: ネイチャー・アセスメント
- systemType: ノーマル / 30Φ / 完全告知 / 同時成立あり
- coreStatus: `PARTIAL`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 性能コア

- 赤7: 全設定 `1/1236.53`
- その他3ボーナス各: `1/789.59 / 753.29 / 736.36 / 704.69 / 668.73 / 642.51`
- ボーナス合成: `1/217.01 / 208.71 / 204.80 / 197.40 / 188.86 / 182.55`
- シミュレートPAYOUT: `94.00 / 98.03 / 99.23 / 100.91 / 102.94 / 104.65%`
- 4種類のボーナス純増: `約448 / 273 / 182 / 91枚`
- 30Φは25Φより通常時コイン持ちが若干低く、その分ボーナス確率が高いことが旧攻略資料に明記されるため別スペックとして登録。25Φ値は転記していない。
- 30Φ固有50枚ベースは表記揺れ/1000円/コイン持ちまで再探索後も数値未確定。

## 273. 花浪漫R-30

- record: `docs/real_machine_db/machines/2008-07_hanaroman-r-30.md`
- commit: `b58cc15a94c6c3935cbfe534c26eaef5d1314752`
- releaseDate: `2008-07`
- releaseDatePrecision: `LATE_MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED`
- manufacturer: タイヨー
- modelName: `花浪漫R-30（沖縄限定バージョン）`
- systemType: ノーマル / 30Φ / 沖縄限定 / 完全告知系
- coreStatus: `PARTIAL`

### 性能コア

- BIG: `1/326.0 / 313.6 / 303.4 / 291.3 / 280.1 / 268.6`
- REG: `1/555.4 / 528.5 / 500.3 / 455.1 / 431.2 / 402.1`
- 合算: `1/205.4 / 196.8 / 188.9 / 177.6 / 169.8 / 161.0`
- 機械割: `96.7 / 98.1 / 99.7 / 102.2 / 104.3 / 106.3%`（pacnkと5号機クロニクル一致）
- BIG約300枚、REG約149枚。P-WORLDでは349枚超/169枚超払い出し終了条件を確認。
- グリーンべると2008-08-08記事が「7月下旬より導入」と過去形で明記。具体日は推測せず下旬精度で保持。
- 50枚ベースは十分再探索後も未確定。

## 274. 爺サマー

- record: `docs/real_machine_db/machines/2008-07_jii-summer.md`
- commit: `de395c154c8f605a4ab78ae092149759edb56425`
- releaseDate: `2008-07`
- releaseDatePrecision: `LATE_MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED`
- manufacturer: 大都技研
- modelName: `ジイサマー7`
- systemType: ノーマル / 完全告知 / BIG+MB / 同時成立あり
- coreStatus: `PARTIAL`

### 性能コア

- BIG: `1/287.44 / 275.36 / 264.26 / 252.06 / 236.59 / 219.92`
- MB: `1/512.00 / 504.12 / 496.48 / 489.07 / 474.90 / 394.80`
- 合算: `1/184.09 / 178.09 / 172.46 / 166.34 / 157.92 / 141.24`
- パチマガ旧攻略シミュレートPAYOUT: `96.66 / 98.57 / 100.52 / 102.70 / 105.82 / 111.99%`
- 後年回顧の整数丸め系列 `97 / 99 / 101 / 103 / 106 / 112%` は平均せず併記。
- BIG約312枚、MB約104枚。
- 2008-07-02グリーンべるとで「7月下旬より納品開始予定」、後年パチマガ回顧も2008年7月ホールデビューで一致。具体日は未確定。
- 50枚ベースは十分再探索後も未確定。
- 2010年 `ギラギラ爺サマー` / 2022年 `超ギラギラ爺サマー` のAT・天井・リセット情報は別機種として一切流用していない。

## v0.7 resetBehavior（272〜274）

- 3機種とも設定変更/リセット/朝一/据え置き/電源OFF→ON/天井/モード/ガックンを、機種名・型式/メーカー・シリーズ名と組み替えて当時攻略、業界、旧DB、回顧資料を横断。
- `settingChangeBehavior / carryOverBehavior / powerCycleBehavior / resetDetection`: 本機固有の直接資料は十分再探索後も確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井/周期CZ等は公開仕様を確認できず `gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED`、リセット短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 公開された朝一専用モード/高確等は確認できず、`modeAfterReset / stateAfterReset` は `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- `advantageousSectionReset`: 全機 `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits / resetPenalties / numericResetData`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一般的な5号機ノーマル機やシリーズ後継機の挙動は流用していない。

## 今回の主要出典

取得日: 2026-09-01

### スーパールーレット30
- https://web-greenbelt.jp/00003685/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/k.php
- https://5goki.com/nature-assessment

### 花浪漫R-30
- https://web-greenbelt.jp/00003774/
- https://www.p-world.co.jp/machine/database/5294
- https://pacnk.com/slot/tools/sh_hanaromanr.html
- https://5goki.com/taiyo

### 爺サマー
- https://web-greenbelt.jp/00003743/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/i.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/k.php
- https://pachimaga.com/free/special/92f47d856bd09b78e06942216886cc2ee130a79a.php

## 重複防止・競合管理

- 既存274件の再追加禁止。
- `スーパールーレット`=271（25Φ）、`スーパールーレット30`=272（30Φ）。性能差明記のため別レコード。
- `花浪漫N-30`=270、`花浪漫R-30`=273。Rは沖縄限定別スペック。
- `爺サマー`=274。後継 `ギラギラ爺サマー` / `超ギラギラ爺サマー` と混同禁止。
- `海人 / 海人G-30` は旧業界史で2008-08-04発売資料があるため、2008年7月残監査完了前に先行登録しない。

## resetBehavior 遡及QA

- 最終補完済み: `球児（2006-09）`。
- 次対象handoff表記: `ジャックポット・トロピカルバージョン2（2006-09）` 相当以降。
- 2006年ヤーマ系旧機と2017年別機の混同防止のため、実ファイル名/パスをツリーで同定してから補完する。
- resetBehavior節が既にある機種は飛ばし、既存性能コアを不用意に変更しない。

## 次回再開地点

1. **LATEST_HANDOFF基準274件地点。2008年7月下旬 `爺サマー` まで追加済み。**
2. まず2008年7月下旬〜月末の未処理機をメーカー別一覧・当時業界記事・旧DBで境界監査し、`パチスロ 桃太郎電鉄 / 紅三四郎 / レッドライオン / ミッション・イン・ポッシブー / ゲッターロボ` 等の2008年7月掲載候補について、既存登録有無と具体導入/納品日を確認する。月掲載だけで順序を決めない。
3. 7月残候補が既存または後日と確定したら、2008-08-04資料がある `海人 / 海人G-30` を次候補として処理する。
4. 25Φ/30Φ、沖縄限定、同名別型式は性能差を確認し別機扱いを継続する。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
