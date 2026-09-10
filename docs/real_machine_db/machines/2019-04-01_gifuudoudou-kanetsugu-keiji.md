# No.1273 戦国パチスロ 義風堂々!!～兼続と慶次～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 戦国パチスロ 義風堂々!!～兼続と慶次～
- manufacturer: EXCITE
- releaseDateCanonical: 2019-04-01（HAZUSE導入開始・当時業界の導入予定日）
- releaseDateAlternate: 2019-04-08（K-Navi・ちょんぼりすた・スロパチネットのホール導入日）
- generation: 5.9号機
- systemType: A+RT / 技術介入
- formalModelNameCanonical: `義風堂々！！～兼続と慶次～EM`
- certificationNumber: `7S1876`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | 夢語りBIG極 | 戦語りBIG青7 | 戦語りBIG赤7 | 酒語りBONUS | ボーナス合算 | 機械割 初級 | 中級 | 上級 | 神 |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 1/2849.4 | 1/1024.0 | 1/1024.0 | 1/560.1 | 1/244.5 | 97.1% | 97.7% | 98.3% | 98.4% |
| 2 | 1/2849.4 | 1/1008.2 | 1/1008.2 | 1/550.7 | 1/240.9 | 98.2% | 98.8% | 99.5% | 99.6% |
| 5 | 1/2849.4 | 1/936.2 | 1/936.2 | 1/508.0 | 1/224.4 | 101.9% | 102.6% | 103.4% | 103.6% |
| 6 | 1/2849.4 | 1/873.8 | 1/873.8 | 1/471.5 | 1/210.1 | 104.3% | 105.1% | 106.0% | 106.2% |

- HAZUSE、すろぱちくえすと、スロパチネットで主要値を照合。
- 夢語りBIG極は設定共通1/2849.4として整理。表示崩れがある資料では設定2以降の同値が省略されるため、HAZUSE系表と複数解析の完全表を優先。

### baseGamesPer50
- **38.2～41.9G/50枚（RTを含まない通常時）**。
- すろぱちくえすと、HAZUSEで一致。

### netIncrease / basicPayout
- RT「極戦モード」純増: **約0.2枚/G**。
- RT継続: **50G**。
- 夢語りBIG BONUS極: **416枚**。
- 戦語りBIG BONUS: **最大404枚、平均約364枚**。
- 酒語りBONUS: **最大64枚**。
- PiDEA Xの2019-02-22内覧会記事でも416枚 / 最大404枚 / 最大64枚、ボーナス後CZ→50G RTを確認。

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- 規定G数による通常時初当たり管理: **なし（ノーマル/A+RT型）**。
- 夢語りBIG極・酒語りBONUS後CZはRT突入リプレイまたはボーナス成立まで継続。
- 戦語りBIG後CZは20G。特殊リプレイ成立で50G RTへ。
- 完全再現用の小役別同時当選率・演出振り分け等は収集対象外。

## resetBehavior
### settingChangeBehavior
- 本機固有の設定変更時テーブル（RT/CZ/ボーナス成立状態、液晶ステージ、語りポイント等）を直接示す現存資料を固定できず、`UNVERIFIED_AFTER_RESEARCH`。
- 機種名表記揺れ、正式型式、EXCITE/ニューギン、設定変更、リセット、朝一、据え置き、電源OFF→ON、ガックン、有利区間を組み替えて再探索済み。

### carryOverBehavior
- 据え置き時のRT/CZ/ボーナス成立状態、語りポイント、液晶状態を設定変更・純電断と分離して示す本機固有公開契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純粋な電源OFF→ONのみでRT/CZ/ボーナス成立状態・液晶状態がどう復帰するかを直接列挙した本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的なノーマル機挙動から推測補完しない。

### gameCounterReset
- `NOT_APPLICABLE`。
- 通常ゲーム数天井・規定G数当選を搭載しないため、天井ゲーム数カウンタのリセット/引継ぎ比較対象なし。

### ceilingAfterReset
- `NOT_APPLICABLE`。
- 通常ゲーム数天井非搭載のため短縮天井なし。

### modeAfterReset
- 通常時の朝一専用モード、設定変更専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 液晶の「春風/夏風/秋風/冬風/語りの章」は演出・期待度ステージとして確認できるが、朝一リセット専用モード契約は固定できず推定しない。

### stateAfterReset
- RT/CZ/ボーナス成立状態、語りポイント等の設定変更/据え置き/純電断別の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機A+RTで、通常時AT/CZを有利区間ゲーム数で管理する主ゲームフローは確認できず、本DBの朝一有利区間比較値は `NOT_APPLICABLE_TO_MAIN_GAME_FLOW`。
- 有利区間ランプを用いた本機固有の変更判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBenefits
- 天井短縮、朝一専用CZ、初当たり優遇、専用モード等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 数値化された設定変更専用の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン発生条件/発生率、初期出目・ランプ・液晶による設定変更判別法は、検索語・資料系統を変えた再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一リセット恩恵の見出しを持つ後年解析はあるが、直接確認できる確定リセット表・判別数値は取得できなかったため推定しない。

### numericResetData
- normalCeiling: `NOT_APPLICABLE`
- resetCeiling: `NOT_APPLICABLE`
- ceilingShortening: `NOT_APPLICABLE`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDate / formalModel
- HAZUSEは型式 `義風堂々！！～兼続と慶次～EM`、検定番号 `7S1876`、導入開始日2019-04-01を掲載。
- PiDEA Xの2019-02-22内覧会記事は導入（開店）日を2019-04-01予定とする。
- すろぱちくえすとは2019-04-01。
- K-Navi、ちょんぼりすた、スロパチネットは2019-04-08をホール導入開始日として掲載。
- 本DBでは最も早い導入開始DB表記である2019-04-01をcanonicalとし、2019-04-08を `CONFLICT_RELEASE_DATE` として保持する。

## boundaryAudit
- 2019-03-26〜03-31を新台カレンダー/当時解析で再監査。独立登録すべきパチスロ全国導入機を固定できず、2019-04-01へ前進。
- 2019年3月新台カレンダーでは3/25ドンちゃん2後の次群を4/1として確認。
- 4/1群には少なくとも `パチスロ猛獣王 王者の咆哮`、`新世紀エヴァンゲリオン 暴走400` が複数資料で確認される。義風堂々は4/1/4/8の導入日競合を本レコードに保持。

## missingFields
- 設定変更/据え置き/純電源OFF→ON別のRT/CZ/ボーナス成立状態・語りポイント等の直接契約。
- 本機固有ガックン発生条件・発生率。
- 設定変更専用の朝一モード/初当たり優遇数値（存在を確認できず）。

## conflicts / qualityNotes
- `CONFLICT_RELEASE_DATE_2019_04_01_VS_2019_04_08`
  - 2019-04-01: HAZUSE（導入開始）、すろぱちくえすと、PiDEA X（当時導入予定）。
  - 2019-04-08: K-Navi、ちょんぼりすた、スロパチネット。
  - 平均化せず両日を保持。時系列キュー上は最古の導入開始表記4/1をcanonical。
- 機械割は単一値ではなく技術介入レベル別レンジ。97.1～98.4 / 98.2～99.6 / 101.9～103.6 / 104.3～106.2%を定義付きで保持。

## sources
取得日: 2026-09-11
1. HAZUSE — https://hazuse.com/machine/pachislot/7S1876/ — 型式、検定番号、2019-04-01導入開始、設定別ボーナス、ベース、機械割レンジ、獲得枚数、天井非搭載、CZ/RT — reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. PiDEA X — https://www.pidea.jp/articles/%E6%88%A6%E5%9B%BD%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8C%E7%BE%A9%E9%A2%A8%E5%A0%82%E3%80%85!!%E3%80%8D%E6%9E%9A%E6%95%B0%E5%A4%89%E5%8B%95%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E6%90%AD%E8%BC%89%EF%BC%8FEXCITE — 2019-02-22内覧会、A+RT、416/404/64枚、CZ/50G RT、4/1導入予定 — reliability: `INDUSTRY_CONTEMPORARY`
3. すろぱちくえすと — https://www.slopachi-quest.com/article/gifuudoudou-settei/ — 2019-04-01、設定別性能、38.2～41.9G/50枚、RT約0.2枚/G、50G、獲得枚数、天井非搭載 — reliability: `ANALYSIS_HIGH_CROSSCHECK`
4. K-Navi — https://p-kn.com/slot/3195/ — 2019-04-08ホール導入開始、機種/メーカー/RT分類、獲得枚数 — reliability: `MACHINE_DB_HIGH`
5. ちょんぼりすた — https://chonborista.com/slot/newgin-slot/80338/ — 2019-04-08、A+RT、性能・天井/朝一項目 — reliability: `ANALYSIS_HIGH`
6. スロパチネット — https://slopachi-net.com/gihudoudo — 2019-04-08、型式、設定別ボーナス/機械割レンジ、約0.2枚/G、天井非搭載 — reliability: `SECONDARY_CROSSCHECK`
7. スロット解析.com 2019年3月カレンダー — https://slotkaiseki.com/2019-3/ — 3/25後の次主要導入群が4/1である境界確認 — reliability: `CONTEMPORARY_CALENDAR_SECONDARY`
8. K-Navi 2019年4月カレンダー — https://p-kn.com/calendar/201904/ — 4/1に猛獣王/エヴァ暴走400、4/8に義風堂々等を掲載 — reliability: `MACHINE_DB_CALENDAR_HIGH`

## confidence
- formalModel/certification: `ANALYSIS_HIGH_MACHINE_DB`
- releaseDate: `CONFLICT_2019_04_01_VS_2019_04_08`
- performanceCore: `ANALYSIS_HIGH_PLUS_INDUSTRY_CROSSCHECK`
- resetBehaviorCore: `PARTIAL_RESEARCH_EXHAUSTED`
- resetDetection: `PARTIAL_RESEARCH_EXHAUSTED`
