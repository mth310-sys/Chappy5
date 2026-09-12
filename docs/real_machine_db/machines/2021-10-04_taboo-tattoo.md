# SLOTタブー・タトゥー — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1436
canonicalKey: 2021-10-04_taboo-tattoo
machineName: SLOTタブー・タトゥー
manufacturer: ミズホ / ユニバーサルエンターテインメント
modelCode: S／タブー・タトゥー／LL
inspectionCode: 1S0640
releaseDate: 2021-10-04
generation: 6.1号機
systemType: AT / 疑似ボーナス+JAC-AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: HIGH_CORE_HIGH_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.2, 98.1, 100.2, 103.5, 105.5, 108.2]
  initialHitBySetting:
    bonusAtInitialHit: ["1/332.8", "1/315.4", "1/287.5", "1/257.1", "1/232.7", "1/201.6"]
  baseGamesPer50Coins: "約40.3〜40.5G/50枚（設定差あり。設定1約40.3G）"
  netIncrease: "疑似ボーナス約2.0枚/G / JAC-AT『VOID DRIVE』約5.5枚/G"
  basicPayout: "トリガーボーナス・REG各20G。VOID DRIVEは1セット8G・継続率約75% or 90%。AT初当り合算の平均獲得約386枚（トリガーボーナス契機約411枚、REG契機約257枚、エピソードボーナス契機約558枚）。"
  normalCeiling: "有利区間移行後最大800Gでトリガーボーナス。当選テーブルは通常A/B/C・チャンスA/B/C・天国の7種で、天国は100G以内。"
  notes:
    - "通常時はゲーム数テーブルと呪紋ストックシステムで疑似ボーナスを目指す。"
    - "VOID DRIVEは純増約5.5枚/G、1セット8G、継続率約75% or 90%。"
    - "ボーナス/AT後のドライブチャレンジは基本30G、平均引き戻し期待度約55%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。最大800Gの天井ゲーム数をクリアし、新規有利区間側から再スタート。"
    modeState: "RESET。ユニメモ以外は全てクリアされ、晴海中学ステージをセット。有利区間移行時にゲーム数テーブルを再抽選。"
    advantageousSection: "RESET。設定変更後は有利区間開始時の通常抽選へ移行。"
    morningStart: "晴海中学ステージ。設定変更専用の天井短縮・専用優遇は公開情報では確認されない。"
    benefit: "NONE_CONFIRMED。設定変更固有の固定短縮天井や特別な朝一恩恵は確認されない。"
    disadvantage: "前日までのゲーム数・テーブル・内部状態を失うため、据え置きなら残り天井や良好状態を引き継げたケースでは相対的に不利。設定変更専用ペナルティの固定値は確認なし。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。設定変更を行わない据え置きでは内部ゲーム数/天井を引き継ぐ扱い。"
    modeState: "CARRY_OVER。内部テーブル・状態を引き継ぐ扱い。"
    advantageousSection: "CARRY_OVER。朝一に有利区間ランプが点灯していれば据え置き濃厚となるケースがある。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。複数解析資料で電断のみは天井引継ぎ。"
    modeState: "CARRY_OVER。内部状態は維持。通常時なら演出をクリアして晴海中学へ復帰し、トリガーボーナス中ならセーギステージへ復帰。その他の内部状態は維持する一方、演出やカウンタ関連表示はクリアされる。"
    advantageousSection: "CARRY_OVER。パチ7では設定変更時消灯 / 電断のみ引継ぎと明記。"
  gameCounterReset: "設定変更時RESET / 据え置き・純電断時CARRY_OVER。電断時は表示・演出カウンタがクリアされる場合があるため、見た目と内部を分離。"
  ceilingAfterReset:
    resetSpecificShortening: "NO_PUBLIC_SHORTENING_FOUND"
    ceilingValue: "最大800G（通常と同じ）"
    note: "設定変更専用の短縮天井は十分な再探索後も確認されず。"
  modeAfterReset:
    behavior: "設定変更で前日テーブルをクリアし、有利区間移行時に通常のゲーム数テーブル抽選を実施。朝一専用テーブルは確認されない。"
    resetSpecificDistribution: "NO_RESET_SPECIFIC_TABLE_FOUND。下記numericResetDataの振り分けは『有利区間移行時共通』であり、設定変更専用値ではない。"
  stateAfterReset: "内部状態RESET。晴海中学ステージから開始。電断のみは内部状態を維持しつつ演出/表示をクリア。"
  advantageousSectionReset: "設定変更時RESET / 据え置き・純電断時CARRY_OVER。通常時はランプ基本消灯のため、朝一消灯だけでは判別不可。"
  resetBenefits:
    - "NONE_CONFIRMED。朝一設定変更固有の固定天井短縮・専用当選率優遇は確認されない。"
  resetPenalties:
    - "前日のゲーム数・テーブル・内部状態をクリアするため、据え置き時に残った天井進行などは失われる。"
  resetDetection:
    advantageousSectionLamp: "クレジット右下『-』。通常時は基本消灯なので消灯=判別不可。朝一点灯なら据え置き濃厚。"
    stageBehavior: "設定変更は晴海中学。純電断も通常時なら晴海中学へ戻るため、ステージ単独では判別困難。"
    reelBehavior: "本機固有のガックン発生条件・発生率は資料系統を変えて再探索したが固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    normalCeilingGames: "最大800G"
    resetCeilingGames: "最大800G（短縮確認なし）"
    resetSpecificBenefitRate: "NO_PUBLIC_RESET_SPECIFIC_RATE_FOUND_AFTER_RESEARCH"
    sectionStartTableDistributionNonRareRole:
      setting1: {normalA: "29.4%", normalB: "19.6%", normalC: "9.8%", chanceA: "9.8%", chanceB: "6.7%", chanceC: "3.1%", heaven: "21.6%"}
      setting2: {normalA: "29.4%", normalB: "19.6%", normalC: "9.8%", chanceA: "9.8%", chanceB: "6.7%", chanceC: "3.1%", heaven: "21.6%"}
      setting3: {normalA: "22.2%", normalB: "17.3%", normalC: "12.2%", chanceA: "10.6%", chanceB: "9.0%", chanceC: "7.5%", heaven: "21.2%"}
      setting4: {normalA: "22.2%", normalB: "17.3%", normalC: "12.2%", chanceA: "10.6%", chanceB: "9.0%", chanceC: "7.5%", heaven: "21.2%"}
      setting5: {normalA: "14.9%", normalB: "14.9%", normalC: "14.9%", chanceA: "11.4%", chanceB: "11.4%", chanceC: "11.4%", heaven: "21.1%"}
      setting6: {normalA: "14.9%", normalB: "14.9%", normalC: "14.9%", chanceA: "11.4%", chanceB: "11.4%", chanceC: "11.4%", heaven: "21.1%"}
    sectionStartTableDistributionDefinition: "有利区間移行時（ほぼ1G目）に成立役と設定を参照する共通テーブル。上記はレア役以外成立時。設定変更専用の朝一振り分けではないため分離して保存。"

sources:
  - url: https://www.universal-777.co.jp/news/20210816001512/
    sourceType: official
    usedFor: [manufacturer, productAnnouncement, systemConcept, netIncrease, releaseMonth]
  - url: https://news.p-world.co.jp/articles/17758/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, systemType, netIncrease, basicPayout, releaseMonth]
  - url: https://news.p-world.co.jp/articles/17670/yugitsushin
    sourceType: public-industry-certification
    usedFor: [modelCode, inspectionCode, manufacturer]
  - url: https://g-net-ps.com/industry/certif-2021-0813/
    sourceType: public-industry-certification
    usedFor: [modelCode, inspectionCode]
  - url: https://www.p-world.co.jp/machine/database/9462
    sourceType: old-database-analysis
    usedFor: [generation, systemType, inspectionCode, releaseDate, normalCeiling, netIncrease, basicPayout]
  - url: https://1geki.jp/slot/s_tabootattoo
    sourceType: analysis-high
    usedFor: [payoutRates, initialHit, releaseDate, systemType, netIncrease, basicPayout]
  - url: https://1geki.jp/slot/s_tabootattoo/42/
    sourceType: analysis-high
    usedFor: [sectionStartTableDistribution, modeStructure]
  - url: https://nana-press.com/kaiseki/machine/152/5169/
    sourceType: contemporary-analysis
    usedFor: [payoutRates, initialHit]
  - url: https://nana-press.com/kaiseki/machine/152/5703/
    sourceType: contemporary-analysis
    usedFor: [resetDetection, advantageousSectionLamp]
  - url: https://pachiseven.jp/machines/6395/cutout/2
    sourceType: contemporary-analysis
    usedFor: [payoutRates, initialHit, baseGamesPer50, normalCeiling, releaseDate]
  - url: https://pachiseven.jp/machines/6395
    sourceType: contemporary-analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, internalState, advantageousSectionLamp, stageBehavior]
  - url: https://chonborista.com/slot/universal-slot/148373/
    sourceType: analysis-high
    usedFor: [performanceCore, normalCeiling, resetBehavior, powerCycleBehavior, advantageousSectionLamp]
  - url: https://ichikatsu.com/tabootattoo/
    sourceType: contemporary-analysis
    usedFor: [baseGamesPer50, powerCycleCeilingCarryOver, payoutRates, initialHit]
  - url: https://slot-seven.com/tabootattoo-tenzyo/
    sourceType: analysis-secondary
    usedFor: [settingChangeBehavior, powerCycleBehavior, resetDetection]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/46/at02.php
    sourceType: old-analysis-database
    usedFor: [netIncrease, setGames, loopRate, averagePayout]

unverifiedAfterResearch:
  - "本機固有のガックン発生条件・発生率。『ガックン』『リール始動』『設定変更判別』等の検索語と機種名/型式名を組み合わせて再探索したが固定値・保証条件を確認できず。"
  - "設定変更専用の天井短縮、専用モード振り分け、専用初当たり/CZ当選率。複数資料で『朝イチリセット恩恵は確認されていない』ため、公開固定値なしとして記録。"
  - "レア役成立時の有利区間開始テーブル振り分けは画像表で公開されているが、今回はテキスト値を高信頼で固定できないため転記せず。"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1435「パチスロツインエンジェルPARTY」を確認し、handoff指定の次機として追加。
- 型式 `S／タブー・タトゥー／LL`、検定番号 `1S0640` は東京都公安委員会検定情報系の業界資料とP-WORLD機種DBで一致。
- 性能コアは1geki・なな徹・パチ7・P-WORLD等で多重照合。設定別初当り/機械割は一致。
- resetBehaviorは設定変更でユニメモ以外クリア、天井/内部状態RESET、純電断で天井/内部状態CARRY_OVERを複数攻略資料で照合。
- 通常時は有利区間ランプ基本消灯のため、朝一消灯では変更判別不可。点灯なら据え置き濃厚。
- 有利区間移行時の公開テーブル振り分けは比較可能な朝一関連数値として保存したが、設定変更専用値ではないことを明示した。
- 設定変更固有の天井短縮・専用優遇率・本機固有ガックン率は資料系統を変えた再探索後も固定できず、UNVERIFIED/NO_PUBLIC_VALUE扱い。
