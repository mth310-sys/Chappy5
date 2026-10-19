# コリアンドラムS2-30

machineName: コリアンドラムS2-30
manufacturer: パラジェーピー
releaseDate: 2008-07
releaseDatePrecision: MONTH_CONFIRMED_EXACT_DAY_UNVERIFIED
modelName: コリアンドラムS2-30
generation: 5号機
systemType: ノーマル / 完全告知 / リプレイ予兆 / 30Φ
payoutRateBySetting:
  pworld:
    setting1: 94.65%
    setting2: 98.00%
    setting3: 101.12%
    setting4: 104.13%
    setting5: 107.23%
    setting6: 110.46%
  fiveGokiChronicle:
    setting1: 94.7%
    setting2: 98.0%
    setting3: 101.1%
    setting4: 104.1%
    setting5: 107.2%
    setting6: 110.5%
  confidence: ANALYSIS_HIGH
  note: 丸め差の範囲で一致。
initialHitBySetting: UNVERIFIED_AFTER_RESEARCH
baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
netIncrease: NOT_APPLICABLE（RT/ART/ATなしのノーマルタイプ）
basicPayout:
  BIG: 360枚
  BONUS_GAME: 90枚
  confidence: ANALYSIS_SINGLE
modeSpecificMinimumData:
  gameSystem:
    type: リプレイ予兆機能搭載・完全告知
    note: リプレイ連続で期待度が上昇し、上部パネル7色フラッシュでボーナス確定とする後年回顧資料あり。
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名・型式名・パラジェーピーと設定変更/リセット/朝一/据え置き/電源OFF ONを組み替えて再探索したが本機固有資料を確定できず。
  carryOverBehavior: NO_GAME_COUNT_OR_MODE_SYSTEM_CONFIRMED
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
  gameCounterReset: NO_NORMAL_GAME_CEILING_COUNTER_CONFIRMED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED
  stateAfterReset: NO_PERSISTENT_RT_ART_STATE_CONFIRMED
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目等の本機固有直接資料を確認できず。
  numericResetData: NONE_CONFIRMED

coreStatus: PARTIAL
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts: []

missingFields:
  - 具体導入/納品日
  - 設定別BIG/REG等の主要初当たり
  - 50枚ベース
  - 本機固有の設定変更/電断/変更判別挙動

sources:
  - url: https://www.p-world.co.jp/machine/database/5286
    title: コリアンドラムS2-30 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 型式、メーカー、30Φ、設定別出玉率、BIG360枚、BONUS GAME90枚、2008-07-23当時掲示板記録
  - url: https://5goki.com/parajp
    title: パラジェーピー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年7月導入、設定別機械割照合
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: HISTORICAL_DB
    usedFor: 2008年7月発売、S2-30はリプレイ予兆タイプ、コリアンドラム-30との別仕様
  - url: https://plaza.rakuten.co.jp/kirialoverio/72000/
    title: コリアンドラムS2-30 機種情報
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_SINGLE
    usedFor: リプレイ予兆機能、7色フラッシュ告知、兄弟機と別仕様

researchNotes:
  - P-WORLD掲示板に2008-07-23の投稿が残るため、遅くとも7月下旬には認知・設置圏に入っていた可能性が高いが、投稿を導入日とは扱わずreleaseDateは2008-07の月精度に留めた。
  - コリアンドラム-30とは「まったく別物」とする回顧資料があり、性能値を相互転記しない。
