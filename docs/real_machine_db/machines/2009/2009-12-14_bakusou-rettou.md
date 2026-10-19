# 爆走列島

machineName: 爆走列島
manufacturer: SNKプレイモア
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-12-14
generation: 5号機
systemType: A+ART / 完走型ART / CZ / ナビストック
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 435件地点から継続。
- 2009-12-07同日群と12-08〜12-13を、当時業界記事・PachiBee・K-Navi系・メーカー別後年一覧で再監査。12-08〜12-13は発表日記事は確認したが、今回本線へ追加すべき具体的ホール導入日の未登録機を確定できなかった。
- PachiBeeが本機の導入日を2009-12-14と明示。当時遊技通信転載資料では2009-11-16発表であり、発表日を導入日に混同しない。
- 追加前に既存パス確認とLATEST_HANDOFF再取得を実施し、435件地点のままで競合がないことを確認。

## payoutRateBySetting

- 設定1: 96.6%
- 設定2: 98.2%
- 設定3: 100.1%
- 設定4: 104.3%
- 設定5: 107.5%
- 設定6: 111.2%

旧パチマガスロマガ直接値、5号機クロニクル、pacnkの系列が一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ボーナス合成
- 設定1: 1/266.41
- 設定2: 1/254.02
- 設定3: 1/242.73
- 設定4: 1/232.40
- 設定5: 1/208.71
- 設定6: 1/189.41

旧パチマガスロマガ直接値。5号機クロニクル・pacnkの丸め値とも整合。

白BARの爆走ボーナスは極低確率フラグ、赤7/青7BIGを含む3ボーナス構成。設定別ART初当たりの比較可能な公開系列は、機種名/型式候補/メーカー名と「ART初当たり」「スゴロクタイム初当たり」「ナビストック」「設定差」等で再探索したが今回確定できず、ボーナスやCZ自力突入率から逆算しない。

confidence: ANALYSIS_HIGH_CROSSCHECKED_FOR_BONUS / UNVERIFIED_FOR_ART_INITIAL

## baseGamesPer50

旧パチマガスロマガ「1000円あたりのゲーム数」:
- 設定1: 34.76G
- 設定2: 34.76G
- 設定3: 34.76G
- 設定4: 34.76G
- 設定5: 34.76G
- 設定6: 36.23G

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

ART「スゴロクタイム」: **約+1.2枚/G**

- 1セット50Gの完走型ART。
- P-WORLD、PachiBee、旧パチマガ、当時遊技通信転載資料で約+1.2枚/Gが一致。

confidence: HIGH_CROSSCHECKED

## basicPayout

- 爆走ボーナス（白BAR）: 約255枚
- 赤7BIG: 約125枚
- 青7BIG: 約125枚
- 爆走ボーナス後: ボーナス3回当選までART継続、平均期待出玉約2700枚と当時資料で紹介

P-WORLDと旧パチマガで約255枚/約125枚が一致。当時遊技通信転載資料でも爆走ボーナス時の約2700枚期待値を確認。

confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ボーナス後・ART後などにCZ「爆走ゾーン」へ移行。
- ナビストックがあればナビによってARTへ。ストックなしでも自力ART突入率は旧パチマガ35.7%、P-WORLD約36%で整合。
- ART「スゴロクタイム」は50G完走型、約+1.2枚/G。
- ゲーム数天井は **ボーナス&ART間999G** で天井CZへ移行する後年解析資料を確認。
- 天井CZではナビストックを獲得し、赤7/青7BIG成立時は無限ART確定という解析記録あり。

confidence: HIGH_FOR_ART_CZ / ANALYSIS_SINGLE_FOR_CEILING_DETAIL

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。後年解析資料pacnkに、本機は設定変更後も999G天井までのゲーム数を引き継ぐ一方、ARTナビストックは設定変更で消滅すると明記。検索語を `爆走列島 / SNKプレイモア / 設定変更 / リセット / 朝一 / 天井 / 999G / ナビストック / スゴロクタイム / 爆走ゾーン` と変え、旧パチマガ、P-WORLD、PachiBee、後年DB・回顧を横断したが、設定変更時のCZ内部状態・リール初期状態まで直接確定できる別系統本文は回収できなかった。

carryOverBehavior: **PARTIAL_CONFIRMED_FOR_CEILING**。設定変更を行っても天井ゲーム数を引き継ぐという解析があるため、少なくとも天井ゲーム数進捗は設定変更によって消去されない。純粋な据え置き時のCZ/ARTナビストック等の保持範囲を明示した本機固有資料は未回収。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみでの999G天井進捗、CZ/ART状態、ナビストック、リール初期挙動の本機固有直接資料を確定できない。

gameCounterReset: **NOT_RESET_BY_SETTING_CHANGE / CARRIED_OVER**。pacnk直接記述。対象はボーナス&ART間999Gの天井ゲーム数。

ceilingAfterReset: **NO_RESET_SHORTENING_CONFIRMED; CEILING_PROGRESS_CARRIED_OVER**。設定変更専用の短縮天井ではなく、通常999G天井への進捗を引き継ぐ。リセット専用の別天井値は確認できない。

modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用モードや設定変更時モード振り分けの公開値は確認できない。

stateAfterReset: **PARTIAL_CONFIRMED**。ARTナビストックは設定変更で消滅するとの解析あり。CZ滞在・ART中・無限ART等の各状態を設定変更した場合の完全な状態遷移は未確定。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **CEILING_PROGRESS_CARRYOVER**。設定変更しても999G天井までのゲーム数が引き継がれるため、前日ハマリ進捗が残ることは朝一客行動上の主要特性。ただし設定変更専用のモード優遇・短縮・当選率上昇は確認できない。

resetPenalties: **NAVIGATION_STOCK_CLEARED_ON_SETTING_CHANGE**。ARTナビストックは設定変更で消滅するとの解析あり。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/CZ表示、ゲーム数挙動等を検索したが、本機固有の設定変更判別方法を直接確定できない。天井進捗が設定変更でも維持されるため、ゲーム数だけでは設定変更/据え置き判別にならない点は仕様上の注意として保持する。

numericResetData:
  normalGameCeiling: ボーナス&ART間999Gで天井CZ（ANALYSIS_SINGLE）
  settingChangeCeilingCounter: 999G進捗を引き継ぐ（ANALYSIS_SINGLE_DIRECT）
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

## conflicts

- 機械割・ボーナス合算・純増・基本獲得枚数に、今回採用値を覆す明確な競合は確認しなかった。
- 天井/設定変更挙動はpacnkで具体本文を取得したが、旧パチマガの「攻め時・ヤメ時・設定変更時」本文そのものは検索インデックスから回収できず、resetBehavior全体の信頼度はANALYSIS_SINGLEを超えない部分がある。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ART initial probability by setting: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. PachiBee 機種情報 — https://www.pachibee.jp/machines/reach/209110014 — 導入日2009-12-14、5号機ART/CZ、約+1.2枚/G — reliability: CONTEMPORARY_DATABASE
2. P-WORLD 機種DB — https://www.p-world.co.jp/machine/database/5767 — SNKプレイモア、ART/CZ、約+1.2枚/G、50G、約255/125枚、CZ自力約36% — reliability: MAJOR_DATABASE
3. 旧パチマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/a.php — 自力ART35.7%、50G、+1.2枚/G、約255/125枚 — reliability: ANALYSIS_SINGLE_DIRECT
4. 旧パチマガ ボーナス/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/h.php — ボーナス合算、PAYOUT — reliability: ANALYSIS_SINGLE_DIRECT
5. 旧パチマガ 1000円あたりG数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/c.php — 34.76G〜36.23G — reliability: ANALYSIS_SINGLE_DIRECT
6. 旧パチマガ 機種トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/27/snk_slot_27.php — 本機専用「攻め時・ヤメ時・設定変更時」項目の存在 — reliability: ANALYSIS_INDEX_ONLY_FOR_RESET
7. 5号機クロニクル SNKプレイモア一覧 — https://5goki.com/snkplaymore — 2009/12、ボーナス合算丸め値、機械割系列 — reliability: RETROSPECTIVE_DATABASE
8. pacnk 爆走列島設定判別/天井 — https://pacnk.com/slot/tools/sh_bakuso.html — 999G天井、設定変更後も天井G数引継ぎ、ナビストック設定変更で消滅、PAYOUT/合算 — reliability: RETROSPECTIVE_ANALYSIS_SINGLE_FOR_RESET
9. 遊技通信転載（Pマンズ） — https://p-mans.blogspot.com/2009/11/ — 2009-11-16発表、50G完走型ART、約+1.2枚/G、爆走ボーナス約2700枚期待 — reliability: CONTEMPORARY_INDUSTRY_REPRINT
10. パチ7 SNKプレイモア史 — https://pachiseven.jp/articles/detail/11157 — 2009年ラインナップ、A+ART/爆走ボーナス回顧 — reliability: RETROSPECTIVE_EDITORIAL
