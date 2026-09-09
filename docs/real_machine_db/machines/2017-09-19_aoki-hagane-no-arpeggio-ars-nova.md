machineName: パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-
manufacturer: タイヨーエレック製造 / サミー発売
releaseDate: 2017-09-19
recordNumber: 1137
generation: 5号機（5.5号機世代）
systemType: A+ART / 自力バトル型ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL

## identity
- サミー公式2017年7月18日発売告知で、製造元がタイヨーエレック株式会社であることを確認。9月上旬より全国ホールで稼動開始予定と告知。
- PiDEA Xの2017年7月31日内覧会記事では納品日9月18日予定。パチ＆スロ必勝本、期待値見える化、クランキーセブンは2017-09-19導入で一致するため、本DBcanonicalホール導入日は2017-09-19とする。
- P-WORLDはメーカーをタイヨーエレック、複数攻略資料はサミー表記。製造元/発売元の差として分離し、同一機種のメーカーCONFLICTとは扱わない。
- 型式名・検定番号は、機種名表記揺れ、タイヨーエレック、サミー、型式、検定番号、7S系、後継Mental Model ver.との混同回避を含め再探索したが、2017年初代について直接固定できる資料を取得できず、推測せずUNVERIFIED_AFTER_RESEARCH。
reliability: OFFICIAL_PLUS_INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **97.6%**
- 設定2: **99.2%**
- 設定3: **100.7%**
- 設定4: **103.1%**
- 設定5: **106.0%**
- 設定6: **110.2%**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「BLUE STEEL MODE」初当たり
- 設定1: **1/377.9**
- 設定2: **1/350.5**
- 設定3: **1/326.7**
- 設定4: **1/297.8**
- 設定5: **1/269.7**
- 設定6: **1/244.4**

### ボーナス
- 全設定: **1/993.0**
- トライデントBONUS / BIG BONUSはいずれも獲得150枚。資料上は合算1/993.0表記として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical yardstick: **約38.2G/50枚**。
- 期待値見える化、クランキーセブンで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「BLUE STEEL MODE」: **約1.8枚/G**。
- 上位ART「ARS NOVA MODE」も同一ART純増系で、平均勝率90%以上と業界記事・P-WORLDが説明。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG BONUS: **150枚**。
- トライデントBONUS: **150枚**。
- ART「BLUE STEEL MODE」: **1セットのゲーム数不定**。敵HPを0にすると次セット継続する自力バトル型。
- 上位ART「ARS NOVA MODE」: **平均勝率90%以上**。
reliability: INDUSTRY_PLUS_DATABASE

## modeSpecificMinimumData
- A+ART機。通常時は主にCZ高確「保留機関」→CZ「対艦演習」→ARTを目指す。
- 通常天井: **ART間1200G+前兆（最大16G）**。ボーナスではART間天井ゲーム数はリセットされない。
- 設定変更時のみ天井を再抽選し、最大800Gまで短縮される。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_VS_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **ART間天井ゲーム数RESET / 再抽選**。
- 設定変更専用天井振り分け: **100G 25% / 400G 25% / 800G 50%**。
- 内部状態は **RESELECT**。
- 設定変更時の内部状態: **低確50% / 通常25% / 高確25%**。
- 朝一ステージは複数解析で「調査中」とされ、直接契約は固定できない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き運用では、設定変更を行わないためART間天井進捗・内部状態を引き継ぐ扱い。
- 純電源OFF→ONの直接比較資料で **天井CARRYOVER / 内部状態CARRYOVER** を確認。
- 「据え置き」という語で独立記述された本機固有資料は限定的だが、設定変更vs電源OFF比較と朝一解析の実運用契約が一致するためCARRYOVERとする。
reliability: ANALYSIS_HIGH_BY_DIRECT_POWER_CYCLE_COMPARISON

### powerCycleBehavior
- 純電源OFF→ON: **ART間天井ゲーム数CARRYOVER**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- 設定変更時とは明確に挙動が異なる。
- 電源OFF→ON時の朝一ステージは公開資料で調査中のため **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- settingChange: **RESET / reset-ceiling draw applied**。
- stay setting / pure power cycle: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalCeiling: **ART間1200G+最大16G前兆**。
- resetCeilingDistribution: **100G 25% / 400G 25% / 800G 50%**。
- resetMaximumCeiling: **800G**。
- 最大値比較では通常1200Gから800Gへ **最大400G短縮**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 通常時にゲーム数解除モードを主軸とする機種ではなく、通常時のゾーンは基本的に存在しないと解析される。
- 設定変更時のみ天井ゲーム数が100/400/800Gへ再抽選されるため、朝一専用の実質的なゲーム数狙いポイントが生じる。
- それ以外の朝一専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- settingChange: **低確50% / 通常25% / 高確25%** にRESELECT。
- pure power cycle: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一恩恵は通常ART間1200G天井に対し、設定変更時は **100G 25% / 400G 25% / 800G 50%**へ短縮される点。
- リセット後100G以内天井選択率 **25%**。
- リセット後400G以内天井選択率 **50%**（100G選択25% + 400G選択25%）。
- 高確スタート率 **25%**。
- 期待値見える化の独自算出ではリセット後0G～100G+前兆が朝一ゾーン狙い対象とされるが、期待値金額は実機性能コアではなく観測/算出値のためcanonical性能値には採用しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 設定変更専用の固定不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日の天井進捗・内部状態は消去されるため、据え置き時に有利な蓄積があった場合は失われるが、独立した固定ペナルティとは定義しない。

### resetDetection
- 期待値見える化は **ガックン判別有効** と記載。
- 同資料は「サミー筐体なのでホールが対策していなければ朝一1G目のガックン判別も有効」と条件付きで説明している。
- よって確定変更契約ではなく **POSSIBLE_GAKKUN_INDICATOR_NOT_DETERMINISTIC / COUNTERMEASURE_DEPENDENT** として保存。
- 朝一ステージによる確定変更判別は、設定変更/電源OFFともステージ調査中のため **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CONDITIONAL_GAKKUN

### numericResetData
- normalCeiling: **1200G + max16G前兆**
- resetCeiling100G: **25.0%**
- resetCeiling400G: **25.0%**
- resetCeiling800G: **50.0%**
- resetMaximumCeiling: **800G**
- resetCeilingWithin400G: **50.0%**
- resetStateLow: **50.0%**
- resetStateNormal: **25.0%**
- resetStateHigh: **25.0%**
- purePowerCycleGameCounter: **CARRYOVER**
- purePowerCycleInternalState: **CARRYOVER**
- resetStage: **UNVERIFIED_AFTER_RESEARCH / contemporaneous sources say investigating**
- gakkunDetection: **POSSIBLE / COUNTERMEASURE_DEPENDENT**

## conflicts
- manufacturer表記は「タイヨーエレック」「サミー」が混在するが、サミー公式・業界記事が **製造元タイヨーエレック / サミー発売**を明記しており役割差として整理。数値CONFLICTではない。
- 導入時期について、サミー公式は「9月上旬」、グリーンべるとは「9月上旬納品開始予定」、PiDEA Xは「9月18日納品予定」、パチ＆スロ必勝本・期待値見える化・クランキーセブンは **9月19日導入**。予定告知と実導入日の定義差として保持し、canonicalは2017-09-19。
- 2018年の「Mental Model ver.」は別型式・別ゲーム性の後継機であり、本レコードへ混入しない。

## missingFields
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**。
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- settingChange/powerCycle時の朝一ステージ: **UNVERIFIED_AFTER_RESEARCH**（当時解析も調査中）。
- ガックンの発生率・対策後挙動・確定性: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の天井再抽選以外の独立モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- サミー公式 新機種発売告知（2017-07-18、製造元/稼働予定）: https://www.sammy.co.jp/japanese/news/2017/732.html
- サミー公式 2017年製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/2017/index.html
- PiDEA X 内覧会（2017-07-31、A+ART/150枚/純増1.8枚/G/9月18日納品予定）: https://www.pidea.jp/articles/%E3%80%8C%E8%92%BC%E3%81%8D%E9%8B%BC%E3%81%AE%E3%82%A2%E3%83%AB%E3%83%9A%E3%82%B8%E3%82%AA%E3%80%8D%E5%A4%A7%E8%BF%AB%E5%8A%9B%E3%81%AE%E8%89%A6%E9%9A%8A%E3%83%90%E3%83%88%E3%83%ABART%EF%BC%8F%E3%82%B5%E3%83%9F%E3%83%BC
- グリーンべると（2017-08-01、製造元/純増/9月上旬納品予定）: https://web-greenbelt.jp/00009796/
- パチ＆スロ必勝本 基本スペック（2017-09-19導入、設定別ART/機械割）: https://p.hisshobon.jp/machine/3040/1/66051
- P-WORLD 機種DB（タイヨーエレック、ART/ボーナス/天井）: https://www.p-world.co.jp/machine/database/8471
- 期待値見える化（性能コア/天井/設定変更vs電源OFF/ガックン）: https://slotjin.com/zone/aokihagane/
- ちょんぼりすた（天井/設定変更vs電源OFF/天井振り分け/内部状態）: https://chonborista.com/slot/sammy-slot/45380/
- クランキーセブン（導入日/性能/ベース/設定変更天井/内部状態）: https://crankyseven.com/arpeggio-pc.htm
