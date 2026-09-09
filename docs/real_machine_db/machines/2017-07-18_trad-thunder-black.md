machineName: トラッドサンダーブラック
manufacturer: 岡崎産業
releaseDate: 2017-07-18
recordNumber: 1112
generation: 5号機
systemType: ノーマルA / 完全告知
formalModelName: トラッドサンダーブラック／T1
certificationNumber: 7S0197
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `トラッドサンダーブラック／T1`、検定番号 `7S0197`、メーカー岡崎産業を確認。
- 導入日は、すろぱちくえすと・2-9伝説・2017年導入一覧が **2017-07-18** を掲載する一方、HAZUSEおよび2017年新台カレンダー系資料には **2017-07-17** の記載がある。
- 複数の当時/年次導入カレンダーで一致する2017-07-18をchronological canonicalとし、2017-07-17は `CONFLICT_SECONDARY_RELEASE_DATE` として保持。平均・日付補正は行わない。
- 2017-06-03の業界記事で岡崎産業公式「SLOTトラッドサンダーブラック」ページ公開が報じられ、公式ページURLも記録されている。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY / CONFLICT_FOR_EXACT_RELEASE_DATE

## payoutRateBySetting
- 設定1: **96.5%**
- 設定2: **99.0%**
- 設定3: **101.0%**
- 設定4: **104.3%**
- 設定5: **107.1%**
- 設定6: **111.5%**
- HAZUSE、すろぱちくえすと、2-9伝説、pacnkで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
- 設定1: **1/293.88**
- 設定2: **1/287.44**
- 設定3: **1/277.69**
- 設定4: **1/265.33**
- 設定5: **1/254.02**
- 設定6: **1/253.03**

### REG
- 設定1: **1/383.25**
- 設定2: **1/350.46**
- 設定3: **1/327.68**
- 設定4: **1/291.27**
- 設定5: **1/276.52**
- 設定6: **1/227.56**

### ボーナス合算
- 設定1: **1/166.34**
- 設定2: **1/157.92**
- 設定3: **1/150.31**
- 設定4: **1/138.85**
- 設定5: **1/132.40**
- 設定6: **1/119.81**
- HAZUSEの精密値と、すろぱちくえすと/ちょんぼりすた等の丸め値が一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約35G/50枚**。
- すろぱちくえすと、2-9伝説、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ノーマルAタイプのためAT/ART純増は **NOT_APPLICABLE**。

## basicPayout
- BIG BONUS: **最大312枚**（345枚超払い出し終了）。
- REG BONUS: **104枚**（105枚超払い出し終了）。
- HAZUSE、すろぱちくえすと、中古実機資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナスのみで出玉を増やす完全告知ノーマルAタイプ。
- 全8種類の告知ランプを搭載し、1つでも点灯でボーナス当選濃厚、2個以上同時点灯でBIG濃厚。
- ゲーム数天井は非搭載。
- AT / ART / CZ / RTによる主要出玉区間は非搭載。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_RESET_SPECIFIC_NUMERIC_BEHAVIOR_CONFIRMED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機固有の設定変更時専用挙動（朝一高確、専用モード、ボーナス当選率優遇、短縮天井等）は、機種名・型式名に「設定変更」「リセット」「朝一」「変更判別」を組み合わせ、HAZUSE、当時解析、年次DB、後年資料まで横断したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的なノーマルAタイプの挙動から推測して補完しない。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION / UNVERIFIED_FOR_MACHINE_SPECIFIC_RESET_INTERNALS

### carryOverBehavior
- 「据え置き」と明記した本機固有の直接契約（成立済みボーナス、告知状態、ボーナス後ゲーム履歴等）は、表記・検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ゲーム数天井は存在しないため、天井進捗の据え置き/引継ぎは **NOT_APPLICABLE**。
reliability: UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_STATE

### powerCycleBehavior
- 純電源OFF→ONのみの場合の成立済みボーナス/告知状態/ボーナス後履歴等について、本機固有の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- 「電源OFF ON」「電源入切」「据え置き」「朝一」「リセット」を組み替えて再探索したが、設定変更との差を示す公開資料を固定できなかった。
reliability: UNVERIFIED

### gameCounterReset
- ゲーム数天井: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- BIG時の特別BGM条件に「ボーナス後50G以内」「ボーナス後100G以内かつゾロ目G」等があるが、これは天井/解除ゾーンではなく演出条件。設定変更/純電断時の履歴処理は直接資料がないため推測しない。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 設定変更専用短縮天井も天井自体がないためN/A。

### modeAfterReset
- ゲーム数モード/朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の全モード移行テーブルに相当するゲーム性自体を確認できない。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION

### stateAfterReset
- 高確/低確/CZ前兆等の朝一内部状態: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_A_GAMEPLAY**。
- 成立済みボーナスなど低レベル内部状態の設定変更/純電断契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION / UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_STATE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、朝一高確、CZ優遇、初当たり確率アップ、専用モード等の設定変更恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の設定差（特にREG確率、ブドウ/チェリー、BIG中ハズレ）は設定推測要素だが、朝一リセット恩恵とは分離。
reliability: ANALYSIS_HIGH_FOR_NO_PUBLISHED_RESET_BENEFIT_FOUND

### resetPenalties
- 設定変更専用の公開された不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CONFIRMED_PUBLISHED_PENALTY

### resetDetection
- 本機固有の確定的なガックン、ランプ、出目、表示等による設定変更/据え置き判別契約は、機種名・型式名と「ガックン」「朝一」「リセット」「据え置き」「設定変更」を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス確率、小役確率、BIG中ハズレは設定推測材料だが、変更/据え置きの直接判別ではないためresetDetectionへ転用しない。
reliability: UNVERIFIED_FOR_MACHINE_SPECIFIC_RESET_DETECTION

### numericResetData
- resetCeiling: **NOT_APPLICABLE**。
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefitProbability: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetGakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- exact releaseDate: HAZUSEおよび新台カレンダー系資料は **2017-07-17**、すろぱちくえすと・2-9伝説・2017年導入一覧は **2017-07-18**。複数の当時/年次資料で7/18が一致するためchronological canonicalを2017-07-18とし、7/17を **CONFLICT_SECONDARY_RELEASE_DATE** として保持。

## missingFields
- explicit stay-setting contract for low-level bonus/announcement/history state: UNVERIFIED_AFTER_RESEARCH。
- pure power-cycle contract for the same internal state: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun/lamp/initial-reel reset detection: UNVERIFIED_AFTER_RESEARCH。
- public reset-specific mode/state/morning-hit numeric values: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- HAZUSE 基本/天井・設定判別: https://hazuse.com/machine/pachislot/7S0197/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/7S0197/genre/201/
- HAZUSE 初打講座: https://hazuse.com/machine/pachislot/7S0197/genre/203/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/7S0197/genre/208/
- すろぱちくえすと「トラッドサンダーブラック」: https://www.slopachi-quest.com/article/trad-thunder-black/
- 2-9伝説「トラッドサンダーブラック」: https://29den.com/tradthunderblack/
- ちょんぼりすた「トラッドサンダーブラック」: https://chonborista.com/slot/okazaki-slot/43051/
- pacnk 設定判別ツール: https://pacnk.com/slot/tools/sh_toraddosandaburakku.html
- 2017年導入日順一覧（すろぱちくえすと）: https://www.slopachi-quest.com/article/2017-sindai/
- 2-9伝説 新台導入日一覧: https://29den.com/newslot/
- 新台スロット2017年度カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- ぱちんこドキュメント（2017-06-03、岡崎産業公式ページ公開記録）: https://pachinkolist.com/archives/51416747.html
- 当時岡崎産業公式ページURL（業界記事保存記録）: http://www.okazakisangyo.com/slot/tradthunderblack/index.html
- ホームスロット中古実機資料: https://home-slot.net/SHOP/s-okazaki14.html
