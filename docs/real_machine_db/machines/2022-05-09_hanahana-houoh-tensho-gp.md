# ハナハナホウオウ～天翔～紫パネル — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1497
canonicalKey: 2022-05-09_hanahana-houoh-tensho-gp
machineName: ハナハナホウオウ～天翔～紫パネル
manufacturer: パイオニア
modelCode: Sハナハナホウオウ～天翔～GP
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-05-09
generation: "6号機（同仕様LX既存レコードでは6.1号機表記）"
systemType: ノーマル / 完全告知 / 25φ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
confidence: HIGH_CORE_RESET_INHERITED_FROM_OFFICIALLY_IDENTICAL_LX_WITH_GP_SPECIFIC_RESET_DOC_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  specificationIdentity: "業界一次系複数資料が、GP紫パネルは2022-01-24導入の25φ LXと『スペック・演出とも同様』と明記。別型式のため独立レコード化するが性能コアは同一仕様として採用。"
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.0
    "2": 99.0
    "3": 101.0
    "4": 103.0
    "5": 106.0
    "6": 109.0
  initialHitBySetting:
    "1": "BIG 1/297 / REG 1/496 / 合算 1/186"
    "2": "BIG 1/284 / REG 1/458 / 合算 1/175"
    "3": "BIG 1/273 / REG 1/425 / 合算 1/166"
    "4": "BIG 1/262 / REG 1/397 / 合算 1/157"
    "5": "BIG 1/249 / REG 1/366 / 合算 1/148"
    "6": "BIG 1/236 / REG 1/337 / 合算 1/139"
  baseGamesPer50Coins: "約42G/50枚"
  netIncrease: "NOT_APPLICABLE（リアルボーナス主体ノーマル機）"
  basicPayout: "BIG最大240枚 / REG最大120枚"
  normalCeiling: "非搭載"
  modeSpecificMinimumData:
    panelDifference: "LXから紫パネルへ外装変更。型式はGPへ変更されたが、スペック・演出は同様。"
    bonusSystem: "ハイビスカス点灯でボーナス。通常時の性能契約はLXと同一。"

resetBehavior:
  version: 0.7
  evidencePolicy: "GP固有の朝一解析ページは再探索後も固定できなかった。一方、メーカー発表を報じる業界資料がGPとLXのスペック・演出同一を明記するため、機能契約は既存LX解析を同一仕様根拠付きで継承。ただしGP固有差分資料が存在しない項目はその旨を明記。"
  settingChange:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "AT/ART/CZモードはNOT_APPLICABLE。LX解析ではBETランプは設定変更でも引継ぎ。GPはスペック・演出同一のため同一挙動として扱う。BGM履歴の設定変更時処理はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE（純ボーナスノーマル機として朝一物差しに有利区間進行を用いない）"
    morningStart: "設定変更専用モード、短縮天井、CZ/AT優遇は非該当。"
    benefit: "設定変更専用の主要恩恵は確認されない。"
    disadvantage: "設定変更専用の主要不利要素は確認されない。"
  unchanged:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "AT/ART/CZモードはNOT_APPLICABLE。BGM変化条件の内部履歴はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE"
  powerOffOn:
    gameCountCeiling: "NOT_APPLICABLE（天井非搭載）"
    modeState: "LX解析ではBETランプは電源OFF→ONでも引継ぎ。GPは同一仕様として継承。BGM履歴はUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "NOT_APPLICABLE"
  gameCounterReset: "NOT_APPLICABLE_FOR_CEILING"
  ceilingAfterReset:
    resetSpecificShortening: "NOT_APPLICABLE。天井非搭載。"
  modeAfterReset:
    behavior: "NOT_APPLICABLE_FOR_AT_CZ。朝一専用モードは確認されない。"
  stateAfterReset:
    behavior: "AT/CZ内部状態はNOT_APPLICABLE。BGM変化条件の内部履歴のみUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "NOT_APPLICABLE"
  resetBenefits:
    - "設定変更専用の短縮天井・朝一専用モード・AT/CZ優遇はなし/非該当。"
  resetPenalties:
    - "公開された設定変更専用の主要不利要素は確認されない。"
  resetDetection:
    reelBehavior: "LX解析では設定変更・電源OFF→ONともリールガックンなし。GPはスペック・演出同一として継承。GP固有解析ページはUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "LX解析ではBETランプを設定変更・電源OFF→ONとも引き継ぐため変更判別材料にならない。GPは同一仕様として継承。"
    other: "天井/有利区間ランプ/朝一専用モードによる主要判別は非該当。"
  numericResetData: "公開された設定変更専用の当選率・短縮G数・モード振り分けなし。"

sources:
  - url: https://news.p-world.co.jp/articles/19785/nippon
    sourceType: industry
    usedFor: [machineName, manufacturer, modelCode, releaseWindow, specificationIdentity]
  - url: https://p-bomb.co.jp/industry/maker/3560/
    sourceType: industry
    usedFor: [modelCode, panelDifference, specificationIdentity]
  - url: https://news.p-world.co.jp/articles/19759/yugitsushin
    sourceType: industry
    usedFor: [modelCode, releaseWindow, specificationIdentity]
  - url: https://pachinko-curation.com/24568/
    sourceType: secondary-analysis
    usedFor: [releaseDate, modelPassDate, performanceCore, baseGamesPer50Coins]
  - url: https://item.rakuten.co.jp/auc-nakaiti/hanahanahouoh_tensho_gp/
    sourceType: secondary-machine-database
    usedFor: [modelCode, performanceCore, basicPayout, specificationIdentity]
  - url: https://slogati.com/hanahana-ht/
    sourceType: retrospective-analysis
    usedFor: [releaseDate, sameSpecification, baseGamesPer50Coins, normalCeiling]
  - url: https://p.hisshobon.jp/machine/3792/1/85421
    sourceType: analysis-high-lx-identical-spec-reference
    usedFor: [settingChangeBetLamp, powerCycleBetLamp, reelGakkun, bgmResetResearchStatus]
  - path: docs/real_machine_db/machines/2022-01-24_hanahana-houoh-tensho-25.md
    sourceType: internal-canonical-predecessor
    usedFor: [performanceCoreCrosscheck, resetBehaviorCrosscheck]

unverifiedAfterResearch:
  - "GP型式の検定番号。2022-02-10〜02-14頃の検定通過自体は複数資料で確認したが、本調査で番号を固定できず。"
  - "GP固有ページによる設定変更/据え置き/純電源OFF→ON時のBETランプ・ガックン直接確認。業界資料の『スペック・演出同一』とLX解析から継承。"
  - "設定変更/据え置き/純電源OFF→ON時のBGM変化条件に関わる内部履歴の保持・初期化。LX当時解析でも調査中。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main No.1496の次として登録。
- GPは2022年1月のLXと別型式。業界資料がスペック・演出同一と明記するため、全型式収集方針では独立レコード化し、性能数値は同一仕様として保持した。
- 導入日は複数後年資料で2022-05-09。発売時記事は「5月上旬予定」表記。
- GP固有のresetBehavior解析は再探索しても固定できず、同一仕様LXの高信頼解析を継承した箇所は明示している。推測で別挙動を生成していない。
