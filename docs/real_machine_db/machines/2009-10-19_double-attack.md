# ダブルアタック

machineName: ダブルアタック
manufacturer: オーイズミ
formalModelName: ダブルアタック2X
approvalNumber: 9S0581
releaseDate: 2009-10-19（パチビー導入日。P-WORLDは2009年10月精度）
generation: 5号機
systemType: ボーナス + ART / CZ・333G以降高確率状態
coreStatus: COMPLETE_CORE_EXCEPT_BASE_WITH_PAYOUT_CONFLICT_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

### メーカー発表値（P-WORLD / パチマガ掲載）

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.0% |
| 2 | 99.3% |
| 3 | 101.0% |
| 4 | 103.4% |
| 5 | 105.6% |
| 6 | 110.1% |

### パチマガスロマガ旧解析・シミュレート値

| 設定 | PAYOUT |
|---:|---:|
| 1 | 98.58% |
| 2 | 99.64% |
| 3 | 101.19% |
| 4 | 102.89% |
| 5 | 104.51% |
| 6 | 108.03% |

- 設定4〜6を中心に単純な丸め差ではないため平均せず `CONFLICT` として両系列を保持。

confidence: MANUFACTURER_PUBLISHED + ANALYSIS_OLD_MAJOR_CONFLICT

## initialHitBySetting

| 設定 | 赤7 DC | 青7 DC | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/119.59 | 1/595.78 | 1/99.60 |
| 2 | 1/118.72 | 1/574.88 | 1/98.40 |
| 3 | 1/117.87 | 1/555.39 | 1/97.23 |
| 4 | 1/115.38 | 1/537.18 | 1/94.98 |
| 5 | 1/112.60 | 1/520.13 | 1/92.56 |
| 6 | 1/99.90 | 1/840.21 | 1/89.29 |

- P-WORLDの丸め値とパチマガスロマガ旧解析の精密値が整合。
- 青7は設定6のみ重くなる特徴を持つため、別スペック混同とみなさず原値を保持。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

- `ダブルアタック / ダブルアタック2X / オーイズミ` と `50枚 / 1000円 / ベース / コイン持ち / 回転数 / 小役確率` を組み替え、P-WORLD、パチビー、パチマガスロマガ旧DB、回顧資料を再探索したが、比較可能な50枚あたりゲーム数の直接値を確定できなかった。
- 小役確率からの推定計算は行わない。

confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- ART「ラッシュタイム」: 約 **+1.5枚/G**。
- 獲得したARTゲーム数分継続。
- ART中にボーナス成立時は既存残りARTをキープし、そのボーナスで新たに獲得したARTのみダブルアップ対象となる。

confidence: INDUSTRY_DATABASE + ANALYSIS_OLD_MAJOR

## basicPayout

- 青7揃い: 約38枚。
- 赤7揃い: 約38枚。
- パチマガスロマガ旧DBでもSUPER DREAM CHANCE / DREAM CHANCEとも純増約38枚を確認。

confidence: INDUSTRY_DATABASE + ANALYSIS_OLD_MAJOR

## modeSpecificMinimumData

- ボーナス中のCASINO絵柄揃いでARTゲーム数を獲得。
- DREAM CHANCEではART20〜45G、SUPER DREAM CHANCEでは70〜95Gが目安（旧パチマガ記載）。
- ボーナス後5GのダブルアップゾーンでARTゲーム数を賭けられ、最大5回成功で初期ARTが32倍。
- 特殊リプレイで成功、通常リプレイで失敗。挑戦しなければ獲得ARTを維持。
- 通常時333G以降は次回ボーナスまで高確率状態となり、ボーナス中の大量ART獲得期待が上がる（P-WORLD）。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。333G以降高確率状態、通常時ゲーム数、ART残G、ボーナス後ダブルアップ状態について、設定変更時の本機固有処理を直接確認できず。一般的な5号機挙動から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時に333G到達進捗や高確率状態、ART残Gをどこまで引き継ぐかを本機固有資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の333G進捗、高確率状態、ART残G、表示状態の保持/復帰を直接確認できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時333G以降の高確率状態は確認できるが、設定変更時にその到達ゲーム数をリセットするか引き継ぐかは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更後専用の短縮/変更ゲーム数は公開値を確認できず。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。通常A/B等のゲーム数解除モードは今回確認した資料では確認されない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_HIGH_PROBABILITY_AND_ART_STATE**。333G以降高確率状態およびART残Gの設定変更時処理を直接確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮、朝一ART/CZ優遇、当選率上昇などの公開恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ダブルアタック / ダブルアタック2X / オーイズミ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 333G / 高確 / 宵越し / ガックン / 初期出目 / ART` を組み替え、当時解析・旧DB・回顧資料まで再探索したが本機固有の変更判別要素を直接確認できず。

numericResetData:
  normalGameCountThreshold: 333G以降で次回ボーナスまで高確率状態
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_GAME_COUNTER_HIGH_PROBABILITY_ART_STATE_CHANGE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 機種名・正式型式・メーカー名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 333G / 高確 / 宵越し / ガックン / ART / ラッシュタイム` を組み替えて再探索。
- P-WORLD、パチビー、K-Navi、パチマガスロマガ旧DB、後年回顧資料まで横断。
- 2024年の `Lダブルアタック2 with OZS-1000&RAPHAEL` のリセット仕様は別機種のため一切流用しない。

## conflicts

- payoutDefinition: メーカー発表値 **98.0 / 99.3 / 101.0 / 103.4 / 105.6 / 110.1%** と、旧パチマガスロマガのシミュレート値 **98.58 / 99.64 / 101.19 / 102.89 / 104.51 / 108.03%** が競合。平均せず両系列保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterResetForHighProbabilityAndART: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. パチビー「ダブルアタック」 — https://www.pachibee.jp/machines/about/209100001 — 導入日2009-10-19、オーイズミ、5号機ART/CZ/天井あり、純増約+1.5枚/G、ダブルアップ構造 — reliability: INDUSTRY_DATABASE
2. P-WORLD「ダブルアタック」 — https://www.p-world.co.jp/machine/database/5716 — 型式名ダブルアタック2X、検定番号9S0581、2009年10月導入、設定別ボーナス確率、メーカー発表機械割、約38枚、ART約+1.5枚/G、333G以降高確率状態 — reliability: INDUSTRY_DATABASE
3. パチマガスロマガ旧DB「ダブルアタック」 — https://psmaga.com/database/machine/slot_index.php?id=6547 — 精密ボーナス確率、メーカー発表PAYOUT、ARTゲーム数構造、純増約+1.5枚/G、約38枚 — reliability: ANALYSIS_OLD_MAJOR
4. パチマガスロマガ旧解析「ダブルアタック ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/22/h.php — 精密ボーナス確率、シミュレートPAYOUT98.58〜108.03% — reliability: ANALYSIS_OLD_MAJOR
5. K-Navi「ダブルアタック」 — https://p-kn.com/slot/1064/ — オーイズミ、ART機、69枚超払い出し終了表記など旧機種概要 — reliability: ANALYSIS_DATABASE
6. パチマガスロマガFREE「歴代5号機」 — https://pachimaga.com/free/playback/33b34b9eff3031dc11547899e913221b9833305e.php — オーイズミ歴代5号機としてダブルアタック掲載 — reliability: RETROSPECTIVE_ANALYSIS
