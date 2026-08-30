# ぐるぐる爆侍

machineName: ぐるぐる爆侍
formalModelName: グルグルバクザムライ
manufacturer: JPS / ジェイピーエス
releaseDate: 2007-01-21（納品開始予定）
generation: 5号機
systemType: ボーナス+RT / BIG+2種CT
payoutRateBySetting:
- marketPublished: [98.0%, 99.0%, 100.6%, 103.0%, 105.0%, 107.0%]
- simulationPublished: [96.70%, 98.02%, 99.55%, 102.09%, 104.25%, 106.26%]
- confidence: CONFLICT
- note: 当時業界発表・HAZUSE・P-WORLDの市場掲載値は98.0〜107.0%。パチマガスロマガのシミュレートPAYOUTは96.70〜106.26%。定義が異なるため平均せず双方保持。
initialHitBySetting:
- BIG: [1/478.36, 1/478.36, 1/464.79, 1/431.16, 1/399.61, 1/378.82]
- CT_OC1: [1/339.56, 1/319.69, 1/319.69, 1/319.69, 1/326.05, 1/303.41]
- CT_totsuB: [1/1638.40, 1/1638.40, 1/1456.36, 1/1310.72, 1/1191.56, 1/1310.72]
- CT_combined: [1/281.3, 1/267.5, 1/262.1, 1/257.0, 1/256.0, 1/246.4]
- allBonusCombined: [1/177.12, 1/171.56, 1/167.61, 1/161.02, 1/156.04, 1/149.28]
- confidence: ANALYSIS_HIGH
baseGamesPer50: UNVERIFIED
netIncrease:
- RT_forwardOrder: 約0.2枚/G
- RT_reverseOrder: 約0枚/G（パンク回避重視）
- confidence: INDUSTRY
basicPayout:
- BIG: 約275枚（345枚超払い出しで終了）
- OMITSU_CHANCE_blue7: 約115〜140枚（135枚超払い出しで終了）
- OMITSU_CHANCE_totsuB: 約115〜140枚（135枚超払い出しで終了）
- confidence: CONFLICT
- note: パチマガスロマガはCT純増約115枚、当時グリーンべるとはフリー打ち時約140枚。打ち方/算定差を含むため平均しない。
modeSpecificMinimumData:
- 青7 CT後は最大50G RT。
- 突B後は最大100G RT。
- RTは順押しで約0.2枚/G増加だが特定小役取りこぼし等で終了し得る。逆押しは純増約0枚でパンク回避を優先できる。
resetBehavior:
  settingChangeBehavior: UNVERIFIED（機種名・型式名に加え「設定変更」「リセット」「朝一」「RT」「引継ぎ」等で再探索したが、高信頼な変更時RT処理資料を確認できず）
  carryOverBehavior: UNVERIFIED（据え置き時RT残ゲーム数・内部RT状態の扱いを確認できず）
  powerCycleBehavior: UNVERIFIED（電源OFF→ONのみのRT状態処理を確認できず）
  gameCounterReset: 通常時ゲーム数天井は公開資料で確認できず物差し上N/A。RT残ゲーム数の設定変更/電断時処理はUNVERIFIED。
  ceilingAfterReset: N/A（通常時天井を確認できず）
  modeAfterReset: 通常時モード/朝一専用モードの公開情報を確認できずUNVERIFIED。
  stateAfterReset: UNVERIFIED
  advantageousSectionReset: N/A（5号機初期・有利区間制度導入前）
  resetBenefits: 朝一専用の主要恩恵を高信頼資料で確認できずUNVERIFIED。
  resetPenalties: 設定変更固有の主要不利要素を確認できずUNVERIFIED。
  resetDetection: ガックン等の変更判別情報を高信頼資料で確認できずUNVERIFIED。
  numericResetData: UNVERIFIED
resetBehaviorQA: PARTIAL
sources:
- url: https://web-greenbelt.jp/00005003/
  acquired: 2026-08-31
  confidence: INDUSTRY
  note: 2006-12-01発表会記事。型式名、3種ボーナス、獲得性能、RT50/100G、RT純増、設定1/6合算・出玉率、2007-01-21納品予定。
- url: https://hazuse.com/i/data/guruguru-bakusamurai/guruguru-bakusamurai/top.htm
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: 当時解析。設定別BIG/CT合算/全ボーナス合算、機械割、払い出し条件、RT仕様。
- url: https://www.p-world.co.jp/machine/database/4510
  acquired: 2026-08-31
  confidence: INDUSTRY
  note: 設定別BIG/CT合算、全ボーナス合算、市場掲載出玉率を照合。
- url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/07/h.php
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: BIG/OC1/突B/合算の精密設定別確率、シミュレートPAYOUT。
- url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/07/a.php
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: 5号機基本システム、BIG約275枚、2種CT約115枚、払い出し条件。
missingFields:
- 50枚あたりゲーム数/1000円ベース
- 設定変更・据え置き・電源OFF→ON時のRT内部状態処理
- 朝一恩恵/不利・変更判別の高信頼情報
conflicts:
- payoutRateBySetting: 市場掲載98.0/99.0/100.6/103.0/105.0/107.0% vs パチマガシミュレート96.70/98.02/99.55/102.09/104.25/106.26%。定義を分けて保持。
- CT basicPayout: パチマガ純増約115枚 vs グリーンべるとフリー打ち時約140枚。平均しない。
status: PARTIAL
