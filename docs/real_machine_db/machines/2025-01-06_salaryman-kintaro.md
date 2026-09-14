# Lサラリーマン金太郎

recordNo: 1697
machineName: Lサラリーマン金太郎
aliases: L サラリーマン金太郎 / スマスロ サラリーマン金太郎 / Lスマスロサラリーマン金太郎ET
manufacturer: EXCITE（エキサイト）
formalModel: Lスマスロサラリーマン金太郎ET
inspectionCode: 430354
releaseDate: 2025-01-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + ストック型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_CONFLICT

## releaseAndModelEvidence
- グリーンべるとの高知県公安委員会検定通過記事で型式 `Lスマスロサラリーマン金太郎ET`、製造=EXCITEを確認。
- HAZUSEで検定番号 `430354`、型式名、メーカー=エキサイト、導入開始日2025-01-06を確認。
- 遊技通信/P-WORLD業界ニュースでEXCITE製、2025年1月上旬導入、AT純増約4.0枚/G、ボーナス純増約6.0枚/Gを確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: CONFLICT 97.8% vs 97.6%
- setting2: CONFLICT 99.1% vs 99.0%
- setting3: CONFLICT 100.5% vs 100.2%
- setting4: CONFLICT 104.1% vs 104.0%
- setting5: CONFLICT 108.2% vs 108.1%
- setting6: 114.9%
- canonicalClusterForYardstick: 97.8 / 99.1 / 100.5 / 104.1 / 108.2 / 114.9%（1geki・パチマガスロマガ・アタリ7・P-WORLD系で一致。必勝本のみ設定1〜5が低い別値のためCONFLICT保持）
initialHitBySetting:
- setting1: BONUS 1/417 / AT 1/844 / 合算1/279
- setting2: BONUS 1/408 / AT 1/813 / 合算1/272
- setting3: BONUS 1/400 / AT 1/781 / 合算1/265
- setting4: BONUS 1/387 / AT 1/712 / 合算1/251
- setting5: BONUS 1/373 / AT 1/641 / 合算1/236
- setting6: BONUS 1/356 / AT 1/574 / 合算1/220
baseGamesPer50: 約32G/50枚
netIncrease: BONUS 約6.0枚/G / AT「金太郎チャンス」約4.0枚/G
basicPayout:
- BIG: 平均約300枚
- REG: 平均約60枚
- AT「金太郎チャンス」: チェリーナビ回数管理（5・10・30・100回）/ 1セット期待枚数約240枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH_EXCEPT_PAYOUT_RATE_CONFLICT

## modeSpecificMinimumData
- 通常時はチャンス目・シングルボーナス・規定ゲーム数からボーナス/ATを目指す。CZ非搭載。
- 内部状態は通常/高確/超高確。ボーナス後は高確へ移行し、BIG後平均約100G、REG後平均約20G。
- 通常ゲーム数天井はBIG・AT後999G+α、REG後800G+α。到達時はAT「金太郎チャンス」当選。
- 設定変更後は600G+αへ短縮。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PAYOUT_CONFLICT_AND_UNVERIFIED_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をRESETし、規定ゲーム数を再抽選。
- 内部状態は再抽選され、約50%で高確スタート。
- 有利区間はRESET。
- 設定変更後のゲーム数天井は600G+α。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き（設定変更なし）では天井進行・規定ゲーム数・内部状態・有利区間をCARRY_OVERする扱い。設定変更/電源OFF→ON比較表で電断側の引継ぎを直接確認。
- 朝一画面だけで据え置きを確定できる公開ルールは確認できない。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNT_RULE_STATE_AND_ADVANTAGEOUS_SECTION

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数・規定ゲーム数・内部状態をCARRY_OVER。
- 有利区間もCARRY_OVERとする機種別比較資料を確認。
- 開始ステージは必勝本では純電断側「現在調査中」、別解析では設定変更/電断とも昼ステージ示唆。高信頼資料間で固定できないため `UNVERIFIED_START_STAGE_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNT_RULE_STATE / ANALYSIS_SINGLE_FOR_ADVANTAGEOUS_SECTION / UNVERIFIED_FOR_EXACT_START_STAGE

### gameCounterReset
- 設定変更: RESET。600G+α天井へ短縮。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeilingAfterBigOrAt: 999G+α
normalCeilingAfterReg: 800G+α
resetCeiling: 600G+α
ceilingBenefit: AT「金太郎チャンス」当選
- 設定変更後600Gの天井到達時は高確テーブルを参照してATストック抽選されるとする解析あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 「規定ゲーム数」は設定変更で再抽選、電源OFF→ONでは引継ぎ。
- 独立した名称付き「リセットモード」や、設定変更専用モード振り分けの比較可能な公開数値は、型式名/EXCITE/サラリーマン金太郎/朝一/リセット/モード/振り分け等へ検索語を変更し主要解析・旧資料を横断後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RULE_GAME_RESELECTION / UNVERIFIED_FOR_EXACT_RESET_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更: 再抽選。約50%で高確へ。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常営業中はAT終了時の一部・エンディング終了後にも有利区間リセットが発生。設定変更以外の有利区間リセットではAT+「裏金太郎モード」突入恩恵があるが、設定変更時はこの恩恵の対象外。
confidence: ANALYSIS_HIGH_FOR_RESET_TIMING / ANALYSIS_SINGLE_FOR_POWER_CYCLE_TABLE

### resetBenefits
- 天井がBIG/AT後999G+α（REG後800G+α）から設定変更後600G+αへ短縮。
- 設定変更時は約50%で高確スタート。
- 設定変更後600G天井では高確テーブルを参照したATストック抽選に期待できるとする解析あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行・規定ゲーム数・内部状態・有利区間は設定変更でリセット対象。
- 設定変更以外の有利区間リセット時に付くAT+裏金太郎モード恩恵は設定変更時には適用されない。
- その他の設定変更固有の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一600G+αを超えてもATに当選しなければ据え置き濃厚の強い判別材料。
- 内部状態は設定変更で約50%高確となるが、状態挙動だけでの確定判別は不可。
- 有利区間ランプによる確定的な設定変更/据え置き判別情報は固定できず、一般仕様から補完しない。
- 本機固有のリールガックン条件・発生率は `Lサラリーマン金太郎 / Lスマスロサラリーマン金太郎ET / EXCITE / ニューギン / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール` へ検索語を変更し、公式・業界・主要解析を横断後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_600G_DETECTION / UNVERIFIED_FOR_GAKKUN_AND_LAMP

### numericResetData
normalCeilingAfterBigOrAt: 999G+α
normalCeilingAfterReg: 800G+α
resetCeiling: 600G+α
resetHighStateStartRate: 約50%
settingChangeRuleGame: RESELECT
powerCycleRuleGame: CARRY_OVER
settingChangeAdvantageousSection: RESET
carryOverAdvantageousSection: CARRY_OVER
powerCycleAdvantageousSection: CARRY_OVER
exactResetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後天井: 600G+α（通常BIG/AT後999G+α、REG後800G+α）。
- 設定変更時の高確スタート率: 約50%。
- 600G+α超過でAT非当選なら据え置き濃厚材料。

## conflicts
- 設定別機械割: 1geki・パチマガスロマガ・アタリ7等は `97.8 / 99.1 / 100.5 / 104.1 / 108.2 / 114.9%`。必勝本は `97.6 / 99.0 / 100.2 / 104.0 / 108.1 / 114.9%`。設定1〜5を平均化せず `CONFLICT_PAYOUT_RATE_TWO_CLUSTERS` として保持。
- 朝一開始ステージ: 必勝本の電源OFF/ON側は「現在調査中」。二次解析には設定変更/電断とも昼ステージとする表記があるため、確定値として統合せず `UNVERIFIED_START_STAGE_AFTER_RESEARCH`。

## missingFields
- 設定変更専用の名称付きモードおよび具体的モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプを使った本機固有の確定変更判別: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ確定ルール: UNVERIFIED_START_STAGE_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL_DEVELOPER_INFO: https://www.newgin.co.jp/devfaq/6155/
- INDUSTRY_MODEL: https://web-greenbelt.jp/post-89274/
- INDUSTRY_PRODUCT: https://news.p-world.co.jp/articles/29675/yugitsushin
- ANALYSIS_HIGH_MODEL_CORE: https://hazuse.com/hd/430354-2/
- ANALYSIS_HIGH_CORE: https://1geki.jp/slot/l_kintaro/
- ANALYSIS_HIGH_RESET: https://1geki.jp/slot/l_kintaro/3/
- ANALYSIS_HIGH_RESET_POWER: https://hisshobon.com/machineinfo/85700/
- ANALYSIS_HIGH_CORE_CONFLICT: https://p.hisshobon.jp/machine/4436/1/106250
- ANALYSIS_HIGH_SETTING: https://hisshobon.com/machineinfo/85720/
- ANALYSIS_HIGH_RESET_ADVANTAGEOUS_SECTION: https://nana-press.com/kaiseki/machine/865/26487/
- ANALYSIS_HIGH_RESET_NUMERIC: https://nana-press.com/kaiseki/machine/865/26692/
- ANALYSIS_HIGH_CORE: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/21/kh02.php
- ANALYSIS_HIGH_CORE: https://www.atari7.com/slot/slot-l-kintaro.php
- ANALYSIS_SECONDARY_RESET_POWER: https://www.nankaikoya.jp/kintaro-kitaichi/
- ANALYSIS_SECONDARY_CORE: https://chonborista.com/slot/excite/225000/
- BOUNDARY_AUDIT: https://www.slopachi-quest.com/article/2025-dounyuukisyu/
