# パチスロ デッドマン・ワンダーランド

machineName: パチスロ デッドマン・ワンダーランド
manufacturer: 北電子
releaseDate: 2015-10-19
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: A+ART / ボーナス + 自力CZ + セット/G数上乗せART
formalModelName: デッドマン・ワンダーランドKC
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 北電子公式製品ページで製品存在を確認。
- 北電子公式検定情報で型式名 **デッドマン・ワンダーランドKC** を確認。
- K-Navi、ちょんぼりすた等でホール導入開始 **2015-10-19** が一致。
- 検定番号は「デッドマン・ワンダーランドKC / 北電子 / 検定番号 / 5S」等へ検索語を変更して再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL_IDENTITY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.9% |
| 3 | 100.8% |
| 4 | 103.9% |
| 5 | 108.5% |
| 6 | 110.9% |
- ちょんぼりすた、すろぱちくえすとで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/452 |
| 2 | 1/409 |
| 3 | 1/398 |
| 4 | 1/313 |
| 5 | 1/242 |
| 6 | 1/213 |
- ちょんぼりすた掲載値をcanonical。主要初当たり比較値はART「G-RUSH」。
- ボーナス確率はBB 1/364→1/345、RB 1/728→1/596、合算 1/243→1/219。
- すろぱちくえすとはART+ボーナス合算を掲載しており定義が異なるため、ART単独値へ混ぜない。
- confidence: ANALYSIS_HIGH

## baseGamesPer50
- **約34G/50枚**。
- ちょんぼりすた、すろぱちくえすと、海外保存DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「G-RUSH」: **約1.6枚/G**（ボーナス込み約1.9枚/G表記資料あり）。
- 北電子公式製品存在、P-WORLD、K-Navi、複数解析資料でART基本仕様を照合。
- confidence: OFFICIAL_EXISTENCE + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: **約150枚**。
- REGULAR BONUS: **約48枚**（P-WORLD/流通資料）。
- ART「G-RUSH」: **1セット40G+α**、G数上乗せ + セットストック型。
- CZ「ドッグレースショウ」: ART期待度約40%。
- confidence: INDUSTRY_DATABASE + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時内部状態は **低確 / 通常 / 高確 / 超高確** の4状態。
- 天井は **ボーナス間1155G + 前兆**。途中でARTに当選してもボーナス間天井はリセットされない。
- 天井到達恩恵は **ART5セット以上**。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 当時解析の直接比較表で **天井RESET / 内部状態（掲載表では内部モード）再抽選**。
- 設定変更後の低確/通常/高確/超高確振り分けが公開されている。
- 設定変更専用の短縮天井は確認されず、通常ボーナス間1155G天井を使用。

### carryOverBehavior
- 据え置きは、設定変更なしの純電源OFF→ON比較から **ボーナス間天井進捗・内部状態CARRYOVER_SUPPORTED** と扱う。
- 据え置き条件を独立見出しで全要素列挙する別系統資料は今回固定できず、電断直接比較により支持。

### powerCycleBehavior
- 当時解析の直接比較表で **電源OFF→ONのみ: 天井引継ぎ / 内部状態引継ぎ**。
- 朝一ステージは資料上「調査中」で、ステージによる電断/変更判別契約は固定できない。
- confidence: ANALYSIS_HIGH_DIRECT_COMPARISON_SINGLE_SOURCE

### gameCounterReset
- 設定変更: **RESET**（ボーナス間天井ゲーム数）。
- 据え置き: **CARRYOVER_SUPPORTED**。
- 純電源OFF→ON: **CARRYOVER_DIRECT**。
- ART当選のみではボーナス間天井をリセットしない。

### ceilingAfterReset
- 設定変更でボーナス間天井進捗はRESET。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井: **ボーナス間1155G + 前兆 / ART5セット以上**。

### modeAfterReset
- 本機の通常時4状態（低確/通常/高確/超高確）を設定変更時に再抽選。
- 朝一専用の別名称G数モード/天国モード等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 公開リセット時状態振り分け:
  - 設定1: 低確70% / 通常5% / 高確20% / 超高確5%。
  - 設定2: 低確68% / 高確22%。
  - 設定3: 低確66% / 高確24%。
  - 設定4: 低確60% / 高確30%。
  - 設定5: 低確58% / 高確32%。
  - 設定6: 低確55% / 高確35%。
- 元ページのHTML表では設定2〜6の通常・超高確セルがrowspan等により省略表示され、取得テキストだけから各5%を自動補完するのは避ける。設定1のみ4状態全数値を完全表示として保存し、設定2〜6は明示セルのみ保存。
- confidence: ANALYSIS_SINGLE_FOR_RESET_NUMERIC_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後は状態再抽選があり、設定1でも高確20% + 超高確5%の公開値。
- 高設定ほど公開表の高確選択率が上がる（設定2 22% → 設定6 35%）。
- 固定短縮天井・強制ART・朝一天国等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 前日のボーナス間ハマリを設定変更で失うため、1155G天井への宵越し価値は消滅。
- 据え置きならボーナス間天井を引き継ぐため、宵越し狙いとの対比が大きい。

### resetDetection
- 朝一ステージは当時資料で調査中。
- 「ガックン / リール / 朝一ステージ / 据え置き / 初期出目」等へ検索語を変更し再探索したが、本機固有の確定的変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日ボーナス間ハマリ + 当日G数が通常天井域へ到達するかは間接的な据え置き推測材料になるが、確定判別とはしない。

### numericResetData
- settingChangeCeiling: **RESET**。
- purePowerCycleCeiling: **CARRY**。
- settingChangeState: **RESELECT**。
- purePowerCycleState: **CARRY**。
- reset state complete row (setting1): **low 70 / normal 5 / high 20 / super-high 5 %**。
- settings2-6 explicit published cells: low **68 / 66 / 60 / 58 / 55%**, high **22 / 24 / 30 / 32 / 35%**。
- fixed shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- `INITIAL_HIT_DEFINITION_DIFFERENCE`: ちょんぼりすたはART単独初当たり1/452→1/213を掲載。すろぱちくえすとは「ART+ボーナス」合算1/157.9→1/107.8を掲載。定義が異なるため競合値として平均せず、物差しの主要初当たりはART単独を採用。
- フリーズ期待枚数は約1500枚 / 約1700枚の二次資料差があるが、物差し必須値ではないため性能コアには採用しない。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- reset state table settings2-6 normal/super-high exact cells: `UNVERIFIED_FROM_RENDERED_SOURCE_STRUCTURE`（推測補完しない）。
- machine-specific gakkun/initial-reel/reset-stage detection: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08
- 北電子公式製品: https://www.kitadenshi.co.jp/slot/deadman/
- 北電子公式検定情報: https://www.kitadenshi.co.jp/slot-kentei/deadman/
- K-Navi: https://p-kn.com/slot/2345/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/12292/
- すろぱちくえすと（スペック/天井）: https://www.slopachi-quest.com/article/deadman-wonderland/
- すろぱちくえすと（天井期待値）: https://www.slopachi-quest.com/article/deadman-kitaichi/
- P-WORLD: https://www.p-world.co.jp/machine/database/7838
- 中一商事（型式/基本仕様）: https://www.nakaiti.com/html/sKitadenshi088.html
- 江戸スロ（型式）: https://edoslot.net/SHOP/deddoman.html
- 2015年導入新台一覧: https://slotnews777.blog.fc2.com/blog-entry-2348.html

## confidence
- identity: OFFICIAL
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: OFFICIAL
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeCeilingAndState: ANALYSIS_HIGH_DIRECT_COMPARISON
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON_SINGLE_SOURCE
- resetNumericData: ANALYSIS_SINGLE_WITH_RENDERING_CAVEAT
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
