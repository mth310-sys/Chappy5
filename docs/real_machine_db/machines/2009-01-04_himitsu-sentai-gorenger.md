# パチスロ秘密戦隊ゴレンジャー

machineName: パチスロ秘密戦隊ゴレンジャー
manufacturer: SANKYO
releaseDate: 2009-01-04
releaseDatePrecision: DAY_DELIVERY_START_CONFIRMED_BY_CONTEMPORARY_INDUSTRY_REPORT
modelNumber: パチスロ秘密戦隊ゴレンジャー
approvalNumber: 8S0923
generation: 5号機
systemType: ボーナス+貫通型RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primary: {1: 97%, 2: 99%, 3: 101%, 4: 104%, 5: 108%, 6: 112%}
  status: ANALYSIS_HIGH_MULTI_SOURCE
  note: K-Navi、P-WORLD、当時5号機まとめ系で97/99/101/104/108/112%が一致。SANKYO公式アーカイブは機械割を掲載していないため解析値として保持。

initialHitBySetting:
  BIGCombined: {1: 1/496, 2: 1/474, 3: 1/448, 4: 1/420, 5: 1/409, 6: 1/385}
  challengeBonusCombined: {1: 1/81, 2: 1/78, 3: 1/75, 4: 1/73, 5: 1/67, 6: 1/62}
  totalBonus: {1: 1/69, 2: 1/67, 3: 1/65, 4: 1/62, 5: 1/57, 6: 1/53}
  redBIG: {1: 1/8192, 2: 1/8192, 3: 1/8192, 4: 1/8192, 5: 1/8192, 6: 1/8192}
  status: OFFICIAL_ARCHIVE_PLUS_ANALYSIS_HIGH
  note: SANKYOオンライン博物館のBIG/CHALLENGE BONUS/合算とK-Naviが一致。色別詳細はP-WORLD/当時5号機まとめを補助利用。

baseGamesPer50:
  value: {1: 34.01G, 2: 34.36G, 3: 34.69G, 4: 35.04G, 5: 35.36G, 6: 35.74G}
  status: ANALYSIS_SINGLE_RETROSPECTIVE_TABLE
  note: 当時5号機まとめwikiの設定別コイン持ち/50枚。別系統で同一数値を直接照合できていないため単一解析値として保持。

netIncrease:
  RTDisplay: 現状維持程度
  RTIncludingCBExpectation: 約+0.9枚/G
  status: ANALYSIS_CONCEPT_PLUS_SINGLE_ESTIMATE
  note: P-WORLDはRT単体を「現状維持程度」と記載。当時5号機まとめはRT中CB込み期待値を約+0.9枚/Gとしており定義が異なるため混同しない。

basicPayout:
  redBIG: 約260枚（346枚超払い出しで終了）
  blueOrYellowBIG: 約120枚（156枚超払い出しで終了）
  redCB: 約90枚（120枚超払い出しで終了）
  blueCB: 約63枚（84枚超払い出しで終了）
  yellowCB: 約45枚（60枚超払い出しで終了）
  status: ANALYSIS_HIGH_CONTEMPORARY_AND_DATABASE_ALIGNED

modeSpecificMinimumData:
  - BIG終了後は必ずRT「ゴレンジャータイム」へ突入する。
  - 青7BIG/黄7BIG後は200G、赤7BIG後は9999Gまたは次回BIG成立まで継続。
  - RT中にCBが成立してもRTは終了せず残りゲーム数を維持する「貫通型RT」。
  - P-WORLDでは青/黄BIG後RT込み平均獲得約420枚、赤BIG後は平均約1100枚（設定6目安）と紹介。
  - 通常時ゲーム数到達型天井、周期CZ、内部モード管理は今回の再探索で確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
  gameCounterReset: NONE_CONFIRMED_AFTER_RESEARCH
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH
  numericResetData:
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
  note: 機種名・型式・メーカーに「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「RT」「状態」「ガックン」を組み替え、SANKYO公式アーカイブ、グリーンべると当時記事、P-WORLD、K-Navi、パチマガスロマガ旧ページ、当時5号機まとめ/回顧資料を横断したが、本機固有の設定変更・据え置き・単純電断時のRT残G/内部状態処理、変更判別、公開朝一数値を直接確定できず。通常時ゲーム数天井自体も確認できないため、BIG後RT200G/9999Gを天井値へ流用しない。一般的な5号機の電断/設定変更挙動から推測補完しない。

coreStatus: COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_DEVICE_SPECIFIC_RESET_TEXT_NOT_RECOVERED

conflicts:
  - NONE_MATERIAL_CONFIRMED。
  - 注意: 5号機クロニクルの現行「SANKYO全機種一覧」検索結果には、本機をA+ART・BIG約208枚/REG約60枚・ART初当たり等とする別機種級の不整合記述が混入している。SANKYO公式アーカイブ、P-WORLD、K-Navi、当時パチマガスロマガの本機仕様と明確に整合しないため、本レコードの性能値には採用しない。

missingFields:
  - 設定変更時・据え置き・電源OFF→ON時の本機固有RT/内部状態処理
  - 朝一恩恵/不利、変更判別、公開朝一数値
  - 50枚ベースの別系統照合

sources:
  - {url: https://web-greenbelt.jp/00003962/, title: 貫通型RTを搭載、パチスロ『ゴレンジャー』 / グリーンべると, retrievedAt: 2026-09-02, confidence: INDUSTRY_CONTEMPORARY}
  - {url: https://www.sankyo-fever.jp/collection/531/, title: パチスロ 秘密戦隊ゴレンジャー 機種詳細 / SANKYOオンライン博物館, retrievedAt: 2026-09-02, confidence: OFFICIAL_ARCHIVE}
  - {url: https://www.p-world.co.jp/machine/database/5407, title: パチスロ秘密戦隊ゴレンジャー / P-WORLD, retrievedAt: 2026-09-02, confidence: INDUSTRY_DATABASE}
  - {url: https://p-kn.com/slot/900/, title: 秘密戦隊ゴレンジャー / K-Navi, retrievedAt: 2026-09-02, confidence: ANALYSIS_DATABASE}
  - {url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/15/a.php, title: 秘密戦隊ゴレンジャー 基本システム / パチマガスロマガ, retrievedAt: 2026-09-02, confidence: ANALYSIS_HIGH_CONTEMPORARY}
  - {url: https://w.atwiki.jp/5gouki/pages/138.html, title: 秘密戦隊ゴレンジャー / パチスロ5号機まとめwiki, retrievedAt: 2026-09-02, confidence: ANALYSIS_SINGLE_CONTEMPORARY_COMMUNITY_ARCHIVE}
  - {url: https://sulocale.sulopachinews.com/archives/23606, title: タイアップされたパチンコ・パチスロ機一覧（は行） / Slot Calendar, retrievedAt: 2026-09-02, confidence: RETROSPECTIVE_INDEX_WITH_CONTEMPORARY_NEWS_EXCERPT}

researchNotes:
  - 直前LATEST_HANDOFFでは2009-01-12キング・コングまで336件。2009-01-01〜11を再監査した結果、グリーンべると当時記事の「1月4日から納品開始」を回収し、時系列漏れとして本機を遡及追加。
  - SANKYO公式オンライン博物館は導入年月2009.01、型式名「パチスロ 秘密戦隊ゴレンジャー」、設定別BIG/CHALLENGE BONUS/合算を掲載。
  - P-WORLDは検定番号8S0923、赤BIG約260枚+RT9999G、青/黄BIG約120枚+RT200G、3種CB、RT純増を現状維持程度と記載。
  - パチマガスロマガ当時ページで各ボーナスの規定払い出しと純増枚数を確認。
  - 次の未処理具体日候補は2009-01-06「悪魔城ドラキュラ」（KPE）。パチビーで導入日2009-01-06、KONAMI公式アーカイブで稼働開始2009年1月を確認済み。次回は同日/1月5日以前の追加漏れを短く監査してから悪魔城ドラキュラを処理する。
