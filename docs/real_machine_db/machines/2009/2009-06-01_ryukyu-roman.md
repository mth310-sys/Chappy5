# 琉球浪漫

machineName: 琉球浪漫
formalModelName: 琉球浪漫
inspectionNumber: 9S0316
manufacturer: タイヨー
releaseDate: 2009-06-01
releaseDatePrecision: ANALYSIS_CALENDAR_EXACT_WITH_DELIVERY_DAY_PRECEDING
releaseDateNote: K-Naviの全国一斉導入カレンダーは2009-06-01を掲載。当時グリーンべるとは25φ兄弟機の納品開始を2009-05-31と報道し、P-WORLDは2009年05月導入開始と表示する。日付定義を混ぜず、本DB主値は全国一斉導入開始日の2009-06-01、納品開始日は補助値2009-05-31として保持する。
generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知 / 25Φ
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
  status: CONFLICT_BY_DEFINITION
  note: P-WORLDの市場掲載系列と、パチマガスロマガのシミュレートPAYOUT系列は定義を混ぜず別保存。25φはP-WORLDが30φと内部仕様同一、当時グリーンべるとも演出・スペック同一と明記するため、25φ固有ページの市場値と共通解析ページを照合して採用。

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
  pWorldDisplayedCombined:
    setting1: 1/175.7
    setting2: 1/171.1
    setting3: 1/168.1
    setting4: 1/158.7
    setting5: 1/153.1
    setting6: 1/144.1
  status: ANALYSIS_HIGH_CROSSCHECKED_WITH_ROUNDING_DIFFERENCE
  note: P-WORLD 25φ固有ページ、当時業界記事、パチマガスロマガ共通解析で照合。合算設定3/6の0.1差は表示丸め差として双方を保持する。

baseGamesPer50:
  setting1: 35.20G
  setting2: 35.52G
  setting3: 35.52G
  setting4: 36.08G
  setting5: 36.44G
  setting6: 36.82G
  status: OLD_ANALYSIS_DIRECT_SHARED_SPEC_CONFIRMED
  sourceDefinition: パチマガスロマガ「琉球浪漫&30」1000円あたりのゲーム数。P-WORLDと当時業界記事が25φ/30φ内部スペック同一と明記するため25φにも適用。

netIncrease:
  status: NOT_APPLICABLE_NORMAL_TYPE
  note: P-WORLDは付加機能非搭載のノーマルタイプと明記。RT/ART/AT純増は非該当。

basicPayout:
  big: 約312枚
  reg: 約130枚
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: 当時グリーンべると、P-WORLD 25φ固有ページ、パチマガスロマガ共通解析で一致。

modeSpecificMinimumData:
  - 25Φ完全告知ノーマル。ハイビスカス点滅でボーナス確定。
  - P-WORLDは「琉球浪漫-30の25パイ仕様」で、逆回転フリーズやボーナス確率など内部仕様は30φと同じと明記。
  - 当時グリーンべるとも25φ兄弟機について「演出やスペックは同じ」と報道。
  - 通常ゲーム数到達型天井、RT/ART/AT、ゲーム数管理モードは確認されない。
  - 30Φ「琉球浪漫30」は2009-05-10納品開始の別レコード `2009-05-10_ryukyu-roman-30.md`。25φと30φを同一レコードにはしない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。琉球浪漫/琉球浪漫25/琉球浪漫&30/タイヨー/型式名と「設定変更/リセット/朝一/設定変更時」を組み替え、旧解析・DB・回顧資料を再探索したが、本機固有の設定変更時内部処理を直接確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き/宵越しを再探索したが、本機固有の内部状態引継ぎを直接説明する資料を確定できず。通常ゲーム数天井は確認されず、天井G数の宵越しは非該当。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON/電断時の初期出目・内部状態・表示復帰等を本機固有資料で確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
  ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用高低状態等は確認できないが、設定変更時の内部状態処理を断定できる本機固有資料なし。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。短縮天井・朝一RT・設定変更専用当選率優遇などは確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/リールガックン/初期出目/設定変更判別/据え置きを表記揺れと組み替えて再探索したが、本機固有の確定的判別根拠を回収できず。
  numericResetData:
    normalCeiling: NOT_APPLICABLE
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE_FOR_NORMAL_CEILING
    resetModeDistribution: NOT_APPLICABLE
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT_AND_RELEASE_DATE_DEFINITION_SPLIT
resetBehaviorQA: PARTIAL_WITH_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_STATE_AND_DETECTION_UNVERIFIED

conflicts:
  - releaseDateDefinition: 当時業界記事は25φ納品開始2009-05-31、K-Naviは全国一斉導入開始2009-06-01、P-WORLDは月精度2009年05月。矛盾として潰さず日付定義を分離して保持。
  - payoutRate: 市場掲載97.3/98.8/99.9/103.1/105.1/108.4% と旧パチマガのシミュレート97.50/99.11/99.93/103.40/105.68/109.33%。平均化しない。
  - bonusCombinedRounding: P-WORLDは設定3=1/168.1・設定6=1/144.1、旧解析系列は1/168.0・1/144.0。表示丸め差として保持。

missingFields:
  - 設定変更時の本機固有内部処理
  - 据え置き時の本機固有内部状態引継ぎ
  - 単純電源OFF→ON時の本機固有復帰挙動
  - ガックン/初期出目等による設定変更判別
  - 設定変更専用の公開朝一数値

sources:
  - url: https://p-kn.com/calendar/200906/
    title: パチンコ・パチスロ新台導入カレンダー 2009年6月 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_CALENDAR
    usedFor: 2009-06-01全国一斉導入開始日。
  - url: https://news.p-world.co.jp/articles/3417/greenbelt
    title: リール逆回転でBB確定、タイヨー『琉球浪漫』 / グリーンべると 2009-04-27
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: 25φ兄弟機、演出・スペック30φと同一、25φ納品2009-05-31、合算範囲、BIG約312枚、REG約130枚。
  - url: https://www.p-world.co.jp/machine/database/5558
    title: 琉球浪漫25 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: タイヨー、5号機ノーマル/完全告知、型式琉球浪漫、検定9S0316、25φ仕様、30φとの内部仕様同一、設定別BIG/REG/合算、市場掲載機械割、獲得枚数、2009年05月導入表示。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/c.php
    title: 琉球浪漫&30 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 50枚あたり35.20〜36.82G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/a.php
    title: 琉球浪漫&30 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 完全告知、BIG約312枚、REG約130枚、逆回転フリーズ。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/h.php
    title: 琉球浪漫&30 ボーナス確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 設定別BIG/REG/合算、シミュレートPAYOUT。30φと25φの内部仕様同一はP-WORLD/当時業界記事で別途確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/67/taiyo_slot_67.php
    title: 琉球浪漫&30 機種解析トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 攻め時・ヤメ時に特別項目が確認されないことの補助。

researchNote:
  - 30φ既存レコードを先に再読し、25φを重複扱いせず型式・検定番号・納品日を分離した。
  - resetBehavior欠損判定前に、機種名の25/30/記号表記揺れ、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/電断/ガックン/初期出目/設定変更判別を組み替えて再探索。
  - 本機は付加機能非搭載ノーマルで通常天井を確認できないため、天井短縮や有利区間を推測追加していない。
