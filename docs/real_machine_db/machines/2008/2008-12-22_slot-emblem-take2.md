# スロット代紋TAKE2

machineName: スロット代紋TAKE2
manufacturer: エレコ
releaseDate: 2008-12-22
releaseDatePrecision: DAY_SCHEDULE_CONFIRMED
modelNumber: エンブレムTAKE2-3
generation: 5号機
systemType: ボーナス+RT / CZ
settings: 1 / 4 / 6 / H

payoutRateBySetting:
  primary: {1: 97.8%, 4: 101.0%, 6: 108.1%, H: 115.0%}
  status: CONFLICT
  note: 当時解析はメーカー発表値として上記を掲載し、公式も最高出玉率115%を明記。後年5号機クロニクルは1/4/5/6=98.0/102.0/107.1/114.2%で設定ラベルも異なるためCONFLICT。

initialHitBySetting:
  BIG: {1: 1/364.09, 4: 1/327.68, 6: 1/284.94, H: 1/229.15}
  REG: {1: 1/655.36, 4: 1/555.39, 6: 1/489.07, H: 1/404.54}
  totalBonus: {1: 1/234.06, 4: 1/206.09, 6: 1/180.04, H: 1/146.29}
  status: ANALYSIS_HIGH_CONTEMPORARY

baseGamesPer50:
  value: {1: 36.77G, 4: 36.75G, 6: 36.73G, H: 36.71G}
  status: ANALYSIS_HIGH_CONTEMPORARY

netIncrease:
  value: RT中コイン微増
  numericValue: UNVERIFIED_AFTER_RESEARCH
  status: INDUSTRY_QUALITATIVE_ONLY

basicPayout:
  BIG: 約312枚
  REG: 約105枚
  regulatedPayout: {BIG: 345枚超払い出しで終了, REG: 160枚超払い出しで終了}
  status: ANALYSIS_HIGH_CONTEMPORARY

modeSpecificMinimumData:
  - 公式・当時資料で100Gまたは2100G継続RTを確認。
  - CZはボーナス後だけでなく通常時からも突入。
  - 最高設定Hのボーナス合算1/146.29、メーカー発表PAYOUT 115.0%。
  - 細かな内部CZ/RT抽選は物差しDB対象外。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
  gameCounterReset: NONE_CONFIRMED_AFTER_RESEARCH
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH
  numericResetData:
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
  note: 機種名・型式・メーカーの表記揺れと「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン」を組み替え、公式・業界記事・当時解析・旧DB・回顧資料を横断。パチマガスロマガに「攻め時・ヤメ時・設定変更時」項目の存在は確認したが本機固有本文を回収できず、一般的な5号機挙動から補完しない。

coreStatus: COMPLETE_CORE_EXCEPT_NUMERIC_RT_NET_INCREASE_WITH_CONFLICTS_PRESERVED
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_NO_DEVICE_SPECIFIC_RESET_RULE

conflicts:
  - 機械割/設定構成: 当時メーカー発表1/4/6/H=97.8/101.0/108.1/115.0% vs 後年1/4/5/6=98.0/102.0/107.1/114.2%。
  - systemType: 公式「ボーナス+RT」・当時解析「RT/CZ」 vs 後年「A+ART」。公式/当時資料をprimary。
  - basicPayout: 当時BIG約312枚/REG約105枚 vs 後年BIG約252枚/REG約104枚。
  - 日付定義: 業界記事は2008-12-21納品開始予定、ALL7は2008-12-22導入予定。本DBはホール導入予定12/22を採用。

missingFields:
  - 検定番号
  - RT純増の比較可能な枚/G数値
  - 設定変更/据え置き/電源OFF→ON時の本機固有CZ/RT・内部状態処理
  - 朝一恩恵/不利、変更判別、公開朝一数値

sources:
  - {url: https://www.universal-777.com/product/slot/emblem_take2/, title: SLOT代紋TAKE2 / ユニバーサル公式, retrievedAt: 2026-09-02, confidence: OFFICIAL}
  - {url: https://www.universal-777.com/product/slot/2008/, title: 2008年パチスロ製品情報 / ユニバーサル公式, retrievedAt: 2026-09-02, confidence: OFFICIAL}
  - {url: https://web-greenbelt.jp/00003896/, title: 当たりやすさと増えるRTの融合したA+RT機登場 / グリーンべると, retrievedAt: 2026-09-02, confidence: INDUSTRY_CONTEMPORARY}
  - {url: https://www.all7.jp/plans/index/2008/12, title: 2008年12月新台導入予定一覧 / ALL7, retrievedAt: 2026-09-02, confidence: INDUSTRY_DATABASE}
  - {url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/75/h.php, title: ボーナス抽選確率・PAYOUT / パチマガスロマガ, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_CONTEMPORARY}
  - {url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/75/c.php, title: 1000円あたりゲーム数 / パチマガスロマガ, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_CONTEMPORARY}
  - {url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/75/a.php, title: 基本システム / パチマガスロマガ, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_CONTEMPORARY}
  - {url: https://www.p-world.co.jp/machine/database/5362, title: スロット代紋TAKE2 / P-WORLD, retrievedAt: 2026-09-02, confidence: INDUSTRY_DATABASE}
  - {url: https://5goki.com/universal, title: ユニバーサル系5号機全機種一覧 / 5号機クロニクル, retrievedAt: 2026-09-02, confidence: RETROSPECTIVE_DATABASE}

researchNotes:
  - 2008-12-16〜21境界はALL7月間一覧を監査し、12/15群の次の具体導入日候補は12/22。本機の12/21はグリーンべるとで納品開始予定なので導入日とは分離。
  - 表記揺れ「スロット/SLOT/代紋/エンブレムTAKE2」「エンブレムTAKE2-3」とメーカー表記を変えて欠損を再探索した。
