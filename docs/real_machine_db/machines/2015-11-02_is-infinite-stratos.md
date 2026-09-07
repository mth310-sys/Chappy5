# パチスロ IS〈インフィニット・ストラトス〉

machineName: パチスロ IS〈インフィニット・ストラトス〉
manufacturer: SANKYO
releaseDate: 2015-11-02
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 933
generation: 5号機
systemType: A+ART / ゲーム数解除+自力CZ / G数上乗せ型ART
formalModelName: パチスロ IS<インフィニット・ストラトス>
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity
- SANKYOオンライン博物館で2015年11月導入、ブランドSANKYO、販売名「パチスロ IS<インフィニット・ストラトス>」を公式確認。
- K-Navi、当時攻略資料、P-Summaで全国ホール導入開始日 **2015-11-02** が一致。
- K-Navi 2015年11月導入カレンダーは11月2日全国一斉導入開始機として掲載。
- 型式/検定番号は機種名表記揺れ、SANKYO、検定、型式、5S系などで再探索したが、今回直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 99.1% |
| 3 | 100.9% |
| 4 | 103.7% |
| 5 | 106.5% |
| 6 | 112.4% |

- 当時攻略複数資料で一致。
- 導入直後に実ホール出玉が公表値を大きく下回ったとの多数報告があるが、メーカー公表スペックと実績値を混ぜず、本DBの機械割canonicalは公表/解析スペック値を採用。

## initialHitBySetting
主要初当たりとしてART「SUPER STREAM」初当たりを採用。

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/374 |
| 2 | 1/370 |
| 3 | 1/366 |
| 4 | 1/325 |
| 5 | 1/319 |
| 6 | 1/309 |

参考ボーナス確率:
- 設定1: 1/348
- 設定2: 1/338
- 設定3: 1/327
- 設定4: 1/312
- 設定5: 1/302
- 設定6: 1/285

- SANKYOオンライン博物館の公式スペック表と複数攻略資料で一致。

## baseGamesPer50
- canonical: **約32G/50枚**。
- 当時攻略複数資料で一致。
- 導入直後のホール観測で25～26G/1000円程度との異常報告も存在するが、これは実績/挙動異常の報告であり、通常の公表性能コアと分離して保持する。

## netIncrease
- ART「SUPER STREAM」単体: **約1.5枚/G**。
- SANKYO公式オンライン博物館は **ボーナス込み約2.0枚/G** と説明。
- 定義が異なるため `1.5枚/G = ART単体`、`約2.0枚/G = ボーナス込み` と分離し、競合扱いしない。

## basicPayout
- ヒロインボーナス: **純増168枚**（規定払い出し243枚）。
- ART「SUPER STREAM」: **最低40G+α**、ゲーム数上乗せ型。
- ART突入時は「クインテット・ストラトス」で初期G数を決定。
- P-WORLDもSUPER STREAMを1セット40G+α、約1.5枚/G、ボーナス168枚と掲載。

## modeSpecificMinimumData
- 通常時は222G / 555G / 999G等のゾロ目ゲーム数がART当選の主要ポイント。
- 通常最大天井: **ボーナス&ART間999GでART確定**。
- 自力CZ「ISチャレンジ」は10G+α、ART期待度約35%。
- ISチャレンジ9回失敗後、10回目はART確定。途中で別契機ART当選時も失敗回数はリセットされる。
- ボーナス終了画面「ファーストキス」等で次回222G天井確定、ヒロイン1人画面で555G以下示唆/確定資料あり。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MULTI_QUERY_RESEARCH
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **ART天井G数をリセットし、リセット専用の優遇振り分けで再抽選**。
- **内部モードを再抽選**。
- 開始ステージは **IS学園**。
- ヒロインメーターの設定変更時内部pt処理は、電断時との直接比較では「リセットされない限り内部保持」とあるため、設定変更ではリセットされると読むのが自然だが、設定変更側の各メーター内部pt初期値を直接数値で示す資料は未確認。`RESET_SUPPORTED_BY_DIRECT_CONTRAST` として扱う。

### carryOverBehavior
- 据え置きは純電源OFF→ONの直接比較資料から、**ART天井/内部モードを引継ぎ**と整理。
- ヒロインメーターも内部ptを引き継ぐ。液晶表示は電源投入時に0表示になるため、表示値と内部値を分離する。
- CZ失敗回数の据え置き持越しは、本機固有の直接契約を今回十分固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON:
  - ART天井: **CARRYOVER**。
  - 内部モード: **CARRYOVER**。
  - ヒロインメーター表示: **0%表示へ戻る**。
  - ヒロインメーター内部pt: **CARRYOVER**。
  - 開始ステージ: **IS学園**。
- 設定変更との差が明示された当時攻略比較表を確認。

### gameCounterReset
- settingChange: **RESET**。
- carryOver: **CARRYOVER**。
- purePowerCycle: **CARRYOVER**。
- 表示メーターは純電断でも0に戻るため、見た目の初期化と内部天井/ptを混同しない。

### ceilingAfterReset
- 通常最大天井: **999G**。
- 設定変更時ART天井振り分け:
  - **222G: 1.0%**
  - **333G: 66.6～67.0%**
  - **555G: 1.0%**
  - **999G: 31.0～31.3%**
- 当時資料間の小数差は丸め差として扱う。
- 約3分の2で333G天井が選ばれるため、明確な朝一リセット恩恵。

### modeAfterReset
- settingChange: **RESELECT / 再抽選**。
- purePowerCycle/carryOver: **CARRYOVER / 引継ぎ**。
- 「内部モード」の存在・再抽選/引継ぎは直接比較資料で確認できたが、設定変更専用モード名および全モード振り分け表は今回直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 通常時の高確/前兆示唆ステージは確認できるが、設定変更時の低確/高確等の初期状態振り分けは再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- purePowerCycleでの「内部モード引継ぎ」は確認済みだが、モードとは別の全内部状態を自動同義化しない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の公開恩恵は、設定変更時に**333G天井が約66.6～67%**で選ばれること。
- 222G/555Gも各約1%、999G約31%。
- 通常最大999Gと比べ、朝一の浅い当選期待が大きく上昇する。

### resetPenalties
- 前日の天井進捗と内部モードが設定変更で消去されるため、前日深いハマり台の宵越し価値を失う。
- 前日貯まったヒロインメーター内部ptも設定変更では引継ぎ対象外とみられる直接対照がある。
- その他の設定変更固有の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 純電源OFF→ONでもヒロインメーター表示は0になるため、**朝一メーター0表示だけでは設定変更判別不可**。
- 設定変更/電断ともIS学園開始の資料であり、開始ステージ単独も判別材料として弱い。
- 内部メーターptは据え置きなら保持されるため、朝一のメーター上昇挙動から据え置きを推測できる可能性はあるが確定判別ではない。
- 本機固有のリールガックン発生契約/確定率は、機種名・SANKYO・設定変更・朝一・据え置き・ガックン等で再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- resetCeiling222G: **1.0%**。
- resetCeiling333G: **66.6～67.0%**。
- resetCeiling555G: **1.0%**。
- resetCeiling999G: **31.0～31.3%**。
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**（天井G振り分けとは別項目）。
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- `RESET_CEILING_ROUNDING`: 333G **66.6% vs 67%**、999G **31.3% vs 31%**。同一分布の丸め差としてcanonicalは範囲保持。
- `NET_INCREASE_DEFINITION`: ART単体約1.5枚/G vs SANKYO公式のボーナス込み約2.0枚/G。定義差のためCONFLICTへ昇格せず分離。
- `FIELD_OUTPUT_ANOMALY_2015_11`: 導入直後に公表機械割/ベースを大きく下回るホールデータ報告が多数存在。原因未確定であり性能コアcanonicalを実績値へ置換しない。
- `BELLCO_SAME_DAY_SOURCE_CONFLICT`: 11/02群の別機「プレミアムビンゴ」はK-Naviカレンダー/機種ページで2015-11-02導入だが、2015-08-06ベルコ発表記事は11/16予定としている。次リレーで当該機を処理する際に予定/実導入を分離して判定する。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- czFailureCountCarryOver: `UNVERIFIED_AFTER_RESEARCH`
- reelGakkun: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. SANKYOオンライン博物館 — パチスロ IS<インフィニット・ストラトス>
   - https://www.sankyo-fever.jp/collection/621/
   - 公式導入月、ブランド、販売名、ボーナス/ART設定別確率、ボーナス込み純増約2.0枚/G、最低40G、ゲーム性。reliability: OFFICIAL
2. K-Navi — パチスロ IS＜インフィニット・ストラトス＞
   - https://p-kn.com/slot/2350/
   - ホール導入開始2015-11-02。reliability: ANALYSIS_HIGH / PERIOD_DB
3. K-Navi — 2015年11月新台導入カレンダー
   - https://p-kn.com/calendar/201511/
   - 11/02全国一斉導入開始群でISを確認。reliability: INDUSTRY_PERIOD_DB
4. パチマガスロマガ — パチスロ インフィニット・ストラトス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/38/a.php
   - A+ART、ボーナス168枚、ART純増1.5枚/G、最低40G。reliability: ANALYSIS_HIGH
5. P-WORLD — パチスロ IS<インフィニット・ストラトス>
   - https://www.p-world.co.jp/machine/database/7847
   - ART 40G+α/約1.5枚/G、ボーナス168枚、天井222/555/999G。reliability: INDUSTRY_DATABASE
6. ちょんぼりすた — IS インフィニットストラトス スロット解析総まとめ
   - https://chonborista.com/slot/sankyo-slot/11892/
   - 設定別機械割/ART、約32G/50枚、天井、設定変更vs電源OFF ON、内部モード、ヒロインメーター内部保持、リセット天井振り分け。reliability: ANALYSIS_HIGH
7. スロット新台速報 / pachislo-data — IS解析
   - https://pachislo-data.com/sankyo/20505
   - 11/02導入、設定別性能、32G/50枚、999G天井、リセット天井振り分け、CZ失敗天井。reliability: ANALYSIS_HIGH
8. すろぱちくえすと — 朝一設定変更・リセット時の恩恵・挙動
   - https://www.slopachi-quest.com/article/is-reset/
   - 天井RESET、内部モード再抽選、222/333/555/999G=1/66.6/1/31.3%。reliability: ANALYSIS_HIGH_PERIOD
9. パチナビ — IS 設定判別・解析
   - https://pachinavi.net/machines/infinite-stratos/
   - 2015-11-02、機械割/ボーナス/ART、約32G/50枚。reliability: ANALYSIS_SECONDARY
10. P-Summa — スペック公開 / 2015-10-04
   - https://psumma.jp/trend/15454/
   - 当時記事として11/02導入、約32G/千円、A+ART、純増1.5枚/G。reliability: SECONDARY_PERIOD
11. P-Summa — タイマー基盤疑惑 / 2015-11-25
   - https://psumma.jp/pachislo/17191/
   - 導入直後の異常な実ホール出玉報告の当時記録。原因未確定のため性能canonicalには不使用。reliability: PERIOD_SECONDARY_FOR_ANOMALY_ONLY

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- officialIdentity: OFFICIAL
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_HIT_RATES
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetCeilingDistribution: ANALYSIS_HIGH_MULTI_SOURCE
- purePowerCycleCeilingMode: ANALYSIS_HIGH_DIRECT_COMPARISON
- heroMeterPurePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- resetGakkun: NONE_CONFIRMED_AFTER_RESEARCH
