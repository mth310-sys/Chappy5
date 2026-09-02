# デュエルドラゴンキングダム

machineName: デュエルドラゴンキングダム
formalModelName: デュエルドラゴンキングダムF1
inspectionNumber: 8S1252
manufacturer: エレコ
releaseDate: 2009-05-25
releaseDatePrecision: ANALYSIS_CALENDAR_EXACT_WITH_OFFICIAL_MONTH_SUPPORT
releaseDateNote: K-Navi全国導入カレンダーが2009-05-25を全国一斉導入開始日として掲載。ユニバーサル公式現行アーカイブは2009年5月発売。旧パチスロ業界初まとめには2009-03-30テスト導入との記録があるため、テスト導入と全国導入を分離し、本DB時系列主値は全国導入2009-05-25とする。
generation: 5号機
systemType: ボーナス+ART / A+ART / ボーナス後CZ
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: UNVERIFIED_AFTER_RESEARCH
  setting2: UNVERIFIED_AFTER_RESEARCH
  setting3: UNVERIFIED_AFTER_RESEARCH
  setting4: UNVERIFIED_AFTER_RESEARCH
  setting5: UNVERIFIED_AFTER_RESEARCH
  setting6: 119.8%
  status: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH
  note: パチマガ旧解析のPAYOUT欄は「現在調査中」、P-WORLD現存ページも設定別機械割本文を欠く。2009年当時のパチスロ業界初まとめと後年ランキングで設定6=119.8%を照合できたが、設定1〜5の直接系列は表記揺れ・型式F1・エレコを含め再探索しても確定できず。推定補間や平均化はしない。

initialHitBySetting:
  blueBig:
    setting1: 1/1285.02
    setting2: 1/1285.02
    setting3: 1/1285.02
    setting4: 1/1260.31
    setting5: 1/1260.31
    setting6: 1/1260.31
  redBig:
    setting1: 1/704.69
    setting2: 1/689.85
    setting3: 1/675.63
    setting4: 1/668.73
    setting5: 1/655.36
    setting6: 1/642.51
  bigCombined:
    setting1: 1/455.11
    setting2: 1/448.88
    setting3: 1/442.81
    setting4: 1/436.91
    setting5: 1/431.16
    setting6: 1/425.56
  reg:
    setting1: 1/789.59
    setting2: 1/780.19
    setting3: 1/762.05
    setting4: 1/753.29
    setting5: 1/736.36
    setting6: 1/728.18
  bonusCombined:
    setting1: 1/288.70
    setting2: 1/284.94
    setting3: 1/280.07
    setting4: 1/276.52
    setting5: 1/271.93
    setting6: 1/268.59
  artInitialHit:
    status: UNVERIFIED_AFTER_RESEARCH
  status: OLD_ANALYSIS_CROSSCHECKED
  note: パチマガ旧解析の精密値を主値とし、P-WORLDの同一系列と照合。

baseGamesPer50:
  setting1: 35.51G
  setting2: 35.53G
  setting3: 35.70G
  setting4: 35.87G
  setting5: 36.05G
  setting6: 36.22G
  status: OLD_ANALYSIS_DIRECT
  sourceDefinition: パチマガスロマガ旧解析「1000円あたりのゲーム数」。50枚貸し前提の比較値として保存。

netIncrease:
  art: 約1.0枚/G
  status: OFFICIAL_CROSSCHECKED
  note: ユニバーサル公式が1ゲームあたり純増約1.0枚のARTと明記し、P-WORLDも約1枚増加として整合。

basicPayout:
  blue7Big: 約351枚
  red7Big: 約252枚
  reg: 約108枚
  status: DATABASE_DIRECT
  note: P-WORLD現存機種ページのボーナス仕様を主値とする。ユニバーサル公式は「純増枚数350枚を超えるボーナス」の存在を確認。後年5号機クロニクルのBIG約204枚/REG約48枚は本機の現存P-WORLD値・公式説明と大きく異なるためCONFLICTとして主値へ混ぜない。

modeSpecificMinimumData:
  - 全ボーナス終了後はチャンスゾーンへ移行し、30G完走でARTへ突入する。
  - ARTはパンク役回避型で、ナビポイントがある限りチェリー回避ナビが発生する。
  - 1回の抽選で最大200ナビポイント（P-WORLD換算で約1800G相当）を獲得可能。
  - ボーナス成立だけでは保有ナビポイントはリセットされない。
  - ART中「EXTRA」完成でナビポイント上乗せ契機となる。
  - P-WORLDは本機を「天井」搭載機として分類するが、現存本文では具体的な到達G数・発動条件を欠くため閾値は推定しない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。デュエルドラゴンキングダム/デュエルドラゴンキングダムF1/エレコと「設定変更/リセット/朝一/設定変更時/ナビポイント/天井」を組み替え、パチマガ旧解析に「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが、現存検索索引から本文を直接回収できず。設定変更時のナビポイント・CZ/ART状態・天井進捗を推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き/宵越し/ナビポイント/天井で再探索したが、本機固有の直接資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ON/電断/朝一を型式名まで含め再探索したが、本機固有の直接資料を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。P-WORLDでは天井搭載分類を確認できるが、天井条件と設定変更時カウンタ処理の本文が回収できないため不明。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の短縮天井・到達G数を確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/ART/ナビポイント状態の変更時処理を直接確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更でナビポイントが消える等の記述は直接確認できないため断定しない。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。デュエルドラゴンキングダム/F1/エレコと「ガックン/リールガックン/初期出目/設定変更判別/朝一」を組み替えて再探索したが、本機固有の確定的判別手段を確認できず。
  numericResetData:
    normalCeilingThreshold: UNVERIFIED_AFTER_RESEARCH
    resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_WITH_CORE_PROBABILITIES_BASE_ART_RECOVERED_PAYOUT_RATE_1_TO_5_UNVERIFIED
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_EXCEPT_ADVANTAGEOUS_SECTION_NA

conflicts:
  - basicPayout: P-WORLDは青7BIG約351枚/赤7BIG約252枚/REG約108枚、ユニバーサル公式も350枚超ボーナスを明記。一方5号機クロニクルはBIG約204枚/REG約48枚と記載し大きく不一致。平均化せず、同時代に近いP-WORLD/公式系列を主値とする。
  - releaseTiming: 旧パチスロ業界初まとめは2009-03-30テスト導入、K-Naviは2009-05-25全国一斉導入、ユニバーサル公式は2009年5月発売。流通段階の定義差として併記。

missingFields:
  - 設定1〜5の直接確認可能な機械割系列
  - ART初当り設定別実数
  - 天井の具体的なゲーム数/発動条件
  - 設定変更時のナビポイント・CZ/ART・天井進捗処理
  - 据え置き時のナビポイント・天井進捗引継ぎ
  - 電源OFF→ON時のナビポイント・天井進捗処理
  - 設定変更専用の朝一恩恵/不利・公開数値
  - ガックン/初期出目等による設定変更判別

sources:
  - url: https://www.universal-777.com/product/slot/dueldragon_kingdom/
    title: デュエルドラゴンキングダム / ユニバーサルエンターテインメント
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: エレコ、5号機、ボーナス+ART、2009年5月発売、ART純増約1.0枚/G、350枚超ボーナス。
  - url: https://p-kn.com/calendar/200905/
    title: パチンコ・パチスロ新台導入カレンダー 2009年5月 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_CALENDAR
    usedFor: 2009-05-25全国一斉導入開始日。
  - url: https://www.p-world.co.jp/machine/database/5546
    title: デュエルドラゴンキングダム / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式名F1、検定番号8S1252、ボーナス獲得目安、ART/CZ概要、確率照合、天井搭載分類。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/77/h.php
    title: デュエルドラゴンキングダム ボーナス抽選確率 / パチマガスロマガ旧解析
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 設定別青BIG/赤BIG/BIG合成/REG/ボーナス合成、PAYOUT欄が現在調査中であること。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/77/c.php
    title: デュエルドラゴンキングダム 小役確率・1000円あたりゲーム数 / パチマガスロマガ旧解析
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 設定別50枚ベース。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/77/eleco_slot_77.php
    title: デュエルドラゴンキングダム 解析INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 「攻め時・ヤメ時・設定変更時」専用項目の存在確認。本文回収不能のためresetBehavior値には推測利用しない。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_OLD_DATABASE
    usedFor: 2009-03-30テスト導入記録、設定6機械割119.8%。
  - url: https://crankyseven.com/kikaiwari_ranking4.htm
    title: ART機における最高設定での機械割ランキング
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 設定6機械割119.8%の別系統照合。
  - url: https://5goki.com/universal
    title: ユニバーサル系5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009年5月/A+ARTの補助照合、およびボーナス獲得枚数競合の記録。
