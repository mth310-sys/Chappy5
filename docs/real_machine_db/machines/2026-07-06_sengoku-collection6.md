# 戦国コレクション6

recordNo: 1802
machineName: 戦国コレクション6
aliases: 戦コレ6 / L戦国コレクション6 / スマスロ 戦国コレクション6
manufacturer: コナミアミューズメント
formalModel: L戦国コレクション6KS
releaseDate: 2026-07-06
generation: 6.5号機 / スマスロ
systemType: AT / シナリオ管理型 / 周期抽選
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- コナミアミューズメント公式が2026-07-06に全国ホールで順次稼働開始と発表。製造元もコナミアミューズメント。
- 6確等の導入後解析で型式 `L戦国コレクション6KS`、導入日2026-07-06を確認。
confidence: OFFICIAL_FOR_PRODUCT_MANUFACTURER_RELEASE / ANALYSIS_HIGH_FOR_FORMAL_MODEL

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.1%
- setting3: 100.9%
- setting4: 106.0%
- setting5: 110.1%
- setting6: 114.9%
initialHitBySetting:
  atInitialHit:
  - setting1: 1/363.6
  - setting2: 1/350.4
  - setting3: 1/329.8
  - setting4: 1/289.4
  - setting5: 1/268.5
  - setting6: 1/252.2
baseGamesPer50: 約33.7G/50枚
netIncrease:
- normalAT: 約3.0枚/G
- upperAT: 約7.7枚/G
basicPayout:
- 時幻城RUSH: 1セット100枚以上
- 夢幻廻廊: 報酬決定ゾーンでの獲得枚数+α
modeSpecificMinimumData:
- 通常時は規定コレ到達による周期抽選、CZ、武将ガチャチケット等からATを目指す。
- ゲーム数天井は最大999G+α、周期天井は最大6周期。
- 1周期目の規定コレポイントは111または222コレ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井までのゲーム数・周期数・コレポイントをRESET。
- 通常モード・裏モード・規定リプレイ回数を再抽選。
- 周期天井は最大6周期から最大3周期へ短縮。
- 朝一リセット時の1周期目規定コレ数は222以下。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き運用は純電源OFF→ONの機種固有比較と同方向で、天井ゲーム数・周期数・コレポイント・通常モード・裏モード・規定リプレイ回数を引き継ぐ。
- 据え置き単独の別操作表ではなく電源OFF/ON比較を主根拠とする。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE / SUPPORTED_FOR_CARRY_OVER

### powerCycleBehavior
- 電源OFF→ONのみでは天井までのゲーム数、天井までの周期数、コレポイント、通常モード、裏モード、規定リプレイ回数を引き継ぐ。
- ステージは公開比較表でも調査中。
confidence: ANALYSIS_HIGH

### gameCounterReset
settingChange:
- gameCeilingCounter: RESET
- cycleCounter: RESET
- collectionPoints: RESET
powerCycle:
- gameCeilingCounter: CARRY_OVER
- cycleCounter: CARRY_OVER
- collectionPoints: CARRY_OVER
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- gameCeiling: 最大999G+α
- cycleCeiling: 最大6周期
resetCeiling:
- cycleCeiling: 最大3周期
- gameCeiling: 設定変更専用の一律短縮値は確認せず、999G+αとは別に周期天井短縮を保持
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常モード・裏モードは設定変更時に再抽選、純電源OFF→ONでは引き継ぎ。
- 設定変更専用の通常/裏モード具体振り分けは再探索後もPUBLIC_BREAKDOWN_NOT_FOUND_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY_OVER

### stateAfterReset
- 公開比較では通常モード・裏モード・規定リプレイ回数まで設定変更時再抽選、電源OFF/ON時引継ぎを確認。
- 高確等を含む全内部状態の独立比較値は実機完全再現範囲へ踏み込まず収集しない。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
settingChange: RESET_SUPPORTED_BY_SECONDARY_ANALYSIS
powerCycle: CARRY_OVER_SUPPORTED_BY_SECONDARY_ANALYSIS
carryOver: CARRY_OVER_SUPPORTED_BY_SECONDARY_ANALYSIS
- 有利区間については複数二次解析で設定変更RESET/電断引継ぎ方向を確認したが、必勝本の比較表は有利区間自体を明示していないため、天井・モード項目より信頼度を一段下げる。
confidence: ANALYSIS_MULTI_SECONDARY

### resetBenefits
- 周期天井が最大6周期→最大3周期へ短縮。
- 1周期目の規定コレ数は222以下。
- 設定変更後1回目ATでは、時幻城ミッション勝利時のワンモア発生率が通常50%から63%へ上昇。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の天井延長、不利専用モード、初当り冷遇率などの主要な公開不利数値は再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更時は最大3周期のため、4周期目へ到達した場合は設定変更挙動と矛盾し据え置き推測材料になる。
- 1周期目222以下は通常時の1周期目にも適用される公開仕様があるため、それ単独を設定変更確定判別として扱わない。
- 本機固有ガックン条件/発生率、朝一ランプによる即時判別は検索語を変えて再探索後もUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_FOR_CYCLE_BASED_POSTERIOR_HINT / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCycleCeiling: 6周期
resetCycleCeiling: 3周期
firstCycleCollectionPointMax: 222コレ
normalOneMoreRateOnMissionWin: 50%
firstATAfterSettingChangeOneMoreRateOnMissionWin: 63%
normalGameCeiling: 999G+α
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

## conflicts
- 一部二次資料は天井を「967G」と見出し表記するが、同資料本文および1geki・6確・P-WORLD等は最大999G+αで一致するため、canonicalは999G+α。967G表記は実戦上の到達表示/数え方差または表記揺れ候補として平均しない。
- 「リセット後天井400G」は3周期×平均換算の実戦目安として掲載される資料があるが、仕様上の確定ゲーム数天井ではないためcanonicalには採用せず、最大3周期を保持。

## missingFields
- 検定番号の高信頼固定
- 設定変更時の通常モード/裏モード具体振り分け
- 本機固有ガックン条件/発生率
- 朝一ランプ等の即時変更判別
- ステージの設定変更/電源OFF ON比較

## sources
retrievedAt: 2026-09-15
- コナミアミューズメント公式 発売決定: https://www.konami.com/amusement/corporate/ja/topics/20260406/
- コナミアミューズメント公式 稼働開始: https://www.konami.com/amusement/corporate/ja/topics/20260706/
- 6確 基本スペック/解析: https://www.kaku6.jp/slot/sencolle6/
- 1geki 天井・朝一リセット・有利区間: https://1geki.jp/slot/l_sencolle6/3/
- 必勝本 天井&設定変更/電源OFF ON比較: https://hisshobon.com/machineinfo/138308/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/138335/
- 必勝本 規定コレポイント: https://hisshobon.com/machineinfo/138325/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10471
- パチビー 機種情報: https://www.pachibee.jp/machines/index/226060001
- 情報島+ 機種概要: https://p-johojima.jp/machine_spec/post-30376/
- ジャグラーズネット: https://jugglersnet.com/chumoku/sencolle6
- スロパチクエスト 朝一比較: https://www.slopachi-quest.com/article/sengoku-korekushon-6-tenjou/
