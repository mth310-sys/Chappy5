# パチスロ真・三國無双

machineName: パチスロ真・三國無双
manufacturer: オリンピア / 平和
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: パチスロ 真・三國無双 / 真・三國無双 / 真三國無双
releaseDate: 2011-02-21
releaseDateStatus: EXACT_HALL_DATE_CONFIRMED
releaseDateNote: コムシード当時告知で2011-02-21ホール導入を確認。グリーンべると当時記事では2011-02-20から納品開始予定。納品日とホール導入日を分離して保持する。
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、552レコードを再取得して開始。
- 2011-02-19〜20を境界監査。強い具体日として本機は2011-02-20納品開始予定、2011-02-21ホール導入を確認。
- DBの主releaseDateは実稼働/ホール導入の2011-02-21を採用し、2/20はdeliveryDateとして分離。
- 2/21同日群の戦国BASARA2、シオサイマックス-30より先に本機を処理。

## payoutRateBySetting

P-WORLD / グリーンべると / pacnk一致:
- 設定1: **97.8%**
- 設定2: **99.2%**
- 設定3: **101.3%**
- 設定4: **104.1%**
- 設定5: **108.2%**
- 設定6: **112.1%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/315.1**
- 設定2: **1/309.1**
- 設定3: **1/303.4**
- 設定4: **1/297.9**
- 設定5: **1/287.4**
- 設定6: **1/277.7**

### REG
- 設定1: **1/546.1**
- 設定2: **1/528.5**
- 設定3: **1/512.0**
- 設定4: **1/496.5**
- 設定5: **1/474.9**
- 設定6: **1/455.1**

### ボーナス合算
- 設定1: **1/199.8**
- 設定2: **1/195.0**
- 設定3: **1/190.5**
- 設定4: **1/186.2**
- 設定5: **1/179.1**
- 設定6: **1/172.5**

### ART初当たり
- 設定1: **1/597.8**
- 設定2: **1/564.1**
- 設定3: **1/520.6**
- 設定4: **1/464.4**
- 設定5: **1/388.9**
- 設定6: **1/325.9**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

パチマガスロマガ解析:
- 設定1〜6: **31.62〜31.64G / 1000円（50枚）**

confidence: ANALYSIS_HIGH

## netIncrease

- 三國RUSH: **約+1.2枚/G**
- 呂布RUSH: **約+1.2枚/G**

confidence: INDUSTRY_CROSSCHECKED

## basicPayout

- BIG: **約203枚**
- REG: **約50枚**
- BIG規定: 280枚超の払い出しで終了
- REG規定: 48枚超の払い出しで終了

confidence: INDUSTRY_CROSSCHECKED

## modeSpecificMinimumData

- 三國RUSH: **1セット50G+α**、ゲーム数上乗せ型。1回の上乗せは10〜500G。
- 呂布RUSH: **1セット50G+α**、高頻度上乗せ型。上乗せ発生率は当時業界発表で約1/18、1回5〜50G。
- 通常時ゲーム数天井: **最大998G+αでART当選**と現行解析整理資料で確認。
- 有利区間制度前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **GAME_COUNT_RESET_CONFIRMED_SECONDARY**。解析整理資料で「設定変更後は天井ゲーム数がリセット」と明記。パチマガスロマガ公式アーカイブにも本機専用「朝イチ・設定変更」解析項目が存在することを確認したが、今回取得経路では本文を直接回収できず、詳細は追加裏取り待ち。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・内部状態・ART関連状態の具体的保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの天井/状態/前兆/ART関連挙動を直接確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE**。通常時最大998G+αの天井ゲーム数は設定変更でリセットされるとする解析整理資料を採用。信頼度はANALYSIS_SINGLE相当で、公式アーカイブ本文の再回収をQA対象とする。

ceilingAfterReset: **NORMAL_CEILING / NO_SHORTENING_CONFIRMED**。設定変更専用短縮天井の数値は十分な再探索後も確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一専用長期モード/設定変更時モード振り分けの公開数値を確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の低確/高確等の振り分けを確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、ART優遇、朝一専用当選率等は確認できず。

resetPenalties: **前日天井進捗の消失**。設定変更でゲーム数天井がリセットされるため、宵越し天井狙いに対して不利。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ステージ、液晶表示、ゲーム数挙動による本機固有の変更判別を検索語・資料系統を変えて再探索したが確定できず。

numericResetData:
- normalCeiling: **998G+α**
- gameCounterOnSettingChange: **RESET**
- resetDedicatedShortCeiling: **NONE_CONFIRMED**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL / GAME_COUNTER_RESET_SECONDARY_CONFIRMED**

## conflicts

- 5号機クロニクルの現行ページには本機を「ボーナス非搭載・純増約2.2枚/G」とする記述があるが、2011年当時グリーンべると、P-WORLD、パチマガスロマガ、pacnkはいずれもBIG/REG搭載A+ART・純増約1.2枚/Gで一致するため、**SOURCE_ERROR_OR_SERIES_CONTAMINATION**として性能コアから除外。
- 導入時期は2011-02-20「納品開始予定」と2011-02-21「ホール導入」が併存するが、これは競合ではなく日付定義差。releaseDateは2/21、deliveryDateNoteに2/20を保持。

## missingFields

- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時の公開朝一専用数値: **NONE_CONFIRMED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. グリーンべると — 平和、ART中の上乗せが熱い『真・三國無双』発表
   - https://web-greenbelt.jp/00001819/
   - 2011-02-20納品開始予定、ART2種、純増約1.2枚/G、1セット50G、BIG約203枚、REG約50枚、設定1/6主要確率、出玉率を確認。
   - confidence: INDUSTRY

2. コムシード — オリンピア公式サイト向けアプリ告知
   - https://www.commseed.net/news-old/110420_p1.html
   - 2011-02-21ホール導入を確認。
   - confidence: INDUSTRY

3. P-WORLD — パチスロ真・三國無双
   - https://www.p-world.co.jp/machine/database/6221
   - BIG/REG/ART初当たり、機械割、BIG/REG獲得枚数、ART純増と基本50G+αを確認。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ公式アーカイブ — パチスロ真・三國無双
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/94/olympia_slot_94.php
   - 本機専用の天井・朝イチ/設定変更解析項目が存在することを確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

5. パチマガスロマガ公式アーカイブ — 小役確率/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/94/c.php
   - 1000円あたり31.62〜31.64Gを確認。
   - confidence: ANALYSIS_HIGH_ARCHIVE

6. pacnk — パチスロ 真・三國無双 設定判別ツール
   - https://pacnk.com/slot/tools/sh_sinsengoku.html
   - 設定別BIG/REG/ART初当たり/機械割、通常時最大998G+α天井、設定変更後の天井ゲーム数リセットを確認。
   - confidence: ANALYSIS_SINGLE_FOR_RESET / ANALYSIS_HIGH_FOR_CORE_CROSSCHECK

7. オリンピア公式 — パチスロ 真・三國無双 素材ダウンロードページ
   - https://www.olympia.co.jp/picture/ps_sangoku/
   - メーカー公式上の機種名・筐体素材の存在を確認。
   - confidence: OFFICIAL
