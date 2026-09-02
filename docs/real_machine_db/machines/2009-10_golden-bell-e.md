# ゴールデンベルE

machineName: ゴールデンベルE
manufacturer: ベルコ
formalModelName: ゴールデンベルE
approvalNumber: 8S1379
releaseDate: 2009-10（P-WORLD月次導入。P-WORLD掲示板では2009-10-09時点に「設置済み」とする当時投稿を確認するが、全国導入開始の具体日は今回確定できず）
generation: 5号機
systemType: ノーマル / ボーナス主体
coreStatus: PARTIAL_CORE_PAYOUT_RATE_BASE_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

UNVERIFIED_AFTER_RESEARCH

- P-WORLD機種ページ、5号機クロニクル、pacnk、機種名/型式名/メーカー名＋`機械割 / 出玉率 / PAYOUT` を組み替えて再探索したが、設定別機械割の直接値を今回確定できなかった。
- 5号機クロニクルも本機の機械割欄は空欄のため、近似機や他のベルシリーズから補完しない。

confidence: UNVERIFIED

## initialHitBySetting

P-WORLD掲載値:

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/297.0 | 1/481.0 | 1/184.0 |
| 2 | 1/292.0 | 1/431.0 | 1/174.0 |
| 3 | 1/282.0 | 1/390.0 | 1/163.0 |
| 4 | 1/277.0 | 1/356.0 | 1/156.0 |
| 5 | 1/268.0 | 1/341.0 | 1/150.0 |
| 6 | 1/260.0 | 1/321.0 | 1/143.0 |

confidence: ANALYSIS_SINGLE_OLD_DATABASE

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

- `50枚 / 1000円 / ベース / コイン持ち` を含め、機種名・型式名・ベルコ・ベルシリーズを組み替えて再探索したが比較可能な直接値を確定できなかった。

confidence: UNVERIFIED

## netIncrease

NOT_APPLICABLE — P-WORLDでは5号機ノーマルとして掲載され、出玉契機はBIG/REG。ART/AT純増は該当しない。

## basicPayout

- BIG: **345枚を超える払い出しで終了**
- REG: **119枚を超える払い出しで終了**
- 実純増枚数の直接値は今回確定できなかったため、払い出し終了条件と実獲得枚数を混同せず保持する。

confidence: ANALYSIS_SINGLE_OLD_DATABASE

## modeSpecificMinimumData

- 5号機ノーマル / ボーナス主体。
- BIG・REGの設定別確率はP-WORLDで確認。
- 通常ゲーム数天井、RT/ART/AT/CZ、長期ゲーム数モードは確認されない。
- P-WORLD掲示板には2009-10-09時点で既設置を示唆する当時投稿があり、2009年10月上旬には少なくとも一部店舗へ入っていた可能性が高い。ただしユーザー投稿を全国導入開始日そのものには採用しない。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_NO_GAME_COUNT_SYSTEM_CONFIRMED; MACHINE_SPECIFIC_PHYSICAL_BEHAVIOR_UNVERIFIED**。天井・RT/ART/AT/CZ・ゲーム数解除モードは確認されないため、それらのリセット処理は該当しない。設定変更時のリール始動挙動、初期出目、ランプ等の本機固有挙動は十分再探索後も直接根拠を確定できず。

carryOverBehavior: **NOT_APPLICABLE_FOR_GAME_COUNTER_OR_RT_ART_STATE**。据え置き時に引き継ぐ天井ゲーム数・RT/ART/AT/CZ・通常モードは確認されない。その他の本機固有RAM表示/リール状態は `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior: **NO_GAME_COUNTER_OR_RT_ART_STATE_APPLICABLE; OTHER_BEHAVIOR_UNVERIFIED**。単純電源OFF→ONで評価すべき公開天井・RT/ART状態は確認されない。初期出目/ランプ/リール挙動は本機固有資料を確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。

stateAfterReset: **NOT_APPLICABLE_NO_RT_ART_AT_CZ_STATE_CONFIRMED**。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一短縮天井、専用モード、当選率上昇などの公開恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / リール / ランプ` を組み替えて再探索したが、本機固有の直接根拠を確定できず。

numericResetData:
  normalGameCountCeiling: NONE_CONFIRMED
  resetSpecificCeiling: NOT_APPLICABLE
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_NO_CEILING_OR_GAMEPLAY_STATE_MACHINE_SPECIFIC_CHANGE_DETECTION_POWER_BEHAVIOR_UNVERIFIED

resetBehaviorResearchNote:
- `ゴールデンベルE / ゴールデンベル E / ベルコ / 型式8S1379 / ベルシリーズ` を使用。
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 初期出目 / リール / ランプ` を組み替えて再探索。
- P-WORLD、5号機クロニクル、pacnk、2009年機種一覧・回顧資料を横断。
- 4号機の旧「ゴールデンベル」および後年ベルコ機の仕様は転用しない。

## conflicts

- releaseDateExact: P-WORLDは導入開始を2009年10月までしか明示しない。一方、同ページ掲示板に2009-10-09時点で「設置済み」とする当時投稿、2009-10-12にはダイナム専用機として実戦した旨の投稿がある。具体全国導入日へ格上げできる一次/業界根拠は今回未回収のため、月精度を主値として保持する。

## missingFields

- payoutRateBySetting: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- actualNetBigPayout: UNVERIFIED_AFTER_RESEARCH
- actualNetRegPayout: UNVERIFIED_AFTER_RESEARCH
- exactNationalReleaseDate: UNVERIFIED_AFTER_RESEARCH
- settingChangePhysicalBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCyclePhysicalBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. P-WORLD「ゴールデンベルE」 — https://www.p-world.co.jp/machine/database/5736 — ベルコ、5号機ノーマル、検定番号8S1379、型式名、2009年10月導入、設定別BIG/REG/合算、BIG/REG払い出し終了条件。当時掲示板に10月9日時点の設置済み言及・10月12日のダイナム専用機実戦言及あり — reliability: ANALYSIS_SINGLE_OLD_DATABASE（掲示板部分は CONTEMPORARY_USER_TRACE）
2. 5号機クロニクル「ベルコ5号機全機種一覧」 — https://5goki.com/bellco — ゴールデンベルEを2009/10導入として収録。機械割欄は空欄であり欠損確認にも使用 — reliability: RETROSPECTIVE_SECONDARY
3. pacnk「こ から始まるパチスロ機種一覧」 — https://pacnk.com/slot/s/mlist_ko.html — ゴールデンベルEを2009.10機として掲載するが詳細未載 — reliability: OLD_ANALYSIS_INDEX
4. P-WORLD「2009年10月の新台スケジュール」 — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2009-10 — 2009年10月パチスロ群の月境界監査 — reliability: INDUSTRY_DATABASE

## researchStatus

- performanceCore: PARTIAL_BIG_REG_CONFIRMED_PAYOUT_RATE_BASE_UNVERIFIED_AFTER_RESEARCH
- resetBehavior: PARTIAL_NO_CEILING_OR_GAMEPLAY_STATE_SPECIFIC_CHANGE_DETECTION_UNVERIFIED
- sourceCoverage: OLD_MACHINE_DATABASE + RETROSPECTIVE_DATABASE + OLD_ANALYSIS_INDEX
