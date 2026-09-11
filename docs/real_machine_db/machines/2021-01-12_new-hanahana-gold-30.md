# ニューハナハナゴールド-30

No: 1388
machineName: ニューハナハナゴールド-30
machineNameVariants: ニューハナハナゴールド-30 / ニューハナハナゴールド‐30 / ニューハナハナゴールド / SニューハナハナゴールドEX-30
manufacturer: パイオニア
releaseDate: 2021-01-12
formalModelName: SニューハナハナゴールドEX-30
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6号機
systemType: ノーマル / Aタイプ / 完全告知 / 30Φ沖スロ

## identity / release
- パイオニア公式更新履歴で2021-01-12「全国導入開始」を確認し、ホール導入日のcanonicalを2021-01-12とする。
- K-Navi、必勝本系資料、複数解析資料も2021-01-12で一致。
- 一部機種DBには2021-01-04表記があるため、予定日/先行表記差としてconflictsへ保持する。
- 型式 `SニューハナハナゴールドEX-30` は複数機種DB・中古実機資料・検定通過一覧で一致。
- 検定番号は型式名、メーカー名、検定/認定/0S表記を組み替えて再探索したが高信頼値を固定できず、推測しない。
- reliability: OFFICIAL / INDUSTRY / DATABASE_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97% |
| 2 | 99% |
| 3 | 101% |
| 4 | 103% |
| 5 | 105% |
| 6 | 107% |
- 必勝本、1geki系資料、K-Navi、複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
本機はノーマルタイプのため主要初当たりはボーナス合算を採用。

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/297 | 1/496 | 1/186 |
| 2 | 1/284 | 1/458 | 1/175 |
| 3 | 1/273 | 1/425 | 1/166 |
| 4 | 1/262 | 1/397 | 1/157 |
| 5 | 1/251 | 1/370 | 1/149 |
| 6 | 1/240 | 1/344 | 1/141 |
- 必勝本、K-Navi、なな徹系、当時解析、P-WORLD系資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約48G/50枚（設定1-6の代表値として掲載）。
- 1gekiの後発整理で設定1-6約48G/50枚、当時解析・事前スペック資料でも約48G/50枚で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- NOT_APPLICABLE。
- ボーナスのみで出玉を増やすノーマルタイプで、AT/ART純増の比較項目は非該当。

## basicPayout
- BIG CHANCE: 最大224枚。
- REG CHANCE: 最大112枚。
- 必勝本、P-WORLD、複数当時解析資料で一致。
- reliability: ANALYSIS_HIGH / DATABASE_HIGH

## modeSpecificMinimumData
- 30Φ完全告知ノーマルタイプ。ハイビスカス点滅でボーナス確定。
- 天井機能非搭載。
- 当時解析では「天国や高確などの概念がない」と整理されており、AT/CZの規定G数モードを追うゲーム性ではない。
- ボーナス終了時TOPランプ、REG中サイドランプ等は設定推測要素だが、resetBehavior専用値ではないため詳細抽選は本物差し対象外。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_NO_CEILING_WITH_UNVERIFIED_MACHINE_SPECIFIC_DETECTION
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 天井非搭載のノーマルタイプで、設定変更によって短縮/再セットされるAT天井・CZ天井・規定G数モードはNOT_APPLICABLE。
- 1gekiの本機専用「設定変更時の挙動」は現在調査中で、内部状態の個別契約を固定できない。
- イチカツ系資料には設定変更時「G数: リセット」とあるが、本機には天井/規定G数モードがなく、そのG数の定義が内部天井なのか表示/履歴系なのか明記されていないため、ゲーム性上の内部天井RESETへ拡張解釈しない。

### carryOverBehavior
- 天井・AT/CZ規定G数・高確/天国モードの引継ぎはNOT_APPLICABLE（該当するゲーム性を搭載しない）。
- 設定そのものを据え置いた場合、前日設定値が継続すること以外に、朝一客が追う公開された有利な内部蓄積状態は確認できない。
- 本機固有のボーナス成立状態等は一般仕様から推測補完しない。

### powerCycleBehavior
- 1gekiの本機専用資料では電源OFF→ON時の「状態」は現在調査中。
- イチカツ系資料には電源ON/OFF時「G数: 引き継ぐ」とあるが、天井非搭載機であり対象G数の定義が不明なため、内部天井/モードCARRY_OVERとは扱わない。
- よって純電断により継続/初期化される本機固有内部状態の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- INTERNAL_CEILING_COUNTER: NOT_APPLICABLE（天井非搭載）。
- 一部攻略資料の「設定変更=G数リセット / 電源ON-OFF=G数引継ぎ」は存在するが、対象カウンター定義が明示されていないため `PUBLIC_CLAIM_DEFINITION_UNCLEAR` として保持。
- データ表示器など店舗設備側カウンターの挙動とは混同しない。

### ceilingAfterReset
- NOT_APPLICABLE。
- 天井機能非搭載を複数解析資料で一致確認。
- 設定変更専用の短縮天井なし。

### modeAfterReset
- 規定G数モード / 天国モード / ATモード: NOT_APPLICABLE。
- 当時解析では天国・高確等の概念なしとされる。
- 設定変更時のみの朝一専用モード振り分けは公開確認なし。

### stateAfterReset
- 朝一専用高確/CZ状態: NOT_APPLICABLE_FOR_PUBLIC_GAMEPLAY_CONTRACT。
- 本機専用の設定変更時/純電断時「状態」は1gekiでも調査中のため、それ以上は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- NOT_APPLICABLE_FOR_GAMEPLAY_YARDSTICK / NO_DIRECT_PUBLIC_MACHINE_SPEC_FOUND_AFTER_RESEARCH。
- 本機はボーナスのみで出玉を増やす6号機ノーマルで、AT/CZ有利区間のゲーム数・ランプ・区間リセット恩恵を朝一客が追うゲーム性として公開された本機固有契約を確認できない。
- 一般的な6号機知識から有利区間ランプ挙動を補完しない。

### resetBenefits
- 設定変更専用の天井短縮: NOT_APPLICABLE。
- 設定変更専用の高確・天国・CZ優遇・ボーナス当選率優遇: 公開確認なし。
- リセット狙いで0Gから期待値が上がるタイプの公開恩恵は確認なし。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認なし。

### resetDetection
- 本機名/型式/メーカー/シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/リール/有利区間」を組み替えて再探索したが、本機固有のガックン発生条件・発生率を高信頼な直接資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ハナハナ系一般論としてガックン判別を説明する後年資料は存在するが、別機種の仕様を本機へ自動転記しない。
- 当時の本機実戦回顧には「全リセ想定だがガックンしなかった」という観察例があり、少なくともガックン無しを本機の据え置き確定条件として扱う根拠にはしない。
- 天井や朝一内部モードがないため、ゲーム数・モードからの変更判別はNOT_APPLICABLE。

### numericResetData / publicMorningNumbers
- 設定変更時モード振り分け: NOT_APPLICABLE / 公開値なし。
- リセット短縮天井: NOT_APPLICABLE（天井非搭載）。
- 朝一特定G以内の設定変更専用当選率: 公開確認なし。
- 設定変更専用恩恵発生率: 公開確認なし。
- 設定変更時/電断時の本機固有状態数値: 公開固定値なし。

## resetBehavior 再探索メモ
2026-09-12。`ニューハナハナゴールド-30 / ニューハナハナゴールド / SニューハナハナゴールドEX-30 / パイオニア / ハナハナ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / G数 / 天井 / 天井短縮 / モード / 高確 / ガックン / リール / 有利区間 / ランプ` を組み替え、パイオニア公式、1geki、必勝本、K-Navi、P-WORLD、当時解析、旧機種DB、後年回顧・ハナハナ系資料を横断。天井非搭載、AT/CZ規定G数モードなしは複数一致。1gekiは設定変更/電断の状態を現在調査中としており、イチカツのG数RESET/CARRYは対象G数の定義が不明。ガックンも本機固有の直接契約を固定できなかったため一般シリーズ仕様からの推定転記を避けた。

## conflicts
- releaseDate: パイオニア公式・K-Navi・必勝本等は2021-01-12全国導入開始。一部機種DB/事前解析に2021-01-04表記あり。公式全国導入日2021-01-12をcanonicalとし、2021-01-04は予定/早期掲載差として保持。
- basicPayout: 高信頼・当時資料はBIG最大224枚 / REG最大112枚。一部後年ページに最大240枚 / 96枚等の不一致表記があるが、複数当時資料とP-WORLDで一致する224/112をcanonicalとする。
- gameCounterReset: イチカツ系に「設定変更=リセット / 電源ON-OFF=引継ぎ」のG数表記がある一方、1gekiは両状態を調査中。さらに天井非搭載で対象G数定義が明示されないため、内部天井契約としては確定せず `CONFLICT/DEFINITION_UNCLEAR` とする。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の本機固有内部状態契約: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプを使う本機固有変更判別契約: NO_DIRECT_PUBLIC_MACHINE_SPEC_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-12
- https://www.slot-pioneer.co.jp/news.html
- https://www.amusement-japan.co.jp/article/detail/10001968/
- https://p.hisshobon.jp/machine/3574/1/79597
- https://p.hisshobon.jp/machine/3574/1/80388
- https://1geki.jp/slot/newhana_gold/3/
- https://1geki.jp/slot/newhana_gold/4/
- https://p-kn.com/slot/3499/
- https://nana-press.com/kaiseki/machine/92/3084/
- https://www.p-world.co.jp/machine/database/9267
- https://chonborista.com/slot/pionia-slot/121545/
- https://ichikatsu.com/newhanahanagold/
- https://pachinko-curation.com/5225/
- https://www.pachinkoquora.com/machine/pachinslot/1458/
- https://kaiseki.sulopachinews.com/archives/2352
- https://ameblo.jp/datyo1062/entry-12651286369.html
- https://ameblo.jp/datyo1062/entry-12652385387.html

## reliability
- identity/manufacturer/release: OFFICIAL / INDUSTRY / DATABASE_HIGH
- formalModelName: DATABASE_HIGH / MULTI_SOURCE
- certificationNumber: UNVERIFIED
- payout/bonus probabilities: ANALYSIS_HIGH
- baseGamesPer50: ANALYSIS_HIGH
- basicPayout: ANALYSIS_HIGH / DATABASE_HIGH
- resetBehavior: ANALYSIS_HIGH for no-ceiling/no-regulated-game-mode core; ANALYSIS_SINGLE/DEFINITION_UNCLEAR for G-count reset/carry claim; UNVERIFIED only for machine-specific gakkun/power-cycle-state/advantageous-section-lamp items noted above
