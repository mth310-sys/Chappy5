# パチスロ ゴッドイーター 荒神Ver.

machineName: パチスロ ゴッドイーター 荒神Ver.
manufacturer: 山佐
releaseDate: 2015-11-16
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 938
generation: 5号機 / 旧基準AT
systemType: AT / ゲーム数解除+CZ / ゲーム数上乗せ
formalModelName: パチスロゴッドイーターFF
inspectionNumber: 4S0913
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2015-11-16、メーカー山佐、型式名「パチスロゴッドイーターFF」、検定番号4S0913を確認。
- 期待値見える化、man-soft、ちょんぼりすたも2015-11-16導入で一致。
- P-WORLDでは5号機AT、純増約2.7枚/G、初当たり50G or 100G+ストーリー12Gの仕様を確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.8% |
| 3 | 100.3% |
| 4 | 102.1% |
| 5 | 105.0% |
| 6 | 108.2% |

- 期待値見える化、man-soft、pacnkで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとしてAT「アラガミバースト」初当たりを採用。

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/399.2 |
| 2 | 1/375.8 |
| 3 | 1/372.4 |
| 4 | 1/352.5 |
| 5 | 1/350.3 |
| 6 | 1/327.8 |

- 期待値見える化、man-soft、pacnkで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約30G/50枚**（感応現象込みとするパチマガスロマガ記載あり）。
- パチマガスロマガ、期待値見える化、man-softで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「アラガミバースト」: **約2.7枚/G**。
- P-WORLD、パチマガスロマガ、期待値見える化、man-softで一致。
- reliability: INDUSTRY_DATABASE_PLUS_ANALYSIS_HIGH

## basicPayout
- AT「アラガミバースト」: **初当たり時50G or 100G + ストーリー12G**。
- 赤7ダブル揃い時は100Gスタート。ダブル揃い期待度/選択率は約33%（man-soft 33.3%、P-WORLD/パチマガスロマガ約33%）。
- パチマガスロマガはAT1回あたり平均獲得枚数約650枚とするが、本DBでは平均獲得枚数は補助値として保持。
- CZ「殲滅モード」: 10G+α。
- 実機完全再現用のアラガミ別上乗せ詳細等は収集対象外。

## modeSpecificMinimumData
- 通常天井: **AT間最大999G**でAT当選。
- モード別最大規定ゲーム数（必勝本）:
  - 通常A: 999G
  - 通常B: 768G
  - 天国準備: 384G
  - 天国: 192G
  - 超天国: 96G
- 769G以降で当選したATはATレベルが優遇されるとする当時解析あり。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_HIGH_WITH_NUMERIC_RESET_MODE_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井までのゲーム数RESET / 再セット**。
- **内部モードRESELECT**。
- **内部状態RESELECT**。
- 必勝本の設定変更直接表、および期待値見える化・man-softの比較資料で一致。

### carryOverBehavior
- 据え置き時は設定変更を行わないため、前日の天井進捗・内部モード・内部状態を**CARRYOVER**する扱いを採用。
- 純電源OFF→ONの直接比較で天井・モード・状態が全て引継ぎと確認され、据え置き朝一の宵越しゲーム数利用と整合する。
- reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### powerCycleBehavior
- 設定変更なしの電源OFF→ONのみ:
  - 天井までのゲーム数: **CARRYOVER**。
  - 内部モード: **CARRYOVER**。
  - 内部状態: **CARRYOVER**。
  - 液晶ステージ: 当時資料では調査中のため `UNVERIFIED_AFTER_RESEARCH`。
- 必勝本と期待値見える化の直接比較で一致。

### gameCounterReset
- settingChange: **RESET**。
- carryOver: **CARRYOVER**。
- purePowerCycle: **CARRYOVER**。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更でモードを再抽選するため、その結果として最大規定G数は96 / 192 / 384 / 768 / 999Gのいずれかとなる。
- 「リセット=一律短縮天井」とは扱わない。

### modeAfterReset
- 設定変更時はモード再抽選。必勝本の公開振り分け:

| 設定 | 通常A | 通常B | 天国準備 | 天国 | 超天国 |
|---:|---:|---:|---:|---:|---:|
| 1 | 50.0% | 25.0% | 10.0% | 14.9% | 0.1% |
| 2 | 50.0% | 25.0% | 10.0% | 14.5% | 0.5% |
| 3 | 45.0% | 25.0% | 12.5% | 17.4% | 0.1% |
| 4 | 45.0% | 25.0% | 12.5% | 17.0% | 0.5% |
| 5 | 40.0% | 25.0% | 15.0% | 19.5% | 0.5% |
| 6 | 39.5% | 25.0% | 15.0% | 20.0% | 0.5% |

- 天国準備以上合算: 設定1=25.0%、2=25.0%、3=30.0%、4=30.0%、5=35.0%、6=35.5%。
- 期待値見える化の当時記事にも同一表あり。
- purePowerCycle / 据え置き: **CARRYOVER**。

### stateAfterReset
- 設定変更時: **RESELECT**。
- CZ抽選状態（通常/高確）の設定変更時公開値（man-soft）:
  - 設定1・3・5: 通常80.0% / 高確20.0%
  - 設定2・4・6: 通常70.0% / 高確30.0%
- purePowerCycle / 据え置き: **CARRYOVER**。
- 通常時の全状態移行テーブルは物差しDB対象外。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時はモード再抽選により**天国準備以上が25.0〜35.5%**。
- CZ抽選状態も再抽選され、設定1・3・5で20.0%、設定2・4・6で30.0%が高確スタート。
- 高モード選択時は最大規定ゲーム数が384G/192G/96Gとなるため、朝一の早い当選を狙う根拠になる。
- 固定のリセット専用天井短縮ではなく、モード再抽選恩恵として扱う。

### resetPenalties
- 設定変更により前日の天井進捗・内部モード・内部状態を失うため、深いハマりや有利状態の宵越し価値は消去される。
- その他の設定変更固有不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 期待値見える化の当時記事は**設定変更時ガックンあり / 電源OFF→ONなし**と整理。
- 同記事は朝一フェイク前兆について内部ゲーム数依存とする前作法則にも触れるが、荒神Ver.固有については「前作から変わっていなければ」と条件付きのため、確定契約へ昇格しない。
- ガックンは「一応可能」とされる実用判別要素だが、絶対確定判別とは扱わない。

### numericResetData
- normalA_maxGame: 999G
- normalB_maxGame: 768G
- tenkokuPreparation_maxGame: 384G
- tenkoku_maxGame: 192G
- superTenkoku_maxGame: 96G
- resetModeDistribution:
  - setting1: A50.0 / B25.0 / preparation10.0 / heaven14.9 / super0.1 (%)
  - setting2: A50.0 / B25.0 / preparation10.0 / heaven14.5 / super0.5 (%)
  - setting3: A45.0 / B25.0 / preparation12.5 / heaven17.4 / super0.1 (%)
  - setting4: A45.0 / B25.0 / preparation12.5 / heaven17.0 / super0.5 (%)
  - setting5: A40.0 / B25.0 / preparation15.0 / heaven19.5 / super0.5 (%)
  - setting6: A39.5 / B25.0 / preparation15.0 / heaven20.0 / super0.5 (%)
- resetTenkokuPreparationOrHigher: 25.0 / 25.0 / 30.0 / 30.0 / 35.0 / 35.5 (%)
- resetCzHighState: odd settings 20.0%; even settings 30.0%
- reelGakkun: settingChange YES / purePowerCycle NO in contemporary practical-analysis source

## conflicts
- HAZUSEの型式/検定情報は「パチスロゴッドイーターFF / 4S0913」。荒神Ver.のページでこの情報を掲示しているためcanonicalに採用するが、別系統の公的検定原票は今回取得できていない。identity confidenceは `ANALYSIS_HIGH_PERIOD_DB` とし、メーカー公式検定一次資料扱いにはしない。
- 期待値見える化の2015-12天井記事には天国準備384G・天国192Gを「実践値からの推測」とする段階の記事があるが、必勝本では後にモード別天井として96/192/384/768/999Gを解析値として掲載。canonicalは必勝本の解析値を採用し、初期推測記事は根拠の格を分離する。
- リセット後フェイク前兆法則は前作踏襲を仮定した記述であり、本機固有の確定解析として保存しない。

## missingFields
- purePowerCycle liquidCrystalStage exact behavior: `UNVERIFIED_AFTER_RESEARCH`
- settingChange liquidCrystalStage exact behavior: `UNVERIFIED_AFTER_RESEARCH`
- public manufacturer-first-party reset contract: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロ ゴッドイーター 荒神Ver.
   - https://hazuse.com/machine/pachislot/4S0913/
   - 導入開始日2015-11-16、山佐、型式名パチスロゴッドイーターFF、検定番号4S0913、AT基本仕様。
   - reliability: ANALYSIS_HIGH / PERIOD_DB
2. パチ＆スロ必勝本 — 天井&設定変更 [パチスロ ゴッドイーター 荒神Ver.]
   - https://p.hisshobon.jp/machine/2669/1/55565
   - 通常天井999G、モード別最大G数、設定変更時天井RESET・モード/状態再抽選、設定別リセットモード振り分け、電源OFF→ON時の天井/モード/状態引継ぎ。
   - reliability: ANALYSIS_HIGH_DIRECT_COMPARISON
3. 期待値見える化 — ゴッドイーター アラガミver 朝一リセット後の挙動・恩恵解析まとめ
   - https://slotjin.com/slot/godeater-aragami-reset/
   - 2015-11-25当時記事。設定変更/電源OFF→ON直接比較、同一リセットモード振り分け、ガックン、実戦朝一挙動。
   - reliability: ANALYSIS_HIGH_DIRECT_BEHAVIOR; empirical portions separated
4. 期待値見える化 — ゴッドイーター アラガミver 天井・ゾーン・やめどき解析
   - https://slotjin.com/zone/godeater-aragami/
   - 導入2015-11-16、機械割、AT初当たり、約30G/50枚、純増2.7枚/G、通常999G天井。
   - reliability: ANALYSIS_HIGH
5. man-soft — ゴッドイーター荒神(アラガミ)Ver. 解析攻略
   - https://smaslo.man-soft.com/slot-kaiseki/godeater-aragami.html
   - 導入日、約30G/50枚、設定別AT/機械割、999G天井、設定変更/電源ON-OFF直接比較、設定変更時CZ高確20/30%、AT50G+α・純増2.7枚/G。
   - reliability: ANALYSIS_HIGH_MULTI_FIELD
6. パチマガスロマガ — パチスロ ゴッドイーター 荒神Ver.
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/206/a.php
   - 2015年11月、純増約2.7枚/G、AT初期50G+α、ダブル7約33%、平均獲得約650枚。
   - reliability: ANALYSIS_HIGH_PERIOD_ARCHIVE
7. パチマガスロマガ — 小役確率/50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/206/c.php
   - 約30G/50枚（感応現象込み）。
   - reliability: ANALYSIS_HIGH_PERIOD_ARCHIVE
8. P-WORLD — パチスロ ゴッドイーター荒神Ver.
   - https://www.p-world.co.jp/machine/database/7856
   - 山佐、5号機AT、純増約2.7枚/G、初当たり50G or 100G+ストーリー12G、CZ10G+α。
   - reliability: INDUSTRY_DATABASE
9. pacnk — パチスロ ゴッドイーター荒神Ver. 設定判別ツール
   - https://pacnk.com/slot/tools/sh_godeateraragami.html
   - 設定別AT初当たり・PAYOUT、モード別最大規定G数。
   - reliability: ANALYSIS_RETROSPECTIVE_CORROBORATION

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: ANALYSIS_HIGH_PERIOD_DB
- inspectionNumber: ANALYSIS_HIGH_PERIOD_DB
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_DB
- resetGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeBehaviorAndDistribution: ANALYSIS_HIGH_DIRECT_NUMERIC
- resetStateBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetCzHighNumeric: ANALYSIS_HIGH_SECOND_SOURCE_NUMERIC
- purePowerCycle ceiling/mode/state: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetDetectionGakkun: ANALYSIS_SINGLE_DIRECT_PRACTICAL
