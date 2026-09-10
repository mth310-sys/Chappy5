# No.1265 ニューパルサーDX ～チェリーバージョン～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ニューパルサーDX ～チェリーバージョン～
- manufacturer: 山佐
- releaseDateCanonical: 2019-02-04
- generation: 5.9号機
- systemType: ノーマル / Aタイプ / 完全告知
- formalModelNameCanonical: `ニューパルサーDX2／CC`
- certificationNumber: `7S1206`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.2% |
| 3 | 99.8% |
| 4 | 102.1% |
| 5 | 105.3% |
| 6 | 108.5% |

- HAZUSEとAmusement Japanで設定1/6端点が一致。設定別全値はHAZUSE、すろぱちくえすと等で照合。

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/284.94 | 1/404.54 | 1/167.18 |
| 2 | 1/283.71 | 1/385.51 | 1/163.43 |
| 3 | 1/277.69 | 1/372.36 | 1/159.07 |
| 4 | 1/268.59 | 1/344.93 | 1/151.00 |
| 5 | 1/260.06 | 1/312.08 | 1/141.85 |
| 6 | 1/251.10 | 1/287.44 | 1/134.02 |

- HAZUSE掲載値をcanonical。業界記事の合算端点約1/167.1〜約1/134.0と整合。

### baseGamesPer50
| 設定 | 50枚あたり |
|---:|---:|
| 1 | 35.31G |
| 2 | 35.69G |
| 3 | 36.00G |
| 4 | 36.50G |
| 5 | 36.87G |
| 6 | 37.65G |

- パチマガスロマガとHAZUSEで一致。一撃も約35.3〜37.6G/50枚で整合。

### netIncrease / basicPayout
- RT/ART/AT: **非搭載**。
- netIncrease: `NOT_APPLICABLE`。
- BIG: **312枚**。
- REG: **約104枚**。
- 山佐系公式機種紹介は5号機Aタイプ。日刊スポーツ・Amusement Japan・パチマガスロマガ・P-WORLD・一撃でボーナス獲得枚数を照合。

## modeSpecificMinimumData
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。
- ゾーン: `NOT_APPLICABLE`。
- ボーナス当選時の約2回に1回がチェリー重複となる、チェリー特化型の完全告知ノーマル。
- AT/ART/RTの状態管理はない。

## resetBehavior
### settingChangeBehavior
- 通常ゲーム数天井・AT/ART/RTモードが存在しないため、それらのリセット処理は `NOT_APPLICABLE`。
- 設定変更時の初期リール出目、内部ボーナス成立状態、告知ランプ状態を本機固有に明記する直接資料は、機種名表記揺れ、型式 `ニューパルサーDX2／CC`、山佐、設定変更、リセット、朝一、ガックンを切り替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時について、純電源OFF→ONと明確に分離した本機固有の初期出目・内部成立・告知状態保持契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の初期出目・内部ボーナス成立・告知状態を本機固有に明記した直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井/ゾーン非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- `NOT_APPLICABLE`。天井非搭載のため短縮天井なし。

### modeAfterReset
- AT/ARTの通常モード・朝一専用モードは `NOT_APPLICABLE_TO_GAMEPLAY`。
- 設定変更時専用のボーナス当選率や朝一モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART/RT内部状態は `NOT_APPLICABLE`。
- 告知ランプ・内部ボーナス成立等の本機固有設定変更/据え置き/純電断契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機ノーマルでAT/ARTを搭載せず、本DBの朝一客行動へ直結する有利区間挙動は `NOT_APPLICABLE_TO_GAMEPLAY / NO_AT_ART_ADVANTAGEOUS_SECTION_BEHAVIOR_TO_MODEL`。
- 世代一般論から内部処理を補完しない。

### resetBenefits
- ちょんぼりすたは「朝イチリセット恩恵は存在しない可能性が高い」と記載。
- 天井短縮、朝一専用CZ/AT、専用モード等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン発生条件・発生率・据え置き時の誤発生率を固定できる資料は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 山佐他機種やシリーズ一般論からガックン仕様を転記しない。
- 天井挙動による変更判別は `NOT_APPLICABLE`。

### numericResetData
- resetShortenedCeiling: `NOT_APPLICABLE`
- resetMorningHitRate: `PUBLIC_VALUE_NOT_FOUND / NO_SPECIFIC_BENEFIT_CONFIRMED`
- resetModeDistribution: `NOT_APPLICABLE_TO_GAMEPLAY / PUBLIC_VALUE_NOT_FOUND`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDateDecision
- 山佐ネクスト公式機種ページは稼働時期を2019年2月と掲載。
- HAZUSE、ちょんぼりすた、すろぱちくえすと、当時2/4新台一覧が2019-02-04で一致するため、ホール導入日canonicalを **2019-02-04** とする。
- 日刊スポーツ、Amusement Japanは2019年2月上旬導入予定とするため整合。

## formalModel / certification
- HAZUSE機種DBで型式名 **`ニューパルサーDX2／CC`**、検定番号 **`7S1206`** を確認。

## missingFields
- 設定変更/据え置き/純電断別の初期出目・内部ボーナス成立・告知ランプ状態の本機固有契約。
- ガックンの本機固有発生条件/発生率。

## conflicts
- 性能コアのcanonical値に重大なCONFLICTなし。
- 後年の5号機クロニクルに「2019年4月」「BIG最大259枚」とする記載があるが、山佐公式2019年2月、当時業界記事2019年2月上旬、複数当時解析2019-02-04、BB312枚が一致するため、当該後年資料は本機データの誤記/混同疑いとしてcanonicalへ採用しない。`CONFLICT_SECONDARY_RETROSPECTIVE_RELEASE_2019_04_AND_BIG259_VS_CONTEMPORARY_2019_02_04_AND_BIG312`。

## sources
取得日: 2026-09-11
1. 山佐ネクスト公式 機種情報 — https://yamasa-next.co.jp/model_npd2/ — 5号機、Aタイプ、2019年2月稼働 — reliability: `OFFICIAL`
2. 日刊スポーツ（娯楽産業） — https://www.nikkansports.com/amusement/pachislot/news/201812100000411.html — 2019年2月上旬ホールデビュー予定、設定6合算1/134、BB312枚、RB約104枚 — reliability: `INDUSTRY`
3. Amusement Japan — https://amusement-japan.co.jp/article/detail/10000951/ — 合算約1/167.1〜約1/134.0、出玉率96.9〜108.5%、BB312枚/RB約104枚、2月上旬予定 — reliability: `INDUSTRY`
4. HAZUSE — https://hazuse.com/machine/pachislot/7S1206/ — 型式 `ニューパルサーDX2／CC`、検定7S1206、2019-02-04、設定別BIG/REG/合算、機械割、ベース、天井非搭載 — reliability: `ANALYSIS_HIGH_MACHINE_DB`
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/230/a.php — 5.9号機ノーマル、BIG312枚、REG約104枚 — reliability: `ANALYSIS_HIGH`
6. パチマガスロマガ 小役/ベース — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/230/c-1.php — 設定別50枚ベース35.31〜37.65G — reliability: `ANALYSIS_HIGH`
7. すろぱちくえすと — https://www.slopachi-quest.com/article/newpluser-dx-cherry-settei/ — 2019-02-04、約35G/50枚、設定別性能、BB312枚/RB約104枚 — reliability: `ANALYSIS_HIGH`
8. ちょんぼりすた — https://chonborista.com/slot/yamasa-slot/75476/ — 2019-02-04、天井非搭載、朝一リセット恩恵なしの可能性 — reliability: `ANALYSIS_HIGH`
9. 一撃 — https://1geki.jp/slot/s_newpul_c/4/ — 設定別50枚ベース約35.3〜37.6G — reliability: `ANALYSIS_HIGH`
10. P-WORLD — https://www.p-world.co.jp/machine/database/8839 — ノーマル/完全告知、BIG312枚、REG約104枚、AT/ART非搭載 — reliability: `MACHINE_DB_CROSSCHECK`
11. 当時2/4新台一覧 — https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/01/27/223203 — 2019-02-04群をA-SLOT DARTSLIVE / ニューパルサーDXチェリーバージョン / ミリオンルーレットの3機と掲載 — reliability: `CONTEMPORARY_SECONDARY`
12. 5号機クロニクル山佐一覧 — https://5goki.com/yamasa — 2019年4月/BIG259枚という競合記載あり。 contemporaneous sourcesと不一致のためconflict referenceのみ — reliability: `RETROSPECTIVE_SECONDARY_CONFLICT`

## confidence
- releaseDateCanonical: `OFFICIAL_MONTH + INDUSTRY + ANALYSIS_HIGH_CROSSCHECKED`
- formalModelName/certificationNumber: `ANALYSIS_HIGH_MACHINE_DB`
- performanceCore: `INDUSTRY + ANALYSIS_HIGH_CROSSCHECKED`
- baseGamesPer50: `ANALYSIS_HIGH_CROSSCHECKED`
- resetBenefits/ceiling: `ANALYSIS_HIGH`
- resetDetection: `PARTIAL_RESEARCH_EXHAUSTED`
- resetBehaviorOther: `PARTIAL_RESEARCH_EXHAUSTED`
