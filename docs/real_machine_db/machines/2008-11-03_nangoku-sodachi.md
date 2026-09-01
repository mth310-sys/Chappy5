# 南国育ち

machineName: 南国育ち
manufacturer: オリンピア
releaseDate: 2008-11-03
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_DATE
modelName: 南国育ち
modelNumber: 南国育ちR2
modelNumberStatus: CONTEMPORARY_INDUSTRY
generation: 5号機
systemType: ボーナス + モード管理 + ART「南国チャンス」 + 天井RT / 完全告知・パンク回避型ART
settings: 1 / 2 / 3 / 4 / 5 / 6
medalDiameter: 25φ

payoutRateBySetting:
  primaryAnalysisAndDatabase:
    setting1: 95.5%
    setting2: 98.1%
    setting3: 100.7%
    setting4: 104.0%
    setting5: 107.2%
    setting6: 110.1%
  retrospectiveAlternative:
    setting1: 96.02%
    setting2: 98.50%
    setting3: 101.21%
    setting4: 104.41%
    setting5: 107.60%
    setting6: 110.34%
  status: CONFLICT
  note: P-WORLDとCrankySevenは95.5〜110.1%系列で一致。一方、別回顧資料は96.02〜110.34%系列を掲載。測定/シミュレーション条件または丸め定義差を今回確定できないため平均せず保持。

initialHitBySetting:
  BIG:
    setting1: 1/397.19
    setting2: 1/392.43
    setting3: 1/387.79
    setting4: 1/383.25
    setting5: 1/378.82
    setting6: 1/374.49
  REG:
    setting1: 1/668.73
    setting2: 1/661.98
    setting3: 1/655.36
    setting4: 1/648.87
    setting5: 1/642.51
    setting6: 1/636.27
  bonusCombined:
    setting1: 1/249.19
    setting2: 1/246.38
    setting3: 1/243.63
    setting4: 1/240.94
    setting5: 1/238.31
    setting6: 1/235.74
  status: MULTI_SOURCE_MATCH
  note: P-WORLDとCrankySevenの設定別BIG/REG/合算が丸め範囲で一致。

baseGamesPer50:
  value: 約35.1G/50枚
  industryRounded: 約35G/1000円
  status: MULTI_SOURCE_ROUNDED_MATCH
  note: CrankySeven約35.1G、2008-10-03当時グリーンべると約35Gで整合。

basicPayout:
  BIG: 約204枚
  REG: 約48枚
  regulatedBIGEnd: 297枚を超える払い出しで終了
  regulatedREGEnd: 12G消化または8回入賞で終了
  status: MULTI_SOURCE_MATCH

netIncrease:
  nangokuChanceART: 約+1.5枚/G
  ceilingRT: 約+0.3枚/G
  status: MULTI_SOURCE_MATCH

modeSpecificMinimumData:
  normalModes: 低確率 / 高確率 / 天国。ボーナス成立時の滞在モードに応じてART突入率が変化。
  modeTransitionTiming: 主にボーナス成立時・ART終了後。ART非突入時はモードアップ抽選があり、転落なしとする解析資料あり。
  nangokuChance: 50G/1セット。ボーナス中ラスト8Gのバタフライゾーンでバタフライランプ点灯時に突入。ART中ボーナス後はARTへ復帰し、無限南国チャンス昇格も存在。
  artLoop: 50Gごとに継続抽選。平均継続率80%以上とする当時業界資料あり。
  ceiling: 通常状態996G消化で待機ゾーンを経て天井RTへ。天井RTは約+0.3枚/G、ボーナス成立まで継続または特殊リプレイ入賞で終了（押し順ナビで回避可能）。

resetBehavior:
  settingChangeBehavior: CONFIRMED。設定変更後も天井までのゲーム数はクリアされず、高確率モードからスタート。CrankySevenが25φ本機で直接明記。30φ版はゲーム性が25φと全て同等とする当時業界資料があり、P-WORLDの30φページでも同挙動を掲載して補助照合。
  carryOverBehavior: PARTIAL_CONFIRMED_BY_RESET_COUNTER_RULE。設定変更でも996G天井までのゲーム数がクリアされないため、少なくとも天井ゲーム数は変更によってゼロ初期化されない。一方、単純据え置き時のART/モード/RT内部状態の翌日処理を本機固有資料で包括的には確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみでの通常モード、ART/RT状態、996Gカウンタ表示/内部処理を直接説明する25φ本機固有資料を確定できず。
  gameCounterReset: NOT_RESET_ON_SETTING_CHANGE。通常状態996G天井のゲーム数は設定変更後もクリアされない。
  ceilingAfterReset: NO_RESET_SHORTENING_CONFIRMED。通常天井は996G。設定変更後に専用短縮天井へ変更される資料は確認できず、むしろ天井までのゲーム数を維持することが明記される。
  modeAfterReset: HIGH_MODE_START_CONFIRMED。設定変更時は高確率モードから開始。
  stateAfterReset: PARTIAL。通常時モードは高確率モード開始を確認。ART/無限ART/天井RT中に設定変更した場合の状態・残G処理は直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: CONFIRMED。設定変更時は低確率ではなく高確率モードから開始するため、ボーナス成立時のART抽選面で朝一優遇。CrankySevenは「朝一はチャンス」と明記。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。天井G数が設定変更で消去されないため、少なくとも天井カウンタ消去型の不利は確認されない。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。機種名/型式名と「ガックン・リール・初期出目・ランプ・設定変更判別・朝一」を組み替えて再探索したが、本機固有の確定的な変更判別手順は回収できず。高確示唆の「遅れ＋ハズレ」はモード推測材料であり、設定変更確定演出とは扱わない。
  numericResetData:
    normalCeilingGameCount: 996G
    ceilingCounterOnSettingChange: CARRY_OVER_NOT_CLEARED
    resetMode: HIGH_MODE
    highModeARTEntryRate:
      setting1: 25.0%
      setting2: 28.1%
      setting3: 32.6%
      setting4: 36.0%
      setting5: 40.0%
      setting6: 75.0%
    note: 高確率モード時ART突入率は公開解析値。設定変更後が高確スタートなので朝一比較数値として有用。ただし初回ボーナスまで必ず高確を維持するか等の詳細内部挙動は本DB対象外かつ推測しない。

coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT
resetBehaviorQA: SUBSTANTIAL_RESET_BEHAVIOR_CONFIRMED_COUNTER_CARRYOVER_AND_HIGH_MODE_START_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - field: payoutRateBySetting
    sourceA: P-WORLD / CrankySeven 95.5 / 98.1 / 100.7 / 104.0 / 107.2 / 110.1%
    sourceB: 回顧資料 96.02 / 98.50 / 101.21 / 104.41 / 107.60 / 110.34%
    handling: CONFLICT_NO_AVERAGING

missingFields:
  - 電源OFF→ONのみでの996Gカウンタ・モード・ART/天井RT状態処理
  - 据え置き時のART/無限ART/天井RT内部状態の翌日処理
  - ART/天井RT中に設定変更した場合の残G/状態処理
  - ガックン/初期出目/ランプ等による本機固有の設定変更確定判別

sources:
  - url: https://web-greenbelt.jp/00003877/
    title: 名機『南国育ち』が5号機で復活！ / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: オリンピア、型式南国育ちR2、2008-11-03納品開始予定、ART純増約+1.5枚/G、内部モード依存ART抽選、約35G/1000円。
  - url: https://www.p-world.co.jp/machine/database/5353
    title: 南国育ち「2008年」 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 25φ本機のBIG/REG/合算、機械割95.5〜110.1%、BIG約204枚、REG約48枚、ART50G・約+1.5枚/G、996G天井RT。
  - url: https://crankyseven.com/nangokusodati5-pc.htm
    title: 南国育ち 解析・打ち方・攻略・スペック・天井・設定変更情報 / CrankySeven
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_RETROSPECTIVE
    usedFor: 約35.1G/50枚、ボーナス確率/機械割照合、ART約+1.5枚/G、996G天井RT約+0.3枚/G、設定変更後も天井G数非クリア、高確率モード開始、高確時ART突入率。
  - url: https://web-greenbelt.jp/00003956/
    title: 『南国育ち』の30φバージョン登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 30φ版ゲーム性は25φ版と全て同等、25φART50G/平均80%以上/+1.5枚/Gの補助照合。30φ固有導入日は本レコードに混入させない。
  - url: https://www.p-world.co.jp/machine/database/5422
    title: 南国育ち30「2009年」 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE_DERIVATIVE_SAME_GAME_SPEC
    usedFor: 同ゲーム性30φ版で設定変更後「天井までのG数はクリアされず、高確モードからスタート」の補助照合。25φ直接根拠はCrankySevenを主とする。
  - url: https://pachinko.hatenablog.jp/entry/2008/10/nangokuSodachi
    title: オリンピア「南国育ち（5号機）」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 機械割96.02〜110.34%の別系列。平均せずCONFLICT保持。
