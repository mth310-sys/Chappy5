# A-SLOT+ ディスクアップ ULTRAREMIX

recordNo: 1701
machineName: A-SLOT+ ディスクアップ ULTRAREMIX
aliases: ディスクアップ ウルトラリミックス / L DISCUPウルトラリミックス XR
manufacturer: Sammy（販売/ブランド） / タイヨーエレック（製造）
formalModel: L DISCUPウルトラリミックス XR
inspectionCode: 4S1442
releaseDate: 2025-01-20
generation: 6.5号機 / スマスロ
systemType: AT / 技術介入 / 疑似ボーナス
settings: 1 / 2 / 5 / 6（設定Lあり・通常運用設定外）
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEで型式 `L DISCUPウルトラリミックス XR`、検定番号 `4S1442`、導入開始日2025-01-20、メーカーSammyを確認。
- Ativoも型式・検定番号・製造タイヨーエレックを一致して掲載。
- Pachibeeは導入日2025-01-20、Sammy、6.5号機AT・疑似ボーナス仕様を掲載。
- Amusement Japanは2024-11-14のSammy発表を報じ、タイヨーエレック製、2025年1月中旬導入予定とする。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 99.3% / 完全攻略103.0%
- setting2: 100.2% / 完全攻略103.8%
- setting5: 103.6% / 完全攻略107.2%
- setting6: 107.7% / 完全攻略111.5%
bonusBySetting:
- setting1: BIG 1/287.2 / REG 1/495.3 / 合算 1/181.8
- setting2: BIG 1/284.3 / REG 1/477.2 / 合算 1/178.2
- setting5: BIG 1/273.8 / REG 1/398.6 / 合算 1/162.3
- setting6: BIG 1/260.9 / REG 1/334.1 / 合算 1/146.5
initialHitBySetting: ボーナス合算 1/181.8 → 1/146.5
baseGamesPer50: 約32.2G/50枚（設定1）
netIncrease:
- DJ ZONE / DANCE TIME: 約0.5枚/G
- DANCE TIME REMIX: 約1.5枚/G
- 疑似ボーナス中: 約6.5枚/G
basicPayout:
- BIG: 平均約260枚
- REG: 約58枚（参考値）
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はボーナス当選を軸に、BIG後はAT `DANCE TIME` / `DJ ZONE` へ接続する技術介入型AT。
- DANCE TIME REMIXはループ率管理型の上位ATで純増約1.5枚/G。
- 天井非搭載。通常ゲーム数による天井狙いはN/A。
- 設定Lは待機中の下パネル点滅で識別される特殊設定で、本DBの通常性能比較設定1/2/5/6から分離する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_INTERNAL_STATE_DETAILS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 有利区間リセット後は通常時へ移行。
- 演出モードはREMIXモードへ。
- 液晶メニュー情報はデフォルトへ。
- リールガックンは発生しない。
- 天井非搭載のためゲーム数天井短縮・周期短縮はN/A。
- ボーナス成立状態、DT/DZ/DTRストック・残G等を設定変更した場合の個別RAM消去契約は、主要解析・旧DB系を再探索しても公開根拠を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECT_RESET_TABLE + UNVERIFIED_FOR_DEEP_RAM_DETAILS

### carryOverBehavior
- 据え置き時は有利区間を引き継ぐ。
- 据え置き朝一の演出モードは解析表上REMIXモード。
- 天井非搭載のため天井G引継ぎはN/A。
- 通常時のボーナス成立状態、ATストック等の据え置き細部は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_CARRY_OVER / UNVERIFIED_FOR_DEEP_RAM_DETAILS

### powerCycleBehavior
- 純電源OFF→ONではリールガックンなし。
- 演出モードはREMIXモードへ。ただしボーナス・AT中に電源OFF→ONした場合は当該状態を引き継ぐ。
- 液晶メニュー情報はデフォルトへ。
- 有利区間について、設定変更でRESET・据え置きでCARRY_OVERという機種別解析と整合するため、純電断単独で設定変更相当の有利区間RESETとは扱わない。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_DIRECT_TABLE

### gameCounterReset
- 天井ゲーム数: N/A（天井非搭載）。
- 液晶メニュー情報は設定変更・電源OFF→ONともデフォルトへ戻るが、内部天井カウンタを意味しない。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: N/A
resetCeiling: N/A
resetCeilingShortening: NONE_NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更後の演出モード: REMIXモード。
- 据え置き朝一: REMIXモード。
- 純電源OFF→ON: REMIXモード（ボーナス・AT中は状態引継ぎ）。
- これは演出モードであり、天井短縮等を伴う内部通常A/B等の朝一モードとは区別する。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_DIRECT_TABLE

### stateAfterReset
- 有利区間リセット後は通常時へ移行。
- 設定変更専用の高確/低確振り分け等の公開数値は再探索しても確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NORMAL_STATE_RETURN / UNVERIFIED_FOR_HIDDEN_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- エンディング終了後にもRESETし、RESET後は通常時へ移行。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_DIRECT_TABLE

### resetBenefits
- 天井短縮: N/A（天井非搭載）。
- 設定変更専用のCZ優遇・モード優遇・朝一当選率等: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間RESET自体は確認済みだが、朝一客AI用の固定数値恩恵は確認できない。
confidence: ANALYSIS_HIGH + PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetPenalties
- 天井非搭載のため設定変更で失われる天井ゲーム進行はN/A。
- 設定変更専用の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / STRUCTURAL_NA

### resetDetection
- リールガックンは設定変更・電源OFF→ONとも「ナシ」のため変更判別には使用不可。
- 有利区間ランプでも設定変更/据え置き判別不可。
- 演出モードも設定変更・据え置き朝一ともREMIXモードのため確定判別材料にならない。
- 液晶メニュー情報も設定変更・電源OFF→ONともデフォルト化するため単独判別には不向き。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### numericResetData
normalCeiling: N/A
resetCeiling: N/A
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
gakkun: NONE
advantageousSectionLampDetection: NOT_AVAILABLE

### publicMorningNumbers
- 設定変更専用の天井短縮値: N/A。
- 設定変更専用のモード振り分け、高確移行率、CZ/ボーナス優遇率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常性能のボーナス合算1/181.8〜1/146.5は朝一専用値ではない。

## conflicts
- 事前・一部旧資料にBIG確率の表記揺れが疑われたため再照合。Amusement Japan、なな徹、必勝本、Ativo/HAZUSE系で設定1 BIG `1/287.2` が一致したためcanonicalを1/287.2とする。今回、`1/282.2` を一次・準一次資料として再固定できなかったため性能CONFLICTには採用せず `UNVERIFIED_OLD_VALUE_1_OVER_282_2` としてのみ扱う。

## missingFields
- 設定変更時のボーナス成立状態・AT残G/ストック等の深部RAM契約: UNVERIFIED_AFTER_RESEARCH
- 朝一専用のモード/状態振り分け数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用の朝一当選優遇率: NONE_CONFIRMED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- INDUSTRY_ANNOUNCEMENT: https://amusement-japan.co.jp/article/detail/10004620/
- ANALYSIS_HIGH_MODEL: https://hazuse.com/machine/pachislot/4S1442/
- ANALYSIS_HIGH_CORE: https://nana-press.com/kaiseki/machine/883/25662/
- ANALYSIS_HIGH_RESET: https://nana-press.com/kaiseki/machine/883/26893/
- ANALYSIS_HIGH_ADVANTAGEOUS_SECTION: https://nana-press.com/kaiseki/machine/883/26894/
- ANALYSIS_HIGH_RESET_DIRECT: https://hisshobon.com/machineinfo/85471/
- ANALYSIS_HIGH_CORE_RESET: https://p.hisshobon.jp/vpage/2670/2
- ANALYSIS_HIGH_BONUS: https://hisshobon.com/machineinfo/85475/
- ANALYSIS_HIGH_OVERVIEW: https://www.pachibee.jp/machines/about/224120006
- INDUSTRY_MODEL_SECONDARY: https://ativo.jp/2024/11/22/l-%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97-ultraremix/
