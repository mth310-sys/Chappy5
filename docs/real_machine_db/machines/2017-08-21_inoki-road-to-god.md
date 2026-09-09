machineName: イノキロードトゥゴッド
manufacturer: ミズホ
releaseDate: 2017-08-21
recordNumber: 1118
generation: 5号機
systemType: A+ART / CZ搭載 / ゲーム数天井
formalModelName: イノキロードトゥゴッドMG
certificationNumber: 7S0109
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式名 **イノキロードトゥゴッドMG**、検定番号 **7S0109**、メーカー **ミズホ**、導入開始日 **2017-08-21** を確認。
- ALL7、パチ7、ちょんぼりすた、2017年新台カレンダーも2017-08-21で一致。2-9伝説系の2017-08-07表記は複数の機種個別資料と競合するためcanonicalには採用しない。
reliability: HIGH_MULTI_SOURCE_WITH_HAZUSE_IDENTITY

## payoutRateBySetting
- 設定1: **98.3%**
- 設定2: **99.6%**
- 設定3: **101.8%**
- 設定4: **105.7%**
- 設定5: **107.3%**
- 設定6: **115.6%**
- HAZUSE、ちょんぼりすた等で一致。
reliability: HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「闘神への道」初当たり
- 設定1: **1/432.0**
- 設定2: **1/404.7**
- 設定3: **1/365.2**
- 設定4: **1/309.1**
- 設定5: **1/288.2**
- 設定6: **1/180.3**
### ボーナス
- 道BIG: **1/32768.0**（全設定共通）
- 闘神BIG: **1/1337.5**（全設定共通）
- ボーナス合成: **1/1285.0**
reliability: HIGH_MULTI_SOURCE

## baseGamesPer50
- **約36.1G/50枚**。
reliability: HIGH_MULTI_SOURCE

## netIncrease
- ART「闘神への道」: **約1.8枚/G**。
- ボーナス込み: **約1.9枚/G**。
reliability: HIGH_MULTI_SOURCE

## basicPayout
- 闘神BIG: **約240枚**。
- 道BIG: **約240枚**。
- ARTはレベル管理型。1レベル20G、初当たりはレベル3以上から開始するため **最低60G保証**。
reliability: HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナス＋ART間 **999G** 消化で天井到達、次GからART。
- 設定変更・ART・ボーナス後の **300〜349G / 600〜649G** は闘神ゾーン。ISM状態MIDDLE以上となりCZ関連抽選が優遇される。
- 完全再現用のCZポイント・ARTレベル全抽選テーブルは収集対象外。
reliability: HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_INTERNAL_STATE_DISTRIBUTION_AND_POWER_CYCLE_CARRYOVER
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **内部状態RESELECT**。
- 朝一ステージは **雪山 / 砂漠 / 密林** のいずれか。
- 設定変更後も300〜349G / 600〜649Gの闘神ゾーンは有効。
reliability: ANALYSIS_HIGH

### carryOverBehavior
- 設定据え置きだけを独立明記した本機固有資料は今回直接固定できなかったため、純電断表から機械的に転記せず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_EXPLICIT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 設定変更を伴わない **電源OFF→ONでは天井ゲーム数CARRYOVER、内部状態CARRYOVER**。
- 電源OFF→ON時の開始ステージは当時解析で調査中表記のため推測補完しない。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: **RESET**。
- 電源OFF→ON: **CARRYOVER**。
- 据え置き独立契約: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 設定変更後も通常天井は **999G**。
- 固定のリセット短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 300〜349G / 600〜649Gの闘神ゾーンはリセット専用短縮ではなく、設定変更・ART・ボーナス後に共通して存在するゾーン。
reliability: ANALYSIS_HIGH

### modeAfterReset
- CZ抽選に関わるISMモード等の設定変更時個別初期振り分けは、表記揺れ・メーカー名・型式名と「設定変更/リセット/朝一/モード/ISM」を組み替えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 公開されている朝一内部状態振り分け（全設定共通）:
  - 低確: **87.1%**
  - 高確: **12.5%**
  - 超高確: **0.4%**
- 電源OFF→ONでは内部状態を引き継ぐ。
reliability: ANALYSIS_HIGH

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 当時解析では **目立ったリセット恩恵なし** と整理。
- 天井短縮・専用強化ゾーンは確認されず、300〜349G / 600〜649Gの闘神ゾーンは通常のボーナス/ART後にも存在する。
reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更専用の確定的な出玉不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- **ガックン判別不可** とする当時解析あり。
- 設定変更後ステージは雪山 / 砂漠 / 密林だが、純電断時ステージの確定契約が公開されていないため、ステージ単独を確定変更判別には使用しない。
- 本機固有のランプ/初期出目による確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_GAKKUN_NOT_USABLE / NONDETERMINISTIC_FOR_STAGE

### numericResetData
- resetInternalStateDistribution:
  - 低確: **87.1%**
  - 高確: **12.5%**
  - 超高確: **0.4%**
- resetCeiling: **999G**
- resetShortening: **NONE_CONFIRMED**
- publishedMorningHitRateWithinFixedGames: **NONE_CONFIRMED_AFTER_RESEARCH**

## conflicts
- releaseDate: 2-9伝説系の **2017-08-07** 表記に対し、HAZUSE / ALL7 / パチ7 / ちょんぼりすた / 複数2017年新台一覧が **2017-08-21** で一致。平均せず `CONFLICT_RELEASE_DATE_2017_08_07_VS_2017_08_21` として保持し、canonicalは2017-08-21。

## missingFields
- explicit stay-setting contract distinct from pure power cycle: UNVERIFIED_AFTER_RESEARCH。
- power-cycle start-stage contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic reset detection signal: NONE_CONFIRMED_AFTER_RESEARCH。
- setting-change-specific ISM mode initial distribution beyond published low/high/super-high state: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- HAZUSE: https://hazuse.com/machine/pachislot/7S0109/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/7S0109/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/42702/
- 期待値見える化 朝一リセット: https://slotjin.com/slot/inokigod-reset/
- 期待値見える化 設定判別: https://slotjin.com/slot-tool/inokigod-settei/
- P-WORLD: https://www.p-world.co.jp/machine/database/8464
- パチ7: https://pachiseven.jp/machines/5247/cutout/72
- ALL7 2017年8月: https://www.all7.jp/plans/index/2017/08
- 2017年新台カレンダー: https://www.slopachi-quest.com/article/2017-sindai/
- 中古実機型式補助: https://pachislobank.com/SHOP/s-mizuho0015.html
