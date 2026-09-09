machineName: パチスロ ゴルゴ13
manufacturer: SANKYO
releaseDate: 2017-09-19
recordNumber: 1153
generation: 5号機（5.5号機世代）
systemType: ART / CB搭載・ボーナス非搭載・セットストック型
formalModelName: パチスロゴルゴ13S
certificationNumber: 7S0229
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_NUMERIC_RESET

## identity
- SANKYOオンライン博物館で導入年月 **2017.09**、販売名「パチスロ ゴルゴ13」、型式名 **パチスロ ゴルゴ13 S** を公式確認。
- HAZUSEで型式名 **パチスロゴルゴ13S**、検定番号 **7S0229**、導入開始日 **2017-09-19**、メーカーSANKYOを直接確認。
- ちょんぼりすた、K-Navi、パチビー、すろぱちくえすとでも **2017-09-19** 導入が一致。
- 2006年の既存「ゴルゴ13 ザ・プロフェッショナルJ」とは別機種。SANKYO製2017年機として独立登録。
reliability: OFFICIAL_AND_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **96.9%**
- 設定2: **98.4%**
- 設定3: **99.9%**
- 設定4: **103.6%**
- 設定5: **105.7%**
- 設定6: **110.2%**
- ちょんぼりすた、HAZUSE、すろぱちくえすと、当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### CZ「GAME13」後半突入相当
- 設定1: **1/367**
- 設定2: **1/357**
- 設定3: **1/348**
- 設定4: **1/327**
- 設定5: **1/326**
- 設定6: **1/318**
- SANKYO公式オンライン博物館掲載値とすろぱちくえすとが一致。
- 一部当時解析に「GAME13 1/131〜1/125」表記があるが、これは前半パートを含む広いGAME13突入定義で、公式CZ値と定義が異なるため同一指標として混ぜない。

### ART「G-FEVER」初当たり
- 設定1: **1/673**
- 設定2: **1/655**
- 設定3: **1/639**
- 設定4: **1/592**
- 設定5: **1/569**
- 設定6: **1/518**
- SANKYO公式、HAZUSE、ちょんぼりすた、すろぱちくえすとで一致。
reliability: OFFICIAL_AND_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約44G/50枚**。
- HAZUSE、ちょんぼりすた、すろぱちくえすと、当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「G-FEVER」: **約2.0枚/G**。
- SANKYO公式オンライン博物館、HAZUSE、K-Navi、P-WORLD、パチビー等で一致。
reliability: OFFICIAL_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「G-FEVER」: **1セット100G+α**。
- セットストック型。
- ART初当たり時の通常時公開解析では、上乗せ特化ゾーン「超A級スナイパーRUSH」スタートが **約25%**。
reliability: OFFICIAL_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はCZ「GAME13」を経由してARTを目指す。GAME13後半パートのART期待度は **約50%**。
- 最大天井は **1565G**。HAZUSE・ちょんぼりすた・当時解析では、到達時にGAME13後半パートへ入り、そこでART非当選なら以後のCZ抽選が13回目以降相当となる。したがってcanonicalは **1565G到達=ART確定ではない**。
- 公開天井候補G数は **56 / 130 / 565 / 999 / 1300 / 1565G**。設定別振り分けが存在する。
- P-WORLDは「ART間1565G消化でARTに突入」と記載しており、上記高解像度解析と恩恵定義が競合するため `CONFLICT_CEILING_EFFECT_CZ_VS_ART_DIRECT` として保持。
reliability: ANALYSIS_HIGH_FOR_CZ_CEILING / CONFLICT_WITH_PWORLD_SUMMARY

## resetBehavior
schemaVersion: v0.7
resetQaStatus: SETTING_CHANGE_AND_POWER_CYCLE_CONFIRMED; DISTINCT_STAY_SETTING_PARTIAL; RESET_BENEFIT_RATE_UNVERIFIED
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は **天井RESET**。
- **SCテーブルRESET/再抽選**。
- **CB状態RESET**。
- 当時解析では「各種状態はリセット」とも記載。
- 開始ステージは **ニューヨーク / ロンドン / 東京** のいずれか。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_COUNTER_TABLE_CB / ANALYSIS_SINGLE_FOR_BROAD_STATE_WORDING

### carryOverBehavior
- すろぱちくえすとの朝一比較表で、据え置き時の **天井引継ぎ**を直接確認。
- 据え置き時のSCテーブル・CB状態・内部状態を独立条件として完全に列挙する一次/高信頼比較表は、機種名/型式名/SANKYO/据え置き/変更なし/朝一/電源OFF ONを変えて再探索しても今回固定できず **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 純電源OFF→ONについては別途直接比較情報あり。
reliability: ANALYSIS_HIGH_FOR_STAY_SETTING_CEILING / UNVERIFIED_FOR_OTHER_DISTINCT_STAY_SETTING_FIELDS

### powerCycleBehavior
- 純電源OFF→ON時は **天井CARRYOVER / SCテーブルCARRYOVER / CB状態CARRYOVER**。
- ちょんぼりすたの朝一比較表で設定変更時と直接比較。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- settingChange: **RESET**。
- staySetting: **CARRYOVER**（天井について直接確認）。
- purePowerCycle: **CARRYOVER**。
reliability: ANALYSIS_HIGH

### ceilingAfterReset
- settingChange: **RESET / 再スタート**。
- normalMaximumCeiling: **1565G**。
- 通常の天井候補は **56 / 130 / 565 / 999 / 1300 / 1565G** だが、設定変更時だけに適用される独立の短縮天井テーブルは確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井の恩恵は資料競合あり。canonicalはCZ後半突入、P-WORLDはART直撃表記。
reliability: ANALYSIS_HIGH_FOR_RESET_DIRECTION / CONFLICT_FOR_CEILING_EFFECT

### modeAfterReset
- SCテーブルは設定変更時に **RESET/再抽選**、純電源OFF→ON時は **CARRYOVER**。
- 当時解析ではSCテーブルは設定変更時・ART終了時に決定される。
- 設定変更専用のSCテーブル振り分け率は再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_DIRECTION / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- settingChange: **RESET**（CB状態、および当時解析の「各種状態」表現）。
- purePowerCycle: **CB状態CARRYOVER**。
- 通常/高確等の具体的朝一状態振り分け率は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CB / ANALYSIS_SINGLE_FOR_BROAD_STATE_RESET / UNVERIFIED_FOR_NUMERIC_STATE_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- ちょんぼりすたは「設定変更時はART当選時の超A級スナイパーRUSHスタート割合が優遇される」と記載。
- 通常のART初当たり時は **約25%**で超A級スナイパーRUSHに入ることを複数解析で確認。
- ただし **設定変更時に何%へ上昇するか**は、「リセット/朝一/設定変更/超A級/割合/25%/50%」等へ検索語を変え、当時解析・後年DBを横断しても固定できず **UNVERIFIED_AFTER_RESEARCH**。通常25%を朝一専用数値として転記しない。
reliability: ANALYSIS_HIGH_FOR_EXISTENCE_OF_BENEFIT / UNVERIFIED_FOR_RESET_SPECIFIC_RATE

### resetPenalties
- 設定変更で前日の天井進捗・SCテーブル・CB状態を失う。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH

### resetDetection
- 設定変更時の開始ステージは **ニューヨーク / ロンドン / 東京**。ただし通常時にも存在するステージであり単独では設定変更確定材料にしない。
- 本機固有のガックン発生率、初期出目、ランプによる設定変更確定判別は、「ゴルゴ13 / パチスロゴルゴ13S / SANKYO + ガックン / 朝一 / 変更判別 / 初期出目 / ランプ」で再探索したが **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_START_STAGE / UNVERIFIED_FOR_HARDWARE_DETECTION

### numericResetData
- normalMaximumCeiling: **1565G**
- settingChangeGameCounter: **0から再スタート**
- normalArtStartSuperSniperRushRate: **約25%（参考値。reset専用値ではない）**
- resetSpecificSuperSniperRushRate: **UNVERIFIED_AFTER_RESEARCH**
- resetScTableDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- setting-change-specific SC table distribution: **UNVERIFIED_AFTER_RESEARCH**
- setting-change-specific internal-state distribution: **UNVERIFIED_AFTER_RESEARCH**
- exact reset-specific uplift rate for 超A級スナイパーRUSH start: **UNVERIFIED_AFTER_RESEARCH**
- distinct stay-setting contracts other than ceiling carry-over: **UNVERIFIED_AFTER_RESEARCH**
- deterministic gakkun / initial-reel / lamp reset detection: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- `CONFLICT_CEILING_EFFECT_CZ_VS_ART_DIRECT`: HAZUSE・ちょんぼりすた・当時解析は最大1565G到達でGAME13後半パートへ移行しART非当選もあり得るとする。一方P-WORLDは「1565G消化でARTに突入」と要約。canonicalは具体的な天井後処理まで説明する複数解析一致の **CZ後半突入 / ART非確定** とし、P-WORLD差異を残す。
- `DEFINITION_SPLIT_GAME13_RATE`: SANKYO公式/すろぱちくえすとのCZ率 **1/367〜1/318** はGAME13後半突入相当。一方、一部当時解析のGAME13 **1/131〜1/125** は前半を含む広い突入率。定義差として分離し、数値競合扱いで平均しない。

## sources
取得日: 2026-09-10
- SANKYOオンライン博物館（公式）: https://www.sankyo-fever.jp/collection/694/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/7S0229/
- HAZUSE ART解析: https://hazuse.com/machine/pachislot/7S0229/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/42642/
- すろぱちくえすと: https://www.slopachi-quest.com/article/gorugo13/
- スロット解析情報~すろかい~（2017年当時解析）: https://slotkaiseki.hatenablog.com/entry/golgo13
- K-Navi: https://p-kn.com/slot/2845/
- パチビー: https://www.pachibee.jp/machines/lecture/217080016
- P-WORLD: https://www.p-world.co.jp/machine/database/8454
