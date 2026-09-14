# Lパチスロ 革命機ヴァルヴレイヴ2

recordNo: 1760
machineName: Lパチスロ 革命機ヴァルヴレイヴ2
aliases: スマスロ 革命機ヴァルヴレイヴ2 / ヴァルヴレイヴ2 / ヴヴヴ2 / L革命機ヴァルヴレイヴ2jF
manufacturer: SANKYO（三共） / 製造: ジェイビー
formalModel: L革命機ヴァルヴレイヴ2jF
inspectionCode: 5S0736
releaseDate: 2025-11-04
generation: 6.5号機 / スマスロ
systemType: AT / CZ / 疑似ボーナス / 周期管理
settings: 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- SANKYO公式オンライン博物館は導入年月2025.11、ブランドSANKYO、AT純増約9.0枚/Gを掲載。
- SANKYOプレスリリースは2025-11-04から全国ホール導入開始と明記。
- 1gekiは型式 `L革命機ヴァルヴレイヴ2jF`、検定番号 `5S0736`、導入開始日2025-11-04を掲載。
- 業界/流通系資料でも製造ジェイビー、検定番号5S0736、2025-11-04導入が一致。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 99.3%
- setting4: 104.7%
- setting5: 110.8%
- setting6: 114.9%
initialHitBySetting:
  cz:
  - setting1: 1/324
  - setting2: 1/324
  - setting4: 1/324
  - setting5: 1/324
  - setting6: 1/324
  firstHitCombined:
  - setting1: 1/476
  - setting2: 1/473
  - setting4: 1/464
  - setting5: 1/459
  - setting6: 1/456
  note: 初当り合算は革命BONUS・決戦BONUS・革命RUSH直撃・超革命RUSH直撃の合算。
baseGamesPer50: 約32.7G/50枚
netIncrease:
- 革命RUSH: 約9.0枚/G
- 超革命RUSH: 約9.0枚/G
basicPayout:
- 革命BONUS: 45G+α、純増約9.0枚/G、平均獲得約460枚、AT期待度約53%
- 決戦BONUS: 最低9G+αの自力型、AT期待度約46%
- 革命RUSH: 1セット10G〜100G以上、継続期待度約75%（通常転落時の引き戻し込み）
- 超革命RUSH: 1セット10G〜100G以上、最大継続率約90%（通常転落時の引き戻し込み）
confidence: OFFICIAL_FOR_NET_INCREASE / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲームポイントを獲得し、規定ポイント到達でCZ抽選。1周期最大600pt、1周期目は200pt以内の周期到達が濃厚。
- 通常モードはA/B/C/天国の4種類。通常時の周期天井は最大6周期、天国は1周期。
- CZ「ドルシア攻防戦」はボーナス当選期待度約60%。
- 通常のBONUS/RUSH間救済は1500G、CZ間救済は999G。BONUS/RUSH間1500G到達時は革命RUSH・革命BONUS・決戦BONUSが1:1:1。
- 上位AT「超革命RUSH」は純増約9.0枚/G、最大継続率約90%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_OFFICIAL_RESET_CEILING_AND_FIRST_CYCLE_BEHAVIOR
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間をリセットする機種別解析が確認されている。
- BONUS/RUSH間救済は通常1500Gから1000Gへ短縮。これはSANKYO公式開発資料で直接確認。
- 周期天井は通常最大6周期から最大3周期へ短縮。
- 周期ポイントはリセットされ、設定変更後1周期目は100ptまたは200ptで周期到達濃厚。SANKYO公式開発資料によると、設定変更後1周期目だけは定点ptからズレたタイミングで前兆開始する場合がある。
- モードは再抽選。公開解析では設定変更後のモード振り分けは通常A約69% / 通常B約25% / 通常C約5% / 天国約1%。
confidence: OFFICIAL_FOR_1000G_AND_FIRST_CYCLE_SPECIAL_BEHAVIOR / ANALYSIS_HIGH_FOR_CYCLE_AND_MODE_DISTRIBUTION

### carryOverBehavior
- 据え置き時は有利区間、BONUS/RUSH間ゲーム数、内部状態、モード、周期/ポイント系を引き継ぐ扱いとする機種別解析が確認されている。
- 液晶上のゲーム数・周期ポイント表示は朝一に初期表示となり得るため、表示だけで据え置き/変更を確定できない。
confidence: ANALYSIS_HIGH_TO_SINGLE_MACHINE_SPECIFIC

### powerCycleBehavior
- 電源OFF→ONのみでは天井・内部状態を引き継ぐとする機種別解析が複数確認される。
- 据え置きと同様、内部のゲーム数/モード/ポイント進行は継続側として扱う。液晶表示の見た目だけでの変更判別は困難。
- 純電断時の有利区間を設定変更と対比して公式が直接列挙した資料は固定できないため、一般仕様から追加推測はしない。
confidence: ANALYSIS_HIGH_TO_MULTI_SOURCE_FOR_CARRY_OVER / UNVERIFIED_OFFICIAL_DIRECT_WORDING_FOR_ADVANTAGEOUS_SECTION_POWER_CYCLE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- BONUS/RUSH間ゲーム数は設定変更でリセットし、1000G救済へ再スタート。
- 周期数・周期ポイントも設定変更でリセット。
confidence: OFFICIAL_FOR_RESET_1000G / ANALYSIS_HIGH_FOR_CARRY_OVER

### ceilingAfterReset
normalBonusRushCeiling: 1500G
resetBonusRushCeiling: 1000G
normalCzCeiling: 999G
resetCzCeiling: PUBLIC_RESET_SHORTENING_NOT_CONFIRMED
normalCycleCeiling: 最大6周期
resetCycleCeiling: 最大3周期
bonusRushCeilingBenefit: 革命RUSH / 革命BONUS / 決戦BONUS = 1:1:1
confidence: OFFICIAL_FOR_1500_TO_1000_AND_BENEFIT / ANALYSIS_HIGH_FOR_3_CYCLES

### modeAfterReset
- 設定変更時はモードを再抽選。
- 設定変更後モード振り分け: 通常A 約69% / 通常B 約25% / 通常C 約5% / 天国 約1%。通常B以上合算約31%。
- 設定変更後は周期天井最大3周期となるため、通常時の通常A最大6周期とは別の朝一短縮契約を持つ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_MODE_STRUCTURE

### stateAfterReset
- 機種別比較資料では設定変更時に内部状態をリセット、電源OFF→ON時は引き継ぐとされる。
- 設定変更時の具体的な高確/通常など状態振り分け数値は、検索語・型式・メーカー・シリーズ名を変えて再探索したが公開値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_POWER_CYCLE / UNVERIFIED_FOR_NUMERIC_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET。なな徹の朝一比較表で設定変更時リセット・据え置き時引継ぎを確認。
- 据え置き時: CARRY_OVER。
- 通常遊技中の有利区間リセットタイミングはエンディング後等が候補とされるが、公開解析には実戦予想表記が残るため、設定変更以外の詳細切断条件を本レコードの確定値にはしない。
- 純電源OFF→ON時の有利区間を公式が機種固有に直接明記した資料は再探索後も固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- BONUS/RUSH間天井: 1500G → 1000Gへ500G短縮。
- 周期天井: 最大6周期 → 最大3周期へ短縮。
- 設定変更後1周期目: 100ptまたは200ptで周期到達濃厚。
- モード: 通常B以上約31%（通常B約25% + 通常C約5% + 天国約1%）。
confidence: OFFICIAL_FOR_GAME_CEILING / ANALYSIS_HIGH_FOR_CYCLE_AND_MODE

### resetPenalties
- 設定変更で前日の天井進行、周期/ポイント、モード等を消去するため、前日ハマリ・良モード持越しを狙う価値は失われる。
- 設定変更固有の数値的ペナルティ（冷遇率等）として公開確定できる値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: STRUCTURAL / NONE_CONFIRMED_FOR_NUMERIC_PENALTY

### resetDetection
- 200pt以内にCZ前兆の煽り/前兆が発生しない場合は据え置き濃厚とする解析がある。
- ただしSANKYO公式は、設定変更後1周期目では定点ptからズレて前兆が始まる可能性があると明記。定点からズレた前兆だけを根拠に「据え置き」と判定してはいけない。
- 液晶上のゲーム数/周期ポイント表示は朝一にリセット表示されるため、見た目単独での判別は困難。
- `ヴァルヴレイヴ2 / ヴヴヴ2 / L革命機ヴァルヴレイヴ2jF / SANKYO + ガックン / リール / 朝一 / 設定変更 / 据え置き` で再探索したが、本機固有のリールガックン条件/発生率を高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_FOR_POINT_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalBonusRushCeiling: 1500G
resetBonusRushCeiling: 1000G
normalCzCeiling: 999G
normalCycleCeiling: 6 cycles
resetCycleCeiling: 3 cycles
firstCycleResetPoint: 100pt_or_200pt_CONCENTRATED_OR_CONFIRMED_BY_ANALYSIS
resetModeDistribution:
- normalA: 約69%
- normalB: 約25%
- normalC: 約5%
- heaven: 約1%
- normalBOrHigher: 約31%
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 天井500G短縮（1500G→1000G）
- 周期天井最大3周期（通常最大6周期）
- 設定変更後モードB以上約31%
- 1周期目は100ptまたは200ptで周期到達濃厚

## conflicts
- 初当り1/476→1/456、機械割97.7→114.9、CZ 1/324、ベース約32.7G/50枚、純増約9.0枚/Gは1geki・なな徹・ちょんぼりすた等で一致し、重大な性能CONFLICTなし。
- 1gekiの2026-02-12更新ページでは設定変更時ゲーム数天井が「調査中」と残る一方、SANKYO公式開発資料は2025-12-03時点で設定変更後1000Gへの短縮を明記している。これは同時点の競合値ではなく、解析ページの未更新/情報反映差と判断し、公式1000Gをcanonicalとする。
- 有利区間の通常時切断条件は一部解析が「実戦上の予想」を含むため、設定変更時RESET以外は予想を確定値へ昇格しない。

## sources
retrievedAt: 2026-09-15
- https://www.sankyo-fever.jp/collection/987/ — SANKYO公式オンライン博物館; 2025.11導入、純増約9.0枚/G、機種概要 (OFFICIAL)
- https://prtimes.jp/main/html/rd/p/000000027.000029418.html — SANKYOプレスリリース; 2025-11-04全国導入開始 (OFFICIAL_PRESS_RELEASE)
- https://www.secret-story.sankyo-fever.jp/article/ssp_11 — SANKYO開発こぼれ話「救済機能」; 通常1500G/CZ999G、設定変更後1000G、1500G到達恩恵1:1:1 (OFFICIAL_DEVELOPER)
- https://www.secret-story.sankyo-fever.jp/article/ssp-secret_121 — SANKYO開発こぼれ話「設定変更後の挙動」; 朝一1周期目の前兆開始ptズレ (OFFICIAL_DEVELOPER)
- https://www.secret-story.sankyo-fever.jp/article/ssp-secret_10 — SANKYO開発こぼれ話「通常時のモード」; モードA/B/C/天国と各最大周期 (OFFICIAL_DEVELOPER)
- https://1geki.jp/slot/l_valvrave2/ — 1geki; 型式、検定番号、設定別初当り/機械割、周期構造、AT仕様 (ANALYSIS_HIGH)
- https://1geki.jp/slot/l_valvrave2/3/ — 1geki; 天井、周期天井、設定変更時3周期短縮 (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1040/31856/ — なな徹; 初当り、機械割、CZ、ベース (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1040/32809/ — なな徹; 朝一比較、有利区間、200pt判別、表示挙動 (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1040/32813/ — なな徹; 設定変更後モード振り分け69/25/5/1% (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1040/ — なな徹; 革命BONUS平均約460枚、AT/上位AT基本性能 (ANALYSIS_HIGH)
- https://chonborista.com/slot/sankyo-slot/243853/ — ちょんぼりすた; スペック、天井、設定変更/電源OFF ON補助照合 (ANALYSIS_HIGH)
- https://jugglersnet.com/chumoku/valvrave2/valvrave2 — ジャグラーズネット; 設定変更時1000G、最大3周期、電源OFF→ON時天井/内部状態引継ぎ、判別補助 (ANALYSIS_SINGLE)
- https://www.kaku6.jp/slot/valvrave2/ — 6確; 据え置き/電断時引継ぎ、朝一判別の補助照合 (ANALYSIS_SINGLE)
- https://noa51562.shop1.makeshop.jp/view/item/000000000088 — 流通資料; 製造ジェイビー、型式、検定番号、導入日 (INDUSTRY_RETAIL_DB)

## missingFields
- 設定変更時の具体的な内部状態（通常/高確等）振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間について公式の機種固有直接記述: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
