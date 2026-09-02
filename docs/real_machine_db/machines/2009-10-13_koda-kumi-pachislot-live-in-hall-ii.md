# KODA KUMI PACHISLOT LIVE IN HALL II

machineName: KODA KUMI PACHISLOT LIVE IN HALL II
manufacturer: SANKYO
formalModelName: KODA KUMI PACHISLOT LIVE IN HALL II F
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-10-13（K-Naviホール導入開始。SANKYO公式は2009.10月精度）
generation: 5号機
systemType: ボーナス+RT / CZ（CHANCE TIME→LIVE TIME）
coreStatus: COMPLETE_CORE_EXCEPT_APPROVAL_NUMBER_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

K-Navi掲載値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 95.8% |
| 2 | 98.2% |
| 3 | 100.6% |
| 4 | 103.6% |
| 5 | 106.7% |
| 6 | 110.0% |

confidence: ANALYSIS_HIGH（K-Naviの本機ページで設定別値を直接確認。後年5号機クロニクルにも同系列が見えるが、同ページは本機のゲーム性説明に別機種混入が疑われるため補助照合に限定）

## initialHitBySetting

SANKYO公式コレクション / K-Navi共通系列:

| 設定 | BIG | CHALLENGE BONUS | 合算 |
|---:|---:|---:|---:|
| 1 | 1/312 | 1/420 | 1/179 |
| 2 | 1/300 | 1/399 | 1/171 |
| 3 | 1/289 | 1/381 | 1/164 |
| 4 | 1/280 | 1/348 | 1/155 |
| 5 | 1/270 | 1/321 | 1/146 |
| 6 | 1/262 | 1/273 | 1/133 |

- メーカー公式は販売名/型式名と同じ表でBB・CHALLENGE BONUS・合算を掲載。
- K-Naviも同一系列を掲載しているため、比較用の主要ボーナス確率として採用。

confidence: OFFICIAL + ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ当時解析の「1000円あたりのゲーム数」:

| 設定 | 1000円(50枚)あたり |
|---:|---:|
| 1 | 35.88G |
| 2 | 36.36G |
| 3 | 36.86G |
| 4 | 37.37G |
| 5 | 37.89G |
| 6 | 38.48G |

confidence: ANALYSIS_HIGH_OLD

## netIncrease

- RT「LIVE TIME」: **約+0.1枚/G**（P-WORLD）
- RTゲーム数: 33G または 3333G。3333Gは実質次回ボーナスまで。
- RT完走後は再びCHANCE TIMEへ移行し、RTループ期待度は約50%。

confidence: ANALYSIS_HIGH + OFFICIAL_FLOW

## basicPayout

当時業界記事 / P-WORLD:
- SPECIAL BIG: **純増約290枚**
- BIG: **純増約280枚**
- CHALLENGE BONUS / REG系: **純増約80枚**

K-Naviの払い出し終了条件:
- SPECIAL BIG / BIG: 345枚を超える払い出しで終了
- CHALLENGE BONUS: 89枚を超える払い出しで終了

払い出し終了条件と実純増目安は定義を分けて保持する。

confidence: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData

- 全ボーナス後にCZ相当の「CHANCE TIME」へ移行。
- CHANCE TIME中の特殊リプレイでRT「LIVE TIME」へ移行。
- 通常LIVE TIMEは33G、SPECIAL LIVE TIMEは3333G（実質次回ボーナスまで）。
- SPECIAL BIG後はSPECIAL CHANCE TIMEへ移行し、RT突入が確定する仕様を当時業界記事で確認。
- RT完走後もCHANCE TIMEへ戻り、約50%でRTループ。
- 通常ゲーム数到達による天井機能は非搭載と解析資料で明記。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_CZ_STATE**。パチマガスロマガの本機INDEXに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認できたが、設定変更時にCHANCE TIME/LIVE TIME/SPECIAL LIVE TIMEの状態がどう処理されるかを直接示す本文を今回回収できなかった。一般的な5号機挙動や後継機から推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_CZ_STATE**。据え置き時のRT/CZ状態保持について本機固有の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_CZ_STATE**。単純電源OFF→ONのみでRT/CZ状態・表示・リール状態がどうなるか、本機固有の直接根拠を確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。通常ゲーム数天井は非搭載。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED; RT_CZ_STATE_HANDLING_UNVERIFIED**。ゲーム数解除モード/朝一専用モードは確認されないが、RT/CZ状態処理は別項目として未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_RT_CZ_STATE**。CHANCE TIME / LIVE TIME / SPECIAL LIVE TIMEの設定変更後状態は直接資料未回収。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。短縮天井、朝一専用モード、設定変更専用の当選率上昇等は確認されない。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / リール / ランプ / CHANCE TIME / LIVE TIME` を組み替えて再探索したが、本機固有の変更判別要素を直接確認できず。

numericResetData:
  normalGameCountCeiling: NOT_APPLICABLE
  resetSpecificCeiling: NOT_APPLICABLE
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_NO_CEILING_RESET_RT_CZ_STATE_POWER_CYCLE_CHANGE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `KODA KUMI PACHISLOT LIVE IN HALL II / LIVE IN HALLII / KODA KUMI PACHI-SLOT LIVE IN HALLⅡ / 倖田來未2 / 型式F / SANKYO` を使用。
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 初期出目 / RT / チャンスタイム / ライブタイム` を組み替えて再探索。
- SANKYO公式、K-Navi、P-WORLD、グリーンべると、パチマガスロマガ旧解析、旧/回顧DBを横断。
- 5号機クロニクルの同機欄は機械割だけK-Navi系列と一致する一方、A+ART・約1.2枚/G等の説明が本機の公式/P-WORLD仕様と矛盾しており、別機種データ混入の可能性が高いためゲーム性・初当たり・獲得枚数の根拠には採用しない。

## conflicts

- retrospectiveDataContamination: 5号機クロニクルの本機欄は機械割95.8〜110.0%だけK-Naviと一致するが、A+ART・ART約1.2枚/G・BIG約204枚/REG約50枚・異なる初当たり系列を掲載。SANKYO公式、K-Navi、P-WORLD、2009年グリーンべるとの本機仕様（ボーナス+RT、RT約0.1枚/G、SBB約290枚/BB約280枚/CB約80枚）と整合しないため、その系列を `CONFLICT/LIKELY_DATA_MIXUP` として本値へ混ぜない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeRTCZState: UNVERIFIED_AFTER_RESEARCH
- carryOverRTCZState: UNVERIFIED_AFTER_RESEARCH
- powerCycleRTCZState: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. SANKYOオンライン博物館「KODA KUMI PACHISLOT LIVE IN HALL II」 — https://www.sankyo-fever.jp/collection/535/ — 導入2009.10、販売名/型式名 `KODA KUMI PACHISLOT LIVE IN HALL II F`、BB/CHALLENGE BONUS/合算、RTフロー、33G/3333G、約50%ループ — reliability: OFFICIAL
2. K-Navi「KODA KUMI PACHISLOT LIVE IN HALL II」 — https://p-kn.com/slot/1050/ — ホール導入開始2009-10-13、設定別BIG/CB/合算、設定別機械割、払い出し終了条件、33G/3333G RT — reliability: ANALYSIS_HIGH
3. P-WORLD「KODA KUMI PACHISLOT LIVE IN HALLII」 — https://www.p-world.co.jp/machine/database/5684 — 5号機RT/CZ、S・BIG約290枚/BIG約280枚/REG約80枚、RT約+0.1枚/G、33G/3333G、約50%ループ — reliability: INDUSTRY_DATABASE
4. グリーンべると「倖田來未さんの熱いLIVE、パチスロでも再び」2009-09-15 — https://news.p-world.co.jp/articles/3606/greenbelt — ボーナス+RT、合算1/133〜1/179、SBB約290枚/BB約280枚/CB約80枚、SBB後SPECIAL CHANCE TIME→次回ボーナスまでのRT — reliability: INDUSTRY_CONTEMPORARY
5. パチマガスロマガ旧解析「KODA KUMI PACHI-SLOT LIVE IN HALLⅡ 小役確率・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/19/c.php — 設定別1000円あたり35.88〜38.48G — reliability: ANALYSIS_HIGH_OLD
6. パチマガスロマガ旧解析 INDEX — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/19/sankyo_slot_19.php — 本機に「攻め時・ヤメ時・設定変更時」専用項目が存在することを確認。ただし本文は今回未回収 — reliability: ANALYSIS_HIGH_OLD_INDEX
7. pacnk「KODAKUMI PACHISLOTLIVEINHALL2 設定判別ツール」 — https://pacnk.com/slot/tools/sh_kodakumi.html — 天井機能非搭載、ボーナス後CHANCE TIME→RT、RT終了後CHANCE TIME、通常リプレイ入賞までのループ構造 — reliability: RETROSPECTIVE_ANALYSIS
8. 5号機クロニクル SANKYO一覧 — https://5goki.com/sankyo — 機械割95.8〜110.0%はK-Naviと一致するが、その他の本機欄に公式/P-WORLDと不整合なA+ARTデータが混在。競合/データ汚染検知用にのみ保持 — reliability: RETROSPECTIVE_CONFLICT

## researchStatus

- performanceCore: COMPLETE_CORE_EXCEPT_APPROVAL_NUMBER
- resetBehavior: PARTIAL_NO_CEILING_RT_CZ_RESET_POWER_CYCLE_CHANGE_DETECTION_UNVERIFIED
- sourceCoverage: OFFICIAL + CONTEMPORARY_INDUSTRY + INDUSTRY_DATABASE + OLD_ANALYSIS + RETROSPECTIVE_ANALYSIS
