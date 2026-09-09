machineName: グレートキングハナハナ-30
manufacturer: パイオニア
releaseDate: 2017-07-18
recordNumber: 1111
generation: 5号機
systemType: ノーマルA / 完全告知 / 30Φ沖スロ
formalModelName: グレートキングハナハナ／DX-30
certificationNumber: 7S0206
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パイオニア公式2017年製品一覧で「グレートキングハナハナ-30」、2017年7月発売を確認。
- HAZUSEは導入開始日2017-07-18、型式 `グレートキングハナハナ／DX-30`、検定番号 `7S0206` を掲載。
- パチ7のハナハナシリーズ整理も導入日2017-07-18。
- 一撃・ちょんぼりすた等には2017-07-24導入予定/導入表記があり、日単位資料に差がある。最も早い具体的ホール導入日として複数資料が一致する2017-07-18をchronological canonicalとし、2017-07-24をCONFLICT_SECONDARY_RELEASE_DATEとして保持。
- 2017年11月導入の25Φ「グレートキングハナハナ」は別スペック/別型式のため本30Φレコードへ混同しない。
reliability: OFFICIAL_FOR_RELEASE_MONTH / ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_DATE / ANALYSIS_HIGH_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
- 設定1: **96%**
- 設定2: **98%**
- 設定3: **101%**
- 設定4: **104%**
- 設定5: **107%**
- 設定6: **112%**
- 一撃、パチ7、ちょんぼりすた等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
- 設定1: **1/299**
- 設定2: **1/288**
- 設定3: **1/278**
- 設定4: **1/268**
- 設定5: **1/255**
- 設定6: **1/234**

### REG
- 設定1: **1/496**
- 設定2: **1/468**
- 設定3: **1/436**
- 設定4: **1/407**
- 設定5: **1/374**
- 設定6: **1/336**

### ボーナス合算
- 設定1: **1/186**
- 設定2: **1/178**
- 設定3: **1/170**
- 設定4: **1/161**
- 設定5: **1/151**
- 設定6: **1/138**
- 一撃、パチ7、ちょんぼりすた、HAZUSEの設定推測ページで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約37G/50枚**。
- ちょんぼりすたが約37G/50枚、パイオニア公式配信アプリ説明も「ベースは約37G」と明記。
- 後年のスロがちには約35G/50枚の記載があり、定義/算出差を否定できないため **CONFLICT_SECONDARY_BASE_APPROX_35G** として保持し平均しない。
reliability: OFFICIAL_DERIVED_APP_DESCRIPTION_AND_ANALYSIS_FOR_37G / CONFLICT_FOR_35G_SECONDARY

## netIncrease
- ノーマルAタイプのためART/AT純増は **NOT_APPLICABLE**。

## basicPayout
- BIG BONUS: **最大312枚**。
- REG BONUS: **最大130枚**。
- 一撃、P-WORLD、HAZUSE 25Φ同系スペック資料、パイオニア公式配信アプリ説明で一致。
reliability: OFFICIAL_DERIVED_APP_DESCRIPTION_AND_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ハイビスカス点滅でボーナス告知するノーマルAタイプ。
- ゲーム数天井/CZ/AT/ARTは非搭載。
- HAZUSE・ちょんぼりすた等で天井非搭載を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_SPECIFIC_NUMERIC_EVIDENCE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更後、**最初のBIG終了時だけパネルフラッシュ振り分けが変更時専用値になる**。
- 設定変更後1回目のBIG: 上部パネルのみ **37.50%**、上下パネル **12.50%**、フラッシュなし **50.00%**。すなわち何らかのパネルフラッシュが **50%**。
- HAZUSE、ちょんぼりすた、当時解析ブログで一致。
- 通常時のゲーム数モード/高確低確のような内部状態について、設定変更時専用の公開契約は確認できない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_FIRST_BIG_PANEL_FLASH

### carryOverBehavior
- 「据え置き」と明記して、設定変更後1回目BIG用パネルフラッシュフラグ、87Gレトロサウンド判定履歴、成立済みボーナス等がどう扱われるかを示す本機固有の直接表は確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なノーマル機挙動から推測して補完しない。
reliability: UNVERIFIED

### powerCycleBehavior
- 純電源OFF→ONのみの場合の、変更後1回目BIG用パネルフラッシュフラグ/87G履歴/成立済みボーナス状態に関する本機固有の直接契約は、機種名・型式・「電源OFF ON」「電源入切」「朝一」「据え置き」「リセット」「パネフラ」「ガックン」を組み替え、HAZUSE・一撃・ちょんぼりすた・当時実戦/解析・後年回顧資料まで横断したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED

### gameCounterReset
- ゲーム数天井: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 87G以内の連チャンでレトロサウンド抽選が行われるが、これは天井/ゾーンではない。設定変更時にこの「前回ボーナス後87G」判定履歴がどう初期化されるかは直接資料を固定できずUNVERIFIED。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 設定変更専用短縮天井も天井自体がないためN/A。

### modeAfterReset
- ゲーム数モード/朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更後1回目BIG専用パネルフラッシュ振り分けは「モード」ではなくreset-specific observable behaviorとして分離。
reliability: ANALYSIS_HIGH_FOR_NO_PUBLISHED_GAME_COUNT_MODE

### stateAfterReset
- 高確/低確等の朝一内部状態: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_A_GAMEPLAY**。
- 成立済みボーナスや前回ボーナス履歴など狭義の内部状態について設定変更/純電断契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION / UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_STATE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後1回目のBIGでは、何らかのパネルフラッシュが **50%** で発生するため、客側が朝一変更推測に利用できる。
- 内訳: 上のみ37.5%、上下12.5%。
- 天井短縮、朝一高確、CZ優遇、初当たり確率アップ等は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 設定変更専用の公開された確定的不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CONFIRMED_PUBLISHED_PENALTY

### resetDetection
- 最重要の公開変更判別要素は **設定変更後1回目BIGのパネルフラッシュ**。
- 変更時: 上部のみ37.5% / 上下12.5% / 合計50%。
- 通常BIG後でもパネルフラッシュは発生し、設定1～6で上のみ約7.3～11.7%、上下約2.4～3.9%のため、朝一パネフラは変更期待度を上げるが **deterministicではない**。
- 実戦/解析資料では朝一ガックンチェックが変更推測材料として利用される。一方、実戦回顧には「設定変更でも必ずガックンするとは限らない」とする記録があるため、本DBでは **POSSIBLE_GAKKUN_NONDETERMINISTIC / ANALYSIS_SINGLE_PRACTICE** とし確定契約にしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_PANEL_FLASH / ANALYSIS_SINGLE_PRACTICE_FOR_GAKKUN

### numericResetData
- firstBigPanelFlashAfterSettingChange: **50.00% total**。
  - upperPanelOnly: **37.50%**。
  - upperAndLowerPanels: **12.50%**。
  - noFlash: **50.00%**。
- resetCeiling: **NOT_APPLICABLE**。
- resetModeDistribution: **NONE_CONFIRMED_AS_GAMEPLAY_MODE**。
- publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetGakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- exact releaseDate: HAZUSE/パチ7は **2017-07-18**、一撃/ちょんぼりすた等は **2017-07-24**。パイオニア公式は2017年7月まで。chronological canonicalは複数資料で最も早く具体的な2017-07-18、7/24は **CONFLICT_SECONDARY_RELEASE_DATE** として保持。
- baseGamesPer50: パイオニア公式配信アプリ説明・ちょんぼりすたは **約37G**、後年スロがちは **約35G**。平均せず **CONFLICT_SECONDARY_BASE_APPROX_35G** として保持。

## missingFields
- explicit stay-setting contract for reset-specific first-BIG flag / 87G history: UNVERIFIED_AFTER_RESEARCH。
- pure power-cycle contract for the same internal flags: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun probability/contract: UNVERIFIED_AFTER_RESEARCH。
- exact behavior of 87G retro-sound history across setting change/power cycle: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- パイオニア公式 2017年製品一覧: https://www.slot-pioneer.co.jp/products/2017.html
- パイオニア公式 グレートキングハナハナ-30発売告知: https://www.slot-pioneer.co.jp/information/great_king_hanahana.html
- パイオニア公式スマートフォン向けコンテンツ（公式アプリ説明への導線）: https://www.slot-pioneer.co.jp/smafo.html
- Apple App Store「激Jパチスロ グレートキングハナハナ」（公式実機アプリ説明、約37Gベース/312枚/130枚）: https://apps.apple.com/jp/app/%E6%BF%80j%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A/id1374747903
- HAZUSE 30Φ: https://hazuse.com/machine/pachislot/7S0206/genre/202/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/7S0206/genre/208/
- 一撃 機種TOP: https://1geki.jp/slot/s_greatkinghana/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_greatkinghana/1/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_greatkinghana/61/
- パチ7 ハナハナシリーズまとめ: https://pachiseven.jp/articles/detail/11686
- P-WORLD: https://www.p-world.co.jp/machine/database/8401
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/40070/
- 激アツ 設定変更後パネルフラッシュ/ガックン実戦運用: https://gekiatsu7.com/slot-analyze/3506/
- 激アツ 朝一実戦補足: https://gekiatsu7.com/slot-tsuchy/3943/
- さむらい流 実戦回顧（設定変更でもガックンしない場合の記録）: https://sloter-samurai.com/practicing/greatkinghanahana_jissen04
- スロがち（約35Gベースの競合二次資料）: https://slogati.com/gk-hanahana/
