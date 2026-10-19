# 夢花月

machineName: 夢花月
formalModelName: ユメカゲツD
formalModelNameStatus: INDUSTRY_DATABASE
manufacturer: 山佐（YAMASA）
releaseDate: 2009-04-05
releaseDatePrecision: CONTEMPORARY_SHIPMENT_START_SCHEDULE
releaseDateNote: 2009-03-26付グリーンべるとは「納品は4月5日から開始される予定」と記載。K-Naviはホール導入開始を2009-04-06、山佐公式は稼働時期を2009年4月とする。本DBでは物流上の最古具体日2009-04-05を主値とし、ホール導入開始日との差を保持する。
generation: 5号機
systemType: A+ART / 完走型ART / チャンスRT経由ART抽選
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primaryIndustryDatabase:
    setting1: 97.1%
    setting2: 99.4%
    setting3: 102.2%
    setting4: 104.8%
    setting5: 107.4%
    setting6: 110.7%
  alternateOldAnalysis:
    setting1: 97.2%
    setting2: 99.2%
    setting3: 102.2%
    setting4: 104.6%
    setting5: 107.4%
    setting6: 110.0%
  status: CONFLICT
  note: P-WORLDの系列と旧解析整理資料の系列が設定1/2/4/6で一致しない。平均化せず双方を保持。後年ゲームセンター資料には97.2/99.2/102.2/104.6/107.4/110.7%というさらに別の丸め系列も存在するため、P-WORLDを主系列とし競合注記を残す。

initialHitBySetting:
  big:
    setting1: 1/1524.1
    setting2: 1/1394.4
    setting3: 1/1285.0
    setting4: 1/1191.6
    setting5: 1/1110.78
    setting6: 1/993.0
    status: INDUSTRY_DATABASE_CROSSCHECKED_WITH_OLD_ANALYSIS_ROUNDING
  artFirstHit:
    setting1: 1/195.2
    setting2: 1/181.7
    setting3: 1/170.2
    setting4: 1/159.2
    setting5: 1/154.0
    setting6: 1/118.4
    status: ANALYSIS_SINGLE_CROSSCHECKED_BY_CONTEMPORARY_REPOSTS
    note: 複数の旧資料で同一系列を確認できるが、メーカー公表表ではないため高信頼一次値には格上げしない。
  combinedBigAndArtReference:
    setting1: 1/173.0
    setting2: 1/160.7
    setting3: 1/150.3
    setting4: 1/140.4
    setting5: 1/135.2
    setting6: 1/105.8
    status: ANALYSIS_SINGLE
    note: 旧資料の「ボーナス合成」表記だが、実質BIGとART初当りを合成した比較値としてのみ保持。通常ボーナス合算と誤読しない。

baseGamesPer50:
  setting1: 29.88G
  setting2: 29.87G
  setting3: 29.87G
  setting4: 29.86G
  setting5: 29.86G
  setting6: 29.85G
  status: ANALYSIS_HIGH
  note: パチマガスロマガの「1000円あたりのゲーム数」直接値。50枚貸し相当の物差し値として保持。

netIncrease:
  kagetsuRanbu: 約+1.5枚/G
  status: OFFICIAL_AND_INDUSTRY_CROSSCHECKED
  note: 山佐公式、当時グリーンべると、P-WORLD、K-Naviで約1.5枚/Gが一致。

basicPayout:
  yumeKagetsuBig: 約210枚
  artGameCounts: 33 / 77 / 111 / 333 / 555 / 777 / 999G
  bigGuaranteedArt: 77G以上
  big111PlusSelectionRate: 約85%
  status: OFFICIAL_AND_INDUSTRY_CROSSCHECKED
  note: BIGは299枚超払い出しで終了し実獲得約210枚。BIG後ARTは77G以上、約85%で111G以上。ARTの999Gは天井ではなく1回の継続G数上限。

modeSpecificMinimumData:
  - ART「花月乱舞」は1Gあたり純増約1.5枚の完走型ARTで、33/77/111/333/555/777/999Gの7種類。
  - BIG後はART確定、77G以上。約85%で111G以上。
  - 通常時は特殊リプレイを契機に「こいこいチャンス」「うぐいすチャンス」へ移行し、ART抽選を行う。
  - 通常時には低確/高確等の状態差があり、液晶背景で期待度を示唆。夜背景は高確確定とする旧解析あり。
  - ART中は上乗せ抽選があり、規定G数消化後に再カウントアップして次ARTへ接続する場合がある。
  - 通常時の変則押しにはペナルティがあり、ART抽選やBIG後ART継続G数などに影響するため、通常性能比較では順押し前提の値を使用する。

resetBehavior:
  settingChangeBehavior: ANALYSIS_SINGLE_FINDING。旧実戦/解析資料の独自調査では、設定変更時の液晶開始ステージは変更前の状態を参照して変化する。変更前が朝/夕方なら夕方スタート、ART中/夜なら夕方または夜、BIG内部成立時なら夜スタートと報告されている。メーカー/大手解析本文で同じ変更処理を直接再確認できないためCONFIRMEDには格上げしない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の内部高確状態、ART残G/上乗せ、RT状態、および液晶開始ステージの具体的引継ぎ処理を本機固有の直接資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定を変更しない単純電源OFF→ON時の内部状態、ART/RT残状態、液晶開始ステージ処理を直接確定できず。
  gameCounterReset: NOT_APPLICABLE_TO_NORMAL_CEILING / ART_REMAINDER_UNVERIFIED。通常ゲーム数で到達する出玉天井は確認されない。33〜999GはART継続G数であり天井ではない。設定変更時にART残Gをどう扱うかは未確定。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常ゲーム数天井およびリセット専用短縮天井の公開値を確認できず。
  modeAfterReset: UNVERIFIED_INTERNAL_MODE / DISPLAY_STAGE_DEPENDS_ON_PRECHANGE_STATE_REPORTED_SINGLE。内部モードの再抽選/引継ぎ率は未確定。液晶ステージについてのみ旧独自調査の変更前状態参照報告がある。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。低確/高確などの内部状態そのものが設定変更で再抽選・引継ぎ・固定のどれになるかは直接確定できない。液晶ステージ挙動だけから内部状態を断定しない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: PUBLIC_NUMERIC_BENEFIT_NONE_CONFIRMED。K-Naviには「朝イチ特典」「朝イチは狙い目?」項目の存在を確認できるが、現存取得本文から朝一専用の当選率・短縮天井・恩恵発生率を確定できない。旧独自調査の夕方/夜ステージ開始報告は判別材料候補としてのみ保持し、恩恵率には換算しない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更固有の主要不利数値は確認できず。通常時変則押しペナルティは設定変更ペナルティではないため別扱い。
  resetDetection: POSSIBLE_STAGE_BASED_CLUE_SINGLE_SOURCE。設定変更後の液晶開始ステージが変更前状態に応じて夕方/夜になるという独自調査があり、朝一の判別材料候補。ただし単独ソースで、ガックン・初期出目・ランプ等の本機固有変更判別はUNVERIFIED_AFTER_RESEARCH。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetBehaviorQA: RESEARCHED_PARTIAL_SINGLE_SOURCE_SETTING_CHANGE_FINDING

conflicts:
  - payoutRateBySetting: P-WORLD 97.1/99.4/102.2/104.8/107.4/110.7% vs 旧解析 97.2/99.2/102.2/104.6/107.4/110.0%。平均化せず保持。
  - releaseDateExpression: 当時グリーンべると2009-04-05納品開始予定 vs K-Navi 2009-04-06ホール導入開始。物流開始とホール稼働開始の定義差として保持。
  - retrospectiveMisidentificationWarning: 後年5号機クロニクルの山佐一覧には「2009年7月・Aタイプ(RT)」として本機と整合しない説明が掲載されるため、本レコードのA+ART夢花月には採用しない。

missingFields:
  - 据え置き時の内部状態・ART残G/上乗せ・RT状態の具体的引継ぎ
  - 単純電源OFF→ON時の内部状態・ART/RT残状態・液晶ステージ処理
  - 設定変更時の内部低確/高確等の再抽選/引継ぎ規則
  - 設定変更時のART残G/上乗せの扱い
  - ガックン/初期出目/ランプ等による変更判別
  - 朝一専用のモード振分・当選率・リセット恩恵発生率

sources:
  - url: https://yamasa-next.co.jp/model_ykt/
    title: 機種情報：夢花月 / 山佐ネクスト
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: 2009年4月稼働、5号機A+ART、ART純増約1.5枚/G、ART継続G数最大999G、チャンスゲーム、完走型ART。
  - url: https://news.p-world.co.jp/articles/3364/greenbelt
    title: 山佐、高純増ARTメインの『夢花月』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2009-04-05納品開始予定、ART約+1.5枚/G、33〜999G、BIG約210枚、BIG後77G以上・111G以上約85%。
  - url: https://www.p-world.co.jp/machine/database/5480
    title: 夢花月 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式ユメカゲツD、検定番号8S0905、2009年4月、機械割主系列、BIG確率、BIG約210枚、ART純増/ゲーム数。
  - url: https://p-kn.com/slot/956/
    title: パチスロ「夢花月」 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 2009-04-06ホール導入開始、BIG払い出し条件、ART構造、朝イチ特典/朝イチは狙い目項目の存在確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/162/c.php
    title: 夢花月 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたり29.88〜29.85Gの設定別ベース。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/162/yamasa_slot_162.php
    title: 夢花月 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 本機専用のPAYOUT/ART/設定変更時解析項目が存在することの確認。検索取得できなかった本文値は推測採用していない。
  - url: https://ameblo.jp/samurai777net/entry-10210113143.html
    title: パチスロ新台/山佐「夢花月」 / 侍～samurai～777ブログ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_SINGLE
    usedFor: BIG/ART初当り系列、ART性能、ゲーム数、モード概要の旧資料照合。
  - url: https://plaza.rakuten.co.jp/jognoyamasa/2128/
    title: 夢花月 / こだわり山佐の館
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE_SINGLE
    usedFor: BIG/ART初当り系列、機械割競合系列。
  - url: https://plaza.rakuten.co.jp/kirialoverio/81000/
    title: 夢花月（山佐） / キリアのスロット日記
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_SINGLE_INDEPENDENT_TEST
    usedFor: 設定変更時液晶ステージ挙動の独自調査、夜背景高確確定、BIG/ART系列の照合。設定変更挙動は単一資料扱い。
  - url: https://www.all7.jp/plans/index/2009/04
    title: 2009年4月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 4月具体日境界監査。現存一覧上の4/13以降の具体日群を確認し、4/1〜4/4へ未処理具体日機を推測挿入しないための補助。

researchNotes:
  - LATEST_HANDOFF 353件地点から再開し、2009-03-30〜03-31を再監査。スターマンアイズは当時業界記事で「3月下旬納品予定」止まり、ジュードーズも2009年3月機までは確認できるが安全な具体日を今回も確定できず、日付を推測して挿入しなかった。
  - 2009年4月境界をALL7・当時業界記事・機種DBで確認。4/1〜4/4に安全な具体導入/納品日を持つ未処理パチスロを確定できず、2009-04-05納品開始予定の夢花月へ接続。
  - 「夢花月 50枚/1000円/ベース/コイン持ち」を資料系統変更して再探索し、パチマガスロマガの設定別1000円あたりゲーム数を回収。
  - 「夢花月 設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/型式ユメカゲツD」を再探索。設定変更時の液晶ステージ挙動は旧独自調査1系統のみ確保できたため単一ソース扱い。据え置き・単純電断・内部状態そのもの・ART残G処理は十分再探索後も未確定。
  - 後年5号機クロニクルの夢花月説明は2009年7月・Aタイプ/RT・BIG/REGという本機と整合しない別内容を含むため、混同防止目的で不採用とした。
