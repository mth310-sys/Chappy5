# 悪魔城ドラキュラ

machineName: 悪魔城ドラキュラ
manufacturer: KPE
releaseDate:
  primary: 2009-01-05
  alternate: 2009-01-06
  status: CONFLICT_DAY
releaseDatePrecision: DAY_CONFLICT_BETWEEN_OLD_DATABASES
modelNumber: 悪魔城ドラキュラJG
approvalNumber: 8S0855
generation: 5号機
systemType: ボーナス+RT/CZ+継続率ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  value: {1: 97.8%, 2: 99.2%, 3: 101.3%, 4: 104.0%, 5: 108.4%, 6: 112.1%}
  status: ANALYSIS_HIGH_MULTI_SOURCE
  note: P-WORLD、K-Navi、パチビーで一致。

initialHitBySetting:
  BIG: {1: 1/516.0, 2: 1/516.0, 3: 1/516.0, 4: 1/504.1, 5: 1/485.5, 6: 1/481.9}
  REG_primary_PWORLD_KNavi: {1: 1/555.4, 2: 1/550.7, 3: 1/532.8, 4: 1/528.5, 5: 1/508.0, 6: 1/422.8}
  totalBonus_PWORLD_Pachibee: {1: 1/267.5, 2: 1/266.4, 3: 1/262.1, 4: 1/258.0, 5: 1/248.2, 6: 1/225.2}
  HAZUSE_REG: {1: 1/560.1, 2: 1/555.4, 3: 1/537.2, 4: 1/528.5, 5: 1/516.0, 6: 1/422.8}
  status: CONFLICT_MINOR_ANALYSIS_TABLE_DIFFERENCE
  note: BIGは主要解析資料で一致。REGはHAZUSEとP-WORLD/K-Naviで一部設定に差があるため平均せず両系列を保持。K-Navi本文の設定1合算1/268.6は同ページ掲載のBIG/REG値から算出される値と整合しないため、P-WORLD/パチビーの合算系列を主要値とする。

baseGamesPer50:
  approximateOverall: 約32.1G
  bySetting: {1: 32.2G, 2: 32.2G, 3: 32.1G, 4: 32.3G, 5: 32.1G, 6: 32.1G}
  status: ANALYSIS_SINGLE_DETAILED_PLUS_SUMMARY
  note: CrankySevenの設定別通常小役解析から掲載された50枚あたり回転数。別系統の設定別ベース照合待ち。

netIncrease:
  battleZoneART: 約+1.1枚/G
  challengeZoneRT: 現状維持程度
  ceilingART: 約+0.2枚/G
  status: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_SEPARATION
  note: ART「バトルゾーン」とRT「チャレンジゾーン」、天井ARTは別定義なので混同しない。

basicPayout:
  BIG: 約260枚（348枚超払い出しで終了）
  REG: 約45枚（59枚超払い出しで終了）
  status: ANALYSIS_HIGH_MULTI_SOURCE

modeSpecificMinimumData:
  - ART「バトルゾーン」は1セット30G、継続率66% / 77% / 88% / 99%。
  - ボーナス成立時のART抽選当選、またはRT/CZ「チャレンジゾーン」の規定G消化でARTへ突入。
  - チャレンジゾーンは規定G数最大40G。チェリー入賞で通常へ転落し、BIG中獲得のチェリーナビで回避補助が可能。
  - ART終了後はRT「リベンジモード」へ移行する。
  - 通常状態1000G消化で天井ARTへ突入。実質次回ボーナスまで継続し、天井ART中は約+0.2枚/G。天井ARTからのボーナス後はART突入確定とする解析資料あり。
  - 通常時の十字架は最大6個。6個ならボーナス後ART突入100%。

resetBehavior:
  settingChangeBehavior: 天井までのゲーム数、滞在ステージ、チェリーナビのストック、内部状態、十字架の個数は設定変更でもリセットされない
  carryOverBehavior: 据え置き時は上記要素が保持される前提と整合するが、本機固有の「据え置き時」直接記述は未回収のため PARTIAL_INFERRED_FROM_NO_RESET_ON_SETTING_CHANGE
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
  gameCounterReset: NOT_RESET_ON_SETTING_CHANGE
  ceilingAfterReset: 通常1000G天井は設定変更で短縮・再起算されず、残りG数を引き継ぐ
  modeAfterReset: 滞在ステージは設定変更でリセットされない。朝一専用モードは確認できず
  stateAfterReset: 内部状態は設定変更でリセットされない
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED_AS_SETTING_CHANGE_SPECIFIC_BENEFIT; 天井残G・十字架・チェリーナビ等の蓄積が設定変更後も残るため前日状況次第で朝一狙い価値が残存
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: K-Naviに「朝イチにRTスタート?」「十字架の数に注目」の専用攻略項目が現存するが本文を復元できず、ガックン等を含む確定判別手順は UNVERIFIED_AFTER_RESEARCH
  numericResetData:
    normalCeiling: 1000G
    resetSpecificCeiling: SAME_REMAINING_COUNT_NOT_RESET_ON_SETTING_CHANGE
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
  note: パチビーとCrankySevenが設定変更後も天井G数がクリアされないと一致し、パチビーは滞在ステージ・チェリーナビストック・内部状態・十字架個数もリセットされないと明記。中古実機資料の中一商事にも同一説明が残る。単純な電源OFF→ONのみの処理は直接資料未回収のため一般論で補完しない。

coreStatus: COMPLETE_CORE_WITH_MINOR_INITIAL_HIT_CONFLICT_AND_BASE_SINGLE_SOURCE
resetBehaviorQA: PARTIAL_HIGH_CONFIDENCE_SETTING_CHANGE_BEHAVIOR_POWER_CYCLE_UNVERIFIED

conflicts:
  - releaseDate: HAZUSE DATAは導入開始日2009-01-05、パチビーは導入日2009-01-06。KONAMI公式アーカイブは2009年1月までしか示さないため、日精度はCONFLICTとして両日を保持。
  - initialHitBySetting: REG確率がHAZUSEとP-WORLD/K-Naviで一部設定に小差。平均せず両系列保持。

missingFields:
  - 電源OFF→ONのみの場合の本機固有処理
  - 据え置き時挙動の直接記述（設定変更でも保持されるため実質保持と整合するが直接資料待ち）
  - ガックン等の確定的変更判別手順
  - 公開朝一当選率/恩恵発生率
  - 50枚ベースの別系統設定別照合

sources:
  - {url: https://www.konami.com/amusement/psm/archive/ps/2009/dracula/, title: 2009年 悪魔城ドラキュラ / KONAMI機種アーカイブ, retrievedAt: 2026-09-02, confidence: OFFICIAL_ARCHIVE}
  - {url: https://www.pachibee.jp/machines/index/209090001, title: 悪魔城ドラキュラ / パチビー, retrievedAt: 2026-09-02, confidence: ANALYSIS_DATABASE}
  - {url: https://data.hazuse.com/?genre=208&machine_code=8S0855, title: 悪魔城ドラキュラ / HAZUSE DATA, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_ARCHIVE}
  - {url: https://www.p-world.co.jp/machine/database/5384, title: 悪魔城ドラキュラ / P-WORLD, retrievedAt: 2026-09-02, confidence: INDUSTRY_DATABASE}
  - {url: https://p-kn.com/slot/898/, title: 悪魔城ドラキュラ / K-Navi, retrievedAt: 2026-09-02, confidence: ANALYSIS_DATABASE}
  - {url: https://crankyseven.com/sp/akumajou-pc.htm, title: 悪魔城ドラキュラ 解析攻略 / CrankySeven, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_RETROSPECTIVE}
  - {url: https://www.nakaiti.com/html/sKpe20250201.html, title: KPE 悪魔城ドラキュラ アンジェラパネル / 中一商事, retrievedAt: 2026-09-02, confidence: RETROSPECTIVE_DEVICE_REFERENCE}
  - {url: https://p-mans.blogspot.com/2008/11/, title: KPEが「悪魔城ドラキュラ」を発表 / Pマンズ（2008-11-25記事）, retrievedAt: 2026-09-02, confidence: CONTEMPORARY_INDUSTRY_NEWS_ARCHIVE}

researchNotes:
  - 最新mainのLATEST_HANDOFF 337件地点（2009-01-04秘密戦隊ゴレンジャー）から継続。
  - 2009-01-01〜04の追加具体日未処理機を再監査し、本機より前に安全に追加すべき新規レコードは今回確定できなかった。
  - HAZUSE DATAの2009-01-05とパチビーの2009-01-06が競合するため、時系列上は1/4ゴレンジャーの後、1/12キング・コングより前に置き、日付競合を明記する。
  - KONAMI公式アーカイブは稼働開始2009年1月、タイプ5号機ARTを確認。