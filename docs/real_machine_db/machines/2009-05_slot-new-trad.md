# スロットニュートラッド

machineName: スロットニュートラッド
formalModelName: スロットニュートラッド
inspectionNumber: 8S1107
manufacturer: 岡崎産業
releaseDate: 2009-05
releaseDatePrecision: MONTH_WITH_CONTEMPORARY_MID_MONTH_PLAN
releaseDateNote: K-Naviの2009-03-24当時記事がホール導入を2009年5月中旬予定と明記。岡崎産業の2009-05-15プレスリリースは同日から発売記念イベントを開催し、P-WORLDも導入開始2009年05月とする。P-WORLD掲示板には5月17日時点で初打ち報告があるが、個別店舗導入日から全国導入開始日を逆算せず、本DBでは2009-05（月精度・中旬予定）を保持する。
generation: 5号機
systemType: ノーマル / A+RT / 単純告知
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pworld:
    setting1: 97.5%
    setting2: 98.1%
    setting3: 101.0%
    setting4: 103.4%
    setting5: 106.2%
    setting6: 110.1%
  knavi:
    setting1: 97.20%
    setting2: 98.03%
    setting3: 100.70%
    setting4: 103.17%
    setting5: 106.12%
    setting6: 109.89%
  pachimagaSimulated:
    setting1: 97.31%
    setting2: 98.33%
    setting3: 101.32%
    setting4: 104.12%
    setting5: 107.33%
    setting6: 112.01%
  status: CONFLICT
  note: P-WORLD/K-Naviの市場掲載系列は近いが完全一致せず、パチマガスロマガのシミュレートPAYOUTは設定4〜6で差が拡大する。算出条件/定義差を推測で統合せず3系列を保持し平均しない。

initialHitBySetting:
  big:
    setting1: 1/344.93
    setting2: 1/337.81
    setting3: 1/318.14
    setting4: 1/300.62
    setting5: 1/283.71
    setting6: 1/265.33
  bgReg:
    setting1: 1/461.52
    setting2: 1/445.82
    setting3: 1/414.78
    setting4: 1/378.82
    setting5: 1/354.25
    setting6: 1/306.24
  bonusCombined:
    setting1: 1/197.40
    setting2: 1/192.19
    setting3: 1/180.04
    setting4: 1/167.61
    setting5: 1/157.54
    setting6: 1/142.16
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: K-Naviとパチマガスロマガの精密値が一致し、P-WORLDの丸め値とも整合。

baseGamesPer50:
  setting1: 37.97G
  setting2: 38.13G
  setting3: 38.33G
  setting4: 38.34G
  setting5: 38.59G
  setting6: 38.98G
  status: OLD_ANALYSIS_DIRECT
  sourceDefinition: パチマガスロマガ「1000円あたりのゲーム数」。50枚貸し前提の比較値として保存。

netIncrease:
  rt: UNVERIFIED_AFTER_RESEARCH
  note: BIG後50GのRT搭載は複数資料で確定したが、物差し比較に使える純増枚/Gの直接数値を「スロットニュートラッド/ニュートラッド/岡崎産業」と「RT純増/純増枚/1Gあたり/増加枚数」を組み替えて再探索しても確定できず、推定しない。

basicPayout:
  big: 約250〜252枚
  bgReg: 約150枚
  status: CROSSCHECKED_ROUNDING_DIFFERENCE
  note: P-WORLDはBIG約252枚/BG約150枚、パチマガスロマガはBIG約250枚/REG150枚。BIGは丸め表現差として両方保持。規定払い出しはBIG350枚超、BG/REG168枚超で終了。

modeSpecificMinimumData:
  - BIG後は必ず50GのRTへ突入。P-WORLDとパチマガスロマガで一致。
  - RTはパンク回避等の難しい目押し不要とP-WORLDが説明。
  - 7セグの奇数ゾロ目でBIG、偶数ゾロ目でBG/REGを告知する単純告知系。
  - 通常ゲーム数到達型の天井、ゲーム数管理モード、朝一専用モードは本DB物差し範囲で確認できない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名・正式型式名・岡崎産業・トラッド系と「設定変更/リセット/朝一/設定変更時/RT」を組み替え、パチマガの「攻め時・ヤメ時・設定変更時」項目を含めて再探索したが、設定変更時にBIG後RT残G/RT状態がどう処理されるかを直接確定できる本文を回収できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。本機はBIG後50G RTを持つため、据え置き時に前日RT残G/状態を引き継ぐかは物差し上意味があるが、本機固有の直接資料を確定できず。一般的な5号機の電断挙動から推定しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のBIG後RT残G/状態、リール初期位置、告知表示等の本機固有復帰挙動を直接確定できず。
  gameCounterReset: NOT_APPLICABLE_FOR_NORMAL_GAME_COUNT_CEILING。通常ゲーム数天井は確認できない。ACTIVE_RT_REMAINING_GAMES_AFTER_SETTING_CHANGEはUNVERIFIED_AFTER_RESEARCH。
  ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_NO_NORMAL_GAME_MODE_SYSTEM_CONFIRMED_FOR_YARDSTICK_SCOPE
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH_FOR_ACTIVE_RT_STATE。通常時高低状態等は確認できないが、設定変更時のRT状態処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/岡崎産業と「ガックン/リールガックン/初期出目/朝一/設定変更判別/据え置き」を組み替えて再探索したが、本機固有の変更判別根拠を確定できず。
  numericResetData:
    normalCeiling: NOT_APPLICABLE
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE_FOR_NORMAL_CEILING
    rtLengthAfterBig: 50G
    rtRemainingGamesAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
    rtRemainingGamesAfterPowerCycle: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: NOT_APPLICABLE
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT_AND_RT_NET_INCREASE_UNVERIFIED
resetBehaviorQA: PARTIAL_WITH_RT_RESET_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - payoutRate: P-WORLD 97.5/98.1/101.0/103.4/106.2/110.1%、K-Navi 97.20/98.03/100.70/103.17/106.12/109.89%、パチマガシミュレート 97.31/98.33/101.32/104.12/107.33/112.01%。平均化しない。
  - bigNetPayoutRounding: P-WORLD約252枚、パチマガ約250枚。規定払い出し350枚超終了は整合するため表示丸め差として保持。

missingFields:
  - RT純増枚/Gの比較可能な直接値
  - 設定変更時のBIG後RT残G/RT状態処理
  - 据え置き時のRT残G/状態引継ぎ
  - 単純電源OFF→ON時のRT残G/状態・リール/表示復帰
  - ガックン/初期出目等による設定変更判別

sources:
  - url: https://www.dreamnews.jp/press/0000006886/
    title: 数々の名機を世に送り出した「尚球社ブランド」完全復活！ 新筐体「V-モデル・スロットニュートラッド」発売記念 / 岡崎産業プレスリリース
    retrievedAt: 2026-09-02
    confidence: OFFICIAL_PRESS_RELEASE
    usedFor: 岡崎産業、トラッド正統後継、2009-05-15発売記念イベント。
  - url: https://p-kn.com/topics/news/777/
    title: 尚球社ブランド第1弾!新機種「スロットニュートラッド」登場! / K-Navi
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: 2009-03-24発表、ホール導入2009年5月中旬予定、新筐体V-MODEL。
  - url: https://www.p-world.co.jp/machine/database/5522
    title: スロットニュートラッド / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 5号機ノーマル+RT、BIG約252枚/BG約150枚、BIG後50G RT、設定別確率・機械割、型式名、検定番号8S1107、導入2009年05月。
  - url: https://p-kn.com/slot/958/
    title: スロットニュートラッド / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/BG/合算、機械割。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/59/a.php
    title: スロットニュートラッド 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: ノーマル/同時成立/RT、BIG後50G RT、BIG約250枚、REG150枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/59/h.php
    title: スロットニュートラッド ボーナス確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 設定別BIG/REG/合算、シミュレートPAYOUT系列。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/59/c.php
    title: スロットニュートラッド 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 50枚あたり37.97〜38.98G。
