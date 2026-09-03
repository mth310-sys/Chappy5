# 幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～

machineName: 幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～
manufacturer: SNKプレイモア
formalModelName: ゲッカノケンシ S
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-07-20
releaseDateStatus: CONFIRMED_NATIONAL_INTRODUCTION_DATE
releaseDateNote: パチビーが導入日2010-07-20を明記。K-Navi系機種データ、2010年7月当時資料、5号機クロニクルの2010/7表記と整合。
generation: 5号機
systemType: ノーマルタイプ / 演出用プチRT
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_APPROVAL_NUMBER_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線498「悪魔城ドラキュラII」を再取得。
- 開始時正本地点は recordCount 498 / chronologicalFrontier 2010-07-20。
- LATEST_HANDOFF指定の2010-07-20同日未処理候補「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」をrepo検索し未登録を確認。
- パチビーが2010-07-20導入を明記しており、同日群の499件目として追加。

## payoutRateBySetting

パチビー / P-WORLD / 5号機クロニクル一致系列:
- 設定1: **97.0%**
- 設定2: **98.4%**
- 設定3: **100.2%**
- 設定4: **104.3%**
- 設定5: **107.6%**
- 設定6: **112.1%**

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合算
- 設定1: **1/297.9**
- 設定2: **1/292.6**
- 設定3: **1/282.5**
- 設定4: **1/270.8**
- 設定5: **1/256.0**
- 設定6: **1/239.2**

### REG
- 設定1: **1/300.6**
- 設定2: **1/295.2**
- 設定3: **1/284.9**
- 設定4: **1/273.1**
- 設定5: **1/258.0**
- 設定6: **1/240.1**

### ボーナス合算
- 設定1: **1/149.6**
- 設定2: **1/146.9**
- 設定3: **1/141.9**
- 設定4: **1/136.0**
- 設定5: **1/128.5**
- 設定6: **1/119.8**

パチビーの設定別系列とK-Naviの個別ボーナス解析を照合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

当時パチマガスロマガ解析（プチRT非考慮）:
- 設定1: **34.20G**
- 設定2: **34.67G**
- 設定3: **35.16G**
- 設定4: **35.65G**
- 設定5: **36.15G**
- 設定6: **36.95G**

confidence: CONTEMPORARY_ANALYSIS_HIGH

## netIncrease

- 本機は**ボーナスのみで出玉を増やすノーマルタイプ**。
- 特殊リプレイ後のプチRTは演出用高期待ゾーンであり、長期ART/ATとしての純増値を物差し値に採用しない。

netIncrease: **NOT_APPLICABLE_NORMAL_TYPE**
confidence: INDUSTRY_DB_HIGH

## basicPayout

- BIG: **MAX312枚**
- REG: **104枚固定**
- 特殊リプレイ成立後: 高確率で**7G間のプチRT**へ移行
- P-WORLDは特殊リプレイ系契機を概ね**約1/56**として紹介。当時解析では通常特リプとスベリ特リプを別フラグで掲載しており、合成すると概ね同水準。

confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は特殊リプレイ成立を契機に「呪印ゾーン」または「魔道ゾーン」と呼ばれるボーナス高期待演出へ移行。
- 当時解析では特リプ入賞後、高確率で**7G間プチRT**へ移行。
- P-WORLDが明記する通り、出玉増加はBIG/REGのみのノーマル仕様。
- 通常ゲーム数天井、周期天井、長期AT/ART/CZストック、ゲーム数解除モードは、機種名・型式・メーカー名と天井/ハマリ/救済/朝一/リセット等を組み替え再探索したが確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。

confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **NO_LONG_TERM_GAME_COUNT_SYSTEM_CONFIRMED / TRANSIENT_RT_HANDLING_UNVERIFIED**。本機はボーナスのみで出玉を増やすノーマル＋7G演出用プチRT機。設定変更で比較すべき通常ゲーム数天井・周期・長期モードは確認されない。設定変更時にプチRT途中状態や演出状態をどう処理するかは本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

carryOverBehavior: **NO_CEILING_OR_LONG_TERM_MODE_TO_CARRY / TRANSIENT_RT_UNVERIFIED**。据え置き時に宵越し対象となるゲーム数天井・長期ART/AT/CZ・ストックは確認されない。7GプチRT/演出途中の保持については直接資料なし。

powerCycleBehavior: **UNVERIFIED_FOR_TRANSIENT_RT / NO_LONG_TERM_COUNTER_CONFIRMED**。単純電源OFF→ON時の7GプチRT・演出状態処理は確定できず。長期ゲーム数天井/モードの電源再投入処理は対象なし。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井・リセット短縮天井とも確認されず。

modeAfterReset: **NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED**。通常/天国等の長期ゲーム数モードは確認されない。演出用プチRTを長期モードとして扱わない。

stateAfterReset: **TRANSIENT_7G_RT_STATE_UNVERIFIED**。設定変更時の7GプチRT/呪印・魔道ゾーン演出状態のclear/retainは直接資料未確認。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一高確率、ボーナス優遇などの公開恩恵は確認されず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗喪失は天井自体が確認されないため該当しない。7GプチRT/演出途中の扱いは未確認。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`幕末浪漫 月華の剣士外伝` / `月華の剣士外伝` / `ゲッカノケンシ S` / `SNKプレイモア` と、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/リールを組み替えて探索したが、本機固有の変更判別法を確定できず。

numericResetData:
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- transientPetitRTLength: **7G（設定変更専用数値ではない）**

resetBehaviorQA: COMPLETE_FOR_SYSTEM_APPLICABILITY / PARTIAL_FOR_TRANSIENT_RT_POWER_CHANGE_DETECTION

## conflicts

- 設定別機械割・BIG/REG/合算・基本獲得枚数に有意な数値CONFLICTは確認されず。
- 特殊リプレイ確率はP-WORLDの概算「約1/56」と、当時解析の複数フラグ別表記で粒度が異なるため、競合扱いせず定義差として保持。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- exact setting-change behavior for transient 7G petit RT / presentation state: UNVERIFIED_AFTER_RESEARCH
- exact powerCycleBehavior for transient 7G petit RT / presentation state: UNVERIFIED_AFTER_RESEARCH
- resetDetection via gakkun / initial reel position / display: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. パチビー「幕末浪漫 月華の剣士外伝 ～あかりと七つの妖珠～」 — https://www.pachibee.jp/machines/index/210060001 — 導入日2010-07-20、設定別BIG/REG/合算・機械割、BIG312枚/REG104枚 — reliability: INDUSTRY_MACHINE_DB
2. P-WORLD「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」 — https://www.p-world.co.jp/machine/database/5997 — 5号機ノーマル＋プチRT、ボーナスのみで出玉増加、特殊リプレイ約1/56、高期待ゾーン、獲得枚数 — reliability: INDUSTRY_MACHINE_DB
3. K-Navi「ボーナス出現率」 — https://p-kn.com/slot/1231/20149/ — 設定別8種類のボーナスフラグとBIG合算等 — reliability: CONTEMPORARY_ANALYSIS
4. パチマガスロマガ「小役確率・1000円あたりのゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/30/c.php — 設定別34.20〜36.95G、特殊リプレイ、7GプチRT — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
5. 5号機クロニクル SNKプレイモア — https://5goki.com/snkplaymore — 2010/7、設定別機械割一致 — reliability: RETROSPECTIVE_DATABASE
6. pachinko's blog 2010-07 archive — https://pachinko.hatenablog.jp/archive/2010/07 — 型式名「ゲッカノケンシ S」 — reliability: CONTEMPORARY_SECONDARY
7. グリーンべると「ネクソン、『幕末浪漫 月華の剣士外伝』を配信」 — https://web-greenbelt.jp/00002452/ — SNKプレイモア機・ゲーム性の後年業界確認 — reliability: INDUSTRY_MEDIA

## researchNotes

- 初見欠損を避けるため、正式名・略称・型式候補「ゲッカノケンシ S」・メーカー名を用い、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/1000円/50枚等の語を変えて横断検索。
- 型式名は2010年当時の機種資料で「ゲッカノケンシ S」を確認したため採用。検定番号は複数経路でも確定値を得られず推測しない。
- 実機完全再現用の細かな8ボーナスフラグ別抽選・演出抽選は物差しDBの目的外として最低限の照合に留めた。
