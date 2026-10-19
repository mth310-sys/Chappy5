# パチスロ24 -TWENTY FOUR-

machineName: パチスロ24 -TWENTY FOUR-
manufacturer: 大都技研
releaseDate: 2008-09-08
releaseDatePrecision: CONTEMPORARY_ANALYSIS_INSTALL_START_DATE_CROSSCHECKED_WITH_INDUSTRY_EARLY_SEPTEMBER_DELIVERY
modelName: TWENTY FOUR4
modelVerification: CONTEMPORARY_INDUSTRY_PRESS_RELEASE
generation: 5号機
systemType: ボーナス+CZ+完走型RT
settings: 1 / 3 / 5 / 6

payoutRateBySetting:
  primarySimulationSource_Hisshobon:
    setting1: 97.27%
    setting3: 100.40%
    setting5: 103.13%
    setting6: 109.85%
  alternateSimulationSource_Pachimaga:
    setting1: 96.88%
    setting3: 100.56%
    setting5: 103.40%
    setting6: 111.15%
  retrospectiveSource_5gokiChronicle:
    setting1: 97.3%
    setting3: 100.4%
    setting5: 103.1%
    setting6: 109.9%
  status: CONFLICT
  note: 必勝本と5号機クロニクルは丸め差の範囲で近いが、パチマガスロマガのシミュレート値は特に設定6で差が大きい。平均せず系列別に保持。

initialHitBySetting:
  BIG_combined:
    setting1: 1/394.80
    setting3: 1/366.12
    setting5: 1/343.12
    setting6: 1/296.54
  red7BIG:
    setting1: 1/819.20
    setting3: 1/753.29
    setting5: 1/675.63
    setting6: 1/585.14
  white7BIG:
    setting1: 1/762.05
    setting3: 1/712.35
    setting5: 1/697.19
    setting6: 1/601.25
  MIDDLE:
    setting1: 1/655.36
    setting3: 1/630.15
    setting5: 1/606.81
    setting6: 1/560.14
  bonusCombined:
    setting1: 1/246.38
    setting3: 1/231.58
    setting5: 1/219.18
    setting6: 1/193.89
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH

baseGamesPer50:
  setting1: 33.20G
  setting3: 33.50G
  setting5: 33.81G
  setting6: 35.11G
  status: ANALYSIS_HIGH

netIncrease:
  REAL_TIME_ZONE:
    sourceGreenbelt: 約+0.8〜0.9枚/G
    sourceKNavi: 約+0.7〜0.8枚/G
    status: CONFLICT
    note: レンジが重なるが公開表記は一致しないため平均化しない。

basicPayout:
  BIG: 約240枚
  MIDDLE: 約90枚
  payoutThreshold:
    BIG: 351枚を超える払い出しで終了
    MIDDLE: 126枚を超える払い出しで終了
  status: CONTEMPORARY_INDUSTRY_AND_ANALYSIS_CROSSCHECKED

modeSpecificMinimumData:
  RTName: リアルタイムゾーン
  RTType: 完走型RT
  RTEntry:
    afterBIG: BIG後にRTへ移行。通常説明では100G、特定条件で300Gの長期RTが存在。
    afterMIDDLE: MIDDLE後24Gの「24チャンスタイム」中に特定レアリプレイ成立で100G RTへ突入。
  RTDuration:
    normal: 100G
    extended: 300G
  RTMechanismDetail: CONFLICT_DESCRIPTION。グリーンべるとは「BB後100G、特定条件で300G」と説明。5号機まとめwikiは内部的に300G RTから特殊リプレイで100G RTへ上書きされる構造と説明しており、プレイヤー向け表現と内部遷移説明の方向が異なるため断定統合しない。
  chanceZone: MIDDLE後24Gの24チャンスタイム
  conventionalGameCountCeiling: NONE_CONFIRMED_AFTER_RESEARCH

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。本機固有の設定変更時に通常状態/CZ/100G・300G RT内部状態がどう処理されるかを直接確認できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のCZ/RT残状態・内部RT種別の引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時のCZ/RT状態処理を直接確認できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。本機に通常ゲーム数到達型の天井は今回確認できず、朝一で比較すべき公開天井カウンタ数値なし。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更後の短縮天井・専用天井数値は確認なし。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常時モード/朝一専用モードの公開情報は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZおよび完走型RT中の設定変更/据え置き/電断時状態を一般的5号機挙動から補間しない。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「パチスロ24 / 24-TWENTY FOUR / TWENTY FOUR4 / 大都技研」と設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・初期出目・変更判別・RTを組み替え、当時解析/業界記事/旧DB/回顧資料を横断したが、本機固有の変更判別条件を確定できず。
  numericResetData:
    resetCeilingGameCount: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_RT_NET_CONFLICTS
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - type: CONFLICT_PAYOUT_RATE
    detail: 必勝本シミュレート97.27/100.40/103.13/109.85%、パチマガスロマガ96.88/100.56/103.40/111.15%、5号機クロニクル97.3/100.4/103.1/109.9%。平均せず系列別保持。
  - type: CONFLICT_RT_NET_INCREASE
    detail: 当時グリーンべると約+0.8〜0.9枚/G、K-Navi約+0.7〜0.8枚/G。重複範囲はあるが同一値ではないため平均しない。
  - type: CONFLICT_RT_100_300_MECHANISM_DESCRIPTION
    detail: 当時業界記事はBB後100G、特定条件成立で300Gと説明。一方、当時更新の5号機まとめwikiは内部300G RTから特殊リプレイにより100G RTへ上書きされる構造と説明。最終的に100G/300Gの双方が存在する点は一致するが、内部遷移の説明を無理に統合しない。

missingFields:
  - 設定変更時のCZ/RT内部状態処理
  - 据え置き/電源OFF→ON時のCZ/RT残状態処理
  - ガックン/初期出目等による変更判別の直接資料
  - 朝一専用恩恵/不利および公開朝一数値

sources:
  - url: https://p.hisshobon.jp/machine/1200/1/18160
    title: 基本スペック パチスロ24 -TWENTY FOUR- / パチ＆スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 2008-09-08導入開始予定、設定1/3/5/6のBIG合算・赤7BIG・白7BIG・MID・ボーナス合算、シミュレート機械割、100G完走型RT。
  - url: https://p-kn.com/slot/849/6637/
    title: ボーナス出現率に関して / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG合算・赤7BIG・白7BIG・MIDDLE・ボーナス合算を必勝本と照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/42/h.php
    title: パチスロ24 ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別ボーナス確率の再照合、PAYOUT 96.88/100.56/103.40/111.15%の別シミュレート系列。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/42/c.php
    title: パチスロ24 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 50枚あたり33.20/33.50/33.81/35.11G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/42/a.php
    title: パチスロ24 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: CZ+完走型RT、BIG約240枚/MID約90枚、351枚超/126枚超払い出し終了条件。
  - url: https://web-greenbelt.jp/00003787/
    title: 大都の版権第一弾『パチスロ24』がお披露目 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: 型式TWENTY FOUR4、BB約240枚/MB約90枚、BB後100G RT・特定条件で300G、MB後24G CZから100G RT、純増約0.8〜0.9枚/G、9月上旬納品予定。
  - url: https://p-kn.com/slot/849/
    title: パチスロ24 -TWENTY FOUR- / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: BIG/MIDDLE払い出し条件、BIG後100G完走型RT、RT純増約0.7〜0.8枚/G、MIDDLE後24G RT高確。
  - url: https://w.atwiki.jp/5gouki/pages/120.html
    title: 24 -TWENTY FOUR- / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_COMMUNITY_ARCHIVE
    usedFor: 当時更新の設定別主要値照合、100G/300G完走型RTの内部遷移説明。機械割は他解析系列と差があるため主要PAYOUT採用には使わず参考保持。
  - url: https://5goki.com/daito
    title: 大都技研 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年9月導入、機械割97.3/100.4/103.1/109.9%の回顧系列。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前292「イルカ夫人」レコードを再読し、LATEST_HANDOFF基準292件地点から開始。
  - 直前HANDOFF指定どおり同日2008-09-08「24 -TWENTY FOUR-」を処理。型式は当時グリーンべるとでTWENTY FOUR4を確認。
  - 性能コアは必勝本/K-Navi/パチマガスロマガ/当時業界記事を横断し、設定別ボーナス確率・50枚ベース・獲得枚数・CZ/RT性能まで回収。
  - 機械割とRT純増は公開資料間差を平均せずCONFLICT。100G/300G RTは存在自体は一致するが内部遷移説明が異なるため機構表現もCONFLICTとして保持。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/変更判別/RT」を機種名・型式名・メーカー名と組み替え、K-Navi、パチマガスロマガ、必勝本、業界記事、当時5号機DB、回顧DBまで再探索。直接条件を回収できた項目のみ断定し、一般的5号機挙動から補間していない。
