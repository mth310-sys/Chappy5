# ミュージックボックス 五木ひろし

machineName: ミュージックボックス 五木ひろし
manufacturer: JPS（ジェイピーエス）
releaseDate: 2008-05-06（納品開始）
generation: 5号機
systemType: ノーマル / ボーナス主体（BIG+REG、RT・AT非搭載）
payoutRateBySetting:
  pachimagaSimulation:
    setting1: 96.60%
    setting2: 98.33%
    setting3: 100.01%
    setting4: 101.75%
    setting5: 103.43%
    setting6: 105.42%
    sourceDefinition: パチマガスロマガ シミュレート値
    confidence: ANALYSIS_HIGH
  contemporaryListed:
    setting1: 97.5%
    setting2: 99.5%
    setting3: 101.5%
    setting4: 103.0%
    setting5: 105.0%
    setting6: 107.0%
    sourceDefinition: 2008年更新5号機まとめwiki掲載値。後年5号機クロニクルも同系列。
    confidence: CONFLICT
  note: 2系列の差が設定1で0.9pt、設定6で1.58ptあり、単純な丸め差とは扱わず平均せずCONFLICT保持。
initialHitBySetting:
  BIG:
    setting1: 1/297.89
    setting2: 1/292.57
    setting3: 1/287.44
    setting4: 1/282.48
    setting5: 1/277.69
    setting6: 1/273.07
  REG:
    setting1: 1/481.88
    setting2: 1/442.81
    setting3: 1/409.60
    setting4: 1/381.02
    setting5: 1/356.17
    setting6: 1/334.37
  combined:
    setting1: 1/184.09
    setting2: 1/176.17
    setting3: 1/168.91
    setting4: 1/162.22
    setting5: 1/156.04
    setting6: 1/150.31
  confidence: ANALYSIS_HIGH（パチマガスロマガ精密値。2008年更新wiki・後年DBでも丸め値が一致）
baseGamesPer50:
  setting1: 38.12G
  setting2: 38.56G
  setting3: 39.01G
  setting4: 39.47G
  setting5: 39.94G
  setting6: 40.68G
  confidence: ANALYSIS_HIGH
  sourceDefinition: パチマガスロマガ「1000円あたりのゲーム数」
netIncrease: NOT_APPLICABLE（RT・AT非搭載）
basicPayout:
  BIG: 約310〜312枚（規定345枚超払い出しで終了）
  REG: 約110枚（規定140枚超払い出しで終了）
modeSpecificMinimumData:
  normalType:
    note: RT等の付加機能を搭載しないBIG+REGのシンプルなノーマル機。完全告知系。
  ceiling:
    status: NONE_CONFIRMED / NON_EQUIPPED
    note: 後年設定判別DBは天井機能非搭載と明記。当時パチマガスロマガも「攻め時・ヤメ時・設定変更時→特にナシ」と整理。

resetBehavior:
  settingChangeBehavior: NO_SPECIAL_BEHAVIOR_CONFIRMED_AT_STRATEGY_LEVEL。パチマガスロマガの本機攻略メニューで「攻め時・ヤメ時・設定変更時→特にナシ」と明記。設定変更専用の天井短縮・モード・RT/CZ等は確認されない。
  carryOverBehavior: NO_MORNING_RELEVANT_COUNTER_OR_MODE_CONFIRMED。RT/AT/CZ/天井非搭載のノーマル機で、据え置きによる朝一狙いに直結するゲーム数・モード引継ぎ要素は確認されず。ボーナス成立状態等の実機内部電断処理までは本DB対象粒度外として推定しない。
  powerCycleBehavior: NO_MORNING_RELEVANT_SPECIAL_BEHAVIOR_CONFIRMED。電源OFF→ONのみで発生する天井・モード・状態恩恵/不利は確認されず。本機固有の内部電断処理の詳細は推定しない。
  gameCounterReset: NOT_APPLICABLE_FOR_CEILING（天井非搭載）。朝一客判断に関わる規定ゲーム数カウンタは確認されない。
  ceilingAfterReset: NOT_APPLICABLE（天井非搭載）
  modeAfterReset: NOT_APPLICABLE_AT_PUBLIC_GAMEPLAY_LEVEL（公開された通常時モード管理・朝一専用モードなし）
  stateAfterReset: NONE_CONFIRMED。朝一恩恵/不利につながる設定変更専用内部状態は確認されず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: NONE_CONFIRMED_AFTER_RESEARCH。本機名/JPS/TYPE-Jと「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目」を組み替えたが、本機固有のガックン・表示等による変更判別情報は確定できず。
  numericResetData: NONE_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetBehaviorQA: COMPLETE_AT_MISSION_V07_STRATEGY_LEVEL_NO_SPECIAL_RESET_FEATURE_CONFIRMED

conflicts:
  - code: CONFLICT_PAYOUT_RATE
    detail: パチマガスロマガのシミュレート値は96.60/98.33/100.01/101.75/103.43/105.42%。2008年更新5号機まとめwikiおよび後年5号機クロニクルは97.5/99.5/101.5/103.0/105.0/107.0%。攻略条件/算出定義差の可能性があるため平均せず双方保持。

missingFields:
  - 本機固有の設定変更判別（ガックン/初期出目等）の直接情報は再探索後も未確認。ただし天井・RT・AT・CZ・公開モードを持たないため、v0.7の朝一戦略上の主要リセット要素は「特にナシ」まで確認済み。

sources:
  - url: https://web-greenbelt.jp/00003525/
    title: JPS新機種、五木ひろしとタイアップ / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: JPS、2008-05-06納品開始、RT非搭載、BIG+REG、合成1/184.1〜1/150.3、BIG約312枚、REG約110枚
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/a.php
    title: ミュージックボックス五木ひろし 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/同時成立あり、RT等の付加機能非搭載、BIG345枚超・約310枚、REG140枚超・約110枚
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/h.php
    title: ミュージックボックス五木ひろし ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合成確率、シミュレート機械割96.60〜105.42%
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/c.php
    title: ミュージックボックス五木ひろし 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数38.12〜40.68G
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/14/jps_slot_14.php
    title: ミュージックボックス五木ひろし 攻略メニュー / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時→特にナシ」、設定変更専用攻略要素なしの確認
  - url: https://w.atwiki.jp/5gouki/pages/83.html
    title: ミュージックボックス 五木ひろし / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年5月12日時点の設定別BIG/REG/合成、別系列機械割97.5〜107.0%
  - url: https://5goki.com/jps
    title: JPS 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年5月導入、別系列機械割の後年照合
  - url: https://pacnk.com/slot/tools/sh_myujikkubokkusuitsukihiroshi.html
    title: ミュージックボックス五木ひろし 設定判別ツール / pacnk
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: BIG/REG精密値の照合、天井機能非搭載、RT/AT非搭載ノーマルタイプの後年照合

researchNotes:
  - 2008年5月末境界監査中、既存mainのtreeとLATEST_HANDOFFを照合したところ本機レコードが未登録だったため、259件地点からの漏れ防止QAとして遡及追加。
  - releaseDateはグリーンべると2008-03-21記事の「納品は5月6日から」を採用。後年DBの2008/5とも整合する。
  - 性能コアは機種名/JPS/TYPE-Jと「BIG/REG/合成/機械割/1000円/50枚/ベース/コイン持ち」を変更し、当時パチマガスロマガ・2008年更新wiki・業界記事・後年DBを横断。ベースまで直接値を取得。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/初期出目」を組み替えて再探索。パチマガスロマガに設定変更時「特にナシ」、後年DBに天井非搭載を確認。ガックン等の本機固有変更判別だけは直接情報を確定できず推測していない。
