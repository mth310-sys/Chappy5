machineName: 神の左手 悪魔の右目
manufacturer: ハイライツ・エンタテインメント
releaseDate: 2017-08-21
recordNumber: 1123
generation: 5号機
systemType: A+ART / CZ / リアルボーナス
formalModelName: 神の左手悪魔の右目／HC
certificationNumber: 7S0201
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 2017-06-23の業界発表で、ハイライツ・エンタテインメントのオリジナルART機として発表されたことを確認。
- パチビー、K-Navi、ちょんぼりすた、複数の2017年導入カレンダーで **2017-08-21** 導入が一致するため canonical releaseDate とする。
- 鹿児島県公報（平成29年6月13日 第3322号）で回胴式遊技機 **神の左手悪魔の右目／HC**、製造者 **ハイライツ・エンタテインメント株式会社**、検定番号 **7S0201** を直接確認。
- P-WORLDはメーカー欄を「アイゲート」と表記するため、製造者について資料差がある。ただし公的検定資料と当時の発売発表はハイライツ・エンタテインメントで一致するため canonical manufacturer はハイライツとし、P-WORLD表記は conflicts に保持する。
reliability: PUBLIC_OFFICIAL_FOR_FORMAL_MODEL_AND_CERTIFICATION / INDUSTRY_HIGH_FOR_MANUFACTURER_AND_RELEASE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE

## payoutRateBySetting
- 設定1: **97.9%**
- 設定2: **99.4%**
- 設定3: **101.9%**
- 設定4: **103.7%**
- 設定5: **106.1%**
- 設定6: **109.1%**
- ちょんぼりすた、すろぱちくえすと、期待値見える化、2017年導入カレンダーで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART/RUSH初当たり
- 設定1: **1/250.9**
- 設定2: **1/243.4**
- 設定3: **1/229.4**
- 設定4: **1/210.1**
- 設定5: **1/193.4**
- 設定6: **1/173.3**

### リアルボーナス
- 全設定: **1/862.8**。
- 業界発表はART初当たり約1/250.9〜約1/173.3、複数解析は設定別値とボーナス1/862.8で一致。
reliability: INDUSTRY_HIGH_FOR_ART_RANGE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_PRECISE_VALUES

## baseGamesPer50
- **約38.9G/50枚**（約39G/50枚表記あり）。
- ちょんぼりすた、期待値見える化、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART: **約1.9枚/G**。
- 2017-06-23業界発表、パチビー、P-WORLD、複数解析で一致。
reliability: INDUSTRY_HIGH / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「神RUSH」: **1セット40G**、継続率管理＋セットストック型。
- ART「悪RUSH」: **25G以上**、ゲーム数上乗せ型。
- ART「生命の神秘」: 神RUSH/悪RUSH双方の性能を併せ持つ上位ART。
- リアルボーナス獲得枚数は、パチビー/P-WORLDが **約150枚**、すろぱちくえすとが **175枚** とするため **CONFLICT_150_VS_175**。平均せず両方保持する。
reliability: INDUSTRY_HIGH_FOR_ART_STRUCTURE / CONFLICT_FOR_REAL_BONUS_PAYOUT

## modeSpecificMinimumData
- 通常時はレア役および全8種類のCZからARTを目指す。CZトータルART期待度は約33〜35%の資料表記差があるため、本DBではゲーム性説明値としてのみ保持し物差しの精密値には使わない。
- 通常天井: **ボーナス・ART間999GでART当選**。
- 実戦集計では100G・300G・600G付近に初当たりの山が観測されているが、解析上の固定当選率とは分離する。
reliability: INDUSTRY_HIGH_FOR_SYSTEM / ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING / OBSERVATIONAL_FOR_ZONE_DATA

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_SHORTENED_CEILING_AND_NUMERIC_STATE_DISTRIBUTION
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は通常 **999G** のボーナス・ART間天井が **500Gに短縮**。
- 設定変更時の内部状態は、通常A / 通常B / 通常C / 高確 / 超高確の5状態から設定別に再抽選される公開振り分けあり。
- 設定変更時ステージの直接仕様は、表記揺れ・型式名・朝一・リセット・ステージ等へ検索を変え、当時解析・古いDBを横断したが今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SHORTENED_CEILING / ANALYSIS_SINGLE_DIRECT_NUMERIC_TABLE_FOR_STATE_DISTRIBUTION / UNVERIFIED_FOR_STAGE

### carryOverBehavior
- 据え置き時のG数天井は **引き継ぎ** とする当時解析の直接表あり。
- 据え置き時の内部状態・CZ連続性等の完全な本機固有契約は直接固定できず **UNVERIFIED_AFTER_RESEARCH**。純電源OFF→ON表から推測転記しない。
reliability: ANALYSIS_HIGH_DIRECT_FOR_GAME_COUNTER / UNVERIFIED_AFTER_RESEARCH_FOR_OTHER_STATE

### powerCycleBehavior
- 純電源OFF→ON時の天井は **据え置き/CARRYOVER** とする当時解析の直接表あり。
- 純電源OFF→ON時の内部状態・液晶ステージは当時解析でも「調査中」で、その後の表記揺れ・電源OFF/ON・電断・復電・朝一検索でも直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_FOR_GAME_COUNTER / UNVERIFIED_AFTER_RESEARCH_FOR_STATE_AND_STAGE

### gameCounterReset
- 設定変更: **RESET_AND_SHORTEN_TO_500G**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常天井: **999G**。
- 設定変更時天井: **500G**。
- 短縮幅: **499G**。
- 天井恩恵: **ART当選**。
- ちょんぼりすた、すろぱちくえすと、P-WORLD、期待値見える化で500G短縮を照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 朝一専用の別名称モードやモード移行テーブルは **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更時は下記の内部状態5段階を設定別に再抽選するため、朝一状態は設定依存。
reliability: ANALYSIS_SINGLE_DIRECT_NUMERIC_TABLE / NONE_CONFIRMED_AFTER_RESEARCH_FOR_SEPARATE_MODE

### stateAfterReset
- 設定変更時状態振り分け:
  - 設定1: 通常A **65.2%** / 通常B **12.5%** / 通常C **12.5%** / 高確 **9.4%** / 超高確 **0.4%**
  - 設定2: 通常A **59.4%** / 通常B **12.5%** / 通常C **12.5%** / 高確 **12.5%** / 超高確 **3.1%**
  - 設定3: 通常A **53.1%** / 通常B **12.5%** / 通常C **12.5%** / 高確 **15.6%** / 超高確 **6.3%**
  - 設定4: 通常A **46.9%** / 通常B **12.5%** / 通常C **12.5%** / 高確 **15.6%** / 超高確 **12.5%**
  - 設定5: 通常A **40.6%** / 通常B **12.5%** / 通常C **12.5%** / 高確 **15.6%** / 超高確 **18.8%**
  - 設定6: 通常A **28.1%** / 通常B **15.6%** / 通常C **15.6%** / 高確 **15.6%** / 超高確 **25.0%**
- 設定6は丸め合計99.9%。高設定ほど高確以上開始率が上昇する。
- 純電断・据え置き時の内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_DIRECT_NUMERIC_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一恩恵は **999G→500Gの天井短縮**。
- さらに高設定ほど設定変更時に高確/超高確へ入りやすい。高確以上合算は、設定1 **9.8%** / 設定2 **15.6%** / 設定3 **21.9%** / 設定4 **28.1%** / 設定5 **34.4%** / 設定6 **40.6%**（公開振り分けから単純合算）。
- 上記合算は原表の高確＋超高確を足した派生値であり、原データとは区別する。
reliability: ANALYSIS_HIGH_FOR_SHORTENED_CEILING / DERIVED_FROM_ANALYSIS_SINGLE_DIRECT_TABLE_FOR_HIGH_PLUS_SUPERHIGH

### resetPenalties
- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 後年のリセット狙い整理資料ではガックンを **「不可？」** とするが、疑問符付きで本機固有の確定契約ではないため **POSSIBLE_NO_GAKKUN_NONDETERMINISTIC** とする。
- 朝一ステージによる設定変更判別は直接仕様未確認。
- 500G天井到達自体は事後的には設定変更を強く示唆し得るが、遊技開始時点の確定判別ではない。
reliability: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_GAKKUN / UNVERIFIED_FOR_STAGE_DETECTION

### numericResetData
- normalCeiling: **999G**
- resetCeiling: **500G**
- resetCeilingShortening: **499G**
- resetStateSetting1: **A65.2 / B12.5 / C12.5 / high9.4 / superHigh0.4%**
- resetStateSetting2: **A59.4 / B12.5 / C12.5 / high12.5 / superHigh3.1%**
- resetStateSetting3: **A53.1 / B12.5 / C12.5 / high15.6 / superHigh6.3%**
- resetStateSetting4: **A46.9 / B12.5 / C12.5 / high15.6 / superHigh12.5%**
- resetStateSetting5: **A40.6 / B12.5 / C12.5 / high15.6 / superHigh18.8%**
- resetStateSetting6: **A28.1 / B15.6 / C15.6 / high15.6 / superHigh25.0%**
- resetHighOrSuperHighDerived: **setting1 9.8 / setting2 15.6 / setting3 21.9 / setting4 28.1 / setting5 34.4 / setting6 40.6%**
- resetStage: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- manufacturer label: 公的検定資料・当時発売発表は **ハイライツ・エンタテインメント**、P-WORLDは **アイゲート**。canonicalは公的/当時一次寄りのハイライツ。
- real bonus payout: パチビー/P-WORLD **約150枚** vs すろぱちくえすと **175枚**。定義差の可能性もあるが直接解消できないため **CONFLICT_150_VS_175**。
- CZ ART期待度: 業界記事 **33%**、P-WORLD **約35%**。物差し主要値ではないため両表記をゲーム性参考として保持。

## missingFields
- setting-change start stage: UNVERIFIED_AFTER_RESEARCH。
- explicit stay-setting internal-state direct contract: UNVERIFIED_AFTER_RESEARCH。
- pure power-cycle internal-state/stage contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic gakkun/reset-detection contract: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- 鹿児島県公報 平成29年6月13日 第3322号（型式/製造者/検定番号）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1706/documents/59758_20170612150613-1.pdf
- グリーンべると 発表記事（2017-06-23）: https://web-greenbelt.jp/00009703/
- パチ7 / プレイグラフ 発売発表・型式名: https://pachiseven.jp/news/index/page%3A64
- パチビー: https://www.pachibee.jp/machines/lecture/217070004
- K-Navi: https://p-kn.com/slot/2841/
- P-WORLD: https://www.p-world.co.jp/machine/database/8445
- ちょんぼりすた 天井/スペック/朝一/設定変更状態振り分け: https://chonborista.com/slot/high-enter/41803/
- すろぱちくえすと スペック/朝一/天井: https://www.slopachi-quest.com/article/the-god-or-devil/
- 期待値見える化 天井/ゾーン: https://slotjin.com/zone/kamiaku/
- 朝一リセット狙い整理（ガックン「不可？」）: https://sin-surobi.com/tatimawari/20388/
- 2017年導入日一覧（8/21群監査）: https://moge-site.com/new-slot2017
- 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
