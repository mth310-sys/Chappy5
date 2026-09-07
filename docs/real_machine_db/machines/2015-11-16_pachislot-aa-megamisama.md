# パチスロ ああっ女神さまっ

machineName: パチスロ ああっ女神さまっ
manufacturer: D-light（ディ・ライト）
releaseDate: 2015-11-16
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 939
generation: 5号機 / A+ART
systemType: リアルボーナス+A+ART / 疑似REG併用 / CZ
formalModelName: ああっ女神さまっWT
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_POWER_CONTRACT

## identity
- K-Navi、man-soft、スロパチクエスト、DMMぱちタウンでホール導入開始2015-11-16を確認。
- PiDEA（2015-10-23）とグリーンべると（2015-11-09）はフィールズ発表のD-light製A+ART機として確認し、納品は11月/11月中旬予定としているため、全国ホール導入日とは定義を分離。
- DMMぱちタウン、Re.design、複数中古実機DBで型式名「ああっ女神さまっWT」を照合。検定番号は表記揺れ・型式名・メーカー名・検定通過一覧を再探索したが安全に固定できずUNVERIFIED_AFTER_RESEARCH。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.6% |
| 3 | 100.2% |
| 4 | 102.5% |
| 5 | 105.4% |
| 6 | 108.7% |

- man-soft、スロパチクエスト、pacnk、中古実機DBで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとしてART「ノルンRUSH」初当たりを採用。

| 設定 | ART初当たり | ボーナス合算 |
|---:|---:|---:|
| 1 | 1/529.4 | 1/248.2 |
| 2 | 1/507.7 | 1/241.8 |
| 3 | 1/486.1 | 1/236.6 |
| 4 | 1/457.0 | 1/228.3 |
| 5 | 1/423.0 | 1/223.6 |
| 6 | 1/398.0 | 1/219.1 |

- pacnkはART 1/507.8、ボーナス1/241.8等の丸め差あり。定義競合ではなく丸め精度差として保持。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約37G/50枚**。
- man-soft、スロパチクエスト、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ノルンRUSH」単体純増: **約1.1枚/G**。
- ボーナス込みART純増: **約1.4枚/G**。
- PiDEA、グリーンべると、man-soft、スロパチクエストで定義を分けて一致。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- リアルBIG: **約180枚**。
- ART「ノルンRUSH」: **1セット30G以上 / 初期30G+α**。初当たり時は上乗せ特化ゾーン「女神さまっチャレンジ！」から開始。
- 通常時疑似REG: **30G+α**。
- ART中「バカンスREG」: **20G+α**。
- 「女神の愛BONUS」: **50G+α**。
- CZ「天使降臨ゾーン」: **15G、ART期待度約30%**。
- 完全再現用の上乗せ振り分け・小役別抽選は対象外。

## modeSpecificMinimumData
- **ゲーム数天井は非搭載**。スロパチクエスト、ちょんぼりすた、pacnkで一致。
- ただし通常時には「内部消化ゲーム数」の概念があり、**1000G以上でBIG時のART抽選が優遇されるモードへ移行**するとman-softが解析掲載。
- この内部消化ゲーム数は通常の「到達すれば当たり」の天井とは別契約として分離する。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_HIGH_FOR_RESET_NUMERIC_PARTIAL_FOR_CARRYOVER_POWER
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **内部消化ゲーム数をRESELECT**。
- man-softの設定変更直接解析で、設定1〜5は25%、設定6は75%の確率で800G以上スタートが選択される。
- 通常のゲーム数天井は非搭載のため、gameCounterResetは「天井カウンタRESET」ではなく「内部消化G数RESELECT」として管理する。
- 内部状態（高確等）の設定変更時初期振り分けは、本機固有の直接表を十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。

### carryOverBehavior
- 設定変更を行わない据え置き時に、内部消化ゲーム数が前日値を引き継ぐかどうかを直接比較した本機固有資料は、検索語を「据え置き/宵越し/内部消化ゲーム数/朝一/1000G」へ変更し複数系統を再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常の天井は非搭載。
- 内部状態・ステージの据え置き契約もUNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior
- 設定変更なしの純電源OFF→ONについて、内部消化ゲーム数・高確状態・液晶ステージを直接比較した本機固有資料を確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと純電断を自動で同義扱いしない。

### gameCounterReset
- ordinaryGameCeiling: **NOT_APPLICABLE_NO_GAME_CEILING**。
- internalConsumedGamesOnSettingChange: **RESELECT**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常のゲーム数天井: **NOT_APPLICABLE / NONE**。
- ただし設定変更時の内部消化ゲーム数再抽選により、0/200/400/600/800G以上相当からスタートする。
- 800G以上スタートは1000G以上のBIG時ART優遇モードへ早く到達するため、朝一恩恵として分離保存。
- 「リセット天井800G」とは扱わない。

### modeAfterReset
- 通常時の完全なモード体系/全移行表は物差しDB対象外。
- 設定変更時に公開されている「内部消化ゲーム数」再抽選は朝一専用数値として保存。
- 1000G以上でBIG時ART抽選が優遇される状態/モードへ移行する解析あり。
- 据え置き・純電断時の同モード保持契約はUNVERIFIED_AFTER_RESEARCH。

### stateAfterReset
- 設定変更時の高確/内部状態初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き/純電源OFF→ON時の高確状態保持: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の公開朝一恩恵は、設定変更時に内部消化G数が再抽選され、**設定1〜5で25%、設定6で75%が800G以上スタート**となる点。
- 1000G以上でBIG時のART抽選が優遇されるため、800G以上スタート選択時は少ない実遊技G数で恩恵領域へ到達できる。
- 通常の天井短縮とは区別する。

### resetPenalties
- 設定変更固有の公開不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時の内部消化G数引継ぎが未固定のため、前日深いG数を変更で失う不利を確定事項としては保存しない。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶表示による設定変更/据え置き確定級判別は、機種名表記揺れ・型式名「ああっ女神さまっWT」・「朝一/ガックン/リセット判別/設定変更」を横断しても直接資料を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 800G以上スタート選択は内部値であり、朝一外見だけで確定判別する公開法則は確認できない。

### numericResetData
- resetInternalConsumedGameDistribution:
  - setting1to5:
    - 0G_or_more: 74.7%
    - 200G_or_more: 0.1%
    - 400G_or_more: 0.1%
    - 600G_or_more: 0.1%
    - 800G_or_more: 25.0%
  - setting6:
    - 0G_or_more: 24.7%
    - 200G_or_more: 0.1%
    - 400G_or_more: 0.1%
    - 600G_or_more: 0.1%
    - 800G_or_more: 75.0%
- reset800GOrHigherTotal: **25.0% (setting1-5) / 75.0% (setting6)**。
- preferentialBigArtModeThreshold: **internalConsumedGames 1000G+**（man-soft解析）。
- ordinaryGameCeiling: **NONE**。

## conflicts
- pacnkの自動生成「天井（約800G）到達率」欄は、同ページ本文で「天井非搭載」「800Gは設定変更時の内部消化G数振り分け」としているため、**自動抽出表示上の定義混線**と判断。通常天井800Gとして採用しない。
- 型式名について、DMMぱちタウン/Re.design/中古実機DBは「ああっ女神さまっWT」で一致。一方、検定通過確認サイトには「ああっ女神さまっF」の記載もあるが、本導入機との同一性を公的原票で固定できなかったため、検定番号およびF表記の関係は推測しない。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- carryOver internalConsumedGames: `UNVERIFIED_AFTER_RESEARCH`
- carryOver internalState/stage: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCycle internalConsumedGames/internalState/stage: `UNVERIFIED_AFTER_RESEARCH`
- settingChange internal high-state distribution: `UNVERIFIED_AFTER_RESEARCH`
- machine-specific resetDetection: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. K-Navi — パチスロ ああっ女神さまっ
   - https://p-kn.com/slot/2383/
   - 2015-11-16ホール導入、ボーナス+ART、基本仕様。
   - reliability: ANALYSIS_HIGH_PERIOD_DB
2. man-soft — ああっ女神さまっ 解析攻略
   - https://smaslo.man-soft.com/slot-kaiseki/aamegamisama.html
   - 導入日、37G/50枚、設定別ボーナス/ART/機械割、設定変更時内部消化G数再抽選、0/200/400/600/800G以上振り分け、1000G以上BIG時ART抽選優遇。
   - reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET
3. スロパチクエスト — パチスロ ああっ女神さまっ 天井・ヤメ時・スペック・解析
   - https://www.slopachi-quest.com/article/aa-megamisama/
   - 2015-11-16導入、設定別性能、37G/50枚、ART約1.1枚/G・ボーナス込み約1.4枚/G、ゲーム数天井なし。
   - reliability: ANALYSIS_HIGH_PERIOD
4. PiDEA X — ディ・ライト「女神さまっ」上乗せ重視のA+ART
   - https://www.pidea.jp/articles/%E3%83%87%E3%82%A3%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%88%E3%80%8C%E5%A5%B3%E7%A5%9E%E3%81%95%E3%81%BE%E3%81%A3%E3%80%8D%E4%B8%8A%E4%B9%97%E3%81%9B%E9%87%8D%E8%A6%96%E3%81%AEA%2BART
   - 2015-10-23業界記事。D-light製、A+ART、ART約1.1枚/G（ボーナス込み約1.4）、BIG約180枚、納品11月予定。
   - reliability: INDUSTRY
5. グリーンべると — ART中のレア役で100％ゲーム数を上乗せ
   - https://web-greenbelt.jp/00008204/
   - 2015-11-09業界記事。ボーナス1/248〜1/219、ART1/529〜1/398、純増定義、各基本ボーナスG数、納品11月中旬予定。
   - reliability: INDUSTRY
6. DMMぱちタウン — パチスロ ああっ女神さまっ
   - https://p-town.dmm.com/machines/2340
   - 型式名「ああっ女神さまっWT」、2015-11-16導入、機械割範囲。
   - reliability: ANALYSIS_HIGH_DATABASE
7. P-WORLD — パチスロ ああっ女神さまっ
   - https://www.p-world.co.jp/machine/database/7896
   - ART 1セット30G以上、ボーナス込み約1.4枚/G、ゲームフロー。
   - reliability: INDUSTRY_DATABASE
8. ちょんぼりすた — ああっ女神さまっ スロット｜解析まとめ
   - https://chonborista.com/slot/d-light/14419/
   - 導入日、天井なし、37G/50枚、ART純増定義、基本性能。
   - reliability: ANALYSIS_HIGH
9. pacnk — パチスロ ああっ女神さまっ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_aamegamisama.html
   - 設定別ART/ボーナス/機械割、天井非搭載、設定変更時内部消化G数再抽選の補助確認。
   - reliability: ANALYSIS_SECONDARY
10. Re.design — ああっ女神さまっWT
   - https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015100916002001
   - 型式表記、最短納期2015-11-15、A+ART。
   - reliability: INDUSTRY_DATABASE_SECONDARY

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_SCHEDULE
- formalModelName: ANALYSIS_HIGH_MULTI_DATABASE
- inspectionNumber: UNVERIFIED
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY
- noOrdinaryGameCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeInternalConsumedGameReselect: ANALYSIS_HIGH_DIRECT_NUMERIC
- resetNumericDistribution: ANALYSIS_HIGH_DIRECT_NUMERIC
- resetBenefit1000GPreferentialBigArt: ANALYSIS_HIGH_SINGLE_DIRECT
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
