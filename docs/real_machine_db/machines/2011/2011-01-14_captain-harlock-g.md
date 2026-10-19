# パチスロ キャプテンハーロックG

machineName: パチスロ キャプテンハーロックG
manufacturer: SANKYO
releaseDate: 2011-01-14
releaseDateStatus: CONFLICT
releaseDateNote: HAZUSEは導入開始日2011-01-14。SANKYO公式は2011.01のみ。当時プレイグラフ転載はホール導入2011-01-24、グリーンべると記事引用は納品2011-01-23からとする。日付定義差/資料差を平均化せず保持し、時系列キュー上は最古の具体的導入開始日2011-01-14を主値とする。
generation: 5号機
systemType: A+ART / セットストック式ART
formalModelName: パチスロ キャプテンハーロック G
inspectionNumber: 0S0498
aliases: キャプテンハーロックG / パチスロ キャプテンハーロック
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線533「パチスロサクラ大戦3 ～巴里は燃えているか～」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 533 / chronologicalFrontier 2011-01-11。
- 2011-01-11同日群と1/12以降を監査。HAZUSEの2011年1月節点で本機に2011-01-14の具体導入開始日が存在し、repo内未登録を確認。
- 当時プレイグラフ転載では1/24ホール導入、グリーンべると記事引用では1/23納品開始。SANKYO公式は2011.01。具体日が競合するためCONFLICTとして保持。

## payoutRateBySetting

- 設定1: **96.4%**
- 設定2: **98.9%**
- 設定3: **101.5%**
- 設定4: **104.2%**
- 設定5: **108.2%**
- 設定6: **111.3%**

HAZUSEとパチマガスロマガで一致。
confidence: ANALYSIS_HIGH

## initialHitBySetting

### BIG合成
- 設定1: **1/425.6**
- 設定2: **1/407.1**
- 設定3: **1/404.5**
- 設定4: **1/392.4**
- 設定5: **1/390.1**
- 設定6: **1/362.1**

### REG合成
- 設定1: **1/537.2**
- 設定2: **1/524.3**
- 設定3: **1/500.3**
- 設定4: **1/468.1**
- 設定5: **1/452.0**
- 設定6: **1/442.8**

### ボーナス合算
- 設定1: **1/237.4**
- 設定2: **1/229.1**
- 設定3: **1/223.7**
- 設定4: **1/213.5**
- 設定5: **1/209.4**
- 設定6: **1/199.2**

### ART初当たり
- 設定1: **1/769.2**
- 設定2: **1/617.0**
- 設定3: **1/728.0**
- 設定4: **1/627.4**
- 設定5: **1/735.3**
- 設定6: **1/585.4**

SANKYO公式オンライン博物館のBB/RB/合算/ART値とパチマガスロマガの精密値が丸め範囲で整合。
confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「キャプテンハーロックG / パチスロ キャプテンハーロック / 0S0498」＋「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」で公式、P-WORLD、HAZUSE、パチマガスロマガ、旧天井DB、回顧資料を再探索したが、比較可能な直接値を確定できず。推定しない。

confidence: UNVERIFIED

## netIncrease

- ART「アルカディアモード」: **約+1.5枚/G**
- 1セット: **50G**
- セットストック式

SANKYO公式、P-WORLD、当時プレイグラフ転載、パチマガスロマガ、HAZUSEで一致。
confidence: OFFICIAL_PLUS_MULTI_SOURCE

## basicPayout

- BIG: **約201枚**（300枚超払い出し終了）
- REG: **約66枚**（90枚超払い出し終了）

P-WORLD、パチマガスロマガ、HAZUSEで一致。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時内部モード: **低確 / 高確**。ART抽選率に影響。
- CZ「チャレンジゾーン」: **5G**。
- ART終了後「デンジャーゾーン」: **10G**の自力引き戻し区間。
- 天井①: **ボーナス間1100G**で、以降次回ボーナスまでART抽選の高確モードへ。
- 天井②: **ART非当選REGが3連続**で到達し、次回ボーナス成立時のART当選が確定とする旧解析。REG天井はBIG成立までクリアされないとの旧天井DB記載。

confidence: ANALYSIS_HIGH_FOR_1100G / ANALYSIS_SINGLE_FOR_REG_CEILING_DETAIL

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」解析項目が存在することは確認できたが、今回の検索取得では具体本文を安全に回収できなかった。設定変更時の天井/モード/状態処理を一般的5号機挙動から推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にボーナス間1100G進捗、REG連続回数、低高確、ARTストック/潜伏が厳密にどう保持されるか、本機固有の直接根拠を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井進捗、REG連続回数、内部状態、ARTストック/潜伏について直接根拠を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。旧天井DBの本機「設定変更後／その他備考」欄は空欄であり、CLEAR/RETAINを推測で補完しない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井/変更天井の公開数値は確認できず。通常仕様としてボーナス間1100GのART高確化、およびREG連続天井が存在。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に低確/高確が存在することはP-WORLD/HAZUSEで確認したが、設定変更時の再抽選/引継ぎは未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の低確/高確振り分け等、朝一専用数値を確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一/設定変更専用の高確スタート率、短縮天井、ART/CZ優遇などの公開確定値を回収できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等を直接確定できないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、液晶ステージ、出目、朝一ゲーム数挙動など本機固有の変更判別情報を複数検索語/資料系統で再探索したが確定できず。

numericResetData:
- normalBonusCeiling: **1100G -> ART抽選高確モード**
- regSequenceCeiling: **3 consecutive REG without ART -> next bonus ART confirmed (old analysis)**
- settingChangeCounter: **UNVERIFIED_AFTER_RESEARCH**
- carryOverCounter: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_WITH_DEDICATED_SOURCE_INDEX_PRESENT_BUT_CONCRETE_RESET_BEHAVIOR_UNVERIFIED**

## conflicts

- 導入日: HAZUSE **2011-01-14** / 当時プレイグラフ転載 **2011-01-24** / グリーンべると記事引用 **2011-01-23納品開始** / SANKYO公式 **2011.01**。時系列本線は最古の具体的「導入開始日」表記1/14を採用し、1/23-24をCONFLICTとして残す。
- 5号機クロニクルの現行ページには「ボーナス非搭載・ARTのみ・1セット40G・約1.4枚/G」等、本機のSANKYO公式/P-WORLD/当時解析と明確に矛盾する説明が混在するため **POSSIBLE_SERIES_CONTAMINATION / SOURCE_ERROR** として性能根拠に使用しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior exact: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior exact: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior exact: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- mode/state after reset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. SANKYOオンライン博物館「パチスロ キャプテンハーロック」 — 導入年月2011.01、型式、BB/RB/合算/ART、1セット50G。
   - https://www.sankyo-fever.jp/collection/538/
   - confidence: OFFICIAL
2. HAZUSE「パチスロキャプテンハーロックG」 — 2011-01-14導入開始、検定番号0S0498、設定別機械割/ボーナス、1100G天井。
   - https://hazuse.com/machine/pachislot/0S0498/
   - https://hazuse.com/machine/pachislot/0S0498/genre/201/
   - confidence: ANALYSIS_HIGH
3. P-WORLD「キャプテンハーロックG」 — BIG約201枚、REG約66枚、ART50G/+1.5枚/G、ボーナス間1100G、低高確。
   - https://www.p-world.co.jp/machine/database/6213
   - confidence: INDUSTRY_DATABASE
4. パチマガスロマガ「キャプテンハーロックG」 — 基本システム、精密ボーナス/ART/PAYOUT、天井/朝イチ設定変更項目の存在。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/23/sankyo_slot_23.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/23/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/23/h.php
   - confidence: ANALYSIS_HIGH
5. Pマンズ（プレイグラフ転載）「SANKYOがキャプテンハーロックG」 — 2010-12-08内覧会、1/24ホール導入、ART50G/+1.5枚/G。
   - https://p-mans.blogspot.com/2010/
   - confidence: INDUSTRY_SECONDARY
6. タイアップ機一覧（グリーンべると記事引用） — グリーンべると発表記事の「納品は1月23日から」を保持。
   - https://sulocale.sulopachinews.com/archives/23582
   - confidence: SECONDARY_QUOTING_INDUSTRY
7. クランキーセブン旧5号機天井DB — ボーナス間1100G、REG後ART非突入3連続、REG天井はBIGまでクリアされない。設定変更欄は空欄。
   - https://crankyseven.com/sp/tenjo-5ka.htm
   - confidence: ANALYSIS_SINGLE

## researchLog

- 検索語: キャプテンハーロックG / パチスロ キャプテンハーロック / 0S0498 / SANKYO + 機械割 / BIG / REG / ART初当たり / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / モード移行 / ガックン。
- 資料系統: メーカー公式、P-WORLD、HAZUSE、パチマガスロマガ、当時業界記事転載、旧天井DB、後年回顧DB。
- 欠損は上記再探索後のみUNVERIFIEDとした。
