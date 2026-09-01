# クラッピーパーク

machineName: クラッピーパーク
manufacturer: ビーム
releaseDate: 2008-11-16
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_DATE_WITH_NEXT_DAY_DATABASE_INTRODUCTION_DATE
modelName: クラッピーパーク
modelNumber: クラッピーパークAX
modelNumberStatus: RETROSPECTIVE_APPROVAL_REFERENCE_AND_PARTS_COMPATIBILITY_REFERENCE
generation: 5号機
systemType: ボーナス + RT + ストック型ART「クラッピーチャレンジ」 / パンク回避型A+ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 98.8%
  setting2: 100.1%
  setting3: 102.3%
  setting4: 105.8%
  setting5: 109.3%
  setting6: 114.1%
  status: INDUSTRY_DATABASE_WITH_RETROSPECTIVE_CORROBORATION
  note: P-WORLD掲載値。後年のパチスロ業界史資料でも設定6=114.1%を高機械割機一覧として照合。なお実ホール集計を語る回顧記事には設定1実績108%との逸話があるが、公称/解析機械割と定義が異なるため混在させない。

initialHitBySetting:
  redBIG:
    setting1: 1/229.95
    setting2: 1/229.15
    setting3: 1/225.99
    setting4: 1/224.44
    setting5: 1/222.16
    setting6: 1/218.45
  whiteBIG:
    setting1: 1/8192.00
    setting2: 1/8192.00
    setting3: 1/8192.00
    setting4: 1/8192.00
    setting5: 1/5461.33
    setting6: 1/5461.33
  bonusCombined:
    setting1: 1/223.67
    setting2: 1/222.91
    setting3: 1/219.92
    setting4: 1/218.45
    setting5: 1/213.47
    setting6: 1/210.05
  status: ANALYSIS_HIGH_WITH_INDUSTRY_DATABASE_ROUNDED_MATCH
  note: パチマガスロマガの赤BIG/白BIG/合算。P-WORLDのBIG確率1/223〜1/210と丸め範囲で一致。

baseGamesPer50:
  setting1: 30.73G/50枚
  setting2: 30.73G/50枚
  setting3: 30.73G/50枚
  setting4: 30.73G/50枚
  setting5: 30.73G/50枚
  setting6: 30.73G/50枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガ。「高確中のATは考慮せず」の通常時ベース。

basicPayout:
  BIG: 約176枚
  regulatedBIGEnd: 215枚を超える払い出しで終了
  status: MULTI_SOURCE_MATCH
  note: 2008-10-09グリーンべると、P-WORLD、パチマガスロマガで確認。白7スペシャルBIGはCT方式だが、本DBでは詳細内部抽選を追わない。

netIncrease:
  crappyChallengeART: 約+0.8枚/G
  status: MULTI_SOURCE_MATCH
  note: 2008-10-09グリーンべるとと777TOWN/4Gamer回顧資料で一致。

modeSpecificMinimumData:
  crappyChallenge: ART「クラッピーチャレンジ」。突入後はナビに従い3択9枚役とパンクチェリーを回避し、原則次回ボーナスまで継続。単一ARTの上限は2000G。
  artStock: 通常時約1/132.66で出現するコハク図柄を契機にART抽選。グリーンべると当時記事ではコハク図柄の約66%で突入抽選を行い、1回の抽選で複数セット抽選。ストックは赤7BIG後に潜伏/前兆を経て放出、白7スペシャルBIG後は即放出。
  postRedBigRT: 赤7BIG後、ART非当選時は超高確率ステージRTへ移行。保障ゲーム中はパンクチェリーナビがあり、保障終了後は自力回避。ARTストック保持時はRT終了後等からARTへ移行可能。
  ceilingStockRelief: ボーナス間1200GでART1個、1500GでART3個、1800GでART10個をストックする救済仕様を後年天井DBで確認。
  artMaxGameCount: 2000Gまたはボーナス成立/パンクチェリー入賞等が終了条件。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/ビームと「設定変更・リセット・朝一・ARTストック・1200G・1500G・1800G天井・RT・クラッピーチャレンジ」を組み替え、パチマガスロマガの「攻め時・ヤメ時・設定変更時」導線、P-WORLD、K-Navi、旧天井DB、回顧資料を横断したが、設定変更時のボーナス間救済カウンタおよびARTストック消去/維持を直接確定する本文を回収できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の1200/1500/1800G救済カウンタ、未放出ARTストック、赤7後RT状態の翌日処理を本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみでの救済カウンタ、ARTストック、RT状態、液晶/初期出目の扱いを確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時のボーナス間1200/1500/1800GでARTストックされる救済仕様はCONFIRMEDだが、設定変更でカウンタがゼロ初期化されるかは未確定。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井、朝一固定天井G数、変更時専用ストック加算は確認できず。ただし通常救済カウンタの変更時処理が未確定のため「変更後1200Gから新規計数」とは推測しない。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用モード/朝一専用高確モードの公開情報を確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。未放出ARTストック、クラッピーチャレンジ、赤7後超高確率RTの設定変更/電断時処理を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用のARTストック、短縮天井、朝一優遇数値は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更によるARTストック消去等を示す直接資料は確認できず、推測で不利扱いしない。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「ガックン・初期出目・設定変更判別・据え置き・朝一」を追加して再探索したが、本機固有の確定判別法を回収できず。
  numericResetData:
    normalReliefGameCount1200: ARTストック1個
    normalReliefGameCount1500: ARTストック3個
    normalReliefGameCount1800: ARTストック10個
    resetSpecificNumericData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: RESET_FIELDS_RESEARCHED_NORMAL_BONUS_INTERVAL_ART_STOCK_RELIEF_CONFIRMED_DEVICE_SPECIFIC_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - field: releaseDate
    sourceA: グリーンべると 2008-11-16納品開始
    sourceB: パチビー 2008-11-17導入日
    handling: DEFINITION_DIFFERENCE_DELIVERY_START_VS_INTRODUCTION_DATE_PRIMARY_RECORD_USES_CONTEMPORARY_INDUSTRY_DELIVERY_START

missingFields:
  - 設定変更時の1200/1500/1800G救済カウンタ初期化/引継ぎ
  - 設定変更時の未放出ARTストック消去/維持
  - 据え置き時の救済カウンタ/ARTストック/RT状態翌日処理
  - 電源OFF→ONのみでの救済カウンタ/ARTストック/RT状態処理
  - ガックン/初期出目等による本機固有の設定変更判別

sources:
  - url: https://web-greenbelt.jp/00003868/
    title: ビームがARTストック機『クラッピーパーク』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2008-11-16納品開始、ARTクラッピーチャレンジ、純増約+0.8枚/G、最大2000G、コハク約1/132・約66%抽選、赤7後RT、BIG約176枚。
  - url: https://www.pachibee.jp/movies/index/1190
    title: クラッピーパーク / パチビー
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 2008-11-17導入日、メーカーBe-AM、ART/RT機能の動画分類。
  - url: https://www.p-world.co.jp/machine/database/5357
    title: クラッピーパーク / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: BIG確率丸め値1/223〜1/210、出玉率98.8〜114.1%、215枚超払い出し終了。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/02/h.php
    title: クラッピーパーク ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 赤BIG、白BIG、ボーナス合成の設定別精密値。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/02/c.php
    title: クラッピーパーク 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 全設定30.73G/50枚、コハク1/132.66。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/02/a.php
    title: クラッピーパーク 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ART/天井/同時成立、BIG約176枚、215枚超払い出し終了。
  - url: https://www.777town.net/explanation/slot_crappypark.jsp
    title: クラッピーパーク / 777TOWN.net
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_OFFICIAL_SIMULATION_SERVICE
    usedFor: ART最大2000G、純増約+0.8枚/G、赤7後RTとARTストック構造の補助照合。
  - url: https://www.4gamer.net/games/021/G002122/20110819050/
    title: 「777タウン.net」に「クラッピーパーク」が登場 / 4Gamer
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_PRESS_RELEASE
    usedFor: ビーム機、最大2000G、純増約+0.8枚/Gの第二照合。
  - url: https://crankyseven.com/sp/tenjo-5ka.htm
    title: か行の機種の天井情報（5号機版） / パチスロ立ち回り講座
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS_DATABASE
    usedFor: ボーナス間1200G=ART1個、1500G=3個、1800G=10個の救済ストック。
  - url: https://q-and-a.hatenablog.com/entry/2016/10/24/215400
    title: ビームの検定通過機種を教えて
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_APPROVAL_REFERENCE
    usedFor: 型式クラッピーパークAX、2008-07-28検定通過記録。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_RETROSPECTIVE_INDUSTRY_HISTORY
    usedFor: 5号機高機械割機種一覧でクラッピーパーク114.1%の補助照合。
