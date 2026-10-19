# スマスロ BIRDIE WING -Golf Girls' Story-

recordNo: 1799
machineName: スマスロ BIRDIE WING -Golf Girls' Story-
aliases: BIRDIE WING / バーディーウイング / スマスロ バーディーウイング
manufacturer: ユニバーサルブロス
formalModel: LバーディーウイングBC
inspectionCode: 5S1538
releaseDate: 2026-06-08
generation: 6.5号機 / スマスロ
systemType: AT / 周期管理 / CZ / 擬似ボーナス / ST
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 1geki・HAZUSEで型式 `LバーディーウイングBC`、検定番号 `5S1538`、メーカー ユニバーサルブロス、2026-06-08導入を確認。
- 情報島+・パチビーでも2026年6月導入/2026-06-08導入を照合。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.6%
- setting3: 102.1%
- setting4: 106.0%
- setting5: 110.0%
- setting6: 112.4%
initialHitBySetting:
  normalInitialHit:
  - setting1: 1/266.7
  - setting2: 1/264.1
  - setting3: 1/257.3
  - setting4: 1/256.0
  - setting5: 1/255.9
  - setting6: 1/255.9
  stInitialHit:
  - setting1: 1/421.2
  - setting2: 1/410.5
  - setting3: 1/381.9
  - setting4: 1/378.0
  - setting5: 1/377.6
  - setting6: 1/377.3
baseGamesPer50: 約31.5G/50枚（設定1）
netIncrease:
- ウイングボーナス: 約2.6枚/G
- バーディーボーナス系: 約5.0枚/G
basicPayout:
- ウイングボーナス: 約50枚
- バーディーボーナス: 約100枚
- エピソードボーナス: 約200枚
- バウンティクイーンボーナス: バウンティポイント=獲得枚数
- 基本ST（ユニバーサルカップ/BNカップ）: 1日20G+α、3日間の大会方式
modeSpecificMinimumData:
- 通常時はスタンバイフェーズ→ショットフェーズを1周期として、カップイン数等からCZ/ボーナスを目指す周期型。
- 通常周期天井は10周期消化後。次周期スタンバイフェーズから前兆を経てバーディーボーナス（ST当選）へ。
- 最上位ST「エクストラマッチ」は公開資料で平均期待枚数3500枚OVER表記あり。ただし内部抽選詳細は本DB対象外。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井周期をリセットし、通常10周期から最大7周期へ短縮。
- 内部状態はリセット。
- なな徹の機種別比較では有利区間・天井・周期を設定変更でリセットと明記。
- 設定変更後の開始ステージは高優先資料で「現在調査中」。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は、なな徹の機種別比較で有利区間・天井・周期を引き継ぐ。
- 設定変更専用の7周期天井短縮は適用しない。
- 据え置き時の開始ステージは現在調査中。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 1gekiの朝一比較表で純電源OFF→ON時は内部状態を引き継ぎ、天井周期も引き継ぐと直接確認。
- 純電源OFF→ON時の有利区間そのものを本機固有条件で直接比較した同等以上の資料は固定できず、一般則から推測せず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_STATE_AND_CEILING / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
settingChange:
- cycleCounter: RESET
- ceilingCycleCounter: RESET
carryOver:
- cycleCounter: CARRY_OVER
- ceilingCycleCounter: CARRY_OVER
powerCycle:
- ceilingCycleCounter: CARRY_OVER_DIRECTLY_CONFIRMED
- cycleCounter: CARRY_OVER_AS_CEILING_CYCLE_DIRECTLY_CONFIRMED
notes:
- 本機の主要天井はゲーム数ではなく周期管理。公開された設定変更専用G数天井は確認できない。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- cycle: 10周期消化後（11周期目スタンバイフェーズから前兆）
- benefit: バーディーボーナス＝ST当選
resetCeiling:
- cycle: 最大7周期消化後（8周期目スタンバイフェーズから前兆）
- benefit: バーディーボーナス＝ST当選
shortening:
- cycle: 3周期短縮
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 周期天井のリセット/短縮は確認。
- 「カップインモード」等の設定変更専用具体振り分け、朝一専用モードの存在・比率は、表記揺れ・型式・メーカー名と「リセット/朝一/モード/振り分け」を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_FOR_NUMERIC_MODE_DISTRIBUTION

### stateAfterReset
- 1gekiの直接比較表で内部状態は設定変更時RESET / 純電源OFF→ON時CARRY_OVER。
- 据え置き時の内部状態について、有利区間・天井・周期の据え置き引継ぎは直接確認できるが、「内部状態」を独立欄で明記した高優先比較表は固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 設定変更後の内部状態具体振り分け率は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / UNVERIFIED_FOR_OTHER_DETAILS

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
notes:
- なな徹が設定変更=リセット、据え置き=引継ぎを機種別比較で明記。
- 1gekiは通常遊技中の有利区間リセットタイミングを推察として掲載し、その際の上位CZ「ビーナスバトル」移行恩恵は「設定変更時を除く」としている。設定変更恩恵には混入しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE

### resetBenefits
- 周期天井: 通常10周期 → 設定変更後最大7周期へ短縮。
- 天井恩恵はバーディーボーナス＝ST当選。
- 朝一リセット台は通常より3周期浅い天井となるため、朝一狙いの主要構造的恩恵。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 通常遊技中の有利区間リセット時には上位CZ「ビーナスバトル」へ移行する実戦上の恩恵があるが、1gekiは設定変更時を除くと明記。したがって設定変更時の恩恵として扱わない。
- 設定変更時のみ適用される固定的な天井延長・不利専用モード等は、再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_EXCLUSION / NONE_CONFIRMED_FOR_OTHER_PENALTIES

### resetDetection
- なな徹は現時点で有効なリセット判別方法は判明していないと明記。
- 設定変更/据え置きとも開始ステージは現在調査中で、固定表示による確定判別は未確認。
- 7周期を超えても天井が発動しなければ設定変更ではなく据え置きの推測材料になるが、事後判別であり確定的な朝一即判別ではない。
- 本機固有のリールガックン条件/発生率は `BIRDIE WING/バーディーウイング/LバーディーウイングBC/ユニバーサルブロス` と「ガックン/設定変更/据え置き/朝一」を組み替えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_KNOWN_DIRECT_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCycleCeiling: 10周期消化後
resetCycleCeiling: 7周期消化後
ceilingShortening: 3周期
resetBenefit: バーディーボーナス＝ST当選
resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

## conflicts
- 設定2出玉率はジャグラーズネットに98.8%表記がある一方、HAZUSE・6確・1geki・フリック7・パチナビ等の複数資料は98.6%で一致。`CONFLICT_SOURCE_OUTLIER_98.8` として保持し、canonicalは多数一致する98.6%を採用。
- 天井の呼称に「最大10周期/最大7周期」と「10周期消化後/7周期消化後」、HAZUSEの「最大11周期到達/最大8周期到達」が混在するが、前兆開始が通常11周期目・変更後8周期目であるためカウント起点の表現差。canonicalは「10周期消化後 / 設定変更後7周期消化後」とする。
- 情報島+にはAT純増約2.5枚or約5.0枚、1geki/HAZUSE/6確等には約2.6枚or約5.0枚の表記がある。ウイングボーナスの直接詳細が約2.6枚/Gで一致するためcanonicalは約2.6枚/Gを採用し、2.5は丸め/概要差として保持。

## missingFields
- 設定変更時の内部状態具体振り分け率
- 設定変更専用モード/カップインモード具体振り分け率
- 据え置き時の「内部状態」独立直接文言
- 純電源OFF→ON時の有利区間そのものの本機固有直接文言
- 本機固有ガックン条件/発生率

## sources
retrievedAt: 2026-09-15
- 1geki 機種概要・型式・検定番号・設定別スペック: https://1geki.jp/slot/l_birdie/
- 1geki 天井・朝一・リセット: https://1geki.jp/slot/l_birdie/3/
- 1geki ST詳細: https://1geki.jp/slot/l_birdie/81/
- 1geki ウイングボーナス詳細: https://1geki.jp/slot/l_birdie/61/
- HAZUSE 基本スペック/型式/検定番号: https://hazuse.com/machine/pachislot/5S1538/genre/201/
- HAZUSE 機種総合: https://hazuse.com/machine/pachislot/5S1538/
- 6確: https://www.kaku6.jp/slot/birdie/
- なな徹 機種総合・朝一: https://nana-press.com/kaiseki/machine/1157/
- ジャグラーズネット: https://jugglersnet.com/chumoku/birdeie-wing
- 情報島+ 機種情報: https://p-johojima.jp/machine_spec/post-28506/
- パチビー: https://www.pachibee.jp/machines/index/226050002
- フリック7: https://flick7.net/slot/birdie_wing/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/256009/
- スロベース: https://slobase.jp/machines/birdie-wing
- パチナビ: https://pachinavi.net/machines/smasloth-birdie-wing/settei/
