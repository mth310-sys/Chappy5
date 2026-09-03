# サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～

machineName: サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～
manufacturer: アビリット（現コナミアミューズメント）
releaseDate: 2010-11-22
releaseDateStatus: HALL_INTRODUCTION_DATE
releaseDateNote: パチビーが導入日2010-11-22と明記。P-WORLDは2010年11月粒度。当時グリーンべると2010-09-29記事でアビリット発表機として確認。
generation: 5号機
systemType: A+ART / 上乗せART / 無限ART
formalModelName: サイボーグ009V
inspectionNumber: 0S0774
aliases: サイボーグ009～地上より永遠に～ / サイボーグ009 地上より永遠に
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前527「エピソードドライブ」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 527 / chronologicalFrontier 2010-11-15。
- 2010-11-15同日群を再監査し、11/16以降の導入カレンダー・当時/後年DBを横断。2010-11-22導入の本機を次の具体日付未処理機として採用。
- repo内で本機既存レコードなしを確認して528件目に追加。

## payoutRateBySetting

- 設定1: **94.71%**
- 設定2: **97.76%**
- 設定3: **102.04%**
- 設定4: **106.42%**
- 設定5: **111.58%**
- 設定6: **117.40%**

P-WORLDの精密値とpacnkが一致。5号機クロニクルは94.7 / 97.7 / 102.0 / 106.4 / 111.6 / 117.4%の丸め系列で整合。
confidence: HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/885.6**
- 設定2: **1/840.2**
- 設定3: **1/799.2**
- 設定4: **1/762.0**
- 設定5: **1/728.2**
- 設定6: **1/682.7**

### サイバーバトル
- 設定1: **1/138.8**
- 設定2: **1/136.2**
- 設定3: **1/134.8**
- 設定4: **1/132.9**
- 設定5: **1/130.5**
- 設定6: **1/128.3**

### 全員集合チャンス
- 設定1: **1/697.2**
- 設定2: **CONFLICT — P-WORLD 1/689.9 / 5号機クロニクル 1/689.2**
- 設定3: **1/682.7**
- 設定4: **1/675.6**
- 設定5: **1/668.7**
- 設定6: **1/662.0**

### ボーナス合算
- 設定1: **1/102.4**
- 設定2: **1/100.5**
- 設定3: **1/98.7**
- 設定4: **1/96.9**
- 設定5: **1/95.0**
- 設定6: **1/92.8**

### ART初当たり
- 設定1: **1/504.40**
- 設定2: **1/482.00**
- 設定3: **1/444.40**
- 設定4: **1/432.10**
- 設定5: **1/393.60**
- 設定6: **1/340.80**

ボーナス系列はP-WORLD＋5号機クロニクルで照合。ART初当たりはpacnkの単一整理値として分離保持。
confidence: BONUS_HIGH_MULTI_SOURCE / ART_ANALYSIS_SINGLE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「サイボーグ009 THE CYBORG SOLDIER / サイボーグ009～地上より永遠に～ / サイボーグ009V / アビリット / TAKASAGO」と「1000円 / 千円 / 50枚 / コイン持ち / ベース / G数」を組み替え、P-WORLD、パチビー、パチマガスロマガ、K-Navi、古い解析DB・回顧資料を横断したが、本機固有の比較可能な50枚ベースを直接確定できず。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- ART「アクセラレーションモード」: **1セット50G+α**
- ART純増: **約+1.6枚/G**
- 無限ART「スーパーアクセラレーションモード」: **次回ボーナスまで継続 / 約+1.6枚/G**
- 通常ARTはゲーム数上乗せ型。

P-WORLD、パチビー、パチマガスロマガで約+1.6枚/Gを照合。
confidence: HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約230枚**
- サイバーバトル: **最大36枚**
- 全員集合チャンス: **最大36枚**
- ART中のサイバーバトル/全員集合チャンスは「加速装置」となり、ボーナス獲得枚数とは別にART上乗せ契機となる。
confidence: HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時には通常/高確/超高確に相当する内部状態が存在し、上位ほどボーナス当選時のART突入期待度が上昇。
- 「スクランブルモード」は超高確確定。
- **ゲーム数天井: ボーナス&ART間777G**で無限ART「スーパーアクセラレーションモード」へ突入。
- **ART非当選ボーナス回数天井: 1～15回振り分け、MAX15回**。規定回数到達後の次回ボーナスでART突入。
- 「無言加速装置演出」発生時はスルー天井まで残り3回以下が確定。
confidence: HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_VERIFIED**。設定変更後はゲーム数天井とART非当選ボーナス回数天井がリセットされる。加えてP-WORLDは設定変更後 **1/2（50%）で高確以上からスタート** と明記。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の777G進捗、スルー回数、通常/高確/超高確状態、ART権利/ストックの営業日跨ぎ保持を、本機固有の「据え置き」直接文言で確定できず。設定変更時リセット情報から逆算しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の777G進捗、スルー回数、内部状態、ART権利/ストック処理を直接確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE**。設定変更でボーナス&ART間777G天井のゲーム数進捗をリセット。ART非当選ボーナスのスルー回数天井もリセット。

ceilingAfterReset: **777G_STANDARD_CEILING / NO_DEDICATED_SHORTER_RESET_CEILING_CONFIRMED**。設定変更専用の短縮天井は確認されず、リセット後は通常の777G天井をゼロから数える扱いとして公開情報を保持。

modeAfterReset: **PARTIAL_VERIFIED**。設定変更後、**50%で高確以上スタート**。高確/超高確の内訳や残り50%の詳細振り分けは今回の公開資料では確定せず。

stateAfterReset: **PARTIAL_VERIFIED**。内部状態について設定変更後50%で高確以上という公開値を保持。ARTゲーム数、無限ART権利、ストック等の設定変更時処理は直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **VERIFIED_PARTIAL**。設定変更後 **50%で高確以上スタート**するため、朝一ボーナスからのART期待という客側メリットが存在。

resetPenalties: **VERIFIED_PARTIAL**。設定変更で777G天井進捗とART非当選ボーナス回数天井進捗がリセットされるため、前日までの天井接近分は失われる。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名・型式サイボーグ009V・アビリット/TAKASAGOと「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / ガックン / 初期出目 / 液晶」を組み替えて探索したが、本機固有のガックンや確定的変更判別手段は直接確認できず。朝一高確示唆は50%抽選のため確定判別とは扱わない。

numericResetData:
- highOrHigherStartProbabilityOnSettingChange: **50% (1/2)**
- gameCeilingAfterSettingChange: **777G from reset counter**
- bonusThroughCeilingProgressOnSettingChange: **RESET**
- bonusThroughCeilingMaximum: **15 bonuses**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDetailedDistribution: **UNVERIFIED_AFTER_RESEARCH**
- morningHitProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- 全員集合チャンス設定2: **P-WORLD 1/689.9 / 5号機クロニクル 1/689.2**。平均せずCONFLICTとして双方保持。
- 機械割は精密値と丸め値の差のみで実質整合。
- メーカー表記は当時資料/パチビーではアビリット、現行P-WORLDでは承継先のコナミアミューズメント。時代差による会社表記変更として扱い、数値競合にはしない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior詳細: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset詳細振り分け: UNVERIFIED_AFTER_RESEARCH
- ART権利/ストックの設定変更時処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection（ガックン等）: UNVERIFIED_AFTER_RESEARCH
- morningHitProbability: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. パチビー「サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～」 — アビリット、導入日2010-11-22、5号機ART、天井あり、約+1.6枚/G。
   - https://www.pachibee.jp/movies/index/3478
   - confidence: ANALYSIS_HIGH
2. P-WORLD機種DB ID 6119 — 現行メーカー表記コナミアミューズメント、型式サイボーグ009V、検定0S0774、全設定ボーナス確率/機械割、獲得枚数、ART50G+α・約+1.6枚/G、777G天井、ボーナス回数天井、設定変更後1/2で高確以上。
   - https://www.p-world.co.jp/machine/database/6119
   - confidence: ANALYSIS_HIGH
3. パチマガスロマガ「サイボーグ009～地上より永遠に～ 基本システム」 — ART約+1.6枚/G、777G無限ART天井、ART非当選ボーナス15回、BIG約230枚、赤/黒REG最大36枚。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/26/a.php
   - confidence: ANALYSIS_HIGH
4. pacnk「サイボーグ009~地上より永遠に~」 — 当時メーカーアビリット、2010年11月、設定別ART初当たり/機械割、777G天井・1～15回スルー天井、設定変更後は両天井をリセット。
   - https://pacnk.com/slot/tools/sh_9.html
   - confidence: RETROSPECTIVE_ANALYSIS_SINGLE
5. 5号機クロニクル「KONAMI系 5号機一覧」 — 2010/11、BIG/REG/CB/合算・丸め機械割を照合。設定2全員集合チャンスのみP-WORLDと微差。
   - https://5goki.com/konami
   - confidence: RETROSPECTIVE_CROSSCHECK
6. グリーンべると（P-WORLD業界ニュース転載）「加速装置がARTで復活、上乗せG数を倍率抽選」2010-09-29 — アビリットが2010-09-27に本機を発表した当時業界記事。
   - https://news.p-world.co.jp/articles/4179/greenbelt
   - confidence: CONTEMPORARY_INDUSTRY
7. K-Navi「サイボーグ009～地上より永遠に～」 — 当時解析ページ群。ART中加速装置等の仕様補助確認。
   - https://p-kn.com/slot/1291/
   - confidence: ANALYSIS_HIGH
