# 南国美人30

machineName: 南国美人30
manufacturer: オリンピア
releaseDate: 2007-01
generation: 5号機 / 30Φ
systemType: A+RT / ボーナス後CZ経由RT
payoutRateBySetting:
- setting1: 95.43%
- setting2: 98.22%
- setting3: 100.35%
- setting4: 102.48%
- setting5: 105.51%
- setting6: 108.46%
- confidence: ANALYSIS_HIGH
initialHitBySetting:
- BIG: [1/356.17, 1/334.37, 1/321.25, 1/309.13, 1/292.57, 1/270.81]
- REG: [1/712.35, 1/668.73, 1/642.51, 1/618.26, 1/585.14, 1/636.27]
- allBonusCombined: [1/237.45, 1/222.91, 1/214.17, 1/206.09, 1/195.05, 1/189.96]
- confidence: ANALYSIS_HIGH
baseGamesPer50:
- setting1: 38.44G
- setting2: 38.72G
- setting3: 39.10G
- setting4: 39.54G
- setting5: 40.08G
- setting6: 40.80G
- confidence: ANALYSIS_HIGH
netIncrease:
- RT南国タイム: 約0.4枚/G
- confidence: ANALYSIS_HIGH
basicPayout:
- BIG: 約250枚（350枚超払い出しで終了）
- REG: 約105枚（140枚超払い出しで終了）
- RT南国タイム: 最大100G
- confidence: ANALYSIS_HIGH
modeSpecificMinimumData:
- 30Φ派生。パチマガスロマガは「南国美人&30」として25Φ/30Φを共通解析掲載。
- 全ボーナスにRT突入チャンスあり。
- RT「南国タイム」は最大100G、約0.4枚/G。
- ボーナス後CZ中の特殊リプレイ確率: 青7BIG後1/2.71、赤7BIG後1/7.72、REG後1/14.52。
resetBehavior:
  settingChangeBehavior: UNVERIFIED（機種名/南国美人30/南国美人&30/設定変更/リセット/朝一/CZ/RT引継ぎ等で再探索したが高信頼資料を確認できず）
  carryOverBehavior: UNVERIFIED（据え置き時のCZ/RT状態引継ぎ資料を確認できず）
  powerCycleBehavior: UNVERIFIED（電源OFF→ONのみのCZ/RT処理を確認できず）
  gameCounterReset: 通常時のゲーム数天井は公開資料で確認できず、物差し上は非該当。CZ/RT残ゲーム数の変更・電断時処理はUNVERIFIED。
  ceilingAfterReset: N/A（公開資料で通常時天井を確認できず）
  modeAfterReset: 朝一専用モード/通常時モード再抽選の高信頼情報なし。UNVERIFIED。
  stateAfterReset: UNVERIFIED
  advantageousSectionReset: N/A（5号機初期、有利区間制度導入前）
  resetBenefits: 朝一専用恩恵の高信頼情報を確認できずUNVERIFIED。
  resetPenalties: 主要な設定変更時不利要素を確認できずUNVERIFIED。
  resetDetection: ガックン等の変更判別情報を高信頼資料で確認できずUNVERIFIED。
  numericResetData: UNVERIFIED
resetBehaviorQA: PARTIAL
sources:
- url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/77/a.php
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ「南国美人&30」。5号機、BIG/REG獲得性能、RT最大100P・約0.4枚/G。
- url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/77/k.php
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: 設定別BIG/REG/合算、PAYOUT。
- url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/77/c.php
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: 1000円あたりゲーム数、CZ特殊リプレイ確率、RT中リプレイ確率。
- url: https://www.p-world.co.jp/machine/database/4519
  acquired: 2026-08-31
  confidence: INDUSTRY
  note: P-WORLD機種DB。南国美人30の設定別BIG/REG・出玉率を照合。
- url: https://dorubako.biz/year/2007.html
  acquired: 2026-08-31
  confidence: ANALYSIS_SINGLE
  note: 2007年1月導入一覧で25Φ/30Φを独立機種として確認。
missingFields:
- 設定変更・据え置き・電源OFF→ON時のCZ/RT状態処理
- 朝一恩恵/不利・変更判別
conflicts: []
status: COMPLETE_CORE
