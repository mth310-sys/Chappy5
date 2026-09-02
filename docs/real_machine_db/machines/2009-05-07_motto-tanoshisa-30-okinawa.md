# もっと楽シーサー30Φ沖縄バージョン

machineName: もっと楽シーサー30Φ沖縄バージョン
formalModelName: もっと楽シーサー30S
inspectionNumber: 8S1160
manufacturer: SANKYO
releaseDate: 2009-05-07
releaseDatePrecision: OLD_CONTEMPORARY_SOURCE_EXACT_DATE
releaseDateNote: SANKYO公式は2009.05、P-WORLDは2009年05月。2009年当時の更新資料「パチスロ業界初まとめ ～更新情報7」が「もっと楽シーサー/-30/-30(沖縄Ver)」3仕様をまとめて2009/5/7発売と明記しているため、沖縄版も2009-05-07を主日付とする。グリーンべるとは25Φ説明直後に「納品は5月6日から」と記載し、その後30Φ2仕様の同時発表を説明するが、30Φ個別への直接適用は文章上明確でないため、5/6へは遡らせない。
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 94.4%
  setting2: 96.5%
  setting3: 98.4%
  setting4: 102.3%
  setting5: 105.7%
  setting6: 109.7%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLDとpacnkで全設定一致。SANKYO公式は機械割を掲載していない。

initialHitBySetting:
  big:
    setting1: 1/309
    setting2: 1/299
    setting3: 1/289
    setting4: 1/274
    setting5: 1/258
    setting6: 1/234
  challengeBonus:
    setting1: 1/496
    setting2: 1/464
    setting3: 1/436
    setting4: 1/404
    setting5: 1/381
    setting6: 1/356
  bonusCombined:
    setting1: 1/190.4
    setting2: 1/181.8
    setting3: 1/173.8
    setting4: 1/163.3
    setting5: 1/153.8
    setting6: 1/141.2
  status: OFFICIAL_ANALYSIS_CROSSCHECKED
  note: BIG/CBはSANKYO公式とP-WORLD/pacnkで一致。合算の小数値はP-WORLD、公式丸め値1/190→1/141と整合。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名、型式30S、沖縄Ver/沖縄バージョン、検定8S1160と「50枚」「1000円あたり」「ベース」「コイン持ち」「小役確率」を組み替え、P-WORLD、パチマガスロマガ、pacnk、回顧DBを再探索したが比較可能な直接値を確定できず。小役から逆算しない。

netIncrease:
  value: NOT_APPLICABLE
  status: CONFIRMED_NO_RT_AT
  note: P-WORLDが沖縄版は天井RTなしと明記。25Φの777G天井RTを流用しない。

basicPayout:
  big: 約312枚
  challengeBonus: 約130枚
  status: INDUSTRY_ANALYSIS_CROSSCHECKED
  note: グリーンべるととP-WORLDで一致。

modeSpecificMinimumData:
  - 30Φ沖縄出荷仕様。全国版と同じ完全告知タイプだが、CB獲得枚数が多く波が荒めとSANKYO公式が説明。
  - ハイビスカスランプ点滅でボーナス確定。シーサー役物作動時はBIG確定と当時業界記事が説明。
  - 25Φに搭載された777G天井RTは沖縄30Φには搭載されない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時のリール初期挙動・ランプ等の沖縄30Φ固有処理を直接確認できず。ゲーム数天井や公開モード管理は確認されない。
  carryOverBehavior: NOT_APPLICABLE_TO_GAME_COUNT_OR_PUBLISHED_MODE。天井・ゲーム数管理・公開通常モードが確認されないノーマル機。朝一価値へ影響する公開継続項目は確認できない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のリール/告知ランプ等の沖縄30Φ固有挙動を直接確認できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING。25Φの777G天井RTは沖縄30Φには非搭載。
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING。
  modeAfterReset: NOT_APPLICABLE_TO_PUBLISHED_MODE_SYSTEM。
  stateAfterReset: NOT_APPLICABLE_TO_PUBLISHED_GAMEPLAY_STATE。朝一狙いに影響する高確/低確等の公開内部状態は確認されない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。短縮天井・朝一高確・RTスタート等は確認されない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: ガックン、初期出目、告知ランプ等による沖縄30Φ固有の設定変更判別を表記揺れ・型式30S・検定8S1160・SANKYO名を組み替えて再探索したが直接資料を確認できず UNVERIFIED_AFTER_RESEARCH。
  numericResetData:
    normalCeiling: NOT_APPLICABLE
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
    resetStateDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_EXCEPT_BASE_UNVERIFIED
resetBehaviorQA: RESEARCHED_NO_CEILING_OR_PUBLIC_MODE_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - releaseDateDefinition: 当時更新資料は3仕様を2009-05-07発売と明記。グリーンべるとは25Φ説明直後にシリーズ納品5月6日記載があるが30Φ個別適用が明確でないため5/7を主値。
  - retrospectiveDatabaseOutlier: 5号機クロニクルには沖縄版についてBIG 1/292.6→1/240.9、REG 1/431.2→1/336.1、合算1/174.3→1/140.4、BIG約300枚/REG約104枚、Aタイプ(RT機能付き)という別系列が掲載されている。SANKYO公式、P-WORLD、pacnk、当時グリーンべるとの沖縄版固有値と大きく競合するため平均せず、主値には採用しない。

missingFields:
  - 50枚あたりゲーム数/1000円あたりゲーム数の直接値
  - 設定変更時のリール初期挙動・ランプ等の固有処理
  - 単純電源OFF→ON時の固有挙動
  - ガックン/初期出目等による設定変更判別
  - 設定変更専用の朝一数値（存在確認できず）

sources:
  - url: https://www.sankyo-fever.jp/collection/536/
    title: 「もっと楽シーサー」の機種詳細 / SANKYOオンライン博物館
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 2009.05導入、30Φ沖縄版が独立スペックであること、型式名もっと楽シーサー30S、設定別BIG/CB/合算、完全告知、沖縄版のCB獲得性能差。
  - url: https://web-greenbelt.jp/00003039/
    title: 全てがパワーアップ！『もっと楽シーサー』 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 30Φ沖縄/全国2仕様の同時発表、沖縄Ver合算1/190〜1/141、BIG約312枚、RB130枚、全タイプ全国発売、シリーズ納品5月6日記載の境界確認。
  - url: https://www.p-world.co.jp/machine/database/5501
    title: もっと楽シーサー30Φ沖縄バージョン / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 型式もっと楽シーサー30S、検定8S1160、2009年5月導入、天井RT非搭載、設定別BIG/CB/合算、機械割、BIG約312枚/CB約130枚。
  - url: https://pacnk.com/slot/tools/sh_mottotanocsaokinawav.html
    title: もっと楽シーサー30Φ沖縄バージョン 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: 設定別BIG/CB/PAYOUTのクロスチェック。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/18/sankyo_slot_18.php
    title: もっと楽シーサー30 沖縄Ver / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 当時解析メニュー、攻め時・ヤメ時「特にナシ」の確認。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ ～更新情報7
    retrievedAt: 2026-09-02
    confidence: OLD_CONTEMPORARY_DATABASE
    usedFor: もっと楽シーサー/-30/-30(沖縄Ver)の3仕様を2009/5/7発売とする具体日確認、25Φのみ天井RT搭載の再確認。
  - url: https://5goki.com/sankyo
    title: SANKYO（三共）＆ジェイビー 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SECONDARY_CONFLICT
    usedFor: 沖縄版について公式・P-WORLD・pacnkと競合する別系列の確率/獲得枚数/RT分類を検出しCONFLICTとして保持。
