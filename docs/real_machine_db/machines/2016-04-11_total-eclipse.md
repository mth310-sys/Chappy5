# パチスロ マブラヴ オルタネイティヴ トータル・イクリプス

machineName: パチスロ マブラヴ オルタネイティヴ トータル・イクリプス
manufacturer: SANKYO
releaseDate: 2016-04-11
recordNumber: 972
generation: 5号機
systemType: A+ART / ST型ART
formalModelName: パチスロ トータル・イクリプス R
certificationNumber: 5S1337
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- SANKYO公式オンライン博物館で販売名 **「パチスロ マブラヴ オルタネイティヴ トータル・イクリプス」**、型式名 **「パチスロ トータル・イクリプス R」**、2016年4月製品を確認。
- HAZUSEは型式 **パチスロトータル・イクリプスR**、検定番号 **5S1337**、導入開始日 **2016-04-11** と記録。
- 当時のすろぱちくえすと導入日一覧、時給2000円生活の当時まとめも **2016-04-11** とする。
- 一方、K-Navi、一撃、ちょんぼりすた等は **2016-04-18** とする。グリーンべるとの2016-03-16業界記事は **最速4月10日納品予定** と報じる。
- 本DBでは時系列漏れ防止を優先し、複数の当時資料＋4/10納品予定と整合する **2016-04-11** をcanonical releaseDateに置くが、**CONFLICT_RELEASE_DATE_2016_04_11_VS_2016_04_18** を保持する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.8% |
| 3 | 99.7% |
| 4 | 102.9% |
| 5 | 106.2% |
| 6 | 110.2% |

HAZUSE、一撃、ちょんぼりすた等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### 純ボーナス
- SBB+BB: **1/417（全設定共通）**
- アルゴスBONUS(RB): **1/512（全設定共通）**
- ボーナス合成: **約1/230（全設定共通）**

### ART「RED SHIFT TIME」初当たり
| 設定 | SANKYO公式系表示 | 攻略系代表表示 |
|---:|---:|---:|
| 1 | 1/625 | 1/626 |
| 2 | 1/597 | 1/597 |
| 3 | 1/562 | 1/562 |
| 4 | 1/508 | 1/509 |
| 5 | 1/469 | 1/469 |
| 6 | 1/425 | 1/425 |

- 設定1・4は精度/丸め表示差として双方保持。別抽選定義の競合を示す根拠は確認できないため `ROUNDING_OR_DISPLAY_PRECISION_DIFFERENCE` とする。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

### ボーナス+ART合算
- SANKYO公式オンライン博物館: **1/168 / 166 / 163 / 158 / 154 / 149**。

## baseGamesPer50
- canonical: **約33.0G/50枚**。
- ちょんぼりすた、時給2000円生活等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「RED SHIFT TIME」: **約1.5枚/G**。
- SANKYO公式オンライン博物館、グリーンべると、一撃で一致。
- ボーナス込みART純増を **約2.0枚/G** とする攻略資料があるため、1.5枚/Gとは定義を分けて保存する。
reliability: OFFICIAL_PLUS_INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- 武御雷 SUPER BIG BONUS: **300枚**。
- 不知火 BIG BONUS: **180枚**。
- アルゴス BONUS: **60枚**。
- ART「RED SHIFT TIME」: **1セット30G**、ST型継続。
reliability: OFFICIAL_PLUS_INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は「通常 / 高確 / 超高確」の3内部状態。
- ART突入の主要経路はボーナス、自力CZ「スカーレットツインゾーン」等。
- CZトータル突入率は設定1 **1/446** → 設定6 **1/255**。
- 天井は2系統:
  1. **ボーナス間999G**でART救済。ARTを挟んでもボーナス間カウントは継続。
  2. **CZ / 引き戻しゾーン7連続失敗**で次回CZ/引き戻し成功確定。ボーナス経由ARTではこの失敗回数はリセットされない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数RESET**。
- **CZ / 引き戻し失敗回数RESET**。
- 内部状態は **再抽選**。
- 液晶ステージは **ユーコン基地**。
- 液晶表示ゲーム数は **0G**から。
- 一撃の「天井/設定変更」資料で上記5項目を直接確認。

### carryOverBehavior
- 「据え置き」という語だけで設定変更なし・電断なしの独立契約を明記した当時資料は今回固定できず、機械固有の別挙動は **UNVERIFIED_AFTER_RESEARCH**。
- ただし、設定変更を行わず **電源OFF→ON** した場合の内部カウンタ/状態引継ぎは直接資料で確認済み（下記 powerCycleBehavior）。

### powerCycleBehavior
- 純電源OFF→ON時:
  - 天井ゲーム数: **CARRYOVER**
  - CZ / 引き戻し失敗回数: **CARRYOVER**
  - 内部状態: **CARRYOVER**
  - 液晶ステージ: 原則 **ユーコン基地**。CZ/ボーナス/ART中だった場合はその状態を引き継ぐとする当時解析あり。
  - 液晶表示G数: **0G表示**になるが、内部天井ゲーム数は引き継ぐ。
- reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **INTERNAL_CARRYOVER / DISPLAY_0G**。
- CZ/引き戻し失敗回数も同様に、設定変更でRESET、純電断でCARRYOVER。

### ceilingAfterReset
- 通常天井は **ボーナス間999G**。
- 設定変更専用の固定ゲーム数天井短縮は、機種名/型式/設定変更/リセット/朝一/天井短縮を組み替え、当時攻略・古DB・回顧資料まで再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更では前日のボーナス間天井進捗とCZ/引き戻し失敗回数が消えるため、宵越し狙いには不利。

### modeAfterReset
- 通常時に天井G数を左右する独立した朝一専用ゲーム数モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- CZ/引き戻し失敗回数は設定変更でRESET。

### stateAfterReset
設定変更時の公開振り分け（全設定共通）:
| 状態 | 振り分け |
|---|---:|
| 通常 | 20.0% |
| 高確 | 75.3% |
| 超高確 | 4.7% |

- 高確以上スタート合計: **80.0%**。
- HAZUSEと複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後は **高確以上80.0%**で開始するため、朝一のCZ/ボーナス経由ART抽選面で主要なリセット恩恵となる。
- 固定短縮天井は確認なし。

### resetPenalties
- 設定変更で前日からの **ボーナス間999G天井進捗**を失う。
- **CZ/引き戻し連続失敗回数**もRESETされるため、前日高スルー回数の宵越し価値を失う。

### resetDetection
- 設定変更時も純電源OFF→ON時も、朝一液晶は原則ユーコン基地・表示G数0Gとなるため、**この2要素だけでは変更判別不可**。
- 朝一に高確示唆挙動（当時解析では白ナビ頻発等）が見られる場合、設定変更期待度を上げる弱い材料にはなるが、設定変更確定にはしない。
- 前日内部G数/スルー回数を把握している場合、宵越し天井・次回成功挙動から事後的に据え置き推測材料となり得る。
- 本機固有のガックン、初期出目、ランプ等による設定変更確定契約は、「ガックン/リール/朝一/設定変更判別」等へ検索語を変えて再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 設定変更時内部状態: **通常20.0% / 高確75.3% / 超高確4.7%**。
- 高確以上: **80.0%**。
- 設定変更専用の短縮天井G数・朝一専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-08

1. SANKYOオンライン博物館 — パチスロ マブラヴ オルタネイティヴ トータル・イクリプス
   - https://www.sankyo-fever.jp/collection/669/
   - 公式販売名/型式、2016.04、ボーナス/ART基本性能、ART約1.5枚/G、設定別ART等
   - reliability: OFFICIAL
2. グリーンべると — ART継続率は15段階、最高継続94％を目指せ
   - https://web-greenbelt.jp/00008513/
   - 2016-03-16、最速4/10納品予定、A+ART、30G、約1.5枚/G、各ボーナス獲得枚数
   - reliability: INDUSTRY_PERIOD
3. HAZUSE — パチスロ トータル・イクリプス
   - https://hazuse.com/machine/pachislot/5S1337/
   - 導入開始2016-04-11、型式、検定番号、機械割、天井、ART/CZ確率
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE
4. HAZUSE — AT/ART / 内部状態
   - https://hazuse.com/machine/pachislot/5S1337/genre/209/
   - 設定変更時状態振り分け20.0/75.3/4.7%
   - reliability: ANALYSIS_HIGH
5. 一撃 — パチスロ トータル・イクリプス
   - https://1geki.jp/slot/s_totaleclipse/
   - 導入予定2016-04-18、機械割、ART純増等
   - reliability: ANALYSIS_HIGH
6. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_totaleclipse/3/
   - 設定変更時と電源OFF/ON時の天井G数、CZ/引戻し失敗回数、状態、ステージ、液晶G数を直接比較
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE
7. 一撃 — ART概要
   - https://1geki.jp/slot/s_totaleclipse/81/
   - ART約1.5枚/G、1セット30G
   - reliability: ANALYSIS_HIGH
8. K-Navi — パチスロ トータル・イクリプス
   - https://p-kn.com/slot/2469/
   - ホール導入開始2016-04-18、基本スペック
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE
9. ちょんぼりすた — トータルイクリプス
   - https://chonborista.com/slot/sankyo-slot/18506/
   - 導入日2016-04-18、約33G/50枚、天井、朝一状態振り分け
   - reliability: ANALYSIS_SINGLE_PERIOD
10. すろぱちくえすと — 2016年導入日順一覧
   - https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
   - 4月11日群にトータル・イクリプスを掲載
   - reliability: PERIOD_SECONDARY
11. 時給2000円生活 — トータルイクリプス解析まとめ
   - https://jikyu2000.com/matome/totaleclipse/
   - 2016-04-11導入、約33G/50枚、機械割、天井
   - reliability: PERIOD_ANALYSIS_SINGLE

## missingFields
- 設定変更専用短縮天井（再探索後も確認なし）
- 本機固有のガックン/初期出目/ランプによる確定変更判別契約
- 「据え置き・電断なし」を独立語義で説明した本機固有資料

## conflicts
- **CONFLICT_RELEASE_DATE_2016_04_11_VS_2016_04_18**
  - 2016-04-11: HAZUSE、すろぱちくえすと当時導入日一覧、時給2000円生活。
  - 2016-04-18: K-Navi、一撃、ちょんぼりすた、複数後年DB。
  - 業界記事では最速2016-04-10納品予定。
  - canonicalは時系列漏れ防止のため2016-04-11に置くが、4/18側を削除しない。
- ART初当たりの設定1 **1/625 vs 1/626**、設定4 **1/508 vs 1/509** は表示精度差として保持。
- ART純増 **約1.5枚/G** とボーナス込み **約2.0枚/G** は定義差であり平均しない。

## QA status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_PUBLIC_MACRO_BEHAVIOR
- resetRetroactiveQA: NOT_APPLICABLE_NEW_RECORD
