# パチスロアタックNo.1 ～開幕！世界選手権～

machineName: パチスロアタックNo.1 ～開幕！世界選手権～
manufacturer: 三洋物産
releaseDate: 2013-06-10
releaseDatePrecision: exact_day
generation: 5号機
systemType: A+ART（リアルBIG + 擬似ボーナス + ゲーム数上乗せ型ART）
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-06-10**。K-Navi全国導入カレンダー、K-Navi機種ページ、HAZUSE、ALL7で一致。
- 型式名: **パチスロアタックNo.1世界編KJ**。
- 検定番号: **3S0019**。
- 2009年の「パチスロアタックNo.1」（RT機）とは別機種。2009年版の天井・RT性能・resetBehaviorを混入しない。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.81% |
| 2 | 98.18% |
| 3 | 100.71% |
| 4 | 103.64% |
| 5 | 107.25% |
| 6 | 111.23% |

- パチマガスロマガ掲載系列を比較値として採用。
- HAZUSEは **97 / 98 / 101 / 104 / 107 / 111%**、pacnkは **96.80 / 98.10 / 100.70 / 103.60 / 107.20 / 111.20%** と丸め精度が異なるが、同一系列の丸め差として扱う。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH_ROUNDING_DIFFERENCE

## initialHitBySetting

ART「アタックタイム」初当たり:

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/503.8 |
| 2 | 1/485.5 |
| 3 | 1/466.9 |
| 4 | 1/431.4 |
| 5 | 1/396.1 |
| 6 | 1/362.4 |

ボーナス合成（リアルBIG + VICTORY BONUS）:

| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/233.1 |
| 2 | 1/225.5 |
| 3 | 1/217.6 |
| 4 | 1/203.9 |
| 5 | 1/189.6 |
| 6 | 1/176.5 |

- パチマガスロマガの設定別解析値。
- HAZUSEのボーナス+ART合算 **1/159 / 154 / 148 / 139 / 128 / 119** は定義が異なるため、ART初当たり・ボーナス合成と混同しない。
- confidence: ANALYSIS_HIGH

## baseGamesPer50

- **約31G/50枚（1000円）**。
- 2013年導入前の業界向けスペック紹介で確認。
- 高信頼の別系統直接値を今回の再探索では回収できなかったため `ANALYSIS_SINGLE_PERIOD`。

## netIncrease

- ART「アタックタイム」: **約1.7枚/G**。
- VICTORY BONUSもART型擬似ボーナスとして **約1.7枚/G**。
- K-Navi、P-WORLD、パチマガスロマガで一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## basicPayout

- ART「アタックタイム」: **1セット50G+α**。
- BIG BONUS: **約200枚**（298枚超払い出し終了）。
- VICTORY BONUS: **25G or 50G**、パチマガスロマガの獲得目安は **約43枚 or 約85枚**。
- CZ「アタックチャレンジ」: **10 / 20 / 30G / 無限**、ART突入期待度約43%。
- 物差し用途では上記の基本性能までを保持し、SUPERアタックタイム等の詳細上乗せ抽選は収集しない。

## modeSpecificMinimumData

- ボーナス・ART間 **1200G** で天井ART当選。
- 天井ART開始ステージは当時K-Naviパチログで **チェコ80% / ソ連20%**。
- 通常時は基本3ステージがあり、屋上ステージは高確示唆。
- ART中はVICTORY BONUS確率の異なる4モード（特訓 / VSケニア / VSチェコ / VSソ連）があるが、これはART中の内部モードであり朝一通常モードとは別物。
- K-Naviには「天井ゲーム数振り分け」解析項目が存在するが、現存キャッシュから本文を安全に回収できなかったため、完全再現用の振り分けは記録しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__GENERAL_1200G_CEILING_CONFIRMED__SETTING_CHANGE_CARRYOVER_POWER_CYCLE_CONTRACT_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 「パチスロアタックNo.1 / アタックNO.1 / 開幕！世界選手権 / 型式3S0019 / 三洋」×「設定変更 / リセット / 朝一 / 天井 / ゲーム数 / 高確 / ガックン」を組み替え、K-Navi、HAZUSE、P-WORLD、パチマガスロマガ、当時スペック記事、旧天井攻略系を再探索。
- **設定変更時にボーナス・ART間ゲーム数がRESETか、内部状態を再抽選するかを直接明記する本機固有資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`**。
- 一般仕様の反対推定や他の三洋機からの類推は行わない。

### carryOverBehavior

- 「据え置き / 宵越し / 前日ゲーム数 / 朝一」へ検索語を変更して再探索したが、**純据え置き時の1200G天井進捗・通常時高確状態等の保持契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`**。

### powerCycleBehavior

- 「電源OFF ON / 電断 / 電源入切 / 電源オンオフ」へ検索語を変更して再探索したが、**設定変更を伴わない純電源OFF→ONのみ**のゲーム数・状態・表示契約は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き仕様が未確定のため純電断へ外挿しない。

### gameCounterReset

- generalCeilingCounter: **BONUS_OR_ART_BETWEEN_1200G_CONFIRMED**。
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常運用の天井: **ボーナス・ART間1200G**。
- 設定変更専用の固定短縮天井・専用天井振り分けは、十分な再探索後も直接確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 通常時の朝一専用モード、設定変更専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- ART中の特訓/ケニア/チェコ/ソ連モードは確認済みだが、ART中のボーナス確率制御用であり朝一resetBehaviorへ転用しない。

### stateAfterReset

- 通常時に高確概念が存在することはP-WORLD/K-Naviで確認。
- 設定変更・据え置き・純電断時の高確状態の初期化/保持は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 天井到達時ARTが **チェコ80% / ソ連20%** から開始する一般天井恩恵は確認できるが、これは設定変更専用恩恵ではない。
- 設定変更専用の短縮天井、朝一高確、CZ優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の公開された不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のリールガックン、初期出目、液晶ステージ、ランプ等による設定変更/据え置き判別契約は、資料系統を変えた再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- settingChangeModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- settingChangeStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- fixedShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- settingChangeCZBenefit: **NONE_CONFIRMED_AFTER_RESEARCH**。
- generalCeilingARTStart: **チェコ80% / ソ連20%**（朝一専用値ではない）。

### numericResetData

- generalCeiling: 1200G after bonus/ART
- settingChangeCounter: UNVERIFIED_AFTER_RESEARCH
- carryOverCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleOnlyCounter: UNVERIFIED_AFTER_RESEARCH
- generalCeilingARTCzech: 80%
- generalCeilingARTSoviet: 20%

resetQaReliability: HIGH_FOR_GENERAL_SPEC_AND_CEILING__UNVERIFIED_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_CONTRACT

## missingFields

- settingChangeCounterContract: `UNVERIFIED_AFTER_RESEARCH`
- carryOverFullContract: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCycleFullContract: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeInternalState: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- resetSpecificPublicMorningNumbers: `NONE_CONFIRMED_AFTER_RESEARCH`

## conflicts

- payoutRatePrecision:
  - パチマガスロマガ: **96.81 / 98.18 / 100.71 / 103.64 / 107.25 / 111.23%**。
  - HAZUSE: **97 / 98 / 101 / 104 / 107 / 111%**。
  - pacnk: **96.80 / 98.10 / 100.70 / 103.60 / 107.20 / 111.20%**。
  - 同一系列の丸め/表示精度差と判断し、平均せず最も精密なパチマガスロマガ値を本線保持。

## sources

取得日: 2026-09-06

- K-Navi 機種トップ / 導入日・基本仕様・天井項目: https://p-kn.com/slot/1857/
- K-Navi 2013年6月全国導入カレンダー: https://p-kn.com/calendar/201306/
- HAZUSE / 型式・検定番号・導入日・基本スペック: https://hazuse.com/machine/pachislot/3S0019/
- P-WORLD / ART・BIG・CZ・内部状態: https://www.p-world.co.jp/machine/database/7079
- パチマガスロマガ 基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/18/a.php
- パチマガスロマガ ボーナス確率・ART初当たり・機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/18/h.php
- パチマガスロマガ ARTフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/18/l.php
- ALL7 2013年6月導入予定一覧: https://www.all7.jp/plans/index/2013/06
- 2013年当時スペック紹介（約31G/千円）: https://ameblo.jp/slostar/entry-11512591758.html
- pacnk 後年設定判別整理: https://pacnk.com/slot/tools/sh_attackno12013.html

## researchNotes

- 2009年版「パチスロアタックNo.1」が検索上強く混入するため、`開幕！世界選手権`、`世界編KJ`、`3S0019` を併用して2013年機へ限定した。
- resetBehavior欠損は、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/電断/ガックン/高確/天井の語を入れ替え、K-Navi・HAZUSE・P-WORLD・パチマガスロマガ・旧天井攻略系まで横断後に確定した欠損表記。
- 完全再現用のCZ小役別当選率、ART中モード全移行率、上乗せ詳細はミッション対象外。
