# 忍魂

machineName: 忍魂
manufacturer: 大都技研
releaseDate:
  primary: 2009-01-12
  alternate: 2009-01-13
  status: DEFINITION_DIFFERENCE_DELIVERY_VS_HALL_INTRODUCTION
releaseDatePrecision: DAY_WITH_DELIVERY_INTRODUCTION_DIFFERENCE
modelNumber: シノビダマシイ3
generation: 5号機
systemType: ボーナス+A+ART（周期RT/CZ状態あり）
settings: 1 / 3 / 5 / 6

payoutRateBySetting:
  value: {1: 96.1%, 3: 99.1%, 5: 105.6%, 6: 114.2%}
  status: ANALYSIS_HIGH_MULTI_SOURCE
  note: 5号機クロニクル、CrankySeven、後年詳細データ集で一致。

initialHitBySetting:
  BIG: {1: 1/394.8, 3: 1/385.5, 5: 1/368.1, 6: 1/352.3}
  REG: {1: 1/992.9, 3: 1/885.6, 5: 1/780.1, 6: 1/728.1}
  totalBonus: {1: 1/282.4, 3: 1/268.5, 5: 1/250.1, 6: 1/237.4}
  status: ANALYSIS_HIGH_CROSS_CHECKED
  note: 後年詳細データ集の精密値を主値とし、みんスロの丸め値（BIG 1/394→1/352、REG 1/993→1/728、合算1/282→1/237）と整合。

baseGamesPer50:
  value: 約31.8G
  status: ANALYSIS_SINGLE
  note: 現存する比較可能な50枚ベースはみんスロ。検索語を「50枚/1000円/ベース/コイン持ち」へ変え、型式名・メーカー名でも再探索したが別系統の直接数値は今回未回収。

netIncrease:
  ART_monthlight: 約+1.5枚/G
  status: INDUSTRY_AND_ANALYSIS_HIGH
  note: 2008年当時グリーンべると、P-WORLD、パチマガスロマガで一致。5号機クロニクルの約+1.4枚/Gは後年回顧値としてCONFLICT候補に分離。

basicPayout:
  BIG: 約220枚（324枚超払い出しで終了）
  REG: 約100枚（144枚超払い出しで終了）
  status: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE
  note: 当時グリーンべると/P-WORLD/パチマガスロマガが約220枚・約100枚で一致。5号機クロニクルの約204枚・約54枚は他資料と大きく異なるためCONFLICTとして保持し主値へ平均しない。

modeSpecificMinimumData:
  - ART「月光ノ刻」は1セット50G、1Gあたり約+1.5枚。1回の当選で初期最大6セット（300G）とする解析資料あり。
  - ART中のレア役・ボーナスでゲーム数上乗せ抽選。上乗せG数の詳細振り分けは物差し用途外のため収集しない。
  - 全ボーナス後は高確率ゾーンへ移行し、当時業界発表ではBB後約70G、RB後約30G。強チャンス目でART確定とされる。
  - ボーナス間1200G+潜伏で天井ARTへ突入し、最低50G。ART純増は通常ARTと同じ約+1.5枚/G。

resetBehavior:
  settingChangeBehavior: 設定変更時は天井までのゲーム数と残存ARTゲーム数がリセットされ、周期RT状態から開始
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH; 据え置き時の天井カウンタ・ART残G・RT状態を本機固有に直接記述した現存資料は今回未回収
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH; 設定を変更しない単純電源OFF→ONのみの天井/ART/RT状態処理は本機固有資料を確定できず
  gameCounterReset: RESET_ON_SETTING_CHANGE
  ceilingAfterReset: 通常ボーナス間1200G+潜伏の天井カウンタを設定変更時にリセット。設定変更専用の短縮天井は確認できず
  modeAfterReset: 朝一専用モードの存在は確認できず。設定変更時は周期RTへ移行
  stateAfterReset: PERIODIC_RT_START_ON_SETTING_CHANGE
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: 設定変更時に周期RTから開始し、昇格リプレイ入賞で超高確率状態へ移行し得る。ただし設定変更専用の保証当選/短縮天井などは確認できず
  resetPenalties: 前日ボーナス間天井G数と残存ARTゲーム数が設定変更で消える
  resetDetection: 設定変更後の周期RTでは転落リプレイ確率が全設定1/2.0まで上がるため、朝一数Gで転落リプレイ出現なら変更可能性が高まる。ガックンによる確定判別は確認できず
  numericResetData:
    normalCeiling: ボーナス間1200G+潜伏
    resetSpecificCeiling: NONE_CONFIRMED; カウンタは0から再起算
    periodicRTTransferReplay: 全設定 1/2.0
    periodicRTNormalReplay: {1: 1/5.4, 3: 1/5.5, 5: 1/5.5, 6: 1/5.6}
    periodicRTPromotionReplay: {1: 1/16.3, 3: 1/15.5, 5: 1/15.9, 6: 1/15.1}
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
  note: P-WORLDが「天井までのゲーム数とARTゲーム数がリセットされ、RT状態からスタート」と直接記載。CrankySevenは設定変更時の周期RTと朝一変更判別に使えるリプレイ確率を具体値で公開している。別シリーズ（忍魂弐/暁ノ章/スマスロ忍魂参）のリセット仕様は混入していない。

coreStatus: COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE_AND_PAYOUT_RETROSPECTIVE_CONFLICT
resetBehaviorQA: PARTIAL_HIGH_CONFIDENCE_SETTING_CHANGE_AND_DETECTION_POWER_CYCLE_CARRYOVER_UNVERIFIED

conflicts:
  - releaseDate: 当時グリーンべるとは2009-01-12から納品開始、みんスロは導入日2009-01-13。納品/ホール導入の定義差として双方保持し平均しない。
  - netIncrease: 当時業界/P-WORLD/パチマガスロマガは約+1.5枚/G、5号機クロニクルは約+1.4枚/G。主値は当時資料系列の+1.5枚/G。
  - basicPayout: 当時業界/P-WORLD/パチマガスロマガはBIG約220枚・REG約100枚。5号機クロニクルはBIG約204枚・REG約54枚で大きく競合するため平均しない。

missingFields:
  - 据え置き時の本機固有の天井カウンタ/ART残G/RT状態の直接記述
  - 電源OFF→ONのみの場合の本機固有処理
  - ガックン等、周期RT以外の主要変更判別
  - 公開された設定変更時の当選率/恩恵発生率
  - 50枚ベースの別系統照合

sources:
  - {url: https://web-greenbelt.jp/00003950/, title: 大都技研、AT機を極限まで再現した『忍魂』発表 / グリーンべると, retrievedAt: 2026-09-02, confidence: INDUSTRY_CONTEMPORARY}
  - {url: https://news.p-world.co.jp/articles/3212/greenbelt, title: 大都技研、AT機を極限まで再現した『忍魂』発表 / P-WORLD業界ニュース, retrievedAt: 2026-09-02, confidence: INDUSTRY_CONTEMPORARY_MIRROR}
  - {url: https://www.p-world.co.jp/machine/database/5406, title: 忍魂 / P-WORLD, retrievedAt: 2026-09-02, confidence: INDUSTRY_DATABASE}
  - {url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/43/a.php, title: 忍魂 基本システム / パチマガスロマガ, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_ARCHIVE}
  - {url: https://crankyseven.com/shinobidamashii-pc.htm, title: 忍魂 解析攻略 / CrankySeven, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_RETROSPECTIVE}
  - {url: https://ameblo.jp/thundervsp5/entry-12819702765.html, title: データ集〈忍魂〉, retrievedAt: 2026-09-02, confidence: RETROSPECTIVE_DETAILED}
  - {url: https://minslo.com/%E5%BF%8D%E9%AD%82/, title: 忍魂 / みんスロ, retrievedAt: 2026-09-02, confidence: RETROSPECTIVE_DATABASE}
  - {url: https://5goki.com/daito, title: 大都技研5号機全機種一覧 / 5号機クロニクル, retrievedAt: 2026-09-02, confidence: RETROSPECTIVE_DATABASE}
  - {url: https://pachimaga.com/free/special/72987e6fab449f1bec72e843ebc560ba24982c65.php, title: 名機 the ORIGIN 忍魂 / パチマガスロマガFREE, retrievedAt: 2026-09-02, confidence: RETROSPECTIVE_ANALYSIS}

researchNotes:
  - 最新mainのLATEST_HANDOFF 338件地点（悪魔城ドラキュラ）から継続。
  - 2009-01-07〜11を具体日検索、当時業界/導入一覧系で監査し、本機より前に安全に挿入すべき未処理パチスロは今回確定できなかった。
  - 既存1/12「キング・コング」は再追加せず、同日群の未処理として本機を追加。
  - 機種名「忍魂/しのびだましい」、型式「シノビダマシイ3」、大都技研を組み替え、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/RT/ガックンで再探索。
  - 忍魂弐～烈火ノ章～、忍魂～暁ノ章～、スマスロ忍魂参～奥義皆伝ノ章～のリセット情報は別機種のため除外した。
