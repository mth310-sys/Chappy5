machineName: 想定科学パチスロ STEINS;GATE廻転世界のインダクタンス ランヴォア
manufacturer: オーイズミ
releaseDate: 2017-09-19
recordNumber: 1142
generation: 5号機（5.5号機世代）
systemType: A+RT / ボーナス + 完走型ループRT
formalModelName: パチスロシュタインズゲートR／WX
certificationNumber: 7S0786
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 2015年版「想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス」の後継スペック。
- HAZUSE・パチビーは導入日2017-09-19で一致。グリーンべるとの2017-08-21業界記事は納品開始を2017-09-18としており整合する。
- HAZUSE/P-WORLDで型式 `パチスロシュタインズゲートR／WX`、検定番号 `7S0786` を確認。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **97.3%**
- 設定2: **99.0%**
- 設定3: **101.7%**
- 設定4: **104.6%**
- 設定5: **107.4%**
- 設定6: **110.8%**
- HAZUSE、すろぱちくえすと、2-9伝説で一致。P-WORLDも97.3〜110.8%の範囲を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ボーナス合算
- 設定1: **1/196.2**
- 設定2: **1/188.9**
- 設定3: **1/180.0**
- 設定4: **1/172.9**
- 設定5: **1/168.5**
- 設定6: **1/157.9**

### PBB / BIG / REG
- 設定1: **1/923.0 / 1/585.1 / 1/434.0**
- 設定2: **1/1092.3 / 1/471.5 / 1/442.8**
- 設定3: **1/862.3 / 1/537.2 / 1/394.8**
- 設定4: **1/1092.3 / 1/383.3 / 1/442.8**
- 設定5: **1/829.6 / 1/481.9 / 1/376.6**
- 設定6: **1/993.0 / 1/383.3 / 1/368.2**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約37.9G/50枚**。
- すろぱちくえすとの当時解析値。
reliability: ANALYSIS_SINGLE

## netIncrease
- RT「シュタインズ・ゲート」: **約0.6枚/G**。
- グリーンべると、パチビー、P-WORLD、HAZUSE、当時解析で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout
- PREMIUM BIG BONUS: **最大402枚**。
- BIG BONUS: **最大202枚**。
- REGULAR BONUS: **最大40枚**。
- RT「シュタインズ・ゲート」: **1セット30G / 完走型 / ループ率約60%**。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- BIG以上終了後はRT突入濃厚のCZ「ラジ館ステージ（夜）」へ。
- REG後は「ラジ館ステージ（夕方）」へ移行しRT期待度約40%。REG中青7揃い時は夜へ移行しRT濃厚。
- RT終了時にボーナス非当選ならCZ「オペレーション・ウルド」へ。通常時500G消化時にも同CZへ入り、RT期待度約60%。
- 500Gはボーナス/RTそのものを保証する天井ではなく、救済CZ到達条件として区別保存する。
reliability: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_SPECIAL_STATE_RESET_BEHAVIOR; GENERAL_POWER_CYCLE_DETAILS_UNVERIFIED
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は通常時500G救済CZまでの進捗をRESETするものとして扱う。
- 当時解析では、**ボーナス中 / オペレーション・ウルド中 / RT中 / ラジ館ステージ中に設定変更（リセット）された場合、設定変更後はオペレーション・ウルドから開始**と明記。
- 通常状態からの設定変更後の開始ステージ、内部RT/CZ状態の全契約は直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_FOR_SPECIAL_STATE_RESET / UNVERIFIED_FOR_GENERAL_START_STATE

### carryOverBehavior
- 据え置き時の500G救済CZカウンタ、RT/CZ状態、開始ステージを本機固有に明記した独立資料は、表記揺れ・型式名・朝一/据え置き語を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的挙動から推測転記しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ON時の500G救済CZカウンタ、RT/CZ状態、開始ステージを直接比較した本機固有資料は再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- settingChange: **RESET**（通常時500G救済CZまでの進捗）。
- stay setting: **UNVERIFIED_AFTER_RESEARCH**。
- pure power OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 通常500G到達の恩恵はCZ「オペレーション・ウルド」であり、ボーナス/RT確定天井ではない。
reliability: ANALYSIS_SINGLE_FOR_SETTING_CHANGE / UNVERIFIED_FOR_CARRYOVER_CONTRACTS

### ceilingAfterReset
- normalRescuePoint: **通常時500G消化 → オペレーション・ウルド**。
- resetShortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時だけ500G未満へ短縮する公開数値は確認できない。
reliability: ANALYSIS_HIGH_FOR_500G_RESCUE / UNVERIFIED_NO_SPECIAL_SHORTENING_FOUND

### modeAfterReset
- 朝一専用モードや設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 特殊状態中の設定変更ではオペレーション・ウルド開始という公開挙動あり。
reliability: ANALYSIS_SINGLE_FOR_SPECIAL_STATE / UNVERIFIED_FOR_GENERAL_MODE

### stateAfterReset
- ボーナス中 / オペレーション・ウルド中 / RT中 / ラジ館ステージ中から設定変更された場合: **オペレーション・ウルド開始**。
- 通常状態からの設定変更、および純電源OFF→ON時の内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 営業終了時にボーナス中・RT中・CZ/ラジ館ステージ中だった台が設定変更された場合、朝一は**RT期待度約60%のオペレーション・ウルドから開始**する公開挙動があり、状況限定の明確な朝一恩恵。
- 通常状態からの設定変更に対する専用短縮天井・初当たり優遇・高確優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_FOR_SPECIAL_STATE_BENEFIT

### resetPenalties
- 設定変更時は通常時500G救済CZまでの前日進捗が失われる。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_FOR_COUNTER_RESET

### resetDetection
- 本機固有の確定ガックン、初期出目、ランプ、通常朝一開始ステージによるdeterministicな変更判別は、`ランヴォア / パチスロシュタインズゲートR/WX / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / ステージ` 等で再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 朝一オペレーション・ウルドは前日特殊状態+設定変更時の有力材料だが、通常時500G到達やRT終了時にも入るCZであるため単独で普遍的な変更判別にはしない。
reliability: UNVERIFIED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- normalRescueCounter: **500G → Operation Urd**
- operationUrdRtExpectation: **約60%**
- specialStateResetStart: **Operation Urd**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- purePowerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- 純電源OFF→ON時の500G救済CZカウンタ・RT/CZ内部状態・開始ステージの直接契約。
- 据え置き時の同項目を明記した独立資料。
- 通常状態から設定変更した際の開始ステージ/内部状態。
- 本機固有ガックン/初期出目/ランプ判別契約。

## conflicts
- 重大な性能数値CONFLICTなし。
- 「天井」は通常500GでCZ突入する救済機能。RT/ボーナス確定天井と混同しない。

## sources
取得日: 2026-09-10
- グリーンべると（2017-08-21業界記事 / A+RT / 最大402・202・40枚 / RT30G・約0.6枚/G / ループ約60% / 500G CZ / 納品9/18）: https://web-greenbelt.jp/00009831/
- HAZUSE（型式・検定番号・導入日・設定別機械割・ボーナス確率・CZ/RT・500G救済）: https://hazuse.com/machine/pachislot/7S0786/
- パチビー（導入日 / 基本仕様 / ボーナス枚数 / RT）: https://www.pachibee.jp/machines/index/217080015
- P-WORLD（型式・検定番号 / 機械割範囲 / 基本仕様）: https://www.p-world.co.jp/machine/database/8480
- すろぱちくえすと（当時解析 / 37.9G/50枚 / 設定別機械割・ボーナス / 500G救済 / 特殊状態中リセット後Operation Urd）: https://www.slopachi-quest.com/article/steinsgate2/
- 2-9伝説（設定別機械割 / PBB・BIG・REG・合算）: https://29den.com/steinsgate2/
