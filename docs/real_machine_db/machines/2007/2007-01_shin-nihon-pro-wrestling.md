# 新日本プロレスまでもがパチスロ機

machineName: 新日本プロレスまでもがパチスロ機
manufacturer: 平和 / HEIWA BROS
releaseDate: 2007-01（業界記事では2007年1月初旬納品予定）
generation: 5号機
systemType: ボーナス+RT / BIG+CB+REG
payoutRateBySetting:
- setting1: 94.2%
- setting2: 96.6%
- setting3: 101.4%
- setting4: 103.2%
- setting5: 105.5%
- setting6: 107.1%
- confidence: ANALYSIS_HIGH
- note: HAZUSE当時解析値。後年5号機クロニクルは94.5/97.1/100.8/103.0/105.7/107.6%と差があるため、後者はCONFLICTとして別記。
initialHitBySetting:
- BIG: [1/385.5, 1/370.3, 1/346.8, 1/337.8, 1/326.1, 1/319.7]
- CB: [1/580.0, 1/555.4, 1/524.3, 1/508.0, 1/489.1, 1/474.9]
- REG: [1/1424.7, 1/1310.7, 1/1260.3, 1/1191.6, 1/1149.8, 1/1110.8]
- allBonusCombined: [1/199.2, 1/189.9, 1/179.1, 1/173.4, 1/167.2, 1/163.0]
- confidence: ANALYSIS_HIGH
baseGamesPer50:
- setting1: 36.0G
- setting2: 36.3G
- setting3: 36.6G
- setting4: 37.0G
- setting5: 37.5G
- setting6: 38.0G
- confidence: ANALYSIS_HIGH
netIncrease:
- RT: UNVERIFIED
basicPayout:
- BIG: 約312枚
- CB: 平均約145枚 / 最大221枚
- REG: 約104枚
- RT: 全ボーナス後60G「60G一本勝負」
- confidence: INDUSTRY + ANALYSIS_HIGH
modeSpecificMinimumData:
- 全ボーナス後に60G RTへ突入。RT終了条件は60G消化またはボーナス成立。
resetBehavior:
  settingChangeBehavior: UNVERIFIED（設定変更時のRT・内部状態処理を示す高信頼資料を、機種名/型式名/設定変更/リセット/朝一/RT引継ぎ等の表記で再探索したが確認できず）
  carryOverBehavior: UNVERIFIED（据え置き時RT残ゲーム数等の公開挙動を確認できず）
  powerCycleBehavior: UNVERIFIED（電源OFF→ONのみのRT・内部状態処理を確認できず）
  gameCounterReset: 天井ゲーム数システムは確認できず、通常時ゲーム数による天井は物差し対象上非該当扱い。RT残ゲーム数の設定変更/電源断時扱いはUNVERIFIED。
  ceilingAfterReset: N/A（公開資料で天井機能を確認できず）
  modeAfterReset: 通常時モード管理の公開資料なし。UNVERIFIED。
  stateAfterReset: UNVERIFIED
  advantageousSectionReset: N/A（5号機初期、有利区間制度導入前）
  resetBenefits: 確認できる朝一専用恩恵なし。UNVERIFIED。
  resetPenalties: 確認できる主要不利要素なし。UNVERIFIED。
  resetDetection: ガックン等の変更判別情報を高信頼資料で確認できずUNVERIFIED。
  numericResetData: UNVERIFIED
resetBehaviorQA: PARTIAL
sources:
- url: https://web-greenbelt.jp/00004980/
  acquired: 2026-08-31
  confidence: INDUSTRY
  note: 2006-12-15記事。5号機、約312枚/CB最大221枚/REG約104枚、全ボーナス後60G RT、2007年1月初旬納品予定。
- url: https://www.hazuse.com/i/data/shinnihon/top.htm
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: 当時解析。設定別BIG/CB/REG/合算、機械割、1000円あたり回転数、RT60G、獲得枚数。
- url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/01/a.php
  acquired: 2026-08-31
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ。BIG312枚、CB平均145枚、REG104枚、全ボーナス後60P RT。
- url: https://5goki.com/heiwa-olympia
  acquired: 2026-08-31
  confidence: ANALYSIS_SINGLE
  note: 後年整理資料。機械割・RTゲーム数・BIG枚数に当時資料との差があるためCONFLICT根拠として保持。
missingFields:
- RT純増/G
- 設定変更・据え置き・電源OFF→ON時のRT/内部状態処理
- 朝一変更判別の高信頼情報
conflicts:
- payoutRateBySetting: HAZUSE 94.2/96.6/101.4/103.2/105.5/107.1% vs 5号機クロニクル 94.5/97.1/100.8/103.0/105.7/107.6%。平均化しない。
- RT/basicPayout: 当時業界記事・パチマガ・HAZUSEはBIG約312枚+全ボーナス後60G RT。一方5号機クロニクルはBIG約250枚+50G RTと記載。前者を高信頼本線、後者をCONFLICTとして保持。
status: PARTIAL
