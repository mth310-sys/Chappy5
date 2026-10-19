# スーパーリノSP — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1460
canonicalKey: 2022-01-11_super-reno-sp
machineName: スーパーリノSP
manufacturer: 山佐ネクスト
modelCode: SリノSPYTMM
inspectionCode: 1S0252
releaseDate: 2022-01-11
generation: "6.2号機"
systemType: 特殊ボーナスタイプ / リアルボーナス連チャン / リノ系
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_CONFLICT
confidence: HIGH_WITH_RESET_CONFLICT
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.4
    "2": 98.5
    "3": 100.1
    "4": 102.3
    "5": 104.6
    "6": 106.3
  initialHitBySetting:
    "1": "ボーナス初当り 1/565.8 / トマトチャンス 1/192.5"
    "2": "ボーナス初当り 1/439.8 / トマトチャンス 1/156.6"
    "3": "ボーナス初当り 1/382.2 / トマトチャンス 1/130.0"
    "4": "ボーナス初当り 1/317.1 / トマトチャンス 1/100.8"
    "5": "ボーナス初当り 1/265.0 / トマトチャンス 1/80.1"
    "6": "ボーナス初当り 1/221.3 / トマトチャンス 1/62.2"
  baseGamesPer50Coins: "約38G/50枚（資料により約38〜39G）"
  netIncrease: "ボーナス出玉増加区間: BIG約4.7枚/G / REG約3.6枚/G"
  basicPayout: "BIG平均約123枚 / REG平均約62枚"
  normalCeiling: "ボーナス間1831G+αで中段トマト（100%トマト）超高確率へ移行。ボーナス成立まで天井状態が継続し、トマト成立後にボーナス非当選で通常へ転落しても再度超高確率へ移行。"
  modeSpecificMinimumData:
    bonusChanceState: "トマト揃い・ボーナス終了後にボーナス高確率状態へ。状態中ボーナス確率は約1/4.9、設定1ループ期待度約86%。"
    chanceMode: "ボーナス高確率状態転落時にチャンスモード移行抽選。滞在時はトマトチャンス確率等が上昇。朝一専用モードではない。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "CONFLICT。Slopachi-Quest、スロがち、にくじる系資料はボーナス間天井1831G+αを設定変更でも引き継ぐとする一方、イチカツは設定変更で天井リセットと掲載。複数の後発/朝一解析が引継ぎで一致するため実務上はCARRY_OVER優勢だが、DBでは競合を保持。"
    modeState: "複数の朝一解析ではボーナス高確率状態を含む内部状態を設定変更でも引き継ぐ。チャンスモード等の設定変更専用再抽選値は確認できず。"
    advantageousSection: "有利区間の概念なし。NOT_APPLICABLE。メーカー系PV紹介・解析で『有利区間ナシ』を確認。"
    morningStart: "設定変更専用の固定天井短縮・初当り優遇・専用モード振り分けは確認できず。前日ボーナス高確率状態なら店舗対策がなければ状態持越しが朝一狙い要素。"
    benefit: "設定変更自体による固定恩恵は確認できず。朝一1回目のボーナス終了時に下パネルフラッシュが発生すれば設定変更確定、疑似クレオフ音なら設定変更＋設定2以上濃厚とする解析あり。"
    disadvantage: "設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "ボーナス間天井を引き継ぐ。"
    modeState: "内部状態を引き継ぐ。前日ボーナス高確率状態なら朝一も継続し得る。"
    advantageousSection: "有利区間概念なし。NOT_APPLICABLE。"
  powerOffOn:
    gameCountCeiling: "ボーナス間天井を引き継ぐ。複数解析で一致。"
    modeState: "内部状態を引き継ぐ。複数解析で一致。"
    advantageousSection: "有利区間概念なし。NOT_APPLICABLE。"
  gameCounterReset: "設定変更時はCONFLICT（引継ぎ優勢だがリセット記載あり）。据え置き/純電源OFF→ONはCARRY_OVER。"
  ceilingAfterReset:
    resetSpecificShortening: "設定変更専用の短縮天井なし。設定変更で天井を引き継ぐという複数解析が優勢。ただしリセット記載1系統とのCONFLICTを保持。"
  modeAfterReset:
    behavior: "設定変更専用モード振り分けは確認できず。内部状態引継ぎとする複数解析あり。"
  stateAfterReset:
    behavior: "複数解析で設定変更・純電源OFF→ONとも内部状態CARRY_OVER。RAMクリア/出荷状態は通常の設定変更とは別扱い。RAMクリア時のボーナス高確率スタートは前作踏襲推測を含む資料があるため、確定仕様としては採用しない。"
  advantageousSectionReset: "NOT_APPLICABLE_NO_ADVANTAGEOUS_SECTION"
  resetBenefits:
    - "設定変更自体による天井短縮・朝一専用モードなどの固定恩恵は確認できず。"
    - "前日ボーナス高確率状態なら、状態引継ぎ仕様により朝一も連チャン状態が残る可能性がある。これは設定変更恩恵ではなく持越し特性。"
  resetPenalties:
    - "設定変更専用の主要不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有の設定変更ガックン条件・発生率は、検索語と資料系統を変えて再探索後も高信頼資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "有利区間ランプなし。ランプ消灯/点灯による設定変更判別はNOT_APPLICABLE。"
    other: "朝一1回目のボーナス終了時の下パネルフラッシュ＝設定変更確定、疑似クレオフ音＝設定変更＋設定2以上濃厚とする解析あり。非発生でも据え置き確定にはならないため片方向判別。"
  numericResetData: {}

sources:
  - url: https://news.p-world.co.jp/articles/18071/nippon
    sourceType: industry
    usedFor: [manufacturer, modelCode, systemType, bonusChanceState, basicPayout, releaseWindow]
  - url: https://news.p-world.co.jp/articles/19072/nippon
    sourceType: industry
    usedFor: [releaseDate, modelCode, officialDeveloperVideo]
  - url: https://hazuse.com/machine/pachislot/1S0252/
    sourceType: analysis-high
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, payoutRate, ceiling]
  - url: https://hazuse.com/machine/pachislot/1S0252/genre/208/
    sourceType: analysis-high
    usedFor: [initialHitBySetting, conflictSetting6InitialHit]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/243/kh02.php
    sourceType: analysis-high
    usedFor: [payoutRate, initialHitBySetting]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/243/kh10-1.php
    sourceType: analysis-high
    usedFor: [netIncrease, basicPayout, bonusChanceState]
  - url: https://www.p-world.co.jp/machine/database/9495
    sourceType: industry-database
    usedFor: [systemType, basicPayout]
  - url: https://www.slopachi-quest.com/article/super-reno-sp-tenjou/
    sourceType: analysis
    usedFor: [ceiling, settingChange, powerOffOn, stateCarryOver, advantageousSection, resetDetection]
  - url: https://slogati.com/reno-sp/
    sourceType: analysis
    usedFor: [settingChange, powerOffOn, stateCarryOver, resetDetection]
  - url: https://www.nikuziru.com/archives/8378
    sourceType: analysis-single
    usedFor: [ceilingCarryOverAfterSettingChange]
  - url: https://ichikatsu.com/superrenosp/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, initialHitBySetting, baseGamesPer50Coins, ceiling, settingChangeConflict]
  - url: https://1geki.jp/slot/s_spreno_sp/
    sourceType: analysis-high
    usedFor: [advantageousSection, bonusChanceState]
  - url: https://nana-press.com/kaiseki/machine/165/7420/
    sourceType: analysis-high
    usedFor: [payoutRate, initialHitBySetting]
  - url: https://nana-press.com/post/1545652/2
    sourceType: analysis
    usedFor: [netIncrease]

unverifiedAfterResearch:
  - "設定変更時/純電断時の本機固有ガックン条件・発生率。"
  - "通常設定変更とは別のRAMクリア/出荷状態で、ボーナス高確率状態から必ず始まるかの本機固有確定仕様。"
  - "設定変更専用のチャンスモード初期振り分け・固定朝一当選率。公開固定値を確認できず。"

conflicts:
  - field: resetBehavior.settingChange.gameCountCeiling
    values:
      - "CARRY_OVER: Slopachi-Quest / スロがち / にくじる系資料"
      - "RESET: イチカツ"
    handling: "平均化不可。複数の朝一解析一致から引継ぎ優勢と注記しつつCONFLICT保持。"
  - field: performanceCore.initialHitBySetting.setting6
    values:
      - "1/221.3: パチマガスロマガ / なな徹 / イチカツ / アタリ7 等"
      - "1/211.3: HAZUSE設定推測ページ"
    handling: "多数一致する1/221.3をcanonical採用し、HAZUSEの1/211.3をCONFLICTとして保持。"
  - field: performanceCore.netIncrease
    values:
      - "BIG約4.7枚/G / REG約3.6枚/G: なな徹・パチマガスロマガ系"
      - "BB純増3.8枚: パチスロメソッド"
    handling: "出玉増加区間の定義が明確な4.7/3.6をcanonical採用。3.8記載は定義不明の競合として保持。"
```

## QAメモ
- 2026-09-12: 最新main No.1459「バーサスリヴァイズ」の次機として登録。
- 型式 `SリノSPYTMM`、検定番号 `1S0252`、2022-01-11導入、山佐ネクストを業界記事・HAZUSE・複数解析で照合。
- 機械割97.4〜106.3%、トマトチャンス1/192.5〜1/62.2、ボーナス初当り1/565.8〜1/221.3、約38G/50枚、BIG平均123枚/REG平均62枚を複数ソースで照合。
- 設定6ボーナス初当りは多数資料が1/221.3、HAZUSEのみ1/211.3のため多数一致値をcanonicalとしつつCONFLICT保持。
- 天井はボーナス間1831G+α。設定変更時の天井は引継ぎとする後発/朝一解析が複数一致する一方、イチカツはリセット記載のためCONFLICT。推測で一本化しない。
- 有利区間は非搭載。設定変更/電断でも内部状態を引き継ぐとする複数解析を採用。設定変更専用の固定恩恵は確認できず。
- 本機固有ガックン、RAMクリア時の確定初期状態、設定変更専用モード振り分けは資料系統を変えて再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
