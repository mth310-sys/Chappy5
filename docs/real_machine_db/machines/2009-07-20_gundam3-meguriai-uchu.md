# パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」

machineName: パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: 山佐
releaseDate: 2009-07-20
releaseDatePrecision: EXACT_DELIVERY_START_CONTEMPORARY
releaseDateNote: 当時業界記事で2009-07-20から納品開始予定。K-Naviはホール導入開始2009-07-21、パチビーは導入日2009-07-22。物流開始/ホール導入日の定義差として保持する。
generation: 5号機
systemType: A+ART / REG（バトルチャンス）+次回REGまで継続ART / パンク回避
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  status: CONFLICT
  seriesA_contemporary_secondary:
    setting1: 96.9%
    setting2: 98.6%
    setting3: 100.7%
    setting4: 105.3%
    setting5: 110.5%
    setting6: 119.9%
  seriesB_industry_database:
    setting1: 97.8%
    setting2: 99.8%
    setting3: 102.0%
    setting4: 105.9%
    setting5: 110.8%
    setting6: 119.9%
  note: 当時ホール系資料/後年整理資料の96.9〜119.9%系列と、P-WORLD/パチビー系97.8〜119.9%系列が競合。算出条件差を直接解消できないため平均せず双方を保持。

initialHitBySetting:
  battleChanceCombined:
    setting1: 1/89.5
    setting2: 1/89.5
    setting3: 1/88.9
    setting4: 1/88.9
    setting5: 1/88.3
    setting6: 1/87.9
  status: ANALYSIS_HIGH_CROSSCHECKED_WITH_ROUNDING_NOTE
  note: P-WORLD精密/丸め系列を主値。別当時資料では設定6を1/87.8と表記するため丸め差として注記。ARTトータル初当たりはK-Naviに専用解析項目の存在を確認したが、設定別本文数値を今回確定回収できず推測しない。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名/略称/山佐と「1000円あたりゲーム数」「50枚」「ベース」「コイン持ち」を組み替え、K-Navi/P-WORLD/旧DB/回顧資料まで再探索したが比較可能な直接数値を確定できず。

netIncrease:
  gEpisode: 約+1.2枚/G
  status: OFFICIAL_AND_INDUSTRY_CROSSCHECKED

basicPayout:
  battleChance: 最大63枚
  status: ANALYSIS_AND_INDUSTRY_CROSSCHECKED

modeSpecificMinimumData:
  - 山佐公式は5号機A+ARTタイプとして掲載。
  - REG「バトルチャンス」勝利がART「Gエピソード」突入の主契機。
  - Gエピソードは次回バトルチャンスまで継続し、純増約+1.2枚/G。
  - 解析資料ではART継続率MAX87.5%。当時グリーンべると記事は「最高継続率90%以上」と表現しており、数値定義/表現差は平均化しない。
  - 通常時は低確・通常・高確の内部状態が存在し、ART突入率に影響。
  - ボーナス間782G消化後に当選したBCは継続率87.5%のARTへ突入する救済天井。
  - ART突入抽選12連続非当選後は、以後のART突入率が50%になる救済仕様。

resetBehavior:
  settingChangeBehavior: 設定変更後は50%で高確からスタートする。P-WORLDとパチビーで一致するため本機固有の朝一挙動として採用。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の782G天井カウンタ、ART12連続非当選救済カウンタ、内部状態の引継ぎを本機固有の直接資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井/救済カウンタ、内部状態、液晶開始ステージの扱いを直接確認できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の782G天井カウンタ消去/引継ぎを直接明記する高信頼本文を今回確定回収できず、一般的5号機挙動から補完しない。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時天井はボーナス間782Gだが、設定変更後に0G起算へリセットされるか、短縮/別条件になるかを直接確定できず。
  modeAfterReset: 設定変更後50%で高確スタート。残り50%の低確/通常振分や朝一専用モードの有無はUNVERIFIED_AFTER_RESEARCH。
  stateAfterReset: HIGH_START_50_PERCENT_CONFIRMED_ANALYSIS。高確50%以外の詳細状態振分は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 設定変更後50%高確スタート。高確はART突入率が高い内部状態として公開されている。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶開始ステージ、天井挙動等による設定変更/据え置き判別を確定できる複数根拠なし。
  numericResetData:
    normalCeiling: ボーナス間782G到達後のBCで継続率87.5%ART
    consecutiveArtMissRescue: ART突入抽選12連続非当選後、以後ART突入率50%
    resetHighStateStartRate: 50%
    resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: 高確50%のみ確認。残り50%内訳UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    otherResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_BASE_GAMES_UNVERIFIED_PAYOUT_CONFLICT
resetBehaviorQA: COMPLETE_RESEARCH_PASS_HIGH_START_50_CONFIRMED_COUNTER_CARRY_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - 機械割は96.9/98.6/100.7/105.3/110.5/119.9%系列と97.8/99.8/102.0/105.9/110.8/119.9%系列が競合。計算条件を確定できないため平均化しない。
  - ART最高継続率はP-WORLD/パチビー等でMAX87.5%、当時グリーンべるとは「最高継続率90%以上」と表現。DBの比較数値は解析系87.5%を保持し、業界発表表現差を注記。
  - 導入日は納品開始2009-07-20、K-Naviホール導入2009-07-21、パチビー2009-07-22。日付定義差として保持。

missingFields:
  - 正式型式名・検定番号の直接根拠
  - 50枚あたりゲーム数/ベース
  - 設定別トータルART初当たり数値
  - 設定変更時の782G天井カウンタ・12連敗救済カウンタのリセット/引継ぎ
  - 据え置き/電源OFF→ON時の天井・救済カウンタ、内部状態
  - 高確50%以外の設定変更後状態振分
  - ガックン/初期出目/液晶等による本機固有の変更判別

sources:
  - url: https://yamasa-next.co.jp/model_gd3/
    title: 機種情報：パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」 / 山佐ネクスト
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 5号機、A+ART、2009年7月稼働、バトルチャンス、Gエピソード、純増1.2枚/G、次回BCまで継続。
  - url: https://web-greenbelt.jp/00003115/
    title: 名作「ガンダム」の感動ストーリーを完全再現 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2009-07-20納品開始予定、BC約1/88、ART純増1.2枚/G、当時発表の最高継続率表現。
  - url: https://www.p-world.co.jp/machine/database/5575
    title: パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 5号機ART、BC最大63枚、設定別BC合算、機械割97.8〜119.9%、782G天井、12連続非当選救済、設定変更後50%高確、内部状態。
  - url: https://www.pachibee.jp/machines/index/209090054
    title: パチスロ 機動戦士ガンダムIII ～めぐりあい宇宙編～ / パチビー
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 2009-07-22導入、BC最大63枚、ART純増1.2枚/G・MAX87.5%、782G天井、12連続非当選救済、設定変更後50%高確の照合。
  - url: https://p-kn.com/slot/990/
    title: パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_MAJOR_ANALYSIS
    usedFor: 2009-07-21ホール導入、機種概要、朝イチ特典/設定変更後解析項目の存在、トータルART突入率項目の存在。
  - url: https://ameblo.jp/metalcafe/
    title: スロット専門店メタルカフェが贈るスロット魂「ガンダム!!」
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY
    usedFor: 最速オープン2009-07-21、BC合算、機械割96.9〜119.9%系列、BC63枚、ART純増1.2枚/G。
  - url: https://moge-site.com/archives/6750
    title: 機動戦士ガンダムIII スペック / モゲスロ
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SECONDARY
    usedFor: BC合算と機械割96.9〜119.9%系列の別系統照合。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、旧INDEX、LATEST_HANDOFF、392ヴァンパイア、直近mainコミットを再取得。LATEST_HANDOFFが旧INDEXより新しいため392件地点を正本として継続。
  - 2009-07-06同日群と2009-07-07〜20を境界監査。handoff候補の「デンジャラッシュ7」はCRパチンコであり本線対象外と確認。HI-UPの2009-07-20新パネルは既存機のパネル追加で新機種レコード対象外。
  - 「機動戦士ガンダムIII / ガンダム3 / めぐりあい宇宙編 / 山佐」と「型式/検定番号/設定変更/リセット/朝一/据え置き/電源OFF ON/天井/宵越し/モード/高確/ガックン/1000円/50枚/ベース/ART突入率」を組み替えて再探索。
  - 公式、当時業界記事、P-WORLD、K-Navi、パチビー、当時ホール系資料、後年回顧資料を横断。性能コアはベース以外を回収。設定変更後高確50%は複数解析系統で一致。天井カウンタ等の設定変更/据え置き/電断処理は直接根拠を確定できず推測しない。
