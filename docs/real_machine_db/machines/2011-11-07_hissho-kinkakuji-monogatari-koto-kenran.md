# 必勝金閣寺物語～古都絢爛～

machineName: 必勝金閣寺物語～古都絢爛～
aliases: 必勝金閣寺物語 / 金閣寺物語 / 必勝金閣寺物語 古都絢爛
manufacturer: 高砂電器産業 / TAKASAGO
formalModelName: キンカクジモノガタリ
approvalNumber: 1S0722
releaseDate: 2011-11-07
releaseDateStatus: CONFIRMED_NATIONWIDE_OR_DELIVERY_START

generation: 5号機
systemType: ボーナス+ART / ST型継続ART / 無限ART併用
coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetQaStatus: COMPLETE_RESET_CORE_WITH_CARRYOVER_POWER_CYCLE_AND_DIRECT_DETECTION_UNVERIFIED

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「押忍！番長2」を確認して開始。
- 開始時正本は recordCount 614 / chronologicalFrontier 2011-10-24。
- LATEST_HANDOFF指定の2011-10-25〜2011-11-06境界を再監査し、先行して処理すべき強い未登録候補を確認できなかったため、次の強いアンカー2011-11-07同日群へ進行。
- repo code searchで機種名未検出、想定実パス `docs/real_machine_db/machines/2011-11-07_hissho-kinkakuji-monogatari-koto-kenran.md` を直接fetchして404を確認し、未登録と判断。
- K-Naviはホール導入開始2011-11-07。グリーンべるとは納品11月7日開始と掲載。パチ＆スロ必勝本も2011/11/7導入。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.9% |
| 2 | 98.4% |
| 3 | 101.5% |
| 4 | 104.7% |
| 5 | 108.7% |
| 6 | 113.2% |

- K-Naviとパチ＆スロ必勝本で一致する系列を主値として採用。
- HAZUSEは96 / 98 / 102 / 105 / 109 / 109%を掲載し、特に設定6が113.2%系列と大きく競合するため平均せずCONFLICT保持。
confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_CONFLICT

## initialHitBySetting

### ボーナス合算 / ART初当たり

| 設定 | ボーナス合算 | ART初当たり |
|---|---:|---:|
| 1 | 1/99.75 | 約1/706 |
| 2 | 1/99.30 | 約1/669 |
| 3 | 1/98.85 | 約1/616 |
| 4 | 1/98.40 | 約1/559 |
| 5 | 1/97.96 | 約1/497 |
| 6 | 1/97.52 | 約1/443 |

### ボーナス内訳

| 設定 | 金七 | 紅七 | 九山八海 |
|---|---:|---:|---:|
| 1 | 1/1456.36 | 1/225.21 | 1/204.16 |
| 2 | 1/1365.33 | 1/220.66 | 1/208.05 |
| 3 | 1/1285.02 | 1/216.29 | 1/212.09 |
| 4 | 1/1213.63 | 1/212.09 | 1/216.29 |
| 5 | 1/1149.75 | 1/208.05 | 1/220.66 |
| 6 | 1/1092.27 | 1/204.16 | 1/225.21 |

- K-Naviとパチ＆スロ必勝本で一致。グリーンべるとのボーナス合成1/99.7（設定1）〜1/97.5（設定6）とも丸め範囲で整合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **29.87G/1000円**。通常20円スロット50枚貸しに相当する掲載形式のため、本DB比較値として **約29.87G/50枚** を採用。
- パチマガスロマガ公式系アーカイブに直接掲載。
confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

- ART純増: **約+1.5枚/G**。
- K-Navi、グリーンべると、P-WORLD、パチマガスロマガ、必勝本で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- 金七ボーナス: **約48枚**。
- 紅七ボーナス: **約48枚**。
- 九山八海ボーナス: **約48枚**。
- いずれも8回入賞または8G消化で終了。
- グリーンべると、P-WORLD、パチマガスロマガ、HAZUSEで整合。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- 銀閣寺モード: **100G**、約+1.5枚/G。ART中にボーナスを引けば継続し、100G内ボーナス成立期待度は約67%。
- スーパー銀閣寺モード: **150G**、約+1.5枚/G。150G内ボーナス成立期待度は約80%。
- 金閣寺モード: **次回ボーナスまで継続する無限ART**。天井以外の通常契機では金七後に複数セット性能を持ち、終了後は銀閣寺モードへ。
- 通常ゲーム天井: **通常状態777G消化で金閣寺モード1セット獲得**。
- ARTスルー回数天井: ボーナス後ART非当選回数に応じ抽選し、**20回目でART当選確定**。設定別の途中当選率は公開されているが、実機完全再現不要のため朝一/リセット比較に必要な範囲のみ保持。

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_GAME_COUNT_RESET / LOW_PROBABILITY_MODE_START / RT_STATE_RESET / SPRING_DAY_STAGE_START_CONFIRMED**。パチ＆スロ必勝本が設定変更時の4項目を直接掲載。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の777G天井進捗、ARTスルー回数、内部低確/高確状態、ARTストックをどの単位で保持するかについて、本機固有の十分な直接資料を確定できず。一般則から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみで777G進捗、ARTスルー回数、RT状態、内部状態、液晶季節/昼夜ステージがどう扱われるかを本機固有資料で確定できず。

gameCounterReset: **777G_CEILING_COUNTER_RESET_CONFIRMED / ART_SKIP_COUNT_RESET_UNVERIFIED_AFTER_RESEARCH**。設定変更で天井ゲーム数リセットは直接確認。ART非当選ボーナス回数20回天井については、旧天井狙い資料に「宵越し×」の記述はあるが、設定変更時の回数カウンタ処理を高信頼資料で直接確認できないため分離してUNVERIFIED。

ceilingAfterReset: **777G / NO_RESET_ONLY_SHORTENING_CONFIRMED**。設定変更後も通常天井自体は777Gで、設定変更専用の短縮天井は確認されない。

modeAfterReset: **LOW_PROBABILITY_MODE_START_CONFIRMED**。設定変更後は低確モードスタート。

stateAfterReset: **LOW_PROBABILITY_START_AND_RT_RESET_CONFIRMED**。内部低確スタート、RT状態リセットを直接確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AS_DEDICATED_ADVANTAGE**。設定変更専用の短縮天井・朝一専用優遇率・専用高確移行など、客側の明確な朝一恩恵は確認できず。

resetPenalties: **PREVIOUS_777G_PROGRESS_LOST / LOW_PROBABILITY_START_CONFIRMED**。設定変更で777G天井進捗が消え、低確スタートとなるため、前日ハマリ狙いには不利。ARTスルー回数進捗の消去は高信頼資料で未確定のため断定しない。

resetDetection: **SPRING_DAY_STAGE_AFTER_SETTING_CHANGE_REFERENCE / DIRECT_SPECIFICITY_UNVERIFIED_AFTER_RESEARCH**。設定変更後は春・昼ステージ開始が公開されているため観察材料。ただし単純電源OFF→ONでも同じ初期表示になるか不明で、設定変更専用の確定判別とは扱わない。ガックン・初期出目・ランプ等の直接判別は再探索しても確定できず。

numericResetData:
- 設定変更後777G天井ゲーム数: 0Gから再計数（天井777G）
- 設定変更後内部状態: 低確モードスタート
- 設定変更後RT状態: リセット
- 設定変更後液晶: 春・昼ステージ
- 設定変更専用短縮天井: NONE_CONFIRMED
- ARTスルー回数天井: 最大20回、設定変更時カウンタ処理はUNVERIFIED_AFTER_RESEARCH
- 朝一専用当選率/恩恵率: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン等直接判別数値: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_777G_RESET_LOW_MODE_RT_STAGE / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_ART_SKIP_COUNTER_AND_DIRECT_DETECTION

## conflicts

1. **機械割**
   - K-Navi / パチ＆スロ必勝本: 95.9 / 98.4 / 101.5 / 104.7 / 108.7 / 113.2%。
   - HAZUSE: 96 / 98 / 102 / 105 / 109 / 109%。
   - 設定1〜5は丸め差に近いが、設定6は113.2%対109%で大きく異なる。平均せず前者を主系列、後者をCONFLICT保持。
2. **ARTスルー天井の表現差**
   - P-WORLD/パチマガスロマガは最大20回ART非当選でART確定と整理。
   - 必勝本は5/10/15/20回など各回の当選率を掲載し、20回は75%という段階抽選表を掲載。途中抽選との合算で「最大20回」と整合する構造と解釈可能だが、定義差を明記して保持。

## missingFields

- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change handling of ART-skip-count ceiling: UNVERIFIED_AFTER_RESEARCH
- direct resetDetection（ガックン/初期出目/ランプ等）: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-05**

1. K-Navi — 必勝金閣寺物語～古都絢爛～
   - https://p-kn.com/slot/1501/
   - 導入日2011-11-07、設定別ボーナス、ART初当たり、機械割、ART純増/基本性能。
   - reliability: ANALYSIS_HIGH
2. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/1913/1/31624
   - 導入日、設定別ボーナス、ART初当たり、機械割、ART純増。
   - reliability: ANALYSIS_HIGH
3. パチ＆スロ必勝本 — 設定変更&天井情報
   - https://p.hisshobon.jp/machine/1913/1/31628
   - 設定変更で天井ゲーム数リセット、低確モードスタート、RT状態リセット、春・昼ステージ、777G天井、ARTスルー回数天井。
   - reliability: ANALYSIS_HIGH
4. グリーンべると — まるでST機!? ART中にボーナスを引き戻せ
   - https://web-greenbelt.jp/00002311/
   - 2011-09-07記事。納品11月7日開始、ボーナス合成、各ボーナス約48枚、ART100/150G、純増約+1.5枚/G、約67/80%。
   - reliability: INDUSTRY
5. パチマガスロマガ公式系アーカイブ — スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/02/a.php
   - ART約+1.5枚/G、100G/150G、777G天井、ART非当選20回天井、ボーナス約48枚。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ公式系アーカイブ — 小役確率/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/02/c.php
   - 1000円あたり29.87G。
   - reliability: ANALYSIS_HIGH
7. P-WORLD — 必勝金閣寺物語～古都絢爛～
   - https://www.p-world.co.jp/machine/database/6492
   - 約48枚ボーナス、ART約+1.5枚/G、777G/ART非当選20回天井、ART構造。
   - reliability: DATABASE
8. HAZUSE — 必勝金閣寺物語～古都絢爛～
   - https://hazuse.com/machine/pachislot/1S0722/
   - 型式キンカクジモノガタリ、検定番号1S0722、導入2011-11-07、ART基本構造、別機械割系列。
   - reliability: ANALYSIS_DATABASE
9. 天井ハイエナ生活 — 天井ハイエナ期待値リスト は行
   - https://macerate.seesaa.net/article/226312110.html
   - 当時系回顧資料として「宵越し×」表記を確認。ARTスルー回数の設定変更処理を確定するには不足のため補助資料扱い。
   - reliability: RETROSPECTIVE_LOW
