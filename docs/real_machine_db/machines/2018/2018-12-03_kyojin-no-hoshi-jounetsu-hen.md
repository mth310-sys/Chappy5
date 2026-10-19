# No.1249 パチスロ巨人の星～情熱編～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL`
- machineName: パチスロ巨人の星～情熱編～
- manufacturer: サンセイR&D
- releaseDateCanonical: 2018-12-03
- generation: 5.9号機
- systemType: A+ART / セット継続型ART
- formalModelNameCanonical: `パチスロ巨人の星情熱編/S3`
- formalModelNameVariant: `パチスロ 巨人の星/S3`
- certificationNumber: `8S0001`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、ちょんぼりすた、すろぱちくえすと、スロパチネットで2018-12-03導入が一致。
- 日刊スポーツ2018-11-30付導入カレンダーでも12月3日パチスロ欄に本機を掲載。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED_WITH_CONTEMPORARY_INDUSTRY_CALENDAR`。

## identificationEvidence
- HAZUSEのmachine_codeが `8S0001` で、本機ページとして識別されているため検定番号として採用。
- スロパチネットと中古実機DBは型式 `パチスロ巨人の星情熱編/S3` を掲載。
- 一方、当時筐体情報資料には `パチスロ 巨人の星/S3` 表記もあり、型式表記差としてCONFLICT保持。
- confidence: `ANALYSIS_HIGH_MACHINE_DATABASE_WITH_MODEL_NAME_VARIANT_CONFLICT`。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.59% |
| 2 | 99.05% |
| 3 | 100.26% |
| 4 | 101.65% |
| 5 | 103.01% |
| 6 | 105.02% |

- HAZUSE精密値をcanonical採用。
- ちょんぼりすた/すろぱちくえすとの97.6/99.1/100.2/101.7/103.0/105.0%は丸め差として整合。
- 2-9伝説は設定3を100.3%表記で、これも丸め差範囲。

### initialHitBySetting
#### ボーナス
| 設定 | プレミアムBONUS | めちゃバレBONUS | BIG | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/16384.00 | 1/5461.33 | 1/442.81 | 1/399.61 |
| 2 | 1/16384.00 | 1/3120.76 | 1/442.81 | 1/378.82 |
| 3 | 1/16384.00 | 1/2114.06 | 1/442.81 | 1/358.12 |
| 4 | 1/16384.00 | 1/1598.44 | 1/442.81 | 1/339.56 |
| 5 | 1/16384.00 | 1/1285.02 | 1/442.81 | 1/322.84 |
| 6 | 1/16384.00 | 1/978.15 | 1/442.81 | 1/299.25 |

#### ART初当たり
- 全設定共通: **1/455.42（約1/455.4）**。
- HAZUSEおよび複数解析で設定1欄に1/455.4を掲載し、他設定欄は共通扱い。設定差があるという資料は確認できない。

### baseGamesPer50
- **約35G/50枚**。
- ちょんぼりすた、2-9伝説、すろかいで一致。

### netIncrease
- ART純増: **約2.0枚/G（ボーナス込み）**。

### basicPayout
- BIG: **約154枚**。
- プレミアムBONUS: **約252枚**。
- めちゃバレBONUS: **約252枚**。
- ART「コンダラッシュ」: **1セット30G**、初回は30G延長で実質60G。
- CZ「コンダラチャンス」: **15G / ART期待度約40%**。

### ceiling
- **天井非搭載**。

## modeSpecificMinimumData
- 通常時は低確/高確の内部状態が存在し、CZおよびART直撃抽選に影響。
- BIG終了後は高確へ移行し、さらに80G間はリプレイ/押し順ベル成立時にCZ・ARTの特殊抽選を行う。
- ARTは情熱メーターを用いたセット継続型で、上位状態として大リーグモード/超大リーグモードを搭載。
- 5.9号機A+ARTとして有利区間概念は世代上該当するが、本機固有の設定変更/純電断処理は直接資料で固定できない。

## resetBehavior
### settingChangeBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすた本機専用ページは「朝一リセット恩恵」で設定変更時の内部状態・ステージをともに **調査中** と記載。
- 機種名、型式 `パチスロ巨人の星情熱編/S3`、`パチスロ 巨人の星/S3`、サンセイR&D、設定変更、リセット、朝一、据え置き、電源OFF/ON、天井、モード、ガックン、有利区間の語を組み替え、HAZUSE、当時解析、業界記事、中古実機DB、後年資料まで横断したが、設定変更時の内部状態・ART・有利区間を直接固定する本機固有資料は確認できなかった。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 据え置きを純電源OFF→ONと独立条件として、低確/高確、ART、前兆、BIG後80G特殊状態、有利区間等の引継ぎ契約を直接示す本機固有資料を固定できず。

### powerCycleBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたでは電源OFF→ON時の内部状態・ステージとも **調査中**。
- 純電断時のART/前兆/内部状態/有利区間引継ぎを直接固定する別系統資料も確認できなかった。

### gameCounterReset
- `NOT_APPLICABLE_NO_CONVENTIONAL_CEILING_COUNTER`。
- 通常ゲーム数天井は非搭載。
- BIG後80G特殊抽選残G数やART中残状態の設定変更/電断時処理は確定資料なし。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- リセット時の短縮天井は存在を確認できない。

### modeAfterReset
- `NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_INTERNAL_STATE`。
- 朝一専用の規定G数モードや短縮天井モードは確認なし。
- 低確/高確の設定変更時再抽選有無は未確認。

### stateAfterReset
- `UNVERIFIED_AFTER_RESEARCH`。
- 通常の低確/高確、座禅モード等の前兆状態、BIG後高確および80G特殊抽選状態が設定変更/据え置き/純電断でどう処理されるか固定できず。

### advantageousSectionReset
- `UNVERIFIED_AFTER_RESEARCH_MACHINE_SPECIFIC_RESET_CONTRACT`。
- 5.9号機A+ARTのため有利区間概念自体は該当するが、本機固有の設定変更/据え置き/電源OFF→ON別処理を一般論から補完しない。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更確定時のみ適用される朝一CZ/ART優遇、短縮天井、専用モード等の公開恩恵は確認できず。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン条件/発生率、初期出目、有利区間ランプを用いた設定変更判別契約は確認できず。
- めちゃバレBONUS中キャラや共通ベルは設定推測要素だが、設定変更/据え置き判別とは別扱い。

### numericResetData
- conventionalCeiling: **NONE**
- resetCeilingShortening: **N/A**
- resetSpecificModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetSpecificMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSectionReset: **UNVERIFIED_MACHINE_SPECIFIC_CONTRACT**

## conflictsAndQualityNotes
- 型式名は `パチスロ巨人の星情熱編/S3` と `パチスロ 巨人の星/S3` の資料差をCONFLICTとして保持。前者を複数実機DB一致のcanonicalとする。
- 機械割は精密値と小数1桁丸め値の差でありCONFLICT扱いしない。
- 一部解析で設定2のめちゃバレBONUSを1/3120、HAZUSE精密値を1/3120.76とするが丸め整合。
- ART初当たり1/455.4は全設定共通として扱われる資料構造だが、設定別個別行が省略されているため、将来一次解析が見つかった場合は再確認対象。
- 5.9号機一般規則や他機種のresetBehaviorから本機固有契約を推定転記しない。

## missingFields
- 設定変更時の低確/高確・前兆・ART・BIG後80G特殊状態の確定処理。
- 据え置き時の内部状態契約。
- 純電源OFF→ON時の内部状態契約。
- 設定変更/純電断時の有利区間処理を示す本機固有直接資料。
- 本機固有ガックン条件/発生率・初期出目等の変更判別情報。

## sources
取得日: 2026-09-10

1. HAZUSE DATA — https://data.hazuse.com/?genre=209&machine_code=8S0001 — 導入2018-12-03、サンセイR&D、5.9号機A+ART、machine_code 8S0001、設定別ボーナス/ART、精密機械割、内部状態、BIG後抽選 — reliability: ANALYSIS_HIGH_MACHINE_DATABASE
2. ちょんぼりすた — https://chonborista.com/slot/67417/ — 導入2018-12-03、約35G/50枚、純増2.0枚/G、ボーナス獲得枚数、天井非搭載、朝一設定変更/電断の内部状態・ステージ「調査中」 — reliability: CONTEMPORARY_ANALYSIS_HIGH
3. すろぱちくえすと — https://www.slopachi-quest.com/article/kyojinnohoshi-jounetsu/ — 導入2018-12-03、5.9号機A+ART、設定別スペック、天井、ゲーム性 — reliability: CONTEMPORARY_ANALYSIS
4. スロパチネット — https://slopachi-net.com/kyozin-zyounetsu — 型式 `パチスロ巨人の星情熱編/S3`、導入2018-12-03、設定別スペック、天井非搭載 — reliability: CONTEMPORARY_ANALYSIS
5. グリーンべると — https://web-greenbelt.jp/00010828/ — 2018-10-18内覧会記事、A+ART、1セット30G（初回60G）、純増2.0枚/G、BIG約154枚、プレミアム/めちゃバレ約252枚 — reliability: CONTEMPORARY_INDUSTRY
6. 日刊スポーツ 導入カレンダー — https://www.nikkansports.com/amusement/pachislot/news/201811300000374.html — 2018-12-03パチスロ4機のうち本機を掲載 — reliability: CONTEMPORARY_INDUSTRY_CALENDAR
7. P-WORLD — https://www.p-world.co.jp/machine/database/8792 — サンセイR&D、A+ART、各ボーナス獲得枚数、ART1セット30G、純増約2.0枚/G — reliability: INDUSTRY_DATABASE
8. 中一商事/Rakuten中古実機DB — https://item.rakuten.co.jp/auc-nakaiti/skyozi/ — 型式 `パチスロ巨人の星情熱編/S3`、メーカー、ART仕様 — reliability: SECONDARY_MACHINE_DATABASE
9. pachinko’s blog — https://pachinko.hatenablog.jp/entry/2018/12/pachislot-kyojin-no-hoshi-jounetsu-hen — 型式 `パチスロ 巨人の星/S3`、2018年12月、検定期限情報 — reliability: CONTEMPORARY_SECONDARY
10. 2-9伝説 — https://29den.com/kyojinjonetu/ — 導入2018-12-03、約35G/50枚、純増2.0枚、天井なし、機械割 — reliability: CONTEMPORARY_ANALYSIS_SINGLE
11. すろかい — https://slotkaiseki.hatenablog.com/entry/kyojinnohoshi — 当時解析、導入2018-12-03、約35G/50枚、精密機械割に近い数値 — reliability: CONTEMPORARY_ANALYSIS_SINGLE
