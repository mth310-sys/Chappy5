machineName: SLOTギルティクラウン
manufacturer: エレコ
releaseDate: 2017-06-19
recordNumber: 1090
generation: 5号機 / 5.5号機
systemType: A+ART / CZ / リアルボーナス
formalModelName: SLOTギルティクラウンUC
certificationNumber: 7S0351
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Navi、パチビー、HAZUSE、一撃で2017-06-19導入・メーカー エレコが一致。
- HAZUSEで型式 `SLOTギルティクラウンUC`、検定番号 `7S0351` を直接確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OLD_DB_IDENTITY

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|98.5%|
|2|101.7%|
|5|108.1%|
|6|111.0%|
- 設定1/2/5/6の4段階。P-WORLD、一撃、当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/498.6|
|2|1/439.9|
|5|1/382.3|
|6|1/339.4|

### ボーナス
- CROWN BIG: 全設定共通 1/1985.9。
- BIG: 設定1 1/348.6 / 設定2 1/337.8 / 設定5 1/318.1 / 設定6 1/292.6。
- ボーナス合算: 1/296.5 / 1/288.7 / 1/274.2 / 1/255.0。
- 通常時CZ初当たり（ART終了後CZを除く）: 1/282.1 / 1/244.0 / 1/227.6 / 1/196.9。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約32.1〜32.5G/50枚。
- 当時解析でレンジ表記。単一点へ丸めない。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「ギルティクラウン」単体: 約1.4枚/G。
- ボーナス込み: 約2.0枚/G。
- 定義を分離して保存。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- CROWN BIG BONUS: 306枚（396枚超払い出しで終了）。
- BIG BONUS: 約150枚（232枚超払い出しで終了）。
- ART「ギルティクラウン」: 1セット30G+α、セットストック型。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: ボーナス＆ART間899G+前兆でCZ「ヴォイドチャンス」。
- 天井CZでART非当選でも、以後ART当選までCZ高確率状態となる。天井到達後は途中でBIGを挟んでもCZ高確率状態を維持する解析あり。
- 通常時CZ抽選にはA/B/C/DのCZモード、レア役CZ抽選には低確/高確系/超高確の内部状態が関与。
- 全通常移行率は実機完全再現用途のため収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_MODE_STATE_AND_POWER_CYCLE_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET / クリア。
- CZモード: RESELECT。
- 内部状態: RESELECT。
- 液晶ステージ: 天王洲第一高校。
- RT状態: パチ7の朝一比較表では設定変更時 `引き継ぎ` と明記。一般則から上書きしない。
reliability: ANALYSIS_HIGH_FOR_CEILING_MODE_STATE_DISPLAY; ANALYSIS_SINGLE_DIRECT_FOR_RT_SETTING_CHANGE

### carryOverBehavior
- 据え置きと明示した独立比較契約は、機種名/型式UC + 据え置き/朝一/リセット/RT/天井/モード等へ検索語を変えて再探索しても、純電断表と独立して十分に固定できず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 純電源OFF→ON契約は別項で直接確認できるため混同しない。
reliability: UNVERIFIED_FOR_DIRECT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 天井ゲーム数: CARRYOVER。
- CZモード: CARRYOVER。
- 内部状態: CARRYOVER。
- 液晶ステージ: 電断から2時間以内はCARRYOVER、2時間経過後は天王洲第一高校。
- RT状態: パチ7比較表では純電断時 `RT0`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_MODE_STATE_DISPLAY; ANALYSIS_SINGLE_DIRECT_FOR_RT0

### gameCounterReset
- settingChange: RESET。
- powerOffOn: CARRYOVER。
- carryOver/stay-setting: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。

### ceilingAfterReset
- standardCeiling: ボーナス＆ART間899G+前兆でCZ。
- resetCeiling: 899Gを0Gから再計数。
- setting-change-specific shortening: `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更時CZモード振り分け:
  - 設定1・5: A 68.7% / B 25.0% / C 6.3% / D 0%。
  - 設定2・6: A 50.0% / B 37.5% / C 12.5% / D 0%。
- 純電源OFF→ON: CZモードCARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT

### stateAfterReset
- 設定変更: 低確75.0% / 高確B25.0%へ再抽選。
- 純電源OFF→ON: 内部状態CARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更時は25.0%で高確Bスタート。
- CZモードB/Cスタート合算は設定1・5で31.3%、設定2・6で50.0%。
- 設定変更専用の固定天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 前日ボーナス＆ART間天井進捗は設定変更で消失。
- 前日CZモード・内部状態も設定変更で再抽選される。
- その他の設定変更専用冷遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時は液晶が天王洲第一高校となる一方、純電断でも2時間経過後は同ステージになるため、ステージ単独は確定判別にならない。
- RT状態を利用したリセット判別の回顧解説があり、パチ7朝一表では設定変更時RT引継ぎ / 純電断RT0という差を明記。ただし遊技開始時点の前日RT状態把握等が必要で、単純な確定ガックン判別ではない。
- 本機固有の確定的ガックン契約は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_RT_BASED_CLUE; UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetCZModeDistribution:
  - settings1_5: A68.7 / B25.0 / C6.3 / D0.0%。
  - settings2_6: A50.0 / B37.5 / C12.5 / D0.0%。
- resetStateDistribution: 低確75.0 / 高確B25.0%。
- resetHighStateStartRate: 25.0%。
- resetCZModeBOrHigher: settings1_5 31.3% / settings2_6 50.0%。
- standardAndResetCeiling: 899G+前兆（短縮なし）。

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for canonical performance core/reset numeric values.
- RT朝一契約はパチ7の直接表で `設定変更=引き継ぎ / 電断のみ=RT0`。直感的な一般挙動と逆に見えるため、他機種一般則で補正せず `ANALYSIS_SINGLE_DIRECT` として独立保持。
- 一部二次資料が機種タイプをA+RTと表記するが、メーカー系/主要解析はA+ARTとして扱い、ART「ギルティクラウン」を搭載するため本DB canonical systemTypeはA+ART。

## missingFields
- direct independent stay-setting contract separate from pure power-cycle table: UNVERIFIED_AFTER_RESEARCH
- deterministic gakkun contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. HAZUSE 型式/検定番号/導入日 — https://hazuse.com/machine/pachislot/7S0351/
2. K-Navi 導入日/基本情報 — https://p-kn.com/slot/2809/
3. パチビー 導入日/仕様 — https://www.pachibee.jp/machines/lecture/217050017
4. 一撃 基本スペック — https://1geki.jp/slot/s_guiltycrown/
5. 一撃 天井/設定変更/電源OFF ON/CZモード/状態振り分け — https://1geki.jp/slot/s_guiltycrown/3/
6. 一撃 CZモード解析 — https://1geki.jp/slot/s_guiltycrown/45/
7. 一撃 ART概要 — https://1geki.jp/slot/s_guiltycrown/81/
8. 一撃 ボーナス概要 — https://1geki.jp/slot/s_guiltycrown/61/
9. 一撃 設定判別/CZ初当たり — https://1geki.jp/slot/s_guiltycrown/5/
10. P-WORLD 機械割/ボーナス獲得枚数 — https://www.p-world.co.jp/machine/database/8395
11. パチ7 天井/朝一リセット/RT状態/電断2時間 — https://pachiseven.jp/machines/5182/cutout/78
12. パチ7 RT状態とリセット判別回顧 — https://pachiseven.jp/articles/detail/11434
13. すろかい 当時解析/50枚ベース — https://slotkaiseki.hatenablog.com/entry/gc
