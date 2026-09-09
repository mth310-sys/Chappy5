machineName: パチスロ笑ゥせぇるすまん3～笑撃のドーン～
manufacturer: 三洋物産（SANYO）
releaseDate: 2017-09-04
recordNumber: 1130
generation: 5号機（5.5号機世代）
systemType: ART / 規定G数モード+自力CZ・セットストック型
formalModelName: パチスロ笑ゥせぇるすまん3KJ
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- PiDEA Xは2017-07-12の三洋内覧会を報じ、導入（開店）予定日を **2017-09-04** と明記。
- K-Navi、一撃、ちょんぼりすた、すろぱちくえすと、必勝本でも2017-09-04導入で一致。
- 型式名 **パチスロ笑ゥせぇるすまん3KJ** は中古実機流通資料で確認。
- 検定番号は機種名表記揺れ、型式名、三洋/SANYO、検定/認定、7S系等へ検索語を変え、古いDB・流通資料も横断したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: INDUSTRY_FOR_RELEASE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE / ANALYSIS_SINGLE_FOR_FORMAL_MODEL / UNVERIFIED_FOR_CERTIFICATION

## payoutRateBySetting
- 設定1: **97.55%**
- 設定2: **98.44%**
- 設定3: **101.17%**
- 設定4: **105.86%**
- 設定5: **111.74%**
- 設定6: **119.21%**
- 一撃、P-WORLD、複数解析で一致。丸め資料では97.6 / 98.4 / 101.2 / 105.9 / 111.7 / 119.2%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「ドンドンBONUS」初当たり
- 設定1: **1/335.34**
- 設定2: **1/322.54**
- 設定3: **1/290.48**
- 設定4: **1/244.36**
- 設定5: **1/194.43**
- 設定6: **1/148.32**

### CZ「福ZONE」初当たり
- 設定1: **1/239.61**
- 設定2: **1/249.86**
- 設定3: **1/233.08**
- 設定4: **1/235.19**
- 設定5: **1/237.73**
- 設定6: **1/222.88**
- P-WORLDと複数解析で照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約47.6G/50枚**。
- ちょんぼりすた、当時実戦/解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART純増: **約2.0枚/G**。
- PiDEA Xの内覧会記事、一撃、ちょんぼりすた等で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「ドンドンBONUS」: **1セット40G or 100G**、セットストック型。
- ART初当たり時の初期G数公開値: **40G 98.44% / 100G 1.56%**。
- 上位ARTとして「真・ドンドンBONUS」「極・ドンドンBONUS」を搭載。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は **通常A / 通常B / 通常C / 天国** の4モードで規定G数を管理。
- モード別最大天井: **通常A 999G / 通常B 799G / 通常C 499G / 天国 99G**。
- 自力CZ「福ZONE」は5/10/15G継続。
- 通常293G到達時は高確へ必ず移行する公開解析あり。これは設定変更専用恩恵ではなく通常契約として分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_AND_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時: **天井ゲーム数RESET / モード再抽選 / 内部状態は通常1 / 笑ゥポイント再抽選 / 液晶は駅前ステージ**。
- 一撃の設定変更/電源OFF→ON比較と複数解析で照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 「据え置き」を電源OFF→ONとセットで扱う解析表では **天井・内部モード・内部状態・笑ゥポイントをCARRYOVER**。
- ただし「設定据え置きだが電源操作なし」を独立操作として明示した本機固有資料は固定できていないため、純電断契約と完全同義にはせず **CARRYOVER_SUPPORTED_BY_STAY_SETTING_LABEL_BUT_OPERATION_CONFLATED** とする。
reliability: ANALYSIS_SINGLE_DIRECT_STAY_SETTING_LABEL_WITH_OPERATION_CONFLATION

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数CARRYOVER / モードCARRYOVER / 内部状態CARRYOVER**。
- 液晶ステージは **駅前ステージ**。一撃では電断後4時間経過が条件と明記。
- 4時間以内の据え置き電断ではステージを引き継ぐとの解析もある。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON_PLUS_SECONDARY_CORROBORATION

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
- モード別天井は99 / 499 / 799 / 999G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更で通常A/B/C/天国を再抽選するため、朝一はモード選択によって **99G / 499G / 799G / 999G** のいずれかが最大天井となる。
- 固定の「リセット専用○G天井」ではなく、**天国移行率優遇による実質短縮**として扱う。
- 設定変更時の天国移行率: 設定1-4 **40.63%**、設定5 **54.69%**、設定6 **53.13%**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更: **再抽選**。
- 純電源OFF→ON: **CARRYOVER**。
- 設定変更時の天国移行率は設定1-4 **40.63%** / 設定5 **54.69%** / 設定6 **53.13%**。
- 通常A/B/Cの厳密な数値振り分けは公開固定できず、設定5・6は通常C寄りとの定性的解析のみ。全モード表へ推測拡張しない。
reliability: ANALYSIS_HIGH_FOR_TENGOKU_NUMERIC / UNVERIFIED_FOR_FULL_A_B_C_DISTRIBUTION

### stateAfterReset
- 設定変更: **通常1**。
- 純電源OFF→ON: **CARRYOVER**。
- 通常時は通常1/通常2/高確の3状態。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一恩恵は **天国モード移行率優遇**。設定1-4でも40.63%で天国、天国なら最大99G。
- 設定変更時は **笑ゥポイントを必ず5pt以上保持**して開始。
- 笑ゥポイント100pt選択率は **10.16%**。100pt状態でART当選すると真ドンドンBONUS or 極ドンドンBONUSへ昇格するため、朝一の追加恩恵となる。
- リセット時笑ゥポイント振り分け: **5pt 59.38% / 25pt 25.00% / 50pt 5.47% / 100pt 10.16%**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RESET_BENEFITS

### resetPenalties
- 設定変更により前日の天井進行、内部モード、内部状態、笑ゥポイント蓄積は失われる。
- 前日高ポイント/有利モード/深い天井進行がある場合は据え置きより不利になり得るが、設定変更固有の損失率は公開されていないため **NO_NUMERIC_PENALTY_CONFIRMED**。
reliability: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_FOR_NUMERIC_PENALTY

### resetDetection
- 設定変更・長時間電断とも基本の液晶開始は駅前ステージとなるため、開始ステージ単独では確定判別不可。
- 当時攻略資料に **ガックン判別が有効/可能**との記載あり。ただし発生率や対策時の挙動、確定性の定量値は固定できないため **POSSIBLE_GAKKUN_INDICATOR_NOT_DETERMINISTIC**。
- 293G高確ゾーンは内部G数依存とする実践解析があり、レア役等の影響を除けば当日293Gか宵越し293Gかが変更/据え置き推測材料になり得る。ただし攻略実践由来のため確定契約扱いにはしない。
- 第3停止後の液晶タッチで「欲望が溢れてますね～」は笑ゥポイント100pt以上濃厚。設定変更確定ではないが、朝一リセット狙いの補助情報として有用。
reliability: ANALYSIS_SINGLE_FOR_GAKKUN_AND_293G_INFERENCE / ANALYSIS_HIGH_FOR_POINT_INDICATOR

### numericResetData
- resetTengokuRateSetting1to4: **40.63%**
- resetTengokuRateSetting5: **54.69%**
- resetTengokuRateSetting6: **53.13%**
- resetWarauPoint5: **59.38%**
- resetWarauPoint25: **25.00%**
- resetWarauPoint50: **5.47%**
- resetWarauPoint100: **10.16%**
- normalModeCeilingA: **999G**
- normalModeCeilingB: **799G**
- normalModeCeilingC: **499G**
- tengokuCeiling: **99G**
- settingChangeInitialState: **通常1**
- settingChangeStage: **駅前ステージ**
- powerCycleStageAfterLongOff: **駅前ステージ（4時間経過条件）**

## conflicts
- 機械割について一部掲示板転載に設定3 **102.17%** 表記があるが、一撃・P-WORLD・必勝本・複数解析は **101.17%（丸め101.2%）**で一致するため、102.17%は転載誤記と判断しcanonicalから除外。レコードには資料差として残す。
- 「据え置き」と「電源OFF→ON」を同じ列で扱う攻略資料があるため、carryOverBehaviorとpowerCycleBehaviorを完全同義にはせず操作定義差を保持。

## missingFields
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の通常A/B/Cの厳密な全振り分け: **UNVERIFIED_AFTER_RESEARCH**（天国率のみ取得）。
- 設定据え置き・電源操作なしを独立させた本機固有契約: **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
- ガックン発生率/確定性の定量値: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- PiDEA X 内覧会/導入日/ART構造: https://www.pidea.jp/articles/%E7%AC%91%E6%92%83%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%8C%E3%83%89%E3%83%BC%E3%83%B3%EF%BC%81%E3%80%8C%E7%AC%91%E3%82%A5%E3%81%9B%E3%81%87%E3%82%8B%E3%81%99%E3%81%BE%E3%82%933%E3%80%8D%EF%BC%8F%E4%B8%89%E6%B4%8B
- 一撃 機種トップ/スペック: https://1geki.jp/slot/s_warausalesman3/
- 一撃 天井/設定変更/電源OFF ON: https://1geki.jp/slot/s_warausalesman3/3/
- 一撃 モード移行/リセット天国率: https://1geki.jp/slot/s_warausalesman3/42/
- 一撃 朝一立ち回り/笑ゥポイント100pt: https://1geki.jp/slot/s_warausalesman3/5/
- 一撃 通常状態: https://1geki.jp/slot/s_warausalesman3/44/
- P-WORLD ART/CZ/機械割: https://www.p-world.co.jp/machine/database/8461
- ちょんぼりすた スペック/ベース/CZ/天井: https://chonborista.com/slot/sanyo-slot/43684/
- すろぱちくえすと リセット数値/笑ゥポイント: https://www.slopachi-quest.com/article/warau-salesman3/
- 期待値見える化 朝一比較/笑ゥポイント/ガックン/293G判別: https://slotjin.com/slot/warau3-reset/
- K-Navi 導入日: https://p-kn.com/slot/2855/
- 必勝本 スペック/ART構造: https://p.hisshobon.jp/machine/3032/1/65910
- 中古実機流通 型式名: https://store.shopping.yahoo.co.jp/nakaiticom/20248.html
