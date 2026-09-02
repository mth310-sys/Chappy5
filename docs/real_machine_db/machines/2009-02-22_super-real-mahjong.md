# スーパーリアル麻雀

machineName: スーパーリアル麻雀
manufacturer: メーシー
releaseDate: 2009-02-22
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_CONFIRMED
releaseDateNote: グリーンべるとが2009-02-24付記事で「納品は2月22日より開始されている」と明記。パチビーは導入日2009-02-24表記のため、物流開始日/ホール導入日の定義差として保持する。
generation: 5号機
systemType: A+ART / ボーナス後ART / 天井ART
settings: 1 / 4 / 6 / H

payoutRateBySetting:
  marketSeries:
    setting1: 94.7%
    setting4: 98.6%
    setting6: 104.7%
    settingH: 109.7%
    note: P-WORLD/パチビー丸め値。pacnk精密値94.72/98.58/104.69/109.74%と一致。
  pachimagaSeries:
    setting1: 97.35%
    setting4: 100.86%
    setting6: 105.58%
    settingH: 110.90%
    note: パチマガスロマガ掲載PAYOUT。通常時逆押し手順で平均PAYOUTが上がる旨の記載があるが、この表との差全てを同一定義差と断定できないため別系列保持。
  status: CONFLICT_NO_AVERAGE

initialHitBySetting:
  BIG:
    setting1: 1/481.88
    setting4: 1/455.11
    setting6: 1/420.10
    settingH: 1/390.10
  REG:
    setting1: 1/819.20
    setting4: 1/744.73
    setting6: 1/682.67
    settingH: 1/630.15
  bonusCombined:
    setting1: 1/303.41
    setting4: 1/282.48
    setting6: 1/260.06
    settingH: 1/240.94
  status: ANALYSIS_HIGH_CROSSCHECKED

baseGamesPer50:
  setting1: 46.26G/50枚
  setting4: 47.05G/50枚
  setting6: 47.88G/50枚
  settingH: 48.73G/50枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガの1000円あたりゲーム数。

netIncrease:
  mitsumeTimeART: 約+0.8枚/G
  listingTypeLabel: 約+0.7枚/G表記もあり
  status: CONFLICT_OR_ROUNDED_DESCRIPTION_NO_AVERAGE
  note: P-WORLD/パチビーの機種タイプ欄は約+0.7枚/G、本文は約+0.8枚/G。本文のART説明を主値とし、表記差を残す。

basicPayout:
  BIG: 約308枚（430枚超払い出し終了）
  REG: 約105枚（140枚超払い出し終了）
  status: ANALYSIS_HIGH_CROSSCHECKED

modeSpecificMinimumData:
  - ART「見つめタイム」は50G単位の完走型。ボーナス後は必ずARTへ移行し、ボーナス中等で得たポイント分以上のパンク回避ナビが発生する。
  - 通常時1500G消化で次回ボーナスまで継続する天井ARTへ突入。
  - 50G ART終了後はCZへ戻り、条件を満たせばARTループを狙う構造。
  - ボーナス終了後は高確状態からスタートすることがP-WORLDに明記される。

resetBehavior:
  settingChangeBehavior: CONFIRMED_NO_RESET_OF_ART_CEILING_AND_ALL_STATES。P-WORLD/パチビーが設定変更後も「ARTや天井までのゲーム数など、全ての状態がリセットされない」と明記。
  carryOverBehavior: STRONGLY_CONFIRMED_FOR_SETTING_CHANGE_PRESERVATION / ORDINARY_STAY_DIRECT_WORDING_UNVERIFIED。設定変更を伴ってもART・天井G数等が保持されることは確認済み。据え置き専用の別処理を明示した資料は今回未回収。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ONだけのART残G、天井G数、高確/CZ状態の本機固有処理は直接資料未確定。
  gameCounterReset: NOT_RESET_ON_SETTING_CHANGE_CONFIRMED。1500G天井までのゲーム数は設定変更後もリセットされない。
  ceilingAfterReset: NO_SHORTENING / CEILING_COUNTER_CARRYOVER_CONFIRMED。通常時1500Gで次回ボーナスまでART。設定変更でも天井までのG数保持。
  modeAfterReset: ALL_STATES_NOT_RESET_ON_SETTING_CHANGE_AS_PUBLISHED。独立した朝一専用モード振分は確認なし。
  stateAfterReset: ART_AND_OTHER_STATES_PRESERVED_ON_SETTING_CHANGE_CONFIRMED。ボーナス後は高確スタートだが、これはボーナス契機であり設定変更専用恩恵ではない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AS_RESET_SPECIFIC。設定変更しても天井G数/ART等が消えないため、前日ハマリやART状態が残る場合は客側には据え置き同等の価値を持ち得るが、期待値は推定しない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ、天井G数挙動等を用いた本機固有の変更判別資料は今回未確定。設定変更そのものが内部状態を消さないため、内部挙動だけで変更/据え置きを単純判別できるとはしない。
  numericResetData:
    normalCeiling: 1500G通常消化後に次回ボーナスまで継続ART
    resetSpecificCeiling: SAME_COUNTER_CARRIED_OVER_ON_SETTING_CHANGE
    resetModeDistribution: NONE_PUBLISHED_CONFIRMED
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: CORE_RESET_BEHAVIOR_CONFIRMED_SETTING_CHANGE_PRESERVES_ART_AND_CEILING_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - payoutRate: P-WORLD/パチビー/pacnk系列は94.7〜109.7%（pacnk精密94.72〜109.74%）だが、パチマガスロマガは97.35〜110.90%。攻略手順・算出条件差の可能性はあるが平均せず両系列保持。
  - netIncreaseLabel: P-WORLD/パチビーのタイプ欄は約+0.7枚/G、本文ART説明は約+0.8枚/G。丸め/表現差の可能性があるため平均化しない。
  - releaseDateDefinition: グリーンべると=2009-02-22納品開始済み / パチビー=2009-02-24導入日。物流開始/ホール導入定義差として保持。
  - retrospectiveContaminationWarning: 5号機クロニクル現行ページにはBIG約204枚/REG約48枚、別ART名等の本機既知仕様と整合しない記述があり、資料汚染/別仕様混入疑いとして不採用。

missingFields:
  - 単純電源OFF→ON時のART残G・1500G天井カウンタ・高確/CZ状態の直接資料
  - 据え置き専用の別処理を明示する直接資料（設定変更でも全状態保持は確認済み）
  - ガックン/初期出目/ランプ等による設定変更判別の本機固有情報
  - 設定変更専用の朝一当選率・モード振分等の公開数値

sources:
  - url: https://web-greenbelt.jp/00002993/
    title: 麻雀ゲームの金字塔がパチスロで登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: メーシー販売ブランド、スーパーリアル麻雀1、ART搭載、2009-02-22納品開始済み。
  - url: https://www.p-world.co.jp/machine/database/5478
    title: スーパーリアル麻雀 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: BIG約308枚、REG約105枚、ART約+0.8枚/G、通常1500G天井ART、設定変更後もART/天井G数など全状態非リセット、ボーナス後高確。
  - url: https://www.pachibee.jp/machines/index/209080001
    title: スーパーリアル麻雀 / パチビー
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 2009-02-24導入日、BIG/REG、ART、天井、設定変更後全状態非リセット、機械割丸め値、設定別ボーナス確率。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/h.php
    title: スーパーリアル麻雀 ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/4/6/HのBIG・REG・合算、PAYOUT 97.35〜110.90%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/c.php
    title: スーパーリアル麻雀 小役・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別50枚ベース46.26〜48.73G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/a.php
    title: スーパーリアル麻雀 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: A+ART、BIG430枚超払出終了/約308枚、REG140枚超払出終了/約105枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/d.php
    title: スーパーリアル麻雀 通常時の打ち方 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 逆押し攻略時にPAYOUTが平均1.7%上昇する旨。PAYOUT競合の定義検討補助。
  - url: https://pacnk.com/slot/tools/sh_supariarumajan.html
    title: スーパーリアル麻雀 設定判別ツール
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SINGLE
    usedFor: BIG/REGおよび市場系列PAYOUT精密値94.72/98.58/104.69/109.74%の補助照合。

researchNotes:
  - LATEST_HANDOFF正本345件地点（2009-02-22 ラブゲッCHU）から継続。
  - 直前handoffではスーパーリアル麻雀を2/24候補としていたが、当時グリーンべるとで2/22納品開始済みを確認したため同日群の時系列漏れとして先に処理。
  - GitHubコード検索で既存レコード未収録を確認。
  - resetBehaviorは「設定変更/朝一/据え置き/電源OFF/ガックン/天井/ART」へ検索語を変え、P-WORLD・パチビー・当時解析・回顧資料を横断。設定変更でもART/天井G数を含む全状態がリセットされない点は明確に確認できた。電断単独と客側変更判別は十分な再探索後も直接根拠未確定のためUNVERIFIED_AFTER_RESEARCH。
