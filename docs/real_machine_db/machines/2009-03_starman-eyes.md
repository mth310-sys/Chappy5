# スターマンアイズ

machineName: スターマンアイズ
formalModelName: スターマンWA
inspectionNumber: 8S1161
manufacturer: SANKO
releaseDate: CONFLICT: 2009-03 / 2009-05
releaseDatePrecision: CONFLICT_MONTH
releaseDateNote: 2009-02-19付グリーンべるとは「納品は3月下旬が予定」と報道し、pacnkも2009年3月導入と整理。一方P-WORLDは導入開始を2009年05月と掲載する。納品予定と実導入時期の差である可能性はあるが、確認できる資料だけでは一本化せずCONFLICTとして保持する。
generation: 5号機
systemType: ノーマル / 純Aタイプ / RT非搭載 / 告知モード選択式
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pworld:
    setting1: 96.1%
    setting2: 98.6%
    setting3: 101.1%
    setting4: 103.5%
    setting5: 106.2%
    setting6: 110.0%
  pacnk:
    setting1: 96.10%
    setting2: 98.60%
    setting3: 101.10%
    setting4: 103.50%
    setting5: 106.20%
    setting6: 110.00%
  status: ANALYSIS_HIGH_CROSSCHECKED_NO_CONFLICT

initialHitBySetting:
  big:
    setting1: 1/309.1
    setting2: 1/292.5
    setting3: 1/277.6
    setting4: 1/264.2
    setting5: 1/252.0
    setting6: 1/240.9
  reg:
    setting1: 1/409.6
    setting2: 1/399.6
    setting3: 1/390.0
    setting4: 1/381.0
    setting5: 1/372.3
    setting6: 1/364.0
  bonusCombined:
    setting1: 1/176.16
    setting2: 1/168.88
    setting3: 1/162.16
    setting4: 1/156.01
    setting5: 1/150.27
    setting6: 1/144.96
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLDとpacnkで設定別BIG/REG/機械割が一致。合算はP-WORLD精密値を採用。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 機種名/SANKO/型式名に「50枚/1000円/1k/ベース/コイン持ち」を組み替えて再探索したが比較可能な本機固有数値を確定できず。P-WORLDの「コイン持ち良し」という定性的分類から数値を推定しない。

netIncrease:
  value: NOT_APPLICABLE
  note: 当時業界記事がRT非搭載の純Aタイプと明記し、P-WORLDも付加機能なしのノーマルタイプとしている。

basicPayout:
  big: 約312枚
  reg: 約104枚
  status: INDUSTRY_AND_DATABASE_CROSSCHECKED

modeSpecificMinimumData:
  - SANKOの業界新規参入第1弾。SANKO製造、Adii総発売元。
  - RTを搭載しない純Aタイプ。
  - MAXボタン長押しで「演出モード」と「告知モード（完全告知）」をプレイヤーが切替可能。これは演出選択であり、朝一リセット用の内部モードとして扱わない。
  - チェリー成立時は約25%、スイカ成立時は約80%でボーナス期待。当時業界記事とも整合。
  - 通常ゲーム数天井、RT/ART/AT/CZ、ゲーム数管理当選は確認できない。

resetBehavior:
  settingChangeBehavior: NO_SPECIAL_BEHAVIOR_CONFIRMED_AFTER_RESEARCH。設定変更時専用の天井・RT/ART・内部モード・朝一当選恩恵を示す本機固有資料は確認できず。ノーマル機一般論からガックン等を補完しない。
  carryOverBehavior: NOT_APPLICABLE_FOR_GAME_COUNT_MODE_CEILING。通常ゲーム数天井・ゲーム数管理・RT/ART状態を持つ構造は確認できない。電気的なリール/ランプ状態は別項目として未確認。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のリール初期位置、ボーナスランプ、初期出目など本機固有挙動は直接確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_OR_GAME_COUNT_MANAGEMENT_CONFIRMED
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_NO_INTERNAL_GAME_MODE_SYSTEM_CONFIRMED_FOR_YARDSTICK_SCOPE
  stateAfterReset: NOT_APPLICABLE_NO_INTERNAL_STATE_SYSTEM_CONFIRMED_FOR_YARDSTICK_SCOPE
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。機種名/SANKO/型式名と「設定変更/リセット/朝一/据え置き/ガックン/初期出目/電源」を組み替えて再探索したが、本機固有の変更判別根拠を確認できず。
  numericResetData:
    normalCeiling: NOT_APPLICABLE
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE
    resetStateDistribution: NOT_APPLICABLE
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_BASE_UNVERIFIED_WITH_RELEASE_MONTH_CONFLICT
resetBehaviorQA: COMPLETE_FOR_YARDSTICK_SCOPE_WITH_POWER_CYCLE_AND_DETECTION_UNVERIFIED

conflicts:
  - releaseTiming: 2009-02-19当時グリーンべると「3月下旬納品予定」およびpacnk「2009年3月導入」に対し、P-WORLDは「導入開始2009年05月」。予定納品と実導入の差の可能性を含むが、推測で統合せずCONFLICT。

missingFields:
  - 50枚あたりゲーム数/1000円あたりゲーム数の比較可能な直接値
  - 単純電源OFF→ON時の本機固有挙動
  - ガックン/初期出目等による設定変更判別
  - 導入月CONFLICTを解消できる一次/当時ホール導入実績資料

sources:
  - url: https://web-greenbelt.jp/00006522/
    title: AdiiとSANKOが新規参入第1弾パチスロを発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: SANKO製造/Adii総発売元、純Aタイプ、RT非搭載、BIG約312枚、REG約104枚、演出/告知モード、3月下旬納品予定。
  - url: https://www.p-world.co.jp/machine/database/5487
    title: スターマンアイズ / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 型式名スターマンWA、検定番号8S1161、設定別BIG/REG/合算/機械割、基本獲得枚数、付加機能なし、導入開始2009年05月。
  - url: https://pacnk.com/slot/tools/sh_starmaneyes.html
    title: スターマンアイズ 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 2009年3月導入、設定別BIG/REG/PAYOUTのクロスチェック。
