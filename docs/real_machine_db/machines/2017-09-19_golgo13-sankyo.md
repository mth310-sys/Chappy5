machineName: パチスロ ゴルゴ13
manufacturer: SANKYO
releaseDate: 2017-09-19
recordNumber: 1135
generation: 5号機（5.5号機世代）
systemType: ART / セットストック型
formalModelName: パチスロゴルゴ13S
certificationNumber: 7S0229
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- SANKYO版の2017年機。2006年のオリンピア製「ゴルゴ13 ザ・プロフェッショナルJ」とは別機種として扱う。
- SANKYO公式オンライン博物館は導入年月2017.09、販売名（型式名）「パチスロ ゴルゴ13（パチスロ ゴルゴ13 S）」を掲載。
- HAZUSEは型式名 **パチスロゴルゴ13S**、検定番号 **7S0229**、導入開始日 **2017-09-19** を掲載。パチビー、K-Navi、複数解析も2017-09-19で一致。
reliability: OFFICIAL_PLUS_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **96.9%**
- 設定2: **98.4%**
- 設定3: **99.9%**
- 設定4: **103.6%**
- 設定5: **105.7%**
- 設定6: **110.2%**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「G-FEVER」
- 設定1: **1/673**
- 設定2: **1/655**
- 設定3: **1/639**
- 設定4: **1/592**
- 設定5: **1/569**
- 設定6: **1/518**

### CZ（GAME13後半パート）
- 設定1: **1/367**
- 設定2: **1/357**
- 設定3: **1/348**
- 設定4: **1/327**
- 設定5: **1/326**
- 設定6: **1/318**

### GAME13（前半+後半合算）
- 設定1: **1/131**
- 設定2: **1/130**
- 設定3: **1/129**
- 設定4: **1/126**
- 設定5: **1/126**
- 設定6: **1/125**
reliability: OFFICIAL_FOR_CZ_ART + ANALYSIS_HIGH_FOR_GAME13

## baseGamesPer50
- **約44G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「G-FEVER」: **約2.0枚/G**。
reliability: OFFICIAL

## basicPayout
- ART「G-FEVER」: **1セット100G+α**。
- セットストック型。純増約2.0枚/G。
reliability: OFFICIAL

## modeSpecificMinimumData
- 通常時は主に自力解除チャンス「GAME13」からARTを目指す。
- ART間天井は解析上 **最大1565G**。到達後はCZ後半パートへ移行し、ART非当選時も以後ART当選までCZ後半パート高確率状態が継続する仕様として解析されている。
- 天井G数は56 / 130 / 565 / 999 / 1300 / 1565Gの振り分けが公開されているが、完全再現用の全設定別振り分けは本レコードの物差し必須値には含めない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_VS_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **天井リセット**。
- **SCテーブル（CZ抽選テーブル）リセット**。
- **CB状態リセット**。
- 解析資料では「各種状態はリセットされる」と明記。
- 朝一ステージはニューヨーク / ロンドン / 東京 / 香港のいずれか。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は、設定変更を行わない限り前日の天井進捗・SCテーブル・CB状態を引き継ぐ扱いとして解析されている。
- 据え置き専用表現のある資料は限定的だが、設定変更対比および電源OFF→ON引継ぎ資料からホール運用上のcarryover契約を採用。
reliability: ANALYSIS_HIGH_BY_DIRECT_POWER_CYCLE_COMPARISON

### powerCycleBehavior
- 純電源OFF→ONでは **天井引継ぎ**。
- **SCテーブル引継ぎ**。
- **CB状態引継ぎ**。
- 設定変更と純電断で明確に挙動が異なる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- settingChange: **RESET**。
- stay/pure power cycle: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常天井の最大値は **1565G**。
- 設定変更後専用の固定短縮天井は確認できない。
- 通常天井自体に56 / 130 / 565 / 999 / 1300 / 1565Gの振り分けが存在するため、これを「リセット専用短縮」と誤分類しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 通常時のCZ抽選を管理する **SCテーブルは設定変更でRESET、純電源OFF→ONでCARRYOVER**。
- 設定変更時SCテーブルの具体的初期振り分けは、今回の再探索でホール経営物差しとして固定できる公開数値を確認できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_FOR_INITIAL_DISTRIBUTION

### stateAfterReset
- **CB状態は設定変更でRESET、純電源OFF→ONでCARRYOVER**。
- 当時解析の「各種状態はリセット」と整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は、ART初当たり時の上乗せ特化ゾーン **「超A級スナイパーRUSH」スタート割合が優遇される可能性**が当時解析で示唆されている。
- ただし公開ページ上では具体的発生率を確認できず、数値化しない。
reliability: ANALYSIS_SINGLE_FOR_BENEFIT_EXISTENCE / UNVERIFIED_FOR_NUMERIC_RATE

### resetPenalties
- 設定変更専用の明確な公開不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 「ゴルゴ13 設定変更 / リセット / 朝一 / ガックン / 据え置き / 電源OFF」等で当時解析・古いDB・回顧系を再探索したが、本機固有の確定ガックンやランプによる変更判別契約は **UNVERIFIED_AFTER_RESEARCH**。
- 朝一ステージ候補は公開されているが、単独で設定変更確定となる資料は確認できず、確定判別には使用しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_DETERMINISTIC_DETECTION

### numericResetData
- normalCeilingMax: **1565G**
- settingChangeGameCounter: **RESET**
- purePowerCycleGameCounter: **CARRYOVER**
- settingChangeScTable: **RESET**
- purePowerCycleScTable: **CARRYOVER**
- settingChangeCbState: **RESET**
- purePowerCycleCbState: **CARRYOVER**
- resetInitialStageCandidates: **ニューヨーク / ロンドン / 東京 / 香港**
- resetScTableDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetSuperASniperRushStartRate: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- 通常天井の説明に「1565GでCZ」「天井は実質青天井」という表現差がある。これは1565G到達でART確定ではなくCZ高確率移行・ART当選まで継続する仕様の説明差であり、数値CONFLICTとして平均処理しない。
- SANKYO公式は導入年月を2017.09まで、HAZUSE・パチビー・K-Navi・複数解析は2017-09-19で一致するため、本DBのホール導入日は2017-09-19をcanonicalとする。

## missingFields
- 設定変更時SCテーブル初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時「超A級スナイパーRUSH」スタート優遇の具体的発生率: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定ガックン/ランプ等による変更判別: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- SANKYO公式オンライン博物館 機種紹介/導入年月/型式/ART仕様: https://www.sankyo-fever.jp/collection/694/
- HAZUSE 型式/検定番号/導入日/解析: https://hazuse.com/machine/pachislot/7S0229/
- パチビー 導入日/5号機ART/純増: https://www.pachibee.jp/machines/lecture/217080016
- K-Navi 導入日/ART概要: https://p-kn.com/slot/2845/
- ちょんぼりすた 機械割/ART初当たり/ベース/天井/設定変更vs電源OFF→ON: https://chonborista.com/slot/sankyo-slot/42642/
- すろかい 当時解析 機械割/GAME13/ART/天井/設定変更: https://slotkaiseki.hatenablog.com/entry/golgo13
- パチスロデータ 設定変更・据え置き/電源OFF→ON比較、性能コア: https://pachislo-data.com/sankyo/51558
- すろぱちくえすと 性能/天井/設定判別: https://www.slopachi-quest.com/article/gorugo13/
