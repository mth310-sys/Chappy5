machineName: ぱちスロ ウルトラセブン
manufacturer: オッケー.（京楽系列）
releaseDate: 2017-09-19
recordNumber: 1138
generation: 5号機（5.5号機世代）
systemType: ART / CZ搭載 / ゲーム数上乗せ型
formalModelName: パチスロウルトラセブンKC
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL_AND_INITIAL_HIT_CONFLICT

## identity
- K-Navi、パチ＆スロ必勝本、パチビー、一撃で2017-09-19導入が一致。
- 2017-08-01のパチビー先行試打会記事、2017-08-04のグリーンべると業界記事でオッケー.製ART機であることを確認。
- 型式は中古実機DBおよびホール機種表記で `パチスロウルトラセブンKC` / `ぱちスロ ウルトラセブン/KC` を確認したためcanonical採用。
- 検定番号は「ぱちスロ/パチスロ」「ウルトラセブンKC」「オッケー」「検定/検定通過/7S」等で検索系統を変えて再探索したが、公報・業界一次資料等の直接値を固定できず UNVERIFIED_AFTER_RESEARCH。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE_FOR_IDENTITY / UNVERIFIED_CERTIFICATION_NUMBER

## payoutRateBySetting
- 設定1: **97.5%**
- 設定2: **98.9%**
- 設定3: **100.3%**
- 設定4: **104.2%**
- 設定5: **107.9%**
- 設定6: **112.6%**
- 一撃・パチ＆スロ必勝本で完全一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「ウルトラバトルモード」初当たり — canonical
- 設定1: **1/548.3**
- 設定2: **1/531.3**
- 設定3: **1/513.6**
- 設定4: **1/449.4**
- 設定5: **1/417.5**
- 設定6: **1/375.1**
- 一撃・パチ＆スロ必勝本で完全一致するためcanonical。

### competing published values
- K-Navi / P-WORLD / すろぱちくえすと系: **1/548.1 / 1/529.4 / 1/516.0 / 1/452.7 / 1/414.1 / 1/375.1**。
- 設定1〜5は単純な丸め差では説明できないため平均化せず `CONFLICT_ART_INITIAL_HIT_TABLE` として保持。
reliability: CONFLICT_WITH_MULTI_SOURCE_SUPPORT_ON_BOTH_TABLES

## baseGamesPer50
- canonical yardstick: **約48G/50枚**。
- ちょんぼりすた、すろぱちくえすと等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ウルトラバトルモード」: **約2.0枚/G**。
- 2017-08-01パチビー先行試打会、2017-08-04グリーンべると業界記事、一撃、P-WORLDで一致。
reliability: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout
- ART「ウルトラバトルモード」: **初期40G or 100G+α**。
- 赤7ダブル揃い時は100Gスタート示唆資料あり。
- ARTはゲーム数上乗せ型。上乗せ後の「セブンアタック」で赤7が揃うと獲得上乗せG数が7倍になるゲーム性。
- 本DBでは内部上乗せ振り分け等の完全再現値は収集対象外。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はレア役直撃および規定ゲーム数で抽選されるCZ「キングジョーバトル」からARTを目指す。
- CZは10G、成功率約32.7〜33%。CZ初当たりは一撃掲載で設定1 1/1094.9〜設定6 1/925.1。
- 通常天井: **ART間1280G消化後、前兆を経由してART**。
- 設定変更時は **777G** へ天井短縮。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_VS_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **ART間天井ゲーム数RESET / 777Gへ短縮**。
- 内部状態は **RESELECT**。
- 設定変更時の内部状態振り分け:
  - 奇数設定1/3/5: **低確39.8% / 通常39.8% / 高確20.3%**
  - 偶数設定2/4/6: **低確30.1% / 通常30.1% / 高確39.8%**
- CZ抽選に関わる規定G数側も期待値見える化の直接比較表では **再抽選** とされる。
- 液晶ステージは一撃等の当時解析で「調査中」。期待値見える化の実戦観測では昼ステージ開始だが、確定契約とはせず観測値として分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き運用では、設定変更を行わないためART間天井進捗・内部状態・CZ抽選側の進捗を引き継ぐ扱い。
- 純電源OFF→ONの直接比較資料で天井・内部状態・CZ抽選ゾーンのCARRYOVERを確認。
reliability: ANALYSIS_HIGH_BY_DIRECT_POWER_CYCLE_COMPARISON

### powerCycleBehavior
- 純電源OFF→ON: **ART間天井ゲーム数CARRYOVER**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- 期待値見える化ではCZ抽選ゾーンも **CARRYOVER**。
- 液晶ステージの本機固有直接契約は一撃で調査中のため **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- settingChange: **RESET**。
- stay setting / pure power OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalCeiling: **ART間1280G + 前兆**。
- resetCeiling: **777G + 前兆**。
- nominal shortening: **503G**（1280G→777G）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 独立した名称付き朝一専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 規定G数のCZ抽選側は設定変更時に再抽選、電源OFF→ON時は引き継ぎとする直接比較資料あり。
- 期待値見える化の新台初日実戦集計では、通常のゾロ目CZゾーンが朝一ではおおむね約60G前倒しに観測された。ただし同記事の「内部的にART後503Gからスタート」説明は筆者推測であり、内部仕様としてcanonical化しない。
reliability: ANALYSIS_HIGH_FOR_RESELECT_CARRYOVER / OBSERVATIONAL_FOR_ZONE_SHIFT

### stateAfterReset
- settingChange odd settings 1/3/5: **低確39.8 / 通常39.8 / 高確20.3%**。
- settingChange even settings 2/4/6: **低確30.1 / 通常30.1 / 高確39.8%**。
- pure power OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一恩恵は通常1280G天井から **777G天井へ503G短縮**される点。
- 偶数設定では設定変更時の高確スタート率 **39.8%**、奇数設定では **20.3%**。
- 実戦集計ではCZ関連ゾーンが通常より前倒しに観測されるが、機種内部仕様の確定数値としては扱わない。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / OBSERVATIONAL_FOR_ZONE_SHIFT

### resetPenalties
- 設定変更専用の固定不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日天井進捗や有利な内部状態は設定変更で失われるが、独立固定ペナルティとは定義しない。

### resetDetection
- 「ガックン」「リセット判別」「朝一出目/ステージ」等を機種名・型式名・メーカー名と組み合わせ、当時解析・回顧資料まで再探索したが、本機固有のガックン発生契約または確定判別手段を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 期待値見える化ではリセット後の実戦上「昼ステージ」を観測しているが、一撃の設定変更/電源OFF比較表は双方の液晶ステージを調査中としており、設定変更確定判別には採用しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- normalCeiling: **1280G + 前兆**
- resetCeiling: **777G + 前兆**
- ceilingShortening: **503G**
- resetStateOddSettingsLow: **39.8%**
- resetStateOddSettingsNormal: **39.8%**
- resetStateOddSettingsHigh: **20.3%**
- resetStateEvenSettingsLow: **30.1%**
- resetStateEvenSettingsNormal: **30.1%**
- resetStateEvenSettingsHigh: **39.8%**
- purePowerCycleGameCounter: **CARRYOVER**
- purePowerCycleInternalState: **CARRYOVER**
- purePowerCycleCzZone: **CARRYOVER**
- resetCzZone: **RESELECT**
- resetObservedStage: **DAY_STAGE_IN_EMPIRICAL_DATA_ONLY / NOT_DETERMINISTIC**
- gakkunDetection: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- ART初当たりは一撃・パチ＆スロ必勝本が **1/548.3 / 1/531.3 / 1/513.6 / 1/449.4 / 1/417.5 / 1/375.1**、K-Navi・P-WORLD・すろぱちくえすと系が **1/548.1 / 1/529.4 / 1/516.0 / 1/452.7 / 1/414.1 / 1/375.1**。設定1〜5は単なる表示丸めを超える差なので `CONFLICT_ART_INITIAL_HIT_TABLE` として両方保持。機械割は各系統で一致。
- 朝一ステージは期待値見える化の実戦値で昼ステージ、一撃の解析表では設定変更・電源OFFとも「調査中」。観測と確定仕様を混ぜず、確定契約はUNVERIFIED。

## missingFields
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更/電源OFF時の液晶ステージ確定契約: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン発生率・確定性・対策時挙動: **UNVERIFIED_AFTER_RESEARCH**。
- CZ規定G数の設定変更時内部オフセットの正確な内部値: **UNVERIFIED_AFTER_RESEARCH**。実戦上の前倒し観測は保存するが筆者推測値は内部仕様化しない。

## sources
取得日: 2026-09-09
- パチビー 先行試打会（2017-08-01、メーカー/基本ART仕様/9月19日導入予定）: https://www.pachibee.jp/pparticles/view/988
- グリーンべると（2017-08-04、ART初当たり概況/40G or 100G+α/純増2.0枚G）: https://web-greenbelt.jp/00009809/
- 一撃 基本スペック（設定別ART・機械割）: https://1geki.jp/slot/s_ultraseven/
- 一撃 天井/設定変更（通常1280G・リセット777G・状態再抽選・電源OFF引継ぎ・朝一状態数値）: https://1geki.jp/slot/s_ultraseven/3/
- 一撃 状態移行抽選（設定変更時状態振り分け）: https://1geki.jp/slot/s_ultraseven/42/
- 一撃 CZ（CZ初当たり/成功率/規定G数）: https://1geki.jp/slot/s_ultraseven/43/
- パチ＆スロ必勝本 基本スペック（2017-09-19/設定別ART/機械割）: https://p.hisshobon.jp/machine/3058/1/66136
- K-Navi（2017-09-19導入/競合ART初当たり表）: https://p-kn.com/slot/2876/
- P-WORLD（オッケー./ART仕様/競合ART初当たり表）: https://www.p-world.co.jp/machine/database/8479
- ちょんぼりすた（48G/50枚、純増2.0枚/G、天井、設定変更時状態）: https://chonborista.com/slot/kyoraku-slot/44095/
- 期待値見える化 リセット（設定変更vs電源OFF、CZゾーン再抽選/引継ぎ、実戦ゾーン観測）: https://slotjin.com/slot/ultra-seven-reset/
- すろぱちくえすと（48G/50枚、競合ART初当たり表、天井/リセット）: https://www.slopachi-quest.com/article/ultra-seven/
- パチマ中古実機DB（型式 `パチスロウルトラセブンKC`）: https://www.pachima.com/c/slot/s_28sonota/S00445
