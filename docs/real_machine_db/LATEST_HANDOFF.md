# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **476**
- latestMachineAdded: **パチスロ ひぐらしのなく頃に祭**（オーイズミ / 2010-04-16）
- latestRecord: `docs/real_machine_db/machines/2010-04-16_higurashi-no-naku-koro-ni-matsuri.md`
- chronologicalFrontier: **2010-04-16**
- frontierLatestMachine: **パチスロ ひぐらしのなく頃に祭**（2010-04-16）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近475「皆伝丸」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **475** / chronologicalFrontier **2010-04-12**。
- 2010-04-13〜15境界を再探索し、今回新たに具体日を確定できる未登録パチスロ機は確認できず。
- K-Navi 2010年4月全国導入カレンダーの次具体日 **2010-04-16「パチスロ ひぐらしのなく頃に祭」**をrepo検索し未登録確認後、476件目として追加。
- P-WORLD、K-Navi、pacnk、当時系攻略wiki/攻略ガイド、当時業界記事を横断し、性能コア＋v0.7 resetBehaviorを収集。

## 476 — パチスロ ひぐらしのなく頃に祭 要約

- メーカー: **オーイズミ**
- 型式: **ひぐらしのなく頃に祭F**
- 検定番号: **9S0799**
- 導入主値: **2010-04-16**（K-Navi全国一斉導入開始日）
- 当時グリーンべると: **2010-04-18から納品開始予定**。定義差として保持。
- 世代/タイプ: **5号機 / ボーナス＋完走型RT / CZ / 技術介入**
- 通常PAYOUT: **96.0 / 98.8 / 100.5 / 104.3 / 108.4 / 112.5%**
- 完全攻略PAYOUT: **102.0 / 104.1 / 106.9 / 109.0 / 112.2 / 114.5%**
- BIG合算: **1/394.8 → 1/341.3**
- REG: **1/399.6 → 1/376.6**
- ボーナス合算: **1/198.6 → 1/179.1**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- OYASHIRO BIG: **約307枚**
- BIG: **約216枚**（当時wiki約209枚との競合を保持）
- REG/MB: **約48枚**
- RT「疑心暗鬼モード」: **30/50/90/150G、約+0.75枚/G**
- CZ「運命分岐モード」: ボーナス後/RT後/通常周期到達。通常周期は **250G or 500G**。
- 技術介入でRT30→50G、または次回周期500→250Gへ改善可能。
- coreStatus: **COMPLETE_CORE_EXCEPT_BASE_RESET_PARTIAL**

## resetBehavior v0.7 — ひぐらしのなく頃に祭

- **設定変更**: 初代本機固有の周期進捗/周期種別/CZ・RT状態のクリア・引継ぎ・再選択を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 周期進捗、CZ/RT状態の扱いを直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 周期進捗、CZ/RT状態の保持/初期化を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常周期CZは250G/500G。ボーナス天井ではない。設定変更時のカウンタ処理は未確認。
- **リセット短縮**: 後年単一編集記事に「リセット時250G確定」とする記載を確認したが、当時資料/別系統資料で裏付けできず主値に不採用。
- **モード/状態**: AT系の通常モードテーブルは確認なし。CZ/RT状態の設定変更処理は未確認。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 高信頼資料で設定変更専用の短縮・RT/CZ優遇を確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、液晶/ランプ等による初代本機固有判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 高信頼資料では確認なし。
- resetBehaviorQA: **SETTING_CHANGE_CARRYOVER_POWER_CYCLE_GAME_COUNTER_DETECTION_UNVERIFIED_AFTER_RESEARCH**

## 主要出典（取得日 2026-09-03）

- K-Navi 2010年4月導入カレンダー: `https://p-kn.com/calendar/201004/`
- K-Navi「パチスロ ひぐらしのなく頃に祭」: `https://p-kn.com/slot/1153/`
- K-Navi「疑心暗鬼モード(RT)」: `https://p-kn.com/slot/1153/17913/`
- K-Navi「運命分岐モード(CZ)」: `https://p-kn.com/slot/1153/17912/`
- K-Navi「ボーナスの種類」: `https://p-kn.com/slot/1153/17909/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5835`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/3797/greenbelt`
- pacnk: `https://pacnk.com/slot/tools/sh_higurashi.html`
- 当時系攻略wiki「基本仕様」: `https://w.atwiki.jp/watanagashi-sai/pages/13.html`
- 当時系攻略wiki「CZ」: `https://w.atwiki.jp/watanagashi-sai/pages/14.html`
- 当時系攻略wiki「RT」: `https://w.atwiki.jp/watanagashi-sai/pages/15.html`
- 攻略ガイド「運命分岐モード」: `https://www.reitoumaguro.com/higurasi/unmei.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 新規収集を止めず、次回QAでスロ原人直後の最初のresetBehavior欠損実ファイルを日付順/コミット履歴から一意特定して再開する。

## 次回再開地点

1. **recordCount 476 / chronologicalFrontier 2010-04-16**。
2. K-Naviカレンダー上、次の具体日群は **2010-04-19**。パチスロは **「2027II NEO」（JPS）**が掲載されているため、repo既存登録有無を確認して次候補とする。
3. 2010-04-17〜18をメーカー別一覧・当時業界記事・旧DBで境界監査し、未登録具体日機がなければ4/19へ進む。
4. **スパイガール導入日CONFLICTを4/19地点で再監査**する。K-Navi機種ページは2010-02-22、パチビーは2010-04-19、複数DBは2010-04。既存登録有無と型式を確認し、同一機を重複追加しない。
5. **神人 八犬伝導入日CONFLICT**（K-Navi 2010-04-12 vs 当時資料2010-04-19）を保持し、一次/メーカー納品資料が得られた場合のみ主値を再判定する。
6. ひぐらし初代の50枚ベースと設定変更/据え置き/電源断時の周期処理は、将来QAで当時解析資料・アーカイブが得られた場合に補完する。後継「祭2」の値を混入させない。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
