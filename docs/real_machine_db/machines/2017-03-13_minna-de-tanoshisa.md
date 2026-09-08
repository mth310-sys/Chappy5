machineName: パチスロ みんなで楽シーサー
manufacturer: SANKYO
releaseDate: 2017-03-13
recordNumber: 1057
generation: 5号機 / 5.5号機期
systemType: ノーマル / Aタイプ / 完全告知
formalModelName: パチスロみんなで楽シーサーS
certificationNumber: 6S1665
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- SANKYOオンライン博物館で導入年月2017.03、販売名「パチスロ みんなで楽シーサー」、型式「パチスロ みんなで楽シーサー S」を確認。
- HAZUSEで導入開始日2017-03-13、型式 `パチスロみんなで楽シーサーS`、検定番号 `6S1665` を確認。
- パチ7、当時解析でも2017-03-13導入が一致するためcanonical releaseDateは2017-03-13。
- PiDEA Xは2017-02-24記事で「納品3/20～」としており、全国導入日資料との日付差は納品系列の差として保持し、releaseDate CONFLICTにはしない。
reliability: OFFICIAL_FOR_PRODUCT_AND_FORMAL_MODEL; ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE; MACHINE_DB_FOR_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.1% |
| 3 | 99.1% |
| 4 | 101.8% |
| 5 | 104.7% |
| 6 | 110.1% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/265 | 1/360 | 1/152 |
| 2 | 1/264 | 1/334 | 1/147 |
| 3 | 1/262 | 1/316 | 1/143 |
| 4 | 1/253 | 1/282 | 1/133 |
| 5 | 1/245 | 1/253 | 1/124 |
| 6 | 1/230 | 1/230 | 1/115 |
reliability: OFFICIAL_FOR_BONUS_PROBABILITIES; ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE解析: 約32.1～33.4G/50枚。
- ちょんぼりすた代表値: 32G/50枚。
- 別当時解析に約34G表記もあるため、代表値を無理に平均せず `CONFLICT_BASE_GAMES_PER_50_32_TO_33_4_VS_APPROX_34` として保持。
reliability: ANALYSIS_HIGH_WITH_MINOR_SOURCE_CONFLICT

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE。

## basicPayout
- BIG BONUS: 約312枚。
- REG BONUS: 約104枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE; INDUSTRY_SECONDARY

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすノーマルAタイプ。
- 天井機能非搭載。
- AT / ART / CZ / ゲーム数管理モードなし。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_NO_CEILING_MODE_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_AND_DETECTION_DETAILS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井、ゲーム数管理モード、AT/ART/CZ高確を持つ機種ではないため、それらに関する設定変更RESET契約は `NOT_APPLICABLE`。
- 設定変更専用の朝一高確、短縮天井、初当たり優遇、専用ボーナス確率変化は、機種名・型式・SANKYO・楽シーサー系列に「設定変更」「リセット」「朝一」「天井短縮」「モード」を組み合わせ再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING_OR_MODE; NONE_CONFIRMED_AFTER_RESEARCH_FOR_RESET_ONLY_BENEFITS

### carryOverBehavior
- 天井ゲーム数・モード・高確進捗: `NOT_APPLICABLE`。
- ボーナス抽選状態に関する据え置き専用の主要な朝一恩恵/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の前日履歴・内部カウンタを利用した据え置き判別契約は `UNVERIFIED_AFTER_RESEARCH`。
reliability: NOT_APPLICABLE_FOR_CEILING_MODE; UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_HISTORY

### powerCycleBehavior
- 天井・ゲーム数管理モード・高確進捗: `NOT_APPLICABLE`。
- 純電源OFF→ONのみで保持/初期化される本機固有の表示・告知履歴について直接比較資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更や一般的なノーマル機挙動から外挿しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_DISPLAY_OR_HISTORY

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_MODE`。
- 朝一専用モード: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART系通常/高確状態: `NOT_APPLICABLE`。
- 設定変更専用内部状態: `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 短縮天井、高確スタート、CZ優遇、初当たり優遇等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 天井進捗消失等: `NOT_APPLICABLE_NO_CEILING`。
- その他の主要な設定変更専用不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有の朝一リールガックン、初期出目、シーサー役物/ランプ表示による設定変更・据え置きの確定/濃厚判別契約は、表記揺れ・型式・シリーズ名で再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的なSANKYO機のガックン挙動を本機へ転記しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 設定変更時モード振り分け: `NOT_APPLICABLE`。
- リセット専用天井G数: `NOT_APPLICABLE`。
- 朝一特定G数以内の専用当選率/恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- SANKYO公式で機種存在・型式・設定別BB/RB/合算を確認。
- 導入日はHAZUSE・パチ7・複数解析で2017-03-13一致。
- PiDEA Xの「納品3/20～」は納品予定系列のため全国導入日と同一フィールドへ混ぜない。
- 50枚ベースは約32～33G系列と約34G系列があるため平均せずCONFLICT保持。
- resetBehaviorは天井非搭載ノーマル機のため多くがNOT_APPLICABLE。ガックン・純電断履歴等の本機固有資料が見つからない項目は推測補完していない。

## conflicts
- `CONFLICT_BASE_GAMES_PER_50_32_TO_33_4_VS_APPROX_34`: HAZUSE約32.1～33.4G、ちょんぼりすた32Gに対し、別当時解析で約34G表記。
- `DATE_DEFINITION_DIFFERENCE_RELEASE_2017_03_13_VS_PIDEA_DELIVERY_2017_03_20_PLUS`: 導入日と納品予定日を別定義保持。

## missingFields
- machine-specific pure-power display/history contract: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific deterministic reset detection: `UNVERIFIED_AFTER_RESEARCH`。
- reset-only public numeric benefit: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の小役全抽選・設定示唆詳細: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/688/
- OFFICIAL_VIDEO / SANKYOFEVERTV: https://www.youtube.com/watch?v=5Bp1I2Gl8x8
- MACHINE_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S1665/
- MACHINE_DB / HAZUSE基本スペック: https://hazuse.com/machine/pachislot/6S1665/genre/201/
- ANALYSIS / パチ7: https://pachiseven.jp/machines/5075/cutout/5
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/34429/
- ANALYSIS / pachislo-data: https://pachislo-data.com/sankyo/32532
- INDUSTRY / PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E6%A5%BD%E3%82%B7%E3%83%BC%E3%82%B5%E3%83%BC%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- SECONDARY_MACHINE / 中一商事: https://www.nakaiti.com/html/sakyo0065.html
