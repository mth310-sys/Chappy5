# ファイヤービーク

machineName: ファイヤービーク
manufacturer: コルモ
formalModelName: ファイヤービーク
approvalNumber: 9S0789
releaseDate: 2010-01（具体導入日 UNVERIFIED_AFTER_RESEARCH）
generation: 5号機
systemType: A+ART / 状態管理ART / ボーナス間1200G天井高確
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 440件 / chronologicalFrontier 2010-01-12「夢幻の如く」から境界監査を継続。
- 本機はP-WORLD、K-Navi、パチマガスロマガ等で2010年1月機として確認できるが、今回の再探索ではホール導入の具体日を高信頼資料で確定できなかった。
- P-WORLDの本機掲示板には2010-01-05時点で実戦内容を述べる投稿が残っており、少なくとも月後半だけの候補ではなく1月前半に市場実在していた可能性が高い。ただしユーザー投稿なので正式導入日の根拠には採用しない。
- コルモは2009-11-25に本機を発表。検定は東京都公安委員会系情報を再録した資料で2009-10-19、P-WORLDは検定番号9S0789を掲載。
- repo検索で未登録を確認し、具体日不明の1月前半遡及漏れとして441件目に追加。chronologicalFrontier自体は2010-01-12から進めない。

## payoutRateBySetting

- 設定1: 97.03%
- 設定2: 98.75%
- 設定3: 100.53%
- 設定4: 103.35%
- 設定5: 106.28%
- 設定6: 110.07%

P-WORLDと旧パチマガスロマガで完全一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: 1/399.61
- 設定2: 1/385.51
- 設定3: 1/372.36
- 設定4: 1/360.09
- 設定5: 1/348.60
- 設定6: 1/327.68

### REG
- 設定1: 1/630.15
- 設定2: 1/606.81
- 設定3: 1/585.14
- 設定4: 1/564.97
- 設定5: 1/546.13
- 設定6: 1/512.00

### ボーナス合算
- 設定1: 1/244.54
- 設定2: 1/235.74
- 設定3: 1/227.56
- 設定4: 1/219.92
- 設定5: 1/212.78
- 設定6: 1/199.80

P-WORLDと旧パチマガスロマガで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

旧パチマガスロマガ「1000円あたりのゲーム数」:
- 全設定共通: **35.70G**

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

ART「ファイヤーラッシュ」: **約+1.5枚/G**

- 通常のファイヤーラッシュは規定G数型ではなく、約1/40の終了抽選に当選するまで継続。
- 「スーパーファイヤーラッシュ」は次回ボーナスまで継続。

P-WORLD、旧パチマガスロマガ、当時遊技通信系記事で整合。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- BIG: 約210〜216枚（規定306枚払い出し）
- REG: 約60枚（規定81枚払い出し）

P-WORLD/当時遊技通信はBIG約210枚、旧パチマガスロマガは約216枚。規定払い出し306枚という定義と矛盾しない実獲得目安差として併記。

confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_ROUNDING_DIFFERENCE

## modeSpecificMinimumData

- ART抽選状態は **通常 / 高確 / 超高確** の3状態。
- 特定役やボーナス中の純ハズレ等で上位状態への移行を抽選し、通常時ベルで転落抽選。
- 高確以上で特定役を引けばART確定、超高確ではスーパーファイヤーラッシュも期待できる。
- ボーナス間 **1200G** 到達後は天井状態となり、その後のスイカまたは1枚役で高確/超高確へ移行。P-WORLDは「スイカor1枚役で必ず高確or超高確」、旧パチマガは「1200Gハマリで特定役を引くと高確or超高確」と説明。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`ファイヤービーク / ファイアービーク / コルモ / 設定変更 / リセット / 朝一 / 天井 / 1200G / 高確 / 超高確` を組み替え、旧パチマガスロマガ（本機に「攻め時・ヤメ時・設定変更時」専用項目が存在することまで確認）、P-WORLD、K-Navi、当時業界記事、旧機種DB、回顧資料まで再探索したが、設定変更時の1200G進捗・内部状態処理を明記する本文を確定回収できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時に1200G天井進捗、通常/高確/超高確、ART状態がどこまで保持されるか本機固有の直接根拠を確定できない。設定変更時の処理自体が未回収なので、対偶で推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の1200G進捗・内部状態・ART状態の保持/初期化について本機固有の直接根拠を確認できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常のボーナス間1200G天井条件は確定しているが、設定変更時に0Gへクリアされるか引き継ぐかは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時はボーナス間1200Gで天井状態。設定変更専用の短縮天井・変更値は確認できず、通常1200Gを設定変更後値として転用しない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確の3状態は確定するが、設定変更時の初期状態・振り分け・再抽選/引継ぎは未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。天井状態、高確/超高確、ART中などの設定変更・据え置き・電断時処理を確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、朝一高確優遇、ART当選率優遇などの公開根拠を確認できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみ失われる天井進捗や状態等を直接確定できないため推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / リール / 初期出目 / 液晶 / ステージ / ランプ / 音 / 設定変更判別` を追加して再探索したが、本機固有の設定変更/据え置き判別法を確定できない。通常時の音によるボーナス/滞在状態示唆は設定変更判別とは別物として混同しない。

numericResetData:
  normalGameCeiling: ボーナス間1200G到達で天井状態、その後スイカ/1枚役で高確or超高確
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

## conflicts

- BIG実獲得目安: P-WORLD/当時遊技通信系記事は約210枚、旧パチマガスロマガは約216枚。306枚払い出し終了という規定と両立するため、丸め/平均獲得表現差として双方保持。
- 導入時期: 複数DBは2010年1月まで一致するが、具体ホール導入日を今回の高信頼資料では確定できず。P-WORLD掲示板には2010-01-05の実戦投稿があるが、正式日付には採用しない。

## missingFields

- releaseDate exact day: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior detail: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. P-WORLD — https://www.p-world.co.jp/machine/database/5772 — 5号機ART、検定番号9S0789、2010年1月導入、BIG/REG/合算/機械割、ART+1.5枚/G、1200G天井、獲得枚数、2010-01-05実戦投稿痕跡 — reliability: INDUSTRY_DATABASE（掲示板日付部分のみ USER_GENERATED_LOW）
2. パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/a.php — ART仕様、3状態、1200G天井高確、BIG/REG獲得性能 — reliability: ANALYSIS_SINGLE_DIRECT
3. パチマガスロマガ 1000円あたりG数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/c.php — 全設定共通35.70G — reliability: ANALYSIS_SINGLE_DIRECT
4. パチマガスロマガ ボーナス/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/h.php — 設定別BIG/REG/合算/機械割 — reliability: ANALYSIS_SINGLE_DIRECT
5. パチマガスロマガ 機種INDEX — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/colmo_slot_06.php — 本機に「攻め時・ヤメ時・設定変更時」専用項目が存在することを確認、具体本文は今回未回収 — reliability: ANALYSIS_ARCHIVE_INDEX
6. K-Navi 演出情報 — https://p-kn.com/slot/1106/direct/ — ART・押し順演出、本機ページの現存確認 — reliability: CONTEMPORARY_ANALYSIS_DATABASE
7. Pマンズ（遊技通信再録） — https://p-mans.blogspot.com/2009/11/ — 2009-11-25発表、3モード、ART+1.5枚/G、BIG約210枚/REG約60枚 — reliability: CONTEMPORARY_INDUSTRY_REPRINT
8. コルモ検定通過機種回顧 — https://q-and-a.hatenablog.com/archive/2016/10/23 — 2009-10-19検定通過記録 — reliability: RETROSPECTIVE_DATABASE
