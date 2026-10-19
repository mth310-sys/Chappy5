# No.1158 グレートキングハナハナ-25

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: グレートキングハナハナ-25
- aliases: `グレートキングハナハナ`, `グレートキングハナハナ 25Φ`, `グレートキングハナハナ25π`
- manufacturer: パイオニア
- releaseDateCanonical: 2017-11-20
- generation: 5号機（25Φノーマル）
- systemType: ノーマルAタイプ / 完全告知
- formalModelName: `グレートキングハナハナ／EX`
- certificationNumber: `7S0838`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE: 2017-11-20
- パチビー2017年11月導入カレンダー: 2017-11-20
- PiDEA X: 納品予定日2017-11-19（翌日11/20ホール導入と整合）
- パイオニア公式2017年製品一覧: 2017年11月発売
- 業界一次記事: 全国ホールへの納品は11月中旬予定
- 本DBでは実導入日の複数一致から2017-11-20をcanonical。

## performanceCore

### payoutRateBySetting
- setting1: 96%
- setting2: 98%
- setting3: 101%
- setting4: 104%
- setting5: 107%
- setting6: 112%

### bigBonusBySetting
- setting1: 1/299
- setting2: 1/288
- setting3: 1/278
- setting4: 1/268
- setting5: 1/255
- setting6: 1/234

### regularBonusBySetting
- setting1: 1/496
- setting2: 1/468
- setting3: 1/436
- setting4: 1/407
- setting5: 1/374
- setting6: 1/336

### bonusCombinedBySetting
- setting1: 1/186
- setting2: 1/178
- setting3: 1/170
- setting4: 1/161
- setting5: 1/151
- setting6: 1/138

### baseGamesPer50
- 約37G/50枚。
- パイオニア版実機アプリ説明および30Φ同一スペック解析で照合。25Φはゲーム性・スペックを30Φから踏襲した業界説明があり、HAZUSEの25Φボーナス表とも一致。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`

### basicPayout
- BIG: 最大312枚（345枚超払い出しで終了）
- REG: 最大130枚（135枚超払い出しで終了）

### ceiling
- `NONE`。天井機能非搭載。

## modeSpecificMinimumData
- ハイビスカス完全告知のノーマルAタイプ。
- AT/ART/CZ、ゲーム数解除モード非搭載。
- 30Φ版とゲーム性・主要スペックを踏襲した25Φ派生だが、型式`EX`として独立レコード化。

## resetBehavior

### settingChangeBehavior
- ゲーム数天井・内部当選モードは非搭載のため、天井RESET契約は `NOT_APPLICABLE`。
- 設定変更後1回目のBIG終了時のみ専用パネルフラッシュ振り分けが存在。
- 全設定共通で上部パネルのみ37.50%、上下パネル12.50%、合計50.00%でいずれかのパネルフラッシュが発生。

### carryOverBehavior
- 天井・ゲーム数解除がないためゲーム数CARRYOVERの出玉上の意味は `NOT_APPLICABLE`。
- 「据え置き朝一初回BIG」が設定変更専用50%テーブルを使わないことは、設定変更後1回目専用振り分けの存在から区別できるが、据え置き時の低レベル成立状態/87Gレトロサウンド履歴等を直接規定した資料は固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ONのみの際、設定変更後初回BIG専用フラグや87Gレトロサウンド履歴等が保持されるかを直接比較した本機固有資料は、検索語・資料系統を変えても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的Aタイプ挙動から推測して補完しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 設定変更専用のゲーム数モード / 朝一モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 高確/低確やCZ状態等の設定変更専用内部状態は非搭載系統で、公開された朝一状態優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス成立済み等の低レベル状態の変更/電断契約は推測せず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_NORMAL_TYPE_NO_AT_ART_ADVANTAGEOUS_SECTION_GAMEPLAY`

### resetBenefits
- 天井短縮、朝一高確、初当たり優遇などの出玉面恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 情報面では、設定変更後1回目BIG終了時の専用パネルフラッシュが変更推測に利用可能。

### resetPenalties
- 設定変更固有の出玉上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後1回目のBIG終了時は、上部のみ37.50% / 上下12.50%でパネルフラッシュ。合計50%。
- 通常BIG後にもパネルフラッシュが発生するため、朝一フラッシュは設定変更期待度を上げるが確定判別ではない。
- 本機固有のガックン100%契約、初期出目、ランプによる変更確定条件は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
設定変更後1回目BIG終了時パネルフラッシュ（全設定共通）:
- 上部パネルのみ: 37.50%
- 上下パネル: 12.50%
- フラッシュなし: 50.00%
- 何らかのパネルフラッシュ: 50.00%

比較用・通常BIG後パネルフラッシュ（上部のみ / 上下）:
- setting1: 7.32% / 2.44%
- setting2: 7.91% / 2.64%
- setting3: 8.79% / 2.93%
- setting4: 9.67% / 3.22%
- setting5: 10.55% / 3.52%
- setting6: 11.72% / 3.91%

## conflicts
- 導入日の表現はPiDEA Xの「納品11/19予定」と解析/導入カレンダーの「導入11/20」で1日差があるが、納品日とホール導入日の定義差として処理し、releaseDateCanonicalは2017-11-20。
- 性能コア主要値に実質的競合なし。

## sources
取得日: 2026-09-10

1. パイオニア公式 — 2017年製品一覧
   - https://www.slot-pioneer.co.jp/products/2017.html
   - グレートキングハナハナ25Φを2017年11月発売として掲載。30Φは2017年7月で別製品として識別。
   - confidence: `OFFICIAL`

2. HAZUSE — グレートキングハナハナ-25
   - https://hazuse.com/machine/pachislot/7S0838/
   - 導入2017-11-20、型式`グレートキングハナハナ／EX`、検定番号`7S0838`、設定別BB/RB/合算/機械割、最大獲得枚数、天井非搭載、設定変更後1回目BIGの専用パネルフラッシュ37.50%/12.50%。
   - confidence: `ANALYSIS_HIGH`

3. パチマガスロマガ — グレートキングハナハナ-25
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/123/a.php
   - 2017年11月、25Φ、BIG約312枚/REG約130枚、合算1/186〜1/138。
   - confidence: `ANALYSIS_HIGH`

4. 遊技日本 — ハナハナが初の25φ機で登場
   - https://yugi-nippon.com/pachinko-news/post-14688/
   - 2017-09-07内覧会、シリーズ初25Φ、BIG最大312枚/RB最大130枚、全国納品11月中旬予定。
   - confidence: `INDUSTRY`

5. PiDEA X — 25パイに参戦！グレートキングハナハナ
   - https://www.pidea.jp/articles/25%E3%83%91%E3%82%A4%E3%81%AB%E5%8F%82%E6%88%A6%EF%BC%81%E3%80%8C%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%80%8D%EF%BC%8F%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2
   - 25Φ仕様、30Φのゲーム性踏襲、BIG約312枚/REG約130枚、納品11/19予定。
   - confidence: `INDUSTRY`

6. パチビー — 2017年11月導入カレンダー
   - https://www.pachibee.jp/machines/schedule/2017-11
   - 2017-11-20導入群としてグレートキングハナハナ、戦国コレクション3を列挙。
   - confidence: `INDUSTRY`

7. ちょんぼりすた — グレートキングハナハナ30
   - https://chonborista.com/slot/pionia-slot/40070/
   - 30Φ版の約37G/50枚、同一の設定別BB/RB/合算/機械割、BIG312枚/REG130枚、設定変更後1回目BIGの50%パネフラを照合。25Φへ無条件転記せず、25Φ専用HAZUSE・業界資料との一致確認に使用。
   - confidence: `ANALYSIS_HIGH`

8. Apple App Store — 激Jパチスロ グレートキングハナハナ
   - https://apps.apple.com/jp/app/%E6%BF%80j%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A/id1374747903
   - 30Φ/25Φ双方を収録、シリーズ説明でベース約37Gを明示。
   - confidence: `OFFICIAL_DERIVATIVE_APP_DESCRIPTION`

## missingFields
- carryOverLowLevelState: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionGakkun: `UNVERIFIED_AFTER_RESEARCH`

## researchNotes
- `グレートキングハナハナ-25 / グレートキングハナハナ 25Φ / 25π / グレートキングハナハナ／EX`、パイオニア、設定変更、リセット、朝一、据え置き、電源OFF ON、天井、モード、ガックン、パネルフラッシュ、ベースへ検索語を変更。
- 30Φ（2017年7月）と25Φ（2017年11月）を混同せず、型式・導入日・25Φ専用ページを優先して独立採番。
- 純電断や据え置き時の低レベル状態については一般的Aタイプ挙動から推測しない。
