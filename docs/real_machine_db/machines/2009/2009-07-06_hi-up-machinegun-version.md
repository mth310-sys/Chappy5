# ハイアップマシンガンバージョン

machineName: ハイアップマシンガンバージョン
formalModelName: ハイアップマシンガンバージョン
inspectionNumber: 9S0348
manufacturer: タイヨー
releaseDate: 2009-07-06
releaseDatePrecision: OLD_CALENDAR_EXACT
releaseDateNote: ALL7の2009年7月導入予定一覧で2009-07-06。P-WORLDは2009年07月導入、グリーンべると2009-07-03記事では同機の新パネル納品を7/20からとしており、本体は既導入機として扱われている。
generation: 5号機
systemType: ボーナス+ART / CZ / 押し順ナビ
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  secondary_pacnk:
    setting1: 96.50%
    setting2: 98.20%
    setting3: 100.10%
    setting4: 103.50%
    setting5: 108.50%
    setting6: 113.20%
  status: ANALYSIS_SINGLE
  note: pacnkの設定判別DBで取得。旧パチマガスロマガのPAYOUT欄は「現在調査中」、P-WORLD現存ページも機械割数値を表示していないため、今回別系列での直接照合はできていない。

initialHitBySetting:
  big:
    setting1: 1/992.97
    setting2: 1/992.97
    setting3: 1/992.97
    setting4: 1/992.97
    setting5: 1/992.97
    setting6: 1/1092.27
  reg:
    setting1: 1/99.90
    setting2: 1/99.90
    setting3: 1/97.81
    setting4: 1/97.81
    setting5: 1/95.81
    setting6: 1/93.09
  czHiUpGame:
    setting1: 1/77.7
    setting2: 1/75.0
    setting3: 1/77.7
    setting4: 1/75.0
    setting5: 1/77.7
    setting6: 1/70.0
  bigRegCzCombined:
    setting1: 1/41.9
    setting2: 1/41.1
    setting3: 1/41.5
    setting4: 1/40.7
    setting5: 1/41.1
    setting6: 1/38.9
  status: OLD_ANALYSIS_HIGH_CROSSCHECKED
  note: BIG/REG/CZはP-WORLDとパチマガスロマガ旧解析で一致。pacnkでもREG/CZを照合。P-WORLDの「合算」1/41.9〜1/38.9はBIG+REG+CZの複合イベント値であり、BIG+REGのみのボーナス合算とは混同しない。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名/HI-UP表記/タイヨー/9S0348と「50枚」「1000円」「ベース」「コイン持ち」を組み替え、旧解析・古いDBを再探索したが比較可能な本機固有値を直接確定できず。

netIncrease:
  primary_old_analysis: 約+2.0枚/G
  secondary_pworld: 約+1.7枚/G
  status: CONFLICT
  note: パチマガスロマガ旧解析はART「マシンガンラッシュ」純増2枚/1G、P-WORLD機種属性は1Gあたり約1.7枚増加。定義差/解析更新差を解消できないため平均せず両方保持。

basicPayout:
  big: 約90枚
  reg: 約18枚
  artMachinegunRush:
    continuationUnit: 9枚役ナビ81回成立まで
    minimumNetPayout: 約480枚以上
    averageExpectedNetPayout: 約700枚以上
  status: INDUSTRY_AND_ANALYSIS_HIGH
  note: BIG/REGはP-WORLD・パチマガ旧解析で一致。ARTはパチマガ旧解析で9枚役ナビ81回成立まで・最低純増480枚、グリーンべると2009-07-03記事でも純増約480枚確定・平均約700枚以上と照合。

modeSpecificMinimumData:
  - 通常時のCZ「ハイアップゲーム」は特殊リプレイ成立で突入し、設定別突入率は1/77.7〜1/70.0。
  - ART「マシンガンラッシュ」は9枚役の押し順をナビし、9枚役ナビ81回成立まで継続。ART終了後は18Gの「ハイアップゾーン」へ移行し、引き戻し機会を持つ。
  - ハイアップゲーム(CZ)またはボーナス間で333G以上ハマった後、次回CZが「スーパーハイアップゲーム」となりART期待度が上昇する。ボーナスが先に成立した場合は無効。即ART/ボーナス確定の通常ゲーム数天井とは区別する。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガ旧解析INDEXに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を回収できず、設定変更時の333G進捗/CZ/ART状態処理を推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。333G救済条件の進捗、CZ/ART残状態が据え置き時に引き継がれるかを本機固有の直接資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の333G進捗、CZ/ART残状態、初期出目等の直接資料なし。
  gameCounterReset: UNVERIFIED_333G_RELIEF_COUNTER_AFTER_RESEARCH
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。333G後の次回CZ優遇という救済機能自体は確認済みだが、設定変更時の短縮/リセット/引継ぎは未確定。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時の朝一専用モード/リセット専用モード振り分けを示す直接資料なし。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/ART/ハイアップゾーン等の状態処理を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ/表示、333G挙動等による本機固有の設定変更/据え置き判別根拠を十分な再探索後も確認できず。
  numericResetData:
    resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
    gameCountAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_NET_INCREASE_CONFLICT
resetBehaviorQA: COMPLETE_RESEARCH_PASS_RESET_DETAILS_UNVERIFIED

conflicts:
  - netIncrease: パチマガスロマガ旧解析 約+2.0枚/G vs P-WORLD 約+1.7枚/G。平均せず保持。

missingFields:
  - 50枚あたりゲーム数/ベース
  - 機械割96.5〜113.2%系列の別ソース直接照合
  - 設定変更/据え置き/電源OFF→ON時の333G救済進捗処理
  - 設定変更時のCZ/ART/ハイアップゾーン状態処理
  - ガックン/初期出目/表示等による変更判別
  - 設定変更専用の公開朝一数値

sources:
  - url: https://www.all7.jp/plans/index/2009/07
    title: 2009年7月 新台導入予定一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY_CALENDAR
    usedFor: タイヨー、2009-07-06導入予定、同日群確認。
  - url: https://www.p-world.co.jp/machine/database/5591
    title: ハイアップマシンガンバージョン / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: タイヨー、5号機ART、検定番号9S0348、型式名、2009年07月導入、BIG/REG/CZ確率、複合合算、BIG約90枚/REG約18枚、333G救済、ART約+1.7枚/G、最低480枚・平均700枚。
  - url: https://web-greenbelt.jp/00003235/
    title: 『HI-UPマシンガンバージョン』に新パネル登場 / グリーンべると 2009-07-03
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: タイヨー、ARTの9枚役押し順ナビ、純増約480枚確定、平均約700枚以上、新パネル7/20納品開始。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/68/a.php
    title: ハイアップマシンガンバージョン 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: ART純増約2枚/G、9枚役ナビ81回、最低480枚、BIG約90枚/REG約18枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/68/h.php
    title: ハイアップマシンガンバージョン ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 設定別BIG/REG確率、PAYOUT欄が当時「現在調査中」であること。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/68/taiyo_slot_68.php
    title: ハイアップマシンガンバージョン 攻略INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」専用項目の存在確認。本文未回収のためresetBehaviorは推測しない。
  - url: https://pacnk.com/slot/tools/sh_hiup.html
    title: ハイアップマシンガンバージョン 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SECONDARY
    usedFor: 設定別REG/CZ照合、機械割96.50〜113.20%、333G救済、ART後18Gハイアップゾーン。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、旧INDEX、LATEST_HANDOFF、386レコード、直近コミットを再取得。LATEST_HANDOFFの386件地点を正本として継続。
  - repoコード検索で本機未登録を確認し、2009-07-06同日群の387として追加。
  - 欠損判定前に「ハイアップマシンガンバージョン/HI-UPマシンガンバージョン/ハイアップマシンガン/タイヨー/9S0348」と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/333G/天井短縮/モード/CZ/ART/ガックン/50枚/1000円/ベース/コイン持ちを組み替えて再探索。
  - ALL7、P-WORLD、グリーンべると、パチマガスロマガ旧解析、pacnk、当時検定情報/回顧資料を横断。
  - 333Gは即ART確定天井ではなく「次回CZがスーパーハイアップゲーム化する救済条件」として分離保存。
