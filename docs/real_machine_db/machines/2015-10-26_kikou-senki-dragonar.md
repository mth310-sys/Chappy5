# パチスロ機甲戦記ドラグナー

machineName: パチスロ機甲戦記ドラグナー
manufacturer: サミー
releaseDate: 2015-10-26
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: 新基準AT / 差枚数管理AT + ゲーム数管理AT
formalModelName: 機甲戦記ドラグナーXS（後年解析・流通表記）
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式2015年製品一覧に本機を確認。
- パチ＆スロ必勝本、複数解析資料でホール導入日 **2015-10-26** が一致。
- 2015-09-16の内覧会を業界媒体グリーンべるとが報道。
- 型式末尾XSの表記は後年解析/流通系で確認されるが、今回公式検定番号までは固定できず inspectionNumber は `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.4% |
| 3 | 100.1% |
| 4 | CONFLICT: 105.0% / 106.0% |
| 5 | 107.6% |
| 6 | 112.8% |

- すろぱちくえすとは設定4を105.0%、ちょんぼりすた/別解析は106.0%とする。平均せずCONFLICT保持。
- 設定1-3・5-6は複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING4_CONFLICT

## initialHitBySetting

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/399.9 |
| 2 | 1/390.6 |
| 3 | 1/375.6 |
| 4 | 1/341.9 |
| 5 | 1/320.2 |
| 6 | 1/298.6 |

- パチ＆スロ必勝本、すろぱちくえすと、複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約43.9G/50枚**。
- パチマガスロマガ、すろぱちくえすと、複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「DRAGONAR RUSH」/「交戦宙域」: **約2.9枚/G**。
- グリーンべると業界記事、必勝本、解析資料で一致。
- confidence: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- AT初当たり後は「D-SEVEN CHARGE」で初期性能を決定。
- DRAGONAR RUSH: 差枚数管理型AT、純増約2.9枚/G。
- D-SEVEN CHARGE: 白7揃い最低3回保証、最低100枚。解析資料では継続率50〜80%、1ライン10〜500枚。
- 交戦宙域: ゲーム数管理型AT。滞在中はDRAGONAR RUSH側の差枚数減算が停止。
- 本DBでは実機完全再現用の上乗せ全振り分けは収集しない。

## modeSpecificMinimumData
- 通常時は規定ゲーム数/レア役等でチャンスステージ移行を抽選し、ATを目指す。
- チャンスステージはドラグナーミッション、リールバトル、ドラグナーリペア、マスドライバー。
- 天井は **AT終了後1400G消化 または AT終了後ステージチェンジ25回目の早い方** でAT当選。
- ステージモードA/B/Cおよび確定ステージが存在。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更/リセット時は **天井までのゲーム数を再セット**。
- **ステージモードを再抽選**。
- 設定変更時のステージモード選択率が設定別に公開されている。

### carryOverBehavior
- 本機固有の資料は「リセット」と「電源ON/OFF」を直接比較しており、電源ON/OFF側は天井ゲーム数・ステージモードとも引継ぎ。
- 据え置き運用時も、設定変更を行わず電源ON/OFFのみなら上記CARRYOVER契約を支持する。
- ホール側の据え置き操作と純電断を概念上は分離して保持するが、公開比較表で確認できる朝一主要要素は同じ引継ぎ側。

### powerCycleBehavior
- **天井までのゲーム数: CARRYOVER**。
- **ステージモード: CARRYOVER**。
- 設定変更とは明確に差がある。

### gameCounterReset
- settingChange: **RESET**。
- powerCycle: **CARRYOVER**。
- carryOver: **CARRYOVER_SUPPORTED**。
- 対象はAT後1400G天井およびステージチェンジ回数天井の朝一主要管理。公開表は「天井までのゲーム数」として整理されているため、25回ステチェンカウンタ単独の内部実装まで過剰推定しない。

### ceilingAfterReset
- 通常天井: **AT後1400G or ステージチェンジ25回目の早い方**。
- 設定変更専用の短縮G数天井: **NONE_CONFIRMED**。
- リセットは天井短縮ではなくカウンタ再セットとして扱う。

### modeAfterReset
設定変更時ステージモード選択率:

| 設定 | モードA | モードB | モードC | 確定ステージ |
|---:|---:|---:|---:|---:|
| 1 | 32.5% | 32.5% | 32.5% | 2.5% |
| 2 | 32.0% | 32.0% | 32.0% | 4.0% |
| 3 | 31.0% | 31.0% | 31.0% | 7.0% |
| 4 | 30.0% | 30.0% | 30.0% | 10.0% |
| 5 | 30.0% | 30.0% | 30.0% | 10.0% |
| 6 | 30.0% | 30.0% | 30.0% | 10.0% |

- 電源ON/OFFのみの場合はステージモード引継ぎ。
- confidence: ANALYSIS_SINGLE_DIRECT_RESET_TABLE

### stateAfterReset
- 朝一主要公開情報としてステージモード再抽選は確認。
- それとは別の内部高確/低確状態の設定変更時初期振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。ステージモードと内部状態を混同しない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時はステージモード再抽選が行われ、**確定ステージ**への振り分けが設定1で2.5%、設定2で4.0%、設定3で7.0%、設定4〜6で10.0%存在する。
- 固定短縮天井は確認されない。

### resetPenalties
- 前日天井進行を保持していた台では、設定変更により天井までのゲーム数が再セットされるため宵越し価値を失う。

### resetDetection
- 本機固有のガックン・液晶表示等による設定変更確定判別を、今回の直接資料では固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 天井/ステージモード挙動は事後推測材料になり得るが、朝一即時の確定判別とは扱わない。

### numericResetData
- reset mode A/B/C/certain-stage distribution: 上表。
- reset shortened ceiling: **NONE_CONFIRMED**。
- reset-specific hit rate: **NONE_CONFIRMED**。
- reset detection numeric threshold: **NONE_CONFIRMED**。

## conflicts
- `PAYOUT_SETTING4`: すろぱちくえすと **105.0%** vs ちょんぼりすた/別解析 **106.0%**。平均せずCONFLICT。
- `CEILING_DESCRIPTION`: 「1400G以降のステージチェンジ」と表現する資料と「AT後1400G or ステチェン25回目」と整理する資料がある。実運用上は1400G到達直後の即告知ではなくステージチェンジを伴う表現差があるため、AT当選契機の表現を分離して保持。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。
- settingChange-specific internal high/low state distribution: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08
1. サミー公式 2015年パチスロ製品一覧
   - https://www.sammy.co.jp/japanese/products/pachislot/2015/index.html
   - 製品存在、2015年掲載。
   - reliability: OFFICIAL
2. グリーンべると — 枚数とゲーム数、2つの上乗せが絡み合うAT機（2015-09-17）
   - https://web-greenbelt.jp/00008087/
   - 2015-09-16内覧会、純増2.9枚/G、差枚数管理AT + G数管理AT。
   - reliability: INDUSTRY
3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2655/1/54260
   - 2015-10-26導入、AT初当たり、純増2.9枚/G。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — パチスロ機甲戦記ドラグナー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/147/a.php
   - AT構造。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役/50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/147/c.php
   - 約43.9G/50枚。
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — 機甲戦記ドラグナー 完全攻略解析
   - https://chonborista.com/slot/sammy-slot/12182/
   - 2015-10-26、AT初当たり、機械割、43.9G/50枚、天井、AT構造。
   - reliability: ANALYSIS_HIGH
7. すろぱちくえすと — 天井恩恵・スペック解析
   - https://www.slopachi-quest.com/article/kikousenki-dragonar/
   - AT初当たり、機械割、43.9G/50枚、天井。
   - reliability: ANALYSIS_HIGH
8. スロット収支アップ — 機甲戦記ドラグナー解析攻略
   - https://smaslo.man-soft.com/slot-kaiseki/dragonar.html
   - 設定変更 vs 電源ON/OFFの天井/ステージモード比較、設定変更時ステージモード選択率。
   - reliability: ANALYSIS_SINGLE_DIRECT_RESET_TABLE

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRateBySetting: ANALYSIS_HIGH_WITH_SETTING4_CONFLICT
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease: INDUSTRY + ANALYSIS_HIGH
- ceilingStructure: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- carryOverBehavior: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- purePowerCycleBehavior: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- resetNumericData: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
