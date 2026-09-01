# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は270件地点 `花浪漫N-30（2008-07月精度）` まで完了。
- 2008年7月残未処理の `スーパールーレット / スーパールーレット30` を再監査し、25Φと30Φは同名系列ながら性能差が明記された別スペックであることを確認。
- 271件目として25Φ `スーパールーレット` を月精度 `2008-07` で追加。性能コア + v0.7 resetBehaviorを同時収集済み。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象handoff表記は `ジャックポット・トロピカルバージョン2（2006-09）` だが、GitHubコード検索では当該表記の実ファイルを同定できず。2006年機と2017年の別機 `Ver.2` の混同防止のため、今回は推測パスへの上書きを行わずQA再開地点を維持。

## 271. スーパールーレット（25Φ）

- record: `docs/real_machine_db/machines/2008-07_super-roulette.md`
- commit: `7030ca1d76227303a542871e57736fc969e8ffd6`
- releaseDate: `2008-07`
- releaseDatePrecision: `MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED`
- manufacturer: ネイチャー・アセスメント
- modelName: `スーパールーレット（25Φ）`
- systemType: ノーマル / 25Φ / 完全告知 / 同時成立あり
- coreStatus: `PARTIAL`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 性能コア

- 機械割（5号機クロニクル単一系列）: `95.0 / 97.0 / 99.0 / 102.0 / 105.0 / 108.0%`
- 4種類のボーナス純増: `約448 / 273 / 182 / 91枚`
- 規定払い出し終了条件: `465 / 300 / 200 / 100枚超`
- 設定別ボーナス確率: `UNVERIFIED_AFTER_RESEARCH`
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`
- 30Φは25Φより通常時コイン持ちが若干低く、その分ボーナス確率が高いことが旧攻略資料に明記されるため、25Φ数値を30Φへ流用しない。

### 導入時期

- 2008-06-05: グリーンべるとで新機種発表。「洞爺湖サミット明けの7月納品予定」。
- 2008-07: 5号機クロニクルで25Φ/30Φとも導入月確認。
- 全国納品開始の具体日は十分再探索後も確定できなかったため `2008-07` 月精度で登録。

## v0.7 resetBehavior（271）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。通常ゲーム数天井/周期ゲーム数の公開仕様を確認できず。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `stateAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits / resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。本機固有のガックン/初期出目/表示等による変更判別資料を確定できず。
- `numericResetData`: `NONE_CONFIRMED_AFTER_RESEARCH`
- 一般的な5号機ノーマル機・他ネイチャー機・後年機の挙動は流用していない。

## 今回の主要出典

取得日: 2026-09-01

- https://web-greenbelt.jp/00003685/
- https://www.p-world.co.jp/machine/database/5212
- https://5goki.com/nature-assessment
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/02/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/a.php

## 重複防止・競合管理

- 既存271件の再追加禁止。
- `スーパールーレット` は今回271の25Φ。
- `スーパールーレット30 / スーパールーレット-30` は30Φ別スペック。旧攻略で「25Φよりコイン持ちが若干落ち、その分ボーナス確率アップ」と明記されるため別レコード候補。25Φの機械割/確率/ベースを転記しない。
- `花浪漫N-30 / 花浪漫N30` は270。
- `花浪漫R-30 / 花浪漫R30` は沖縄限定別スペックで、2008-07下旬導入資料あり。
- `爺サマー` は大都技研。一次資料で2008年7月下旬市場投入予定。
- `海人 / 海人G-30` はトリビー。旧業界史で2008-08-04発売資料があるため7月列へ先行登録しない。

## resetBehavior 遡及QA

- 最終補完済み: `球児（2006-09）`。
- 次対象handoff表記: **`ジャックポット・トロピカルバージョン2（2006-09）` 以降**。
- 今回GitHubコード検索で `ジャックポット トロピカル` / `トロピカルバージョン2` の既存ファイルを同定できなかった。
- 2006年ヤーマ系の旧機と2017年の別機 `ジャックポット トロピカルバージョン2` を混同しない。次回は2006年前後のINDEX/ツリー/ファイル名を時系列で直接走査し、実レコードを同定してからresetBehavior節を追加する。
- resetBehavior節が既にある機種は飛ばし、既存 `COMPLETE_CORE` / 性能コアを不用意に変更せずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準271件地点。`スーパールーレット（25Φ、2008-07月精度）` まで追加済み。**
2. 次は `スーパールーレット30` を最優先。25Φと別スペックとして、30Φ固有の設定別ボーナス確率・機械割・50枚ベース・具体導入日を再探索し、十分同定できれば272件目候補とする。
3. 30Φの性能コアが薄い場合でも25Φ値を流用せず `PARTIAL/UNVERIFIED` を維持し、資料系統を変更して再探索する。
4. その後、`花浪漫R-30`（沖縄限定・7月下旬資料あり）と `爺サマー`（7月下旬市場投入予定）を時系列突合し、最古未処理順で追加する。
5. `海人 / 海人G-30` は2008-08-04資料があるため7月列には混入させない。
6. resetBehavior遡及QAは2006年機の実レコード名/パスを同定したうえで `ジャックポット・トロピカル...` 相当から再開する。
7. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
