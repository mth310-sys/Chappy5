# SLOTドルアーガの塔

recordNo: 1752
machineName: SLOTドルアーガの塔
aliases: ドルアーガの塔 / SLOTドルアーガ / ドルアーガ メダル機
manufacturer: ミズホ / MIZUHO
formalModel: S／ドルアーガの塔／ZU
inspectionCode: 4S1143
releaseDate: 2025-09-08
generation: 6号機 / メダル機
systemType: A+AT / リアルボーナス+AT / 技術介入
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEは型式 `S／ドルアーガの塔／ZU`、検定番号 `4S1143`、導入開始日2025-09-08、メーカー ミズホを掲載。
- グリーンべるとの検定通過記事でも `S/ドルアーガの塔/ZU` を確認。
- G-netはメダル機 `S/ドルアーガの塔/ZU` とスマスロ `Lドルアーガの塔ZA` を別型式として同時展開することを明記。
confidence: INDUSTRY_DB / INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
  marketPlay:
  - setting1: 99.0%
  - setting2: 100.3%
  - setting5: 102.3%
  - setting6: 104.9%
  fullTechnicalPlay:
  - setting1: 101.7%
  - setting2: 103.1%
  - setting5: 105.2%
  - setting6: 107.9%
bonusBySetting:
  big:
  - setting1: 1/299.3
  - setting2: 1/291.3
  - setting5: 1/280.1
  - setting6: 1/266.4
  reg:
  - setting1: 1/448.9
  - setting2: 1/436.9
  - setting5: 1/420.1
  - setting6: 1/399.6
  combined:
  - setting1: 1/179.6
  - setting2: 1/174.8
  - setting5: 1/168.0
  - setting6: 1/159.8
baseGamesPer50: 約34.8G（業界資料では約35G表記あり）
netIncrease: AT約0.2枚/G
basicPayout:
- BIG: 平均約252枚
- REG: 最大55枚
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- リアルボーナスとATを組み合わせたA+ATタイプ。
- REG後はAT突入ジャッジを兼ねた約20Gのチャンスタイムがあり、AT非突入時も規定G消化が前提。
- 通常時ゲーム数天井は非搭載。
- スマスロ版とは型式・遊技媒体が異なるため独立レコード化。性能値は複数資料が両仕様共通として直接掲載するため共通値を採用し、推測転記ではない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL_MACHINE_SPECIFIC_POWER_AND_AT_STATE_NOT_PUBLICLY_FIXED
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井非搭載のため、設定変更時のゲーム数天井RESET/短縮はN/A。
- なな徹の朝一/設定変更ページは、設定変更時の有利区間を `リセット` と明記。
- 設定変更時のボーナス成立内部フラグ、AT途中状態、チャンスタイム途中状態等の詳細契約は、機種名・正式型式・メーカー・設定変更/リセット等で再探索しても直接比較資料を固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION / HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_AT_AND_BONUS_INTERNAL_STATE

### carryOverBehavior
- なな徹は据え置き時の有利区間を `引き継ぐ` と明記。
- 天井非搭載のため、据え置き天井進行はN/A。
- ボーナス成立内部フラグ、AT/チャンスタイム途中状態までを列挙した機種固有表は固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION / HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_OTHER_INTERNAL_STATE

### powerCycleBehavior
- 純電源OFF→ONのみを設定変更・据え置きと独立比較し、ボーナス成立内部フラグ、AT、チャンスタイム、有利区間の扱いを列挙した機種固有高優先資料は固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- `電源OFF ON`、`電断`、`電源投入`、正式型式を含めて再探索し、他A+AT機/スマスロ版一般論からは補完していない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### gameCounterReset
settingChange: N/A_NO_GAME_CEILING
carryOver: N/A_NO_GAME_CEILING
powerCycle: N/A_NO_GAME_CEILING
confidence: ANALYSIS_HIGH / MULTI_SOURCE_NO_CEILING

### ceilingAfterReset
normalGameCeiling: NONE
resetGameCeiling: NONE
carryOverGameCeiling: NONE
powerCycleGameCeiling: NONE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用ゲーム数モード、設定変更専用天井モード、固定ゾーン等は公開解析で確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時全抽選・ボーナス契機等は本DB対象外。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 設定変更時のAT/チャンスタイム/ボーナス内部状態の機種固有直接比較は `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 据え置き時の有利区間引継ぎは確認済みだが、そこから全内部状態の引継ぎを推測しない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_ONLY / UNVERIFIED_FOR_DETAILED_STATE

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_STATIONARY

### resetBenefits
- 設定変更専用の天井短縮、朝一モード優遇、初当り/CZ優遇、保証G、公開された恩恵率は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 6確等の後発解析も朝一恩恵なしとして整理している。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 天井・周期天井の宵越し価値を失うタイプではないため、その種の設定変更不利はN/A。
- その他の設定変更固有不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 本機固有のガックン条件・発生率、ランプ/液晶表示による設定変更/据え置き確定判別は、`ガックン`、`リール ガックン`、型式、朝一、設定変更を組み合わせて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため、短縮天井超過による据え置き判別はN/A。
confidence: UNVERIFIED_FOR_DIRECT_RESET_DETECTION

### numericResetData
normalGameCeiling: NONE
resetGameCeiling: NONE
resetMorningModeDistribution: NONE_PUBLISHED
resetMorningBenefitRate: NONE_PUBLISHED
resetMorningPenaltyRate: NONE_PUBLISHED
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues: NONE_FOUND_AFTER_RESEARCH

## conflicts
- 世代ラベルは一撃が「6.6号機」、HAZUSEが別分類表現を用いるため、DBでは規格細分類を断定せず `6号機 / メダル機` として保持。性能値・型式の競合ではない。
- ベースは一撃/なな徹等の約34.8Gと業界資料の約35Gで、丸め差として扱う。
- G-net表の完全攻略出玉率に `1/101.7` 等の表示があるが、他資料と文脈から率の誤フォーマットと判断しcanonicalには101.7%等を採用。

## sourceSearchNotes
- resetBehavior再探索語: `SLOTドルアーガの塔 設定変更 リセット 朝一 据え置き 電源OFF ON`, `S／ドルアーガの塔／ZU 電断`, `ドルアーガ ガックン`, `有利区間`, `AT 引き継ぎ`。
- 資料系統: ユニバーサル公式/業界発表、HAZUSE、グリーンべると、G-net、一撃、なな徹、6確、SLOT HACK等。
- スマスロ版の型式・電源仕様を自動転記せず、共通性能のみ「両仕様共通」と明示した資料から採用。

## sources
retrievedAt: 2026-09-15
- HAZUSE: https://hazuse.com/machine/pachislot/4S1143/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-96513/
- G-net: https://g-net-ps.com/info/s0239/
- 一撃 SLOT版: https://1geki.jp/slot/s_druaga/
- なな徹 機種概要: https://nana-press.com/kaiseki/machine/1009/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/1009/31589/
- 6確: https://www.kaku6.jp/slot/druaga/
- SLOT HACK: https://slot-hack.com/kaiseki/druaga/
- ユニバーサル公式: https://www.universal-777.com/product/slot/druaga/
