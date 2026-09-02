# タイムリミット

machineName: タイムリミット
formalModelName: タイムリミットX
inspectionNumber: 8S1329
manufacturer: JPS
releaseDate: 2009-05-07
releaseDatePrecision: CONTEMPORARY_ANALYSIS_EXACT_DATE_CROSSCHECKED
releaseDateNote: パチ＆スロ必勝本が「5/7導入開始予定」と明記。当時のパチスロ業界初まとめもタイムリミットXを2009/5/7発売確定としており、P-WORLD/5号機クロニクルの2009年5月表記とも整合する。
generation: 5号機
systemType: AT + ART / TYPE-F / JACボーナス保持型ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.7%
  setting2: 99.2%
  setting3: 101.5%
  setting4: 104.0%
  setting5: 107.2%
  setting6: 112.0%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、当時5号機まとめwiki、パチ＆スロ必勝本、5号機クロニクルで一致。

initialHitBySetting:
  jacBonus:
    setting1: 1/112.2
    setting2: 1/111.5
    setting3: 1/110.7
    setting4: 1/110.0
    setting5: 1/109.2
    setting6: 1/108.5
  historicalWikiAlternateRounded:
    setting1: 1/129.0
    setting2: 1/128.0
    setting3: 1/127.0
    setting4: 1/126.0
    setting5: 1/125.1
    setting6: 1/123.9
  status: CONFLICT
  note: P-WORLDと必勝本はJAC 1/112.2→1/108.5で一致する一方、2009年更新の5号機まとめwikiはREG 1/129.0→1/123.9を掲載。名称/計数定義差または当時解析更新差を解消できないため平均せず双方保持し、主値は複数一致のJAC系列とする。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: タイムリミット/タイムリミットX/8S1329/JPSと「50枚」「1000円」「千円」「ベース」「コイン持ち」「1k」を組み替え、P-WORLD、必勝本、パチマガスロマガ、当時Wiki、回顧資料を横断したが比較可能な直接値を確定できず。小役確率から逆算しない。

netIncrease:
  battleModeART: 約+1.5枚/G
  fortunaTimeAT: コインをほぼ減らさず遊技できるATとして公開
  status: INDUSTRY_ANALYSIS_CROSSCHECKED
  note: グリーンべると、P-WORLD、パチマガスロマガ、当時WikiでART約+1.5枚/G一致。

basicPayout:
  jacBonus: 約36枚
  battleModeART: ライフポイント消滅または最大約857Gまで継続
  fortunaTime: 1セット20G + 30%ループ
  fortunaTimeExtra: 次回ボーナスまで継続する無限AT
  status: INDUSTRY_ANALYSIS_CROSSCHECKED

modeSpecificMinimumData:
  - 通常時は通常 / 高確 / 高確+ATの3状態。高確以上でJAC成立ならART「バトルモード」へ突入。
  - バトルモードはライフポイント制。純増約+1.5枚/G、最大約857G。
  - AT「フォルトゥナタイム」は1セット20G+30%ループ。EXモードは次回ボーナスまで継続。
  - 赤7は特殊リプレイで、JACボーナス保持状態を利用してARTを継続するTYPE-F系。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文条件を取得できず、設定変更時に通常/高確/高確+ATのどこから開始するかを直接確定できない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の通常/高確/高確+AT、フォルトゥナタイム、EXモード、ART残状態の翌日引継ぎを直接確認できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の内部状態・AT/ART残状態の扱いを直接確認できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_IN_AVAILABLE_SYSTEM_DESCRIPTIONS。P-WORLD、必勝本、パチマガスロマガ、当時Wikiのゲームフロー/攻略項目で通常ゲーム数到達型天井を確認できない。
  ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常/高確/高確+ATの設定変更時初期振り分け・固定状態を直接確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。高確ショート/ミドル/ロング等を含む設定変更時初期状態の直接資料を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。短縮天井・朝一専用高確・朝一ART等の設定変更専用恩恵を直接確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: ガックン、初期出目、液晶ステージ、ランプ等を用いた本機固有の設定変更判別を、機種名・型式・メーカー・設定変更/リセット/朝一/据え置き/ガックンを組み替えて再探索したが直接資料を確認できず UNVERIFIED_AFTER_RESEARCH。
  numericResetData:
    normalCeiling: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
    resetSpecificCeiling: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
    gameCountAfterSettingChange: NOT_APPLICABLE
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_BASE_UNVERIFIED_INITIAL_HIT_CONFLICT
resetBehaviorQA: RESEARCHED_SETTING_CHANGE_POWER_CYCLE_STATE_AND_DETECTION_UNVERIFIED

conflicts:
  - jacProbabilityDefinition: P-WORLD/必勝本はJAC 1/112.2→1/108.5、2009年5号機まとめwikiはREG 1/129.0→1/123.9。定義差または解析更新差を解消できずCONFLICT。機械割は97.7→112.0%で一致。

missingFields:
  - 50枚あたりゲーム数/1000円あたりゲーム数の直接値
  - 設定変更時の通常/高確/AT初期状態
  - 据え置き・単純電源OFF→ON時の内部状態/AT/ART残状態
  - ガックン/初期出目/液晶等による設定変更判別
  - 設定変更専用の公開朝一数値（存在確認できず）

sources:
  - url: https://p.hisshobon.jp/machine/1353/1/20669
    title: 基本スペック[タイムリミット] / パチ＆スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 2009-05-07導入開始予定、設定別JAC確率、機械割、JAC約36枚、ART基本構造。
  - url: https://www.p-world.co.jp/machine/database/5515
    title: タイムリミット / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: JPS、5号機AT/ART、型式タイムリミットX、検定8S1329、JAC確率、機械割、約36枚、ART約+1.5枚/G、最大857G。
  - url: https://web-greenbelt.jp/00003037/
    title: ライフポイント制ARTを搭載、『タイムリミット』 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: JPS発表、ARTバトルモード約+1.5枚/G・最大約857G、高確/ATからのART突入構造。
  - url: https://w.atwiki.jp/5gouki/pages/165.html
    title: タイムリミット / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: OLD_CONTEMPORARY_DATABASE
    usedFor: 当時ゲーム性、機械割クロスチェック、ART/AT構造、REG確率の競合系列検出。
  - url: https://p.hisshobon.jp/machine/1353/1/20673
    title: 通常時の状態[タイムリミット] / パチ＆スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 通常/高確/高確+ATの3状態、フォルトゥナタイムの20G+30%ループ。
  - url: https://p-kn.com/slot/953/10132/
    title: フォルトゥナタイム&EXモード(AT) / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: フォルトゥナタイム1セット20G+30%ループ、EXモード次回ボーナスまで継続。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/18/jps_slot_18.php
    title: タイムリミット / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 基本システム、ART約+1.5枚/G・最大約857G、設定変更時専用攻略項目の存在確認。本文は取得不能のためresetBehaviorを推測しない。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ ～更新情報7
    retrievedAt: 2026-09-02
    confidence: OLD_CONTEMPORARY_DATABASE
    usedFor: タイムリミットXが2009/5/7発売確定として登録されていたことの具体日クロスチェック。
  - url: https://5goki.com/jps
    title: JPS 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SECONDARY
    usedFor: 2009年5月導入、設定別機械割のクロスチェック。
