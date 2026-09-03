# ノーマルだよ！サブちゃん

machineName: ノーマルだよ！サブちゃん
manufacturer: オリンピア
formalModelName: お見事！サブちゃん2NY
approvalNumber: 9S1394
releaseDate: 2010-03-22
generation: 5号機
systemType: ノーマル / ボーナス主体 / 技術介入 / 特殊リプレイ後6GプチRT
coreStatus: COMPLETE_CORE_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線実レコード「新鬼武者」を再取得して継続。
- 開始時正本は recordCount 466 / chronologicalFrontier 2010-03-23。
- LATEST_HANDOFFの03-23同日群監査候補を再確認したところ、本機は未登録かつHAZUSEで2010-03-22導入開始と確認できたため、漏れ防止を優先して467件目として遡及追加。
- 「続・お見事！サブちゃん」はK-Navi/パチビーで2010-03-23導入。「デジスロA」はベルコ公式で2010年4月登場のため03-23候補から除外して4月境界へ送る。
- chronologicalFrontier自体は2010-03-23を維持する。

## payoutRateBySetting

- 設定1: **95.5%**
- 設定2: **97.2%**
- 設定3: **99.6%**
- 設定4: **104.5%**
- 設定5: **109.0%**
- 設定6: **115.1%**

HAZUSEとK-Naviで同一系列を確認。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合算
- 設定1: **1/287.4**
- 設定2: **1/280.1**
- 設定3: **1/269.7**
- 設定4: **1/261.1**
- 設定5: **1/244.5**
- 設定6: **1/222.2**

### REG合算
- 設定1: **1/356.2**
- 設定2: **1/344.9**
- 設定3: **1/327.7**
- 設定4: **1/309.1**
- 設定5: **1/284.9**
- 設定6: **1/248.2**

### ボーナス合算
- 設定1: **1/159.1**
- 設定2: **1/154.6**
- 設定3: **1/147.9**
- 設定4: **1/141.5**
- 設定5: **1/131.6**
- 設定6: **1/117.2**

HAZUSEの設定別合算値を主値とし、P-WORLDの設定1合算1/159.1および個別ボーナス系列とも整合。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 設定1〜6: **約35.0〜約38.0G / 50枚**

HAZUSE調べ。設定ごとの個別値ではなく設定1〜6のレンジとして保持する。

confidence: ANALYSIS_HIGH

## netIncrease

- 通常の出玉増加はボーナス主体。
- 特殊リプレイ成立後に**6G間のプチRT**へ移行し、リプレイ確率が約1/1.7へ上昇するが、長期出玉RT/ARTではないため純増枚数/Gの物差し値は設定しない。

confidence: ANALYSIS_HIGH

## basicPayout

- BIG: **最大311枚**（技術介入時）
- REG: **104枚**

P-WORLDで直接確認。BIGは14枚役を1度取得する手順によりMAX311枚。

confidence: INDUSTRY_DB

## modeSpecificMinimumData

- ノーマルタイプで、ボーナスのみを主な出玉源とする。
- 特殊リプレイ成立後に6GのプチRTを搭載。
- P-WORLDで**天井RT非搭載**を明記。
- 通常ゲーム数による天井・ART/AT/CZの長期状態管理は確認されない。

## resetBehavior — v0.7

settingChangeBehavior: **NO_MACHINE_SPECIFIC_RESET_BENEFIT_CONFIRMED_AFTER_RESEARCH**。`ノーマルだよ!サブちゃん / お見事!サブちゃん2NY / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン` を組み替えて検索したが、設定変更時だけの恩恵・不利・専用モード数値を本機固有資料で確認できず。

carryOverBehavior: **NO_GAMECOUNT_CEILING_TO_CARRY / OTHER_MACHINE_SPECIFIC_BEHAVIOR_UNVERIFIED**。本機は天井RT非搭載のノーマルタイプのため、通常ゲーム数天井の据え置き/宵越し概念は非該当。短時間プチRTなどゲーム数天井以外の状態が電源をまたぐ場合の処理は直接資料未確認。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ON時の短時間RT状態、表示、リール初期挙動等を本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CEILING**。P-WORLDが天井RT非搭載を明記しており、比較対象となる通常ゲーム数天井カウンタなし。

ceilingAfterReset: **NOT_APPLICABLE / NO_CEILING**。通常天井・リセット短縮天井とも非該当。

modeAfterReset: **NO_LONG_TERM_GAMECOUNT_MODE_CONFIRMED**。朝一専用モード、通常ゲーム数解除モード等は確認なし。

stateAfterReset: **UNVERIFIED_FOR_SHORT_PETIT_RT_STATE**。特殊リプレイ後6GプチRTという短時間状態は存在するが、設定変更/電源OFF→ON時の扱いを直接確定できず。一般論で補完しない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用当選率・高確率・短縮天井等の公開恩恵数値なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、表示/ランプ、ゲーム数挙動による設定変更判別を本機固有資料で確定できず。

numericResetData:
- normalCeiling: **NONE / 天井RT非搭載**
- resetShortenedCeiling: **NOT_APPLICABLE**
- publicMorningSpecificProbability: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_WITH_NO_CEILING_CONFIRMED

## conflicts

- 導入開始日の主値はHAZUSEの2010-03-22。兄弟機「続・お見事！サブちゃん」はK-Navi/パチビーで2010-03-23。本機の別日付を直接示す高信頼資料は今回確定できず、兄弟機の日付を転記しない。

## missingFields

- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- short petit-RT state handling on setting change/power cycle: UNVERIFIED_AFTER_RESEARCH
- physical reset detection such as reel gakkun: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. HAZUSE「ノーマルだよ!サブちゃん 基本スペック」 — https://hazuse.com/machine/pachislot/9S1394/genre/201/ — 型式名 お見事！サブちゃん2NY、検定9S1394、2010-03-22導入、メーカー — reliability: ANALYSIS_HIGH
2. HAZUSE「ノーマルだよ!サブちゃん 天井・設定判別・機械割」 — https://hazuse.com/machine/pachislot/9S1394/ — 設定別BIG/REG/合算、50枚約35〜38G、機械割、6GプチRT、BIG MAX311枚 — reliability: ANALYSIS_HIGH
3. P-WORLD「ノーマルだよ!サブちゃん」 — https://www.p-world.co.jp/machine/database/5857 — 5号機ノーマル/技術介入、BIG最大311枚、REG104枚、天井RT非搭載、個別ボーナス系列 — reliability: INDUSTRY_DB
4. K-Navi「機械割&期待収支 ノーマルだよ!サブちゃん」 — https://p-kn.com/slot/1159/16939/ — 機械割95.5〜115.1% — reliability: ANALYSIS_HIGH
5. K-Navi業界ニュース「続・お見事!サブちゃん／ノーマルだよ!サブちゃん」 — https://p-kn.com/topics/news/961/ — 平和発表、オリンピア4号機後継の2スペック同時展開 — reliability: INDUSTRY
6. ベルコ公式「デジスロA」 — https://www.s-bellco.co.jp/products/slot/digislo_a/ — 2010年4月登場。03-23候補から除外する時系列根拠 — reliability: OFFICIAL
