# 銀河豪華客船クイーンギャラクシア

machineName: 銀河豪華客船クイーンギャラクシア
formalModelName: クイーンギャラクシア4X
inspectionNumber: 8S1254
manufacturer: オーイズミ
releaseDate: 2009-06-08
releaseDatePrecision: ANALYSIS_CALENDAR_EXACT_WITH_CONTEMPORARY_DELIVERY_DAY_ONE_DAY_EARLIER
releaseDateNote: K-Navi全国導入カレンダーは2009-06-08を全国一斉導入開始日として掲載。当時グリーンべるとは2009-06-07より納品開始と明記する。物流開始と全国導入の1日差として双方保持し、本DBの本線日付はhandoffで確定済みの2009-06-08群に合わせる。
generation: 5号機
systemType: ボーナス+RT / CZ経由 / パンク回避型RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.4%
  setting2: 99.7%
  setting3: 102.6%
  setting4: 105.2%
  setting5: 108.7%
  setting6: 114.5%
  status: ANALYSIS_HIGH_CROSSCHECKED_MANUFACTURER_ANNOUNCED_SERIES
  note: P-WORLD、pacnk、パチマガスロマガで一致。パチマガスロマガはメーカー発表値と明記。

initialHitBySetting:
  queenBonus:
    setting1: 1/1985.94
    setting2: 1/1985.94
    setting3: 1/1985.94
    setting4: 1/1985.94
    setting5: 1/1985.94
    setting6: 1/1985.94
  bigCombined:
    setting1: 1/481.88
    setting2: 1/461.52
    setting3: 1/448.88
    setting4: 1/436.91
    setting5: 1/425.56
    setting6: 1/409.60
  regCombined:
    setting1: 1/390.10
    setting2: 1/381.02
    setting3: 1/372.36
    setting4: 1/364.09
    setting5: 1/352.34
    setting6: 1/337.81
  bonusCombined:
    setting1: 1/194.47
    setting2: 1/188.86
    setting3: 1/184.61
    setting4: 1/180.54
    setting5: 1/175.70
    setting6: 1/169.34
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガ精密値。P-WORLD/pacnkの丸め系列 QB 1/1986、BIG 1/482→1/410、REG 1/390→1/338、合算1/194.5→1/169.5 と整合。

baseGamesPer50:
  setting1: 31.49G
  setting2: 31.85G
  setting3: 32.23G
  setting4: 32.61G
  setting5: 33.01G
  setting6: 33.49G
  status: ANALYSIS_SINGLE_OLD_MAJOR
  note: パチマガスロマガ旧解析ページの「1000円あたりのゲーム数」直接値。別系統で同じ設定別系列を直接再照合できなかったためANALYSIS_SINGLEに留める。

netIncrease:
  galaxyDrivePrimary: 約+0.5枚/G
  contemporaryIndustryAlternative: 約+0.6枚/G
  status: CONFLICT_SMALL_ESTIMATE_DIFFERENCE
  note: P-WORLD・pacnkは約+0.5枚/G、2009年当時グリーンべるとは約+0.6枚/G。概算/条件差の可能性があるが平均化せず保持。

basicPayout:
  queenBonus: 約270枚 + RT確定
  big: 約270枚
  reg: 約80枚
  regulatedPayout:
    queenBonus: 348枚超払い出し終了
    big: 348枚超払い出し終了
    reg: 95枚超払い出し終了
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、pacnk、パチマガスロマガで実獲得目安が一致。パチマガスロマガは規定払い出し枚数も掲載。

modeSpecificMinimumData:
  - RT「ギャラクシードライブ（GD）」はCZ経由のパンク回避型RT。通常時もチェリー取りこぼし後のCZから突入機会がある。
  - RTは10G間隔でRT/CZをループし、主な継続ループ率は1%・75%・85%。
  - QUEEN BONUS後はRT確定。
  - RT中のボーナス成立後も再度RTが確定する仕様を旧解析で確認。
  - ステージが炎の惑星なら平均約50G、氷の惑星なら平均約150G継続の解析値あり。
  - 通常時/ボーナス後に高確モードが存在。2009年当時資料ではQUEEN BONUS以外のボーナス後に約60〜70%で高確モードへ移行するとされる。
  - 天井はQUEEN BONUS/BIG後1200G、REG後800G消化で次回ボーナスまで継続するRTへ突入。P-WORLDと旧天井DBで照合。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/メーカー名と「設定変更」「設定変更時」「リセット」「朝一」「天井」「高確」「RT」「ギャラクシードライブ」を組み替え、パチマガスロマガ旧解析、P-WORLD、旧天井DB、当時業界記事、回顧/旧DBを横断したが、設定変更時の天井カウンタ・高確・RT/CZ状態の具体処理本文を確定回収できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。BIG/QB後1200G・REG後800Gの天井進捗、高確/CZ/RT状態の据え置き時引継ぎを本機固有の直接資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井進捗、高確/CZ/RT状態の処理を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常天井の起算値は確認済みだが、設定変更でRESET/CARRY_OVERのどちらかを示す本機固有資料は未回収。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後の短縮天井・別ゲーム数は確認できず、「短縮なし」と断定できる直接資料も未回収。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。高確モードの存在は確認したが設定変更時の初期モード/振り分けは未確認。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/RT状態および高確状態の設定変更時処理は未確認。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井、高確優遇、RT優遇などは確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶背景、ゲーム数挙動などによる本機固有の変更判別を再探索したが直接根拠を確定できず。
  numericResetData:
    normalCeilingAfterQueenOrBig: 1200Gで次回ボーナスまでRT
    normalCeilingAfterReg: 800Gで次回ボーナスまでRT
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    gameCountAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE_AND_NET_INCREASE_CONFLICT
resetBehaviorQA: PARTIAL_RESET_CARRYOVER_POWER_CYCLE_COUNTER_MODE_STATE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH

conflicts:
  - releaseDateDefinition: グリーンべると=2009-06-07納品開始、K-Navi=2009-06-08全国一斉導入開始。物流/全国ホール導入の定義差として保持。
  - rtNetIncrease: P-WORLD/pacnk=約+0.5枚/G、当時グリーンべると=約+0.6枚/G。概算差として平均化しない。

missingFields:
  - 設定変更時の天井カウンタRESET/CARRY_OVER
  - 据え置き時の天井進捗・高確/CZ/RT状態
  - 単純電源OFF→ON時の天井進捗・高確/CZ/RT状態
  - 設定変更時の高確モード/内部状態振り分け
  - ガックン/初期出目/液晶等による変更判別
  - 設定変更専用の公開朝一数値

sources:
  - url: https://p-kn.com/calendar/200906/
    title: パチンコ・パチスロ新台導入カレンダー 2009年6月 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_CALENDAR
    usedFor: 2009-06-08全国一斉導入開始、同日パチスロ群の時系列境界。
  - url: https://web-greenbelt.jp/00003078/
    title: 松本零士氏とオーイズミのコラボパチスロ登場 / グリーンべると 2009-04-20
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: オーイズミ、2009-06-07納品開始、RT最大85%ループ、純増約+0.6枚/G、合算約1/194〜1/169、高確/潜伏状態の存在。
  - url: https://www.p-world.co.jp/machine/database/5542
    title: 銀河豪華客船クイーンギャラクシア / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 型式クイーンギャラクシア4X、検定番号8S1254、機械割、設定別QB/BIG/REG/合算、約270/270/80枚、RT約+0.5枚/G、天井BIG後1200G・REG後800G、RT基本仕様。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/21/oizumi_slot_21.php
    title: クイーンギャラクシア 機種解析トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 基本システム、設定変更時専用解析項目が存在したことの確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/21/a.php
    title: クイーンギャラクシア 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: CZ/RT構造、RTループ率1/75/85%、RT中ボーナス後RT確定、QB/BIG/REG実獲得と規定払い出し。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/21/c.php
    title: クイーンギャラクシア 小役出現確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 設定別50枚ベース31.49〜33.49G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/21/h.php
    title: クイーンギャラクシア ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: QB/BIG/REG/合算の精密設定別確率、メーカー発表PAYOUT97.4〜114.5%。
  - url: https://pacnk.com/slot/2009/queengalaxia/top.php
    title: 銀河豪華客船クイーンギャラクシア / pacnk
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE_RETROSPECTIVE
    usedFor: 機械割・設定別BIG/REGの別系統照合、RT約+0.5枚/G、ループ率、平均継続Gの照合。
  - url: https://crankyseven.com/sp/tenjo-5ka.htm
    title: か行の機種の天井情報（5号機版） / パチスロ立ち回り講座
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_DATABASE
    usedFor: BIG後1200G・REG後800Gで次回ボーナスまでRTの天井を別系統照合。設定変更後欄は具体記載なし。
  - url: https://5goki.com/oizumi
    title: オーイズミ5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: オーイズミ5号機系列・時代整合の補助確認。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: OLD_ARCHIVE_RETROSPECTIVE
    usedFor: 型式クイーンギャラクシア4X、2009年前後の発売候補・機械割上限114.5%の回顧照合。

researchNotes:
  - resetBehavior欠損判定前に「銀河豪華客船クイーンギャラクシア / クイーンギャラクシア / クイーンギャラクシア4X / オーイズミ」と「設定変更 / 設定変更時 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1200 / 800 / 高確 / CZ / RT / ガックン / 変更判別」を組み替えて再探索。
  - パチマガスロマガの機種トップには「攻め時・ヤメ時・設定変更時」項目の存在を確認したが、現存検索結果から具体本文を回収できなかったため内容を推測しない。
  - 旧天井DBの本機「設定変更後／その他備考」は具体記載なし。空欄を「据え置き」や「リセット」と解釈しない。
