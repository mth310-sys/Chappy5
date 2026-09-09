machineName: ケロロ軍曹
manufacturer: 大都技研
releaseDate: 2017-06-19
recordNumber: 1093
generation: 5号機 / 5.5号機
systemType: ART / ボーナス非搭載 / セット継続+ストック
formalModelName: ケロロ軍曹／A2
certificationNumber: 6S1378
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 大都技研公式製品ページで「スロット ケロロ軍曹」を確認。
- HAZUSEで型式 `ケロロ軍曹／A2`、検定番号 `6S1378`、導入開始日2017-06-19、メーカー大都技研を確認。
- パチビー、P-WORLD、K-Navi 2017年6月導入カレンダー、複数解析でも2017-06-19導入で一致。
- ちょんぼりすた本文冒頭に2017-06-05表記が残るが、同記事内の導入日表は2017-06-19であり、他の複数当時資料とも6/19で一致するため、6/5は旧予定/残存表記としてcanonicalには採用しない。
reliability: OFFICIAL_PLUS_OLD_DB_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|98.0%|
|2|99.9%|
|3|102.4%|
|4|105.2%|
|5|110.4%|
|6|115.3%|
- HAZUSE、アタリ7、複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|確率|
|---:|---:|
|1|1/398.2|
|2|1/380.0|
|3|1/363.6|
|4|1/317.2|
|5|1/340.0|
|6|1/260.4|

### CZ「ストーリー」当選
|設定|確率|
|---:|---:|
|1|1/149.5|
|2|1/145.7|
|3|1/135.6|
|4|1/133.6|
|5|1/141.5|
|6|1/125.0|
- CZは初当たり構造上重要なため最低限値として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE精密値: **約45.7G/50枚**（設定1〜6共通表記）。
- 複数解析では約45G/50枚。丸め差として整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART純増: **約2.0枚/G**。
reliability: OFFICIAL_PRODUCT_CONTEXT_PLUS_MULTI_SOURCE_ANALYSIS

## basicPayout
- ART「共鳴タイム」: 1セット30G以上。初回は40G以上。
- 「侵略タイム」: 10Gの継続ジャッジ区間。
- ボーナス非搭載のためBB/RB獲得枚数は NOT_APPLICABLE。
reliability: OLD_DB_AND_MULTI_SOURCE_ANALYSIS

## modeSpecificMinimumData
- 通常時最大 **1556G**消化でART当選濃厚。
- 設定変更時およびART終了後の一部で **129G**へ天井短縮抽選。
- 規定ゲーム数到達時にCZ抽選が存在（129/326/556/723/966G等）。本DBでは全通常モードテーブルは収集対象外。
- 通常時の共鳴数はCZ当選率に影響。
- 「惑星麻酔バトル」用の内部ポイントが別管理で存在。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_AND_POWER_CYCLE_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET / RESELECT。
- 設定変更後は129G天井への短縮抽選あり。
- 共鳴数: RESET。
- 惑星麻酔ポイント: RESELECT とする当時解析あり。
- 液晶開始ステージ: 日向家。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 「据え置き」と明記した独立比較資料は検索語を変えて再探索したが、今回の取得資料では十分に直接固定できず `UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH`。
- 純電源OFF→ON契約は別項に直接資料があるため、据え置き一般論とは分離する。
reliability: UNVERIFIED_FOR_DIRECT_STAY_SETTING

### powerCycleBehavior
- 純電源OFF→ON時:
  - 天井ゲーム数: CARRYOVER。
  - 共鳴数: RESET（当時一撃の直接比較表）。
  - 惑星麻酔ポイント: CARRYOVER とする別当時解析あり。
  - 液晶開始ステージ: 日向家。
- 「共鳴数」と「惑星麻酔ポイント」は別内部要素のため、RESET/CARRYOVERの差は競合ではない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DISTINCT_INTERNAL_ELEMENTS

### gameCounterReset
- settingChange: RESET / ceiling reselection。
- powerOffOn: CARRYOVER。
- carryOver/stay-setting: UNVERIFIED_DIRECT_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 通常天井: 1556G。
- 設定変更時129G天井選択率:
  - 設定1: 12.5%
  - 設定2: 14.1%
  - 設定3: 15.6%
  - 設定4: 17.2%
  - 設定5: 20.3%
  - 設定6: 25.0%
- 129G短縮は設定変更時の明確な朝一恩恵。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_NUMERIC

### modeAfterReset
- 設定変更時の「全通常モード再抽選表」は本ミッション粒度では不要。
- 朝一専用固定モードの存在は `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット後の主要比較要素は129G短縮抽選と内部要素のRESET/RESELECTとして記録。

### stateAfterReset
- 一般的な低確/高確/超高確の設定変更時公開振り分けは、機種名・型式・メーカー名と「朝一/状態/高確/設定変更」を組み替えて再探索したが、比較可能な直接数値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 共鳴数および惑星麻酔ポイントは別管理要素として上記挙動を保持。
reliability: UNVERIFIED_FOR_CLASSIC_LOW_HIGH_STATE_DISTRIBUTION

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更後、129G天井が設定1でも12.5%、設定6で25.0%選択される。
- 通常1556Gに対して大幅な短縮のため、朝一客行動に影響し得る主要恩恵として採用。

### resetPenalties
- 設定変更で前日天井進捗は消失。
- 共鳴数もRESET。
- その他の設定変更専用冷遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一液晶は設定変更時・純電源OFF→ON時とも日向家のため、開始ステージ単独では変更確定にならない。
- 129G以内のART当選は設定変更後短縮の推測材料になり得るが、通常時にも規定ゲーム数CZ抽選等があり、単発結果からの確定判別とはしない。
- 本機固有の確定ガックン/リール始動挙動/ランプによる変更判別契約は、検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_RESET_CLUE; UNVERIFIED_FOR_DETERMINISTIC_GAKKUN

### numericResetData
- normalCeiling: 1556G。
- resetShortCeiling: 129G。
- reset129SelectionBySetting: 12.5 / 14.1 / 15.6 / 17.2 / 20.3 / 25.0%。
- settingChangeStage: 日向家。
- powerCycleStage: 日向家。

## conflicts
- releaseDate display conflict: ちょんぼりすた冒頭に2017-06-05表記がある一方、同記事内導入日表・大都公式製品存在・HAZUSE・パチビー・K-Navi・アタリ7・他解析は2017-06-19で一致。canonicalは2017-06-19。値を平均しない。
- power-cycle internal elements: 一撃の「共鳴数RESET」と別解析の「惑星麻酔ポイントCARRYOVER」は対象変数が異なるためCONFLICTではない。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for canonical payout/ART/reset-shortening values.

## missingFields
- direct independent stay-setting behavior: UNVERIFIED_AFTER_RESEARCH
- classic low/high internal-state distribution after setting change: UNVERIFIED_AFTER_RESEARCH
- deterministic gakkun/lamp/reel reset-detection contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. 大都技研公式「スロット ケロロ軍曹」 — https://www.daitogiken.com/contents/product/slot/keroro/
2. HAZUSE 基本/型式/検定番号/性能 — https://hazuse.com/machine/pachislot/6S1378/
3. HAZUSE 基本スペック — https://hazuse.com/machine/pachislot/6S1378/genre/201/
4. 一撃 天井/設定変更/電源OFF ON — https://1geki.jp/slot/s_kelolo/3/
5. P-WORLD — https://www.p-world.co.jp/machine/database/8408
6. パチビー — https://www.pachibee.jp/machines/index/217050018
7. K-Navi 2017年6月導入カレンダー — https://p-kn.com/calendar/201706/
8. アタリ7 — https://www.atari7.com/slot/date1496131540.php
9. すろぱちくえすと — https://www.slopachi-quest.com/article/keroro-gunsou/
10. ちょんぼりすた — https://chonborista.com/slot/daito-slot/36615/
11. pachislo-data 朝一リセット比較 — https://pachislo-data.com/daito/36858
