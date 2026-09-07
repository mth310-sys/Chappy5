# プレミアムビンゴ

machineName: プレミアムビンゴ
manufacturer: ベルコ
releaseDate: 2015-11-02
releaseDatePrecision: exact_hall_start_multi_source_with_schedule_conflict
recordNumber: 934
generation: 5号機
systemType: 旧基準AT / 周期抽選+CZ / ゲーム数上乗せ+継続型AT
formalModelName: スーパービンゴネオM1
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ベルコ公式製品ページで「プレミアムビンゴ」、2015年10月登場、5号機AT、設定別BC確率を公式確認。
- K-Navi機種ページ、P-Summa当時記事、パチセブン、複数攻略資料は全国ホール導入開始を **2015-11-02** としているため、本DBのホール導入canonicalは2015-11-02。
- 一方、2015-08-06のベルコ発表会を報じたK-Navi記事は「ホール導入は11月16日を予定」と記載。これは発表時点の予定日として保持し、実導入日と平均・統合しない。
- 型式名 **スーパービンゴネオM1** は中古実機流通資料・後年筐体DBなど複数資料で一致。検定番号は今回直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.13% |
| 2 | 99.04% |
| 3 | 101.05% |
| 4 | 104.06% |
| 5 | 107.18% |
| 6 | 111.00% |

- アタリ7等の解析資料で精密値を取得。
- 後年回顧資料では97.1 / 99.0 / 101.0 / 104.0 / 107.2 / 111.0%等の丸め表記あり。canonicalは精密値を保持し、丸め差として扱う。

## initialHitBySetting
主要初当たりとしてAT「BINGO CHANCE / BC」初当たりを採用。

| 設定 | BC初当たり |
|---:|---:|
| 1 | 1/433.99 |
| 2 | 1/407.68 |
| 3 | 1/387.71 |
| 4 | 1/357.75 |
| 5 | 1/325.29 |
| 6 | 1/291.30 |

- ベルコ公式は1/433.9 / 407.6 / 387.7 / 357.7 / 325.2 / 291.3を掲載。解析精密値との差は丸め差。

## baseGamesPer50
- canonical: **約29G/50枚**。
- パチセブンおよび解析整理資料で一致。

## netIncrease
- AT「ビンゴチャンス」: **約2.8枚/G**。
- ベルコ発表会記事、公式系製品情報、複数攻略資料で一致。

## basicPayout
- AT「ビンゴチャンス」: **1セット33G+α**。
- 初期G数決定時のHooah!発生率は約1/12。セブンドリームとの合算は約1/9。
- Hooah!発生時は3桁G数以上へ昇格する設計。

## modeSpecificMinimumData
- 通常時は周期抽選+CZ「THEセグ」からATを目指す。
- 通常最大天井: **AT間1222G**。到達でAT確定、Hooah!発生率が通常当選より優遇。
- モードBでは **555G+前兆** が天井相当。
- AT後/設定変更後のモード移行率: **モードA 63% / モードB 37%**。
- 1222G天井時Hooah!発生率: **約11%**。通常当選約8.1%、直7揃い約12%とは契機別に分離。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_HIGH_MULTI_SOURCE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井までのゲーム数を再セット/再抽選**。
- **内部状態を再抽選**。
- **内部モードを再抽選**。
- 開始ステージは **カジノステージ**。
- モードA/B振り分けはBC終了時と共通で **63% / 37%**。

### carryOverBehavior
- 据え置きは純電源OFF→ON比較表から、**天井・内部状態・内部モードを引継ぎ**と整理。
- 前日最終G数と当日G数の合計に依存したゾロ目前兆が出るため、据え置き推測材料になる。

### powerCycleBehavior
- 純電源OFF→ON:
  - 天井G数: **CARRYOVER**。
  - 内部状態: **CARRYOVER**。
  - 内部モード: **CARRYOVER**。
  - 表示ステージ: **カジノステージ**。
- K-Navi/アタリ7系の直接比較表と別系統解析整理で一致。

### gameCounterReset
- settingChange: **RESET / RESELECT**。
- carryOver: **CARRYOVER**。
- purePowerCycle: **CARRYOVER**。
- ペナルティ発生時は内部天井進行が延長される可能性があるため、液晶/データカウンター上の単純G数と内部天井進捗は一致しない場合がある。

### ceilingAfterReset
- 設定変更後もモードA/Bを **63% / 37%** で再抽選。
- モードA: 最大 **1222G**。
- モードB: **555G+前兆**。
- したがって設定変更時に約37%で通常最大より浅い555G天井相当が選択される。
- 「リセット専用でさらに短縮される別天井」は確認されておらず `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- settingChange: **RESELECT**。
- carryOver/purePowerCycle: **CARRYOVER**。
- 設定変更/BC終了時共通振り分け: **A 63% / B 37%**。

### stateAfterReset
- settingChange: **RESELECT**。
- purePowerCycle/carryOver: **CARRYOVER**。
- 内部高確の設定変更時初期振り分け数値は、再抽選契約自体は直接確認できるが、今回全設定共通の具体的初期比率を安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後はモードBが **37%** で選択され、555G+前兆が天井相当となる。
- 通常最大1222Gと比較すると朝一の浅い天井到達可能性が明確に上がる。
- リセット後の実戦ゾーンには偏り報告があるが、解析上の追加恩恵は確認されていないためcanonicalへ昇格しない。

### resetPenalties
- 前日の天井G数・内部モード・内部状態は設定変更で消去されるため、深いハマりの宵越し価値を失う。
- その他の設定変更固有不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一のゾロ目ゲーム数でフェイク前兆が発生すればリセット推測材料。前日最終G数との合計がゾロ目になる据え置き時は前兆位置がずれるため、内部依存型の判別材料になる。
- コインランプ点灯で据え置きの可能性、消灯でリセットの可能性とする当時実戦情報あり。ただしホール側で対策可能であり確定判別ではない。
- 精算音差による判別も当時攻略で取り上げられたが、対策可能かつ本機固有確定契約としては弱いため補助情報扱い。
- 本機固有のリールガックン確定契約は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- resetModeA: **63%**。
- resetModeB: **37%**。
- resetModeACeiling: **1222G**。
- resetModeBCeiling: **555G+前兆**。
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- `RELEASE_DATE_SCHEDULE_VS_ACTUAL`: K-Navi 2015-08-06発表会記事は **2015-11-16導入予定**。一方、K-Navi機種ページ、P-Summa当時記事、パチセブン、複数攻略資料は **2015-11-02導入開始**。本DBは実ホール導入として11/02をcanonical、11/16を発表時予定日として分離保持。
- `PAYOUT_ROUNDING`: 97.13/99.04/101.05/104.06/107.18/111.00% と 97.1/99.0/101.0/104.0/107.2/111.0% は丸め差。
- `RESET_MODE_SECONDARY_TYPO`: 期待値見える化のリセットページにはモードA63% / モードB67%という合計130%の表記があるが、同ページ本文は「AT終了後と同じ」、別ページおよびK-Navi/アタリ7は **A63% / B37%**。67%は明白な転記誤りとしてcanonicalに採用しない。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- reelGakkun: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. BELLCO公式 — プレミアムビンゴ
   - https://www.s-bellco.co.jp/products/slot/puremium_superbingo/
   - 公式名称、2015年10月登場、5号機AT、設定別BC確率。reliability: OFFICIAL
2. K-Navi — プレミアムビンゴ
   - https://p-kn.com/slot/2329/
   - 2015-11-02ホール導入開始、33G+α、純増約2.8枚/G、解析項目。reliability: ANALYSIS_HIGH / PERIOD_DB
3. K-Navi — Hooah!の発生確率がアップした「プレミアム ビンゴ」発表
   - https://p-kn.com/topics/exhibition/1385/
   - 2015-08-06発表会、純増約2.8枚/G、33G+α、11/16導入予定。reliability: INDUSTRY_PERIOD_REPORT
4. P-Summa — パチスロ『プレミアムビンゴ』のスペックがヤバイ
   - https://psumma.jp/pachislo/16846/
   - 2015-11-02導入開始、純増約2.8枚/G。reliability: PERIOD_SECONDARY
5. パチセブン — プレミアムビンゴ 通常時の打ち方
   - https://pachiseven.jp/machines/4596/cutout/70
   - 2015-11-02導入、約29G/50枚。reliability: ANALYSIS_HIGH
6. アタリ7 — プレミアムビンゴ
   - https://www.atari7.com/slot/date1439268148.php
   - 設定別BC初当たり/機械割、モードA/B 63/37、設定変更・電断比較、周期/状態解析。reliability: ANALYSIS_HIGH
7. ちょんぼりすた — プレミアムビンゴ
   - https://chonborista.com/slot/belko-slot/13832/
   - 11/02導入、1222G天井、Hooah契機別率。reliability: ANALYSIS_HIGH
8. 2-9伝説 — プレミアムビンゴ 天井恩恵・スペック解析
   - https://2-9densetsu.com/premiumbingo/
   - 1222G天井、555G仮天井、設定変更で天井リセット、11/02導入。reliability: PERIOD_ANALYSIS
9. 期待値見える化 — スーパービンゴプレミアム
   - https://slotjin.com/zone/bingopremium/
   - モードA/B 63/37、555G+前兆、周期値。reliability: ANALYSIS_SECONDARY
10. 期待値見える化 — 朝一リセット後の挙動
   - https://slotjin.com/slot/bingopremium-reset/
   - 前日合算G数依存の前兆、朝一判別。表のB67%は別資料との照合で転記誤り扱い。reliability: ANALYSIS_SECONDARY_WITH_TYPO
11. 真パチスロ備忘録 — プレミアムビンゴ リセ判別方法おさらい
   - https://sin-surobi.com/purebin/12938/
   - コインランプ/精算音による推測と対策可能性。reliability: PERIOD_PRACTICE_SINGLE
12. pachinko’s blog / 筐体・情報アーカイブ
   - https://pachinko.hatenablog.jp/archive/category/2017%E5%B9%B4%E6%96%B0%E5%9F%BA%E6%BA%96%E3%81%AB%E8%A9%B2%E5%BD%93%E3%81%97%E3%81%AA%E3%81%84%E5%9B%9E%E8%83%B4%E5%BC%8F%E9%81%8A%E6%8A%80%E6%A9%9F?orderBy=popular
   - 型式名スーパービンゴネオM1。reliability: ARCHIVE_SECONDARY

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SCHEDULE_CONFLICT
- officialIdentity: OFFICIAL
- formalModelName: ANALYSIS_MULTI_SOURCE_SECONDARY
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_HIT_RATES
- settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT_COMPARISON
- carryOverGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- purePowerCycleCeilingModeState: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetModeDistribution: ANALYSIS_HIGH_MULTI_SOURCE
- resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection: ANALYSIS_SECONDARY / PERIOD_PRACTICE
