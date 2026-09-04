# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **548**
- latestMachineAdded: **秘宝伝 ～封じられた女神～**（大都技研 / 2011-02-07）
- latestRecord: `docs/real_machine_db/machines/2011-02-07_hihouden-fuujirareta-megami.md`
- chronologicalFrontier: **2011-02-07**
- frontierLatestMachine: **秘宝伝 ～封じられた女神～**（同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線547レコード `パチスロスーパー海物語IN沖縄` を再取得して開始。
- 開始時正本は **recordCount 547 / chronologicalFrontier 2011-02-07**。
- `パチスロ スーパー海物語IN沖縄30KD` は別スペックで2011年2月導入まで確認済みだが、今回も具体的ホール導入日を確定できず、2/7以前・同日を推定しなかった。
- K-Navi / パチ＆スロ必勝本で `秘宝伝 ～封じられた女神～` の **2011-02-07導入**を確認。repo code searchで未登録を確認し548件目として追加。
- chronologicalFrontierは **2011-02-07** のまま。同日群はまだ閉じていない。

## 今回追加 — 秘宝伝 ～封じられた女神～

- メーカー: **大都技研**
- 導入: **2011-02-07**
- タイプ: **5号機 / A+ART / ボーナス+ゲーム数上乗せART**
- 機械割: **97.7 / 98.9 / 101.5 / 105.7 / 109.5 / 115.2%**
- BIG: **1/399.6 / 399.6 / 385.5 / 385.5 / 368.2 / 368.2**
- REG: **1/595.8 / 590.4 / 580.0 / 565.0 / 550.7 / 452.0**
- ボーナス合算: **1/239.2 / 238.3 / 231.6 / 229.1 / 220.7 / 202.9**
- ボーナス+ART初当り合算: **1/162.4 / 157.7 / 152.1 / 140.1 / 131.1 / 114.2**
- baseGamesPer50: **32.94 / 32.94 / 32.95 / 32.96 / 32.97 / 33.01G**
- BIG: **約210枚**
- REG: **約60枚 / MAX60枚**
- ART「秘宝RUSH」: **50G+α / 約+1.4枚/G**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 秘宝伝 ～封じられた女神～

- 当時2011-03-23攻略資料で、**設定変更時は天井ゲーム数がリセット**されることを直接確認。
- 通常天井は、第1天井が **ボーナス or ART間最大900G → 無限高確率∞（ART確定）**、第2天井が **ボーナス間1500G → 無限高確率∞ + 伝説モードロング**。
- 同資料で、設定変更後は**液晶上は昼スタートでも内部的には夕方**と報告。朝一に早く夕方へ移ることがある。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE_CONFIRMED**。
- `ceilingAfterReset`: **NORMAL_COUNTER_RESTART / RESET_SHORTENING_NONE_CONFIRMED**。
- `stateAfterReset`: **INTERNAL_EVENING_START_REPORTED / NUMERIC_DISTRIBUTION_UNVERIFIED**。
- `resetPenalties`: **CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。
- 据え置き時の天井/状態/伝説モードの厳密な保持、単純電源OFF→ON、ガックン/初期出目等の変更判別は、検索語・資料系統を変更して再探索したが本機固有の直接根拠を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。

### CONFLICT / 除外

- 後年5号機クロニクルに「疑似ボーナス+ART」「秘宝RUSH約2.2枚/G」とする記述があるが、K-Navi、P-WORLD、パチマガスロマガはリアルボーナス搭載A+ART・約1.4枚/Gで一致。
- 後年値は **POSSIBLE_SERIES_CONTAMINATION / SOURCE_ERROR** として性能コアへ統合しない。

### 主要出典 — 548（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1335/`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1727/1/27085`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/48/a.php`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/48/c.php`
- パチマガスロマガ index: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/48/daitogiken_slot_48.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6200`
- 当時天井攻略: `https://macerate.seesaa.net/article/192175568.html`
- 回顧照合: `https://plaza.rakuten.co.jp/surojiki/diary/201208290002/`

## 今回のGitHub更新

- 548追加: `docs/real_machine_db/machines/2011-02-07_hihouden-fuujirareta-megami.md`
- machine record commit: `79c8737f530f5c7f1bbc9bc90b4f4394b16ba296`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 548 / chronologicalFrontier 2011-02-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 548レコードを再取得。
2. **2011-02-07同日群を継続**。`パチスロ スーパー海物語IN沖縄30KD` の具体的導入日を再探索し、2/7以前または2/7同日を確定できた場合は時系列優先で別レコード化する。月粒度しか取れなければ無理に日付を推定しない。
3. **頑固一徹**は2011年の同時期候補。repo重複と実ホール導入日を複数資料で確認し、2/7同日なら次の新規候補として処理する。
4. その他2/7同日候補を導入カレンダー/業界記事/当時解析で照合し、同日群を閉じてから後日へ進む。
5. `残機尽きるまで私は戦うS` は2011-03-06納品開始予定のため2月へ誤繰上げしない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
