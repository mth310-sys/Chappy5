# 緑ドン

machineName: 緑ドン
formalModelName: 緑ドン9
inspectionNumber: 9S0050
manufacturer: エレコ
releaseDate: 2009-05-25
releaseDatePrecision: ANALYSIS_CALENDAR_EXACT_WITH_CONTEMPORARY_INDUSTRY_MONTH_END_SUPPORT
releaseDateNote: K-Navi全国導入カレンダー/機種ページが2009-05-25を全国導入開始日として掲載。当時グリーンべるとは2009-04-21記事で「5月下旬より導入開始予定」、ユニバーサル公式現行アーカイブは2009年5月発売としており整合する。HAZUSEの2009-10-28表示は当時系列と大きく不整合のため導入日根拠には採用しない。
generation: 5号機
systemType: ボーナス+ART / A+ART / 周期CZ
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  marketSeries:
    setting1: 96.4%
    setting2: 99.0%
    setting3: 101.7%
    setting4: 106.8%
    setting5: 112.0%
    setting6: 119.1%
  pachimagaSimulatedProvisional:
    setting1: 96.09%
    setting2: 98.83%
    setting3: 101.51%
    setting4: 105.24%
    setting5: 110.75%
    setting6: 119.72%
  status: CONFLICT
  note: 5号機クロニクル/pacnk系列の96.4〜119.1%と、パチマガスロマガ旧解析の暫定シミュレート96.09〜119.72%に差がある。攻略条件・算出条件の同一性を断定できないため平均化しない。

initialHitBySetting:
  red7Big:
    setting1: 1/1074.36
    setting2: 1/1040.25
    setting3: 1/978.15
    setting4: 1/936.23
    setting5: 1/897.75
    setting6: 1/799.22
  donBig:
    setting1: 1/720.18
    setting2: 1/704.69
    setting3: 1/675.63
    setting4: 1/655.36
    setting5: 1/636.27
    setting6: 1/585.14
  bigCombined:
    setting1: 1/431.16
    setting2: 1/420.10
    setting3: 1/399.61
    setting4: 1/385.51
    setting5: 1/372.36
    setting6: 1/337.81
  reg:
    setting1: 1/873.81
    setting2: 1/851.12
    setting3: 1/809.09
    setting4: 1/744.73
    setting5: 1/697.19
    setting6: 1/606.81
  bonusCombined:
    setting1: 1/288.70
    setting2: 1/281.27
    setting3: 1/267.49
    setting4: 1/254.02
    setting5: 1/242.73
    setting6: 1/217.01
  artInitialHit:
    status: UNVERIFIED_AFTER_RESEARCH
    note: K-Naviに「ART初当り率で設定推測」の解析項目存在までは確認したが、設定別実数本文を現存ページ/検索索引から直接回収できず。VIVA/オーロラ等の後継機数値を混入しない。
  status: OLD_ANALYSIS_CROSSCHECKED
  note: ボーナス値はパチマガ旧解析の精密値を主値とし、K-Navi、5号機まとめwiki、pacnkの丸め値と照合。

baseGamesPer50:
  setting1: 35.61G
  setting2: 35.63G
  setting3: 35.66G
  setting4: 35.69G
  setting5: 36.07G
  setting6: 36.69G
  status: OLD_ANALYSIS_DIRECT
  sourceDefinition: パチマガスロマガ旧解析「1000円あたりのゲーム数」。50枚貸し前提の比較値として保存。

netIncrease:
  artBanriYugi: 約1.3枚/G
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: K-Naviおよび当時/後年実機資料で約1.3枚/Gを確認。5号機クロニクルの約1.4枚/G表記は丸め/整理差の可能性があるため主値へ混ぜない。

basicPayout:
  bigTypical: 約259枚
  bigMaximumWithTechnique: 264枚
  reg: 約60枚
  status: ANALYSIS_CROSSCHECKED
  note: A-SLOT実機資料はBIG純増約259枚（MAX264枚）/REG約60枚、HAZUSEはBIG中の技術介入2回成功で最大264枚、pachirinkoもBIG約264枚/REG約60枚。5号機クロニクルのBIG約252枚/REG約80枚とは定義・整理値が競合するため別注記。

modeSpecificMinimumData:
  - ART「万里遊戯」は1セット50G、純増約1.3枚/G、継続率は最大95%。
  - 通常時は低確/高確の内部状態があり、高確中ボーナスはART突入期待度が上昇。
  - 通常時256G消化で周期CZ「ドンちゃんチャレンジ」へ。押し順6択正解でART突入。
  - ボーナス間で周期CZに5回到達すると5回目が天井CZとなりナビ発生。以降は次回ボーナスまでCZとARTをループする構造。単純な固定1280G直撃天井ではなく、CZ/ART消化G数等で実到達G数は変動。
  - 天井までの周期CZ回数クリア契機はボーナス。途中の自力ARTでは天井周期回数をクリアしない、と当時天井資料に記載。

resetBehavior:
  settingChangeBehavior: RESET_CEILING_CZ_COUNT_CONFIRMED_SINGLE_CONTEMPORARY_ANALYSIS。2009年当時の天井攻略資料群で、設定変更により天井までの周期CZ回数がクリアされる旨を確認。K-Naviにも「設定変更後の挙動」専用解析項目の存在を確認したが、現存本文は回収不能。内部高低状態の変更時振り分けはUNVERIFIED_AFTER_RESEARCH。
  carryOverBehavior: PRACTICAL_OVERNIGHT_CARRYOVER_UNRELIABLE_DUE_POWER_OFF_TIMER_RESET。設定自体を据え置いても、当時資料では電源OFF後約2時間経過で設定変更と同じ天井周期回数クリア処理が行われるとされるため、通常の閉店→朝一の宵越し天井狙いは成立しにくい。電源を落とさない理論上の据え置き時に周期回数がどうなるかはUNVERIFIED_AFTER_RESEARCH。
  powerCycleBehavior: RESET_CEILING_CZ_COUNT_AFTER_APPROX_2_HOURS_OFF_ANALYSIS_SINGLE_CONTEMPORARY。2009-05-30/06-01時点の当時攻略ブログ2系統で「電源OFFで約2時間経過すると天井までの周期CZ回数がクリア/設定変更と同じ処理」と記載。メーカー一次資料は回収できないため信頼度はANALYSIS_SINGLE_CONTEMPORARY扱い。
  gameCounterReset: RESET_CEILING_CZ_COUNT_ON_SETTING_CHANGE_AND_AFTER_APPROX_2H_POWER_OFF。管理単位は単純な総G数ではなく、ボーナス間の256G周期CZ到達回数。
  ceilingAfterReset: NO_SHORTENING_CONFIRMED。リセット時に周期回数がクリアされるため、通常の「5回目周期CZが天井」という条件へ戻る。設定変更専用の短縮天井は確認なし。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。ART継続モード/通常時内部モードについて設定変更時の具体振り分けを直接確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。低確/高確の存在は確認できるが、設定変更時の高確移行率等の公開数値を本2009年機で回収できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。天井周期回数がクリアされるため、天井狙い上の恩恵ではなく不利側の挙動。
  resetPenalties: CEILING_PROGRESS_LOST。設定変更、または当時資料上の約2時間電源OFFで天井周期CZ回数がクリアされ、前日ハマリの宵越し価値が失われる。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。緑ドン/緑ドン9/エレコと「ガックン/リールガックン/初期出目/設定変更判別/据え置き/朝一」を組み替え再探索したが、本機固有の確定的な客側変更判別手段を確認できず。天井周期進捗は電源OFFタイマーでも消えるため、それ自体を設定変更判別には使えない。
  numericResetData:
    normalCycleGames: 256G
    normalCeilingCycle: 5回目の周期CZ
    nominalNormalCeilingReference: 約1280G+CZ/ART等の消化分
    resetSpecificCeiling: NONE_CONFIRMED
    ceilingProgressAfterSettingChange: 0周期相当へクリア
    powerOffTimerForCeilingClear: 約2時間（当時二次資料、メーカー一次未回収）
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_PAYOUT_AMOUNT_CONFLICTS_ART_INITIAL_UNVERIFIED
resetBehaviorQA: PARTIAL_WITH_CORE_CEILING_RESET_AND_POWER_OFF_BEHAVIOR_RECOVERED

conflicts:
  - payoutRate: 市場掲載系列96.4/99.0/101.7/106.8/112.0/119.1%、パチマガ暫定シミュレート96.09/98.83/101.51/105.24/110.75/119.72%。平均化しない。
  - basicPayout: 実機/攻略資料のBIG約259枚（MAX264枚）・REG約60枚に対し、5号機クロニクルはBIG約252枚・REG約80枚。定義差または整理差を解消できないため平均化しない。
  - netIncreaseRounding: K-Navi等は約1.3枚/G、5号機クロニクルは約1.4枚/G。主値は当時系K-Naviの約1.3枚/G。
  - hazuseReleaseDate: HAZUSEは2009-10-28とするが、ユニバーサル公式2009年5月、グリーンべると5月下旬予定、K-Navi 2009-05-25、2009-06-09業界記事の「5月下旬に導入済み」と矛盾するため導入日根拠として不採用。

missingFields:
  - 設定別ART初当り実数
  - 設定変更時の内部低確/高確振り分け
  - 設定変更時のART継続モード等の具体処理
  - 電源を落とさない純粋な据え置き時の天井周期回数処理を直接示す一次/解析資料
  - ガックン/初期出目等による確定的な設定変更判別
  - 約2時間電源OFFで周期回数クリアのメーカー一次根拠

sources:
  - url: https://www.universal-777.com/product/slot/midoridon/
    title: 緑ドン 花火の起源探求之巻 / ユニバーサルエンターテインメント
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: エレコ、5号機、ボーナス+ART、2009年5月発売、製品同定。
  - url: https://web-greenbelt.jp/00003074/
    title: 新筐体を身にまといメモリアル『緑ドン』登場 / グリーンべると 2009-04-21
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: エレコブランド、ART、新筐体、2009年5月下旬導入開始予定。
  - url: https://news.p-world.co.jp/articles/3482/greenbelt
    title: 『緑ドン』に新パネル「ビリーver」登場 / グリーンべると 2009-06-09
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: 2009年5月下旬に本機が導入済みであることの時系列照合。
  - url: https://p-kn.com/calendar/200905/
    title: パチンコ・パチスロ新台導入カレンダー 2009年5月 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_CALENDAR
    usedFor: 全国導入開始日2009-05-25、5月12〜24境界監査、同日群確認。
  - url: https://p-kn.com/slot/970/
    title: 緑ドン / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 2009-05-25、A+ART、50G ART、純増約1.3枚/G、最大95%ループ、256G周期CZ、天井/設定変更解析項目存在。
  - url: https://p-kn.com/slot/970/10313/
    title: 緑ドン ボーナス確率 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別赤7BIG/ドンBIG/REG/BIG合算/ボーナス合算の照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/78/h.php
    title: 緑ドン ボーナス確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 精密ボーナス確率、暫定シミュレートPAYOUT。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/78/c.php
    title: 緑ドン 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 50枚あたり35.61〜36.69G。
  - url: https://5goki.com/universal
    title: ユニバーサル系5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: SECONDARY_DATABASE
    usedFor: 市場掲載機械割系列、2009年5月、A+ART、基本獲得枚数競合値、純増表記差。
  - url: https://pacnk.com/slot/tools/sh_midoridon.html
    title: 緑ドン 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS
    usedFor: BIG/REG/PAYOUT市場掲載系列の再照合。
  - url: https://hazuse.com/machine/pachislot/9S0050/
    title: 緑ドン / HAZUSE
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_WITH_DATE_CONFLICT
    usedFor: 型式名緑ドン9、検定番号9S0050、BIG最大264枚技術介入。導入日表示は他資料と矛盾するため不採用。
  - url: https://www.a-slot.com/SHOP/eleco25.html
    title: エレコ 緑ドン ビリーパネル 中古実機 / A-SLOT
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_MACHINE_DATABASE
    usedFor: BIG純増約259枚/MAX264枚、REG約60枚、ART50G/約1.3枚、周期CZの再照合。
  - url: https://mezase20.com/blog-entry-133.html
    title: 緑ドンの天井について / 2009-05-27当時攻略ブログ
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS_SINGLE
    usedFor: 256G周期CZ、5回目天井CZ、ボーナスで周期回数クリア、自力ARTではクリアされない構造。
  - url: https://mezase20.com/blog-entry-135.html
    title: 緑ドン天井狙いしてきました！ / 2009-06-01当時攻略ブログ
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS_SINGLE
    usedFor: 電源OFFから数時間で設定変更同様に天井周期CZ回数リセットとの当時情報。
  - url: https://plaza.rakuten.co.jp/jemss/diaryall/
    title: スロしかやりません！ 過去記事一覧（2009-05-30 緑ドン天井狙い）
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS_SINGLE_CORROBORATION
    usedFor: 設定変更で周期回数リセット、電源OFF約2時間で天井周期回数クリアという当時情報の別系統照合。
