# パチスロGANTZ極 THE SURVIVAL GAME — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1441
canonicalKey: 2021-11-08_gantz-kiwami-the-survival-game
machineName: パチスロGANTZ極 THE SURVIVAL GAME
manufacturer: エフ（開発: スパイキー / 販売: フィールズ）
modelCode: SパチスロGANTZ FT
inspectionCode: 1S1025
releaseDate: 2021-11-08
generation: 6.2号機
systemType: AT / 周期抽選+擬似ボーナス / 転落抽選型AT
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: [1, 2, 3, 4, 5, 6]
  payoutRatePct: [97.9, 98.9, 100.8, 105.0, 107.0, 109.0]
  initialHitBySetting: ["1/198", "1/196", "1/194", "1/189", "1/182", "1/162"]
  gantzBonusIncludingLoopBySetting: ["1/107", "1/104", "1/99", "1/98", "1/94", "1/83"]
  mainAtInitialHitBySetting: ["1/613", "1/599", "1/546", "1/469", "1/420", "1/387"]
  baseGamesPer50Coins: "約34G/50枚"
  netIncrease: "約5.0枚/G"
  basicPayout: "GANTZ BONUSはベルナビ7回で終了。超GANTZ BONUSは10G固定→15GのGANTZ GAMEへ。EXTRAはベルナビ5回保証後、モードに応じた転落抽選型で、最上位モード時の転落率は約1/200。"
  normalCeiling: "3種類。周期天井=5周期目のボーナス当選でAT濃厚、ATスルー天井=通常時初当たり5連続AT非当選後の6回目初当たりでAT濃厚、ゲーム数天井=有利区間移行後の通常時1600G+αでAT濃厚。"
  notes:
    - "有利区間3000G対応の6.2号機。"
    - "通常時は転送ポイント1000pt以上で周期到達し、(超)GANTZ BONUSを抽選。"
    - "超GANTZ BONUS後は15GのGANTZ GAMEと転落抽選型AT EXTRAをループ。EXTRA当選期待度は約80%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。天井進行をリセット。通常の有利区間移行後ゲーム数天井は1600G+α。加えてリセット時は3周期目までのGANTZ BONUS当選濃厚という朝一短縮挙動が公開されている。"
    modeState: "内部モードRESET / 内部状態RESET。転送ポイントは0pt。開始ステージは東京ステージ。"
    advantageousSection: "RESET。有利区間ランプ消灯。"
    morningStart: "液晶上の表示は設定変更/据え置きに関係なく全リセット。設定変更時は内部も天井・モード・状態・転送ポイントがリセットされ、3周期目までのGANTZ BONUS当選濃厚。"
    benefit: "通常は5周期目ボーナス当選で周期天井だが、設定変更後は3周期目までのGANTZ BONUS当選濃厚。朝一の周期到達が短縮される。"
    disadvantage: "公開された設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。天井進行を引き継ぐ。"
    modeState: "CARRY_OVER。内部モード・内部状態・転送ポイントを引き継ぐ。液晶表示上は0pt等へリセットされるため内部値と表示がズレる可能性あり。"
    advantageousSection: "CARRY_OVER。有利区間ランプ状態を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井を引き継ぐ。"
    modeState: "CARRY_OVER。内部モード・内部状態を引き継ぎ、転送ポイントも表示上は0ptだが内部的には引き継ぐ。開始表示は東京ステージ。"
    advantageousSection: "CARRY_OVER。有利区間を引き継ぐ。"
    displayBehavior: "電源ON・OFFのみでも液晶上の表示はリセットされる。内部値は引き継がれるため、表示周期/ポイントと内部進行が一致しない場合がある。"
  gameCounterReset: "設定変更=内部天井進行RESET。据え置き/純電源OFF→ON=内部天井進行CARRY_OVER。液晶表示はどちらでも初期化されるため表示値だけでは内部進行を判断できない。"
  ceilingAfterReset:
    resetSpecificShortening: "YES。リセット時は3周期目までのGANTZ BONUS当選濃厚。通常の周期天井は5周期目のボーナス当選でAT濃厚。両者は同一恩恵ではなく、リセット3周期はGB当選短縮として分離する。"
    ceilingValue: "ゲーム数天井は有利区間移行後1600G+α。通常周期天井は5周期目。リセット時公開短縮は3周期目までのGB当選濃厚。"
  modeAfterReset:
    behavior: "内部モードRESET。"
    resetSpecificDistribution: "UNVERIFIED_AFTER_RESEARCH。設定変更時の内部モード各振り分け率は公開固定値を確認できず。"
  stateAfterReset: "内部状態RESET。個別状態の設定変更時振り分け率はUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "YES。設定変更時リセット、純電断/据え置きは引継ぎ。AT終了時（引き戻し失敗時）にも消灯。"
  resetBenefits:
    - "設定変更後は3周期目までのGANTZ BONUS当選濃厚。"
    - "天井・内部モード/状態・転送ポイントがリセットされ、新規有利区間から開始。"
  resetPenalties:
    - "公開された設定変更専用の定量的不利要素なし。"
  resetDetection:
    advantageousSectionLamp: "通常時点灯型。クレジット右上ドットが朝一消灯なら設定変更濃厚、点灯なら据え置き濃厚。ただし店舗対策等の例外あり。"
    stageBehavior: "設定変更/据え置きに関係なく液晶表示はリセットされ東京ステージ表示となるため、開始ステージ単独では判別不可。"
    pointDisplay: "据え置き/純電断でも転送ポイントは表示上0ptとなるが内部値は引継ぐ。前日進行とのズレが据え置き挙動として現れる可能性があるが、表示0pt自体は変更判別にならない。"
    reelBehavior: "本機固有のガックン条件・発生率は、機種名/型式/メーカーと設定変更・リセット・朝一・据え置き・電断・ガックンを組み替えて再探索したが直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    resetSpecificCeilingGames: null
    resetSpecificCycleBenefit: "3周期目までのGANTZ BONUS当選濃厚"
    resetSpecificModeDistribution: null
    resetSpecificMorningHitRate: null
    resetBenefitRate: null
    note: "3周期短縮は公開されているが、確率テーブルや朝一○G以内当選率は公開固定値を確認できず。通常5周期AT天井と混同しない。"

sources:
  - url: https://news.p-world.co.jp/articles/18158/nippon
    sourceType: contemporary-industry
    usedFor: [manufacturer, modelCode, releaseDate, generation, netIncrease, gameSystem, basicAtStructure]
  - url: https://web-greenbelt.jp/post-50376/
    sourceType: contemporary-industry-certification
    usedFor: [modelCode, manufacturer, certificationPassage]
  - url: https://hazuse.com/machine/pachislot/1S1025/
    sourceType: old-machine-database-analysis
    usedFor: [inspectionCode, modelCode, releaseDate, payoutRange, netIncrease, manufacturer]
  - url: https://hazuse.com/machine/pachislot/1S1025/genre/207/
    sourceType: old-machine-database-analysis
    usedFor: [threeCeilings, settingChangeBehavior, powerCycleBehavior, carryOverBehavior, advantageousSectionLamp, resetDetection, transferPointCarryOver]
  - url: https://nana-press.com/kaiseki/machine/160/5809/
    sourceType: contemporary-analysis
    usedFor: [initialHitBySetting, payoutRateBySetting]
  - url: https://nana-press.com/kaiseki/machine/160/6425/
    sourceType: contemporary-analysis
    usedFor: [settingChangeBehavior, unchangedBehavior, resetThreeCycleBenefit, advantageousSectionLamp, transferPointCarryOver]
  - url: https://nana-press.com/kaiseki/machine/160/6426/
    sourceType: analysis
    usedFor: [threeCeilings]
  - url: https://1geki.jp/slot/s_gantz_k/
    sourceType: analysis
    usedFor: [initialHitBySetting, payoutRateBySetting, generation, netIncrease]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/f_slot/01/kr03.php
    sourceType: contemporary-analysis
    usedFor: [resetThreeCycleBenefit, cycleCeiling]
  - url: https://www.p-world.co.jp/machine/database/9492
    sourceType: machine-database
    usedFor: [generation, netIncrease, gameSystem, basicAtStructure]

unverifiedAfterResearch:
  - "設定変更時の内部モード各振り分け率。"
  - "設定変更時の個別内部状態振り分け率。"
  - "設定変更専用の朝一○G以内初当たり率/期待度。3周期目までのGB当選濃厚という公開周期情報のみ固定。"
  - "本機固有のガックン発生条件・発生率。"

conflicts:
  - "超GANTZ BONUS初当たり設定3について、HAZUSEは1/546、別二次資料に1/564表記あり。平均化せずcanonicalはHAZUSEの1/546を採用し、1/564を競合値として保持。"
```

## QAメモ
- 2026-09-12: 最新mainのREADME、Mission v0.7、INDEX、LATEST_HANDOFF、直前No.1440「CCエンジェル」を確認し、handoff指定の次機として追加。
- エフ製・型式 `SパチスロGANTZ FT`、検定番号 `1S1025`、導入2021-11-08を当時業界記事/HAZUSEで照合。
- 性能コアは初当たり1/198〜1/162、機械割97.9〜109.0%、約34G/50枚、純増約5.0枚/Gを複数解析資料で照合。
- resetBehaviorはHAZUSEとなな徹で照合。設定変更で有利区間/天井/内部モード/内部状態をリセット、据え置き/純電断で引継ぎ、転送ポイントは液晶0pt表示でも内部継続する。
- 通常時有利区間ランプ点灯型のため、未対策なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。
- リセット時の『3周期目までにGB当選濃厚』は、通常5周期目のボーナスでAT濃厚となる周期天井とは別概念として保存。完全再現用の周期抽選テーブルは収集していない。
- 超GANTZ BONUS初当たり設定3は資料間に1/546と1/564の差がありCONFLICT。平均化していない。
