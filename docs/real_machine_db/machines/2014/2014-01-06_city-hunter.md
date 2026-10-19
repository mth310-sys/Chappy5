# シティーハンター

machineName: シティーハンター
aliases: パチスロ シティーハンター / シティーハンター（2014年）
manufacturer: オリンピア
modelName: シティーハンターA1
approvalNumber: 3S0879
releaseDate: 2014-01-06
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: 疑似ボーナス + AT / CZ / 内部モード・状態 / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-Navi / HAZUSE / 当時導入カレンダーで **2014-01-06ホール導入開始**を確認。
- HAZUSEで型式名 **シティーハンターA1**、検定番号 **3S0879** を確認。
- 2007年の銀座製「パチスロ シティーハンター」および後年シリーズとは別機種として分離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.6% |
| 2 | 97.5% |
| 3 | 100.3% |
| 4 | 103.5% |
| 5 | 108.4% |
| 6 | 113.9% |

- K-Navi / P-WORLD / HAZUSE系資料で主要値一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/583.3 |
| 2 | 1/567.5 |
| 3 | 1/548.1 |
| 4 | 1/501.8 |
| 5 | 1/460.6 |
| 6 | 1/417.6 |

### 疑似ボーナス合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/199.4 |
| 2 | 1/190.4 |
| 3 | 1/183.4 |
| 4 | 1/177.2 |
| 5 | 1/160.4 |
| 6 | 1/151.9 |

- K-Navi / P-WORLD / HAZUSE系資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31.1G/50枚**。
- HAZUSE本機データで確認。
- confidence: ANALYSIS_HIGH

## netIncrease

- AT「ハンターRUSH」および疑似ボーナスは **純増約2.7枚/G**。
- K-Navi / P-WORLD / HAZUSEで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「ハンターRUSH」: **初期40 / 100 / 150 / 200 / 300G + α**、ゲーム数上乗せ + セットストック型。
- AT終了後はハイウェイモードへ移行し、公開資料上 **約50～80%**でATループ。
- SHOOTING BONUS: ベルナビ **17回**が基本。
- TRIAL BONUS: ベルナビ **5回**が基本。
- SP SHOOTING BONUS: **100G固定**、AT確定の疑似ボーナス。
- 獲得枚数換算は資料ごとの差・条件依存を避け、ナビ回数/ゲーム数という直接仕様を本線に保存。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 規定ゲーム数でのCZ/AT当選率はモードA / B / Cで管理。
- レア役等でのCZ/AT当選率は通常A / 通常B / 高確の状態で管理。
- 通常時の全テーブルは物差しDBの対象外。設定変更後の公開値のみresetBehaviorへ保存。

## ceiling

- 通常時 / ボーナス・AT間の最大天井として **999G**が複数解析資料で確認される。
- 天井到達時は **80%継続AT**が公開恩恵。
- HAZUSEの「通常時999G」と当時攻略資料の「ボーナス＆AT間999G」は表記定義を注記として保持し、平均化等は行わない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DIRECT_RESET_MODE_STATE_NUMBERS_AND_GAME_RESET
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更後は、規定ゲーム数系の **モード再抽選**と、小役系の **内部状態再抽選**が公開解析されている。
- 設定変更時は **天井ゲーム数をリセット**する資料を複数の当時攻略系資料で確認。
- confidence: ANALYSIS_HIGH_PUBLIC_NUMERIC + CONTEMPORARY_ANALYSIS_MULTI_SOURCE

### carryOverBehavior

- 純据え置き時の天井G / モード / 状態を項目別に明示した本機専用の直接契約は、機種名・型式名・メーカー名と「据え置き / 朝一 / 宵越し / 天井 / モード / 状態」を組み替えて再探索したが安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の天井リセットだけから据え置き保持を自動補完しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ**の天井G / モード / 状態の直接契約は、「電源OFF ON / 電源オフ / 電断 / 朝一」等へ検索語を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 2007年銀座版や後年シリーズの電断仕様は混入しない。

### gameCounterReset

- 設定変更: **CLEAR_CONFIRMED_CONTEMPORARY_MULTI_SOURCE**。
- 複数の2014年当時攻略資料で「設定変更時は天井ゲーム数リセット」を確認。
- 純据え置き / 電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常最大天井999Gに対し、リセット後だけ別の固定短縮値になる直接仕様は確認できなかった。
- 設定変更により前日の天井進捗は失われる。

### modeAfterReset

設定変更時モード振り分けとして公開確認できた値:

| 設定 | モードA | モードB | モードC |
|---|---:|---:|---:|
| 1 | 89% | 10% | 1% |

- 公開ページは設定1の数値のみ明示。「設定差もほとんどない」という解説はあるが、設定2～6の具体値は推測補完しない。
- confidence: CONTEMPORARY_ANALYSIS_SINGLE_PUBLIC_NUMERIC

### stateAfterReset

設定変更時状態振り分け:

| 設定 | 通常A | 通常B | 高確 |
|---|---:|---:|---:|
| 1～3 | 45% | 50% | 5% |
| 4～5 | 40% | 50% | 10% |
| 6 | 30% | 50% | 20% |

- 高設定ほど設定変更後の高確スタート率が高い公開数値。
- confidence: CONTEMPORARY_ANALYSIS_SINGLE_PUBLIC_NUMERIC

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定4～5は設定変更後 **10%**、設定6は **20%**で高確スタート。設定1～3は5%。
- 朝一の状態推測・設定狙いに影響しうる比較可能な数値として保存。
- 設定変更専用の天井短縮やAT確定等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時は前日の天井ゲーム数進捗がCLEARされるため、宵越し天井進捗は失われる。
- 設定1公開値ではモードAが89%と大半を占め、当時解析では浅い天井狙いの恩恵が弱い旨が指摘されているが、これは解析評価として扱い、固定仕様の不利抽選とは別扱い。

### resetDetection

- 朝一、レア役を引く前に夕方 / 夜ステージへ移行した場合は高確の可能性が高まり、設定変更後の状態・高設定推測材料になるとの当時解析あり。
- ただしこれは確定判別ではない。設定変更後の状態振り分けに設定差があることを利用した **PROBABILISTIC_MORNING_SIGNAL** として保存。
- 本機固有のガックン等の確定的変更判別は、表記揺れ・型式名で再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時モード（設定1）: A **89%** / B **10%** / C **1%**。
- 設定変更時状態:
  - 設定1～3: 通常A **45%** / 通常B **50%** / 高確 **5%**。
  - 設定4～5: 通常A **40%** / 通常B **50%** / 高確 **10%**。
  - 設定6: 通常A **30%** / 通常B **50%** / 高確 **20%**。

## missingFields

- 純据え置き時の天井G / モード / 状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 電源OFF→ONのみの天井G / モード / 状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 設定2～6の設定変更時モード具体振り分け: UNVERIFIED_AFTER_RESEARCH（公開ページの解説文から推定しない）。
- 本機固有ガックン等の確定変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 2007年銀座製「パチスロ シティーハンター」は別機種。BIG/REG+RT仕様を本機へ混入しない。
- 「通常時999G」と「ボーナス＆AT間999G」は資料表現差を保持。今回は同一最大天井を指す可能性が高いが、定義を勝手に統合しない。
- ALL7のメーカー欄「オリンピア・ゴールドオリンピア」はグループ表記とみなし、型式DB/K-Navi/P-WORLDに合わせmanufacturer本線はオリンピア。

## sources

取得日: 2026-09-06

- K-Navi シティーハンター: https://p-kn.com/slot/1975/
- P-WORLD シティーハンター: https://www.p-world.co.jp/machine/database/7265
- HAZUSE シティーハンター（型式/検定番号/導入日/解析）: https://hazuse.com/machine/pachislot/3S0879/
- HAZUSE AT/ART関連: https://hazuse.com/machine/pachislot/3S0879/genre/209/
- ALL7 2014年1月導入カレンダー: https://www.all7.jp/plans/index/2014/01
- 期待値見える化 2014-01-23「朝一設定変更後のモード移行率」: https://slotjin.com/slot/cityhunter-asaichi/
- スロパチクエスト シティーハンター機種別解析（天井/設定変更時リセット）: https://www.slopachi-quest.com/kisyubetsu/city-hunter/
