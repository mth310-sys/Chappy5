# 国際サラリーマンとおるくん

machineName: 国際サラリーマンとおるくん
formalModelName: 国際サラリーマンとおるくんJC
inspectionNumber: 8S0198
manufacturer: KPE
releaseDate: 2009-04-20
releaseDatePrecision: INDUSTRY_SCHEDULE_EXACT_DATE
releaseDateNote: ALL7の2009年4月導入予定一覧で2009-04-20を確認。KONAMI公式機種アーカイブでは2009年4月稼働開始。P-WORLDも2009年4月導入開始として整合する。
generation: 5号機
systemType: ボーナス + RT / パンク回避型RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  publishedSeriesA:
    setting1: 96.9%
    setting2: 97.9%
    setting3: 100.1%
    setting4: 102.7%
    setting5: 105.5%
    setting6: 108.4%
  publishedSeriesB:
    setting1: 98.1%
    setting2: 99.1%
    setting3: 101.4%
    setting4: 103.9%
    setting5: 106.8%
    setting6: 109.8%
  status: CONFLICT_DEFINITION_UNRESOLVED
  note: pacnkは96.9〜108.4%系列、P-WORLDと5号機クロニクルは98.1〜109.8%系列を掲載。後年整理資料は各設定をレンジ96.9-98.1%等で併記する。通常/完全攻略差である可能性は高いが、今回取得できた直接資料では両系列の計算条件を明示確認できないため平均せずCONFLICTとして保持する。

initialHitBySetting:
  blue7Big:
    setting1: 1/2114.06
    setting2: 1/2114.06
    setting3: 1/2114.06
    setting4: 1/1985.94
    setting5: 1/1985.94
    setting6: 1/1872.46
  red7Big:
    setting1: 1/668.73
    setting2: 1/630.15
    setting3: 1/555.39
    setting4: 1/512.00
    setting5: 1/448.88
    setting6: 1/417.43
  bigCombined:
    setting1: 1/508.0
    setting2: 1/485.5
    setting3: 1/439.8
    setting4: 1/407.1
    setting5: 1/366.1
    setting6: 1/341.3
  regular:
    setting1: 1/1092.27
    setting2: 1/1092.27
    setting3: 1/1024.00
    setting4: 1/949.80
    setting5: 1/873.81
    setting6: 1/819.20
  bonusCombined:
    setting1: 1/346.8
    setting2: 1/336.1
    setting3: 1/307.7
    setting4: 1/284.9
    setting5: 1/258.0
    setting6: 1/240.9
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLDの青7BIG・赤7BIG・REGと合算を主値として採用。赤7BIGと全ボーナス合算はpacnkでも一致し、BIG合算/REG/全ボーナス合算は後年整理資料とも一致する。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名/型式/KPEと「50枚」「1000円」「ベース」「コイン持ち」を組み替え、P-WORLD、pacnk、パチマガスロマガ、後年DB/回顧資料を横断。パチマガスロマガの1000円あたりゲーム数ページは現存するが本文が「現在調査中」で、比較可能な直接G数を確定できず。小役確率から逆算しない。

netIncrease:
  allRT:
    value: 約+0.7枚/G
    status: ANALYSIS_HIGH
    note: P-WORLDが機種タイプ欄で1Gあたり約0.7枚増加と掲載。pacnkは赤7BIG後100G/REG後50Gを現状維持RT、青7BIG後を増加型RTと表現するため、RT種類による体感・定義差の可能性がある。今回、RT別の個別純増値は確認できないため約+0.7枚/GをP-WORLD掲載値として保持する。

basicPayout:
  big: 約300枚
  regular: 約70枚
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLDとパチマガスロマガで一致。規定払い出しはBIG420枚超、REG90枚超。

modeSpecificMinimumData:
  - 全ボーナス終了後にRTへ突入する。
  - 赤7BIG後は100G、REG後は50GのRT。pacnkは現状維持RTとして整理。
  - 青7BIG後は次回ボーナス成立まで継続する増加型RT「バブルタイム」。
  - 全RTは「青7・スイカ・青7」のパンク役入賞で終了し、ナビ時に赤7を狙うことでパンク回避可能。
  - 天井機能は非搭載と直接確認。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式「国際サラリーマンとおるくんJC」/KPEと「設定変更」「リセット」「朝一」「据え置き」「RT」「バブルタイム」「パンク」を組み替え、パチマガスロマガに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を回収できず、設定変更時のRT状態やパンク関連状態を断定しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の赤7後RT/REG後RT/バブルタイム残状態の引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のRT残状態を直接確認できず。
  gameCounterReset: NOT_APPLICABLE_TO_GAME_COUNT_CEILING。天井機能非搭載を確認しており、天井ゲーム数カウンタのリセット/引継ぎ対象なし。
  ceilingAfterReset: NOT_APPLICABLE。通常天井・リセット専用短縮天井とも非搭載/確認なし。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常モード/朝一専用モードの公開構造を確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT中に設定変更または電源断した場合の状態初期化/継続を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの天井短縮、RT優遇、朝一専用恩恵は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの主要な不利要素は確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、RT表示/液晶等による本機固有の設定変更・据え置き判別条件を確定できず。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_CONFLICT
resetBehaviorQA: RESEARCHED_WITH_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - payoutRateBySetting: pacnkの96.9/97.9/100.1/102.7/105.5/108.4%と、P-WORLD・5号機クロニクルの98.1/99.1/101.4/103.9/106.8/109.8%が競合。後年資料は両者をレンジ併記。計算条件を直接確定できないため平均しない。
  - rtNetDefinition: P-WORLDは1Gあたり約+0.7枚とする一方、pacnkは赤7BIG後100G/REG後50Gを「現状維持RT」、青7BIG後のみ「増加型RT」と表現。RT別個別純増値がないため定義差として注記し、P-WORLDの約+0.7枚/Gを単純に全RT個別値へ展開しない。

missingFields:
  - 50枚あたりゲーム数/ベース
  - 2系列機械割の正式な計算条件（通常/完全攻略等）の一次確認
  - 赤7BIG後RT・REG後RT・バブルタイム別の個別純増値
  - 設定変更時のRT残状態処理
  - 据え置き時のRT残状態引継ぎ
  - 単純電源OFF→ON時のRT残状態
  - ガックン/初期出目/液晶等による変更判別条件
  - 設定変更専用の公開朝一数値

sources:
  - url: https://www.konami.com/amusement/psm/archive/ps/2009/kokusai/
    title: 2009年 国際サラリーマンとおるくん / KONAMI機種アーカイブ
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: KPE、2009年4月稼働開始、5号機RT。
  - url: https://www.all7.jp/plans/index/2009/04
    title: 2009年4月の導入機種一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-04-20導入予定、同日群順序監査。
  - url: https://www.p-world.co.jp/machine/database/5489
    title: 国際サラリーマンとおるくん / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 型式名、検定番号、青7BIG/赤7BIG/REG/合算、機械割98.1〜109.8%、BIG約300枚、REG約70枚、RT約+0.7枚/G、パンク回避構造。
  - url: https://pacnk.com/slot/tools/sh_kokusaisarariman.html
    title: 国際サラリーマンとおるくん 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: ボーナス合算1/346.80〜1/240.90、赤7BIG設定差、PAYOUT96.90〜108.40%、天井非搭載、赤7後100G/REG後50G/青7後次回ボーナスまでのRT、パンク役回避。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/14/a.php
    title: 国際サラリーマンとおるくん 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 全ボーナス後RT、青BIG後次回ボーナスまでRT、BIG約300枚、REG約70枚、規定払い出し。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/14/c.php
    title: 国際サラリーマンとおるくん 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数欄が「現在調査中」であることを確認し、ベースを推測で埋めない判断。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/14/kpe_slot_14.php
    title: 国際サラリーマンとおるくん / パチマガスロマガ索引
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 「攻め時・ヤメ時・設定変更時」専用項目の存在確認。本文未取得のためresetBehaviorは推測しない。
  - url: https://5goki.com/kpe
    title: KPE 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: SECONDARY_RETROSPECTIVE
    usedFor: 2009年4月、機械割98.1〜109.8%系列の照合。
  - url: https://pachinko.hatenablog.jp/entry/2009/04/kokusai-salaryman-toru-kun
    title: KPE「国際サラリーマンとおるくん」の筺体＆スペック＆情報 / pachinko’s blog
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ARCHIVE
    usedFor: BIG合算、REG、全ボーナス合算、2系列機械割レンジ、2009年4月・ボーナス+RTの照合。
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5 / slothistory
    retrievedAt: 2026-09-02
    confidence: OLD_ARCHIVE
    usedFor: 型式候補「国際サラリーマンとおるくんJC」検定通過の補助照合（JA別型式の存在も記録あり）。
