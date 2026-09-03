# ジャイアン～情熱のタイ編～

machineName: ジャイアン～情熱のタイ編～
manufacturer: ラスター（ニューアーク発表・販売）
releaseDate: 2010-10-18
releaseDateStatus: NATIONWIDE_INTRODUCTION_DATE
releaseDateNote: K-Navi 2010年10月導入カレンダーでニューアーク「ジャイアン」を2010-10-18全国一斉導入開始日として確認。2010-09-15のグリーンべると記事ではニューアークがラスターとの業務提携第2弾として発表しており、製造メーカー表記はP-WORLDのラスターを採用し、ニューアークは発表/販売ブランドとして分離。
generation: 5号機
systemType: BIG + 押し順ART / CZ / 天井
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前521「舞-HiME」を再取得。
- LATEST_HANDOFFを正本として recordCount 521 / chronologicalFrontier 2010-10-18 を継続。
- K-Navi 2010年10月導入カレンダーの2010-10-18同日群は「舞-HiME」「ジャイアン」。舞-HiMEは521件目として登録済みで、repo検索で本機既登録なしを確認したため522件目として追加。

## payoutRateBySetting

- 設定1: **96.0%**
- 設定2: **98.6%**
- 設定3: **101.3%**
- 設定4: **105.1%**
- 設定5: **109.0%**
- 設定6: **115.3%**

パチマガスロマガの設定別PAYOUTを採用。
confidence: ANALYSIS_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/281.3**
- 設定2: **1/273.1**
- 設定3: **1/261.1**
- 設定4: **1/251.1**
- 設定5: **1/245.5**
- 設定6: **1/240.1**

### ART初当たり
- 設定1: **1/223.4**
- 設定2: **1/210.5**
- 設定3: **1/201.5**
- 設定4: **1/186.6**
- 設定5: **1/172.3**
- 設定6: **1/152.7**

### BIG+ART合成
- 設定1: **1/124.5**
- 設定2: **1/118.9**
- 設定3: **1/113.7**
- 設定4: **1/107.0**
- 設定5: **1/101.2**
- 設定6: **1/93.3**

パチマガスロマガとP-WORLDで主要端点・設定別BIG/ART値を照合。
confidence: MULTI_SOURCE_HIGH

## baseGamesPer50

- **約34G / 50枚（1000円）**

パチマガスロマガ小役確率ページに1000円あたり約34Gと明記。
confidence: ANALYSIS_HIGH

## netIncrease

ART「ジャイアンボーナス」:
- **1セット50G**
- **約+1.43枚/G**
- レア役/BIG等でストック上乗せ、1回の契機で最大10セット
- ART間はRTとなり、連チャン中のコインロスを抑える構造

グリーンべると、P-WORLD、パチマガスロマガで一致。
confidence: MULTI_SOURCE_HIGH

## basicPayout

- BIG: **約174枚**（252枚超払い出し終了）

グリーンべると、P-WORLD、パチマガスロマガで一致。
confidence: MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時のチャンス目出現率は約1/100.52（パチマガスロマガ）。
- チャンス目後は平均約8GのCZへ。中段リプレイ成立前に特殊リプレイを成立させればART突入。
- チャンス目成立時にARTストック当選済みなら押し順ナビでARTへ誘導。
- 天井: **BIG間1840G以降で天井ART発動**（P-WORLD）。
- ART中BIG成立後は残りARTゲーム数から再開。
confidence: MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」項目が存在することは確認したが、現存検索結果から本文を回収できず、設定変更時の1840G天井カウンタ、ARTストック、CZ/RT状態の初期化内容を直接確定できない。一般的な5号機挙動から推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のBIG間天井ゲーム数、ARTストック、CZ/RT状態の引継ぎを本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のBIG間天井ゲーム数、ARTストック、CZ/RT状態、液晶/ランプ初期状態の扱いを直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はBIG間1840Gであることを確認したが、設定変更時にこの内部BIG間ゲーム数をclear/retainするかは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井・別天井数値は再探索後も確定できず。

modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用モード、設定変更専用モード振り分けの公開値を確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ/RT/ARTストック等の設定変更時再抽選・消去/保持を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の短縮天井、ART優遇、朝一高確等の確定情報を回収できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の主要不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/ランプ、朝一ゲーム数挙動による本機固有の設定変更/据え置き判別を確定できず。

numericResetData:
- standardCeiling: **BIG間1840G以降で天井ART**
- gameCounterOnSettingChange: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- morningARTProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- メーカー表記: P-WORLDは「ラスター」、当時グリーンべるとはニューアークがラスターとの業務提携第2弾として発表と記載。本DBでは製造メーカー=ラスター、発表/販売ブランド=ニューアークとして役割分離し、数値競合とは扱わない。

## missingFields

- formalModelName / inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior詳細: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- 設定変更時のBIG間1840G天井カウンタ処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- 公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi 2010年10月導入カレンダー — 2010-10-18「ジャイアン」、全国一斉導入開始日基準。
   - https://p-kn.com/calendar/201010/
   - confidence: CONTEMPORARY_DATABASE_HIGH
2. グリーンべると / P-WORLD業界ニュース（2010-09-15） — ニューアーク発表、ラスターとの業務提携第2弾、BIG約174枚、ART50G・約1.43枚/G、最大10セット上乗せ。
   - https://news.p-world.co.jp/articles/4158/greenbelt
   - confidence: INDUSTRY
3. P-WORLD「ジャイアン～情熱のタイ編～」 — メーカー=ラスター、BIG/ART設定別確率、BIG間1840G天井、ART50G・約1.43枚/G、CZ仕様。
   - https://www.p-world.co.jp/machine/database/6113
   - confidence: DATABASE_HIGH
4. パチマガスロマガ「ジャイアン～情熱のタイ編～」基本システム — ART50G・約1.43枚/G、BIG約174枚/252枚払い出し、朝イチ・設定変更項目の存在。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/newark_slot_02.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/a.php
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ「ボーナス抽選確率」 — BIG、ART、BIG+ART合成、PAYOUT設定1〜6。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/h.php
   - confidence: ANALYSIS_HIGH
6. パチマガスロマガ「小役確率」 — 1000円あたり約34G、チャンス目1/100.52。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/02/c.php
   - confidence: ANALYSIS_HIGH
