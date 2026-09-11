# パチスロKING黄門ちゃま

No: 1394
machineName: パチスロKING黄門ちゃま
machineNameVariants: パチスロKING黄門ちゃま / KING黄門ちゃま / キング黄門ちゃま / Sキング黄門ちゃま / SパチスロKING黄門ちゃまL6
manufacturer: オリンピア
releaseDate: 2021-02-08
formalModelName: SパチスロKING黄門ちゃまL6
certificationNumber: 0S0290

generation: 6.1号機
systemType: AT / CZ経由 / 差枚数管理型AT

## identity / release
- HAZUSEで型式 `SパチスロKING黄門ちゃまL6`、検定番号 `0S0290`、メーカーオリンピア、導入開始日2021-02-08を確認。
- グリーンべるとでは平和発表・オリンピア製、ホール納品2021-02-07予定を確認。各新台カレンダー/解析では導入開始2021-02-08で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.6% |
| 3 | 100.3% |
| 4 | 103.6% |
| 5 | 107.0% |
| 6 | 110.0% canonical / 111.0% HAZUSE |
- 必勝本系、なな徹、スロパチクエスト等は97.3 / 98.6 / 100.3 / 103.6 / 107.0 / 110.0%。
- HAZUSEは設定1〜5一致、設定6のみ111.0%。平均せず `CONFLICT_SETTING6_PAYOUT_110.0_VS_111.0` として保持し、複数一致の110.0%をcanonicalとする。
- reliability: ANALYSIS_HIGH / CONFLICT

## initialHitBySetting
主要比較値としてCZ「勧善懲悪ジャッジメント」とAT初当たりを併記する。

| 設定 | CZ | AT初当たり |
|---:|---:|---:|
| 1 | 1/271.8 | 1/523.2 canonical / 1/532.2 HAZUSE |
| 2 | 1/267.4 | 1/487.9 |
| 3 | 1/257.7 | 1/434.3 |
| 4 | 1/245.3 | 1/373.9 |
| 5 | 1/230.3 | 1/319.7 |
| 6 | 1/215.3 | 1/276.5 |
- CZ確率は複数解析で一致。
- AT設定1のみ、必勝本系/なな徹/スロパチクエスト等の1/523.2に対してHAZUSEは1/532.2。平均せず `CONFLICT_SETTING1_AT_1_523.2_VS_1_532.2` とする。
- reliability: ANALYSIS_HIGH / CONFLICT

## baseGamesPer50
- 約38.3G/50枚。
- なな徹、HAZUSE、複数解析で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT: 約6.0枚/G。
- グリーンべると、なな徹、P-WORLD、HAZUSEで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- ATは差枚数管理型で、AT当選時は必ず差枚数上乗せ特化ゾーン「王ちゃまGAME」から開始。
- 王ちゃまGAMEは1セット3G、セットループ率50%以上、毎ゲーム20〜200枚を上乗せ。
- 公開平均上乗せ枚数は設定1 363.1枚〜設定6 267.9枚。設定差が大きいため固定1値には丸めない。
- カモンボーナスは20G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はモードA〜Eの5モード。モードによりCZ規定G数と成功期待度が変化。
- 最大天井は有利区間移行後600GでCZ当選。モード別天井はA 600G / B 500G / C 310G / D 200G / E 200G（Eは99.6%で100G）。
- 200G以内CZ当選率60%OVERが業界資料/解析で公表されている。
- CZは4戦突破型で成功率50%OVER。設定別CZ成功期待度は設定1 53.4%〜設定6 81.1%の公開値あり。

coreStatus: COMPLETE_CORE_WITH_CONFLICTS

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_INITIAL_MODE_TABLE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間RESET、天井RESET、内部モードRESET、内部状態RESET、八兵衛ポイントRESET。
- 液晶は「お銀旅館」から開始。
- 古い資料には一部「調査中」が残るが、HAZUSE後発解析で上記を直接確認できるため、後発確定情報を採用する。

### carryOverBehavior
- 据え置き時は設定変更を伴わないため、有利区間・天井・内部モード・内部状態をCARRY_OVER側として扱う。
- 通常時から有利区間ランプ点灯型のため、朝一点灯は据え置き濃厚。
- 前日がランプ消灯状態で閉店、店側対策等の例外があるため確定判別とはしない。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER、天井CARRY_OVER、内部モードCARRY_OVER、内部状態CARRY_OVER。
- 八兵衛ポイントと電源ON後ステージは後発HAZUSEでも「調査中」のため `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の一律固定短縮天井はない。
- 新規有利区間移行時にモードA〜Eを再抽選し、選択モードによって実質天井が100〜600Gに変動する。
- モードA 600G / B 500G / C 310G / D 200G / E 200G（99.6%で100G）。

### modeAfterReset
- 設定変更後は新規有利区間開始に伴いモードA〜Eを設定別に再抽選。

| 設定 | A | B | C | D | E |
|---:|---:|---:|---:|---:|---:|
| 1 | 32.8% | 11.7% | 3.9% | 43.8% | 7.8% |
| 2 | 30.1% | 12.1% | 4.7% | 45.3% | 7.8% |
| 3 | 24.2% | 12.5% | 6.3% | 49.2% | 7.8% |
| 4 | 16.8% | 12.9% | 9.4% | 53.1% | 7.8% |
| 5 | 8.6% | 13.3% | 12.5% | 57.8% | 7.8% |
| 6 | 1.2% | 13.7% | 14.8% | 62.5% | 7.8% |

- 1geki、HAZUSE、スロパチクエスト、必勝本系で一致。
- 設定1でもD以上は51.6%、設定6ではD以上70.3%。
- CZ失敗後の有利区間継続時、AT終了後の継続時には別モード移行があるが、全通常移行表は実機完全再現領域のため本レコードでは朝一比較に必要な初回表を主に保持する。

### stateAfterReset
- 設定変更時: 内部状態RESET。
- 有利区間移行時は高確スタート確定とする後発解析あり。
- 純電源OFF→ON: 内部状態CARRY_OVER。
- 低確/通常/高確の通常時全移行表は実機完全再現用のため収集対象外。

### advantageousSectionReset
- 設定変更: RESET / 新規有利区間へ移行。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- CZ失敗後・AT終了後にも有利区間継続の可能性があり、AT終了後に継続した場合はモードE濃厚/解析上100%移行。

### resetBenefits
- 新規有利区間開始時のモード再抽選により、設定1でもモードD以上が51.6%。モードDなら200G天井、モードEは99.6%で100G当選。
- 200G以内CZ当選率60%OVERという公開値があり、朝一客行動に影響する比較値として保持する。ただしこれは設定変更専用確率ではなく通常のモード構成を含む機種全体の公表値。
- 有利区間移行時は高確スタート確定。
- KINGアイランドビーチ突入抽選も有利区間開始時に行われるが、朝一物差しに必要な範囲を超える詳細小役別抽選は収集しない。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認できない。

### resetDetection
- 有利区間ランプはクレジット右下のドット。
- 本機は通常時点灯型。朝一点灯=据え置き濃厚、消灯=設定変更濃厚。
- 店側対策、前日消灯状態での閉店等では判別不能になるため確定条件にはしない。
- 本機固有のリールガックン条件/発生率は機種名・型式・メーカー・リセット/据え置き/ガックンで再探索しても直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 有利区間開始時初回モード振り分け: 上表。
- 設定1 D以上: 51.6%。設定6 D以上: 70.3%。
- モード別天井: A600 / B500 / C310 / D200 / E200G（Eは99.6%で100G）。
- 200G以内CZ当選率: 60%OVER（設定変更専用ではない）。
- 設定変更後開始ステージ: お銀旅館。
- 設定変更専用固定短縮天井: NONE_CONFIRMED。

## sources
取得日: 2026-09-12

1. グリーンべると「時間効率と期待感を重視したKINGスペック／『KING黄門ちゃま』」
   - https://web-greenbelt.jp/post-42720/
   - オリンピア製、納品時期、CZ成功率50%OVER、200G以内CZ当選率60%OVER、AT純増6.0枚/G、王ちゃまGAME概要を確認。
   - reliability: INDUSTRY

2. HAZUSE「パチスロKING黄門ちゃま」
   - https://hazuse.com/machine/pachislot/0S0290/
   - 型式 `SパチスロKING黄門ちゃまL6`、検定番号0S0290、導入日、ベース、純増、設定別CZ/AT、機械割、有利区間開始モード表を確認。
   - reliability: ANALYSIS_HIGH

3. HAZUSE「天井・設定変更」
   - https://hazuse.com/machine/pachislot/0S0290/genre/207/
   - 設定変更時の有利区間・天井・内部モード・内部状態・八兵衛pt RESET、お銀旅館開始、純電断時の各引継ぎ、有利区間ランプ判別を確認。
   - reliability: ANALYSIS_HIGH

4. なな徹「KING黄門ちゃま」
   - https://nana-press.com/kaiseki/machine/101/
   - 導入2021-02-08、AT純増約6.0枚/G、約38.3G/50枚、200G以内CZ当選率60%OVERを照合。
   - reliability: ANALYSIS_HIGH

5. なな徹「通常時のモード」
   - https://nana-press.com/kaiseki/machine/101/2923/
   - モード別天井、初回モード移行率を照合。
   - reliability: ANALYSIS_HIGH

6. なな徹「王ちゃまGAME」
   - https://nana-press.com/kaiseki/machine/101/2931/
   - 1セット3G、50%以上ループ、毎G20〜200枚上乗せ、設定別平均上乗せ枚数を確認。
   - reliability: ANALYSIS_HIGH

7. 1geki「モード移行抽選」
   - https://1geki.jp/slot/s_king_km_index/42/
   - 有利区間開始時の設定別モードA〜E振り分けを別系統で照合。
   - reliability: ANALYSIS_HIGH

8. 必勝本系「パチスロKING黄門ちゃま」
   - https://hisshobon.news/uncategorized/2327/
   - 設定別CZ/AT/機械割、ベース、純増、有利区間移行時高確スタート、初回モード表を確認。
   - reliability: ANALYSIS_HIGH

9. P-WORLD「パチスロKING黄門ちゃま」
   - https://www.p-world.co.jp/machine/database/9293
   - AT純増6.0枚/G、王ちゃまGAME1セット3G/50%以上、カモンボーナス20Gを照合。
   - reliability: ANALYSIS_HIGH

10. スロパチクエスト「KING黄門ちゃま 天井狙いまとめ」
   - https://www.slopachi-quest.com/article/king-koumoncyama-tenjou/
   - 初回モード表、設定変更/純電断比較、ランプ判別を別系統で照合。
   - reliability: ANALYSIS_HIGH

## missingFields
- 純電源OFF→ON時の八兵衛ポイント引継ぎ/リセット: UNVERIFIED_AFTER_RESEARCH（後発HAZUSEでも調査中）。
- 純電源OFF→ON時の液晶開始ステージ: UNVERIFIED_AFTER_RESEARCH。
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH。

## conflicts
- `CONFLICT_SETTING6_PAYOUT_110.0_VS_111.0`: 多数資料110.0%、HAZUSE 111.0%。平均化せず複数一致の110.0%をcanonical。
- `CONFLICT_SETTING1_AT_1_523.2_VS_1_532.2`: 多数資料1/523.2、HAZUSE 1/532.2。平均化せず多数一致の1/523.2をcanonical。
