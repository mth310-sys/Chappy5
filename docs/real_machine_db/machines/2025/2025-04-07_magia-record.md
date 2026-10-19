# スマスロ マギアレコード 魔法少女まどか☆マギカ外伝

recordNo: 1719
machineName: スマスロ マギアレコード 魔法少女まどか☆マギカ外伝
aliases: マギレコ / スマスロマギアレコード / LスマスロマギアレコードRN
manufacturer: ミズホ / ユニバーサルエンターテインメント
formalModel: L／スマスロマギアレコード／RN
inspectionCode: 4S1598
releaseDate: 2025-04-07
generation: 6.5号機 / スマスロ / AT
systemType: 擬似ボーナス+ゲーム数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ユニバーサルエンターテインメント公式は本機をミズホ製、6号機スマスロAT、2025年4月発売と掲載。
- 遊技通信は型式 `L／スマスロマギアレコード／RN`、ミズホ製、2025年4月導入予定を報道。
- 1geki/HAZUSEで導入開始2025-04-07、型式、検定番号 `4S1598` を確認。
confidence: OFFICIAL_FOR_MANUFACTURER_RELEASE_MONTH / INDUSTRY_FOR_MODEL / ANALYSIS_DB_MULTI_SOURCE_FOR_EXACT_DATE_AND_INSPECTION

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.9%
- setting3: 102.0%
- setting4: 106.0%
- setting5: 110.4%
- setting6: 114.9%
initialHitBySetting:
- setting1: AT 1/654.6
- setting2: AT 1/633.4
- setting3: AT 1/571.8
- setting4: AT 1/516.6
- setting5: AT 1/456.5
- setting6: AT 1/416.7
bonusInitialBySetting:
- setting1: 1/240.6
- setting2: 1/236.1
- setting3: 1/222.8
- setting4: 1/208.5
- setting5: 1/195.1
- setting6: 1/184.3
baseGamesPer50: 約32.6G/50枚
netIncrease: 約2.6枚/G
basicPayout:
- BIG BONUS: 30G+α
- みたまBONUS: ベルナビ8回
- エピソードBONUS: 50G・AT濃厚
- AT `マギアラッシュ`: ゲーム数管理型、純増約2.6枚/G。初期ゲーム数はマギアアタックで決定。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はマギアポイントでボーナス抽選。通常最大950pt+α到達でボーナス。
- CZ失敗・みたまBONUS連続などで穢れを蓄積し、一定量到達時にAT当選へ影響するドッペルモード系統を持つ。
- 「固定のボーナススルー回数天井」は存在しないと1gekiが整理。AT非当選ボーナス8回以降は穢れ30pt以上獲得となり、穢れ解放による実質的な深部救済があるが、詳細内部抽選は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_TABLE_AND_PUBLIC_RESET_NUMERIC
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- ボーナス間マギアポイント天井: RESETし、通常最大950pt+αから600〜699pt+αへ短縮。
- 内部状態: RESET / 再抽選。
- 魔法少女モード: RESET / 再抽選。
- 穢れ: RESET / 再抽選。
- マギアポイント表示は設定変更/電源OFF→ONとも `???` 表示となるため、表示のみでは判別できない。
- 設定変更時はゴーシュバーガーステージから開始。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_DIRECT_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井までの内部ポイント、内部状態、魔法少女モード、穢れを引き継ぐ。
- 表示マギアポイントは `???` となり、内部ポイントの持越しが外見上そのまま表示されるわけではない。
confidence: ANALYSIS_HIGH / DIRECT_SETTING_CHANGE_VS_POWER_TABLE_AND_RESET_SUMMARIES

### powerCycleBehavior
- 純電源OFF→ON: 天井までのポイント、内部状態、魔法少女モード、穢れを引き継ぐ。
- 有利区間も引継ぎとする機種別朝一表を確認。
- 通常時はゴーシュバーガーへ、AT中はホテルフェイントホープ地下、エンブリオ・イブ覚醒中はイブ追跡ステージへ復帰。CZ・BONUS・マギアアタック・決戦神浜聖女中は各待機画面へ。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### gameCounterReset
- 本機の主天井はゲーム数ではなくマギアポイント管理。
- 設定変更: 内部天井ポイント進行RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalPointCeiling: 最大950pt+α
resetPointCeiling: 600〜699pt+α（最大699pt+α）
ceilingBenefit: ボーナス当選
approxGameEquivalent: 1Gあたりポイント加算にブレがあるため固定G天井として扱わない。解析上は通常約600G、リセット後約400G相当の目安がある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 魔法少女モードを再抽選。
- 据え置き・電源OFF→ON: 魔法少女モード引継ぎ。
- 設定変更時の魔法少女モード具体振り分けは検索語・資料系統を変更して再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECTION

### stateAfterReset
- 設定変更: 内部状態を再抽選。有利区間移行時に高確ゲーム数を抽選。
- 公開設定別の高確移行値:
  - setting1: 高確10G 14.1% / 20G 7.8% / 30G 3.1% / total 25.0%
  - setting2: 14.1% / 7.8% / 3.1% / total 25.0%
  - setting3: 15.6% / 8.6% / 3.5% / total 27.7%
  - setting4: 16.4% / 9.0% / 3.9% / total 29.3%
  - setting5: 17.2% / 9.4% / 3.9% / total 30.5%
  - setting6: 18.8% / 10.2% / 4.7% / total 33.7%
- 据え置き・純電源OFF→ON: 状態引継ぎ。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き・純電源OFF→ON: CARRY_OVER。
- 遊技中の差枚条件による有利区間リセットは設定変更朝一契約と分離管理し、今回の性能コアには詳細抽選を収録しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### resetBenefits
- ボーナス間最大天井が950pt+α → 600〜699pt+αへ短縮。
- 設定変更時は高確スタート抽選あり。トータル25.0%（設定1・2）〜33.7%（設定6）。高設定ほど優遇。
- 朝一高確挙動は設定変更推測・設定推測の補助材料になり得る。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### resetPenalties
- 前日の内部ポイント進行、魔法少女モード、内部状態、穢れを失う。
- 特に前日穢れ蓄積や深いポイント進行がある場合、設定変更でそれらが消失する点は朝一客側には不利になり得る。
- 設定変更固有の追加的な公開数値的不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOST_CARRY_VALUES

### resetDetection
- 設定変更後は最大699pt+αのため、朝一699pt+αを明確に超えてボーナス非当選なら据え置き濃厚材料。
- 高確スタートは設定変更推測材料だが、通常遊技中にも高確移行があるため単独確定ではない。
- マギアポイント表示は設定変更/純電断とも `???` で判別不可。
- 本機固有ガックン条件・発生率は機種名/型式/ミズホ/ユニバーサル/設定変更/据え置き/電源OFF ON/ガックンを変えて再探索したが、高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_699PT_BOUNDARY_AND_DISPLAY / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalPointCeiling: 950pt+α
resetPointCeiling: 600〜699pt+α
resetPointCeilingMax: 699pt+α
resetHighStateTotalBySetting:
- setting1: 25.0%
- setting2: 25.0%
- setting3: 27.7%
- setting4: 29.3%
- setting5: 30.5%
- setting6: 33.7%
resetHighStateDurationBySetting:
- setting1: 10G 14.1% / 20G 7.8% / 30G 3.1%
- setting2: 10G 14.1% / 20G 7.8% / 30G 3.1%
- setting3: 10G 15.6% / 20G 8.6% / 30G 3.5%
- setting4: 10G 16.4% / 20G 9.0% / 30G 3.9%
- setting5: 10G 17.2% / 20G 9.4% / 30G 3.9%
- setting6: 10G 18.8% / 20G 10.2% / 30G 4.7%

## conflicts
- `RESET_INTERNAL_POINT_WORDING_650_VS_600_TO_699`: 1geki朝一表は「内部ポイント リセット（規定650ptに短縮）」と簡略表記する一方、同ページ天井詳細、必勝本、なな徹等は設定変更時600〜699pt+α / 最大699pt+αとする。本DBは複数一致かつ範囲定義の明確な600〜699pt+αをcanonical採用し、650pt表記は簡略/代表値の可能性があるため競合注記として保持。
- ゲーム数換算の600G/400G等はポイント獲得量変動を含む目安であり、固定ゲーム数天井として扱わない。

## missingFields
- 設定変更時の魔法少女モード具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 穢れ再抽選時の初期ポイント具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更を客側から確定できる単独表示/ランプ挙動: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- ユニバーサル公式 製品ページ: https://www.universal-777.com/product/slot/magireco/
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30032/yugitsushin
- HAZUSE 型式/検定番号: https://hazuse.com/machine/pachislot/4S1598/
- 1geki 基本スペック: https://1geki.jp/slot/l_magireco/
- 1geki 天井/設定変更: https://1geki.jp/slot/l_magireco/3/
- 必勝本 天井/設定変更/電源OFF ON: https://hisshobon.com/machineinfo/86129/
- なな徹 朝一/設定変更・高確抽選: https://nana-press.com/kaiseki/machine/914/28429/
- なな徹 天井: https://nana-press.com/kaiseki/machine/914/28426/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/914/28427/
- すろぱちくえすと 朝一: https://www.slopachi-quest.com/article/magireco-tenjou/
- スロベース 基本/朝一: https://slobase.jp/machines/magireco
- 6確 基本/朝一: https://www.kaku6.jp/slot/magireco/

## researchNotes
- 600〜699pt+α天井短縮、高確スタート率、穢れ/モード/状態のRESET/CARRYはホール設定変更と朝一客行動に直接影響するためv0.7対象。
- 通常時全モード移行、穢れ全契機/全振り分け、AT内部上乗せ抽選は実機完全再現用のため収集対象外。
- 固定ボーナススルー天井はないため、5スルー/8スルー以降の穢れ優遇を「設定変更専用恩恵」と誤って扱わない。
