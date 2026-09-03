# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **439**
- latestMachineAdded: **パチスロ 機動戦艦ナデシコ**
- latestRecord: `docs/real_machine_db/machines/2010-01-11_kidou-senkan-nadesico.md`
- chronologicalFrontier: **2010-01-11**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新438 `2010-01-05_magical-halloween2.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは438件 / chronologicalFrontier 2010-01-05（マジカルハロウィン2の導入日は1/5 vs 1/12 CONFLICT）。
- HANDOFF指定の次候補 `パチスロ 機動戦艦ナデシコ` をrepo検索し、想定パスの実ファイル不存在まで確認して未登録を確定。
- HAZUSEの具体日2010-01-11、SANKYO公式の2010年1月（月精度）を照合して439件目として追加。

## 439 — パチスロ 機動戦艦ナデシコ 要約

- メーカー: **SANKYO**
- 型式: **機動戦艦ナデシコ**
- 検定番号: **9S1035**
- 導入日: **2010-01-11**（HAZUSE具体日 / SANKYO公式2010.01）
- 世代: **5号機**
- システム: **ノーマル / ボーナス+RT / 天井RT**
- BIG合算: **約1/374 → 約1/291**
- REG: **約1/744 → 約1/560**
- ボーナス合算: **約1/249 → 約1/191**
- 機械割: **97.8 / 99.7 / 102.9 / 105.8 / 109.1 / 113.0%**
- SUPER BIG: **約448枚（赤/青） / 約402枚（黄）**
- NORMAL BIG: **約259枚**
- REG: **約116枚**
- RT「ゲキガンモード」: **約+0.3枚/G、次回ボーナスまで**
- RT「超ゲキガンモード」: **約+0.6枚/G、次回ボーナスまで**
- 通常天井状態: **BIG後1000G / REG後800Gで特殊リプレイ確率大幅アップ**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**

## resetBehavior v0.7

- **設定変更**: `GAME_COUNTER_RETAIN_CONFIRMED`。slot-naviとpacnkで、設定変更後もゲーム数を引き継ぐ旨を別系統確認。
- **据え置き**: `CEILING_GAME_COUNT_RETAIN`。前日ハマリを利用した宵越し天井狙いが可能と旧解析に明記。全内部状態の保持までは拡張しない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断時の天井ゲーム数・RT状態等は本機固有本文を確定できず。
- **gameCounterReset**: `RETAIN_ON_SETTING_CHANGE`。BIG後1000G / REG後800Gの天井ゲーム数を設定変更後も引継ぎ。
- **ceilingAfterReset**: 設定変更専用短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。通常天井進捗をそのまま利用可能。
- **mode/state**: ゲーム数解除型モードは非該当。RT/天井状態等の設定変更処理はゲーム数引継ぎ以外 `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: 前日ハマリが設定変更されても残るため、宵越し天井狙い価値が残る。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、ステージ、ランプ等を含め再探索したが本機固有の直接資料なし。
- **公開朝一数値**: BIG後1000G / REG後800Gという通常天井値と、その設定変更後引継ぎを確認。専用モード振分・朝一当選率・恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 重要な資料競合

- 5号機クロニクルの現行SANKYO一覧には本機を「ボーナス非搭載ART特化 / ナデシコラッシュ約+1.4枚/G」とする記述がある。
- SANKYO公式、P-WORLD、HAZUSE、pacnkはいずれも本機をBIG/REG搭載＋2種RTとしており根本的に矛盾するため、5号機クロニクルの当該記述は **REJECTED_SOURCE_CONFLICT（別機種情報混入疑い）** とし、性能値へ混ぜない。
- BIG設定4はSANKYO公式丸め1/330、pacnk精密値1/331.00。系列全体は整合しているため双方を表記精度差として保持し、平均しない。

## 主要出典（取得日 2026-09-03）

- SANKYO公式アーカイブ: `https://www.sankyo-fever.jp/collection/534/`
- HAZUSE: `https://hazuse.com/machine/pachislot/9S1035/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5771`
- pacnk: `https://pacnk.com/slot/tools/sh_nadesiko.html`
- slot-navi: `https://slot-navi.com/10/nadesico/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/20/sankyo_slot_20.php`
- 5号機クロニクルSANKYO一覧: `https://5goki.com/sankyo`（当該機記述はREJECTED_SOURCE_CONFLICT）

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、次回QAでスロ原人直後の最初の `resetBehavior` 欠損実ファイルを安全に一意特定して補完する。

## 次回再開地点

1. **recordCount 439 / chronologicalFrontier 2010-01-11**。
2. 次の具体日候補は **夢幻の如く（IGTジャパン）**。K-Navi・パチビーで **2010-01-12** 導入を確認済み。追加前にrepo既存検索＋実ファイル確認を行い、未登録なら440候補として性能コア＋resetBehavior v0.7を収集する。
3. 2010年1月群は日付順に監査を継続する。`パチスロあしたのジョー`はグリーンべるとで2010-01-25ホールデビューを確認済みなので1/12群より後ろに配置する。
4. `ファイヤービーク`、`元祖!大江戸桜吹雪`、`島唄RXH-30`、`パチスロエイム`、`シオサー30`等は具体日を別資料で確定してから配置する。
5. `ニュートリプルクラウン30`はK-Naviが2009-11-24導入を示すため、P-WORLD月次掲載だけで2010年1月機として再追加しない。既存登録有無と導入日定義を監査する。
6. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
7. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。
