# SHAKE BONUS TRIGGER

recordNo: 1759
machineName: SHAKE BONUS TRIGGER
aliases: LB SHAKE BONUS TRIGGER / シェイク ボーナストリガー / シェイクBT / LB／シェイクボーナストリガー／A1
manufacturer: 大都技研
formalModel: LB／シェイクボーナストリガー／A1
inspectionCode: 530293
releaseDate: 2025-10-20
generation: 6.5号機 / スマスロ / ボーナストリガー
systemType: A+BT / ノーマル系 / 技術介入
settings: L / 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 大都技研は2025-09-22に本機を発表し、業界記事・公式告知転載で2025-10-20導入予定を確認。
- 遊技日本は型式 `LB／シェイクボーナストリガー／A1` と大都技研製を掲載。
- 情報島は新潟県公安委員会の2025-07-18告示として同型式の検定通過を確認。
- HAZUSEは検定番号 `530293`、型式、導入開始日2025-10-20、メーカーDAITOを掲載。
confidence: OFFICIAL_ANNOUNCEMENT_VIA_INDUSTRY / INDUSTRY / INDUSTRY_DB / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: PUBLIC_NUMERIC_VALUE_NOT_FOUND
- setting1: 98.6%
- setting2: 100.6%
- setting5: 103.0%
- setting6: 106.1%
completeStrategyPayoutRateBySetting:
- setting1: 100.4%
- setting2: 102.4%
- setting5: 104.9%
- setting6: 108.1%
initialHitBySetting:
  bigBonus:
  - setting1: 1/350.5
  - setting2: 1/327.7
  - setting5: 1/341.3
  - setting6: 1/297.9
  regularBonus:
  - setting1: 1/425.6
  - setting2: 1/332.7
  - setting5: 1/409.6
  - setting6: 1/297.9
  bonusOverall:
  - setting1: 1/192.2
  - setting2: 1/165.1
  - setting5: 1/186.2
  - setting6: 1/148.9
baseGamesPer50: 約37G/50枚（設定1）
netIncrease: NOT_APPLICABLE_NORMAL_PLUS_BT_NO_CANONICAL_NET_INCREASE_PER_G
basicPayout:
- BIG BONUS: 初当り約300枚以上保証、BT込み平均約400枚（設定1。業界発表では約400枚、後発解析の精密値413.5枚）
- REGULAR BONUS: 平均約80枚
- BIG後: 必ずボーナストリガーへ移行
- BT上乗せループ率: 約50%（設定1。設定差あり）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲームのボーナス抽選を行うA+BT型。専用CZやゲーム数天井は非搭載。
- BIG後は必ずBTへ移行。継続JAC/SJACを引くほど獲得枚数が上乗せされ、終了JACでBT終了。
- 偶数設定は初当りが軽く、奇数設定はBTループが優遇される設計。
- 技術介入により通常掲載機械割と完全攻略機械割が異なるため双方を独立収録。
- 設定Lは特殊設定。ちょんぼりすたでは設定L時に下パネル消灯と掲載。具体性能は公開数値を固定できないため推測しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_AS_NO_CEILING_NO_MORNING_MODE_NO_RESET_BENEFIT_WITH_POWER_CYCLE_SECONDARY_CONFIRMATION
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 本機は天井非搭載のA+BT機で、設定変更による天井短縮・朝一専用モード・CZ優遇といったリセット恩恵は確認されていない。
- ボーナスは通常時の毎ゲーム抽選で、朝一専用のゲーム数契約を持たない。
- 設定変更時の液晶/演出モード初期化やBT内部状態を機種固有の高優先資料で一覧化した直接表は固定できず、一般仕様から自動補完しない。
confidence: INDUSTRY_FOR_SYSTEM_STRUCTURE / ANALYSIS_SINGLE_TO_HIGH_FOR_NO_RESET_BENEFIT

### carryOverBehavior
- 天井・規定ゲーム数・CZスルー等の持越し対象自体が非搭載のため、それらは `NOT_APPLICABLE`。
- 前日成立ボーナス等の特殊な跨ぎ条件について、ホール朝一運用に必要な機種固有公開契約は確認できず、本DBでは推測しない。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE_CZ / UNVERIFIED_FOR_RARE_CROSS_DAY_BONUS_STATE

### powerCycleBehavior
- 後発機種別解析では、電源OFF→ONのみと設定変更で朝一狙い上の差はなく、リセット恩恵なしと整理されている。
- 天井・朝一専用モード・CZスルーが存在しないため、少なくともこれらについて電断と設定変更の差は `NOT_APPLICABLE`。
- 液晶カスタム等の見た目上の電断挙動を高優先資料で直接固定できなかったため、外見判別へ推測転記しない。
confidence: ANALYSIS_SINGLE_MACHINE_SPECIFIC_FOR_NO_MORNING_ADVANTAGE_DIFFERENCE / UNVERIFIED_FOR_VISUAL_DETAILS

### gameCounterReset
settingChange: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
carryOver: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
powerCycle: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
confidence: INDUSTRY / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: NOT_APPLICABLE_NO_CEILING
resetCeiling: NOT_APPLICABLE_NO_CEILING
ceilingShortening: NONE
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モード、規定G数モード、CZモード等は確認されず `NOT_APPLICABLE_FOR_MORNING_GAMEPLAY_MODE`。
- 演出モード（NORMAL / SPICY-SE / AX-STYLE）はプレイヤー選択の演出カスタムであり、朝一内部モードとは区別する。
confidence: INDUSTRY / ANALYSIS_HIGH

### stateAfterReset
- 天井/CZ/ATの朝一優遇に関わる内部状態は `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- BTはBIG後に発動する出玉トリガーであり、朝一設定変更時に特別なBT高確等が付与される公開情報は確認されていない。
- 設定変更と純電断の細かな内部ボーナス成立状態までを比較する機種固有公開表は固定できず `UNVERIFIED_RARE_INTERNAL_STATE_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_MORNING_BENEFIT / UNVERIFIED_FOR_RARE_INTERNAL_STATE

### advantageousSectionReset
- スマスロ機だが、本機固有の有利区間管理を設定変更/据え置き/純電断ごとに直接明記した高優先公開資料は検索語・型式・メーカー名を変えて再探索後も固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 有利区間一般仕様から設定変更時挙動を自動補完しない。
- 朝一有利区間リセット恩恵として利用できる公開数値は `NONE_CONFIRMED`。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### resetBenefits
- 天井短縮: NONE / NOT_APPLICABLE
- 朝一専用モード: NONE_CONFIRMED
- CZ優遇: NOT_APPLICABLE_NO_CZ
- リセット時初当り優遇: NONE_CONFIRMED_AFTER_RESEARCH
- 本機の朝一はリセット狙いではなく設定狙いが主となる構造。
confidence: ANALYSIS_HIGH_FOR_SYSTEM / ANALYSIS_SINGLE_MACHINE_SPECIFIC_FOR_RESET_GUIDE

### resetPenalties
- 前日天井進行等が存在しないため、設定変更による一般的な「天井リセット損」は `NOT_APPLICABLE`。
- 設定変更固有の数値的不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE / NONE_CONFIRMED

### resetDetection
- 天井短縮、朝一専用モード、CZスルー等の挙動差がないため、それらを用いた変更/据え置き判別は不可。
- 検索語 `SHAKE BONUS TRIGGER / シェイクBT / LB／シェイクボーナストリガー／A1 / 大都技研 + ガックン / リール / 朝一 / 設定変更 / 据え置き` を変えて再探索したが、本機固有ガックン条件/発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプを用いた本機固有変更判別条件も固定できず、推測しない。
confidence: ANALYSIS_HIGH_FOR_NO_GAMEPLAY_RESET_CLUE / UNVERIFIED_FOR_GAKKUN_AND_LAMP

### numericResetData
normalCeiling: NOT_APPLICABLE
resetCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE
resetCzData: NOT_APPLICABLE
resetBenefitRate: NONE_CONFIRMED
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues: NONE_CONFIRMED

## conflicts
- 通常機械割98.6/100.6/103.0/106.1%、完全攻略100.4/102.4/104.9/108.1%、BIG/RB/合算、約37G/50枚はG-net、GreenBelt、なな徹、ちょんぼりすた等で一致し重大CONFLICTなし。
- 一部後発記事に導入日2025-10-06とする誤記があるが、大都技研告知転載、GreenBelt、G-net、HAZUSE、情報島等は2025-10-20で一致するため2025-10-20をcanonicalとし、2025-10-06は `CONFLICT_LIKELY_SECONDARY_DATE_ERROR` として隔離。
- BIG獲得は業界発表の「平均約400枚（設定1、BT含む）」と後発解析精密値413.5枚がある。定義は整合する丸め/精密差とみなし、業界公表約400枚をcanonicalの基本獲得性能、413.5枚は補助精密値として保持。

## sources
retrievedAt: 2026-09-15
- https://www.daitogiken.com/contents/product/slot/shakeb/ — 大都技研公式製品サイト（HAZUSE等から公式URL確認） (OFFICIAL)
- https://yugi-nippon.com/pachinko-new-machine/post-73326/ — 遊技日本; 発表日、型式、大都技研、BB約400枚/REG約80枚、導入情報 (INDUSTRY)
- https://web-greenbelt.jp/post-104055/ — GreenBelt; 2025-10-20導入予定、設定別BB/RB/合算/出玉率/完全攻略、約37G/50枚、BT約50% (INDUSTRY)
- https://p-johojima.jp/new_machine/post-11418/ — 情報島; 新潟県公安委員会検定通過、型式 (INDUSTRY_DB)
- https://hazuse.com/hd/530293h/ — HAZUSE; 検定番号530293、型式、導入日、メーカー、ベース、天井非搭載 (INDUSTRY_DB)
- https://g-net-ps.com/info/s0225/ — G-net; 2025-10-20開店日、型式、設定別スペック、37G/50枚 (INDUSTRY)
- https://nana-press.com/kaiseki/machine/1024/32212/ — なな徹; 設定別BIG/RB/合算/機械割/完全攻略、ベース (ANALYSIS_HIGH)
- https://chonborista.com/slot/daito-slot/241440/ — ちょんぼりすた; 設定別性能、天井非搭載、設定L下パネル消灯 (ANALYSIS_HIGH)
- https://slobase.jp/machines/shake-bt — スロベース; 天井非搭載、リセット恩恵なし、電源OFF/ON朝一狙い上の差なし (ANALYSIS_SINGLE_MACHINE_SPECIFIC)

## missingFields
- 本機固有の有利区間を設定変更/据え置き/純電断ごとに直接明記する高優先資料: UNVERIFIED_AFTER_RESEARCH
- 設定変更/純電断時の液晶・演出カスタム初期化条件: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定Lの具体的出玉率/ボーナス確率: PUBLIC_NUMERIC_VALUE_NOT_FOUND

## boundaryNote
- 2025-10-20同日群known canonicalは `L 荒野のコトブキ飛行隊`（No.1758）と `SHAKE BONUS TRIGGER`（No.1759）の2機。
- 情報島の過去新台一覧、ALL7月間一覧、G-net開店日、各機種固有資料を再照合し、同日のPB・別型式・地域先行・延期/段階導入の追加対象を確認できなかったため、2025-10-20境界を `CLOSED_2_OF_2` とする。
