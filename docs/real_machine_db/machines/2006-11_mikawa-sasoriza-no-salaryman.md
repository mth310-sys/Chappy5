# 美川〜さそり座のサラリーマン〜

machineName: 美川〜さそり座のサラリーマン〜
manufacturer: オーイズミネオ / オーイズミ販売
releaseDate: 2006-11
generation: 5号機初期
systemType: ボーナス + 完走型RT
resetQaStatus: PARTIAL_RESET_QA

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 94.9% |
| 2 | 98.1% |
| 3 | 100.7% |
| 4 | 102.2% |
| 5 | 104.2% |
| 6 | 107.3% |

pacnkと5号機クロニクルで一致。
reliability: ANALYSIS_HIGH

## initialHitBySetting

今回、設定別で信頼できる形まで取れたのはREG。

| 設定 | REG |
|---|---:|
| 1 | 1/910 |
| 2 | 1/809 |
| 3 | 1/809 |
| 4 | 1/595 |
| 5 | 1/762 |
| 6 | 1/468 |

BIG/MIDの設定別確率は、パチマガスロマガに設定差解析が存在することまでは確認したが、今回の検索取得では全設定表を確定できずUNVERIFIED。

## baseGamesPer50

パチマガスロマガの通常時小役解析から1000円あたりプレイ数を直接回収。

| 設定 | 1000円あたりプレイ数 |
|---|---:|
| 1 | 32.98P |
| 2 | 33.36P |
| 3 | 33.59P |
| 4 | 33.75P |
| 5 | 34.47P |
| 6 | 35.23P |

5号機メダル機の1000円=50枚条件での掲載値。小役確率からの逆算ではなく、資料掲載の直接値を採用。
reliability: ANALYSIS_HIGH_SINGLE_DIRECT

## netIncrease

完走型RT:
- パチマガスロマガ: +0.76枚/G
- 佐々木真回顧: 約+0.6枚/G
- Pachinko Vista: 約+0.6〜0.7枚/G

CONFLICT / definition-rounding difference candidate。+0.76枚/Gと約+0.6〜0.7枚/Gを平均化しない。

## basicPayout

パチマガスロマガ:
- BIG: 351枚超払い出し終了、純増約240枚 + RT100G
- MB/MID: 252枚超払い出し終了、純増約174枚 + RT50G
- REG: 144枚超払い出し終了、純増約102枚

reliability: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機/5ライン/3枚掛け専用
- BIG後100G、MID後50Gの完走型RT
- RTはボーナス成立では終了せず、入賞で終了
- RT終盤に告知区間を持つ
- 通常時はボーナス主体で、公開資料上、規定ゲーム数当選・ゲーム数天井・長期モード管理は確認できない

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名表記揺れと「設定変更 / リセット / 朝一 / 据え置き / 天井 / RT」を組み替え、当時解析・古いDB・回顧資料を再探索したが、本機固有の設定変更時RT残G・演出状態・内部フラグ処理を直接確定できず。一般的な5号機則から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のRT残G・演出状態について本機固有の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時のRT残G・液晶/演出状態を直接確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。基本システムはBIG/MB/REGとボーナス後固定100G/50G完走型RT。複数資料・天井系DBを再探索したが、通常時の規定ゲーム数当選・ゲーム数天井を確認できない。したがって「天井ゲーム数のCLEAR/RETAIN」という比較項目自体を非該当とする。RT残Gの設定変更時処理は別項目でUNVERIFIED。

ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井・朝一専用ゲーム数天井も確認できず。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED_AFTER_RESEARCH**。通常時の規定G数モード/天国モード等は確認できない。演出モードやRT中状態の設定変更時処理を意味するものではなく、それらはUNVERIFIED。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。RT中または演出状態の設定変更時処理を本機固有資料で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット専用短縮天井、朝一専用RT、設定変更時のみの初当たり優遇、朝一特定G以内当選率等の公開値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。通常ゲーム数天井は非搭載確認。RT残G消失等の設定変更ペナルティは直接根拠がなく断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶表示、RT挙動等による設定変更/据え置き判別を本機固有資料で確定できず。pacnkの「設定示唆なし」は通常時数値判別の評価であり、変更判別情報とは混同しない。

numericResetData:
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**
- BIG後RT: **100G**
- MID/MB後RT: **50G**
- RT純増: **+0.76枚/G（当時解析） / 約+0.6〜0.7枚/G（別資料） CONFLICT/丸め定義差候補**
- 設定変更時RT残G: **UNVERIFIED_AFTER_RESEARCH**
- 据え置き時RT残G: **UNVERIFIED_AFTER_RESEARCH**
- 電源OFF→ON時RT残G: **UNVERIFIED_AFTER_RESEARCH**
- リセット専用短縮天井: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_BY_SYSTEM_DATA; GAME_COUNT_CEILING_NON_APPLICABLE_CONFIRMED; SETTING_CHANGE/CARRYOVER/POWER_CYCLE/RT_STATE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: 2026-08-31 / resetBehavior遡及QA・base再探索: 2026-09-04

1. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/01/a.php
   - ボーナス種、獲得枚数、BIG後100G/MB後50G RT
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — RTについて
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/01/h-z1.php
   - 完走型RT、+0.76枚/G
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役出現確率・通常時
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/01/c.php
   - 1000円あたりプレイ数 設定1 32.98P〜設定6 35.23P
   - reliability: ANALYSIS_HIGH
4. pacnk — 美川さそり座のサラリーマン設定判別
   - https://pacnk.com/slot/tools/sh_mikawasasorizanosarariman.html
   - 設定別REG・PAYOUT、2006年11月、設定示唆なし
   - reliability: ANALYSIS_SINGLE
5. 5号機クロニクル オーイズミ
   - https://5goki.com/oizumi
   - 2006年11月、設定別機械割
   - reliability: ANALYSIS_SINGLE
6. パチ7 / 佐々木真 回顧
   - https://pachiseven.jp/articles/detail/18117
   - 2006年11月、ボーナス主体+完走型RTの回顧
   - reliability: ANALYSIS_HIGH
7. 悠遊道 / 佐々木真「美川さそり座のサラリーマン」
   - https://www.pachinko-road.com/column/22968/
   - BIG約240枚+RT100G等の回顧照合
   - reliability: ANALYSIS_HIGH_RETROSPECTIVE
8. Pachinko Vista「美川 さそり座のサラリーマン」
   - https://www.pachinkovista.com/pfactory/model.php?dsp=1&gc=0&km=2&nid=016015
   - BIG後100G/MIDDLE後50G RT、RT約0.6〜0.7枚/G、ボーナス主体構造
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定別BIG確率
- 設定別MID/MB確率
- settingChangeBehavior details
- carryOverBehavior details
- powerCycleBehavior details
- setting-change treatment of remaining RT games / state
- resetDetection

## conflicts

- RT純増: +0.76枚/G（パチマガスロマガ） vs 約+0.6枚/G（後年回顧） / 約+0.6〜0.7枚/G（Pachinko Vista）。平均化しない。

## resetQaResearchNote

2026-09-04に「美川 / 美川さそり座のサラリーマン / さそり座のサラリーマン / オーイズミ / オーイズミネオ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT / ガックン」を組み替えて再探索。パチマガスロマガ、pacnk、5号機クロニクル、Pachinko Vista、当時/後年回顧資料を横断。通常ゲーム数天井やリセット専用数値は確認できず、ボーナス後固定RT構造は複数資料で一致。一方、設定変更・据え置き・単純電源断時のRT残G処理や変更判別は直接資料がないため推測補完していない。
