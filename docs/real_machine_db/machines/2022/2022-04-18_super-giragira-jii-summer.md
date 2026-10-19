# 超ギラギラ爺サマー — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1492
canonicalKey: 2022-04-18_super-giragira-jii-summer
machineName: "超ギラギラ爺サマー"
alternateName: "スーパーギラギラ爺サマー / S超ギラギラ爺サマー"
manufacturer: "サボハニ（大都技研系）"
modelCode: "S超ギラギラ爺夏SB2"
inspectionCode: "1S1588"
releaseDate: 2022-04-18
generation: "6号機（細分類は6.1号機 / 6.4号機表記CONFLICT）"
systemType: "AT（差枚数管理型・高純増）"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_CONFLICT
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.1
    "2": 98.5
    "3": 99.8
    "4": 102.0
    "5": 104.0
    "6": 106.1
  initialHitBySetting:
    at:
      "1": "1/762.6"
      "2": "1/723.4"
      "3": "1/683.4"
      "4": "1/642.7"
      "5": "1/609.6"
      "6": "1/579.0"
    cz: "設定別CZ初当り確率の比較可能な公開表は十分な再探索後も固定できず。規定G数到達でCZ『ギラチャンス』へ移行。"
  baseGamesPer50Coins: "約39.3G/50枚（設定1掲載値。複数資料一致）"
  netIncrease: "AT約7.0枚/G"
  basicPayout:
    giragiraAttack: "AT初当り時の初期差枚数決定ゾーン。500/1000/1500/2000/2400枚などのパネルから決定し、AT初期差枚数は最低500枚。"
    giragiraRush: "差枚数管理型AT。純増約7.0枚/G。"
    averageAtPayout: "平均獲得約860枚とする当時解析資料あり（メーカー公表値ではないため解析値として区別）。"
  normalCeiling:
    gameCount: "通常時最大200G+αでCZ『ギラチャンス』。AT直撃天井ではない。"
    modeCeilings: "通常A=200G+α / 通常B=200G+α（150G選択あり） / 特殊=200G+α / 天国=150G+α。"
  modeSpecificMinimumData: "通常時は踊り娘ポイント/アイコンを貯め、規定G数到達でCZ『ギラチャンス』。CZ前後半の自力2択突破後、ギラギラアタックで初期差枚数を決めATへ移行。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。CZ天井の規定G数を新規進行。"
    modeState: "内部状態はRESETとする当時解析資料あり。通常A/B/特殊/天国の設定変更専用振り分け表は十分な再探索後も未固定。"
    advantageousSection: "RESET。新規有利区間。"
    morningStart: "必ず『爺の間』を経由して『ダイビングステージ』へ移行。ダイビングステージは踊り娘ポイント高確率で20G or 30G継続。"
    benefit: "設定変更専用の固定短縮天井・専用AT直撃率は確認できず。ただし新規有利区間移行に伴い爺の間→ダイビングステージへ入り、朝一に20G or 30Gの踊り娘ポイント高確率状態を受ける。"
    disadvantage: "設定変更専用の主要不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。据え置きは天井進行を引き継ぐ。"
    modeState: "ステージはCARRY_OVER。内部モード/状態の個別契約は直接資料不足のため一部UNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "CARRY_OVER。朝一有利区間ランプも前日状態を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "内部状態CARRY_OVERとする当時解析資料あり。ステージ/液晶状態はCARRY_OVERとする別資料あり。"
    advantageousSection: "CARRY_OVER。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    fixedShortening: "NO_PUBLIC_FIXED_RESET_SHORTENING_FOUND。通常最大200G+α、天国選択時150G+α。"
    normalMax: "200G+αでCZ。"
    note: "CZ/AT終了後も必ず有利区間リセットされるため、本機は有利区間引継ぎ無し。"
  modeAfterReset:
    behavior: "新規有利区間へ移行。通常A/B/特殊/天国の設定変更時専用振り分け・設定別振り分けは十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "設定変更時はRESETとする当時解析資料あり。新規有利区間では爺の間→ダイビングステージへ移行。据え置き/純電断は基本CARRY_OVER。"
  advantageousSectionReset: "設定変更でRESET / 据え置き・純電源OFF→ONはCARRY_OVER。CZ失敗後・AT終了後・有利区間完走後にもリセットし、有利区間の引継ぎは無し。"
  resetBenefits:
    - "有利区間リセット時は必ず爺の間を経由してダイビングステージへ移行。"
    - "ダイビングステージは踊り娘ポイント高確率状態で20G or 30G継続。設定変更朝一にも適用。"
    - "固定の設定変更専用天井短縮・専用AT当選率は確認できず。"
  resetPenalties:
    - "設定変更専用の主要不利数値はNO_PUBLIC_RESET_PENALTY_FOUND_AFTER_RESEARCH。"
  resetDetection:
    lampDisplay: "有利区間ランプは通常時の押し順ナビ発生後に点灯し、CZ失敗/AT終了/完走後に消灯。朝一時点の消灯だけでは、新規有利区間でもまだ未点灯のため単独判別は弱い。朝一に前日から点灯していれば据え置き濃厚。朝一消灯から押し順ナビ後に点灯する挙動はリセット濃厚とする資料あり。"
    stage: "朝一『爺の間』→『ダイビングステージ』なら設定変更/有利区間リセットの強い材料（前日同状態ヤメを例外）。爺の間以外の前日ステージを引き継いでいれば据え置き濃厚。"
    reelBehavior: "本機固有の設定変更ガックン条件/発生率は十分な再探索後も直接固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    morningDivingStage: "20G or 30G（踊り娘ポイント高確率状態）。"
    czCeiling: "通常最大200G+α / 天国150G+α。設定変更専用短縮値ではない。"
    dedicatedResetNumeric: "設定変更時専用のモード振り分け、朝一一定G以内AT/CZ当選率、専用恩恵発生率はNO_PUBLIC_RESET_SPECIFIC_NUMERIC_TABLE_FOUND_AFTER_RESEARCH。"

sources:
  - url: https://news.p-world.co.jp/articles/20228/nippon
    sourceType: industry
    usedFor: [machineName, manufacturer, modelCode, releaseDate, systemType, netIncrease, czCeiling]
  - url: https://news.p-world.co.jp/articles/19797/yugitsushin
    sourceType: industry
    usedFor: [manufacturer, releaseWindow, netIncrease, gameplay]
  - url: https://hazuse.com/machine/pachislot/1S1588/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, generation6_1Claim, payoutRateBySetting, atInitialHitBySetting, baseGamesPer50, netIncrease, ceiling, gameplay, divingStage]
  - url: https://1geki.jp/slot/s_sgsummer/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRateBySetting, atInitialHitBySetting, netIncrease, czCeiling, advantageousSectionReset, morningStage, divingStage]
  - url: https://nana-press.com/kaiseki/machine/331/8958/
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, carryOverBehavior, advantageousSectionLamp, ceilingCarryOver, stageCarryOver, advantageousSectionResetTiming, resetDetection]
  - url: https://nana-press.com/kaiseki/machine/331/8961/
    sourceType: analysis-high
    usedFor: [morningStage, divingStage20or30, pointHighState]
  - url: https://www.slopachi-quest.com/article/cyougiragirasamer-tenjou/
    sourceType: contemporary-analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, advantageousSection, morningStage, resetDetection, generation6_1Claim]
  - url: https://slot-seven.com/sgsummer-tenzyou/
    sourceType: contemporary-analysis
    usedFor: [powerCycleBehavior, internalStateResetCarryOver, ceiling, resetDetection, generation6_4Claim]
  - url: https://slotmethod.jp/archives/9609/
    sourceType: contemporary-analysis
    usedFor: [ceiling, resetDetectionNuance, noMajorResetBenefitClaim]
  - url: https://www.p-world.co.jp/machine/database/9601
    sourceType: machine-database
    usedFor: [gameplay, advantageousSectionNoCarryOver, morningDivingStage]
  - url: https://ichikatsu.com/newslot2022/
    sourceType: contemporary-calendar-analysis
    usedFor: [releaseDate, releaseGroupAudit, payoutRateBySetting, atInitialHitBySetting, baseGamesPer50, netIncrease]
  - url: https://p-kn.com/slot/3763/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, payoutRateBySetting, atInitialHitBySetting, baseGamesPer50, netIncrease]
  - url: https://www.slopachi-quest.com/article/cyougiragirajisamer-settei/
    sourceType: contemporary-analysis
    usedFor: [averageAtPayout, basicPayout, generation6_1Claim]
  - url: https://p.hisshobon.jp/machine/3864/1/88968
    sourceType: historical-analysis
    usedFor: [netIncrease, atMinimumInitialPayout, atStructure]
  - url: https://p.hisshobon.jp/machine/3864/1/88492
    sourceType: historical-analysis
    usedFor: [giragiraAttackPanelPayouts, atInitialPayout]

unverifiedAfterResearch:
  - "設定変更時専用の通常A/B/特殊/天国モード振り分け、または設定別振り分け。『超ギラギラ爺サマー/S超ギラギラ爺夏SB2/サボハニ/大都技研』と『設定変更/リセット/朝一/モード移行/モード振り分け/有利区間』を組み替え、HAZUSE・1geki・なな徹・必勝本・当時立ち回り資料を横断したが固定できず。"
  - "設定変更専用の朝一一定G以内CZ/AT当選率、固定リセット恩恵発生率。"
  - "本機固有の設定変更ガックン条件/発生率。"
  - "据え置き時の通常A/B/特殊/天国モードおよび水鉄砲連モード等の内部状態を個別にどこまで保持するかの完全な契約。天井・有利区間・ステージ引継ぎは直接確認済み。"

conflicts:
  - field: "generation"
    values:
      - "6.1号機 — HAZUSE / スロパチクエスト等"
      - "6.4号機 — スロットセブン等"
    resolution: "CONFLICT。性能コア・resetBehaviorには影響しないため『6号機』を上位分類canonicalとし、細分類は両表記を保持して平均化・強制統一しない。"

researchNotes:
  - "性能コアの機械割97.1/98.5/99.8/102.0/104.0/106.1%、AT初当り1/762.6〜1/579.0、約39.3G/50枚、純増約7.0枚/GはHAZUSE・1geki・K-Navi・イチカツ等で一致。"
  - "正式型式S超ギラギラ爺夏SB2、検定番号1S1588はHAZUSEで確認。P-WORLD業界記事も正式型式を一致確認。"
  - "設定変更/据え置きはなな徹の朝一比較表で、有利区間ランプ・天井・ステージが変更=RESET/爺の間、据え置き=CARRY_OVERと確認。"
  - "純電源OFF→ONはスロパチクエストで天井・有利区間・ステージCARRY_OVER、スロットセブンで内部状態CARRY_OVERを照合。"
  - "1geki/P-WORLD/なな徹でCZ・AT終了後は有利区間をリセットし、有利区間引継ぎ無しを確認。"
  - "朝一ランプ判別は『朝一消灯=即変更』とはしない。有利区間移行直後はランプがすぐ点灯せず押し順ナビ後に点灯するため、前日点灯の残存・爺の間→ダイビングステージ・消灯→押し順ナビ後点灯を組み合わせる必要がある。"
```
