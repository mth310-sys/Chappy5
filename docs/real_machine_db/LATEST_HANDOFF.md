# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **458**
- latestMachineAdded: **真田純勇士**（2010年2月DB収録 / 2010-03-07納品予定記事との日付CONFLICTを保持）
- latestRecord: `docs/real_machine_db/machines/2010-02_sanada-jun-yuushi.md`
- chronologicalFrontier: **2010-02-21**（ゼットゴールドEX地点を維持）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2010-02_tetsuya-shinjuku-vs-ueno-dx.md` を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコードを優先。
- 開始時点は **457件 / latestMachineAdded 哲也 新宿VS上野DX / chronologicalFrontier 2010-02-21**。
- handoff最優先候補 `真田純勇士` をrepo検索し、main未登録を確認して調査。
- P-WORLD 2010年2月新台スケジュールと5号機クロニクルは **2010年2月** と記録。一方、2010-01-21グリーンべると記事は1月19日のニューギンプレス発表会を報じ、**2010-03-07から納品開始予定**と明記。予定変更・導入/納品定義差を推測で解消せず `CONFLICT_DATE_SOURCE_DEFINITION_OR_SCHEDULE` として保存。
- 性能コアは設定別機械割、BIG/REG/合算、50枚ベース、RT純増、獲得枚数、BIG後999G/REG後666G天井まで回収。
- resetBehaviorでは旧パチマガスロマガから **天井までのゲーム数は設定変更後も引き継ぐため宵越し可能**という本機固有の直接情報を確保。RAMクリア時は全状態クリア後RT状態スタートだが、通常設定変更とは別条件として分離保存。

## 458 — 真田純勇士 要約

- メーカー: **ニューギン**
- 流通表記: **真田純勇士V**（公式型式名としては未確定）
- 導入: **CONFLICT** — P-WORLD/5号機クロニクル `2010-02` vs 当時グリーンべると `2010-03-07納品開始予定`
- 世代: **5号機**
- タイプ: **ノーマル主体 + RT / 天井RT**
- 機械割: **96.8 / 98.8 / 100.9 / 104.3 / 106.7 / 110.0%**
- BIG合成: **1/297.9 → 1/232.4**
- REG: **1/452.0 → 1/341.3**
- 合算: **1/179.6 → 1/138.3**
- 50枚ベース: **35.19 / 35.55 / 36.05 / 36.69 / 37.28 / 37.83G**
- S・BIG/BIG: **約308枚**
- REG: **約104枚**
- RT「十勇士の刻」: **約+0.1枚/G**（P-WORLD属性 約+0.12枚/G）・次回ボーナスまで
- 天井: **BIG後999G / REG後666G** で次回ボーナスまでRT

## resetBehavior v0.7 — 真田純勇士

- **設定変更**: `PARTIAL_CONFIRMED`。BIG後999G / REG後666Gの天井進捗は**設定変更後も引継ぎ**。
- **据え置き**: `CONFIRMED_FOR_CEILING_PROGRESS`。宵越し狙い可能。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断のみを設定変更と区別する直接資料は今回確定できず。
- **gameCounterReset**: `NOT_RESET_BY_SETTING_CHANGE_FOR_CONFIRMED_CEILING_COUNTER`。
- **ceilingAfterReset**: 短縮ではなく既存進捗を引継ぎ。通常天井 **BIG後999G / REG後666G**。
- **modeAfterReset**: `NOT_APPLICABLE_FOR_CONFIRMED_LONG_TERM_MODE / OTHER_INTERNAL_MODE_UNVERIFIED`。
- **stateAfterReset**: 通常設定変更時は `UNVERIFIED`。**RAMクリア時は全状態クリア後RT状態スタート**という別条件情報あり。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵**: 天井進捗保持により前日ハマリの宵越し価値が残る。追加の専用高確/当選率等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、リール、液晶、ランプまで再探索済み。
- **公開朝一数値**: 天井 **999G / 666G** と設定変更時 `CARRY_OVER` を確認。リセット専用モード振分/当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- グリーンべると: `https://web-greenbelt.jp/00002499/`
- P-WORLD 2010年2月新台スケジュール: `https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2010-02`
- P-WORLD 真田純勇士: `https://www.p-world.co.jp/machine/database/5843`
- 5号機クロニクル ニューギン＆エキサイト: `https://5goki.com/newgin-excite`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/13/a.php`
- パチマガスロマガ 小役確率/1000円ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/13/c.php`
- パチマガスロマガ 機種索引: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/13/newgin_slot_13.php`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は2010年2月の時系列漏れ修復を優先。
- 次の遡及QA対象は、スロ原人直後の実ファイル順を確認し、最初の `resetBehavior` 欠損機を一意特定してから補完する。

## 次回再開地点

1. **recordCount 458 / chronologicalFrontier 2010-02-21**。最新追加は日付CONFLICTを保持した「真田純勇士」。
2. **2010年2月月内一覧とmain実レコードを再照合し、2/21以前に具体日が確定する未登録機が残っていないか最終監査**する。
3. **2010-02-21同日群を最終監査**し、未処理がなければ repo未登録確認済みの **みどりのマキバオー（2010-02-22）**を次の本線候補として調査する。
4. `真田純勇士` は後続QAで2010-02と2010-03-07納品予定の関係を確定できる新資料が見つかった場合のみ日付を昇格/解消する。予定記事日を実稼働日へ自動転記しない。
5. 月精度で追加済みの `バイオレントゾーン` と `哲也 新宿VS上野DX` も、具体導入日の新資料が見つかった場合のみ日精度へ昇格する。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
