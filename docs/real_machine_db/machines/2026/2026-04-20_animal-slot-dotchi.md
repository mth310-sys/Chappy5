# アニマルスロット ドッチ

recordNo: 1791
machineName: アニマルスロット ドッチ
aliases: アニマルスロットドッチ / アニマルスロットどっち / アニマルどっち
manufacturer: 北電子
manufacturingEntity: ゼクロスクリエイティブ
formalModel: LアニマルスロットドッチZT
inspectionCode: 530564
releaseDate: 2026-04-20
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+ST
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 北電子公式製品一覧で2026年4月製品として掲載。
- 遊技通信/P-WORLD業界ニュースで型式 `LアニマルスロットドッチZT`、ゼクロスクリエイティブ製、2026年4月導入予定を確認。
- 1gekiで導入開始日2026-04-20、型式 `LアニマルスロットドッチZT`、検定番号 `530564` を確認。
confidence: OFFICIAL_FOR_PRODUCT / INDUSTRY_AND_ANALYSIS_HIGH_FOR_MODEL

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.7%
- setting3: 100.4%
- setting4: 103.5%
- setting5: 107.5%
- setting6: 108.2%
initialHitBySetting:
  bb:
  - setting1: 1/329.7
  - setting2: 1/314.7
  - setting3: 1/295.6
  - setting4: 1/274.3
  - setting5: 1/249.1
  - setting6: 1/227.4
  rb:
  - setting1: 1/349.5
  - setting2: 1/342.8
  - setting3: 1/339.4
  - setting4: 1/328.1
  - setting5: 1/321.5
  - setting6: 1/314.3
  bonusCombined:
  - setting1: 1/169.4
  - setting2: 1/163.8
  - setting3: 1/157.8
  - setting4: 1/149.3
  - setting5: 1/140.2
  - setting6: 1/131.9
baseGamesPer50: 約33G/50枚
netIncrease:
- BIG BONUS: 約2.5枚/G
- REGULAR BONUS / JUNGLE BONUS: 約5.5枚/G
basicPayout:
- BIG BONUS: 約100〜300枚（50枚×2〜6セット）
- REGULAR BONUS: 約56〜65枚（媒体の丸め差あり）
- JUNGLE BONUS: 100枚+α / 200枚+α / 300枚+α
- 初回ST「アニマルドリーム」突破期待度約40%、初回突破後ループ率約82%
- MAXアニマループ: 約86%ループ
modeSpecificMinimumData:
- 通常時はリーチ目・レア役から疑似ボーナスを抽選。
- 通常/高確/超高確の内部状態が存在。
- BIG後はCZ「アニマルチャンス」、ST当選後はボーナス高確率状態「アニマルドリーム」へ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE_WITH_LIMITED_POWER_CYCLE_EVIDENCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更後はボーナス間天井が499Gに短縮され、到達時はBIG BONUS当選。
- 有利区間は設定変更時にリセットされることをなな徹で確認。
- 設定変更時の内部状態・開始ステージについて、高優先解析サイトの直接比較表は確認できず、低優先二次資料では内部状態リセット/夕方スタートとの記載があるためcanonical断定は避ける。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_ADVANTAGEOUS_SECTION / ANALYSIS_SINGLE_LOW_PRIORITY_FOR_STATE_STAGE

### carryOverBehavior
- 据え置き時のボーナス間天井ゲーム数は、二次資料で前日の進行を引き継ぐとされる。
- BIG後999G / REG後499Gという前回ボーナス種別依存の天井契約も据え置き時に継続するとされる。
- 内部状態・赤満月関連状態の据え置き引継ぎは低優先二次資料に記載があるが、高優先資料で独立固定できないため `SECONDARY_SUPPORTED`。
confidence: ANALYSIS_SINGLE_FOR_GAME_COUNTER_CARRY / SECONDARY_SUPPORTED_FOR_INTERNAL_STATE

### powerCycleBehavior
- 純電源OFF→ON時は天井ゲーム数・内部状態を引き継ぐとする二次資料を複数確認。
- ただし1geki/なな徹/パチマガ系の機種固有直接比較表で電源OFF→ON契約を固定できなかったため、高優先確定値には昇格しない。
- 純電断時の有利区間そのものの直接文言は `UNVERIFIED_DIRECT_MACHINE_SPECIFIC_WORDING_AFTER_RESEARCH`。
confidence: SECONDARY_SUPPORTED_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_DIRECT_ADVANTAGEOUS_SECTION_WORDING

### gameCounterReset
settingChange: RESET_TO_499G_CEILING
carryOver: CARRY_OVER_SECONDARY_SUPPORTED
powerCycle: CARRY_OVER_SECONDARY_SUPPORTED
notes:
- BIG終了後(ST中含む)の通常天井は999G。
- REG終了後は499G。
- 設定変更後は前回ボーナス種別にかかわらず499Gへ短縮。
- ジャングルボーナス間2500G天井も存在するが、設定変更時の専用扱いは高優先資料で未確認。
confidence: ANALYSIS_HIGH_FOR_RESET_CEILING / ANALYSIS_SINGLE_FOR_CARRY

### ceilingAfterReset
normalCeiling:
- afterBIG_or_ST: 999G
- afterREG: 499G
resetCeiling: 499G
ceilingBenefit: BIG BONUS当選
jungleBonusIntervalCeiling:
- 2500G
- benefit: BIG BONUS + 金チケット3枚 + JUNGLE BONUS当選濃厚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機は通常/高確/超高確の内部状態を持つ。
- 設定変更時の専用モード振り分け・朝一モード振り分け数値は、機種名/型式名と「設定変更」「朝一」「モード振り分け」「高確」「超高確」を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モードの存在も確認できない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_RESET_DISTRIBUTION

### stateAfterReset
- 高優先資料では設定変更時の内部状態再抽選/固定開始状態を直接確認できず `UNVERIFIED_HIGH_PRIORITY`。
- 低優先二次資料では設定変更時RESET、純電源OFF→ONではCARRY_OVERとされるため補助情報として保持。
confidence: SECONDARY_SUPPORTED_ONLY

### advantageousSectionReset
- 設定変更時: RESET（なな徹）。
- なな徹では設定変更時以外の特定差枚到達時などにも有利区間リセットがあるとされ、設定変更時を除くリセット恩恵は調査中。
- 据え置き/純電断時の有利区間直接契約は高優先機種固有資料で固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_FOR_CARRY_AND_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- 設定変更後は天井が499Gへ短縮。BIG後通常天井999Gと比較すると最大500G短縮。
- 天井到達時はBIG BONUS当選。
- 設定変更専用のST突入率優遇、CZ成功率優遇、朝一高確率などの公開数値は確認できない。
confidence: ANALYSIS_HIGH_FOR_CEILING_SHORTENING

### resetPenalties
- 設定変更専用の固定的な主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置きで保持される可能性のある高確/超高確等を消失する可能性は二次資料上示唆されるが、固定ペナルティとして数値化しない。
confidence: ANALYSIS_HIGH_FOR_NO_PUBLIC_FIXED_PENALTY

### resetDetection
- 設定変更後の499G天井短縮は、前回BIG後であれば実戦上の判別材料になりうるが、当日499G到達前には確定判別できない。
- 本機固有のリールガックン条件/発生率、液晶表示、ランプによる設定変更/据え置き確定判別は、検索語・資料系統を変えて再探索後も高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_DIRECT_DETECTION

### numericResetData
resetCeiling: 499G
normalCeilingAfterBIG: 999G
normalCeilingAfterREG: 499G
maximumShorteningVsBIGCeiling: 500G
resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_CEILING_VALUES

## conflicts
- REG獲得枚数は業界発表で約65枚、パチビーでは約56枚。差はAT払出し/実獲得・解析更新時点等の定義差可能性があるため平均せず `CONFLICT_OR_DEFINITION_DIFFERENCE_56_VS_65` として保持。
- 天井、機械割、設定別BB/RB/合算、ベース、純増、導入日、型式、検定番号について重大な競合なし。
- 設定変更時の内部状態/開始ステージ、純電断時の引継ぎは低優先二次資料に直接記載があるが、高優先資料で未固定のためcanonical強度を落としている。

## sources
retrievedAt: 2026-09-15
- 北電子公式製品一覧: https://www1.kitadenshi.co.jp/fun/
- 遊技通信 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/32770/yugitsushin
- グリーンべると新台発表: https://web-greenbelt.jp/post-108944/
- 1geki 機種総合: https://1geki.jp/slot/l_asd/
- 1geki 天井/朝一リセット: https://1geki.jp/slot/l_asd/3/
- なな徹 機種総合/有利区間: https://nana-press.com/kaiseki/machine/1126/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/131/kh01.php
- パチビー 基本情報/攻略: https://www.pachibee.jp/machines/index/226030008 / https://www.pachibee.jp/machines/kouryaku/226030008
- 6確 機種解析: https://www.kaku6.jp/slot/asd/
- スロベース 機種情報/リセット整理: https://slobase.jp/machines/dotchi / https://slobase.jp/articles/dotchi-reset
- スロットソリューション リセット整理: https://slot-solution.site/anislot-dotch/866/

## missingFields
- 設定変更時の内部状態具体振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の開始ステージを高優先資料で直接固定: UNVERIFIED_AFTER_RESEARCH
- 据え置き/純電源OFF→ON時の有利区間直接文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率・確定変更判別: UNVERIFIED_AFTER_RESEARCH
- ジャングルボーナス間2500G天井の設定変更時扱い: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 完全再現用の通常時全状態移行率、全レア役別ボーナス抽選、CZ内部押し順当て詳細、ST中の全抽選は収集対象外。
- 2026-04-20群の2/3として処理。
- resetBehaviorの性能コア完了判定とは分離し、低優先資料依存箇所を明示した。