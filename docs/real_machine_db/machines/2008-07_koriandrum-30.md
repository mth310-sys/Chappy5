# コリアンドラム-30

machineName: コリアンドラム-30
alternateNames:
  - コリアンドラム30
manufacturer: パラジェーピー
releaseDate: 2008-07
releaseDatePrecision: MONTH_CONFIRMED_EXACT_DAY_UNVERIFIED
modelName: コリアンドラム-30
generation: 5号機
systemType: ボーナス+完走型RT / 30Φ
payoutRateBySetting:
  setting1: 98.2%
  setting2: 100.0%
  setting3: 102.2%
  setting4: 104.0%
  setting5: 105.4%
  setting6: 107.2%
  confidence: ANALYSIS_SINGLE
initialHitBySetting: UNVERIFIED_AFTER_RESEARCH
baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
netIncrease: UNVERIFIED_AFTER_RESEARCH
basicPayout: UNVERIFIED_AFTER_RESEARCH
modeSpecificMinimumData:
  gameSystem:
    type: BIG後完走型RTタイプ
    confidence: HISTORICAL_DB
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名・型式名・メーカー名と設定変更/リセット/朝一/据え置き/電源OFF ONを組み替えて再探索したが、本機固有の直接資料を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。BIG後完走型RTの残状態を据え置き時にどう扱うか直接資料未確認。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみのRT残状態等を直接確認できず。
  gameCounterReset: NO_NORMAL_GAME_CEILING_COUNTER_CONFIRMED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NO_NORMAL_MODE_SYSTEM_CONFIRMED
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH（BIG後RT状態の設定変更/電断時処理）
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
  - BIG/REG基本獲得枚数
  - RTゲーム数・純増
  - 本機固有の設定変更/据え置き/電断/変更判別挙動

sources:
  - url: https://5goki.com/parajp
    title: パラジェーピー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年7月導入、設定別機械割
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: HISTORICAL_DB
    usedFor: 2008年7月発売、コリアンドラム-30は完走型RTタイプ、S2-30とは別仕様
  - url: https://blog-pachislot.com/machines/1554.html
    title: コリアンドラム30 実機基本情報
    retrievedAt: 2026-09-01
    confidence: SECONDARY
    usedFor: メーカー、型式、5号機確認
  - url: https://kiokubako.blog.shinobi.jp/パチスロ/コリアンドラムｓ２－３０
    title: コリアンドラムS2-30 回顧資料
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_SINGLE
    usedFor: 兄弟機コリアンドラム-30はボーナス出玉を抑えBIG後RTを持つとの照合

researchNotes:
  - LATEST_HANDOFF 266件地点から継続。兄弟機2種は2008年7月導入で一致するが、具体納品日は複数検索語・旧DB・P-WORLD系を横断しても確定できなかったため月精度で登録。
  - S2-30とは性能構造が異なるため別レコード化し、数値の相互流用はしない。
