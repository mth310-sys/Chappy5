# スペシャルオアシス

machineName: スペシャルオアシス
manufacturer: パイオニア
releaseDate: 2009-02-02
releaseDatePrecision: CONTEMPORARY_INDUSTRY_INTRODUCTION_SCHEDULED_DATE_WITH_OFFICIAL_AND_DATABASE_MONTH_CONFLICT
modelNumber: オアシスS
approvalNumber: 8S0999
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primarySimulation:
    setting1: 96.84%
    setting2: 99.23%
    setting3: 101.67%
    setting4: 104.25%
    setting5: 106.90%
    setting6: 109.62%
  secondaryMarketRounded:
    setting1: 96%
    setting2: 98%
    setting3: 101%
    setting4: 104%
    setting5: 107%
    setting6: 110%
  status: CONFLICT_DEFINITION_OR_ROUNDING_NO_AVERAGE
  note: パチマガスロマガはシミュレート値、P-WORLDは整数の市場掲載値。設定2では1.23pt差があるため単純な丸めと断定せず、算出条件/定義差を含むCONFLICTとして平均化しない。

initialHitBySetting:
  BIG:
    setting1: 1/303.41
    setting2: 1/289.98
    setting3: 1/277.69
    setting4: 1/266.41
    setting5: 1/256.00
    setting6: 1/246.38
  REG:
    setting1: 1/661.98
    setting2: 1/606.81
    setting3: 1/555.39
    setting4: 1/512.00
    setting5: 1/474.90
    setting6: 1/442.81
  bonusCombined:
    setting1: 1/208.05
    setting2: 1/196.22
    setting3: 1/185.13
    setting4: 1/175.23
    setting5: 1/166.34
    setting6: 1/158.30
  status: ANALYSIS_HIGH_WITH_INDUSTRY_ROUNDED_CROSSCHECK
  note: パチマガスロマガの精密値を主値とし、P-WORLDの丸め値（BIG約1/303〜1/246、REG約1/662〜1/442、合算約1/207.9〜1/158）で方向性を照合。丸め系列を精密値へ混ぜない。

baseGamesPer50:
  setting1: 37.00G/50枚
  setting2: 37.10G/50枚
  setting3: 37.20G/50枚
  setting4: 37.40G/50枚
  setting5: 37.65G/50枚
  setting6: 38.00G/50枚
  status: ANALYSIS_HIGH

netIncrease:
  value: NOT_APPLICABLE
  note: 出玉獲得用RT/ART/ATを主軸としないノーマルAタイプ。物差し用netIncreaseはN/A。

basicPayout:
  BIG: 約312枚（345枚超払い出しで終了）
  REG:
    regulatedEndCondition: 165枚超払い出しで終了
    sourceA: 約156枚（P-WORLD）
    sourceB: 約168枚（パチマガスロマガ基本システム）
    status: CONFLICT_NO_AVERAGE
  note: BIGはP-WORLDとパチマガ系で約312枚が整合。REG純増は約156枚/約168枚で直接競合するため平均化せず両方保持。

modeSpecificMinimumData:
  - ハイビスカス点滅でボーナス確定となる完全告知ノーマルAタイプ。
  - BIG偏重型で、通常時にはボーナスと小役の同時成立契機がある。
  - 出玉獲得用RT/ART/AT、通常ゲーム数到達型天井、周期CZ、通常時のモード管理型初当たりは今回確認できず。

resetBehavior:
  settingChangeBehavior: NO_MATERIAL_RESET_SYSTEM_CONFIRMED_BY_ARCHITECTURE_WITH_DETECTION_DETAIL_UNVERIFIED。公開資料でノーマルAタイプ/ボーナス主体を確認し、通常天井・ゲーム数管理当選・ART/AT・通常モード管理を確認しないため、設定変更によって朝一狙い価値を生む主要なゲーム数/モード/ARTリセット対象は該当なし。ただし本機固有のランプ/リール等による変更判別挙動は未確定。
  carryOverBehavior: NOT_APPLICABLE_FOR_CEILING_MODE_ART。据え置きで引き継ぐ通常ゲーム数天井・モード・ART/ATを確認しない。表示/ランプ等の外観挙動は別途未確定。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の本機固有リール位置・告知/星ランプ等の外観挙動を直接説明する資料を回収できず。一般的な5号機ノーマル機の挙動から推測しない。
  gameCounterReset: NOT_APPLICABLE。通常ゲーム数天井・ゲーム数管理当選を確認しない。
  ceilingAfterReset: NOT_APPLICABLE。通常天井および設定変更専用短縮天井を確認しない。
  modeAfterReset: NOT_APPLICABLE。通常時のモード管理型当選システムを確認しない。
  stateAfterReset: NOT_APPLICABLE_FOR_HALL_MORNING_VALUE。朝一価値を左右する高確/ART/AT状態管理を確認しない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井、高確スタート、RT/ART/CZ優遇等は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。`スペシャルオアシス / オアシスS / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 星点灯 / ランプ` を組み替え、メーカー公式、P-WORLD、パチマガスロマガ当時解析、旧攻略索引、回顧資料を横断。パチマガ解析INDEXに「攻め時・ヤメ時・設定変更時」と「BIG後・星点灯の秘密」の項目存在までは確認できるが、具体条件本文を今回回収できず。P-WORLD掲示板の「設定変更後の最初のBIG後に星が点く」という利用者投稿は一次/解析根拠ではないため採用しない。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: SUBSTANTIAL_ARCHITECTURAL_NA_WITH_DETECTION_AND_POWER_CYCLE_UNVERIFIED

conflicts:
  - field: releaseDate
    sourceA: パイオニア公式「2009年1月発売」/ P-WORLD「導入開始 2009年01月」
    sourceB: 2009-01-20掲載Playgraph記事「導入日は2月2日予定」
    handling: CONFLICT_NO_AVERAGE。時系列キューの具体日アンカーには当時業界記事の2009-02-02予定を使用するが、公式/P-WORLDの1月表記も削除せず保持。全国初設置の確定実日とは断定しない。
  - field: payoutRateBySetting
    sourceA: パチマガスロマガ シミュレート 96.84/99.23/101.67/104.25/106.90/109.62%
    sourceB: P-WORLD 市場掲載 96/98/101/104/107/110%
    handling: CONFLICT_DEFINITION_OR_ROUNDING_NO_AVERAGE。
  - field: REG基本獲得枚数
    sourceA: P-WORLD 約156枚
    sourceB: パチマガスロマガ 約168枚
    handling: CONFLICT_NO_AVERAGE。165枚超払い出し終了条件は別定義として保持。

missingFields:
  - 設定変更/据え置き/電源OFF→ON時の本機固有リール・ランプ等の外観挙動
  - 「星点灯」を含む設定変更判別の具体条件を示す高信頼本文
  - 2009-02-02「予定」と公式/P-WORLD 2009-01の導入時期競合を解消する全国初設置の確定実日
  - REG純増約156枚/約168枚の資料競合解消

sources:
  - url: https://www.slot-pioneer.co.jp/products/2009.html
    title: パチスロ機種情報2001年~2009年 / 株式会社パイオニア
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: メーカー、スペシャルオアシス、2009年1月発売。
  - url: https://p-mans.blogspot.com/2009/01/
    title: Pマンズ 2009年1月（Playgraph記事アーカイブ）
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY_ARCHIVE
    usedFor: 2009-01-08内覧会、導入日は2009-02-02予定という当時業界記述。
  - url: https://www.p-world.co.jp/machine/database/5427
    title: スペシャルオアシス / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: パイオニア、5号機ノーマル/完全告知、型式オアシスS、検定8S0999、2009年01月導入開始、BIG約312枚/REG約156枚、設定別丸めボーナス確率・機械割。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/a.php
    title: スペシャルオアシス 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ノーマルAタイプ、完全告知、同時成立、BIG/REG払い出し終了条件・基本獲得性能。REG約168枚表記はP-WORLDと競合として保持。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/h.php
    title: スペシャルオアシス ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算の精密値、シミュレート機械割96.84〜109.62%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/c.php
    title: スペシャルオアシス 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別37.00〜38.00G/50枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/pioneer_slot_88.php
    title: スペシャルオアシス 解析INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX
    usedFor: 「攻め時・ヤメ時・設定変更時」「BIG後・星点灯の秘密」解析項目の存在確認。本文条件は未回収のためリセット挙動へ推測転記しない。

researchNotes:
  - LATEST_HANDOFF正本341件地点（2009-01-25 パチスロ「KELOT」）から継続。
  - 2009-01-26〜31を導入/納品/発売/新台/型式/メーカーの具体日で再監査。1/26「スクール・ウォーズ」発表、1/28「ダッシュ勝平2X」内覧会などは後月導入であり、発表イベントを1月導入として混入させない。安全に追加できる1/26〜31具体日機は今回確定せず、1月末を閉じた。
  - LATEST_HANDOFFの月単位候補からスペシャルオアシスを再探索。公式/P-WORLDは2009年1月、当時Playgraphは導入日2月2日予定で競合するため、具体日キュー上は2/2へ置きつつ競合を明記。
  - 設定変更/朝一/星点灯の検索では解析INDEXの項目存在まで回収したが本文が得られず、掲示板情報を解析値へ昇格させなかった。
  - 次は2009-02-02同日群および2月初頭の未処理機を具体日監査し、月単位候補（甘ぴかっ、アイムマジック、がんばれ満月姫!、バケーション、マキシマムインパクト等）の正しい導入位置も継続確認する。
