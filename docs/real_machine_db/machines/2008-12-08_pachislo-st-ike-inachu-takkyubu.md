# ぱちスロST 行け!稲中卓球部

machineName: ぱちスロST 行け!稲中卓球部
manufacturer: サミー
releaseDate: 2008-12-08
releaseDatePrecision: DAY_CONFIRMED_MULTIPLE_SOURCES
modelName: ぱちスロST 行け!稲中卓球部
modelNumber: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
identityStatus: TITLE_MANUFACTURER_CONFIRMED_MODEL_UNVERIFIED
generation: 5号機
systemType: ボーナス + RT（ぱちスロST / 1ライン）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  marketPublishedSeries:
    setting1: 97.5%
    setting2: 99.5%
    setting3: 102.5%
    setting4: 105.0%
    setting5: 106.5%
    setting6: 110.0%
  pachimagaSimulation:
    setting1: 97.29%
    setting2: 99.63%
    setting3: 103.28%
    setting4: 106.07%
    setting5: 108.09%
    setting6: 111.85%
  status: CONFLICT
  note: P-WORLD/Pachibee/2008年更新5号機wikiの市場掲載系列と、パチマガスロマガのシミュレート値が設定3以降で明確に異なる。算出条件差の可能性があるため平均化せず別系列で保持。

initialHitBySetting:
  middleBonusPlusRT:
    setting1: 1/218.45
    setting2: 1/202.90
    setting3: 1/186.18
    setting4: 1/177.12
    setting5: 1/165.49
    setting6: 1/152.41
  middleBonus:
    setting1: 1/220.66
    setting2: 1/203.53
    setting3: 1/218.45
    setting4: 1/178.09
    setting5: 1/220.66
    setting6: 1/168.04
  combined:
    setting1: 1/109.78
    setting2: 1/101.61
    setting3: 1/100.52
    setting4: 1/88.80
    setting5: 1/94.57
    setting6: 1/79.92
  status: ANALYSIS_HIGH_MULTIPLE_SOURCES
  note: P-WORLD、Pachibee、パチマガスロマガ、2008年更新5号機wikiで整合。グリーンべると/K-Naviの設定1約1/109.8・設定6約1/79.9とも一致。

baseGamesPer50:
  bySetting:
    setting1: 34.47G
    setting2: 34.46G
    setting3: 35.19G
    setting4: 35.44G
    setting5: 35.40G
    setting6: 36.43G
  status: ANALYSIS_HIGH
  note: パチマガスロマガ掲載の1000円あたりゲーム数。

basicPayout:
  middleBonusPlusRT:
    regulatedEnd: 144枚を超える払い出しで終了
    netCoins: 約102枚 + RT
  middleBonus:
    regulatedEnd: 144枚を超える払い出しで終了
    netCoins: 約102枚
  industryAnnouncementNetCoins: 約104枚
  status: CONFLICT_ROUNDING_OR_DEFINITION
  note: P-WORLD/Pachibee/パチマガスロマガは純増約102枚、2008年当時グリーンべるとはミドルボーナス純増約104枚。丸め/算出定義差の可能性があるため両方保持。

netIncrease:
  rt:
    name: イタズラタイム
    value: 約+0.5枚/G
    averageContinuation: 約40G
    continuation: 特殊リプレイ入賞まで（ボーナス成立でも終了条件に含まれる当時業界説明あり）
    entry: 液晶上の7揃いボーナス後、またはペーポーチャンスで2人捕まえた場合
  status: INDUSTRY_AND_ANALYSIS_HIGH
  note: グリーンべると、K-Navi、P-WORLD/Pachibeeで約+0.5枚/G。K-Navi/P-WORLDで平均約40Gを照合。

modeSpecificMinimumData:
  rt:
    name: イタズラタイム
    averageContinuation: 約40G
    netIncrease: 約+0.5枚/G
    entry:
      - 液晶で7揃いとなるボーナス後
      - ペーポーチャンスで2人捕まえた場合
    end:
      - 特殊リプレイ入賞
      - ボーナス当選（当時グリーンべると説明）
  bonusStructure:
    note: 実ボーナスはミドルボーナス系。液晶上の見せ方によりRT付きボーナス/通常MB/ペーポーチャンスとして体感上を分ける。
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 機種名・メーカー・シリーズ名と「天井」「天井RT」「救済」「朝一」「リセット」を組み替え、当時解析・業界DB・回顧資料を横断したが、通常ゲーム数到達による天井/救済RTの機種固有根拠は回収できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名の表記揺れ、サミー、ぱちスロST、設定変更/リセット/朝一/据え置き/電源OFF ON/RT/天井/ガックンを組み替えて再探索したが、本機固有の設定変更時RT状態・内部状態処理を直接説明する資料を回収できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のRT状態やボーナス後状態の扱いを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみでRT/内部状態がどう扱われるか直接資料なし。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED。通常ゲーム数天井/救済カウンタは十分な再探索後も確認できず。設定変更時の一般的な遊技ゲーム数表示処理を推測補完しない。
  ceilingAfterReset: NOT_APPLICABLE_NO_NUMERIC_CEILING_CONFIRMED。設定変更専用の短縮天井や朝一天井数値は確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード/設定変更時モード再抽選の本機固有根拠なし。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT/ボーナス後状態を含む設定変更時内部状態の直接資料なし。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時限定のRT優遇、当選率優遇、短縮天井等は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示、朝一挙動による本機固有の変更判別情報を再探索後も確定できず。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: RESET_RESEARCH_COMPLETED_NO_MACHINE_SPECIFIC_RESET_RULE_CONFIRMED

conflicts:
  - 機械割: 市場掲載系列97.5/99.5/102.5/105.0/106.5/110.0% vs パチマガスロマガ・シミュレート97.29/99.63/103.28/106.07/108.09/111.85%。平均化しない。
  - ミドルボーナス純増: P-WORLD/Pachibee/パチマガスロマガ約102枚 vs 当時グリーンべると約104枚。丸め/定義差の可能性を保持。

missingFields:
  - 正式型式名
  - 検定番号
  - 設定変更時のRT/内部状態処理
  - 据え置き時のRT/内部状態引継ぎ
  - 電源OFF→ONのみのRT/内部状態処理
  - ガックン/初期出目/表示等の変更判別手段
  - 設定変更専用の公開朝一数値

sources:
  - url: https://www.sammy.co.jp/japanese/products/pachislot/2008/index.html
    title: サミー パチスロ 2008年製品一覧
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: メーカー公式上の機種存在・製品名の確認。ページ記載日付はホール導入日とは扱わない。
  - url: https://www.all7.jp/plans/index/2008/12/10
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE
    usedFor: サミー、2008-12-08導入予定。
  - url: https://www.pachibee.jp/machines/index/211040015
    title: ぱちすろST 行け!稲中卓球部 / Pachibee
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 2008-12-08導入日、MB+RT/MB約102枚、RT約+0.5枚/G・平均約40G、設定別合算・市場掲載機械割。
  - url: https://web-greenbelt.jp/00003914/
    title: サミー、ST系パチスロ2機種を同時発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 当時発表、MB約104枚、合算設定1約1/109.8～設定6約1/79.9、RTイタズラタイム約+0.5枚/G、突入/終了構造、2008-12-07納品開始予定。
  - url: https://p-kn.com/topics/exhibition/399/
    title: ぱちスロST 行け!稲中卓球部 内覧会 / K-Navi
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_ANALYSIS
    usedFor: 2008-11-06内覧会、12月上旬導入予定、大当たり端値、RT平均約40G。
  - url: https://www.p-world.co.jp/machine/database/5388
    title: ぱちスロST行け!稲中卓球部 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 設定別MB+RT/MB/合算、市場掲載機械割、144枚超払い出し/約102枚、RT約+0.5枚/G・平均約40G、突入/終了契機。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/115/a.php
    title: ぱちスロST 行け!稲中卓球部 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: RT/1ライン、ボーナス約102枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/115/h.php
    title: ぱちスロST 行け!稲中卓球部 ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別MB+RT/MB/合算、シミュレート機械割。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/115/c.php
    title: ぱちスロST 行け!稲中卓球部 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたり34.47～36.43G。
  - url: https://w.atwiki.jp/5gouki/pages/135.html
    title: 行け！稲中卓球部 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_2008_UPDATED_DATABASE
    usedFor: 設定別MB+RT/MB/合算、市場掲載機械割の補助照合。最終更新2008-12-11。
