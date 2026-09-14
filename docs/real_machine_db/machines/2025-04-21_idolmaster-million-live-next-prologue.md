# スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ

recordNo: 1721
machineName: スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ
aliases: Lアイドルマスター ミリオンライブ！ ネクストプロローグ / Lアイマス / スマスロアイマス
manufacturer: 山佐 / 山佐ネクスト
formalModel: LパチスロアイドルマスターミリオンライブHC
inspectionCode: 4S1770
releaseDate: 2025-04-21
generation: 6.5号機 / スマスロ / A+AT
systemType: リアルボーナス+A+AT・規定ゲーム数/CZ/直撃抽選型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEは型式 `LパチスロアイドルマスターミリオンライブHC`、検定番号 `4S1770`、導入開始日2025-04-21、メーカー山佐を掲載。
- 業界発表記事でも型式名 `LパチスロアイドルマスターミリオンライブHC`（山佐製）を確認。
- 1geki、P-WORLD、ちょんぼりすた等も2025-04-21導入で一致。
confidence: INDUSTRY / ANALYSIS_DB_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.5%
- setting3: 101.1%
- setting4: 105.2%
- setting5: 110.1%
- setting6: 114.3%
czBySetting:
- setting1: 1/428.0
- setting2: 1/415.5
- setting3: 1/378.4
- setting4: 1/353.8
- setting5: 1/322.7
- setting6: 1/306.2
initialHitBySetting:
- setting1: ボーナス初当り 1/347.0
- setting2: 1/337.4
- setting3: 1/314.0
- setting4: 1/280.6
- setting5: 1/256.8
- setting6: 1/242.0
baseGamesPer50: 約33.2G/50枚
netIncrease: AT 約0.4枚/G
basicPayout:
- リアルボーナス平均獲得: 約116枚
- AT「ミリオンライブ」: 1セット30G、純増約0.4枚/G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時モードは通常 / チャンス / 天国。
- モード別最大天井は通常800G+α / チャンス500G+α / 天国100G+α。
- CZ「グロウアップチャレンジ」のボーナス期待度は約40%。
- 設定変更時は通常モードを選択せず、チャンス以上から開始する。
- 実機完全再現用の全内部抽選・全移行テーブルは収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数: RESET。
- CZ・ボーナス状態: 再抽選。
- モード: 再抽選。チャンス以上が確定。
- 内部状態: RESET。
- 有利区間: RESET。
- ステージ: 資料間で「ランダム」と「夕方ステージ」の表記差があるためCONFLICTとして保持。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、ゲーム数、内部状態を引き継ぐ。
- 据え置き時のモードも引継ぎとする機種固有資料と、純電断表のモード引継ぎが整合。
- 前日の内部ゲーム数・状態・モードを保持するため、設定変更後の500G短縮恩恵は発生しない。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### powerCycleBehavior
- 純電源OFF→ON: 天井までのゲーム数を引き継ぐ。
- CZ・ボーナス状態: 引き継ぐ。
- モード: 引き継ぐ。
- ステージ: 必勝本の比較表では夕方ステージへ。
- 内部状態: 機種固有の純電断比較表では独立項目として公開確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: 純電源OFF→ON時の機種固有直接記述を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き時は引継ぎが明記されるが、純電断へ推測転記しない。
confidence: ANALYSIS_HIGH_FOR_GAMES_CZ_BONUS_MODE_STAGE / UNVERIFIED_FOR_STATE_AND_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### ceilingAfterReset
normalCeiling: 最大800G+α
resetCeiling: 最大500G+α
resetCeilingShortening: 300G短縮
- 設定変更後はチャンス以上から開始するため最大500G+α。
- 天国選択時は100G+αが最大天井。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時モード振り分け: 通常 0% / チャンス 75.8% / 天国 24.2%。
- リセット時は必ずチャンス以上から開始。
- 据え置き/純電源OFF→ON: モード引継ぎ。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_MACHINE_SPECIFIC

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 直接比較値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後の高確/超高確開始率など独立した公開数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / UNVERIFIED_FOR_PURE_POWER

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`（据え置き情報からの推測転記はしない）。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / UNVERIFIED_FOR_PURE_POWER

### resetBenefits
- 通常最大800G+αから設定変更後は最大500G+αへ300G短縮。
- 設定変更時はチャンス75.8% / 天国24.2%で、通常モード選択なし。
- 約1/4で天国となり最大100G+α天井。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_MACHINE_SPECIFIC

### resetPenalties
- 設定変更で前日のゲーム数・内部状態・モード・有利区間を失うため、前日が深いゲーム数や有利な状態/モードだった場合は客側に不利となり得る。
- 設定変更固有の追加ペナルティ率・冷遇固定などは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOST_CARRY_VALUES

### resetDetection
- なな徹の機種固有ページではリセット判別を `現在調査中` としている。
- 設定変更後は最大500G+αのため、前日ゲーム数と当日500G超の挙動は据え置き推測材料になり得るが、ボーナス/CZ状態等を含むため単独確定扱いしない。
- 本機固有のリールガックン条件・発生率は、機種名/型式/山佐/朝一/設定変更/リセット/据え置き/ガックン等へ検索語を変え主要解析・旧DB系を再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_DIFFERENCE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 800G+α
resetMaximumCeiling: 500G+α
resetCeilingShortening: 300G
resetModeDistribution:
- chance: 75.8%
- heaven: 24.2%
resetHeavenMaximumCeiling: 100G+α
resetSpecialBenefitRate: 天国24.2%

## conflicts
- `START_STAGE_RANDOM_VS_EVENING`: なな徹の設定変更/据え置き比較表は設定変更時ステージを「ランダム」、必勝本の設定変更/電源OFF→ON比較表は設定変更時・純電断時とも「夕方ステージへ」と記載。資料差を平均・推測せずCONFLICT保持。

## missingFields
- 純電源OFF→ON時の内部状態: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更後の独立した高確/超高確開始率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- HAZUSE 機種情報（型式/検定番号/導入日/純増/機械割）: https://hazuse.com/machine/pachislot/4S1770/
- HAZUSE 詳細（ベース/天井）: https://hazuse.com/hd/4s1770/
- 1geki 機種解析（設定別ボーナス初当り/機械割/ベース）: https://1geki.jp/slot/l_idlmst_mlnp/
- P-WORLD 機種DB（天井/設定別CZ・初当り）: https://www.p-world.co.jp/machine/database/10216
- なな徹 朝一・設定変更挙動（設定変更/据え置き/モード振り分け/有利区間）: https://nana-press.com/kaiseki/machine/921/29071/
- 必勝本 天井&設定変更（設定変更/純電源OFF→ON直接比較表）: https://hisshobon.com/machineinfo/86315/
- ちょんぼりすた（性能/モード別天井/朝一）: https://chonborista.com/slot/yamasa-slot/230706/

## confidenceSummary
corePerformance: HIGH
releaseAndModel: HIGH
resetSettingChange: HIGH
resetCarryOver: HIGH
resetPowerCycle: HIGH_FOR_GAMES_CZ_BONUS_MODE_STAGE / UNVERIFIED_FOR_STATE_AND_ADVANTAGEOUS_SECTION
numericResetData: HIGH
resetDetection: PARTIAL_UNVERIFIED_FOR_GAKKUN

## relay5QaNote
- 既存 `COMPLETE_CORE` の性能完了判定とは独立してreset QAを管理。
- 本レコードの性能コアは `COMPLETE_CORE`。
- resetBehaviorは公開資料で固定可能な箇所を直接記録し、純電断時の内部状態/有利区間とガックンのみ推測せず未検証として残した。
