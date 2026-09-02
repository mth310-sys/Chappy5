# 噴火でDON!

machineName: 噴火でDON!
manufacturer: トリビー
formalModelName: フンカデドン
approvalNumber: 8S1196
releaseDate: 2009-10-26（K-Naviホール導入開始） / 2009-10-25〜（グリーンべると当時記事の納品開始）
generation: 5号機
systemType: ノーマル / 完全告知 / BIG+REG
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 3 | 99.9% |
| 5 | 106.1% |
| 6 | 113.4% |

- P-WORLDとK-Naviで一致。

confidence: ANALYSIS_HIGH_MULTISOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/297.89 | 1/364.09 | 1/163.8 |
| 3 | 1/282.48 | 1/348.60 | 1/156.0 |
| 5 | 1/253.03 | 1/327.68 | 1/142.8 |
| 6 | 1/236.59 | 1/239.18 | 1/118.9 |

- P-WORLD精密値。K-Naviの丸め値（BIG 1/297→1/236、REG 1/364→1/239、合算1/163→1/118）と整合。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

| 設定 | 50枚あたり |
|---:|---:|
| 1 | 34.05G |
| 3 | 34.49G |
| 5 | 34.97G |
| 6 | 35.14G |

- パチマガスロマガ旧解析の「1000円あたりのゲーム数」。

confidence: ANALYSIS_OLD_MAJOR

## netIncrease

NOT_APPLICABLE

- ボーナスのみで出玉を増やすノーマルタイプ。ART/AT/RTによる通常時純増性能は確認されない。

confidence: INDUSTRY_DATABASE + ANALYSIS_OLD_MAJOR

## basicPayout

- BIG: 約312枚（345枚超の払い出しで終了）。
- REG: 約130枚（135枚超の払い出しで終了）。
- グリーンべると当時記事、P-WORLD、K-Navi、パチマガスロマガ旧解析で整合。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_HIGH_MULTISOURCE

## modeSpecificMinimumData

- 4段階設定（1 / 3 / 5 / 6）。
- 完全告知系ノーマルタイプ。火山役物噴火でボーナス確定。
- REG中にチェリーを菱形停止させた場合、REG終了後の噴火回数が設定推測要素として公開されているが、これは設定示唆でありリセット判別とは分離する。
- 通常ゲーム数天井、RT/ART/AT、周期CZ、ゲーム数管理モードは公開資料上確認されない。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_HIGH_MULTISOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`噴火でDON! / 噴火でDON / フンカデドン / トリビー` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / ガックン / 初期出目 / 電源OFF ON` を組み替え、P-WORLD、K-Navi、グリーンべると当時記事、パチマガスロマガ旧解析、旧DB/回顧を横断したが、本機固有の設定変更時挙動を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_POWER_STATE**。通常ゲーム数天井やゲーム数管理モードは確認されないため、天井進捗の据え置き問題は実質N/A。ただしボーナス成立状態や表示/役物状態を含む本機固有の据え置き時復帰挙動は直接確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のリール初期位置、火山役物/表示状態、成立ボーナス状態の保持/復帰を本機固有資料で確定できず。

gameCounterReset: NOT_APPLICABLE_FOR_CEILING_OR_GAME_NUMBER_MODE。通常ゲーム数天井・ゲーム数管理モードを確認できないため、朝一客行動に影響する天井ゲーム数リセット項目はN/A。

ceilingAfterReset: NOT_APPLICABLE。通常時天井・リセット短縮天井の公開仕様を確認できず。

modeAfterReset: NOT_APPLICABLE_FOR_GAME_NUMBER_MODE。通常時モード/周期CZ/ゲーム数管理は確認されない。

stateAfterReset: NOT_APPLICABLE_FOR_RT_ART_AT_CZ_STATE。RT/ART/AT/CZの内部状態管理は確認されない。ボーナス成立状態等の電源/設定変更時処理は `settingChangeBehavior` / `powerCycleBehavior` の未確認事項として分離。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の天井短縮、朝一優遇、初当たり優遇等の公開恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、役物位置、ランプ/表示による設定変更・据え置き判別を本機固有資料で確定できず。REG後噴火回数は設定示唆であり変更判別として扱わない。

numericResetData:
  normalCeiling: NONE_CONFIRMED
  resetSpecificCeiling: NONE_CONFIRMED
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NOT_APPLICABLE_FOR_GAME_NUMBER_MODE
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_MACHINE_SPECIFIC_SETTING_CHANGE_POWER_CYCLE_AND_CHANGE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 表記揺れ `噴火でDON! / 噴火でDON / フンカデドン / トリビー` を使用。
- `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 初期出目 / 火山役物 / 宵越し` を組み替えて再探索。
- 当時業界記事、P-WORLD、K-Navi、パチマガスロマガ旧解析、旧DB/後年回顧まで横断後のみUNVERIFIED判定。

## conflicts

- releaseDateDefinition: グリーンべると当時記事は **2009-10-25から納品**、K-Naviは **2009-10-26ホール導入開始**。納品開始とホール導入開始の定義差として両方保持。

## missingFields

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehaviorMachineSpecificPowerState: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「巨大火山役物で衝撃告知、『噴火でDON！』」2009-10-02 — https://web-greenbelt.jp/00003336/ — 納品2009-10-25〜、完全告知、4段階設定、合算1/163〜1/118、BIG約312枚、REG約130枚 — reliability: INDUSTRY_CONTEMPORARY
2. P-WORLD「噴火でDON!」 — https://www.p-world.co.jp/machine/database/5715 — トリビー、5号機ノーマル/完全告知、型式フンカデドン、検定番号8S1196、BIG/REG精密確率、機械割97.0〜113.4%、BIG MAX312枚、REG MAX130枚 — reliability: INDUSTRY_DATABASE
3. K-Navi「噴火でDON!」 — https://p-kn.com/slot/1070/ — ホール導入開始2009-10-26、設定1/3/5/6、BIG/REG/合算、機械割、約312枚/約130枚 — reliability: ANALYSIS_DATABASE
4. パチマガスロマガ旧解析「噴火でDON! 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/13/a.php — ノーマルタイプ、BIG約312枚、REG約130枚 — reliability: ANALYSIS_OLD_MAJOR
5. パチマガスロマガ旧解析「噴火でDON! 小役出現確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/13/c.php — 1000円あたり34.05 / 34.49 / 34.97 / 35.14G — reliability: ANALYSIS_OLD_MAJOR
6. パチマガスロマガ旧解析「噴火でDON! ボーナス中の打ち方」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/13/e.php — REG中チェリー菱形停止と終了後噴火回数の設定推測要素 — reliability: ANALYSIS_OLD_MAJOR

## researchSummary

- 性能コアはP-WORLD/K-Navi/当時グリーンべると/旧パチマガを横断して高整合。
- 50枚ベースは旧パチマガの直接値を取得できたため推定計算なし。
- resetBehaviorはノーマル機として天井・モード・RT/ART/AT/CZ項目をN/Aとしつつ、設定変更そのもの、単純電源OFF→ON、据え置き時の機械固有復帰、変更判別だけは推測せずUNVERIFIED_AFTER_RESEARCHとした。
