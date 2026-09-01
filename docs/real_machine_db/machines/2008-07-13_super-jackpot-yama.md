# スーパージャックポット（2008 / ヤーマ）

machineName: スーパージャックポット
manufacturer: ヤーマ
releaseDate: 2008-07-13
releaseDatePrecision: DAY_DELIVERY_SCHEDULE_CONFIRMED_BY_CONTEMPORARY_INDUSTRY_NEWS
modelName: スーパージャックポットN
generation: 5号機
systemType: ボーナス + 天井RT / 完全告知 / 同時成立あり
payoutRateBySetting:
  pWorldPublished:
    setting1: 97.0%
    setting2: 98.5%
    setting3: 101.0%
    setting4: 103.5%
    setting5: 106.0%
    setting6: 108.0%
    confidence: ANALYSIS_DATABASE_HIGH
  retrospectiveAnalysis:
    setting1: 98.71%
    setting2: 101.01%
    setting3: 103.51%
    setting4: 104.80%
    setting5: 106.06%
    setting6: 107.15%
    confidence: RETROSPECTIVE_ANALYSIS
  status: CONFLICT_PAYOUT_DEFINITION_OR_ANALYSIS_METHOD
  note: P-WORLD/当時業界系97〜108%と後年解析98.71〜107.15%は一致しない。平均せず別系列保持。
initialHitBySetting:
  big:
    setting1: 1/292.57
    setting2: 1/277.69
    setting3: 1/268.59
    setting4: 1/264.26
    setting5: 1/260.06
    setting6: 1/256.00
  reg:
    setting1: 1/399.61
    setting2: 1/372.36
    setting3: 1/341.33
    setting4: 1/327.68
    setting5: 1/327.68
    setting6: 1/315.08
  combinedPublishedApprox:
    setting1: 約1/168
    setting6: 約1/141
  confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_CONTEMPORARY_INDUSTRY_ENDPOINTS
baseGamesPer50:
  publishedRange: 約34〜36G/50枚
  settingSpecific: UNVERIFIED_AFTER_RESEARCH
  confidence: CONTEMPORARY_INDUSTRY_HIGH_FOR_RANGE
netIncrease:
  ceilingRT: 約+0.05枚/G（現状維持程度）
  confidence: ANALYSIS_SINGLE_WITH_CONTEMPORARY_INDUSTRY_DIRECTION_CROSSCHECK
basicPayout:
  big: 約312枚
  regOrChallengeBonus: 約104枚
  confidence: CONTEMPORARY_INDUSTRY_HIGH_AND_DATABASE_CROSSCHECK
modeSpecificMinimumData:
  ceilingRT:
    trigger: ボーナス後の特殊リプレイ入賞を起点として約600G消化で発動するハマリ救済RT。通常はボーナス終了後1〜2G程度で特殊リプレイ入賞とする旧攻略記述あり。
    duration: 次回ボーナス成立まで
    netIncreasePerGame: 約+0.05枚/G（現状維持程度）
    note: 当時グリーンべるとは「ボーナス終了後600G消化するとRT」と簡略表記。旧攻略は特殊リプレイ入賞から天井カウント開始と説明するため、起点定義を分けて保持。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。旧パチマガ機種INDEXに「攻め時・ヤメ時・設定変更時」専用項目の存在を確認したが、現存検索結果から具体本文を復元できず、設定変更時の600G天井カウンタ処理を推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。宵越し天井対象として列挙する後年攻略ページは確認したが、本機単独の当時一次/解析本文で据え置き時のカウンタ引継ぎを確定できず、CONFIRMEDへ上げない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の天井カウンタ/RT状態保持を直接確認できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。設定変更で600G天井計数がリセット/引継ぎか直接本文未回収。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時は約600G天井RTを確認したが、設定変更時の短縮/変更は確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一専用モード/モード抽選は確認されない。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。特殊リプレイ起点の天井計数/既存RT状態の設定変更時処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン/初期出目/7セグ等による変更判別を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_CONFLICT_PAYOUT_AND_RANGE_BASE
resetBehaviorQA: PARTIAL_WITH_CEILING_RESET_DETAIL_UNVERIFIED_AFTER_RESEARCH

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: P-WORLD / 当時業界 = 97.0 / 98.5 / 101.0 / 103.5 / 106.0 / 108.0%
    sourceB: 後年解析 = 98.71 / 101.01 / 103.51 / 104.80 / 106.06 / 107.15%
    handling: 算出条件/攻略条件差の可能性があり平均せず双方保持。
  - field: ceilingCounterStartDefinition
    status: DEFINITION_DETAIL_DIFFERENCE
    sourceA: グリーンべると = ボーナス終了後600G消化で天井RT
    sourceB: 旧攻略 = ボーナス後の特殊リプレイ入賞から天井カウント開始（通常1〜2Gで入賞）
    handling: 実質差は小さいが物差しDBでは定義を混ぜず、旧攻略の起点詳細を併記。

missingFields:
  - 50枚ベースの設定別精密値（当時業界記事の34〜36Gレンジは取得済み）
  - 設定変更/据え置き/電源OFF→ON時の600G天井カウンタおよびRT状態処理
  - 本機固有のガックン/初期出目/7セグ等による設定変更判別
  - 旧パチマガ「攻め時・ヤメ時・設定変更時」本文の復元

sources:
  - url: https://web-greenbelt.jp/00006484/
    title: 名機ジャックポット、堂々の復活！！ / グリーンべると
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: ヤーマ、スーパージャックポットN、BIG約312枚/REG約104枚、600G天井RT、合算約1/168〜1/141、出玉率97〜108%、1000円34〜36G、納品2008-07-13予定
  - url: https://www.p-world.co.jp/machine/database/5192
    title: スーパージャックポット 2008年 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_DATABASE_HIGH
    usedFor: 型式名スーパージャックポットN、設定別BIG/REG、出玉率97〜108%、獲得枚数照合
  - url: https://www.eightbeat.com/slot99/kishu/sa_gyou/su/supJACKPOT/page_menu.html
    title: スーパージャックポット完全攻略解析情報 / パチスロ救急車
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008.07、天井RT約600G、RT純増約+0.05枚/G、特殊リプレイ入賞から天井計数開始の詳細
  - url: https://pacnk.com/slot/tools/sh_supajakkupotto2008.html
    title: スーパージャックポット設定判別ツール / pacnk
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 設定別精密BIG/REGと別系列PAYOUT。P-WORLD値と競合のため平均せず保持
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/10/yama_slot_10.php
    title: スーパージャックポット / パチマガスロマガ旧攻略INDEX
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 「天井RTについて」「攻め時・ヤメ時・設定変更時」専用項目の存在確認。具体設定変更本文は現存検索結果で未回収
  - url: https://news.p-world.co.jp/articles/2959/greenbelt
    title: 情報提供端子板の対応機種、8社12機種に / P-WORLD・グリーンべると
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: 2008年7〜8月初旬の対応機としてスーパージャックポットN/スーパージャックポット表記を確認

researchNotes:
  - 既存main 279件地点から2008-07-22以前の漏れ監査で未登録を確認し遡及追加。
  - 同名の1998年岡崎産業4号機、2015年アクロス5号機、後年ジャックポット系を検索から分離。メーカー=ヤーマ、2008年、型式=スーパージャックポットNを正本とした。
  - 情報提供端子板記事では「スーパージャックポットN」と「スーパージャックポット」が別行で列挙されるが、現存性能DB/P-WORLDは市場名スーパージャックポット・型式スーパージャックポットNとして扱う。別スペックと断定できる直接資料がないため、本レコードでは重複機として二重登録しない。
  - resetBehaviorは設定変更/リセット/朝一/据え置き/電源OFF ON/600G天井/ガックン/宵越しを検索語変更して再探索。天井の存在は高信頼で確定したが設定変更時のカウンタ処理は直接本文未回収のためUNVERIFIED_AFTER_RESEARCH。
