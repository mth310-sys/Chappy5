# L アズールレーン THE ANIMATION

recordNo: 1746
machineName: L アズールレーン THE ANIMATION
aliases: スマスロ アズールレーン / アズレン / Lアズールレーン
manufacturer: 京楽産業.
salesBrand: KYORAKU
formalModel: Lパチスロアズールレーン THE ANIMATION KN
inspectionCode: 5S0317
releaseDate: 2025-08-04
fieldTestDate: 2025-07-23
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + ゲーム数上乗せAT + 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- KYORAKU公式は2025-07-23より直営店サンシャインKYORAKUでフィールドテスト開始と告知。
- KYORAKU公式は2025-08-04の全国導入を記念したキャンペーンを実施しており、全国導入日を2025-08-04として扱う。
- 遊技通信/P-WORLD業界記事は型式名 `Lパチスロアズールレーン THE ANIMATION KN`、ホール導入2025-08-04予定を明記。
- 一撃は型式名 `LアズールレーンTHE ANIMATION KN`、検定番号 `5S0317`、導入開始日2025-08-04を掲載。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.6%
- setting3: 100.7%
- setting4: 105.3%
- setting5: 110.6%
- setting6: 114.9%
initialHitBySetting:
  bonus:
  - setting1: 1/167.4
  - setting2: 1/166.5
  - setting3: 1/164.3
  - setting4: 1/161.3
  - setting5: 1/158.9
  - setting6: 1/156.0
  at:
  - setting1: 1/598.9
  - setting2: 1/589.5
  - setting3: 1/564.2
  - setting4: 1/527.1
  - setting5: 1/496.4
  - setting6: 1/467.5
baseGamesPer50: 約25.8G
netIncrease:
- アズールレーンRUSH: 約2.5枚/G
- 異次元性能SS RUSH: 約5.1枚/G
basicPayout:
- アズールレーンBONUS -海戦-: 平均約100枚
- アズールレーンRUSH: 海戦ATTACKで初期G数決定、平均約100G上乗せ
- 異次元性能SS RUSH到達後: 一連の出玉増加区間の期待枚数約3500枚over
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は主にレア役等から擬似ボーナスを目指し、ボーナスからAT「アズールレーンRUSH」当選を狙う。
- ボーナス間ゲーム数天井は通常時最大350G+αでボーナス当選。
- ボーナス規定回数天井はAT間最大10回目のボーナスでAT当選。
- AT間天井は2000G+αでAT濃厚ボーナス当選。ボーナス中ゲーム数はAT間G数へ含めない。
- 上位AT「異次元性能SS RUSH」は純増約5.1枚/G。上位CZ「天城BATTLE」成功から突入し、4陣営集結状態を保持してAT終了後に再度天城BATTLEへ向かうループ構造。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_CARRYOVER_AND_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間、天井、内部状態、ボーナス規定回数をRESET/再抽選。
- ボーナス間ゲーム数は内部的に30G前後を加算して開始するため、通常最大350G+αの実質到達ラインが約320G前後へ短縮。
- ボーナス規定回数天井は通常最大10回目から最大7回目へ短縮。
- 内部状態は通常59.8% / 高確39.8% / 超高確0.4%で再抽選。
- 裏モードは非裏モードへ移行。
- 明石商店は非点灯、ゲーム数表示は0G、開始ステージは学園ステージとする直接比較表あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井、内部状態、ゲーム数を引き継ぐ。
- ボーナス間ゲーム数およびボーナス規定回数進行も引継ぎとして扱う。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井までのゲーム数、天井までのボーナス回数、内部状態、裏モードを引き継ぐ。
- 明石商店、ゲーム数表示、開始ステージの純電断時挙動は必勝本で「現在調査中」のため自動補完しない。
- 有利区間について純電断条件だけを独立列挙した高優先資料は固定できず、据え置き表から自動転記しない。
confidence: ANALYSIS_HIGH_FOR_DIRECT_POWER_CYCLE_TABLE / UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
settingChange: RESET_WITH_INTERNAL_PLUS_ABOUT_30G
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalBonusGameCeiling: 最大350G+α
resetBonusGameCeilingEffective: 約320G前後+α（内部約30G加算）
normalBonusCountCeiling: AT間最大10回目
resetBonusCountCeiling: 最大7回目
normalAtCeiling: 2000G+α
resetAtCeiling: 2000G+α（専用短縮の公開値は確認できず）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- ボーナス規定回数は設定変更時に再抽選され、1回目・3回目が選ばれやすく、7回目が最大天井。
- 通常時の独立した名称付き朝一専用モードは今回の資料横断では確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 裏モードは設定変更時に非裏モードへ移行、純電断時は引継ぎ。
confidence: ANALYSIS_HIGH

### stateAfterReset
settingChangeDistribution:
- normal: 59.8%
- high: 39.8%
- superHigh: 0.4%
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定変更以外ではエンディング終了後が有利区間リセット契機として公開され、設定変更時を除く有利区間リセット後は上位CZ「天城BATTLE」へ突入する。
- この上位CZ恩恵は設定変更時を除外する旨が明記されているため、朝一設定変更恩恵へ混入しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER

### resetBenefits
- ボーナス間天井が内部約30G加算により実質約320G前後へ短縮。
- ボーナス規定回数天井が最大10回目→最大7回目へ短縮。
- 規定回数は1回目・3回目が選ばれやすい。
- 内部状態は約40%で高確以上スタート（高確39.8% + 超高確0.4%）。
- 複数解析資料が「設定変更後はAT当選までの期待値がプラス」と整理している。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日までの有利区間、天井進行、内部状態、ボーナス規定回数進行を失う。
- 裏モード滞在時でも設定変更で非裏モードへ移行する。
- エンディング後など設定変更以外の有利区間リセットに付随する上位CZ恩恵は設定変更時には適用対象外。
confidence: ANALYSIS_HIGH

### resetDetection
- なな徹は本機のリセット判別を「現在調査中」としており、表示・挙動単独での確定判別法は未固定。
- 設定変更時は内部約30G加算のためボーナス間天井到達が通常より早まり、ボーナス規定回数も最大7回に短縮される。朝一で7回目を超えてAT非当選なら設定変更否定の強い材料となる。
- 本機固有ガックンの直接条件・発生率は、機種名/型式/KYORAKU/設定変更/据え置き/ガックン等へ検索語を変更して再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
internalGameAdditionAfterReset: 約30G前後
resetBonusGameCeilingEffective: 約320G前後+α
resetBonusCountCeiling: 最大7回目
resetStateDistribution:
- normal: 59.8%
- high: 39.8%
- superHigh: 0.4%
highOrBetterAfterReset: 約40.2%
resetBonusCountTendency:
- first: HIGH
- third: HIGH
- seventh: CEILING
resetGakkun: UNVERIFIED_AFTER_RESEARCH

## conflicts
- AT初当り設定5は、なな徹・必勝本・HAZUSE・パチマガスロマガ・Altema・ちょんぼりすた等が `1/496.4` で一致する一方、一撃およびkaku6は `1/469.4` と記載。多数一致の `1/496.4` をcanonicalとし、`CONFLICT_AT_SETTING5_496_4_VS_469_4` を保持する。
- 型式表記は一撃で `LアズールレーンTHE ANIMATION KN`、遊技通信で `Lパチスロアズールレーン THE ANIMATION KN`。検定機名として後者をformalModelへ採用し、前者は略表記として扱う。
- 導入日は全国導入2025-08-04をcanonicalとする。2025-07-23はKYORAKU直営店フィールドテスト先行導入であり、全国導入日とは分離して保持する。

## missingFields
- 純電源OFF→ON時の有利区間を独立条件で直接列挙した高優先資料: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時のボーナス規定回数1〜7回の正確な％振り分け: PUBLIC_EXACT_PERCENT_NOT_FOUND_AFTER_RESEARCH（相対期待度のみ公開）
- 独立した名称付き朝一専用モード: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- KYORAKU公式 全国導入記念ニュース: https://www.kyoraku.co.jp/news/detail/843
- KYORAKU公式 直営店フィールドテスト告知: https://www.kyoraku.co.jp/news/detail/834
- P-WORLD/グリーンべると 新台記事: https://news.p-world.co.jp/articles/31286/greenbelt
- P-WORLD/遊技通信 型式・スペック記事: https://news.p-world.co.jp/articles/31345/yugitsushin
- 一撃 機種トップ: https://1geki.jp/slot/l_azurlane/
- 一撃 天井・朝一: https://1geki.jp/slot/l_azurlane/3/
- 一撃 ボーナス規定回数: https://1geki.jp/slot/l_azurlane/45/
- なな徹 初当たり・機械割: https://nana-press.com/kaiseki/machine/993/30869/
- なな徹 朝一・リセット・据え置き・有利区間: https://nana-press.com/kaiseki/machine/993/31190/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87705/
- 必勝本 天井: https://hisshobon.com/machineinfo/87707/
- 必勝本 天井&設定変更/電源OFF ON: https://hisshobon.com/machineinfo/87679/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0317/
- パチマガスロマガ 初当たり・機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/22/kh02.php
- パチマガスロマガ 天井・ヤメ時: https://pachimaga.com/free/mach/maker-s/kyoraku/064403.php
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10312
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/238482/
- Altema: https://altema.jp/pachimo/lazurlane
- kaku6（純電断記述・AT設定5競合値）: https://www.kaku6.jp/slot/azurlane/
- 情報島 フィールドテスト記事: https://p-johojima.jp/new_machine/post-11099/
