# 幻想水滸伝

machineName: 幻想水滸伝
manufacturer: KPE / コナミ
formalModelName: 幻想水滸伝E
releaseDate: 2011-01-17
releaseDateStatus: HIGH_CONFIDENCE_WITH_SECONDARY_EXACT_DATE
releaseDateNote: KONAMI公式は2011年1月稼働開始。当時グリーンべるとは2011-01-10納品予定。RCGSコレクション（Wikipedia参照表記）およびGensopediaは2011-01-17稼働/発売として一致するため、ホール稼働主値を2011-01-17、納品予定を別定義で保持する。
generation: 5号機
systemType: A+ART / セットストック式ART / 状態管理
aliases: パチスロ「幻想水滸伝」 / 幻水
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線535「009-1」、遡及536「ハーレムエース2」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 536 / chronologicalFrontier 2011-01-17。
- 2011-01-18〜1/23境界監査中、2011年1月機「幻想水滸伝」をrepo検索し未登録を確認。
- KONAMI公式は2011年1月稼働開始、グリーンべるとは2011-01-10納品予定、RCGSコレクション/Gensopediaは2011-01-17稼働・発売を示す。時系列漏れ防止のため537件目として前線同日へ遡及追加し、chronologicalFrontierは2011-01-17を維持する。

## payoutRateBySetting

- 設定1: **96.7%**
- 設定2: **98.8%**
- 設定3: **100.8%**
- 設定4: **104.2%**
- 設定5: **107.7%**
- 設定6: **111.8%**

pacnk掲載値。P-WORLDも設定6 111.8%を照合。
confidence: ANALYSIS_SINGLE_PLUS_PARTIAL_CROSSCHECK

## initialHitBySetting

### BIG
- 設定1: **1/362.1**
- 設定2: **1/354.3**
- 設定3: **1/336.1**
- 設定4: **1/324.4**
- 設定5: **1/310.6**
- 設定6: **1/302.0**

### REG
- 設定1: **1/595.8**
- 設定2: **1/574.9**
- 設定3: **1/550.7**
- 設定4: **1/528.5**
- 設定5: **1/516.0**
- 設定6: **1/489.1**

### ART初当たり
- 設定1: **1/632.8**
- 設定2: **1/573.8**
- 設定3: **1/571.8**
- 設定4: **1/472.2**
- 設定5: **1/435.9**
- 設定6: **1/379.1**

pacnk掲載値。
confidence: ANALYSIS_SINGLE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「幻想水滸伝 / 幻水 / 幻想水滸伝E / KPE」＋「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」でKONAMI公式、P-WORLD、K-Navi、パチマガスロマガ、pacnk、古い機種DB・回顧資料を横断したが、比較可能な直接値を確定できず。小役確率から逆算しない。

confidence: UNVERIFIED

## netIncrease

- ART「決戦の刻」: **約+1.2枚/G**
- 1セット: **40G**
- ART種別: **ノーマル / チャンス / 烈 / 激**
- 烈: 平均約4セット、激: 平均約12セットの上乗せ期待値資料あり

KONAMI公式アーカイブはART機であることを確認。グリーンべると、P-WORLD、パチマガスロマガで40G/+1.2枚/Gが一致。
confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- BIG: **約204枚**（規定払い出し297枚）
- REG/BG: **約60枚**（規定払い出し81枚）

パチマガスロマガ、中一商事実機資料で一致。
confidence: ANALYSIS_HIGH_PLUS_MACHINE_ARCHIVE

## modeSpecificMinimumData

- 通常時はARTストック期待度に関わる**低確 / 高確 / 超高確**の3状態。
- ART「決戦の刻」はセットストック式。ノーマル/チャンス/烈/激の4種で上乗せ期待度が異なる。
- 通常時は5種類の「紋章」を蓄積し、5個到達で「紋章チャンス」。紋章ごとにART抽選を行う。
- 天井: **ボーナス間またはART終了後の純粋な通常ゲーム1080G**で到達。CZ/ART中G数はカウントされないとする旧天井資料あり。
- 天井到達時は**1/2で激ART / 烈ART**へ突入とP-WORLDが記載。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIALLY_VERIFIED**。後年の天井狙い整理資料では本機の通常ゲーム天井を「宵越し×」と記録しており、設定変更を跨ぐ天井ゲーム数狙いが不可であることを示す。一方、設定変更時の低確/高確/超高確振り分け、ARTストック、紋章の内部処理を直接記す高信頼本文は今回確定できず、一般論から補完しない。

carryOverBehavior: **PARTIALLY_VERIFIED**。同じ旧資料で「紋章4個狙い」「同一紋章3個/全異色紋章3個狙い」は宵越し○とされており、少なくとも紋章蓄積は翌日持越しを狙える情報が残る。ただし「据え置きのみ保持」か「設定変更でも保持」かの厳密条件までは本文から一意に確定できないため、その差はUNVERIFIED扱いとする。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の1080G天井進捗、低高確、ARTストック、紋章蓄積の直接資料を確定できず。

gameCounterReset: **LIKELY_CLEAR_ON_SETTING_CHANGE_LOW_CONFIDENCE_SECONDARY**。旧天井狙い資料の「通常時750G狙い 宵越し×」を根拠に、設定変更を跨ぐ天井G数狙い不可と保存。ただし設定変更操作そのものによる1080GカウンタCLEARを直接記した一次/高信頼解析本文は未回収のため、確定級には上げない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井1080G。設定変更専用の短縮/延長天井数値は今回確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に低確/高確/超高確の3状態は確認済みだが、設定変更時の振り分け値は未回収。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確/超高確、ARTストック、紋章チャンス状態の変更時処理は高信頼直接資料不足。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確確定、ART優遇等の具体公開値は確認できず。

resetPenalties: **POSSIBLE_CEILING_PROGRESS_LOSS**。旧資料の「通常天井 宵越し×」から、変更時は天井狙い上不利になる可能性が高い。ただし直接解析本文不足のためLOW_CONFIDENCE_SECONDARYとして扱う。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、紋章表示等による設定変更/据え置き判別の本機固有高信頼情報を表記揺れ・検索語変更後も確定できず。

numericResetData:
- normalCeiling: **pure normal games 1080G after bonus or ART end**
- ceilingReward: **1/2 激ART or 烈ART (P-WORLD wording)**
- settingChangeCounter: **LIKELY_CLEAR / LOW_CONFIDENCE_SECONDARY based on 宵越し×**
- carryOverCounter: **UNVERIFIED exact**
- emblemCarryOver: **overnight targeting reported as possible / exact setting-change condition UNVERIFIED**
- powerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_WITH_PARTIAL_SECONDARY_RESET_EVIDENCE**

## conflicts

- 導入時期はKONAMI公式「2011年1月」、グリーンべると「2011-01-10納品予定」、RCGS/Gensopedia「2011-01-17稼働/発売」。納品日とホール稼働日は定義差として分離し、主値2011-01-17。
- resetBehaviorの天井進捗は「宵越し×」という二次資料はあるが、設定変更時CLEARを直接記す高信頼本文は未取得。確定扱いせず信頼度を落として保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- exact setting-change state distribution: UNVERIFIED_AFTER_RESEARCH
- exact carry-over behavior for 1080G counter: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. KONAMI公式 機種アーカイブ「幻想水滸伝」— 2011年1月稼働開始、5号機ART。
   - https://www.konami.com/amusement/psm/archive/ps/2011/genso_suikoden/
   - confidence: OFFICIAL
2. グリーンべると「KPE最新機種は“上乗せ”が熱い！」— 2010-11-11記事、2011-01-10納品予定、ART40G/+1.2枚/G、烈平均4セット/激平均12セット。
   - https://web-greenbelt.jp/00002890/
   - confidence: INDUSTRY
3. RCGSコレクション「幻想水滸伝4」— 2011-01-17にパチスロ「幻想水滸伝」として稼働との記述（Wikipedia参照情報）。
   - https://collection.rcgs.jp/page/PACKAGE0005859
   - confidence: SECONDARY
4. Gensopedia「Pachislot Genso Suikoden」— 2011-01-17 release。
   - https://gensopedia.org/w/Pachislot_Genso_Suikoden
   - confidence: SECONDARY
5. pacnk「幻想水滸伝」— 設定別BIG/REG/ART初当たり、機械割、低確/高確/超高確。
   - https://pacnk.com/slot/2011/gensousuikoden/top.php
   - confidence: ANALYSIS_SINGLE
6. P-WORLD「幻想水滸伝」— 天井1080G、天井恩恵、ART40G/+1.2枚/G、BIG約204枚、設定6機械割111.8%。
   - https://www.p-world.co.jp/machine/database/6144
   - confidence: INDUSTRY_DATABASE
7. パチマガスロマガ「幻想水滸伝」— ART40G/+1.2枚/G、BIG約204枚、REG約60枚、基本システム。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/23/a.php
   - confidence: ANALYSIS_HIGH
8. 中一商事 実機資料「KPE 幻想水滸伝」— 型式名 幻想水滸伝E、BIG約204枚/BG約60枚、ART40G/+1.2枚/G。
   - https://www.nakaiti.com/html/sKpe068.html
   - confidence: MACHINE_ARCHIVE
9. 天井ハイエナ生活「天井ハイエナ期待値リスト か行」— 幻想水滸伝の通常天井狙い「宵越し×」、紋章蓄積狙い「宵越し○」、CZ/ART中は天井G数非カウント。
   - https://macerate.seesaa.net/article/226196713.html
   - confidence: ANALYSIS_SINGLE_LOW
