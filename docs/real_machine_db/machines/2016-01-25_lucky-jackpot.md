# ラッキージャックポット

machineName: ラッキージャックポット
manufacturer: 岡崎産業
releaseDate: 2016-01-25
releaseDatePrecision: exact_hall_start_analysis_multi_source
recordNumber: 949
generation: 5号機
systemType: ノーマルAタイプ / CT内部状態連動型 / 7セグ告知
formalModelName: ラッキージャックポットL1
inspectionNumber: 5S0799
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED

## identity
- HAZUSEと当時解析で **2016-01-25導入** を一致確認。
- HAZUSEで型式名 **ラッキージャックポットL1**、検定番号 **5S0799** を確認。
- 岡崎産業の2015-11-17プレス内覧会を報じた業界記事でも、Aタイプ機・高確モード搭載という基本仕様を確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.4% |
| 2 | 98.6% |
| 3 | 100.4% |
| 4 | 103.1% |
| 5 | 106.2% |
| 6 | 109.5% |

- ちょんぼりすた、すろぱちくえすとで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
ノーマル機の主要初当たりとしてBIG/REG/ボーナス合算を保存。

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/396 | 1/396 | 1/198 |
| 2 | 1/375 | 1/376 | 1/188 |
| 3 | 1/355 | 1/354 | 1/177 |
| 4 | 1/330 | 1/330 | 1/165 |
| 5 | 1/299 | 1/299 | 1/149 |
| 6 | 1/278 | 1/277 | 1/139 |

- HAZUSE、ちょんぼりすた、すろぱちくえすとで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約46G/50枚**。
- ちょんぼりすた、すろぱちくえすとで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。
- AT/ART非搭載。

## basicPayout
- BIG BONUS: **最大311枚**。
- REG BONUS: **最大92枚**。
- BIG中は逆押しナビ時に逆押しで最大獲得。
- 業界発表の払い出し表記はBB344枚/RB155枚であり、実獲得枚数とは定義が異なるため混ぜない。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 天井: **非搭載**。
- 通常時は内部的に通常モード / 高確モードが存在。
- 高確モード中のボーナス合算は **全設定共通 約1/135.4**（BIG 1/270.81、REG 1/270.81）。
- 7セグ偶数揃いで高確モード移行が濃厚、ボーナス終了後は高確モードへ移行。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_RESET_TENGOKU_START_CONFIRMED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 複数資料で **設定変更後は天国モードからスタート** とする記述を確認。
- 2016-01-27時点のすろぱちくえすとは当初「高確状態スタートの可能性あり（噂）」としていたが、後年の実機販売資料では明示的に「設定変更後：天国モードからスタート」と記載。
- 本DBでは後者を採用しつつ、初期解析時点では未確定情報だった履歴もconfidenceへ残す。

### carryOverBehavior
- 天井は非搭載。
- 据え置き時に前日の通常/高確・天国状態をどの粒度で保持するかについて、本機固有の直接資料は十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般論や同シリーズ他機の仕様は流用しない。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の通常/高確・天国状態、ランプ表示の保持/初期化について、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- game-count ceiling: **NOT_APPLICABLE / NO_CEILING**。
- 天井ゲーム数のRESET/CARRY契約は存在しない。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- リセット専用短縮天井も非該当。

### modeAfterReset
- **設定変更後は天国モードスタート**。
- 朝一専用の複数モード振り分け率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 高確モードは天国モードを示唆するチャンスゾーンとして扱われ、内部状態契約と表示ランプ契約を混同しない。

### stateAfterReset
- 設定変更後の恩恵として天国モードスタートを確認。
- 設定変更直後に高確ランプが必ず点灯するか、通常/高確表示状態まで固定されるかは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- **設定変更後は天国モードからスタート**。
- 高確モード滞在時のボーナス合算は全設定共通 **約1/135.4** で、朝一狙いに影響する主要恩恵。
- ただし設定変更直後の高確ランプ点灯保証や恩恵継続G数の固定公開値は確認できていない。

### resetPenalties
- **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井非搭載のため宵越し天井消滅等は非該当。

### resetDetection
- 高確ランプ点灯中は高確モード滞在に期待できるため朝一状態推測材料になる。
- ただし朝一の高確ランプ点灯/消灯だけで設定変更を確定できる本機固有契約は確認できず、**CHANGE_DETECTION_NOT_CONFIRMED**。
- ガックン、初期出目、その他ランプ等による設定変更/据え置き確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- reset shortened ceiling: **NOT_APPLICABLE_NO_CEILING**。
- reset start mode: **天国モードスタート（振り分け率の公開値なし）**。
- high-mode bonus probability: **合算約1/135.4、BIG 1/270.81、REG 1/270.81（全設定共通）**。
- reset-only morning hit probability within fixed G: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-only benefit occurrence rate: **100%表記を安全に固定できる一次/当時解析テーブルなし。モードスタート契約のみ採用**。

## conflicts
- `RESET_INFORMATION_MATURITY`:
  - すろぱちくえすと（2016-01-27時点）: 設定変更後の高確状態スタートは「可能性あり／噂」、確定情報ではないと記載。
  - 後年の中古実機販売資料: **設定変更後は天国モードからスタート** と明記。
  - 数値振り分けを推測せず、定性的な天国スタートのみ採用。
- `PAYOUT_DEFINITION_DIFFERENCE`:
  - 業界発表: BB344枚/RB155枚（払い出し）。
  - 実獲得: BIG最大311枚/REG最大92枚。
  - 定義差のため平均化しない。

## missingFields
- carryOverBehavior for normal/high/tengoku internal state: UNVERIFIED_AFTER_RESEARCH
- purePowerCycle state/lamp contract: UNVERIFIED_AFTER_RESEARCH
- reset start-mode percentage table: NONE_CONFIRMED_AFTER_RESEARCH
- manufacturer-guaranteed change detection: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. HAZUSE — ラッキージャックポット
   - https://hazuse.com/machine/pachislot/5S0799/
   - 2016-01-25導入、岡崎産業、型式ラッキージャックポットL1、検定番号5S0799、BIG/REG/合算、天井非搭載、内部状態、高確モード中1/135.40。
   - reliability: ANALYSIS_DATABASE_HIGH
2. ちょんぼりすた — ラッキージャックポット スロット｜解析まとめ
   - https://chonborista.com/slot/okazaki-slot/16194/
   - 2016-01-25導入、約46G/50枚、機械割、BIG/REG/合算、BIG最大311枚/REG92枚、高確中1/135。
   - reliability: ANALYSIS_HIGH
3. すろぱちくえすと — ラッキージャックポット 設定判別から狙い目まで
   - https://www.slopachi-quest.com/article/lucky-jackpot/
   - 約46G/50枚、スペック、天井非搭載、高確中1/135、2016-01-27時点の設定変更後高確スタート噂記録。
   - reliability: ANALYSIS_PERIOD
4. P-WORLD — ラッキージャックポット
   - https://www.p-world.co.jp/machine/database/7919
   - 通常/高確モード、偶数目から高確、ボーナス終了後高確、BIG最大311枚。
   - reliability: INDUSTRY_DATABASE
5. ニッカンアミューズメント — 岡崎「ラッキージャックポット」発表
   - https://www.nikkansports.com/amusement/pachinko/news/1567893.html
   - 2015-11-17プレス内覧会、Aタイプ、高確モード、BB/RB払い出し枚数。
   - reliability: INDUSTRY
6. 中一商事 — 岡崎産業 ラッキージャックポット 中古実機
   - https://www.nakaiti.com/html/sOkazaki009.html
   - 型式名、ノーマルA、BIG最大311枚/REG最大92枚、設定変更後天国モードスタート。
   - reliability: SECONDARY_MACHINE_RETAILER

## confidence
- identity/formalModel/inspectionNumber: ANALYSIS_DATABASE_HIGH
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- bonusProbabilityBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- basicPayout: INDUSTRY_PLUS_ANALYSIS_HIGH_WITH_DEFINITION_DIFFERENCE
- ceiling: ANALYSIS_HIGH_MULTI_SOURCE_NO_CEILING
- settingChangeBehavior: ANALYSIS_MEDIUM_WITH_LATER_SECONDARY_CONFIRMATION
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
