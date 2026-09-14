# スマスロ ミリオンゴッド-神々の軌跡-

recordNo: 1790
machineName: スマスロ ミリオンゴッド-神々の軌跡-
aliases: ミリオンゴッド 神々の軌跡 / スマスロミリオンゴッド / ミリゴ軌跡
manufacturer: ミズホ
formalModel: L／ミリオンゴッド／CX
inspectionCode: 530692
releaseDate: 2026-04-20
generation: 6.5号機 / スマスロ
systemType: AT / セット数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ユニバーサルエンターテインメント公式が2026-04-20のホールデビューを告知。
- 1geki・HAZUSEで型式 `L／ミリオンゴッド／CX`、検定番号 `530692`、導入開始日2026-04-20を照合。
confidence: OFFICIAL_FOR_RELEASE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_MODEL

## corePerformance
payoutRateBySetting:
- setting1: 97.2%
- setting2: 99.1%
- setting3: 102.1%
- setting4: 106.9%
- setting5: 111.7%
- setting6: 114.6%
initialHitBySetting:
  gg:
  - setting1: 1/533
  - setting2: 1/420
  - setting3: 1/496
  - setting4: 1/338
  - setting5: 1/455
  - setting6: 1/295
baseGamesPer50: 約30.8G/50枚（設定1）
netIncrease: 約7.0枚/G
basicPayout:
- GOD GAME: 1セット50G、平均約350枚相当
- PREMIUM GOD GAME: GOD揃いでGG4セット+強力ループストック、期待獲得3000枚OVER
- SUPER GOD GAME: 赤7揃いから突入、1セット10〜100G+引き戻し3G、継続率75%以上
modeSpecificMinimumData:
- 通常時は表モード/裏モード、小役履歴、規定G、確定役からGGを抽選。
- 通常天井はGG間1480G+α。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井までのゲーム数はリセットされ、510G / 1000G / 1480Gから再抽選。
- 表モード・裏モードは再抽選。
- ガイア状態も再抽選。
- メニューデータはリセット、小役履歴は表示なし、液晶出目は `0・1・2`、開始ステージはアフロディーテ。
- 有利区間は設定変更時リセットを、なな徹の朝一比較で確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間・天井・内部モード/内部状態を引き継ぐことをなな徹の朝一比較で確認。
- 表/裏モードと天井進行の据え置き引継ぎは、設定変更時との対照として明示されている。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数、表/裏モード、ガイア状態を引き継ぐことを必勝本の直接比較表で確認。
- 純電断後のメニューデータ・小役履歴・液晶出目・開始ステージは同資料で現在調査中。
- 純電断時の有利区間そのものを機種固有に直接記述した高優先資料は再探索後も固定できず `UNVERIFIED_DIRECT_MACHINE_SPECIFIC_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE_STATE / UNVERIFIED_FOR_DIRECT_ADVANTAGEOUS_SECTION_WORDING

### gameCounterReset
settingChange: RESET_AND_REDRAW
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 通常天井はGG間1480G+α。
- 設定変更時のみ天井G数を再抽選する。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 1480G+α
resetCeilingDistribution:
- 510G: 15.2%
- 1000G: 20.3%
- 1480G: 64.5%
shorteningProbabilityTo1000OrLess: 35.5%
allSettingsCommon: true
ceilingBenefit:
- GG当選
- ループストック抽選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 表モード・裏モードは設定変更時に再抽選、据え置き/純電断では引き継ぎ。
- 朝一専用の表/裏モード振り分け数値は、機種名・型式・「設定変更時 モード振り分け」「朝一 表モード 裏モード」で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY / UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- ガイア状態は設定変更時に再抽選、純電源OFF→ONでは引き継ぎ。
- 据え置きは内部モード/内部状態を引き継ぐ朝一比較を確認。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 通常営業中の有利区間リセット時には高ループストック等の恩恵が示唆/暫定解析されるが、パチマガ系資料は `設定変更時は除く` と明記しており、朝一設定変更恩恵へ混入しない。
- 純電源OFF→ON時の有利区間直接文言のみ `UNVERIFIED_DIRECT_MACHINE_SPECIFIC_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- 設定変更後は35.5%で天井が1000G以内（510Gまたは1000G）に短縮される。
- 天井到達時のループストック振り分けは全設定共通で、1% / 25% / 50% / 80%ループが各16.7%、1%ループ+Z-ZONEが33.2%。
- なな徹設定1暫定期待値では、リセット0Gから等価+246円、150Gで+1,071円、500Gで+4,079円。これは独自シミュレーション値として性能コアと分離する。
confidence: ANALYSIS_HIGH_FOR_RESET_CEILING / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE_SIMULATION

### resetPenalties
- 設定変更専用の主要な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 既存の高モード/ガイア状態を保持していた台では再抽選により失う可能性はあるが、これは前状態依存であり固定的な設定変更ペナルティとして数値化しない。
confidence: ANALYSIS_HIGH_FOR_NO_FIXED_PUBLIC_PENALTY

### resetDetection
- 設定変更時の液晶出目 `0・1・2`、開始ステージ「アフロディーテ」は公開されている。
- ただし純電源OFF→ON側の液晶出目/開始ステージが高優先資料で現在調査中のため、これら単独で確定的変更判別とは扱わない。
- なな徹では朝一の設定変更/据え置き判別方法は未判明。朝一に前日のユニメモが残っていても据え置き濃厚にはならない。
- 本機固有ガックンの条件・発生率は検索語・資料系統を変えて再探索後も高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_DEFINITIVE_DETECTION_AND_GAKKUN

### numericResetData
resetCeilingDistribution:
- 510G: 15.2%
- 1000G: 20.3%
- 1480G: 64.5%
resetCeilingWithin1000G: 35.5%
ceilingLoopStockDistribution:
- 1pctLoop: 16.7%
- 25pctLoop: 16.7%
- 50pctLoop: 16.7%
- 80pctLoop: 16.7%
- 1pctLoopPlusZZone: 33.2%
resetExpectedValueSetting1TemporarySimulation:
- 0G_equalExchange: +246円
- 150G_equalExchange: +1,071円
- 500G_equalExchange: +4,079円
resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_CEILING_VALUES / ANALYSIS_SINGLE_FOR_EV_SIMULATION

## conflicts
- 主要性能コア（機械割、GG初当り、純増、設定1ベース、通常天井）は1geki・必勝本・HAZUSE・パチマガ系で実質一致し重大CONFLICTなし。
- 一部低優先サイトにGOD揃い `1/8192`、純増 `5枚/G`、ベース約33G/50枚等の明確に異なる記載が存在するが、高優先複数資料はGOD揃い `1/16384`、純増約7.0枚/G、ベース約30.8G/50枚で一致。低優先値は `CONFLICT_LOW_PRIORITY_LIKELY_MIXED_OR_ERRONEOUS_DATA` としてcanonical不採用。
- 有利区間リセット時の高ループ恩恵はパチマガ系でも暫定版表記のため、通常営業中の参考情報に留め、設定変更時恩恵には採用しない。

## sources
retrievedAt: 2026-09-15
- ユニバーサルエンターテインメント公式（2026-04-20ホールデビュー言及）: https://universal-777.com/topics/20260501005060/
- 1geki機種概要/スペック: https://1geki.jp/slot/l_milliongod_kiseki/
- HAZUSE機種ページ: https://hazuse.com/machine/pachislot/SX0127/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89357/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89354/
- 必勝本 天井G数振り分け: https://hisshobon.com/machineinfo/89366/
- 必勝本 確定役/SP役: https://hisshobon.com/machineinfo/89349/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1112/35716/
- なな徹 機種総合: https://nana-press.com/kaiseki/machine/1112/
- パチマガスロマガ 機種概要: https://cs61.cs-plaza.com/m/pachi/pla/s_conq/mizuho_slot/57/kh01.php
- パチマガスロマガ 有利区間: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/57/kr04.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10424

## missingFields
- 設定変更時の表/裏モード具体的振り分け: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間を直接記した機種固有高優先資料: UNVERIFIED_AFTER_RESEARCH
- 純電断後のメニューデータ/小役履歴/液晶出目/開始ステージ: PUBLISHED_AS_CURRENTLY_UNDER_INVESTIGATION
- 本機固有ガックン条件/発生率および確定変更判別: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 完全再現用の通常時全モード移行率、全小役別GG抽選、GG中ストック詳細、演出法則は収集対象外。
- 2026-04-20群の1/3として処理。
- 通常営業中の有利区間リセット恩恵は設定変更時を除外して扱う。