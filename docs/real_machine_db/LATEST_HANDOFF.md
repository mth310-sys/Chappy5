# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは363件地点 `もっと楽シーサー30Φ全国バージョン`。
- **今回 364「もっと楽シーサー30Φ沖縄バージョン」を追加。既存364件の再追加禁止。**

## 364. もっと楽シーサー30Φ沖縄バージョン

record:
- `docs/real_machine_db/machines/2009-05-07_motto-tanoshisa-30-okinawa.md`

要点:
- manufacturer: SANKYO
- formalModelName: `もっと楽シーサー30S`
- inspectionNumber: `8S1160`
- releaseDate: **2009-05-07**。SANKYO公式/P-WORLDは2009年5月。当時更新資料 `パチスロ業界初まとめ ～更新情報7` が `もっと楽シーサー/-30/-30(沖縄Ver)` 3仕様を2009/5/7発売と明記したため具体日を確定。グリーンべるとの5/6納品記載は25Φ説明直後で30Φ個別適用が明確でないため5/6へ遡らせない。
- generation: 5号機
- systemType: **ノーマル / 完全告知 / 30Φ / ボーナス主体**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割: **94.4 / 96.5 / 98.4 / 102.3 / 105.7 / 109.7%**。P-WORLD/pacnk一致。
- BIG: **1/309 / 1/299 / 1/289 / 1/274 / 1/258 / 1/234**。
- CB: **1/496 / 1/464 / 1/436 / 1/404 / 1/381 / 1/356**。
- 合算: **1/190.4 / 1/181.8 / 1/173.8 / 1/163.3 / 1/153.8 / 1/141.2**。SANKYO公式丸め値と整合。
- BIG約312枚、CB約130枚。
- **25Φと異なり777G天井RTは非搭載**。P-WORLD/当時更新資料で再確認。
- 50枚ベースは機種名・型式30S・検定8S1160・沖縄Verと「50枚/1000円/ベース/コイン持ち/小役」を組み替えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後年5号機クロニクルには沖縄版としてBIG 1/292.6→1/240.9、REG 1/431.2→1/336.1、合算1/174.3→1/140.4、BIG約300枚/REG約104枚、Aタイプ(RT機能付き)という別系列が掲載される。SANKYO公式、P-WORLD、pacnk、グリーンべるとと大きく競合するため平均せず `CONFLICT` としてレコード内に保持し、主値には採用しない。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。設定変更時のリール初期挙動・ランプ等の沖縄30Φ固有処理を直接確認できず。
- carryOverBehavior: `NOT_APPLICABLE_TO_GAME_COUNT_OR_PUBLISHED_MODE`。ゲーム数天井・ゲーム数管理・公開通常モードは確認されない。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の固有挙動を確定できず。
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING`。
- modeAfterReset: `NOT_APPLICABLE_TO_PUBLISHED_MODE_SYSTEM`。
- stateAfterReset: `NOT_APPLICABLE_TO_PUBLISHED_GAMEPLAY_STATE`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン、初期出目、告知ランプ等の設定変更判別は表記揺れ・型式30S・検定8S1160・メーカー名を組み替えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: normalCeiling=`NOT_APPLICABLE`、resetSpecificCeiling=`NOT_APPLICABLE`、朝一当選率/恩恵率=`NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- SANKYO / 「もっと楽シーサー」の機種詳細 — OFFICIAL
  - https://www.sankyo-fever.jp/collection/536/
- グリーンべると / 全てがパワーアップ！『もっと楽シーサー』 — INDUSTRY
  - https://web-greenbelt.jp/00003039/
- P-WORLD / もっと楽シーサー30Φ沖縄バージョン — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5501
- pacnk / もっと楽シーサー30Φ沖縄バージョン — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_mottotanocsaokinawav.html
- パチマガスロマガ / もっと楽シーサー30 沖縄Ver — OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/18/sankyo_slot_18.php
- パチスロ業界初まとめ ～更新情報7 — OLD_CONTEMPORARY_DATABASE
  - https://slothistory.com/kousin_kako07.html
- 5号機クロニクル SANKYO一覧 — RETROSPECTIVE_SECONDARY_CONFLICT
  - https://5goki.com/sankyo

commit:
- 364 もっと楽シーサー30Φ沖縄バージョン: `6e39c042e4c0333b7d3a0b883e0c3111eb5b9b10`

## 2009年5月初頭 境界監査

- もっと楽シーサー3スペック（25Φ、30Φ全国、30Φ沖縄）は独立スペックとして収録完了。
- 3仕様とも当時更新資料で2009-05-07発売を確認。30Φ2仕様は天井RTなし、25Φのみ777G天井RT搭載。
- 次は2009-05-07前後の未処理機を境界監査する。
- `タイムリミット`（JPS）は2009年5月機で、当時更新資料には2009/5/7発売と読める記載がある。グリーンべるとでART約+1.5枚/G・最大約857G、P-WORLD/当時Wikiで設定別性能の先行確認が可能。**次回はまずタイムリミットの具体日を別資料でも照合し、既存未登録なら365候補として性能コア+resetBehaviorを収集する。**
- その後、2009年5月の `スターマンアイズ / スロットニュートラッド / スーパーアロハ / デュエルドラゴンキングダム / パチスロアタックNo.1 / レキオ2-30 / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` 等について具体導入日を時系列監査する。
- `天誅` はALL7 2009-05-01とK-Navi 2009-06-01/回顧2009-06が競合するため、推測で5月1日へ挿入せず境界で再監査する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準364件地点。既存364件の再追加禁止。**
2. **まず `タイムリミット`（JPS）の2009-05-07具体日を別系統で再照合し、既存未登録なら365件目候補として処理する。**
3. タイムリミットはART「バトルモード」約+1.5枚/G・最大約857G、JAC/REG系確率・機械割をP-WORLD/当時Wikiで先行確認済み。必ず設定変更/据え置き/電源OFF→ON/天井/高確・AT状態/朝一判別まで多段検索してから保存する。
4. その後2009年5月同日群・月内候補を具体日順に監査する。
5. 毎回GitHub最新mainで既存登録を確認し、未処理のみ追加する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`
- 358 さすがの猿飛: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`
- 359 エースをねらえ!: `405172802b73290cf1222ff6f8ea70489056971c`
- 360 プリティ戦記: `a834bd17236dc67a52086fa0c7a7f4941080972a`
- 361 国際サラリーマンとおるくん: `f8a9510d08507ee4c2ab86600a3997a92b6f4903`
- 362 もっと楽シーサー25Φ: `addc89840a0572f7b11c261ae832db3dabe2444b`
- 363 もっと楽シーサー30Φ全国バージョン: `2a46545e16bd7cdab4b46f1fdbfa2c9d7db8ee82`
- 364 もっと楽シーサー30Φ沖縄バージョン: `6e39c042e4c0333b7d3a0b883e0c3111eb5b9b10`
