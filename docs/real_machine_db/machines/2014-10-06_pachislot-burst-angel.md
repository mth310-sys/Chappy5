# パチスロ バーストエンジェル

machineName: パチスロ バーストエンジェル
manufacturer: 山佐
releaseDate: 2014-10-06
releaseDatePrecision: DATE_CONFLICT_EARLIEST_DATABASE_2014-10-06_VS_PLANNED_NATIONAL_2014-10-20
releaseDateConflict: K-Navi=2014-10-06 / 実ホール導入確認=2014-10-08 / ALL7・複数当時解析=2014-10-20
chronologyNote: 2014-10-20 frontier到達後に発見した遡及バックフィル。chronologicalFrontier自体は2014-10-20のまま。
generation: 5号機
systemType: AT / セットストック型 / CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS_AND_DATE_CONFLICT

## identity

- メーカー: **山佐**。
- 山佐公式現行アーカイブでは **5号機 / ATタイプ / 2014年10月稼働**。
- ホール導入日は資料競合あり。
  - K-Navi: **2014-10-06 ホール導入開始**。
  - 2014-10-08付の実ホール告知: **同日新台導入済み**。少なくとも10/20より前の実稼働を直接支持。
  - ALL7: **2014-10-20導入予定**。
  - 2014年10〜11月の複数当時解析/回顧: **10/20導入**。
- よって10/20だけに正規化せず `DATE_CONFLICT` として保持。DBのファイル日は、現時点で最も早い具体的ホール開始情報であるK-Naviの **2014-10-06** を採用する。
- 型式名・数字形式の検定番号は、今回の再探索で十分な高信頼資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: OFFICIAL_FOR_MONTH_AND_SYSTEM / CONFLICT_FOR_EXACT_RELEASE_DATE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.2% |
| 2 | 98.7% |
| 3 | 100.1% |
| 4 | 104.5% |
| 5 | 109.1% |
| 6 | 113.5% |

- 当時P-Summa、pacnk、5号機クロニクルで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「BURST RUSH」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/394.7 |
| 2 | 1/382.4 |
| 3 | 1/357.9 |
| 4 | 1/331.8 |
| 5 | 1/288.3 |
| 6 | 1/248.6 |

### CZ「四天使モード」

| 設定 | CZ |
|---:|---:|
| 1 | 1/287.5 |
| 2 | 1/277.1 |
| 3 | 1/251.0 |
| 4 | 1/231.8 |
| 5 | 1/210.1 |
| 6 | 1/185.4 |

- AT系列は当時P-Summaとpacnkで一致。
- CZ系列はpacnk現存整理値。初当たり構造上重要なため補助値として保持。
- confidence: ANALYSIS_HIGH_FOR_AT / ANALYSIS_SINGLE_SECONDARY_FOR_CZ_TABLE

## baseGamesPer50

- **約30.4G/50枚**。
- 旧パチマガスロマガ現存解析ページの「50枚あたりのゲーム数」で確認。
- confidence: ANALYSIS_HIGH_SINGLE_PERIOD_ARCHIVE

## netIncrease

- AT「BURST RUSH」純増: **約2.7枚/G**。
- 山佐公式、P-WORLD、K-Navi、GONZO/777TOWN系で一致。
- confidence: OFFICIAL_AND_MULTI_SOURCE

## basicPayout

- AT「BURST RUSH」: **1セット50G + 継続バトル**。
- セットストック型。
- 通常AT当選時は「弾丸ストックシステム」が作動し、裏ストック抽選を行う。
- 物差し用途では詳細なストック内部抽選は収集対象外。
- confidence: OFFICIAL_AND_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時の主要ATルート: 前兆「バーストゾーン」、CZ「四天使モード」、直撃、天井等。
- CZ「四天使モード」: **15G**、AT期待度約 **40〜90%**。
- AT間天井: **974G + 前兆**。
- 天井恩恵: **継続率60%以上のAT**。
- 天井ATの継続率振り分けとして、当時解析に **60%:95% / 80%:4% / 90%:1%** が残る。リセット専用値ではないため通常天井資料として保持。
- 通常時は天井以外の規定ゲーム数解除を主軸としない解析。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **AT間天井ゲーム数をRESET**。
- 設定変更時の内部状態は **低確75% / 高確25%** で再スタートする当時解析あり。
- 通常時ゲーム数解除モードの再抽選という構造は確認できず、低確/高確の状態再抽選として扱う。

### carryOverBehavior

- 純据え置き時のAT間天井G・内部状態について、本機固有の設定変更/据え置き対照表を今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 「設定変更時G数リセット」から据え置きCARRYOVERを自動推定しない。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ON時に、AT間G数・低確/高確状態がどう保持されるかを直接示す本機固有資料は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井はAT間 **974G+前兆**。

### modeAfterReset

- ゲーム数管理の朝一専用モード/モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の比較可能な公開値としては低確/高確の状態振り分けを `stateAfterReset` に保持する。

### stateAfterReset

- 設定変更時:
  - **低確 75%**
  - **高確 25%**
- 船上ステージは高確示唆という当時解析あり。
- 詳細な小役別状態移行率は物差し用途外のため収集しない。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時は **25%で高確スタート**。
- 固定短縮天井等の追加恩恵は確認できず。

### resetPenalties

- 設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、表示、ステージ等による確定的な設定変更/据え置き判別は今回の再探索で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 船上ステージは高確示唆であり、それ単独を設定変更判別には転用しない。

### numericResetData

- 設定変更時状態振り分け:
  - 低確: **75%**
  - 高確: **25%**

### publicMorningNumbers

- 公開朝一比較値として **低確75% / 高確25%** を採用。
- リセット専用の天井短縮G数・朝一専用当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `パチスロ バーストエンジェル / バーストエンジェル / 爆裂天使 / 山佐 / YAMASA`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 974G / 999G / 天井 / 低確 / 高確 / 状態移行 / モード / ガックン / 50枚 / コイン持ち / 型式 / 検定`。
- 資料系統: 山佐公式、GONZO公式、P-WORLD、K-Navi、旧パチマガスロマガ、当時解析ブログ、ALL7、実ホール当時告知、後年5号機DB。
- exact release dateは **2014-10-06 vs 2014-10-20 CONFLICT**。10/08実ホール導入済み告知が10/20以前の稼働を直接支持するため、10/20単独確定にはしない。

## sources

取得日: 2026-09-07

1. 山佐ネクスト公式 — パチスロ バーストエンジェル
   - https://yamasa-next.co.jp/model_brt/
   - 5号機、AT、2014年10月稼働、弾丸ストックシステム
   - reliability: OFFICIAL
2. K-Navi — パチスロ バーストエンジェル
   - https://p-kn.com/slot/2126/
   - 2014-10-06ホール導入開始、AT 50G、純増約2.7枚/G
   - reliability: ANALYSIS_DATABASE
3. ALL7 — 2014年10月導入予定一覧
   - https://www.all7.jp/plans/index/2014/10
   - 2014-10-20導入予定
   - reliability: INDUSTRY_DATABASE
4. ジャンボ御山店 当時ブログ
   - https://ameblo.jp/jumbo-oyama/
   - 2014-10-08「本日新台導入」としてバーストエンジェルを掲載
   - reliability: PERIOD_HALL_DIRECT_OBSERVATION
5. P-Summa — 2014-11-09機種まとめ
   - https://psumma.jp/pachislo/3570/
   - 10/20導入、AT初当たり、機械割、純増2.7枚/G、50G
   - reliability: PERIOD_ANALYSIS
6. パチマガスロマガ旧攻略 — 小役確率/50枚ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/199/c-1.php
   - 約30.4G/50枚
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ旧攻略 — 機種総合
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/199/yamasa_slot_199.php
   - 朝イチ・設定変更/内部状態等の当時解析系列
   - reliability: ANALYSIS_HIGH
8. すろぱちくえすと — 状態移行率
   - https://www.slopachi-quest.com/article/burst-angel-mode/
   - 設定変更時 低確75% / 高確25%
   - reliability: PERIOD_ANALYSIS
9. 真パチスロ備忘録 — 天井/設定変更
   - https://sin-surobi.com/bsa/6411
   - 974G+前兆、設定変更時G数リセット
   - reliability: PERIOD_ANALYSIS
10. すろぱちくえすと — 天井解析
   - https://www.slopachi-quest.com/article/burst-angel/
   - AT間974G+前兆、天井AT60%以上、継続率振り分け
   - reliability: PERIOD_ANALYSIS
11. P-WORLD — パチスロ バーストエンジェル
   - https://www.p-world.co.jp/machine/database/7514
   - 5号機AT、純増約2.7枚/G、50G+継続バトル
   - reliability: INDUSTRY_DATABASE
12. pacnk — 設定判別ツール
   - https://pacnk.com/slot/tools/sh_burstangel.html
   - AT初当たり、CZ、機械割
   - reliability: SECONDARY_ANALYSIS
13. GONZO — パチスロ『バーストエンジェル』
   - https://www.gonzo.co.jp/2014/11/05/1520/
   - 稼働中、弾丸ストック/プレミアムフリーズ
   - reliability: RIGHTS_HOLDER_OFFICIAL

## missingFields

- exact model/type name: UNVERIFIED_AFTER_RESEARCH
- numeric certification number: UNVERIFIED_AFTER_RESEARCH
- pure carry-over AT ceiling/state contract: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle internal counter/state contract: UNVERIFIED_AFTER_RESEARCH
- machine-specific reset detection contract: UNVERIFIED_AFTER_RESEARCH

## conflicts

- `CONFLICT_RELEASE_DATE_2014-10-06_VS_2014-10-20`:
  - K-Navi: 2014-10-06ホール導入開始。
  - 実ホール当時ブログ: 2014-10-08時点で新台導入済み。
  - ALL7 / 複数当時解析: 2014-10-20導入予定/導入。
  - 10/08実導入を確認できるため、10/20を全国一律の最初の実稼働日とは扱わない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_SOURCE_LIMITS
