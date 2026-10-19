# スマスロ バイオハザードRE:3

recordNo: 1793
machineName: スマスロ バイオハザードRE:3
aliases: バイオハザードRE3 / バイオRE3 / LバイオハザードRE：3
manufacturer: エンターライズ
formalModel: LバイオハザードRE：3 ZD
inspectionCode: 5S1629
releaseDate: 2026-05-11
generation: 6.5号機 / スマスロ
systemType: AT / CZ→擬似ボーナス→AT / ゲーム数管理型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで型式 `LバイオハザードRE：3 ZD`、検定番号 `5S1629`、導入開始日2026-05-11、メーカー「エンターライズ」を確認。
- 1gekiでも同型式・検定番号・導入日・メーカーが一致。
- パチビー、必勝本でも2026-05-11導入で一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.6%
- setting3: 100.9%
- setting4: 105.4%
- setting5: 110.5%
- setting6: 113.1%
initialHitBySetting:
  at:
  - setting1: 1/399.0
  - setting2: 1/391.4
  - setting3: 1/372.8
  - setting4: 1/349.8
  - setting5: 1/323.5
  - setting6: 1/311.2
  czNormal:
  - setting1: 1/143.3
  - setting2: 1/140.1
  - setting3: 1/131.8
  - setting4: 1/121.9
  - setting5: 1/110.6
  - setting6: 1/105.7
baseGamesPer50: 約32.8G/50枚（設定1）
netIncrease:
- 通常AT「HAZARD RUSH」: 約1.0枚/G
- 擬似BONUS: 約4.5枚/G
- 上位AT「HAZARD RUSH INFERNO」: 約4.5枚/G
basicPayout:
- BONUS: 約100枚
- 通常AT「HAZARD RUSH」: 初期40G
- 上位AT「HAZARD RUSH INFERNO」: 初期60G
modeSpecificMinimumData:
- 通常時はレア役・NE-ポイントからCZ「NEMESIS BATTLE」を目指し、成功後はボーナスを経由してATへ移行。
- 通常時CZ成功期待度は約37%。
- CZは通常時だけでなくAT/上位AT中にも存在し、通常時CZ当選率は設定1 1/143.3〜設定6 1/105.7。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時はAT間ゲーム数天井をリセットし、通常1000G+αから650G+αへ短縮。
- CZスルー回数をリセット。
- NE-ポイントをリセット。
- 液晶ゲーム数は0Gになる。
- 開始ステージは必勝本実戦上「ダウンタウン」。
- 内部状態、心音レベルの具体挙動は機種固有高優先資料でも現在調査中。
confidence: ANALYSIS_HIGH_FOR_CEILING_CZ_SKIP_NE_POINT_AND_DISPLAY / UNVERIFIED_FOR_INTERNAL_STATE_AND_HEARTBEAT

### carryOverBehavior
- 据え置きについて、設定変更との直接比較表で独立列は確認できなかったが、純電源OFF→ONで天井/CZスルー/NE-ポイントが引き継がれることを必勝本が明示。
- 据え置き時の設定値不変更かつ通常電断運用は上記電断契約と整合するが、機種固有資料に「据え置き」列を直接固定できなかったため `CARRY_OVER_SUPPORTED_BY_POWER_CYCLE_DIRECT_EVIDENCE` とする。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE / ANALYSIS_SUPPORTED_FOR_CARRY_OVER

### powerCycleBehavior
- 純電源OFF→ON時は天井までのゲーム数を引き継ぐ。
- CZスルー回数を引き継ぐ。
- NE-ポイントを引き継ぐ。
- 状態、心音レベル、液晶ゲーム数、開始ステージは必勝本で現在調査中。
confidence: ANALYSIS_HIGH_FOR_CEILING_CZ_SKIP_AND_NE_POINT / UNVERIFIED_FOR_OTHER_FIELDS

### gameCounterReset
settingChange:
- atInterval: RESET_WITH_SHORTENED_CEILING_650G_PLUS_ALPHA
- czSkipCount: RESET
- nePoint: RESET
- displayGameCount: RESET_TO_0G
carryOver: CARRY_OVER_SUPPORTED_BY_POWER_CYCLE_DIRECT_EVIDENCE
powerCycle:
- atInterval: CARRY_OVER
- czSkipCount: CARRY_OVER
- nePoint: CARRY_OVER
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeilings:
- atInterval: 1000G+α
- czSkip: 最大6スルー後、7回目CZ当選で成功/AT濃厚
- nePoint: 最大500ptでCZ当選
resetCeilings:
- atInterval: 650G+α
- czSkip: 短縮確認なし / 回数RESET
- nePoint: 最大値そのものの変更は確認なし / ポイントRESET
benefits:
- ゲーム数天井到達時はパンデミックチャンス+ボーナス/AT当選。
- 設定変更でAT間天井が350G短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機の公開朝一情報で設定変更専用モード振り分けは確認できない。
- CZ規定回数は通常時の全設定共通振り分けが公開されているが、設定変更専用振り分けは確認できず、通常テーブルを朝一専用値として流用しない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_RESET_SPECIFIC_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更時の内部状態と心音レベルは必勝本で「現在調査中」。
- 純電源OFF→ON時も同様に現在調査中。
- 他機種の一般則からRESET/CARRY_OVERを推測補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 本機の有利区間リセットタイミング/設定変更時の直接機種固有契約は、今回確認した高優先資料では固定できず `UNVERIFIED_AFTER_RESEARCH`。
- エンディング後に上位CZ「フェイトオアフォーチュン」へ移行することは確認できるが、これは設定変更時挙動とは分離する。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE / ANALYSIS_HIGH_FOR_ENDING_TO_UPPER_CZ

### resetBenefits
- AT間天井: 1000G+α → 650G+α（350G短縮）。
- なな徹の暫定期待値ではリセット0G時はマイナス、等価150G付近からプラス域とする解析があるが、これは攻略期待値であり機械仕様値とは分離して保持。
- 設定変更専用のCZスルー回数短縮、NE-ポイント天井短縮、専用モード優遇率は確認できない。
confidence: ANALYSIS_HIGH_FOR_350G_SHORTENING / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE_REFERENCE

### resetPenalties
- CZスルー回数とNE-ポイントが設定変更でリセットされるため、前日に深いスルー回数/高ポイントを保持していた据え置きと比較すると朝一客に不利になり得る。
- それ以外の設定変更専用固定ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESETTED_PROGRESS / ANALYSIS_HIGH_FOR_NO_OTHER_CONFIRMED_FIXED_PENALTY

### resetDetection
- 650G+α天井は設定変更時のみの主要な事後判別材料。650G+αを明確に超えてAT非当選なら据え置き推測材料になる。
- 液晶ゲーム数は設定変更で0Gになるが、純電断時の液晶表示挙動は調査中のため単独確定判別には使えない。
- 開始ステージは設定変更時実戦上ダウンタウンだが、電断時ステージが調査中のため確定判別にはできない。
- なな徹はステージ等による有効なリセット判別は現時点で判明していないとする。
- 本機固有ガックン条件/発生率は機種名・型式名・メーカー名と「ガックン」「朝一」「設定変更」「据え置き」を変えて再探索後も高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AS_POST_HOC_SIGNAL / UNVERIFIED_FOR_GAKKUN_AND_DIRECT_VISUAL_DETECTION

### numericResetData
normalAtCeiling: 1000G+α
resetAtCeiling: 650G+α
maximumAtCeilingShortening: 350G
normalCzSkipCeiling: 6スルー後7回目CZ
resetCzSkipCount: RESET
resetCzSkipShortening: NONE_CONFIRMED
normalNePointCeiling: 500pt
resetNePoint: RESET
resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_PROGRESS_RESET_VALUES

## conflicts
- canonical機械割は1geki・必勝本・複数二次資料で一致する 97.5 / 98.6 / 100.9 / 105.4 / 110.5 / 113.1% を採用。
- 6確には設定2〜4が 98.7 / 101.0 / 105.2% とする差異があるため `CONFLICT_PAYOUT_RATE_SETTING2_TO4_98_6_100_9_105_4_VS_98_7_101_0_105_2` として保持し、平均化しない。
- 型式/検定番号/導入日/AT初当り/ベース/純増に重大CONFLICTなし。

## sources
retrievedAt: 2026-09-15
- HAZUSE（型式/検定番号/導入日/メーカー/出玉率）: https://hazuse.com/machine/pachislot/5S1629/
- 1geki 機種TOP（型式/検定番号/導入日/AT初当り/機械割）: https://1geki.jp/slot/l_bhr2/
- 1geki 天井・朝一: https://1geki.jp/slot/l_bhr2/3/
- 1geki ベース: https://1geki.jp/slot/l_bhr2/4/
- 1geki CZ: https://1geki.jp/slot/l_bhr2/47/
- 1geki 通常AT: https://1geki.jp/slot/l_bhr2/81/
- 1geki 上位AT: https://1geki.jp/slot/l_bhr2/87/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4703/1/114104
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4703/1/114162
- なな徹 天井: https://nana-press.com/kaiseki/machine/1140/36677/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1140/36678/
- なな徹 機種まとめ: https://nana-press.com/kaiseki/machine/1140/
- パチビー: https://www.pachibee.jp/machines/index/226040000
- 6確: https://www.kaku6.jp/slot/biohazardre3/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/253191/

## missingFields
- 設定変更専用モード/CZ規定回数振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時および純電断時の内部状態・心音レベル: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の有利区間RESETを直接示す機種固有高優先文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電断時の液晶ゲーム数・開始ステージ: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用のウィルス全組合せ抽選、CZ内部の小役別ダメージ抽選、ボーナス中の全感染率、AT中ステージ移行率等は収集対象外。
- 2026-05-11群の1/4として処理。
