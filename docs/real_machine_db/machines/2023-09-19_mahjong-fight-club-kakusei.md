# 麻雀格闘倶楽部 覚醒

recordNo: 1591
machineName: 麻雀格闘倶楽部 覚醒
manufacturer: コナミアミューズメント
formalModel: L麻雀格闘倶楽部覚醒KM
inspectionCode: 3S0673
releaseDate: 2023-09-19
generation: 6.5号機 / スマスロ
systemType: AT / ゲーム数管理 + 引き戻し対局 / 上位継続AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.9%
- 設定3: 101.2%
- 設定4: 104.1%
- 設定5: 107.1%
- 設定6: 110.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT初当り
- 設定1: 1/246.8
- 設定2: 1/236.3
- 設定3: 1/223.9
- 設定4: 1/208.9
- 設定5: 1/172.9
- 設定6: 1/141.6
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35.4G/50枚
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「格闘倶楽部RUSH」: 約8.0枚/G
- 上位AT「究局Mリーグ」: 約8.0枚/G
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 通常AT「格闘倶楽部RUSH」はゲーム数管理型。通常対局のアガリ時役により初期G数を決定。
- 初期G数例（子 / 親）: 満貫10G / 15G、跳満15G / 25G、倍満20G / 30G、三倍満30G / 45G、役満40G / 60G、二倍役満80G / 120G。
- 上位AT「究局Mリーグ」: 1セット12G（約100枚）、継続率80% / 90% / 95%。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は5モード。天井は通常770G+α / 引き戻し390G+α / 覚醒160G+α / 裏覚醒160G+α / 裏覚醒準備960G+α。
- 天井到達後は次の対局でAT当選。規定G到達時の対局で非テンパイなら次対局でAT当選となる。
- 覚醒モードAT初当り: 約1/99.0、モード継続率80%以上。
- 裏覚醒モードAT初当り: 約1/30.2、モード継続率90%以上。
- 裏覚醒準備で当選したAT後は裏覚醒モード移行濃厚。
- 究局Mリーグ終了後は覚醒モード移行濃厚。
信頼度: OFFICIAL / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更で有利区間、救済発動G数（天井進行）、通常時モードをリセット。
- 設定変更時にモード移行抽選を実施し、浅い天井のモードが選択されやすい。
- 内部状態についても複数朝一資料でRESET扱い。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、救済発動G数、モードを引き継ぐ。
- 個別の通常時イベント状態までの全状態別契約は公開固定値なし。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは天井進行・内部状態を引き継ぐとする複数朝一整理資料を確認。
- 純電断単独の有利区間とモードについて、設定変更/据え置きと独立して明示した高信頼一次解析は確認できず、据え置き同等と断定せず UNVERIFIED_AFTER_RESEARCH とする。
信頼度: ANALYSIS_SINGLE / UNVERIFIED（有利区間・モード単独契約）

### gameCounterReset
- 設定変更: 天井/救済発動G数RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERを確認。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常モードの固定天井770G+αを一律に短縮する方式ではなく、設定変更時は浅い天井のモードが選択されやすいモード再抽選型。
- 設定変更後160G+αまでのAT当選割合は約80%。
- 「設定変更時は必ず160G天井」の意味ではない点に注意。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時: モードRESET + 再抽選。浅い天井モード優遇。
- 据え置き: モードCARRY_OVER。
- 設定変更時の通常/引き戻し/覚醒/裏覚醒/裏覚醒準備それぞれの完全振り分け率は検索語・資料系統を変え再探索後も PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態RESETとする複数朝一資料あり。
- 据え置き: 公開表ではモード/救済Gを引継ぎ。個別イベント状態までの完全契約は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 純電源OFF→ON: 状態CARRY_OVERとする朝一整理資料を確認。
信頼度: ANALYSIS_HIGH / ANALYSIS_SINGLE

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 有利区間ランプでは設定変更/据え置きの判別不可。
- 純電源OFF→ON単独時の有利区間契約は直接資料を固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（純電断単独）

### resetBenefits
- 設定変更後は浅い天井ゲーム数のモードが選ばれやすく、160G+αまでのAT当選割合が約80%。
- 朝一の早い初当たりが客側の主要リセット狙い根拠となる。
- 設定変更後0Gから初当たりまでの区間出玉率を「100%OVER」とする解析資料があるが、メーカー公表値ではなく解析側調査値のため参考扱い。
信頼度: INDUSTRY / ANALYSIS_HIGH / ANALYSIS_SINGLE（区間出玉率）

### resetPenalties
- 前日の天井進行・モード・有利区間を失う。
- 設定変更専用で比較可能な追加不利数値は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 有利区間ランプによる変更判別は不可。
- なな徹はリセット判別を「調査中」としており、高信頼解析で本機固有ガックン契約を固定できない。
- 一部二次攻略資料は「ガックンによる判別が可能」とするが、条件・対策・発生率が示されず別系統高信頼資料でも確認できないため、ガックンは CONFLICT_UNCORROBORATED_SECONDARY として保持し確定判別には採用しない。
信頼度: ANALYSIS_HIGH / CONFLICT

### numericResetData
- 設定変更後160G+α以内AT当選割合: 約80%。
- 設定変更時モード完全振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 通常モード天井: 770G+α。
- 引き戻しモード天井: 390G+α。
- 覚醒 / 裏覚醒モード天井: 160G+α。
- 裏覚醒準備モード天井: 960G+α。
- 参考実戦値: 朝一97台で250G以内に全台AT当選との集計あり。ただし解析公表の確定仕様ではないため OBSERVED_SAMPLE_ONLY。

### publicMorningNumbers
- 設定変更後160G+α以内AT当選割合: 約80%（複数解析/業界DB一致）。
- 朝一97台250G以内全当選: 実戦サンプル値であり確定仕様とはしない。

## conflicts
- ガックン: なな徹など高信頼解析は判別「調査中」。一部二次攻略資料は「ガックン判別可能」と記載。条件・発生率の裏付けを固定できないため CONFLICT_UNCORROBORATED_SECONDARY。
- 型式表記: 業界発表・HAZUSEは `L麻雀格闘倶楽部覚醒KM`。一部販売資料に `L麻雀格闘俱楽部KM` と短縮表記があるため、前者をcanonical採用。

## missingFields
- 設定変更時の5モード完全振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON単独時の有利区間/モード契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックンの確定条件/発生率: CONFLICT_UNCORROBORATED_SECONDARY

## sources
取得日: 2026-09-13
- コナミアミューズメント公式 発売決定: https://www.konami.com/amusement/corporate/ja/topics/20230705mfc/
  - スマスロ、純増約8枚/G、覚醒約1/99、裏覚醒約1/30、シリーズ仕様。
  - 信頼度: OFFICIAL
- コナミアミューズメント公式 稼働開始: https://www.konami.com/amusement/corporate/ja/topics/20230919/
  - 2023-09-19ホール稼働開始。
  - 信頼度: OFFICIAL
- 遊技日本 / P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/25092/nippon
  - 型式、設定別AT初当り/出玉率、純増、導入日、究局Mリーグ。
  - 信頼度: INDUSTRY
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9876
  - 設定別AT/機械割、35.4G/50枚、モード/天井、設定変更時約80%。
  - 信頼度: INDUSTRY / ANALYSIS_HIGH
- HAZUSE: https://hazuse.com/machine/pachislot/3S0673/
  - 型式 `L麻雀格闘倶楽部覚醒KM`、検定番号3S0673、導入日、純増。
  - 信頼度: ANALYSIS_HIGH
- なな徹 スペック: https://nana-press.com/kaiseki/machine/604/16779/
  - 設定別AT/機械割、35.4G/50枚。
  - 信頼度: ANALYSIS_HIGH
- なな徹 朝一: https://nana-press.com/kaiseki/machine/604/16786/
  - 設定変更で有利区間/救済G/モードRESET、据え置き引継ぎ、160G+α以内約80%、有利区間ランプ判別不可。
  - 信頼度: ANALYSIS_HIGH
- なな徹 モード: https://nana-press.com/kaiseki/machine/604/16796/
  - モード別天井、設定変更時モード再抽選、朝一160G+α以内約80%。
  - 信頼度: ANALYSIS_HIGH
- 一撃 総合: https://1geki.jp/slot/s_mfckakusei/
  - AT/出玉率、ベース、純増、初期G数、上位AT仕様。
  - 信頼度: ANALYSIS_HIGH
- 一撃 天井/朝一: https://1geki.jp/slot/s_mfckakusei/3/
  - モード天井、設定変更時160G+α以内約80%、朝一区間出玉率参考値。
  - 信頼度: ANALYSIS_HIGH
- パチスロメソッド: https://slotmethod.jp/archives/17770/
  - 設定変更/電源OFF→ONの天井・状態挙動、ガックン記載。
  - 信頼度: ANALYSIS_SINGLE（ガックンは未照合）
- ぽこすろっと: https://www.nankaikoya.jp/mahjongfightclub-kakusei-kitaichi/
  - 朝一97台250G以内当選の実戦集計、リセット狙い参考。
  - 信頼度: ANALYSIS_SINGLE / OBSERVED_SAMPLE

coreStatus: COMPLETE_CORE
