# ニューチバリヨ

machineName: ニューチバリヨ
manufacturer: ネット
releaseDate: 2016-04-18
recordNumber: 976
generation: 5号機
systemType: AT / 枚数管理型擬似ボーナス / 25Φ完全告知
formalModelName: ニューチバリヨ／NE
certificationNumber: 5S1390
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- ネットの2016-03-01公式プレスリリースは、25Φ「ニューチバリヨ」と30Φ「ニューチバリヨ-30」を同時発売し、2016年4月中旬より全国導入予定と発表。
- 鹿児島県公安委員会告示第20号（鹿児島県公報・平成28年2月16日）で、25Φ型式 **ニューチバリヨ／NE**、製造者 **ネット株式会社**、検定番号 **5S1390** を直接確認。30Φの `ニューチバリヨ／ND-30` / 5S1398とは別型式。
- P-WORLDも25Φ「ニューチバリヨ」と30Φ「ニューチバリヨ-30」を別機種エントリとして保持。
- Re.designは25Φ `ニューチバリヨ /NE` を独立掲載し、最短納期2016/04/17、25Φ/30Φ合算販売6,000台と記録。
- パチ7、ちょんぼりすた、pachislo-data等は導入日 **2016-04-18**。一方、HAZUSE/アタリ7系にはシリーズとして2016-04-11表記があり、30Φ版と同様に日付競合を残す。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 98.1% |
| 3 | 99.5% |
| 4 | 101.0% |
| 5 | 103.1% |
| 6 | 105.5% |

- 25Φ個別のRe.design、P-WORLDと、25Φ/30Φ共通解析のちょんぼりすた等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_VARIANT_DIRECT

## initialHitBySetting
### 擬似ボーナス初当たり
| 設定 | 確率 |
|---:|---:|
| 1 | 1/375 |
| 2 | 1/353 |
| 3 | 1/340 |
| 4 | 1/271 |
| 5 | 1/249 |
| 6 | 1/213 |

### 連チャン込みBIG / REG / 合算
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/175 | 1/345 | 1/116 |
| 2 | 1/168 | 1/326 | 1/111 |
| 3 | 1/164 | 1/317 | 1/108 |
| 4 | 1/157 | 1/302 | 1/103 |
| 5 | 1/149 | 1/286 | 1/98 |
| 6 | 1/140 | 1/272 | 1/93 |

- Re.design 25Φ個別表とP-WORLD 25Φ個別ページで一致。合算の小数精密値はRe.designに保持されている。
- BIG/REGは連チャン込み見かけ出現率で、主要初当たりとは定義を分ける。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_VARIANT_DIRECT

## baseGamesPer50
- canonical: **約45.7G/50枚**。
- Re.designの25Φ個別仕様で45.7G/千円を確認。共通解析では約45.7～46G表記。
reliability: INDUSTRY_ANALYSIS_VARIANT_DIRECT

## netIncrease
- 擬似ボーナスAT: **約3.0枚/G**。
- ネット公式PV系説明、P-WORLD 25Φ、Re.design 25Φで照合。
reliability: INDUSTRY_ANALYSIS_HIGH

## basicPayout
- チバリヨビッグボーナス: **約200枚**。
- ビッグボーナス: **約100枚**。
- レギュラーボーナス: **約50枚**。
- P-WORLD 25Φ、Re.design 25Φ、公式PV系説明で一致。
reliability: INDUSTRY_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常A / 通常B / 天国準備 / 引き戻し / チャンス / 天国 / チバリヨ / 超チバリヨの8モード。
- 通常A・B最大天井: **1280G**。
- 天国準備: 最大512G、引き戻し: 最大384G、天国以上: 32G以内の当選が濃厚。
- 超チバリヨモードは32G以内ループ期待度約97%。
- 通常時1280G消化で擬似ボーナス当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_DIRECT_RESET_MODE_NUMBERS_VARIANT_COMMON_ANALYSIS
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時:
  - 天井ゲーム数: **RESET**。
  - 内部モード: **RESELECT**。
- 当時解析は25Φ/30Φ同時リリース機の基本仕様を共通として扱い、設定変更と純電源OFF→ONを明確に分けている。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_VARIANT_COMMON

### carryOverBehavior
- 設定据え置き時の主要朝一契約は **天井進捗・内部モードCARRYOVER**。
- 根拠は設定変更なしの純電源OFF→ON比較表。RAMクリアとは混同しない。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON_VARIANT_COMMON

### powerCycleBehavior
- 純電源OFF→ON:
  - 天井ゲーム数: **CARRYOVER**。
  - 内部モード: **CARRYOVER**。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON_VARIANT_COMMON

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset
- 通常最大天井: **1280G**。
- 設定変更時は天井進捗をリセット。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 再抽選モード固有天井により1280Gより浅く当たる場合はあるが、固定短縮天井とは分離。

### modeAfterReset
- 設定変更時は通常A / 通常B / 天国準備 / 引き戻しへ再抽選。

| 設定 | 通常A | 通常B | 天国準備 | 引き戻し |
|---:|---:|---:|---:|---:|
| 1 | 58.6% | 24.2% | 10.9% | 6.3% |
| 2 | 57.8% | 25.0% | 10.9% | 6.3% |
| 3 | 56.3% | 26.6% | 10.9% | 6.3% |
| 4 | 55.5% | 27.3% | 10.9% | 6.3% |
| 5 | 55.5% | 27.3% | 10.9% | 6.3% |
| 6 | 50.0% | 32.8% | 10.9% | 6.3% |

- 純電断ではモード引継ぎ。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE_VARIANT_COMMON

### stateAfterReset
- 朝一主要内部契約は上記8モード管理。
- モードと独立した高確/低確等の設定変更時状態再抽選は、物差し用の公開マクロ情報として **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時モード再抽選で **天国準備10.9% / 引き戻し6.3%**。
- 設定6は通常A 50.0%、通常B 32.8%。
- リセット後実践値では強い専用ゾーン/明確な初当たり優遇は確認されておらず、モード再抽選そのものと区別する。

### resetPenalties
- 設定変更で前日からの **最大1280G天井進捗と滞在モードを失う**。
- 前日深いハマリや高モードの据え置き狙い価値は設定変更で消失。

### resetDetection
- 25Φ型式 `ニューチバリヨ／NE` 固有の確定ガックン、初期出目、ランプによる変更判別は、型式名・メーカー・設定変更・リセット・朝一・据え置き・電源OFF ON・ガックンへ検索語を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 当時解析にはガックン「なし？」との記載があるが、過去NET筐体からの予測と明記されているため確定仕様へ格上げしない。

### numericResetData
- 設定変更時モード振り分け: 上表。
- 天国準備: **10.9%（全設定）**。
- 引き戻し: **6.3%（全設定）**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-08

1. ネット株式会社プレスリリース（Dream News転載）
   - https://www.dreamnews.jp/press/0000127776
   - 2016-03-01。25Φ「ニューチバリヨ」と30Φ「ニューチバリヨ-30」同時発売、2016年4月中旬全国導入予定。
   - reliability: OFFICIAL_PRESS_RELEASE
2. 鹿児島県公報 平成28年2月16日 第3187号 / 鹿児島県公安委員会告示第20号
   - https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1602/documents/50344_20160215131820-1.pdf
   - 25Φ型式ニューチバリヨ／NE、ネット株式会社、検定番号5S1390。30Φ ND-30 / 5S1398も同じ表に掲載。
   - reliability: OFFICIAL_PUBLIC_RECORD
3. Re.design — ニューチバリヨ /NE
   - https://www.redesign777.tokyo/Spec/SlotView/S2016030118374401?flag=True
   - 25Φ型式、最短納期2016/04/17、設定別初当たり/BIG/REG/合算/機械割、45.7G/千円、純増3.0枚/G、約200/100/50枚。
   - reliability: INDUSTRY_DATABASE
4. P-WORLD — ニューチバリヨ
   - https://www.p-world.co.jp/machine/database/8004
   - 25Φ別機種エントリ、NET、AT、純増3.0枚/G、設定別初当たり/BIG/REG/機械割、約200/100/50枚。
   - reliability: INDUSTRY_DATABASE
5. P-WORLD — ニューチバリヨ-30
   - https://www.p-world.co.jp/machine/database/8005
   - 30Φ別機種エントリの存在確認。
   - reliability: INDUSTRY_DATABASE
6. ちょんぼりすた — ニューチバリヨ
   - https://chonborista.com/slot/net-slot/19241/
   - 25π/30π同時リリースで基本同一、導入2016-04-18、天井、性能、設定変更時モード振り分け、設定変更 vs 電源ON/OFF比較。
   - reliability: ANALYSIS_HIGH
7. pachislo-data — ニューチバリヨ
   - https://pachislo-data.com/net/24384
   - 2016-04-18、25π/30π同時リリース、朝一リセット解析、性能照合。
   - reliability: ANALYSIS_SINGLE
8. 期待値見える化 — ニューチバリヨ 朝一
   - https://slotjin.com/zone/newchibariyo/
   - 設定変更後: 天井RESET/内部モードRESET、電源OFF→ON: 天井/モード引継ぎ。ガックンは予測表記のため確定値に採用せず。
   - reliability: ANALYSIS_SINGLE
9. パチ7 — ニューチバリヨ
   - https://pachiseven.jp/machines/4791/cutout/2
   - 導入2016-04-18、NET、基本ゲーム性照合。
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
10. pachinko's blog — ネット「ニューチバリヨ」の筐体＆情報
   - https://pachinko.hatenablog.jp/entry/2016/04/new-chibariyo
   - 25Φ型式ニューチバリヨ/NE、30Φ型式ニューチバリヨ/ND-30を別掲。
   - reliability: RETROSPECTIVE_DATABASE

## missingFields
- 25Φ固有の設定変更時ガックン/初期出目/ランプ確定契約: NONE_CONFIRMED_AFTER_RESEARCH。
- モードと独立する設定変更時高確/低確等の状態再抽選: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- releaseDate: canonical **2016-04-18**。公式は「4月中旬」、Re.design最短納期4/17。HAZUSE/アタリ7系にはシリーズ側で4/11表記があるため `CONFLICT_RELEASE_DATE_2016_04_18_MULTI_SOURCE_VS_2016_04_11_PERIOD_DATABASE` として保持。
- ガックン: 「なし？」資料は過去NET筐体からの予測と明記されるため、確定挙動には採用しない。

## notes
- No.975 `ニューチバリヨ-30`（30Φ）と性能コア/公開マクロresetBehaviorは基本共通だが、25Φ/30Φは公安委員会公報上も別型式・別検定番号。variant混同防止のため独立レコード化。
- 30Φ版の型式/検定番号を25Φへ流用せず、公的資料で `ニューチバリヨ／NE` / `5S1390` を直接固定した。
