# スペシャルハナハナ-30

machineName: スペシャルハナハナ-30
alternateNames:
  - スペシャルハナハナ30
manufacturer: パイオニア
releaseDate: 2008-07-13
releaseDatePrecision: DELIVERY_START_CONFIRMED_INDUSTRY
modelName: ハナハナS-30
testNumber: 8S0413
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ
payoutRateBySetting:
  manufacturerPublished:
    setting1: 95.0%
    setting2: 98.0%
    setting3: 100.0%
    setting4: 103.0%
    setting5: 106.0%
    setting6: 109.0%
  simulationSource:
    setting1: 96.82%
    setting2: 99.30%
    setting3: 101.75%
    setting4: 104.02%
    setting5: 106.18%
    setting6: 108.15%
  confidence: CONFLICT
  note: 当時系/後年整理のメーカー発表値95.0〜109.0%と、パチマガスロマガのシミュレート値96.82〜108.15%は定義が異なるため平均せず双方を保持。
initialHitBySetting:
  BIG:
    setting1: 1/327.68
    setting2: 1/312.08
    setting3: 1/297.89
    setting4: 1/286.18
    setting5: 1/276.52
    setting6: 1/268.59
  REG:
    setting1: 1/546.13
    setting2: 1/504.12
    setting3: 1/468.11
    setting4: 1/436.91
    setting5: 1/409.60
    setting6: 1/385.51
  combined:
    setting1: 1/204.80
    setting2: 1/192.75
    setting3: 1/182.04
    setting4: 1/172.92
    setting5: 1/165.08
    setting6: 1/158.30
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガの精密値と複数二次資料の丸め値が一致。
baseGamesPer50:
  setting1: 39.02G
  setting2: 39.21G
  setting3: 39.40G
  setting4: 39.59G
  setting5: 39.78G
  setting6: 39.97G
  confidence: ANALYSIS_SINGLE
  note: 後年解析資料の設定別値。P-WORLDも千円約39Gとして整合。
netIncrease: NOT_APPLICABLE（RT/ART/ATなしのノーマルタイプ）
basicPayout:
  BIG:
    payoutDisplay: 345枚超払い出しで終了
    netPayout: 約312枚
  REG:
    payoutDisplay: 135枚超払い出しで終了
    netPayout: 約130枚
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ、P-WORLD、当時業界記事で整合。
modeSpecificMinimumData:
  gameSystem:
    type: 完全告知ノーマル
    note: ハイビスカス告知。RTなどの付加機能なし。
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 通常ゲーム数天井・救済RT・周期CZの公開情報を確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/パイオニアと「設定変更・リセット・朝一・据え置き」を組み替え、当時解析・P-WORLD・旧DB・後年資料を再探索したが、本機固有の設定変更時内部処理を直接確定できず。
  carryOverBehavior: NO_GAME_COUNT_OR_MODE_SYSTEM_CONFIRMED。据え置きで客行動に影響する公開天井ゲーム数・モード・RT残状態は確認されない。本機固有の初期出目維持等はUNVERIFIED。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ON単独時の初期出目/告知ランプ等の本機固有挙動を直接確認できず。
  gameCounterReset: NO_NORMAL_GAME_CEILING_COUNTER_CONFIRMED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開モードシステム/朝一専用モードを確認できず。
  stateAfterReset: NO_PERSISTENT_RT_ART_STATE_CONFIRMED。RT/ART/ATなし。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。後年ハナハナシリーズ一般のガックン情報はあるが、2008年スペシャルハナハナ-30固有の直接資料を確認できないため流用しない。
  numericResetData: NONE_CONFIRMED

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_DETECTION_UNVERIFIED

conflicts:
  - field: payoutRateBySetting
    sourceA: メーカー発表値系列 / 後年解析整理
    valueA: 95.0 / 98.0 / 100.0 / 103.0 / 106.0 / 109.0%
    sourceB: パチマガスロマガ シミュレート値
    valueB: 96.82 / 99.30 / 101.75 / 104.02 / 106.18 / 108.15%
    handling: CONFLICT。定義差があるため平均化せず双方を保持。

missingFields:
  - 本機固有の設定変更時内部処理
  - 電源OFF→ON単独時の本機固有初期挙動
  - 本機固有のガックン/初期出目による変更判別

sources:
  - url: https://web-greenbelt.jp/00003662/
    title: 人気機種『ハナハナ』シリーズ最新作 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-06-18発表、2008-07-13納品開始予定、合算1/204〜1/158、BIG約312枚、設定5/6出玉率106%/109%
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/86/h.php
    title: スペシャルハナハナ30 ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算確率、シミュレートPAYOUT
  - url: https://psmaga.com/db/s_conq/pioneer_slot/86/a.php
    title: スペシャルハナハナ30 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル完全告知、RT等付加機能なし、BIG345枚・約312枚、REG135枚・約130枚
  - url: https://www.p-world.co.jp/machine/database/5237
    title: スペシャルハナハナ30 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 5号機ノーマル30Φ、型式ハナハナS-30、検定番号8S0413、2008年7月導入、千円約39G、基本獲得枚数の照合
  - url: https://kenslo65536.com/kaiseki/special-hanahana-30.html
    title: スペシャルハナハナ-30 解析情報 / けんのスロットシミュレーション
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 設定別50枚回転数、メーカー発表出玉率系列、設定別BIG/REGの照合
  - url: https://hazuse.com/machine/pachislot/8S0413/
    title: スペシャルハナハナ-30 / ハズセ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 導入開始日2008-07-13、型式名・検定番号・払い出し条件の照合

researchNotes:
  - 2008年6月残候補を監査したが、洞爺湖サミット入替自粛期のため発表月と実導入月がずれやすい。今回、2008-07-13納品開始を当時業界記事で直接確認できたスペシャルハナハナ-30を次の確定未処理機として採用。
  - 性能コアはパチマガスロマガ精密値を主軸にし、P-WORLD、当時業界記事、後年解析で照合した。
  - 機械割はメーカー発表系列とシミュレート値系列をCONFLICTとして分離。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/天井」を機種名・型式名・メーカー名と組み替えて再探索。通常ゲーム数天井、モード、RT/ART/AT、朝一専用恩恵は確認されず、本機固有の設定変更/電断/判別挙動だけをUNVERIFIED_AFTER_RESEARCHで残した。