# サタデーナイトフィーバー

machineName: サタデーナイトフィーバー
formalModelName: サタデーナイトフィーバーF
inspectionNumber: 9S0150
manufacturer: ビスティ
releaseDate: 2009-06-15
releaseDatePrecision: ANALYSIS_CALENDAR_EXACT_CROSSCHECKED_WITH_OFFICIAL_MONTH
releaseDateNote: K-Navi全国導入カレンダーとハズセが2009-06-15導入開始を掲載。SANKYOオンライン博物館は2009.06導入とし、型式名サタデーナイトフィーバーFを公式保存しているため月も整合。本DBでは全国一斉導入開始日の2009-06-15を主値とする。
generation: 5号機
systemType: A+ART / ボーナス+CZ+ナビストックART
settings: 1 / 4 / 6 / H

payoutRateBySetting:
  setting1: 95.7%
  setting4: 99.0%
  setting6: 104.7%
  settingH: 109.5%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガ旧解析はメーカー発表値として掲載。P-WORLD、ハズセ、5号機クロニクルでも同系列が一致。

initialHitBySetting:
  blackBig:
    setting1: 1/8192.00
    setting4: 1/8192.00
    setting6: 1/8192.00
    settingH: 1/8192.00
  redBig:
    setting1: 1/481.88
    setting4: 1/451.97
    setting6: 1/428.34
    settingH: 1/378.82
  bigCombined:
    setting1: 1/455.11
    setting4: 1/428.34
    setting6: 1/407.06
    settingH: 1/362.08
  cb:
    setting1: 1/461.52
    setting4: 1/434.01
    setting6: 1/412.18
    settingH: 1/372.36
  bonusCombined:
    setting1: 1/229.15
    setting4: 1/215.58
    setting6: 1/204.80
    settingH: 1/183.57
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガ旧解析の精密値。P-WORLD/ハズセの丸め値と整合する。設定表記は1・4・6・Hの4段階。

baseGamesPer50:
  setting1: 39.59G
  setting4: 40.14G
  setting6: 40.70G
  settingH: 41.30G
  status: ANALYSIS_SINGLE_OLD_MAJOR
  note: パチマガスロマガ旧解析の「1000円あたりのゲーム数」直接値。別系統で同一の設定別ベース表を直接照合できなかったためANALYSIS_SINGLEに留める。

netIncrease:
  tonyTime: 約+1.0枚/G
  superTonyTime: 約+1.0枚/G
  status: OFFICIAL_CROSSCHECKED
  note: SANKYOオンライン博物館が1Gあたり1枚増加見込みと説明。P-WORLDも約1枚/Gで一致。

basicPayout:
  superBig: 約236枚
  big: 約236枚
  cb: 約40枚
  regulatedPayout:
    big: 345枚を超える払い出しで終了
    cb: 36枚を超える払い出しで終了
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、パチマガスロマガ、公式博物館のゲーム性説明で整合。

modeSpecificMinimumData:
  - ボーナス終了後は100%チャンスゾーンへ移行し、3択突破でトニーチャンス、さらに2択突破でARTへ入る構造。
  - ART「トニータイム」は1セット30G、約+1.0枚/G。ナビストックがある限りCZ/TCとARTをループする。
  - 上位ART「スーパートニータイム」は33〜777G継続、約+1.0枚/G。公式博物館でも同範囲を確認。
  - P-WORLDは本機を「天井」搭載機として分類するが、現存公開本文から通常ゲーム数天井の具体G数・発動条件を直接確定できなかったため、天井なしとは扱わない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/メーカー名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「天井短縮」「モード」「状態」「ナビストック」「ガックン」を組み替え、公式博物館、P-WORLD、ハズセ、パチマガスロマガ旧解析、旧5号機DB/回顧資料を横断した。パチマガスロマガ機種トップに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが、現存検索結果から具体本文を回収できず、天井カウンタ・CZ/TC/ART・ナビストックの変更時処理を推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。通常ゲーム数天井の存在分類は確認できるが、据え置き時の天井進捗、ナビストック、CZ/TC/ART状態の引継ぎを直接示す本機固有資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時に天井進捗、ナビストック、CZ/TC/ART状態を維持するかを示す本機固有の直接資料を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。P-WORLDで天井搭載分類までは確認したが、設定変更時の天井ゲーム数カウンタ処理を直接確定できず。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。リセット専用の短縮天井/変更値を示す公開数値は十分な再探索後も確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モードや設定変更時モード再抽選の直接資料を確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/トニーチャンス/ART/ナビストック等の設定変更時・電断時処理を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。短縮天井、朝一高確、朝一ART優遇などの本機固有公開恩恵は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/CZ表示等による設定変更・据え置き判別の本機固有情報を直接確定できず。
  numericResetData:
    normalCeiling: EXISTS_CLASSIFICATION_CONFIRMED_BUT_EXACT_GAME_COUNT_UNVERIFIED_AFTER_RESEARCH
    resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
    gameCountAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE_AND_CEILING_EXACT_VALUE_UNVERIFIED
resetBehaviorQA: COMPLETE_RESEARCH_PASS_WITH_PRIMARY_RESET_FIELDS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - noneConfirmed: 性能コアの主要値は今回確認した複数資料で同系列。競合値は確認されず。

missingFields:
  - 通常ゲーム数天井の具体G数・発動条件（P-WORLDの天井搭載分類のみ確認）
  - 設定変更時の天井カウンタ、CZ/TC/ART、ナビストック処理
  - 据え置き/単純電源OFF→ON時の天井進捗・内部状態引継ぎ
  - リセット短縮天井、朝一専用モード/状態振り分け、公開朝一数値
  - ガックン/初期出目/液晶等による本機固有の変更判別

sources:
  - url: https://www.sankyo-fever.jp/collection/870/
    title: 「サタデーナイトフィーバー」の機種詳細 / SANKYOオンライン博物館
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: メーカー/ブランド、2009.06導入、型式名サタデーナイトフィーバーF、2種BIG+REG、CZ→ART構造、トニータイム30G、スーパートニータイム33〜777G、約+1枚/G、ナビストック仕様。
  - url: https://p-kn.com/calendar/200906/
    title: パチンコ・パチスロ新台導入カレンダー 2009年6月 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_CALENDAR
    usedFor: 2009-06-15全国一斉導入開始、2009-06-09〜14の境界監査、次候補時系列。
  - url: https://hazuse.com/machine/pachislot/9S0150/
    title: サタデーナイトフィーバー / ハズセ
    retrievedAt: 2026-09-02
    confidence: OLD_DATABASE
    usedFor: 2009-06-15導入、型式名、検定番号9S0150、4段階設定表記、合算/機械割照合、規定払い出し。
  - url: https://www.p-world.co.jp/machine/database/5576
    title: サタデーナイトフィーバー / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 5号機ART/CZ/天井搭載分類、約+1枚/G、約236枚BIG/約40枚CB、ボーナス確率・合算・機械割照合、TC→ART構造。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/15/a.php
    title: サタデーナイトフィーバー 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: CZ/ART基本構造、トニータイム30G、最大777Gスーパートニータイム、BIG約236枚/CB40枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/15/c.php
    title: サタデーナイトフィーバー 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 設定1/4/6/Hの50枚ベース39.59/40.14/40.70/41.30G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/15/h.php
    title: サタデーナイトフィーバー ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 黒BIG/赤BIG/BIG合成/CB/合算の設定別精密値、メーカー発表PAYOUT 95.7〜109.5%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/15/bisty_slot_15.php
    title: サタデーナイトフィーバー 機種解析トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」専用解析項目が存在したことの確認。具体本文は現存検索結果から回収できず、内容を推測しない。
  - url: https://5goki.com/bisty
    title: ビスティ5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009年ビスティ機、設定1/4/6/Hの機械割95.7/99.0/104.7/109.5%照合。

researchNotes:
  - 欠損判定前に「サタデーナイトフィーバー」「サタデー ナイト フィーバー」「サタデーナイトフィーバーF」「ビスティ」「Bisty」「9S0150」と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/天井短縮/モード/状態/ナビストック/ガックン/宵越しを組み替えて検索した。
  - 公式・旧解析・P-WORLD・旧DB・回顧資料を横断したが、resetBehavior具体本文と天井G数は今回の現存公開検索から確定できなかったため、一般的な5号機挙動を補間していない。
