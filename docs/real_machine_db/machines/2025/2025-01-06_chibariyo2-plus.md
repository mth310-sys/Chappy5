# チバリヨ2プラス

recordNo: 1698
machineName: チバリヨ2プラス
aliases: Lチバリヨ2＋ / Lチバリヨ2プラス / スマスロ チバリヨ2プラス / Lチバリヨ2プラスZC
manufacturer: オーゼキ（製造） / NET（販売・ブランド）
formalModel: Lチバリヨ2プラスZC
inspectionCode: 4S1086
releaseDate: 2025-01-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス連チャン型
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- NET公式機種ページで型式 `Lチバリヨ２プラスZC`、製造=株式会社オーゼキを確認。
- G-net大阪府公安委員会公示整理で型式 `Lチバリヨ2プラスZC`、検定番号 `4S1086`、メーカー=オーゼキを確認。
- HAZUSEで検定番号 `4S1086`、導入開始日2025-01-06を再照合。
- NET公式アプリ案内でも2025年1月発売のチバリヨシリーズ最新作と確認。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 99.6%
- setting4: 104.7%
- setting5: 109.7%
- setting6: 114.9%
- settingL: 非公開（常時下パネル消灯で報知とする解析あり）
initialHitBySetting:
- setting1: 1/328
- setting2: 1/313
- setting4: 1/280
- setting5: 1/251
- setting6: 1/224
bonusCombinedBySetting:
- setting1: 1/108.4
- setting2: 1/104.2
- setting4: 1/93.7
- setting5: 1/83.9
- setting6: 1/74.8
baseGamesPer50:
- setting1: 27.9G/50枚
- setting2: 28.2G/50枚
- setting4: 28.7G/50枚
- setting5: 29.1G/50枚
- setting6: 29.8G/50枚
netIncrease: REG/BIG 約3.0枚/G / SUPER BIG 約4.5枚/G
basicPayout:
- REG: 30G・約90枚
- BIG: 70G・約210枚
- SUPER BIG: 70G・約315枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はゲーム数とチェリー回数の2系統の天井を持つ。
- 通常ゲーム数天井は最大999G+α、チェリー回数天井は最大45回。いずれも到達でボーナス当選。
- 通常モードは通常A / 通常B / チャンスA / チャンスB / 天国準備。天国移行まで基本的に下位へ転落しない。
- モード別チェリー回数天井は通常A・B=最大40回、チャンスA=45回、チャンスB=25回、天国準備=10回。
- 天国系・パトランプ系・リミットレス/アゲイン等は出玉性能に影響するが、本DBではリセット挙動説明に必要な範囲のみ収録。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_POWER_ADVANTAGEOUS_SECTION_CAUTION_AND_UNVERIFIED_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時はゲーム数天井、チェリー回数、内部状態、内部モード、有利区間をRESET/再抽選。
- ゲーム数天井は通常最大999G+αから、設定変更後は350Gまたは600Gの短縮天井に期待でき、最大600G+α。
- 内部モードは再抽選され、通常B以上移行率は約50%。チャンスB移行にも期待できる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きではゲーム数天井、内部状態、内部モード、有利区間をCARRY_OVER。
- チェリー回数も設定変更ではリセット、電源OFF/ONでは引継ぎとする機種別比較表があり、据え置き本線ではCARRY_OVER扱い。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数、天井までのチェリー回数、モードをCARRY_OVERすることを必勝本の機種別比較表で直接確認。
- 内部状態も電源OFF→ONで引継ぎとするチバリヨ2プラス固有の二次比較表を確認。
- 有利区間について、設定変更/据え置き比較では据え置きCARRY_OVERが確認できるが、純電源OFF→ONを独立列で明記した本機固有の高信頼資料を十分な再探索後も固定できないため `UNVERIFIED_POWER_CYCLE_ADVANTAGEOUS_SECTION_AFTER_RESEARCH`。一般仕様から自動補完しない。
- 純電断後の開始ステージ/見た目の確定ルールは確認できず `UNVERIFIED_START_DISPLAY_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_CHERRY_MODE / ANALYSIS_SINGLE_FOR_STATE / UNVERIFIED_FOR_POWER_ADVANTAGEOUS_SECTION_AND_DISPLAY

### gameCounterReset
- 設定変更: RESET。設定変更後ゲーム数天井は350G or 600Gの短縮候補、最大600G+α。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- チェリー回数も設定変更でRESET、純電源OFF→ONでCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 最大999G+α
normalCherryCeiling: 最大45回
resetGameCeiling: 350G or 600Gに期待 / 最大600G+α
ceilingBenefit: ボーナス当選
- 設定変更後の350G/600Gそれぞれの正確な選択率は公開固定値を確認できない。高設定ほど350Gが選ばれやすい解析はあるが、設定変更専用の完全振り分けとしては扱わない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更時の通常B以上移行率: 約50%。チャンスBへ移行しやすい。
- 設定変更時の通常A/B/チャンスA/B/天国準備の完全振り分けは、正式型式・メーカー・シリーズ名・朝一/リセット/モード/振り分けを変えて公式・主要解析・旧資料を再探索したが固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RULE_AND_B_PLUS_RATE / UNVERIFIED_FOR_FULL_DISTRIBUTION

### stateAfterReset
- 設定変更: RESET/再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERとするチバリヨ2プラス固有の二次比較表あり。
- 設定変更時の具体的内部状態振り分けは公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_POWER_CYCLE_ADVANTAGEOUS_SECTION_AFTER_RESEARCH`。本機固有の独立比較を固定できず一般論で補完しない。
- 通常営業中の有利区間リセット契機として、設定変更時・差枚数上限到達時・リミットレスモード終了時をなな徹が掲載。
- 設定変更以外の有利区間リセット恩恵と設定変更恩恵を混同しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_PURE_POWER_CYCLE

### resetBenefits
- ゲーム数天井が通常最大999G+αから設定変更後最大600G+αへ短縮され、350G天井の可能性もある。
- 設定変更時は約50%で通常B以上へ移行。
- チャンスB移行にも期待でき、チャンスBはボーナス当選時に約60%で天国以上へ移行する解析がある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日のゲーム数天井進行、チェリー回数、内部状態、内部モード、有利区間は設定変更でリセット対象。
- その他の設定変更固有の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- なな徹の機種別リセット判別は現在調査中で、確定的な外見判別は未公開。
- 設定変更後のゲーム数天井は最大600G+αのため、朝一600G+αを明確に超えてボーナス非当選なら据え置き濃厚の強い材料になる。
- 本機固有のガックン条件・発生率は `チバリヨ2プラス / Lチバリヨ2プラスZC / オーゼキ / NET / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / リール` へ検索語を変更し、公式・業界・主要解析・旧DBを横断後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプ等による本機固有の確定変更判別も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_600G_DETECTION / UNVERIFIED_FOR_GAKKUN_AND_LAMP

### numericResetData
normalGameCeiling: 最大999G+α
normalCherryCeiling: 最大45回
resetGameCeiling: 350G or 600Gに期待 / 最大600G+α
resetModeBOrHigherRate: 約50%
chanceBToHeavenOrHigherRateOnBonus: 約60%（チャンスB滞在時の特性。設定変更時のチャンスB選択率そのものではない）
settingChangeGameCounter: RESET
powerCycleGameCounter: CARRY_OVER
settingChangeCherryCounter: RESET
powerCycleCherryCounter: CARRY_OVER
settingChangeMode: RESELECT
powerCycleMode: CARRY_OVER
settingChangeAdvantageousSection: RESET
carryOverAdvantageousSection: CARRY_OVER
powerCycleAdvantageousSection: UNVERIFIED_AFTER_RESEARCH
exactResetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後ゲーム数天井: 350G or 600Gに期待、最大600G+α。
- 設定変更時の通常B以上移行率: 約50%。
- チャンスB滞在時はボーナス当選時約60%で天国以上へ移行。
- 朝一600G+α超過でボーナス非当選なら据え置き濃厚材料。

## conflicts
- 重大な性能値CONFLICTは今回確認せず。
- 一部初期まとめでは設定変更後を単に「600Gへ短縮」と表記する一方、後続の主要解析は「350G or 600Gに期待」と記載。これは最大天井表現と内部選択候補の粒度差と判断し、CONFLICTにはせず両方を `最大600G+α / 350G or 600G` と分離保存。

## missingFields
- 設定変更時の通常モード完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部状態具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間を独立明記した本機固有高信頼資料: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ/表示確定ルール: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプ等による本機固有の確定変更判別: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL_PRODUCT: https://www.net-fun.co.jp/chibariyo2PLUS/
- OFFICIAL_APP_PRODUCT_NOTE: https://www.net-fun.co.jp/app/3478
- INDUSTRY_MODEL_INSPECTION: https://g-net-ps.com/industry/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E6%83%85%E5%A0%B1%EF%BC%88%E4%BB%A4%E5%92%8C6%E5%B9%B410%E6%9C%8818%E6%97%A5%E5%85%AC%E7%A4%BA%E5%88%86%EF%BC%89/
- INDUSTRY_MODEL_CROSSCHECK: https://web-greenbelt.jp/post-89274/
- INDUSTRY_PRODUCT: https://news.p-world.co.jp/articles/29653/greenbelt
- ANALYSIS_HIGH_MODEL: https://hazuse.com/hd/4s1086/
- ANALYSIS_HIGH_CORE: https://nana-press.com/kaiseki/machine/858/26539/
- ANALYSIS_HIGH_RESET: https://nana-press.com/kaiseki/machine/858/26545/
- ANALYSIS_HIGH_MODE: https://nana-press.com/kaiseki/machine/858/26547/
- ANALYSIS_HIGH_CEILING: https://nana-press.com/kaiseki/machine/858/26628/
- ANALYSIS_HIGH_TARGETING: https://nana-press.com/kaiseki/machine/858/26543/
- ANALYSIS_HIGH_RESET_POWER: https://hisshobon.com/machineinfo/85673/
- ANALYSIS_HIGH_CEILING_CROSSCHECK: https://hisshobon.com/machineinfo/85681/
- ANALYSIS_HIGH_MODE_CROSSCHECK: https://hisshobon.com/machineinfo/85677/
- ANALYSIS_HIGH_CORE_CROSSCHECK: https://p.hisshobon.jp/vpage/2672/2
- ANALYSIS_SECONDARY_POWER_STATE: https://slothack.net/matome/148020/
- ANALYSIS_SECONDARY_CORE: https://chonborista.com/slot/net-slot/223151/
- ANALYSIS_SECONDARY_CORE: https://www.pachibee.jp/machines/index/224120001
