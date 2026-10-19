# スーパージャックポットN

machineName: スーパージャックポットN
manufacturer: ヤーマ
releaseDate: 2008-07-13
releaseDatePrecision: INDUSTRY_DELIVERY_START_DATE
modelName: スーパージャックポットN
generation: 5号機
systemType: ノーマル + 天井RT / 完全告知
payoutRateBySetting:
  industryAndPworld:
    setting1: 97.0%
    setting2: 98.5%
    setting3: 101.0%
    setting4: 103.5%
    setting5: 106.0%
    setting6: 108.0%
  pacnkRetrospective:
    setting1: 98.71%
    setting2: 101.01%
    setting3: 103.51%
    setting4: 104.80%
    setting5: 106.06%
    setting6: 107.15%
  confidence: CONFLICT
  note: 当時業界記事/P-WORLD/5号機クロニクルは97.0〜108.0%で一致。後年pacnk掲載値は98.71〜107.15%で差が大きく、算出条件・定義差の可能性があるため平均せず双方保持。
initialHitBySetting:
  BIG:
    setting1: 1/292.57
    setting2: 1/277.69
    setting3: 1/268.59
    setting4: 1/264.26
    setting5: 1/260.06
    setting6: 1/256.00
  REG:
    setting1: 1/399.61
    setting2: 1/372.36
    setting3: 1/341.33
    setting4: 1/327.68
    setting5: 1/327.68
    setting6: 1/315.08
  combinedCalculatedFromPreciseRates:
    setting1: 約1/168.91
    setting2: 約1/159.07
    setting3: 約1/150.31
    setting4: 約1/146.29
    setting5: 約1/144.99
    setting6: 約1/141.24
  note: 当時業界記事では合成約1/168（設定1）〜1/141（設定6）。P-WORLDの丸めBIG/REG値とも整合。
  confidence: ANALYSIS_HIGH
baseGamesPer50:
  settingRange: 約34〜36G/50枚
  confidence: INDUSTRY
  note: グリーンべると当時記事の1000円あたりベース。
netIncrease:
  ceilingRT: 現状維持程度
  confidence: INDUSTRY
basicPayout:
  BIG: 約312枚
  REG_OR_CHALLENGE_BONUS: 約104枚
  confidence: ANALYSIS_HIGH
modeSpecificMinimumData:
  ceilingRT:
    trigger: ボーナス終了後600G消化
    duration: 次回ボーナスまで
    netIncrease: 現状維持程度
    confidence: INDUSTRY
  extraRT:
    status: EXISTENCE_MENTIONED_BUT_DETAILS_UNVERIFIED
    note: 当時攻略配布告知に「天井RTや一日数回程度しか突入しないオマケ程度のRT」とあるが、物差し用途に必要な詳細公開値は今回確定できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名・型式名・メーカー名と設定変更/リセット/朝一/据え置き/600G天井/RTを組み替え、当時攻略・旧DB・中古実機資料・回顧資料まで再探索したが、設定変更時に600G天井カウンタをクリア/引継ぎする直接資料を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の600G天井カウンタおよび天井RT状態の引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の600G天井カウンタ/天井RT状態の扱いを示す直接資料なし。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時はボーナス終了後600Gで天井RTに入ること自体は確定しているが、設定変更・電断時のカウンタ処理は未確定。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更後のみの短縮天井/変更天井数値は確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開された通常モードシステム/朝一専用モードは確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。天井RT中の設定変更・据え置き・電源OFF→ON時の残状態処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示、600G挙動等を使った本機固有の設定変更/据え置き判別資料を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT_PAYOUT_DEFINITION_OR_SOURCE
    sourceA: 当時グリーンべると / P-WORLD / 5号機クロニクル = 97.0 / 98.5 / 101.0 / 103.5 / 106.0 / 108.0%
    sourceB: pacnk = 98.71 / 101.01 / 103.51 / 104.80 / 106.06 / 107.15%
    handling: 平均化せず双方保持。物差し集計では定義確認まで混在禁止。

missingFields:
  - 設定変更時の600G天井カウンタ処理
  - 据え置き時の600G天井カウンタ/RT状態引継ぎ
  - 電源OFF→ONのみの場合のカウンタ/RT状態
  - 天井RT中の設定変更/電断時状態処理
  - 本機固有の設定変更判別（ガックン/初期出目等）
  - オマケRTの公開詳細数値

sources:
  - url: https://web-greenbelt.jp/00006484/
    title: 名機ジャックポット、堂々の復活！！ / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-07-13納品開始予定、BIG約312枚、REG約104枚、ボーナス後600Gで次回ボーナスまで天井RT、RT純増現状維持程度、合成1/168〜1/141、出玉率97〜108%、1000円ベース34〜36G
  - url: https://www.p-world.co.jp/machine/database/5192
    title: スーパージャックポット「2008年」 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 型式名スーパージャックポットN、設定別BIG/REG丸め値、出玉率、BIG/REG獲得枚数
  - url: https://pacnk.com/slot/tools/sh_supajakkupotto2008.html
    title: スーパージャックポット 設定判別ツール / pacnk
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 設定別BIG/REG精密値、別系列PAYOUT
  - url: https://5goki.com/yama
    title: ヤーマ5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年7月導入、設定別機械割97〜108%照合
  - url: https://www.a-slot.com/SHOP/yama1.html
    title: ヤーマ スーパージャックポット 中古パチスロ実機 / A-SLOT
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_SINGLE
    usedFor: BIG約312枚、CB約104枚、600G以上で次回ボーナスまでRTの回顧照合
  - url: https://plaza.rakuten.co.jp/mosnet/diaryall/
    title: マイクロオーダーサービス 新着記事一覧
    retrievedAt: 2026-09-01
    confidence: HISTORICAL_SECONDARY
    usedFor: 天井RTのほか一日数回程度のオマケRTが存在する旨の当時系記録
  - url: https://web-greenbelt.jp/00003699/
    title: 情報提供端子板の対応機種、8社12機種に / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-07-19時点でスーパージャックポットN/スーパージャックポットが対応機種に列挙されていることの時系列照合

researchNotes:
  - 2008-05-23付の当時業界記事で「入替自粛期間明けの7月13日から納品開始予定」と具体日が取れるため、releaseDateは2008-07-13を採用。
  - P-WORLDの型式名はスーパージャックポットN。グリーンべるとの製品名表記もスーパージャックポットNで一致。
  - 機械割は当時業界/P-WORLD/5号機クロニクル系列とpacnk精密値系列が一致しないためCONFLICT。算出条件差を推測して統合しない。
  - resetBehaviorは天井の存在自体を一般論から補完せず、設定変更/据え置き/電断時挙動の直接根拠が取れた項目のみ確定する方針を維持。
