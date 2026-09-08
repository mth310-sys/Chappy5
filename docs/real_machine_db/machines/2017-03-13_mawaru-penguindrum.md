machineName: パチスロ 輪るピングドラム
manufacturer: 北電子
releaseDate: 2017-03-13
recordNumber: 1058
generation: 5号機 / 5.5号機期
systemType: A+ART / リアルボーナス+ART / CZ
formalModelName: 輪るピングドラム／KU
certificationNumber: 6S1430
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2017-03-13、型式 `輪るピングドラム／KU`、検定番号 `6S1430`、メーカー北電子を確認。
- K-Navi、パチビー、当時解析でも2017-03-13導入が一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE; MACHINE_DB_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.3% |
| 3 | 100.5% |
| 4 | 104.3% |
| 5 | 106.7% |
| 6 | 110.0% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/556 |
| 2 | 1/524 |
| 3 | 1/486 |
| 4 | 1/424 |
| 5 | 1/381 |
| 6 | 1/335 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約33G/50枚。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「生存戦略」: 約1.7枚/G。
- ボーナス込みART純増表記: 約2.0枚/G。
- 定義を混ぜず別系列として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- SUPER BIG BONUS: 最大獲得約240枚。
- PENGUINDRUM CHANCE: 最大獲得約78枚。
- ART「生存戦略」: 1セット30G+α。開始時に7G+αのデスティニータイムを経由。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時ゲーム数天井は非搭載。
- PC（ボーナス）からART非当選のスルー回数天井を搭載。規定は3・5・7・10回、最大10回目でART当選。
- ART単発終了後は次回スルー天井最大7回に短縮される通常契約あり。
- CZは「運命の至る場所」「すりつぶしチャンス」。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_RESET_CARRYOVER_AND_SHALLOWER_RESET_TENDENCY
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- PCスルー回数天井をリセット。
- 内部状態は再抽選。
- 設定変更時は通常より浅いスルー天井規定が選ばれやすいと複数解析で報告。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時のPCスルー回数・内部状態について、純電源OFF→ON資料では引継ぎが明記される。
- 「据え置き」と明示した独立比較表は今回直接固定できなかったため、据え置き固有契約としては `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH` とする。
reliability: UNVERIFIED_DIRECT_WORDING; POWER_CYCLE_CARRYOVER_HIGH

### powerCycleBehavior
- 純電源OFF→ON: PCスルー回数天井を引継ぎ。
- 内部状態を引継ぎ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- 通常ゲーム数天井: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- ART間PCスルー回数: 設定変更でRESET、純電源OFF→ONでCARRYOVER。

### ceilingAfterReset
- 最大10回という上限自体は維持。
- 設定変更後は浅い規定回数が選ばれやすいとされるが、3/5/7/10回の具体的リセット時振り分け数値は直接公開値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SHALLOWER_TENDENCY; UNVERIFIED_FOR_EXACT_DISTRIBUTION

### modeAfterReset
- ゲーム数管理モードは非搭載。
- PCスルー規定は設定変更時に再抽選。
- 朝一専用モードの名称付き契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 低確/高確/超高確の内部状態は設定変更で再抽選、純電源OFF→ONで引継ぎ。
- 設定変更時の低確/高確/超高確の具体的初期振り分けは `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER; UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- PCスルー天井の浅い規定が選ばれやすいことが主要な朝一恩恵。
- 最大10回上限自体は短縮されないため「固定短縮天井」ではなく、規定振り分け優遇として扱う。
reliability: ANALYSIS_HIGH

### resetPenalties
- 前日のPCスルー回数進捗を失う。
- 前日高確/超高確状態も設定変更で再抽選されるため、据え置き時の状態持越し価値を失う可能性あり。
reliability: ANALYSIS_HIGH_FOR_RESET_OF_COUNTER_AND_STATE

### resetDetection
- 設定変更後の開始ステージは繁華街or高倉家とする解析資料あり。
- 本機固有のリールガックンによる確定変更判別は、検索語を変えた再探索後も直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- スルー回数履歴は設定変更で消えるため、前日履歴と当日挙動は客側の推測材料になり得るが確定判別ではない。
reliability: ANALYSIS_SINGLE_FOR_START_STAGE; UNVERIFIED_FOR_GAKKUN

### numericResetData
- 設定変更時の具体的PCスルー規定振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の高確スタート率: `UNVERIFIED_AFTER_RESEARCH`。
- 公開された固定短縮天井G数: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

## dataQualityNotes
- 導入日・型式・検定番号はHAZUSE、導入日はK-Navi/パチビー/当時解析で照合。
- ART初当たり・機械割は複数解析で一致。
- ART純増1.7枚/Gとボーナス込み2.0枚/Gは定義分離。
- 天井はゲーム数ではなくPCスルー回数。設定変更ではカウンタRESETと浅い規定優遇、純電断ではカウンタ/内部状態引継ぎを確認。
- リセット時の具体的規定振り分けは見つからないため推測で数値化しない。

## conflicts
- 明確な性能コアCONFLICTなし。
- `DEFINITION_DIFFERENCE_ART_NET_1_7_VS_BONUS_INCLUDED_2_0`: ART単体純増とボーナス込み表記を別系列保持。

## missingFields
- exact reset PC-through ceiling distribution: `UNVERIFIED_AFTER_RESEARCH`。
- exact reset low/high/super-high initial state distribution: `UNVERIFIED_AFTER_RESEARCH`。
- deterministic machine-specific gakkun/reset detection: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用のCZ/リンゴ/上乗せ詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- MACHINE_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S1103/
- MACHINE_DB / HAZUSE AT/ART: https://hazuse.com/machine/pachislot/6S1103/genre/209/
- ANALYSIS / K-Navi: https://p-kn.com/slot/2709/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/kitadenshi/31328/
- ANALYSIS / 期待値見える化: https://slotjin.com/zone/penguindrum/
- RETROSPECTIVE_ANALYSIS / pacnk: https://pacnk.com/slot/tools/sh_mawarupinkudoramu.html
- MACHINE_MEDIA / パチビー: https://www.pachibee.jp/machines/movie/217020002
