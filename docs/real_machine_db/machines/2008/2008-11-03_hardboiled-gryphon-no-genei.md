# ハードボイルド～グリフォンの幻影～

machineName: ハードボイルド～グリフォンの幻影～
manufacturer: サミー
releaseDate: 2008-11-03
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_DATE
modelName: パチスロハードボイルド / Hard Boiled～グリフォンの幻影～
modelNumber: ハードボイルドF
modelNumberStatus: CONTEMPORARY_INDUSTRY_AND_P_WORLD
approvalNumber: 8S0622
approvalNumberStatus: P_WORLD_MACHINE_DATABASE
generation: 5号機
systemType: ボーナス + AT高確「HIGH WAY ZONE」 + ART「BULLET RUSH」 / 4ライン・パンク回避型ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primaryContemporaryAnalysis:
    setting1: 96.4%
    setting2: 97.8%
    setting3: 99.3%
    setting4: 103.5%
    setting5: 106.4%
    setting6: 111.0%
  pWorldDatabase:
    setting1: 98.0%
    setting2: 99.5%
    setting3: 101.4%
    setting4: 103.9%
    setting5: 107.4%
    setting6: 111.7%
  status: CONFLICT
  note: 2008-11-07更新の5号機まとめwikiおよび2008-11-09更新の当時攻略系資料は96.4〜111.0%系列で一致。一方、P-WORLD現存機種DBは98.0〜111.7%系列を掲載。定義差/シミュレーション条件差を今回確定できないため平均せず両系列を保持。

initialHitBySetting:
  BIG:
    setting1: 1/474.90
    setting2: 1/455.11
    setting3: 1/436.91
    setting4: 1/414.78
    setting5: 1/385.51
    setting6: 1/350.46
  REG:
    setting1: 1/590.41
    setting2: 1/569.88
    setting3: 1/550.72
    setting4: 1/528.52
    setting5: 1/492.75
    setting6: 1/464.79
  bonusCombined:
    setting1: 1/263.20
    setting2: 1/253.03
    setting3: 1/243.63
    setting4: 1/232.40
    setting5: 1/216.29
    setting6: 1/199.80
  status: MULTI_SOURCE_MATCH
  note: 2008-11-09当時攻略資料のBIG/REG/合算表と、P-WORLDのスーパーBIG/ノーマルBIG/REG内訳・合算を照合。BIG合成はスーパーBIG1/2849.39全設定共通と異色BIG設定差を合算した値。

baseGamesPer50:
  range: 37.1G-38.0G/50枚
  status: ANALYSIS_SINGLE_RETROSPECTIVE
  note: CrankySeven現存解析ページの「1000円あたりの回転数」。別系統の比較可能な設定別ベース表を今回回収できなかったため単一解析値として保持。

basicPayout:
  premiumSameColorBIG: 約328〜330枚
  normalDifferentColorBIG: 約250〜258枚
  REG: 約55枚
  regulatedPayoutEnd:
    sameColorBIG: 465枚を超える払い出しで終了
    differentColorBIG: 370枚を超える払い出しで終了
    REG: 70枚を超える払い出しで終了
  status: MULTI_SOURCE_ROUNDED_MATCH
  note: パチマガスロマガ現存旧攻略は同色BIG約328枚、異色BIG約255〜258枚、REG約55枚。P-WORLDは約330/250/55枚。実獲得枚数の丸め差として双方を保持し、規定払い出し終了条件も分離記録。

netIncrease:
  bulletRush:
    greenBeltContemporary: 約+1.0枚/G
    pWorldDatabase: 約+0.8枚/G
    crankySeven: 約+1.0枚/G
    status: CONFLICT
  note: 2008-09-18グリーンべるとは約1枚/G、P-WORLDは約0.8枚/G。後年CrankySevenは約1.0枚/G。平均せずCONFLICT保持。

modeSpecificMinimumData:
  highWayZone: ボーナス後は必ず突入。通常時の特定役からも移行抽選あり。AT状態で3択10枚役をナビし、滞在中ボーナスはART突入期待度が高い。
  bulletRush: 1セット50Gを基本とし、当選時50G/150G/500Gの規定ゲーム数振り分け。上乗せあり。規定G数消化またはパンク条件で終了し、ART中ボーナス後は残りARTへ復帰/上乗せ契機となる。
  provisionalCeiling: ボーナス間1200GでHIGH WAY ZONEへ移行。
  provisionalCeilingBenefit: AT高確/HIGH WAY ZONEへの移行。ボーナス直撃天井ではない。
  note: P-WORLDは「仮天井」としてボーナス間1200G→HIGH WAY ZONEを明記。パチマガスロマガ現存旧攻略も基本システムに「天井AT」を掲示するが、取得可能本文では具体G数を回収できないため1200G数値はP-WORLD直接記載を主根拠とする。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名と「設定変更・リセット・朝一・天井・1200G・ハイウェイゾーン・ART」を組み替え、当時攻略、旧DB、P-WORLD、回顧資料を再探索したが、設定変更時の1200Gボーナス間カウンタ初期化/引継ぎ、HIGH WAY ZONE/ART内部状態処理を直接説明する本機固有資料を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の1200Gカウンタ、HZ/ART内部状態、ARTストック/残Gの翌日引継ぎを本機固有資料で確定できず。一般的な5号機挙動から補完しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみでの1200Gカウンタ/HZ/ART/初期出目処理を直接示す資料を回収できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。ボーナス間1200G仮天井の設定変更時リセット/据え置き継続は未確定。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の短縮天井・朝一固定G数は確認できず、通常の仮天井はボーナス間1200G→HIGH WAY ZONE。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。HIGH WAY ZONEなど状態の変更後初期振り分け、朝一専用モードは直接確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ART/HIGH WAY ZONE/ストック・残Gの設定変更/電源断時処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井、HZ優遇、ARTストック等の公開恩恵は直接確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。機種名/型式名と「ガックン・リール・初期出目・ランプ・設定変更判別・朝一」を組み替えて再探索したが、本機固有の変更判別条件を確定できず。
  numericResetData:
    normalProvisionalCeilingGameCount: 1200G between bonuses
    normalProvisionalCeilingDestination: HIGH WAY ZONE
    resetCeilingGameCount: UNVERIFIED_AFTER_RESEARCH
    ceilingCounterCarryOverOnSettingChange: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_AND_ART_NET_CONFLICTS
resetBehaviorQA: RESET_FIELDS_UNVERIFIED_AFTER_RESEARCH_NORMAL_1200G_PROVISIONAL_CEILING_CONFIRMED

conflicts:
  - field: payoutRateBySetting
    sourceA: 2008-11-07〜09当時解析系列 96.4 / 97.8 / 99.3 / 103.5 / 106.4 / 111.0%
    sourceB: P-WORLD 98.0 / 99.5 / 101.4 / 103.9 / 107.4 / 111.7%
    handling: CONFLICT_NO_AVERAGING
  - field: ART純増
    sourceA: 2008-09-18グリーンべると 約+1.0枚/G
    sourceB: P-WORLD 約+0.8枚/G
    handling: CONFLICT_NO_AVERAGING

missingFields:
  - 設定変更時のボーナス間1200Gカウンタ初期化/引継ぎ
  - 据え置き/電源OFF→ON時の1200Gカウンタ・HIGH WAY ZONE・ART状態処理
  - ARTストック/残Gの設定変更・電源断・翌日処理
  - 設定変更専用の朝一恩恵/不利・モード振り分け・公開当選率
  - ガックン/初期出目/ランプ等の変更判別条件
  - 50枚ベースの独立別系統照合

sources:
  - url: https://web-greenbelt.jp/00003817/
    title: 新たなARTを搭載し『ハードボイルド』が復活 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: サミー、型式ハードボイルドF、2008-11-03納品開始予定、BULLET RUSH 50/150/500G、上乗せ、HIGH WAY ZONE、ART純増約1枚/G。
  - url: https://w.atwiki.jp/5gouki/pages/116.html
    title: ハードボイルド グリフォンの幻影 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_COMMUNITY_DATABASE_2008_11_07
    usedFor: 4ラインART、設定別ボーナス確率・合算・機械割96.4〜111.0%系列の当時照合。
  - url: https://happyslot.blog15.fc2.com/blog-entry-249.html
    title: ハードボイルド グリフォンの幻影 機種情報 / パチスロSAGASE
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS_2008_11_09
    usedFor: BIG/REG/合算、機械割96.4〜111.0%系列、ボーナス内訳の独立照合。
  - url: https://www.p-world.co.jp/machine/database/5317
    title: パチスロハードボイルド「2008年」 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式ハードボイルドF、検定番号8S0622、ボーナス/機械割別系列、約330/250/55枚、ART約+0.8枚/G、HIGH WAY ZONE、ボーナス間1200G仮天井。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/114/a.php
    title: ハードボイルド～グリフォンの幻影～ / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_ARCHIVE
    usedFor: ART/AT/天井AT分類、同色BIG465枚超・約328枚、異色BIG370枚超・約255〜258枚、REG70枚超・約55枚。
  - url: https://crankyseven.com/hardboiled-pc.htm
    title: ハードボイルド グリフォンの幻影 解析 / CrankySeven
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_RETROSPECTIVE
    usedFor: 1000円あたり37.1〜38.0G、ART約+1.0枚/G、BIG/REG/合算の照合。本文の「天井は存在しない」はP-WORLDの1200G「仮天井（HZ移行）」と定義が異なるため、ボーナス直撃天井なしの意味として扱い、1200G HZ移行自体を否定する根拠にはしていない。
  - url: https://www.sammy.co.jp/japanese/products/pachislot/2008/index.html
    title: 2008年 パチスロ製品一覧 / Sammy
    retrievedAt: 2026-09-02
    confidence: MANUFACTURER_OFFICIAL
    usedFor: 2008年製品としての公式存在確認。公式一覧の日付表記は実ホール納品日と整合しないためreleaseDate根拠には使用していない。
