# L 新・必殺仕置人 回胴 CRASH SPEC

recordNo: 1682
machineName: L 新・必殺仕置人 回胴 CRASH SPEC
aliases: L新・必殺仕置人 / スマスロ 新・必殺仕置人 / スマスロ仕置人
manufacturer: 京楽産業．
formalModel: L新・必殺仕置人KC
inspectionCode: 3S1852
releaseDate: 2024-11-05
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + ゲーム数上乗せ型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技通信/P-WORLD業界記事は京楽産業．の新機種として型式 `L新・必殺仕置人KC`、2024年11月5日ホール導入予定を掲載。
- HAZUSEは型式 `L新・必殺仕置人KC`、検定番号 `3S1852`、導入開始日 `2024-11-05`、メーカー京楽を掲載。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.5%
- setting3: 101.1%
- setting4: 105.4%
- setting5: 108.8%
- setting6: 112.9%
initialHitBySetting:
- setting1: BONUS 1/230.7 / AT 1/456.0
- setting2: BONUS 1/224.1 / AT 1/438.9
- setting3: BONUS 1/212.9 / AT 1/411.2
- setting4: BONUS 1/198.2 / AT 1/380.7
- setting5: BONUS 1/184.7 / AT 1/350.7
- setting6: BONUS 1/169.0 / AT 1/319.9
baseGamesPer50: 約32.4G/50枚
netIncrease:
- BIG BONUS: 約3.0枚/G
- 真出陣BONUS: 約3.0枚/G
- AT「仕置無双RUSH」: 約3.0枚/G
basicPayout:
- BIG BONUS: 30G+α（前半20G + 後半10G+α）、AT期待度約40%
- 真出陣BONUS: 30G、当選時点でAT濃厚
- AT「仕置無双RUSH」: 初期50G+α、ゲーム数上乗せ型
confidence: ANALYSIS_HIGH + INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はSHIOKI揃いからCZ「CRASH BATTLE」を経由してBONUSを目指すルートが中心。
- BONUSはBIG BONUSと真出陣BONUSの2種。BIGからAT期待度約40%、真出陣BONUSはAT濃厚。
- AT終了後は赤月ステージへ移行しBONUS引き戻し期待度約50%。BONUS後は暗夜ステージで約30%、エンディング後は極夜ステージで約88%の引き戻し期待度が業界資料で示される。
- 通常時ゲーム数天井は最大999G+αでBONUS当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_DETECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部状態、寅の会ポイント、死神ポイントをリセット。
- 寅の会ポイントは内部で初期値を再抽選し、液晶表示は0から開始。
- 開始ステージは主水ステージ。
- 設定1では天井が408Gに短縮される振り分けが40.8%、通常相当の999Gが59.2%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、寅の会ポイント、死神ポイントを内部で引き継ぐ。
- 液晶表示上のゲーム数/ポイント表示は朝一の見た目と内部進行が一致しない場合があるため、表示だけで変更判別はできない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井G数を引き継ぎ、液晶上のゲーム数表示は0から開始。
- 寅の会ポイントも内部で引き継ぎ、液晶上は0から開始。
- 開始ステージは主水ステージ。
- 内部状態・死神ポイント・有利区間について、設定変更との差と据え置き側の引継ぎ表に整合するが、純電源OFF→ONだけを個別列で全項目明記した一次資料は未確認。一般仕様から推測せず、直接確認できた天井・寅の会ポイントをcanonicalとする。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_TORA_POINT / UNVERIFIED_FOR_POWER_CYCLE_FULL_STATE_CONTRACT

### gameCounterReset
- 設定変更: 天井進行をリセットし、設定1では408G / 999Gを再抽選。
- 据え置き: 天井進行を引き継ぐ。
- 純電源OFF→ON: 天井進行を引き継ぐが液晶表示は0Gから。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 999G+α / BONUS当選
resetCeilingSetting1:
- 408G: 40.8%
- 999G: 59.2%
- 他設定の個別振り分けは十分な再探索後も信頼できる固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 朝一専用の通常モード名称・全移行テーブルは確認されていない。
- 設定変更時は寅の会ポイントの初期値を内部抽選するため、ポイント系の開始条件は再抽選。
- 設定変更後1回目の寅の会演出は赤月ステージ（超高確）移行濃厚。
confidence: ANALYSIS_HIGH_FOR_TORA_POINT / UNVERIFIED_FOR_GENERAL_MODE_TABLE

### stateAfterReset
- 設定変更時は内部状態をリセット、据え置き時は引き継ぐ。
- 設定変更後1回目の寅の会演出では、獲得する超高確ゲーム数に10G加算される解析がある。
- 純電源OFF→ON時の内部状態単独について高信頼の明示契約は確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き時: 有利区間引継ぎ。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 設定変更以外の有利区間リセット契機/恩恵について、当時なな徹では「現在調査中」とされているため推測しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- 設定1では40.8%で天井が999G+αから408Gへ短縮。
- 寅の会ポイント初期値を再抽選。
- 設定変更後1回目の寅の会演出で赤月ステージ移行濃厚。
- 初回寅の会で獲得する超高確G数に10G加算。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時に限定された主要な明確な不利要素は、検索語・資料系統を変えて再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 有利区間ランプで設定変更/据え置きを判別することはできない。
- 設定変更時/純電源OFF→ONとも主水ステージ開始であり、開始ステージ単独では変更判別不可。
- 純電源OFF→ON時は天井と寅の会ポイントが内部で引き継がれても液晶表示は0になるため、表示0だけではリセット判別不可。
- なな徹の機種専用「リセット判別」は現在調査中。
- `新・必殺仕置人` / `L新・必殺仕置人KC` / `京楽` と「ガックン/設定変更/据え置き/リセット/朝一」を組み合わせて再探索したが、本機固有のガックン条件・発生率を高信頼に固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LAMP_AND_DISPLAY / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 999G+α
resetCeiling408GSetting1: 40.8%
resetCeiling999GSetting1: 59.2%
resetCeilingDistributionOtherSettings: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
toraPointInitialLottery: EXISTS
toraFirstMeeting: 赤月ステージ移行濃厚 / 超高確G数+10G
powerCycleCeiling: CARRY_OVER_WITH_DISPLAY_0
powerCycleToraPoint: CARRY_OVER_WITH_DISPLAY_0
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定1・設定変更時天井408G選択率: 40.8%。
- 設定1・設定変更時天井999G選択率: 59.2%。
- 初回寅の会: 赤月ステージ移行濃厚、超高確G数+10G。
- 他設定の408G/999G振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- 現在確認した主要資料間で性能コアの重大な数値競合はなし。
- 2024-11月導入境界について、直前handoffはダブルアタック2/モンスターハンターライズも11月5日候補としていたが、ALL7および別月間一覧では両機を11月18日導入として掲載。これは本機レコードの競合ではなく時系列キュー境界の修正対象としてhandoffへ記録する。

## missingFields
- 設定2〜6の設定変更時408G/999G天井振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の内部状態・死神ポイント・有利区間を項目別に直接明記した高信頼契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_CORE_AND_RESET / LIMITED_FOR_OTHER_SETTINGS_RESET_DISTRIBUTION_AND_GAKKUN
sources:
- 遊技通信/P-WORLD業界記事: https://news.p-world.co.jp/articles/28802/yugitsushin
- グリーンべると/P-WORLD業界記事: https://news.p-world.co.jp/articles/28808/greenbelt
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/3S1852/genre/201/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4375/1/104540
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10113
- なな徹 スペック: https://nana-press.com/kaiseki/machine/833/24009/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/833/25105/
- なな徹 狙い目/リセット: https://nana-press.com/kaiseki/machine/833/25102/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/833/25106/
- 一撃 天井/朝一: https://1geki.jp/slot/l_hissatsu_shiokinin_crash/3/
- 一撃 機種解析TOP: https://1geki.jp/slot/l_hissatsu_shiokinin_crash/
- ALL7 2024年11月新台導入予定一覧: https://www.all7.jp/plans/index/2024/11
- 6号機一覧/月別導入整理: https://sulocale.sulopachinews.com/archives/43927
