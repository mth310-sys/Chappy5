# スーパーアロハ

machineName: スーパーアロハ
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: パイオニア
releaseDate: 2009-05-11
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_EXACT_DATE
releaseDateNote: グリーンべるとが2009-04-03付記事で「納品は5月11日からスタートの予定」と明記。パイオニア公式は2009年5月発売、Pマンズ（Playgraph転載）は25φ機として2009-04-01内覧会を報道しており整合するため、本DBでは具体納品予定日2009-05-11を主値とする。
generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知 / 25φ
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  manufacturerPublishedViaPachimaga:
    setting1: 96%
    setting2: 98%
    setting3: 100%
    setting4: 103%
    setting5: 106%
    setting6: 110%
  pworld:
    setting1: 96%
    setting2: 98%
    setting3: 100%
    setting4: 103%
    setting5: 106%
    setting6: 110%
  pacnk:
    setting1: 96.00%
    setting2: 98.00%
    setting3: 100.00%
    setting4: 103.00%
    setting5: 106.00%
    setting6: 110.00%
  status: CROSSCHECKED_NO_CONFLICT

initialHitBySetting:
  big:
    setting1: 1/297
    setting2: 1/284
    setting3: 1/273
    setting4: 1/262
    setting5: 1/252
    setting6: 1/242
  reg:
    setting1: 1/546
    setting2: 1/504
    setting3: 1/468
    setting4: 1/436
    setting5: 1/409
    setting6: 1/385
  bonusCombined:
    setting1: 1/192.4
    setting2: 1/181.6
    setting3: 1/172.4
    setting4: 1/163.7
    setting5: 1/155.9
    setting6: 1/148.6
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: BIG/REGはグリーンべると、P-WORLD、パチマガスロマガ、pacnkで整合。合算はP-WORLD/pacnkの精密表示を採用し、パチマガの整数丸め表示とも整合する。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名/メーカー/25φに「50枚/1000円/千円/ベース/コイン持ち/1k」を組み替えて再探索。パチマガスロマガ当時ページの「1000円あたりのゲーム数」は明示的に「現在調査中」。比較可能な直接値を確定できないため小役確率から逆算しない。

netIncrease:
  value: NOT_APPLICABLE
  note: RT/ART/AT非搭載のボーナス主体ノーマル機。

basicPayout:
  big: 約312枚
  reg: 約130枚（通常消化目安。REG中にスイカ1回獲得で+12枚、パチマガではMAX142枚獲得と記載）
  status: INDUSTRY_ANALYSIS_CROSSCHECKED

modeSpecificMinimumData:
  - ボーナスのみで出玉を増やすAタイプ。ハイビスカス点灯でボーナス確定。
  - ボーナス成立後、次ゲームのリール回転中にMAX BETを叩き「ティキティキランプ」が点灯すればBIG確定。Playgraph系当時記事ではBIG時の約1/2で点灯と説明。
  - Pマンズ（Playgraph転載）が25φ機と明記。パイオニア現行公式2009年一覧には「スーパーアロハ」のみ掲載され、独立した「スーパーアロハ-30」は確認できないため本レコードを25φとして扱い、名称だけで30φ派生を作らない。
  - 通常ゲーム数天井、RT/ART、ゲーム数管理当選、通常時モード管理は確認できない。

resetBehavior:
  settingChangeBehavior: NO_SPECIAL_BEHAVIOR_CONFIRMED_AFTER_RESEARCH。ノーマルAタイプで、設定変更時専用の天井・モード・状態恩恵を示す直接資料は確認できず。
  carryOverBehavior: NOT_APPLICABLE_FOR_GAME_COUNT_MODE_CEILING。通常ゲーム数天井・ゲーム数管理・ART/RT状態を持つ構造は確認できない。リール初期位置や告知ランプ等の電気的挙動は別項目として未確認。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のリール初期位置、告知ランプ、初期出目など本機固有挙動を直接確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_OR_GAME_COUNT_MANAGEMENT_CONFIRMED
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_NO_NORMAL_GAME_MODE_SYSTEM_CONFIRMED_FOR_YARDSTICK_SCOPE
  stateAfterReset: NOT_APPLICABLE_NO_INTERNAL_STATE_SYSTEM_CONFIRMED_FOR_YARDSTICK_SCOPE
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。スーパーアロハ/パイオニア/25φと「設定変更/リセット/朝一/据え置き/ガックン/初期出目/電源OFF」を組み替えて再探索したが、本機固有の設定変更判別根拠は確認できず。
  numericResetData:
    normalCeiling: NOT_APPLICABLE
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE
    resetStateDistribution: NOT_APPLICABLE
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_BASE_AND_FORMAL_MODEL_UNVERIFIED
resetBehaviorQA: COMPLETE_FOR_YARDSTICK_SCOPE_WITH_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - possibleNamePollution: 後年の回顧系資料に「スーパーアロハ/-30」と併記する例があるが、当時Playgraph系は本機を25φ機と明記し、パイオニア公式2009年製品一覧では独立した-30機を確認できない。独立30φ機は現時点で採用しない。

missingFields:
  - 正式型式名/検定番号の直接資料
  - 50枚あたりゲーム数/1000円あたりゲーム数の直接値
  - 単純電源OFF→ON時のリール/告知ランプ/初期出目等の本機固有挙動
  - ガックン/初期出目等による設定変更判別

sources:
  - url: https://www.slot-pioneer.co.jp/products/2009.html
    title: パチスロ機種情報2001年~2009年 / 株式会社パイオニア
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: メーカー、2009年5月発売、公式製品一覧上の名称確認。
  - url: https://web-greenbelt.jp/00003100/
    title: ボタン叩いてフラグ判別『スーパーアロハ』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2009-05-11納品開始予定、Aタイプ、BIG/REG/合算/出玉率レンジ、BIG約312枚、REG約130枚、ティキティキチャレンジ。
  - url: https://p-mans.blogspot.com/2009/04/
    title: パイオニアが「スーパーアロハ」の内覧会 / Pマンズ（Playgraph転載）
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY
    usedFor: 25φ機であること、2009-04-01内覧会、ティキティキランプがBIG時約1/2との当時説明。
  - url: https://www.p-world.co.jp/machine/database/5523
    title: スーパーアロハ / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: ノーマル/完全告知、設定別BIG/合算/機械割、BIG約312枚、REG約130枚、ボーナス主体構造。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/90/h.php
    title: スーパーアロハ ボーナス確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 設定別BIG/REG/合算、メーカー発表PAYOUT 96/98/100/103/106/110%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/90/c.php
    title: スーパーアロハ 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 1000円あたりゲーム数が当時「現在調査中」であることの確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/90/e.php
    title: スーパーアロハ ボーナス中の打ち方 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: REG中スイカ1回獲得で+12枚、MAX142枚獲得。
  - url: https://pacnk.com/slot/tools/sh_spaloha.html
    title: スーパーアロハ 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 設定別BIG/REG/PAYOUT、合算のクロスチェック。
