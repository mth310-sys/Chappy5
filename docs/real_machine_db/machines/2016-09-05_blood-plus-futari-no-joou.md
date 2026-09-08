machineName: パチスロBLOOD+ 二人の女王
manufacturer: タイヨーエレック
releaseDate: 2016-09-05
recordNumber: 1005
generation: 5号機 / 5.5号機期
systemType: A+ART / ボーナス+ゲーム数上乗せART
formalModelName: パチスロBLOOD＋ 二人の女王／XA
certificationNumber: 6S0606
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2016-09-05、メーカー タイヨーエレック、型式名「パチスロBLOOD＋ 二人の女王／XA」、検定番号6S0606を確認。
- 一撃、K-Navi、pachislo-dataでも2016-09-05導入を照合。
reliability: INDUSTRY_DB_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.7% |
| 3 | 100.7% |
| 4 | 104.5% |
| 5 | 108.2% |
| 6 | 112.2% |
- HAZUSE、一撃、pachislo-data、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/455.1 | 1/398.0 | 1/212.3 |
| 2 | 1/448.8 | 1/382.5 | 1/206.5 |
| 3 | 1/436.9 | 1/356.1 | 1/196.2 |
| 4 | 1/420.1 | 1/315.3 | 1/180.1 |
| 5 | 1/404.5 | 1/270.9 | 1/162.2 |
| 6 | 1/381.0 | 1/231.1 | 1/143.9 |
- HAZUSE、一撃、pachislo-data、すろぱちくえすとで同系列一致。
- 一部整理資料の設定2ボーナス1/448.9は丸め精度差として原値を分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約34G/50枚。
- すろぱちくえすとでは33.97〜34.29G/50枚、pachislo-dataでは約34G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「BLOOD CHANCE+」: 約1.5枚/G。
- ボーナス込み参考: 約1.8枚/G。
- ART基本: 1セット50G+α。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
canonical:
- BLOOD BONUS / Secret Story Bonus: 約204枚。
- 二人の女王モード（プレミアムボーナス）: 約28枚。
conflict:
- 一部整理資料にBIG / Secret Story Bonus 208枚表記あり。HAZUSE配当表（305枚超払い出し終了→204枚獲得）と一撃等の204枚系列をcanonicalとし、208枚は `CONFLICT_BIG_PAYOUT_204_VS_208` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT

## modeSpecificMinimumData
- A+ART機。ART「BLOOD CHANCE+」は1セット50G+α、約1.5枚/G。
- CZ「BLOOD CHANCE」搭載。設定別CZ初当たり公開値は設定1 1/237.6 → 設定6 1/138.6。
- 通常時にはBLOOD EYE出現率に関わる4段階内部状態（低確/通常/高確/超高確）と、DEAD or ALIVE当選率に関わる5段階DOAモードA〜Eが存在。
- DOAモードは通常遊技中、ボーナスまたはART当選まで転落しない。最上位モードEではBLOOD EYE出現時の約50%でDEAD or ALIVE。
- 規定ゲーム数到達によるART天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時はDOAモードを再抽選。
- BLOOD EYE出現率に関わる内部状態も再抽選。
- 朝一液晶ステージは沖縄ステージ。
- 規定G数天井は非搭載のため、天井ゲーム数リセット概念はNOT_APPLICABLE。
- 一撃の2016-09-14時点ページでは設定変更時のモード/状態/液晶を「調査中」としていたが、その後の解析整理で再抽選・沖縄開始が公開されているため情報成熟差として扱う。

### carryOverBehavior
- 据え置きではDOAモード・内部状態を引き継ぐ。
- 前日のハマリ中に蓄積したDOAモード昇格価値が残るため、ハマリ/BEスルー履歴が朝一価値を持ち得る。
- 規定ゲーム数天井は非搭載。

### powerCycleBehavior
- 純電源OFF→ONではDOAモードを引き継ぐ。
- 内部状態も引き継ぐ。
- すろぱちくえすとは純電源OFF→ONのみの場合ガックン判別無効と整理。
- 一撃の2016-09-14時点では各項目「調査中」だったため、後続解析との情報成熟差をdataQualityNotesへ保持。

### gameCounterReset
- NOT_APPLICABLE_NO_GAME_COUNT_CEILING。
- 規定ゲーム数到達型のART救済天井は非搭載。

### ceilingAfterReset
- 通常/設定変更とも固定ゲーム数天井なし。
- 設定変更専用短縮天井: NOT_APPLICABLE。
- 一部攻略のハマリG数狙いは、天井発動GではなくDOAモード上昇期待を利用した立ち回り目安なので混同しない。

### modeAfterReset
- DOAモードA〜E: SETTING_CHANGE_RESELECT / POWER_CYCLE_CARRYOVER / CARRYOVER。
- 設定変更時A〜E具体的振り分けは、表記揺れ・設定変更/リセット/朝一/モード再抽選等へ検索語を変えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset
- 内部状態（低確/通常/高確/超高確）: SETTING_CHANGE_RESELECT / POWER_CYCLE_CARRYOVER / CARRYOVER。
- HAZUSEは「通常時BLOOD EYE揃い後の状態移行抽選 ※設定変更時も同様」と明記し、すろぱちくえすとも同一テーブルを掲載。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 固定短縮天井や設定変更専用CZ確定などの直接的リセット恩恵は確認されない。
- 設定変更後は内部状態を再抽選。高確スタート率は設定1〜3 1.6%、設定4 2.3%、設定5 3.9%、設定6 5.5%。通常以上開始率は設定1 11.0% → 設定6 38.3%。
- DOAモードも再抽選されるが、設定変更時のA〜E具体的振り分けはUNVERIFIED_AFTER_RESEARCH。

### resetPenalties
- 設定変更により、前日ハマリ中に昇格していた可能性のあるDOAモードと内部状態は引き継がず再抽選されるため、宵越し蓄積価値を失う可能性がある。
- 公開された固定のリセット不利数値は確認されない。

### resetDetection
- すろぱちくえすとは朝一設定変更時のリールガックン判別を「有効」、電源ON/OFFのみを「無効」と整理。
- メーカー保証の確定契約ではないため `GACKUN_REPORTED_USEFUL_NOT_MANUFACTURER_GUARANTEE` とする。
- 朝一沖縄ステージは設定変更時の公開挙動だが、客AIでは単独100%確定フラグとは扱わない。

### numericResetData
設定変更時内部状態振り分け（低確 / 通常 / 高確）:
| 設定 | 低確 | 通常 | 高確 | 通常以上 |
|---:|---:|---:|---:|---:|
| 1 | 89.0% | 9.4% | 1.6% | 11.0% |
| 2 | 85.1% | 13.3% | 1.6% | 14.9% |
| 3 | 81.2% | 17.2% | 1.6% | 18.8% |
| 4 | 76.6% | 21.1% | 2.3% | 23.4% |
| 5 | 71.1% | 25.0% | 3.9% | 28.9% |
| 6 | 61.7% | 32.8% | 5.5% | 38.3% |
- HAZUSEとすろぱちくえすとで一致。
- 設定変更時DOAモードA〜E具体振り分け: UNVERIFIED_AFTER_RESEARCH。
- 設定変更専用短縮天井/一定G以内当選率: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH。

## dataQualityNotes
- 導入日、型式/検定番号、機械割、ボーナス/ART確率、ベース、ART純増、基本獲得枚数は複数資料で照合。
- resetBehaviorは一撃の2016-09-14時点初期ページが「調査中」だが、後続のすろぱちくえすとで設定変更時DOA/状態再抽選、電源OFF→ON引継ぎ、沖縄ステージ、ガックン差を整理。DOAモード通常時性質はHAZUSE/一撃でも照合。
- 設定変更時の内部状態数値はHAZUSEとすろぱちくえすとで一致。
- 設定変更時DOAモードA〜E具体振り分けは十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
- BIG獲得枚数は204枚/208枚競合を平均せず保持。

## conflicts
- `CONFLICT_BIG_PAYOUT_204_VS_208`: HAZUSE・一撃等の204枚系列に対し一部整理資料208枚。canonical 204枚、208枚を競合原値として保持。
- `ROUNDING_SETTING2_BONUS_4488_VS_4489`: 1/448.8と1/448.9の丸め差。原値保持。
- `INFORMATION_MATURITY_RESET_2016_09_14_PENDING_VS_LATER_RESOLVED`: 一撃初期ページは設定変更/電断項目を調査中、後続解析で再抽選/引継ぎ公開。数値競合ではなく時点差。

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロBLOOD+ 二人の女王
   - https://hazuse.com/machine/pachislot/6S0606/
   - 導入日、メーカー、型式、検定番号、機械割、ボーナス/ART確率、204枚/28枚、内部状態/DOAモード、設定変更時状態振り分け。
2. HAZUSE — 天井
   - https://hazuse.com/machine/pachislot/6S0606/genre/207/
   - 規定G数天井非搭載、DOAモード5段階、ボーナス/ARTまで転落なし、最上位50%。
3. 一撃 — 機種TOP
   - https://1geki.jp/slot/s_bloodplus2/
   - 2016-09-05導入、機械割、ART仕様、204枚。
4. 一撃 — ART概要
   - https://1geki.jp/slot/s_bloodplus2/81/
   - ART約1.5枚/G、1セット50G+α。
5. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_bloodplus2/3/
   - 天井非搭載、DOAモード、2016-09-14時点の設定変更/電断調査状況。
6. すろぱちくえすと — BLOOD+ 二人の女王 解析まとめ
   - https://www.slopachi-quest.com/blood-two-queens/
   - 機械割、初当たり、ベース、ART、朝一設定変更/電源OFF→ON、ガックン、設定変更時状態振り分け。
7. pachislo-data — BLOOD+二人の女王
   - https://pachislo-data.com/taiyoelec/26437
   - 2016-09-05、約34G/50枚、A+ART、約1.5枚/G、初当たり/機械割、204枚。
8. K-Navi — パチスロBLOOD＋ 二人の女王
   - https://p-kn.com/slot/2565/
   - ホール導入2016-09-05、基本スペック照合。

## missingFields
- 設定変更時DOAモードA〜Eの具体的振り分け: UNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ON時の液晶ステージ: UNVERIFIED_AFTER_RESEARCH（物差し用途では低優先）。
