# Get The Ranker

machineName: Get The Ranker
formalModelName: ゲットザランカー2
inspectionNumber: 8S1104
manufacturer: アリストクラートテクノロジーズ
releaseDate: 2009-06-01
releaseDatePrecision: ANALYSIS_CALENDAR_EXACT_WITH_DELIVERY_DATE_CONFLICT_BY_DEFINITION
releaseDateNote: K-Navi全国一斉導入開始日とALL7導入予定は2009-06-01。パチビーは導入日2009-06-02、当時グリーンべるとは納品2009-06-07よりと報道する。日付定義・地域差を混ぜず、本DB主値は全国一斉導入開始日の2009-06-01、他日付を補助値として保持する。
generation: 5号機
systemType: ボーナス+ART / CZ / ゲーム数上乗せ型ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primaryMarketSeries:
    setting1: 97.5%
    setting2: 99.0%
    setting3: 102.5%
    setting4: 105.5%
    setting5: 107.5%
    setting6: 111.0%
  alternateSecondarySeries:
    setting1: 97.5%
    setting2: 99.0%
    setting3: 102.5%
    setting4: 105.5%
    setting5: 107.5%
    setting6: 110.0%
  status: CONFLICT_SETTING6
  note: P-WORLDと5号機クロニクルは設定6=111.0%で一致。別後年整理資料のみ110.0%。平均せず両系列を保持する。

initialHitBySetting:
  big:
    setting1: 1/290.0
    setting2: 1/288.7
    setting3: 1/277.7
    setting4: 1/266.4
    setting5: 1/256.0
    setting6: 1/234.1
  reg:
    setting1: 1/546.1
    setting2: 1/546.1
    setting3: 1/546.1
    setting4: 1/520.1
    setting5: 1/504.1
    setting6: 1/409.6
  bonusCombined:
    setting1: 1/189.4
    setting2: 1/188.9
    setting3: 1/184.1
    setting4: 1/176.2
    setting5: 1/169.8
    setting6: 1/149.0
  artInitialHit:
    status: UNVERIFIED_AFTER_RESEARCH
    note: ART初当たり/ART突入率/アラグイチャンス確率/設定差を機種名・型式名・メーカー名で再探索したが、物差し用の設定別初当たり系列を直接確定できず。
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLDと5号機クロニクルの精密値が一致。後年資料の整数丸め系列とも概ね整合。

baseGamesPer50:
  setting1: 38.87G
  setting2: 39.01G
  setting3: 39.17G
  setting4: 39.35G
  setting5: 39.53G
  setting6: 39.78G
  status: OLD_ANALYSIS_DIRECT
  sourceDefinition: パチマガスロマガ「1000円あたりのゲーム数」の直接掲載値。

netIncrease:
  art: 約+1.0枚/G
  status: CONTEMPORARY_INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: 当時グリーンべると、P-WORLD、HAZUSEで一致。

basicPayout:
  big: 約200枚
  reg: 約100枚（技術介入時MAX103枚）
  artBasicUnit: 基本30Gのゲーム数管理型（後年回顧資料）
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: 当時グリーンべるとがBB約200枚/RB約100枚、P-WORLDがBIG約200枚/REG MAX103枚。ART基本30Gは後年回顧資料の直接記述として補助値扱い。

modeSpecificMinimumData:
  - ボーナス終了後はチャンスゾーンへ移行し、押し順正解またはナビでART「Aragui Chance」へ突入。
  - ARTはゲーム数管理・上乗せ型。ART中ボーナス成立時は上乗せが確定し、ボーナス後も残りARTゲーム数を継続消化する。
  - 通常時999G消化で天井。チャンスゾーン経由で次回ボーナスまで継続するARTへ突入する。
  - ART初当たり設定別系列は十分再探索後も未確定。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。ゲットザランカー/Get The Ranker/ゲットザランカー2/8S1104/アリストクラートと「設定変更/設定変更時/リセット/朝一/天井クリア/ART残G/CZ」を組み替え、旧解析・天井DB・回顧資料を横断したが、本機固有の直接記述を確定できず。
  carryOverBehavior: PARTIAL_SECONDARY_EVIDENCE_RESET_NOT_CARRYOVER。後年の天井狙い資料が「宵越し×」と記載するため天井G数を宵越し不可とする二次根拠はある。ただし設定変更・閉店時処理の直接一次/当時解析本文までは回収できず、断定強度を上げない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみで999G天井進捗、CZ、ART残G、状態がどう扱われるかの直接根拠を確定できず。
  gameCounterReset: PARTIAL_SECONDARY_EVIDENCE_RESET_TO_ZERO_ON_CHANGE_OR_STORE_RESET。通常999G天井と「宵越し×」を確認。具体的な設定変更操作と天井カウンタ消去を同一資料で直接説明する根拠は未回収。
  ceilingAfterReset: NO_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH。通常天井999G。設定変更専用の短縮天井・別天井数値は確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード/設定変更時モード振り分けを確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/ART/通常状態の変更時処理を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。短縮天井、朝一ART/CZ優遇、設定変更専用当選率優遇等の確定情報なし。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目/液晶ステージ/朝一挙動による設定変更判別を多段検索したが、本機固有の確定手段を回収できず。
  numericResetData:
    normalCeiling: 通常状態999G
    ceilingBenefit: CZ経由で次回ボーナス成立まで継続するART
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    gameCountAfterSettingChange: PARTIAL_SECONDARY_EVIDENCE_RESET_NOT_CARRYOVER
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_EXCEPT_ART_INITIAL_HIT_WITH_SETTING6_PAYOUT_CONFLICT
resetBehaviorQA: PARTIAL_WITH_CEILING_AND_SECONDARY_NO_CARRYOVER_EVIDENCE_OTHER_RESET_DETAILS_UNVERIFIED

conflicts:
  - releaseDateDefinition: K-Navi/ALL7は全国一斉導入・導入予定2009-06-01、パチビーは2009-06-02、当時グリーンべるとは納品開始2009-06-07。日付定義/地域差を分離して保持。
  - payoutRateSetting6: P-WORLDおよび5号機クロニクル111.0%、別後年整理資料110.0%。平均化しない。

missingFields:
  - 設定別ART初当たり/突入率の比較可能な直接系列
  - 設定変更時の999G天井カウンタ処理を直接明記する一次/当時解析本文
  - 据え置き/単純電源OFF→ON時の天井・CZ・ART残G・状態の直接処理
  - 設定変更後モード/状態振り分け
  - ガックン/初期出目等による変更判別
  - 設定変更専用の公開朝一数値

sources:
  - url: https://p-kn.com/calendar/200906/
    title: パチンコ・パチスロ新台導入カレンダー 2009年6月 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_CALENDAR
    usedFor: 2009-06-01全国一斉導入開始日。
  - url: https://www.all7.jp/plans/index/2009/06/10
    title: 2009年6月新台導入予定一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY_DATABASE
    usedFor: 2009-06-01導入予定の別系統照合。
  - url: https://news.p-world.co.jp/articles/3393/greenbelt
    title: アリストクラートが初の全面液晶パチスロを発表 / グリーンべると 2009-04-15
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: 型式ゲットザランカー2、ART約+1.0枚/G、ゲーム数上乗せ型、BB約200枚/RB約100枚、納品2009-06-07より。
  - url: https://www.p-world.co.jp/machine/database/5544
    title: ゲットザランカー / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 5号機ART/CZ、設定別BIG/REG/合算、機械割、ART約+1.0枚/G、BIG/REG獲得枚数、通常999G天井と恩恵。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/37/c.php
    title: ゲットザランカー 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 50枚あたり38.87〜39.78G。
  - url: https://data.hazuse.com/?genre=202&machine_code=8S1104
    title: Get The Ranker / HAZUSE DATA
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_ARCHIVE
    usedFor: メーカー、machine_code 8S1104、ボーナス後CZ、ART約+1.0枚/G、ART残Gのボーナス後継続。
  - url: https://5goki.com/aristocrat
    title: アリストクラートテクノロジーズ5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009年6月、設定別BIG/REG/合算、機械割97.5〜111.0%の別系統照合。
  - url: https://pachinko.hatenablog.jp/entry/2009/06/get-the-ranker
    title: アリストクラートテクノロジーズ「ゲットザランカー」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: SECONDARY_RETROSPECTIVE
    usedFor: 設定別確率の丸め照合、設定6機械割110.0%のCONFLICT系列。
  - url: https://www.pachibee.jp/movies/index/1713
    title: ゲットザランカー / パチビー
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 導入日2009-06-02の別日付系列、5号機ART/CZ/天井/約+1枚/G。
  - url: https://macerate.seesaa.net/article/226196713.html
    title: 天井ハイエナ期待値リスト か行
    retrievedAt: 2026-09-02
    confidence: SECONDARY_STRATEGY_ARCHIVE
    usedFor: ゲットザランカー通常時700G狙い・「宵越し×」という設定変更/店舗リセット時の非引継ぎ補助根拠。
  - url: https://crankyseven.com/sp/tenjo-5ka.htm
    title: か行の機種の天井情報（5号機版） / パチスロ立ち回り講座
    retrievedAt: 2026-09-02
    confidence: SECONDARY_CEILING_DATABASE
    usedFor: 通常状態999G天井、ART突入。設定変更欄は空欄のため変更時仕様の断定には使用しない。
  - url: https://pachiseven.jp/articles/detail/7692
    title: オカイ☆褒める リアルバウト魚釣伝説 -ゲットザランカー-
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_EDITORIAL
    usedFor: ART基本30G、約1枚/Gの補助照合。

researchNote:
  - 既存repoをGet The Ranker/ゲットザランカーで検索し未登録を確認してから新規作成。
  - 欠損判定前に英字/カナ/型式ゲットザランカー2/8S1104/メーカー名を変え、ART初当たり・設定変更・リセット・朝一・据え置き・宵越し・電源OFF ON・天井クリア・モード・ガックンを多段検索。
  - 「宵越し×」は直接の設定変更解析本文ではないため、settingChangeBehaviorを確定扱いにせずPARTIAL補助根拠として保持。
  - 有利区間は制度前。細かな小役抽選・ART上乗せ振り分けは物差しDB対象外として収集していない。
