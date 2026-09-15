# L邪神ちゃんドロップキック

recordNo: 1809
machineName: L邪神ちゃんドロップキック
aliases: スマスロ 邪神ちゃんドロップキック / 邪神ちゃんドロップキック
manufacturer: サンスリー / SANYO
formalModel: L邪神ちゃんドロップキックTX
inspectionNumber: 5S1821
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス経由AT / 上位AT搭載
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- SANYO系公式情報・必勝本で2026-08-03導入を確認。
- 複数解析で型式 `L邪神ちゃんドロップキックTX`、検定番号 `5S1821` を照合。
confidence: OFFICIAL / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.6%
- setting3: 100.4%
- setting4: 106.1%
- setting5: 110.4%
- setting6: 114.1%
initialHitBySetting:
  bonus:
  - setting1: 1/253.1
  - setting2: 1/248.1
  - setting3: 1/241.6
  - setting4: 1/222.5
  - setting5: 1/211.8
  - setting6: 1/210.0
  AT:
  - setting1: 1/758.2
  - setting2: 1/746.3
  - setting3: 1/722.8
  - setting4: 1/655.9
  - setting5: 1/615.9
  - setting6: 1/606.2
baseGamesPer50: 約30.7G/50枚
netIncrease:
- 人生シアター: 約2.5枚/G
- ボーナス/上位AT: 約5.0枚/G
basicPayout:
- 人生シアター: 50G+α
modeSpecificMinimumData:
- 通常ゲーム数天井は最大799G+α（特殊モード）。通常A/B最大749G、通常C最大599G、天国A/Bは99G以内。
- ボーナス10スルーで次回AT濃厚。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時はゲーム数天井が最大799Gから最大599Gへ短縮。
- 内部モードは通常Cまたは天国スタート濃厚。
- いずれか1ラインのラインポイント周期天井が1周期に短縮される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは天井・内部モード・ラインポイントを引き継ぐとする解析を確認。
confidence: ANALYSIS_SINGLE_DIRECT / SECONDARY_SUPPORTED

### powerCycleBehavior
- 電源OFF→ONのみでは天井・内部モード・ラインポイントを引き継ぐとする直接整理を確認。
confidence: ANALYSIS_SINGLE_DIRECT / SECONDARY_SUPPORTED

### gameCounterReset
settingChange: RESET_WITH_SHORTENED_MAX_CEILING
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / ANALYSIS_SINGLE_DIRECT_FOR_CARRY_OVER_POWER

### ceilingAfterReset
normalMaxCeiling: 799G+α
resetMaxCeiling: 599G+α
normalModeCeilings:
- 通常A: 749G+α
- 通常B: 749G+α
- 通常C: 599G+α
- 特殊: 799G+α
- 天国A/B: 99G以内
bonusThroughCeiling: 10スルーで次回AT濃厚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常Cまたは天国スタート濃厚。
- 通常Cと天国の具体振り分けは再探索後も公開値を固定できず。
confidence: ANALYSIS_HIGH_FOR_DESTINATION_RANGE / UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- 高確/低確等の独立した内部状態について設定変更時の具体再抽選テーブルは再探索後も固定できず。
confidence: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 通常遊技中は差枚+1600枚以上のボーナス終了時等に有利区間リセット契機があるとする解析を確認。
- 設定変更時そのものの有利区間処理を機種固有の高優先直接資料で固定できず、一般スマスロ仕様から推測補完しない。
confidence: UNVERIFIED_SETTING_CHANGE_DIRECT_WORDING / ANALYSIS_SINGLE_FOR_IN_GAME_RESET_TIMING

### resetBenefits
- 最大ゲーム数天井799G+α→599G+α。
- 通常Cまたは天国スタート濃厚。
- いずれか1ラインのポイント周期天井が1周期へ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の天井延長・不利専用モード・初当たり冷遇等は再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 朝一599G+αを明確に超えてボーナス非当選なら据え置き推測材料。
- モード挙動は確率的材料であり単独の設定変更確定条件ではない。
- 本機固有ガックン条件/発生率、即時UI確定条件は検索語・資料系統変更後もUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CEILING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_IMMEDIATE_UI

### numericResetData
normalMaxGameCeiling: 799G+α
resetMaxGameCeiling: 599G+α
resetModeDestination: 通常C or 天国濃厚
resetLinePointCycleCeiling: いずれか1ラインが1周期
publicResetExpectedValue:
- スロベース独自条件: 設定変更時は等価300G〜 / 5.6枚400G〜を狙い目として提示（メーカー公表値ではないため参考値として分離）
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_RESET_NUMBERS / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE

## conflicts
- 通常B天井はなな徹等で749G、一部解析で599G+α表記がある。複数高優先解析の749Gをcanonicalとし `CONFLICT_NORMAL_B_CEILING` を保持。
- メーカー表記はサンスリー/SANYOが併用される。本DBではブランド/製造系としてサンスリー / SANYOを併記。

## missingFields
- 設定変更時の通常C/天国具体振り分け
- 設定変更時の独立内部状態テーブル
- 設定変更時有利区間処理の機種固有高優先直接文言
- 本機固有ガックン条件/発生率
- 即時UIによる変更確定条件

## sources
retrievedAt: 2026-09-15
- SANYO公式プレスリリース一覧: https://www.sanyobussan.co.jp/information/pressrelease.html
- SANYO公式: https://www.sanyobussan.co.jp/index.html
- パチ&スロ必勝本 新機種記事: https://hisshobon.com/news/102087/
- 6確: https://www.kaku6.jp/slot/jashinchan/
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/260992/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1181/38246/
- スロベース 機種: https://slobase.jp/machines/jashin-chan-dropkick
- スロベース リセット: https://slobase.jp/articles/jashin-chan-dropkick-reset
- こぜログ: https://kozelog.net/machine/sun3/jashin-chan/
