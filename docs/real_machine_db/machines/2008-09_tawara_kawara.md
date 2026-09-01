# タワラカワラ

machineName: タワラカワラ
manufacturer: ウィンネットテクノロジー / ラスター
releaseDate: 2008-09
releaseDatePrecision: MONTH_CONFIRMED_MULTI_SOURCE_EXACT_DAY_UNVERIFIED
modelName: タワラカワラ
modelNameStatus: RETROSPECTIVE_REGULATORY_LIST_MATCH
modelNameNote: 後年の検定通過整理では2007-12-25付「タワラカワラ（回胴）」を確認。検定日を導入日にせず、導入時期は複数機種DBが一致する2008年9月を採用。
generation: 5号機
systemType: ボーナス+CZ+100G固定RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.2%
  setting2: 98.8%
  setting3: 100.8%
  setting4: 103.2%
  setting5: 105.5%
  setting6: 108.3%
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH
  note: 5号機クロニクル、pachinko's blog、pacnkで一致。

initialHitBySetting:
  bonusCombined:
    setting1: 1/226.0
    setting2: 1/222.2
    setting3: 1/214.9
    setting4: 1/204.8
    setting5: 1/197.4
    setting6: 1/194.5
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH
  note: 6種類のボーナス合算。5号機クロニクル、pachinko's blog、pacnkで一致。個別6ボーナス確率は5号機クロニクルに掲載されるが、物差しの主要初当たりとして合算を主記録。

baseGamesPer50:
  setting1: 41.49G
  setting2: 41.97G
  setting3: 42.46G
  setting4: 42.96G
  setting5: 43.47G
  setting6: 44.00G
  status: ANALYSIS_HIGH_SINGLE_PRIMARY
  note: パチマガスロマガ掲載の1000円あたりゲーム数。別系統で精密値の独立照合は今回得られなかったため単一高信頼解析値として保持。

netIncrease:
  RT: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: RTが100G固定であることは確認できたが、比較可能な1Gあたり純増値は「純増/増加枚数/1Gあたり/RT中」を組み替え、パチマガ系・回顧DB・旧資料を再探索しても直接確定できず。独自算出しない。

basicPayout:
  sameColorBIG: 約312枚
  mixedColorBIG: 約180枚
  REG: 約36枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガ。規定払い出しは同色BIG459枚、異色BIG261枚、REG45枚超で終了。

modeSpecificMinimumData:
  structure: 6種類のボーナス終了後にCZへ移行し、特殊リプレイ入賞で100G固定RTへ移行するボーナス+CZ+RT構成。
  RTLength: 100G固定
  postBonusCZ: 赤獅子後はCZ999GでRT突入率100%。その他はCZ30〜80Gで、RT突入期待度は設定・ボーナス種別で変化。
  normalGameCeiling: NONE_CONFIRMED。通常時ゲーム数ハマリによる天井機能は非搭載と後年解析DBに明記。
  RTNetIncrease: UNVERIFIED_AFTER_RESEARCH
  status: ANALYSIS_HIGH_FOR_STRUCTURE

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガの機種メニューに「攻め時・ヤメ時・設定変更時」項目が存在することまでは確認できたが、検索インデックスから本機固有の設定変更本文を取得できず、設定変更時のCZ/RT状態・ボーナス後CZ残G・初期状態を確定できなかった。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のCZ残G/RT状態の引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時のCZ/RT状態・残G処理を直接確定できず。
  gameCounterReset: NOT_APPLICABLE_FOR_NORMAL_CEILING / CZ_STATE_UNVERIFIED。通常時ゲーム数天井は非搭載。ボーナス後CZの30〜80G/赤獅子後999Gについて、設定変更・据え置き・電断時の残G処理は未確定。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常時天井自体が非搭載で、リセット専用短縮天井や朝一専用ゲーム数は確認なし。赤獅子後CZ999Gは通常のボーナス後仕様でありリセット天井として扱わない。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用モードや設定変更時モード振り分けの公開情報は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/RT状態の設定変更・据え置き・電源OFF→ON時処理を本機固有資料で確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更/朝一専用のRT優遇、CZ短縮、当選率優遇は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「タワラカワラ / TAWARA KAWARA / ウィンネット / ラスター」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 変更判別 / CZ / RT」を組み替え、当時解析・回顧DB・旧業界資料を横断したが、本機固有の客側変更判別条件を確定できず。
  numericResetData:
    normalCeilingGameCount: NONE
    postRedBonusCZLength: 999G
    otherPostBonusCZLength: 30〜80G
    RTLength: 100G
    resetCeilingGameCount: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_RT_NET_INCREASE_UNVERIFIED
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts: []

missingFields:
  - RT1Gあたり純増の直接値
  - 2008年9月内の具体発売/納品/ホール導入日
  - 設定変更時のCZ/RT状態・残G処理
  - 据え置き/電源OFF→ON時のCZ/RT状態・残G引継ぎ
  - ガックン/初期出目等の設定変更判別
  - 朝一専用恩恵/不利および公開朝一専用数値

sources:
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/07/a.php
    title: タワラカワラ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ボーナス+CZ+RTの基本構造、同色BIG約312枚、異色BIG約180枚、REG約36枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/07/c.php
    title: タワラカワラ 小役確率・1000円あたりのゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定1〜6の1000円あたり41.49〜44.00G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/07/winnet_slot_07.php
    title: タワラカワラ 機種トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 機種解析メニューにRT・設定変更時項目が存在することを確認。設定変更本文は検索インデックスでは取得不能だったため挙動は推測しない。
  - url: https://5goki.com/winnet
    title: ウィンネットテクノロジー 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年9月導入、設定別6ボーナス確率・合算、機械割。
  - url: https://pachinko.hatenablog.jp/entry/2008/09/tawara-kawara
    title: ウィンネットテクノロジー（ラスター）「タワラカワラ」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年9月リリース、ボーナス+RT、設定別合算・機械割の再照合。
  - url: https://pacnk.com/slot/tools/sh_tawarakawara.html
    title: タワラカワラ 設定判別ツール
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年9月導入、設定別合算・機械割、通常天井非搭載、ボーナス後CZと100G固定RT、赤獅子後CZ999G/その他30〜80Gの再照合。
  - url: https://q-and-a.hatenablog.com/entry/2016/10/05/134740
    title: ラスターの検定通過機種を教えて
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_REGULATORY_LIST
    usedFor: 2007-12-25検定通過「タワラカワラ」の型式名同定補助。検定日は導入日には使用しない。
  - url: https://plaza.rakuten.co.jp/mosnet/diaryall/
    title: パチンコ攻略法・パチスロ攻略法ならマイクロオーダーサービス 新着記事一覧
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_RETROSPECTIVE_ARCHIVE
    usedFor: 2008-10-04時点のタワラカワラ攻略紹介、6種類のボーナスとRT突入期待度差、準完全告知という当時周辺資料の確認。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前295「怒濤の剣」を再読し、LATEST_HANDOFF基準295件地点から開始。
  - 2008-09-22〜30境界を再監査。「チキチキボカン」は9月一覧収録・全日遊連共同開発・9月18日時点で申込継続を確認したが、具体発売/納品日を今回も確定できず。「ザ・ブルーハーツG」は通常版との独立販売根拠未解消。
  - 「タワラカワラ」は複数系統で2008年9月導入が一致し、未登録であるため月精度で漏れ防止追加。具体日を推測しない。
  - 性能コアはパチマガスロマガ、5号機クロニクル、pachinko's blog、pacnkを横断。合算・機械割は複数一致、50枚ベースはパチマガ高信頼単一値、基本獲得枚数はパチマガで取得。
  - resetBehaviorは設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/CZ/RTを組み替えて再探索。通常天井非搭載は確認したが、CZ/RTの変更・据え置き・電断処理は本機固有の直接資料を取得できず一般論で補間しない。
