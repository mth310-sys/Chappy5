# スマスロ 甲鉄城のカバネリ 海門決戦

recordNo: 1782
machineName: スマスロ 甲鉄城のカバネリ 海門決戦
aliases: スマスロ 甲鉄城のカバネリ 海門（うなと）決戦 / カバネリ2 / カバネリ海門決戦 / L甲鉄城のカバネリ 海門決戦
manufacturer: タイヨーエレック製 / サミー
formalModel: L 甲鉄城のカバネリ 海門決戦 XX
inspectionCode: 5S1358
releaseDate: 2026-03-02
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+ST
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- サミー公式マイスロで2026-03-02をホール導入日として確認。
- HAZUSE・1gekiで型式 `L 甲鉄城のカバネリ 海門決戦 XX`、検定番号 `5S1358`、導入開始日2026-03-02を確認。
- グリーンべるとおよびG-netでタイヨーエレック製、サミーブランド/発表機として確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.5%
- setting3: 100.8%
- setting4: 106.0%
- setting5: 111.0%
- setting6: 114.9%
initialHitBySetting:
  bonus:
  - setting1: 1/254.2
  - setting2: 1/242.3
  - setting3: 1/239.6
  - setting4: 1/214.0
  - setting5: 1/203.2
  - setting6: 1/195.1
  st:
  - setting1: 1/422.5
  - setting2: 1/405.9
  - setting3: 1/398.7
  - setting4: 1/357.2
  - setting5: 1/332.6
  - setting6: 1/318.5
baseGamesPer50: 約31.4G/50枚
netIncrease:
- 疑似ボーナス/ST: 約6.0枚/G
basicPayout:
- 駿城ボーナス: 20G、ST期待度約20%
- EPISODE BONUS: 払い出し150枚、消化後ST突入濃厚
- カバネリBONUS: 払い出し200枚以上
- ST「KABANERI OF THE IRON FORTRESS」: 25G+α、継続率約76%
- プレミアムST「裏景之ST」: 25G+α、期待獲得枚数約3600枚
modeSpecificMinimumData:
- 通常時はカバネポイント周期抽選と無名/生駒/銅藍CZからボーナスを目指す。
- 通常天井は最大6周期または996G+α。到達時はEPISODE BONUS=ST突入濃厚。
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_CARRYOVER_AND_POWER_CYCLE_INFORMATION
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間・天井ゲーム数・天井周期数・内部状態をRESET/再抽選。
- 無名・生駒・カバネポイントは再抽選。
- ナビ高確は非ナビ高確へ、(超)カバネリ高確は非(超)カバネリ高確へ戻る。
- 黒煙りポイントも再抽選。有利区間開始時に黒煙りポイント初期値抽選があり、MAXスタートの可能性もある。
- 必勝本実戦上、設定変更後は操車場ステージ開始。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE / MULTI_SOURCE_SUPPORT

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態を引き継ぐ。
- 天井までのゲーム数/周期数、各ポイント、高確状態、黒煙りポイントも内部進行を保持する扱い。
- 朝一の見た目のみで設定変更/据え置きを確定する方法は確認できない。
confidence: ANALYSIS_HIGH / DIRECT_SETTING_CHANGE_VS_CARRYOVER_TABLE

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数・周期数を引き継ぐ。
- 無名/生駒/カバネポイント、ナビ高確、(超)カバネリ高確、黒煙りポイントも引き継ぐ。
- 電源OFF→ON時の開始ステージは必勝本で現在調査中。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_COMPARISON_TABLE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 通常時は最大996G+α。
- 設定変更時は596Gに短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling:
- gameCeiling: 996G+α
- cycleCeiling: 最大6周期
resetCeiling:
- gameCeiling: 596G+α
- cycleCeiling: 最大4周期
benefit:
- EPISODE BONUS当選、消化後ST突入濃厚
resetShortening: 996G_TO_596G_AND_6_CYCLES_TO_4_CYCLES
notes:
- ST駆け抜け後・景之ST終了後も同じ596G/最大4周期短縮が適用されるため、設定変更専用条件と混同しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH / INDUSTRY_SUPPORT

### modeAfterReset
- 独立した「朝一専用モード」の名称や設定変更専用モード振り分けは、表記揺れ・型式・メーカー・シリーズ名で再探索しても高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一方、無名・生駒・カバネポイントは設定変更で再抽選、純電断では引継ぎが直接確認できる。
confidence: ANALYSIS_HIGH_FOR_POINT_RESELECTION / UNVERIFIED_FOR_RESET_ONLY_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態をRESET。
- ナビ高確は非ナビ高確へ、(超)カバネリ高確は非(超)カバネリ高確へ戻る。
- 据え置き/純電断では内部状態・高確状態を引き継ぐ。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_OR_INTERNAL_PROGRESS_CARRY_OVER
notes:
- なな徹の機種固有朝一比較で設定変更は有利区間RESET、据え置きは引継ぎを直接確認。
- 必勝本では純電断時に天井・各ポイント・各高確・黒煙りポイントを引継ぐことを直接確認。
- 純電断時の「有利区間」そのものを独立語句で明記した高優先機種固有資料は固定できず、一般則のみでは補完しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE_ADVANTAGEOUS_SECTION_WORDING

### resetBenefits
- ゲーム数天井が996G+α→596G+αへ短縮。
- 周期天井が最大6周期→最大4周期へ短縮。
- 天井短縮時は次回ST当選までの機械割が設定1でも100%以上と解析される。
- なな徹公開期待値ではリセット0G打ち出しの等価交換期待値+1000円（同サイト前提条件）。
- 黒煙りポイントは再抽選され、有利区間開始時にMAXスタートの可能性あり。
confidence: ANALYSIS_HIGH / DIRECT_PUBLIC_NUMERIC_DATA

### resetPenalties
- 前日の天井進行、周期進行、各CZ/カバネポイント、高確状態、黒煙りポイントを設定変更で失う。
- 設定変更固有の追加数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一596G+αを超えてボーナス非当選、または4周期を超えてEPISODE BONUS非当選なら設定変更否定の強い材料。
- なな徹では朝一ステージは調査中、見た目で設定変更/据え置き判別は難しいとしている。必勝本では設定変更時の開始ステージを実戦上「操車場」としているため、ステージ単独の確定判別には使用しない。
- 本機固有ガックンについて低優先二次資料に「頼れない」とする記述はあるが、型式名・タイヨーエレック・サミー・設定変更/据え置き等へ検索語を変えた再探索で高優先機種固有の条件/発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_DETECTION / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
normalGameCeiling: 996G+α
resetGameCeiling: 596G+α
normalCycleCeiling: 最大6周期
resetCycleCeiling: 最大4周期
resetNextStPayoutRateSetting1: 100%以上
reset0GExpectedValueEqualExchange: +1000円（なな徹掲載条件）
blackSmokePointInitialAtAdvantageousSectionStart: 再抽選、MAXスタート可能性あり（確率非公開/未固定）
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_DATA

## conflicts
- メーカー表記は解析DBで `Sammy`、1gekiで `TAIYO ELEC` と表記が分かれるが、グリーンべるとおよびG-netが「タイヨーエレック製」、サミー公式がサミー新機種として扱うため、製造元とブランド/発表元の定義差として `タイヨーエレック製 / サミー` に正規化。数値競合ではない。
- ベースは約31G/50枚と約31.4G/50枚の表記差がある。G-net・HAZUSE等の丸め値と主要解析の精密値の差と判断し、canonicalは約31.4G/50枚、約31Gを丸め値として保持。
- 設定変更時開始ステージは必勝本が「実戦上、操車場」、なな徹が「現在調査中」。確定仕様とはせず `OBSERVED_VS_UNDER_RESEARCH` として保持。

## sources
retrievedAt: 2026-09-15
- サミー公式マイスロ: https://www.sammy.co.jp/japanese/myslot/news/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1358/
- 1geki 基本ページ: https://1geki.jp/slot/l_kabaneri2/
- 1geki 天井: https://1geki.jp/slot/l_kabaneri2/3/
- パチビー: https://www.pachibee.jp/machines/index/226020000
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89070/
- 必勝本 通常時: https://hisshobon.com/machineinfo/89073/
- 必勝本 黒煙りポイント: https://hisshobon.com/machineinfo/89067/
- 必勝本 ST: https://hisshobon.com/machineinfo/89078/
- 必勝本 裏景之ST: https://hisshobon.com/machineinfo/89083/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1097/35407/
- なな徹 天井: https://nana-press.com/kaiseki/machine/1097/35403/
- なな徹 機種まとめ: https://nana-press.com/kaiseki/machine/1097/
- G-net: https://g-net-ps.com/info/s0250/
- グリーンべると: https://web-greenbelt.jp/post-106904/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/248689/
- パチマガスロマガ系解析（黒煙り/有利区間補助）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/224/kr04.php

## missingFields
- 設定変更専用モードの名称/振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電断時の有利区間そのものを独立語句で明記した高優先資料: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
