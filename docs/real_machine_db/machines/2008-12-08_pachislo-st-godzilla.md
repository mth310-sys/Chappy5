# ぱちスロST ゴジラ

machineName: ぱちスロST ゴジラ
manufacturer: サミー
releaseDate: 2008-12-08
releaseDatePrecision: DAY_CONFIRMED_MULTIPLE_SOURCES
modelName: ぱちスロST ゴジラ
modelNumber: ゴジラXS
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
identityStatus: TITLE_MANUFACTURER_MODEL_CONFIRMED
generation: 5号機
systemType: ボーナス + CZ + 無限RT（次回ボーナスまで）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  standardPublishedSeries:
    setting1: 97.9%
    setting2: 99.7%
    setting3: 102.0%
    setting4: 104.4%
    setting5: 106.2%
    setting6: 110.5%
  pachimagaSimulation:
    setting1: 99.78%
    setting2: 101.76%
    setting3: 104.12%
    setting4: 106.82%
    setting5: 108.49%
    setting6: 113.42%
  status: CONFLICT
  note: pacnk等の市場掲載系列97.9～110.5%と、パチマガスロマガのシミュレート99.78～113.42%は算出条件/定義が異なる可能性が高い。平均化せず別系列で保持。後年単一資料にはさらに97.5/99.5/102.5/105.0/106.5/110.0%等の異常系列も見られるため低信頼競合として採用しない。

initialHitBySetting:
  big:
    setting1: 1/1310.72
    setting2: 1/1092.27
    setting3: 1/949.80
    setting4: 1/840.21
    setting5: 1/744.73
    setting6: 1/642.51
  reg:
    setting1: 1/108.15
    setting2: 1/109.59
    setting3: 1/111.08
    setting4: 1/112.60
    setting5: 1/114.17
    setting6: 1/116.20
  combined:
    setting1: 1/99.90
    setting2: 1/99.60
    setting3: 1/99.45
    setting4: 1/99.30
    setting5: 1/99.00
    setting6: 1/98.40
  status: ANALYSIS_HIGH_MULTIPLE_SOURCES
  note: 合算はP-WORLD、グリーンべると端値、パチマガスロマガで整合。BIG/REG詳細はパチマガスロマガ解析値。

baseGamesPer50:
  bySetting:
    setting1: 44.83G
    setting2: 45.09G
    setting3: 45.64G
    setting4: 46.20G
    setting5: 46.48G
    setting6: 46.74G
  status: ANALYSIS_HIGH
  note: パチマガスロマガ掲載の1000円あたりゲーム数。

basicPayout:
  big:
    regulatedEnd: 465枚を超える払い出しで終了
    netCoins: 約311枚
  reg:
    regulatedEnd: 27枚を超える払い出しで終了
    netCoins: 約24枚
  status: INDUSTRY_AND_ANALYSIS_HIGH
  note: 2008年当時グリーンべるとでBIG約311枚、REG約24枚。パチマガスロマガ/K-Naviで規定払い出し条件を補完。

netIncrease:
  rt:
    name: 迎撃MODE
    value: 約+1.0枚/G
    continuation: 次回ボーナス成立まで
    entry: ボーナス後CZ「索敵MODE」で特殊リプレイ成立時
    entryExpectation: 約30%
  status: INDUSTRY
  note: グリーンべると当時発表資料。CZ中の通常リプレイ成立でCZ終了。全ボーナス後にCZへ移行。

modeSpecificMinimumData:
  cz:
    name: 索敵MODE
    triggerAfterBonus: 全ボーナス後
    normalGameTrigger: 通常状態300G消化後
    rtEntry: 特殊リプレイ成立で「迎撃MODE」へ
    rtEntryExpectation: 約30%
    end: 通常リプレイ成立
  rt:
    name: 迎撃MODE
    continuation: 次回ボーナスまで
    netIncrease: 約+1.0枚/G
  ceiling:
    type: CZ到達型
    value: 通常状態300G消化でCZ「索敵MODE」へ
    note: ボーナス当選天井ではない。pacnk/旧解析資料で確認。

resetBehavior:
  settingChangeBehavior: INTERNAL_CZ_START_CONFIRMED_RETROSPECTIVE。設定変更時は内部CZからスタートすると後年DBに明記。設定変更直後から「索敵MODE」相当のRT突入契機を持つ点を朝一特性として保存。ただし設定変更時専用の別抽選テーブルは確認できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に通常状態300G→CZカウンタを前日から引き継ぐか、CZ/RT状態をどの粒度で保持するかを本機固有資料で直接確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみで300Gカウンタ/CZ/RT状態がどう扱われるか、本機固有の直接資料を回収できず。
  gameCounterReset: UNVERIFIED_EXACT_COUNTER_BEHAVIOR_SETTING_CHANGE_STARTS_INTERNAL_CZ。設定変更後は内部CZ開始が確認できるため通常300G待ちは実質発生しないが、内部ゲーム数カウンタの初期値/リセット処理そのものは資料未確認。
  ceilingAfterReset: IMMEDIATE_INTERNAL_CZ_START_NOT_NUMERIC_BONUS_CEILING。設定変更時は内部CZ開始。通常時300GでCZに入る仕様に対する明確な朝一恩恵だが、ボーナス直撃天井短縮とは扱わない。
  modeAfterReset: INTERNAL_CZ_START_CONFIRMED_RETROSPECTIVE
  stateAfterReset: INTERNAL_CZ_START_CONFIRMED_RETROSPECTIVE
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 設定変更後は内部CZスタートのため、通常時の300G消化を待たずRT「迎撃MODE」突入契機を得る。通常CZからRTへの突入期待度は当時業界資料で約30%だが、これを「設定変更時専用30%」と断定せず通常CZ値として分離保持。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「ガックン」「初期出目」「表示」「朝一CZ挙動」等を機種名/型式/メーカーと組み替え、当時解析、古いDB、後年資料を再探索したが、客側から設定変更/据え置きを判別する本機固有の確定手段を回収できず。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE_AS_NUMERIC_CEILING_IMMEDIATE_INTERNAL_CZ
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
    ordinaryCZtoRTExpectation: 約30%（通常CZ公開値。設定変更専用数値ではない）

coreStatus: COMPLETE_CORE
resetBehaviorQA: RESET_CORE_CONFIRMED_INTERNAL_CZ_START_CARRYOVER_POWER_DETECTION_UNVERIFIED

conflicts:
  - 機械割: 市場掲載/後年DB系列97.9/99.7/102.0/104.4/106.2/110.5% vs パチマガスロマガ・シミュレート99.78/101.76/104.12/106.82/108.49/113.42%。平均化しない。
  - 後年単一資料に97.5/99.5/102.5/105.0/106.5/110.0%およびBIG約252枚/REG約104枚・50G RT等、当時業界資料や複数解析と大きく矛盾する情報がある。別機種/混同可能性を排除できずLOW_CONFIDENCE_CONFLICTとしてコアには採用しない。

missingFields:
  - 検定番号
  - 据え置き時の通常300G→CZカウンタ/CZ・RT状態の引継ぎ詳細
  - 電源OFF→ONのみのカウンタ/CZ・RT状態処理
  - 設定変更時の内部ゲーム数カウンタ初期値の明示
  - ガックン/初期出目/表示等の変更判別手段
  - 設定変更専用の公開朝一当選率/恩恵発生率

sources:
  - url: https://www.all7.jp/plans/index/2008/12/10
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE
    usedFor: ぱちスロST ゴジラ、サミー、2008-12-08導入予定。
  - url: https://www.pachibee.jp/machines/movie/217020107
    title: ぱちスロST ゴジラ / Pachibee
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 2008-12-08導入日の照合。
  - url: https://www.p-world.co.jp/machine/database/5389
    title: ぱちスロSTゴジラ / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式ゴジラXS、設定別合算確率の照合。
  - url: https://web-greenbelt.jp/00003914/
    title: サミー、ST系パチスロ2機種を同時発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: BIG約311枚、REG約24枚、CZ「索敵MODE」、RT「迎撃MODE」、CZ→RT期待度約30%、RT純増約+1枚/G・次回ボーナスまで、設定1/6合算端値。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/116/a.php
    title: ぱちスロST ゴジラ 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: BIG465枚超/約311枚、REG27枚超/約24枚、CZ/RT基本構造。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/116/h.php
    title: ぱちスロST ゴジラ ボーナス確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算、シミュレート機械割。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/116/c.php
    title: ぱちスロST ゴジラ 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたり44.83～46.74G。
  - url: https://pacnk.com/slot/tools/sh_stgozira.html
    title: ぱちスロST ゴジラ 設定判別ツール / パチンコFAN
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 市場掲載機械割97.9～110.5%、通常状態300GでCZ、設定変更時内部CZスタート。
  - url: https://crankyseven.com/sp/tenjo-5ka.htm
    title: 5号機天井一覧 / CrankySeven
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 通常状態300G消化でCZ「索敵モード」、特殊リプレイでRT移行の補助照合。
  - url: https://p-kn.com/slot/893/
    title: ぱちスロST ゴジラ / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: BIG/REG払い出し条件、RT純増約+1枚/Gの補助照合。
