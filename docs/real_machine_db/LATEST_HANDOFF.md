# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **566**
- latestMachineAdded: **天下布武2**（山佐 / 2011-04-15〔K-Navi 2011-04-18とCONFLICT〕）
- latestRecord: `docs/real_machine_db/machines/2011-04-15_tenka-fubu2.md`
- chronologicalFrontier: **2011-04-15**
- frontierLatestExactDateMachine: **天下布武2**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、565前線レコードを再取得して開始。
- `INDEX.md` は旧少数レコードのままなので、実machine treeと `LATEST_HANDOFF.md` を最新進捗正本として使用。
- 2011-04-04同日群および4/5〜17境界を再監査。
- 直前handoffでは2011-04-18を後続アンカーとしていた「天下布武2」について、HAZUSEが型式「天下布武2A」・検定番号1S0066とともに導入開始日2011-04-15を掲載していることを確認。K-Naviはホール導入開始2011-04-18のため、日付はCONFLICTとして両方保持し、時系列キーには確認できた最古具体日2011-04-15を採用。
- repo検索で未登録を確認して566件目として追加。

## 今回追加 — 566 天下布武2

- メーカー: **山佐**
- 型式: **天下布武2A** / 検定番号 **1S0066**
- 5号機 / **ボーナス + ART / CZ / 天井あり**
- 導入: **2011-04-15（HAZUSE） / 2011-04-18（K-Navi） CONFLICT**
- 機械割: **96.9 / 98.5 / 100.0 / 104.0 / 109.0 / 115.0%**
- BIG/REG: 設定1 **1/512.0** → 設定6 **1/420.1〜1/425.6**。設定6はP-WORLDとHAZUSEでCONFLICT。
- ボーナス合算: **1/256.0 → 1/210.0〜1/212.8**
- ART純増: **約+1.5枚/G**
- 覚醒: **20〜100G** / 天下モード: **30G or 130G** / 真・天下: **10/20/50G** / 極・天下: **200G**
- BIG最大約**210枚** / REG約**48枚**
- 第1天井: **ボーナス間993G+前兆 → 覚醒2個**
- 第2天井: **ボーナス間1575G+前兆 → 覚醒5個**
- 50枚ベースと設定別ART初当りは検索語・資料系統を変えて再探索後も比較可能値を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7 — 天下布武2

- `settingChangeBehavior`: **CEILING_GAME_COUNT_CLEARED_CONFIRMED / OTHER_INTERNAL_STATE_UNVERIFIED**
- `carryOverBehavior`: **CEILING_PROGRESS_CARRIED_WHEN_UNCHANGED / OTHER_STATE_UNVERIFIED**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**
- `ceilingAfterReset`: **NORMAL_993G_AND_1575G_FROM_RESET / NO_SHORTENING_CONFIRMED_AFTER_RESEARCH**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **PREVIOUS_CEILING_PROGRESS_LOST**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `numericResetData`: **993G+前兆 / 1575G+前兆、設定変更で天井ゲーム数クリア**

CrankySevenとpacnkで設定変更時の天井ゲーム数クリアを照合。単純電源OFF→ON、ARTストック/CZ/前兆/高確の変更時処理、ガックン等の変更判別は本機固有の直接資料を確定できず推測補完していない。

## 主要出典 — 566（取得日 2026-09-04）

- HAZUSE: `https://hazuse.com/machine/pachislot/1S0066/`
- K-Navi: `https://p-kn.com/slot/1396/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6301`
- CrankySeven: `https://crankyseven.com/tenkafubu2-pc.htm`
- pacnk: `https://pacnk.com/slot/tools/sh_tenkafubu2.html`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1794/1/28572`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/179/yamasa_slot_179.php`

## 今回のGitHub更新

- 566追加: `docs/real_machine_db/machines/2011-04-15_tenka-fubu2.md`
- 566 machine record commit: `76dfaf082f9be36d1990fc48f754840657b6d773`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 566 / chronologicalFrontier 2011-04-15**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 566レコードを再取得。
2. **2011-04-15同日群および4/16〜17境界を最終監査**。同日以前の未登録5号機があれば最古から567件目として追加。
3. 境界が閉じたら **2011-04-18同日群**へ進む。強い次候補は **「パチスロ装甲騎兵ボトムズ」**。天下布武2は566で登録済みなので重複追加しない。
4. その後は4/19〜23境界を監査し、4/24納品予定「メーメーパラダイス」等へ時系列で継続。
5. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
