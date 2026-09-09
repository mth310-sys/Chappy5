machineName: ぱちスロAKB48 勝利の女神
manufacturer: 京楽産業.（京楽）
releaseDate: 2017-09-04
recordNumber: 1128
generation: 5号機（5.5号機世代）
systemType: ART / CZ経由・セット継続型
formalModelName: パチスロAKB48勝利の女神G
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 京楽産業.の2017-07-27リリースを報じた業界記事は、全国導入を **2017-09-04** と明記。
- K-Navi、パチビー、DMMぱちタウン、P-WORLDでも2017-09-04導入で一致。
- 型式名はDMMぱちタウンおよび中古実機DBで **パチスロAKB48勝利の女神G** を確認。
- 検定番号は「機種名 / 型式名 / 京楽 / 検定 / 認定 / 7S系」等へ検索語を変え、現存DB・業界・中古実機資料を横断したが直接固定できず UNVERIFIED_AFTER_RESEARCH。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_MODEL_NAME

## payoutRateBySetting
- 設定1: **97.5%**
- 設定2: **98.1%**
- 設定3: **100.8%**
- 設定4: **103.9%**
- 設定5: **107.2%**
- 設定6: **111.4%**
- 期待値見える化、すろぱちくえすと、ちょんぼりすた等で一致。DMMもレンジ97.5～111.4%を掲載。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「勝利の女神」初当たり
- 設定1: **1/395.0**
- 設定2: **1/386.4**
- 設定3: **1/358.4**
- 設定4: **1/346.8**
- 設定5: **1/317.7**
- 設定6: **1/293.6**

### CZ「48CHANCE」突入率
- 設定1: **1/116.6**
- 設定2: **1/114.1**
- 設定3: **1/105.2**
- 設定4: **1/101.8**
- 設定5: **1/92.8**
- 設定6: **1/85.4**
- K-Navi/P-WORLD/複数解析で照合。業界記事も設定1 1/116.6～設定6 1/85.4を公表記事として掲載。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約46G/50枚**。
- すろぱちくえすと、期待値見える化、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART純増: **約2.0枚/G**。
- 京楽リリースを扱う業界記事、P-WORLD、パチビー、複数解析で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「勝利の女神」: **1セット30G + 勝利の女神総選挙5G**。
- セット継続型。通常30Gで推しポイントを獲得し、後半5Gの総選挙でランクとポイントを使って継続を決定。
- 解析資料では平均継続 **約5.3セット** の記載あり。ただし物差し必須値ではないため補助値として保持。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ART間天井: **ART間999G到達後のCZ（999Gを跨いだCZを含む）でART当選確定**。999G到達時に即ARTではない。
- CZ間天井: **最大200GでCZ当選**。50G / 100G / 200Gの規定G数振り分けが存在。
- 通常時内部状態は低確/高確が主要区分として解析され、レア役からのCZ当選率へ影響。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_TABLE_AND_HISTORICAL_RESET_OBSERVATION
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **ART間天井をRESET**。
- 内部状態も **RESET** とする直接比較表を確認。
- 設定変更直後は当時の新台初日実践値で70G付近・120G付近の当選が目立ち、CZ間規定G数50G/100Gが通常より選ばれやすい可能性が高いと解析された。
- ただし設定変更専用の50G/100G/200Gの確定振り分け数値は公開解析として固定できないため、実践値観測を確定テーブルへ昇格させない。
reliability: ANALYSIS_HIGH_FOR_RESET_CONTRACT / ANALYSIS_SINGLE_HISTORICAL_OBSERVATION_FOR_EARLY_CZ_BIAS

### carryOverBehavior
- 「据え置き」と明記した独立操作契約は、機種名/型式名と据え置き・朝一・設定変更・電源OFF ON・ART間天井・CZ間天井・内部状態を組み替えて再探索したが、今回直接固定できず **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ONについては下記powerCycleBehaviorに直接比較表があるため、推測で据え置きへ転記しない。
reliability: UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ON: **天井CARRYOVER / 内部状態CARRYOVER**。
- 朝一ステージの純電断専用確定契約は確認できず。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
- ART間999G天井とCZ間規定G数のうち、直接資料で「天井リセット」と表現される設定変更契約は確認。CZ間カウンタ単独の厳密な内部リセット契約は、設定変更後実践値とは分離して扱う。
reliability: ANALYSIS_HIGH_FOR_ART_CEILING / UNVERIFIED_FOR_SEPARATE_INTERNAL_CZ_COUNTER_CONTRACT

### ceilingAfterReset
- ART間通常天井は **999G到達後のCZでART確定**。
- 設定変更時にART間天井はリセットされるが、ART間天井そのものが999Gから短縮される公開契約は確認できず **NO_CONFIRMED_ART_CEILING_SHORTENING**。
- 一方、朝一はCZ間50G/100Gが選ばれやすいとする当時実践値観測があり、朝一の実質初当たり機会は早まる傾向を確認。
reliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING / ANALYSIS_SINGLE_HISTORICAL_OBSERVATION_FOR_RESET_CZ_BIAS

### modeAfterReset
- 独立した通常A/B等の名称付きモード体系について、設定変更専用の公開振り分けは確認できず **UNVERIFIED_AFTER_RESEARCH**。
- CZ間規定G数50/100/200Gの選択に朝一偏りが観測されるが、数値テーブル未公開のためmode振り分けとしては固定しない。
reliability: UNVERIFIED_FOR_NUMERIC_RESET_MODE_TABLE

### stateAfterReset
- 設定変更: **内部状態RESET**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- リセット後の低確/高確具体的振り分け数値は十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後の新台初日実践値では **71～80G / 121～140G付近**の当選が目立ち、当時解析はCZ間50G/100G規定が選ばれやすい可能性を指摘。
- 当時の立ち回り資料ではリセット後 **0GからCZ当選 or 100Gスルーまで**を狙う案が提示された。
- これは実践値由来であり、メーカー公表または確定解析の選択率ではない。
reliability: ANALYSIS_SINGLE_HISTORICAL_EMPIRICAL_RESET_DATA

### resetPenalties
- 設定変更固有の主要な不利要素は、資料系統・検索語を変えて再探索しても確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_SEARCHED_NO_CONFIRMED_PENALTY

### resetDetection
- 当時のリセット解析で **ガックン判別不可** と明記。
- 実戦上の設定変更後開始ステージは **AKB / SKE / NMB / HKT** の4種が確認されているが、確定変更判別には使えない。
- 早いCZ当選は変更推測材料にはなり得るが、通常時にも50G/100G規定が存在するため確定判別ではない。
reliability: ANALYSIS_SINGLE_HISTORICAL_FOR_GAKKUN_AND_START_STAGE / NONDETERMINISTIC_FOR_ZONE_BEHAVIOR

### numericResetData
- normalArtCeiling: **ART間999G到達後/跨ぎCZでART確定**
- normalCzIntervalCeiling: **最大200GでCZ**
- normalCzIntervalCandidates: **50G / 100G / 200G**
- settingChangeArtCeilingCounter: **RESET**
- powerCycleArtCeilingCounter: **CARRYOVER**
- settingChangeInternalState: **RESET**
- powerCycleInternalState: **CARRYOVER**
- observedResetHotRanges: **71～80G / 121～140G**（新台初日実践値・確定振り分けではない）
- resetCzIntervalDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- 機械割・ART初当たり・CZ初当たり・ベース・純増・導入日について、採用した主要資料間に実質的な数値CONFLICTなし。
- リセット後の50/100G優遇は「実践値から高選択率と推測」という資料であり、解析確定振り分けとの競合ではない。確定値と混ぜず OBSERVED/EMPIRICAL として保持。

## missingFields
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと明記した独立操作契約: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 設定変更時CZ間50/100/200Gの正確な振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時低確/高確の具体的初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時の開始液晶ステージ契約: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- PiDEA X 京楽リリース報道（導入日/純増/ART構造/CZレンジ）: https://www.pidea.jp/articles/%E7%B7%8F%E9%81%B8%E6%8C%99%E3%81%A7%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%9B%EF%BC%81%E3%80%8CAKB%E5%8B%9D%E5%88%A9%E3%81%AE%E5%A5%B3%E7%A5%9E%E3%80%8D%EF%BC%8F%E4%BA%AC%E6%A5%BD
- K-Navi 機種/スペック: https://p-kn.com/slot/2844/
- P-WORLD 機種/初当たり/ART仕様: https://www.p-world.co.jp/machine/database/8451
- パチビー 機種情報: https://www.pachibee.jp/machines/lecture/217080004
- DMMぱちタウン 型式名/機械割レンジ/導入日: https://p-town.dmm.com/machines/2974/recommend
- 期待値見える化 総合/天井: https://slotjin.com/zone/akb48-shouri/
- 期待値見える化 朝一リセット実践値: https://slotjin.com/slot/akb48-shouri-reset/
- ちょんぼりすた 総合/設定変更表: https://chonborista.com/slot/kyoraku-slot/43867/
- すろぱちくえすと 総合/天井/スペック: https://www.slopachi-quest.com/article/akb48-goddess-of-victory/
- パチ＆スロ必勝本 天井: https://p.hisshobon.jp/machine/3009/1/66432
- 中一商事 型式名/実機概要: https://www.nakaiti.com/html/sKyoraku009.html

## researchNotes
- 目的は完全再現ではなく物差し用性能コア+朝一挙動なので、ART中の推しポイント詳細、特化ゾーン内部振り分け、設定示唆演出の全テーブルは収集対象外。
- 欠損探索は「ぱちスロAKB48 勝利の女神 / AKB48勝利の女神 / パチスロAKB48勝利の女神G / 京楽」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / CZ間 / モード / 状態 / ガックン / 検定番号 / 7S」を組み替え、業界記事、当時解析、P-WORLD、機種DB、中古実機DB、回顧資料を横断。
- リセット後の71～80G/121～140G集中は新台初日実践値であり、ホール経営ゲームの朝一客行動に有用だが、解析確定値ではないため信頼度を分離した。