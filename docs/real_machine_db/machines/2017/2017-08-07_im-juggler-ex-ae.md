machineName: アイムジャグラーEX-AE
manufacturer: 北電子
releaseDate: 2017-08-07
recordNumber: 1116
generation: 5号機
systemType: ノーマルA / 完全告知
formalModelName: アイムジャグラーEX-AE／KT
certificationNumber: 7S0393
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT_RESOLVED_TO_OFFICIAL_INDUSTRY_2017_08_07

## identity
- 北電子公式製品一覧は「アイムジャグラーEX-AE」を **2017年8月** 製品として掲載し、設定別BB/RB/合算/出玉率も掲載。
- 北電子公式検定情報は正式型式 **アイムジャグラーEX-AE／KT** を確認できる。
- PiDEA Xの2017-06-23業界記事は、北電子が6月21日に本機を発表し、**導入（開店）日2017-08-07予定** と明記。
- HAZUSEは型式 **アイムジャグラーEX-AE／KT**、検定番号 **7S0393**、導入開始日 **2017-08-07** を掲載。
- K-Naviもホール導入開始 **2017-08-07**。
- ちょんぼりすたのシリーズまとめには本機を **2017-03-06** とする表記があるが、北電子公式製品一覧では2017年3月製品は別機「アイムジャグラーEX AnniversaryEdition」、AEは2017年8月であり、PiDEA/HAZUSE/K-Naviも8/7で一致するため、canonicalは2017-08-07。3/6はシリーズまとめ上の取り違え候補としてCONFLICTに保持する。
reliability: OFFICIAL_AND_INDUSTRY_FOR_RELEASE_MONTH_AND_DATE / OFFICIAL_FOR_MODEL / ANALYSIS_HIGH_FOR_CERTIFICATION

## payoutRateBySetting
- 設定1: **95.9%**
- 設定2: **96.7%**
- 設定3: **98.7%**
- 設定4: **100.8%**
- 設定5: **102.8%**
- 設定6: **105.2%**
- 北電子公式、K-Navi、HAZUSE、複数解析資料で一致。
reliability: OFFICIAL

## initialHitBySetting
### BIG
- 設定1: **1/287.4**
- 設定2: **1/282.5**
- 設定3: **1/282.5**
- 設定4: **1/273.1**
- 設定5: **1/273.1**
- 設定6: **1/268.6**

### REG
- 設定1: **1/455.1**
- 設定2: **1/442.8**
- 設定3: **1/348.6**
- 設定4: **1/321.3**
- 設定5: **1/268.6**
- 設定6: **1/268.6**

### ボーナス合算
- 設定1: **1/176.2**
- 設定2: **1/172.5**
- 設定3: **1/156.0**
- 設定4: **1/147.6**
- 設定5: **1/135.4**
- 設定6: **1/134.3**
- 北電子公式、K-Navi、HAZUSEで一致。
reliability: OFFICIAL

## baseGamesPer50
- 比較用代表値: **約35〜36G/50枚**。
- 当時/後年解析は約35Gまたは約35〜36Gと整理。
- 必勝本はピエロ/ベル取りこぼし前提で設定1〜6 **34.46〜35.82G/50枚**。
- なな徹実戦値はチェリー狙い **34.52〜35.88G**、完全小役奪取 **34.99〜36.39G**。
- 算出条件が異なるため精密値を混ぜず、物差し主値は「約35〜36G」とする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_NOTES

## netIncrease
- ノーマルAタイプのためART/AT純増は **NOT_APPLICABLE**。

## basicPayout
- BIG: **平均約325枚**。
- REG: **平均約104枚**。
- HAZUSEはBIG「336枚を超える払い出しで終了（獲得325枚）」、REG「98枚を超える払い出しで終了（獲得104枚）」と掲載。
- P-WORLD、K-Naviでも約325枚 / 約104枚で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- GOGO!ランプ点灯による完全告知ノーマルタイプ。
- AT/ART/CZ、ゲーム数天井、天国等のゲーム数モードは非搭載。
- HAZUSE、解析資料で天井非搭載を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NORMAL_TYPE_WITH_GAKKUN_PRACTICE_EVIDENCE_AND_LOW_LEVEL_POWER_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ゲーム数天井/ゾーン/朝一専用モード/高確低確を持つ機種ではないため、それらのリセット契約は **NOT_APPLICABLE**。
- 本機固有の設定変更時に成立済みボーナス等の低レベル内部状態がどう扱われるかを明示した直接資料は、機種名/型式と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」を組み替えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一1G目のリール始動時ガックンは変更推測材料として後年のジャグラー専門解析で本機を「ガックン判別○」と整理しているが、100%確定契約/発生率までは固定できない。
reliability: ANALYSIS_SINGLE_PRACTICE_FOR_GAKKUN / UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_CONTRACT

### carryOverBehavior
- 本機は天井/モード/高確状態を持たないため、それらの据え置き引継ぎは **NOT_APPLICABLE**。
- ボーナス成立状態、リール初期状態、前日遊技履歴等を「据え置き」と明記した本機固有の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的ノーマル機挙動から推測して補完しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONについて、天井/ゲーム数モード/高確状態は **NOT_APPLICABLE**。
- 成立済みボーナス、リール初期状態、変更判別用ガックンへの影響を本機固有に直接説明する資料は、当時解析・古いDB・後年回顧まで再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ボーナス履歴表示上のゲーム数はホールデータ表示の問題で、内部天井進捗ではないため本項目に混ぜない。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- リセット短縮天井も天井自体がないためN/A。

### modeAfterReset
- 朝一専用ゲーム数モード/天国モード: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_A_GAMEPLAY**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION

### stateAfterReset
- 高確/低確等の通常時内部状態: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_A_GAMEPLAY**。
- 成立済みボーナス等の低レベル状態については設定変更/純電断の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION / UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_STATE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、朝一高確、CZ優遇、リセット後初当たり確率アップ等の客側出玉恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックンは出玉恩恵ではなく変更推測材料としてresetDetectionへ分離。
reliability: ANALYSIS_HIGH_FOR_NO_PUBLISHED_GAMEPLAY_RESET_BENEFIT

### resetPenalties
- 設定変更専用の公開された出玉上の不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CONFIRMED_PUBLISHED_PENALTY

### resetDetection
- ジャグラー専門の設定判別整理では本機を **ガックン判別○** としており、朝一1G目のリール始動挙動が設定変更推測に利用される。
- ただし本機固有の「設定変更なら必ずガックンする」「純電断では絶対にしない」といった100% deterministicな直接契約や発生率は固定できなかったため、**POSSIBLE_GAKKUN_NONDETERMINISTIC / ANALYSIS_SINGLE_PRACTICE** とする。
- ガックン対策を含むホール側のリール操作等で判別性が変わり得るため、客AIでは確定ではなく推測シグナルとして扱う。
reliability: ANALYSIS_SINGLE_PRACTICE / UNVERIFIED_FOR_DETERMINISTIC_PROBABILITY

### numericResetData
- resetCeiling: **NOT_APPLICABLE**。
- resetModeDistribution: **NOT_APPLICABLE_OR_NONE_CONFIRMED**。
- publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- deterministicGakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- releaseDate: 北電子公式は **2017年8月**、PiDEA/HAZUSE/K-Naviは **2017-08-07**。ちょんぼりすたのシリーズまとめだけ **2017-03-06** とするが、北電子公式の2017年3月製品は別機「アイムジャグラーEX AnniversaryEdition」で、AEは2017年8月。よってcanonicalは **2017-08-07**、3/6は **CONFLICT_SECONDARY_LIKELY_SERIES_AGGREGATION_MISASSIGNMENT_2017_03_06** として保持。
- baseGamesPer50: 約35G、約35〜36G、算出条件付き34.46〜35.82G、実戦値34.52〜36.39Gがある。定義差を尊重し平均せず代表レンジ約35〜36Gとする。

## missingFields
- deterministic machine-specific gakkun probability/100% contract: UNVERIFIED_AFTER_RESEARCH。
- explicit pure power OFF→ON low-level internal state contract: UNVERIFIED_AFTER_RESEARCH。
- explicit stay-setting low-level internal state contract: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- 北電子公式 パチスロ製品情報: https://www.kitadenshi.co.jp/slot/ — 2017年8月製品、設定別BB/RB/合算/出玉率。
- 北電子公式 検定情報: https://www.kitadenshi.co.jp/slot-kentei/imjugglerex-ae/ — 正式型式・地域別検定公示。
- PiDEA X 2017-06-23: https://pidea.jp/articles/%E5%88%9D%E4%BB%A3%E3%83%91%E3%83%8D%E3%83%AB%E5%BE%A9%E5%88%BB%E7%89%88%E3%80%8C%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BCEX%E3%80%8D%E7%99%BA%E5%A3%B2%EF%BC%8F%E5%8C%97%E9%9B%BB%E5%AD%90 — 発売発表、8/7開店予定。
- HAZUSE: https://hazuse.com/machine/pachislot/7S0393/ — 型式、検定番号、導入開始日、機械割、天井非搭載、獲得枚数。
- K-Navi: https://p-kn.com/slot/2839/ — 8/7ホール導入、設定別BB/REG/合算/機械割、約325枚/104枚。
- P-WORLD: https://www.p-world.co.jp/machine/database/8441 — ノーマルタイプ、約325枚/104枚。
- ぱちすろLIFE: https://pachislot-life.com/information/ex-ae/ — 約35G/50枚、設定別スペック、8/7導入。
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3223/1/70622 — 50枚あたり34.46〜35.82G（算出条件付き）。
- なな徹: https://nana-press.com/kaiseki/machine/15/279/ — 50枚あたり実戦値34.52〜36.39G（手順別）。
- 元プロMGジャグラーシリーズ整理: https://www.pachislotblog.tokyo/juggler-series-specmatome/ — 約35〜36G、ガックン判別○。
- ちょんぼりすた ジャグラーシリーズまとめ: https://chonborista.com/slot/kitadenshi/9698/ — スペック照合、2017-03-06表記の競合保持。
- すろぱちくえすと 2017導入一覧: https://www.slopachi-quest.com/article/2017-sindai/ — 8/7群のアイムジャグラーEX-AE/世界でいちばん強くなりたい、7/31群3機の横断監査。
- 2017新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html — 7/31群監査補助。
