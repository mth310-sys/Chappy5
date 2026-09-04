# BLACK LAGOON

machineName: BLACK LAGOON
manufacturer: スパイキー
releaseDate: 2012-02-06
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: K-Navi、HAZUSEが2012-02-06導入開始で一致。後年の実機シミュレーション発売記事も実機発売日を2012-02-06と記載。
generation: 5号機
systemType: A+ART
formalModelName: ブラックラグーンB
approvalNumber: 1S0867
recordStatus: COMPLETE_CORE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.6% |
| 3 | 100.3% |
| 4 | 104.9% |
| 5 | 109.7% |
| 6 | 114.5% |

reliability: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG合算 | REG合算 | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/399.6 | 1/728.1 | 1/258.0 | 1/686.2 |
| 2 | 1/394.7 | 1/668.7 | 1/248.2 | 1/631.4 |
| 3 | 1/385.5 | 1/642.5 | 1/240.9 | 1/649.5 |
| 4 | 1/368.1 | 1/606.8 | 1/229.1 | 1/540.3 |
| 5 | 1/356.1 | 1/564.9 | 1/218.4 | 1/497.6 |
| 6 | 1/341.3 | 1/546.1 | 1/210.0 | 1/386.0 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

K-Naviと当時系解析整理資料でボーナス確率は丸め差の範囲で一致。ART初当たりはCranky Sevenの解析値を主値として保持。

## baseGamesPer50

- 全設定共通: 約34.0G/50枚

reliability: ANALYSIS_HIGH

## netIncrease

- ART「LAGOON RUSH（ラグーンラッシュ）」: 約+1.5枚/G

## basicPayout

- SUPER BIG: 約202枚
- BIG: 約202枚
- REG: 約50枚
- ART「LAGOON RUSH」: 1セット50G+α、約+1.5枚/G

## modeSpecificMinimumData

- A+ART。通常時は低確・高確・超高確の内部状態を持つ。
- CZ「バレットバトル」経由などからARTへ突入。
- 通常天井: ボーナス後1480G消化で到達。
- 天井恩恵: 次回ボーナス成立まで継続するARTへ突入し、バレットバトル用バレット6個を獲得。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: 天井ゲーム数をクリアし、内部状態の振り分け抽選を実施。液晶ステージはランダムに変更。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: CLEAR_ON_SETTING_CHANGE
ceilingAfterReset: 通常1480G天井を設定変更時に0G相当から再計数。リセット専用の短縮天井は確認できず。
modeAfterReset: NO_SEPARATE_LONG_TERM_MODE_CONFIRMED_AFTER_RESEARCH
stateAfterReset: RESELECTED_ON_SETTING_CHANGE
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: 設定変更時に内部状態が再抽選される。液晶ステージもランダム変更。
resetPenalties: 前日のボーナス間天井進捗は設定変更で失われる。
resetDetection: 液晶ステージが設定変更時にランダム変更されることは確認。ただし据え置き/電源OFF→ON側の液晶処理やガックンを本機固有資料で確定できず、単独での変更判別可否はUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 通常天井: ボーナス後1480G。
- 設定変更時: 天井到達までのゲーム数をクリア。
- 設定変更時の内部状態振り分け率: 公開数値を今回確定できず。
- リセット専用短縮天井・朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- 「BLACK LAGOON / ブラックラグーン / ブラックラグーンB / スパイキー」を設定変更・リセット・朝一・据え置き・宵越し・電源OFF ON・天井・1480G・状態・モード・ガックンと組み替えて再探索。
- 本機固有の直接資料で、設定変更時の天井クリア、状態再抽選、液晶ステージランダム変更まで確認。
- 据え置き時の天井/状態保持、単純電源OFF→ON、ガックン等は後継機情報を流用せずUNVERIFIED_AFTER_RESEARCHとした。
- 有利区間は5号機のため非該当。

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE__PARTIAL_FOR_CARRYOVER_POWER_CYCLE

## sources

取得日: 2026-09-05

1. K-Navi — https://p-kn.com/slot/1552/
   - ホール導入開始2012-02-06、設定別BIG/REG/ボーナス確率を確認。
   - reliability: ANALYSIS_HIGH
2. HAZUSE — https://hazuse.com/machine/pachislot/1S0867/
   - 導入開始日2012-02-06、型式名ブラックラグーンB、検定番号1S0867を確認。
   - reliability: DATABASE_HIGH
3. Cranky Seven — https://crankyseven.com/blacklagoon-pc.htm
   - 機械割、ボーナス/ART初当たり、34.0G/50枚、獲得枚数、ART50G・約1.5枚/G、1480G天井、設定変更時の天井クリア・状態再抽選・液晶ステージランダム変更を確認。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — https://www.p-world.co.jp/machine/database/6585
   - A+ART構成、ART「ラグーンラッシュ」50G+α・約1.5枚/Gを照合。
   - reliability: DATABASE_HIGH
5. 4Gamer — https://www.4gamer.net/games/147/G014703/20120224022/
   - 実機BLACK LAGOONが2012-02-06にスパイキーから発売されたとの記載を確認。
   - reliability: INDUSTRY_NEWS

## missingFields

- 据え置き時のボーナス間1480G天井進捗・内部状態の保持/再抽選
- 単純電源OFF→ON時の天井・状態・液晶ステージ挙動
- 設定変更時の内部状態振り分け具体率
- ガックン等の変更判別

## conflicts

- BIG/REG確率には資料間で小数第1位程度の丸め差があるが、実質同値として主値を統一。重大な競合はNONE_CONFIRMED。