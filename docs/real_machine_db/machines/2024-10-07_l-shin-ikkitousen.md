# L 真・一騎当千

recordNo: 1679
machineName: L 真・一騎当千
aliases: スマスロ 真・一騎当千 / Lパチスロ真・一騎当千V
manufacturer: Daiichi
formalModel: Lパチスロ真・一騎当千V
inspectionCode: 430303
releaseDate: 2024-10-07
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス / ST型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- Daiichi公式機種ページで `L 真・一騎当千` を確認。
- HAZUSEで型式 `Lパチスロ真・一騎当千V`、検定番号 `430303`、2024-10-07導入、Daiichiを確認。
confidence: OFFICIAL + INDUSTRY

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 99.0%
- setting3: 101.0%
- setting4: 105.8%
- setting5: 109.5%
- setting6: 112.0%
initialHitBySetting:
- setting1: CZ 1/154 / AT 1/321.3
- setting2: CZ 1/148 / AT 1/310.8
- setting3: CZ 1/138 / AT 1/291.6
- setting4: CZ 1/115 / AT 1/245.7
- setting5: CZ 1/110 / AT 1/232.3
- setting6: CZ 1/105 / AT 1/222.1
baseGamesPer50: 約31G/50枚
netIncrease: 約3.3枚/G
basicPayout:
- 当千BONUS: 約50枚
- セブンラッシュ経由: 平均約300枚over
- セブンラッシュ全体: 平均獲得約300枚
- 一騎当千RUSH: 1セット30G+α、ボーナスループ継続率約70%over
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役・規定ゲーム数からCZを経由しAT「一騎当千RUSH」を目指す。
- 通常モードはA/B/C/D/天国の5種。AT天井はA 1000G+α / B 900G+α / C 700G+α / D 400G+α / 天国 100G+α。
- AT中はST型で、ベル2連やレア役からCZ→擬似ボーナスを目指す。
- 上位AT「(真)昇龍モード」はボーナス確率約1/3.8、昇龍約83%over / 真昇龍約99.99%継続。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井・内部状態・有利区間をRESET。
- 内部モードを再抽選し、必ず通常Dまたは天国へ移行。
- 規定ゲーム数は内部的にランダム減算されるため、朝一前兆は100G刻みからズレることがある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の設定変更/据え置き比較では、据え置き時は天井・内部状態・有利区間を引き継ぐ。
- 内部モードも据え置き時は引継ぎ側とする複数解析整理と整合。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井・内部モード・内部状態・有利区間を引き継ぐとする機種別比較資料を確認。
- 設定変更時/電源OFF→ON時とも南陽ステージ開始とする二次整理があるため、開始ステージ単独では判別不能。
- 純電断時のリールガックン条件・発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_FOR_POWER_CYCLE_DETAIL / UNVERIFIED_FOR_GAKKUN

### gameCounterReset
- 通常AT間天井は最大1000G+α。
- 設定変更時は最大400G+αへ短縮。
- 据え置き/電源OFF→ONでは天井進行を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 最大1000G+α
resetGameCeiling: 最大400G+α
resetMode: 通常D or 天国
benefit: AT「一騎当千RUSH」当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常Dまたは天国のみ。
- 設定別振り分け:
  - setting1: 通常D 100% / 天国 0%
  - setting2: 通常D 98.4% / 天国 1.6%
  - setting3: 通常D 98.4% / 天国 1.6%
  - setting4: 通常D 96.9% / 天国 3.1%
  - setting5: 通常D 96.9% / 天国 3.1%
  - setting6: 通常D 96.9% / 天国 3.1%
- 朝一天国なら設定2以上濃厚。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- なな徹の設定変更/据え置き比較で、設定変更時は内部状態RESET、据え置き時はCARRY_OVER。
- 電源OFF→ON時は内部状態CARRY_OVERとする機種別比較資料を確認。
- 設定変更直後の内部状態具体振り分けは本DBの朝一必須値として固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET/CARRY / UNVERIFIED_FOR_DISTRIBUTION

### advantageousSectionReset
- なな徹が設定変更時 `有利区間: リセット`、据え置き時 `引き継ぐ` と直接表記。
- 有利区間リセットタイミングとして設定変更時を確認。
- 純電源OFF→ONは機種別比較資料で引継ぎ側。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### resetBenefits
- AT間最大天井が1000G+αから400G+αへ大幅短縮。
- 通常Dまたは天国スタート。
- 規定ゲーム数がランダム減算され、実質的にさらに早い当選が起こり得る。
- 朝一天国なら設定2以上濃厚という設定推測要素がある。
status: CONFIRMED
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の主要な不利要素は、公式・業界・主要解析・旧DB系を再探索しても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 設定変更後は最大400G+αのため、朝一400G+αを超えてAT非当選なら据え置き濃厚材料。
- 設定変更時は規定ゲーム数をランダム減算するため、前兆位置が100G周期からズレても据え置き確定にはならない。
- 開始ステージは設定変更/電源OFF→ONとも南陽ステージとする資料があり、ステージ単独では判別不可。
- 本機固有のガックン条件・発生率は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 1000G+α
resetGameCeiling: 400G+α
resetModeDistribution:
- setting1: D 100.0% / 天国 0.0%
- setting2: D 98.4% / 天国 1.6%
- setting3: D 98.4% / 天国 1.6%
- setting4: D 96.9% / 天国 3.1%
- setting5: D 96.9% / 天国 3.1%
- setting6: D 96.9% / 天国 3.1%
resetGameOffset: ランダム減算（具体分布はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）
gakkun: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_NUMERICS

### publicMorningNumbers
- 設定変更後最大天井: 400G+α。
- 設定変更時モード: 通常D / 天国のみ。
- 設定別天国振り分け: 設定1 0%、設定2・3 1.6%、設定4・5・6 3.1%。
- 設定変更時は規定ゲーム数をランダム減算（具体分布非公開/未固定）。

## conflicts
- AT初当たりは必勝本が小数第1位まで（1/321.3〜1/222.1）、一撃/なな徹は整数丸め（1/321〜1/222）。定義差ではなく丸め差として小数値をcanonical。
- HAZUSE機種トップでは純増欄が未記載だが、一撃はボーナス純増約3.3枚/Gを明記。未記載と数値の競合ではない。

## missingFields
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の規定ゲーム数ランダム減算具体分布: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更直後の内部状態具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH
sources:
- Daiichi公式: https://daiichi777.jp/pachislot/slot_ikkitousen/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0086/
- HAZUSE詳細: https://hazuse.com/hd/430303-2/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84872/
- 一撃 機種トップ: https://1geki.jp/slot/l_shin_ikkitosen/
- 一撃 天井/朝一: https://1geki.jp/slot/l_shin_ikkitosen/3/
- 一撃 小役/ベース: https://1geki.jp/slot/l_shin_ikkitosen/4/
- 一撃 ボーナス: https://1geki.jp/slot/l_shin_ikkitosen/91/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/815/24377/
- なな徹 モード: https://nana-press.com/kaiseki/machine/815/24380/
- なな徹 設定判別: https://nana-press.com/kaiseki/machine/815/24357/
- ちょんぼりすた: https://chonborista.com/slot/d-light/217808/
- ぽこすろっと 電源OFF→ON比較: https://www.nankaikoya.jp/shin-ikkitousen-kitaichi/

## researchNotes
- `真・一騎当千` / `L 真・一騎当千` / `Lパチスロ真・一騎当千V` / `430303` を使い分け、設定変更・リセット・朝一・据え置き・電源OFF ON・天井短縮・モード・状態・ガックン・有利区間を検索。
- Daiichi公式、HAZUSE、必勝本、一撃、なな徹、ちょんぼりすた、旧解析整理を横断。未固定項目のみUNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCHとした。
