# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **477**
- latestMachineAdded: **2027II NEO**（JPS / 2010-04-19）
- latestRecord: `docs/real_machine_db/machines/2010-04-19_2027ii-neo.md`
- chronologicalFrontier: **2010-04-19**
- frontierLatestMachine: **2027II NEO**（2010-04-19）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近476「パチスロ ひぐらしのなく頃に祭」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **476** / chronologicalFrontier **2010-04-16**。
- K-Navi 2010年4月全国導入カレンダーの次具体日 **2010-04-19「2027II NEO」**をrepo検索し未登録確認後、477件目として追加。
- 当時グリーンべるとは2010-04-18納品開始予定を明記。K-Navi全国導入2010-04-19との定義差を保持。
- P-WORLD、K-Navi、旧パチマガスロマガ、5号機クロニクル、当時業界記事を横断し、性能コア＋v0.7 resetBehaviorを収集。

## 477 — 2027II NEO 要約

- メーカー: **JPS**
- 型式: **ニーマルニーナナセカンドXX**
- 検定番号: **9S1389**
- 導入主値: **2010-04-19**（K-Navi全国一斉導入開始日）
- 当時グリーンべると: **2010-04-18納品開始予定**。定義差として保持。
- 世代/タイプ: **5号機 / ボーナス＋ART / 高確・潜航系状態 / BMSストック**
- PAYOUT: **96.3 / 98.9 / 100.4 / 102.4 / 105.5 / 109.0%**
- BIG: **1/2978.9 → 1/2259.9**
- REG: **1/103.0 → 1/98.4**
- ボーナス合算: **1/99.6 → 1/94.3**
- ART初当たり（P-WORLD）: **1/273.5 → 1/124.4**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **約126枚**
- REG: **約30枚**
- ART「バトルモード」: **約+1.5枚/G、次回ボーナスまで継続**
- P-WORLD掲載平均継続: **約100G / 平均獲得約150枚**
- BIG後ART確定、REG後必ず高確、ARTストック機能あり。
- coreStatus: **COMPLETE_CORE_EXCEPT_BASE_RESET_PARTIAL**

## resetBehavior v0.7 — 2027II NEO

- **設定変更**: 高確/追跡/潜航/超潜航、ART待機/BMSストックの設定変更時処理を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 状態・ストック保持条件を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 内部状態・ARTストックの保持/初期化を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 規定ゲーム数到達型の標準天井を確認せず `NOT_APPLICABLE_FOR_STANDARD_GAME_COUNT_CEILING`。
- **リセット短縮**: 設定変更専用短縮天井/規定G優遇を確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: 通常時状態群は確認済みだが設定変更時再抽選・初期振り分けは未確認。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: REG後高確は通常ボーナス後仕様でありリセット恩恵ではない。設定変更専用恩恵/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、液晶/ランプ等は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 高信頼資料で確認なし。
- resetBehaviorQA: **SETTING_CHANGE_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_UNVERIFIED_AFTER_RESEARCH**

## 主要出典（取得日 2026-09-03）

- K-Navi「2027II NEO」: `https://p-kn.com/slot/1170/`
- K-Navi 2010年4月導入カレンダー: `https://p-kn.com/calendar/201004/`
- K-Navi「2027IIからの改良点」: `https://p-kn.com/slot/1170/17941/`
- グリーンべると「2027ファンの要望に応えた最新後継機を発表」: `https://web-greenbelt.jp/00002538/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5868`
- パチマガスロマガ旧攻略 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/22/a.php`
- パチマガスロマガ旧攻略 ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/22/h.php`
- 5号機クロニクル JPS一覧: `https://5goki.com/jps`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 新規収集を止めず、次回QAでスロ原人直後の最初のresetBehavior欠損実ファイルを日付順/コミット履歴から一意特定して再開する。

## 次回再開地点

1. **recordCount 477 / chronologicalFrontier 2010-04-19**。
2. **同日/境界監査として「スパイガール」（KPE）の導入日CONFLICTを最優先で再確認**する。K-Navi機種ページは2010-02-22、パチビー等は2010-04-19、複数DBは2010-04。今回repo検索では機種名一致レコードを確認できていないため、型式・検定番号・メーカー公式/当時納品資料まで照合し、同一機未登録なら遡及追加する。
3. 4/19同日群を閉じた後、2010-04-20〜25をメーカー別一覧・当時業界記事・旧DBで境界監査する。
4. K-Naviカレンダー上の次の具体日パチスロ候補は **2010-04-26「ファニーサンタ2」（タイヨー）**。repo重複確認後に次候補とする。
5. **神人 八犬伝導入日CONFLICT**（K-Navi 2010-04-12 vs 当時資料2010-04-19）は保持。一次/メーカー納品資料が得られた場合のみ主値を再判定する。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
