# パチスロ タイガーマスク

machineName: パチスロ タイガーマスク
aliases: タイガーマスク / パチスロタイガーマスク
manufacturer: SANKYO
releaseDate: 2013-11-18
releaseDatePrecision: exact_day
modelName: パチスロ タイガーマスク

generation: 5号機
systemType: ART / CZ / ゲーム数管理 / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- SANKYO公式オンライン博物館で2013年機・SANKYOブランド・販売名（型式名）「パチスロ タイガーマスク」を確認。
- exact day はHAZUSE / ALL7 / パチビーで **2013-11-18** 一致。
- SANKYO公式ページの「導入年月 2013.10」とexact day資料には月差がある。公式側は製品月/導入月表記の可能性があるため、DBのホール導入日は複数当時資料一致の2013-11-18を採用し、月差をCONFLICT注記として保持する。
- confidence: OFFICIAL_PLUS_ANALYSIS_MULTI_SOURCE_WITH_RELEASE_MONTH_CONFLICT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.3% |
| 3 | 100.1% |
| 4 | 105.0% |
| 5 | 107.7% |
| 6 | 112.8% |

- HAZUSE / パチマガスロマガ / すろぱちくえすとで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/276.9 |
| 2 | 1/261.6 |
| 3 | 1/245.3 |
| 4 | 1/234.1 |
| 5 | 1/212.8 |
| 6 | 1/178.0 |

- SANKYO公式オンライン博物館 / HAZUSE / パチマガスロマガ / すろぱちくえすとで一致。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## baseGamesPer50

- 「パチスロ タイガーマスク / パチスロタイガーマスク / SANKYO / 3S0671」と「50枚 / 1000円 / ベース / コイン持ち」を組み替え、公式・HAZUSE・パチマガスロマガ・P-WORLD・後年DBを横断したが、比較可能な直接値を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 推測値は保存しない。
- confidence: UNVERIFIED

## netIncrease

- ART「タイガーRUSH」は **純増約2.4枚/G**。
- SANKYO公式はARTを出玉メインと説明し、パチマガスロマガ / パチビー / P-WORLD系資料で約2.4枚/G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「タイガーRUSH」は **1セット30G+α**。
- 赤7揃い時は初期 **30G以上**、白7揃い時は **100G以上**。パチマガスロマガ当時解析では初期30〜300G。
- HAZUSE解析では初当たり時、赤7は30Gが基本、白7は100Gが基本で、ごく一部200/300G振り分けを持つ。
- ホール経営用物差しでは基本性能として30G+α / 約2.4枚/Gを採用し、細かな振り分けは収集対象外。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定ゲーム数解除 + CZ「デスバトル」からARTを狙う。
- モードは通常A / 通常B / 天国。
- モード別最大規定ゲーム数:
  - 通常A: **1000G**
  - 通常B: **700G**
  - 天国: **100G**
- HAZUSEの規定ゲーム数振り分けとすろぱちくえすとの天井整理で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## ceiling

- ART間最大 **1000G** でART突入。
- モード別最大は通常A 1000G / 通常B 700G / 天国100G。
- 天井到達時の特別上乗せ等の追加恩恵は、すろぱちくえすとで「なし」と整理。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_MODE_AND_HIGH_STATE_NUMBERS_CONFIRMED__CARRYOVER_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- HAZUSEで **ART終了時および設定変更時にモード移行抽選**が行われることを確認。
- 設定変更時のモード振り分けは全設定共通で **通常A 75.0% / 通常B 25.0% / 天国0%**。
- HAZUSEで高確A移行抽選が設定変更時にも行われ、**全設定共通25.0%で高確Aへ移行**することを確認。
- すろぱちくえすとでは設定変更時に天井までのゲーム数がリセットされると明記。
- confidence: ANALYSIS_HIGH_FOR_MODE_AND_STATE__ANALYSIS_SINGLE_FOR_GAME_COUNTER_CLEAR

### carryOverBehavior

- 「据え置き / 宵越し / 前日ゲーム数 / 天井引継ぎ」を本機名・メーカー・型式表記で再探索したが、本機固有の純据え置き時にゲーム数・モード・高確状態をどう保持するかを直接固定できる高信頼資料は確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時リセットの反対を自動的に据え置き保持と推定しない。

### powerCycleBehavior

- 設定変更を伴わない単純な電源OFF→ONのみの場合について、ゲーム数・天井・モード・高確状態の保持/初期化を直接示す本機固有資料を確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと電源OFF→ONを同義扱いしない。

### gameCounterReset

- setting change: **CLEAR_CONFIRMED_ANALYSIS_SINGLE** — 設定変更で天井までのゲーム数リセット。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更後は規定ゲーム数を新たなモードに基づいて再設定するため、朝一最大は設定変更時モードの通常A選択時 **1000G**。
- 設定変更専用の短縮天井は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時は天国0%のため、通常時天国100Gを朝一恩恵として扱わない。

### modeAfterReset

- 設定変更時: **通常A 75.0% / 通常B 25.0% / 天国0%**（全設定共通）。
- HAZUSE調べによる公開解析値。
- 通常時のART終了後モード移行率とは別テーブルとして保存。

### stateAfterReset

- 設定変更時、高確A移行率 **25.0%（全設定共通）**。
- 高確Aと高確Bが重複した場合は超高確になるが、設定変更時の高確B初期化契約は今回直接固定できず、完全状態契約は **PARTIAL**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時は25%で高確Aへ移行するため、朝一のCZ/ART抽選に影響する可能性がある公開恩恵として保持。
- ただし設定変更時モードは天国0%、通常A75%・通常B25%であり、短縮天井/天国スタート型のリセット恩恵ではない。

### resetPenalties

- 設定変更時のモード振り分けで **天国0%**。通常時ART終了後には天国移行が存在するため、前日状態次第では設定変更が必ずしも有利とは限らない。
- これを期待値ペナルティの定量値へ拡張せず、公開仕様差としてのみ保存。

### resetDetection

- 「ガックン / 初期出目 / 液晶 / ランプ / 変更判別」と機種名・SANKYO・型式表記を組み替えて再探索したが、本機固有で高信頼な設定変更/据え置き判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時モード: **通常A 75.0% / 通常B 25.0% / 天国0%**。
- 設定変更時高確A移行: **25.0%**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。
- 純据え置き時のゲーム数/モード/状態保持: UNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON時の挙動: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の高確B初期契約: UNVERIFIED_AFTER_RESEARCH。
- ガックン等の変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- releaseDateはSANKYO公式オンライン博物館の「導入年月 2013.10」と、HAZUSE / ALL7 / パチビーのホール導入2013-11-18に月差あり。DB時系列は複数exact-day資料の2013-11-18を採用し、公式月表記を消さない。
- 後年AI生成系ページに「6号機」等の明白な誤記があるため採用しない。本機は2013年導入の5号機ART。
- 通常時天国100Gを設定変更後の天国振り分けと混同しない。設定変更時天国は0%。
- 通常時ART終了後モード移行テーブルを設定変更時テーブルへ流用しない。

## sources

取得日: 2026-09-06

- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/549/ — 2013年機、SANKYO、販売名/型式名、ARTゲーム性、公式初当たり確率。
- ALL7 2013年11月導入一覧: https://www.all7.jp/plans/index/2013/11 — 2013-11-18導入予定。
- パチビー: https://www.pachibee.jp/movies/index/10037 — 2013-11-18導入、5号機ART、純増約2.4枚/G。
- HAZUSE基本スペック: https://data.hazuse.com/?genre=201&machine_code=3S0671 — 2013-11-18、ART初当たり、機械割。
- HAZUSE天井: https://data.hazuse.com/?genre=207&machine_code=3S0671 — ART間最大1000G。
- HAZUSE解析: https://data.hazuse.com/?genre=209&machine_code=3S0671 — 設定変更時モード通常A75%/通常B25%、設定変更時高確A25%、モード別規定ゲーム数。
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/33/a.php — 1セット30G+α、純増約2.4枚/G、ゲーム数解除/CZ。
- パチマガスロマガ確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/33/h-1.php — ART初当たり、PAYOUT。
- パチマガスロマガART: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/33/l.php — 初期30〜300G、赤7 30G以上、白7 100G以上、純増約2.4枚/G。
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/tiger-mask/ — モード別天井1000/700/100G、設定変更時天井Gリセット、機械割/初当たり照合。
