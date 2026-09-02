# 青ドン～花火の極～

machineName: 青ドン～花火の極～
manufacturer: エレコ（アルゼ / 現ユニバーサルエンターテインメント系）
formalModelName: アオドンハナビノキワミ1
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-11-03（グリーンべると納品開始予定） / 2009-11-04（K-Naviホール導入開始） / 2009-11-05（パチビー導入日） / 一部後年資料2009-10表記
generation: 5号機
systemType: ノーマル / BIG+REG + 天井RT / 技術介入
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

主要資料で複数系列があり、算出条件を完全に解消できないため平均せずCONFLICTとして保持する。

### K-Navi / pacnk 系列

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.4% |
| 2 | 99.5% |
| 3 | 102.0% |
| 4 | 105.1% |
| 5 | 108.2% |
| 6 | 112.6% |

### パチマガスロマガ旧解析シミュレート値

| 設定 | PAYOUT |
|---:|---:|
| 1 | 98.43% |
| 2 | 99.50% |
| 3 | 102.12% |
| 4 | 105.26% |
| 5 | 108.46% |
| 6 | 113.10% |

### 後年整理資料の別系列

- pachinko’s blog: 98.3 / 98.8 / 102.5 / 105.2 / 108.6 / 113.6%
- けんのスロットシミュレーション: 97.3 / 98.5 / 101.2 / 104.4 / 107.7 / 112.2%

confidence: CONFLICT_MULTISOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/372.36 | 1/819.20 | 1/256.00 |
| 2 | 1/364.09 | 1/780.19 | 1/248.24 |
| 3 | 1/348.60 | 1/728.18 | 1/235.74 |
| 4 | 1/330.99 | 1/655.36 | 1/219.92 |
| 5 | 1/315.08 | 1/595.78 | 1/206.09 |
| 6 | 1/297.89 | 1/546.13 | 1/192.75 |

- パチマガスロマガ旧解析、K-Navi、pacnk、後年整理資料でほぼ一致。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

| 設定 | 1000円あたり / 50枚相当 |
|---:|---:|
| 1 | 42.16G |
| 2 | 42.43G |
| 3 | 43.56G |
| 4 | 44.75G |
| 5 | 46.01G |
| 6 | 48.75G |

- パチマガスロマガ旧解析の直接値。
- 後年解析にも同一系列が残り整合。

confidence: ANALYSIS_HIGH_MULTISOURCE

## netIncrease

- 通常の出玉増加はボーナス主体。
- 天井到達後は次回ボーナスまでRT。
- 天井RTは「現状維持」「コインを減らさずプレイ可能」とする資料が中心で、比較可能な厳密純増枚数/Gは今回直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

confidence: ANALYSIS_HIGH_FOR_RT_EXISTENCE / UNVERIFIED_FOR_EXACT_NET_INCREASE

## basicPayout

- BIG: 最大364枚。
- REG: 平均約112枚。
- BIG中は技術介入要素あり。

confidence: INDUSTRY_DATABASE + RETROSPECTIVE_MACHINE_DATABASE_MULTISOURCE

## modeSpecificMinimumData

- 通常時は演出上 `ドンちゃんモード` / `クラシックモード` を任意選択可能。これは内部出玉モードではなく演出モードとして扱う。
- BIG終了後1000G、REG終了後800G消化で天井RTへ突入し、次回ボーナスまで継続。
- K-Naviは本機を `宵越アリ` と明示。
- 設定変更でも天井までのゲーム数を引き継ぐ解析が残るため、前日ハマリG数が朝一立ち回りへ直接影響する機種。

confidence: ANALYSIS_HIGH_MULTISOURCE

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_GAME_COUNT_CARRIED_OVER_ON_SETTING_CHANGE**。後年解析で「設定変更 天井までのG数を引き継ぐ」を明記。K-Naviも `宵越アリ` と表示しており方向性が整合する。設定変更に伴うその他の演出表示・リール初期状態は別途未確認。

carryOverBehavior: **CEILING_PROGRESS_CARRIED_OVER / PREVIOUS_BONUS_TYPE_REMAINS_RELEVANT_TO_CEILING**。据え置き時は当然前日からボーナス間ゲーム数が継続し、BIG後1000G / REG後800Gという直前ボーナス種別基準の天井が朝一でも有効とみられる。K-Naviの `宵越アリ` および設定変更でも天井G数引継ぎ資料から、少なくとも天井狙い上の宵越し有効性は高信頼。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの内部天井カウンタ・表示/出目の本機固有処理を直接説明する資料は今回確定できず。設定変更でも天井G数を引き継ぐため、電断だけで天井G数が消えるとは推定しない。

gameCounterReset: **NOT_RESET_BY_SETTING_CHANGE / CARRIED_OVER_FOR_CEILING**。BIG後1000G、REG後800Gの天井までのゲーム数を設定変更でも引き継ぐ直接解析あり。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED / ORIGINAL_CEILING_PROGRESS_CARRIED_OVER**。設定変更後専用の短縮天井値は確認できず、残りG数引継ぎ型として扱う。

modeAfterReset: **NOT_APPLICABLE_FOR_GAME_NUMBER_RELEASE_MODE / DISPLAY_MODE_UNVERIFIED**。ゲーム数解除モードは確認されない。ドンちゃん/クラシックはプレイヤー選択の演出モードで、設定変更時の選択状態保持/初期化は未確認。

stateAfterReset: **CEILING_PROGRESS_CARRIED_OVER; ACTIVE_RT_STATE_ON_CHANGE_UNVERIFIED**。天井到達前のカウンタ進捗は引継ぎ。すでに天井RTへ突入済みの状態で設定変更した場合にRT状態がそのまま継続するかは直接資料を確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **CEILING_CARRYOVER_CAN_CREATE_MORNING_VALUE**。前日ハマリを設定変更でも引き継ぐため、前日最終G数と直前ボーナス種別が把握できる場合、朝一から天井までの残りG数が短い台は狙い目になり得る。設定変更専用の追加高確/CZ/初当たり優遇は確認なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で天井進捗が消える不利は確認されず。その他の設定変更固有不利要素も確認なし。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶モード、鉢巻ランプ等から設定変更/据え置きを判別できる本機固有の直接資料を、機種名・型式名・メーカー名と検索語を変えて再探索したが確定できず。

numericResetData:
  normalCeilingAfterBIG: 1000G
  normalCeilingAfterREG: 800G
  resetSpecificCeiling: NONE_CONFIRMED
  ceilingGameCountOnSettingChange: CARRIED_OVER
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_POWER_CYCLE_AND_VISIBLE_RESET_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `青ドン～花火の極～ / 青ドン 花火の極 / 青ドン・花火の極 / アオドンハナビノキワミ1 / エレコ / アルゼ / ユニバーサル` を使用。
- `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越 / 宵越し / 電源OFF ON / 電源オフ / 天井 / 天井RT / ガックン / リール / 初期出目 / 液晶` を組み替えて再探索。
- 当時グリーンべると、K-Navi、パチビー、旧パチマガスロマガ解析、P-WORLD系中古実機DB、pacnk、後年解析を横断。
- 天井G数の設定変更引継ぎは直接解析とK-Naviの宵越アリ表示で整合。
- powerCycleBehavior、天井RT突入済み状態の設定変更、ガックン等の変更判別は一般論から補完せずUNVERIFIEDとした。

## conflicts

- 機械割/PAYOUTは複数系列が競合。平均せず全系列を保持。
- 導入日表記は、グリーンべると2009-11-03納品開始予定、K-Navi2009-11-04ホール導入開始、パチビー2009-11-05導入日、一部後年資料2009-10。物流開始/ホール導入/後年月表記の定義差を保持。
- 形式名 `アオドンハナビノキワミ1` は中古実機DBで確認したが、検定番号は今回の複数経路探索で確定できず。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- exactCeilingRTNetIncreasePerGame: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- activeRTStateAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- publishedMorningNumericRates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「HANABIシリーズ最高傑作が登場」2009-10-06 — https://web-greenbelt.jp/00003333/ — エレコ、パチスロ、ボーナス主体、新筐体、納品2009-11-03開始予定 — reliability: INDUSTRY_CONTEMPORARY
2. K-Navi「青ドン～花火の極～」 — https://p-kn.com/slot/1079/ — ホール導入2009-11-04、BIG/REG/合算、機械割、天井・宵越アリ・RT/技術介入 — reliability: ANALYSIS_MAJOR_DATABASE
3. パチビー「青ドン～花火の極～」 — https://www.pachibee.jp/movies/index/2034 — 導入日2009-11-05、5号機ノーマル、天井あり、技術介入 — reliability: INDUSTRY_DATABASE
4. パチマガスロマガ旧解析「ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/79/h.php — 設定別BIG/REG/合算、PAYOUTシミュレート — reliability: ANALYSIS_OLD_MAJOR
5. パチマガスロマガ旧解析「小役確率・1000円あたりのゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/79/c.php — 設定別42.16〜48.75G/1000円 — reliability: ANALYSIS_OLD_MAJOR
6. けんのスロットシミュレーション「青ドン～花火の極～解析情報」 — https://kenslo65536.com/kaiseki/aodon-kiwami.html — BIG後1000G/REG後800G天井、設定変更でも天井までのG数引継ぎ、ベース、別系列出玉率 — reliability: RETROSPECTIVE_ANALYSIS
7. 中一商事「エレコ 青ドン 花火の極」 — https://www.nakaiti.com/html/sEleco074.html — 型式アオドンハナビノキワミ1、BIG最大364枚、REG平均112枚、天井条件 — reliability: RETROSPECTIVE_MACHINE_DEALER
8. pacnk「青ドン 花火の極」 — https://pacnk.com/slot/2009/aodonkiwami/top.php — 設定別BIG/REG/PAYOUT、ゲーム性 — reliability: RETROSPECTIVE_ANALYSIS_DATABASE
9. pachinko’s blog「エレコ 青ドン 花火の極の筺体＆スペック＆情報」 — https://pachinko.hatenablog.jp/entry/2009/10/aodon-hanabi-no-kiwami — 別系列出玉率、設定別ボーナス値、2009-10表記 — reliability: RETROSPECTIVE_SINGLE
