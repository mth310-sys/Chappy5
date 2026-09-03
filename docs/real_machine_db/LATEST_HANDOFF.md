# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **541**
- latestMachineAdded: **シスタークエスト2 ～魔剣の騎士と白銀の巫女～**（SNKプレイモア / 2011-01-11 / BACKFILL）
- latestRecord: `docs/real_machine_db/machines/2011-01-11_sister-quest2.md`
- chronologicalFrontier: **2011-01-24**
- frontierLatestMachine: **じゃりン子チエ 雷蔵伝説**（2011-01-24同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、540「じゃりン子チエ 雷蔵伝説」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 540 / chronologicalFrontier 2011-01-24。
- 前handoffで遡及漏れ候補として明示されていた `シスタークエスト2` をrepo検索し、未登録を確認。
- K-Naviの2011-01-11ホール導入開始、当時業界記事の2011年1月中旬予定、後年回顧の同日導入整理を照合し、541件目としてBACKFILL追加。
- BACKFILLのため chronologicalFrontier は2011-01-24のまま維持。

## 541 — シスタークエスト2 ～魔剣の騎士と白銀の巫女～

- メーカー: **SNKプレイモア**
- 型式名: **シスタークエスト2D**
- 世代/タイプ: **5号機 / ノーマルA / ボーナス主体 / 天井RT**
- 導入主値: **2011-01-11**
- 機械割: **96.7 / 98.3 / 100.2 / 104.5 / 108.4 / 112.2%**
- BIG: **1/268.5 / 268.5 / 262.1 / 253.0 / 238.3 / 228.3**
- REG: **1/455.1 / 420.1 / 390.1 / 346.7 / 316.6 / 291.2**
- ボーナス合算: **1/168.9 / 163.8 / 156.7 / 146.2 / 135.9 / 128.0**
- 50枚ベース: **34.26 / 34.81 / 35.55 / 35.98 / 36.37 / 36.91G/1000円**
- BIG: **約312枚**
- REG: **約104枚**
- 天井: **BIG終了後999G / REG終了後777G -> 次回ボーナスまで現状維持型RT**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- settingChangeBehavior: **VERIFIED_PARTIAL**。設定変更しても天井までの消化ゲーム数はリセットされない。
- carryOverBehavior: **CEILING_GAME_COUNTER_CARRYOVER_VERIFIED**。前日大ハマリ台について設定変更後でも宵越し天井RT狙い可能とする直接資料あり。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の本機固有処理は直接確定できず。
- gameCounterReset: **RETAIN_ON_SETTING_CHANGE / VERIFIED_CROSS_ARCHIVE**
- ceilingAfterReset: **NO_RESET_RESTART / NO_SHORTENED_RESET_CEILING_CONFIRMED**。BIG後999G/REG後777Gの通常天井進捗を保持。
- modeAfterReset: **NOT_APPLICABLE_AS_LONG_GAME_MODE / NO_DEDICATED_MODE_CONFIRMED**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSectionReset: **NOT_APPLICABLE**（5号機）
- resetBenefits: **設定変更後でも前日天井進捗が残り、客側は宵越し天井を狙える**
- resetPenalties: 客側の設定変更固有不利は **NONE_CONFIRMED_AFTER_RESEARCH**。ホール側は設定変更だけで深い天井進捗を消せない。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/表示等の本機固有確定材料は未確認。

## 主要出典 — 541（取得日 2026-09-04）

- K-Navi 基本スペック: `https://p-kn.com/slot/1321/`
- K-Navi 機械割: `https://p-kn.com/slot/1321/28815/`
- パチマガスロマガ保存ページ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/32/c.php`
- P-WORLD旧機種DB: `https://www.p-world.co.jp/machine/database/6169`
- 中一商事保存機種ページ: `https://www.nakaiti.com/html/sSNK078.html`
- P-Mans / PlayGraph転載: `https://p-mans.blogspot.com/2010/11/`
- アニメ！アニメ！: `https://animeanime.jp/article/2010/11/14/7181.html`
- パチ7回顧: `https://pachiseven.jp/articles/detail/18844`

## 今回のGitHub更新

- 541追加: `docs/real_machine_db/machines/2011-01-11_sister-quest2.md`
- machine record commit: `9487d602fdade91ce2265553e992be02c9b4fa13`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 541 / chronologicalFrontier 2011-01-24**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 540「じゃりン子チエ 雷蔵伝説」/ 541「シスタークエスト2」を再取得。
2. **2011-01-24同日群へ復帰**。`超重神グラヴィオン`（ロデオ）は前回main検索で未登録。K-Navi等で具体導入日を最終確定し、1/24同日なら542件目最優先候補。
3. `あっぱれ剣士道`、`残機尽きるまで私は戦う` 等の2011年1月候補も、実ホール導入/納品/展示会日を分離して時系列監査する。
4. 特に `残機尽きるまで私は戦う` の2011-01-21は展示会日として扱い、導入日と混同しない。
5. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
