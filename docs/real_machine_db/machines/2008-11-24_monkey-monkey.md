# モンキーモンキー

machineName: モンキーモンキー
manufacturer: ヤーマ
distributionPartner: ベルコ
releaseDate: 2008-11-24
releaseDatePrecision: EXACT_DELIVERY_START_CONTEMPORARY_TRADE_SOURCE_OFFICIAL_MONTH_CONFIRMED
modelName: モンキーモンキー
modelNumber: モンキーモンキー3
modelNumberStatus: INDUSTRY_DATABASE
identityStatus: SAME_MACHINE_CONFIRMED_YAMA_BRAND_BELLCO_PARTNERSHIP
manufacturerNote: ベルコ公式が `yama_monkeymonkey` として製品ページを現存公開し、©yama表記。2008年当時資料も「モンキーモンキー3＠ヤーマ」「ベルコとの業務提携記念特別販売キャンペーン第3弾」と記録するため、ベルコ機とヤーマ機を別レコード化しない。
generation: 5号機
systemType: ボーナス + ART
settings: 1 / 2 / 3 / 4
settingsStatus: RETROSPECTIVE_DATABASE_SINGLE

payoutRateBySetting:
  retrospectiveChronicle:
    setting1: 96.5%
    setting2: 99.5%
    setting3: 104.0%
    setting4: 108.0%
  status: RETROSPECTIVE_DATABASE_SINGLE
  note: 5号機クロニクルのヤーマ全機種一覧掲載値。別系統で設定別機械割の直接照合値を回収できなかったため単一回顧DB値として保持。

initialHitBySetting:
  BIG: UNVERIFIED_AFTER_RESEARCH
  ART: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「モンキーモンキー」「モンキーモンキー3」「ヤーマ」「ベルコ」を使い、「ボーナス確率」「BIG確率」「ART確率」「初当たり」「設定1」「設定4」を組み替え、メーカー公式、P-WORLD、パチマガスロマガ旧ページ、5号機クロニクル、当時販売資料、回顧資料を横断したが、設定別の比較可能な直接値を確定できず。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「50枚」「1000円あたり」「ベース」「コイン持ち」を機種名/型式名と組み替えて再探索したが直接値を確定できず。

basicPayout:
  BIGRegulatedEnd: 465枚を超える払い出しで終了
  BIGActualNetCoins: UNVERIFIED_AFTER_RESEARCH
  otherBonus: UNVERIFIED_AFTER_RESEARCH
  status: INDUSTRY_DATABASE_PARTIAL
  note: P-WORLDでBIGの規定払い出し終了条件を確認。実獲得枚数は推測換算せず欠損扱い。

netIncrease:
  ART: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: メーカー公式でART機・「暴走モード」を確認できるが、1Gあたり純増の直接公開値を十分な資料から回収できず。

modeSpecificMinimumData:
  artName: 暴走モード
  officialArtEntryRateStatement: 最大70%以上
  officialArtEntryRateInterpretation: メーカー公式の「暴走モード突入率最大70％以上!!」表記。設定別ART初当たり率とは解釈せず、ART突入率に関する公開上限表現としてのみ保持。
  artDuration: UNVERIFIED_AFTER_RESEARCH
  detailedArtEntryRateBySetting: UNVERIFIED_AFTER_RESEARCH
  ceiling: NONE_CONFIRMED_AFTER_RESEARCH
  note: パチマガスロマガ旧機種ページには「ART(暴走モード)について」「攻め時・ヤメ時・設定変更時」の個別解析項目が存在することまでは確認したが、現存検索インデックスから該当本文の具体値/挙動を回収できなかった。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/ヤーマ/ベルコと「設定変更」「リセット」「朝一」「攻め時」「ヤメ時」「暴走モード」「ART」を組み替え、メーカー公式、P-WORLD、パチマガスロマガ旧解析、5号機クロニクル、当時販売資料、回顧資料を再探索。パチマガ旧機種ページに「攻め時・ヤメ時・設定変更時」の項目が存在することは確認したが本文を回収できず、本機固有の変更処理は確定しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。ART状態/残G等の据え置き時引継ぎを直接確認できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定を変えず電源OFF→ONした場合のART/内部状態処理を直接確認できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数到達型天井の公開情報を確認できず、リセット対象となる天井カウンタも確認なし。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。リセット専用短縮天井/変更後天井の公開値を確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の内部モード再抽選/据え置き引継ぎ、朝一専用モードを直接確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ART/CZ等の内部状態の設定変更・据え置き・電断処理を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一/設定変更専用の主要恩恵を直接確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示、ゲーム数挙動等による本機固有の変更判別を回収できず。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: RESET_FIELDS_RESEARCHED_PACHIMAGA_RESET_SECTION_EXISTENCE_CONFIRMED_BODY_UNAVAILABLE

conflicts: []

missingFields:
  - 設定別BIG/主要初当たり確率
  - 50枚あたりゲーム数/ベース
  - BIG実獲得枚数および他ボーナスの基本獲得性能
  - ART純増枚数/G、基本G数、設定別ART突入率
  - 設定変更/据え置き/電源OFF→ON時のART・内部状態処理
  - 本機固有の変更判別（ガックン/初期出目等）
  - 公開朝一専用数値

sources:
  - url: https://www.s-bellco.co.jp/products/slot/yama_monkeymonkey/
    title: モンキーモンキー / BELLCO公式
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 2008年11月登場、5号機ART、ART名「暴走モード」、暴走モード突入率最大70%以上、©yama表記。ヤーマブランドとベルコ公式掲載の同一性確認。
  - url: https://www.p-world.co.jp/machine/database/5344
    title: モンキーモンキー / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式名「モンキーモンキー3」、BIGが465枚を超える払い出しで終了すること。
  - url: https://ameblo.jp/swv0523/entry-10137975605.html
    title: モンキーモンキー3＠ヤーマ 11月24日 / 当時遊技機販売・ホール実務系ブログ
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_TRADE_SALES_SECONDARY
    usedFor: 2008-11-24納品開始、ヤーマ機としての表記、ベルコとの業務提携記念販売キャンペーン第3弾。公式の2008年11月と月単位で整合。
  - url: https://5goki.com/yama
    title: ヤーマ5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年11月導入、設定1〜4の機械割96.5 / 99.5 / 104.0 / 108.0%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/12/yama_slot_12.php
    title: モンキーモンキー / パチマガスロマガ旧攻略ページ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX_ONLY
    usedFor: 当時解析項目として「ボーナス確率」「PAYOUT・収支・勝率」「ART(暴走モード)について」「攻め時・ヤメ時・設定変更時」が存在したことを確認。該当本文が現存検索結果から取得できないため、数値やリセット挙動の根拠には不使用。
