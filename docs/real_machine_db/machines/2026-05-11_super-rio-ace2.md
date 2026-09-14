# スマスロスーパーリオエース2

recordNo: 1794
machineName: スマスロスーパーリオエース2
aliases: スーパーリオエース2 / リオエース2 / スーリオ2 / Lパチスロスーパーリオエース2
manufacturer: 山佐ネクスト
formalModel: Lパチスロスーパーリオエース2ND02H
inspectionCode: 5S1634
releaseDate: 2026-05-11
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス+ゲーム数管理AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技日本の新機種発表で型式名 `Lパチスロスーパーリオエース2ND02H`、メーカー山佐ネクストを確認。
- HAZUSEで型式名、検定番号 `5S1634`、導入開始日2026-05-11、メーカー山佐ネクストを確認。
- 必勝本、P-WORLD、パチビーでも2026-05-11導入が一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.7%
- setting3: 100.5%
- setting4: 105.1%
- setting5: 109.1%
- setting6: 112.1%
initialHitBySetting:
  combinedBonusAndAt:
  - setting1: 1/289.8
  - setting2: 1/281.9
  - setting3: 1/268.0
  - setting4: 1/238.9
  - setting5: 1/230.0
  - setting6: 1/219.2
  noirRoom:
  - setting1: 1/131.9
  - setting2: 1/130.4
  - setting3: 1/127.6
  - setting4: 1/121.2
  - setting5: 1/119.1
  - setting6: 1/116.2
baseGamesPer50: 約31.2G/50枚
netIncrease:
- BIG BONUS: 約2.5枚/G
- AT「RIO RUSH」: 約2.5枚/G
- 上位AT「RIO RUSH EX」: 約4.5枚/G
basicPayout:
- BIG BONUS: 31G継続 / AT期待度約50%
- AT「RIO RUSH」: 初期50G+α
- 上位AT「RIO RUSH EX」: 50G+α
modeSpecificMinimumData:
- 通常時は規定ゲーム数/レア役からノワールルームを経てBIGを狙うほか、規定リプレイ回数からCZ「ハワードゲーム」を抽選。
- ATはゲーム数管理型。上位ATは純増約4.5枚/G。
- ハワードゲーム抽選は通常時、リプレイ50回成立ごとに行われる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をリセットし、ボーナス間天井を通常750G+αから最大500G+αへ短縮。
- AT間のボーナススルー回数天井は通常最大7スルー後8回目から、設定変更後は最大4スルー後5回目へ短縮。
- 内部状態を再抽選。
- モードを再抽選。
- エースモードを再抽選。
- リバースポイントを再抽選。
- ハワードカウンター（リプレイ回数）をリセット。
- ステージは通常ステージ開始とする必勝本更新版がある。なな徹実戦上は「スペード&ハートカフェ」開始を確認しているため、固定ステージ名は実戦例として分離する。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### carryOverBehavior
- なな徹の設定変更/据え置き比較では、据え置き時に有利区間、天井、内部状態、ハワードカウンター、リバースポイントを引き継ぐ。
- 必勝本の純電源OFF→ON直接比較でも、天井までのゲーム数、状態、モード、エースモード、リバースポイント、ハワードカウンターを引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ON時は天井までのゲーム数を引き継ぐ。
- 状態を引き継ぐ。
- モードを引き継ぐ。
- エースモードを引き継ぐ。
- リバースポイントを引き継ぐ。
- ハワードカウンター（リプレイ回数）を引き継ぐ。
- ステージは必勝本で現在調査中。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_PROGRESS / UNVERIFIED_FOR_STAGE

### gameCounterReset
settingChange:
- bonusInterval: RESET_WITH_SHORTENED_CEILING_500G_PLUS_ALPHA
- bonusSkipCount: RESET_AND_RESELECTED_WITH_MAX_4_SKIPS
- howardCounterReplayCount: RESET
- reversePoint: RESELECT
carryOver:
- bonusInterval: CARRY_OVER
- bonusSkipCount: CARRY_OVER
- howardCounterReplayCount: CARRY_OVER
- reversePoint: CARRY_OVER
powerCycle:
- bonusInterval: CARRY_OVER
- bonusSkipCount: CARRY_OVER_SUPPORTED_BY_INTERNAL_PROGRESS_TABLE
- howardCounterReplayCount: CARRY_OVER
- reversePoint: CARRY_OVER
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeilings:
- bonusInterval: 750G+αでBIG BONUS当選
- bonusSkip: 最大7回スルー後、8回目BIGがAT当選
resetCeilings:
- bonusInterval: 最大500G+α
- bonusSkip: 最大4回スルー後、5回目BIGがAT当選
shortening:
- bonusIntervalMaximum: 250G
- bonusSkipMaximum: 3回分短縮
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードおよびエースモードを再抽選。
- エースモードにはナヴィ/テイル/ヴィヴィアン&メリッサ/アリス/ノワール等があり、天井短縮やノワールルーム抽選優遇等へ影響する。
- 設定変更専用の各モード具体振り分けは、検索語を変え、必勝本・1geki・なな徹・複数解析資料を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESELECTION / UNVERIFIED_FOR_RESET_SPECIFIC_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 据え置き/純電源OFF→ONでは内部状態を引き継ぐ。
- 状態は通常・高確準備・高確が公開されているが、設定変更時の具体振り分けは固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESELECT_VS_CARRY_OVER / UNVERIFIED_FOR_DISTRIBUTION

### advantageousSectionReset
- なな徹の設定変更/据え置き比較で、設定変更時は有利区間RESET、据え置き時は引き継ぎを直接確認。
- 1gekiでは通常の有利区間リセットタイミングは基本的にエンディング経由で、有利区間リセット時は上位CZ「ノワールクライシス」へ移行とする。
- 設定変更時の有利区間RESETと、通常遊技中のエンディング後切断恩恵は混同しない。
- 純電源OFF→ON時の有利区間そのものを独立項目で直接明記した高優先資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- ボーナス間天井が750G+α → 最大500G+αへ短縮。
- ボーナススルー天井が最大7スルー → 最大4スルーへ短縮。
- 朝一のボーナススルー天井振り分けは全設定共通で0回1.6% / 1回7.8% / 2回3.1% / 3回20.3% / 4回67.2%。
- 規定リプレイ回数到達時のハワードゲーム当選率は設定変更後、全設定共通33%へ優遇。通常時は設定1 20.3%〜設定6 30.1%。
- リバースポイント初期値が優遇され、全設定共通20.2%（なな徹20.02%表記）で残り16pt以内が選択される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更でハワードカウンター、内部状態、モード/エースモード、リバースポイント等が再抽選/リセットされるため、前日有利な進行状態を保持していた据え置きとの比較では一部進行を失う場合がある。
- ただし設定変更専用の固定ペナルティ数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PROGRESS_RESET / ANALYSIS_HIGH_FOR_NO_CONFIRMED_FIXED_PENALTY

### resetDetection
- なな徹は現時点で有効な直接リセット判別方法は判明していないとしている。
- 500G+α短縮天井、4スルー後5回目上限は事後的な設定変更推測材料となる。
- 朝一実戦上「スペード&ハートカフェ」開始例があるが、設定変更固有の確定判別とはしない。
- 本機固有のリールガックン条件/発生率は、機種名・型式・メーカー名と「ガックン」「設定変更」「朝一」「据え置き」を変えて再探索後も高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_KNOWN_DIRECT_METHOD / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalBonusIntervalCeiling: 750G+α
resetBonusIntervalCeiling: 500G+α
maximumBonusIntervalShortening: 250G
normalBonusSkipCeiling: 最大7スルー後8回目BIG
resetBonusSkipCeiling: 最大4スルー後5回目BIG
resetBonusSkipDistribution:
- 0_skips: 1.6%
- 1_skip: 7.8%
- 2_skips: 3.1%
- 3_skips: 20.3%
- 4_skips: 67.2%
resetHowardGameHitRateAtReplayMilestone: 33.0%（全設定共通）
normalHowardGameHitRateAtReplayMilestone:
- setting1: 20.3%
- setting2: 21.1%
- setting3: 22.7%
- setting4: 26.2%
- setting5: 27.7%
- setting6: 30.1%
resetReversePointWithin16Rate: 20.2%（なな徹20.02% / 表示丸め差として保持）
resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_RESET_NUMBERS

## conflicts
- 主要スペックはHAZUSE/P-WORLD/必勝本/K-Navi等で 97.7 / 98.7 / 100.5 / 105.1 / 109.1 / 112.1%、初当り1/289.8〜1/219.2、ベース約31.2G/50枚が一致。これをcanonicalとする。
- 一部低優先整理サイトに、天井999G+α、機械割97.8〜114.2%、ベース約33G等の明確な差異があるが、複数高優先資料と整合せず `CONFLICT_LOW_PRIORITY_OUTLIER_EXCLUDED_FROM_CANONICAL` として平均化しない。
- リバースポイント「残り16pt以内」の選択率は1geki/複数二次資料20.2%、なな徹20.02%。丸め精度差の可能性が高いためcanonical表示は20.2%とし、原表記20.02%も残す。

## sources
retrievedAt: 2026-09-15
- 遊技日本（新機種発表・型式）: https://yugi-nippon.com/pachinko-new-machine/post-75767/
- HAZUSE（型式/検定番号/導入日/初当り/出玉率/ベース）: https://hazuse.com/machine/pachislot/5S1634/
- P-WORLD（出玉率/初当り/ベース/天井）: https://www.p-world.co.jp/machine/database/10449
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4710/1/114341
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4710/1/115659
- 必勝本 通常時解説: https://p.hisshobon.jp/machine/4710/1/115890
- 必勝本 BIG解説: https://p.hisshobon.jp/machine/4710/1/115351
- 1geki 機種TOP: https://1geki.jp/slot/l_sp_rioace2/
- 1geki 天井/朝一/有利区間: https://1geki.jp/slot/l_sp_rioace2/3/
- 1geki ハワードゲーム設定変更優遇: https://1geki.jp/slot/l_sp_rioace2/45/
- 1geki リバースポイント: https://1geki.jp/slot/l_sp_rioace2/55/
- 1geki BIG: https://1geki.jp/slot/l_sp_rioace2/61/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1143/36739/
- パチビー 天井: https://www.pachibee.jp/machines/kouryaku/226040001
- K-Navi 基本スペック: https://p-kn.com/slot/4479/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/255067/

## missingFields
- 設定変更専用モード/エースモード具体振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の通常/高確準備/高確の具体振り分け: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間そのものの直接機種固有文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用の全モード移行テーブル、全小役別状態移行、AT内部上乗せ振り分けは収集対象外。
- リセット時のみ朝一行動へ影響するスルー天井振り分け、ハワードゲーム33%、リバースポイント初期優遇はv0.7の公開朝一数値として保存。
- エンディング後の有利区間リセット恩恵「ノワールクライシス」は設定変更時リセットとは分離して扱う。
