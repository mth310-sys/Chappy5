# バウンティキラー

machineName: バウンティキラー
manufacturer: 山佐
releaseDate: 2008-10-05
releaseDatePrecision: INDUSTRY_PRIMARY_SCHEDULED_DELIVERY_DATE
modelName: バウンティキラー
modelNumber: バウンティキラーC
modelNumberStatus: INDUSTRY_DATABASE_AND_ANALYSIS_DATABASE
modelNameNote: P-WORLD・HAZUSEで型式名「バウンティキラーC」を確認。HAZUSEは検定番号6S1046も掲載。
generation: 5号機
systemType: ボーナス+CZ+次回ボーナスまでRT（RT中3択メイン役ナビ）
settings: 1 / 2 / 3 / 4

payoutRateBySetting:
  sourceA_simulated:
    setting1: 96.32%
    setting2: 99.55%
    setting3: 105.64%
    setting4: 111.24%
    source: パチマガスロマガ（シミュレート値）
    note: BIG中の単独ベル取得率は超大量実戦より算出との注記。
  sourceB_analysis:
    setting1: 96.5%
    setting2: 99.6%
    setting3: 105.1%
    setting4: 110.1%
    source: HAZUSE
  status: CONFLICT
  note: 設定3・4で丸め差を超える差があるため平均せず別系列として保持。

initialHitBySetting:
  HYPER_BIG:
    setting1: 1/1394.38
    setting2: 1/1285.02
    setting3: 1/1149.75
    setting4: 1/1040.25
  NORMAL_BIG:
    setting1: 1/661.98
    setting2: 1/612.49
    setting3: 1/555.39
    setting4: 1/520.13
  BIG_combined:
    setting1: 1/448.88
    setting2: 1/414.78
    setting3: 1/374.49
    setting4: 1/346.75
  REG:
    setting1: 1/897.75
    setting2: 1/829.57
    setting3: 1/682.67
    setting4: 1/564.97
  bonusCombined:
    setting1: 1/299.25
    setting2: 1/276.52
    setting3: 1/241.83
    setting4: 1/214.87
  status: ANALYSIS_HIGH
  note: パチマガスロマガ精密値。K-Navi、HAZUSE、P-WORLD掲載値と丸め一致。

baseGamesPer50:
  setting1: 31.80G
  setting2: 32.05G
  setting3: 32.31G
  setting4: 33.31G
  status: ANALYSIS_HIGH
  note: パチマガスロマガ「1000円あたりのゲーム数」。単独9枚役ナビは考慮しない注記あり。当時グリーンべるとの約32Gとも整合。

netIncrease:
  BOUNTY_TIME_RT: 約0.5枚/G
  status: INDUSTRY_PRIMARY
  note: グリーンべると当時記事。RTは突入後、次回ボーナス成立まで継続し、3択メイン役をナビ。シングル役の一部でパンクするため回避手順あり。

basicPayout:
  HYPER_BIG: 平均約406枚
  NORMAL_BIG: 平均約330枚
  REG: 平均約80枚
  status: INDUSTRY_PRIMARY_AND_ANALYSIS_HIGH
  payoutCondition:
    HYPER_BIG: 465枚超払い出しで終了（パチマガ）
    NORMAL_BIG: 375枚超払い出しで終了（パチマガ）
    REG: 12Gまたは6回入賞で終了
  note: グリーンべると当時記事の平均純増406/330/80枚とパチマガスロマガ基本システムで照合。K-Naviには払い出し終了条件480/390枚超表記もあり差異があるため、規定払い出し条件はパチマガ値を主系列としK-Navi差異をCONFLICTに保持。

modeSpecificMinimumData:
  structure: ボーナス後は必ず最大100Gの高確率ゾーン「バウンティゾーン」へ。ゾーン中に特殊リプレイ（ハイパーリプレイ）が成立すると、次回ボーナスまで継続するRT「バウンティタイム」へ移行。
  bountyZoneDuration: 最大100G
  bountyTimeEntry: バウンティゾーン中の特殊リプレイ成立
  bountyTimeDuration: 次回ボーナス成立まで（シングル役一部入賞によるパンクあり）
  bountyTimeNetIncrease: 約0.5枚/G
  normalCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  note: 100Gはボーナス後高確率ゾーンの継続上限であり、通常ゲーム数天井ではない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガの現存インデックスには「攻め時・ヤメ時・設定変更時」項目があるが本文値を回収できず、機種名/型式名と設定変更・リセット・朝一・バウンティゾーン・バウンティタイムを組み替えた検索でも本機固有の変更時初期状態を確定できなかった。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。設定据え置き時のバウンティゾーン残G・RT状態・パンク回避状態の引継ぎを直接示す資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみでのバウンティゾーン残G・RT状態・初期出目処理を本機固有資料で確定できず。
  gameCounterReset: NOT_APPLICABLE_FOR_NORMAL_CEILING / UNVERIFIED_FOR_BOUNTY_ZONE_REMAINING_G。通常ゲーム数天井は確認なし。ボーナス後最大100Gゾーン残Gの設定変更時処理のみ未確定。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常天井・リセット専用短縮天井は確認されず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時にバウンティゾーン相当へ入るか、朝一専用モードがあるかを直接確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。バウンティゾーン/次回ボーナスまでRT中の設定変更・据え置き・電断処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用高確、短縮天井、専用RT突入率などの公開数値は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「バウンティキラー / バウンティキラーC / 山佐」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 変更判別」を組み替え、当時攻略・旧DB・中古実機/回顧資料まで再探索したが本機固有の判別条件を確定できず。
  numericResetData:
    resetCeilingGameCount: NOT_APPLICABLE_OR_NONE_CONFIRMED
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_PAYOUT_CONDITION_CONFLICTS
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: パチマガスロマガ simulation 96.32/99.55/105.64/111.24%
    sourceB: HAZUSE 96.5/99.6/105.1/110.1%
    handling: 平均化せず併記。
  - field: bigPayoutTerminationCondition
    status: CONFLICT
    sourceA: パチマガスロマガ 赤7 465枚超 / 白7 375枚超払い出しで終了
    sourceB: K-Navi Hyper BIG 480枚超 / Big 390枚超払い出しで終了
    handling: 当時業界記事の平均純増406/330枚と整合するパチマガ系列を主系列とするが、K-Navi差異は削除せず保持。
  - field: retrospectiveDatabaseIntegrity
    status: SOURCE_CORRUPTION_SUSPECTED_NOT_USED
    source: 5号機クロニクル山佐ページ
    note: バウンティキラー項目に2008年12月・BIG約260/REG約56枚・biohazard/ウェスカーゾーン等、別機種由来とみられる内容混入を確認。導入時期・性能値の根拠には使用しない。

missingFields:
  - 設定変更時のバウンティゾーン/バウンティタイム初期状態
  - 据え置き・電源OFF→ON時のゾーン残G/RT状態
  - 本機固有の設定変更判別（ガックン/初期出目等）
  - 朝一専用恩恵/不利および公開朝一数値

sources:
  - url: https://web-greenbelt.jp/00003809/
    title: Gackt氏起用の『バウンティキラー』を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2008-10-05納品予定、最大100G高確率ゾーン、次回ボーナスまでRT・純増約0.5枚/G、平均獲得406/330/80枚、約32G/1000円、概算BIG/REG/合算。
  - url: https://www.p-world.co.jp/machine/database/5301
    title: パチスロ「バウンティキラー」 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式名バウンティキラーC、設定別BIG/REG/合算の独立照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/h.php
    title: バウンティキラー ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 赤7/白7/BIG合成/REG/総合算精密値、シミュレートPAYOUT96.32〜111.24%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/c.php
    title: バウンティキラー 小役・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたり31.80/32.05/32.31/33.31G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/a.php
    title: バウンティキラー 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: RT/CZ、規定払い出し465/375枚超、純増約406/330/80枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/yamasa_slot_159.php
    title: バウンティキラー 攻略インデックス / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX_ONLY
    usedFor: 「攻め時・ヤメ時・設定変更時」解析項目の存在確認。本文値は今回回収不能のためresetBehaviorへ推測転記しない。
  - url: https://hazuse.com/machine/pachislot/6S1046/
    title: バウンティキラー / HAZUSE
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 型式名/検定番号、設定別ボーナス精密値照合、機械割96.5/99.6/105.1/110.1%。
  - url: https://p-kn.com/slot/861/
    title: バウンティキラー / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 設定別BIG/REG/合算照合、100G高確率ゾーン・次回ボーナスまでRT構造。BIG払い出し終了条件はパチマガと競合するためCONFLICTとして保持。
