# 新世紀エヴァンゲリオン～魂の共鳴～ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1468
canonicalKey: 2022-01-24_shinseiki-evangelion-tamashii-no-kyoumei
machineName: 新世紀エヴァンゲリオン～魂の共鳴～
manufacturer: ビスティ（製造: ジェイビー）
modelCode: "S新世紀エヴァンゲリオン 魂の共鳴N jG（実機流通・設置表記） / S新世紀エヴァンゲリオンN 魂の共鳴 jR（2021-09検定通過資料）"
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-01-24
generation: "6.2号機"
systemType: AT / CZ突破型 / W-AT（ST型+差枚数上乗せ型）
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_YARDSTICK
confidence: HIGH_CORE_MEDIUM_HIGH_RESET_MODEL_CONFLICT
retrievedAt: 2026-09-12

performanceCore:
  settings: ["L", "1", "2", "4", "5", "6"]
  payoutRatePct:
    "L": UNVERIFIED
    "1": 97.9
    "2": 99.1
    "4": 102.6
    "5": 106.0
    "6": 110.3
  initialHitBySetting:
    definition: "CZ『ゼルエル決戦』 / AT（暴走ボーナス・覚醒ボーナス）初当たり。複数解析で概ね一致。"
    "1": "CZ 1/147.4 / AT 1/355.1"
    "2": "CZ 1/141.0〜1/141.1 / AT 1/342.9"
    "4": "CZ 1/124.8 / AT 1/312.6"
    "5": "CZ 1/114.0 / AT 1/286.3"
    "6": "CZ 1/104.0 / AT 1/255.3"
  baseGamesPer50Coins: "約32.6G/50枚"
  netIncrease: "AT出玉増加区間 約3.4枚/G"
  basicPayout: "AT平均500枚超（解析値）。暴走ボーナスは初回30Gから開始し、その後はST型。覚醒ボーナスは初期差枚数100枚から開始し、終了後は暴走ボーナスへ移行。"
  normalCeiling: "規定G数は222G+α / 333G+α / 基本最大666G+α。700G+αのプレミアム天井報告あり。CZスルー天井は2〜5回の振り分けで、最大5スルー後の次回CZでAT濃厚。"
  modeSpecificMinimumData:
    czStructure: "CZ『ゼルエル決戦』は15G+最終ジャッジ、AT期待度約33%。"
    atStructure: "暴走ボーナスは自力ST型で暴走ブースト実質継続率約93%。覚醒ボーナスは初期100枚の差枚数上乗せ型。"
    advantageousSection: "6.2号機・有利区間3000G対応。通常時は有利区間ランプ点灯型、AT終了後に消灯。"
    specialSetting: "設定L搭載。設定L使用時は下パネル高速点滅、デモ画面の警告表示等で判別可能。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。朝一/設定変更時の解析表で天井リセット。規定G数天井および同一有利区間内CZスルー進行を新規有利区間として再開。"
    modeState: "天井はリセットされ新規抽選へ移るが、設定変更専用のA/B/C/プレミアム天井振り分け率、および通常時内部状態の直接契約は十分な再探索後もUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "RESET。有利区間ランプ消灯から再開し、1G目に有利区間へ移行する挙動が確認される。"
    morningStart: "1G目に『使徒侵入ステージ』へ移行する解析。"
    benefit: "固定の天井短縮やリセット専用優遇は確認されず。新規有利区間移行ゲームの成立役に応じ、弱レア役ならCZ 0.39〜0.4%、強レア役ならCZ約99.2%・AT約0.8%の公開抽選あり。"
    disadvantage: "前日の天井進行・CZスルー進行・有利区間を失う。前日ハマリ/スルー回数の据え置き狙い価値は消滅。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。なな徹の朝一表で天井引継ぎ。"
    modeState: "内部進行は据え置きとして継続扱い。個別の全内部状態・シンクロレベル等の据え置き契約は物差し範囲外/公開直接表を固定できず。"
    advantageousSection: "CARRY_OVER。通常時に有利区間ランプ点灯なら据え置き濃厚材料。"
  powerOffOn:
    gameCountCeiling: "UNVERIFIED_AFTER_RESEARCH。『電源オンオフ時の挙動』を扱う解析ページ、機種名+電源OFF/ON/電断/据え置き等で再探索したが、本機固有の純電断だけを設定変更・据え置きと明確に分離した直接表を固定できず、据え置き仕様からの推測転記はしない。"
    modeState: "UNVERIFIED_AFTER_RESEARCH（純電源OFF→ON単独の本機固有直接契約を固定できず）。"
    advantageousSection: "UNVERIFIED_AFTER_RESEARCH（純電断単独のランプ/有利区間保持を直接明記する高信頼資料を固定できず）。"
  gameCounterReset: "設定変更時RESET / 据え置きCARRY_OVER / 純電源OFF→ONは直接契約UNVERIFIED_AFTER_RESEARCH。"
  ceilingAfterReset:
    resetSpecificShortening: "確認されず。通常の規定G数天井222/333/666G+α（稀な700G+α報告）を新規に選択する構造。解析サイトはリセット恩恵『なし』としている。"
  modeAfterReset:
    behavior: "設定変更で天井・有利区間はリセットされるが、設定変更専用の規定G数天井A/B/C/プレミアム振り分け率は公開確認できずUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "朝一は使徒侵入ステージへ移行。有利区間移行時の成立役抽選は公開済み。ただし通常時内部高確/シンクロ状態等の設定変更時初期化契約は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
  advantageousSectionReset: "設定変更時RESET / 据え置きCARRY_OVER。AT終了後にも有利区間ランプ消灯。純電源OFF→ON単独は直接契約UNVERIFIED_AFTER_RESEARCH。"
  resetBenefits:
    - "朝一は使徒侵入ステージへ移行するが、解析上は固定のリセット恩恵なし。"
    - "有利区間移行ゲームで強レア役成立時はCZ約99.2%、AT約0.8%の公開抽選。弱レア役ではCZ約0.4%。"
  resetPenalties:
    - "前日のゲーム数天井・CZスルー進行・有利区間を設定変更で失う。"
  resetDetection:
    reelBehavior: "本機固有の設定変更時ガックン発生条件・発生率は、機種名/型式/メーカー/ガックン/リール始動等で再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "通常時有利区間ランプ点灯型。前日通常時点灯を前提に、朝一消灯＝設定変更濃厚 / 点灯＝据え置き濃厚。前日AT終了直後の消灯閉店、店側対策等は例外。ランプ位置は2BET表示横。"
    other: "朝一1G目の使徒侵入ステージ移行は設定変更時の挙動として公開されているが、ステージ単独を確定判別に使える条件までは固定しない。"
  numericResetData:
    advantageousSectionEntryWeakRare: "使徒侵入ステージ99.61% / CZ 0.39%（別解析丸め: 99.6% / 0.4%）"
    advantageousSectionEntryStrongRare: "CZ 99.21% / AT 0.79%（別解析丸め: 99.2% / 0.8%）"
    resetSpecificCeiling: "専用短縮値なし確認。通常規定G数 222G+α / 333G+α / 666G+α、700G+αプレミアム報告あり。"

sources:
  - url: https://www.sankyo-fever.jp/collection/927/
    sourceType: official
    usedFor: [machineName, brand, releaseMonth, gameSystem, czExpectation]
  - url: https://www.p-world.co.jp/machine/database/9542
    sourceType: industry-database
    usedFor: [manufacturer, maker, generation, netIncrease, basicPayout, ceiling, advantageousSection3000G, settingL]
  - url: https://chonborista.com/slot/bisty-slot/155156/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRate, czProbability, atProbability, baseGamesPer50Coins, netIncrease, ceiling, averageAtPayout, settingL]
  - url: https://www.slopachi-quest.com/article/evangelion-tamasiinokyoumei-settei/
    sourceType: analysis
    usedFor: [releaseDate, payoutRate, czProbability, atProbability, baseGamesPer50Coins, netIncrease]
  - url: https://nana-press.com/kaiseki/machine/285/7961/
    sourceType: analysis-high
    usedFor: [settingChangeBehavior, carryOverBehavior, advantageousSectionLamp, morningStart, advantageousSectionEntryLottery]
  - url: https://nana-press.com/kaiseki/machine/285/7573/
    sourceType: analysis-high
    usedFor: [ceiling, czSkipCeiling]
  - url: https://slot-seven.com/evangeliontamashiinokyomei-tenzyou/
    sourceType: analysis
    usedFor: [resetDetection, advantageousSectionEntryLottery]
  - url: https://www.slopachi-quest.com/article/evangelion-tamasiinokyoumei-tenjou/
    sourceType: analysis
    usedFor: [morningStart, resetBenefits, resetDetection, advantageousSectionEntryLottery]
  - url: https://1geki.jp/slot/s_evangelion_tama/3/
    sourceType: analysis-high
    usedFor: [ceiling, czSkipCeiling, researchForPowerCycle]
  - url: https://www.nakaiti.com/html/sJB005.html
    sourceType: old-machine-market-database
    usedFor: [modelCode_jG, manufacturerAndMaker]
  - url: https://web-greenbelt.jp/post-51090/
    sourceType: industry
    usedFor: [inspectionPassedModel_jR]
  - url: https://pachinkopachisro.com/archives/56117742.html
    sourceType: contemporary-industry-retrospective
    usedFor: [inspectionPassedModel_jR]

unverifiedAfterResearch:
  - "検定番号。"
  - "純電源OFF→ONだけを設定変更/据え置きと分離した、天井・内部モード/状態・有利区間の直接契約。"
  - "設定変更専用の222/333/666/700G各天井振り分け率。"
  - "設定変更時の通常時内部高確/シンクロ状態等の直接初期化契約。"
  - "本機固有の設定変更時リールガックン条件・発生率。"

conflicts:
  - field: modelCode
    values:
      - "S新世紀エヴァンゲリオン 魂の共鳴N jG — 実機販売・現行設置表記"
      - "S新世紀エヴァンゲリオンN 魂の共鳴 jR — 2021-09検定通過時の業界公示報道"
    handling: "同一製品名にjR/jGの型式末尾差が存在。実市場機の正式型式としてjGを主表示するが、検定通過資料のjRを削除せずCONFLICT/履歴差として保持。"
  - field: czProbabilitySetting2
    values: ["1/141.0", "1/141.1"]
    handling: "解析資料間の丸め差として両値を保持。"
```

## QAメモ
- 2026-09-12: No.1468として2022-01-24群5機目を登録。
- SANKYO公式コレクションで2022年1月導入、ビスティブランド、W-AT構造を確認。P-WORLDではビスティ/製造ジェイビー、6号機AT、有利区間3000G対応を確認。
- 機械割97.9〜110.3%、CZ 1/147.4→1/104.0、AT 1/355.1→1/255.3、約32.6G/50枚、純増約3.4枚/Gは複数解析で照合。
- resetBehaviorは設定変更時の天井・有利区間RESET、据え置き時の天井・有利区間CARRY_OVERを確認。朝一1G目は使徒侵入ステージ。有利区間移行時の弱/強レア役によるCZ/AT抽選値も公開あり。
- リセット専用の天井短縮/固定優遇は確認されず、攻略解析は『リセット恩恵なし』と整理。
- 純電源OFF→ON単独の直接契約は、電源オンオフを掲題する解析、電断/電源OFF/ON/据え置き等の語で再探索しても固定できず、据え置きから推測せずUNVERIFIED_AFTER_RESEARCH。
- 型式は検定通過時 `jR` と実機流通 `jG` が競合。両根拠を保持し、実市場レコードではjGを主表示。

## 取得日
- 2026-09-12
