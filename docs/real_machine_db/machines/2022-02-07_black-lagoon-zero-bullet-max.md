# BLACK LAGOON ZERO bullet MAX — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1477
canonicalKey: 2022-02-07_black-lagoon-zero-bullet-max
machineName: BLACK LAGOON ZERO bullet MAX
manufacturer: エフ / 開発: スパイキー / 総発売元: フィールズ
modelCode: "SブラックラグーンゼロFK"
inspectionCode: "1S1440"
releaseDate: 2022-02-07
generation: "6.2号機"
systemType: AT / ゲーム数上乗せ型 / バレットシステム
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED
confidence: HIGH_CORE_HIGH_RESET_MINOR_RESET_RATE_AND_GAKKUN_UNVERIFIED
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.6
    "2": 98.8
    "3": 100.2
    "4": 104.0
    "5": 107.6
    "6": 110.3
  initialHitBySetting:
    definition: "AT『ラグーンラッシュ』初当たり"
    "1": "1/379"
    "2": "1/365"
    "3": "1/345"
    "4": "1/296"
    "5": "1/260"
    "6": "1/236"
  baseGamesPer50Coins: "32.2G/50枚（全設定共通）。HAZUSE、なな徹、業界記事で一致。"
  netIncrease: "AT 約6.5枚/G"
  basicPayout: "AT『ラグーンラッシュ』はゲーム数上乗せ型で、AT初当たり時は必ず上乗せ特化ゾーン『ヘブンズラッシュ』から開始。AT平均獲得は約590枚とする導入時紹介あり。擬似ボーナス『ラグーンボーナス』は20G。上位『スーパーヘブンズラッシュ』は平均上乗せ約200G。"
  normalCeiling: "有利区間移行後、通常時777G消化でAT『ラグーンラッシュ』/ヘブンズラッシュ突入。"
  modeSpecificMinimumData:
    bulletPoint: "通常時はバレットポイント11ptで1周。レヴィチャージは約1/50で突入し、ロゴ全点灯ごとにCZまたはATを抽選。当選率50%overと業界資料で案内。"
    advantageousSectionCarryAfterAT: "AT終了後に有利区間を引き継いだ場合は天国モード2回ループとする解析あり。リセット時は5Gのバラライカゾーンへ移行。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。有利区間移行後777G天井をリセット。"
    modeState: "内部状態RESET、バレットポイントRESET。朝一は内部的に『バラライカゾーン』から開始する場合あり。設定変更専用の通常モード振り分け率は今回公開値を固定できず。"
    advantageousSection: "RESET。"
    morningStart: "内部バラライカゾーン開始となる場合あり。外見上必ずバラライカゾーンが表示されるわけではなく、内部的な5Gの引き戻し抽選として扱う解析が複数。"
    benefit: "設定変更後の一部/場合に内部バラライカゾーン5Gが適用され、短時間でAT引き戻し抽選を受けられる。"
    disadvantage: "天井・ポイント・内部状態をリセットするため、前日ハマりやポイント蓄積は失われる。設定変更専用の追加不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。据え置き（設定変更なし）では天井進行を引き継ぐ扱い。電源OFF→ON表でも天井引継ぎを確認。"
    modeState: "CARRY_OVER。設定変更なしでは内部状態・ポイントを引き継ぐ扱い。"
    advantageousSection: "CARRY_OVER。有利区間ランプ点灯継続は据え置き/対策の材料。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "CARRY_OVER。内部状態・バレットポイントとも引継ぎ。"
    advantageousSection: "CARRY_OVER。パチマガスロマガの設定変更/電源OFF・ON比較表で明記。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "固定の短縮天井は確認できず。設定変更後も通常天井は有利区間移行後777G。"
    normalCeiling: "777G"
    resetMorningWindow: "内部バラライカゾーン選択時は5Gの引き戻し区間。"
  modeAfterReset:
    behavior: "通常モードの設定変更専用振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。朝一の一部/場合で内部バラライカゾーン開始。"
  stateAfterReset:
    behavior: "内部状態RESET。バレットポイントRESET。開始ステージは公開解析で『調査中』のまま。"
  advantageousSectionReset: "設定変更時RESET。通常時はクレジット右上『★』ランプが点灯するタイプ。AT終了後も有利区間リセット時はランプ消灯→バラライカゾーンへ、継続時はランプ点灯継続。"
  resetBenefits:
    - "朝一の一部/場合で内部バラライカゾーン5Gから開始。"
    - "内部バラライカゾーン中はAT引き戻し抽選。強チェリー/チャンス目/強ベル/下段リプレイ成立時は引き戻し濃厚（解析値100%）。"
  resetPenalties:
    - "前日の天井ゲーム数、バレットポイント、内部状態は設定変更で消去。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン条件・発生率は、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで検索語を変えて再探索したが直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時点灯型。前日通常時点灯を前提に朝一『★』ランプ消灯なら設定変更濃厚。点灯なら据え置き/店舗対策の材料。前日AT後に有利区間リセットされた直後の閉店や店舗対策が例外となるため、絶対判別とはしない。"
    morningBehavior: "朝一5G以内の内部バラライカゾーン由来の引き戻し挙動は設定変更材料になり得るが、内部バラライカゾーン選択率そのものは公開値を固定できず。"
  numericResetData:
    normalGameCeiling: "777G after advantageous-section entry"
    internalBalalaikaZoneDuration: "5G when selected"
    internalBalalaikaZoneSelectionRateOnSettingChange: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"
    balalaikaStrongRareRoleHitRate: "100% conditional on being in Balalaika Zone (strong cherry/chance role/strong bell/lower-line replay)"
    gakkunRate: "PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH"

sources:
  - url: https://news.p-world.co.jp/articles/18949/nippon
    sourceType: industry-primary
    usedFor: [manufacturer, modelCode, generation, systemOutline]
  - url: https://news.p-world.co.jp/articles/19070/yugitsushin
    sourceType: industry-primary
    usedFor: [generation, levy'sChargeApproxRate, pointSystem, systemOutline]
  - url: https://news.p-world.co.jp/articles/19166/greenbelt
    sourceType: industry-primary
    usedFor: [releaseTiming, manufacturer, netIncrease, initialHitRange, payoutRange, baseGamesPer50, normalCeiling]
  - url: https://hazuse.com/machine/pachislot/1S1440/
    sourceType: old-machine-db-analysis-high
    usedFor: [releaseDate, manufacturer, modelCode, inspectionCode, baseGamesPer50, payoutRateBySetting, initialHitBySetting, normalCeiling, systemDetails, balalaikaZone]
  - url: https://1geki.jp/slot/s_blacklagoon_zero/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRateBySetting, initialHitBySetting, netIncrease, systemType]
  - url: https://nana-press.com/kaiseki/machine/294/7857/
    sourceType: analysis-high
    usedFor: [baseGamesPer50]
  - url: https://nana-press.com/kaiseki/machine/294/7853/
    sourceType: analysis-high
    usedFor: [normalCeiling, advantageousSectionResetAfterAT, balalaikaZone]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/f_slot/02/kr01.php
    sourceType: analysis-high
    usedFor: [settingChangeVsPowerCycle, gameCounterReset, advantageousSection, pointCarry, internalStateCarry]
  - url: https://www.slopachi-quest.com/article/black-lagoon-zero-bullet-max-tenjou/
    sourceType: analysis-secondary
    usedFor: [settingChangeVsPowerCycle, resetDetection, internalBalalaikaMorning, advantageousSectionCarryAfterAT]
  - url: https://slot-seven.com/blacklagoonzero-tenzyou/
    sourceType: analysis-secondary
    usedFor: [settingChangeVsPowerCycle, resetDetection, internalBalalaikaMorning, normalCeiling]
  - url: https://chonborista.com/slot/spiky/159377/
    sourceType: analysis-secondary
    usedFor: [releaseDate, fullPerformanceTable, baseGamesPer50, resetDetection, settingChangeVsPowerCycle, internalBalalaikaMorning]
  - url: https://1geki.jp/slot/s_blacklagoon_zero/87/
    sourceType: analysis-high
    usedFor: [balalaikaZoneDuration, balalaikaConditionalHitRates, advantageousSectionResetAfterAT]
  - url: https://www.nakaiti.com/html/sEff002.html
    sourceType: secondary-machine-db
    usedFor: [systemType, netIncrease, bonusDuration, superHeavensRushAverage]

unverifiedAfterResearch:
  - "設定変更時に内部バラライカゾーンへ振り分けられる正確な確率。複数資料で『一部』『場合あり』まで確認したが数値なし。"
  - "設定変更専用の通常モード振り分け率。"
  - "本機固有の設定変更時リールガックン条件・発生率。"
  - "設定変更/電源OFF・ON後の固定開始ステージ。複数解析で調査中。"

conflicts:
  - field: "resetMorningInternalBalalaika"
    status: "WORDING_CONFLICT"
    canonical: "設定変更後の一部/場合で内部バラライカゾーン開始。"
    alternate: "一部後年整理資料は『濃厚』と表現。"
    handling: "当時解析の複数資料（『一部』『場合あり』）を優先。選択率は数値未公表として固定しない。"
  - field: "resetDetectionLamp"
    status: "DEFINITION_CAUTION"
    canonical: "朝一消灯=設定変更濃厚。前日AT後即ヤメや店舗対策の例外あり。"
    alternate: "一部攻略資料は『消灯でリセット確定』と表現。"
    handling: "ホール経営/客AI用途では例外を保持し、確定ではなく濃厚材料として扱う。"

notes:
  - "AT平均獲得約590枚は導入時の機種紹介・動画タイトル等で確認できるが、設定別値ではないため参考性能としてのみ記録。"
  - "有利区間は最大3000G対応の6.2号機。AT終了時は毎回必ずリセットではなく、継続時は天国モード2回ループとする解析があるため、AT終了後のランプ挙動を朝一設定変更契約へ混同しない。"
  - "2022-02-07群では次候補『パチスロドリフターズ』を確認済み。群全体のCLOSED判定は同日候補処理後に再監査する。"
```
