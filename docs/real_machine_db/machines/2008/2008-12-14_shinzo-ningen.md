# シンゾウニンゲン（新造人間キャシャーン）

machineName: シンゾウニンゲン（新造人間キャシャーン）
manufacturer: JPS（ジェイピーエス）
releaseDate: 2008-12-14
releaseDatePrecision: DAY_CONFIRMED_INDUSTRY_DELIVERY_START_WITH_12_15_SCHEDULE_VARIANCE
modelName: シンゾウニンゲン
modelNumber: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: 8S0731
identityStatus: 2008_MODEL_CONFIRMED_DISTINCT_FROM_2006_PURPLE2
generation: 5号機
systemType: A+ART / TYPE-F（ボーナス成立状態を利用するART「キャシャーンタイム」）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 96.3%
  setting2: 98.8%
  setting3: 100.5%
  setting4: 103.9%
  setting5: 109.7%
  setting6: 116.7%
  status: ANALYSIS_HIGH_MULTI_SOURCE
  note: P-WORLD、K-Navi系、当時販社資料、5号機回顧DBで同系列を確認。設定6 116.7%は後年回顧記事でも照合。

initialHitBySetting:
  bonusCombined:
    setting1: 1/39.3
    setting2: 1/39.3
    setting3: 1/39.2
    setting4: 1/39.2
    setting5: 1/39.1
    setting6: 1/39.0
  individualBigAndMissionBonus: UNVERIFIED_AFTER_RESEARCH
  status: ANALYSIS_HIGH_MULTI_SOURCE_COMBINED_ONLY
  note: P-WORLDと当時系資料で合成確率は一致。BIG/MISSION BONUS個別設定別確率は十分再探索後も確定できず、合算から逆算しない。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: シンゾウニンゲン/新造人間キャシャーン/JPS/8S0731と「50枚・1000円・ベース・コイン持ち」を組み替え、業界・解析・旧DB・回顧資料を横断したが比較可能な数値を確定できず。

basicPayout:
  big:
    regulatedEnd: 130枚を超える払い出しで終了
    netCoins: 約90枚（当時販社系資料）
  missionBonus:
    symbol: 赤7・赤7・黒7
    regulatedEnd: 4Gまたは4回入賞で終了
    netCoins: UNVERIFIED_AFTER_RESEARCH
  status: INDUSTRY_DATABASE_AND_CONTEMPORARY_SECONDARY

netIncrease:
  art:
    name: キャシャーンタイム / バトルタイム
    value: 約+2.0枚/G
    status: INDUSTRY_AND_ANALYSIS_HIGH
    note: 当時グリーンべるとは5号機最高クラスと説明。当時販社資料・旧実機販売DBでも約2.0枚/Gを確認。

modeSpecificMinimumData:
  art:
    primaryName: キャシャーンタイム
    secondaryLabel: バトルタイム（BT）
    setStructure: 1セット10G
    averageSets: 約20セット
    maxSets: 100セット
    nominalAverageGames: 約200G（業界記事の10G×平均20セットに基づく構造値。期待獲得枚数とは別）
    maxGames: 1000G
    triggerSummary:
      - 白7（15枚小役）入賞
      - 天井200G到達後のボーナス当選
      - 通常時ボーナス当選時のART抽選
    normalStates: 通常 / 高確率 / 超高確率
    highStateBonus: 高確率・超高確率中のボーナス当選はキャシャーンタイム100%当選（当時業界記事）
    artEndSummary: 規定ARTゲーム数消化。ボーナス入賞/成立に関する終了説明は資料表現差があるため実機完全再現用の細部は採用しない。
  ceiling:
    threshold: 200G
    behavior: 通常時200G消化で天井超高確率モードへ移行し、その後のボーナス当選がART突入契機となる。
    directBonusAtCeiling: false
    status: INDUSTRY_AND_CONTEMPORARY_SECONDARY
    note: グリーンべるとでは「天井（200ゲーム）後のボーナス当選時」がART発動条件。当時販社資料も通常時200Gで天井超高確率モード移行と記載。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時に200G天井カウンタ・通常/高確/超高確状態・ART関連内部状態がどう初期化/再抽選されるか、本機固有の直接資料を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の200G天井カウンタ、内部状態、ARTゲーム数/権利の引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の200Gカウンタ・内部状態・ART関連状態の扱いを直接確認できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時200Gの天井超高確率モード到達条件自体は確認済みだが、設定変更時のカウンタ初期化/据え置き引継ぎは未確認。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の短縮天井・即天井・別ゲーム数は公開根拠を確定できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常/高確率/超高確率の3状態は確認済みだが、設定変更時振り分けは確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用状態または変更時状態振り分けの直接数値を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。通常時200G天井は存在するが、設定変更時だけの恩恵として確認されたものではない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶ステージ、200G挙動などによる本機固有の設定変更/据え置き判別条件を確定できず。
  numericResetData:
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_CORE_BASE_AND_INDIVIDUAL_BONUS_UNVERIFIED
resetBehaviorQA: UNVERIFIED_AFTER_RESEARCH_NO_DIRECT_RESET_RULE

conflicts:
  - 導入日は当時グリーンべるとが「納品は2008-12-14から」、ALL7が「導入予定2008-12-15」。日付を平均・丸めず、納品開始をreleaseDate主値、12/15を導入予定差として保持。
  - 同名の「新造人間キャシャーン」が2006年にも存在する。2006年機は型式パープル2、2008年機は型式シンゾウニンゲン・検定8S0731で別機種。2006年機の96〜105%級データ等を混入させない。
  - ART終了条件の説明は当時資料間で「規定G数/ボーナス成立」等の表現差があるため、物差しDBではART純増・セット構造・主要突入条件のみ確定値として採用し、完全再現用内部処理は収集対象外とする。

missingFields:
  - 50枚あたりゲーム数/ベース
  - BIG/MISSION BONUS個別の設定別確率
  - MISSION BONUSの比較可能な純増枚数
  - 設定変更時の200G天井カウンタ処理
  - 据え置き時の天井/内部状態/ART状態引継ぎ
  - 電源OFF→ONのみ時の内部処理
  - 設定変更時の通常/高確/超高確振り分け
  - 朝一変更判別の具体条件

sources:
  - url: https://web-greenbelt.jp/00003901/
    title: 『2027』の進化系、「シンゾウニンゲン」登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: JPS、機種発表、2008-12-14納品開始、ARTキャシャーンタイム、1セット10G・平均20セット・最大100セット、200G天井後ボーナス/白7/通常ボーナス抽選のART発動条件、通常/高確/超高確、高確以上ボーナスでART100%、ボーナス合算約1/40。
  - url: https://www.all7.jp/plans/index/2008/12
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: シンゾウニンゲン、JPS、2008-12-15導入予定。グリーンべるとの12/14納品開始との差を保持。
  - url: https://www.p-world.co.jp/machine/database/5391
    title: シンゾウニンゲン / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 合成確率1/39.3〜1/39.0、出玉率96.3〜116.7%、BIG 130枚超払い出し終了、ART/5号機、メーカーJPS、検定8S0731、型式シンゾウニンゲン、2008年12月導入。
  - url: https://ameblo.jp/samurai777net/entry-10160992884.html
    title: パチスロ新台/JPS「新造人間キャシャーン」 / 侍～samurai～777ブログ
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY
    usedFor: TYPE-F、BIG約90枚、MISSION BONUS終了条件、内部3状態、ART約+2.0枚/G、通常時200Gで天井超高確率、出玉率、合成確率。
  - url: https://www.a-slot.com/SHOP/jps11.html
    title: JPS シンゾウニンゲン 中古パチスロ実機 / A-SLOT
    retrievedAt: 2026-09-02
    confidence: OLD_MACHINE_DATABASE
    usedFor: TYPE-F系ART、バトルタイム10G/セット、約+2.0枚/G、最大1000G、設定6 116.7%の回顧照合。
  - url: https://pachiseven.jp/articles/detail/11436
    title: 5号機界のキテレツ発明家 JPS回顧 / パチ7
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE
    usedFor: 2006年同名機と2008年型式シンゾウニンゲンの別機種識別、2008年機が高純増ART・設定6 116%超であることの回顧照合。
  - url: https://pachiseven.jp/articles/detail/14268
    title: 5号機歴代最高の設定6出玉率機種は？ / パチ7
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE
    usedFor: シンゾウニンゲン設定6出玉率116.7%の別系統照合。
  - url: https://slothistory.com/zenkishu_7.html
    title: パチスロ全機種一覧 5号機（2007～2008） / パチスロ業界初まとめ
    retrievedAt: 2026-09-02
    confidence: OLD_DATABASE
    usedFor: シンゾウニンゲン、JPS、2008-12-15、5号機ARTとしての時系列照合。

researchNotes:
  - resetBehavior欠損は「シンゾウニンゲン」「新造人間キャシャーン」「JPS」「8S0731」に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/高確/超高確/ガックンを組み替え、業界一次、P-WORLD/K-Navi系、当時販社資料、旧DB、回顧資料まで再探索後の判定。
  - 200G天井は直接ART/ボーナスを発動する天井ではなく、天井超高確率モードへ到達し、その後のボーナス当選がART契機となる構造として保存。

lastUpdated: 2026-09-02
