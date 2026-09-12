# 秘宝伝 解き放たれた女神 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1457
canonicalKey: 2021-12-20_hihouden-tokihanatareta-megami
machineName: 秘宝伝 解き放たれた女神
manufacturer: サボハニ
modelCode: S秘宝伝 解き放たれた女神SA1
inspectionCode: 0S0183
releaseDate: 2021-12-20
generation: "6号機"
systemType: AT / 疑似ボーナス / 伝説ループ / 差枚数管理AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.5
    "2": 98.7
    "3": 100.6
    "4": 102.8
    "5": 105.2
    "6": 110.0
  initialHitBySetting:
    "1": "初当り合算 1/364.9"
    "2": "初当り合算 1/346.7"
    "3": "初当り合算 1/314.1"
    "4": "初当り合算 1/290.4"
    "5": "初当り合算 1/274.3"
    "6": "初当り合算 1/240.9"
  baseGamesPer50Coins: "約50.8G"
  netIncrease: "秘宝RUSH 約2.5枚/G / 超秘宝RUSH 約4.3枚/G"
  basicPayout: "秘宝BONUSは50枚獲得まで継続。秘宝RUSHは初期100枚の差枚数管理型。秘宝CHANCEは10G or 20G+α。"
  normalCeiling: "663G+前兆で秘宝BONUS当選（業界発表・解析一致）。通常時モードのポイント天井はA=700pt / B=600pt / チャンス=100pt。"
  modeSpecificMinimumData:
    modes: "通常A / 通常B / チャンス。モードごとに規定ポイント帯とポイント天井が異なる。"
    mainAT: "秘宝RUSHは純増約2.5枚/G・初期100枚。"
    upperAT: "超秘宝RUSHは純増約4.3枚/G。業界発表でエンディング到達率95%と案内。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "天井/ゲーム数をRESET。"
    modeState: "有利区間をRESETし、有利区間移行時の通常モード抽選を新規実施。内部状態もRESETとする解析。"
    advantageousSection: "RESET。"
    morningStart: "墳墓ステージから開始。"
    benefit: "固定のリセット専用天井短縮や専用モード優遇率は確認できず。朝一ステージにより変更推測が可能。"
    disadvantage: "比較可能な設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "天井/ゲーム数を引き継ぐ。"
    modeState: "内部状態・通常モードを引き継ぐ。"
    advantageousSection: "進行中の有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "引き継ぐ。"
    modeState: "内部状態/ステージを引き継ぐ。"
    advantageousSection: "引き継ぐ。"
  gameCounterReset: "設定変更でRESET / 据え置き・純電源OFF→ONでCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "確認できず。通常の663G+前兆天井を新規スタート。"
  modeAfterReset:
    behavior: "有利区間移行時の通常A/B/チャンスモード抽選を新規実施。設定変更専用の独立モード振り分けは確認できず。"
  stateAfterReset:
    behavior: "設定変更でRESET / 据え置き・純電断でCARRY_OVERとする解析。"
  advantageousSectionReset: "RESET_ON_SETTING_CHANGE / CARRY_OVER_ON_UNCHANGED_AND_POWER_CYCLE"
  resetBenefits:
    - "朝一は墳墓ステージ開始となるため、前日閉店時のステージ情報があれば変更判別材料になる。"
  resetPenalties:
    - "比較可能な設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は、機種名/型式/メーカー/設定変更/朝一/据え置き/ガックン等で再探索後も高信頼直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプでは設定変更判別不可と複数解析が明記。"
    other: "朝一が墳墓ステージなら設定変更濃厚、墳墓以外なら据え置き濃厚。店舗側が回してステージ変更する対策は例外。"
  numericResetData:
    resetStage: "墳墓ステージ"
    resetCeiling: "通常663G+前兆を新規スタート（専用短縮値なし）"

sources:
  - url: https://hazuse.com/machine/pachislot/0S0183/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRate, initialHitBySetting, baseGamesPer50Coins, netIncrease, basicPayout, systemType]
  - url: https://hazuse.com/machine/pachislot/0S0183/genre/203/
    sourceType: analysis-high
    usedFor: [basicPayout]
  - url: https://nana-press.com/kaiseki/machine/164/7085/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHitBySetting]
  - url: https://nana-press.com/kaiseki/machine/164/7090/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://news.p-world.co.jp/articles/18450/greenbelt
    sourceType: industry
    usedFor: [manufacturer, releaseWindow, initialHitBySetting, payoutRate, baseGamesPer50Coins, normalCeiling, netIncrease, basicPayout, upperAT]
  - url: https://p-kn.com/slot/3704/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, initialHitBySetting]
  - url: https://1geki.jp/slot/hihouden_kaihou/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, initialHitBySetting, systemType]
  - url: https://chonborista.com/slot/daito-slot/153123/
    sourceType: analysis
    usedFor: [normalCeiling, modeStructure, settingChange, powerOffOn, advantageousSectionReset, resetDetection, resetStage]
  - url: https://ichikatsu.com/hihoudenkaihou/
    sourceType: analysis
    usedFor: [settingChange, powerOffOn, resetDetection, resetStage]

unverifiedAfterResearch:
  - "本機固有の設定変更ガックン条件・発生率。"
  - "設定変更専用の通常A/B/チャンス各モード振り分け率。"

conflicts:
  - "導入開始日の業界発表に12月19日予定表記がある一方、HAZUSE/K-Navi/各解析は2021-12-20で一致。本DBのホール導入日は2021-12-20をcanonicalとし、発表段階の12月19日は予定差として扱う。"
```

## QAメモ
- 2026-09-12: No.1456保存後、同じ2021-12-20群の次機として処理。
- HAZUSEで型式 `S秘宝伝 解き放たれた女神SA1`、検定番号 `0S0183`、メーカーサボハニ、2021-12-20導入を固定。
- HAZUSE・なな徹・K-Navi・一撃・業界記事で機械割97.5〜110.0%、初当り1/364.9〜1/240.9、約50.8G/50枚、秘宝RUSH純増約2.5枚/Gを照合。
- resetBehaviorは設定変更=天井/有利区間RESET、純電源OFF→ON=引継ぎ、朝一墳墓ステージを複数解析で確認。
- 有利区間ランプではリセット判別不可。朝一ステージは判別材料だが店舗側対策を例外として明記。
- リセット専用短縮天井・設定変更専用モード振り分け・固有ガックンは十分な再探索後も直接値を固定できず推測していない。