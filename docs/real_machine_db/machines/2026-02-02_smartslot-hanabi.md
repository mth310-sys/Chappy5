# スマスロ ハナビ

recordNo: 1780
machineName: スマスロ ハナビ
aliases: Lハナビ / スマスロ花火
manufacturer: アクロス / ユニバーサルエンターテインメント
formalModel: L／ハナビ／KM
inspectionCode: 530543
releaseDate: 2026-02-02
generation: 6.5号機 / スマスロ
systemType: ノーマル+RT / 技術介入
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ユニバーサル公式はアクロス製、ボーナス+RT、2026年2月発売を案内。
- HAZUSEで型式 `L／ハナビ／KM`、検定番号 `530543`、導入開始日2026-02-02を確認。
confidence: OFFICIAL / INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 市場予想98.6% / 完全攻略100.2%
- setting2: 市場予想100.4% / 完全攻略102.0%
- setting5: 市場予想103.0% / 完全攻略104.6%
- setting6: 市場予想106.4% / 完全攻略108.0%
initialHitBySetting:
  big:
  - setting1: 1/297.9
  - setting2: 1/292.6
  - setting5: 1/284.9
  - setting6: 1/273.1
  reg:
  - setting1: 1/394.8
  - setting2: 1/358.1
  - setting5: 1/313.6
  - setting6: 1/282.5
  bonusCombined:
  - setting1: 1/169.8
  - setting2: 1/161.0
  - setting5: 1/149.3
  - setting6: 1/138.8
baseGamesPer50: 約42.3G/50枚（設定1）
netIncrease:
- RT「花火チャレンジ」: 約0.2枚/G
- RT「花火ゲーム」: 約0.4枚/G
basicPayout:
- BIG: 最大239枚
- REG: 最大96枚
modeSpecificMinimumData:
- BIG後は花火チャレンジへ移行。最大20G、JACイン後は花火ゲーム20G。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時、RT状態は通常状態へ戻る。
- 天井非搭載のためゲーム数天井リセット/短縮は該当なし。
- 朝一専用モード・CZ・ATリセット優遇は該当なし。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### carryOverBehavior
- 据え置きでは通常の遊技状態を維持する前提。
- 本機は天井非搭載で、朝一狙いに影響するゲーム数・モード蓄積は確認されない。
confidence: ANALYSIS_HIGH_FOR_RT_CONTRACT

### powerCycleBehavior
- 純電源OFF→ONではRT状態を引き継ぐ。
- 必勝本の機種固有比較表で設定変更との差を直接確認。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### gameCounterReset
settingChange: NOT_APPLICABLE_NO_CEILING
carryOver: NOT_APPLICABLE_NO_CEILING
powerCycle: NOT_APPLICABLE_NO_CEILING
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: NONE
afterReset: NONE
resetShortening: NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モード、規定ゲーム数モードは確認されず `NOT_APPLICABLE`。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時の主要差分はRT状態が通常状態へ戻ること。
- 純電源OFF→ONではRT状態を引き継ぐ。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### advantageousSectionReset
- スマスロ規格だが、ホール経営シミュレーション上の朝一有利区間天井・モード恩恵として扱う公開機種固有差分は確認されず。
- 一般則からの推測補完は行わない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### resetBenefits
- 設定変更固有の朝一出玉恩恵、天井短縮、専用モード優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日RT中なら設定変更でRT状態が通常状態へ戻る点が主な差分。
- その他の設定変更固有不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 天井や専用モードによる変更判別は不可。
- 本機固有の設定変更ガックン条件/発生率は表記揺れ・型式名・メーカー名を含め再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
- ceiling: NONE
- settingChangeRtState: NORMAL_STATE
- powerCycleRtState: CARRY_OVER
confidence: ANALYSIS_HIGH

## conflicts
- 主要性能値に実質的な競合なし。
- HAZUSEの出玉率表示は完全攻略100.2%～108.0%のみだが、必勝本は市場予想値と完全攻略値を分離して掲載。定義を混同せず双方を保持。

## sources
retrievedAt: 2026-09-15
- ユニバーサル公式: https://www.universal-777.com/product/slot/hanabi_2026/
- HAZUSE: https://hazuse.com/hd/530543h/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/88918/
- 必勝本 天井・設定変更: https://hisshobon.com/machineinfo/88909/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/88914/
- パチビー: https://www.pachibee.jp/machines/about/225120002
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/248529/

## missingFields
- 有利区間の設定変更/据え置き/純電断三者を本機固有に明記した高優先資料: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
