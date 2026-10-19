# クラシックジャグラー

machineName: クラシックジャグラー
formalModelName: クラシックジャグラーIII
formalModelNameStatus: INDUSTRY_CONTEMPORARY_AND_ANALYSIS_DATABASE
manufacturer: 北電子
releaseDate: 2009-04-13
releaseDatePrecision: ANALYSIS_DATABASE_EXACT_DATE_CROSSCHECKED_WITH_CONTEMPORARY_MID_APRIL_SCHEDULE
releaseDateNote: HAZUSE等の機種DBは2009-04-13導入開始。当時K-Naviは「4月中旬」導入予定、2009-02-12付グリーンべるとは機種発表を確認。本DBでは具体日を2009-04-13として採用し、当時資料側は中旬表記だったことを注記する。
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 96.9%
  setting2: 97.8%
  setting3: 100.7%
  setting4: 102.6%
  setting5: 104.7%
  setting6: 107.4%
  status: OFFICIAL
  note: 北電子公式現存製品ページの出玉率。旧当時整理資料に設定1を96.8%とする丸め差があるが、公式96.9%を主値とし平均化しない。

initialHitBySetting:
  big:
    setting1: 1/287.4
    setting2: 1/282.5
    setting3: 1/268.6
    setting4: 1/260.1
    setting5: 1/248.2
    setting6: 1/240.9
  reg:
    setting1: 1/420.1
    setting2: 1/409.6
    setting3: 1/381.0
    setting4: 1/356.2
    setting5: 1/348.6
    setting6: 1/309.1
  combined:
    setting1: 1/170.7
    setting2: 1/167.2
    setting3: 1/157.5
    setting4: 1/150.3
    setting5: 1/145.0
    setting6: 1/135.4
  status: OFFICIAL
  note: 北電子公式現存製品ページと複数解析資料で一致。

baseGamesPer50:
  setting1: 35.24G
  setting2: 35.35G
  setting3: 35.77G
  setting4: 35.91G
  setting5: 36.10G
  setting6: 36.37G
  status: ANALYSIS_SINGLE
  note: けんのスロットシミュレーション掲載の回転数/50枚。小役確率から本DB側で逆算した値ではなく掲載値をそのまま保持。別系統で同一表の直接照合ができていないためANALYSIS_SINGLE。

netIncrease:
  notApplicable: true
  status: NOT_APPLICABLE
  note: RT/ART/AT非搭載のノーマル機として確認。

basicPayout:
  big: 約312枚
  reg: 約117枚
  bigPayoutEndCondition: 345枚を超える払い出しで終了
  regPayoutEndCondition: 120枚を超える払い出しで終了
  status: INDUSTRY_CONTEMPORARY_AND_ANALYSIS_HIGH
  note: 2009-02-12付グリーンべるとでBB平均312枚/RB平均117枚、パチマガスロマガで規定払い出しと純増を確認。

modeSpecificMinimumData:
  - GOGO!ランプ点灯による完全告知のノーマルタイプ。
  - チェリーとのボーナス同時当選あり。
  - RT/ART/AT、ゲーム数管理当選、周期CZは確認されない。
  - 天井なしを解析資料で確認。

resetBehavior:
  settingChangeBehavior: NO_MACHINE_SPECIFIC_RESET_EFFECT_CONFIRMED_AFTER_RESEARCH。設定変更時専用のゲーム数短縮、モード移行、状態再抽選、朝一当選率などは確認できず。本機はゲーム数天井・RT/ART/AT・通常時モード管理を持たないノーマル機として確認されている。設定変更操作そのもののリール初動等の機種固有挙動は直接資料を確定できない。
  carryOverBehavior: NOT_APPLICABLE_TO_GAME_NUMBER_CEILING_AND_MODE / MACHINE_SPECIFIC_REEL_OR_DISPLAY_BEHAVIOR_UNVERIFIED。据え置きで引き継ぐ天井G数、ART/RT残G、通常時モードは該当なし。ボーナス成立状態を跨いだ場合など電断レベルの内部処理は本DBの物差し粒度外かつ直接資料未確認。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純な電源OFF→ON時の本機固有リール初期位置、GOGOランプ、内部成立状態等の処理を直接確定できず。天井/モード/ART等の朝一価値に関わる持越し対象は確認されない。
  gameCounterReset: NOT_APPLICABLE。通常ゲーム数天井・ゲーム数管理当選を搭載しないため、朝一狙いに関係する天井ゲームカウンタは該当なし。
  ceilingAfterReset: NOT_APPLICABLE / NO_CEILING。通常時天井なし。リセット短縮天井も該当なし。
  modeAfterReset: NOT_APPLICABLE_TO_PUBLISHED_NORMAL_MODES。通常時のゲーム数モード/ATモード管理は確認されない。
  stateAfterReset: NOT_APPLICABLE_TO_PUBLISHED_PERSISTENT_STATES。朝一価値を左右する低確/高確等の持続状態は確認されない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更/朝一専用の短縮天井、モード優遇、当選率優遇、恩恵発生率は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更固有の主要不利要素は確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。クラシックジャグラー固有のガックン、初期出目、ランプ等による設定変更/据え置き判別を直接裏付ける当時解析を確定できず。ジャグラーシリーズ一般論を本機固有情報として転記しない。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE_OR_NONE_PUBLISHED
    resetStateDistribution: NOT_APPLICABLE_OR_NONE_PUBLISHED
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: RESEARCHED_COMPLETE_FOR_YARDSTICK_WITH_MACHINE_SPECIFIC_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - payoutRateSetting1Rounding: 北電子公式96.9%に対し当時旧整理資料の一部は96.8%。公式96.9%を主値とし、平均化しない。
  - modernBadDataWarning: 一部後年DBにBIG最大240枚/REG最大96枚など本5号機と整合しない数値がある。北電子公式・2009年当時グリーンべると・パチマガスロマガの約312枚/約117枚系列を採用し、後年誤混入値は不採用。

missingFields:
  - 設定変更時の本機固有リール初動/ガックン有無
  - 単純電源OFF→ON時のリール初期位置・ランプ・内部成立状態等の機種固有処理
  - 設定変更/据え置きを初期出目・ランプ等で判別する本機固有の直接資料
  - 50枚ベースの別系統ソースによる直接照合

sources:
  - url: https://www.kitadenshi.co.jp/slot/classicjuggler/
    title: クラシックジャグラー / 北電子 パチスロ製品情報
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 設定別BB/RB/合算、設定別出玉率、ノーマル完全告知仕様。
  - url: https://news.p-world.co.jp/articles/3289/greenbelt
    title: 北電子が『クラシックジャグラー』を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 型式名クラシックジャグラーIII、BB平均312枚、RB平均117枚、合算レンジ、2009年2月発表。
  - url: https://p-kn.com/topics/news/738/
    title: あの輝きをもう一度。パチスロ「クラシックジャグラー」登場! / K-Navi
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY_SECONDARY
    usedFor: 2009年4月中旬ホール導入予定。
  - url: https://hazuse.com/machine/pachislot/8S1176/
    title: クラシックジャグラー / HAZUSE
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 2009-04-13導入開始、型式クラシックジャグラーIII、検定番号8S1176、ボーナス確率照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/69/a.php
    title: クラシックジャグラー / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/完全告知/同時成立、BIG345枚超払い出し終了・純増312枚、REG120枚超払い出し終了・純増117枚。
  - url: https://kenslo65536.com/kaiseki/juggler-classic.html
    title: クラシックジャグラー 解析情報 / けんのスロットシミュレーション
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: 50枚あたり35.24〜36.37G、天井なし、メーカー公表機械割照合。
  - url: https://ps777.net/data/kitadenshi/classic-juggler.htm
    title: クラシックジャグラー / P_Style777
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 2009年4月、ノーマル/RT非搭載、設定別BB/RB/合算/機械割の照合。
  - url: https://www.all7.jp/plans/index/2009/04
    title: 2009年4月の導入機種一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-04-06〜04-12および04-13同日群の境界監査。クラシックジャグラーは同一覧の取得表示では確認できないため、具体日はHAZUSE等で別照合。
