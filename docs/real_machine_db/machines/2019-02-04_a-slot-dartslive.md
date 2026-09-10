# No.1263 A-SLOT DARTSLIVE

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: A-SLOT DARTSLIVE
- manufacturer: サミー（製造元: 株式会社銀座）
- releaseDateCanonical: 2019-02-04
- generation: 5.9号機
- systemType: A+RT / ボーナス+RT
- formalModelNameCanonical: `パチスロダーツライブ/ZA`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.7% |
| 5 | 103.0% |
| 6 | 106.0% |

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/299.3 | 1/392.4 | 1/169.8 |
| 2 | 1/296.5 | 1/364.1 | 1/163.4 |
| 5 | 1/287.4 | 1/316.6 | 1/150.7 |
| 6 | 1/277.7 | 1/280.1 | 1/139.4 |

- 複数解析資料で一致。1/299.2、1/277.6等の表記は小数丸め差として扱い数値CONFLICTにはしない。

### baseGamesPer50
- canonical: **約34.53～37.13G/50枚（設定差を含むレンジ）**。
- 複数概要資料の **約34.5G/50枚** は設定1側/代表値の丸め表記とみなし、定義差として併記する。

### netIncrease / basicPayout
- RT純増: **約0.003枚/G（現状維持程度）**。
- BIG: **300枚**。
- REG: **約100枚**。
- ボーナス終了後は5GのCZ「カウントアップチャレンジ」へ移行。
- RT: **25G / 50G / 次回ボーナスまで**。

## modeSpecificMinimumData
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。
- ゾーン: `NOT_APPLICABLE`。
- CZ「カウントアップチャレンジ」はボーナス後5G固定。通常時のゲーム数解除CZではない。
- RT突入率（比較補助値）: BIG後 設定1 55.1% / 設定2 52.2% / 設定5 49.2% / 設定6 46.0%、REG後 全設定20.3%。RT振り分けは突入時25G 66.0% / 50G 33.0% / 次回まで1.0%。

## resetBehavior
### settingChangeBehavior
- 通常ゲーム数天井は非搭載のため天井カウンタ処理は `NOT_APPLICABLE`。
- 設定変更時にRT/CZ状態、ボーナス内部成立状態、初期出目をどう扱うかを本機固有に明記した直接資料は、検索語・資料系統を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを純電源OFF→ONと分離して、RT/CZ状態・ボーナス内部成立状態・初期出目の保持を明記した本機固有資料は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ONのみの場合のRT/CZ状態、ボーナス内部成立状態、初期出目について、本機固有の直接資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井/ゾーン非搭載のため `NOT_APPLICABLE`。
- RT/CZ残りGの設定変更/電断処理は別項目として `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- `NOT_APPLICABLE`。通常時天井非搭載、短縮天井なし。

### modeAfterReset
- 朝一専用内部モード、設定変更時専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更/据え置き/純電断時のRT/CZ・ボーナス成立状態を本機固有に比較できる契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機A+RTとして、本DBで朝一客行動へ直結する有利区間の設定変更/電断契約は `NOT_APPLICABLE_TO_GAMEPLAY / NO_AT_ART_ADVANTAGEOUS_SECTION_BEHAVIOR_TO_MODEL`。
- 世代一般論から内部処理を推測転記しない。

### resetBenefits
- ちょんぼりすたは「朝イチは特に恩恵などは存在しない」と明記。
- 短縮天井、朝一当選率上昇、専用RT優遇などの公開恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時固有の出玉上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ちょんぼりすたは「サミーなのでリールガックンは有効の可能性が高い」とするが、機種固有の確定契約ではない。
- モゲスロも前日高設定状況で「出目が変わってなくガックンしない場合」を立ち回り材料として挙げる。
- よって本DBでは `POSSIBLE_GAKKUN_REFERENCE_ONLY_NONDETERMINISTIC`。設定変更確定条件・発生率・対策時挙動は固定しない。

### numericResetData
- resetShortenedCeiling: `NOT_APPLICABLE`
- resetMorningHitRate: `PUBLIC_VALUE_NOT_FOUND / NO_SPECIFIC_BENEFIT_CONFIRMED`
- resetModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDateDecision
- サミー公式は「2019年2月上旬より全国稼働予定」。K-Navi、一撃、ちょんぼりすた、当時2/4新台一覧が **2019-02-04** で一致するためcanonical固定。
- `スロット解析情報~すろかい~`本文に2019/02/13表記がある一方、同ページ冒頭は「2019年2月4日導入開始」。内部矛盾を含むため2/13はcanonicalに採用しない。

## formalModel / certification
- 当時解析ページで **`パチスロダーツライブ/ZA`** を確認し、formalModelNameCanonicalとして保存。
- サミー公式により製造元は株式会社銀座。
- 中古実機DBは大阪府公安委員会検定通過状況を2018-04-17付としている。
- 検定番号そのものは、機種名/型式/銀座/ZA/検定通過日/公安委員会等へ検索を拡張したが高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

## missingFields
- certificationNumber。
- 設定変更/据え置き/純電断別のRT/CZ・ボーナス成立状態・初期出目の本機固有契約。
- ガックンの機種固有発生条件/発生率。

## conflicts
- `RELEASE_SOURCE_INTERNAL_CONFLICT_2019_02_04_VS_2019_02_13` — 同一解析ページ内で冒頭2/4と基本情報2/13が併存。多数資料一致の2/4をcanonical。
- 性能コアは丸め差以外の主要数値CONFLICTなし。

## sources
取得日: 2026-09-11
1. Sammy公式 発売告知 — https://www.sammy.co.jp/japanese/news/2018/1173.html — 製造元/銀座、2019年2月上旬全国稼働予定 — reliability: `OFFICIAL`
2. Amusement Japan — https://amusement-japan.co.jp/article/detail/10000947/ — A+RT構造、BIG/REG後CZ、RT25G/50G/次回まで、2月上旬導入予定 — reliability: `INDUSTRY`
3. K-Navi — https://p-kn.com/slot/3164/ — 2019-02-04、設定別合算、BIG300枚/REG約100枚、RT構造 — reliability: `ANALYSIS_HIGH`
4. 一撃 機種概要 — https://1geki.jp/slot/s_dartslive/ — 設定別BIG/REG/合算/機械割、2019-02-04、BIG300枚/REG約100枚 — reliability: `ANALYSIS_HIGH`
5. 一撃 カウントアップチャレンジ — https://1geki.jp/slot/s_dartslive/62/ — BIG/REG後RT突入率、25/50/次回まで振り分け — reliability: `ANALYSIS_HIGH`
6. 一撃 小役/ベース — https://1geki.jp/slot/s_dartslive/4/ — 50枚あたり消化Gの解析系統 — reliability: `ANALYSIS_HIGH`
7. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/173/a.php — 5.9号機、BIG300枚/REG約100枚、製造元/銀座 — reliability: `ANALYSIS_HIGH`
8. パチマガスロマガ CZ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/173/03-1.php — RT純増約0.003枚/G、CZ5G、RT構造 — reliability: `ANALYSIS_HIGH`
9. すろぱちくえすと — https://www.slopachi-quest.com/article/dartslive-settei/ — 2019-02-04、5.9号機A+RT、約34.5G/50枚、現状維持程度、設定差 — reliability: `ANALYSIS_SINGLE`
10. スロット解析.com — https://slotkaiseki.com/dartslive_ichiran/ — 2019-02-04、設定別BIG/REG/合算/機械割、RT約0.003枚/G、約34.5G/50枚 — reliability: `ANALYSIS_SINGLE`
11. ちょんぼりすた — https://chonborista.com/slot/sammy-slot/75538/ — 2019-02-04、設定別性能、天井非搭載、朝一恩恵なし、ガックン可能性言及 — reliability: `ANALYSIS_HIGH`
12. モゲスロ — https://moge-site.com/archives/19479 — 2019-02-04、天井非搭載、ガックン/出目を据え置き推測材料として言及 — reliability: `ANALYSIS_SINGLE`
13. スロット解析情報~すろかい~ — https://slotkaiseki.hatenablog.com/entry/dartslive — 型式 `パチスロダーツライブ/ZA`、約34.53～37.13G、設定別性能、導入日表記の内部矛盾 — reliability: `ANALYSIS_SINGLE`
14. A-SLOT中古実機DB — https://www.a-slot.com/SHOP/ginza200.html — 銀座、2018-04-17大阪府公安委員会検定通過状況 — reliability: `SECONDARY_MACHINE_DB`
15. P-WORLD — https://www.p-world.co.jp/machine/database/8834 — サミー、RT/CZ/リアルボーナス、BIG300枚/REG約100枚、RT現状維持 — reliability: `MACHINE_DB_CROSSCHECK`
16. 2019-02-04当時新台一覧 — https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/01/27/223203 — 同日パチスロ3機種の群監査 — reliability: `CONTEMPORARY_SECONDARY`
17. 2019年導入カレンダー — https://moge-site.com/new-slot2019 — 1/21の次の掲載群が2/4、同日3機種 — reliability: `SECONDARY_CALENDAR_CROSSCHECK`

## confidence
- releaseDateCanonical: `OFFICIAL_WINDOW + ANALYSIS_HIGH_CROSSCHECKED`
- formalModelName: `ANALYSIS_SINGLE`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- performanceCore: `ANALYSIS_HIGH_CROSSCHECKED + INDUSTRY_CONTEXT`
- resetBenefits/ceiling: `ANALYSIS_HIGH + ANALYSIS_SINGLE_CROSSCHECKED`
- resetDetection: `ANALYSIS_REFERENCE_ONLY`
- resetBehaviorOther: `PARTIAL_RESEARCH_EXHAUSTED`
