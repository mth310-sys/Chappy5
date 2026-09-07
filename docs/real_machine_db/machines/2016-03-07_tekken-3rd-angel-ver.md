# パチスロ鉄拳3rd エンジェルVer.

machineName: パチスロ鉄拳3rd エンジェルVer.
manufacturer: 山佐（YAMASA）
releaseDate: 2016-03-07
recordNumber: 959
generation: 5号機
systemType: リアルボーナス + AT / CZ
formalModelName: パチスロ鉄拳3エンジェルバージョン／EE
certificationNumber: 5S0996
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSE、パチビー、複数当時解析でホール導入開始日 **2016-03-07** を照合。
- PiDEAの2016-01-29内覧会記事は「納品3/6〜」と記載し、翌3/7導入と整合。
- 型式名「パチスロ鉄拳3エンジェルバージョン／EE」、検定番号「5S0996」はHAZUSEで確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.3% |
| 3 | 99.7% |
| 4 | 102.0% |
| 5 | 105.5% |
| 6 | 110.2% |

- 当時業界記事PiDEAとHAZUSEが一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## initialHitBySetting
| 設定 | 鉄拳CHALLENGE | AT初当たり |
|---:|---:|---:|
| 1 | 1/84.1 | 1/751.6 |
| 2 | 1/84.1 | 1/725.9 |
| 3 | 1/84.1 | 1/681.3 |
| 4 | 1/83.7 | 1/623.0 |
| 5 | 1/82.6 | 1/554.9 |
| 6 | 1/82.0 | 1/483.2 |

- PiDEA発表時点ではボーナスを全設定共通約1/184と記載する別定義/初期情報がある一方、後続解析は約1/84で一致。後者をcanonicalとし、初期記事との差をconflictsに保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_EARLY_INDUSTRY_CONFLICT

## baseGamesPer50
- canonical: **約23G/50枚**。
- スロがち.COMは **23.1G/50枚**、PiDEA当時記事は **23G/50枚**。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## netIncrease
- AT「神鉄拳RUSH」: **約2.4枚/G**。
- ボーナス込み約2.7枚/Gとする解析もあるため、AT単独純増と定義分離。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- リアルボーナス「鉄拳CHALLENGE」: **約85枚**。
- AT「神鉄拳RUSH」: **次回ボーナスまで継続**し、ボーナス後のデビルバトル勝利でAT継続。
- 固定1セットG数型ではなく、ボーナス間継続型。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- ゲーム数天井: **非搭載**。
- 通常時は低確/高確の2状態と、TAGバトル関連抽選に影響するモードA〜Dを持つ。
- CZ「TAGバトル」、上位CZ「オーガチャレンジ」を搭載。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_MULTI_SOURCE_WITH_NUMERIC_MODE_STATE_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **内部モードをRESETして再抽選**。
- **内部状態をRESETして再抽選**。
- 演出モードは **エンジェルモード** から開始するとする解析あり。
- 天井は非搭載のためゲーム数天井リセット概念は非該当。

### carryOverBehavior
- 据え置き時は内部モード・内部状態を引き継ぐものとして、純電源OFF→ON比較資料から支持。
- 演出モードも引き継ぐとする解析あり。

### powerCycleBehavior
- 純電源OFF→ON: **内部モードCARRYOVER / 内部状態CARRYOVER**。
- 演出モードもCARRYOVERとする資料あり。

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ゲーム数天井そのものを搭載しない。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井も非該当。

### modeAfterReset
- 設定変更時、モードA〜Dを再抽選。
- 公開振り分けをnumericResetDataへ保存。
- モードDは最上位で、TAGバトル/AT抽選が強い。

### stateAfterReset
- 設定変更時は全設定共通で **低確75% / 高確25%**。
- 純電断・据え置きでは状態を引き継ぐ。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時に内部モードが再抽選され、設定1でも **モードD 25.0%**、モードC以上合算 **31.3%**。
- 全設定共通で **25%高確スタート**。
- 朝一の高モード/高確を短時間確認するリセット狙いが当時攻略で提案されていた。

### resetPenalties
- 天井非搭載のため、天井進捗消去による不利はない。
- 良モード/高確を据え置きで保持していた場合、設定変更で再抽選されるため状態次第では相対的不利になり得るが、固定の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更時ガックンは当時実戦情報で **「ほぼしない?/判別困難」**、電源OFF→ONでは「しない」と整理されている。
- 4thリールが小さく微ガックン判別が難しいとの当時記述があり、メーカー保証の確定判別にはしない。
- スロがち.COMでは **朝一エンジェルモード以外なら据え置き濃厚** とする解析あり。ただし店舗対策や演出条件を考慮し確定契約には格上げしない。

### numericResetData
設定変更時・モード初期振り分け:
| 設定 | モードA | モードB | モードC | モードD |
|---:|---:|---:|---:|---:|
| 1 | 56.3% | 12.5% | 6.3% | 25.0% |
| 2 | 56.3% | 25.0% | 6.3% | 12.5% |
| 3 | 56.3% | 12.5% | 6.3% | 25.0% |
| 4 | 53.1% | 18.8% | 9.4% | 18.8% |
| 5 | 53.1% | 12.5% | 9.4% | 25.0% |
| 6 | 37.5% | 31.3% | 15.6% | 15.6% |

設定変更時・内部状態振り分け（全設定共通）:
- 低確: **75.0%**
- 高確: **25.0%**

## missingFields
- manufacturer-guaranteed hard reset detection: NONE_CONFIRMED_AFTER_RESEARCH
- pure power-cycle display contract beyond analysis-site description: UNVERIFIED_AFTER_RESEARCH

## conflicts
- PiDEAの2016-01-29内覧会記事は「ボーナス確率 全設定共通1/184」と記載。一方、HAZUSEおよび後続解析は1/84.1前後で一致し、P-WORLDも約85枚リアルボーナス構造を掲載。初期記事の1/184は誤記/別指標の可能性があるが推測で訂正せず `CONFLICT_EARLY_INDUSTRY_BONUS_RATE_1_184_VS_LATER_ANALYSIS_1_84` として保持。
- パチビー/P-WORLDのカテゴリ表記に「天井あり」が残る一方、HAZUSE後続解析、すろぱちくえすと、スロがち、ちょんぼりすた等は **天井非搭載** で一致。canonicalは非搭載とし `CONFLICT_DATABASE_CATEGORY_CEILING_FLAG` を保持。

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロ鉄拳3rdエンジェルVer.
   - https://hazuse.com/machine/pachislot/5S0996/
   - 導入2016-03-07、型式、検定番号、機械割、ボーナス/AT初当たり。
   - reliability: ANALYSIS_HIGH_DATABASE
2. HAZUSE — AT/ART・内部状態/モード
   - https://hazuse.com/machine/pachislot/5S0996/genre/209/
   - 設定変更時の状態再抽選75/25、モード構造。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT
3. PiDEA X — 三木流「鉄拳エンジェルVer」の評価は？
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E9%89%84%E6%8B%B3%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%ABVer%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 2016-01-29当時内覧会、納品3/6〜、機械割、ベース23G、AT初当たり、約85枚。
   - reliability: INDUSTRY_PERIOD
4. グリーンべると — パチスロ鉄拳3rdが進化、エンジェルVer.に
   - https://web-greenbelt.jp/00008400/
   - 2016-02-02、約85枚リアルボーナス、AT純増約2.4枚/G、3月上旬納品予定。
   - reliability: INDUSTRY
5. パチビー — パチスロ鉄拳3rdエンジェルVer.
   - https://www.pachibee.jp/movies/index/12450
   - 導入2016-03-07、AT純増約2.4枚/G。
   - reliability: ANALYSIS_DATABASE
6. P-WORLD — パチスロ鉄拳3rd エンジェルVer.
   - https://www.p-world.co.jp/machine/database/7966
   - 約85枚、AT約2.4枚/G、ゲーム性。
   - reliability: INDUSTRY_DATABASE
7. すろぱちくえすと — リセット恩恵・狙い目
   - https://www.slopachi-quest.com/article/tekken-angel-reset/
   - 設定変更/電源OFF→ON比較、モード再抽選、状態再抽選、モードA〜D初期振り分け、75/25、ガックン実戦情報、天井非搭載。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT
8. スロがち.COM — 鉄拳3rd エンジェルVer.
   - https://slogati.com/tekken-angel/
   - 23.1G/50枚、天井なし、設定変更/電断比較、25%高確、モードC以上31.3%（設定1）、演出モード判別。
   - reliability: ANALYSIS_SECONDARY
9. ちょんぼりすた — 鉄拳3rdエンジェルver
   - https://chonborista.com/slot/yamasa-slot/16561/
   - 2016-03-07、天井非搭載、解析まとめ。
   - reliability: ANALYSIS_HIGH_SECONDARY
10. パチ＆スロ必勝本 — モード移行抽選
   - https://p.hisshobon.jp/machine/2701/1/56810
   - モードA〜D、設定変更をモード移行契機として明記。
   - reliability: ANALYSIS_HIGH_PERIOD

## confidence
- identity/releaseDate: HIGH_MULTI_SOURCE_PERIOD
- formalModelName/certification: ANALYSIS_DATABASE_HIGH
- performanceCore: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- resetSettingChange: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- resetNumericData: ANALYSIS_HIGH_PERIOD_DIRECT
- powerCycle: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- resetDetection: ANALYSIS_PERIOD_NOT_MANUFACTURER_GUARANTEED
