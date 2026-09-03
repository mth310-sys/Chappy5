# 続・お見事！サブちゃん

machineName: 続・お見事！サブちゃん
manufacturer: オリンピア
formalModelName: お見事！サブちゃん2A
approvalNumber: 9S1123
releaseDate: 2010-03-23
generation: 5号機
systemType: A+ART / 押し順ART / 天井無限ART
coreStatus: COMPLETE_CORE_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近レコードを再取得して継続。
- 開始時正本は recordCount 467 / chronologicalFrontier 2010-03-23。
- LATEST_HANDOFF指定の未処理最優先候補として本機を調査。K-Naviとパチビーで2010-03-23導入を確認し、P-WORLDでも2010年3月導入・型式/検定番号を確認。
- 467件目「ノーマルだよ！サブちゃん」と同時発表された別スペックであり、型式 `お見事！サブちゃん2A` / 検定 `9S1123` のART機として独立登録。

## payoutRateBySetting

### 主値 — パチマガスロマガ / K-Navi / パチンコビスタ
- 設定1: **96.1%**
- 設定2: **98.0%**
- 設定3: **100.1%**
- 設定4: **104.1%**
- 設定5: **108.2%**
- 設定6: **111.1%**

### 競合系列 — P-WORLD / パチビー
- 設定1: **97.31%**
- 設定2: **99.19%**
- 設定3: **101.34%**
- 設定4: **104.15%**
- 設定5: **108.23%**
- 設定6: **111.07%**

低設定域が単純な丸めでは一致しないため平均せず `CONFLICT_PAYOUT_DEFINITION_OR_METHOD` として両系列を保持。

confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

### BIG合算
- 設定1: **1/468.11**
- 設定2: **1/468.11**
- 設定3: **1/468.11**
- 設定4: **1/468.11**
- 設定5: **1/468.11**
- 設定6: **1/455.11**

### REG
- 設定1: **1/704.69**
- 設定2: **1/661.98**
- 設定3: **1/624.15**
- 設定4: **1/590.41**
- 設定5: **1/560.14**
- 設定6: **1/550.72**

### ボーナス合算
- 設定1: **1/281.27**
- 設定2: **1/274.21**
- 設定3: **1/267.49**
- 設定4: **1/261.10**
- 設定5: **1/255.00**
- 設定6: **1/249.19**

パチマガスロマガの精密値を主値とし、K-Navi・P-WORLD・パチビーの丸め値と整合。

### ART初当たり — パチンコビスタ
- 設定1: **1/780**
- 設定2: **1/654**
- 設定3: **1/690**
- 設定4: **1/568**
- 設定5: **1/559**
- 設定6: **1/454**

ART初当たりは今回確認できた単一整理資料値のため `ANALYSIS_SINGLE` として分離保持。

confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_BONUS / ANALYSIS_SINGLE_FOR_ART_INITIAL

## baseGamesPer50

- 全設定共通: **36.1G / 1000円（50枚）**

旧パチマガスロマガの本機専用解析から直接取得。

confidence: ANALYSIS_HIGH

## netIncrease

- ART「サブロウチャンス」: **約+1.3枚/G**
- 基本: **30G / 1セット**
- 「真サブロウチャンス」: 次回ボーナスまで継続するART、純増約+1.3枚/G

グリーンべると、K-Navi、P-WORLD、パチビーで一致。

confidence: INDUSTRY_MULTI_SOURCE

## basicPayout

- BIG: **301枚**
- REG: **56枚**

K-Navi、P-WORLD、パチビーで一致。規定払い出しはBIG420枚超、REG70枚超で終了。

confidence: INDUSTRY_DB_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時にはART突入率が異なる複数の内部モードが存在。
- P-WORLDによればART非当選間でボーナスを引くほどART当選率が高いモードへ進み、ART当選まで転落しない特徴を持つ。
- ART「サブロウチャンス」は30G/セット、ストック式。通常時・BIG・REGから突入契機あり。
- ボーナス間**1476G**消化で、次回ボーナスまで継続する「真サブロウチャンス」へ突入する天井を搭載。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`続・お見事!サブちゃん / お見事!サブちゃん2A / 9S1123 / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 高確 / ガックン` を組み替え、K-Navi、旧パチマガスロマガ、P-WORLD、パチビー、当時業界記事、後年DBを横断。K-Naviと旧パチマガスロマガに設定変更専用項目の存在までは確認できたが、検索で取得できる本文から設定変更時の処理を直接確定できなかったため一般論で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。ボーナス間1476G天井およびART非当選で進む内部モードが存在するが、据え置き時にそれぞれがどこまで引き継がれるかを高信頼本文で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみの場合の天井ゲーム数、内部モード、ARTストック/状態、表示・リール初期挙動は本機固有資料で直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はボーナス間1476Gで確定しているが、設定変更時の当該カウンタのリセット/引継ぎは未確定。P-WORLD掲示板に宵越し質問は残るが回答本文を根拠化できないため採用しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井1476Gは確認済み。設定変更後だけ短縮/変更される公開数値は今回確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART突入率の異なる複数内部モードは存在するが、設定変更時のモード再抽選/初期モード振り分けを直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確状態およびARTストック/真サブロウチャンス等の設定変更時処理は直接資料未確認。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの短縮天井、朝一専用当選率、専用高確率など比較可能な公開恩恵数値は確定できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶履歴/ランプ、ゲーム数挙動などによる設定変更判別の本機固有高信頼資料を確定できず。

numericResetData:
- normalCeiling: **1476G（ボーナス間）→真サブロウチャンス**
- resetShortenedCeiling: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- publicMorningSpecificProbability: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

- 機械割はパチマガスロマガ/K-Navi/パチンコビスタの96.1〜111.1%系列と、P-WORLD/パチビーの97.31〜111.07%系列が競合。特に設定1〜3は丸め差を超えるため平均せず双方を保持。
- 機種分類は一部DBで「RT」と表記されるが、当時業界記事・K-Navi・P-WORLD・パチビーはいずれも押し順ART「サブロウチャンス」約+1.3枚/Gを明記するため、本DBではA+ARTを主分類とする。

## missingFields

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior for 1476G ceiling and internal mode: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- mode/state/ART stock handling on setting change: UNVERIFIED_AFTER_RESEARCH
- physical reset detection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「続・お見事!サブちゃん」 — https://p-kn.com/slot/1158/ — 2010-03-23導入、設定別BIG/REG/合算、機械割96.1〜111.1%、ART30G・約1.3枚/G、設定変更専用項目の存在 — reliability: ANALYSIS_HIGH
2. パチマガスロマガ「続・お見事!サブちゃん ボーナス/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/89/h.php — 精密BIG/REG/合算、PAYOUT96.1〜111.1% — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「続・お見事!サブちゃん 小役」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/89/c.php — 1000円あたり36.1G — reliability: ANALYSIS_HIGH
4. P-WORLD「続・お見事!サブちゃん」 — https://www.p-world.co.jp/machine/database/5858 — 型式お見事！サブちゃん2A、検定9S1123、機械割97.31〜111.07%、BIG301枚/REG56枚、ART30G約1.3枚/G、ボーナス間1476G天井、内部モード — reliability: INDUSTRY_DB
5. パチビー「続・お見事!サブちゃん」 — https://www.pachibee.jp/machines/index/210020007 — 2010-03-23導入、ART30G約1.3枚/G、BIG301枚/REG56枚、1476G天井、機械割97.31〜111.07% — reliability: INDUSTRY_DB
6. グリーンべると「平和、パチスロ『サブちゃん』シリーズ2機種発表」 — https://news.p-world.co.jp/articles/3810/greenbelt — 2010-02-08発表、オリンピアブランド、ART30G・純増1.3枚/G、真サブロウチャンス — reliability: INDUSTRY
7. パチンコビスタ「続・お見事！サブちゃん」 — https://www.pachinkovista.com/pfactory/model.php?dsp=0&nid=17989 — 型式/検定周辺、設定別ボーナス、ART初当たり、天井1476G — reliability: ANALYSIS_SINGLE
