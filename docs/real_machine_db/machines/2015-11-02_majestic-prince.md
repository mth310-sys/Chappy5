# 銀河機攻隊 マジェスティックプリンス

machineName: 銀河機攻隊 マジェスティックプリンス
manufacturer: D-light（ディ・ライト）
releaseDate: 2015-11-02
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 932
generation: 5号機
systemType: 新基準AT / 規定ゲノムポイント解除 / ゲーム数上乗せ型AT
formalModelName: パチスロマジェスティックプリンスS
inspectionNumber: 5S0670
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `パチスロマジェスティックプリンスS`、検定番号 `5S0670`、メーカーD-light、導入開始2015-11-02を確認。
- K-Navi、ちょんぼりすた、すろぱちくえすとも2015-11-02導入で一致。
- 2016年のDaiichiパチンコ版とは分離。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.1% |
| 3 | 100.1% |
| 4 | 104.1% |
| 5 | 107.2% |
| 6 | 113.0% |

- HAZUSE、ちょんぼりすた、すろぱちくえすとで一致。

## initialHitBySetting
主要初当たりとしてAT「HERO RUSH」初当たりを採用。

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/466.9 |
| 2 | 1/449.7 |
| 3 | 1/418.0 |
| 4 | 1/365.4 |
| 5 | 1/325.0 |
| 6 | 1/283.6 |

- HAZUSE/ちょんぼりすたは整数丸め（1/467, 450, 418, 365, 325, 284）。すろぱちくえすとの小数系列をcanonicalとし、丸め差として扱う。

## baseGamesPer50
- canonical: **約47G/50枚**。
- パチマガスロマガ、ちょんぼりすたで一致。すろぱちくえすとは約47G表記。

## netIncrease
- AT「HERO RUSH」: **約2.8枚/G**。

## basicPayout
- AT初期ゲーム数: **40 / 100 / 200 / 300G**。
- ATはゲーム数上乗せ型。固定獲得枚数ではない。
- 実機完全再現用の上乗せ詳細抽選は対象外。

## modeSpecificMinimumData
- 通常時は1G消化ごとに1ゲノム以上を進め、規定ゲノムポイント到達でAT。
- モード別最大規定ポイント: 通常A **1500pt** / 通常B **1000pt** / 天国A **250pt** / 天国B **250pt**。
- 通常時チェリー等でゲノムポイント短縮があるため、データカウンタG数と内部ゲノムは一致しない。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MULTI_QUERY_RESEARCH
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井（規定ゲノム進捗）はリセット**。
- **内部状態は再抽選**。
- 液晶表示ゲノムは0ptから開始。
- 開始ステージは部屋ステージ。
- 設定変更後は通常より浅い当選分布が観測され、1000ゲノム天井短縮の可能性が高いとする当時実践解析が複数あるが、解析確定値ではないため `EMPIRICAL_HIGH_CONFIDENCE_NOT_CONFIRMED_INTERNAL` として分離。

### carryOverBehavior
- 設定変更しない場合の前日内部ゲノム/天井進捗は、純電源OFF→ON資料から **引継ぎ**と整理。
- 内部状態も引継ぎ。
- ただし液晶表示ptは電源OFF→ONで0pt表示となるため、見た目の0ptだけではリセット判別不能。

### powerCycleBehavior
- 天井/内部ゲノム進捗: **引継ぎ**。
- 内部状態: **引継ぎ**。
- 表示pt: **0pt表示**。
- ステージ: **部屋ステージ**。
- 設定変更との差が明示された直接比較表をちょんぼりすたおよび当時まとめ資料で確認。

### gameCounterReset
- settingChange: **RESET**（規定ゲノム進捗）。
- carryOver: **CARRYOVER**。
- purePowerCycle: **CARRYOVER**。
- 表示ptは設定変更/純電断とも0ptになるため、内部進捗と表示値を分離する。

### ceilingAfterReset
- normalMaximum: **1500ゲノム（通常A）**。
- 当時の新装実践値では設定変更後最大ハマリ798G、1000ゲノム付近までに収束する挙動が報告され、**リセット時1000ゲノム天井短縮の可能性が高い**とされた。
- ただし資料自身が「予想/可能性」としているため、確定内部仕様として1000pt固定せず `EMPIRICAL_RESET_SHORTENING_LIKELY`。

### modeAfterReset
- 通常A / 通常B / 天国A / 天国Bの4モードを確認。
- 設定変更後の専用モード振り分け数値は、検索語を変えた再探索後も直接解析表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 実践値では設定変更後100～200G付近（天国上限250ゲノム）の当選率上昇が報告されているが、モード振り分け解析値とは混ぜない。

### stateAfterReset
- settingChange: **RESELECT / 再抽選**。
- carryOver/purePowerCycle: **CARRYOVER / 引継ぎ**。
- BOZ抽選に影響する低確/通常/高確/超高確の具体的なリセット初期振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後、通常最大1500ゲノムより浅い分布となる実践値が存在し、**1000ゲノム天井短縮の可能性が高い**。
- 設定変更後100～200G付近の当選率上昇が当時実践値で確認されている。
- いずれも内部解析確定値ではなく `EMPIRICAL_RESET_DATA` として保存。

### resetPenalties
- 前日までの内部ゲノム進捗が設定変更で消去されるため、深い前日ハマり台では宵越し天井狙いの価値を失う。
- その他の設定変更固有の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更でも電源OFF→ONでも液晶表示ptが0pt、部屋ステージ開始のため、**見た目だけでの変更判別は不可**。
- 前日の内部ゲノム進捗を把握していれば、宵越し側の規定pt到達挙動から据え置き/変更を推測できる場合がある。
- 本機固有のリールガックン確定契約は、機種名/型式/D-light/設定変更/朝一/据え置き/ガックンで再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後の実践データ: **100～200G付近の当選率上昇**。
- 同実践解析での最大ハマリ: **798G**。
- 推定されるリセット最大規定ポイント: **1000ゲノムの可能性が高い**（解析確定ではない）。
- リセット専用モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- リセット内部状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- `RESET_SHORTENED_CEILING_EVIDENCE_LEVEL`: 1000ゲノム短縮は複数当時資料が紹介する実践値ベースの推定であり、内部解析確定表ではない。確定値へ昇格させず、通常天井1500/1000/250/250ptと分離保持。
- `AT_INITIAL_HIT_ROUNDING`: 1/466.9等の小数系列 vs 1/467等の整数丸め。定義競合ではなく丸め差。

## missingFields
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- confirmedResetShortenedCeilingInternalValue: `UNVERIFIED_AFTER_RESEARCH_EMPIRICAL_1000PT_LIKELY`
- reelGakkun: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. HAZUSE — 銀河機攻隊 マジェスティックプリンス
   - https://hazuse.com/machine/pachislot/5S0670/
   - 型式、検定番号、メーカー、導入日、AT/機械割、モード別天井、AT性能。reliability: ANALYSIS_HIGH / OLD_DB
2. K-Navi — 銀河機攻隊 マジェスティックプリンス
   - https://p-kn.com/slot/2343/
   - 2015-11-02導入、AT純増、初期G数、ゲーム性。reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 銀河機攻隊マジェスティックプリンス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/04/l.php
   - モード/内部状態構造。reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 小役確率/50枚ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/04/c.php
   - 約47G/50枚。reliability: ANALYSIS_HIGH
5. ちょんぼりすた — マジェスティックプリンス スロット解析
   - https://chonborista.com/slot/d-light/12073/
   - スペック、天井、設定変更vs電源OFF/ON、表示pt、内部状態、朝一短縮推定。reliability: ANALYSIS_HIGH
6. すろぱちくえすと — 天井恩恵・狙い目・スペック解析
   - https://www.slopachi-quest.com/article/majestic-prince/
   - 小数AT確率、機械割、約47G/50枚、純増2.8枚/G。reliability: ANALYSIS_HIGH
7. すろぱちくえすと — 朝一設定変更・リセット時の恩恵・挙動
   - https://www.slopachi-quest.com/article/prince-reset/
   - 設定変更後100～200G付近上昇、最大ハマリ798G、1000ゲノム短縮推定。reliability: ANALYSIS_SINGLE_EMPIRICAL
8. 期待値見える化 — マジェスティックプリンス 天井・ゾーン実践値
   - https://slotjin.com/zone/majestic-prince/
   - 通常/リセット狙い目とリセット短縮実践値の補助。reliability: ANALYSIS_SINGLE_EMPIRICAL
9. P-Summa — 2015年当時まとめ
   - https://psumma.jp/pachislo/16741/
   - 設定変更/電源OFF ON比較と当時のリセット短縮情報を横断確認。reliability: SECONDARY_PERIOD_SUMMARY

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- identityModelInspection: ANALYSIS_HIGH_OLD_DB
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT_COMPARISON
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- stateResetVsPowerCycle: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetShortenedCeiling1000Genome: EMPIRICAL_HIGH_NOT_INTERNAL_CONFIRMED
- resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- resetGakkun: NONE_CONFIRMED_AFTER_RESEARCH
