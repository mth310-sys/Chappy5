# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **568**
- latestMachineAdded: **メーメーパラダイス**（ラスター / 2011-04-24納品開始予定）
- latestRecord: `docs/real_machine_db/machines/2011-04-24_me-me-paradise.md`
- chronologicalFrontier: **2011-04-24**
- frontierLatestExactDateMachine: **メーメーパラダイス**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、567前線レコード「パチスロ装甲騎兵ボトムズ」を再取得して開始。
- `INDEX.md` は旧19件地点のため、最新 `LATEST_HANDOFF.md` と実machineレコードを進捗正本として使用。
- 2011-04-18同日群と4/19〜23境界を再監査し、直前handoff既知候補「メーメーパラダイス」をrepo検索。未登録を確認。
- グリーンべると2011-04-11記事で「納品は4月24日開始予定」を再確認。P-WORLD現行機種DBは導入開始日空欄のため、業界記事の具体的納品開始予定日を時系列キーに採用。
- P-WORLDと業界記事でBIG/REG端値・獲得枚数を照合し、568件目として追加。

## 今回追加 — 568 メーメーパラダイス

- メーカー: **ラスター / ウィンネットテクノロジー発表**
- 型式: **ザコクチシリーズ** / 検定番号 **0S0846**
- 5号機 / **ノーマル / 完全告知 / BIG+REG**
- 納品開始予定: **2011-04-24（グリーンべると）**
- 機械割: **96.32 / 97.78 / 100.42 / 103.04 / 105.48 / 110.21%**
- BIG: **1/287.44 / 1/282.48 / 1/282.48 / 1/273.07 / 1/273.07 / 1/249.19**
- REG: **1/455.11 / 1/442.81 / 1/348.60 / 1/321.25 / 1/268.59 / 1/249.19**
- 合算: **1/176.17 / 1/172.46 / 1/156.04 / 1/147.60 / 1/135.40 / 1/124.59**
- BIG約**312枚** / REG約**104枚**
- 完全告知。「ME～ME～!ランプ」点灯でボーナス確定。
- 50枚ベースは検索語・資料系統を変えて再探索後も比較可能な直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7 — メーメーパラダイス

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_BEHAVIOR**
- `carryOverBehavior`: **NOT_APPLICABLE_FOR_CEILING_MODE / LOW_LEVEL_STATE_UNVERIFIED**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_BEHAVIOR**
- `gameCounterReset`: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**
- `modeAfterReset`: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**
- `stateAfterReset`: **NOT_APPLICABLE_FOR_HALL_AI_RELEVANT_STATE / LOW_LEVEL_UNVERIFIED**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `numericResetData`: **設定変更専用短縮天井NOT_APPLICABLE / 朝一特定G以内当選率・恩恵率NONE_CONFIRMED_AFTER_RESEARCH**

本機はボーナスのみで出玉を構成するノーマル完全告知機。天井・ART/AT/CZ・長期通常モードは確認されず、ホール経営/朝一客AIに関わるゲーム数持越し・短縮天井・朝一モードは実質対象外。一方、ガックン・初期出目・単純電源OFF→ON等の低レベル挙動は本機固有の直接資料を確定できないため一般論で補完していない。

## 主要出典 — 568（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00002007/`
- P-WORLD業界ニュース転載: `https://news.p-world.co.jp/articles/4590/greenbelt`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6336`

## 今回のGitHub更新

- 568追加: `docs/real_machine_db/machines/2011-04-24_me-me-paradise.md`
- 568 machine record commit: `fb89ea26395c7dab0bb44d1f5cbbe4589e8d60f2`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 568 / chronologicalFrontier 2011-04-24**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 568レコードを再取得。
2. **2011-04-24同日群を最終監査**。同日未登録5号機があれば最古から569件目として追加。
3. 同日群が閉じたら **4/25〜5/1境界**を監査し、具体的ホール導入/納品日を確認できる最古未登録機へ進む。
4. 先行候補としてP-WORLD近接掲載の「ドラゴノーツ～ザ・レゾナンス～」「雀龍桜花」等があるが、`雀龍桜花`はKPE公式が2011年5月稼働、グリーンべるとが5/29納品開始予定とするため、4月キューへ前倒ししない。各候補は必ず実導入/納品日の具体日を再確認してから採用する。
5. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて十分に再探索し、競合は平均せずCONFLICT。
