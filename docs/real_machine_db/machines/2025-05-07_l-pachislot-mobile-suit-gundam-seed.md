# Lパチスロ 機動戦士ガンダムSEED

recordNo: 1723
machineName: Lパチスロ 機動戦士ガンダムSEED
aliases: L機動戦士ガンダムSEED / スマスロ ガンダムSEED / ガンダムSEED スマスロ
manufacturer: ビスティ / フィールズ
formalModel: L機動戦士ガンダムSEED G
inspectionCode: 4S1799
releaseDate: 2025-05-07
generation: 6.5号機 / スマスロ
systemType: AT・ST×擬似ボーナス型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技通信/P-WORLD業界ニュースは型式 `L機動戦士ガンダムSEED G`、ビスティ製と掲載。
- HAZUSEは検定番号 `4S1799`、型式 `L機動戦士ガンダムSEED G`、2025-05-07導入を掲載。
confidence: INDUSTRY / ANALYSIS_DB_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.8%
- setting3: 101.2%
- setting4: 105.4%
- setting5: 110.7%
- setting6: 114.9%
czInitialBySetting:
- setting1: 1/362.2
- setting2: 1/377.3
- setting3: 1/349.1
- setting4: 1/309.7
- setting5: 1/301.6
- setting6: 1/266.9
atInitialBySetting:
- setting1: 1/460.1
- setting2: 1/446.9
- setting3: 1/411.8
- setting4: 1/364.5
- setting5: 1/355.6
- setting6: 1/318.4
baseGamesPer50: 約31.5G/50枚（設定1）
netIncrease: 約6.5枚/G
basicPayout:
- 青7ボーナス: 約100枚
- 赤7ボーナス: 約200枚
- BARボーナス: 約300枚
- ST「ストライクライド」: 20G+α（平均約36G）
- 上位AT「フリーダムハイパー」: 10G+α、純増約6.5枚/G、継続率約96%
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- CZ間天井は通常A/B/Cで最大777G、天国A/Bで99G。
- AT間天井は通常最大1280G+α、黒BAR BIG当選。
- 通常モードA〜C、天国A/Bを搭載。設定変更時とST終了時にモード移行抽選。
- 通常Cは次回天国濃厚、天国Bは天国Aよりループしやすい。
- エンディング等の有利区間リセット時は上位AT突入を賭けた「ラストフェーズミッション」へ移行、成功期待度約58%。
- 実機完全再現用の全内部抽選・全状態移行率は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET（機種固有の設定変更/据え置き比較表で直接確認）。
- AT間天井G: RESET。
- 内部状態: RESET/再抽選。
- モード: RESET/再抽選。
- 開始ステージ: 市街地or沿岸ステージとする必勝本資料、海岸ステージとする別解析があり、開始画面表現は `CONFLICT_STAGE_EXPRESSION` として保持。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間・天井・内部状態・モードをCARRY_OVER。
- 設定変更専用のAT間750G短縮と初回CZマス配列優遇は据え置きでは付与されない。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_TABLE

### powerCycleBehavior
- 純電源OFF→ON: 天井GをCARRY_OVER。
- 純電源OFF→ON: 内部状態をCARRY_OVER。
- 純電源OFF→ON: モードをCARRY_OVER。
- 有利区間について純電源OFF→ONだけを独立列で明記する直接資料は再探索後も固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。据え置き表から自動転記しない。
- 電断後開始ステージは必勝本では調査中、別解析では海岸とするため `CONFLICT_OR_INCOMPLETE_POWER_STAGE`。
confidence: ANALYSIS_HIGH_FOR_GAMES_STATE_MODE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: AT間カウンタRESET、最大天井を750Gへ短縮。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCzCeiling: 最大777G
heavenCzCeiling: 99G
normalAtCeiling: 最大1280G+α
resetAtCeiling: 最大750G
resetAtCeilingBenefit: 黒BAR BIG（通常天井と同恩恵）
- CZ間777Gそのものの設定変更固定短縮は確認されていない。ただし設定変更時のモード再抽選により天国なら99G天井となる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時に通常A〜C/天国A/Bのモードを再抽選。
- 設定変更後・ST終了後の99G以内CZ or ボーナス当選期待度:
  - setting1: 31.86%（1〜49G 4.28% / 50〜99G 27.58%）
  - setting2: 32.04%（4.31% / 27.73%）
  - setting3: 32.61%（4.47% / 28.14%）
  - setting4: 34.80%（5.07% / 29.73%）
  - setting5: 35.45%（5.39% / 30.07%）
  - setting6: 38.99%（6.91% / 32.08%）
- 各モードそのものの設定変更時個別振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_99G_EXPECTATION / PUBLIC_VALUE_NOT_FOUND_FOR_FULL_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態RESET/再抽選。
- 据え置き/純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更時の通常/高確/超高確個別開始率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_POWER_TABLE

### advantageousSectionReset
- 設定変更: 有利区間RESET（なな徹の機種固有比較表で直接確認）。
- 据え置き: 有利区間CARRY_OVER。
- 通常の有利区間リセット時は「ラストフェーズミッション」へ移行し、成功期待度約58%。
- ただし、通常の有利区間リセット恩恵が設定変更時にも同じ形で必ず発生するとの直接記述は確認できないため、自動的に朝一恩恵へ転記しない。
- 純電源OFF→ON時の有利区間独立記述は `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_DIRECT_POWER_CYCLE

### resetBenefits
- AT間天井が1280G+α→750Gへ大幅短縮。
- 初回CZ「ストライクアタック」のATTACKマス初期配列/シナリオが優遇。
- 特殊モードへの移行抽選が行われるとする解析あり。特殊モードは250G以降のチャンス目・スイカ・ラクスチャンス中小役でCZ当選濃厚。
- 設定1でも設定変更後99G以内のCZ or ボーナス期待度は約31.9%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更固有の公開された冷遇率・明確な不利恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- AT間750Gを超えて黒BAR BIG非当選なら据え置き推測の強材料。
- 設定変更後は初回CZ ATTACKマス配列優遇、99G以内当選期待度上昇が推測材料だが単独確定扱いしない。
- 開始ステージは資料表現差があり単独判別に使用しない。
- 本機固有リールガックン条件・発生率は `L機動戦士ガンダムSEED` / `L機動戦士ガンダムSEED G` / ビスティ / フィールズ + 設定変更/朝一/据え置き/ガックン等で再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_CZ_CLUES / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalAtCeiling: 1280G+α
resetAtCeiling: 750G
normalCzCeiling: 777G
heavenCzCeiling: 99G
resetOrStEndWithin99GExpectationBySetting: 31.86 / 32.04 / 32.61 / 34.80 / 35.45 / 38.99%
advantageousSectionResetMissionSuccessExpectation: 約58%（通常区間リセット時。設定変更朝一への直接適用は未確認）

## conflicts
- `CONFLICT_STAGE_EXPRESSION`: 必勝本は設定変更時「市街地or沿岸ステージへ」、ちょんぼりすたは設定変更/電源OFF→ONとも「海岸」と記載。平均・強制統一せず保持。
- 一部二次DBはCZ確率列をAT確率と同値で掲載する転記崩れが見られるため、性能コアは設定別CZ値を明示する主要解析を優先。

## missingFields
- 設定変更時の通常A/B/C・天国A/B個別振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更後の通常/高確/超高確開始率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間直接記述: UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 遊技通信/P-WORLD業界ニュース（型式/製造/ゲーム性）: https://news.p-world.co.jp/articles/30635/yugitsushin
- HAZUSE（検定番号/型式/導入日/ベース/純増/天井）: https://hazuse.com/hd/4s1799/
- ちょんぼりすた（設定別CZ/AT/出玉率、朝一、電断、有利区間）: https://chonborista.com/slot/sankyo-slot/230587/
- 必勝本 天井&設定変更（設定変更/電源OFF ON/モード/状態）: https://hisshobon.com/machineinfo/86829/
- 必勝本 モード（設定変更後99G以内数値）: https://hisshobon.com/machineinfo/86812/
- 1geki 天井・朝一（750G短縮/純電断/99G以内数値）: https://1geki.jp/slot/l_gundamseed/3/
- なな徹 朝一（有利区間/天井/内部状態/モード比較）: https://nana-press.com/kaiseki/machine/930/29297/
- なな徹 天井（CZ/AT天井）: https://nana-press.com/kaiseki/machine/930/29293/
- 情報島 2025-05-07導入一覧（境界監査）: https://p-johojima.jp/machine_spec/post-2074/
- HAZUSE 2025年5月導入一覧（境界監査）: https://hazuse.com/new-machine/202505-2/

## confidenceSummary
corePerformance: HIGH
releaseAndModel: HIGH
resetSettingChange: HIGH
resetCarryOver: HIGH
resetPowerCycle: HIGH_FOR_GAMES_STATE_MODE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION
numericResetData: HIGH
resetDetection: HIGH_FOR_CEILING_AND_CZ_CLUES / UNVERIFIED_FOR_GAKKUN

## relay5QaNote
- 既存 `COMPLETE_CORE` とreset QAを分離管理。
- 通常の有利区間リセット恩恵「ラストフェーズミッション」は、設定変更時の有利区間RESET確認だけを根拠に朝一必発とは扱っていない。
- 競合する開始ステージ表記はCONFLICTのまま保持。
