# バトルアスリーテス大運動会

machineName: バトルアスリーテス大運動会
formalModelName: バトルアスリーテスZ
manufacturer: ニューギン
releaseDate: 2009-03-01
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_CONFIRMED
releaseDateNote: グリーンべるとが2009-01-16記事で「納品は3月1日からスタートする予定」と明記。パチ&スロ必勝本は3/2導入開始予定、P-WORLDは2009年2月導入開始表記のため物流開始/ホール導入/月単位登録の定義差として保持。
generation: 5号機
systemType: ボーナス+RT / 一乃チャンス後50G RT / 最大8000G RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pworldMarketSeries:
    setting1: 97.1%
    setting2: 100.2%
    setting3: 104.2%
    setting4: 108.5%
    setting5: 112.3%
    setting6: 116.2%
  hisshobonSimulationSeries:
    setting1: 96.6%
    setting2: 99.1%
    setting3: 102.5%
    setting4: 106.2%
    setting5: 109.4%
    setting6: 112.8%
  status: CONFLICT_NO_AVERAGE
  note: P-WORLD市場掲載系列とパチ&スロ必勝本7000G×10万日シミュレート系列に有意差があるため平均しない。

initialHitBySetting:
  BIG:
    setting1: 1/341.33
    setting2: 1/321.25
    setting3: 1/297.89
    setting4: 1/275.36
    setting5: 1/258.02
    setting6: 1/248.24
  REG:
    setting1: 1/512.00
    setting2: 1/481.88
    setting3: 1/445.82
    setting4: 1/409.60
    setting5: 1/387.79
    setting6: 1/372.36
  ichinoChance:
    setting1: 1/655.36
    setting2: 1/655.36
    setting3: 1/655.36
    setting4: 1/655.36
    setting5: 1/655.36
    setting6: 1/595.78
  bonusCombined:
    setting1: 1/156.04
    setting2: 1/148.95
    setting3: 1/140.33
    setting4: 1/131.60
    setting5: 1/125.31
    setting6: 1/119.16
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: 必勝本精密値。P-WORLD丸め値と一致。

baseGamesPer50:
  setting1: 36.08G/50枚
  setting2: 36.50G/50枚
  setting3: 36.93G/50枚
  setting4: 37.37G/50枚
  setting5: 37.82G/50枚
  setting6: 38.73G/50枚
  status: ANALYSIS_SINGLE
  note: 旧解析サイトslotmaniac検索結果で設定別1000円あたりG数を確認。別系統の直接照合を今回確定できず単一資料扱い。

netIncrease:
  ichinoChance50GRT: 約+0.1枚/G（P-WORLD）
  triathlonRT:
    pworld: 約+0.3枚/G
    hisshobon: +0.34〜+0.44枚/G
    greenbeltAnnouncement: +0.4〜+0.6枚/G
  status: CONFLICT_DEFINITION_OR_ESTIMATE_RANGE
  note: 8000G RT純増は資料系列で差が大きいため平均しない。

basicPayout:
  BIG: 約308枚（345枚超払い出し終了）
  REG: 約104枚（105枚超払い出し終了）
  ichinoChance: 約14枚 + RT50G（19枚超払い出し終了）
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

modeSpecificMinimumData:
  - 一乃チャンス後は50GのRT状態へ移行。
  - 50G RT中の特殊リプレイ入賞で最大8000G継続のRT「トライアスロンタイム/ステージ」へ移行。
  - 必勝本解析の8000G RT突入期待度は設定1 27.5% / 2 28.6% / 3 30.1% / 4 31.7% / 5 33.0% / 6 34.4%。
  - 8000G RTはボーナス成立または8000G消化で終了。事実上ほぼ次回ボーナスまで継続する長期RT。
  - 通常時から低確率でRTへ入る場合があることをP-WORLDが記載。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。旧パチマガスロマガに「攻め時・ヤメ時・設定変更時」項目の存在は確認したが本文を現存ページから確定回収できず、本機固有の設定変更時RT/CZ状態処理を推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の50G RT残G、8000G RT状態、内部RT状態の持越しを明記した直接資料を今回確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの場合のRT/CZ状態・ゲーム状態の処理を本機固有に明記した直接資料は未確定。
  gameCounterReset: NOT_APPLICABLE_FOR_NORMAL_GAME_CEILING / RT_REMAINING_STATE_UNVERIFIED。通常時のゲーム数天井は確認されず、8000GはRT継続上限で天井ではない。
  ceilingAfterReset: NO_NORMAL_GAME_CEILING_CONFIRMED_AFTER_RESEARCH。リセット短縮天井も確認なし。
  modeAfterReset: NO_RESET_SPECIFIC_MODE_CONFIRMED_AFTER_RESEARCH。朝一専用モード/リセット専用モード振分は確認なし。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の50G RT・8000G RT・内部RT状態の初期化/保持は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: DIRECT_DETECTION_UNVERIFIED。ガックン、初期出目、ランプ、液晶等による本機固有の設定変更判別資料は十分な再探索後も未確定。
  numericResetData:
    normalCeiling: NONE_CONFIRMED
    resetSpecificCeiling: NONE_CONFIRMED
    resetModeDistribution: NONE_PUBLISHED_CONFIRMED
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: RESET_BEHAVIOR_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_NO_NORMAL_CEILING_CONFIRMED

conflicts:
  - payoutRate: P-WORLD市場掲載97.1/100.2/104.2/108.5/112.3/116.2%に対し、必勝本シミュレート96.6/99.1/102.5/106.2/109.4/112.8%。平均せず両系列保持。
  - triathlonRTNetIncrease: P-WORLD約+0.3枚/G、必勝本+0.34〜+0.44枚/G、当時グリーンべると発表+0.4〜+0.6枚/G。定義/推定条件差の可能性があるため統合しない。
  - releaseDateDefinition: グリーンべると=2009-03-01納品開始予定 / 必勝本=2009-03-02導入開始予定 / P-WORLD=2009年2月導入開始。日付定義差として保持。

missingFields:
  - 設定変更時の50G RT/8000G RT/内部RT状態の具体処理
  - 据え置き・単純電源OFF→ON時のRT状態/残Gの具体処理
  - ガックン/初期出目/ランプ等による設定変更判別
  - リセット専用モード振分、朝一特定G内当選率、リセット恩恵率等の公開数値
  - 50枚ベースの別系統直接照合

sources:
  - url: https://web-greenbelt.jp/00002965/
    title: ニューギン、『バトルアスリーテス大運動会』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 型式バトルアスリーテスZ、2009-03-01納品開始予定、一乃チャンス約14枚、RT50G、8000G無限RT、発表時純増0.4〜0.6枚/G、突入率約50%。
  - url: https://www.p-world.co.jp/machine/database/5439
    title: バトルアスリーテス大運動会 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: メーカー、型式、検定番号8S0983、設定別BIG/REG/合算、市場掲載機械割、基本獲得枚数、50G RT/8000G RT、純増約0.1/0.3枚G。
  - url: https://p.hisshobon.jp/machine/1314/1/20121
    title: バトルアスリーテス大運動会 基本スペック / パチ&スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 3/2導入開始予定、設定別BIG/REG/一乃チャンス/合算精密値、シミュレート機械割。
  - url: https://p.hisshobon.jp/machine/1314/1/19849
    title: バトルアスリーテス大運動会 シミュレートデータ / パチ&スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 7000G×10万日シミュレート機械割の条件確認。
  - url: https://p.hisshobon.jp/machine/1314/1/19851
    title: バトルアスリーテス大運動会 CZ&RT詳細 / パチ&スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 50G CZ/RT構造、設定別8000G RT突入期待度27.5〜34.4%、RT終了条件、純増+0.34〜+0.44枚/G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/09/newgin_slot_09.php
    title: バトルアスリーテス大運動会 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX_ONLY
    usedFor: 基本システムおよび「攻め時・ヤメ時・設定変更時」解析項目の存在確認。本文は今回未回収。
  - url: https://slotmaniac.web.fc2.com/kaiseki/battleathletes.html
    title: バトルアスリーテス大運動会の解析,攻略 / slotmaniac
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: 設定別1000円あたりG数36.08〜38.73G。本文取得は不安定だが検索インデックスで値を確認。
  - url: https://w.atwiki.jp/5gouki/pages/148.html
    title: バトルアスリーテス 大運動会 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_DATABASE
    usedFor: 当時の設定別ボーナス値と市場掲載機械割系列の補助照合。表欠落があるため主根拠にはしない。

researchNotes:
  - LATEST_HANDOFF正本348件地点（2009-03-01 タコスロ7R）から継続。同日群最優先候補として指定されていた本機を処理。
  - 「バトルアスリーテス大運動会 / バトルアスリーテスZ / ニューギン」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 宵越し / ガックン / 1000円 / 50枚」を組み替え、業界一次・P-WORLD・必勝本・旧パチマガ・古い解析DB・当時wikiを横断。
  - 8000GはRTの最大継続G数であり通常ゲーム数天井ではないため、天井として誤登録しない。
