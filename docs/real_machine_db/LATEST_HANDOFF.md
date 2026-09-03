# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **457**
- latestMachineAdded: **哲也 新宿VS上野DX**（2010年2月・月精度の遡及漏れ修復）
- latestRecord: `docs/real_machine_db/machines/2010-02_tetsuya-shinjuku-vs-ueno-dx.md`
- chronologicalFrontier: **2010-02-21**（ゼットゴールドEX地点を維持）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直近コミット、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコード＋直近コミットを優先。
- 開始時点の最新mainは **456件 / 最新「バイオレントゾーン」 / chronologicalFrontier 2010-02-21**。
- 2/22へ進む前の2010年2月月内候補を再監査し、`哲也 新宿VS上野DX` がmain未登録であることをrepo検索で確認。
- 5号機クロニクル、P-WORLD月間新台スケジュール、パチマガスロマガ、A-SLOT、K-Navi、後年回顧資料を横断。2010年2月機であることと主要性能コアを確認したため457件目として追加。
- 全国ホール導入の具体日は、機種名表記揺れ・型式名・メーカー名と `導入日 / 稼働開始 / 納品 / 2月14日 / 2月21日 / 2月22日 / 2月28日` を組み替えても高信頼に固定できず、月精度で保存。chronologicalFrontierは2010-02-21を維持。
- `1000G`という公開値は特殊リプレイ3成立時のART継続ゲーム数であり、通常時天井ではないことを明記し、天井値への誤転記を防止。

## 457 — 哲也 新宿VS上野DX 要約

- メーカー: **アリストクラートテクノロジーズ**
- 型式: **哲也ＤＸ２**
- 導入: **2010年2月**（具体導入日 `UNVERIFIED_AFTER_RESEARCH`）
- 世代: **5号機**
- タイプ: **A+ART / CZ「天運タイム」+ART「玄人タイム」**
- BIG: **1/383.3 → 1/276.2**
- REG: **1/618.3 → 1/431.2**
- ボーナス合算: **1/236.6 → 1/168.5**
- 機械割: **97.3 / 98.8 / 100.9 / 104.2 / 107.0 / 112.1%**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **約212枚**（規定払い出し310枚）
- REG: **約55枚**（規定払い出し59枚）
- ART「玄人タイム」: **約+1.4枚/G**
- 基本ART: **30G**
- 特殊リプレイ: **30G / 100G / 1000G ART**
- 通常ゲーム数型の固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**

## resetBehavior v0.7 — 哲也 新宿VS上野DX

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。CZ/ARTストック・内部状態等の設定変更時処理を本機固有資料で確定できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。CZ/ART状態・ストック等の引継ぎを直接確定できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。
- **gameCounterReset**: `NOT_APPLICABLE_FOR_CONFIRMED_FIXED_GAME_CEILING / OTHER_INTERNAL_COUNTERS_UNVERIFIED`。通常ゲーム数型固定天井は確認されず。
- **ceilingAfterReset**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **modeAfterReset / stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。一般論からARTストック消滅等を推測しない。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、液晶、ランプ、朝一挙動まで検索語を広げたが本機固有の高信頼根拠なし。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- 5号機クロニクル アリストクラート: `https://5goki.com/aristocrat`
- P-WORLD 2010年2月新台スケジュール: `https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2010-02`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/40/a.php`
- A-SLOT 哲也 新宿vs上野DX: `https://www.a-slot.com/SHOP/aristocrat10.html`
- パチマガスロマガ 機種索引: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/40/b.php`
- K-Navi 哲也 新宿VS上野DX: `https://p-kn.com/slot/1154/direct/`
- パチセブン アリストクラート回顧: `https://pachiseven.jp/articles/detail/11837`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は2010年2月の時系列漏れ修復を優先。既存 `COMPLETE_CORE` の性能完了判定は変更していない。
- 次の遡及QA対象は、スロ原人直後の実ファイル順を確認し、最初の `resetBehavior` 欠損機を一意特定してから補完する。推測で別機種へ付与しない。

## 次回再開地点

1. **recordCount 457 / chronologicalFrontier 2010-02-21**。最新追加は月精度の2010年2月「哲也 新宿VS上野DX」。
2. **2/22へ進む前に残る最優先候補 `真田純勇士` を監査**。P-WORLD月間スケジュールと5号機クロニクルでは2010年2月を確認できる一方、既往調査に2010年3月表記もあるため、月自体のCONFLICT有無と具体導入日を再探索してから追加判断する。
3. `真田純勇士` を閉じた後、2010年2月月内一覧とmain実レコードを照合し、2/21以前に具体日が確定する未登録機が残っていないか最終監査する。
4. **2010-02-21同日群を最終監査**し、未処理がなければ具体日確認済みの **みどりのマキバオー（2010-02-22）**へ前進する。
5. 月精度で追加した `バイオレントゾーン` と `哲也 新宿VS上野DX` は、後続QAで具体導入日の新資料が見つかった場合のみ日精度へ昇格する。発表日・記事投稿日は代用しない。
6. 遡及QAはスロ原人直後の実ファイル順から最初のresetBehavior欠損機を特定し、検索語・資料系統を変えて補完する。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近コミットを再取得し、repo検索で重複・他リレー競合を防ぐ。
