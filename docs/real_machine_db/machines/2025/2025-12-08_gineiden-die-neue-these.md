# 銀河英雄伝説 Die Neue These

recordNo: 1766
machineName: 銀河英雄伝説 Die Neue These
aliases: スマスロ銀河英雄伝説 / スマスロ 銀河英雄伝説 Die Neue These / LノイエギンエイデンGH
manufacturer: グレードワン製造 / コナミアミューズメント
formalModel: LノイエギンエイデンGH
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2025-12-08
generation: 6.5号機 / スマスロ
systemType: AT / ST×擬似ボーナス / CZ / ゲーム数モード
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- コナミアミューズメント公式は製造元グレードワン、2025-12-08稼働開始を明記。
- 1gekiで型式 `LノイエギンエイデンGH`、2025-12-08導入を確認。
- 必勝本、パチビー、複数解析資料でも2025-12-08導入が一致。
- 1gekiには検定番号欄として `530420、0710-192` が掲載されるが、本DBで通常使用する5S系検定番号との定義が一致するか固定できないため inspectionCode へは転記せず `UNVERIFIED_AFTER_RESEARCH`。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.2%
- setting4: 105.6%
- setting5: 108.4%
- setting6: 111.0%
initialHitBySetting:
  bonusInitial:
  - setting1: 1/256.8
  - setting2: 1/253.6
  - setting3: 1/249.0
  - setting4: 1/217.8
  - setting5: 1/200.4
  - setting6: 1/191.9
  stInitial:
  - setting1: 1/393.7
  - setting2: 1/388.5
  - setting3: 1/372.8
  - setting4: 1/306.2
  - setting5: 1/274.2
  - setting6: 1/259.9
baseGamesPer50: 約35.0G/50枚
netIncrease: 約5.0枚/G
basicPayout:
- イゼルローンボーナス: ベルナビ10回
- ガイエスブルクボーナス: ベルナビ10回
- オープニングボーナス: ベルナビ15回
- エピソードボーナス: ベルナビ15回
- GALAXY BONUS: GSCで決定した払出枚数+α
modeSpecificMinimumData:
- ST「銀河英雄伝説 DIE NEUE THESE」は25G+α継続。
- ST初当り時の索敵ZONEは3Gでツラヌキ条件150〜2450枚を決定。
- 通常時はモードA/B/C/D/チャンスの5モードでボーナス規定ゲーム数を管理。
- 通常ゲーム数天井最大1000G+α、GSC間天井最大2000G、英雄ポイント最大500ptでCZ。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_CARRY_OVER_POWER_CYCLE_MODE_CEILING_AND_ADVANTAGEOUS_SECTION_DATA
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間RESET、天井・ゲーム数・英雄ポイント・内部状態・モードをRESET/再抽選。
- ST間最大天井は通常1000G+αから最大800G+αへ短縮。
- 内部ゲーム数と英雄ポイントは設定変更時にランダム加算される。
- 有利区間移行時の成立役に応じてモードを再抽選し、モードAを否定してB以上。
- 必勝本の直接比較表では天井までのゲーム数RESET、英雄ポイントは表示???かつ内部ランダム加算、モード再抽選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の設定変更/据え置き比較では、据え置き時は有利区間・天井・ゲーム数・ポイント・内部状態・モードを引き継ぐ。
- 液晶表示上は朝一0G/英雄ポイント???となるため、表示だけで設定変更と据え置きを確定判別するのは困難。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### powerCycleBehavior
- 必勝本の設定変更 vs 電源OFF/ON直接比較では、純電源OFF→ON時は天井までのゲーム数、英雄ポイント、モード、銀河ポイントを引き継ぐ。
- 液晶ゲーム数は0G表示。
- ステージは資料上「現在調査中」。
- 純電断時の有利区間そのものを独立比較した高優先直接文言は固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_POWER_CYCLE_WORDING

### gameCounterReset
settingChange: RESET_WITH_RANDOM_INTERNAL_ADD
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 設定変更時は内部ゲーム数がランダム加算されるため、液晶0Gからの実消化だけでは内部進行を完全には把握できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 1000G+α
resetGameCeiling: 最大800G+α
normalGscCeiling: 最大2000G
heroPointCeiling: 最大500pt
ceilingBenefit:
- ST間ゲーム数天井: オープニングボーナス濃厚 = ST突入濃厚
- GSC間天井: エピソードボーナス
- 英雄ポイント天井: CZ
reductionGames: 最大200G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時の有利区間移行時はモードB以上濃厚。
- 成立役別の公開モード振り分けをなな徹・回胴に散る・複数二次解析で照合。
resetModeDistributionByRole:
  other:
  - modeB: 10%
  - modeC: 40%
  - modeD: 50%
  weakChanceMe:
  - modeB: 0%
  - modeC: 40%
  - modeD: 60%
  strongChanceMe:
  - modeB: 0%
  - modeC: 20%
  - modeD: 80%
  galaxyMe:
  - modeD: 100%
modeCeilings:
- modeA: 1000G+α
- modeB: 800G+α
- modeC: 600G+α
- modeD: 400G+α
- chance: 100G+α
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- なな徹比較では設定変更時は内部状態RESET、据え置き時は引継ぎ。
- 純電源OFF→ON時の個別「内部状態」欄は必勝本比較表に独立項目がないが、天井/ポイント/モード/銀河ポイントは引継ぎを直接確認。
- 設定変更時の内部状態具体振り分け率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CARRY_OVER / UNVERIFIED_FOR_NUMERIC_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更時は有利区間RESET。
- 据え置き時は有利区間引継ぎ。
- ST中のツラヌキ条件達成時にも有利区間RESET。
- ツラヌキ達成による有利区間リセット後は上位ST「邂逅」へ突入するが、なな徹はこの恩恵を「設定変更時を除く」と明示しているため朝一恩恵へ混入しない。
- 純電源OFF→ON時の有利区間そのものの高優先直接文言は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- ST間最大天井1000G+α → 最大800G+αへ短縮。
- 設定変更時は内部ゲーム数と英雄ポイントをランダム加算。
- モードB以上確定級で、通常役でもモードC以上90%、モードD50%。
- 弱チャンス目ならC40% / D60%、強チャンス目ならC20% / D80%、ギャラクシー目ならD100%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行・ゲーム数・英雄ポイント・内部状態・モードの持越し価値は設定変更で失われる。
- ツラヌキ条件達成時の有利区間リセット後に付与される上位ST直行恩恵は設定変更時には適用されない。
- その他の設定変更固有冷遇率/不利率は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一から800G+αを明確に超えてST間天井が発動しない場合は据え置き濃厚材料。
- 液晶ゲーム数は設定変更・電源OFF/ONとも0G表示、英雄ポイントは???表示のため表示のみでは判別困難。
- 内部ゲーム数と英雄ポイントにランダム加算があるため、浅い当選だけで変更確定とはしない。
- `銀河英雄伝説 Die Neue These / スマスロ銀河英雄伝説 / LノイエギンエイデンGH / グレードワン / コナミ + ガックン / リールガックン / 朝一 / 設定変更 / 据え置き / 電源OFF ON` で検索語と資料系統を変えて再探索したが、本機固有ガックン条件・発生率を高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_DISPLAY / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 1000G+α
resetGameCeiling: 最大800G+α
resetGameCeilingReduction: 最大200G
heroPointCeiling: 最大500pt
resetModeDistributionByRole:
- other: B10% / C40% / D50%
- weakChanceMe: C40% / D60%
- strongChanceMe: C20% / D80%
- galaxyMe: D100%
publicMorningNumericValues:
- なな徹独自シミュレーター・設定1・リセット0G: 等価期待値 -548円 / 5.6枚交換 -1536円
- 同条件0G: 天井到達率13.07% / 実質初当り1/342 / 平均投資9778円
- 150G開始: 等価期待値+136円
- 300G開始: 等価期待値+1136円
notes:
- 上記期待値は独自シミュレーター値であり、性能コアとは分離。GSC天井・モード等を考慮しない算出条件。
confidence: ANALYSIS_HIGH_FOR_RESET_TABLE / ANALYSIS_SINGLE_FOR_SIMULATION_VALUES

## conflicts
- 基本スペック（設定別ボーナス/ST初当り・機械割、35G/50枚、純増約5枚/G）は必勝本・1geki・複数解析で一致し重大CONFLICTなし。
- 検定番号について1geki掲載の `530420、0710-192` は本DBの既存5S系 inspectionCode と定義整合を固定できないため、値を混ぜず inspectionCode はUNVERIFIEDとした。
- 低優先二次資料に「設定変更時もGSC間天井を引き継ぐ」旨がある一方、別資料では有利区間移行時にGSC間天井を決定するとされる。高優先の必勝本直接比較表はGSC間ゲーム数を独立項目として扱わないため、設定変更時GSC間天井の前日進行持越し可否は `CONFLICT_UNRESOLVED_AFTER_RESEARCH` として平均・断定しない。

## sources
retrievedAt: 2026-09-15
- コナミアミューズメント公式: https://www.konami.com/amusement/psm/slot/gineidenDNT/00_top.html
- コナミアミューズメント販売発表(PR TIMES): https://prtimes.jp/main/html/rd/p/000000466.000053327.html
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/88178/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/88163/
- パチビー 機種情報: https://www.pachibee.jp/machines/index/225110000
- パチビー 攻略情報: https://www.pachibee.jp/machines/kouryaku/225110000
- 1geki 機種解析: https://1geki.jp/slot/l_gineidendnt/
- 1geki 天井/朝一: https://1geki.jp/slot/l_gineidendnt/3/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/1051/33534/
- なな徹 天井: https://nana-press.com/kaiseki/machine/1051/33531/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1051/33539/
- 回胴に散る。設定変更後モード: https://kaidou.repop.jp/archives/8676
- 回胴に散る。GSC間天井: https://kaidou.repop.jp/archives/8602
- kaku6: https://www.kaku6.jp/slot/gineidendnt/
- パチナビ 天井/朝一: https://pachinavi.net/machines/smasloth-ginga-eiyuu-densetsu/tenjo/

## missingFields
- inspectionCode（本DBで用いる検定番号定義）: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間そのものの高優先直接文言: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定変更時の内部状態具体振り分け率: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時GSC間天井の前日進行持越し可否: CONFLICT_UNRESOLVED_AFTER_RESEARCH

## boundaryContext
- 2025-12-08群は `プリズムナナ / 銀河英雄伝説 Die Neue These / スマスロ 化物語` の3機が既存handoffでcanonical確認済み。
- 本レコードはその2/3。境界はOPENのまま。
