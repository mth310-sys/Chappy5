# 沖ドキ！DUO — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1454
canonicalKey: 2021-12-20_okidoki-duo
machineName: 沖ドキ！DUO
manufacturer: アクロス
modelCode: S/沖ドキ!DUO/DH
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2021-12-20
generation: "6.2号機"
systemType: AT / 疑似ボーナス / モード移行・連チャン型 / 25φ
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.0
    "2": 98.5
    "3": 100.7
    "4": 103.1
    "5": 105.0
    "6": 107.2
  initialHitBySetting:
    "1": "ボーナス初当り 1/255.1"
    "2": "ボーナス初当り 1/244.4"
    "3": "ボーナス初当り 1/228.4"
    "4": "ボーナス初当り 1/216.7"
    "5": "ボーナス初当り 1/206.1"
    "6": "ボーナス初当り 1/196.8"
  bigBySetting:
    "1": "1/163.9"
    "2": "1/158.1"
    "3": "1/149.1"
    "4": "1/140.7"
    "5": "1/134.0"
    "6": "1/126.9"
  regBySetting:
    "1": "1/320.8"
    "2": "1/308.4"
    "3": "1/289.1"
    "4": "1/275.1"
    "5": "1/262.6"
    "6": "1/251.5"
  baseGamesPer50Coins: "約31.4G"
  netIncrease: "約4.0枚/G"
  basicPayout: "びっぐぼーなす=ベルナビ35回・平均約210枚 / れぎゅらーぼーなす=ベルナビ10回・平均約60枚"
  normalCeiling: "通常時最大800Gでボーナス。チャンスモードは通常200G、天国以上は32G。"
  modeSpecificMinimumData:
    heavenLoop: "天国以上は32G以内のボーナス連。上位を含め最大90%ループ。"
    dokihanaChance: "ボーナス後33G目に発生可能な1G限定ゾーン。成功期待度50%超。"
    advantageousSection: "6.2号機・有利区間最大3000G対応。"
  notes:
    - "25φ版。30φ『沖ドキ！DUO-30』（型式 S/沖ドキ!DUO/DK-30）は別レコード対象。"
    - "製造元・型式、基本スペックは2021年当時の業界発表と複数解析資料で照合。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "有利区間・天井をRESET。さらに設定変更時は滞在モードを問わず規定ゲーム数が32G短縮され、通常A/B等は768G、チャンスは168Gが実質上限目安（非有利区間→有利区間移行までのG数で数Gずれる場合あり）。"
    modeState: "内部モード、モードテーブル、ドキハナモードをRESETし再抽選。設定変更時の初回モードは通常A 41.0% / 通常B 14.9% / チャンス 43.4% / 特殊 0.8%。"
    advantageousSection: "RESET。非有利区間から成立役に応じて有利区間へ移行し、モードテーブルを抽選。"
    morningStart: "初回モードの約43.4%がチャンスで、設定変更時は規定G数が一律32G短縮。"
    benefit: "通常B以上相当の初回モードが約59.1%（通常B14.9%+チャンス43.4%+特殊0.8%）。チャンス選択時は168G付近までが強い朝一狙い材料。"
    disadvantage: "比較可能な設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "天井・ゲーム数を引き継ぐ。"
    modeState: "内部モード、モードテーブル、ドキハナモードを引き継ぐ。"
    advantageousSection: "進行中の有利区間を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "引き継ぐ。"
    modeState: "内部モード、モードテーブル、ドキハナモードを引き継ぐ。"
    advantageousSection: "引き継ぐ。"
    stage: "表示上の見た目だけで設定変更との確定判別は困難。"
  gameCounterReset: "設定変更でRESET / 据え置き・純電源OFF→ONでCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "設定変更時は全モードで規定ゲーム数を32G短縮。通常A/B等=768G、チャンス=168Gが目安。非有利区間滞在G数により実際の見た目G数はずれる場合あり。"
  modeAfterReset:
    behavior: "モードテーブルを再抽選し、そのテーブルに基づく初回モードを選択。"
    resetSpecificDistribution:
      normalA: "41.0%"
      normalB: "14.9%"
      chance: "43.4%"
      special: "0.8%"
    tableNote: "レア役以外で有利区間移行時、上位テーブル10〜16を60%以上で選択。チェリー/スイカ成立時はテーブル選択がさらに優遇。"
  stateAfterReset:
    behavior: "ドキハナモードをRESET。その他の細かな内部状態抽選は物差し範囲外。"
    numeric: null
  advantageousSectionReset: "RESET_ON_SETTING_CHANGE / CARRY_OVER_ON_UNCHANGED_AND_POWER_CYCLE"
  resetBenefits:
    - "設定変更時の初回モード：通常A 41.0% / 通常B 14.9% / チャンス 43.4% / 特殊 0.8%。"
    - "設定変更時は規定ゲーム数を32G短縮。チャンスなら168G、その他の最大天井系は768Gが目安。"
    - "初回モードの約59.1%が通常B以上相当。"
  resetPenalties:
    - "比較可能な設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更ガックン条件・発生率は高信頼の直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時は有利区間ランプが消灯している局面があるため、朝一消灯だけでは設定変更判別は困難。前日ランプ点灯状態で閉店し朝一も点灯なら据え置き濃厚。"
    other: "当日1回目のボーナス後『シーちゃん・サーくん』ランプが両方点灯（デフォルト）なら据え置き確定とする解析あり。設定変更を確実に見抜くのは困難。"
  numericResetData:
    firstModeAfterSettingChange: "通常A 41.0% / 通常B 14.9% / チャンス 43.4% / 特殊 0.8%"
    resetGameShortening: "全モード32G短縮"
    chanceModeCeilingAfterReset: "168G目安"
    otherMaxCeilingAfterReset: "768G目安"
    normalBOrBetterEquivalentFirstMode: "約59.1%"

sources:
  - url: https://news.p-world.co.jp/articles/18422/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, releaseTiming, payoutRate, initialHit, bigRegRates, netIncrease, basicPayout, dokihanaChance]
  - url: https://www.p-world.co.jp/machine/database/9517
    sourceType: machine-database
    usedFor: [generation, systemType, netIncrease, basicPayout, heavenLoop, advantageousSection]
  - url: https://nana-press.com/kaiseki/machine/223/7069/
    sourceType: contemporary-analysis
    usedFor: [payoutRate, initialHitBySetting, bigBySetting, regBySetting]
  - url: https://nana-press.com/kaiseki/machine/223/7083/
    sourceType: analysis
    usedFor: [settingChange, advantageousSectionReset, modeTable, firstModeDistribution, resetGameShortening]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/20/kr01.php
    sourceType: contemporary-analysis
    usedFor: [settingChange, powerOffOn, unchanged, modeResetCarryOver, detection, firstModeDistribution]
  - url: https://1geki.jp/slot/s_okidoki_duo_25/3/
    sourceType: analysis
    usedFor: [normalCeiling, resetGameShortening, chanceModeCeilingAfterReset, otherCeilingAfterReset]
  - url: https://slot-seven.com/okidokiduo-settei/
    sourceType: contemporary-analysis
    usedFor: [releaseDate, baseGamesPer50Coins, netIncrease, payoutRate, initialHit]

unverifiedAfterResearch:
  - "検定番号。型式 S/沖ドキ!DUO/DH は当時業界発表で固定したが、今回アクセス可能な公的検定番号の直接資料を固定できず。"
  - "本機固有の設定変更ガックン条件・発生率。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1453を確認し、handoff指定の25φ版『沖ドキ！DUO』から継続。
- 2021年当時の遊技日本/P-WORLD業界記事で製造元アクロス、型式 `S/沖ドキ!DUO/DH`、25φ版と30φ版 `S/沖ドキ!DUO/DK-30` の別型式を確認。両者を混同せず独立レコード化する。
- 性能コアは業界記事・なな徹・複数解析で一致。設定1〜6機械割97.0〜107.2%、初当り1/255.1〜1/196.8、約31.4G/50枚、純増約4.0枚/G、BIG約210枚/REG約60枚を固定。
- resetBehaviorはパチマガスロマガ、なな徹、一撃を横断。設定変更=有利区間/天井/モードテーブル/ドキハナモードRESET、純電断=引継ぎ、設定変更時32G短縮を固定。
- 設定変更時初回モードは通常A41.0% / B14.9% / チャンス43.4% / 特殊0.8%。通常B以上相当合計約59.1%。
- 検定番号と本機固有ガックンは、機種名/型式/メーカー/検定/設定変更/据え置き/電源OFF ON/ガックン等へ検索語・資料系統を変えても高信頼直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。