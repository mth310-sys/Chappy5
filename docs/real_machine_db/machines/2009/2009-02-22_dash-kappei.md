# ダッシュ勝平

machineName: ダッシュ勝平
formalModelName: ダッシュ勝平2X
manufacturer: オーイズミ（OIZUMI NEOブランド／オリンピア発表）
releaseDate: 2009-02-22
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_CONFIRMED
releaseDateNote: グリーンべるとが2009-01-29記事で「納品は2月22日からスタートの予定」と明記。パチビーは導入日2009-02-24表記のため、物流開始/ホール導入の定義差として保持する。
generation: 5号機
systemType: A+ART / 周期CZ / 押し順AT経由ART / 天井ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pworldSeries:
    setting1: 95.7%
    setting2: 97.9%
    setting3: 100.4%
    setting4: 104.9%
    setting5: 108.3%
    setting6: 111.6%
  pachimagaSimulationSeries:
    setting1: 95.32%
    setting2: 97.41%
    setting3: 100.14%
    setting4: 103.19%
    setting5: 106.80%
    setting6: 110.02%
  status: CONFLICT_NO_AVERAGE
  note: P-WORLD掲載値とパチマガスロマガのシミュレートPAYOUTに差があるため平均しない。

initialHitBySetting:
  BIG:
    setting1: 1/394.80
    setting2: 1/376.64
    setting3: 1/356.17
    setting4: 1/334.37
    setting5: 1/315.08
    setting6: 1/297.89
  REG:
    setting1: 1/496.48
    setting2: 1/471.48
    setting3: 1/448.88
    setting4: 1/422.81
    setting5: 1/399.61
    setting6: 1/372.36
  bonusCombined:
    setting1: 1/219.92
    setting2: 1/209.38
    setting3: 1/198.59
    setting4: 1/186.71
    setting5: 1/176.17
    setting6: 1/165.49
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガ精密値。P-WORLD/K-Navi/当時グリーンべるとの丸め値（BIG約1/395〜1/298、REG約1/496〜1/372、合算約1/220〜1/165）と整合。

baseGamesPer50:
  allSettings: 33.33G/50枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガの1000円あたりゲーム数。全設定共通。

netIncrease:
  kappeiTimeART: 約+1.3枚/G
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

basicPayout:
  BIG: 約252枚（350枚超払い出し終了）
  REG: 約63枚（80枚超払い出し終了）
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

modeSpecificMinimumData:
  - ART「勝平タイム」は1セット34Gの完走型、約+1.3枚/G。押し順ナビ型で、ナビに従えば押し順間違いによる終了はない。
  - ARTナビストックがあるボーナス後またはART終了後はAT「あかねチャンス」へ移行し、ART突入まで押し順ナビが行われる。
  - ARTストックが無いボーナス後/ART終了後、および通常時約100G消化でCZ「特訓ステージ」へ移行する。
  - 通常ゲーム99G消化後にCZへ移行する表記がP-WORLD天井欄にあり、本文では通常時100G消化と説明される。カウント表記差として保持。
  - ボーナス間999G以上ハマった後にBB成立でスーパーBB確定。
  - ボーナス間1333G+数Gで、次回ボーナス成立まで継続する天井ARTへ突入。

resetBehavior:
  settingChangeBehavior: CONFIRMED_STARTS_INTERNAL_CZ。P-WORLDが「設定変更後について 内部的にチャンスゾーンからスタートする」と明記。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に周期CZまでのゲーム数、ボーナス間999G/1333G天井カウンタ、ARTナビストック、内部CZ/ART状態をどう引き継ぐかの本機固有直接資料は今回未確定。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ON時の周期G数、天井G数、ナビストック、CZ/ART状態の直接資料未確定。
  gameCounterReset: PARTIAL_CONFIRMED_RESET_SIDE_CZ_START。設定変更後は内部CZスタートが確認できるため周期通常G数の通常進行とは異なる。ただしボーナス間999G/1333G天井カウンタが設定変更でリセット/引継ぎされるかは直接資料未確定。
  ceilingAfterReset: RESET_SPECIFIC_CZ_START_CONFIRMED / 999G_AND_1333G_COUNTER_TREATMENT_UNVERIFIED。設定変更後は内部CZ開始。999GスーパーBB条件・1333G+数G天井ARTのカウンタ処理は未確定。
  modeAfterReset: RESET_TO_INTERNAL_CZ_CONFIRMED。独立した朝一専用モード振分率は確認なし。
  stateAfterReset: INTERNAL_CZ_START_CONFIRMED。ARTナビストックや既存ART残Gの保持/消去は直接資料未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: STARTS_IN_INTERNAL_CZ_CONFIRMED。朝一設定変更時は内部CZから始まる点が主要恩恵/挙動。CZからの具体的ART当選率をリセット専用数値として示す資料は今回未回収。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: POSSIBLE_BEHAVIORAL_HINT_CZ_START_ONLY / DIRECT_DETECTION_UNVERIFIED。設定変更後内部CZという挙動は客側推測材料になり得るが、ガックン・初期出目・ランプ等の直接的変更判別資料は未確定。
  numericResetData:
    normalPeriodicCZ: 通常ゲーム99G消化後（本文では100G消化）にCZ
    resetStartState: 内部CZ
    bonus999Condition: ボーナス間999G以上後のBBでスーパーBB確定
    bonus1333Ceiling: ボーナス間1333G+数Gで次回ボーナスまでART
    resetSpecificCeiling: UNVERIFIED
    resetModeDistribution: NONE_PUBLISHED_CONFIRMED
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: RESET_INTERNAL_CZ_CONFIRMED_CEILING_COUNTER_CARRYOVER_POWER_CYCLE_AND_DIRECT_DETECTION_UNVERIFIED

conflicts:
  - payoutRate: P-WORLDは95.7/97.9/100.4/104.9/108.3/111.6%、パチマガスロマガのシミュレート値は95.32/97.41/100.14/103.19/106.80/110.02%。平均せず両系列保持。
  - periodicCZCountLabel: P-WORLD天井欄は通常ゲーム99G消化でCZ、本文は通常時100G消化でCZ。開始/消化ゲームのカウント表記差の可能性があるため統合しない。
  - releaseDateDefinition: グリーンべると=2009-02-22納品開始予定 / パチビー=2009-02-24導入日。物流開始/ホール導入定義差として保持。

missingFields:
  - 設定変更時のボーナス間999G/1333G天井カウンタのリセット/引継ぎ
  - 据え置き時の周期G数、天井G数、ARTナビストック、CZ/ART状態の直接資料
  - 単純電源OFF→ON時の周期G数、天井G数、ARTナビストック、CZ/ART状態の直接資料
  - ガックン/初期出目/ランプ等による設定変更判別の本機固有情報
  - リセット専用CZ当選率、朝一当選率、モード振分等の公開数値

sources:
  - url: https://web-greenbelt.jp/00002941/
    title: オリンピア、合成確率の高いART機を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 正式表記ダッシュ勝平2X、OIZUMI NEOブランド、製造元オーイズミ、2009-02-22納品開始予定、合算1/220〜1/165、BIG/REG、約252枚/63枚、ART34G・約+1.3枚/G、周期約100G。
  - url: https://www.p-world.co.jp/machine/database/5464
    title: ダッシュ勝平 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 5号機A+ART/CZ構造、BIG約252枚、REG約63枚、ART34G・約+1.3枚/G、設定別BIG/REG/合算、機械割、通常99G CZ、999G/1333G天井、設定変更後内部CZスタート。
  - url: https://www.pachibee.jp/machines/movie/209090016
    title: ダッシュ勝平 / パチビー
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 2009-02-24導入日、5号機ART/CZ/天井、約+1.3枚/G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/05/a.php
    title: ダッシュ勝平 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ART/AT、BIG約252枚（350枚超払出終了）、REG約63枚（80枚超払出終了）、34G完走型・純増+1.3枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/05/c.php
    title: ダッシュ勝平 小役・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 50枚ベース全設定共通33.33G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/05/h.php
    title: ダッシュ勝平 ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算精密値、シミュレートPAYOUT95.32〜110.02%。
  - url: https://p-kn.com/slot/913/
    title: ダッシュ勝平 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 設定別BIG/REG/合算丸め値、350枚/80枚超払出終了、ART34G・約+1.3枚/Gの補助照合。

researchNotes:
  - LATEST_HANDOFF正本346件地点（2009-02-22 スーパーリアル麻雀）から継続。
  - 直前handoffではダッシュ勝平を2009-02-24優先候補としていたが、当時グリーンべるとで2009-02-22納品開始予定を確認したため、2/22同日群として時系列接続。
  - 「ダッシュ勝平 / ダッシュ勝平2X / オーイズミ / OIZUMI NEO / オリンピア」と、「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / CZ」を組み替えて再探索。
  - 設定変更後の内部CZスタートは直接確認できたが、999G/1333G天井カウンタ、据え置き、単純電断、ARTナビストック、ガックン等は十分な再探索後も本機固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCHとした。
