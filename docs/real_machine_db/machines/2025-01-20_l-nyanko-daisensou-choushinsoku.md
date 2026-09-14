# Lにゃんこ大戦争 超神速

recordNo: 1702
machineName: Lにゃんこ大戦争 超神速
aliases: スマスロ にゃんこ大戦争 超神速 / L にゃんこ大戦争 超神速 / Lにゃんこ大戦争・超神速KB
manufacturer: KYORAKU
formalModel: Lにゃんこ大戦争・超神速KB
inspectionCode: 4S1157
releaseDate: 2025-01-20
generation: 6.5号機 / スマスロ / AT
systemType: 高純増AT / セット継続 + 継続バトル
settings: 1 / 2 / 4 / 5 / 6（設定L搭載）
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- KYORAKU公式機種サイトが存在し、HAZUSEで型式 `Lにゃんこ大戦争・超神速KB`、検定番号 `4S1157`、導入開始日2025-01-20を確認。
- パチマガスロマガ・複数解析DBでも2025-01-20導入で一致。
confidence: OFFICIAL_REFERENCE + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.3%
- setting4: 104.3%
- setting5: 109.4%
- setting6: 114.9%
initialHitBySetting:
- setting1: CZ 1/544 / AT 1/395
- setting2: CZ 1/538 / AT 1/383
- setting4: CZ 1/489 / AT 1/336
- setting5: CZ 1/464 / AT 1/313
- setting6: CZ 1/461 / AT 1/303
baseGamesPer50: 約32.5G/50枚
netIncrease:
- メインAT「神さま炎撫」: 約9.0枚/G
- 上位AT「夢想」: 約9.0枚/G
basicPayout:
- メインAT: 1セット10～100G、初回20G以上
- 上位AT「夢想」: 1セット10～100G、継続期待度約90%、通常へ戻るまでの平均期待枚数約3000枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時天井: 最大1122G+α。到達でAT + 金勝撫缶1個以上。
- 設定変更後天井: 最大922G+αへ短縮。
- 一部で222G+α天井が選択され、高設定ほど選択されやすいと解析されているが、設定別振り分け率は公開固定値を確認できず。
- ATは前半「神さま炎撫」と後半「神さま勝撫」のセット継続構造。勝撫缶1個につき継続バトル1回、通常缶の1回あたり勝利期待度は約25%、金勝撫缶は勝利濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PUBLIC_DISTRIBUTION_GAP
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数をRESETし、通常最大1122G+αから最大922G+αへ短縮。
- 内部モードを再抽選。
- 狂乱状態をRESET。
- 有利区間をRESET。
- 勝利回数をRESETする解析あり。
- 朝一のゲーム数表示は「あしあと」アイコン表示で、1G消化後にカウント開始。
- 小役履歴はシャッター状態となり5G間継続、液晶出目は1・2・3、ステージはワルキューレ平原から開始。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE + SECONDARY_CROSSCHECK

### carryOverBehavior
- 据え置き時は天井ゲーム数・内部モード・狂乱状態・有利区間・勝利回数を引き継ぐ解析で一致。
- 表面上は設定変更時と同様にゲーム数表示が1G後から開始するため、液晶ゲーム数のみでは据え置き判別不可。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 必勝本の設定変更/電源OFF→ON直接比較で、純電断では天井までのゲーム数・モード・狂乱状態を引き継ぐ。
- ゲーム数表示は「あしあと」アイコン表示となり1G消化後にカウント開始するが、内部的な消化G数は引き継ぐ。
- 小役履歴はシャッター状態5G、液晶出目1・2・3、ステージはワルキューレ平原へ戻る。
- 有利区間・勝利回数も電源OFF→ONで引き継ぐ解析資料あり。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE + SECONDARY_CROSSCHECK

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ON: CARRY_OVER。
- 表示上は設定変更・電断とも1G消化後からカウント開始するため、表示G数と内部G数が一致しない場合がある。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: 1122G+α
resetCeiling: 922G+α
resetCeilingShortening: 200G
specialCeiling: 222G+αの振り分けあり（高設定ほど優遇と解析、設定別率未公開）
ceilingBenefit: AT当選 + 金勝撫缶1個以上
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 再抽選。
- 据え置き / 電源OFF→ON: 引き継ぎ。
- 設定変更後の各内部モード振り分け率は、機種名・型式名・メーカー名と「朝一/リセット/モード/振り分け」を変えて再探索しても高信頼の固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- 狂乱状態: 設定変更でRESET、電源OFF→ONで引き継ぎ。
- 朝一専用の狂乱状態初期振り分け率は公開固定値を確認できず。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ON: CARRY_OVER。
- AT中の有利区間差枚+2200枚以上で次回神さま勝撫突入時に有利区間リセット→上位AT「夢想」濃厚という通常運用上の契機も解析されているが、朝一専用恩恵とは分離して扱う。
confidence: ANALYSIS_HIGH

### resetBenefits
- 天井が1122G+α → 922G+αへ200G短縮。
- 222G+α天井の振り分けも存在するが、設定変更専用の個別選択率は公開固定値を確認できず。
- 設定変更後専用の追加CZ/AT優遇率は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetPenalties
- 内部モード・狂乱状態・勝利回数・天井進行は設定変更でリセットされるため、据え置きで残る有利状態を失う可能性がある。
- 数値化された設定変更固有の不利率は公開固定値を確認できず。
confidence: ANALYSIS_HIGH_FOR_LOSS_OF_CARRYOVER / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- 設定変更/純電断とも液晶出目1・2・3、ワルキューレ平原、小役履歴シャッター、1G後カウント開始という共通表面挙動があるため、それら単独では変更判別不可。
- 内部G数は電断で引き継ぐため、前日G数を把握できる場合に天井到達位置が判別材料になり得る。
- 本機固有リールガックン条件・発生率は `にゃんこ大戦争 超神速 / Lにゃんこ大戦争・超神速KB / KYORAKU / 設定変更 / リセット / 据え置き / 電源OFF ON / ガックン` を再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 1122G+α
resetCeiling: 922G+α
ceilingShortening: 200G
specialCeiling: 222G+α（設定差あり、個別率未公開）
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後最大天井: 922G+α。
- 通常最大天井: 1122G+α。
- 特殊天井: 222G+αの可能性あり。
- 222G天井の設定別振り分け率は未公開固定値。

## conflicts
- 天井恩恵について主要解析は「AT + 金勝撫缶1個以上」で一致する一方、設定変更922G天井の実戦データから金勝撫缶恩恵が無い可能性を示す考察資料も存在。解析確定情報をcanonicalとし、実戦考察は `CONFLICT_PRACTICAL_OBSERVATION_RESET_922G_REWARD` として注記し平均化しない。

## missingFields
- 設定変更後の内部モード個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更後の狂乱状態初期振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 222G+α天井の設定別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL_PRODUCT: https://www.kyoraku.co.jp/product_site/2024/battlecats_choushinsoku/
- ANALYSIS_HIGH_MODEL: https://hazuse.com/machine/pachislot/4S1157/
- ANALYSIS_HIGH_CORE: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/20/kh01.php
- ANALYSIS_HIGH_RESET_DIRECT: https://hisshobon.com/machineinfo/85848/
- ANALYSIS_HIGH_CEILING: https://1geki.jp/slot/l_nyanko2/3/
- ANALYSIS_HIGH_CORE_RESET: https://chonborista.com/slot/kyoraku-slot/224513/
- ANALYSIS_HIGH_AT: https://nana-press.com/kaiseki/machine/871/27035/
- ANALYSIS_HIGH_UPPER_AT: https://nana-press.com/kaiseki/machine/871/27036/
- ANALYSIS_HIGH_CEILING_DETAIL: https://pachimaga.com/free/article/20250118/056071.php
- ANALYSIS_SECONDARY_RESET_CROSSCHECK: https://slobase.jp/machines/nyanko
