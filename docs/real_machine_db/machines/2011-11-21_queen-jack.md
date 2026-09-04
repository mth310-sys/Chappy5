# クイーンジャック

machineName: クイーンジャック
aliases: QUEEN JACK
manufacturer: 岡崎産業
formalModelName: クイーンジャック
approvalNumber: 1S0214
releaseDate: 2011-11-21
releaseDateStatus: EXACT_HALL_INTRODUCTION_WITH_DELIVERY_DATE_CROSSCHECK

generation: 5号機
systemType: ノーマル / Aタイプ / BIG+REG
coreStatus: PARTIAL_CORE_BASE_UNVERIFIED
resetQaStatus: RESET_BEHAVIOR_APPLICABILITY_CONFIRMED_WITH_MACHINE_SPECIFIC_DETAILS_UNVERIFIED

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ『黒ひげ危機一発』」を再取得して開始。
- 開始時正本は recordCount 622 / chronologicalFrontier 2011-11-21。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- HAZUSEの2011年11月カレンダーでは11月21日が月内最後の導入日枠。11/21同日群を再監査し、HAZUSE個別機種ページで「クイーンジャック」を未登録候補として確認。
- GitHub repo code searchで機種名未検出を確認して623件目として追加。
- HAZUSEは導入開始日2011-11-21、グリーンべるとは2011-11-20納品開始予定。定義整合のためreleaseDateは2011-11-21とする。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.8% |
| 2 | 99.3% |
| 3 | 101.2% |
| 4 | 103.7% |
| 5 | 106.2% |
| 6 | 109.0% |

- HAZUSE直接値。
- pacnk整理値も同系列で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG

| 設定 | BIG |
|---|---:|
| 1 | 1/282.5 |
| 2 | 1/277.7 |
| 3 | 1/273.1 |
| 4 | 1/268.6 |
| 5 | 1/260.1 |
| 6 | 1/254.0 |

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/431.2 |
| 2 | 1/397.2 |
| 3 | 1/360.1 |
| 4 | 1/309.1 |
| 5 | 1/284.9 |
| 6 | 1/254.0 |

### ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/170.7 |
| 2 | 1/163.4 |
| 3 | 1/155.3 |
| 4 | 1/143.7 |
| 5 | 1/136.0 |
| 6 | 1/127.0 |

- HAZUSE直接値。後年解析ガイドおよびpacnkの精密値と丸め範囲で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

- 「クイーンジャック / QUEEN JACK / 岡崎産業」に「50枚 / 1000円 / 1k / コイン持ち / ベース / 回転数」を組み替えて再探索。
- HAZUSE、P-WORLD、グリーンべると、パチマガスロマガ旧解析、pacnk、後年機種DBを横断したが、比較可能な50枚ベース直接値を安全に確定できなかった。
- 小役確率からの逆算は行わない。
confidence: UNVERIFIED

## netIncrease

NOT_APPLICABLE。ART/AT/RTによる常時純増区間を持たないノーマルタイプ。

## basicPayout

- BIG: 最大約321枚。
- REG: 約104枚。
- HAZUSEの規定払い出しはBIG 329枚超で終了、REG 121枚超で終了。
- パチマガスロマガ旧解析、P-WORLD、グリーンべるとでBIG最大321枚 / REG104枚を確認。
confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- ボーナスのみで出玉を増やす完全ノーマルタイプ。
- 天井はパチマガスロマガ旧解析で「存在しない」と明記。
- 持続的な通常モード、ART/AT/CZ、規定ゲーム数当選構造は確認しない。
- フリーズ演出は本機の主要演出だが、実機完全再現用の詳細パターンは物差しDB対象外。

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_COUNT_CEILING_OR_PERSISTENT_MODE_RESET_TARGET_CONFIRMED / MACHINE_SPECIFIC_TEMPORARY_STATE_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。本機はボーナス主体ノーマル機で天井・ART/AT/CZ・規定G数当選・持続モードを確認しないため、ホール経営/朝一狙いに影響するゲーム数・モード系リセット対象は確認されない。一方、設定変更直後のリール位置・7セグ・告知/演出一時状態など本機固有挙動は直接資料を確定できず。

carryOverBehavior: **NOT_APPLICABLE_FOR_CEILING_MODE_ART_AT_CZ / OTHER_TEMPORARY_STATE_UNVERIFIED_AFTER_RESEARCH**。据え置きで引き継ぐ天井ゲーム数、周期、ART/AT/CZ、持続モードは確認されない。演出一時状態等は直接資料なし。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_TEMPORARY_STATE**。単純電源OFF→ON時のリール位置、7セグ、告知状態等の本機固有挙動を確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。通常ゲーム数天井・規定ゲーム数当選を確認しない。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。通常天井自体が存在しないことを旧解析で確認。

modeAfterReset: **NOT_APPLICABLE_NO_PERSISTENT_GAMEPLAY_MODE_CONFIRMED**。朝一専用モード、規定ゲーム数モード等を確認しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_TEMPORARY_INTERNAL_STATE**。ボーナス抽選へ影響する持続的低確/高確等は確認していないが、設定変更直後の一時内部状態を断定できる直接資料もない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更による天井短縮、朝一CZ/ART、モード優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の朝一不利要素を確認しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。クイーンジャック固有のガックン、初期出目、7セグ表示等による設定変更/据え置き判別は「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 7セグ」を組み替えて再探索したが直接根拠を確定できず。

numericResetData:
- 設定変更時短縮天井: NOT_APPLICABLE
- 朝一専用モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン等変更判別: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_HIGH_FOR_NO_CEILING_AND_NORMAL_TYPE / UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_POWER_CYCLE_TEMPORARY_STATE_AND_DETECTION

## conflicts

NONE_CONFIRMED_FOR_CORE_VALUES。

- BIG/REG確率はHAZUSE、pacnk、後年解析ガイドで丸め範囲内一致。
- 機械割はHAZUSEとpacnkで一致。

## missingFields

- baseGamesPer50
- 設定変更直後のリール/7セグ/一時演出状態
- 単純電源OFF→ON時の本機固有挙動
- resetDetection（ガックン/初期出目/7セグ等）

## sources

取得日: **2026-09-05**

1. HAZUSE「クイーンジャック」 — https://hazuse.com/machine/pachislot/1S0214/
   - 導入日2011-11-21、メーカー、型式名、検定番号1S0214、設定別BIG/REG/合算、機械割、払い出し条件。
2. グリーンべると「元祖フリーズ演出の血脈受け継いだ後継機登場」（2011-11-02） — https://web-greenbelt.jp/00002426/
   - 岡崎産業、BIG最大321枚、REG104枚、合算1/170～1/127、2011-11-20納品開始予定。
3. P-WORLD「クイーンジャック」 — https://www.p-world.co.jp/machine/database/6543
   - 5号機ノーマルタイプ、BIG最大321枚、REG104枚、ボーナスのみで出玉を増やす構造。
4. パチマガスロマガ旧解析「クイーンジャック スペック」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/64/a.php
   - ノーマル、天井なし、BIG約321枚、REG約104枚。
5. パチマガスロマガ旧解析「ボーナス中の打ち方」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/64/e.php
   - BIG最大321枚獲得手順。
6. pacnk「クイーンジャック 設定判別ツール」 — https://pacnk.com/slot/tools/sh_queenjack.html
   - 設定別BIG/REG、機械割のクロスチェック。
7. パチスロ解析ガイド「クイーンジャック」 — https://pachislot-guide.net/2011/queen-jack/
   - 設定別BIG/REG/合算精密値、天井なしの回顧クロスチェック。

## QA note

- 同時期に30Φ派生 **「クイーンジャック-30」** の存在を複数資料で確認。独立機種として未登録候補。性能同一を推測転記せず、次リレーで型式・導入日・スペック同一性を直接確認して別レコード化判断する。
