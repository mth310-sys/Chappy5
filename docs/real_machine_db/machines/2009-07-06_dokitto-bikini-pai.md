# ドキッと!ビキニパイ

machineName: ドキッと!ビキニパイ
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: ネット
releaseDate: 2009-07-06
releaseDatePrecision: OLD_CALENDAR_EXACT_WITH_ONE_DAY_VARIANCE_AND_PRIOR_DAY_SHIPMENT
releaseDateNote: ALL7は導入予定2009-07-06。パチビーは導入日2009-07-07。グリーンべると2009-06-12記事は納品7月5日開始予定、NET公式YouTube説明は2009年7月上旬導入開始予定。ホール導入主値は具体日カレンダー2009-07-06とし、7/7差はCONFLICT保持。
generation: 5号機
systemType: ボーナス+RT / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primary_old_analysis_simulation:
    setting1: 96.56%
    setting2: 98.81%
    setting3: 101.12%
    setting4: 103.41%
    setting5: 106.26%
    setting6: 109.58%
  secondary_pacnk:
    setting1: 97.60%
    setting2: 99.70%
    setting3: 101.80%
    setting4: 103.90%
    setting5: 106.50%
    setting6: 109.50%
  status: CONFLICT_DIFFERENT_PAYOUT_SERIES
  note: パチマガスロマガは「シミュレート値」96.56〜109.58%、pacnkは97.60〜109.50%。定義/算出条件差を解消できないため平均せず両系列保持。

initialHitBySetting:
  redBig:
    setting1: 1/1092.27
    setting2: 1/1092.27
    setting3: 1/1191.56
    setting4: 1/1310.72
    setting5: 1/1456.36
    setting6: 1/1638.40
  blueBig:
    setting1: 1/840.21
    setting2: 1/753.29
    setting3: 1/630.15
    setting4: 1/541.62
    setting5: 1/481.88
    setting6: 1/422.81
  greenBig:
    setting1: 1/728.18
    setting2: 1/744.73
    setting3: 1/762.05
    setting4: 1/780.19
    setting5: 1/799.22
    setting6: 1/799.22
  bigCombined:
    setting1: 1/287.44
    setting2: 1/278.88
    setting3: 1/267.49
    setting4: 1/257.00
    setting5: 1/249.19
    setting6: 1/236.59
  regCombined:
    setting1: 1/468.11
    setting2: 1/409.60
    setting3: 1/364.09
    setting4: 1/327.68
    setting5: 1/284.94
    setting6: 1/260.06
  bonusCombined:
    setting1: 1/178.09
    setting2: 1/165.91
    setting3: 1/154.20
    setting4: 1/144.04
    setting5: 1/132.93
    setting6: 1/123.89
  status: OLD_ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガの精密値。pacnkの青BIG/REG/赤BIGおよび設定1合算、2009年グリーンべるとの設定1合算約1/178と整合。

baseGamesPer50:
  setting1: 33.94G
  setting2: 34.54G
  setting3: 35.01G
  setting4: 35.49G
  setting5: 36.24G
  setting6: 37.01G
  status: OLD_ANALYSIS_HIGH
  note: パチマガスロマガ旧解析「1000円あたりのゲーム数」直接値。

netIncrease:
  rtPororiTime: 約+0.6枚/G
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガ、パチビーで一致。

basicPayout:
  megaPaiBonus_redBig: 約315枚
  dekaPaiBonus_blueBig: 約256枚
  pororiBonus_greenBig: 約242枚
  reg: 約96枚
  rtPororiTime:
    games: 81G or 181G
    netIncrease: 約+0.6枚/G
  status: INDUSTRY_AND_ANALYSIS_HIGH
  note: グリーンべると当時記事とパチマガ旧解析で主要獲得枚数が一致。RTは突入時の特殊リプレイ種別により81G/181G。

modeSpecificMinimumData:
  - 出玉増加の主軸はボーナス。緑7ボーナス後にRT「ポロリタイム」へ接続する構造。
  - RT「ポロリタイム」は81Gまたは181G、純増約+0.6枚/G。
  - 通常ゲーム数到達型天井、ゲーム数解除、ART/AT、通常時の長期ゲーム数モードは今回の多系統再探索で確認されず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガ旧解析INDEXに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認したが本文を回収できず、設定変更時のRT残G/ボーナス後状態を推測しない。
  carryOverBehavior: UNVERIFIED_RT_STATE_AFTER_RESEARCH。通常ゲーム数天井/ゲーム数モードの引継ぎ対象は確認されないが、前日RT途中の残G据え置き挙動は本機固有資料で直接確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のRT残G、初期出目等を示す本機固有資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNTED_CEILING_CONFIRMED
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_MODE_CONFIRMED
  stateAfterReset: UNVERIFIED_RT_STATE_AFTER_RESEARCH
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプ、RT挙動による本機固有の設定変更/据え置き判別根拠を十分な再探索後も確認できず。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_RELEASE_DATE_CONFLICT
resetBehaviorQA: COMPLETE_RESEARCH_PASS_RT_RESET_DETAILS_UNVERIFIED

conflicts:
  - payoutRateBySetting: パチマガスロマガのシミュレート96.56/98.81/101.12/103.41/106.26/109.58% vs pacnk 97.60/99.70/101.80/103.90/106.50/109.50%。平均せず保持。
  - releaseDate: ALL7 2009-07-06 vs パチビー2009-07-07。グリーンべるとは7/5納品開始予定、NET公式は7月上旬。

missingFields:
  - 正式型式名/検定番号
  - 設定変更時のRT残G/内部状態処理
  - 据え置き・単純電源OFF→ON時のRT残G処理
  - ガックン/初期出目等による変更判別
  - 設定変更専用の公開朝一数値（確認なし）
  - 機械割2系列の算出条件差

sources:
  - url: https://news.p-world.co.jp/articles/3484/greenbelt
    title: お色気競技で水着美女たちが対決！ / グリーンべると2009年6月12日
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: ネット製、7月5日納品開始予定、設定1ボーナス合算約1/178、RT搭載、各ボーナス獲得枚数。
  - url: https://www.all7.jp/plans/index/2009/07
    title: 2009年7月 新台導入予定一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY_CALENDAR
    usedFor: 2009-07-06導入予定、同日群確認。
  - url: https://www.pachibee.jp/movies/index/1763
    title: ドキッと!ビキニパイ 通常時の打ち方 / パチビー
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 2009-07-07導入日という日付差、5号機RT、約+0.6枚/G。
  - url: https://www.youtube.com/watch?v=lowBhiBP2XM
    title: ドキッと！ビキニパイPV / ネット公式チャンネル
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: NET公式、2009年7月上旬全国導入開始予定。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/143/a.php
    title: ドキッと!ビキニパイ 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: ボーナス主軸、緑7後RT、RT81G/181G・純増0.6枚/G、約315/256/242/96枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/143/c.php
    title: ドキッと!ビキニパイ 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたり33.94〜37.01G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/143/h.php
    title: ドキッと!ビキニパイ ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 設定別赤/青/緑BIG、BIG/REG/全ボーナス合算、シミュレートPAYOUT。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/143/net_slot_143.php
    title: ドキッと!ビキニパイ 攻略INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」専用解析項目の存在確認。本文未回収のためresetBehaviorは推測しない。
  - url: https://pacnk.com/slot/tools/sh_bikinipai.html
    title: ドキッと!ビキニパイ 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SECONDARY
    usedFor: 青BIG/REG/赤BIGの照合、別PAYOUT系列97.60〜109.50%。
  - url: https://w.atwiki.jp/5gouki/pages/182.html
    title: ドキッと！ビキニパイ / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY
    usedFor: 2009年当時のRT81G/181G、ボーナス確率/機械割補助確認。

researchNotes:
  - repo検索で未登録を確認し、2009-07-06同日群の386として追加。
  - 欠損判定前に「ドキッと!ビキニパイ/ドキッと！ビキニパイ/ビキニパイ/NET/ネット」と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/天井短縮/モード/RT/ポロリタイム/ガックン/型式/検定番号/50枚/1000円を組み替えて再探索。
  - グリーンべると、NET公式、ALL7、パチビー、パチマガスロマガ旧解析、pacnk、当時5号機まとめ/回顧資料を横断。
  - 「ビキニパイ2」の2012年ART/天井/朝一仕様は初代へ流用していない。
