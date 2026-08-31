# 学習パチスロ算数

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: 学習パチスロ算数
manufacturer: 遊人
typeName: 学習パチスロ1
releaseDate: 2007-08-06
generation: 5号機
systemType: ボーナス主体/ノーマル（RT搭載記述は資料競合）

## releaseDate evidence

- ALL7.jpの2007年8月導入予定一覧で遊人「学習パチスロ算数」を2007-08-06導入予定と掲載。
- P-WORLDは導入開始を2007年08月と掲載。
- 2007-07-10当時業界記事で7月5日のプレス発表会、学習パチスロ「算数」発表を確認。

時系列本線は具体日を持つALL7の2007-08-06を採用。月単位はP-WORLD/後年一覧で再照合。

信頼度: INDUSTRY_SUPPORT / OLD_DB

## payoutRateBySetting

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.38% |
| 2 | 99.00% |
| 3 | 101.39% |
| 4 | 103.63% |
| 5 | 106.07% |
| 6 | 108.55% |

### パチ＆スロ必勝本 シミュレート値

| 設定 | 機械割 |
|---|---:|
| 1 | 96.93% |
| 2 | 98.78% |
| 3 | 101.36% |
| 4 | 103.72% |
| 5 | 106.25% |
| 6 | 108.86% |

### P-WORLD / 5号機クロニクル掲載値

| 設定 | 出玉率 |
|---|---:|
| 1 | 95.0% |
| 2 | 97.0% |
| 3 | 99.9% |
| 4 | 102.0% |
| 5 | 104.0% |
| 6 | 106.0% |

同一値ではなく、算出条件/掲載定義差も明示されないため平均せずCONFLICTとして全系列を保持。

信頼度: CONFLICT

## initialHitBySetting

### BIG

| 設定 | 確率 |
|---|---:|
| 1 | 1/648.87 |
| 2 | 1/630.15 |
| 3 | 1/601.25 |
| 4 | 1/579.96 |
| 5 | 1/555.39 |
| 6 | 1/537.18 |

### CB

| 設定 | 確率 |
|---|---:|
| 1 | 1/277.69 |
| 2 | 1/269.70 |
| 3 | 1/259.04 |
| 4 | 1/249.19 |
| 5 | 1/240.06 |
| 6 | 1/229.95 |

### ボーナス合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/194.47 |
| 2 | 1/188.86 |
| 3 | 1/181.04 |
| 4 | 1/174.30 |
| 5 | 1/167.61 |
| 6 | 1/161.02 |

パチマガスロマガ精密値。P-WORLDの合算1/195→1/161とも丸め範囲で一致。

信頼度: ANALYSIS_HIGH / OLD_DB_SUPPORT

## baseGamesPer50

パチマガスロマガ掲載1000円あたりゲーム数:

| 設定 | 1000円あたり |
|---|---:|
| 1 | 37.07G |
| 2 | 37.36G |
| 3 | 37.80G |
| 4 | 38.24G |
| 5 | 38.69G |
| 6 | 39.18G |

当時の50枚貸し前提表記としてbaseGamesPer50に使用。

信頼度: ANALYSIS_HIGH

## netIncrease

- P-WORLDは本機を「5号機、ノーマル」と分類。
- パチマガスロマガ基本システムも「ノーマル/同時成立あり」と記載し、RT純増値やRT性能を示していない。
- 後年の学習パチスロシリーズ整理記事には「ボーナス＋RT」とする記述があるが、RTゲーム数・突入契機・純増等の具体情報が伴わず、一次/当時解析系との独立照合が取れない。

したがって本DBでは通常性能をボーナス主体/ノーマルとして扱い、RT搭載記述はCONFLICTとして残す。RT純増値はUNVERIFIED（RT実装自体が未確定）。

## basicPayout

- BIG: 345枚超払い出し終了、実獲得目安約312枚。
- CB: 240枚超払い出し終了、パチマガスロマガは実獲得目安約230枚。
- 後年整理資料にはCB約221枚とする記述もあり、実獲得枚数は約230枚 / 約221枚でCONFLICT。

信頼度: ANALYSIS_HIGH / CONFLICT

## modeSpecificMinimumData

- ボーナスはBIG + CB。
- 通常時に算数問題を表示する学習演出を搭載するが、出玉性能に直接影響する内部抽選詳細は物差し用途外。
- パチマガスロマガは攻め時・ヤメ時を「特にナシ」としており、通常時ゲーム数天井を示していない。
- RT搭載を示す後年資料はあるが、当時高信頼資料で具体仕様を確定できないためCONFLICT/HOLD。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `学習パチスロ算数 / 学習パチスロ1 / 遊人 / 学習パチスロシリーズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / RT` を組み替え、P-WORLD、パチマガスロマガ、当時業界記事、旧DB、後年回顧資料を横断。
- 設定変更時に通常ゲーム数・モード・状態を再抽選する本機固有の高信頼公開情報は確定できずUNVERIFIED。

carryOverBehavior:
- 据え置き時の専用恩恵/不利、前日ゲーム数を利用する天井・モードの明示はNONE_CONFIRMED。
- 機種固有の状態引継ぎ情報はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで内部状態・ゲーム数がどう扱われるか、本機固有の公開資料を確定できずUNVERIFIED。

gameCounterReset:
- パチマガスロマガは攻め時・ヤメ時「特にナシ」。通常時ゲーム数天井はNONE_CONFIRMED。
- 設定変更/電源OFF→ON時に管理対象となる天井ゲーム数自体を確認できないため、リセット/引継ぎ数値はNONE_CONFIRMED。

ceilingAfterReset:
- 通常天井およびリセット時短縮天井はNONE_CONFIRMED。

modeAfterReset:
- 出玉に関わる通常モード管理、朝一専用モード、設定変更時専用モードはNONE_CONFIRMED。
- 液晶の学習/演出モードは出玉性能のモードとは分けて扱う。

stateAfterReset:
- 出玉に関わる内部高確/RT状態の設定変更時挙動は、RT実装自体の資料競合もありUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機・有利区間制度導入前）。

resetBenefits:
- 設定変更時専用の短縮天井、朝一ボーナス優遇、朝一RT等はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示変化、ゲーム数挙動などによる設定変更/据え置き判別は十分再探索したが高信頼で確定できずUNVERIFIED。

numericResetData:
- 朝一専用当選率/モード振り分け/短縮天井/リセット恩恵発生率: NONE_CONFIRMED
- 公開朝一数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. ALL7.jp — 2007年8月新台導入予定一覧
   - https://www.all7.jp/plans/index/2007/08/10
   - 学習パチスロ算数 / 遊人 / 導入予定2007-08-06
   - reliability: OLD_DB / INDUSTRY_SUPPORT
2. Pマンズ（プレイグラフ転載） — 脳のトレーニングができる5号機登場（2007-07-10）
   - https://p-mans.blogspot.com/2007/07/
   - 2007-07-05プレス発表会、遊人、学習パチスロ「算数」
   - reliability: INDUSTRY
3. P-WORLD — 学習パチスロ算数
   - https://www.p-world.co.jp/machine/database/4827
   - 型式名学習パチスロ1、導入2007年8月、合算、出玉率95.0〜106.0%、BB345枚/CB240枚払い出し終了、5号機ノーマル
   - reliability: OLD_DB / ANALYSIS_HIGH
4. パチマガスロマガ — 学習パチスロ算数 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yujin_slot/02/a.php
   - ノーマル/同時成立あり、BIG約312枚、CB約230枚
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 学習パチスロ算数 ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yujin_slot/02/h.php
   - 設定別BIG/CB/合算、シミュレートPAYOUT97.38〜108.55%
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 学習パチスロ算数 小役/1000円ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yujin_slot/02/c.php
   - 設定別1000円あたり37.07〜39.18G
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本 — 学習パチスロ算数 勝率&期待収支
   - https://p.hisshobon.jp/machine/932/1/15825
   - 7000G×10万日等価シミュレートの機械割96.93〜108.86%
   - reliability: ANALYSIS_HIGH
8. 5号機クロニクル — 遊人5号機全機種一覧
   - https://5goki.com/u-jin
   - 2007/8、機械割95.0〜106.0%
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE
9. 学習パチスロシリーズ整理記事
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-gakusyuu-ban/
   - 算数をボーナス+RT、BIG約312枚/CB約221枚と記載
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE

## missingFields

- 設定変更/据え置き/電源OFF→ON時の本機固有内部状態
- 本機固有ガックン/変更判別
- RT搭載有無の当時高信頼独立確認と、搭載する場合のRT突入契機・G数・純増

## conflicts

- 機械割: P-WORLD/5号機クロニクル 95.0〜106.0%、パチマガスロマガ 97.38〜108.55%、必勝本 96.93〜108.86%。平均せず全系列保持。
- systemType: P-WORLD「ノーマル」+パチマガスロマガ「ノーマル/同時成立あり」に対し、後年整理記事は「ボーナス＋RT」。具体RT仕様を独立確認できないため本線はボーナス主体/ノーマル、RT記述はCONFLICT。
- CB実獲得目安: パチマガスロマガ約230枚、後年整理資料約221枚。平均せず保持。
