# 沖ドキ！ゴージャス 25φ

recordNo: 1693
machineName: 沖ドキ！ゴージャス 25φ
aliases: 沖ドキ！ゴージャス-25 / S沖ドキ！ゴージャス25Φ / S／沖ドキ！BLACK／GS
manufacturer: ミズホ
formalModel: S／沖ドキ！BLACK／GS
inspectionCode: 4S1049
releaseDate: 2024-12-02
generation: 6.6号機 / メダル機 / 25φ
systemType: AT / 完全告知・擬似ボーナス
settings: 1 / 2 / 3 / 5 / 6 / L
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技通信はミズホ製型式 `S／沖ドキ！BLACK／GS` として発表。
- パチビー等で2024-12-02導入、25φ版を確認。
- 検定番号4S1049は型式別機種DBで照合。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.2%
- setting2: 98.7%
- setting3: 101.9%
- setting5: 104.9%
- setting6: 109.0%
- settingL: 公開出玉率なし / 下パネル点滅で報知
initialHitBySetting:
- setting1: 初当り1/288.7 / BIG1/213.7 / REG1/288.5
- setting2: 初当り1/278.4 / BIG1/204.2 / REG1/279.6
- setting3: 初当り1/267.2 / BIG1/187.3 / REG1/265.0
- setting5: 初当り1/256.5 / BIG1/171.6 / REG1/250.9
- setting6: 初当り1/246.4 / BIG1/159.4 / REG1/239.0
baseGamesPer50: 約32G/50枚
netIncrease: 約3.5枚/G
basicPayout:
- BIG BONUS: 60G / 約210枚
- REG BONUS: 25G / 約90枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常A/B天井999G、引き戻し/チャンス200G、天国以上32G。
- 有利区間は6,000G対応。
- 30φ版と共通性能として解析されるが、製造メーカー・型式・φ径が異なるため独立レコード化。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_DIRECT_POWER_CYCLE_AND_MACHINE_SPECIFIC_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更で有利区間をリセットし、モードを再抽選。
- 朝一モードは通常A50.0% / 通常B10.2% / チャンス39.8%。
- チャンスモードは天井200G。
- 非有利区間→有利区間移行時に通常A/Bが選ばれた場合、25.0%で天井を999Gから399Gへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 設定変更を伴わない据え置き時は朝一リセット専用のモード再抽選・短縮恩恵は発生しない。
- 機種固有の据え置き時全項目比較表は再探索後も直接固定できず、モード/天井の詳細な引継ぎ契約は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH` として一般仕様から補完しない。
confidence: ANALYSIS_HIGH_FOR_NO_RESET_BENEFIT / UNVERIFIED_FOR_FULL_DIRECT_CARRY_TABLE

### powerCycleBehavior
- 純電源OFF→ONのみのモード・天井・有利区間について、機種固有の直接比較表を高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き情報から純電断挙動を推定転記しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 設定変更: 朝一モード再抽選。通常A/B選択時には25%で399G短縮、チャンス選択時は200G天井。
- 据え置き/純電源OFF→ONの内部G数引継ぎは直接資料不足のため `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_FOR_DIRECT_CARRY

### ceilingAfterReset
normalCeiling: 通常A/B 999G / 引き戻し・チャンス 200G / 天国以上32G
resetChanceModeProbability: 39.8%
resetChanceModeCeiling: 200G
resetNormalABCeilingShorteningProbability: 25.0%
resetNormalABShortenedCeiling: 399G（400Gで告知）
approxReset400GCeilingCoverage: 約65%（チャンス移行分を含む解析表現）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A: 50.0%
- 通常B: 10.2%
- チャンス: 39.8%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 独立した高確/低確状態の朝一振り分けは物差し必須値として固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: UNVERIFIED_FOR_SEPARATE_STATE_LAYER

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 設定変更以外の有利区間リセット時は非有利区間モードへ移行し、赤ドキ移行抽選の対象。ただし解析は設定変更時の赤ドキ恩恵を除外しているため朝一恩恵へ混入しない。
- 据え置き/純電源OFF→ONのみの直接記載は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_FOR_DIRECT_POWER_CYCLE

### resetBenefits
- 39.8%でチャンスモード（200G天井）。
- 通常A/B選択時も25.0%で399G天井へ短縮。
- 解析上、両要素を合わせ設定変更後は約65%で400G以内天井となる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日のモード/天井蓄積は設定変更で再抽選対象となる。
- 設定変更固有の追加的不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一200G以内の当選はチャンスモード期待材料、399～400G当選は短縮天井期待材料だが単独で変更確定にはしない。
- 解析サイトのリセット判別欄は現在調査中のものがあり、本機固有ガックン条件・発生率も正式型式/メーカー/シリーズ名と検索語を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIORAL_HINTS / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetModeNormalA: 50.0%
resetModeNormalB: 10.2%
resetModeChance: 39.8%
chanceModeCeiling: 200G
normalABCeiling: 999G
normalABShortenTo399Probability: 25.0%
shortenedCeiling: 399G
approxWithin400CeilingAfterReset: 約65%
settingChangeAdvantageousSection: RESET
powerCycleAdvantageousSection: UNVERIFIED_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 通常A 50.0% / 通常B 10.2% / チャンス 39.8%。
- チャンスモード天井200G。
- 通常A/B選択時25.0%で399G天井短縮。
- 設定変更後は解析上約65%で400G以内天井。

## conflicts
- 朝一モード振り分けについて一部後発整理サイトに通常A57.03% / 通常B9.77% / チャンス33.20%表記があるが、必勝本・なな徹・P-WORLD・一撃系で50.0/10.2/39.8が一致。平均化せず `CONFLICT_50.0_10.2_39.8_VS_57.03_9.77_33.20` として保持し、canonicalは複数高信頼一致値を採用。

## missingFields
- 純電源OFF→ONの機種固有直接比較表: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン: UNVERIFIED_AFTER_RESEARCH
- 独立した内部状態初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- INDUSTRY: https://news.p-world.co.jp/articles/29091/yugitsushin
- ANALYSIS_HIGH: https://www.pachibee.jp/machines/index/224100009
- ANALYSIS_HIGH: https://www.pachibee.jp/machines/kouryaku/224100009
- ANALYSIS_HIGH: https://hisshobon.com/machineinfo/85011/
- ANALYSIS_HIGH: https://hisshobon.com/machineinfo/85021/
- ANALYSIS_HIGH: https://nana-press.com/kaiseki/machine/856/25731/
- ANALYSIS_HIGH: https://nana-press.com/kaiseki/machine/856/25727/
- ANALYSIS_HIGH: https://1geki.jp/slot/s_okidoki_gorgeous/3/
- ANALYSIS_SINGLE_MODEL_ID: https://ativo.jp/2024/10/08/%EF%BD%93%E6%B2%96%E3%83%89%E3%82%AD%E3%82%B4%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B9-25%CF%86/
