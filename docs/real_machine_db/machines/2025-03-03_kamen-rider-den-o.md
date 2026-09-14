# L 仮面ライダー電王

recordNo: 1712
machineName: L 仮面ライダー電王
aliases: スマスロ 仮面ライダー電王 / 仮面ライダー電王
manufacturer: SUN SUN SUN / KYORAKU
formalModel: L仮面ライダー電王UD
inspectionCode: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
releaseDate: 2025-03-03
generation: 6.5号機 / スマスロ / AT
systemType: CZ + 擬似ボーナス + AT
settings: 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 東映公式は2025-03-03から順次導入開始を告知。ただし地域により3月17日導入予定もある。
- グリーンべるとは山形県公安委員会の検定通過公示として型式 `L仮面ライダー電王UD`、製造者 `SUN SUN SUN` を掲載。
- 主要解析各社は全国導入日を2025-03-03として掲載。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 99.1%
- setting4: 103.0%
- setting5: 109.1%
- setting6: 113.1%
initialHitBySetting:
- setting1: 1/477.7
- setting2: 1/466.9
- setting4: 1/430.6
- setting5: 1/398.3
- setting6: 1/376.6
bonusInitialBySetting:
- setting1: 1/254.5
- setting2: 1/250.0
- setting4: 1/235.5
- setting5: 1/222.1
- setting6: 1/211.9
baseGamesPer50: 約34.7G/50枚（設定1）
netIncrease: 約2.5枚/G
basicPayout:
- 電王BONUS: 20G × 約2.5枚/G（約50枚相当のゲーム数管理擬似ボーナス）
- 俺FEVER: 1セット30G+α / 約2.5枚/G
- 俺CLIMAX: 初期6G+α / ボーナス高確率型上位AT
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常モードは通常A / 通常B / 通常C / 天国。
- 規定G数は111～888Gのゾロ目。
- 通常A天井888G+α、通常B777G+α、通常C444G+α、天国111G+α。
- AT間で電王BONUSを5回スルーすると6回目の電王BONUSでAT濃厚。
- 111G到達時のトータルボーナス期待度は約46%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_CHANGE_CARRY_POWER_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- 天井G: RESET。
- モード: RESET / 再抽選。
- 憑依ポイント（CZポイント）: RESET。
- 内部状態: なな徹はRESETとして掲載。
- 液晶ステージ: 街中ステージ。
- 天井短縮の固定恩恵は公開確認できず、通常同様に最大888G+αの可能性あり。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井G、内部モード、内部状態、憑依ポイントを引き継ぐ。
- 見た目上のステージは街中のため、ステージだけでは変更判別不可。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### powerCycleBehavior
- 純電源OFF→ON: 天井G、モード、憑依ポイントを引き継ぐ。
- 液晶ステージは街中へ。
- 内部状態については機種固有の直接比較表を十分再探索後も一意固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間そのものについて純電断時の独立明記は十分再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LISTED_ITEMS / UNVERIFIED_FOR_STATE_AND_SECTION

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: 最大888G+α
resetCeiling: 固定短縮なし / 最大888G+αの可能性あり
ceilingBenefit: 電王BONUS
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時にモード再抽選。
- 設定変更時専用のモード振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き・純電源OFF→ONはモード引継ぎ。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CHANGE_CARRY

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 機種固有明記を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CHANGE_CARRY

### resetBenefits
- 天井短縮の固定恩恵はなし。
- 設定変更時は内部ゲーム数とCZポイントが加算される可能性を示す解析資料があるが、具体分布は公開固定値を確認できず定量値として採用しない。
- 朝一111Gゾーンは通常の規定G数構造上重要だが、設定変更専用の当選率としては扱わない。
confidence: ANALYSIS_HIGH / NUMERIC_RESET_BENEFIT_NOT_PUBLIC

### resetPenalties
- 前日の天井進行、モード、CZポイント、内部状態を失う。
- 数値化された設定変更固有の不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 設定変更・据え置き・純電断とも朝一は街中ステージで、CZポイント表示は「??」。見た目だけでの判別は困難。
- 本機固有ガックン条件・発生率は型式・メーカー・シリーズ名・リセット/据え置き/電源OFF ON等で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_LIMITS / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 888G+α
resetCeiling: NO_FIXED_SHORTENING_CONFIRMED
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
first111GTotalBonusExpectation: 約46%（通常モード込みの一般値。リセット専用値ではない）

## conflicts
- なし。主要公開スペックは一致。

## missingFields
- 検定番号: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH（型式と検定通過公示は確認）
- 設定変更時モード振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の内部状態/有利区間: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 東映 仮面ライダーWEB 導入告知: https://www.kamen-rider-official.com/news_articles/2841
- KYORAKU公式: https://www.kyoraku.co.jp/product_site/2025/kamenrider_den-o_s/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-91609/
- 1geki 天井/朝一/電源OFF-ON: https://1geki.jp/slot/l_kmnr_deno/3/
- なな徹 朝一/設定変更/据え置き: https://nana-press.com/kaiseki/machine/922/27968/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2686/2
- パチ&スロ必勝本 モード: https://hisshobon.com/machineinfo/86409/
- P-WORLD: https://www.p-world.co.jp/machine/database/10220
- 6確 基本スペック/朝一整理: https://www.kaku6.jp/slot/riderdeno/

## researchNotes
- 実機完全再現用の全内部抽選は収集していない。
- 検定番号・ガックン・純電断内部状態等は検索語と資料系統を変えた再探索後のみ欠損扱いとした。
