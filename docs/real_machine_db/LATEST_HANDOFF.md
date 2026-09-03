# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **473**
- latestMachineAdded: **ハッピージャグラーV**（北電子 / 2010-04-05）
- latestRecord: `docs/real_machine_db/machines/2010-04-05_happy-juggler-v.md`
- chronologicalFrontier: **2010-04-05**
- frontierLatestMachine: **ハッピージャグラーV**（北電子 / 2010-04-05）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近472「パチスロ『宇宙戦艦ヤマト』」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **472** / chronologicalFrontier **2010-04-05**。
- LATEST_HANDOFFで2010-04-05同日群の未処理確認済み候補だった **ハッピージャグラーV** をrepo重複確認後、473件目として追加。
- 北電子公式、グリーンべると、K-Navi、P-WORLD、旧パチマガスロマガ、ダイナム、後年解析整理資料を横断。性能コア、ベース、ガックン判別まで回収。
- K-Navi 2010年4月導入カレンダーの4/5パチスロ欄は **鮪伝説 / スーパーマジカルセブン / ペガサスW / パチスロ『宇宙戦艦ヤマト』 / ハッピージャグラーV** の5機種。これらは今回までに全て本線登録済みとなったため、2010-04-05同日群をK-Navi基準で閉じる。ただし別系統資料の遡及漏れ監査は継続する。

## 473 — ハッピージャグラーV 要約

- メーカー: **北電子**
- 型式: **ハッピージャグラーV8**
- 検定番号: **9S1076**
- 導入: **2010-04-05**（K-Navi。グリーンべるとは4/4納品開始予定、北電子公式は2010年4月全国設置）
- 世代/タイプ: **5号機 / ノーマル / 完全告知**
- BIG: **1/287.4 / 1/282.5 / 1/273.1 / 1/264.3 / 1/252.1 / 1/240.9**
- REG: **1/409.6 / 1/364.1 / 1/341.3 / 1/315.1 / 1/287.4 / 1/273.1**
- 合算: **1/168.9 → 1/128.0**
- 機械割: **CONFLICT**
  - 北電子公式/K-Navi/P-WORLD: **96.1 / 97.9 / 99.9 / 102.9 / 105.8 / 108.4%**
  - 後年解析整理値: **95.7 / 97.6 / 99.9 / 102.8 / 106.0 / 108.8%**
- 50枚ベース: **34.14 / 34.34 / 34.55 / 35.27 / 35.49 / 35.71G**（小役取得条件付きパチマガ値）
- BIG: **約312枚**、REG: **約104枚**
- 通常ゲーム数天井/周期CZ/ART/AT: **なし / NOT_APPLICABLE**
- coreStatus: **COMPLETE_CORE_RESET_DETECTION_CONFIRMED_PAYOUT_CONFLICT_POWER_CYCLE_PARTIAL**

## resetBehavior v0.7 — ハッピージャグラーV

- **設定変更**: 天井・周期・ゲーム数管理モードのリセット対象はなし。設定変更後、店側の1G回し等の対策がなければ朝一1G目のリールガックンによる変更推測が可能。
- **据え置き**: 天井/周期/モード進捗の引継ぎ対象なし。非ガックンでも店側対策があり得るため据え置き確定にはしない。
- **電源OFF→ON**: 本機固有の初回リール挙動・内部状態処理は十分な直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: `NOT_APPLICABLE`。
- **モード/状態**: 朝一専用モードや設定変更時モード振分は確認なし。実機完全再現用の内部フラグ処理は推測しない。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 短縮天井・朝一高確・当選率優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックンを確認。ただし店側対策で無効化可能。初期出目/ランプ等は `UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorQA: **CORE_RESET_NOT_APPLICABLE_GAKKUN_CONFIRMED_POWER_CYCLE_PARTIAL**

## 主要出典（取得日 2026-09-03）

- 北電子公式: `https://www.kitadenshi.co.jp/slot/happyjugglerv/`
- 北電子公式アプリ: `https://www.kitadenshi.co.jp/fun/apps/happy-jugg/`
- グリーンべると: `https://news.p-world.co.jp/articles/3821/greenbelt`
- K-Navi本機: `https://p-kn.com/slot/1164/`
- K-Navi機械割: `https://p-kn.com/slot/1164/17299/`
- K-Navi 2010年4月導入カレンダー: `https://p-kn.com/calendar/201004/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5865`
- パチマガスロマガ小役/1000円G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/72/c.php`
- すろぱちくえすと: `https://www.slopachi-quest.com/article/happy-juggler-v/`
- ダイナム: `https://www.dynam.jp/amusement/machines/s0005210001.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 前線収集を優先し、推測で遡及QA済み範囲を進めない。
- 再開時はmachine tree/履歴から **スロ原人直後の最初の `resetBehavior` 欠損実ファイル**を一意特定して補完する。

## 次回再開地点

1. **recordCount 473 / chronologicalFrontier 2010-04-05**。
2. K-Navi基準の2010-04-05同日群5機種は登録完了。次は **2010-04-06以降の最古未処理パチスロ** をK-Navi導入カレンダー、メーカー別一覧、当時業界記事、旧解析DBで突合して追加する。
3. 4/6〜4/18の境界を先に監査し、具体日が確認できる最古未処理機から時系列継続する。
4. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4/19到達時に既存登録有無とreleaseDate定義を再確認し、同一機の重複追加はしない。
5. 遡及QAは **スロ原人直後の最初のresetBehavior欠損実ファイル**を特定して再開。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
