# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **474**
- latestMachineAdded: **神人 八犬伝**（コルモ / 主値2010-04-12、日付CONFLICTあり）
- latestRecord: `docs/real_machine_db/machines/2010-04-12_shinhakkenden.md`
- chronologicalFrontier: **2010-04-12**
- frontierLatestMachine: **神人 八犬伝**（コルモ / 2010-04-12主値）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近473「ハッピージャグラーV」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **473** / chronologicalFrontier **2010-04-05**。
- K-Navi 2010年4月全国導入カレンダーで4/5群の次は4/12の **神人 八犬伝 / 皆伝丸**。4/6〜4/11には同カレンダー上の新規パチスロ導入群なし。
- repo重複検索と想定path確認で「神人 八犬伝」未登録を確認し、474件目として追加。
- グリーンべると、K-Navi、P-WORLD、旧パチマガスロマガ、pacnk、2010年当時スペック整理資料、検定回顧資料を横断し、性能コア＋v0.7 resetBehaviorを収集。

## 474 — 神人 八犬伝 要約

- メーカー: **コルモ**
- 型式: **シンハッケンデン1**
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **CONFLICT**
  - K-Navi全国導入開始: **2010-04-12**
  - 2010年当時スペック整理資料: **納品2010-04-18 / 導入2010-04-19**
  - 平均化せず双方を保持。本線主値は全国導入開始日を明示するK-Navi 2010-04-12。
- 世代/タイプ: **5号機 / ART専用 / ボーナス非搭載**
- 設定: **1 / 3 / 5 / 6 の4段階**
- ART初当たり: **1/255.1 / 1/221.6 / 1/195.0 / 1/163.0**
- 機械割主値: **97.1 / 99.8 / 104.2 / 109.0%**
- 当時資料には **95.9〜97.1 / 98.5〜99.8 / 102.8〜104.2 / 107.5〜109.0%** の幅表記もあり、定義不明のため平均化せず補足保持。
- 50枚ベース: **約36G/1000円**（当時単一二次資料。旧パチマガは調査中表記のため `ANALYSIS_SINGLE`）
- ART「殲鬼モード」: **約+2.0枚/G**
- 「瞬」: **20G / 約40枚**
- 「烈」: **150G / 約300枚**
- ARTループ率: **全設定共通84%**
- 通常ゲーム数天井: **非搭載**
- coreStatus: **COMPLETE_CORE_BASE_SINGLE_RELEASE_DATE_CONFLICT_RESET_PARTIAL**

## resetBehavior v0.7 — 神人 八犬伝

- **設定変更**: 通常時RT/モード・高確・ART/CZ状態の初期化/再抽選/引継ぎを本機固有資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 通常時RT/モード・ART関連状態の引継ぎを直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: RT/モード/ART関連状態の保持・初期化を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常ゲーム数天井は非搭載のため `NOT_APPLICABLE_FOR_CEILING_GAME_COUNT`。
- **リセット後天井**: `NOT_APPLICABLE`。
- **モード/状態**: 通常時に複数RT状態/モードがあること自体は業界資料で確認。ただし設定変更時の初期モード・振分・状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 短縮天井・朝一高確・設定変更専用ART/CZ優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。モード消失等は確定できないため不利扱いを推測しない。
- **変更判別**: ガックン、初期出目、液晶/ランプ等の本機固有判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 確認なし。
- resetBehaviorQA: **CEILING_NOT_APPLICABLE_MODE_STATE_POWER_CYCLE_DETECTION_UNVERIFIED_AFTER_RESEARCH**

## 主要出典（取得日 2026-09-03）

- グリーンべると: `https://web-greenbelt.jp/00002544/`
- K-Navi本機: `https://p-kn.com/slot/1165/`
- K-Navi 2010年4月導入カレンダー: `https://p-kn.com/calendar/201004/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5867`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/07/a.php`
- パチマガスロマガ1000円G欄: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/07/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_shinhakkenden.html`
- 2010年当時スペック整理資料: `https://ameblo.jp/pachimatome/entry-10456194856.html`
- 2010年4月機種回顧DB: `https://pachinko.hatenablog.jp/archive/2010/04/01`
- コルモ検定通過回顧資料: `https://q-and-a.hatenablog.com/entry/2016/10/23/105244`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 前線収集を優先し、推測で遡及QA済み範囲を進めない。
- 再開時はmachine tree/履歴から **スロ原人直後の最初の `resetBehavior` 欠損実ファイル**を一意特定して補完する。

## 次回再開地点

1. **recordCount 474 / chronologicalFrontier 2010-04-12**。
2. まず **2010-04-12同日群の残件「皆伝丸」（アリストクラート）** をrepo既存確認後に処理する。神人 八犬伝と同日扱いのため、未登録なら次の475件目。
3. 4/12同日群を閉じた後、**2010-04-13〜15**をメーカー別一覧・当時業界記事・旧解析DBで境界監査する。
4. 次のK-Navi具体日候補は **2010-04-16「パチスロ ひぐらしのなく頃に祭」**。既存登録有無を確認して時系列継続する。
5. **神人 八犬伝の導入日CONFLICTを保持**: K-Navi 2010-04-12 vs 2010年当時資料 2010-04-19。将来QAで一次/メーカー納品資料が得られた場合のみ主値を再判定する。
6. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4/19到達時に既存登録有無とreleaseDate定義を再確認し、同一機を重複追加しない。
7. 遡及QAは **スロ原人直後の最初のresetBehavior欠損実ファイル**を特定して再開。
8. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
