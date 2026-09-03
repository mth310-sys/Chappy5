# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **465**
- latestMachineAdded: **満福箱**（ホール導入2010-03-15）
- latestRecord: `docs/real_machine_db/machines/2010-03-15_manpukubako.md`
- chronologicalFrontier: **2010-03-15**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード「まことちゃん」を再取得。
- `INDEX.md` は旧地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本はrecordCount 464 / chronologicalFrontier 2010-03-08 / latestMachineAdded「まことちゃん」。
- 2010-03-08同日群の残候補「哲也 新宿VS上野天涯孤独DX」を再監査。当時スケジュールの長表記は既存457「哲也 新宿VS上野DX」/型式「哲也DX2」と同じ2010年DX版を指すと判断し、重複追加しなかった。
- 当時新台スケジュール上、3月8日の次のパチスロ導入群は3月15日。3月9〜14日に別の具体日確認済み未登録機を確定できなかったため、「満福箱」を465件目へ追加。

## 465 — 満福箱 要約

- メーカー表記: **メテオ / ラスター**。旧パチマガはメテオ/©METEOR、後年DBはラスター、当時導入表はメテオ/ラスター併記。
- 正式型式: **UNVERIFIED_AFTER_RESEARCH**
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **2010-03-15**。当時スケジュールは3月14日納品・3月15日導入。複数後年DBも2010年3月機で整合。
- 世代: **5号機**
- タイプ: **端メダル専用ノーマル / 1・2・3BET対応 / 特賞ボーナス主体**
- 設定: **2段階**
- 特賞確率:
  - 1BET: 設定1 **1/189.96** / 設定2 **1/199.80**
  - 2BET: 設定1 **1/84.89** / 設定2 **1/94.98**
  - 3BET: 設定1 **1/54.98** / 設定2 **1/58.00**
- 特賞: **約47枚**（規定払い出し50枚）
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。旧パチマガ本機ページ自体が「現在調査中」。特殊な端メダル用途のため逆算しない。
- 機械割: **UNVERIFIED / BET_CONDITION_DEPENDENT**。後年記事に設定1約63.6%との回顧値があるがBET条件不明、5号機クロニクルは不明。標準設定1値として固定しない。
- 後年記事の「1枚掛けでも1/98くらい」は旧パチマガ直接値1BET 1/189.96〜1/199.80と競合するため `CONFLICT_RETROSPECTIVE_APPROXIMATION` として平均せず保持。

## resetBehavior v0.7 — 満福箱

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SETTING_OPERATION`。設定変更操作時の低レベル挙動は直接資料なし。
- **据え置き**: `NOT_APPLICABLE_FOR_GAME_COUNT_CEILING / NO_PERSISTENT_MODE_CONFIRMED`。公開された天井・周期・ART/ATストック・持続モードを確認せず。
- **電源OFF→ON**: `UNVERIFIED_FOR_LOW_LEVEL_STATE / NOT_APPLICABLE_FOR_PUBLIC_CEILING_COUNTER`。低レベル内部状態は未確定だが、公開天井カウンタ自体がない。
- **ゲーム数/天井**: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- **リセット短縮**: `NOT_APPLICABLE / NONE_CONFIRMED`。
- **モード**: `NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED`。
- **状態**: ART/AT/CZ/RTは `NOT_APPLICABLE`。ボーナス成立済み等の低レベル内部状態のみ `UNVERIFIED`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、リール、ランプ、据え置き判別まで検索語変更済み。
- **公開朝一数値**: リセット短縮天井・モード振分・朝一当選率・恩恵率はいずれも確認なし。

## 主要出典（取得日 2026-09-03）

- パチマガスロマガ旧解析 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/a.php`
- パチマガスロマガ旧解析 ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/h.php`
- パチマガスロマガ旧解析 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/c.php`
- パチマガスロマガ旧解析トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/meteor_slot_02.php`
- 2010年3月1日～4月19日新台導入スケジュール: `https://ameblo.jp/pachimatome/entry-10470039494.html`
- 5号機クロニクル ラスター: `https://5goki.com/luster`
- パチ7 5号機ロースペック回顧: `https://pachiseven.jp/articles/detail/14329`
- なな徹 過去最低出玉率回顧: `https://nana-press.com/post/1575422`
- P-WORLD 2010年03月導入カレンダー: `https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2010-03`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線前進を止めず、次の遡及QA対象はスロ原人直後の実ファイル順で最初の `resetBehavior` 欠損機を一意特定してから補完する。

## 次回再開地点

1. **recordCount 465 / chronologicalFrontier 2010-03-15**。最新追加は「満福箱」。
2. **2010-03-15同日群を最終監査**し、別の未登録パチスロがないか既存レコードと突合。
3. 同日群を閉じたら **2010-03-16〜22境界監査**。発表日・検定日を導入日と混同せず、具体的ホール導入日を優先する。
4. 当時新台スケジュールの次の具体的パチスロ導入群は **2010-03-23**。候補は「新鬼武者」（ロデオ）、「続・お見事！サブちゃん」「ノーマルだよ！サブちゃん」（オリンピア）、「デジスロA」（ベルコ）。既存登録と突合し、最古の未登録機から466件目へ進む。
5. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。現時点では4月側を優勢とし、4月境界で再確認。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近main状態を再取得し、他リレー競合・重複を防ぐ。
