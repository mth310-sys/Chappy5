# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **567**
- latestMachineAdded: **パチスロ装甲騎兵ボトムズ**（サミー / 2011-04-18〔P-WORLD DB metadata 2011-03とCONFLICT〕）
- latestRecord: `docs/real_machine_db/machines/2011-04-18_soukou-kihei-votoms.md`
- chronologicalFrontier: **2011-04-18**
- frontierLatestExactDateMachine: **パチスロ装甲騎兵ボトムズ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、566前線レコードを再取得して開始。
- `INDEX.md` は旧19件地点のため、最新 `LATEST_HANDOFF.md` と実machineレコードを進捗正本として使用。
- 566件目「天下布武2」の次候補「パチスロ装甲騎兵ボトムズ」をrepo検索し、未登録を確認。
- K-Naviはホール導入開始2011-04-18。P-WORLDのDB metadataは2011年03月のため、平均化せずCONFLICT保持し、具体的ホール導入日の2011-04-18を時系列キーに採用。
- 2011-04-15同日群および4/16〜17境界を再監査し、今回確認できた未登録の最古具体日として567件目を追加。

## 今回追加 — 567 パチスロ装甲騎兵ボトムズ

- メーカー: **サミー**
- 型式: **装甲騎兵ボトムズS** / 検定番号 **0S1260**
- 5号機 / **ボーナス + ART / CZ / 内部状態 / 天井あり**
- 導入: **2011-04-18（K-Navi） / P-WORLD DB metadata 2011-03 CONFLICT**
- 機械割: **97.1 / 99.0 / 101.5 / 104.3 / 108.4 / 112.0%**
- ボーナス+ART初当り合算: **1/246.8 / 1/236.1 / 1/227.5 / 1/214.8 / 1/196.7 / 1/182.2**
- ART「バトリングタイム」: **初回50G+α / 約+1.8枚/G**
- BATTLING BONUS: **約300枚** / BATTLING CHANCE: **約200枚**
- 通常時内部状態: **低 / 通常 / 天国 / 前兆**
- AT-MODE: **32G**
- 天井: **ボーナスorART間1200G → 前兆経由ART**
- 50枚ベースと設定別ART単独初当りは検索語・資料系統を変えて再探索後も比較可能値を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7 — パチスロ装甲騎兵ボトムズ

- `settingChangeBehavior`: **INTERNAL_STATE_TRANSITION_ON_SETTING_CHANGE_CONFIRMED / GAME_COUNTER_AND_OTHER_INTERNAL_HANDLING_UNVERIFIED**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `ceilingAfterReset`: **NORMAL_1200G_KNOWN / RESET_SHORTENING_NONE_CONFIRMED_AFTER_RESEARCH**
- `modeAfterReset`: **STATE_RESELECTION_OR_TRANSITION_CONFIRMED_NUMERIC_DISTRIBUTION_UNVERIFIED**
- `stateAfterReset`: **SETTING_CHANGE_STATE_TRANSITION_CONFIRMED_DETAILS_UNVERIFIED**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **UNVERIFIED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `numericResetData`: **通常天井1200G / 設定変更後状態移行率の解析項目存在確認、具体値未回収**

K-Naviに本機専用「状態移行率(設定変更後)」、パチマガスロマガに「朝イチ・設定変更」解析項目が存在することを確認。設定変更が内部状態に作用すること自体は根拠あり。ただし今回の取得経路では具体的な変更後状態振り分け、1200GカウンタCLEAR/RETAIN、据え置き、単純電源OFF→ON、ガックン等を安全に直接回収できなかったため推測補完していない。

## 主要出典 — 567（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1378/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6272`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/128/sammy_slot_128.php`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/128/a.php`
- pacnk: `https://pacnk.com/slot/tools/sh_votoms.html`
- Sammy Networks公式系リリース: `https://www.sammy-net.jp/news/votoms0422.pdf`
- 5号機クロニクル: `https://5goki.com/sammy`

## 今回のGitHub更新

- 567追加: `docs/real_machine_db/machines/2011-04-18_soukou-kihei-votoms.md`
- 567 machine record commit: `9500d28071256bd7698c7697eba89e7fd542a441`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 567 / chronologicalFrontier 2011-04-18**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 567レコードを再取得。
2. **2011-04-18同日群を継続監査**。同日未登録5号機があれば最古から568件目として追加。
3. 同日群が閉じたら **4/19〜23境界**を監査。直前handoff既知候補の **4/24納品予定「メーメーパラダイス」**は実導入/納品日を複数資料で再確認して採用判断する。
4. P-WORLDのボトムズ「2011年03月」はK-Naviの具体的2011-04-18とCONFLICT保持。後続作業で当時業界一次資料から納品/販売月の定義を追加回収できればQAする。
5. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて十分に再探索し、競合は平均せずCONFLICT。
