# ペガサスNEO

machineName: ペガサスNEO
manufacturer: エマ
releaseDate: 2011-07-11
releaseDateStatus: ANALYSIS_HIGH_EXACT_DATE; K-Naviが2011-07-11ホール導入開始。グリーンべるとは2011-06-23記事で7月中旬納品予定、P-WORLD/5号機クロニクルは2011年7月表記で整合。
generation: 5号機
systemType: ノーマルAタイプ / 完全告知・演出モード選択
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED
resetQaStatus: PARTIAL_RESET_QA
formalModelName: ペガサスNEO
certificationNumber: 1S0456

## chronologyNote

- 最新mainのrecordCount 590 / chronologicalFrontier 2011-07-04から継続。
- LATEST_HANDOFF指定に従い2011-07-04同日群と2011-07-05〜07-10境界を再監査。外部検索でこの期間に本線へ挿入すべき具体日付き未登録5号機を確定できず、次の具体日アンカーである2011-07-11「ペガサスNEO」へ進行。
- repo内検索で「ペガサスNEO」未登録を確認し591件目として追加。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 100.5% |
| 4 | 103.0% |
| 5 | 107.0% |
| 6 | 111.0% |

K-Navi、グリーンべると（メーカー発表値の設定1/6）、pacnk、5号機クロニクルで一致。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
| 設定 | 確率 |
|---|---:|
| 1 | 1/264.3 |
| 2 | 1/260.1 |
| 3 | 1/258.0 |
| 4 | 1/246.4 |
| 5 | 1/244.5 |
| 6 | 1/230.8 |

### REG
| 設定 | 確率 |
|---|---:|
| 1 | 1/528.5 |
| 2 | 1/512.0 |
| 3 | 1/394.8 |
| 4 | 1/368.2 |
| 5 | 1/303.4 |
| 6 | 1/321.3 |

### ボーナス合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/176.2 |
| 2 | 1/172.5 |
| 3 | 1/156.0 |
| 4 | 1/147.6 |
| 5 | 1/135.4 |
| 6 | 1/134.3 |

K-Navi、グリーンべると、pacnkで整合。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「ペガサスNEO / エマ / 50枚 / 1000円 / 1k / ベース / コイン持ち / 通常時ゲーム数」を組み替え、K-Navi、P-WORLD、グリーンべると、5号機クロニクル、設定判別DB等を横断したが、比較可能な本機固有の直接値を確定できず。小役確率から逆算しない。

## netIncrease

**NOT_APPLICABLE_NORMAL_TYPE**。AT/ART/RTによる継続純増を持つ機種としては確認されない。

## basicPayout

- BIG: **最大311枚**
- REG: **最大111枚**
- K-Navi上の払い出し終了条件: BIG 345枚以上払い出し / REG 105枚以上払い出し

グリーンべるとのメーカー発表値、P-WORLD、K-Naviで一致。
confidence: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- シンプルなノーマルAタイプ。
- 完全告知モードと演出モードを選択可能。
- P-WORLDでは非BET状態で3停止ボタンを約3秒同時長押しすることで演出モード切替と説明。
- AT/ART/CZ、ゲーム数管理型初当たり、通常ゲーム数天井は公開資料上確認できない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 出目 / ランプ」を組み替えて再探索したが、本機固有の設定変更時の低レベル初期状態・演出モード・出目処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の演出モードや低レベル状態の保持を本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の演出モード、出目、ランプ状態を直接確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。複数資料でノーマルAタイプとして確認し、通常時の規定ゲーム数当選・ゲーム数天井を確認できないため、天井進捗CLEAR/RETAINの比較対象なし。

ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。通常天井および設定変更専用短縮天井の公開値を確認できず。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED_AFTER_RESEARCH**。ゲーム数/天国等の長期内部モードは確認できない。ユーザー選択の演出モードの電源・設定変更時保持とは別で、後者はUNVERIFIED。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の低レベル内部状態・演出モード処理を本機固有資料で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用ボーナス優遇、設定変更後特定G以内当選率、短縮天井等の公開値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。ゲーム数天井は非該当。その他設定変更固有の不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、PEGASUSランプ、演出モード状態等による設定変更/据え置き判別を本機固有資料で確定できず。pacnkの設定示唆なしは通常時設定判別評価でありリセット判別とは混同しない。

numericResetData:
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED; LOW_LEVEL_STATE UNVERIFIED**
- 演出モードの設定変更/電源断時保持: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_BY_SYSTEM_DATA; NO_GAME_COUNT_CEILING/LONG_TERM_MODE CONFIRMED; SETTING_CHANGE/CARRYOVER/POWER_CYCLE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 重大な性能数値CONFLICTなし。
- K-Navi exact date 2011-07-11とグリーンべると「7月中旬納品」は定義上整合。P-WORLD/5号機クロニクルは月表記。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior details: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- 演出モードの設定変更/電源断時保持: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

2026-09-04取得。「ペガサスNEO / ペガサス NEO / エマ」と「導入日 / 機械割 / BIG / REG / 50枚 / 1000円 / ベース / 天井 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 出目 / ランプ / 型式 / 検定」を組み替え、K-Navi、P-WORLD、グリーンべると、5号機クロニクル、pacnk、旧一覧資料を横断。性能コアは複数系統で高一致。baseと低レベルresetBehaviorは直接資料不足のため推測補完しない。

## sources — 取得日 2026-09-04

1. K-Navi「ペガサスNEO」
   - https://p-kn.com/slot/1457/
   - 2011-07-11ホール導入開始、設定別BIG/REG/合算/機械割、BIG払い出し条件、ノーマルAタイプ。
   - reliability: ANALYSIS_HIGH
2. グリーンべると / P-WORLD業界ニュース「エマから『ペガサスNEO』登場」
   - https://web-greenbelt.jp/00002120/
   - https://news.p-world.co.jp/articles/4751/greenbelt
   - 2011-06-23掲載、7月中旬納品予定、メーカー発表値のBIG/REG/合算/機械割両端、BIG311枚/REG111枚。
   - reliability: INDUSTRY
3. P-WORLD「ペガサスNEO」
   - https://www.p-world.co.jp/machine/database/6424
   - 5号機ノーマル、BIG最大311枚/REG最大111枚、型式名、検定番号1S0456、演出モード構造。
   - reliability: ANALYSIS_HIGH_DATABASE
4. 5号機クロニクル「エマ 5号機全機種一覧」
   - https://5goki.com/ema
   - 2011/7、設定1〜6機械割を照合。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
5. pacnk「ペガサスNEO 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_pegasusneo.html
   - 設定別BIG/REG/PAYOUT再照合、2011年7月導入。
   - reliability: ANALYSIS_SINGLE
