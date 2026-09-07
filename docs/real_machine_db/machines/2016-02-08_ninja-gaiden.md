# PACHISLOT NINJA GAIDEN

machineName: PACHISLOT NINJA GAIDEN
manufacturer: 七匠
releaseDate: 2016-02-08
recordNumber: 956
generation: 5号機
systemType: AT / CZ / 高ベース高純増
formalModelName: パチスロニンジャガイデンN
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 七匠ブランドのAT機。複数解析DBで導入日2016-02-08を確認。
- 業界一次記事（グリーンべると、2016-01-12）で七匠ブランド新機種として発表、50枚約47G・純増約3.0枚/G・天井999G・AT30G+バトル構成を確認。
- 流通実機資料で型式名「パチスロニンジャガイデンN」を確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.8% |
| 3 | 99.8% |
| 4 | 103.8% |
| 5 | 107.8% |
| 6 | 111.2% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/475 |
| 2 | 1/457 |
| 3 | 1/438 |
| 4 | 1/393 |
| 5 | 1/343 |
| 6 | 1/317 |

- CZ突入率は別指標で、AT初当たりと混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約47G/50枚**。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## netIncrease
- AT「超忍道」: **約3.0枚/G**。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- AT「超忍道」: **1セット30G+α**。
- セット終盤の継続バトルとゲーム数上乗せを併用。

## modeSpecificMinimumData
- 通常時天井: **AT間999G**。最大32G前兆後にAT。
- 200G / 400G / 600GでNMモード4移行が確定する解析資料あり。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井は再抽選**。
- **内部状態は再抽選**。
- 朝一SCモードを設定に応じて再抽選。

### carryOverBehavior
- 据え置き単独を直接比較した本機固有高信頼表は今回十分固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ONでは天井引継ぎが直接資料で確認されるため、据え置き一般と純電断を無条件同義にしない。

### powerCycleBehavior
- **天井CARRYOVER**。
- 内部状態は当時解析表で「調査中」のため **UNVERIFIED**。
- ガックンは無しとされる。

### gameCounterReset
- setting change: **RESET/RESELECT_CONFIRMED**。
- pure power cycle: **CARRYOVER_CONFIRMED**。

### ceilingAfterReset
- 通常天井999G。
- 設定変更時は天井進捗を引き継がず再抽選。
- 固定の短縮天井数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset
- 設定変更時SCモード振り分け:
  - 設定1・2: SC1 40.6% / SC2 40.6% / SC3 12.5% / SC4 6.3%
  - 設定3: SC1 37.5% / SC2 37.5% / SC3 12.5% / SC4 12.5%
  - 設定4・5・6: SC1 25.0% / SC2 25.0% / SC3 25.0% / SC4 25.0%
- SC4は全シナリオ80%以上継続とされ、朝一の設定差として客行動に影響し得る。

### stateAfterReset
- setting change: **RESELECT_CONFIRMED**。
- pure power cycle: **UNVERIFIED / source listed as under investigation**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 高設定ほど朝一SC4選択率が高い。設定4〜6では **25.0%**。
- 設定変更時も200/400/600Gでニューヨークステージ移行の挙動が示される。

### resetPenalties
- 設定変更時特有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 当時解析では設定変更時 **ガックン有り!?**、純電源OFF→ON **ガックン無し**。
- 断定表現ではないためメーカー保証の確定判別とはせず、`ANALYSIS_INDICATIVE_NOT_GUARANTEED`。
- 200/400/600Gでニューヨークへ移行しない場合は据え置き濃厚とする解析記述あり。ただし確定判別ではない。

### numericResetData
- 設定変更時SCモード振り分け: 上記4区分。
- 朝一SC4: 設定1・2 6.3% / 設定3 12.5% / 設定4〜6 25.0%。
- リセット専用固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

## missingFields
- pure power cycle internal-state handling: UNVERIFIED
- exact carry-over-setting-only contract: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed hard reset detection: NONE_CONFIRMED

## conflicts
- 重大な性能数値CONFLICTは今回確認なし。
- ガックンは資料自体が「有り!?」表記のため確定値扱いしない。

## sources
取得日: 2026-09-08

1. グリーンべると — 刺激的なスペック・筐体で高純増AT機登場
   - https://web-greenbelt.jp/00008352/
   - 七匠ブランド、約47G/50枚、純増約3.0枚/G、天井999G、AT30G+バトル。
   - reliability: INDUSTRY
2. ちょんぼりすた — ニンジャガイデン スロット｜解析完全攻略
   - https://chonborista.com/slot/nanashow/15586/
   - 2016-02-08、設定別AT初当たり/機械割、約47G、純増3.0枚、天井、設定変更/電断比較、SCモード振り分け、朝一判別挙動。
   - reliability: ANALYSIS_HIGH_PERIOD
3. P-WORLD — PACHISLOT NINJA GAIDEN
   - https://www.p-world.co.jp/machine/database/7961
   - 七匠、5号機AT、純増約3.0枚/G、1セット30G+α、999G天井。
   - reliability: INDUSTRY_DATABASE
4. みんスロ — NINJA GAIDEN
   - https://minslo.com/ninja-gaiden/
   - 2016-02-08、設定別AT初当たり/機械割、47G、999G。
   - reliability: ANALYSIS_DATABASE
5. 中一商事 — 七匠 PACHISLOT NINJA GAIDEN 中古実機
   - https://www.nakaiti.com/html/sNanashow002.html
   - 型式名 パチスロニンジャガイデンN。
   - reliability: SECONDARY_HARDWARE_DATABASE

## confidence
- identity/releaseDate: HIGH_MULTI_SOURCE
- formalModelName: SECONDARY_SINGLE
- performanceCore: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- resetSettingChange: ANALYSIS_HIGH_DIRECT
- resetNumericData: ANALYSIS_HIGH_DIRECT
- powerCycleCeiling: ANALYSIS_HIGH_DIRECT
- resetDetection: ANALYSIS_INDICATIVE_NOT_GUARANTEED
