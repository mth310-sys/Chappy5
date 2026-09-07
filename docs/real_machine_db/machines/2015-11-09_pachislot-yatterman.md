# パチスロヤッターマン

machineName: パチスロヤッターマン
manufacturer: 三洋物産 / SANYO
releaseDate: 2015-11-09
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 936
generation: 5号機
systemType: ボーナス+ART / ゲーム数上乗せ+継続抽選型ART
formalModelName: パチスロヤッターマンKH
inspectionNumber: 5S0822
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Naviとパチビーで全国ホール導入開始2015-11-09を確認。
- 三洋物産の2015-09発表を扱う当時業界記事では11月上旬ホール導入予定、純増約2.0枚/G・1セット50G+αのART機として確認。
- 検定通過記事で型式名「パチスロヤッターマンKH」、メーカー三洋を確認。
- P-WORLDで検定番号5S0822、型式名パチスロヤッターマンKHを確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 107.0% |
| 6 | 112.0% |

- ちょんぼりすたとスロパチクエストで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとしてART「ビックリドッキリRUSH」初当たりを採用。

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/482.9 |
| 2 | 1/452.9 |
| 3 | 1/426.9 |
| 4 | 1/387.5 |
| 5 | 1/340.8 |
| 6 | 1/298.4 |

ボーナス合成（ヤッター図柄揃い等）:
- 設定1 1/159.8
- 設定2 1/153.8
- 設定3 1/148.3
- 設定4 1/143.1
- 設定5 1/138.3
- 設定6 1/133.8

- K-Naviのボーナス合算とスロパチクエストの精密値が一致。
- ちょんぼりすたのART 1/483～1/294は丸め/設定6差を含むため、精密系列をcanonicalとし丸め系列を参考値として保持。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約43G/50枚**。
- ちょんぼりすた、スロパチクエストで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ビックリドッキリRUSH」: **約2.0枚/G**。
- 三洋発表を扱う当時業界記事、K-Navi、パチビー、P-WORLD、複数解析で一致。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- ヤッターボーナス: **約204枚**。
- ヤッター図柄揃い: **約33枚**。
- ART「ビックリドッキリRUSH」: **初期50G+α**。
- 上位ART「超ビックリドッキリRUSH」: 継続期待度85%以上。

## modeSpecificMinimumData
- 天井①: **ボーナス or ART間700G**到達後、次回ヤッタールーレットでART確定。
- 天井②: **ヤッタールーレット9連続ART非突入**後、次回ヤッタールーレットでART確定。
- P-WORLD、ちょんぼりすた、pacnkで天井構造を照合。
- 通常時内部状態/モードとして通常、高確準備ショート、高確準備ロング、高確、超高確の公開解析あり。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_HIGH_CORE_WITH_NUMERIC_SOURCE_PARSE_LIMIT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井RESET**。
- **内部モード/状態RESELECT**。
- 開始ステージは**格納庫**。
- pacnkも「設定変更で天井までのゲーム数も内部状態もリセット」と明記。

### carryOverBehavior
- 据え置きは設定変更なしの純電源ON/OFF挙動に準じ、**天井進捗・内部モード/状態をCARRYOVER**として整理。
- 前日ハマり/スルー回数を含む天井進捗は設定変更時のみ消去される構造として扱う。

### powerCycleBehavior
- 電源OFF→ONのみ:
  - 天井: **CARRYOVER**。
  - 内部モード/状態: **CARRYOVER**。
  - ステージ: **格納庫**。
- ちょんぼりすたの設定変更/電源ON・OFF直接比較表、およびpacnkの直接記述で照合。

### gameCounterReset
- settingChange: **RESET**。
- carryOver: **CARRYOVER**。
- purePowerCycle: **CARRYOVER**。
- 対象は700G天井およびART非突入スルー天井の進捗を含む天井系カウンタ。個別カウンタごとの内部実装までは収集対象外。

### ceilingAfterReset
- 設定変更後は通常の天井進捗がリセットされる。
- リセット専用固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井そのものは700G+次回ボーナス契機、および9連続ART非突入後の次回ボーナス契機。

### modeAfterReset
- 設定変更時: **RESELECT**。
- purePowerCycle/carryOver: **CARRYOVER**。
- ちょんぼりすたでリセット時モード移行率の公開数値を確認。
- 設定1の完全に可読な振り分け: 通常 **75.0%** / 高確準備ショート **15.0%** / 高確準備ロング **7.5%** / 高確 **2.0%** / 超高確 **0.5%**。
- 同ページの設定2～6行は現行HTML抽出でrowspan/列結合が崩れ、一部数値だけが別列へ見える状態のため、列位置を推測して完全表へ復元しない。可読な原資料セルはsourcesに保存し、後続QAでアーカイブ/別転載から再構成対象とする。

### stateAfterReset
- 設定変更時は内部状態/モード再抽選。
- purePowerCycle/carryOverでは内部状態を引継ぎ。
- 朝一は格納庫ステージから開始するため、液晶ステージだけでは内部状態の完全判定にならない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は内部モード/状態を再抽選し、設定1でも高確準備以上が合計25.0%存在する公開表を確認。
- 固定短縮天井型の朝一恩恵は確認できない。

### resetPenalties
- 前日の700G天井進捗およびART非突入スルー天井進捗、内部モード/状態は設定変更で消去されるため、宵越し狙い価値を失う。
- その他の設定変更固有不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更/純電断どちらでも格納庫ステージ開始のため、開始ステージ単独は変更判別に使えない。
- 本機固有のリールガックン、初期出目、ランプ等による確定的な即時変更判別は、機種名/型式名/三洋/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/変更判別を組み替えて再探索したが、安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井進捗差は事後的な据え置き推測材料になり得るが即時確定判別ではない。

### numericResetData
- resetModeSetting1: 通常75.0% / 高確準備ショート15.0% / 高確準備ロング7.5% / 高確2.0% / 超高確0.5%
- resetModeSetting2to6: SOURCE_TABLE_AVAILABLE_BUT_CURRENT_HTML_ROWSPAN_PARSE_AMBIGUOUS; DO_NOT_INFER_COLUMNS
- resetDedicatedShortCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- resetStartStage: 格納庫

## conflicts
- ART初当たりは精密系列 1/482.9～1/298.4 と、ちょんぼりすた掲載の丸め系列 1/483～1/294 が存在。設定1～5は丸め差相当だが設定6は差が大きいため平均せず、精密系列をcanonical、丸め系列を `CONFLICT_SECONDARY_SETTING6` として保持。
- リセット時モード移行率の設定2～6は、現存ページのHTML抽出時にrowspan/列位置が崩れる。数値そのものを捨てず、列位置を推測補完しない。

## missingFields
- resetDetection / reelGakkun: `UNVERIFIED_AFTER_RESEARCH`
- resetModeDistribution setting2to6 exact columns: `PARTIAL_SOURCE_RENDERING_AMBIGUITY_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. K-Navi — パチスロヤッターマン
   - https://p-kn.com/slot/2353/
   - 三洋物産、2015-11-09ホール導入、ボーナス合算、ART仕様。
   - reliability: ANALYSIS_HIGH / PERIOD_DB
2. K-Navi — 新台導入カレンダー 2015年11月
   - https://p-kn.com/calendar/201511/
   - 2015-11-09全国一斉導入パチスロが本機1機であることを確認。
   - reliability: INDUSTRY_PERIOD_CALENDAR
3. ニッカンアミューズメント — 三洋 新機種「パチスロヤッターマン」発表
   - https://www.nikkansports.com/amusement/pachinko/news/1536037.html
   - 2015-09-10、三洋販売発表、純増約2.0枚/G、1セット50G+α、11月上旬導入予定。
   - reliability: INDUSTRY_PERIOD_REPORT
4. ニッカンアミューズメント — 三洋物産「パチスロ ヤッターマン」発表
   - https://www.nikkansports.com/amusement/pachinko/news/1539152.html
   - 2015-09-16内覧会、ART純増2.0枚/G、50G+α。
   - reliability: INDUSTRY_PERIOD_REPORT
5. パチビー — パチスロ ヤッターマン
   - https://www.pachibee.jp/machines/index/215100012
   - 2015-11-09、5号機ART、204枚/33枚、50G+α、純増約2.0枚/G。
   - reliability: INDUSTRY_SECONDARY
6. P-WORLD — パチスロヤッターマン
   - https://www.p-world.co.jp/machine/database/7845
   - 型式パチスロヤッターマンKH、検定番号5S0822、天井700G/9スルー、基本獲得性能。
   - reliability: INDUSTRY_DB
7. p-media — パチスロヤッターマン検定通過
   - https://p-media.info/パチスロヤッターマン検定通過／三洋バージョン/
   - 2015-09-10、型式名パチスロヤッターマンKH、メーカー三洋。
   - reliability: INDUSTRY_PERIOD_REPORT
8. ちょんぼりすた — ヤッターマン スロット 完全攻略解析
   - https://chonborista.com/slot/sanyo-slot/11914/
   - 機械割、ART初当たり丸め系列、43G/50枚、700G/9スルー天井、設定変更/電源ON・OFF比較、リセット時モード表。
   - reliability: ANALYSIS_HIGH_DIRECT_COMPARISON
9. スロパチクエスト — パチスロ ヤッターマン 天井恩恵・解析
   - https://www.slopachi-quest.com/article/yatterman/
   - 精密ART初当たり、機械割、ボーナス合算、43G/50枚、純増2.0枚/G。
   - reliability: ANALYSIS_HIGH
10. pacnk — パチスロヤッターマン
   - https://pacnk.com/slot/2015/yatterman/top.php
   - 設定変更で天井/内部状態リセット、電源ON・OFFで天井/内部状態引継ぎ、両方格納庫開始。
   - reliability: ANALYSIS_SECONDARY_DIRECT_COMPARISON
11. 三洋物産検定通過回顧DB
   - https://q-and-a.hatenablog.com/entry/三洋物産の検定通過
   - 2015-09-10 パチスロ ヤッターマン KH（回胴）を照合。
   - reliability: SECONDARY_ARCHIVE

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: INDUSTRY_HIGH_MULTI_SOURCE
- inspectionNumber: INDUSTRY_DB
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- resetGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- purePowerCycle: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeDistributionSetting1: ANALYSIS_HIGH_DIRECT_TABLE
- resetModeDistributionSetting2to6: PARTIAL_SOURCE_RENDERING_AMBIGUITY
- resetDetection: UNVERIFIED_AFTER_RESEARCH
