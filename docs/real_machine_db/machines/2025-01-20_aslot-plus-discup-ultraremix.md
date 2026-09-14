# A-SLOT+ ディスクアップ ULTRAREMIX

recordNo: 1701
machineName: A-SLOT+ ディスクアップ ULTRAREMIX
aliases: A-SLOT＋ディスクアップ ULTRAREMIX / ディスクアップ ULTRAREMIX / L DISCUPウルトラリミックス XR
manufacturer: サミー（ブランド/販売） / タイヨーエレック（製造）
formalModel: L DISCUPウルトラリミックス XR
inspectionCode: 4S1442
releaseDate: 2025-01-20
generation: 6.5号機 / スマスロ / AT技術介入
systemType: 擬似ボーナス + 低純増AT / 技術介入
settings: 1 / 2 / 5 / 6（設定L搭載）
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- サミー発表を報じたアミューズメントジャパン/遊技通信でタイヨーエレック製、2025年1月中旬予定、型式 `L DISCUPウルトラリミックス XR` を確認。
- HAZUSEで型式 `L DISCUPウルトラリミックス XR`、検定番号 `4S1442`、導入開始日2025-01-20を確認。
- Pachibee/K-Naviも2025-01-20導入で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 市場予測99.3% / 完全攻略103.0%
- setting2: 市場予測100.2% / 完全攻略103.8%
- setting5: 市場予測103.6% / 完全攻略107.2%
- setting6: 市場予測107.7% / 完全攻略111.5%
bonusBySetting:
- setting1: BIG 1/287.2 / REG 1/495.3 / 合算 1/181.8
- setting2: BIG 1/284.3 / REG 1/477.2 / 合算 1/178.2
- setting5: BIG 1/273.8 / REG 1/398.6 / 合算 1/162.3
- setting6: BIG 1/260.9 / REG 1/334.1 / 合算 1/146.5
initialHitBySetting: ボーナス合算 1/181.8 → 1/146.5
baseGamesPer50: 約32.2G/50枚（設定1）
netIncrease:
- 擬似ボーナス: 約6.5枚/G
- DANCE TIME / DJ ZONE: 約0.5枚/G
- DANCE TIME REMIX: 約1.5枚/G
basicPayout:
- BIG: 平均約260枚
- REG: 平均約58枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 天井非搭載。
- BIG後のAT `DANCE TIME` は1セット20G、`DJ ZONE` はBIG中の技術介入等で獲得したG数を消化。
- 上位AT `DANCE TIME REMIX` は1セット50G、継続率約66% / 77% / 88%。
- 設定Lは下パネル常時明滅で識別可能と業界記事が明記。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_DIRECT_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時、有利区間はRESET。
- 天井非搭載のため天井G数・周期・CZ天井のリセット恩恵はN/A。
- 演出モードはREMIXモードへ移行。
- 液晶メニュー情報はデフォルトへ戻る。
- リールガックンは発生しない。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### carryOverBehavior
- 据え置きでは有利区間を引き継ぐ。
- 天井非搭載のため天井進行のCARRY_OVERはN/A。
- 据え置き専用の朝一短縮・モード優遇は確認されない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 必勝本の設定変更/電源OFF→ON直接比較で、純電断後も演出モードはREMIXモードへ。ただしボーナス・AT中は内部状態を引き継ぐと明記。
- 液晶メニュー情報はデフォルトへ戻る。
- リールガックンは発生しない。
- 天井非搭載のため天井進行についてはN/A。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### gameCounterReset
- 天井ゲーム数: N/A（天井非搭載）。
- 朝一天井G数による変更判別は不可。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: N/A
resetCeiling: N/A
resetCeilingShortening: NONE_NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常時の天井系モード/CZモードはN/A。
- 演出モードは設定変更・純電断ともREMIXモードへ戻る。
- ボーナス・AT中の純電断は演出/内部進行を引き継ぐ。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 高確/CZなど通常時の朝一内部状態優遇は確認されずN/A。
- 純電断時のボーナス・AT中状態は引き継ぎ。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 有利区間リセット契機は設定変更時およびエンディング終了後。リセット後は通常時へ移行。
confidence: ANALYSIS_HIGH

### resetBenefits
- 天井短縮・朝一CZ優遇・朝一専用AT当選率: NONE_NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH。
- 技術介入機としての完全攻略機械割は朝一恩恵ではなく通常性能として管理。
confidence: ANALYSIS_HIGH

### resetPenalties
- 天井進行・CZポイント等の喪失はN/A。
- 設定変更固有の公開不利数値はNONE_CONFIRMED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH

### resetDetection
- リールガックン: 設定変更・電源OFF→ONとも「ナシ」。ガックンによる変更判別不可。
- 演出モード: どちらもREMIXモードへ戻るため単独で変更判別不可。
- 液晶メニュー情報: どちらもデフォルトへ戻るため単独で変更判別不可。
- 設定Lは下パネル常時明滅で識別可能だが、これは朝一変更判別ではなく設定L判別。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### numericResetData
normalCeiling: N/A
resetCeiling: N/A
resetModeDistribution: N/A
resetStateDistribution: N/A
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
gakkun: NONE_BOTH_SETTING_CHANGE_AND_POWER_CYCLE
advantageousSectionOnSettingChange: RESET
advantageousSectionOnCarryOver: CARRY_OVER

### publicMorningNumbers
- 設定変更専用の短縮天井・モード振り分け・CZ/AT優遇率: N/A / NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- NONE_CONFIRMED_FOR_CORE_VALUES_AFTER_CROSSCHECK。

## missingFields
- 設定変更専用の追加朝一数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH（天井非搭載・直接比較表で主要挙動確認済み）。

## sources
retrievedAt: 2026-09-14
- OFFICIAL_PRODUCT_REFERENCE: https://www.sammy.co.jp/japanese/product/pachislot/dis_up_ultraremix/
- INDUSTRY_ANNOUNCEMENT: https://amusement-japan.co.jp/article/detail/10004620/
- INDUSTRY_PWORLD_AMUSEMENT: https://news.p-world.co.jp/articles/29457/amusement
- INDUSTRY_PWORLD_GREENBELT: https://news.p-world.co.jp/articles/29472/greenbelt
- INDUSTRY_MODEL: https://news.p-world.co.jp/articles/29463/yugitsushin
- ANALYSIS_HIGH_MODEL: https://hazuse.com/machine/pachislot/4S1442/
- ANALYSIS_HIGH_CORE: https://www.pachibee.jp/machines/index/224120006
- ANALYSIS_HIGH_CORE: https://nana-press.com/kaiseki/machine/883/25662/
- ANALYSIS_HIGH_RESET_DIRECT: https://hisshobon.com/machineinfo/85471/
- ANALYSIS_HIGH_RESET_ADVANTAGEOUS_SECTION: https://nana-press.com/kaiseki/machine/883/26893/
- ANALYSIS_HIGH_CORE_SECONDARY: https://chonborista.com/slot/sammy-slot/226240/
- ANALYSIS_RELEASE_DATE: https://p-kn.com/slot/4254/
