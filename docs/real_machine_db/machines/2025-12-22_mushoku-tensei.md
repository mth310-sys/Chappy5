# L 無職転生 ～異世界行ったら本気だす～

recordNo: 1769
machineName: L 無職転生 ～異世界行ったら本気だす～
aliases: L無職転生 / スマスロ無職転生 / L無職転生～異世界行ったら本気だす～NM
manufacturer: ニューギン / フィールズ
formalModel: L無職転生～異世界行ったら本気だす～NM
inspectionCode: 5S1064
releaseDate: 2025-12-22
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス / セット継続型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信/P-WORLDでニューギン製、型式 `L無職転生～異世界行ったら本気だす～NM`、2025年12月下旬導入予定を確認。
- グリーンべると/遊技日本で同型式の検定通過を確認。
- 1geki/HAZUSEで検定番号 `5S1064`、2025-12-22導入を照合。
- ニューギン公式機種サイトの存在も確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 99.1%
- setting3: 100.9%
- setting4: 105.4%
- setting5: 109.5%
- setting6: 113.7%
initialHitBySetting:
  cz:
  - setting1: 1/130
  - setting2: 1/129
  - setting3: 1/128
  - setting4: 1/127
  - setting5: 1/127
  - setting6: 1/125
  bonus:
  - setting1: 1/170
  - setting2: 1/168
  - setting3: 1/166
  - setting4: 1/161
  - setting5: 1/156
  - setting6: 1/147
  at:
  - setting1: 1/416
  - setting2: 1/406
  - setting3: 1/394
  - setting4: 1/361
  - setting5: 1/327
  - setting6: 1/292
baseGamesPer50: 約33G/50枚
netIncrease:
- 通常AT「異世界行ったら本気だす」: 約2.8枚/G
- 上位AT: 約4.5枚/G
basicPayout:
- 無職転生ボーナス: 約70枚
- エピソードボーナス: 約70枚
- 魔術ボーナス: 約50枚
- 本気ボーナス: 約50枚
- 通常AT: 1セット30G
modeSpecificMinimumData:
- 通常時の天井はゲーム数ではなくステージチェンジ回数管理。
- 1ステージ平均滞在は約53G。
- 通常ボーナス間天井は最大19回、AT間天井は最大40回。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_TABLE_AND_PUBLIC_MORNING_VALUES
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- ステージチェンジ回数をRESET。
- ボーナス間天井は最大19回→13回へ短縮。
- AT間天井は最大40回→17回へ短縮。
- ちょんぼりすたの設定変更 vs 電源OFF→ON比較では内部状態もRESET。
- なな徹は設定変更時の有利区間RESETを明示。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の朝一比較では据え置き時、有利区間・天井・ゲーム数・ステージチェンジ回数を内部的にCARRY_OVER。
- 液晶見た目だけからリセット/据え置きを判別するのは困難とされる。
- 据え置き専用の内部状態三者比較は高優先資料で独立固定できないため、純電断結果をそのまま同一視しない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_CEILING_GAMECOUNT_STAGECHANGE / UNVERIFIED_FOR_STAY_INTERNAL_STATE_DIRECT_TABLE

### powerCycleBehavior
- パチ&スロ必勝本の直接比較で、純電源OFF→ON時はステージチェンジ回数を引き継ぐ。
- ちょんぼりすたの直接比較で、天井と内部状態を引き継ぐ。
- 電源OFF→ON時の開始ステージは調査中。
- 有利区間そのものの純電断独立欄は高優先直接比較で固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON_FOR_CEILING_STAGECHANGE_INTERNAL_STATE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 天井管理はステージチェンジ回数。液晶メニューで累計回数を確認可能。
- 据え置きでも朝一の見た目だけでは内部引継ぎを見抜きにくい。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalBonusCeiling: ステージチェンジ最大19回
resetBonusCeiling: ステージチェンジ最大13回
normalATCeiling: ステージチェンジ最大40回
resetATCeiling: ステージチェンジ最大17回
bonusCeilingBenefit: ボーナス当選
atCeilingBenefit: エピソードボーナス当選（AT濃厚）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等の独立モード振り分けとして比較可能な「設定変更時専用モード振り分け」は再探索後も `PUBLIC_RESET_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- ステージチェンジ回数が朝一挙動の主要管理軸であるため、存在不明のモードを推測補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_RESET_MODE_DISTRIBUTION

### stateAfterReset
- ちょんぼりすたの設定変更/電源OFF→ON直接比較で内部状態は `設定変更=RESET / 電源OFF→ON=CARRY_OVER`。
- 据え置き専用の内部状態直接比較表は固定できず `UNVERIFIED_DIRECT_STAY_STATE_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / UNVERIFIED_FOR_DIRECT_STAY_STATE

### advantageousSectionReset
- なな徹で設定変更時は有利区間RESET、据え置き時はCARRY_OVERを確認。
- 有利区間リセット後は上位CZ「ターニングポイント2」へ移行するが、**設定変更時はこの恩恵の対象外**と明記される。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 純電源OFF→ON時の有利区間独立契約は高優先資料で固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_STAY / UNVERIFIED_FOR_DIRECT_POWER_CYCLE_WORDING

### resetBenefits
- ボーナス間天井が19回→13回へ短縮。
- AT間天井が40回→17回へ大幅短縮。
- なな徹独自シミュレーターでは設定1・リセット台のボーナス天井期待値は等価交換で300G開始からプラス域、5.6枚交換で450G開始からプラス域。
confidence: ANALYSIS_HIGH_FOR_CEILING / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE_SIMULATION

### resetPenalties
- 前日のステージチェンジ天井進行および内部状態の持越し価値は設定変更で失われる。
- 通常の有利区間リセット時に発生する上位CZ「ターニングポイント2」恩恵は設定変更時を除外するため、朝一設定変更恩恵として扱わない。
- その他の設定変更固有冷遇率・不利率は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CONFIRMED_ITEMS / NONE_CONFIRMED_FOR_OTHER_PENALTY

### resetDetection
- 設定変更後の短縮上限であるボーナス間13回、AT間17回を超えて該当天井が発動しなければ据え置き濃厚材料。
- なな徹では据え置きでも液晶上の見た目からリセット/据え置きを見抜くのは困難とされる。
- 有利区間ランプによる判別不可。
- `L無職転生 / スマスロ無職転生 / L無職転生～異世界行ったら本気だす～NM / ニューギン + ガックン / リールガックン / 設定変更 / 据え置き / 電源OFF ON` で再探索したが、本機固有ガックン条件・発生率は高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalBonusCeilingStageChanges: 19
resetBonusCeilingStageChanges: 13
normalATCeilingStageChanges: 40
resetATCeilingStageChanges: 17
averageGamesPerStageChange: 約53G
publicMorningNumericValues:
- なな徹独自シミュレーター・設定1・リセット0G: 等価 -362円 / 5.6枚交換 -868円
- 50G開始: 等価 -333円 / 5.6枚交換 -839円
- 100G開始: 等価 -295円 / 5.6枚交換 -800円
- 150G開始: 等価 -243円 / 5.6枚交換 -749円
- 200G開始: 等価 -173円 / 5.6枚交換 -679円
- 250G開始: 等価 -80円 / 5.6枚交換 -586円
- 300G開始: 等価 +45円 / 5.6枚交換 -461円
- 350G開始: 等価 +213円 / 5.6枚交換 -293円
- 400G開始: 等価 +439円 / 5.6枚交換 -67円
- 450G開始: 等価 +741円 / 5.6枚交換 +235円
- 500G開始: 等価 +1147円 / 5.6枚交換 +641円
- 550G開始: 等価 +1692円 / 5.6枚交換 +1186円
- 600G開始: 等価 +2423円 / 5.6枚交換 +1917円
- 650G開始: 等価 +3404円 / 5.6枚交換 +2898円
notes:
- 上記期待値はなな徹独自シミュレーター値でメーカー公表性能ではない。
- 同シミュレーターは天井をG数換算700Gとして算出しており、実機のステージチェンジ回数管理そのものとは分離して扱う。
confidence: ANALYSIS_HIGH_FOR_RESET_CEILING_NUMBERS / ANALYSIS_SINGLE_FOR_SIMULATION_VALUES

## conflicts
- 主要性能値（設定別CZ/ボーナス/AT、出玉率、約33G/50枚、純増2.8/4.5枚/G）は1geki・パチマガスロマガ・K-Navi等で重大CONFLICTなし。
- P-WORLD/遊技通信の初期紹介文には上位側を「約4.0枚/G」とする記載がある一方、導入時解析各社は約4.5枚/Gで一致。導入後解析値4.5枚/Gをcanonicalとし、初期業界記事の4.0表記は `CONFLICT_EARLY_PRELAUNCH_DESCRIPTION` として保持。
- メーカー欄はニューギン製、フィールズ流通/発表の資料が混在するため `ニューギン / フィールズ` と役割差を保持。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時専用モード振り分け: PUBLIC_RESET_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH
- 据え置き時の内部状態独立直接比較: UNVERIFIED_DIRECT_STAY_STATE_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間独立直接記載: UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH
- 電源OFF→ON時の開始ステージ: CURRENTLY_UNDER_RESEARCH_IN_HIGH_PRIORITY_SOURCE

## sources
retrievedAt: 2026-09-15
- ニューギン公式機種サイト: https://www.l-mushokutensei.jp/
- P-WORLD/遊技通信（発表・型式・仕様）: https://news.p-world.co.jp/articles/32455/yugitsushin
- グリーンべると（検定通過）: https://web-greenbelt.jp/post-104359/
- 1geki（型式・検定番号・設定別性能）: https://1geki.jp/slot/l_musyokutensei/
- HAZUSE（型式・検定番号・天井）: https://hazuse.com/machine/pachislot/5S1064/
- パチビー（基本仕様・獲得枚数）: https://www.pachibee.jp/machines/index/225110003
- パチマガスロマガFREE（基本性能）: https://pachimaga.com/free/mach/maker-s/newgin/064475.php
- パチ&スロ必勝本（天井・設定変更/電源OFF→ON比較）: https://hisshobon.com/machineinfo/89022/
- なな徹（朝一・設定変更・据え置き・期待値）: https://nana-press.com/kaiseki/machine/1058/33840/
- なな徹（天井）: https://nana-press.com/kaiseki/machine/1058/33836/
- なな徹（有利区間）: https://nana-press.com/kaiseki/machine/1058/33841/
- ちょんぼりすた（設定変更/電源OFF→ON・内部状態）: https://chonborista.com/slot/newgin-slot/246382/

## boundaryAudit
- 2025-12-22群はLATEST_HANDOFFの既監査4機を継承。
- 本レコード追加後は2/4処理済み。
- 残り `L不二子BT`、`スマスロ 沖ドキ！DUO アンコール`。
- 4機処理後にPB/別型式/地域先行/延期/段階導入を再探索してCLOSED判定する。
