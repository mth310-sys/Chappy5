# ニューチバリヨ-30

machineName: ニューチバリヨ-30
manufacturer: ネット
releaseDate: 2016-04-18
recordNumber: 975
generation: 5号機
systemType: AT / 枚数管理型擬似ボーナス / 30Φ完全告知
formalModelName: ニューチバリヨ／ND-30
certificationNumber: 5S1398
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- ネットの2016-03-01公式プレスリリースは、25Φ「ニューチバリヨ」と30Φ「ニューチバリヨ-30」を同時発売し、2016年4月中旬から全国導入予定と発表。
- パチ7、ちょんぼりすた、pachislo-data等は全国導入日を **2016-04-18** としており、本レコードではこれをcanonicalとする。
- 一方、HAZUSEとアタリ7は **2016-04-11** と記録するため、平均・黙殺せず導入日CONFLICTとして保持する。
- HAZUSEで30Φ型式 **ニューチバリヨ／ND-30**、検定番号 **5S1398** を確認。
- 25Φ「ニューチバリヨ」は公式発表・P-WORLDで別機種エントリが存在するため、本レコードへ型式を混同せず、次QAで別variantとして処理する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 98.1% |
| 3 | 99.5% |
| 4 | 101.0% |
| 5 | 103.1% |
| 6 | 105.5% |

- HAZUSE、ちょんぼりすた、スロパチクエスト等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

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

- HAZUSE、ちょんぼりすた、スロパチクエスト等で一致。
- BIG/REGは連チャン込みの見かけ出現率で、主要初当たりとは定義を分けて保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約45.7G/50枚**。
- パチ7、HAZUSE、複数解析資料で一致。約46G表記は丸め値。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 擬似ボーナスAT: **約3.0枚/G**。
- P-WORLD、パチ7、HAZUSE等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- チバリヨビッグボーナス: **約200枚**。
- ビッグボーナス: **約100枚**。
- レギュラーボーナス: **約50枚**。
- 一部解析に約210/90/45枚の実戦寄り表記があるため、物差し値はP-WORLD・HAZUSE・パチ7の約200/100/50枚系列をcanonicalとし、細かな差は定義差候補として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常A / 通常B / 天国準備 / 引き戻し / チャンス / 天国 / チバリヨ / 超チバリヨの8モード。
- 通常A・B最大天井: **1280G**。
- 天国準備: 最大512G、引き戻し: 最大384G、天国以上: 32G以内の当選が濃厚。
- 超チバリヨは32G以内ループ期待度約97%。
- 通常時1280G消化で擬似ボーナス当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_DIRECT_RESET_MODE_NUMBERS
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時:
  - 天井ゲーム数: **RESET**。
  - 内部モード: **RESELECT**。
- 当時解析の朝一比較表で設定変更と電源ON/OFFが明確に分けられている。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 設定据え置きそのものを独立表記した資料は限定的だが、設定変更なしの電源ON/OFFでは天井・モードを引き継ぐことを当時解析表で直接確認。
- ホール据え置き時の主要朝一契約としては **天井進捗・モードCARRYOVER** と扱う。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### powerCycleBehavior
- 純電源OFF→ON:
  - 天井ゲーム数: **CARRYOVER**。
  - 内部モード: **CARRYOVER**。
- 設定変更時との比較表で直接確認。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset
- 通常最大天井: **1280G**。
- 設定変更時は天井進捗をリセット。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更時は後述のモード再抽選により、通常A/B以外なら1280Gより浅いモード天井が選ばれる可能性がある。これは「固定短縮天井」とは分離する。

### modeAfterReset
- 設定変更時は通常A / 通常B / 天国準備 / 引き戻しへ再抽選。
- 設定変更時モード振り分け:

| 設定 | 通常A | 通常B | 天国準備 | 引き戻し |
|---:|---:|---:|---:|---:|
| 1 | 58.6% | 24.2% | 10.9% | 6.3% |
| 2 | 57.8% | 25.0% | 10.9% | 6.3% |
| 3 | 56.3% | 26.6% | 10.9% | 6.3% |
| 4 | 55.5% | 27.3% | 10.9% | 6.3% |
| 5 | 55.5% | 27.3% | 10.9% | 6.3% |
| 6 | 50.0% | 32.8% | 10.9% | 6.3% |

- 純電断ではモード引継ぎ。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### stateAfterReset
- 本機の朝一主要内部契約は上記8モード管理として公開されている。
- モードと独立した「高確/低確」等の設定変更時状態再抽選は、物差しに必要な公開マクロ情報として **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時はモード再抽選により、**天国準備10.9% / 引き戻し6.3%**で開始。
- 設定6は通常A比率が50.0%まで下がり、通常Bが32.8%。
- 固定短縮天井ではないが、朝一モード再抽選により浅いゲーム数での初当たり期待が発生する。

### resetPenalties
- 設定変更で前日からの **最大1280G天井進捗と滞在モードを失う**。
- 前日深いハマリや高モードを据え置き狙いする価値は設定変更で消失。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶初期表示だけで設定変更を確定できる直接契約は、`ニューチバリヨ / ND-30 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン` 等へ検索語を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一の当選ゲーム数やモード挙動は推測材料になり得るが、確定判別とはしない。

### numericResetData
- 設定変更時モード振り分け: 上表。
- 設定変更時の天国準備: **10.9%（全設定）**。
- 設定変更時の引き戻し: **6.3%（全設定）**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-08

1. ネット株式会社プレスリリース（Dream News転載）— ニューチバリヨ / ニューチバリヨ-30発売決定
   - https://www.dreamnews.jp/press/0000127776
   - 2016-03-01、25Φ/30Φ同時発売、2016年4月中旬全国導入予定
   - reliability: OFFICIAL_PRESS_RELEASE
2. HAZUSE — ニューチバリヨ-30
   - https://hazuse.com/machine/pachislot/5S1398/
   - 型式ニューチバリヨ／ND-30、検定5S1398、メーカー、機械割、初当たり、ボーナス、天井、モード解析。導入日は4/11表記
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE / RELEASE_DATE_CONFLICT
3. パチ7 — ニューチバリヨ
   - https://pachiseven.jp/machines/4791/cutout/2
   - 導入2016-04-18、NET、AT純増3.0枚/G、擬似ボーナス仕様
   - https://pachiseven.jp/machines/4791/cutout/70
   - 45.7G/50枚
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
4. ちょんぼりすた — ニューチバリヨ
   - https://chonborista.com/slot/net-slot/19241/
   - 導入2016-04-18、設定別初当たり/機械割、天井、朝一の設定変更 vs 電源ON/OFF比較、設定変更時モード振り分け
   - reliability: ANALYSIS_HIGH
5. P-WORLD — ニューチバリヨ-30
   - https://www.p-world.co.jp/machine/database/8005
   - 30Φ別機種エントリ、NET、5号機AT、純増3.0枚/G、約200/100/50枚
   - reliability: INDUSTRY_DATABASE
6. P-WORLD — ニューチバリヨ
   - https://www.p-world.co.jp/machine/database/8004
   - 25Φ別機種エントリの存在確認
   - reliability: INDUSTRY_DATABASE
7. スロパチクエスト — ニューチバリヨ解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/newchibariyo/
   - 初当たり、機械割、ベース、純増、天井の照合
   - reliability: ANALYSIS_HIGH
8. pachislo-data — ニューチバリヨ
   - https://pachislo-data.com/net/24384
   - 2016-04-18、25π/30π同時リリース、天井・仕様の照合
   - reliability: ANALYSIS_SINGLE
9. アタリ7 — ニューチバリヨ
   - https://www.atari7.com/slot/date1458185784.php
   - 導入日2016-04-11表記、初当たり/機械割照合
   - reliability: ANALYSIS_SINGLE / RELEASE_DATE_CONFLICT_SUPPORT

## missingFields
- 25Φ「ニューチバリヨ」の正式型式・検定番号: 本レコード対象外。別variantとして次回確認。
- 本機固有の確定的ガックン/初期出目/ランプによる変更判別: NONE_CONFIRMED_AFTER_RESEARCH
- モード以外の独立した設定変更時内部状態契約: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `CONFLICT_RELEASE_DATE_2016_04_18_MULTI_SOURCE_VS_2016_04_11_HAZUSE_ATARI7`
- canonicalはパチ7・ちょんぼりすた・pachislo-data等の2016-04-18。HAZUSE/アタリ7の4/11表記を削除せず保持。
- 擬似ボーナス獲得枚数に約200/100/50枚と約210/90/45枚の表記差があるが、これは公称目安と実戦/継続G数由来の定義差候補として平均しない。

## notes
- 公式プレスが25Φ/30Φ同時発売を明記し、P-WORLDも別エントリを持つため、30Φ型式5S1398を25Φへ流用しない。
- 実機完全再現用の全モード移行表・全ゲーム数振り分け・全小役解除率は収録範囲外。
