# サイレントヒル

machineName: サイレントヒル
manufacturer: TAKASAGO（高砂電器産業） / KPE・高砂販売
releaseDate: 2015-10-05
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: AT / 擬似ボーナス+ゲーム数上乗せAT / スラッシュAT
formalModelName: サイレントヒルCP
inspectionNumber: 5S0444
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- KONAMI機種アーカイブで2015年10月稼働開始・5号機ATを確認。
- 2015-08-05の業界発表ではTAKASAGO製、KPE・高砂販売による発表機として確認。
- K-Navi、HAZUSE、パチトラでホール導入開始 **2015-10-05** が一致。
- HAZUSEで型式名 **サイレントヒルCP**、検定番号 **5S0444** を確認。
- confidence: OFFICIAL_FOR_MONTH_AND_TYPE / INDUSTRY_FOR_MAKER / ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_DATE_AND_MODEL

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.5% |
| 3 | 99.1% |
| 4 | 101.8% |
| 5 | 105.0% |
| 6 | 110.7% |
- すろぱちくえすと当時解析と後年設置資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 擬似ボーナス合算 | AT初当たり | ボーナス+AT初当たり合成 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/433.9 | 1/750.2 | 1/274.9 | 1/702.8 | 1/197.6 |
| 2 | 1/409.7 | 1/700.3 | 1/258.5 | 1/654.4 | 1/185.3 |
| 3 | 1/392.5 | 1/672.3 | 1/247.8 | 1/612.7 | 1/176.5 |
| 4 | 1/385.2 | 1/652.8 | 1/242.3 | 1/589.2 | 1/171.7 |
| 5 | 1/363.1 | 1/612.5 | 1/228.0 | 1/548.7 | 1/161.1 |
| 6 | 1/355.4 | 1/595.0 | 1/222.5 | 1/529.3 | 1/156.7 |
- BIG/REG/ボーナス合算/ATはすろぱちくえすと、ボーナス合算とボーナス+AT合成はHAZUSEで照合。
- 「AT初当たり」と「ボーナス+AT初当たり合成」は定義を分離して保持する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約36.5G/50枚**。
- パチマガスロマガ公式攻略とすろぱちくえすとで一致。
- 本機はスラッシュATで、通常時の停止位置によってベル取得と内部天井カウント進行が変わる特殊仕様のため、通常手順（BAR付近狙い）前提の参考値として扱う。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「NIGHTMARE RUSH」: **約3.0枚/G**。
- KONAMI関連公式アーカイブは5号機ATを確認、業界発表・K-Navi・パチマガスロマガ・HAZUSEで純増約3.0枚/Gが一致。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## basicPayout
- NIGHTMARE RUSH: **1セット50G+α**、ゲーム数上乗せ型。
- BIG: **約100枚**。
- SUPER BIG: **約100枚**、当選時点でAT確定。
- REG: **約50枚**。
- 業界発表、パチマガスロマガ、HAZUSEで主要仕様を照合。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時モード: **通常 / 天国 / 超天国**。
- 通常モード天井: **ベルこぼし559回**（通常手順時のG数換算で約1000G）。到達時は擬似ボーナス当選。
- 天国/超天国: **ベルこぼし1〜54回**でボーナス、G数換算で約100G以内。
- モード別天井振り分けの整理資料では、通常モードは37〜54回6.3% / 559回93.8%、(超)天国は1〜18回43.8% / 19〜36回6.3% / 37〜54回50.0%。これは通常時の全抽選再現用ではなく、朝一モード差を解釈する補助値として保持。
- スラッシュAT仕様上、BAR付近を狙わずベルを取得すると内部のベルこぼしカウントが進まず、液晶/データ表示G数と内部天井進捗が乖離し得る。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_CONFLICT_AND_POWER_CYCLE_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時に通常時モードの移行/再抽選が行われることはHAZUSEおよび当時解析で確認。
- ただし設定変更時モード振り分けの具体値に資料競合があるため、平均せず `CONFLICT_RESET_MODE_DISTRIBUTION` として双方保持。
- 設定変更時にベルこぼし天井カウンタをRESETするか、前日の内部ベルこぼし回数を引き継ぐかを直接記した本機固有資料は、朝一/リセット/設定変更/ベルこぼし/天井/据え置き/電源など検索語を変更して再探索しても今回固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 設定据え置き時のベルこぼし天井進捗、モード、内部高確/レア役周期状態の持越し契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機AT機や高砂/KPE他機種の契約から補完しない。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時について、ベルこぼし天井進捗・通常/天国/超天国モード・内部高確/サイレントホラー周期・液晶表示の扱いを本機固有資料で直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 設定変更: **UNVERIFIED_AFTER_RESEARCH**（内部管理はベルこぼし回数）。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井条件そのものは通常モードでベルこぼし559回。
- 外部/液晶G数と内部ベルこぼし進捗が一致しない場合があるため、表示G数のみで宵越し進捗を決めない。

### ceilingAfterReset
- 通常モード天井: **ベルこぼし559回（約1000G目安）**。
- 天国/超天国時: **ベルこぼし1〜54回（約100G以内目安）**。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更時に天国へ移行すれば結果として早い天井契約になるため、「固定天井短縮」と「モード再抽選恩恵」を分離する。

### modeAfterReset
- 設定変更時モード再抽選あり。
- `CONFLICT_RESET_MODE_DISTRIBUTION`:
  - HAZUSE: 設定1 **通常85.0 / 天国15.0%**、設定2 **77.5 / 22.5%**、設定3 **85.0 / 15.0%**、設定4 **75.0 / 25.0%**、設定5 **85.0 / 15.0%**、設定6 **75.0 / 25.0%**。
  - すろぱちくえすと: 設定1 **87.5 / 12.5%**、設定2 **75.0 / 25.0%**、設定3 **87.5 / 12.5%**、設定4 **75.0 / 25.0%**、設定5 **87.5 / 12.5%**、設定6 **66.7 / 33.3%**。
- どちらも設定変更時の通常/天国振り分けとして掲載しているため定義差で吸収せず、数値競合として双方を保持。
- 設定変更時の超天国直行値は、今回確認したテーブルでは独立列として提示されておらず **NONE_CONFIRMED_IN_RESET_TABLES**。

### stateAfterReset
- 通常時に低確/高確相当の内部状態、およびレア小役周期前兆「サイレントホラーシステム」が存在することは確認。
- 設定変更時にそれらをどの状態へ初期化/再抽選するか、据え置き・純電断で引き継ぐかは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後はモード再抽選により天国スタートの可能性あり。
- 公開解析上の天国モードはベルこぼし1〜54回、通常手順なら約100G以内に擬似ボーナス当選となるため、朝一の早当たり要因になる。
- ただし設定変更専用の固定天井短縮や朝一専用AT/CZ優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更による前日天井進捗消失はカウンタ契約自体を固定できないため、ペナルティとして断定しない。
- 設定変更後モードテーブルでは通常スタートが多数を占め、天国スタートは限定的。朝一一律優遇ではない。

### resetDetection
- 本機固有のリールガックン、初期出目、初期ステージ、液晶表示で設定変更/据え置きを確定または高信頼判別できる契約は、検索語・資料系統変更後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- スラッシュATのため液晶/データG数と内部ベルこぼし回数が乖離し得ること自体は設定変更判別には使えない。

### numericResetData
- 設定変更時モード振り分け: 上記 `CONFLICT_RESET_MODE_DISTRIBUTION` を参照。
- 朝一天国スタート時の天井契約: **ベルこぼし1〜54回（通常手順で約100G以内）**。
- リセット専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット専用CZ/AT当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
1. `CONFLICT_RESET_MODE_DISTRIBUTION`
   - HAZUSEとすろぱちくえすとで設定変更時の通常/天国振り分けが一致しない。
   - 設定1: 85/15 vs 87.5/12.5、設定2: 77.5/22.5 vs 75/25、設定3: 85/15 vs 87.5/12.5、設定4: 75/25 vs 75/25、設定5: 85/15 vs 87.5/12.5、設定6: 75/25 vs 66.7/33.3。
   - 平均化せず双方保持。
2. `INITIAL_HIT_DEFINITION_SEPARATION`
   - AT初当たりと、ボーナス+AT初当たり合成は別指標。数値競合ではなく定義を分離。

## missingFields
- setting-change bell-spill ceiling counter reset/carry: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- reset internal state initialization: `UNVERIFIED_AFTER_RESEARCH`。
- reset-specific fixed short ceiling / CZ / AT benefit: `NONE_CONFIRMED_AFTER_RESEARCH`。
- reset-specific gakkun/display detection: `NONE_CONFIRMED_AFTER_RESEARCH`。

## boundaryAudit
- 2015-10-05群のNo.917ルパン三世ロイヤルロード、No.918ベヨネッタ、No.919 Zゴールド・インフィニティに続く未処理候補として処理。
- 同日群には **クジラッキー** が残るため **2015-10-05_GROUP_OPEN** を維持。

## sources — retrieved 2026-09-08
- KONAMI機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2015/silenthill/
- KONAMI関連公式ブログ: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150825.html
- PiDEA X 発表記事: https://www.pidea.jp/articles/%E9%AB%98%E7%A0%82%E3%80%8C%E3%82%B5%E3%82%A4%E3%83%AC%E3%83%B3%E3%83%88%E3%83%92%E3%83%AB%E3%80%8D%E9%83%BD%E5%86%85%E5%BB%83%E7%97%85%E9%99%A2%E3%81%A7%E7%99%BA%E8%A1%A8
- K-Navi: https://p-kn.com/slot/2324/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0444/
- パチトラ: https://p-tora.com/i4479a6/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/10/a.php
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/10/c.php
- すろぱちくえすと スペック/天井: https://www.slopachi-quest.com/article/silenthill/
- すろぱちくえすと モード: https://www.slopachi-quest.com/article/silenthill-mode/
- すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/silenthill/
- 期待値見える化 天井/モード補助: https://slotjin.com/zone/silenthill/
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/11554/comment-page-2/

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- releaseMonth/system: OFFICIAL
- manufacturer: INDUSTRY_HIGH
- formalModelName/inspectionNumber: ANALYSIS_HIGH
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease/basicAT: INDUSTRY_AND_ANALYSIS_HIGH
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeModeReselection: ANALYSIS_HIGH
- resetModeNumericDistribution: CONFLICT
- settingChangeGameCounterReset: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
