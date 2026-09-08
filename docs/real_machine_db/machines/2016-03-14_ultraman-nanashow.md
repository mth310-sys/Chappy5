# パチスロ ウルトラマン

machineName: パチスロ ウルトラマン
manufacturer: 七匠
releaseDate: 2016-03-14
recordNumber: 963
generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知
formalModelName: パチスロウルトラマンM
certificationNumber: 5S1500
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 七匠公式製品ページで「パチスロ ウルトラマン」を完全告知Aタイプとして確認。
- P-WORLDもメーカー七匠、5号機・ノーマルタイプ・完全告知として掲載。
- formalModelName「パチスロウルトラマンM」および検定番号5S1500は後年機種DBで確認。一次検定資料を今回直接固定できていないため、identity内では二次確認値として扱う。
- 導入日は当時スペック記事・パチビー・複数導入カレンダーで2016-03-14が一致。一方、後年機種DBに2016-03-22表記があるためCONFLICTとして保持し、当時資料優先で2016-03-14をcanonicalとする。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.59% |
| 2 | 98.69% |
| 3 | 99.94% |
| 4 | 102.64% |
| 5 | 104.93% |
| 6 | 107.49% |

- 当時スペック記事の精密値をcanonical。後年解析の97.6 / 98.7 / 99.9 / 102.6 / 104.9 / 107.5%は丸め差として整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/299.3 | 1/468.1 | 1/182.6 |
| 2 | 1/295.2 | 1/448.9 | 1/178.1 |
| 3 | 1/290.0 | 1/431.2 | 1/173.4 |
| 4 | 1/282.5 | 1/390.1 | 1/163.8 |
| 5 | 1/275.4 | 1/358.1 | 1/155.7 |
| 6 | 1/268.6 | 1/334.4 | 1/148.9 |

- 当時スペック記事と後年解析DBで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約34.1G/50枚**。
- 当時スペック記事は34.1G/千円、後年回顧資料に約33G/50枚がある。近似差として扱い、当時精密表記34.1Gをcanonicalとする。
reliability: ANALYSIS_PERIOD_SOURCE_WITH_APPROXIMATE_CROSSCHECK

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE

## basicPayout
- BIG: **336枚**。
- REG: **130枚**。
- 七匠公式の完全告知Aタイプ説明とP-WORLDのボーナス仕様を照合。
reliability: OFFICIAL_PLUS_INDUSTRY_DATABASE

## modeSpecificMinimumData
- 天井: **なし**。
- ゲーム数ゾーン: **なし**。
- AT/ART/CZモード: **非搭載 / NOT_APPLICABLE**。
- ボーナスのみで出玉を獲得する完全告知ノーマルタイプ。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NEGATIVE_FINDINGS
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機は天井・AT/ART/CZモード・有利区間を持たないノーマルタイプで、設定変更に伴う朝一専用天井短縮・モード再抽選・専用CZ等のマクロ恩恵は **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定そのものは変更されるが、ホール経営ゲーム用に追跡すべき公開朝一内部状態の専用契約は今回の横断探索で確認できない。

### carryOverBehavior
- 据え置き時に持ち越し価値を持つ天井ゲーム数・AT/ARTモード・CZ周期は **NOT_APPLICABLE**。
- ボーナス成立状態など遊技中の特殊状態の電断処理は実機完全再現用途のため本DB対象外。

### powerCycleBehavior
- 純電源OFF→ONで引き継ぎ可否が朝一期待値へ影響する天井・モード・有利区間は **NOT_APPLICABLE**。
- 本機固有の電源OFF→ON専用の朝一恩恵/不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### gameCounterReset
- 内部天井ゲーム数: **NOT_APPLICABLE_NO_CEILING**。
- ホール側データカウンタの日跨ぎ表示は実機内部契約とは別物のため収集対象外。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更後の短縮天井: **NONE**。

### modeAfterReset
- **NOT_APPLICABLE_NO_AT_ART_CZ_MODE**。
- 朝一専用モード / リセットモード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 朝一客行動を左右する設定変更専用の低確/高確等の公開内部状態振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- ノーマル機のためAT/ART状態再抽選は非該当。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更に伴う天井短縮、朝一高確、専用CZ、モード優遇等: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 当時/回顧資料でも天井・ゾーン・リセット期待度は実質なしと整理される。

### resetPenalties
- 前日天井進捗や上位モードを失う類の不利: **NOT_APPLICABLE**。
- 本機固有の設定変更による朝一不利数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 「パチスロ ウルトラマン / パチスロウルトラマンM / 七匠」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リールガックン」を組み替え、当時解析・後年DB・検索アーカイブを横断したが、本機固有の確定的なガックン・初期出目・ランプ等による設定変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス確率・小役等による設定推測は通常の設定判別であり、朝一の変更/据え置き判別とは分離。

### numericResetData
- 短縮天井G数: NOT_APPLICABLE
- 設定変更時モード振り分け: NOT_APPLICABLE
- 朝一専用当選率 / CZ率: NONE_CONFIRMED_AFTER_RESEARCH
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## missingFields
- formalModelName / certificationNumberは後年機種DBで「パチスロウルトラマンM / 5S1500」を確認したが、今回一次検定資料を直接取得できずSECONDARY_IDENTITY扱い。
- 本機固有の確定設定変更判別契約: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更/純電断に固有の朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `CONFLICT_RELEASE_DATE_2016_03_14_VS_2016_03_22`: 当時スペック記事、パチビー、2016年新台カレンダー、当時攻略記事は3/14導入で一致。後年パチナビは3/22表記。資料時点と複数一致を優先しcanonicalを2016-03-14、3/22を競合値として保持。
- `BASE_GAMES_APPROX_34_1_VS_33`: 当時スペック記事34.1G/50枚に対し後年回顧約33G/50枚。精度/丸め差の可能性が高く平均せず34.1Gをcanonical。

## sources
取得日: 2026-09-08

1. 七匠公式 — 製品情報
   - https://www.nanashow.co.jp/product/
   - 「パチスロ ウルトラマン」、完全告知Aタイプを確認。
   - reliability: OFFICIAL
2. P-WORLD — パチスロ ウルトラマン
   - https://www.p-world.co.jp/machine/database/7998
   - メーカー七匠、5号機ノーマル/完全告知、BIG336枚・REG130枚。
   - reliability: INDUSTRY_DATABASE_HIGH
3. パチンコ・パチスロ.com — 2016年当時スペック記事
   - https://pachinkopachisro.com/archives/46780361.html
   - 2016-03-14導入、設定別BIG/REG/合算、精密機械割、コイン持ち34.1G/千円、BIG336枚/REG130枚。
   - reliability: PERIOD_SECONDARY_WITH_ORIGINAL_SPEC_REFERENCE
4. パチビー — パチスロ ウルトラマン
   - https://www.pachibee.jp/movies/index/12474
   - 七匠、2016-03-14導入、5号機ノーマル完全告知。
   - reliability: INDUSTRY_MEDIA
5. モゲスロ — 2016年新台スロット導入日カレンダー
   - https://moge-site.com/new-slot2016
   - 2016-03-14群にウルトラマン、沖ドキ！トロピカル-30、ユルビスカス-30を掲載。
   - reliability: SECONDARY_CALENDAR_CROSSCHECK
6. 時給2000円生活 — 2016年3月当時記事一覧
   - https://jikyu2000.com/2016/03/
   - 七匠から3月14日導入、天井/ゾーン攻略対象なしのAタイプとして当時記事化。
   - reliability: PERIOD_ANALYSIS_SECONDARY
7. 必勝期待値クマぱぱ — ウルトラマン
   - https://xn--x9ja8p0go69l5jtgfm.com/ultraman-1463
   - 設定別スペック照合、約33G/50枚、天井・ゾーンなし、リセット期待度なし。
   - reliability: RETROSPECTIVE_ANALYSIS
8. パチナビ — パチスロ ウルトラマン（七匠・初代）
   - https://pachinavi.net/machines/ultraman-1/
   - 型式「パチスロウルトラマンM」、検定番号5S1500、設定別スペック照合。導入日3/22表記はCONFLICTとして保持。
   - reliability: SECONDARY_DATABASE

## confidence
- identity/manufacturer/system: **OFFICIAL_PLUS_MULTI_SOURCE_HIGH**
- formalModelName/certificationNumber: **SECONDARY_SINGLE_UNVERIFIED_PRIMARY**
- releaseDate: **HIGH_MULTI_SOURCE_PERIOD_WITH_CONFLICT_RETAINED**
- performanceCore: **HIGH_MULTI_SOURCE**
- resetBehavior: **STRUCTURAL_NOT_APPLICABLE_PLUS_NEGATIVE_FINDINGS_AFTER_MULTI_QUERY_RESEARCH**
- resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
