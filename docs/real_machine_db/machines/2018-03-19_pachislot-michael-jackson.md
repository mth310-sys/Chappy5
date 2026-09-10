# No.1181 パチスロ マイケル・ジャクソン

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ マイケル・ジャクソン
- manufacturer: SANKYO
- releaseDateCanonical: 2018-03-19
- generation: 5.9号機 / 5号機
- systemType: A+ART / リアルボーナス+ゲーム数上乗せART
- formalModelName: `パチスロ マイケル・ジャクソンA`
- certificationNumber: `7S1461`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`パチスロ マイケル・ジャクソンA`、検定番号`7S1461`、導入開始日2018-03-19、メーカーSANKYOを掲載。
- K-Navi、一撃、ちょんぼりすたもホール導入開始2018-03-19で一致。
- 本DBでは2018-03-19をcanonical採用。

## performanceCore

### payoutRateBySetting
- setting1: 96.9%
- setting2: 98.2%
- setting3: 99.1%
- setting4: 101.2%
- setting5: 103.1%
- setting6: 106.1%
- HAZUSE、一撃、ちょんぼりすた、パチマガスロマガで一致。

### initialHitBySetting
ART初当たり:
- setting1: 1/599
- setting2: 1/597
- setting3: 1/596
- setting4: 1/595
- setting5: 1/593
- setting6: 1/593

ボーナス合成:
- setting1: 1/248
- setting2: 1/246
- setting3: 1/245
- setting4: 1/244
- setting5: 1/243
- setting6: 1/242

ボーナス+ART合成:
- setting1: 1/175
- setting2: 1/174
- setting3: 1/173
- setting4: 1/173
- setting5: 1/172
- setting6: 1/172
- ちょんぼりすた、パチマガスロマガ、一撃で整合。

### baseGamesPer50
- setting1-6: 約34.3G/50枚
- HAZUSE、パチマガスロマガ、一撃で一致。

### netIncrease
- ART `MJ FEVER`: ボーナス込み約1.9枚/G。
- P-WORLD、HAZUSE、一撃、パチマガスロマガ系資料で一致。

### basicPayout
- Michael Jackson BONUS: 222枚。
- CB / RANKUP BONUS: 約60枚。
- ART初当たり時は`EXTRA SEVEN RUSH`から開始し、初回最低100G、平均約200Gの初期ゲーム数を獲得。
- ART本体は1セット100G以上+αのゲーム数上乗せ型。

### ceiling
- 通常ゲーム数天井: 非搭載。
- HAZUSE/一撃/ちょんぼりすたで一致。

## modeSpecificMinimumData
- ART `MJ FEVER`を主軸とするA+ART機。
- 通常時はCZ `MV CHALLENGE`、CB `RANKUP BONUS`、Michael Jackson BONUS等を契機にARTを目指す。
- 有利区間1000G相当の消化が確定してJACKPOTカウンタが0になると約500G上乗せとなり、有利区間1500G完走が確定するJACKPOTシステムを搭載。
- ART初当たり時はEXTRA SEVEN RUSHで最低100G、平均約200Gを決定。

## resetBehavior

### settingChangeBehavior
- 天井非搭載のため天井ゲーム数リセットは`NOT_APPLICABLE`。
- 一撃の2018-04-13更新「天井/設定変更」では、設定変更時のRT状態・モード・液晶ステージ・有利区間ランプはいずれも`現在調査中`。
- 機種名/型式/SANKYO/5.9号機と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「有利区間」「ガックン」を組み替え、HAZUSE・一撃・ちょんぼりすた・パチマガスロマガ・K-Navi・P-WORLD等を横断したが、設定変更時のRT/モード/内部状態/有利区間処理を直接固定できる本機固有資料は確認できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 「設定据え置き」を純電源OFF→ONとは別条件として明記した本機固有資料は`UNVERIFIED_AFTER_RESEARCH`。
- 純電断の直接資料を据え置き契約へ自動転記しない。

### powerCycleBehavior
- 一撃の本機専用資料で、電源OFF→ON後（朝4:00をまたいでON）のRT状態は`引き継ぐ`。
- CB中・各CZ中などの滞在状態は復帰中画面を表示し、次レバーで元状態へ復帰。
- dream Island / dream City / dream Central滞在時はdream Islandへ表示移行。
- dream Stage / 神殿ステージ滞在時は元ステージへ復帰。
- 有利区間ランプは`引き継ぐ`。
- よって純電源OFF→ONは、少なくともRT状態・主要滞在状態・有利区間ランプについて`CARRYOVER_CONFIRMED`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- JACKPOTカウンタ/有利区間進行の設定変更時処理: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時は有利区間ランプ引継ぎが直接確認できるが、JACKPOTカウンタ数値そのものの保持を明示する資料は固定できず、一般論から補完しない。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 設定変更時のモード: `UNVERIFIED_AFTER_RESEARCH`（当時一撃資料も調査中）
- 朝一専用モード/専用振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`

### stateAfterReset
- settingChange: RT状態・モード・液晶ステージ等 `UNVERIFIED_AFTER_RESEARCH`
- powerCycle: RT状態およびCB/CZ等主要滞在状態 `CARRYOVER_CONFIRMED`
- carryOverDistinctCondition: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- 本機は有利区間を使用する5.9号機A+ART。
- 設定変更時の有利区間ランプ/有利区間処理は当時一撃資料でも`現在調査中`で、十分な再探索後も本機固有直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の有利区間ランプは`引き継ぐ`ことを直接確認。

### resetBenefits
- 朝一/設定変更専用の短縮天井: `NOT_APPLICABLE_NO_CEILING`
- 朝一専用のART/CZ/初当たり優遇: `NONE_CONFIRMED_AFTER_RESEARCH`
- 公開された設定変更専用の数値的恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetPenalties
- 設定変更専用の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 本機固有のガックン発生条件・確率、初期出目による変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONでは有利区間ランプを引き継ぐため、ランプ状態は前状態継続の観測材料になり得るが、設定変更時ランプ挙動が未確認なので単独の確定変更判別契約とはしない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時だけに適用されるモード振り分け、朝一規定ゲーム以内当選率、CZ優遇率等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- 主要性能値について採用を左右する実質的な数値CONFLICTは今回確認なし。
- ART純増は各資料ともボーナス込み約1.9枚/Gで一致。

## missingFields
- 設定変更時のRT状態・モード・内部状態・有利区間/有利区間ランプ処理: `UNVERIFIED_AFTER_RESEARCH`
- 据え置きを純電断と区別した本機固有挙動: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更時JACKPOTカウンタ/有利区間進行値の扱い: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有ガックン/初期出目の変更判別契約: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — パチスロ マイケル・ジャクソン
   - https://hazuse.com/machine/pachislot/7S1461/
   - 型式`パチスロ マイケル・ジャクソンA`、検定番号`7S1461`、導入2018-03-19、SANKYO、機械割96.9〜106.1%、50枚34.3G、ボーナス獲得性能等。
   - confidence: `ANALYSIS_HIGH`

2. 一撃 — パチスロ マイケル･ジャクソン
   - https://1geki.jp/slot/s_mj/
   - 2018-03-19、ART+ボーナス合算1/175〜1/172、機械割96.9〜106.1%。
   - confidence: `ANALYSIS_HIGH`

3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_mj/3/
   - 2018-04-13更新。天井非搭載。設定変更時RT/モード/液晶ステージ/有利区間ランプは調査中。純電源OFF→ONではRT状態引継ぎ、CB/CZ等は復帰、ステージ別復帰規則、有利区間ランプ引継ぎを確認。
   - confidence: `ANALYSIS_HIGH`

4. 一撃 — ART概要
   - https://1geki.jp/slot/s_mj/81/
   - ART純増約1.9枚/G（ボーナス込み）、初当たりはEXTRA SEVEN RUSH開始。
   - confidence: `ANALYSIS_HIGH`

5. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/46/h.php
   - Michael Jackson BONUS、CB、ボーナス合成、ART初当たり、ボーナス+ART合成、PAYOUTの設定別表。
   - confidence: `ANALYSIS_HIGH`

6. パチマガスロマガ — 小役確率 / 50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/46/c-1.php
   - 50枚あたり34.3G。
   - confidence: `ANALYSIS_HIGH`

7. P-WORLD — パチスロ マイケル・ジャクソン
   - https://www.p-world.co.jp/machine/database/8584
   - ART1セット100G以上+α、ボーナス込み約1.9枚/G、初回最低100G・平均約200G、JACKPOT約500G上乗せ、有利区間1500G完走。
   - confidence: `INDUSTRY_DB`

8. K-Navi — パチスロ マイケル・ジャクソン
   - https://p-kn.com/slot/2956/
   - SANKYO、ホール導入開始2018-03-19、Michael Jackson BONUS 222枚、CB約60枚。
   - confidence: `ANALYSIS_HIGH`

9. ちょんぼりすた — マイケル・ジャクソン
   - https://chonborista.com/slot/sankyo-slot/56275/
   - 2018-03-19、A+ART、純増ボーナス込み約1.9枚/G、34.3G/50枚、天井非搭載、設定別大当たり/機械割。朝一欄の設定変更時内部状態・ステージは調査中。
   - confidence: `ANALYSIS_HIGH`
