# マジカルハロウィンR

machineName: マジカルハロウィンR
formalModelName: マジカルハロウィンR JF
manufacturer: KPE
releaseDate: 2009-03-16
releaseDatePrecision: SCHEDULED_INTRODUCTION_DATE_WITH_DELIVERY_DATE_CROSSCHECK
releaseDateNote: ALL7の2009年3月導入予定一覧が2009-03-16を明記。当時グリーンべるとは2009-03-15から納品開始予定と記録。KONAMI公式機種アーカイブは2009年3月稼働開始で整合するため、ホール導入予定日をreleaseDateに採用し、納品開始日との定義差を保持。
generation: 5号機
systemType: ボーナス+ART / カボチャレンジ・カボチャンス / 4ライン
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 98.40%
  setting2: 99.57%
  setting3: 102.21%
  setting4: 104.31%
  setting5: 105.91%
  setting6: 109.29%
  status: ANALYSIS_CROSSCHECKED_WITH_CONTEMPORARY_SUMMARY_AND_RETROSPECTIVE
  note: 2009年更新の5号機まとめwikiは98.4/99.6/102.2/104.3/105.9/109.3%。2009年3月スペック回顧ページの精密値98.40/99.57/102.21/104.31/105.91/109.29%と丸め整合。平均せず精密系列を主値、丸め系列を照合値として保持。

initialHitBySetting:
  BIG:
    setting1: 1/2048.0
    setting2: 1/2048.0
    setting3: 1/2048.0
    setting4: 1/2048.0
    setting5: 1/2048.0
    setting6: 1/2048.0
  BG_REG:
    setting1: 1/183.1
    setting2: 1/179.1
    setting3: 1/175.2
    setting4: 1/171.6
    setting5: 1/168.0
    setting6: 1/164.7
  bonusCombined:
    setting1: 1/168.0
    setting2: 1/164.7
    setting3: 1/161.4
    setting4: 1/158.3
    setting5: 1/155.3
    setting6: 1/152.4
  suddenKaboChallenge:
    setting1: 1/240.9
    setting2: 1/248.2
    setting3: 1/256.0
    setting4: 1/264.3
    setting5: 1/273.1
    setting6: 1/282.5
  status: CONTEMPORARY_INDUSTRY_AND_2009_ANALYSIS_CROSSCHECKED
  note: 当時グリーンべるとはBIG全設定1/2048、BG約1/183〜1/164、突カボ約1/240〜1/282、全合成約1/98と説明。設定別精密値は2009年更新5号機まとめwikiで補完。

baseGamesPer50:
  value: 約36G/50枚（1000円あたり）
  status: CONTEMPORARY_INDUSTRY
  note: 当時グリーンべると発表値。設定別差は公開本文では確認できないため共通目安として保持。

netIncrease:
  kaboChanceART: 約+1.4枚/G
  status: CONTEMPORARY_INDUSTRY_CROSSCHECKED
  note: 当時グリーンべるとと2009年更新5号機まとめwikiが約1.4枚/Gで一致。後年回顧には約1.5枚/G表記もあるため、当時資料を優先する。

basicPayout:
  BIG: 約160枚
  BG_REG: 約30枚
  status: CONTEMPORARY_INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: 当時グリーンべると、パチマガスロマガが一致。パチマガは規定払い出し233枚超/44枚超、純増約160枚/約30枚と明記。

modeSpecificMinimumData:
  - ART「（スーパー）カボチャンス」は、獲得・上乗せされたARTゲーム数を消化するまで継続し、純増約+1.4枚/G。
  - ボーナス後RT「カボチャレンジ」中の自力昇格に加え、通常時からの「突カボ」を搭載。
  - 「スーパーカボチャンス」は新生魔界ゾーン中のボーナス等を契機とし、ボーナス後75%でART継続するループ仕様。
  - ボーナス後573Gで高確ゾーン、999Gで天井魔界ゾーンへ移行するハマリ救済を搭載。
  - 999G天井魔界ゾーンは2009年更新解析で転落なしとされ、ボーナスまたは対象SIN成立でスーパーカボチャンス契機となる。
  - 1セット最低G数について後年回顧に「50G以上」表記があるが、今回の一次/当時業界本文では固定1セット定義を直接確認できないため、物差し上はARTゲーム数管理として扱い、内部振分までは収集しない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式「マジカルハロウィンR JF」/KPE/マジハロRと「設定変更」「リセット」「朝一」「変更時」「高確」を組み替えて再探索したが、本機固有の設定変更時初期状態・天井カウンタ処理を直接説明する資料は確定できず。後継マジハロ2/5/8の朝一仕様を流用しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の573G高確/999G魔界までのゲーム数、ART残G、カボチャレンジ/内部RT状態の持越しを本機固有に明記した直接資料は未確定。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のゲーム数/RT/ART/高確・魔界状態の処理を直接確認できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常側の573G・999G救済ゲーム数は確定しているが、設定変更で0G再起算か、据え置き/電断で引継ぐかは本機固有資料未確定。
  ceilingAfterReset: NORMAL_RESCUE_573G_HIGH_PROBABILITY_AND_999G_MAKAI_CONFIRMED / RESET_SPECIFIC_SHORTENING_UNVERIFIED。設定変更専用の短縮天井値は確認できず。
  modeAfterReset: NO_RESET_SPECIFIC_MODE_CONFIRMED_AFTER_RESEARCH。朝一専用モードや設定変更時モード振分の公開値は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。高確/魔界/カボチャレンジ/ART状態の変更時処理は直接未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。通常の573G/999G救済は確認済みだが、設定変更専用恩恵としては確認できない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「ガックン」「初期出目」「液晶/ランプ」「朝一挙動」を含めて再探索したが、本機固有の直接判別方法は確定できず。後継機のリールガックン情報を混入しない。
  numericResetData:
    normalHighProbabilityRescue: 573G（ボーナス後）
    normalMakaiCeiling: 999G（ボーナス後）
    resetSpecificCeiling: NONE_PUBLISHED_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_PUBLISHED_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_PUBLISHED_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_RESET_GAPS
resetBehaviorQA: RESEARCHED_UNVERIFIED_FOR_CHANGE_CARRYOVER_POWER_CYCLE

conflicts:
  - artNetIncreaseRounding: 当時グリーンべると/2009年解析は約+1.4枚/G、後年回顧には約+1.5枚/G。平均せず当時資料の+1.4枚/Gを主値として後年値を注記。
  - payoutRateRounding: 精密系列98.40/99.57/102.21/104.31/105.91/109.29%と丸め系列98.4/99.6/102.2/104.3/105.9/109.3%。実質同系列の丸め差として保持。

missingFields:
  - 設定変更時の573G/999G救済カウンタ初期化/引継ぎ
  - 据え置き・単純電源OFF→ON時のゲーム数/RT/ART/高確/魔界状態処理
  - 設定変更時の高確/魔界/カボチャレンジ/ART状態処理
  - ガックン/初期出目/液晶/ランプ等による変更判別
  - 設定変更専用の朝一モード振分・短縮天井・朝一当選率/恩恵発生率

sources:
  - url: https://www.konami.com/amusement/psm/archive/ps/2009/magihalloR/
    title: 機種アーカイブ 2009年 マジカルハロウィンR / KONAMI AMUSEMENT
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 2009年3月稼働開始、5号機ART、機種同定。
  - url: https://web-greenbelt.jp/00002951/
    title: KPE、『マジハロ』後継機を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: KPE、3月15日納品開始予定、ART約+1.4枚/G、BIG/BG獲得枚数、BIG/BG/突カボ概算、約36G/1000円、573G高確、999G魔界、スーパーカボチャンス75%継続。
  - url: https://www.all7.jp/plans/index/2009/03
    title: 2009年3月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: SCHEDULE_DATABASE
    usedFor: 2009-03-16導入予定。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/13/a.php
    title: マジカルハロウィンR / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ART/RT/同時成立/4ライン、BIG233枚超払い出し・純増約160枚、REG44枚超払い出し・純増約30枚。
  - url: https://w.atwiki.jp/5gouki/pages/145.html
    title: マジカルハロウィンR / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS
    usedFor: 2009年更新時点の設定別BIG/BG/合成/突カボ/機械割、ART約+1.4枚/G、573G/999G救済、999G魔界の扱い。
  - url: https://pachinko.hatenablog.jp/archive/2009/03/01
    title: KPE「マジカルハロウィンR」の筺体＆スペック＆情報 / pachinko’s blog
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SPEC_DATABASE
    usedFor: 型式名マジカルハロウィンR JF、設定別出玉率精密値、2009年3月リリースの補助照合。

researchNotes:
  - 最新mainではLATEST_HANDOFFが349件地点のままだったが、直近コミット2606adf3959ac1d483146e686b718efeae0edb11で350「スクール☆ウォーズ」が既に追加済み。350を再登録せず、その同日群を監査して本機を351件目とした。
  - ALL7の2009-03-16同日群に「スクール☆ウォーズ」と「マジカルハロウィンR」が存在。当時グリーンべるとは本機を3/15納品開始予定とするため、3/16より後へ送らず同日境界で追加。
  - 「マジカルハロウィンR / マジハロR / マジカルハロウィンR JF / KPE」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 573G / 999G / 天井 / 高確 / 魔界 / ガックン / 初期出目」を組み替えて複数回再探索。
  - 検索ではマジカルハロウィン2/5/8/Trick or Treat等の後継機朝一情報が多数ヒットしたが、本機Rへの流用は行っていない。
  - 実機完全再現用のボーナス中/小役別ART抽選率等はミッション対象外として収集しない。
