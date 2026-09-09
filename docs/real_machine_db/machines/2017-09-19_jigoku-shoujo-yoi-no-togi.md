machineName: パチスロ 地獄少女 宵伽
manufacturer: 藤商事
releaseDate: 2017-09-19
recordNumber: 1146
generation: 5号機（5.5号機世代）
systemType: A+ART / ボーナス+ART
formalModelName: 地獄少女 宵伽FSB
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 藤商事公式に現存するシリーズ第2弾「パチスロ 地獄少女 宵伽」。新筐体Fusion Core採用、ARTを主軸とするボーナス+ART機。
- ホール導入日はK-Navi、一撃、ちょんぼりすた、2-9伝説で **2017-09-19** が一致。ちょんぼりすたにはプレミアム先行導入の最速10日という注記があるため、通常全国導入日2017-09-19をcanonicalとする。
- 中古実機資料では型式名 **地獄少女 宵伽FSB** を確認。別の実機中古資料でも同表記が確認できるためformalModelNameへ採用するが、公的検定資料では今回直接照合できていないため信頼度を二次資料複数一致として扱う。
- 検定番号は `地獄少女 宵伽 / 地獄少女宵伽 / FSB / 藤商事 / 検定 / 検定通過 / 7S / 回胴式遊技機` 等へ検索語を変え、公式・機種DB・中古実機資料まで再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: OFFICIAL_FOR_PRODUCT_IDENTITY + ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE + DATABASE_MULTI_SOURCE_FOR_FORMAL_MODEL

## payoutRateBySetting
- 設定1: **97.7%**
- 設定2: **99.1%**
- 設定3: **100.5%**
- 設定4: **103.6%**
- 設定5: **107.3%**
- 設定6: **111.6%**
- 一撃、ちょんぼりすた、2-9伝説で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「地獄輪廻」初当たり
- 設定1: **1/415.2**
- 設定2: **1/379.1**
- 設定3: **1/356.5**
- 設定4: **1/319.6**
- 設定5: **1/261.1**
- 設定6: **1/221.7**

### ボーナス合算
- 全設定: **1/1057.0**
- ART初当たり・ボーナス合算は一撃、ちょんぼりすた、2-9伝説で照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約39G/50枚**。
- ちょんぼりすた等の解析資料で確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体: **約1.8枚/G**。
- ボーナス込みART区間: **約2.0枚/G**。
- 資料には「約2.0枚/G」をARTの基本仕様として記載するものもあるが、これはボーナス込み表現を含む。定義を分離し、同一定義のCONFLICTにはしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: **約210枚**（赤7/緑7）。
- 基本ART「地獄巡行」: **40〜80G + 地獄審判5G**、最低45G相当。
- 上位ARTとして「寒河江ミチル」「御景ゆずき」を搭載するが、完全再現用の内部抽選は本DB対象外。
reliability: DATABASE_PLUS_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は **通常 / 天国準備 / 天国** の3モード。
- モード別最大天井: **通常1200G+前兆 / 天国準備800G+前兆 / 天国100G+前兆**。
- 天井はART間でカウントし、途中のボーナスではリセットされない。
- ART間最大1200GでART当選。
- CZ「報復ノ契」およびG数契機のCZ/ART抽選を持つ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: DIRECT_RESET_MODE_STATE_CZ_NUMERICS_CONFIRMED; POWER_CYCLE_MODE_STATE_CZ_CONFIRMED; DISTINCT_STAY_SETTING_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は **天井ゲーム数をRESET**。
- 通常時モードを **再抽選**。
- 内部状態を **再抽選**。
- CZモードを **再抽選**。
- 液晶ステージは一撃解析で **学校 / 商店街 / 公園から抽選**。
- 天井G数RESETは2-9伝説で直接確認。一撃の2017-10-22版は天井ゲーム数のみ当時「調査中」としていたため、後続/別系統解析で解消済みとして扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 純電源OFF→ONとは別条件として「設定を据え置いた場合」を本機固有に独立記載した直接資料は、`据え置き / 朝一 / リセット / 電源OFF ON / 天井引継ぎ / モード引継ぎ`等へ検索語を変えて再探索しても固定できず **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- 純電源OFF→ONについてはモード・状態・CZモード・天井の引継ぎ情報を別項目で保持する。
reliability: UNVERIFIED_FOR_DISTINCT_STAY_SETTING

### powerCycleBehavior
- 純電源OFF→ON時は **天井ゲーム数CARRYOVER / モードCARRYOVER / 内部状態CARRYOVER / CZモードCARRYOVER**。
- 一撃ではモード・状態・CZモード引継ぎを直接確認。ちょんぼりすたの朝一比較表では天井も引継ぎとして確認される。
- 液晶ステージは一撃で学校/商店街/公園から抽選。ステージだけで設定変更と純電断を決定的に判別できる契約ではない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- settingChange: **RESET**。
- stay setting: **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- pure power OFF→ON: **CARRYOVER**。
- ボーナス当選ではART間天井カウンタをリセットしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalModeCeiling: **1200G+前兆**。
- heavenPreparationCeiling: **800G+前兆**。
- heavenCeiling: **100G+前兆**。
- settingChangeでゲーム数は0G相当から再開し、同時にモード再抽選。したがって「固定の短縮天井」ではなく、朝一モードによって **100 / 800 / 1200G** の最大天井が決まる。
- pure power OFF→ON: 前日ゲーム数とモードを引き継ぐ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
設定変更時モード振り分け:
- 設定1: **通常44.53% / 天国準備44.92% / 天国10.55%**
- 設定2: **通常42.19% / 天国準備42.58% / 天国15.23%**
- 設定3: **通常41.02% / 天国準備41.41% / 天国17.58%**
- 設定4: **通常38.67% / 天国準備39.06% / 天国22.27%**
- 設定5: **通常33.59% / 天国準備33.59% / 天国32.81%**
- 設定6: **通常34.77% / 天国準備37.11% / 天国28.13%**
- 純電源OFF→ONはモードCARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT_PUBLIC_RESET_NUMERICS

### stateAfterReset
設定変更時内部状態振り分け:
- 設定1: **通常75.00% / 高確25.00%**
- 設定2: **通常73.44% / 高確26.56%**
- 設定3: **通常71.88% / 高確28.13%**
- 設定4: **通常70.31% / 高確29.69%**
- 設定5: **通常68.36% / 高確31.64%**
- 設定6: **通常66.41% / 高確33.59%**
- 設定変更で高確へ移行した場合の高確G数: **10G 66.80% / 15G 32.03% / 20G 0.39% / 25G 0.39% / 30G 0.39%**。
- 純電源OFF→ONは内部状態CARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT_PUBLIC_RESET_NUMERICS

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は天国準備・天国スタートを含む専用再抽選が行われる。特に天国なら最大 **100G+前兆**、天国準備なら最大 **800G+前兆** となるため、通常1200G最大天井に比べ朝一の明確な狙い要素。
- 天国振り分けは **設定1 10.55%〜設定5 32.81%（設定6 28.13%）**。
- 設定変更時高確スタートは **25.00〜33.59%**。
- CZモードも設定変更時に再抽選され、A 8.59% / B 33.20% / C 33.20% / D 25.00%。ただし前日状態との比較で必ず有利になるとは限らないため「保証恩恵」ではなく朝一専用再抽選値として保持する。
reliability: ANALYSIS_HIGH_DIRECT_PUBLIC_RESET_NUMERICS

### resetPenalties
- 設定変更で前日のART間ゲーム数、モード、内部状態、CZモードがリセットされるため、前日深いハマりや有利状態を保持していた場合は失われる。
- 「怨みストック」は通常ゲーム中に蓄積しARTまで保持される機能だが、設定変更/据え置き/純電断時の保持・消滅契約は検索語・資料系統を変えて再探索しても直接固定できず、ペナルティとして推測しない。
- 設定変更専用の追加不利率は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CONFIRMED_RESET_FIELDS / UNVERIFIED_FOR_URAMI_STOCK_RESET

### resetDetection
- 設定変更時・純電源OFF→ON時とも液晶ステージは学校/商店街/公園から抽選とする解析があり、ステージ単独では決定的判別にならない。
- 朝一100G前後のART当選は天国スタートを示唆し得るが、前日モード引継ぎ等でも起こり得るため設定変更確定ではない。
- 本機固有の確定ガックン契約・発生率、初期出目/ランプによる変更確定契約は `ガックン / 設定変更判別 / 朝一 / 据え置き / 電源OFF ON` 等で再探索したが **UNVERIFIED_AFTER_RESEARCH**。パチンコ版「地獄少女 宵伽」のガックン情報は別機種なので転記しない。
reliability: ANALYSIS_HIGH_FOR_STAGE_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetModeDistributionSetting1: **通常44.53 / 天国準備44.92 / 天国10.55%**
- resetModeDistributionSetting2: **42.19 / 42.58 / 15.23%**
- resetModeDistributionSetting3: **41.02 / 41.41 / 17.58%**
- resetModeDistributionSetting4: **38.67 / 39.06 / 22.27%**
- resetModeDistributionSetting5: **33.59 / 33.59 / 32.81%**
- resetModeDistributionSetting6: **34.77 / 37.11 / 28.13%**
- resetStateHighProbability: **設定1 25.00 / 2 26.56 / 3 28.13 / 4 29.69 / 5 31.64 / 6 33.59%**
- resetHighDuration: **10G 66.80 / 15G 32.03 / 20G 0.39 / 25G 0.39 / 30G 0.39%**
- resetCzModeDistribution: **A 8.59 / B 33.20 / C 33.20 / D 25.00%**
- modeCeilings: **通常1200G / 天国準備800G / 天国100G (+前兆)**
- purePowerCycleModeStateCz: **CARRYOVER**
- purePowerCycleCeilingCounter: **CARRYOVER**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- 公的/一次資料で直接確認できる検定番号。
- 純電源OFF→ONと独立して明記された「設定据え置き」契約。
- 怨みストックの設定変更/据え置き/純電断時の保持・消滅契約。
- 本機固有の確定ガックン/初期出目/ランプ判別契約。

## conflicts
- netIncrease表記: 資料に **ART単体約1.8枚/G** と **ボーナス込み約2.0枚/G** がある。定義差として分離保持し、同一定義CONFLICTとはしない。
- 一撃2017-10-22版の設定変更表では天井ゲーム数が当時「調査中」だが、2-9伝説は設定変更で天井G数リセット、ちょんぼりすたは設定変更/電源OFF比較でRESET/CARRYOVERを提示。後続・別系統情報で補完し **RESOLVED_SOURCE_COMPLETENESS_VARIANCE** とする。
- 性能コア主要値に重大な同一定義CONFLICTは確認されない。

## sources
取得日: 2026-09-10
- 藤商事公式「パチスロ 地獄少女 宵伽」: https://www.fujimarukun.co.jp/products/s_jigoku2/
- K-Navi: https://p-kn.com/slot/2875/
- 一撃 機種TOP: https://1geki.jp/slot/s_jigoku2/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_jigoku2/3/
- 一撃 設定判別/朝イチ: https://1geki.jp/slot/s_jigoku2/5/
- 一撃 通常時内部モード: https://1geki.jp/slot/s_jigoku2/43/
- 一撃 通常時内部状態: https://1geki.jp/slot/s_jigoku2/44/
- 一撃 通常時CZモード: https://1geki.jp/slot/s_jigoku2/45/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/43934/
- 2-9伝説: https://2-9densetsu.com/jigoku2/
- P-WORLD: https://www.p-world.co.jp/machine/database/8482
- 中一商事（型式名）: https://www.nakaiti.com/html/sFujisho016.html
- 愛品館（型式名補助）: https://www.aihin.co.jp/new/news-1042354/
