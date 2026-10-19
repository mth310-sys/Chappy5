# パチスロ偽物語

machineName: パチスロ偽物語
manufacturer: Sammy（サミー）
releaseDate: 2016-02-22
recordNumber: 958
generation: 5号機
systemType: A+ART / CZ
formalModelName: 偽物語／ZS
certificationNumber: 5S1298
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- Sammy公式は2016-01-15に「パチスロ偽物語」の発売を発表。HAZUSE、K-Navi、パチ7、必勝本等で2016-02-22導入を照合。
- 型式名「偽物語／ZS」、検定番号「5S1298」はHAZUSEで確認。
- 2016-07-04導入の別スペック「A-SLOT偽物語」と混同しない。

## payoutRateBySetting
通常掲載値（一般的な市場スペック表）:
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.3% |
| 3 | 100.9% |
| 4 | 104.3% |
| 5 | 108.6% |
| 6 | 112.1% |

完全攻略時:
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.5% |
| 2 | 100.1% |
| 3 | 101.7% |
| 4 | 105.2% |
| 5 | 109.5% |
| 6 | 113.1% |

- 通常掲載値と完全攻略時を定義差として分離し、平均化しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DEFINITION_SEPARATED

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/199.8 | 1/567.0 | 1/147.7 |
| 2 | 1/195.0〜195.1 | 1/569.5 | 1/145.3 |
| 3 | 1/190.5 | 1/545.0 | 1/141.2 |
| 4 | 1/186.2 | 1/465.0 | 1/132.9 |
| 5 | 1/182.0 | 1/409.1 | 1/126.0 |
| 6 | 1/178.1 | 1/359.8 | 1/119.1 |

- 設定2ボーナス合算の1/195.0・1/195.1は丸め差として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約35G/50枚**。
- 周辺資料に **34.9〜35.9G** 表記あり。固定精密値とせず約35Gとして比較に使用。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「倖時間（ハッピータイム）」: **約1.2枚/G**。
- ボーナス込みでは約2.0枚/Gとする資料もあるため、ART単独純増と混同しない。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG: **150枚獲得**。
- ART「倖時間」: **1セット20G**。
reliability: OFFICIAL_INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常天井: **BIGおよびART間999G+前兆でART発動**。
- CZ「解呪ノ儀」、上位「和解ノ儀」を経由してARTを目指すA+ART構造。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_MULTI_SOURCE_WITH_NUMERIC_RESET_STATE_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **解呪抽選状態を再抽選**。
- 液晶開始ステージは **家ステージ**。

### carryOverBehavior
- 据え置き時は天井進捗・内部状態を引き継ぐものとして複数解析が一致。
- 液晶は朝一に家ステージとなるため、ステージ単独では設定変更/据え置きを判別できない。

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数CARRYOVER / 状態CARRYOVER / 家ステージ開始**。
- 設定変更と純電断で内部契約が異なる一方、液晶開始ステージは同じ。

### gameCounterReset
- setting change: **RESET_CONFIRMED**。
- carry-over / pure power cycle: **CARRYOVER_CONFIRMED**。

### ceilingAfterReset
- 通常天井999G+前兆に対して、設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更により天井進捗自体は0から再スタート。

### modeAfterReset
- 朝一専用のゲーム数モード/天井モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時には解呪連モードや忍モード等が存在するが、設定変更時の専用初期振り分けとして直接固定できる公開値は今回確認できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 解呪抽選状態を **通常 / 高確 / 超高確** へ再抽選。
- 公開数値は下記numericResetDataに保存。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後は解呪高確以上で始まる割合が設定1でも **35.16%**、設定4〜6では **50.39%**（高確45.31%+超高確5.08%）。
- 固定天井短縮などの追加恩恵は確認できない。

### resetPenalties
- 天井進捗を消去するため、前日ハマリ台では宵越し天井狙いを無効化する方向に働く。
- それ以外の設定変更専用の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 期待値見える化等に **設定変更時ガックンあり / 電源ON-OFFなし** の解析あり。
- ただし7揃え等の事前対策・開始出目次第で判別できない場合があるとする資料もあるため、メーカー保証の確定判別には格上げしない。
- 家ステージは設定変更・純電断共通で判別材料にならない。

### numericResetData
設定変更時・解呪抽選状態振り分け:
| 設定 | 通常 | 高確 | 超高確 |
|---:|---:|---:|---:|
| 1 | 64.84% | 30.08% | 5.08% |
| 2 | 59.77% | 35.16% | 約5.08% |
| 3 | 54.69% | 40.23% | 約5.08% |
| 4 | 49.61% | 45.31% | 5.08% |
| 5 | 49.61% | 45.31% | 5.08% |
| 6 | 49.61% | 45.31% | 5.08% |

- HAZUSEは超高確を全設定共通5.1%と丸め表記。一撃は設定1を5.08%、他行の表示省略があるが合計値と別資料から約5.08%として整合する。丸め差として扱いCONFLICT化しない。

## missingFields
- reset-specific 忍モード exact initial distribution: UNVERIFIED_AFTER_RESEARCH
- reset-specific 解呪連モード exact initial distribution: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed hard reset detection: NONE_CONFIRMED

## conflicts
- 機械割は通常掲載値97.9〜112.1%と完全攻略時98.5〜113.1%が存在。攻略条件の定義差なので平均せず両系列を保持。
- 50枚ベースは約35G、34.9G、34.9〜35.9Gの表記差あり。比較用canonicalは約35G。
- 設定2ボーナス合算1/195.0と1/195.1は丸め差。

## sources
取得日: 2026-09-08

1. Sammy公式 — 新機種「パチスロ偽物語」発売のお知らせ
   - https://www.sammy.co.jp/japanese/news/2016/474.html
   - 2016-01-15発売発表、シリーズ第2弾。
   - reliability: OFFICIAL
2. グリーンべると — シリーズ2作目は安定スペックで“倖せ”遊技を提供
   - https://web-greenbelt.jp/00008395/
   - A+ART、BIG150枚、ART純増約1.2枚/G、20G、2月下旬納品予定。
   - reliability: INDUSTRY
3. HAZUSE — パチスロ 偽物語
   - https://hazuse.com/machine/pachislot/5S1298/
   - 2016-02-22、型式「偽物語／ZS」、検定5S1298、ART初当たり、約35G、完全攻略時機械割。
   - reliability: ANALYSIS_HIGH_DATABASE
4. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2700/1/56560
   - ART初当たり、ボーナス合算、完全攻略時機械割、BIG150枚、2016-02-22。
   - reliability: ANALYSIS_HIGH_PERIOD
5. アタリ7 — パチスロ偽物語
   - https://www.atari7.com/slot/date1453787885.php
   - 通常掲載機械割97.9〜112.1%、ボーナス+ART合算、2016-02-22。
   - reliability: ANALYSIS_SECONDARY
6. 期待値見える化 — 偽物語 天井・朝一リセット
   - https://slotjin.com/zone/nisemonogatari/
   - 通常掲載機械割、ART/ボーナス、天井、設定変更/電断比較、ガックン、状態振り分け。
   - reliability: ANALYSIS_HIGH_SECONDARY
7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/nisemonogatari/3/
   - BIG/ART間999G、設定変更時天井RESET・状態再抽選、電源OFF/ON引継ぎ、家ステージ、数値振り分け。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT
8. 一撃 — ART概要
   - https://1geki.jp/slot/nisemonogatari/81/
   - ART純増約1.2枚/G、1セット20G。
   - reliability: ANALYSIS_HIGH_PERIOD
9. 一撃 — 通常時の状態移行
   - https://1geki.jp/slot/nisemonogatari/48/
   - 設定変更時/ART終了時の解呪抽選状態振り分け。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT
10. ちょんぼりすた — 偽物語解析
   - https://chonborista.com/slot/sammy-slot/16232/
   - 天井999G+前兆、設定変更時RESET/再抽選、電断引継ぎ、家ステージ。
   - reliability: ANALYSIS_HIGH_SECONDARY
11. スロがち.COM — 偽物語
   - https://slogati.com/nisemonogatari/
   - 約34.9〜35.9G、設定変更/電断比較、高確以上の朝一恩恵整理。
   - reliability: ANALYSIS_SECONDARY
12. パチ7 — 本機の特徴
   - https://pachiseven.jp/machines/4755/cutout/2
   - 2016-02-22、BIG150枚、ART1.2枚/G・20G。
   - reliability: ANALYSIS_DATABASE

## confidence
- identity/releaseDate: HIGH_OFFICIAL_PLUS_MULTI_SOURCE
- formalModelName/certification: ANALYSIS_DATABASE_HIGH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PAYOUT_DEFINITION_SEPARATED
- resetSettingChange: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- resetNumericData: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- powerCycle: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE
- resetDetection: ANALYSIS_MULTI_SOURCE_NOT_MANUFACTURER_GUARANTEED
