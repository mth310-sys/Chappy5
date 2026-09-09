machineName: 戦国乙女～TYPE-A～
manufacturer: オリンピア
releaseDate: 2017-08-21
recordNumber: 1120
generation: 5号機
systemType: ノーマル / A+RT / BIG後30G RT / 天井非搭載
formalModelName: 戦国乙女Type-A／D5
certificationNumber: 6S1230
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- オリンピア公式製品ページおよび平和2017年機種一覧で「戦国乙女～TYPE-A～」を確認。平和一覧の「登場年月: 2017年06月」は製品登場/発表月の表記として、ホール導入日とは分離する。
- 2017-07-06の平和新機種発表会をパチビー、ニッカンアミューズメント、グリーンべるとが報道。
- ホール導入日は一撃・ちょんぼりすた・すろぱちくえすと・当時記事が **2017-08-21** で一致するためcanonical。HAZUSEは **2017-08-28** とするため `CONFLICT_RELEASE_DATE_2017_08_21_VS_2017_08_28` として保持する。
- 型式名 **戦国乙女Type-A／D5**、検定番号 **6S1230** はHAZUSEで直接確認。
reliability: OFFICIAL_FOR_PRODUCT / INDUSTRY_HIGH_FOR_ANNOUNCEMENT / ANALYSIS_HIGH_MULTI_SOURCE_FOR_2017_08_21 / ANALYSIS_SINGLE_FOR_2017_08_28_CONFLICT / ANALYSIS_HIGH_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
### 市場掲載PAY
- 設定1: **98.0%**
- 設定2: **98.8%**
- 設定3: **100.8%**
- 設定4: **104.7%**
- 設定5: **112.0%**
- 設定6: **114.1%**
- 一撃・ちょんぼりすた・すろぱちくえすとで一致。

### 完全攻略時（一撃掲載）
- 設定1: **99.4%**
- 設定2: **100.1%**
- 設定3: **102.2%**
- 設定4: **104.7%**
- 設定5: **112.0%**
- 設定6: **114.1%**
- 技術介入機のため通常PAYと完全攻略値を別系列で保持し、混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_MARKET_PAY / ANALYSIS_SINGLE_FOR_FULLY_OPTIMIZED_PAY

## initialHitBySetting
### BIG合算
- 設定1: **1/309.1**
- 設定2: **1/318.1**
- 設定3: **1/292.6**
- 設定4: **1/295.2**
- 設定5: **1/242.7**
- 設定6: **1/252.1**

### REG
- 設定1: **1/376.6**
- 設定2: **1/321.3**
- 設定3: **1/358.1**
- 設定4: **1/297.9**
- 設定5: **1/364.1**
- 設定6: **1/254.0**

### ボーナス合算
- 設定1: **1/169.8**
- 設定2: **1/159.8**
- 設定3: **1/161.0**
- 設定4: **1/148.3**
- 設定5: **1/145.6**
- 設定6: **1/126.5**
- 一撃・ちょんぼりすた・すろぱちくえすと・HAZUSEで主要値一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値: **約35G/50枚**。
- 一撃の精密整理では完全攻略時 **35.0～37.7G/50枚（設定1～6）**、適当打ち時 **33.5～36.0G/50枚（設定1～6）**。
- 単一代表値と技術介入条件付きレンジを分離して保存する。
reliability: ANALYSIS_HIGH_FOR_APPROX_35G / ANALYSIS_SINGLE_FOR_PLAYSTYLE_RANGES

## netIncrease
- BIG後RT: **30G**。
- 純増は主要解析で **現状維持程度** とされ、比較可能な精密枚/G値は今回直接固定できず `UNVERIFIED_AFTER_RESEARCH_FOR_EXACT_RT_NET_INCREASE`。
reliability: ANALYSIS_HIGH_FOR_30G_RT / UNVERIFIED_FOR_EXACT_NET_INCREASE

## basicPayout
- BIG: **最大311枚**（技術介入あり）＋終了後RT30G。
- REG: **104枚**。
- 一撃・ちょんぼりすた・すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 天井: **非搭載**。
- 通常時にプレイヤーが選択する告知/演出モードが複数あるが、これは内部当選モードではなく表示/演出選択なのでresetBehaviorの内部モードへ転記しない。
- BIG後RTは30G、ボーナス成立で終了。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_CEILING_RESET_SPECIFIC_INTERNAL_BEHAVIOR_MOSTLY_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井非搭載のため、設定変更時のゲーム数天井RESET/短縮は **NOT_APPLICABLE_NO_CEILING**。
- 設定変更時のRT状態、成立済みボーナス状態、液晶状態について、本機固有の直接契約は「戦国乙女Type-A/D5」「設定変更」「リセット」「RT」「朝一」「ガックン」等へ検索語を変え、当時解析・HAZUSE・一撃・回顧/実機資料を横断したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一撃の専用「天井/設定変更」ページ（2017-08-06更新）は天井非搭載のみを掲載し、設定変更固有挙動を掲載していない。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_RT_AND_DISPLAY_STATE

### carryOverBehavior
- 据え置き時の本機固有RT/ボーナス/液晶状態の直接契約は、設定変更と同様の資料横断後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- HAZUSEには設定示唆抽選上「据え置き or 変更どちらでも可」とする条件があるが、これは設定示唆演出の抽選条件であり、RT・ゲーム数・内部状態の引継ぎ契約として転用しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 中古実機の実動作記述に **電源立ち上げ時にもボーナス、RT引き継ぎ** とのフィールド報告が1件ある。
- ただしメーカー/解析一次表ではなく中古実機出品者の動作報告であり、canonical確定契約に格上げせず `SECONDARY_FIELD_REPORT_POWER_CYCLE_BONUS_AND_RT_CARRYOVER` として補助保存する。
- 高信頼の直接資料が見つかるまでは power-cycle canonical = **UNVERIFIED_AFTER_RESEARCH_WITH_SECONDARY_FIELD_REPORT**。
reliability: ANALYSIS_SINGLE_LOW_SECONDARY_FIELD_REPORT

### gameCounterReset
- ゲーム数天井: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- RT残りゲーム数を設定変更時にどう扱うかは **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_RT_REMAINDER_ON_SETTING_CHANGE

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用の短縮天井・ゲーム数救済: **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 朝一専用の内部モード/設定変更時モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 6種類の告知/演出モードはプレイヤー選択UIであり内部当選モードとみなさない。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 設定変更時の高確/低確等の内部状態再抽選: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_A_PLUS_RT_STRUCTURE**。
- RT状態そのものの設定変更処理は **UNVERIFIED_AFTER_RESEARCH**。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、高確率スタート、初当たり/CZ優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機は天井非搭載ノーマル+A+RTで、公開された朝一数値の主要恩恵は今回確認できない。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶による決定的な設定変更判別は、検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- HAZUSEの設定示唆には「設定4以上（据え置き or 変更どちらでも可）」等があり、当該演出自体は変更/据え置きの二値判別にはならない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_DETERMINISTIC_RESET_DETECTION

### numericResetData
- resetCeilingDistribution: **NOT_APPLICABLE_NO_CEILING**
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetInternalStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- publishedMorningHitRateWithinFixedGames: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitOccurrenceRate: **NONE_CONFIRMED_AFTER_RESEARCH**

## conflicts
- releaseDate: 多数の当時/解析資料は **2017-08-21**、HAZUSEは **2017-08-28**。平均せず `CONFLICT_RELEASE_DATE_2017_08_21_VS_2017_08_28`。canonicalは複数一致かつ当時導入記事のある2017-08-21。
- officialProductMonthVsHallIntroduction: 平和公式2017年機種一覧は **登場年月 2017年06月**。これは製品登場/発表系の月表記として保存し、ホール導入日2017-08-21と同義扱いしない。
- payoutRate: 市場PAYと完全攻略PAYは定義差でありCONFLICTではない。別系列で保持。

## missingFields
- exact RT net increase in medals/G: UNVERIFIED_AFTER_RESEARCH（主要解析は現状維持程度）。
- setting-change RT/bonus/display direct contract: UNVERIFIED_AFTER_RESEARCH。
- explicit stay-setting RT/bonus/display direct contract: UNVERIFIED_AFTER_RESEARCH。
- high-confidence pure power-cycle direct contract: UNVERIFIED_AFTER_RESEARCH_WITH_SECONDARY_FIELD_REPORT。
- machine-specific deterministic reset detection/gakkun: UNVERIFIED_AFTER_RESEARCH。
- public morning-only reset numeric benefit: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- オリンピア公式製品ページ: https://www.olympia.co.jp/newmachine/ps_son/index.html
- 平和 2017年パチスロ機種一覧: https://www.heiwanet.co.jp/products/pachislot/2017/
- パチビー 新機種発表会: https://www.pachibee.jp/pparticles/view/975
- ニッカンアミューズメント 発表会: https://www.nikkansports.com/amusement/pachinko/news/1853734.html
- グリーンべると 発表会: https://web-greenbelt.jp/00009761/
- 一撃 機種概要/スペック: https://1geki.jp/slot/s_sengokuotome_a/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_sengokuotome_a/1/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_sengokuotome_a/3/
- 一撃 小役/50枚ベース: https://1geki.jp/slot/s_sengokuotome_a/4/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_sengokuotome_a/61/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/42240/
- すろぱちくえすと: https://www.slopachi-quest.com/article/sengokuotome-atype/
- HAZUSE 型式/検定/導入日: https://hazuse.com/machine/pachislot/6S1230/
- 当時導入記事補助: https://slotlog.net/archives/24647732.html
- 中古実機の電源ON/OFF動作フィールド報告: https://jp.mercari.com/item/m92317392292
