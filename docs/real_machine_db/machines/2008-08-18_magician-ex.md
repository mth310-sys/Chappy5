# マジシャンEX

machineName: マジシャンEX
manufacturer: ファースト
releaseDate: 2008-08-18
releaseDatePrecision: RELEASE_DATE_RETROSPECTIVE_TRACKER_WITH_CONTEMPORARY_2008-08-17_DELIVERY_PLAN
modelName: UNVERIFIED_AFTER_RESEARCH（旧資料では「マジシャン」「マジシャンEX」表記。正式型式名を一次資料で確定できず）
generation: 5号機
systemType: ノーマル / 完全告知
payoutRateBySetting:
  setting1: 96.00%
  setting2: 97.77%
  setting3: 99.75%
  setting4: 101.56%
  setting5: 103.52%
  setting6: 106.06%
  sourceType: パチマガスロマガ シミュレート値
  status: ANALYSIS_HIGH
initialHitBySetting:
  BIG:
    setting1: 1/299.25
    setting2: 1/292.57
    setting3: 1/284.94
    setting4: 1/280.07
    setting5: 1/275.36
    setting6: 1/268.59
  REG:
    setting1: 1/412.18
    setting2: 1/381.02
    setting3: 1/352.34
    setting4: 1/321.25
    setting5: 1/292.57
    setting6: 1/268.59
  bonusCombined:
    setting1: 1/173.38
    setting2: 1/165.49
    setting3: 1/157.54
    setting4: 1/149.63
    setting5: 1/141.85
    setting6: 1/134.30
  status: ANALYSIS_HIGH_CROSSCHECKED_BY_LATER_RETROSPECTIVE_NORMAL_MACHINE_DATABASE
baseGamesPer50:
  setting1: 35.44G
  setting2: 35.68G
  setting3: 35.93G
  setting4: 36.17G
  setting5: 36.40G
  setting6: 36.88G
  status: ANALYSIS_HIGH
netIncrease: NOT_APPLICABLE（RT/ART/AT非搭載のノーマル機）
basicPayout:
  BIG: 約312枚
  REG: 約104枚
  payoutThreshold:
    BIG: 345枚超払い出しで終了
    REG: 119枚超払い出しで終了
  status: ANALYSIS_HIGH
modeSpecificMinimumData:
  notificationSystem: 完全告知
  simultaneousBonus: 小役同時成立あり。単独/同時成立比率は設定別に解析されているが、物差し用途上の内部詳細として本レコードでは最低限のみ保持。
  ceiling: NONE_CONFIRMED_AFTER_RESEARCH
  RT_ART_CZ: NONE_CONFIRMED

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。本機固有の設定変更時初期化処理を直接説明する現存資料を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の本機固有処理を直接確定できず。通常ゲーム数天井/RT/ART/CZを持たないため、主要な宵越し天井利益は確認されない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時の本機固有挙動を直接確定できず。
  gameCounterReset: NOT_APPLICABLE_TO_CEILING（通常ゲーム数天井なしを前提とするノーマル機。設定変更判別用の内部ゲーム数挙動は未確認）
  ceilingAfterReset: NOT_APPLICABLE（通常ゲーム数天井/短縮天井を確認できず）
  modeAfterReset: NOT_APPLICABLE_TO_GAMEPLAY_MODE。通常時モード/朝一専用モードを確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用の内部高低状態等は確認できず、本機固有の開始状態資料も未回収。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。機種名/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目を組み替え、当時解析・旧業界追跡・後年DBまで再探索したが、本機固有の変更判別条件を確定できず。
  numericResetData:
    resetCeilingGameCount: NOT_APPLICABLE
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_WITH_NO_MAJOR_RESET_BENEFIT_CONFIRMED

conflicts: []

missingFields:
  - 正式型式名の一次資料確認
  - 設定変更時の本機固有初期化挙動
  - 据え置き/電源OFF→ON時の本機固有挙動
  - ガックン/初期出目等による変更判別の直接資料

sources:
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/04/a.php
    title: マジシャンEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ファースト製、ノーマル/完全告知、BIG345枚超（約312枚）・REG119枚超（約104枚）払い出し終了。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/04/h.php
    title: マジシャンEX ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定1〜6 BIG/REG/合算、シミュレート機械割96.00〜106.06%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/04/c.php
    title: マジシャンEX 小役出現確率・通常時 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 1000円（50枚）あたり35.44〜36.88G。
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_INDUSTRY_TRACKER
    usedFor: ファースト「マジシャン」が発売確定機種「マジシャンEX」として扱われたこと、当時の発売追跡。直前handoffで2008-08-18発売確認済み。
  - url: https://p-mans.blogspot.com/2008/08/
    title: Pマンズ 2008年8月 業界ニュース
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY_NEWS_MIRROR
    usedFor: 2008-08-04時点でファーストが「8月17日に納品予定の新機種マジシャン」の製造・販売継続方針を表明していた記録。
  - url: https://jugjug.net/juggler-hommage
    title: ジャグラーリスペクト系パチスロ機種一覧
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008/8導入、ファースト製、BIG/REG/合算の設定別値を照合。
  - url: https://pachimaga.com/free/playback/1708a7b6a5f5afe16e1d0f39a3e1bb2682dfef86.php
    title: 5号機ヒストリア2008年後編 / パチマガスロマガFREE
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS_HIGH
    usedFor: 2008年夏登場機としてマジシャンEXを確認。

researchNotes:
  - 最新main README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前289ザ・ブルーハーツを再読し、289件地点を正本として開始。
  - 表記揺れ「マジシャンEX」「マジシャン」「THE MAGICIAN」、メーカー「ファースト」と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン等を組み替えて再探索。
  - 性能コアはパチマガスロマガ現存ページで設定1〜6の主要値とベース、獲得枚数まで取得できたためCOMPLETE_CORE。
  - resetBehaviorはノーマル機で主要な天井/CZ/ART/有利区間は非該当。機種固有の設定変更・電断・変更判別は十分な再探索後も直接資料を確定できずUNVERIFIED_AFTER_RESEARCH。
  - 2008-08-17納品予定（当時業界ニュース）と、直前handoffで確認済みの2008-08-18発売追跡を定義差として保持し、主releaseDateを2008-08-18とした。
