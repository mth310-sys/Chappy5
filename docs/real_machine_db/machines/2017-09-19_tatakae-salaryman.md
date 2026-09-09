machineName: パチスロ 闘え!サラリーマン
manufacturer: ロデオ
releaseDate: 2017-09-19
recordNumber: 1150
generation: 5号機（5.5号機世代）
systemType: A+ART / リアルボーナス+ART
formalModelName: 闘え！サラリーマン／XA
certificationNumber: 7S0687
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_BASE_AND_POWER_CYCLE

## identity
- 株式会社ロデオ製。フィールズ公式2017-07-11発売発表で製造元ロデオ、全国発売、2017年9月にホールで遊技開始予定を確認。
- 正式型式 **闘え！サラリーマン／XA**、検定番号 **7S0687** は鹿児島県公安委員会告示で一次確認。
- 導入日は楽スロが **2017-09-19**、2017-08-03公開の当時紹介動画も「2017年9月中旬より導入スタート」とするため2017-09-19をcanonicalとする。一方、2017新台カレンダー1系統は **2017-09-04** とするため `CONFLICT_RELEASE_DATE_2017_09_19_VS_2017_09_04` を保持。
reliability: OFFICIAL_FOR_MANUFACTURER_AND_RELEASE_MONTH / OFFICIAL_PUBLIC_NOTICE_FOR_MODEL_AND_CERTIFICATION / ANALYSIS_AND_CONTEMPORARY_FOR_EXACT_RELEASE_DATE / CONFLICT_FOR_EXACT_DATE

## payoutRateBySetting
- 設定1: **97.2%**
- 設定2: **98.6%**
- 設定3: **100.3%**
- 設定4: **102.2%**
- 設定5: **105.4%**
- 設定6: **110.2%**
- HAZUSEの設定別表を採用。楽スロの設定1〜6レンジ97.2〜110.2%とも端点一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_RANGE_CROSSCHECK

## initialHitBySetting
### BIG（赤7）
- 設定1: **1/528.52**
- 設定2: **1/524.29**
- 設定3: **1/508.03**
- 設定4: **1/504.12**
- 設定5: **1/481.88**
- 設定6: **1/464.79**

### 宴BIG（白7）
- 全設定: **1/16384.0**

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
- HAZUSE設定推測表を採用。楽スロのBIG約1/529〜1/465、ART約1/359〜1/259と端点一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_RANGE_CROSSCHECK

## baseGamesPer50
- **UNVERIFIED_AFTER_RESEARCH**。
- 機種名/型式/ロデオに「50枚」「1000円」「ベース」「コイン持ち」「回転数」を組み合わせ、HAZUSE、DMMぱちタウン、P-WORLD、当時解析/回顧系を再探索したが比較可能な明示実数を固定できなかった。
reliability: UNVERIFIED

## netIncrease
- ART「通勤RUSH」: **約1.7枚/G**。
- P-WORLD、HAZUSE、DMMぱちタウン、楽スロで一致。
reliability: DATABASE_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 宴BIG: **約300枚**。
- BIG: **約200枚**。
- ART「通勤RUSH」: 公開資料上 **1セット約36G〜約40G+α**。HAZUSE/DMMは実質約36G、P-WORLDは約40G+α表記のため定義差を残し、無理に単一化しない。
- 帰省RUSH: **50G**（P-WORLD）。
reliability: DATABASE_AND_ANALYSIS_HIGH_MULTI_SOURCE / DEFINITION_DIFFERENCE_FOR_ART_SET_GAMES

## modeSpecificMinimumData
- 通常天井: **ART間3年=1095G**。ボーナスでは日数/ART間天井カウンタはリセットされない。
- 天井到達恩恵: **ART当選**。
- 通常時は1G=1日としてカレンダー進行。特定契機で1〜3年単位の天井短縮抽選があるが、通常抽選の詳細は実機完全再現不要のためresetBehavior説明に必要な範囲以外は物差し本体へ展開しない。
reliability: DATABASE_AND_ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: SETTING_CHANGE_CEILING_AND_MODE_NUMERICS_CONFIRMED; PURE_POWER_CYCLE_AND_DISTINCT_STAY_SETTING_CONTRACT_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は通常3年=1095GのART間天井が **1年=365G または2年=730G** に必ず短縮。
- ステップモード（内部状態相当）とキャラモードを再抽選。
- キャラモードは設定変更後30G（30日）間、転落しない。朝一に上位キャラのステップが早期出現した場合は設定変更推測材料となる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING / ANALYSIS_HIGH_FOR_MODE_NUMERICS

### carryOverBehavior
- 「設定据え置き」と明示した本機固有の天井日数・ステップモード・キャラモードの直接比較表は、検索語・資料系統を変えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 通常時ボーナスではART間天井日数はリセットされないことは複数資料で確認済みだが、これを据え置き契約へ自動拡張しない。
reliability: UNVERIFIED_FOR_DISTINCT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 純電源OFF→ONのみの場合のART間天井日数、ステップモード、キャラモード、30G転落保護の扱いを直接示す本機固有資料は、機種名/型式/ロデオと「電源OFF ON」「電断」「据え置き」「朝一」「天井引継ぎ」を組み合わせ再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的5号機や他ロデオ機から類推しない。
reliability: UNVERIFIED

### gameCounterReset
- settingChange: **RESET / RESELECT_TO_365_OR_730_G_CEILING**。
- normal ART-gap ceiling: **1095G**。
- bonus does not reset ART-gap day count.
- stay setting / pure power cycle: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONTRACTS**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_BONUS_NONRESET / UNVERIFIED_FOR_STAY_AND_POWER

### ceilingAfterReset
- normalCeiling: **1095G（3年）**。
- settingChangeCeiling: **365G or 730G**。
- reset ceiling distribution: **365G 50.00% / 730G 50.00%**（全設定共通）。
- nominal reduction: **730G短縮 or 365G短縮**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- ステップモードとキャラモードを再抽選。
- ステップモード振り分け（設定1→6）:
  - 通常A: **62.50 / 56.25 / 41.41 / 35.16 / 22.66 / 16.41%**
  - 通常B: **25.00 / 25.00 / 33.59 / 33.59 / 39.84 / 39.84%**
  - 高確: **12.50 / 18.75 / 25.00 / 31.25 / 37.50 / 43.75%**
- キャラモード振り分け（設定1→6）:
  - 同僚: **66.02 / 65.23 / 62.11 / 57.03 / 52.34 / 45.31%**
  - 上司: **20.31 / 20.31 / 21.88 / 22.66 / 24.22 / 25.00%**
  - 後輩: **10.16 / 10.94 / 12.50 / 14.84 / 15.63 / 18.75%**
  - 嫁: **3.13 / 3.13 / 3.13 / 4.69 / 6.25 / 7.81%**
  - 社長: **0.39 / 0.39 / 0.39 / 0.78 / 1.56 / 3.13%**
- キャラモードは設定変更後30G転落なし。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### stateAfterReset
- ステップモードが一般的な内部状態に相当し、設定変更時は上記通常A/通常B/高確へ再抽選。
- それ以外の朝一状態を実機完全再現レベルまで展開しない。
reliability: ANALYSIS_HIGH

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の直接恩恵はART間天井の **1095G→365G/730G短縮（各50%）**。
- 高設定ほど設定変更時にステップ高確・上位キャラモードが選ばれやすい。
- キャラモードは変更後30G間転落しないため、上位キャラを活かしやすい朝一状態となる。
reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更で前日ART間ゲーム数を利用する宵越し天井が失われる可能性はあるが、据え置き/純電断の直接契約が未固定のため、宵越し比較を断定値としては保存しない。
- その他の変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: UNVERIFIED_FOR_DIRECT_STAY_COMPARISON / NONE_CONFIRMED_FOR_OTHER_PENALTIES

### resetDetection
- 設定変更後30Gはキャラモードが転落しない。DMMぱちタウンは、ステップ発生時にいきなり上位キャラが出現した場合は設定変更濃厚と説明。主要な朝一判別材料として保存。
- 本機固有のガックン発生率・100%契約、初期出目、電源OFFとの差を明示する直接資料は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CHARACTER_MODE_HINT / UNVERIFIED_FOR_GAKKUN_HARDWARE_CONTRACT

### numericResetData
- normalCeiling: **1095G**
- resetCeiling365G: **50.00%**
- resetCeiling730G: **50.00%**
- resetStepModeNormalA S1-S6: **62.50 / 56.25 / 41.41 / 35.16 / 22.66 / 16.41%**
- resetStepModeNormalB S1-S6: **25.00 / 25.00 / 33.59 / 33.59 / 39.84 / 39.84%**
- resetStepModeHigh S1-S6: **12.50 / 18.75 / 25.00 / 31.25 / 37.50 / 43.75%**
- resetCharacterCoworker S1-S6: **66.02 / 65.23 / 62.11 / 57.03 / 52.34 / 45.31%**
- resetCharacterBoss S1-S6: **20.31 / 20.31 / 21.88 / 22.66 / 24.22 / 25.00%**
- resetCharacterJunior S1-S6: **10.16 / 10.94 / 12.50 / 14.84 / 15.63 / 18.75%**
- resetCharacterWife S1-S6: **3.13 / 3.13 / 3.13 / 4.69 / 6.25 / 7.81%**
- resetCharacterPresident S1-S6: **0.39 / 0.39 / 0.39 / 0.78 / 1.56 / 3.13%**
- resetCharacterNoDropWindow: **30G**
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- stay-setting direct carry-over contract for ART-gap day count/modes: **UNVERIFIED_AFTER_RESEARCH**
- pure-power-cycle direct carry-over contract for ART-gap day count/modes: **UNVERIFIED_AFTER_RESEARCH**
- deterministic gakkun / initial-reel / lamp contract: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- releaseDate: **CONFLICT_2017_09_19_VS_2017_09_04**。
  - 2017-09-19: 楽スロ。
  - 2017年9月中旬: 2017-08-03公開の当時紹介動画説明。
  - 2017-09-04: 2017新台カレンダー1系統。
  - 公式フィールズ発表は2017年9月導入予定までで日付を限定しない。
  - canonical: **2017-09-19**。
- ART set games: **DEFINITION_DIFFERENCE_36G_VS_40G_PLUS_ALPHA**。HAZUSE/DMMは約36G（勤務時間換算）、P-WORLDは1セット約40G+α。比較定義差として保持。

## sources
retrievedAt: 2026-09-10
- フィールズ公式発売発表（2017-07-11）— 製造元ロデオ / 全国発売 / 2017年9月ホール導入予定: https://www.tsuburaya-fields.co.jp/ir/j/files/press/2017/press_20170711a.pdf
- 鹿児島県公安委員会告示（平成29年7月25日 第3334号）— 型式 闘え！サラリーマン／XA / 製造者ロデオ / 検定番号7S0687: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1707/documents/60654_20170724145425-1.pdf
- HAZUSE — 機械割 / BIG・宴BIG / ART初当たり / ART純増 / 天井 / 設定変更時365G・730G各50%: https://hazuse.com/machine/pachislot/7S0687/
- DMMぱちタウン — 天井 / リセット仕様 / 設定変更時ステップ・キャラモード全設定振り分け / 30Gキャラモード転落なし / 朝一変更推測: https://p-town.dmm.com/machines/2970
- P-WORLD — A+ART / 約1.7枚G / 宴BIG約300枚 / BIG約200枚 / ART約40G+α / 設定変更時365G or 730G: https://www.p-world.co.jp/machine/database/8477
- 楽スロ — 2017-09-19導入表記 / 天井1095G / リセット730G短縮記事・1年振り分け言及 / 性能レンジ: https://rakuslo.com/tatakae_salaryman-tenjyo.html
- 2017新台カレンダー — 導入日競合2017-09-04: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- 当時紹介動画（2017-08-03公開）— 2017年9月中旬より導入開始・地域差注記: https://www.youtube.com/watch?v=YeW1Ed5wqRo
