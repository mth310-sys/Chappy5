# パチスロ 化物語

machineName: パチスロ 化物語
aliases: 化物語 / バケモノガタリ / PACHISLOT 化物語
manufacturer: Sammy / サミー
releaseDate: 2013-10-07
releaseDatePrecision: exact_day
modelName: 化物語ZX
inspectionNumber: 3S0599

generation: 5号機
systemType: AT / 差枚数管理 / CZ / 疑似ボーナス
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- サミー公式の初代「PACHISLOT 化物語」。2025年スマスロ版や2020年セカンドシーズンとは別機種として分離。
- HAZUSE / K-Navi / DMMでホール導入開始 **2013-10-07** が一致。
- 型式名 **化物語ZX**、検定番号 **3S0599** はHAZUSEで確認。
- confidence: OFFICIAL_IDENTITY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.6% |
| 3 | 100.8% |
| 4 | 103.5% |
| 5 | 107.1% |
| 6 | 112.4% |

- HAZUSEと複数解析資料で一致。別資料の精密表記は97.38 / 98.63 / 100.82 / 103.55 / 107.11 / 112.42%で、丸め差として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「倖時間」初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/215.5 |
| 2 | 1/207.5 |
| 3 | 1/199.4 |
| 4 | 1/191.9 |
| 5 | 1/181.1 |
| 6 | 1/155.4 |

- K-Navi / HAZUSE / アタリ7で一致。
- 一部二次資料では設定4=1/191.4、設定5=1/181.0表記があり、丸め/集計差候補として平均せず注記のみ保持。
- CZ「解呪ノ儀」は設定別公開値もあるが、完全再現用詳細は本ミッション対象外。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30.5G/50枚（全設定）**。
- HAZUSE本機基本スペックで確認。
- confidence: ANALYSIS_SINGLE_HIGH

## netIncrease

- AT「倖時間」: **純増約2.7枚/G**。
- K-Navi / DMM / サミー系公式アプリ紹介など複数系統一致。
- confidence: OFFICIAL_SUPPORTING + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「倖時間」: **初期150枚**、差枚数管理型、純増約2.7枚/G。
- AT中疑似ボーナス: **30G**。
- CZ「解呪ノ儀」: 15G / 30G / AT当選まで、AT期待度約40%。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は低確/高確/超高確などのAT/CZ抽選状態を持つ。
- CZ連を管理する「解呪連モード」が存在。
- 通常時の全状態移行表・解呪連の全抽選は完全再現用のため収集対象外。

## ceiling

- **AT消化後の引き戻しゾーン終了後999G + 前兆**で天井。
- 恩恵: **AT「倖時間」+ 倍倍CHANCE**。
- DMMと当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CEILING_RESET_AND_STATE_HIGH_POSSIBILITY_CONFIRMED__POWER_CYCLE_KEEP_CONFIRMED__GACKUN_SINGLE_OBSERVATIONAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数はリセット**。
- **AT抽選状態は高確の可能性あり**。公開資料は「高確の可能性アリ」までで、100%や振り分け率へ拡張しない。
- **液晶は市街地ステージから開始**。
- DMMの2013年版本機ページのリセット仕様で直接確認。
- confidence: ANALYSIS_HIGH_DATABASE

### carryOverBehavior

- 設定変更を伴わない据え置き運用のうち、**電源OFF→ONのみでは天井G・AT抽選状態・液晶ステージを引き継ぐ**ことを本機固有資料で確認。
- 店側が電源操作を行わない純粋な連続稼働について別契約を設ける必要はないため、ホール朝一の据え置き物差しでは下記powerCycleBehaviorを直接根拠として扱う。
- confidence: ANALYSIS_HIGH_DATABASE

### powerCycleBehavior

- **天井までのゲーム数: 引き継ぐ**。
- **AT抽選状態: 引き継ぐ**。
- **液晶ステージ: 引き継ぐ**。
- DMM本機専用リセット仕様で直接確認。
- confidence: ANALYSIS_HIGH_DATABASE

### gameCounterReset

- setting change: **RESET**。
- power OFF→ON only: **KEEP**。
- carry-over morning operation: **KEEP_WHEN_NO_SETTING_CHANGE_POWER_CYCLE**。

### ceilingAfterReset

- 通常天井: **999G + 前兆**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更では天井進捗を0から再計算する。

### modeAfterReset

- 解呪連モードを含む内部モードの設定変更時の具体的な再抽選/引継ぎ契約、朝一専用モード、公開振り分け率は、機種名・型式・「設定変更/リセット/朝一/解呪連/モード/据え置き」を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- AT抽選「状態」と解呪連「モード」を混同しない。

### stateAfterReset

- setting change: **高確スタートの可能性あり**。
- power OFF→ON only: **状態引き継ぎ**。
- 設定変更時の低確/高確/超高確の具体的振り分け率: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後はAT抽選状態が高確の可能性があり、朝一CZ/AT抽選面で優遇される可能性が公開されている。
- 設定変更専用の短縮天井・確定CZ・確定AT: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日の999G天井進捗が消去されるため、深いハマリを据え置き前提で狙う宵越し価値は失われる。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 後年の本機実戦回顧で **朝一1G目のガックンあり→設定変更濃厚 / なし→据え置き濃厚** とされ、実機動画でも大きなリール振動を確認したとの記録あり。
- ただし朝一7揃い、店側の手動リール操作などがあると判別不能。メーカー解析ではなく実戦観測なので **確定判別とはしない**。
- confidence: ANALYSIS_SINGLE_OBSERVATIONAL

### publicMorningNumbers

- setting-change ceiling progress: **RESET to 0-equivalent progression**（通常天井999G+前兆）。
- reset-only shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- setting-change state distribution: **UNVERIFIED_AFTER_RESEARCH**（「高確の可能性あり」の定性情報のみ）。
- setting-change mode distribution: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / safeguards

- 2025年「スマスロ 化物語」のリセット600G天井・有利区間・HIGHモード情報は**別機種**のため流用禁止。
- 2020年「パチスロ〈物語〉シリーズ セカンドシーズン」も別機種。
- 機械割の小数第2位系列は97.38～112.42%、一般表記は97.4～112.4%。平均せず丸め精度差として保持。
- AT初当たり設定4/5に1/191.9 vs 1/191.4、1/181.1 vs 1/181.0の軽微な資料差あり。主系列はK-Navi/HAZUSE一致値を採用し競合注記を残す。

## sources

取得日: **2026-09-06**

1. Sammy公式「PACHISLOT 化物語」
   - https://www.sammy.co.jp/japanese/product/pachislot/bakemonogatari/
   - 初代製品の公式identity。
   - confidence: OFFICIAL

2. HAZUSE「パチスロ 化物語」
   - https://hazuse.com/machine/pachislot/3S0599/
   - 型式 化物語ZX / 検定3S0599 / 2013-10-07導入 / 機械割。
   - https://hazuse.com/machine/pachislot/3S0599/genre/201/
   - AT初当たり / 約30.5G/50枚 / 機械割。
   - confidence: ANALYSIS_HIGH_DATABASE

3. K-Navi「パチスロ化物語」
   - https://p-kn.com/slot/1930/
   - 2013-10-07導入 / AT初当たり / 初期150枚 / 純増約2.7枚/G / CZ概要。
   - confidence: ANALYSIS_HIGH

4. DMMぱちタウン「パチスロ化物語」
   - https://p-town.dmm.com/machines/1037
   - 型式 / 導入日 / 機械割範囲 / 天井 / リセット時と電源OFF→ON時の天井・状態・液晶契約。
   - confidence: ANALYSIS_HIGH_DATABASE

5. パチスロ解析ガイド「化物語」
   - https://pachislot-guide.net/2013/bakemonogatari/
   - 精密機械割97.38～112.42% / AT純増約2.7枚/G / 初期150枚。
   - confidence: ANALYSIS_SINGLE

6. スロット解析2013「化物語 天井スペック解析攻略」
   - https://www.slopachi-quest.com/article/376823545.html
   - 999G天井 / AT+倍倍CHANCE / 設定変更で天井Gリセット / 機械割・初当たり。
   - confidence: PERIOD_ANALYSIS

7. 真パチスロ備忘録「化物語 朝一1Gガックン動画」
   - https://sin-surobi.com/bakemonogatari/12767/
   - ガックン変更判別の実戦観測と対策注意。
   - confidence: ANALYSIS_SINGLE_OBSERVATIONAL

## missingFields

- 設定変更時の内部状態具体振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の解呪連モード/その他モード再抽選契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有のメーカー公式変更判別契約: UNVERIFIED_AFTER_RESEARCH

## nextQaNotes

- 後続QAで当時雑誌系アーカイブから設定変更時の低確/高確/超高確初期振り分けが回収できた場合のみnumericResetDataを追記する。
- スマスロ版の600Gリセット天井を絶対に混入させない。
