# キングハナハナ-30

recordNo: 1554
machineName: キングハナハナ-30
manufacturer: パイオニア
formalModel: SキングハナハナSP-30
inspectionCode: 2S1569
releaseDate: 2023-03-20
generation: 6号機 / 30Φメダル機
systemType: ノーマル / 完全告知Aタイプ
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.0%
- 設定2: 99.0%
- 設定3: 101.0%
- 設定4: 104.0%
- 設定5: 107.0%
- 設定6: 110.0%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BIG
- 設定1: 1/292
- 設定2: 1/280
- 設定3: 1/268
- 設定4: 1/257
- 設定5: 1/244
- 設定6: 1/232

### REG
- 設定1: 1/489
- 設定2: 1/452
- 設定3: 1/420
- 設定4: 1/390
- 設定5: 1/360
- 設定6: 1/332

### ボーナス合算
- 設定1: 1/183
- 設定2: 1/172
- 設定3: 1/163
- 設定4: 1/154
- 設定5: 1/145
- 設定6: 1/136

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約39.9G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- NOT_APPLICABLE（ノーマルタイプ）。

## basicPayout
- BIG CHANCE: 最大260枚。
- REG CHANCE: 最大120枚。
- BIGは20G、REGは10Gで消化。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 完全告知ノーマルタイプで、AT/CZ・ゲーム数モード・ゾーン・天井は非搭載。
- ハイビスカス点灯でボーナス告知。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_RESEARCH_EXHAUSTED_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- ノーマルタイプで天井・ゲーム数モード・有利区間を使用しないため、これらのリセット恩恵はNOT_APPLICABLE。
- 設定変更時の本機固有の成立済みボーナスフラグ/告知待ち状態の扱いは、正式型式・メーカー・シリーズ名を含め再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 天井・ゲーム数・モード・有利区間はNOT_APPLICABLE。
- 据え置き時の成立済みボーナスフラグ/告知状態の機種固有直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 天井・ゲーム数・モード・有利区間はNOT_APPLICABLE。
- 純電源OFF→ON時の成立済みボーナスフラグ/告知状態の機種固有直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- NOT_APPLICABLE（ゲーム数天井非搭載）。

### ceilingAfterReset
- 天井非搭載。リセット短縮天井なし。

### modeAfterReset
- NOT_APPLICABLE（AT/CZ用の通常モード・天国モード等を持たないノーマル機）。

### stateAfterReset
- 本機固有の設定変更/据え置き/純電源OFF→ONでの成立済みボーナスフラグ・告知待ち状態の直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- NOT_APPLICABLE（ノーマルタイプ）。
- 有利区間ランプを用いた変更判別も対象外。

### resetBenefits
- 設定変更専用の朝一恩恵・短縮天井・専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ノーマル機のためゲーム数/天井挙動による判別材料なし。
- 本機固有リールガックンは複数解析で「調査中」扱い。正式型式 `SキングハナハナSP-30`、パイオニア、ハナハナ、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンを組み替えて再探索したが、発生条件・有効性を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- フェザーランプ/REG中サイドランプは設定示唆であり、設定変更判別とは分離する。

### numericResetData
- 天井: 非搭載。
- 設定変更専用の公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `キングハナハナ-30 / SキングハナハナSP-30 / パイオニア / ハナハナ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 有利区間 / 変更判別` を組み替えて検索。
- パイオニア発表系、遊技日本/P-WORLD、P-WORLD機種DB、パチ＆スロ必勝本、イマカチ、旧解析/実機DBを横断。

## conflicts
- 5号機旧作にも同名「キングハナハナ-30」が存在する。2011年版のBIG/REG/機械割は本レコードへ混入させない。
- パチ＆スロ必勝本の本文に「2022年3月20日導入」とする誤記があるが、同機は2023年機であり、P-WORLD・遊技日本・複数解析・3/20導入群資料が2023-03-20で一致するためcanonicalは2023-03-20。

## sources
取得日: 2026-09-13

- 遊技日本 / P-WORLD 発売発表: https://news.p-world.co.jp/articles/22755
  - 型式名SキングハナハナSP-30、パイオニア、30φノーマル、BIG260枚、設定6出玉率110%、3月下旬導入予定。
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/22712/nippon
  - SキングハナハナSP-30 / パイオニアの検定通過。
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9783
  - 検定番号2S1569、型式SキングハナハナSP-30、2023-03-20、6号機30Φノーマル、97〜110%、BIG最大260枚、REG最大120枚。
- 遊技日本/P-WORLD 機種紹介: https://news.p-world.co.jp/articles/22771/nippon
  - 設定別BIG/REG/合算/出玉率、BIG260枚、REG120枚。
- パチビー: https://www.pachibee.jp/machines/index/223020003
  - 2023-03-20、設定別BIG/REG/合算/機械割、最大獲得枚数。
- イマカチ: https://imakati.jp/king-hanahana30
  - 2023-03-20、39.9G/50枚、天井なし、朝一ガックン調査中。
- パチ＆スロ必勝本 実戦値: https://p.hisshobon.jp/machine/4050/1/94253
  - 50枚あたり平均39.9G。

missingFields:
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナスフラグ・告知待ち状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
