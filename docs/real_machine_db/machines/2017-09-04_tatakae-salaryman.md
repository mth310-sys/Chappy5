machineName: パチスロ 闘え！サラリーマン
manufacturer: ロデオ
releaseDate: 2017-09-04
recordNumber: 1154
generation: 5号機（5.5号機世代）
systemType: A+ART / セット継続型
formalModelName: 闘え！サラリーマン／XA
certificationNumber: 7S0687
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_POWER_CYCLE

## identity
- フィールズの2017-07-11発売告知で、株式会社ロデオ製「パチスロ 闘え!サラリーマン」の全国発売を一次確認。
- 鹿児島県公安委員会の2017-07-25型式検定公告で、型式名 **闘え！サラリーマン／XA**、製造者 **株式会社ロデオ**、検定番号 **7S0687** を直接確認。
- 導入日は HAZUSE・ちょんぼりすた・2017年新台カレンダーが **2017-09-04**。一方、パチビー・後年天井資料は **2017-09-19** とするため `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19` として保持。複数の当時解析・機種DBが一致する **2017-09-04** を chronological canonical とする。
reliability: OFFICIAL_FOR_MODEL_AND_MANUFACTURER / ANALYSIS_HIGH_MULTI_SOURCE_FOR_2017_09_04 / CONFLICT_FOR_RELEASE_DATE

## payoutRateBySetting
- 設定1: **97.2%**
- 設定2: **98.6%**
- 設定3: **100.3%**
- 設定4: **102.2%**
- 設定5: **105.4%**
- 設定6: **110.2%**
- HAZUSEとちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### 宴BIG BONUS（白7）
- 設定1〜6: **1/16384.0**（全設定共通掲載）。

### BIG BONUS（赤7）
- 設定1: **1/528.52**
- 設定2: **1/524.29**
- 設定3: **1/508.03**
- 設定4: **1/504.12**
- 設定5: **1/481.88**
- 設定6: **1/464.79**

### ボーナス合算
- 設定1: **1/512.0**
- 設定2: **1/508.0**
- 設定3: **1/492.8**
- 設定4: **1/489.1**
- 設定5: **1/468.1**
- 設定6: **1/452.0**

### ART「通勤RUSH」初当たり
- 設定1: **1/358.9**
- 設定2: **1/342.7**
- 設定3: **1/326.2**
- 設定4: **1/299.6**
- 設定5: **1/281.3**
- 設定6: **1/259.1**
- HAZUSEとちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE: **約34G/50枚**。
- ちょんぼりすた: **34.1G/50枚**。
- 丸め精度差として分離し、代表値は **約34G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体: **約1.5枚/G**（ちょんぼりすた）。
- ボーナス込みART: **約1.7枚/G**（ちょんぼりすた・パチビー・中古実機DB/攻略資料で一致）。
- HAZUSE本文では通勤RUSHを **約1.7枚/G** と表記しており、ボーナス込み/ART単体の定義差が明記されないため、物差しでは **ART単体約1.5枚/G / ボーナス込み約1.7枚/G** をcanonicalとし、HAZUSE表現差を注記する。
reliability: ANALYSIS_HIGH_FOR_DEFINITION_SPLIT / CONFLICT_OR_DEFINITION_AMBIGUITY_WITH_HAZUSE_TEXT

## basicPayout
- BIG BONUS: **約200枚**。
- 宴BIG BONUS: **約300枚**。
- ART「通勤RUSH」: 勤務時間9:00〜18:00を基本とする **実質約36G+α**。パチビー等では表示上「1セット約40G+α」と要約されるが、HAZUSEの時間換算では1G=約15分で基本36G。
- 上位ART「帰省RUSH」: **50G**（補助値）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は1G=カレンダー1日として進行。
- 通常最大天井はART間 **3年=1095G**。ボーナスでは天井カウンタをリセットしない。
- 1095G到達時の恩恵は **ART当選**。
- 「うるう年チャンス」「年度末評価」で通常時にも1年単位の天井短縮抽選が存在するが、完全再現用の詳細抽選は本レコードの主対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: SETTING_CHANGE_NUMERIC_RESET_CONFIRMED; STAY_SETTING_AND_POWER_CYCLE_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は通常3年=1095Gの天井ではなく、**1年=365G または 2年=730G** の短縮天井へ再設定される。
- HAZUSEの設定変更時天井短縮振り分けは全設定共通で、通常3年から **1年短縮 50.00% / 2年短縮 50.00%**。したがって設定変更後の到達天井は **730G 50% / 365G 50%**。
- 内部状態・開始ステージについては当時比較表でも「調査中」で、表記・型式・メーカー名・朝一/リセット/設定変更/内部状態/ステージを変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING / UNVERIFIED_FOR_STATE_AND_STAGE

### carryOverBehavior
- 設定変更なしの据え置きを独立条件として、天井日数・キャラモード・ステップモード等の引継ぎ契約を直接明示する高信頼資料は、据え置き/変更なし/宵越し/天井引継ぎを変えて再探索しても今回固定できず **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 一般的挙動からの推定は採用しない。
reliability: UNVERIFIED

### powerCycleBehavior
- ちょんぼりすたの朝一比較表では、電源OFF→ON時の天井・内部状態・ステージはいずれも **調査中**。
- HAZUSE、当時解析、後年天井資料、中古実機資料を「電源OFF ON / 電断 / 再起動 / 据え置き」と検索語を変えて再探索したが、本機固有の純電源OFF→ON直接契約は固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- settingChange: **RESET_AND_RESELECT_TO_SHORTENED_CEILING**。設定変更後は365Gまたは730G天井。
- staySetting: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- purePowerCycle: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_FOR_OTHER_CONDITIONS

### ceilingAfterReset
- normalMaximumCeiling: **1095G**。
- settingChangeCeiling: **365G or 730G**。
- settingChangeDistribution: **365G 50.00% / 730G 50.00%**。
- ボーナス成立では通常のART間天井はリセットされない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- キャラモード/ステップモード等の設定変更時再抽選・引継ぎを直接固定できる資料は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用モード振り分け数値も **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 通常/高確等の内部状態について、設定変更時および純電源OFF→ON時は当時資料でも「調査中」。再探索後も **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の公開朝一恩恵は天井短縮。通常最大 **1095G** に対し設定変更後は **365Gまたは730G**。
- 設定変更時の短縮振り分けは **各50.00%**。
- その他、設定変更時のみのART/CZ優遇率や状態優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 設定変更専用の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_SEARCHED_NOT_CONFIRMED

### resetDetection
- 本機固有のガックン発生率、初期出目、ランプ、液晶ステージによる確定的な設定変更判別は、機種名/型式名/ロデオ + ガックン/朝一/変更判別/初期出目/ランプ/ステージで再探索しても **UNVERIFIED_AFTER_RESEARCH**。
- 天井が365G/730Gへ短縮されるため事後的な挙動差は存在するが、朝一時点の確定判別手段としては扱わない。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- normalMaximumCeiling: **1095G**
- resetCeiling365G: **50.00%**
- resetCeiling730G: **50.00%**
- resetInternalModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetInternalStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- distinct stay-setting carry-over contract: **UNVERIFIED_AFTER_RESEARCH**
- pure power-cycle contract: **UNVERIFIED_AFTER_RESEARCH**
- setting-change internal-mode/state distribution: **UNVERIFIED_AFTER_RESEARCH**
- deterministic reset detection / gakkun: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19`: HAZUSE、ちょんぼりすた、2017年新台カレンダーは2017-09-04。パチビー、後年の楽スロは2017-09-19。平均せず双方を保持し、chronological canonicalは複数の当時系資料が一致する **2017-09-04**。
- `NET_INCREASE_DEFINITION_SPLIT`: ちょんぼりすたはART単体約1.5枚/G・ボーナス込み約1.7枚/G。HAZUSE本文とパチビーは約1.7枚/Gと表記。定義が明示される資料を優先し、物差しでは単体/ボナ込みを分離。
- `ART_SET_LENGTH_DISPLAY_DIFFERENCE`: HAZUSEは時間換算で基本約36G、パチビー等は「約40G+α」と要約。1G=約15分、9:00〜18:00という仕様を根拠に基本36G+αを高解像度値として保持し、約40G+α表記も削除しない。

## sources
取得日: 2026-09-10
- フィールズ「新機種『パチスロ 闘え!サラリーマン』発売のお知らせ」（2017-07-11）: https://www.tsuburaya-fields.co.jp/ir/j/files/press/2017/press_20170711a.pdf
- 鹿児島県公報 第3334号 / 公安委員会告示第85号（2017-07-25）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1707/documents/60654_20170724145425-1.pdf
- HAZUSE: https://hazuse.com/machine/pachislot/7S0687/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/45491/
- パチビー: https://www.pachibee.jp/machines/about/217080013
- パチマ中古実機DB: https://www.pachima.com/c/slot/s_23sammyk/S00443
- 楽スロ（後年天井資料）: https://rakuslo.com/tatakae_salaryman-tenjyo.html
- slotnews777 2017年度新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
