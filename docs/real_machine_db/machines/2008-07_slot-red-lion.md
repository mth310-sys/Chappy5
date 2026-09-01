# スロットレッドライオン

machineName: スロットレッドライオン
manufacturer: 西陣
releaseDate: 2008-07
releaseDatePrecision: MONTH_CONFIRMED / INDUSTRY_MID_TO_LATE_JULY_WINDOW
modelName: レッドライオンA1
generation: 5号機
systemType: ノーマル / 完全告知 / 同時成立あり
payoutRateBySetting:
  marketPublished:
    setting1: 96.9%
    setting2: 98.0%
    setting3: 100.4%
    setting4: 102.5%
    setting5: 104.5%
    setting6: 107.0%
    confidence: ANALYSIS_HIGH_AND_OLD_DATABASE_CROSSCHECK
  pachimagaSimulated:
    setting1: 97.34%
    setting2: 98.31%
    setting3: 100.44%
    setting4: 102.33%
    setting5: 104.05%
    setting6: 106.31%
    confidence: ANALYSIS_HIGH
  status: CONFLICT_BY_DEFINITION_OR_SOURCE_SERIES
  note: K-Navi/P-WORLD/後年DBの市場掲載系列と、パチマガスロマガ旧攻略のシミュレート値は一致しない。平均せず別系列として保持。
initialHitBySetting:
  big:
    setting1: 1/295.21
    setting2: 1/289.98
    setting3: 1/280.07
    setting4: 1/275.36
    setting5: 1/270.81
    setting6: 1/264.26
  reg:
    setting1: 1/399.61
    setting2: 1/385.51
    setting3: 1/356.17
    setting4: 1/318.14
    setting5: 1/289.98
    setting6: 1/264.26
  combined:
    setting1: 1/169.78
    setting2: 1/165.49
    setting3: 1/156.78
    setting4: 1/147.60
    setting5: 1/140.03
    setting6: 1/132.13
  confidence: ANALYSIS_HIGH_AND_OLD_DATABASE_CROSSCHECK
baseGamesPer50:
  setting1: 35.15G
  setting2: 35.15G
  setting3: 35.24G
  setting4: 35.32G
  setting5: 35.36G
  setting6: 35.51G
  confidence: ANALYSIS_HIGH
netIncrease: NOT_APPLICABLE
basicPayout:
  big:
    regulation: 337枚を超える払い出しで終了
    netApproximationPublished: 約325枚
  reg:
    regulation: 99枚を超える払い出しで終了
    netApproximationPublished: 約104枚
  confidence: ANALYSIS_HIGH_AND_OLD_DATABASE_CROSSCHECK
modeSpecificMinimumData:
  bonusAfterglowWindow:
    bigAfter: 50G
    regAfter: 30G
    behavior: 上部ランプ点滅・演出頻度上昇。K-Naviでは規定G内の再BIGでTOP GUN ANTHEMが流れる仕様を確認。
    note: RT/ATではなく演出上の連チャン区間。ゲーム数天井や周期当選として扱わない。
  normalCeiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 当時攻略・K-Navi・P-WORLD・旧DB・回顧資料を横断したが、通常ゲーム数天井/救済RT/周期CZは確認できず。

resetBehavior:
  settingChangeBehavior: PARTIAL_CONFIRMED_DETECTION_METHOD_EXISTS_BUT_CONDITION_UNVERIFIED。K-Naviの本機攻略一覧に「BGMで設定変更判別」が明示されており、設定変更判別要素の存在自体は確認。ただし対象BGM・朝一何G/どのボーナス・変更時/据え置き時の具体条件本文は現存検索結果から確定できず、条件を推測補完しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。ボーナス後50G/30Gの演出状態やBGM連チャン履歴が据え置き・日跨ぎでどう扱われるか、本機固有の直接本文を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合にBGM判別用履歴・演出状態が保持/初期化されるか直接資料なし。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数天井・周期ゲーム数は確認できず。ボーナス後50G/30Gは演出区間であり天井カウンタではない。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。リセット短縮天井・変更後専用天井なし/存在を確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常モード/朝一専用モードの公開仕様なし。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ボーナス後の演出/BGM履歴状態が設定変更・電断でどう処理されるかは条件本文未回収。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: PARTIAL_CONFIRMED。K-Naviが「BGMで設定変更判別」を本機固有攻略として掲載しているため変更判別手段の存在は確認。ただし具体条件本文は十分な再探索後も未回収。ガックン/初期出目による本機固有判別は確認できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_SCOPE_WITH_BGM_CONDITION_UNVERIFIED

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: K-Navi / P-WORLD / 5号機クロニクル等 = 96.9 / 98.0 / 100.4 / 102.5 / 104.5 / 107.0%
    sourceB: パチマガスロマガ旧攻略シミュレート = 97.34 / 98.31 / 100.44 / 102.33 / 104.05 / 106.31%
    handling: 定義またはシミュレーション条件差の可能性があるため平均せず双方保持。

missingFields:
  - 全国導入/納品開始の具体日（2008年7月および業界一次資料の7月中旬〜下旬予定までは確認）
  - K-Navi「BGMで設定変更判別」の具体条件本文
  - 設定変更/据え置き/電源OFF→ON時のBGM履歴・ボーナス後演出状態の処理
  - 本機固有のガックン/初期出目による変更判別

sources:
  - url: https://p.hisshobon.jp/news/67
    title: 攻撃型パチスロ続々登場!! / パチ＆スロ必勝本
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-06-04西陣ショールーム内覧会、7月中旬〜下旬導入予定、完全告知系の演出概要
  - url: https://www.p-world.co.jp/machine/database/5223
    title: スロットレッドライオン / P-WORLD
    retrievedAt: 2026-09-01
    confidence: OLD_DATABASE
    usedFor: 型式レッドライオンA1、設定別BIG/REG/合算、96.9〜107.0%機械割系列
  - url: https://p-kn.com/slot/827/
    title: レッドライオン / K-Navi
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/完全告知、設定別BIG/REG/合算、96.9〜107.0%機械割系列、337枚超/99枚超払い出し、BB後50G/RB後30G演出区間、規定G内再BIG時BGM、「BGMで設定変更判別」項目の存在
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nishijin_slot/04/a.php
    title: スロットレッドライオン 基本システム / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/完全告知/同時成立、BIG337枚超（純増約325枚）・REG99枚超（純増約104枚）
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nishijin_slot/04/c.php
    title: スロットレッドライオン 小役確率・1000円ゲーム数 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたりゲーム数35.15〜35.51G
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nishijin_slot/04/h.php
    title: スロットレッドライオン ボーナス抽選確率・PAYOUT / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算、シミュレートPAYOUT 97.34〜106.31%
  - url: https://5goki.com/nishijin
    title: 西陣 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年7月導入、96.9〜107.0%機械割系列の照合
  - url: https://pachinko.hatenablog.jp/entry/2008/07/red-lion
    title: 西陣「スロット レッドライオン」の筺体＆スペック＆情報
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年7月、設定別BIG/REG/合算・96.9〜107.0%系列の照合

researchNotes:
  - LATEST_HANDOFF 277件地点の最優先未登録候補としてGitHub内検索を行い、既存レコードなしを確認して追加。
  - 導入時期は一次業界資料で「7月中旬〜下旬導入予定」、複数DBで2008年7月まで一致。具体日を裏付ける強い資料は今回確定できなかったためreleaseDateは月精度とした。
  - 性能コアは当時パチマガ旧攻略で設定別1000円ベースまで取得し、ボーナス確率はK-Navi/P-WORLD/後年DBでも一致したためCOMPLETE_CORE。
  - 機械割は市場掲載系列とパチマガのシミュレート値が競合するため平均せずCONFLICT。
  - resetBehaviorは設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/BGMを検索語・資料系統を変えて再探索。K-Naviの変更判別項目の存在までは確認できたが具体条件本文を回収できず、推測で条件を埋めていない。
