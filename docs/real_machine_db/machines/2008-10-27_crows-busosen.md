# パチスロクローズ武装戦線

machineName: パチスロクローズ武装戦線
manufacturer: トリビー
releaseDate: 2008-10-27
releaseDatePrecision: INDUSTRY_DATABASE_SCHEDULED_INTRODUCTION_DATE
modelName: パチスロクローズ武装戦線
modelNumber: パチスロ クローズ R
modelNumberStatus: RETROSPECTIVE_PUBLIC_RECORD
modelNameNote: 2008年のトリビー検定通過一覧に「パチスロ クローズ R」を確認。2008年10月導入の「クローズ武装戦線」と対応する後期型式として扱うが、現存するメーカー公式一次資料を回収できていないためOFFICIAL扱いにはしない。
generation: 5号機
systemType: ボーナス+CZ+100G RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  sourceA_simulated:
    setting1: 98.02%
    setting2: 100.22%
    setting3: 102.50%
    setting4: 104.55%
    setting5: 106.60%
    setting6: 108.59%
    source: パチマガスロマガ（シミュレート値）
  sourceB_retrospective:
    setting1: 97.0%
    setting2: 99.0%
    setting3: 102.0%
    setting4: 104.0%
    setting5: 107.0%
    setting6: 110.0%
    source: 5号機クロニクル
  status: CONFLICT
  note: 設定1〜6で最大約1.4ptの差があるため平均せず別系列として保持。

initialHitBySetting:
  BIG:
    setting1: 1/332.67
    setting2: 1/319.69
    setting3: 1/306.24
    setting4: 1/296.54
    setting5: 1/287.44
    setting6: 1/277.69
  REG:
    setting1: 1/574.88
    setting2: 1/532.81
    setting3: 1/481.88
    setting4: 1/445.82
    setting5: 1/404.54
    setting6: 1/390.10
  bonusCombined:
    setting1: 1/210.73
    setting2: 1/199.80
    setting3: 1/187.25
    setting4: 1/178.09
    setting5: 1/168.04
    setting6: 1/162.22
  status: ANALYSIS_HIGH
  note: パチマガスロマガ。BIGは赤7/青7、REGは赤/青REGを合算した値。

baseGamesPer50:
  setting1: 35.39G
  setting2: 35.76G
  setting3: 35.88G
  setting4: 36.21G
  setting5: 36.33G
  setting6: 36.71G
  status: ANALYSIS_HIGH
  note: パチマガスロマガの「1000円あたりのゲーム数」。

netIncrease:
  RT: UNVERIFIED_AFTER_RESEARCH
  note: RT「クローズチャンス」が100G継続することは確認できたが、比較可能な純増枚数/Gを現存資料から直接確定できず。旧「パチスロクローズ」の無限ART約0.9枚/Gは別機種なので流用しない。

basicPayout:
  BIG: 約312枚
  REG: 約117枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガで規定払い出しBIG345枚（純増約312枚）、REG120枚（純増約117枚）を確認。

modeSpecificMinimumData:
  structure: 通常時はステップアップリプレイで「春道モード」「P.A.Dモード」「武装モード」等へ移行し、スペシャルリプレイ成立でRT突入を狙うCZ/モード構造。
  rtName: クローズチャンス
  rtDuration: 100G
  rtNetIncrease: UNVERIFIED_AFTER_RESEARCH
  normalCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  note: 100G RTは後年回顧資料とパチマガの基本システムで整合。通常ゲーム数天井やボーナス間天井は今回確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/メーカー名と「設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・RT・CZ・モード」を組み替え、当時解析・旧DB・回顧資料を横断したが、本機固有の設定変更時初期モード/CZ/RT状態を直接確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に春道/P.A.D/武装モード、CZ相当状態、RT残Gをどのように保持するか直接資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみの場合のモード/CZ/RT残状態・初期出目処理を確定できず。
  gameCounterReset: NOT_APPLICABLE_FOR_NORMAL_CEILING / UNVERIFIED_FOR_RT_REMAINING_GAMES。通常ゲーム数天井は確認されず。RT残Gの設定変更/電断時処理は未確定。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常天井およびリセット専用短縮天井は確認なし。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時モード構造は存在するが、設定変更時の初期モード振り分け/固定先を直接確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT/CZ相当状態の設定変更時処理を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用短縮・RT/CZ優遇・専用当選率などの公開恩恵を確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、背景/モード、液晶表示等を含め再探索したが、本機固有の変更判別条件を確定できず。
  numericResetData:
    resetCeilingGameCount: NOT_APPLICABLE_OR_NONE_CONFIRMED
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_EXCEPT_RT_NET_INCREASE_WITH_PAYOUT_RATE_CONFLICT
resetBehaviorQA: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_RESET_STATE

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: パチマガスロマガ simulation 98.02/100.22/102.50/104.55/106.60/108.59%
    sourceB: 5号機クロニクル 97.0/99.0/102.0/104.0/107.0/110.0%
    handling: 定義または攻略条件差の可能性があるため平均せず併記。

missingFields:
  - RT「クローズチャンス」の比較可能な純増/G
  - 設定変更時の初期モード/CZ/RT状態
  - 据え置き/電源OFF→ON時のモード・RT残状態処理
  - ガックン/初期出目等の設定変更判別
  - 朝一専用恩恵/不利および公開朝一数値

sources:
  - url: https://www.all7.jp/plans/index/2008/10
    title: 2008年10月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: パチスロクローズ武装戦線の導入予定日2008-10-27、メーカー表記トリビー。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/11/a.php
    title: クローズ武装戦線 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: RT/CZ/同時成立、BIG約312枚、REG約117枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/11/h.php
    title: クローズ武装戦線 ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算、シミュレート機械割98.02〜108.59%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/11/c.php
    title: クローズ武装戦線 小役・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたり35.39〜36.71G。
  - url: https://5goki.com/trivy
    title: トリビー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年10月導入、設定別機械割97.0〜110.0%。
  - url: https://q-and-a.hatenablog.com/entry/2016/10/06/114509
    title: トリビーの検定通過機種を教えて / Q&A
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_PUBLIC_RECORD
    usedFor: 2008年6月検定通過「パチスロ クローズ R」型式名候補。武装戦線の後期型式との対応を補助確認。
  - url: https://www.marimo0925.net/pachislot-kikaiwari-ranking-close-ban/
    title: クローズシリーズ歴代機械割ランキング
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SINGLE
    usedFor: 100G RT「クローズチャンス」、春道/P.A.D/武装モード構造の補助確認。
