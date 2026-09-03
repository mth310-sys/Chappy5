# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **455**
- latestMachineAdded: **ビューティフルジョー**（2010年2月・月精度の遡及漏れ修復）
- latestRecord: `docs/real_machine_db/machines/2010-02_viewtiful-joe.md`
- chronologicalFrontier: **2010-02-21**（ゼットゴールドEX地点を維持）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 454件地点から2/22へ進む前の2010年2月境界監査を継続。LATEST_HANDOFF優先候補「ビューティフルジョー」は5号機クロニクルで2010/2導入、P-WORLD・当時パチマガで性能コアを確認でき、main未登録だったため455件目として遡及追加。全国ホール導入の具体日は十分な再探索後も固定できないため月精度で保存し、時系列前線は2010-02-21のまま維持する。

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前進捗を再読。
- `INDEX.md` は旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコードを優先。
- 開始時点でmainは前回報告の450件より先行し、**454件 / 最新「列強伝」**まで進んでいたため、その地点を正本として継続した。
- repo検索で「ビューティフルジョー」既存レコードなしを確認。
- 2/22へ進む前の残候補 `ビューティフルジョー / バイオレントゾーン / 真田純勇士 / 哲也 新宿VS上野DX` を再監査し、今回はビューティフルジョーを2010年2月機として確定・追加。
- 円谷フィールズHDの企業資料でもエンターライズの2010/3期タイトルに「ビューティフルジョー」を確認し、5号機クロニクルの2010/2導入と時期整合。

## 455 — ビューティフルジョー 要約

- メーカー: **エンターライズ**
- 型式 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **2010年2月**（具体導入日 `UNVERIFIED_AFTER_RESEARCH`）
- 世代: **5号機**
- タイプ: **ボーナス+A+ART**
- 赤7BIG: **全設定 1/720.2**
- 青7BIG: **1/624.1 / 1/618.3 / 1/612.5 / 1/606.8 / 1/601.2 / 1/595.8**
- BIG合算: **1/334.3 / 1/332.6 / 1/330.9 / 1/329.3 / CONFLICT / 1/326.0**
  - 設定5: P-WORLD **1/327.6** / パチマガスロマガ **1/357.6**。個別確率との整合性から前者が自然だが、原資料値は上書きせずCONFLICT保持。
- 機械割: **96.7 / 98.6 / 99.8 / 103.3 / 107.4 / 112.9%**（P-WORLD / パチマガ / 5号機クロニクル一致）
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。パチマガ本機専用ページ自体が1000円あたりG数を「現在調査中」としている。
- BIG: **約190枚**（270枚超払い出し終了）
- ART「ブルーモード / ビューティフルモード」: **30G/セット / 約+1.3枚/G**
- 通常天井: **BIG間1200G**。到達後は青1枚役以外のART抽選役でART当選、BIGまで繰り返し当選可能。
- 青1枚役入賞によるART突入ペナルティ（BIG当選または1000G消化まで）があるが、通常ゲーム性のペナルティとしてresetBehaviorとは分離。

## resetBehavior v0.7 — ビューティフルジョー

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。パチマガ本機メニューに「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが、取得可能本文からBIG間1200G天井進捗、通常モード、ART潜伏/状態の具体処理を回収できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。天井進捗・通常モード・ART状態の引継ぎを本機固有資料で直接確定できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。天井カウンタ、モード、ART/潜伏状態、初期出目の保持/初期化を直接確定できず。
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH_FOR_BIG_INTERVAL_1200G_CEILING`。
- **ceilingAfterReset**: `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更専用の短縮天井/朝一専用到達G数なし。
- **modeAfterReset / stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。天井進捗消失などを推測しない。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、液晶、天井G数まで再探索したが本機固有の高信頼根拠なし。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- P-WORLD ビューティフルジョー: `https://www.p-world.co.jp/machine/database/5794`
- パチマガスロマガ ボーナス抽選確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/03/h.php`
- パチマガスロマガ 小役確率/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/03/c.php`
- パチマガスロマガ 機種メニュー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/03/enterrise_slot_03.php`
- 5号機クロニクル エンターライズ: `https://5goki.com/enterrise`
- 円谷フィールズHD パチスロ タイトル別販売台数推移: `https://www.tsuburaya-fields.co.jp/ir/j/files/press/2025/press_20250514c.pdf`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は時系列漏れ修復を優先し、既存性能値をやり直していない。

## 次回再開地点

1. **recordCount 455 / chronologicalFrontier 2010-02-21**。最新追加は月精度の2010年2月「ビューティフルジョー」だが、前線はゼットゴールドEXの2010-02-21を維持。
2. **2/22へ進む前に残る2010年2月月内候補を再監査**。優先: `バイオレントゾーン`、`真田純勇士`、`哲也 新宿VS上野DX`。具体日が2/21以前へ落ちる機種があれば先に遡及追加する。
3. `ビューティフルジョー` は登録済み。具体導入日、型式/検定番号、BIG間1200G天井の設定変更/据え置き/電源OFF→ON処理は新たな高信頼資料が見つかった場合のみ補完する。
4. `真田純勇士` は2010年2月表記と2010年3月表記が混在するため、月自体をCONFLICT監査してから追加判断する。
5. `バイオレントゾーン`、`哲也 新宿VS上野DX` は具体導入日と2010年2月内での順序を再探索。発表日/記事投稿日を導入日と誤認しない。
6. 2/21以前の追加漏れを閉じたら **2010-02-21同日群を最終監査**し、その後、具体日確認済みの **みどりのマキバオー 2010-02-22**へ進む。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
