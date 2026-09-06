# アナザーゴッドハーデス-奪われたZEUSver.-

machineName: アナザーゴッドハーデス-奪われたZEUSver.-
aliases: アナザーゴッドハーデス / ハーデス / アナゴ
manufacturer: ミズホ / UNIVERSAL ENTERTAINMENT
releaseDate: 2014-02-24
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: AT / ゲーム数上乗せ / CZ（HELL ZONE）
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- 型式名: **アナザーゴッドハーデス-X**。
- 検定番号: **3S0800**。
- ユニバーサル公式は「ミズホ / 5号機 / AT / 2014年2月発売」。HAZUSEとPachisevenはホール導入開始を **2014-02-24** とする。
- 2018年「冥王召喚」、2023年「解き放たれし槍撃ver.」とは別機種。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.23% |
| 2 | 99.82% |
| 3 | 102.78% |
| 4 | 106.30% |
| 5 | 111.12% |
| 6 | 116.30% |

- HAZUSEと2014年当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT（GOD GAME）初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/459.44 |
| 2 | 1/416.81 |
| 3 | 1/408.67 |
| 4 | 1/330.91 |
| 5 | 1/327.11 |
| 6 | 1/252.94 |

- HAZUSEと2014年当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約28G/50枚**。
- 当時資料は「1000円あたり約28G」、後年攻略資料も「約28G/50枚」と掲載。
- confidence: ANALYSIS_MULTI_SOURCE

## netIncrease

- AT「GOD GAME」: **約2.9枚/G**。
- ユニバーサル公式はゲーム数上乗せ特化型ATとして掲載。複数解析資料で純増約2.9枚/G。
- confidence: OFFICIAL_SYSTEM + ANALYSIS_MULTI_SOURCE

## basicPayout

- GOD揃い: **GG 100G + JUDGMENT 3個以上**。
- AT初当たり時はJUDGMENTを経由して初期ゲーム数を決定するゲーム数上乗せ型。
- 天井到達時は **PREMIUM OF HADES** が確定し、平均上乗せ約300Gとされる。

## modeSpecificMinimumData

- CZ「HELL ZONE」: 5 / 10 / 15G、GG当選期待度約25%。
- 通常時400G・800G到達時にHELL ZONE抽選管理の上位移行ポイントが存在。
- GOD揃い確率: 全設定共通 **1/8192**。

## ceiling

- GG終了後 **1570G + 最大前兆30G（実質最大1600G）**で天井。
- 天井GGはPREMIUM OF HADES確定。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_AND_POWER_CYCLE_CONTRACT_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更で **天井ゲーム数クリア**。
- 表モード（GG抽選モード）を再抽選。
- 裏モード / HELL ZONE状態も再抽選。
- 液晶ステージはアケロン、液晶出目は1・2・3。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 純据え置きでは前日の天井進捗・モード・HELL ZONE状態が保持されるとみてよい。電源OFF→ON比較表で引継ぎが直接確認できる。
- 宵越し天井狙いが成立する機種。
- confidence: ANALYSIS_HIGH

### powerCycleBehavior

- 設定変更なしの **電源OFF→ONのみ**では、天井までのゲーム数と内部モードを引き継ぐ。
- 当時解析では液晶ステージはアケロン、液晶出目は1・2・3へ揃うため、見た目だけでは設定変更と区別できない。
- HELL ZONE状態の電源OFF→ON引継ぎは複数の後年整理資料で示されるが、2014年当時資料の直接表では項目省略があるため confidence は一段下げる。
- confidence: ANALYSIS_HIGH_FOR_CEILING_MODE / ANALYSIS_SINGLE_CORROBORATED_FOR_HZ_STATE

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 電源OFF→ONのみ: **KEEP_CONFIRMED**。

### ceilingAfterReset

- 通常天井そのものは1570G+最大30G前兆。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 400G / 800GのHELL ZONE関連ポイントはリセット後にも存在するが、短縮天井ではない。

### modeAfterReset

- 設定変更で表モード再抽選。
- 公開設定変更時モード振り分け:

| 移行先 | 設1 | 設2 | 設3 | 設4 | 設5 | 設6 |
|---|---:|---:|---:|---:|---:|---:|
| 低確A | 44.30% | 42.89% | 41.80% | 39.51% | 40.50% | 38.55% |
| 低確B | 20.00% | 15.00% | 20.00% | 15.00% | 20.00% | 15.00% |
| 冥界 | 5.00% | 5.00% | 5.00% | 5.00% | 5.00% | 5.00% |
| 通常 | 18.05% | 25.00% | 18.05% | 25.00% | 18.05% | 25.00% |
| 天国準備 | 12.50% | 11.97% | 15.00% | 15.00% | 15.96% | 15.96% |
| 天国A | 0.10% | 0.10% | 0.10% | 0.39% | 0.39% | 0.39% |
| 天国B | 0.05% | 0.05% | 0.05% | 0.10% | 0.10% | 0.10% |

- 超天国への直接移行は0%。
- confidence: ANALYSIS_HIGH + PERIOD_SECONDARY_CORROBORATION

### stateAfterReset

- HELL ZONE抽選状態（裏モード）は設定変更時に再抽選。
- 公開振り分けは低確が大半で、高確ショートA/B・ミドルへの移行が設定別に存在。ホール経営用には「再抽選」「朝一ざわつきが生じ得る」までを主要挙動として採用し、全内部テーブルは実機完全再現不要のため省略。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機は2014年5号機ATで、後年の有利区間概念を持たない。

### resetBenefits

- リセット後は表/裏モードが再抽選され、朝一に奇数テンパイや鎖演出が通常の電源ON/OFF時より発生しやすいとする解析・回顧資料がある。
- これは確定恩恵ではなく、**PROBABILISTIC_MORNING_ACTIVITY**。
- リセット専用短縮天井は確認されない。

### resetPenalties

- 前日の天井進捗は設定変更で消滅するため、深いハマリ台では宵越し狙い価値を失う。
- その他の設定変更専用不利数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 朝一の **奇数テンパイ / 鎖演出頻発 / 液晶のざわつき**は設定変更推測材料。
- ただし確定判別ではない。
- 液晶出目1・2・3、アケロン開始は電源OFF→ONでも同様で、単独判別には使えない。
- ガックンについて本機固有の高信頼直接資料は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時の表モード振り分けは `modeAfterReset` 表の通り。
- リセット後orGG終了後400G/800G到達時に裏モード移行抽選が存在するが、朝一専用数値ではないためreset-only恩恵としては扱わない。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 2023年「解き放たれし槍撃ver.」の1400G天井・有利区間・朝一ヘルグレイヴ等を本機へ混入しない。
- 2018年「冥王召喚」の5.9号機有利区間・ガックン情報も別機種。
- 一部後年サイトに機械割97.43～115.82%等の異値がある。今回の本線はHAZUSEと2014年当時解析が一致する **97.23～116.30%** を採用し、異値は低優先二次資料として転記しない。

## sources

取得日: **2026-09-06**

1. ユニバーサルエンターテインメント公式「アナザーゴッドハーデス-奪われたZEUSver.-」
   - https://www.universal-777.com/product/slot/hades/
   - ミズホ / 5号機 / AT / 2014年2月発売 / ゲーム数上乗せ型AT。
   - confidence: OFFICIAL

2. HAZUSE「アナザーゴッドハーデス-奪われたZEUSver.-」
   - https://hazuse.com/machine/pachislot/3S0800/
   - 型式・検定番号・導入日・AT初当たり・機械割・天井。
   - confidence: ANALYSIS_HIGH_DATABASE

3. Pachiseven「アナザーゴッドハーデス-奪われたZEUS ver.-」
   - https://pachiseven.jp/machines/3000/cutout/131
   - 導入日2014-02-24 / AT / 天井GG間1570G+最大30G。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE

4. スロパチクエスト「アナザーゴッドハーデス 設定判別・設定差解析」2014-02-23
   - https://www.slopachi-quest.com/article/anothergod-hades-settei/
   - 設定別AT初当たり・機械割。
   - confidence: PERIOD_ANALYSIS

5. K-Navi「モード移行率(設定変更時)」
   - https://p-kn.com/slot/1997/48918/
   - 設定変更時の公開モード振り分け。
   - confidence: ANALYSIS_HIGH

6. 当時解析「アナザーゴッドハーデス 天井・設定変更」2014-05-07
   - https://slot-sokuhou777-777.seesaa.net/article/403145911.html
   - 設定変更: 天井RESET / モード・HZ状態再抽選 / 出目1・2・3 / アケロン。電源OFF: 天井・モード引継ぎ。
   - confidence: PERIOD_SECONDARY

7. CrankySeven「アナザーゴッドハーデス」
   - https://crankyseven.com/anothergodhades-pc.htm
   - 約28G/1000円、純増約2.9枚/G、天井、設定変更挙動。
   - confidence: ANALYSIS_SECONDARY

8. モゲスロ「アナザーゴッド ハーデス 宵越し・設定変更判別」2015-01-12
   - https://moge-site.com/archives/2154
   - 朝一奇数テンパイ・鎖演出等のリセット推測挙動。
   - confidence: RETROSPECTIVE_ANALYSIS

## missingFields

- 本機固有のガックンによる変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## nextQaNotes

- 当時ユニバーサル/ミズホのホール向け設定変更資料が発掘できた場合、電源OFF→ON時HELL ZONE状態の直接契約とガックン有無を再確認する。
