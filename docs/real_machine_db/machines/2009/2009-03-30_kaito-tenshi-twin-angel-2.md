# 快盗天使ツインエンジェル2

machineName: 快盗天使ツインエンジェル2
formalModelName: UNVERIFIED_AFTER_RESEARCH
manufacturer: サミー（Sammy）
releaseDate: 2009-03-30
releaseDatePrecision: SCHEDULED_AND_DATABASE_INTRODUCTION_DATE
releaseDateNote: ALL7の2009年3月導入予定一覧とパチビーが2009-03-30を示す。後年紹介には「2009年4月にホール登場」とする資料もあるため、具体日のある導入予定/機種DBを主値とし月表記差は注記。
generation: 5号機
systemType: ボーナス+RT / CZ / RTナビストック / 天井RT / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 96.8%
  setting2: 98.8%
  setting3: 100.9%
  setting4: 103.2%
  setting5: 108.0%
  setting6: 111.8%
  status: ANALYSIS_CROSSCHECKED
  note: P-WORLD、5号機クロニクル、攻略資料で同系列を確認。

initialHitBySetting:
  hyperBig:
    setting1: 1/560.1
    setting2: 1/541.6
    setting3: 1/524.1
    setting4: 1/492.8
    setting5: 1/492.8
    setting6: 1/434.0
  normalBig:
    setting1: 1/720.2
    setting2: 1/662.0
    setting3: 1/612.5
    setting4: 1/532.8
    setting5: 1/532.8
    setting6: 1/452.0
  middleBonus:
    setting1: 1/541.6
    setting2: 1/516.0
    setting3: 1/492.8
    setting4: 1/452.0
    setting5: 1/452.0
    setting6: 1/383.3
  bonusCombined:
    setting1: 1/199.2
    setting2: 1/188.9
    setting3: 1/179.6
    setting4: 1/163.4
    setting5: 1/163.4
    setting6: 1/140.3
  status: ANALYSIS_CROSSCHECKED_WITH_DATABASE_ROUNDING
  note: K-Navi/P-WORLDの合算は丸めて1/199→1/140。詳細解析の各ボーナス/合算系列を主値とする。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名・型式候補・Sammy・コイン持ち・50枚・1000円・ベース・回転数を組み替え、P-WORLD/K-Navi/パチマガ系/旧攻略サイト/回顧DBを横断したが、本機固有の比較可能な50枚回転数を直接確定できず。

netIncrease:
  angelTime:
    primaryDatabase: 約+0.3〜0.5枚/G
    alternateGuide: 約+0.6枚/G
    pachibeeSummary: 約+0.5枚/G
  status: CONFLICT
  note: P-WORLDは1Gあたり約+0.3〜0.5枚、パチスロ救急車は+0.6枚/G、パチビーは約+0.5枚/G。平均せず別系列保持。

basicPayout:
  hyperBig: 約255枚
  normalBig: 約200枚
  middleBonus: 約80枚
  status: DATABASE_AND_ANALYSIS_CROSSCHECKED
  note: 規定払い出しはH-BIG347枚超、N-BIG275枚超、MID84枚超。純増目安はP-WORLD/K-Navi/パチマガ系で一致。

modeSpecificMinimumData:
  - RT「エンジェルタイム」は1セット33Gの完走型RT。赤7系BIG成立時は例外的にRT終了。
  - ボーナス後はエンジェルチャンスを経由し、弱チャンス目後にCZ「エンジェルチャレンジ」へ移行。
  - CZでは3択特殊リプレイ正解でRTへ。K-Naviは自力RT連チャン率33%と記載。
  - RT終了後もCZへ移行し、保持ナビポイントがあれば押し順ナビでRT再突入を狙う。
  - 通常時/CZ・RTを除いたカウントで999G到達後は天井RTループへ移行し、ボーナス成立までCZ→RTをループする解析を確認。

resetBehavior:
  settingChangeBehavior: CONFIRMED。設定変更時は天井までのゲーム数をリセットし、RTナビストックも消滅。内部的にエンジェルチャレンジ（CZ）からスタートする。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の天井カウンタ・ナビストック・CZ/RT残状態について、本機固有の直接記述を十分な資料系統で確定できず。一般的な5号機挙動から推測しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定を変更しない単純電源OFF→ON時の天井カウンタ・ナビストック・CZ/RT状態の扱いを直接確定できず。
  gameCounterReset: RESET_ON_SETTING_CHANGE_CONFIRMED。設定変更で天井ゲーム数はリセット。
  ceilingAfterReset: NORMAL_999G_STRUCTURE / NO_RESET_SHORTENING_CONFIRMED_AFTER_RESEARCH。設定変更でカウンタは初期化されるが、リセット専用の短縮天井数値は確認できない。
  modeAfterReset: STARTS_IN_ANGEL_CHALLENGE_CZ_CONFIRMED。設定変更後は内部的にCZから開始。
  stateAfterReset: NAV_STOCK_CLEARED_CONFIRMED / OTHER_INTERNAL_STATE_UNVERIFIED。RTナビストック消滅は確認。高確/低確等のその他内部状態の変更時初期値は直接未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 朝一設定変更後はCZスタートのため、早い段階で特殊リプレイが成立すれば自力RT突入の可能性がある。K-Naviの通常CZ自力RT連チャン率は33%だが、これは「朝一専用当選率」ではないため分離して保持。
  resetPenalties: RTナビストック消滅。前日保持ストックがある場合は設定変更で失われる。
  resetDetection: 朝一でいきなりRT突入リプレイ（リプレイ・リプレイ・羽根）または転落リプレイ（ベル・ベル・リプレイ）が出現した場合、設定変更の可能性が高いとする当時/旧解析あり。ガックン・初期出目・ランプによる本機固有判別はUNVERIFIED_AFTER_RESEARCH。
  numericResetData:
    normalCeiling: 999G（CZ/RT等のカウント定義に注意）
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: CZ_START_CONFIRMED_NO_DISTRIBUTION_TABLE
    morningHitRate: NONE_PUBLISHED_AS_MORNING_SPECIFIC_RATE
    resetBenefitRate: CZ_GENERIC_SELF_RT_RATE_33_PERCENT_REFERENCE_ONLY_NOT_MORNING_SPECIFIC

coreStatus: PARTIAL_CORE_WITH_NET_INCREASE_CONFLICT
resetBehaviorQA: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_FINDINGS

conflicts:
  - netIncrease: P-WORLD 約+0.3〜0.5枚/G vs パチスロ救急車 約+0.6枚/G vs パチビー 約+0.5枚/G。平均せず保持。
  - releaseMonthExpression: ALL7/パチビー 2009-03-30に対し、2009年末のマイナビニュースは「2009年4月にホールに登場」。具体日資料を主値とし、月表記差を保持。

missingFields:
  - 正式型式名
  - 50枚あたりゲーム数/ベース
  - 据え置き時の天井カウンタ・ナビストック・CZ/RT状態引継ぎ
  - 単純電源OFF→ON時の天井カウンタ・ナビストック・CZ/RT状態処理
  - 設定変更時の高確/低確等、CZスタート以外の内部状態初期値
  - ガックン/初期出目/ランプ等による変更判別
  - 朝一専用の当選率・モード振分・恩恵発生率

sources:
  - url: https://www.all7.jp/plans/index/2009/03
    title: 2009年3月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-03-30導入予定、3/17〜3/29の具体日付きパチスロ未処理監査。
  - url: https://www.pachibee.jp/machines/reach/209080009
    title: 快盗天使ツインエンジェル2 / パチビー
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 2009-03-30導入日、5号機RT/CZ/天井、約+0.5枚/G。
  - url: https://news.p-world.co.jp/articles/3321/greenbelt
    title: 萌え系パチスロ『ツインエンジェル』が再び登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: サミー、2009-02-19内覧会、機種同定。
  - url: https://www.p-world.co.jp/machine/database/5479
    title: 快盗天使ツインエンジェル2 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 機械割、合算、基本獲得、33G RT、約+0.3〜0.5枚/G、999G天井、設定変更後CZスタート。
  - url: https://p-kn.com/slot/927/
    title: パチスロ「快盗天使ツインエンジェル2」 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: BIG/MID/合算、ボーナス払い出し、CZ/RT構造。
  - url: https://p-kn.com/slot/927/9290/
    title: エンジェルチャレンジ(CZ) / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: CZの突入/終了条件、RT終了後CZ、自力RT連チャン率33%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/117/a.php
    title: 快盗天使ツインエンジェル2 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: RT/CZ/天井CZ、H-BIG約255枚、N-BIG約200枚、MB約80枚。
  - url: https://twinangel.husuma.com/
    title: ツインエンジェル2 攻略
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE_CROSSCHECKED
    usedFor: H-BIG/N-BIG/MID/合算の設定別詳細確率、機械割系列。
  - url: https://slot-navi.com/10/twin-angel2/
    title: パチスロ 快盗天使 ツインエンジェル2 解析・攻略 / slot-navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: 999G天井ループ、設定変更で天井Gリセット・ナビストック消滅・CZスタート、朝一特殊リプレイによる変更推測。
  - url: https://www.eightbeat.com/slot99/kishu/ka_gyou/ka/twinE2/page_menu.html
    title: 快盗天使ツインエンジェル2 解析攻略情報 / パチスロ救急車
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_SINGLE
    usedFor: 2009.03、RTあり、天井あり、RT純増+0.6枚/Gの競合値。
  - url: https://news.mynavi.jp/article/20091218-a083/
    title: カプコン、サミーの萌えスロ『快盗天使ツインエンジェル2』のトレカを発売 / マイナビニュース
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_MEDIA
    usedFor: 2009年4月ホール登場という月表記差。

researchNotes:
  - LATEST_HANDOFF 352件地点から再開。2009-03-01〜03-16残候補を再監査し、ニューパルサー3はALL7で2009-06-01、スターマンアイズはグリーンべるとで3月下旬納品予定、ジュードーズは具体日を確定できず、3/16以前へ推測挿入しなかった。
  - ALL7の2009年3月具体日一覧では3/16後のパチスロ次候補が3/30快盗天使ツインエンジェル2。3/17〜3/29に具体日付き未処理パチスロを確定できなかったため、本機へ接続。
  - 50枚ベースは「50枚/1000円/コイン持ち/ベース/回転数」を変えて再探索したが直接数値を確定できずUNVERIFIED。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ナビストック/CZ/ガックン」を組み替え、P-WORLD/K-Navi/slot-navi等を横断。設定変更時の天井リセット・ナビ消滅・CZ開始は直接情報として採用し、据え置き/単純電断は推測補完しない。
