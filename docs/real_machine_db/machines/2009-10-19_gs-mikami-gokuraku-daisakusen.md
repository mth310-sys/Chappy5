# GS美神 極楽大作戦!!

machineName: GS美神 極楽大作戦!!
manufacturer: アビリット（現コナミアミューズメント系）
formalModelName: GSミカミX
approvalNumber: 0S0430
releaseDate: 2009-10-19（K-Navi・コミックナタリーのホール導入予定日。グリーンべると当時記事は2009-10-18納品予定）
generation: 5号機
systemType: ボーナス + RT / CZ + 天井RT
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

P-WORLD / 5号機クロニクル / pacnkで一致:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.1% |
| 3 | 101.5% |
| 4 | 103.8% |
| 5 | 106.2% |
| 6 | 109.3% |

confidence: ANALYSIS_HIGH（複数系統一致）

## initialHitBySetting

| 設定 | S-BIG | 赤7BIG | 青7BIG | BIG合算 | REG | 追跡チャンス | ボーナス合算 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 1/13107.2 | 1/704.69 | 1/704.69 | 1/343.1 | 1/504.12 | 1/9362.29 | 1/199.8 |
| 2 | 1/13107.2 | 1/682.67 | 1/682.67 | 1/332.7 | 1/485.45 | 1/8192.0 | 1/192.7 |
| 3 | 1/10922.67 | 1/648.87 | 1/648.87 | 1/315.1 | 1/468.11 | 1/6553.6 | 1/183.0 |
| 4 | 1/10922.67 | 1/618.26 | 1/618.26 | 1/300.6 | 1/451.97 | 1/5461.33 | 1/174.7 |
| 5 | 1/9362.29 | 1/595.78 | 1/595.78 | 1/288.7 | 1/436.91 | 1/4369.07 | 1/167.1 |
| 6 | 1/7281.78 | 1/569.88 | 1/569.88 | 1/274.2 | 1/422.81 | 1/3640.89 | 1/159.0 |

- P-WORLDと5号機クロニクルで主要確率系列が一致。
- 2009年当時のグリーンべるとも設定1約1/199〜設定6約1/159の合算端点を掲載。

confidence: INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE + ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ旧解析の「1000円あたりのゲーム数」:

| 設定 | 50枚/1000円あたり |
|---:|---:|
| 1 | 39.44G |
| 2 | 40.23G |
| 3 | 41.06G |
| 4 | 42.34G |
| 5 | 43.64G |
| 6 | 45.53G |

confidence: ANALYSIS_SINGLE_OLD_MAJOR

## netIncrease

- RT「追跡タイム」: **約+0.4枚/G**。
- 次回ボーナスまで継続。
- グリーンべると当時記事、K-Navi、P-WORLDで一致。

confidence: INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE

## basicPayout

- SUPER BIG: 約350枚（456枚超払い出しで終了）
- 赤7BIG: 約300枚（396枚超払い出しで終了）
- 青7BIG: 約180枚（228枚超払い出しで終了）
- REG: 約80枚（96枚超払い出しで終了）
- 追跡チャンス: 約18枚（12G消化または2回入賞で終了）

confidence: INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE

## modeSpecificMinimumData

- 全ボーナス後にCZ状態を経由。
- BIG後は1Gの「極楽チャンス」で転落リプレイを回避できればRT「追跡タイム」へ。
- REG後は30Gのチャンスゾーンを完走できればRTへ。
- SUPER BIG / 追跡チャンス後はRTへ突入。
- RT「追跡タイム」は次回ボーナスまで継続、純増約+0.4枚/G。
- 通常時 **999Gハマリ**で次回ボーナスまでの天井RTへ突入（P-WORLD）。当時グリーンべると/K-Naviは「約1000G」「1000G消化」と表現。
- ゲーム数解除でボーナスを抽選するタイプではない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。通常時999G天井カウンタ、ボーナス後CZ、追跡タイム滞在中の設定変更時処理について、本機固有の直接資料を確定できず。一般的な5号機挙動で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の999G天井カウンタ/CZ/RT状態引継ぎを本機固有に明記する高信頼資料を今回回収できず。宵越し可否を推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみの場合の天井ゲーム数、CZ、追跡タイム、液晶/リール状態の保持・復帰を直接確認できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時999Gハマリ天井は確認済みだが、設定変更時に当該カウンタがゼロクリアされるか引き継がれるかは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井値や変更後天井を示す本機固有公開値を確認できず。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。ゲーム数解除モード/朝一専用モードは確認されない。ただしCZ/RT状態の設定変更時処理は別項目として未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_CZ_RT_STATE**。ボーナス後CZおよび追跡タイム滞在中の設定変更・電源再投入時の状態処理は直接資料未回収。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井、朝一専用RT/CZ、当選率上昇などは確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`GS美神 / GSミカミX / アビリット / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 天井 / RT / 極楽チャンス / 追跡タイム` を組み替え、当時解析・古いDB・回顧資料まで再探索したが、本機固有の設定変更判別要素を直接確認できず。

numericResetData:
  normalGameCountCeiling: 999Gハマリで次回ボーナスまでの天井RT（当時記事は約1000G/1000G消化表記）
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NOT_APPLICABLE_NO_MODE_CONFIRMED
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_NORMAL_CEILING_CONFIRMED_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_CZ_RT_STATE_CHANGE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `GS美神極楽大作戦!! / GS美神 / GSミカミX / アビリット / 5号機 / 999G / 1000G / 天井RT` を使用。
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / 宵越し / ガックン / 初期出目 / RT / CZ / 極楽チャンス / 追跡タイム` を組み替えて再探索。
- グリーンべると、K-Navi、P-WORLD、パチマガスロマガ旧解析、5号機クロニクル、pacnk、回顧/旧DBを横断。
- 天井そのものは複数系統で確定したが、設定変更・据え置き・電源OFF→ONによるカウンタ/RT/CZ状態の処理は本機固有資料を確定できなかったため推定しない。

## conflicts

- releaseDateDefinition: グリーンべると当時記事は **2009-10-18納品予定**、K-Naviおよびコミックナタリーは **2009-10-19ホール導入予定/全国ホール順次稼働**。物流開始とホール導入の定義差として両方保持し、主releaseDateはホール導入基準の2009-10-19。
- ceilingExpression: P-WORLDは **通常時999Gハマリ**、当時グリーンべると/K-Naviは **約1000G / 1000G消化**。実質同一の発動境界を異なる数え方で表現している可能性が高いが、表記は原文定義を保持する。

## missingFields

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterResetOnSettingChange: UNVERIFIED_AFTER_RESEARCH
- resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
- stateAfterResetForCZRT: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「人気コミック『GS美神』がパチスロで登場」2009-09-11 — https://web-greenbelt.jp/00003291/ — ボーナス獲得目安、合算設定1/6端点、RT約+0.4枚/G、通常時約1000GでRT、2009-10-18納品予定 — reliability: INDUSTRY_CONTEMPORARY
2. K-Navi「パチスロ新機種『GS美神 極楽大作戦!!』プレス内覧会」2009-09-09 — https://p-kn.com/topics/exhibition/542/ — 2009-10-19ホール導入予定、1000G消化時RT、RT約+0.4枚/G — reliability: INDUSTRY_CONTEMPORARY
3. コミックナタリー「『GS美神』がパチスロに登場、ビッグ連チャンで極楽へ」2009-09-26 — https://natalie.mu/comic/news/21320 — 2009-10-19より全国ホール順次稼働予定 — reliability: CONTEMPORARY_MEDIA
4. P-WORLD「GS美神極楽大作戦!!」 — https://www.p-world.co.jp/machine/database/5694 — 型式GSミカミX、検定0S0430、設定別ボーナス/機械割、各ボーナス獲得枚数、999G天井RT、RT約+0.4枚/G — reliability: INDUSTRY_DATABASE
5. パチマガスロマガ「GS美神 極楽大作戦!! 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/23/c.php — 1000円あたりゲーム数39.44〜45.53G — reliability: ANALYSIS_SINGLE_OLD_MAJOR
6. 5号機クロニクル「コナミアミューズメント（高砂電器・アビリット）5号機全機種一覧」 — https://5goki.com/konami — 設定別ボーナス確率、機械割97.5〜109.3%、2009-10導入 — reliability: RETROSPECTIVE_ANALYSIS
7. pacnk「GS美神極楽大作戦!! 設定判別ツール」 — https://pacnk.com/slot/tools/sh_gsmikami.html — ボーナス合算・機械割系列、天井約999G参照 — reliability: RETROSPECTIVE_ANALYSIS
