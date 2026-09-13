# L エヴァンゲリオン ～未来への創造～

recordNo: 1593
machineName: L エヴァンゲリオン ～未来への創造～
manufacturer: ビスティ（ブランド / 市場表記） / ジェイビー（検定上の申請・製造主体）
formalModel: L EVANGELION・未来への創造jF
inspectionCode: 3S0339
releaseDate: 2023-10-02
generation: 6.5号機 / スマスロ
systemType: AT / CZ経由AT + ゲーム数上乗せ / 上位AT
settings: L / 1 / 2 / 4 / 5 / 6（設定3非搭載）

## payoutRateBySetting
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定1: 97.6%
- 設定2: 99.3%
- 設定4: 104.1%
- 設定5: 108.5%
- 設定6: 113.1%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### 初当り合算（E-FREEZE・E-FREEZE経由以外のPREMIUM EVA GAME・EVA GAME）
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定1: 1/725.3
- 設定2: 1/701.9
- 設定4: 1/659.2
- 設定5: 1/614.6
- 設定6: 1/588.8

### AT初当り（PREMIUM EVA GAME + EVA GAME）
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定1: 1/932.3
- 設定2: 1/862.2
- 設定4: 1/762.2
- 設定5: 1/674.4
- 設定6: 1/620.2
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33.3G/50枚
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- PREMIUM EVA GAME / EVA GAME: 約2.8枚/G
- 上位AT EVA GAME EXTRA: 約5.0枚/G
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT初当り時の約85%は「PREMIUM EVA GAME」から開始。
- PREMIUM EVA GAME: 100G + 上乗せ特化ゾーン「E-BURST」。E-BURST最低1個を保証。業界発表の平均期待出玉は約1250枚超。
- EVA GAME: 純増約2.8枚/G、最低40Gからのゲーム数上乗せ型AT。
- 上位AT「EVA GAME EXTRA」: 純増約5.0枚/G、突入時に500～3600枚の差枚数上乗せ。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役等からCZ「使徒バトル」「E-FREEZE」を経由してATを目指す。確定役からAT直行も存在。
- ゲーム数天井: 通常時最大1500G+αでCZ「E-FREEZE」。E-FREEZE失敗後は次回1000G+αへ短縮。
- CZスルー天井: E-FREEZEを2回スルー後、3回目は成功濃厚 / AT当選。
- 通常時は低確 / 通常 / 高確 / 超高確の内部状態が存在し、CZ抽選期待度に影響する。
- 独立した通常時「規定G数モード」の完全な名称・振り分け表は、本DBの比較粒度で固定できる公開資料を確認できず、リセット表の「モード」と内部状態を混同しない。
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更で有利区間、天井、モード、内部状態をRESET / 再抽選。
- 朝一ステージは「第三新東京市」。据え置き時も同ステージのため画面だけでは判別不可。
- 設定変更後は内部状態が必ず高確以上から開始する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井、モード、内部状態をCARRY_OVER。
- 朝一表示ステージは「第三新東京市」とされ、開始画面だけでは設定変更との判別不可。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは天井、内部状態、有利区間をCARRY_OVER。
- 別系統解析では内部モードもCARRY_OVERとしている。
- 純電断単独でのE-FREEZEスルー回数契約を直接明記した高信頼資料は固定できず、UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH / UNVERIFIED（E-FREEZEスルー回数）

### gameCounterReset
- 設定変更: 通常時ゲーム数 / ゲーム数天井をRESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- E-FREEZEスルー回数の設定変更・純電断時契約は、独立明記資料を十分に固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常のゲーム数天井は最大1500G+α。
- 設定変更後は次回ゲーム数天井が1000G+αへ短縮される解析が複数一致。通常最大から500G短縮。
- E-FREEZE失敗後も次回1000G+αへ短縮。
- 1000G+α到達時の恩恵はCZ「E-FREEZE」であり、AT直撃ではない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- なな徹の朝一比較表では設定変更時「モードRESET」、据え置き時「引き継ぐ」。
- 設定変更時の具体的モード名称・完全振り分け率は、表記揺れ / 型式 / 朝一 / リセット / モード振り分け等で再探索したが PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 内部状態（高確 / 超高確）とは別フィールドとして保持し、両者を混同しない。
信頼度: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 低確0% / 通常0% / 高確59.3% / 超高確40.7%。高確以上スタート100%。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 内部状態CARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 純電源OFF→ON: 有利区間CARRY_OVER。
- 有利区間ランプによる設定変更 / 据え置き判別は不可。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- ゲーム数天井が通常最大1500G+αから1000G+αへ500G短縮。
- 内部状態が高確以上スタート100%。内訳は高確59.3%、超高確40.7%。
- 高確以上スタートにより朝一序盤のCZ抽選面で通常開始より有利。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日のゲーム数天井進行、内部状態、モード、有利区間を失う。
- 設定変更専用で比較可能な追加不利数値は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更 / 据え置きとも朝一は「第三新東京市」ステージのため、開始画面だけでは判別不可。
- 有利区間ランプによる判別不可。
- 設定変更後は1000G+α天井のため、朝一当日1000Gを超えてE-FREEZE天井が発動しない挙動は据え置き推測の強い材料。ただし履歴・CZ当選状況との照合が必要。
- 当時なな徹はリセット判別を「現在調査中」としている。
- 本機固有のリールガックン条件 / 発生率は「Lエヴァンゲリオン未来への創造 / L EVANGELION・未来への創造jF / 3S0339 / 設定変更 / リセット / 朝一 / ガックン / 判別」等で再探索したが、高信頼な機種固有資料を固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
- 設定変更後ゲーム数天井: 1000G+α（通常最大1500G+αから500G短縮）。
- 設定変更時内部状態: 高確59.3% / 超高確40.7% / 高確以上100%。
- 通常ゲーム数天井: 最大1500G+α。
- E-FREEZE失敗後ゲーム数天井: 1000G+α。
- E-FREEZEスルー天井: 2スルー後、3回目成功濃厚。
- 設定変更時の具体的モード完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 設定変更後1000G+α天井。
- 高確59.3% / 超高確40.7%スタート。
- 高確以上スタート率100%。

## conflicts
- manufacturer表記は資料の役割差を保持する。市場・ブランド資料は「ビスティ」、東京都 / 大阪府公安委員会の検定通過資料は申請・製造主体を「ジェイビー」と掲載。数値競合ではなく、ブランドと検定上主体の定義差として manufacturer 欄に併記。
- AT期待出玉は業界資料で「約1250枚超」、後年整理資料で「約1251枚」表記がある。実質的な丸め差と判断し、canonical は業界一次寄りの「約1250枚超」とする。平均化はしていない。

## missingFields
- 設定Lの機械割 / 初当り / AT初当り: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の具体的モード名称・完全振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更 / 純電断時のE-FREEZEスルー回数の独立契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- SANKYOオンライン博物館 機種コレクション: https://www.sankyo-fever.jp/collection/950/
  - 2023年10月導入、ビスティブランド、シリーズ初スマスロ、CZ / 通常状態構造。
  - 信頼度: OFFICIAL
- 遊技通信 東京都公安委員会検定通過状況 2023-06-19: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%886%E6%9C%8816%E6%97%A5%EF%BC%89-2/
  - 型式 L EVANGELION・未来への創造JF、ジェイビー、検定番号3S0339。
  - 信頼度: INDUSTRY / PUBLIC_RECORD_REPORT
- G-net 大阪府公安委員会検定通過情報 2023-06-09公示分: https://g-net-ps.com/industry/certif-2023-0609/
  - ジェイビー / L EVANGELION・未来への創造jF / 3S0339を別公安委員会系統で照合。
  - 信頼度: INDUSTRY / PUBLIC_RECORD_REPORT
- グリーンべると / P-WORLD 2023-09-01: https://news.p-world.co.jp/articles/25204/greenbelt
  - ビスティ製、10月2日導入、初当り約85%がPREMIUM EVA GAME、100G+特化ゾーン、平均期待出玉1250枚超。
  - 信頼度: INDUSTRY
- 遊技通信 / P-WORLD 2023-08-22: https://news.p-world.co.jp/articles/25100/yugitsushin
  - 型式名、ビスティ製、AT基本構造、純増2.8→5.0枚、上位AT500～3600枚上乗せ。
  - 信頼度: INDUSTRY
- HAZUSE: https://hazuse.com/machine/pachislot/3S0339/
  - 型式・検定番号・導入日・設定構成・出玉率・純増・天井・初当り / AT確率。
  - 信頼度: ANALYSIS_HIGH
- 一撃 天井 / 設定変更: https://1geki.jp/slot/l_evasloasu/3/
  - 通常1500G+α、E-FREEZE失敗後1000G+α、2スルー後3回目AT、設定変更時高確59.3% / 超高確40.7%。
  - 信頼度: ANALYSIS_HIGH
- 一撃 小役 / ベース: https://1geki.jp/slot/l_evasloasu/4/
  - 約33.3G/50枚。
  - 信頼度: ANALYSIS_HIGH
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/623/16939/
  - 設定変更 / 据え置きの有利区間・天井・モード・内部状態、朝一第三新東京市、59.3% / 40.7%、有利区間ランプ判別不可。
  - 信頼度: ANALYSIS_HIGH
- なな徹 天井: https://nana-press.com/kaiseki/machine/623/16936/
  - 1500G / 1000G、E-FREEZEスルー天井。
  - 信頼度: ANALYSIS_HIGH
- なな徹 EVA GAME: https://nana-press.com/kaiseki/machine/623/16948/
  - 純増約2.8枚/G、最低40G。
  - 信頼度: ANALYSIS_HIGH
- なな徹 EVA GAME EXTRA: https://nana-press.com/kaiseki/machine/623/16967/
  - 上位AT純増約5.0枚/G、500～3600枚差枚管理。
  - 信頼度: ANALYSIS_HIGH
- スロパチクエスト 天井 / リセット: https://www.slopachi-quest.com/article/evangelion-mirai-tenjou/
  - 設定変更 / 電源OFF・ONの有利区間・天井・内部モード、設定変更後1000G短縮、1000G超で据え置き推測。
  - 信頼度: ANALYSIS_HIGH
- Altema スマスロエヴァ: https://altema.jp/pachimo/leva
  - 設定変更 / 電源ON・OFFの天井・内部状態・有利区間比較表。
  - 信頼度: ANALYSIS_SINGLE
- スロパチクエスト 設定差: https://www.slopachi-quest.com/article/evangelion-mirai-settei/
  - 設定別初当り / AT / 機械割、導入日、ベース、純増。
  - 信頼度: ANALYSIS_HIGH
- グリーンべると 新台スケジュール 2023-10-02: https://news.p-world.co.jp/articles/25554/greenbelt
  - 2023-10-02パチスロ群4機を確認。
  - 信頼度: INDUSTRY

## status
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
chronologicalGroup: 2023-10-02
chronologicalGroupStatus: OPEN_1_OF_4_CANONICAL_PROCESSED
nextCandidate: スマスロ転生したらスライムだった件
