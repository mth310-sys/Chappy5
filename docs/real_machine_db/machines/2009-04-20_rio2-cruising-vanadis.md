# Rio2 クルージング・ヴァナディース

machineName: Rio2 クルージング・ヴァナディース
formalModelName: UNVERIFIED_AFTER_RESEARCH
manufacturer: ネット
releaseDate: 2009-04-20
releaseDatePrecision: INDUSTRY_SCHEDULE_AND_MACHINE_DATABASE_EXACT_DATE_WITH_CONFLICT
releaseDateNote: ALL7とパチビーは2009-04-20導入予定/導入日で一致。K-Naviのみ2009-04-15ホール導入開始とするため、4/20を時系列主値、4/15をCONFLICTとして保持する。2009-03-06のテクモ/4Gamer資料は「4月導入予定」までを一次寄り補助確認。
generation: 5号機
systemType: ボーナス + RT / CZ / 天井搭載
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primaryOldAnalysis:
    setting1: 97.6%
    setting2: 98.9%
    setting3: 100.7%
    setting4: 103.6%
    setting5: 106.9%
    setting6: 110.0%
  secondaryDatabase:
    setting1: 97.4%
    setting2: 98.7%
    setting3: 100.5%
    setting4: 103.3%
    setting5: 106.7%
    setting6: 109.7%
  status: CONFLICT
  note: CrankySeven/当時5号機wikiは97.6〜110.0%系列、pacnk/5号機クロニクルは97.4〜109.7%系列。平均せず両系列を保持する。5号機クロニクル本文には本機をA+ART・約400枚S-BIG・ART約1.2枚/Gとする記述があり、2009年11月の別機「Rio2プレミアム」と混同した可能性が高いため、そのゲーム性記述は本レコードへ採用しない。

initialHitBySetting:
  bigCombined:
    setting1: 1/341.3
    setting2: 1/336.1
    setting3: 1/316.6
    setting4: 1/291.3
    setting5: 1/276.5
    setting6: 1/266.4
  regCombined:
    setting1: 1/862.3
    setting2: 1/712.3
    setting3: 1/780.2
    setting4: 1/630.1
    setting5: 1/682.7
    setting6: 1/468.1
  rioTimeBonus:
    setting1: 1/6553.6
    setting2: 1/4369.1
    setting3: 1/6553.6
    setting4: 1/3276.8
    setting5: 1/6553.6
    setting6: 1/3276.8
  bonusCombinedAll:
    setting1: 1/235.7
    setting2: 1/217.0
    setting3: 1/217.7
    setting4: 1/187.8
    setting5: 1/191.1
    setting6: 1/161.4
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: CrankySevenと2009年更新の5号機まとめwikiで合算値が一致。pacnkもBIG/REG合算を精密値で照合可能。個別BIGの一部にwiki側表記差があるため、物差し用主値は複数資料で整合するBIG/REG合算を採用する。

baseGamesPer50:
  setting1: 39.2G
  setting2: 39.2G
  setting3: 39.2G
  setting4: 39.3G
  setting5: 41.2G
  setting6: 41.3G
  status: OLD_ANALYSIS_DIRECT_VALUE
  note: CrankySevenの「1000円（50枚）あたりの回転数」直接掲載値。小役から逆算していない。

netIncrease:
  rioTime30G: 約+0.8枚/G
  superRioTime777G: 約+0.8枚/G
  status: ANALYSIS_DATABASE_CROSSCHECKED
  note: P-WORLD、パチビーでRT「リオタイム」1Gあたり約0.8枚増加を確認。30Gまたは777Gで、ボーナス成立または規定G数消化で終了。後年のRio2プレミアム約+1.3枚/G ARTは別機なので混入禁止。

basicPayout:
  big: 約260枚
  regular: 約91枚
  rioTimeBonus: 約26枚
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLDとCrankySevenで一致。BIGは345枚超払い出し終了、REGは104枚超払い出し終了、RTBは29枚超払い出し終了。

modeSpecificMinimumData:
  - CZ「リオチャンス」から特殊リプレイ成立で30G RT「リオタイム」、別特殊リプレイで777G RT「スーパーリオタイム」へ突入。
  - CZ突入契機はREG終了後、RT終了後、通常状態999G消化の天井、BIG中の赤7JAC入賞等。
  - 天井は「通常状態で999G消化」によりCZへ突入するタイプで、ボーナスそのものが確定する天井ではない。
  - 2009年4月機はRT機。2009年11月の「Rio2プレミアム」はART機であり別レコード扱い。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/Rio2/リオ2/ネットと「設定変更」「リセット」「朝一」「液晶」「天井」「CZ」を組み替えて検索。K-Naviに「液晶から設定変更判別?」という専用項目の存在までは確認したが、具体的な判別条件を取得できず、設定変更時のCZ/RT状態や天井カウンタ初期化を断定しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。K-Naviに「宵越し天井狙い」専用項目が存在し、P-WORLD掲示板にも宵越し天井を前提とした当時投稿は残るが、設定変更/据え置きのどちらで999Gカウンタが引き継がれるかを信頼できる解析本文から直接確定できなかったため推測補完しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の999Gカウンタ、CZ/RT残状態、液晶表示の本機固有直接資料を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常状態999Gの天井CZは確認済みだが、設定変更時のカウンタRESET/CARRY_OVERを直接確定できず。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常天井は999G。設定変更専用の短縮/延長天井数値は確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード・CZ優遇モード・リセット専用モード振り分けの公開値を確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時のCZ/RT内部状態、リプレイ状態の扱いを機種固有資料から確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの天井短縮、朝一RT/CZ確定等の主要恩恵を直接確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの主要な不利数値を確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。K-Naviに液晶による設定変更判別記事の存在は確認できるが条件本文を取得できず、ガックン・初期出目・液晶背景等を断定しない。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: RESEARCHED_WITH_RESET_COUNTER_CARRYOVER_AND_DETECTION_UNVERIFIED

conflicts:
  - releaseDate: ALL7/Pachibee 2009-04-20 vs K-Navi 2009-04-15。平均せず4/20を主値、4/15を競合日として保持。
  - payoutRateBySetting: 97.6/98.9/100.7/103.6/106.9/110.0% 系列 vs 97.4/98.7/100.5/103.3/106.7/109.7% 系列。
  - individualBigProbability: 2009年更新5号機wikiの設定4/5個別BIG値の一部がCrankySevenおよびpacnkのBIG合算精密値と整合しないため、個別色別BIGは物差し主値にせず合算を使用。
  - laterDatabaseSystemDescription: 5号機クロニクルは本機をA+ART/ART50G約+1.2枚/G/約400枚S-BIGと記載するが、P-WORLD・パチビー・当時wiki・CrankySevenはRT30G/777G約+0.8枚/G、BIG約260枚で一致。11月のRio2プレミアム仕様混入が疑われるため、後年DB記述はCONFLICTとして採用しない。

missingFields:
  - 正式型式名/検定型式の高信頼直接資料
  - 設定変更時の999G天井カウンタRESET/CARRY_OVER
  - 据え置き時の天井/CZ/RT状態引継ぎ
  - 単純電源OFF→ON時の天井/CZ/RT状態
  - 設定変更時のモード/状態再抽選
  - 液晶/ガックン/初期出目等による設定変更判別の具体条件
  - 朝一専用の公開当選率/モード振り分け/恩恵率

sources:
  - url: https://www.all7.jp/plans/index/2009/04
    title: 2009年4月の導入機種一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-04-20導入予定、4/20同日群、4/14〜4/19境界監査。
  - url: https://www.pachibee.jp/movies/index/1521
    title: Rio2 クルージング・ヴァナディース / パチビー
    retrievedAt: 2026-09-02
    confidence: OLD_MACHINE_DATABASE
    usedFor: 2009-04-20導入日、5号機RT/CZ/天井、約+0.8枚/G。
  - url: https://www.p-world.co.jp/machine/database/5516
    title: Rio2クルージング・ヴァナディース / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: メーカー、5号機RT/CZ/天井、BIG約260枚、REG約91枚、RTB約26枚、RT30G/777G、約+0.8枚/G。
  - url: https://crankyseven.com/rio2-pc.htm
    title: Rio2 クルージング・ヴァナディース 解析攻略 / CrankySeven
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 設定別機械割97.6〜110.0%、BIG/REG/RTB/合算確率、50枚ベース39.2〜41.3G、基本獲得枚数、CZ/RT、通常状態999G天井。
  - url: https://w.atwiki.jp/5gouki/pages/152.html
    title: Rio2 クルージング・ヴァナディース / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_COMMUNITY_DATABASE
    usedFor: 2009年4月時点のRT30G/777Gゲーム性、ボーナス合算、機械割系列の照合。個別BIG一部差はCONFLICT扱い。
  - url: https://pacnk.com/slot/tools/sh_rio2.html
    title: Rio2クルージング・ヴァナディース 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: BIG/REG合算精密値、97.4〜109.7%機械割系列の競合確認。
  - url: https://p-kn.com/slot/955/
    title: Rio2 クルージング・ヴァナディース / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 2009-04-15導入開始CONFLICT、天井CZ・宵越し天井狙い・液晶設定変更判別専用記事の存在確認。本文を取得できない事項は事実認定に使用しない。
  - url: https://www.4gamer.net/games/086/G008665/20090306056/
    title: 楽勝！パチスロ宣言6 リオ2 クルージング ヴァナディース発表 / 4Gamer
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_NEWS_WITH_PUBLISHER_RELEASE
    usedFor: NET/TECMOコラボ実機、2009年4月全国ホール導入予定の補助確認。
  - url: https://5goki.com/net
    title: ネット5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: SECONDARY_DATABASE_CONFLICTING_SYSTEM
    usedFor: 97.4〜109.7%機械割系列。A+ART/約400枚/ART約1.2枚G記述は他の当時資料と競合するため本機コアへ採用せず。
