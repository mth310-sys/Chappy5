# パチスロうる星やつら2

machineName: パチスロうる星やつら2
formalModelName: パチスロうる星やつら2
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: サミー
releaseDate: 2009-07-06
releaseDatePrecision: EXACT_CALENDAR_CROSSCHECKED
releaseDateNote: パチビーおよびK-Naviが2009-07-06導入開始を明記。2009年5月27日付グリーンべるとでサミーが5月26日に発表した純Aタイプ後継機であることを確認。
generation: 5号機
systemType: ノーマルA / ボーナス主体 / 技術介入 / 10GプチRT演出あり
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  main_market_series:
    setting1: 95.7%
    setting2: 98.1%
    setting3: 100.1%
    setting4: 104.7%
    setting5: 110.0%
    setting6: 119.0%
  alternate_series:
    setting1: 95.7%
    setting2: 98.1%
    setting3: 100.1%
    setting4: 104.7%
    setting5: 110.2%
    setting6: 119.0%
  status: CONFLICT_MINOR_SETTING5
  note: パチビー/P-WORLD系は設定5を110.0%表記、2009年更新5号機まとめwikiおよびけんのスロットシミュレーションは110.2%。平均せず両系列を保持。

initialHitBySetting:
  big:
    setting1: 1/288.7
    setting2: 1/277.7
    setting3: 1/258.0
    setting4: 1/247.3
    setting5: 1/226.8
    setting6: 1/208.0
  mid:
    setting1: 1/385.5
    setting2: 1/354.2
    setting3: 1/337.8
    setting4: 1/309.1
    setting5: 1/295.2
    setting6: 1/257.0
  combined:
    setting1: 1/165.1
    setting2: 1/155.7
    setting3: 1/146.3
    setting4: 1/137.4
    setting5: 1/128.3
    setting6: 1/115.0
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD/パチビー/K-Navi/pacnk/2009年更新5号機まとめwikiで丸め差範囲の一致。BIGは赤7/青7/ラムBIGの合算、MIDは赤/青MIDの合算。

baseGamesPer50:
  setting1: 35.96G
  setting2: 36.32G
  setting3: 36.54G
  setting4: 37.19G
  setting5: 37.62G
  setting6: 38.48G
  status: ANALYSIS_SINGLE_RETROSPECTIVE
  note: けんのスロットシミュレーション掲載値。機種固有ベースは他系統で同一精度の再照合を得られなかったため単一二次資料扱い。

netIncrease:
  normalGame: NOT_APPLICABLE_BONUS_MACHINE
  girlHuntTime: 10GプチRTだが出玉増加用ART/RTではなくボーナス期待演出上の短期RT。純増比較値は本DBコアでは採用しない。

basicPayout:
  big: 最大311枚
  mid: 104枚
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、パチビーで一致。BIGは344枚を超える払い出しで終了、MIDは105枚を超える払い出しで終了。

modeSpecificMinimumData:
  - 前作同様の純Aタイプ。BIG/MIDのみで出玉を増やす。
  - 特殊リプレイ成立を契機に10GのプチRT「ガールハントタイム」が存在するが、長期出玉契機ではない。
  - 「鬼ごっこタイム」はボーナス高期待演出/CZ的演出として存在するが、ゲーム数天井・AT初当たりモードのようなホール朝一管理対象ではない。
  - 通常ゲーム数天井は確認されず、旧解析では「天井なし」。

resetBehavior:
  settingChangeBehavior: NO_RESET_SPECIFIC_BENEFIT_CONFIRMED_AFTER_RESEARCH。設定変更専用の天井短縮・朝一モード・ボーナス当選優遇は確認できず。設定変更時に短期RT中状態がどう処理されるかは直接資料なし。
  carryOverBehavior: NO_GAME_COUNT_CEILING_TO_CARRY。通常ゲーム数天井がないため宵越し天井進捗は非該当。据え置き時の10GプチRT残G/演出状態の復帰はUNVERIFIED_AFTER_RESEARCH。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみで短期RT/演出状態・初期出目がどう復帰するかの本機固有直接資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING
  modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の10GプチRT残Gや特殊リプレイ後状態の処理は一般論から補間しない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプによる本機固有の設定変更判別根拠を十分な再探索後も確定できず。
  numericResetData:
    normalCeiling: NONE_CONFIRMED
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE_NO_CEILING
    resetModeDistribution: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_MINOR_SETTING5_PAYOUT_CONFLICT_AND_BASE_SINGLE_SOURCE
resetBehaviorQA: COMPLETE_RESEARCH_PASS_NO_CEILING_RESET_ADVANTAGE_FOUND_STATE_POWER_CYCLE_DETECTION_UNVERIFIED

conflicts:
  - payoutRateBySetting setting5: 110.0%（パチビー/P-WORLD系） vs 110.2%（2009年更新5号機まとめwiki/けんのスロットシミュレーション）。平均しない。

missingFields:
  - 保通協検定番号
  - 50枚ベースの別系統同一精度照合
  - 設定変更/据え置き/電源OFF→ON時の10GプチRT残G・演出状態の本機固有処理
  - ガックン/初期出目/表示による設定変更判別

sources:
  - url: https://www.pachibee.jp/machines/index/209090047
    title: パチスロ うる星やつら2 / パチビー
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS_HIGH
    usedFor: 2009-07-06導入、サミー、5号機ノーマル/技術介入、合算、95.7〜119.0%系列、BIG最大311枚/MID104枚、各ボーナス詳細。
  - url: https://p-kn.com/slot/993/
    title: パチスロうる星やつら2 / K-Navi
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS_HIGH
    usedFor: 2009-07-06ホール導入開始、ノーマルタイプ、設定別BIG/MIDの照合。
  - url: https://www.p-world.co.jp/machine/database/5579
    title: パチスロうる星やつら2 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: サミー、5号機ノーマルタイプ/技術介入、BIG311枚/REG104枚、各ボーナス詳細、10GプチRTガールハントタイム、ボーナス主体構造。
  - url: https://web-greenbelt.jp/00003110/
    title: サミーから純Aタイプ第3弾『うる星やつら2』 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: 2009-05-26発表、サミー、前作同様の純Aタイプ、ガールハントタイム/鬼ごっこタイム。
  - url: https://pacnk.com/slot/tools/sh_uruseiyatsura2.html
    title: パチスロ うる星やつら2 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 設定別BIG/MID、95.7〜119.0%系列の照合。
  - url: https://w.atwiki.jp/5gouki/pages/179.html
    title: うる星やつら2 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_COMMUNITY_ARCHIVE
    usedFor: 2009-07-22時点の各ボーナス確率、設定5機械割110.2%系列、設定6 119.0%。
  - url: https://kenslo65536.com/kaiseki/urusei2.html
    title: うる星やつら2 解析情報 / けんのスロットシミュレーション
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS_SINGLE
    usedFor: 50枚あたり35.96〜38.48G、天井なし、設定5 110.2%系列、BIG/MID/合算の照合。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、旧INDEX、LATEST_HANDOFF、389七色未来、直近コミットを再取得し、389件地点を正本として継続。
  - repo検索で `うる星やつら2` が未登録であることを確認。
  - 「うる星やつら2 / パチスロうる星やつら2 / サミー / 型式 / 検定番号」と「設定/機械割/BIG/MID/合算/50枚/ベース/天井/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」を組み替えて再探索。
  - P-WORLD、パチビー、K-Navi、当時グリーンべると、2009年更新5号機まとめwiki、pacnk、旧解析系を横断。
  - ノーマル機で通常ゲーム数天井なしは確認できたため、天井進捗関連は非該当として分離。短期RT状態の設定変更/電断処理や変更判別は直接根拠がないため推測していない。
