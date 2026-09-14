# パチスロなめ猫～液晶ないけどなめんじゃねぇ～

recordNo: 1743
machineName: パチスロなめ猫～液晶ないけどなめんじゃねぇ～
aliases: パチスロなめ猫 / なめ猫 / Sなめ猫
manufacturer: ネオス
salesBrand: ボーダー
formalModel: Sパチスロなめ猫QQ
inspectionCode: 4S1920
releaseDate: 2025-08-04
generation: 6号機 / メダル機 / AT機
systemType: 擬似ボーナスAT / 液晶非搭載
settings: 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで検定番号 `4S1920`、型式 `Sパチスロなめ猫QQ`、導入開始日2025-08-04、ボーダー表記を確認。
- 一撃はメーカーをNeos（ネオス）、導入開始日2025-08-04と掲載。
- Amusement Japanは「ボーダーが発表したネオス製」と報道しており、製造=ネオス / 販売・ブランド=ボーダーとして整理する。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.0%
- setting2: 100.3%
- setting4: 102.6%
- setting5: 104.6%
- setting6: 108.1%
initialHitBySetting:
  bonus:
  - setting1: 1/155
  - setting2: 1/155
  - setting4: 1/155
  - setting5: 1/155
  - setting6: 1/155
  big:
  - setting1: 1/724
  - setting2: 1/666
  - setting4: 1/610
  - setting5: 1/569
  - setting6: 1/507
baseGamesPer50: 約35.8G（設定1）
netIncrease: 約2.9枚/G
basicPayout:
- BIG: 約200枚 / ベルナビ50回
- REG: 約60枚 / ベルナビ15回
- 初当りBIG: 当該BIGを含む3回保証で約600枚
- JACKPOT: 期待枚数約3000枚とする解析あり
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は成立役・リプレイ連続・CZ・天井で擬似ボーナスを抽選。
- リプレイ3連でCZ、4連でボーナス、5連でBIG、6連以上で1G連ストックの示唆/濃厚情報がある。
- BIG終了後は32G+αの引き戻しモードへ移行し、この間のボーナス当選はBIG濃厚。
- 通常時はカバン成立時などにモードアップ抽選があり、上位ほど次回ボーナスのBIG期待度が上がる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_ADVANTAGEOUS_SECTION_AND_DETECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井ゲーム数をRESET。
- 機種別比較表では内部状態もRESET。
- 一撃では設定変更時にBB高確率状態からスタートする可能性があると明記。
- 有利区間そのものの設定変更契約を直接示した高優先機種固有資料は固定できなかったため、一般6号機仕様から補完しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_INTERNAL_STATE / ANALYSIS_HIGH_FOR_POSSIBLE_BB_HIGH / UNVERIFIED_AFTER_RESEARCH_FOR_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 設定変更を伴わない据え置きでは、天井・内部状態を初期化する機種固有トリガーは確認できない。
- 純電源OFF→ON時に天井・内部状態を引き継ぐ機種別比較表があるため、営業日跨ぎの据え置きも主要進行要素はCARRY_OVERとして扱う。
- 据え置きだけを独立行で明記した高優先資料は固定できていないため、信頼度は電断比較表より一段下げる。
confidence: CARRY_OVER_SUPPORTED_BY_POWER_CYCLE_TABLE / EXPLICIT_SEPARATE_STAY_SOURCE_NOT_FOUND

### powerCycleBehavior
- 電源OFF→ON時は天井ゲーム数を引き継ぐ。
- 電源OFF→ON時は内部状態を引き継ぐ。
- ステージは液晶非搭載のため一般的な液晶開始ステージ判別はNOT_APPLICABLE。電断固有のランプ初期表示による状態判別は固定できなかった。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_COMPARISON_TABLE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / SUPPORTED_FOR_CARRY_OVER

### ceilingAfterReset
normalCeiling: 最大600G+α
resetCeiling: 最大600G+α（短縮情報なし）
ceilingDistribution: 100G / 300G / 600Gに振り分けあり
ceilingShortening: NONE_CONFIRMED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時にBB高確率状態から開始する可能性あり。
- 設定変更時のBB高確率開始率、通常モード振り分けは公開数値を固定できなかった。
- 純電源OFF→ON時は内部状態を引き継ぐため、モード/状態も引継ぎ側として扱う。
confidence: ANALYSIS_HIGH_FOR_POSSIBLE_BB_HIGH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_RATE

### stateAfterReset
settingChange: RESET（ただしBB高確率状態開始の可能性あり）
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / SUPPORTED_FOR_CARRY_OVER

### advantageousSectionReset
settingChange: UNVERIFIED_AFTER_RESEARCH
carryOver: UNVERIFIED_AFTER_RESEARCH
powerCycle: UNVERIFIED_AFTER_RESEARCH
- 本機固有の有利区間RESET/CARRY_OVERを直接明記した高優先資料を固定できず、一般仕様から推測しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 設定変更時、BB高確率状態からスタートする可能性あり。
- 通常天井600G+αに対するリセット時の固定短縮天井は確認できない。
- 朝一専用CZ優遇・初当り確率上昇の公開固定値は確認できない。
confidence: ANALYSIS_HIGH_FOR_POSSIBLE_BB_HIGH / NONE_CONFIRMED_FOR_NUMERIC_RATE

### resetPenalties
- 設定変更により前日の天井ゲーム数・内部状態を失う。
- 据え置き/純電断では天井・内部状態を引き継ぐため、前日進行を維持できる。
- 設定変更専用の公開冷遇数値は確認できない。
confidence: ANALYSIS_HIGH_FOR_LOST_PROGRESS / NONE_CONFIRMED_FOR_NUMERIC_PENALTY

### resetDetection
- 液晶非搭載のため液晶開始ステージによる判別はNOT_APPLICABLE。
- 本機固有のリールガックン条件・発生率、ランプ表示等による設定変更確定判別は再探索後も固定できなかった。
- 天井は設定変更でも短縮されないため、固定短縮天井超過を使う変更判別はできない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN / NOT_APPLICABLE_FOR_LCD_STAGE

### numericResetData
normalCeiling: 600G+α
resetCeiling: 600G+α（短縮確認なし）
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
publishedMorningNumericValue: NONE_CONFIRMED_BEYOND_CEILING

## conflicts
- メーカー欄は媒体により `ネオス` と `ボーダー` が混在するが、Amusement Japanが「ボーダー発表・ネオス製」と報道しているため、製造=ネオス、販売/ブランド=ボーダーとして分離し、性能競合とは扱わない。
- 一部後発二次サイトに「天井非搭載」とする誤記が混在するが、HAZUSE・一撃・必勝本・複数解析で600G天井および100/300/600G振り分けが一致するため、canonicalは最大600G+α。

## missingFields
- 本機固有の有利区間（設定変更/据え置き/純電断）契約: UNVERIFIED_AFTER_RESEARCH
- BB高確率状態から開始する設定変更時の具体率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更確定に使える公開朝一判別値: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- HAZUSE 機種詳細/基本スペック: https://hazuse.com/hd/4s1920/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S1920/genre/201/
- 一撃 オンライン遊技説明: https://1geki.jp/slot/s_nameneko/39/
- 一撃 天井・朝一設定変更: https://1geki.jp/slot/s_nameneko/3/
- 一撃 BIG/REG: https://1geki.jp/slot/s_nameneko/61/
- 一撃 JACKPOT: https://1geki.jp/slot/s_nameneko/63/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/87422/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87424/
- Amusement Japan 発表記事: https://amusement-japan.co.jp/article/detail/10004838/
- パチビー: https://www.pachibee.jp/machines/index/225070005
- ちょんぼりすた: https://chonborista.com/slot/border/237458/
- 情報島: https://p-johojima.jp/machine_spec/post-7004/
- 1geki 2025年8月新台スケジュール: https://1geki.jp/newmachinecalender/202508/
