# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **456**
- latestMachineAdded: **バイオレントゾーン**（2010年2月・月精度の遡及漏れ修復）
- latestRecord: `docs/real_machine_db/machines/2010-02_violent-zone.md`
- chronologicalFrontier: **2010-02-21**（ゼットゴールドEX地点を維持）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直近コミット、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコード＋直近コミットを優先。
- 開始時点の最新mainは **455件 / 最新「ビューティフルジョー」 / chronologicalFrontier 2010-02-21**。
- 2/22へ進む前の2010年2月月内候補を再監査し、`バイオレントゾーン` がmain未登録であることをrepo検索で確認。
- P-WORLD、当時グリーンべると、パチマガスロマガ、5号機クロニクルを横断し、2010年2月導入・主要性能コアを複数系統で確認したため456件目として追加。
- 全国ホール導入の具体日は十分な再探索後も高信頼に固定できないため月精度で保存し、時系列前線は2010-02-21のまま維持。

## 456 — バイオレントゾーン 要約

- メーカー: **JPS**
- 型式: **バイオレットゾーンX**
- 検定番号: **9S1043**
- 導入: **2010年2月**（具体導入日 `UNVERIFIED_AFTER_RESEARCH`）
- 世代: **5号機**
- タイプ: **ボーナス+ART**
- BIG: **全設定 1/8192**
- BATTLE CHANCE: **全設定 1/264.3**
- ボーナス合算: **全設定 1/256**
- 機械割: **98.8 / 99.6 / 101.4 / 103.4 / 106.0 / 107.7%**（P-WORLD / 5号機クロニクル一致）
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **約312枚**
- BC: **約18枚**
- ART「バイオレントゾーン」: **約+2.0枚/G**
- 基本ループ部: **10G / 約80%ループ**
- BIG後: **最低40GのART**
- BC成功後: **20GのART**
- ダブルアップチャレンジ: **最大320G**
- 通常ゲーム数型の固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**

## resetBehavior v0.7 — バイオレントゾーン

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。CZ/ART内部状態、ART残G、ミッション状態、内部高確の扱いを本機固有資料で確定できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。
- **gameCounterReset**: `NOT_APPLICABLE_FOR_FIXED_GAME_CEILING / OTHER_INTERNAL_COUNTERS_UNVERIFIED`。通常G数型固定天井は確認されず。
- **ceilingAfterReset**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **modeAfterReset / stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。ART残G消滅等を推測しない。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、液晶、朝一挙動まで検索語を広げたが本機固有の高信頼根拠なし。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- P-WORLD バイオレントゾーン: `https://www.p-world.co.jp/machine/database/5810`
- グリーンべると / P-WORLD業界ニュース 2010-01-26: `https://news.p-world.co.jp/articles/3786/greenbelt`
- パチマガスロマガ バイオレントゾーン基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/21/a.php`
- 5号機クロニクル JPS: `https://5goki.com/jps`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は2010年2月の時系列漏れ修復を優先。既存 `COMPLETE_CORE` の性能完了判定は変更していない。
- 次の遡及QA対象は、スロ原人直後の実ファイル順を確認し、最初の `resetBehavior` 欠損機を一意特定してから補完する。推測で別機種へ付与しない。

## 次回再開地点

1. **recordCount 456 / chronologicalFrontier 2010-02-21**。最新追加は月精度の2010年2月「バイオレントゾーン」。
2. **2/22へ進む前に残る2010年2月月内候補を再監査**。優先: `真田純勇士`、`哲也 新宿VS上野DX`。
3. `真田純勇士` は2010年2月表記と2010年3月表記が混在するため、月自体をCONFLICT監査してから追加判断する。
4. `哲也 新宿VS上野DX` は2010年2月機であることを複数資料で確認しつつ、具体導入日と2/21以前か以後かを再探索する。発表日/記事投稿日を導入日と誤認しない。
5. 2/21以前の追加漏れを閉じたら **2010-02-21同日群を最終監査**し、その後、具体日確認済みの **みどりのマキバオー 2010-02-22**へ進む。
6. 遡及QAはスロ原人直後の実ファイル順から最初のresetBehavior欠損機を特定し、検索語・資料系統を変えて補完する。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近コミットを再取得し、repo検索で重複・他リレー競合を防ぐ。
