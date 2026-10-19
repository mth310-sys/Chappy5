# L ULTRAMAN 最終決戦

recordNo: 1808
machineName: L ULTRAMAN 最終決戦
aliases: ULTRAMAN 最終決戦 / スマスロ ULTRAMAN 最終決戦 / LパチスロULTRAMAN最終決戦ME
manufacturer: オッケー.（総発売元: フィールズ）
formalModel: LパチスロULTRAMAN最終決戦ME
inspectionNumber: 6S0144
releaseDate: 2026-07-06
generation: 6.5号機 / スマスロ
systemType: AT / CZ経由AT / 上位AT搭載
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信/P-WORLDニュースで型式 `LパチスロULTRAMAN最終決戦ME`、オッケー.製、2026-07-06より順次導入を確認。
- HAZUSEで型式・検定番号 `6S0144`・導入開始日2026-07-06を照合。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.9%
- setting3: 100.6%
- setting4: 104.0%
- setting5: 108.1%
- setting6: 112.8%
initialHitBySetting:
  CZ:
  - setting1: 1/272.8
  - setting2: 1/267.7
  - setting3: 1/262.7
  - setting4: 1/257.0
  - setting5: 1/256.6
  - setting6: 1/256.2
  AT:
  - setting1: 1/445.4
  - setting2: 1/438.4
  - setting3: 1/431.3
  - setting4: 1/423.8
  - setting5: 1/423.1
  - setting6: 1/422.4
baseGamesPer50: 約30.8G/50枚
netIncrease:
- ULTRA_RUSH: 約7.0枚/G
- SUPER_ULTRA_RUSH: 約7.0枚/G
basicPayout:
- ULTRA_RUSH: 40G+α
- SUPER_ULTRA_RUSH: 初期300枚以上・差枚数管理
modeSpecificMinimumData:
- CZ「CRISIS ZONE」は7G+α、突破期待度約53%。
- 上位CZ「最終決戦」は4G。導入後主要解析では突破期待度約33%を採用。
- 通常天井はCZ間700G+α / AT間1500G+α。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井をRESET。
- CZ間天井は700G+α→500G+α、AT間天井は1500G+α→1000G+αへ短縮。
- 内部状態は再抽選され、40.2%で高確へ移行。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き単独の高優先3列比較は固定できなかった。
- 電源OFF→ONで天井・内部状態を引き継ぐ機種固有直接比較が複数あり、据え置きも同系統の継続挙動として支持されるが、単独断定は避ける。
confidence: SECONDARY_SUPPORTED_BY_POWER_CYCLE_DIRECT_EVIDENCE

### powerCycleBehavior
- 1gekiおよび複数解析の直接比較で、電源OFF→ONは天井・内部状態を引き継ぐ。
- 開始ステージは設定変更/電断とも調査中。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER_SECONDARY_SUPPORTED
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / SECONDARY_SUPPORTED_FOR_CARRY_OVER

### ceilingAfterReset
normalCeiling:
- CZ: 700G+α
- AT: 1500G+α
resetSpecific:
- CZ: 500G+α
- AT: 1000G+α
benefit:
- CZ天井: CZ当選
- AT天井: AT当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等の設定変更専用モード振り分けは公開確認できず。
- 本機の主要朝一変化として内部高確抽選40.2%を確認。
confidence: UNVERIFIED_FOR_DEDICATED_MODE_TABLE / ANALYSIS_HIGH_FOR_HIGH_STATE_DRAW

### stateAfterReset
- 設定変更時は内部状態を再抽選し、40.2%で高確へ移行。
- 電源OFF→ONは内部状態引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- エンディング時の一部、AT終了時の一部、上位AT終了時の一部で有利区間リセットとする解析があるが「推察」表記。
- 設定変更時そのものの有利区間処理を、機種固有の高優先直接資料では固定できなかった。一般スマスロ仕様から推測補完しない。
confidence: UNVERIFIED_SETTING_CHANGE_DIRECT_WORDING / ANALYSIS_SINGLE_FOR_IN_GAME_RESET_TIMING

### resetBenefits
- CZ天井700G+α→500G+α。
- AT天井1500G+α→1000G+α。
- 設定変更時40.2%で高確スタート。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の天井延長、不利専用モード、初当たり冷遇等は再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 500G+αを超えてCZ天井が発動しない、または1000G+αを超えてAT天井が発動しない場合は据え置き推測材料となる。
- 朝一40.2%高確は確率的恩恵であり単独の変更確定材料ではない。
- 本機固有ガックン条件/発生率、即時UIによる変更確定条件は表記揺れ・型式・メーカー・シリーズ名を変えて再探索後もUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CEILING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_IMMEDIATE_UI

### numericResetData
resetHighStateRate: 40.2%
normalCZCeiling: 700G+α
resetCZCeiling: 500G+α
normalATCeiling: 1500G+α
resetATCeiling: 1000G+α
publicResetExpectedValue:
- スロベース独自条件: リセット後は等価250G〜期待値プラス、狙い目400G〜（メーカー公表値ではないため参考値として分離）
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_RESET_NUMBERS / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE

## conflicts
- 導入前/更新不十分な一部サイトに `天井999G+α / 設定変更666G+α` の記載が残るが、導入後の1geki・ちょんぼりすた・なな徹・HAZUSE・スロベース等は `CZ700→500G+α / AT1500→1000G+α` で一致。後者をcanonicalとし、前者を `CONFLICT_PRE_RELEASE_OR_STALE_SINGLE_CEILING_SPEC` として隔離。
- 上位CZ「最終決戦」期待度は主要導入後解析で約33%だが、一部サイトに約50%表記あり。性能コアの必須値ではないため33%を参考canonical、50%を `CONFLICT_UPPER_CZ_EXPECTATION` として保持。
- 導入日を7/5とするサイトがあるが、業界記事・複数解析・HAZUSEのホール導入開始は2026-07-06で一致するため本DBは7/6をcanonical。

## missingFields
- 据え置き単独の高優先3者直接比較
- 設定変更時の有利区間を機種固有に直接明記した高優先資料
- 設定変更専用モード振り分け
- 本機固有ガックン条件/発生率
- 開始ステージの設定変更/純電断差

## sources
retrievedAt: 2026-09-15
- P-WORLD/遊技通信: https://news.p-world.co.jp/articles/33891/yugitsushin
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-77786/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0144/
- パチ&スロ必勝本: https://hisshobon.com/machineinfo/137391/
- 1geki 朝一/天井: https://1geki.jp/slot/l_ultraman_sai/3/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/260318/
- なな徹: https://nana-press.com/kaiseki/machine/1195/
- スロベース: https://slobase.jp/machines/ultraman-saishu-kessen
- ジャグラーズネット: https://jugglersnet.com/chumoku/ultraman-saisyukessen
