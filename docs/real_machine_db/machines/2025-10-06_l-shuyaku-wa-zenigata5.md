# L主役は銭形5

recordNo: 1756
machineName: L主役は銭形5
aliases: 主役は銭形5 / スマスロ 主役は銭形5 / L銭形5L2
manufacturer: オリンピア（製造） / 平和（ブランド）
formalModel: L銭形5L2
inspectionCode: 5S0796
releaseDate: 2025-10-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + ST / 規定ゲーム数 + CZ
settings: 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- オリンピア公式2025年発売機種一覧に `L主役は銭形5` を掲載。
- Amusement Japanは平和が2025-08-25に発表、オリンピア製、ホール導入2025-10-06予定と報道。
- HAZUSEは型式 `L銭形5L2`、検定番号 `5S0796`、導入開始日2025-10-06、メーカー=オリンピアを掲載。
- パチビー / 一撃 / P-WORLD / K-Naviも導入日2025-10-06で一致。
confidence: OFFICIAL / INDUSTRY / INDUSTRY_DB / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting2: 97.9%
- setting3: 99.0%
- setting4: 103.2%
- setting5: 107.1%
- setting6: 112.1%
initialHitBySetting:
  bonusInitialHit:
  - setting2: 1/424.5
  - setting3: 1/416.4
  - setting4: 1/388.1
  - setting5: 1/375.9
  - setting6: 1/300.5
baseGamesPer50: 約32.2G/50枚
netIncrease:
- 銭形BONUS / BIG BONUS: 約7.0枚/G
basicPayout:
- 銭形BONUS: 払い出し100〜3000枚、初当り時は基本100枚、ST中は平均313.5枚（設定2）
- BIG BONUS: 払い出し500〜3000枚、平均650枚以上（必勝本の詳細値は平均659.4枚、設定2）
- ST「デカタイム」: 10G+α、トータル成功期待度約59%（設定2）
- 上位ST「超デカタイム」: 10G+α、トータル成功期待度約80%（設定2）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時のボーナス当選契機は規定ゲーム数、捜査ポイント経由CZ「逮捕チャレンジ」、デカ目直撃。
- 通常モードは通常A / 通常B / 通常C / 天国の4種類。
- モード別天井は通常A 1250G+α、通常B 950G+α、通常C 550G+α、天国150G+α。
- 捜査ポイントは液晶999ptから減算し、0pt到達時にCZ抽選。実質0pt到達率1/142.2、CZ当選率約22%（全設定共通）。
- CZ「逮捕チャレンジ」は最大9G、ボーナス期待度約50%。
- 銭形BONUS / BIG BONUSは純増約7.0枚/G。ボーナス後はSTへ移行。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_CEILING_MODE_AND_ADVANTAGEOUS_SECTION_POWER_CYCLE_SECONDARY_TABLE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間をRESET。なな徹が有利区間リセット契機として「設定変更時」を明記。
- 通常最大1250G+αのゲーム数天井は、設定変更後最大850G+αへ短縮。
- 設定変更時は内部ゲーム数をランダム加算するため、実消化では850Gより浅く天井到達する場合がある。
- モード移行抽選は設定変更時（有利区間移行時）に実施され、通常A / B / C / 天国のいずれかを再抽選。
- ちょんぼりすたの朝一比較表では内部状態は設定変更でRESET。
- 液晶ゲーム数表示は朝一 `???`、捜査ポイント表示は999pt、開始ステージは市街地。
- ちょんぼりすたは設定変更時の捜査ポイントにも内部ランダム調整があると掲載。ただし具体範囲・分布は公開高優先資料で固定できないため数値化しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE_ADVANTAGEOUS_SECTION / ANALYSIS_SINGLE_SECONDARY_FOR_INTERNAL_STATE_AND_POINT_RANDOMIZATION

### carryOverBehavior
- 据え置き時は前日の天井進行を内部的に引き継ぐとする朝一解析を確認。
- 捜査ポイントも表示上は999ptへ戻る一方、据え置き時は内部的な進行を引き継ぐとする二次解析あり。
- 据え置き時の通常A/B/C/天国モードを個別に「引継ぎ」と明記する高優先機種固有資料は今回固定できず `UNVERIFIED_DIRECT_MODE_CARRYOVER_WORDING_AFTER_RESEARCH`。
- 有利区間は設定変更時にRESETされる一方、有利区間ランプでは設定変更/据え置きを判別できない。純据え置きの区間継続は機種固有資料の直接文言を優先して扱い、一般仕様から自動補完しない。
confidence: ANALYSIS_SINGLE_TO_MULTI_SECONDARY_FOR_CEILING_AND_POINT / PARTIAL_FOR_DIRECT_MODE_WORDING

### powerCycleBehavior
- ちょんぼりすたの機種別朝一比較表では、電源OFF→ONのみの場合は天井・内部状態を引き継ぐ。
- 電源OFF→ONでも液晶ゲーム数表示は `???`、捜査ポイント表示999pt、開始ステージ市街地となるため、外見は設定変更時と共通する。
- 純電断時の通常A/B/C/天国モード、有利区間、CZ先読み契約を個別に列挙した高優先直接表は固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_MACHINE_SPECIFIC_POWER_CYCLE_TABLE / PARTIAL_FOR_MODE_AND_ADVANTAGEOUS_SECTION

### gameCounterReset
settingChange:
- gameCountCeiling: RESET_AND_SHORTEN_TO_MAX_850G_PLUS_ALPHA
- hiddenGameCount: RANDOM_ADD
- displayGameCount: `???`
carryOver:
- ceilingProgress: CARRY_OVER_SECONDARY_MACHINE_SPECIFIC
powerCycle:
- ceilingProgress: CARRY_OVER_MACHINE_SPECIFIC_TABLE
- displayGameCount: `???`
confidence: ANALYSIS_HIGH_FOR_RESET_CEILING / ANALYSIS_SINGLE_TO_MULTI_FOR_CARRYOVER_AND_POWER_CYCLE

### ceilingAfterReset
normalMaximumCeiling: 1250G+α
normalModeCeilings:
- normalA: 1250G+α
- normalB: 950G+α
- normalC: 550G+α
- heaven: 150G+α
resetMaximumCeiling: 850G+α
resetHiddenGameCount: RANDOM_ADD_PUBLIC_RANGE_NOT_FOUND
normalADeepCeilingBenefit:
- 1250G到達時: ボーナス + 約50%で不二子デカタイム
- 設定変更時は最大850G+αのため、通常A1250G到達恩恵を朝一リセット恩恵として扱わない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時（有利区間移行時）に通常A / 通常B / 通常C / 天国を再抽選。
- 詳細な設定変更時モード振り分けは、なな徹が「調査中」とし、高設定ほど上位モード選択率優遇まで公開。
- 検索語・資料系統を変えて再探索しても設定2〜6の朝一4モード完全振り分け表は固定できず `PUBLIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESELECTION / PUBLIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH

### stateAfterReset
settingChange: RESET_SECONDARY_MACHINE_SPECIFIC_TABLE
powerCycle: CARRY_OVER_SECONDARY_MACHINE_SPECIFIC_TABLE
carryOver: CARRY_OVER_EXPECTATION_SUPPORTED_BY_POWER_CYCLE_TABLE_BUT_DIRECT_FULL_ITEM_TABLE_NOT_FIXED
- 内部状態の具体的な設定変更時振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_MACHINE_SPECIFIC_TABLE

### advantageousSectionReset
settingChange: RESET
carryOver: DIRECT_MACHINE_SPECIFIC_WORDING_NOT_FIXED
powerCycle: DIRECT_MACHINE_SPECIFIC_WORDING_NOT_FIXED
- なな徹は有利区間リセットタイミングに設定変更時とエンディング終了後を明記。
- 設定変更以外の有利区間リセット後は700枚以上払い出しのBIG BONUS当選だが、資料は明確に「設定変更時を除く」としているため朝一設定変更恩恵へ混入しない。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_DIRECT_WORDING_FOR_CARRYOVER_AND_POWER_CYCLE

### resetBenefits
- ゲーム数天井: 通常最大1250G+α → 設定変更後最大850G+α。
- 内部ゲーム数ランダム加算により、実消化天井はさらに浅くなる場合あり。
- モードを設定変更時に再抽選。
- 二次解析では捜査ポイントにも朝一内部ランダム調整あり。
- 0Gからのリセット期待値は資料ごとに前提差があるため、性能コアには採用しない。なな徹独自シミュレーターは等価0G -1,009円、200G +349円としており、外部実戦推定「0Gプラス」と競合するため期待値自体をcanonical化しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_RANDOM_GAME_ADD / CONFLICT_FOR_EXPECTED_VALUE_ESTIMATES

### resetPenalties
- 設定変更により前日の天井進行・内部状態等の据え置き価値は失われる。
- 通常A1250G到達時の「約50%で不二子デカタイム」深天井恩恵は、設定変更後最大850G+α契約では到達しないため朝一リセット恩恵には含めない。
- 設定変更固有の追加的な数値的不利抽選は、再探索後 `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_STRUCTURE / NONE_CONFIRMED_FOR_EXTRA_PENALTY

### resetDetection
- 朝一の実消化が850G+αを超えてもボーナス非当選なら、設定変更後最大天井契約と矛盾するため据え置き推測の強材料。
- 設定変更でも電源OFF→ONでも、液晶G数 `???` / 捜査pt 999 / 市街地開始となるため、これら外見だけでは変更判別不可。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 本機固有のリールガックン条件・発生率を `L主役は銭形5 / L銭形5L2 / 銭形5 + ガックン / リール / 朝一 / 設定変更 / 据え置き` で再探索したが高信頼な機種固有値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_850G_CONTRACT_AND_LAMP / ANALYSIS_SINGLE_FOR_VISUAL_POWER_CYCLE_TABLE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 1250G+α
resetMaximumCeiling: 850G+α
resetInternalGameCount: RANDOM_ADD_RANGE_UNPUBLISHED
normalModeCeilings:
- normalA: 1250G+α
- normalB: 950G+α
- normalC: 550G+α
- heaven: 150G+α
resetModeDistribution: PUBLIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH
resetInternalStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetPointRandomizationRange: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 最大天井: 850G+α
- 表示捜査ポイント: 999pt
- 内部ゲーム数: ランダム加算あり（範囲非公開）

## conflicts
- 重大な性能コアCONFLICTは確認せず。設定2〜6の初当り・出玉率、約32.2G/50枚、純増約7.0枚/Gは複数解析で一致。
- HAZUSEのベース欄は「設定1 約32.2G」と表記する一方、同ページの設定テーブルおよび一撃等は本機を設定2〜6の5段階設定としている。設定1は存在しないため、ベース値約32.2Gのみ採用し「設定1」ラベルは `CONFLICT_LIKELY_TEMPLATE_LABEL_ERROR` として隔離。
- 朝一0G期待値は、なな徹の条件付きシミュレーターが等価 -1,009円である一方、外部実戦推定には0Gプラスとする資料がある。算出条件差が大きいため平均せず `CONFLICT_EXPECTED_VALUE_ASSUMPTIONS` とし、物差し性能コアには不採用。
- 有利区間リセット後700枚以上BIGは「設定変更時を除く」と明記されており、通常営業中ツラヌキ恩恵と朝一リセット恩恵を分離。

## sourceSearchNotes
- 再探索語: `L主役は銭形5`, `主役は銭形5`, `スマスロ 銭形5`, `L銭形5L2`, `5S0796`, `設定変更`, `リセット`, `朝一`, `据え置き`, `電源OFF ON`, `天井`, `850G`, `モード`, `内部状態`, `捜査ポイント`, `ガックン`, `有利区間`。
- 資料系統: メーカー公式、業界ニュース、HAZUSE、必勝本、なな徹、一撃、P-WORLD、パチビー、K-Navi、ちょんぼりすた、後発解析。
- 設定変更時モード完全振り分け、内部状態具体振り分け、ガックン、純電断時モード/有利区間の直接契約は十分な再探索後も高優先資料で固定できず、推測せずUNVERIFIEDを維持。

## sources
- https://www.olympia.co.jp/official/products/2025.html
  - official 2025 product list / retrieved 2026-09-15
- https://www.amusement-japan.co.jp/article/detail/10004969/
  - industry announcement / retrieved 2026-09-15
- https://hazuse.com/machine/pachislot/5S0796/
  - formal model / inspection / core / ceiling / retrieved 2026-09-15
- https://hisshobon.com/machines/l%E4%B8%BB%E5%BD%B9%E3%81%AF%E9%8A%AD%E5%BD%A25/
  - machine hub / core analysis / retrieved 2026-09-15
- https://hisshobon.com/machineinfo/87984/
  - modes / reset ceiling / retrieved 2026-09-15
- https://hisshobon.com/machineinfo/87953/
  - setting-change benefit / hidden game random addition / retrieved 2026-09-15
- https://nana-press.com/kaiseki/machine/1033/
  - core / ceiling / mode / retrieved 2026-09-15
- https://nana-press.com/kaiseki/machine/1033/32244/
  - reset benefit / reset EV / retrieved 2026-09-15
- https://nana-press.com/kaiseki/machine/1033/32245/
  - advantageous-section reset / lamp / retrieved 2026-09-15
- https://nana-press.com/kaiseki/machine/1033/32247/
  - mode reselection / distribution maturity / retrieved 2026-09-15
- https://1geki.jp/slot/l_zenigata5/39/
  - core / setting structure / retrieved 2026-09-15
- https://1geki.jp/slot/l_zenigata5/3/
  - ceiling / reset / retrieved 2026-09-15
- https://chonborista.com/slot/orinpia-slot/243420/
  - setting-change vs power-cycle table / retrieved 2026-09-15
- https://www.p-world.co.jp/machine/database/10339
  - ceiling / core cross-check / retrieved 2026-09-15
- https://www.pachibee.jp/machines/index/225090001
  - core cross-check / retrieved 2026-09-15

missingFields:
- settingChangeModeDistributionFullTable: PUBLIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH
- settingChangeInternalStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetPointRandomizationRange: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- machineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleModeContract: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- purePowerCycleAdvantageousSectionContract: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
