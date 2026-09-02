# ヴァンパイア

machineName: ヴァンパイア
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: エンターライズ
releaseDate: 2009-07-06
releaseDatePrecision: EXACT_CONTEMPORARY_CROSSCHECKED
releaseDateNote: 2009年当時の業界史料で2009-07-06発売、当時導入一覧でも2009-07-06導入。5号機クロニクル/P-WORLDは2009年7月。
generation: 5号機
systemType: ボーナス+周期CZ+ART / パンク回避 / ナビストック
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.3%
  setting2: 99.0%
  setting3: 103.5%
  setting4: 106.2%
  setting5: 109.3%
  setting6: 117.6%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、旧パチマガスロマガ、5号機クロニクルで一致。

initialHitBySetting:
  blue7Big:
    setting1: 1/1638.40
    setting2: 1/1638.40
    setting3: 1/1638.40
    setting4: 1/1638.40
    setting5: 1/1638.40
    setting6: 1/1638.40
  vampireBonusCombined:
    setting1: 1/448.88
    setting2: 1/425.56
    setting3: 1/404.54
    setting4: 1/376.64
    setting5: 1/352.34
    setting6: 1/315.08
  regCombined:
    setting1: 1/455.11
    setting2: 1/431.16
    setting3: 1/409.60
    setting4: 1/381.02
    setting5: 1/356.17
    setting6: 1/318.14
  combined:
    setting1: 1/198.59
    setting2: 1/189.41
    setting3: 1/181.04
    setting4: 1/169.78
    setting5: 1/159.84
    setting6: 1/144.35
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: 旧パチマガ精密値を主値としP-WORLD丸め値と整合。

baseGamesPer50:
  setting1: 31.96G
  setting2: 32.04G
  setting3: 32.06G
  setting4: 32.09G
  setting5: 32.11G
  setting6: 32.22G
  status: ANALYSIS_SINGLE_OLD_MAJOR
  note: 旧パチマガスロマガの1000円あたりゲーム数。別系統同一精度値は今回未確認。

netIncrease:
  demonsTime: 約+1.0枚/G
  status: ANALYSIS_AND_INDUSTRY_CROSSCHECKED

basicPayout:
  blue7Big: 約292枚
  vampireBonus: 約206枚
  reg: 約50枚
  status: ANALYSIS_AND_INDUSTRY_CROSSCHECKED

modeSpecificMinimumData:
  - ART「DEMONS TIME」は1セット50G、純増約1枚/G。
  - BIG/VB中の青7揃いでARTナビをストック。P-WORLDでは青7BIG中の青7揃いは約85%と説明。
  - ボーナス後または周期ゲーム数消化でCZへ移行し、特殊リプレイ入賞でARTへ突入する構造。
  - 周期は単純な80G固定表現ではなく、後年整理資料ではチェリー後78G、3択10枚役取りこぼし後83Gで高確へ移行。これはボーナス/ART確定天井ではない。
  - 通常ゲーム数到達で当たりを保証する天井は非搭載として扱う。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。旧パチマガに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認したが、設定変更時の周期進捗・CZ・ナビストック・ART状態の具体本文を回収できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の78/83G周期進捗、CZ/ART、ナビストックの引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の周期進捗、CZ/ART、ナビストック、初期出目/表示状態を直接確認できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常当選天井は非搭載だが、周期CZ用ゲーム進捗の設定変更時リセット/引継ぎは未確定。
  ceilingAfterReset: NOT_APPLICABLE_NO_BONUS_OR_ART_GUARANTEE_CEILING_CONFIRMED
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード/設定変更専用モード振分は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/高確/ART・ナビストック状態を一般的5号機仕様から補間しない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶、周期ゲーム数等による本機固有の設定変更/据え置き判別根拠を確定できず。
  numericResetData:
    normalCeiling: NONE_CONFIRMED。78/83G周期の高確移行は当選保証天井ではない。
    resetSpecificCeiling: NOT_APPLICABLE_NO_GUARANTEE_CEILING
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_FORMAL_MODEL_UNVERIFIED_AND_BASE_SINGLE_SOURCE
resetBehaviorQA: COMPLETE_RESEARCH_PASS_RESET_CARRY_POWER_CYCLE_PERIODIC_COUNTER_STATE_AND_DETECTION_UNVERIFIED

conflicts:
  - P-WORLDは周期高確移行を「天井」とラベル付けするが、周期到達はボーナス/ART確定ではない。pacnkは「天井機能は非搭載」と整理。DBでは定義差を分離し、78/83G周期高確を救済/周期CZ条件として保持する。

missingFields:
  - 正式型式名・検定番号の直接根拠
  - 50枚ベースの別系統同一精度照合
  - 設定変更/据え置き/電源OFF→ON時の周期進捗、CZ/ART、ナビストック状態
  - ガックン/初期出目/液晶/周期挙動等による変更判別
  - 設定変更専用の公開朝一数値

sources:
  - url: https://www.p-world.co.jp/machine/database/5566
    title: ヴァンパイア / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: エンターライズ、5号機、ART、青7BIG約292枚/VB約206枚/REG約50枚、約1枚/G、設定別ボーナス確率・機械割、周期高確の概要。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/02/a.php
    title: ヴァンパイア 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_MAJOR_ANALYSIS
    usedFor: 周期CZ、DEMONS TIME 1セット50G・純増1枚/G、基本獲得枚数。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/02/h.php
    title: ヴァンパイア ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_MAJOR_ANALYSIS
    usedFor: 設定別青7BIG/VB/REG/合算、機械割。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/02/c.php
    title: ヴァンパイア 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_MAJOR_ANALYSIS
    usedFor: 50枚ベース31.96〜32.22G。
  - url: https://5goki.com/enterrise
    title: エンターライズ 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009年7月導入、機械割97.3〜117.6%の別系統照合。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ARCHIVE
    usedFor: 2009-07-06発売、約80G周期CZ、ART 50G・1.0枚/G、設定6機械割117.6%。
  - url: https://slotkaiseki777.blog102.fc2.com/blog-entry-515.html
    title: 最新スロットホール導入日掲載
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY
    usedFor: 2009-07-06導入日の別系統照合。
  - url: https://pacnk.com/slot/tools/sh_vanpire.html
    title: ヴァンパイア 設定判別・天井 / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS
    usedFor: 天井非搭載の定義、チェリー後78G/3択10枚役取りこぼし後83Gで高確移行、周期到達が当選保証ではないこと。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、旧INDEX、LATEST_HANDOFF、391ビガーVを再取得。LATEST_HANDOFFがINDEXより新しいため391件地点を正本として継続。
  - 「ヴァンパイア / Vampire / エンターライズ」と「型式/検定番号/設定変更/リセット/朝一/据え置き/電源OFF ON/天井/天井短縮/モード/ガックン/1000円/50枚」を組み替えて再探索。
  - P-WORLD、旧パチマガ、5号機クロニクル、2009年当時業界史料、後年解析DBを横断。性能コアは複数照合できたが、正式型式/検定番号とresetBehaviorの設定変更・電断具体挙動は直接根拠を確定できず推測しない。
