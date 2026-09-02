# プリティ戦記

machineName: プリティ戦記
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: KPE
releaseDate: 2009-04-20
releaseDatePrecision: INDUSTRY_SCHEDULE_EXACT_DATE
releaseDateNote: ALL7の2009年4月導入予定一覧で2009-04-20を確認。KPE/コナミ系公式資料・後年資料でも2009年4月機として整合するが、今回確認できた公式系現存ページは作品収録実績の確認用途であり、ホール導入日の一次資料ではない。
generation: 5号機
systemType: ボーナス + 完走型RT / CZ
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  marketPublished:
    setting1: 96.7%
    setting2: 97.5%
    setting3: 99.8%
    setting4: 102.2%
    setting5: 104.0%
    setting6: 106.8%
  fullStrategy:
    setting1: 97.6%
    setting2: 98.4%
    setting3: 100.7%
    setting4: 103.1%
    setting5: 105.0%
    setting6: 107.8%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: pacnkが通常PAYOUTと完全攻略PAYOUTを明示して分離掲載。P-WORLD/K-Navi/後年スペック整理は96.7〜97.6%等のレンジ表記で同じ2系列に整合するため、単一値へ平均しない。

initialHitBySetting:
  red7Big:
    setting1: 1/851
    setting2: 1/840
    setting3: 1/789
    setting4: 1/720
    setting5: 1/689
    setting6: 1/636
  blue7Big:
    setting1: 1/728
    setting2: 1/689
    setting3: 1/630
    setting4: 1/590
    setting5: 1/550
    setting6: 1/504
  regular:
    setting1: 1/936
    setting2: 1/936
    setting3: 1/936
    setting4: 1/936
    setting5: 1/936
    setting6: 1/936
  bonusCombined:
    setting1: 1/276.50
    setting2: 1/269.70
    setting3: 1/255.00
    setting4: 1/240.90
    setting5: 1/230.80
    setting6: 1/216.30
  preCZ:
    allSettings: 約1/655
  eventCombinedIncludingPreCZ:
    setting1: 約1/194
    setting2: 約1/190
    setting3: 約1/183
    setting4: 約1/176
    setting5: 約1/170
    setting6: 約1/162
  status: ANALYSIS_HIGH_WITH_DEFINITION_CONFLICT_RESOLVED
  note: pacnkの1/276.50〜1/216.30は赤7BIG・青7BIG・REGの3種を合算した値と算術的に一致するためボーナス合算として採用。K-Navi/後年スペック整理が「ボーナス合算」とする約1/194〜1/162は、3種ボーナス合算に前兆CZ約1/655をさらに合算した値と算術的に一致する。したがって後者を純粋なボーナス合算へ混ぜず、CZ込みイベント合算として分離保持する。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「50枚」「1000円」「ベース」「コイン持ち」を機種名/KPE/型式候補と組み替え、P-WORLD、K-Navi、パチマガスロマガ、pacnk、後年整理資料を横断。パチマガスロマガの1000円あたりゲーム数ページは現存するが本文が「現在調査中」で、比較可能な直接G数を確定できず。小役確率から逆算しない。

netIncrease:
  prettyTime: 約+0.8枚/G
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、K-Navi、パチマガスロマガで一致。RT「プリティタイム」は50G完走型。

basicPayout:
  red7Big: 約308枚
  blue7Big: 約203枚
  regular: 約91枚
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、パチマガスロマガで一致。規定払い出しは赤BIG430枚超、青BIG280枚超、REG120枚超。

modeSpecificMinimumData:
  - 全ボーナス終了後はCZ「プリティチャンス」へ移行し、突入リプレイ成立/入賞を契機に50G完走型RT「プリティタイム」へ移行する。
  - RT「プリティタイム」は50G、純増約+0.8枚/G。
  - 通常時は特殊リプレイ（ベル・ベル・リプレイ）入賞後16Gを経て前兆/CZへつながる構造が公開されている。K-Naviでは前兆CZを全設定約1/655と掲載。
  - ゲーム数到達型の通常天井・リセット専用短縮天井は、検索語と資料系統を変えた今回の調査では確認できない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/プリティー戦記/KPEと「設定変更」「リセット」「朝一」「据え置き」「プリティチャンス」「プリティタイム」「特殊リプレイ」を組み替え、パチマガスロマガの「攻め時・ヤメ時・設定変更時」専用項目の存在まで確認したが、設定変更時のCZ/RT/前兆状態の処理を直接示す本文は回収できず推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時にCZ/RT/特殊リプレイ後16G前兆状態を引き継ぐか、本機固有の直接資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のCZ/RT/前兆状態の扱いを直接確認できず。
  gameCounterReset: NOT_APPLICABLE_TO_GAME_COUNT_CEILING_AFTER_RESEARCH。ゲーム数到達型天井は確認できない。特殊リプレイ後16Gという状態進行は天井ゲーム数と混同しない。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常ゲーム数天井および設定変更専用短縮/延長天井の公開値を確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード/設定変更専用モード振り分けを確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/RT/特殊リプレイ後前兆状態の再抽選・初期化・引継ぎを確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの天井短縮、CZ/RT優遇、朝一専用恩恵は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの主要な不利要素は確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/CZ表示など本機固有の設定変更/据え置き判別条件を確定できず。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED
resetBehaviorQA: RESEARCHED_WITH_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - bonusCombinedLabelConflict: K-Navi/後年整理の約1/194〜1/162は「ボーナス合算」と表記されるが、赤7BIG・青7BIG・REGだけでは約1/276.5〜1/216.3となり一致しない。前兆CZ約1/655まで合算すると約1/194〜1/162に一致するため、定義汚染/誤ラベルとして平均せず分離した。
  - payoutDefinition: 96.7〜106.8%の通常PAYOUTと97.6〜107.8%の完全攻略PAYOUTを単一系列へ平均しない。

missingFields:
  - 当時一次/検定資料での正式型式名・検定番号
  - 50枚あたりゲーム数/ベース
  - 設定変更時のCZ/RT/特殊リプレイ後前兆状態処理
  - 据え置き時のCZ/RT/前兆状態引継ぎ
  - 単純電源OFF→ON時のCZ/RT/前兆状態
  - ガックン/初期出目/液晶等による変更判別条件
  - 設定変更専用の公開朝一数値

sources:
  - url: https://www.all7.jp/plans/index/2009/04
    title: 2009年4月の導入機種一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-04-20導入予定、同日群順序監査。
  - url: https://www.p-world.co.jp/machine/database/5488
    title: プリティ戦記 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: KPE、5号機RT/CZ、赤BIG約308枚、青BIG約203枚、REG約91枚、50G完走型RT、約+0.8枚/G、通常時特殊リプレイ後16GのCZ構造。
  - url: https://p-kn.com/slot/937/
    title: プリティ戦記 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 赤7BIG/青7BIG/REG設定別確率、前兆CZ約1/655、RT50G/約+0.8枚/G、約1/194〜1/162掲載値の定義監査。
  - url: https://pacnk.com/slot/tools/sh_pritysenki.html
    title: プリティ戦記 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: 3種ボーナス合算1/276.50〜1/216.30、通常PAYOUT96.70〜106.80%、完全攻略PAYOUT97.60〜107.80%、定義分離。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/15/a.php
    title: プリティ戦記 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 完走型RT/同時成立、赤BIG約308枚、青BIG約203枚、REG約91枚、約+0.8枚/G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/15/c.php
    title: プリティ戦記 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数ページが現存するが「現在調査中」であることを確認し、ベースを推定で埋めない判断。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/15/kpe_slot_15.php
    title: プリティ戦記 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 「攻め時・ヤメ時・設定変更時」専用項目の存在確認。本文を直接回収できないためresetBehaviorは推測しない。
  - url: https://pachinko.hatenablog.jp/entry/2009/04/pretty-senki
    title: KPE「プリティ戦記」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ARCHIVE
    usedFor: 2009年4月、KPE、ボーナス+RT、設定別ボーナス値/PAYOUTレンジ照合。ただし約1/194〜1/162の「ボーナス合算」ラベルはCZ込み値との不整合を分離。
  - url: https://www.konami.com/games/jp/ja/products/gfca270/
    title: スロうた♪ / KONAMI
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: KPE作品として「プリティ戦記」が公式コンピレーション収録対象に含まれることのメーカー系照合。

researchNotes:
  - resetBehavior再探索語: プリティ戦記 / プリティー戦記 / KPE + 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / プリティチャンス / プリティタイム / 特殊リプレイ。
  - 実機完全再現用の全小役確率・詳細RT内部抽選は収集対象外として追わない。
