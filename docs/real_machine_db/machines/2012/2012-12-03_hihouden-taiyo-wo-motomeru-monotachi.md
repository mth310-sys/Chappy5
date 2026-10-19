# 秘宝伝 ～太陽を求める者達～

machineName: 秘宝伝 ～太陽を求める者達～
manufacturer: 大都技研
releaseDate: 2012-12-03
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi・パチビーが2012-12-03で一致。グリーンべるとは12月2日から納品開始と報道しており、納品日とホール導入日の定義差として保持。
generation: 5号機
systemType: ART / 擬似ボーナス + CZ / ゲーム数上乗せ型
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_CONFLICT

## payoutRateBySetting

### 系列A

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.8% |
| 3 | 101.7% |
| 4 | 104.7% |
| 5 | 108.2% |
| 6 | 113.4% |

- 2-9伝説系整理、2013年当時動画整理、後年ランキング資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### 系列B

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.1% |
| 3 | 100.1% |
| 4 | 104.7% |
| 5 | 108.2% |
| 6 | 113.3% |

- crankyseven、同系統の当時解析整理で一致。
- 設定1～3は系列Aとの差が丸めでは説明しにくいため平均せずCONFLICT。
- confidence: CONFLICT

## initialHitBySetting

### 秘宝RUSH初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/537.4 |
| 2 | 1/495.1 |
| 3 | 1/452.8 |
| 4 | 1/388.8 |
| 5 | 1/353.0 |
| 6 | 1/313.0 |

- K-Naviと2-9伝説系整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### 擬似ボーナス初当たり

| 設定 | ボーナス初当たり |
|---|---:|
| 1 | 1/286.5 |
| 2 | 1/282.7 |
| 3 | 1/278.6 |
| 4 | 1/272.9 |
| 5 | 1/272.0 |
| 6 | 1/248.1 |

- K-Navi掲載値。
- confidence: ANALYSIS_SINGLE

### ボーナス+ART合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/186.9 |
| 2 | 1/180.0 |
| 3 | 1/172.5 |
| 4 | 1/160.3 |
| 5 | 1/153.6 |
| 6 | 1/138.4 |

- K-Navi、グリーンべると、複数整理資料で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_INDUSTRY_ENDPOINTS

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「秘宝伝 太陽を求める者達 / 秘宝伝 太陽 / 大都技研」×「50枚 / 1000円 / ベース / コイン持ち / 回転数」を組み替え、K-Navi、P-WORLD、パチビー、当時解析・後年整理を横断したが、比較可能な直接値を今回確定できなかった。
- 2025年スマスロ「秘宝伝」の約32G/50枚は別機種なので流用しない。
- confidence: UNVERIFIED

## netIncrease

- ART「秘宝RUSH」: **約+2.8枚/G**。
- 1セット **40G+α**。
- グリーンべると、K-Navi、P-WORLD、パチビーで整合。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE

## basicPayout

- 擬似BIG: ベルナビ30回 **約150枚** / 40回 **約200枚** / 60回 **約300枚**。
- 擬似REG: ベルナビ8回 **約40～45枚**。
- グリーンべるとはREG約40枚、2013年当時整理は約45枚。定義/丸め差候補として幅を保持。
- 秘宝RUSH: 1セット40G+α、純増約+2.8枚/G。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE

## modeSpecificMinimumData

- CZ「高確率」は15G / 30G / 無限。無限高確率はART突入まで継続。
- 第一天井: **ボーナスまたはART突入後999G**で無限高確率＝ART当選へ。
- 第二天井: **ボーナス間1599G**で擬似ボーナス + 超秘宝RUSH。
- 伝説モード中の99Gハマりに関する天井記載も後年攻略資料に存在。
- 上乗せ特化ゾーン等の細かな内部抽選は本DB対象外。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_SETTING_CHANGE_COUNTER_AND_STATE_NUMBERS__POWER_CYCLE_NOT_FULLY_VERIFIED
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **設定変更で天井ゲーム数リセット**。
- 朝一設定変更時は通常時の内部状態を再抽選する公開振り分けが存在。
- 設定変更時のモード移行率が設定推測要素として扱われた当時番組資料も確認。

### carryOverBehavior

- 据え置き時の天井G・内部状態・伝説モードを一括で明示した高信頼の直接契約は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 当時実戦記録には「朝一からクレアランプ点灯→据え置き確定」と判断した例があり、前日由来の伝説モード/ランプ状態保持を示唆するが、ユーザー実戦報告なので正式契約には昇格させない。

### powerCycleBehavior

- 設定変更を伴わない単純な電源OFF→ONのみについて、天井G・内部状態・伝説モードを明示的に列挙した直接資料は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き実戦例は存在するが、電源OFF→ON契約そのものと同一視しない。

### gameCounterReset

- 設定変更: **CLEAR / RESET**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH_AS_DIRECT_CONTRACT**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で第一・第二天井の進捗Gはリセット。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の第一天井999G、第二天井1599Gという基本値は維持。

### modeAfterReset

- 「設定変更時のモード移行率」が設定推測に使えるとする当時番組資料を確認したが、今回取得できた比較可能な数値は内部状態（昼/夕/夜）の振り分け。
- 伝説モード等の設定変更時専用振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

設定変更時の公開状態振り分け:

- 設定1～3: **昼75.0% / 夕22.5% / 夜2.5%**。
- 設定4～5: **昼60.0% / 夕30.0% / 夜10.0%**。
- 設定6: **昼50.0% / 夕35.0% / 夜15.0%**。

- 高設定ほど夕・夜スタート率が高い朝一専用比較値として利用可能。
- confidence: ANALYSIS_SINGLE_DIRECT_NUMERIC_TABLE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 高設定ほど設定変更時に夕/夜状態から始まりやすい。
- 設定6では夕以上 **50.0%**、夜 **15.0%**。
- 設定1～3では夕以上 **25.0%**、夜 **2.5%**。
- 設定変更専用短縮天井は確認できないため、天井狙い上の直接的な短縮恩恵はNONE_CONFIRMED。

### resetPenalties

- 設定変更で前日までの天井進捗を失うため、宵越し第一/第二天井狙いには不利。
- 据え置き時の全契約を高信頼資料で確定できていないため、それ以上は推測しない。

### resetDetection

- クレアランプは通常時に高確率や伝説モードを示唆するランプ。
- 当時実戦例には朝一からクレアランプ点灯を据え置き確定材料として扱った記録があるが、解析表ではなく **PERIOD_USER_REPORT_ONLY_NOT_PROMOTED_TO_CONFIRMED**。
- ガックン・初期出目等の本機固有の変更判別契約は、表記・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定1～3: 昼75.0% / 夕22.5% / 夜2.5%。
- 設定4～5: 昼60.0% / 夕30.0% / 夜10.0%。
- 設定6: 昼50.0% / 夕35.0% / 夜15.0%。
- 設定6の夕以上: 50.0%。
- 設定1～3の夕以上: 25.0%。

### numericResetData

- settingChangeGameCounter: CLEAR
- resetStateSetting1to3Day: 75.0%
- resetStateSetting1to3Evening: 22.5%
- resetStateSetting1to3Night: 2.5%
- resetStateSetting4to5Day: 60.0%
- resetStateSetting4to5Evening: 30.0%
- resetStateSetting4to5Night: 10.0%
- resetStateSetting6Day: 50.0%
- resetStateSetting6Evening: 35.0%
- resetStateSetting6Night: 15.0%
- resetStateSetting6EveningOrAbove: 50.0%
- resetShortenedCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- morningClaireLampCarryoverEvidence: PERIOD_USER_REPORT_ONLY

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_COUNTER__ANALYSIS_SINGLE_FOR_NUMERIC_RESET_STATE__UNVERIFIED_AFTER_RESEARCH_FOR_FULL_POWER_CYCLE_AND_SUEOKI_CONTRACTS

## missingFields

- 50枚あたりゲーム数/ベース。
- 型式名・検定番号の高信頼直接資料。
- 据え置き時の天井G・伝説モード・内部状態の完全な直接契約。
- 単純電源OFF→ONのみの天井G・状態・モード契約。
- 設定変更時の伝説モード等の具体的振り分け値。
- ガックン/初期出目による本機固有設定変更判別。

## conflicts

- **機械割:** 97.5/98.8/101.7/104.7/108.2/113.4% 系列と、96.5/98.1/100.1/104.7/108.2/113.3% 系列が存在。設定1～3は丸め差では説明しにくいため平均せずCONFLICT。
- **REG獲得:** 業界記事は約40枚、当時整理資料は約45枚。ベルナビ8回という基本仕様は一致しており、純増目安の丸め/算出差候補として両方保持。

## sources

取得日: 2026-09-05

1. K-Navi 秘宝伝 ～太陽を求める者達～
   - https://p-kn.com/slot/1748/
   - ホール導入開始2012-12-03、ART純増約2.8枚/G、擬似ボーナス仕様。
2. K-Navi ボーナス＆ART確率
   - https://p-kn.com/slot/1748/41909/
   - 設定別ボーナス、ART初当たり、合算。
3. グリーンべると 2012-10-18『秘宝伝』最新作は番長の遺伝子を融合
   - https://web-greenbelt.jp/00001670/
   - 12月2日納品開始、純増約2.8枚/G、秘宝RUSH40G+α、BIG約150/200/300枚、RB約40枚、合算設定1 1/186.9～設定6 1/138.4。
4. P-WORLD 秘宝伝～太陽を求める者達～
   - https://www.p-world.co.jp/machine/database/6901
   - 5号機AT、BR非搭載、CZ、天井、約2.8枚/G、BIG約150～300枚、REG約40枚。
5. パチビー 秘宝伝～太陽を求める者達～
   - https://www.pachibee.jp/movies/index/8701
   - 導入日2012-12-03、5号機AT、BR非搭載、CZ、天井、約2.8枚/G。
6. 2-9伝説系整理 秘宝伝 太陽を求める者達
   - https://29den.com/hihouden-taiyo/
   - 第一天井999G、第二天井1599G、設定変更で天井Gリセット、機械割系列A、ART初当たり、朝一設定変更後の昼/夕/夜振り分け。
7. crankyseven 秘宝伝～太陽を求める者達～
   - https://crankyseven.com/hihouden-taiyo-pc.htm
   - 機械割系列B。
8. スロット動画TV 2013-02-22 基本情報
   - https://rinfinity777.livedoor.blog/archives/2013-02.html
   - 機械割系列A、ボーナス+ART、40G+α、約2.8枚/G、BIG約150/200/300枚、REG約45枚。
9. VideoMarket パチスロ最強伝説G #535
   - https://www.videomarket.jp/title/082220/A082220003999H01
   - 設定変更時のモード移行率が設定推測要素として扱われた当時番組概要。
10. K-Navi クレアランプ点灯条件
   - https://p-kn.com/slot/1748/41814/
   - クレアランプが高確率/伝説モード示唆であることを確認。
11. こたろの回胴式遊記 2013年実戦記事
   - https://ameblo.jp/s6tto/entry-11561818782.html
   - 朝一クレアランプ点灯を据え置き確定と扱った当時ユーザー実戦例。解析契約には昇格させない。
12. スロパチクエスト 秘宝伝 太陽 天井まとめ
   - https://www.slopachi-quest.com/article/hihouden-taiyo/
   - 第一天井999G、第二天井1599Gの後年整理照合。
