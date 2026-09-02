# もっと楽シーサー30Φ全国バージョン

machineName: もっと楽シーサー30Φ全国バージョン
formalModelName: もっと楽シーサー30N
inspectionNumber: 8S0919
manufacturer: SANKYO
releaseDate: 2009-05-07
releaseDatePrecision: OLD_DATABASE_EXACT_DATE
releaseDateNote: ハズセが導入開始日2009-05-07を明記。SANKYO公式は2009.05導入。グリーンべるとはシリーズ発表記事内で25Φ説明に続けて「納品は5月6日から」と記し30Φ2仕様も同時発表しているが、この5月6日が30Φ各仕様にも直接適用されるか文章上断定しにくいため、全国版固有の具体日として確認できる2009-05-07を主日付とする。
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 95.3%
  setting2: 97.3%
  setting3: 99.4%
  setting4: 102.2%
  setting5: 106.5%
  setting6: 111.5%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、ハズセ、pacnkで同系列一致。

initialHitBySetting:
  big:
    setting1: 1/307
    setting2: 1/296
    setting3: 1/286
    setting4: 1/273
    setting5: 1/258
    setting6: 1/236
  challengeBonus:
    setting1: 1/319
    setting2: 1/307
    setting3: 1/296
    setting4: 1/282
    setting5: 1/266
    setting6: 1/242
  bonusCombined:
    setting1: 1/156.4
    setting2: 1/150.7
    setting3: 1/145.5
    setting4: 1/138.7
    setting5: 1/131.0
    setting6: 1/119.5
  status: OFFICIAL_ANALYSIS_CROSSCHECKED
  note: SANKYO公式の丸め値（BIG 1/307→1/236、CB 1/319→1/242、合算1/156→1/119）とP-WORLD/ハズセ/pacnkが整合。合算の小数値はP-WORLDを採用。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名・型式30N・全国Ver/全国バージョンと「50枚」「1000円あたり」「ベース」「コイン持ち」「小役確率」を組み替え、P-WORLD、ハズセ、パチマガスロマガ、pacnk等を再探索。パチマガスロマガ現存ページは1000円あたりゲーム数を「現在調査中」としており、比較可能な直接値を確定できなかった。小役から逆算しない。

netIncrease:
  value: NOT_APPLICABLE
  status: CONFIRMED_NO_RT_AT
  note: P-WORLDが全国版は25Φと異なり天井RTなしと明記。通常時はボーナスのみで出玉を増やすノーマルタイプ。

basicPayout:
  big: 約312枚
  challengeBonus: 約104枚
  status: INDUSTRY_ANALYSIS_CROSSCHECKED
  note: グリーンべるととP-WORLDで一致。ハズセの配当表ではBIG345枚超、CB105枚超の払い出しで終了。

modeSpecificMinimumData:
  - 30Φの本土出荷仕様。完全告知タイプ。
  - リール左右のシーサーランプ等の点灯でボーナス告知。シーサー役物作動時はBIG確定と当時業界記事が説明。
  - 25Φに搭載された777G天井RTは全国30Φには搭載されない。
  - 通常時はボーナスのみで出玉を増やす構造。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時のリール初期挙動・ランプ・内部状態等について全国30Φ固有の直接資料を確認できず。通常ゲーム数天井や公開モード管理は存在確認できないため、天井カウンタ消去等の恩恵は該当しない。
  carryOverBehavior: NOT_APPLICABLE_TO_GAME_COUNT_OR_PUBLISHED_MODE。天井・ゲーム数管理・公開通常モードが確認されないノーマル機。設定値以外の内部状態について据え置き時に朝一価値へ影響する公開継続項目は確認できない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のリール/告知ランプ等の全国30Φ固有挙動を直接確認できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING。25Φの777G天井RTは全国30Φには非搭載。
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING。
  modeAfterReset: NOT_APPLICABLE_TO_PUBLISHED_MODE_SYSTEM。
  stateAfterReset: NOT_APPLICABLE_TO_PUBLISHED_GAMEPLAY_STATE。朝一狙いに影響する高確/低確等の公開内部状態は確認されない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。短縮天井・朝一高確・RTスタート等は確認されない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: ガックン、初期出目、告知ランプ等による全国30Φ固有の設定変更判別を検索語・資料系統変更後も確認できず UNVERIFIED_AFTER_RESEARCH。
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
  - releaseDateDefinition: ハズセ全国版固有ページは導入開始2009-05-07。グリーンべるとのシリーズ記事には「納品は5月6日から」があるが、文章上25Φ説明の直後に置かれ、30Φ2仕様への直接適用が明確でない。推測で5月6日にせず全国版固有具体日の5月7日を主値とした。

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
    usedFor: 2009.05導入、30Φ全国バージョンが独立スペックであること、型式名もっと楽シーサー30N、設定別BB/CB/合算の公式丸め値、完全告知仕様。
  - url: https://web-greenbelt.jp/00003039/
    title: 全てがパワーアップ！『もっと楽シーサー』 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 30Φ全国/沖縄2仕様の同時発表、全国Ver合算1/156〜1/119、BIG約312枚、RB104枚、全タイプ全国発売、シリーズ納品5月6日記載の境界確認。
  - url: https://www.p-world.co.jp/machine/database/5502
    title: もっと楽シーサー30Φ全国バージョン / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 30Φ全国仕様、天井RT非搭載、設定別BIG/CB/合算、機械割95.3〜111.5%、BIG約312枚、CB約104枚、型式・検定番号の照合。
  - url: https://hazuse.com/machine/pachislot/8S0919/
    title: もっと楽シーサー30φ(全国ver.) / ハズセ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_DATABASE
    usedFor: 導入開始日2009-05-07、型式名もっと楽シーサー30N、検定番号8S0919、設定別確率/機械割、ボーナス払い出し終了条件。
  - url: https://pacnk.com/slot/tools/sh_mottotanocsazenkokuv.html
    title: もっと楽シーサー30Φ全国バージョン 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: 設定別BIG/CB/PAYOUTのクロスチェック。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/17/sankyo_slot_17.php
    title: もっと楽シーサー30 全国Ver / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 当時解析メニュー、攻め時・ヤメ時「特にナシ」の確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/17/c.php
    title: もっと楽シーサー30 全国Ver 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数が現存ページで「現在調査中」であることを確認し、ベースを推測採用しない根拠。
