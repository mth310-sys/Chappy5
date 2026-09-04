# ドラゴノーツ －ザ・レゾナンス－

machineName: ドラゴノーツ －ザ・レゾナンス－
manufacturer: オリンピア / 平和販売
releaseDate: 2011-05-22
releaseDateStatus: DELIVERY_START_EXACT_DATE

generation: 5号機
systemType: A+ART / CZ / 天井ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 570件目「ハネスロ リラックマ」（2011-05-08納品開始）から継続。
- 2011-05-09は同機のホール導入日なので重複登録せず、5/10〜5/21を当時業界記事・機種DB・導入資料で境界監査。
- 現時点で具体日を確認できた最古未登録機として、グリーンべると/P-WORLD転載が「納品は5月22日から開始予定」と明記する本機を571件目へ追加。

## payoutRateBySetting

- 設定1: **97.9%**
- 設定2: **99.8%**
- 設定3: **102.1%**
- 設定4: **105.1%**
- 設定5: **108.9%**
- 設定6: **114.2%**

グリーンべると当時記事が端値97.9〜114.2%、後年機種資料が全設定値を掲載。複数系統で整合。
confidence: INDUSTRY_ENDPOINTS_CROSSCHECKED / ANALYSIS_FULL_TABLE

## initialHitBySetting

### BB
- 設定1: **1/481.9**
- 設定6: **1/381.0**

### RB
- 設定1: **1/728.2**
- 設定6: **1/565.0**

### ボーナス合算
- 設定1: **1/290.0**
- 設定6: **1/227.6**

### ART初当たり
- 設定1: **1/218.6**
- 設定6: **1/142.6**

当時グリーンべると記事で設定1/6端値を確認。中間設定の全表は今回安全に取得できなかったため推測補完しない。
confidence: INDUSTRY_ENDPOINTS

## baseGamesPer50

- 設定1: **34.12G / 1000円**
- 設定2: **34.41G**
- 設定3: **34.72G**
- 設定4: **35.03G**
- 設定5: **35.35G**
- 設定6: **35.67G**

パチマガスロマガ本機専用解析。
confidence: ANALYSIS_HIGH

## netIncrease

- ART「タナトス襲来モード」: **約+1.0枚/G**
- 1セット **40G**
- 上乗せ専用「覚醒ZONE」: **10G固定**

グリーンべると、P-WORLD、娯楽産業で一致。
confidence: INDUSTRY_HIGH_CROSSCHECKED

## basicPayout

- BIG: **最大351枚**
- REG: **約45枚**

グリーンべると、P-WORLDで一致。
confidence: INDUSTRY_HIGH

## modeSpecificMinimumData

- 通常時は高確率ゾーン（ショート/ロング）を経由し、CZ「アクチュアライズミッション」へ突入。
- 高確中のCZ突入率は当時業界記事で **約1/11.3**。
- CZ中は全役でART抽選。リプレイでもART期待度50%とされる。
- 通常天井: **ボーナス間1200G+α**で、次回ボーナスまで継続するARTへ突入。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。P-WORLD本機ページに「設定変更時には高確率ゾーンの突入抽選が行われる」と明記。設定変更が朝一内部状態へ影響することは直接確認できる。一方、天井ゲーム数やARTストック等の全処理は直接本文を確定できず未補完。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間1200G天井ゲーム数、高確ショート/ロング、ARTストック等の保持範囲を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井ゲーム数、高確、ART関連状態の扱いを直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はボーナス間1200G+αで高信頼確認済みだが、設定変更/据え置き/電断別のCLEAR/RETAINを一般論で補完しない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH / BASE_CEILING_1200G_PLUS_ALPHA**。リセット専用短縮天井は確認できず。

modeAfterReset: **HIGH_PROBABILITY_ZONE_ENTRY_LOTTERY_CONFIRMED / DETAILS_UNVERIFIED**。設定変更時に高確率ゾーン突入抽選あり。ショート/ロング振り分け等の公開数値は今回確定できず。

stateAfterReset: **PARTIAL**。高確率ゾーン突入抽選の存在のみ直接確認。その他内部状態・ARTストック等はUNVERIFIED。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **RESET_CAN_START/ENTER_HIGH_PROBABILITY_ZONE**。設定変更時に高確率ゾーン突入抽選があるため朝一恩恵候補。ただし発生率・平均恩恵は未確定。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。天井ゲーム数CLEARが確定していないため、前日ハマリ消失等を推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ等による変更判別を本機固有資料で確定できず。

numericResetData:
- 通常天井: **1200G+α（ボーナス間）**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時: **高確率ゾーン突入抽選あり**
- 設定変更時高確振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_HIGH_FOR_HIGH_PROBABILITY_ZONE_LOTTERY / UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_FOR_COUNTER_CARRYOVER_POWER_CYCLE_DETECTION**

## conflicts

- 明確な主要性能値CONFLICTは今回確認なし。
- 後年の一部整理ページには本機と異なるゲーム性説明が混在するものがあるため、当時業界記事・P-WORLD・パチマガ本機専用ページを優先し、疑わしい後年説明は採用していない。

## missingFields

- BB/RB/ART初当たりの設定2〜5全表: **UNVERIFIED_THIS_PASS**
- setting-change gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- setting-change high-probability-zone numeric distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「ドラゴノーツ / ドラゴノーツ ザ・レゾナンス / オリンピア / 平和」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 1200G / 天井短縮 / 高確 / 高確率ゾーン / モード / ガックン / 1000円 / 50枚」を組み替え、グリーンべると/P-WORLD業界ニュース、P-WORLD機種DB、パチマガスロマガ、娯楽産業、旧解析・回顧資料を横断。設定変更時の高確率ゾーン突入抽選は直接確認できたが、天井CLEAR/RETAINや電断・判別要素は推測せず欠損扱いとした。

## sources — 取得日 2026-09-04

1. グリーンべると/P-WORLD「3つの機能が“共鳴”する『ドラゴノーツ』登場」
   - https://news.p-world.co.jp/articles/4611/greenbelt
   - 2011-05-22納品開始予定、BB/RB/ART初当たり端値、機械割端値、ART40G/+1.0枚、BIG351枚、REG45枚、CZ構造
   - confidence: INDUSTRY
2. P-WORLD「ドラゴノーツ～ザ・レゾナンス～」
   - https://www.p-world.co.jp/machine/database/6332
   - ART40G/+1.0枚、BIG351枚、REG45枚、1200G+α天井、設定変更時の高確率ゾーン突入抽選
   - confidence: INDUSTRY_DATABASE
3. 娯楽産業「平和 パチスロ新機種『ドラゴノーツ -ザ・レゾナンス-』発表」
   - https://www.goraku-sangyo.com/%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%89%E3%83%A9%E3%82%B4%E3%83%8E%E3%83%BC%E3%83%84-%E3%82%B6%E3%83%BB%E3%83%AC%E3%82%BE%E3%83%8A/
   - 2011-04-14展示開始、ART40G/+1.0枚、BIG MAX351枚
   - confidence: INDUSTRY
4. パチマガスロマガ「ドラゴノーツ -ザ・レゾナンス- 小役確率・1000円あたりのゲーム数」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/96/c.php
   - 1000円ベース34.12〜35.67G
   - confidence: ANALYSIS_HIGH
5. 5号機クロニクル「平和＆オリンピア5号機全機種一覧」
   - https://5goki.com/heiwa-olympia
   - 設定別機械割97.9/99.8/102.1/105.1/108.9/114.2%
   - confidence: SECONDARY_DATABASE_CROSSCHECK

## status

- recordNumber: **571**
- chronologicalFrontier: **2011-05-22**
- relayStatus: **READY_TO_CONTINUE**
