# パチスロ 陸奥圓明流外伝 修羅の刻

machineName: パチスロ 陸奥圓明流外伝 修羅の刻
manufacturer: SANKYO
releaseDate: 2015-04-20
releaseDatePrecision: exact_hall_start
releaseDateNote: SANKYO公式オンライン博物館は2015.04導入。HAZUSE、K-Navi、パチ＆スロ必勝本、パチ7、当時攻略記事が2015-04-20導入で一致するため、ホール導入日を2015-04-20でcanonical固定。
generation: 5号機
systemType: AT / 擬似ボーナス+AT / ゲーム数管理
modelName: パチスロ修羅の刻A
inspectionNumber: 4S0768
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **SANKYO**。
- 販売名: **パチスロ 陸奥圓明流外伝 修羅の刻**。
- 型式名: **パチスロ修羅の刻A**。SANKYO公式オンライン博物館とHAZUSEで一致。
- 検定番号: **4S0768**（HAZUSE）。
- 導入: **2015-04-20**。SANKYO公式は2015.04、HAZUSE/K-Navi/必勝本/パチ7/当時攻略記事は2015-04-20で一致。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.8% |
| 3 | 100.8% |
| 4 | 105.1% |
| 5 | 108.4% |
| 6 | 110.3% |

- HAZUSE、パチ＆スロ必勝本、K-Navi、複数当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

主要初当たりは擬似ボーナス初当たり（全ボーナス終了後ATへ移行）。

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/394.2 |
| 2 | 1/373.2 |
| 3 | 1/353.0 |
| 4 | 1/315.5 |
| 5 | 1/288.3 |
| 6 | 1/275.4 |

- SANKYO公式スペックは合成約1/394→1/275、HAZUSE/必勝本/K-Navi/複数解析で精密系列が一致。
- confidence: OFFICIAL_RANGE + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約34G/50枚**（設定1〜6共通目安）。
- HAZUSE基本スペックが約34G、期待値見える化/後年解析も34G/50枚で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「伝承RUSH」: **約3.0枚/G**。
- SANKYO公式オンライン博物館、必勝本、K-Navi、パチ7、複数解析で一致。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 擬似ボーナス終了後は必ずAT「伝承RUSH」へ移行。
- BIG BONUS: **30G**。
- SUPER BIG BONUS: **10G**。
- EXボーナス「修羅の刻」: **10G**。
- REGULAR BONUS: **20G**。
- AT「伝承RUSH」: **20G+α**、ゲーム数上乗せ型、純増約3.0枚/G。
- SANKYO公式/HAZUSE/中古実機資料で大枠一致。
- confidence: OFFICIAL + ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はゲーム数管理モードを持ち、天国は100G以内当選。
- 通常最大天井: **1300G**。
- 1000G以降の当たりはBIG以上、1200G以降はSBB確定とする当時解析あり。朝一リセット比較に必要な範囲でのみ保持。
- CZ「武闘の刻」、修羅珠5個MAXによるCZ/ボーナス等抽選を搭載。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_MACHINE_SPECIFIC_POWER_CYCLE_AND_RESET_NUMERICS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井/ハマりゲーム数を0Gから再スタート**。
- **内部モードを再抽選**。
- **内部状態は高確以上確定**。
- **修羅珠は0個へリセット**。
- 液晶ステージは原則 **千葉道場**。
- 当日ゲーム数基準のゾーン/前兆挙動となる。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RESET

### carryOverBehavior

- 据え置き時は **ハマりゲーム数を引継ぎ**。
- **内部モードを引継ぎ**。
- **内部状態を引継ぎ**。
- **修羅珠を引継ぎ**。
- 朝一表示上は千葉道場開始が基本で、見た目だけでは設定変更/据え置きを即断しにくい。
- 宵越し内部ゲーム数側のゾーンで前兆が起きる挙動が据え置き推測材料。
- confidence: ANALYSIS_HIGH_FOR_CORE_CARRYOVER; ANALYSIS_SINGLE_FOR_PREMONITION_DETAIL

### powerCycleBehavior

- 設定変更なしの **電源OFF→ONでは天井ゲーム数を引継ぎ、内部モードも引継ぎ**とする本機固有解析を確認。
- 朝一ステージは原則 **千葉道場**。通常時以外の一部状態では表示挙動に例外があるとされるため、全状態の液晶復帰契約までは一般化しない。
- 内部状態・修羅珠については、据え置き契約と独立した純電断資料の記述が弱いため、純電断専用の完全契約としては過剰拡張しない。
- confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER_AND_MODE; ANALYSIS_SINGLE_FOR_STAGE_DETAIL

### gameCounterReset

- 設定変更: **RESET_TO_0**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- リセット専用の固定短縮天井は確認されていない。
- ただし設定変更時のモード再抽選により **天国約20% → 100G以内当選**が存在するため、結果として朝一の一部が短くなる。
- 通常最大天井は **1300G**。
- `NO_FIXED_RESET_CEILING_REDUCTION; MODE_DEPENDENT_EARLY_HIT_EXISTS`。

### modeAfterReset

設定変更時モード振り分け:

| モード | 振り分け |
|---|---:|
| 通常A | 約69.7〜70% |
| 通常B | 約10.3〜10% |
| 天国 | 20.0% |

- 天国は100G以内当選。
- 通常Bは300G以内当選に期待できるモードとされる。
- 据え置き/純電断時はモード引継ぎ。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

設定変更時:

| 状態 | 振り分け |
|---|---:|
| 低確 | 0% |
| 高確 | 約90% |
| 超高確 | 約10% |

- **高確以上スタート確定**。
- 据え置き時は内部状態引継ぎ。
- 純電断時の状態単独契約は直接資料が弱いため `UNVERIFIED_AFTER_RESEARCH_FOR_STATE_ONLY` とする。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SETTING_CHANGE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更後は **高確以上確定**。
- **天国20%**で100G以内当選。
- 通常B約10%も朝一の比較上は早めの当選期待を持つ。
- ただし天井Gと修羅珠がリセットされるため、前日ハマりや修羅珠蓄積を消す不利と併存。

### resetPenalties

- **前日ハマりゲーム数が消滅**。
- **修羅珠が0個へリセット**。
- 天井狙い/修羅珠狙いという本機の主要期待値要素を消すため、据え置き狙い客には大きな不利要素。
- 一律の出玉ペナルティ抽選を意味するものではない。

### resetDetection

- 朝一ステージは設定変更/電源ON-OFFとも原則千葉道場のため、ステージ単独での変更判別は弱い。
- 設定変更後は高確以上確定のため、朝一レア小役なしで高確示唆ステージへ移行した場合は変更推測材料。
- 修羅珠は設定変更で0、据え置きで引継ぎ。朝一に大きな契機なしで修羅珠由来のCZ等が発生すれば据え置き推測材料。
- 宵越し内部ゲーム数側のゾロ目/ゾーン前兆が発生し当日ゲーム数側では発生しない場合も据え置き推測材料。
- 本機固有の信頼できる **ガックン契約は確認できず** `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時モード: **通常A 約69.7〜70% / 通常B 約10.3〜10% / 天国20.0%**。
- 設定変更時状態: **低確0% / 高確約90% / 超高確約10%**。
- 天国モード天井: **100G**。
- リセット専用固定短縮天井: **NONE_CONFIRMED**。
- 修羅珠: **設定変更時0個 / 据え置き時引継ぎ**。

## release group / boundary audit

- 最新handoffの指示に従い、2015-04-07〜04-12を具体日/新台/スロット/パチスロで再監査したが、今回新規登録すべき5号機を強く固定できず `2015-04-07_TO_2015-04-12_CLOSED_FOR_CURRENT_RESEARCH`。
- 2015-04-13についても「2015年4月13日 / 2015/04/13 / 4月13日導入」+ パチスロ/スロット/新台、当時カレンダー/検索を横断。強く固定できる同日新規はパチンコ側が中心で、未登録パチスロを今回固定できなかった。
- 2015-04-14〜04-19も境界検索で未登録5号機を強く固定できず、`2015-04-13_TO_2015-04-19_CLOSED_FOR_CURRENT_RESEARCH`。
- 次の強いパチスロ導入アンカーとして **2015-04-20 パチスロ 修羅の刻** を複数資料で固定しNo.882として追加。
- 04-20同日群はまだOPEN。次回は全メーカー横断で同日候補を監査し、未処理があれば次レコードとして追加する。

## sources

取得日: **2026-09-07**

### OFFICIAL

1. SANKYOオンライン博物館「パチスロ 陸奥圓明流外伝 修羅の刻」
   - https://www.sankyo-fever.jp/collection/614/
   - 2015.04導入、SANKYO、販売名/型式名、純増約3.0枚/G、公式スペック、ゲーム性。

### DATABASE / ANALYSIS

2. HAZUSE「パチスロ 修羅の刻」
   - https://hazuse.com/machine/pachislot/4S0768/
   - 導入2015-04-20、型式パチスロ修羅の刻A、検定4S0768、基本仕様。
3. HAZUSE 基本スペック
   - https://hazuse.com/machine/pachislot/4S0768/genre/201/
   - AT初当たり、機械割、50枚約34G。
4. パチ＆スロ必勝本 基本スペック
   - https://p.hisshobon.jp/machine/2554/1/51584
   - 2015-04-20導入、設定別初当たり/機械割、純増3.0枚/G、AT20G以上。
5. K-Navi「パチスロ 修羅の刻」
   - https://p-kn.com/slot/2237/
   - ホール導入2015-04-20、設定別初当たり/機械割、概要。
6. パチ7「パチスロ 修羅の刻」
   - https://pachiseven.jp/machines/4460/cutout/94
   - 導入2015-04-20、SANKYO、通常時解析。
7. パチマガスロマガ「陸奥圓明流外伝 パチスロ修羅の刻」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/36/l.php
   - ボーナス/AT/CZの基本ゲーム性。
8. スロット期待値.com / すろぱちくえすと「修羅の刻 設定変更・リセット時の恩恵・据え置きの挙動など」
   - https://www.slopachi-quest.com/article/syuranotoki-reset/
   - 設定変更/据え置き、モード・状態・修羅珠・ステージ、公開リセット数値。
9. 期待値見える化「修羅の刻 天井期待値・ゾーン・狙い目・やめどき・朝一リセット解析」
   - https://slotjin.com/zone/shuranotoki/
   - 設定変更/電源OFF→ONの天井・モード、天国約20%、通常B約10%、50枚34G。
10. イチカツ！「修羅の刻 朝一設定変更後の挙動・恩恵とリセット判別方法」
   - https://ichikatsu.com/shuranotoki-asaiti/
   - 通常A69.7%/通常B10.3%/天国20.0%、高確以上、千葉道場、修羅珠/前兆による据え置き推測。
11. すろぱちくえすと「修羅の刻 天井恩恵・狙い目・ヤメ時・スペック解析」
   - https://www.slopachi-quest.com/article/syura-time/
   - 1300G天井、1000G/1200G以降の恩恵、導入2015-04-20。
12. PiDEA X「三木流 修羅の刻・超研究」（2015-03-15）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E4%BF%AE%E7%BE%85%E3%81%AE%E5%88%BB%E3%83%BB%E8%B6%85%E7%A0%94%E7%A9%B6%E3%80%8D
   - 当時業界評価、純増3.0枚/GのAT機。

## missingFields

- 純電源OFF→ON時の「内部状態」単独の完全契約は、据え置き一般記述から推定せず `UNVERIFIED_AFTER_RESEARCH_FOR_STATE_ONLY`。
- 本機固有ガックン契約は検索語を変えて再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- 主要性能コアに重大な数値CONFLICTなし。
- 設定変更時モードの「約70/10/20%」と精密「69.7/10.3/20.0%」は丸め差として同系列扱い。
- 天井表現は「1300G」と、1000G以降BIG以上/1200G以降SBBという段階恩恵を別定義として保持し、単純競合扱いしない。
