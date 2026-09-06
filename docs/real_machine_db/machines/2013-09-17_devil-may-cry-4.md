# デビル メイ クライ 4

machineName: デビル メイ クライ 4
manufacturer: エンターライズ
releaseDate: 2013-09-17
releaseDatePrecision: exact_day__knavi__dmm
releaseDateStatus: VERIFIED_EXACT_DAY_MULTI_SOURCE

generation: 5号機
systemType: A+ART / ボーナス+自力高確CZ / ゲーム数上乗せART
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- エンターライズ製5号機「デビル メイ クライ 4」。DMMぱちタウン掲載型式名は **デビルメイクライ4 覚醒YA**。
- K-Navi・DMMぱちタウンでホール導入開始 **2013-09-17** が一致。
- confidence: INDUSTRY_DATABASE_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.2% |
| 3 | 100.2% |
| 4 | 103.1% |
| 5 | 107.6% |
| 6 | 113.3% |

- パチマガスロマガ系、DMMぱちタウン、5号機クロニクルで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合成

| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/266.4 |
| 2 | 1/264.3 |
| 3 | 1/260.1 |
| 4 | 1/256.0 |
| 5 | 1/250.1 |
| 6 | 1/242.7 |

### ART「DEVIL RUSH」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/339.1 |
| 2 | 1/316.1 |
| 3 | 1/317.7 |
| 4 | 1/286.0 |
| 5 | 1/273.3 |
| 6 | 1/216.1 |

- パチマガスロマガ系の設定別掲載値。
- confidence: ANALYSIS_HIGH_DIRECT

## baseGamesPer50

- **約30.3G / 1000円**。
- パチマガスロマガ系「小役確率」に直接掲載。
- confidence: ANALYSIS_HIGH_DIRECT

## netIncrease

- ART「DEVIL RUSH」: **純増約2.1枚/G**。
- 初期ゲーム数: **40 / 80 / 120G + 上乗せ**。
- K-Navi、DMMぱちタウン、パチマガスロマガ系、必勝本で照合。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE + ANALYSIS_HIGH

## basicPayout

- ジャックポットボーナス: **約130枚**。
- エネミーアタックバースト: **約130枚 / 10G**。
- エネミーアタック: **約65枚 / 5G**。
- セイバーアタック: **約65枚 / 5G**。
- ART中は対応するイクシードボーナス/レッツロック系へ変化し、上乗せ契機となる。
- confidence: INDUSTRY_DATABASE_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ART突入の主要経路は、通常時レア役・ボーナス・自力高確ゾーン「STYLISH TIME(ST)」・天井。
- STは **10G+α**、ART期待度30%超。D/C/B/Aからランクアップし、S到達でART当選期待大。
- ST初当たり: 設定1 **1/117.2** → 設定6 **1/72.7**（DMMぱちタウン掲載）。
- 通常時のART抽選状態は **低確 / 高確 / 超高確 / 魔人** の4状態。

## ceiling

- **ボーナス(RT)終了後999G**で天井。
- 天井到達でART当選。必勝本ではボーナス間999Gハマり後、ART確定STへ突入と説明。
- **666GでもST確定**だが、通常の最大天井とは分離して記録。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DIRECT_RESET_AND_POWER_CYCLE_CONTRACT_RECOVERED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数をクリア**。
- ART抽選状態は **再抽選**。
- 液晶ステージは **市街地**。
- 必勝本でも設定変更後に状態移行抽選が行われることを直接確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 「純据え置き」の語で独立してゲーム数・状態・液晶の全契約を列挙した本機固有資料は今回固定できず、**UNVERIFIED_AFTER_RESEARCH**。
- ただし下記 powerCycleBehavior では、設定変更を伴わない電源OFF→ON時に天井G・ART抽選状態を引き継ぐことを直接確認している。
- 据え置き一般論から追加推定はしない。

### powerCycleBehavior

- **電源OFF→ONのみ**:
  - 天井までのゲーム数: **引き継ぐ**。
  - ART抽選状態: **引き継ぐ**。
  - 液晶ステージ: **市街地**。
- 設定変更時と電断時で液晶ステージが同じため、市街地開始だけでは設定変更判別にならない。
- confidence: ANALYSIS_HIGH_DIRECT

### gameCounterReset

- setting change: **RESET / CLEAR**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**（独立直接記述未固定）。
- power OFF→ON only: **KEEP / CARRY OVER**。
- confidence: ANALYSIS_HIGH_DIRECT_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset

- 通常最大天井: **999G**。
- 設定変更時は天井進捗をクリアするが、**設定変更専用の固定短縮天井は確認されない**。
- 666GのST確定は通常ゲーム性のゾーンであり、リセット専用恩恵とは扱わない。
- reset-only shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 本機はゲーム数解除用モードではなく、ART抽選に影響する **低確 / 高確 / 超高確 / 魔人** の4状態を持つ。
- 設定変更後はこの状態を **再抽選**。
- DMMぱちタウンでは設定変更時の状態振り分け表が掲載され、**設定6は62%で高確以上スタート**と明記。
- 全設定の振り分け表は現取得本文では画像内数値を安全にテキスト回収できなかったため、設定6の公開要約値のみ numericResetData に採用。
- confidence: ANALYSIS_HIGH_DIRECT

### stateAfterReset

- setting change: **RESELECT / 再抽選**。
- power OFF→ON only: **KEEP / 引き継ぐ**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**（独立直接記述未固定）。
- 通常時状態: 低確 / 高確 / 超高確 / 魔人。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SETTING_CHANGE__DIRECT_FOR_POWER_CYCLE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後の状態再抽選により、朝一から高確以上で開始する可能性がある。
- 公開要約では **設定6は62%で高確以上スタート**。
- 一律短縮天井やリセット専用ART確定等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時は前日の天井進捗が **クリア**されるため、前日ボーナス後ハマリG数の宵越し価値は失われる。
- それ以外の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更時・電源OFF→ON時とも液晶は **市街地**スタートのため、初期液晶ステージ単独では変更/据え置き判別不可。
- 本機固有のガックン・初期出目・ランプ等による確定的変更判別契約は、表記・型式・「朝一/設定変更/据え置き/電源OFF ON/ガックン」で再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時の状態再抽選について公開数値あり。
- **設定6: 高確以上スタート 62%**（DMMぱちタウン本文要約）。
- 設定1～5の完全な状態振り分けは取得本文が画像表中心で、安全な文字数値回収ができなかったため **UNVERIFIED_FOR_EXACT_FULL_TABLE**。
- reset-only ceiling reduction: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 2025年スマスロ「デビル メイ クライ5 スタイリッシュトライブ」および2021年5号機「デビル メイ クライ5」の設定変更/有利区間/天井情報が検索結果へ大量混入するため、**2013年エンターライズ製 DMC4 / 型式 デビルメイクライ4 覚醒YA** に限定して採用。
- 2018年パチンコ「CRデビルメイクライ4」も別機種として除外。
- 現時点で性能コアの主要数値に実質的CONFLICTは確認していない。

## sources

取得日: **2026-09-06**

1. K-Navi「デビル メイ クライ 4」
   - https://p-kn.com/slot/1914/
   - 導入開始2013-09-17、エンターライズ、ART純増約2.1枚/G、ボーナス獲得枚数。
   - confidence: INDUSTRY_DATABASE_HIGH

2. DMMぱちタウン「デビルメイクライ4」
   - https://p-town.dmm.com/machines/968
   - 型式名、導入2013-09-17、機械割97.1～113.3%、ART 40/80/120G+α、999G天井、設定変更時G数クリア/状態再抽選/市街地、電源OFF→ON時G数・状態引継ぎ/市街地、設定6高確以上62%。
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ「ボーナス確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/07/h.php
   - ボーナス合成、ART初当たり、PAYOUT設定別。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ「小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/07/c.php
   - 1000円あたり30.3G。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ「基本情報」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/07/a.php
   - ART純増約2.1枚/G、各ボーナス基本獲得性能。
   - confidence: ANALYSIS_HIGH

6. パチ＆スロ必勝本「状態移行抽選」
   - https://p.hisshobon.jp/machine/2268/1/41840
   - 低確/高確/超高確/魔人の4状態、設定変更後に状態移行抽選。
   - confidence: ANALYSIS_HIGH

7. パチ＆スロ必勝本「スタイリッシュタイム(ST)」
   - https://p.hisshobon.jp/machine/2268/1/41687
   - ST基本仕様、ボーナス間999G天井→ART確定ST。
   - confidence: ANALYSIS_HIGH

8. パチ＆スロ必勝本「ART デビルラッシュ」
   - https://p.hisshobon.jp/machine/2268/1/41688
   - ART純増約2.1枚/G、初期40/80/120G。
   - confidence: ANALYSIS_HIGH

9. 5号機クロニクル「エンターライズ5号機全機種一覧」
   - https://5goki.com/enterrise
   - 2013/9、機械割97.1/98.2/100.2/103.1/107.6/113.3%を照合。
   - confidence: RETROSPECTIVE_DATABASE_SUPPORT

## missingFields

- 純据え置きについて独立した本機固有の直接契約（天井G・状態・液晶を一括列挙）: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の設定1～5を含む状態振り分け完全表: UNVERIFIED_FOR_EXACT_FULL_TABLE（設定6高確以上62%は直接要約取得）。
- 本機固有ガックン/初期出目/ランプによる変更判別: UNVERIFIED_AFTER_RESEARCH。

## collectionMemo

- 物差し用途に必要な性能コア + resetBehavior v0.7は十分確保。
- 完全再現用の小役別状態移行率、ST中詳細ランクアップ、ART中9状態等は収集対象外として追跡しない。
