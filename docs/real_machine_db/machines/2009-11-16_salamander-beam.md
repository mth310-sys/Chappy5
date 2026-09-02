# サラマンダー

machineName: サラマンダー
manufacturer: ビーム
formalModelName: サラマンダー（回胴式遊技機として検定通過名を確認。型式末尾等はUNVERIFIED_AFTER_RESEARCH）
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-11-16（当時プレイグラフ記事のホール導入予定。P-WORLDは2009年11月導入月）
generation: 5号機
systemType: ノーマル / 純Aタイプ / 完全告知
coreStatus: COMPLETE_CORE_WITH_FORMAL_SUFFIX_AND_APPROVAL_UNVERIFIED_RESET_BEHAVIOR_MOSTLY_NOT_APPLICABLE_OR_UNVERIFIED

## chronologyNote

- 430件地点（chronologicalFrontier 2009-11-23 / 剣豪）から2009年11月の月次境界を再監査し、直前handoff指定候補の `サラマンダー` と `ネオン物語` を比較。
- 当時プレイグラフ系記事に、ビームが2009-10-20に内覧会を開催し、**ホール導入は2009-11-16予定**と明記されるため、PachiBeeで2009-11-17導入の `ネオン物語` より先に処理。
- P-WORLDは導入開始月を2009年11月としており、日付粒度は当時業界記事を主値とする。
- repoコード検索・コミット検索で `サラマンダー` の既存レコード/履歴ヒットなしを確認してから追加。

## payoutRateBySetting

設定1〜6:

- 設定1: 96.43%
- 設定2: 98.00%
- 設定3: 100.83%
- 設定4: 103.66%
- 設定5: 106.15%
- 設定6: 109.01%

旧パチマガスロマガの本機専用解析ページから直接取得。P-WORLDにも本機専用「ボーナス詳細機械割」項目があり、同じ設定別ボーナス系列を確認できるため、主要性能系統として採用。

confidence: ANALYSIS_HIGH

## initialHitBySetting

### BIG

- 設定1: 1/287.44
- 設定2: 1/278.88
- 設定3: 1/268.59
- 設定4: 1/265.33
- 設定5: 1/262.14
- 設定6: 1/250.14

### REG

- 設定1: 1/412.18
- 設定2: 1/390.10
- 設定3: 1/348.60
- 設定4: 1/297.89
- 設定5: 1/262.14
- 設定6: 1/250.14

### ボーナス合成

- 設定1: 1/169.34
- 設定2: 1/162.62
- 設定3: 1/151.70
- 設定4: 1/140.33
- 設定5: 1/131.07
- 設定6: 1/125.07

旧パチマガスロマガ本機専用ページの設定別抽選値。P-WORLDでもBIG系列（例: 設定1 1/287.43、設定2 1/278.87、設定3 1/268.59、設定4 1/265.32、設定5 1/262.14）をほぼ同一の丸め差で確認。

confidence: ANALYSIS_HIGH / DATABASE_CROSSCHECK

## baseGamesPer50

1000円あたりゲーム数（50枚貸し換算）:

- 設定1: 35.48G
- 設定2: 35.48G
- 設定3: 35.80G
- 設定4: 36.36G
- 設定5: 36.75G
- 設定6: 37.04G

旧パチマガスロマガ本機専用小役/ベースページから直接取得。

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

NOT_APPLICABLE。

- 本機はボーナスのみで出玉を増やす純Aタイプ。
- 当時業界記事はRT非搭載と説明し、P-WORLDもノーマルタイプとして「ボーナスのみで出玉を増やす」と明記。

confidence: INDUSTRY + DATABASE_CROSSCHECK

## basicPayout

- BIG: 約312枚（345枚払い出しで終了）
- REG: 約104枚（105枚払い出しで終了）

旧パチマガスロマガとP-WORLDが一致。

confidence: ANALYSIS_HIGH / DATABASE_CROSSCHECK

## modeSpecificMinimumData

- 完全告知のノーマルタイプ。
- 基本告知は第3停止ボタンを離した瞬間。
- レバーON時フリーズ等のプレミアム告知はBIG確定。
- RT/ART/CZは物差し上の主要出玉機能として非搭載。
- P-WORLDは**天井なし**と明記。

confidence: INDUSTRY + ANALYSIS_HIGH + DATABASE_CROSSCHECK

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`サラマンダー / ビーム / 純A / 完全告知` と `設定変更 / リセット / 朝一 / 設変` を組み替えて当時解析・旧DB・業界記事を横断したが、本機固有の設定変更時リール挙動や内部処理を直接説明する資料は確定できなかった。ノーマル機一般論から補完しない。

carryOverBehavior: **NO_CEILING_OR_MODE_CARRYOVER_TARGET_CONFIRMED / OTHER_BEHAVIOR_UNVERIFIED**。P-WORLDで通常天井なし、RT/ART非搭載を確認しているため、天井ゲーム数やARTモード等の据え置き対象は物差し上存在しない。一方、ボーナス成立状態や表示・リール等の細かな電断/据え置き処理は本ミッション対象粒度を超え、直接資料も確定できないため推測しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_VISIBLE_BEHAVIOR**。単純電源OFF→ON時のガックン、初期出目、告知ランプ等、本機固有の客側判別につながる直接記述を確定できなかった。

gameCounterReset: **NOT_APPLICABLE_TO_CEILING**。通常ゲーム数天井なしをP-WORLDで直接確認。設定変更による天井ゲーム数リセット/引継ぎという比較対象はない。

ceilingAfterReset: **NOT_APPLICABLE**。通常天井自体がないため、リセット短縮天井も物差し上該当しない。

modeAfterReset: **NOT_APPLICABLE_FOR_PUBLISHED_GAMEPLAY_MODE**。朝一専用モード、天国/通常等のゲーム数モードは今回確認した本機資料に存在せず、ノーマルボーナス機として比較対象なし。未公開内部状態を推測しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH / NO_RT_ART_CZ_STATE_TARGET**。RT/ART/CZ状態は非搭載。ボーナスフラグ等の詳細内部処理は完全再現目的では収集しない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一/設定変更専用の短縮天井、モード優遇、RT/ART優遇等は確認できず、通常天井も非搭載。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時に客側期待値を大きく悪化させる公開要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / CHANCEランプ / 告知ランプ / 朝一挙動 / 変更判別 / 電源OFF ON` を含めて多段再探索したが、本機固有の直接根拠を確定できなかった。

numericResetData:
  normalGameCeiling: NONE_CONFIRMED / P-WORLD_NO_CEILING
  resetSpecificCeiling: NOT_APPLICABLE
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_DIRECT_NO_CEILING_AND_NO_RT_ART_CONFIRMED_OTHER_VISIBLE_RESET_BEHAVIOR_UNVERIFIED_AFTER_REQUIRED_MULTIQUERY_RESEARCH

resetBehaviorResearchNote:
- `サラマンダー / サラマンダー パチスロ / サラマンダー ビーム / サラマンダー 回胴 / ビーム 第3弾` と、`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 初期出目 / CHANCEランプ / 変更判別` を組み替えて検索。
- 厨房機器、ゲーム「沙羅曼蛇」、後年の同名要素を除外し、2009年ビーム製5号機だけを対象化。
- 最初の検索で欠損確定せず、当時業界記事、P-WORLD、旧パチマガスロマガ、検定回顧資料まで系統を変えて再探索した。

## conflicts

- BIG設定1〜5はP-WORLDと旧パチマガスロマガで小数第2位レベルの丸め差（例: 287.43 vs 287.44）があるが、同一分母系列の丸め差として扱い、性能上のCONFLICTとはしない。
- 導入時期はP-WORLDの2009年11月（月粒度）と当時プレイグラフの2009-11-16予定が整合し、明確な競合なし。

## missingFields

- formalModelName suffix/details: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior visible/specific behavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior visible/specific behavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- public reset-specific numeric values: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. プレイグラフ記事転載（Pマンズ）「ビームが第3弾機種『サラマンダー』を発表」 — https://p-mans.blogspot.com/2009/10/ — 2009-10-20内覧会、完全告知機、**ホール導入2009-11-16予定**を確認 — reliability: INDUSTRY_CONTEMPORARY
2. 遊技通信記事転載（同ページ）「ビーム、『サラマンダー』を発表」 — https://p-mans.blogspot.com/2009/10/ — 純Aタイプ、RT非搭載、ボーナスで出玉を獲得する仕様を独立確認 — reliability: INDUSTRY_CONTEMPORARY
3. P-WORLD「サラマンダー」 — https://www.p-world.co.jp/machine/database/5742 — ビーム、5号機、ノーマル/完全告知、BIG約312枚、REG約104枚、**天井なし**、設定別BIG系列を確認 — reliability: RELIABLE_DATABASE
4. パチマガスロマガ旧解析「ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/03/h.php — BIG/REG/合算、設定別PAYOUTを直接取得 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧解析「小役・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/03/c.php — 35.48〜37.04G/1000円を直接取得 — reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧解析「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/03/a.php — BIG約312枚/345枚払い出し、REG約104枚/105枚払い出し、完全告知を確認 — reliability: ANALYSIS_HIGH
7. 検定通過機種回顧 — https://q-and-a.hatenablog.com/entry/2016/10/24/215400 — 2009-06-15にビーム「サラマンダー（回胴）」の検定通過記録を確認 — reliability: RETROSPECTIVE_REGULATORY_LIST

## sourceQuality

- identity/manufacturer/system/releaseDate: INDUSTRY_CONTEMPORARY + RELIABLE_DATABASE
- payout/bonus probabilities/basicPayout: ANALYSIS_HIGH + DATABASE_CROSSCHECK
- baseGamesPer50: ANALYSIS_SINGLE_DIRECT
- no-ceiling / no-RT: RELIABLE_DATABASE + INDUSTRY_CONTEMPORARY
- formal suffix / approval number: UNVERIFIED_AFTER_REQUIRED_MULTIQUERY_RESEARCH
- resetBehavior: no-ceiling/no-RT/ART/CZ related fields directly classified; visible setting-change/power-cycle/detection behavior remains UNVERIFIED_AFTER_REQUIRED_MULTIQUERY_RESEARCH
- no inferred numeric reset values written
