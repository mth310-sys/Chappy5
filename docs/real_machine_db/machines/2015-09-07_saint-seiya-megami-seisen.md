# パチスロ聖闘士星矢-女神聖戦-

machineName: パチスロ聖闘士星矢-女神聖戦-
manufacturer: 三洋物産 / SANYO
releaseDate: 2015-09-07
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: K-Naviの2015-07-16内覧会記事が全国導入2015-09-07予定を明記し、HAZUSE・パチビー・複数解析も2015-09-07導入で一致。一部地域差は分離する。
generation: 5号機
systemType: A+ART / ボーナス+ART / 技術介入要素あり
formalModelName: パチスロ聖闘士星矢女神聖戦KD
inspectionNumber: 5S0239
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- canonical導入日: **2015-09-07**。
- 型式名: **パチスロ聖闘士星矢女神聖戦KD**。
- 検定番号: **5S0239**。
- K-Navi当時内覧会記事、HAZUSE、パチビーで導入日を照合。
- confidence: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

市場/通常手順系 canonical:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.8% |
| 3 | 100.0% |
| 4 | 102.8% |
| 5 | 105.2% |
| 6 | 109.0% |

- HAZUSEと5号機クロニクルが上記で一致。
- ちょんぼりすた/すろぱちくえすと系では **96.9 / 98.7 / 99.9 / 102.8 / 105.1 / 109.0%**。平均せず丸め/資料差CONFLICTとして保持。

完全攻略時（通常機械割とは定義分離）:

| 設定 | 完全攻略時機械割 |
|---:|---:|
| 1 | 102.8% |
| 2 | 105.7% |
| 3 | 107.9% |
| 4 | 110.3% |
| 5 | 111.4% |
| 6 | 115.4% |

- 技術介入による別定義値。市場/通常手順機械割と混ぜない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_ROUNDING_FOR_STANDARD_PAYOUT

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/407.1 | 1/662.0 | 1/252.1 | 1/593.3 |
| 2 | 1/399.6 | 1/630.1 | 1/244.5 | 1/572.1 |
| 3 | 1/397.2 | 1/601.2 | 1/239.2 | 1/552.0 |
| 4 | 1/385.5 | 1/580.0 | 1/231.6 | 1/490.4 |
| 5 | 1/383.2 | 1/569.9 | 1/229.1 | 1/419.4 |
| 6 | 1/372.4 | 1/546.1 | 1/221.4 | 1/360.5 |

- HAZUSE精密値。ちょんぼりすた等の丸め値（407/662/251、ART 593等）と整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約32G/50枚**。
- HAZUSE、ちょんぼりすた、導入前業界情報で照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- ART「女神聖戦」単体: **約1.5枚/G**。
- ボーナス込み約2.0枚/Gとする実戦系表記もあるため、ART単体純増とは定義分離。
- confidence: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約204枚**。
- REG: **約48枚**。
- ART「女神聖戦」: **1セット50G+α**。
- K-Navi当時内覧会、パチマガスロマガ、HAZUSEでゲーム性を照合。
- 技術介入の詳細抽選は完全再現用のため収集対象外。

## modeSpecificMinimumData

- 通常時ART抽選状態: **低確 / 高確 / 天国 / 超天国**。
- ART中は別系統の高確レベルが存在するが、物差し用途では詳細全移行表を収集しない。
- 通常天井: **ボーナス間1180G到達でART当選**。
- 重要: **ART当選だけではボーナス間天井カウンタはリセットされない**。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は**ボーナス間天井G数をRESET**。
- **内部モードを再抽選**。
- 朝一ステージは**星矢ステージ**。
- 設定変更専用の短縮天井や朝一専用当選率は、十分な再探索後も確認できない。

### carryOverBehavior

- 据え置き営業では、設定変更されない前提で**ボーナス間天井進捗をCARRYOVER**する宵越し運用と整合する。
- 内部モードも設定変更を伴わない電源OFF→ON時は引継ぎと直接記載される。
- 据え置き専用の別挙動は確認されない。

### powerCycleBehavior

- 設定変更を伴わない**電源OFF→ON**では、当時解析の対照表で**天井G数を引き継ぎ、内部モードも引き継ぐ**。
- ステージは星矢ステージ。
- confidence: ANALYSIS_HIGH（設定変更/電源ON-OFFの直接比較表）。

### gameCounterReset

- 設定変更: **RESET**（ボーナス間1180G天井カウンタ）。
- 据え置き: **CARRYOVER**。
- 電源OFF→ONのみ: **CARRYOVER**。
- ART当選のみ: **天井カウンタはRESETされない**。ボーナス間天井である点を保持する。

### ceilingAfterReset

- 通常天井: **ボーナス間1180G → ART当選**。
- 設定変更後も天井値自体は1180Gから再カウント。
- **リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 設定変更時: **RESELECT / 再抽選**。
- 電源OFF→ONのみ: **CARRYOVER**。
- 通常時ART抽選状態は低確/高確/天国/超天国。
- 設定変更時専用の初期モード振り分け数値: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 公開朝一対照表は「内部モード」を再抽選/引継ぎとして扱う。
- RT状態・ランク等を設定変更/純電断契約として独立固定できる同精度資料は十分な再探索後も確認できず、**UNVERIFIED_AFTER_RESEARCH**。通常時の内部構造から推測転記しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の短縮天井、朝一専用高モード率、保証CZ等の主要恩恵は**NONE_CONFIRMED_AFTER_RESEARCH**。
- 内部モード再抽選そのものは行われるが、公開振り分けがないため有利とは断定しない。

### resetPenalties

- 設定変更すると前日の**ボーナス間天井ハマリ進捗が消失**し、宵越し1180G天井価値を失う。
- これ以外の設定変更専用不利要素は確認されない。

### resetDetection

- 朝一ステージは設定変更/電源ON-OFFとも星矢ステージとされ、**ステージ単独では変更判別不可**。
- 本機固有のガックン変更判別は「女神聖戦/聖闘士星矢女神聖戦/型式KD」「設定変更/リセット/朝一/据え置き/電源ON-OFF/ガックン」等で再探索したが、信頼できる直接資料を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日最終ボーナス間G数と当日の天井挙動による宵越し推測は可能だが、即時確定判別ではない。

### numericResetData

- 設定変更時専用モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- リセット専用天井短縮: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一当選率/恩恵発生率: **UNVERIFIED_AFTER_RESEARCH**。
- 固定数値として使える朝一契約は、**1180G天井を0から再カウント**すること。

## conflicts

1. `STANDARD_PAYOUT_ROUNDING_CONFLICT`
   - HAZUSE / 5号機クロニクル: **97.0 / 98.8 / 100.0 / 102.8 / 105.2 / 109.0%**。
   - ちょんぼりすた系: **96.9 / 98.7 / 99.9 / 102.8 / 105.1 / 109.0%**。
   - 平均せず双方保持。canonicalは複数一致する市場予想系列を採用。
2. `FULL攻略_IS_SEPARATE_DEFINITION_NOT_CONFLICT`
   - **102.8 / 105.7 / 107.9 / 110.3 / 111.4 / 115.4%**は技術介入を前提とする完全攻略値であり、通常手順機械割と統合しない。

## missingFields

- 設定変更時の初期内部モード具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 純電断時のRT状態/LOW-HIGHランク等の細分類契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用短縮天井/保証恩恵/公開朝一当選率: `NONE_CONFIRMED_AFTER_RESEARCH` / `UNVERIFIED_AFTER_RESEARCH`。

## boundaryAudit

- 2015-09-07同日群を「2015年9月7日/2015-09-07/2015/09/07」「導入/ホール導入/新台」等で再監査。
- 正本No.910「パチスロ北斗の拳 強敵」と本No.911「パチスロ聖闘士星矢-女神聖戦-」以外に、全国実ホール導入日を2015-09-07として具体日固定できる未登録5号機を今回追加発見できず。
- よって **2015-09-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とする。
- 次境界は2015-09-08～09-13を監査し、強い既知候補として2015-09-14 アクロス「キングジャック」を保持する。

## sources

取得日: 2026-09-07

1. K-Navi 内覧会速報（2015-07-16） — https://p-kn.com/topics/exhibition/1381/
   - 三洋物産/三洋販売内覧会、全国導入2015-09-07予定、ART 50G+α・約1.5枚/G。
2. HAZUSE — https://hazuse.com/machine/pachislot/5S0239/
   - 型式、検定番号、導入日、機械割、BIG/REG/ART確率、約32G/50枚、内部状態。
3. パチビー — https://www.pachibee.jp/machines/lecture/215070009
   - 2015-09-07導入、5号機ART、純増約1.5枚/G。
4. パチマガスロマガ 機種概要 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/26/sanyo_slot_26.php
   - A+ART、攻略項目体系、当時解析への入口。
5. パチマガスロマガ 概要 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/26/a.php
   - BIG約204枚、REG約48枚、A+ART。
6. パチマガスロマガ ART「女神聖戦」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/26/03.php
   - 50G以上、約1.5枚/G。
7. ちょんぼりすた — https://chonborista.com/slot/sanyo-slot/10433/
   - スペック、通常/完全攻略機械割、1180G天井、設定変更/電源ON-OFF対照表。
8. すろぱちくえすと — https://www.slopachi-quest.com/article/seintoseiya-atenaseisen/
   - BIG約204枚、REG約48枚、ART50G+α・約1.5枚/G、ART当選ではボーナス間天井非リセット。
9. 5号機クロニクル 三洋物産 — https://5goki.com/sanyo
   - 市場予想機械割と完全攻略値を独立掲載。

## confidence

- identity/release: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- standardPayout: CONFLICT_ROUNDING_WITH_MULTI_SOURCE_CANONICAL
- full攻略Payout: ANALYSIS_HIGH_MULTI_SOURCE_SEPARATE_DEFINITION
- resetBehavior ceiling/mode/powerCycle: ANALYSIS_HIGH
- resetSpecificNumericBenefits: UNVERIFIED_AFTER_RESEARCH
- resetDetectionGakkun: NONE_CONFIRMED_AFTER_RESEARCH
