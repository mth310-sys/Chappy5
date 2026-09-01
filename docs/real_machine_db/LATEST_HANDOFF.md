# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は269件地点 `スーパージャックポットN（2008-07-13納品開始）` まで完了。
- 2008年7月残未処理を監査し、タイヨー `花浪漫N-30` が未登録であることを確認。
- 270件目として `花浪漫N-30` を月精度 `2008-07` で追加。性能コア + v0.7 resetBehaviorを同時収集済み。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回も新規収集を優先。

## 270. 花浪漫N-30

- record: `docs/real_machine_db/machines/2008-07_hanaroman-n30.md`
- commit: `42b87c74f2cf48afdfe6043cc9162884a5a1a618`
- releaseDate: `2008-07`
- releaseDatePrecision: `MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED`
- manufacturer: タイヨー
- modelName: `花浪漫N-30`
- systemType: ノーマル / 30Φ / 完全告知
- coreStatus: `PARTIAL`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 性能コア

- BIG: `1/287.4 → 1/234.1`
- REG: `1/682.7 → 1/520.1`
- 合成: `1/202.3 → 1/161.4`
- 機械割（5号機クロニクル単一系列）: `96.7 / 98.1 / 99.7 / 102.2 / 104.3 / 106.3%`
- BIG規定払い出し終了条件: `349枚超`
- REG規定払い出し終了条件: `109枚超`
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`
- BIG/REG実純増枚数: `UNVERIFIED_AFTER_RESEARCH`。規定払い出しから推測換算していない。

### 導入時期

- 2008-06-24: グリーンべるとで新機種発表。
- 2008-07: 5号機クロニクルで導入月確認。
- 2008-07-19時点: 情報提供端子板の新規対応機種に `花浪漫N-30` が列挙。
- 2008-07-26: P-WORLD掲示板に既導入を前提とした実戦投稿あり。
- 全国納品開始の具体日は十分再探索後も確定できなかったため `2008-07` 月精度で登録。

## v0.7 resetBehavior（270）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。通常ゲーム数天井/周期ゲーム数の公開仕様を確認できず。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `stateAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits / resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。花浪漫N-30固有のガックン/初期出目/表示等による変更判別資料を確定できず。
- 一般的な5号機・他タイヨー機・後年機の挙動は流用していない。

## 今回の主要出典

取得日: 2026-09-01

- https://web-greenbelt.jp/00003652/
- https://www.p-world.co.jp/machine/database/5235
- https://5goki.com/taiyo
- https://news.p-world.co.jp/articles/2959/greenbelt
- https://web-greenbelt.jp/00003774/
- https://pachimaga.com/free/playback/33b34b9eff3031dc11547899e913221b9833305e.php

## 重複防止

- 既存270件の再追加禁止。
- `花浪漫N-30 / 花浪漫N30` は今回270と同一。
- `花浪漫R-30 / 花浪漫R30` は沖縄限定別スペック。2008-08-08グリーンべると記事では7月下旬導入、N-30よりBBを抑えRBを強化。別レコード候補として混同禁止。
- `スーパージャックポット / スーパージャックポットN` は269の2008年ヤーマ機系列。2015年アクロス同名機と混同禁止。
- `スーパールーレット / スーパールーレット30` はネイチャー・アセスメント。2008-06-05業界記事で「洞爺湖サミット明けの7月納品予定」まで確認済み。25Φ/30Φの性能差と別レコード要否を確認してから登録する。
- `爺サマー` は大都技研。一次資料で2008年7月下旬市場投入予定。
- `海人 / 海人G-30` はトリビー。旧業界史で2008-08-04発売資料があるため7月列へ先行登録しない。

## resetBehavior 遡及QA

- 次対象: **`ジャックポット・トロピカルバージョン2（2006-09）` 以降**。
- resetBehavior節が既にある機種は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準270件地点。`花浪漫N-30（2008-07月精度）` まで追加済み。**
2. 次は2008年7月残未処理の `スーパールーレット / スーパールーレット30` を最優先で再監査する。
3. 2008-06-05業界記事の「洞爺湖サミット明けの7月納品予定」を起点に、25Φ/30Φの型式・性能差・具体納品/導入日を確認し、同一性能なら派生整理、別スペックなら別レコード化する。
4. `スーパールーレット` の具体日が取れない場合は月精度で漏れ防止登録を検討し、その後、一次資料で7月下旬市場投入予定が取れている `爺サマー` へ進む。
5. `花浪漫R-30` はN-30と別スペックで7月下旬導入資料あり。スーパールーレット/爺サマーとの時系列を確認し、最古未処理順に差し込む。
6. `海人 / 海人G-30` は2008-08-04発売資料があるため7月列には混入させない。
7. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
8. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
