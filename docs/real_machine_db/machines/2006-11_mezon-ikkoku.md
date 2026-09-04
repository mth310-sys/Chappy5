# めぞん一刻

machineName: めぞん一刻
manufacturer: オリンピア
releaseDate: 2006-11-26予定
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: PARTIAL_CORE_RESET_QA_PARTIAL

## payoutRateBySetting

解析資料A（pacnk）:

| 設定 | 機械割 |
|---|---:|
| 1 | 95.96% |
| 2 | 98.48% |
| 3 | 101.02% |
| 4 | 103.55% |
| 5 | 106.78% |
| 6 | 108.80% |

5号機クロニクルでは94.5/97.7/100.0/102.4/105.4/107.4%と差があるためCONFLICT。平均化しない。

reliability: CONFLICT

## initialHitBySetting

### BIG合算
| 設定 | BIG合算 |
|---|---:|
| 1 | 1/291.3 |
| 2 | 1/273.1 |
| 3 | 1/257.0 |
| 4 | 1/245.5 |
| 5 | 1/232.4 |
| 6 | 1/227.6 |

### REG
| 設定 | REG |
|---|---:|
| 1 | 1/874 |
| 2 | 1/874 |
| 3 | 1/874 |
| 4 | 1/874 |
| 5 | 1/874 |
| 6 | 1/655 |

reliability: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH。

「めぞん一刻 2006 初代 50枚/1000円/ベース/コイン持ち」を変えて再探索したが、今回比較可能な通常時ベースを確定できず。

## netIncrease

RTの1G純増は今回、信頼できる比較値を確定できず。

## basicPayout

資料間で仕様表現に差があるためCONFLICT保持。

- HAZUSE当時解析: スーパーBIG（赤7）は348枚超払い出し終了・平均265枚、ノーマルBIG（白7）は254枚払い出し終了・平均200枚、REGは124枚払い出し終了・平均100枚。赤7後159G RT、白7後51G RT。
- 5号機クロニクル: BIG純増約260枚 + 50G RT、REG純増約104枚。
- 後年まとめ資料: スーパーBIG約265枚 + RT159G、ノーマルBIG約200枚 + RT51G、REG約100枚。

当時HAZUSEと後年まとめはSBB/NBB別仕様で整合する一方、5号機クロニクルの単一BIG+50G表記は差異があるため平均せずCONFLICT維持。

## modeSpecificMinimumData

- 当時業界記事で2006-10-30発表、2006-11-26納品開始予定。
- 「ドラマチックエピソード」「キャラクター増加システム」搭載。
- 5号機初期のボーナス+固定ゲーム数RT機。
- HAZUSE当時解析: 赤7後159G「一刻タイム」、白7後51G「五代タイム」。
- 通常ゲーム数天井、規定ゲーム数当選、長期ゲーム数モードは、当時HAZUSE・業界記事・設定判別DB・回顧資料および「天井/朝一/設定変更/据え置き」再検索で本機固有の搭載情報を確認できず。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。初代2006年機に限定し「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON」を当時解析・業界記事・後年DBまで再探索したが、設定変更時のRT状態、液晶キャラクター増加状態、出目等を直接説明する本機固有資料を確定できず。一般的な5号機挙動で補完しない。

carryOverBehavior: **NO_GAME_COUNT_OR_LONG_TERM_HIT_MODE_FEATURE_CONFIRMED; OTHER_STATE_UNVERIFIED**。通常ゲーム数天井/規定G数当選/長期天国モードは確認されないため、その種の宵越しゲーム数進捗は対象なし。キャラクター増加システムや表示状態、RT中の据え置き時処理は直接資料未確定。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時のRT残G、キャラクター増加状態、液晶/出目の扱いを本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_TO_CEILING_AFTER_RESEARCH**。当時解析で赤7後159G/白7後51Gの固定RTは確認できるが、通常時に蓄積して天井/当選へ至るゲーム数カウンタは確認されない。

ceilingAfterReset: **NOT_APPLICABLE; NO_STANDARD_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井も確認できず。

modeAfterReset: **NOT_APPLICABLE_TO_LONG_TERM_HIT_MODE_AFTER_RESEARCH**。通常時のゲーム数テーブル/天国等、朝一再振り分け対象となる長期当選モードは確認されない。

stateAfterReset: **UNVERIFIED_FOR_ACTIVE_RT_AND_DISPLAY_STATE**。赤7後159G/白7後51G RTの途中で設定変更・電源断した場合の残G/RT状態、およびキャラクター増加状態の扱いは直接資料未確定。

advantageousSectionReset: **NOT_APPLICABLE**（有利区間制度導入前の5号機）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の短縮天井、高確スタート、RT付与、朝一特定G数恩恵などは確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失のような主要なゲーム数不利は、そもそも通常ゲーム数天井が確認されないため該当情報なし。RT/表示状態の設定変更時処理は未確認のため不利と断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、キャラクター表示等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- standardRTAfterRed7: **159G**
- standardRTAfterWhite7: **51G**
- standardGameCountCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NOT_APPLICABLE_TO_LONG_TERM_HIT_MODE_AFTER_RESEARCH**
- morningHitProbability: **NONE_CONFIRMED_AFTER_RESEARCH**
- gameCounterOnSettingChange: **NOT_APPLICABLE_TO_STANDARD_CEILING_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## sources

取得日: 2026-09-04（resetBehavior QA・初代仕様再監査）

1. P-WORLD / グリーンべると — 新演出搭載のパチスロ機『めぞん一刻』
   - https://news.p-world.co.jp/articles/1916/greenbelt
   - 2006-10-30発表、11-26納品予定、SBB/演出構造
   - reliability: INDUSTRY
2. HAZUSE — めぞん一刻 解析・機種情報（3版）
   - https://hazuse.com/i/data/maisonikkoku/top.htm
   - 2006年11月、赤7後159G RT、白7後51G RT、SBB/NBB/REG規定払い出しと平均獲得
   - reliability: CONTEMPORARY_ANALYSIS_HIGH
3. pacnk — めぞん一刻設定判別
   - https://pacnk.com/slot/tools/sh_mezonikkoku.html
   - 設定別BIG合算、REG、PAYOUT
   - reliability: RETROSPECTIVE_DATABASE
4. 5号機クロニクル 平和＆オリンピア
   - https://5goki.com/heiwa-olympia
   - 2006年11月、ボーナス/RT、機械割
   - reliability: ANALYSIS_SINGLE
5. めぞん一刻シリーズ機械割回顧
   - https://www.marimo0925.net/pachislot-kikaiwariranking-mezonikkoku-ban/
   - 別機械割表、SBB/NBB/REG獲得・RT表記
   - reliability: RETROSPECTIVE_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース
- RT純増
- SBB/NBBそれぞれの設定別確率の確証
- settingChangeBehavior detail
- carryOverBehavior for active RT/display state
- powerCycleBehavior
- resetDetection

## conflicts

- 設定別機械割が資料間で大きく異なる。
- BIG/RT仕様: HAZUSE当時解析と後年まとめはSBB約265枚+159G / NBB約200枚+51Gで整合する一方、5号機クロニクルはBIG約260枚+50Gと単純化した別表記。平均化しない。
