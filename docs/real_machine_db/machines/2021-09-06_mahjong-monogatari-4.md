# パチスロ麻雀物語4 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1429
canonicalKey: 2021-09-06_mahjong-monogatari-4
machineName: パチスロ麻雀物語4
manufacturer: オリンピア（平和販売）
modelCode: S麻雀物語4L2
inspectionCode: 1S0417
releaseDate: 2021-09-06
generation: 6.1号機
systemType: AT（差枚数管理・ゲーム数/レア役/CZ経由）
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_SHORTENED_CEILING
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.5, 98.4, 101.6, 104.3, 106.5, 108.3]
  initialHitBySetting:
    atInitialHit: ["1/184.1", "1/180.6", "1/168.9", "1/157.1", "1/148.2", "1/142.2"]
    czMahjongChallenge: "1/265.8（全設定共通）"
  baseGamesPer50Coins: "約33G/50枚"
  netIncrease: "メインAT『麻雀グランプリ』約2.6枚/G / 上位AT『雀張DREAM』約4.7枚/G"
  basicPayout: "麻雀グランプリは差枚数管理型・初期100枚+α。上位AT『雀張DREAM』は平均期待獲得約1400枚。"
  normalCeiling: "内部モード管理。通常A 999G+α（資料に930G+α表記あり）、通常B 700G+α、通常C 500G+α、天国128G+α。規定G数到達でAT。"
  notes:
    - "128G以内AT当選率はメーカー発表由来の業界資料で66%超。これは通常運用全体の訴求値で、設定変更専用当選率ではない。"
    - "設定4 AT初当たりは高信頼複数資料で1/157.1。一部二次資料に1/157.9があるためCONFLICTとして保持。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。設定変更時は専用条件で最深約550～555Gへ短縮。"
    modeState: "RESET。内部モードは通常B以上から開始。内部状態もRESET。"
    advantageousSection: "RESET。"
    morningStart: "通常時有利区間ランプ点灯型のため、朝一消灯なら設定変更濃厚。"
    benefit: "内部モード通常B以上、最深天井約550～555G。128G以内のAT当選にも期待でき、当時解析ではリセット後PAY OUT 100%以上との記載あり。"
    disadvantage: "設定変更時は、通常の『設定変更以外の有利区間リセット時＝天国濃厚/128G以内AT確定』とは別扱い。設定変更だから天国確定ではない。"
  unchanged:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER"
    modeState: "CARRY_OVER"
    advantageousSection: "CARRY_OVER"
  gameCounterReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "YES"
    ceilingValue: "約550G+α～555G（資料表記差）。通常A最深999G+αより短縮。"
  modeAfterReset:
    behavior: "設定変更時は通常B以上。設定変更以外の有利区間リセット時は天国濃厚だが、設定変更時は除外。"
    resetSpecificDistribution: "通常B以上までは公開確認。B/C/天国の個別振り分け率はUNPUBLISHED_AFTER_RESEARCH。"
  stateAfterReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。具体的初期状態振り分け率はUNPUBLISHED_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更時RESET / 据え置き・純電断CARRY_OVER。通常時は点灯型。AT終了時の一部・通常時演出失敗等にも有利区間リセット契機あり。"
  resetBenefits:
    - "設定変更後は通常B以上。"
    - "最深天井が約550～555Gへ短縮。"
    - "128G以内のAT当選にも期待できると当時解析で案内。"
  resetPenalties:
    - "設定変更時は、設定変更以外の有利区間リセットで成立する『天国濃厚・128G以内AT確定』の対象外。"
  resetDetection:
    advantageousSectionLamp: "通常時点灯型。朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日消灯閉店・店側対策時を除く。ランプはクレジット右下のドット。"
    gameCountBehavior: "前日深いハマリから朝一550/555G付近までに当選すれば設定変更挙動と整合するが、単独確定材料にはしない。"
    machineSpecificGakkun: "UNVERIFIED_AFTER_RESEARCH"
  numericResetData:
    resetCeiling: "約550G+α（複数当時解析） / 555G表記（なな徹）。表現差として保持。"
    resetModeMinimum: "通常B以上"
    within128AfterReset: "期待できる、まで公開確認。設定変更専用の正確な当選率はUNPUBLISHED_AFTER_RESEARCH。"
    resetPayout: "100%以上との当時解析記載あり。厳密な算出条件/設定別値は未公表のため参考値扱い。"

sources:
  - url: https://news.p-world.co.jp/articles/17163/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, releaseDate, initialHit, netIncrease, basicPayout, upperAtPerformance, within128Marketing]
  - url: https://news.p-world.co.jp/articles/17144/playgraph
    sourceType: contemporary-industry
    usedFor: [releaseDate, netIncrease, basicPayout, upperAtPerformance]
  - url: https://hazuse.com/machine/pachislot/1S0417/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, releaseDate, generation, payoutRate, netIncrease]
  - url: https://p-kn.com/slot/3631/
    sourceType: analysis-high
    usedFor: [releaseDate, initialHit]
  - url: https://nana-press.com/kaiseki/machine/141/4694/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHit, czRate]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/150/at01-1.php
    sourceType: contemporary-analysis-high
    usedFor: [netIncrease, basicPayout]
  - url: https://ichikatsu.com/mj4/
    sourceType: contemporary-analysis
    usedFor: [baseGamesPer50Coins, resetCeiling, powerCycleCarryOver, advantageousSectionLamp]
  - url: https://nana-press.com/kaiseki/machine/141/4915/
    sourceType: analysis-high
    usedFor: [settingChangeReset, unchangedCarryOver, resetModeMinimum, resetCeiling, advantageousSectionLamp, resetBenefit]
  - url: https://chonborista.com/slot/orinpia-slot/144375/
    sourceType: contemporary-analysis
    usedFor: [settingChangeReset, powerCycleCarryOver, resetCeiling, resetModeMinimum, resetPayout, advantageousSectionBehavior]
  - url: https://2-9densetsu.com/mj4/
    sourceType: contemporary-analysis-secondary
    usedFor: [normalCeiling, resetCeiling, payoutRate, initialHit]
  - url: https://www.p-world.co.jp/machine/database/9428
    sourceType: industry-database
    usedFor: [netIncrease, basicPayout, advantageousSectionResetException]

unverifiedAfterResearch:
  - "設定変更時の通常B/通常C/天国の個別振り分け率。"
  - "設定変更専用の128G以内AT当選率。通常運用全体の66%超と混同しない。"
  - "設定変更時の具体的内部状態初期振り分け率。"
  - "本機固有のガックン条件・発生率。"

conflicts:
  - field: normalCeilingNormalA
    canonical: "999G+α"
    alternate: "930G+α"
    handling: "定義/カウント表記差の可能性があるため平均せず併記。"
  - field: resetCeiling
    canonical: "550G+α級"
    alternate: "555G"
    handling: "解析サイト間の表記差。実質同一短縮帯として意味を分けず、原表記を両方保持。"
  - field: atInitialHitSetting4
    canonical: "1/157.1"
    alternate: "1/157.9"
    handling: "なな徹/K-Navi/2-9伝説等の1/157.1をcanonical。一部二次資料1/157.9はCONFLICTとして保持。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、旧表示INDEX、LATEST_HANDOFF、No.1428を確認し、handoff指定の次機として追加。
- 型式・検定番号・導入日はHAZUSEと業界記事で照合。スペックはなな徹、K-Navi、2-9伝説、P-WORLD系業界記事でクロスチェック。
- resetBehaviorはなな徹、イチカツ、ちょんぼりすた等で設定変更/据え置き/純電断を横断。通常B以上、短縮天井、ランプ判別は複数系統一致。
- 『有利区間リセット時は天国濃厚/128G以内AT確定』は設定変更時を除く仕様なので、朝一設定変更恩恵へ誤転記していない。
- ガックンと設定変更専用モード個別振り分けは検索語・型式名・メーカー名を変えて再探索後も直接値を固定できなかったため推測していない。
