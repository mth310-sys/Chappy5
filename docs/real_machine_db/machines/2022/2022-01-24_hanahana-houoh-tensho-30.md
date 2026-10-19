# ハナハナホウオウ～天翔～-30 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1465
canonicalKey: 2022-01-24_hanahana-houoh-tensho-30
machineName: ハナハナホウオウ～天翔～-30
manufacturer: パイオニア
modelCode: Sハナハナホウオウ～天翔～EX-30
inspectionCode: 0S1174
releaseDate: 2022-01-24
generation: "6.1号機"
systemType: ノーマル / 完全告知 / 30φ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_RESET_MACHINE_SPECIFIC_CONTRACT_PARTIAL
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.0
    "2": 99.0
    "3": 101.0
    "4": 103.0
    "5": 106.0
    "6": 109.0
  initialHitBySetting:
    definition: "リアルボーナス。業界記事・HAZUSE・1geki・P-WORLDで照合。"
    "1": "BIG 1/297 / REG 1/496 / 合算 1/186"
    "2": "BIG 1/284 / REG 1/458 / 合算 1/175"
    "3": "BIG 1/273 / REG 1/425 / 合算 1/166"
    "4": "BIG 1/262 / REG 1/397 / 合算 1/157"
    "5": "BIG 1/249 / REG 1/366 / 合算 1/148"
    "6": "BIG 1/236 / REG 1/337 / 合算 1/139"
  baseGamesPer50Coins: "約42G/50枚（HAZUSE設定1、1geki設定1-6表記で一致）"
  netIncrease: "NOT_APPLICABLE（リアルボーナス主体ノーマル機）"
  basicPayout: "BIG最大240枚 / REG最大120枚"
  normalCeiling: "非搭載"
  modeSpecificMinimumData:
    bonusSystem: "ハイビスカス点灯でボーナス。単独当選時の告知は当選GレバーON約85%、次GレバーON約10%、チェリー等小役同時当選は次GレバーON約5%。"
    thirtyPhiSeparation: "25φ『ハナハナホウオウ～天翔～ / Sハナハナホウオウ～天翔～LX / 0S1386』とは別型式・別検定番号。同日導入。公開基本スペックは一致するが全機種方針に従い独立登録。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "AT/ART/CZモードはNOT_APPLICABLE。30φ型式固有のBETランプ/BGM履歴/成立済みボーナス等の設定変更契約は、表記揺れ・型式名・朝一/設定変更/ガックン/BETランプを変えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE（純ボーナスノーマル機として朝一の有利区間進行を使用しない）"
    morningStart: "設定変更専用の短縮天井・CZ/AT・朝一専用モードは非該当。30φ型式固有の表示/内部履歴初期化はUNVERIFIED_AFTER_RESEARCH。"
    benefit: "公開された設定変更専用の主要恩恵は確認されない。"
    disadvantage: "公開された設定変更専用の主要不利要素は確認されない。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "AT/ART/CZモードはNOT_APPLICABLE。30φ型式固有のBGM履歴・成立済みボーナス/告知待ち状態等の据え置き契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "AT/ART/CZモードはNOT_APPLICABLE。電源OFF→ONのみでのBETランプ/BGM履歴/成立済みボーナス・告知状態の30φ固有契約はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE"
  gameCounterReset: "NOT_APPLICABLE_FOR_CEILING。天井ゲーム数自体を持たない。"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井非搭載。"
  modeAfterReset:
    behavior: "NOT_APPLICABLE_FOR_AT_CZ。設定変更専用の朝一モードは確認されない。"
  stateAfterReset:
    behavior: "AT/CZ内部状態はNOT_APPLICABLE。成立済みボーナス/告知待ち/BGM履歴等の電断・設定変更別処理はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE"
  resetBenefits:
    - "短縮天井・朝一専用AT/CZモード・設定変更専用当選優遇は非該当/確認なし。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認されない。"
  resetDetection:
    reelBehavior: "30φ型式を名指しした設定変更時ガックンの直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。25φ資料の『ガックンなし』は別型式のため自動転記しない。"
    lampDisplay: "30φ型式を名指ししたBETランプの設定変更/電断比較契約を直接固定できずUNVERIFIED_AFTER_RESEARCH。"
    other: "天井・朝一専用モード・有利区間ランプによる判別は非該当。"
  numericResetData: "設定変更専用の当選率・モード振り分け・短縮G数等の公開数値なし。"

sources:
  - url: https://news.p-world.co.jp/articles/18136/nippon
    sourceType: industry
    usedFor: [machineName, manufacturer, modelCode, twentyFiveThirtyPhiSeparation, payoutRate, bonusProbabilities, basicPayout, releaseSchedule]
  - url: https://news.p-world.co.jp/articles/19304/nippon
    sourceType: industry
    usedFor: [releaseDate, modelCode, twentyFiveThirtyPhiSeparation, basicPayout, bonusSystem]
  - url: https://hazuse.com/machine/pachislot/0S1174/
    sourceType: old-database
    usedFor: [modelCode, inspectionCode, generation, releaseDate, payoutRate, bonusProbabilities, baseGamesPer50Coins, normalCeiling]
  - url: https://1geki.jp/slot/s_hanahana_houoh_tensho30/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRate, bonusProbabilities, basicPayout]
  - url: https://1geki.jp/slot/s_hanahana_houoh_tensho30/4/
    sourceType: analysis-high
    usedFor: [baseGamesPer50Coins]
  - url: https://www.p-world.co.jp/machine/database/9502
    sourceType: industry-database
    usedFor: [systemType, basicPayout, bonusSystem]
  - url: https://www.pachibee.jp/machines/about/221120006
    sourceType: industry-database
    usedFor: [releaseDate, systemType, basicPayout]

unverifiedAfterResearch:
  - "30φ型式を直接名指しした設定変更/据え置き/純電源OFF→ON時のBETランプ挙動。"
  - "30φ型式を直接名指ししたリールガックン有無。"
  - "成立済みボーナス/告知待ち状態/BGM変化条件履歴の設定変更・据え置き・純電断時処理。"

conflicts: []
```

## QAメモ
- 2026-09-12: No.1464 25φの次として30φ別型式を独立登録。
- 型式 `Sハナハナホウオウ～天翔～EX-30`、検定番号 `0S1174`。25φ `LX / 0S1386` と同日導入だが別型式・別検定番号。
- 性能コアは設定1〜6、機械割97〜109%、BIG 1/297→1/236、REG 1/496→1/337、合算1/186→1/139、約42G/50枚、BIG最大240枚、REG最大120枚。業界記事・旧DB・複数解析で照合しCOMPLETE_CORE。
- 天井非搭載、AT/ART/CZなし。有利区間進行を朝一物差しに使用しないため該当項目はNOT_APPLICABLE。
- 25φ側ではBETランプ/ガックン情報が取得済みだが、30φは別型式のためそのまま転記せず、30φ固有の設定変更/電断契約を再探索。直接資料を固定できなかった箇所はUNVERIFIED_AFTER_RESEARCHとした。
