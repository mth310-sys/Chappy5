# 紅三四郎

machineName: 紅三四郎
manufacturer: JPS（ジェイピーエス）
releaseDate: 2008-07-13 / 2008-07-14
releaseDatePrecision: CONFLICT_PLANNED_SHIPMENT_VS_RELEASE_DAY
modelName: 紅三四郎SP
generation: 5号機
systemType: ボーナス + 30G完走型ループRT / 周期CZ
payoutRateBySetting:
  fiveGokiChronicle:
    setting1: 97.0%
    setting2: 98.5%
    setting3: 100.7%
    setting4: 102.0%
    setting5: 105.3%
    setting6: 107.9%
  pachimagaSimulation:
    setting1: 96.73%
    setting2: 98.14%
    setting3: 100.06%
    setting4: 101.46%
    setting5: 103.75%
    setting6: 105.68%
  confidence: CONFLICT
  note: 5号機クロニクル/旧5号機wikiの系列とパチマガスロマガ旧攻略のシミュレートPAYOUTが設定3以降で差。平均せず双方保持。
initialHitBySetting:
  redBig:
    setting1: 1/655.36
    setting2: 1/585.14
    setting3: 1/630.15
    setting4: 1/655.36
    setting5: 1/564.97
    setting6: 1/585.14
  blueBig:
    setting1: 1/655.36
    setting2: 1/655.36
    setting3: 1/585.14
    setting4: 1/564.97
    setting5: 1/585.14
    setting6: 1/546.13
  ct:
    setting1: 1/682.67
    setting2: 1/712.35
    setting3: 1/630.15
    setting4: 1/546.13
    setting5: 1/546.13
    setting6: 1/496.48
  combined:
    setting1: 1/221.41
    setting2: 1/215.58
    setting3: 1/204.80
    setting4: 1/195.05
    setting5: 1/188.32
    setting6: 1/180.04
  confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: グリーンべるとが設定1/6合算端点、パチマガ旧攻略と旧5号機wikiが全設定系列を確認。
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 紅三四郎/紅三四郎SP/JPSと50枚・1000円・回転数・ベース・コイン持ちを組み替えて旧攻略、旧DB、回顧資料を再探索したが比較可能な本機固有数値を確定できず。
netIncrease:
  rt: 約0.5枚/G
  confidence: INDUSTRY
basicPayout:
  redBig: 平均約308枚
  blueBig: 平均約200枚
  ct: 平均約155枚
  confidence: INDUSTRY
modeSpecificMinimumData:
  cycleCZ:
    trigger: 通常状態256G消化後、またはボーナス後の所定条件
    note: 通常時256Gはボーナス天井ではなくRT突入契機となる周期CZ到達ゲーム数。
  rt:
    gamesPerSet: 30G
    completion: 完走型
    loopRate: 最大90%
    netIncrease: 約0.5枚/G
    note: 30G消化後も周期CZへ戻り、通常リプレイ成立までRT再突入の可能性がある。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。紅三四郎/紅三四郎SP/JPSに設定変更・リセット・朝一を組み合わせ、当時業界、旧攻略、旧DB、回顧資料を再探索したが本機固有の初期化処理を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に通常状態256G周期カウンタ、CZ/RT状態・残Gがどこまで引き継がれるか直接資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の256G周期カウンタ、CZ/RT残状態・残Gの本機固有処理を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常状態256G消化で周期CZへ入ること自体は一次業界資料で確認したが、設定変更でこの周期ゲーム数が0へ戻るか、据え置き/電源断で引継ぐかは未確定。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。256Gはボーナス天井ではなく周期CZ到達。リセット時のCZ周期短縮は確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一専用モード/モード振り分けの公開仕様は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/30G RT状態・残Gの設定変更/電源断時処理を直接確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、初期出目、表示、周期挙動による変更判別の直接資料を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts:
  - field: releaseDate
    status: DATE_LABEL_CONFLICT
    sourceA: グリーンべると 2008-07-13納品予定
    sourceB: 業界史 2008-07-14発売
    handling: 納品予定と発売表現の差として両方保持。いずれも現進捗「爺サマー（7月下旬）」より前。
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: 5号機クロニクル/旧5号機wiki 97.0/98.5/100.7/102.0/105.3/107.9%
    sourceB: パチマガ旧攻略シミュレート 96.73/98.14/100.06/101.46/103.75/105.68%
    handling: 攻略条件/算出定義差の可能性があるため平均せず両系列保持。

missingFields:
  - 50枚あたりゲーム数/1000円ベース
  - 256G周期カウンタの設定変更/据え置き/電源OFF→ON時処理
  - CZ/RT状態・RT残Gの設定変更/電源OFF→ON時処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://web-greenbelt.jp/00003677/
    title: JPSから『紅三四郎』、30G完走型RTがループ / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-07-13納品予定、30G完走型RT、最大90%ループ、通常状態256G後CZ、RT純増0.5枚/G、各ボーナス平均枚数、設定1/6合算端点
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/15/h.php
    title: 紅三四郎 ボーナス抽選確率 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別赤BIG/青BIG/CT/合算、シミュレートPAYOUT
  - url: https://w.atwiki.jp/5gouki/pages/149.html
    title: 紅三四郎 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-01
    confidence: OLD_DATABASE
    usedFor: 設定別ボーナス確率、機械割別系列、周期CZ/RT構造の照合
  - url: https://5goki.com/jps
    title: JPS 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年7月導入、設定別機械割系列
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: OLD_INDUSTRY_HISTORY
    usedFor: 型式/呼称「紅三四郎SP」、2008-07-14発売記録

researchNotes:
  - 2008年7月下旬まで進んだ現DBの境界監査で、一次業界記事に2008-07-13納品予定、旧業界史に2008-07-14発売が確認されたため遡及追加。
  - 256Gはボーナス当選天井ではなく周期CZへの移行ゲーム数。物差しDBでは天井と混同しない。
  - RT/CZの内部抽選詳細は完全再現目的になるため、30G・純増・周期・最大ループ率までを最低限保持。
  - resetBehaviorは周期ゲーム数とRT/CZ状態の朝一処理を重点再探索したが、本機固有の直接根拠は得られなかったためUNVERIFIED_AFTER_RESEARCHとした。
