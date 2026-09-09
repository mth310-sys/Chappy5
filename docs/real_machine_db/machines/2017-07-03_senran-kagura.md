machineName: パチスロ 閃乱カグラ
manufacturer: オーイズミ
releaseDate: 2017-07-03
recordNumber: 1100
generation: 5号機
systemType: A+ART / CZ搭載 / ゲーム数上乗せ・セットストック
formalModelName: パチスロ閃乱カグラ／JX
certificationNumber: 7S0245
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `パチスロ閃乱カグラ／JX`、検定番号 `7S0245`、メーカー オーイズミ、導入開始日2017-07-03を確認。
- グリーンべると2017-05-31業界記事で、オーイズミが2017-05-15に機種説明会を実施したA+ART機であることを確認。
- すろぱちくえすと、ちょんぼりすた、パチビーでも2017-07-03導入を照合。
reliability: INDUSTRY_DATABASE_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **97.8%**
- 設定2: **98.9%**
- 設定3: **101.1%**
- 設定4: **103.1%**
- 設定5: **106.9%**
- 設定6: **110.1%**
- HAZUSE、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ボーナス合算
- 設定1: **1/199.8**
- 設定2: **1/197.4**
- 設定3: **1/195.6**
- 設定4: **1/192.2**
- 設定5: **1/190.0**
- 設定6: **1/186.7**

### ART「百花胸乱」初当たり
- 設定1: **1/511.4**
- 設定2: **1/447.2**
- 設定3: **1/455.0**
- 設定4: **1/365.1**
- 設定5: **1/387.9**
- 設定6: **1/295.7**

### CZ「乳乳チャレンジ」初当たり
- 設定1: **1/620.3**
- 設定2: **1/487.5**
- 設定3: **1/500.7**
- 設定4: **1/394.1**
- 設定5: **1/381.3**
- 設定6: **1/325.1**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約33G/50枚**。
- みんスロでは約33.3G/50枚表記。丸め精度差として扱い、canonical比較値は約33G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「百花胸乱」純増: **約1.2枚/G**（ボーナスを除くART単体）。
- ARTは**1セット50G+α**。
reliability: INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## basicPayout
- SUPER爆乳BONUS: **252枚**。
- 爆乳BONUS: **平均153枚**。
- REGULAR BONUS: **平均48枚**。
- 焔紅蓮BONUS: **36枚**（ベル4回入賞で終了するプレミアム系ボーナス）。
- グリーンべると業界記事でSUPER爆乳252枚、爆乳153枚、REG48枚を確認。HAZUSEでも一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常天井: **ボーナス間1081G + 最大32G前兆でART当選**。
- ART途中でボーナスを引かなければボーナス間天井カウントは継続する。
- CZは初期10Gの完走型上乗せチャンスゾーン。全CZ内部抽選は物差しDB対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は**天井ゲーム数RESET**。
- 内部状態も**RESET**。
- 一撃の当時表では設定変更時に「高確移行等の抽選はせず」と明記。
- 液晶開始ステージは**商店街ステージ**。
reliability: ANALYSIS_HIGH_DIRECT_CONTEMPORARY_TABLE

### carryOverBehavior
- 据え置き運用に相当する純電源OFF→ONでは、**天井ゲーム数CARRYOVER / 内部状態CARRYOVER**。
- 液晶開始ステージは商店街ステージへ戻るため、ステージ単独では設定変更/据え置きの直接判別材料にならない。
- 据え置きを独立見出しで記した別系統の高信頼表は今回固定できなかったため、ここでは純電断の直接契約を据え置き運用上の根拠として明示する。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE_CONTRACT

### powerCycleBehavior
- 電源OFF→ONのみ: **天井ゲーム数CARRYOVER / 内部状態CARRYOVER**。
- 液晶開始ステージ: **商店街ステージ**。
reliability: ANALYSIS_HIGH_DIRECT_CONTEMPORARY_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 電源OFF→ON: **CARRYOVER**。
- 据え置き運用: 純電断契約に基づき天井進捗保持。
reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更でボーナス間天井進捗は消滅するが、**設定変更専用の短縮天井は確認されない**。
- 通常天井は引き続き**1081G + 最大32G前兆**。
reliability: ANALYSIS_HIGH_FOR_RESET_AND_NORMAL_CEILING / NONE_CONFIRMED_FOR_SHORTENED_RESET_CEILING

### modeAfterReset
- 本機の通常時主要管理は低確/高確の内部状態で、設定変更専用のゲーム数解除モード・朝一専用モードの公開契約は、表記揺れ・型式・シリーズ名を含め再探索しても確認できなかった。
- **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: UNVERIFIED_FOR_SEPARATE_RESET_MODE_CONTRACT

### stateAfterReset
- 設定変更: **RESET**。
- 当時解析は「高確移行等の抽選はせず」と明記しており、設定変更による高確スタート恩恵は確認されない。
- 電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_DIRECT_CONTEMPORARY_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、高確スタート、専用モード、初当たり優遇などの主要朝一恩恵は**NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_HIGH_STATE_LOTTERY / UNVERIFIED_FOR_ANY_OTHER_UNPUBLISHED_BENEFIT

### resetPenalties
- 設定変更により前日のボーナス間天井進捗が消滅するため、深い宵越しゲーム数を持つ台では据え置きと比較して不利。
- 高確移行等の朝一再抽選恩恵も確認されない。
reliability: ANALYSIS_HIGH

### resetDetection
- 設定変更時・電源OFF→ON時とも液晶は**商店街ステージ**から開始するため、開始ステージだけでは判別不可。
- 本機固有の確定的ガックン、初期出目、ランプによる変更判別は「閃乱カグラ/JX・オーイズミ・設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン」等で検索語を変えて再探索したが、直接根拠を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス/ART終了時の筐体ランプは設定示唆であり、朝一の設定変更判別とは別物なのでresetDetectionへ混同しない。
reliability: ANALYSIS_HIGH_FOR_STAGE / UNVERIFIED_FOR_DETERMINISTIC_GAKKUN

### numericResetData
- 公開された設定変更専用モード振り分け、短縮天井率、高確スタート率などの比較可能数値は**NONE_CONFIRMED_AFTER_RESEARCH**。
- settingChangeCeiling: **1081G + 最大32G前兆（通常天井と同じ。進捗は0から）**。

## conflicts
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- baseGamesDefinition: 約33G/50枚と約33.3G/50枚は丸め精度差でCONFLICT扱いしない。
- ceilingExpression: 1081G+α / 1081G+最大32Gは同一仕様の精度差でCONFLICT扱いしない。

## missingFields
- manufacturer-official exact payoutRateBySetting: UNVERIFIED_AFTER_RESEARCH。
- manufacturer-official resetBehavior document: UNVERIFIED_AFTER_RESEARCH。
- independent high-confidence `据え置き` table separate from direct power-OFF/ON contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun/reset indicator: UNVERIFIED_AFTER_RESEARCH。
- reset-specific numeric mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. HAZUSE パチスロ 閃乱カグラ — https://hazuse.com/machine/pachislot/7S0245/
2. HAZUSE 基本スペック — https://hazuse.com/machine/pachislot/7S0245/genre/201/
3. HAZUSE 設定推測 — https://hazuse.com/machine/pachislot/7S0245/genre/208/
4. グリーンべると「胸おどる爆乳ハイパーパチスロ登場」（2017-05-31） — https://web-greenbelt.jp/00009614/
5. 一撃 天井/設定変更 — https://1geki.jp/slot/s_senrankagura/3/
6. すろぱちくえすと — https://www.slopachi-quest.com/article/sennrann-kagura/
7. ちょんぼりすた — https://chonborista.com/slot/oizumi-slot/38139/
8. P-WORLD — https://www.p-world.co.jp/machine/database/8378
9. パチビー — https://www.pachibee.jp/movies/index/13818
10. みんスロ — https://minslo.com/%E9%96%83%E4%B9%B1%E3%82%AB%E3%82%B0%E3%83%A9/
