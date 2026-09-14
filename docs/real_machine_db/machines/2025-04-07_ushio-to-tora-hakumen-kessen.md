# Lうしおととら 白面決戦

recordNo: 1718
machineName: Lうしおととら 白面決戦
aliases: うしおととら白面決戦 / Lうしおととら白面決戦VH
manufacturer: アイドル製造 / Daiichi
formalModel: Lうしおととら白面決戦VH
inspectionCode: 4S1786
releaseDate: 2025-04-07
generation: 6.5号機 / スマスロ / AT
systemType: CZ突破型・ボーナス+STループAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- Daiichi公式機種ページを確認。
- グリーンべるとがアイドルによるDaiichiスマスロ第2弾として2025-04-07導入予定を報道。
- HAZUSEで型式 `Lうしおととら白面決戦VH`、検定番号 `4S1786`、導入開始日2025-04-07を確認。
confidence: OFFICIAL_FOR_MACHINE / INDUSTRY_FOR_RELEASE_AND_MANUFACTURING / ANALYSIS_DB_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.2%
- setting3: 100.5%
- setting4: 104.6%
- setting5: 109.4%
- setting6: 114.9%
initialHitBySetting:
- setting1: AT 1/397.3
- setting2: AT 1/389.6
- setting3: AT 1/378.0
- setting4: AT 1/365.6
- setting5: AT 1/360.0
- setting6: AT 1/356.1
czInitialBySetting:
- setting1: 1/178.0
- setting2: 1/175.6
- setting3: 1/169.7
- setting4: 1/164.5
- setting5: 1/161.9
- setting6: 1/159.0
baseGamesPer50: 約33.0G/50枚
netIncrease:
- ST区間: 約1.2枚/G
- BONUS: 約5.0枚/G
basicPayout:
- うしとらBONUS: 純増約5.0枚/G、20〜300G
- メインAT: BONUSとSTのループ率70%以上
- 上位AT `極限ループ`: BONUS+ST約81%ループ
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- CZ間天井: 通常最大600G+αでCZ。
- AT間天井: 最大2500GでAT濃厚のうしとらチャンス。
- うしとらモード滞在中はCZ当選時にうしとらCZ以上。
- 実機完全再現用の通常時全状態移行/CZ内部抽選は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_MULTI_SOURCE_RESET_AND_POWER_DATA
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET（機種別解析で確認）。
- CZ間/AT間天井: RESET。CZ間天井は通常600G+α → 300Gへ短縮。
- 内部モード: RESET / 再抽選。
- 内部状態: RESET。高確スタートの可能性あり。
- うしとらモード移行までのCZスルー規定回数の初期抽選が優遇。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井、内部モード、内部状態を引き継ぐ扱い。
- 設定変更/据え置き比較と純電断表の方向性が一致。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: 天井（CZ間・AT間）、内部状態、内部モード、有利区間を引き継ぐ。
- 開始ステージは調査中資料が残るため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_CARRY / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: CZ間/AT間ともRESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCZCeiling: 600G+α
resetCZCeiling: 300G
normalATCeiling: 最大2500G
resetATCeiling: 公開された固定短縮値なし（RESET後に通常抽選）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: うしとらモード移行までのCZスルー規定回数を再抽選し、朝一用に優遇。
- 公開朝一値（設定1）: 0スルー1.6% / 1スルー5.1% / 2スルー27.7% / 3スルー8.9% / 4スルー56.7%。
- 高設定ほど浅い規定スルー回数が選択されやすいことを解析資料で確認。
- 据え置き・純電断: 内部モード引継ぎ。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### stateAfterReset
- 設定変更: 内部状態RESET。高確スタートの可能性あり。
- 据え置き・電源OFF→ON: 引継ぎ。
- リセット直後の低確/高確/超高確具体振り分けは十分な再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECTION

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き・純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_RESET_TABLE

### resetBenefits
- CZ天井600G+α → 300Gへ短縮。
- 1回目のCZはAT濃厚の `櫛削りノ儀` へ昇格しやすい。
- 設定変更後128G以内にCZ当選した場合、約10%で櫛削りノ儀へ昇格。
- うしとらモード移行までのCZスルー規定回数初期抽選が優遇。
- 複数解析資料で朝一リセット恩恵込みの出玉率100%OVERとされるが、条件依存のため性能コア機械割とは分離。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### resetPenalties
- 前日のCZ間/AT間ゲーム数、内部モード、内部状態を失う。
- 設定変更固有の公開された数値的不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 朝一でCZ間300G+αを明確に超えてもCZ非当選なら据え置き濃厚材料。
- 朝一早期の櫛削りノ儀やうしとらCZ以上はリセット推測材料だが単独確定ではない。
- 本機固有ガックン条件/発生率は機種名・型式・Daiichi/アイドル・設定変更/据え置き/電源OFF ONで再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_300G_BOUNDARY / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCZCeiling: 600G+α
resetCZCeiling: 300G
resetFirstCZKushikezuriUpgradeWithin128G: 約10%
resetUshitoraModeRuleSetting1: 0回1.6% / 1回5.1% / 2回27.7% / 3回8.9% / 4回56.7%
resetEffectivePayoutClaim: 100%OVER（解析上の朝一条件値。公表機械割とは別定義）

## conflicts
- 明確な性能コア数値競合は今回確認せず。
- `RESET_EFFECTIVE_PAYOUT_DEFINITION_CAUTION`: 「リセット恩恵込み100%OVER」は解析/期待値条件に依存し、公表設定1機械割97.9%と定義が異なるためCONFLICTではなく別定義として保持。

## missingFields
- 純電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の低確/高確/超高確具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 客側から設定変更を確定できる単独表示/ランプ挙動: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- Daiichi公式: https://daiichi777.jp/pachislot/slot_ushitora2/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30269/greenbelt
- HAZUSE 型式/検定番号/天井/ベース: https://hazuse.com/hd/4s1786/
- ちょんぼりすた 基本/天井/朝一/モード: https://chonborista.com/slot/d-light/229780/
- SLOT HACK 朝一設定変更/電源OFF ON: https://slothack.net/matome/162593/
- スロパチクエスト リセット恩恵/朝一モード: https://www.slopachi-quest.com/article/resets/
- 6確 基本/朝一/純電断整理: https://www.kaku6.jp/slot/ushiototora/
- Ativo 型式/検定番号/設定別CZ・AT: https://ativo.jp/2025/03/03/l%E3%81%86%E3%81%97%E3%81%8A%E3%81%A8%E3%81%A8%E3%82%89%E7%99%BD%E9%9D%A2%E6%B1%BA%E6%88%A6vh/

## researchNotes
- 朝一CZ天井300G、128G以内CZ時約10%櫛削りノ儀、うしとらモード規定スルー優遇は朝一客行動に直接影響するためv0.7対象として収録。
- 通常時全状態移行率、CZ内部の細かな抽選、ST/上位AT詳細抽選は実機完全再現用のため収集対象外。
