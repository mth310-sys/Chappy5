# イルカ夫人（新妻イルカ夫人）

machineName: イルカ夫人（新妻イルカ夫人）
manufacturer: アビリット
releaseDate: 2008-09-08
releaseDatePrecision: RELEASE_DATE_RETROSPECTIVE_INDUSTRY_TRACKER_CROSSCHECKED_WITH_CONTEMPORARY_EARLY_SEPTEMBER_INSTALL_PLAN
modelName: イルカ夫人
modelVerification: P_WORLD_DATABASE_APPROVAL_8S0070
generation: 5号機
systemType: ボーナス+天井RT / 告知型
notificationClassification: CONFLICT_COMPLETE_VS_SEMI_COMPLETE
payoutRateBySetting:
  setting1: 94.3%
  setting2: 98.3%
  setting5: 102.5%
  setting6: 108.9%
  status: ANALYSIS_HIGH
initialHitBySetting:
  BIG:
    setting1: 1/339.6
    setting2: 1/307.7
    setting5: 1/284.9
    setting6: 1/257.0
  REG_CB:
    setting1: 1/436.9
    setting2: 1/436.9
    setting5: 1/394.8
    setting6: 1/341.3
  bonusCombined:
    setting1: 1/191.1
    setting2: 1/180.5
    setting5: 1/165.5
    setting6: 1/146.6
  status: ANALYSIS_HIGH
baseGamesPer50:
  setting1: 35.46G
  setting2: 35.47G
  setting5: 34.93G
  setting6: 37.26G
  status: ANALYSIS_HIGH_CORRECTED_TABLE
netIncrease:
  AOI_TIME_RT: UNVERIFIED_AFTER_RESEARCH
basicPayout:
  BIG: 約336枚
  REG_CB: 平均約104枚（技術介入時最大約112枚）
  payoutThreshold:
    BIG: 345枚超払い出しで終了
    REG_CB: 155枚超払い出しで終了
  status: CONTEMPORARY_INDUSTRY_AND_ANALYSIS_CROSSCHECKED
modeSpecificMinimumData:
  RTName: あおいタイム
  RTEntry:
    afterBIG: BIG終了後777G消化で突入
    afterREG_CB: REG/CB終了後555G消化で突入
  RTDuration: 次回ボーナスまで継続
  RTEndCondition: 次回ボーナス
  ceiling: BIG後777G / REG(CB)後555G
  notificationSystem: レバーON/第3停止時などにイルカ役物・サウンド等でボーナス告知。「あおいチャンス」あり。
  hallSideNotificationControl: 店舗側で先告知/後告知や「あおいチャンス」の発生頻度を選択可能とする当時業界記事あり。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にBIG後777G/REG後555Gの天井カウンタ、あおいタイム中のRT状態、開始状態がどう処理されるかを本機固有資料で確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の天井カウンタおよびあおいタイム状態の引継ぎを直接確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時の天井カウンタ/RT状態を直接確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時の天井数値はBIG後777G/REG後555Gと確認できるが、設定変更時にカウンタがクリアされるか引き継がれるかは未確認。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後の短縮天井・専用天井数値は確認できず、通常天井値を朝一へ自動流用しない。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。公開された通常時モード/朝一専用モードの存在は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。天井RT「あおいタイム」中の設定変更/据え置き/電断時状態処理は一般的な5号機挙動から補間しない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「イルカ夫人 / 新妻イルカ夫人 / アビリット」と設定変更・リセット・朝一・据え置き・電源OFF ON・天井・RT・ガックン・初期出目・変更判別を組み替え、当時解析/業界記事/旧DB/後年DBまで横断したが、本機固有の変更判別条件を確定できず。
  numericResetData:
    normalCeilingGameCount:
      afterBIG: 777G
      afterREG_CB: 555G
    resetCeilingGameCount: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_RT_NET_INCREASE_UNVERIFIED
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - type: CONFLICT_NOTIFICATION_CLASSIFICATION
    detail: グリーンべるとおよびパチマガスロマガ系では完全告知として扱われる一方、当時Playgraph系記事は準完全告知タイプと記述。分類語を平均化せず両表現を保持し、実機DBのsystemTypeは中立的に「告知型」とした。
  - type: NAME_ALIAS_DIFFERENCE
    detail: 旧業界追跡/P-WORLDは「イルカ夫人」、パチマガスロマガは「新妻イルカ夫人」表記。別機種と断定せず同一機の表記揺れとして併記。

missingFields:
  - あおいタイムの1Gあたり純増枚数の直接資料
  - 設定変更時の777G/555G天井カウンタ処理
  - 据え置き/電源OFF→ON時の天井カウンタ・RT状態処理
  - 設定変更後の短縮天井/朝一専用数値
  - ガックン/初期出目等による変更判別の直接資料

sources:
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_INDUSTRY_TRACKER
    usedFor: アビリット「イルカ夫人」、2008-09-08発売、純Aタイプ仕様・天井RT搭載の追跡記録。
  - url: https://web-greenbelt.jp/00003694/
    title: アビリット『イルカ夫人』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: 2008-07-24内覧、BIG最大純増336枚、REG平均104枚・技術介入最大112枚、BIG後777G/REG後555Gの天井RT「あおいタイム」、告知仕様、店舗側告知頻度設定。
  - url: https://p-mans.blogspot.com/2008/07/
    title: Playgraph系 2008年7月 アビリット「イルカ夫人」記事
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: 2008-07-24内覧、9月初旬導入予定、準完全告知タイプ、UV告知の記述。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/21/kyotai.php
    title: 新妻イルカ夫人 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/告知型/同時成立/天井RT、BIG・CBの払い出し条件と獲得枚数系統。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/21/h.php
    title: 新妻イルカ夫人 ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/2/5/6のBIG、REG、合成確率、PAYOUT 94.3〜108.9%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/21/c.php
    title: 新妻イルカ夫人 小役確率・通常時 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_CORRECTED_TABLE
    usedFor: 50枚あたり35.46/35.47/34.93/37.26G。誌面誤植訂正後の掲載値として採用。
  - url: https://www.p-world.co.jp/machine/database/5287
    title: イルカ夫人 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE_HIGH
    usedFor: 型式表記「イルカ夫人」、検定番号8S0070、2008年09月導入、5号機RT機の照合。現在のメーカー表記は承継後のコナミアミューズメントで、当時メーカーは業界記事に従いアビリットとした。

researchNotes:
  - 最新mainのREADME、実機DBミッションv0.7、INDEX、LATEST_HANDOFF、直前291 LOT8を再読し、LATEST_HANDOFF基準291件地点から開始。
  - 2008-08-25後〜9月初旬の境界を旧業界追跡・当時業界記事・P-WORLD・解析DBで再監査。今回確認できた次の具体日付き未処理本線として2008-09-08「イルカ夫人」を採用。
  - 「イルカ夫人」「新妻イルカ夫人」「アビリット」に加え、BIG/REG/機械割/50枚/天井RT/あおいタイム/設定変更/リセット/朝一/据え置き/電源OFF ON/宵越し/ガックン/初期出目/変更判別を組み替えて再探索。
  - 性能コアは設定別ボーナス確率、合算、PAYOUT、50枚ベース、獲得枚数、天井RT数値まで回収。RT純増枚数のみ直接資料を確定できずUNVERIFIED_AFTER_RESEARCH。
  - resetBehaviorは通常天井777G/555Gという公開数値と、朝一・設定変更後の数値を明確に分離。一般的な5号機天井の挙動からリセット/据え置き/電断処理を補間していない。
