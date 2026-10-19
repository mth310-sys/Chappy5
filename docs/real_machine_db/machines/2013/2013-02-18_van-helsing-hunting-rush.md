# ヴァン・ヘルシング ハンティングラッシュ

machineName: ヴァン・ヘルシング ハンティングラッシュ
manufacturer: 藤商事
releaseDate: 2013-02-18
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi、HAZUSEが2013-02-18導入で一致。K-Navi 2013年2月新台導入カレンダーでも全国一斉導入開始日を2013-02-18と掲載。
generation: 5号機
systemType: A+ART / リアルボーナス+継続率管理ART / ゲーム数上乗せ+セットストック
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 型式名: **ヴァン・ヘルシングFSB**。
- 検定番号: **2S1210**（HAZUSE）。
- confidence: ANALYSIS_DATABASE_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.6% |
| 2 | 98.7% |
| 3 | 100.9% |
| 4 | 104.2% |
| 5 | 106.3% |
| 6 | 111.3% |

- 2013年当時の天井ハイエナ生活が直接掲載。
- パチマガスロマガ検索インデックスのPAYOUT表は設定1/2が `196.6% / 198.7%` と先頭桁崩れしているが、同時期別資料の96.6/98.7および設定3～6との連続性から検索表示崩れと判断し、検索表示値を実性能として採用しない。
- 後年の実機ゲームセンター掲載では設定4～6が104.2/106.4/111.4%と小数1桁丸め差あり。主値と実質整合。
- confidence: ANALYSIS_PERIOD_DIRECT_PLUS_SECONDARY_CONFIRMATION

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/400.33 |
| 2 | 1/368.04 |
| 3 | 1/343.34 |
| 4 | 1/309.78 |
| 5 | 1/284.59 |
| 6 | 1/231.92 |

- パチマガスロマガがART初当たりを直接掲載。
- 当時天井解析は1/400.8 / 368.7 / 343.1 / 309.6 / 284.7 / 231.2と掲載し、丸め/解析差の範囲で概ね一致。
- confidence: ANALYSIS_HIGH_DIRECT_PLUS_PERIOD_CONFIRMATION

### ボーナス

- VICTORY BONUS: **1/16384**（全設定共通）。
- BIG合成: **1/840.21 / 829.57 / 809.59 / 799.22 / 789.59 / 780.19**。
- ボーナス合成: **1/799.22 / 789.59 / 771.01 / 762.05 / 753.29 / 744.73**。
- ボーナス+ART合算: **1/267.4 / 251.1 / 237.4 / 220.6 / 206.7 / 176.6**。
- K-Navi、HAZUSE、パチマガスロマガで合算値一致。

## baseGamesPer50

- パチマガスロマガ: **約31.4～32.5G/1000円**。
- 当時天井解析は初期時点で「コイン持ちは調査中」としていたため、後に公開されたパチマガスロマガ解析値を主値採用。
- 物差し値: **31.4～32.5G/50枚相当**。
- confidence: ANALYSIS_HIGH_DIRECT

## netIncrease

- ART「HUNTING RUSH」: **約+1.8枚/G**。
- 1セット **45G+α**。
- 継続率: **50% / 70% / 80% / 90%**。
- K-Navi、HAZUSE、P-WORLD、パチマガスロマガで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: **平均約204枚**。
- VICTORY BONUS: **平均約204枚**。
- いずれも298枚以上払い出しで終了するボーナスとしてHAZUSE/P-WORLD/パチマガスロマガで確認。
- ART基本性能: **45G+α / 約+1.8枚/G**。

## modeSpecificMinimumData

### 天井

- **ボーナス＆ART間999G+α**到達で前兆を経由して天井ART発動。
- P-WORLDは999G消化でART突入と説明。ただしドラキュラバトル前兆・ドラキュラバトル中は天井G数に含まれない。
- 当時解析では天井ART時に高継続率70%/80%/90%の選択率が各10%へ上がると掲載。

### CZ / 朝一に関係する表示

- 液晶左下の時計が24時到達で16G固定の「ドラキュラバトル」へ突入。
- ドラキュラバトルからのART期待度は低確時約33%、高確時約80%（HAZUSE）。
- 通常時ステージはトランシルバニアと複数特殊ステージを持つ。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PERIOD_DIRECT__SETTING_CHANGE_COUNTER_MODE_CLOCK_CONFIRMED__POWER_CYCLE_CARRY_CONFIRMED__DISPLAY_DETECTION_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井消化ゲーム数: RESET/CLEAR_CONFIRMED**。
- **内部モード: 移行抽選/再抽選CONFIRMED**。
- **液晶左下の時計: 見た目上は前日表示を引き継ぐが、内部的にはリセット**。
- 液晶ステージ:
  - 前日が **トランシルバニア / 始まりの街**なら見た目を引き継ぐ。
  - それ以外の特殊ステージ滞在なら **トランシルバニアから開始**。
- confidence: ANALYSIS_PERIOD_DIRECT

### carryOverBehavior

- 後述の電源OFF→ON資料では「上記の内部状態が全て引き継がれる」と直接記載されるため、**設定変更を伴わない据え置き+通常電断では内部状態・時計内部進捗等を引き継ぐ挙動として扱う**。
- 天井狙い一覧では本機を `宵×` と分類しており、同一覧の定義は「設定変更で天井G数リセット」。これは設定変更時リセットと整合し、単純電源OFFだけでのリセットを意味しない。
- confidence: ANALYSIS_PERIOD_DIRECT_PLUS_LATER_INDEX_DEFINITION

### powerCycleBehavior

- **電源OFF→ONのみ: 内部状態は全て引き継ぐ**との当時解析記載。
- settingChangeBehaviorで記録した「天井消化G」「内部モード」「時計内部値」も、設定変更を伴わない単純電断では引継ぎ扱い。
- 液晶表示/ステージについても設定変更時専用の再配置条件とは分離し、電断のみでは内部値を消去しない。
- confidence: ANALYSIS_PERIOD_DIRECT

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **RETAIN_CONFIRMED_BY_POWER_CYCLE_CARRY_DESCRIPTION**。
- 電源OFF→ONのみ: **RETAIN_CONFIRMED**。

### ceilingAfterReset

- 設定変更で前日までの999G天井進捗は消去。
- 設定変更専用の固定短縮天井は確認できない。
- 通常天井は再びボーナス＆ART間999G+α。
- `宵×` とされるため、前日深いハマリを設定変更すると朝一宵越し天井狙いは無効。

### modeAfterReset

- 設定変更時: **内部モード移行抽選**。
- 設定変更時の具体的なモード振り分け数値は、機種名/型式名/メーカー名と「設定変更・リセット・朝一・モード移行・振り分け」を組み替え、K-Navi、パチマガスロマガ、HAZUSE、P-WORLD、当時天井解析、後年一覧を横断したが直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き/電源OFF→ON時は内部状態一式引継ぎの当時記載に基づき **RETAIN_CONFIRMED**。

### stateAfterReset

- 設定変更時に内部モード移行抽選あり。
- 高確/超高確等を含む具体的なリセット時状態振り分け率は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き/電源OFF→ON時: 当時資料の「内部状態が全て引き継がれる」により **RETAIN_CONFIRMED**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更による固定短縮天井や公開された朝一当選率優遇は今回確認できない。
- 一方、時計の液晶表示だけは前日表示を保持する場合があるため、**見た目の時計進捗をそのまま内部進捗と誤認しやすい**という朝一特性がある。

### resetPenalties

- 設定変更で999G天井進捗を失う。
- 時計は見た目上引継ぐ場合があるのに内部値はリセットされるため、前日時計表示を根拠に朝一ドラキュラバトル到達を期待すると不利になり得る。

### resetDetection

- **時計表示は設定変更後も見た目上引き継ぐため、時計表示だけでは据え置き判別不可**。
- 前日がトランシルバニア/始まりの街なら設定変更後も表示を引き継ぐため、これらのステージも単独では判別不可。
- 前日がそれ以外の特殊ステージで朝一トランシルバニアへ戻っている場合は設定変更材料になり得るが、店側の事前回し等を考慮し確定判別とはしない。
- 本機固有のリールガックン/初期出目による直接判別は、検索語と資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeGameCounter: **CLEAR_CONFIRMED**。
- normalCeiling: **999G+α**（DB前兆/DB中はカウント対象外）。
- fixedResetShortCeiling: **NONE_CONFIRMED**。
- resetModeNumericDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleCounterModeState: **RETAIN_CONFIRMED_BY_PERIOD_ANALYSIS**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**。

### numericResetData

- settingChangeGameCounter: CLEAR_CONFIRMED
- resetFixedShortCeiling: NONE_CONFIRMED
- normalCeiling: 999G+α
- powerCycleInternalState: RETAIN_CONFIRMED
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: ANALYSIS_PERIOD_DIRECT_FOR_SETTING_CHANGE_COUNTER_CLOCK_AND_POWER_CYCLE_CARRY__MULTI_SOURCE_FOR_NORMAL_CEILING__UNVERIFIED_FOR_RESET_MODE_NUMBERS_AND_GAKKUN

## missingFields

- 設定変更時の具体的な内部モード振り分け数値。
- 設定変更時の高確/超高確等の具体的状態振り分け。
- 本機固有のリールガックン/初期出目による設定変更判別。

## conflicts

- パチマガスロマガ検索インデックスのPAYOUT設定1/2が `196.6% / 198.7%` と表示されるが、当時別資料は96.6/98.7%、設定3以降は100.9%以上で連続するため **SEARCH_INDEX_LEADING_DIGIT_CORRUPTION** と判断し、実性能CONFLICTにはしない。
- ART初当たりはパチマガスロマガ精密値 `1/400.33～1/231.92` と当時天井解析 `1/400.8～1/231.2` に微差。丸め/解析精度差として双方保持し平均しない。
- 後年実機ゲームセンター掲載の設定4～6機械割104.2/106.4/111.4%は主系列104.2/106.3/111.3%と0.1pt差。丸め差候補として注記し、主値を変更しない。

## sources

取得日: 2026-09-06

- K-Navi 機種ページ: https://p-kn.com/slot/1800/
- K-Navi 2013年2月新台導入カレンダー: https://p-kn.com/calendar/201302/
- HAZUSE: https://hazuse.com/machine/pachislot/2S1210/
- P-WORLD: https://www.p-world.co.jp/machine/database/6985
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/a.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/h.php
- パチマガスロマガ 詳細確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/h-1.php
- パチマガスロマガ 1000円あたりゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/c.php
- パチマガスロマガ 機種INDEX: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/13/fuji_slot_13.php
- 天井ハイエナ生活 当時解析/朝一設定変更: https://macerate.seesaa.net/article/265748518.html
- 2-9伝説 天井狙い一覧（宵×定義確認）: https://2-9densetsu.com/blog-entry-311-html/
- スロット専門ゲームセンター スパイダー（後年機械割丸め照合）: https://ameblo.jp/kenchan-retro/entry-12915030762.html
