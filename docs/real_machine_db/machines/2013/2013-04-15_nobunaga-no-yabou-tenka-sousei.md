# 戦国パチスロ 信長の野望‐天下創世‐

machineName: 戦国パチスロ 信長の野望‐天下創世‐
manufacturer: ニューギン
releaseDate: 2013-04-15
releaseDatePrecision: exact_day
generation: 5号機
systemType: ART / BR非搭載 / ゲーム数解除 + 自力CZ
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-04-15**。K-Naviで具体日を確認。
- グリーンべるとの2013-03-05発表記事では納品開始予定 **2013-04-14**。本DBの時系列キーはホール導入開始日の2013-04-15を採用。
- ニューギンの戦国パチスロ第2弾。
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.7% |
| 3 | 100.9% |
| 4 | 104.1% |
| 5 | 108.2% |
| 6 | 115.4% |

- パチマガスロマガ、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

ART「覇道ノ刻」初当たり:

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/254 |
| 2 | 1/246 |
| 3 | 1/237 |
| 4 | 1/222 |
| 5 | 1/209 |
| 6 | 1/183 |

- パチマガスロマガ、P-WORLD、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/1000円（50枚）**。
- パチマガスロマガの小役確率ページで直接確認。
- confidence: ANALYSIS_HIGH

## netIncrease

- ART「覇道ノ刻」: **約2.0枚/G**。
- K-Navi、P-WORLD、グリーンべると/J-CASTの当時発表系で一致。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「覇道ノ刻」: **1セット50G+α**、純増約2.0枚/G。
- CZ「桶狭間ゾーン」: **10Gまたは20G**。
- 上乗せCZ「野望チャンス」: **1セット10G**。
- 上乗せ特化「野望RUSH」: **1セット10G**、1回の上乗せ最大300G。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はゲーム数解除と自力CZからARTを目指す。
- 内部モード別最大天井:
  - 通常A: **896G**
  - 通常B: **1280G**
  - 天国A: **192G**
  - 天国B: **128G**
  - 超天国: **32G**
- 全体最大は **1280G**。
- **1025G以降のART当選で次回天国確定**とする解析資料あり。
- P-WORLD、必勝本、pacnkで主要天井構造を照合。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CLEARS_COUNTER_RESELECTS_MODE_AND_YABOU_METER__POWER_CYCLE_CARRIES_COUNTER_MODE_METER__PUBLIC_RESET_MODE_DISTRIBUTION_CAPTURED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数をリセット**。
- **内部モードを再抽選**。
- 液晶は **城下町ステージ** へ。
- **野望メーター内部個数を再抽選**。液晶表示上は0個から始まる。
- 必勝本の「天井&設定変更」で直接確認。

### carryOverBehavior

- 純据え置きについて、設定変更を伴わない電源OFF→ONの直接契約が確認できるため、少なくとも電断のみなら天井G・モード・野望メーターは引き継ぐ。
- 「据え置き」という語で独立して記載された追加契約は `UNVERIFIED_AFTER_RESEARCH`。電断契約以上を推測しない。

### powerCycleBehavior

- **天井までのゲーム数を引き継ぐ**。
- **内部モードを引き継ぐ**。
- 液晶は **城下町ステージ** へ。
- **野望メーター内部個数を引き継ぐ**が、液晶表示上は0個。
- 必勝本で設定変更時との差まで直接比較可能。

### gameCounterReset

- settingChange: **CLEAR**。
- powerCycleOnly: **CARRY_OVER**。
- carryOver: `CARRY_OVER_WHEN_POWER_CYCLE_ONLY_DIRECTLY_CONFIRMED__PURE_STAY_SEPARATE_WORDING_UNVERIFIED`。

### ceilingAfterReset

- 設定変更後もモード再抽選後の選択モードに従う。
- 最大天井は **1280G**。
- 設定変更専用の別天井短縮契約は確認せず。モード再抽選によって32/128/192/896/1280Gのいずれかの上限になる構造。

### modeAfterReset

- **設定変更時にモード再抽選**。
- 公開振り分け:

| 設定 | 通常A | 通常B | 天国A | 天国B |
|---|---:|---:|---:|---:|
| 1～3 | 47.5% | 37.5% | 10.0% | 5.0% |
| 4～6 | 46.7% | 33.3% | 15.0% | 5.0% |

- 設定変更時の超天国移行は当該表に記載なし。
- 必勝本のモード移行率ページで直接確認。K-Naviにも「モード移行率（ART終了後・設定変更後）」解析項目の存在を確認。

### stateAfterReset

- モード以外の独立した高確/低確等の内部状態について、設定変更/電断時の再抽選・引継ぎ契約は十分再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時でも **天国A 10～15% + 天国B 5%** が選択されるため、公開値上の天国選択率は:
  - 設定1～3: **15.0%**
  - 設定4～6: **20.0%**
- 野望メーターも内部再抽選され、1個20.0%、2個10.0%、3個0.3%、4個0.1%。残り69.6%は0個。
- 液晶表示は0個のため、内部個数を外見だけで即判別はできない。

### resetPenalties

- **設定変更で前日の天井ゲーム数進捗、内部モード、野望メーター蓄積を失う**。
- 電断のみならこれらは引継ぎ。

### resetDetection

- 必勝本に具体的な設定変更判別例あり。
- **前日の野望メーターが4個で閉店し、翌日共通ベル成立でCZが発動しなければ設定変更確定**。
- 設定変更時/電断時とも液晶上の野望メーターは0個表示、開始ステージも城下町なので、見た目の初期表示だけでは区別しにくい。
- 本機固有のリールガックン契約は検索語・資料系統を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- resetModeDistribution:
  - settings1to3: normalA 47.5%, normalB 37.5%, heavenA 10.0%, heavenB 5.0%
  - settings4to6: normalA 46.7%, normalB 33.3%, heavenA 15.0%, heavenB 5.0%
- resetHeavenTotal:
  - settings1to3: **15.0%**
  - settings4to6: **20.0%**
- resetYabouMeterDistribution:
  - 0: **69.6%**
  - 1: **20.0%**
  - 2: **10.0%**
  - 3: **0.3%**
  - 4: **0.1%**
- normalModeCeilings: A 896G / B 1280G / HeavenA 192G / HeavenB 128G / SuperHeaven 32G
- maxCeilingAfterReset: **1280G**

### numericResetData

- settingChangeGameCounter: CLEAR
- powerCycleGameCounter: CARRY_OVER
- settingChangeMode: RESELECT
- powerCycleMode: CARRY_OVER
- settingChangeYabouMeter: RESELECT
- powerCycleYabouMeter: CARRY_OVER
- resetHeavenRateSettings1to3: 15.0%
- resetHeavenRateSettings4to6: 20.0%
- maxCeiling: 1280G

resetQaReliability: ANALYSIS_HIGH_DIRECT_FOR_SETTING_CHANGE_POWER_CYCLE_MODE_AND_METER__MULTI_SOURCE_HIGH_FOR_CORE_AND_CEILING

## missingFields

- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- independentHighLowStateResetContract: `UNVERIFIED_AFTER_RESEARCH`
- resetGacckunContract: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverContractBeyondDirectPowerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES_USED.
- release timing distinction: グリーンべると発表記事は **4/14納品開始予定**、K-Naviは **4/15ホール導入開始**。定義差として保持し、releaseDateは4/15を採用。

## sources

取得日: **2026-09-06**

1. K-Navi — 信長の野望-天下創世-（ニューギン、ホール導入開始2013-04-15、ART50G+α、純増約2.0枚/G）
   - https://p-kn.com/slot/1831/
   - reliability: ANALYSIS_HIGH_PERIOD_DB
2. グリーンべると / P-WORLD業界ニュース — 戦国パチスロ第2弾『信長の野望 天下創世』登場（2013-03-05、納品4/14予定、純増約2.0枚/G、50G+α）
   - https://news.p-world.co.jp/articles/5734/greenbelt
   - reliability: INDUSTRY_PERIOD
3. J-CASTトレンド — 新機種発表会（2013-03-05、ニューギン説明、50G+α・純増約2.0枚）
   - https://www.j-cast.com/trend/2013/03/05168307.html
   - reliability: PRESS_PERIOD
4. P-WORLD — 戦国パチスロ信長の野望‐天下創世‐（ART初当たり、天井モード別、純増約2.0枚/G）
   - https://www.p-world.co.jp/machine/database/7036
   - reliability: INDUSTRY_ANALYSIS_DB
5. パチマガスロマガ — ボーナス確率（ART初当たり・PAYOUT）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/25/h.php
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 小役確率（1000円あたり約31G）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/25/c.php
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本 — 天井&設定変更（設定変更: 天井Gリセット・モード再抽選・野望メーター再抽選、電源OFF→ON: 天井G/モード/野望メーター引継ぎ、判別例）
   - https://p.hisshobon.jp/machine/2189/1/39477
   - reliability: ANALYSIS_HIGH_DIRECT_RESET
8. パチ＆スロ必勝本 — モード移行率（設定変更時モード振り分け）
   - https://p.hisshobon.jp/machine/2189/1/39822
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_NUMERIC
9. pacnk — 戦国パチスロ 信長の野望 天下創世 設定判別ツール（ART初当たり、機械割、モード別天井）
   - https://pacnk.com/slot/tools/sh_nobunaganoyabou.html
   - reliability: RETROSPECTIVE_ANALYSIS_DB

## queueNotes

- 2013-04-15同日群はまだOPEN。
- 次の既知未処理候補は **鬼浜爆走紅蓮隊～友情挽歌編～（ベルコ）**。
- 追加後recordCountは731。次回は鬼浜のrepo重複確認から開始し、04-15同日群を別カレンダー/メーカー別一覧で最終監査する。
