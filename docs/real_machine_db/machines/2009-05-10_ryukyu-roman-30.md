# 琉球浪漫30

machineName: 琉球浪漫30
formalModelName: 琉球浪漫-30
inspectionNumber: 9S0215
manufacturer: タイヨー
releaseDate: 2009-05-10
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START
releaseDateNote: グリーンべると2009-04-27当時記事が30Φ機を2009-05-10納品開始、兄弟25Φ機を2009-05-31納品開始と明記。本レコードは30Φ機のみを対象とし、P-WORLDの2009年5月導入表示とも整合する。
generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知 / 30Φ沖スロ
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  marketSeries:
    setting1: 97.3%
    setting2: 98.8%
    setting3: 99.9%
    setting4: 103.1%
    setting5: 105.1%
    setting6: 108.4%
  pachimagaSimulated:
    setting1: 97.50%
    setting2: 99.11%
    setting3: 99.93%
    setting4: 103.40%
    setting5: 105.68%
    setting6: 109.33%
  status: CONFLICT
  note: P-WORLDおよび5号機クロニクルの市場掲載系列97.3〜108.4%と、パチマガスロマガのシミュレート97.50〜109.33%に差がある。攻略条件等の定義差を推測せず平均化しない。

initialHitBySetting:
  big:
    setting1: 1/292.6
    setting2: 1/284.9
    setting3: 1/280.1
    setting4: 1/264.3
    setting5: 1/255.0
    setting6: 1/240.1
  reg:
    setting1: 1/439.8
    setting2: 1/428.3
    setting3: 1/420.1
    setting4: 1/397.2
    setting5: 1/383.3
    setting6: 1/360.1
  bonusCombined:
    setting1: 1/175.7
    setting2: 1/171.1
    setting3: 1/168.0
    setting4: 1/158.7
    setting5: 1/153.1
    setting6: 1/144.0
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: 当時グリーンべると記事の合成1/175.7〜1/144.0、P-WORLD、パチマガスロマガで主要値を照合。P-WORLDの合算設定3=1/168.1・設定6=1/144.1は表示丸め差として保持し、精密性の高い旧解析系列を主値にした。

baseGamesPer50:
  setting1: 35.20G
  setting2: 35.52G
  setting3: 35.52G
  setting4: 36.08G
  setting5: 36.44G
  setting6: 36.82G
  status: OLD_ANALYSIS_DIRECT
  sourceDefinition: パチマガスロマガ「1000円あたりのゲーム数」。50枚貸し前提の比較値として保存。

netIncrease:
  status: NOT_APPLICABLE_NORMAL_TYPE
  note: 付加機能を持たないボーナス主体ノーマルタイプで、RT/ART/AT純増の比較項目は非該当。

basicPayout:
  big: 約312枚
  reg: 約130枚
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: グリーンべると当時記事、P-WORLD、パチマガスロマガで一致。

modeSpecificMinimumData:
  - 30Φ完全告知ノーマル。ハイビスカス点滅でボーナス確定。
  - 業界初と紹介されたリール逆回転フリーズを搭載し、発生時はBIG確定。
  - 通常ゲーム数到達型天井、RT/ART/AT、ゲーム数管理モードは確認されない。
  - 25Φ兄弟機「琉球浪漫」は演出・スペック同一と当時業界記事/P-WORLDが説明するが、納品日は2009-05-31で別レコード対象。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名表記揺れ（琉球浪漫30/琉球浪漫-30/琉球浪漫&30）、タイヨー、型式名と「設定変更/リセット/朝一/設定変更時」を組み替え、当時解析・旧DB・回顧資料を再探索したが、本機固有の設定変更時内部処理を直接確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の本機固有内部状態引継ぎを直接説明する資料を確定できず。通常ゲーム数天井は確認されず、天井G数の宵越し問題は非該当。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の内部状態、リール初期位置/表示復帰等を本機固有資料で直接確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
  ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用高低状態等は確認できないが、設定変更時の内部状態処理を断定できる本機固有資料なし。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。機種名/型式/タイヨー/30Φと「ガックン/リールガックン/初期出目/設定変更判別/据え置き」を組み替えて再探索したが、本機固有の客側変更判別根拠を確定できず。
  numericResetData:
    normalCeiling: NOT_APPLICABLE
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE_FOR_NORMAL_CEILING
    resetModeDistribution: NOT_APPLICABLE
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetBehaviorQA: PARTIAL_WITH_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - payoutRate: 市場掲載系列97.3/98.8/99.9/103.1/105.1/108.4%、パチマガシミュレート97.50/99.11/99.93/103.40/105.68/109.33%。平均化しない。
  - bonusCombinedRounding: P-WORLDは設定3=1/168.1・設定6=1/144.1、パチマガは1/168.0・1/144.0。当時業界記事の範囲値は1/175.7〜1/144.0で、丸め表示差として注記。

missingFields:
  - 設定変更時の本機固有内部処理
  - 据え置き時の本機固有内部状態引継ぎ
  - 単純電源OFF→ON時の本機固有復帰挙動
  - ガックン/初期出目等による設定変更判別

sources:
  - url: https://news.p-world.co.jp/articles/3417/greenbelt
    title: リール逆回転でBB確定、タイヨー『琉球浪漫』 / グリーンべると 2009-04-27
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: メーカー、30Φ機、合算範囲、BIG約312枚、REG約130枚、2009-05-10納品開始、25Φ版2009-05-31納品開始、逆回転フリーズ。
  - url: https://www.p-world.co.jp/machine/database/5549
    title: 琉球浪漫30 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 5号機ノーマル/完全告知/沖スロ、型式名琉球浪漫-30、検定番号9S0215、設定別BIG/REG/合算、市場掲載機械割、基本獲得枚数、2009年5月導入。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/h.php
    title: 琉球浪漫&30 ボーナス確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 設定別BIG/REG/合算、シミュレートPAYOUT。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/c.php
    title: 琉球浪漫&30 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 50枚あたり35.20〜36.82G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/a.php
    title: 琉球浪漫&30 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 完全告知、同時成立、BIG約312枚、REG約130枚、逆回転フリーズ。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/taiyo_slot_67.php
    title: 琉球浪漫&30 機種解析トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 攻め時・ヤメ時「特にナシ」の確認。通常天井/特別な狙い目が確認されないことの補助。
  - url: https://5goki.com/taiyo
    title: タイヨー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: SECONDARY_DATABASE
    usedFor: 2009年5月、30Φ独立機、市場掲載機械割系列の再照合。
