# 侍ジャイアンツ2

machineName: 侍ジャイアンツ2
manufacturer: ニューギン
formalModelName: 侍ジャイアンツ2X
releaseDate: 2009-08-16（グリーンべると納品予定） / 2009-08-17（当時業界資料発売） CONFLICT_DEFINITION_DELIVERY_VS_RELEASE
generation: 5号機
systemType: ボーナス+RT / 周期CZ / 次回ボーナスまでRT
coreStatus: PARTIAL_CORE_BASE_UNVERIFIED_PAYOUT_CONFLICT

## payoutRateBySetting

5号機クロニクル掲載値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 99.3% |
| 3 | 101.0% |
| 4 | 103.4% |
| 5 | 105.3% |
| 6 | 108.0% |

後年シリーズ回顧資料には 96.2 / 100.2 / 102.6 / 106.4 / 108.9 / 112.8% の別系列があり、設定2〜6で差が大きい。算出条件を解消できないため平均せず `CONFLICT_PAYOUT_SERIES` として保持する。

## initialHitBySetting

5号機クロニクル掲載値:

| 設定 | BIG | REG/MB | 合算 |
|---:|---:|---:|---:|
| 1 | 1/728.2 | 1/496.5 | 1/295.2 |
| 2 | 1/560.1 | 1/560.1 | 1/280.1 |
| 3 | 1/624.2 | 1/468.1 | 1/267.5 |
| 4 | 1/504.1 | 1/504.1 | 1/252.1 |
| 5 | 1/546.1 | 1/422.8 | 1/238.3 |
| 6 | 1/452.0 | 1/452.0 | 1/226.0 |

P-WORLDはBIG/MIDDLE/REGの搭載を確認できるが、現存検索結果だけでは上表のREG表記がMB単独かREG/MB系統合算かを完全には解消できないため、物差し用途ではボーナス合算値を主比較値とする。

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`
- 旧パチマガスロマガの本機専用「1000円あたりのゲーム数」は現存ページで「現在調査中」。
- `侍ジャイアンツ2 / 侍ジャイアンツ２ / 侍ジャイアンツ2X / ニューギン` と `50枚 / 1000円 / ベース / コイン持ち / 千円` を組み替えて再探索したが直接値を確定できず。

## netIncrease

- RT「サムライドリームマッチ」: 約+0.7枚/G。
- 次回ボーナスまで継続。
- グリーンべると、旧パチマガスロマガ、当時業界資料で一致。

## basicPayout

- BIG: 平均約308枚（440枚超払い出し終了）。
- MIDDLE BONUS / MB: 平均約85枚（120枚超払い出し終了）。
- P-WORLDはREGULAR BONUSも掲載し、8回入賞または12G終了とする。
- RT突入はBIG中赤7揃い、MBからの突入契機、周期CZ中の特殊リプレイ成立が主経路。

## modeSpecificMinimumData

- 通常時150G消化でCZへ移行する周期型。
- CZ中に特殊リプレイ（侍リプレイ）成立でRT「サムライドリームマッチ」へ突入。
- RTは次回ボーナスまで継続、純増約+0.7枚/G。
- BIG中赤7揃いでもRT突入。MBからもRT突入契機あり。
- 一般的なゲーム数到達型のボーナス/ART確定天井は今回確認できず。150GはCZ周期であり天井と混同しない。

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。旧パチマガスロマガに本機専用「攻め時・ヤメ時・設定変更時」項目の存在は確認したが、設定変更時の150G周期カウンタ、CZ/RT状態、ボーナス後状態の具体本文を現存検索結果から回収できず。一般的な5号機挙動から補完しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に150G周期進捗、CZ、RT残状態がどこまで引き継がれるか本機固有の直接資料を確定できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの場合の150G周期進捗、CZ/RT状態の復帰を確定できず。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。150G周期CZのゲーム数カウンタが設定変更でclear/retainされるか直接根拠を回収できず。

ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED。通常時150GはCZ周期であり、リセット短縮天井とは扱わない。設定変更専用の短縮周期数値も未確認。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モードや設定変更時モード振り分けを確認できず。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時のCZ/RT状態処理を確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更/朝一専用の恩恵を示す直接資料・公開数値を確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプ、150G周期挙動等による本機固有の設定変更判別を確定できず。

numericResetData:
  normalCzCycle: 150G
  resetSpecificCzCycle: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
  resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
  resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
  morningHitRate: UNVERIFIED_AFTER_RESEARCH
  resetBenefitRate: UNVERIFIED_AFTER_RESEARCH

resetBehaviorQA: RESEARCH_PASS_RESET_COUNTER_CZ_RT_POWER_CYCLE_DETECTION_AND_MORNING_NUMBERS_UNVERIFIED

resetBehaviorResearchNote:
- `侍ジャイアンツ2 / 侍ジャイアンツ２ / 侍ジャイアンツ2X / ニューギン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / 150G / CZ / RT / ガックン / 天井` を組み替えて再探索。
- グリーンべると、P-WORLD、旧パチマガスロマガ、5号機クロニクル、当時業界資料、後年回顧資料を横断。
- 旧パチマガスロマガに設定変更項目の導線は残るが本文を回収できず、存在のみから挙動を復元しない。
- 初代「侍ジャイアンツ」や後年の別シリーズ仕様は混入させない。

## sources

取得日: 2026-09-03

1. グリーンべると「ニューギン、初代・慶次の甘デジほか1機種を発表」 — https://web-greenbelt.jp/00003205/ — 2009-08-16納品予定、RT次回ボーナスまで、純増0.7枚/G、150G周期CZ、BIG平均308枚、MB平均85枚 — reliability: INDUSTRY
2. P-WORLD「侍ジャイアンツ2」 — https://www.p-world.co.jp/machine/database/5642 — 型式名侍ジャイアンツ2X、BIG440枚超/MIDDLE120枚超払い出し終了、REG搭載 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「侍ジャイアンツ2 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/11/a.php — 150G周期CZ、RT次回ボーナスまで、純増0.7枚/G、BIG約308枚、MB約85枚 — reliability: OLD_ANALYSIS_HIGH
4. パチマガスロマガ「侍ジャイアンツ2 小役・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/11/c.php — 1000円あたりゲーム数は現存ページで現在調査中 — reliability: OLD_ANALYSIS_HIGH
5. パチマガスロマガ「侍ジャイアンツ2 ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/11/h.php — ボーナス抽選確率/PAYOUTは現存ページで現在調査中 — reliability: OLD_ANALYSIS_HIGH
6. パチマガスロマガ「侍ジャイアンツ2 INDEX」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/11/newgin_slot_11.php — 本機専用「攻め時・ヤメ時・設定変更時」項目の存在 — reliability: OLD_ANALYSIS_HIGH
7. 5号機クロニクル「ニューギン＆エキサイト5号機全機種一覧」 — https://5goki.com/newgin-excite — 設定別BIG/REG/合算、機械割96.7〜108.0%、2009年導入整理 — reliability: RETROSPECTIVE_SINGLE
8. パチスロ業界初まとめ 更新情報7 — https://slothistory.com/kousin_kako07.html — 2009-08-17発売、RT純増0.7枚/G、150G周期CZ — reliability: INDUSTRY_RETROSPECTIVE
9. 侍ジャイアンツシリーズ機械割回顧 — https://www.marimo0925.net/pachislot-kikaiwari-ranking-samuraigiants-ban/ — 別機械割系列96.2〜112.8% — reliability: RETROSPECTIVE_SINGLE_LOW

## missingFields

- 50枚あたりゲーム数
- 設定変更時の150G周期カウンタclear/retain
- 据え置き/電源OFF→ON時の周期進捗・CZ/RT状態
- 設定変更時のモード/状態再抽選有無
- ガックン/初期出目/液晶等の設定変更判別
- 朝一専用モード振り分け・当選率・恩恵率
- REGとMB表記の資料間定義整理

## conflicts

- 導入境界はグリーンべると2009-08-16納品予定と当時業界資料2009-08-17発売。納品/発売定義差として両方保持。
- 機械割は5号機クロニクル96.7/99.3/101.0/103.4/105.3/108.0%と後年シリーズ回顧96.2/100.2/102.6/106.4/108.9/112.8%が競合。平均せず両系列保持。
