machineName: アイムジャグラーEX AnniversaryEdition
manufacturer: 北電子
releaseDate: 2017-03-13
recordNumber: 1056
generation: 5号機 / 5.5号機期
systemType: ノーマル / Aタイプ / 完全告知
formalModelName: アイムジャグラーEX-AnniversaryEdition／KK
certificationNumber: 6S0442
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_LOW_CONFIDENCE_BGM_CARRYOVER_NOTE

## identity
- 北電子公式にAnniversaryEditionの製品ページと2017-01-13特設サイト公開履歴が現存。
- HAZUSEで導入開始日2017-03-13、型式 `アイムジャグラーEX-AnniversaryEdition／KK`、検定番号 `6S0442` を確認。
- K-Navi、パチビー、当時解析でも2017-03-13導入が一致するためcanonical releaseDateは2017-03-13。
reliability: OFFICIAL_FOR_PRODUCT_EXISTENCE; ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE; MACHINE_DB_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 95.9% |
| 2 | 96.7% |
| 3 | 98.7% |
| 4 | 100.8% |
| 5 | 102.8% |
| 6 | 105.2% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### technicalPayoutReference
- チェリー狙い時の後年解析値: 96.91 / 97.80 / 99.91 / 102.04 / 104.16 / 106.55%。
- 公表機械割とは定義を混ぜず別系列として保持する。
reliability: SECONDARY_ANALYSIS

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/287.4 | 1/455.1 | 1/176.2 |
| 2 | 1/282.5 | 1/442.8 | 1/172.5 |
| 3 | 1/282.5 | 1/348.6 | 1/156.0 |
| 4 | 1/273.1 | 1/321.3 | 1/147.6 |
| 5 | 1/273.1 | 1/268.6 | 1/135.4 |
| 6 | 1/268.6 | 1/268.6 | 1/134.3 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値: 約34G/50枚。
- チェリー狙い解析値: 設定1/2 34.53G、3/4 34.54G、5 34.55G、6 35.87G/50枚。
- 完全小役奪取解析値: 設定1/2 35.00G、3/4 35.01G、5 35.02G、6 36.38G/50枚。
- 打ち方定義差を混ぜない。
reliability: ANALYSIS_HIGH_FOR_REPRESENTATIVE_AND_DETAILED_VALUES

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE。

## basicPayout
- BIG CHANCE: 約325枚。
- BONUS GAME（REG）: 約104枚。
reliability: MACHINE_DB_MULTI_SOURCE

## modeSpecificMinimumData
- 天井・ゾーン非搭載。
- AT/ART/CZ、ゲーム数管理モード、天国モード等は非搭載。
- 「100G以内のジャグ連」は俗称であり、天国状態や朝一モードではない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_NO_CEILING_MODE_WITH_LOW_CONFIDENCE_SPECIAL_BGM_CARRYOVER_NOTE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井・ゲーム数管理モード・内部高確を持つ機種ではないため、それらの設定変更RESET契約は `NOT_APPLICABLE`。
- 設定変更専用の朝一高確、短縮天井、ボーナス優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス後100G以内の特定G数BIGで変化するスペシャルBGM用の履歴/ゲーム数について、設定変更でリセットされるとの実戦系情報があるが公式/当時一次資料で直接固定できず `LOW_CONFIDENCE_SECONDARY` として分離。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING_OR_MODE; LOW_CONFIDENCE_SECONDARY_FOR_SPECIAL_BGM_COUNTER

### carryOverBehavior
- 天井・モード・状態進捗: `NOT_APPLICABLE`。
- 据え置き時、前日ボーナス後からの通算ゲーム数により当日非ゾロ目表示GでスペシャルBGMが発生し、据え置き推測に使えた実戦報告がある。
- これは機種固有の実戦観測であり、公式確定契約ではないため `LOW_CONFIDENCE_SECONDARY`。
reliability: LOW_CONFIDENCE_SECONDARY_FOR_SPECIAL_BGM_COUNTER; NOT_APPLICABLE_FOR_CEILING_MODE_STATE

### powerCycleBehavior
- 天井・モード・状態進捗: `NOT_APPLICABLE`。
- 純電源OFF→ONのみでスペシャルBGM用履歴/ゲーム数が保持されるかについて、本機固有の直接比較資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更や据え置き実戦例から純電断挙動を逆算しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_BGM_COUNTER

### gameCounterReset
- 天井ゲーム数: `NOT_APPLICABLE_NO_CEILING`。
- 通常時のゲーム数は当選契約を変える内部天井カウンタではない。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_MODE`。
- 朝一専用モード: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART系の通常/高確内部状態: `NOT_APPLICABLE`。
- 設定変更専用状態: `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更専用の短縮天井、高確、初当たり優遇等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 前日天井進捗消失等: `NOT_APPLICABLE_NO_CEILING`。
- その他の主要な設定変更専用不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一1G目のリールガックンは存在する資料があるが、本機は揺れが非常に小さく、目視判別が難しい機種として整理されている。
- 後年ジャグラー比較資料でも本機は「ガックンチェックが難しい機種」に分類されるため、`WEAK_INFERENCE_NOT_DETERMINISTIC` とする。
- スペシャルBGMの前日ゲーム数跨ぎは据え置き推測材料になり得る実戦報告があるが、公式確定判別ではない。
reliability: SECONDARY_MULTI_SOURCE_FOR_DIFFICULT_GAKKUN; LOW_CONFIDENCE_SECONDARY_FOR_BGM_CARRYOVER_INFERENCE

### numericResetData
- 設定変更専用モード振り分け: `NOT_APPLICABLE`。
- リセット専用天井G数: `NOT_APPLICABLE`。
- 設定変更専用当選率/恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常ボーナス後100G以内の当選はリセット恩恵ではなく通常確率に基づくため、朝一専用数値として扱わない。

## dataQualityNotes
- 導入日、型式、検定番号、ボーナス確率、機械割は複数系統で照合。
- 50枚ベースは代表約34Gと、打ち方別の解析値を定義分離。
- 公表機械割とチェリー狙い解析機械割は平均化しない。
- resetBehaviorはノーマル機として天井/モード項目が多く `NOT_APPLICABLE`。存在しない仕組みを推測で補わない。
- ガックンは「発生し得るが非常に見抜きにくい」ため、設定変更確定契約として扱わない。
- スペシャルBGMを利用した据え置き推測は実戦系単一資料のため低信頼で明示し、純電断契約へ外挿しない。

## conflicts
- 明確な性能コアCONFLICTなし。
- `DEFINITION_DIFFERENCE_PAYOUT_PUBLISHED_VS_CHERRY_TARGETING_ANALYSIS`: 公表機械割と技術介入/小役取得条件の異なる解析機械割を別系列保持。

## missingFields
- pure-power special-BGM counter/history contract: `UNVERIFIED_AFTER_RESEARCH`。
- official/deterministic reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の小役全抽選・告知振り分け等: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / 北電子製品ページ: https://www.kitadenshi.co.jp/products/2017/ae_p/
- OFFICIAL / 北電子ニュース履歴: https://www.kitadenshi.co.jp/hallnews/page/13/
- INDUSTRY / グリーンべると via P-WORLD: https://news.p-world.co.jp/articles/8968/greenbelt
- MACHINE_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S0442/
- MACHINE_DB / P-WORLD: https://www.p-world.co.jp/machine/database/8275
- ANALYSIS / K-Navi プレミアムピンク: https://p-kn.com/slot/2708/
- ANALYSIS / K-Navi プレミアムホワイト: https://p-kn.com/slot/2707/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/kitadenshi/31983/
- ANALYSIS / イチカツ: https://ichikatsu.com/imjuggler20th/
- RETROSPECTIVE_ANALYSIS / jugjug.net: https://jugjug.net/imjugglerex
- SECONDARY_GAKKUN / パチよみ: https://www.ps-channel.net/gakkuncheck/
- LOW_CONFIDENCE_EXPERIENCE / ノーマルタイプ&甘デジ好きのスロパチブログ: https://pachi778.com/imjugglerex-ae-deferred.html
