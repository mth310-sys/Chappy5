# No.1200 ちゃぶ台返し

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL`
- machineName: ちゃぶ台返し
- alternateName: 怒れ！ちゃぶ台返し
- manufacturer: ベルコ
- releaseDateCanonical: 2018-06-04
- generation: 5.9号機 / 5号機
- systemType: ノーマルA / 完全告知
- formalModelName: `チャブダイ/A1`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- DMMぱちタウン、ちょんぼりすた、すろぱちくえすとで2018-06-04一致。
- PiDEA Xの導入前機械選定記事では納品6/3～。ホール導入日として2018-06-04をcanonical採用。
- ベルコ公式は「2018年6月登場」。

## performanceCore

### payoutRateBySetting
- setting1: 98.0%
- setting2: 99.5%
- setting3: 101.5%
- setting4: 104.0%
- setting5: 107.0%
- setting6: 110.2%

ベルコ公式、PiDEA X、複数解析で整合。

### initialHitBySetting
ボーナス合算:
- setting1: 1/165
- setting2: 1/150
- setting3: 1/149
- setting4: 1/141
- setting5: 1/134
- setting6: 1/123

### bonusSplitBySetting
- BIG個別確率: `UNVERIFIED_AFTER_RESEARCH`
- REG個別確率: `UNVERIFIED_AFTER_RESEARCH`
- 当時解析では2018-07-11時点でも個別BIG/REG確率は「調査中」。後年の読者投稿値は確認できるが、機種レコードのcanonical値に採用できる信頼度ではないため転記しない。

### baseGamesPer50
- setting1: 35.8G/50枚
- setting2: 35.6G/50枚
- setting3: 36.2G/50枚
- setting4: 36.6G/50枚
- setting5: 36.8G/50枚
- setting6: 36.9G/50枚

### netIncrease
- `NOT_APPLICABLE_NORMAL_A_TYPE`

### basicPayout
- BIG: 312枚
- REG: 104枚

### ceiling
- 通常ゲーム数天井: 非搭載。

## modeSpecificMinimumData
- ボーナス成立ゲームで100%告知する完全告知ノーマル。
- 通常時はイラっとちゃぶ台 / 怒気っとちゃぶ台 / バカっとちゃぶ台の3演出モードを任意選択。
- AT/ART/CZなし。

## resetBehavior

### settingChangeBehavior
- 設定変更時の成立済みボーナス状態、演出モード初期化、初期出目などを本機固有に直接示す資料は、機種名・型式・メーカーを用いた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時を純電断と分離した本機固有の状態契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時の成立済みボーナス/演出モード/初期表示契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_RELEASE`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- ゲーム数解除モード/朝一専用モード: `NOT_APPLICABLE`。
- 3種類の演出モードの設定変更時初期選択状態: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART/CZ内部状態: `NOT_APPLICABLE`。
- 成立済みボーナス等の低レベル状態契約: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- ノーマルAタイプで、ホール朝一挙動として比較可能な本機固有の有利区間契約は確認できず `NOT_APPLICABLE_OR_NONE_CONFIRMED`。一般論で補完しない。

### resetBenefits
- 天井短縮: `NOT_APPLICABLE`。
- 設定変更専用の初当たり優遇・ボーナス確率上昇・朝一専用抽選: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン確定契約、設定変更専用の開始表示/ランプ/出目は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- BIG/REG中および終了時には設定示唆が多数存在するが、通常の設定示唆であり設定変更/据え置き判別専用ではないためresetDetectionへ混同しない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- 主要性能コアの採用判断を左右するCONFLICTは今回確認なし。
- 機種名は公式「ちゃぶ台返し」、導入前業界記事に「怒れ！ちゃぶ台返し」表記あり。別スペックではなく表記差として保持。

## missingFields
- 検定番号。
- 設定別BIG/REG個別確率。
- 設定変更/据え置き/純電断時の本機固有状態契約。
- 本機固有の変更判別契約と公開数値。

## sources
取得日: 2026-09-10

1. BELLCO公式 — ちゃぶ台返し
   - https://www.s-bellco.co.jp/products/slot/chabudai/
   - 2018年6月登場、5号機ノーマル完全告知、設定別ボーナス合算。
   - confidence: `OFFICIAL`
2. PiDEA X — 三木流、怒れ！ちゃぶ台返しの評価は？
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E6%80%92%E3%82%8C%EF%BC%81%E3%81%A1%E3%82%83%E3%81%B6%E5%8F%B0%E8%BF%94%E3%81%97%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 納品6/3～、BIG312枚/REG104枚、設定別合算・出玉率。
   - confidence: `INDUSTRY`
3. 娯楽産業 — ベルコ 新機種「ちゃぶ台返し」発表
   - https://www.goraku-sangyo.com/%E3%83%99%E3%83%AB%E3%82%B3%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%81%A1%E3%82%83%E3%81%B6%E5%8F%B0%E8%BF%94%E3%81%97%E3%80%8D%E7%99%BA%E8%A1%A8/
   - BB312枚/RB104枚、設定1/6合算、完全告知。
   - confidence: `INDUSTRY`
4. DMMぱちタウン — ちゃぶ台返し
   - https://p-town.dmm.com/machines/3140/recommend
   - 型式`チャブダイ/A1`、導入2018-06-04、機械割レンジ、獲得枚数。
   - confidence: `ANALYSIS_HIGH`
5. すろぱちくえすと — ちゃぶ台返し
   - https://www.slopachi-quest.com/article/chabudaigaesi/
   - 導入2018-06-04、設定別合算/機械割、設定別50枚ベース、天井非搭載。2018-07-11時点でBIG/REG個別確率調査中。
   - confidence: `ANALYSIS_HIGH`
6. ちょんぼりすた — ちゃぶ台返し
   - https://chonborista.com/slot/belko-slot/57588/
   - 導入2018-06-04、設定別合算/機械割、BIG312枚/REG104枚、天井非搭載。
   - confidence: `ANALYSIS_HIGH`
7. P-WORLD — ちゃぶ台返し
   - https://www.p-world.co.jp/machine/database/8638
   - ノーマル完全告知、BIG312枚、REG104枚。
   - confidence: `ANALYSIS_HIGH`

## confidenceSummary
- identity/release: `ANALYSIS_HIGH`
- performanceCore except BB/RB split: `ANALYSIS_HIGH`
- BB/RB split: `UNVERIFIED`
- resetBehavior: `UNVERIFIED` except N/A fields
