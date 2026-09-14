# L麻雀物語

recordNo: 1722
machineName: L麻雀物語
aliases: スマスロ 麻雀物語 / 麻雀物語 スマスロ / L麻雀物語S2
manufacturer: オリンピアエステート / 平和
aformalModel: L麻雀物語S2
inspectionCode: 4S1564
releaseDate: 2025-04-21
generation: 6.5号機 / スマスロ
systemType: AT・擬似ボーナス経由/直撃型・ゲーム数/CZ併用
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技通信/P-WORLD業界ニュースは型式 `L麻雀物語S2`、オリンピアエステート製、2025-04-21導入予定を掲載。
- HAZUSEは検定番号 `4S1564`、型式 `L麻雀物語S2`、スマスロAT機、導入日2025-04-21を掲載。
confidence: INDUSTRY / ANALYSIS_DB_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.0%
- setting2: 98.8%
- setting3: 100.1%
- setting4: 104.9%
- setting5: 108.9%
- setting6: 114.6%
initialHitCombinedBySetting:
- setting1: 1/354.1
- setting2: 1/349.2
- setting3: 1/342.1
- setting4: 1/328.8
- setting5: 1/326.0
- setting6: 1/323.8
bonusInitialBySetting:
- setting1: 1/433.3
- setting2: 1/431.8
- setting3: 1/426.6
- setting4: 1/420.2
- setting5: 1/417.9
- setting6: 1/416.5
atInitialBySetting:
- setting1: 1/615.2
- setting2: 1/600.3
- setting3: 1/580.5
- setting4: 1/545.5
- setting5: 1/537.9
- setting6: 1/531.4
baseGamesPer50: 約32.0G/50枚
netIncrease: 約3.7枚/G
basicPayout:
- 麻雀ボーナス: 25G、純増約3.7枚/G
- AT「麻雀闘牌」: 初期50G+α、純増約3.7枚/G
- AT初当り時期待枚数: 約820枚（業界発表）
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役・規定ゲーム数・CZから擬似ボーナス/ATを目指す。
- CZ間通常天井は最大400G。
- ボーナス間は699G+αが50.2%で麻雀ボーナス、999G+αが49.8%でAT直撃またはフリーズ契機。
- ボーナス6回スルー後、7回目のボーナスでAT濃厚。
- 上位ATの概念はなく、通常ATを純増約3.7枚/Gで伸ばす。
- 実機完全再現用の全内部抽選・全状態移行率は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_POWER_TABLE_PARTIAL_ADVANTAGEOUS_SECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- ボーナス間/CZ間の内部ゲーム数を短縮する朝一処理が行われる。
- 内部状態はRESET。
- 設定変更時のステージは主要解析で調査中。
- 設定変更による有利区間そのものの直接記述は、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/有利区間へ検索語を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAMES_AND_STATE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 据え置き運用では前日のゲーム数・内部状態を保持する挙動と、純電源OFF→ON時の機種固有比較表の「天井引継ぎ・内部状態引継ぎ」が整合。
- 設定変更後専用のCZ/ボーナス間短縮恩恵は発生しない。
- 有利区間の据え置き時直接記述は `UNVERIFIED_AFTER_RESEARCH` とし、推測転記しない。
confidence: ANALYSIS_HIGH_FOR_GAMES_AND_STATE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数を引き継ぐ。
- 純電源OFF→ON: 内部状態を引き継ぐ。
- ステージは主要解析で調査中。
- 有利区間について純電断だけを独立条件にした直接記述は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAMES_AND_STATE / UNVERIFIED_FOR_STAGE_AND_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: 内部的にボーナス間ゲーム数を300〜399G進めた状態から開始。CZ間天井も短縮。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### ceilingAfterReset
normalBonusCeiling:
- 699G+α: 50.2%で麻雀ボーナス
- 999G+α: 49.8%でAT直撃 or フリーズ契機
resetBonusCeiling:
- 内部短縮量: 300〜399G
- 仮天井: 表示上おおむね300〜399G範囲、最大基準399Gで約50%ボーナス
- 最大天井: 表示上おおむね600〜699G範囲、最大基準699GでAT
normalCzCeiling: 最大400G
resetCzCeiling:
- 200G到達でCZ当選となる救済が設定変更後に有効
- 別解析では内部的なCZ短縮量0〜49Gとの記述もあり、規定G数表示のズレを伴う
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機に「設定変更時モード振り分け」として比較可能な独立モード表は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- ミッドナイトステージ移行ゲーム数等はリセット時の内部G数加算によりズレる場合がある。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNT_EFFECT / PUBLIC_VALUE_NOT_FOUND_FOR_RESET_MODE_TABLE

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き/純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更後の高確開始率等の公開数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_POWER_TABLE

### advantageousSectionReset
- 通常の有利区間リセット時は勝利濃厚の煌帝バトルが恩恵として存在する。
- ただし「設定変更時」「据え置き時」「純電断時」を個別に結びつける機種固有の直接資料は再探索後も固定できなかったため、各条件について `UNVERIFIED_AFTER_RESEARCH`。通常の有利区間リセット恩恵を設定変更へ自動転記しない。
confidence: ANALYSIS_HIGH_FOR_GENERAL_SECTION_RESET_BENEFIT / UNVERIFIED_FOR_SETTING_CHANGE_MAPPING

### resetBenefits
- ボーナス間の内部G数が300〜399G短縮される。
- 通常699G/999Gの二段階天井が、設定変更後は表示上おおむね300〜399G/600〜699Gの範囲まで前倒しされる。
- CZ間は設定変更後200G救済が有効。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更直後は、ボーナス/AT終了後に行われるパトランランチャンス約8.6%抽選の対象外とする解析資料がある。
- それ以外に設定変更固有の冷遇固定・追加ペナルティ率は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_FOR_NO_PATORANRAN_RESET / ANALYSIS_HIGH_FOR_NO_OTHER_CONFIRMED_PENALTY

### resetDetection
- 設定変更後はCZ間200G救済があるため、内部G数加算によるズレを考慮しつつ朝一200G前後のCZ挙動が変更推測材料になる。
- ミッドナイトステージ移行ゲーム数もリセット時にズレる場合がある。
- 200Gを超えてCZ救済が確認できない場合は据え置き推測材料とする解析資料があるが、単独確定扱いはしない。
- 本機固有のリールガックン条件・発生率は表記揺れ/型式/平和/オリンピアエステート/設定変更/朝一/据え置き/ガックンで再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNT_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalBonusCeilingDistribution:
- 699G+α: 50.2%
- 999G+α: 49.8%
resetInternalGameAdvance: 300〜399G
resetBonusTemporaryCeiling: 最大基準399Gで約50%麻雀ボーナス
resetBonusMaximumCeiling: 最大基準699GでAT
normalCzCeiling: 400G
resetCzRelief: 200G
resetCzInternalShortening: 0〜49G（解析表記）

## conflicts
- `RESET_CZ_EXPRESSION_DIFFERENCE`: 主要解析には「設定変更後CZ天井200G」と「CZ天井を内部的に0〜49G短縮」の両表現が存在する。前者は救済到達条件、後者は内部規定G数の加算/ズレを示す記述とみられるため数値を平均せず双方を保持。

## missingFields
- 設定変更/据え置き/純電断それぞれの有利区間直接マッピング: UNVERIFIED_AFTER_RESEARCH
- 設定変更後の独立モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更後の高確開始率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 開始ステージの確定条件: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 遊技通信/P-WORLD業界ニュース（型式/製造/導入/ゲーム性）: https://news.p-world.co.jp/articles/30316/yugitsushin
- Amusement Japan（導入日/AT純増/初期G/AT期待枚数）: https://amusement-japan.co.jp/article/detail/10004757/
- HAZUSE（型式/検定番号/ベース/純増/天井/設定変更短縮）: https://hazuse.com/hd/l4s1564/
- 1geki（通常天井/699G・999G振り分け/朝一設定変更）: https://1geki.jp/slot/l_mjnmngtr/3/
- P-WORLD機種DB（設定別初当り/出玉率/ベース）: https://www.p-world.co.jp/machine/database/10234
- ちょんぼりすた（設定別性能/朝一設定変更/純電断/内部状態/有利区間）: https://chonborista.com/slot/orinpia-slot/231281/
- パチマガスロマガ（天井振り分け/設定変更内部G短縮/CZ救済）: https://pachimaga.com/free/slot/olympiaestate/l_mahjongmonogatari.php
- Altema 朝一リセット（設定変更/純電断比較/判別）: https://altema.jp/pachimo/lmajanreset
- ALL7 2025年4月導入一覧（2025-04-21境界監査）: https://www.all7.jp/plans/index/2025/04

## confidenceSummary
corePerformance: HIGH
releaseAndModel: HIGH
resetSettingChange: HIGH_FOR_GAMES_AND_STATE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION
resetCarryOver: HIGH_FOR_GAMES_AND_STATE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION
resetPowerCycle: HIGH_FOR_GAMES_AND_STATE / UNVERIFIED_FOR_STAGE_AND_ADVANTAGEOUS_SECTION
numericResetData: HIGH
resetDetection: HIGH_FOR_GAME_COUNT / UNVERIFIED_FOR_GAKKUN

## relay5QaNote
- 既存 `COMPLETE_CORE` の性能完了判定とは独立してreset QAを管理。
- 本レコードの性能コアは `COMPLETE_CORE`。
- resetBehaviorは設定変更/純電断の直接比較値を優先し、有利区間は通常の区間リセット恩恵から設定変更へ推測転記していない。
