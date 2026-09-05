# パチスロ 創聖のアクエリオンII

machineName: パチスロ 創聖のアクエリオンII
manufacturer: SANKYO
releaseDate: 2013-05-07
releaseDatePrecision: exact_day
generation: 5号機
systemType: ボーナス + ART
recordStatus: PARTIAL_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-05-07**。K-Navi、HAZUSE、パチビーで一致。
- SANKYO公式オンライン博物館も導入年月を2013.05として掲載。
- formalModelName: **パチスロ創聖のアクエリオンII G**（HAZUSE）。
- inspectionNumber: **2S1348**（HAZUSE）。
- confidence: OFFICIAL_AND_ANALYSIS_HIGH

## payoutRateBySetting

- 設定別機械割は検索語・資料系統を変えた今回の再探索で、一次/準一次の安全な直接表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- P-WORLDのページ見出しは「機械割」を含むが、取得本文では設定別PAYOUT表が露出しなかったため推測補完しない。

## initialHitBySetting

ART初当たり（SANKYO公式、P-WORLDで実質一致）:

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/399.0 |
| 2 | 1/349.8 |
| 3 | 1/340.8 |
| 4 | 1/308.3 |
| 5 | 1/291.2 |
| 6 | 1/230.3 |

ボーナス合算（SANKYO公式）:

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/266 |
| 2 | 1/263 |
| 3 | 1/260 |
| 4 | 1/251 |
| 5 | 1/257 |
| 6 | 1/245 |

ボーナス+ART合算（SANKYO公式 / P-WORLD）:

| 設定 | 合算 |
|---|---:|
| 1 | 1/159（P-WORLD 1/159.8） |
| 2 | 1/150（P-WORLD 1/150.2） |
| 3 | 1/147（P-WORLD 1/147.5） |
| 4 | 1/138（P-WORLD 1/138.4） |
| 5 | 1/136（P-WORLD 1/136.5） |
| 6 | 1/118（P-WORLD 1/118.8） |

- confidence: OFFICIAL_AND_MULTI_SOURCE_HIGH

## baseGamesPer50

- 十分な再探索後も本機固有の50枚ベースを安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## netIncrease

- ART「創聖RUSH」: **約1.5枚/G**。
- K-Navi、P-WORLD、HAZUSE、パチビー、パチマガスロマガで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「創聖RUSH」: **1セット30～200G+α / 純増約1.5枚/G**。
- SUPER BIG: **約216枚**。
- BIG: **約210枚**。
- REG: **約48枚**。
- SANKYO公式はARTをゲーム数変動型として説明。K-Navi / HAZUSE / P-WORLD / パチマガスロマガでART構造を照合。

## modeSpecificMinimumData

- ART初当たり時の初期ゲーム数候補は **30 / 50 / 70 / 90 / 120 / 150 / 180 / 200G**（HAZUSE）。
- CZ「不動モード」: **10G固定、ART期待度約50%**、SPリプレイ確率約1/3（HAZUSE）。
- ART中は状態により不動ナビ発生率/ナビ率が変化。
- 天井はK-Navi/P-WORLD/パチビーで「天井あり」までは確認できるが、今回取得できた高品質本文では本機固有の発動ゲーム数と条件を安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。ボーナス間とART間の複数天井を示唆する当時Q&Aが存在するため、単一数値への単純化を避ける。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NO_MACHINE_SPECIFIC_DIRECT_RESET_CONTRACT_FIXED_AFTER_MULTI_ROUTE_SEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本機固有の「設定変更時にゲーム数天井をCLEAR/RETAINする」「内部状態/ART関連状態を再抽選・引継ぎする」という直接契約は、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/状態/ガックンを組み替えて当時解析・古いDB・現存回顧資料を再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機挙動から推測補完しない。

### carryOverBehavior

- 純据え置きの本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 単純電源OFF→ONのみの天井ゲーム数、内部状態、ARTストック/準備状態の扱いは本機固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 本機固有の通常天井条件自体に複数系統があることを示す資料断片があり、設定変更後の具体天井数値は今回固定せず `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset

- 設定変更専用モード振り分け/移行先は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時/電断時の低確・高確等の状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 本機固有の設定変更専用朝一恩恵を直接数値で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetPenalties

- 本機固有の設定変更専用不利を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、液晶ステージ、ランプ等による設定変更判別契約を十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- settingChangeGameCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleGameCounter: UNVERIFIED_AFTER_RESEARCH
- settingChangeMode: UNVERIFIED_AFTER_RESEARCH
- powerCycleMode: UNVERIFIED_AFTER_RESEARCH
- settingChangeState: UNVERIFIED_AFTER_RESEARCH
- powerCycleState: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: PARTIAL__RESET_SPECIFIC_DIRECT_SOURCE_NOT_FIXED

## missingFields

- payoutRateBySetting: `UNVERIFIED_AFTER_RESEARCH`
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`
- exactCeilingConditionsAndNumbers: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeGameCounter: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleContract: `UNVERIFIED_AFTER_RESEARCH`
- resetModeStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- publicMorningNumbers: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- NONE_FIXED_FOR_VALUES_ADOPTED.
- 天井は複数契約の存在を示す当時資料断片があるため、具体数値を未検証のまま統合しない。

## sources

retrievedAt: 2026-09-06

- SANKYOオンライン博物館（公式、導入年月、ボーナス/ART設定別確率、機種構造）: `https://www.sankyo-fever.jp/collection/547/`
- K-Navi（2013-05-07、ART 30～200G、約1.5枚/G）: `https://p-kn.com/slot/1840/`
- HAZUSE（型式名、検定番号、2013-05-07、ART/CZ/獲得枚数）: `https://hazuse.com/machine/pachislot/2S1348/`
- P-WORLD（設定別ボーナス/ART初当り、ART構造）: `https://www.p-world.co.jp/machine/database/7048`
- パチビー（2013-05-07、5号機ART、天井あり、約1.5枚/G）: `https://www.pachibee.jp/movies/index/9325`
- パチマガスロマガ（ART純増約1.5枚/G、SBB/BIG/REG獲得目安）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/31/01.php`
- パチ＆スロ必勝本（本機解析ページ群、状態/ART抽選資料）: `https://p.hisshobon.jp/machine/2199/1/40499`
- ALL7 2013年5月一覧（5/7境界候補列挙。キャッツ・アイの日付は本機専用資料と競合するため採用せず）: `https://www.all7.jp/plans/index/2013/05`
