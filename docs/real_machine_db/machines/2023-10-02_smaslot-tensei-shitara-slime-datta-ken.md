# スマスロ転生したらスライムだった件

recordNo: 1594
machineName: スマスロ転生したらスライムだった件
manufacturer: 山佐（製造） / 山佐ネクスト（販売・市場表記）
formalModel: Lパチスロ転生したらスライムだった件CD
inspectionCode: 3S0494
releaseDate: 2023-10-02
generation: 6.5号機 / スマスロ
systemType: AT / 規定ポイント + 継続バトル型AT
settings: L / 1 / 2 / 4 / 5 / 6（設定3非搭載）

## payoutRateBySetting
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定1: 97.9%
- 設定2: 99.4%
- 設定4: 105.0%
- 設定5: 109.1%
- 設定6: 113.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「転スラっしゅ」初当り
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定1: 1/369.8
- 設定2: 1/354.7
- 設定4: 1/295.5
- 設定5: 1/261.6
- 設定6: 1/245.2
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約36G/50枚
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「転スラっしゅ」: 約2.5枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT「転スラっしゅ」: 1セット40G+α、純増約2.5枚/Gの継続型AT。
- バトル勝利時の報酬に上位契機があり、「転スラっしゅヘブン」は業界発表で平均約180G滞在、「ミリムバースト」は平均約7個のストック期待とされる。ただし物差しDBでは細かな内部振り分けは収集対象外。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は毎ゲーム「転スラポイント」を獲得し、規定pt到達からATを目指す。
- モード別最大規定pt: 通常A 1200pt+α / 通常B 1000pt+α / 通常C 1000pt+α / 天国 100pt+α。
- 別軸のゲーム数天井としてAT間1000GでAT当選。
- モードは通常A / 通常B / 通常C / 天国。設定変更時またはAT終了時（転生ループ非発動時）に再抽選される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更で有利区間、天井、内部状態、モード、転スラポイントをRESET / 再抽選。
- 有利区間移行時に初期モンスターランクを抽選。
- 設定変更後、1回目の「転生チャンス」までの発生率が通常時より上昇する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井、内部状態、モード、転スラポイントをCARRY_OVER。
- モンスターランクも前日の状態を引き継ぐ。
- 「転生チャンス発動済み」条件も据え置きでは引き継がれると解析されている。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONではAT間天井G数と内部状態、有利区間をCARRY_OVERする機種固有解析を確認。
- 電源OFF→ON後はモンスターランクが液晶に表示されず、初回AT突入時に内部ランクが表示される。
- 純電断のみの場合の転スラポイント、通常モード、転生チャンス発動済みフラグそれぞれを独立して明記した複数高信頼資料は固定できず、据え置き一般表からの機械的補完はしない。
信頼度: ANALYSIS_HIGH / UNVERIFIED（個別フラグの純電断単独契約）

### gameCounterReset
- 設定変更: AT間ゲーム数天井をRESET。
- 据え置き: AT間ゲーム数天井をCARRY_OVER。
- 純電源OFF→ON: AT間ゲーム数天井をCARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認されていない。
- 設定変更後もポイント天井は選択モードに従い、通常A最大1200pt+α / 通常B・C最大1000pt+α / 天国100pt+α。
- ゲーム数天井はAT間1000GでAT当選。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常A / 通常B / 通常C・天国を再抽選。
- 公開振り分け（通常A / 通常B / 通常C・天国）:
  - 設定1: 33.2% / 33.2% / 33.6%
  - 設定2: 32.8% / 32.8% / 34.4%
  - 設定4: 30.9% / 30.9% / 38.2%
  - 設定5: 27.3% / 27.3% / 45.4%
  - 設定6: 26.6% / 26.6% / 46.8%
- 公開表は通常Cと天国を合算しており、両者の個別振り分けは本比較粒度では固定しない。
- 据え置きはモードCARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態RESET / 再抽選。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 内部状態CARRY_OVERとする機種固有解析を確認。
- 朝一専用の内部状態完全振り分けは PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 純電源OFF→ON: 有利区間CARRY_OVERとする機種固有解析を確認。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更後から1回目の「転生チャンス」まで、発生率が通常の約1/2048から約1/799へ上昇。
- モード再抽選が行われ、低設定でも通常C・天国合算が約1/3、高設定ほど同合算が上昇する。
- 初期モンスターランクを再抽選し、高設定ほど上位ランク選択率が若干優遇される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日のAT間ゲーム数、転スラポイント、通常モード、内部状態、有利区間を失う。
- 据え置き時に前日深いAT間ゲーム数を引き継げる状況と比較すると、設定変更は天井到達距離の面では不利になり得る。
- 設定変更専用の追加ペナルティ固定値は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 当日初回ATのモンスターランクは設定変更時に有利区間移行時抽選、据え置き時は前日ランク引継ぎ。前日把握ランクと当日初回ATランクが不一致なら設定変更の強い判別材料。
- 設定変更後1回目の転生チャンスは約1/799、通常/発動後は約1/2048。据え置きで前日に1回以上発動済みなら当日1回目も約1/2048側となるため、長時間未発生は据え置き推測材料になり得る。
- なな徹の当時ページでは単純なリセット判別を「調査中」としており、単一挙動での確定判別として扱わない。
- 本機固有のリールガックン条件 / 発生率は「転スラ / Lパチスロ転生したらスライムだった件CD / 山佐 / 設定変更 / リセット / 朝一 / 据え置き / ガックン」等で再探索したが高信頼な機種固有契約を固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
- 設定変更後1回目の転生チャンス発生率: 約1/799。
- 通常 / 転生チャンス発動後: 約1/2048。
- 設定変更時モード振り分け（通常A / 通常B / 通常C・天国）:
  - 設定1 33.2 / 33.2 / 33.6%
  - 設定2 32.8 / 32.8 / 34.4%
  - 設定4 30.9 / 30.9 / 38.2%
  - 設定5 27.3 / 27.3 / 45.4%
  - 設定6 26.6 / 26.6 / 46.8%
- 初期モンスターランク振り分け（設定1・2）: スライム級75.0% / 牙狼級16.8% / 鬼人級6.3% / 魔人級1.6% / 魔王級0.4% / 天災級0%。
- 初期モンスターランクの高設定側も公開値があるが、ホール経営用比較ではモード振り分けと転生チャンス発生率を主要数値として採用し、全ランク表の過剰な内部再現は行わない。

### publicMorningNumbers
- 設定変更後1回目転生チャンス: 約1/799（通常 / 発動後 約1/2048）。
- 通常C・天国合算: 設定1 33.6% / 設定2 34.4% / 設定4 38.2% / 設定5 45.4% / 設定6 46.8%。
- ゲーム数天井: AT間1000G。

## conflicts
- AT初当りは一部整理サイトで丸め値 1/370・1/355・1/296・1/262・1/245 と掲載される。業界記事の精密値 1/369.8・1/354.7・1/295.5・1/261.6・1/245.2 と実質同一の丸め差のため、canonical は精密値を採用し、数値競合とは扱わない。
- manufacturer は製造元「山佐」、販売発表主体「山佐ネクスト」の役割差を併記し、数値CONFLICTとは扱わない。

## missingFields
- 設定Lの機械割 / AT初当り: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON単独時の転スラポイント / 通常モード / 転生チャンス発動済みフラグの独立明記: UNVERIFIED_AFTER_RESEARCH
- 朝一専用の内部状態完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- 遊技日本 / P-WORLD 新台発表: https://news.p-world.co.jp/articles/25028/nippon
  - 製造元山佐、型式名、設定別AT初当り / 出玉率、AT純増・40G+α、10月2日導入予定。
  - 信頼度: INDUSTRY
- 遊技日本 検定通過: https://news.p-world.co.jp/articles/24726/nippon
  - Lパチスロ転生したらスライムだった件CD（山佐）の検定通過。
  - 信頼度: INDUSTRY / PUBLIC_RECORD_REPORT
- G-net 大阪府公安委員会検定通過情報: https://g-net-ps.com/industry/certif-2023-0721/
  - 山佐 / Lパチスロ転生したらスライムだった件CD / 検定番号3S0494 / 2023-07-21。
  - 信頼度: INDUSTRY / PUBLIC_RECORD_REPORT
- 遊技通信 東京都公安委員会検定通過まとめ: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E7%8A%B6%E6%B3%81%E3%80%802023%E5%B9%B47%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81/
  - 山佐 / Lパチスロ転生したらスライムだった件CD / 検定番号3S0494。
  - 信頼度: INDUSTRY / PUBLIC_RECORD_REPORT
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/606/
  - 約36G/50枚、純増約2.5枚/G、ポイント天井、モード振り分け。
  - 信頼度: ANALYSIS_HIGH
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/606/16881/
  - 設定変更 / 据え置きの有利区間・天井・内部状態・モード・転スラpt比較、転生チャンス約1/799、リセット判別、有利区間リセット。
  - 信頼度: ANALYSIS_HIGH
- 一撃 天井・設定変更: https://1geki.jp/slot/l_tensura/3/
  - 最大1200pt+α、AT間1000G、朝一モンスターランク挙動。
  - 信頼度: ANALYSIS_HIGH
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9879
  - 設定別AT / 出玉率、転生チャンス設定変更後1/799・発動後1/2048、据え置き時の発動済み条件引継ぎ。
  - 信頼度: INDUSTRY_DATABASE / ANALYSIS
- ガイドワークス P-Gabu: https://p-gabu.jp/guideworks/machinecontents/detail/6414
  - 約36G/50枚、AT40G+α、モード天井、初回ATモンスターランク、電源OFF→ON時の表示挙動。
  - 信頼度: ANALYSIS_HIGH
- スロベース 電源OFF→ON比較: https://slobase.jp/articles/tensura-reset
  - 設定変更時 / 純電源OFF→ON時のAT間天井・有利区間・通常G数比較。
  - 信頼度: ANALYSIS_SINGLE（後年整理資料。純電断補助照合に限定）

## status
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
