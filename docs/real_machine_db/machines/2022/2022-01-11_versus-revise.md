# バーサスリヴァイズ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1459
canonicalKey: 2022-01-11_versus-revise
machineName: バーサスリヴァイズ
manufacturer: エレコ
modelCode: S／バーサスリヴァイズ／HS
inspectionCode: 1S1163
releaseDate: 2022-01-11
generation: "6.2号機"
systemType: A+RT / リアルボーナス / 技術介入
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_LIMITED_DIRECT_RESET_SOURCES
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "5", "6"]
  payoutRatePctMarketForecast:
    "1": 99.3
    "2": 101.1
    "5": 103.5
    "6": 105.8
  payoutRatePctFullStrategy:
    "1": 102.0
    "2": 104.0
    "5": 106.5
    "6": 109.0
  initialHitBySetting:
    "1": "BB 1/292.6 / RB 1/374.5 / 合算 1/164.3"
    "2": "BB 1/284.9 / RB 1/341.3 / 合算 1/155.3"
    "5": "BB 1/275.4 / RB 1/319.7 / 合算 1/147.9"
    "6": "BB 1/264.3 / RB 1/292.6 / 合算 1/138.8"
  baseGamesPer50Coins: "約43G（設定1目安）"
  netIncrease: "VS CHANCE 約0.3枚/G / VS GAME 約0.6枚/G"
  basicPayout: "BIG最大222枚 / REG最大112枚。BIG後はVS CHANCE最大20G、JAC IN後VS GAME20G。"
  normalCeiling: "非搭載"
  modeSpecificMinimumData:
    technicalIntervention: "完全攻略時機械割は設定1でも102.0%。REGは手順により平均獲得が変動し、上級手順で最大112枚。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "天井非搭載のためNOT_APPLICABLE。通常時ゲーム数に朝一狙い上の意味はない。"
    modeState: "通常時AT/CZモード非搭載のためNOT_APPLICABLE。設定変更専用モード・朝一優遇は確認できず。"
    advantageousSection: "本機の通常時A+RT運用では朝一狙いに用いる有利区間リセット挙動はNOT_APPLICABLEとして扱う。"
    morningStart: "設定変更専用の朝一モード・天井短縮・公開当選優遇は確認できず。"
    benefit: "確認できる設定変更専用の主要恩恵なし。"
    disadvantage: "確認できる設定変更専用の主要不利要素なし。"
  unchanged:
    gameCountCeiling: "天井非搭載のためNOT_APPLICABLE。"
    modeState: "通常時モード非搭載のためNOT_APPLICABLE。"
    advantageousSection: "朝一狙い上の有利区間差なしとして扱う。"
  powerOffOn:
    gameCountCeiling: "天井非搭載のためNOT_APPLICABLE。"
    modeState: "通常時モード非搭載のためNOT_APPLICABLE。"
    advantageousSection: "朝一狙い上の有利区間差なしとして扱う。"
  gameCounterReset: "天井非搭載のためNOT_APPLICABLE。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井そのものを搭載しない。"
  modeAfterReset:
    behavior: "NOT_APPLICABLE。通常時AT/CZモード非搭載。"
  stateAfterReset:
    behavior: "設定変更/据え置き/純電断時の成立済みボーナス・RT内部状態の厳密な保持/初期化契約は、複数検索語・資料系統を横断後も直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE_FOR_MORNING_STRATEGY"
  resetBenefits:
    - "設定変更専用の天井短縮・朝一モード・初当たり優遇は確認できず。"
  resetPenalties:
    - "設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "朝一1G目は設定変更でもガックンしないとする解析あり。純電源OFF→ONでもガックンしない。"
    lampDisplay: "有利区間ランプを用いた変更判別は対象外。"
    other: "ユニメモは設定変更でも純電源OFF→ONでも残るとする解析あり。設定変更判別は実質困難。"
  numericResetData: {}

sources:
  - url: https://news.p-world.co.jp/articles/18423/nippon
    sourceType: industry
    usedFor: [manufacturer, modelCode, systemType, payoutRate, initialHitBySetting, basicPayout]
  - url: https://news.p-world.co.jp/articles/19118/nippon
    sourceType: industry
    usedFor: [releaseDate, modelCode, basicPayout]
  - url: https://www.pachibee.jp/machines/index/221110007
    sourceType: industry-media
    usedFor: [releaseDate, generation, systemType, payoutRate, basicPayout, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S1163/genre/201/
    sourceType: analysis-high
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S1163/genre/203/
    sourceType: analysis-high
    usedFor: [systemType, ceiling, basicPayout, netIncrease]
  - url: https://hazuse.com/machine/pachislot/1S1163/genre/208/
    sourceType: analysis-high
    usedFor: [initialHitBySetting]
  - url: https://chonborista.com/slot/universal-slot/155031/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, initialHitBySetting, baseGamesPer50Coins, ceiling, basicPayout]
  - url: https://www.nankaikoya.jp/versus-rexse-settei/
    sourceType: analysis-single
    usedFor: [settingChange, powerOffOn, resetDetection, ceiling]

unverifiedAfterResearch:
  - "設定変更/据え置き/純電源OFF→ON時の成立済みボーナス状態およびRT内部状態の厳密な保持/初期化契約。"
  - "メーカー一次資料での設定変更時ガックン非発生仕様。現時点では二次解析一致を採用。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新handoff No.1458の次機として登録。
- 2021-12-21〜2022-01-10の境界を再監査。一撃の2021年12月カレンダーではスロット最終群が12/20で、2022年側の複数カレンダーは次の主要導入群を1/11としているため、本線を2022-01-11へ前進。
- 型式 `S／バーサスリヴァイズ／HS`、検定番号 `1S1163`、2022-01-11導入、エレコをHAZUSE/業界記事で照合。
- 市場予測機械割99.3〜105.8%、完全攻略102.0〜109.0%、BB/RB確率、約43G/50枚、BIG最大222枚/REG最大112枚を複数資料で照合。
- 天井・通常時AT/CZモード非搭載のため、resetBehaviorでは短縮天井・朝一モード・有利区間朝一差をNOT_APPLICABLEとして分離。
- 朝一ガックンなし、ユニメモ保持、設定変更判別ほぼ不可という解析を確認。ただしメーカー一次の変更判別仕様は固定できないため信頼度を分離した。
