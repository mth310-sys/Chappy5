# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **795**
- latestMachineAddedByChronology: **ヱヴァンゲリヲン～決意の刻～**（ビスティ / Bisty）
- latestRecord: `docs/real_machine_db/machines/2014-02-10_evangelion-ketsui-no-toki.md`
- chronologicalFrontier: **2014-02-10**
- schema: **resetBehavior v0.7**
- status: **2014-02-10_GROUP_CLOSED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-02-03_shuyaku-wa-zenigata2.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 794 / chronologicalFrontier 2014-02-03 / 02-03群CLOSED**。
- 2014-02-04～02-09を導入日別に境界監査。HAZUSE新台カレンダーでは2014年2月の次の導入日は02-10、ALL7月間一覧でも02-03の次は02-10であり、この区間の具体日付き未登録パチスロは今回固定できず `CLOSED_FOR_CURRENT_RESEARCH`。
- 前handoff候補 **2014-02-10「ヱヴァンゲリヲン～決意の刻～」**を795件目として追加。
- 前handoffで02-10候補監査対象だった **「サムライスピリッツ～剣豪八番勝負～」**は、2014-02-10がSNKプレイモアのプレス発表日。K-Navi / HAZUSE / 2014-03-28 Gamer記事は全国ホール稼働を **2014-04-07** と一致して示すため、02-10群から除外し4月列候補へ戻した。
- ALL7 2014年2月一覧では02-10のパチスロ候補は「ヱヴァンゲリヲン 決意の刻」のみ確認できるため、02-10群を `CLOSED_FOR_CURRENT_RESEARCH` とした。

## 今回追加 — ヱヴァンゲリヲン～決意の刻～

### identity / 性能コア

- manufacturer: **ビスティ / Bisty**。
- hall start: **2014-02-10**（K-Navi / Pachiseven / ALL7一致、SANKYO公式博物館は2014.02）。
- generation/system: **5号機 / ノーマルタイプ / ボーナス+無限RT / 技術介入**。
- payout: **97.6 / 98.8 / 100.1 / 104.0 / 109.6 / 114.1%**。
- BIG合成: **1/234.1 / 227.6 / 224.4 / 204.8 / 192.8 / 176.2**。
- REG: **1/489.1 / 474.9 / 468.1 / 425.6 / 399.6 / 364.1**。
- ボーナス合成: **1/158.3 / 153.8 / 151.7 / 138.3 / 130.0 / 118.7**。
- baseGamesPer50: **約36～39G/50枚**（設定差を含むレンジ表記）。
- RT純増: **約0.2枚/G**。
- basicPayout: **SBB最大311枚 / BIG最大207枚 / REG最大104枚**。
- ceiling: **BIG間777G**でRT「暴走モード」、次回BIGまで継続。REGでは終了しない。
- 型式名/検定番号は資料系統を変えて再探索したが直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 本機の重要仕様として、**設定変更でもBIG間ハマリゲーム数を引き継ぐ**解析を複数系統で確認。
- 2014年当時資料では **設定変更でもRT状態をリセットしない** と明記。
- K-Navi実戦記事、必勝本、2-9伝説で **宵越し天井可能**を照合。
- したがって `gameCounterReset = CARRY_OVER_CONFIRMED`。一般的なAT/ART5号機の「設定変更=天井Gクリア」を本機へ流用しない。
- 設定変更専用の短縮天井、モード振り分け、朝一CZ等は **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常モード・高低状態の朝一再抽選はノーマル+RT機の本機では主要仕様として確認されず `NOT_APPLICABLE_CONFIRMED_SYSTEM_TYPE`。
- 設定変更なしの単純電源OFF→ONを設定変更と明示比較する直接資料は **UNVERIFIED_AFTER_RESEARCH**。宵越し情報から推測して埋めていない。
- ガックン、初期出目、朝一ステージ等の本機固有確定変更判別も **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## conflicts / safeguards

- 天井資料には「通常時777G」と「BIG間777G」がある。REGでは天井進捗/RTが終わらない機構を踏まえ、本DBは比較可能な契約として **BIG間777G** を採用。
- RT純増はP-WORLD解析値 **約0.2枚/G** を採用。当時実戦記事の体感/実測0.1枚未満や0.4枚想定は解析仕様値と混ぜない。
- 「設定変更でもG数・RT状態保持」は例外的だが複数当時資料が一致するため、一般論で上書きしない。
- 「サムライスピリッツ～剣豪八番勝負～」の2014-02-10は発表日であり、ホール稼働は **2014-04-07**。時系列混入防止。

## 2014-02-10同日群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
- **ヱヴァンゲリヲン～決意の刻～**（ビスティ） — 795件目。

ALL7月間一覧・HAZUSEカレンダー・個別導入日資料を照合し、02-10の追加パチスロ候補は今回固定できず同日群をCLOSED。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線795件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 795 / chronologicalFrontier 2014-02-10 / 02-10群CLOSED** から開始。
2. **2014-02-11～02-16** をメーカー横断・導入日別に境界監査し、具体日付き未登録パチスロを先に処理する。
3. 境界に漏れがなければ **2014-02-17群**へ進む。ALL7で先行確認済みのパチスロ候補は **「クイーンオアシス」（パイオニア）**、**「ジャックポット」（ヤーマ）**。
4. 02-17群は月間一覧だけで閉じず、K-Navi / HAZUSE / メーカー資料等でメーカー横断監査して追加候補の有無を確認する。
5. **「サムライスピリッツ～剣豪八番勝負～」は2014-04-07候補**として保持し、2月には入れない。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
7. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### ヱヴァンゲリヲン～決意の刻～
- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/880/`
- K-Navi: `https://p-kn.com/slot/1998/`
- Pachiseven: `https://pachiseven.jp/machines/3079/cutout/94`
- ALL7 2014年2月: `https://www.all7.jp/plans/index/2014/02`
- パチマガスロマガ 機種概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/26/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/26/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7305`
- 必勝本 狙いドコロ: `https://p.hisshobon.jp/machine/2342/1/46651`
- 2-9伝説（2014-02-09）: `https://2-9densetsu.com/evangelionketsuinotoki/`
- メタボ教授（2014-02-17）: `https://metabopro.com/ebahaiena/`
- けんのスロットシミュレーション解析: `https://kenslo65536.com/kaiseki/eva-ketui.html`

### 境界 / 次候補
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- ALL7 2014年2月: `https://www.all7.jp/plans/index/2014/02`
- K-Navi サムライスピリッツ～剣豪八番勝負～: `https://p-kn.com/slot/2013/`
- HAZUSE サムライスピリッツ～剣豪八番勝負～: `https://hazuse.com/machine/pachislot/3S1214/`
- Gamer 2014-03-28（全国ホール4/7稼働予定）: `https://www.gamer.ne.jp/news/201403280096/`
