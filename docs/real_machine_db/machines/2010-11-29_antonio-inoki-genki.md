# アントニオ猪木が元気にするパチスロ機

machineName: アントニオ猪木が元気にするパチスロ機
manufacturer: オリンピア（平和グループ）
releaseDate: 2010-11-29
releaseDateStatus: HALL_INTRODUCTION_DATE
releaseDateNote: K-Navi・パチビーがホール導入日2010-11-29で一致。当時グリーンべるとは2010-10-08記事で2010-11-28から納品予定と明記。納品開始とホール導入を分離して保持。
generation: 5号機
systemType: A+ART / セットストック+ゲーム数上乗せART
formalModelName: アントニオ猪木が元気にするパチスロ機
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: 猪木が元気にするパチスロ機 / 猪木元気 / 新猪木
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_VERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前528「サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 528 / chronologicalFrontier 2010-11-22。
- 2010-11-22同日群と11/23～11/28境界を導入カレンダー・当時業界記事・K-Navi/P-WORLD/パチビー等で再監査。次の強い具体的ホール導入日として2010-11-29の本機を採用。
- repo内で機種名検索し既存レコードなしを確認して529件目として追加。

## payoutRateBySetting

- 設定1: **97.8%**
- 設定2: **99.4%**
- 設定3: **102.1%**
- 設定4: **105.7%**
- 設定5: **109.0%**
- 設定6: **112.1%**

P-WORLDの設定別機械割と、当時グリーンべるとの設定1～6レンジ97.8～112.1%が整合。後年整理資料にも同系列値あり。
confidence: HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合算
- 設定1: **1/412**
- 設定2: **1/407**
- 設定3: **1/402**
- 設定4: **1/392**
- 設定5: **1/379**
- 設定6: **1/374**

### REG
- 設定1: **1/669**
- 設定2: **1/643**
- 設定3: **1/607**
- 設定4: **1/585**
- 設定5: **1/555**
- 設定6: **1/520**

### ボーナス合算
- 設定1: **1/251**
- 設定2: **1/245**
- 設定3: **1/238**
- 設定4: **1/232**
- 設定5: **1/222**
- 設定6: **1/215**

### ART初当たり
- 設定1: **1/824**
- 設定2: **1/761**
- 設定3: **1/670**
- 設定4: **1/572**
- 設定5: **1/519**
- 設定6: **1/479**

補助値:
- 赤7BIG: 全設定 **1/1024**
- PB: 全設定 **1/16384**
- 青7BIG: 1/690 → 1/590

P-WORLDで全設定系列を取得。ボーナス合算・ART初当たりの設定1/6端値は当時グリーンべるととも整合。
confidence: HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「アントニオ猪木が元気にするパチスロ機 / 猪木元気 / 新猪木 / オリンピア」と「50枚 / 1000円 / 千円 / コイン持ち / ベース / ゲーム数」を組み替え、P-WORLD、K-Navi、パチビー、パチマガスロマガ、パチ＆スロ必勝本、古い解析サイト、回顧資料を横断したが、比較可能な本機固有50枚ベースを直接確定できず。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- ART「闘魂チャンス」: **1セット30G+α**
- ART純増: **約+1.3枚/G**
- セットストック式を軸に、ART中はゲーム数上乗せも存在。
- 公開上乗せゲーム数: 10 / 20 / 30 / 50 / 100 / 150G。

P-WORLD、K-Navi、パチビー、パチマガスロマガ、当時グリーンべるとで約+1.3枚/G・基本30Gを照合。
confidence: HIGH_MULTI_SOURCE

## basicPayout

- 赤7BIG: **約300枚**
- 青7BIG: **約200枚**
- REG: **48枚**
- PREMIUM BONUS（PB）: **約16枚**

P-WORLD、パチマガスロマガ、当時グリーンべるとで一致。
confidence: HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は「低確」「高確」に相当するART抽選状態があり、高確はART当選率優遇。
- 液晶ではバカンスモード＝高確チャンス、修行モード＝高確確定、緊急入院モード＝ART前兆期待大。
- 天井はボーナス間ハマリの**3段階**。
  - 第1天井: **630～929G**。到達後REG成立なら1/3で1回以上の押し順ナビ。
  - 第2天井: **930～1229G**。到達後REG成立なら1回以上の押し順ナビ確定。
  - 第3天井: **1230G以降**。到達でART確定。REG成立なら3回の押し順ナビ確定。
- 第3天井到達時ARTストック: **1個75% / 3個25%**（パチ＆スロ必勝本）。
confidence: HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **VERIFIED**。パチ＆スロ必勝本は設定変更時に「天井リセット」「ART関連リセット」「状態は低確&CZへ」と明記。別解析資料でも天井RT数とARTストック残がリセット、低確スタートと一致。

carryOverBehavior: **VERIFIED_VIA_POWER_CYCLE_SCOPE**。パチ＆スロ必勝本は「電源OFF/ON時は全て引き継ぐ」と明記。設定変更なしの据え置き運用で、少なくとも公開対象の天井・ART関連・状態は保持される扱いとして記録。

powerCycleBehavior: **VERIFIED**。設定変更を伴わない電源OFF→ONは**全て引き継ぐ**。

gameCounterReset: **RESET_ON_SETTING_CHANGE / RETAIN_ON_POWER_CYCLE**。設定変更で3段階天井のボーナス間ゲーム数進捗をリセット。電源OFF→ONのみでは引き継ぐ。

ceilingAfterReset: **STANDARD_630_930_1230G_TIERS_FROM_RESET / NO_DEDICATED_SHORTER_RESET_CEILING_CONFIRMED**。リセット専用の短縮天井は確認されず、設定変更後は通常の3段階天井をゼロから数える。

modeAfterReset: **LOW_STATE_AND_CZ_START**。設定変更後は低確&CZへ。通常時の低確/高確状態は設定変更で再セットされる。

stateAfterReset: **RESET_TO_LOW_AND_CZ / ART_RELATED_RESET**。設定変更でART関連情報がリセットされ、低確&CZスタート。古い解析資料はARTストック残リセットを明記。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **VERIFIED_PARTIAL**。設定変更後はCZスタート。低信頼補助資料では「朝一初ボーナスがREGなら1/3でART突入」とされ、K-Naviにも「朝イチのREGにうま味あり」専用項目が存在するが、K-Navi本文を直接回収できないため1/3値は確定主値へ昇格させず補助情報扱い。

resetPenalties: **VERIFIED**。設定変更で前日までの天井ゲーム数進捗とARTストック残が消失する。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名・別称・オリンピアと「ガックン / リールガックン / 初期出目 / 朝一 / 設定変更判別」を組み替えて探索したが、本機固有の確定的変更判別手段を高信頼資料から直接確認できず。

numericResetData:
- settingChangeCeilingProgress: **RESET**
- powerCycleCeilingProgress: **RETAIN**
- firstCeilingTier: **630G**
- secondCeilingTier: **930G**
- thirdCeilingTier: **1230G**
- firstTierREGNavigation: **1/3で1回以上の押し順ナビ**
- secondTierREGNavigation: **1回以上の押し順ナビ確定**
- thirdTierREGNavigation: **3回すべて押し順ナビ確定**
- thirdTierARTStock: **1個75% / 3個25%**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- morningFirstREGBenefitClaim: **1/3でART突入（LOW_CONFIDENCE_SECONDARY / K-Navi専用項目存在・本文未回収）**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **VERIFIED_CORE_WITH_ONE_LOW_CONFIDENCE_MORNING_CLAIM**

## conflicts

- 現時点で性能コアの主要数値に重大なCONFLICTなし。
- 5号機クロニクルの本機説明には「ボーナス非搭載・ART純増約2.0枚/G・闘魂RUSH50G」と、他の複数当時資料と明白に異なる記述が混在しているため、**SERIES_MIXUP_OR_PAGE_DATA_ERROR**として採用しない。機械割系列のみ他資料と一致するため照合補助に限定。
- パチマガスロマガの青BIG規定払い出し表記246枚とP-WORLDの264枚表記に差がある。実獲得約200枚は一致するため、物差し主値は実獲得約200枚を採用し、規定払い出し枚数はCONFLICTとして詳細比較対象外。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- resetDetection（ガックン等）: UNVERIFIED_AFTER_RESEARCH
- 朝一初REG 1/3 ARTの高信頼本文照合: PARTIAL / LOW_CONFIDENCE_SECONDARY

## sources

取得日: **2026-09-04**

1. グリーンべると / P-WORLD業界ニュース「闘魂再び！猪木シリーズ最新作が登場」 — 2010-10-08、オリンピア製、11/28納品予定、ART30G・約+1.3枚/G、基本獲得、ボーナス合算/ART初当たり/出玉率レンジ。
   - https://news.p-world.co.jp/articles/4196/greenbelt
   - confidence: INDUSTRY
2. K-Navi「アントニオ猪木が元気にするパチスロ機」 — ホール導入開始2010-11-29、ボーナス合算、ART30G・約+1.3枚/G、設定変更後/朝一REG専用攻略項目の存在。
   - https://p-kn.com/slot/1297/
   - confidence: ANALYSIS_HIGH
3. パチビー — 導入日2010-11-29、5号機ART、天井あり、約+1.3枚/G。
   - https://www.pachibee.jp/machines/lecture/210090012
   - confidence: ANALYSIS_HIGH
4. P-WORLD機種DB ID 6126 — 設定別BIG/REG/ボーナス合算/ART初当たり/機械割、基本獲得、ART30G+α・約+1.3枚/G、1230G天井、通常時状態。
   - https://www.p-world.co.jp/machine/database/6126
   - confidence: ANALYSIS_HIGH
5. パチ＆スロ必勝本「設定変更&天井情報」 — 設定変更で天井/ART関連/状態リセット、低確&CZ、電源OFF/ONは全て引継ぎ、630/930/1230Gの3段階天井と恩恵。
   - https://p.hisshobon.jp/machine/1682/1/27811
   - confidence: ANALYSIS_HIGH
6. パチ＆スロ必勝本「通常時の状態」 — 低確/高確、高確でART当選率優遇。
   - https://p.hisshobon.jp/machine/1682/1/27388
   - confidence: ANALYSIS_HIGH
7. パチマガスロマガ「基本システム」 — ART約+1.3枚/G・30G、赤BIG約300枚、青BIG約200枚、REG約48枚、PB約16枚。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/93/a.php
   - confidence: ANALYSIS_HIGH
8. パチスロ救急車 — ボーナス確率、3段階天井、設定変更で天井RT数/ARTストック残リセット・低確スタート。
   - https://www.eightbeat.com/slot99/kishu/a_gyou/a/antonioINOKIgenki/page_menu.html
   - confidence: ANALYSIS_SINGLE
9. まじバナ — 設定変更で天井ゲーム数リセット、朝一初REG 1/3 ART主張。補助資料としてのみ使用。
   - https://ameblo.jp/maji-bana/entry-11500259868.html
   - confidence: LOW_CONFIDENCE_SECONDARY

## QA note

- 50枚ベースは複数表記・複数資料系統を横断後も直接値を確定できなかったためUNVERIFIED_AFTER_RESEARCH。
- 朝一初REGの1/3 ARTはK-Naviの該当項目タイトル存在と低信頼二次資料の数値までは確認したが、高信頼本文の直接回収ができず主値化していない。
- 有利区間は制度前のためNOT_APPLICABLE。
