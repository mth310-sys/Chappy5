machineName: パチスロ 信長の野望-創造-
manufacturer: EXCITE
releaseDate: 2017-06-05
recordNumber: 1088
generation: 5号機 / 5.5号機
systemType: ART / CZ / 疑似ボーナス型上乗せゾーン
formalModelName: 信長の野望-創造-Z
certificationNumber: 6S1124
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `信長の野望-創造-Z`、検定番号 `6S1124`、導入開始日2017-06-05、メーカーEXCITEを確認。
- 一撃、2017年6月新台資料も2017-06-05導入で一致。
- 長崎県遊技業協同組合掲載の遊技通信記事とグリーンべるとで、EXCITE/ニューギン系の本機発表とART機仕様を確認。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.3%|
|2|98.9%|
|3|100.0%|
|4|102.7%|
|5|106.2%|
|6|111.0%|
- HAZUSE、一撃で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/422.3|
|2|1/399.0|
|3|1/389.0|
|4|1/357.7|
|5|1/319.6|
|6|1/279.7|
- 一撃の精密値をcanonicalとし、HAZUSEの1/422 / 399 / 389 / 358 / 320 / 280は丸め値として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約47G/50枚（全設定代表値）。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「創造の刻」: 約1.9枚/G。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「創造の刻」は固定G数/固定枚数ではなく、自軍兵力が0になるまで継続する兵力管理型。
- ART初当たり時の「野望チャンス / 真野望チャンス」はベル6回成立まで継続し、自軍兵力を上乗せ後ARTへ移行。
- 固定獲得枚数を物差し値として置けるリアルボーナスは非搭載。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は「指令」「夢幻チャレンジ」「舞姫チャレンジ」のCZからARTを目指す。
- CZ期待度は指令約20%、夢幻チャレンジ約30%、舞姫チャレンジ約80%。
- 通常天井はART間1280G。1280G到達後、前兆突入契機成立時にART（真野望チャンス）へ入るため、実発動が1280Gを超える場合がある。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_NUMBER_FOR_CREATION_BOARD
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET。
- 創造ボード: 9マスそれぞれを18.8%で内部点灯抽選。
- 点灯しても内部点灯のため表面上は直接分からない。
- 設定変更専用の固定短縮天井は確認できない。
reliability: ANALYSIS_HIGH_DIRECT_CONTEMPORARY

### carryOverBehavior
- 据え置きは設定変更処理なしとして天井進捗をCARRYOVER扱い。
- 創造ボードの据え置き単独契約は、十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CEILING_CARRYOVER; UNVERIFIED_FOR_CREATION_BOARD

### powerCycleBehavior
- 天井ゲーム数: CARRYOVER。
- 創造ボード: 当時解析では「現在調査中」。後発資料を含め検索語を変えても直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CEILING; UNVERIFIED_FOR_CREATION_BOARD

### gameCounterReset
- settingChange: RESET。
- carryOver: CARRYOVER。
- powerOffOn: CARRYOVER。

### ceilingAfterReset
- standardCeiling: ART間1280G。1280G到達後、次の前兆突入条件成立により発動するため1280G超となる場合あり。
- resetCeiling: 1280G進捗0から再開。
- setting-change-specific shortening: `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 通常/天国等のゲーム数解除モードを主要構造とする機種ではなく、設定変更専用モード振り分けも `NONE_CONFIRMED_AFTER_RESEARCH`。
- 創造ボードのリセット抽選を独立した朝一状態要素として扱う。

### stateAfterReset
- 設定変更時の一般的な低確/高確等の状態再抽選契約・数値は、機種名/型式/EXCITE/ニューギン + 設定変更/朝一/リセット/状態/高確へ検索語を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 創造ボードは各マス18.8%で内部点灯抽選されることだけを確定値として保持。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更時、創造ボード9マスが各18.8%で点灯抽選されるため、朝一から内部的に宝玉/ライン成立へ近い状態で始まる可能性がある。
- 9マス独立と仮定した派生確率は実機完全再現側の推定になるため算出・保存しない。
- 天井短縮の恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 前日ART間ゲーム数は設定変更で消去され、宵越し天井狙いは無効になる。
- それ以外の設定変更専用冷遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時の創造ボード点灯は内部点灯で表面上分からないため、確定変更判別には使えない。
- 本機固有の確定ガックン/初期出目契約は、ガックン/朝一/設定変更/据え置き等へ検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NON_VISIBLE_BOARD_BEHAVIOR; UNVERIFIED_FOR_GAKKUN

### numericResetData
- creationBoardPerCellLitProbabilityAfterSettingChange: 18.8% × 9マス（各マスの個別抽選として当時解析掲載）。
- normalCeiling: ART間1280G + 発動待ち前兆契機。
- resetCeiling: standard 1280G進捗0から。
- resetStateDistribution: UNVERIFIED_AFTER_RESEARCH。

## conflicts
- ART初当たりは一撃の精密値 `1/422.3 / 399.0 / 389.0 / 357.7 / 319.6 / 279.7` とHAZUSEの整数丸め `1/422 / 399 / 389 / 358 / 320 / 280` があるが、定義一致・丸め差として分離保存しCONFLICTにはしない。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for core yardstick values.

## missingFields
- powerOffOn creation-board carryover/reset contract: UNVERIFIED_AFTER_RESEARCH
- carryOver creation-board contract: UNVERIFIED_AFTER_RESEARCH
- setting-change internal low/high state distribution: UNVERIFIED_AFTER_RESEARCH
- deterministic gakkun / initial-reel reset clue: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. HAZUSE 基本/型式/検定/性能 — https://hazuse.com/machine/pachislot/6S1124/
2. 一撃 基本 — https://1geki.jp/slot/s_nobunagasouzou/
3. 一撃 天井/設定変更 — https://1geki.jp/slot/s_nobunagasouzou/3/
4. 一撃 ART概要 — https://1geki.jp/slot/s_nobunagasouzou/81/
5. グリーンべると 新機種発表 — https://web-greenbelt.jp/00009538/
6. 長崎県遊技業協同組合 / 遊技通信転載 — https://nagasaki-yukyo.or.jp/information/%E4%BA%BA%E6%B0%97%E6%AD%B4%E5%8F%B2slg%E3%80%8C%E4%BF%A1%E9%95%B7%E3%81%AE%E9%87%8E%E6%9C%9B%E3%80%8D%E3%81%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%81%AB%E7%99%BB%E5%A0%B4/
7. P-Summa 2017年6月新台 — https://psumma.jp/trend/35081/
