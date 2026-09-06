# パチスロQP

machineName: パチスロQP
manufacturer: オーイズミ
releaseDate: 2013-07-22
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT / ゲーム数管理 + 自力CZ / BR非搭載
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_UNVERIFIED_RESET_DETAILS

## identity

- ホール導入日: **2013-07-22**。パチビーで具体日確認。当時発表資料では7月21日納品開始予定。
- manufacturer: **オーイズミ**。
- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**。機種名・メーカー・検定番号系検索を変えて再探索したが安全に固定できる直接資料を今回確保できず。
- confidence: INDUSTRY_AND_ANALYSIS_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.1% |
| 2 | 99.2% |
| 3 | 101.0% |
| 4 | 107.0% |
| 5 | 110.9% |
| 6 | 114.1% |

- P-WORLDとパチマガスロマガで一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

| 設定 | AT「QP CHANCE」初当たり |
|---|---:|
| 1 | 1/238.0 |
| 2 | 1/231.3 |
| 3 | 1/219.5 |
| 4 | 1/201.2 |
| 5 | 1/189.6 |
| 6 | 1/180.5 |

- P-WORLDとパチマガスロマガで一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「50枚」「1000円」「ベース」「コイン持ち」と機種名/メーカー名を組み替え、当時解析・古いDB・回顧資料を再探索したが、同定義で安全に採用できる数値を今回確保できず。

## netIncrease

- AT「QP CHANCE」: **約+2.8枚/G**。
- パチビー、P-WORLD、パチマガスロマガで一致。
- confidence: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- AT「QP CHANCE」: **1セット40G+α**。
- ゲーム数上乗せ + セットストック型。
- BR非搭載。
- confidence: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時は **通常A / 通常B / 天国 / 超天国** の4モード。
- AT当選契機はゲーム数解除、自力CZ「瞑想チャレンジ」、レア役直撃など。
- CZ「瞑想チャレンジ」: **10G or AT当選まで**。P-WORLDではAT期待度33%以上。
- 最大天井は当時攻略整理資料で **通常A 1300G / 通常B 800G / 天国100G / 超天国25G**。
- 天井到達でAT「QP CHANCE」当選。
- 必勝本には通常A/B滞在時の規定Gチャンスゾーンとして151-300 / 351-500 / 551-700 / 751-900 / 1001-1100 / 1201-1300Gを掲載。
- ceiling confidence: ANALYSIS_MULTI_SOURCE_MEDIUM_HIGH（モード別最大値は現存する当時整理資料中心）

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CLEARS_GAME_PROGRESS_SUPPORTED_BY_NO_CARRYOVER_REPORT__MODE_STATE_AND_POWER_CYCLE_DETAILS_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 当時の天井狙い整理資料で本機は **宵越し×** と明記されており、設定変更時には前日の天井ゲーム数進捗を持ち越さない契約を支持する。
- パチマガスロマガには本機固有の「朝イチ・設定変更」解析項目が存在することを確認したが、今回取得できた現存本文から具体的なモード振り分け・状態振り分けまでは安全に復元できなかった。
- settingChangeGameCounter: **RESET_SUPPORTED_BY_PERIOD_ANALYSIS**。
- settingChangeModeReselection: **UNVERIFIED_AFTER_RESEARCH**。
- settingChangeStateReselection: **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_FOR_RESET_COUNTER + UNVERIFIED_FOR_DETAILS

### carryOverBehavior

- 典型的な据え置きについて、当時資料の「宵越し×」は設定変更時の扱いを示す攻略表記として採用する一方、**据え置きそのものでも内部G数が消える**と断定できる機種固有直接資料は今回確保できず。
- carryOverHiddenGameCounter: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverMode: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverState: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 単純電源OFF→ONのみの内部G数、モード、CZ/AT高確状態、液晶開始状態の直接契約は、機種名/オーイズミ/QPと「電源OFF ON」「電断」「朝一」「据え置き」「設定変更」を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- settingChange: **RESET_SUPPORTED_BY_PERIOD_ANALYSIS / 宵越し不可**。
- carryOverPowerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井や朝一専用天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常モード群の公開最大天井: 通常A **1300G** / 通常B **800G** / 天国 **100G** / 超天国 **25G**。
- 設定変更後にどのモードへ何%で移行するかは **UNVERIFIED_AFTER_RESEARCH**。

### modeAfterReset

- 通常時に通常A/B・天国・超天国が存在することは確認。
- 設定変更時のモード再抽選有無および振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 通常時の全モード移行テーブルはv0.7の収集範囲外。

### stateAfterReset

- 本機にはCZ高確・直撃AT高確が存在する。
- 設定変更時の高確/低確リセット・再抽選・開始状態の直接値: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の公開朝一恩恵率、短縮天井、CZ優遇率: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時に前日の天井進捗を失うため、前日ハマリの宵越し狙いには不利。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期出目、液晶ステージ、ゲーム数表示など本機固有の設定変更判別契約は **UNVERIFIED_AFTER_RESEARCH**。
- 汎用的なオーイズミ機の挙動や別機種のガックン情報は本機へ転記していない。

### publicMorningNumbers

- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- settingChangeStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetOnlyHitRateWithinSpecificGames: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources

取得日: **2026-09-06**

1. パチビー「パチスロQP」
   - https://www.pachibee.jp/movies/index/9600
   - 2013-07-22導入、オーイズミ、5号機AT、BR非搭載、純増約2.8枚/G。
   - confidence: INDUSTRY/DB

2. P-WORLD「パチスロQP」
   - https://www.p-world.co.jp/machine/database/7101
   - AT初当たり、機械割、40G+α、純増約2.8枚/G、CZ等。
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ「パチスロQP 基本情報」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/30/a.php
   - AT 40G+α、純増約2.8枚/G、ゲーム数管理、自力解除構造。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ「ボーナス確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/30/h.php
   - 設定別AT初当たり・PAYOUT。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ「AT突入フロー」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/30/l.php
   - 通常A/B・天国・超天国、ゲーム数解除、自力CZ、AT基本性能。
   - confidence: ANALYSIS_HIGH

6. パチ＆スロ必勝本「各チャンスゾーン」
   - https://p.hisshobon.jp/machine/2237/1/40942
   - 通常A/B規定ゲーム数チャンスゾーン、CZ高確・直撃AT高確ゾーン。
   - confidence: ANALYSIS_HIGH

7. 天井ハイエナ生活「天井ハイエナ期待値リスト か行」
   - https://macerate.seesaa.net/article/226196713.html
   - 当時整理資料。QPの宵越し×、モード別最大天井1300/800/100/25G。
   - confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

8. Pマンズ / 2013-05-30オーイズミ発表会整理
   - https://p-mans.blogspot.com/2013/05/
   - 2013-05-29発表、7月21日納品開始予定、ゲーム数管理AT構造。
   - confidence: INDUSTRY_RETROSPECTIVE_MIRROR

## missingFields

- 型式名 / 検定番号
- baseGamesPer50
- 設定変更時モード振り分け
- 設定変更時内部状態振り分け
- 据え置き時の内部G/モード/状態の直接契約
- 単純電源OFF→ON時の内部G/モード/状態/表示契約
- 本機固有ガックン・初期出目等の変更判別
- 公開リセット専用当選率

## conflicts

- release dateは「2013-07-21納品開始予定」と「2013-07-22ホール導入」の表記差があるが、予定納品日と一般ホール導入日として定義を分離し、releaseDateは具体的導入日の2013-07-22を採用。
- その他、今回採用した性能コアに重大な数値CONFLICTは確認していない。
