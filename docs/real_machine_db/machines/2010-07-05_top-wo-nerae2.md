# トップをねらえ2!

machineName: トップをねらえ2!
manufacturer: 平和
formalModelName: トップをねらえ2！X
approvalNumber: 0S0074
releaseDate: 2010-07-05
releaseDateStatus: CONFIRMED_MULTI_SOURCE
releaseDateNote: K-Navi・パチビーが全国ホール導入開始2010-07-05で一致。当時グリーンべるとは納品2010-07-04開始予定と報道しており、物流開始とホール導入を分離。
generation: 5号機
systemType: A+ART / セットストックART + ゲーム数管理ART / 無限ART / 3段階天井
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、495前線実レコードを再取得。
- 最新正本地点は recordCount 495 / chronologicalFrontier 2010-06-28。
- K-Navi 2010年7月導入カレンダーで6/29〜7/4に新規全国導入パチスロ群は確認されず、次の明確な全国導入は2010-07-05「トップをねらえ2!」「お座敷の茶々」。
- repo検索で「トップをねらえ2!」未登録を確認し、496件目として追加。

## payoutRateBySetting

P-WORLD / pacnk 系列:
- 設定1: **97.3%**
- 設定2: **99.5%**
- 設定3: **101.9%**
- 設定4: **105.2%**
- 設定5: **108.8%**
- 設定6: **114.3%**

当時パチマガスロマガのシミュレート値:
- 設定1: **96.95%**
- 設定2: **99.38%**
- 設定3: **102.17%**
- 設定4: **105.92%**
- 設定5: **110.03%**
- 設定6: **114.73%**

定義差を平均化せずCONFLICTとして保持。物差し主系列はP-WORLD/pacnkの市場掲載値。
confidence: CONFLICT_HIGH_QUALITY_DEFINITION_DIFFERENCE

## initialHitBySetting

### 通常BIG合成（赤7+青7）
- 設定1: **1/318.14**
- 設定2: **1/306.24**
- 設定3: **1/295.21**
- 設定4: **1/282.48**
- 設定5: **1/270.81**
- 設定6: **1/258.02**

### 黒BIG
- 全設定共通: **1/5041.23**

### 全BIG合算
- 設定1: **1/299.25**
- 設定2: **1/288.70**
- 設定3: **1/278.88**
- 設定4: **1/267.49**
- 設定5: **1/257.00**
- 設定6: **1/245.45**

### ART初当り
- 設定1: **1/555**
- 設定2: **1/514**
- 設定3: **1/473**
- 設定4: **1/419**
- 設定5: **1/370**
- 設定6: **1/283**

P-WORLD、pacnk、当時パチマガスロマガで主要系列を照合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

当時パチマガスロマガ解析アーカイブ:
- 設定1: **34.78G/1000円**
- 設定2: **34.82G/1000円**
- 設定3: **34.86G/1000円**
- 設定4: **34.92G/1000円**
- 設定5: **34.98G/1000円**
- 設定6: **35.06G/1000円**

confidence: CONTEMPORARY_ANALYSIS_ARCHIVE

## netIncrease

- ART「バスターゾーン」: **約+1.4枚/G**
- ART「バスターミッション」: **約+1.4枚/G**
- 無限ART「ダイバスターゾーン」: **約+1.4枚/G**

グリーンべると、P-WORLD、パチビー、当時パチマガスロマガで一致。
confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- 赤7BIG: **約204枚**
- 青7BIG: **約204枚**
- 黒BIG: **約204枚 + ART確定**
- BIG終了条件: **297枚超払い出し**
- ART「バスターゾーン」: **1セット30G**
- ART「バスターミッション」: **5G+α**
- 無限ART「ダイバスターゾーン」: **次回ボーナスまで**

confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時に低確/高確等のART当選期待度が異なる状態を持つ。
- 2ステップART: BZ 30G → BM 5G+α。BZ中にBMゲーム数、BM中にBZストックを抽選する構造。
- ARTストック保有時は最大32GのART準備状態を経て突入する場合がある。
- 天井はボーナス終了後/設定変更後から数える3段階。
  - **600G**: 青7BIG成立時のART期待度が赤7BIG相当に上昇。
  - **900G**: BIG成立時ART期待度が高確時相当。
  - **1200G**: 次回ボーナス成立時ART確定（P-WORLD表現では高確中振分でストック）。
- 通常時の変則押しは最低16Gのペナルティが発生し得るため、天井実到達が表示G数を超える場合がある。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_COUNTER_RESET_CONFIRMED / RESET_FROM_0_FOR_THREE_STEP_CEILING**。P-WORLDは3段階天井を「ボーナス終了後および設定変更後」600/900/1200Gと明記。pacnkも「設定変更時は天井までのゲーム数がリセット」と明記。設定変更時のARTストック消去/保持、ART準備・潜伏状態の扱いは高信頼資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

carryOverBehavior: **CEILING_PROGRESS_CARRYOVER_ON_STAY_PRESUMED_FROM_RESET_SPEC_BUT_DIRECT_MACHINE_SPEC_UNVERIFIED**。設定変更時のみ天井G数リセットは直接確認したが、「据え置きなら前日G数を引き継ぐ」と明記する本機固有高信頼資料は今回確定できず、一般論から断定しない。ARTストック/低高確/準備状態の据え置き保持も `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior: **PHYSICAL_STAGE_RESET_REPORTED_SINGLE_CONTEMPORARY_USER_SOURCE / INTERNAL_COUNTER_BEHAVIOR_UNVERIFIED**。2010年当時の実戦記で設定変更・電源ON/OFF双方でダイナーステージ開始との報告はあるが単一ユーザー資料のため補助扱い。単純電源OFF→ONのみで天井G数・ARTストック・内部状態がどう処理されるかは高信頼資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED**。設定変更で3段階天井カウンタは0起点へリセット。

ceilingAfterReset: **600G / 900G / 1200G**。短縮天井ではなく通常と同じ3段階を設定変更後0Gから再計測。設定変更専用の追加短縮は確認されない。

modeAfterReset: **NO_GAME_COUNT_MODE_SYSTEM / INTERNAL_STATE_DETAIL_UNVERIFIED**。ゲーム数解除モード型ではない。設定変更後の低確スタートは2010年当時ユーザー実戦記で報告があるが、高信頼解析本文を確定できないため主確定値にはせず `UNVERIFIED_AFTER_RESEARCH_WITH_SINGLE_CONTEMPORARY_REPORT`。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確、ARTストック、ART準備/潜伏の設定変更時処理は、K-Naviに「設定変更時の挙動」項目が存在することまでは確認できたが本文取得不能。単一実戦記の「設定変更時必ず低確スタート」は補助証拠としてのみ保持。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NO_SHORTENED_CEILING_CONFIRMED**。設定変更後も通常と同じ600/900/1200G天井を0から再計測するため、短縮恩恵は確認されない。朝一専用当選率/モード優遇も `NONE_CONFIRMED_AFTER_RESEARCH`。

resetPenalties: **LOSES_PREVIOUS_DAY_CEILING_PROGRESS**。設定変更で前日の天井進捗がクリアされる点は朝一客にとって明確な不利。ARTストック/高確等の消失は直接高信頼根拠がないため断定しない。

resetDetection: **DIFFICULT / STAGE_NOT_DISCRIMINATING_REPORTED_SINGLE_SOURCE**。単一2010年実戦記では設定変更時も単純電源ON/OFF時もダイナーステージになるためステージでは変更判別困難と報告。ガックン・初期出目・ランプ等の本機固有高信頼情報は検索語と資料系統を変えて再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- normalCeilingStage1: **600G**
- normalCeilingStage2: **900G**
- normalCeilingStage3: **1200G**
- resetCounterHandling: **RESET_TO_0_ON_SETTING_CHANGE**
- resetCeilingStage1: **600G**
- resetCeilingStage2: **900G**
- resetCeilingStage3: **1200G**
- resetCeilingShortening: **NONE_CONFIRMED**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: COMPLETE_FOR_CEILING_RESET / PARTIAL_FOR_INTERNAL_STATE_POWER_CYCLE_DETECTION

## conflicts

1. 機械割: P-WORLD/pacnk市場掲載系列 **97.3/99.5/101.9/105.2/108.8/114.3%** と、当時パチマガスロマガシミュレート **96.95/99.38/102.17/105.92/110.03/114.73%**。定義差として両系列保持。
2. 導入時期表記: P-WORLDは「2010年06月」と月精度、K-Navi/パチビーは全国導入開始2010-07-05、グリーンべるとは納品7/4予定。イベント定義を分離し、DBのホール導入主値は2010-07-05。

## missingFields

- carryOverBehavior direct source: UNVERIFIED_AFTER_RESEARCH
- exact powerCycleBehavior for ceiling/state/ART stock: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset high-confidence primary/analysis source: UNVERIFIED_AFTER_RESEARCH
- ART stock handling on setting change: UNVERIFIED_AFTER_RESEARCH
- resetDetection high-confidence machine-specific method: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「2ステップART搭載『トップをねらえ2！』登場」2010-05-31 — https://web-greenbelt.jp/00002682/ — 平和発表、ART純増1.4枚/G、BZ/BM構造、納品7/4予定 — reliability: INDUSTRY_PRIMARY
2. P-WORLD「トップをねらえ2!」 — https://www.p-world.co.jp/machine/database/5984 — 型式トップをねらえ2！X、検定0S0074、BIG確率、機械割、204枚、ART純増1.4、600/900/1200G天井、設定変更後も同起点 — reliability: INDUSTRY_MACHINE_DB
3. パチビー「トップをねらえ2!」 — https://www.pachibee.jp/machines/index/210050008 — 導入2010-07-05、ART/BIG基本性能 — reliability: INDUSTRY_MACHINE_DB
4. K-Navi「トップをねらえ2!」 — https://p-kn.com/slot/1228/ — 導入2010-07-05、BIG合算、ART仕様、天井/設定変更解析項目の存在 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
5. K-Navi 2010年7月導入カレンダー — https://p-kn.com/calendar/201007/ — 7/5パチスロ「トップをねらえ2!」「お座敷の茶々」、次群7/20 — reliability: CONTEMPORARY_MACHINE_CALENDAR
6. pacnk「トップをねらえ2!」 — https://pacnk.com/slot/2010/topoonerae/top.php — NBIG、ART初当り、機械割、天井600/900/1200G、設定変更時天井G数リセット — reliability: RETROSPECTIVE_ANALYSIS_DB
7. パチマガスロマガ「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/a.php — ART純増1.4、BIG約204枚 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
8. パチマガスロマガ「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/c.php — 1000円あたり34.78〜35.06G — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
9. パチマガスロマガ「ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/h.php — 赤/青/黒BIG、全BIG合算、ART初当り、シミュレートPAYOUT — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
10. パチマガスロマガ「機種トップ」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/heiwa_slot_38.php — 「攻め時・ヤメ時・設定変更時」等の当時解析項目存在 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
11. 立ち回り解析整理 — https://www.pachirinko.com/5.top.wo.nerae2.html — 設定変更時の天井G数リセットを再照合 — reliability: RETROSPECTIVE_ANALYSIS_SINGLE
12. 2010年当時実戦記「スロ人生初の・・・」 — https://plaza.rakuten.co.jp/battensan/diary/201008270000/ — 設定変更/電源ON-OFF時ダイナーステージ、設定変更時低確開始という当時ユーザー報告。高信頼確定には使わず補助証拠のみ — reliability: CONTEMPORARY_USER_REPORT_LOW
