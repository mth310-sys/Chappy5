# Lタクトオーパス デスティニー

recordNo: 1795
machineName: Lタクトオーパス デスティニー
aliases: タクトオーパス / タクオパ / takt op. Destiny / Lタクトオーパス
manufacturer: アムテックス
formalModel: LタクトオーパスM1
inspectionCode: 5S1493
releaseDate: 2026-05-11
generation: 6.5号機 / スマスロ
systemType: A+AT / リアルボーナス+差枚数管理AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 1gekiでメーカーAMTEX、導入開始日2026-05-11、型式名 `LタクトオーパスM1`、検定番号 `5S1493` を確認。
- パチビー、P-WORLD、必勝本でも2026-05-11導入・アムテックスが一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.2%
- setting3: 100.3%
- setting4: 104.7%
- setting5: 108.7%
- setting6: 113.5%
initialHitBySetting:
  at:
  - setting1: 1/358.5
  - setting2: 1/350.3
  - setting3: 1/330.5
  - setting4: 1/299.3
  - setting5: 1/297.8
  - setting6: 1/297.4
  destinyBonus:
  - allSettings: 1/770
baseGamesPer50: 約35G/50枚
netIncrease:
- AT「BATTLE ORCHESTRA」: 約2.6枚/G
basicPayout:
- AT「BATTLE ORCHESTRA」: 初期150枚+α / 差枚数管理
- DESTINY BONUS: 約104枚
- EPISODE BONUS: 約104枚
modeSpecificMinimumData:
- CZ「MUSICART CHANCE」は8G継続、AT期待度約48%（設定1）。
- 通常時は規定ゲーム数でCZを抽選し、モードA/B/CがCZ天井500/300/100Gを管理。
- AT間天井は999G+α、到達でAT当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時はCZ間ゲーム数・AT間ゲーム数をリセットし、有利区間移行時の短縮天井を適用。
- CZ間天井は通常最大500G+αから最大300G+αへ短縮。
- AT間天井は通常999G+αから699G+αへ短縮。
- 通常時モードを再抽選し、モードAは選択されずモードB/Cのみ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き専用の天井ゲーム数・モード・内部状態の直接比較表は、公開範囲の高優先資料では固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間移行を伴わない限り短縮天井条件は発動しない、という天井資料とは整合するが、推測でCARRY_OVER確定にはしない。
confidence: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONで天井ゲーム数を引き継ぐとする二次整理資料を確認。
- ただしパチマガスロマガの設定変更/電源OFF・ON比較表は公開検索結果では本文が会員制で直接取得できず、モード・内部状態・有利区間を含む三者契約は高優先資料で独立固定できない。
- よって天井引継ぎは `SECONDARY_SUPPORTED`、その他は `UNVERIFIED_AFTER_RESEARCH` とする。
confidence: ANALYSIS_SINGLE_FOR_CEILING_CARRY_OVER / UNVERIFIED_FOR_OTHER_FIELDS

### gameCounterReset
settingChange:
- czInterval: RESET_WITH_SHORTENED_CEILING_300G_PLUS_ALPHA
- atInterval: RESET_WITH_SHORTENED_CEILING_699G_PLUS_ALPHA
carryOver:
- czInterval: UNVERIFIED_AFTER_RESEARCH
- atInterval: UNVERIFIED_AFTER_RESEARCH
powerCycle:
- atInterval: CARRY_OVER_SECONDARY_SUPPORTED
- czInterval: CARRY_OVER_SECONDARY_SUPPORTED
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### ceilingAfterReset
normalCeilings:
- czInterval: 最大500G+αでCZ当選
- atInterval: 999G+αでAT当選
resetCeilings:
- czInterval: 最大300G+α
- atInterval: 699G+α
shortening:
- czMaximum: 200G
- atMaximum: 300G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更後はモードB以上となり、モードAは非選択。
- 全設定共通の公開振り分けはモードB 69.9% / モードC 30.1%。
- モード別CZ天井はA=500G+α / B=300G+α / C=100G+α。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 通常/高確/超高確の内部状態が存在することは確認できる。
- 設定変更・据え置き・純電源OFF→ONの内部状態三者比較と、設定変更時の具体振り分けは、検索語・資料系統を変えて再探索したが高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 1geki・パチマガ系の天井資料は「設定変更後を含む有利区間移行時」にCZ天井300G+α、AT天井699G+αを適用すると明記しており、設定変更時は有利区間移行扱いとして短縮恩恵が発生する。
- 据え置き/純電源OFF→ON時の有利区間そのものの直接契約は公開高優先資料で独立固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_RESET_CONTEXT / UNVERIFIED_FOR_CARRY_OVER_AND_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- AT間天井が999G+α → 699G+αへ300G短縮。
- CZ間天井が最大500G+α → 最大300G+αへ200G短縮。
- 設定変更後はモードAを回避し、モードB 69.9% / モードC 30.1%。約30%でCZ天井100G+αのモードCが選択される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時に前日の進行状態を保持できない可能性はあるが、本機固有の固定ペナルティ値・不利専用モード等は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CONFIRMED_FIXED_PENALTY

### resetDetection
- 699G+α AT天井、300G+α CZ天井、100G/300G付近のCZ当選は事後的な設定変更推測材料となる。
- モードB/C選択は内部挙動であり、朝一時点の確定判別にはならない。
- 本機固有のリールガックン条件・発生率、ランプ等による確定判別は、機種名/型式/メーカーと「ガックン」「設定変更」「朝一」「据え置き」を変えて再探索後も高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_POST_HOC_CEILING_CLUES / UNVERIFIED_FOR_DIRECT_DETECTION

### numericResetData
normalAtCeiling: 999G+α
resetAtCeiling: 699G+α
normalCzCeilingMaximum: 500G+α
resetCzCeilingMaximum: 300G+α
resetModeDistribution:
- modeA: 0%
- modeB: 69.9%
- modeC: 30.1%
modeCeilings:
- modeA: 500G+α
- modeB: 300G+α
- modeC: 100G+α
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- 主要スペックは必勝本・1geki・P-WORLD・複数解析で、設定1〜6機械割97.6/98.2/100.3/104.7/108.7/113.5%、AT初当り1/358.5〜1/297.4、純増約2.6枚/G、約35G/50枚が一致。
- HAZUSEの設定4 AT初当りに `1/299.5` 表記がある一方、必勝本・1geki・P-WORLD・複数解析は `1/299.3` で一致。canonicalは `1/299.3`、HAZUSE値は `CONFLICT_LIKELY_SOURCE_ROUNDING_OR_TYPO_SETTING4_AT_299.5` として保持。
- 純電源OFF→ONの天井引継ぎは二次整理資料支持に留まり、高優先直接比較本文を公開範囲で取得できないため確信度を落として保存。

## missingFields
- carryOverBehaviorの機種固有直接比較表
- powerCycleBehaviorのモード/内部状態/有利区間直接比較
- reset時内部状態振り分け
- 本機固有ガックン条件/発生率

## sources
retrievedAt: 2026-09-15
- 1geki 機種TOP（型式/検定番号/導入日/基本スペック）: https://1geki.jp/slot/l_takt_op_destiny/
- 1geki 天井/朝一: https://1geki.jp/slot/l_takt_op_destiny/3/
- 1geki モード/設定変更時振り分け: https://1geki.jp/slot/l_takt_op_destiny/45/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89778/
- 必勝本 通常時/天井: https://p.hisshobon.jp/machine/4721/1/115647
- P-WORLD: https://www.p-world.co.jp/machine/database/10460
- パチビー: https://www.pachibee.jp/machines/index/226040002
- パチマガスロマガ 天井: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/12/kr03.php
- パチマガスロマガ 設定変更/電源OFF・ON（公開検索結果では本文会員制）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/12/kr01.php
- HAZUSE: https://hazuse.com/machine/pachislot/5S1493/
- ちょんぼりすた: https://chonborista.com/slot/amute/254099/
- スロットソリューション（電源OFF→ON天井引継ぎ二次支持）: https://slot-solution.site/takt-op/955/
