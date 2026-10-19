# アレックス ブライト

recordNo: 1740
machineName: アレックス ブライト
aliases: AREX BRIGHT / LBアレックス ブライト / LBAREXBRIGHTBA / LB AREX BRIGHT BA
manufacturer: ユニバーサルブロス
formalModel: LBAREXBRIGHTBA
inspectionCode: 5S0110
releaseDate: 2025-07-07
generation: 6号機 / スマスロ
systemType: ノーマル / リアルボーナス + ボーナストリガー（BT）
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_MARKET_VS_FULL攻略_RATE_SPLIT

## releaseAndModelEvidence
- ユニバーサルエンターテインメント公式で、メーカー=ユニバーサルブロス、分類=6号機（スマスロ）、タイプ=ノーマル（ボーナストリガー）、発売=2025年7月を確認。
- 遊技通信/P-WORLD業界記事で型式 `LB AREX BRIGHT BA`、ユニバーサルブロス製を確認。
- HAZUSEで検定番号 `5S0110`、型式 `LBAREXBRIGHTBA`、導入開始日2025-07-07を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
  marketExpected:
  - setting1: 98.8%
  - setting2: 100.6%
  - setting5: 103.5%
  - setting6: 106.8%
  full攻略:
  - setting1: 100.2%
  - setting2: 102.0%
  - setting5: 105.0%
  - setting6: 108.3%
initialHitBySetting:
  big:
  - setting1: 1/309.1
  - setting2: 1/303.4
  - setting5: 1/295.2
  - setting6: 1/287.4
  reg:
  - setting1: 1/428.3
  - setting2: 1/409.6
  - setting5: 1/366.1
  - setting6: 1/312.1
  combined:
  - setting1: 1/179.6
  - setting2: 1/174.3
  - setting5: 1/163.4
  - setting6: 1/149.6
baseGamesPer50: 約35.1G（設定1）
netIncrease: NOT_APPLICABLE_REAL_BONUS_BT
basicPayout:
- BIG: 約350枚+α。小役ゲームは最大176枚獲得後BTへ移行し、JACゲームを含む基本構成で約350枚。
- BrighTループ: BT中の鳥揃いでBT継続。ループ率は全設定共通10%。発生時は約500枚overまで伸び得る。
- REG: 最大103枚。
confidence: OFFICIAL_FOR_TYPE_AND_BB_350PLUS / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすノーマルタイプのBT機。
- BIG終了後はBTへ移行し、BT中はボーナスが高確率成立。鳥揃いならBT継続、BAR・7・7ならBT終了。
- 天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NON_APPLICABLE_AND_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機は天井非搭載のリアルボーナス+BTノーマル機であり、AT機のような設定変更専用天井短縮・朝一専用モード・CZ初期化等は確認できない。
- 機種別「天井&設定変更」資料では設定変更時のリールガックンは `現在調査中`。
- 設定変更時のBT途中状態や特殊状態の復帰契約を直接記載した高優先資料は、正式型式・メーカー・シリーズ名・リセット/朝一/設定変更で再探索しても固定できなかった。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_OTHER_DIRECT_RESET_CONTRACT

### carryOverBehavior
- 通常遊技中には天井ゲーム数・ATモード等の進行要素が存在しないため、それらの据え置き判定項目はNOT_APPLICABLE。
- ボーナス/BT等の特殊途中状態を跨いだ据え置き時の機種固有契約は公開資料で固定できず、一般論から補完していない。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_STATE

### powerCycleBehavior
- 機種別比較資料では電源OFF→ON側のリールガックンも `現在調査中`。
- 純電源OFF→ON時の特殊途中状態/BT関連状態の復帰仕様を直接明記した資料は固定できなかった。
confidence: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 天井非搭載のため、天井用ゲーム数のリセット/引継ぎはNOT_APPLICABLE。
- 通常遊技のゲーム数表示が設定変更判別用の内部天井進行へ結びつく仕様はない。
confidence: ANALYSIS_HIGH / NOT_APPLICABLE

### ceilingAfterReset
normalCeiling: NOT_APPLICABLE
resetCeiling: NOT_APPLICABLE
ceilingShortening: NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ型の通常モード・朝一専用モードは確認できない。
- 設定変更時専用のボーナス当選率優遇モード等も再探索後に確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 通常時の高確/低確を用いた初当たり管理機ではないため、AT機型の内部状態再抽選項目はNOT_APPLICABLE。
- BT/ボーナス等特殊途中状態の設定変更/電断復帰契約はUNVERIFIED_AFTER_RESEARCH。
confidence: NOT_APPLICABLE_FOR_NORMAL_HIGH_LOW_STATE / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_STATE

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断ごとの有利区間内部契約を明記した高優先機種別資料は固定できなかった。
- スマスロ一般仕様から推定せず `UNVERIFIED_AFTER_RESEARCH` とする。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 天井短縮、朝一専用モード、CZ優遇、初当たり優遇などの公開リセット恩恵は確認できない。
- `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 前日天井/モード進行消失のような主要不利要素は天井・モード非搭載のためNOT_APPLICABLE。
- 設定変更専用の冷遇数値も確認できない。
confidence: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 機種別資料で設定変更時・電源OFF→ON時ともリールガックンは `現在調査中`。
- 天井非搭載のため、特定ゲーム数を超えたことによる据え置き判別はNOT_APPLICABLE。
- 朝一専用表示、モード、短縮天井等を用いた変更判別要素は確認できない。
confidence: ANALYSIS_HIGH_FOR_GAKKUN_UNDER_RESEARCH_AND_NO_CEILING / NONE_CONFIRMED_AFTER_RESEARCH_FOR_OTHER_DETECTION

### numericResetData
normalCeiling: NOT_APPLICABLE
resetCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE_OR_NOT_CONFIRMED
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 出玉率は定義を混ぜない。主要解析では市場予想値 `98.8 / 100.6 / 103.5 / 106.8%` と完全攻略時 `100.2 / 102.0 / 105.0 / 108.3%` が併記されるため、双方を別定義で保存。
- 一部動画概要に通常時出玉率の転記崩れとみられる `97.6 / 98.9 / 110.4 / 114.9%` 表記があるが、1geki・必勝本・パチビー・パチマガスロマガ等の複数一致値と整合しないためcanonical不採用。平均化しない。

## missingFields
- 設定変更/純電断時の特殊途中状態・BT関連状態の復帰契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有有利区間の設定変更/据え置き/純電断契約: UNVERIFIED_AFTER_RESEARCH
- リールガックンの発生条件・発生率: CURRENTLY_UNDER_RESEARCH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 朝一専用の公開数値恩恵: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- ユニバーサルエンターテインメント公式: https://www.universal-777.com/product/slot/arexbright/
- P-WORLD / 遊技通信 新機種記事: https://news.p-world.co.jp/articles/30763/yugitsushin
- P-WORLD / グリーンべると 新機種記事: https://news.p-world.co.jp/articles/30710/greenbelt
- HAZUSE: https://hazuse.com/hd/5s0110/
- 1geki: https://1geki.jp/slot/lb_arexbright/
- 必勝本 スペック・天井&設定変更: https://p.hisshobon.jp/vpage/2707/2
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87132/
- 必勝本 BT解説: https://hisshobon.com/machineinfo/87133/
- パチビー: https://www.pachibee.jp/machines/index/225060000
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/14/kh01.php
- 情報島: https://p-johojima.jp/machine_spec/post-4279/
- なな徹: https://nana-press.com/kaiseki/machine/976/
