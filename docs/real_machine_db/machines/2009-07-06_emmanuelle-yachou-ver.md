# パチスロ エマニエル～夜蝶Ver.～

machineName: パチスロ エマニエル～夜蝶Ver.～
formalModelName: エマニエル
inspectionNumber: 9S0262
manufacturer: マツヤ商会
releaseDate: 2009-07-06
releaseDatePrecision: EXACT_CALENDAR_WITH_MONTH_CONFLICT
releaseDateNote: ALL7とHAZUSEは2009-07-06導入開始。P-WORLDは2009年06月導入、5号機クロニクルも2009/6とするため月単位資料とのCONFLICTを保持。具体日を持つ当時/旧導入カレンダーを本線キュー上の主日付に採用し、6月説を消さない。
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pworld_and_contemporary_secondary:
    setting1: 95.0%
    setting2: 96.7%
    setting3: 98.9%
    setting4: 100.8%
    setting5: 103.9%
    setting6: 106.5%
  hazuse:
    setting1: 98.28%
    setting2: 100.26%
    setting3: 102.47%
    setting4: 104.49%
    setting5: 104.49%
    setting6: 110.42%
  status: CONFLICT
  note: P-WORLD、2009年当時の侍777整理、5号機クロニクルは95.0〜106.5%系列で一致。一方HAZUSEは98.28〜110.42%と大きく異なる。攻略条件/算出条件差を直接確定できないため平均せず両系列を保持。

initialHitBySetting:
  big:
    setting1: 1/315.08
    setting2: 1/302.01
    setting3: 1/288.70
    setting4: 1/278.88
    setting5: 1/268.59
    setting6: 1/262.14
  reg:
    setting1: 1/455.11
    setting2: 1/425.56
    setting3: 1/399.61
    setting4: 1/383.25
    setting5: 1/364.09
    setting6: 1/327.68
  combined:
    setting1: 1/186.18
    setting2: 1/176.65
    setting3: 1/167.61
    setting4: 1/161.42
    setting5: 1/154.57
    setting6: 1/145.64
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: HAZUSEの精密値を主表記。P-WORLDの丸め値BIG 1/315〜1/262、REG 1/455〜1/328、合算1/186.1〜1/145.7と整合し、当時侍777の丸め値とも一致。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: パチマガスロマガ旧解析の小役確率ページで「1000円あたりのゲーム数 現在調査中」を確認。機種名/夜蝶Ver/型式9S0262/マツヤ商会と50枚・1000円・ベース・コイン持ちを組み替えて旧解析/古いDB/回顧資料を再探索したが比較可能な直接値を確定できず。

netIncrease:
  value: NOT_APPLICABLE
  status: NOT_APPLICABLE
  note: ボーナスのみで出玉を増やすノーマル機。RT/ART/ATの付加増加区間は確認されない。

basicPayout:
  big: 約312枚（345枚を超える払い出しで終了）
  reg: 約104枚（105枚を超える払い出しで終了）
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、パチマガスロマガ旧解析、当時侍777で一致。

modeSpecificMinimumData:
  - ハイビスカス点灯でボーナス確定の完全告知ノーマル機。
  - 2種類のBIGはどちらでも揃えられ、リール右のバタフライ点灯を伴えばBIG確定。
  - 通常ゲーム数天井は当時資料で「ナシ」と明記され、RT/ART/AT・CZ・ゲーム数管理モードも確認されない。
  - ボーナス終了後7セグのEND文字色は設定期待度の示唆要素だが、設定変更/据え置き判別そのものとは分離する。

resetBehavior:
  settingChangeBehavior: NO_RESET_SPECIFIC_GAMEPLAY_BEHAVIOR_CONFIRMED_AFTER_RESEARCH。ノーマル/非ゲーム数管理機で天井・CZ・RT/ART/AT・通常モード管理は確認されない。設定変更時の固有ランプ/出目処理等は直接資料を確認できず推測しない。
  carryOverBehavior: NOT_APPLICABLE_FOR_GAME_COUNT_MODE_CEILING。通常ゲーム数天井/モード/CZ/ART等の引継ぎ対象を確認しない。ボーナス成立中など遊技機一般論からの補間は行わない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の初期出目、告知ランプ、7セグ表示等の本機固有挙動を直接確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING
  modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED
  stateAfterReset: NOT_APPLICABLE_NO_CZ_ART_RT_STATE_CONFIRMED
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ/7セグ表示、朝一挙動による本機固有の設定変更/据え置き判別根拠を確認できず。ボーナス後END色は設定示唆でありリセット判別値として扱わない。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
    resetModeDistribution: NOT_APPLICABLE_NO_MODE_CONFIRMED
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_CONFLICT
resetBehaviorQA: COMPLETE_RESEARCH_PASS_NO_RESET_SPECIFIC_BENEFIT_CONFIRMED

conflicts:
  - releaseDate: ALL7/HAZUSE 2009-07-06 vs P-WORLD/5号機クロニクル 2009年06月。月単位と具体日の定義差の可能性はあるが確定できないため保持。
  - payoutRateBySetting: P-WORLD/当時侍777/5号機クロニクル 95.0/96.7/98.9/100.8/103.9/106.5% vs HAZUSE 98.28/100.26/102.47/104.49/104.49/110.42%。平均しない。

missingFields:
  - 50枚あたりゲーム数/ベース
  - 機械割2系列の算出条件差
  - 設定変更/据え置き/電源OFF→ON時の本機固有の初期出目・表示・ランプ挙動
  - ガックン等による設定変更判別
  - 設定変更専用の公開朝一数値

sources:
  - url: https://www.all7.jp/plans/index/2009/07
    title: 2009年7月 新台導入予定一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY_CALENDAR
    usedFor: マツヤ商会、パチスロ エマニエル～夜蝶Ver.～、2009-07-06導入予定、同日群確認。
  - url: https://www.p-world.co.jp/machine/database/5574
    title: エマニエル / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: マツヤ商会、5号機ノーマル完全告知、型式エマニエル、検定9S0262、2009年06月、BIG/REG/合算、95.0〜106.5%系列、BIG約312枚/REG約104枚。
  - url: https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2009-06
    title: 2009年06月 新台スケジュール / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 2009年06月導入機種一覧にエマニエル掲載、導入月CONFLICT確認。
  - url: https://hazuse.com/machine/pachislot/9S0262/
    title: エマニエル / HAZUSE
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_DATABASE
    usedFor: 2009-07-06、型式/検定、精密BIG/REG/合算、98.28〜110.42%機械割系列。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mazya_slot/03/a.php
    title: エマニエル～夜蝶Ver.～ 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: ノーマル機、完全告知、BIG312枚/REG104枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mazya_slot/03/c.php
    title: エマニエル～夜蝶Ver.～ 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数が「現在調査中」であることを確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mazya_slot/03/mazya_slot_03.php
    title: エマニエル～夜蝶Ver.～ 攻略INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」専用項目の存在確認。検索インデックスから本文のリセット具体値は回収できず推測しない。
  - url: https://ameblo.jp/samurai777net/entry-10268470602.html
    title: パチスロ新台/マツヤ商会「エマニエル～夜蝶Ver～」基本情報 / 侍777
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY
    usedFor: 2009年7月、天井なし、95.0〜106.5%系列、丸めBIG/REG/合算、BIG312枚/REG104枚。
  - url: https://5goki.com/others
    title: その他メーカー 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009/6、95.0〜106.5%機械割系列の照合。
  - url: https://q-and-a.hatenablog.com/entry/2016/10/24/165921
    title: マツヤ商会の検定通過機種メモ
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ARCHIVE_NOTE
    usedFor: 2009-05-11検定通過記録の補助確認。導入日とは分離。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、旧INDEX、LATEST_HANDOFF、387レコード、直近mainコミットを再取得。387件地点を正本として継続。
  - repoコード検索で本機未登録を確認し、2009-07-06同日群の388として追加。
  - 欠損判定前に「エマニエル/エマニエル～夜蝶Ver.～/夜蝶Ver/マツヤ商会/9S0262」と、機械割/PAYOUT/BIG/REG/合算/50枚/1000円/ベース/コイン持ち/天井/設定変更/リセット/朝一/据え置き/電源OFF ON/モード/状態/ガックン/初期出目を組み替えて再探索。
  - ALL7、P-WORLD、HAZUSE、パチマガスロマガ旧解析、当時ブログ、5号機回顧DB、検定通過回顧資料を横断。
  - ノーマル機で天井・ゲーム数モード・CZ/ART/RTを確認しないため、それらのresetBehaviorはN/Aとして分離。一方、電源OFF→ONやガックン/初期表示の本機固有挙動は一般論で補間せずUNVERIFIED_AFTER_RESEARCH。
