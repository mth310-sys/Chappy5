# 南国育ちスペシャル

machineName: 南国育ちスペシャル
manufacturer: オリンピア
formalModelName: 南国育ちスペシャルZ
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-06-07
releaseDateStatus: VERIFIED_MULTI_SOURCE_WITH_DELIVERY_DATE_DIFFERENCE
releaseDateNote: K-Naviがホール導入開始2010-06-07。当時グリーンべると記事は25φ/30φとも2010-06-06納品開始予定。納品日とホール導入日の定義差として保持する。
generation: 5号機
systemType: ボーナス＋ART / モード管理 / 2段階天井 / 無限ART
coreStatus: COMPLETE_CORE_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線481「押忍！操」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 481 / chronologicalFrontier 2010-05-24。
- 2010-05-25〜06-06境界を再監査し、新たな全国具体日未登録機を今回高信頼に確定できず。
- 2010-06-07同日群へ進み、未登録確認済みの25φ「南国育ちスペシャル」を482件目として追加。30φ「南国育ちスペシャル-30」は別型式 `南国育ちスペシャルYH-30` のため別レコード候補として次回へ残す。

## payoutRateBySetting

- 設定1: **96.2%**
- 設定2: **99.2%**
- 設定3: **102.4%**
- 設定4: **106.4%**
- 設定5: **111.3%**
- 設定6: **116.3%**

K-Navi、P-WORLD、当時グリーンべると、複数解析資料で一致。
confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/397**
- 設定2: **1/392**
- 設定3: **1/390**
- 設定4: **1/386**
- 設定5: **1/383**
- 設定6: **1/381**

### REG
- 設定1: **1/655**
- 設定2: **1/636**
- 設定3: **1/618**
- 設定4: **1/590**
- 設定5: **1/565**
- 設定6: **1/537**

### ボーナス合算
- 設定1: **1/247**
- 設定2: **1/243**
- 設定3: **1/239**
- 設定4: **1/233**
- 設定5: **1/228**
- 設定6: **1/223**

confidence: ANALYSIS_MULTI_SOURCE

## baseGamesPer50

- **30.5G/50枚（全設定共通扱い）**
- 2010-04-16当時グリーンべると発表記事に「1000円あたり30.5G」。後年解析でも全設定共通30.5Gを確認。
confidence: CONTEMPORARY_INDUSTRY_CORROBORATED

## netIncrease

- ART「南国チャンス」: **約+1.5枚/G**
- **1セット50G**
- トータル継続率 **83%超**
- 「無限南国チャンス」: **約+1.5枚/G / 次回ボーナスまで継続**

confidence: CONTEMPORARY_INDUSTRY_MULTI_SOURCE

## basicPayout

- BIG: **約204枚**
- REG: **約48枚**
- BIG終了条件: **297枚超の払い出しで終了**

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時内部モード: **通常 / 高確率 / 天国 / スペシャル南国** の4モード。
- スペシャル南国モードではボーナス成立時のART突入率 **75%**、ART終了後の同モード再移行率 **75%** と当時業界記事に明記。
- 第1天井: **ボーナス間996G**でAT状態。ベル押し順ナビによりコインほぼ現状維持。
- 第2天井: **通常時1600G**で次回ボーナスまで継続する無限ART。

confidence: CONTEMPORARY_INDUSTRY_ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL**。パチ＆スロ必勝本の本機専用「設定変更&天井情報」に、**設定変更時は高確モードスタート**、かつ**両方の天井までのゲーム数はリセットされない**と明記。

carryOverBehavior: **PARTIAL_CONFIRMED_GAME_COUNTER_ONLY**。設定変更時ですら996G/1600Gの両天井カウンタが保持されるため、少なくとも据え置き時にカウンタを意図的に初期化する根拠は確認できない。ただし据え置き専用のモード/状態/ART内部状態記述は直接回収できていないため、それらはUNVERIFIEDのまま分離。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合のモード、高確、天井カウンタ、ART関連状態の扱いを本機固有資料で直接確定できず。

gameCounterReset: **NOT_RESET_BY_SETTING_CHANGE**。第1天井996G、第2天井1600Gの両方について設定変更後も引き継ぐ。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED**。通常天井値996G/1600Gを設定変更で短縮する記述は確認できず、むしろ天井カウンタ自体を引き継ぐ。

modeAfterReset: **HIGH_MODE_START_CONFIRMED**。設定変更時は高確モードスタート。具体的な振り分け率は公開確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確モードスタートは確認済みだが、ARTストック/前兆/RT状態など各内部状態のclear/retainまでは今回の収集粒度で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **SETTING_CHANGE_STARTS_IN_HIGH_MODE**。朝一設定変更時は高確モードから開始する点が主要恩恵。天井進捗も設定変更で失われない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更に伴う天井進捗消失はなく、公開された明確な不利要素は今回確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「南国育ちスペシャル / 南国SP / 南国育ちスペシャルZ」と「設定変更 / リセット / 朝一 / 据え置き / ガックン / 初期出目 / パトランプ / 判別」を組み替えて探索したが、初代2010年本機固有の高信頼な変更判別法を直接確定できず。2026年スマスロ版の情報は除外。

numericResetData:
- firstCeiling: **996G（ボーナス間）**
- secondCeiling: **1600G（通常時）**
- resetGameCounterCarryOver: **996G/1600Gとも引継ぎ**
- resetStartMode: **高確モード**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **NONE_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: SETTING_CHANGE_HIGH_MODE_AND_BOTH_CEILING_COUNTERS_CONFIRMED_POWER_CYCLE_STATE_DETECTION_UNVERIFIED

## conflicts

- releaseDate: ホール導入主値はK-Navi **2010-06-07**。当時グリーンべるとは **2010-06-06納品開始予定**。納品/導入の定義差として保持し数値競合扱いしない。
- formalModelName: `南国育ちスペシャルZ` は複数の中古実機系資料で一致するが、今回メーカー公式型式一覧を直接回収できていないため信頼度は二次資料相当。
- 30φ版は `南国育ちスペシャルYH-30 / 検定番号0S0130` と別型式。25φ性能を30φレコードへ自動転記しない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOver mode/state exact handling: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset exact ART/RT state handling: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode distribution / morning hit rate: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると / P-WORLD業界ニュース「7周年迎えた『南国育ち』に最新機が登場」 — https://news.p-world.co.jp/articles/3927/greenbelt — 2010-04-16、6/6納品予定、ART50G・約1.5枚/G、83%超、4モード、スペシャル南国モード75%/75%、BIG/REG確率端点、機械割96.2〜116.3%、BIG204枚/REG48枚、1000円30.5G — reliability: CONTEMPORARY_INDUSTRY
2. K-Navi「南国育ちスペシャル」 — https://p-kn.com/slot/1196/ — 2010-06-07ホール導入、設定別BIG/REG/合算、機械割、ART概要、宵越アリ/朝イチ特典タグ — reliability: ANALYSIS_DB
3. K-Navi「ボーナス出現率」 — https://p-kn.com/slot/1196/18947/ — 設定別BIG/REG/合算 — reliability: ANALYSIS_DB
4. P-WORLD「南国育ちスペシャル 2010年」 — https://www.p-world.co.jp/machine/database/5927 — BIG204枚/REG48枚、ART50G・約1.5枚/G、996G/1600G天井、1600Gは設定変更後も引継ぎ — reliability: INDUSTRY_MACHINE_DB
5. パチ＆スロ必勝本「設定変更&天井情報 [南国育ちスペシャル]」 — https://p.hisshobon.jp/machine/1578/1/23986 — 設定変更時高確モードスタート、両天井ゲーム数はリセットされない、996G/1600G天井 — reliability: ANALYSIS_HIGH
6. crankyseven「南国育ちスペシャル」 — https://crankyseven.com/nangokusodachisp-pc.htm — 機械割フル系列、50枚30.5G、BIG約204枚/REG約48枚、天井概要 — reliability: RETROSPECTIVE_ANALYSIS
7. A-SLOT「オリンピア 南国育ちスペシャルZ」 — https://www.a-slot.com/SHOP/heiwa43.html — 25φ実機名/型式表記の二次確認 — reliability: RETROSPECTIVE_COMMERCIAL
8. Yahoo!フリマ対応機種一覧 — https://paypayfleamarket.yahoo.co.jp/item/f1221917311 — 南国育ちスペシャル（南国育ちスペシャルZ）/30（南国育ちスペシャルYH-30）の型式区別を二次確認 — reliability: LOW_SECONDARY_MODEL_NAME_ONLY
