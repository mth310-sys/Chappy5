# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **459**
- latestMachineAdded: **みどりのマキバオー**（2010-02-22ホール導入開始 / 2010-02-21納品予定記事を併記）
- latestRecord: `docs/real_machine_db/machines/2010-02-22_midori-no-makibao.md`
- chronologicalFrontier: **2010-02-22**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2010-02_sanada-jun-yuushi.md` を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコードを優先。
- 開始時点は **458件 / latestMachineAdded 真田純勇士 / chronologicalFrontier 2010-02-21**。
- handoff指定の本線候補 `みどりのマキバオー` をrepo検索し未登録確認後、459件目として追加。
- 当時グリーンべるとは **2010-02-21から納品予定**、K-Naviは **2010-02-22ホール導入開始**。納品開始/ホール導入開始の定義差として両方保持し、本DBreleaseDateは2010-02-22を採用。
- 性能コアは設定別機械割、BIG/REG、ART初当り、50枚ベース、ART純増、基本獲得枚数、スイカ連続非ART当選救済まで回収。
- resetBehaviorは **設定変更でスイカ救済カウンタがリセット**される本機固有情報を確保。K-Naviに設定変更時モード移行率の専用解析項目が存在することまでは確認したが、具体数値本文は回収できずUNVERIFIED。

## 459 — みどりのマキバオー 要約

- メーカー: **平和**
- 型式名: **みどりのマキバオー**
- 検定番号: **9S1072**
- 導入: **2010-02-22**（K-Naviホール導入開始。グリーンべると: 2010-02-21納品予定）
- 世代: **5号機**
- タイプ: **ボーナス + 押し順ART**
- 機械割: **96.9 / 98.8 / 102.5 / 106.1 / 109.6 / 110.4%**
- BIG合算: **1/489.1 → 1/461.5**
- REG: **1/496.5 → 1/439.8**
- ART初当り: **1/485 → 1/379**
- 50枚ベース: **31.69G（全設定共通）**
- BIG: **約200枚**
- REG: **約60枚**
- ART「マスタングラッシュ」: **30G / 約+1.5枚/G**
- 一般的ゲーム数天井: **なし**
- 救済: 通常時スイカ6回連続ART非当選後、**7回目以降**は猛特訓モード移行時ART期待度が大幅上昇。P-WORLDは7回以上時約95%、7回未満時約30%。

## resetBehavior v0.7 — みどりのマキバオー

- **設定変更**: `PARTIAL_CONFIRMED`。スイカ連続非ART当選による救済カウンタは**設定変更でリセット**。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。設定変更時リセットを根拠に据え置き継続を推測しない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断のみを設定変更と区別する直接資料は確定できず。
- **gameCounterReset**: ゲーム数天井は非該当。スイカ救済カウンタは設定変更でRESET。
- **ceilingAfterReset**: ゲーム数短縮天井なし。スイカ救済進捗は消去。
- **modeAfterReset**: K-Naviに設定変更時モード移行率/設定変更後モード移行の専用項目が存在。ただし具体数値は `UNVERIFIED_AFTER_RESEARCH`。
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: 専用モード再抽選の存在は示されるが有利な具体値未回収。`NONE_CONFIRMED_AS_NET_BENEFIT`。
- **朝一不利**: 前日スイカ救済進捗が設定変更で失われる。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、リール、液晶、ランプ、出目変化まで再探索済み。
- **公開朝一数値**: スイカ7回以上時の猛特訓経由ART約95%、7回未満約30%は救済性能として保存。設定変更専用モード振分/朝一当選率は未回収。

## 主要出典（取得日 2026-09-03）

- グリーンべると: `https://web-greenbelt.jp/00002501/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5830`
- K-Navi: `https://p-kn.com/slot/1145/`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/37/a.php`
- パチマガスロマガ 小役確率/1000円ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/37/c.php`
- パチマガスロマガ 機種索引: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/37/heiwa_slot_37.php`
- pacnk: `https://pacnk.com/slot/tools/sh_makibao.html`
- 5号機クロニクル: `https://5goki.com/heiwa-olympia`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は2010年2月本線前進を優先。
- 次の遡及QA対象は、スロ原人直後の実ファイル順を確認し、最初の `resetBehavior` 欠損機を一意特定してから補完する。

## 次回再開地点

1. **recordCount 459 / chronologicalFrontier 2010-02-22**。最新追加は「みどりのマキバオー」。
2. **2010-02-22同日群を最終監査**し、同日またはそれ以前に未登録機が残っていないかmain実レコード/P-WORLD月次/当時業界記事で確認する。
3. 同日群を閉じたら **2010-02-23〜月末**を具体導入日順に監査し、最古の未処理パチスロから追加する。
4. 月精度追加済み機（真田純勇士、バイオレントゾーン、哲也 新宿VS上野DX等）は、新たに具体日を確定できる高信頼資料が見つかった場合のみ日精度へ昇格する。
5. `みどりのマキバオー` の設定変更時モード移行率はK-Naviに専用解析項目の存在を確認済み。後続QAで本文/アーカイブを回収できた場合のみnumericResetDataへ追記する。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
