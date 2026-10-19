machineName: 回胴性ミリオンアーサー
manufacturer: ミズホ（ユニバーサルエンターテインメント系）
releaseDate: 2017-09-04
recordNumber: 1129
generation: 5号機（5.5号機世代）
systemType: A+ART / 40G周期CZ・ゲーム数上乗せ型
formalModelName: 回胴性ミリオンアーサーBN
certificationNumber: 6S0693
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日 **2017-09-04**、メーカー **ミズホ**、型式名 **回胴性ミリオンアーサーBN**、検定番号 **6S0693** を直接確認。
- パチビー、すろぱちくえすと、ちょんぼりすた、当時解析ブログでも2017-09-04導入で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE / ANALYSIS_HIGH_DIRECT_MODEL_AND_CERTIFICATION

## payoutRateBySetting
- 設定1: **98.4%**
- 設定2: **99.6%**
- 設定3: **101.4%**
- 設定4: **104.3%**
- 設定5: **107.1%**
- 設定6: **110.0%**
- ちょんぼりすた、すろぱちくえすと、当時解析ブログで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「エクスカリバーラッシュ」初当たり
- 設定1: **1/326.9**
- 設定2: **1/315.0**
- 設定3: **1/310.6**
- 設定4: **1/269.7**
- 設定5: **1/260.0**
- 設定6: **1/242.4**

### BIG
- 設定1: **1/431.2**
- 設定2: **1/425.6**
- 設定3: **1/412.2**
- 設定4: **1/402.1**
- 設定5: **1/376.6**
- 設定6: **1/354.2**

### MB合算
- 設定1-2: **1/372.4**
- 設定3-4: **1/364.1**
- 設定5: **1/344.9**
- 設定6: **1/337.8**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約33G/50枚**。
- 当時解析ブログ、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART純増: **約1.3枚/G**。
- ボーナス込み: **約1.7～1.8枚/G**。資料に1.7枚/Gと1.8枚/Gの丸め/表記差があるため平均化しない。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG / ミリオンBIG: **204枚**。
- MB: **36枚（6G継続）**。
- ART「エクスカリバーラッシュ」: **初期50G+α**、ゲーム数上乗せ型。
reliability: ANALYSIS_HIGH_PLUS_INDUSTRY_FOR_ART_STRUCTURE

## modeSpecificMinimumData
- 通常時は **1周期40G**でカードを育成し、周期終了後CZ「タクティカルバトルゾーン」へ移行。
- **15周期目以降**はカード昇格抽選が大幅に優遇される。これは即ART確定天井ではなく、実質青天井寄りの周期優遇契約として扱う。
- 5の倍数周期は対戦相手選択が優遇される。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **天井までのゲーム数/周期進行をRESET**。
- 当時解析資料では **内部モードもRESET** と明記。
- 設定変更専用の短縮周期天井や、朝一専用モードの確定数値は確認できず。
reliability: ANALYSIS_HIGH_DIRECT_HISTORICAL

### carryOverBehavior
- 「据え置き」と明記した独立契約は、機種名/型式/メーカー/シリーズ名に「据え置き」「朝一」「設定変更」「周期」「天井」「モード」を組み合わせて再探索したが直接固定できず **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 純電源OFF→ONについては直接比較表があるため下記へ分離。
reliability: UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ON: **天井/周期進行CARRYOVER、内部状態CARRYOVER**。
- ちょんぼりすたの設定変更時/電源OFF→ON比較表で確認。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
- 本機の「天井」は15周期以降のカード昇格優遇であり、G数到達でART確定する一般的な天井とは定義が異なる。
reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時は **15周期目以降にカード昇格抽選が大幅アップ**。
- 設定変更後も周期カウンタは0から再開するが、設定変更専用の「最大○周期へ短縮」等の公開契約は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- ART確定型の天井ではないため、「天井短縮恩恵」と誤解しないよう分離保存。
reliability: ANALYSIS_HIGH_FOR_NORMAL_PERIODIC_BENEFIT / SEARCHED_NO_CONFIRMED_RESET_SHORTENING

### modeAfterReset
- 設定変更時: **内部モードRESET**。
- 純電源OFF→ON: **内部状態/モード相当をCARRYOVER** とする比較表を確認。
- 設定変更時のモード振り分け数値や朝一専用モードは十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更: **内部状態RESET**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- リセット後の状態振り分け数値は確認できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更で周期/内部モードは初期化されるが、リセット時だけ適用される確定的な周期短縮・高確スタート・専用モード・初当たり優遇数値は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 「ART終了後1周期目」は全カード強化対象の召喚の儀から始まり若干優遇されるが、これは設定変更専用の朝一恩恵ではないためresetBenefitsには算入しない。
reliability: ANALYSIS_HIGH_SEARCHED_NO_CONFIRMED_DEDICATED_RESET_BENEFIT

### resetPenalties
- 設定変更により前日周期進行/内部モードがリセットされるため、前日15周期到達に近い進行や有利状態は失われる可能性がある。
- ただし設定変更固有の数値化された不利率は確認できず **NO_NUMERIC_PENALTY_CONFIRMED**。
reliability: ANALYSIS_HIGH_FOR_COUNTER_RESET / UNVERIFIED_FOR_NUMERIC_PENALTY

### resetDetection
- 本機固有の確定的なガックン、ランプ、初期出目、朝一液晶ステージによる設定変更判別は、機種名/型式/メーカー名と「ガックン」「朝一」「リセット判別」「設定変更」「据え置き」を組み替えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 周期の見た目だけで変更を確定できる公開契約も確認できず。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- normalCycleLength: **40G**
- normalEnhancedThreshold: **15周期目以降**
- settingChangeCycleCounter: **RESET**
- powerCycleCycleCounter: **CARRYOVER**
- settingChangeInternalMode: **RESET**
- powerCycleInternalState: **CARRYOVER**
- resetShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- ボーナス込みART純増は **約1.7枚/G** と **約1.8枚/G** の表記差あり。ART単体純増1.3枚/Gは一致しており、ボナ込値は平均せず両表記を保持。
- 導入日、型式、検定番号、設定別機械割、ART初当たり、BIG/MB、ベース、ART単体純増について主要資料間に重大CONFLICTなし。

## missingFields
- 据え置きと明記した独立操作契約: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 設定変更時の内部モード/状態の具体的振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定的ガックン/ランプ/初期出目/開始ステージ判別: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- HAZUSE 型式/検定番号/導入日: https://hazuse.com/machine/pachislot/6S0693/genre/202/
- HAZUSE 初打講座/周期構造: https://hazuse.com/machine/pachislot/6S0693/genre/203/
- パチビー 機種情報/ART仕様: https://www.pachibee.jp/machines/about/217080006
- ちょんぼりすた スペック/天井/朝一比較: https://chonborista.com/slot/universal-slot/44512/
- すろぱちくえすと スペック/獲得枚数/ART仕様: https://www.slopachi-quest.com/article/million-arthur/
- 当時解析ブログ 設定変更/性能値: https://slotkaiseki.hatenablog.com/entry/MillionArthur
- パチナビ 型式/検定番号/解析照合: https://pachinavi.net/machines/million-arthur/
