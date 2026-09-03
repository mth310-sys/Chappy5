# ニューパルサーV2

machineName: ニューパルサーV2
manufacturer: 山佐
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-06-07
releaseDateStatus: CONFIRMED_MULTI_SOURCE
releaseDateNote: パチビー2010年6月月間導入スケジュールが2010-06-07、山佐系年表も2010-06-07。グリーンべるとは納品2010-06-06開始予定と報道しており、納品開始翌日のホール導入として整合。
generation: 5号機
systemType: ノーマル / BIG+REG / リーチ目主体+遅れ告知
coreStatus: COMPLETE_CORE_BASE_UNVERIFIED_FORMAL_IDENTITY_UNVERIFIED_RESET_BEHAVIOR_NA_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前487「ガメラ」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 487 / chronologicalFrontier 2010-06-07。
- LATEST_HANDOFFの2010-06-07同日群未処理候補から「ニューパルサーV2」をrepo未登録確認後に追加。
- 2010年11月「ニューパルサーV2～ブラックVer.～」は後発別レコード候補のため混同しない。
- chronologicalFrontierは2010-06-07を維持する。

## payoutRateBySetting

- 設定1: **97.8%**
- 設定2: **99.2%**
- 設定3: **100.8%**
- 設定4: **102.7%**
- 設定5: **105.0%**
- 設定6: **107.9%**

パチマガスロマガとHAZUSEで一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/297.8**
- 設定2: **1/289.9**
- 設定3: **1/282.4**
- 設定4: **1/275.3**
- 設定5: **1/268.5**
- 設定6: **1/262.1**

### REG
- 設定1: **1/595.7**
- 設定2: **1/579.9**
- 設定3: **1/564.9**
- 設定4: **1/496.4**
- 設定5: **1/442.8**
- 設定6: **1/399.6**

### ボーナス合算
- 設定1: **1/198.5**
- 設定2: **1/193.3**
- 設定3: **1/188.3**
- 設定4: **1/177.1**
- 設定5: **1/167.1**
- 設定6: **1/158.3**

グリーンべると、パチマガスロマガ、HAZUSEでほぼ一致。HAZUSEには丸め差（例1/297.9等）があるため主値は当時業界記事＋パチマガスロマガ系列を採用。
confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「ニューパルサーV2 / 1000円あたり / 50枚 / ベース / コイン持ち」を組み替え、P-WORLD、パチマガスロマガ、HAZUSE、5号機回顧資料を再探索したが、比較可能な直接掲載値を確定できず。小役確率からの独自計算は行わない。

## netIncrease

NOT_APPLICABLE（ボーナスのみのノーマルタイプ。RT/ART/ATなし）

## basicPayout

- BIG: **約312枚**
- REG: **約156枚**

グリーンべると、P-WORLD、パチマガスロマガで一致。
confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 3リール・5ライン・6段階設定のノーマルタイプ。
- BIGは赤7とカエルが同一フラグ。
- ボーナス比率は概ねBIG:REG=2:1。
- ボーナス成立後、リーチ目を察知できなくても3回目のハズレでWINランプ等による告知。
- 通常ゲーム数天井、RT/ART、ゲーム数モードは確認なし。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_COUNT_MODE_OR_RT_ART_RESET_TARGET_CONFIRMED / OTHER_INTERNAL_HANDLING_UNVERIFIED**。本機はボーナスのみのノーマルタイプで、通常ゲーム数天井・RT/ART・AT・ゲーム数モードを確認していないため、ホール経営上の主要な「天井/モード/有利区間リセット恩恵」対象はなし。設定変更時の成立役・内部フラグ等、完全再現用の内部処理は本DB対象外かつ直接根拠未確認。

carryOverBehavior: **NO_CEILING_OR_MODE_CARRYOVER_TARGET_CONFIRMED**。通常ゲーム数天井・モード・RT/ARTがないため、据え置きによる主要な宵越し狙い対象は確認なし。

powerCycleBehavior: **NO_CEILING_OR_MODE_POWER_CYCLE_TARGET_CONFIRMED / OTHER_INTERNAL_HANDLING_UNVERIFIED**。単純電源OFF→ONで引継ぎ/リセットが問題となる天井・ゲーム数モード・RT/ARTは確認なし。

gameCounterReset: **NOT_APPLICABLE_AS_NO_GAME_COUNT_CEILING_CONFIRMED**。

ceilingAfterReset: **NOT_APPLICABLE / NO_CEILING_CONFIRMED**。

modeAfterReset: **NOT_APPLICABLE_AS_NO_GAME_COUNT_MODE_CONFIRMED**。

stateAfterReset: **NOT_APPLICABLE_FOR_RT_ART_STATE / OTHER_INTERNAL_STATE_UNVERIFIED**。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確スタート、RT/ART優遇、朝一当選率等は確認なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ニューパルサーV2 設定変更 / リセット / 朝一 / 据え置き / ガックン / 初期出目 / リール」を組み替えたが、2010年V2固有の高信頼な設定変更判別要素を確定できず。

numericResetData:
- normalCeiling: **NONE_CONFIRMED**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: NORMAL_TYPE_NO_CEILING_NO_RT_ART_NO_GAME_COUNT_MODE_RESET_BENEFIT_NONE_CONFIRMED_DETECTION_UNVERIFIED

## conflicts

- HAZUSEの現行ページは「ニューパルサーV2」ページ上に型式名「ニューパルサースリーRZ」、検定番号「0S0201」、導入開始日「2009-06-01」を表示しており、2010年V2の業界資料・導入時期と整合しない。型式/検定メタデータの誤紐付け可能性が高いため本レコードへ採用せず、formalModelName / approvalNumberはUNVERIFIEDとした。
- BIG/REG確率はHAZUSEに小数第1位の丸め差が一部あるが、グリーンべると・パチマガスロマガ系列とほぼ同一。競合ではなく丸め精度差として注記。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「ニューパル最新作『ニューパルサーV2』登場」2010-05-06 — https://web-greenbelt.jp/00002706/ — 納品2010-06-06開始予定、設定1/6のBIG・REG・合算、BIG312枚、REG156枚、6段階設定 — reliability: INDUSTRY
2. パチビー 2010年6月新機種導入日 — https://www.pachibee.jp/machines/schedule/2010-06 — 2010-06-07導入群にニューパルサーV2掲載 — reliability: INDUSTRY_MACHINE_DB
3. パチマガスロマガ「ニューパルサーV2」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/172/a.php — ノーマル、3リール5ライン、BIG約312枚/REG約156枚 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/172/h.php — 設定別BIG/REG/合算、PAYOUT 97.8〜107.9% — reliability: ANALYSIS_HIGH
5. P-WORLD「ニューパルサーV2」 — https://www.p-world.co.jp/machine/database/5950 — 山佐、5号機ノーマル、BIG312枚/REG156枚、3回目のハズレで告知 — reliability: INDUSTRY_MACHINE_DB
6. HAZUSE「ニューパルサーV2」 — https://hazuse.com/machine/pachislot/0S0201/ — 機械割一致、ボーナス確率丸め差。型式/検定/導入日は他資料と不整合のため採用せず — reliability: ANALYSIS_WITH_METADATA_CONFLICT
7. 山佐系発売年数表 — https://plaza.rakuten.co.jp/jognoyamasa/4000/ — ニューパルサーV2 2010-06-07発売 — reliability: RETROSPECTIVE_SINGLE
