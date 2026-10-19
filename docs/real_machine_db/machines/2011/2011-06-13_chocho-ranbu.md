# 蝶々乱舞

machineName: 蝶々乱舞
manufacturer: オリンピア（平和グループ）
modelName: 蝶々乱舞
certificationNumber: 1S0080
releaseDate: 2011-06-13
releaseDateStatus: CONFLICT_EXACT_DATE; primary=K-Naviホール導入開始2011-06-13; HAZUSE=2011-06-10; GreenBelt=2011-06-19納品開始予定

generation: 5号機
systemType: A+ART / ボーナス + セットストック式ART
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- recordCount 577 / chronologicalFrontier 2011-06-06 から2011-06-07〜06-19境界を監査し、repo未登録を確認して578件目として追加。
- K-Naviは **2011-06-13ホール導入開始**、HAZUSEは **2011-06-10導入開始日**、当時グリーンべるとは **2011-06-19から納品開始予定** としている。
- ホール導入日・DB掲載導入日・納品予定日の定義差を平均せず保持。本DBの主releaseDateはK-Naviの明示的な「ホール導入開始」2011-06-13を採用。
- 2011-06-07〜06-12については今回確認した2011年6月機種一覧、K-Navi/HAZUSE/当時業界記事の候補群から、これより早い具体日を持つ未登録機を確認できなかった。月単位機「レッツドラゴーン」は日付推測固定しない。

## payoutRateBySetting

- 設定1: **96.9%**
- 設定2: **98.5%**
- 設定3: **100.1%**
- 設定4: **104.1%**
- 設定5: **108.1%**
- 設定6: **112.2%**

K-Naviと当時/後年整理資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/434.0**
- 設定2: **1/422.8**
- 設定3: **1/412.2**
- 設定4: **1/385.5**
- 設定5: **1/362.1**
- 設定6: **1/341.3**

### REG
- 設定1: **1/532.8**
- 設定2: **1/520.1**
- 設定3: **1/504.1**
- 設定4: **1/485.5**
- 設定5: **1/468.1**
- 設定6: **1/445.8**

### ボーナス合算
- 設定1: **1/239.2**
- 設定2: **1/233.2**
- 設定3: **1/226.8**
- 設定4: **1/214.9**
- 設定5: **1/204.2**
- 設定6: **1/193.3**

### ART初当たり
- 設定1: **1/372.7**
- 設定2: **1/336.0**
- 設定3: **1/332.1**
- 設定4: **1/277.8**
- 設定5: **1/255.1**
- 設定6: **1/167.1**

ART初当たりは複数二次資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「蝶々乱舞 / オリンピア / 1S0080」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」を組み替え、K-Navi、P-WORLD、HAZUSE、当時ブログ/旧DB/後年回顧を横断したが比較可能な直接値を確定できず。逆算しない。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- ART「乱舞チャンス」: **約+1.5枚/G**
- 1セット: **33〜333G**
- 公開されている主要開始/継続G数: 33 / 55 / 77 / 99 / 133 / 155 / 177 / 199 / 233 / 255 / 277 / 299 / 333G
confidence: INDUSTRY_AND_ANALYSIS_HIGH

## basicPayout

- BIG: **純増204枚**
- REG: **純増30枚**
- 規定払い出し: BIG **297枚超で終了** / REG **36枚超で終了**
confidence: INDUSTRY_DATABASE_HIGH

## modeSpecificMinimumData

- ART「乱舞チャンス」はセットストック式、1セット33〜333G、約+1.5枚/G。
- 5Gの「蝶々ゾーン」はARTストック獲得区間。突入時点でART最低1セットが確定する構造。
- 通常時にはART突入期待度の異なる **3種類の内部状態**があり、P-WORLDは **33G周期で移行抽選**と記載。
- 天井は複合条件:
  - 通常状態で **661G以上消化後のREG成立 → 蝶々ゾーン確定**
  - **957〜990G**は超高確状態確定
  - **990G + 前兆5G**でART当選確定
- K-Naviにも本機専用「天井機能」「設定変更後の挙動」「モード移行率(設定変更時)」解析項目の存在を確認。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_WITH_ANALYSIS_SECTION_CONFIRMED**。K-Naviに本機専用「設定変更後の挙動」と「モード移行率(設定変更時)」項目が存在することまでは確認したが、検索結果から具体本文/数値を安全に回収できず。一般則や南国系他機種の挙動で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の661/957/990G進捗、33G周期内部状態、ARTストック/引き戻し状態の具体的保持を直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗、内部状態、液晶/ランプ状態の直接根拠を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時661G/957G/990Gの天井・状態変化条件は確認済みだが、設定変更時にその進捗がCLEAR/RETAINされるかを直接本文で回収できなかったため推測しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井/別天井数値を直接確定できず。

modeAfterReset: **EXISTS_BUT_NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。K-Naviに「モード移行率(設定変更時)」項目の存在を確認。通常時に3内部状態が存在することもP-WORLDで確認したが、設定変更時の振り分け数値本文は未回収。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。33G周期の内部状態および超高確/引き戻しゾーン等の変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**。設定変更後モード再抽選に関する解析項目の存在は確認したが、朝一高確率・短縮天井・特定G以内当選率など比較可能な恩恵数値を安全に回収できず。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。天井進捗消失等の不利要素は、gameCounterReset自体を確定できないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ、ステージ等による変更/据え置き判別を本機固有の直接資料で確定できず。

numericResetData:
- 通常天井/状態変化: **661G / 957G / 990G+前兆5G**（通常時仕様として確認）
- 設定変更時モード振り分け: **EXISTS_AS_ANALYSIS_ITEM_BUT_VALUES_UNVERIFIED**
- 設定変更専用短縮天井: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **UNVERIFIED_AFTER_RESEARCH**
- 公開朝一恩恵数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; ANALYSIS_SECTION_EXISTENCE_CONFIRMED, VALUES_UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 導入日: K-Navi **2011-06-13ホール導入開始** / HAZUSE **2011-06-10導入開始日** / グリーンべると **2011-06-19納品開始予定**。定義差を含むため平均せず全て保持。主値はホール導入を明示するK-Navi 2011-06-13。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior concrete detail: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- numeric modeAfterReset distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「蝶々乱舞 / 蝶々乱舞 オリンピア / 1S0080」と「導入 / 納品 / 2011年6月10日 / 6月13日 / 6月19日 / 機械割 / BIG / REG / ART初当たり / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 661G / 957G / 990G / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / モード移行率 / ガックン / 宵越し」を組み替え、K-Navi、P-WORLD、HAZUSE、当時グリーンべると、当時ブログ/旧DB/後年整理資料を横断。コア値・通常天井・内部状態構造は複数系統で確認。reset専用項目はK-Naviに存在するが具体本文値を十分に回収できず、他機種の一般則で補完せずUNVERIFIEDを維持。

## sources — 取得日 2026-09-04

1. K-Navi「蝶々乱舞」
   - https://p-kn.com/slot/1427/
   - 2011-06-13ホール導入開始、BIG/REG/合算全設定、機械割、ART約1.5枚/G、33〜333G、設定変更後の挙動/モード移行率(設定変更時)解析項目の存在
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
2. P-WORLD「蝶々乱舞」
   - https://www.p-world.co.jp/machine/database/6357
   - オリンピア、A+ART、BIG204枚/REG30枚、ART約1.5枚/G、天井661/957/990G、通常時3内部状態・33G周期移行
   - confidence: INDUSTRY_DATABASE_HIGH
3. HAZUSE「蝶々乱舞」
   - https://hazuse.com/machine/pachislot/1S0080/
   - 型式名、検定番号1S0080、導入開始日2011-06-10、ART構造
   - confidence: CONTEMPORARY_ARCHIVE_HIGH
4. グリーンべると「蝶々が飛べばARTをストック！」
   - https://web-greenbelt.jp/00002092/
   - 2011-05-12記事、オリンピア製、ART33〜333G・約1.5枚/G、納品2011-06-19開始予定
   - confidence: INDUSTRY_PRIMARY_HIGH
5. 当時整理ブログ「蝶々乱舞について」
   - https://plaza.rakuten.co.jp/x3esibm1/
   - 2011-09-26、BIG/REG/機械割/ART初当たり全設定
   - confidence: CONTEMPORARY_SECONDARY
6. グリパチ攻略wiki「蝶々乱舞」
   - https://guripachi.game-info.wiki/d/%C4%B3%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD
   - ART初当たり、天井661/957/990Gの後年整理
   - confidence: LATER_SECONDARY_CROSSCHECK

## resetQaState

resetQaStatus: **PARTIAL_RESET_QA**
resetQaConfidence: **UNVERIFIED_AFTER_RESEARCH_FOR_RESET_SPECIFICS**
