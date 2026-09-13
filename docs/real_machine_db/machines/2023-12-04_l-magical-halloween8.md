# Lマジカルハロウィン8

recordNo: 1610
machineName: Lマジカルハロウィン8
aliases: マジカルハロウィン8 / マジハロ8
manufacturer: コナミアミューズメント
formalModel: Lマジカルハロウィン8FE
inspectionCode: 3S0939
releaseDate: 2023-12-04
generation: 6.5号機 / スマスロ
systemType: リアルボーナス + ART
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## corePerformance
payoutRateBySetting:
- 1: 97.7%
- 2: 98.8%
- 3: 101.3%
- 4: 105.2%
- 5: 107.3%
- 6: 109.2%
ARTInitialHitBySetting:
- 1: 1/352.2
- 2: 1/335.5
- 3: 1/297.1
- 4: 1/269.3
- 5: 1/254.4
- 6: 1/226.8
bonusCombinedBySetting:
- 1: 1/177.1
- 2: 1/175.7
- 3: 1/174.3
- 4: 1/171.6
- 5: 1/170.2
- 6: 1/167.6
baseGamesPer50: 約34G/50枚（設定1詳細値約34.3G。設定差あり）
netIncrease: ART約1.0枚/G
basicPayout:
- 赤7同色BIG: 203枚
- 白7同色BIG: 175枚
- 赤7異色BIG: 154枚
- REG/殲滅/MEMORIAL BONUS: 42枚
- ARTカボチャンス: 1セット30G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## ceiling
- 通常最大777G+αでART濃厚の詠唱チャレンジ、ARTストック2個。
- 通常天井振り分け: 333G 2.7% / 444G 0.4% / 555G 5.1% / 666G 1.6% / 777G 90.2%。
- ボーナス非経由ART後、ART中ボーナス非当選で終了した場合は次回333G+αへ短縮する条件あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_STATE_DETAIL_PARTIAL
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部モード、内部状態をRESET。
- 天井はランダム短縮され、最大でも600G+α程度。100G付近で発動するケースもある。
- 設定変更時は内部RT状態「内部詠唱」から開始する解析があり、リプレイ成立を経て30G固定のリプレイ低確率後に再び内部詠唱へ移行する朝一恩恵がある。
- 「どこまじ」発生率が大幅アップ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は天井、有利区間、内部モード、内部状態をCARRY_OVERとする複数解析資料あり。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井、有利区間、内部モード、内部状態をCARRY_OVER。
- ステージ等の見た目差は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CARRY / UNVERIFIED_VISUAL

### gameCounterReset
- 設定変更時: RESETしランダム短縮天井を再設定。
- 据え置き/純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常最大777G+α → リセット後最大約600G+αへ短縮。
- 短縮G数はランダムで、100G程度から発動する可能性あり。
- 設定変更専用の全振り分け率は再探索後も公開固定値未確認。
confidence: ANALYSIS_HIGH_FOR_MAX / UNVERIFIED_FULL_DISTRIBUTION

### modeAfterReset
- 設定変更時は内部モードRESET。
- 据え置き/純電源OFF→ONはCARRY_OVER。
- 朝一専用のモード振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- なな徹/複数解析では設定変更時は内部状態RESET、電源OFF→ON時は引継ぎ。
- 通常/高確等の設定変更専用初期振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### resetBenefits
- 天井ランダム短縮、最大約600G+α。
- 朝一内部詠唱→リプレイ成立後30G消化→内部詠唱への遷移により、ボーナス非経由でもART突入機会が発生。
- 設定変更後は「どこまじ」発生率大幅アップ。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時固有の定量的不利要素は再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 朝一1G目にリールガックン発生で設定変更濃厚とする複数攻略資料あり。ただしホール側対策時を除く。
- 天井がランダム短縮のため、浅い天井発動だけで固定判別はできない。
- 有利区間ランプ単独の確実な判別契約は確認できず、一般論で補完しない。
confidence: ANALYSIS_HIGH_FOR_GACKUN

### numericResetData
- リセット天井: ランダム短縮、最大約600G+α。
- 早い場合: 約100Gで天井発動の可能性。
- 朝一RT遷移: 内部詠唱 → リプレイ成立 → リプレイ低確率30G → 内部詠唱。
- 30G+α消化後に内部的な詠唱チャレンジ機会。

### publicMorningNumbers
- 朝一最大天井: 約600G+α。
- リプレイ低確率滞在: 30G固定。
- 朝一専用天井全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 朝一内部状態初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 一部後発ページに純増約6.0枚/G表記が見られるが、公式系機種情報・当時解析・パチマガ系でART純増約1.0枚/Gが一致するため6.0枚表記は採用しない。

## missingFields
- reset ceiling exact distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset initial mode distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset internal-state distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- power-cycle visual stage behavior: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2023-12-04 canonical群6機目として処理。
- 群進捗: OPEN 6/7。
- 次は `Sクランキークレスト` をNo.1611候補として処理する。

## sources
取得日: 2026-09-13
- コナミ公式（参照先）: https://www.konami.com/amusement/psm/slot/magihallo8/00_top.html
- パチビー: https://www.pachibee.jp/machines/index/223100010
- K-Navi: https://p-kn.com/slot/4038/
- HAZUSE 型式/検定/基本: https://hazuse.com/hd/3s0939/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/24/kh01.php
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/197879/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/627/18066/
- 一撃 天井/朝一: https://1geki.jp/slot/l_magicalhalloween8/3/
- スロットセブン 設定変更: https://slot-seven.com/magihallo8-settei/
- スロットセブン 天井/朝一: https://slot-seven.com/magihallo8-tenzyou/

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_RESEARCHED_WITH_STATE_DETAIL_PARTIAL
