# ルパン三世～ルパン一族の秘宝～

machineName: ルパン三世～ルパン一族の秘宝～
manufacturer: 平和
releaseDate: 2010-09-21
releaseDateStatus: CONFIRMED_HANDOFF_MULTI_SOURCE / OFFICIAL_MONTH_CONFIRMED
releaseDateNote: 直前handoffでK-Navi等の2010-09-21全国導入アンカーとして確認済み。平和ルパン公式HISTORYは2010年9月導入開始、平和2010年製品一覧は「登場年月: 2010年07月」とするため、後者は発表/登場月系の定義差として分離しホール導入日とは混同しない。
generation: 5号機
systemType: ART / ボーナス+ツインART
formalModelName: ルパン三世ルパン一族の秘宝Z
formalModelNameStatus: SECONDARY_MARKET_CORROBORATED
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_RESEARCHED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線509「極楽パロディウス」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount 509 / chronologicalFrontier 2010-09-21。
- repo内で「ルパン三世」「ルパン一族の秘宝」を検索し本機レコード未登録を確認。9/21同日群の未処理として510件目に追加。
- 2010-09-07〜20境界は直前handoff指定に従い、HAZUSE 9/10・9/17節点と月間一覧の再監査を継続対象として保持。今回、新たに9/21より前と確定できる未登録全国導入機は追加確定できなかった。

## payoutRateBySetting

- 設定1: **97.1%**
- 設定2: **99.1%**
- 設定3: **101.8%**
- 設定4: **104.5%**
- 設定5: **109.1%**
- 設定6: **115.8%**

K-Navi、pacnk、5号機回顧DBで一致。PachiSeven回顧記事には 97.1 / 99.1 / 101.3 / 104.0 / 108.6 / 115.5% の別系列があるため、主値は複数解析一致系列を採用し、別系列はCONFLICTとして保持。
confidence: ANALYSIS_MULTI_SOURCE_HIGH_WITH_CONFLICT

## initialHitBySetting

### BIG合算
- 設定1: **1/397**
- 設定2: **1/390**
- 設定3: **1/377**
- 設定4: **1/364**
- 設定5: **1/352**
- 設定6: **1/331**

### REG
- 設定1: **1/596**
- 設定2: **1/585**
- 設定3: **1/565**
- 設定4: **1/546**
- 設定5: **1/529**
- 設定6: **1/496**

### ボーナス合算
- 設定1: **1/238**
- 設定2: **1/234**
- 設定3: **1/226**
- 設定4: **1/218**
- 設定5: **1/211**
- 設定6: **1/199**

### ボーナス＋ART初当り合算
- 設定1: **1/155**
- 設定2: **1/149**
- 設定3: **1/142**
- 設定4: **1/135**
- 設定5: **1/127**
- 設定6: **1/115**

K-Naviとpacnkで一致。P-WORLDのS-BIG/N-BIG/REG各設定値とも合算関係が整合。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- 設定1: **34.32G/1000円**
- 設定2: **34.33G/1000円**
- 設定3: **34.35G/1000円**
- 設定4: **34.35G/1000円**
- 設定5: **34.37G/1000円**
- 設定6: **34.39G/1000円**

旧パチマガスロマガ本機小役ページの直接値。
confidence: ANALYSIS_HIGH

## netIncrease

- ART「ゼニガタイム」: **約+1.3枚/G**、1セット **30G / 50G / 100G** のストック管理型。
- ART「スーパーヒーロー」: **約+1.3枚/G**、基本 **100G+α** のゲーム数上乗せ型。PachiSeven回顧では初期100/150/200Gの整理も確認。
- P-WORLD/K-Navi/PachiSevenでツインART方式と純増が整合。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- SUPER BIG: **約252枚 + ART確定**
- NORMAL BIG: **約204枚**
- REG: **約72枚**

P-WORLD、当時解析ブログ、PachiSeven回顧で一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時にはART高確率状態「サーチライトステージ」が存在。ART非当選ボーナス後は同高確ステージへ移行する仕様をP-WORLDで確認。
- 第1天井: **ボーナス間1000G以降**、状態Cで2連/3連チェリー成立時にゼニガタイム高確率当選。
- 第2天井: **ボーナス間1500G以降**のボーナスでスーパーヒーロー確定。
- REG天井: 内部選択された **128 / 181 / 565 / 821 / 999G** 等の規定G数を超えてREG当選するとスーパーヒーロー確定。
- 通常時内部状態A/B/C/プチRTが存在することを旧パチマガで確認。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Naviと旧パチマガスロマガには本機固有「設定変更後の挙動」「朝イチ・設定変更」項目が現存することを確認したが、今回検索取得できた本文では具体的な変更時処理を直接回収できなかった。検索語を「設定変更時」「リセット時」「朝一」「天井」「宵越し」「サーチライト」へ変更し、K-Navi、旧パチマガ、pacnk、P-WORLD、当時解析ブログ、回顧資料まで再探索したが、推定で埋めない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間1000/1500G天井進捗、REG規定G、内部状態A/B/C、サーチライト高確、ZTストック、SH残Gを日跨ぎでどう保持するかを直接列挙した本機固有資料を確定できず。一般5号機ART機の挙動から自動補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合のボーナス間G数、REG規定G、内部状態、高確、ARTストック/残G、表示ステージの処理を本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。1000G/1500Gのボーナス間天井とREG規定Gは確認済みだが、設定変更時CLEAR/RETAINは直接本文未回収。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井、1000G/1500G天井の再計測起点、REG規定G再抽選の有無はいずれも本機固有の直接値を確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時内部状態A/B/C/プチRT、ART高確「サーチライトステージ」は確認済みだが、設定変更時の初期状態/振り分けは未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ZTストック、SHゲーム数、潜伏、内部RT状態について設定変更時の直接処理を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、高確スタート、ARTストック付与、朝一REG優遇等の公開恩恵は今回確認できず。

resetPenalties: **NONE_DIRECTLY_CONFIRMED_AFTER_RESEARCH**。天井進捗や状態が変更時に消失するか自体が未確定のため、不利を断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ステージ、液晶表示等による本機固有の設定変更判別条件・確率を確定できず。

numericResetData:
- firstCeilingThreshold: **1000G以降**（2連/3連チェリー成立時ZT高確率当選、通常仕様）
- secondCeilingThreshold: **1500G以降**（次回ボーナスでSH確定、通常仕様）
- regCeilingCandidateGames: **128 / 181 / 565 / 821 / 999G**（通常仕様）
- resetDedicatedCeiling: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: RESET_SPECIFIC_MENU_EXISTS_BUT_BODY_NOT_RECOVERED / GAME_COUNTER_CLEAR_RETAIN_UNVERIFIED / POWER_CYCLE_UNVERIFIED

## conflicts

- 機械割主系列: **97.1 / 99.1 / 101.8 / 104.5 / 109.1 / 115.8%**（K-Navi/pacnk/5号機回顧DB）。
- PachiSeven回顧記事: **97.1 / 99.1 / 101.3 / 104.0 / 108.6 / 115.5%**。平均化せず `CONFLICT` を保持。
- 平和2010製品一覧は「登場年月 2010年07月」、平和ルパン公式HISTORYは「2010年9月 導入開始」。発表/製品登場とホール導入の定義差として保持し、releaseDate主値は直前handoffで複数導入カレンダー照合済みの2010-09-21。

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior具体本文: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の1000/1500G天井・REG規定G・内部状態・ARTストック: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset専用天井/モード振り分け/朝一当選率: UNVERIFIED_AFTER_RESEARCH
- gakkun/初期出目等の変更判別: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. 平和 2010年パチスロ機種一覧 — 本機掲載 / 製品登場年月2010年07月（発表系日付として分離）
   - https://www.heiwanet.co.jp/products/pachislot/2010/
   - confidence: OFFICIAL
2. HEIWA×ルパン三世 HISTORY — **2010年9月 導入開始**
   - https://heiwa-lupin.com/history/
   - confidence: OFFICIAL
3. K-Navi — 設定別BIG/REG/合算/ボーナス+ART合算/機械割 / 天井・設定変更項目の存在
   - https://p-kn.com/slot/1264/
   - confidence: ANALYSIS_HIGH
4. P-WORLD — ツインART仕様 / 約+1.3枚/G / 基本獲得 / 1000G・1500G・REG規定G天井 / サーチライト高確
   - https://www.p-world.co.jp/machine/database/6058
   - confidence: ANALYSIS_HIGH
5. 旧パチマガスロマガ — 50枚ベース設定1〜6 / 内部状態A/B/C/プチRT / 本機固有「朝イチ・設定変更」項目の存在
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/39/heiwa_slot_39.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/39/c.php
   - confidence: ANALYSIS_HIGH
6. pacnk — 設定別ボーナス+ART初当り、ボーナス初当り、PAYOUT照合
   - https://pacnk.com/slot/tools/sh_lupinitizokunohiho.html
   - confidence: ANALYSIS_SECONDARY
7. PachiSeven回顧 — ART方式・純増・獲得枚数 / 別機械割系列
   - https://pachiseven.jp/articles/detail/12440
   - confidence: RETROSPECTIVE_INDUSTRY
8. 当時解析ブログ — 2010年9月機 / 獲得枚数 / 1000G・1500G・REG規定G天井
   - https://ameblo.jp/samurai777net/entry-10642865753.html
   - confidence: CONTEMPORARY_SECONDARY
9. グリーンべると — 2010-07-28展示会、発表時系列補助
   - https://web-greenbelt.jp/00006632/
   - confidence: INDUSTRY_PRESS
10. 家庭用実機流通表記 — formalModelName「ルパン三世ルパン一族の秘宝Z」補助
   - https://item.rakuten.co.jp/spider-s/g93/
   - confidence: SECONDARY_MARKET

## nextRelayHint

- recordCount 510 / chronologicalFrontier 2010-09-21。
- 9/21同日群をHAZUSE・P-WORLD/K-Navi・月間一覧で最終監査し、「沖楽」の正確な導入日を確定する。9/21以前と判明した場合は時系列補完として優先追加。
- 2010-09-07〜20境界のHAZUSE 9/10・9/17節点も継続監査し、日付定義差の未登録を飛ばさない。
- 境界と9/21群を閉じた場合のみ9/22以降へ進む。HAZUSE 9/24・9/27節点を確認し、既知候補「茉莉花の剣」「リングにかけろ1 ～黄金の日本Jr.編～」等をrepo重複確認後に処理。
- 本機の追加QAは、設定変更で1000/1500G天井・REG規定GがCLEAR/RETAINされる直接本文、単純電源OFF→ON、朝一内部状態、ガックン等が新たに回収できた場合のみ追補。推測で埋めない。
- 遡及resetBehavior QA地点は既存handoff記載を維持し、新規時系列前進を止めない。