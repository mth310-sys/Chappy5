# スマスロ バベル

recordNo: 1757
machineName: スマスロ バベル
aliases: Lバベル / バベル / L／バベル／BA / L/バベル/BA
manufacturer: ユニバーサルブロス
formalModel: L／バベル／BA
inspectionCode: 4S0446
releaseDate: 2025-10-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス連チャン / 規定ゲーム数 + レア役
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ユニバーサルエンターテインメント公式製品ページはメーカー=ユニバーサルブロス、分類=6号機（スマスロ）、発売=2025年10月と掲載。
- 遊技通信はユニバーサルエンターテインメント発表として型式名 `L／バベル／BA`、ユニバーサルブロス製と報道。
- 情報島の東京都公安委員会検定情報はユニバーサルブロス `L／バベル／BA`、検定番号 `4S0446` を掲載。
- HAZUSEは型式 `L／バベル／BA`、検定番号 `4S0446`、導入開始日2025-10-06、メーカー=ユニバーサルブロスを掲載。
confidence: OFFICIAL / INDUSTRY / INDUSTRY_DB / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.4%
- setting2: 99.1%
- setting3: 101.6%
- setting4: 104.8%
- setting5: 107.5%
- setting6: 110.0%
initialHitBySetting:
  firstBonus:
  - setting1: 1/538.3
  - setting2: 1/527.5
  - setting3: 1/510.8
  - setting4: 1/499.0
  - setting5: 1/481.2
  - setting6: 1/467.6
  bonusOverall:
  - setting1: 1/218.7
  - setting2: 1/208.8
  - setting3: 1/196.5
  - setting4: 1/180.6
  - setting5: 1/168.5
  - setting6: 1/158.5
  bigBonus:
  - setting1: 1/328.2
  - setting2: 1/316.4
  - setting3: 1/301.6
  - setting4: 1/283.0
  - setting5: 1/267.1
  - setting6: 1/254.0
  regularBonus:
  - setting1: 1/655.6
  - setting2: 1/613.7
  - setting3: 1/564.3
  - setting4: 1/499.5
  - setting5: 1/456.6
  - setting6: 1/421.3
baseGamesPer50: 約31.9G/50枚
netIncrease:
- 擬似ボーナス: 約6.0枚/G
basicPayout:
- BIG BONUS: ベルナビ50回+α、約420枚
- REGULAR BONUS: ベルナビ15回、約125枚
- BABELOOP: 超天国/神天国系の高継続ボーナスループ、MAX約91%、移行時期待値約2800枚（公式/業界紹介値）
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 初当たりボーナスはBIG確定。通常時は規定ゲーム数到達またはレア役で初当たりを抽選。
- 通常モードは通常A / 通常B / 天国準備 / リセット。ボーナス連モードは天国 / 超天国 / 神天国 / 保証。
- 通常A/Bの最大規定G数は1280G。設定変更時に選ばれる天国準備/リセットは最大900G。天国以上/保証は144G以内。
- サソリは1/128.0（全設定共通）。ボーナス間10回成立でボーナス濃厚。
- BB約420枚、RB約125枚。天国以上では144G以内のボーナスが濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_CEILING_MODE_DISTRIBUTION_ADVANTAGEOUS_SECTION_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をRESETし、最大1280Gから最大900Gへ短縮。
- モードを再抽選。設定変更時の振り分けは全設定共通で天国準備31.6%、リセット65.2%、天国2.3%、超天国0.4%、神天国0.4%。
- ちょんぼりすた機種別朝一表では内部状態は設定変更でRESET。
- なな徹は設定変更時に有利区間RESET、ゲーム数RESET、モードRESET、サソリ回数RESETを明記。
- 必勝本では設定変更後は実戦上、昼ステージ開始。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の朝一比較では据え置き時に天井、ゲーム数、モード、サソリ回数、有利区間を引き継ぐ。
- 据え置き時の内部状態について、純据え置き専用の独立表現は高優先資料で固定できないため、電源OFF→ON比較表から自動転記しない。
confidence: ANALYSIS_HIGH_FOR_LISTED_ITEMS / UNVERIFIED_DIRECT_STATE_WORDING

### powerCycleBehavior
- 必勝本の機種別比較表では電源OFF→ONのみの場合、天井までのゲーム数とモードを引き継ぐ。
- ちょんぼりすたでは電源OFF→ON時に天井・内部状態を引き継ぐ。
- サブ液晶のサソリ回数表示は電源OFF→ONで見た目上リセットされる。内部サソリ回数の純電断時挙動を直接明記した高優先資料は、表記・型式・据え置き/電源OFF ON検索を変えても固定できず `UNVERIFIED_DIRECT_INTERNAL_SCORPION_POWER_CYCLE_AFTER_RESEARCH`。
- 純電断時の有利区間を独立条件で明記した機種固有高優先資料は固定できず `UNVERIFIED_DIRECT_ADVANTAGEOUS_SECTION_POWER_CYCLE_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE_STATE / PARTIAL_FOR_SCORPION_INTERNAL_AND_ADVANTAGEOUS_SECTION

### gameCounterReset
settingChange:
- gameCountCeiling: RESET_AND_SHORTEN_TO_MAX_900G
- gameCount: RESET
carryOver:
- gameCountCeiling: CARRY_OVER
- gameCount: CARRY_OVER
powerCycle:
- gameCountCeiling: CARRY_OVER
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalMaximumCeiling: 1280G
resetMaximumCeiling: 900G
secondaryCeiling:
- scorpionCount: ボーナス間最大10回成立でボーナス
- settingChangeScorpionCount: RESET
- carryOverScorpionCount: CARRY_OVER
- powerCycleDisplayScorpionCount: LOOKS_RESET
confidence: ANALYSIS_HIGH

### modeAfterReset
settingChange: RESELECT
resetModeDistribution:
- heavenPreparation: 31.6%
- reset: 65.2%
- heaven: 2.3%
- superHeaven: 0.4%
- godHeaven: 0.4%
notes:
- 全設定共通。
- 天国準備/リセットは最大900G。天国/超天国/神天国は144G以内。
powerCycle: CARRY_OVER
carryOver: CARRY_OVER
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

### stateAfterReset
settingChange: RESET
powerCycle: CARRY_OVER
carryOver: DIRECT_MACHINE_SPECIFIC_STATE_WORDING_NOT_FIXED
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / UNVERIFIED_DIRECT_FOR_CARRYOVER

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: DIRECT_MACHINE_SPECIFIC_WORDING_NOT_FIXED
- なな徹は有利区間リセット契機として設定変更時を明記。
- 設定変更を除く有利区間リセット後の恩恵は調査中とされているため、未公開恩恵を朝一設定変更恩恵へ混入しない。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_DIRECT_FOR_POWER_CYCLE

### resetBenefits
- 通常最大1280G → 設定変更後最大900Gへ天井短縮。
- 設定変更時は天国準備31.6%、天国2.3%、超天国0.4%、神天国0.4%を選択し、合計34.7%が天国準備以上。リセットモードは65.2%。丸めにより合計99.9%。
- 天国準備選択時はボーナス後に天国以上へ移行。
- 設定変更時に天国以上を直接選択した場合は144G以内のボーナスが濃厚。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

### resetPenalties
- 設定変更により前日のゲーム数/天井進行、モード、サソリ回数、有利区間の据え置き価値は失われる。
- 設定変更固有の追加的な数値的不利要素は検索語・資料系統変更後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_STRUCTURE / NONE_CONFIRMED_FOR_EXTRA_PENALTY

### resetDetection
- 設定変更後は最大900G契約のため、朝一900Gを超えてボーナス非当選なら据え置き推測の強材料。
- 必勝本では設定変更時は実戦上昼ステージ開始。ただし純電源OFF→ON時の開始ステージは調査中のため、昼ステージ単独を確定判別材料にはしない。
- 電源OFF→ONではサブ液晶のサソリ回数が見た目上リセットされるため、表示だけで内部リセットと断定しない。
- なな徹は現時点で確実なリセット判別方法は判明していないとし、有利区間ランプ判別も不可。
- `スマスロ バベル / Lバベル / L／バベル／BA / ユニバーサルブロス + ガックン / リール / 朝一 / 設定変更 / 据え置き` で再探索したが、本機固有ガックン条件/発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_900G_CONTRACT_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 1280G
resetMaximumCeiling: 900G
resetModeDistribution:
- heavenPreparation: 31.6%
- reset: 65.2%
- heaven: 2.3%
- superHeaven: 0.4%
- godHeaven: 0.4%
resetModeHeavenPreparationOrHigherTotal: 34.7%（公表値単純合算、丸めあり）
resetScorpionCount: RESET
carryOverScorpionCount: CARRY_OVER
powerCycleScorpionDisplay: LOOKS_RESET
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 最大天井: 900G
- 天国準備: 31.6%
- リセット: 65.2%
- 天国: 2.3%
- 超天国: 0.4%
- 神天国: 0.4%

## conflicts
- 出玉率は、ちょんぼりすた・一撃・パチナビ等で `97.4 / 99.1 / 101.6 / 104.8 / 107.5 / 110.0%` が一致するためcanonicalとした。
- 業界向けG-net販売概要のみ設定2〜4を `98.3 / 99.1 / 101.6%` と掲載し、設定5/6は107.5/110.0%。設定番号の転記ずれを疑えるが推測修正せず `CONFLICT_GNET_PAYOUT_SETTING2_TO4` として原値を保持し、平均化しない。
- REG設定5は複数資料で `1/456.6`、一撃では `1/456.5`。丸め/転記差として `CONFLICT_MINOR_REG_SETTING5_456.6_VS_456.5` を保持し、複数一致の1/456.6をcanonicalとした。
- resetModeDistributionは公表丸め値の合計が99.9%となる。再正規化せず原値を保持。

## sources
retrievedAt: 2026-09-15
- https://www.universal-777.com/product/slot/babel/ — ユニバーサルエンターテインメント公式製品ページ; メーカー、分類、発売月、BABELOOP/BB概要 (OFFICIAL)
- https://news.p-world.co.jp/articles/31383/yugitsushin — 遊技通信; 型式、製造、BB約420枚/RB約125枚、システム概要 (INDUSTRY)
- https://p-johojima.jp/new_machine/post-11024/ — 情報島/東京都公安委員会検定情報; 型式・検定番号 (INDUSTRY_DB)
- https://hazuse.com/machine/pachislot/4S0446/ — HAZUSE; 型式・検定番号・導入日・メーカー (INDUSTRY_DB)
- https://chonborista.com/slot/universal-slot/241412/ — ちょんぼりすた; 設定別性能、31.9G/50枚、純増、天井、朝一設定変更/電断、モード (ANALYSIS_HIGH)
- https://1geki.jp/slot/l_babel/39/ — 一撃; 設定別初当り・BB/RB/合算・出玉率、ベース、純増 (ANALYSIS_HIGH)
- https://hisshobon.com/machineinfo/87811/ — 必勝本; 天井、設定変更/電源OFF ON、サソリ表示、モード、開始ステージ (ANALYSIS_HIGH)
- https://hisshobon.com/machineinfo/87801/ — 必勝本; 設定変更時モード振り分け31.6/65.2/2.3/0.4/0.4% (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1027/32140/ — なな徹; 設定変更/据え置き比較、有利区間・ゲーム数・モード・サソリ回数、判別 (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1027/32141/ — なな徹; 有利区間リセット契機、ランプ判別不可 (ANALYSIS_HIGH)
- https://www.pachibee.jp/machines/lecture/225090002 — パチビー; 導入日、システム、純増等 (INDUSTRY_DB)
- https://g-net-ps.com/info/s0229/ — G-net; 導入日、型式、ベース、純増、販売向けスペック。出玉率の一部競合を原値保持 (INDUSTRY / CONFLICT)

## missingFields
- 純電源OFF→ON時の内部サソリ回数を直接明記した高優先資料: UNVERIFIED_AFTER_RESEARCH（表示は見た目上RESETまで確認）
- 純電源OFF→ON時の有利区間を独立条件で明記した機種固有高優先資料: UNVERIFIED_AFTER_RESEARCH
- 据え置き時内部状態の独立直接文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## boundaryNote
- 2025-10-06同日群は `スマスロ 新鬼武者3`（No.1755）、`L主役は銭形5`（No.1756）、`スマスロ バベル`（No.1757）の3機。
- 情報島の過去新台一覧、ALL7月間一覧、当時新台考察、および各機種導入日を再照合し、パチスロの同日全国導入known canonicalは3機で一致。
- PB・別型式・地域先行・延期/段階導入を検索した範囲で、2025-10-06へ追加すべき別パチスロ機種は確認できず、境界を `CLOSED_3_OF_3` とする。
