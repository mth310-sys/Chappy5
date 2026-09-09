machineName: ぱちスロ 仮面ライダーBLACK
manufacturer: 京楽産業.（KYORAKU）
releaseDate: 2017-08-21
recordNumber: 1122
generation: 5号機
systemType: ART / CZ / 周期抽選 / ボーナス非搭載
formalModelName: パチスロ仮面ライダーBLACKKB
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 京楽産業.の2017-08-07公式告知で8月21日導入前の本機を直接確認。2017-06-29の京楽発表を伝える業界記事でも2017-08-21全国導入予定を確認。
- グリーンべるとは納品8月20日予定、パチビー/K-Navi/一撃/ちょんぼりすたも2017-08-21導入で一致するため releaseDate canonical は **2017-08-21**。
- 型式名は中古実機流通資料2系統で **パチスロ仮面ライダーBLACKKB** を確認。
- 検定番号は「ぱちスロ/パチスロ」「仮面ライダーBLACK/ブラック」「KB」「京楽」「回胴式遊技機」「検定番号」「7S0x」等へ検索語を変え、業界記事・中古実機DB・公示系検索を横断したが今回直接固定できず **UNVERIFIED_AFTER_RESEARCH**。推定しない。
reliability: OFFICIAL_FOR_PRODUCT_AND_RELEASE / INDUSTRY_HIGH_FOR_RELEASE / ANALYSIS_SINGLE_MULTI_RETAIL_FOR_FORMAL_MODEL / UNVERIFIED_FOR_CERTIFICATION

## payoutRateBySetting
- 設定1: **97.5%**
- 設定2: **97.8%**
- 設定3: **100.3%**
- 設定4: **103.8%**
- 設定5: **106.5%**
- 設定6: **112.0%**
- 一撃、ちょんぼりすた、pacnk、当時整理資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「ライジングRUSH」初当たり
- 設定1: **1/495.1**
- 設定2: **1/489.7**
- 設定3: **1/453.5**
- 設定4: **1/430.8**
- 設定5: **1/411.2**
- 設定6: **1/368.2**

### CZ合算（ライダーチャンス＋創世ゾーン）
- 設定1: **1/197.4**
- 設定2: **1/195.7**
- 設定3: **1/178.9**
- 設定4: **1/168.6**
- 設定5: **1/160.9**
- 設定6: **1/144.7**
- K-Navi、一撃、pacnkで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約46.5G/50枚**。
- 一撃、ちょんぼりすた、当時整理資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ライジングRUSH」: **約2.0枚/G**。
- 京楽発表を伝える業界記事、P-WORLD、パチビー、一撃で一致。
reliability: INDUSTRY_HIGH / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART初期ゲーム数: **40G or 100G + α**。
- ARTゲーム数消化後は勝率約50%の「ライジングBATTLE」へ。勝利時は消化したARTゲーム数＋勝利報酬を次セットへ再セットするライジングシステム。
- ボーナス非搭載のART主体機として扱う。
reliability: INDUSTRY_HIGH / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はレア役CZ「ライダーチャンス」と規定ゲーム数周期CZ「創世ゾーン」からARTを目指す。
- 創世ゾーン抽選周期: **100G / 300G / 500G / 700G / 900G / 1100G**。
- 通常天井: **ART間最大1280G消化でART当選**。
- 月レベルは周期到達時の創世ゾーン突入期待度、太陽レベルは創世ゾーン中のART期待度に影響する5段階管理。
reliability: INDUSTRY_HIGH_FOR_SYSTEM / ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_AND_LEVEL_SYSTEM

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_TABLE_AND_NUMERIC_LEVEL_DISTRIBUTION
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **内部状態再抽選**。
- **月レベル・太陽レベルを再抽選し、いずれもLv2以上**。
- 液晶ステージは **埠頭ステージ**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE

### carryOverBehavior
- 「据え置き」と明記した独立した本機固有契約は、純電源OFF→ONの直接表から機械的に転記しない。
- 表記揺れ、型式名、京楽、朝一、据え置き、設定変更、電源OFF/ONで再探索したが、今回独立表を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONでは **天井ゲーム数CARRYOVER / 内部状態CARRYOVER / 月レベルCARRYOVER / 太陽レベルCARRYOVER**。
- 液晶ステージは **埠頭ステージ**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE

### ceilingAfterReset
- 通常天井 **ART間1280G** は設定変更でRESET。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし月/太陽レベルが最低Lv2から始まるため、100/300/500/700/900/1100Gの創世ゾーン経由ART期待度は通常より優遇される。
- 期待値見える化の新台初日実戦集計ではリセット後ゾーン期待度が通常平均の約1.4倍との観測があるが、これは解析確定値ではなく **OBSERVATIONAL_RESET_ZONE_UPLIFT** として分離する。
reliability: ANALYSIS_HIGH_FOR_NO_FIXED_SHORTENING_AND_LEVEL_EFFECT / OBSERVATIONAL_FOR_ZONE_UPLIFT

### modeAfterReset
- 本機の朝一で比較すべき主要管理値は「月レベル」「太陽レベル」。設定変更時は両者とも以下の同一振り分け:
  - Lv2: **50.00%**
  - Lv3: **25.00%**
  - Lv4: **15.00%**
  - Lv5: **10.00%**
  - Lv1: **0%**
- 一撃と期待値見える化で一致。
- 上記以外の独立した朝一専用通常モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE_MULTI_SOURCE

### stateAfterReset
- 設定変更: **内部状態再抽選**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- 設定変更時の低確/通常/高確等の具体的数値振り分けは、「設定変更時」「高確」「低確」「状態再抽選」等へ再探索したが直接数値を固定できず **UNVERIFIED_AFTER_RESEARCH_FOR_NUMERIC_STATE_DISTRIBUTION**。
reliability: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 月レベル・太陽レベルがともに **Lv2以上確定**。
- Lv2/3/4/5 = **50/25/15/10%**のため、創世ゾーン突入率と突入時ART期待度が通常より朝一優遇。
- リセット後の100/300/500G等の周期ゾーンは通常より狙いやすい。実戦値の約1.4倍は観測値としてのみ保持。
reliability: ANALYSIS_HIGH_FOR_LEVEL_DISTRIBUTION / OBSERVATIONAL_FOR_ZONE_UPLIFT

### resetPenalties
- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更・純電源OFF→ONの双方で **埠頭ステージ**開始のため、朝一ステージ単独では判別不可。
- 期待値見える化は本機の **ガックン判別不可** と明記。確定的なガックン契約にはしない。
- メニュー画面のキャラで月/太陽レベルを示唆でき、高レベル示唆はリセット推測材料になりうるが、電断CARRYOVERや通常遊技中のレベル上昇があるため deterministic な設定変更判別ではない。
reliability: ANALYSIS_HIGH_FOR_STAGE_AND_GAKKUN / ANALYSIS_HIGH_FOR_LEVEL_HINT_LIMITATION

### numericResetData
- resetMoonLevelDistribution: **Lv2 50.00% / Lv3 25.00% / Lv4 15.00% / Lv5 10.00% / Lv1 0%**
- resetSunLevelDistribution: **Lv2 50.00% / Lv3 25.00% / Lv4 15.00% / Lv5 10.00% / Lv1 0%**
- resetMinimumMoonLevel: **2**
- resetMinimumSunLevel: **2**
- normalCreationZoneCheckpoints: **100 / 300 / 500 / 700 / 900 / 1100G**
- observedResetZoneUplift: **通常平均比 約1.4倍（新台初日実戦集計、解析確定値ではない）**
- resetStateNumericDistribution: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- ART初当たりは一部資料で整数丸め（1/495, 1/490等）があるが、精密値との丸め差でありCONFLICTではない。
- リセット後ゾーン約1.4倍は実戦観測であり、メーカー/解析の固定当選率ではないため numericResetData の解析確定値と混同しない。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH。
- explicit stay-setting direct contract separate from pure power cycle: UNVERIFIED_AFTER_RESEARCH。
- setting-change internal-state numeric distribution: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- KYORAKU公式 NEWS（2017-08-07）: https://www.kyoraku.co.jp/news/detail/145
- パチ7 / プレイグラフ 京楽発表記事（2017-06-29）: https://pachiseven.jp/news/index/page%3A64
- グリーンべると / P-WORLD 業界記事（2017-06-29）: https://news.p-world.co.jp/articles/9422/greenbelt
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/8450
- パチビー: https://www.pachibee.jp/movies/index/13963
- K-Navi: https://p-kn.com/slot/2843/
- 一撃 機種トップ: https://1geki.jp/slot/s_kamenrider_black/
- 一撃 天井/設定変更/電源OFF-ON: https://1geki.jp/slot/s_kamenrider_black/3/
- 一撃 月/太陽レベル抽選: https://1geki.jp/slot/s_kamenrider_black/46/
- 一撃 設定判別/朝一: https://1geki.jp/slot/s_kamenrider_black/5/
- 一撃 小役/50枚ベース: https://1geki.jp/slot/s_kamenrider_black/4/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/42116/
- 期待値見える化 リセット挙動/実戦値: https://slotjin.com/slot/kamenrider-black-reset/
- pacnk 設定判別/スペック: https://pacnk.com/slot/tools/sh_kamenraidaburakku.html
- 中一商事 型式名: https://www.nakaiti.com/html/sKyoraku008.html
- Yahoo!ショッピング 中一商事 型式名: https://store.shopping.yahoo.co.jp/nakaiticom/20216.html
