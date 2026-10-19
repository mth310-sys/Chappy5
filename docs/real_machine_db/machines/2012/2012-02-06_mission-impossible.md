# パチスロ ミッションインポッシブル

machineName: パチスロ ミッションインポッシブル
manufacturer: D-light / Daiichiグループ
releaseDate: 2012-02-06
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: パチビーが2012-02-06導入と掲載。2011-12-22の発表記事では2012年2月リリース予定。
generation: 5号機
systemType: A+ART
recordStatus: COMPLETE_CORE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.7% |
| 3 | 99.1% |
| 4 | 103.7% |
| 5 | 108.7% |
| 6 | 116.0% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

パチマガスロマガと5号機クロニクルで全設定一致。

## initialHitBySetting

| 設定 | BIG合算 | REG | ボーナス合算 | ART初当たり | ボーナス+ART |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/425.56 | 1/799.22 | 1/204.80 | 1/453.0 | 1/172.2 |
| 2 | 1/414.78 | 1/780.19 | 1/201.03 | 1/401.3 | 1/161.7 |
| 3 | 1/404.54 | 1/762.05 | 1/197.40 | 1/424.7 | 1/162.9 |
| 4 | 1/385.51 | 1/712.35 | 1/189.41 | 1/353.6 | 1/146.5 |
| 5 | 1/372.36 | 1/668.73 | 1/183.06 | 1/366.9 | 1/144.8 |
| 6 | 1/360.09 | 1/630.15 | 1/177.12 | 1/291.9 | 1/128.4 |

reliability: ANALYSIS_HIGH

## baseGamesPer50

| 設定 | 1000円あたりG数 |
|---:|---:|
| 1 | 34.4G |
| 2 | 34.4G |
| 3 | 34.4G |
| 4 | 34.5G |
| 5 | 34.6G |
| 6 | 34.7G |

reliability: ANALYSIS_HIGH

## netIncrease

- ART「ジャックナイフラッシュ」: 約+1.4枚/G

## basicPayout

- BIG: 約206枚
- REG: 約48枚
- ART「ジャックナイフラッシュ」: 1セット40G、約+1.4枚/G

## modeSpecificMinimumData

- 通常時からARTへは「スコープモード」「ミッションインポッシブル」の2系統CZを経由可能。
- ARTはゲーム数上乗せ+セットストック型。
- ボーナス間1340G消化以降にBIG当選で最低2セット、REG当選で最低3セットのARTへ突入する天井救済を確認。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 通常天井救済: ボーナス間1340G消化以降、BIG当選でART最低2セット、REG当選でART最低3セット。
- 設定変更時の1340GカウンタCLEAR/RETAIN: UNVERIFIED_AFTER_RESEARCH。
- リセット専用短縮天井・専用モード・朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- 「パチスロ ミッションインポッシブル / ミッションインポッシブル / D-light / Daiichi」を設定変更・リセット・朝一・据え置き・宵越し・電源OFF ON・天井・1340G・ガックンと組み替えて再探索。
- パチビー、P-WORLD、パチマガスロマガ、5号機クロニクル、後年設定判別DBを横断したが、本機固有の設定変更時天井処理、据え置き、単純電源OFF→ON、モード/状態再抽選、ガックン等の直接根拠は確定できなかった。
- 有利区間は5号機のため非該当。

resetQaReliability: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH

## sources

取得日: 2026-09-05

1. パチビー — https://www.pachibee.jp/machines/about/211120010
   - 導入日2012-02-06、ART40G・約1.4枚/G、BIG約206枚、REG約48枚、ボーナス間1340G天井救済を確認。
   - reliability: ANALYSIS_HIGH
2. P-WORLD — https://www.p-world.co.jp/machine/database/6607
   - D-light、5号機ART、基本獲得枚数、ART仕様、1340G天井救済を照合。
   - reliability: DATABASE_HIGH
3. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daiichi_slot/13/h.php
   - 設定別BIG/REG/ボーナス/ART初当たり/ボーナス+ART、PAYOUTを確認。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daiichi_slot/13/c.php
   - 1000円あたり34.4～34.7Gを確認。
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — https://5goki.com/daiichi
   - 2012年2月導入、機械割96.5～116.0%を照合。
   - reliability: RETROSPECTIVE_DATABASE
6. スポニチ — https://www.sponichi.co.jp/entertainment/news/2011/12/22/kiji/K20111222002294210.html
   - 2011-12-22発表、2012年2月リリース予定を確認。
   - reliability: INDUSTRY_NEWS

## missingFields

- 設定変更時のボーナス間1340G天井カウンタCLEAR/RETAIN
- 据え置き時の天井進捗・内部状態引継ぎ
- 単純電源OFF→ON時の挙動
- 設定変更時のモード/状態振り分け
- ガックン等の変更判別

## conflicts

- NONE_CONFIRMED