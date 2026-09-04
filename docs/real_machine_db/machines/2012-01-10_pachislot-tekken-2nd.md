# パチスロ鉄拳2nd

machineName: パチスロ鉄拳2nd
manufacturer: 山佐
releaseDate: 2012-01-10
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: K-Navi・ハズセ・パチビーが2012-01-10を導入開始日として掲載。山佐公式は稼働時期を2012年1月と掲載。
modelName: パチスロ鉄拳2ZX
inspectionNumber: 1S0918
generation: 5号機
systemType: A+ART
recordStatus: COMPLETE_CORE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.7% |
| 2 | 98.9% |
| 3 | 101.3% |
| 4 | 104.0% |
| 5 | 107.1% |
| 6 | 112.2% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

ハズセ・パチビーで同一系列を確認。

## initialHitBySetting

| 設定 | BIG合算 | REG | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/425.6 | 1/642.5 | 1/256.0 | 1/566.5 |
| 2 | 1/392.4 | 1/595.8 | 1/236.6 | 1/493.7 |
| 3 | 1/402.1 | 1/606.8 | 1/241.8 | 1/540.4 |
| 4 | 1/362.1 | 1/546.1 | 1/217.7 | 1/460.0 |
| 5 | 1/368.2 | 1/555.4 | 1/221.4 | 1/510.2 |
| 6 | 1/341.3 | 1/512.0 | 1/204.8 | 1/441.3 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

ハズセ・パチビー・後年解析ガイドで主要確率系列を照合。ART初当たりは公開解析値を採用。

## baseGamesPer50

- 約31.4～31.7G/50枚

reliability: ANALYSIS_HIGH

ハズセの直接値。

## netIncrease

- ART「鉄拳RUSH」: 約+1.7枚/G
- プレミアムART「デビルRUSH」: 約+1.7枚/G

reliability: OFFICIAL_AND_ANALYSIS_CORROBORATED

## basicPayout

- SUPER BIG（赤7揃い）: 約300枚（420枚超払い出しで終了）
- NORMAL BIG（青7/白7系）: 約200枚（280枚超払い出しで終了）
- 鉄拳BONUS: 約40枚（7G消化）
- ART「鉄拳RUSH」: 山佐公式・パチマガスロマガ・必勝本では1セット40G。P-WORLD/パチビーでは「1セット50G+α」と掲載されるためCONFLICTとして保持。
- プレミアムART「デビルRUSH」: 10～50G+α、継続率90%。

reliability: OFFICIAL_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- A+ARTタイプ。
- ART「鉄拳RUSH」は山佐公式で1セット40G、純増約+1.7枚/G。終了後はART継続抽選区間「鉄拳チャンス」へ移行。
- 「鉄拳ATTACK」「頭突きコンボチャンス」の上乗せ特化要素を搭載。
- プレミアムART「デビルRUSH」を搭載。
- 通常天井はボーナス間1400G。到達時はデビルRUSH当選。
- ART当選では天井までのゲーム数はリセットされない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: INTERNAL_STATE_RESELECTION_CONFIRMED
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH_NO_RESET_SHORTENING_CONFIRMED
modeAfterReset: NO_SEPARATE_GAME_COUNT_RESET_MODE_CONFIRMED
stateAfterReset: CONFIRMED_SETTING_CHANGE_STATE_RESELECTION
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: OTHER_SETTING_CHANGE_CAN_START_HIGH_OR_SUPERHIGH_OR_PRECURSOR_STATE_CONFIRMED
resetPenalties: SAME_SETTING_REWRITE_STARTS_LOW_STATE_100_PERCENT_CONFIRMED
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: CONFIRMED_SETTING_CHANGE_STATE_DISTRIBUTION

numericResetData:
- 同一設定への打ち直し: 低確 100%。
- 他設定への変更時: 低確 50.00%、通常 16.67%。
- 他設定への変更時・高確: 設定1/3/5は30.83%、設定2/4/6は29.83%。
- 他設定への変更時・超高確: 全設定で0.50%として表の合計関係と掲載形式を確認。
- 他設定への変更時・前兆: 設定1/3/5は2.00%、設定2/4/6は3.00%。
- 通常天井: ボーナス間1400G。ART当選では天井ゲーム数をリセットしない。
- 設定変更時の天井ゲーム数CLEAR/RETAIN: UNVERIFIED_AFTER_RESEARCH。
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- ハズセの本機専用解析は、通常時の内部状態（低確/通常/高確/超高確/前兆）が設定変更時に再抽選されることを明記し、同一設定打ち直しと他設定変更を分けた公開振り分けまで掲載している。
- 同一設定への打ち直しは低確100%。他設定へ変更した場合は低確50.00%、通常16.67%、高確29.83～30.83%、超高確0.50%、前兆2～3%の振り分け。
- ボーナス間1400G天井そのものと「ARTでは天井カウンタ非リセット」は複数資料で確認したが、設定変更時に1400GカウンタがCLEARかRETAINかを本機固有の直接資料で確定できなかったため推測しない。
- 据え置き時の天井カウンタ/内部状態の厳密な引継ぎ、単純電源OFF→ON時の挙動、ガックン・初期出目・液晶等による変更判別は、機種名・型式名・メーカー名と「設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/ガックン/天井」を組み替え、当時解析・旧DB・回顧資料まで再探索したが本機固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- 有利区間は5号機のため非該当。

resetQaReliability: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH_WITH_NUMERIC_STATE_DATA

## sources

取得日: 2026-09-05

1. 山佐ネクスト公式 — パチスロ鉄拳2nd
   - https://yamasa-next.co.jp/model_tk2/
   - 5号機/A+ART、2012年1月稼働、鉄拳RUSH 1セット40G、ゲーム性を確認。
   - reliability: OFFICIAL
2. ハズセ — パチスロ鉄拳2nd
   - https://hazuse.com/machine/pachislot/1S0918/
   - 導入開始2012-01-10、型式名「パチスロ鉄拳2ZX」、検定番号1S0918、設定別ボーナス/ART確率、機械割、50枚ベース、1400G天井、設定変更時の内部状態振り分けを確認。
   - reliability: ANALYSIS_HIGH
3. K-Navi — パチスロ鉄拳2nd
   - https://p-kn.com/slot/1537/
   - ホール導入開始2012-01-10、メーカー、基本仕様を再照合。
   - reliability: ANALYSIS_HIGH
4. パチビー — パチスロ鉄拳2nd
   - https://www.pachibee.jp/machines/index/211110004
   - 導入日、ボーナス獲得枚数、純増約1.7枚/G、設定別確率・機械割、1400G天井を確認。鉄拳RUSHを50G+αとする表記はCONFLICTとして保持。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — パチスロ鉄拳2nd
   - https://www.p-world.co.jp/machine/database/6560
   - A+ART/天井/ボーナス獲得枚数/純増/1400G天井を再照合。鉄拳RUSHを50G+αとする表記はCONFLICTとして保持。
   - reliability: DATABASE_HIGH
6. パチマガスロマガ — パチスロ鉄拳2nd
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/184/a.php
   - 鉄拳RUSH 1セット40G、純増約1.7枚/G、ボーナス獲得枚数を再照合。
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本 — ART概要
   - https://p.hisshobon.jp/machine/1952/1/32654
   - 鉄拳RUSH 1セット40Gを再照合。
   - reliability: ANALYSIS_HIGH
8. パチスロ解析ガイド — 鉄拳 パチスロ2nd
   - https://pachislot-guide.net/2012/tekken2/
   - 導入日、ボーナス確率、ART初当たり、基本獲得枚数を補助照合。
   - reliability: RETROSPECTIVE_ANALYSIS

## missingFields

- 設定変更時のボーナス間1400G天井カウンタCLEAR/RETAINの直接根拠
- 据え置き時の天井カウンタ/内部状態の直接挙動
- 単純電源OFF→ON時の天井/内部状態の直接挙動
- ガックン等の設定変更判別の直接根拠

## conflicts

1. `CONFLICT_ART_BASE_GAME_DEFINITION`
   - 山佐公式 / パチマガスロマガ / 必勝本 / 複数回顧資料: 鉄拳RUSH 1セット40G。
   - P-WORLD / パチビー: 鉄拳RUSH 1セット50G+α。
   - メーカー公式を主値とするが、差は平均化せずCONFLICTとして保持。
