# L戦国乙女5 業火を穿つ宿焔の双刃

recordNo: 1798
machineName: L戦国乙女5 業火を穿つ宿焔の双刃
aliases: 戦国乙女5 / L戦国乙女5 / スマスロ戦国乙女5 / 乙女5
manufacturer: オリンピア製造 / 平和
formalModel: L戦国乙女5L8
inspectionCode: 6S0006
releaseDate: 2026-06-08
generation: 6.5号機 / スマスロ
systemType: 直AT / 周期管理 / CZ / 擬似ボーナス / 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- P-WORLD/Amusement Japanおよびグリーンべるとで、平和発表・オリンピア製、ホール導入2026-06-08を確認。
- HAZUSEで型式 `L戦国乙女5L8`、検定番号 `6S0006`、メーカー オリンピア、導入開始日2026-06-08を確認。
- 情報島+でも2026-06-08導入、平和/オリンピア系として照合。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 101.0%
- setting4: 106.2%
- setting5: 111.1%
- setting6: 114.9%
initialHitBySetting:
  at:
  - setting1: 1/359.5
  - setting2: 1/350.8
  - setting3: 1/332.5
  - setting4: 1/302.8
  - setting5: 1/281.0
  - setting6: 1/262.9
baseGamesPer50: 約31.0G/50枚
netIncrease:
- 強カワRUSH: 約2.7枚/G
- 真強カワRUSH: 約4.8枚/G
- エンディング: 約6.9枚/G
basicPayout:
- 強カワRUSH: 初期45G+α（セット継続時50G）
- 真強カワRUSH: 初期100G+α
- 戦国乙女BONUS: 30G
- 出陣BONUS: 20G
modeSpecificMinimumData:
- 通常時は周期到達、巫女ポイント0ptからのCZ、リールロック等からATを目指す直AT仕様。
- 通常周期テーブルは通常A最大6周期、通常B最大3周期、天国最大1周期。設定変更時のリセット専用天井として最大4周期が別途適用される。
- 通常ゲーム数天井はAT間999G+α（実ゲーム）。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部状態、周期テーブル、周期モード、乙女ストラップ、ゴエモン依頼ポイントをリセット。
- ゲーム数天井は通常999G+αから650G+αへ短縮。
- 周期天井は通常最大6周期から最大4周期へ短縮。
- 巫女ポイントは内部的にランダム減算された状態から開始する。1geki表現では「ランダムな数値に振り分け」。
- 開始ステージは高優先解析で現在調査中。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、周期テーブル、周期モード、乙女ストラップ、ゴエモン依頼ポイントを引き継ぐ。
- 据え置き時は設定変更専用の650G+α/最大4周期短縮を適用しない。
- 開始ステージは現在調査中。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON時は、ジャグラーズネットの機種別比較で有利区間・天井を引き継ぐ。
- 電源OFF→ON時の設定変更専用天井短縮はなし。
- 内部状態、周期テーブル/周期モード、乙女ストラップ、ゴエモン依頼ポイントまで純電断条件で個別列挙した同等以上の直接比較表は今回固定できず、据え置き一般則から推測せず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH` とする。
- 開始ステージは調査中。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_AND_CEILING / UNVERIFIED_FOR_OTHER_LOW_LEVEL_FIELDS

### gameCounterReset
settingChange:
- atCeilingGameCounter: RESET
- periodicCeilingCounter: RESET
- mikoPoint: RANDOM_REDUCTION_FROM_RESET_START
carryOver:
- atCeilingGameCounter: CARRY_OVER
- periodicCeilingCounter: CARRY_OVER
- mikoPoint: CARRY_OVER
powerCycle:
- atCeilingGameCounter: CARRY_OVER_DIRECTLY_CONFIRMED
- periodicCeilingCounter: CARRY_OVER_AS_CEILING_DIRECTLY_CONFIRMED
- mikoPoint: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- game: 999G+α（実ゲーム、AT当選）
- cycle: 最大6周期（AT当選）
resetCeiling:
- game: 650G+α（実ゲーム、AT当選）
- cycle: 最大4周期（AT当選）
shortening:
- game: 349G短縮（表記上999→650）
- cycle: 2周期短縮
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 周期テーブルは設定変更でリセット、据え置きで引き継ぎ。
- 周期モードも設定変更でリセット、据え置きで引き継ぎ。
- 設定変更専用の各周期テーブル/周期モード具体振り分け率は、複数高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の最大4周期は通常A/B/天国の通常テーブル上限とは別に、リセット時天井として扱う。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY_OVER / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- 内部状態は設定変更でリセット、据え置きで引き継ぐ（なな徹の朝一比較表）。
- 設定変更後の内部状態具体振り分け率は今回の再探索で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の内部状態直接文言は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_VS_CARRY_OVER

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- なな徹は設定変更=リセット、据え置き=引継ぎを直接表記。
- ジャグラーズネットは設定変更=リセット、電源OFF→ON=引継ぎを直接表記。
- エンディング等による通常遊技中の有利区間リセットでは剣聖CHANCE突入が主要恩恵だが、1gekiは設定変更時を除くと明記しており、設定変更リセット恩恵と混同しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- AT間ゲーム数天井: 999G+α → 650G+α。
- 周期天井: 最大6周期 → 最大4周期。
- 巫女ポイント: 設定変更時にランダム減算状態から開始。
- 朝一650G+αまたは4周期でAT天井へ到達するため、据え置きより浅い天井狙いが可能。
- なな徹の独自シミュレーション（設定1・等価・AT後即ヤメ等の前提）ではリセット0G打ち出し期待値 -1,355円、200G +232円、300G +1,390円。これはメーカー公表値ではなく解析サイト独自期待値なので分離保持。
confidence: ANALYSIS_HIGH_FOR_STRUCTURAL_BENEFITS / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE_SIMULATION

### resetPenalties
- 設定変更時だけの天井延長、不利専用モード、固定マイナス恩恵は、検索語/資料系統変更後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間リセット時の上位CZ恩恵は通常の有利区間切断時には存在するが、設定変更時は除外されるため「設定変更で剣聖CHANCE」の恩恵として扱わない。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 現時点で有効な確定的リセット判別方法は判明していない。
- 朝一650G+α消化または4周期到達で天井が発動しなかった場合、据え置きの可能性が高い。
- 巫女ポイントは設定変更時にランダム減算されるため、単独での確定判別には使わない。
- 本機固有のリールガックン条件/発生率は `戦国乙女5/L戦国乙女5/L戦国乙女5L8/オリンピア/平和` と「ガックン/設定変更/据え置き/朝一」を組み替えて再探索したが高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_POST_HOC_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetGameCeiling: 650G+α
normalGameCeiling: 999G+α
resetCycleCeiling: 最大4周期
normalCycleCeiling: 最大6周期
mikoPointReset: ランダム減算
resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
resetExpectedValueSetting1EqualExchange:
- 0G: -1355円（なな徹独自シミュレーション）
- 200G: +232円（同）
- 300G: +1390円（同）
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE_SIMULATION

## conflicts
- 主要canonicalの設定別AT初当り `1/359.5 / 1/350.8 / 1/332.5 / 1/302.8 / 1/281.0 / 1/262.9` と機械割 `97.9/98.9/101.0/106.2/111.1/114.9%` は6確・なな徹・スロベース等で一致。
- 一部独自集計サイトには設定1の「初当り実践値」1/345.3等が併記されるが、公表AT初当りとは定義が異なるためCONFLICTにはせず `observed/simulation` として分離。公表AT初当りをcanonicalとする。
- 一部二次記事に50枚約32.0Gの記載があるが、6確・なな徹・フリック7・スロベース等の約31.0G一致をcanonicalとする。32.0Gは低優先単一資料値として採用しない。

## missingFields
- 設定変更時の周期テーブル/周期モード具体振り分け率
- 設定変更時の内部状態具体振り分け率
- 純電源OFF→ON時の内部状態・周期テーブル/周期モード・乙女ストラップ・ゴエモン依頼ポイントの個別直接文言
- 本機固有ガックン条件/発生率

## sources
retrievedAt: 2026-09-15
- P-WORLD業界ニュース / Amusement Japan（平和発表、オリンピア製、2026-06-08導入）: https://news.p-world.co.jp/articles/33318/amusement
- P-WORLD業界ニュース / グリーンべると（オリンピア製、2026-06-08導入）: https://news.p-world.co.jp/articles/33314/greenbelt
- HAZUSE（型式・検定番号・導入日・純増）: https://hazuse.com/machine/pachislot/6S0006/
- 情報島+ 機種情報（導入日・AT基本性能）: https://p-johojima.jp/machine_spec/post-30373/
- 情報島+ 2026-06-08導入群確認: https://p-johojima.jp/colum/post-33970/
- 6確（設定別AT初当り・機械割・ベース・天井）: https://www.kaku6.jp/slot/otome5/
- なな徹 スペック（設定別AT初当り・機械割・ベース）: https://nana-press.com/kaiseki/machine/1160/36410/
- なな徹 朝一/リセット（設定変更/据え置き比較、天井短縮、巫女ポイント、期待値）: https://nana-press.com/kaiseki/machine/1160/37316/
- 1geki 天井/リセット/有利区間（天井短縮、巫女ポイント、有利区間恩恵の設定変更除外）: https://1geki.jp/slot/l_otome5/3/
- 1geki 強カワRUSH（初期45G+α、純増2.7枚/G）: https://1geki.jp/slot/l_otome5/81/
- ジャグラーズネット（設定変更/電源OFF→ONの有利区間・天井比較）: https://jugglersnet.com/chumoku/sengokuotome5
- パチビー（基本スペック、天井、AT/上位AT初期G数）: https://www.pachibee.jp/machines/index/226050000
- スロベース（型式/検定番号、基本スペック、リセット天井照合）: https://slobase.jp/machines/sengoku-otome5
- パチマガスロマガFREE（AT初期G数・純増照合）: https://pachimaga.com/free/mach/maker-s/olympia/065007.php

## queueAuditNote
- 情報島+の2026-06-08導入後評価記事では新規パチスロ本体として `L戦国乙女5 業火を穿つ宿焔の双刃` / `スマスロ BIRDIE WING -Golf Girls' Story-` / `スロット ソードアート・オンラインⅡ` の3機を列挙。
- パチマガスロマガ導入カレンダーには同日 `スマスロ 甲鉄城のカバネリ 海門決戦（咲かせや咲かせパネル）` もあるが、これは既収録機種の追加パネルであり新規canonical機種本体には数えない。
