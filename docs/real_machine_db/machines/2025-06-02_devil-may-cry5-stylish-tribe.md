# スマスロ デビル メイ クライ5 スタイリッシュトライブ

recordNo: 1728
machineName: スマスロ デビル メイ クライ5 スタイリッシュトライブ
aliases: Lデビルメイクライ5 / DMC5 スタイリッシュトライブ
manufacturer: アデリオン（エンターライズ）
formalModel: Lデビルメイクライ5ST XA
inspectionCode: 430767 / 0702-038（1geki併記）
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス+ST
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEで型式 `Lデビルメイクライ5ST XA`、検定番号 `430767`、導入開始日2025-06-02、メーカー アデリオンを確認。
- 1gekiも同型式・導入日を一致確認し、検定番号 `430767、0702-038` を併記。
- フィールズ発表を扱う遊技通信/P-WORLD業界記事でアデリオン製・2025年6月上旬導入を確認。
confidence: INDUSTRY_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.2%
- setting3: 100.2%
- setting4: 105.2%
- setting5: 109.2%
- setting6: 114.9%
initialHitBySetting:
  bonus:
  - setting1: 1/257.0
  - setting2: 1/254.1
  - setting3: 1/251.5
  - setting4: 1/222.6
  - setting5: 1/217.3
  - setting6: 1/204.1
  st:
  - setting1: 1/445.4
  - setting2: 1/436.5
  - setting3: 1/411.2
  - setting4: 1/359.6
  - setting5: 1/329.5
  - setting6: 1/303.9
baseGamesPer50: 約33.7G
netIncrease:
- DMC BONUS: 約3.8枚/G
- ST中ボーナス / 上位系: 約5.8枚/G
basicPayout:
- STYLISH BONUS: 払い出し150～300枚
- DEVIL BONUS: 平均払い出し約400枚
- JUDGEMENT CUT BONUS: 平均約560枚獲得（試打/紹介値）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数とCZの2系統から初当たりボーナスを目指す。
- 通常モードは通常A / 通常B / 通常C / 天国の4種類。
- 通常ゲーム数天井は最大1000G+α（最大+25G）。到達時はEPISODE BONUS当選濃厚、ST突入。
- CZ周期天井は10周期目到達でCZ当選濃厚。
- ST「STYLISH TIME」は27G+α、通常STのボーナス継続期待度は約65%。
- 上位ST「Devils Never Cry」はボーナス約89%ループ、獲得期待枚数約3400枚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_CARRYOVER_TABLE_AND_SECONDARY_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- ゲーム数天井: RESETし最大800G+αへ短縮。
- 内部状態: RESET / 再抽選。
- モード: RESET。設定変更時は朝一専用の特殊モードから開始する模様。
- CZ関連ポイント: RESET。朝一は周期到達までカウンターが `????pt` 表示。
- 周期数: 1周期目から開始。
- ボーナスレベル: 有利区間移行時に初期レベル抽選。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### carryOverBehavior
- 据え置き: 有利区間・天井・内部状態・モード・ポイントを引き継ぐ。
- なな徹の機種固有比較表で直接確認。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### powerCycleBehavior
- 電源OFF→ONのみ: 天井・内部モード・内部状態・規定ptを引き継ぐとする機種別二次解析表を確認。
- 周期表示は1周期目となるが内部周期は引継ぎとする資料あり。
- 開始ステージは図書館とする二次解析が一致。
- 純電断時の有利区間そのものを独立条件で直接記載した高優先資料は固定できず `UNVERIFIED_DIRECT_ADVANTAGEOUS_SECTION_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_TO_HIGH_FOR_POWER_CYCLE / DIRECT_ADVANTAGEOUS_SECTION_WORDING_NOT_FOUND

### gameCounterReset
- 設定変更: RESET。最大天井800G+α。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalMaximumCeiling: 1000G+α（+αは最大25G）
resetMaximumCeiling: 800G+α
ceilingBenefit: EPISODE BONUS当選濃厚 → ST突入
maximumCeilingReduction: 200G相当
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B/C/天国とは別に、設定変更後は「特殊なモードからスタートする模様」となな徹が記載。
- 特殊モードの具体名称・全振り分け率・ゾーン表は主要資料で公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SPECIAL_RESET_MODE_EXISTENCE / PUBLIC_VALUE_NOT_FOUND_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVERとする機種別二次解析表あり。
- 朝一状態の具体振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_UNTOUCHED / ANALYSIS_SINGLE_FOR_DIRECT_POWER_CYCLE_TABLE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 通常の差枚到達/エンディング等で有利区間リセットした場合は上位STへ移行する仕様だが、設定変更時の有利区間リセット後恩恵について、なな徹は「設定変更時を除く」として調査中。朝一恩恵へ混入しない。
- 純電源OFF→ON時の有利区間そのものは直接記載を固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_DIRECT_FOR_POWER_CYCLE

### resetBenefits
- 最大ゲーム数天井が1000G+αから800G+αへ短縮。
- 朝一専用の特殊モードから開始する模様。
- ボーナスレベルを初期抽選。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更固有の公開された冷遇率・明確な不利益は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常の有利区間切断で得られる上位ST恩恵を、設定変更時の朝一恩恵としては扱わない。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一800G+α到達後もゲーム数天井が発動しない場合は据え置き濃厚。
- 設定変更/電源OFF→ONとも開始ステージが図書館とする解析があり、開始ステージ単独では判別困難。
- 本機固有ガックンの条件・発生率は表記揺れ・型式・メーカー名を含めて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_CLUE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 1000G+α
resetMaximumCeiling: 800G+α
ceilingReduction: 200G相当
resetSpecialModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 性能コア主要値は1geki・Pachiseven・複数解析で一致し重大競合なし。
- 純増表現は「約5.8枚/G」とだけする資料と、「約3.8枚/G or 約5.8枚/G」とする資料があるが、前者は主出玉区間を代表表記、後者はDMC BONUSとST中ボーナス等の区間差を区別したもの。定義差として保持しCONFLICT扱いしない。
- 型式/検定番号はHAZUSE `430767`、1geki `430767、0702-038`。後者の追加番号は別管理上の番号併記とみられるため平均・統合せず原表記を保持。

## missingFields
- 純電源OFF→ON時の有利区間そのものの直接記載: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 朝一特殊モードの具体振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の状態具体振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- メーカー公式: https://www.enterrise.co.jp/slot/dmc5st/
- HAZUSE 機種詳細: https://hazuse.com/hd/430767-2/
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30863/yugitsushin
- 1geki 機種TOP: https://1geki.jp/slot/l_dmc5_st/
- 1geki 天井/設定変更: https://1geki.jp/slot/l_dmc5_st/3/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/959/29922/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/959/29920/
- Pachiseven スペック: https://pachiseven.jp/machines/7186/cutout/2
- Altema 朝一比較表: https://altema.jp/pachimo/ldmc5reset
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/234002/

## QA notes
- resetBehaviorはホール経営/朝一客AIに必要な粒度のみ収集し、通常時の全モード移行率・全ポイント減算抽選等は対象外。
- 既存 `COMPLETE_CORE` の性能完了判定とは独立してresetBehavior v0.7を管理。
