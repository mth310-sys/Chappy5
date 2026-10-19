machineName: 戦国美少女 織田信奈の野望
manufacturer: D-light（ディ・ライト）
releaseDate: 2017-08-28
recordNumber: 1126
generation: 5号機（5.5号機世代）
systemType: A+ART / 周期管理 / リアルボーナス+擬似ボーナス
formalModelName: 織田信奈の野望S
certificationNumber: 7S0411
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEはメーカー **D-light**、型式 **織田信奈の野望S**、検定番号 **7S0411**、導入開始日 **2017-08-28** を掲載。
- パチビー、すろぱちくえすと、期待値見える化、ALL7も2017-08-28導入で一致するためcanonicalを **2017-08-28** とする。
- ちょんぼりすたのみ **2017-08-27** とするため、平均せず日付CONFLICTとして保持する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY / CONFLICT_FOR_EXACT_RELEASE_DATE

## payoutRateBySetting
- 設定1: **97.5%**
- 設定2: **99.1%**
- 設定3: **100.1%**
- 設定4: **104.6%**
- 設定5: **108.0%**
- 設定6: **112.0%**
- HAZUSE、一撃、期待値見える化、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「天下布武RUSH」初当たり
- 設定1: **1/496**
- 設定2: **1/479**
- 設定3: **1/455**
- 設定4: **1/405**
- 設定5: **1/368**
- 設定6: **1/335**

### 良晴野ボーナス（青7）
- 設定1: **1/245**
- 設定2: **1/243**
- 設定3: **1/237**
- 設定4: **1/230**
- 設定5: **1/227**
- 設定6: **1/223**

### 六将集結の儀（擬似ボーナス）
- 設定1: **1/394**
- 設定2: **1/392**
- 設定3: **1/390**
- 設定4: **1/388**
- 設定5: **1/385**
- 設定6: **1/382**

### 決戦の刻（赤7）
- 全設定共通: **1/8192**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約30G/50枚**。
- ちょんぼりすた、期待値見える化で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART区間単体: **約1.6枚/G**。
- ボーナス込みART運用値: **約2.0枚/G**。
- 期待値見える化・ちょんぼりすたが1.6枚/Gとボーナス込み約2.0枚/Gを明確に分離。一撃/パチビー等の「約2.0枚/G」はボーナス込み仕様として扱い、ART単体純増と混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_SEPARATION

## basicPayout
- ART「天下布武RUSH」: **1セット40G以上**、G数上乗せ型。
- 良晴野ボーナス（青7）: **120枚**。
- 決戦の刻（赤7）: **60枚 / 10G**。
- 六将集結の儀: **擬似ボーナス20G**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は石高による周期管理。基本 **1G=1万石以上**、**100万石=1周期**。
- 通常周期天井は **600万石（6周期）**。到達時は疑似ボーナス「六将集結の儀」当選。リアルボーナスを挟んでも周期天井は有効。
- 六将集結の儀からART非当選が4回続いた場合、**5回目の六将集結の儀でART確定**。このスルー天井はART当選でリセット。
- ART中は50万石ごとに周期抽選、**500万石**で太閤検恥 or 六将集結の儀当選。
- 通常モードはA/B/C。モードAは200万石・400万石が強く、疑似ボーナス当選率は **200万石70.31% / 400万石76.56%**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_TABLES
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は累計石高を前日値から引き継がず、**0～255万石のランダム加算抽選**を行った状態から開始する。
- 内部モードは **モードA 100%**。
- 液晶ステージは **森ステージ**。
- 六将集結の儀スルー回数の設定変更時挙動は公開表で「調査中」とされ、再探索でも直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常/高確の設定変更時初期状態は公開表が「調査中」で、別資料系統でも直接振り分けを固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_STONE_AND_MODE / UNVERIFIED_AFTER_RESEARCH_FOR_SKIP_COUNT_AND_NORMAL_HIGH_STATE

### carryOverBehavior
- 「据え置き」と明記した独立操作表は、機種名・型式・メーカー名と「据え置き/朝一/リセット/電源OFF ON/周期天井/モード/ガックン」を組み替えて再探索したが固定できず **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- ただし設定変更なしの純電源OFF→ONでは周期石高・モード・六将集結の儀スルー回数が引継ぎと公開されている。ホール実務上の据え置き挙動を推測で独立契約化せず、powerCycleBehaviorとして分離保持する。
reliability: UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONでは **周期石高CARRYOVER / 内部モードCARRYOVER / 六将集結の儀スルー回数CARRYOVER**。
- 液晶ステージは **森ステージ**。
- 通常/高確の内部状態は公開表が「調査中」で、再探索後も **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CARRYOVER / UNVERIFIED_AFTER_RESEARCH_FOR_NORMAL_HIGH_STATE

### gameCounterReset
- 本機の主要天井カウンタはゲーム数ではなく累計石高/周期。
- 設定変更: **RESET/RESEED（前日石高を消去し0～255万石をランダム加算）**。
- 純電源OFF→ON: **CARRYOVER**。
- 六将集結の儀スルー回数: 設定変更時 **UNVERIFIED_AFTER_RESEARCH** / 純電源OFF→ON **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常天井は600万石。
- 設定変更後は **0～255万石をランダム加算**した状態から始まるため、その分だけ周期天井までの残り石高が短縮される。
- 公開資料は「ランダム」としており、0～255万石の各値の具体的振り分け率は確認できないため均等分布とは推定しない。
- リセット後の専用固定天井G数はない。石高獲得速度で実G数は変動する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE / UNVERIFIED_FOR_DISTRIBUTION_SHAPE

### modeAfterReset
- 設定変更時: **モードA 100%**。
- 純電源OFF→ON: **前日モードCARRYOVER**。
- モードAの周期当選率は、100万石14.84% / **200万石70.31%** / 300万石12.50% / **400万石76.56%** / 500万石9.38% / 600万石100%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLES

### stateAfterReset
- 通常/高確の設定変更時・純電断時初期状態は、当時解析表でともに「調査中」。
- 「状態」「高確」「朝一高確」「リセット状態」「設定変更状態」等へ検索語を変更し、HAZUSE・一撃・期待値見える化・当時解析/後年整理資料を横断したが、設定変更専用振り分けを固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 2017年8月の5.5号機世代で、本ミッションが扱う6号機以降の有利区間リセット契約は非該当。

### resetBenefits
- **0～255万石の周期進行加算**による実質天井短縮。
- **モードA 100%**。200万石で70.31%、400万石で76.56%の疑似ボーナス当選率となり、朝一の初回当選が通常時より優遇される。
- 期待値見える化はリセット後を0Gから狙える可能性がある強い恩恵として評価するが、期待値額は物差し用途外なので保存しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 設定変更専用の固定的な不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日石高進捗は設定変更で消えるため、前日が深い周期位置なら据え置きに比べ引継ぎ価値を失う可能性はあるが、これは固定ペナルティとして扱わない。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更・純電源OFF→ONとも **森ステージ**なので、開始ステージ単独では変更判別不可。
- リセット時はモードA確定のため200万石/400万石で強い当選挙動を示すが、結果からの確率的ヒントであり確定判別ではない。
- 本機固有のリールガックンについて、「ガックン」「リールガックン」「設定変更判別」「据え置き判別」等で再探索したが確定仕様・発生率を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一表示石高と内部加算値の表示契約についても、確定判別に使える直接資料を固定できず推定しない。
reliability: ANALYSIS_HIGH_FOR_STAGE_NON_DETERMINISM / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN_AND_DISPLAY_DETECTION

### numericResetData
- resetInitialStoneAddition: **0～255万石（ランダム、個別振り分け率UNVERIFIED）**
- resetModeA: **100%**
- resetModeA100: **14.84%**
- resetModeA200: **70.31%**
- resetModeA300: **12.50%**
- resetModeA400: **76.56%**
- resetModeA500: **9.38%**
- resetModeA600: **100%**
- normalCycleCeiling: **600万石 / 6周期**
- pseudoBonusSkipCeiling: **4連続ART非当選後、5回目でART確定**

## conflicts
- exact release date: HAZUSE / パチビー / すろぱちくえすと / 期待値見える化 / ALL7 **2017-08-28** vs ちょんぼりすた **2017-08-27**。平均せず **CONFLICT_2017_08_28_VS_2017_08_27**、canonical 2017-08-28。
- ART純増表現: 一部資料は約2.0枚/Gのみを掲示するが、期待値見える化・ちょんぼりすたは **ART単体約1.6枚/G / ボーナス込み約2.0枚/G** と定義分離。数値競合ではなく定義差として保存。

## missingFields
- 設定変更時の六将集結の儀スルー回数扱い: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更/純電断時の通常・高確内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 0～255万石ランダム加算の個別振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン発生契約: **UNVERIFIED_AFTER_RESEARCH**。
- 「据え置き」と明記した独立操作契約: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09

- D-light / 大一公式機種ページ: https://daiichi777.jp/product/detail/157/slot_odanobuna
  - product existence / official machine page
  - reliability: OFFICIAL
- HAZUSE: https://hazuse.com/machine/pachislot/7S0411/
  - 型式、検定番号、導入日、メーカー、機械割、ボーナス/ART確率、天井、ART、モード関連
  - reliability: ANALYSIS_HIGH
- HAZUSE ART/内部状態: https://hazuse.com/machine/pachislot/7S0411/genre/209/
  - 周期・モード・ART性能
  - reliability: ANALYSIS_HIGH
- 一撃 天井/設定変更: https://1geki.jp/slot/s_odanobuna/3/
  - 設定変更0～255万石、モードA、電源OFF→ON引継ぎ、森ステージ
  - reliability: ANALYSIS_HIGH
- 一撃 モード移行: https://1geki.jp/slot/s_odanobuna/44/
  - 設定変更時モードA 100%
  - reliability: ANALYSIS_HIGH
- 一撃 通常時石高システム: https://1geki.jp/slot/s_odanobuna/46/
  - モードA/B/C別周期当選率、600万石天井
  - reliability: ANALYSIS_HIGH
- 一撃 ボーナス確率: https://1geki.jp/slot/s_odanobuna/1/
  - ART/ボーナス/擬似ボーナス確率
  - reliability: ANALYSIS_HIGH
- 期待値見える化: https://slotjin.com/zone/odanobuna/
  - 約30G/50枚、ART単体約1.6枚/G・ボーナス込み約2.0枚/G、周期/スルー天井、設定変更/純電断表、リセット恩恵
  - reliability: ANALYSIS_HIGH
- すろぱちくえすと: https://www.slopachi-quest.com/article/slot-odanobunanoyabou/
  - 2017-08-28導入、設定別性能、モード/周期当選率
  - reliability: ANALYSIS_HIGH
- パチビー: https://www.pachibee.jp/machines/movie/217080001
  - 2017-08-28導入、D-light、A+ART/周期仕様
  - reliability: INDUSTRY/ANALYSIS
- ALL7 2017年8月導入一覧: https://www.all7.jp/plans/index/2017/08
  - 2017-08-28導入予定、メーカー
  - reliability: INDUSTRY
- ちょんぼりすた: https://chonborista.com/slot/d-light/43538/
  - 2017-08-27日付CONFLICT、約30G/50枚、ART単体約1.6枚/G・ボーナス込み約2.0枚/G、ボーナス獲得枚数
  - reliability: ANALYSIS_HIGH

## boundaryAuditNotes
- 2017-08-28の新台境界をALL7、すろぱちくえすと導入日一覧、2-9伝説の当時整理で横断確認。新規本線候補は **パチスロ 討鬼伝 / 戦国美少女 織田信奈の野望** で一致。
- HAZUSEでは **戦国乙女～TYPE-A～** も2017-08-28表記だが、同機は既に本DBへ登録済み。新規重複レコードは作らず、導入日監査事項としてhandoffへ残す。
