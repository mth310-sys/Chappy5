# 宇宙刑事ギャバン

machineName: 宇宙刑事ギャバン
manufacturer: 銀座
releaseDate: 2009-02-22
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_SCHEDULED_DATE
releaseDateNote: グリーンべるとは2009-02-22納品開始予定。パチ&スロ必勝本は2009-02-23導入開始予定で、物流開始/ホール導入開始の定義差として保持する。
generation: 5号機
systemType: ボーナス+CZ+ART / ループART+無限ART
settings: 1 / 3 / 5 / F

payoutRateBySetting:
  setting1: 96.2%
  setting3: 99.1%
  setting5: 104.7%
  settingF: 111.4%
  status: MANUFACTURER_PUBLISHED_VALUES_CROSSCHECKED
  note: パチマガスロマガがメーカー発表値として掲載し、パチ&スロ必勝本でも同値を確認。

initialHitBySetting:
  bonusCombined:
    setting1: 1/239.18
    setting3: 1/218.45
    setting5: 1/233.22
    settingF: 1/208.05
  bigCombinedIncludingGavanBonus:
    setting1: 1/381.02
    setting3: 1/348.60
    setting5: 1/372.36
    settingF: 1/332.67
  regularBonus:
    setting1: 1/642.51
    setting3: 1/585.14
    setting5: 1/624.15
    settingF: 1/555.39
  gavanBonus:
    setting1: 1/6553.60
    setting3: 1/5957.82
    setting5: 1/5957.82
    settingF: 1/5461.33
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガの設定1/3/5/F値を主系列とする。必勝本のBIG合算表記はギャバンボーナスを別立てした1/404.54・1/370.26・1/397.19・1/354.25で、定義差としてconflictsに保持。

baseGamesPer50:
  setting1: 36.13G/50枚
  setting3: 36.54G/50枚
  setting5: 36.65G/50枚
  settingF: 37.07G/50枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガの1000円あたりゲーム数。

netIncrease:
  gavanTimeART: 約+1.2枚/G
  superGavanTimeART: 約+1.2枚/G
  status: INDUSTRY_AND_DATABASE_CROSSCHECKED

basicPayout:
  gavanBonus: 約245枚 + 次回ボーナスまでのスーパーギャバンタイム
  normalBIG: 約245枚 + ギャバンチャンス
  REG: 約70枚 + ギャバンチャンス
  gavanTime: 30G/セット・約+1.2枚/G（単純純増目安約36枚/セット）
  superGavanTime: 次回ボーナスまで継続する無限ART・約+1.2枚/G

modeSpecificMinimumData:
  - CZ「ギャバンチャンス」中の5択リプレイ押し順正解/ナビでART「ギャバンタイム」へ突入。
  - ギャバンタイムは30G/セット、純増約+1.2枚/G。終了後は再度ギャバンチャンスへ。
  - ギャバンボーナス後は次回ボーナスまで継続する「スーパーギャバンタイム」へ突入。
  - 通常500G消化後にもギャバンチャンスへ移行する解析資料がある。
  - 通常のボーナス間1200Gで天井状態へ移行。P-WORLDでは天井中BIGでART75%継続+ナビ1個、REGで84%以上継続+ナビ0〜5個と説明されるが、物差し用途では天井存在と主要恩恵のみ保持する。

resetBehavior:
  settingChangeBehavior: CONFIRMED_CZ_START。P-WORLDが「設定変更後は内部的にチャンスゾーンからスタート」と明記。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のボーナス間ゲーム数、ナビストック、ART/CZ状態、通常高低状態の本機固有引継ぎを直接示す高信頼本文を今回確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時のゲーム数、ナビストック、ART/CZ状態を本機固有に説明する直接資料を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。ボーナス間1200G天井は確認したが、設定変更時にボーナス間ゲーム数が0へ戻るか/引継ぐかは直接根拠未確定。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の天井短縮/変更数値は確認できず。通常天井はボーナス間1200G。
  modeAfterReset: CZ_START_CONFIRMED / OTHER_MODE_DETAILS_UNVERIFIED。設定変更後は内部CZスタートを確認。通常時の烈/マクーステージ相当の低確/高確や継続率状態までの初期化規則は未確定。
  stateAfterReset: INTERNAL_CHANCE_ZONE_START_CONFIRMED。ART/ナビストック等の扱いは未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: INTERNAL_CZ_START_CONFIRMED。設定変更後のCZスタートが朝一挙動上の主要確認済み恩恵。専用短縮天井や公開当選率は未確認。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ、ゲーム数挙動による本機固有の設定変更/据え置き判別資料を確定できず。
  numericResetData:
    normalCeiling: 1200G（ボーナス間）
    resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: CZ_START_CONFIRMED_BUT_DISTRIBUTION_NOT_APPLICABLE_OR_UNPUBLISHED
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_CONFIRMED_CZ_START_OTHER_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - releaseDateDefinition: グリーンべると=2009-02-22納品開始予定 / パチ&スロ必勝本=2009-02-23導入開始予定。日付の1日差は物流開始とホール導入開始の定義差として平均化しない。
  - bigCombinedDefinition: パチマガスロマガのBIG合成1/381.02・1/348.60・1/372.36・1/332.67は黒/G絵柄BIGを含む。必勝本はギャバンボーナスを別立てし通常BIG合算1/404.54・1/370.26・1/397.19・1/354.25。定義差であり数値競合として混ぜない。
  - settingLabelNormalization: pacnkは同じ機械割系列を設定1/2/3/4表記するが、パチマガスロマガ・必勝本・必勝本詳細解析は設定1/3/5/Fで一致。本レコードは1/3/5/Fを採用し、pacnkのラベルは転記しない。

missingFields:
  - 据え置き時のボーナス間ゲーム数/ナビストック/ART・CZ状態の直接資料
  - 単純電源OFF→ON時のゲーム数/ナビストック/ART・CZ状態の直接資料
  - 設定変更時の1200G天井カウンタ処理と短縮有無
  - ガックン/初期出目/ランプ等による設定変更判別の本機固有情報

sources:
  - url: https://web-greenbelt.jp/00003001/
    title: 高ループART搭載！『宇宙刑事ギャバン』登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 銀座製、ART30G、50〜90%高ループ、約+1.2枚/G、BIG約245枚、REG約70枚、ギャバンボーナス後無限ART、2009-02-22納品開始予定。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/10/h.php
    title: 宇宙刑事ギャバン ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/3/5/F、各ボーナス確率、ボーナス合算、メーカー発表PAYOUT 96.2/99.1/104.7/111.4%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/10/c.php
    title: 宇宙刑事ギャバン 通常時小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 50枚ベース36.13/36.54/36.65/37.07G、設定構成1/3/5/F。
  - url: https://p.hisshobon.jp/machine/1324/1/19902
    title: 基本スペック[宇宙刑事ギャバン] / パチ&スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 2/23導入開始予定、設定1/3/5/F、ボーナス合算、ギャバンボーナス、通常BIG、REG、機械割の照合。
  - url: https://www.p-world.co.jp/machine/database/5468
    title: 宇宙刑事ギャバン / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 5号機ART/CZ、約+1.2枚/G、30G ART、無限ART、ボーナス間1200G天井、設定変更後は内部CZスタート。
  - url: https://pacnk.com/slot/2009/gavan/top.php
    title: 宇宙刑事ギャバン / pacnk
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_RETROSPECTIVE
    usedFor: 2009年2月導入、ボーナス・機械割・CZ/ART/500G後CZ・ナビストック構造の補助照合。設定ラベル1/2/3/4は他高信頼資料と不一致のため採用しない。
  - url: https://p-kn.com/slot/915/8261/
    title: ボーナスの種類 | 宇宙刑事ギャバン / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: ギャバンボーナス約245枚+無限ART、通常BIG約245枚+CZ、REG約70枚+CZの補助照合。

researchNotes:
  - LATEST_HANDOFF正本343件地点（2009-02-15 エアマスター）から継続。
  - 2/15同日群〜2/21の具体日付き未処理候補を監査し、今回安全に343より前へ挿入できる具体日機は確定しなかった。
  - 月単位候補Wキャッツ等は具体日未確定のため推測挿入しない。
  - 具体日が確定済みの次群から、当時グリーンべるとで2/22納品開始予定の宇宙刑事ギャバンを344件目として追加。
