# スモモチャン

machineName: スモモチャン
manufacturer: ニューギン
formalModelName: スモモチャンV
approvalNumber: 9S0445
releaseDate: CONFLICT — 2009-10-01（K-Naviのホール導入開始） / 2009-10-12（2009年当時のグリーンべると・遊技通信系資料の納品予定日）
generation: 5号機
systemType: ノーマル / ボーナス主体 / 完全告知
coreStatus: COMPLETE_CORE_BASE_RANGE_ONLY_RELEASE_DATE_CONFLICT_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

P-WORLD掲載値を主系列として保持。

| 設定 | 機械割 |
|---:|---:|
| 1 | 95.9% |
| 2 | 96.7% |
| 3 | 98.7% |
| 4 | 100.8% |
| 5 | 102.8% |
| 6 | 105.1% |

旧解析資料では設定1 **95.8%**、設定6 **105.2%** とする系列も確認。設定2〜5は一致するため、設定1・6のみ丸め/算出条件差を含む `CONFLICT` として平均せず保持する。

confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

P-WORLD:

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/287.44 | 1/455.11 | 1/176.2 |
| 2 | 1/282.48 | 1/442.81 | 1/172.5 |
| 3 | 1/282.48 | 1/348.60 | 1/156.0 |
| 4 | 1/273.07 | 1/321.25 | 1/147.6 |
| 5 | 1/273.07 | 1/268.59 | 1/135.4 |
| 6 | 1/268.59 | 1/268.59 | 1/134.3 |

confidence: ANALYSIS_HIGH

## baseGamesPer50

- 旧解析資料で **1000円あたり約34.5〜35.8G** のレンジを確認。
- 設定別の直接表は今回回収できなかったため、このレンジを各設定へ機械的に割り当てない。

confidence: OLD_ANALYSIS_SINGLE_RANGE_ONLY

## netIncrease

NOT_APPLICABLE — RT/ART/ATを使用せず、BIG/REGのみで出玉を増やすノーマルタイプ。

## basicPayout

- BIG: **平均約325枚**
- REG / BONUS GAME: **平均約104枚**
- P-WORLDと2009年当時の業界発表で一致。

confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 完全告知機。リール左下の「SUMOMO CHAN」ランプ点灯でボーナス確定。
- ボーナス成立時は **1/4が先告知、3/4が後告知**。
- 「キュイン」「スペシャルキュイン」等の告知音の有無はホール側が選択可能。
- P-WORLDは、このホール選択モードによっては**設定変更を推測できる場合がある**と記載。
- ボーナスのみで出玉を増やす仕様で、通常ゲーム数天井・RT/ART/AT/CZは確認されない。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_DIRECT_DETECTION_TRACE_CONFIRMED**。ゲーム数天井・RT/ART/AT/CZ・ゲーム数管理モードがないため、設定変更による天井短縮やART状態リセット等は該当しない。一方、P-WORLDに「キュイン/スペシャルキュイン」のホール選択モードによっては設定変更を推測できる旨の直接記載がある。ただし、設定変更時にどの設定項目が初期化/維持されることで判別可能になるのかという具体メカニズムは今回回収できず推測しない。

carryOverBehavior: **NOT_APPLICABLE_FOR_GAME_COUNTER_OR_GAMEPLAY_STATE**。据え置き時に引き継ぐべき天井ゲーム数・RT/ART/AT/CZ・通常時長期モードは確認されない。ホール選択の告知音設定が据え置き時にどう保持されるかは `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior: **NO_GAME_COUNTER_OR_GAMEPLAY_STATE_APPLICABLE; NOTIFICATION_CONFIG_PERSISTENCE_UNVERIFIED**。単純電源OFF→ONで引き継ぎ/リセットを評価すべき天井・RT/ART/AT/CZ状態は確認されない。ホール選択告知音モードの電源断後の保持/初期化は本機固有資料を確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。

modeAfterReset: **NOT_APPLICABLE_FOR_GAMEPLAY_MODE**。通常時のゲーム数解除モードやARTモードは確認されない。ホール側の告知音設定は遊技上の内部モードとは分離して扱い、設定変更/電源断時の保持は `UNVERIFIED_AFTER_RESEARCH`。

stateAfterReset: **NOT_APPLICABLE_NO_RT_ART_AT_CZ_STATE_CONFIRMED**。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用当選率、短縮天井、RT/ART恩恵などは確認されない。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更固有の不利要素は確認されない。

resetDetection: **PARTIAL_DIRECT_HALL_NOTIFICATION_MODE_CAN_INDICATE_SETTING_CHANGE**。P-WORLDに、ホールが選択できる「キュイン」「スペシャルキュイン」の有無とモードによっては設定変更を推測できる旨の直接記載あり。ガックン、初期出目、ランプ初期状態など別手段の直接根拠、および告知モードによる判別の具体条件は十分再探索後も確定できず `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
  normalGameCountCeiling: NONE_CONFIRMED
  resetSpecificCeiling: NOT_APPLICABLE
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_HIGH_VALUE_DETECTION_TRACE_CONFIRMED_NO_CEILING_STATE_POWER_NOTIFICATION_PERSISTENCE_UNVERIFIED

resetBehaviorResearchNote:
- `スモモチャン / スモモチャンV / ニューギン` の表記を使用。
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 告知音 / キュイン / モード` を組み替えて再探索。
- P-WORLD、K-Navi、2009年グリーンべると、当時遊技通信系記事、旧解析/回顧資料を横断。
- 2016年「ニュースモモチャン」は別機種のため、リセット・ベース・機械割を初代へ転用しない。

## conflicts

- releaseDate: K-Naviは **2009-10-01 ホール導入開始**。2009-09-08グリーンべるとと当時遊技通信系資料は **2009-10-12 納品予定**。定義/予定差を解消できないため両方を `CONFLICT` として保持し平均しない。
- payoutRateBySetting: P-WORLDは設定1 95.9% / 設定6 105.1%。旧解析系列は設定1 95.8% / 設定6 105.2%。設定2〜5は一致。丸めまたは算出条件差の可能性はあるが断定せず保持。

## missingFields

- settingChangeNotificationModeMechanism: UNVERIFIED_AFTER_RESEARCH
- notificationModePersistenceOnCarryOver: UNVERIFIED_AFTER_RESEARCH
- notificationModePersistenceOnPowerCycle: UNVERIFIED_AFTER_RESEARCH
- gakkunOrInitialReelDetection: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50BySetting: UNVERIFIED_AFTER_RESEARCH（34.5〜35.8Gレンジのみ確認）

## sources

取得日: 2026-09-03

1. P-WORLD「スモモチャン」 — https://www.p-world.co.jp/machine/database/5677 — ニューギン、5号機ノーマル完全告知、型式スモモチャンV、検定9S0445、設定別BIG/REG/合算/機械割、BIG約325枚、REG約104枚、ボーナスのみ、ホール選択告知音モードと設定変更推測の記載 — reliability: ANALYSIS_HIGH
2. K-Navi「スモモチャン」 — https://p-kn.com/slot/1048/ — ホール導入開始2009-10-01、ノーマル/完全告知、払い出し条件 — reliability: OLD_ANALYSIS_HIGH
3. グリーンべると「『CRサイボーグ009』の甘デジタイプ登場」2009-09-08 — https://web-greenbelt.jp/00003297/ — スモモチャンV、ニューギン、完全告知、先告知1/4・後告知3/4、2009-10-12納品予定 — reliability: CONTEMPORARY_INDUSTRY
4. P-WORLD業界ニュース転載「『CRサイボーグ009』の甘デジタイプ登場」 — https://news.p-world.co.jp/articles/3597/greenbelt — 2009-10-12納品予定のクロスチェック — reliability: CONTEMPORARY_INDUSTRY_MIRROR
5. Pマンズ 2009年9月（遊技通信記事転載） — https://p-mans.blogspot.com/2009/09/ — 純Aタイプ、BB約325枚/BG約104枚、告知音をホール側が任意選択、10月12日納品予定 — reliability: CONTEMPORARY_TRADE_ARCHIVE
6. CrankySeven旧解析「スモモチャン」 — https://crankyseven.com/sumomo-pc.htm — 1000円あたり約34.5〜35.8G、機械割の別系列、天井なし — reliability: OLD_ANALYSIS_SINGLE（現行取得時にページ応答不安定のため他項目は主根拠にしない）
7. A-SLOT「ニューギン スモモチャンV」 — https://www.a-slot.com/SHOP/newgi3.html — 型式名/純Aタイプの回顧確認 — reliability: RETROSPECTIVE_SECONDARY

## researchStatus

- performanceCore: COMPLETE_WITH_BASE_RANGE_ONLY_AND_PAYOUT_CONFLICT
- resetBehavior: PARTIAL_DIRECT_DETECTION_TRACE_CONFIRMED
- sourceCoverage: CONTEMPORARY_INDUSTRY + OLD_ANALYSIS + MACHINE_DATABASE + RETROSPECTIVE
