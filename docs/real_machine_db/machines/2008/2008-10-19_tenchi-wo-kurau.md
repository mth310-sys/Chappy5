# 天地を喰らう

machineName: 天地を喰らう
manufacturer: ロデオ
releaseDate: 2008-10-19
releaseDatePrecision: INDUSTRY_PRIMARY_SHIPMENT_START
releaseDateNote: グリーンべると2008-10-01記事で「納品は10月19日より開始予定」と明記。
modelNumber: UNVERIFIED_AFTER_RESEARCH
generation: 5号機
systemType: ボーナス+RT / 天井RT / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 95.4%
  setting2: 98.3%
  setting3: 100.5%
  setting4: 103.2%
  setting5: 106.4%
  setting6: 110.7%
  status: ANALYSIS_HIGH_CORROBORATED
  note: 当時系まとめ、後年機種回顧で一致。平均補間なし。

initialHitBySetting:
  BIG_combined:
    setting1: 1/309.1
    setting2: 1/299.3
    setting3: 1/290.0
    setting4: 1/275.4
    setting5: 1/257.0
    setting6: 1/231.6
  MIDDLE:
    setting1: 1/428.3
    setting2: 1/397.2
    setting3: 1/372.4
    setting4: 1/350.5
    setting5: 1/324.4
    setting6: 1/282.5
  totalBonus:
    setting1: 1/179.6
    setting2: 1/170.7
    setting3: 1/163.0
    setting4: 1/154.2
    setting5: 1/143.4
    setting6: 1/127.3
  status: ANALYSIS_HIGH_CORROBORATED

baseGamesPer50:
  setting1: 35.23G
  setting2: 35.83G
  setting3: 36.45G
  setting4: 37.11G
  setting5: 37.81G
  setting6: 38.88G
  status: ANALYSIS_HIGH
  note: パチマガスロマガ現存解析値。旧攻略資料の35.3〜38.9Gとも丸め一致。

netIncrease:
  RT: 約0.1枚/G
  status: ANALYSIS_CORROBORATED

basicPayout:
  SUPER_BIG: 最大約310枚 / 解析目安約299〜310枚
  BIG: 最大約310枚 / 解析目安約299〜310枚
  MIDDLE: 最大約116枚 / 解析目安約104〜116枚
  status: INDUSTRY_AND_ANALYSIS_CORROBORATED
  note: 当時業界記事はBIG最大310枚、MIDDLE最大116枚。P-WORLDはS・BIG約305枚、N・BIG305枚、MID約110枚。技術介入の有無で実獲得幅があるため定義を混同しない。

modeSpecificMinimumData:
  RT:
    name: 昇天モード
    trigger:
      - SUPER_BIG後
      - BIG後777G消化
      - MIDDLE後500G消化
    continuation: 次回ボーナス成立まで
    netIncrease: 約0.1枚/G
  ceiling:
    BIG_after: 777G
    MIDDLE_after: 500G
    type: 次回ボーナスまで継続する天井RT
  technicalIntervention: BIG/MIDDLE中の14枚役獲得で獲得枚数増加。業界記事では非実施時比BIG/SBIG +11枚、MIDDLE +12枚。

resetBehavior:
  settingChangeBehavior: CONFIRMED_SINGLE_LEGACY_ANALYSIS。旧攻略資料で「設定変更時、天井到達までのゲーム数はクリアされない」と明記。
  carryOverBehavior: PARTIALLY_CONFIRMED_BY_SETTING_CHANGE_COUNTER_CARRYOVER。設定変更でも天井G数を引き継ぐため、少なくとも天井カウンタは据え置き時も継続すると整合するが、据え置き時のRT内部状態等を直接説明する独立資料は未確定。推測拡張しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみで天井カウンタ・RT状態・表示がどう扱われるか本機固有の直接資料を確定できず。
  gameCounterReset: NOT_RESET_ON_SETTING_CHANGE。BIG後777G / MIDDLE後500Gの天井到達までのゲーム数を設定変更時も引き継ぐと旧攻略資料が明記。
  ceilingAfterReset: NO_SHORTENING_CONFIRMED。設定変更後も既存天井カウンタを引き継ぐため、朝一専用短縮天井は確認されない。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開された通常モード管理は確認されず、朝一専用モードも確認できない。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時にRT中/RT待機等の状態をどう扱うか直接資料を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 天井カウンタ引継ぎにより、前日ハマリ台は設定変更されても残り天井G数が短い可能性がある。これは短縮恩恵ではなくカウンタ非クリアによる朝一狙い要素。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示等の本機固有変更判別を確定できず。
  numericResetData:
    normalCeilingAfterBIG: 777G
    normalCeilingAfterMIDDLE: 500G
    settingChangeCounterCarryOver: CONFIRMED_SINGLE_LEGACY_ANALYSIS
    resetCeilingGameCount: SAME_REMAINING_COUNT_AS_PRE_CHANGE（短縮固定値ではない）
    resetModeDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_WITH_CEILING_COUNTER_CARRYOVER_CONFIRMED_POWER_CYCLE_AND_STATE_UNVERIFIED

conflicts:
  - field: SUPER_BIG_RT_transition_detail
    status: MINOR_DESCRIPTION_VARIANCE
    sourceA: グリーンべると/P-WORLD「スーパーBIG後は直接、次回ボーナスまでの昇天モード」
    sourceB: 5号機まとめwiki「S.BIG後は50Gのリプレイ高確率RT+天井RT」と説明
    handling: 物差し用途では「S.BIG後RT・次回ボーナスまで」が共通核心。内部段階差は実機完全再現範囲外として深追いしない。

missingFields:
  - 正式型式名
  - 電源OFF→ONのみの場合の天井カウンタ/RT状態
  - 設定変更時のRT内部状態処理
  - 本機固有のガックン/初期出目等の変更判別
  - 公開された朝一専用当選率/モード振り分け（該当なしの可能性を含む）

sources:
  - url: https://web-greenbelt.jp/00003882/
    title: ボーナスの連続性重視した『天地を喰らう』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2008-10-19納品開始予定、BIG最大310枚、MIDDLE最大116枚、BIG後777G/MIDDLE後500G天井RT、S-BIG後RT、技術介入枚数差。
  - url: https://news.p-world.co.jp/articles/3080/greenbelt
    title: ボーナスの連続性重視した『天地を喰らう』発表 / P-WORLD転載
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_MIRROR
    usedFor: グリーンべると記事の独立現存ミラー。納品日・天井・獲得性能を照合。
  - url: https://www.p-world.co.jp/machine/database/5326
    title: 天地を喰らう / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 5号機/RT/天井/技術介入分類、S-BIG約305枚・N-BIG305枚・MID約110枚、RT条件。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/50/c.php
    title: 天地を喰らう 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたり35.23〜38.88G。
  - url: https://www.mb.ccnw.ne.jp/seven-peace.com/a-na/tatata/tentiwokurau/tenntiwokurau.html
    title: 天地を喰らう 解析・設定変更情報 / 旧パチスロ攻略資料
    retrievedAt: 2026-09-02
    confidence: LEGACY_ANALYSIS
    usedFor: 設定別機械割/ボーナス確率、1000円ベース、RT純増約0.1枚/G、BIG777G/MIDDLE500G天井、設定変更時も天井G数をクリアしない。
  - url: https://w.atwiki.jp/5gouki/pages/131.html
    title: 天地を喰らう / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_DATABASE
    usedFor: 設定別機械割/ボーナス合算の照合、天井RT構造、技術介入。S-BIG後RT段階の記述差はCONFLICT注記。
  - url: https://pachinko.hatenablog.jp/entry/2008/10/tenchi-wo-kurau
    title: ロデオ「パチスロ 天地を喰らう」の筐体＆情報
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008-10リリース、設定別機械割、BIG/MIDDLE/合算の独立照合。
