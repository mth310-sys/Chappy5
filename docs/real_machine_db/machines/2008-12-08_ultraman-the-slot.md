# ウルトラマン・ザ・スロット

machineName: ウルトラマン・ザ・スロット
manufacturer: 山佐
releaseDate: 2008-12-08
releaseDatePrecision: DAY_CONFIRMED_INDUSTRY_SCHEDULE
modelName: パチスロウルトラマンF
modelNumber: パチスロウルトラマンF
inspectionNumber: 8S0890
identityStatus: TITLE_MANUFACTURER_MODEL_INSPECTION_CONFIRMED
generation: 5号機
systemType: A+ART（ボーナス + CZ + 押し順ナビART）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  marketPublishedSeries:
    setting1: 96.9%
    setting2: 99.0%
    setting3: 101.3%
    setting4: 103.7%
    setting5: 106.9%
    setting6: 110.1%
  pachimagaSimulation:
    setting1: 96.43%
    setting2: 98.35%
    setting3: 101.07%
    setting4: 103.34%
    setting5: 106.91%
    setting6: 110.26%
  status: CONFLICT
  note: P-WORLD/pacnk等の市場掲載系列とパチマガスロマガのシミュレート値が一致しないため平均化せず別系列で保持。

initialHitBySetting:
  redBig:
    setting1: 1/590.41
    setting2: 1/1170.29
    setting3: 1/564.97
    setting4: 1/1110.78
    setting5: 1/528.52
    setting6: 1/1057.03
  blueBig:
    setting1: 1/1191.56
    setting2: 1/574.88
    setting3: 1/1129.93
    setting4: 1/546.13
    setting5: 1/1074.36
    setting6: 1/504.12
  bigCombined:
    setting1: 1/394.80
    setting2: 1/385.51
    setting3: 1/376.64
    setting4: 1/366.12
    setting5: 1/354.25
    setting6: 1/341.33
  reg:
    setting1: 1/728.18
    setting2: 1/720.18
    setting3: 1/712.35
    setting4: 1/704.69
    setting5: 1/697.19
    setting6: 1/689.85
  bonusCombined:
    setting1: 1/256.00
    setting2: 1/251.10
    setting3: 1/246.38
    setting4: 1/240.94
    setting5: 1/234.90
    setting6: 1/228.35
  status: ANALYSIS_HIGH_MULTIPLE_SOURCES
  note: パチマガスロマガの精密値を主系列とし、P-WORLD/pacnkの赤7・青7・REG掲載値で照合。

baseGamesPer50:
  bySetting:
    setting1: 31.00G
    setting2: 31.20G
    setting3: 31.40G
    setting4: 31.60G
    setting5: 31.80G
    setting6: 32.00G
  status: ANALYSIS_HIGH
  note: パチマガスロマガ掲載の1000円あたりゲーム数。

basicPayout:
  redBig:
    regulatedEnd: 360枚を超える払い出しで終了
    netCoins: 平均約259枚
  blueBig:
    regulatedEnd: 360枚を超える払い出しで終了
    netCoins: 平均約253枚
  reg:
    regulatedEnd: 70枚を超える払い出しで終了
    netCoins: 約56枚
  status: INDUSTRY_AND_ANALYSIS_HIGH
  note: 当時グリーンべると/P-WORLDで赤7平均約259枚・青7平均約253枚・REG約56枚。パチマガスロマガはBIGを約250枚としてまとめて掲載しており、個別BIGの平均純増は当時業界資料を優先。

netIncrease:
  art:
    name: ウルトラモード
    publishedApprox: 約+1.0枚/G
    detailedBySetting:
      setting1: 約+1.03枚/G
      setting2: 約+1.04枚/G
      setting3: 約+1.04枚/G
      setting4: 約+1.05枚/G
      setting5: 約+1.05枚/G
      setting6: 約+1.06枚/G
    oneSetGames: 40G
  status: INDUSTRY_AND_ANALYSIS_HIGH
  note: 山佐公式/グリーンべると/P-WORLDは約+1.0枚/G、必勝本は設定別+1.03～+1.06枚/G。

modeSpecificMinimumData:
  cz:
    name: ウルトラ作戦
    entry: ボーナス後およびART終了後に移行。ナビポイント保有時は押し順ナビでART突入を補助し、ナビなし時も6択正解でARTへ。
    artEntryWithoutNavigation: 約1/6（16.7%）
  art:
    name: ウルトラモード
    oneSetGames: 40G
    netIncrease: 約+1.0枚/G（解析詳細では設定別約+1.03～+1.06枚/G）
    end:
      - 40G消化
      - ボーナス成立
    continuation: ART終了後CZへ戻り、ナビポイントまたは自力6択正解で再突入。
  ceiling:
    trigger: CZ/ARTを除く通常時978G消化
    benefit: ボーナス成立までARTとCZがループする天井状態
    counterDefinition: ボーナス間総ゲーム数ではなく通常時ゲーム数
    status: ANALYSIS_HIGH_MULTIPLE_SOURCES
    note: P-WORLD、パチスロ必勝本、pacnkで通常時978G天井を照合。

resetBehavior:
  settingChangeBehavior: PARTIALLY_CONFIRMED。設定変更を行っても天井までの通常時ゲーム数は引き継ぐとの解析資料あり。一方、ナビポイント、CZ/ART・RT状態、高確等の内部状態が設定変更でどう扱われるかは、機種名/型式名/山佐/設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ナビポイント/ガックンを組み替えて再探索しても機種固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
  carryOverBehavior: PARTIALLY_CONFIRMED。天井ゲーム数は宵越し可能と複数攻略資料で確認。ナビポイント、CZ/ART・内部状態の据え置き時引継ぎはUNVERIFIED_AFTER_RESEARCH。
  powerCycleBehavior: PARTIALLY_CONFIRMED。設定変更を伴わない前日→翌日の天井宵越しが可能であることから天井ゲーム数の継続は攻略資料で支持されるが、電源OFF→ONのみのCZ/ART/ナビポイント/内部状態処理は直接資料を回収できずUNVERIFIED_AFTER_RESEARCH。
  gameCounterReset: CARRY_OVER。設定変更後も通常時978G天井までのゲーム数を引き継ぐと解析資料に明記。K-Naviの「宵越アリ」および後年天井資料でも補助確認。
  ceilingAfterReset: 978G_CARRY_OVER_NO_SHORTENING_CONFIRMED。設定変更時に天井カウンタを引き継ぐため、リセット専用短縮天井は確認されない。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の朝一専用モード/モード再抽選を本機固有資料で確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。高確、CZ準備/CZ、ART関連状態、ナビポイントの設定変更時処理を直接確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 天井ゲーム数を設定変更でも引き継ぐため、前日ハマリの宵越し天井狙いが成立し得る。設定変更限定の追加恩恵はNONE_CONFIRMED_AFTER_RESEARCH。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶表示、朝一状態による本機固有の設定変更/据え置き判別法を十分再探索後も確定できず。
  numericResetData:
    resetSpecificCeiling: 978G通常時天井を引継ぎ（短縮なし確認）
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_CONFIRMED_CEILING_CARRYOVER_OTHER_INTERNAL_RESET_RULES_UNVERIFIED

conflicts:
  - 機械割: 市場掲載系列96.9/99.0/101.3/103.7/106.9/110.1% vs パチマガスロマガ・シミュレート96.43/98.35/101.07/103.34/106.91/110.26%。平均化しない。
  - BIG純増表現: 当時業界/P-WORLDは赤7平均約259枚・青7平均約253枚、パチマガスロマガはBIG約250枚の総括表現。定義/丸め差として個別値を優先保持。

missingFields:
  - 設定変更時のナビポイント消去/維持
  - 設定変更時のCZ/ART・RT状態、高確等の内部状態処理
  - 据え置き/電源OFF→ONのみのナビポイント・CZ/ART内部状態処理
  - ガックン/初期出目/表示等の設定変更判別手段
  - 設定変更専用モード振り分け・朝一当選率などの公開数値

sources:
  - url: https://yamasa-next.co.jp/model_umt/
    title: 機種情報：ウルトラマン・ザ・スロット / 山佐ネクスト
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 5号機、A+ART、2008年12月稼働、ナビポイント/CZ/ARTの基本構造。
  - url: https://web-greenbelt.jp/00003903/
    title: 山佐、『ウルトラマン・ザ・スロット』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2008-12-07納品開始予定、ART40G・約+1.0枚/G、CZ/ART構造、赤7約259枚・青7約253枚・REG約56枚。
  - url: https://www.all7.jp/plans/index/2008/12/10
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE
    usedFor: 2008-12-08導入予定。
  - url: https://www.p-world.co.jp/machine/database/5383
    title: ウルトラマン・ザ・スロット / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: メーカー、型式名パチスロウルトラマンF、検定番号8S0890、市場掲載機械割96.9～110.1%、ボーナス純増、ART40G/約+1.0枚、通常時978G天井。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/160/a.php
    title: ウルトラマン・ザ・スロット 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ART/CZ/天井CZ、BIG約250枚・REG約56枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/160/h.php
    title: ウルトラマン・ザ・スロット ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別赤7BIG/青7BIG/BIG合算/REG/ボーナス合算、シミュレート機械割。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/160/c.php
    title: ウルトラマン・ザ・スロット 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたり31.00～32.00G。
  - url: https://p.hisshobon.jp/machine/1268/1/19132
    title: CZ&ART詳細 / パチ＆スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: CZ突入/終了、ナビなしART突入16.7%、ART40G、設定別純増約+1.03～+1.06枚/G。
  - url: https://p.hisshobon.jp/machine/1268/1/19484
    title: ハマリ台狙い / パチ＆スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: CZ/ARTを除く通常時978Gで天井到達するカウンタ定義。
  - url: https://p-kn.com/slot/897/
    title: ウルトラマン・ザ・スロット / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 天井搭載・宵越し可能の補助確認。
  - url: https://pacnk.com/slot/tools/sh_urutoraman.html
    title: ウルトラマン・ザ・スロット 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: 市場掲載機械割/ボーナス数値の補助照合、通常時978G天井、設定変更後も天井までのゲーム数を引き継ぐ旨のリセット情報。
