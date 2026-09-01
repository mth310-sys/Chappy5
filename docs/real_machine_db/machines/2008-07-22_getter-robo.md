# ゲッターロボ

machineName: ゲッターロボ
manufacturer: エレコ
releaseDate: 2008-07-22
releaseDatePrecision: DAY_SCHEDULE_CONFIRMED_BY_CONTEMPORARY_INDUSTRY_NEWS
modelName: ゲッターロボ2
generation: 5号機
systemType: ボーナス + ループ型RT / チャンスゾーン / 同時成立あり
payoutRateBySetting:
  pachimagaSimulated:
    setting1: 98.90%
    setting4: 103.49%
    setting6: 108.68%
    settingH: 116.12%
    confidence: ANALYSIS_HIGH
  manufacturerPublishedTop:
    settingH: 115.3%
    confidence: OFFICIAL_HIGH
  status: CONFLICT_BY_DEFINITION_OR_SIMULATION_CONDITION
  note: 旧パチマガのシミュレートPAYOUTとメーカー公称の最高設定出玉率は一致しない。平均せず別系列として保持。後年回顧DBの98.3/102.7/107.8/114.9%系列は公式RT説明と整合しないART記述も併存するため性能正本には採らない。
initialHitBySetting:
  big:
    setting1: 1/358.12
    setting4: 1/321.25
    setting6: 1/287.44
    settingH: 1/248.24
  reg:
    setting1: 1/537.18
    setting4: 1/481.88
    setting6: 1/431.16
    settingH: 1/372.36
  combined:
    setting1: 1/214.87
    setting4: 1/192.75
    setting6: 1/172.46
    settingH: 1/148.95
  confidence: ANALYSIS_HIGH_AND_CONTEMPORARY_INDUSTRY_TOP_VALUE_CROSSCHECK
baseGamesPer50:
  setting1: 36.52G
  setting4: 36.95G
  setting6: 37.38G
  settingH: 37.83G
  confidence: ANALYSIS_HIGH
netIncrease:
  getterChanceRT: UNVERIFIED_AFTER_RESEARCH
  note: ループ型RT「ゲッターチャンス」の存在は公式・当時業界・旧攻略で確定したが、実機物差し用に採用できる1G純増の直接数値は今回の現存資料から確定できず。後年回顧DBのART約1.0枚/Gは公式のRT説明と矛盾するため不採用。
basicPayout:
  big:
    regulation: 344枚を超える払い出しで終了
    netApproximationPublished: 約311枚（技術介入でMAX311枚）
  getterBonus:
    regulation: 105枚を超える払い出しで終了
    netApproximationPublished: 104枚
  confidence: ANALYSIS_HIGH_AND_OFFICIAL_300_PLUS_CROSSCHECK
modeSpecificMinimumData:
  getterChance:
    type: RT
    behavior: 不定期に訪れるチャンスゾーンとRT「ゲッターチャンス」がループし、ボーナスが絡む「ツインループシステム」。ボーナス終了時にもチャンスゾーンへ接続する公式説明あり。
    duration: UNVERIFIED_FROM_CURRENT_PUBLIC_TEXT
    netIncreasePerGame: UNVERIFIED_AFTER_RESEARCH
  normal111GWindow:
    status: CONFIRMED_SPECIAL_REPLAY_PROBABILITY_WINDOW
    data: 通常時111G中はスベリリプレイ確率が設定1 1/21.85、設定4 1/19.28、設定6 1/17.25、設定H 1/15.60。
    note: 111Gをゲーム数天井や確定CZと断定しない。旧攻略で「通常時111G中」の特殊リプレイ確率変化だけを確定値として保持。
  normalCeiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 当時攻略・公式・業界記事・旧DBを横断したが、通常ゲーム数到達でボーナスを保証する天井は確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。旧パチマガの本機メニューに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認できたが、現存検索結果から2008年エレコ機の具体本文を回収できず、設定変更時のRT/CZ/111G状態を推測補完しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時にゲッターチャンスRT・チャンスゾーン・111G特殊リプレイ区間がどう継続するか、本機固有の直接本文未回収。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみでRT/CZ/111G状態を保持するか直接資料なし。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時111Gの特殊リプレイ高確率区間は確認できるが、設定変更/据え置き/電断時に何を起点として111Gを計数するか現存本文から確定できず。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ボーナス天井およびリセット短縮天井は確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の専用モード/チャンスゾーン初期状態は公開本文を確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT/CZ/111G特殊リプレイ状態の設定変更時初期化/再セット条件は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。2008年エレコ機固有のガックン/初期出目/ランプ等による変更判別を確定できず。2018/2019年京楽「ぱちスロ ゲッターロボ」の朝一パネルフラッシュ等は別機のため一切流用しない。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_WITH_RESET_DETAIL_UNVERIFIED_AFTER_RESEARCH

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: パチマガスロマガ旧攻略シミュレート = 98.90 / 103.49 / 108.68 / 116.12%
    sourceB: ユニバーサル公式・K-Navi当時発表 = 最高設定115.3%（グリーンべるとは115%以上）
    handling: シミュレート条件と公称値の定義差が考えられるため平均せず双方保持。
  - field: retrospectiveSystemDescription
    status: CONFLICT_SOURCE_CONTAMINATION_OR_RETROSPECTIVE_ERROR_SUSPECTED
    sourceA: ユニバーサル公式・2008年グリーンべると・旧パチマガ = ボーナス+RT / ゲッターチャンス / ツインループ
    sourceB: 5号機クロニクル現行ページ = A+ART、50G ART「ゲットマシンラッシュ」、BIG約208枚/REG約80枚
    handling: 同時代一次/公式系列を優先。後年回顧ページは別機種情報混入または誤記の疑いとして性能値に採用しない。

missingFields:
  - RT「ゲッターチャンス」の公開純増/Gと現存本文で確定できる継続条件の詳細
  - 設定変更/据え置き/電源OFF→ON時のRT・CZ・111G特殊リプレイ状態の処理
  - 2008年機固有の設定変更判別（ガックン/初期出目/ランプ等）
  - 旧パチマガ「攻め時・ヤメ時・設定変更時」本文の復元

sources:
  - url: https://www.universal-777.com/product/slot/getter_robo/
    title: ゲッターロボ / ユニバーサルエンターテインメント
    retrievedAt: 2026-09-01
    confidence: OFFICIAL_HIGH
    usedFor: エレコ、5号機、2008年7月発売、ボーナス+RT、ツインループ、最高設定1/149、出玉率115.3%、300枚OVER
  - url: https://web-greenbelt.jp/00003740/
    title: ツインループシステム搭載し『ゲッターロボ』発進 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: 2008-07-04発表、エレコ、チャンスゾーン+ゲッターチャンスRT、最高設定合算1/149、115%以上
  - url: https://p-kn.com/topics/news/585/
    title: 業界初のツインループシステム搭載!パチスロ新機種「ゲッターロボ」登場! / K-Navi
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: 2008-07-22ホール導入予定、最高設定1/149、115.3%、RT/CZループ
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/74/a.php
    title: ゲッターロボ 基本システム / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ループ型RT/CZ/同時成立、BIG344枚超・純増約311枚、GB105枚超・104枚
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/74/h.php
    title: ゲッターロボ ボーナス抽選確率・PAYOUT / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/4/6/HのBIG/REG/合算、シミュレートPAYOUT
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/74/c.php
    title: ゲッターロボ 小役確率・1000円ゲーム数 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別36.52〜37.83G/50枚、通常時111G中スベリリプレイ確率
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/74/eleco_slot_74.php
    title: ゲッターロボ 機種攻略INDEX / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 2008年エレコ機専用「攻め時・ヤメ時・設定変更時」項目の存在確認
  - url: https://5goki.com/universal
    title: ユニバーサル系5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_CONFLICTING
    usedFor: 2008年7月という月確認のみ。ART/獲得枚数記述は公式・同時代資料と競合するため不採用。

researchNotes:
  - LATEST_HANDOFF 278件地点でGitHub未登録を再確認して279件目として追加。
  - 2018年〜2019年の京楽「ぱちスロ ゲッターロボ」が検索で強く混入するため、メーカー=エレコ、設定=1/4/6/H、旧攻略パス=eleco_slot/74で切り分けた。
  - 導入日はK-Navi 2008-07-16当時記事の「ホールへの導入は7月22日を予定」を採用。公式は2008年7月まで確認。
  - 性能コアは設定別ボーナス・ベース・ボーナス枚数まで高信頼で回収。一方RT純増/Gを公式/同時代解析本文から確定できず、COMPLETE_COREへ無理に上げずPARTIALとした。
  - resetBehaviorは設定変更/朝一/据え置き/電源OFF ON/111G/天井/ガックンを検索語・資料系統を変えて再探索。旧攻略に専用設定変更項目の存在は確認したが本文未回収のため、詳細はUNVERIFIED_AFTER_RESEARCHのまま分離管理。
