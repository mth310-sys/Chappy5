# パチスロ モンキーターンII

machineName: パチスロ モンキーターンII
formalModelName: モンキーターン2TT
manufacturer: 山佐
releaseDate: 2014-04-07
releaseDatePrecision: exact_national_hall_start
generation: 5号機
systemType: AT / ゲーム数解除 / CZ / シナリオ継続
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CONFIRMED_RESET_MODE_AND_CARRYOVER

## identity

- 山佐公式現行アーカイブは本機を **5号機 / ATタイプ / 2014年4月稼働**として掲載。
- K-Navi・HAZUSE・パチビーで全国導入開始 **2014-04-07** を確認。
- HAZUSEで型式名 **モンキーターン2TT**、検定番号 **4S0051** を確認。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE_EXACT_DATE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.4% |
| 3 | 100.5% |
| 4 | 104.0% |
| 5 | 107.8% |
| 6 | 112.5% |

- K-Navi系解析、HAZUSE系数値を引く当時攻略資料、後年整理資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「SG RUSH」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/294.1 |
| 2 | 1/284.9 |
| 3 | 1/266.4 |
| 4 | 1/254.6 |
| 5 | 1/237.2 |
| 6 | 1/223.5 |

- K-NaviとHAZUSEで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### CZ「超抜チャレンジ」出現率

| 設定 | CZ出現率 |
|---:|---:|
| 1 | 1/373.6 |
| 2 | 1/373.5 |
| 3 | 1/333.1 |
| 4 | 1/311.8 |
| 5 | 1/277.3 |
| 6 | 1/268.9 |

- 本機はCZがAT初当たり構造上重要なため、ミッションv0.7の方式別最低追加データとして保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/50枚**。
- HAZUSEが直接掲載。当時2014年攻略資料でも1000円あたり平均31G（全設定共通）を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「SG RUSH」: **約2.3枚/G**。
- 山佐公式はATタイプとして掲載し、K-Navi・パチマガスロマガ・パチビー等で純増約2.3枚/Gが一致。
- confidence: OFFICIAL_SYSTEM_IDENTITY + ANALYSIS_HIGH_MULTI_SOURCE_NUMERIC

## basicPayout

- SG RUSHは **初回50G+α**。
- HAZUSEでは **2セット目以降40G+α**、セット終盤のSGレースを含むシナリオ継続型ATとして掲載。
- K-Navi・パチマガスロマガも初回50G+αを確認。
- 固定獲得枚数型ではないため、基本性能はG数で保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定ゲーム数解除とCZ「超抜チャレンジ」が主要AT契機。
- ATはシナリオ管理型で、初回50G+α、2セット目以降40G+α、純増約2.3枚/G。
- CZ出現率は設定1 1/373.6〜設定6 1/268.9。
- 通常時の全モード移行表やAT内部の全上乗せ振り分けは、実機完全再現用のため収集対象外。

## ceiling

- 通常A: **999G + 前兆（最大表示1024G）**。
- 通常B: **704G**。
- 天国: **128G**。
- 設定変更専用リセットモード: **512G**。
- HAZUSEは通常時最大1024G（999G+前兆）でAT当選とし、設定変更時512Gを別モード天井として明記。
- 通常Aの最深部到達では次回天国確定とする当時解析あり。一方、リセットモード最深部に同じ恩恵があるとは扱わない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_CONFIRMED_RESET_MODE_512G_CARRYOVER_AND_DETECTION_SIGNALS
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更時は専用「リセットモード」へ移行**。
- HAZUSEのモード移行率では **全設定共通 リセットモード100%**。
- 設定変更により前日の通常A/B/天国のゲーム数契約は継続せず、リセットモードの規定G数管理へ切り替わる。
- confidence: ANALYSIS_HIGH

### carryOverBehavior

- 据え置き時は **天井ゲーム数を引き継ぐ / モードを引き継ぐ** とする機種別朝一解析を確認。
- 前日ゲーム数を加味したフェイク前兆発生が据え置き推測に利用されていた当時資料もある。
- confidence: ANALYSIS_HIGH_PERIOD_MULTI_SOURCE_BEHAVIOR

### powerCycleBehavior

- **設定変更を伴わない電源OFF→ON（据え置き）では天井・モード引継ぎ**とする機種別朝一解析を確認。
- 設定変更時と純電源再投入時の挙動差が明示されている。
- confidence: ANALYSIS_HIGH

### gameCounterReset

- **RESET_ON_SETTING_CHANGE / CARRY_OVER_ON_POWER_CYCLE_WITHOUT_SETTING_CHANGE**。
- 設定変更後は専用リセットモードの規定ゲーム数へ切り替わる。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- **512G**。
- 通常A最大999G+前兆（表示上最大1024G）に対し、設定変更後は専用リセットモード天井512Gへ短縮。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

- **リセットモード 100%（全設定共通）**。
- HAZUSEが設定変更時モード移行率として明記。
- confidence: ANALYSIS_HIGH

### stateAfterReset

- 低確/高確等、別の内部状態について設定変更時の具体的初期振り分けは、検索語・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- リセットモード確定を、別レイヤーの内部状態まで再抽選確定という意味に拡張しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 主要恩恵は **天井512Gへの短縮**。
- 当時攻略上、設定変更後は100〜128G付近の前兆・解除挙動が変更判別と朝一狙いに利用されていた。
- confidence: ANALYSIS_HIGH_PERIOD

### resetPenalties

- 通常A最深部（999G以降）に付く「次回天国」恩恵を、**リセットモード512G最深部には付与しない**とする実戦解析あり。
- これは通常天井短縮という恩恵に対する仕様差として保持するが、メーカー公表値ではない。
- confidence: ANALYSIS_SINGLE_PERIOD_PRACTICAL

### resetDetection

- **朝一1G目のリールガックン**: 設定変更濃厚台で確認した当時実戦資料があり、判別材料として使用可。ただし山佐筐体では弱く見えやすく、店側対策も可能。
- **朝一126〜128Gでフェイク前兆終了**: 設定変更濃厚パターンとして当時解析/実戦資料に掲載。
- **朝一128G以内に優出モードへ2回移行**: 設定変更濃厚パターンとして掲載。
- **70G付近からの前兆がガセ**かつ前日128Gヤメ等の条件では据え置き可能性上昇とする当時資料あり。
- 判別はいずれも確定契約ではなく **PROBABILISTIC / OBSERVATIONAL_SIGNAL** として保持。
- confidence: ANALYSIS_SINGLE_PERIOD + PERIOD_CROSS_SUPPORT

### publicMorningNumbers

- リセットモード天井: **512G**（解析値、全設定共通モード100%）。
- 当時実戦値A: **1〜128G 37.5% / 129〜256G 0% / 257〜384G 25.0% / 385〜512G 37.5%**。
- 当時パチマガスロマガ掲載実戦値B: **1〜128G 42.11% / 129〜256G 10.53% / 257〜384G 21.05% / 385〜512G 26.32% / 平均232.92G**。
- 同じパチマガスロマガページ本文には「128G以内37.5%」という記述もあり、表の42.11%と一致しない。
- これらは母集団・時点の異なる**実戦サンプル値**であり、解析上の真の振り分け率として平均しない。
- status: **CONFLICT_PRACTICAL_RESET_ZONE_SAMPLES_37_5_VS_42_11_AND_DIFFERENT_DISTRIBUTIONS**。

## conflicts / safeguards

- 通常天井の「999G+前兆」と「最大1024G」は同一仕様の表現差として分離して保持し、固定1024G解除と誤解しない。
- リセットモードの512Gは設定変更時専用であり、通常B704G・天国128Gとは別契約。
- リセット後の実戦ゾーン比率は資料間で異なるため平均しない。
- スマスロ「モンキーターンV」や後継モンキーターンIII/IVのリセット仕様を混入させない。
- ガックンや前兆タイミングは変更推測シグナルであり、単独で100%確定とは扱わない。

## sources

取得日: **2026-09-06**

1. 山佐ネクスト公式「パチスロ モンキーターン2」
   - https://yamasa-next.co.jp/model_mkt2/
   - 5号機、ATタイプ、2014年4月稼働、製品identity。
   - reliability: OFFICIAL

2. K-Navi「パチスロ モンキーターンII」
   - https://p-kn.com/slot/2017/
   - 2014-04-07ホール導入、純増約2.3枚/G、初回50G+α、AT初当たり。
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE

3. K-Navi「AT初当り確率」
   - https://p-kn.com/slot/2017/48875/
   - 設定1〜6 AT初当たり 1/294.1〜1/223.5。
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE

4. HAZUSE「パチスロ モンキーターンII」
   - https://hazuse.com/machine/pachislot/4S0051/
   - 型式モンキーターン2TT、検定4S0051、2014-04-07、50枚約31G、AT初当たり、通常/設定変更時天井、リセットモード100%。
   - reliability: ANALYSIS_HIGH

5. パチマガスロマガ「パチスロ モンキーターンII」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/196/a.php
   - 2014年4月、純増約2.3枚/G、初回50G+α。
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE

6. パチマガスロマガ「最速立ち回りポイント」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/196/10-1.php
   - リセットモード512G、設定変更後の実戦解除G数表、平均232.92G。本文37.5%と表42.11%の内部不一致も保持。
   - reliability: ANALYSIS_HIGH_PERIOD_PRACTICAL_WITH_INTERNAL_CONFLICT

7. パチ&スロ必勝本「通常時のポイント」
   - https://p.hisshobon.jp/machine/2363/1/45281
   - 設定変更時のみリセットモードへ移行、通常A999G+前兆/通常B704G/天国128G/リセット512G。
   - reliability: ANALYSIS_HIGH_PERIOD

8. 期待値見える化「モンキーターン2 朝一リセット」
   - https://slotjin.com/slot/monkeyturn2-morning/
   - 設定変更と電源OFF→ON（据え置き）の天井/モード差、ガックン、前兆判別、リセット後実戦値。
   - reliability: ANALYSIS_PERIOD_PRACTICAL

9. すろぱちくえすと「モンキーターン2 設定変更・リセットの見抜き方」
   - https://www.slopachi-quest.com/article/monkita-reset/
   - 2014-06当時資料。126〜128Gフェイク前兆終了、128G以内優出2回、据え置き示唆、ガックン実戦確認。
   - reliability: ANALYSIS_SINGLE_PERIOD_PRACTICAL

10. パチスロ最新解析@WIKI「モンキーターン2 ゾーン振り分け」
    - https://w.atwiki.jp/seruam/pages/19.html
    - 2014-04-28更新。設定変更後実戦値37.5/0/25/37.5%。
    - reliability: ANALYSIS_SINGLE_PERIOD_PRACTICAL

11. K-Navi「2014年4月新台導入カレンダー」
    - https://p-kn.com/calendar/201404/
    - 2014-04-07群4機および次の全国一斉導入日2014-04-21を確認。
    - reliability: ANALYSIS_HIGH_PERIOD_CALENDAR

## missingFields

- 設定変更時の低確/高確等、リセットモードとは別レイヤーの内部状態初期振り分け。
- メーカー公式によるガックン/前兆判別の保証契約。

## conflicts

- reset public practical zone samples: **37.5/0/25/37.5% vs 42.11/10.53/21.05/26.32%**。平均せず双方保持。
- パチマガスロマガ同一ページ内も「128G以内37.5%」本文と「1〜128G 42.11%」表が不一致。
