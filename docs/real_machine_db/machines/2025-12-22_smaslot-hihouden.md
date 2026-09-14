# スマスロ 秘宝伝

recordNo: 1768
machineName: スマスロ 秘宝伝
aliases: L秘宝伝 / Lスマスロ秘宝伝 / L／スマスロ秘宝伝／PA7
manufacturer: パオン・ディーピー / 大都技研
formalModel: L／スマスロ秘宝伝／PA7
inspectionCode: 5S0926
releaseDate: 2025-12-22
generation: 6.5号機 / スマスロ
systemType: AT / リアルボーナス高確率 / 擬似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- パオン・ディーピー発表の業界記事で型式 `L／スマスロ秘宝伝／PA7`、2025年12月下旬導入予定を確認。
- HAZUSEで型式 `L／スマスロ秘宝伝／PA7`、検定番号 `5S0926`、2025-12-22導入、メーカー=パオン・ディーピーを照合。
- パチビー・なな徹・情報島でも2025-12-22導入を照合。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 99.0%
- setting3: 101.5%
- setting4: 105.1%
- setting5: 110.1%
- setting6: 114.7%
initialHitBySetting:
  bonusInitial:
  - setting1: 1/292.5
  - setting2: 1/271.4
  - setting3: 1/283.6
  - setting4: 1/257.5
  - setting5: 1/264.0
  - setting6: 1/246.0
baseGamesPer50: 約32G/50枚
netIncrease:
- BONUS: 約5.0枚/G
basicPayout:
- BIG BONUS シングルライン: 約200枚
- BIG BONUS ダブルライン: 約300枚
- REGULAR BONUS: 約70枚
modeSpecificMinimumData:
- 高確率は最大11G、ボーナス期待度約60%。
- 高確率中のチャンス目合算は約1/15.5。
- 伝説モード中の高確率当選率は全設定共通約1/12.8。
- 伝説STロングは約80%ループ、期待枚数約3000枚。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_CEILING_AND_LEGEND_MODE_DATA
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井までのゲーム数をRESETし、設定変更後は最大499G+αへ短縮。
- 必勝本の設定変更/電源OFF→ON直接比較では伝説モードをRESET。
- オタカラ導ポイントの設定変更時挙動は必勝本でも「現在調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は二次解析でRESETとされるが、高優先の直接比較表に独立欄がないため `SECONDARY_SUPPORTED_RESET` として分離。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_LEGEND_MODE / SECONDARY_FOR_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 据え置きでは前日ゲーム数を引き継ぐ旨を複数二次解析で確認。
- 伝説モード・オタカラ導ポイントを含む据え置き専用の高優先直接比較表は固定できず、純電源OFF→ONの直接比較結果をそのまま据え置き契約へ同一視しない。
- 有利区間・内部状態・伝説モード・オタカラ導ポイントの据え置き機種固有挙動は `SECONDARY_SUPPORTED_CARRY_OVER` / `UNVERIFIED_DIRECT_TABLE_AFTER_RESEARCH` として管理。
confidence: ANALYSIS_SECONDARY_FOR_CARRY_OVER / UNVERIFIED_FOR_DIRECT_STAY_TABLE

### powerCycleBehavior
- 必勝本の直接比較では純電源OFF→ON時、天井までのゲーム数を引き継ぐ。
- 伝説モードを引き継ぐ。
- オタカラ導ポイントを引き継ぐ。
- 有利区間そのものの電断時契約は高優先直接比較欄を固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON_FOR_GAMECOUNT_LEGEND_MODE_POINT

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER_SECONDARY_SUPPORTED
powerCycle: CARRY_OVER
notes:
- 高確率中は2枚掛け遊技のため、ホールの3枚遊技=1G表示型データカウンターでは実ゲーム数と表示G数がずれる可能性がある。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / SECONDARY_FOR_STAY

### ceilingAfterReset
normalGameCeilingAfterBB: 799G+α
normalGameCeilingAfterRB: 649G+α
resetGameCeiling: 499G+α
ceilingBenefit: ボーナス当選
reductionFromBBNormalMax: 300G
reductionFromRBAfterMax: 150G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 伝説モードは設定変更時RESET、純電源OFF→ON時CARRY_OVERを必勝本の直接比較で固定。
- 設定変更直後の伝説モード開始振り分け、ショート/ロング具体率は再探索後も `PUBLIC_RESET_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### stateAfterReset
- 本機固有の「内部状態」独立欄について、設定変更/据え置き/純電源OFF→ONを三者比較する高優先資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 伝説モードは独立項目として上記 modeAfterReset に保存し、一般的な内部状態と混同しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 設定変更時の有利区間RESET、据え置き/電源OFF→ON時の引継ぎは二次解析で一致するが、高優先の機種固有直接比較表では独立欄を固定できなかった。
- canonicalは `SECONDARY_SUPPORTED_SETTING_CHANGE_RESET_AND_STAY_CARRY_OVER` とし、一般論のみでHIGHへ格上げしない。
confidence: ANALYSIS_SECONDARY

### resetBenefits
- ゲーム数天井が最大799G+α（BB後）/649G+α（RB後）に対し、設定変更後は499G+αへ短縮。
- なな徹独自期待値では設定1・リセット台は等価交換で200G開始+775円、250G開始+1434円、300G開始+2205円。
confidence: ANALYSIS_HIGH_FOR_CEILING / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE_SIMULATION

### resetPenalties
- 前日の天井進行・伝説モード等の持越し価値は設定変更で失われる可能性がある（天井G・伝説モードは直接確認）。
- 設定変更固有の冷遇率・不利率は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAMECOUNT_AND_LEGEND_MODE / NONE_CONFIRMED_FOR_OTHER_PENALTY

### resetDetection
- 朝一499G+αを超えてボーナス非当選なら据え置き期待材料。ただしデータカウンターと実ゲーム数のズレを考慮する。
- BB終了画面の「ベカン子との遭遇」は1gekiで設定変更濃厚示唆として掲載されるが、朝一即時判別ではなくBB後に確認できる事後示唆。
- `スマスロ 秘宝伝 / Lスマスロ秘宝伝 / PA7 + ガックン / リールガックン / 設定変更 / 据え置き / 電源OFF ON` で再探索したが、本機固有ガックン条件・発生率は高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_DETECTION / ANALYSIS_HIGH_FOR_BB_END_SCREEN / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeilingAfterBB: 799G+α
normalGameCeilingAfterRB: 649G+α
resetGameCeiling: 499G+α
resetCeilingReductionFromBB: 300G
resetCeilingReductionFromRB: 150G
publicMorningNumericValues:
- なな徹独自シミュレーター・設定1・リセット0G: 等価期待値 -1032円 / 5.6枚交換 -1766円
- 50G開始: 等価 -681円 / 5.6枚交換 -1415円
- 100G開始: 等価 -270円 / 5.6枚交換 -1004円
- 150G開始: 等価 +212円 / 5.6枚交換 -522円
- 200G開始: 等価 +775円 / 5.6枚交換 +41円
- 250G開始: 等価 +1434円 / 5.6枚交換 +700円
- 300G開始: 等価 +2205円 / 5.6枚交換 +1471円
- 350G開始: 等価 +3108円 / 5.6枚交換 +2374円
- 400G開始: 等価 +4165円 / 5.6枚交換 +3431円
- 450G開始: 等価 +5402円 / 5.6枚交換 +4668円
notes:
- 上記期待値はなな徹独自シミュレーター値で、メーカー公表性能とは分離。
confidence: ANALYSIS_HIGH_FOR_CEILING_NUMBERS / ANALYSIS_SINGLE_FOR_SIMULATION_VALUES

## conflicts
- 設定別ボーナス初当り、機械割、約32G/50枚、純増約5.0枚/Gはなな徹・1geki・HAZUSE・複数解析で一致し重大CONFLICTなし。
- 有利区間・内部状態の設定変更/据え置き挙動は一部二次解析が明示するが、必勝本の高優先直接比較では独立欄がないため、直接確認済みの天井G・伝説モード・オタカラ導ポイントと分離して信頼度を落とした。
- オタカラ導ポイントは純電源OFF→ON=CARRY_OVERを直接確認できる一方、設定変更時は必勝本が「現在調査中」のためRESETと断定しない。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時のオタカラ導ポイント: UNVERIFIED_AFTER_RESEARCH
- 内部状態の設定変更/据え置き/電断三者直接比較: UNVERIFIED_AFTER_RESEARCH
- 有利区間の機種固有高優先直接比較: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定変更時の伝説モード開始振り分け: PUBLIC_RESET_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-15
- P-WORLD/遊技通信（パオン・ディーピー発表）: https://news.p-world.co.jp/articles/32279/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/5S0926/
- パチビー: https://www.pachibee.jp/machines/index/225110004
- なな徹・機種概要/性能: https://nana-press.com/kaiseki/machine/1074/
- なな徹・初当り/機械割: https://nana-press.com/kaiseki/machine/1074/33252/
- なな徹・天井: https://nana-press.com/kaiseki/machine/1074/33800/
- なな徹・朝一リセット期待値: https://nana-press.com/kaiseki/machine/1074/33804/
- パチ&スロ必勝本・天井&設定変更: https://p.hisshobon.jp/machine/4655/1/112613
- 1geki・機種概要: https://1geki.jp/slot/l_hihouden/
- 1geki・天井/朝一: https://1geki.jp/slot/l_hihouden/3/
- 1geki・設定判別: https://1geki.jp/slot/l_hihouden/0/
- 情報島: https://p-johojima.jp/machine_spec/post-19998/
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/paondp/064457.php

## boundaryAudit
- 2025-12-22群はLATEST_HANDOFFの既監査で `スマスロ 秘宝伝 / L 無職転生 ～異世界行ったら本気だす～ / L不二子BT / スマスロ 沖ドキ！DUO アンコール` の4機をcanonical候補として確定済み。
- 本レコード追加で2025-12-22群は OPEN 1/4。
- 4機処理後にPB/別型式/地域先行/延期/段階導入を再監査してCLOSED判定する。

## nextResumeCandidate
- No.1769 candidate: L 無職転生 ～異世界行ったら本気だす～ — 2025-12-22
