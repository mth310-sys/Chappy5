# ドラキュラ

machineName: ドラキュラ
formalModelName: UNVERIFIED_AFTER_RESEARCH
manufacturer: ネット（NET）
releaseDate: 2009-03-01
releaseDatePrecision: CONTEMPORARY_SCHEDULED_DELIVERY_DATE
releaseDateNote: 2009-01-29付グリーンべるとが「納品は3月1日からを予定」と明記。後年DBには2009年2月表記もあるが、具体日のある当時業界一次資料を優先し、月表記差はCONFLICT_RELEASE_MONTHとして保持。
generation: 5号機
systemType: ネオストック / ボーナス集中型 / 2ライン / 出玉増加目的RTなし
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primarySeries:
    setting1: 95.5%
    setting2: 97.5%
    setting3: 99.6%
    setting4: 102.0%
    setting5: 105.0%
    setting6: 115.0%
  alternateSimulationSeries:
    setting1: 95.3%
    setting2: 97.3%
    setting3: 99.3%
    setting4: 101.8%
    setting5: 104.8%
    setting6: 114.8%
  status: CONFLICT
  note: 2009年更新5号機まとめwikiおよびP-WORLD系の95.5〜115.0%系列に対し、実機シミュレーション解析は95.3〜114.8%。平均せず別系列保持。

initialHitBySetting:
  draculaRush:
    setting1: 1/14.9
    setting2: 1/14.9
    setting3: 1/14.9
    setting4: 1/14.9
    setting5: 1/14.9
    setting6: 1/14.9
  draculaZone:
    setting1: 1/354.2
    setting2: 1/332.7
    setting3: 1/312.1
    setting4: 1/287.4
    setting5: 1/258.0
    setting6: 1/177.1
  status: CONTEMPORARY_ANALYSIS_CROSSCHECKED_WITH_INDUSTRY_AND_DATABASE
  note: D.RUSH 1/14.9は当時グリーンべるとと2009年更新wiki/P-WORLDで一致。D.ZONE設定別は2009年更新wiki。シミュレーション解析にはD.ZONEを1/291〜1/354とする逆方向系列があり、内部状態/算出定義差の可能性があるため、主値へ混ぜずconflictsに保持。

baseGamesPer50:
  normalModeBySetting:
    setting1: 35.29G
    setting2: 35.35G
    setting3: 35.41G
    setting4: 35.47G
    setting5: 35.51G
    setting6: 35.53G
  consecutiveModeBySetting:
    setting1: 32.93G
    setting2: 33.03G
    setting3: 33.13G
    setting4: 33.23G
    setting5: 33.33G
    setting6: 33.53G
  status: ANALYSIS_SINGLE
  note: けんのスロットシミュレーションの状態別50枚回転数。通常/連荘状態で定義が異なるため分離保持し、単一解析値として信頼度を上げない。

netIncrease:
  status: NOT_APPLICABLE_AS_ART_RT_NET_INCREASE
  note: 本機は5号機ネオストック機で、2009年更新wikiは「出玉増加目的のRTは存在しない」と明記。高確率モード中のボーナス集中で出玉を作るため、ART純増/Gの物差しを当てない。

basicPayout:
  draculaRush: 最大41枚
  draculaZone: 最大41枚
  status: DATABASE_CROSSCHECKED_WITH_CONTEMPORARY_REGULATORY_PAYOUT
  note: P-WORLDは両ボーナス最大41枚。当時グリーンべるとは両者29枚超払い出し終了と明記し、規定払い出し条件と実最大獲得表示の定義差として保持。

modeSpecificMinimumData:
  - 通常モード中にD.ZONEが揃うと、その消化後に高確率モードへ移行。
  - 高確率モード中はD.RUSHが約1/14.9で成立し、通常モードへ転落するまで連続性を持つ「ネオストック」方式。
  - 2009年更新解析ではD.ZONE成立まで連チャン状態が継続し、D.RUSH比率が実質的な連荘率になる構造と説明。
  - P-WORLDはD.ZONE後のD.RUSHを約95%ループ、平均連チャン数21連と説明。
  - ボーナス消化後100Gは押し順ナビが発生するという2009年更新解析があるが、詳細な小役制御・内部RT抽選は物差しミッション範囲外なので収集しない。
  - 通常ゲーム数天井は確認されず、シミュレーション解析も「天井なし」。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名「ドラキュラ」/NET/ネット/ネオストックと「設定変更」「リセット」「朝一」「変更時」「高確」「連荘状態」を組み替えて再探索。シミュレーション解析の設定変更欄は「-」で、本機固有の変更時モード/ボーナス内部状態処理を直接説明する資料は確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に通常/高確率/連チャン状態や内部ボーナス状態が持ち越されるか、本機固有の直接資料は未確定。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の通常/高確/内部ボーナス状態処理は直接未確定。
  gameCounterReset: NOT_APPLICABLE_FOR_NORMAL_GAME_CEILING / POST_BONUS_NAV_COUNTER_BEHAVIOR_UNVERIFIED。通常ゲーム数天井なし。ボーナス後100Gナビの残Gを変更/電断時にどう扱うかは未確定。
  ceilingAfterReset: NO_NORMAL_GAME_CEILING_CONFIRMED / NO_RESET_SHORTENING_CONFIRMED_AFTER_RESEARCH。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常/高確率モードの設定変更時初期化・再抽選・引継ぎを直接確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。内部ボーナス成立状態を含むネオストック固有状態の変更時処理を推測しない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「ガックン」「初期出目」「朝一高確」「ボーナス挙動」「ランプ」を含めて再探索したが、本機固有の変更判別資料は確定できず。
  numericResetData:
    normalCeiling: NONE_CONFIRMED
    resetSpecificCeiling: NONE_CONFIRMED
    resetModeDistribution: NONE_PUBLISHED_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_PUBLISHED_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: RESEARCHED_UNVERIFIED_FOR_STATE_HANDLING

conflicts:
  - payoutRate: 5号機まとめwiki/P-WORLD系95.5/97.5/99.6/102.0/105.0/115.0% vs シミュレーション解析95.3/97.3/99.3/101.8/104.8/114.8%。平均せず保持。
  - draculaZoneProbability: 2009年更新wikiは設定1→6で1/354.2→1/177.1。シミュレーション解析はリプ+D.ZONEを1/291→1/354とする。内部状態/成立定義差の可能性があり統合しない。
  - releaseMonth: 当時グリーンべると具体日2009-03-01納品予定に対し、後年シミュレーション/5号機DBには2009年2月導入表記。具体日一次資料をreleaseDateの主値とする。
  - systemClassification: 5号機まとめwiki/P-WORLD/当時グリーンべるとはネオストック・出玉増加RTなし。後年5号機クロニクルにA+ART/十字架システム等、別NET機または別世代と混同したとみられる記述があるため採用しない。

missingFields:
  - 正式型式名
  - 設定変更時の通常/高確率/内部ボーナス状態処理
  - 据え置き・単純電源OFF→ON時の状態引継ぎ
  - ボーナス後100G押し順ナビ残Gの変更/電断時処理
  - ガックン/初期出目/ランプ/朝一挙動等の変更判別
  - 設定変更専用の朝一モード振分・恩恵/不利・公開当選率

sources:
  - url: https://web-greenbelt.jp/00002940/
    title: ネット、ネオストック搭載の『ドラキュラ』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: NET、ネオストック、2009-03-01納品予定、D.ZONE後高確、D.RUSH 1/14.9、両ボーナス29枚超払い出し終了、小役優先機能。
  - url: https://w.atwiki.jp/5gouki/pages/143.html
    title: ドラキュラ / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS
    usedFor: 2009年更新時点の2ライン/NET/ネオストック、設定別D.RUSH/D.ZONE/機械割、出玉増加RTなし、ゲームフロー、ボーナス後100G押し順ナビ。
  - url: https://www.p-world.co.jp/machine/database/5466
    title: ドラキュラ / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 5号機ネオストック、両ボーナス最大41枚、D.ZONE後D.RUSH約1/15・約95%ループ、平均連チャン21連、内部状態の概要。
  - url: https://kenslo65536.com/kaiseki/dorakyura.html
    title: ドラキュラ 解析情報 / けんのスロットシミュレーション
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: 状態別50枚回転数、代替機械割系列、天井なし、代替D.ZONE系列。設定変更欄「-」のため変更仕様の根拠には使用しない。
  - url: https://pachiseven.jp/articles/detail/8995
    title: 平成のパチスロを作った10機種ランキング / パチ7
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_INDUSTRY
    usedFor: 2009年NET「ドラキュラ」、ネオストック方式の後年説明・機種同定補助。

researchNotes:
  - 351追加後の境界再監査で、旧LATEST_HANDOFFが月単位候補として残していたNET「ドラキュラ」に当時グリーンべるとの具体日2009-03-01納品予定が存在することを確認。GitHub既存検索で本機レコードが見つからなかったため、時系列漏れ防止ルールに従い352件目として遡及追加。
  - KPE「悪魔城ドラキュラ」（既存別機）とはメーカー・システムとも別物。検索結果で両機が混在するため「NET / ネット / ネオストック / ドラキュラRUSH / ドラキュラZONE」を併用して分離した。
  - 後年5号機クロニクルのNETドラキュラ欄には十字架/ART等、KPE悪魔城ドラキュラや別シリーズと混同した可能性の高い記述があるため、機械割以外も含め主根拠には採用していない。
  - 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 高確 / 連荘状態 / ガックン / 初期出目 / 天井」を組み替えて再探索後も本機固有resetBehaviorの直接資料は未確定。一般論から補完しない。
