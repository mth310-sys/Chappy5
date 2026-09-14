# スマスロ ようこそ実力至上主義の教室へ

recordNo: 1724
machineName: スマスロ ようこそ実力至上主義の教室へ
aliases: Lようこそ実力至上主義の教室へ / スマスロ よう実 / Lよう実
manufacturer: DAXEL / 発売元サミー
formalModel: Lようこそ実力至上主義の教室へDE
inspectionCode: 4S1658
releaseDate: 2025-05-07
generation: 6.5号機 / スマスロ
systemType: AT・CZ経由型 / 擬似ボーナス併用
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- DAXEL親会社ダイコク電機のIRは2025-02-19に新製品 `Lようこそ実力至上主義の教室へDE` を発表。
- HAZUSEは型式 `Lようこそ実力至上主義の教室へDE`、検定番号 `4S1658`、DAXEL、2025-05-07導入を掲載。
- Amusement JapanはDAXELが発表し、2025-05-07ホール導入予定と報道。サミーとの協業機。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_DB_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.7%
- setting3: 101.3%
- setting4: 104.8%
- setting5: 109.3%
- setting6: 114.0%
czInitialBySetting:
- setting1: 1/148.6
- setting2: 1/143.8
- setting3: 1/138.0
- setting4: 1/130.3
- setting5: 1/121.8
- setting6: 1/115.5
atInitialBySetting:
- setting1: 1/329.9
- setting2: 1/317.9
- setting3: 1/302.8
- setting4: 1/281.5
- setting5: 1/260.0
- setting6: 1/243.3
baseGamesPer50: 約33.9G/50枚（資料により丸めて約34G）
netIncrease: AT約2.0〜3.3枚/G（クラスランクで変動） / 擬似ボーナス約3.3枚/G
basicPayout:
- AT「よう実CHANCE」: 初期40G+α
- よう実BONUS（赤7）: 約30G / 約100枚
- よう実BONUS PERFECT（白7）: 約60G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- CZ間天井: 最大500G+αでCZ当選。
- CZスルー天井: AT間CZ7回スルー後、8回目CZでATへ書き換え。
- AT間天井: 最大980G+αでAT当選。到達時はATのみ50%、AT+赤7 25%、AT+白7 12.5%、AT+白7+DRAGON BURST 12.5%。
- 設定変更時はAT間天井630G+αへ短縮し、通常天井と同じ追加恩恵抽選が有効。
- CZモード、クラスランク、ホワイトポイント（穢れ）、プライベートポイント等を搭載するが、実機完全再現用の全内部抽選は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_TABLE_AND_PUBLIC_RESET_DISTRIBUTIONS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET（なな徹の機種固有「有利区間リセットのタイミング」に設定変更時を明記）。
- AT間天井ゲーム数: RESETし、最大980G+αから630G+αへ短縮。
- よう実ポイント: 再抽選。
- CZモード: 再抽選。モード1は選択されずモード2以上。
- クラスランク: 再抽選。
- ホワイトポイント（穢れ）: 再抽選。
- プライベートポイント: RESET。
- 内部状態: RESET/再抽選とする主要解析あり。
- 開始ステージ: 必勝本の実戦上は教室ステージ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置きでは設定変更による各種RESET/再抽選を行わず、天井進行・よう実ポイント・CZモード・クラスランク・穢れ等は基本CARRY_OVERとして扱う。
- 主要な機種別比較表は「設定変更 vs 電源OFF/ON」で直接値を示し、据え置き単独列の明記は固定できなかったため、純電断での引継ぎ確認を根拠にしつつ `DIRECT_UNTOUCHED_WORDING_NOT_FOUND_AFTER_RESEARCH` を併記する。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE_EQUIVALENT_STATE / DIRECT_UNTOUCHED_WORDING_NOT_FOUND

### powerCycleBehavior
- 純電源OFF→ON: 天井までのゲーム数をCARRY_OVER。
- よう実ポイント: CARRY_OVER。
- CZモード: CARRY_OVER。
- クラスランク: CARRY_OVER。
- ホワイトポイント（穢れ）: CARRY_OVER。
- 内部状態: CARRY_OVER。
- プライベートポイント: 必勝本では「現在調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
- 純電断のみの場合の有利区間を独立して直接記述した機種固有資料は固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAMES_POINTS_MODE_RANK_STATE / UNVERIFIED_FOR_PRIVATE_POINT_AND_DIRECT_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: AT間天井進行をRESETし630G+αへ短縮。
- 据え置き: CARRY_OVER扱い（据え置き単独直接表記は未固定）。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCzCeiling: 最大500G+α
normalCzThroughCeiling: CZ7スルー後の8回目CZでAT
normalAtCeiling: 最大980G+α
resetAtCeiling: 最大630G+α
atCeilingBenefit:
- ATのみ: 50%
- AT+赤7BONUS: 25%
- AT+白7BONUS: 12.5%
- AT+白7BONUS+DRAGON BURST: 12.5%
- 設定変更時630G+α到達でも同恩恵抽選が有効。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時のCZモードはモード1非選択、モード2以上から開始。
- 公開振り分け:
  - mode2: 50.0%
  - mode3: 25.0%
  - mode4: 25.0%
- よって設定変更時は50%でCZモード3 or 4スタート。
- 電源OFF→ONではCZモードを引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態RESET/再抽選。
- 電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更後の内部状態（通常/高確等）の個別開始率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / PUBLIC_VALUE_NOT_FOUND_FOR_DISTRIBUTION

### advantageousSectionReset
- 設定変更: 有利区間RESETを機種固有解析で直接確認。
- 通常の有利区間リセット条件は設定変更、エンディングBONUS終了、1AT中BONUS12回、一撃2400枚以上、AT終了時の区間内差枚が一定以上等。
- 設定変更時を除く有利区間リセット後はフリーズ高確へ移行。設定変更朝一にはこの通常リセット恩恵を自動適用しない。
- 据え置き/純電源OFF→ON時の有利区間の独立直接記述は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_FOR_DIRECT_UNTOUCHED_AND_POWER_CYCLE

### resetBenefits
- AT間天井980G+α→630G+αへ短縮。
- 設定変更台をAT当選まで打ち続けた場合の機械割は「100%OVER」とする必勝本解析。
- CZモード2以上スタート。50%でモード3 or 4。
- ホワイトポイント（穢れ）は約60%で50pt以上、30.1%で70ptスタート。
- AT間天井到達時の50%追加恩恵は短縮天井でも有効。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更固有の公開された冷遇率・明確な不利益は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時を除く有利区間リセット後のフリーズ高確は設定変更朝一には適用されないため、通常区間リセットと朝一リセットを混同しない。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一630G+αを超えてAT非当選なら据え置き推測の強材料。
- CZモード優遇や穢れ初期値は統計的な推測材料だが単独で設定変更確定には使わない。
- 開始ステージは設定変更時に実戦上教室ステージとする資料があるが、電断時側が未確定のため単独判別へ使用しない。
- なな徹はリセット判別を「現在調査中」としている。
- `よう実` / 正式型式 / DAXEL / サミー + 設定変更/朝一/据え置き/電源OFF ON/ガックン等へ検索語を変更して再探索したが、本機固有リールガックン条件・発生率は固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_630G_CLUE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalAtCeiling: 980G+α
resetAtCeiling: 630G+α
resetCzModeDistribution: mode2 50.0% / mode3 25.0% / mode4 25.0%
resetWhitePointDistribution: 0pt 9.8% / 30pt 30.1% / 50pt 30.1% / 70pt 30.1%
resetWhitePoint50Plus: 約60%
resetWhitePoint70: 30.1%
resetPlayUntilAtPayoutClaim: 100%OVER（必勝本編集部調べ。精密値非公開）

## conflicts
- core性能の50枚ベースは33.9Gと約34Gの表記があるが丸め差として扱い、数値競合にはしない。
- Altemaの一部本文に通常AT天井を930G+αとする表記があるが、主要複数解析（必勝本・1geki・なな徹・ちょんぼりすた等）は980G+αで一致。930Gはcanonical不採用、`CONFLICT_SINGLE_SOURCE_930_VS_MULTI_SOURCE_980` として保持。

## missingFields
- 据え置き単独列による各内部値の直接表記: DIRECT_UNTOUCHED_WORDING_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時のプライベートポイント: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON/据え置き時の有利区間独立直接記述: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定変更後の内部状態個別振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- ダイコク電機IR/DAXEL新製品（正式型式）: https://www.daikoku.co.jp/ir/news/post-2796/
- Amusement Japan（DAXEL発表/導入日/サミー協業）: https://www.amusement-japan.co.jp/article/detail/10004747/
- HAZUSE（型式/検定番号/導入日/純増）: https://hazuse.com/machine/pachislot/4S1658/
- ちょんぼりすた（性能コア/天井/朝一/モード/穢れ/有利区間）: https://chonborista.com/slot/daxel-slot/232429/
- 必勝本 天井&設定変更（設定変更/電源OFF ONの比較表）: https://hisshobon.com/machineinfo/86700/
- 必勝本 設定変更時の恩恵（天井/モード/穢れ/100%OVER）: https://hisshobon.com/machineinfo/86681/
- 1geki 天井・朝一: https://1geki.jp/slot/l_youjitsu/3/
- なな徹 朝一・設定変更・有利区間: https://nana-press.com/kaiseki/machine/935/29490/
- なな徹 天井: https://nana-press.com/kaiseki/machine/935/29486/
- 情報島 導入一覧（2025-05-07境界）: https://p-johojima.jp/machine_spec/post-2074/
- HAZUSE 2025年5月導入一覧: https://hazuse.com/new-machine/202505-2/

## confidenceSummary
corePerformance: HIGH
releaseAndModel: HIGH
resetSettingChange: HIGH
resetCarryOver: MEDIUM_HIGH_WITH_DIRECT_UNTOUCHED_WORDING_GAP
resetPowerCycle: HIGH_FOR_GAMES_POINTS_MODE_RANK_STATE / UNVERIFIED_FOR_PRIVATE_POINT_AND_DIRECT_ADVANTAGEOUS_SECTION
numericResetData: HIGH
resetDetection: HIGH_FOR_630G_CLUE / UNVERIFIED_FOR_GAKKUN

## relay2Note
- 2025-05-07群の2/3として追加。
- 次は No.1725候補 `スマスロ 緑ドン VIVA!情熱南米編 REVIVAL`。
