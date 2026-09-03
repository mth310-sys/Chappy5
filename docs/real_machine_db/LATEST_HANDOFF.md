# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **453**
- latestMachineAdded: **ハイハイ-30**（2010年2月・月精度の遡及漏れ修復）
- latestRecord: `docs/real_machine_db/machines/2010-02_haihai-30.md`
- chronologicalFrontier: **2010-02-21**（ゼットゴールドEX地点を維持）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 452件地点から2/22へ進む前の2010年2月境界監査を継続。LATEST_HANDOFFで月内候補として残っていた「ハイハイ-30」は、パイオニア公式/P-WORLDで2010年2月機と確定し、main未登録だったため453件目として遡及追加した。具体導入日は十分な再探索後も確定できず、日付を推測せず月精度で保存。時系列前線は2010-02-21のまま維持する。

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、前線レコード `2010-02-21_z-gold-ex.md` を再読。
- `INDEX.md` は旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコードを優先。
- repo検索で「ハイハイ30」既存レコードなしを確認。
- 2010年2月月内候補 `ビューティフルジョー / バイオレントゾーン / 列強伝 / ハイハイ-30 / 真田純勇士 / 哲也 新宿VS上野DX` を再監査し、今回はハイハイ-30を月精度で確定・追加。

## 453 — ハイハイ-30 要約

- メーカー: **パイオニア**
- 型式: **ハイシオ-30**
- 検定番号: **9S1088**
- 導入: **2010年2月**（パイオニア公式「2010年2月発売」、P-WORLD「導入開始 2010年02月」）
- 世代: **5号機**
- タイプ: **ノーマル / 完全告知 / 30Φ / 技術介入**
- BIG: **1/306 / 1/295 / 1/282 / 1/266 / 1/252 / 1/239**
- REG: **1/407 / 1/392 / 1/374 / 1/354 / 1/336 / 1/319**
- 合算: **1/174 / 1/168 / 1/161 / 1/152 / 1/144 / 1/136**
- 機械割: **96 / 98 / 100 / 102 / 105 / 108%**（P-WORLD・5号機クロニクル一致）
- BIG: **約312枚**
- REG: **約116枚 / MAX116枚**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART/AT純増: **NOT_APPLICABLE**

## resetBehavior v0.7 — ハイハイ-30

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。本機固有の初期出目/リール/LED/ハイビスカス挙動を確定できず。
- **据え置き**: `NOT_APPLICABLE_NO_CEILING_OR_LONG_TERM_MODE_CONFIRMED`。物理的朝一状態は未確認。
- **電源OFF→ON**: 天井/長期モード進捗は非該当。初期出目/ランプ等の物理状態は未確認。
- **gameCounterReset / ceilingAfterReset**: 通常天井・短縮天井とも `NONE_CONFIRMED_AFTER_RESEARCH` / 非該当扱い。パチマガスロマガは「攻め時・ヤメ時→特にナシ」。
- **modeAfterReset**: `NOT_APPLICABLE_NO_LONG_TERM_MODE_SYSTEM_CONFIRMED`。
- **stateAfterReset**: `NOT_APPLICABLE_NO_PERSISTENT_AT_ART_CZ_STATE_CONFIRMED`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/ハイビスカス/リールサンドLED等を再探索したが直接根拠なし。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- パイオニア公式 2010年製品一覧: `https://www.slot-pioneer.co.jp/products/2010.html`
- P-WORLD ハイハイ30: `https://www.p-world.co.jp/machine/database/5817`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/93/a.php`
- パチマガスロマガ 機種メニュー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/93/pioneer_slot_93.php`
- 5号機クロニクル パイオニア: `https://5goki.com/pioneer`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は時系列漏れ修復を優先し、既存性能値をやり直していない。

## 次回再開地点

1. **recordCount 453 / chronologicalFrontier 2010-02-21**。最新追加は月精度の2010年2月「ハイハイ-30」だが、前線はゼットゴールドEXの2010-02-21を維持。
2. **2/22へ進む前に残る2010年2月月内候補を再監査**。優先: `ビューティフルジョー`、`バイオレントゾーン`、`列強伝`、`真田純勇士`、`哲也 新宿VS上野DX`。具体日が2/21以前へ落ちる機種があれば先に遡及追加する。
3. `ハイハイ-30` は登録済み。具体日が後日高信頼で判明した場合のみreleaseDateを更新する。
4. `列強伝` は型式 **サンゴクレッキョウデン**、2010年2月リリース、RT100G・約0.8枚/G、BIG約380枚/REG約90枚まで候補資料で確認済みだが、具体導入日は未確定のため順序を推測しない。
5. `真田純勇士` は一部後年資料で2010年2月表記がある一方、小冊子系資料では2010年3月表記もあるため、月自体を競合監査してから追加判断する。
6. 2/21以前の追加漏れを閉じたら **2010-02-21同日群を最終監査**し、その後、具体日確認済みの **みどりのマキバオー 2010-02-22**へ進む。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
