# スマート沖スロ ダークハイビ

recordNo: 1801
machineName: スマート沖スロ ダークハイビ
aliases: ダークハイビ / ダークハイビスカス / スマスロダークハイビ / Lダークハイビ
manufacturer: ピーセカンド製造 / パイオニアブランド
formalModel: LダークハイビSB
inspectionCode: 6S0070
releaseDate: 2026-06-22
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス連チャン / 沖スロ / モード管理
settings: 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- パイオニア公式製品一覧で2026年6月発売、製造元ピーセカンドを確認。
- 1gekiで導入開始日2026-06-22、型式 `LダークハイビSB`、検定番号 `6S0070` を確認。
- 遊技日本の発表記事でも製造元ピーセカンド、型式 `LダークハイビSB` を確認。
confidence: OFFICIAL_FOR_PRODUCT_AND_MANUFACTURER / ANALYSIS_HIGH_FOR_DATE_MODEL_INSPECTION

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 99.4%
- setting4: 102.5%
- setting5: 106.8%
- setting6: 110.0%
initialHitBySetting:
  overallInitialHit:
  - setting1: 1/275.9
  - setting2: 1/264.8
  - setting4: 1/248.5
  - setting5: 1/234.5
  - setting6: 1/228.3
  bbAppearance:
  - setting1: 1/243.0
  - setting2: 1/233.1
  - setting4: 1/218.1
  - setting5: 1/199.5
  - setting6: 1/187.1
  rbAppearance:
  - setting1: 1/320.4
  - setting2: 1/307.9
  - setting4: 1/289.7
  - setting5: 1/270.0
  - setting6: 1/259.1
  bonusCombinedAppearance:
  - setting1: 1/138.2
  - setting2: 1/132.6
  - setting4: 1/124.4
  - setting5: 1/114.7
  - setting6: 1/108.6
baseGamesPer50: 約30.0G/50枚
netIncrease: 約9.0枚/G
basicPayout:
- BIG: 約306枚
- REG: 約106枚
modeSpecificMinimumData:
- 通常時は6種類の通常モードと独立した裏モードでボーナス抽選。
- 通常A/B/Cは天井約999G、引き戻し/チャンスは約250G、ダーク準備は約1005G。
- 天国/ダークハイビモードは32G以内のボーナス連チャンを管理し、ダークハイビモードは32G以内ループ率約95%、平均20連OVER。
- `BB/RB/合算` は連チャンを含む出現率として公開されており、`overallInitialHit` と定義を分離して保持する。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井ゲーム数と内部状態をRESETする機種固有比較を確認。
- 通常モードは設定変更時に再抽選され、約40%でチャンスモード、約30%で通常B以上から開始。
- チャンスモードは設定変更時のみ移行する公開解析で、天井約250G。
- 有利区間は設定変更でRESETされるとする複数解析資料がある。ただし、通常営業中の有利区間リセット時に発生する「ダークハイビ50%以上+天国約40%」恩恵は設定変更時を除くため、朝一恩恵へ混入しない。
confidence: ANALYSIS_HIGH_FOR_MODE_AND_RESET / ANALYSIS_MULTI_FOR_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 据え置き単独について、天井・状態・モード・有利区間を横並びで直接比較する高優先の公開表は確認できなかった。
- 純電源OFF→ONの機種固有比較では天井・内部状態を引き継ぐため、一般的な据え置き運用でも引継ぎ方向を支持する二次資料はあるが、据え置き固有契約は `SECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED` とする。
confidence: SECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数・内部状態を引き継ぐ機種固有比較を複数二次解析で確認。
- 通常モード・裏モード・ダークカウンタ・有利区間の電断時個別挙動は、高優先の公開直接比較で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_MULTI_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_OTHER_INTERNALS

### gameCounterReset
settingChange:
- ceilingGameCounter: RESET
carryOver:
- ceilingGameCounter: SECONDARY_SUPPORTED_CARRY_OVER
powerCycle:
- ceilingGameCounter: CARRY_OVER
confidence: ANALYSIS_MULTI_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
normalCeiling:
- normalA_B_C: 約999G
- pullback: 約250G
- chance: 約250G
- darkPreparation: 約1005G
resetCeiling:
- 約40%でチャンスモード選択 → 約250G天井
- その他は再抽選された通常モードに依存
notes:
- 設定変更後に一律250G天井になる仕様ではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常モードを再抽選。
- 約40%でチャンス、約30%で通常B以上。
- チャンスモードは設定変更時のみ移行する解析。
- 残り約30%の詳細振り分け、通常B以上の内訳は公開範囲で固定できず `PUBLIC_BREAKDOWN_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時の裏モード具体振り分けは `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_RESET_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態RESET、純電源OFF→ONはCARRY_OVERという比較を確認。
- 「状態」が通常モード/裏モード/内部抽選状態のどこまでを包含するかは媒体表現が粗いため、モード項目では公開された数値だけを別管理。
confidence: ANALYSIS_MULTI

### advantageousSectionReset
settingChange: RESET_SUPPORTED_BY_MULTIPLE_ANALYSIS
carryOver: UNVERIFIED_MACHINE_SPECIFIC_DIRECT_COMPARISON
powerCycle: UNVERIFIED_MACHINE_SPECIFIC_DIRECT_COMPARISON
- 通常営業中の有利区間リセット（設定変更時を除く）は、ダークハイビモード50%以上、天国約40%、合算約90%で天国以上という強い恩恵を持つ。
- 上記は明確に「設定変更時を除く」ため、朝一設定変更の恩恵として扱わない。
confidence: ANALYSIS_HIGH_FOR_NON_SETTING_CHANGE_SECTION_RESET_BENEFIT

### resetBenefits
- 設定変更時は約40%でチャンスモードに移行し、天井約250G。
- 設定変更時は約30%で通常B以上から開始。
- 上位モードから開始しやすいことを必勝本でも確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 通常営業中の有利区間リセット時にある「ダークハイビ50%以上+天国約40%」の強恩恵は、設定変更時には適用されない。
- ただしこれを固定的な朝一冷遇率と呼べる公開比較値はなく、設定変更専用の天井延長/不利専用モード/初当り冷遇率は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_EXCLUSION / NONE_CONFIRMED_FOR_FIXED_PENALTY

### resetDetection
- 設定変更時のみチャンスモードへ移行するため、約250G以内の当選は事後的なリセット推測材料になるが確定判別ではない。
- 約250Gを超えたことだけで設定変更否定にはならない（チャンス選択は約40%）。
- 本機固有のガックン条件/発生率、朝一ランプ状態、即時の設定変更確定手順は、`ダークハイビ/LダークハイビSB/ピーセカンド/パイオニア` と「ガックン/設定変更/据え置き/朝一」を組み替えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_FOR_MODE_BASED_POSTERIOR_HINT / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetChanceModeRate: 約40%
resetNormalBOrHigherRate: 約30%
resetChanceModeCeiling: 約250G
normalABCGameCeiling: 約999G
darkPreparationCeiling: 約1005G
nonSettingChangeAdvantageousSectionResetDarkHaibiRate: 50%以上
nonSettingChangeAdvantageousSectionResetHeavenRate: 約40%
nonSettingChangeAdvantageousSectionResetHeavenOrHigherCombined: 約90%
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- 6確の一部文面に「天井非搭載」と「約999G/約250G天井」の自己矛盾が見られるため、天井非搭載表現は不採用。1geki、必勝本、複数解析資料のモード別天井値をcanonicalとする。
- 一部二次資料は本機を「Aタイプ」と表記するが、公式/業界/主要解析は擬似ボーナスAT・スマスロとして扱うため、systemTypeはATをcanonicalとする。

## missingFields
- 据え置き単独の高優先機種固有直接比較
- 純電源OFF→ON時の通常モード・裏モード・ダークカウンタ・有利区間個別挙動
- 設定変更時の残り約30%のモード詳細振り分け
- 設定変更時の裏モード具体振り分け
- 本機固有ガックン条件/発生率
- 朝一ランプ状態による即時変更判別

## sources
retrievedAt: 2026-09-15
- パイオニア公式 2026年製品一覧: https://www.slot-pioneer.co.jp/products/2026.html
- パイオニア公式 プレスリリース一覧: https://www.slot-pioneer.co.jp/release.html
- 1geki 機種概要・型式・検定番号・スペック: https://1geki.jp/slot/l_dark_haibi/
- 1geki 天井・朝一リセット: https://1geki.jp/slot/l_dark_haibi/3/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89798/
- 必勝本 モード: https://hisshobon.com/machineinfo/137501/
- 必勝本 小役確率・コイン持ち: https://hisshobon.com/machineinfo/137499/
- 必勝本 非有利区間移行時抽選（設定変更時以外）: https://hisshobon.com/machineinfo/137505/
- なな徹 機種総合・朝一: https://nana-press.com/kaiseki/machine/1167/
- ジャグラーズネット 解析・朝一比較: https://jugglersnet.com/hikarimonoat/dark-haibi
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/257827/
- パチナビ 朝一・リセット: https://pachinavi.net/machines/smasloth-dark-hibi/
- 遊技日本 発表記事: https://yugi-nippon.com/pachinko-new-machine/post-76191/
- G-net 販売概要: https://g-net-ps.com/info/s0272/
- HAZUSE 型式・検定番号: https://hazuse.com/machine/pachislot/6S0070/
- 情報島+ 過去新台一覧: https://p-johojima.jp/machine_spec/post-2074/
