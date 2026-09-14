# Lダブルアタック2 with OZS-1000＆RAPHAEL

recordNo: 1684
machineName: Lダブルアタック2 with OZS-1000＆RAPHAEL
aliases: Lダブルアタック2 / ダブルアタック2 withラファエル
manufacturer: オーイズミ
formalModel: Lダブルアタック2EX
inspectionCode: 430240
releaseDate: 2024-11-18
generation: 6.5号機 / スマスロ
systemType: AT / 規定シンボル回数 + CZ + ゲーム数上乗せ型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技通信/P-WORLD業界記事はオーイズミ発表機として型式 `Lダブルアタック2EX` を掲載。
- HAZUSEは検定番号 `430240`、型式 `Lダブルアタック2EX`、導入開始日2024-11-18を掲載。
- P-Summaのパチスロサミット2024レポートも11月18日導入予定と掲載。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 99.3%
- setting3: 101.9%
- setting4: 105.0%
- setting5: 108.7%
- setting6: 111.5%
initialHitBySetting:
- setting1: AT 1/259.9
- setting2: AT 1/250.3
- setting3: AT 1/237.1
- setting4: AT 1/217.4
- setting5: AT 1/200.2
- setting6: AT 1/189.5
czBySetting:
- CHANCE ZONE SEVEN: 1/433.4 / 1/414.6 / 1/402.4 / 1/349.9 / 1/317.3 / 1/296.5
- BIGPOT CHANCE SEVEN: 約1/13538 / 約1/13023 / 約1/12031 / 約1/10716 / 約1/8881 / 約1/7816
baseGamesPer50:
- setting1: 約33.4G
- setting2: 約33.7G
- setting3: 約34.0G
- setting4: 約34.4G
- setting5: 約34.7G
- setting6: 約35.0G
netIncrease:
- 通常AT「BONUS GAME」: 約2.5枚/G
- 上位AT「HYPER BONUS」: 約5.0枚/G
basicPayout:
- BONUS GAME: 初期50〜300G、ゲーム数上乗せ型
- HYPER BONUS: 純増約5.0枚/G、上乗せ性能は通常AT同等
- BIGPOT CHANCE SEVEN: 7G、上位AT期待度約73%
confidence: ANALYSIS_HIGH + INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はシンボル図柄成立回数を中心にAT抽選。通常A/B・チャンスA/B・天国・超天国の6モード。
- 最大規定シンボル回数は通常A63回 / 通常B47回 / チャンスA31回 / チャンスB15回 / 天国7回 / 超天国7回。
- ゲーム数天井は999G+α、シンボル回数天井は最大63回。いずれもAT当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_STAGE_AND_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、ゲーム数/シンボル回数天井、内部状態、モードをリセット/再抽選。
- モードは必ず通常B以上からスタートするため、シンボル回数天井は最大63回→最大47回へ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、モードを引き継ぐ。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは有利区間、天井、内部モードを引き継ぐとする機種別資料を確認。
- 必勝本の設定変更/電源OFF-ON比較表ではゲーム数天井、シンボル揃い回数、状態、モードすべて引継ぎ。
- 開始ステージは設定変更/電断とも調査中で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: 999G+αのゲーム数天井進行とシンボル成立回数をリセット。
- 据え置き: 両方引継ぎ。
- 純電源OFF→ON: 両方引継ぎ。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalGameCeiling: 999G+α
normalSymbolCeiling: 最大63回
resetGameCeiling: 999G+α（短縮公開なし）
resetSymbolCeiling: 最大47回 / 通常B以上濃厚
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は通常Aを選択せず、通常B以上を設定別に再抽選。
- 設定1: 通常B37.1% / チャンスA37.5% / チャンスB12.5% / 天国12.5% / 超天国0.4%
- 設定2: 34.8% / 39.1% / 13.3% / 12.5% / 0.4%
- 設定3: 32.0% / 40.6% / 14.1% / 12.5% / 0.8%
- 設定4: 28.9% / 42.2% / 15.6% / 12.5% / 0.8%
- 設定5: 25.4% / 43.8% / 17.2% / 12.5% / 1.2%
- 設定6: 22.3% / 45.3% / 18.8% / 12.5% / 1.2%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時は内部状態を再抽選、据え置き/純電源OFF→ONでは引継ぎ。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き/純電源OFF→ON: 有利区間引継ぎ。
- 設定変更以外ではエンディング終了後にも有利区間リセットがあり、その際はラファエルスタンバイモード経由でBIGPOT CHANCE SEVENへ移行するが、設定変更時はこの恩恵の対象外。
confidence: ANALYSIS_HIGH

### resetBenefits
- 初期モード通常B以上濃厚。
- シンボル回数天井が最大63回→最大47回へ短縮。
- 設定別の朝一モード振り分けが公開されており、高設定ほどチャンスA/B・超天国側が相対的に増える。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時限定の主要な明確な不利要素は、公式/業界/主要解析/旧DB系統を変えて再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 朝一シンボル揃い回数が47回を超えてAT非当選なら据え置き濃厚材料。
- 開始ステージによる判別は主要資料で「調査中」。
- `Lダブルアタック2EX` / `オーイズミ` / `ダブルアタック2` と「ガックン/設定変更/据え置き/朝一」を組み合わせて再探索したが、本機固有ガックン条件/発生率は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SYMBOL_CEILING / UNVERIFIED_FOR_STAGE_AND_GAKKUN

### numericResetData
normalGameCeiling: 999G+α
normalSymbolCeiling: 63回
resetSymbolCeiling: 47回
resetModeDistributionBySetting: PUBLIC_FULL_TABLE_AVAILABLE
powerCycleGameCeiling: CARRY_OVER
powerCycleSymbolCount: CARRY_OVER
powerCycleMode: CARRY_OVER
powerCycleState: CARRY_OVER
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更時: 通常B以上100%。
- 設定1〜6の通常B選択率: 37.1 / 34.8 / 32.0 / 28.9 / 25.4 / 22.3%。
- チャンスA: 37.5 / 39.1 / 40.6 / 42.2 / 43.8 / 45.3%。
- チャンスB: 12.5 / 13.3 / 14.1 / 15.6 / 17.2 / 18.8%。
- 天国: 全設定12.5%。
- 超天国: 0.4 / 0.4 / 0.8 / 0.8 / 1.2 / 1.2%。
- 朝一最大シンボル天井: 47回。

## conflicts
- 現在確認した主要資料間で性能コア/朝一モード振り分けの重大な数値競合なし。
- 一部解析ページは「天井999G+α」と併記するが、設定変更恩恵として公開されているのはシンボル回数側63→47回短縮。ゲーム数天井短縮とは解釈しない。

## missingFields
- 設定変更/電源OFF→ON時の開始ステージ確定値: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_CORE_AND_RESET / LIMITED_FOR_STAGE_AND_GAKKUN
sources:
- 遊技通信/P-WORLD業界記事: https://news.p-world.co.jp/articles/28758/yugitsushin
- Amusement Japan/P-WORLD業界記事: https://news.p-world.co.jp/articles/28770/amusement
- P-Summa パチスロサミット2024: https://psumma.jp/featured/62886/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0090/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10109
- パチ&スロ必勝本 基本スペック/天井&設定変更: https://p.hisshobon.jp/vpage/2655/2
- パチ&スロ必勝本 モード移行: https://hisshobon.com/machineinfo/84953/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/832/25289/
- なな徹 設定判別/モード振り分け: https://nana-press.com/kaiseki/machine/832/25285/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/832/25287/
- スロぱちクエスト 天井/朝一: https://www.slopachi-quest.com/article/watack2-tenjou/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/220290/
