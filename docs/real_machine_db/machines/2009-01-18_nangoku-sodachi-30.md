# 南国育ち30

machineName: 南国育ち30
manufacturer: オリンピア（製造元: 平和）
releaseDate: 2009-01-18
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_DATE
modelName: 南国育ち30
modelNumber: 南国育ちR2-30
modelNumberStatus: INDUSTRY_DATABASE
検定番号: 8S1065
generation: 5号機
systemType: ボーナス + モード管理 + ART「南国チャンス」 + 天井RT / 完全告知・パンク回避型ART
settings: 1 / 2 / 3 / 4 / 5 / 6
medalDiameter: 30φ

payoutRateBySetting:
  pachimagaSimulation:
    setting1: 95.11%
    setting2: 97.95%
    setting3: 100.95%
    setting4: 104.53%
    setting5: 108.21%
    setting6: 111.02%
  pworldPublishedRange:
    setting1: 95.4%
    setting6: 111.4%
  retrospectiveRange:
    setting1: 95.4%
    setting2: 98.3%
    setting3: 101.2%
    setting4: 104.7%
    setting5: 108.1%
    setting6: 111.4%
  status: CONFLICT
  note: パチマガスロマガのシミュレート値とP-WORLD/後年DB系列で差がある。測定・算出条件を今回確定できないため平均せず保持。

initialHitBySetting:
  BIG:
    setting1: 1/397.19
    setting2: 1/392.43
    setting3: 1/387.79
    setting4: 1/383.25
    setting5: 1/378.82
    setting6: 1/374.49
  REG:
    setting1: 1/668.73
    setting2: 1/661.98
    setting3: 1/655.36
    setting4: 1/648.87
    setting5: 1/642.51
    setting6: 1/636.27
  bonusCombined:
    setting1: 1/249.19
    setting2: 1/246.38
    setting3: 1/243.63
    setting4: 1/240.94
    setting5: 1/238.31
    setting6: 1/235.74
  status: ANALYSIS_HIGH_SAME_25_AND_30_PAGE
  note: パチマガスロマガ「南国育ち&30」が25φ/30φを共通スペックとして掲載。当時グリーンべるとも30φのゲーム性は25φと全て同等と明記。

baseGamesPer50:
  value: 約35.1G/50枚
  status: DERIVED_FROM_CONTEMPORARY_CONFIRMED_SAME_GAME_SPEC
  note: 30φ固有の独立ベース表を今回回収できなかったが、当時業界記事が25φとのゲーム性完全同等を明記し、25φで約35.1G/50枚が確認済み。推定値ではなく同一ゲーム仕様派生として出典関係を明示して保持。

basicPayout:
  BIG: 約204枚
  REG: 約48枚
  status: MULTI_SOURCE_MATCH

netIncrease:
  nangokuChanceART: 約+1.5枚/G
  ceilingRT: 約+0.3枚/G
  status: MULTI_SOURCE_MATCH

modeSpecificMinimumData:
  nangokuChance: 50G/1セット。ボーナス終了前のバタフライゾーンでランプ点灯時に突入。
  artLoop: 平均継続率80%以上（当時業界資料）。ART中ボーナス後もARTへ復帰し、無限南国チャンス昇格あり。
  ceiling: 通常時996G消化で天井RT。天井RTは約+0.3枚/Gでボーナス成立まで継続または特殊リプレイ入賞で終了（回避可能）。
  sameGameAs25Phi: 当時グリーンべるとが「30φ機のゲーム性は全て25φ機と同等」と明記。

resetBehavior:
  settingChangeBehavior: CONFIRMED。設定変更後も天井までのゲーム数はクリアされず、高確モードからスタート。P-WORLDの2009年30φ本機ページが直接明記。
  carryOverBehavior: PARTIAL_CONFIRMED_BY_COUNTER_RULE。設定変更でも996G天井までのゲーム数がクリアされないため天井カウンタは保持。一方、単純据え置き時のART/無限ART/天井RT/通常モードの翌日内部処理を包括的に直接説明する本機固有資料は未回収。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。2009年本機について設定変更なしの電源OFF→ONのみの天井カウンタ・モード・ART/天井RT状態処理を直接確認できる資料は今回未回収。2021年同名6号機資料は別機種のため混入禁止。
  gameCounterReset: NOT_RESET_ON_SETTING_CHANGE。通常996G天井までのG数は設定変更時もクリアされない。
  ceilingAfterReset: NO_RESET_SHORTENING_CONFIRMED。設定変更専用の短縮天井は確認されず、996G天井までの残G数を保持する挙動が直接掲載される。
  modeAfterReset: HIGH_MODE_START_CONFIRMED。設定変更後は高確モードから開始。
  stateAfterReset: PARTIAL。通常時モードの高確スタートは確認。ART/無限ART/天井RT中の設定変更・据え置き・電断時状態処理は直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: CONFIRMED。設定変更後は高確モード開始。25φ版の高確時ART突入率公開値を同ゲーム性の朝一比較補助値として扱えるが、本レコードでは30φ直接表として確認できないため数値自体の二重転記は避ける。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。少なくとも設定変更による天井G数消去はない。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。`南国育ち30 / 南国育ちR2-30 / オリンピア / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ランプ / 天井 / モード` を組み替え、当時業界・解析・古いDB・回顧資料を横断したが、2009年本機固有の確定的な変更判別手段は回収できず。
  numericResetData:
    normalCeilingGameCount: 996G
    ceilingCounterOnSettingChange: CARRY_OVER_NOT_CLEARED
    resetMode: HIGH_MODE
    resetSpecificShortenedCeiling: NONE_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT_AND_BASE_DERIVED_FROM_CONFIRMED_SAME_SPEC
resetBehaviorQA: SUBSTANTIAL_SETTING_CHANGE_CONFIRMED_POWER_CYCLE_CARRYOVER_STATE_AND_DETECTION_PARTIAL_OR_UNVERIFIED

conflicts:
  - field: payoutRateBySetting
    sourceA: パチマガスロマガ 95.11 / 97.95 / 100.95 / 104.53 / 108.21 / 111.02%（シミュレート値）
    sourceB: P-WORLD/後年DB 95.4〜111.4%系列
    handling: CONFLICT_NO_AVERAGING

missingFields:
  - 2009年本機での単純電源OFF→ON時の天井カウンタ・モード・ART/天井RT状態処理
  - 据え置き時のART/無限ART/天井RT内部状態の翌日処理
  - ART/天井RT中に設定変更した場合の残G/状態処理
  - ガックン/初期出目/ランプ等による2009年本機固有の設定変更確定判別
  - 30φ固有資料だけで独立確認した50枚ベース表

sources:
  - url: https://web-greenbelt.jp/00003956/
    title: 『南国育ち』の30φバージョン登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: オリンピア発表、製造元平和、30φ版、2009-01-18納品、25φ版とゲーム性が全て同等、ART約+1.5枚/G・50G/セット・平均80%以上。
  - url: https://news.p-world.co.jp/articles/3206/greenbelt
    title: 『南国育ち』の30φバージョン登場 / P-WORLD業界ニュース（グリーンべると転載）
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY_REPRINT
    usedFor: 2009-01-18納品、30φと25φのゲーム性同等の照合。
  - url: https://www.p-world.co.jp/machine/database/5422
    title: 南国育ち30「2009年」 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式南国育ちR2-30、検定番号8S1065、5号機ART/30Φ、BIG約204枚、REG約48枚、ART50G・約+1.5枚/G、996G天井RT約+0.3枚/G、設定変更後の天井G非クリア・高確モード開始、機械割95.4〜111.4%系列。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/85/h.php
    title: 南国育ち&30 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 25φ/30φ共通の設定別BIG/REG/合算、PAYOUTシミュレート95.11〜111.02%。
  - url: https://5goki.com/heiwa-olympia
    title: 平和＆オリンピア 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009年1月、BIG約203枚、設定別機械割95.4〜111.4%系列の補助照合。ゲーム性分類のAタイプ表記は当時資料と整合しないため採用しない。
  - url: https://raw.githubusercontent.com/mth310-sys/Chappy5/main/docs/real_machine_db/machines/2008-11-03_nangoku-sodachi.md
    title: Chappy5既存レコード 南国育ち（25φ）
    retrievedAt: 2026-09-02
    confidence: INTERNAL_DERIVED_FROM_SOURCED_RECORD
    usedFor: 当時業界の「ゲーム性は全て同等」を根拠にした約35.1G/50枚の同一仕様派生。25φ/30φを同一レコードとして混同せず、30φ独立レコードの派生根拠としてのみ利用。
