# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **469**
- latestMachineAdded: **ペガサスW（ニューペガサスブラック）**（エマ / 2010-04-05）
- latestRecord: `docs/real_machine_db/machines/2010-04-05_pegasus-w.md`
- chronologicalFrontier: **2010-04-05**
- frontierLatestMachine: **ペガサスW（ニューペガサスブラック）**（エマ / 2010-04-05）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近レコードを再取得。
- `INDEX.md` は旧地点（19件）のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **468** / chronologicalFrontier **2010-03-23** / latestMachineAdded「続・お見事！サブちゃん」。
- 03-23同日群から03-24〜04-04境界を再監査。当時導入スケジュールでは3/29欄はパチンコ機のみで、次の明確なパチスロ導入群は4/5。
- K-Naviの2010年4月5日導入カレンダーを再確認したところ、従来handoffに候補化されていた「宇宙戦艦ヤマト / ハッピージャグラーV / スーパーマジカルセブン / 鮪伝説」に加え、エマ「ペガサスW」も同日掲載されていることを発見。
- repo内検索で「ペガサスW」は未登録だったため、漏れ防止を優先し469件目として追加。
- P-WORLDの表示機種名は「ニューペガサスブラック」、型式名は「ペガサスW」。K-Naviは「ペガサスW」表記のため同一機の名称差として併記した。

## 469 — ペガサスW（ニューペガサスブラック）要約

- メーカー: **エマ**
- 型式: **ペガサスW**
- 検定番号: **9S1471**
- 導入: **2010-04-05**（K-Navi導入カレンダー） / P-WORLDは2010年04月
- 世代/タイプ: **5号機 / ノーマル / 完全告知 / 技術介入**
- 機械割: **96 / 98 / 100 / 103 / 105 / 108%**
- BIG: **1/239.18 → 1/230.76**
- REG: **1/481.88 → 1/260.06**
- 合算: **1/159.84 → 1/122.27**
- 50枚ベース: **31.51 / 31.70 / 31.90 / 32.10 / 32.30 / 32.50G**
- BIG: **MAX311枚** / REG: **MAX111枚**
- P-WORLDが**天井RT非搭載**、ボーナスのみで出玉を増やす仕様と明記。

## resetBehavior v0.7 — ペガサスW

- **設定変更**: 通常ゲーム数天井・周期CZ・RT/ART/AT・ゲーム数管理モードを確認しないため、ホール経営/朝一価値に直結するリセット対象は `NO_GAMEPLAY_RESET_TARGET_CONFIRMED`。リール初期挙動等の物理挙動は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 引き継ぐべき天井カウンタ/ゲーム数管理モード/ART状態は `NOT_APPLICABLE`。物理表示挙動は未確認。
- **電源OFF→ON**: リール出目・告知ランプ等の本機固有挙動を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常天井/天井RTなし。`gameCounterReset = NOT_APPLICABLE`、`ceilingAfterReset = NOT_APPLICABLE`。
- **モード/状態**: 持越し対象となるゲーム数管理モード・CZ・AT/ART状態は確認なし。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の短縮天井・朝一高確・公開専用確率等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `ペガサスW / ニューペガサスブラック / 型式9S1471 / エマ` と設定変更・リセット・朝一・据え置き・電源・ガックン・初期出目・ランプ等を組み替えて再探索したが、本機固有高信頼資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- K-Navi 2010年4月新台導入カレンダー: `https://p-kn.com/calendar/201004/`
- P-WORLD「ニューペガサスブラック」: `https://www.p-world.co.jp/machine/database/5913`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/36/h.php`
- パチマガスロマガ 小役/1000円あたり: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/36/c.php`
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/36/ema_slot_36.php`
- 当時導入スケジュール整理: `https://ameblo.jp/pachimatome/entry-10470039494.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 新規前線収集を止めず、後続QAでスロ原人直後の最初の `resetBehavior` 欠損実ファイルをmachine tree/履歴から一意特定して再開する。

## 次回再開地点

1. **recordCount 469 / chronologicalFrontier 2010-04-05**。
2. **2010-04-05同日群を継続**。未処理候補として少なくとも **鮪伝説（大都技研） / スーパーマジカルセブン（トリビー） / パチスロ宇宙戦艦ヤマト（山佐） / ハッピージャグラーV（北電子）** がK-Naviおよび当時導入一覧に確認されている。repo重複を毎回確認し、未登録の最古候補から追加する。
3. 4/5同日群を閉じる前に、別系統の当時導入一覧・メーカー別一覧でも同日漏れを再監査する。
4. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4月境界で再確認し、既存登録有無とreleaseDate定義を混同しない。
5. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
