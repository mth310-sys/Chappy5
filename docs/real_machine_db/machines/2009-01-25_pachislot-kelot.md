# パチスロ「KELOT」

machineName: パチスロ「KELOT」
manufacturer: 山佐
releaseDate: 2009-01-25
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_DATE
generation: 5号機
systemType: ノーマルAタイプ / ボーナス主体（オレンジ入賞後4GのプチRTあり）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 96.8%
  setting2: 98.6%
  setting3: 101.1%
  setting4: 104.2%
  setting5: 106.3%
  setting6: 110.1%
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH

initialHitBySetting:
  BIG:
    setting1: 1/287.4
    setting2: 1/282.4
    setting3: 1/270.8
    setting4: 1/258.0
    setting5: 1/250.1
    setting6: 1/235.7
  REG:
    setting1: 1/455.1
    setting2: 1/425.5
    setting3: 1/409.6
    setting4: 1/390.1
    setting5: 1/376.6
    setting6: 1/352.3
  bonusCombined:
    setting1: 1/176.2
    setting2: 1/169.7
    setting3: 1/163.0
    setting4: 1/155.3
    setting5: 1/150.3
    setting6: 1/141.2
  status: ANALYSIS_HIGH

baseGamesPer50:
  setting1: 33.46G/50枚
  setting2: 33.70G/50枚
  setting3: 33.95G/50枚
  setting4: 34.21G/50枚
  setting5: 34.45G/50枚
  setting6: 34.95G/50枚
  status: ANALYSIS_HIGH

netIncrease:
  mainOutputRT: NOT_APPLICABLE
  note: 出玉獲得の主軸となるRT/ARTは非搭載。パチマガスロマガではオレンジ入賞後4GのプチRTを確認するが、純増性能を競うRTではないため物差し用netIncreaseはN/A。

basicPayout:
  BIG: MAX約335枚（344枚超払い出し終了。簡単な技術介入込み）
  REG: 約104枚（120枚超払い出し終了）
  status: OFFICIAL_INDUSTRY_ANALYSIS_MATCH

modeSpecificMinimumData:
  normalType: ボーナスのみで出玉を増やすノーマルAタイプ。
  miniRT: パチマガスロマガではオレンジ入賞後4GのプチRTを確認。グリーンべるとは「RT等を搭載しないノーマルAタイプ」と紹介しているため、プレイヤー向けの継続RT機能を持たないという意味と解釈し、4GプチRTの内部挙動を別記。
  ceiling: NONE_CONFIRMED。ボーナス主体の通常ゲーム数天井は確認されず。

resetBehavior:
  settingChangeBehavior: NO_MATERIAL_RESET_SYSTEM_CONFIRMED_BY_ARCHITECTURE。公開資料でボーナス主体のノーマルAタイプであり、通常ゲーム数天井・モード管理・ART/ATを確認しないため、設定変更で朝一狙いを生むゲーム数/モード/ARTリセット要素は該当なし。リール始動等の見た目挙動は別途未確認。
  carryOverBehavior: NOT_APPLICABLE_FOR_CEILING_MODE_ART。引き継ぐ通常ゲーム数天井・モード・ART/ATを確認しない。設定据え置き時のリール/表示等の外観挙動は未確認。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみのリール位置・表示等、本機固有の外観挙動を直接説明する資料は未回収。ただし天井/モード/ART等の朝一価値を持つ持越し対象は確認されない。
  gameCounterReset: NOT_APPLICABLE。通常ゲーム数天井・ゲーム数管理当選を確認しない。
  ceilingAfterReset: NOT_APPLICABLE。通常ゲーム数天井および設定変更専用短縮天井を確認しない。
  modeAfterReset: NOT_APPLICABLE。通常時のモード管理型当選システムを確認しない。
  stateAfterReset: NOT_APPLICABLE_FOR_HALL_MORNING_VALUE。朝一価値を左右する高確/ART/AT状態管理を確認しない。オレンジ後4GプチRT中の設定変更・電断時の内部処理は実機完全再現領域として今回未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井・高確スタート・CZ/ART優遇等は確認されず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。`パチスロ KELOT / ケロット / 山佐` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / リール` を組み替え、公式・業界・当時解析・古い攻略DB・回顧資料を再探索したが、2009年初代固有の確定的な変更判別手段は回収できず。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE
resetBehaviorQA: SUBSTANTIAL_ARCHITECTURAL_NA_WITH_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - field: RT表現
    sourceA: グリーンべると「RT等を搭載しないノーマルAタイプ」
    sourceB: パチマガスロマガ「オレンジ入賞後4GのプチRT」およびRT中リプレイ確率を掲載
    handling: DEFINITION_DIFFERENCE_NOT_NUMERIC_CONFLICT。出玉獲得用RTを搭載しない一方、短時間の内部プチRTは存在すると区別して保持。
  - field: retrospectiveReleaseMonth
    sourceA: 山佐ネクスト公式 稼働時期2009年1月 / 当時グリーンべると 2009-01-25納品開始予定
    sourceB: 5号機クロニクル 2009年6月
    handling: CONFLICT_SOURCE_QUALITY_RESOLVED。公式・当時業界資料を優先し2009-01-25を採用。後年DBの6月表記は採用しない。

missingFields:
  - 2009年初代固有の電源OFF→ON時のリール位置・表示等の外観挙動
  - ガックン/初期出目等による設定変更・据え置き判別の確定資料
  - オレンジ後4GプチRT中の設定変更/電断時内部処理（物差し目的では非必須）
  - 型式名・検定番号の高信頼直接資料

sources:
  - url: https://yamasa-next.co.jp/model_klt/
    title: 機種情報：パチスロ ケロット / 山佐ネクスト
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 5号機、Aタイプ、稼働時期2009年1月、ノーマルAタイプ、BIG MAX335枚、ボーナス主体の基本構造。
  - url: https://web-greenbelt.jp/00002977/
    title: パルサーシリーズ新章『パチスロ「KELOT」』登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 山佐、2009-01-25納品開始予定、ノーマルAタイプ、BIG最大335枚、REG約104枚、合算1/141.2〜1/176.1、RT等を搭載しないとの当時紹介。
  - url: https://www.p-world.co.jp/machine/database/5430
    title: パチスロ「ケロット」 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 5号機ノーマル/技術介入、設定別BIG/REG/合算、機械割96.8〜110.1%、BIG MAX335枚、REG104枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/161/a.php
    title: パチスロケロット 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル、同時成立、プチRT、BIG/REG規定払い出しと純増枚数。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/161/c.php
    title: パチスロケロット 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別33.46〜34.95G/50枚、オレンジ後4GプチRT、RT中リプレイ確率。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/161/yamasa_slot_161.php
    title: パチスロ ケロット 機種解析INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX
    usedFor: 当時解析ページに「攻め時・ヤメ時・設定変更時」項目が存在したことを確認。ただし本文は今回回収できず、具体リセット挙動は推測補完しない。
  - url: https://pachimaga.com/free/special/a4947056bee8df2be2e4ddfd780a8ade3035c7d8.php
    title: 「ケロット4」の初代マシンに迫る / パチマガスロマガFREE
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 初代が2009年1月登場、ボーナスのみのシンプルなノーマルタイプであることの後年照合。
