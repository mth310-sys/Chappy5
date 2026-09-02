# もっと楽シーサー25Φ

machineName: もっと楽シーサー25Φ
formalModelName: もっと楽シーサーG
inspectionNumber: 8S0995
manufacturer: SANKYO
releaseDate: 2009-05-06
releaseDatePrecision: INDUSTRY_DELIVERY_EXACT_DATE
releaseDateNote: グリーンべると当時記事で「納品は5月6日から」を確認。ALL7とハズセは導入開始日を2009-05-07としており、物流開始とホール導入開始の1日差として保持する。SANKYO公式機種コレクションは2009.05導入。
generation: 5号機
systemType: ノーマル / ボーナス主体 + 天井RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  publishedSeriesA:
    setting1: 95.3%
    setting2: 97.5%
    setting3: 99.5%
    setting4: 103.0%
    setting5: 107.0%
    setting6: 115.5%
  publishedSeriesB:
    setting1: 96.53%
    setting2: 99.04%
    setting3: 101.14%
    setting4: 104.71%
    setting5: 109.11%
    setting6: 117.00%
  status: CONFLICT_DEFINITION_UNRESOLVED
  note: P-WORLD、5号機まとめwiki、後年機種整理は95.3〜115.5%系列。pacnkは96.53〜117.00%系列を掲載。攻略条件/技術介入込み等の計算条件差の可能性があるが、今回取得資料では両系列の正式定義を直接確定できないため平均せずCONFLICTとして保持する。

initialHitBySetting:
  big:
    setting1: 1/299.25
    setting2: 1/288.70
    setting3: 1/281.27
    setting4: 1/266.41
    setting5: 1/249.19
    setting6: 1/219.92
  challengeBonus:
    setting1: 1/322.84
    setting2: 1/309.13
    setting3: 1/299.25
    setting4: 1/278.88
    setting5: 1/259.04
    setting6: 1/227.56
  bonusCombined:
    setting1: 1/155.29
    setting2: 1/149.28
    setting3: 1/144.99
    setting4: 1/136.24
    setting5: 1/127.00
    setting6: 1/111.83
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: SANKYO公式の丸め値（BIG 1/299→1/219、CB 1/322→1/227、合算1/155→1/111）と、P-WORLD/5号機まとめwiki/pacnkの精密値が整合。

baseGamesPer50:
  setting1: 34.27G
  setting2: 34.91G
  setting3: 35.57G
  setting4: 36.27G
  setting5: 37.00G
  setting6: 37.76G
  status: OLD_ANALYSIS_HIGH
  note: パチマガスロマガ現存ページの「1000円あたりのゲーム数」直接値。小役からの逆算ではない。

netIncrease:
  ceilingRT: 約+0.4枚/G
  status: INDUSTRY_CROSSCHECKED
  note: グリーンべると、P-WORLD、5号機まとめwikiで一致。

basicPayout:
  big: 約310枚
  challengeBonus: 104枚
  status: OFFICIAL_INDUSTRY_CROSSCHECKED
  note: SANKYO公式は販売機種のボーナス構成を掲載。グリーンべるととP-WORLDで25ΦのBIG約310枚、CB104枚を確認。P-WORLDの規定払い出しはBIG346枚以上、CB106枚以上。

modeSpecificMinimumData:
  - ボーナスのみで出玉を増やすAタイプを基本とし、救済機能として天井RTを搭載。
  - ボーナス後777G消化で次回ボーナスまで継続する天井RTへ突入。
  - 天井RT純増は約+0.4枚/G。
  - 天井到達約10G前から上部ランプと役物背景が点滅するとの解析資料あり。

resetBehavior:
  settingChangeBehavior: 設定変更後もボーナス間ゲーム数を引き継ぐとの解析資料あり。天井RTカウンタをクリアしない仕様として保存するが、メーカー一次資料での再確認はできていないため ANALYSIS_SINGLE_FINDING。
  carryOverBehavior: 据え置き時は通常の進行継続としてボーナス間ゲーム数を引き継ぐとみるのが自然だが、本機固有の据え置き明記を直接回収できていないため UNVERIFIED_AFTER_RESEARCH。推測値として確定しない。
  powerCycleBehavior: 単純電源OFF→ONのみの場合の天井RTカウンタ/RT状態の扱いを本機固有資料で直接確認できず UNVERIFIED_AFTER_RESEARCH。
  gameCounterReset: SETTING_CHANGE_CARRY_OVER_REPORTED。pacnkが「設定変更後もゲーム数を引き継ぐ」と明記。通常天井777Gのため朝一宵越し狙いへ直接影響する重要項目。
  ceilingAfterReset: NO_SHORTENING_CONFIRMED。通常天井777G。設定変更後もゲーム数引継ぎとの解析値のため、リセット専用短縮天井は確認されない。
  modeAfterReset: NOT_APPLICABLE_TO_PUBLISHED_MODE_SYSTEM。通常時モード管理の公開構造は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。天井RT中に設定変更/電断した場合のRT状態そのものの継続・終了処理までは直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 設定変更後も天井ゲーム数を引き継ぐ解析値が正しければ、前日ハマリを消さないため客側には宵越し天井狙い余地が残る。これは新規の短縮恩恵ではなく「カウンタ非リセット」という性質として記録。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: 天井到達約10G前の上部ランプ/役物背景点滅は天井接近示唆であり、設定変更判別そのものではない。ガックン、初期出目等の本機固有変更判別は十分再探索後も UNVERIFIED_AFTER_RESEARCH。
  numericResetData:
    normalCeiling: 777G（ボーナス間）
    resetSpecificCeiling: NONE_CONFIRMED
    gameCountAfterSettingChange: CARRY_OVER_REPORTED
    resetModeDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetBehaviorQA: RESEARCHED_WITH_GAME_COUNT_CARRY_OVER_FINDING_POWER_CYCLE_STATE_UNVERIFIED

conflicts:
  - payoutRateBySetting: 95.3/97.5/99.5/103.0/107.0/115.5%系列と、pacnkの96.53/99.04/101.14/104.71/109.11/117.00%系列が競合。計算条件を直接確定できないため平均しない。
  - releaseDateDefinition: グリーンべると納品開始2009-05-06、ALL7/ハズセ導入開始2009-05-07。物流開始とホール導入開始の定義差として保持し、主日付は最古の具体的納品日2009-05-06。

missingFields:
  - 2系列機械割の正式な計算条件（通常/完全攻略等）の一次確認
  - 据え置き時の本機固有明記
  - 単純電源OFF→ON時の天井カウンタ/RT状態
  - 天井RT中の設定変更時にRT状態そのものが継続するか終了するか
  - ガックン/初期出目等による設定変更判別
  - 設定変更専用モード振分/朝一当選率等の公開数値

sources:
  - url: https://www.sankyo-fever.jp/collection/536/
    title: 「もっと楽シーサー」の機種詳細 / SANKYOオンライン博物館
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 2009.05導入、25Φ/30Φ全国/30Φ沖縄の3スペック存在、型式名もっと楽シーサーG、設定別BB/CB/合算の公式丸め値。
  - url: https://web-greenbelt.jp/00003039/
    title: 全てがパワーアップ！『もっと楽シーサー』 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2009-05-06納品開始、天井777G、RT約+0.4枚/G、BIG/CB確率範囲、BIG約310枚、CB104枚、30Φ2種類同時発表。
  - url: https://www.all7.jp/plans/index/2009/05/10
    title: 2009年5月の導入機種一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-05-07導入予定、4月末境界後の次期候補監査。
  - url: https://www.p-world.co.jp/machine/database/5503
    title: もっと楽シーサー25Φ / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: BIG/CB/合算、機械割95.3〜115.5%、BIG約310枚、CB104枚、777G天井RT、約+0.4枚/G。
  - url: https://hazuse.com/machine/pachislot/8S0995/
    title: もっと楽シーサー(赤パネルver.) / ハズセ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_DATABASE
    usedFor: 型式名もっと楽シーサーG、検定番号8S0995、導入開始日2009-05-07。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/16/c.php
    title: もっと楽シーサー 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数34.27〜37.76G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/16/sankyo_slot_16.php
    title: もっと楽シーサー 機種索引 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 天井RT、攻め時・ヤメ時・設定変更時の専用解析項目が存在することを確認。本文は直接回収できず。
  - url: https://pacnk.com/slot/tools/sh_mottotanosisa.html
    title: もっと楽シーサー 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: 精密BIG/CB値、PAYOUT96.53〜117.00%系列、777G天井RT、設定変更後もゲーム数引継ぎ、天井10G前ランプ点滅。
  - url: https://w.atwiki.jp/5gouki/pages/166.html
    title: もっと楽シーサー / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: OLD_SECONDARY_ARCHIVE
    usedFor: 25Φ、天井777G、RT約+0.4枚/G、BIG/CB/合算/機械割95.3〜115.5%系列のクロスチェック。
