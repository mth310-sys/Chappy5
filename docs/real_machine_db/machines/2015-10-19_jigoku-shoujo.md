# パチスロ 地獄少女

machineName: パチスロ 地獄少女
manufacturer: 藤商事
releaseDate: 2015-10-19
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: A+ART / ゲーム数管理ART + CZ + 疑似ボーナス
formalModelName: 地獄少女FSA
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 藤商事公式製品ページで初代「パチスロ 地獄少女」の製品存在と設定別ART確率を確認。
- ちょんぼりすた、スロット新台速報、期待値見える化等がホール導入日 **2015-10-19** で一致。
- 後年の実機流通資料で型式表記 **地獄少女FSA** を複数確認。検定番号は型式名・メーカー名・導入日・検定等へ検索語を変えたが、今回安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL_EXISTENCE + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.5% |
| 3 | 101.5% |
| 4 | 104.0% |
| 5 | 108.0% |
| 6 | 112.5% |
- ちょんぼりすた、スロット新台速報、後年整理資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/374 |
| 2 | 1/353 |
| 3 | 1/334 |
| 4 | 1/325 |
| 5 | 1/299 |
| 6 | 1/271 |
- 藤商事公式スペックと複数解析資料で一致。
- 通常時の地獄少女図柄揃い/CZは実質REG扱いで約1/305、疑似ボーナス確率は設定1 1/1454、設定6 1/1063の掲載値があるが、性能コアの主要初当たりはARTをcanonicalとする。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約39G/50枚**（別整理資料に39.2G表記あり）。
- ちょんぼりすた、スロット新台速報、海外保存整理資料で約39Gが一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「地獄流し」: **約2.3枚/G**。
- 藤商事発表を扱う業界記事、公式系製品資料、P-WORLD、パチマガスロマガ、複数解析で一致。
- confidence: OFFICIAL/INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「地獄流し」: **1セット50G+α**。資料に50G or 100G開始の記載もあり、通常の基本セット比較値は50G+αを採用。
- 疑似BIG: **40G**、平均上乗せ約50G。
- SUPER BIG: **40G**、平均上乗せ約100G。
- ゆずきBONUS: **40G**、平均上乗せ約100G。
- きくりBONUS/地獄少女図柄揃い系: **8G**で、成立状況により役割が変化。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は規定ゲーム数、レア小役直撃、CZからART当選を目指す。
- モードは通常A / 通常B / 天国A / 天国B。天国A/Bは **100G以内のART当選**が基本契約。
- 通常天井は解析上 **ART間970G + 前兆最大32G = 最大1002G**。別資料の「999G」は前兆/表示ゲーム数等の定義差があるため `CEILING_PRESENTATION_DIFFERENCE_999_VS_970_PLUS_32` として保持。
- CZ8Gは液晶天井カウントに含まれず、データカウンターと液晶G数がズレる場合がある。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 当時解析の朝一比較表で **天井ゲーム数RESET / 内部モード再抽選**。
- 朝一開始ステージは **学校 or 街（商店街）ステージ**。
- 設定変更専用の固定短縮天井は確認できず、通常の最大天井契約を使用する。

### carryOverBehavior
- 設定変更なし据え置きは、純電源OFF→ON比較と整合して **天井進捗・内部モードを引継ぎ**として扱う。
- 通常時の低確/高確/超高確など内部状態について、据え置き時の全要素を直接列挙する本機固有資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH_FOR_STATE_ONLY`。

### powerCycleBehavior
- 当時解析の直接比較表で、設定変更なし **電源OFF→ONは天井ゲーム数引継ぎ / 内部モード引継ぎ**。
- 開始ステージは設定変更時と同じく学校 or 街ステージとされるため、開始ステージだけでは変更判別に使えない。
- confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き: **CARRYOVER_SUPPORTED**。
- 純電源OFF→ON: **CARRYOVER_DIRECT**。

### ceilingAfterReset
- 設定変更後も通常天井契約を使用。設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- canonical ceiling representation: **ART間970G + 前兆最大32G = 最大1002G**。
- 999G表記資料は定義差として保持し、平均しない。

### modeAfterReset
- 設定変更: **内部モード再抽選**。
- 据え置き / 純電源OFF→ON: **内部モード引継ぎ**。
- 設定変更時専用の通常A/B/天国A/Bの具体的振り分けは、検索語・資料系列変更後も **UNVERIFIED_AFTER_RESEARCH**。
- ART終了後通常モード移行率は公開されているが、設定変更時専用テーブルとみなして流用しない。

### stateAfterReset
- 通常時には低確/高確/超高確示唆ステージが存在する。
- 設定変更時にそれら内部状態をどう初期抽選するかの本機固有直接値は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後の明確な固定短縮天井や強制天国等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 新台初日1回目を用いた当時実践値では、リセット後の天国ゾーン・偶数百GゾーンはART後より強い傾向を示さず、強い朝一優遇は確認されていない。

### resetPenalties
- 前日の天井進捗と内部モードを失うため、ハマり台や天国/上位モード期待の宵越し価値は設定変更で消失。
- 当時実践値ではリセット後天国がART後より弱めと観測されたが、解析された設定変更専用振り分けではなく `EMPIRICAL_RESET_SAMPLE` として分離する。

### resetDetection
- 開始ステージは設定変更・電源OFF→ONとも学校or街で共通のため、**ステージ単独では判別不可**。
- 本機固有の確定的なリールガックン、初期出目、ランプ契約は表記揺れ・型式・メーカー・朝一/リセット/据え置き/ガックン等で再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。
- 宵越しで前日ハマり+当日G数が通常最大天井相当を超えてART非当選なら設定変更を疑う材料にはなるが、データカウンターと液晶G数のズレに注意。

### numericResetData
- 設定変更時天井: **RESET**。
- 純電源OFF→ON天井: **CARRY**。
- 設定変更時内部モード: **RESELECT**。
- 純電源OFF→ON内部モード: **CARRY**。
- 設定変更専用モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一実践値: **30G以内初当たり 2/356**（新台初日1回目サンプル）。これは設定変更専用解析値ではなく `EMPIRICAL_RESET_SAMPLE`。

## conflicts
- `CEILING_PRESENTATION_DIFFERENCE_999_VS_970_PLUS_32`: 一部解析はART間999G、別の詳細解析は規定970G+前兆最大32G=最大1002G。液晶カウント/CZ非加算/前兆を含むかの定義差があるため平均しない。本DBでは詳細条件が明示された970G+前兆最大32Gをcanonical比較値とする。
- systemTypeは資料に「ART機」「A+ART」と表記差がある。本物の地獄少女図柄揃い(REG扱い)とART/疑似ボーナスを組み合わせるため、本DBでは `A+ART / ゲーム数管理ART + CZ + 疑似ボーナス` と整理。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change-specific mode allocation table: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change low/high-state initial allocation: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific positive gakkun/initial reel cue: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_jigoku/
- 娯楽産業（新機種発表）: https://www.goraku-sangyo.com/%E8%97%A4%E5%95%86%E4%BA%8B%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%9C%B0%E7%8D%84%E5%B0%91%E5%A5%B3%E3%80%8D%E7%99%BA%E8%A1%A8/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/11673/
- 期待値見える化 朝一リセット: https://slotjin.com/slot/jigoku-reset/
- 期待値見える化 天井・モード: https://slotjin.com/zone/jigoku/
- スロット新台速報 / pachislo-data: https://pachislo-data.com/fuji/18817
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/18/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7834
- 必勝期待値クマぱぱ: https://xn--x9ja8p0go69l5jtgfm.com/jigokusyoujo-823
- SPARK実機資料（型式表記）: https://spark777.jp/%E3%80%8E%E8%97%A4%E5%95%86%E4%BA%8B%E3%80%8F%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%9C%B0%E7%8D%84%E5%B0%91%E5%A5%B3%E3%80%90%E3%82%B3%E3%82%A4%E3%83%B3%E4%B8%8D%E8%A6%81%E6%A9%9F%E3%82%BB%E3%83%83/

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: SECONDARY_MULTI_SOURCE
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: OFFICIAL_AND_ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeCeilingAndMode: ANALYSIS_HIGH_DIRECT_COMPARISON_MULTI_SOURCE
- carryOverBehavior: ANALYSIS_HIGH_SUPPORTED_BY_DIRECT_POWER_COMPARISON
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeNumericData: UNVERIFIED_AFTER_RESEARCH
- empiricalResetSample: ANALYSIS_EMPIRICAL_SAMPLE_NOT_INTERNAL_RATE
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
