# スクール☆ウォーズ

machineName: スクール☆ウォーズ
formalModelName: スクールウォーズR
manufacturer: 銀座
releaseDate: 2009-03-16
releaseDatePrecision: SCHEDULED_INTRODUCTION_DATE_CROSSCHECKED
releaseDateNote: ALL7の2009年3月導入予定一覧が2009-03-16を明記。グリーンべると当時発表は「3月中旬納品予定」、P-WORLDは2009年3月導入開始の月表記で整合。
generation: 5号機
systemType: ボーナス+ART / ライジングチャンス
settings: 1 / 3 / 5 / H

payoutRateBySetting:
  setting1: 98.0%
  setting3: 101.1%
  setting5: 105.1%
  settingH: 110.0%
  status: INDUSTRY_DATABASE_CROSSCHECKED_WITH_RETROSPECTIVE
  note: P-WORLDの98.0/101.1/105.1/110.0%。回顧スペック資料は98.0/101.0/105.0/110.0%と丸め差のみ。

initialHitBySetting:
  BIG:
    setting1: 1/374.49
    setting3: 1/360.09
    setting5: 1/339.56
    settingH: 1/315.08
  REG:
    setting1: 1/744.73
    setting3: 1/712.35
    setting5: 1/682.67
    settingH: 1/624.15
  bonusCombined:
    setting1: 1/249.19
    setting3: 1/239.18
    setting5: 1/226.77
    settingH: 1/209.38
  status: INDUSTRY_DATABASE_CROSSCHECKED
  note: P-WORLD丸め値と回顧スペック資料の精密値が一致。

baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 本機固有の信頼できる50枚/1000円ベースを今回確定できず、後継・同筐体値を流用しない。

netIncrease:
  risingChanceART: 約+1.0枚/G
  risingGameMiniART: 約+1.0枚/G
  status: CONTEMPORARY_INDUSTRY_AND_DATABASE_CROSSCHECKED

basicPayout:
  BIG: 約240枚
  REG: 約60枚
  status: CONTEMPORARY_INDUSTRY_AND_DATABASE_CROSSCHECKED

modeSpecificMinimumData:
  - ART「ライジングチャンス」は基本1セット20Gまたは30G、純増約+1.0枚/G。
  - セット数ストック、最大85%のループ継続、ゲーム数上乗せを組み合わせる。
  - ストック消化ARTは30G、ループ継続抽選側は20G。上乗せは1回最大100G。
  - 「ライジングゲーム」は2〜7Gの演出用プチARTで、純増約+1.0枚/G。
  - ボーナス間1000G消化で天井状態へ移行し、その状態中に成立したボーナス後はART突入が確定する。

resetBehavior:
  settingChangeBehavior: PARTIAL_CONFIRMED。P-WORLDが設定変更後は約50%で高確率状態からスタートすると明記。天井ゲーム数、ARTストック、ループ率、内部ART/CZ状態のその他の初期化・保持は今回直接確定できず推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の1000G天井カウンタ、ARTストック、内部高確/ART状態の持越しを本機固有に明記した直接資料は今回未確定。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの場合のゲーム数・高確・ARTストック/状態の処理は本機固有資料未確定。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時1000G天井の存在は確定しているが、設定変更時に0G再起算か宵越しかを直接確定できず。
  ceilingAfterReset: NORMAL_CEILING_1000G_CONFIRMED / RESET_SPECIFIC_CEILING_UNVERIFIED。変更後短縮天井の公開値は確認できず。
  modeAfterReset: ABOUT_50_PERCENT_HIGH_PROBABILITY_START_CONFIRMED。設定変更後約50%で高確率状態から開始。
  stateAfterReset: PARTIAL。高確開始率のみ確定し、ART/CZ/ストック/ループ状態の処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: SETTING_CHANGE_HIGH_PROBABILITY_START_ABOUT_50_PERCENT。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプ等の直接判別方法は今回確定できず。
  numericResetData:
    normalCeiling: 1000G（ボーナス間。到達後のボーナスでART確定）
    resetSpecificCeiling: NONE_PUBLISHED_CONFIRMED
    resetModeDistribution: 高確率状態 約50%（設定変更後）
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: 高確率状態開始 約50%

coreStatus: PARTIAL_BASE_GAMES_PER_50_UNVERIFIED
resetBehaviorQA: PARTIAL_WITH_SETTING_CHANGE_HIGH_PROBABILITY_START_CONFIRMED

conflicts:
  - payoutRateRounding: P-WORLD 98.0/101.1/105.1/110.0%に対し回顧資料98.0/101.0/105.0/110.0%。丸め差として平均せず保持。

missingFields:
  - 50枚/1000円ベース
  - 設定変更時の1000G天井カウンタの初期化/持越し
  - 据え置き・単純電源OFF→ON時のゲーム数/高確/ARTストック・状態処理
  - 設定変更時のARTストック、ループ率、CZ/ART状態の具体処理
  - ガックン/初期出目/液晶/ランプ等による変更判別
  - 朝一専用当選率等の公開数値（約50%高確開始を除く）

sources:
  - url: https://web-greenbelt.jp/00002948/
    title: 伝説の泣き虫先生がパチスロ機で復活 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: 型式スクールウォーズR、銀座、3月中旬納品予定、ART純増約1.0枚/G、20/30G、最大85%ループ、上乗せ、BIG約240枚、RB約60枚、合算範囲、設定1/3/5/F。
  - url: https://www.all7.jp/plans/index/2009/03
    title: 2009年3月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: SCHEDULE_DATABASE
    usedFor: スクール☆ウォーズの2009-03-16導入予定。
  - url: https://www.p-world.co.jp/machine/database/5459
    title: スクール☆ウォーズ / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式、設定別BIG/REG/合算、機械割、BIG/REG獲得枚数、ART20/30G、純増約+1.0枚/G、1000G天井、設定変更後約50%高確率スタート。
  - url: https://pachinko.hatenablog.jp/entry/2009/03/school-wars
    title: 銀座「パチスロ スクール☆ウォーズ」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SPEC_DATABASE
    usedFor: 型式、設定1/3/5/Fの精密BIG/REG/合算値、出玉率の丸め系列、2009年3月リリースの補助照合。

researchNotes:
  - LATEST_HANDOFF正本349件地点から継続。2009-03-01同日群候補のうち具体日が3/1と確認できないものを3/1へ誤登録せず、3/2〜15を監査して最初に具体導入日を確定できた3/16本機へ接続。
  - 「スクール☆ウォーズ / スクールウォーズR / 銀座」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1000G / 高確 / 50枚 / 1000円」を組み替えて再探索。
  - 設定変更後約50%高確スタートは本機固有公開値として採用。一方、1000G天井カウンタの変更時処理は別問題なので推測で結び付けない。
