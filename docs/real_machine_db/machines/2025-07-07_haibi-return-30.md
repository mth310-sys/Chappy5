# ハイビリターン-30

recordNo: 1741
machineName: ハイビリターン-30
aliases: ハイビリターン30 / SハイビリターンPA-30 / HAIBI RETURN-30
manufacturer: パイオニア
formalModel: SハイビリターンPA-30
inspectionCode: 5S0123
releaseDate: 2025-07-07
generation: 6.6号機 / 30φ / AT
systemType: 沖スロ系 / 擬似ボーナスAT / 完全告知
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- パイオニア公式2025年製品一覧で2025年7月発売を確認。
- ゼンリン業界資料で型式 `SハイビリターンPA-30`、製造メーカー=パイオニア、納品開始予定2025-07-06を確認。
- HAZUSEで検定番号 `5S0123`、導入開始日2025-07-07を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: PUBLIC_VALUE_NOT_FOUND
- setting1: 98.1%
- setting2: 99.5%
- setting4: 102.4%
- setting5: 105.4%
- setting6: 108.0%
initialHitBySetting:
  bonusInitial:
  - setting1: 1/296.7
  - setting2: 1/289.0
  - setting4: 1/269.4
  - setting5: 1/250.2
  - setting6: 1/240.8
  bigAppearance:
  - setting1: 1/231.2
  - setting2: 1/226.5
  - setting4: 1/214.0
  - setting5: 1/201.9
  - setting6: 1/195.5
  regAppearance:
  - setting1: 1/346.1
  - setting2: 1/337.7
  - setting4: 1/315.4
  - setting5: 1/294.0
  - setting6: 1/283.7
  combinedAppearance:
  - setting1: 1/138.6
  - setting2: 1/135.6
  - setting4: 1/127.5
  - setting5: 1/119.7
  - setting6: 1/115.8
baseGamesPer50: 約29.8G
netIncrease: 約9.0枚/G
basicPayout:
- BIG CHANCE: 約300枚（約34G）
- REG CHANCE: 約100枚（約12G）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は通常A/B/C・引き戻し・チャンス・ハイビの通常系6モードに加え、天国/超ハイビを搭載。
- 通常A/B/C天井は約999G、引き戻し/チャンスは約250G、ハイビは約1005G、天国/超ハイビは32G以内のボーナス濃厚。
- チャンスモードは設定変更時のみ移行する可能性がある。
- 超ハイビは期待獲得枚数3140枚とする解析資料あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井ゲーム数をリセットし、内部モードを再抽選。
- 設定変更時のみ移行可能なチャンスモードが存在し、同モードなら天井約250G。
- ボーナス高確など内部状態の設定変更時契約については資料系統を変えて再探索したが、直接かつ高信頼に固定できる詳細値は不足。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_MODE / UNVERIFIED_AFTER_RESEARCH_FOR_HIGH_STATE_DETAIL

### carryOverBehavior
- 据え置き時の天井・内部モードは引継ぎ扱いとする解析資料が一致。純電源OFF→ON時も天井・モード引継ぎが明記されているため、据え置き営業の主要進行要素は継続すると扱う。
- ボーナス高確の据え置き詳細契約はUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE / UNVERIFIED_AFTER_RESEARCH_FOR_BONUS_HIGH_STATE

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数を引継ぎ、モードも引継ぐ。
- 別解析資料では内部状態も引継ぎとする記載あり。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE / ANALYSIS_SINGLE_FOR_INTERNAL_STATE

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 通常A/B/C 約999G、ハイビ 約1005G
resetCeiling: 固定短縮ではない。設定変更時専用抽選でチャンスモード移行時は約250G。
ceilingShortening: CONDITIONAL_BY_RESET_MODE
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時はモード再抽選。
- チャンスモードは設定変更時のみ移行する可能性がある。
- 設定変更時の具体モード振り分けは主要解析で公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 単一低優先二次資料にはチャンスモード約33%表記があるが、主要解析の直接テーブルで照合できないためcanonical数値には採用しない。
confidence: ANALYSIS_HIGH_FOR_RESET_RESELECT_AND_CHANCE_MODE / UNVERIFIED_AFTER_RESEARCH_FOR_DISTRIBUTION

### stateAfterReset
- ボーナス高確A/B/Cを搭載するが、設定変更時の初期状態振り分けを直接示す高優先資料は固定できなかった。
- 純電断では内部状態引継ぎとする二次解析あり。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### advantageousSectionReset
- 設定変更で有利区間RESET、純電源OFF→ONでCARRY_OVERとする機種別解析資料あり。
- 主要必勝本比較表には有利区間の独立欄がないため、信頼度はANALYSIS_SINGLEに抑える。
confidence: ANALYSIS_SINGLE

### resetBenefits
- 設定変更時のみチャンスモードへ移行する可能性があり、移行時は天井約250Gへ短縮。
- チャンスモードのボーナス当選後は次回通常B以上となり、天国or超ハイビ移行率は約33%とする主要解析あり。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進行・モードを消失する点が設定変更の主要不利要素。
- 設定変更専用の追加冷遇数値は確認できない。
confidence: ANALYSIS_HIGH_FOR_PROGRESS_LOSS / NONE_CONFIRMED_AFTER_RESEARCH_FOR_OTHER_PENALTY

### resetDetection
- 設定変更後にチャンスモードへ移行した場合は250G付近までの当選が判別材料になり得るが、移行は一部のため非当選でも据え置き確定にはならない。
- 本機固有ガックン/確定表示の条件・発生率は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MODE_BASED_HINT / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalCeiling:
- normalA_B_C: 約999G
- haibi: 約1005G
resetSpecificChanceModeCeiling: 約250G
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 天井の代表表記は `999G+α` と `最大約1005G` が混在するが、モード別に通常A/B/C=約999G、ハイビ=約1005Gで定義差を分離して保持する。
- 設定変更時チャンスモード移行率を約33%とする単一二次資料があるが、必勝本/パチマガスロマガ等の主要解析で具体振り分けを確認できないためcanonical不採用。

## missingFields
- 設定Lの性能値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時ボーナス高確の初期状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- パイオニア公式 2025年製品一覧: https://www.slot-pioneer.co.jp/products/2025.html
- パイオニア公式 プレスリリース一覧: https://www.slot-pioneer.co.jp/release.html
- ゼンリン新機種情報: https://zenrin-net.co.jp/11239/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-3829/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0123/
- パチビー: https://www.pachibee.jp/machines/index/225060004
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87116/
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4516/1/109064
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/87103/
- 必勝本 モード移行抽選: https://hisshobon.com/machineinfo/87105/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/150/kh01.php
- パチマガスロマガ 内部モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/150/tj04.php
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/237206/
- スロパチクエスト: https://www.slopachi-quest.com/article/haibireturn-tenjou/
