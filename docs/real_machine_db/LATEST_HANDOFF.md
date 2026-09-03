# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **542**
- latestMachineAdded: **超重神グラヴィオン**（ロデオ / 2011-01-24）
- latestRecord: `docs/real_machine_db/machines/2011-01-24_choujuushin-gravion.md`
- chronologicalFrontier: **2011-01-24**
- frontierLatestMachine: **超重神グラヴィオン**（2011-01-24同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前進捗を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 541 / chronologicalFrontier 2011-01-24。
- 前handoff最優先候補 `超重神グラヴィオン` をrepo検索し未登録を確認。
- DMMぱちタウン、パチンコビレッジ、必勝本、旧機種一覧等で **2011-01-24導入**を複数照合し542件目として追加。

## 542 — 超重神グラヴィオン

- メーカー: **ロデオ**
- 型式名: **超重神グラヴィオンXA**
- 世代/タイプ: **5号機 / A+ART / セットストック式ART / 天井あり**
- 導入主値: **2011-01-24**
- 機械割主系列: **96.8 / 98.6 / 101.6 / 105.0 / 109.0 / 113.1%**
- ボーナス合算: **1/128.0 / 121.6 / 124.6 / 118.5 / 121.4 / 115.6**
- 50枚ベース: **29.75 / 29.95 / 29.84 / 30.04 / 29.94 / 30.14G/1000円**
- グラヴィオンBONUS: **約203枚 + ART**
- メイドBONUS: **約105枚**
- REG: **約35枚**
- ART「アルティメットデュエル」: **約+1.5枚/G / 継続G数非固定**
- 通常G数天井: **通常時500G消化後、次回ボーナスでART確定 / ストック3個**
- ART非当選回数天井: **9回 / 12回 / 15回連続非当選で段階的救済**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガ保存インデックスに本機専用「朝イチ・設定変更」項目の存在までは確認したが具体本文を今回回収できず。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。通常のART終了時に500G天井/非当選回数を引き継ぐ資料はあるが、日跨ぎ据え置きと自動同一視しない。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の500G天井進捗・ART非当選回数のCLEAR/RETAINを直接確定できず。
- ceilingAfterReset: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井進捗処理は未確定。
- modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSectionReset: **NOT_APPLICABLE**（5号機）
- resetBenefits: 設定変更専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**（天井進捗消去の有無自体を断定しない）
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## CONFLICT — 542

- 主系列の機械割はP-WORLD / pacnk / 5号機クロニクルで **96.8 / 98.6 / 101.6 / 105.0 / 109.0 / 113.1%**。
- 2011-01-09当時個人解析では **96.8 / 98.6 / 100.6 / 104.3 / 108.2 / 113.1%**。
- 平均せず、複数一致の主系列を採用し別系列をレコード内CONFLICTとして保持。

## 主要出典 — 542（取得日 2026-09-04）

- DMMぱちタウン: `https://p-town.dmm.com/`
- パチンコビレッジ2011導入日カレンダー: `https://www.pachinkovillage.com/introduction/index.php?Y=2011&action=archive`
- パチスロ必勝本: `https://p.hisshobon.jp/machine/1735/1/27714`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6209`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/56/a.php`
- パチマガスロマガ1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/56/c.php`
- パチマガスロマガ機種INDEX: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/56/rodeo_slot_56.php`
- pacnk: `https://pacnk.com/slot/tools/sh_gravion.html`
- 5号機クロニクル: `https://5goki.com/rodeo`
- P-Mans / グリーンべると転載: `https://p-mans.blogspot.com/2010/`
- 当時個人解析: `https://slotwinner777.blog84.fc2.com/blog-entry-57.html`
- 型式一覧補助: `https://www.fukuoka-yukyo.jp/`

## 今回のGitHub更新

- 542追加: `docs/real_machine_db/machines/2011-01-24_choujuushin-gravion.md`
- machine record commit: `4776c7b5b2d0fe1e6646726f1de91386c564a9c1`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 542 / chronologicalFrontier 2011-01-24**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 542本体を再取得。
2. **2011-01-24同日群の残存監査**を継続。すでに登録済みの燃えよ!功夫大戦・凄忍・じゃりン子チエ雷蔵伝説・キャプテンハーロックG・超重神グラヴィオンを重複追加しない。
3. `あっぱれ剣士道` は外部導入日カレンダーで **2011-01-17** 掲載が確認されているため、repo未登録なら時系列BACKFILL候補として最優先監査する。
4. `009-1` も外部導入日カレンダーで **2011-01-17** 掲載。repo未登録なら同様にBACKFILL対象。
5. `残機尽きるまで私は戦う` は **2011-01-21が展示会日**という既知注意を維持し、実ホール導入/納品日を別途確定してから追加する。
6. 1/24群と遡及漏れを閉じた後、2011-01-25以降へ進む。パチンコビレッジ上の次節点は2011-01-31で、`楽々温泉記` 等をrepo照合して未登録最古機から継続する。
7. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
