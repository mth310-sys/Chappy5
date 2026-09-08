machineName: パチスロ攻殻機動隊S.A.C. 2nd GIG
manufacturer: サミー
releaseDate: 2017-03-21
recordNumber: 1060
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ / ゲーム数上乗せ型ART
formalModelName: 攻殻機動隊2／ZS
certificationNumber: 6S1408
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式が2017-01-25に発売を告知し、2017年3月中旬から全国稼働予定と発表。
- HAZUSE・一撃・ちょんぼりすた等で全国導入日2017-03-21が一致。
- HAZUSEの型式DBで正式型式 `攻殻機動隊2／ZS`、検定番号 `6S1408` を確認。
reliability: OFFICIAL_FOR_PRODUCT; ANALYSIS_HIGH/MACHINE_DB_FOR_DATE_MODEL_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.8% |
| 3 | 101.2% |
| 4 | 104.9% |
| 5 | 108.3% |
| 6 | 111.8% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当り | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/249.2 | 1/441.9 | 1/159.3 |
| 2 | 1/245.5 | 1/429.5 | 1/156.2 |
| 3 | 1/241.8 | 1/399.1 | 1/150.6 |
| 4 | 1/228.3 | 1/321.8 | 1/133.6 |
| 5 | 1/217.7 | 1/290.3 | 1/124.4 |
| 6 | 1/208.1 | 1/285.2 | 1/120.3 |
- サミー公式はボーナス+ART合算を設定1～6で1/159.3～1/120.3と公表。
- 設定別詳細は一撃・ちょんぼりすた・後年整理DBで一致。
reliability: OFFICIAL_RANGE_PLUS_ANALYSIS_HIGH_MULTI_SOURCE_DETAILS

## baseGamesPer50
- 約32G/50枚。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「S.A.C.モード」単体: 約1.4枚/G。
- ボーナス込み実効表記: 約1.8枚/G。
- 定義を混同せず分離保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「S.A.C.モード」: 初期50G+α、ゲーム数上乗せ型。
- SUPER BIG BONUS: 約300枚。
- BIG BONUS: 約200枚。
- REG BONUS: 約40枚。
reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常天井: ボーナス＆ART間900G到達で最大16G前兆後ART当選。
- ART当選メイン契機は通常高確率ゾーン/ストーリー高確率ゾーン等のCZ、ボーナス、直撃。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SHORTENED_CEILING_NUMERIC_STATE_DISTRIBUTION_AND_POWER_CYCLE_CARRYOVER
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET。
- 設定変更後の天井: 900Gから500Gへ短縮。
- 内部状態: RESELECT。
- 液晶開始ステージ: 十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 据え置き: 前日の天井ゲーム数進捗・内部状態を基本CARRYOVER。
- 設定変更処理がない場合は900G通常天井契約を継続する。
reliability: ANALYSIS_HIGH_FROM_POWER_CYCLE_COMPARISON_AND_RESET_TABLE

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数CARRYOVER。
- 内部状態: 後発解析資料ではCARRYOVER。
- 一撃2017-04-24時点では状態/液晶ステージを「現在調査中」としていたが、後発解析で状態引継ぎが明記されており、これは値の矛盾ではなく公開時点差として扱う。
- 液晶開始ステージ: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CEILING; ANALYSIS_HIGH_LATER_SOURCE_FOR_STATE

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRYOVER。

### ceilingAfterReset
- 通常: ボーナス＆ART間900G+前兆。
- 設定変更時: ボーナス＆ART間500G+前兆へ短縮。
- resetShortenedCeiling: **500G**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 朝一専用の長期モードやゲーム数ゾーンモードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機は天井以外のゲーム数ゾーン抽選を持たないと解析されている。
reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時に通常/高確/超高確を再抽選。
- 公開振り分け: 通常74.6% / 高確25.0% / 超高確0.4%。
- 高確以上スタート合計: 25.4%。
- 純電源OFF→ONは後発資料で状態CARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 最大の朝一恩恵は通常900G天井が500Gへ400G短縮されること。
- 設定変更時は25.4%で高確以上から開始。
- 当時攻略ではリセット時の狙い目を通常より浅く設定する実用情報が存在。
reliability: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進捗と内部状態を失う。
- 前日が高確/超高確または深い天井進捗だった場合は設定変更が不利になり得るが、機種固有の公開期待値差はSCOPE外/未固定。
reliability: STRUCTURAL_FROM_CONFIRMED_RESET_BEHAVIOR

### resetDetection
- 本機固有の確定的なガックン、ランプ、初期出目等による変更判別は、表記揺れ・「設定変更/リセット/朝一/ガックン/据え置き判別」等を再探索しても高信頼資料を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日最終G数が把握できる場合、900G未満の500G付近で天井ARTが発動すれば設定変更を強く示唆する実用的推測材料となる。
reliability: ANALYSIS_HIGH_FOR_SHORTENED_CEILING; UNVERIFIED_FOR_DIRECT_VISUAL_DETECTION

### numericResetData
#### 設定変更時内部状態振り分け
| 状態 | 振り分け |
|---|---:|
| 通常 | 74.6% |
| 高確 | 25.0% |
| 超高確 | 0.4% |
| 高確以上合計 | 25.4% |

#### 天井比較
| 条件 | 天井 |
|---|---:|
| 通常/据え置き | ボーナス＆ART間900G+前兆 |
| 設定変更 | ボーナス＆ART間500G+前兆 |
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

## dataQualityNotes
- 2017-03-21導入はHAZUSE・一撃・ちょんぼりすた・Pachiseven系で一致。サミー公式は3月中旬全国稼働予定を告知。
- 機械割、ボーナス合算、ART初当り、32G/50枚、ART純増、天井は複数解析で高一致。
- 設定変更時500G短縮天井は一撃とちょんぼりすたで一致。
- 設定変更時状態振り分け74.6/25.0/0.4%は当時解析で公開。
- 純電断時状態は一撃2017-04-24段階では調査中、後発ちょんぼりすたでは引継ぎ。直接矛盾ではなく情報更新時点差として採用。

## conflicts
- material conflict: NONE_CONFIRMED.
- 一撃のボーナス+ART合算設定4は1/133.6、ちょんぼりすた概要は丸め1/134表記。精密値と丸め値としてCONFLICT扱いしない。

## missingFields
- powerCycle/start liquid crystal stage: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific deterministic visual/gakkun reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の全状態移行・CZ内部抽選・上乗せ振り分け: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / サミー発売告知 2017-01-25: https://www.sammy.co.jp/japanese/news/2017/628.html
- MACHINE_DB / HAZUSE 機種概要・型式・検定番号: https://hazuse.com/machine/pachislot/6S1408/genre/209/
- MACHINE_DB / HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S1408/genre/201/
- ANALYSIS / 一撃 機種概要: https://1geki.jp/slot/s_kokaku2/
- ANALYSIS / 一撃 ボーナス確率: https://1geki.jp/slot/s_kokaku2/1/
- ANALYSIS / 一撃 天井・設定変更: https://1geki.jp/slot/s_kokaku2/3/
- ANALYSIS / 一撃 ART概要: https://1geki.jp/slot/s_kokaku2/81/
- ANALYSIS / 一撃 ボーナス概要: https://1geki.jp/slot/s_kokaku2/61/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/sammy-slot/32413/
- MACHINE_DB / Pachinavi: https://pachinavi.net/machines/koukaku-sac-2nd/
- MACHINE_DB / Pachiseven: https://pachiseven.jp/machines/5081/cutout/2
