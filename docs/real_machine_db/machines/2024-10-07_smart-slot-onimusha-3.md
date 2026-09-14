# スマスロ 鬼武者3

recordNo: 1676
machineName: スマスロ 鬼武者3
aliases: 鬼武者3 / L鬼武者3 / L鬼武者3XA
manufacturer: アデリオン / ユニバーサルエンターテインメント
formalModel: L鬼武者3XA
inspectionCode: 4S0403
releaseDate: 2024-10-07
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_MODE_DISTRIBUTION_AND_GAKKUN_UNVERIFIED

## releaseAndModelEvidence
- 遊技通信/P-WORLDでアデリオン製、型式 `L鬼武者3XA` を確認。
- HAZUSEで型式 `L鬼武者3XA`、検定番号 `4S0403`、2024-10-07導入を確認。
- 必勝本・一撃・なな徹・P-WORLD機種DBでも2024-10-07導入および主要性能を照合。
confidence: INDUSTRY + MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.3%
- setting2: 98.8%
- setting3: 100.6%
- setting4: 105.3%
- setting5: 107.5%
- setting6: 110.3%
initialHitBySetting:
- setting1: ボーナス初当り 1/412.9
- setting2: ボーナス初当り 1/402.3
- setting3: ボーナス初当り 1/388.4
- setting4: ボーナス初当り 1/352.2
- setting5: ボーナス初当り 1/341.8
- setting6: ボーナス初当り 1/335.2
baseGamesPer50: 約32.6G/50枚
netIncrease:
- 擬似ボーナス: 約2.8枚/G または 約6.1枚/G
basicPayout:
- SUPER BIG BONUS: 約711枚
- BIG BONUS: 約318枚
- REGULAR BONUS: 約104枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数振り分けに関わる通常A/B/C/D、リセット、天国、超天国、鬼天国を持つ。
- 通常A最大1350G+α、通常B950G+α、通常C750G+α、通常D450G+α、天国系128G+α、リセット700G+α。
- 初当りの50%以上がSUPER BIG BONUS、初当り後は50%以上で鬼モード（天国系）移行に期待。
- 1000G超でのボーナス当選はSUPER BIG BONUS濃厚。最深1350G到達時は50%以上で超天国移行。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_RESET_MODE_DISTRIBUTION_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をリセットし、リセットモードへ移行。
- 状態は再抽選、内部小役ポイントはリセット。
- なな徹では設定変更時に有利区間・内部状態・天井がリセットと明記。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間・内部状態・天井を引き継ぐことをなな徹で確認。
- 必勝本の電源OFF/ON比較でも天井ゲーム数・モード・状態・小役ポイントが引継ぎとなるため、純電断を伴う据え置きでも内部進行は保持される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ON時は、天井までのゲーム数・モード・状態・小役ポイントを引き継ぐ。
- 電源OFF→ONだけではリセットモードへ移行しない。
- 有利区間についてはなな徹の据え置き表で引継ぎを確認し、純電断単独の独立表記は限定的だが、必勝本の内部各項目引継ぎと整合する。
confidence: ANALYSIS_HIGH_FOR_GAME_MODE_STATE_POINT / ANALYSIS_MEDIUM_HIGH_FOR_ADVANTAGEOUS_SECTION_POWER_CYCLE

### gameCounterReset
- 通常時最深天井は最大1350G+α。
- 設定変更時はゲーム数をリセットし、リセットモード最大700G+αへ短縮。
- 据え置き・純電源OFF→ON時は天井ゲーム数を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 最大1350G+α（通常A）
resetGameCeiling: 最大700G+α（リセットモード）
benefit: ボーナス当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はリセットモードへ移行。
- リセットモードは設定変更時のみ移行し、最大天井700G+α。
- リセットモード内の詳細な規定G振り分け率は公開資料で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MODE / UNVERIFIED_FOR_FULL_DISTRIBUTION

### stateAfterReset
- 設定変更時: 状態を再抽選（なな徹表記では内部状態リセット）。
- 据え置き/純電源OFF→ON: 状態を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き時: 有利区間引継ぎ。
- 純電源OFF→ON単独については据え置き表および内部各項目引継ぎ情報と整合するためCARRY_OVER扱い。ただし独立した有利区間欄の直接表記は限定的。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / MEDIUM_HIGH_FOR_PURE_POWER_CYCLE

### resetBenefits
- 天井が通常最深1350G+αから最大700G+αへ短縮。
- 設定変更後は200G以内のボーナス当選期待度50%OVER。
- リセットモード専用の詳細振り分け率は未公開/未固定。
status: CONFIRMED
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の出玉上の不利要素は主要公開資料から確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 朝一700G+αを超えてボーナス非当選なら設定変更挙動とは整合せず、据え置き判断材料となる。
- ステージは設定変更/純電断とも直接判別材料として固定できない資料があり、見た目だけの断定には使用しない。
- 本機固有のリールガックン発生条件・発生率は検索語・資料系統を変更しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 1350G+α
resetGameCeiling: 700G+α
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
morningHitRate: 200G以内 50%OVER
resetBenefitRate: 200G以内当選期待度50%OVER
gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_NUMERICS / UNVERIFIED_FOR_UNPUBLISHED_DISTRIBUTION_AND_GAKKUN

### publicMorningNumbers
- 設定変更時天井: 最大700G+α。
- 設定変更後200G以内ボーナス当選期待度: 50%OVER。
- リセットモードの詳細規定G数振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 一撃の初期/後年記事にはリセットモードを「移行の可能性あり!?」とする表現が残る一方、必勝本・なな徹・P-WORLD系機種資料は設定変更時リセットモードと扱い、700G+α短縮・200G以内50%OVERが一致。canonicalは設定変更時リセットモード、表現差をソース成熟度差として保持。

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH
sources:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/28730/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10104
- HAZUSE: https://hazuse.com/machine/pachislot/4S0403/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84748/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/84737/
- 必勝本 モード: https://p.hisshobon.jp/machine/4372/1/105231
- 一撃: https://1geki.jp/slot/l_onimusya3/
- 一撃 天井/朝一: https://1geki.jp/slot/l_onimusya3/3/
- なな徹 天井: https://nana-press.com/kaiseki/machine/828/24473/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/828/24356/
- なな徹 モード: https://nana-press.com/kaiseki/machine/828/24359/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/219380/

## QA notes
- 実機完全再現用の細粒度内部抽選値は収集対象外。
- `COMPLETE_CORE`相当の性能コアと、resetBehaviorのQA状態を分離して管理。
- 未公開のリセットモード詳細振り分け・ガックンを推測補完していない。
