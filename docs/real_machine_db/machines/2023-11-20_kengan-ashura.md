# パチスロ ケンガンアシュラ

recordNo: 1603
machineName: パチスロ ケンガンアシュラ
aliases: Lケンガンアシュラ / スマスロ ケンガンアシュラ
manufacturer: ネット
formalModel: LケンガンアシュラND
inspectionCode: 3S0630
releaseDate: 2023-11-20
generation: 6.5号機 / スマスロ
systemType: AT / CZ突破型 / 上位AT・最上位AT搭載
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- NET公式動画は「2023年11月20日より全国のパチンコホールで導入開始」と明記。
- 一撃、P-WORLD等も2023-11-20で一致。
信頼度: OFFICIAL / INDUSTRY_HIGH / MULTI_SOURCE_MATCH

## payoutRateBySetting
| 設定 | 機械割 |
|---|---:|
| 1 | 97.8% |
| 2 | 98.9% |
| 3 | 101.1% |
| 4 | 103.8% |
| 5 | 106.7% |
| 6 | 110.3% |

P-WORLD・一撃系・解析資料で一致。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT初当り
| 設定 | AT初当り |
|---|---:|
| 1 | 1/399.6 |
| 2 | 1/389.9 |
| 3 | 1/354.5 |
| 4 | 1/315.4 |
| 5 | 1/285.5 |
| 6 | 1/256.2 |

### CZ「ケンガンチャンス」
| 設定 | CZ |
|---|---:|
| 1 | 1/177.6 |
| 2 | 1/177.1 |
| 3 | 1/170.3 |
| 4 | 1/161.2 |
| 5 | 1/154.0 |
| 6 | 1/145.9 |

P-WORLDはAT/CZを整数丸め（AT 1/400→1/256、CZ 1/178→1/146）で掲載。上表は詳細解析値をcanonicalとし、丸め表記は定義差としてCONFLICT扱いしない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35.5G/50枚（全設定共通表記）。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- メインAT「拳願絶命RUSH」: 約2.5枚/G。
- 最上位AT「ULTIMATE拳願BONUS」: 約5.0枚/G。
信頼度: OFFICIAL / INDUSTRY_HIGH / ANALYSIS_HIGH

## basicPayout
- メインAT「拳願絶命RUSH」: 初期50G+α。
- 上位AT「拳願絶命RUSH阿修羅」: 突入時に「拳願アタック」でバトルストックを獲得して開始。
- 最上位AT「ULTIMATE拳願BONUS」: 純増約5.0枚/G。終了後は「二虎流奥義伝授 極」へ移行し、フリーズ成功時は最上位ATへ再突入。
- 「二虎流奥義伝授 極」のフリーズ期待度は約50%、最上位AT突入時の期待枚数は約3300枚と業界記事で公表。
信頼度: OFFICIAL / INDUSTRY_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数・レア役などからCZ「ケンガンチャンス」を目指す。
- CZは秋山楓（ST型・成功期待度約35%）と十鬼蛇王馬（殲滅型・成功期待度約50%）の2系統。
- 液晶ゲーム数は50GごとにCZ当選期待度が変化し、CZ間最大400G+αでCZ当選。
- CZを最大7回連続失敗した後、8回目のCZは成功＝AT当選。
- 拳願ポイントは1億pt到達で「阿修羅炎武」へ。設定変更時は初期ポイント抽選を行う。
信頼度: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS_WITH_UNQUANTIFIED_RESET_PREFERENCE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 有利区間: RESET。
- CZ間ゲーム数/天井: RESET。
- 拳願ポイント: 再抽選。液晶表示は0ptでも内部的にポイントを所持する場合がある。
- CZスルー回数: RESETとする解析資料あり。
- 内部状態: RESETとする複数二次解析資料あり。
信頼度: ANALYSIS_HIGH（有利区間・天井・拳願pt） / ANALYSIS_SECONDARY（CZスルー・内部状態）

### carryOverBehavior
- 据え置き: 有利区間CARRY_OVER、天井CARRY_OVER、拳願ポイントCARRY_OVERをなな徹で確認。
- CZスルー回数・内部状態の据え置き契約は、純電断資料と整合するものの、今回確認した高信頼資料では据え置き欄として独立固定できなかったため推測補完しない。
信頼度: ANALYSIS_HIGH / PARTIAL_ON_CZ_COUNT_AND_STATE

### powerCycleBehavior
- 電源OFF→ONのみ: CZ間ゲーム数CARRY_OVER、CZスルー回数CARRY_OVER、内部状態CARRY_OVER、拳願ポイントCARRY_OVER、有利区間CARRY_OVERとする機種別解析資料あり。
- 開始ステージは設定変更時と同じ「乃木会長室」とする解析があり、外観だけでは変更判別できない。
信頼度: ANALYSIS_SECONDARY / MULTI_SOURCE_PARTIAL_MATCH

### gameCounterReset
- 設定変更: CZ間ゲーム数RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ONのみ: CARRY_OVER。
- 通常のCZ間天井は最大400G+α。
信頼度: ANALYSIS_HIGH / SECONDARY_POWER_CYCLE

### ceilingAfterReset
- 通常CZ間天井: 最大400G+αでCZ当選。
- 通常CZスルー天井: 最大7回失敗後、8回目CZでAT当選。
- 一部攻略資料は設定変更時にCZスルー回数天井が優遇/短縮される可能性を記載するが、具体的な短縮回数・振り分け率は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 「設定変更で400G天井自体が何Gへ固定短縮される」と断定できる高信頼公開値は確認できない。
信頼度: ANALYSIS_HIGH / UNQUANTIFIED_RESET_PREFERENCE

### modeAfterReset
- 設定変更後は拳願ポイントの初期抽選を実施。
- 朝一専用モード名や設定変更専用の50/100/150/200/250/300/350/400G振り分け率は、表記揺れ・型式・メーカー・リセット語を変えて再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH / UNVERIFIED_NUMERIC_AFTER_RESEARCH

### stateAfterReset
- 設定変更: 内部状態RESETとする解析資料あり。
- 電源OFF→ONのみ: 内部状態CARRY_OVERとする複数二次解析資料あり。
- 設定変更時の通常/高確等の具体的初期振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_SECONDARY / UNVERIFIED_NUMERIC_AFTER_RESEARCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ONのみ: CARRY_OVERとする機種別解析資料あり。
- 有利区間ランプから設定変更/据え置きを判別することはできない。
- 設定変更以外の有利区間リセット時は「二虎流奥義伝授 極」へ移行する解析があるが、設定変更時は同恩恵の対象外として区別する。
信頼度: ANALYSIS_HIGH / SECONDARY_POWER_CYCLE

### resetBenefits
- 設定変更時に拳願ポイント初期抽選。液晶0ptでも内部保有の可能性あり。
- 二次攻略資料ではCZスルー回数天井が優遇/短縮される可能性が示されるが、公開された確定回数・割合は未確認。
- 設定変更時以外の有利区間リセット恩恵「二虎流奥義伝授 極」と、朝一設定変更を混同しない。
信頼度: ANALYSIS_HIGH / UNQUANTIFIED_SECONDARY_CLAIM

### resetPenalties
- 設定変更で前日のCZ間進行、拳願ポイント、CZスルー進行はリセット/再抽選対象となるため、前日蓄積が大きい場合は据え置きに比べ失われる要素がある。
- 朝一専用の定量的マイナス期待値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / NO_PUBLIC_NUMERIC_PENALTY

### resetDetection
- なな徹はリセット判別を「調査中」とし、有利区間ランプからの変更判別は不可と明記。
- 別解析では設定変更・電源OFF→ONとも「乃木会長室」開始で見た目の判別不可。
- 前日最終のCZ間ゲーム数・CZスルー進行を把握していれば翌日の挙動から推測材料にはなるが、単独確定契約ではない。
- 本機固有のリールガックン条件・発生率は、`ケンガンアシュラ / LケンガンアシュラND / NET` と `ガックン / リール初動 / 設定変更 / 朝一` を組み替えて再探索したが高信頼固定情報を確認できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH / UNVERIFIED_GACKUN_AFTER_RESEARCH

### numericResetData
- 通常CZ間天井: 最大400G+α。
- CZスルー回数天井: 最大7回失敗後、8回目CZでAT。
- 設定変更時拳願ポイント: 初期抽選あり（具体的ポイント振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）。
- 設定変更時CZスルー短縮回数/振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 朝一○G以内AT当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 設定変更時の確定公開数値は、通常天井最大400G+α・通常CZスルー天井最大7回失敗後8回目という基準値まで。
- 朝一専用固定短縮G数、初期拳願ポイントの具体的分布、CZスルー短縮率、朝一AT期待度はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## groupAudit
- 2023-11-20のパチスロ新台一覧では `Lケンガンアシュラ` と `Lひぐらしのなく頃に 業` の掲載資料がある。
- `Lひぐらしのなく頃に 業` は本DBで2023-11-06をcanonical導入日としてNo.1602処理済みで、一部地域11/20資料は既存レコード側に保持済み。
- よって2023-11-20に新規canonical追加すべき未処理機は本機1機と判定し、同日群を1/1 CLOSEDとする。

## conflicts
- 現時点で性能コアの実質的な数値競合は確認せず。P-WORLDのAT/CZ整数表記は詳細値の丸めとして扱う。
- 設定変更時のCZスルー天井優遇について、二次資料は「短縮/優遇」を示すが具体値を公開していないため、通常天井値から推測しない。

## missingFields
- 設定変更時の初期拳願ポイント具体的振り分け。
- 設定変更時CZスルー回数天井の具体的短縮回数/振り分け。
- 朝一専用AT当選率・期待度。
- 本機固有ガックン条件/発生率。
- 据え置き時CZスルー回数・内部状態を独立明記した一次/高信頼資料。

## sources
取得日: 2026-09-13
1. NET公式YouTube — パチスロ ケンガンアシュラ
   - https://www.youtube.com/watch?v=nfoWNxIQY4Q
   - 2023-11-20全国導入、極LOOP等
   - reliability: OFFICIAL
2. 遊技通信web — 東京都公安委員会検定通過状況2023年8月まとめ
   - https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%812023%E5%B9%B48%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%888%E6%9C%887/
   - `LケンガンアシュラND` / 検定番号 `3S0630`
   - reliability: INDUSTRY_HIGH / PUBLIC_SAFETY_COMMISSION_REPORT
3. P-WORLD
   - https://www.p-world.co.jp/machine/database/9908
   - 設定別機械割、AT/CZ丸め値、約35.5G/50枚、基本仕様
   - reliability: ANALYSIS_HIGH
4. P-WORLD業界ニュース / 遊技日本
   - https://news.p-world.co.jp/articles/25331/nippon
   - 正式型式、純増2.5/5.0枚/G、AT構造、最上位AT期待枚数約3300枚
   - reliability: INDUSTRY_HIGH
5. 一撃
   - https://1geki.jp/slot/l_kengan_ashura/39/
   - 導入日、スペック、AT初当り、ベース、純増
   - reliability: ANALYSIS_HIGH
6. 一撃 — 天井/設定変更時の挙動
   - https://1geki.jp/slot/l_kengan_ashura/3/
   - CZ間400G+α、CZスルー回数天井
   - reliability: ANALYSIS_HIGH
7. なな徹 — 朝一・設定変更時
   - https://nana-press.com/kaiseki/machine/635/17827/
   - 設定変更: 有利区間/天井RESET・拳願pt再抽選、据え置きCARRY_OVER、有利区間ランプ判別不可
   - reliability: ANALYSIS_HIGH
8. なな徹 — 天井
   - https://nana-press.com/kaiseki/machine/635/17825/
   - CZ間最大400G、最大7回失敗後8回目CZでAT
   - reliability: ANALYSIS_HIGH
9. なな徹 — 拳願ポイント/阿修羅炎武
   - https://nana-press.com/kaiseki/machine/635/17831/
   - 設定変更時初期拳願ポイント抽選
   - reliability: ANALYSIS_HIGH
10. ぽこすろっと
   - https://www.nankaikoya.jp/kenganashura-kitaichi/
   - 設定変更/電源OFF→ON比較、開始ステージ、CZ回数・内部状態・有利区間・拳願ptの扱い、リセット優遇の補助資料
   - reliability: ANALYSIS_SECONDARY
11. フリック7
   - https://flick7.net/slot/kengan_ashura__k.php
   - 設定変更/電源OFF→ONの天井・内部状態、見た目判別不可、有利区間リセットタイミング
   - reliability: ANALYSIS_SECONDARY
12. パチナビ
   - https://pachinavi.net/machines/kengan-ashura/settei/
   - 詳細AT/CZ確率、設定別機械割、設定変更概要
   - reliability: ANALYSIS_SECONDARY
13. スロパチニュース導入カレンダー
   - https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/11%E6%9C%8820%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
   - 2023-11-20導入一覧。Lひぐらしは地域差として既存No.1602で処理済み。
   - reliability: INDUSTRY_CALENDAR_SUPPORT

## status
COMPLETE_CORE
