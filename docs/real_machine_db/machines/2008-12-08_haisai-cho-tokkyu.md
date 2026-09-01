# ハイサイ蝶特急

machineName: ハイサイ蝶特急
manufacturer: タイヨー
releaseDate: 2008-12-08
releaseDatePrecision: DAY_CONFIRMED_INDUSTRY_SCHEDULE
modelName: UNVERIFIED_AFTER_RESEARCH
modelNumber: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
identityStatus: TITLE_MANUFACTURER_RELEASE_DAY_CONFIRMED_MODEL_UNVERIFIED
generation: 5号機
systemType: A+ART（JAC BONUS成立を契機にART「蝶特急MODE」へ移行する2027タイプ）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  sourceA_atwiki:
    setting1: 96.0%
    setting2: 98.3%
    setting3: 99.8%
    setting4: 103.1%
    setting5: 105.6%
    setting6: 110.0%
  sourceB_pachimaga_simulation:
    setting1: 96.35%
    setting2: 98.34%
    setting3: 100.07%
    setting4: 102.35%
    setting5: 104.72%
    setting6: 107.63%
  status: CONFLICT
  note: 旧5号機DB系列とパチマガスロマガのシミュレート値で設定3以降、とくに設定6に無視できない差があるため平均化しない。

initialHitBySetting:
  jacBonus:
    sourceA_atwiki: 全設定共通 1/99.3
    sourceB_pachimaga: 全設定共通 1/99.0
    status: CONFLICT_MINOR_SOURCE_DIFFERENCE
    note: ボーナスは単独抽選。パチマガスロマガでは赤7揃いを全設定共通1/99.0と掲載し、ボーナス成立時にボーナスを入賞させず赤7揃いからART開始と説明。旧5号機DBはREG 1/99.3表記。平均化しない。

baseGamesPer50:
  value: 31.0G
  status: ANALYSIS_HIGH
  note: パチマガスロマガが1000円あたりゲーム数を全設定共通31.0Gと掲載。

basicPayout:
  jacBonus:
    regulatedEnd: 2G消化で終了
    netCoins: ART運用では原則ボーナスを入賞させず、JAC絵柄を揃えない運用のため比較用純増枚数は設定しない
  status: ANALYSIS_HIGH
  note: パチマガスロマガでJAC BONUSは2G消化終了。本機の主出玉はボーナスそのものではなくボーナス成立後ART。

netIncrease:
  art:
    name: 蝶特急MODE
    sourceA_pachimaga: 約+1.8枚/G
    sourceB_atwiki: 約+1.9枚/G
    status: CONFLICT
  note: 定義差/丸め差を断定できないため平均化せず両値保持。

modeSpecificMinimumData:
  art:
    name: 蝶特急MODE
    trigger: ボーナス成立後に赤7（ブランク絵柄）揃いで開始。ボーナスは入賞させずARTを消化する2027タイプ。
    navigation: 3択9枚役ナビで出玉を増やす。ナビ回数0でART終了。
    red7Reentry: RT中ハズレでも赤7揃いが発生し、赤7揃いごとにナビ回数上乗せ抽選。
  ceilingOrHighState:
    normalGameThreshold: 501G
    effect: 天井高確/高確テーブル移行候補
    confidence: ANALYSIS_SINGLE_RETROSPECTIVE
    note: 旧5号機まとめwikiは501Gハマリで高確テーブル参照とする。ボーナス/ART直撃天井ではなく、次回ボーナス成立時のARTナビ回数に有利な高確扱いとして記録。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。旧5号機まとめwikiの「高確率状態について（未確定情報）」に設定変更時1/2で高確テーブル参照との記載があるが、資料自身が未確定情報と明示しており、パチマガスロマガには「攻め時・ヤメ時・設定変更時」専用項目の存在までしか現存本文から確定できない。確定仕様へ昇格しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の501Gカウンタ、高確/低確テーブル、ARTナビ残回数の扱いを本機固有の直接資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の501Gカウンタ、高確/低確テーブル、ART状態の扱いを確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。501G到達で高確テーブル参照という通常時ゲーム数条件は確認できるが、設定変更でそのカウンタが0に戻るか、据え置き/電断で引継ぐかは直接根拠なし。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時501Gは高確移行条件であり、設定変更後専用の短縮ゲーム数は確認できず。
  modeAfterReset: UNVERIFIED_CANDIDATE。旧5号機まとめwikiに設定変更時1/2で高確テーブル参照という候補値があるが同ページ自身が「未確定情報」と明示。確定値として使用しない。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後のART/RT内部状態、ナビ残回数等の初期化・維持を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時1/2高確候補は存在するが未確定情報のため確定恩恵には数えない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプ、朝一ART挙動等を用いた本機固有の設定変更/据え置き判別法を確定できず。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution:
      candidate: 高確テーブル 50%（設定変更時1/2）
      status: UNVERIFIED_SOURCE_EXPLICITLY_LABELS_INFORMATION_UNCONFIRMED
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: PARTIAL_RESET_CANDIDATE_UNCONFIRMED

conflicts:
  - 機械割は旧5号機DB 96.0/98.3/99.8/103.1/105.6/110.0% とパチマガスロマガ・シミュレート 96.35/98.34/100.07/102.35/104.72/107.63% が競合。平均化しない。
  - ART純増はパチマガスロマガ約+1.8枚/G、旧5号機まとめwiki約+1.9枚/Gで競合。平均化しない。
  - ボーナス確率は旧5号機まとめwiki1/99.3、パチマガスロマガ1/99.0の差を両方保持。

missingFields:
  - 正式型式名/検定番号
  - 設定変更時の501Gカウンタ初期化/引継ぎ
  - 据え置き/電源OFF→ON時のゲーム数・高確/ART状態処理
  - 設定変更時1/2高確候補の独立裏取り
  - ガックン/初期出目等による設定変更判別

sources:
  - url: https://www.all7.jp/plans/index/2008/12/10
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: タイヨー製、2008-12-08導入予定。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/a.php
    title: ハイサイ蝶特急 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 2027タイプART、JAC BONUS 2G終了、ART純増約+1.8枚/G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/c.php
    title: ハイサイ蝶特急 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたり31.0G、赤7揃い/ボーナス成立全設定共通1/99.0。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/d.php
    title: ハイサイ蝶特急 通常時の打ち方 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ボーナスを入賞させずARTを消化する仕様、ボーナス成立時の赤7揃い。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/h.php
    title: ハイサイ蝶特急 ボーナス確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 全設定共通ボーナス1/99.0、シミュレート機械割96.35〜107.63%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/taiyo_slot_66.php
    title: ハイサイ蝶特急 機種解析目次 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」専用解析項目が存在することの確認。本文未回収のためresetBehaviorの確定根拠には使用しない。
  - url: https://w.atwiki.jp/5gouki/pages/132.html
    title: ハイサイ蝶特急 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE_CONTEMPORARY_RETROSPECTIVE
    usedFor: ART約+1.9枚/G、501G高確、REG1/99.3、機械割96.0〜110.0%、ナビ回数型ART、設定変更時1/2高確候補。ただし設定変更1/2を含む高確条件は同ページ自身が「未確定情報」と明示。

researchNotes:
  - 「ハイサイ蝶特急/HAI-SAI蝶特急/タイヨー/2008/型式/検定番号/設定変更/リセット/朝一/据え置き/電源OFF ON/501G/天井高確/ガックン/50枚/1000円/コイン持ち」を組み替え、当時解析・旧5号機DB・後継機資料・業界導入予定を横断した。
  - 公式サイト旧URL（taiyo-slot.co.jp/tyoutokkyu/）の存在は旧DBから確認できたが、現存本文を取得できず、型式/検定番号とresetBehaviorの追加裏取りには使えなかった。
  - 後継「ハイサイ蝶特急2」「ターボ」のリセット仕様は初代へ流用していない。
