# 神たま～ARTやで!全員集合～

machineName: 神たま～ARTやで!全員集合～
manufacturer: SNKプレイモア
formalModelName: カミタマART
releaseDate: 2009-08-24（K-Naviホール導入開始 / パチ＆スロ必勝本導入開始予定）
generation: 5号機
systemType: ボーナス+ART / CZ経由ナビストック型ART / 周期CZ / 高確状態 / ボーナス間天井高確
coreStatus: COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT

## payoutRateBySetting

P-WORLD / pacnk掲載系列:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 99.5% |
| 3 | 101.6% |
| 4 | 104.2% |
| 5 | 107.2% |
| 6 | 109.0% |

パチ＆スロ必勝本のシミュレート値 / P_Style777掲載系列:

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.65% |
| 2 | 98.73% |
| 3 | 100.83% |
| 4 | 103.40% |
| 5 | 106.32% |
| 6 | 108.08% |

- 前者は市場掲載値、後者は必勝本が明記するシミュレート値で全設定に約0.6〜0.9pt差がある。
- 定義差を平均せず `CONFLICT_PAYOUT_MARKET_97_3_TO_109_0_VS_SIMULATED_96_65_TO_108_08` として保持する。

## initialHitBySetting

P-WORLD / K-Navi / 必勝本でボーナス合算が整合。

| 設定 | BIG | MID | REG | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/682.67 | 1/682.67 | 1/682.67 | 1/227.56 |
| 2 | 1/655.36 | 1/655.36 | 1/655.36 | 1/218.45 |
| 3 | 1/630.15 | 1/630.15 | 1/630.15 | 1/210.05 |
| 4 | 1/595.78 | 1/595.78 | 1/595.78 | 1/198.59 |
| 5 | 1/564.97 | 1/564.97 | 1/564.97 | 1/188.32 |
| 6 | 1/537.18 | 1/537.18 | 1/537.18 | 1/179.06 |

## baseGamesPer50

パチ＆スロ必勝本解析値（1000円あたり）:

| 設定 | 50枚あたりG数 |
|---:|---:|
| 1 | 35.64G |
| 2 | 36.11G |
| 3 | 36.59G |
| 4 | 37.09G |
| 5 | 37.60G |
| 6 | 38.13G |

confidence: OLD_ANALYSIS_HIGH_SINGLE_DIRECT_TABLE

## netIncrease

- ART「みこし祭」: 1セット30G、約+1.0枚/G。
- CZ「みこしチャンス」中に複合チェリー回避または共通チェリー入賞でARTへ。
- ナビストック保有時はART突入ナビが発生し突入期待度100%。
- ARTは30G消化またはボーナス成立で終了し、終了後は再びCZへ。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: 約252枚（359枚超払い出しで終了）
- MID: 約168枚（239枚超払い出しで終了）
- REG: 約84枚（119枚超払い出しで終了）

P-WORLD、K-Navi、P_Style777で同系統を確認。

## modeSpecificMinimumData

- 通常時に通常/高確状態があり、ボーナス成立時のナビ獲得性能が大きく変化する。
- ボーナス終了後、ART終了後、周期150G/450GでCZ「みこしチャンス」へ。
- ボーナス間999G到達で次回ボーナス成立まで高確に滞在する「天井高確」。出玉直撃天井ではない。
- 高確中の周期CZでは50%でART突入ナビが発生する解析値を確認。
- 実機完全再現用の全内部移行テーブルは物差し用途外として収集しない。

## resetBehavior — v0.7

settingChangeBehavior: PARTIAL_CONFIRMED。後年解析DB pacnkで、設定変更時はナビストックが消滅し、1/2で高確スタートと明記。設定変更時の周期CZカウンタ・999G天井高確カウンタのclear/retainは直接資料を確定できず、一般的挙動から補完しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のナビストック、周期150G/450G、999G天井高確までのゲーム数、高確状態の保持を本機固有の直接資料で確定できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のナビストック、高確、CZ周期、999G天井高確カウンタの扱いを本機固有資料で確定できず。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常ボーナス間999Gで天井高確に到達することは確定したが、設定変更時に999Gカウンタがclearされるかretainされるか直接記述を回収できず。

ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の短縮天井数値は確認できず。設定変更時1/2高確スタートは天井短縮とは分離する。

modeAfterReset: CONFIRMED_HIGH_PROBABILITY_50_PERCENT。設定変更時は1/2で高確スタート。残り1/2の具体状態名/振り分けは資料表現以上に補完しない。

stateAfterReset: PARTIAL_CONFIRMED_NAV_STOCK_CLEAR。ナビストックは設定変更で消滅。ART/CZ実消化中に設定変更された場合のリールRT状態・液晶復帰位置などはUNVERIFIED。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: CONFIRMED。設定変更時50%高確スタート。

resetPenalties: CONFIRMED。設定変更時ナビストック消滅。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶ステージ、CZ周期挙動等による設定変更/据え置き判別の本機固有確定資料を確認できず。

numericResetData:
  resetHighProbabilityStartRate: 50%
  resetNavStock: CLEAR
  normalCeilingHigh: bonusInterval999G_then_high_until_next_bonus
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  resetModeDistributionOtherThanHigh50: UNVERIFIED_AFTER_RESEARCH
  morningHitRate: UNVERIFIED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_WITH_SETTING_CHANGE_NAV_STOCK_CLEAR_AND_50_PERCENT_HIGH_START_CONFIRMED

resetBehaviorResearchNote:
- `神たま ARTやで 全員集合 / カミタマART / SNKプレイモア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 高確 / ナビストック / ガックン / 50枚 / 1000円` を組み替えて再探索。
- K-Navi、P-WORLD、パチ＆スロ必勝本、pacnk、P_Style777、後年シリーズ回顧を横断。
- 2011年「神たま2 ～あっぱれ超みこし祭～」や2008年初代「神たま」のリセット値を本機へ逆輸入しない。

## sources

取得日: 2026-09-03

1. K-Navi「神たま ～ARTやで!全員集合～」 — https://p-kn.com/slot/1016/ — 2009-08-24ホール導入開始、ボーナス合算、払い出し条件、ART/CZ概要、朝一/天井解析導線 — reliability: OLD_ANALYSIS_HIGH
2. P-WORLD「神たま～ARTやで!全員集合～」 — https://www.p-world.co.jp/machine/database/5624 — 型式カミタマART、検定9S0424、ボーナス確率、機械割97.3〜109.0%、獲得枚数、30G・約1.0枚/G ART — reliability: ANALYSIS_HIGH
3. パチ＆スロ必勝本「基本スペック」 — https://p.hisshobon.jp/machine/1431/1/21659 — 8/24導入開始予定、設定別ボーナス合算/各ボーナス、機械割シミュレート96.65〜108.08% — reliability: OLD_ANALYSIS_HIGH
4. パチ＆スロ必勝本「小役確率」 — https://p.hisshobon.jp/machine/1431/1/21660 — 設定別1000円あたり35.64〜38.13G、小役解析 — reliability: OLD_ANALYSIS_HIGH
5. パチ＆スロ必勝本「CZ&ART詳細」 — https://p.hisshobon.jp/machine/1431/1/21516 — CZ周期150/450G、ART30G・約+1.0枚/G、終了条件 — reliability: OLD_ANALYSIS_HIGH
6. パチ＆スロ必勝本「ナビ獲得抽選」 — https://p.hisshobon.jp/machine/1431/1/21664 — 高確中ナビ抽選、高確周期CZ時50% ART突入ナビ — reliability: OLD_ANALYSIS_HIGH
7. pacnk「神たまARTやで!全員集合 設定判別・天井」 — https://pacnk.com/slot/tools/sh_kamitamaart.html — 市場機械割系列、999G天井高確、設定変更時ナビストック消滅・1/2高確スタート — reliability: RETROSPECTIVE_ANALYSIS
8. P_Style777「神たま ARTやで！全員集合」 — https://ps777.net/data/snkplaymore/kamitama_art.htm — 型式カミタマART、2009年8月、ボーナス/シミュレート機械割系列、獲得枚数 — reliability: OLD_ANALYSIS

## missingFields

- 設定変更時の999G天井高確カウンタclear/retain
- 設定変更時の周期CZカウンタclear/retain
- 据え置き時のナビストック/高確/CZ周期/999Gカウンタ保持
- 電源OFF→ON時の同状態保持
- 設定変更時50%高確以外の詳細初期状態振り分け
- ガックン/初期出目/液晶等による変更判別
- 朝一専用の初当たり率

## conflicts

- 機械割はP-WORLD/pacnkの市場掲載97.3〜109.0%と、必勝本/P_Style777のシミュレート96.65〜108.08%が全設定で差異。定義差として両系列を保持し平均しない。
