# ハネスロナイツ

machineName: ハネスロナイツ
manufacturer: オーイズミ
releaseDate: 2008-11
releaseDatePrecision: MONTH_CONFIRMED_MULTIPLE_DATABASES_EXACT_DAY_UNVERIFIED_AFTER_RESEARCH
modelName: ハネスロナイツ
modelNumber: ハネスロナイツ
inspectionNumber: 8S0770
identityStatus: CONFIRMED_PWORLD
manufacturerNote: P-WORLDと5号機クロニクルでオーイズミ製・2008年11月導入を確認。K-Navi現存インデックスにもオーイズミ「ハネスロナイツ」プレス発表会/新機種ニュースが残る。全国納品開始の具体日は表記揺れ・11月具体日・発売/導入/納品を変えて再探索したが確定できず、月精度で保存。
generation: 5号機
systemType: ノーマル / ボーナス主体（ハネスロシリーズ・倍倍チャンス）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pworld:
    setting1: 96.6%
    setting2: 98.3%
    setting3: 100.0%
    setting4: 103.4%
    setting5: 108.0%
    setting6: 114.8%
  retrospectiveChronicle:
    setting1: 96.6%
    setting2: 98.3%
    setting3: 100.0%
    setting4: 103.4%
    setting5: 108.0%
    setting6: 114.8%
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH
  note: P-WORLDと5号機クロニクルが全設定一致。

initialHitBySetting:
  oneXBonus:
    setting1: 1/257
    setting2: 1/286.18
    setting3: 1/257
    setting4: 1/286.18
    setting5: 1/257
    setting6: 1/257
  twoXBonus:
    setting1: 1/327.68
    setting2: 1/286.18
    setting3: 1/307.68
    setting4: 1/267.49
    setting5: 1/282.49
    setting6: 1/235.74
  threeXBonus:
    setting1: 1/655.36
    setting2: 1/455.11
    setting3: 1/618.26
    setting4: 1/399.61
    setting5: 1/512
    setting6: 1/341.33
  fourXBonus:
    setting1: 1/504.12
    setting2: 1/655.36
    setting3: 1/468.11
    setting4: 1/590.41
    setting5: 1/385.51
    setting6: 1/468.11
  combined:
    setting1: 1/95.67
    setting2: 1/93.36
    setting3: 1/91.79
    setting4: 1/87.50
    setting5: 1/83.49
    setting6: 1/75.76
  status: INDUSTRY_DATABASE
  note: P-WORLD掲載の設定別4種ボーナス確率と合算を保存。合算は独立掲載値を使用し、個別値から再計算していない。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「50枚」「1000円」「ベース」「コイン持ち」「千円あたり」を機種名・型式・メーカーと組み替え、P-WORLD、K-Navi、5号機回顧DB、販売/実機資料を再探索。P-WORLD掲示板にユーザー実戦の「1Kで30前後」記述はあるが、解析値ではないため物差し値には採用しない。

basicPayout:
  oneXBonus:
    regulatedEnd: 74枚を超える払い出しで終了
    netCoins: 60枚
  twoXBonus:
    regulatedEnd: 149枚を超える払い出しで終了
    netCoins: 120枚
  threeXBonus:
    regulatedEnd: 224枚を超える払い出しで終了
    netCoins: 180枚
  fourXBonus:
    regulatedEnd: 253枚を超える払い出しで終了
    netCoins: 240枚
  status: INDUSTRY_DATABASE
  note: P-WORLD掲載値。倍倍リールの停止図柄に応じ、基本60枚のボーナス獲得が1〜4倍になるゲーム性。

netIncrease:
  value: NOT_APPLICABLE
  note: P-WORLDはボーナスのみで増やすシンプルなノーマルタイプと明記し、RT/ART/ATを主要出玉機能として確認しない。

modeSpecificMinimumData:
  series: ハネスロシリーズ第3弾
  mainFeature: 倍倍チャンス。右リールの倍倍図柄で小役払出し・ボーナス獲得枚数が変化。
  bonusOnlyNormalType: CONFIRMED_PWORLD
  ceiling: NONE_CONFIRMED_AFTER_RESEARCH
  rtArtAt: NONE_CONFIRMED
  note: 通常ゲーム数到達型天井、周期CZ、RT/ART/AT、公開された持続性内部モードは確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。ハネスロナイツ/オーイズミ/型式8S0770と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「初期出目」「攻め時」「ヤメ時」を組み替え、P-WORLD、K-Navi、5号機クロニクル、販売/実機資料、当時・回顧検索を横断したが、本機固有の設定変更時処理を直接確定できず。
  carryOverBehavior: NOT_APPLICABLE_OR_NONE_CONFIRMED。RT/ART/AT、ゲーム数天井、周期CZ、公開モード等の引継ぎ対象となる持続性システムを確認できない。設定変更されない場合の内部RAM一般挙動は本機固有資料なしのため推測しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純な電源OFF→ON時の初期出目/表示等を含む本機固有処理は直接資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数到達型天井・救済RT・周期CZを確認できず。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。リセット短縮天井/変更後専用天井を確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開された通常時内部モード/朝一専用モードを確認できず。
  stateAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一挙動へ影響する公開内部状態を確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更/朝一専用の主要恩恵を確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の主要不利要素を確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示、ゲーム数挙動等による本機固有の設定変更/据え置き判別を回収できず。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: RESET_FIELDS_RESEARCHED_NORMAL_TYPE_NO_PERSISTENT_SYSTEM_CONFIRMED_SPECIFIC_POWER_CHANGE_BEHAVIOR_UNVERIFIED

conflicts: []

missingFields:
  - 50枚あたりゲーム数/ベースの解析値
  - 設定変更時および電源OFF→ON時の本機固有処理
  - ガックン/初期出目等の変更判別
  - 公開朝一専用数値

sources:
  - url: https://www.p-world.co.jp/machine/database/5354
    title: ハネスロナイツ / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: メーカー、5号機ノーマル、型式名、検定番号8S0770、2008年11月導入、設定別4種ボーナス確率/合算/機械割、1〜4倍ボーナス60/120/180/240枚、規定払い出し終了条件、ボーナスのみのゲームフロー。
  - url: https://5goki.com/oizumi
    title: オーイズミ5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年11月導入、機械割96.6 / 98.3 / 100.0 / 103.4 / 108.0 / 114.8%。P-WORLD系列との一致照合。
  - url: https://p-kn.com/slot/881/direct/
    title: ハネスロナイツ 関連コンテンツ / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX_ONLY
    usedFor: オーイズミの「ハネスロナイツ」プレス発表会・新機種ニュースの存在、シリーズ初4倍ボーナス/2リール第3弾の補助確認。具体導入日・リセット挙動には不使用。
  - url: https://store.shopping.yahoo.co.jp/hollup/6360.html
    title: ハネスロナイツ オーイズミ 実機販促パンフレット資料 / ホールアップ
    retrievedAt: 2026-09-02
    confidence: ARCHIVAL_SALES_MATERIAL_EXISTENCE
    usedFor: 当時販促用パンフレット/カタログ資料の現存確認のみ。数値根拠には不使用。
