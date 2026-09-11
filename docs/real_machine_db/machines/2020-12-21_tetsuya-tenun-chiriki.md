# パチスロ 哲也 －天運地力－

No: 1381
machineName: パチスロ 哲也 －天運地力－
machineNameVariants: 哲也 天運地力 / パチスロ哲也6.1
manufacturer: Daiichi（大一商会）
releaseDate: 2020-12-21
formalModelName: Sパチスロ哲也6.1 DSS
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6.1号機
systemType: AT / 純増可変型AT / 擬似ボーナス

## identity / release
- パチビー、K-Navi、1geki、なな徹で2020-12-21導入を一致確認。
- 2020年検定通過一覧で型式 `Sパチスロ哲也6.1 DSS` を確認。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.9% |
| 3 | 100.7% |
| 4 | 104.3% |
| 5 | 107.1% |
| 6 | 110.1% |
- パチビー、1geki、後発設定DBで一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | CZ「頂上決戦」 | AT/ボーナス初当り |
|---:|---:|---:|
| 1 | 1/252 | 1/463 |
| 2 | 1/245 | 1/433 |
| 3 | 1/239 | 1/407 |
| 4 | 1/228 | 1/341 |
| 5 | 1/218 | 1/306 |
| 6 | 1/217 | 1/293 |
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「玄人タイム」: 約2.5枚/G。
- 上位AT「玄人TIME 絶景」等、および「雀聖BONUS」: 約5.0枚/G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 玄人タイム: 1セット30G。
- 雀聖BONUS: 15～60G、約5.0枚/G。
- 天井到達時は雀聖BONUS当選。

## modeSpecificMinimumData
- CZ「頂上決戦」成功期待度は約50%。
- AT後は32Gの引き戻しゾーン。引き戻し期待度約28%、終了時に有利区間リセット。
- 通常時天井は有利区間移行後867G付近（液晶表示約900G）で雀聖BONUS。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は有利区間をリセットし、天井G数をリセット。
- 牌ポイントは有利区間移行時に再抽選。
- 液晶は神保ステージから開始。
- 設定変更後1回目のAT当選時は雀聖BONUS直撃割合が通常より上昇。

### carryOverBehavior
- 据え置きでは天井G数・牌ポイント・内部状態・有利区間を引き継ぐ。
- 牌表示は朝一0に見えるが、特定リプレイまたは弱チェリー成立時に内部の牌数が表示される。

### powerCycleBehavior
- 電源OFF→ONのみでは天井G数・牌ポイント・内部状態・有利区間を引き継ぐ。
- 液晶は神保ステージから開始するため、ステージだけでは変更判別不可。

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。

### ceilingAfterReset
- 有利区間移行後867G付近（液晶上約900G）で雀聖BONUS。
- 設定変更専用の通常天井短縮は確認されず、AT後の32G引き戻し区間がないぶん液晶表示上の到達位置が異なる点に注意。

### modeAfterReset
- 有利区間移行時に牌ポイントを再抽選。
- 公開振り分け: 1pt 43.359%、2pt 25.000%、3pt 15.625%、4pt 6.250%、5pt 6.250%、6pt 1.563%、7pt 1.563%、8pt 0.391%。

### stateAfterReset
- 設定変更時は非有利区間へ移行し、内部状態をリセット後に有利区間へ移行。
- 据え置き/純電断では内部状態引継ぎ。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 通常時から有利区間ランプ点灯型。

### resetBenefits
- 設定変更後1回目のAT当選内訳: 玄人タイム約38% / 雀聖BONUS約62%。
- 設定変更後はモーニングフリーズが1/16384で発生し、クリア確定の雀聖BONUS（緑）へ。

### resetPenalties
- 設定変更専用の定量的不利要素は直接公開確認なし。

### resetDetection
- 朝一有利区間ランプ消灯なら設定変更濃厚、点灯なら据え置き濃厚。
- 神保ステージ開始は設定変更・電源OFF→ONの双方で共通なので単独判別には使えない。

### numericResetData / publicMorningNumbers
- モーニングフリーズ: 1/16384。
- 設定変更後1回目初当り: 玄人タイム約38% / 雀聖BONUS約62%。
- 有利区間移行時牌pt: 1pt 43.359 / 2pt 25.000 / 3pt 15.625 / 4pt 6.250 / 5pt 6.250 / 6pt 1.563 / 7pt 1.563 / 8pt 0.391%。

## conflicts
- 天井表現は「液晶約900G」と「有利区間移行後867G」が併記される。定義差でありCONFLICT扱いせず双方を保持。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件: NO_PUBLIC_CONFIRMED_CONTRACT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://www.pachibee.jp/machines/index/220100008 — 導入日、機械割、CZ/初当り、AT基本性能 / INDUSTRY
- https://1geki.jp/slot/s_tetsuya_tenun/ — 導入日、設定別出玉率・初当り、純増、ゲーム性 / ANALYSIS_HIGH
- https://nana-press.com/kaiseki//machine/96/ — 約50G/50枚、AT純増、導入日 / ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/96/2337/ — 設定変更時、モーニングフリーズ、初回当選割合、牌pt振り分け / ANALYSIS_HIGH
- https://slotjin.com/tenjoukitaichi/tetsuya/ — 設定変更/据え置き/純電断、有利区間ランプ、867G天井 / ANALYSIS_SINGLE
- https://www.slopachi-quest.com/article/tetuya-tennunn-tenjou/ — reset挙動、867G天井、ランプ判別の照合 / ANALYSIS_SINGLE
- https://nana-press.com/kaiseki/machine/96/2518/ — AT後32G引き戻し、有利区間リセット / ANALYSIS_HIGH
- https://kaiseki.sulopachinews.com/archives/2352 — 型式名 / DATABASE
