# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **475**
- latestMachineAdded: **皆伝丸**（アリストクラートテクノロジーズ / 2010-04-12）
- latestRecord: `docs/real_machine_db/machines/2010-04-12_kaidenmaru.md`
- chronologicalFrontier: **2010-04-12**
- frontierLatestMachine: **皆伝丸**（2010-04-12）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近474「神人 八犬伝」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **474** / chronologicalFrontier **2010-04-12**。
- K-Navi 2010年4月全国導入カレンダーで2010-04-12群は **神人 八犬伝 / 皆伝丸**。前者は474件目として登録済みのため、repo重複確認後に同日残件「皆伝丸」を475件目として追加。
- P-WORLD、旧パチマガスロマガ、K-Navi、回顧資料を横断し、性能コア＋v0.7 resetBehaviorを収集。

## 475 — 皆伝丸 要約

- メーカー: **アリストクラートテクノロジーズ**
- 型式: **カイデンマル3**
- 検定番号: **9S1067**
- 導入: **2010-04-12**（K-Navi全国一斉導入開始日。P-WORLD 2010年04月と整合）
- 世代/タイプ: **5号機 / ボーナス＋ART / 押し順ART / ゲーム数上乗せ**
- ボーナスゲーム合算: **全設定共通1/99.9**
- 機械割:
  - パチマガスロマガ・シミュレート: **96.88 / 98.95 / 101.81 / 104.23 / 106.79 / 109.27%**
  - P-WORLD掲載: **97.0 / 99.1 / 102.2 / 104.7 / 107.4 / 110.0%**
  - 定義差の可能性があるため平均化せず別系列保持。
- 50枚ベース: **30.52G/1000円**
- BG: **約42枚**
- ART「敵城潜入」: **約+1.3枚/G**、初回突入時最低**100G**、ART突入時平均期待約**700枚**。
- 上乗せゾーン「大宴会」: **5〜300G上乗せ**。滞在中はARTゲーム数減算停止。
- 通常時状態: **通常 / 高確 / 超高確**。
- 通常時 **300Gまたは500G（1:1）**消化で高確または超高確へ移行し、次回ボーナスまで継続。これは状態移行救済であり、固定G数到達で直接ART/ボーナス当選する通常型天井とは分離。
- coreStatus: **COMPLETE_CORE_RESET_PARTIAL**

## resetBehavior v0.7 — 皆伝丸

- **設定変更**: 300G/500G状態移行カウンタ、通常/高確/超高確、ART関連状態の初期化・再抽選・引継ぎを本機固有資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 300G/500G進捗、モード、ART関連状態の扱いを直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: ゲーム数進捗・内部状態・ART関連状態の保持/初期化を直接確認できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 300G/500Gの状態移行救済は確認。設定変更時のクリア/引継ぎは未確認。
- **リセット後短縮/専用天井**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: 通常/高確/超高確の存在は確認済み。設定変更時初期状態・振分は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 専用短縮、高確率優遇、ART優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。進捗消失等は確定できないため不利扱いを推測しない。
- **変更判別**: ガックン、初期出目、液晶/ランプ等の本機固有判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 確認なし。
- resetBehaviorQA: **GAME_COUNTER_MODE_STATE_POWER_CYCLE_DETECTION_UNVERIFIED_AFTER_RESEARCH**

## 主要出典（取得日 2026-09-03）

- K-Navi 2010年4月導入カレンダー: `https://p-kn.com/calendar/201004/`
- P-WORLD「皆伝丸」: `https://www.p-world.co.jp/machine/database/5873`
- パチマガスロマガ「皆伝丸 基本システム」: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/41/a.php`
- パチマガスロマガ「皆伝丸 ボーナス抽選確率/PAYOUT」: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/41/h.php`
- パチマガスロマガ「皆伝丸 小役確率」: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/41/c.php`
- パチマガスロマガFREE「5号機ヒストリア2010年前編」: `https://pachimaga.com/free/playback/f90e5710c9d58fbdd546cacf5ba1afa1cb37935d.php`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は `2006-10_surogenjin.md` の実ファイルをmainから再取得して正本進捗を再確認した。
- machine directory取得とrepo検索だけでは、スロ原人直後の時系列実ファイルを順序保証付きで安全に一意特定できなかったため、推測でQA済み範囲を進めていない。
- 再開時はgit tree/コミット履歴または実ファイルの日付順を使って **スロ原人直後の最初の `resetBehavior` 欠損実ファイル**を一意特定し、その機種から遡及補完する。

## 次回再開地点

1. **recordCount 475 / chronologicalFrontier 2010-04-12**。
2. K-Navi導入カレンダー上の4/12群は「神人 八犬伝」「皆伝丸」で閉じたため、**2010-04-13〜15**をメーカー別一覧・当時業界記事・旧解析DBで境界監査する。
3. 次のK-Navi具体日候補は **2010-04-16「パチスロ ひぐらしのなく頃に祭」**。repo既存登録有無を確認し、境界監査で13〜15日に未登録機が出なければ476件目候補として処理する。
4. **神人 八犬伝の導入日CONFLICTを保持**: K-Navi 2010-04-12 vs 2010年当時資料 2010-04-19。将来QAで一次/メーカー納品資料が得られた場合のみ主値を再判定する。
5. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4/19到達時に既存登録有無とreleaseDate定義を再確認し、同一機を重複追加しない。
6. 皆伝丸のPAYOUT差は定義不明のまま `CONFLICT`/別系列保持し、平均化しない。
7. 遡及QAは **スロ原人直後の最初のresetBehavior欠損実ファイル**を特定して再開。
8. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
