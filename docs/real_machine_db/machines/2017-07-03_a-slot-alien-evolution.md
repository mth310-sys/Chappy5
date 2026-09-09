machineName: A-SLOTエイリヤンエボリューション
manufacturer: サミー
releaseDate: 2017-07-03
recordNumber: 1101
generation: 5号機
systemType: A+RT / ボーナス主体 / 技術介入RT
formalModelName: エイリヤンエボリューション／XR
certificationNumber: 7S0001
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `エイリヤンエボリューション／XR`、検定番号 `7S0001`、メーカーSammy、導入開始日2017-07-03を確認。
- PiDEA Xの2017-05-17業界記事で、2017-05-16にサミー東京支店ショールームで内覧会を開催、A-SLOTのノーマルタイプベース+RT機、7月3日開店予定を確認。
- ちょんぼりすた、すろぱちくえすと、パチ7、2017年導入カレンダーでも2017-07-03導入が一致。
reliability: INDUSTRY_DATABASE_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
### 通常掲載値
- 設定1: **98.0%**
- 設定2: **99.9%**
- 設定5: **103.0%**
- 設定6: **105.2%**

### フル攻略時
- 設定1: **100.0%**
- 設定2: **101.8%**
- 設定5: **104.9%**
- 設定6: **107.1%**
- 4段階設定（1/2/5/6）。HAZUSE、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### PREMIUM BIG
- 設定1: **1/5041.2**
- 設定2: **1/5041.2**
- 設定5: **1/5041.2**
- 設定6: **1/4369.1**

### HYPER BIG
- 設定1: **1/630.2**
- 設定2: **1/606.8**
- 設定5: **1/585.1**
- 設定6: **1/565.0**

### BIG
- 設定1: **1/585.1**
- 設定2: **1/565.0**
- 設定5: **1/528.5**
- 設定6: **1/512.0**

### REG
- 設定1: **1/590.4**
- 設定2: **1/532.8**
- 設定5: **1/478.4**
- 設定6: **1/464.8**

### ボーナス合算
- 設定1: **1/192.8**
- 設定2: **1/182.0**
- 設定5: **1/169.8**
- 設定6: **1/163.8**
- HAZUSE、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE設定別レンジ: **約37.3〜38.6G/50枚**。
- 複数解析の代表値: **約37〜37.3G/50枚**。
- 設定差を含む精密レンジを保持し、比較用代表値は約37.3G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- RTはボーナス後の「コンタクトゾーン」→「レイブモード」で構成される。
- 当時/後年解析ではRTを**ほぼ現状維持型**と説明する資料があるが、比較可能な正確な純増○枚/Gは今回の再探索で直接固定できなかった。
- exactRtNetIncreasePerGame: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RT_STRUCTURE / UNVERIFIED_FOR_EXACT_NET_INCREASE

## basicPayout
- PREMIUM BIG: **最大303枚 + RT100G**。
- HYPER BIG: **最大303枚 + RT**。
- BIG: **最大209枚 + RT**。
- REG: **最大110枚 + RT**。
- PiDEA Xの業界記事とHAZUSE、すろぱちくえすと、ちょんぼりすたで一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- **天井非搭載**。
- 全ボーナス終了後に最大20GのRT「コンタクトゾーン」へ突入。
- コンタクトゾーン中の移行リプレイ等から20G/50Gの「レイブモード」へ移行。PREMIUM BIG後は100G RT。
- コンタクトゾーンは技術介入で延命可能。詳細な押し順内部抽選は物差しDB対象外。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_CEILING_WITH_LIMITED_DIRECT_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機はA+RTで**天井非搭載**のため、通常ゲーム数天井のリセットはNOT_APPLICABLE。
- 設定変更時のRT内部状態の保持/初期化、液晶状態の初期化を変数単位で明記した本機固有の当時直接表は、機種名・型式・メーカー名と「設定変更/リセット/朝一/RT/状態」へ検索語を変えて再探索しても固定できなかった。
- directRtStateContract: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_RT_STATE_RESET_CONTRACT

### carryOverBehavior
- 据え置き時に引き継ぐゲーム数天井は存在しない。
- 本機固有の据え置き時RT状態/表示状態を明記した独立資料は固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なA+RT機やサミー機の挙動から推定しない。
reliability: NOT_APPLICABLE_FOR_CEILING / UNVERIFIED_FOR_RT_STATE

### powerCycleBehavior
- 電源OFF→ONのみの場合に、RT状態・液晶状態をどのように扱うかを本機固有で直接明記した資料は今回固定できなかった。
- **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 通常時に宵越し対象となるゲーム数天井は非搭載。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用の短縮天井も存在対象なし。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 通常時にゲーム数解除モード/天井モードを持つタイプではなく、設定変更専用の朝一モードや解除モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- RT状態そのものの設定変更契約はstateAfterReset側で別管理する。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASS / UNVERIFIED_FOR_ANY_UNPUBLISHED_SPECIAL_MODE

### stateAfterReset
- 低確/高確を主要初当たり管理に用いるAT/ART型ではない。
- ただしRT状態は存在するため、その設定変更時・据え置き時・純電断時の内部保持/初期化を推測せず **UNVERIFIED_AFTER_RESEARCH** とする。
reliability: UNVERIFIED_FOR_DIRECT_RT_STATE_CONTRACT

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、高確スタート、朝一専用モード、初当たり優遇などの設定変更専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井非搭載のため天井リセット恩恵もNOT_APPLICABLE。
reliability: ANALYSIS_HIGH_FOR_SYSTEM / UNVERIFIED_FOR_ANY_UNPUBLISHED_BENEFIT

### resetPenalties
- ゲーム数天井進捗消滅などの主要リセット不利は **NOT_APPLICABLE_NO_CEILING**。
- RT中閉店→設定変更のRT状態扱いは直接契約未確認のため、不利/恩恵として断定しない。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_RT_STATE

### resetDetection
- すろぱちくえすとの当時解析は設定変更時について「**ガックンでの変更判別は有効の可能性大**」と記載。
- これは確定挙動ではなく可能性評価なので、**POSSIBLE_GAKKUN_INDICATOR_NOT_DETERMINISTIC** として保持する。
- 本機固有のガックン発生率、据え置き時にも起こり得る条件、対策後挙動など比較可能な公開数値は確認できなかった。
reliability: ANALYSIS_SINGLE_FOR_POSSIBLE_GAKKUN / UNVERIFIED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- settingChangeCeiling: **NOT_APPLICABLE_NO_CEILING**。
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON** for canonical contemporaneous/analysis sources.
- retrospectivePayoutConflict: 5号機クロニクルにはHYPER BIG最大350枚/BIG最大259枚/REG最大103枚という記述があるが、PiDEA X当時業界記事・HAZUSE・複数当時解析は303/209/110枚で一致するため、後年回顧側を **CONFLICT_SOURCE_MISMATCH** としてcanonicalから除外。
- baseGamesDefinition: 約37G / 37.3G / 設定別37.3〜38.6Gは代表値と設定別精度差であり、実質的な数値競合として扱わない。

## missingFields
- manufacturer-official archived product page content directly retrievable in current research: UNVERIFIED_AFTER_RESEARCH。
- exact RT net increase per game: UNVERIFIED_AFTER_RESEARCH。
- direct setting-change RT-state contract: UNVERIFIED_AFTER_RESEARCH。
- direct carry-over/power-cycle RT-state contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun probability/condition: UNVERIFIED_AFTER_RESEARCH。
- reset-specific numeric benefit/mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. HAZUSE A-SLOTエイリヤンエボリューション — https://hazuse.com/machine/pachislot/7S0001/
2. HAZUSE 初打講座 — https://hazuse.com/machine/pachislot/7S0001/genre/203/
3. PiDEA X「女子高生と『エイリヤン』技術介入RTを搭載／サミー」（2017-05-17） — https://www.pidea.jp/articles/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%A8%E3%80%8C%E3%82%A8%E3%82%A4%E3%83%AA%E3%83%A4%E3%83%B3%E3%80%8D%E6%8A%80%E8%A1%93%E4%BB%8B%E5%85%A5RT%E3%82%92%E6%90%AD%E8%BC%89%EF%BC%8F%E3%82%B5%E3%83%9F%E3%83%BC
4. すろぱちくえすと — https://www.slopachi-quest.com/article/aliyan-evolution/
5. ちょんぼりすた — https://chonborista.com/slot/sammy-slot/39693/
6. パチ7 — https://pachiseven.jp/machines/5190/
7. すろかい — https://slotkaiseki.hatenablog.com/entry/eiriyan
8. 2017年度新台カレンダー — https://slotnews777.blog.fc2.com/blog-entry-3121.html
9. 5号機クロニクル サミー一覧（後年回顧・獲得枚数競合確認用） — https://5goki.com/sammy
