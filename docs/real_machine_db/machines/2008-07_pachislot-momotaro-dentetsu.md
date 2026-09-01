# パチスロ桃太郎電鉄

machineName: パチスロ桃太郎電鉄
manufacturer: サミー
releaseDate: 2008-07-14 / 2008-07-15
releaseDatePrecision: CONFLICT_EXACT_DAY_WITHIN_MID_JULY
modelName: 桃太郎電鉄G
generation: 5号機
systemType: ノーマル / ボーナス主体 + 7G演出RT / 技術介入
payoutRateBySetting:
  pachibee:
    setting1: 97.6%
    setting2: 99.8%
    setting3: 103.0%
    setting4: 106.7%
    setting5: 110.4%
    setting6: 115.2%
  retrospectiveSpec:
    setting1: 96.7%
    setting2: 98.7%
    setting3: 101.6%
    setting4: 105.0%
    setting5: 108.4%
    setting6: 115.0%
  kensloSimulation:
    setting1: 98.5%
    setting2: 100.6%
    setting3: 103.5%
    setting4: 106.9%
    setting5: 110.3%
    setting6: 114.6%
  confidence: CONFLICT
  note: 解析/掲載系列で機械割定義が一致しないため平均せず3系列を保持。ボーナス確率系列はほぼ一致。
initialHitBySetting:
  big:
    setting1: 1/293.9
    setting2: 1/282.5
    setting3: 1/266.4
    setting4: 1/249.2
    setting5: 1/234.1
    setting6: 1/216.3
  middle:
    setting1: 1/390.1
    setting2: 1/366.1
    setting3: 1/337.8
    setting4: 1/309.1
    setting5: 1/283.7
    setting6: 1/257.0
  combined:
    setting1: 1/167.6
    setting2: 1/159.5
    setting3: 1/148.9
    setting4: 1/138.0
    setting5: 1/128.3
    setting6: 1/117.4
  confidence: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD/Pachibee、旧スペック資料、旧5号機wiki、解析サイトで同系列を確認。
baseGamesPer50:
  setting1: 35.05G
  setting2: 35.35G
  setting3: 35.67G
  setting4: 35.99G
  setting5: 36.33G
  setting6: 36.69G
  confidence: ANALYSIS_SINGLE
  note: 旧解析サイトで設定別50枚回転数を確認。他系統の数値照合は今回未取得のため単一解析扱い。
netIncrease:
  status: NOT_A_PRIMARY_PAYOUT_RT
  note: 特殊リプレイ後に7Gのスペシャルゾーン/プチRTが存在するが、出玉増加の主軸はボーナス。比較用純増/Gの確定値は収集対象外/未確認。
basicPayout:
  big:
    netPayout: 最大約311枚（一般掲載では約299枚表記もあり）
  middle:
    netPayout: 最大約91枚
  confidence: ANALYSIS_HIGH_CROSSCHECKED
modeSpecificMinimumData:
  specialReplayRT:
    trigger: 特殊リプレイ
    games: 7G
    occurrenceReference: 特殊リプレイ約1/75との掲載あり
    purpose: 演出/ボーナス期待度を高める短期RT
  status: MINIMUM_CONFIRMED

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。2008年サミー機/型式桃太郎電鉄Gに限定し、設定変更・リセット・朝一を組み替えて旧解析、旧DB、回顧資料を再探索したが本機固有処理を確定できず。2024年スマスロ桃太郎電鉄のリセット情報は別機種として除外。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の本機固有処理を示す直接資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみでの7G RT残状態/初期出目等の本機固有処理を確定できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。2008年機には通常ゲーム数天井なしと旧解析で確認。7G演出RTはゲーム数天井ではない。
  ceilingAfterReset: NOT_APPLICABLE。通常ゲーム数天井なしのためリセット短縮天井なし。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一専用モード/通常時モード再抽選の公開仕様を確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。短期7G RT残状態が設定変更/電源断でどう扱われるか本機固有資料を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、初期出目、表示等による設定変更/据え置き判別資料を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts:
  - field: releaseDate
    status: CONFLICT_EXACT_DAY
    sourceA: 後年みなし機一覧 2008-07-14
    sourceB: Pachibee 2008-07-15
    handling: どちらも7月中旬で一致し、現進捗の爺サマー（7月下旬）より前。日付を推測統一せず両方保持。
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: Pachibee 97.6/99.8/103.0/106.7/110.4/115.2%
    sourceB: 旧スペック整理 96.7/98.7/101.6/105.0/108.4/115.0%
    sourceC: 旧解析シミュレーション 98.5/100.6/103.5/106.9/110.3/114.6%
    handling: 定義差の可能性があるため平均せず各系列を保存。

missingFields:
  - 2008-07-14と2008-07-15の導入日差の一次資料による解消
  - 設定変更/据え置き/電源OFF→ON時の7G RT残状態を含む本機固有処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://www.pachibee.jp/machines/index/209090090
    title: パチスロ 桃太郎電鉄 / Pachibee
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 2008-07-15導入、設定別BIG/MID/合算、機械割系列、BIG/MID獲得性能
  - url: https://www.p-world.co.jp/machine/database/5208
    title: パチスロ桃太郎電鉄 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: INDUSTRY_DATABASE
    usedFor: サミー、5号機ノーマル/RT/技術介入、BIG約299枚/MID約91枚、特殊リプレイ後7G RT
  - url: https://pachinko.hatenablog.jp/entry/2008/07/momotaro-dentetsu
    title: サミー「パチスロ 桃太郎電鉄」の筺体＆スペック＆情報
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 設定別BIG/MID/合算、別機械割系列、2008年7月リリース
  - url: https://kenslo65536.com/kaiseki/momotaroudentetu.html
    title: 桃太郎電鉄 解析情報 / けんのスロットシミュレーション
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 設定別50枚回転数、天井なし、別機械割系列、ボーナス確率照合
  - url: https://w.atwiki.jp/5gouki/pages/97.html
    title: 桃太郎電鉄 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-01
    confidence: OLD_DATABASE
    usedFor: 2008-07-16時点の旧スペック記録、ボーナス確率/機械割系列、7G RT構造照合
  - url: https://piro-shiki.com/minashiki-tekkyo/
    title: 5号機みなし機リスト
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_SINGLE
    usedFor: 2008-07-14導入日資料
  - url: https://initialp.cart.fc2.com/ca4/846/
    title: サミー パチスロ桃太郎電鉄 中古実機情報
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_SINGLE
    usedFor: 型式名「桃太郎電鉄G」確認

researchNotes:
  - 2024年コナミアミューズメント「桃太郎電鉄 ～パチスロも定番！～」が検索結果へ大量混入するため、サミー/2008/桃太郎電鉄Gで限定し、同機のAT・天井・有利区間・朝一リセット恩恵は一切流用していない。
  - 現handoffは2008年7月下旬の爺サマーまで進んでいたが、本機は7月14/15日の複数日付資料があり、時系列上それより前の未登録漏れとして遡及追加。
  - 設定別BIG/MID/合算確率は複数系統で一致。機械割は定義/攻略条件差の可能性があり、CONFLICTとして保持。
  - 50枚ベースは設定別35.05〜36.69G/50枚を旧解析で取得できたため、単一解析値として採用し、未確認扱いにはしていない。
